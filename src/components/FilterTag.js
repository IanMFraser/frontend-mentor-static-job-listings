import React from 'react'
import iconRemove from '../images/icon-remove.svg'

const FilterTag = ({name, removeTag}) => {
    
    return(
        <div className="FilterTag">
            <div className="tag-label">
                <p>
                    {name}
                </p>
            </div>
            <button className="close-tag" onClick={removeTag} value={name}><img src={iconRemove} alt="remove-icon" /></button>
        </div>
    )
}

export default FilterTag