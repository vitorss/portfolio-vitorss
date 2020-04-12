function typewriter (elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 85 * i)
    });
}

const legend = document.querySelector('.legend-color');
typewriter(legend);
