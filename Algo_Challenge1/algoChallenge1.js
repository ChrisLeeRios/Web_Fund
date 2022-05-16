

for (var i = 2020; i > 0; i = i - 4) {
    console.log(i)
}

var i = 2020;
while (i > 0) {
    console.log(i)
    i = i - 4
}

//Level up

function flexCount(lownum, highnum, mult) {
    for (var i = highnum; i >= lownum; i--) {
        if (i % 4 == 0)
            console.log(i)
    }
}
flexCount(4, 2020, 4)

//Sensei bonus

function flexCount(param1, param2, param3, param4) {
    for (var i = param2; i <= param3; i++) {
        if (i % param1 == 0 && i != param4) {
            console.log(i);
        }
    }
}
flexCount(3, 5, 30, 9)
