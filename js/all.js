// active
var header = document.getElementById("allTabs");
var btns = header.getElementsByClassName("nav-items");
var detailContent = document.getElementsByClassName("product-more-content");
detailContent[0].style.opacity = "0";
detailContent[0].style.height = "0";


for (var i = 0; i < btns.length; i++) {
  var count = 0;
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-product-des");
  ++count;
  if (count % 2 != 0) {
    detailContent[0].style.opacity = "1";
    detailContent[0].style.transition = "ease-in 0.5s";
    detailContent[0].style.height = "100%";
  }
  else {
    detailContent[0].style.opacity = "0";
    detailContent[0].style.height = "0";
    detailContent[0].style.transition = "ease-out 0.3s";

  }
  current[0].className = current[0].className.replace(" active-product-des", "");
  this.className += " active-product-des";
  });
}

