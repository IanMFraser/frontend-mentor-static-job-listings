import React, { useState } from 'react';
import DisplayJobs from './components/DisplayJobs';
import Header from './components/Header';
import { data } from './modules/data.js';
import './App.css';

const App = () => {

  //pull in the data from the data module
  const jobs = data

  //hold all search tags in a state array
  const [tags, setTags] = useState([])

  //are we filtering results?
  const [filtered, setFiltered] = useState(false)

  //onclick handler to display filter bar and it's stored tags
  const filterHandler = (e) => {
    if(!tags.includes(e.target.innerHTML) ) {
      setTags([...tags, e.target.innerHTML])
      setFiltered(true)
    }
  }

  //remove item
  const removeTag = (e) => {
    const tagName = e.target.parentNode.value
    const update = tags.filter(tag => tag !== tagName)

    if(update.length <= 0) {
      setFiltered(false)
    }
    setTags([...update])
  } 

  //clear all
  const clearFilter = () => {
    setTags([])
    setFiltered(false)
  }

  //filtered data for display
  const filteredJobs = filtered ? jobs.filter( job => {
    const level = job.level
    const role = job.role
    const tools = [...job.tools]
    const languages = [...job.languages]

    return tags.includes(level) || tags.includes(role) || tags.some( tag => tools.includes(tag)) || tags.some( tag => languages.includes(tag))
  }) : jobs

  return (
    <div className="App">
      <Header />
      <DisplayJobs 
        jobs={filteredJobs} 
        filterHandler={filterHandler} 
        tags={tags} 
        clearFilter={clearFilter} 
        removeTag={removeTag}
      />
    </div>
  );
}

export default App;
