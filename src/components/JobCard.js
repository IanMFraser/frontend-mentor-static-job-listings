import React from 'react'

const JobCard = ({data, filterHandler}) => {
    
    const tags = [...data.languages, ...data.tools, data.level, data.role]

    return(
        <div className="JobCard">
            <div className="row">
                <div className="logo ">
                    <img src={data.logo.default} alt="logo"></img>
                </div>
                <div className="col">
                    <div className="company row">
                        <h2>{data.company}</h2>
                        { data.new ? <div className="new"> <p>NEW!</p></div> : null }
                        { data.featured ? <div className="featured"> <p>FEATURED</p> </div> : null }
                    </div>
                    <div className="position">
                        <h1>{data.position}</h1>
                    </div>
                    <div className="info row">
                        <p>{`${data.postedAt} • ${data.contract} • ${data.location}`}</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="tags">
                {tags.map((tag, i) => {
                    return <button key={i} className="tag" onClick={filterHandler}>{tag}</button>
                })}
            </div>
        </div>
    )
}

export default JobCard