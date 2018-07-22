function totalDigitRekursif(angka) {
  // you can only write your code here!
  // var num = []
  // var str = angka.toString()
  // for (var i = 0;i<str.length;i++) {num.push(str[i])}
  // if (num.length === 1) {return angka}
  // var x = parseInt(num[0])+parseInt(num[1])
  // num.splice(0,2,x)
  // var temp =''
  // for (var j = 0; j < num.length; j++) { temp += num[j]}
  // return totalDigitRekursif(temp)

  if(angka == 0){
      return angka;
  }

  return (angka % 10 + Math.floor(totalDigitRekursif(angka/10)))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

