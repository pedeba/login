const usuarioInput = window.document.getElementById("usuario")
const senhaInput = window.document.getElementById("senha")
const usuario = ['joao', 'caio', 'bruno']
const senha = ['1234', 'senha', 'senha123']
const login = window.document.getElementById("loginfeito")
const mensagem = window.document.getElementById("msgerro")


function logar() {
    if(usuarioInput.value == usuario[0] && senhaInput.value == senha[0] || usuarioInput.value == usuario[1] && senhaInput.value == senha[1] || usuarioInput.value == usuario[2] && senhaInput.value == senha[2]) {
        login.classList.remove("remove")
        mensagem.innerHTML = ''
    } else if (usuarioInput.value == '' || senhaInput.value == ''){
        login.classList.add("remove")
        mensagem.innerHTML = 'Insira todas as informações.'
    } else {
        login.classList.add("remove")
        mensagem.innerHTML = 'Usuário ou senha invalidos. Tente novamente.'
        usuarioInput.value = ''
        senhaInput.value = ''
    }
}