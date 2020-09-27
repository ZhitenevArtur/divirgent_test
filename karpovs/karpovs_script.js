questionNumb = 0;
questions =[
	"Прочитав хорошую книгу, я всегда потом долго думаю о ней; хочется ее с кем-нибудь обсудить.",
	"Когда меня вдруг неожиданно о чем-то спросят, я могу ответить первое, что пришло мне в голову.",
	"Прежде, чем снять трубку телефона, чтобы позвонить по делу, я обычно мысленно планирую предстоящий разговор.",
	"Совершив какой-то промах, я долго потом не могут отвлечься от мыслей о нем.",
	"Когда я размышляю над чем-то или беседую с другим человеком, мне бывает интересно вдруг вспомнить, что послужило началом цепочки мыслей.",
	"Приступая к трудному заданию, я стараюсь не думать о предстоящих трудностях.",
	"Главное для меня – представить конечную цель своей деятельности, а детали имеют второстепенное значение.",
	"Бывает, что я не могу понять, почему кто-либо не доволен мною.",
	"Я часто ставлю себя на место другого человека.",
	"Для меня важно в деталях представлять себе ход предстоящей работы.",
	"Мне было бы трудно написать серьезное письмо, если бы я заранее не составил план.",
	"Я предпочитаю действовать, а не размышлять над причинами своих неудач.",
	"Я довольно легко принимаю решение относительно дорогой покупки.",
	"Как правило, что-то задумав, я покручиваю в голове свои замыслы, уточняя детали, рассматривая все варианты.",
	"Я беспокоюсь о своем будущем.",
	"Думаю, что во множестве ситуаций надо действовать быстро, руководствуясь первой пришедшей в голову мыслью.",
	"Порой я принимаю необдуманные решения.",
	"Закончив разговор, я, бывает, продолжаю вести его мысленно, приводя все новые и новые аргументы в защиту своей точки зрения.",
	"Если происходит конфликт, то, размышляя над тем, кто виноват, я в первую очередь, начинаю с себя.",
	"Прежде, чем принять решение, я всегда стараюсь все тщательно обдумать и взвесить.",
	"У мня бываю конфликты от того, что я порой не могу предугадать, какого поведения от меня ожидают окружающие.",
	"Бывает, что обдумывая разговор с другим человеком, я как бы мысленно веду с ним диалог.",
	"Я стараюсь не задумываться над тем, какие мысли и чувства вызывают в других людях мои слова и поступки.",
	"Прежде чем сделать замечание другому человеку, я обязательно подумаю, какими словами это лучше сделать, чтобы его не обидеть.",
	"Решая трудную задачу, я думаю над ней даже тогда, когда занимаюсь другими делами.",
	"Если я с кем-то ссорюсь, то в большинстве случаев не считаю себя виноватым.",
	"Редко бывает так, что я жалею о сказанном.",
];

interpretedTable = [0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1]
answerTable = [7,6,5,4,3,2,1];
answerInvertedTable = [1,2,3,4,5,6,7];
final = 0;

answers = [];

function getAnswer (value) {
	if (interpretedTable[questionNumb]) {
		answers.push(answerInvertedTable[value]);
	}
	else {
		answers.push(answerTable[value]);
	}
	nextQuestion();
}

function startTesting () {
	document.getElementById('instructions').style.display = 'none';
	document.getElementById('testing').style.display = 'flex';
	document.getElementById('question').innerHTML = questions[questionNumb];
}

function nextQuestion () {
	if(questionNumb == 26){
		showEndingMessage()
	}
	else {
		questionNumb++;
		document.getElementById('question').innerHTML = questions[questionNumb];
	}
}

function showEndingMessage() {
	for (var i = 0; i < answers.length; i++) {
			final += answers[i];
		}

	document.getElementById('testing').style.display = 'none';
	document.getElementById('final').style.display = 'block';
	document.getElementById('answers').innerHTML += answers;
	document.getElementById('total').innerHTML += final;
}