window.addEventListener('resize', function (event) {
  const isMobile = window.innerWidth <= 767
  const iconSize = isMobile ? '24px' : '32px'

  menuIcons.forEach((icon) => {
    icon.style.width = iconSize
    icon.style.height = iconSize
  })
})

const images = document.querySelectorAll('img')
images.forEach((img) => {
  img.title = ''
})
