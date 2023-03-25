const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttonss = document.querySelectorAll(".btn");

buttonss.forEach(button => {
    button.addEventListener("click", () => {
        audio.play();
    });
});

let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            let msg = "             All Cleared!";
            setTimeout(() => {
                document.querySelector('.input').value = msg;
            }, 0);
            setTimeout(() => {
                document.querySelector('.input').value = string;
            }, 1000);
        }
        else {
            // console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    })
})