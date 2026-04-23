var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  var isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});
