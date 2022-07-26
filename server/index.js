const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());

// Import our controller functions.
const { getChapterOne, getChapterSeven, getChapterFinal, getChapterTwo, getChapterTwelve, getChapterThree, getChapterEleven, getChapterFour, getChapterTen, getChapterFive, getChapterNine, getChapterSix, getChapterEight, getUserChapterOne, getUserChapterSeven, getUserChapterFinal, getUserChapterTwo, getUserChapterTwelve, getUserChapterThree, getUserChapterEleven, getUserChapterFour, getUserChapterTen, getUserChapterFive, getUserChapterNine, getUserChapterSix, getUserChapterEight, postUserChapterOne, postUserChapterSeven, postUserFinalChapter, postUserChapterTwo, postUserChapterTwelve, postUserChapterThree, postUserChapterEleven, postUserChapterFour, postUserChapterTen, postUserChapterFive, postUserChapterNine, postUserChapterSix, postUserChapterEight, deleteUserChapters } = require('./controller.js')

//app.get HARRY CHAPTERS
app.get("/api/hp/chapters/1", getChapterOne)
app.get("/api/hp/chapters/7", getChapterSeven)
app.get("/api/hp/chapters/final", getChapterFinal)

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

//app.get USER CHAPTERS
app.get("/api/user/chapters/1", getUserChapterOne)
app.get("/api/user/chapters/7", getUserChapterSeven)
app.get("/api/user/chapters/final", getUserChapterFinal)

app.get("/api/user/chapters/2", getUserChapterTwo)
app.get("/api/user/chapters/12", getUserChapterTwelve)

app.get("/api/user/chapters/3", getUserChapterThree)
app.get("/api/user/chapters/11", getUserChapterEleven)

app.get("/api/user/chapters/4", getUserChapterFour)
app.get("/api/user/chapters/10", getUserChapterTen)

app.get("/api/user/chapters/5", getUserChapterFive)
app.get("/api/user/chapters/9", getUserChapterNine)

app.get("/api/user/chapters/6", getUserChapterSix)
app.get("/api/user/chapters/8", getUserChapterEight)

//app.post USER CHAPTERS

app.post("/api/user/chapters/1", postUserChapterOne)
app.post("/api/user/chapters/7", postUserChapterSeven)
app.post("/api/user/chapters/final", postUserFinalChapter)

app.post("/api/user/chapters/2", postUserChapterTwo)
app.post("/api/user/chapters/12", postUserChapterTwelve)

app.post("/api/user/chapters/3", postUserChapterThree)
app.post("/api/user/chapters/11", postUserChapterEleven)

app.post("/api/user/chapters/4", postUserChapterFour)
app.post("/api/user/chapters/10", postUserChapterTen)

app.post("/api/user/chapters/5", postUserChapterFive)
app.post("/api/user/chapters/9", postUserChapterNine)

app.post("/api/user/chapters/6", postUserChapterSix)
app.post("/api/user/chapters/8", postUserChapterEight)

//DELETE USER CHAPTERS
app.delete("/api/delete", deleteUserChapters)

const SERVER_PORT = 3000
app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))