# WDI SG Alumni Gallery : JavaScript Frontend Framework Challenge
Your objective is to learn your chosen JavaScript frontend framework and use it to build a Single Page App (SPA) that connects to the Github API and displays a list of WDI SG alumni, students, and their projects. The requirements are given below.

You will implement this project independently but you will be learning your front-end framework in groups. Each group will be lead by a member of the Instructional Team, who will take the role of the Senior Developer. This is an opportunity for you too see what it will be like to learn on the job as part of a team. It is recommended that you setup a Slack Channel to communicate, and a Trello board to share resources. 

The development of the project should be approached in phases, details of which are below. 

__Note. The emphasis is on learning the framework, so focus on understanding (i.e. don't implement anything you don't understand).__

## Phase 1
You will be building a SPA, that means you will have only one HTML page, and all HTTP requests should be made using AJAX. 

To start you need to retrieve the following JSON file, which contains a list of all alumni & students, including their Github names, individual project repository names and links to their deployed applications.

https://raw.githubusercontent.com/wdi-sg/alumni/master/data.json

The results will look like so:

```json
[
  {
    "batch": "0",
    "githubLogin": "jeremiahalex",
    "project1": {
      "repoName": "project-1",
      "deployedUrl": "http://jeremiah.sg"
    },
    "project2": {
      "repoName": "project-2",
      "deployedUrl": "http://jeremiah.sg"
    },
    "project3": {
      "repoName": "project-3",
      "deployedUrl": "http://jeremiah.sg",
      "collaborators": ["nickangtc", "terencelimsayjian"]
    },
    "project4": {
      "repoName": "project-4",
      "deployedUrl": "http://jeremiah.sg"
    }
  }
]
```

Using the `githubLogin` and the `repoName` of the various projects, you will be able to fetch additional information from the public Github API, examples below:

__Examples__
`https://api.github.com/users/jeremiahalex` will return details about the user named __jeremiahalex__
'https://api.github.com/repos/wdi-sg/peanuts-api' will return details about the repo named __peanuts-api__ owned by the user/org __wdi-sg__
`https://api.github.com/repos/wdi-sg/peanuts-api/readme` will return the readme details for the above project. You'll probably want to grab the __download_url__ to get the raw file e.g. `https://raw.githubusercontent.com/wdi-sg/peanuts-api/master/README.md`
`https://api.github.com/repos/wdi-sg/peanuts-api/contents/index.js` will return the file details for the file __index.js__ in the project, again you probabaly want to grab the __download_url__ to get the raw file.

### User Stories
...
### Presentations
Each Group (excluding Instructional Team Members) will teach a half-day class on the framework. It should include
- the philosophy of the framework
- it's strengths and weaknesses
- A getting started code along
