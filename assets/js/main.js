const menu = document.querySelector('#menu-bar')
const navbar = document.querySelector('.navbar')
const scrollTop = document.querySelector('#scroll-top')
const loaderContainer = document.querySelector('.loader_container')

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')

  if (window.scrollY > 60) {
    scrollTop.classList.add('active')
  } else {
    scrollTop.classList.remove('active')
  }
}

function loader () {
  loaderContainer.classList.add('fade-out')
}

function fadeOut () {
  setInterval(loader, 3000)
}

window.onload = fadeOut()
