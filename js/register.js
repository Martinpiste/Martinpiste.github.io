


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

/**************************** */

//const btn = document.getElementById('button');

document.getElementById('formulario-mp')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   miFormulario.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_p91kx6f';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        miFormulario.value = 'ENVIAR MENSAJE';
      alert('Mensaje enviado correctamente');
    }, (err) => {
        miFormulario.value = 'ENVIAR MENSAJE';
      alert(JSON.stringify(err));
    });
});

/*************************** */

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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Aun no ingresa todos los datos!',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
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
        Swal.fire({
           // position: 'top-end',
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1850
          })
    }
  
}

function agregar(User){
    dataUser.push(User);
    console.log(dataUser); 
}



