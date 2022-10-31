$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".toggle-mnu").click(function(e){
		$(this).toggleClass("on");
		$(".small-menu").slideToggle();
		e.preventDefault();
	});


	$(".section-2").waypoint(function(){
		$(".section-2 .s2-item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("s2-item-off").addClass("s2-item-on");
			}, 150*index);
		});
			
	}, {
		offset : "10%"
	});


	$(".section-3").waypoint(function(){
		$(".section-3 .s3-gallary .item").each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.removeClass("item-off").animated("zoomIn");
			}, 150*index);
		});
			
	}, {
		offset : "20%"
	});

	$(".s-title").animated("zoomIn");
	$(".section-1 .s1-right h2").animated("zoomIn");
	$(".section-1 .s1-right p").animated("fadeInRight");

});
