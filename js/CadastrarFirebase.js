
document.addEventListener('DOMContentLoaded', function () {
    const CriarConta = document.getElementById('formulario1');
    var db = firebase.firestore();
    
    CriarConta.addEventListener('submit', function(e) {
        
        // alerta o valor do campo
        let cEmail = document.getElementById('CadEmail').value;
        let cSenha = document.getElementById('CadSenha').value;
        let cNome = document.getElementById('CadNome').value;
        console.log(cEmail);
        // impede o envio do form
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(cEmail.value, cSenha.value).then(data =>{
            const uid = data.user.uid;

            const users = db.collection('Cadastro');
            
            users.doc(uid).set({
                ID: uid,
                Nome: cNome.value,
                Email: cEmail.value,

                
            }).then((docRef) => {
                alert('Conta criada com sucesso');
                window.location.href = "login.html";
            })
            
        }).catch(error => {
            if(error.code == 'auth/email-already-in-use'){
                alert('Esse email já possuí uma conta cadastrada, iremos te redirecionar para o login');
                window.location.href = "login.html";
            }else{
                alert(error.message);
            }
        });



    });
    
});
/*function cadastrar(){
    var db = firebase.firestore();
    let cEmail = document.getElementById('CadEmail');
    let cSenha = document.getElementById('CadSenha');
    let cNome = document.getElementById('CadNome').value;
    console.log(cNome);
}*/