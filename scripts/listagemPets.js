function carregarDados() {
    const petsNaMemoria = JSON.parse(localStorage.getItem('pets'))

    const listaPets = document.getElementById('lista-pets')

    petsNaMemoria.forEach((pet) => {
        
        const minhaDiv = document.createElement('div')
        minhaDiv.classList.add('item-pet')
        
        const minhaImg = document.createElement('img')
        minhaImg.classList.add('img-pet')
        minhaImg.setAttribute('src', pet.foto)
    
        const meuH2 = document.createElement('h2')
        meuH2.innerText = pet.nome

        const divBotoes = document.createElement('div')
        divBotoes.classList.add('container-botoes')

        const btnDeletar = document.createElement('button')
        btnDeletar.innerText = 'Deletar'
        btnDeletar.classList.add('button-del')
        btnDeletar.onclick = () => deletar(pet.id)

        const btnAdotar = document.createElement('button')
        btnAdotar.innerText = 'Adotar'
        btnAdotar.classList.add('button-submit')
        btnAdotar.onclick = () => window.location.href = "detalhes-pet.html?id=" + pet.id

        
        divBotoes.appendChild(btnAdotar)
        divBotoes.appendChild(btnDeletar)
        minhaDiv.appendChild(minhaImg)
        minhaDiv.appendChild(meuH2)
        minhaDiv.appendChild(divBotoes)
        
        listaPets.appendChild(minhaDiv)
       
    })
}

function deletar(idRecebido) {
    const petsNaMemoria = JSON.parse(localStorage.getItem('pets'))
    const petsFiltrados = petsNaMemoria.filter((item) => item.id !== idRecebido)

    localStorage.setItem('pets', JSON.stringify(petsFiltrados))
    document.getElementById('lista-pets').innerText = ''
    carregarDados()
}

document.addEventListener('DOMContentLoaded', carregarDados)



            