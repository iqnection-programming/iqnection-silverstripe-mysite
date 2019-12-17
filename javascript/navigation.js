(function($){
	"use strict";
	var MobileMenu = function(name,options) {
		var element = $("#"+name);
		if (!element.length) {
			element = $('<nav></nav>');
			element.attr('id',name);
			$('body').append(element);
		}
		// get the DOM object if provided a jQuery object
		if (element[0] !== undefined) {
			element = element[0];
		}
		if (element.MobileNav === undefined) {
			$.extend(this, {
				root: element,
				options: {
					container: 'body',
					structure: {},
					controls: [],
					bodyClass: 'mobile-nav-open',
					ulClass: null,
					liClass: null,
					linkClass: null,
					addCloseBtn: false,
					nextLevelClass: 'level-switch level-down',
					prevLevelClass: 'level-switch level-up'
				},
				closeBtn: {},
				initialized: false,
				init: function(){
					var me = this;
					if (!this.initialized) {
						$("body").removeClass(me.options.bodyClass);
						$(me.options.controls).unbind('click').bind('click',function(){
							me.toggle();
						});
						me.initialized = true;
						me._load();
						me.hide();
						if (me.options.addCloseBtn) {
							me.closeBtn = $('<a href="javascript:;" class="nav-close"></a>');
							$(me.root).prepend(me.closeBtn);
							me.closeBtn.click(function(){
								me.hide();
							});
						}
						$(me.options.container).append($(me.root));
					}
					return me;
				},
				_load: function() {
					var me = this;
					var ul = $('<ul class="level-1"></ul>');
					$(me.root).append(ul);
					if (me.options.ulClass) {
						ul.addClass(me.options.ulClass);
					}
					$.each(me.options.structure, function(){
						var li = $('<li class="level-'+this.level+'"></li>');
						ul.append(li);
						if (me.options.liClass) {
							li.addClass(me.options.liClass);
						}
						var a = $('<a href="'+this.link+'" class="level-'+this.level+'"><span class="title">'+this.title+'</span></a>');
						li.append(a);
						if (me.options.linkClass) {
							a.addClass(me.options.linkClass);
						}
						if (this.children.length) {
							var trigger = $('<span class="level-'+this.level+'"><i class="fa fa-chevron-right"></i></span>');
							li.append(trigger);
							if (me.options.nextLevelClass) {
								trigger.addClass(me.options.nextLevelClass);
							}
							var dropdown = me._buildDropdown(this, this.children);
							li.append(dropdown);
							trigger[0]._dropdown = dropdown[0];
							trigger.click(function(e){
								e.preventDefault();
								$(this._dropdown).addClass('show');
							});
						}
					});
				},
				_buildDropdown: function(parent, children) {
					if (!children.length) {
						return null;
					}
					var me = this;
					var ul = $('<ul class="level-'+(parent.level+1)+'"></ul>');
					if (me.options.ulClass) {
						ul.addClass(me.options.ulClass);
					}
					var li = $('<li class="level-'+(parent.level+1)+'"></li>');
					ul.append(li);
					if (me.options.liClass) {
						li.addClass(me.options.liClass);
					}
					var a = $('<a class="level-'+(parent.level+1)+'"><span class="title">'+parent.title+'</span></a>');
					var trigger = $('<span class="level-'+(parent.level+1)+'"><i class="fa fa-chevron-left"></i></span>');
					li.append(trigger);
					li.append(a);
					trigger[0]._dropdown = ul[0];
					a[0]._dropdown = ul[0];
					$(a).click(function(e){
						e.preventDefault();
						$(this._dropdown).removeClass('show');
					});
					$(trigger).click(function(e){
						e.preventDefault();
						$(this._dropdown).removeClass('show');
					});
					if (me.options.linkClass) {
						a.addClass(me.options.linkClass);
					}
					if (me.options.prevLevelClass) {
						trigger.addClass(me.options.prevLevelClass);
					}
					$.each(children, function(){
						li = $('<li class="level-'+this.level+'"></li>');
						ul.append(li);
						if (me.options.liClass) {
							li.addClass(me.options.liClass);
						}
						a = $('<a href="'+this.link+'" class="level-'+this.level+'"><span class="title">'+this.title+'</span></a>');
						li.append(a);
						if (me.options.linkClass) {
							a.addClass(me.options.linkClass);
						}
						if (this.children.length) {
							trigger = $('<span class="level-'+this.level+'"><i class="fa fa-chevron-right"></i></span>');

							li.append(trigger);
							if (me.options.nextLevelClass) {
								trigger.addClass(me.options.nextLevelClass);
							}
							var dropdown = me._buildDropdown(this,this.children);
							li.append(dropdown);
							trigger[0]._dropdown = dropdown[0];
							trigger.click(function(e){
								e.preventDefault();
								$(this._dropdown).addClass('show');
							});
						}
					});
					return ul;
				},
				show: function() {
					$(this.root).removeClass('closed').addClass('open');
					$(this.options.controls).removeClass('closed').addClass('open');
					$("body").addClass(this.options.bodyClass);
					return this;
				},
				hide: function() {
					$(this.root).removeClass('open').addClass('closed');
					$(this.options.controls).removeClass('open').addClass('closed');
					$("body").removeClass(this.options.bodyClass);
					return this;
				},
				toggle: function (){
					if ($(this.root).hasClass('open')) {
						this.hide();
					} else {
						this.show();
					}
					return this;
				}
			});
			$.extend(this.options, options);
			element.MobileNav = this;
			this.init();
		}
		return element.MobileNav;
	};
	var DesktopMenu = function(element, options){
		if (typeof element === 'string') {
			element = $(element);
		}
		if (element[0] !== undefined) {
			element = element[0];
		}
		if (element.DesktopMenu !== undefined) {
			return element.DesktopMenu;
		}
		$.extend(this, {
			element: element,
			ul: {},
			lis: [],
			dropdowns: [],
			touchbound: false,
			options: {
				dropdown_selector: '.dropdown'
			},
			initialized: false,
			init: function() {
				var me = this;
				me.ul = $(me.element).find('ul')[0];
				$(me.ul).find('>li').addClass('level-1');
				me.lis = $(me.element).find('li');
				me.lis.each(function() {
					var li=this;
					if ($(li).find(me.options.dropdown_selector).length) {
						li._dropdown = $(li).find(me.options.dropdown_selector)[0];			
						$(li).mouseover(function() {
							if (!li._isHovered) {
								li._isHovered = true;
								setTimeout(function(){
									if (li._isHovered) {
										me._showDropdown(li);
									}
								},$(li._dropdown).data('show-delay') ? $(li._dropdown).data('show-delay') : 0);
							}
						}).mouseout(function() {
							if (li._isHovered) {
								li._isHovered = false;
								setTimeout(function(){
									if (!li._isHovered) {
										me._hideDropdown(li);
									}
								},$(li._dropdown).data('hide-delay') ? $(li._dropdown).data('hide-delay') : 0);
							}
						});
					}
				});
				$(window).bind('touchstart', function(){ me._touchBind(); });
				if (navigator.msMaxTouchPoints) { $(window).bind('MSPointerDown', function(){ me._touchBind(); }); }
				return this;
			},
			_toggleDropdown: function(navItem){
				if (navItem[0] !== undefined) {
					navItem = navItem[0];
				}
				if (navItem._dropdown !== undefined) {
					if (navItem._dropdown._open) {
						this._hideDropdown(navItem);
					} else {
						this._showDropdown(navItem);
					}
				}
				return navItem;
			},
			_showDropdown: function(navItem){
				var me=this;
				$(me.lis).not(navItem).not($(navItem).parents('.level-1').first()).each(function(){
					me._hideDropdown(this);
				});
				if (navItem[0] !== undefined) {
					navItem = navItem[0];
				}
				if (navItem._dropdown !== undefined) {
					navItem._dropdown._open = true;
					$(navItem._dropdown).fadeIn(200);
				}
				return navItem;
			},
			_hideDropdown: function(navItem, buffer){
				buffer = buffer || 100;
				if (navItem[0] !== undefined) {
					navItem = navItem[0];
				}
				if (navItem._dropdown !== undefined) {
					setTimeout(function(){
						// slight bug when jumping between child elements
						// make sure this item doesn't have any children that are being hovered
						if($(navItem).find(":hover").length) { return; }
						navItem._dropdown._open = false;
						$(navItem._dropdown).fadeOut(100);
					},buffer);
				}
				return navItem;
			},
			_touchBind: function() {
				var me=this;
				if (!me.touchbound)
				{
					$(me.lis).each(function(){
						if (this._dropdown !== undefined) {
							var li=$(this);
							li.unbind("hover");
							li.unbind("mouseover");
							li.unbind("mouseout");
					
							$(this).find("a").first().bind('click', function(e){
								e.preventDefault(); 
								me._toggleDropdown($(this).parents('li').first()[0]);
								return false;
							});
						}
					});
					$("body").bind('click',function(e){
						if(!$(e.target).parents().filter(me.lis).length){
							$(me.lis).each(function(){
								me._hideDropdown(this);
							});
						}
					});
					me.touchbound = true;
				}
				return this;
			}
		});
		$.extend(this.options, options);
		element.DesktopMenu = this;
		return this.init();
	};
		
	window._pageLoaded = function(){
		window._DesktopMenu = window._DesktopMenu || new DesktopMenu('#header nav');
		if (window._mobileMenuLinks !== undefined) {
			window._MobileMenu = window._MobileMenu || new MobileMenu('mobile-nav',{
				container: 'body',
				structure: window._mobileMenuLinks,
				controls: $(".nav-toggle"),
				addCloseBtn: true
			});
		}
	};
	
	$(document).ready(function(){
		window._pageLoaded();
	});

}(jQuery));