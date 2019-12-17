<div id="footer" class="wrap">
    <footer>
        <nav>
            <ul>
                <% loop Menu(1) %>
                    <li><a href="$Link" target="$Target" class="$LinkingMode" $NavNoFollow>$MenuTitle</a></li>
					<% if MultipleOf(5) && not Last %></ul><ul><% end_if %>
                <% end_loop %>
            </ul>
        </nav>
        <ul class="social">
			<% include SocialIcons Icon=Facebook %>
			<% include SocialIcons Icon=Twitter %>
			<% include SocialIcons Icon=LinkedIn %>
			<% include SocialIcons Icon=YouTube %>
			<% include SocialIcons Icon=Instagram %>
			<% include SocialIcons Icon=Houzz %>
			<% include SocialIcons Icon=GMB %>
			<% include SocialIcons Icon=Blog %>
			<% include SocialIcons Icon=Pinterest %>
			<% include SocialIcons Icon=Flickr %>
			<% include SocialIcons Icon=Vimeo %>
			<% include SocialIcons Icon=Yelp %>
			<% include SocialIcons Icon=Tumblr %>
			<% include SocialIcons Icon=AngiesList %>
        </ul><!--social-->
        <div class="copyright">
            Copyright &copy; $CopyrightYear $CopyrightName<br />
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