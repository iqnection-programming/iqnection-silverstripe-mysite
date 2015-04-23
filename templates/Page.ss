<!DOCTYPE html>
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<% base_tag %>
<title><% if FindMetaTitle %>$MetaTitle<% else %>$Title &raquo; $SiteConfig.Title<% end_if %></title>
<meta name="keywords" content="$MetaKeywords" />
<meta name="description" content="$MetaDescription" />
<% if HasMobileSite %>
<script language="javascript" type="text/javascript" src="/themes/mysite/javascript/mobile/mobile.redirect.js"></script>
<script type="text/javascript">
	SA.redirection_mobile ({mobile_scheme:"http", mobile_url : "$MobileSiteUrl"});
</script>
<% end_if %>
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="canonical" href="$AbsoluteLink" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<% if SiteConfig.GoogleTrackingUniversal %><% include GA %><% end_if %>
<% if SiteConfig.GoogleTrackingOld %><% include GA_old %><% end_if %>
<!--[if lt IE 9]>
<script src="/themes/mysite/javascript/html5shiv.js"></script>
<script src="/themes/mysite/javascript/html5shiv-printshiv.js"></script>
<![endif]-->
</head>
<body>

    <div id="header_wrap">
    	<header>
        	<nav class="desktop">
				<ul>
					<% control Menu(1) %>
						<li><a href="$Link" target="$Target" class="$LinkingMode" id="nav$Pos" $NavNoFollow<% if ClassName==HeadingPage %> heading="1"<% end_if %>>$MenuTitle</a><% include Dropdown %></li>
					<% end_control %>
				</ul>
			</nav>
        </header>
    </div><!--header_wrap-->
    
    <div id="main_wrap">
    	<div id="main">
			<form id="form_search" name="form_search" action="/home/SearchForm" method="get">
				<label for="field_search">Search</label>
				<input type="text" name="Search" id="field_search" />
				<input type="submit" id="field_submit" value="Go" />
			</form>
        	$Layout
        </div><!--main-->
    </div><!--main_wrap-->
    
    <div id="footer_wrap">
    	<footer>
        	<nav>
            	<ul>
                    <% control Menu(1) %>
                        <li><a href="$Link" target="$Target" class="$LinkingMode" $NavNoFollow>$MenuTitle</a></li>
                        <% if MultipleOfNotLast(3) %></ul><ul><% end_if %>
                    <% end_control %>
                </ul>
            </nav>
			<ul id="social">
				<% control SiteConfig %>
					<% if FacebookURL %><li><a href="$FacebookURL" target="_blank" id="icon_fb">Like us on Facebook</a></li><% end_if %>
					<% if TwitterURL %><li><a href="$TwitterURL" target="_blank" id="icon_tw">Follow us on Twitter</a></li><% end_if %>
					<% if LinkedInURL %><li><a href="$LinkedInURL" target="_blank" id="icon_li">Connect with us on LinkedIn</a></li><% end_if %>
					<% if GooglePlusURL %><li><a href="$GooglePlusURL" target="_blank" id="icon_gp">Follow us on Google+</a></li><% end_if %>
					<% if PinterestURL %><li><a href="$PinterestURL" target="_blank" id="icon_pin">Check us out on Pinterest</a></li><% end_if %>
					<% if InstagramURL %><li><a href="$InstagramURL" target="_blank" id="icon_inst">Follow us on Instagram</a></li><% end_if %>
				<% end_control %>
			</ul><!--social-->
        	<p id="copyright">
                Copyright &copy; $CopyrightYear <% if SiteConfig.SEOFooterLabel %>$SiteConfig.SEOFooterLabel<% else %>$CopyrightName<% end_if %><br />
                <% if SiteConfig.SEOFooterLine %>$SiteConfig.SEOFooterLine<% else %><a href="http://www.iqnection.com" target="_blank">Website Design &amp; Website Hosting by IQnection</a><% end_if %>
            </p>
        </footer>
    </div><!--footer_wrap-->
$TemplateAdditionalCode   
</body>
</html>

