const onClick = () => {
  const cat = document.getElementById("nyan");
  const song = document.getElementById("nyansong");
  const button = document.getElementById("nyancat");

  song.play();
  document.body.style.background = "url('./assets/img/nyanbackground.png')";
  button.style.display = "none";

  const frame = () => {
    if (pos == 620) {
      clearInterval(id);
    } else {
      pos++;
      cat.style.top = pos + "px";
      cat.style.left = pos + "px";
    }
  };

  let id = setInterval(frame, 5);
  let pos = -100;
  setInterval(onClick, 4000);
};
