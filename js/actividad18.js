const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = input.value.trim();

    if (texto !== '') {

        const li = document.createElement('li');
        li.classList.add('list-group-item');

        const span = document.createElement('span');
        span.textContent = texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn-eliminar');
        botonEliminar.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(botonEliminar);
        lista.appendChild(li);

        input.value = '';
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}

botonAgregar.addEventListener('click', agregarElemento);
