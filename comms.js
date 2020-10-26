
const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс


  
// Команды //

    function say(robot, mess , args) {
        if(!mess.member.hasPermission("MANAGE_MESSAGES")) return mess.channel.send("У  вас нет прав"); /* Если у исполнителя команды нету привилегии MANGAGE_MESSAGES, он не сможет её использовать */
    
        let robotmessage = args = mess.content.split(' '); // Пробелы между словами 
       args.shift();
        args = args.join(' ');
    
        mess.delete().catch(); // Удаление сообщения пользователя после отправки 
    
        mess.channel.send(robotmessage).then(mess.channel.send(mess.author)) /*             Отправление в чат сообщения бота */


    }
    function hello(robot, mess, args) {
        mess.reply("Привет!")
    }

function roll (robot, mess , args){
    mess.channel.send('Монета подбрасывается...')
    var random = Math.floor(Math.random() * 4); // Объявление переменной random - она вычисляет случайное число от 1 до 3
    if (random == 0) { // Если вычислено число 1, то выпадает орёл.
        mess.channel.send(':no_entry_sign: Монета пропала!')
    } else if (random == 1) {
        mess.channel.send(':full_moon: Орёл!')
    } else if (random == 2) { // Если вычислено число 2, то выпадает решка.
        mess.channel.send(':new_moon: Решка!')
    } else if (random == 3) { // Если вычислено число 3, то монета падает         ребром.
        mess.channel.send(':last_quarter_moon: Монета упала ребром!')
    }
}
function manul (robot,mess,args ){
    for (var i = 1; i < 12; i++) {
        if (i==1) {(mess.channel.send(i + ": манул"))}
        if (i>1&&i<5) {(mess.channel.send(i + ": манула"))}
        if (i>4) {(mess.channel.send(i + ": манулов"))}
      }
}
function frog (robot,mess,args ){
    mess.channel.send(':frog: ЛЯГУШКА')
    mess.delete().catch(); // Удаление сообщения пользователя после отправки 
}
function cazino(robot,mess,args){
 
  var chislo = Math.floor(Math.random() * 36);
  var Vin=prefix+'cazino ' +chislo;
  var cvet= chislo % 2;
  var clr;
  if (cvet==0 && chislo!=0) clr='black';
  if (cvet==1)  clr='red';
  var colour=prefix+'cazino ' +clr;
  if (chislo==0) {mess.channel.send(':four_leaf_clover: Зеленое')}
  if (chislo%2==0&&chislo!=0) {mess.channel.send(':black_circle: Черное')}
  if (chislo%2==1) {mess.channel.send(':red_circle: Красное')}
  mess.channel.send(chislo)
  if ( mess.content== Vin) mess.channel.send(':beer: выйграл, Лакер!!!!!!!');
  if ( mess.content== colour) mess.channel.send(':beer: выйграл, Лакер!!!!!!!');
  
}

 // Список комманд //

var comms_list = [
    {name: "say", out: say, about: "Тестовая команда"},
    {name: "hello", out: hello, about: "Команда для приветствия!"},
    {name: "roll", out: roll, about: "Подброс монетки"},
    {name: "manul", out: manul, about: "пПодсчет манулов"},
    {name: "frog", out: frog, about: "ЛЯгушка"},
    {name: "cazino", out: cazino, about: "Cazino"}

];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

//ЖДАВА ПОЕБОТА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ЖДАВА ПОЕБОТА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ЖДАВА ПОЕБОТА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ЖДАВА ПОЕБОТА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ЖДАВА ПОЕБОТА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ЖДАВА ПОЕБОТА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ЖДАВА ПОЕБОТА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//ЖДАВА ПОЕБОТА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

module.exports.comms = comms_list;