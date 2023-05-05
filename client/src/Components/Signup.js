import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setUser, setFeaturedTabs }) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: userName, password: password })
        })
            .then((r) => r.json())
            .then((user) => {
                setFeaturedTabs(user.all_tabs)
                setUser(user)
                navigate("/")
            })
    }

    const handleAlreadyUser = (e) => {
        e.preventDefault()
        navigate("/login")
    }

    return (
        <div class="flex min-h-screen w-screen bg-gradient-to-b from-gray-800 to-gray-900 items-center justify-center text-white">
            <form onSubmit={(e) => handleSignup(e)} class="md:flex h-64 text-md flex flex-col bg-gray-700 border border-gray-900 p-6 rounded-lg justify-center text-center md:w-1/2 lg:w-1/3">
                <label class="mb-2" for="username">Username:</label>
                <input value={userName} type="text" onChange={(e) => setUserName(e.target.value)} id="username" name="username" class="border border-gray-600 rounded-lg text-black px-2 py-1 mb-4 text-center" />
                <label class="mb-2" for="password">Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" class="border border-gray-600 rounded-lg text-black px-2 py-1 mb-4 text-center" />
                <div className="flex flex-row">
                    <input type="submit" value="Create Account" class="border w-1/2 border-gray-600 rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" />
                    <input onClick={handleAlreadyUser} type="submit" value="Already A User?" class="border w-1/2 border-gray-600 rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" />
                </div>
            </form>
        </div>
    )
}

export default Signup