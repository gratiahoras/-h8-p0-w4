function checkAB(num) {
    // you can only write your code here!
    var wordA = []
    var wordB = []
   for (var i = 0; i < num.length; i++) {
       if (num[i] === 'a') {wordA.push(i)}
       if (num[i] === 'b') {wordB.push(i)}
    }
    var result = []
   for (var j = 0; j < wordA.length; j++) {
       for (var k = 0; k < wordB.length; k++) {
           var sum = wordA[j] - wordB[k]
           result.push(sum)
       }
   }
   var bool = false;
   for (var l = 0; l < result.length; l++) {
       if (result[l] === 4 || result[l] === -4) {bool = true}
       else {bool = false}
   }
   return bool
   
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false