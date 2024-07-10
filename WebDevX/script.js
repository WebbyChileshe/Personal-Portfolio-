document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('navbar');
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            const current = document.getElementsByClassName('active');
            if (current.length > 0) {
                current[0].className = current[0].className.replace('active', '');
            }
            this.className += 'active';
        });
    }

    let slideIndex = 0;
    const projects = document.querySelectorAll('.project');
    const totalSlides = projects.length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        const projectContainer = document.querySelector('.project-container');
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }

        const offset = -slideIndex * 100;
        projectContainer.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(slideIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(slideIndex + 1);
    });

    showSlide(slideIndex);
});
