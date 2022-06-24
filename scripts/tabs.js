// foco no tabcontent
function focotab(){
  let foco = document.querySelector('#Acai')
  foco.style.display = 'block'

  let primeiraTab = document.querySelector('.tab .tablinks')
  primeiraTab.classList.add('active')
}

// script tabs
function openSession(evt, sessionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sessionName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Inicio
focotab()
