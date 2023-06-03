window.onload = function () {
  const titleElement = document.getElementById('title')
  const text =
    '안녕하세요. 저는 비전공으로 AI를 배우고 있는 Zohn이라고 합니다. 이곳은 ChatGPT와 함께 만드는 홈페이지입니다. 앞으로 이 페이지를 통해 쿼티 킹덤이라는 타자 게임을 런칭 할 예정입니다. 많은 관심 부탁 드립니다.'
  let index = 0

  function showText() {
    if (index < text.length) {
      if (text[index] === '.') {
        titleElement.innerHTML += text[index] + '<br>' // 마침표일 경우 마침표와 줄바꿈 추가
      } else {
        titleElement.innerHTML += text[index] // 내용 추가
      }
      // 화면 너비에 따라 폰트 크기를 조정합니다.
      titleElement.style.fontSize = window.innerWidth <= 767 ? '10px' : '16px'
      index++
      setTimeout(showText, 100) // 한 글자씩 표시하는 간격 (100ms)
    }
  }

  showText()
}
