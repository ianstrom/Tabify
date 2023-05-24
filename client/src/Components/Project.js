import React, { useEffect, useRef } from "react";
import * as Tone from "tone";
import { useState } from "react";
import Measure from "./Measure";
import { useParams, useNavigate } from "react-router-dom";
import ConfigTuning from "./ConfigTuning";
import Loading from "./Loading";

function Project({ project, setProjectToView }) {
    const [tabData, setTabData] = useState([])
    const [playOrPause, setPlayOrPause] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const [currentBeat, setCurrentBeat] = useState(1)
    const [currentMeasure, setCurrentMeasure] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [maxMeasure, setMaxMeasure] = useState(0)


    useEffect(() => {
        setIsLoading(true)
        fetch(`/tabs/${params.id}`)
            .then(r => r.json())
            .then(data => {
                setProjectToView(data)
                setIsLoading(false)
            })
            playFromBeginning()
    }, [])

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

    useEffect(() => {
        setIsLoading(true)
        fetch(`/tab_data/${project?.id}`)
            .then((r) => r.json())
            .then((data) => {
                setTabData(sortedTabData(data))
                setIsLoading(false)
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
        const count = measure
        return <Measure key={count} tabData={notes} setTabData={setTabData} measure={count} />
    }) : null

    const handlePlayClick = () => {
        let tabDataArray = sortedTabData([...tabData.filter((data) => "fret" in data && data.fret !== null && data.fret !== '' && !(isNaN(data.fret)))])
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

            if (note) {

                const frequency = Tone.Frequency((tuning[note.string] + note.fret + parseInt(project.capo)), "midi").toFrequency();
                const time = note.time;
                Tone.Transport.schedule((time) => {
                    synth.triggerAttackRelease(frequency, note.duration, time);
                }, time.toString())

            }
        }

        const elements = document.querySelectorAll("[class*='beat'][class*='Measure']")
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.cssText = ""
        }

        setPlayOrPause(!playOrPause)
        Tone.Transport.start()
    }

    const handleReviewClick = () => {
        navigate(`/reviews/${project?.id}`)
    }

    const handleStopClick = () => {
        Tone.Transport.pause()
        setPlayOrPause(!playOrPause)
    }

    const playFromBeginning = () => {
        const elements = document.querySelectorAll("[class*='beat'][class*='Measure']")
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.cssText = ""
        }
        Tone.Transport.seconds = 0
        if (playOrPause) {
            Tone.Transport.stop()
            setPlayOrPause(!playOrPause)
        }
        setCurrentBeat(1)
        setCurrentMeasure(1)
    }

    useEffect(() => {
        const eigthNoteTime = (60 / project?.bpm) / 4
        if (playOrPause) {
            let beat = currentBeat
            let measure = currentMeasure
            console.log(beat, measure)
            Tone.Transport.start();
            Tone.Transport.scheduleRepeat((time) => {
                const before = document.getElementsByClassName(`beat${beat}Measure${measure}`)
                if (before.length > 0) {
                    before[0].style.cssText = ""
                    before[1].style.cssText = ""
                    before[2].style.cssText = ""
                    before[3].style.cssText = ""
                    before[4].style.cssText = ""
                    before[5].style.cssText = ""
                    if (beat === 16) {
                        beat = 1
                        measure++
                    } else {
                        beat++
                    }
                    const after = document.getElementsByClassName(`beat${beat}Measure${measure}`)
                    if (after.length > 0) {
                        const afterstyle = "background-image: linear-gradient(to right, transparent, transparent, rgba(255, 0, 0, 1), transparent, transparent); z-index: 40"
                        after[0].style.cssText = afterstyle
                        after[1].style.cssText = afterstyle
                        after[2].style.cssText = afterstyle
                        after[3].style.cssText = afterstyle
                        after[4].style.cssText = afterstyle
                        after[5].style.cssText = afterstyle
                        setCurrentBeat(beat)
                        setCurrentMeasure(measure)
                    } else {
                        playFromBeginning()
                    }
                }
            }, eigthNoteTime, "0:0:0");
        }

    }, [playOrPause])

    return (
        <>
            {isLoading ? <Loading /> : null}
            <div className="relative ml-52">
                <p className="text-4xl mt-8 max-w-4xl font-bold leading-tight mb-2 sm:text-5xl md:text-6xl">{project?.title}</p>
                <p className="text-lg sm:text-xl md:text-2xl">Artist: {project?.artist}</p>
                <p className="text-lg sm:text-xl md:text-2xl">Tuning: {project?.tuning}</p>
                <p className="text-lg sm:text-xl md:text-2xl">Capo: {project?.capo}</p>
                <p className="text-lg sm:text-xl md:text-2xl">BPM: {project?.bpm}</p>
                <p className="text-md sm:text-lg md:text-lg">Author: {project?.username}</p>
                <div className="text-2xl z-10 flex gap-4 fixed top-8 right-10">
                    <button onClick={handleReviewClick} className="text-2xl border bg-gray-800 transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800">Reviews</button>
                </div>
                <div className="flex flex-wrap mb-52">
                    {measuresToDisplay}
                </div>
                <div className="flex gap-4 z-10 fixed bottom-0 w-screen p-5 right-0">
                    <div className="flex gap-4 ml-52">
                        {playOrPause ? (
                            <button className="text-2xl border bg-gray-900 transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800" onClick={handleStopClick}>Pause</button>
                        ) : (
                            <button className="text-2xl border bg-gray-900 transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800" onClick={handlePlayClick}>Play</button>
                        )}
                        <button className="text-2xl border bg-gray-900 transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800" onClick={playFromBeginning}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project