
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


    
    let qtdSoma = document.querySelector('.contador-recheio');
    qtdSoma.innerText = quantidade; 

  }
  quantidadeRecheio();


  let quantidade = document.querySelector('#contador-recheio').innerHTML;
  let quantidadeReal = parseInt(quantidade)

    // diminuir quantidade
function diminuirQuantidade() {
  if (quantidadeReal === 1) {
    document.querySelector('#iconAddMenos').off('click');
  } else {
    quantidadeReal -= 1;
    document.querySelector("#qtd").innerText = quantidadeReal;
  }
}
    // aumentar quatidade
function aumentarQuantidade() {
  if (quantidadeReal=== 10) {
    document.querySelector('#iconAddMais').off('click');
  } else {
    quantidadeReal += 1;
    document.querySelector("#qtd").innerText = quantidadeReal;
  }
}