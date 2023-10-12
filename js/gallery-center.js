 $(function(){
 var swiper = new Swiper('.gallery-center_inner ', {
    slidesPerView: 1,//보여지는 갤러리 수
    spaceBetween: 30,//갤러리 사이 간격
    centeredSlides: true,//센터모드
    speed: 2000,//버튼을 슬라이드가 넘어가는 시간
	  
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery-center .swiper-button-next',
        prevEl: '.gallery-center .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.gallery-center .swiper-pagination',
        clickable: true,
      },
    });
});