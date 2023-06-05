;(function () {
  const monitorContainer = document.querySelector('.monitor .content')
  monitorContainer.innerHTML = '' // 모니터 컨테이너의 내용을 비웁니다.

  const projectIcons = ['weather.png', 'chatting.png', 'GenImg.png'] // 아이콘 파일 이름 배열
  const projectScripts = ['weather.js', 'chatting.js', 'GenImg.js'] // 각 아이콘에 연결될 스크립트 파일 이름 배열

  const iconContainer = document.createElement('div') // 아이콘을 담을 컨테이너 생성
  iconContainer.style.display = 'flex' // 컨테이너를 flex로 설정하여 아이콘들이 수평으로 정렬되게 합니다.

  projectIcons.forEach((icon, index) => {
    const projectIcon = document.createElement('img')
    projectIcon.src = `./assets/images/${icon}` // 아이콘 이미지 경로 설정
    projectIcon.style.width = '20%' // 아이콘 너비 설정
    projectIcon.style.height = '20%' // 아이콘 높이 설정
    projectIcon.addEventListener('click', () => {
      loadScript(projectScripts[index]) // 아이콘 클릭 시 해당 스크립트 로드
    })
    iconContainer.appendChild(projectIcon) // 아이콘을 아이콘 컨테이너에 추가
  })

  monitorContainer.appendChild(iconContainer) // 아이콘 컨테이너를 모니터 컨테이너에 추가
})()
