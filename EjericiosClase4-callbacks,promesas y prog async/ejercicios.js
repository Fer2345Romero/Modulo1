
// //Ejercicio 1
// function saludar (nombre, callback){
//     const saludo = `Hola, ${nombre}`
//     callback(saludo)
// }
// function mostrar(saludo){
//     console.log(saludo)
// }
// saludar('Fernanda',mostrar )

// //Ejercicio 2
// function multiplicarPromise(a,b){
//     return new Promise((resolve, reject)=>{
//         const resultado = a*b
//         if(isNaN(resultado)){
//             reject('ERROR NO HAY ARGUMENTOS VALIDOS')
//         }else{
//             resolve(resultado)
//         }
//     })
// }
// multiplicarPromise(2,3)
// .then((resultado)=>{
//     console.log(resultado)
// })
// .catch((error)=>{
//     console.error(error)
// })

// //Ejercicio 3
// function multiplicar(a,b, callback){
//     const resultado = a*b
//     callback(resultado)
// }
// multiplicar(6,3, (resultado) =>{
//     console.log('Resultado: ', resultado)
// })

// //Ejercicio 4 -Promesa con retraso
// function retrasarpromesa(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`La promesa se  ha resuelto en ${ms} milisegundos`)
//         }, ms)
//     })
// }
// retrasarpromesa(2000)
// .then((mensaje)=>{
//     console.log(mensaje)
// })
