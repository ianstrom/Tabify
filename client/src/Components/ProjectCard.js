import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ tab, setProjectToView, user }) {
    const navigate = useNavigate()
    const handleClick = () => {
        if (tab.user_id === user.id) {
            setProjectToView(tab)
            navigate(`/edit_project/${tab.id}`)
        } else {
            setProjectToView(tab)
            navigate(`/project/${tab.id}`)
        }
    }
    return (
        <div onClick={handleClick} class="border rounded-md mx-auto sm:mx-auto md:mx-auto md:max-w-full xl:max-w-full p-2 shadow-lg hover:shadow-md hover:shadow-white/50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div class="text-scale sm:text-scale md:text-scale overflow-wrap font-medium mb-1">Artist:</div>
            <div class="text-scale sm:text-scale md:text-scale font-bold mb-2">{tab.artist}</div>
            <div class="text-scale sm:text-scale md:text-scale font-medium mb-1">Song:</div>
            <div class="text-scale sm:text-scale md:text-scale font-bold mb-2 truncate">{tab.title}</div>
            <div class="text-scale sm:text-scale md:text-scale font-medium">Average Rating:</div>
            <div class="text-scale sm:text-scale md:text-scale font-bold">{tab.average_rating}</div>
        </div>
    )
}

export default ProjectCard