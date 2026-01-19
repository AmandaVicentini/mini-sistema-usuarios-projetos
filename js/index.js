import { getUsuarios, getProjetos } from "./storage.js";

const listaDiv = document.getElementById("listaPrincipalProjetos");
const totalU = document.getElementById("totalUsuarios");
const totalP = document.getElementById("totalProjetos");

function mostrarTudo() {
    const usuarios = getUsuarios();
    const projetos = getProjetos();

    // Mostra os totais 
    totalU.textContent = usuarios.length;
    totalP.textContent = projetos.length;

    listaDiv.innerHTML = "<h2>Lista de Projetos</h2>";

    // Mostra cada projeto em um "card" simples
    projetos.forEach(function(p) {
        const card = document.createElement("div");
        card.style.border = "1px solid #000";
        card.style.padding = "10px";
        card.style.marginBottom = "10px";

        card.innerHTML = `
            <strong>Projeto:</strong> ${p.nome} <br>
            <strong>Datas:</strong> ${p.inicio} até ${p.fim} <br>
            <strong>Responsável:</strong> ${p.nomeResponsavel} (${p.telResponsavel})
        `;
        listaDiv.appendChild(card);
    });
}

mostrarTudo();