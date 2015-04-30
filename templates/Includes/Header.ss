<div id="header_wrap" class="wrap">
    <header>
        <a href="/" id="logo"><img src="/themes/mysite/images/logo.png" alt="$SiteConfig.Title | $SiteConfig.Tagline" /></a>        
        <nav class="desktop" id="main_nav">
            <ul>
                <% loop Menu(1) %>
                    <li><a href="$Link" target="$Target" class="$LinkingMode" id="nav$Pos" $NavNoFollow>$MenuTitle</a><% include Dropdown %></li>
                <% end_loop %>
            </ul>
        </nav>
    </header>
</div><!--header_wrap-->