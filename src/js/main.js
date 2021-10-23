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
    let min = 0;
    let max = (colors.length) - 1;
    let selectedColor = Math.floor(Math.random() * (max - min + 1)) + min;
    let defaultColorPreview = colors[selectedColor];
    let defaultColor = 'var(--' + defaultColorPreview + ')';

    let color_tag = document.querySelector('#color-tag');
    let add_task_button = document.querySelector('#add-task-button');

    color_tag.style.background = defaultColor;
    add_task_button.style.background = defaultColor;
}

function adicionarTarefa() {
    const inputNovo = document.createElement('input');
    const labelNovo = document.createElement('label');
    const elementoAtual = document.getElementById("e");
    const box = document.querySelector('#card-form');
    let conteudo = document.createTextNode("Batatinha frita 123");

    inputNovo.type = 'checkbox';
    labelNovo.appendChild(conteudo);

    box.insertBefore(labelNovo, elementoAtual);
    box.insertBefore(inputNovo, labelNovo);
}


function closeTaskManager() {
    const task_manager = document.querySelector('#input-task-out')
    task_manager.style.display = 'none';
}

function openTaskManager() {
    const task_manager = document.querySelector('#input-task-out');
    task_manager.style.display = 'flex';
}