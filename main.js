alert('carilah angka boom nya!!!!')

let display = document.getElementById("display")
let caution = document.getElementById("caution")
let caution2 = document.getElementById("caution2")

let jawab

let batasBawah = 0
let refreshBawah = function(){
    batasBawah = 0
}

let batasAtas = 100
let refreshAtas = function(){
    batasAtas = 100
} 

caution.value = `${batasBawah} < BOOM < ${batasAtas}`

let bom
let refreshBom = function(){
    bom = Math.floor(Math.random() * 100) + 1
    console.log(`boom = ${bom}`)
}
refreshBom()

function inputValue(nilai){
    caution2.value = ''
    display.value += nilai
    if (caution.value.includes('!!!')){
        refreshBom()
        refreshAtas()
        refreshBawah()
    }
}

function displayClear(){
    display.value = ''
    if (caution.value.includes('!!!')){
        refreshBom()
        refreshAtas()
        refreshBawah()
        caution.value = `${batasBawah} < BOOM < ${batasAtas}`
    }
}

function jalan(){
    jawab = Number(display.value, 10)

    if(jawab === bom){
        caution.value = '!!! BOOM !!!'
    }

    else if (jawab !== bom){
        if(jawab <= batasBawah){
            caution.value = `${batasBawah} < BOOM < ${batasAtas}`
            caution2.value = 'tebakan anda kurang dari batas bawah!!!'
        }else if (jawab >= batasAtas){
            caution.value = `${batasBawah} < BOOM < ${batasAtas}`
            caution2.value = 'tebakan anda melebihi batas atas!!!'
        }

        else if(display.value < bom){
            batasBawah = jawab
            caution.value = `${batasBawah} < BOOM < ${batasAtas}`

        }
        else if(display.value > bom){
            batasAtas = jawab
            caution.value = `${batasBawah} < BOOM < ${batasAtas}`

        }
    }
    display.value = ''
}
