// 각 섹션의 HTML 내용을 변수에 저장
const honorsContent = document.querySelector('.honors').innerHTML;
const projectsContent = document.querySelector('.projects').innerHTML;
const extracurricularContent = document.querySelector('.extracurricular').innerHTML;

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

    // 클릭된 탭에 맞는 내용을 로드
    if (tabName === 'Honors') {
        document.getElementById('Honors').innerHTML = honorsContent;
    } else if (tabName === 'Projects') {
        document.getElementById('Projects').innerHTML = projectsContent;
    } else if (tabName === 'Extracurricular') {
        document.getElementById('Extracurricular').innerHTML = extracurricularContent;
    }

    // Home 탭일 때는 모든 섹션을 보이도록
    if (tabName === 'Home') {
        document.querySelector('.honors').style.display = 'block';
        document.querySelector('.projects').style.display = 'block';
        document.querySelector('.extracurricular').style.display = 'block';
    } else {
        // Home 탭이 아니면, 다른 섹션들은 숨기기
        document.querySelector('.honors').style.display = 'none';
        document.querySelector('.projects').style.display = 'none';
        document.querySelector('.extracurricular').style.display = 'none';
    }
}

// 기본적으로 Home 탭을 보여주기
document.getElementById('Home').style.display = 'block';
