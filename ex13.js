function countProfit(shopperss) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  // you can only write your code here!
    var arr = []
    var name = []
    
    for (var i = 0; i < listBarang.length; i++){
        var obj = {}
        obj.product = listBarang[i][0]
        obj.price = listBarang[i][1]
        obj.amount = listBarang[i][2]
        arr[i] = obj;
    }
    
    
    var pembeli
    for(var i = 0; i<arr.length; i++){
        var profit = {}
        pembeli = []
        var totalPrice = 0
        var x = 0;
        for(var j = 0; j<shopperss.length; j++){
            profit.product = arr[i].product
            if(shopperss[j].product == arr[i].product){
                if(shopperss[j].amount <= arr[i].amount){
                    // console.log(shopperss[j].name);
                    
                  pembeli[x] = shopperss[j].name  
                  arr[i].amount -= shopperss[j].amount
                  totalPrice += arr[i].price * shopperss[j].amount
                  x++;
                }
            }
            
        }
        profit.shoppers = pembeli
        profit.leftOver = arr[i].amount
        profit.totalProfit = totalPrice
        // console.log(pembeli+ " product " + shopperss[i].product);
        
        name[i] = profit
    }
    // console.log(pembeli);
    
    
    console.log(name)
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
//   console.log(countProfit([])); //[]