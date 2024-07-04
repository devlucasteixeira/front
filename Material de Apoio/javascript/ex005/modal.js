const btnAbrir = document.getElementById('abrir')
const btnFechar = document.getElementById('fechar')
const modal = document.querySelector('dialog')

function exibir(){
    modal.showModal()
}

function fecha(){
    modal.close()
}