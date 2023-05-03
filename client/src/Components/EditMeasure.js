import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function EditMeasure({ bpm, measure, duration, setTabData, tabData, project_id }) {
    const [string1Beat1, setString1Beat1] = useState("")
    const [string1Beat2, setString1Beat2] = useState("")
    const [string1Beat3, setString1Beat3] = useState("")
    const [string1Beat4, setString1Beat4] = useState("")
    const [string1Beat5, setString1Beat5] = useState("")
    const [string1Beat6, setString1Beat6] = useState("")
    const [string1Beat7, setString1Beat7] = useState("")
    const [string1Beat8, setString1Beat8] = useState("")
    const [string2Beat1, setString2Beat1] = useState("")
    const [string2Beat2, setString2Beat2] = useState("")
    const [string2Beat3, setString2Beat3] = useState("")
    const [string2Beat4, setString2Beat4] = useState("")
    const [string2Beat5, setString2Beat5] = useState("")
    const [string2Beat6, setString2Beat6] = useState("")
    const [string2Beat7, setString2Beat7] = useState("")
    const [string2Beat8, setString2Beat8] = useState("")
    const [string3Beat1, setString3Beat1] = useState("")
    const [string3Beat2, setString3Beat2] = useState("")
    const [string3Beat3, setString3Beat3] = useState("")
    const [string3Beat4, setString3Beat4] = useState("")
    const [string3Beat5, setString3Beat5] = useState("")
    const [string3Beat6, setString3Beat6] = useState("")
    const [string3Beat7, setString3Beat7] = useState("")
    const [string3Beat8, setString3Beat8] = useState("")
    const [string4Beat1, setString4Beat1] = useState("")
    const [string4Beat2, setString4Beat2] = useState("")
    const [string4Beat3, setString4Beat3] = useState("")
    const [string4Beat4, setString4Beat4] = useState("")
    const [string4Beat5, setString4Beat5] = useState("")
    const [string4Beat6, setString4Beat6] = useState("")
    const [string4Beat7, setString4Beat7] = useState("")
    const [string4Beat8, setString4Beat8] = useState("")
    const [string5Beat1, setString5Beat1] = useState("")
    const [string5Beat2, setString5Beat2] = useState("")
    const [string5Beat3, setString5Beat3] = useState("")
    const [string5Beat4, setString5Beat4] = useState("")
    const [string5Beat5, setString5Beat5] = useState("")
    const [string5Beat6, setString5Beat6] = useState("")
    const [string5Beat7, setString5Beat7] = useState("")
    const [string5Beat8, setString5Beat8] = useState("")
    const [string6Beat1, setString6Beat1] = useState("")
    const [string6Beat2, setString6Beat2] = useState("")
    const [string6Beat3, setString6Beat3] = useState("")
    const [string6Beat4, setString6Beat4] = useState("")
    const [string6Beat5, setString6Beat5] = useState("")
    const [string6Beat6, setString6Beat6] = useState("")
    const [string6Beat7, setString6Beat7] = useState("")
    const [string6Beat8, setString6Beat8] = useState("")

    useEffect(() => {
        if (tabData) {
            for (const note of tabData) {
                if (!(note.fret) && note.fret.toString() !== "0") {
                    return
                } else if (isNaN(note.fret)) {
                    setStringAndBeat(note.string, note.beat, "")
                    setTabData((prevData) => prevData.filter((d) => !(d.string === note.string && d.beat === note.beat && d.measure === parseInt(note.measure))), { measure: parseInt(note.measure), string: note.string, beat: note.beat, fret: "" })
                } else {
                    setStringAndBeat(note.string, note.beat, note.fret.toString())
                }
            }
        }
    }, [tabData])

    const handleChange = (string, beat, measure) => (e) => {
        setStringAndBeat(string, beat, e.target.value);

        const index = tabData.findIndex((d) => d.string === string && d.beat === beat && d.measure === parseInt(measure));

        if (index !== -1 && e.target.value === "") {
            setTabData((prevData) => {
                const newData = prevData.filter((d) => !(d.string === string && d.beat === beat && d.measure === parseInt(measure)));
                if (newData.filter((d) => d.measure === parseInt(measure)).length === 0) {
                    newData.push({ measure: parseInt(measure), string: string, beat: beat, fret: "" });
                }
                return newData;
            });
        } else if (index !== -1) {
            setTabData((prevData) => {
                const newData = prevData.filter((d) => !(d.string === string && d.beat === beat && d.measure === parseInt(measure)));
                newData.push({ string, beat, fret: parseInt(e.target.value), duration, measure: parseInt(measure), time: (((parseInt(measure) - 1) * 4 + (beat - 1)) * (60 / bpm) / 4), project_id: project_id, }); return newData;
            });
        } else {
            setTabData((prevData) => [...prevData, { string, beat, fret: parseInt(e.target.value), duration, measure: parseInt(measure), time: (((parseInt(measure) - 1) * 4 + (beat - 1)) * (60 / bpm) / 4), project_id: project_id, },]);
        }
    };


    const setStringAndBeat = (string, beat, value) => {
        const setStringBeat = eval(`setString${string}Beat${beat}`)
        setStringBeat(value)
    }

    return (
        <div className="w-64 border-2 border-gray-500 mt-5">
            <div className="grid grid-rows-6 grid-cols-8">
                <div className="grid grid-row-1 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
                            {string1Beat1.split('').map((char, index) => {
                                if (char === ' ') {
                                    return <span key={index}>&nbsp;</span>;
                                } else {
                                    return <span key={index}>{char}</span>;
                                }
                            })}
                        </div>
                        <input
                            className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                            value={string1Beat1}
                            onChange={(e) => handleChange(1, 1, measure)(e)}
                            id={`String1Beat1Measure${measure}`}
                        />
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-1 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-1 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-1 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-1 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-1 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-1 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-2 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
                            {string2Beat1.split('').map((char, index) => {
                                if (char === ' ') {
                                    return <span key={index}>&nbsp;</span>;
                                } else {
                                    return <span key={index}>{char}</span>;
                                }
                            })}
                        </div>
                        <input
                            className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                            value={string2Beat1}
                            onChange={(e) => handleChange(2, 1, measure)(e)}
                            id={`String2Beat1Measure${measure}`}
                        />
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-2 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-2 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-2 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-2 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-2 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-2 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-3 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
                            {string3Beat1.split('').map((char, index) => {
                                if (char === ' ') {
                                    return <span key={index}>&nbsp;</span>;
                                } else {
                                    return <span key={index}>{char}</span>;
                                }
                            })}
                        </div>
                        <input
                            className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                            value={string3Beat1}
                            onChange={(e) => handleChange(3, 1, measure)(e)}
                            id={`String3Beat1Measure${measure}`}
                        />
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-3 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-3 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-3 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-3 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-3 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-3 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-4 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
                            {string4Beat1.split('').map((char, index) => {
                                if (char === ' ') {
                                    return <span key={index}>&nbsp;</span>;
                                } else {
                                    return <span key={index}>{char}</span>;
                                }
                            })}
                        </div>
                        <input
                            className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                            value={string4Beat1}
                            onChange={(e) => handleChange(4, 1, measure)(e)}
                            id={`String4Beat1Measure${measure}`}
                        />
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-4 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-4 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-4 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-4 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-4 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-4 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-5 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
                            {string5Beat1.split('').map((char, index) => {
                                if (char === ' ') {
                                    return <span key={index}>&nbsp;</span>;
                                } else {
                                    return <span key={index}>{char}</span>;
                                }
                            })}
                        </div>
                        <input
                            className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                            value={string5Beat1}
                            onChange={(e) => handleChange(5, 1, measure)(e)}
                            id={`String5Beat1Measure${measure}`}
                        />
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-5 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                            id={`String5BeatMeasure${measure}`}
                        />
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-5 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-5 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-5 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-5 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-6 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
                            {string6Beat1.split('').map((char, index) => {
                                if (char === ' ') {
                                    return <span key={index}>&nbsp;</span>;
                                } else {
                                    return <span key={index}>{char}</span>;
                                }
                            })}
                        </div>
                        <input
                            className="bg-transparent absolute top-0 left-0 w-full h-full text-center focus:outline-none"
                            value={string6Beat1}
                            onChange={(e) => handleChange(6, 1, measure)(e)}
                            id={`String6Beat1Measure${measure}`}
                        />
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-6 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-6 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-6 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-6 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-6 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
                <div className="grid grid-row-6 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-slate-800 relative z-10" style={{ position: 'relative', zIndex: 10 }}>
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
            </div>
        </div>
    )
}

export default EditMeasure