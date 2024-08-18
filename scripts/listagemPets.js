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
        const meuButton = document.createElement('button')
        meuButton.innerText = 'Adotar'
        meuButton.classList.add('button-submit')
        meuButton.onclick = () => adotar(pet.id)
        minhaDiv.appendChild(minhaImg)
        minhaDiv.appendChild(meuH2)
        minhaDiv.appendChild(meuButton)
    
        // const card = document.createElement('div')
        // card.classList.add('item-pet')
        // card.innerHTML = `
        //         <img class="img-pet" src="https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg">
        //         <h2>Nome do pet</h2>
        //         <button>Adotar</button>
        //         `
        
        listaPets.appendChild(minhaDiv)
        // listaPets.appendChild(card)
    })
}

function adotar(idRecebido) {
    const petsNaMemoria = JSON.parse(localStorage.getItem('pets'))
    const petsFiltrados = petsNaMemoria.filter((item) => item.id !== idRecebido)

    localStorage.setItem('pets', JSON.stringify(petsFiltrados))
    document.getElementById('lista-pets').innerText = ''
    carregarDados()
}

document.addEventListener('DOMContentLoaded', carregarDados)



            