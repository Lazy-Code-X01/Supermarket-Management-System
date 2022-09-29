ADD BTN FEATURES{
    ADD ELEEMNT DYNAMICALLY YO THE RECORD LIST => ONCLICK
    VALIDATION TO CHECK IF ALL  INPUTS ARE FIELD
    ADD ID DYNAMICALLY
    DISPLAY ERROR OR SUCCEESS
}


EDIT BTN FEATURES{
    RETURN THE VALUE OF ELEEMNT TO INPUT FIELD && WHEN ADD IS CLICKED EDIT THE ELEEMNT
    DISPLAY SUCCESS OR ERROR
}


CLEAR BTN FEATURES{
    CLEAR INPUT VALUES
}


DELETE BTN FEATURES{
    DELETE SELECTED ELEMENT
    DISPLAY SUCCESS OR ERROR 
}


ELEMENT FEATURES{
    ONCLICK ADD THE CLASS OF HIGHLIGHTED FOR SOME BUTTON FEATURES TO WORK
}


SEARCH INPUT FEATURES{
    FILTER SEARCH ONKEYUP
    FETCH ALL RECORDS FROM THE RECORDS TABLE TO BE FILTERED
    
    SEARCH OPTON WILL ONLY SHOW UNDER THE CONDITION THAT THE TABLE HAS MORE THAN OR EQUAL TO 6 (six)
    GOALS OF THE SAERCH BUTTON [
      FOR EASE TO TRACK OLD RECORDS IN THE TABLE => WHEN CLICKED ONLY GIVE THE ROW THE CLASS OF HIGHLIGHTED AND DISPLAY NONE

    ]
}

CATEGORIES {
    when the user clicks on the select CATEGORIES display a list of CATEGORIES which is going to be fetched from the sellers panel

    when the user selects the categores that is preffered 1. dispay:none && add the selected categores in place of the categories  


    for the categories search i did an inline styling to the width because for some reasons or the other it's not working with the normal 
}





function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}











// @import './color';

// /*modal box styling*/
  
// /*modal styling*/
// /* The Modal (background) */
// .modal {
//     display: none;
//     position: fixed; 
//     z-index: 2; 
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     overflow: auto; 
//     background-color: rgba(0,0,0,0.2);
// }
  
//   /* Modal Content/Box */
  
// .modal-content {
//     margin: 15% auto;
//     padding: 20px;
//     border: 2px solid #888;
//     border-radius: 10px;
//     width: 25%;
//     animation-name: animatetop;
//     animation-duration: 1s;
// }
// .div{
//     width: 100%;
//     height: 5vh;
//     // background-color: red;
//     display: flex;
//     justify-content: space-between;
// }
// .mess-text{
//     font-size: 2rem;
//     text-align: center;
//     // font-family: $primary-font;
//     font-weight: 700;
//     color: white;
// }
// .main-holder{
//     width: 100%;
//     // background-color: $tertiary-color;
//     // text-align: center;
//     padding: 5px;
// }
// ._mb3{
//     // font-family: $text-font;
//     color: white;
//     font-size: 1.3em;
//     margin-bottom: 1em;
//     line-height: 1.4;
// }
//   /* The Close Button */
// .close {    
//     font-size: 1.5rem;
//     cursor: pointer;
//     color: white;
// }
// #selectors{
//     padding:  0 1.3em;
//     height: 45px;
//     font-size: 1.3rem;
//     // font-family: $text-font;
//     cursor:pointer;
//     background-color:transparent;
//     outline: none;
//     border: none;
//     // color: $text-color;
//     border-radius: 3px;
//     opacity: 95%;
//     transition: 0.2s all;
//     box-shadow: 3px 2px 2px 2px rgba(0, 0, 0, 0.24);

//     &:hover{
//         opacity: 100%;
//     }

//     &:active{
//         transform: scale(0.90);
//     }
// }

// /* Add Animation */
// @keyframes animatetop {
//   from {top: -300px; opacity: 0}
//   to {top: 0; opacity: 1}
// }
