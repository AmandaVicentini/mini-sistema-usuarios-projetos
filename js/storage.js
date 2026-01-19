// Nomes das chaves 
const CHAVE_USUARIOS = "lista_usuarios";
const CHAVE_PROJETOS = "lista_projetos";

// Buscar os usuários salvos
export function getUsuarios() {
    const dados = localStorage.getItem(CHAVE_USUARIOS);
    if (dados) {
        return JSON.parse(dados); // Transforma o texto de volta em lista
    } else {
        return []; // Se não tiver nada, retorna uma lista vazia
    }
}

// Salvar a lista de usuários
export function salvarUsuarios(lista) {
    const texto = JSON.stringify(lista); // Transforma a lista em texto
    localStorage.setItem(CHAVE_USUARIOS, texto);
}

// Buscar os projetos salvos
export function getProjetos() {
    const dados = localStorage.getItem(CHAVE_PROJETOS);
    if (dados) {
        return JSON.parse(dados);
    } else {
        return [];
    }
}

// Salvar a lista de projetos
export function salvarProjetos(lista) {
    const texto = JSON.stringify(lista);
    localStorage.setItem(CHAVE_PROJETOS, texto);
}