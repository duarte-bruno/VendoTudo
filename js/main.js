// JavaScript to dynamically populate the product catalog with Bootstrap components
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
  productCard.className = "col-md-6 col-lg-4";

  const carouselId = `carousel-${product.name.replace(/\s+/g, "-").toLowerCase()}`;

  const imagesHtml = product.images
    .map(
      (image, index) => `
        <div class="carousel-item${index === 0 ? " active" : ""}">
          <img src="${image}" class="d-block w-100" alt="${product.name}" />
        </div>
      `
    )
    .join("");

  productCard.innerHTML = `
    <div class="card h-100">
      <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${imagesHtml}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text fw-bold">${product.price}</p>
        <a href="https://wa.me/5511967856887?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20produto%20${encodeURIComponent(
          product.name
        )}" class="btn btn-success">Quero</a>
      </div>
    </div>
  `;

  productsContainer.appendChild(productCard);
});
