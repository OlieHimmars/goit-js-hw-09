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

startBtn.disabled = true;
startBtn.addEventListener('click', onStart);

function convertMs(ms) {
    ms -= 1000;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
   counter.days = Math.floor(ms / day);
   counter.hours = Math.floor((ms % day) / hour);
   counter.minutes = Math.floor(((ms % day) % hour) / minute);
   counter.seconds = Math.floor((((ms % day) % hour) % minute) / second);
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function onStart(e) {
    setInterval( updateClock(counter), 1000 );
};

function updateClock({ days, hours, minutes, seconds }) {
    daysOnCount.innerHTML = addLeadingZero(days);
    hoursOnCount.innerHTML = addLeadingZero(hours);
    minOnCount.innerHTML = addLeadingZero(minutes);
    secOnCount.innerHTML = addLeadingZero(seconds);
};
