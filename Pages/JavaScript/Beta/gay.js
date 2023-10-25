function mainLoop(){
  const gay = document.querySelectorAll("*");
  gay.forEach(tra => {
    tra.style.transform = `rotate(${Date.now()/25%360}deg)`;
  });
  
  const rotated = document.querySelector(".logo");
  rotated.style.transform = `rotate(${Date.now()/5%360}deg)`;
  requestAnimationFrame(mainLoop);
}
window.onload = () => {
requestAnimationFrame(mainLoop);
}

// by haha0201