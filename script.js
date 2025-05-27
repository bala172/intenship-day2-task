function add() {
  let task = document.getElementById("task");
  if (task.value.trim() === "") return;

  let li = document.createElement("li");
  li.innerHTML = task.value +
    ' <button onclick="done(this)">Done</button>' +
    ' <button onclick="remove(this)">Remove</button>';

  document.getElementById("list").appendChild(li);
  task.value = "";
}

function done(btn) {
  btn.parentElement.classList.toggle("done");
}

function remove(btn) {
  btn.parentElement.remove();
}