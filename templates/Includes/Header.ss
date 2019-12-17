
<div id="header" class="wrap">
    <header>
        <a href="/" class="logo"><img src="{$ThemeDir}/images/logo.png" alt="$SiteConfig.Title | $SiteConfig.Tagline" /></a> 
    </header>
</div><!--header_wrap-->

<div id="main-nav" class="wrap">
	<nav class="desktop">
		<ul>
			<% loop Menu(1) %>
				<li><a href="$Link" target="$Target" class="$LinkingMode" id="nav-$ID" $NavNoFollow<% if $ClassName==IQnection\HeadingPage\HeadingPage %> data-is-heading="1"<% end_if %>>$MenuTitle</a><% include Dropdown %></li>
			<% end_loop %>
		</ul>
	</nav>
</div><!--nav_wrap-->