function cariMedian(arr) {
    // you can only write your code here!
    if (arr.length % 2 === 0) {
       var mid = arr.length/2
       var mid1 = arr.length/2-1
       var result = arr[mid1]+arr[mid]
       var result1=result/2
    }else {
        var mid2=arr.length/2
        var mid3=Math.ceil(mid2)
        result1=arr[mid3-1]        
    }
    return result1
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5