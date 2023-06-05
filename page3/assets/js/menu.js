// menu-icons의 모든 이미지 요소를 선택합니다.
const menuIcons = document.querySelectorAll('.menu-icons img')

// 각 이미지 요소에 마우스 이벤트 리스너를 등록합니다.
menuIcons.forEach((icon) => {
  // 마우스 진입 시 이벤트 핸들러
  icon.addEventListener('mouseenter', (event) => {
    // 이벤트 객체를 인자로 받아 사용합니다.
    const altText = icon.getAttribute('alt')
    const tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')
    tooltip.textContent = altText

    const mouseX = event.clientX
    const mouseY = event.clientY
    tooltip.style.left = `${mouseX + 10}px`
    tooltip.style.top = `${mouseY}px`

    document.body.appendChild(tooltip)
  })

  // 마우스 이탈 시 이벤트 핸들러
  icon.addEventListener('mouseleave', () => {
    const tooltip = document.querySelector('.tooltip') // 툴팁 요소를 선택합니다.
    if (tooltip) {
      tooltip.remove() // 툴팁을 제거합니다.
    }
  })
})

let loadedScripts = {}

function loadScript(filename) {
  // 이미 로드된 스크립트인지 확인
  if (loadedScripts[filename]) {
    return
  }

  // 기존에 추가된 script 태그를 제거합니다.
  const oldScript = document.querySelector(`script[src="${filename}"]`)
  if (oldScript) {
    oldScript.remove()
  }

  const script = document.createElement('script')
  script.src = './assets/js/' + filename // 상대 경로를 사용하여 파일 위치 지정
  script.onload = function () {
    loadedScripts[filename] = true // 스크립트가 성공적으로 로드되면 추적 객체에 추가
  }
  script.onerror = function () {
    console.error(`"${filename}" failed to load.`) // 스크립트 로드 실패 시 오류 메시지 출력
  }
  document.body.appendChild(script)
}

// 각 이미지 요소에 클릭 이벤트 리스너를 등록합니다.
menuIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const altText = icon.getAttribute('alt') // 이미지의 alt 속성값을 가져옵니다.

    // 모니터 컨테이너의 내용을 비웁니다.
    const monitorContainer = document.querySelector('.monitor .content')
    monitorContainer.innerHTML = ''

    // alt 속성값에 따라 해당하는 스크립트를 로드합니다.
    switch (altText) {
      case 'Home':
        loadScript('home.js')
        break
      case 'Project':
        loadScript('project.js')
        break
      case 'Contact':
        loadScript('contact.js')
        break
    }
  })
})
