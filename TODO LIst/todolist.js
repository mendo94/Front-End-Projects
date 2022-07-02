// "use-strict";

console.log(this); // window

let taskTextBox = document.getElementById("taskTextBox");
let todoUL = document.getElementById("todoUL");
let completedUL = document.getElementById("completedUL");
let taskAddButton = document.getElementById("taskAddButton");

// const checkboxElements = document.querySelectorAll('input[type="checkbox"]');

taskAddButton.addEventListener("click", function () {
  let text = taskTextBox.value;
  if (text.length == 0) {
    console.log("there is nothing there");
    return;
  } else {
    console.log(this); // add Button

    // create the div element
    let taskItemDiv = document.createElement("div");
    // create checkbox
    let chk = document.createElement("input");
    // set attribute to checkbox
    chk.setAttribute("type", "checkbox");

    // create label
    let label = document.createElement("label");
    label.innerHTML = text;

    // create button and remove button
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", function () {
      removeButton.remove();
      label.remove();
      chk.remove();
      console.log(this); // remove button
      console.log("REMOVE BUTTON CLICKED");
    });

    // add checkbox to div
    taskItemDiv.appendChild(chk);
    taskItemDiv.appendChild(label);
    taskItemDiv.appendChild(removeButton);

    // conditions for checkbox
    chk.addEventListener("change", function () {
      if (this.checked) {
        console.log("its checked");
        completedUL.appendChild(taskItemDiv);
      } else if (!this.checked) {
        console.log("its unchecked");
        todoUL.appendChild(taskItemDiv);
      }
    });
    // add div to ul
    todoUL.appendChild(taskItemDiv);

    taskTextBox.value = "";
  }
});
