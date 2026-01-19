
**Mini Sistema de Gestão de Usuários e Projetos**

Este é um projeto simples desenvolvido para o desafio técnico de avaliação de estágio. O sistema permite cadastrar pessoas, criar projetos atribuindo um responsável e visualizar tudo em uma página central.
---------------------------------------------------------------------------------------------

**Como rodar o projeto**
Baixe os arquivos ou clone este repositório.
Abra o projeto: Por utilizar módulos JavaScript (type="module"), o navegador exige que o projeto rode em um servidor local para funcionar corretamente.
Recomendado: Se usar o VS Code, instale a extensão Live Server. Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".
Alternativamente, você pode usar o comando python -m http.server na pasta do projeto.
Acesse http://127.0.0.1:5500 no seu navegador.

---------------------------------------------------------------------------------------------

**Estrutura de Pastas**
index.html: Página principal com o resumo e a lista de projetos.
usuarios.html: Tela de cadastro de novos usuários.
projetos.html: Tela de cadastro de novos projetos.
css/style.css: Arquivo com a estilização visual básica.
js/storage.js: Script responsável por salvar e buscar os dados no navegador.
js/usuarios.js: Lógica para salvar usuários e validar o formulário.
js/projetos.js: Lógica para criar projetos com validação de datas.
js/index.js: Lógica para mostrar os dados salvos na página inicial.

---------------------------------------------------------------------------------------------

**Decisões Técnicas**
Persistência (Armazenamento): Escolhi utilizar o LocalStorage do navegador e salvar os dados no formato JSON. Tomei essa decisão por ser uma forma simples e eficiente de manter os dados salvos mesmo após atualizar a página, sem a necessidade de instalar um banco de dados complexo neste momento inicial de aprendizado.

JavaScript Vanilla: Optei por usar JavaScript puro (sem frameworks como React ou Vue) para demonstrar que compreendo a lógica básica de manipulação do DOM e eventos do navegador.

---------------------------------------------------------------------------------------------

**Transparência (Uso de IA)** 
Conforme solicitado nas regras do desafio:
Utilizei o Google Gemini como ferramenta de auxílio para estruturar a organização dos arquivos e revisar as lógicas de validação de datas.
A IA foi utilizada para garantir que o código seguisse as boas práticas de separação de responsabilidades (cada arquivo cuidando de uma parte do sistema) e para ajudar na escrita deste README.
Também utilizei IA para o rascunho inicial da lógica, mas revisei e simplifiquei todos os comentários e funções para garantir que o código seguisse uma estrutura clara e didática, condizente com meu nível de aprendizado"

---------------------------------------------------------------------------------------------

**Requisitos Atendidos** 
[x] Cadastro de usuários com checkbox obrigatório.
[x] Cadastro de projetos impedindo que a data de fim seja menor que a de início.
[x] Bloqueio de cadastro de projeto se não houver usuários cadastrados.
[x] Listagem na Home com Nome do Projeto, Período e Responsável.