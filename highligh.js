
var highlightindex=1;

show_highlight(highlightindex);

function currentSlide1(n) {
  show_highlight(highlightindex = n);
}

function show_highlight(n) {
    let pages = document.getElementsByClassName("nav_slide");
    let nav_btn = document.getElementsByClassName("nav2_link");
    let i;
    if (n > pages.length) {highlightindex = 1}
    if (n < 1) {highlightindex = pages.length}
    for (i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    for (i = 0; i < nav_btn.length; i++) {
      nav_btn[i].className = nav_btn[i].className.replace(" active", "");
    }
    pages[highlightindex-1].style.display = "block";
    nav_btn[highlightindex-1].className += " active";
  }