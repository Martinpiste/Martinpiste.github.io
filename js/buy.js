


const products = [{id:"1", name:"Papaya", price:15.5, stock:15, department:"Frutas y verduras"},
                  {id:"2", name:"Papa",   price:32,   stock:60, department:"Frutas y verduras"}];

function AddProduct(){

    for(const article of products){

        

        let Producto=document.createElement("div")

        let ContIMG=document.createElement("div")
        let ContInfo=document.createElement("div")

        let Title=document.createElement("h4")
        let Price=document.createElement("h3")
        let PriceDetalle=document.createElement("div")


        Producto.className="product"
        ContIMG.className="product-picture"
        ContInfo.className="product-info"
        Title.className="title"
        Price.className="price"


        ContIMG.innerHTML = `<img">`;

        ContInfo.innerHTML = `  <h4 ${article.id} </h4>
                                <h4 ${article.name} </h4>
                                <h3<span >${article.price}</span></h3>`
        ;     




        document.body.appendChild(ContInfo);
        alert("Se agrego")
    
    
    }
   
}




