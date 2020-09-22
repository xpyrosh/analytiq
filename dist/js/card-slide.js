$(document).ready(function() {
    $(window).scroll( function(){
        $('.try-something').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            console.log(bottom_of_element);
            console.log(bottom_of_window);

            let cardHalf = $(this).outerHeight()/2;

            let top_of_window = $(window).scrollTop();
            let top_of_element = $(this).offset().top;

            console.log(top_of_window);
            console.log(top_of_element);
            
            if(bottom_of_window > (bottom_of_element - cardHalf) && top_of_window < bottom_of_element){
                $('.card1').animate({'left':'115px'},500);
                $('.card2').animate({'right':'115px'},500);
            }
            else {
                $('.card1').animate({'left':'200px'},500);
                $('.card2').animate({'right':'200px'},500);
            }
        }); 
    });
});