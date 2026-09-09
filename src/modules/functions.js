// Variables de control:
let topInicial = 20;
let leftInicial = 20;
const desplazamiento = 15;
const desplazamientoMaximo = 90;
const colores = ['amarillo', 'azul', 'rojo', 'verde', 'lila'];
let colorIndex = 0;

let zIndexInicial = 1;

const traerAlFrente = (el) => {
    el.style.zIndex = zIndexInicial++;
};

export const moverNota = (el) => {
    let distanciaX;
    let distanciaY;

    const mover = (e) => {
        el.style.left = e.clientX - distanciaX + 'px';
        el.style.top = e.clientY - distanciaY + 'px';
    };

    el.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const rect = el.getBoundingClientRect();
        distanciaX = e.clientX - rect.left;
        distanciaY = e.clientY - rect.top;

        traerAlFrente(el);

        document.addEventListener('mousemove', mover);
    });

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', mover);
    });
};

export const crearNota = () => {
    const div = document.createElement('article');
    div.classList.add('note');
    div.style.top = topInicial + 'px';
    div.style.left = leftInicial + 'px';

    topInicial += desplazamiento;
    leftInicial += desplazamiento;

    if (topInicial >= desplazamientoMaximo) {
        topInicial = 20;
    }
    if (leftInicial >= desplazamientoMaximo) {
        leftInicial = 20;
    }

    div.classList.add(colores[colorIndex]);
    colorIndex++;
    if (colorIndex >= colores.length) {
        colorIndex = 0;
    }

    return div;
};
