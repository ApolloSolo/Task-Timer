const form = document.getElementById('date-time');
const taskHolder = document.getElementById('task-holder');

const makeEle = (el, setID) => {
    let newEl = document.createElement(el);
    newEl.id = setID;
    return newEl
}


form.addEventListener('submit', (e) => {

    e.preventDefault();
    const formTask = form.elements[0].value;
    const formTime = form.elements[1].value;
    const formDate = form.elements[2].value;
    const futureDateTime = formDate + " " + formTime;

    document.getElementById("task-description").innerHTML = formTask;

    const timeCount = setInterval(function () {
        let now = new Date().getTime();
        let countDownFrom = new Date(futureDateTime).getTime();
        let timeLeft = countDownFrom - now;

        let days = Math.floor(timeLeft/(1000*60*60*24));
        let hours = Math.floor((timeLeft % (100 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days + "d "
        document.getElementById("hours").innerHTML = hours + "h " 
        document.getElementById("mins").innerHTML = minutes + "m " 
        document.getElementById("secs").innerHTML = seconds + "s " 

        if(timeLeft < 0) {
            clearInterval(timeCount);
            document.getElementById("days").innerHTML = ""
            document.getElementById("hours").innerHTML = "" 
            document.getElementById("mins").innerHTML = ""
            document.getElementById("secs").innerHTML = ""
            document.getElementById("end").innerHTML = "YOUR TIME IS UP!!";
        }       
    })
})