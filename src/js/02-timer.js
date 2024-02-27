import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];


      if (selectedDate > new Date()) {
        document.querySelector('[data-start]').removeAttribute('disabled');
      } else {
        window.alert("Please choose a date in the future");
        document.querySelector('[data-start]').setAttribute('disabled', 'true');
      }
    },
  };

  const flatpickrInstance = flatpickr('#datetime-picker', options);

  function startCountdown() {
    const endDate = flatpickrInstance.selectedDates[0];
    const intervalId = setInterval(updateTimer, 1000);


    function updateTimer(endDate) {
        const currentTime = new Date();
        const timeDifference = endDate - currentTime;

        if (timeDifference <= 0) {
            clearInterval(intervalId);
            updateInterface(convertMs(0));
        } else {
            const timeRemaining = convertMs(timeDifference);
            updateInterface(timeReamining);
        }
    }

    function updateInterface(timeRemaining) {
        document.querySelector('[data-days]').textContent = addLeadingZero(timeRemaining.days);
        document.querySelector('[data-hours]').textContent = addLeadingZero(timeRemaining.hours);
        document.querySelector('[data-minutes]').textContent = addLeadingZero(timeRemaining.minutes);
        document.querySelector('[data-seconds]').textContent = addLeadingZero(timeRemaining.seconds);
    }
  }

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

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
  
 