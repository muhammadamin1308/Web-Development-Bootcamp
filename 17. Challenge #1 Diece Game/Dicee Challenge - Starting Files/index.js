function getRandomNumForPlayer1(){
    let random1 = Math.ceil(Math.random() * 6)
    return random1
}
function getRandomNumForPlayer2(){
    let random2 = Math.ceil(Math.random() * 6)
    return random2
}

let randomNum1 = getRandomNumForPlayer1()
let randomNum2 = getRandomNumForPlayer2()

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNum1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNum2 + ".png");

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"
}else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!"
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}