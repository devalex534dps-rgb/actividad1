// Closure para manejar tareas
const manejarTareas = (() => {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    const guardar = () => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    const agregarTarea = tarea => {
        if (!tarea.trim()) {
            Swal.fire("Error", "La tarea no puede estar vacía", "error");
            return;
        }
        tareas.push(tarea);
        guardar();
        renderizarTareas();
    };

    const eliminarTarea = index => {
        Swal.fire({
            title: "¿Eliminar tarea?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        }).then(result => {
            if (result.isConfirmed) {
                tareas.splice(index, 1);
                guardar();
                renderizarTareas();
                Swal.fire("Eliminada", "La tarea ha sido eliminada", "success");
            }
        });
    };

    const obtenerTareas = () => tareas;

    const renderizarTareas = () => {
        const lista = document.getElementById("listaTareas");
        lista.innerHTML = "";
        tareas.forEach((t, i) => {
            const div = document.createElement("div");
            div.className = "tarea";

            const span = document.createElement("span");
            span.textContent = t;

            const btn = document.createElement("button");
            btn.textContent = "Eliminar";
            btn.addEventListener("click", () => eliminarTarea(i)); // aquí el evento

            div.appendChild(span);
            div.appendChild(btn);
            lista.appendChild(div);
        });
    };


    return {
        agregar: agregarTarea,
        eliminar: eliminarTarea,
        obtener: obtenerTareas,
        renderizar: renderizarTareas
    };
})();

// Eventos
document.getElementById("agregar").addEventListener("click", () => {
    const tarea = document.getElementById("tarea").value;
    manejarTareas.agregar(tarea);
    document.getElementById("tarea").value = "";
});

// Render inicial
manejarTareas.renderizar();
