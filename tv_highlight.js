var tv_slideindex=1;
show_TV_AV_highlight(tv_slideindex);

function current_tv_Slide1(n) {
  show_TV_AV_highlight(tv_slideindex = n);
}

function show_TV_AV_highlight(n) {
    let tv_pages = document.getElementsByClassName("TV_AV_page_1");
    let tv_btn = document.getElementsByClassName("TV_AV-flex-l1ink");
    let i;
    if (n > tv_pages.length) {tv_slideindex = 1}
    if (n < 1) {tv_slideindex = tv_pages.length}
    for (i = 0; i < tv_pages.length; i++) {
      tv_pages[i].style.display = "none";
    }
    for (i = 0; i < tv_btn.length; i++) {
      tv_btn[i].className = tv_btn[i].className.replace(" active", "");
    }
    tv_pages[tv_slideindex-1].style.display = "block";
    tv_btn[tv_slideindex-1].className += " active";

    
  }

  /*---------------------------------TV_AV---------ends here-----------slide---------*/

