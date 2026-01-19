import { getUsuarios, salvarUsuarios } from "./storage.js";

const form = document.getElementById("formUsuario");
const listaUl = document.getElementById("listaUsuarios");
const contador = document.getElementById("contadorUsuarios");

// Mostrar os usuários na lista abaixo do formulário
function atualizarLista() {
    listaUl.innerHTML = ""; 
    const usuarios = getUsuarios();

    usuarios.forEach(function(usuario) {
        const li = document.createElement("li");
        li.textContent = usuario.nome + " - " + usuario.telefone;
        listaUl.appendChild(li);
    });

    if (contador) {
        contador.textContent = usuarios.length;
    }
}

// O que acontece ao clicar no botão de cadastrar
form.addEventListener("submit", function(evento) {
    evento.preventDefault(); 

    const nomeValue = document.getElementById("nome").value;
    const telefoneValue = document.getElementById("telefone").value;
    const nascimentoValue = document.getElementById("nascimento").value;
    const concordaValue = document.getElementById("concorda").checked;

    // Não permitir salvar sem marcar o checkbox
    if (concordaValue === false) {
        alert("Você precisa marcar que concorda com o cadastro!");
        return; // Para a execução aqui
    }

    const listaAtual = getUsuarios();

    // Criando o objeto do usuário
    const novoUsuario = {
        nome: nomeValue,
        telefone: telefoneValue,
        nascimento: nascimentoValue
    };

    listaAtual.push(novoUsuario);
    salvarUsuarios(listaAtual);

    form.reset(); // Limpa os campos do formulário
    atualizarLista(); // Mostra o novo usuário na lista
});

// Carrega a lista assim que abrir a página
atualizarLista();