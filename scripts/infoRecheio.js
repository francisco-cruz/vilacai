
function pegarInfoRecheio(produto) {
  let nome = sessionStorage.getItem('nome');
  let infoProduto = document.querySelector('.produtoInfo');
  infoProduto.innerText = nome; 
   
  }
  pegarInfoRecheio();

  function quantidadeRecheio (produto){
    let quantidade = sessionStorage.getItem('quantidade-de-recheio');
    let qtdTotal = document.querySelector('.qtd-total-recheio');
    qtdTotal.innerText = quantidade; 

  }
  quantidadeRecheio();
// pegando elemnto
  let quantidadeDeRecheio = document.querySelector('.contador-recheio').innerHTML;
  let quantidadeReal = parseInt(quantidadeDeRecheio);
//pegando botão
  let quantidadeBotao = document.querySelector('#qtd').innerHTML;
  let quantidadeRealBotao = parseInt(quantidadeBotao);
    // diminuir quantidade
function diminuirQuantidade() {
  if ( quantidadeReal === 1 || quantidadeBotao == 1) {
    document.querySelector('#iconAddMenos').off('click');
    
  } else {
    quantidadeRealBotao -= 1;
    document.querySelector("#qtd").innerText = quantidadeRealBotao;
    quantidadeReal -= 1;
    document.querySelector(".contador-recheio").innerText = quantidadeReal;
  }
}
    // aumentar quatidade
function aumentarQuantidade() {
  if ( quantidadeReal=== 8) {
    document.querySelector('#iconAddMais').off('click');
  } else {
    quantidadeRealBotao += 1;
    document.querySelector("#qtd").innerText = quantidadeRealBotao;
    quantidadeReal += 1;
    document.querySelector(".contador-recheio").innerText = quantidadeReal;
  }
}
