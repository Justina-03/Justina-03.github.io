function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // 모든 탭 콘텐츠 숨기기
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // 콘텐츠를 숨김
    }

    // 모든 탭 링크에서 활성화 클래스 제거
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 선택된 탭의 콘텐츠만 보이도록 설정
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active"; // 활성화 클래스 추가
}

// 기본적으로 Home 탭을 활성화 상태로 표시
document.getElementById('Home').style.display = 'block';
document.querySelector('.tablinks').classList.add('active'); // Home 탭에 활성화 클래스 추가
