// Import chapters form json file.
// const chapters = require('../db.json')

const harryPotterChapters = ["First and Last Chapter", "Second and Twelfth", "Third and Eleventh"]

//Export functions to use in the main server file. 
module.exports = {

    getChapterOne: (req, res) => {
        let firstAndLastChapter = harryPotterChapters[0]
        res.status(200).send(firstAndLastChapter)
    }
}