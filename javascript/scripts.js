(function(w,d,$){
	"use strict";
	$(":root").addClass('js');
	$(d).ready(function(){
		$(w).load(function(){
			$(":root").addClass('done');
			w.fixAllHeights();
		});
		// Code to set correct tracking account in GA across domains
		setTimeout(function(){
			if (typeof ga === 'function'){
				var clientId;
				ga(function(tracker) {
					clientId = tracker.get('clientId');
				});
				if (clientId !== ''){
					var domain=window.location.host.replace(/www\./,'').replace(/content\./,'').replace(/blog\./,'');
					var prefix=window.location.host.replace(new RegExp(domain,"g"),'');
					$("a[href*='"+domain+"']:not([href*='"+prefix+"'])").each(function(){
						var patt = new RegExp(/\?/);
						$(this).attr('href',$(this).attr('href')+(patt.test($(this).attr('href'))?"&":"?")+'clientId='+clientId);
					});
				}
			}
		},1000);
		
		// increase the main_wrap height until we fit the screen
		w.addResponsiveAdjustment(function(){
			var wraps=0;
			$("#header_wrap,#nav_wrap,#footer_wrap").each(function(){wraps+=$(this).outerHeight(true);});
			$("#main_wrap").css('min-height', ($(w).height() - wraps)+'px' );
		});
	/*
		setupFormField("#SearchForm_SearchFor", "Search");
	
		$('#SearchForm_SearchForm').submit(function(){
			if( !validateFormField("#SearchForm_SearchFor", "Search", "Please specify your search terms") )
				return false;
			return true;
		});
	*/
		$("a[href^=tel]").click(function(e){
			if ($(window).width() > 600){
				e.preventDefault();
				return false;
			}
		});
		
		w.addResponsiveAdjustment(function(){
			w.fixAllHeights();
			w.fixIframes($(".typography iframe"));
		});
	});
	
	w.fixIframes = function(iframes){
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
	
	w.fixAllHeights = function(){
		w.fixHeights({selector:'.parent_sameheight', method:'parent'});
		w.fixHeights({selector:'.internal #page_right', method:'parent'});
		w.fixHeights({selector:'.sameheight', method:'match'});	
	};
	
	// For info on how to use this function, check the wiki: http://iqwebwork.com/wiki/index.php?title=SilverStripe_Tips_%26_Tricks#Using_fixHeights.28.29_to_make_your_content_and_sidebar_the_same_height
	w.fixHeights = function(params){
		if(params){
			var selector = params.selector;
			var method = params.method;
			
			switch(method)
			{
				case "parent":
					$(selector).css('min-height','0px');
					$(selector).each(function(){
						$(this).css('min-height',($(this).parent().height())+'px');
					});	
					break;
				case "match":
					var max_height = [];
					$(selector).css("height", "auto");
					$(selector).each(function(){
						if (!max_height[$(this).attr("rel")]){ max_height[$(this).attr("rel")] = 0; }
						var my_height = $(this).outerHeight(false);
						if ($(this).attr("lang")) { my_height += parseInt($(this).attr("lang")); }
						max_height[$(this).attr("rel")] = Math.max(max_height[$(this).attr("rel")], my_height);
					});
					$(selector).each(function(){
						$(this).height(max_height[$(this).attr("rel")] - (parseInt($(this).css("padding-top"), 10) + parseInt($(this).css("padding-bottom"), 10) + parseInt($(this).css("border-top-width"), 10) + parseInt($(this).css("border-bottom-width"), 10)));
					});
					break;
			}
		}
	};
	
	w.matchHeights = function(objects){
		if($(objects).length > 1){
			var max_height=0;
			$(objects).css("height", "auto");
			$(objects).each(function(){			
				var my_height = $(this).outerHeight(false);
				max_height = Math.max(max_height, my_height);
			});
			$(objects).each(function(){
				$(this).height(max_height - (parseInt($(this).css("padding-top"), 10) + parseInt($(this).css("padding-bottom"), 10) + parseInt($(this).css("border-top-width"), 10) + parseInt($(this).css("border-bottom-width"), 10)));
			});
	
		}
	};
	
	w.jScroll = function(anchor_name){
		var aTag = $("a[name='"+anchor_name+"']");
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	};
}(window,document,jQuery));