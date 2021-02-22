// Onscroll
window.onscroll = function() {aoOnscroll()};

function aoOnscroll() 
{

	var pageTop = window.pageYOffset;
	var pageBottom = pageTop + window.innerHeight;
	var sections = document.getElementsByTagName('section');

	for ( var i = 0 ;  i < sections.length ; i++ ) 
	{
		var section  = sections[i];
	
		if (section.offsetTop  < pageBottom)
		 {
			section.classList.add("visible");
		}
		else
		{
			section.classList.remove("visible");
		}
	}
}
