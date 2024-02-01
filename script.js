var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // const cursor = document.querySelector(".customcursor");
  // document.addEventListener("mousemove", function(e){
  //   cursor.style.top = (e.pageY-20) + "px";
  //   cursor.style.left = (e.pageX-20) + "px";
  // })


let display = document.querySelector(".displaynone");
let button = document.querySelector(".ok");
button.addEventListener("click", function(){
  display.style.display = "none";
})