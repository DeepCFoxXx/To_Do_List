var init = function(){
  var button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);
  var todosArray = JSON.parse(localStorage.getItem('todoList')) || [];
  populate(todosArray);
}

window.onload = init;
