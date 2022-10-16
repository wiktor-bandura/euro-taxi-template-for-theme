const elementsToAnimate = document.querySelectorAll('.scroll-anim');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if(entry.isIntersecting) {
            entry.target.classList.add('fade');
        } else {
            entry.target.classList.remove('fade');
        }
    })
});

elementsToAnimate.forEach((el) => observer.observe(el));