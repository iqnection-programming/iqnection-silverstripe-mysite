<div id="footer" class="wrap">
    <footer>
        <nav>
            <ul>
                <% loop Menu(1) %>
                    <li><a href="$Link" target="$Target" class="$LinkingMode" $NavNoFollow>$MenuTitle</a></li>
                <% end_loop %>
            </ul>
        </nav>
		<% include SocialMediaLinks %>
        <div class="copyright">
            Copyright &copy; $Now.Year $CopyrightName<br />
            <% if ClassName == HomePage %>
				<a href="https://www.iqnection.com" target="_blank">Website Design by IQnection - A Digital Marketing Agency</a>
			<% else %>
				Website Design by IQnection - A Digital Marketing Agency
			<% end_if %>
        </div>
    </footer>
</div><!--footer_wrap-->

<a href="javascript:;" class="nav-toggle"><span class="bar bar1"></span><span class="bar bar2"></span><span class="bar bar3"></span></a>

<div id="mobile-nav"></div><!--/#mobile-nav-->