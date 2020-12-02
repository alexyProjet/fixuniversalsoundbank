// ==UserScript==
// @name     Universal Soundbank FIX
// @version  1
// @grant    none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// @include  http://www.universal-soundbank.com/*
// ==/UserScript==

var $j_object = $(".dropcontent p a");
$j_object.each( function(i,val) { 
  
  let hreftxt = $(val).attr("href"); 
  hreftxt = hreftxt.replace("http://s1download-universal-soundbank.com/mp3/","http://www.universal-soundbank.com/")
  $(val).attr("href",hreftxt); 
} );
