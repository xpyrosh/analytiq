$(document).ready(function(){
    let prevPosition;
    let visible = false;
    var bottom_of_window = $(window).scrollTop() + $(window).height();


    $("#toTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('#toTop').fadeOut("slow");
        return false;
    });

    $(window).scroll(function(){
        let currentPosition = $(window).scrollTop() + $(window).height();
        let top_of_window = $(window).scrollTop();

        if ((currentPosition > prevPosition) && visible == false){
            // console.log('scrolling down');
            
            $('#toTop').fadeOut("slow");
            visible = true;
        }
        else if ((currentPosition < prevPosition) && visible == true && (top_of_window > bottom_of_window)){
            // console.log('scrolling up');
            
            $('#toTop').fadeIn("slow");
            visible = false;
        }
        prevPosition = currentPosition;
    });
});