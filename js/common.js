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

//메인 네비게이션 클릭시 div 보이기
const navTitle = document.querySelectorAll('.nav_title');
navTitle.forEach(function (el) {
    el.addEventListener('click', openNav);
});
function openNav() {
    navTitle.forEach((li) => {
        li.classList.remove('on');
    });
    this.classList.add('on');
}
//닫기버튼
const navClose = document.querySelectorAll('.nav_close');
navClose.forEach(function (el) {
    el.addEventListener('click', function () {
        navTitle.forEach((li) => {
            li.classList.remove('on');
        });
    });
});
//마우스가 벗어나면 자동으로 사라짐
// const depth2 = document.querySelectorAll('.depth2');
// const nav = document.getElementById('mainNav');

// depth2.forEach((el) => {
//     el.addEventListener('mouseout', function () {
//         navTitle.forEach((li) => {
//             li.classList.remove('on');
//         });
//     });
// });

//top버튼
//top버튼 클릭실행
let cont = document.querySelector('#for_totop');
window.addEventListener('scroll', scrollE);
// window.addEventListener('scroll', scrollE2);
cont.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

//top버튼 보이기
function scrollE() {
    if (window.scrollY >= 100) {
        cont.classList.add('on');
    } else {
        cont.classList.remove('on');
    }
}

//top버튼 2초 뒤 사라짐
window.addEventListener('scroll', scrollHide);
let timer;
function scrollHide() {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        cont.classList.remove('on');
    }, 2000);
}

// 햄버거 클릭 시 네비게이션 토글
const btnNav = document.querySelector('.btn_nav');
const btnClose = document.querySelector('.close');
const fullMenu = document.querySelector('.full_menu');
const body = document.getElementsByTagName('body')[0];

btnNav.addEventListener('click', function () {
    body.classList.toggle('scrollLock');
    fullMenu.classList.toggle('on');
});
// X 클릭 시 네비게이션 닫기
btnClose.addEventListener('click', function () {
    body.classList.remove('scrollLock');
    fullMenu.classList.remove('on');
});

// const fullLi = document.querySelectorAll('.btn_nav');
// const depth = document.querySelectorAll('.depth');
// fullLi.forEach( li => {
//     li.addEventListener('click',(index) => {
//         console.log(depth[0])
//         depth[index].classList.toggle('on');
//     })
// });
