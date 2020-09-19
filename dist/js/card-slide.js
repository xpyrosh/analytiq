$(document).ready(function() {
    $(window).scroll( function(){
        $('.card').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            console.log(bottom_of_element);

            // console.log(bottom_of_window);

            // console.log($(this).offset().top);
            // console.log($(this).outerHeight());
            // console.log($(this).outerHeight()/2);

            console.log($(window).scrollTop());
            // console.log($(window).height());

            let cardHalf = $(this).outerHeight()/2;
            
            if( bottom_of_window > (bottom_of_element - cardHalf) ){
                $('.card1').animate({'left':'75px'},1000);
                $('.card2').animate({'right':'75px'},1000);
            }

            if ($(window).scrollTop() > bottom_of_element){
                $('.card1').animate({'left':'200px'}, 1000);
                $('.card2').animate({'right':'200px'}, 1000);
            }

            // if ($(window).scrollTop() > bottom_of_element - 20 || bottom_of_window < $(this).offset().top + 20) {
            //     $('.card1').animate({'left':'200px'}, 1000);
            //     $('.card2').animate({'right':'200px'}, 1000);
            // }
            
        }); 
    });
});