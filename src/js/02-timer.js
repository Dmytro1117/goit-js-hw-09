import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector("#datetime-picker")
const btnEl = document.querySelector("[data-start]")
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let formatDate = null;
let timeDifference = 0;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectDate(selectedDates[0])
      console.log(selectedDates[0]);
    },
};
flatpickr(inputEl, options);
btnEl.disabled = true

btnEl.addEventListener('click', handleStart);
inputEl.addEventListener('click', ()=>{});

function handleStart() {
  inputEl.disabled = true
  btnEl.disabled = true
  timerId = setInterval(startTimer, 1000);
}

function startTimer() {
 
  timeDifference -= 1000;

  if (secondsEl.textContent <= 0 && minutesEl.textContent <= 0 && hoursEl.textContent <= 0) {
    
    Notiflix.Notify.success('Time end');
    clearInterval(timerId);
  } else {
    formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

function selectDate(selectedDates) {
  const dateNow = Date.now()
   console.log(dateNow)
    if (selectedDates < dateNow) {
        Notiflix.Notify.failure("Please choose a date in the future");
        // alert("Please choose a date in the future")
      btnEl.disabled = true
       return
  } 
  if (selectedDates > dateNow) {
    Notiflix.Notify.success('It іs Ok');
    btnEl.disabled = false
    timeDifference = selectedDates.getTime() - dateNow;
    console.log(selectedDates.getTime())
    formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

function renderDate({ days, hours, minutes, seconds }) {
  secondsEl.textContent = seconds;
  minutesEl.textContent = minutes;
  hoursEl.textContent = hours;
  daysEl.textContent = days;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}


Notiflix.Notify.init({
  width: '400px',
  position:  'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '10px',
  opacity: 1,
  borderRadius: '3px',
 timeout: 2000,
  fontAwesomeIconStyle: 'shadow', // 'basic' - 'shadow'
  fontAwesomeIconSize: '35px',
  fontSize: '20px',
});