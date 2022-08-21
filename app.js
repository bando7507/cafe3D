
const navToggle = document.querySelector('.nav__toggle'),
      menuNav= document.querySelector('.nav__menu'),
      navClose = document.querySelector('.nav__close')



      navToggle.addEventListener('click', (e) =>{
        menuNav.classList.add('show')
        console.log(e)
      })

      navClose.addEventListener('click', () =>{
        menuNav.classList.remove('show')
      })

    //   document.addEventListener('mousemove', move)

    //   function move(e){
    //     this.querySelectorAll('.move').forEach(el => {
    //         const speed = el.getAttribute('data-speed')
    //      });
    //   }


       const Move = document.getElementById('move1')
       const Move2 = document.getElementById('move2')
       const Move3 = document.getElementById('move3')
       const Move4 = document.getElementById('move4')
       const Move5 = document.getElementById('move5')
       const Move6 = document.getElementById('move6')
    const aray = [Move, Move2, Move3, Move4, Move5, Move6 ]
      
      document.addEventListener('mousemove', (e)  =>{
            aray.forEach(el=>{
            const speed = el.getAttribute('data-speed')
            // console.log(speed)
            const x = (window.innerWidth - e.pageX*speed ) /120
            const y = (window.innerWidth - e.pageY*speed ) /120
            el.style.transform = `translateX(${x}px) translateY(${y}px)`
            } )

       
    })

const navLogo = document.querySelector('.nav__logo')
    
window.addEventListener('load', ()=>{
    const TL = gsap.timeline({paused : true})

    TL
    .from(navLogo,1, {x: -50, opacity: 0, ease: "power2.out"}, 0.4)
    .from('.home__title', 1, {y: 10, opacity: 0, ease: "power2.out"}, 0.4)

    .play()

    
})
    

    