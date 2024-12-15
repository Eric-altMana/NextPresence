  // Initialize Swiper
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3, // Show 3 cards at a time
    spaceBetween: 30, // Spacing between cards
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Auto slide every 3 seconds
      disableOnInteraction: false, // Keep autoplay after interactions
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// Initialize odometer values
window.addEventListener('load', function () {
  setTimeout(() => {
    document.getElementById('odometer1').innerHTML = 150; // Projets
    document.getElementById('odometer2').innerHTML = 120; // Clients
    document.getElementById('odometer3').innerHTML = 100000; // Lignes de Code
    document.getElementById('odometer4').innerHTML = 5; // Années d'Expérience
  }, 500); // Délai pour l'animation fluide
});