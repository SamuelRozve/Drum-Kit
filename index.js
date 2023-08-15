let numOfDrums= document.querySelectorAll(".drum").length;
for (let i=0 ; i<numOfDrums ; i++){ 
    document.querySelectorAll("button")[i].addEventListener("click", function(){
     
      switch (this.innerHTML) {
      case "s":
          var s = new Audio("./sounds/s.mp3");
          s.play();
        break;
        case "d":
          var d = new Audio("./sounds/d.mp3");
         d.play();
          break;
        case "f":
          var f = new Audio("./sounds/f.mp3");
          f.play();
          break;
        case "j":
          var j = new Audio("./sounds/j.mp3");
          j.play();
          break;
        case "k":
          var k = new Audio("./sounds/k.mp3");
          k.play();
          break;
        case "l":
          var l = new Audio("./sounds/l.mp3");
          l.play();
          break;
        case "g":
          var g = new Audio("./sounds/g.mp3");
          g.play();
          break;
      default: console.log("Please click on the right words!");
        break;
     }
    });
}

/* By Keyboard*/

document.addEventListener("keydown", function (byKeys) {
  switch (byKeys.key) {
    case "s":
      var s = new Audio("./sounds/s.mp3");
      s.play();
      break;
    case "d":
      var d = new Audio("./sounds/d.mp3");
      d.play();
      break;
    case "f":
      var f = new Audio("./sounds/f.mp3");
      f.play();
      break;
    case "j":
      var j = new Audio("./sounds/j.mp3");
      j.play();
      break;
    case "k":
      var k = new Audio("./sounds/k.mp3");
      k.play();
      break;
    case "l":
      var l = new Audio("./sounds/l.mp3");
      l.play();
      break;
    case "g":
      var g = new Audio("./sounds/g.mp3");
      g.play();
      break;
    default: console.log("Please click on the right words!");
      break;
  }

})

