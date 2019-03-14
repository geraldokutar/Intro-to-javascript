const log_evens = n =>{
  for (i = 0;i < n;i++) {
    mod = i%2;
    if (mod==0) {
      console.log(i)
    }
  }
}
console.log(log_evens(20));
//n =20;
