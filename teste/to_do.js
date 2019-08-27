var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var to_dos = [
    'Estudar Javascript',
    'Evoluir profissionalmente',
    'Colocar comida pro Gordinho'
];

function renderTo_do() {
    listElement.innerHTML = '';
    for (to_do of to_dos) {
        var to_doElement = document.createElement('li');
        var to_doText = document.createTextNode(to_do);

        to_doElement.appendChild(to_doText);
        listElement.appendChild(to_doElement);

    }
}

renderTo_do();

function addTo_do() {
    var todoText = inputElement.value;

    to_dos.push(todoText);
    inputElement.value = '';
    renderTo_do();
}

buttonElement.onclick = addTo_do;