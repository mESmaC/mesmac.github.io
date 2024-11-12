// Intersection Observer for scroll animations
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

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Accessibility improvements
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    // Add keyboard navigation
    item.setAttribute('tabindex', '0');
    
    // Handle keyboard events
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            // Trigger overlay
            const overlay = item.querySelector('.portfolio-overlay');
            overlay.style.opacity = '1';
        }
    });

    // Reset overlay on blur
    item.addEventListener('blur', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        overlay.style.opacity = '';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.image-carousel');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const images = track.querySelectorAll('img');
        const indicatorsContainer = carousel.querySelector('.carousel-indicators');
        let currentIndex = 0;
        
        // Create indicators
        images.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });
        
        // Set first image as active
        images[0].classList.add('active');
        
        // Function to go to a specific slide
        function goToSlide(index) {
            images[currentIndex].classList.remove('active');
            indicatorsContainer.children[currentIndex].classList.remove('active');
            
            currentIndex = index;
            
            images[currentIndex].classList.add('active');
            indicatorsContainer.children[currentIndex].classList.add('active');
        }
        
        // Function to advance to next slide
        function nextSlide() {
            const nextIndex = (currentIndex + 1) % images.length;
            goToSlide(nextIndex);
        }
        
        // Set up auto-advance
        const interval = parseInt(carousel.dataset.interval) || 3000;
        let autoAdvance = setInterval(nextSlide, interval);
        
        // Pause on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoAdvance = setInterval(nextSlide, interval);
        });
        
        // Handle keyboard navigation when focused
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