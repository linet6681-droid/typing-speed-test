let startTime;
let timer;

function startTest() {
    document.getElementById("text").value = "";
    document.getElementById("text").focus();

    startTime = new Date();

    clearInterval(timer);

    timer = setInterval(function() {
        let currentTime = new Date();
        let seconds = Math.floor((currentTime - startTime) / 1000);

        document.getElementById("time").innerText =
            "Time: " + seconds + " seconds";
    }, 1000);
}

document.getElementById("text").addEventListener("input", function() {

    let typedText = this.value;
    let sentence = document.getElementById("sentence").innerText;

    if (typedText === sentence) {

        clearInterval(timer);

        let endTime = new Date();
        let seconds = Math.floor((endTime - startTime) / 1000);

        if (seconds === 0) {
            seconds = 1;
        }

        let words = sentence.split(" ").length;
        let speed = Math.round((words / seconds) * 60);

        document.getElementById("result").innerText =
            "Your typing speed is " + speed + " words per minute.";
    }
});