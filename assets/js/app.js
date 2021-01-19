$(function() {



/*Fixed Header*/

   let header = $("#header");
   let intro = $("#intro");
   let introH = intro.innerHeight();

   let scrollPos = $(window).scrollTop();

    console.log(scrollPos);
    console.log(introH);

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();

        if( scrollPos >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

/* Smoth scroll*/

    $("[data-scroll]").on("click", function(event) {
       event.preventDefault();

        let elementId = $(this).data('scroll');
          console.log(elementId);
        let elementOffset = $(elementId).offset().top;


         $("#nav").removeClass("active");


        $("html, body").animate({
            scrollTop: elementOffset
        }, 800);

        $("#nav-toggle").removeClass("active");

    });

 /*         navToggle;*/


    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $(this).toggleClass("active");


    });
    /* Smoth scroll*/

    $("[data-scroll]").on("click", function(event) {
       event.preventDefault();

        let elementId = $(this).data('scroll');
          console.log(elementId);
        let elementOffset = $(elementId).offset().top;


        $("#nav").removeClass("active");
        $("#navToggle").removeClass("active");

        $("html, body").animate({
            scrollTop: elementOffset
        }, 800);



    });

       /* Collapse*/
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("collapse");

        $this.toggleClass("active");


    });

    /* Slider*/
    $("[data-slider]").slick({

          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1

    });



 });
