window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const triggerPoint = 4000;

    if (scrollTop > triggerPoint) {
    document.body.style.backgroundColor = 'white';
    } else {
    document.body.style.backgroundColor = 'black';
    }

    sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;
    const translateValue = sectionTop < triggerPoint ? '0' : '100px';
    section.style.transform = `translateY(${translateValue})`;
    });
});