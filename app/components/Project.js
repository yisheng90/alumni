import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

let Project = (props) => {
  let projects = props.projects
  console.log('THIS IS IN PROJECT', projects)

  let convertedProject = projects.map((project) => {
    let styles = null

    if (props.hoverItem && project.deployedUrl === props.hoverItem.deployedUrl) {
      styles = {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 200,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 80
      }
    }
    return (
      <div className='col-md-4' id={project.repoName} style={{height: 350}} >
        <Link to={{
          pathname: '/projects/' + project.repoName,
          query: {
            owner: project.owner.login
          }
        }}>

          <div className='col-md-12' onMouseOver={(e, projects) => props.handleMouseOver(e, project)}>
            <img src={project.previewImage} className='col-md-11 col-md-offset-1' style={{height: 200}} />
            {styles && <div className='col-md-10 col-md-offset-1 text-center' style={styles} >Read More</div>}
            <h4 className='text-center'>{project.repoName}</h4>
            <p className='text-center'> By <strong>{project.owner.login}</strong></p>
          </div>

        </Link>
        <p className='text-center'><a href={project.deployedUrl} >Visit This Page</a></p>
      </div>

    )
  })

  return (
    <div>
      {convertedProject}
    </div>
  )
}

export default Project
