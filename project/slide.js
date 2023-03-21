var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    // 시작값
    currentIndex = 0,
// 슬라이드 카운트
    slideCount = slide.length,
    slideWidth = 266,
    slideMargin = 34,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin +'px';

    function moveSlide(num){
        // 왼쪽으로 가야하므로 부호는 반대
        slides.style.left = -num * 266 + 'px';
        currentIndex = num;
    }
    console.log(slideCount);
    nextBtn.addEventListener('click', function(){
        if(currentIndex < 22){
            moveSlide(currentIndex + 2);
            console.log(currentIndex);
        }else{
            moveSlide(0);
            console.log(currentIndex);
        }
    });

    prevBtn.addEventListener('click', function(){
        if(currentIndex > 0){
            moveSlide(currentIndex-1);
            console.log(currentIndex);
        }else{
            moveSlide(0);
            console.log(currentIndex);
        }
        
    });
