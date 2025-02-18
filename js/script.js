(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear();
        birthdayInput = "13/6/25",
        [bDay, bMonth, bYear] = birthdayInput.split("/");

    let birthdayYear = bYear ? "20" + bYear : yyyy;
    let birthdayDate = new Date(birthdayYear, bMonth - 1, bDay);

    if (!bYear && today > birthdayDate) {
        birthdayDate.setFullYear(yyyy + 1);
    }

    const countDown = birthdayDate.getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            if (distance > 0) {
                document.getElementById("days").innerText = Math.floor(distance / day);
                document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
                document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
                document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
            } else {
                document.getElementById("headline").innerText = "Matura czy rura???";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }

        }, 1000);
}());
