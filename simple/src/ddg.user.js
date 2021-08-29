// Change CSS example user script
// version 0.2
// 2021-08-21
// Copyright (c) 2021, Harald Kubota
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Tampermonkey user script.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Hello World", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @author        Harald Kubota
// @name          DDG
// @namespace     https://f000.backblazeb2.com/file/public-stuff-001/userscripts/ddg.user.js
// @description   example script to change CSS slightly
// @include       https://duckduckgo.com/
// @exclude       http://diveintogreasemonkey.org/*
// @exclude       http://www.diveintogreasemonkey.org/*
// ==/UserScript==

const b=document.getElementById('search_form_input_homepage')
if (b) {
  b.style.backgroundColor="#202020";
}

//console.log(myBody);
