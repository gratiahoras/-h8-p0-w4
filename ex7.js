function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp1 = ""
    var digit = 0;
    var tempDigit;
    var temp2 = "";
    for (var i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            temp1 = i.toString();
            temp2 = (angka/i).toString();
            tempDigit = temp1.length + temp2.length
            if(digit == 0 || digit > tempDigit){
                digit = tempDigit
            }
        }
    }
    return digit;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2