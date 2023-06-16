function clock() {
  console.clear();
  const d = new Date();
  const hour = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();
  console.log(hour + ":" + min + ":" + sec);

  if (hour < 12) {
    console.log(hour + ":" + min + ":" + sec + " AM");
  }
  if (hour > 12) {
    console.log(hour - 12 + ":" + min + ":" + sec + " PM");
  }
}

setInterval(clock, 1000);
