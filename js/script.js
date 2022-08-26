let taskList = $('#taskList');

function addTask() {
  let text = $('#newTask').val();
  let newTask = $(`<li class="task">${text}</li>`);
  $('#taskList').append(newTask);
  $(newTask).on('click', () => $(newTask).addClass('strike'));
}

$('#addTaskBtn').on('click', (e) => {
  e.preventDefault();
  addTask();
});
