// const persona = {
//     nombre: 'Juan',
//     edad: 30,
//     esEstudiante: true,
//    };
//    console.log(persona);
   
// function Persona(nombre, edad, esEstudiante) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.esEstudiante = esEstudiante;
//    }
//    const persona1 = new Persona('Juan', 30, true);
//    console.log(persona1.nombre);


// //Object.create.
// const persona = {
//  nombre: '',
//  edad: 0,
//  esEstudiante: false
// };
// const persona1 = Object.create(persona);
// persona1.nombre = 'Felix';
// persona1.edad = 30;
// console.log(persona1.nombre); 
// console.log(persona1.edad); 

// class Animal {
//     constructor(nombre, tipo) {
//     this.nombre = nombre;
//     this.tipo = tipo;
//     }
//     sonido() {
//     console.log('Haciendo sonidos...');
//     }
//    }
//    const perro = new Animal('Odi', 'Perro');
//    console.log(perro.nombre); 
//    perro.sonido();

//    class dispositivos{
//    }
//    class persona {
//     constructor(nombre, edad, telefono) {
//     this._nombre = nombre;
//     this._edad=edad;
//     this._telefono= telefono
//     }
//     presentacion() {
//         return console.log(`Hola mi nombre es: ${this._nombre} tengo la edad de:${this._edad}años y mi telefono es${this._telefono}`)
//     }
//     hablarIdioma() {
//         return console.log(`Hola soy ${this._nombre} y hablo español`)
//         }
//    }
//    let persona1 = new persona('Oscar',27,79684)
//    persona1.presentacion();

//    //EJERCICIO 1
//    class ComportamientosBebe {
//     constructor(nombre, edad) {
//       this._nombre = nombre;
//       this._edad = edad;
//     }
//     llorar() {
//       console.log(`${this._nombre}, el niño que tiene ${this._edad}, está llorando.`);
//     }
//     dormir() {
//       console.log(`${this._nombre}, que tiene ${this._edad}, está durmiendo.`);
//     }
//     comer() {
//       console.log(`${this._nombre}, que tiene ${this._edad}, está comiendo pure de papa.`);
//     }
//   }
  
//   const antonio = new ComportamientosBebe('Antonio', '3 meses');
//   const sonia = new ComportamientosBebe('Sonia', '5 meses');
//   const javier = new ComportamientosBebe('Javier', '8 meses');
  
//   antonio.llorar(); 
//   sonia.comer();     
//   javier.dormir();  

//   //EJERCICIO 2
// const fechaActual = new Date();

// const horas = fechaActual.getHours();
// const minutos = fechaActual.getMinutes();
// const segundos = fechaActual.getSeconds();

// console.log(`La hora es: ${horas}:${minutos}:${segundos}`);

///EJERCICIO 3
// class CalculadoraIMC {
//     constructor(peso, altura) {
//         this.peso = peso;
//         this.altura = altura;
//     }
//     calcularIMC() {
//         if (this.altura <= 0) {
//             throw new Error("La altura no puede ser cero.");
//         }
//         return this.peso / (this.altura * this.altura);
//     }
//     mostrarIMC() {
//         const imc = this.calcularIMC();
//         console.log(`El IMC para un peso de ${this.peso} kg y una altura de ${this.altura} m es: ${imc.toFixed(2)}`);
//     }
// }
// const persona1 = new CalculadoraIMC(108, 1.67);
// persona1.mostrarIMC();

