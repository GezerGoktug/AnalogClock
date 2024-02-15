//! DOM ACCESS
const handHour = document.getElementsByClassName("hours")[0];
const handMinutes = document.getElementsByClassName("minutes")[0];
const handSeconds = document.getElementsByClassName("seconds")[0];
//! DOM ACCESS
let hour;
let minutes;
let seconds;
const time = () => {
  const currentTime = new Date();
  hour = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();
  const handSecondsDegree = seconds * 6;
  const handMinutesDegree = (minutes + seconds / 60) * 6;
  const handHourDegree = (hour + minutes / 60) * 30;

  handSeconds.style.transform = `translate(-50%,0)     rotate(${handSecondsDegree}deg)`;
  handMinutes.style.transform = `translate(-50%,0)     rotate(${handMinutesDegree}deg)`;
  handHour.style.transform = `translate(-50%,0)     rotate(${handHourDegree}deg)`;
};
setInterval(time, 1000);
