const input = document.getElementById('inputTask');
const ul = document.getElementById('list');
const form = document.getElementById('todo_form');

function create(elementValue) {
    const li = document.createElement('li');
    const liValue = document.createTextNode(elementValue);

    ul.appendChild(li);
    li.appendChild(liValue);

    const btnRemove = document.createElement('button');
    const btnRemoveName = document.createTextNode('remove');
    btnRemove.classList.add('btn_remove_task');
    li.appendChild(btnRemove);
    btnRemove.appendChild(btnRemoveName);
}

function checkInput() {
    let regex = /^[\w-\s]{2,15}$/;
    if (regex.test(input.value)) {
        return true;
    } else {
        return false;
    }
}
input.addEventListener('input', function (event) {
    if (checkInput() === false) {
        input.classList.add('error');
    } else if (input.value.charAt(0) === ' ') {
        input.value = '';
    } else {
        this.classList.remove('error');
    }
})


form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (checkInput()) {
        create(input.value);
        input.value = '';
    }
})

ul.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.tagName === "LI") {
        event.target.classList.toggle('task_is_done')
    }
    if (event.target.tagName === "BUTTON") {
        event.target.closest('li').remove();
    }
})