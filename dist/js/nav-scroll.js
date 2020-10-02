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
    document.getElementById("nav-out").style.background = "rgb(255, 255, 255, 0.95)";
    // grey #d9d9d9
    // document.getElementById("nav-out").style.boxShadow = "0px 3px 5px rgb(217, 217, 217, 0.9)";
    // document.getElementById("nav-out").style.borderBottom = "10px solid #f9f9f9"

  } else {
    document.getElementById("main-nav").style.padding = "3rem 0rem";
    document.getElementById("nav-out").style.background = "none";
    document.getElementById("nav-out").style.boxShadow = "none";
    document.getElementById("nav-out").style.borderBottom = "none";

  }
} 