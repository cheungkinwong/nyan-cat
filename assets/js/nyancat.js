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
let y = -100;
let x = getRandomInt(window.innerWidth / 2);
let angle = getRandomInt(5);
let speed = getRandomInt(5);

const cat = document.getElementById("nyan");
const song = document.getElementById("nyansong");
const button = document.getElementById("nyancat");

function onClick() {
  counter();
  change();
  reset();
  rain();
}

function counter() {
  setInterval(function() {
    if (seconds < 10) {
      seconds++;
      console.log("lol", seconds);
    } else {
      clearInterval(counter);
    }
  }, 1000);
}

function getRandomInt(max) {
  return Math.round(Math.random() * Math.floor(max));
}

function change() {
  document.body.style.background = "url('./assets/img/nyanbackground.png')";
  song.play();
  button.style.display = "none";
}

function reset() {
  setTimeout(function() {
    song.pause();
    song.currentTime = 0;
    document.body.style.background = "none";
    button.style.display = "block";
  }, 10000);
}

function rain() {
  setInterval(function() {
    if (y > window.innerHeight || x > window.innerWidth) {
      y = -100;
      x = getRandomInt(window.innerWidth / 2);
      angle = getRandomInt(10);
      speed = getRandomInt(10);
      console.log("lmao", seconds);
    } else if (seconds === 10) {
      clearInterval(rain);
      cat.style.display = "none";
    } else {
      x += angle;
      y += speed;
      cat.style.top = y + "px";
      cat.style.left = x + "px";
    }
  }, 5);
}
