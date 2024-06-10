let n =11
let isPrime = true

if (n ===1){// 1은 소수가 아님 
    isPrime = false
}else{
    for(let i=2;i<n;i++){
      if(n % i == 0){
        isPrime =  false 
      }
    }
}

console.log(isPrime)