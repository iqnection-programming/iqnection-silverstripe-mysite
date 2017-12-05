<div id="footer_wrap" class="wrap">
    <footer>
        <nav>
            <ul>
                <% loop Menu(1) %>
                    <li><a href="$Link" target="$Target" class="$LinkingMode" $NavNoFollow>$MenuTitle</a></li>
					<% if MultipleOf(5) && not Last %></ul><ul><% end_if %>
                <% end_loop %>
            </ul>
        </nav>
        <ul id="social">
			<% include SocialIcons Icon=Facebook %>
			<% include SocialIcons Icon=Twitter %>
			<% include SocialIcons Icon=Pinterest %>
			<% include SocialIcons Icon=LinkedIn %>
			<% include SocialIcons Icon=Instagram %>
			<% include SocialIcons Icon=Houzz %>
			<% include SocialIcons Icon=GooglePlus %>
			<% include SocialIcons Icon=Blog %>
			<% include SocialIcons Icon=Flickr %>
			<% include SocialIcons Icon=YouTube %>
			<% include SocialIcons Icon=Vimeo %>
			<% include SocialIcons Icon=Yelp %>
			<% include SocialIcons Icon=Tumblr %>
        </ul><!--social-->
        <p id="copyright">
            Copyright &copy; $CopyrightYear $CopyrightName<br />
            <% if ClassName == HomePage %>
				<a href="http://www.iqnection.com" target="_blank">Website Design by IQnection - A Digital Marketing Agency</a>
			<% else %>
				Website Design by IQnection - A Digital Marketing Agency
			<% end_if %>
        </p>
    </footer>
</div><!--footer_wrap-->