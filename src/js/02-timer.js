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
           
        onCount = selectedDates[0].getTime() - fp.now.getTime();
        console.log(onCount);
        console.log(selectedDates[0]);
        console.log(fp.now);
    if (onCount > 0) {
        startBtn.disabled = false;
    } else{
        Notiflix.Report.failure('Please choose a date in the future', '', 'OK');
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

let onCount = 0;
startBtn.disabled = true;
startBtn.addEventListener('click', onStart);
//myInput.addEventListener('submit', options.onClose)


function onStart(e) {
    setInterval(convertMs(onCount), 1000);
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
    let days = Math.floor(ms / day);
    daysOnCount.innerHTML = addLeadingZero(days);
  // Remaining hours
    let hours = Math.floor((ms % day) / hour);
    hoursOnCount.innerHTML = addLeadingZero(hours);;
  // Remaining minutes
    let minutes = Math.floor(((ms % day) % hour) / minute);
    minOnCount.innerHTML = addLeadingZero(minutes);
  // Remaining seconds
    let seconds = Math.floor((((ms % day) % hour) % minute) / second);
    secOnCount.innerHTML = addLeadingZero(seconds);

    ms -= 1000;
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};