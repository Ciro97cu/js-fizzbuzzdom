const fizzBuzz = document.querySelector(".container");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
        const print = `<div class="box fizz-buzz">fizzbuzz</div>`;
        fizzBuzz.innerHTML += print;
    } else if (i % 3 == 0) {
        console.log("fizz");
        const print = `<div class="box fizz">fizz</div>`;
        fizzBuzz.innerHTML += print;
    } else if (i % 5 == 0) {
        console.log("buzz");
        const print = `<div class="box buzz">buzz</div>`;
        fizzBuzz.innerHTML += print;
    } else {
        console.log(i);
        const print = `<div class="box">${i}</div>`;
        fizzBuzz.innerHTML += print;
    }
}