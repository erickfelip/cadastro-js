const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

form.addEventListener('submit',e => {
    e.preventDefault();

    CheckInputs();
});

function CheckInputs() {
    //valores dos inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();
    const senha2Value = senha2.value.trim();

    if(usernameValue === '') {
        //aparecer error
        //add error 
        setErrorFor(username, 'Usuario não preenchido');
    } else{
        //add sucess
        setSucessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email não preenchido');
        //mas se não for um email valido;
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido');
    } else {
        setSucessFor(email)
    }

    if(senhaValue === '') {
        setErrorFor(senha, 'Senha não preenchida')
    } else {
        setSucessFor(senha);
    }

    if(senha2Value === '') {
        setErrorFor(senha2, 'Senha não preenchida')
    } else if(senhaValue !== senha2Value) {
        setErrorFor(senha2, 'Senha não corresponde')
    }else {
        setSucessFor(senha2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-control
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    //add msg de error
    small.innerText = message;
}
//input do parentElement que recebe um evento. Dentro dessa função não tem nenhum nome de variável igual à variável inicial onde é criada, .parentElement está buscando o elemento pai.
function setSucessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';
}
//função customizada do stackoverflow para poder checar o email devido o @'
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
