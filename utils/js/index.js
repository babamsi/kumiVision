import TextOnPath from "./textOnPath";
// const imagesLoaded = require('imagesloaded');

// Preload images
const preloadImages = () => {
    return new Promise((resolve, reject) => {
        resolve();
    });
};

// Preload fonts
const preloadFonts = () => {
    return new Promise((resolve, reject) => {
       resolve()
    });
};

// Preload fonts and images
Promise.all([preloadImages(), preloadFonts()]).then(() => {
    // And then initialize the TextOnScroll instances
    [...document.querySelectorAll('svg.svgtext')].forEach(el => new TextOnPath(el));
    // Remove loader (loading class)
    document.body.classList.remove('loading');
});