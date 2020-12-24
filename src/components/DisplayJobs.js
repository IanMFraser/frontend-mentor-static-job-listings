import React from 'react'
import JobCard from './JobCard'
import Filter from './Filter'

const DisplayJobs = ({ jobs, filterHandler, tags, clearFilter, removeTag }) =>  {

    return(
        <div className="DisplayJobs" style={ (tags.length > 0 ) ? {top: '18%'} : {}}>
            <div className="display-cards">
                <ul>
                    { tags.length > 0  ? <li><Filter tags={tags} clearFilter={clearFilter} removeTag={removeTag} /></li> : null }
                        {
                            jobs.map(job => {
                                return <li key={job.id}> <JobCard data={job} filterHandler={filterHandler} /></li>
                            })
                    }
                </ul>
            </div>
        </div>
    )
}

export default DisplayJobs