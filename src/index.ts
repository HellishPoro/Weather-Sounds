import "./index.css";

import rainSound from "../src/assets/sounds/rain.mp3"
import summerSound from "../src/assets/sounds/summer.mp3";
import winterSound from "../src/assets/sounds/winter.mp3";

import rainBg from "../src/assets/rain.jpg";
import summerBg from "../src/assets/summer.jpg";
import winterBg from "../src/assets/winter.jpg";

import rainIcon from "../src/assets/icons/cloud-rain.svg";
import summerIcon from "../src/assets/icons/sun.svg";
import winterIcon from "../src/assets/icons/cloud-snow.svg";
import pauseIcon from "../src/assets/icons/pause.svg";

type Sounds ={
  rain: HTMLAudioElement
  summer: HTMLAudioElement
  winter: HTMLAudioElement
}

type Backgrounds={
  rain: string
  summer: string
  winter: string
}

type Icons={
  rain: string
  summer: string
  winter: string
  pause: string
}


const sounds: Sounds = {
  rain: new Audio(rainSound),
  summer: new Audio(summerSound),
  winter: new Audio(winterSound),
};

const backgrounds:Backgrounds = {
  rain: rainBg,
  summer: summerBg,
  winter: winterBg,
};

const icons: Icons = {
  rain: rainIcon,
  summer: summerIcon,
  winter: winterIcon,
  pause: pauseIcon,
};

const backgroundKeys = Object.keys(backgrounds);
const randomIndex = Math.floor(Math.random() * backgroundKeys.length);
const randomBackground = backgroundKeys[randomIndex];
document.body.style.backgroundImage = `url(${backgrounds[randomBackground as keyof Backgrounds]})`;

let currentSound: HTMLAudioElement;

document.querySelectorAll<HTMLElement>(".sound-button").forEach((btn) => {
  const soundName = btn.dataset.sound;
  const icon: HTMLImageElement = document.createElement("img");
  icon.src = icons[soundName as keyof Icons];
  icon.alt = soundName as keyof Sounds;
  btn.appendChild(icon);

  btn.addEventListener("click", () => {
    const sound = sounds[soundName as keyof Sounds];

    if (currentSound && currentSound !== sound) {
      currentSound.pause();
      currentSound.currentTime = 0;
      document.querySelectorAll<HTMLImageElement>(".sound-button img").forEach((img) => {
        img.src = icons[img.alt as keyof Icons];
      });
    }

    if (sound.paused) {
      sound.play();
      document.body.style.backgroundImage = `url(${backgrounds[soundName as keyof Backgrounds]})`;
      icon.src = icons.pause;
    } else {
      sound.pause();
      icon.src = icons[soundName as keyof Icons];
    }

    currentSound = sound;
  });
});

document.querySelector(".volume-slider")?.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement
  const volume = parseFloat(target.value);
  if (currentSound) {
    currentSound.volume = volume;
  }
});
