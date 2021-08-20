const submit_btn = document.getElementById("btnAdd"),
  input_name = document.getElementById("userName"),
  input_task = document.getElementById("taskName"),
  task_root = document.getElementById("task-root"),
  task_item = document.getElementById("task-item"),
  tasks = [];

const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getLocal = () => {
  if (localStorage.getItem("tasks")) {
    const resp = localStorage.getItem("tasks");
    const data = JSON.parse(resp);
    data.forEach((dato) => tasks.push(dato));
    data.forEach((li) => task_root.insertAdjacentHTML("beforeend", li));
  }
};

const cleanInputs = () => {
  input_task.value = "";
};

const createItem = ({ user, task }) => {
  const item = `<li class="task-item" id="task-item">${task} <span class="author">${user}</span></li>`;
  tasks.push(item);
  addItem(item);
};

const addItem = (item) => {
  task_root.insertAdjacentHTML("beforeend", item);
  saveLocal();
};

const getData = () => {
  const data = {
    user: input_name.value ? input_name.value : "Usuario",
    task: input_task.value ? input_task.value : "Dominar el mundo",
    done: false,
  };
  createItem(data);
  cleanInputs();
};

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  getData();
});

task_item.addEventListener("click", (e) => {
  e.target.classList.toggle("done");
});

window.addEventListener("load", () => getLocal());
