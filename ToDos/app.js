const form = document.querySelector("#todo");
const list = document.querySelector(".list");
const input = document.querySelector("#task");
let toDoList = [];

// Create new Todo

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(input.value);
  const newEl = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "x";
  newEl.innerText = input.value;
  toDoList.push({ todo: newEl.innerText, isCompleted: false });
  // console.log(toDoList);
  localStorage.setItem("ToDos", JSON.stringify(toDoList));
  newEl.appendChild(removeBtn);
  input.value = "";
  // console.log(newLi);
  list.appendChild(newEl);
  // Remove ToDo and mark it as complete
  list.addEventListener("click", function (e) {
    // console.log(e.target.tagName);
    if (e.target.tagName === "BUTTON") {
      localStorage.setItem("ToDos", JSON.stringify(toDoList));
      e.target.parentElement.remove();
    } else if (e.target.tagName === "LI") {
      // console.log("You Clicked LI");
      e.target.classList.toggle("completed");
      toDoList.push({ todo: newEl.innerText, isCompleted: true });
      localStorage.clear();
      localStorage.setItem("ToDos", JSON.stringify(toDoList));
    }
  });
});

// Save to localStorage
