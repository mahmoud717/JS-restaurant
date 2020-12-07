export default () => {
  const body = document.querySelector('body');
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footerInner = document.createElement('div');
  footerInner.innerHTML = '<span>Made by<a target="_blank" href=" https://github.com/mahmoud717">Mahmoud Mohammad</a></span>';
  footer.appendChild(footerInner);
  body.appendChild(footer);
};
