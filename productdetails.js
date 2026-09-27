const products = [
  { name: "Sort Kjole", price: 499, image: "img/sort_kjole.webp", size: "XS, S, M, L, XL", description: "simpel og elegant sort kjole, der passer til både hvrdag og fest", category: "Dresses" },
  { name: "Hvid Skjorte", price: 299, image: "img/hvid_skjorte.webp", size: "XS, S, M, L, XL", description: "klassisk hvid skjorte som passer til enhver begivenhed", category: "Shirts" },
  { name: "Blå Jeans", price: 599, image: "img/jeans.jpg", size: "XS, S, M, L, XL", description: "klassiske blå jeans som er en stable i enhver garderobe", category: "Jeans" },
];
const params = new URLSearchParams(window.location.search);
const productName = params.get("name");
const product = products.find((product) => product.name === productName);
const productDetails = document.querySelector("#product-details");
productDetails.innerHTML = ` <img src="${product.image}" alt="${product.name}"> <h1>${product.name}</h1> <p>${product.price} kr.</p> <p>Størrelser: ${product.size}</p> <p>${product.description}<p> `;
