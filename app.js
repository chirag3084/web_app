
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Create task content container
  const taskContent = document.createElement("div");
  taskContent.className = "task-content";

  // Create checkbox for marking as done
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = function() {
    li.classList.toggle("done", checkbox.checked);
  };

  // Create span for task text
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  // Create delete button
  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.innerHTML = "×";
  delBtn.onclick = () => li.remove();

  // Assemble the task item
  taskContent.appendChild(checkbox);
  taskContent.appendChild(span);
  li.appendChild(taskContent);
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  // Clear input
  input.value = "";
  input.focus();
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

// Focus on input when page loads
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("taskInput").focus();
});
