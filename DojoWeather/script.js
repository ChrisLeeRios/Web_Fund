function accept(elem) {
    var elem = document.querySelector("#cookie")
    elem.remove()
}

// function changeTemp1(elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8) {
//     var elem1 = document.querySelector("#todayH")
//     var elem2 = document.querySelector("#todayL")
//     var elem3 = document.querySelector("#tommorowH")
//     var elem4 = document.querySelector("#tommorowL")
//     var elem5 = document.querySelector("#fridayH")
//     var elem6 = document.querySelector("#fridayL")
//     var elem7 = document.querySelector("#saturdayH")
//     var elem8 = document.querySelector("#saturdayL")
//     elem1.innerHTML = "<h2 class='highTemp' id='todayH'>75&#176;</h2>"
//     elem2.innerHTML = "<h2 class='lowTemp' id='todayL'>65&#176;</h2>"
//     elem3.innerHTML = "<h2 class='highTemp' id='tommorowH'>80&#176;</h2>"
//     elem4.innerHTML = "<h2 class='lowTemp' id='tommorowL'>66&#176;</h2>"
//     elem5.innerHTML = "<h2 class='highTemp' id='fridayH'>69&#176;</h2>"
//     elem6.innerHTML = "<h2 class='lowTemp' id='fridayL'>61&#176;</h2>"
//     elem7.innerHTML = "<h2 class='highTemp' id='saturdayH'>78&#176;</h2>"
//     elem8.innerHTML = "<h2 class='lowTemp' id='saturdayL'>70&#176;</h2>"
// }


// function changeTemp1(elem3, elem4) {
//     var elem3 = document.querySelector("#tommorowH")
//     var elem4 = document.querySelector("#tommorowL")
//     elem3.innerHTML = "<h2 class='highTemp' id='tommorowH'>80&#176;</h2>"
//     elem4.innerHTML = "<h2 class='lowTemp' id='tommorowL'>66&#176;</h2>"
// }

// function changeTemp1(elem5, elem6) {
//     var elem5 = document.querySelector("#fridayH")
//     var elem6 = document.querySelector("#fridayL")
//     elem5.innerHTML = "<h2 class='highTemp' id='fridayH'>69&#176;</h2>"
//     elem6.innerHTML = "<h2 class='lowTemp' id='fridayL'>61&#176;</h2>"
// }

// function changeTemp1(elem7, elem8) {
//     var elem7 = document.querySelector("#saturdayH")
//     var elem8 = document.querySelector("#saturdayL")
//     elem7.innerHTML = "<h2 class='highTemp' id='saturdayH'>78&#176;</h2>"
//     elem8.innerHTML = "<h2 class='lowTemp' id='saturdayL'>70&#176;</h2>"
// }


function toggleTemp(elem) {
    var temps = document.querySelectorAll(".highTemp,.lowTemp")
    for (var temp of temps) {
        if (elem.value === "celcius") {
            // CONVERT INNER HTML TO CELCIUS 
            temp.innerHTML = ftc(temp.innerHTML)
        } else if (elem.value === "ferenheight") {
            // CONVERT INNER HTML TO FERENHEIGHT
            temp.innerHTML = ctf(temp.innerHTML)
        }
    }
}


function ftc(ftemp) {
    ftemp = parseFloat(ftemp);
    ftemp = (ftemp - 32) * 5 / 9;
    return ftemp.toPrecision(2);
}

function ctf(ctemp) {
    ctemp = parseFloat(ctemp);
    ctemp = (ctemp * 9 / 5) + 32;
    return ctemp.toPrecision(3);
}
// parsefloat function google