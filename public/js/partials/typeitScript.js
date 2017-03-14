$(document).ready(function(){

	// 她说
	// 不，这是他的人生
	// 他必须要这样活
	// 如果因此死了，那就是死了
	// “然而这就是他，他想要活下去”

	$('#saySomeThingCn').typeIt({
		speed: 100,
		autoStart: true
	})
	.tiType('她说')
	.tiPause(500)
	.tiDelete(2)
	.tiType('不， ')
	.tiPause(1000)
	.tiType('这是他的人生')
	.tiBreak() .tiPause(750)
	.tiType('他必须要这样活')
	.tiBreak() .tiPause(750)
	.tiType('如果因此死了，那就是死了')
	.tiSettings({speed: 700})
	.tiType('...')
	.tiPause(750)
	.tiSettings({speed: 50})
	.tiDelete()
	.tiType('然而这就是他，他想要<strong>活下去</strong>');



	// Whatever is on my mind, I say it as I feel it, I'm truthful to myself; 
	// I'm young and I'm old, I've been bought and I've been sold, so many times. 
	// I am hard-faced, I am gone. 
	// I am just like you.

	$('#saySomeThingEng').typeIt({
		speed: 50,
		autoStart: true
	})
	.tiType('Whatever is on my mind')
	.tiBreak()
	.tiType('I say it as I feel it')
	.tiBreak()
	.tiType('I\'m truthful to myself.')
	.tiPause(850)
	.tiDelete()
	.tiSettings({speed: 20})
	.tiType('I\'m young and I\'m old')
	.tiBreak()
	.tiType('I\'ve been bought and I\'ve been sold')
	.tiBreak()
	.tiType('so many times.')
	.tiPause(850)
	.tiDelete()
	.tiType('...')
	.tiPause(750)
	.tiSettings({speed: 50})
	.tiDelete()
	.tiType('“I am just like <strong>you</strong>.”');



});
