import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class AlumniAppContainer extends React.Component {
  render () {
    return (
      <div>
        <div className='logo col-md-2 text-center' />
        <div className='col-md-10 title' >Alumni Gallery</div>
        <br />
        <br />
        <hr />
        <div className='col-md-12'>
          <Link to='projects' className='col-md-6 text-center link'>Projects</Link>
          <Link to='/' className='col-md-6 text-center link'>Alumni</Link>
        </div>
        <br />
        <hr />
        {this.props.children}
      </div>
    )
  }
}

export default AlumniAppContainer
