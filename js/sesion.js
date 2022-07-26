
let usuario;
let usuarioStorage=localStorage.getItem("usuario");

let miSesion =document.getElementById("sesion-mp")
miSesion.addEventListener("submit",sesionMP);

let boton = document.getElementById("BotonSesion"); //Se elimina el boton de cart para que se pueda colocar el texto de bienvenida en us lugar
let inp0 = document.getElementById("inp0");
let inp1 = document.getElementById("inp1");
let texth3= document.getElementById("ssh3");
let texpm= document.getElementById("sspm");
let btnss= document.getElementById("btnss");


if(usuarioStorage){
    usuario=usuarioStorage;
    modifSaludo()
}
else{
 
   // alert("Aun no inicias sesion")

   const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Aun no inicias sesion!',
    text: "Quieres iniciar sesio?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, si quiero!',
    cancelButtonText: 'No, no me interesa!',
    reverseButtons: true,
    
    
  }).then((result) => {
    
    if (result.isConfirmed) {
        icon: 'info',
      swalWithBootstrapButtons.fire(
        
        'Ingrese los datos correspondientes!',
        'Aproveche las ofertas.',
        'info'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel)
     {
        Swal.fire({
           
            title: 'No deje pasar los grandes beneficios',
            text: 'Registrese ya :)',
            icon: 'question',
            showConfirmButton: false,
            timer: 5000,
            showCloseButton: true
          })
    }
    
   
  })
  

}





function sesionMP(e){

    e.preventDefault();
    let datosSesion=e.target

    let correo = datosSesion.children[0].value;
    let contra = datosSesion.children[1].value;
    let datosUsuarios=JSON.parse(localStorage.getItem("usuarios"));
    if(datosUsuarios){
        for(const user of datosUsuarios){
            console.log(user.email)
            console.log(user.password)
    
            if(user.email==correo && user.password== contra){
                usuario=user.name
               // console.log("el usuario con sesion se llama " + usuario);
                localStorage.setItem("usuario",usuario)
    
                datosSesion.children[0].focus();
                datosSesion.children[0].value="";
                datosSesion.children[1].value="";   
                
                Swal.fire({
                    title: `Bienvenido/a ${usuario}, Gracias por su preferencia `,
                    width: 600,
                    padding: '3em',
                    color: '#6BA43A',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                      rgba(0,125,0,0.4)
                      left top
                      no-repeat
                    `
                  })
                
                modifSaludo()
                break;
    
            }else{
               // alert("INgresa los datos");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Los datos son incorrectos!',
                    //footer: '<a href="">Why do I have this issue?</a>'
                  })
               
                datosSesion.children[0].focus();
                datosSesion.children[0].value="";
                datosSesion.children[1].value="";
                break;
                
            }
        }      
    }else{
        //alert("Usuario no existente")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario no existente!',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
    }
      

    console.log(correo);
    console.log(contra);
}


function modifSaludo(){
    
            boton.remove();
            let wt= document.getElementById("TextWelcome"); //busco la posicion donde quiero agregar mi texto
            let welcome=document.createElement("h5");   //creo mi texto
            welcome.className="text-light"  //agrego clases a mi texto
            welcome.className="fontmp"       //agrego clases a mi texto
            welcome.innerHTML=`<h5>Bienvenido ${usuario} </h5>`;
            wt.appendChild(welcome)

            inp0.remove();
            inp1.remove();
            texth3.remove();
            texpm.remove();
            btnss.remove();


            let seccbtn= document.getElementById("seccSesion");//busco la posicion donde quiero agregar mi texto
            let btnclose=document.createElement("button");  //creo mi boton 
            let closetxt=document.createElement("h5");   //creo mi texto


            btnclose.className="contact-main";
            btnclose.className="boton-mp";
            btnclose.onclick=sesionClose;
            
            seccbtn.appendChild(closetxt) 
            btnclose.innerHTML = "Cerrar sesion";
            seccbtn.appendChild(btnclose);

            


}




function sesionClose(){
    localStorage.removeItem("usuario");
   // alert("Se ha serrado la sesion de " + usuario)
    location.reload(); //Ayuda a refrescar la pagina
    
    
}


