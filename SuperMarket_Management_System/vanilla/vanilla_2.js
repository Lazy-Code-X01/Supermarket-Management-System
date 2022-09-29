const selectRole = document.querySelector(".select-role");
const userId = document.querySelector(".user-id");
const password = document.querySelector(".password");
const loginBtn = document.querySelector("#loginBtn");
const clearBtn = document.querySelector("#clearBtn");
const show = document.querySelector('.show')


const default_userid = "lazy code";
const default_password = "temi";

// add the styles to the clear button by default 
clearBtn.classList.add('activeBtn')

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

// for the user id input 
const user_id = () =>{
    if (userId.value == default_userid) {
        password.removeAttribute("disabled", "");
    }else{
        password.setAttribute("disabled", "");
    }
}


// for the user password 
const pass = () =>{
    if (password.value != "") {

        loginBtn.removeAttribute('disabled', '')
        loginBtn.classList.add('activeBtn')

        show.style.display = 'block'
        show.onclick = () => {
            if ((password.type == 'password')) {
                password.type = 'text'
                show.innerHTML = 'HIDE'
                show.style.color = '#990099'
            }else{
                password.type = 'password'
                show.innerHTML = 'SHOW'
                show.style.color = '#000000'
            }
        }

    }else{
        show.style.display = 'none'

        loginBtn.setAttribute('disabled', '')
        loginBtn.classList.remove('activeBtn')
    }
}


// the clear button function
clearBtn.onclick = (e) =>{
    e.preventDefault()
    userId.value = ""
    password.value = ""
    userId.focus()
}


// the login button function
loginBtn.onclick = (e) =>{
    e.preventDefault()
    if (password.value == default_password && userId.value == default_userid) {
        e.preventDefault()
        location.href= './main.html'   
        displayAlert('login success', 'success')
    }else{
        displayAlert('an error occured', 'danger')
    }
}