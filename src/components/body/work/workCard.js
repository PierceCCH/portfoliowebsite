import React from 'react'
import "./workCard.css"

function WorkCard({work}) {
    return (
        <div className="work-card">
            <img className = "work-logo" src = {work.logo} alt="Organization logo" />
            <div className="work-info">
                <label className="company-name">{work.company}</label>
                <label className="job">{work.job}</label>
                <div className="dates">
                    <label className="joined">{work.dateJoined}</label>
                    -
                    <label className="left">{work.dateLeft}</label>
                </div>
                <div className="work-description">
                    {work.description}
                </div>
            </div>
        </div>
    )
}
export default WorkCard
