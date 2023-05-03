import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function CreateNewTabForm({user}){
    return (
        <div className="flex h-screen items-center justify-center text-white">
            <form className="md:flex h-1/2 w-1/4 text-md flex flex-col bg-slate-400 border border-gray-900 p-6 rounded-lg justify-center items-center text-center">
                <input placeholder="Song Name" className="text-xl rounded-md mt-3 w-"></input>
                <input placeholder="Artist" className="text-xl rounded-md mt-3"></input>
                <input placeholder="Tuning" className="text-xl rounded-md mt-3"></input>
                <input placeholder="Capo" className="text-xl rounded-md mt-3"></input>
                <input placeholder="Key" className="text-xl rounded-md mt-3"></input>
                <input placeholder="BPM" className="text-xl rounded-md mt-3"></input>
                <button className="flex mt-4 text-black bg-white w-1/4">Create Project</button>
            </form>
        </div>
    )

}

export default CreateNewTabForm