document.addEventListener("DOMContentLoaded", function () {
    const time = document.getElementById("time");

    let year;
    let month;
    let date;
    let day;

    let hour = 0;
    let minute = 0;
    let second = 0;

    function timer() {
        time.textContent = `${hour} hrs / ${minute} mins / ${second} sec`;
        second++;
        if (second >= 60) {
            second = 0;
            minute++;
            if (minute >= 60) {
                minute = 0;
                hour++;
            }
        }
    }


    // function realTime() {
    //     let currentTime = new Date();

    //     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //     day = days[currentTime.getDay()];


    //     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //     month = months[currentTime.getMonth()];


    //     date = currentTime.getDate();
    //     year = currentTime.getFullYear();


    //     hour = currentTime.getHours() - 12;
    //     minute = currentTime.getMinutes();
    //     second = currentTime.getSeconds();

    //     time.textContent = `${day} -- ${month} -- ${date} -- ${year} || ${hour} hrs / ${minute} mins / ${second} sec`;
    // }

    setInterval(timer, 1000);
});
