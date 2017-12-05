<div id="header_wrap" class="wrap">
    <header>
        <a href="/" id="logo"><img src="/themes/mysite/images/logo.png" alt="$SiteConfig.Title | $SiteConfig.Tagline" /></a> 
		<a href="javascript:;" id="nav_toggle"><span class="bar bar1"></span><span class="bar bar2"></span><span class="bar bar3"></span></a>       
    </header>
</div><!--header_wrap-->

<div id="nav_wrap" class="wrap">
	<nav class="desktop">
		<ul>
			<% loop Menu(1) %>
				<li><a href="$Link" target="$Target" class="$LinkingMode" id="nav$Pos" $NavNoFollow<% if $ClassName==HeadingPage %> heading="1"<% end_if %>>$MenuTitle</a><% include Dropdown %></li>
			<% end_loop %>
		</ul>
	</nav>
</div><!--nav_wrap-->