const fs = require('fs')
let githubEvent = process.env.EVENT
githubEvent = JSON.parse(githubEvent)
console.log(process.env)
let token = process.env.INPUT_REPO_TOKEN
if (!token) {
  return
} else {
  const rawData = fs.readFileSync(process.env.GITHUB_EVENT_PATH)
  console.log(rawData)
}
// const now = new Date()
// const nowIso = now.toISOString()

// const query = '{\
//   search(first: 2, type:ISSUE, query: "") {\
//     issueCount\
//   }\
// }'