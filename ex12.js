function shoppingTime(memberId, money) {
    // you can only write your code here!
    var list = [{nama : 'Sepatu Stacattu',
                 harga : 1500000},
                {nama : 'Baju Zoro',
                 harga : 500000},
                {nama : 'Baju H&N',
                harga : 250000},
                {nama : 'Sweater Uniklooh',
                harga : 175000},
                {nama : 'Casing Handphone',
                harga : 50000}]

                var obj = {}
                if (memberId === '' || memberId == undefined) {
                    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
                } else if (money < 50000) {
                    return 'Mohon maaf, uang tidak cukup'
                } else {
                    obj.memberId = memberId
                    obj.money = money
                }
                var lowest = list[4].harga            
                var i = 0
                var x = 0
                var listBeli = []
                while (money >= lowest) {
                    if(money >= list[i].harga){
                      var changeMoney = money -= list[i].harga
                      listBeli[x] =  list[i].nama 
                      x++
                    }    
                    if(i == 4){
                       break     
                    }
                    i++
                }
                    
                    obj.listPurchased = listBeli
                    obj.changeMoney = changeMoney
    return obj
    }
        
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja