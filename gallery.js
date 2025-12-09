// Gallery Lightbox Functionality

document.addEventListener('DOMContentLoaded', function() {
  // Create lightbox element
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close">&times;</button>
      <img src="" alt="Gallery Image">
    </div>
    <button class="lightbox-prev">&#10094;</button>
    <button class="lightbox-next">&#10095;</button>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  let currentIndex = 0;

  // Open lightbox
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      currentIndex = index;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Navigate to previous image
  prevBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxImage();
  });

  // Navigate to next image
  nextBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightboxImage();
  });

  // Update lightbox image
  function updateLightboxImage() {
    const img = galleryItems[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });
});
