
var Responsive = Responsive || {
	responsiveAdjustmentsCollection: [],
	scrollUpdatesCollection: [],
	addResponsiveAdjustment: function(a){
		this.responsiveAdjustmentsCollection.push(a);
	},
	addScrollUpdate: function(a){
		this.scrollUpdatesCollection.push(a);
	},
	runScrollUpdates: function(){
		if (this.scrollUpdatesCollection.length) {
			this.scrollUpdatesCollection.forEach(function(cb) {
                cb();
            });
		}
	},
	runResponsiveAdjustments: function(){
		if (this.responsiveAdjustmentsCollection.length) {
			this.responsiveAdjustmentsCollection.forEach(function(cb){
				cb();
			});
		}
		this.runScrollUpdates();
	}
};

(function($){
	"use strict";
	$(document).ready(function(){
		Responsive.runResponsiveAdjustments();
	});
    $(window).bind('scroll',function(){
        Responsive.runScrollUpdates();
    });
	$(window).load(function(){
        Responsive.runResponsiveAdjustments();
    }).resize(function(){
        Responsive.runResponsiveAdjustments();
    });
}(jQuery));