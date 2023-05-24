import React, { useEffect } from "react";
import { useState } from "react";

function EditMeasure({ bpm, measure, duration, setDuration, setTabData, tabData, project_id }) {
    const [string1Beat1, setString1Beat1] = useState("")
    const [string1Beat2, setString1Beat2] = useState("")
    const [string1Beat3, setString1Beat3] = useState("")
    const [string1Beat4, setString1Beat4] = useState("")
    const [string1Beat5, setString1Beat5] = useState("")
    const [string1Beat6, setString1Beat6] = useState("")
    const [string1Beat7, setString1Beat7] = useState("")
    const [string1Beat8, setString1Beat8] = useState("")
    const [string1Beat9, setString1Beat9] = useState("")
    const [string1Beat10, setString1Beat10] = useState("")
    const [string1Beat11, setString1Beat11] = useState("")
    const [string1Beat12, setString1Beat12] = useState("")
    const [string1Beat13, setString1Beat13] = useState("")
    const [string1Beat14, setString1Beat14] = useState("")
    const [string1Beat15, setString1Beat15] = useState("")
    const [string1Beat16, setString1Beat16] = useState("")
    const [string2Beat1, setString2Beat1] = useState("")
    const [string2Beat2, setString2Beat2] = useState("")
    const [string2Beat3, setString2Beat3] = useState("")
    const [string2Beat4, setString2Beat4] = useState("")
    const [string2Beat5, setString2Beat5] = useState("")
    const [string2Beat6, setString2Beat6] = useState("")
    const [string2Beat7, setString2Beat7] = useState("")
    const [string2Beat8, setString2Beat8] = useState("")
    const [string2Beat9, setString2Beat9] = useState("")
    const [string2Beat10, setString2Beat10] = useState("")
    const [string2Beat11, setString2Beat11] = useState("")
    const [string2Beat12, setString2Beat12] = useState("")
    const [string2Beat13, setString2Beat13] = useState("")
    const [string2Beat14, setString2Beat14] = useState("")
    const [string2Beat15, setString2Beat15] = useState("")
    const [string2Beat16, setString2Beat16] = useState("")
    const [string3Beat1, setString3Beat1] = useState("")
    const [string3Beat2, setString3Beat2] = useState("")
    const [string3Beat3, setString3Beat3] = useState("")
    const [string3Beat4, setString3Beat4] = useState("")
    const [string3Beat5, setString3Beat5] = useState("")
    const [string3Beat6, setString3Beat6] = useState("")
    const [string3Beat7, setString3Beat7] = useState("")
    const [string3Beat8, setString3Beat8] = useState("")
    const [string3Beat9, setString3Beat9] = useState("")
    const [string3Beat10, setString3Beat10] = useState("")
    const [string3Beat11, setString3Beat11] = useState("")
    const [string3Beat12, setString3Beat12] = useState("")
    const [string3Beat13, setString3Beat13] = useState("")
    const [string3Beat14, setString3Beat14] = useState("")
    const [string3Beat15, setString3Beat15] = useState("")
    const [string3Beat16, setString3Beat16] = useState("")
    const [string4Beat1, setString4Beat1] = useState("")
    const [string4Beat2, setString4Beat2] = useState("")
    const [string4Beat3, setString4Beat3] = useState("")
    const [string4Beat4, setString4Beat4] = useState("")
    const [string4Beat5, setString4Beat5] = useState("")
    const [string4Beat6, setString4Beat6] = useState("")
    const [string4Beat7, setString4Beat7] = useState("")
    const [string4Beat8, setString4Beat8] = useState("")
    const [string4Beat9, setString4Beat9] = useState("")
    const [string4Beat10, setString4Beat10] = useState("")
    const [string4Beat11, setString4Beat11] = useState("")
    const [string4Beat12, setString4Beat12] = useState("")
    const [string4Beat13, setString4Beat13] = useState("")
    const [string4Beat14, setString4Beat14] = useState("")
    const [string4Beat15, setString4Beat15] = useState("")
    const [string4Beat16, setString4Beat16] = useState("")
    const [string5Beat1, setString5Beat1] = useState("")
    const [string5Beat2, setString5Beat2] = useState("")
    const [string5Beat3, setString5Beat3] = useState("")
    const [string5Beat4, setString5Beat4] = useState("")
    const [string5Beat5, setString5Beat5] = useState("")
    const [string5Beat6, setString5Beat6] = useState("")
    const [string5Beat7, setString5Beat7] = useState("")
    const [string5Beat8, setString5Beat8] = useState("")
    const [string5Beat9, setString5Beat9] = useState("")
    const [string5Beat10, setString5Beat10] = useState("")
    const [string5Beat11, setString5Beat11] = useState("")
    const [string5Beat12, setString5Beat12] = useState("")
    const [string5Beat13, setString5Beat13] = useState("")
    const [string5Beat14, setString5Beat14] = useState("")
    const [string5Beat15, setString5Beat15] = useState("")
    const [string5Beat16, setString5Beat16] = useState("")
    const [string6Beat1, setString6Beat1] = useState("")
    const [string6Beat2, setString6Beat2] = useState("")
    const [string6Beat3, setString6Beat3] = useState("")
    const [string6Beat4, setString6Beat4] = useState("")
    const [string6Beat5, setString6Beat5] = useState("")
    const [string6Beat6, setString6Beat6] = useState("")
    const [string6Beat7, setString6Beat7] = useState("")
    const [string6Beat8, setString6Beat8] = useState("")
    const [string6Beat9, setString6Beat9] = useState("")
    const [string6Beat10, setString6Beat10] = useState("")
    const [string6Beat11, setString6Beat11] = useState("")
    const [string6Beat12, setString6Beat12] = useState("")
    const [string6Beat13, setString6Beat13] = useState("")
    const [string6Beat14, setString6Beat14] = useState("")
    const [string6Beat15, setString6Beat15] = useState("")
    const [string6Beat16, setString6Beat16] = useState("")
    const [durationNotSet, setDurationNotSet] = useState(false)

    useEffect(() => {
        if (tabData) {
            for (const note of tabData) {
                if (note.fret === null && note.fret.toString() !== "0" && note.fret === undefined) {
                    return;
                } else if (isNaN(note.fret)) {
                    setStringAndBeat(note.string, note.beat, "");
                    setTabData((prevData) => prevData.filter((d) => !(d.string === note.string && d.beat === note.beat && d.measure === parseInt(note.measure))));
                } else {
                    setStringAndBeat(note.string, note.beat, note.fret.toString());
                }
            }
        }
    }, [tabData]);


    const handleChange = (string, beat, measure) => (e) => {
        setStringAndBeat(string, beat, e.target.value);

        const index = tabData.findIndex((d) => d.string === string && d.beat === beat && d.measure === parseInt(measure));

        if (index !== -1 && e.target.value === "") {
            setTabData((prevData) => {
                const newData = prevData.filter((d) => !(d.string === string && d.beat === beat && d.measure === parseInt(measure)));
                if (newData.filter((d) => d.measure === parseInt(measure)).length === 0) {
                    newData.push({ measure: parseInt(measure), string: string, beat: beat, fret: "", duration: "", time: 0, project_id: project_id, });
                }
                return newData;
            });
        } else if (index !== -1) {
            setTabData((prevData) => {
                const newData = prevData.filter((d) => !(d.string === string && d.beat === beat && d.measure === parseInt(measure)));
                newData.push({ string, beat, fret: parseInt(e.target.value), duration: (duration === "Let Ring" ? (((60 / bpm) * 4) * ((16 - (beat - 1)) / 16)) : (60 / bpm * duration)), measure: parseInt(measure), time: (((parseInt(measure) - 1) * 4 + ((beat - 1) / 4)) * (60 / bpm)), project_id: project_id, }); return newData;
            });
        } else {
            setTabData((prevData) => [...prevData, { string, beat, fret: parseInt(e.target.value), duration: (duration === "Let Ring" ? (((60 / bpm) * 4) * ((16 - (beat - 1)) / 16)) : (60 / bpm * duration)), measure: parseInt(measure), time: (((parseInt(measure) - 1) * 4 + ((beat - 1) / 4)) * (60 / bpm)), project_id: project_id, },]);
        }
    };

    const handleMeasureClick = () => {
        if (duration == undefined) {
            setDurationNotSet(!durationNotSet)
        }
    }


    const setStringAndBeat = (string, beat, value) => {
        const setStringBeat = eval(`setString${string}Beat${beat}`)
        setStringBeat(value)
    }

    const handleSelectChange = (e) => {
        setDuration(e.target.value)
        setDurationNotSet(!durationNotSet)
    }
    return (
        <>
            {durationNotSet ? (
                <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-50 min-h-screen bg-black bg-opacity-70">
                    <div className="bg-gray-700 border border-gray-900 rounded-lg p-6 w-1/4 flex flex-col items-center gap-4 justify-center">
                        <p>Please Choose A Duration</p>
                        <div className="relative inline-flex">
                            <select id="duration" defaultValue="Choose" onChange={handleSelectChange} className="appearance-none bg-gray-900 transition-colors duration-300 border border-white text-white px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none hover:bg-white hover:bg-opacity-90 hover:text-gray-800">
                                <option value="Choose" disabled>Choose a duration</option>
                                <option value="0.5">Eighth</option>
                                <option value="0.75">Dotted Eighth</option>
                                <option value="1">Quarter</option>
                                <option value="1.5">Dotted Quarter</option>
                                <option value="2">Half</option>
                                <option value="3">Dotted Half</option>
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
            ) : null}
            <div onClick={handleMeasureClick} className="w-96 border-2 bg-inherit border-gray-300 rounded-md mt-5">
                <div className="grid grid-rows-6 bg-inherit" style={{display: "grid", gridTemplateColumns: 'repeat(16, minmax(0, 1fr))'}}>
                    <div id={`beat1Measure${measure}`} className="grid grid-row-1 bg-inherit grid-col-1 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 bg-inherit left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat1.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none" value={string1Beat1} onChange={(e) => handleChange(1, 1, measure)(e)} id={`String1Beat1Measure${measure}`} />
                        </div>
                    </div>
                    <div id={`beat2Measure${measure}`} className="grid grid-row-1 grid-col-2 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat2.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat2}
                                onChange={(e) => handleChange(1, 2, measure)(e)}
                                id={`String1Beat2Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat3Measure${measure}`} className="grid grid-row-1 grid-col-3 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat3.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat3}
                                onChange={(e) => handleChange(1, 3, measure)(e)}
                                id={`String1Beat3Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat4Measure${measure}`} className="grid grid-row-1 grid-col-4 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat4.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat4}
                                onChange={(e) => handleChange(1, 4, measure)(e)}
                                id={`String1Beat4Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat5Measure${measure}`} className="grid grid-row-1 grid-col-5 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat5.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat5}
                                onChange={(e) => handleChange(1, 5, measure)(e)}
                                id={`String1Beat5Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat6Measure${measure}`} className="grid grid-row-1 grid-col-6 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat6.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat6}
                                onChange={(e) => handleChange(1, 6, measure)(e)}
                                id={`String1Beat6Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat7Measure${measure}`} className="grid grid-row-1 grid-col-7 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat7.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat7}
                                onChange={(e) => handleChange(1, 7, measure)(e)}
                                id={`String1Beat7Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat8Measure${measure}`} className="grid grid-row-1 grid-col-8 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat8.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat8}
                                onChange={(e) => handleChange(1, 8, measure)(e)}
                                id={`String1Beat8Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat9Measure${measure}`} className="grid grid-row-1 grid-col-9 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat9.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat9}
                                onChange={(e) => handleChange(1, 9, measure)(e)}
                                id={`String1Beat9Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat10Measure${measure}`} className="grid grid-row-1 grid-col-10 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat10.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat10}
                                onChange={(e) => handleChange(1, 10, measure)(e)}
                                id={`String1Beat10Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat11Measure${measure}`} className="grid grid-row-1 grid-col-11 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat11.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat11}
                                onChange={(e) => handleChange(1, 11, measure)(e)}
                                id={`String1Beat11Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat12Measure${measure}`} className="grid grid-row-1 grid-col-12 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat12.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat12}
                                onChange={(e) => handleChange(1, 12, measure)(e)}
                                id={`String1Beat12Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat13Measure${measure}`} className="grid grid-row-1 grid-col-13 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat13.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat13}
                                onChange={(e) => handleChange(1, 13, measure)(e)}
                                id={`String1Beat13Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat14Measure${measure}`} className="grid grid-row-1 grid-col-14 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat14.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat14}
                                onChange={(e) => handleChange(1, 14, measure)(e)}
                                id={`String1Beat14Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat15Measure${measure}`} className="grid grid-row-1 grid-col-15 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat15.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat15}
                                onChange={(e) => handleChange(1, 15, measure)(e)}
                                id={`String1Beat15Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat16Measure${measure}`} className="grid grid-row-1 grid-col-16 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string1Beat16.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string1Beat16}
                                onChange={(e) => handleChange(1, 16, measure)(e)}
                                id={`String1Beat16Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat1Measure${measure}`} className="grid grid-row-1 bg-inherit grid-col-1 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 bg-inherit left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat1.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none" value={string2Beat1} onChange={(e) => handleChange(2, 1, measure)(e)} id={`String2Beat1Measure${measure}`} />
                        </div>
                    </div>
                    <div id={`beat2Measure${measure}`} className="grid grid-row-1 grid-col-2 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat2.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat2}
                                onChange={(e) => handleChange(2, 2, measure)(e)}
                                id={`String2Beat2Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat3Measure${measure}`} className="grid grid-row-1 grid-col-3 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat3.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat3}
                                onChange={(e) => handleChange(2, 3, measure)(e)}
                                id={`String2Beat3Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat4Measure${measure}`} className="grid grid-row-1 grid-col-4 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat4.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat4}
                                onChange={(e) => handleChange(2, 4, measure)(e)}
                                id={`String2Beat4Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat5Measure${measure}`} className="grid grid-row-1 grid-col-5 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat5.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat5}
                                onChange={(e) => handleChange(2, 5, measure)(e)}
                                id={`String2Beat5Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat6Measure${measure}`} className="grid grid-row-1 grid-col-6 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat6.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat6}
                                onChange={(e) => handleChange(2, 6, measure)(e)}
                                id={`String2Beat6Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat7Measure${measure}`} className="grid grid-row-1 grid-col-7 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat7.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat7}
                                onChange={(e) => handleChange(2, 7, measure)(e)}
                                id={`String2Beat7Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat8Measure${measure}`} className="grid grid-row-1 grid-col-8 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat8.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat8}
                                onChange={(e) => handleChange(2, 8, measure)(e)}
                                id={`String2Beat8Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat9Measure${measure}`} className="grid grid-row-1 grid-col-9 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat9.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat9}
                                onChange={(e) => handleChange(2, 9, measure)(e)}
                                id={`String2Beat9Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat10Measure${measure}`} className="grid grid-row-1 grid-col-10 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat10.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat10}
                                onChange={(e) => handleChange(2, 10, measure)(e)}
                                id={`String2Beat10Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat11Measure${measure}`} className="grid grid-row-1 grid-col-11 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat11.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat11}
                                onChange={(e) => handleChange(2, 11, measure)(e)}
                                id={`String2Beat11Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat12Measure${measure}`} className="grid grid-row-1 grid-col-12 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat12.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat12}
                                onChange={(e) => handleChange(2, 12, measure)(e)}
                                id={`String2Beat12Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat13Measure${measure}`} className="grid grid-row-1 grid-col-13 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat13.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat13}
                                onChange={(e) => handleChange(2, 13, measure)(e)}
                                id={`String2Beat13Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat14Measure${measure}`} className="grid grid-row-1 grid-col-14 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat14.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat14}
                                onChange={(e) => handleChange(2, 14, measure)(e)}
                                id={`String2Beat14Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat15Measure${measure}`} className="grid grid-row-1 grid-col-15 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat15.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat15}
                                onChange={(e) => handleChange(2, 15, measure)(e)}
                                id={`String2Beat15Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat16Measure${measure}`} className="grid grid-row-1 grid-col-16 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string2Beat16.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string2Beat16}
                                onChange={(e) => handleChange(2, 16, measure)(e)}
                                id={`String2Beat16Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat1Measure${measure}`} className="grid grid-row-1 bg-inherit grid-col-1 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 bg-inherit left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat1.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none" value={string3Beat1} onChange={(e) => handleChange(3, 1, measure)(e)} id={`String3Beat1Measure${measure}`} />
                        </div>
                    </div>
                    <div id={`beat2Measure${measure}`} className="grid grid-row-1 grid-col-2 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat2.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat2}
                                onChange={(e) => handleChange(3, 2, measure)(e)}
                                id={`String3Beat2Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat3Measure${measure}`} className="grid grid-row-1 grid-col-3 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat3.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat3}
                                onChange={(e) => handleChange(3, 3, measure)(e)}
                                id={`String3Beat3Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat4Measure${measure}`} className="grid grid-row-1 grid-col-4 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat4.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat4}
                                onChange={(e) => handleChange(3, 4, measure)(e)}
                                id={`String3Beat4Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat5Measure${measure}`} className="grid grid-row-1 grid-col-5 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat5.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat5}
                                onChange={(e) => handleChange(3, 5, measure)(e)}
                                id={`String3Beat5Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat6Measure${measure}`} className="grid grid-row-1 grid-col-6 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat6.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat6}
                                onChange={(e) => handleChange(3, 6, measure)(e)}
                                id={`String3Beat6Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat7Measure${measure}`} className="grid grid-row-1 grid-col-7 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat7.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat7}
                                onChange={(e) => handleChange(3, 7, measure)(e)}
                                id={`String3Beat7Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat8Measure${measure}`} className="grid grid-row-1 grid-col-8 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat8.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat8}
                                onChange={(e) => handleChange(3, 8, measure)(e)}
                                id={`String3Beat8Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat9Measure${measure}`} className="grid grid-row-1 grid-col-9 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat9.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat9}
                                onChange={(e) => handleChange(3, 9, measure)(e)}
                                id={`String3Beat9Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat10Measure${measure}`} className="grid grid-row-1 grid-col-10 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat10.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat10}
                                onChange={(e) => handleChange(3, 10, measure)(e)}
                                id={`String3Beat10Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat11Measure${measure}`} className="grid grid-row-1 grid-col-11 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat11.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat11}
                                onChange={(e) => handleChange(3, 11, measure)(e)}
                                id={`String3Beat11Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat12Measure${measure}`} className="grid grid-row-1 grid-col-12 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat12.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat12}
                                onChange={(e) => handleChange(3, 12, measure)(e)}
                                id={`String3Beat12Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat13Measure${measure}`} className="grid grid-row-1 grid-col-13 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat13.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat13}
                                onChange={(e) => handleChange(3, 13, measure)(e)}
                                id={`String3Beat13Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat14Measure${measure}`} className="grid grid-row-1 grid-col-14 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat14.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat14}
                                onChange={(e) => handleChange(3, 14, measure)(e)}
                                id={`String3Beat14Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat15Measure${measure}`} className="grid grid-row-1 grid-col-15 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat15.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat15}
                                onChange={(e) => handleChange(3, 15, measure)(e)}
                                id={`String3Beat15Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat16Measure${measure}`} className="grid grid-row-1 grid-col-16 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string3Beat16.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string3Beat16}
                                onChange={(e) => handleChange(3, 16, measure)(e)}
                                id={`String3Beat16Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat1Measure${measure}`} className="grid grid-row-1 bg-inherit grid-col-1 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 bg-inherit left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat1.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none" value={string4Beat1} onChange={(e) => handleChange(4, 1, measure)(e)} id={`String4Beat1Measure${measure}`} />
                        </div>
                    </div>
                    <div id={`beat2Measure${measure}`} className="grid grid-row-1 grid-col-2 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat2.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat2}
                                onChange={(e) => handleChange(4, 2, measure)(e)}
                                id={`String4Beat2Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat3Measure${measure}`} className="grid grid-row-1 grid-col-3 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat3.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat3}
                                onChange={(e) => handleChange(4, 3, measure)(e)}
                                id={`String4Beat3Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat4Measure${measure}`} className="grid grid-row-1 grid-col-4 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat4.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat4}
                                onChange={(e) => handleChange(4, 4, measure)(e)}
                                id={`String4Beat4Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat5Measure${measure}`} className="grid grid-row-1 grid-col-5 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat5.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat5}
                                onChange={(e) => handleChange(4, 5, measure)(e)}
                                id={`String4Beat5Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat6Measure${measure}`} className="grid grid-row-1 grid-col-6 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat6.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat6}
                                onChange={(e) => handleChange(4, 6, measure)(e)}
                                id={`String4Beat6Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat7Measure${measure}`} className="grid grid-row-1 grid-col-7 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat7.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat7}
                                onChange={(e) => handleChange(4, 7, measure)(e)}
                                id={`String4Beat7Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat8Measure${measure}`} className="grid grid-row-1 grid-col-8 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat8.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat8}
                                onChange={(e) => handleChange(4, 8, measure)(e)}
                                id={`String4Beat8Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat9Measure${measure}`} className="grid grid-row-1 grid-col-9 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat9.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat9}
                                onChange={(e) => handleChange(4, 9, measure)(e)}
                                id={`String4Beat9Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat10Measure${measure}`} className="grid grid-row-1 grid-col-10 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat10.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat10}
                                onChange={(e) => handleChange(4, 10, measure)(e)}
                                id={`String4Beat10Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat11Measure${measure}`} className="grid grid-row-1 grid-col-11 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat11.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat11}
                                onChange={(e) => handleChange(4, 11, measure)(e)}
                                id={`String4Beat11Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat12Measure${measure}`} className="grid grid-row-1 grid-col-12 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat12.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat12}
                                onChange={(e) => handleChange(4, 12, measure)(e)}
                                id={`String4Beat12Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat13Measure${measure}`} className="grid grid-row-1 grid-col-13 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat13.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat13}
                                onChange={(e) => handleChange(4, 13, measure)(e)}
                                id={`String4Beat13Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat14Measure${measure}`} className="grid grid-row-1 grid-col-14 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat14.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat14}
                                onChange={(e) => handleChange(4, 14, measure)(e)}
                                id={`String4Beat14Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat15Measure${measure}`} className="grid grid-row-1 grid-col-15 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat15.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat15}
                                onChange={(e) => handleChange(4, 15, measure)(e)}
                                id={`String4Beat15Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat16Measure${measure}`} className="grid grid-row-1 grid-col-16 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string4Beat16.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string4Beat16}
                                onChange={(e) => handleChange(4, 16, measure)(e)}
                                id={`String4Beat16Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat1Measure${measure}`} className="grid grid-row-1 bg-inherit grid-col-1 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 bg-inherit left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat1.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none" value={string5Beat1} onChange={(e) => handleChange(5, 1, measure)(e)} id={`String5Beat1Measure${measure}`} />
                        </div>
                    </div>
                    <div id={`beat2Measure${measure}`} className="grid grid-row-1 grid-col-2 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat2.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat2}
                                onChange={(e) => handleChange(5, 2, measure)(e)}
                                id={`String5Beat2Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat3Measure${measure}`} className="grid grid-row-1 grid-col-3 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat3.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat3}
                                onChange={(e) => handleChange(5, 3, measure)(e)}
                                id={`String5Beat3Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat4Measure${measure}`} className="grid grid-row-1 grid-col-4 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat4.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat4}
                                onChange={(e) => handleChange(5, 4, measure)(e)}
                                id={`String5Beat4Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat5Measure${measure}`} className="grid grid-row-1 grid-col-5 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat5.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat5}
                                onChange={(e) => handleChange(5, 5, measure)(e)}
                                id={`String5Beat5Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat6Measure${measure}`} className="grid grid-row-1 grid-col-6 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat6.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat6}
                                onChange={(e) => handleChange(5, 6, measure)(e)}
                                id={`String5Beat6Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat7Measure${measure}`} className="grid grid-row-1 grid-col-7 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat7.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat7}
                                onChange={(e) => handleChange(5, 7, measure)(e)}
                                id={`String5Beat7Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat8Measure${measure}`} className="grid grid-row-1 grid-col-8 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat8.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat8}
                                onChange={(e) => handleChange(5, 8, measure)(e)}
                                id={`String5Beat8Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat9Measure${measure}`} className="grid grid-row-1 grid-col-9 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat9.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat9}
                                onChange={(e) => handleChange(5, 9, measure)(e)}
                                id={`String5Beat9Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat10Measure${measure}`} className="grid grid-row-1 grid-col-10 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat10.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat10}
                                onChange={(e) => handleChange(5, 10, measure)(e)}
                                id={`String5Beat10Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat11Measure${measure}`} className="grid grid-row-1 grid-col-11 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat11.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat11}
                                onChange={(e) => handleChange(5, 11, measure)(e)}
                                id={`String5Beat11Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat12Measure${measure}`} className="grid grid-row-1 grid-col-12 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat12.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat12}
                                onChange={(e) => handleChange(5, 12, measure)(e)}
                                id={`String5Beat12Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat13Measure${measure}`} className="grid grid-row-1 grid-col-13 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat13.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat13}
                                onChange={(e) => handleChange(5, 13, measure)(e)}
                                id={`String5Beat13Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat14Measure${measure}`} className="grid grid-row-1 grid-col-14 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat14.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat14}
                                onChange={(e) => handleChange(5, 14, measure)(e)}
                                id={`String5Beat14Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat15Measure${measure}`} className="grid grid-row-1 grid-col-15 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat15.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat15}
                                onChange={(e) => handleChange(5, 15, measure)(e)}
                                id={`String5Beat15Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat16Measure${measure}`} className="grid grid-row-1 grid-col-16 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string5Beat16.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string5Beat16}
                                onChange={(e) => handleChange(5, 16, measure)(e)}
                                id={`String5Beat16Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat1Measure${measure}`} className="grid grid-row-1 bg-inherit grid-col-1 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 bg-inherit left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat1.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none" value={string6Beat1} onChange={(e) => handleChange(6, 1, measure)(e)} id={`String6Beat1Measure${measure}`} />
                        </div>
                    </div>
                    <div id={`beat2Measure${measure}`} className="grid grid-row-1 grid-col-2 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat2.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat2}
                                onChange={(e) => handleChange(6, 2, measure)(e)}
                                id={`String6Beat2Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat3Measure${measure}`} className="grid grid-row-1 grid-col-3 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat3.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat3}
                                onChange={(e) => handleChange(6, 3, measure)(e)}
                                id={`String6Beat3Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat4Measure${measure}`} className="grid grid-row-1 grid-col-4 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat4.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat4}
                                onChange={(e) => handleChange(6, 4, measure)(e)}
                                id={`String6Beat4Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat5Measure${measure}`} className="grid grid-row-1 grid-col-5 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat5.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat5}
                                onChange={(e) => handleChange(6, 5, measure)(e)}
                                id={`String6Beat5Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat6Measure${measure}`} className="grid grid-row-1 grid-col-6 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat6.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat6}
                                onChange={(e) => handleChange(6, 6, measure)(e)}
                                id={`String6Beat6Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat7Measure${measure}`} className="grid grid-row-1 grid-col-7 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat7.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat7}
                                onChange={(e) => handleChange(6, 7, measure)(e)}
                                id={`String6Beat7Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat8Measure${measure}`} className="grid grid-row-1 grid-col-8 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat8.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat8}
                                onChange={(e) => handleChange(6, 8, measure)(e)}
                                id={`String6Beat8Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat9Measure${measure}`} className="grid grid-row-1 grid-col-9 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat9.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat9}
                                onChange={(e) => handleChange(6, 9, measure)(e)}
                                id={`String6Beat9Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat10Measure${measure}`} className="grid grid-row-1 grid-col-10 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat10.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat10}
                                onChange={(e) => handleChange(6, 10, measure)(e)}
                                id={`String6Beat10Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat11Measure${measure}`} className="grid grid-row-1 grid-col-11 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat11.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat11}
                                onChange={(e) => handleChange(6, 11, measure)(e)}
                                id={`String6Beat11Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat12Measure${measure}`} className="grid grid-row-1 grid-col-12 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat12.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat12}
                                onChange={(e) => handleChange(6, 12, measure)(e)}
                                id={`String6Beat12Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat13Measure${measure}`} className="grid grid-row-1 grid-col-13 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat13.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat13}
                                onChange={(e) => handleChange(6, 13, measure)(e)}
                                id={`String6Beat13Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat14Measure${measure}`} className="grid grid-row-1 grid-col-14 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat14.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat14}
                                onChange={(e) => handleChange(6, 14, measure)(e)}
                                id={`String6Beat14Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat15Measure${measure}`} className="grid grid-row-1 grid-col-15 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat15.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat15}
                                onChange={(e) => handleChange(6, 15, measure)(e)}
                                id={`String6Beat15Measure${measure}`}
                            />
                        </div>
                    </div>
                    <div id={`beat16Measure${measure}`} className="grid grid-row-1 grid-col-16 items-center h-6 relative">
                        <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${measure}`}`}></div>
                            <div className="relative z-9" style={{ position: 'relative', zIndex: 9 }}>
                                {string6Beat16.split('').map((char, index) => {
                                    if (char === ' ') {
                                        return <span key={index}>&nbsp;</span>;
                                    } else {
                                        return <span key={index}>{char}</span>;
                                    }
                                })}
                            </div>
                            <input
                                className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                                value={string6Beat16}
                                onChange={(e) => handleChange(6, 16, measure)(e)}
                                id={`String6Beat16Measure${measure}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditMeasure