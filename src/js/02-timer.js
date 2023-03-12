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
  const intervalId = setInterval(() => {
    const selectedDate = flatPickr.selectedDates[0];
    const currentDate = Date.now();

    const deltaTime = selectedDate - currentDate;
    const timer = convertMs(deltaTime);
    updateClockFace(timer);

    if(deltaTime === 0) {
      clearInterval(intervalId)
    }

  }, 1000)
}

function updateClockFace({days, hours, minutes, seconds}) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
};

startBtnEl.addEventListener('click', handlestartTimer)

const flatPickr = flatpickr(inputEl, options);

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