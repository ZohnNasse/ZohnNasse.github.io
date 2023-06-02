// 홈 페이지로 이동하는 함수
function goToHomePage() {
  const currentUrl = window.location.href
  const homeUrl = 'index.html'
  if (currentUrl !== homeUrl) {
    window.location.href = homeUrl
  }
}

// menu-icons의 모든 이미지 요소를 선택합니다.
const menuIcons = document.querySelectorAll('.menu-icons img')

// 각 이미지 요소에 마우스 이벤트 리스너를 등록합니다.
menuIcons.forEach((icon) => {
  // 마우스 진입 시 이벤트 핸들러
  icon.addEventListener('mouseenter', (event) => {
    const altText = icon.getAttribute('alt') // 이미지의 alt 속성값을 가져옵니다.
    const tooltip = document.createElement('div') // 새로운 div 요소를 생성합니다.
    tooltip.classList.add('tooltip') // tooltip 클래스를 추가합니다.
    tooltip.textContent = altText // tooltip의 텍스트를 alt 속성값으로 설정합니다.

    // 마우스 커서 위치에 툴팁을 표시하기 위해 좌표를 계산합니다.
    const mouseX = event.clientX
    const mouseY = event.clientY
    tooltip.style.left = `${mouseX + 10}px` // 툴팁을 마우스 커서 오른쪽으로 10px 이동시킵니다.
    tooltip.style.top = `${mouseY}px` // 툴팁을 마우스 커서와 동일한 높이로 설정합니다.

    document.body.appendChild(tooltip) // body 요소에 tooltip을 추가합니다.
  })

  // 마우스 이탈 시 이벤트 핸들러
  icon.addEventListener('mouseleave', () => {
    const tooltip = document.querySelector('.tooltip') // 툴팁 요소를 선택합니다.
    if (tooltip) {
      tooltip.remove() // 툴팁을 제거합니다.
    }
  })
})

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
