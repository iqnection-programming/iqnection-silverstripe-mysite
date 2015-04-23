<!-- Google Analytics -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '$SiteConfig.GoogleTrackingOld']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  
	function recordOutboundLink(link, category, action, label, is_tel) {
		_gaq.push(['_trackEvent', category, action, label, 1]);
		if(is_tel){
			//onClick="return recordOutboundLink(this,'Phone Call Links','Call','Header Phone Link',true);"
			return true;
		} else {
			setTimeout('document.location = "' + link.href + '"', 100);
		}
	} 
	
	function trackFormSubmit(form, category, action, opt_label, opt_value) {
		_gaq.push(['_trackEvent', category, action, opt_label, opt_value]);
		setTimeout("document.getElementById('"+form.id+"').submit();", 250);
		return false;
	}  

</script>
<!-- End Analytics-->