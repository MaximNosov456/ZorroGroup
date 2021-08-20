$(function() {
  const swiper = new Swiper('.swiper-sertificates', {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 12,
        navigation:false
      },
    
      414: {
        slidesPerView: 1.8,
        spaceBetween: 15
      },
    
      544: {
        slidesPerView: 2.75,
        spaceBetween: 15
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 25,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      900: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      
      1100:{
        slidesPerView: 5,
        spaceBetween: 40
      },
    }
  });

  const swiper2 = new Swiper('.swiper-rewiews', {
    loop: true,
    breakpoints: {
      320: {
        centeredSlides:false,
        navigation:false,
        slidesPerView: 1.4,
        spaceBetween:15,
      },
  
      768: {
        centeredSlides:true,
        slidesPerView:1.15,
        spaceBetween:40,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  });
  

$('.hamburger, .menu__list-link').on('click',function() {
  $('.hamburger').toggleClass('active')
  $('.menu').toggleClass('active')
})

$(".menu").on("click", function (e) {
    e.preventDefault();
    const id  = $(e.target).attr('href');
    const top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });


     
    
  
})