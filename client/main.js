const chapOneBtn = document.getElementById("chap-one")
const chapSevenBtn = document.getElementById("chap-seven")
const chapTwoBtn = document.getElementById("chap-two")
const chapTwelveBtn = document.getElementById("chap-twelve")
const chapThreeBtn = document.getElementById("chap-three")
const chapElevenBtn = document.getElementById("chap-eleven")
const chapFourBtn = document.getElementById("chap-four")
const chapTenBtn = document.getElementById("chap-ten")
const chapFiveBtn = document.getElementById("chap-five")
const chapNineBtn = document.getElementById("chap-nine")
const chapSixBtn = document.getElementById("chap-six")
const chapEightBtn = document.getElementById("chap-eight")

const baseURL = "http://localhost:3000/api"

//axios request for chap-one button
//GET CHAPTER

const getChapterOne = () => {
    console.log("button hit")
axios.get(baseURL + "/hp/chapters/1")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getChapterSeven = () => {
    console.log("button hit again")
    axios.get(baseURL + "/hp/chapters/7")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getChapterTwo = () => {
    axios.get(baseURL + "/hp/chapters/2")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getChapterTwelve = () => {
    axios.get(baseURL + "/hp/chapters/12")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getChapterThree = () => {
    axios.get(baseURL + "/hp/chapters/3")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getChapterEleven = () => {
    axios.get(baseURL + "/hp/chapters/11")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getChapterFour = () => {
    axios.get(baseURL + "/hp/chapters/4")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

    const getChapterTen = () => {
        axios.get(baseURL + "/hp/chapters/10")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const getChapterFive = () => {
    axios.get(baseURL + "/hp/chapters/5")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getChapterNine = () => {
    axios.get(baseURL + "/hp/chapters/9")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getChapterSix = () => {
    axios.get(baseURL + "/hp/chapters/6")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const getChapterEight = () => {
    axios.get(baseURL + "/hp/chapters/8")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

chapOneBtn.addEventListener('click', getChapterOne)
chapSevenBtn.addEventListener('click', getChapterSeven)
chapTwoBtn.addEventListener('click', getChapterTwo)
chapTwelveBtn.addEventListener('click', getChapterTwelve)
chapThreeBtn.addEventListener('click', getChapterThree)
chapElevenBtn.addEventListener('click', getChapterEleven)
chapFourBtn.addEventListener('click', getChapterFour)
chapTenBtn.addEventListener('click', getChapterTen)
chapFiveBtn.addEventListener('click', getChapterFive)
chapNineBtn.addEventListener('click', getChapterNine)
chapSixBtn.addEventListener('click', getChapterSix)
chapEightBtn.addEventListener('click', getChapterEight)