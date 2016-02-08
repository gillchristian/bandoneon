// --- on document ready ---
$(function() {
	/**
	 * jcorddion
	 */
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
	
	
	/**
	 * Tabs
	 */
	$('button').on('click', function() {
		var target = '#' + $(this).data('tab');
		
		$(this).addClass('selected');
		$('button').not(this).each(function(){
			$(this).removeClass('selected');
		})
		
		$('.tab').each(function(){
			$(this).hide();
		});
		
		$(target).show();
	});
});