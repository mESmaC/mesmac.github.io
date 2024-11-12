const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.setAttribute('tabindex', '0');
    
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const overlay = item.querySelector('.portfolio-overlay');
            overlay.style.opacity = '1';
        }
    });

    item.addEventListener('blur', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        overlay.style.opacity = '';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.image-carousel');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const images = track.querySelectorAll('img');
        const indicatorsContainer = carousel.querySelector('.carousel-indicators');
        let currentIndex = 0;
        
        images.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });
        
        images[0].classList.add('active');
        
        function goToSlide(index) {
            images[currentIndex].classList.remove('active');
            indicatorsContainer.children[currentIndex].classList.remove('active');
            
            currentIndex = index;
            
            images[currentIndex].classList.add('active');
            indicatorsContainer.children[currentIndex].classList.add('active');
        }
        
        function nextSlide() {
            const nextIndex = (currentIndex + 1) % images.length;
            goToSlide(nextIndex);
        }
        
        const interval = parseInt(carousel.dataset.interval) || 3000;
        let autoAdvance = setInterval(nextSlide, interval);
        
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoAdvance = setInterval(nextSlide, interval);
        });
        
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                const prevIndex = (currentIndex - 1 + images.length) % images.length;
                goToSlide(prevIndex);
            } else if (e.key === 'ArrowRight') {
                const nextIndex = (currentIndex + 1) % images.length;
                goToSlide(nextIndex);
            }
        });
    });
});