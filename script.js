// Dnesni datum - identifikace a zobrazeni
let currentDate = new Date()
console.log(`Dnesni datum: ${currentDate}`);

let currentDay = currentDate.getDay();
console.log(`Aktualni den (poradi dle JS): ${currentDay}`);

const daysOfWeek = ['neděle','pondělí', 'úterý','středa','čtvrtek','pátek','sobota'];

const dayDisplay = document.querySelector('.day');
dayDisplay.textContent = `Dnes je: ${daysOfWeek[currentDay]}, ${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

// Pocatecni datum - identifikace
const startDateString = "10/12/2020 18:00:00";
const startDate = new Date(startDateString);
console.log(`Pocatecni datum: ${startDate}`);

// Vypocet rozdilu
let differenceDays = Math.trunc((currentDate - startDate)/(1000*60*60*24));
console.log(`Rozdil v celych dnech: ${differenceDays}`);
let differenceWeeks = Math.trunc(differenceDays/7);
console.log(`Rozdil v celych tydnech: ${differenceWeeks}`);

// Overeni, je-li tyden lichy nebo sudy a zobrazeni
function isOdd() {
  return (differenceWeeks + 1) % 2;
}

console.log(`Zbytek po deleni: ${isOdd()}`);

let determineOdd = isOdd();

const weekDisplay = document.querySelector('.week');
weekDisplay.textContent = `Tento týden je: ${determineOdd === 0 ? 'sudý' : 'lichý'}`;

// Vyber obrazku na pozadi dle licheho/sudeho tydne a dne v tydnu

let bgImage = document.querySelector('.image');

if (determineOdd === 0) {
  if (currentDay === 0) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/sudy${currentDay}.jpg)`;
  }
  if (currentDay === 1) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/sudy${currentDay}.jpg)`;
  }
  if (currentDay === 2) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/sudy${currentDay}.jpg)`;
  }
  if (currentDay === 3) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/sudy${currentDay}.jpg)`;
  }
  if (currentDay === 4) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/sudy${currentDay}.jpg)`;
  }
  if (currentDay === 5) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/sudy${currentDay}.jpg)`;
  }
  if (currentDay === 6) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/sudy${currentDay}.jpg)`;
  }
  
} else {
  if (currentDay === 0) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/lichy${currentDay}.jpg)`;
  }
  if (currentDay === 1) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/lichy${currentDay}.jpg)`;
  }
  if (currentDay === 2) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/lichy${currentDay}.jpg)`;
  }
  if (currentDay === 3) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/lichy${currentDay}.jpg)`;
  }
  if (currentDay === 4) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/lichy${currentDay}.jpg)`;
  }
  if (currentDay === 5) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/lichy${currentDay}.jpg)`;
  }
  if (currentDay === 6) {
    bgImage.style.backgroundImage = `url(https://codehard.cz/razitkovani/img/lichy${currentDay}.jpg)`;
  }
}

// Random zobrazovani emojis z array
// https://www.quackit.com/character_sets/emoji/emoji_v3.0/emoji_icons_smileys_and_people.cfm
const emojis = ['😀','😁', '😎', '🙉', '😺', '👍', '👮🏻', '😈', '🐶', '🦁', '🐯', '🐬', '💪', '💩', '🤡', '👻'];

const randomEmoji= function() {
  return Math.trunc(Math.random() * (emojis.length));
}

const headingDisplay = document.querySelector('.heading');
headingDisplay.innerHTML = `${emojis[randomEmoji()]}Razítkování${emojis[randomEmoji()]}`;

// Zobrazeni random obrazku z https://source.unsplash.com/ v novem okne (na pozadi je overlay)

const headingButton = document.querySelector('.heading');
const closeButton = document.querySelector('.close-window');
const popupWindow = document.querySelector('.popup-window');
const overlay = document.querySelector('.overlay');

headingButton.addEventListener('click', () => {
  popupWindow.className = 'popup-window';
  overlay.className = 'overlay';
  popupWindow.style.backgroundImage = 'url(https://source.unsplash.com/random/800x600/?animal)';

});

const closeWindow = function() {
  popupWindow.className = 'popup-window hidden';
  overlay.className = 'overlay hidden';
}

closeButton.addEventListener('click', closeWindow);

overlay.addEventListener('click', closeWindow);

