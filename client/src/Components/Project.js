import React, { useEffect } from "react";
import Measure from "./Measure";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Tone from "tone";
import ConfigTuning from "./ConfigTuning";

function Project({ project, setProjectToView }) {
    const [tabData, setTabData] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/tabs/${params.id}`)
            .then(r => r.json())
            .then(data => {
                setProjectToView(data)
            })
    }, [])

    useEffect(() => {
        fetch(`/tab_data/${project?.id}`)
            .then((r) => r.json())
            .then((data) => {
                setTabData(data)
            })
    }, [project])

    const groupedMeasures = tabData ? tabData.reduce((r, a) => {
        const measure = a.measure
        if (!r[measure]) {
            r[measure] = []
        }
        r[measure].push(a)
        return r
    }, {}) : null

    const measuresToDisplay = groupedMeasures ? Object.keys(groupedMeasures).map((measure) => {
        const notes = groupedMeasures[measure]
        return <Measure key={Math.random()} tabData={notes} />
    }) : null

    const handleReviews = () => {
        navigate(`/reviews/${project?.id}`)
    }

    const handleYourProjects = () => {
        navigate(`/your_projects`)
        setProjectToView()
    }

    const handleHome = () => {
        navigate(`/`)
        setProjectToView()
    }

    const sortedTabData = (data) => {
        return data.sort((a, b) => {
            if (a.measure < b.measure) {
                return -1;
            } else if (a.measure > b.measure) {
                return 1;
            } else {
                return a.beat - b.beat;
            }
        })
    }

    const handlePlayClick = () => {
        const tabDataArray = sortedTabData([...tabData.filter((data) => "fret" in data && data.fret !== null && data.fret !== '' && !(isNaN(data.fret)))])
        console.log(tabDataArray)
        const tuning = project?.tuning.split("").reduce((acc, note, i, arr) => {
            const nextChar = project?.tuning[i + 1]
            if (nextChar === "#") {
                note += "#"
                arr.splice(i + 1, 1)
            }
            acc[6 - i] = ConfigTuning[`string${6 - i}`][note];
            return acc;
        }, {});

        const synth = new Tone.PolySynth().toDestination();

        Tone.Transport.cancel()

        for (let i = 0; i < tabDataArray.length; i++) {
            const note = tabDataArray[i]
            const frequency = Tone.Frequency((tuning[note.string] + note.fret + parseInt(project.capo)), "midi").toFrequency();
            const time = note.time + Tone.now();
            Tone.Transport.schedule((time) => {
                synth.triggerAttackRelease(frequency, note.duration, time);
            }, time.toString())
        }

        Tone.Transport.start()
    }

    const handleReviewClick = () => {
        navigate(`/reviews/${project?.id}`)
    }

    return (
        <div className="relative ml-52">
            <p className="text-4xl mt-8 font-bold leading-tight mb-2 sm:text-5xl md:text-6xl">{project?.title}</p>
            <p className="text-lg sm:text-xl md:text-2xl">Artist: {project?.artist}</p>
            <p className="text-lg sm:text-xl md:text-2xl">Tuning: {project?.tuning}</p>
            <p className="text-lg sm:text-xl md:text-2xl">Capo: {project?.capo}</p>
            <div className="text-2xl flex gap-4 fixed top-8 right-10">
                <button onClick={handleReviewClick} className="text-2xl border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800">Reviews</button>
            </div>
            <div className="flex mb-52 flex-wrap mt-3">
                {measuresToDisplay}
            </div>
            <div className="flex fixed bg-gray-900 bottom-0 w-screen right-0">
                <button className="text-2xl mb-5 ml-52 border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800" onClick={handlePlayClick}>Play</button>
            </div>
            
        </div>
    )
}

export default Project