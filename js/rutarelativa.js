/*
const card=document.getElementById("cardProd-Template")

fetch("./articulos.json") //hacer peticion
.then((res)=>res.json())
.then((productos)=>{
    productos.forEach((producto) => {

        let li =document.createElement("li")

        let nombre0=producto.name[0].toLocaleUpperCase();
        let nombre1=producto.name.slice(1);
        let nombre= nombre0+nombre1;
        let precio=producto.price.toFixed(2);
        let depart0=producto.department[0].toLocaleUpperCase();
        let depart1=producto.department.slice(1);
        let depart=depart0+depart1;

        li.innerHTML=`
        <div class="product">
            <form class="product-info" id=Proid="addpro" action="">
                <img class="product-picture" src="${producto.img}" alt="${producto.name.toLocaleUpperCase()}">
                <h5 class="categories">${depart}</h5>
                <h4 class="title" >${nombre}</h4>
                <h3 >$ <span class="price">${precio}</span> </h3> 
                <input type="number"  placeholder="0.00">
                <button class="button-mp" id="${producto.id}" >Comprar</button>     
            </form>
        </div>
        `;
    
        card.append(li);
    });
})


let card = document.getElementById("cardProd-Template") 


fetch("./articulos.json") //hacer peticion
.then((res)=>res.json())
.then((productos)=>{
    productos.forEach((producto) => {

        let li =document.createElement("li")

        let nombre0=producto.name[0].toLocaleUpperCase();
        let nombre1=producto.name.slice(1);
        let nombre= nombre0+nombre1;
        let precio=producto.price.toFixed(2);
        let depart0=producto.department[0].toLocaleUpperCase();
        let depart1=producto.department.slice(1);
        let depart=depart0+depart1;

        card.innerHTML=`
        <div class="product">
            <form class="product-info" id=Proid="addpro" action="">
                <img class="product-picture" src="${producto.img}" alt="${producto.name.toLocaleUpperCase()}">
                <h5 class="categories">${depart}</h5>
                <h4 class="title" >${nombre}</h4>
                <h3 >$ <span class="price">${precio}</span> </h3> 
                <input type="number"  placeholder="0.00">
                <button class="button-mp" id="${producto.id}" >Comprar</button>     
               
                
            </form>
        </div>
        `;
    
       // card.append(li);
    });
})
*/