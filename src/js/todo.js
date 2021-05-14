import { URL } from "./constants";

import { tabReg } from "./tabreg";

export const getTodos = async (id) => {
  const response = await fetch(`${URL}/todos?userId=${id}`);
  const data = await response.json();
  renderTodos(data);
  todosListener();
};

export const todosListener = () => {
  document.querySelector("#todo").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#todo_content").classList.remove("hidden");
    tabReg("#todo");
  });
};

export const renderTodos = (todos) => {
  document.querySelector("#todo_content").innerHTML = "";
  todos.forEach((todo) => {
    document.querySelector("#todo_content").innerHTML += `<p>${todo.title}</p>`;
  });
};
