import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login({setUser}){
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
            body: JSON.stringify({username, password})
        })
        .then((r) => r.json())
        .then((data) => {
            setUser(data)
            navigate("/")
        }
        )
    }
    return (
    <div className="flex h-screen items-center justify-center text-white ">
        <form onSubmit={handleSubmit}className="md:flex h-64 text-md flex flex-col bg-slate-400 border border-gray-900 p-6 rounded-lg justify-center text-center">
            <label className="bor" for="username">Username:</label>
            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" id="username" name="username" className="border border-gray-600 rounded-lg text-black"></input>
            <label for="password">Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="border border-gray-600 rounded-lg text-black" name="password"></input>
            <button className="border border-gray-600 rounded-lg" type="submit" >Login</button>
        </form>
    </div>
    )
}

export default Login