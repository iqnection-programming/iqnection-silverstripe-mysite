<% include DocumentHead %>

	<% require themedCSS("base") %>
    <% require themedCSS("fonts") %>
    <% require themedCSS("form") %>
    <% require themedCSS("layout") %>
    <% require themedCSS("typography") %>
    <% require themedCSS("responsive") %>
    <% require themedJavascript("jquery-1.9.1.min") %>
    <% require themedJavascript("responsive") %>
    <% require themedJavascript("navigation") %>
    <% require themedJavascript("scripts") %>

    <% include Header %>
    
    <div id="main_wrap" class="wrap">
    	<div id="main">
        	<div id="page_type" class="internal typography">
        		$Layout
                $Form
            </div>
        </div><!--main-->
    </div><!--main_wrap-->
    
    <% include Footer %>

<% include DocumentFoot %>