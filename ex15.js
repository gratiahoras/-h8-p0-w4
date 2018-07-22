function changeVocals(str) {
  //code di sini
  var temp 
  var sstr= "";
  for (var i = 0; i < str.length; i++) {
    temp = ''
    switch (str[i]) {
      case 'a':
        temp = 'b'
        break;
      case 'i':
        temp = 'j'
        break;
      case 'u':
        temp = 'v'
        break;
      case 'e':
        temp = 'f'
        break;
      case 'o':
        temp = 'p'
        break;
      case 'A':
        temp = 'B'
        break;
      case 'I':
        temp = 'J'
        break;
      case 'U':
        temp = 'V'
        break;
      case 'E':
        temp = 'F'
        break;
      case 'O':
        temp = 'P'
        break;
      default:
      temp = str[i]
        break;
    }
    sstr += temp
    

  }
  return reverseWord(sstr)  

}



function reverseWord(str) {
  //code di sini
  var temp = ''
  for (var i = str.length-1; 0 <= i; i--) {
    temp += str[i]
  }return setLowerUpperCase(temp)
  
}

function setLowerUpperCase(str) {
  //code di sini
  var res = []
    var m = str.toLowerCase()
    var n = str.toUpperCase()
    var result = ''
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== m[i] ) {
            res.push(m[i])
        }else {
            res.push(n[i])
        }
        result += res[i]
    }
    
    return removeSpaces(result)
    

}

function removeSpaces(str) {
  //code di sini
  return str.split(' ').join('') //1baris boiiiii
  
}

function passwordGenerator(name) {
  //code di sini
  return name.length >= 5 ? changeVocals(name) : "Minimal karakter yang diinputkan adalah 5 karakter"
}

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

// console.log(changeVocals('Sergei Dragunov'));

