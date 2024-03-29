//Countdown functionality
let countDownDate = new Date('Apr 3, 2024 20:37:25').getTime();
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

  let animateCards = () => {
    let topCards = document.querySelectorAll('.card-up');
    topCards.forEach((topCard) => {
      topCard.animate(
        [
          // keyframes
          { transform: 'rotateX(-350deg)' },
        ],
        {
          // timing options
          duration: 1000,
          iterations: Infinity,
        }
      );
    });
  };
  animateCards();
};
setInterval(getRemainingTime, 1000);
