const fs = require('fs')
let githubEvent = process.env.EVENT
githubEvent = JSON.parse(githubEvent)
// console.log(process.env)
let token = process.env.INPUT_REPO_TOKEN
if (!token) {
  return
} else {
  const repo = process.env.GITHUB_REPOSITORY
  const rawData = fs.readFileSync(process.env.GITHUB_EVENT_PATH)
  const json = JSON.parse(rawData)
  // console.log(pr)
  const { pull_request: pr } = json
  const author = pr.user.login
  const mergedAt = pr.merged_at
  console.log({ repo })
  console.log({ author })
  console.log({ mergedAt })
}
// const now = new Date()
// const nowIso = now.toISOString()

// const query = '{\
//   search(first: 2, type:ISSUE, query: "") {\
//     issueCount\
//   }\
// }'