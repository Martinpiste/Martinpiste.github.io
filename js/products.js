
class product{
    constproduct(id,name, price, stock, department){
        this.id     =id.toLowerCase();
        this.name   = name.toLowerCase();
        this.price  = parseFloat(price);
        this.stock  =stock;
        this.department =department.toLowerCase();

    } 
}

const products = [  {id:"plr",      name:"platano roatan",  price:19.5,   stock:18,     department:"frutas y verduras"},
                    {id:"plmz",     name:"platano manzano", price:28,     stock:15,     department:"frutas y verduras"},
                    {id:"mel",      name:"melon chino",     price:28,     stock:15,     department:"frutas y verduras"},
                    {id:"lim",     name:"limon persa",      price:10,     stock:18,     department:"frutas y verduras"},
                    {id:"mar",     name:"manzana roja",     price:28,     stock:20,     department:"frutas y verduras"},
                    {id:"canr",    name:"canela",           price:460,    stock:3,      department:"condimentos"},
                    {id:"855",     name:"platos-855",       price:35,     stock:20,     department:"desechables"},
                    {id:"cilp",    name:"cilantro",         price:60,     stock:20,     department:"hierbas"},
                    {id:"vs10",    name:"vaso#10",          price:45,     stock:20,     department:"desechables"},
                    {id:"lrl",     name:"lechuga romana",   price:19.5,   stock:24,     department:"frutas y verduras"},
                    {id:"chh",     name:"habanero",         price:98,     stock:30,     department:"frutas y verduras"},
                    {id:"sdk",     name:"sandia",           price:9.5,    stock:456,    department:"frutas y verduras"},
                    {id:"nad",     name:"naranja dulce",    price:12,     stock:18,     department:"frutas y verduras"},
                    {id:"pia",     name:"pina",             price:32,     stock:15,     department:"frutas y verduras"},
                    {id:"uvr",     name:"uva roja",         price:100,    stock:8,      department:"frutas y verduras"},
                                       
];

const ids=products.map((el)=> el.id)


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

   