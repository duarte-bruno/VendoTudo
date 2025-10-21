// Product catalog data
const products = [
  {
    id: '001',
    name: 'Apple iPad Air 2ª Geração 64Gb',
    description: 'Apple iPad Air 2ª Geração, 64Gb de armazenamento, cor cinza espacial, carregador original (sem cabo), 2Gb de memória ram, tela: 9.7 ", wifi, perfeito estado de uso e consevação e capa protetora azul marinho de brinde.',
    originalPrice: 'R$ 899,90',
    price: 'R$ 299,90',
    images: 3,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '002',
    name: 'Apple Watch Series 3 (gps) 38mm',
    description: 'Apple Watch Series 3 (gps) 38mm, cor cinza espacial, pulseira original M e S, cabo de carregamento original, caixa original com manual, funcionando perfeitamente mas com algumas marcas de uso na tela.',
    originalPrice: 'R$ 499,90',
    price: 'R$ 149,90',
    images: 3,
    badge: 'Usado',
    sold: true
  },
  {
    id: '003',
    name: 'One by Wacom (Mesa digitalizadora)',
    description: 'Mesa Digitalizadora One By Wacom CTL-472, Área de trabalho de 15.2 cm x 9.5 cm, Resolução da imagem: 5080 dpi, Inclui cabo USB.',
    originalPrice: 'R$ 149,90',
    price: 'R$ 69,90',
    images: 4,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '004',
    name: 'Samsung Chromebook XE303C12-AD1BR',
    description: 'Modelo XE303C12-AD1BR, Capacidade de disco SSD 16 GB, memória RAM 4 GB, tela 15 ", Sistema operacional Chrome OS',
    originalPrice: 'R$ 299,90',
    price: 'R$ 89,90',
    images: 4,
    badge: 'Usado',
    sold: false
  },
  {
    id: '005',
    name: 'Fone de ouvido Bluetooth',
    description: 'Fone de ouvido Bluetooth, modelo sem fio, com microfone embutido, bateria recarregável, compatível com dispositivos iOS e Android.',
    originalPrice: 'R$ 89,90',
    price: 'R$ 29,90',
    images: 3,
    badge: 'Usado',
    sold: false
  },
  {
    id: '006',
    name: 'Nintendo Game Boy Advance + Game Boy Advance + Jogos',
    description: 'Nintendo Game Boy Advance cor índigo (pilhas), Game Boy Advance SP (bateria recarregável), 5 Jogos originais (Mario Kart, Pokemon Sapphire, Pokemon Fire Red, Frogger`s Adventures, X-Men), Carregador, Cabo link para jogos multiplayer.',
    originalPrice: 'R$ 1599,90',
    price: 'R$ 399,90',
    images: 4,
    badge: 'Imperdível',
    sold: false
  },
  {
    id: '007',
    name: 'Assento Redutor Com Escada',
    description: 'Assento Redutor Com Escada Troninho Infantil Desfralde de criança Azul',
    originalPrice: 'R$ 119,90',
    price: 'R$ 59,90',
    images: 3,
    badge: 'Usado',
    sold: false
  },
  {
    id: '008',
    name: 'Climatizador de Ar Portátil',
    description: 'Climatizador e ventilador de Ar Portátil, 3 em 1, tanque de água de 4 litros',
    originalPrice: 'R$ 619,90',
    price: 'R$ 299,90',
    images: 4,
    badge: 'Usado',
    sold: false
  },
  {
    id: '009',
    name: 'Troninho Privadinha Infantil',
    description: 'Troninho Privadinha Infantil Assento Redutor Som Descarga Cor Azul Liso',
    originalPrice: 'R$ 199,90',
    price: 'R$ 59,90',
    images: 3,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '010',
    name: 'Assento elevatório Chicco para alimentação',
    description: 'Assento elevatório Chicco para alimentação portátil, dobrável, com cinto de segurança, cor cinza, 3 nídeis de altura.',
    originalPrice: 'R$ 299,90',
    price: 'R$ 99,90',
    images: 5,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '011',
    name: 'Mochila Canguru Ergônomico',
    description: 'Mochila Canguru Ergônomico vermelho com assento.',
    originalPrice: 'R$ 144,45',
    price: 'R$ 39,90',
    images: 3,
    badge: 'Usado',
    sold: true
  },
  {
    id: '012',
    name: 'Bolas piscina bolinha',
    description: 'Bolas para piscina bolinha coloridas',
    originalPrice: 'R$ 49,90',
    price: 'R$ 9,90',
    images: 2,
    badge: 'Usado',
    sold: false
  },
  {
    id: '013',
    name: 'Almofada para Lombar',
    description: 'Encosto Lombar Ergonômico – Mais Conforto e Saúde no Seu Dia a Dia',
    originalPrice: 'R$ 59,90',
    price: 'R$ 16,90',
    images: 2,
    badge: 'Usado',
    sold: false
  },
  {
    id: '014',
    name: 'Bola de Ginástica e Pilates Tam 2',
    description: 'Bola de Ginástica e Pilates Tam 2 Nyamba Bordo cor vinho.',
    originalPrice: 'R$ 139,90',
    price: 'R$ 49,90',
    images: 3,
    badge: 'Usado',
    sold: false
  },
  {
    id: '015',
    name: 'Carrinho Infanti Travel System Sky Trio Grey Classic 3 Em 1 Cor do chassi Cromado + Isofix',
    description: 'Carrinho Infanti Travel System Sky Trio Grey Classic 3 Em 1 (Com Bebe comforto) + Base isofix',
    originalPrice: 'R$ 3299,00',
    price: 'R$ 699,90',
    images: 9,
    badge: 'Imperdível',
    sold: false
  },
  {
    id: '016',
    name: 'Cadeixa de escritório off-white',
    description: 'Cadeixa de escritório off-white com estrutura em metal.',
    originalPrice: 'R$ 699,90',
    price: 'R$ 199,90',
    images: 1,
    badge: 'Usado',
    sold: false
  },
  {
    id: '017',
    name: 'Saco De Pancada Outshock',
    description: 'Saco De Pancada Outshock vermelho para iniciantes + Suporte de parede em aço (suporta sacos mais pesados)',
    originalPrice: 'R$ 499,90',
    price: 'R$ 149,90',
    images: 2,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '018',
    name: 'Tapete redondo',
    description: 'Tapete redondo azul bebê',
    originalPrice: 'R$ 99,90',
    price: 'R$ 29,90',
    images: 1,
    badge: 'Usado',
    sold: false
  },
  {
    id: '019',
    name: 'Cachorro de pelucia',
    description: 'Cachorro de pelucia branco e rosa.',
    originalPrice: 'R$ 59,90',
    price: 'R$ 16,90',
    images: 1,
    badge: 'Usado',
    sold: false
  },
  {
    id: '020',
    name: 'Bomba Extratora Tira Leite Materno Elétrica Smart G-Tech',
    description: 'Bomba Extratora Tira Leite Materno Elétrica Smart G-Tech, 4 Níveis de Ajuste de Sucção',
    originalPrice: 'R$ 155,90',
    price: 'R$ 49,90',
    images: 2,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '021',
    name: 'Kit bolsa para bebê',
    description: 'Kit bolsa para bebê, cor branca com detalhes em azul.',
    originalPrice: 'R$ 199,90',
    price: 'R$ 49,90',
    images: 6,
    badge: 'Usado',
    sold: true
  },
  {
    id: '022',
    name: 'Kit berço 300 fios',
    description: 'Kit berço 300 fios inisex com 4 almofadas decorativas e 1 trocador.',
    originalPrice: 'R$ 999,90',
    price: 'R$ 99,90',
    images: 2,
    badge: 'Usado',
    sold: false
  },
  {
    id: '023',
    name: 'Kit berço 150 fios',
    description: 'Kit berço 150 fios azul com 2 almofadas decorativas.',
    originalPrice: 'R$ 59,90',
    price: 'R$ 19,90',
    images: 1,
    badge: 'Usado',
    sold: false
  },
  {
    id: '024',
    name: 'Bebedouro para cachorro',
    description: 'Bebedouro para cachorro na cor rosa com regulagem de altura.',
    originalPrice: 'R$ 49,90',
    price: 'R$ 16,90',
    images: 2,
    badge: 'Usado',
    sold: false
  },
  {
    id: '025',
    name: 'Livro Anamnese E Exame Fisico 2Ed',
    description: 'Livro Anamnese E Exame Fisico 2Ed',
    originalPrice: 'R$ 90,00',
    price: 'R$ 19,90',
    images: 1,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '026',
    name: 'Livro Rang & Dale Farmacologia',
    description: 'Livro Rang & Dale Farmacologia',
    originalPrice: 'R$ 199,90',
    price: 'R$ 99,90',
    images: 1,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '027',
    name: 'Livro Gestão Em Enfermagem, Ferramenta Para Prática',
    description: 'desc',
    originalPrice: 'R$ 45,90',
    price: 'R$ 14,90',
    images: 1,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '028',
    name: 'Livro diagnósticos enfermagem da NANDA',
    description: 'Livro diagnósticos enfermagem da NANDA',
    originalPrice: 'R$ 147,90',
    price: 'R$ 19,90',
    images: 1,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '029',
    name: 'Livro Centro Cirúrgico: Planejamento, Organização E Gestão De João Francisco Possari',
    description: 'Livro Centro Cirúrgico: Planejamento, Organização E Gestão De João Francisco Possari',
    originalPrice: 'R$ 35,90',
    price: 'R$ 9,90',
    images: 1,
    badge: 'Quase novo',
    sold: false
  },
  {
    id: '030',
    name: 'Bomba Extrator Elétrico Leite Materno Fisher-Price',
    description: 'Bomba Extrator Elétrico de Leite Materno Fisher-Price, com extração e massagem com 15 níveis de sucção e 10 níveis de massagem.',
    originalPrice: 'R$ 569,90',
    price: 'R$ 249,90',
    images: 3,
    badge: 'Usado',
    sold: false
  },
  {
    id: '031',
    name: 'Tapete Educativo Infantil Colorido',
    description: 'Tapete Educativo Infantil Colorido Alfanumérico (algumas peças faltando)',
    originalPrice: 'R$ 99,90',
    price: 'R$ 29,90',
    images: 1,
    badge: 'Usado',
    sold: false
  },
  {
    id: '032',
    name: 'Trocador azul para bebê',
    description: 'Trocador azul para bebê',
    originalPrice: 'R$ 69,90',
    price: 'R$ 14,90',
    images: 1,
    badge: 'Usado',
    sold: false
  },
  {
    id: '033',
    name: 'Retrovisor De Bebe Conforto Buba',
    description: 'Retrovisor De Bebe Conforto Buba Espelho Interno Redondo',
    originalPrice: 'R$ 59,90',
    price: 'R$ 19,90',
    images: 2,
    badge: 'Usado',
    sold: true
  }
];

// helper: construct image path from product id and zero-based index
function getProductImageSrc(productId, index) {
  const idx = String(index + 1).padStart(2, '0');
  return `assets/${productId}-${idx}.jpg`;
}

// helper: fallback for broken images
function applyImageFallback(img) {
  function handler() {
    // remove this handler to prevent loops
    img.removeEventListener('error', handler);
    img.src = 'assets/mega-sale.jpg';
  }
  img.addEventListener('error', handler);
}

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
  const discountBadge = document.createElement('div');
  discountBadge.className = 'product-discount-badge';
  discountBadge.textContent = `${discount}% OFF`;
  if (Number(discount) === 0) {
    discountBadge.classList.add('no-discount');
  }
  priceRow.appendChild(discountBadge);

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

  const count = Array.isArray(product.images) ? product.images.length : (Number(product.images) || 0);

  if (count <= 1) {
    const img = document.createElement('img');
    img.className = 'product-image';
    if (Array.isArray(product.images) && product.images[0]) {
      img.src = product.images[0];
    } else {
      img.src = getProductImageSrc(product.id, 0);
    }
    applyImageFallback(img);
    img.alt = product.name;
    img.loading = 'lazy';
    container.appendChild(img);
  } else {
    const carousel = document.createElement('div');
    carousel.className = 'product-carousel';

    let currentIndex = 0;

    // Create images
    for (let index = 0; index < count; index++) {
      const img = document.createElement('img');
      img.className = `carousel-image ${index === 0 ? 'active' : ''}`;
      if (Array.isArray(product.images) && product.images[index]) {
        img.src = product.images[index];
      } else {
        img.src = getProductImageSrc(product.id, index);
      }
      applyImageFallback(img);
      img.alt = `${product.name} - Imagem ${index + 1}`;
      img.loading = 'lazy';
      carousel.appendChild(img);
    }

    // Create dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';

    for (let index = 0; index < count; index++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Imagem ${index + 1}`);
      dot.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent modal from opening when clicking dots
        showImage(index);
      });
      dotsContainer.appendChild(dot);
    }

    carousel.appendChild(dotsContainer);
    container.appendChild(carousel);

    // Auto-rotate images
    let autoRotate = setInterval(() => {
      currentIndex = (currentIndex + 1) % count;
      showImage(currentIndex);
    }, 3000);

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
      clearInterval(autoRotate);
    });

    carousel.addEventListener('mouseleave', () => {
      autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % count;
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
  // Try to parse numeric values from price strings (e.g. 'R$ 129,90' -> 129.90)
  try {
    const origStr = (typeof originalPrice === 'string') ? originalPrice : String(originalPrice || '');
    const currStr = (typeof currentPrice === 'string') ? currentPrice : String(currentPrice || '');
    const original = parseFloat(origStr.replace(/[^\d,]/g, '').replace(',', '.'));
    const current = parseFloat(currStr.replace(/[^\d,]/g, '').replace(',', '.'));

    if (Number.isFinite(original) && Number.isFinite(current) && original > 0) {
      const discount = original > current ? Math.round((original - current) / original * 100) : 0;
      return String(discount);
    }
  } catch (err) {
    // fall through to default
  }

  // Default to 0% when we can't compute a positive discount
  return '0';
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
  const count = Array.isArray(product.images) ? product.images.length : (Number(product.images) || 0);
  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.className = `modal-carousel-image ${i === startIndex ? 'active' : ''}`;
    if (Array.isArray(product.images) && product.images[i]) {
      img.src = product.images[i];
    } else {
      img.src = getProductImageSrc(product.id, i);
    }
    applyImageFallback(img);
    img.alt = `${product.name} - Imagem ${i + 1}`;
    carouselContainer.appendChild(img);
  }

  // Navigation buttons (only if multiple images)
  if (count > 1) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'modal-carousel-nav prev';
    prevBtn.innerHTML = '‹';
    prevBtn.setAttribute('aria-label', 'Imagem anterior');
    prevBtn.addEventListener('click', () => navigateModal(-1, count));

    const nextBtn = document.createElement('button');
    nextBtn.className = 'modal-carousel-nav next';
    nextBtn.innerHTML = '›';
    nextBtn.setAttribute('aria-label', 'Próxima imagem');
    nextBtn.addEventListener('click', () => navigateModal(1, count));

    carouselContainer.appendChild(prevBtn);
    carouselContainer.appendChild(nextBtn);

    // Dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'modal-carousel-dots';

    for (let i = 0; i < count; i++) {
      const dot = document.createElement('button');
      dot.className = `modal-carousel-dot ${i === startIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir para imagem ${i + 1}`);
      dot.addEventListener('click', () => goToModalImage(i, count));
      dotsContainer.appendChild(dot);
    }

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
  const discountModal = calculateDiscount(product.originalPrice, product.price);
  const discountModalBadge = document.createElement('div');
  discountModalBadge.className = 'modal-discount-badge';
  discountModalBadge.textContent = `${discountModal}% OFF`;
  if (Number(discountModal) === 0) {
    discountModalBadge.classList.add('no-discount');
  }
  priceRow.appendChild(discountModalBadge);

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
  if (count > 1) {
    startModalAutoRotate(count);
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
