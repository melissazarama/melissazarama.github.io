// alert("hello world");

function convertToDaysLeft(milliseconds) {
        return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
        }

        function convertToHoursLeft(milliseconds) {
        return Math.floor(
            (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        }

        function convertToMinutesLeft(milliseconds) {
        return Math.floor(
            (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
        );
        }

        function convertToSecondsLeft(milliseconds) {
        return Math.floor(
            (milliseconds % (1000 * 60)) / 1000
        );
        }

        function formatCountdownText(days, hours, minutes, seconds) {
        return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
        }

        let deadline = new Date("April 2, 2025 9:00:00");

        let countdown = document.getElementById("countdown");
        countdown.innerHTML = "";

        function setCountdown() {
            let now = new Date();

            let timeLeft = deadline.getTime() - now.getTime();

            let daysLeft = convertToDaysLeft(timeLeft);
            let hoursLeft = convertToHoursLeft(timeLeft);
            let minutesLeft = convertToMinutesLeft(timeLeft);
            let secondsLeft = convertToSecondsLeft(timeLeft);

            countdown.innerHTML =
                formatCountdownText(daysLeft, hoursLeft, minutesLeft, secondsLeft);
        }

        setInterval(setCountdown, 1000);