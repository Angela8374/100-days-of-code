//////////////////////////////
// DIA-1 Practicando ARRAYS //
//////////////////////////////

//let frutas = [2,4,6,"manzanas","peras","naranjas"]; //Arrya 2 tipos
//console.log(frutas);
//console.log(frutas[3]);
// let ultimo = frutas[frutas.length-1];
// console.log(ultimo);

//console.log(frutas[frutas.length-1]);
//frutas.push(10,15); //añade al final
//frutas.unshift(10,15); // añade al principio

//frutas.shift(); // elimina el primer elemento del array
//frutas.pop(); // elimina el ultimo elemento del array
//console.log(frutas);

// for (var i=0; i<frutas.length; i++) {
//   console.log(frutas[i]);
// }
// frutas.forEach(function(elemento, indice, array) {
//   console.log(indice, " ---> ", elemento);
// });

// for (var i=frutas.length; i>=0; i--) {
//    console.log(frutas[i]);
// }

/////////////////////////////////
// DIA-2 Practicando FUNCTIONS //
/////////////////////////////////
// function suma(a,b) {
//   return a+b;
// }
// console.log(suma(2,3));

// function map(f, a) { //función map que recibe función como argumento y argumento
//   let result = []; // Crea un nuevo array
//   let i; //Declaración de variable
//   for (i=0; i != a.length; i++)
//     result[i] = f(a[i]);
//   return result;  
// }
// const f = function(x) {
//   return x * x * x;
// }
// let numbers = [0,1,2,5,10];
// let cube = map(f, numbers);
// console.log(cube);

/////////////////////////
// DIA-3 Array Methods //
/////////////////////////
// Today is a web research day on array methods
// I need to review and study, not everything is coding code

/////////////////////////////////////////////////
// DIA-4 Experimenting with the concat method //
////////////////////////////////////////////////
// let name1 = "John ";
// let surname = "Smith ";
// let age = 29;

//forma-1 using template strings
// let unido1 = `1- In several days, ${name1} ${surname} will be ${age} years old`;
// console.log(unido1);

//form-2 using classical forms with operator " + "
// let unido2 = "2- In several days, " + name1 + " " + surname + " will be " + age + " years old";
// console.log(unido2);

//form-3 curious variant using the operator " += "
// let unido3 = "3- In several days, ";
// unido3 += name1;
// unido3 += surname;
// unido3 += "will be ";
// unido3 += age;
// unido3 += " years old"
// console.log(unido3);

//form-4 using first alert and second console.log
// let resultado = "4- In several days, ";
// resultado = resultado.concat(name1);
// resultado = resultado.concat(" ");
// resultado = resultado.concat(surname);
// resultado = resultado.concat(" will be ");
// resultado = resultado.concat(age);
// resultado = resultado.concat(" years old");
// alert(resultado);
// console.log(resultado);

//form-5 concatenate inside console.log
// console.log("5- In several days, " + name1 + " " + surname + " will be " + age + " years old.")

//form-6 concatenate using arrays
// const array1 = ['6- In several days,'];
// const array2 = ['John', 'Smith', 'will','be'];
// const array3 = ['29', 'years', 'old'];
// const array4 = array1.concat(array2, array3);
// console.log(array4);
