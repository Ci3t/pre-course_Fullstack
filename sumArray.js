const sumArray = (arr)=>{ 
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
}
console.log(sumArray([1,22,5,5]));