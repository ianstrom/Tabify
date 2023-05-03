import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import EditProject from './EditProject';
import Project from './Project';
import CreateNewTabForm from './CreateNewTabForm';

function App(){
    const [user, setUser] = useState(null)
    const [projectToView, setProjectToView] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        fetch("/check_session")
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                navigate("/login")
            }
        })
    }, [])

    return (
        <div className='h-screen bg-slate-800'>
            <Routes>
                <Route exact path="/" element={<LandingPage setUser={setUser} setProjectToView={setProjectToView} user={user}/>} />
                <Route path="/login" element={<Login setUser={setUser}/>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/edit_project" element={<EditProject project={projectToView}/>} />
                <Route path="/project" element={<Project project={projectToView}/>} />
                <Route path="/create" element={<CreateNewTabForm user={user}/>} />
            </Routes>
        </div>
    )
}

export default App;