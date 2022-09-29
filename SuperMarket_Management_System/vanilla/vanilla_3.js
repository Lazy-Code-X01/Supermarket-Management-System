const masterArrray = []
const highlightedElementArrray = []

// ------------------ GRABBING ALL INPUT ELEMENT ----------------
const prodSn = document.querySelector('.sn')
const prodName = document.querySelector('.name');
const prodQuantity = document.querySelector('.quantity');
const productPrice = document.querySelector('.price');
const select = document.querySelector('.select');


// _____________________ U N I Q U E   I D   F O R   E A C H   P R O D U C T ________________
const id = new Date().getTime().toString()
function random() {
    var rnd = Math.floor( Math.random() * id )
    const attr = document.createAttribute('data-id')
    attr.value = rnd
    console.log(attr);
}



// ------------------ GRABBING ALL BUTTONS ----------------------
const addBtn = document.querySelector('.add-btn');
const clearBtn = document.querySelector('.clear-btn');



// ------  SETTING EVENT LISTENERS FUNCTIONS ON BUTTONS  msome of them are in the add function-------------
addBtn.addEventListener('click', btnAdd)
// clearBtn.addEventListener('click', btnClear)


// -------------------------- EDIT OPTIONS ------------------------
let editElement;
let editElement2;
let editElement3;
let editElement4;
let editFlag = false;
let editID = '';


//---------- FUNCTION TO ADD SN DYNAMICALLY TO THE INPUT ------------
count = 1
prodSn.value = count;
function addToInput() {
    var snNumber = prodSn.value;
    var snToNumber = parseInt(snNumber)
    incrementSnNumber = snToNumber +1
    prodSn.value = incrementSnNumber
}

// ----------- FUNCTION TO DISPLAY ALERT -----------------
const alert = document.querySelector('.alert')
displayAlert = (text, action) =>{
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    setTimeout(function() {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}


const list = document.querySelector('.parent-for-table') // GRABBING TABLE 

// ----------------- function to target the enter button uding the key
// document.addEventListener('keyup', (event) => {
//     if (event.code === 'Enter') {
//         event.preventDefault()
//         if (prodName.value == '') {
//             console.log('it is empty');        
//             displayAlert('empty fields', 'danger')
//         }else{
//             displayAlert('item added successfully', 'success')
//             btnAdd(e)

//         }
//     }
// })

// ---------------- function for the edit button ------------------------
function btnEdit(e) {
    e.preventDefault()
    const article = document.querySelector('.highlighted') 
    if (article) {
    
        const elemenT = document.querySelector('.highlighted');
        editElement = document.querySelector('.highlighted').children[1]
        editElement2 = document.querySelector('.highlighted').children[2]
        editElement3 = document.querySelector('.highlighted').children[3]
        editElement4 = document.querySelector('.highlighted').children[4]
        // set record value
        prodName.value = editElement.innerHTML
        prodQuantity.value = editElement2.innerHTML
        productPrice.value = editElement3.innerHTML
        select.textContent = editElement4.innerHTML
        editFlag = true
        editID = elemenT.dataset.id

    }else{
        displayAlert('Select A Record', 'danger')
    }
}

// ---------------- function for the delete button --------------------
function btnDelete(e) {
    e.preventDefault()
    element = document.querySelector('.highlighted')
    if (element) {
        console.log(element);

        // const id = element.dataset.id
        list.removeChild(element)
    }else{
        displayAlert('select a record', 'danger')
    }
}


// ------------------ function for the clear button
function btnClear() {
    setSystemBackToDefault()
}
// --------------------------- set back to defaults ------------------------
function setSystemBackToDefault() {
    prodName.value = "";
    prodQuantity.value = "";
    productPrice.value = "";
    select.textContent = 'Select Categories';
    editFlag = false;
    editID = "";
}
// --------------------------- set edit back to  defaults ------------------------
function setEitdBackToDefault() {
    prodName.value = "";
    prodQuantity.value = ""
    productPrice.value = ""
    select.textContent = 'Select Categories';
    editFlag = false;
    editID = "";
    editElement.parentElement.classList.remove('highlighted')
    editElement2.parentElement.classList.remove('highlighted')
    editElement3.parentElement.classList.remove('highlighted')
    editElement4.parentElement.classList.remove('highlighted')
}

// ---------------- function to add to the row ---------------------
function btnAdd(e){
    // -------------- GRABBING THE VALUE OF THE INPUT VALUE -----------------------
    prodSnValue = prodSn.value
    prodNameValue = prodName.value
    prodQuantityValue = prodQuantity.value
    productPriceValue = productPrice.value
    productCategoriesValue = select.textContent

    // set product categorie to a default and check if it's true to determine if it'll be stored in the table
    prodCatVals = 'Select Categories';
    prodCatVals = true;


    e.preventDefault()
    if (!prodNameValue == '' &&  !prodQuantityValue == '' &&  !productPriceValue == '' && productCategoriesValue !== 'Select Categories' && !editFlag) {
        // ----------- ADD TO INPUT -------------------
        addToInput()
        const element = document.createElement('article')
        element.classList.add('row')
        element.classList.add('mb-3')
        // console.log(element);
        console.log('item added');

        // ________________ ADD DYNAMIC ID TO EACH RECORD ____________
        var rnd = Math.floor( Math.random() * id )
        const attr = document.createAttribute('data-id')
        attr.value = rnd
        element.setAttributeNode(attr)
        element.innerHTML =        
         ` <span id="containRecord" class="prodsn">${prodSnValue}</span>
        <span id="containRecord" class="prodname">${prodNameValue}</span>
        <span id="containRecord" class="prodquantity">${prodQuantityValue}</span>
        <span id="containRecord" class="prodprice">${productPriceValue}</span>
        <span id="containRecord" class="prodcategory">${productCategoriesValue}</span>`
        
        
        console.log(select.textContent)



        list.appendChild(element)
        // console.log(element);
        // masterArrray.push(element)
        //when the user clicks the element row
        element.addEventListener('click',  (e) => {
            e.preventDefault()
            element.classList.add('highlighted')       
        })
        //when the user clicks the element row
        element.addEventListener('dblclick',  (e) => {
            e.preventDefault()

            element.classList.remove('highlighted')
        })
        //edit btn function caller
        const editBtn = document.querySelector('.edit-btn');
        editBtn.addEventListener('click', btnEdit)
        //delete btn function caller
        const deleteBtn = document.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', btnDelete)
        // ----------- Display Alert __________________
        displayAlert('Item Added Successfully', 'success')
        // ------------- Set Back to Default -----------
        setSystemBackToDefault()
        cretaeSearchItem(prodNameValue)
    }else if (!prodName.value == '' && !prodQuantity.value == '' && !productPrice.value == '' && productCategoriesValue !== 'Select Categories' && editFlag) {
            editElement.innerHTML = prodNameValue
            editElement2.innerHTML = prodQuantityValue
            editElement3.innerHTML = productPriceValue
            editElement4.innerHTML = select.textContent
            
            setEitdBackToDefault()
            displayAlert('value changed', 'success')
    }else{
        displayAlert('Empty Fields', 'danger')
    }
}
// for the automatical calculation of the price with a default price of 60
prodQuantity.onkeyup = () =>{
    prodQuantityValue = prodQuantity.value
    productPrice.value = prodQuantityValue * 60
}

// for the loader 
const loader = document.querySelector('.loader_b');

window.addEventListener('load', function () {
    setTimeout(() => {
        loader.classList.add('trans')
    }, 2000);    
})


//localstorage API
// setItem
// getItem
// removeItem
// Save as strings

// localStorage.setItem('ORANGE', JSON.stringify(['item1', 'item2']))
// let oranges  = JSON.parse(localStorage.getItem('ORANGE'))
// localStorage.removeItem("ORANGE")



// function ageInDays() {
//     var birthday = prompt('What year were you born?')
//     var ageInDays = (2018 - birthday) * 365;
//     var h1 = document.createElement('h1')
//     var textAnswer ='You are ' + ageInDays + ' days old'
//     console.log(textAnswer);
//     h1.setAttribute('id', 'ageInDays')
//     h1.innerHTML = `${textAnswer}`
//     console.log(h1);
// }
// ageInDays()