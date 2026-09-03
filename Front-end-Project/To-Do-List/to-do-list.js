  const input = document.getElementById('todoInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('todoList');
  const footer = document.getElementById('footerText');

  let todos = [
    { text: 'Set Clear Goals', done: false },
    { text: 'Stay Organized', done: false },
    { text: 'Time Management', done: false }
  ];

  function render() {
    list.innerHTML = '';

    if (todos.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'empty_msg';
      empty.textContent = 'No tasks yet. Add one!';
      list.appendChild(empty);
    } else {
      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'card__list_item' + (todo.done ? ' done' : '');

        li.innerHTML = `
          <div class="check" data-index="${index}">
            <svg class="check_svg" viewBox="0 0 24 24">
              <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20 8l-1.4-1.4z"/>
            </svg>
          </div>
          <span class="list_text">${escapeHtml(todo.text)}</span>
<button class="delete_btn" data-index="${index}">
  <i class="fa-solid fa-trash-can"></i>
</button>        `;
        list.appendChild(li);
      });
    }

    const doneCount = todos.filter(t => t.done).length;
    footer.textContent = todos.length === 0
      ? 'No tasks yet'
      : `${doneCount} / ${todos.length} completed`;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function addTodo() {
    const text = input.value.trim();
    if (!text) return;
    todos.push({ text, done: false });
    input.value = '';
    render();
  }

  addBtn.addEventListener('click', addTodo);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
  });

  list.addEventListener('click', (e) => {
    const checkEl = e.target.closest('.check');
    const delEl = e.target.closest('.delete_btn');

    if (checkEl) {
      const i = checkEl.dataset.index;
      todos[i].done = !todos[i].done;
      render();
    }
    if (delEl) {
      const i = delEl.dataset.index;
      todos.splice(i, 1);
      render();
    }
  });

  render();