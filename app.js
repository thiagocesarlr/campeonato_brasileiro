// Supondo que os dados dos clubes com logos estejam em 'dados.js'
function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Se campoPesquisa for uma string sem nada
  if (campoPesquisa === "") {
    section.innerHTML = `<p>Nada foi encontrado. Você precisa digitar o nome de um time ou algo relacionado</p>`;
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";

  // Itera sobre cada dado e constrói o HTML para cada resultado
  for (let dado of dados) {
    // Converte os dados para minúsculas para a comparação
    let nome = dado.nome.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLowerCase();

    // Se algum dos campos inclui o campoPesquisa
    if (
      nome.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
        <div class="item-resultado">
          <img src="${dado.logo}" alt="${dado.nome}" class="logo-clube" />
          <h2>${dado.nome}</h2>
          <h3>Série: ${dado.serie}</h3>
          <p><strong>Descrição:</strong> ${dado.descricao}</p>
          <p><strong>Fundação:</strong> ${dado.fundacao}</p>
          <p><strong>Estádio:</strong> ${dado.estadio}</p>
          <a href="${dado.site_oficial}" target="_blank">Site oficial</a>
        </div>
        <hr />
      `;
    }
  }

  if (!resultados) {
    resultados = `<p>Nada foi encontrado</p>`;
  }

  // Atribui a string com os resultados ao conteúdo da seção
  section.innerHTML = resultados;
}
