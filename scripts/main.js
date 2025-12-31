// script.js - Wanderlust Adventures

// Recurso JS 1: Intercambio de imágenes al hacer clic
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

const images = [
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=500&h=300&fit=crop'
];

let currentIndex1 = 0;
let currentIndex2 = 1;

img1.addEventListener('click', function() {
    currentIndex1 = (currentIndex1 + 1) % images.length;
    img1.src = images[currentIndex1];
});

img2.addEventListener('click', function() {
    currentIndex2 = (currentIndex2 + 1) % images.length;
    img2.src = images[currentIndex2];
});

// Recurso JS 2: Campo de texto que cambia el saludo
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

nameInput.addEventListener('input', function() {
    const name = nameInput.value.trim();
    if (name) {
        greeting.textContent = `¡Hola ${name}! Bienvenido/a a Wanderlust Adventures 🌍✨`;
    } else {
        greeting.textContent = '';
    }
});

// Recurso JS 3: Objeto en movimiento (avión)
const plane = document.getElementById('plane');
let x = 0;
let y = 50;
let dx = 2;
let dy = 1.5;

function movePlane() {
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;

    x += dx;
    y += dy;

    if (x >= maxX || x <= 0) {
        dx = -dx;
        plane.style.transform = dx > 0 ? 'scaleX(1)' : 'scaleX(-1)';
    }
    if (y >= maxY || y <= 0) {
        dy = -dy;
    }

    plane.style.left = x + 'px';
    plane.style.top = y + 'px';

    requestAnimationFrame(movePlane);
}

movePlane();

// Ajustar posición del avión al cambiar tamaño de ventana
window.addEventListener('resize', function() {
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;
});



