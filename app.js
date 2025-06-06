const sum = (a,b) => {
    return a+b;
}
console.log(sum(7,3));




// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// declaro la funcion fromDollarToYen
const fromDollarToYen = function(valueInDollar) {
    //convierto el valor en yenes, paso el dollar a euro y luego a yen
    let valueInYen = (valueInDollar/1.07)*156.5;
    //retornar valor en Yen
    return valueInYen;
}

// funcion fromYenToPound 
const fromYenToPound = function(valueInYen) {
    //convierto el valor en pounds, paso el yen a euro y luego a pound
    let valueInPound = (valueInYen/156.5)*0.87;
    //retornar valor en Pound
    return valueInPound;
}

console.log(fromDollarToYen(5));
console.log(fromYenToPound(5));




module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};