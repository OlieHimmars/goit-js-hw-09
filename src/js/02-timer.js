import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js"
import Notiflix from 'notiflix';

let onCount = null;
let newDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  disableMobile: true,
    onClose(selectedDates) {
        newDate = selectedDates[0].getTime();
        onCount = newDate - fp.now.getTime();
    if (newDate > fp.now.getTime()) {
        startBtn.disabled = false;
        convertMs(onCount);
    } else{
        Notiflix.Notify.failure('Please choose a date in the future');
    };
  },
};

const startBtn = document.querySelector("button[type='button']");
const myInput = document.querySelector("#datetime-picker");
const fp = flatpickr(myInput, options);
const counter = {};

let daysOnCount = document.querySelector("span[data-days]");
let hoursOnCount = document.querySelector('span[data-hours]');
let minOnCount = document.querySelector('span[data-minutes]');
let secOnCount = document.querySelector('span[data-seconds]');

//let onCount = 0;
startBtn.disabled = true;
startBtn.addEventListener('click', onStart);
//myInput.addEventListener('submit', options.onClose)

function convertMs(ms) {
  // Number of milliseconds per unit of time
    ms -= 1000;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
   counter.days = Math.floor(ms / day);
  // Remaining hours
   counter.hours = Math.floor((ms % day) / hour);
  // Remaining minutes
   counter.minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
   counter.seconds = Math.floor((((ms % day) % hour) % minute) / second);

 // = { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function onStart(e) {
    setInterval( updateClock(counter), 1000 );

};

function updateClock({ days, hours, minutes, seconds }) {
    //onCount = newDate - fp.now.getTime();
    daysOnCount.innerHTML = addLeadingZero(days);
    hoursOnCount.innerHTML = addLeadingZero(hours);
    minOnCount.innerHTML = addLeadingZero(minutes);
    secOnCount.innerHTML = addLeadingZero(seconds);
}
