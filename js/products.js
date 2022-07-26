let card = document.getElementById("cardProd-Template") //posicion a colocar mis tarjetas d productos
let items = document.getElementById('items')
let footer = document.getElementById('footer')


let compra =document.getElementById("cardProd-Template") //evento deboton de las tarjetas colocadas
let templateCarrito=document.getElementById("template-carrito").content;
let templateFooter=document.getElementById("template-footer").content;
let fragment = document.createDocumentFragment()

//let carrito = {};

let carrito= JSON.parse(localStorage.getItem('carrito')) || {};

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    createCar()
}

/*
let carritoActivo=localStorage.getItem("carrito")

if(carritoActivo){
    carrito=carritoActivo
    createCar()
}else{
    alert("Aprovecha las ofertas, Compra ahora!!")
}

document.addEventListener('DOMContentLoaded', e => {
    
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        createCar()
    }
*/

compra.addEventListener('click',addCarrito)
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
            <h3 >$ <span class="price">${precio}</span> </h3> 
            <input type="number"  placeholder="0.00">
            <button class="button-mp" id="${x.id}" >Comprar</button>     
        </form>
    </div>
    `;
})



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
        price:objeto.querySelector('span').textContent,
        
        
        quantity:Number(objeto.querySelector('input').value), 
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.quantity = carrito[producto.id].quantity + 1
    }
    carrito[producto.id] = {...producto}
    localStorage.setItem("carrito",JSON.stringify(carrito))
    createCar()
}

items.addEventListener('click',e =>{
    btnAccion(e)

})


function createCar(){
    
    items.innerHTML = '' //limpia para que no se repita articulos cada que se agregue uno igual

    Object.values(carrito).forEach(producto=> {
       
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.quantity
        templateCarrito.querySelectorAll('span')[0].textContent = producto.price
        let ttl = producto.price *producto.quantity;
        templateCarrito.querySelectorAll('span')[1].textContent = ttl.toFixed(2);
        
        //botones
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)
    pintarFooter()

}

function pintarFooter () {
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    let nCantidad = Object.values(carrito).reduce((acc, { quantity }) => acc + quantity, 0)
    let nPrecio = Object.values(carrito).reduce((acc, {quantity, price}) => acc + quantity * price ,0)
    console.log("Cantidad " + nCantidad)
    console.log("Importe total " + nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad.toFixed(2);
    templateFooter.querySelector('span').textContent = nPrecio.toFixed(2);

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    let btnVaciar =document.getElementById("vaciar-carrito")
    btnVaciar.addEventListener('click',()=>{
        localStorage.removeItem("carrito")
        carrito={}
        createCar()
    })
}

function btnAccion(e){
    //console.log(e.target)
    if(e.target.classList.contains('btn-info')){
        //console.log(carrito[e.target.dataset.id])
        let producto = carrito[e.target.dataset.id]
        producto.quantity++
        carrito[e.target.dataset.id]={...producto}
        createCar()
    }

    if(e.target.classList.contains('btn-danger')){
        let producto = carrito[e.target.dataset.id]
        producto.quantity--
        if(producto.quantity <= 0){
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
       
        createCar()
    }

    e.stopPropagation()
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


    let filtrado = products.filter( elementof => elementof.department.includes(searchArticle));
    console.log(filtrado);
    

}

