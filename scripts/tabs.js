function openTab(event, idTab) {
  let section = document.getElementsByClassName('products-section');

  for (let i = 0; i < section.length; i++){
    section[i].style.display = 'none';
  }

  let tabs = document.getElementsByClassName('tab-button');
  for (let i = 0; i < tabs.length; i++){
    tabs[i].className = tabs[i].className.replace('active', '');
  }
  
  document.getElementById(idTab).style.display = 'block';
  event.currentTarget.className += ' active';
}

document.getElementById('tab-default').click();