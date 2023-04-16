//fetch API

const url='http://localhost:3000/products'
const listOfProducts=document.getElementById('products')//reference to where the products will be displayed
//fetch all products


//get request using fetch
function getfetchAllProducts(){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        //console.log(data)
    //map, forEach
    data.map(product=>{

    console.log(product.name)
        //create an element that acts as a child for ul
        
        let listProduct=document.createElement('li')
        listProduct.innerText=` product name is :${product.name}`;

        //add each list item to the DOM
        listOfProducts.append(listProduct)

    })

    })
   
}
getfetchAllProducts()
//console.log('connected to the backend')