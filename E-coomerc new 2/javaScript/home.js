// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{

//      shoppingcss.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }
let btnMain = document.querySelector(".mainBtn");
btnMain.addEventListener("click", mainBtn);
function mainBtn (e) {
 e.preventDefault()
 window.open("howToShop.html");
}
 




let shoppingcss = document.querySelector('.shopping-css');

document.querySelector('#cart-btn').onclick = () =>{
    noLogin()
    // shoppingcss.classList.toggle('active');
    // searchForm.classList.remove('active');
    // loginForm.classList.remove('active');
    // navbar.classList.remove('active');
}

function noLogin() {
    alert("Niste registrovani na nas web Shop")
}




let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


//  let howTShop = document.querySelector("#");
//           howTShop.addEventListener("click", function () {
//           let displayAlert = document.querySelector("#howToShop")
//           displayAlert.style.display = "block";
//  }) 



//transition
var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

function addToCard (e) {
    alert("Niste prijavljeni !!!")
}



// photo zoom

let zoomer = function (){
  document.querySelector('#img-zoomer-box')
    .addEventListener('mousemove', function(e) {

    let original = document.querySelector('#img-1'),
        magnified = document.querySelector('#img-2'),
        style = magnified.style,
        x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        imgWidth = original.offsetWidth,
        imgHeight = original.offsetHeight,
        xperc = ((x/imgWidth) * 100),
        yperc = ((y/imgHeight) * 100);

    //lets user scroll past right edge of image
    if(x > (.01 * imgWidth)) {
      xperc += (.15 * xperc);
    };

    //lets user scroll past bottom edge of image
    if(y >= (.01 * imgHeight)) {
      yperc += (.15 * yperc);
    };

    style.backgroundPositionX = (xperc - 9) + '%';
    style.backgroundPositionY = (yperc - 9) + '%';

    style.left = (x - 180) + 'px';
    style.top = (y - 180) + 'px';

  }, false);
}();


///////////////// Reviews/////////////////7

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let trenutnaStavka = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson()
});

function showPerson() {
  const item = reviews[trenutnaStavka];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
  job.textContent = item.job;
}

prevBtn.addEventListener('click',function () {
   trenutnaStavka++
   if(trenutnaStavka > reviews.length -1) {
     trenutnaStavka = 0;
   }
   showPerson();
 
})

nextBtn.addEventListener('click',function () {
  trenutnaStavka--
  if(trenutnaStavka < 0) {
    trenutnaStavka = reviews.length -1;
  }
  showPerson();

})

randomBtn.addEventListener('click', function () {
  trenutnaStavka = Math.floor(Math.random() * reviews.length);
  console.log()
  showPerson()
})