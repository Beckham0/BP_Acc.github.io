const slider = document.querySelector('.slider');
        let currentIndex = 0;

        function moveSlider(direction) {
            const cards = document.querySelectorAll('.service-boxx');
            const totalCards = cards.length;

            if (direction === 'left') {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            } else {
                currentIndex = (currentIndex + 1) % totalCards;
            }

            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }



