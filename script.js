const taskInp = document.querySelector(".task_input");
const addBtn = document.querySelector(".add_btn");
const ul = document.querySelector(".task_list");

// function excuted when click add btn
const add = function () {
  // creat li
  const li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = taskInp.value;
  li.classList.add("task");
  // creat delete button
  const deleteBtn = document.createElement("i");
  li.appendChild(deleteBtn);
  deleteBtn.classList.add("delete_btn", "fa", "fa-trash");
  // creat check button
  const tikCheck = document.createElement("i");
  li.appendChild(tikCheck);
  tikCheck.classList.add("check_btn", "fa", "fa-check-square");
  // check
  tikCheck.addEventListener("click", function () {
    li.classList.toggle("compeleted");
    tikCheck.classList.toggle("hidden");
  });
  // delete
  deleteBtn.addEventListener("click", function () {
    li.classList.toggle("hidden");
  });
};

addBtn.addEventListener("click", function () {
  if (taskInp.value !== "") {
    add();
  } else {
    alert(` write your task please 😊 `);
  }
  // empty the inp
  taskInp.value = "";
});
// frist JS project that I do it alone .🎉🤩🏆
// I proud myself 😎
