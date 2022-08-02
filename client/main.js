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
const circle = document.getElementById("circle")
const lineOne = document.getElementById("line-one")
const lineTwo = document.getElementById("line-two")
const lineThree = document.getElementById("line-three")
const lineFour = document.getElementById("line-four")
const lineFive = document.getElementById("line-five")
const lineSix = document.getElementById("line-six")
const verticleLine = document.getElementById("verticle-line")

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
        document.body.style.backgroundColor="#D3A625"
        circle.style.background="#740001"
        lineOne.style.background="white"
        lineTwo.style.background="white"
        lineThree.style.background="white"
        lineFour.style.background="white"
        lineFive.style.background="white"
        lineSix.style.background="white"
        verticleLine.style.background="white"
    } else {
        onCreatePage = true
        document.body.style.backgroundColor="#89CFF0"
        circle.style.background="lightgray"
        lineOne.style.background="black"
        lineTwo.style.background="black"
        lineThree.style.background="black"
        lineFour.style.background="black"
        lineFive.style.background="black"
        lineSix.style.background="black"
        verticleLine.style.background="black"
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
    myModalRight.style.display = "block";
    myModalLeft.style.display = "block";
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
    myModalLeft.style.display = "block";
    myModalRight.style.display = "block";
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
    myModalRight.style.display = "block";
    myModalLeft.style.display = "block";
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
    myModalLeft.style.display = "block";
    myModalRight.style.display = "block";
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
    myModalRight.style.display = "block";
    myModalLeft.style.display = "block";
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

    myModalLeft.style.display = "block";
    myModalRight.style.display = "block";
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
        myModalRight.style.display = "block";
        myModalLeft.style.display = "block";
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
    myModalLeft.style.display = "block";
    myModalRight.style.display = "block";
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
    myModalRight.style.display = "block";
    myModalLeft.style.display = "block";
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
    myModalLeft.style.display = "block";
    myModalRight.style.display = "block";
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
    myModalRight.style.display = "block";
    myModalLeft.style.display = "block";
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

const deleteButton = document.getElementById("deleteButton")

const deleteUserChapters = () => {
    axios.delete(`http://localhost:3000/api/delete/`)
        .then((res, err) => {
            let itemsToDelete = res.data
            for(let index = 0; index < itemsToDelete; index++) {
                let element = document.getElementById(index)
                if(element != null) {
                    element.remove()
                }
            }
        })
}

//this is the onclick listeners

deleteButton.addEventListener("click", deleteUserChapters)

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