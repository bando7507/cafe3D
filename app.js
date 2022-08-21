
const navToggle = document.querySelector('.nav__toggle'),
      menuNav= document.querySelector('.nav__menu'),
      navClose = document.querySelector('.nav__close')



      navToggle.addEventListener('click', () =>{
        menuNav.classList.add('show')
      })

      navClose.addEventListener('click', () =>{
        menuNav.classList.remove('show')
      })