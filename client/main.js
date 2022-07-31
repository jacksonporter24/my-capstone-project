//this is my button retrievals
const chapOneBtn = document.getElementById("chap-one")
const chapFinalBtn = document.getElementById("chap-final")
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
const userTextBox = document.getElementById("userInput")
const pickAPart = document.getElementById("parts")
const submitBtn = document.getElementById("submit")
const harryPotterNameLogo = document.getElementById('harryExample') 
const myModalLeft = document.getElementById("myModalLeft")
const myModalRight = document.getElementById("myModalRight")
const closeButton = document.getElementsByClassName("close")[0]
const closeButtonRight = document.getElementsByClassName("closeRight")[0]
const paragraphBtn = document.getElementById("paragraph")
const paragraphRightBtn = document.getElementById("paragraphRight")

//this is the setup
harryPotterNameLogo.style.display='none';
var onCreatePage = true;

//this is the stuff that is used by more than one button
const closeButtonClicked = () => {
    myModalLeft.style.display="none"
    myModalRight.style.display="none"
}

//this is the display buttons and parts on the screen
const toggleSwitch = document.getElementById("switch");
toggleSwitch.addEventListener('click', () => {
    const form = document.getElementById('form')

    if(onCreatePage === true) {
        onCreatePage = false
        document.body.style.backgroundColor="tan"
        document.body.style.cursor="url(https://cdn.custom-cursor.com/packs/420/pack381.png), auto"
    } else {
        onCreatePage = true
        document.body.style.backgroundColor="white"
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
            paragraphBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/1")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    }
    if(onCreatePage) {
        //this means they are on the create page and we need to get their user data
        axios.get(baseURL + "/user/chapters/final")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/final")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    }
    myModalRight.style.display = "block";
    myModalLeft.style.display = "block";
}

const getChapterFinal = () => {
    if(onCreatePage) {
        //this means they are on the create page and we need to get their user data
        axios.get(baseURL + "/user/chapters/final")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/final")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    }
    myModalRight.style.display = "block";
}

const getChapterSeven = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/7")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/7")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    }
    myModalLeft.style.display = "block";
}

const getChapterTwo = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/2")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/2")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    }
    myModalLeft.style.display = "block";
}

const getChapterTwelve = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/12")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/12")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    }
    myModalRight.style.display = "block";
}



const getChapterThree = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/3")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/3")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    }
    myModalLeft.style.display = "block";
}

const getChapterEleven = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/11")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/11")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    }
    myModalRight.style.display = "block";
}

const getChapterFour = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/4")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/4")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    }
    myModalLeft.style.display = "block";
}

    const getChapterTen = () => {
        if(onCreatePage) {
            axios.get(baseURL + "/user/chapters/10")
            .then(res => {
                const data = res.data
                paragraphRightBtn.innerText = data
            })
        } else {
            axios.get(baseURL + "/hp/chapters/10")
            .then(res => {
                const data = res.data
                paragraphRightBtn.innerText = data
            })
        }
        myModalRight.style.display = "block";
    }

const getChapterFive = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/5")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/5")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    }
    myModalLeft.style.display = "block";
}

const getChapterNine = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/9")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/9")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    }
    myModalRight.style.display = "block";
}

const getChapterSix = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/6")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/6")
        .then(res => {
            const data = res.data
            paragraphBtn.innerText = data
        })
    }
    myModalLeft.style.display = "block";
}

const getChapterEight = () => {
    if(onCreatePage) {
        axios.get(baseURL + "/user/chapters/8")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    } else {
        axios.get(baseURL + "/hp/chapters/8")
        .then(res => {
            const data = res.data
            paragraphRightBtn.innerText = data
        })
    }
    myModalRight.style.display = "block";
}


const saveUserInput = () => {
    let textBoxInput= userTextBox.value
    if (pickAPart.value === "first") {
        axios.post(baseURL + "/user/chapters/1", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "final") {
        axios.post(baseURL + "/user/chapters/final", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    } 
    else if (pickAPart.value === "seventh") {
        axios.post(baseURL + "/user/chapters/7", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "second") {
        axios.post(baseURL + "/user/chapters/2", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "twelfth") {
        axios.post(baseURL + "/user/chapters/12", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "third") {
        axios.post(baseURL + "/user/chapters/3", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "eleventh") {
        axios.post(baseURL + "/user/chapters/11", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "fourth") {
        axios.post(baseURL + "/user/chapters/4", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "tenth") {
        axios.post(baseURL + "/user/chapters/10", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "fifth") {
        axios.post(baseURL + "/user/chapters/5", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "ninth") {
        axios.post(baseURL + "/user/chapters/9", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "sixth") {
        axios.post(baseURL + "/user/chapters/6", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
    else if (pickAPart.value === "eighth") {
        axios.post(baseURL + "/user/chapters/8", {"description": textBoxInput})
        .then(res => {
            const data = res.data
        })
    }
}

//this is the onclick listeners
chapOneBtn.addEventListener('click', getChapterOne)
chapFinalBtn.addEventListener('click', getChapterFinal)
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
closeButton.addEventListener('click', closeButtonClicked)
closeButtonRight.addEventListener('click', closeButtonClicked)