var $context = $("canvas")[0].getContext("2d");
var mouseDown = false;

$(".controls").on("click", "li", function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
})

$("#revealColorSelect").click(function(){
	$("#colorSelect").toggle();
})

changeColor();

function changeColor(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color","rgb(" + r + "," + g + "," + b +")");
}



$("input[type=range]").change(changeColor);



$("#addNewColor").click(function(){
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	$newColor.click();
})


$("canvas").mousedown(function(e){
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(currentEvent){
	if(mouseDown){
		$context.beginPath();
		$context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		$context.lineTo(currentEvent.offsetX, currentEvent.offsetY);
		$context.strokeStyle = $(".selected").css("background-color");
		$context.stroke();
		lastEvent = currentEvent;
	}
})
	.mouseup(function(){
			mouseDown = false;
}).mouseout(function(){
	mouseDown = false;
})
