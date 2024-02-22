  const handy = "handy.png"
let configs = [
//Configs
{
name: "Iphone 14",
description:
  "Das neue Iphone 14 von Apple",
price: "Ab 1500.- CHF",
image: "iphone14.png",
},
{
name: `Samsung S22 Ulleea`,
description:
  "Das neue Samsung Galaxy S22 Ultra von Samsung",
price: "Ab 1500.- CHF",
image: "samsungs22.png"
},
{
name: "Nothing Phone (1)",
description:
  "Das neue Nothing Phone (1) von Nothing",
price: "Ab 600.- CHF",
image: "nothing.png",
},
{
name: `Nokia 2720 Flip <span class="badge rounded-pill text-bg-warning">⭐TOP</span>`,
description:
  "Das ultimative Handy von Nokia",
price: "Ab 9999.- CHF",
image: "Nokia.png",
},
{
name: "Samsung Galaxy S22+",
description:
  "Das neue Samsung Galaxy S22+ von Samsung",
price: "Ab 950.- CHF",
image: "samsungs22+.png",
}
];
let div = (product) => {
console.log(product);
return `<div  class="col-lg-3 col-md-4 col-sm-6 col-12" id="lee">
          <a class="nav-link1" href="http://127.0.0.1:5500/website-project/00-smartgadgets.html">
            <p class="prod1">
              <img src=${product.image} width="auto" height="200" alt="bild">
              ${product.name}<br>${product.price}<br>${product.description}
            </p>
          </a>
        </div>`;
};
const configs_f = () => {
for (let i = 0; i < configs.length; i++) {
document.getElementById("cards").innerHTML += div(configs[i]);
}
};
configs_f();


/*var keys=document.getElementById("key")
var but=document.getElementById("sb")

function searchfun() {
    if(configs.indexOf(Number(keys.value))==-1){
      document.write(keys.value+"<b>Not Found</b>")
    }else{
      document.write(keys.value+"<b>Element found at "+configs.indexOf(Number(keys.value))+" Position</b>"
    }
  
}

but.addEventListener("click",searchfun);



const search = document.getElementById("search"); 
const results = document.getElementById("results");
 let search_term = "";
 const showList = () => {   results.innerHTML = "";
    data     .filter((item) => {return (item.country.toLowerCase().includes(search_term) ||  item.name.toLowerCase().includes(search_term) ); })
.forEach((e) => {const li = document.createElement("li"); li.innerHTML = `<i>Name:</i> ${e.name}  || <i>Country:</i> ${e.country}`; results.appendChild(li);  }); }
 showList(); search.addEventListener("input", (event) => { search_term = event.target.value.toLowerCase(); showList(); });*/