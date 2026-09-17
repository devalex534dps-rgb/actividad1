const validar = a => a === 0 || /[a-zA-Z]/.test(a);

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) =>  b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(opera) {
    const n1 = document.getElementById('numero1').value;
    const n2 = document.getElementById('numero2').value;
    const errorMsg = document.getElementById('errorMsg').value;

    if (validar(n1) || validar(n2)){
        errorMsg.style.display = 'block';
        return;
    }

    const k1 = parseFloat(n1);
    const k2 = parseFloat(n2);

    switch (opera) {
        case "suma":
            ponerValor(sumar(k1, k2));
            break;
        case "resta":
            ponerValor(restar(k1, k2));
            break;
        case "multiplica":
            ponerValor(multiplicar(k1, k2));
            break;
        case "division":
            ponerValor(dividir(k1, k2));
            break;
        default:
            break;
    }
}

function ponerValor(val){
    const resultado = document.getElementById('resultado');
    resultado.value = val;
}