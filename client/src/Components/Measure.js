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
        <div className="w-64 border-2 border-gray-500">
            <div className="grid grid-rows-6 grid-cols-8">
                <div className="grid grid-row-1 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat1Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat2Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat3Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat4Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat5Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat6Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat7Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-1 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String1Beat8Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat1Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat2Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat3Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat4Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat5Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat6Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat7Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-2 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String2Beat8Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat1Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat2Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat3Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat4Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat5Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat6Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat7Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-3 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String3Beat8Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat1Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat2Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat3Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat4Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat5Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat6Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat7Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-4 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String4Beat8Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat1Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat2Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat3Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat4Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat5Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat6Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat7Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-5 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String5Beat8Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-1 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat1Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-2 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat2Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-3 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat3Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-4 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat4Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-5 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat5Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-6 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat6Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-7 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat7Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
                <div className="grid grid-row-6 grid-col-8 items-center h-6 relative">
                    <div className="bg-black h-0.5" style={{ width: '100%' }}></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div id={`String6Beat8Measure${tabData[0].measure}`} className="bg-slate-800 relative z-9" style={{ position: 'relative', zIndex: 9 }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Measure