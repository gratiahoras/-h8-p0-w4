function kaliTerusRekursif(angka) {
    // you can only write your code here!
      if(angka.toString().length == 1){
        return angka
    }

    var mult = 1
    var splitStr = angka.toString().split("");
    for(var i = 0; i<splitStr.length; i++){
        mult *= parseInt(splitStr[i])
        // console.log(mult);
        
    }
    return kaliTerusRekursif(mult)
  }
  

  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6