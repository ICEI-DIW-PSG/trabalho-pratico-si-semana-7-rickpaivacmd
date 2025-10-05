const dados = [
  {
    id: 1,
    titulo: "Leclerc otimista em Cingapura",
    descricao: "Mesmo com TL2 confuso, Ferrari projeta bom ritmo no fim de semana.",
    conteudo: "Apesar de um TL2 difícil em Cingapura, Leclerc e a equipe demonstraram confiança no acerto para quali e corrida. Foco em janelas de pneus e stints longos.",
    categoria: "Corridas",
    autor: "Equipe F1 Insights",
    data: "2025-03-30",
    imagem: "images/Card1 Leclerc.avif",
    fonte: "https://www.formula1.com/en/latest.html"
  },
  {
    id: 2,
    titulo: "Hamilton e o apoio pelo Roscoe",
    descricao: "Piloto agradece mensagens após a perda do seu cachorro.",
    conteudo: "Hamilton comentou o apoio ‘esmagador’ de fãs e amigos após a perda do Roscoe. Reforço da conexão com o público e a comunidade da F1.",
    categoria: "Paddock",
    autor: "Equipe F1 Insights",
    data: "2025-03-28",
    imagem: "images/Roscoe.avif",
    fonte: "https://www.formula1.com/en/latest.html"
  },
  {
    id: 3,
    titulo: "Wheatley elogia Bortoleto",
    descricao: "Diretor define brasileiro como 'o verdadeiro negócio'.",
    conteudo: "Bortoleto chama atenção pelo ritmo consistente e maturidade nas disputas. Sauber projeta evolução contínua rumo à era Audi.",
    categoria: "Pilotos",
    autor: "Equipe F1 Insights",
    data: "2025-03-27",
    imagem: "images/Bortoleto.avif",
    fonte: "https://www.msn.com/pt-br/carros/noticias/f1-verstappen-admite-culpa-em-confronto-com-russell-na-espanha/ar-AA1Nf12u"
  }
];

function byId(id){ return document.getElementById(id); }
function getParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function renderHome(){
  const wrap = byId("cards");
  if(!wrap) return;

  wrap.innerHTML = dados.map(item => `
    <article class="card item">
      <img class="thumb" src="${item.imagem}" alt="${item.titulo}">
      <div class="pad">
        <h4>${item.titulo}</h4>
        <p>${item.descricao}</p>
        <a class="link" href="./detalhes.html?id=${encodeURIComponent(item.id)}">Ver detalhes</a>
      </div>
    </article>
  `).join("");
}

function renderDetalhes(){
  const alvo = byId("detalhe");
  if(!alvo) return;

  const id = parseInt(getParam("id"), 10);
  const item = dados.find(d => d.id === id);

  if(!item){
    alvo.innerHTML = `<p>Item não encontrado. <a class="link" href="./index.html">Voltar</a></p>`;
    return;
  }

  alvo.innerHTML = `
    <img class="thumb" src="${item.imagem}" alt="${item.titulo}" style="width:100%; display:block; border-bottom:1px solid var(--line); margin-bottom:12px">
    <h2 style="margin:0 0 8px">${item.titulo}</h2>
    <p class="note" style="margin:0 0 12px">
      Categoria: ${item.categoria} · Autor: ${item.autor} · Data: ${item.data}
    </p>
    <p style="margin:0 0 12px">${item.conteudo}</p>
    <p>
      <a class="link" href="${item.fonte}" target="_blank" rel="noopener">Fonte</a> ·
      <a class="link" href="./index.html">Voltar para a Home</a>
    </p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderDetalhes();
});
