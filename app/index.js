import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// sorry if you were expecting easy to understand code. im rlly new to all this lol

// Days array for date display
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// Get the character element and initialize the character state
let chara = document.getElementById("chara");
let charano = 0; // Keeps track of the character state

// Get the background element and initialize the background state
let background = document.getElementById("background");
let overlay = document.getElementById("overlay");
let location = 0; // Keeps track of the background state
let menumode = 0

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
});

background.addEventListener("mousedown", () => {
  menu.style.visibility = "hidden";
});

let menurect = document.getElementById("menu-rect")
let menuitem1 = document.getElementById("menu-item1")
menuitem1.addEventListener("mousedown", () => {
  console.log("Liam menu item clicked");
});

let menuitem2 = document.getElementById("menu-item2")
menuitem2.addEventListener("mousedown", () => {
  if (location === 0) {
    console.log("Kill menu item clicked");
    location = 1
    background.href = "locations/waitingroom.png";
    menuitem2.text = "Enter radio...";
    menu.style.visibility = "hidden";
  }
  if (location === 1){
    if (menumode === 0){
      makethemenubigger()
      menuitemextra2.text = "[Radio]"
      menuitemextra.text = "Go to The Plane"
      menuitem1.text = "Go to S.F."
      menuitem2.text = "Go to Airy's World"
      menuitem3.text = "Back"
      menumode = 1
    }
  }
});

let menuitem3 = document.getElementById("menu-item3")
menuitem3.addEventListener("mousedown", () => {
  console.log("Change character menu item clicked");
  if (menumode === 1){
    makethemenusmaller()
    menuitem1.text = "[Liam]"
    menuitem2.text = "Enter radio..."
    menuitem3.text = "Change character"
    menumode = 0
  }
});

let menuitemextra = document.getElementById("menu-item-extra1")
menuitemextra.addEventListener("mousedown", () => {
  if (menumode === 1){
  location = 0
  background.href = "locations/plane.png"
  menu.style.visibility = "hidden";
  menumode = 0
  makethemenusmaller()
  menuitem1.text = "[Liam]"
  menuitem2.text = "Kill"
  menuitem3.text = "Change character"
  }
});
let menuitemextra2 = document.getElementById("menu-item-extra2")

function makethemenubigger(){
  menurect.y = 110
  menurect.height = 183
}

function makethemenusmaller(){
  menurect.y = 180
  menurect.height = 110
  menuitemextra2.text = ""
  menuitemextra.text = ""
}