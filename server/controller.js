// This is a gigantic array that holds all the HP chapter examples. 

const harryPotterChapters = [`CHAPTER 1: The Boy Who Lived
CHAPTER 2: The Vanishing Glass
CHAPTER 9: The Midnight Duel
CHAPTER 17: The Man With Two Faces

Harry is out and under his Invisibility Cloak at midnight and survives a face-to face meeting with Fluffy. 

The pivot chapter is named for the turning point in every day’s accounting of time and for the resolution of contraries a ‘duel’ represents (there is no duel in the chapter). 

Harry’s survives the Dark Lord, a visit with a snake, a run-in with Fluffy (and in the next chapter, with a Troll) a well as Quorrelldemor before the Mirror of Erised which gives the reader ‘Miraculous Survival’ chapters in the beginning, middle, and end.`, 

`CHAPTER 3: The Letters from No One
CHAPTER 16: Through the Trapdoor

The Dursleys flee magical danger across the UK as Uncle Vernon fears for his life; Harry with Ron and Hermione pursue real danger under Hogwarts with little thought for their lives.`, 

`CHAPTER 4: The Keeper of the Keys
CHAPTER 5: Diagon Alley
CHAPTER 13: Nicholas Flamel
CHAPTER 14: Norbert the Norwegian Ridgeback
CHAPTER 15: The Forbidden Forest

Harry meets Hagrid in the House on the Rock and learns his wizard identity before he travels into the Diagon Alley world hidden behind The Leaky Cauldron.

In the second half, Harry travels with Hagrid into the dark world of the Forbidden Forest, protects his protector by shipping off Norbert, and learns the identity of the mysterious Stone’s owner.`, 

`CHAPTER 6: The Journey from Platform Nine and Three-quarters
CHAPTER 12: The Mirror of Erised

Ron and Harry meet and share their complementary and opposite fears on the Hogwarts Express.

And, at Christmas time, they share their as different dreams in front of the Mirror of Erised. Harry without family longs to be with them; Ron from a large family wants to start apart.`,

`CHAPTER 7: The Sorting Hat
CHAPTER 11: Quidditch

Harry passes two tests – the Sorting Hat and a confrontation with a flying Draco to capture a round object – to qualify for two teams that are fundamental to his identity, namely, Gryffindor House member and Seeker on the Quidditch team. 

Both tests are administered by Professor McGonagall, of course, and feature Slytherin echoes. If not for Draco cueing Harry in to the nastiness of Slytherin or egging him at the flying class, how different his life might have been!`,

`CHAPTER 8: The Potions Master
CHAPTER 10: Halloween

Just before the central chapter, Harry meets his worst male adult enemy at Hogwarts. Just after the break, he makes his best girl-student friend. Of course, those not enamored with Alan Rickman would say the echo here – with no reverse, is Snape and the Mountain Troll as reflected images.`]


const exampleChapters = ["", "", "", "", "", "", "", "", "", "", "", ""]

//Export functions to use in the main server file. 

module.exports = {

    getChapterOne: (req, res) => {
        let firstAndLastChapter = harryPotterChapters[0]
        res.status(200).send(firstAndLastChapter)
    },

    getUserChapterOne: (req, res) => {
        let firstAndLastChapter = exampleChapters[0]
        res.status(200).send(firstAndLastChapter)
    },

    getChapterSeven: (req, res) => {
        let chapterSeven = harryPotterChapters[0]
        res.status(200).send(chapterSeven)
    },

    getUserChapterSeven: (req, res) => {
        let chapterSeven = exampleChapters[0]
        res.status(200).send(chapterSeven)
    },

    getChapterTwo: (req, res) => {
        let chapterTwo = harryPotterChapters[1]
        res.status(200).send(chapterTwo)
    },

    getUserChapterTwo: (req, res) => {
        let chapterTwo = exampleChapters[1]
        res.status(200).send(chapterTwo)
    },

    getChapterTwelve: (req, res) => {
        let chapterTwelve = harryPotterChapters[1]
        res.status(200).send(chapterTwelve)
    },

    getUserChapterTwelve: (req, res) => {
        let chapterTwelve = exampleChapters[1]
        res.status(200).send(chapterTwelve)
    },

    getChapterThree: (req, res) => {
        let chapterThree = harryPotterChapters[2]
        res.status(200).send(chapterThree)
    },

    getUserChapterThree: (req, res) => {
        let chapterThree = exampleChapters[2]
        res.status(200).send(chapterThree)
    },

    getChapterEleven: (req, res) => {
        let chapterEleven = harryPotterChapters[2]
        res.status(200).send(chapterEleven)
    },

    getUserChapterEleven: (req, res) => {
        let chapterEleven = exampleChapters[2]
        res.status(200).send(chapterEleven)
    },

    getChapterFour: (req, res) => {
        let chapterFour = harryPotterChapters[3]
        res.status(200).send(chapterFour)
    },

    getUserChapterFour: (req, res) => {
        let chapterFour = exampleChapters[3]
        res.status(200).send(chapterFour)
    },

    getChapterTen: (req, res) => {
        let chapterTen = harryPotterChapters[3]
        res.status(200).send(chapterTen)
    },

    getUserChapterTen: (req, res) => {
        let chapterTen = exampleChapters[3]
        res.status(200).send(chapterTen)
    },

    getChapterFive: (req, res) => {
        let chapterFive = harryPotterChapters[4]
        res.status(200).send(chapterFive)
    },

    getUserChapterFive: (req, res) => {
        let chapterSeven = exampleChapters[4]
        res.status(200).send(chapterFive)
    },

    getChapterNine: (req, res) => {
        let chapterNine = harryPotterChapters[4]
        res.status(200).send(chapterNine)
    },

    getUserChapterNine: (req, res) => {
        let chapterNine = exampleChapters[4]
        res.status(200).send(chapterNine)
    },

    getChapterSix: (req, res) => {
        let chapterSix = harryPotterChapters[5]
        res.status(200).send(chapterSix)
    },

    getUserChapterSix: (req, res) => {
        let chapterSix = exampleChapters[5]
        res.status(200).send(chapterSix)
    },

    getChapterEight: (req, res) => {
        let chapterEight = harryPotterChapters[5]
        res.status(200).send(chapterEight)
    },

    getUserChapterEight: (req, res) => {
        let chapterEight = exampleChapters[5]
        res.status(200).send(chapterEight)
    },

    postUserChapterOne: (req, res) => {
        let userChapterOne = req.body.description
        exampleChapters[0] = userChapterOne
        res.status(200).send(userChapterOne)
    }
}