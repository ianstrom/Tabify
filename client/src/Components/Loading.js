import React, { useState, useEffect } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

function Loading() {
    return (
        <div style={{background: "linear-gradient(140.6deg, #052331 55%, #004c3f 100.2%)"}} className="flex transition ease-in-out flex-col bg-gradient-to-b from-gray-800 to-gray-900 justify-center absolute items-center h-screen w-screen z-50">
            <ScaleLoader
                color="#ffffff"
                height={60}
                margin={6}
                speedMultiplier={1}
                width={6}
            />
            <p className="mt-8 text-white text-2xl font-extrabold tracking-widest">
                Hold on while I enjoy these tunes...
            </p>
        </div>
    )
}

export default Loading;