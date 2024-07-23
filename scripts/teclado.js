// Función para reproducir un sonido a partir de un selector de elemento de audio
function playAudio(selector) {
    const audioElement = document.querySelector(selector);
    if (audioElement) {
        audioElement.play();
    } else {
        console.error(`Audio element not found for selector: ${selector}`);
    }
}

// Función para manejar el evento onclick de una tecla
function handleKeyClick(tecla, audioSelector) {
    tecla.onclick = () => playAudio(audioSelector);
}

// Función para manejar el evento onkeydown de una tecla
function handleKeydown(tecla) {
    tecla.onkeydown = (event) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('activa');
        }
    };
}

// Función para manejar el evento onkeyup de una tecla
function handleKeyup(tecla) {
    tecla.onkeyup = () => tecla.classList.remove('activa');
}

// Aplicar manejadores de eventos a cada tecla
document.querySelectorAll('.tecla').forEach((tecla) => {
    const instrumento = tecla.classList[1];
    const audioSelector = `#sonido_${instrumento}`;

    handleKeyClick(tecla, audioSelector);
    handleKeydown(tecla);
    handleKeyup(tecla);
});