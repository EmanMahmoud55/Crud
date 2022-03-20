
var productName= document.getElementById("product-name");
var productPrice= document.getElementById("product-price");
var productCategory= document.getElementById("product-category");
var productDes= document.getElementById("product-des");
var mainBtn=document.getElementById("mainBtn");

var productContainer;


if(localStorage.getItem("products")==null){
    productContainer=[];
}

else{
    productContainer= JSON.parse(localStorage.getItem("products"));
    displayProduct(productContainer);
}

function addProduct(){

if(mainBtn.innerHTML=="Add product")
{

    if(validate()){
   var product=
   {
       name:productName.value,
       price:productPrice.value,
       category:productCategory.value,
       descreption:productDes.value
   } ;
    
   productContainer.push(product);
   localStorage.setItem("products",JSON.stringify(productContainer));
  
   displayProduct(productContainer);
   clearProduct();
}

else{
    window.alert("the input is unvalid")
}
}

else
{
    
}
}

function clearProduct(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDes.value="";

}
function  displayProduct(productList){

    var cartoona="";
    for(var i=0;i<productList.length;i++)
    {
      cartoona+=`
      <tr>
                    
                    <td>${ i}</td>
                    <td>${productList[i].name}</td>
                    <td>${productList[i].price}</td>
                    <td>${productList[i].category}</td>
                    <td>${productList[i].descreption}</td>
                    <td><button class="btn btn-warning  " onClick="updateProduct(${i});" >Update</button></td>
                    <td><button class="btn btn-dark " onClick="deletProduct(${i});" >Delete</button></td>
                </tr>

      
      `  
    }

    document.getElementById("product-row").innerHTML=cartoona;

}


function deletProduct(productIndex)
{
    productContainer.splice(productIndex,1);
    localStorage.setItem("products",JSON.stringify(productContainer));
    displayProduct(productContainer);
}


function searchProduct(term){
    var searchContainer=[];

    for(var i=0 ;i<productContainer.length;i++){

        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true)        
        {
            searchContainer.push(productContainer[i]);
        }
    }

    displayProduct(searchContainer);
}

function updateProduct(index)
{

    
    productName.value=productContainer[index].name;
    productPrice.value=productContainer[index].price;
    productCategory.value=productContainer[index].category;
    productDes.value=productContainer[index].descreption;
    mainBtn.innerHTML="update product";
    
}

function validate()
{
    var regex=/^[A-Z][a-z]{3,8}$/
    if(regex.test(productName.value))
    {
        return true;
    }

    else{
        return false;
    }
}




