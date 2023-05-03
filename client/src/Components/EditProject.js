import React, { useEffect, useRef } from "react";
import * as Tone from "tone";
import { useState } from "react";
import EditMeasure from "./EditMeasure";

function EditProject(project) {
    const [measures, setMeasures] = useState([])
    const [duration, setDuration] = useState("Eighth")
    const [tabData, setTabData] = useState([])
    const [newTabData, setNewTabData] = useState([])
    const measureCountRef = useRef(0)

    // const synth = new Tone.Synth().toDestination();
    // const note = Tone.Frequency('C4').toNote();
    // synth.triggerAttackRelease(note, "4n");

    const handleClick = () => {
        setMeasures([...measures, { id: measures.length }])
        setNewTabData([...newTabData, { measure: measureCountRef.current + measures.length, beat: 1, string: 1, fret: "" }])
    }

    const handleSelectChange = (e) => {
        setDuration(e.target.value)
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

    useEffect(() => {
        fetch(`/tab_data/${project.project.id}`)
            .then((r) => r.json())
            .then((data) => {
                setTabData(sortedTabData(data))
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
        measureCountRef.current = parseInt(count) + 1
        return <EditMeasure project_id={project.project.id} bpm={project.project.bpm} key={count} tabData={notes} setTabData={setTabData} duration={duration} measure={count} />
    }) : null

    const newGroupedMeasures = newTabData ? newTabData.reduce((r, a) => {
        const measure = a.measure
        if (!r[measure]) {
            r[measure] = []
        }
        r[measure].push(a)
        return r
    }, {}) : null

    const newMeasuresToDisplay = newGroupedMeasures ? Object.keys(newGroupedMeasures).map((measure) => {
        const notes = newGroupedMeasures[measure]
        const count = measure
        return <EditMeasure key={count} project_id={project.project.id} bpm={project.project.bpm} tabData={notes} setTabData={setNewTabData} duration={duration} measure={count} />
    }) : null

    const handleSubmitClick = () => {
        const tabDataArray = sortedTabData([...tabData.filter((data) => !(isNaN(data.fret))), ...newTabData.filter((data) => "fret" in data && data.fret !== null && data.fret !== '' && !(isNaN(data.fret)))])
        console.log(tabDataArray)
        const tuning = [64, 59, 55, 50, 45, 40];
        const synth = new Tone.PolySynth().toDestination();

        const play = () => {
            tabDataArray.forEach(note => {
                const frequency = Tone.Frequency(tuning[note.string - 1] + note.fret, "midi").toFrequency();
                const time = note.time + Tone.now();
                const duration = "8n";
                synth.triggerAttackRelease(frequency, duration, time);
            });
        };
        play()
    }


    return (
        <div>
            <p className="text-4xl">{project.project.title}</p>
            <p className="text-2xl">Artist: {project.project.artist}</p>
            <p className="text-2xl">Tuning: {project.project.tuning}</p>
            <p className="text-2xl">Capo: {project.project.capo}</p>
            <button onClick={handleClick} className="text-2xl border border-black bg-black text-white rounded-md">Add Measure</button>
            <select onChange={handleSelectChange}>
                <option>Eighth</option>
                <option>Quarter</option>
                <option>Half</option>
                <option>Whole</option>
            </select>
            <div className="flex flex-wrap">
                {measuresToDisplay}
                {newMeasuresToDisplay}
            </div>
            <button onClick={handleSubmitClick} id='asdf' className="text-2xl border border-black bg-black text-white rounded-md">Submit data</button>
        </div>
    )
}

export default EditProject