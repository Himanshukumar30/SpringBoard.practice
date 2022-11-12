document.addEventListener("mousemove", function (e) {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let mouseX = e.pageX;
  console.log(mouseX);
  let mouseY = e.pageY;
  console.log(mouseY);
  let r = (mouseX * 255) / width;
  let b = (mouseY * 255) / height;
  document.body.style.backgroundColor = `rgb(${r}, 0 , ${b})`;
});
