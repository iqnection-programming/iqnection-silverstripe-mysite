var main_nav = "#header_wrap > header nav";
var touchbound = false;

$(document).ready(function(){
	//Break point in responsive.js
	if($(window).width() > break_point)setupNav();
});

function setupNav(){
	
	$(window).bind('touchstart', function(e){ isTouch() });
	if (navigator.msMaxTouchPoints) $(window).bind('MSPointerDown', function(e){ isTouch() });

	$(main_nav).each(function(){
		$(this).find('li').each(function() {
			// First we clear off mobile click if present
			$(this).find('> a').unbind('click');
			$(this).hover(function() {				
				if (!touchbound) showNav($(this));
			}, function() {
				if (!touchbound) hideNav($(this));
			});
		});
	});		
}

function showNav(navItem)
{
	navItem.children('.dropdown').fadeIn(200);
}

function hideNav(navItem)
{
	navItem.children('.dropdown').fadeOut(100);
}

function isTouch() 
{
	if (!touchbound)
	{
		$(nav + ' li').each(function(){
			
			$(this).unbind("hover");
			$(this).unbind("mouseover");
			$(this).unbind("mouseout");
			
			if ($(this).children("ul").length > 0)
			{
				$(this).unbind('mouseout');
				$(this).unbind('mouseover');
				
				//$(this).children("ul").prepend("<li><a href='"+$(this).children("a").attr("href")+"'>"+$(this).children("a").html()+"</a></li>");
			
				$(this).children("a").bind('click', function(e){ 
					e.preventDefault(); 
					
					if ($(this).attr("rel") == "open")
					{
						// clicking to close
						$(this).attr("rel", "closed");
						hideNav($(this).parent());
					}
					else
					{
						// are we clicking another top nav, or a sub nav
						if ($(this).parents().children('a[rel=open]').length > 0)
						{
							if ($(this).parent('li').children('.dropdown').length == 0)
							{
								$('nav .dropdown').hide();
								$("a[rel=open]").attr("rel", "closed");
							}							
							$(this).attr("rel", "open");
							showNav($(this).parent());	
						}
						else
						{						
							$('nav .dropdown').hide();
							$("a[rel=open]").attr("rel", "closed");
							$(this).attr("rel", "open");
							showNav($(this).parent());
						}
					}
					return false;
				});
			}
		});
		
		touchbound = true;
	}
}