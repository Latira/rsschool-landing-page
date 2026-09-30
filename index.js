const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
const burgerBtn = document.getElementById('burger-open');
const burgerMenu = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('#burger a');

  // Theme
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeBtn.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeBtn.textContent = '🌙';
  }
}); 

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeBtn.textContent = '☀️';
}


  // Burger
burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  burgerBtn.classList.toggle('open');
  document.body.classList.toggle('lock'); 
  });

function closeMenu() {
  burgerMenu.classList.remove('open');
  burgerBtn.classList.remove('open');
  document.body.classList.remove('lock');
}

menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && burgerMenu.classList.contains('open')) {
    closeMenu();
  }
});


  // Slider
const track = document.querySelector('.slider-track'); // Двигаем именно внутреннюю ленту
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const controls = document.querySelectorAll('.favorite__slider__control');

let currentIndex = 0;
const totalSlides = 3;

function updateSlider(index) {
  const offset = (index * -100) / totalSlides;
  track.style.transform = `translateX(${offset}%)`;
  controls.forEach(control => control.classList.remove('checked'));
  controls[index].classList.add('checked');
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider(currentIndex);
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateSlider(currentIndex);
});


