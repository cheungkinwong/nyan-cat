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
const cat = document.getElementById("nyan");
const song = document.getElementById("nyansong");
const button = document.getElementById("nyancat");

function onClick() {
  counter();
  change();
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
  return Math.floor(Math.random() * Math.floor(max));
}

function change() {
  console.log("rofl", seconds);

  if (seconds < 10) {
    document.body.style.background = "url('./assets/img/nyanbackground.png')";
    song.play();
    button.style.display = "none";
  } else {
    song.pause();
    song.currentTime = 0;
    document.body.style.background = "none";
    button.style.display = "block";
  }
}

function rain() {
  setInterval(function() {
    console.log("lmao", seconds);
    if (y > window.innerHeight || x > window.innerWidth) {
      y = -100;
      x = getRandomInt(window.innerWidth / 2);
    } else if (seconds == 10) {
      clearInterval(rain);
      cat.style.display = "none";
    } else {
      x++;
      y++;
      cat.style.top = y + "px";
      cat.style.left = x + "px";
    }
  }, 5);
}
