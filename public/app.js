const dados = [
  {
    id: 1,
    titulo: "Leclerc otimista em Cingapura",
    descricao: "Mesmo com TL2 confuso, Ferrari projeta bom ritmo no fim de semana.",
    conteudo: "Apesar de um difícil Treino Livre 2 em Cingapura, Charles Leclerc e a equipe demonstraram confiança no acerto para classificação e corrida. A expectativa é explorar janelas de pneus e ritmo em stints mais longos.",
    categoria: "Corridas",
    autor: "Equipe F1 Insights",
    data: "2025-03-30",
    imagem: "images/Card1 Leclerc.avif",
    fonte: "https://www.formula1.com/en/latest.html"
  },
  {
    id: 2,
    titulo: "Hamilton fala sobre apoio pelo Roscoe",
    descricao: "Piloto agradece mensagens após a perda do seu cachorro.",
    conteudo: "Lewis Hamilton comentou o apoio ‘esmagador’ de fãs e amigos após a perda do Roscoe. Segundo ele, o carinho recebido reforçou ainda mais a conexão com o público e com a comunidade da F1.",
    categoria: "Paddock",
    autor: "Equipe F1 Insights",
    data: "2025-03-28",
    imagem: "images/Roscoe.avif",
    fonte: "https://www.formula1.com/en/latest.html"
  },
  {
    id: 3,
    titulo: "Wheatley elogia Bortoleto",
    descricao: "Diretor esportivo define brasileiro como 'o verdadeiro negócio'.",
    conteudo: "Gabriel Bortoleto continua chamando atenção pelo ritmo consistente e maturidade em disputas corpo a corpo. A Sauber projeta evolução contínua enquanto se prepara para a transição à Audi.",
    categoria: "Pilotos",
    autor: "Equipe F1 Insights",
    data: "2025-03-27",
    imagem: "images/Bortoleto.avif",
    fonte: "https://www.msn.com/pt-br/carros/noticias/f1-verstappen-admite-culpa-em-confronto-com-russell-na-espanha/ar-AA1Nf12u?ocid=BingNewsVerp"
  }
];

function renderHome(){
  const wrap = document.getElementById("cards");
  if(!wrap) return;
  wrap.innerHTML = dados.map(item => `
    <article class="card item">
      <img class="thumb" src="${item.imagem}" alt="${item.titulo}">
      <div class="pad">
        <h4>${item.titulo}</h4>
        <p>${item.descricao}</p>
        <a class="link" href="${item.link}" target="_blank" rel="noopener">Ler mais</a>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderHome);