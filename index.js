var x = Math.floor(Math.random() * 6) + 1
var y = Math.floor(Math.random() * 6) + 1

while(x === y){
    y = Math.floor(Math.random() * 6) + 1
}

if(x>y){
    document.querySelector("h1").innerHTML = "<small style = 'font-size: 50px'>Player 1 wins</small> Refresh Me"
}
if(y>x){
    document.querySelector("h1").innerHTML = "Refresh Me <small style = 'font-size: 50px'>Player 2 wins</small>"
}

if(x === 1){
    document.querySelector(".dice img.img1").setAttribute("src", "./public/images/dice1.png")
}
else if(x === 2){
    document.querySelector(".dice img.img1").setAttribute("src", "./public/images/dice2.png")
}
else if(x === 3){
    document.querySelector(".dice img.img1").setAttribute("src", "./public/images/dice3.png")
}
else if(x === 4){
    document.querySelector(".dice img.img1").setAttribute("src", "./public/images/dice4.png")
}
else if(x === 5){
    document.querySelector(".dice img.img1").setAttribute("src", "./public/images/dice5.png")
}
else {
    document.querySelector(".dice img.img1").setAttribute("src", "./public/images/dice6.png")
}

if(y === 1){
    document.querySelector(".dice img.img2").setAttribute("src", "./public/images/dice1.png")
}
else if(y === 2){
    document.querySelector(".dice img.img2").setAttribute("src", "./public/images/dice2.png")
}
else if(y === 3){
    document.querySelector(".dice img.img2").setAttribute("src", "./public/images/dice3.png")
}
else if(y === 4){
    document.querySelector(".dice img.img2").setAttribute("src", "./public/images/dice4.png")
}
else if(y === 5){
    document.querySelector(".dice img.img2").setAttribute("src", "./public/images/dice5.png")
}
else{
    document.querySelector(".dice img.img2").setAttribute("src", "./public/images/dice6.png")
}

document.querySelector("small").style.color = "white"
document.querySelector("small").style.fontFamily = "sherif"
