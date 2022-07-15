function fn_sendFB(sns) {
    var thisUrl = document.URL;
    var snsTitle = '대전문화재단';
    if (sns == 'facebook') {
        var url = 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(thisUrl);
        window.open(url, '', 'width=486, height=286');
    } else if (sns == 'naver') {
        var url = 'http://blog.naver.com/openapi/share?url=' + encodeURIComponent(thisUrl) + '&title=' + encodeURIComponent(snsTitle);
        window.open(url, '', 'width=486, height=500,scrollbars=yes');
    } else if (sns == 'twitter') {
        var url = 'http://twitter.com/share?url=' + encodeURIComponent(thisUrl) + '&text=' + encodeURIComponent(snsTitle);
        window.open(url, 'tweetPop', 'width=486, height=500,scrollbars=yes');
    } else if (sns == 'kakao') {
        var url = 'https://story.kakao.com/share?url=' + encodeURIComponent(thisUrl);
        window.open(url, '', 'width=486, height=700,scrollbars=yes');
    }
}

const title = document.querySelectorAll('.inner_dropdown');
title.forEach(function (li) {
    li.addEventListener('click', function () {
        let tSibling = li.nextSibling.nextSibling;
        if (tSibling.classList.contains('active')) {
            li.classList.remove('active');
            tSibling.classList.remove('active');
        } else {
            for (i = 0; i < title.length; i++) {
                title[i].classList.remove('active');
                title[i].nextSibling.nextSibling.classList.remove('active');
            }
            li.classList.add('active');
            tSibling.classList.add('active');
        }
    });
});

const linkTo = document.querySelector('.link_to');
const sns = document.querySelector('.snswrap');
linkTo.addEventListener('click', function () {
    sns.classList.toggle('active');
});
