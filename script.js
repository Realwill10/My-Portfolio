function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';

}
function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0px';

}

var open = document.querySelector('.btn-open');
open.onclick = openSlideMenu;
close.onclick = closeSlideMenu;

var close = document.querySelector('.btn-close');
close.onclick = closeSlideMenu;
