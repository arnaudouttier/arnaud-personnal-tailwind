// Onscroll
window.onscroll = function() {aoOnscroll()};

var section = document.getElementsByTagName('section')

function aoOnscroll() {

	for (var i = 0 ;  i < section.length ; i++) {
		console.log(section[i]);
	}
}

 