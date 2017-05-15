
let setProject = (alumni) => {
  let projects = []

  if (alumni.local.project1) {
    alumni.local.project1['owner'] = alumni
    projects.push(alumni.local.project1)
  }

  if (alumni.local.project2) {
    alumni.local.project2['owner'] = alumni
    projects.push(alumni.local.project2)
  }

  if (alumni.local.project3) {
    alumni.local.project3['owner'] = alumni
    projects.push(alumni.local.project3)
  }

  return projects
}

let removeDuplicate = (array) => {
  let unique = {}
  let projects = []

  array.map((project) => {
    console.log(Object.keys(unique).includes(project.deployedUrl))
    if (!Object.keys(unique).includes(project.deployedUrl)) {
      projects.push(project)
      unique[project.deployedUrl] = 1
    }
  })
  console.log('PROJECT D', projects)
  return projects
}

let helpers = {
  getProject: (allAlumni) => {
    let projects = []
    allAlumni.map((alumni) => {
      let alumniProject = setProject(alumni)
      projects = projects.concat(alumniProject)
      console.log('PROJECT ALL', projects)
    })
    return removeDuplicate(projects)
  },
  filterProject: (projects, filter) => {
    let filteredProjects = []
    projects.map((project) => {
      if (project.repoName.toLowerCase().includes(filter.toLowerCase())) {
        filteredProjects.push(project)
      }
    })
    return filteredProjects
  }

}

export default helpers
