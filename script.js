const taskInp = document.querySelector(".task_input");
const addBtn = document.querySelector(".add_btn");
const tasklist = document.querySelector(".task_list");

// function excuted when click add btn
const addTaskItem = function () {
  // creat li
  const task = document.createElement("li");
  tasklist.appendChild(task);
  task.textContent = taskInp.value;
  task.classList.add("task");
  // creat delete button
  const deleteBtn = document.createElement("i");
  task.appendChild(deleteBtn);
  deleteBtn.classList.add("delete_btn", "fa", "fa-trash");
  // creat check button
  const tikCheck = document.createElement("i");
  task.appendChild(tikCheck);
  tikCheck.classList.add("check_btn", "fa", "fa-check-square");
  // check
  tikCheck.addEventListener("click", function () {
    task.classList.toggle("compeleted");
    tikCheck.classList.toggle("hidden");
  });
  // delete
  deleteBtn.addEventListener("click", function () {
    tasklist.removeChild(task);
  });
};

addBtn.addEventListener("click", function () {
  if (taskInp.value !== "") {
    addTaskItem();
  } else {
    alert(` write your task please 😊 `);
  }
  // empty the inp
  taskInp.value = "";
});
// frist JS project that I do it alone .🎉🤩🏆
// I proud myself 😎
