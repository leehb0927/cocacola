$(function(){
    //마우스 커서 모양
    $('.wrapper').mousemove(function(e){
        const xPosition = e.clientX - 50; 
        const yPosition = e.clientY - 50;

        gsap.to('.cursor',{
            x:xPosition,
            y:yPosition,
            stagger:0.1
        })
    });

    //메인 배경 .bg-lines가 스크롤을 하면 서서히 사라짐
    gsap.to('.sc-visual .bg-lines',{
        scrollTrigger:{
            trigger:".sc-visual",
            start:"top 90%",
            end:"bottom top",
            scrub:2,
        },
        opacity:0
    });
    //물방울 흐르는 효과
    gsap.set('.wrapper .drop',{
        opacity:1
    });
    gsap.to('.wrapper .drop',{
        delay:0.8,
        opacity:1,
        yPercent:40
    });
    const drop = document.querySelectorAll('.wrapper .drop');
    drop.forEach(el=>{
        gsap.to(el,{
            scrollTrigger:{
                trigger:el,
                scrub:1
            },
            yPercent:30
        });
    });
    //물방울이 .sc-brand .link-wrapper에 도달하면 사라짐
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        target = $('.sc-visual .title-img').offset().top;

        if(curr>=target){
            $('.wrapper .drop').css('opacity','0')
        }else {
            $('.wrapper .drop').css('opacity','1')
        }
    });
    $(window).trigger('scroll');


    //메인 타이틀 .char 글자 효과
    gsap.set('.title .char',{
        yPercent:'random(-200,200)',
        opacity:0,
    })
    gsap.to('.title .char',{
        delay:0.1,
        stagger:0.1,
        yPercent:0,
        opacity:1,
    });

    //메인 타이틀 이미지 효과
    gsap.to('.sc-visual .title-img img',{
        scrollTrigger:{
            trigger:".group-flex1 .title-img",
            start:"top 30%",
            end:"bottom top",
            scrub:1,
        },
        yPercent:-20
    });





    const mainTitle = document.querySelectorAll('.sc-brand h2');
        
        mainTitle.forEach(el=>{
            gsap.from(el,{
            scrollTrigger:{
                trigger:el,
                start:"top 50%",
                end:"bottom bottom",
                scrub:2,
            },
            opacity:0
        });
        });

    gsap.from('.sc-brand .text-wrapper',{
        scrollTrigger:{
            trigger:".group-flex2 .text-wrapper",
            start:"20% 80%",
            end:"bottom top",
            scrub:2
        },
        opacity:0
    })


    const fadeList = document.querySelectorAll('.sc-brand .list-item');

    fadeList.forEach((fadeList, index)=> {
        gsap.from(fadeList,1,{
            scrollTrigger:{
                trigger:fadeList,
                start:"top 50%",
                end:"0% 0%",
            },
            opacity:0,
            delay: (!index + 1) * .3
        });
    });

    const fadeListImg = document.querySelectorAll('.sc-brand .list-wrapper img');
    
    fadeListImg.forEach((fadeListImg, index)=>{
        gsap.from(fadeListImg,1,{
            scrollTrigger:{
                trigger:fadeListImg,
                start:"top 50%",
                end:"0% 0%",
            },
            scale:0.5,
            delay: (!index + 1) * .2
        });
    });



    //.sc-edition
    gsap.from('.sc-edition .wrapper',{
        scrollTrigger:{
            trigger:".group-flex3 .wrapper",
            start:"20% 80%",
            end:"bottom top",
            scrub:2
        },
        opacity:0
    });
    
    gsap.to('.sc-edition .bg-img',{
        scrollTrigger:{
            trigger:".sc-edition .bg-img",
            start:"top 20%",
            end:"bottom 100%",
            scrub:2,
        },
        opacity:0
    });


    var swiper = new Swiper(".sc-edition .swiper", {
        slidesPerView: "auto",
        slidesPerGroup: 1,//3
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        });
    
    gsap.from('.sc-edition .swiper img',1,{
        scrollTrigger:{
            trigger:".sc-edition .swiper",
            start:"top 50%",
            end:"bottom bottom"
        },
        scale:0.5
    })





    const fadeList2 = document.querySelectorAll('.sc-company .group-list1 .item');

    fadeList2.forEach((fadeList2, index)=> {
        gsap.from(fadeList2,1,{
            scrollTrigger:{
                trigger:fadeList2,
                start:"top bottom",
                end:"0% 0%"
            },
            opacity:0,
            delay: (index + 1) * .3
        });
    });


    gsap.from('.sc-company .line',1,{
        scrollTrigger:{
            trigger:".group-flex4 .line",
            start:"top bottom",
            end:"100% 100%"
        },
        width:0
    });

    const fadeList3 = document.querySelectorAll('.sc-company .group-list2 .item');

    fadeList3.forEach((fadeList3, index)=>{
        gsap.from(fadeList3,1,{
            scrollTrigger:{
                trigger:fadeList3,
                start:"top bottom",
                end:"0% 0%"
            },
            opacity:0,
            delay: (index + 1) * .3
        });
    });

    const fadeListImg2 = document.querySelectorAll('.sc-company .group-list2 img');

    fadeListImg2.forEach((fadeListImg2,index)=>{
        gsap.from(fadeListImg2,1,{
            scrollTrigger:{
                trigger:fadeListImg2,
                start:"top bottom",
                end:"0% 0%",
            },
            scale:0.5,
            delay: (index + 1) * .2
        });
    });




    //footer 배경
    gsap.from('.footer .bg-img .cls-3',{
        scrollTrigger:{
            trigger:".footer .bg-img",
            start:"top bottom",
            end:"100% 100%",
            scrub:2,
            delay:1
        },
        opacity:0
    })
    //footer .footer-ico
    gsap.from('footer .footer-ico',1,{
        scrollTrigger:{
            trigger:"footer .footer-ico",
            start:"top bottom",
            end:"100% 100%"
        },
        width:0,
        opacity:0,
        rotateZ:180
    });
    gsap.from('.footer .footer-top h3',{
        scrollTrigger:{
            trigger:"footer .footer-top h3",
            start:"top bottom",
            end:"100% 100%"
        },
        opacity:0
    })

    //
    $('.footer-bottom .footer-item').hover(function(){
        $(this).addClass('active')
    },(function(){
        $(this).removeClass('active')
    }))
})