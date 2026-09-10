const products = [
  ["Browntop Millet Rice","500 g","149","assets/browntop.jpg","High in Fiber","Supports Heart Health"],
  ["Ragi Flour","500 g","149","assets/quinoa.jpg","Rich in Calcium","Good for Bones"],
  ["Millet Pasta","200 g","129","assets/pasta-foxtail.jpg","High in Protein","Healthy Alternative"],
  ["Millet Cookies","200 g","149","assets/cookies.jpg","Tasty & Nutritious","Loved by Kids"],
  ["Little Millet Rice","500 g","149","assets/little.jpg","Easy to Digest","Helps in Weight Management"],
  ["Foxtail Millet Rice","500 g","149","assets/proso.jpg","Rich in Nutrients","Supports Active Lifestyle"]
];

const grid = document.getElementById("productGrid");
const toast = document.getElementById("toast");

function renderProducts(list = products){
  grid.innerHTML = list.map((p,i)=>`
    <article class="product-card">
      <button class="heart" aria-label="Wishlist">♡</button>
      <img src="${p[3]}" alt="${p[0]}">
      <h3>${p[0]}</h3>
      <div class="rating">★★★★★ <span style="color:#555">4.${8-i}</span></div>
      <div class="feature">🌿 ${p[4]}<br>♡ ${p[5]}</div>
      <div class="price">₹${p[2]}</div>
      <button class="add" data-name="${p[0]}">🛒 Add to Cart</button>
    </article>`).join("");
}
renderProducts();

document.addEventListener("click", e=>{
  const add = e.target.closest(".add");
  if(add){
    toast.textContent = `${add.dataset.name} added to cart ✓`;
    toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"),1800);
  }
  const heart = e.target.closest(".heart");
  if(heart) heart.textContent = heart.textContent==="♡" ? "♥" : "♡";
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".nav").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav").classList.remove("open")));

document.getElementById("searchInput").addEventListener("input", e=>{
  const q=e.target.value.trim().toLowerCase();
  renderProducts(q ? products.filter(p=>p[0].toLowerCase().includes(q)) : products);
});

document.getElementById("subscribe").addEventListener("submit", e=>{
  e.preventDefault();
  toast.textContent="Thanks! You're on the millet list 🌱";
  toast.classList.add("show");
  e.target.reset();
  setTimeout(()=>toast.classList.remove("show"),2200);
});
