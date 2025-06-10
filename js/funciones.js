function verificarSexo() {
    const sexo = document.getElementById("sexo").value;
    const hijosDiv = document.getElementById("hijos");
    hijosDiv.style.display = (sexo === "Femenino") ? "block" : "none";
}

function calcularEdad() {
    const fecha = document.getElementById("fecha").value;
    const edadSpan = document.getElementById("edad");

    if (fecha) {
        const nacimiento = new Date(fecha);
        const hoy = new Date();
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const m = hoy.getMonth() - nacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        edadSpan.textContent = `Edad: ${edad} años`;
    }
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    const correo = document.getElementById("correo").value;
    if (!correo.endsWith("@ufpo.edu.co")) {
        alert("El correo debe ser institucional: @ufpo.edu.co");
        return;
    }
    alert("Formulario enviado correctamente.");
});
