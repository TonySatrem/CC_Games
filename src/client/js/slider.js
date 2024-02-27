const sliders = document.querySelectorAll('.x-game-slider-container')

sliders.forEach(slider => {
  const items = slider.querySelector('.x-slider').children

  const prevItem = slider.querySelector('.x-slider-previous')
  const nextItem = slider.querySelector('.x-slider-next')

  const itemCount = items.length
  let currentCount = 0

  const [nextItemHandler, prevItemHandler] = getItemHandlers(items, currentCount, itemCount)

  nextItem.addEventListener('click', nextItemHandler)
  prevItem.addEventListener('click', prevItemHandler)
})

function getItemHandlers (items, currentCount, itemCount) {
  return [
      () => {
      items[currentCount].classList.remove('x-active-slide')

      if(currentCount < itemCount - 1) {
        currentCount++
      } else {
        currentCount = 0
      }

      items[currentCount].classList.add('x-active-slide')
    },
    
    () => {
      items[currentCount].classList.remove('x-active-slide')

      if(currentCount > 0) {
        currentCount--
      } else {
        currentCount = itemCount - 1
      }
    
      items[currentCount].classList.add('x-active-slide')
    }
  ]
}
