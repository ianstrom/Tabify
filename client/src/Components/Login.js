import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password })
        })
            .then((r) => r.json())
            .then((data) => {
                setUser(data)
                navigate("/")
            }
            )
    }
    return (
        <div style={{background: "linear-gradient(140.6deg, #052331 55%, #004c3f 100.2%)"}} className="flex min-h-screen w-screen items-center justify-center text-white">
            <form onSubmit={handleSubmit} className="md:flex h-64 text-md flex flex-col bg-gray-700 border border-gray-900 p-6 rounded-lg justify-center text-center md:w-1/2 lg:w-1/3">
                <label className="mb-2 text-lg font-medium">Username:</label>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" id="username" name="username" className="border border-gray-600 rounded-lg text-black px-2 py-1 mb-4 text-center"></input>
                <label className="mb-2 text-lg font-medium">Password:</label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="border border-gray-600 rounded-lg text-black px-2 py-1 mb-4 text-center" name="password"></input>
                <div className="flex flex-row justify-center">
                    <button className="border w-1/2 border-gray-600 rounded-lg px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:text-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Login</button>
                    <button className="border w-1/2 border-gray-600 rounded-lg px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:text-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1" onClick={() => navigate("/signup")} >Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default Login