const form = document.getElementById('form');
form.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        calcular();
    } else if (event.key === "Space") {
        agregar();
    } else if (event.key === "ArrowRight") {
        siguiente();
    } else if (event.key === "Escape") {
        borrar();
    }
});

const input1 = document.getElementById('name');
const input2 = document.getElementById('score');

input1.addEventListener("dblclick", () => {
    input1.value = "";
});
input2.addEventListener("dblclick", () => {
    input2.value = "";
});

let salidas = [];
let contador = 0;

let estudiantes = [];

function agregar() {
    const inputName = document.getElementById('name').value;
    const errorName = document.getElementById('name-error');
    const inputScore = document.getElementById('score').value;
    const errorScore = document.getElementById('score-error');

    if (inputName.trim() === '' || /\d/.test(inputName)) {
        errorName.style.display = 'block';
        return;
    }
    if (inputScore.trim() === '' || /[a-zA-Z]/.test(inputScore)) {
        errorScore.style.display = 'block';
        return;
    }

    estudiantes.push(
        {
            nombre: inputName,
            calificacion: parseFloat(inputScore)
        }
    );

    inputName.value = " ";
    inputScore.value = " ";
}

function calcular() {
    const resultado = document.getElementById('resultado');
    if (estudiantes.length === 0) {
        const error = document.getElementById('mensaje-error');
        error.textContent = "Error el arreglo esta vacio";
        error.style.display = 'block';
        return;
    }

    let calificacionMaxima = Math.max(...estudiantes.map(e =>
        e.calificacion));
    
    let estudianteMax = estudiantes.find(est => est.calificacion === calificacionMaxima);

    let calificacionMinima = Math.min(...estudiantes.map(e =>
        e.calificacion));

    let estudianteMin = estudiantes.find(est => est.calificacion === calificacionMinima);

    let promedio = estudiantes.reduce((total, estudiante) => total +
        estudiante.calificacion, 0) / estudiantes.length;

    salidas.push(`Calificacion promedio: ${promedio}`);
    salidas.push(`Estudiante con la calificacion mas alta: ${estudianteMax.nombre}`);
    salidas.push(`Estudiante con la calificacion mas baja: ${estudianteMin.nombre}`);

    resultado.value = salidas[contador];
    contador++;
}

function siguiente() {
    if(contador <= salidas.length-1) {
        document.getElementById('resultado').value = salidas[contador];
        contador++;
    } else {
        contador = 0;
        siguiente();
    }
}

function borrar() {
    salidas = [];
    const error = document.getElementById('mensaje-error');
    error.textContent = "Datos borrados exitosamente!";
    error.style.display = 'block';
    setTimeout(() => {
        error.style.display = 'none';
    }, 2000);
}