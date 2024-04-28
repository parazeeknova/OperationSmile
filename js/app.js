// step 1: get DOM
const nextDom = document.getElementById('next')
const prevDom = document.getElementById('prev')

const carouselDom = document.querySelector('.carousel')
const SliderDom = carouselDom.querySelector('.carousel .list')
const thumbnailBorderDom = document.querySelector('.carousel .thumbnail')
const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item')
const timeDom = document.querySelector('.carousel .time')

thumbnailBorderDom.appendChild(thumbnailItemsDom[0])
const timeRunning = 3000
const timeAutoNext = 7000

nextDom.onclick = function () {
  showSlider('next')
}

prevDom.onclick = function () {
  showSlider('prev')
}
let runTimeOut
let runNextAuto = setTimeout(() => {
  next.click()
}, timeAutoNext)
function showSlider (type) {
  const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item')
  const thumbnailItemsDom = document.querySelectorAll(
    '.carousel .thumbnail .item'
  )

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0])
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0])
    carouselDom.classList.add('next')
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1])
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1])
    carouselDom.classList.add('prev')
  }
  clearTimeout(runTimeOut)
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next')
    carouselDom.classList.remove('prev')
  }, timeRunning)

  clearTimeout(runNextAuto)
  runNextAuto = setTimeout(() => {
    next.click()
  }, timeAutoNext)
}
