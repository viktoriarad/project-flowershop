const burgerMenu = document.querySelector('.burger-menu__container-burger-icon');
const menuList = document.querySelector('.burger-menu__list');
const iconMenu = document.querySelector('.burger-menu__icon');
const allIconPlus = Array.from(document.querySelectorAll('.fa-plus-square'))
const allIconMinus = Array.from(document.querySelectorAll('.fa-minus-square'));
const allSubMenus = Array.from(document.querySelectorAll('.burger-menu__visible-list'));

const hideAllSubMenus = () => {
  allIconPlus.forEach(el => {
    el.classList.remove('fa-plus-square-hide');
  })

  allIconMinus.forEach(el => {
    el.classList.remove('fa-minus-square-active');
  })

  allSubMenus.forEach(el => {
    el.classList.remove('burger-menu__visible-list--visibility')
  })

}

burgerMenu.addEventListener('click', function () {
  menuList.classList.toggle('burger-menu__list--visibility-visible');
})

allIconPlus.forEach(el => {
  el.addEventListener('click', function () {
    hideAllSubMenus();
    const minusIcon = el.nextElementSibling;
    const subMenuList = minusIcon.nextElementSibling;
    el.classList.toggle('fa-plus-square-hide');
    minusIcon.classList.toggle('fa-minus-square-active');
    subMenuList.classList.toggle('burger-menu__visible-list--visibility');
  })
})


allIconMinus.forEach(el => {
  el.addEventListener('click', function () {
    const plusIcon = el.previousElementSibling;
    const subMenuList = el.nextElementSibling;
    el.classList.toggle('fa-minus-square-active');
    plusIcon.classList.toggle('fa-plus-square-hide');
    subMenuList.classList.toggle('burger-menu__visible-list--visibility');
  })
})
