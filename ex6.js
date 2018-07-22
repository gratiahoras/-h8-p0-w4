function hitungHuruf(kata) {
    // you can only write your code here!
   var  m = 0
    var n = 0
    var l = ''
    var result ='-1'
    var split = kata.split(' ')
    for (var i = 0; i < split.length; i++) {
        m = 0
         for (var j = 0; j < split[i].length; j++) {
             for (var k = 0; k < split[i].length; k++) {
                 if (k != j ) {
                     if (split[i][k] == split[i][j]) {
                         if (split[i][k] != l) {
                             l = split[i][k]
                             m += 1
                         }
                     }
                 }
              } 
            
         }
         if (m > n) {
            n = m
            result = split[i]
        } 
    }
    return result
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau