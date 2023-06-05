;(function () {
  const monitorContainer = document.querySelector('.monitor .content')
  monitorContainer.innerHTML = '' // 모니터 컨테이너의 내용을 비웁니다.
  const projectIcons = ['weather.png', 'chatting.png', 'GenImg.png'] // 아이콘 파일 이름 배열
  const projectScripts = ['weather.js', 'chatting.js', 'GenImg.js'] // 각 아이콘에 연결될 스크립트 파일 이름 배열
  projectIcons.forEach((icon, index) => {
    const projectIcon = document.createElement('img')
    projectIcon.src = `../assets/images/${icon}` // 아이콘 이미지 경로 설정
    projectIcon.style.width = '20%' // 아이콘 너비 설정
    projectIcon.style.height = '20%' // 아이콘 높이 설정
    projectIcon.addEventListener('click', () => {
      loadScript(projectScripts[index]) // 아이콘 클릭 시 해당 스크립트 로드
    })
    monitorContainer.appendChild(projectIcon) // 아이콘을 모니터 컨테이너에 추가
    console.log(`Added ${icon} to the monitor container.`) // 로그 메시지 추가
  })
})
