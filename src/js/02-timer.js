import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.getElementById('datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]')
const hoursEl = document.querySelector('[data-hours]')
const minutesEl = document.querySelector('[data-minutes]')
const secondsEl = document.querySelector('[data-seconds]')
startBtnEl.setAttribute('disabled', 'disabled')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const choosenDate = selectedDates[0].getTime();
    const currentDate = Date.now()

    if (choosenDate < currentDate) {
      alert('Please choose a date in the future')
      return;
    }
    startBtnEl.removeAttribute('disabled');
  },
};

function handlestartTimer() {

}

const onStartButtonClick = startBtnEl.addEventListener('click', handlestartTimer)


const flatPickr = flatpickr(inputEl, options);

