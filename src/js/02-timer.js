import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js"
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  disableMobile: true,
    onClose(selectedDates) {
         //newDate = selectedDates[0];
    if (fp.selectedDates[0].getTime() > fp.now.getTime()) {
        startBtn.disabled = false;
    } else{
        Notiflix.Notify.failure('Please choose a date in the future');
    };
  },
};

const startBtn = document.querySelector("button[type='button']");
const myInput = document.querySelector("#datetime-picker");
const fp = flatpickr(myInput, options);

let daysOnCount = document.querySelector("span[data-days]");
let hoursOnCount = document.querySelector('span[data-hours]');
let minOnCount = document.querySelector('span[data-minutes]');
let secOnCount = document.querySelector('span[data-seconds]');

startBtn.disabled = true;
startBtn.addEventListener('click', onStart);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function onStart(e) {
  setInterval(() => { updateClock(convertMs(fp.selectedDates[0].getTime() - Date.now())); }, 1000);
};

function updateClock({ days, hours, minutes, seconds }) {
  if (fp.selectedDates[0].getTime() > Date.now()) {
    daysOnCount.innerHTML = addLeadingZero(days);
    hoursOnCount.innerHTML = addLeadingZero(hours);
    minOnCount.innerHTML = addLeadingZero(minutes);
    secOnCount.innerHTML = addLeadingZero(seconds);
  }
  else {
    clearInterval();
  };
};
