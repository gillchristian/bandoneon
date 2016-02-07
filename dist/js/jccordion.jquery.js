'use strict';
// this behaves as if within document.ready
$(function() {
    
    $.fn.accordion = function(options){
        var settings = $.extend({
            toggle: '.accordion-toggle',
            content: '.accordion-content',
            speed: 'fast',
            event: 'click',
        }, options);
        
        if (settings.opened) {
            this.find(settings.content + settings.opened).show();
        }
        
        return this.each(function accordionFn() {
            $(this).find(settings.toggle).on(settings.event ,function(){
                var $self = $(this);
                var $next = $self.next();
                
                //Expand or collapse this panel
                $next.slideToggle(settings.speed);
                $self.toggleClass('opened');

                //Hide the other panels
                $(settings.content).not($next).slideUp(settings.speed);
                $(settings.toggle).not($self).removeClass('opened');

            });
        });
    };
});