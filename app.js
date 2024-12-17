let tg = window.Telegram.WebApp; 
tg.expand();  Развернуть интерфейс на весь экран

function sendData(country) {
    tg.sendData(country);  Отправить выбранную страну в Telegram-бот
}

document.getElementById(russia).addEventListener(click, () = sendData(Россия));
document.getElementById(china).addEventListener(click, () = sendData(Китай));
document.getElementById(usa).addEventListener(click, () = sendData(США));
document.getElementById(germany).addEventListener(click, () = sendData(Германия));
document.getElementById(brazil).addEventListener(click, () = sendData(Бразилия));
