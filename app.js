// window.onload = () => {

//   let wind = document.querySelector("section .below-cover")
//   let bound = wind.getBoundingClientRect().top
//   let value = window.innerHeight

//   window.addEventListener('scroll', ()=> {

//     if (value < bound) {
//       wind.style.transform = "translateY(0px)"
//       wind.style.opacity = "1"
//     }

//   })


//   console.log(bound)
//   console.log(value)
// }

const nav = document.querySelector(".right-nav")
const burger = document.querySelector(".burger")

burger.addEventListener('click', function() {
  nav.classList.toggle("active")
  burger.classList.toggle("rotate")
})
