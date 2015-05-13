<!DOCTYPE html>
<html lang="$ContentLocale">
<head>
	<% base_tag %>
	<title><% if $MetaTitle %>$MetaTitle<% else %>$Title &raquo; $SiteConfig.Title<% end_if %></title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	$MetaTags(false)
	<% if $MetaKeywords %>
		<meta name="keywords" content="$MetaKeywords">
	<% end_if %>
    <link rel="shortcut icon" href="/favicon.ico?v=1" />
    <link rel="canonical" href="$AbsoluteLink" />
    <% if SiteConfig.GoogleTrackingUniversal %><% include GA %><% end_if %>
    <% if SiteConfig.GoogleTrackingOld %><% include GA_old %><% end_if %>
    <!--[if lt IE 9]>
    <script src="/themes/mysite/javascript/html5shiv.js"></script>
    <script src="/themes/mysite/javascript/html5shiv-printshiv.js"></script>
    <![endif]-->
</head>
<body>