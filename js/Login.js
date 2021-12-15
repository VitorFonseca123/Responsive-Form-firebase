document.addEventListener('DOMContentLoaded', function () {
    const Login = document.getElementById('formulario');
    var db = firebase.firestore();
    const userInfo = document.querySelector('span.user-info');
    
    Login.addEventListener('submit', function(e) {
        // alerta o valor do campo
        let cEmail = document.getElementById('txtEmail');
        let cSenha = document.getElementById('txtSenha');
        
        
        // impede o envio do form
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(cEmail.value, cSenha.value).then(async (data) => {
            const uid = data.user.uid;
            try{
                alert("Login realizado");
                
            }catch(e){
                
                  console.log(error.message);  
               
            }
        });



    });
    
});
/**/