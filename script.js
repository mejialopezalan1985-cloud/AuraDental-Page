const header = document.getElementById('header');

const menuToggle = document.getElementById('menuToggle');

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));

menuToggle.addEventListener('click', () => {

  const open = nav.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', String(open));

  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');

});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {

  nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');

}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {

  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }

}), { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

const form = document.getElementById('appointmentForm');

const modal = document.getElementById('successModal');

const closeModal = () => { modal.classList.remove('show'); form.reset(); };

form.addEventListener('submit', event => {

  event.preventDefault();

  if (!form.reportValidity()) return;

  const name = document.getElementById('fullName').value.trim();

  const service = document.getElementById('service').value;

  document.getElementById('modalMessage').textContent = `Gracias, ${name}. Tu solicitud para ${service} fue registrada en esta demostración. Para confirmar una cita real, conecta el formulario a un servicio de correo o base de datos.`;

  modal.classList.add('show');

});

closeModal.addEventListener('click', closeModal);

modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });

document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });