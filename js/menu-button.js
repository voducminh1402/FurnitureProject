function menuFunction() {
    var x = document.getElementById("menu-main");
    x.style.transform = "translateX(-200%)"
    if (x.style.opacity === "0") {
      x.style.transform = "translateX(0%)";
      x.style.opacity = "1";
      x.style.transition = "ease-in 0.3s";
      x.style.zIndex = "1000";
    } else {
      x.style.opacity = "0";
      x.style.zIndex = "-100";
    }
}   

function menuMoreFunction() {
    var x = document.getElementById("menu-main-more");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
        x.style.transition = "ease-in 0.4s";
    } else {
        x.style.opacity = "0";
    }
}

function menuMoreFunction2() {
  var x = document.getElementById("menu-main-more2");
  if (x.style.opacity === "0") {
      x.style.opacity = "1";
      x.style.transition = "ease-in 0.4s";
  } else {
      x.style.opacity = "0";
  }
}

// Block crtl+shift+i
// document.addEventListener('contextmenu', event => event.preventDefault());
 
//     document.onkeydown = function (e) {
 
//         // disable F12 key
//         if(e.keyCode == 123) {
//             return false;
//         }
 
//         // disable I key
//         if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
//             return false;
//         }
 
//         // disable J key
//         if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//             return false;
//         }
 
//         // disable U key
//         if(e.ctrlKey && e.keyCode == 85) {
//             return false;
//         }
//     }



