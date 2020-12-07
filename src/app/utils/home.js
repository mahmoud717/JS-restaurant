import switchToMenu from './menu';
import img1 from '../../assets/imgs/bigzack.png';

export default () => {
  const mainContent = document.querySelector('main#content');
  if (!mainContent.classList.contains('home-active')) {
    mainContent.className = '';
    mainContent.classList.add('home-active');
    mainContent.innerHTML = '';
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Mighty, Tasty & <span>Yummy...</span>';
    const h2 = document.createElement('h2');
    h2.innerHTML = 'The cure to all hunger cravings is hidden inside <span>THE CHICKENEER™</span>';
    const img = document.createElement('img');
    img.src = img1;
    const button = document.createElement('button');
    button.innerHTML = 'CHECK THE MENU';
    button.addEventListener('click', (e) => {
      e.preventDefault();
      switchToMenu();
    });
    homeContainer.appendChild(h1);
    homeContainer.appendChild(h2);
    homeContainer.appendChild(img);
    homeContainer.appendChild(button);
    mainContent.appendChild(homeContainer);
  }
};