import React from 'react'
import Project from './Project'
import projectHelper from '../utils/projectHelper'

let ProjectList = (props) => {
  if (!props.isLoading) {
    let projects = projectHelper.getProject(props.alumni)
    if (props.filter) {
      projects = projectHelper.filterProject(projects, props.filter)
    }

    console.log('THIS IS PROJECT LIST', projects)
    return (
      <div>
        <Project projects={projects} handleMouseOver={(e, projects) => props.handleMouseOver(e, projects)} hoverItem = {props.hoverItem}/>
      </div>
    )
  } else {
    return (
      <div>
        Loading
      </div>
    )
  }
}

export default ProjectList
