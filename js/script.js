/* - - - declare DOM variables - - - */
let title = document.querySelector(".title");
let description = document.querySelector(".description");
let callToAction = document.querySelector(".cta");
let refresgBtn = document.querySelector(".button");

/* - - - declare form variables - - - */
let form = document.querySelector("#dateform");
let date = document.querySelector("#date");

const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
];

/* - - - get gender related day personalities - - - */
function getPersonality(gender, day) {
    const maleDayNames = [
        "kwasi",
        "kwadwo",
        "kwabena",
        "kwaku",
        "yaw",
        "kofi",
        "kwame",
    ];

    const femaleDayNames = [
        "akosua",
        "adwoa",
        "abenaa",
        "akua",
        "yaa",
        "afua",
        "ama",
    ];

    /* - - - declare male day personalities - - - */
    let maleDays = [
        "Sunday born males are also vibrant characters as they are depicted by their core character trait they have the strength and are often resilient when pursuing new ventures. Sunday born males can be sensitive people which, can make them overreact in some situations. However, beneath all their sensitivity, you will find happy, passionate souls.",
        "Monday born males are sensitive at heart and emotional. They are dynamic individuals which, makes them open to hearing ideas from people. They are the perfect type of people to hear unbiased opinions from. Though they can be emotional, they also love fun times and can be generous.",
        "Tuesday born males can be super sensitive, they are also friendly and truly love to show love to others. They sometimes can be impulsive when making decisions and because they love to have people around, they are family-oriented people.",
        "Wednesday born males are more timid and may take more time to warm up to others. They are very cautious and weigh in on decisions heavily before making them.",
        "A Yaw is that outgoing charismatic guy that fits into just any kind of crowd. They may appear to be overconfident because they rarely commit themselves to relationships. Yet, you cannot take away their innate ability to be the fun at any gathering.",
        "Kofi is a smart and ambitious guy who can prove to be a difficult person to figure out. His ability to pay attention to multiple things sets him apart from others and makes him an interesting learner.",
        "Kwame is straightforward. He is steadfast in his ability to pick a cause and remain dedicated to it. He is very focused and may come off as abrasive. They often hold on to traditional beliefs and can be very disciplined.",
    ];

    /* - - - declare female day personalities - - - */
    let femaleDays = [
        "Sunday born females are principled, they often say things as it is, they are fearless and may border on the edge of arrogance because they do not mince their words when stating their opinions on a subject. Beneath the hard exterior, however, Sunday born females can be delightfully warm and fun to be around when you get to know them.",
        "Monday born females love to have fun and are full of life. They have an inherent ability to put people's interests above their own as they love to care for others. Being peaceful people, they love to see justice done where there is perceived injustice, and they can because of their over caring nature be stubborn and persistent.",
        "Tuesday born females are fierce and very inquisitive by nature. They are the ones to go into a room and strike up a conversation because they would like to get to know you. They are full of life and often take each stride of life confidently. Yes, they are super fun people!",
        "Wednesday born females are calm and cool people that can be described as proud, even though they can be very emotional at heart. They are goal-getters and do not waste time in pursuing their goals. They do not allow themselves to be vulnerable and often refrain from allowing others to see them at their low points.",
        "Yaa is your average happy girl, the one who has got jokes for days. She loves to address issues diplomatically and can be very cool-headed when faced with dicey situations. If she sees that the end goal of a particular venture favours everyone, she stops at nothing to pursue those goals.",
        "Friday born females have an uncommon love for life. Not only are they intelligent, but they can also be very disciplined when it comes to navigating life and setting goals.",
        "Your Ama is 100% about helping others and can be very humane. You often find her willing to lend a helping hand to those in need. She is very selfless and is one to believe in only the positives about others. Your Ama may appear out of touch with reality because they sometimes see what they want to believe in others and not what the true nature of that person is.",
    ];

    /* - - - check the user gender - - - */
    if (gender === "male") {
        return [maleDays[day], maleDayNames[day]];
    } else {
        return [femaleDays[day], femaleDayNames[day]];
    }
}

/* - - - get the day of the week - - - */
function getWeekDay(date) {
    let fullDate = new Date(
        Number(date.substring(0, 4)),
        Number(date.substring(5, 7) - 1),
        Number(date.substring(8, 10))
    );

    return fullDate.getDay();
}

/* - - - validate user input - - - */
function validate(date, gender) {
    let userDate = Number(date.substring(8, 10))
    let userMonth = Number(date.substring(5, 7) - 1)
    let userYear = Number(date.substring(0, 4))
    let timeline = new Date
    let currentDate = timeline.getDate()
    let currentMonth = timeline.getMonth()
    let currentYear = timeline.getFullYear()
    if (date === "") {
        if (gender === "") {
            return [false, "You can't submit an empty form!"];
        }
        return [false, "Please provide a valid date!"];
    } else if (userYear > currentYear){
        return [false, "Please don't enter a future year"];
    } else if (userYear === currentYear && userMonth > currentMonth){
        return [false, "Please don't enter a future month"];
    } else if (userYear === currentYear && userMonth === currentMonth && userDate > currentDate) {
        return [false, "Please don't enter a future date"];
    } else if (gender === "") {
        return [false, "Please fill in your gender!"];
    } else {
        return true;
    }
}

/* - - - trigger form submission - - - */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let gender = form.gender.value;

    /* - - - validate user input - - - */
    if (validate(date.value, gender)[0] === false) {
        alert(validate(date.value, gender)[1]);
        return;
    }

    /* - - - store relevant data and call in relevant functions - - - */
    let day = getWeekDay(date.value);
    let weekDay = daysOfWeek[day];
    let personality = getPersonality(gender, day);

    /* - - - give feedback to the user - - - */
    title.innerHTML = `Your Akan name is ${personality[1].replace(/^\w/, (c) =>
        c.toUpperCase()
    )}<br>( ${weekDay.replace(/^\w/, (c) => c.toUpperCase())} Born )`;
    description.innerHTML = personality[0];
    title.style = "animation: appear 3s";
    description.style = "animation: appear 3s";
    callToAction.style = "display: none";
    form.style = "display: none";
    refresgBtn.style = "display: block; animation: appear 3s;";
});

/* - - - reload page after user clicks on the "try another name" button - - - */
refresgBtn.addEventListener("click", () => {
    window.location.reload();
});
