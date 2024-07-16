window.addEventListener('scroll', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 1024) {
    const scrollTop = window.scrollY;
    const triggerPoint = 1100;
    const body = document.body;

    if (scrollTop > triggerPoint) {
      body.classList.add('gradient-background');
    } else {
      body.classList.remove('gradient-background');
    }

    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const translateValue = sectionTop < triggerPoint ? '0' : '100px';
      section.style.transform = `translateY(${translateValue})`;
    });
  } else 
  {
    const scrollTop = window.scrollY;
    const triggerPoint = 1700;
    const body = document.body;

    if (scrollTop > triggerPoint) {
      body.classList.add('gradient-background');
    } else {
      body.classList.remove('gradient-background');
    }

    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const translateValue = sectionTop < triggerPoint ? '0' : '100px';
      section.style.transform = `translateY(${translateValue})`;
    });
  }
  });