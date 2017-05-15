    import React from 'react'
import githubHelper from '../utils/githubHelper'
import Markdown from 'react-remarkable'

class ProjectInfoContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      project: null
    }
  }
  componentWillMount () {
    console.log('THIS IS FOR INFO', this.props.params.id)
    console.log('THIS IS FOR INFO QUERY', this.props.location.query.owner)
    githubHelper.getProjectInfo(this.props.location.query.owner, this.props.params.id).then((apiProject) => {
      this.setState({
        isLoading: false,
        project: apiProject
      })
      console.log('PROJECT README', this.state.project)
    })
  }
  render () {
    return (
      <div>
        <Markdown source={this.state.project} />
      </div>
    )
  }
}

export default ProjectInfoContainer
