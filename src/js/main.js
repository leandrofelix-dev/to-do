window.onload = setRandomColor();

function setRandomColor() {
    const colors = [
        'yellow',
        'green',
        'blue',
        'red',
        'purple',
        'pink'
    ];
    const min = 0;
    let max = (colors.length) - 1;
    let selectedColor = Math.floor(Math.random() * (max - min + 1)) + min;
    let defaultColorPreview = colors[selectedColor];
    let defaultColor = 'var(--' + defaultColorPreview + ')';

    let color_tag = document.querySelector('#color-tag');
    let add_task_button = document.querySelector('#add-task-button');
    let task_manager_button = document.querySelector('#task-manager-button');
    let add_task_input = document.querySelector('#add-task-input');

    color_tag.style.background = defaultColor;
    add_task_button.style.background = defaultColor;
    task_manager_button.style.background = defaultColor;
    add_task_input.style.borderColor = defaultColor;
}

function openSelectColor() {
    document.querySelector('#select-color').style.display = 'block';
}

function closeSelectColor() {
    document.querySelector('#select-color').style.display = 'none';
}

function openTaskManager() {
    const task_manager = document.querySelector('#input-task-out');
    task_manager.style.display = 'flex';
}

function addTask() {
    const add_task_input = document.querySelector('#add-task-input');
    let new_task = add_task_input.value;
    document.querySelector('#add-task-input').value = '';

    if (new_task == '') {
        document.querySelector('#alert-span').style.display = 'block';
    } else {

        const inputNovo = document.createElement('input');
        const labelNovo = document.createElement('label');
        const elementoAtual = document.getElementById("e");
        const box = document.querySelector('#card-form');
        let conteudo = document.createTextNode(new_task);

        inputNovo.type = 'checkbox';
        labelNovo.appendChild(conteudo);

        box.insertBefore(labelNovo, elementoAtual);
        box.insertBefore(inputNovo, labelNovo);

        let taskLenght = document.querySelectorAll('label').length;
        const taskLenghtIndicator = document.querySelector('#task-lenght');
        taskLenghtIndicator.innerText = taskLenght;
        document.querySelector('#input-task-out').style.display = 'none';
        document.querySelector('#alert-span').style.display = 'none';
        document.querySelector('#tasks').style.padding = '10px';

    }


}