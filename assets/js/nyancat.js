function nyanrain() {
  var cat = document.getElementById("nyan");
  var pos = -100;
  document.getElementById("nyansong").play();
  document.body.style.background = "url('./assets/img/nyanbackground.png')";
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 620) {
      clearInterval(id);
    } else {
      pos++;
      cat.style.top = pos + "px";
      cat.style.left = pos + "px";
    }
  }
}
