const addTaskInput = document.getElementById("addTaskInput");
const output = document.querySelector("div.output");

function addTask() {

    if(addTaskInput.value !== ""){

    /* Creating Elements */
    const taskElement = document.createElement("div");
    taskElement.classList.add("tasks");
    output.appendChild(taskElement);


    const checkElement = document.createElement("input")
    checkElement.type = "checkbox";
    


    const spanElement = document.createElement("span");
    spanElement.textContent = addTaskInput.value;


    /*const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    const editIcon = document.createElement("img");
    editIcon.src = "images/edit.png";*/


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "images/delete.png";

    /* Appending Elements */
    taskElement.appendChild(checkElement)
    taskElement.appendChild(spanElement);
    //taskElement.appendChild(editBtn);
    //editBtn.appendChild(editIcon);
    taskElement.appendChild(deleteBtn);
    deleteBtn.appendChild(deleteIcon);



    /* Deleting task */
    deleteBtn.addEventListener("click", (event) => {
        // Use closest() to ensure you're deleting the entire .tasks element
        const taskToDelete = event.target.closest(".tasks");
        taskToDelete.remove();
    });



    /* Completed Tasks*/
    checkElement.addEventListener("click",event => {
        const checker = event.target.checked;
        if(checker){
            spanElement.classList.toggle("done")
        }
        else{
            spanElement.classList.toggle("done")
        }
    })
}

}
