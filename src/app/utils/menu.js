import img1Img from '../../assets/imgs/fat-forresster.png';
import img2Img from '../../assets/imgs/bigzack.png';
import img3Img from '../../assets/imgs/mozzarella-madness.png';

export default () => {
  const mainContent = document.querySelector('main#content');
  if (!mainContent.classList.contains('menu-active')) {
    mainContent.innerHTML = '';
    mainContent.className = '';
    mainContent.classList.add('menu-active');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('items-container');
    // create item 1
    const item1 = document.createElement('div');
    item1.classList.add('item');
    const img1 = document.createElement('img');
    img1.src = img1Img;
    const span1 = document.createElement('span');
    span1.innerText = 'Fat Chickeneer';
    const button1 = document.createElement('button');
    button1.innerHTML = 'ORDER NOW';
    item1.appendChild(img1);
    item1.appendChild(span1);
    item1.appendChild(button1);

    //
    // create item 2
    const item2 = document.createElement('div');
    item2.classList.add('item');
    const img2 = document.createElement('img');
    img2.src = img2Img;
    const span2 = document.createElement('span');
    span2.innerText = 'Big Zack';
    const button2 = document.createElement('button');
    button2.innerHTML = 'ORDER NOW';
    item2.appendChild(img2);
    item2.appendChild(span2);
    item2.appendChild(button2);

    //
    // create item 3
    const item3 = document.createElement('div');
    item3.classList.add('item');
    const img3 = document.createElement('img');
    img3.src = img3Img;
    const span3 = document.createElement('span');
    span3.innerText = 'Mozzarella Madness';
    const button3 = document.createElement('button');
    button3.innerHTML = 'ORDER NOW';
    item3.appendChild(img3);
    item3.appendChild(span3);
    item3.appendChild(button3);

    //
    itemsContainer.appendChild(item1);
    itemsContainer.appendChild(item2);
    itemsContainer.appendChild(item3);


    menuContainer.appendChild(itemsContainer);

    mainContent.appendChild(menuContainer);
  }
};