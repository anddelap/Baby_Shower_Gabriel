lucide.createIcons();

const phoneWhatsApp = "50200000000";

const eventTitle = "Baby Shower Gabriel André";

const eventLocation =
    "El Rincón del Steak CAES, Cruce a San José Pinula, Carr. a El Salvador";


function confirmRSVP() {

    const message = encodeURIComponent(
        "¡Hola! Me encantaría confirmar mi asistencia al Baby Shower de Gabriel André el domingo 25 de octubre. ☀️✨"
    );

    window.open(
        `https://wa.me/${phoneWhatsApp}?text=${message}`,
        '_blank'
    );

}


function openMap() {

    window.open(
        `https://waze.com/ul/h9fxdtxqqt`,
        '_blank'
    );

}

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleRsvpBtn');
    const collapsible = document.getElementById('rsvpCollapsible');

    if (toggleBtn && collapsible) {
        toggleBtn.addEventListener('click', function () {
            // Alterna la clase 'open' para desplegar u ocultar el contenido
            const isOpen = collapsible.classList.toggle('open');

            // Alterna la clase 'active' para rotar la flecha
            toggleBtn.classList.toggle('active', isOpen);

            // Accesibilidad para lectores de pantalla
            toggleBtn.setAttribute('aria-expanded', String(isOpen));
        });

        toggleBtn.setAttribute('aria-expanded', 'false');
    }
});

const music = document.getElementById('backgroundMusic');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
    } else {
        music.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
    }
});