let count = 0;
let seconds = 5;

let progressBar = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

let interval = setInterval(() => {

    if(count <= 99){

        count++;

        progressBar.style.width = `${count}%`;
        percentText.textContent = `${count}%`;

    }
    else{

        document.querySelector("h2").textContent =
        "Downloaded ✓";

        clearInterval(interval);
    }

}, (seconds * 1000) / 100);