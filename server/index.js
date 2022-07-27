const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());

// Import our controller functions.
const { getChapterOne } = require('./controller.js')

app.get("/api/chapters", getChapterOne)

const SERVER_PORT = 3000
app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))