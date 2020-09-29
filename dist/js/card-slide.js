$(document).ready(function() {

    let animated = false;

    $(window).scroll( function(){
        $('#card-blue').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            let cardHalf = bottom_of_element - ($(this).outerHeight()/2);

            // Animate In/Collapse threshold
            let topBound = bottom_of_element - ($(this).outerHeight() * 0.8);
            let bottomBound = bottom_of_element - ($(this).outerHeight() * 0.2);

            let top_of_window = $(window).scrollTop();
            let top_of_element = $(this).offset().top;

            // console.log(top_of_window);
            // console.log(top_of_element);
            // console.log(topBound);
            // console.log(cardHalf);
            // console.log(bottomBound);
            // console.log(bottom_of_element);
            // console.log(bottom_of_window);

            
             if((bottom_of_window > cardHalf) && (top_of_window < cardHalf) && animated == false){
                $('.card1').animate({'left':'130px'},500);
                $('.card2').animate({'right':'130px'},500);
                animated = true;
                console.log('animated');
                console.log(animated);
             }
             else if (((bottom_of_window < topBound) || (top_of_window > bottomBound)) && animated == true){
                $('.card1').animate({'left':'200px'},500);
                $('.card2').animate({'right':'200px'},500);
                animated = false;
                console.log('collapsing');
             }
        }); 
    });
});



// $(document).ready(function() {
//     let blueSep = false
//     let purpSep = false
//     let card = document.getElementById('card-blue');

//     $(window).scroll(function() {
//         if (checkVisible(card)) {
//             if (!blueSep) {
//                 blueSep = true
//                 $('#card-blue').animate(
//                     { left: "-=130" },
//                     750
//                 )
//             }

//             if (!purpSep) {
//                 purpSep = true
//                 $('#card-purp').animate(
//                     { left: "+=130" },
//                     750
//                 )
//             }
//         } else {
//             if (blueSep && purpSep) {
//                 $('#card-blue').removeAttr('style')
//                 $('#card-purp').removeAttr('style')
//                 blueSep = false
//                 purpSep = false
//             }
//         }
//     });
// });


// function checkVisible(card) {
//   var rect = card.getBoundingClientRect();
//   var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
//   return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
// }