import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector("#datetime-picker")
const btnEl = document.querySelector("[data-start]")

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        ffffff(selectedDates[0])
      console.log(selectedDates[0]);
    },
};

flatpickr(inputEl, options);

btnEl.disabled = true

function ffffff(selectedDates) {
    const rrr = Date.now()
    if (selectedDates < rrr) {
        Notiflix.Notify.failure("Please choose a date in the future");
        // alert("Please choose a date in the future")
      btnEl.disabled = true
       return
  } 
  if (selectedDates > rrr) {
    Notiflix.Notify.success('It іs Ok');
    btnEl.disabled = false
  }
}


inputEl.addEventListener("click", handleInput)


function handleInput() {}