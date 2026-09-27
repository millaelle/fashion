const categories = [
  {
    name: "Dresses",
  },
  {
    name: "Shirts",
  },
  {
    name: "Jeans",
  },
];

const categoryList = document.querySelector("#categories");

categories.forEach((category) => {
  categoryList.innerHTML += `
    <a href="productlist.html?category=${category.name}">
      <h2>${category.name}</h2>
    </a>
  `;
});
