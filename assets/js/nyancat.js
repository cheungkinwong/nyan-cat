document.getElementById("nyancat").addEventListener("click", nyanrain);

var time;
function timeout() {
  time = setTimeout(nyanrain, 10000);
}

function nyanrain() {
  var elem = document.getElementById("nyan");
  var pos = -100;
  var id = setInterval(frame, 5);

  function frame() {
    if (pos == 620) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
