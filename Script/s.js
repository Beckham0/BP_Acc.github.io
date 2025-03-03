let slideIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
        const dotsContainer = document.querySelector('.dots');

        function createDots() {
            for (let i = 0; i < totalSlides; i++) {
                let dot = document.createElement('span');
                dot.classList.add('dot');
                dot.setAttribute('onclick', `goToSlide(${i})`);
                dotsContainer.appendChild(dot);
            }
            updateDots();
        }

        function updateDots() {
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === slideIndex);
            });
        }

        function moveSlide(step) {
            slideIndex = (slideIndex + step + totalSlides) % totalSlides;
            updateSlide();
        }

        function goToSlide(index) {
            slideIndex = index;
            updateSlide();
        }

        function updateSlide() {
            slides.style.transform = `translateX(-${slideIndex * 100}%)`;
            updateDots();
        }

        function openModal(src) {
            document.getElementById('modal-img').src = src;
            document.getElementById('modal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        createDots();