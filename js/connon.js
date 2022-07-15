// 셋타임아웃에 반복문으로 딜레이 시키기
// function cultuerAni() {
//     const cultuerImg = document.querySelectorAll('.cultuer_ani');
//     for (let i = 0; i < cultuerImg.length; i++) {
//         setTimeout(function () {
//             cultuerImg[i].classList.add('ani');
//         }, 250 * i);
//     }
// }
// cultuerAni();

// 헤더 fixed 기능
const cultuerImg = document.querySelectorAll('.cultuer_ani');
function scrollPlay() {
    for (i = 0; i < cultuerImg.length; i++) {
        if (window.innerHeight > cultuerImg[i].getBoundingClientRect().top + 100) {
            cultuerImg[i].classList.add('ani');
        }
    }
}
window.addEventListener('load', scrollPlay);
window.addEventListener('scroll', scrollPlay);

function scrollfix() {
    const fixwrap = document.getElementById('headerWrap');
    const fixnav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        fixwrap.classList.add('fix');
        fixnav.classList.add('fix');
    } else if (window.scrollY < 100) {
        fixwrap.classList.remove('fix');
        fixnav.classList.remove('fix');
    }
}
window.addEventListener('load', scrollfix);
window.addEventListener('scroll', scrollfix);

//top버튼
//top버튼 클릭실행
window.addEventListener('scroll', scrollE);
window.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//top버튼 보이기
let cont = document.querySelector('#for_totop');
function scrollE() {
    if (window.scrollY >= 100) {
        cont.classList.add('on');
        //2초 뒤에 사라짐
        setTimeout(function () {
            cont.classList.remove('on');
        }, 2000);
    } else {
        cont.classList.remove('on');
    }
}
