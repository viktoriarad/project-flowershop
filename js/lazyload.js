let lazyImages = [...document.querySelectorAll('.gallery__img')]
let inAdvance = 300

function lazyLoad() {
  lazyImages.forEach(image => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      image.src = image.dataset.src
      image.onload = () => image.classList.add('gallery__img--loaded')
    }
  })

  // if all loaded removeEventListener
}

lazyLoad()

window.addEventListener('scroll', _.throttle(lazyLoad, 16))
window.addEventListener('resize', _.throttle(lazyLoad, 16))
