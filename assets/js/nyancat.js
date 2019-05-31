// const onClick = () => {
//   const cat = document.getElementById("nyan");
//   const song = document.getElementById("nyansong");
//   const button = document.getElementById("nyancat");
//   var seconds = 0;
//   function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
//   let y = -100;
//   let x = getRandomInt(window.innerWidth / 2);

//   const counter = setInterval(function() {
//     if (seconds < 10) {
//       document.body.style.background = "url('./assets/img/nyanbackground.png')";
//       song.play();
//       button.style.display = "none";
//       seconds++;
//       const rain = setInterval(function() {
//         if (y > window.innerHeight || x > window.innerWidth) {
//           y = -100;
//           x = getRandomInt(window.innerWidth / 2);
//         } else if (seconds == 10) {
//           clearInterval(rain);
//           cat.style.display = "none";
//         } else {
//           x++;
//           y++;
//           cat.style.top = y + "px";
//           cat.style.left = x + "px";
//         }
//       }, 5);
//     } else {
//       song.pause();
//       song.currentTime = 0;
//       document.body.style.background = "none";
//       button.style.display = "block";
//       clearInterval(counter);
//     }
//   }, 1000);
// };

// new code

var seconds = 0;
let y = -350;
let x = getRandomInt(window.innerWidth / 2);
let angle = getRandomInt(10);
let speed = getRandomInt(10);
const cat = document.getElementById("nyan");
const song = document.getElementById("nyansong");
const button = document.getElementById("nyancat");
const box = document.getElementById("nyanbox");

function onClick() {
  counter();
  start();
  rain();
  reset();
}

function counter() {
  setInterval(function() {
    if (seconds < 10) {
      seconds += 1;
      console.log("lol", seconds);
    } else {
      clearInterval(counter);
    }
  }, 1000);
}

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * Math.floor(max));
}

function start() {
  box.style.background = "url('https://i.gifer.com/TPH.gif')";
  box.style.backgroundSize = "cover";

  song.play();
  button.style.display = "none";
  cat.style.display = "block";
  seconds = 0;
  y = -350;
  x = getRandomInt(window.innerWidth / 2);
}

function rain() {
  raining = setInterval(function() {
    if (y > window.innerHeight || x > window.innerWidth) {
      y = -350;
      x = getRandomInt(window.innerWidth / 2);
      angle = getRandomInt(10);
      speed = getRandomInt(10);
    } else {
      x += angle;
      y += speed;
      cat.style.top = y + "px";
      cat.style.left = x + "px";
    }
  }, 5);
}

function reset() {
  setTimeout(function() {
    song.pause();
    song.currentTime = 0;
    box.style.background = "none";
    button.style.display = "block";
    cat.style.display = "none";
    clearInterval(raining);
  }, 10000);
}
