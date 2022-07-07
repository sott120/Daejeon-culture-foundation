function cultuerAni() {
    const  cultuerImg= document.querySelectorAll('.cultuer_ani');
    for (let i = 0; i < cultuerImg.length; i++) {
      setTimeout(function(){
        cultuerImg[i].classList.add('ani');
      },180*i)
    }
  }

  cultuerAni()