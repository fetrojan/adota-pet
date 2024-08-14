const nome = document.getElementById("nome")
const idade = document.getElementById('idade').value
const url = document.getElementById('foto')
const descricao = document.getElementById('descricao')
const cor = document.getElementById('cor').value
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

document.getElementById("nome").addEventListener('input', function() {

    if (nome.value.trim() !== '') {
        // Remove a mensagem de erro e a borda vermelha quando o usuário começa a digitar
        errorNome.style.display = 'none'
        nome.classList.remove('error-border')
    }
})

document.getElementById("petCadastro").addEventListener("submit", cadastrarPet)