import { getProjetos, salvarProjetos, getUsuarios } from "./storage.js";

const form = document.getElementById("formProjeto");
const campoSelect = document.getElementById("usuarioProjeto");

// Função para colocar os nomes dos usuários dentro do Select (dropdown)
function preencherSelect() {
    const usuarios = getUsuarios();
    
    // Avisar se não houver usuários cadastrados
    if (usuarios.length === 0) {
        alert("Atenção: Você precisa cadastrar um usuário antes de criar um projeto.");
    }

    usuarios.forEach(function(usuario, posicao) {
        const opcao = document.createElement("option");
        opcao.value = posicao; 
        opcao.textContent = usuario.nome;
        campoSelect.appendChild(opcao);
    });
}

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nomeProj = document.getElementById("nomeProjeto").value;
    const inicio = document.getElementById("dataInicio").value;
    const fim = document.getElementById("dataFim").value;
    const posicaoNoArray = campoSelect.value;

    // Data de fim não pode ser menor que a de início
    if (new Date(fim) < new Date(inicio)) {
        alert("Erro: A data de fim não pode ser anterior à data de início.");
        return;
    }

    const usuariosCadastrados = getUsuarios();
    const responsavel = usuariosCadastrados[posicaoNoArray];

    const listaProjetos = getProjetos();

    // Criando o objeto do projeto
    const novoProjeto = {
        nome: nomeProj,
        dataInicio: inicio,
        dataFim: fim,
        nomeResponsavel: responsavel.nome,
        telefoneResponsavel: responsavel.telefone 
    };

    listaProjetos.push(novoProjeto);
    salvarProjetos(listaProjetos);

    alert("Projeto cadastrado com sucesso!");
    window.location.href = "index.html"; // Redireciona para a home
});

preencherSelect();