// TimerExercise >> Countdown

function countDown(num) {
  let stop = setInterval(() => {
    num--;

    if (num > 0) {
      console.log(num);
    } else {
      clearInterval(stop);
      console.log("DONE!");
    }
  }, 1000);
}
