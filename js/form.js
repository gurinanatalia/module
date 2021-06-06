import { showMessage, resetMessage as resetError, resetMessageTimer, renderDiff, renderTimer } from './common.js';
import { calcDiff } from './calc.js';
import { switchToCalc, switchToTimer } from './switch.js'

// в целом непонятна логика, как разбивать на модули, что где указывать 
// пришлите, пожалуйста, решенное задание 1 и задание 2 из дз1

const timerForm = document.getElementById('timer');
const form = document.getElementById('dateForm'); 

// блока с таймером нет на странице. почему?
// не работает переключение. почему?
// document.getElementById('countdown').addEventListener('click', switchToTimer(timerForm, form));
// document.getElementById('calc').addEventListener('click', switchToCalc(timerForm, form));

//общая функция showMessage - почему не работает? message is not defined
const message = document.querySelector('.message');
const messageTimer = document.querySelector('.messageTimer');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    resetError();  
    
    var sound = new Howl({
        src: ['sound.mp3']
      });
      
      sound.play();

    const formdata = new FormData(evt.target);
    let date1 = formdata.get('date1');
    let date2 = formdata.get('date2');


    if (!date1 || !date2) {   
        //общая функция showMessage - почему не работает? message is not defined        
        showMessage('Для расчета промежутка необходимо заполнить оба поля', message);
    } else {
        if(date1 > date2) {
        [date1, date2] = [date2, date1];
        }

        const result = calcDiff(date1, date2);
        renderDiff(result);
    }
});

const timerButton = document.getElementById('timerButton');
const timerStop = document.getElementById('timerStop');

timerForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    resetMessageTimer();

    const formdataTimer = new FormData(evt.target);
    let minutesTimer = +formdataTimer.get('minutes');
    let seconds = minutesTimer*60;

    if (!minutesTimer) {
        showMessage('Заполните поле', messageTimer);
    } else {
    timerButton.textContent = 'Таймер запущен';
  
    let timer = setInterval(() => {
        if (seconds === 0) {
            clearInterval(timer);
            renderTimer(seconds);

            // установила библиотеку с помощью npm install howler. Почему не работает? Как посмотреть библиотеку звуков и подобрать соответствующий звук? 
            // что за звук sound.mp3?
            var sound = new Howl({
                src: ['sound.mp3']
              });
              
            sound.play();
            alert('Время закончилось');
            timerButton.textContent = 'Запустить таймер';
        } else {
        renderTimer(seconds), 
        seconds--;
        }
    }
    , 1000);
}

// т.к. ничего не работает, не могу проверить работу кнопки 
timerStop.addEventListener('click', () => {
    clearInterval(timer);
    renderTimer(0);
})

});
