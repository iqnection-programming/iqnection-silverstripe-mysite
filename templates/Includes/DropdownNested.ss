<% if Children %>
    <div class="dropdown" style="display:none;">
        <ul>
            <% control Children %>
                <% if Last %>
                    <li class="last">
                <% else %>
                    <li>
                <% end_if %>
                <a href="$Link" target="$Target">$MenuTitle<% if Children %>&nbsp;&nbsp;&nbsp; &raquo;<% end_if %></a>$BuildSubDropdowns</li>
            <% end_control %>
        </ul>
    </div>
<% end_if %>