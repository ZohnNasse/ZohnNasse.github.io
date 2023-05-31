// 홈 페이지로 이동하는 함수
function goToHomePage() {
  window.location.href = 'index.html'; // 홈 페이지로 이동
}

// menu-icons의 모든 이미지 요소를 선택합니다.
const menuIcons = document.querySelectorAll('.menu-icons img');

// 각 이미지 요소에 마우스 이벤트 리스너를 등록합니다.
menuIcons.forEach((icon) => {
  // 마우스 진입 시 이벤트 핸들러
  icon.addEventListener('mouseenter', () => {
    const altText = icon.getAttribute('alt'); // 이미지의 alt 속성값을 가져옵니다.
    const tooltip = document.createElement('div'); // 새로운 div 요소를 생성합니다.
    tooltip.classList.add('tooltip'); // tooltip 클래스를 추가합니다.
    tooltip.textContent = altText; // tooltip의 텍스트를 alt 속성값으로 설정합니다.

    // 마우스 커서 위치에 툴팁을 표시하기 위해 좌표를 계산합니다.
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    tooltip.style.left = `${mouseX + 10}px`; // 툴팁을 마우스 커서 오른쪽으로 10px 이동시킵니다.
    tooltip.style.top = `${mouseY}px`; // 툴팁을 마우스 커서와 동일한 높이로 설정합니다.

    document.body.appendChild(tooltip); // body 요소에 tooltip을 추가합니다.
  });

  // 마우스 이탈 시 이벤트 핸들러
  icon.addEventListener('mouseleave', () => {
    const tooltip = document.querySelector('.tooltip'); // 툴팁 요소를 선택합니다.
    if (tooltip) {
      tooltip.remove(); // 툴팁을 제거합니다.
    }
  });

  // 홈 메뉴 클릭 시 이벤트 핸들러
  if (icon.getAttribute('alt') === 'Home') {
    icon.removeEventListener('click', goToHomePage); // 기존에 등록된 이벤트 리스너 제거
    icon.addEventListener('click', goToHomePage); // 새로운 이벤트 리스너 등록
  }
});

window.onload = function () {
  const titleElement = document.getElementById('title');
  const descriptionElement = document.getElementById('description');
  const text =
    '안녕하세요. 저는 비전공으로 AI를 배우고 있는 Zohn이라고 합니다. 이곳은 ChatGPT와 함께 만드는 홈페이지입니다. 앞으로 이 페이지를 통해 쿼티 킹덤이라는 타자 게임을 런칭 할 예정입니다. 많은 관심 부탁 드립니다.';
  let index = 0;

  function showText() {
    if (index < text.length) {
      if (text[index] === '.') {
        titleElement.innerHTML += text[index] + '<br>'; // 마침표일 경우 마침표와 줄바꿈 추가
      } else {
        titleElement.innerHTML += text[index]; // 내용 추가
      }
      if (window.innerWidth <= 767) {
        titleElement.style.fontSize = '10px'; // 모바일 환경에서 글자 크기를 작게 설정
        setTimeout(showText, 120); // 모바일 환경에서 글자가 더 작으므로 간격을 늘림 (150ms)
      } else {
        titleElement.style.fontSize = '16px'; // 기본 글자 크기
        setTimeout(showText, 100); // 한 글자씩 표시하는 간격 (100ms)
      }
      index++;
    }
  }

  showText();

  // 화면 크기에 따라 메뉴 아이콘 크기 조정
  function adjustMenuIconSize() {
    const menuIconSize = window.innerWidth <= 320 ? '24px' : '32px';
    menuIcons.forEach((icon) => {
      icon.style.width = menuIconSize;
      icon.style.height = menuIconSize;
    });
  }

  adjustMenuIconSize(); // 초기 설정

  window.addEventListener('resize', adjustMenuIconSize); // 화면 크기 변경 시 메뉴 아이콘 크기 조정
  window.addEventListener('resize', function() {
    const menuIcons = document.querySelectorAll('.menu-icons img');
  
    // 현재 브라우저 너비를 확인하여 모바일 환경인지 판단
    const isMobile = window.innerWidth <= 767;
  
    // 모바일 환경인 경우 아이콘 크기를 작게 설정, 아닌 경우는 초기 크기로 설정
    const iconSize = isMobile ? '24px' : '32px';
  
    // 각 아이콘의 크기를 설정
    menuIcons.forEach((icon) => {
      icon.style.width = iconSize;
      icon.style.height = iconSize;
    });
  });
  
  // 초기 로드 시에도 크기를 설정하기 위해 resize 이벤트를 발생시킴
  window.dispatchEvent(new Event('resize'));
};
