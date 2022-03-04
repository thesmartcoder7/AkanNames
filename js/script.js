//form variables
let form = document.querySelector("#dateform");
let date = document.querySelector("#date");

console.log(day);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let gender = form.gender.value;
    console.log(gender, date.value);
});
