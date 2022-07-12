
function abrirModalAdicionar() {

  let modal = document.querySelector('.modaladicionar')
  modal.style.display = 'block';

}

function fecharModalAdicionar() {
  let modal = document.querySelector('.modaladicionar')
  modal.style.display = 'none';
}


// pegando as informações e colocando no modal
function pegarInfoModal(produto) {
  let secao = produto.getAttribute('data-secao');
  let nome = produto.getAttribute('data-nome');
  let preco = produto.getAttribute('data-preco');

  let modalTitulo = document.querySelector('.titulomodal');
  let modalNome = document.querySelector('#produtomodal');
  let modalPreco = document.querySelector('#precomodal');
 
  modalTitulo.innerText = secao;
  modalNome.innerText = nome;
  modalPreco.innerText = "R$ " + preco;

  abrirModalAdicionar();
}



// eventos do botão quantidade

let quantidade = document.querySelector('#qtd').innerHTML;
let quantidadeReal = parseInt(quantidade)


function diminuirQuantidade() {
  if (quantidadeReal === 1) {
    document.querySelector('#iconAddMenos').off('click');
  } else {
    quantidadeReal -= 1;
    document.querySelector("#qtd").innerText = quantidadeReal;
  }


}

function aumentarQuantidade() {
  if (quantidadeReal=== 10) {
    document.querySelector('#iconAddMais').off('click');
  } else {
    quantidadeReal += 1;
    document.querySelector("#qtd").innerText = quantidadeReal;
  }

}