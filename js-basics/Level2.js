function fizzBuzz (){

    for (let i =1; i <= 100; i++){
        if (i % 2 == 0 ){
            console.log("FIZZ")
        }
        if (i % 3 == 0 ){
            console.log("BUZZ")
        }else{
            console.log(i);
        }
    }
}