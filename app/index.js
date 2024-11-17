import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// sorry if you were expecting easy to understand code. im rlly new to all this lol

// Days array for date display
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// Get the character element and initialize the character state
let chara = document.getElementById("chara");
let charaname = "[Liam]"; // Keeps track of the character state

// Get the background element and initialize the background state
let background = document.getElementById("background");
let overlay = document.getElementById("overlay");
let location = 0; // Keeps track of the background state
let menumode = 0
let menuopen = 0

// Get menu element
let menu = document.getElementById("menu");
menu.style.visibility = "hidden";

// Get text elements
const time = document.getElementById("time");
const date = document.getElementById("date");

// Update the clock every minute
clock.granularity = "minutes";

// Clock tick event to update time and date
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();

  // 12h or 24h format based on user settings
  if (preferences.clockDisplay === "12h") {
    hours = hours % 12 || 12; // 12h format
  } else {
    hours = util.zeroPad(hours); // 24h format with zero padding
  }

  let mins = util.zeroPad(today.getMinutes());
  let thedate = util.zeroPad(today.getDate());
  let theday = days[today.getDay()];
  time.text = `${hours}:${mins} - ${theday} ${thedate}`;

};

// Event listener for debugging touch interaction
chara.addEventListener("mousedown", () => {
  menu.style.visibility = "visible";
  menuopen = 1
});

background.addEventListener("mousedown", () => {
  menu.style.visibility = "hidden";
  menuopen = 0
});

overlay.addEventListener("mousedown", () => {
  if (menuopen === 1) {
    menu.style.visibility = "hidden";
    menuopen = 0
  }
  else {
    menu.style.visibility = "visible"
    menuopen = 1
  }
});

let menurect = document.getElementById("menu-rect")
let menuitem1 = document.getElementById("menu-item1")
menuitem1.addEventListener("mousedown", () => {
  if (menuopen === 1) {
    if (menumode === 2) {
      charaname = "[Bryce]"
      chara.href = "characters/bryce.png"
      if (location === 1) {
        makethemenusmaller();
        menuitem1.text = charaname;
        menuitem2.text = "Enter radio...";
        menuitem3.text = "Change character";
        menumode = 0
      }
      else {
        makethemenusmaller();
        menuitem1.text = charaname;
        menuitem2.text = "Kill";
        menuitem3.text = "Change character";
        menumode = 0
      }
      menu.style.visibility = "hidden"
    }
    else if (menumode === 1) {
      location = 2
      background.href = "locations/sf.png"
      overlay.href = "overlays/overlay_sf.png"
      overlay.width = 336
      overlay.height = 336
      menu.style.visibility = "hidden";
      menumode = 0;
      menuopen = 0;
      makethemenusmaller();
      menuitem1.text = charaname;
      menuitem2.text = "Kill";
      menuitem3.text = "Change character";
    }
  }
});

let menuitem2 = document.getElementById("menu-item2")
menuitem2.addEventListener("mousedown", () => {
  if (menuopen === 1) {
    if (menumode === 2) {
      charaname = "[Amelia]";
      chara.href = "characters/amelia.png";
      if (location === 1) {
        makethemenusmaller();
        menuitem1.text = charaname;
        menuitem2.text = "Enter radio...";
        menuitem3.text = "Change character";
        menumode = 0
      }
      else {
        makethemenusmaller();
        menuitem1.text = charaname;
        menuitem2.text = "Kill";
        menuitem3.text = "Change character";
        menumode = 0
      }
      menu.style.visibility = "hidden"
    }
    else if (menumode === 1){
      location = 3
      background.href = "locations/airy.png"
      menu.style.visibility = "hidden";
      menumode = 0;
      menuopen = 0;
      makethemenusmaller();
      menuitem1.text = charaname;
      menuitem2.text = "Kill";
      menuitem3.text = "Change character";
    }
    else if (location === 0) {
      console.log("Kill menu item clicked");
      background.href = "locations/waitingroom.png";
      menuitem2.text = "Enter radio...";
      menu.style.visibility = "hidden";
      location = 1;
      menumode = 0;
      overlay.width = 0
      overlay.height = 0

    } else if (location === 2) {
      console.log("Kill menu item clicked");
      background.href = "locations/waitingroom.png";
      menuitem2.text = "Enter radio...";
      menu.style.visibility = "hidden";
      location = 1;
      menumode = 0;
      overlay.width = 0
      overlay.height = 0
    }
    else if (location === 3) {
      console.log("Kill menu item clicked");
      background.href = "locations/waitingroom.png";
      menuitem2.text = "Enter radio...";
      menu.style.visibility = "hidden";
      location = 1;
      menumode = 0;
      overlay.width = 0
      overlay.height = 0
    }
    else if (location === 1 && menumode === 0) {
      console.log("hi");
      makethemenubigger();
      menuitemextra2.text = "[Radio]";
      menuitemextra.text = "Go to The Plane";
      menuitem1.text = "Go to S.F.";
      menuitem2.text = "Go to Airy's World";
      menuitem3.text = "Back";
      menumode = 1;
    }
  }
});


let menuitem3 = document.getElementById("menu-item3")
menuitem3.addEventListener("mousedown", () => {
  console.log("Current menumode:", menumode); // Debugging log
  if (menuopen === 1) {
    if (menumode === 1) {
      console.log("Running menumode === 1 block");
      makethemenusmaller();
      menuitem1.text = charaname;
      menuitem2.text = "Enter radio...";
      menuitem3.text = "Change character";
      menumode = 0;
    } else if (menumode === 0) {
      console.log("Running menumode === 0 block");
      makethemenubigger();
      menuitemextra2.text = "[Character]";
      menuitemextra.text = "Liam";
      menuitem1.text = "Bryce";
      menuitem2.text = "Amelia";
      menuitem3.text = "Back";
      menumode = 2;
    } else if (menumode === 2) {
      console.log("Running menumode === 2 block");
      makethemenusmaller();
      menuitem1.text = charaname;
      menuitem2.text = "Enter radio...";
      menuitem3.text = "Change character";
      menumode = 0;
    }
  }
});


let menuitemextra = document.getElementById("menu-item-extra1")
menuitemextra.addEventListener("mousedown", () => {
  if (menuopen === 1) {
    if (menumode === 1) {
      console.log(menumode)
      location = 0
      background.href = "locations/plane.png"
      menu.style.visibility = "hidden";
      menumode = 0;
      makethemenusmaller();
      menuitem1.text = charaname;
      menuitem2.text = "Kill";
      menuitem3.text = "Change character";

    }
    else if (menumode === 2) {
      charaname = "[Liam]";
      chara.href = "characters/liam.png";
      if (location === 1) {
        makethemenusmaller();
        menuitem1.text = charaname;
        menuitem2.text = "Enter radio...";
        menuitem3.text = "Change character";
        menumode = 0
      }
      else {
        makethemenusmaller();
        menuitem1.text = charaname;
        menuitem2.text = "Kill";
        menuitem3.text = "Change character";
        menumode = 0
      }
      menu.style.visibility = "hidden"

    }
  }
});
let menuitemextra2 = document.getElementById("menu-item-extra2")

function makethemenubigger() {
  menurect.y = 110
}

function makethemenusmaller() {
  menurect.y = 180
  menuitemextra2.text = ""
  menuitemextra.text = ""
}