const cors = require('cors')
const express = require('express')
const config = require('config')
const userRouter = require('./routes/user.routes')


const app = express()

const PORT = config.get('port')

app.use(cors());
app.use(express.json({extended: true}))
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`App was started, port: ${PORT}...`))

