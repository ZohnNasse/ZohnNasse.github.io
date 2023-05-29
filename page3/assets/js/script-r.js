document
  .getElementById('switchToDesktop')
  .addEventListener('click', function () {
    var imageContainer = document.createElement('div')
    imageContainer.className = 'image-container'
    var image = document.createElement('img')
    image.src = '/page3/assets/images/home.jpg'
    image.alt = 'Home Image'
    imageContainer.appendChild(image)
    document.getElementById('container').appendChild(imageContainer)
  })

document
  .getElementById('switchToMobile')
  .addEventListener('click', function () {
    var imageContainer = document.createElement('div')
    imageContainer.className = 'image-container'
    var image = document.createElement('img')
    image.src = '/page3/assets/images/contact.jpg'
    image.alt = 'Contact Image'
    imageContainer.appendChild(image)
    document.getElementById('container').appendChild(imageContainer)
  })
