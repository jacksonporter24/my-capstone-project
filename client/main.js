const chapOneBtn = document.getElementById("chap-one")

const baseURL = "http://localhost:3000/api/chapters"

//axios request for chap-one button
//GET CHAPTER

const getChapterOne = () => {
    console.log("button hit")
axios.get(baseURL)
    .then(res => {
        const data = res.data
        alert(data)
    })
}

chapOneBtn.addEventListener('click', getChapterOne)