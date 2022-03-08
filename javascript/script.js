// variable that selects the class .container
const fizzBuzz = document.querySelector(".container");
// loop from one to one hundred
for (let i = 1; i <= 100; i++) {
    // if the number is a multiple of 3 and 5 enter this if
    let print;
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
        print = `<div class="box fizz-buzz">fizzbuzz</div>`;
    }
    // if the number is a multiple of 3 enter this else if
    else if (i % 3 == 0) {
        console.log("fizz");
        print = `<div class="box fizz">fizz</div>`;
    }
    // if the number is a multiple of 5 enter this else if
    else if (i % 5 == 0) {
        console.log("buzz");
        print = `<div class="box buzz">buzz</div>`;
    }
    // if the number does not enter the withdrawals, it enters the else
    else {
        console.log(i);
        print = `<div class="box">${i}</div>`;
    }
    fizzBuzz.innerHTML += print;
}