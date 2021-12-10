import React from 'react'
import Separator from '../../common/separator'
import {WorkData} from "../../data/work.js"
import WorkCard from './workCard.js'

function Work() {
    const data = WorkData
    return (
        <div className="work">
            <Separator />
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((work)=>{
                    return <WorkCard work = {work}/>
                })}
            </div>
        </div>
    )
}

export default Work
