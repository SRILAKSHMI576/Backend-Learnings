function findIndexOfElement(num) {
  const arr = [23, 45, 21, 89, 67, 54, 90, 11, 5];
  const n = arr.length - 1;
  for (let index = 0; index <= n; index++) {
    if (arr[index] == num) {
      console.log(num);
    }
  }
}

//findIndexOfElement(89);
function findIndexOfElement(index, Range) {
  const arr = [23, 45, 21, 89, 67, 54, 90, 11, 5];
  const n = arr.length - 1;
  console.log(arr[index], arr[Range])
}
findIndexOfElement(0, 6);
