// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
  bar.addEventListener('click',() =>{
    nav.classList.add('active')
  })
}


if(close){
  close.addEventListener('click',() =>{
    nav.classList.remove('active')
  })
}








// InterSectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // กำหนดให้เริ่มแสดงเมื่อ 10% ของ element เข้ามาใน viewport
  });

  fadeElements.forEach((el) => observer.observe(el));
});





// img change

document.addEventListener("DOMContentLoaded", () => {
  const heroImgDiv = document.querySelector(".hero-img"); 
  const heroImg = document.getElementById("hero-image"); 

  // เมื่อชี้เมาส์
  heroImgDiv.addEventListener("mouseenter", () => {
      heroImg.src = "images/dog/dog1.jpg"; // เปลี่ยนภาพ
  });

  // เมื่อเอาเมาส์ออก
  heroImgDiv.addEventListener("mouseleave", () => {
      heroImg.src = "images/dog/shirt-dog.png"; // คืนค่าภาพเดิม
  });
});




// Select all <a> elements inside the navbar
const navbarLinks = document.querySelectorAll('#navbar a');

// Add click event listener to each <a> element
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all <a> elements
        navbarLinks.forEach(navLink => navLink.classList.remove('active'));
        
        // Add 'active' class to the clicked <a>
        link.classList.add('active');
    });
});
