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

window.onload = init;
