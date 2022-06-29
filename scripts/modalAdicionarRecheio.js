function abrirModalAdicionar(){

    let modal = document.querySelector('.modaladicionar')
    modal.style.display = 'block';
  }
  
  function fecharModalAdicionar(){
    let modal = document.querySelector('.modaladicionar')
    modal.style.display = 'none';
  }

// eventos do botão quantidade

let qtd2 = document.querySelector('#qtd').innerHTML;
let qtdReal = parseInt(qtd2)


  function diminuirQuantidade(){    
    if(qtdReal === 1){
      document.querySelector('#iconAddMenos').off('click');
    }else {
      qtdReal -=1;
      document.querySelector("#qtd").innerText= qtdReal;
}  


  }

  function aumentarQuantidade(){
    if(qtdReal === 10){
      document.querySelector('#iconAddMais').off('click');
    }else {
      qtdReal +=1;
      document.querySelector("#qtd").innerText= qtdReal;
}
  
  }