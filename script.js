const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const form = document.getElementById("mainform")
const input = document.getElementById("input")
const msg = document.getElementById("message")
let item_counter = 0

function change(){
  let allcheckboxes = document.querySelectorAll("input[type=checkbox]")
  if (allcheckboxes.length > 0) {
    let unchecked_counter = 0
      for (i=0; i < allcheckboxes.length; i++) {
        if(allcheckboxes[i].checked === false) {
          unchecked_counter++
      }
    uncheckedCountSpan.innerHTML = unchecked_counter
    }
  } else {
    uncheckedCountSpan.innerHTML = 0
  }
  msg.innerHTML = ""
}

function del(e){
  let item = e.target.parentElement
  list.removeChild(item)
  item_counter--
  itemCountSpan.innerHTML = item_counter
  change()
  msg.innerHTML = ""
}

form.addEventListener("submit",function(e){
  let item = document.createElement("LI")
  let checkbox = document.createElement("input")
  let delbut = document.createElement("button")
  let textnode = document.createTextNode(input.value)
  if (textnode.length > 0){
    item.className = classNames.TODO_ITEM
    checkbox.type = "checkbox"
    checkbox.className = classNames.TODO_CHECKBOX
    checkbox.onchange = change
    textnode.className = classNames.TODO_TEXT
    delbut.className = classNames.TODO_DELETE
    delbut.innerHTML = "Delete"
    delbut.onclick = del
    
    list.appendChild(item)
    item.appendChild(checkbox)
    item.appendChild(textnode)
    item.appendChild(delbut)

    msg.innerHTML = ""
    input.value = ""
    item_counter++
    itemCountSpan.innerHTML = item_counter
    change()
    e.preventDefault()
  } else {
    msg.innerHTML = "Please specify a task!"
    e.preventDefault()
}
})