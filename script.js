function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // 모든 탭 콘텐츠 숨기기
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 모든 탭 링크에서 활성화 클래스 제거
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 선택한 탭을 보이도록 설정
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Home 탭일 때 모든 섹션을 보이도록
    if (tabName === 'Home') {
        document.querySelector('.honors').style.display = 'block';
        document.querySelector('.projects').style.display = 'block';
        document.querySelector('.extracurriculars').style.display = 'block';
    } else {
        // Home 탭이 아니면 다른 섹션들은 숨기기
        document.querySelector('.honors').style.display = 'none';
        document.querySelector('.projects').style.display = 'none';
        document.querySelector('.extracurriculars').style.display = 'none';
    }
}

// 페이지가 처음 로드되면 기본적으로 Home 탭을 보여주기
document.getElementById('Home').style.display = 'block';
document.querySelector('.honors').style.display = 'block';
document.querySelector('.projects').style.display = 'block';
document.querySelector('.extracurriculars').style.display = 'block';
