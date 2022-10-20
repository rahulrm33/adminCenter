const express = require('express')
require('./mongoose')
const userRouter = require('./user.router')

const app = express()
const port = 8000

app.use(express.json())
app.use(userRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})