
let carrito = {};

class product{
    constproduct(id,name, price, stock, department){
        this.id     =id.toLowerCase();
        this.name   = name.toLowerCase();
        this.price  = parseFloat(price);
        this.stock  =stock;
        this.department =department.toLowerCase();

    } 
}


const products = [  {id:"plr",      name:"platano roatan",  price:19.5,   stock:18,     department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                    {id:"plmz",     name:"platano manzano", price:28.00,     stock:15,     department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                    {id:"mel",      name:"melon chino",     price:28.00,     stock:15,     department:"frutas y verduras"  ,img:'../image/melon.jpg'},
                    {id:"lim",     name:"limon persa",      price:10.00,     stock:18,     department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                    {id:"mar",     name:"manzana roja",     price:28.00,     stock:20,     department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                    {id:"canr",    name:"canela",           price:460.00,    stock:3,      department:"condimentos"        ,img:'../image/platano.jpg'},
                    {id:"855",     name:"platos-855",       price:35.00,     stock:20,     department:"desechables"        ,img:'../image/platano.jpg'},
                    {id:"cilp",    name:"cilantro",         price:60.00,     stock:20,     department:"hierbas"            ,img:'../image/platano.jpg'},
                    {id:"vs10",    name:"vaso#10",          price:45.00,     stock:20,     department:"desechables"        ,img:'../image/platano.jpg'},
                    {id:"lrl",     name:"lechuga romana",   price:19.50,   stock:24,     department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                    {id:"chh",     name:"habanero",         price:98.00,     stock:30,     department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                    {id:"sdk",     name:"sandia",           price:9.50,    stock:456,    department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                    {id:"nad",     name:"naranja dulce",    price:12.00,     stock:18,     department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                    {id:"pia",     name:"pina",             price:32.00,     stock:15,     department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                    {id:"uvr",     name:"uva roja",         price:100.00,    stock:8,      department:"frutas y verduras"  ,img:'../image/platano.jpg'},
                                       
];

const ids=products.map((el)=> el.id)

let card = document.getElementById("cardProd-Template");


products.map((x)=>{
    let nombre0=x.name[0].toLocaleUpperCase();
    let nombre1=x.name.slice(1);
    let nombre= nombre0+nombre1;
    let precio=x.price.toFixed(2);
    let depart0=x.department[0].toLocaleUpperCase();
    let depart1=x.department.slice(1);
    let depart=depart0+depart1;
    
    card.innerHTML+=`
    <div class="product">
        <form class="product-info" id=Proid="addpro" action="">
            <img class="product-picture" src="${x.img}" alt="${x.name.toLocaleUpperCase()}">
            <h5 class="categories">${depart}</h5>
            <h4 class="title" >${nombre}</h4>
            <h3 class="price"> $ ${precio}</h3> 
            <input type="number"  placeholder="0.00">
            <button class="button-mp" id="${x.id}" >Comprar</button>     
        </form>
    </div>
    `;

    console.log(x.img)
})


let compra =document.getElementById("cardProd-Template");
compra.addEventListener('click',addCarrito)

function addCarrito(e){
    e.preventDefault();
    let dataCart=e.target
    if(e.target.classList.contains('button-mp')){        
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

function setCarrito(objeto){
    //console.log(objeto)
    
    if(objeto.querySelector('input').value == 0){
        objeto.querySelector('input').value=1
    }
    const producto ={
        id:objeto.querySelector('.button-mp').id,
        title:objeto.querySelector('h4').textContent,
        price:objeto.querySelector('h3').textContent,
        quantity:Number(objeto.querySelector('input').value), 
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.quantity = carrito[producto.id].quantity + 1
    }

    carrito[producto.id] = {...producto}
    console.log(carrito)
}






function searchproduct(){
    var searchArticle = document.getElementById("search").value;
    searchArticle=searchArticle.toLowerCase();
    alert(searchArticle)

    let search = products.find(elemento => elemento.name === searchArticle);
   alert('El precio de '+ search.name + ' es de ' + '$'+search.price);
  
}

function filterproduct(){

    var searchArticle = document.getElementById("filter1").textContent;
    searchArticle=searchArticle.toLowerCase();
    alert(searchArticle)

    var searchArticle = document.getElementById("filter2").textContent;
    searchArticle=searchArticle.toLowerCase();
    alert(searchArticle)

    var searchArticle = document.getElementById("filter3").textContent;
    searchArticle=searchArticle.toLowerCase();
    alert(searchArticle)

    var searchArticle = document.getElementById("filter4").textContent;
    searchArticle=searchArticle.toLowerCase();
    alert(searchArticle)

ggft
    let filtrado = products.filter( elementof => elementof.department.includes(searchArticle));
    console.log(filtrado);
    

}

/*

let addPro =document.getElementById("addpro")

addPro.addEventListener("submit",addProduct);



function showProd(){
    if(id==lim){
        
    }
}

function addProduct(e){
    e.preventDefault();
    let carritoProd=e.target
    console.log(carritoProd)
    alert("Se agrego un producto")
    let namePro  = carritoProd.children[1].innerHTML;
    let pricePro = carritoProd.children[2].innerHTML;
    let cantPro = document.getElementById("CntPro").value;
    

    console.log("Nombre: "+ namePro);
    console.log("Precio " + pricePro);
    console.log("Cantidad " + cantPro);



}
   */