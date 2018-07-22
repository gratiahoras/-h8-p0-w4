function sorting(arrNumber) {
    // code di sini
        arrNumber.sort(function(value1, value2){return value2-value1}) 
        var res = 1 * arrNumber[0]
        return arrNumber
    }
    
  
  
  function getTotal(arrNumber) {
    // code di sini
    var res1 = 0
    var result = ''
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[0] === arrNumber[i]) {
            res1++
        }
    }if (res1 === 0) {
        result = ''
    }else {
        result = 'angka paling besar adalah '+arrNumber[0]+' dan jumlah kemunculan sebanyak '+res1+' kali' }
    return result
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }

  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));


