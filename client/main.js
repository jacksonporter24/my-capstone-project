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

const harryPotterNameLogo = document.getElementById('harryExample') 
harryPotterNameLogo.style.display='none';

var onCreatePage = true;

const toggleSwitch = document.getElementById("switch");
toggleSwitch.addEventListener('click', () => {
    const form = document.getElementById('form')

    if(onCreatePage === true) {
        onCreatePage = false
    } else {
        onCreatePage = true
    }

    if(form.style.display === 'none') {
        //Below shows the form
        form.style.display = 'block';
    } else {
        //this hides the form
        form.style.display = 'none';
    }

    if(harryPotterNameLogo.style.display === 'block') {
        harryPotterNameLogo.style.display = 'none';
    } else {
        harryPotterNameLogo.style.display = 'block'
    }

})

const baseURL = "http://localhost:3000/api"

//axios request for chap-one button
//GET CHAPTER

const getChapterOne = () => {
    if(onCreatePage) {
        //this means they are on the create page and we need to get their user data
        axios.get(baseURL + "/user/chapters/1")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/1")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
    
}

const getChapterSeven = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/7")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/7")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

const getChapterTwo = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/2")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/2")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

const getChapterTwelve = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/12")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/12")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

const getChapterThree = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/3")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/3")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

const getChapterEleven = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/11")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/11")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

const getChapterFour = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/4")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/4")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

    const getChapterTen = () => {
        if(onCreatePage) {
            axios.get(baseURL + "/user/chapters/10")
            .then(res => {
                const data = res.data
                alert(data)
            })
        } else {
            axios.get(baseURL + "/hp/chapters/10")
            .then(res => {
                const data = res.data
                alert(data)
            })
        }
}

const getChapterFive = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/5")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/5")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

const getChapterNine = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/9")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/9")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

const getChapterSix = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/6")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/6")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

const getChapterEight = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/8")
        .then(res => {
            const data = res.data
            alert(data)
        })
    } else {
        axios.get(baseURL + "/hp/chapters/8")
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
}

const userTextBox = document.getElementById("userInput")
const pickAPart = document.getElementById("parts")
const submitBtn = document.getElementById("submit")

const saveUserInput = () => {
    let textBoxInput= userTextBox.value
    if (pickAPart.value === "first") {
        axios.post(baseURL + "/user/chapters/1", {"description": textBoxInput})
        .then(res => {
            const data = res.data
            alert(data)
        })
    }
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

submitBtn.addEventListener('click', saveUserInput)
