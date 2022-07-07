
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



user=[{name:"Martin",   email:"martinpiste135@gmail.com", password:"12345"},
      {name:"David",    email:"juan@gmail.com",           password:"juan"},
      {name:"Juan",     email:"david@gmail.com",          password:"david"}];


function login(){
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email!="martinpiste135@gmail.com" ){
        alert("No se reconoce el email");
        document.getElementById("email").focus()
    }
    if(password!="12345" ){
        alert("Contraseña incorrecta, intente nuevamente");
        document.getElementById("password").focus()
    }

    if(email=="martinpiste135@gmail.com" && password=="12345" ){
        
        let boton = document.getElementById("BotonSesion"); //Se elimina el boton de cart para que se pueda colocar el texto de bienvenida en us lugar
        boton.remove();
        let wt= document.getElementById("TextWelcome"); //busco la posicion donde quiero agregar mi texto
        let welcome=document.createElement("h5");   //creo mi texto
        welcome.className="text-light"  //agrego clases a mi texto
        welcome.className="fontmp"       //agrego clases a mi texto
        welcome.innerHTML=`<h5>Bienvenido Martin </h5>`;

        wt.appendChild(welcome)
        //document.body.append(welcome);
   
    }

    document.getElementById("email").value="";
    document.getElementById("password").value="";
    
    

}

