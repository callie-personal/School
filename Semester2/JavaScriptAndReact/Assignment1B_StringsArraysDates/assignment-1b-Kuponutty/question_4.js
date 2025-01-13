let randomNumbers = [];

//generating random numbers between 1 and 1000
for (let i = 0; i < 10; i++){
    randomNumbers.push(Math.floor(Math.random() * 1001));
}

//function to check if a number is a prime number
function isItPrime(num){
//starting with two and checking every number up to the square root of a number, check if there's any remainder
    for (let i = 2; i < Math.sqrt(num); i++){
//if there is no remainder, the number is not prime
        if (num % i === 0){
            return "no";
        }
//if none of the numbers have no remainders, it's prime
        }
        return "yes";
    }

for (i = 0; i < randomNumbers.length; i++){
console.log(randomNumbers[i] + "-" + isItPrime(randomNumbers[i]))
}