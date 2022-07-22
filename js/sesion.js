
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
 
    alert("Aun no inicias sesion")

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
                modifSaludo()
                break;
    
            }else{
                datosSesion.children[0].focus();
                datosSesion.children[0].value="";
                datosSesion.children[1].value="";
            }
        }      
    }else{
        alert("Usuario no existente")
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


