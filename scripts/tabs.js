document.getElementById('tab-padrao').click();

function abrirTab(event, idTab) {
  let conteudos = document.getElementsByClassName('conteudo');

  for (let i = 0; i < conteudos.length; i++){
    conteudos[i].style.display = 'none';
  }

  let tabs = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabs.length; i++){
    tabs[i].className = tabs[i].className.replace('ativo', '');
  }
  
  document.getElementById(idTab).style.display = 'block';
  event.currentTarget.className += ' ativo';
}