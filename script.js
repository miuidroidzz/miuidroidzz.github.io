
document.addEventListener('mousemove', (e) => {
  const bg = document.querySelector('.bg-animation');
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  bg.style.transform = `translate(${x}px, ${y}px)`;
});
