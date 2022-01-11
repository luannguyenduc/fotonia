//=== Scroll Navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0";
    document.getElementById("btn-show-sb").style.marginTop = "-75px";
    document.getElementsByClassName("menu-list")[0].style.paddingTop = "0px";
    document.getElementsByClassName("logo-2")[0].style.marginTop = "5px";
    document.getElementsByClassName("social")[0].style.paddingTop = "7px";
  } else {
    document.getElementById("navbar").style.padding = "0px 0 30px 0";
    document.getElementById("btn-show-sb").style.marginTop = "-60px";
    document.getElementsByClassName("menu-list")[0].style.paddingTop = "16px";
    document.getElementsByClassName("logo-2")[0].style.marginTop = "21px";
    document.getElementsByClassName("social")[0].style.paddingTop = "22px";
  }
}
//=== Slide
$(document).ready(function () {
  $(".slide-s").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 250,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 564,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//=== Back to Top
var btn = $("#scrollTopBtn");
$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "2000");
});
//=== Hide and Show Dropdown Side Bar Item
function hideAndShowHome() {
  var a = document.getElementsByClassName("dropdown-sb")[0];
  if (a.style.display === "none") {
    a.style.display = "flex";
    document.getElementById("arw-home").style.transform = "rotate(180deg)";
  } else {
    a.style.display = "none";
    document.getElementById("arw-home").style.transform = "rotate(0deg)";
  }
}
function hideAndShowPortfolio() {
  var b = document.getElementsByClassName("dropdown-sb")[1];
  if (b.style.display === "none") {
    b.style.display = "flex";
    document.getElementById("arw-portfolio").style.transform = "rotate(180deg)";
  } else {
    b.style.display = "none";
    document.getElementById("arw-portfolio").style.transform = "rotate(0deg)";
  }
}
function hideAndShowGalleries() {
  var c = document.getElementsByClassName("dropdown-sb")[2];
  if (c.style.display === "none") {
    c.style.display = "flex";
    document.getElementById("arw-galleries").style.transform = "rotate(180deg)";
  } else {
    c.style.display = "none";
    document.getElementById("arw-galleries").style.transform = "rotate(0deg)";
  }
}
function hideAndShowBlog() {
  var d = document.getElementsByClassName("dropdown-sb")[3];
  if (d.style.display === "none") {
    d.style.display = "flex";
    document.getElementById("arw-blog").style.transform = "rotate(180deg)";
  } else {
    d.style.display = "none";
    document.getElementById("arw-blog").style.transform = "rotate(0deg)";
  }
}
function hideAndShowPages() {
  var e = document.getElementsByClassName("dropdown-sb")[4];
  if (e.style.display === "none") {
    e.style.display = "flex";
    document.getElementById("arw-pages").style.transform = "rotate(180deg)";
  } else {
    e.style.display = "none";
    document.getElementById("arw-pages").style.transform = "rotate(0deg)";
  }
}
//=== Hide and Show Side Bar
var check = false;
function showSideBar() {
  document.getElementById("side-bar").style.marginLeft = "0px";
  document.getElementById("side-bar").style.opacity = "1";
  check = true;
  // console.log(check);
}
function closeSideBar() {
  document.getElementById("side-bar").style.marginLeft = "-350px";
  document.getElementById("side-bar").style.opacity = "0";
  check = false;
  // console.log(check);
}
// document.onclick = function(z){
//   if(z.target.id !== "side-bar" && check == true){
//     document.getElementById("side-bar").style.marginLeft = "-350px";
//     check = false;
//   }
// }
