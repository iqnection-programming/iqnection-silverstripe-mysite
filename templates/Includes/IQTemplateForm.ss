<div class="centeredForm">
    <form $FormAttributes>
        <% if Message %><div id="{$FormName}_error" class="message $MessageType">$Message</div><% end_if %>
		$FormFields     
        <% if Actions %>
        <div class="formRight">
        <% control Actions %><div class="formAction">$Field</div><% end_control %>
        </div>
        <div class="clear"></div>
        <% end_if %>			
    </form>
</div>