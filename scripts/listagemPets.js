function carregarDados() {
    const petsNaMemoria = JSON.parse(localStorage.getItem('pets'))
    console.log(petsNaMemoria)

    const listaPets = document.getElementById('lista-pets')

    const minhaDiv = document.createElement('div')
    minhaDiv.classList.add('item-pet')
    
    const minhaImg = document.createElement('img')
    minhaImg.classList.add('img-pet')
    minhaImg.setAttribute('src', 'https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg')

    const meuH2 = document.createElement('h2')
    meuH2.innerText = 'Nome do pet'
    const meuButton = document.createElement('button')
    meuButton.innerText = 'Adotar'
    minhaDiv.appendChild(minhaImg)
    minhaDiv.appendChild(meuH2)
    minhaDiv.appendChild(meuButton)

    console.log(minhaDiv)

    // const card = document.createElement('div')
    // card.classList.add('item-pet')
    // card.innerHTML = `
    //         <img class="img-pet" src="https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg">
    //         <h2>Nome do pet</h2>
    //         <button>Adotar</button>
    //         `
    
    listaPets.appendChild(minhaDiv)
    // listaPets.appendChild(card)
}

document.addEventListener('DOMContentLoaded', carregarDados)



            