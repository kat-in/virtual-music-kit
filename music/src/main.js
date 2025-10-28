const body = document.body;

const header = document.createElement('header');
header.classList.add('header');
header.textContent = 'Virtual Music Kit';
const main = document.createElement('main');
body.prepend(header, main);
// console.log(body);
