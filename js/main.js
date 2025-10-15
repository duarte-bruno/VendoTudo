// JavaScript to dynamically populate the product catalog with carousel functionality
const products = [
  {
    name: "Produto 1",
    description: "Descrição do Produto 1",
    price: "R$ 100,00",
    images: ["assets/001-01.jpg", "assets/001-02.jpg"],
  },
  {
    name: "Produto 2",
    description: "Descrição do Produto 2",
    price: "R$ 200,00",
    images: ["assets/002-01.jpg"],
  },
  {
    name: "Produto 3",
    description: "Descrição do Produto 3",
    price: "R$ 300,00",
    images: ["assets/003-01.jpg", "assets/003-02.jpg"],
  },
  {
    name: "Produto 4",
    description: "Descrição do Produto 4",
    price: "R$ 400,00",
    images: ["assets/004-01.jpg"],
  },
  {
    name: "Produto 5",
    description: "Descrição do Produto 5",
    price: "R$ 500,00",
    images: ["assets/005-01.jpg"],
  },
];

const productsContainer = document.getElementById("products");
const yearSpan = document.getElementById("year");

// Set the current year in the footer
yearSpan.textContent = new Date().getFullYear();

// Populate the product catalog dynamically
products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.className = "product";

  const carouselId = `carousel-${product.name.replace(/\s+/g, "-").toLowerCase()}`;

  const imagesHtml = product.images
    .map(
      (image, index) => `
        <div class="carousel-item${index === 0 ? " active" : ""}">
          <img src="${image}" alt="${product.name}" class="product-image" />
        </div>
      `
    )
    .join("");

  productCard.innerHTML = `
    <div class="product-row">
      <div id="${carouselId}" class="carousel" data-current="0">
        ${imagesHtml}
      </div>
      <div class="product-body">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-desc">${product.description}</p>
        <div class="product-meta">
          <span class="price">${product.price}</span>
          <div class="actions">
            <a href="https://wa.me/5511967856887?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20produto%20${encodeURIComponent(
              product.name
            )}" class="btn" target="_blank">Quero</a>
          </div>
        </div>
      </div>
    </div>
  `;

  productsContainer.appendChild(productCard);

  // Add carousel functionality
  const carousel = productCard.querySelector(`#${carouselId}`);
  let currentIndex = 0;

  carousel.addEventListener("click", () => {
    const items = carousel.querySelectorAll(".carousel-item");
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  });
});
