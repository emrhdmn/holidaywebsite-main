const header = document.querySelector("header");
//console.log(header)

const menuBtn=document.querySelector('#menu-icon')
//console.log(menuBtn)

const navbar=document.querySelector('.navbar')
//console.log(navbar)

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 60);
});



menuBtn.addEventListener('click',()=>{
    navbar.classList.toggle('open')
})



document.addEventListener('DOMContentLoaded', function() {
    const gifs = document.querySelectorAll('.gif');

    gifs.forEach(gif => {
        gif.addEventListener('mouseover', function() {
            gif.src = gif.src; 
        });

        gif.addEventListener('mouseout', function() {
            gif.src = gif.src; 
        });
    });
});
