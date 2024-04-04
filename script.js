//Countdown functionality
let countDownDate = new Date('Apr 10, 2024 20:37:25').getTime();
let getRemainingTime = () => {
  let currentTime = new Date().getTime();
  let timeDifference = countDownDate - currentTime;
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  let getRemainingDays = () => {
    let remainingDays = document.querySelectorAll('.days');
    remainingDays.forEach((remainingDay) => {
      remainingDay.innerHTML = days;
    });
  };
  let getRemainingHours = () => {
    let remainingHours = document.querySelectorAll('.hours');
    remainingHours.forEach((remainingHour) => {
      remainingHour.innerHTML = hours;
    });
  };

  let getRemainingMinutes = () => {
    let remainingMinutes = document.querySelectorAll('.minutes');
    remainingMinutes.forEach((remainingMinute) => {
      remainingMinute.innerHTML = minutes;
    });
  };
  let getRemainingSeconds = () => {
    let remainingSeconds = document.querySelectorAll('.seconds');
    remainingSeconds.forEach((remainingSecond) => {
      remainingSecond.innerHTML = seconds;
    });
  };

  getRemainingDays();
  getRemainingHours();
  getRemainingMinutes();
  getRemainingSeconds();

  //Animation functionality

  if (seconds === 0) {
    document.getElementById('minutes').classList.add('animate');
    setTimeout(
      () => document.getElementById('minutes').classList.remove('animate'),
      1000
    );
  }
  if (minutes === 0) {
    document.getElementById('hours').classList.add('animate');
    setTimeout(
      () => document.getElementById('hours').classList.remove('animate'),
      1000
    );
  }
  if (hours === 0) {
    document.getElementById('days').classList.add('animate');
    setTimeout(
      () => document.getElementById('days').classList.remove('animate'),
      1000
    );
  }
};
setInterval(getRemainingTime, 1000);
