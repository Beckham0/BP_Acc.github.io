document.addEventListener("DOMContentLoaded", function () {
    let images = [
      "/Source/IMG_1.jpg",
      "/Source/IMG_2.jpg",
      "/Source/IMG_3.jpg",
      "/Source/IMG_4.jpg"
    ];
  
    let slideshow = document.createElement("div");
    slideshow.classList.add("slideshow");
  
    images.forEach((src, index) => {
      let img = document.createElement("img");
      img.src = src;
      if (index === 0) img.classList.add("active"); // กำหนดภาพแรกให้ active
      slideshow.appendChild(img);
    });
  
    document.querySelector(".right-section").appendChild(slideshow);
  
    let current = 0;
    setInterval(() => {
      let slides = document.querySelectorAll(".slideshow img");
      slides[current].classList.remove("active");
  
      current = (current + 1) % slides.length; // เปลี่ยนภาพวนไป
      slides[current].classList.add("active");
    }, 3000); // เปลี่ยนทุก 3 วินาที
  });
  