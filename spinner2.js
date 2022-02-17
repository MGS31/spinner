// adding the sentance structure to account for the different animation styles.
const sentance = "|/-\|/-\|";
// pushing the setnance to an array with .split.
let arr = sentance.split('');
// looping through the index of the array with a for in.
for (const index in arr) {
  //setting the timeout for the array to use the \r function + array index + a space.
    setTimeout(() => {
    process.stdout.write('\r'+arr[index]+" ");
    // times the index by 300 ms to rotate evenly.
  }, 300 * index);
};
// setting an extra time out to remove the percentage @MikeB84 is credited for this assit!
setTimeout(() => {
  console.log();
}, 1800);