let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}


window.onscroll = () => {

  if (window.scrollY > 20) {
    document.querySelector('.header1').classList.add('headeractive');
    
  } else {
    document.querySelector('.header1').classList.remove('headeractive');
  }
};



window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
    document.querySelector('.header1').style.background="crimson";
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
    document.querySelector('.header1').style.background="transparent";
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();