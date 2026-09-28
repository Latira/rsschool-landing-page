const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
const burgerBtn = document.getElementById('burger-open');
const burgerMenu = document.querySelector('.header__nav');
const menuLinks = document.querySelectorAll('#burger a');

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


  const addButtonMoreClickHandler = () => {
     document.querySelector('.menu__button-more').addEventListener('click', () => {
         addCategory(document.querySelector('.checked'))
     })
  }

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  burgerBtn.classList.toggle('open');
  document.body.classList.toggle('lock'); 
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('open');
      burgerBtn.classList.remove('open');
      document.body.classList.remove('lock');
    });
});

