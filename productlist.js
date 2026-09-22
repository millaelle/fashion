const products = [
  {
    name: "Sort Kjole",
    price: 499,
    image: "img/sort_kjole.webp",
    size: "XS, S, M, L, XL",
  },
  {
    name: "Hvid Skjorte",
    price: 299,
    image: "img/hvid_skjorte.webp",
    size: "XS, S, M, L, XL",
  },
  {
    name: "Blå Jeans",
    price: 599,
    image: "img/jeans.jpg",
    size: "XS, S, M, L, XL",
  },
];

const productList = document.querySelector("#product-list");

products.forEach((product) => {
  productList.innerHTML += `
    <article>
      <a href="productdetails.html">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price} kr.</p>
        <p>${product.size}</p>
      </a>
    </article>
  `;
});
