//swiper 1
var swiper1 = new Swiper('.mySwiper1', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
    },
});

//swiper 3
var swiper3 = new Swiper('.mySwiper3', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 28,
    pagination: {
        el: '.swiper-pagination3',
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
        },
    },
});

//swiper 2
var swiper2 = new Swiper('.mySwiper2', {
    slidesPerView: 1,
    spaceBetween: 15,

    navigation: {
        nextEl: '.next_arrow',
        prevEl: '.prev_arrow',
    },
    on: {
        transitionEnd: function () {
            if (this.activeIndex == 0) {
                document.querySelector('.prev_arrow').classList.remove('opa1');
                document.querySelector('.prev_arrow').classList.add('opa0');
            } else if (this.activeIndex == 1) {
                document.querySelector('.prev_arrow').classList.remove('opa0');
                document.querySelector('.prev_arrow').classList.add('opa1');
                document.querySelector('.next_arrow').classList.remove('opa0');
                document.querySelector('.next_arrow').classList.add('opa1');
            } else if (this.activeIndex == 2) {
                document.querySelector('.next_arrow').classList.remove('opa1');
                document.querySelector('.next_arrow').classList.add('opa0');
            }
        },
    },
});

//tab menu
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName('tab_content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    tabLinks = document.getElementsByClassName('tab_links');
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

//sbTab
const tabLi = document.querySelectorAll('.sb_tab_li');
const sbLi = document.querySelectorAll('.sb_li');
const type1 = document.querySelectorAll('.type1');
const type2 = document.querySelectorAll('.type2');
const type3 = document.querySelectorAll('.type3');
const type4 = document.querySelectorAll('.type4');
tabLi.forEach(function (li) {
    li.addEventListener('click', tabOn);
});

function tabOn(e) {
    tabLi[0].classList.remove('active_sb');
    tabLi[1].classList.remove('active_sb');
    tabLi[2].classList.remove('active_sb');
    tabLi[3].classList.remove('active_sb');
    tabLi[4].classList.remove('active_sb');
    tabLi[5].classList.remove('active_sb');
    this.classList.add('active_sb');
    sbLi.forEach(function (el) {
        el.classList.add('temp_opa');
    });
    let aaa = e.currentTarget.dataset.code;
    console.log(aaa);
    switch (aaa) {
        case 'A30-A':
            type1.forEach(function (el) {
                el.classList.remove('temp_opa');
            });
            break;
        case 'A30-B':
            type2.forEach(function (el) {
                el.classList.remove('temp_opa');
            });
            break;
        case 'A30-C':
            type3.forEach(function (el) {
                el.classList.remove('temp_opa');
            });
            break;
        case 'A30-D':
            type4.forEach(function (el) {
                el.classList.remove('temp_opa');
            });
            break;
        case 'A30-Z':
            sbLi.forEach(function (el) {
                el.classList.add('temp_opa');
            });
            break;
        default:
            sbLi.forEach(function (el) {
                el.classList.remove('temp_opa');
            });
            break;
    }
}
