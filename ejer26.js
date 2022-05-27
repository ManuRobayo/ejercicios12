  var introduce = prompt("Escribe un número");
    var numeros;

    for (numeros=2;numeros < introduce/2; numeros++) {
        if (introduce % numeros === 0) {
            console.log(numeros," lo divide ");
        }
    }