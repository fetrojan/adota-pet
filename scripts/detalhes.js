function carregarDetalhesPet() {
    const petsNaMemoria = JSON.parse(localStorage.getItem("pets"))

    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)

    const petId = (params.get('id'))

    const petEncontrado = petsNaMemoria.find((item) => item.id == petId)

    document.getElementById('nome').innerText = petEncontrado.nome
    document.getElementById('idade').innerText = petEncontrado.idade
    document.getElementById('foto').setAttribute('src', petEncontrado.foto)
    document.getElementById('tipo').innerText = petEncontrado.tipo
    
    const cor = document.getElementById('cor')
    cor.classList.add('espaco-cor')
    cor.style.backgroundColor = petEncontrado.cor
    
    document.getElementById('descricao').innerText = petEncontrado.descricao

}

document.addEventListener('DOMContentLoaded', carregarDetalhesPet)