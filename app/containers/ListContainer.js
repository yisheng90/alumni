import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import List from '../components/List'
import githubHelper from '../utils/githubHelper'
import jsonData from '../../data.json'
import Filter from '../components/Filter'

class ListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      alumni: [],
      current: '',
      users: jsonData,
      filter: null
    }
  }

  handleClick (e, user) {
    e.preventDefault()

    let dataSet = jsonData.filter((data) => {
      return data.githubLogin.toLowerCase() === user.login.toLowerCase()
    })

    console.log('Check', dataSet)
    console.log('Current', this.state.current)
    if (this.state.current && this.state.current.githubLogin.toLowerCase() === dataSet[0].githubLogin.toLowerCase()) {
      this.setState({
        current: ''
      })
    } else {
      this.setState({
        current: dataSet[0]
      })
    }

    // this.context.router.push({
    //   pathname: '/' + user.login,
    //   query: {
    //     user: user.login
    //   }
    // })
  }
  handleChange (e) {
    e.preventDefault()
    console.log('THIS IS HANDLE CHANEG', e.target.value)
    let targetValue = null

    if (e.target.value) {
      targetValue = e.target.value.replace(/\s+/g, '')
    }

    this.setState({
      filter: targetValue
    })
  }
  componentDidMount () {
    console.log('componentDidMount ')
    let query = jsonData
    githubHelper.getAlumniInfo(query).then((users) => {
      this.setState({
        isLoading: false,
        alumni: users
      })
    })
  }
  render () {
    return (
      <div>
        <div className='col-md-12'>
          <Filter onChange={(e) => this.handleChange(e)} placeholder='Search Alumni in WDI Batch No (eg 1, 7) or Alumni Name' />
          <List alumni={this.state.alumni} isLoading={this.state.isLoading} handleClick={(e, user) => this.handleClick(e, user)} current={this.state.current} projectsData={this.state.users} filter={this.state.filter} />
        </div>
        {this.props.children}
      </div>
    )
  }
}

ListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ListContainer
