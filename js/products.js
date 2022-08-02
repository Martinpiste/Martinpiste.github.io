const card = document.getElementById("cardProd-Template") //posicion a colocar mis tarjetas d productos
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

fetch("/articulos.json") //hacer peticion
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


compra.addEventListener('click',addCarrito)

function addCarrito(e){
    e.preventDefault();
    
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

items.addEventListener('click',e =>{
    btnAccion(e)

})

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



/************************BUSCADOR-FILTRO******************************** */

let searchArticle = document.getElementById("search");
//searchArticle=searchArticle.toLowerCase();


searchArticle.addEventListener('click',es =>{
    buscar(es)

})

function buscar(es){ 
    let article=searchArticle.querySelector('input').value
    article=article.toLowerCase()
    console.log(article)

    if(article){
        let resultado=products.filter((el)=>el.name.includes(article))
        console.log(resultado)        
        let res = resultado.map(pro=>pro.name )
        let pre = resultado.map(pro2=>pro2.price)
        Swal.fire({
            icon: 'info',
            title: 'Productos encontrados',
            text: res +" " + "$ "+pre,
            
            footer: 'Encontro lo que buscaba?'
          })    
    }
    searchArticle.querySelector('input').value=""
}



let dropValue =document.getElementById("drop-departamento")
dropValue.addEventListener('click', dv=>{
    filterproduct(dv)
})
   


function filterproduct(){

    let filtrado = products.filter( elementof => elementof.department.includes("platano"));
    console.log(filtrado);

    
    console.log(dropValue.querySelectorAll('a').textContent)
   
/*
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
*/
    
}

