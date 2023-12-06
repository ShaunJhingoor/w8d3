const readline = require("readline")
 const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })

 function addNumbers(sum, numleft, completionCallback){
    if (numleft > 0){
        reader.question ('Enter new number', function(num){
            const number = parseInt(num);
        
        sum += number ;
        console.log(sum);
        addNumbers(sum, numleft - 1, completionCallback)
        })
    }
    else if(numleft === 0){
        completionCallback(sum);
        reader.close
    }
 }
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

