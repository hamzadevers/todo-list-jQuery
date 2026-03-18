let taskCounter = 0;

// ── Add task on button click ──
$('#btn-add').on('click', function () {
  addTask();
});

// ── Add task on Enter key ──
$('#task-input').on('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// ── Build and append a new task item ──
function addTask() {
  const text = $('#task-input').val().trim();
  if (text === '') return;

  taskCounter++;
  const id = 'task-' + taskCounter;

  const taskHTML = `
    <div class="task-item" id="${id}">
      <input type="checkbox" id="check-${id}">
      <label for="check-${id}">${text}</label>
      <button class="btn-delete" data-id="${id}">✕</button>
    </div>
  `;

  $('#task-list').append(taskHTML);
  $('#task-input').val('').focus();
}

// ── Toggle done state when checkbox is clicked ──
$(document).on('change', '.task-item input[type="checkbox"]', function () {
  $(this).closest('.task-item').toggleClass('done', this.checked);
});

// ── Delete task when ✕ is clicked ──
$(document).on('click', '.btn-delete', function () {
  const id = $(this).data('id');
  $('#' + id).remove();
});

// ── Default tasks (matching the screenshot) ──
function loadDefaultTasks() {
  const defaults = [
    { text: 'Learn jQuery selectors',      done: false },
    { text: 'Setup project environment',   done: true  }
  ];

  defaults.forEach(function (task) {
    taskCounter++;
    const id = 'task-' + taskCounter;

    const taskHTML = `
      <div class="task-item${task.done ? ' done' : ''}" id="${id}">
        <input type="checkbox" id="check-${id}"${task.done ? ' checked' : ''}>
        <label for="check-${id}">${task.text}</label>
        <button class="btn-delete" data-id="${id}">✕</button>
      </div>
    `;

    $('#task-list').append(taskHTML);
  });
}

loadDefaultTasks();
