//ABRIR TAB

function openTab(event, idTab) {
  addDisplayNoneToAllTabs();
  removeActiveToBtnTab();
  addActiveToBtnTab(event, idTab);
}

// CLICK AUTOMATICO NO BOTAO AÇAÍ

document.getElementById('tab-default').click();

// REMOVE TODAS AS SEÇÕES DA TELA

function addDisplayNoneToAllTabs(){
  let section = document.getElementsByClassName('products-section');
  for (let i = 0; i < section.length; i++){
    section[i].style.display = 'none';
  }
}

// REMOVE A CLASS ACTIVE DOS BOTÇÕES

function removeActiveToBtnTab(){
  let tabs = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabs.length; i++){
    tabs[i].className = tabs[i].className.replace('active', '');
  }
}

// ADICIONAR CLASS ACTIVE ESPERANDO UM EVENT E O ID DA SEÇÃO

function addActiveToBtnTab(event, idTab){
  document.getElementById(idTab).style.display = 'block';
  event.currentTarget.classList.add("active");
}
