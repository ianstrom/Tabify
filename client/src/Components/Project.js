import React, { useEffect } from "react";
import Measure from "./Measure";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Project({project}) {
    const [tabData, setTabData] = useState([])

    useEffect(() => {
        fetch(`/tab_data/${project.id}`)
        .then((r) => r.json())
        .then((data) => {
            setTabData(data)
        })
    }, [project])

    const groupedMeasures = tabData ? tabData.reduce((r, a) => {
        const measure = a.measure
        if (!r[measure]) {
            r[measure] = []
        }
        r[measure].push(a)
        return r
    }, {}) : null

    const measuresToDisplay = groupedMeasures ? Object.keys(groupedMeasures).map((measure) => {
        const notes = groupedMeasures[measure]
        return <Measure tabData={notes} />
    }) : null

    return (
        <div>
            <p className="text-4xl">{project.title}</p>
            <p className="text-2xl">{project.artist}</p>
            <p className="text-2xl">{project.tuning}</p>
            <p className="text-2xl">{project.capo}</p>
            <div className="flex flex-wrap">
                {measuresToDisplay}
            </div>
        </div>
    )
}

export default Project