/*!
 * (c) 2011 SysIQ, Inc. All rights reserved.
 *
 * This product is protected by United States laws,
 * international copyright treaties and all other applicable
 * national or international laws.
 *
 * This software may not, in whole or in part, be copied,
 * photocopied, translated, modified, or reduced to any
 * electronic medium or machine readable form
 * without the prior written consent of SysIQ, Inc.
 *
 * Filename: jquery.ajaxNavigation
 * Author:   Dmitry Shestopalov, Abel Rodriguez, Roman Belte
 */
var ajaxInProcess=false;if(!window.isProduction){var prodSec=$(".productresults.wrap").length?$(".productresults.wrap"):$("#workingTemplate");if(prodSec.length){var overlay=$("<div/>").attr("id","search-overlay").width(prodSec.width()).height(prodSec.height())}prodSec.css("position","relative").prepend(overlay)}function requestCategoryPage(b,a){if(ajaxInProcess){return false}ajaxInProcess=true;startImgLoad();if(sessionStorage.getItem(b)){onSuccess(sessionStorage.getItem(b),b)}else{$.ajax({url:b,data:{ajaxBrowse:"true"},dataType:"html",complete:function(){if(window.hideBodyAtLoading){$("#workingTemplate").css({position:"static",top:"auto"})}},success:function(c){onSuccess(c,b)}})}return false}var JSList="";var CSSList="";function onSuccess(b,a){ajaxInProcess=false;stopImgLoad();stopCarousels();var c=$("<div/>").append(b.replace(/<script[\s\S]+?\/script>/gi,""));$(".prodcategories").html(c.find(".prodcategories").html());$("#workingTemplate").html(c.find("#workingTemplate").html()).show();if(a.indexOf("isShowAllPrd=true")!=-1){sessionStorage.setItem(a,b)}if(!window.isProduction){prodSec.css({position:"static"});prodSec.find("#search-overlay").remove()}window.widget.init();document.title=c.find(".title").text();$("meta").each(function(){$(this).attr("content",c.find(".meta-"+$(this).attr("name")).text())});executeJavascript(b);$().commonFunctions();$("div[id$=Popup]").gumpsPopup();var d=window._gaq||[];if(window.isProduction){d.push(["_setAccount","UA-7744346-1"]);d.push(["_trackPageview",trackingUrl])}return false}function executeJavascript(b){var a="";b.replace(/<script[\s\S]+?\/script>/gi,function(c){a+=c});$("<div/>").html(a)}function loadCSS(e){var f=new RegExp("<link(.|\\s)*?>");var c=new RegExp('<link.+href="(.*?).css".*>');do{var d=f.exec(e);if(!d){break}var b=d[0].match(c);if(b&&CSSList.indexOf(b[1])<0){var a=document.createElement("link");a.setAttribute("type","text/css");a.setAttribute("href",b[1]);document.getElementsByTagName("head")[0].appendChild(a);CSSList+=b[1]+" "}e=e.replace(d[0],"")}while(true)}function stopCarousels(){stopCarousel($(".mycarousel"));stopCarousel($(".mycarousel_1"));stopCarousel($(".mycarousel_2"))}function stopCarousel(a){a.each(function(){var b=$(this).data("jcarousel");if(b){$(window).unbind("resize.jcarousel",b.funcResize)}});a.remove()}function startImgLoad(){$(".pagination .loadimgcl").show()}function stopImgLoad(){$(".pagination .loadimgcl").hide()};