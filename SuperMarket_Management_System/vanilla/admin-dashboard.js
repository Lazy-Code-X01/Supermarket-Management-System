window.addEventListener('load', function () {

    //functions
// ----------- FUNCTION TO DISPLAY ALERT -----------------
    const alert = document.querySelector('.alert')
    displayAlert = (text, action) =>{
        alert.textContent = text
        alert.classList.add(`alert-${action}`)

        setTimeout(function() {
            alert.textContent = ''
            alert.classList.remove(`alert-${action}`)
        }, 2000)
    }


    //grabbing elements
    const form = document.querySelector('.header-for-product-categories-panel')
    const list = document.querySelector('.body-for-product-categries-apnel')
    const input = document.querySelector('.input')

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const value = input.value
        if (!value) {
            alert('please fill out the fields')
            return;
        }
        //creating the parent div
        const parentDiv = document.createElement('div')
        parentDiv.classList.add('row')

        //creting the input
        const categoryInput = document.createElement('input')
        categoryInput.type = 'text'
        categoryInput.classList.add('category-input')
        categoryInput.value = value
        categoryInput.setAttribute('readonly', 'readonly')

        // appending the inpput to thw parent div
        parentDiv.appendChild(categoryInput)

        //creating the button container
        const btnContainer = document.createElement('div')
        btnContainer.classList.add('btn-holder')
        
        //creating the buttons
        const editBtn = document.createElement('button')
        editBtn.innerHTML = '<span class="material-symbols-outlined">edit_square</span>'
        editBtn.classList.add('edit-btn')

        const delBtn = document.createElement('button')
        delBtn.innerHTML = '<span class="material-symbols-outlined">delete_forever</span>'
        delBtn.classList.add('del-btn')

        //appennding the buttons 
        btnContainer.append(editBtn, delBtn)

        // APPENDING THE BUTTON TO THE PARENT DIV
        parentDiv.appendChild(btnContainer)

        // APPENDING ALL TO THE DOM 
        list.appendChild(parentDiv)

        //S set the winp
        input.value = ''

        editBtn.addEventListener('click', function () {
            if (editBtn.innerHTML.toLocaleLowerCase() == '<span class="material-symbols-outlined">edit_square</span>') {
                categoryInput.removeAttribute('readonly')
                categoryInput.style.color = '#9900ff'
                categoryInput.focus()
                displayAlert('editing.......', 'danger')
                editBtn.innerHTML = '<span class="material-symbols-outlined">save</span>'

            }else{
                categoryInput.setAttribute('readonly', 'readonly')
                categoryInput.style.color = '#000'
                // editBtn.innerText = 'e'
                displayAlert('updated', 'success')
                editBtn.innerHTML = '<span class="material-symbols-outlined">edit_square</span>'
            }
        })


        delBtn.addEventListener('click', function (e) {
            e.preventDefault()
            displayAlert('item deleted', 'danger')
            list.removeChild(parentDiv)
        })
    })




    // --------------------------------------------------------------------- UPADTE PRODUCT SECTION
    const form2 = document.querySelector('.panel-t0-add-available-product');
    const list2 = document.querySelector('.row-prod-container')
    const prodNameInput = document.querySelector('.prod-name-input')
    const prodPriceInput = document.querySelector('.prod-price-input')
    //functions
    // auto add the SN
        var index = 0;
        var output = index + 1;

    form2.addEventListener('submit', (e) =>{
        e.preventDefault()

        const prodNameInputValue = prodNameInput.value
        const prodPriceInputValue = prodPriceInput.value

        if (!prodNameInputValue) {
            // alert('fill in name of product')
            displayAlert('fill in name of product', 'danger')
            
            return
        }else if (!prodPriceInputValue) {
            // alert('fill in price of product')
            displayAlert('fill in price of product', 'danger')
            return
        }else{
            // this.alert('success')
            displayAlert('product added !', 'success')
        }

        //creating the parent div
        const rowProd = document.createElement('div')
        rowProd.classList.add('row-prod')


        //cretaing nthe inner div for the input
        const content1 = document.createElement('div')
        content1.classList.add('content')
        content1.setAttribute('id', 'sn')
        //create the input inside it
        const input1 = this.document.createElement('input')
        input1.type = 'text'
        input1.classList.add('text')
        // input1.value = addUp()
        input1.value = output ++
        //appending the input tp the innerContainer
        content1.appendChild(input1)
        
        

        //creating the parent div
        const rowProd2 = document.createElement('div')
        rowProd2.classList.add('row-prod')


        //cretaing nthe inner div for the input
        const content2 = document.createElement('div')
        content2.classList.add('content')
        content2.setAttribute('id', 'name')
        //create the input inside it
        const input2 = this.document.createElement('input')
        input2.type = 'text'
        input2.classList.add('text')
        input2.value = prodNameInputValue
        input2.setAttribute('readonly', 'readonly')
        //appending the input tp the innerContainer
        content2.appendChild(input2)
        

        //creating the parent div
        const rowProd3 = document.createElement('div')
        rowProd3.classList.add('row-prod')


        //cretaing nthe inner div for the input
        const content3 = document.createElement('div')
        content3.classList.add('content')
        content3.setAttribute('id', 'price')
        //create the input inside it
        const input3 = document.createElement('input')
        input3.type = 'text'
        input3.classList.add('text')
        input3.value = prodPriceInputValue
        input3.setAttribute('readonly', 'readonly')
        //appending the input tp the innerContainer
        content3.appendChild(input3)
        

        // for the button
        const btnContainer2 = document.createElement('div')
        btnContainer2.classList.add('btn-container')

        //create the two butons
        const  btn1 = this.document.createElement('button')
        btn1.innerHTML = '<span class="material-symbols-outlined">edit</span>'
        const  btn2 = this.document.createElement('button')
        btn2.innerHTML = '<span class="material-symbols-outlined">delete</span>'
        btnContainer2.append(btn1,btn2)

        rowProd.append(content1, content2, content3, btnContainer2)
        list2.appendChild(rowProd)

        prodNameInput.value = ''
        prodPriceInput.value = ''
        prodNameInput.focus()
        // console.log(rowProd);


        btn1.addEventListener('click', () =>{
            if (btn1.innerHTML == '<span class="material-symbols-outlined">edit</span>') {
                input2.removeAttribute('readonly')
                input2.style.color = 'red'
                input2.focus()
                input3.removeAttribute('readonly')
                input3.style.color = 'red'
                btn1.innerHTML = '<span class="material-symbols-outlined">save_as</span>'
                displayAlert('editing . . . .', 'danger')

                // btn1.innerText = '<span class="material-symbols-outlined">edit_square</span>'
            }else{
                input2.setAttribute('readonly', 'readonly')
                input2.style.color = '#000'
                input2.focus()
                input3.setAttribute('readonly','readonly')
                input3.style.color = '#000'
                btn1.innerHTML = '<span class="material-symbols-outlined">edit</span>'
                displayAlert('updated', 'success')
                // btn1.innerText = '<span class="material-symbols-outlined">edit_square</span>'

            }
        })

        btn2.addEventListener('click', () => {
            list2.removeChild(rowProd)
            displayAlert('item deleted', 'danger')

        })
    })
})





// RECORD TRACKING
const Box = document.querySelector('.overlay-for-centered-div')
const coveredSaleBox = document.querySelector('.covered-sale-box')
const modal = document.querySelector('.modal')
const X = document.querySelector('.times')
const select = document.querySelectorAll('#select')

//function for the categories 
const  prevBox = (reed) => {

    // getting the covered sale from the covered sale box
    let coveredSaleDate = reed.children[1].innerText

    //geting the date of the 
    let modalHead = modal.children[0]
    let modalDate =  modalHead.children[2]

    // replace the date from the covered sale date to the date in the modal box
    modalDate.innerText = coveredSaleDate
    console.log(modalDate);

    // display the modal
    Box.style.display = 'flex'
}

X.onclick = () =>{
    Box.style.display = 'none'
}

window.addEventListener('click', (event) => {
    if (event.target == Box) {
        Box.style.display = 'none'
    }
})


//nav bar
window.addEventListener('scroll', () =>{
    const nav = document.querySelector('nav')
    nav.classList.toggle('sticky', window.scrollY > 0)
})