function pegarInfoRecheio(produto) {
    let infoProduto = document.querySelector('.produtoInfo');
    let nome = produto.getAttribute('data-nome');
    console.log(nome);
    infoProduto.innerText = nome; 
    console.log(nome);
  }
 
  pegarInfoRecheio(produto);