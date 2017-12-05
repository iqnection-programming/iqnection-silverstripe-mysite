<% if Children %>
    <ul class="dropdown" style="display:none;">
        <% loop Children %>
            <li><a href="$Link" target="$Target" $NavNoFollow>$MenuTitle</a></li>
        <% end_loop %>
    </ul>
<% end_if %>