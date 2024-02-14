function runFizzBuzz() {
    // Get the input value
    var number = parseInt(document.getElementById("numberInput").value);
    var result = document.getElementById("result");
    var history = document.getElementById("history");

    // Check if the number is divisible by 3 and 5
    if (number % 3 === 0 && number % 5 === 0) {
        result.innerText = "FizzBuzz";
    }
    // Check if the number is divisible by 3
    else if (number % 3 === 0) {
        result.innerText = "Fizz";
    }
    // Check if the number is divisible by 5
    else if (number % 5 === 0) {
        result.innerText = "Buzz";
    }
    // If none of the above conditions are met, display the number itself
    else {
        result.innerText = number;
    }
    history.innerHTML += "<p>" + result.innerText + "</p>"
}
