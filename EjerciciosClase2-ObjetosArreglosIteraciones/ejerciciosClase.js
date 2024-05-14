///----EJERCICIOS DE CLASE 2------

// // //Ejercicio1-conteo de palabras
// function contarPalabras(array){
//     let contadorPalabras ={};
//     array.forEach(cadena => {
//         let palabras= cadena.split(/\s+/); 
//         palabras.forEach(palabra =>{
//             if(contadorPalabras[palabra]){
//                 contadorPalabras[palabra]++;
//         }else{
//              contadorPalabras[palabra]=1;
//         }
//     })
// });
// return contadorPalabras
// }
// let palabrasarray=["Hola buenos dias", "Hola buenas tardes", "Hola bueas noches"];
// let resultado=contarPalabras(palabrasarray);
// console.log(resultado)


// //Ejercicio2
// let productoA={
//     nombre : "camisa",
//     precio :25,
//     cantidad:5
// };

// let productoB={
//     nombre : "Jeans",
//     precio :40,
//     cantidad:3
// };
// let costoTotalProductoA= productoA.precio * productoA.cantidad;
// let costoTotalProductoB= productoB.precio * productoB.cantidad;

// let costototal= costoTotalProductoA+costoTotalProductoB;
// console.log(costoTotalProductoA);
// console.log(costoTotalProductoB);
// console.log("Total $"+ costototal);


// //Ejercicio3
// let personas =[
//     {nombre:"Sergio", edad:33, ciudad:"San Salvador"},
//     {nombre:"Antonio", edad:30, ciudad:"San miguel"},
//     {nombre:"Sonia", edad:50, ciudad:"Santa Tecla"}   
// ];
// function filtrarPersonas(personaObjeto, ciudad){
    
//     return personaObjeto.filter(persona => persona.edad > 30 && persona.ciudad  === ciudad)
// }

// let personasFiltradas = filtrarPersonas(personas, "Santa Tecla")
// console.log(personasFiltradas);

// //Ejercicio 4
// let numeros=[2,5,6,9,12];
// let cuadradosnwearray = numeros.map(numero => numero **2);
// console.log(numeros);
// console.log(cuadradosnwearray);

//Ejercicio5
// let arreglo =[1,2,3,4,5,6,7,8,9,10];
// let sumaPares=0;
// for(let i= 0; i< arreglo.length; i++){
//     if(arreglo[i] % 2 === 0){
//         sumaPares += arreglo[i];
//     }
// }
// console.log (sumaPares);

// //Ejercicio 6
// let personas =[
//     {nombre:"Martha", edad:27, ciudad:"San Salvador"},
//     {nombre:"Antonio", edad:30, ciudad:"San miguel"},
//     {nombre:"Sonia", edad:50, ciudad:"Santa Tecla"}   
// ];
// function buscarPorNombre(arraypersona, nombre){
//     return arraypersona.find(objeto => objeto.nombre === nombre)
// }

// let personaBuscada = buscarPorNombre(personas,"Martha");
// console.log(personaBuscada)

// //Ejercicio 7
// class Objeto {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     static compararPorEdad(a, b) {
//         return a.edad - b.edad;
//     }
// }
// let objetos = [
//     new Objeto("Juan", 30),
//     new Objeto("María", 25),
//     new Objeto("Pedro", 35)
// ];

// objetos.sort(Objeto.compararPorEdad);
// console.log(objetos);


// //ejercicio 8
// function validarObjeto(objeto) {
//     const propiedadesRequeridas = ['nombre', 'direccion', 'telefono'];

//     for (let propiedad of propiedadesRequeridas) {
//         if (!(propiedad in objeto)) {
//             return false;
//         }
//     }
//     return true;
// }
// let persona1 = {
//     nombre: 'David',
//     direccion: 'Calle 123',
//     telefono: '12345789'
// };

// let persona2 = {
//     nombre: 'Marina',
//     telefono: '98754321'
// };
// console.log(validarObjeto(persona1));
// console.log(validarObjeto(persona2)); 


// //ejercicio 9
// function generarListaDeCompras(lista) {
//     let listaLegible = "Lista de compras:\n";
    
//     for (let item in lista) {
//         listaLegible += `${item}: ${lista[item]}\n`;
//     }
    
//     return listaLegible;
// }
// let listaDeCompras = {
//     "Manzanas": 5,
//     "Plátanos": 3,
//     "Leche": 2,
//     "Pan Frances": 1
// };
// console.log(generarListaDeCompras(listaDeCompras));

// //ejercicio 10
// function combinarListas(estudiantes, profesores) {
//     let comunidadEducativa = [...estudiantes, ...profesores];
//     return comunidadEducativa;
// }
// let estudiantes = [
//     { nombre: "Mario", edad: 20 },
//     { nombre: "Jose", edad: 22 },
//     { nombre: "Pedro", edad: 21 }
// ];

// let profesores = [
//     { nombre: "Laura", materia: "Matemáticas" },
//     { nombre: "Pusine", materia: "Historia" },
//     { nombre: "Dexi", materia: "Ciencias" }
// ];

// let comunidad = combinarListas(estudiantes, profesores);
// console.log(comunidad);


   
  




