// ----------------------------------------- ______________  search function for categories on the left pannel -------------------- ________________________
const dropDownList = document.querySelector('.dropdown-list');
const dropDownSearch = document.querySelector('.search-menu_holder');
const dropDownSelect = document.querySelector('.dropdown-select');
search = document.querySelector('#sbycat');
const categories = document.querySelectorAll('.dropdown-list_item');


// -- function to display the drop down on click
const reuseOBjectToDisplayDropDownSelect = () =>{
  dropDownSelect.addEventListener('click', function () {
    search.setAttribute('autofocus', '')
    dropDownList.style.visibility = 'visible'
    dropDownList.style.opacity = '1' 


    // for the drop down search
    dropDownSearch.style.visibility = 'visible'
    dropDownSearch.style.opacity = '1'

    search.focus()

  })
}

// -- function to hide the dropdown on double click
const reuseOBjectToHideDropDownSelect = () =>{
  dropDownSelect.addEventListener('dblclick', function () {
    dropDownList.style.visibility = 'hidden'
    dropDownList.style.opacity = '0'

      // for the drop down search
      dropDownSearch.style.visibility = 'hidden'
      dropDownSearch.style.opacity = '0'
  })
}


// ------------- THIS FUNCTION IS TO RESET THE SEARCH BACK TO DEFAULT 
function secretFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('sbycat');
  filter = input.value.toUpperCase();
  ul = document.querySelector(".dropdown-list");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText && input.value == '';
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


// this function is to hide the search categories
const resetBackToDefalut = () =>{
  dropDownList.style.visibility = 'hidden'
  dropDownList.style.opacity = '0'

  // for the drop down search
  dropDownSearch.style.visibility = 'hidden'
  dropDownSearch.style.opacity = '0'
}





// ---------------------------------------- ______________  search function for categories on the left pannel -------------------- ________________________
const uls = document.getElementById('myUL')

//create the element
const cretaeSearchItem = (item) =>{
  const listedtItems = document.createElement('li')
  const anchorItems = document.createElement('a')

  anchorItems.appendChild(document.createTextNode(item))
  listedtItems.appendChild(anchorItems)
  uls.appendChild(listedtItems)
}

// appned the element created to the search bar
const searchFunction = () => {
  //set the uls to display block back
  uls.style.display = 'block'

  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText && input.value == '';
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


// function to search the categories to  be selected
const searchCategories = () =>{
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('sbycat');
  filter = input.value.toUpperCase();
  ul = document.querySelector(".dropdown-list");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText && input.value == '';
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


//function for the categories 
function dropDownListItem(reed) {
  let text = reed.textContent
  select.textContent = text

  //when i click on the item i want clear the search filed and press the backspace => just to return back to default
  // reuseOBjectToHideDropDownSelect()

  search.value = ""
  search.focus()
  secretFunction()
  resetBackToDefalut()
}



// ------------- calling functions
reuseOBjectToDisplayDropDownSelect()
reuseOBjectToHideDropDownSelect()