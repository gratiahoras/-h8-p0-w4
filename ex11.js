function changeMe(arr) {
    // you can only write your code here!
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            console.log('');
            
        }
        var obj = {}
        var temp =[i+1]+'. '+arr[i][0] +' '+arr[i][1]+':'
        obj.firstName = arr[i][0]
        obj.lastName = arr[i][1]
        obj.gender = arr[i][2]
        // obj.age = obj.age = 2018 - arr[i][3]
        if (arr[i][3] === undefined) {
            obj.age = 'Invalid birth year'
        }else{
            obj.age = 2018 - arr[i][3]
        }
        console.log(temp);
        console.log(obj);
        
        
        
        // console.log(temp);
    }
    // return temp
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""