// --- on document ready ---
$(function() {
	/**
	 * bandoneon
	 */
	$('.faq').bandoneon({
			opened: '.opened'
	});
	
	$('.nested').bandoneon({
		toggle: '.nested-bandoneon-heading',
		content: '.nested-bandoneon-content'
	});
	
	$('.nested-bandoneon-heading').on('click', function(){
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