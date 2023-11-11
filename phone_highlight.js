var phoneslideindex=1;
show_phone_highlight(phoneslideindex);

function current_phone_Slide1(n) {
  show_phone_highlight(phoneslideindex = n);
}

function show_phone_highlight(n) {
    let phone_pages = document.getElementsByClassName("phone_p1age_1");
    let phone_btn = document.getElementsByClassName("phone-flex-l1ink");
    let i;
    if (n > phone_pages.length) {phoneslideindex = 1}
    if (n < 1) {phoneslideindex = phone_pages.length}
    for (i = 0; i < phone_pages.length; i++) {
      phone_pages[i].style.display = "none";
    }
    for (i = 0; i < phone_btn.length; i++) {
      phone_btn[i].className = phone_btn[i].className.replace(" active", "");
    }
    phone_pages[phoneslideindex-1].style.display = "block";
    phone_btn[phoneslideindex-1].className += " active";

    
  }

