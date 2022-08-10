var inputOne = document.getElementById("wakeHours");
var inputTwo = document.getElementById("wakeMinutes");
var amPm = document.getElementById("amPm");
var divOne = document.getElementById("resultOne");
var divTwo = document.getElementById("resultTwo");
var divThree = document.getElementById("resultThree");
var numbers = "";

window.addEventListener("load", startup, false);

function startup() {
  inputOne.value = "00";
  inputTwo.value = "00";
  amPm.value = "AM";
};

function bedTime() {
  var wakeHours = parseInt(inputOne.value);
  var wakeMinutes = parseInt(inputTwo.value);

  if (wakeHours <= 12 && wakeHours !== 0 && wakeMinutes <= 59) {
    var setTime = new Date();
    var a = new Date(wakeHours);
    var b = new Date(wakeMinutes);
    var setTime = new Date();

    if (wakeHours == 12) {
      a = 0;
    }

    if (amPm.value == 'AM') {
      var bedHours = bedHours = new Date(setTime.setHours(a));
    } else if (amPm.value == 'PM') {
      bedHours = new Date(setTime.setHours(+a + 12));
    }

    var bedMinutes = new Date(setTime.setMinutes(b));

    var resultOne = new Date(setTime.getTime() - 360 * 60000);
    var resultTwo = new Date(resultOne.getTime() - 90 * 60000);
    var resultThree = new Date(resultTwo.getTime() - 90 * 60000);

    function retDate(dateObj) {
      var time = '';
      var pm = false;
      if (dateObj.getHours() > 12) {
        time = dateObj.getHours() - 12;
        pm = true;
      } else if (dateObj.getHours() < 12 && dateObj.getHours() != 0) {
        time = dateObj.getHours();
      } else if (dateObj.getHours() == 0) {
        time = "12";
      } else if (dateObj.getHours() == 12) {
        time = "12";
        pm = true;
      }
      if (dateObj.getMinutes() < 10) {
        time = time + ":0" + dateObj.getMinutes();
      } else {
        time = time + ":" + dateObj.getMinutes();
      }
      if (pm == true) {
        time = time + " PM";
      } else {
        time = time + " AM";
      }
      return time;
    }

    divOne.innerHTML = String(retDate(resultOne));
    divTwo.innerHTML = String(retDate(resultTwo));
    divThree.innerHTML = String(retDate(resultThree));

  } else {
    alert("Please enter a valid time");
  }
}