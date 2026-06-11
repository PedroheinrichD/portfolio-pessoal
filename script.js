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