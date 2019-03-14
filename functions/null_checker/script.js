const nulls = number => {

  if (number > 0) {
    console.log(1);
  } else if (number < 0) {
    console.log(-1);
  } else if (number == 0) {
    console.log(0);
  }
}
console.log(nulls(10));
