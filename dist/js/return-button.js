$(document).ready(function(){
    let prevPosition;
    let visible = false;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    $(window).scroll(function(){
        let currentPosition = $(window).scrollTop() + $(window).height();
        let top_of_window = $(window).scrollTop();

        if ((currentPosition > prevPosition) && visible == false){
            console.log('scrolling down');
            $('#toTop').hide();
            $('#toTop').fadeTo("fast", 0);
            visible = true;
        }
        else if ((currentPosition < prevPosition) && visible == true && top_of_window > bottom_of_window){
            console.log('scrolling up');
            $('#toTop').show();
            $('#toTop').fadeTo("fast", 1);
            visible = false;
        }

        prevPosition = currentPosition;
    });
});

// function hideBtn(){
//     document.getElementById('toTop').style.visibility = "hidden";
// }