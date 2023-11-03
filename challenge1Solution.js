const data = require('./challenge1Data')

const palabras = data.split(' ')

const contadorPalabras = palabras.reduce((contador, palabra) => {
  if (contador[palabra]) {
    contador[palabra]++
  } else {
    contador[palabra] = 1
  }
  return contador
}, {})

const resultado = Object.keys(contadorPalabras).map((palabra) => {
  return `${palabra}${contadorPalabras[palabra]}`
})

console.log(resultado.join(''))