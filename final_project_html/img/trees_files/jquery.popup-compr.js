/*!
 * (c) 2010 SysIQ, Inc. All rights reserved.
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
 * Filename: jquery.popup.js
 * Author:  Dmitry Shestopalov, Dmitriy Yakubovskiy, Marian Krekhovetskiy, Artem Mitasov
 *
 *
 */
removeTempPopups=function(a){$("div.thisIsPopup.toDelete").each(function(){if($(this).attr("id")==a.attr("id")){$(this).remove()}});$.fn.gumpsPopup.collection.remove(a)};(function(c){var d=function(){var g=document.documentElement,f=document.body,e=window;return{getClientHeight:function(){return e.innerHeight||(g&&g.clientHeight)||(f&&f.clientHeight)},getClientWidth:function(){return e.innerWidth||(g&&g.clientWidth)||(f&&f.clientWidth)},getBodyScrollTop:function(){return(e.pageYOffset||(g&&g.scrollTop)||(f&&f.scrollTop))||0},getBodyScrollLeft:function(){return(e.pageXOffset||(g&&g.scrollLeft)||(f&&f.scrollLeft))||0}}}();var b=/iPhone|iPad|iPod/i.test(navigator.userAgent),a=/OS\s+(\d+)/.test(navigator.userAgent)&&RegExp.$1<5;c.fn.alignCenter=function(){c(this).css({position:"absolute",top:Math.round(((d.getClientHeight()-c(this).height())/2)+c(window).scrollTop())+"px",left:Math.round(((d.getClientWidth()-c(this).width())/2)+c(window).scrollLeft())+"px"});return this};c.fn.gumpsPopup=function(){var f=c(window),g=c.browser.msie&&c.browser.version==6,e=c.browser.msie&&c.browser.version==7;f.resize(function(){var h=c("div.popup-overlay:visible").next("div.popup");h.alignCenter()});this.each(function(){var h=c(this);if(g){f.scroll(function(){var i=c(this);var j=i.scrollTop()+i.height()/2;h.children(".popup").css("top",j)})}if(b){f.scroll(function(){h.children(".popup").each(function(){c(this).alignCenter()})})}c(document).keyup(function(i){if(i.which==27){h.each(function(){if(c(this).css("display")!="none"&&c(this).data("events")["customizeClose"]){c(this).trigger("customizeClose")}if(!c(this).hasClass("noEscClose")){c(this).trigger("closePopup")}})}return false});h.bind("showPopup",function(l,i){var k=c(this);c.fn.gumpsPopup.collection.put(k);var m=function(){var n=k.children(".popup-overlay");n.height(c(document).height());if(c.browser.msie&&c.browser.version<8){n.css("filter","alpha(opacity=65)")}else{n.fadeTo("slow",0.65)}if(g){n.width(c(document).width()-20)}k.show().children(".popup").alignCenter();setTimeout(function(){k.children(".popup").alignCenter()},200);setTimeout(function(){var o=k.find(".country-select");o.each(function(){var p=c(this).parents("form").find(".state-select");initCountryState(this,p)})},5);if(c.fn.oneFingerScroll){k.find(i||"div[id$=PopupBorder]").oneFingerScroll()}};if(window.googleTestingABUrl){(function j(n){if(!j.scriptKey){j.scriptKey=0}c.ajax({url:window.googleTestingABUrl,data:{ScriptType:n[j.scriptKey],CurrentTemplate:k.attr("id")},type:"post",cache:false,complete:function(o,p){var r=n[j.scriptKey],q=o.responseText;if(q){k[r=="Control"?"prepend":"append"](q)}if(++j.scriptKey<n.length){j(n)}else{m()}}})})(["Control","Tracking","Conversion"])}else{m()}});h.bind("rePosition",function(){h.find(".popup").alignCenter()});h.bind("closePopup",function(){h.hide().children(".popup-overlay").removeAttr("style");removeTempPopups(h)});h.find(".hidePopup, #closepopup").click(function(i){i.preventDefault();h.hide().children(".popup-overlay").removeAttr("style");removeTempPopups(h)});c(document).bind("gestureend",function(i){var j=c("div.popup-overlay:visible").next("div.popup");j.alignCenter()})});return this};c.fn.gumpsPopup.collection={store:[],stateActive:false,put:function(e){this.store.push(e[0]);if(this.store.length>0){this.showSmut();this.stateActive=true}},hasPopup:function(e){var g=false,f=this.store.length;while(--f){if(this.store[f]===e[0]){return true}}return g},remove:function(e){for(var h=0,g=this.store.length;h<g;++h){if(e[0]===this.store[h]){this.store.splice(h,1)}}if(this.store.length==0){this.hideSmut();this.stateActive=false}var f=false,j=this;c.each(c("div[id$=Popup]"),function(){if(c(this).css("display")!="none"){f=true;return false}});if(!f){this.store.length=0;this.hideSmut();this.stateActive=false}return this.store.length},length:function(){return this.store.length},showSmut:function(){if(this.stateActive){return}var e=jQuery(document.body).width();jQuery(document.body).css({overflow:"hidden"});if(c.browser.msie&&c.browser.version==7){jQuery("html").css({overflow:"hidden"})}e=e-jQuery(document.body).width();jQuery(document.body).css({marginLeft:(e+"px")})},hideSmut:function(){jQuery(document.body).css({overflow:"auto",marginLeft:"0px"});if(c.browser.msie&&c.browser.version==7){jQuery("html").css({overflow:"auto"})}}};c(function(){c("div[id$=Popup]").gumpsPopup()})})(jQuery);