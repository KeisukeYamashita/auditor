import * as ff from '@google-cloud/functions-framework'

export default ff.http('auditor', async (req, res) => {
    console.log('Request:', req)
})
