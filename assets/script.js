let btnLC = document.querySelector('.btn-LoginCadastro');
let formL = document.getElementById('login');
let formC = document.getElementById('cadastro');
let myBody = document.querySelector('body');
let text1 = document.querySelector('#texto1');
let text2 = document.querySelector('#texto2');

btnLC.addEventListener('click', function() {
  if(formL.style.display != 'block') {
    formL.style.display = 'block';
    formC.style.display = 'none';
    btnLC.innerText = "Login";
    document.querySelector('.btn-LoginCadastro').style.marginLeft = "11vw";
    myBody.style.backgroundColor = "black";
    text1.style.color = "white";
    text2.style.color = "white";
    return;
  } else if (formC.style.display != 'block'){
    formL.style.display = 'none';
    formC.style.display ='block';
    btnLC.innerText = "Cadastro";
    document.querySelector('.btn-LoginCadastro').style.marginLeft = "11vw";
    myBody.style.backgroundColor = "black";
    text1.style.color = "white";
    text2.style.color = "white";
    return;
  }
 }
);
