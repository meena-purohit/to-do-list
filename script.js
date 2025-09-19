const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    // creat a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // delete button 
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    // Event.preventDefault()
});
 