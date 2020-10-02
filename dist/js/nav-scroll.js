// window.onscroll = function() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
//         document.getElementById('nav-bar').style.background = "black";
//         document.getElementById("logo").style.height = "1rem";
//     }
//     else {
//         document.getElementById('nav-bar').style.background = 'none';
//     }
// };


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("main-nav").style.padding = "1rem 0rem";
    document.getElementById("main-nav").style.color = "white";
    document.getElementById("nav-out").style.background = "white";
    // document.getElementById("nav-out").style.borderBottom = "3px solid #040040"

    // document.getElementById("logo").style.maxHeight = "2.5rem";
  } else {
    document.getElementById("main-nav").style.padding = "3rem 0rem";
    document.getElementById("nav-out").style.background = "none";
    // document.getElementById("nav-out").style.borderBottom = "none";

    // document.getElementById("logo").style.maxHeight = "3rem";
  }
} 