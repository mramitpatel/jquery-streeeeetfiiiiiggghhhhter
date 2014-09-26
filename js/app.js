$(document).ready(function() {

	$(".ryu").mouseenter(function() {
		var mouseEnter = "true";
		$(".ryu-still").hide();
    	$(".ryu-ready").show();
    	console.log(mouseEnter);
  	})
  	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
		mouseEnter = "false";
		console.log(mouseEnter);
  	})
	.mousedown(function() {
		playHadouken();
    	$(".ryu-ready").hide();
    	$(".ryu-throwing").show();
    	$(".hadouken").finish().show().animate(
  		{"left": "300px"},500,  
  		function() {
    		$(this).hide();
    		$(this).css("left", "-212px");
  		});
  	}).mouseup(function() {
    	$(".ryu-throwing").hide();
  		$(".ryu-ready").show();
  	})

    $(".main").hide();
    $(".load").backstretch(["images/bck.gif"]).hide().fadeIn("slow");
    $(".start").on("click",function(){
        $(".load").fadeOut("slow");
        $(".main").fadeIn("slow");
        
        })

});



$(document).on("keydown", function(e){
  	if ( e.keyCode == 88 ){
  		console.log("pressed");
  		$(".ryu-ready").hide();
  		$(".ryu-still").hide();
  		$(".ryu-cool").show();
  	}
  })
	.on("keyup", function(e){
		if((e.keyCode==88) && (mouseEnter = "true")) {
		  	$(".ryu-ready").show();
  			$(".ryu-cool").hide();
    } else if ((e.keyCode==88) && (mouseEnter == "false")) {
  			$(".ryu-still").show();
        $(".ryu-ready").hide();
  			}		
		});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};


