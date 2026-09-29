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
                `https://ul.waze.com/ul?from=place.w.176619665.1766524334.41611449&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location`,
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