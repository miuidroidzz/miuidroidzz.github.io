// Digitação automática
const subtitle = document.querySelector('header p');
const originalText = subtitle.textContent;
subtitle.textContent = '';
let i = 0;

function typeWriter() {
  if (i < originalText.length) {
    subtitle.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
setTimeout(typeWriter, 800);

// Scroll reveal nas seções
const sections = document.querySelectorAll('section');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) {
      sec.style.opacity = '1';
      sec.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  sections.forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(50px)';
    sec.style.transition = 'all 0.8s ease';
  });
  revealOnScroll();
});

// Bounce ao passar o mouse nos ícones
document.querySelectorAll('nav a i').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('fa-bounce');
  });
  icon.addEventListener('mouseleave', () => {
    icon.classList.remove('fa-bounce');
  });
});
