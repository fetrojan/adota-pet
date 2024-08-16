const nome = document.getElementById("nome")
const idade = document.getElementById('idade')
const url = document.getElementById('foto')
const descricao = document.getElementById('descricao')
const cor = document.getElementById('cor')
const tipo = document.getElementById('tipopet')
const errorFoto = document.getElementById('error-foto')
const errorNome = document.getElementById('error-nome')
const errorDescricao = document.getElementById('error-descricao')
const errorTipo = document.getElementById('error-tipo')


function cadastrarPet(event) {
    event.preventDefault()

    if(url.value.trim() === "") {
        errorFoto.innerText = "Este campo é obrigatório"
        errorFoto.style.display = 'block'
        url.classList.add('error-border')
     } else {
        errorFoto.style.display = 'none'
        url.classList.remove('error-border')
     }

    if(nome.value.trim() === "") {
        errorNome.innerText = "Este campo é obrigatório"
        errorNome.style.display = 'block'
        nome.classList.add('error-border')
     } else {
        errorNome.style.display = 'none'
        nome.classList.remove('error-border')
     }

    if(descricao.value.trim() === "") {
        errorDescricao.innerText = "Este campo é obrigatório"
        errorDescricao.style.display = 'block'
        descricao.classList.add('error-border')
    } else {
        errorDescricao.style.display = 'none'
        descricao.classList.remove('error-border')
    }

    if(tipo.value.trim() === "") {
        errorTipo.innerText = "Este campo é obrigatório"
        errorTipo.style.display = 'block'
        tipo.classList.add('error-border')
    } else {
        errorTipo.style.display = 'none'
        tipo.classList.remove('error-border')
    }

    if(nome.value && foto.value && descricao.value && tipo.value) {

    const pet = {
        id: Date.now(), //id: crypto.randomUUID()
        nome: nome.value,
        idade: idade.value,
        descricao: descricao.value,
        foto: url.value,
        cor: cor.value,
        tipo: tipo.value
    }

    let listaNoLocalStorage = JSON.parse(localStorage.getItem("pets"))
    if(listaNoLocalStorage === null) listaNoLocalStorage = []

    listaNoLocalStorage.push(pet)

    localStorage.setItem("pets", JSON.stringify(listaNoLocalStorage))

    console.log(pet)
    document.getElementById("petCadastro").reset()
}
}

document.getElementById("nome").addEventListener('input', function() {

    if (nome.value.trim() !== '') {
        // Remove a mensagem de erro e a borda vermelha quando o usuário começa a digitar
        errorNome.style.display = 'none'
        nome.classList.remove('error-border')
    }
})

document.getElementById("petCadastro").addEventListener("submit", cadastrarPet)

/* Opção de função para não repetir codigo 

function validarCampo(input, errorElement) {
    if(input.value.trim() === "") {
        errorElement.innerText = "Este campo é obrigatório"
        errorElement.style.display = 'block'
        input.classList.add('error-border')
        return false
    } else {
        errorElement.style.display = 'none'
        input.classList.remove('error-border')
        return true
    }
}

function cadastrarPet(event) {
    event.preventDefault()

    const isFotoValid = validarCampo(url, errorFoto)
    const isNomeValid = validarCampo(nome, errorNome)
    const isDescricaoValid = validarCampo(descricao, errorDescricao)
    const isTipoValid = validarCampo(tipo, errorTipo)

    if (isFotoValid && isNomeValid && isDescricaoValid && isTipoValid) {
        const pet = {
            nome: nome.value,
            idade: idade,
            descricao: descricao.value,
            foto: url,
            cor: cor,
            tipo: tipo.value
        }

        localStorage.setItem("pet", JSON.stringify(pet))
        console.log(pet)
    }
} */
