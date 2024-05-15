const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Ejercicio 1
function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo."
    } else if (numero < 0) {
        return "El número es negativo."
    } else {
        return "El número es cero."
    }
}

// Ejercicio 2
function calcularMayor(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

// Ejercicio 3
function calcularFactorial(numero) {
    let factorial = 1
    for (let i = 2; i <= numero; i++) {
        factorial *= i
    }
    return factorial
}

// Ejercicio 4
function determinarParImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par."
    } else {
        return "El número es impar."
    }
}

// Ejercicio 5
function mezclarColores(color1, color2) {
    if ((color1 === 'azul' && color2 === 'amarillo') || (color1 === 'amarillo' && color2 === 'azul')) {
        return "Verde"
    } else if ((color1 === 'azul' && color2 === 'rojo') || (color1 === 'rojo' && color2 === 'azul')) {
        return "Morado"
    } else if ((color1 === 'rojo' && color2 === 'amarillo') || (color1 === 'amarillo' && color2 === 'rojo')) {
        return "Naranja"
    } else {
        return "Error: Combinación de colores no válida."
    }
}

// Ejercicio 6
function obtenerNombreMes(numeroMes) {
    let nombreMes
    switch (parseInt(numeroMes)) {
        case 1:
            nombreMes = "Enero";
            break;
        case 2:
            nombreMes = "Febrero";
            break;
        case 3:
            nombreMes = "Marzo";
            break;
        case 4:
            nombreMes = "Abril";
            break;
        case 5:
            nombreMes = "Mayo";
            break;
        case 6:
            nombreMes = "Junio";
            break;
        case 7:
            nombreMes = "Julio";
            break;
        case 8:
            nombreMes = "Agosto";
            break;
        case 9:
            nombreMes = "Septiembre";
            break;
        case 10:
            nombreMes = "Octubre";
            break;
        case 11:
            nombreMes = "Noviembre";
            break;
        case 12:
            nombreMes = "Diciembre";
            break;
        default:
            nombreMes = "Mes no válido";
            break;
    }
    return nombreMes
}

// Ejercicio 7
function determinarTipoVehiculo(categoria) {
    let tipoVehiculo
    switch (categoria.toLowerCase()) {
        case 'moto':
            tipoVehiculo = "Motocicleta";
            break;
        case 'auto':
            tipoVehiculo = "Automóvil";
            break;
        case 'camion':
            tipoVehiculo = "Camión";
            break;
        case 'bicicleta':
            tipoVehiculo = "Bicicleta";
            break;
        default:
            tipoVehiculo = "Categoría no válida";
            break;
    }
    return tipoVehiculo
}

// Menú de selección numérica
function mostrarMenu() {
    console.log("\n*** MENÚ ***")
    console.log("1. Determinar si un número es positivo, negativo o cero.")
    console.log("2. Calcular el mayor de 3 números.")
    console.log("3. Calcular el factorial de un número.")
    console.log("4. Determinar si un número es par o impar.")
    console.log("5. Mezclar colores primarios.")
    console.log("6. Determinar el nombre del mes.")
    console.log("7. Determinar el tipo de vehículo.")
    console.log("0. Salir")
}

// Función principal
function ejecutarSeleccion(rl) {
    mostrarMenu()
    rl.question("Seleccione el ejercicio que desea ejecutar: ", (opcion) => {
        switch (opcion) {
            case '1':
                rl.question("Ingrese un número: ", (numero) => {
                    console.log(determinarSigno(parseFloat(numero)))
                    ejecutarSeleccion(rl)
                })
                break
            case '2':
                rl.question("Ingrese el primer número: ", (num1) => {
                    rl.question("Ingrese el segundo número: ", (num2) => {
                        rl.question("Ingrese el tercer número: ", (num3) => {
                            console.log(`El mayor es: ${calcularMayor(parseFloat(num1), parseFloat(num2), parseFloat(num3))}`)
                            ejecutarSeleccion(rl)
                        })
                    })
                })
                break
            case '3':
                rl.question("Ingrese un número: ", (numero) => {
                    console.log(`El factorial de ${numero} es: ${calcularFactorial(parseInt(numero))}`)
                    ejecutarSeleccion(rl)
                })
                break
            case '4':
                rl.question("Ingrese un número: ", (numero) => {
                    console.log(determinarParImpar(parseInt(numero)))
                    ejecutarSeleccion(rl)
                })
                break
            case '5':
                rl.question("Ingrese el primer color: ", (color1) => {
                    rl.question("Ingrese el segundo color: ", (color2) => {
                        console.log(`El color resultante es: ${mezclarColores(color1.toLowerCase(), color2.toLowerCase())}`)
                        ejecutarSeleccion(rl)
                    })
                })
                break
            case '6':
                rl.question("Ingrese el número del mes: ", (mes) => {
                    console.log(`El mes correspondiente al número ${mes} es: ${obtenerNombreMes(mes)}`)
                    ejecutarSeleccion(rl)
                })
                break
            case '7':
                rl.question("Ingrese la categoría del vehículo: ", (categoria) => {
                    console.log(`El vehículo correspondiente a la categoría ${categoria} es: ${determinarTipoVehiculo(categoria)}`)
                    ejecutarSeleccion(rl)
                })
                break
            case '0':
                rl.close()
                break
            default:
                console.log("Opción no válida.")
                ejecutarSeleccion(rl)
                break
        }
    })
}

ejecutarSeleccion(rl)


//"EjerciciosClase3-EstructurasDesicion_y_Funciones"