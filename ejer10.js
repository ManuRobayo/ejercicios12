    function tiene_numeros(texto) {
        var numeros = prompt("Intoduce numeros")
        var texto = "asddfffdsss";
        for (i = 0; i < texto.length; i++) {

            if (numeros.indexOf(texto.charAt(i), 0) != -1) {
                console.log("Empieza con numeros" + numeros);
            }
            else{
                console.log("empieza con letras" + numeros);
            }
        }
        return  numeros;
    }