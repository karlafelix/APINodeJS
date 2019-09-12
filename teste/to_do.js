var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var to_dos = JSON.parse(localStorage.getItem('list_to_dos')) || [];

function renderTo_do() {
    listElement.innerHTML = '';
    for (to_do of to_dos) {
        var to_doElement = document.createElement('li');
        var to_doText = document.createTextNode(to_do);

        var linkElement = document.createElement('a');

        linkElement .setAttribute('href', '#');

        var pos = to_dos.indexOf(to_do);
        
        linkElement.setAttribute('onclick', 'deleteTo_do('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);


        to_doElement.appendChild(to_doText);
        to_doElement.appendChild(linkElement);
        listElement.appendChild(to_doElement);

    }
}

renderTo_do();

function addTo_do() {
    var todoText = inputElement.value;

    to_dos.push(todoText);
    inputElement.value = '';
    renderTo_do();
    saveToStorage();
}

buttonElement.onclick = addTo_do;

function deleteTo_do(pos){
    to_dos.splice(pos, 1);
    renderTo_do();
    saveToStorage();
}

function saveToStorage(){
    
    localStorage.setItem('list_to_dos', JSON.stringify(to_dos));
}