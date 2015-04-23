<div id="page_type" class="internal typography">
	<% if SidebarContent %><section id="page_left"><% end_if %>
        <h1>$Title</h1>
        $Content
        <% include Page_columns %>
    <% if SidebarContent %>
    </section>
    <section id="page_right">
    	<% if RotatingImages %><div id="rotating_images"><img src="" id="next_image" /><img src="" id="current_image" /></div><% end_if %>
    	$SidebarContent
    </section>
    <% end_if %>
</div>

<% if RotatingImages %>
<script type="text/javascript">        
	var max_index = $RotatingImages.Count-1;
       
	var images = [];
<% control RotatingImages %>
	images[$Pos-1] = '$GetThumbURL';
<% end_control %>
</script>
<% end_if %>