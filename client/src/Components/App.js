import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import EditProject from './EditProject';
import Project from './Project';
import CreateNewTabForm from './CreateNewTabForm';
import Reviews from './Reviews';
import YourProjects from './YourProjects';
import NavBar from './NavBar';
import Tablature from './Tablature';
import Loading from './Loading';

function App() {
    const [user, setUser] = useState(null)
    const [projectToView, setProjectToView] = useState()
    const [userTabs, setUserTabs] = useState([])
    const [featuredTabs, setFeaturedTabs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const navigate = useNavigate()
    useEffect(() => {
        setIsLoading(true)
        fetch("/check_session")
            .then((r) => {
                if (r.ok) {
                    r.json()
                    .then((user) => {
                        setFeaturedTabs(user.all_tabs)
                        setUser(user)
                        if (user.tabs) {
                            setUserTabs(user.tabs)
                        }
                        setIsLoading(false)
                    })
                } else {
                    navigate("/login")
                    setIsLoading(false)
                }
            })
    }, [])

    return (
        <div style={{background: "linear-gradient(140.6deg, #052331 55%, #004c3f 100.2%)"}} class="min-h-screen overflow-y-scroll text-white flex flex-row gap-3">
            <div className='fixed z-20'>
                <NavBar user={user} projectToView={projectToView} setProjectToView={setProjectToView} />
            </div>
            {isLoading ? <Loading /> : null}
            <div>
                <Routes>
                    <Route exact path="/" element={<LandingPage setFeaturedTabs={setFeaturedTabs} setUserTabs={setUserTabs} featuredTabs={featuredTabs} setUser={setUser} userTabs={userTabs} setProjectToView={setProjectToView} user={user} />} />
                    <Route path="/login" element={<Login featuredTabs={featuredTabs} setUserTabs={setUserTabs} setFeaturedTabs={setFeaturedTabs} setUser={setUser} />} />
                    <Route path="/signup" element={<Signup setFeaturedTabs={setFeaturedTabs} setUser={setUser} />} />
                    <Route path="/create" element={<CreateNewTabForm user={user} userTabs={userTabs} setProjectToView={setProjectToView} setUserTabs={setUserTabs} setFeaturedTabs={setFeaturedTabs} setUser={setUser} />} />
                    <Route path="/edit_project/:id" element={<EditProject userTabs={userTabs} setUserTabs={setUserTabs} setProjectToView={setProjectToView} project={projectToView} />} />
                    <Route path="/project/:id" element={<Project userTabs={userTabs} setUserTabs={setUserTabs} setProjectToView={setProjectToView} project={projectToView} />} />
                    <Route path="/your_projects" element={<YourProjects user={user} userTabs={userTabs} setProjectToView={setProjectToView} />} />
                    <Route path="/tablature" element={<Tablature setProjectToView={setProjectToView}/>} />
                    {/* <Route path="/project/:id" element={<Project setProjectToView={setProjectToView} project={projectToView} />} /> */}
                    <Route path="/reviews/:id" element={<Reviews user={user} setProjectToView={setProjectToView} projectToView={projectToView} />} />
                </Routes>
            </div>
        </div >
    )
}

export default App;