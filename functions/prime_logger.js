const prime = n => {
  for (var num= 2; num <= n; num++) {
    var notPrime = false;
    for (var i = 2; i <= num; i++) {
      if(num%i===0 && i!==num) {
        notPrime = true;
      }
    }
    if(notPrime === false) {
      console.log(num);
    }
  }
}
console.log(prime(100));
