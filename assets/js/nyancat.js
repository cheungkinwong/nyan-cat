// const onClick = () => {
//   const cat = document.getElementById("nyan");
//   const song = document.getElementById("nyansong");
//   const button = document.getElementById("nyancat");

//   song.play();
//   document.body.style.background = "url('./assets/img/nyanbackground.png')";
//   button.style.display = "none";

//   const frame = () => {
//     if (pos == 620) {
//       clearInterval(id);
//     } else {
//       pos++;
//       cat.style.top = pos + "px";
//       cat.style.left = pos + "px";
//     }
//   };

//   let id = setInterval(frame, 5);
//   let pos = -100;
//   setInterval(onClick, 4000);
// };

//new try

// var random = () => {
//   return Math.floor(Math.random() * Math.floor(max));
// };

const onClick = () => {
  const cat = document.getElementById("nyan");
  const song = document.getElementById("nyansong");
  const button = document.getElementById("nyancat");
  // count to 10seconds
  let seconds = 0;
  let pos = -100;
  const counter = setInterval(function() {
    if (seconds < 10) {
      document.body.style.background = "url('./assets/img/nyanbackground.png')";
      song.play();
      button.style.display = "none";
      seconds++;
    } else {
      song.pause();
      document.body.style.background = "none";
      button.style.display = "block";
      clearInterval(counter);
    }
    const frame = () => {
      if (pos == 620) {
        pos = 0;
      } else {
        pos++;
        cat.style.top = pos + "px";
        cat.style.left = pos + "px";
      }
    };
    setInterval(frame, 5);
    console.log("lol", seconds);
  }, 1000);
};
