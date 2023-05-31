// 홈 페이지로 이동하는 함수
function goToHomePage() {
  const currentUrl = window.location.href;
  const homeUrl = 'index.html';
  if (currentUrl !== homeUrl) {
    window.location.href = homeUrl;
  }
}

// menu-icons의 모든 이미지 요소를 선택합니다.
const menuIcons = document.querySelectorAll('.menu-icons img');

// 각 이미지 요소에 마우스 이벤트 리스너를 등록합니다.
menuIcons.forEach((icon) => {
  // 마우스 진입 시 이벤트 핸들러
  icon.addEventListener('mouseenter', (event) => {
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
});

  // 홈 메뉴 클릭 시 이벤트 핸들러
  if (icon.getAttribute('alt') === 'Home') {
    icon.removeEventListener('click', goToHomePage); // 기존에 등록된 이벤트 리스너 제거
    icon.addEventListener('click', goToHomePage); // 새로운 이벤트 리스너 등록
  }
});

// project 메뉴 클릭 시 모니터 컨테이너 내용 변경
const projectMenu = document.getElementById('project-menu');
const monitorContainer = document.querySelector('.monitor .content');

projectMenu.addEventListener('click', () => {
  // 모니터 컨테이너 내용 비우기
  monitorContainer.innerHTML = '';

  // 새로운 내용 추가
  const projectContent = document.createElement('div');
  projectContent.innerHTML = '<h2>프로젝트 내용</h2><p>프로젝트에 대한 설명이 여기에 작성됩니다.</p>';

  monitorContainer.appendChild(projectContent);
});

window.onload = function() {
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
        setTimeout(showText, 120); // 모바일 환경에서 글자가 더 작으므로 간격을 늘림 (120ms)
      } else {
        titleElement.style.fontSize = '16px'; // 기본 글자 크기
        setTimeout(showText, 100); // 한 글자씩 표시하는 간격 (100ms)
      }
      index++;
    }
  }

  showText();

  // 홈 메뉴 클릭 시 이벤트 핸들러
  const homeIcon = document.querySelector('.menu-icons img[alt="Home"]');
  homeIcon.addEventListener('click', goToHomePage);

  // 화면 크기에 따라 메뉴 아이콘 크기 조정
  function adjustMenuIconSize() {
    const menuIconSize = window.innerWidth <= 320 ? '24px' : '32px';
    menuIcons.forEach((icon) => {
      icon.style.width = menuIconSize;
      icon.style.height = menuIconSize;
    });
  }

  adjustMenuIconSize(); // 초기 설정

  window.addEventListener('resize', function(event) {
    adjustMenuIconSize();

    const isMobile = window.innerWidth <= 767;
    const iconSize = isMobile ? '24px' : '32px';

    menuIcons.forEach((icon) => {
      icon.style.width = iconSize;
      icon.style.height = iconSize;
    });
  });
};
