document.addEventListener('DOMContentLoaded', () => {
    let visitas = 0;
    const contadorElement = document.getElementById('contador');
    const header = document.querySelector('header');

    if (!contadorElement) return;

    function actualizarContador() {
        visitas++;
        contadorElement.textContent = visitas;
        contadorElement.classList.add('contador-animado');
        setTimeout(() => {
            contadorElement.classList.remove('contador-animado');
        }, 200);
    }

    visitas = Math.floor(Math.random() * 1000) + 100;
    contadorElement.textContent = visitas;

    window.mostrarMensaje = function () {
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

        const destino = destinos[Math.floor(Math.random() * destinos.length)];

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';

        const modal = document.createElement('div');
        modal.className = 'modal';

        modal.innerHTML = `
            <h3>✨ Tu Próximo Destino</h3>
            <p>${destino}</p>
            <button class="btn cerrar-modal">¡Perfecto!</button>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', e => {
            if (e.target.classList.contains('cerrar-modal') || e.target === overlay) {
                overlay.remove();
            }
        });

        actualizarContador();
    };

    window.addEventListener('scroll', () => {
        if (!header) return;
        header.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    });
});



