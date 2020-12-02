export default () => {
  const mainContent = document.querySelector('main#content');
  if (!mainContent.classList.contains('contacts-active')) {
    mainContent.innerHTML = '';
    mainContent.className = '';
    mainContent.classList.add('contacts-active');
    const contactsContainer = document.createElement('div');
    contactsContainer.classList.add('contacts-container');
    const h1 = document.createElement('h1');
    h1.innerText = 'Need to tell us something ??';
    const div = document.createElement('div');
    const link = document.createElement('a');
    link.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=theChickeneer@sauce.com';
    link.target = '_blank';
    const btn = document.createElement('button');
    btn.innerText = 'SEND US AN EMAIL';
    link.appendChild(btn);
    div.appendChild(link);
    contactsContainer.appendChild(h1);
    contactsContainer.appendChild(div);
    mainContent.appendChild(contactsContainer);
  }
};
