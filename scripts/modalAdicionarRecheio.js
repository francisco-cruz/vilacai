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
      document.querySelector('#iconAddMenos').remove(onclick);
    }else {
      qtdReal -=1;
      document.querySelector("#qtd").innerText= qtdReal;
}  


  }

  function aumentarQuantidade(){
    if(qtdReal === 10){
      document.querySelector('#iconAddMais').remove(onclick);
    }else {
      qtdReal +=1;
      document.querySelector("#qtd").innerText= qtdReal;
}
  
  }