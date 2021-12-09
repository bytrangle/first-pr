let githubEvent = process.env.EVENT
githubEvent = JSON.parse(githubEvent)
console.log(githubEvent)
const now = new Date()
const nowIso = now.toISOString()

const query = '{\
  search(first: 2, type:ISSUE, query: "") {\
    issueCount\
  }\
}'