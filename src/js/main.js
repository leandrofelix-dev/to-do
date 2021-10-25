window.onload = convertLocalStorageValuesToElements();


function setColor(selected_color) {

    colors = [
        'yellow',
        'green',
        'blue',
        'red',
        'purple',
        'pink'
    ];

    switch (selected_color) {
        case 0:
            color = 0
            break;
        case 1:
            color = 1
            break;
        case 2:
            color = 2
            break;
        case 3:
            color = 3
            break;
        case 4:
            color = 4
            break;
        case 5:
            color = 5
            break;
        case 'r':
            const min = 0;
            let max = (colors.length) - 1;
            let random_number = Math.floor(Math.random() * (max - min + 1)) + min;
            color = random_number;
            break;
    }

    let default_color_preview = colors[color];

    let default_color = 'var(--' + default_color_preview + ')';

    color_tag = document.querySelector('#color-tag');
    add_task_button = document.querySelector('#add-task-button');
    task_manager_button = document.querySelector('#task-manager-button');
    add_task_input = document.querySelector('#add-task-input');

    localStorage.setItem('color', default_color);

    color_tag.style.background = default_color;
    add_task_button.style.background = default_color;
    task_manager_button.style.background = default_color;
    add_task_input.style.borderColor = default_color;

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


        const div_nova = document.createElement('div');
        const input_novo = document.createElement('input');
        const label_novo = document.createElement('label');

        div_nova.appendChild(input_novo);
        div_nova.appendChild(label_novo);

        const elementoAtual = document.querySelector('#e');
        const box = document.querySelector('#card-form');
        let conteudo = document.createTextNode(new_task);

        input_novo.type = 'checkbox';
        div_nova.className = "task-div";
        label_novo.appendChild(conteudo);

        box.insertBefore(div_nova, elementoAtual);

        taskLenght = document.querySelectorAll('label').length;
        const taskLenghtIndicator = document.querySelector('#task-lenght');
        taskLenghtIndicator.innerText = taskLenght;
        document.querySelector('#input-task-out').style.display = 'none';
        document.querySelector('#alert-span').style.display = 'none';
        document.querySelector('#tasks').style.padding = '10px';

        saveInLocalStorage(new_task);
    }
}

function saveInLocalStorage(new_task) {
    localStorage.setItem(taskLenght, new_task);
}

function setColorMode(mode) {
    const body = document.querySelector('body');
    let dark = document.querySelector("#dark");
    let light = document.querySelector("#light");

    switch (mode) {
        case 'dark':
            body.style.background = 'var(--background-dark)';
            light.style.backgroundImage = 'url(src/icons/mode/light.svg)';
            light.style.display = 'block';
            dark.style.display = 'none';

            break;
        case 'light':
            body.style.background = 'var(--background)';
            dark.style.backgroundImage = 'url(src/icons/mode/dark.svg)';
            light.style.display = 'none';
            dark.style.display = 'block';
            break;

        default:
            break;
    }
    window.localStorage.setItem('mode', mode);

}

function convertLocalStorageValuesToElements() {
    for (let i = 1; i <= localStorage.length; i++) {
        let new_task = localStorage.getItem(i);
        if (new_task == null) {
            new_task = new_task + 1;
        } else {
            const div_nova = document.createElement('div');
            const input_novo = document.createElement('input');
            const label_novo = document.createElement('label');

            div_nova.appendChild(input_novo);
            div_nova.appendChild(label_novo);

            const elementoAtual = document.querySelector('#e');
            const box = document.querySelector('#card-form');
            let conteudo = document.createTextNode(new_task);

            input_novo.type = 'checkbox';
            div_nova.className = "task-div";
            label_novo.appendChild(conteudo);

            box.insertBefore(div_nova, elementoAtual);

            document.querySelector('#input-task-out').style.display = 'none';
            document.querySelector('#alert-span').style.display = 'none';


        }

    }
    colorOfLocalStorage = localStorage.getItem('color');

    document.querySelector('#color-tag').style.background = colorOfLocalStorage;
    document.querySelector('#add-task-button').style.background = colorOfLocalStorage;
    document.querySelector('#task-manager-button').style.background = colorOfLocalStorage;
    document.querySelector('#add-task-input').style.borderColor = colorOfLocalStorage;
    let mode = localStorage.getItem('mode');
    switch (mode) {
        case 'dark':
            document.querySelector('body').style.background = 'var(--background-dark)';
            document.querySelector("#light").style.backgroundImage = 'url(src/icons/mode/light.svg)';
            document.querySelector("#light").style.display = 'block';
            document.querySelector("#dark").style.display = 'none';
            break;
        case 'light':
            document.querySelector('body').style.background = 'var(--background)';
            document.querySelector("#dark").style.backgroundImage = 'url(src/icons/mode/dark.svg)';
            document.querySelector("#light").style.display = 'none';
            document.querySelector("#dark").style.display = 'block';
            break;

        default:
            break;
    }
}