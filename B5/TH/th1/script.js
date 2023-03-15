const todos = []

    let todoindex = null

    const todoList = document.querySelector("ul")

    const form = document.querySelector("form")

    function handleDelete(index) {
        todos.splice(index, 1);
        render();
    }

    function handleEdit(index) {
        const input = document.querySelector("input")
        input.value = todos[index]
        const btn = form.querySelector('button[type="submit"]');
        btn.innerText = 'Edit'
        todoindex = index
        render()
    }

    form.addEventListener("submit", function(event){
        event.preventDefault()
        const input = document.querySelector("input")
        const value = input.value
        if (!value) {
            
        }
        console.log(todoindex);
        if (todoindex === null) {
            todos.push(value)
        } else {
            todos[todoindex] = value
        }
        
        input.value = ""
        const btn = form.querySelector('button[type="submit"]');
        btn.innerText = 'Add'
        render()
    })

    function render() {
        const todoElement = todos.map(function(todo){
            return `<li>
                <span> ${todo}</span>
                <button id="edit">Edit</button>
                <button id="delete">Delete</button>
                </li>`
        })
        todoList.innerHTML = todoElement.join("")

        const deleteButtons  = document.querySelectorAll("#delete")
        const editButtons = document.querySelectorAll("#edit")

        

        deleteButtons.forEach(function(deleteButton, index) {
            deleteButton.addEventListener("click", function(){
                handleDelete(index)
            })
        })


        editButtons.forEach(function(editButton, index) {
            editButton.addEventListener("click", function(){
                handleEdit(index)
            })
        })
    }
    function initialApp() {
        render()
    }
    initialApp()