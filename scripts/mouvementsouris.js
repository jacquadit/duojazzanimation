$("html").mousemove(function (evenement) {
	$("#titre").offset({
	left:evenement.pageX,
	top: evenement.pageY
	});
	});
