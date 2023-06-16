/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

async function wait(n) {
  await new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
  console.log("hello");
}
wait(5);
