document.addEventListener('DOMContentLoaded', () => {
    const glideElement = document.querySelector('.glide');

    if (glideElement) {
        new Glide('.glide', {
            animationDuration: 800,
            hoverpause: true,
            type: 'carousel',
        }).mount();
    }
});