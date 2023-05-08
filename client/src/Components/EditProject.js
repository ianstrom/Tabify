import React, { useEffect, useRef, createContext } from "react";
import * as Tone from "tone";
import { useState } from "react";
import EditMeasure from "./EditMeasure";
import { useParams, useNavigate } from "react-router-dom";
import ConfigTuning from "./ConfigTuning";

function EditProject({ project, setProjectToView }) {
    const [measures, setMeasures] = useState([])
    const [duration, setDuration] = useState()
    const [tabData, setTabData] = useState([])
    const [newTabData, setNewTabData] = useState([])
    const [edit, setEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [formData, setFormData] = useState({
        title: project?.title,
        artist: project?.artist,
        tuning: project?.tuning,
        capo: project?.capo,
        bpm: project?.bpm,
        user_id: project?.user_id,
        visibility: project?.visibility
    })
    const navigate = useNavigate()
    const measureCountRef = useRef(0)
    const params = useParams()

    useEffect(() => {
        fetch(`/tabs/${params.id}`)
            .then(r => r.json())
            .then(data => {
                setProjectToView(data)
            })
    }, [])
    console.log(newTabData)
    useEffect(() => {
        if (newTabData.length > 0) {
            sessionStorage.setItem("newTabData", 1)
        }
    }, [newTabData])

    const handleClick = () => {
        setMeasures([...measures, { id: measures.length }])
        setNewTabData([...newTabData, { measure: measureCountRef.current + measures.length, time: "", beat: 1, string: 1, fret: "", duration: "", project_id: project?.id }])
    }

    const handleSelectChange = (e) => {
        setDuration(e.target.value)
    }

    const handlePublishHideClick = () => {
        fetch(`/tabs/${project?.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ visibility: !project?.visibility }),
        })
            .then((r) => r.json())
            .then((data) => {
                setProjectToView(data)
            })
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
        fetch(`/tab_data/${project?.id}`)
            .then((r) => r.json())
            .then((data) => {
                if (data.length < 1) {
                    setMeasures([...measures, { id: measures.length + 1 }])
                    setNewTabData([...newTabData, { measure: 1, time: "", beat: 1, string: 1, fret: "", duration: "", project_id: project?.id }])
                    measureCountRef.current = 1
                } else {
                    setTabData(sortedTabData(data))
                }
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
        return <EditMeasure project_id={project?.id} bpm={project?.bpm} key={count} tabData={notes} setTabData={setTabData} duration={duration} measure={count} />
    }) : setNewTabData([...newTabData, { measure: measureCountRef.current + measures.length, beat: 1, string: 1, fret: "" }])

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
        return <EditMeasure key={count} project_id={project?.id} bpm={project.bpm} tabData={notes} setTabData={setNewTabData} duration={duration} measure={count} />
    }) : null


    const handleSubmitClick = () => {
        const tabDataArray = sortedTabData([...tabData.filter((data) => !(isNaN(data.fret))), ...newTabData])
        console.log(tabDataArray)
        fetch(`/tab_data/${project?.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tabDataArray),
        })
            .then((r) => r.json())
            .then((data) => {
                setTabData(sortedTabData(data))
                setNewTabData()
                sessionStorage.removeItem("newTabData")
            }
            )

    }

    const handlePlayClick = () => {
        const tabDataArray = sortedTabData([...tabData.filter((data) => "fret" in data && data.fret !== null && data.fret !== '' && !(isNaN(data.fret))), ...newTabData.filter((data) => "fret" in data && data.fret !== null && data.fret !== '' && !(isNaN(data.fret)))])
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

    const handleEditClick = () => {
        setEdit(!edit)
    }

    const handleEditParentClick = (e) => {
        if (!e.target.closest('form')) {
            setEdit(!edit)
        }
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()
        fetch(`/tabs/${project?.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((data) => {
                setProjectToView(data)
                setEdit(!edit)
            })
    }

    const handleDeleteClick = () => {
        setIsDelete(!isDelete)
    }

    const handleDelete = () => {
        fetch(`/tabs/${project?.id}`, {
            method: "DELETE",
        })
        .then(navigate("/"))
    }

    const handleDeleteParentClick = (e) => {
        if (e.target.closest('span')) {
            setIsDelete(!isDelete)
        }
    }

    return (
        <>
            {edit ? (
                <div onClick={handleEditParentClick} className="absolute flex justify-center items-center w-full h-full z-50 bg-black bg-opacity-70">
                    <form onSubmit={handleEditSubmit} className="md:flex h-1/2 w-1/4 text-md flex flex-col bg-gray-700 border border-gray-900 p-6 rounded-lg justify-center text-center">
                        <label className="mb-2">Song Name:</label>
                        <input onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} type="text" className="border border-gray-600 rounded-lg text-black px-2 py-1 mb-4 text-center" name="song"></input>
                        <label className="mb-2">Artist:</label>
                        <input onChange={(e) => setFormData({ ...formData, artist: e.target.value })} value={formData.artist} type="text" className="border border-gray-600 rounded-lg text-black px-2 py-1 mb-4 text-center" name="artist"></input>
                        <label className="mb-2">Tuning:</label>
                        <input onChange={(e) => setFormData({ ...formData, tuning: e.target.value })} value={formData.tuning} type="text" className="border border-gray-600 rounded-lg text-black px-2 py-1 mb-4 text-center" name="tuning"></input>
                        <label className="mb-2">Capo:</label>
                        <input onChange={(e) => setFormData({ ...formData, capo: e.target.value })} value={formData.capo} type="text" className="border border-gray-600 rounded-lg text-black px-2 py-1 mb-4 text-center" name="capo"></input>
                        <label className="mb-2">BPM:</label>
                        <input onChange={(e) => setFormData({ ...formData, bpm: e.target.value })} value={formData.bpm} type="text" className="border border-gray-600 rounded-lg text-black px-2 py-1 mb-4 text-center" name="bpm"></input>
                        <div>
                            <button className="border border-gray-600 w-1/2 rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Cancel</button>
                            <button className="border border-gray-600 w-1/2 rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Update</button>
                        </div>
                    </form>
                </div>
            ) : null}
            {isDelete ? (
                <span onClick={handleDeleteParentClick} className="absolute flex justify-center items-center w-full h-full z-50 bg-black bg-opacity-70">
                    <div className="md:flex h-1/8 w-1/4 text-md flex flex-col bg-gray-700 border border-gray-900 p-6 rounded-lg justify-center text-center">
                        <p className="mb-4">Are you sure you want to delete this project?</p>
                        <div className="gap-1 flex">
                            <button onClick={handleDeleteClick} className="border border-gray-600 w-1/2 rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Cancel</button>
                            <button onClick={handleDelete} className="border border-gray-600 w-1/2 rounded-lg px-4 py-2 bg-red-600 hover:bg-red-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Delete</button>
                        </div>
                    </div>
                </span>
            ) : null}
            <div className="relative ml-52">
                <p className="text-4xl mt-8 max-w-4xl font-bold leading-tight mb-2 sm:text-5xl md:text-6xl">{project?.title}</p>
                <p className="text-lg sm:text-xl md:text-2xl">Artist: {project?.artist}</p>
                <p className="text-lg sm:text-xl md:text-2xl">Tuning: {project?.tuning}</p>
                <p className="text-lg sm:text-xl md:text-2xl">Capo: {project?.capo}</p>
                <div className="text-2xl flex gap-4 fixed top-8 right-10">
                    <button onClick={handleEditClick} className="text-2xl border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800">Edit</button>
                    <button onClick={handleDeleteClick} className="text-2xl border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800">Delete</button>
                    <button onClick={handleReviewClick} className="text-2xl border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800">Reviews</button>
                    <button onClick={handlePublishHideClick} className="text-2xl border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800">{project?.visibility ? "Hide" : "Publish"}</button>
                </div>
                <div className="flex flex-wrap mb-52">
                    {measuresToDisplay}
                    {newMeasuresToDisplay}
                </div>
                <div className="flex gap-4 z-10 fixed bg-gray-900 bottom-0 w-screen p-5 right-0">
                    <div className="flex gap-4 ml-52">
                        <button onClick={handleClick} className="text-2xl border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800">Add Measure</button>
                        <button onClick={handleSubmitClick} id='asdf' className="text-2xl border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800">Submit data</button>
                        <button className="text-2xl border transition-colors duration-300 border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-800" onClick={handlePlayClick}>Play</button>
                        <div className="relative inline-flex">
                            <select id="duration" defaultValue="Choose" onChange={handleSelectChange} className="appearance-none transition-colors duration-300 bg-transparent border border-white text-white px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none hover:bg-white hover:bg-opacity-90 hover:text-gray-800">
                                <option value="Choose" disabled>Choose a duration</option>
                                <option value="0.5">Eighth</option>
                                <option value="1">Quarter</option>
                                <option value="2">Half</option>
                                <option value="4">Whole</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 12l-6-6h12z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProject