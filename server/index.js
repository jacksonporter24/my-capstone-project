const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());

// Import our controller functions.
const { getChapterOne, getChapterSeven, getChapterTwo, getChapterTwelve, getChapterThree, getChapterEleven, getChapterFour, getChapterTen, getChapterFive, getChapterNine, getChapterSix, getChapterEight } = require('./controller.js')

app.get("/api/hp/chapters/1", getChapterOne)
app.get("/api/hp/chapters/7", getChapterSeven)

app.get("/api/hp/chapters/2", getChapterTwo)
app.get("/api/hp/chapters/12", getChapterTwelve)

app.get("/api/hp/chapters/3", getChapterThree)
app.get("/api/hp/chapters/11", getChapterEleven)

app.get("/api/hp/chapters/4", getChapterFour)
app.get("/api/hp/chapters/10", getChapterTen)

app.get("/api/hp/chapters/5", getChapterFive)
app.get("/api/hp/chapters/9", getChapterNine)

app.get("/api/hp/chapters/6", getChapterSix)
app.get("/api/hp/chapters/8", getChapterEight)

const SERVER_PORT = 3000
app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))