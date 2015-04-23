<% if Children %>
    <ul class="dropdown" style="display:none;">
        <% control Children %>
            <li><a href="$Link" target="$Target" $NavNoFollow>$MenuTitle</a></li>
        <% end_control %>
    </ul>
<% end_if %>