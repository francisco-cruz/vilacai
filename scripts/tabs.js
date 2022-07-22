function openTab(event, idTab) {
  addDisplayNoneToAllTabs();
  removeActiveToBtnTab();
  addActiveToBtnTab(event, idTab);
}

document.getElementById('tab-default').click();

function addDisplayNoneToAllTabs(){
  let section = document.getElementsByClassName('products-section');
  for (let i = 0; i < section.length; i++){
    section[i].style.display = 'none';
  }
}

function removeActiveToBtnTab(){
  let tabs = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabs.length; i++){
    tabs[i].className = tabs[i].className.replace('active', '');
  }
}

function addActiveToBtnTab(event, idTab){
  document.getElementById(idTab).style.display = 'block';
  event.currentTarget.classList.add("active");
}