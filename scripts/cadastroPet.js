const nome = document.getElementById("nome")
const idade = document.getElementById('idade').value
const url = document.getElementById('foto').value
const descricao = document.getElementById('descricao').value
const cor = document.getElementById('cor').value
const tipo = document.getElementById('tipopet').value
const errorNome = document.getElementById('error-nome')


function cadastrarPet(event) {
    event.preventDefault()

    if(nome.value.trim() === "") {
        errorNome.innerText = "Este campo é obrigatório"
        errorNome.style.display = 'block'
        nome.classList.add('error-border')
     } else {
        errorNome.style.display = 'none'
        nome.classList.remove('error-border')
     }

    const pet = {
        nome: nome.value,
        idade: idade,
        descricao: descricao,
        foto: url,
        cor: cor,
        tipo: tipo
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