let visitas = 0;
const contadorElement = document.getElementById('contador');

function actualizarContador() {
    visitas++;
    contadorElement.textContent = visitas;
    contadorElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        contadorElement.style.transform = 'scale(1)';
    }, 200);
}

window.addEventListener('load', () => {
    visitas = Math.floor(Math.random() * 1000) + 100;
    contadorElement.textContent = visitas;
});

function mostrarMensaje() {
    const destinos = [
        '¿Qué tal París? La ciudad del amor te espera',
        'Japón te llama con sus templos y cerezos en flor',
        'Grecia tiene historia y playas increíbles',
        'Bali ofrece paz, cultura y paisajes de ensueño',
        'Nueva York: la ciudad que nunca duerme',
        'Australia combina aventura y naturaleza única',
        'Perú y Machu Picchu: una experiencia mística',
        'Italia: arte, historia y la mejor comida del mundo'
    ];

    const destinoAleatorio = destinos[Math.floor(Math.random() * destinos.length)];

    const mensaje = document.createElement('div');
    mensaje.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px 40px;
        border-radius: 20px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        text-align: center;
        animation: fadeInUp 0.5s ease;
        max-width: 90%;
    `;

    mensaje.innerHTML = `
        <h3 style="color: #2563eb; margin-bottom: 15px; font-size: 1.5em;">✨ Tu Próximo Destino</h3>
        <p style="font-size: 1.2em; margin-bottom: 20px;">${destinoAleatorio}</p>
        <button onclick="this.parentElement.remove()" style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
        ">¡Perfecto!</button>
    `;

    document.body.appendChild(mensaje);

    actualizarContador();
}

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});


