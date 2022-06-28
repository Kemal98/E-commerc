


// add shopping cart 
document.querySelector("#cart-btn").addEventListener("click", AddBtnView)

let AddShoppingCart = document.querySelector("#shopping-cart")
let addCart = document.querySelector(".card-shopping")


function AddBtnView (e) {
    e.preventDefault()
    AddShoppingCart.style.display = "block";
    addCart.style.display = "none";

}

document.querySelector("#login-btn").addEventListener("click", accountsBtnView)

function accountsBtnView (e) {
    e.preventDefault()
    addCart.style.display = "block";
    AddShoppingCart.style.display = "none";

}


//  products

// products.forEach((product) => {
 
//     let productLocation = document.querySelector("#productLocation");
//     console.log(product.filter)
//     productLocation.innerHTML += `
//                             <div class="col-md-4 mt-2">
//                                <div class="card ${product.filter}">
//                                     <div class="card-body">
//                                         <div class="card-img-actions">
//                                                 <img src="${product.imgSrc}" class="card-img img-fluid" width="96" height="350" alt="">                                         
//                                         </div>
//                                     </div>

//                                     <div class="card-body bg-light text-center">
//                                         <div class="mb-2">                    
//                                             <a href="#" class="text-muted" data-abc="true">${product.name}</a>
//                                         </div>

//                                         <h3 class="price mb-0 font-weight-semibold">${product.price}</h3>

//                                         <div>
//                                            <i class="fa fa-star star"></i>
//                                            <i class="fa fa-star star"></i>
//                                            <i class="fa fa-star star"></i>
//                                            <i class="fa fa-star star"></i>
//                                         </div>
//                                         <input type="number" class="quantity" value="0" min="0">
//                                         <div class="cart-button">
//                                             <button onclick ="addToCard(this)" class="cart">
//                                                 <span>Add to Cart </span>
//                                                 <i class="fa fa-shopping-basket" aria-hidden="true" ></i>
//                                             </button>
//                                            </div>
//                                     </div>
//                                 </div>       
//                              </div> 
//                         `
//                       })








//add item  


const closeModal = () => {
    let modalSection = document.querySelector(".popup-modal");
    modalSection.style.display = "none";

    let popup = document.querySelector(".overlay");
    popup.style.display = "none";

}

$(document).ready(function() {
    $('#delete').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var item = button.data('title')
        var modal = $(this)
        modal.find('.modal-title').text(item)
    })
    $(function() {
        $('#allList').tab('show')
    })
    $(function() {
        $('#card').tab('show')
    })
    $('.icons').click(function() {
        $(this).toggleClass('iconck').siblings().removeClass('iconck')
    })
    $('#turnbf').click(function() {
        $('#turnbf span').addClass('turn')
    })
    $('.turnaf').click(function() {
        $('.turnaf span').toggleClass('turnb')
    })
});





// add the product to the cart 

let allTotal = 0;


function addToCard(element) {
  let mainEl = element.closest(".card")
  let price = mainEl.querySelector(".price").innerText
  let name = mainEl.querySelector(".text-muted").innerText;
  let image = mainEl.querySelector("img").src


  let quantity = mainEl.querySelector("input").value;
 
     
  let itemCart = document.querySelector(".table-body")
  let itemCartComplate = document.querySelector(".table-complet")
  addToCardAlert(quantity)
 
 
  if(parseInt(quantity) > 0) {
    price.substring(1);
   let price_ =  parseInt(price)
    
    let quantity_ =  parseInt(quantity)
    
    let total = price_ * quantity_;
    allTotal += total
    
    
    
    itemCart.innerHTML += `
    <tr class="cart-singl-item">
    <td>
    <div class="rounded"> <img src="${image}" alt="" style=" width: 60px; height: 60px; background-size: cover;"></div>
    </td>
    <td id ="nameItem" class="align-middle text-left">${name}</td>
    <td class="align-middle text-center">${name}</td>
    <td id="remove_price" class="align-middle text-center">${total}$</td>
    <td class="align-middle text-center">${quantity_}</td>
    <td class="align-middle text-center"><button onclick="removeFromCard(this)" class="btn_remove btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></button></td>
   </tr>
   
`  
document.querySelector("#totale").innerText = `Total Product Value: ${allTotal}$`;


itemCartComplate.innerHTML += `
<tr class = "save-item">
<td>
<div class="rounded"> <img src="${image}" alt="" style=" width: 60px; height: 60px; background-size: cover;"></div>
</td>
<td class="align-middle text-left">${name}</td>
<td class="align-middle text-center">${total}$</td>
<td class="align-middle text-center">${quantity_}</td>
</tr>

` 

document.querySelector("#price_products").innerText = allTotal+"$"

}
}


//allow entry to cart if there are no products

let cart_BTN = document.querySelector("#cart-btn").addEventListener("click", checkoutError);

function checkoutError() {
    let keepLogedIn = document.querySelector("#nameItem");

    if(keepLogedIn) {
        localStorage.setItem("itemname","Item-Yes");
        removInputValue()
    }
    else {
         noProductsAdd()
         let AddShoppingCart = document.querySelector("#shopping-cart")
         let addCart = document.querySelector(".card-shopping")
         addCart.style.display = "block";
         AddShoppingCart.style.display = "none";
    }
 }
//drawing the amount of product after adding in 
 function removInputValue() {
           
           document.querySelector("input").value = 0;
          //  document.querySelector(".cart").removeAttribute("disabled");
          //  e.querySelector(".action button").innerText = "Dodaj u korpu";  
 }




// Choose your card type 

 let stepBtn = document.querySelector("#nextStep");
 stepBtn.addEventListener("click", creditCard)

 function creditCard() {
    let cardType = localStorage.getItem("type")

    if(cardType == "card-good") {
        console.log("Goood");
        stepBtn.disabled = false
    }
    else {
        stepBtn.disabled = true
        let cardBody = document.querySelector("#cardBody")
        let cardTitle = document.querySelector("#cardTitle")
        cardTitle.innerText = "YOU MUST CHOOSE THE METHOD OF PAYMENT FOR THE PRODUCT !"
        cardBody.style.color = "#f20000"

    }   
 }
 


let btns = document.querySelectorAll("#fabIcons");

for (let i = 0; i < btns.length; i++) {
    
    btns[i].addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.setItem("type","card-good")
    }

    )
}



//Remove from product

function removeFromCard() {
    let mainEl = document.querySelector(".cart-singl-item");
    let saveItem = document.querySelector(".save-item");
    let price = document.querySelector("#remove_price").innerText  
    price = parseInt(price);
    
    let productsOrder = allTotal -= price
    document.querySelector("#price_products").innerText = productsOrder+"$"

    mainEl.remove();
    saveItem.remove();
    document.querySelector("#totale").innerText = `Ukupna vrijednost proizvoda: $ ${allTotal}`;
    allTotal_0()
             
 
}


function allTotal_0 () {
    if(allTotal == 0) {
        document.querySelector("#stepe").addEventListener("click",function () { 
          alert("You have no products added!")
          window.location.href = "logged-in.html";
        })
    }
}



// product filter 

let btna = document.querySelectorAll("#nav_filer");
let store = document.querySelectorAll(".card");


for (let i = 0; i < btna.length; i++) {
    
    btna[i].addEventListener("click", function (e) {
        e.preventDefault();

        const filter  = e.target.dataset.filter;
        console.log(filter)

        store.forEach((product) => {
            if(filter == "all")  {
              product.style.display = "block";
            }
            else {
                if(product.classList.contains(filter)) {
                    product.style.display = "block"
                }
                else {
                    product.style.display ="none"
                }
            }
        })
    })
}




// serach 
// filter za pretragu 
let serach = document.getElementById("search");

serach.addEventListener("keyup", (e) => {
   e.preventDefault();
   const serchValue = serach.value.toLowerCase().trim();
   
   for(i = 0; i < store.length; i++)  {
     if(store[i].classList.contains(serchValue)) {
         store[i].style.display = "block";
     }
     else if (serchValue == "") {
        store[i].style.display = "block";
     }
     else {
        store[i].style.display = "none";
     }
   }
})




///Order finish  

document.querySelector("#orderFinish").addEventListener("click", orderFinish)

function orderFinish() {
    window.location.href = "logged-in.html";
    localStorage.removeItem("itemname","Item-Yes");
    localStorage.removeItem("type")
}

// Modal pop up alert -add to card
function addToCardAlert(quantity) {
    if(quantity < 1) {
        let displayAlert = document.querySelector("#quantityValue")
        displayAlert.style.display = "block";
         setTimeout(() => {
          let displayAlert = document.querySelector("#quantityValue")
          displayAlert.style.display = "none";
        }, 2000);
          
    } else {
        
  let displayAlert = document.querySelector("#aler")
  displayAlert.style.display = "block";
   setTimeout(() => {
    let displayAlert = document.querySelector("#aler")
    displayAlert.style.display = "none";
  }, 2000);
    }

}

function noProductsAdd() {
        let displayAlert = document.querySelector("#noProducts")
        displayAlert.style.display = "block";
         setTimeout(() => {
          let displayAlert = document.querySelector("#noProducts")
          displayAlert.style.display = "none";
        }, 2000);

}