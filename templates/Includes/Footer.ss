<div id="footer_wrap" class="wrap">
    <footer>
        <nav>
            <ul>
                <% loop Menu(1) %>
                    <li><a href="$Link" target="$Target" class="$LinkingMode" $NavNoFollow>$MenuTitle</a></li>
                <% end_loop %>
            </ul>
        </nav>
        <ul id="social">
            <% if $SiteConfig.Social1 %><li><a href="$SiteConfig.Social1" id="icon_fb">Facebook</a></li><% end_if %>
        </ul><!--social-->
        <p id="copyright">
            Copyright &copy; $CopyrightYear $CopyrightName<br />
            <a href="http://www.iqnection.com" target="_blank">Website Design &amp; Website Hosting by IQnection</a>
        </p>
    </footer>
</div><!--footer_wrap-->