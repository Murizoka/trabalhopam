function validar(){
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    if(email.value === ''){
        alert("Preencha seu email");
        return false;
    } 
    if (senha.value === ''){
        alert("Preencha sua senha");
        return false;
    }

    alert("Login realizado com sucesso");
    return true;
}