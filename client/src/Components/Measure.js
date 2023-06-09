import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Measure({ tabData }) {
    useEffect(() => {
        for (const note of tabData) {
            const element = document.querySelector(`#String${note.string}Beat${note.beat}Measure${note.measure}`)
            element.textContent = note.fret
        }
    }, [tabData])

    return (
        <div className="w-96 border-2 border-gray-500">
            <div className="grid grid-rows-6" style={{display: "grid", gridTemplateColumns: 'repeat(16, minmax(0, 1fr))'}}>
                <div className="grid grid-row-1 grid-col-1 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat1Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-2 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat2Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-3 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat3Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-4 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat4Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-5 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat5Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-6 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat6Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-7 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat7Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-8 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat8Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-9 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat9Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-10 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat10Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-11 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat11Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-12 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat12Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-13 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat13Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-14 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat14Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-15 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat15Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-16 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat16Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-1 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat1Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-2 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat2Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-3 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat3Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-4 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat4Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-5 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat5Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-6 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat6Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-7 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat7Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-8 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat8Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-9 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat9Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-10 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat10Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-11 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat11Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-12 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat12Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-13 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat13Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-14 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat14Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-15 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat15Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-16 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat16Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-1 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat1Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-2 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat2Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-3 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat3Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-4 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat4Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-5 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat5Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-6 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat6Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-7 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat7Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-8 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat8Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-9 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat9Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-10 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat10Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-11 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat11Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-12 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat12Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-13 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat13Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-14 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat14Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-15 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat15Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-16 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat16Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-1 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat1Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-2 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat2Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-3 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat3Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-4 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat4Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-5 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat5Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-6 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat6Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-7 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat7Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-8 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat8Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-9 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat9Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-10 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat10Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-11 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat11Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-12 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat12Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-13 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat13Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-14 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat14Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-15 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat15Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-16 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat16Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-1 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat1Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-2 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat2Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-3 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat3Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-4 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat4Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-5 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat5Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-6 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat6Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-7 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat7Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-8 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat8Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-9 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat9Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-10 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat10Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-11 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat11Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-12 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat12Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-13 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat13Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-14 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat14Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-15 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat15Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-16 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat16Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-1 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat1Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat1Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-2 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat2Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat2Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-3 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat3Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat3Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-4 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat4Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat4Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-5 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat5Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat5Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-6 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat6Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat6Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-7 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat7Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat7Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-8 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat8Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat8Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-9 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat9Measure" + `${tabData[0].measure}`}`} /* style={{backgroundImage: 'linear-gradient(to right, transparent, transparent, rgba(255,255,255,0.4), transparent, transparent)', zIndex: 40}} */></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat9Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-10 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat10Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat10Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-11 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat11Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat11Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-12 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat12Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat12Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-13 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat13Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat13Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-14 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat14Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat14Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-15 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat15Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat15Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-16 items-center h-6 relative">
                    <div className={`w-1/6 h-full absolute ${"beat16Measure" + `${tabData[0].measure}`}`}></div>
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat16Measure${tabData[0].measure}`} className="bg-transparent relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Measure