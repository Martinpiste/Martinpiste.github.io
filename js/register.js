
let miFormulario =document.getElementById("formulario-mp")
miFormulario.addEventListener("submit",validarFormulario);
let dataUser = JSON.parse(localStorage.getItem('usuarios')) || [];
//let dataUser=[];


//constructor de mi objeto
function User(name, email, password, number){
this.name=name;
this.email=email;
this.password=password;
this.number=number;
}

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

        //se crea el objeto de usuario
        let newUser = new User(name,email,password,number);
        console.log("objeto creado "+newUser);
        agregar(newUser);
        localStorage.setItem("usuarios",JSON.stringify(dataUser));
        formulario.children[0].focus();
        formulario.children[0].value="";
        formulario.children[1].value="";
        formulario.children[2].value="";
        formulario.children[3].value="";

        
    }
  
}

function agregar(User){
    dataUser.push(User);
    console.log(dataUser);
   
}



