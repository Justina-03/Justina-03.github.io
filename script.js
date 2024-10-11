function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // 모든 탭 콘텐츠 숨기기
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 모든 탭 링크의 활성화 클래스 제거
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 선택한 탭 콘텐츠만 보이도록 설정
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 기본적으로 Home 탭을 표시
document.getElementById('Home').style.display = 'block';
