let cart=0;
const nav=document.querySelector(".nav"), menu=document.querySelector(".mobile-menu");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
function addCart(name){cart++;document.getElementById("cartCount").textContent=cart;toast(name+" added to cart");}
function showCart(){toast(cart?`You have ${cart} item${cart>1?"s":""} in your cart.`:"Your cart is empty — explore our products.");}
function toast(msg){const t=document.querySelector(".toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove("show"),2400)}
document.getElementById("subscribe")?.addEventListener("submit",e=>{e.preventDefault();e.target.reset();toast("Thanks for joining Daily Millets!");});
