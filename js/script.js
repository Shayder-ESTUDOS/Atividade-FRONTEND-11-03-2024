//script para mesas.html

function atenderMesa(numeroMesa) {
    var statusElement = document.getElementById('statusMesa' + numeroMesa);
    statusElement.textContent = 'Mesa Atendida';
    alert('Mesa ' + numeroMesa + ' foi atendida!');
}

function liberarMesa(numeroMesa) {
    var statusElement = document.getElementById('statusMesa' + numeroMesa);
    statusElement.textContent = 'Mesa Liberada';
    alert('Mesa ' + numeroMesa + ' foi liberada!');
}   

//script para comandas.html
function editarComanda(numeroMesa) {
    var editForm = document.getElementById('editForm' + numeroMesa);
    editForm.style.display = 'block';
}

function salvarComanda(numeroMesa) {
    var novoItemElement = document.getElementById('novoItem' + numeroMesa);
    var novoItem = parseFloat(novoItemElement.value);
    var comandaElement = document.getElementById('comanda' + numeroMesa);
    var totalElement = document.getElementById('total' + numeroMesa);

    comandaElement.innerHTML += '<ul>' + '<li>' + novoItemElement.options[novoItemElement.selectedIndex].text + '</li>' + '</ul>';

    var total = parseFloat(totalElement.textContent);
    total += novoItem;
    totalElement.textContent = total.toFixed(2);

    novoItemElement.value = '';

    var editForm = document.getElementById('editForm' + numeroMesa);
    editForm.style.display = 'none';
}