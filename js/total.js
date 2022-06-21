
function total(){

  let sumaart=0;
 
    for(let i=0; i<3; i++){
        let cantmel=prompt("agregue la cantidad de cada producto que desea comprar")
        sumaart=(cantmel*28.5)+i;
        alert(sumaart);
        sumaart=sumaart+sumaart;
    }

    alert("Su total es de "+sumaart);



}