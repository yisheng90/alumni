import React from 'react'
import DetailsCard from './DetailsCard'

let List = (props) => {
  if (props.isLoading) {
    return (
      <div>
        <h1> Loading </h1>
      </div>
    )
  } else {
    let allAlumni = props.alumni
    if (props.filter) {
      allAlumni = props.alumni.filter((alumni) => {
        return alumni.local.batch.includes(props.filter) || alumni.login.includes(props.filter)
      })
    }

    let database = allAlumni.map((d, index) => {
      if (props.current && d.login.toLowerCase() === props.current.githubLogin.toLowerCase()) {
        return (
          <DetailsCard key={d.id} alumni={d} onClick={(e, user) => props.handleClick(e, user)} current={props.current} />
        )
      } else {
        return (
          <DetailsCard key={d.id} alumni={d} onClick={(e, user) => props.handleClick(e, user)} />
        )
      }
    })

    return (
      <div className='row'>
        {database}
      </div>
    )
  }
}

export default List
