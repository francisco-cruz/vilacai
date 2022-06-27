function abrirModalAdicionar(){
    let modal = document.querySelector('.modaladicionar')
    modal.style.display = 'block';
  }
  
  function fecharModalAdicionar(){
    let modal = document.querySelector('.modaladicionar')
    modal.style.display = 'none';
  }

// eventos do botão quantidade
let somarNumero = document.querySelectorId('iconAddMais');
somarNumero.addEventListener("click", diminuirQuantidade);

let subtracaoNumero = document.querySelectorId('iconAddMenos');
subtracaoNumero.addEventListener("click", aumentarQuantidade);

  function diminuirQuantidade(){
    console.log('-1');
  }
  function aumentarQuantidade(){
    console.log('+1');
  
  }