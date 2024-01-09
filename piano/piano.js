var numberOfPianoButtons = document.querySelectorAll(".piano").length;

for (var i = 0; i < numberOfPianoButtons; i++) {

  document.querySelectorAll(".piano")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var a = new Audio("tunes/a.wav");
      a.play();
      break;

    case "w":
      var w = new Audio("tunes/w.wav");
      w.play();
      break;

    case "s":
      var s = new Audio('tunes/s.wav');
      s.play();
      break;

    case "e":
      var e = new Audio('tunes/e.wav');
      e.play();
      break;

    case "t":
      var t = new Audio('tunes/t.wav');
      t.play();
      break;

    case "d":
      var d = new Audio('tunes/d.wav');
      d.play();
      break;

    case "g":
      var g = new Audio('tunes/g.wav');
      g.play();
      break;

      case "y":
        var y = new Audio('tunes/y.wav');
        y.play();
        break;
        
        case "h":
            var h = new Audio('tunes/h.wav');
            h.play();
            break;

            case "u":
                var u = new Audio('tunes/u.wav');
                u.play();
                break;

    case "j":
        var j = new Audio('tunes/j.wav');
        j.play();
        break;

        case "k":
            var k = new Audio('tunes/k.wav');
            k.play();
            break;

            case "o":
                var o = new Audio('tunes/o.wav');
                o.play();
                break;

                case "l":
                    var l = new Audio('tunes/l.wav');
                    l.play();
                    break;

                    case "p":
                        var p = new Audio('tunes/p.wav');
                        p.play();
                        break;

                        case ";":
                            var b = new Audio('tunes/;.wav');
                            b.play();
                            break;

                            default: console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}