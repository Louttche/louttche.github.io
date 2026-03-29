function initializeGlider() {
    new Glide('.glide:not(.compact)', {
        animationDuration: 800,
        hoverpause: true,
        type: 'carousel',
    }).mount();
}

function initializeGliderCompact() {
    const glide = new Glide('.glide.compact', {
        animationDuration: 800,
        hoverpause: true,
        type: 'carousel',
    })

    // Update image caption on slide change
    glide.on('run.after', (_e) => {
        const activeImage = document.querySelector('.glide__slide--active img');
        const imgFilename = activeImage.getAttribute('src').split('/');
        const imgBasename = imgFilename[imgFilename.length - 1].split('.')[0].replaceAll('_', ' ');
        const activeImgCaption = imgBasename.charAt(0).toUpperCase() + imgBasename.slice(1)
        
        const imgCaption = document.querySelector('.image-caption');
        imgCaption.innerHTML = activeImgCaption;
    });
    
    glide.mount();
}

document.addEventListener('DOMContentLoaded', () => {
    const glideElement = document.querySelector('.glide:not(.compact)');
    const glideCompactElement = document.querySelector('.glide.compact');

    if (glideElement) 
        initializeGlider();
    
    if (glideCompactElement)
        initializeGliderCompact();
});