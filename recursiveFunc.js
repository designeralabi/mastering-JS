// a recursive function is a function that call itself
function factorial(n){
    if (n <= 1){
        return 1;
    }

    return n * factorial(n - 1);
}

factorial(3);