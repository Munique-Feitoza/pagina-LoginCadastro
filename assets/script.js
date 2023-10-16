let btnLC = document.querySelector('.btn-LoginCadastro');
let formL = document.getElementById('login');
let formC = document.getElementById('cadastro');

btnLC.addEventListener('click', function() {
  if(formL.style.display != 'block') {
    formL.style.display = 'block';
    formC.style.display = 'none';
    btnLC.innerText = "Login";
    document.querySelector('.btn-LoginCadastro').style.marginLeft = "11vw";
    return;
  } else if (formC.style.display != 'block'){
  formL.style.display = 'none';
  formC.style.display ='block';
  btnLC.innerText = "Cadastro";
  document.querySelector('.btn-LoginCadastro').style.marginLeft = "6vw";
  return;
  }
 }
);
