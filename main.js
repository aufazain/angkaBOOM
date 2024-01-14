// JS file for Tebak Angka
const display = document.getElementById("display")
const caution = document.getElementById("caution")
const caution2 = document.getElementById("caution2")
const levelDisplay = document.getElementById("level")
const progressBar = document.getElementById("taskProgress")
const scoreDisplay = document.getElementById("score")
const currentScoreDisplay = document.getElementById("currentScore")


let level = 1
let levelRefresh = function () {
    levelDisplay.innerHTML = `level : ${level}`
}
levelRefresh()

let score = 10*level
let scoreRefresh = function(){
    scoreDisplay.innerHTML = `kesempatan : ${score}`
}
scoreRefresh()


let batasRandom = 100
let batasAtasAwal = 100
let levelCheck = function () {
    if (progressLevel > 99) {
        level += 1
        levelRefresh()
        progressLevel = 0
        progressRefresh()
        batasAtasAwal +=100
        batasRandom += 100
    }
    score = 10*level
}


let progressLevel = 0
let progressRefresh = function () {
    progressBar.value = progressLevel
}
progressRefresh()


let currentScore = 0
let currentScoreRefresh = function(){
    currentScoreDisplay.innerHTML = `score = ${currentScore}`
}
currentScoreRefresh()

let batasBawah = 0
let refreshBawah = function () {
    batasBawah = 0
}
let batasAtas = batasAtasAwal
let refreshAtas = function () {
    batasAtas = batasAtasAwal
}
caution.value = `${batasBawah} < BOOM < ${batasAtas}`

let bom
let refreshBom = function () {
    bom = Math.floor(Math.random() * batasRandom) + 1
    console.log(`boom = ${bom}`)
}
refreshBom()

function inputValue(nilai) {
    caution2.value = ''
    display.value += nilai
    if (caution.value.includes('!!!')) {
        refreshBom()
        refreshAtas()
        refreshBawah()
        caution.value = `${batasBawah} < BOOM < ${batasAtas}`
    }
}

function displayClear() {
    if (caution.value.includes('!!!')) {
        refreshBom()
        refreshAtas()
        refreshBawah()
        caution.value = `${batasBawah} < BOOM < ${batasAtas}`
    }
    else if (display.value == ""){
        caution2.value = "ngapus apa kentirr, tebak dulu"
    }
    display.value = ''
}

// updating tools;
// function benar() {
//     display.value = bom
// }

function jalan() {
    if (display.value == "") {
        caution2.value = 'tebak dulu kentirr'
    } else {

        let jawab = Number(display.value, 10)

        if (jawab === bom) {
            caution.value = '!!! BOOM !!!'
            progressLevel += 10
            console.log(progressLevel)
            progressRefresh()
            currentScore += score
            currentScoreRefresh()
            levelCheck()
            scoreRefresh()

        }

        else if (jawab !== bom) {
            if (jawab <= batasBawah) {
                caution.value = `${batasBawah} < BOOM < ${batasAtas}`
                caution2.value = 'tebakan anda kurang dari batas bawah!!!'
            }
            else if (jawab >= batasAtas) {
                caution.value = `${batasBawah} < BOOM < ${batasAtas}`
                caution2.value = 'tebakan anda melebihi batas atas!!!'
            }

            else if (display.value < bom) {
                batasBawah = jawab
                caution.value = `${batasBawah} < BOOM < ${batasAtas}`

            }
            else if (display.value > bom) {
                batasAtas = jawab
                caution.value = `${batasBawah} < BOOM < ${batasAtas}`

            }
            score -= 1
            scoreRefresh()
        }
    }

    display.value = ''
}

levelCheck()
