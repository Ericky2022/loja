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
