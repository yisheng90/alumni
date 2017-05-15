import React from 'react'
import githubHelper from '../utils/githubHelper'
import jsonData from '../../data.json'
import ProjectList from '../components/ProjectList'
import Filter from '../components/Filter'

class ProjectListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      alumni: {},
      current: '',
      filter: null,
      hoverItem: null
    }
  }
  componentWillMount () {
    console.log('componentDidMount ')
    let query = jsonData
    githubHelper.getAlumniInfo(query).then((users) => {
      this.setState({
        isLoading: false,
        alumni: users
      })
    })
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
  handleMouseOver (e, projects) {
    console.log('PROJECT CLICKED', projects)
    this.setState({
      hoverItem: projects
    })
  }
  render () {
    return (
      <div>
        <Filter onChange={(e) => this.handleChange(e)} placeholder='Search Project' />
        <ProjectList alumni={this.state.alumni} isLoading={this.state.isLoading} filter={this.state.filter} handleMouseOver={(e, projects) => this.handleMouseOver(e, projects)} hoverItem={this.state.hoverItem} />
      </div>

    )
  }
}

export default ProjectListContainer
