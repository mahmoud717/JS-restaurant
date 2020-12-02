export default () => {
  const body = document.querySelector('body');
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');
  const homeTab = document.createElement('div');
  homeTab.classList.add('home-tab');
  homeTab.innerHTML = '<span>HOME</span>';
  const menuTab = document.createElement('div');
  menuTab.classList.add('menu-tab');
  menuTab.innerHTML = '<span>MENU</span>';
  const contactsTab = document.createElement('div');
  contactsTab.classList.add('contacts-tab');
  contactsTab.innerHTML = '<span>CONTACT US</span>';
  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(contactsTab);
  body.prepend(tabs);
};