// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var _btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const noBtn = document.querySelector('.nobtn')
const yesBtn = document.querySelector('.yesbtn')

// When the user clicks on the button, open the modal
_btn.onclick = function() {
  modal.style.display = "block";
}
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// when the user clciks on the no btn
noBtn.onclick = (e) =>{
  e.preventDefault()
  modal.style.display = "none";
}

// when the user clicks on the yes button
yesBtn.onclick = (e) => {
  location.href = './index2.html';

}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
