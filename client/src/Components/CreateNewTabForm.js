import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNewTabForm({ user, setProjectToView }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: "",
        artist: "",
        tuning: "",
        capo: "",
        bpm: "",
        user_id: user?.id

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/tabs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((tab) => {
                setProjectToView(tab)
                navigate(`/edit_project/${tab.id}`)
            }
            )
    }
    return (
        <div style={{background: "linear-gradient(140.6deg, #052331 55%, #004c3f 100.2%)"}} className="flex min-h-screen w-screen bg-gradient-to-b from-gray-800 to-gray-900 items-center justify-center text-white">
            <form onSubmit={handleSubmit} className="md:flex h-1/2 w-1/4 text-md flex flex-col bg-gray-700 border border-gray-900 p-6 rounded-lg justify-center text-center">
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
                <button className="border border-gray-600 rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Create Project</button>
            </form>
        </div>
    )

}

export default CreateNewTabForm