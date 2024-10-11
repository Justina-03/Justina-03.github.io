function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // 모든 탭 콘텐츠 숨기기
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 모든 탭 링크에서 active 클래스 제거
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 선택된 탭 보이기
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 페이지가 로드되면 기본적으로 Home 탭이 보이도록 설정
document.getElementById("Home").style.display = "block";
