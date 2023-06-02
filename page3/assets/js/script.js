// 홈 페이지로 이동하는 함수
function goToHomePage() {
  const currentUrl = window.location.href
  const homeUrl = 'index.html'
  if (currentUrl !== homeUrl) {
    window.location.href = homeUrl
  }
}

adjustMenuIconSize() // 초기 설정

window.addEventListener('resize', function (event) {
  adjustMenuIconSize()

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
