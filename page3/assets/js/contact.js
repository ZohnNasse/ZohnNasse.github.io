;(function () {
  const monitorContainer = document.querySelector('.monitor .content')
  const contactInfo = document.createElement('div')

  const email = document.createElement('p')
  email.textContent = 'Email: your-email@example.com'
  contactInfo.appendChild(email)

  const instagram = document.createElement('p')
  instagram.textContent = 'Instagram: @your_instagram'
  contactInfo.appendChild(instagram)

  monitorContainer.appendChild(contactInfo)
})()
