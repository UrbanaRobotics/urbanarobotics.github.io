const MIN_HEADER_WIDTH = 1280;

window.onscroll = scrollFunction;
// body.onresize = adjustHeader;

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById('team-logo').style.maxHeight = '4vw';
    document.getElementById('team-logo').style.margin = '1vw 0vw 1vw 1vw';
    document.getElementById('team-name').style.fontSize = '2vw';
    document.getElementById('team-name').style.marginTop = '0px';
    document.getElementById('team-number').style.fontSize = '0vw';
    for (var i = 0; i < document.getElementsByClassName('social-logo').length; i++) {
      console.log( document.getElementsByClassName('social-logo')[i]);
      document.getElementsByClassName('social-logo')[i].style.width = '0vw';
    }
    // document.getElementById('social').style.flexDirection = 'row';
    // document.getElementById('social').style.alignItems = 'center';
    
  }
  else {
    document.getElementById('team-logo').style.maxHeight = '8vw';
    document.getElementById('team-logo').style.margin = '2vw 0vw 2vw 0vw';
    document.getElementById('team-name').style.fontSize = '3vw';
    document.getElementById('team-name').style.marginTop = '20px';
    document.getElementById('team-number').style.fontSize = '2vw';
    for (var i = 0; i < document.getElementsByClassName('social-logo').length; i++) {
      console.log( document.getElementsByClassName('social-logo')[i]);
      document.getElementsByClassName('social-logo')[i].style.width = '1.5vw';
    }
    // document.getElementById('social').style.display = 'flex';
    // document.getElementById('social').style.flexDirection = 'column';
    // document.getElementById('social').style.margin = '2.5vw 0vw 2.5vw 0vw';
  }
}

// function adjustHeader() {
//   if (body.clientWidth <= MIN_HEADER_WIDTH) {

//   }
//   if (body.clientWidth > MIN_HEADER_WIDTH) {
    
//   }
// }