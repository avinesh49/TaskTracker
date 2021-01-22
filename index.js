window.onload = () => {
  let showInputForm = false;
  const containerDiv = document.querySelector(".container");
  const addButton = document.querySelector(".add-btn");
  const inputForm = document.querySelector(".input-form");
  const inputTask = document.querySelector("#task");
  const inputDay = document.querySelector("#day");
  const saveButton = document.querySelector(".save-btn");
  const tasks = document.createElement("div");
  tasks.className = "tasks-list";

  tasks.style.margin = "0.5rem";
  containerDiv.appendChild(tasks);

  addButton.addEventListener("click", () => {
    showInputForm = !showInputForm;
    if (showInputForm) {
      inputForm.style.display = "block";
      addButton.innerText = "Close";
    } else {
      inputForm.style.display = "none";
      addButton.innerText = "Add";
    }
  });

  saveButton.addEventListener("click", () => {
    if (inputTask.value !== "" && inputDay.value !== "") {
      const taskItem = document.createElement("div");
      taskItem.style.fontFamily = '"Poppins", sans-serif';
      taskItem.style.marginBottom = "0.5rem";
      taskItem.style.backgroundColor = "#D1D5DB";
      taskItem.style.borderRadius = "2px";
      taskItem.style.width = "100%";
      taskItem.addEventListener("dblclick", () => {
        taskItem.remove();
      });
      const taskTitle = document.createElement("h3");
      const taskDay = document.createElement("p");
      taskTitle.innerText = inputTask.value;
      taskTitle.style.padding = "0.25rem 0.5rem 0 0.5rem";
      taskTitle.style.fontWeight = 'normal';
      taskDay.innerText = inputDay.value;
      taskDay.style.padding = "0 0.5rem 0.25rem 0.5rem";
      taskDay.style.fontSize = '14px';
      taskItem.appendChild(taskTitle);
      taskItem.appendChild(taskDay);
      tasks.appendChild(taskItem);
      inputTask.value = "";
      inputDay.value = "";
    }
  });
};
