// Product catalog data
const products = [
  {
    id: '001',
    name: 'Produto Premium 1',
    description: 'Descrição detalhada do produto com características especiais e benefícios únicos.',
    price: 'R$ 99,90',
    images: ['assets/001-01.jpg', 'assets/001-02.jpg'],
    badge: 'Novo'
  },
  {
    id: '002',
    name: 'Produto Destaque 2',
    description: 'Produto de alta qualidade com design moderno e funcionalidade excepcional.',
    price: 'R$ 149,90',
    images: ['assets/002-01.jpg'],
    badge: 'Popular'
  },
  {
    id: '003',
    name: 'Produto Exclusivo 3',
    description: 'Item exclusivo com acabamento premium e garantia estendida incluída.',
    price: 'R$ 199,90',
    images: ['assets/003-01.jpg', 'assets/003-02.jpg'],
    badge: 'Destaque'
  },
  {
    id: '004',
    name: 'Produto Especial 4',
    description: 'Produto com excelente custo-benefício e diversas opções de uso.',
    price: 'R$ 79,90',
    images: ['assets/004-01.jpg'],
    badge: 'Oferta'
  },
  {
    id: '005',
    name: 'Produto Premium 5',
    description: 'Qualidade superior com materiais selecionados e design inovador.',
    price: 'R$ 249,90',
    images: ['assets/005-01.jpg'],
    badge: 'Premium'
  }
];

// WhatsApp configuration
const WHATSAPP_NUMBER = '5511999999999'; // Replace with your WhatsApp number

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateYear();
});

// Render all products
function renderProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';

  products.forEach((product, index) => {
    const productCard = createProductCard(product, index);
    container.appendChild(productCard);
  });
}

// Create a product card element
function createProductCard(product, index) {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4';

  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.animationDelay = `${index * 0.1}s`;

  // Image carousel
  const imageContainer = createImageCarousel(product);

  // Card body
  const body = document.createElement('div');
  body.className = 'product-body';

  const title = document.createElement('h2');
  title.className = 'product-title';
  title.textContent = product.name;

  const description = document.createElement('p');
  description.className = 'product-description';
  description.textContent = product.description;

  const price = document.createElement('div');
  price.className = 'product-price';
  price.innerHTML = `${product.price}`;

  const button = document.createElement('a');
  button.className = 'btn-whatsapp';
  button.href = '#';
  button.textContent = 'Quero Este!';
  button.addEventListener('click', (e) => {
    e.preventDefault();
    sendWhatsApp(product);
  });

  body.appendChild(title);
  body.appendChild(description);
  body.appendChild(price);
  body.appendChild(button);

  card.appendChild(imageContainer);
  card.appendChild(body);
  col.appendChild(card);

  return col;
}

// Create image carousel
function createImageCarousel(product) {
  const container = document.createElement('div');
  container.className = 'product-image-container';

  if (product.badge) {
    const badge = document.createElement('span');
    badge.className = 'product-badge';
    badge.textContent = product.badge;
    container.appendChild(badge);
  }

  if (product.images.length === 1) {
    const img = document.createElement('img');
    img.className = 'product-image';
    img.src = product.images[0];
    img.alt = product.name;
    img.loading = 'lazy';
    container.appendChild(img);
  } else {
    const carousel = document.createElement('div');
    carousel.className = 'product-carousel';

    let currentIndex = 0;

    // Create images
    product.images.forEach((imgSrc, index) => {
      const img = document.createElement('img');
      img.className = `carousel-image ${index === 0 ? 'active' : ''}`;
      img.src = imgSrc;
      img.alt = `${product.name} - Imagem ${index + 1}`;
      img.loading = 'lazy';
      carousel.appendChild(img);
    });

    // Create dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';

    product.images.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Imagem ${index + 1}`);
      dot.addEventListener('click', () => {
        showImage(index);
      });
      dotsContainer.appendChild(dot);
    });

    carousel.appendChild(dotsContainer);
    container.appendChild(carousel);

    // Auto-rotate images
    let autoRotate = setInterval(() => {
      currentIndex = (currentIndex + 1) % product.images.length;
      showImage(currentIndex);
    }, 3000);

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
      clearInterval(autoRotate);
    });

    carousel.addEventListener('mouseleave', () => {
      autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % product.images.length;
        showImage(currentIndex);
      }, 3000);
    });

    function showImage(index) {
      currentIndex = index;
      const images = carousel.querySelectorAll('.carousel-image');
      const dots = dotsContainer.querySelectorAll('.carousel-dot');

      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
  }

  return container;
}

// Send WhatsApp message
function sendWhatsApp(product) {
  const message = `Olá! Tenho interesse no produto: *${product.name}* (${product.price})`;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

// Update footer year
function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
