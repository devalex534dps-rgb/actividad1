const entrada = document.getElementById('kilometros');
entrada.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        realizarConversion();
    }
});

function realizarConversion() {
    const inputKilometros = document.getElementById('kilometros').value;
    const inputMillas = document.getElementById('millas');
    const mensajeError = document.getElementById('mensaje-error');

    if (inputKilometros.trim() === '' || isNaN(inputKilometros)) {
        mensajeError.style.display = 'block';
        inputMillas.value = '';
        return;
    }

    mensajeError.style.display = 'none';

    const km = parseFloat(inputKilometros);
    const mi = km * 0.621371;

    inputMillas.value = mi.toFixed(2) + ' mi';
}