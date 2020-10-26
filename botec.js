const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const robot = new Discord.Client(); // Объявляем, что robot - бот
const comms = require("./comms.js"); // Подключаем файл с командами для бота
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js  
let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс


robot.on("ready", function(){ /* Бот при запуске должен отправить в терминал сообщение «[Имя бота] запустился!» */
	console.log(robot.user.username + " запустился!");
});

robot.on(`message`, async message => {
	const bannedWords = [`пидор`, `бля`, `блять`,`пизд`,`Пизд`,`ПИЗД`,`пидорас`, `пидр`,`Пидор`,`PIDOR`,`ПИДОР`,`ПиДоР`,`БЛЯ`,`нахуя`,`нахуй`,`НАХУЙ`,`Нахуй`,`Блять`,`хуй`,`Хуй`,`ЕБА`,`еба`,`ЕбА`,'Хуи','ХУИ','хуе','Хуе','ХУЕ',`хуи`]
	try {
		if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
			await message.channel.send(`Асуждаю за мат!`);
		}
	} catch (e) {
		console.log(e);
	}
});
robot.on(`message`, async message => {
	const BanedWords = [`соси`,`Соси`,`СОСИ`,`Sosi`,`sosi`]
	try {
		if (BanedWords.some(word => message.content.toLowerCase().includes(word))) {
			await message.channel.send(`No u!`);
		}
	} catch (e) {
		console.log(e);
	}
});

robot.on('message', (msg) => { // Реагирование на сообщения
	if(msg.author.username != robot.user.username && msg.author.discriminator != robot.user.discriminator){
    	var comm = msg.content.trim()+" ";
	    var ok = false;
	    var comm_name = comm.slice(0, comm.indexOf(" "));
	    var messArr = comm.split(" ");
	    for(comm_count in comms.comms){
	    	var comm2 = prefix + comms.comms[comm_count].name;
	    	if(comm2 == comm_name){
	    		comms.comms[comm_count].out(robot, msg, messArr);
	    	}
	    }
    } 
});


robot.login(token); // Авторизация бота