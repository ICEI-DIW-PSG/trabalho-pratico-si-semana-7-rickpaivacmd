[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20903747&assignment_repo_type=AssignmentRepo)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Henrique Paiva Maciel Ferreira
- Matricula:: 897765
- Site de informações para fãs de F1
- Breve descrição sobre seu projeto: O F1 Insights é um site voltado para fãs da Fórmula 1, com informações atualizadas sobre corridas, equipes, pilotos e análises técnicas da temporada. O objetivo é oferecer uma visão clara e envolvente do mundo da F1, reunindo notícias, curiosidades e destaques em um só lugar.

## Print da Home-Page

![homepage](C:\Users\rickp\github-classroom\ICEI-DIW-PSG\trabalho-pratico-si-semana-7-rickpaivacmd\public\images\homepage.png)

## Print da página de detalhes do item

![detalhes](C:\Users\rickp\github-classroom\ICEI-DIW-PSG\trabalho-pratico-si-semana-7-rickpaivacmd\public\images\Detalhes.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
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
  }
]
```