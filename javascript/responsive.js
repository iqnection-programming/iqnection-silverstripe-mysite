// Pixel width where nav toggles desktop/mobile
var break_point = 600

// Set to true if javascript will dynamically space nav items
var space_nav = false;

// Set to 'li > a' or 'li' based on which element should get padding/margin
var space_tag = "li > a";

// Should be set to true if your first and last nav item are against site edges
var edges = false;

// Whether or not to use percentages when spacing teh nav. Only works when edges is false
var use_percent = false;

// Set type to 'padding' or 'margin'
var type = 'padding';

// This should be zero.  If it isn't, the font being used is ruining everything.
var width_fix = 1;

$(document).ready(function(){
	responsiveAdjustments();	
});

$(window).load(function(){
	responsiveAdjustments();
});

$(window).resize(function(){
	responsiveAdjustments();
});

function responsiveAdjustments(){
	responsiveNav();
}

/*
 * Toggles nav styles
 * {nav} variable created in dropdowns.js
 */
function responsiveNav(){
	/*
	 * DESKTOP NAV
	 */
	if($(window).width() > break_point){
		onBeforeSwitchToDesktop().done(function(){		
			if($(main_nav).hasClass('mobile')){
				$(main_nav).removeClass('mobile').addClass('desktop');
				
				/* Cleanup!
				 * 1. Remove our nav toggle link
				 * 2. Remove our cloned parent links in dropdowns
				 * 3. Run setupNav() from dropdowns.js to assign hover events
				 * 4. Hide open dropdowns
				 * 5. Run spaceNav() to space out nav items
				 */
				$('#nav_toggle').remove();
				$('.mobile_top').remove();
				$(main_nav).find('li').css('display','');
				$('nav .dropdown').hide();
				setupNav();
			}
			if(space_nav)spaceNav(main_nav);
		});
	/*
	 * MOBILE NAV
	 */	
	} else {
		onBeforeSwitchToMobile().done(function(){
			if($(main_nav).hasClass('desktop')){				
				$(main_nav).removeClass('desktop').removeClass('sized').addClass('mobile');
				$(main_nav).find('> ul.fullwidth > '+space_tag).removeAttr('style');
				$(main_nav).find('> ul.fullwidth > li').hide();
				$(main_nav).find('li').each(function(){
					$(this).unbind('mouseenter').unbind('mouseleave')
					var a_tag = $(this).find('> a');
					
					/* If a nav item has a dropdown menu we have to make it mobile friendly
					 * 1. Add a clone of the parent to the beginning of the dropdown items
					 * 2. Override parent's default action to instead open the dropdown menu
					 */
					if(a_tag.siblings('.dropdown').length){
						if((!a_tag.siblings('.dropdown').children('.mobile_top').length)&&(!a_tag.attr('heading')))a_tag.siblings('.dropdown').prepend('<li class="mobile_top"><a href="'+a_tag.attr('href')+'">'+a_tag.html()+'</a></li>');
						a_tag.unbind('click').click(function(){
							a_tag.siblings('.dropdown').slideToggle(200);
							return false;		
						});	
					}	
				});
				/*
				 * Add our nav toggle button
				 */
				if(!$('#nav_toggle').length){
					$(main_nav).find('> ul').first().prepend("<li id='nav_toggle'><a href='javascript:;'>Navigation</a></li>");
					$("#nav_toggle").click(function(){ $(main_nav).find('> ul > li').not('#nav_toggle').slideToggle(200); });
				}
			}
		});
	}
}

function onBeforeSwitchToDesktop(){
	return $.Deferred().resolve();
}

function onBeforeSwitchToMobile(){
	return $.Deferred().resolve();
}
/*
 * Spaces nav items on desktop
 */
function spaceNav(fixnav){
	$(fixnav).each(function(){	
		var items = $(this).find('> ul.fullwidth > '+space_tag);
		var item_total = items.length;
		var nav_width = $(this).width();	
		var item_width = 0;
		items.each(function(){item_width+=Math.floor($(this).width())});
		if (edges || !use_percent){			
			var space = Math.floor((((nav_width-width_fix)-item_width) / ((item_total - (edges ? 1 : 0))*2)));
			if(space){
				items.each(function(index){
					if(!edges || index != 0)$(this).css(type+'-left',space+'px');
					if(!edges || index != (item_total - 1))$(this).css(type+'-right',space+'px');			
				});
			}
		}else{
			if ($(this).hasClass('sized')) return;
			var space = Math.floor( (nav_width-item_width) / item_total );
			if(space){
				items.each(function(index){
					var newWidth = $(this).width() + space;
					var percentOfCt = (newWidth / nav_width)*100;
					$(this).css('width',percentOfCt.toFixed(2) + '%');
				});
			}
			$(this).addClass('sized');
		}
	});
}