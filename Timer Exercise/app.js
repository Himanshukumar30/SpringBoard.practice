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

// TimerExercise >>> RandonGame

function randomGame() {
  let count = 0;
  let stop = setInterval(() => {
    let x = Math.random();
    count++;
    if (x > 0.75) {
      clearInterval(stop);
      console.log("Number of tries:", count);
    }
  }, 1000);
}
