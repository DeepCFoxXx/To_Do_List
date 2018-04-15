var init = function(){
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);
  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

var populate = function(todos){
  todos.forEach(function(item){
    addItem(item);
  });
}

var addItem = function(item){
  var ul = document.querySelector('#todo-list');
  var newItem = document.createElement('li');
  newItem.innerText = item;
  ul.appendChild(newItem);
}

window.onload = init;
