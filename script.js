const texts = ["Front-End Developer", "Web Designer", "Dev Apaixonado"];
let textIndex = 0, charIndex = 0, deleting = false;
const msg = document.getElementById("msg");

function tick() {
  const current = texts[textIndex];
  if (!deleting) {
    msg.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }
    setTimeout(tick, 80);
  } else {
    msg.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(tick, 400);
      return;
    }
    setTimeout(tick, 45);
  }
}
tick();



particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#9D69D3" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1.5
    },
    line_linked: {
      enable: true,
      color: "#9D69D3",
      opacity: 0.2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

let nav = document.querySelector('#navegation');
let hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('#navegation a')

function closeMenu() {
  nav.classList.remove('nav-active')
  hamburger.classList.remove('hamburger-active')
}

function toggleMenu() {
  nav.classList.toggle('nav-active')
  hamburger.classList.toggle('hamburger-active')
}

function updateMenuAccessibility() {
  if (nav.classList.contains('nav-active')) {
    hamburger.setAttribute('aria-label', 'fechar menu')
  }
  else {
    hamburger.setAttribute('aria-label', 'abrir menu')
  }
}



navLinks.forEach(link => {
  link.addEventListener('click', () => {
      closeMenu()
      updateMenuAccessibility()
  })
})

hamburger.addEventListener('click', () => {
  toggleMenu()
  updateMenuAccessibility()
})

