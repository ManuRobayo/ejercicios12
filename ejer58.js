const arr = []
// undefined

!arr.length
// true

if(Array.isArray(arr) && !arr.length) {console.log("Es un arreglo y está vacío!")}
// Es un arreglo y está vacío!