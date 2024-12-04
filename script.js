// Filters the gallery based on category
function filterImages(category) {
    const images = document.querySelectorAll('.image-container');
    images.forEach(img => {
        if (category === 'all' || img.dataset.category === category) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

// Opens the lightbox with the clicked image
document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden', 'false');
    });
});
// Closes the lightbox when the close button is clicked
document.getElementById('close-lightbox').addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    
    // Clear the lightbox content
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    lightboxImg.src = '';
    lightboxCaption.textContent = '';
});

// Close the lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
        lightbox.setAttribute('aria-hidden', 'true');
        
        // Clear the lightbox content
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
    }
});