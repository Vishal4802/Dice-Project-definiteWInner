var x = Math.floor(Math.random() * 6) + 1
var y = Math.floor(Math.random() * 6) + 1

while(x === y){
    y = Math.floor(Math.random() * 6) + 1
}

if(x>y){
    document.querySelector("h1").innerHTML = "🏆Player 1 wins"
}
if(y>x){
    document.querySelector("h1").innerHTML = "Player 2 wins🏆"
}

var image1Source = "./public/images/dice" + x + ".png"
var image2Source = "./public/images/dice" + y + ".png"

document.querySelector(".dice img.img1").setAttribute("src", image1Source)
document.querySelector(".dice img.img2").setAttribute("src", image2Source)
