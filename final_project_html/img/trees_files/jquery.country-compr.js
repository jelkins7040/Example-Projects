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
 * Filename: jquery.country.js
 * Author:   Alexander Goldobin
 */
(function(){var a={provinceField:"select.state",provinceFieldHolder:".stateField",hideProvinceFieldHolder:false,replaceProvinceField:false,firstLineText:"Select One",emptyStateListText:"N/A",styledSelects:false,styledContainerSelector:".newListSelected",gumpsCheckoutInIE6:false,showFn:function(d,c){d.show(c)},hideFn:function(d,c){d.hide(c)}};var b={};$.country={};$.country.provinces=function(d,c){if(c==null){return b[d]}else{b[d]=c}};$.fn.countryProvince=function(c){this.trigger("countryProvince",c)};$.fn.country=function(h){var f=$.extend({},a,h);var c=$(f.provinceField);var e=$(f.provinceFieldHolder);if(f.gumpsCheckoutInIE6){f.styledSelects=false}var g=function(j){j.children().each(function(){var k=$(this);k.remove()})};var d=this;var i=function(){var j=b[d.val()];if(!!j){if(f.replaceProvinceField&&!c.is("select")){var l=$("<select name='"+$(c).attr("name")+"'id='"+$(c).attr("id")+"'class='"+$(c).attr("class")+"'/>");c.replaceWith(l);c=l}c.empty();c.parent().find("label.restrictedStateMessage").hide();var m="";if(f.firstLineText!=null&&$.trim(f.firstLineText).length>0){m+="<option value=''>"+f.firstLineText+"</option>"}$.each(j,function(n,o){m+="<option value='"+o.id+"'>"+o.name+"</option>"});c.append(m);if(f.hideProvinceFieldHolder){f.showFn(e)}}else{if(f.hideProvinceFieldHolder){f.hideFn(e)}else{if(f.replaceProvinceField&&!c.is("input")){var k=$("<input value=''name='"+$(c).attr("name")+"'id='"+$(c).attr("id")+"'class='"+$(c).attr("class")+"'/>");c.replaceWith(k);c=k}c.empty();c.parent().find("label.restrictedStateMessage").hide();if(c.is("select")){if(f.emptyStateListText!=null&&$.trim(f.emptyStateListText).length>0){c.html($("<option>").attr("value","").html(f.emptyStateListText))}}}}};i();this.change(function(){i();c.change()});this.bind("countryProvince",function(k,j){i();c.val(j)});return this}})(jQuery);