let githubEvent = process.env.EVENT
githubEvent = JSON.parse(githubEvent)
console.log(process.env)
console.log(githubEvent)
if (process.env.INPUT_REPO_TOKEN) {
  console.log("repo token exists")
}
const now = new Date()
const nowIso = now.toISOString()

const query = '{\
  search(first: 2, type:ISSUE, query: "") {\
    issueCount\
  }\
}'