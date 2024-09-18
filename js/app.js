// Comentario de una linea
/*
* Comentario multilinea
*/

// console.log("Hola Mundo");

// Variables
// let numero1 = 45;
// let numero2 = 11;
// let suma, resta, multiplicacion, mod;
// 
// 
// const pi = 3.14156;
// 
// let estado = true;
// 
// let numero3 = 78;
// 
// let direccion = "cra 140 7a 40";
// 
// let nulo = null;
// 
// numero3 = 125;
// 
// console.log(numero1); 
// console.log(numero2); 
// console.log(pi); 
// console.log(estado); 
// console.log(numero3);
// 
// suma = numero1 + numero2;
// resta = numero1 - numero2;
// multiplicacion = numero1 * numero2;
// 
// mod = numero1 % numero2;
// 
// 
// console.log(suma)



// Concatenar valores

  //  console.log('EL PRIMER VALOR ES: ' + numero1);
  //  console.log('EL SEGUNDO VALOR ES: ' + numero2);
  //  console.log('LA SUMA DE ' + numero1 + 'Y' + numero2 + ' ES: ' + suma );
  //  console.log('LA SUMA DE ' + numero1 + 'Y' + numero2 + ' ES: ' + suma );


// Literal Template
   // console.log(`LA SUMA DE ${numero1} Y ${numero2} ES: ${suma}`); 
   // 
   // console.log(`LA RESTA DE ${numero1} Y ${numero2} ES: ${resta}`);
//
   // console.log(`LA MULTIPLICACION DE ${numero1} Y ${numero2} ES: ${multiplicacion}`); 
//
//
   // console.log(typeof(estado));
   // console.log(typeof(nulo));
   // console.log(typeof(pi));
   // console.log(typeof(direccion));
//


// try{
//     let nu1 = parseInt(prompt("Ingrese el primer valor"));
//     let nu2 = parseInt(prompt("Ingrese el segundo12 valor"));
// } catch(err){
//     console.log("Saltarl el prompt en Output");
//     console.log(err);
// }


    // let nu1;
    // let nu2;
    // let s = nu1 + nu2;
// 
    // console.log(nu1, nu2);
    // console.log(`El primer valor ingresado es: ${nu1} y el segundo es: ${nu2}`);
    // console.log(s);
// 
    // let alea = (Math.random() * 5 ) + 1;
    // console.log(alea); //NaN
// 
    // let alea2 = Math.floor(Math.random() * 5 ) + 1;
    // console.log(alea2); // Entero
// 
    // let alea3 = Math.floor(Math.random() * 100 );
    // console.log(alea3); //  Entero a 100

// let edad = prompt("Cual es tu edad?");
// if ( edad >= 18 && edad  <= 40 ){
// 
//     console.log("Aprobado");
// } 
// else if (edad > 40) {
//     console.log("Muy viejo para esto");
// }
// else {
//     console.log("Rechazado");
// } 

// Loops if , else if, else


// let generacion = prompt("¿En que año naciste?");
// 
//     if (generacion >= 1883 && generacion <= 1900) { 
//     console.log("generacion perdida");
//     alert("generacion perdida");
//     }
//     else if (generacion >= 1901 && generacion <= 1924) {
//      console.log("generacion grandiosa");
//      alert("generacion grandiosa");
//     }
//      else if (generacion >= 1925 && generacion <= 1945) {
//      console.log("generacion silenciosa");
//      alert("generacion silenciosa");
//     }
//      else if (generacion >= 1946 && generacion <= 1964) {
//      console.log("baby boomers");
//     }
//      else if (generacion >= 1965 && generacion <= 1980) {
//      console.log("generacion x");
//     }
//      else if (generacion >= 1981 && generacion <= 1996) {
//      console.log("generacion y");
//     }
//      else if (generacion >= 1997 && generacion <= 2012) {
//      console.log("generacion z");
//     }
//     else if (generacion >= 2013 && generacion <= 2025)
//      { console.log("generacion alpha");
// 
//      } else console.log("no has nacido");

// Operador ternario
// let edad = 22;
// 
// let res = (edad>=1883 && edad<=1900)? "generacion perdida": "generacion perdida";
// 
// console.log(res);
// 

// let dia = 1;
// 
// 
// 
// switch (dia) {
// 
//      case 1: console.log("Lunes");
//      break;
//      case 2: console.log("Martes");
//      break;
//      default: console.log("No hay dia");            
// }
// 
// let operador = '+';
// 
// switch(operador){
//     case '+':
//         console.log("suma");
//     break;
//     case '-':
//         console.log("resta");
//     break;
//     case '/':
//     console.log("division");
//     break;
// 
//     default: console.log("No seleccionado");
// 
// }

// let dolar = 4280;
// let euro = 4728;
// let libraE = 5601;
// let cantidad = parseInt(prompt("Seleccione la cantidad"));
// 
// switch(cantidad){
//     case cantidad: console.log(cantidad, "COP", cantidad * dolar, "USD");
//     case cantidad : console.log(cantidad,  "COP", cantidad * euro, "EUR");
//     case 'GBP' :  console.log(cantidad,  "COP", cantidad * libraE, "GBP");
//     alert( `${cantidad} USD son: ${4280 * cantidad} COP \n ${cantidad} EUR ${4728 * cantidad} COP \n ${cantidad} GBP ${5601 * cantidad} COP`); 
//     break;
// }

// let USD = 4280;
// let EUR = 4728;
// let GBP = 5601;
// 
// let cantidad = prompt("Seleccione la cantidad");
// let Val = prompt("Escribe la divisa");
// 
// switch(Val)
// {
//     case 'USD' : alert(Val, "COP son:", Val * USD);
//     case 'EUR' : alert(`${Val} COP son: ${Val} * ${EUR}`);
//     case 'GBP' : alert(`${Val} COP son: ${Val} * ${GBP}`);
// }

// let dolar = 4280;
// let euro = 4728;
// let libraE = 5601;
// let cantidad = prompt("cantidad de dinero");
// console.log(cantidad, "dolares son", dolar *  cantidad, "pesos");
// console.log(cantidad, "euros son", euro  * cantidad, "pesos");
// console.log(cantidad,"libras esterlinas son", libraE  * cantidad, "pessos");


// let dolar = 4280;
// let euro = 4728;
// let libraE = 5601;
// let cantidad = prompt("cantidad de dinero");
// console.log(cantidad, "dolares son", dolar *  cantidad, "pesos");
// console.log(cantidad, "euros son", euro  * cantidad, "pesos");
// console.log(cantidad,"libras esterlinas son", libraE  * cantidad, "pessos");
// console.log( `${cantidad} pesos son: ${dolar * cantidad} USD ${euro * cantidad} Euros ${libraE * cantidad} Libras`); 


// let dolar = 4280; 
// let euro = 4728;
// let libraE = 5601;
// let cantidad = prompt("cantidad de dinero");
// console.log( `${cantidad} pesos son: ${dolar * cantidad} USD ${euro * cantidad} Euros ${libraE * cantidad} Libras`); 
// alert( `${cantidad} pesos son: ${dolar * cantidad} USD ${euro * cantidad} Euros ${libraE * cantidad} Libras`); 



// let cantidad = prompt("cantidad de dinero");
// alert( `${cantidad} USD son: ${4280 * cantidad} COP \n1 ${cantidad} EUR ${4728 * cantidad} COP \n2 ${cantidad} GBP ${5601 * cantidad} COP`); 



// FOR
// let tabla = 5;
// 
// for (let i = 1;  i <=10 ; i++) {
//     console.log(tabla, "*", i, "=",  tabla * i);
//     console.log("-------------------------");
//     console.log(`${tabla} * ${i} = ${tabla * i}`);
// }

// let tabla = 1;
// for (let i = 1; i <= 10; i++) { 
//             for (i = 1; i <= 1;) {
//                 tabla = tabla + 1;
//                 console.log(tabla, i);
//         
//         }
//  
// }

// for (let i = 0 ;  i < 100 ; i++) {
//     i = i + 1;
//     console.log(i);
// }
let num = 1;

while ( num <= 100) {
    console.log(num);
    num++;
}