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
            try{
                string = eval(string);
                document.querySelector('.input').value = string;
            }
            catch(e)
            {
                string = "";
                let msg = "           Invalid input!";
                setTimeout(() => {
                    document.querySelector('.input').value = msg;
                }, 0);
                setTimeout(() => {
                    document.querySelector('.input').value = string;
                }, 1000);
            }
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
        else if(e.target.innerHTML == "del")
        {
            if(string.length != 0)
            {
                string = string.substring(0, string.length - 1);
                document.querySelector('.input').value = string;
            }
            else
            {
                setTimeout(() => {
                    let msg = "                 Empty!";
                document.querySelector('.input').value = msg;
                }, 0);
                setTimeout(() => {
                    document.querySelector(".input").value = string;
                }, 1000);
            }
        }
        else {
            // console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    })
})
