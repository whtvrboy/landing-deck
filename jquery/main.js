$(".dark-btn").click(
	function(){
		$(".square").toggleClass("dark");
		$("body").toggleClass("dark")
	}
);

$(".spin-btn").click(
	function(){
		$(".square").toggleClass("spin");
	}
);

$(".reveal-btn").click(
	function(){
		$(".leaf").addClass("reveal");
		$(".reveal-btn").hide();
	}
);

    $( ".draggable" ).draggable({
		// axis: "x",
		containment: ".container",
		snap: true
	});