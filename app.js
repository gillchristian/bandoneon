// --- on document ready ---
$(function() {
	$('.faq').jccordion({
			opened: '.opened'
	});
	
	$('.nested').jccordion({
		toggle: '.nested-jcorddion-heading',
		content: '.nested-jccordion-content'
	});
	
	$('.nested-jcorddion-heading').on('click', function(){
		console.log('clicked');	
	});
});