var ha_slideindex=1;
show_ha_highlight(ha_slideindex);

function current_ha_Slide1(n) {
  show_ha_highlight(ha_slideindex = n);
}

function show_ha_highlight(n) {
    let ha_pages = document.getElementsByClassName("H_A_page_1");
    let ha_btn = document.getElementsByClassName("H_A-flex-l1ink");
    let i;
    if (n > ha_pages.length) {ha_slideindex = 1}
    if (n < 1) {ha_slideindex = ha_pages.length}
    for (i = 0; i < ha_pages.length; i++) {
      ha_pages[i].style.display = "none";
    }
    for (i = 0; i < ha_btn.length; i++) {
      ha_btn[i].className = ha_btn[i].className.replace(" active", "");
    }
    ha_pages[ha_slideindex-1].style.display = "block";
    ha_btn[ha_slideindex-1].className += " active";

    
  }