
(function(w,d,$){
	"use strict";
	var responsiveAdjustmentsCollection = [];
	var scrollUpdatesCollection = [];
	w.addResponsiveAdjustment = function(a){
		responsiveAdjustmentsCollection.push(a);
	};
	w.addScrollUpdate = function(a){
		scrollUpdatesCollection.push(a);
	};
	w.runScrollUpdates = function(){
		if(scrollUpdatesCollection.length){
			$(scrollUpdatesCollection).each(function(i){
				scrollUpdatesCollection[i]();
			});
		}
	};
	w.runResponsiveAdjustments = function(){
		if(responsiveAdjustmentsCollection.length){
			$(responsiveAdjustmentsCollection).each(function(i){
				responsiveAdjustmentsCollection[i]();
			});
		}
		w.runScrollUpdates();
	};
	
	$(d).ready(function(){
		w.runResponsiveAdjustments();	
		$(w).load(function(){
			w.runResponsiveAdjustments();
			if(scrollUpdatesCollection.length>0){
				$(w).bind('scroll',function(){
					w.runScrollUpdates();
				});
			}
		}).resize(function(){
			w.runResponsiveAdjustments();
		});
	});	
	
}(window,document,jQuery));