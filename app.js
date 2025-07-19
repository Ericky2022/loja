document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('show');
  });

  let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // troca a cada 4 segundos
}

document.addEventListener("DOMContentLoaded", showSlides);

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  slideIndex += direction;

  if (slideIndex < 0) slideIndex = totalSlides - 1;
  if (slideIndex >= totalSlides) slideIndex = 0;

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-play a cada 5 segundos
setInterval(() => moveSlide(1), 5000);