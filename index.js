console.log(process.env)
const now = new Date()
const nowIso = now.toISOString()

const query = '{\
  search(first: 2, type:ISSUE, query: "") {\
    issueCount\
  }\
}'