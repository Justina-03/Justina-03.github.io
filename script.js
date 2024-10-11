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

    // 선택한 탭만 보이게 설정
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Home 탭이 아닌 경우, 해당하는 섹션만 보이게
    if (tabName !== 'Home') {
        document.querySelector('.honors').style.display = tabName === 'Honors' ? 'block' : 'none';
        document.querySelector('.projects').style.display = tabName === 'Projects' ? 'block' : 'none';
        document.querySelector('.extracurricular').style.display = tabName === 'Extracurricular' ? 'block' : 'none';
    }
}
