// // MODAL SUR LA PAGE CARRIERE
var imageUrls = [
  'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil1.png")',
  'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil2.png")',
  'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil3.png")',
  'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil4.png")',
  'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil5.png")',
  'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil6.png")',
  'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil7.png")',
  'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil8.png")',
];
var imageNumber = imageUrls.length;

function imagePop(id) {
  document.getElementById("imagePopId").style.display = "block";
  document.getElementById("carriere-blocs").style.display = "none";
  // document.getElementsByTagName("body")[0].style.overflowY = "hidden";

  var imageName = document.getElementById(id + "-image").style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  document.getElementsByClassName("imageContain")[0].style.animation =
    "he 800ms forwards";

  document.getElementsByClassName("imageContain")[0].style.backgroundImage =
    imageUrls[imageIndex];
}
function imagePopNone() {
  document.getElementsByClassName("imagePop")[0].style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "scroll";
  document.getElementsByClassName("carriere-blocs")[0].style.display = "grid";
}

var testimContent = Array.prototype.slice.call(
    document.getElementById("banner__container").children
  ),
  testimSpeed = 8000,
  currentSlide = 0,
  currentActive = 0,
  testimTimer;
// coding with nick
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimContent.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  playSlide(currentSlide);
};

//////// gérer les sous-menus du about

function chooseTab(headerToSelect, identifier) {
  const contentIdentifier = "content-" + identifier;
  const newTabContent = $('[data-tab="' + contentIdentifier + '"]');

  const selectedHeader = $(".quisommenous__submenu--selected");
  const seclectedImage = $(".quisommenous__image--selected");
  const dataTab = selectedHeader.attr("data-tab");
  const dataImg = seclectedImage.attr("data-tab");
  const selectedContentIdentifier = "content-" + dataTab;

  if (dataTab !== identifier) {
    selectedHeader.removeClass("quisommenous__submenu--selected");
    const selectedTabContent = $(
      '[data-tab^="' + selectedContentIdentifier + '"]'
    );

    selectedTabContent.addClass("hide");

    $(headerToSelect).addClass("quisommenous__submenu--selected");
    newTabContent.removeClass("hide");
  }

  if (dataImg !== identifier) {
    
    seclectedImage.removeClass("quisommenous__image--selected");
    const selectedImageContent = $(
      '[data-tab^="' + "image-" + identifier + '"]'
    );

    selectedImageContent.addClass("quisommenous__image--selected");
  }
}
