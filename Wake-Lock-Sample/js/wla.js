let mensaje = ""
let pausado = false
const lock = document.getElementById("lock")
let wakeLock = null;

lock.addEventListener("click", () => {
    if ('wakeLock' in navigator) {
        if (pausado) { liberoAutoBloqueo() } else { pausoAutoBloqueo() }
    } else {
        mensaje = "Su navegador no soporta Wake Lock API"
    }
    mostrarMensaje()
})

function pausoAutoBloqueo() {
        try {
          wakeLock = navigator.wakeLock.request("screen");
          mensaje = "Se ha pausado el autobloqueo de pantalla."
          lock.src = "images/locked.png"
          pausado = true
        } catch (err) {
            mensaje = `Error: ${err.message}`
            pausado = false
        }
}

function liberoAutoBloqueo() {
    // wakeLock.release();
    wakeLock = null;
    mensaje = "Se activó el autobloqueo de pantalla."
    lock.src = "images/unlocked.png"
    pausado = false
}

function mostrarMensaje() {
    M.toast({html: mensaje, displayLength: 2000})
}