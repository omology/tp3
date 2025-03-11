// night mode button : 


// scroll function : 
function backToTop(){
  document.getElementById("top").scrollIntoView({behavior: 'smooth'});

}

const buttonScrollToTop = document.getElementById('toTopbutton')

buttonScrollToTop.addEventListener('click',console.log('tst'))

function goToHomeSection(){
  document.getElementById("home").scrollIntoView({behavior: 'smooth'});

}
function goToAboutSection(){
  document.getElementById("about").scrollIntoView({behavior: 'smooth'});

}
function goToProjectSection(){
  document.getElementById("skills").scrollIntoView({behavior: 'smooth'});

}
function goToCertifSection(){
  document.getElementById("certif").scrollIntoView({behavior: 'smooth'});

}
function goToContactSection(){
  document.getElementById("contact").scrollIntoView({behavior: 'smooth'});

}