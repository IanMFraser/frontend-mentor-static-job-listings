import React from 'react'
import FilterTag from './FilterTag'

const Filter = ({ tags, clearFilter, removeTag}) => {
    return(
        <div className="Filter">
            <div className="filter-tags">
                <ul>
                    {tags.map(tag => {
                        return <li key={tag}> <FilterTag name={tag} removeTag={removeTag}/> </li>
                    })}
                </ul>
            </div>
            <div>
                <button className="clear-button" onClick={clearFilter}>Clear</button>
            </div>
        </div>
    )
}

export default Filter