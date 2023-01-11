function imagePop(id) {
  // Récupérer l'élément cliqué
  const clickedElement = document.getElementById(id)
  // Cacher carriere-blocs
  const removeElement = document.getElementById('carriere-blocs')
  removeElement.style.display = 'none'
  // Récupérer l'image et le texte associés à l'élément cliqué
  const image = clickedElement.getAttribute('data-image')
  const title = clickedElement.getAttribute('data-title')
  const text = clickedElement.getAttribute('data-text')
  const tasks = clickedElement.getAttribute('data-tasks')
  // Afficher le pop-up
  const imagePop = document.getElementById('imagePopId')
  imagePop.style.display = 'block'
  // Charger l'image et le texte dans le pop-up
  const imageContain = document.getElementById('imageContainId')
  imageContain.innerHTML = `<img src="${image}" alt="Image de l'employé">`
  const imageText = document.getElementById('imageTextId')
  imageText.innerHTML = `
    <div class="flex flextp">
      <div class="title">${title}</div>
      <span>Poste de l’employer dans l’entreprise</span>
      <div class="paragraph">${text}</div>
    </div>
    <div class="flex flexbt">
      <div class="title">Les taches de l’employer</div>
      <span>Poste de l’employer dans l’entreprise</span>
      <div class="paragraph">${tasks}</div>
    </div>
  `
}
function imagePopNone() {
  // Cacher le pop-up
  const imagePop = document.getElementById('imagePopId')
  imagePop.style.display = 'none'
  // Afficher carriere-blocs
  const removeElement = document.getElementById('carriere-blocs')
  removeElement.style.display = 'grid'
}


// function imagePop(id) {
//   const imagePop = document.querySelector('#imagePop')
//   const imagePopUnder = document.querySelector('#imagePopUnder')
//   const imagePopContent = document.querySelector('#imagePopContent')
//   const imagePopImage = document.querySelector('#imagePopImage')
//   const imagePopText = document.querySelector('#imagePopText')

//   imagePop.style.display = 'flex'
//   imagePopUnder.style.display = 'block'

//   const image = document.querySelector(`#${id}-image`)
//   const imageUrl = getComputedStyle(image)
//     .backgroundImage.slice(4, -1)
//     .replace(/"/g, '')
//   imagePopImage.style.backgroundImage = `url(${imageUrl})`

//   const text = document.querySelector(`#${id}-text`)
//   imagePopText.innerHTML = text.innerHTML

//   imagePopUnder.addEventListener('click', function () {
//     imagePop.style.display = 'none'
//     imagePopUnder.style.display = 'none'
//   })
//   const carriereBlocs = document.querySelectorAll('.carriere-blocs--img')

//   carriereBlocs.forEach(function (bloc) {
//     const id = bloc.id.replace('-image', '')
//     const button = document.querySelector(`#${id}`)
//     button.addEventListener('click', function () {
//       imagePop(id)
//     })
//   })
// }

////////////animation sur la section Equipe
const cercle = document.querySelector('.cercle')
let isClicked = false
cercle.addEventListener('click', () => {
  const sliders1 = document.querySelectorAll('.slider1')
  const sliders2 = document.querySelectorAll('.slider2')
  const sliders3 = document.querySelectorAll('.slider3')
  const sliders4 = document.querySelectorAll('.slider4')
  const sliders5 = document.querySelectorAll('.slider5')
  const sliders6 = document.querySelectorAll('.slider6')
  const sliders7 = document.querySelectorAll('.slider7')
  const sliders8 = document.querySelectorAll('.slider8')

  if (!isClicked) {
    cercle.style.backgroundImage =
      'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559079/dkfarm/accueil/equipes/bouton2.png)'
    isClicked = true
    sliders1.forEach((slider1) => {
      slider1.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/1lprofil1.png)'
    })
    sliders2.forEach((slider2) => {
      slider2.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/1lprofil2.png)'
    })
    sliders3.forEach((slider3) => {
      slider3.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/1lprofil3.png)'
    })
    sliders4.forEach((slider4) => {
      slider4.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/2lprofil1.png)'
    })
    sliders5.forEach((slider5) => {
      slider5.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/2lprofil2.png)'
    })
    sliders6.forEach((slider6) => {
      slider6.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/3lprofil1.png)'
    })
    sliders7.forEach((slider7) => {
      slider7.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/3lprofil2.png)'
    })
    sliders8.forEach((slider8) => {
      slider8.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559079/dkfarm/accueil/equipes/3lprofil3.png)'
    })
    isClicked = true
  } else {
    cercle.style.backgroundImage =
      'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559079/dkfarm/accueil/equipes/button1.png)'
    isClicked = false
    sliders1.forEach((slider1) => {
      slider1.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559089/dkfarm/accueil/equipes/l1profil1.png)'
    })
    sliders2.forEach((slider2) => {
      slider2.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559089/dkfarm/accueil/equipes/l1profil2.png)'
    })
    sliders3.forEach((slider3) => {
      slider3.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559089/dkfarm/accueil/equipes/l1profil3.png)'
    })
    sliders4.forEach((slider4) => {
      slider4.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559089/dkfarm/accueil/equipes/l2profil1.png)'
    })
    sliders5.forEach((slider5) => {
      slider5.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559089/dkfarm/accueil/equipes/l2profil3.png)'
    })
    sliders6.forEach((slider6) => {
      slider6.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/l3profil1.png)'
    })
    sliders7.forEach((slider7) => {
      slider7.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/l3profil2.png)'
    })
    sliders8.forEach((slider8) => {
      slider8.style.backgroundImage =
        'url(https://res.cloudinary.com/digital-x-sarl/image/upload/v1667559078/dkfarm/accueil/equipes/l3profil3.png)'
    })
    isClicked = false
  }
})

// // MODAL SUR LA PAGE CARRIERE
// var imageUrls = [
//   'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil1.png")',
//   'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil2.png")',
//   'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil3.png")',
//   'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil4.png")',
//   'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil5.png")',
//   'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil6.png")',
//   'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil7.png")',
//   'url("https://res.cloudinary.com/digital-x-sarl/image/upload/v1668162570/dkfarm/accueil/carriere/bloc%202/profil8.png")',
// ]
// let imageNumber = imageUrls.length
// function imagePop(id) {
//   document.getElementById('imagePopId').style.display = 'block'
//   document.getElementById('carriere-blocs').style.display = 'none'
//   // document.getElementsByTagName("body")[0].style.overflowY = "hidden";
//   let imageName = document.getElementById(id + '-image').style.backgroundImage
//   let imageIndex = 0
//   imageIndex = imageUrls.indexOf(imageName)

//   document.getElementsByClassName('imageContain')[0].style.animation =
//     'he 800ms forwards'

//   document.getElementsByClassName('imageContain')[0].style.backgroundImage =
//     imageUrls[imageIndex]
// }
// function imagePopNone() {
//   document.getElementsByClassName('imagePop')[0].style.display = 'none'
//   document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
//   document.getElementsByClassName('carriere-blocs')[0].style.display = 'grid'
// }

function closeImagePop() {
  const imagePop = document.getElementById('imagePop')
  imagePop.style.display = 'none'
}

var testimContent = Array.prototype.slice.call(
    document.getElementById('banner__container').children,
  ),
  testimSpeed = 8000,
  currentSlide = 0,
  currentActive = 0,
  testimTimer
// coding with nick
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimContent.length; k++) {
      testimContent[k].classList.remove('active')
      testimContent[k].classList.remove('inactive')
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add('inactive')
    }
    testimContent[slide].classList.add('active')

    currentActive = currentSlide

    clearTimeout(testimTimer)
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1))
    }, testimSpeed)
  }

  playSlide(currentSlide)
}

//////// gérer les sous-menus du about

function chooseTab(headerToSelect, identifier) {
  const contentIdentifier = 'content-' + identifier
  const newTabContent = $('[data-tab="' + contentIdentifier + '"]')

  const selectedHeader = $('.quisommenous__submenu--selected')
  const seclectedImage = $('.quisommenous__image--selected')
  const dataTab = selectedHeader.attr('data-tab')
  const dataImg = seclectedImage.attr('data-tab')
  const selectedContentIdentifier = 'content-' + dataTab

  if (dataTab !== identifier) {
    selectedHeader.removeClass('quisommenous__submenu--selected')
    const selectedTabContent = $(
      '[data-tab^="' + selectedContentIdentifier + '"]',
    )

    selectedTabContent.addClass('hide')

    $(headerToSelect).addClass('quisommenous__submenu--selected')
    newTabContent.removeClass('hide')
  }

  if (dataImg !== identifier) {
    seclectedImage.removeClass('quisommenous__image--selected')
    const selectedImageContent = $(
      '[data-tab^="' + 'image-' + identifier + '"]',
    )

    selectedImageContent.addClass('quisommenous__image--selected')
  }
}
