const entrada = document.getElementById('numeros');
entrada.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        calcular();
    }
});

const mensajeError = document.getElementById('mensaje-error');

let resultados = [];
let contador = 0;

function calcular() {
    const inputNumeros = document.getElementById('numeros').value;
    const inputResultado = document.getElementById('resultado');

    console.log("Entrada: " + inputNumeros);
    if (inputNumeros.trim() === '' || !inputNumeros.includes(',')) {
        mensajeError.style.display = 'block';
        inputResultado.value = '';
        return;
    }

    let numeros = inputNumeros.split(',').map(Number);

    let max = Math.max(...numeros);
    let min = Math.min(...numeros);
    let promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length-1;

    if (!resultados.length === 0) resultados.splice(0, resultados.length);
    resultados.push(`Mayor: ${max}`);
    resultados.push(`Menor: ${min}`); 
    resultados.push(`Promedio: ${promedio}`);
    console.log("Resultados: ", resultados); 

    inputResultado.value = resultados[contador];
    contador++;
}

function siguiente() {
    if(contador <= resultados.length - 1) {
        document.getElementById('resultado').value = resultados[contador];
        contador++;
    } else {
        contador = 0;
        siguiente();
    }
}