import products from "../assets/products.json" assert { type: "json" };

const coffeeTab = document.querySelector('.menu__tab-coffee');
const teaTab = document.querySelector('.menu__tab-tea');
const dessertTab = document.querySelector('.menu__tab-dessert');
const menu = document.querySelector('.menu__container');

window.onload = function () {

    // Categories of products
    addCategriesClickHandler();
    // addButtonMoreClickHandler();
}

const addCategriesClickHandler = () => {
    document.querySelector('.menu__tabs').addEventListener('click', (e) => {
        if (e.target.id === 'coffee') {
            coffeeCategoryChecked();
        } else if (e.target.id === 'tea') {
            teaCategoryChecked();
        } else if (e.target.id === 'dessert') {
            dessertCategoryChecked();
        }
    })
}

const coffeeCategoryChecked = () => {
    if (document.querySelector('.checked').id !== 'coffee') {
        coffeeTab.classList.add('checked');
        teaTab.classList.remove('checked');
        dessertTab.classList.remove('checked');
        addCategory('coffee');
    }
}

const teaCategoryChecked = () => {
    if (document.querySelector('.checked').id !== 'tea') {
        teaTab.classList.add('checked');
        coffeeTab.classList.remove('checked');
        dessertTab.classList.remove('checked');
        addCategory('tea');
    }
}

const dessertCategoryChecked = () => {
    if (document.querySelector('.checked').id !== 'dessert') {
        dessertTab.classList.add('checked');
        teaTab.classList.remove('checked');
        coffeeTab.classList.remove('checked');
        addCategory('dessert');
    }
}

 const addCategory = (category) => {
    menu.innerHTML = '';
    let i = 0;
    products.forEach(element => {
        if (element.category == category) {
            let menuItem = document.createElement('div');
            menuItem.classList.add('menu__item');
            menu.append(menuItem);
            let menuItemImg = document.createElement('img');
            menuItemImg.src = `../assets/menu/${element.name.replaceAll(' ', '')}.jpg`;
            menuItem.append(menuItemImg);
            let menuItemContainer = document.createElement('div');
            menuItemContainer.classList.add('menu__item__container');
            menuItem.append(menuItemContainer);
            let menuItemDesc = document.createElement('div');
            menuItemDesc.classList.add('menu__item__description');
            menuItemContainer.append(menuItemDesc);
            let menuItemName = document.createElement('h3');
            menuItemName.innerHTML = `${element.name}`;
            menuItemDesc.append(menuItemName);
            let menuItemDescription = document.createElement('p');
            menuItemDescription.innerHTML = `${element.description}`;
            menuItemDesc.append(menuItemDescription);
            let menuItemPrice = document.createElement('h3');
            menuItemPrice.innerHTML = `${element.price}`;
            menuItemContainer.append(menuItemPrice);
            if (i > 3) {
                menuItem.classList.add('menu__item__tablet-hidden')
            }
            i += 1;
        }
    });
    console.log(i);
    if (i < 5) {
        document.querySelector('.menu__button-more').classList.add('hidden');
    } else {
        document.querySelector('.menu__button-more').classList.remove('hidden');
    }
 }

//  const addButtonMoreClickHandler = () => {
//     document.querySelector('.menu__button-more').addEventListener('click', () => {
//         addCategory(document.querySelector('.checked'))
//     })
//  }