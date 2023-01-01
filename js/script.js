const conteiner_seconds = document.querySelector('.seconds');
const conteiner_milliseconds = document.querySelector('.milliseconds');
const conteiner_minutes = document.querySelector('.minutes');
const start_button = document.querySelector('.start');
const stop_button = document.querySelector('.stop');

const timer = {
    second: 0, 
    minute: 0,
    millisecond: 0,
    interval: null,
    timing: () => {
        timer.millisecond += 10
        if(timer.millisecond === 1000) {
            timer.millisecond = 0;
            timer.second += 1;
        }
        if(timer.second === 60){
            timer.second = 0;
            timer.minute += 1;
        }
        conteiner_milliseconds.innerHTML = timer.update(timer.millisecond / 10)
        conteiner_seconds.innerHTML = timer.update(timer.second);
        conteiner_minutes.innerHTML = timer.update(timer.minute);
    },
    start: () => {
        clearInterval(timer.interval);
        timer.millisecond = 0;
        timer.second = 0;
        timer.minute = 0;
        timer.interval = setInterval(timer.timing, 10);
    },
    stop: () => {
        clearInterval(timer.interval)
    },
    update: (time) => {
        if (time >= 10) {
            return time;
        }
        return `0${time}`
    }    
}


start_button.addEventListener('click', timer.start);
stop_button.addEventListener('click', timer.stop);
