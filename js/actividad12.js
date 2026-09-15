const entrada = document.getElementById('pesos');
entrada.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        realizarConversion();
    }
});

function realizarConversion() {
    const inputPesos = document.getElementById('pesos').value;
    const inputDolares = document.getElementById('dolares');
    const mensajeError = document.getElementById('mensaje-error');

    if (inputPesos.trim() === '' || isNaN(inputPesos) || parseFloat(inputPesos) < 0) {
        mensajeError.style.display = 'block';
        inputDolares.value = '';
        return;
    }

    mensajeError.style.display = 'none';

    const mxn = parseFloat(inputPesos);
    const dol = mxn * 0.055;

    inputDolares.value = dol.toFixed(2) + ' dolares';
}