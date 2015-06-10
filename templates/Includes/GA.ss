<!-- Google Analytics -->
<script type="text/javascript">
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', '$SiteConfig.GoogleTrackingUniversal', 'auto');
	ga('send', 'pageview');
  
	function recordOutboundLink(link, category, action, opt_label, is_tel) {
		var params = {
			'eventCategory': category,
			'eventAction': action,
			'eventLabel': opt_label
		};
		if(is_tel){
			//onClick="return recordOutboundLink(this,'Phone Call Links','Call','Header Phone Link',true);"
			if (screen.width <= 500) ga('send', 'event', params);
			return true;
		} else {
			ga('send', 'event', params);
			setTimeout('document.location = "' + link.href + '"', 100);
		}		
	} 
	
	function trackFormSubmit(form, category, action, opt_label, opt_value, submit_form) {
		var params = {
			'eventCategory': category,
			'eventAction': action,
			'eventLabel': opt_label,
			'eventValue': opt_value
		};
		ga('send', 'event', params);
		if (submit_form) setTimeout("document.getElementById('"+form.id+"').submit();", 100);
		return false;
	}
</script>
<!-- End Analytics-->