const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('.To-do-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const task = input.value.trim();

  if (task !== '') {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = ' Supprimer ';

    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', function () {
      li.remove();
      input.focus();
    });
  }
});
