
function getdata(){

    

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var number = document.getElementById("number").value;
    console.log(name+" "+ email+ " "+ password + " " +number);

    if(name == "" || email =="" || password==""||number=="" ){
        
        alert("Por favor ingrese todos los datos");
        
    }

    if(name == password ){
        alert("Recuerde que su contraseña no puede ser igual a su nombre");
    }

    else{

       
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("password").value="";
        document.getElementById("number").value="";
        alert("Registro exitoso");
        document.getElementById("name").focus()
    }




       
}

function cleardata(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var number = document.getElementById("number").value;
    
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("number").value="";
    document.getElementById("name").focus()
    
}

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email!="martinpiste135@gmail.com" ){
        alert("No se reconoce el email");
        document.getElementById("email").focus()
    }
    if(password!="Ticopiste" ){
        alert("Contraseña incorrecta, intente nuevamente");
        document.getElementById("password").focus()
    }

    if(email=="martinpiste135@gmail.com" && password=="Ticopiste" ){
        alert("Bienvenido, has iniciado sesion!");
        
    }

    document.getElementById("email").value="";
    document.getElementById("password").value="";
    
    

}

