let mensaje = ""
let pausado = false
let estilos = ""
const lock = document.getElementById("lock")
let wakeLock = null;

lock.addEventListener("click", () => {
    if ('wakeLock' in navigator) {
        if (pausado) { liberoAutoBloqueo() } else { pausoAutoBloqueo() }
    } else {
        estilos = "darkred white-text"
        mensaje = "Su navegador no soporta Wake Lock API"
    }
    mostrarMensaje()
})

function pausoAutoBloqueo() {
        try {
          wakeLock = navigator.wakeLock.request("screen");
          mensaje = "Se ha pausado el autobloqueo de pantalla."
          lock.src = "images/locked.png"
          estilos = "orange darken-4 white-text"
          pausado = true
        } catch (err) {
            estilos = "red darken-2 white-text"
            mensaje = `Error: ${err.message}`
            pausado = false
        }
}

function liberoAutoBloqueo() {
    // wakeLock.release();
    wakeLock = null;
    mensaje = "Se activó el autobloqueo de pantalla."
    lock.src = "images/unlocked.png"
    estilos = "green darken-4 white-text"
    pausado = false
}

function mostrarMensaje(classes) {
    M.toast({html: mensaje, displayLength: 2000, classes: estilos})
}