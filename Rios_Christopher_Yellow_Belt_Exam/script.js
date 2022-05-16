var score1 = 314
function upScore1(elem1) {
    score1++
    var elem1 = document.querySelector("#score1")
    elem1.innerText = score1
}

var score2 = 160
function upScore2(elem2) {
    score2++
    var elem2 = document.querySelector("#score2")
    elem2.innerText = score2
}


function removeSubBox(elem3) {
    var elem3 = document.querySelector("#sub-box")
    elem3.remove()
}

setTimeout(function () {
    alert("The Ninjas have won!");
}, 13000);