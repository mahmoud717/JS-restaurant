import '../assets/style/main.scss';
import switchToHome from './utils/home';
import switchToMenu from './utils/menu';
import switchToContacts from './utils/contacts';
import nav from './utils/nav';
import tabs from './utils/tabs';
import footer from './utils/footer';

(function loadDefault() {
  tabs();
  nav();
  footer();
  switchToHome();
}());
(function addEventListeners() {
  const tabs = document.querySelector('.tabs');
  tabs.querySelector('.home-tab').addEventListener('click', () => {
    switchToHome();
  });
  tabs.querySelector('.menu-tab').addEventListener('click', () => {
    switchToMenu();
  });
  tabs.querySelector('.contacts-tab').addEventListener('click', () => {
    switchToContacts();
  });
}());
