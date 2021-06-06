
export function showMessage(text, placeToRender) {
    placeToRender.textContent = text;
    placeToRender.style.color = 'red';
}


export function resetMessage() {
    message.textContent = '';
    message.style.color = 'black';
}

export function resetMessageTimer() {
    messageTimer.textContent = '';
    messageTimer.style.color = 'black';
}

export function renderDiff(diff) {
    message.innerHTML = `<span>
        Лет: ${diff.years}
        Месяцев: ${diff.months}
        Дней: ${diff.days}
    <\span>`;
}

export function renderTimer(seconds) {
    messageTimer.innerHTML = `<span>
        Секунд: ${seconds}    
    <\span>`
}