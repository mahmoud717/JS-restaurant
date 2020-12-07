export default () => {
  const body = document.querySelector('body');
  const nav = document.createElement('nav');
  nav.classList.add('navbar');
  const navbarInner = document.createElement('div');
  navbarInner.classList.add('navbar-inner');
  navbarInner.innerHTML = '<span class="navbar-header">THE CHICKENEER</span>';
  nav.appendChild(navbarInner);
  body.prepend(nav);
};