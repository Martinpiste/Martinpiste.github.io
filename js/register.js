
let miFormulario =document.getElementById("formulario-mp")
miFormulario.addEventListener("submit",validarFormulario);

let dataUser=[];

function validarFormulario(e){

    e.preventDefault();
    let formulario=e.target

    let name = formulario.children[0].value;
    let email = formulario.children[1].value;
    let password = formulario.children[2].value;
    let number = formulario.children[3].value;

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(number);

    
    if(name == "" || email =="" || password==""||number=="" ){
        alert("Por favor ingrese todos los datos");
        formulario.children[0].focus()  
    }else{
         //constructor de mi objeto
        function user(name, email, password, number){
            this.name=name;
            this.email=email;
            this.password=password;
            this.number=number;
        }

        //se crea el objeto de usuario
        newUser = new user(name,email,password,number);
        console.log("objeto creado "+newUser);
        agregar();
        formulario.children[0].focus();
        formulario.children[0].value="";
        formulario.children[1].value="";
        formulario.children[2].value="";
        formulario.children[3].value="";
    }
  
}

function agregar(){
    dataUser.push(newUser);
    console.log(dataUser);
}




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

