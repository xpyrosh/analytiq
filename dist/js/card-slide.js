$(document).ready(function() {
    $(window).scroll( function(){
        $('.card').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            console.log(bottom_of_element);
            console.log(bottom_of_window);

            let cardHalf = $(this).outerHeight()/2;

            let top_of_window = $(window).scrollTop();
            let top_of_element = $(this).offset().top;

            console.log(top_of_window);
            console.log(top_of_element);
            
            // if( (bottom_of_window > (bottom_of_element - cardHalf)) && (top_of_window < top_of_element)){
            if(bottom_of_window > (bottom_of_element - cardHalf)){
                $('.card1').animate({'left':'115px'},1000);
                $('.card2').animate({'right':'115px'},1000);
            }
            // else if (top_of_window > bottom_of_element-10){
            //     $('.card1').animate({'left':'200px'}, 1000);
            //     $('.card2').animate({'right':'200px'}, 1000);
            // }
            

            // For some reason this causes an infinite animation loop of separating and joining when scrolling back up after passing the card

            // if ($(window).scrollTop() > bottom_of_element){
            //     $('.card1').animate({'left':'200px'}, 1000);
            //     $('.card2').animate({'right':'200px'}, 1000);
            // }
            
        }); 
    });
});