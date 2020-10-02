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
    document.getElementById("nav-out").style.background = "#f6f6f6";
    // grey #d9d9d9
    document.getElementById("nav-out").style.boxShadow = "0px 5px 7px #713d50";
    // document.getElementById("nav-out").style.borderBottom = "3px solid #040040"

  } else {
    document.getElementById("main-nav").style.padding = "3rem 0rem";
    document.getElementById("nav-out").style.background = "none";
    document.getElementById("nav-out").style.boxShadow = "none";
    // document.getElementById("nav-out").style.borderBottom = "none";

  }
} 