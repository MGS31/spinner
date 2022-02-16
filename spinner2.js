const sentance = "|/-\|/-\|\n";
let arr = sentance.split('');
for (const index in arr) {
    setTimeout(() => {
    process.stdout.write('\r'+arr[index]);
  }, 300 * index);
};
