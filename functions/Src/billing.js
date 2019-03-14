const billing = (amountTendered ,transactionCharge) => {

  console.log("This is what the billed amount is (less transaction charges);");
  return amountTendered - transactionCharge*amountTendered;
}
  console.log(billing(100000,0.025));
