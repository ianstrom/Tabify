import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserProjects from "./UserProjects";
import FeaturedTablature from "./FeaturedTablature";

function LandingPage({ userTabs, featuredTabs, setUser, user, setProjectToView, setUserTabs, setFeaturedTabs }) {
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch("https://tabify.onrender.com/check_session")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setFeaturedTabs(user.all_tabs)
            setUser(user)
            if (user.tabs) {
              setUserTabs(user.tabs)
            }
          })
        } else {
          navigate("/login")
        }
      })
  }, [])

  return (
    <div className={`justify-center ${userTabs.length > 0 ? "ml-52" : "w-screen"}`}>
      <div class="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
        <h1 class="text-2xl md:text-3xl lg:text-6xl pr-52 font-bold mb-8 text-center">Tabify</h1>
        <div class="flex pr-52 flex-col md:flex-row items-center justify-center w-full">
          {userTabs.length > 0 ? (
            <>
              <div className="w-full md:w-1/2 justify-center md:mr-2 mb-8 md:mb-0">
                <FeaturedTablature featuredTabs={featuredTabs} user={user} setProjectToView={setProjectToView} />
              </div>
              <div class="w-full md:w-1/2 justify-center md:ml-2">
                <UserProjects userTabs={userTabs} user={user} setProjectToView={setProjectToView} />
              </div>
            </>
          ) : (
            <div className="w-full md:w-3/4">
              <FeaturedTablature featuredTabs={featuredTabs} user={user} setProjectToView={setProjectToView} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default LandingPage