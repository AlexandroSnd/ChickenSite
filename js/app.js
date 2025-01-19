gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  effects: true
});

gsap.from('.navigation', {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: 'power4.out',
});

gsap.from('.balet', {
    x: 100,
    opacity: 0,
    duration: 2,
    ease: 'power4.out',
  });

gsap.from('.main-header__text-box', {
    x: -100,
    opacity: 0,
    duration: 2,
    ease: 'power4.out',
});

gsap.from('.orange-button', {
    opacity: 0,
    x: -100,
    duration: 1,
  });

let numbers = gsap.utils.toArray('.number')

numbers.forEach((item, index) => {
    gsap.fromTo(item, 
      { opacity: 0, x: 50 }, // Начальные параметры
      {
        opacity: 1, 
        x: 0, // Конечные параметры
        scrollTrigger: {
          trigger: item, // Индивидуальный элемент
          start: 'bottom bottom',
          scrub: false, // Без привязки к прокрутке
        },
        delay: index * 0.2 // Задержка для каждого элемента
      }
    );
  });


// Находим кнопку
const button = document.querySelector('.orange-button');

button.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяем переход по ссылке

  
    gsap.to(window, {
      scrollTo: {
        y: '#catalog',
      },
      duration: 0.2, // Длительность анимации
      ease: 'power4.out',
    });
  });


let chickenList = gsap.utils.toArray('.chicken-card')

chickenList.forEach((item, index) => {
    gsap.fromTo(item,
      { 
        opacity: 0, 
        x: 50, 
        scale: 0.8, // Начальный масштаб
        rotation: 10, // Начальное вращение
      }, 
      {
        opacity: 1, 
        x: 0, 
        scale: 1, // Конечный масштаб
        rotation: 0, // Конечное вращение
        ease: 'power3.out', // Плавное завершение анимации
        scrollTrigger: {
          trigger: item,
          scrub: false,
        },
        delay: index * 0.2, // Задержка для каждого элемента
        duration: 1.5, // Длительность анимации
      }
    );
  });

  gsap.fromTo(".background-text span", {
    opacity: 0,
    y: 50, // Начальная позиция букв
  }, {
    opacity: 1,
    y: 0, // Конечная позиция букв
    duration: 1, // Длительность анимации
    stagger: 0.1, // Интервал между анимациями букв
    ease: "power4.out",
  });
  