;(function () {
  const monitorContainer = document.querySelector('.monitor .content')
  const contactInfo = document.createElement('div')

  const email = document.createElement('p')
  email.innerHTML = 'Email: <a href="mailto:zohnForAI@gmail.com">zohnForAI@gmail.com</a>'
  contactInfo.appendChild(email)

  const instagram = document.createElement('p')
  instagram.innerHTML = 'Instagram: <a href="https://www.instagram.com/k12j34/" target="_blank">https://www.instagram.com/k12j34/</a>'
  contactInfo.appendChild(instagram)

  monitorContainer.appendChild(contactInfo)
})()
