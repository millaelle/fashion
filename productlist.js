const products = [
  {
    name: "Sort Kjole",
    price: 499,
    image: "img/sort_kjole.webp",
    size: "XS, S, M, L, XL",
    category: "Dresses",
  },
  {
    name: "Hvid Skjorte",
    price: 299,
    image: "img/hvid_skjorte.webp",
    size: "XS, S, M, L, XL",
    category: "Shirts",
  },
  {
    name: "Blå Jeans",
    price: 599,
    image: "img/jeans.jpg",
    size: "XS, S, M, L, XL",
    category: "Jeans",
  },
];

const productList = document.querySelector("#product-list");

// Hent kategorien fra URL'en
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("category");

// Filtrer produkterne
const filteredProducts = products.filter((product) => product.category === selectedCategory);

// Vis kun de filtrerede produkter
filteredProducts.forEach((product) => {
  productList.innerHTML += `
    <article>
      <a href="productdetails.html?name=${encodeURIComponent(product.name)}">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price} kr.</p>
        <p>${product.size}</p>
      </a>
    </article>
  `;
});
