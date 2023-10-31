let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {  let i;
  let slides = document.getElementsByClassName("mySl1ides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
        slideIndex = 1
      }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  
}

/*---------------------------------------------------------------------------------------------------------------*/



show_highlight(slideIndex);

function currentSlide1(n) {
  show_highlight(slideIndex = n);
}

function show_highlight(n) {
    let pages = document.getElementsByClassName("nav_slide");
    let nav_btn = document.getElementsByClassName("nav2_link");
    let i;
    if (n > pages.length) {slideIndex = 1}
    if (n < 1) {slideIndex = pages.length}
    for (i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    for (i = 0; i < nav_btn.length; i++) {
      nav_btn[i].className = nav_btn[i].className.replace(" active", "");
    }
    pages[slideIndex-1].style.display = "block";
    nav_btn[slideIndex-1].className += " active";
  }


/*---------------------------------------------------------------------------------------------------*/



show_phone_highlight(slideIndex);

function current_phone_Slide1(n) {
  show_phone_highlight(slideIndex = n);
}

function show_phone_highlight(n) {
    let phone_pages = document.getElementsByClassName("phone_p1age_1");
    let phone_btn = document.getElementsByClassName("phone-flex-l1ink");
    let i;
    if (n > phone_pages.length) {slideIndex = 1}
    if (n < 1) {slideIndex = phone_pages.length}
    for (i = 0; i < phone_pages.length; i++) {
      phone_pages[i].style.display = "none";
    }
    for (i = 0; i < phone_btn.length; i++) {
      phone_btn[i].className = phone_btn[i].className.replace(" active", "");
    }
    phone_pages[slideIndex-1].style.display = "block";
    phone_btn[slideIndex-1].className += " active";

    
  }

/*---------------------------------TV_AV---------starts here-----------slide---------*/

show_TV_AV_highlight(slideIndex);

function current_phone_Slide1(n) {
  show_TV_AV_highlight(slideIndex = n);
}

function show_TV_AV_highlight(n) {
    let phone_pages = document.getElementsByClassName("TV_AV_page_1");
    let phone_btn = document.getElementsByClassName("TV_AV-flex-l1ink");
    let i;
    if (n > phone_pages.length) {slideIndex = 1}
    if (n < 1) {slideIndex = phone_pages.length}
    for (i = 0; i < phone_pages.length; i++) {
      phone_pages[i].style.display = "none";
    }
    for (i = 0; i < phone_btn.length; i++) {
      phone_btn[i].className = phone_btn[i].className.replace(" active", "");
    }
    phone_pages[slideIndex-1].style.display = "block";
    phone_btn[slideIndex-1].className += " active";

    
  }

  /*---------------------------------TV_AV---------ends here-----------slide---------*/



  show_phone_highlight(slideIndex);

function current_phone_Slide1(n) {
  show_phone_highlight(slideIndex = n);
}

function show_phone_highlight(n) {
    let phone_pages = document.getElementsByClassName("TV_AV_page_1");
    let phone_btn = document.getElementsByClassName("TV_AV-flex-l1ink");
    let i;
    if (n > phone_pages.length) {slideIndex = 1}
    if (n < 1) {slideIndex = phone_pages.length}
    for (i = 0; i < phone_pages.length; i++) {
      phone_pages[i].style.display = "none";
    }
    for (i = 0; i < phone_btn.length; i++) {
      phone_btn[i].className = phone_btn[i].className.replace(" active", "");
    }
    phone_pages[slideIndex-1].style.display = "block";
    phone_btn[slideIndex-1].className += " active";

    
  }


  /*-----------------------------audio play-----------------------------------*/
  function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }