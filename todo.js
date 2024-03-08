console.log("running");

let todoList = [];
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  let saveTodoList = localStorage.setItem("ToDoList", JSON.stringify(todoList));
  // console.log(todoList);
  console.log(localStorage.getItem("ToDoList"));
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  let getTodostr = localStorage.getItem("ToDoList");
  console.log("get", getTodostr);
  let getTodoList = [{ item: "", dueDate: "" }] || JSON.parse(getTodostr);

  console.log(getTodoList);
  for (let i = 0; i < getTodoList.length; i++) {
    let { item, dueDate } = getTodoList[i];
    newHtml += `
      <span> ${item}</span>
      <span> ${dueDate}</span>
      <button class="btn-delete" onclick="getTodoList.splice(${i}, 1)
      displayItems();">Delete</button>  
    `;
  }
  containerElement.innerHTML = newHtml;
}
