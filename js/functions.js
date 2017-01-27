var windowWidth,
windowHeight;

var updateWindow = function(){
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;
	
	var $entranceContainer = $('#container');

	$entranceContainer.css('width', windowWidth+'px');
	$entranceContainer.css('height', windowHeight+'px');
	
	console.log("nouvelle height = " +windowHeight+"px");
	console.log("nouvelle width = " +windowWidth+"px");
};


$(document).ready(function(){
	updateWindow();
	
	$(window).resize(function(){
		updateWindow();
	});

	var videos = [
		'video/askyfullofstarsmp4.mp4',
		'video/finnkarstenswinterwonderlandkielmp4.mp4',
		'video/mediagldogsleddingingreenlandmp4.mp4'
	];
	// Liste des sources vidéos. Elles sont rangées en index, c'est à dire que le bouton 1 correspond à la vidéo 1 et ainsi de suite.

	$('.btn').click(function(e) {
		console.log(this.index);
		var btnIndex = $(this).index();
		$('#bgvid').attr('src', videos[btnIndex]);
		return false;
	});



});
