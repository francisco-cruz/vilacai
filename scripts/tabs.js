function openTab(event, idTab) {
  addDisplayNoneToAllTabs();
  removeActiveToBtnTab();
  addActiveToBtnTab(event, idTab);
}

// click automatico no botão açai
document.getElementById('tab-default').click();

// removendo todas as seções da tela
function addDisplayNoneToAllTabs(){
  let section = document.getElementsByClassName('products-section');
  for (let i = 0; i < section.length; i++){
    section[i].style.display = 'none';
  }
}

// função para remover a classe active de todos os boões da tab
function removeActiveToBtnTab(){
  let tabs = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabs.length; i++){
    tabs[i].className = tabs[i].className.replace('active', '');
  }
}

// fução para adicionar a class active nos btões apartir de um evento que recebe o id da seção
function addActiveToBtnTab(event, idTab){
  document.getElementById(idTab).style.display = 'block';
  event.currentTarget.classList.add("active");
}