const entrada = document.getElementById('edad');
entrada.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        verificar();
    }
});

function verificar() {
    const inputEdad = document.getElementById('edad').value;
    const inputResultado = document.getElementById('resultado');
    const mensajeError = document.getElementById('mensaje-error');

    if (inputEdad.trim() === '' || isNaN(inputEdad) || parseFloat(inputEdad) < 0) {
        mensajeError.style.display = 'block';
        inputResultado.value = '';
        return;
    }

    mensajeError.style.display = 'none';

    const edad = parseFloat(inputEdad);
    if(edad >= 18) {
        inputResultado.value = 'Puedes votar';
    } else {
        inputResultado.value = 'No puedes votar';
    }
}