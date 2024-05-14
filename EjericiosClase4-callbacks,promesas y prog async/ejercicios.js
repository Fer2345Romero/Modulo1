
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

// //Ejercicio 5
// function operacionAsincrona(callback){
//     setTimeout(()=>{
//         callback('Operacion asincrona completada')

//     }, 8000)
// }
// operacionAsincrona((mensaje)=>{
//     console.log(mensaje)
// })

// //Ejercicio 6
// function paso1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(5)
//             console.log("Paso 1 funcionando")
//         }, 5000)
//     })
// }
// function paso2(num){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num*2)
//             console.log("Paso 2 funcionando")
//         }, 1000)
//     })
// }
// function paso3(num){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num +2)
//             console.log("Paso 3 funcionando")
//         }, 5000)
//     })
// }

// paso1()
// .then(paso2)
// .then(paso3)
// .then((resultado)=>{
//     console.log('Resultado es: ', resultado)
// })

// //Ejercicio 7
// function dividir(a,b, callback){
//     if(b=== 0){
//         callback('Error: el divisor es cero')
//     }else{
//         const resultado = a/b
//         callback(null, resultado)
//     }
// }

// dividir(10,5,(error, resultado)=>{
//     if(error){
//         console.error(error)
//     }else{
//         console.log('El resultado es:', resultado)
//     }
// })

// //Ejercicio 8
// function dividir(a,b, callback){
//     return new Promise((resolve, reject)=>{
//         if(b===0){
//             reject('Error: el divisor es cero')
//         }else{
//             const resultado= a/b
//             resolve(resultado)
//         }
//     })
// }

// dividir(20,4)
// .then((resultado)=>{
//     console.log('Resultado es:', resultado)
// })
// .catch((error)=>{
//     console.log(error)
// })

// //Ejercicio 9 -Ejecución paralela
// function tarea1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Tarea 1 completada')
//         }, 2000);
//     })
// }
// function tarea2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Tarea 2 completada')
//         }, 3000);
//     })
// }
// function tarea3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Tarea 3 completada')
//         }, 3000);
//     })
// }
// Promise.all([tarea1(), tarea2(), tarea3()])
// .then((resultado)=>{
//     console.log('Las tareas han sido finalizadas: ')
//     resultado.forEach((resultado)=>{
//         console.log(resultado)
//     })
// })
// .catch((error)=>{
//     console.error('Error', error)
// })

// //Ejercicio 10 - Promesas conbinadas
// function tarea1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Tarea 1 completada')
//         }, 2000);
//     })
// }
// function tarea2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Tarea 2 completada')
//         }, 3000);
//     })
// }
// function tarea3(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Tarea 3 completada')
//         }, 3000);
//     })
// }
// Promise.all([tarea1(), tarea2(), tarea3()])
// .then((resultado)=>{
//     console.log('Las tareas han sido finalizadas: ')
//     resultado.forEach((resultado)=>{
//         console.log(resultado)
//     })
//     console.log('Accion final de ejecutada.')
// })
// .catch((error)=>{
//     console.error('Error', error)
// })

// // "EjericiosClase4-callbacks,promesas y prog async" node ejercicios.js
