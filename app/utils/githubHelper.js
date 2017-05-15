let axios = require('axios')

let getUserInfo = (username) => {
  return axios.get('https://api.github.com/users/' + username + '?access_token=b6d438aa4e7659e3b041348c2c4932736d4606fd')
}

let setPicture = (userData) => {
  let projects = ['project1', 'project2', 'project3']
  projects.map((project) => {
    if (userData.local[project] && !userData.local[project].previewImage) {
      userData.local[project].previewImage = userData.avatar_url
    }
  })
}

let getProjectReadMe = (user, project) => {
  return axios.get('https://raw.githubusercontent.com/' + user + '/' + project + '/master/README.md?access_token=b6d438aa4e7659e3b041348c2c4932736d4606fd')
}

let helpers = {
  getAlumniInfo: (localData) => {
    return axios.all(localData.map((user) => {
      return getUserInfo(user.githubLogin)
    })).then((info) => {
      return info.map(function (user, index) {
        user.data['local'] = localData[index]
        setPicture(user.data)
        return user.data
      })
    })
  },
  getProjectInfo: (user, projectName) => {
    return getProjectReadMe(user, projectName).then((project) => {
      return project.data
    })
  }
}

export default helpers
