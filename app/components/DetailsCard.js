import React from 'react'
import Project from './Project'
import ProjectList from '../components/ProjectList'

let AlumniDetails = (props) => {
  let user = props.alumni
  let current = props.current
  let styles = {
    height: 250,
    borderBottom: 'solid black 1px'
  }

  if (props.current) {
    styles = {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  }

  return (
    <div className='card col-md-12' >
      <br />
      <div className='card-block col-md-12' style={styles}>
        <div className='col-md-3'>
          <span className='align-middle'><img className='card-img-top col-md-12' src={user.avatar_url} alt='Card image cap' /></span>
        </div>
        <div className='col-md-9' onClick={(e, data) => props.onClick(e, user)} >
          <h4 className='card-title'><strong>{user.name}</strong> </h4>
          <h4>@{user.login}</h4>
          <p className='card-text' style={{height: 30}} >{user.bio}</p>
          <br />

          <div>
            <span className='glyphicon glyphicon-tag' >WDI {user.local.batch}</span><br />
            { user.location && <span className='glyphicon glyphicon-map-marker' >{user.location}</span>}
          </div>
        </div>
        <div className='col-md-9'>
          <a href={user.html_url} className='fa fa-github align-bottom' style={{fontSize: 36, zIndex: 1}} />
          {user.blog && <a href={user.blog} className='glyphicon glyphicon-link align-bottom'style={{fontSize: 28, margin: 10}} />}
        </div>

      </div>
      {props.current &&
        <div className='col-md-12' style={{borderBottom: 'solid black 1px'}}>
          <br />
          <ProjectList alumni={[user]} />
        </div>

      }
      <hr />
    </div>
  )
}

export default AlumniDetails
