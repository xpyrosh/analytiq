$(document).ready(function(){
    let prevPosition;

    $(window).scroll(function(){
        let currentPosition = $(window).scrollTop() + $(window).height();

        if (currentPosition > prevPosition) {
            console.log('scrolling down');
        }
        else {
            console.log('scrolling up');
        }
    });
});