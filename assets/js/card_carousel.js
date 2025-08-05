document.addEventListener('DOMContentLoaded', () => {
    const glideElement = document.querySelector('.glide');

    if (glideElement) {
        const mediaBreakpoints = {
            3840: { perView: 3, peek: { before: 40, after: 40 } },
            1920: { perView: 2, peek: { before: 80, after: 80 } },
            1250: { perView: 1, peek: { before: 80, after: 80 } },
            1080: { perView: 1, peek: { before: 80, after: 80 } },
            780: { perView: 1, peek: { before: 8, after: 8 } },
        }

        const glide = new Glide('.glide', {
            autoplay: 3000,
            hoverpause: true,
            type: 'carousel',
            perView: 4,
            gap: 18,
            peek: {
            before: 180,
            after: 180
            },
            breakpoints: mediaBreakpoints
        });
    
        glide.mount();
    }
});