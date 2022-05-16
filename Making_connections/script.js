function nameChange(elem) {
    console.log("hey")
    var elem = document.querySelector("#profileName")
    elem.innerHTML = "<h1 id='profileName'>Super Duper Jane</h1>"
}

var reqCount = 2
var conCount = 418

function clickCheck1(elem, elem2, elem3) {

    var elem = document.querySelector("#rshn1")
    var elem2 = document.querySelector("#toddReq")
    var elem3 = document.querySelector("#rshn2")
    reqCount--
    conCount++
    elem.innerHTML = "<span class='rsh1' id='rshn1'>" + reqCount + "</span>"
    elem2.remove()
    elem3.innerHTML = "<span class='rsh1' id='rshn2'>" + conCount + "</span>"
}

function clickCheck2(elem, elem2, elem3) {

    var elem = document.querySelector("#rshn1")
    var elem2 = document.querySelector("#philReq")
    var elem3 = document.querySelector("#rshn2")
    reqCount--
    conCount++
    elem.innerHTML = "<span class='rsh1' id='rshn1'>" + reqCount + "</span>"
    elem2.remove()
    elem3.innerHTML = "<span class='rsh1' id='rshn2'>" + conCount + "</span>"
}


function clickX1(elem, elem2,) {

    var elem = document.querySelector("#rshn1")
    var elem2 = document.querySelector("#toddReq")
    reqCount--
    elem.innerHTML = "<span class='rsh1' id='rshn1'>" + reqCount + "</span>"
    elem2.remove()
}

function clickX2(elem, elem2,) {

    var elem = document.querySelector("#rshn1")
    var elem2 = document.querySelector("#philReq")
    reqCount--
    elem.innerHTML = "<span class='rsh1' id='rshn1'>" + reqCount + "</span>"
    elem2.remove()
} 