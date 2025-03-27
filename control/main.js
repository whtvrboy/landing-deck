
var count = 0;

$(".spawn").on( "click", function() {
 
  if (count == 0) {
		console.log(count);
    $('.giraffe1').show();
	}
  
  if (count == 1) {
		console.log(count);
    $('.giraffe2').show();
	}
	
  if (count == 2) {
		console.log(count);
    $('.giraffe3').show();
	}
	
  if (count == 3) {
		console.log(count);
    $('.giraffe4').show();
	}
	
  if (count == 4) {
		console.log(count);
    $('.giraffe5').show();
	}
	
  if (count == 5) {
		console.log(count);
    $('.giraffe6').show();
	}
	
	++count;
} );

var evilcount = 0;

$(".evil").on( "click", function() {

  if (evilcount == 0) {
		console.log(count);
    $('.giraffe7').show();
	}
	
  if (evilcount == 1) {
		console.log(count);
    $('.giraffe8').show();
	}

  if (evilcount == 2) {
		console.log(count);
    $('.giraffe9').show();
	}

  if (evilcount == 3) {
		console.log(count);
    $('.giraffe10').show();
	}

  if (evilcount == 4) {
		console.log(count);
    $('.giraffe11').show();
	}

  if (evilcount == 5) {
		console.log(count);
    $('.giraffe12').show();
	}
	
	++evilcount;
} );

$( ".draggable" ).draggable({
		snap: false
	});