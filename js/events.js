// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById('btn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    console.log('click');
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// window.onload = loadEvents;

// function loadEvents() {
//     fetch('https://www.thebluealliance.com/apidocs/v3/status').then(res => console.log(res));
//     fetch('https://www.thebluealliance.com/apidocs/v3/status', {
//         headers:{
//             'X-TBA-Auth-Key':'YHiq0QSn5AGgnjmEIka4VFLzQ8JpDWj8VKEHJ8F3BICF1zwMZoeaIYbsfHIaApjK',
//             Accept:'application/json',
//                    'Content-Type': 'application/json',
//                    'Access-Control-Allow-Origin': '*'
//         },
//         mode:'no-cors'
//     }).then(function(response) {
//         console.log(response);
//     }).catch(function(error) {
//         console.log(erro);
//     })

//     $.ajax({
//         dataType:'json',
//         url:'https://www.thebluealliance.com/apidocs/v3',
//         headers:{
//             'X-TBA-Auth-Key':'YHiq0QSn5AGgnjmEIka4VFLzQ8JpDWj8VKEHJ8F3BICF1zwMZoeaIYbsfHIaApjK'
//         },
//         dataType:'jsonp'
//     }).done(function(data) {
//         console.log(data);
//     }).fail(function(error) {
//     });
// }