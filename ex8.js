function urutkanAbjad(str) {
    // you can only write your code here!
    var arr = []
    var result = []
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i])
        arr.sort()
    }
    for (var j = 0; j < arr.length; j++) {
        result += arr[j]
        
    }
    return result
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'