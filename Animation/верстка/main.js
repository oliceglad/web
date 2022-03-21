window.addEventListener('DOMContentLoaded', function () {

  var tl = gsap.timeline({paused:true});

  tl.to(".menu__top", {duration: 0.5, y: 0, opacity: 1})
    .to(".close", {duration: 0.1, opacity: 1})
    .to(".menu__nav", {duration: 1, opacity: 1, y: 0})
    setTimeout (() => {
      tl.to(".social", {duration: 1, opacity: 1, y: 0})
    }, 100)
    setTimeout (() => {
      tl.to(".menu__right", {duration: 1, opacity: 1, y: 0})
    }, 100)

  document.querySelector(".burger").addEventListener('click', function() {
    document.querySelector(".menu").classList.add("menu--open");
    gsap.to(".menu", {duration: 1, opacity: 1,} )
    tl.play();
  })

  document.querySelector(".close").addEventListener('click', function() {
    tl.reverse();
    setTimeout (() => {
      document.querySelector(".menu").classList.remove("menu--open");
    }, 2700);
    setTimeout(() => {
      gsap.to(".menu", {duration: 1, opacity: 0,} )
    }, 2500)
  })

})
