import "./index.css";

import rainSound from "../src/assets/sounds/rain.mp3";
import summerSound from "../src/assets/sounds/summer.mp3";
import winterSound from "../src/assets/sounds/winter.mp3";

import rainBg from "../src/assets/rain.jpg";
import summerBg from "../src/assets/summer.jpg";
import winterBg from "../src/assets/winter.jpg";

import rainIcon from "../src/assets/icons/cloud-rain.svg";
import summerIcon from "../src/assets/icons/sun.svg";
import winterIcon from "../src/assets/icons/cloud-snow.svg";
import pauseIcon from "../src/assets/icons/pause.svg";

const sounds = {
  rain: new Audio(rainSound),
  summer: new Audio(summerSound),
  winter: new Audio(winterSound),
};

const backgrounds = {
  rain: rainBg,
  summer: summerBg,
  winter: winterBg,
};

const icons = {
  rain: rainIcon,
  summer: summerIcon,
  winter: winterIcon,
  pause: pauseIcon,
};

const backgroundKeys = Object.keys(backgrounds);
const randomIndex = Math.floor(Math.random() * backgroundKeys.length);
const randomBackground = backgroundKeys[randomIndex];
document.body.style.backgroundImage = `url(${backgrounds[randomBackground]})`;

let currentSound = null;

document.querySelectorAll(".sound-button").forEach((btn) => {
  const soundName = btn.dataset.sound;
  const icon = document.createElement("img");
  icon.src = icons[soundName];
  icon.alt = soundName;
  btn.appendChild(icon);

  btn.addEventListener("click", () => {
    const sound = sounds[soundName];

    if (currentSound && currentSound !== sound) {
      currentSound.pause();
      currentSound.currentTime = 0;
      document.querySelectorAll(".sound-button img").forEach((img) => {
        img.src = icons[img.alt];
      });
    }

    if (sound.paused) {
      sound.play();
      document.body.style.backgroundImage = `url(${backgrounds[soundName]})`;
      icon.src = icons.pause;
    } else {
      sound.pause();
      icon.src = icons[soundName];
    }

    currentSound = sound;
  });
});

document.querySelector(".volume-slider").addEventListener("input", (e) => {
  const volume = e.target.value;
  if (currentSound) {
    currentSound.volume = volume;
  }
});
