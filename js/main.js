// Product catalog data
const products = [
  {
    id: '001',
    name: 'Produto Premium 1',
    description: 'Descrição detalhada do produto com características especiais e benefícios únicos.',
    originalPrice: 'R$ 129,90',
    price: 'R$ 99,90',
    images: ['assets/001-01.jpg', 'assets/001-02.jpg'],
    badge: 'Novo',
    sold: false
  },
  {
    id: '002',
    name: 'Produto Destaque 2',
    description: 'Produto de alta qualidade com design moderno e funcionalidade excepcional.',
    originalPrice: 'R$ 199,90',
    price: 'R$ 149,90',
    images: ['assets/002-01.jpg'],
    badge: 'Popular',
    sold: false
  },
  {
    id: '003',
    name: 'Produto Exclusivo 3',
    description: 'Item exclusivo com acabamento premium e garantia estendida incluída.',
    originalPrice: 'R$ 249,90',
    price: 'R$ 199,90',
    images: ['assets/003-01.jpg', 'assets/003-02.jpg'],
    badge: 'Destaque',
    sold: true
  },
  {
    id: '004',
    name: 'Produto Especial 4',
    description: 'Produto com excelente custo-benefício e diversas opções de uso.',
    originalPrice: 'R$ 99,90',
    price: 'R$ 79,90',
    images: ['assets/004-01.jpg'],
    badge: 'Oferta',
    sold: false
  },
  {
    id: '005',
    name: 'Produto Premium 5',
    description: 'Qualidade superior com materiais selecionados e design inovador.',
    originalPrice: 'R$ 299,90',
    price: 'R$ 249,90',
    images: ['assets/005-01.jpg'],
    badge: 'Premium',
    sold: false
  }
];

// WhatsApp configuration
const WHATSAPP_NUMBER = '5511967856887';

// Google Analytics event helper
function trackEvent(eventName, eventParams = {}) {
  try {
    // GA4 gtag
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, eventParams);
      return;
    }

    // dataLayer (GTM) fallback
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(Object.assign({ event: eventName }, eventParams));
      return;
    }

    // If no analytics available, log to console (useful for local dev)
    console.info('GA event (mock):', eventName, eventParams);
  } catch (err) {
    // Don't break the app if tracking fails
    console.warn('trackEvent error:', err);
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateYear();
});

// Render all products
function renderProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';

  // Sort products: available first, sold items last
  const sortedProducts = [...products].sort((a, b) => {
    if (a.sold === b.sold) return 0;
    return a.sold ? 1 : -1;
  });

  sortedProducts.forEach((product, index) => {
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

  // Add sold class if product is sold
  if (product.sold) {
    card.classList.add('sold');
  }

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

  // Price container with original and current price
  const priceContainer = document.createElement('div');
  priceContainer.className = 'product-price-container';

  if (product.originalPrice) {
    const originalPrice = document.createElement('div');
    originalPrice.className = 'product-original-price';
    originalPrice.textContent = product.originalPrice;
    priceContainer.appendChild(originalPrice);
  }

  // Row container for price and discount badge
  const priceRow = document.createElement('div');
  priceRow.className = 'product-price-row';

  const currentPrice = document.createElement('div');
  currentPrice.className = 'product-price';
  currentPrice.textContent = product.price;
  priceRow.appendChild(currentPrice);

  // Discount badge
  const discount = calculateDiscount(product.originalPrice, product.price);
  if (discount) {
    const discountBadge = document.createElement('div');
    discountBadge.className = 'product-discount-badge';
    discountBadge.textContent = `${discount}% OFF`;
    priceRow.appendChild(discountBadge);
  }

  priceContainer.appendChild(priceRow);

  const button = document.createElement('a');
  button.className = 'btn-whatsapp';
  button.href = '#';
  button.textContent = product.sold ? 'Produto Vendido' : 'Quero Este!';
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (!product.sold) {
      // Track interest / CTA click
      trackEvent('product_interest_click', {
        product_id: product.id,
        product_name: product.name,
        product_price: product.price,
        product_sold: !!product.sold,
        event_label: 'Quero Este Button'
      });

      sendWhatsApp(product);
    }
  });

  // Disable button if sold
  if (product.sold) {
    button.style.opacity = '0.6';
    button.style.cursor = 'not-allowed';
  }

  body.appendChild(title);
  body.appendChild(description);
  body.appendChild(priceContainer);
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

  // Add click handler to open modal
  container.addEventListener('click', () => {
    // Track image click
    trackEvent('product_image_click', {
      product_id: product.id,
      product_name: product.name,
      product_price: product.price,
      product_sold: !!product.sold,
      event_label: 'Product Image'
    });

    openModal(product, 0);
  });

  // Add sold badge if product is sold
  if (product.sold) {
    const soldBadge = document.createElement('span');
    soldBadge.className = 'product-badge sold-badge';
    soldBadge.textContent = 'VENDIDO';
    container.appendChild(soldBadge);
  } else if (product.badge) {
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
      dot.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent modal from opening when clicking dots
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

// Calculate discount percentage
function calculateDiscount(originalPrice, currentPrice) {
  // Guard: ensure we have price strings
  if (!originalPrice || !currentPrice || typeof originalPrice !== 'string' || typeof currentPrice !== 'string') {
    return null;
  }

  // Extract numeric values from price strings (e.g. 'R$ 129,90' -> 129.90)
  const original = parseFloat(originalPrice.replace(/[^\\d,]/g, '').replace(',', '.'));
  const current = parseFloat(currentPrice.replace(/[^\\d,]/g, '').replace(',', '.'));

  if (original && current && original > current) {
    return ((original - current) / original * 100).toFixed(0);
  }
  return null;
}

// Update footer year
function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Modal functionality
let currentModal = null;
let currentModalIndex = 0;
let modalAutoRotate = null;

function openModal(product, startIndex = 0) {
  // Create modal element
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'productModal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.innerHTML = '×';
  closeBtn.setAttribute('aria-label', 'Fechar');
  closeBtn.addEventListener('click', closeModal);

  // Carousel container
  const carouselContainer = document.createElement('div');
  carouselContainer.className = 'modal-carousel';

  // Add images
  product.images.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.className = `modal-carousel-image ${index === startIndex ? 'active' : ''}`;
    img.src = imgSrc;
    img.alt = `${product.name} - Imagem ${index + 1}`;
    carouselContainer.appendChild(img);
  });

  // Navigation buttons (only if multiple images)
  if (product.images.length > 1) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'modal-carousel-nav prev';
    prevBtn.innerHTML = '‹';
    prevBtn.setAttribute('aria-label', 'Imagem anterior');
    prevBtn.addEventListener('click', () => navigateModal(-1, product.images.length));

    const nextBtn = document.createElement('button');
    nextBtn.className = 'modal-carousel-nav next';
    nextBtn.innerHTML = '›';
    nextBtn.setAttribute('aria-label', 'Próxima imagem');
    nextBtn.addEventListener('click', () => navigateModal(1, product.images.length));

    carouselContainer.appendChild(prevBtn);
    carouselContainer.appendChild(nextBtn);

    // Dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'modal-carousel-dots';

    product.images.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `modal-carousel-dot ${index === startIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir para imagem ${index + 1}`);
      dot.addEventListener('click', () => goToModalImage(index, product.images.length));
      dotsContainer.appendChild(dot);
    });

    carouselContainer.appendChild(dotsContainer);
  }

  // Product info
  const info = document.createElement('div');
  info.className = 'modal-info';

  // Add sold class to modal content if product is sold
  if (product.sold) {
    modalContent.classList.add('modal-sold');
  }

  const title = document.createElement('h3');
  title.className = 'modal-product-title';
  title.textContent = product.name;

  // Add sold badge in modal if product is sold
  if (product.sold) {
    const soldBadge = document.createElement('span');
    soldBadge.className = 'modal-sold-badge';
    soldBadge.textContent = 'VENDIDO';
    title.appendChild(soldBadge);
  }

  // Price section with original price
  if (product.originalPrice) {
    const originalPrice = document.createElement('div');
    originalPrice.className = 'modal-product-original-price';
    originalPrice.textContent = product.originalPrice;
    info.appendChild(originalPrice);
  }

  // Row container for price and discount badge
  const priceRow = document.createElement('div');
  priceRow.className = 'modal-price-row';

  const price = document.createElement('div');
  price.className = 'modal-product-price';
  price.textContent = product.price;
  priceRow.appendChild(price);

  // Discount badge in modal (only if not sold)
  if (!product.sold) {
    const discount = calculateDiscount(product.originalPrice, product.price);
    if (discount) {
      const discountBadge = document.createElement('div');
      discountBadge.className = 'modal-discount-badge';
      discountBadge.textContent = `${discount}% OFF`;
      priceRow.appendChild(discountBadge);
    }
  }

  const description = document.createElement('p');
  description.className = 'modal-product-description';
  description.textContent = product.description;

  const whatsappBtn = document.createElement('a');
  whatsappBtn.className = 'modal-whatsapp-btn';
  whatsappBtn.href = '#';
  whatsappBtn.textContent = product.sold ? 'Produto Vendido' : 'Entrar em Contato';
  whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!product.sold) {
      // Track modal contact click
      trackEvent('product_contact_click', {
        product_id: product.id,
        product_name: product.name,
        product_price: product.price,
        product_sold: !!product.sold,
        event_label: 'Modal Entrar em Contato'
      });

      sendWhatsApp(product);
    }
  });

  // Disable button if sold
  if (product.sold) {
    whatsappBtn.style.opacity = '0.6';
    whatsappBtn.style.cursor = 'not-allowed';
    whatsappBtn.style.pointerEvents = 'none';
  }

  info.appendChild(title);
  info.appendChild(priceRow);
  info.appendChild(description);
  info.appendChild(whatsappBtn);

  // Assemble modal
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(carouselContainer);
  modalContent.appendChild(info);
  modal.appendChild(modalContent);

  // Add to body
  document.body.appendChild(modal);

  // Store current modal reference
  currentModal = modal;
  currentModalIndex = startIndex;

  // Show modal with slight delay for animation
  setTimeout(() => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }, 10);

  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on ESC key
  document.addEventListener('keydown', handleModalKeyboard);

  // Auto-rotate if multiple images
  if (product.images.length > 1) {
    startModalAutoRotate(product.images.length);
  }
}

function closeModal() {
  if (currentModal) {
    currentModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling

    // Remove modal after animation
    setTimeout(() => {
      if (currentModal && currentModal.parentNode) {
        currentModal.parentNode.removeChild(currentModal);
      }
      currentModal = null;
    }, 300);

    // Clear auto-rotate
    if (modalAutoRotate) {
      clearInterval(modalAutoRotate);
      modalAutoRotate = null;
    }

    // Remove keyboard listener
    document.removeEventListener('keydown', handleModalKeyboard);
  }
}

function navigateModal(direction, totalImages) {
  currentModalIndex = (currentModalIndex + direction + totalImages) % totalImages;
  updateModalImage();
  resetModalAutoRotate(totalImages);
}

function goToModalImage(index, totalImages) {
  currentModalIndex = index;
  updateModalImage();
  resetModalAutoRotate(totalImages);
}

function updateModalImage() {
  if (!currentModal) return;

  const images = currentModal.querySelectorAll('.modal-carousel-image');
  const dots = currentModal.querySelectorAll('.modal-carousel-dot');

  images.forEach((img, i) => {
    img.classList.toggle('active', i === currentModalIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentModalIndex);
  });
}

function startModalAutoRotate(totalImages) {
  modalAutoRotate = setInterval(() => {
    currentModalIndex = (currentModalIndex + 1) % totalImages;
    updateModalImage();
  }, 4000);
}

function resetModalAutoRotate(totalImages) {
  if (modalAutoRotate) {
    clearInterval(modalAutoRotate);
    startModalAutoRotate(totalImages);
  }
}

function handleModalKeyboard(e) {
  if (!currentModal) return;

  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    const images = currentModal.querySelectorAll('.modal-carousel-image');
    navigateModal(-1, images.length);
  } else if (e.key === 'ArrowRight') {
    const images = currentModal.querySelectorAll('.modal-carousel-image');
    navigateModal(1, images.length);
  }
}
