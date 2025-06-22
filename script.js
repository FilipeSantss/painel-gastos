let total = 0;

function adicionarGasto() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (descricao && !isNaN(valor)) {
        const lista = document.getElementById('lista-gastos');
        const item = document.createElement('li');
        item.textContent = `${descricao} - R$ ${valor.toFixed(2)}`;
        lista.appendChild(item);

        total += valor;
        document.getElementById('total').textContent = total.toFixed(2);

        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';
    }
}
