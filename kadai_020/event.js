const addBtn =document.getElementById('btn');

addBtn.addEventListener('click', () => {
  let element = document.querySelector('h2');
  element.textContent = 'ボタンをクリックしました';
  console.log(element.textContent); // "Hi!"
});


