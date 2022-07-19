// abrir e fechar modal
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
  let quantidadeRecheio = produto.getAttribute('data-qtd-recheio');
  

  let modalTitulo = document.querySelector('.titulomodal');
  let modalNome = document.querySelector('#produtomodal');
  let modalPreco = document.querySelector('#precomodal');
  
  modalTitulo.innerText = secao;
  modalNome.innerText = nome;
  modalPreco.innerText = "R$ " + preco;

  sessionStorage.setItem('nome', nome)
  sessionStorage.setItem('quantidade-de-recheio', quantidadeRecheio)

  // colocando link da página de recheio no botão do modal
  if (secao === 'Açai'){
    let link = document.querySelector('#btnAdicionarRecheios');
    link.href="http://127.0.0.1:5500/recheiosAcai.html";
  }
  if (secao === 'Sorvetes'){
    let link = document.querySelector('#btnAdicionarRecheios');
    link.href="http://127.0.0.1:5500/recheiosSorvete.html";
  }

    //abre o modal
  abrirModalAdicionar();
} 

// eventos do botão quantidade
let quantidade = document.querySelector('#qtd').innerHTML;
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
  console.log(quantidadeReal);
  if (quantidadeReal=== 10) {
    document.querySelector('#iconAddMais').off('click');
  } else {
    quantidadeReal += 1;
    document.querySelector("#qtd").innerText = quantidadeReal;
  }
}