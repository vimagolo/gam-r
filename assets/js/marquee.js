document.addEventListener("DOMContentLoaded", () => {
    const marquee = (selector_list, speed) => {
        const list = document.querySelector(selector_list);
        let move = 0;

        // Duplicar el contenido para efecto continuo
        list.innerHTML += list.innerHTML;

        const animate = () => {
            move += speed;

            // Reset suave cuando se termina el primer bloque
            if (move >= list.scrollWidth / 2) {
                move = 0;
            }

            list.style.transform = `translateX(-${move}px)`;

            requestAnimationFrame(animate);
        };

        animate();
    };

    marquee(".marquee__list", 1);
});