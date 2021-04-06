(function($){
	"use strict";
    Responsive.addResponsiveAdjustment(function(){
        window.fixIframes($(".typography iframe"));
    });
	$(":root").addClass('js');
	$(document).ready(function(){
		$(window).load(function(){
			$(":root").addClass('done');
		});
		// Code to set correct tracking account in GA across domains
		setTimeout(function(){
            if (typeof ga === 'function'){
                var clientId = ga.getAll()[0].get('clientId');
                if ((clientId !== '') && (clientId !== undefined)){
                    var origin=window.location.origin;
                    var domain=window.location.host.replace(/^.*\.([^\.]+\.[^\.]+)$/,'$1');
                    $("a[href*='"+domain+"']").not("[href^='"+origin+"'],[href*='"+clientId+"'],[href^='tel'],[href^='mailto']").each(function(){
                        var href = $(this).attr('href');
                        var url = href.replace(/(\?|#).*$/,'');
                        var hash = /(#.*)$/.exec(href) || '';
                        if (hash) {
                            hash = hash[0];
                        }
                        var search = /\?([^#]*)/.exec(href) || false;
                        var url = url+'?';
                        if (search) {
                            search = search[0].replace(/clientId=[^&]+/,'');
                            url = url + search + '&';
                        }
                        url = url + 'clientId=' + clientId + hash;
                        $(this).attr('href',url);
                    });
                }
            }
        },1000);

		$("a[href^=tel]").click(function(e){
			if ($(window).width() > 600){
				e.preventDefault();
				return false;
			}
		});
	});

	window.fixIframes = function(iframes){
		iframes.each(function(){
			if (!$(this).attr('ratio') && $(this).attr('height') && $(this).attr('width')){
				$(this).attr('ratio',(parseInt($(this).attr('height'))/parseInt($(this).attr('width'))));
				var src=$(this).attr('src');
				$(this).attr('src',src+((src.indexOf("?") !== -1)?"&":"?")+'wmode=transparent');
			}
		});
		setTimeout(function(){
			iframes.each(function(){
				if($(this).attr('ratio')){
					$(this).height($(this).width() * $(this).attr('ratio'));
				}
			});
		},500);
	};

	window.jScroll = function(anchor_name){
		var aTag = $("a[name='"+anchor_name+"']");
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	};
}(jQuery));