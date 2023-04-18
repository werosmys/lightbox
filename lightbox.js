window.onload = function() {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop) {
        const images = document.querySelectorAll('.gallery img');
        images.forEach(function(image) {
            image.addEventListener('click', function() {
                const lightbox = document.getElementById('lightbox');
                const lightboxImg = document.getElementById('lightbox-img');
                const lightboxCaption = document.getElementById('lightbox-caption');
                lightboxImg.src = this.src;
                lightboxCaption.innerHTML = this.alt;
                    if (image.naturalWidth > image.naturalHeight) {
                        lightboxImg.classList.remove('tall');
                        lightboxCaption.classList.remove('tall-caption');
                        lightboxImg.classList.add('short');
                        lightboxCaption.classList.add('short-caption');
                    } 
                    else {
                        lightboxImg.classList.remove('short');
                        lightboxCaption.classList.remove('short-caption');
                        lightboxImg.classList.add('tall');
                        lightboxCaption.classList.add('tall-caption');
                    };
                lightbox.classList.remove('hidden');
            });
        });

        const lightboxOverlay = document.getElementById('lightbox');
        lightboxOverlay.addEventListener('click', function() {
            lightbox.classList.add('hidden');
        });
    } 
    else { //TODO: Find the caption and fix it.
        const images = document.querySelectorAll('.gallery img');
        images.forEach(function(image) {
            image.addEventListener('touchend', function() {
                const imageCaption = this.getAttribute('alt');
                const captionElement = this.closest('figure').querySelector('figcaption');
                captionElement.textContent = imageCaption;
            })
        })
    };
}