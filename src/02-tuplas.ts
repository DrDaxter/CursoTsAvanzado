//no tupla
let price: (number | string)[] = [12,123,"qwqw"]
price.push("Hola")//no importa el orden de insercion

//tupla
let user:[string,number];
user = ["Fernando", 22]//respeta el orden de tipo
const [userName] = user
console.log(userName)

/*
  Con las tuplas puedes limitar los elementos de un array e indetifcar
  en cada posicion cual es el dato que posee dicho array.
  Nos permite tipar los arreglos
*/
