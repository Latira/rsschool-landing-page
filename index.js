const carouselBtnBack = document.querySelector('.favorite__slider__button-back');
const carouselBtnForward = document.querySelector('.favorite__slider__button-forward');
const carouselElements = [
    {
        'key' : 1,
        'src' : 'assets/coffee-slider/coffee-slider-1.svg',
        'name' : 'S’mores Frappuccino',
        'description' : 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
        'price' : '$5.50'
    },
    {
        'key' : 2,
        'src' : 'assets/coffee-slider/coffee-slider-2.svg',
        'name' : 'Caramel Macchiato',
        'description' : 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
        'price' : '$5.00'
    },
    {
        'key' : 3,
        'src' : 'assets/coffee-slider/coffee-slider-3.svg',
        'name' : 'Ice coffee',
        'description' : 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.',
        'price' : '$4.50'
    }    
];
const slider = document.querySelector('.favorite__slider__content');
const sliderList = document.querySelector('.favorite__slider__list');
const slideFirst = document.querySelector('.favorite__slider__container1');
const slideSecond = document.querySelector('.favorite__slider__container2');
const slideThird = document.querySelector('.favorite__slider__container3');
const controlFirst = document.querySelector('.slider__control1');
const controlSecond = document.querySelector('.slider__control2');
const controlThird = document.querySelector('.slider__control3');
const controlBarFirst = document.querySelector('.control__bar1');
const controlBarSecond = document.querySelector('.control__bar2');
const controlBarThird = document.querySelector('.control__bar3');
const themeBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
const burgerBtn = document.getElementById('burger-open');
const burgerMenu = document.getElementById('burger');
const menuLinks = document.querySelectorAll('#burger a');
let checkedPagination = document.querySelector('.active');
let progressBarWidth;

window.onload = function () {

        // Burger
    addBurgerClickHandler();
        // Carousel
    addCarousel();
    addCarouselClickHandler();

}

    // Burger

const addBurgerClickHandler = () => {
    // document.querySelector('.burger').addEventListener('click', () => {
    //     alert('К сожалению функционал бурегер-меню не реализован, однако, обратите, пожалуйста внимание, что выполнены следующие пункты проверки:\nAt a page width of 768px or less, the navigation panel hides, and the burger icon appears: +2\nWhen the page width increases to 769px or higher, the burger icon and the open burger menu hide, and the navigation panel appears: +2')
    // })
}

    // Carousel

let carouselProgressBar = setInterval(() => {    
    // let int = setInterval(frame, 50);
    // progressBarWidth = 2;
    // function frame() {
    //     if (progressBarWidth >= 100) {
    //         clearInterval(int);
    //         carouselForward();
    //         checkedPagination.style.width = 0;
    //         reloadCheckedPagination();
    //     } else {
    //         progressBarWidth += 2;
    //         checkedPagination.style.width = progressBarWidth + "%";
    //     }
    // }
}, 5000)

const addCarousel = () => {
    // carouselElements.forEach (element => {
    //     let slideContainer = document.querySelector(`.favorite__slider__container${element.key}`)
    //     sliderList.append(slideContainer);
    //     let slideImg = document.createElement("img");
    //     slideImg.classList.add('favorite__slider__img');
    //     slideImg.src = element.src;
    //     slideImg.alt = element.name;
    //     slideContainer.append(slideImg);
    //     let slideHeading = document.createElement('h3');
    //     slideHeading.innerHTML = `${element.name}`;
    //     slideContainer.append(slideHeading);
    //     let slideDesc = document.createElement('p');
    //     slideDesc.classList.add('favorite__slider__description');
    //     slideDesc.innerHTML = `${element.description}`;
    //     slideContainer.append(slideDesc);
    //     let slidePrice = document.createElement('h3');
    //     slidePrice.innerHTML = `${element.price}`;
    //     slideContainer.append(slidePrice);
    // })
}

const addCarouselClickHandler = () => {   
    // carouselBtnBack.addEventListener('click', () => {
    //     if (slideFirst.classList.contains('active-slide')) {
    //         slideFirst.classList.remove('active-slide');
    //         slideThird.classList.add('active-slide');
    //         sliderList.classList.remove('first-slide-active');
    //         sliderList.classList.add('third-slide-active');
    //         controlFirst.classList.remove('checked');
    //         controlThird.classList.add('checked');
    //         controlBarFirst.classList.remove('active');
    //         controlBarThird.classList.add('active');
    //     } else if (slideSecond.classList.contains('active-slide')) {
    //         slideSecond.classList.remove('active-slide');
    //         slideFirst.classList.add('active-slide');
    //         sliderList.classList.remove('second-slide-active');
    //         sliderList.classList.add('first-slide-active');
    //         controlSecond.classList.remove('checked');
    //         controlFirst.classList.add('checked');
    //         controlBarSecond.classList.remove('active');
    //         controlBarFirst.classList.add('active');
    //     } else {
    //         slideThird.classList.remove('active-slide');
    //         slideSecond.classList.add('active-slide');
    //         sliderList.classList.remove('third-slide-active');
    //         sliderList.classList.add('second-slide-active');
    //         controlThird.classList.remove('checked');
    //         controlSecond.classList.add('checked');
    //         controlBarThird.classList.remove('active');
    //         controlBarSecond.classList.add('active');
    //     }
    //     reloadCheckedPagination();
    //     clearInterval(checkedPagination);
    // })
    // carouselBtnForward.addEventListener('click', () => {
    //     carouselForward();
    //     reloadCheckedPagination();
    //     clearInterval(checkedPagination);
    // })
}

const carouselForward = () => {
    // if (slideFirst.classList.contains('active-slide')) {
    //     slideFirst.classList.remove('active-slide');
    //     slideSecond.classList.add('active-slide');
    //     sliderList.classList.remove('first-slide-active');
    //     sliderList.classList.add('second-slide-active');
    //     controlFirst.classList.remove('checked');
    //     controlSecond.classList.add('checked');
    //     controlBarFirst.classList.remove('active');
    //     controlBarSecond.classList.add('active');
    // } else if (slideSecond.classList.contains('active-slide')) {
    //     slideSecond.classList.remove('active-slide');
    //     slideThird.classList.add('active-slide');
    //     sliderList.classList.remove('second-slide-active');
    //     sliderList.classList.add('third-slide-active');
    //     controlSecond.classList.remove('checked');
    //     controlThird.classList.add('checked');
    //     controlBarSecond.classList.remove('active');
    //     controlBarThird.classList.add('active');
    // } else {
    //     slideThird.classList.remove('active-slide');
    //     slideFirst.classList.add('active-slide');
    //     sliderList.classList.remove('third-slide-active');
    //     sliderList.classList.add('first-slide-active');
    //     controlThird.classList.remove('checked');
    //     controlFirst.classList.add('checked');
    //     controlBarThird.classList.remove('active');
    //     controlBarFirst.classList.add('active');
    // }
}

const reloadCheckedPagination = () => {
    // checkedPagination = checkedPagination = document.querySelector('.active');
    // checkedPagination.style.width = "2%"
    // progressBarWidth = 2;
}

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


