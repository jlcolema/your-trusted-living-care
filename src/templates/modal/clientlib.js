function responsiveNav(){RNAV_FLAG||($(document).ready(function(){setLTCiHome();var a=$("#superMenu").clone(),b=$("#superMenu .nav-utility"),c=$("#superMenu .nav-utility-wrapper");a.attr("id","nav-mobile"),a.find(".searchfield").prependTo(a),$("html").hasClass("csstransitions")&&a.mmenu({classes:"mm-white"}),$(".nav-desktop").prepend(b),c.remove(),$("#superMenu").superfish()}),RNAV_FLAG=!0)}function setLTCiHome(){isLTCiHome()?setSelected("Long Term Care Insurance"):thisIs("cost-of-care-results.html")&&setSelected("Cost of care")}function isLTCiHome(){var a=location.pathname,b=a.substring(0,a.lastIndexOf("/"));return/long-term-care-insurance/i.test(b.substring(b.lastIndexOf("/")+1))}function setSelected(a){$("li a").each(function(b){if(a==$(this).text())return $(this).parent().addClass("Selected"),!1})}function thisIs(a){return a==location.pathname.split("/").slice(-1)}function searchfieldToggle(a,b,c){_deviceSel="desktop"==c?".nav-desktop":"#nav-mobile",a?(b.removeClass("fa-search").addClass("fa-times"),$(_deviceSel+" .searchfield").addClass("searchfield-"+c)):(b.removeClass("fa-times").addClass("fa-search"),$(_deviceSel+" .searchfield").removeClass("searchfield-"+c))}function tabDimension(){var a=-1;$(".tabs-wrapper .menu a").each(function(){a=a>$(this).height()?a:$(this).height()}),$(".tabs-wrapper .menu a").each(function(){$(this).height(a)});for(var b=$(".tabs-wrapper > ul li").length,c=".tabs-wrapper > ul li:first-child",d=" a",e="",f=136,g=0;g<b;g++){var h=$(c+e+d);h.textWidth()>f&&h.css("width",h.textWidth()),e+=" + li"}}function show(a,b,c){var d=a.attr("href");if($n=parseInt(d.replace("#","")),$current==$n)return!1;$(".res").hide(),$(d).show(),$current=parseInt(d.replace("#","")),$("#pStart").html(($current-1)*c+1),$current==$max?$("#pEnd").html(b):$("#pEnd").html($current*c)}function doPaging(){$(".disabled").removeClass("disabled"),$("#prev").show(),$("#prev").attr("href","#"+($current-1)),$("#next").show(),$("#next").attr("href","#"+($current+1)),1==$current?$("#prev").hide():$current==$max&&$("#next").hide(),$("a.paginationlink").each(function(a,b){$current==a+1&&$(this).addClass("disabled")})}function initJQ(){$('[data-toggle="tooltip"]').tooltip({html:!0}),$('[data-toggle="popover"]').popover({html:!0,viewport:{selector:"body",padding:2}})}function browserWidth(a){var b=$("body").hasClass("mobile-first"),c=a<BREAKPOINT_MD;$("body").toggleClass(MOBILE_CLASS,c),$("body").hasClass("mobile-first")!=b&&$(document).trigger("mobileViewChanged"),deviceTypeToggle(a<=BREAKPOINT_MD&&a>BREAKPOINT_SM?RWD_DEVICES[1]:a<=BREAKPOINT_SM&&a>BREAKPOINT_XS?RWD_DEVICES[2]:a<=BREAKPOINT_XS?RWD_DEVICES[3]:RWD_DEVICES[0])}function deviceTypeToggle(a){for(var b="is-",c=$("body"),d=0;d<RWD_DEVICES.length;d++)RWD_DEVICES[d]==a?c.addClass(b+a):c.removeClass(b+RWD_DEVICES[d])}function cardHeightEquilze(){var a=-1;$(".flip-front,.flip-back").each(function(){a=a>$(this).outerHeight()?a:$(this).outerHeight()}),$(".card-item-wrap,.flip-front,.flip-back,.cards-wrapper").each(function(){})}function premiumReset(){$(".ltciCalcDYK").hide(),$("#calcProcessing").css("display","none"),$("#calcPremium").html(""),$("#calcPremium2").html(""),$("#param1").html(""),$("#param2").html("")}function showError(a){$("#calcProcessing").css("display","block"),$("#calcProcessing").html('<button type="button" class="close" data-dismiss="alert">&times;</button>'+a),resizeLeftColumnFiller()}function ie7_submit(){$("#ltcCalc").submit()}function tagLink(a){Genworth_SC.CALCULATOR.trackLinkClicked(a)}function tagMeAsPageLoad(){Genworth_SC.CALCULATOR.trackAtPageLoad("LTC PC Flex"+flexVersion+flexType+" Calculator")}function reorderTabs(a){switch(Modernizr.csstransitions||(a="invalid"),a){case"to-mobile":$(".tabs-wrapper > li, .tabs-wrapper .menu > li").hasClass("responsive-tab-header-wrapper")||$(".tabs-wrapper > li, .tabs-wrapper .menu > li").toggleClass("responsive-tab-header-wrapper");for(var b=getTabnum()+1,c=1;c<b;c++){var d=$("#tab"+c),e=$("#atab"+c);e.removeAttr("href"),e.addClass("responsive-tab-header"),$(".responsive-tab-header-icon").show(),d.hide(),d.addClass("responsive-tab-body"),$(".tabs-wrapper > .menu > li:nth-child(2)").insertAfter(d)}tabordered=!0;break;case"to-desktop":$(".tabs-wrapper > li, .tabs-wrapper .menu > li").hasClass("responsive-tab-header-wrapper")&&($(".responsive-tab-header-wrapper").removeClass("responsive-tab-active"),$(".tabs-wrapper > li, .tabs-wrapper .menu > li").toggleClass("responsive-tab-header-wrapper"));for(var b=getTabnum()+1,c=1;c<b;c++){var d=$("#tab"+c),e=$("#atab"+c);e.parent().hasClass("active")&&(location.href="#tab"+c+"-tab"),e.attr("href","#tab"+c+"-tab"),e.removeClass("responsive-tab-header"),$(".responsive-tab-header-icon").hide(),d.removeClass("responsive-tab-body"),$("#atab"+c+" .responsive-tab-header-icon i").hasClass("fa-minus-circle")&&($("#atab"+c+" .responsive-tab-header-icon i").toggleClass("fa-plus-circle"),$("#atab"+c+" .responsive-tab-header-icon i").toggleClass("fa-minus-circle")),d.removeClass("show-tab").next("li").insertAfter($(".tabs-wrapper > .menu > li:nth-child("+c+")")),c>1&&d.css("display","none")}tabordered=!1;setTimeout(resLeftCol,1e3)}}function resLeftCol(){var a=$(".two.parent-columns.alpha + .ten.parent-columns .twelveColGrid.section").height();$("#left-nav").height(a)}function tabInit(){$(".tabs-wrapper").data("cqedit")||$("#menu").tabify().click(function(){setTimeout(resizeLeftColumnFiller,800)}),tabDimension()}function getTabnum(){return tabnum}function setTabnum(a){tabnum=a}function contentSwitcher(a,b,c){var d=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=!1;IE8_9||($(document).ready(function(){d<BREAKPOINT_MD&&(e=!0,a.insertAfter(c))}),$(window).resize(function(){var d=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;d<BREAKPOINT_MD&&!e?(e=!0,a.insertAfter(c)):d>BREAKPOINT_MD&&e&&(e=!1,a.prependTo(b))}))}function loadjscssfile(a,b){if(0==found(a).length){if("js"==b){var c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("src",a)}else if("css"==b){var c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",a)}void 0!==c&&document.getElementsByTagName("head")[0].appendChild(c),fRef.push({file:a,type:b})}}function found(a){return $.grep(fRef,function(b){return b.file==a})}function makeImagesResponsive(){var a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,b=$("[data-imgresponsive]");0!==b.length&&b.each(function(){var b=$(this),c=b.find("img"),d=c.attr("src");b.attr("data-src",d);var e=b.data("src"),f=b.data("imgresponsive");f=""==f?e:f,a<BREAKPOINT_MD&&!IE8_9?c.attr("src",f):c.attr("src",e)})}function getQueryVariable(a){for(var b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(e[0]==a)return e[1]}return!1}var BREAKPOINT_MD=768,BREAKPOINT_SM=600,BREAKPOINT_XS=480,RWD_DEVICES=["desktop","tablet","mini-tablet","phone"],MOBILE_CLASS="mobile-first",OMNI_CUSTOM=!0,MBOX_FLAG=!0;$(document).ready(function(){MBOX_FLAG=!1});var IE8_9=!1;window.Modernizr=function(a,b,c){function d(a){s.cssText=a}function e(a,b){return d(v.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&s[e]!==c)return"pfx"!=b||e}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return!1===d?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+x.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+y.join(d+" ")+d).split(" "),i(e,b,c))}var k,l,m="2.8.3",n={},o=!0,p=b.documentElement,q="modernizr",r=b.createElement(q),s=r.style,t=":)",u={}.toString,v=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",x=w.split(" "),y=w.toLowerCase().split(" "),z={svg:"http://www.w3.org/2000/svg"},A={},B=[],C=B.slice,D=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:q+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',q,'">',a,"</style>"].join(""),j.id=q,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=p.style.overflow,p.style.overflow="hidden",p.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),p.style.overflow=i),!!g},E=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return D("@media "+b+" { #"+q+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},F={}.hasOwnProperty;l=f(F,"undefined")||f(F.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return F.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=C.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(C.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(C.call(arguments)))};return d}),A.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:D(["@media (",v.join("touch-enabled),("),q,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},A.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(s.backgroundColor,"rgba")},A.backgroundsize=function(){return j("backgroundSize")},A.borderimage=function(){return j("borderImage")},A.borderradius=function(){return j("borderRadius")},A.boxshadow=function(){return j("boxShadow")},A.textshadow=function(){return""===b.createElement("div").style.textShadow},A.opacity=function(){return e("opacity:.55"),/^0.55$/.test(s.opacity)},A.cssanimations=function(){return j("animationName")},A.cssgradients=function(){var a="background-image:";return d((a+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+a)+v.join("linear-gradient(left top,#9f9, white);"+a)).slice(0,-a.length)),g(s.backgroundImage,"gradient")},A.csstransforms=function(){return!!j("transform")},A.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in p.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},A.csstransitions=function(){return j("transition")},A.fontface=function(){var a;return D('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},A.generatedcontent=function(){var a;return D(["#",q,"{font:0/0 a}#",q,':after{content:"',t,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},A.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(a){}return c},A.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return c},A.localstorage=function(){try{return localStorage.setItem(q,q),localStorage.removeItem(q),!0}catch(a){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(q,q),sessionStorage.removeItem(q),!0}catch(a){return!1}},A.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(u.call(b.createElementNS(z.svg,"animate")))};for(var G in A)l(A,G)&&(k=G.toLowerCase(),n[k]=A[G](),B.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,void 0!==o&&o&&(p.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),r=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;g<i;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return s.shivCSS&&!j&&!d.hasCSS&&(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return void 0===a.cloneNode||void 0===a.createDocumentFragment||void 0===a.createElement}()}catch(a){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:!1!==m.shivCSS,supportsUnknownElements:k,shivMethods:!1!==m.shivMethods,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),n._version=m,n._prefixes=v,n._domPrefixes=y,n._cssomPrefixes=x,n.mq=E,n.testProp=function(a){return h([a])},n.testAllProps=j,n.testStyles=D,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(o?" js "+B.join(" "):""),n}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l=b.createElement(a),n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;c<g;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;c<e;c++)f=z[c](f);return f}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(A[i.url]?i.noexec=!0:A[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),A[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;c(j?a.yep:a.nope,!!k),k&&c(k)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(y(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):y(j)?m(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(){function a(a){this._value=a}function b(a,b,c,d){var e,f,g=Math.pow(10,b);return f=(c(a*g)/g).toFixed(b),d&&(e=new RegExp("0{1,"+d+"}$"),f=f.replace(e,"")),f}function c(a,b,c){return b.indexOf("$")>-1?e(a,b,c):b.indexOf("%")>-1?f(a,b,c):b.indexOf(":")>-1?g(a,b):i(a._value,b,c)}function d(a,b){var c,d,e,f,g,i=b,j=["KB","MB","GB","TB","PB","EB","ZB","YB"],k=!1;if(b.indexOf(":")>-1)a._value=h(b);else if(b===p)a._value=0;else{for("."!==n[o].delimiters.decimal&&(b=b.replace(/\./g,"").replace(n[o].delimiters.decimal,".")),c=new RegExp("[^a-zA-Z]"+n[o].abbreviations.thousand+"(?:\\)|(\\"+n[o].currency.symbol+")?(?:\\))?)?$"),d=new RegExp("[^a-zA-Z]"+n[o].abbreviations.million+"(?:\\)|(\\"+n[o].currency.symbol+")?(?:\\))?)?$"),e=new RegExp("[^a-zA-Z]"+n[o].abbreviations.billion+"(?:\\)|(\\"+n[o].currency.symbol+")?(?:\\))?)?$"),f=new RegExp("[^a-zA-Z]"+n[o].abbreviations.trillion+"(?:\\)|(\\"+n[o].currency.symbol+")?(?:\\))?)?$"),g=0;g<=j.length&&!(k=b.indexOf(j[g])>-1&&Math.pow(1024,g+1));g++);a._value=(k||1)*(i.match(c)?Math.pow(10,3):1)*(i.match(d)?Math.pow(10,6):1)*(i.match(e)?Math.pow(10,9):1)*(i.match(f)?Math.pow(10,12):1)*(b.indexOf("%")>-1?.01:1)*((b.split("-").length+Math.min(b.split("(").length-1,b.split(")").length-1))%2?1:-1)*Number(b.replace(/[^0-9\.]+/g,"")),a._value=k?Math.ceil(a._value):a._value}return a._value}function e(a,b,c){var d,e,f=b.indexOf("$"),g=b.indexOf("("),h=b.indexOf("-"),j="";return b.indexOf(" $")>-1?(j=" ",b=b.replace(" $","")):b.indexOf("$ ")>-1?(j=" ",b=b.replace("$ ","")):b=b.replace("$",""),e=i(a._value,b,c),1>=f?e.indexOf("(")>-1||e.indexOf("-")>-1?(e=e.split(""),d=1,(g>f||h>f)&&(d=0),e.splice(d,0,n[o].currency.symbol+j),e=e.join("")):e=n[o].currency.symbol+j+e:e.indexOf(")")>-1?(e=e.split(""),e.splice(-1,0,j+n[o].currency.symbol),e=e.join("")):e=e+j+n[o].currency.symbol,e}function f(a,b,c){var d,e="",f=100*a._value;return b.indexOf(" %")>-1?(e=" ",b=b.replace(" %","")):b=b.replace("%",""),d=i(f,b,c),d.indexOf(")")>-1?(d=d.split(""),d.splice(-1,0,e+"%"),d=d.join("")):d=d+e+"%",d}function g(a){var b=Math.floor(a._value/60/60),c=Math.floor((a._value-60*b*60)/60),d=Math.round(a._value-60*b*60-60*c);return b+":"+(10>c?"0"+c:c)+":"+(10>d?"0"+d:d)}function h(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}function i(a,c,d){var e,f,g,h,i,j,k=!1,l=!1,m=!1,q="",r=!1,s=!1,t=!1,u=!1,v=!1,w="",x="",y=Math.abs(a),z=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],A="",B=!1;if(0===a&&null!==p)return p;if(c.indexOf("(")>-1?(k=!0,c=c.slice(1,-1)):c.indexOf("+")>-1&&(l=!0,c=c.replace(/\+/g,"")),c.indexOf("a")>-1&&(r=c.indexOf("aK")>=0,s=c.indexOf("aM")>=0,t=c.indexOf("aB")>=0,u=c.indexOf("aT")>=0,v=r||s||t||u,c.indexOf(" a")>-1?(q=" ",c=c.replace(" a","")):c=c.replace("a",""),y>=Math.pow(10,12)&&!v||u?(q+=n[o].abbreviations.trillion,a/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)&&!v||t?(q+=n[o].abbreviations.billion,a/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)&&!v||s?(q+=n[o].abbreviations.million,a/=Math.pow(10,6)):(y<Math.pow(10,6)&&y>=Math.pow(10,3)&&!v||r)&&(q+=n[o].abbreviations.thousand,a/=Math.pow(10,3))),c.indexOf("b")>-1)for(c.indexOf(" b")>-1?(w=" ",c=c.replace(" b","")):c=c.replace("b",""),g=0;g<=z.length;g++)if(e=Math.pow(1024,g),f=Math.pow(1024,g+1),a>=e&&f>a){w+=z[g],e>0&&(a/=e);break}return c.indexOf("o")>-1&&(c.indexOf(" o")>-1?(x=" ",c=c.replace(" o","")):c=c.replace("o",""),x+=n[o].ordinal(a)),c.indexOf("[.]")>-1&&(m=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],j=c.indexOf(","),i?(i.indexOf("[")>-1?(i=i.replace("]",""),i=i.split("["),A=b(a,i[0].length+i[1].length,d,i[1].length)):A=b(a,i.length,d),h=A.split(".")[0],A=A.split(".")[1].length?n[o].delimiters.decimal+A.split(".")[1]:"",m&&0===Number(A.slice(1))&&(A="")):h=b(a,null,d),h.indexOf("-")>-1&&(h=h.slice(1),B=!0),j>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+n[o].delimiters.thousands)),0===c.indexOf(".")&&(h=""),(k&&B?"(":"")+(!k&&B?"-":"")+(!B&&l?"+":"")+h+A+(x||"")+(q||"")+(w||"")+(k&&B?")":"")}function j(a,b){n[a]=b}function k(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)}function l(){return Array.prototype.slice.call(arguments).reduce(function(a,b){var c=k(a),d=k(b);return c>d?c:d},-1/0)}var m,n={},o="en",p=null,q="0,0",r="undefined"!=typeof module&&module.exports;m=function(b){return m.isNumeral(b)?b=b.value():0===b||void 0===b?b=0:Number(b)||(b=m.fn.unformat(b)),new a(Number(b))},m.version="1.5.3",m.isNumeral=function(b){return b instanceof a},m.language=function(a,b){if(!a)return o;if(a&&!b){if(!n[a])throw new Error("Unknown language : "+a);o=a}return(b||!n[a])&&j(a,b),m},m.languageData=function(a){if(!a)return n[o];if(!n[a])throw new Error("Unknown language : "+a);return n[a]},m.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1==~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),m.zeroFormat=function(a){p="string"==typeof a?a:null},m.defaultFormat=function(a){q="string"==typeof a?a:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";if(null===this||void 0===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d}),m.fn=a.prototype={clone:function(){return m(this)},format:function(a,b){return c(this,a||q,void 0!==b?b:Math.round)},unformat:function(a){return"[object Number]"===Object.prototype.toString.call(a)?a:d(this,a||q)},value:function(){return this._value},valueOf:function(){return this._value},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b){return a+c*b}var c=l.call(null,this._value,a);return this._value=[this._value,a].reduce(b,0)/c,this},subtract:function(a){function b(a,b){return a-c*b}var c=l.call(null,this._value,a);return this._value=[a].reduce(b,this._value*c)/c,this},multiply:function(a){function b(a,b){var c=l(a,b);return a*c*b*c/(c*c)}return this._value=[this._value,a].reduce(b,1),this},divide:function(a){function b(a,b){var c=l(a,b);return a*c/(b*c)}return this._value=[this._value,a].reduce(b),this},difference:function(a){return Math.abs(m(this._value).subtract(a).value())}},r&&(module.exports=m),"undefined"==typeof ender&&(this.numeral=m),"function"==typeof define&&define.amd&&define([],function(){return m})}.call(this),function(a){function b(){g=!0,h.$wndw=a(window),h.$html=a("html"),h.$body=a("body"),a.each([d,e,f],function(a,b){b.add=function(a){a=a.split(" ");for(var c in a)b[a[c]]=b.mm(a[c])}}),d.mm=function(a){return"mm-"+a},d.add("wrapper menu inline panel nopanel list nolist subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"),d.umm=function(a){return"mm-"==a.slice(0,3)&&(a=a.slice(3)),a},e.mm=function(a){return"mm-"+a},e.add("parent"),f.mm=function(a){return a+".mm"},f.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"),a[c]._c=d,a[c]._d=e,a[c]._e=f,a[c].glbl=h}var c="mmenu";if(!a[c]){var d={},e={},f={},g=!1,h={$wndw:null,$html:null,$body:null};a[c]=function(b,d,e){this.$menu=b,this.opts=d,this.conf=e,this.vars={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors(),this._initEvents();var f=this.$menu.children(this.conf.panelNodetype);for(var g in a[c].addons)a[c].addons[g]._add.call(this),a[c].addons[g]._add=function(){},a[c].addons[g]._setup.call(this);return this._init(f),"function"==typeof this.___debug&&this.___debug(),this},a[c].version="4.7.5",a[c].addons={},a[c].uniqueId=0,a[c].defaults={classes:"",slidingSubmenus:!0,onClick:{setSelected:!0}},a[c].configuration={panelNodetype:"ul, ol, div",transitionDuration:400,openingInterval:25,classNames:{panel:"Panel",selected:"Selected",label:"Label",spacer:"Spacer"}},a[c].prototype={_init:function(b){b=b.not("."+d.nopanel),b=this._initPanels(b);for(var e in a[c].addons)a[c].addons[e]._init.call(this,b);this._update()},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){a(this).attr("id",d.mm(a(this).attr("id")))})),this.$menu.contents().each(function(){3==a(this)[0].nodeType&&a(this).remove()}),this.$menu.parent().addClass(d.wrapper);var b=[d.menu];b.push(d.mm(this.opts.slidingSubmenus?"horizontal":"vertical")),this.opts.classes&&b.push(this.opts.classes),this.$menu.addClass(b.join(" "))},_initPanels:function(b){var c=this;this.__findAddBack(b,"ul, ol").not("."+d.nolist).addClass(d.list);var g=this.__findAddBack(b,"."+d.list).find("> li");this.__refactorClass(g,this.conf.classNames.selected,"selected"),this.__refactorClass(g,this.conf.classNames.label,"label"),this.__refactorClass(g,this.conf.classNames.spacer,"spacer"),g.off(f.setSelected).on(f.setSelected,function(b,c){b.stopPropagation(),g.removeClass(d.selected),"boolean"!=typeof c&&(c=!0),c&&a(this).addClass(d.selected)}),this.__refactorClass(this.__findAddBack(b,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel"),b.add(this.__findAddBack(b,"."+d.list).children().children().filter(this.conf.panelNodetype).not("."+d.nopanel)).addClass(d.panel);var h=this.__findAddBack(b,"."+d.panel),i=a("."+d.panel,this.$menu);if(h.each(function(){var b=a(this),d=b.attr("id")||c.__getUniqueId();b.attr("id",d)}),h.each(function(){var b=a(this),f=b.is("ul, ol")?b:b.find("ul ,ol").first(),g=b.parent(),h=g.children("a, span"),i=g.closest("."+d.panel);if(g.parent().is("."+d.list)&&!b.data(e.parent)){b.data(e.parent,g);var j=a('<a class="'+d.subopen+'" href="#'+b.attr("id")+'" />').insertBefore(h);h.is("a")||j.addClass(d.fullsubopen),c.opts.slidingSubmenus&&f.prepend('<li class="'+d.subtitle+'"><a class="'+d.subclose+'" href="#'+i.attr("id")+'">'+h.text()+"</a></li>")}}),this.opts.slidingSubmenus){var j=this.__findAddBack(b,"."+d.list).find("> li."+d.selected);j.parents("li").removeClass(d.selected).end().add(j.parents("li")).each(function(){var b=a(this),c=b.find("> ."+d.panel);c.length&&(b.parents("."+d.panel).addClass(d.subopened),c.addClass(d.opened))}).closest("."+d.panel).addClass(d.opened).parents("."+d.panel).addClass(d.subopened)}else{var j=a("li."+d.selected,i);j.parents("li").removeClass(d.selected).end().add(j.parents("li")).addClass(d.opened)}var k=i.filter("."+d.opened);return k.length||(k=h.first()),k.addClass(d.opened).last().addClass(d.current),this.opts.slidingSubmenus&&h.not(k.last()).addClass(d.hidden).end().appendTo(this.$menu),h},_initAnchors:function(){var b=this;h.$body.on(f.click,"a",function(e){var g=a(this),i=!1,j=b.$menu.find(g).length;for(var k in a[c].addons)if(a[c].addons[k]._clickAnchor&&(i=a[c].addons[k]._clickAnchor.call(b,g,j)))break;if(!i&&j){var l=g.attr("href")||"";if("#"==l.slice(0,1))try{a(l,b.$menu).is("."+d.panel)&&(i=!0,a(l).trigger(b.opts.slidingSubmenus?f.open:f.toggle))}catch(a){}}if(i&&e.preventDefault(),!i&&j&&g.is("."+d.list+" > li > a")&&!g.is('[rel="external"]')&&!g.is('[target="_blank"]')){b.__valueOrFn(b.opts.onClick.setSelected,g)&&g.parent().trigger(f.setSelected);var m=b.__valueOrFn(b.opts.onClick.preventDefault,g,"#"==l.slice(0,1));m&&e.preventDefault(),b.__valueOrFn(b.opts.onClick.blockUI,g,!m)&&h.$html.addClass(d.blocking),b.__valueOrFn(b.opts.onClick.close,g,m)&&b.$menu.trigger(f.close)}})},_initEvents:function(){var b=this;this.$menu.on(f.toggle+" "+f.open+" "+f.close,"."+d.panel,function(a){a.stopPropagation()}),this.opts.slidingSubmenus?this.$menu.on(f.open,"."+d.panel,function(){return b._openSubmenuHorizontal(a(this))}):this.$menu.on(f.toggle,"."+d.panel,function(){var b=a(this);b.trigger(b.parent().hasClass(d.opened)?f.close:f.open)}).on(f.open,"."+d.panel,function(){a(this).parent().addClass(d.opened)}).on(f.close,"."+d.panel,function(){a(this).parent().removeClass(d.opened)})},_openSubmenuHorizontal:function(b){if(b.hasClass(d.current))return!1;var c=a("."+d.panel,this.$menu),e=c.filter("."+d.current);return c.removeClass(d.highest).removeClass(d.current).not(b).not(e).addClass(d.hidden),b.hasClass(d.opened)?e.addClass(d.highest).removeClass(d.opened).removeClass(d.subopened):(b.addClass(d.highest),e.addClass(d.subopened)),b.removeClass(d.hidden).addClass(d.current),setTimeout(function(){b.removeClass(d.subopened).addClass(d.opened)},this.conf.openingInterval),"open"},_update:function(a){if(this.updates||(this.updates=[]),"function"==typeof a)this.updates.push(a);else for(var b=0,c=this.updates.length;c>b;b++)this.updates[b].call(this,a)},__valueOrFn:function(a,b,c){
return"function"==typeof a?a.call(b[0]):void 0===a&&void 0!==c?c:a},__refactorClass:function(a,b,c){return a.filter("."+b).removeClass(b).addClass(d[c])},__findAddBack:function(a,b){return a.find(b).add(a.filter(b))},__transitionend:function(a,b,c){var d=!1,e=function(){d||b.call(a[0]),d=!0};a.one(f.transitionend,e),a.one(f.webkitTransitionEnd,e),setTimeout(e,1.1*c)},__getUniqueId:function(){return d.mm(a[c].uniqueId++)}},a.fn[c]=function(d,e){return g||b(),d=a.extend(!0,{},a[c].defaults,d),e=a.extend(!0,{},a[c].configuration,e),this.each(function(){var b=a(this);b.data(c)||b.data(c,new a[c](b,d,e))})},a[c].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints}}}(jQuery),function(a){var b="mmenu",c="offCanvas";a[b].addons[c]={_init:function(){},_setup:function(){if(this.opts[c]){var b=this,e=this.opts[c],h=this.conf[c];"string"!=typeof h.pageSelector&&(h.pageSelector="> "+h.pageNodetype),g.$allMenus=(g.$allMenus||a()).add(this.$menu),this.vars.opened=!1;var i=[d.offcanvas];"left"!=e.position&&i.push(d.mm(e.position)),"back"!=e.zposition&&i.push(d.mm(e.zposition)),this.$menu.addClass(i.join(" ")).parent().removeClass(d.wrapper),this.setPage(g.$page),this[c+"_initBlocker"](),this[c+"_initWindow"](),this.$menu.on(f.open+" "+f.opening+" "+f.opened+" "+f.close+" "+f.closing+" "+f.closed+" "+f.setPage,function(a){a.stopPropagation()}).on(f.open+" "+f.close+" "+f.setPage,function(a){b[a.type]()}),this.$menu[h.menuInjectMethod+"To"](h.menuWrapperSelector)}},_add:function(){d=a[b]._c,e=a[b]._d,f=a[b]._e,d.add("offcanvas slideout modal background opening blocker page"),e.add("style"),f.add("opening opened closing closed setPage"),g=a[b].glbl},_clickAnchor:function(a){if(!this.opts[c])return!1;var b=this.$menu.attr("id");if(b&&b.length&&(this.conf.clone&&(b=d.umm(b)),a.is('[href="#'+b+'"]')))return this.open(),!0;if(g.$page){var b=g.$page.attr("id");return!!(b&&b.length&&a.is('[href="#'+b+'"]'))&&(this.close(),!0)}}},a[b].defaults[c]={position:"left",zposition:"back",modal:!1,moveBackground:!0},a[b].configuration[c]={pageNodetype:"div",pageSelector:null,menuWrapperSelector:"body",menuInjectMethod:"prepend"},a[b].prototype.open=function(){if(this.vars.opened)return!1;var a=this;return this._openSetup(),setTimeout(function(){a._openFinish()},this.conf.openingInterval),"open"},a[b].prototype._openSetup=function(){var a=this;g.$allMenus.not(this.$menu).trigger(f.close),g.$page.data(e.style,g.$page.attr("style")||""),g.$wndw.trigger(f.resize,[!0]);var b=[d.opened];this.opts[c].modal&&b.push(d.modal),this.opts[c].moveBackground&&b.push(d.background),"left"!=this.opts[c].position&&b.push(d.mm(this.opts[c].position)),"back"!=this.opts[c].zposition&&b.push(d.mm(this.opts[c].zposition)),this.opts.classes&&b.push(this.opts.classes),g.$html.addClass(b.join(" ")),setTimeout(function(){a.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(d.current+" "+d.opened)},a[b].prototype._openFinish=function(){var a=this;this.__transitionend(g.$page,function(){a.$menu.trigger(f.opened)},this.conf.transitionDuration),g.$html.addClass(d.opening),this.$menu.trigger(f.opening)},a[b].prototype.close=function(){if(!this.vars.opened)return!1;var a=this;return this.__transitionend(g.$page,function(){a.$menu.removeClass(d.current).removeClass(d.opened),g.$html.removeClass(d.opened).removeClass(d.modal).removeClass(d.background).removeClass(d.mm(a.opts[c].position)).removeClass(d.mm(a.opts[c].zposition)),a.opts.classes&&g.$html.removeClass(a.opts.classes),g.$page.attr("style",g.$page.data(e.style)),a.vars.opened=!1,a.$menu.trigger(f.closed)},this.conf.transitionDuration),g.$html.removeClass(d.opening),this.$menu.trigger(f.closing),"close"},a[b].prototype.setPage=function(b){b||(b=a(this.conf[c].pageSelector,g.$body),b.length>1&&(b=b.wrapAll("<"+this.conf[c].pageNodetype+" />").parent())),b.addClass(d.page+" "+d.slideout),g.$page=b},a[b].prototype[c+"_initWindow"]=function(){g.$wndw.on(f.keydown,function(a){return g.$html.hasClass(d.opened)&&9==a.keyCode?(a.preventDefault(),!1):void 0});var e=0;g.$wndw.on(f.resize,function(a,b){if(b||g.$html.hasClass(d.opened)){var c=g.$wndw.height();(b||c!=e)&&(e=c,g.$page.css("minHeight",c))}}),a[b].prototype[c+"_initWindow"]=function(){}},a[b].prototype[c+"_initBlocker"]=function(){var e=a('<div id="'+d.blocker+'" class="'+d.slideout+'" />').appendTo(g.$body);e.on(f.touchstart,function(a){a.preventDefault(),a.stopPropagation(),e.trigger(f.mousedown)}).on(f.mousedown,function(a){a.preventDefault(),g.$html.hasClass(d.modal)||g.$allMenus.trigger(f.close)}),a[b].prototype[c+"_initBlocker"]=function(){}};var d,e,f,g}(jQuery),function(a){var b="mmenu",c="buttonbars";a[b].addons[c]={_init:function(b){this.opts[c],this.conf[c],this.__refactorClass(a("div",b),this.conf.classNames[c].buttonbar,"buttonbar"),a("."+d.buttonbar,b).each(function(){var b=a(this),c=b.children().not("input"),e=b.children().filter("input");b.addClass(d.buttonbar+"-"+c.length),e.each(function(){var b=a(this),d=c.filter('label[for="'+b.attr("id")+'"]');d.length&&b.insertBefore(d)})})},_setup:function(){},_add:function(){d=a[b]._c,e=a[b]._d,f=a[b]._e,d.add("buttonbar"),g=a[b].glbl}},a[b].defaults[c]={},a[b].configuration.classNames[c]={buttonbar:"Buttonbar"};var d,e,f,g}(jQuery),function(a){function b(a,b,c){return b>a&&(a=b),a>c&&(a=c),a}var c="mmenu",d="dragOpen";a[c].addons[d]={_init:function(){},_setup:function(){if(this.opts.offCanvas){var f=this,i=this.opts[d],j=this.conf[d];if("boolean"==typeof i&&(i={open:i}),"object"!=typeof i&&(i={}),i=a.extend(!0,{},a[c].defaults[d],i),i.open){if(Hammer.VERSION<2)return;var k,l,m,n,o={},p=0,q=!1,r=!1,s=0,t=0;switch(this.opts.offCanvas.position){case"left":case"right":o.events="panleft panright",o.typeLower="x",o.typeUpper="X",r="width";break;case"top":case"bottom":o.events="panup pandown",o.typeLower="y",o.typeUpper="Y",r="height"}switch(this.opts.offCanvas.position){case"left":case"top":o.negative=!1;break;case"right":case"bottom":o.negative=!0}switch(this.opts.offCanvas.position){case"left":o.open_dir="right",o.close_dir="left";break;case"right":o.open_dir="left",o.close_dir="right";break;case"top":o.open_dir="down",o.close_dir="up";break;case"bottom":o.open_dir="up",o.close_dir="down"}var u=this.__valueOrFn(i.pageNode,this.$menu,h.$page);"string"==typeof u&&(u=a(u));var v=h.$page;switch(this.opts.offCanvas.zposition){case"front":v=this.$menu;break;case"next":v=v.add(this.$menu)}new Hammer(u[0],i.vendors.hammer).on("panstart",function(a){switch(n=a.center[o.typeLower],f.opts.offCanvas.position){case"right":case"bottom":n>=h.$wndw[r]()-i.maxStartPos&&(p=1);break;default:n<=i.maxStartPos&&(p=1)}q=o.open_dir}).on(o.events+" panend",function(a){p>0&&a.preventDefault()}).on(o.events,function(a){if(k=a["delta"+o.typeUpper],o.negative&&(k=-k),k!=s&&(q=k>=s?o.open_dir:o.close_dir),(s=k)>i.threshold&&1==p){if(h.$html.hasClass(e.opened))return;p=2,f._openSetup(),f.$menu.trigger(g.opening),h.$html.addClass(e.dragging),t=b(h.$wndw[r]()*j[r].perc,j[r].min,j[r].max)}2==p&&(l=b(s,10,t)-("front"==f.opts.offCanvas.zposition?t:0),o.negative&&(l=-l),m="translate"+o.typeUpper+"("+l+"px )",v.css({"-webkit-transform":"-webkit-"+m,transform:m}))}).on("panend",function(){2==p&&(h.$html.removeClass(e.dragging),v.css("transform",""),f[q==o.open_dir?"_openFinish":"close"]()),p=0})}}},_add:function(){return"function"!=typeof Hammer?(a[c].addons[d]._init=function(){},void(a[c].addons[d]._setup=function(){})):(e=a[c]._c,f=a[c]._d,g=a[c]._e,e.add("dragging"),void(h=a[c].glbl))}},a[c].defaults[d]={open:!1,maxStartPos:100,threshold:50,vendors:{hammer:{}}},a[c].configuration[d]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}};var e,f,g,h}(jQuery),function(a,b){"use strict";var c=function(){var c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},d=function(){var c=/iPhone|iPad|iPod/i.test(navigator.userAgent);return c/*&&a(b).load(function(){/*a("body").children().on("click",a.noop)}),c*/}(),e=function(){var a=document.documentElement.style;return"behavior"in a&&"fill"in a&&/iemobile/i.test(navigator.userAgent)}(),f=function(){return!!b.PointerEvent}(),g=function(a,b){var d=c.menuClass;b.cssArrows&&(d+=" "+c.menuArrowClass),a.toggleClass(d)},h=function(b,d){return b.find("li."+d.pathClass).slice(0,d.pathLevels).addClass(d.hoverClass+" "+c.bcClass).filter(function(){return a(this).children(d.popUpSelector).hide().show().length}).removeClass(d.pathClass)},i=function(a){a.children("a").toggleClass(c.anchorClass)},j=function(a){var b=a.css("ms-touch-action"),c=a.css("touch-action");c=c||b,c="pan-y"===c?"auto":"pan-y",a.css({"ms-touch-action":c,"touch-action":c})},k=function(b,c){var g="li:has("+c.popUpSelector+")";a.fn.hoverIntent&&!c.disableHI?b.hoverIntent(m,n,g):b.on("mouseenter.superfish",g,m).on("mouseleave.superfish",g,n);var h="MSPointerDown.superfish";f&&(h="pointerdown.superfish"),d||(h+=" touchend.superfish"),e&&(h+=" mousedown.superfish"),b.on("focusin.superfish","li",m).on("focusout.superfish","li",n).on(h,"a",c,l)},l=function(b){var c=a(this),d=c.siblings(b.data.popUpSelector);d.length>0&&d.is(":hidden")&&(c.one("click.superfish",!1),"MSPointerDown"===b.type||"pointerdown"===b.type?c.trigger("focus"):a.proxy(m,c.parent("li"))())},m=function(){var b=a(this),c=q(b);clearTimeout(c.sfTimer),b.siblings().superfish("hide").end().superfish("show")},n=function(){var b=a(this),c=q(b);d?a.proxy(o,b,c)():(clearTimeout(c.sfTimer),c.sfTimer=setTimeout(a.proxy(o,b,c),c.delay))},o=function(b){b.retainPath=a.inArray(this[0],b.$path)>-1,this.superfish("hide"),this.parents("."+b.hoverClass).length||(b.onIdle.call(p(this)),b.$path.length&&a.proxy(m,b.$path)())},p=function(a){return a.closest("."+c.menuClass)},q=function(a){return p(a).data("sf-options")};return{hide:function(b){if(this.length){var c=this,d=q(c);if(!d)return this;var e=!0===d.retainPath?d.$path:"",f=c.find("li."+d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector),g=d.speedOut;b&&(f.show(),g=0),d.retainPath=!1,d.onBeforeHide.call(f),f.stop(!0,!0).animate(d.animationOut,g,function(){var b=a(this);d.onHide.call(b)})}return this},show:function(){var b=q(this);if(!b)return this;var c=this.addClass(b.hoverClass),d=c.children(b.popUpSelector);b.onBeforeShow.call(d),d.stop(!0,!0).animate(b.animation,b.speed,function(){b.onShow.call(d)});var e=a(window).width(),f=this.children("ul").first(),g=f.offset().left+f.width();if(g>e){f.parent().parent().hasClass("sf-menu")?f.css("left","-"+(g-e)+"px"):f.css("left","-"+(f.width()+1)+"px")}return this},destroy:function(){return this.each(function(){var b,d=a(this),e=d.data("sf-options");if(!e)return!1;b=d.find(e.popUpSelector).parent("li"),clearTimeout(e.sfTimer),g(d,e),i(b),j(d),d.off(".superfish").off(".hoverIntent"),b.children(e.popUpSelector).attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")}),e.$path.removeClass(e.hoverClass+" "+c.bcClass).addClass(e.pathClass),d.find("."+e.hoverClass).removeClass(e.hoverClass),e.onDestroy.call(d),d.removeData("sf-options")})},init:function(b){return this.each(function(){var d=a(this);if(d.data("sf-options"))return!1;var e=a.extend({},a.fn.superfish.defaults,b),f=d.find(e.popUpSelector).parent("li");e.$path=h(d,e),d.data("sf-options",e),g(d,e),i(f),j(d),k(d,e),f.not("."+c.bcClass).superfish("hide",!0),e.onInit.call(this)})}}}();a.fn.superfish=function(b,d){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?a.error("Method "+b+" does not exist on jQuery.fn.superfish"):c.init.apply(this,arguments)},a.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:a.noop,onBeforeShow:a.noop,onShow:a.noop,onBeforeHide:a.noop,onHide:a.noop,onIdle:a.noop,onDestroy:a.noop}}(jQuery,window);var RNAV_FLAG=!1,OMNI_FLAG=!1;$(document).ready(function(){var a=$(".nav-desktop .search-toggle .fa");a.click(function(){searchfieldToggle($(this).hasClass("fa-search"),$(this),"desktop")}),$(document).on("click",function(b){var c=$(b.target);c.closest(".searchfield-desktop").length||c.closest(".search-toggle").length||a.hasClass("fa-search")||searchfieldToggle(!1,a,"desktop")})}),window.onload=function(){var a=$("#nav-mobile .search-toggle .fa");a.click(function(){searchfieldToggle($(this).hasClass("fa-search"),$(this),"mobile")}),$(document).on("click",function(b){var c=$(b.target);c.closest(".searchfield-mobile").length||c.closest(".search-toggle").length||a.hasClass("fa-search")||searchfieldToggle(!1,a,"mobile")})};var ltcPattern=new RegExp("/long-term-care-insurance/"),excludePattern=new RegExp("/claims/long-term-care-insurance/"),excludePattern2=new RegExp("/sales-center/long-term-care-insurance/");if(ltcPattern.test(window.location.pathname)&&!excludePattern.test(window.location.pathname)&&!excludePattern2.test(window.location.pathname)){var removedState=["MA","NH"],CookieUtils={create:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"},read:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null},erase:function(a){CookieUtils.create(a,"",-1)}};$(document).ready(function(){if($(".parbase.clientcontext").empty(),CQ.WCM&&(CQ.WCM.isEditMode(!0)||CQ.WCM.isDesignMode(!0))&&(StateSelector.log("Disabling automatic redirect"),StateSelector.canRedirect=!1),"ion"==sessionStorage.getItem("FeedSource")&&$("#leadForm").length){({itemsToCreate:["FeedSource","MarketingSource","MarketingSourceDetail"],createItems:function(){for(var a="",b=0;b<this.itemsToCreate.length;b++){var c=this.itemsToCreate[b];a+='<input type="hidden" value="'+sessionStorage.getItem(c)+'" name="'+c+'">'}return a},populateFields:function(){var a=this.createItems(),b=$(".lead-form-stacked").length?".leadform-dropdown #cellCode, .lead-form-stacked #cellCode":"#cellCode";$(a).insertAfter(b),$('[name="packCode"]').val(sessionStorage.getItem("package_code")),$('[name="cellCode"]').val(sessionStorage.getItem("cell_code")),console.log("Pack Code: "+sessionStorage.getItem("package_code")),console.log("Cell Code: "+sessionStorage.getItem("cell_code")),console.log("Feed Source: "+sessionStorage.getItem("FeedSource")),console.log("Marketing Detail: "+sessionStorage.getItem("MarketingSource")),console.log("Marketing Source: "+sessionStorage.getItem("MarketingSourceDetail"))}}).populateFields()}if(StateSelector.canRedirect){StateSelector.log("Automatic redirect enabled");for(var a=StateSelector.store.getProperty(StateSelector.CURRENT_STATE_PROP),b=0;b<removedState.length;b++)if(a==removedState[b]){StateSelector.store.removeProperty(StateSelector.CURRENT_STATE_PROP),a="";break}a&&""!=a?a!=StateSelector.currentState?(StateSelector.log("Stored state "+a+" does not equal current state "+StateSelector.currentState),StateSelector.redirect(a)):StateSelector.log("On current state"):($("#stateBox").modal({keyboard:!1,backdrop:"static"}),$("#ltcStateSelectClose").remove(),$("#homePageLink").show())}var c=function(a){$(".state-specific").hide(),$(".state-specific-legal").hide(),$(".state-specific-disclaimer").hide(),$(".display-"+a).length>1?($(".display-"+a).show(),$("#stateBox .default").hide()):$("#stateBox .default").show()},d=StateSelector.getState(StateSelector.currentState);d?($("#state_name").html(d.text+'<i class="fa fa-chevron-down"></i>'),$("#title_state").css("backgroundPosition","0 -"+StateSelector.getSpriteOffset(d.value)+"px")):$("#title_state").css({"background-image":"none"}),$("#availableStates").change(function(){c($("#availableStates").val()),"undefined"!=typeof s&&(s.linkTrackVars="eVar7",s.linkTrackEvents="None",s.eVar7=$("#availableStates").val(),s.tl(this,"o",s.getPageName()))}),$(".state-icon").click(function(){$("#availableStates").val(StateSelector.currentState),c(StateSelector.currentState)})})}!function(a){function b(a){a.startMove=a.startMove?a.startMove:{startX:null,startY:null,timestamp:null};var b,c,d=(new Date).getTime();return a.touches&&(c=[{lastX:a.deltaX,lastY:a.deltaY,moved:null,startX:a.screenX-a.startMove.screenX,startY:a.screenY-a.startMove.screenY}],b={vector:a.vector||null,orientation:window.orientation||null,lastX:c[0].lastX>0?1:c[0].lastX<0?-1:0,lastY:c[0].lastY>0?1:c[0].lastY<0?-1:0,startX:c[0].startX>0?1:c[0].startX<0?-1:0,startY:c[0].startY>0?1:c[0].startY<0?-1:0},c[0].moved=Math.sqrt(Math.pow(Math.abs(c[0].startX),2)+Math.pow(Math.abs(c[0].startY),2))),{type:a.type||null,originalEvent:a.event||null,delta:c||null,direction:b||{orientation:window.orientation||null,vector:a.vector||null},duration:a.duration?a.duration:a.startMove.timestamp?d-a.timestamp:null,rotation:a.rotation||null,scale:a.scale||null,description:a.description||[a.type,":",a.touches,":",0!=c[0].lastX?c[0].lastX>0?"right":"left":"steady",":",0!=c[0].lastY?c[0].lastY>0?"down":"up":"steady"].join("")}}function c(b){var c=["landscape:clockwise:","portrait:default:","landscape:counterclockwise:","portrait:upsidedown:"];a(window).triggerHandler("orientationchange",{direction:{orientation:window.orientation},description:["orientationchange:",c[window.orientation/90+1],window.orientation].join("")})}function d(c){var d,e,f,g=jQuery(window),h=g.data("ojQueryGestures"),i=a.jGestures.defaults.thresholdShake,j=h.oDeviceMotionLastDevicePosition||{accelerationIncludingGravity:{x:0,y:0,z:0},shake:{eventCount:0,intervalsPassed:0,intervalsFreeze:0},shakeleftright:{eventCount:0,intervalsPassed:0,intervalsFreeze:0},shakefrontback:{eventCount:0,intervalsPassed:0,intervalsFreeze:0},shakeupdown:{eventCount:0,intervalsPassed:0,intervalsFreeze:0}},k={accelerationIncludingGravity:{x:c.accelerationIncludingGravity.x,y:c.accelerationIncludingGravity.y,z:c.accelerationIncludingGravity.z},shake:{eventCount:j.shake.eventCount,intervalsPassed:j.shake.intervalsPassed,intervalsFreeze:j.shake.intervalsFreeze},shakeleftright:{eventCount:j.shakeleftright.eventCount,intervalsPassed:j.shakeleftright.intervalsPassed,intervalsFreeze:j.shakeleftright.intervalsFreeze},shakefrontback:{eventCount:j.shakefrontback.eventCount,intervalsPassed:j.shakefrontback.intervalsPassed,intervalsFreeze:j.shakefrontback.intervalsFreeze},shakeupdown:{eventCount:j.shakeupdown.eventCount,intervalsPassed:j.shakeupdown.intervalsPassed,intervalsFreeze:j.shakeupdown.intervalsFreeze}};for(d in h){switch(d){case"shake":case"shakeleftright":case"shakefrontback":case"shakeupdown":if(e=[],[],e.push(d),++k[d].intervalsFreeze>i.freezeShakes&&k[d].intervalsFreeze<2*i.freezeShakes)break;k[d].intervalsFreeze=0,k[d].intervalsPassed++,"shake"!==d&&"shakeleftright"!==d||!(k.accelerationIncludingGravity.x>i.leftright.sensitivity||k.accelerationIncludingGravity.x<-1*i.leftright.sensitivity)||(e.push("leftright"),e.push("x-axis")),"shake"!==d&&"shakefrontback"!==d||!(k.accelerationIncludingGravity.y>i.frontback.sensitivity||k.accelerationIncludingGravity.y<-1*i.frontback.sensitivity)||(e.push("frontback"),e.push("y-axis")),"shake"!==d&&"shakeupdown"!==d||!(k.accelerationIncludingGravity.z+9.81>i.updown.sensitivity||k.accelerationIncludingGravity.z+9.81<-1*i.updown.sensitivity)||(e.push("updown"),e.push("z-axis")),e.length>1&&(++k[d].eventCount==i.requiredShakes&&k[d].intervalsPassed<i.freezeShakes?(g.triggerHandler(d,b({type:d,description:e.join(":"),event:c,duration:5*k[d].intervalsPassed})),k[d].eventCount=0,k[d].intervalsPassed=0,k[d].intervalsFreeze=i.freezeShakes+1):k[d].eventCount==i.requiredShakes&&k[d].intervalsPassed>i.freezeShakes&&(k[d].eventCount=0,k[d].intervalsPassed=0))}f={},f.oDeviceMotionLastDevicePosition=k,g.data("ojQueryGestures",a.extend(!0,h,f))}}function e(b){var c=jQuery(b.currentTarget);c.triggerHandler(a.jGestures.events.touchstart,b),a.hasGestures?(b.currentTarget.addEventListener("touchmove",f,!1),b.currentTarget.addEventListener("touchend",g,!1)):(c.bind("mousemove",f),c.bind("mouseup",g));var d=c.data("ojQueryGestures"),e=b.touches?b.touches[0]:b,h={};h.oLastSwipemove={screenX:e.screenX,screenY:e.screenY,timestamp:(new Date).getTime()},h.oStartTouch={screenX:e.screenX,screenY:e.screenY,timestamp:(new Date).getTime()},c.data("ojQueryGestures",a.extend(!0,d,h))}function f(c){var d,e=jQuery(c.currentTarget),f=e.data("ojQueryGestures"),g=!!c.touches,h=g?c.changedTouches[0].screenX:c.screenX,i=g?c.changedTouches[0].screenY:c.screenY,j=f.oLastSwipemove,k=h-j.screenX,l=i-j.screenY;f.oLastSwipemove&&(d=b({type:"swipemove",touches:g?c.touches.length:"1",screenY:i,screenX:h,deltaY:l,deltaX:k,startMove:j,event:c,timestamp:j.timestamp}),e.triggerHandler(d.type,d));var m={},n=c.touches?c.touches[0]:c;m.oLastSwipemove={screenX:n.screenX,screenY:n.screenY,timestamp:(new Date).getTime()},e.data("ojQueryGestures",a.extend(!0,f,m))}function g(c){var d=jQuery(c.currentTarget),e=!!c.changedTouches,h=e?c.changedTouches.length:"1",i=e?c.changedTouches[0].screenX:c.screenX,j=e?c.changedTouches[0].screenY:c.screenY;d.triggerHandler(a.jGestures.events.touchendStart,c),a.hasGestures?(c.currentTarget.removeEventListener("touchmove",f,!1),c.currentTarget.removeEventListener("touchend",g,!1)):(d.unbind("mousemove",f),d.unbind("mouseup",g));var k,l,m,n,o,p,q=d.data("ojQueryGestures"),r=Math.abs(q.oStartTouch.screenX-i)>a.jGestures.defaults.thresholdMove||Math.abs(q.oStartTouch.screenY-j)>a.jGestures.defaults.thresholdMove,s=Math.abs(q.oStartTouch.screenX-i)>a.jGestures.defaults.thresholdSwipe||Math.abs(q.oStartTouch.screenY-j)>a.jGestures.defaults.thresholdSwipe,t=["zero","one","two","three","four"];for(k in q){switch(l=q.oStartTouch,{},i=e?c.changedTouches[0].screenX:c.screenX,j=e?c.changedTouches[0].screenY:c.screenY,m=i-l.screenX,n=j-l.screenY,o=b({type:"swipe",touches:h,screenY:j,screenX:i,deltaY:n,deltaX:m,startMove:l,event:c,timestamp:l.timestamp}),p=!1,k){case"swipeone":if(!1===e&&1==h&&!1===r)break;(!1===e||1==h&&!0===r&&!0===s)&&(p=!0,o.type=["swipe",t[h]].join(""),d.triggerHandler(o.type,o));break;case"swipetwo":e&&2==h&&!0===r&&!0===s&&(p=!0,o.type=["swipe",t[h]].join(""),d.triggerHandler(o.type,o));break;case"swipethree":e&&3==h&&!0===r&&!0===s&&(p=!0,o.type=["swipe",t[h]].join(""),d.triggerHandler(o.type,o));break;case"swipefour":e&&4==h&&!0===r&&!0===s&&(p=!0,o.type=["swipe",t[h]].join(""),d.triggerHandler(o.type,o));break;case"swipeup":case"swiperightup":case"swiperight":case"swiperightdown":case"swipedown":case"swipeleftdown":case"swipeleft":case"swipeleftup":e&&!0===r&&!0===s&&(p=!0,o.type=["swipe",0!=o.delta[0].lastX?o.delta[0].lastX>0?"right":"left":"",0!=o.delta[0].lastY?o.delta[0].lastY>0?"down":"up":""].join(""),d.triggerHandler(o.type,o));break;case"tapone":case"taptwo":case"tapthree":case"tapfour":!0!==r&&!0!==p&&t[h]==k.slice(3)&&(o.description=["tap",t[h]].join(""),o.type=["tap",t[h]].join(""),d.triggerHandler(o.type,o))}var u={};d.data("ojQueryGestures",a.extend(!0,q,u)),d.data("ojQueryGestures",a.extend(!0,q,u))}d.triggerHandler(a.jGestures.events.touchendProcessed,c)}function h(b){var c=jQuery(b.currentTarget);c.triggerHandler(a.jGestures.events.gesturestart,b);var d=c.data("ojQueryGestures"),e={};e.oStartTouch={timestamp:(new Date).getTime()},c.data("ojQueryGestures",a.extend(!0,d,e))}function i(c){var d,e,f,g,h=jQuery(c.currentTarget),i=h.data("ojQueryGestures");for(g in i)switch(g){case"pinch":d=c.scale,(d<1&&d%1<1-a.jGestures.defaults.thresholdPinchclose||d>1&&d%1>a.jGestures.defaults.thresholdPinchopen)&&(e=d<1?-1:1,f=b({type:"pinch",scale:d,touches:null,startMove:i.oStartTouch,event:c,timestamp:i.oStartTouch.timestamp,vector:e,description:["pinch:",e,":",d<1?"close":"open"].join("")}),h.triggerHandler(f.type,f));break;case"rotate":d=c.rotation,(d<1&&-1*d>a.jGestures.defaults.thresholdRotateccw||d>1&&d>a.jGestures.defaults.thresholdRotatecw)&&(e=d<1?-1:1,f=b({type:"rotate",rotation:d,touches:null,startMove:i.oStartTouch,event:c,timestamp:i.oStartTouch.timestamp,vector:e,description:["rotate:",e,":",d<1?"counterclockwise":"clockwise"].join("")}),h.triggerHandler(f.type,f))}}function j(c){var d=jQuery(c.currentTarget);d.triggerHandler(a.jGestures.events.gestureendStart,c);var e,f,g=d.data("ojQueryGestures");for(f in g)switch(f){case"pinchclose":e=c.scale,e<1&&e%1<1-a.jGestures.defaults.thresholdPinchclose&&d.triggerHandler("pinchclose",b({type:"pinchclose",scale:e,vector:-1,touches:null,startMove:g.oStartTouch,event:c,timestamp:g.oStartTouch.timestamp,description:"pinch:-1:close"}));break;case"pinchopen":e=c.scale,e>1&&e%1>a.jGestures.defaults.thresholdPinchopen&&d.triggerHandler("pinchopen",b({type:"pinchopen",scale:e,vector:1,touches:null,startMove:g.oStartTouch,event:c,timestamp:g.oStartTouch.timestamp,description:"pinch:+1:open"}));break;case"rotatecw":e=c.rotation,e>1&&e>a.jGestures.defaults.thresholdRotatecw&&d.triggerHandler("rotatecw",b({type:"rotatecw",rotation:e,vector:1,touches:null,startMove:g.oStartTouch,event:c,timestamp:g.oStartTouch.timestamp,description:"rotate:+1:clockwise"}));break;case"rotateccw":e=c.rotation,e<1&&-1*e>a.jGestures.defaults.thresholdRotateccw&&d.triggerHandler("rotateccw",b({type:"rotateccw",rotation:e,vector:-1,touches:null,startMove:g.oStartTouch,event:c,timestamp:g.oStartTouch.timestamp,description:"rotate:-1:counterclockwise"}))}d.triggerHandler(a.jGestures.events.gestureendProcessed,c)}a.jGestures={},a.jGestures.defaults={},a.jGestures.defaults.thresholdShake={requiredShakes:10,freezeShakes:100,frontback:{sensitivity:10},leftright:{sensitivity:10},updown:{sensitivity:10}},a.jGestures.defaults.thresholdPinchopen=.05,a.jGestures.defaults.thresholdPinchmove=.05,a.jGestures.defaults.thresholdPinch=.05,a.jGestures.defaults.thresholdPinchclose=.05,a.jGestures.defaults.thresholdRotatecw=5,a.jGestures.defaults.thresholdRotateccw=5,a.jGestures.defaults.thresholdMove=20,a.jGestures.defaults.thresholdSwipe=100,a.jGestures.data={},a.jGestures.data.capableDevicesInUserAgentString=["iPad","iPhone","iPod","Mobile Safari"],a.jGestures.data.hasGestures=function(){var b;for(b=0;b<a.jGestures.data.capableDevicesInUserAgentString.length;b++)if(-1!==navigator.userAgent.indexOf(a.jGestures.data.capableDevicesInUserAgentString[b]))return!0;return!1}(),a.hasGestures=a.jGestures.data.hasGestures,a.jGestures.events={touchstart:"jGestures.touchstart",touchendStart:"jGestures.touchend;start",touchendProcessed:"jGestures.touchend;processed",gesturestart:"jGestures.gesturestart",gestureendStart:"jGestures.gestureend;start",gestureendProcessed:"jGestures.gestureend;processed"},jQuery.each({orientationchange_orientationchange01:"orientationchange",gestureend_pinchopen01:"pinchopen",gestureend_pinchclose01:"pinchclose",gestureend_rotatecw01:"rotatecw",gestureend_rotateccw01:"rotateccw",gesturechange_pinch01:"pinch",gesturechange_rotate01:"rotate",touchstart_swipe13:"swipemove",touchstart_swipe01:"swipeone",touchstart_swipe02:"swipetwo",touchstart_swipe03:"swipethree",touchstart_swipe04:"swipefour",touchstart_swipe05:"swipeup",touchstart_swipe06:"swiperightup",touchstart_swipe07:"swiperight",touchstart_swipe08:"swiperightdown",touchstart_swipe09:"swipedown",touchstart_swipe10:"swipeleftdown",touchstart_swipe11:"swipeleft",touchstart_swipe12:"swipeleftup",touchstart_tap01:"tapone",touchstart_tap02:"taptwo",touchstart_tap03:"tapthree",touchstart_tap04:"tapfour",devicemotion_shake01:"shake",devicemotion_shake02:"shakefrontback",devicemotion_shake03:"shakeleftright",devicemotion_shake04:"shakeupdown"},function(b,k){jQuery.event.special[k]={setup:function(){var f,g,k=b.split("_"),l=k[0],m=k[1].slice(0,k[1].length-2),n=jQuery(this);if(!n.data("ojQueryGestures")||!n.data("ojQueryGestures")[l])if(f=n.data("ojQueryGestures")||{},g={},g[l]=!0,a.extend(!0,f,g),n.data("ojQueryGestures",f),a.hasGestures)switch(m){case"orientationchange":n.get(0).addEventListener("orientationchange",c,!1);break;case"shake":case"shakefrontback":case"shakeleftright":case"shakeupdown":case"tilt":n.get(0).addEventListener("devicemotion",d,!1);break;case"tap":case"swipe":case"swipeup":case"swiperightup":case"swiperight":case"swiperightdown":case"swipedown":case"swipeleftdown":case"swipeleft":n.get(0).addEventListener("touchstart",e,!1);break;case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":n.get(0).addEventListener("gesturestart",h,!1),n.get(0).addEventListener("gestureend",j,!1);break;case"pinch":case"rotate":n.get(0).addEventListener("gesturestart",h,!1),n.get(0).addEventListener("gesturechange",i,!1)}else switch(m){case"tap":case"swipe":n.bind("mousedown",e)}return!1},add:function(a){return jQuery(this).data("ojQueryGestures")[a.type]={originalType:a.type},!1},remove:function(a){var b=jQuery(this),c=b.data("ojQueryGestures");return c[a.type]=!1,b.data("ojQueryGestures",c),!1},teardown:function(){var k,l,m=b.split("_"),n=m[0],o=m[1].slice(0,m[1].length-2),p=jQuery(this);if(!p.data("ojQueryGestures")||!p.data("ojQueryGestures")[n])if(k=p.data("ojQueryGestures")||{},l={},l[n]=!1,a.extend(!0,k,l),p.data("ojQueryGestures",k),a.hasGestures)switch(o){case"orientationchange":p.get(0).removeEventListener("orientationchange",c,!1);break;case"shake":case"shakefrontback":case"shakeleftright":case"shakeupdown":case"tilt":p.get(0).removeEventListener("devicemotion",d,!1);break;case"tap":case"swipe":case"swipeup":case"swiperightup":case"swiperight":case"swiperightdown":case"swipedown":case"swipeleftdown":case"swipeleft":case"swipeleftup":p.get(0).removeEventListener("touchstart",e,!1),p.get(0).removeEventListener("touchmove",f,!1),p.get(0).removeEventListener("touchend",g,!1);break;case"pinchopen":case"pinchclose":case"rotatecw":case"rotateccw":p.get(0).removeEventListener("gesturestart",h,!1),p.get(0).removeEventListener("gestureend",j,!1);break;case"pinch":case"rotate":p.get(0).removeEventListener("gesturestart",h,!1),p.get(0).removeEventListener("gesturechange",i,!1)}else switch(o){case"tap":case"swipe":p.unbind("mousedown",e),p.unbind("mousemove",f),p.unbind("mouseup",g)}return!1}}})}(jQuery),function(a){function b(b){var c=a.formatCurrency.regions[b];if(c)return c;if(/(\w+)-(\w+)/g.test(b)){var d=b.replace(/(\w+)-(\w+)/g,"$1");return a.formatCurrency.regions[d]}return null}function c(a){switch(a.toLowerCase()){case"int":return"Int";case"float":return"Float";default:throw"invalid parseType"}}function d(a){if(""===a.symbol)return new RegExp("[^\\d"+a.decimalSymbol+"-]","g");var b=a.symbol.replace("$","\\$").replace(".","\\.");return new RegExp(b+"|[^\\d"+a.decimalSymbol+"-]","g")}a.formatCurrency={},a.formatCurrency.regions=[],a.formatCurrency.regions[""]={symbol:"$",positiveFormat:"%s%n",negativeFormat:"(%s%n)",decimalSymbol:".",digitGroupSymbol:",",groupDigits:!0},a.fn.formatCurrency=function(c,e){1==arguments.length&&"string"!=typeof c&&(e=c,c=!1);var f={name:"formatCurrency",colorize:!1,region:"",global:!0,roundToDecimalPlace:0,eventOnDecimalsEntered:!1};return f=a.extend(f,a.formatCurrency.regions[""]),e=a.extend(f,e),e.region.length>0&&(e=a.extend(e,b(e.region))),e.regex=d(e),this.each(function(){$this=a(this);var b="0";if(b=$this[$this.is("input, select, textarea")?"val":"html"](),b.search("\\(")>=0&&(b="-"+b),""!==b&&("-"!==b||-1!==e.roundToDecimalPlace)){if(isNaN(b)){if(""===(b=b.replace(e.regex,""))||"-"===b&&-1===e.roundToDecimalPlace)return;"."!=e.decimalSymbol&&(b=b.replace(e.decimalSymbol,".")),isNaN(b)&&(b="0")}var d=String(b).split("."),f=b==Math.abs(b),g=d.length>1,h=g?d[1].toString():"0",i=h;if(b=Math.abs(d[0]),b=isNaN(b)?0:b,e.roundToDecimalPlace>=0&&(h=parseFloat("1."+h),h=h.toFixed(e.roundToDecimalPlace),"2"==h.substring(0,1)&&(b=Number(b)+1),h=h.substring(2)),b=String(b),e.groupDigits)for(var j=0;j<Math.floor((b.length-(1+j))/3);j++)b=b.substring(0,b.length-(4*j+3))+e.digitGroupSymbol+b.substring(b.length-(4*j+3));(g&&-1==e.roundToDecimalPlace||e.roundToDecimalPlace>0)&&(b+=e.decimalSymbol+h)
;var k=f?e.positiveFormat:e.negativeFormat,l=k.replace(/%s/g,e.symbol);l=l.replace(/%n/g,b);var m=a([]);m=c?a(c):$this,m[m.is("input, select, textarea")?"val":"html"](l),g&&e.eventOnDecimalsEntered&&i.length>e.roundToDecimalPlace&&m.trigger("decimalsEntered",i),e.colorize&&m.css("color",f?"black":"red")}})},a.fn.toNumber=function(c){var e=a.extend({name:"toNumber",region:"",global:!0},a.formatCurrency.regions[""]);return c=jQuery.extend(e,c),c.region.length>0&&(c=a.extend(c,b(c.region))),c.regex=d(c),this.each(function(){var b=a(this).is("input, select, textarea")?"val":"html";a(this)[b](a(this)[b]().replace("(","(-").replace(c.regex,""))})},a.fn.asNumber=function(e){var f=a.extend({name:"asNumber",region:"",parse:!0,parseType:"Float",global:!0},a.formatCurrency.regions[""]);e=jQuery.extend(f,e),e.region.length>0&&(e=a.extend(e,b(e.region))),e.regex=d(e),e.parseType=c(e.parseType);var g=a(this).is("input, select, textarea")?"val":"html",h=a(this)[g]();return h=h||"",h=h.replace("(","(-"),h=h.replace(e.regex,""),e.parse?(0==h.length&&(h="0"),"."!=e.decimalSymbol&&(h=h.replace(e.decimalSymbol,".")),window["parse"+e.parseType](h)):h}}(jQuery),GNW_Pusher={},$(document).ready(function(){GNW_Pusher.init=function(){$(".pusher .image div img").each(function(a){$(this).css("max-width","100%").css("height","auto")}),$(".primary-pusher .image div img").each(function(a){$(this).css("max-width","100%").css("height","auto")}),$(".pusher").each(function(){$(this).hover(function(){$(this).css("cursor","pointer")},function(){$(this).css("cursor","auto")}),$(this).unbind("click");var a=$(this).find(".pusher-link");$(this).click(function(){var b=$(a).attr("href");"_blank"==$(a).attr("target")?window.open(b):window.location=b})})},GNW_Pusher.init()}),$(document).ready(function(){function a(a){for(var b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++)if(c[d].indexOf(a)>-1)return c[d].replace(a+"=","");return null}var b=""+window.location,c=["https://int-cms.genworth.com","https://test-cms.genworth.com","https://devsecure.genworth.com","https://stgsecure.genworth.com"],d="/content/americas/us/producer",e="https://secure.genworth.com",f=location.protocol+"//"+window.location.hostname,g=a("ccode");if(g?(sessionStorage.setItem("cellcode",g),sessionStorage.setItem("listcode","Y633"),sessionStorage.setItem("code","cc")):b.match(/lets-talk/g)&&!sessionStorage.getItem("code")&&(sessionStorage.setItem("cellcode","A862"),sessionStorage.setItem("listcode","Y633")),$('input[name="cellCode"]').length&&sessionStorage.getItem("cellcode")&&(jQuery("input[name='cellCode']").each(function(){$(this).val(sessionStorage.getItem("cellcode"))}),jQuery("input[name='listCode']").each(function(){$(this).val(sessionStorage.getItem("listcode"))})),e!=f&&-1!=b.indexOf("/secure/")){var h=location.port;""!=h&&(f=f+":"+h);for(var i=f+d,j=c.length,k=0;k<j;++k)f==c[k]&&(i=f);$("a,area").each(function(){var a=$(this).attr("href");if(void 0!==a&&0==a.indexOf(e)){var b=a.replace(e,i);$(this).attr("href",b)}})}$.fn.textWidth=function(){var a=$(this).html(),b="<span>"+a+"</span>";$(this).html(b);var c=$(this).find("span:first").width();return $(this).html(a),c}}),function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.1.1",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=e,l=this.$element.parent(),m=this.getPosition(l);e="bottom"==e&&h.top+h.height+j-m.scroll>m.height?"top":"top"==e&&h.top-m.scroll-j<0?"bottom":"right"==e&&h.right+i>m.width?"left":"left"==e&&h.left-i<m.left?"right":e,d.removeClass(k).addClass(e)}var n=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(n,e),this.hoverState=null;var o=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,o).emulateTransitionEnd(150):o()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a=this.$element,b=this.options;return a.attr("data-original-title")||("function"==typeof b.title?b.title.call(a[0]):b.title)},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&((c=a(b.currentTarget).data("bs."+this.type))||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.1.1",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b);if(("prev"==a&&0===c||"next"==a&&c==this.$items.length-1)&&!this.options.wrap)return b;var d="prev"==a?-1:1,e=(c+d)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.1.1",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),b.call(f,g,this),f.one("hide.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.1.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function b(b,d){var e,f,g=this;if(g.defaults={accessibility:!0,arrows:!0,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button">'+(b+1)+"</button>"},dots:!1,draggable:!0,easing:"linear",fade:!1,infinite:!0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,pauseOnHover:!0,responsive:null,slide:"div",slidesToShow:1,slidesToScroll:1,speed:300,swipe:!0,touchMove:!0,touchThreshold:5,useCSS:!0,vertical:!1},g.initials={animating:!1,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(g,g.initials),g.activeBreakpoint=null,g.animType=null,g.animProp=null,g.breakpoints=[],g.breakpointSettings=[],g.cssTransitions=!1,g.paused=!1,g.positionProp=null,g.$slider=a(b),g.$slidesCache=null,g.transformType=null,g.transitionType=null,g.windowWidth=0,g.windowTimer=null,g.options=a.extend({},g.defaults,d),g.originalSettings=g.options,(e=g.options.responsive||null)&&e.length>-1){for(f in e)e.hasOwnProperty(f)&&(g.breakpoints.push(e[f].breakpoint),g.breakpointSettings[e[f].breakpoint]=e[f].settings);g.breakpoints.sort(function(a,b){return b-a})}g.autoPlay=a.proxy(g.autoPlay,g),g.autoPlayClear=a.proxy(g.autoPlayClear,g),g.changeSlide=a.proxy(g.changeSlide,g),g.setPosition=a.proxy(g.setPosition,g),g.swipeHandler=a.proxy(g.swipeHandler,g),g.dragHandler=a.proxy(g.dragHandler,g),g.keyHandler=a.proxy(g.keyHandler,g),g.autoPlayIterator=a.proxy(g.autoPlayIterator,g),g.instanceUid=c++,g.init()}var c=0;return b}(),b.prototype.addSlide=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):!0===d?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).remove(),e.$slideTrack.append(e.$slides),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateSlide=function(b,c){var d={},e=this;!1===e.transformsEnabled?!1===e.options.vertical?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):!1===e.cssTransitions?a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){!1===e.options.vertical?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}}):(e.applyTransition(),d[e.animType]=!1===e.options.vertical?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=!1===b.options.fade?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,!1===b.options.fade?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&!0!==a.paused&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;!1===a.options.infinite?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1==0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;!0===b.options.arrows&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a('<a class="slick-prev" title="Previous" alt="Previous"><i class="fa fa-chevron-left"></i></a>').appendTo(b.$slider),b.$nextArrow=a('<a class="slick-next" title="Next" alt="Next"><i class="fa fa-chevron-right"></i></a>').appendTo(b.$slider),!0!==b.options.infinite&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var b,c,d=this;if(!0===d.options.dots&&d.slideCount>d.options.slidesToShow){for(c='<ul class="slick-dots">',b=0;b<=d.getDotCount();b+=1)c+="<li>"+d.options.customPaging.call(this,d,b)+"</li>";c+="</ul>",d.$dots=a(c).appendTo(d.$slider),d.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),!0===b.options.centerMode&&(b.options.infinite=!0,b.options.slidesToScroll=1,b.options.slidesToShow%2==0&&(b.options.slidesToShow=3)),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),!0===b.options.accessibility&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),!0===b.options.draggable&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var b,c,d=this;if(d.originalSettings.responsive&&d.originalSettings.responsive.length>-1&&null!==d.originalSettings.responsive){c=null;for(b in d.breakpoints)d.breakpoints.hasOwnProperty(b)&&a(window).width()<d.breakpoints[b]&&(c=d.breakpoints[b]);null!==c?null!==d.activeBreakpoint?c!==d.activeBreakpoint&&(d.activeBreakpoint=c,d.options=a.extend({},d.defaults,d.breakpointSettings[c]),d.refresh()):(d.activeBreakpoint=c,d.options=a.extend({},d.defaults,d.breakpointSettings[c]),d.refresh()):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=a.extend({},d.defaults,d.originalSettings),d.refresh())}},b.prototype.changeSlide=function(b){var c=this;switch(b.data.message){case"previous":c.slideHandler(c.currentSlide-c.options.slidesToScroll);break;case"next":c.slideHandler(c.currentSlide+c.options.slidesToScroll);break;case"index":c.slideHandler(a(b.target).parent().index()*c.options.slidesToScroll);break;default:return!1}},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.unwrap().unwrap(),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",!1===b.options.fade?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;!1===c.cssTransitions?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).remove(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=function(){return this.currentSlide},b.prototype.getDotCount=function(){var a,b=this,c=0,d=0,e=0;for(a=!0===b.options.infinite?b.slideCount+b.options.slidesToShow-b.options.slidesToScroll:b.slideCount;a>c;)e++,d+=b.options.slidesToScroll,c=d+b.options.slidesToShow;return e},b.prototype.getLeft=function(a){var b,c=this,d=0;return c.slideOffset=0,b=c.$slides.first().outerHeight(),!0===c.options.infinite?(c.slideCount>c.options.slidesToShow&&(c.slideOffset=c.slideWidth*c.options.slidesToShow*-1,d=b*c.options.slidesToShow*-1),c.slideCount%c.options.slidesToScroll!=0&&a+c.options.slidesToScroll>c.slideCount&&c.slideCount>c.options.slidesToShow&&(c.slideOffset=c.slideCount%c.options.slidesToShow*c.slideWidth*-1,d=c.slideCount%c.options.slidesToShow*b*-1)):c.slideCount%c.options.slidesToShow!=0&&a+c.options.slidesToScroll>c.slideCount&&c.slideCount>c.options.slidesToShow&&(c.slideOffset=c.options.slidesToShow*c.slideWidth-c.slideCount%c.options.slidesToShow*c.slideWidth,d=c.slideCount%c.options.slidesToShow*b),!0===c.options.centerMode&&(c.slideOffset+=c.slideWidth*Math.floor(c.options.slidesToShow/2)-c.slideWidth),!1===c.options.vertical?a*c.slideWidth*-1+c.slideOffset:a*b*-1+d},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.checkResponsive()),null!==b.options.onInit&&b.options.onInit.call(this,b)},b.prototype.initArrowEvents=function(){var a=this
;!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;!0===b.options.dots&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide)},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),!0===b.options.pauseOnHover&&!0===b.options.autoplay&&(b.$list.on("mouseenter.slick",b.autoPlayClear),b.$list.on("mouseleave.slick",b.autoPlay)),!0===b.options.accessibility&&b.$list.on("keydown.slick",b.keyHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),!0===a.options.dots&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),!0===a.options.autoplay&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){var b,c,d,e,f=this;!0===f.options.centerMode||!0===f.options.fade?(d=f.options.slidesToShow+f.currentSlide-1,e=d+f.options.slidesToShow+2):(d=f.options.infinite?f.options.slidesToShow+f.currentSlide:f.currentSlide,e=d+f.options.slidesToShow),b=f.$slider.find(".slick-slide").slice(d,e),a("img[data-lazy]",b).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})}),f.currentSlide>=f.slideCount-f.options.slidesToShow?(c=f.$slider.find(".slick-cloned").slice(0,f.options.slidesToShow),a("img[data-lazy]",c).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})})):0===f.currentSlide&&(c=f.$slider.find(".slick-cloned").slice(-1*f.options.slidesToShow),a("img[data-lazy]",c).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})}))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.postSlide=function(a){var b=this;null!==b.options.onAfterChange&&b.options.onAfterChange.call(this,b,a),b.animating=!1,b.setPosition(),b.swipeLeft=null,!0===b.options.autoplay&&!1===b.paused&&b.autoPlay()},b.prototype.progressiveLazyLoad=function(){var b,c=this;a("img[data-lazy]").not("[src]").length>0&&(b=a(a("img[data-lazy]",c.$slider).not("[src]").get(0)),b.attr("src",b.attr("data-lazy")).removeClass("slick-loading").load(function(){c.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.currentSlide=c,b.init()},b.prototype.reinit=function(){var a=this;a.$slides=a.$slideTrack.children(a.options.slide).addClass("slick-slide"),a.slideCount=a.$slides.length,a.currentSlide>=a.slideCount&&0!==a.currentSlide&&(a.currentSlide=a.currentSlide-a.options.slidesToScroll),a.setProps(),a.setupInfinite(),a.buildArrows(),a.updateArrows(),a.initArrowEvents(),a.buildDots(),a.updateDots(),a.initDotEvents(),a.setSlideClasses(0),a.setPosition(),null!==a.options.onReInit&&a.options.onReInit.call(this,a)},b.prototype.removeSlide=function(a,b){var c=this;return"boolean"==typeof a?(b=a,a=!0===b?0:c.slideCount-1):a=!0===b?--a:a,!(c.slideCount<1||0>a||a>c.slideCount-1)&&(c.unload(),c.$slideTrack.children(this.options.slide).eq(a).remove(),c.$slides=c.$slideTrack.children(this.options.slide),c.$slideTrack.children(this.options.slide).remove(),c.$slideTrack.append(c.$slides),c.$slidesCache=c.$slides,void c.reinit())},b.prototype.setCSS=function(a){var b,c,d=this,e={};b="left"==d.positionProp?a+"px":"0px",c="top"==d.positionProp?a+"px":"0px",e[d.positionProp]=a,!1===d.transformsEnabled?d.$slideTrack.css(e):(e={},!1===d.cssTransitions?(e[d.animType]="translate("+b+", "+c+")",d.$slideTrack.css(e)):(e[d.animType]="translate3d("+b+", "+c+", 0px)",d.$slideTrack.css(e)))},b.prototype.setDimensions=function(){var a=this;a.$slideTrack.children(".slick-slide").width((a.options.centerMode,a.slideWidth)),!1===a.options.vertical?(a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length)),!0===a.options.centerMode&&a.$list.css({padding:"0px "+a.options.centerPadding})):(a.$list.height(a.$slides.first().outerHeight()*a.options.slidesToShow),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight()*a.$slideTrack.children(".slick-slide").length)),!0===a.options.centerMode&&a.$list.css({padding:a.options.centerPadding+" 0px"}))},b.prototype.setFade=function(){var b,c=this;c.$slides.each(function(d,e){b=c.slideWidth*d*-1,a(e).css({position:"relative",left:b,top:0,zIndex:800,opacity:0})}),c.$slides.eq(c.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setPosition=function(){var a=this;a.setValues(),a.setDimensions(),!1===a.options.fade?a.setCSS(a.getLeft(a.currentSlide)):a.setFade()},b.prototype.setProps=function(){var a=this;a.positionProp=!0===a.options.vertical?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==document.body.style.WebkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.msTransition)&&!0===a.options.useCSS&&(a.cssTransitions=!0),void 0!==document.body.style.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition"),void 0!==document.body.style.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition"),void 0!==document.body.style.msTransform&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType},b.prototype.setValues=function(){var a=this;a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.slideWidth=Math.ceil(!1===a.options.vertical?a.listWidth/a.options.slidesToShow:a.listWidth)},b.prototype.setSlideClasses=function(a){var b,c,d,e=this;e.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),c=e.$slider.find(".slick-slide"),!0===e.options.centerMode?(b=Math.floor(e.options.slidesToShow/2),a>=b&&a<=e.slideCount-1-b?e.$slides.slice(a-b,a+b+1).addClass("slick-active"):(d=e.options.slidesToShow+a,c.slice(d-b+1,d+b+2).addClass("slick-active")),0===a?c.eq(c.length-1-e.options.slidesToShow).addClass("slick-center"):a===e.slideCount-1&&c.eq(e.options.slidesToShow).addClass("slick-center"),e.$slides.eq(a).addClass("slick-center")):a>0&&a<e.slideCount-e.options.slidesToShow?e.$slides.slice(a,a+e.options.slidesToShow).addClass("slick-active"):c.length<=e.options.slidesToShow?c.addClass("slick-active"):(d=!0===e.options.infinite?e.options.slidesToShow+a:a,c.slice(d,d+e.options.slidesToShow).addClass("slick-active")),"ondemand"===e.options.lazyLoad&&e.lazyLoad()},b.prototype.setupInfinite=function(){var b,c,d,e=this;if((!0===e.options.fade||!0===e.options.vertical)&&(e.options.centerMode=!1),!0===e.options.infinite&&!1===e.options.fade&&(c=null,e.slideCount>e.options.slidesToShow)){for(d=!0===e.options.centerMode?e.options.slidesToShow+1:e.options.slidesToShow,b=e.slideCount;b>e.slideCount-d;b-=1)c=b-1,a(e.$slides[c]).clone().attr("id","").prependTo(e.$slideTrack).addClass("slick-cloned");for(b=0;d>b;b+=1)c=b,a(e.$slides[c]).clone().attr("id","").appendTo(e.$slideTrack).addClass("slick-cloned");e.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.slideHandler=function(a){var b,c,d,e,f=null,g=this;return!0!==g.animating&&(b=a,f=g.getLeft(b),d=g.getLeft(g.currentSlide),e=g.slideCount%g.options.slidesToScroll!=0?g.options.slidesToScroll:0,g.currentLeft=null===g.swipeLeft?d:g.swipeLeft,!1===g.options.infinite&&(0>a||a>g.slideCount-g.options.slidesToShow+e)?(!1===g.options.fade&&(b=g.currentSlide,g.animateSlide(d,function(){g.postSlide(b)})),!1):(!0===g.options.autoplay&&clearInterval(g.autoPlayTimer),c=0>b?g.slideCount%g.options.slidesToScroll!=0?g.slideCount-g.slideCount%g.options.slidesToScroll:g.slideCount-g.options.slidesToScroll:b>g.slideCount-1?0:b,g.animating=!0,null!==g.options.onBeforeChange&&a!==g.currentSlide&&g.options.onBeforeChange.call(this,g,g.currentSlide,c),g.currentSlide=c,g.setSlideClasses(g.currentSlide),g.updateDots(),g.updateArrows(),!0===g.options.fade?(g.fadeSlide(c,function(){g.postSlide(c)}),!1):void g.animateSlide(f,function(){g.postSlide(c)})))},b.prototype.startLoad=function(){var a=this;!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),!0===a.options.dots&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?"left":360>=d&&d>=315?"left":d>=135&&225>=d?"right":"vertical"},b.prototype.swipeEnd=function(b){var c=this;if(c.$list.removeClass("dragging"),void 0===c.touchObject.curX)return!1;if(c.touchObject.swipeLength>=c.touchObject.minSwipe)switch(a(b.target).on("click.slick",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.slick")}),c.swipeDirection()){case"left":c.slideHandler(c.currentSlide+c.options.slidesToScroll),c.touchObject={};break;case"right":c.slideHandler(c.currentSlide-c.options.slidesToScroll),c.touchObject={}}else c.touchObject.startX!==c.touchObject.curX&&(c.slideHandler(c.currentSlide),c.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(!1===b.options.swipe||"ontouchend"in document&&!1===b.options.swipe)&&!1!==b.options.draggable&&(!1!==b.options.draggable||a.originalEvent.touches))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var b,c,d,e,f=this;return e=void 0!==a.originalEvent?a.originalEvent.touches:null,b=f.getLeft(f.currentSlide),!(!f.$list.hasClass("dragging")||e&&1!==e.length)&&(f.touchObject.curX=void 0!==e?e[0].pageX:a.clientX,f.touchObject.curY=void 0!==e?e[0].pageY:a.clientY,f.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(f.touchObject.curX-f.touchObject.startX,2))),c=f.swipeDirection(),"vertical"!==c?(void 0!==a.originalEvent&&f.touchObject.swipeLength>4&&a.preventDefault(),d=f.touchObject.curX>f.touchObject.startX?1:-1,f.swipeLeft=!1===f.options.vertical?b+f.touchObject.swipeLength*d:b+f.touchObject.swipeLength*(f.$list.height()/f.listWidth)*d,!0!==f.options.fade&&!1!==f.options.touchMove&&(!0===f.animating?(f.swipeLeft=null,!1):void f.setCSS(f.swipeLeft))):void 0)},b.prototype.swipeStart=function(a){var b,c=this;return 1!==c.touchObject.fingerCount||c.slideCount<=c.options.slidesToShow?(c.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(b=a.originalEvent.touches[0]),c.touchObject.startX=c.touchObject.curX=void 0!==b?b.pageX:a.clientX,c.touchObject.startY=c.touchObject.curY=void 0!==b?b.pageY:a.clientY,void c.$list.addClass("dragging"))},b.prototype.unfilterSlides=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).remove(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")},b.prototype.updateArrows=function(){var a=this;!0===a.options.arrows&&!0!==a.options.infinite&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(a.currentSlide/a.options.slidesToScroll).addClass("slick-active"))},a.fn.slick=function(a){return this.each(function(c,d){d.slick=new b(d,a)})},a.fn.slickAdd=function(a,b,c){return this.each(function(d,e){e.slick.addSlide(a,b,c)})},a.fn.slickCurrentSlide=function(){return this.get(0).slick.getCurrent()},a.fn.slickFilter=function(a){return this.each(function(b,c){c.slick.filterSlides(a)})},a.fn.slickGoTo=function(a){return this.each(function(b,c){c.slick.slideHandler(a)})},a.fn.slickNext=function(){return this.each(function(a,b){b.slick.changeSlide({data:{message:"next"}})})},a.fn.slickPause=function(){return this.each(function(a,b){b.slick.autoPlayClear(),b.slick.paused=!0})},a.fn.slickPlay=function(){return this.each(function(a,b){b.slick.paused=!1,b.slick.autoPlay()})},a.fn.slickPrev=function(){return this.each(function(a,b){b.slick.changeSlide({data:{message:"previous"}})})},a.fn.slickRemove=function(a,b){return this.each(function(c,d){d.slick.removeSlide(a,b)})},a.fn.slickSetOption=function(a,b,c){return this.each(function(d,e){e.slick.options[a]=b,!0===c&&(e.slick.unload(),e.slick.reinit())})},a.fn.slickUnfilter=function(){return this.each(function(a,b){b.slick.unfilterSlides()})},a.fn.unslick=function(){return this.each(function(a,b){b.slick.destroy()})}}),function(a,b,c){function d(c,d,e){var f=b.createElement(c);return d&&(f.id=_+d),e&&(f.style.cssText=e),a(f)}function e(){return c.innerHeight?c.innerHeight:a(c).height()}function f(b,c){c!==Object(c)&&(c={}),this.cache={},this.el=b,this.value=function(b){var d;return void 0===this.cache[b]&&(d=a(this.el).attr("data-cbox-"+b),void 0!==d?this.cache[b]=d:void 0!==c[b]?this.cache[b]=c[b]:void 0!==Z[b]&&(this.cache[b]=Z[b])),this.cache[b]},this.get=function(b){var c=this.value(b);return a.isFunction(c)?c.call(this.el,this):c}}function g(a){var b=A.length,c=(R+a)%b;return 0>c?b+c:c}function h(a,b){return Math.round((/%/.test(a)?("x"===b?B.width():e())/100:1)*parseInt(a,10))}function i(a,b){return a.get("photo")||a.get("photoRegex").test(b)}function j(a,b){return a.get("retinaUrl")&&c.devicePixelRatio>1?b.replace(a.get("photoRegex"),a.get("retinaSuffix")):b}function k(a){"contains"in t[0]&&!t[0].contains(a.target)&&a.target!==s[0]&&(a.stopPropagation(),t.focus())}function l(a){l.str!==a&&(t.add(s).removeClass(l.str).addClass(a),l.str=a)}function m(b){R=0,b&&!1!==b&&"nofollow"!==b?(A=a("."+aa).filter(function(){return new f(this,a.data(this,$)).get("rel")===b}),-1===(R=A.index(M.el))&&(A=A.add(M.el),R=A.length-1)):A=a(M.el)}function n(c){a(b).trigger(c),ha.triggerHandler(c)}function o(c){var e;if(!V){if(e=a(c).data($),M=new f(c,e),m(M.get("rel")),!T){T=U=!0,l(M.get("className")),t.css({visibility:"hidden",display:"block",opacity:""}),C=d(ia,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),v.css({width:"",height:""}).append(C),N=w.height()+z.height()+v.outerHeight(!0)-v.height(),O=x.width()+y.width()+v.outerWidth(!0)-v.width(),P=C.outerHeight(!0),Q=C.outerWidth(!0);var g=h(M.get("initialWidth"),"x"),i=h(M.get("initialHeight"),"y"),j=M.get("maxWidth"),o=M.get("maxHeight");M.w=(!1!==j?Math.min(g,h(j,"x")):g)-Q-O,M.h=(!1!==o?Math.min(i,h(o,"y")):i)-P-N,C.css({width:"",height:M.h}),X.position(),n(ba),M.get("onOpen"),L.add(F).hide(),t.focus(),M.get("trapFocus")&&b.addEventListener&&(b.addEventListener("focus",k,!0),ha.one(fa,function(){b.removeEventListener("focus",k,!0)})),M.get("returnFocus")&&ha.one(fa,function(){a(M.el).focus()})}var p=parseFloat(M.get("opacity"));s.css({opacity:p===p?p:"",cursor:M.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),M.get("closeButton")?K.html(M.get("close")).appendTo(v):K.appendTo("<div/>"),r()}}function p(){t||(Y=!1,B=a(c),t=d(ia).attr({id:$,class:!1===a.support.opacity?_+"IE":"",role:"dialog",tabindex:"-1"}).hide(),s=d(ia,"Overlay").hide(),E=a([d(ia,"LoadingOverlay")[0],d(ia,"LoadingGraphic")[0]]),u=d(ia,"Wrapper"),v=d(ia,"Content").append(F=d(ia,"Title"),G=d(ia,"Current"),J=a('<button type="button"/>').attr({id:_+"Previous"}),I=a('<button type="button"/>').attr({id:_+"Next"}),H=d("button","Slideshow"),E),K=a('<button type="button"/>').attr({id:_+"Close"}),u.append(d(ia).append(d(ia,"TopLeft"),w=d(ia,"TopCenter"),d(ia,"TopRight")),d(ia,!1,"clear:left").append(x=d(ia,"MiddleLeft"),v,y=d(ia,"MiddleRight")),d(ia,!1,"clear:left").append(d(ia,"BottomLeft"),z=d(ia,"BottomCenter"),d(ia,"BottomRight"))).find("div div").css({float:"left"}),D=d(ia,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),L=I.add(J).add(G).add(H)),b.body&&!t.parent().length&&a(b.body).append(s,t.append(u,D))}function q(){function c(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||a.ctrlKey||(a.preventDefault(),o(this))}return!!t&&(Y||(Y=!0,I.click(function(){X.next()}),J.click(function(){X.prev()}),K.click(function(){X.close()}),s.click(function(){M.get("overlayClose")&&X.close()}),a(b).bind("keydown."+_,function(a){var b=a.keyCode;T&&M.get("escKey")&&27===b&&(a.preventDefault(),X.close()),T&&M.get("arrowKey")&&A[1]&&!a.altKey&&(37===b?(a.preventDefault(),J.click()):39===b&&(a.preventDefault(),I.click()))}),a.isFunction(a.fn.on)?a(b).on("click."+_,"."+aa,c):a("."+aa).live("click."+_,c)),!0)}function r(){var b,e,f,g=X.prep,k=++ja;if(U=!0,S=!1,n(ga),n(ca),M.get("onLoad"),M.h=M.get("height")?h(M.get("height"),"y")-P-N:M.get("innerHeight")&&h(M.get("innerHeight"),"y"),M.w=M.get("width")?h(M.get("width"),"x")-Q-O:M.get("innerWidth")&&h(M.get("innerWidth"),"x"),M.mw=M.w,M.mh=M.h,M.get("maxWidth")&&(M.mw=h(M.get("maxWidth"),"x")-Q-O,M.mw=M.w&&M.w<M.mw?M.w:M.mw),M.get("maxHeight")&&(M.mh=h(M.get("maxHeight"),"y")-P-N,M.mh=M.h&&M.h<M.mh?M.h:M.mh),b=M.get("href"),W=setTimeout(function(){E.show()},100),M.get("inline")){var l=a(b);f=a("<div>").hide().insertBefore(l),ha.one(ga,function(){f.replaceWith(l)}),g(l)}else M.get("iframe")?g(" "):M.get("html")?g(M.get("html")):i(M,b)?(b=j(M,b),S=M.get("createImg"),a(S).addClass(_+"Photo").bind("error",function(){g(d(ia,"Error").html(M.get("imgError")))}).one("load",function(){k===ja&&setTimeout(function(){var a;M.get("retinaImage")&&c.devicePixelRatio>1&&(S.height=S.height/c.devicePixelRatio,S.width=S.width/c.devicePixelRatio),M.get("scalePhotos")&&(e=function(){S.height-=S.height*a,S.width-=S.width*a},M.mw&&S.width>M.mw&&(a=(S.width-M.mw)/S.width,e()),M.mh&&S.height>M.mh&&(a=(S.height-M.mh)/S.height,e())),M.h&&(S.style.marginTop=Math.max(M.mh-S.height,0)/2+"px"),A[1]&&(M.get("loop")||A[R+1])&&(S.style.cursor="pointer",S.onclick=function(){X.next()}),S.style.width=S.width+"px",S.style.height=S.height+"px",g(S)},1)}),S.src=b):b&&D.load(b,M.get("data"),function(b,c){k===ja&&g("error"===c?d(ia,"Error").html(M.get("xhrError")):a(this).contents())})}var s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return a(this).attr("href")},title:function(){return this.title},createImg:function(){var b=new Image,c=a(this).data("cbox-img-attrs");return"object"==typeof c&&a.each(c,function(a,c){b[a]=c}),b},createIframe:function(){var c=b.createElement("iframe"),d=a(this).data("cbox-iframe-attrs");return"object"==typeof d&&a.each(d,function(a,b){c[a]=b}),"frameBorder"in c&&(c.frameBorder=0),"allowTransparency"in c&&(c.allowTransparency="true"),c.name=(new Date).getTime(),c.allowFullScreen=!0,c}},$="colorbox",_="cbox",aa=_+"Element",ba=_+"_open",ca=_+"_load",da=_+"_complete",ea=_+"_cleanup",fa=_+"_closed",ga=_+"_purge",ha=a("<a/>"),ia="div",ja=0,ka={},la=function(){function a(){clearTimeout(g)}function b(){(M.get("loop")||A[R+1])&&(a(),g=setTimeout(X.next,M.get("slideshowSpeed")))}function c(){H.html(M.get("slideshowStop")).unbind(i).one(i,d),ha.bind(da,b).bind(ca,a),t.removeClass(h+"off").addClass(h+"on")}function d(){a(),ha.unbind(da,b).unbind(ca,a),H.html(M.get("slideshowStart")).unbind(i).one(i,function(){X.next(),c()}),t.removeClass(h+"on").addClass(h+"off")}function e(){f=!1,H.hide(),a(),ha.unbind(da,b).unbind(ca,a),t.removeClass(h+"off "+h+"on")}var f,g,h=_+"Slideshow_",i="click."+_;return function(){f?M.get("slideshow")||(ha.unbind(ea,e),e()):M.get("slideshow")&&A[1]&&(f=!0,ha.one(ea,e),M.get("slideshowAuto")?c():d(),H.show())}}();a[$]||(a(p),X=a.fn[$]=a[$]=function(b,c){var d,e=this;return b=b||{},a.isFunction(e)&&(e=a("<a/>"),b.open=!0),e[0]?(p(),q()&&(c&&(b.onComplete=c),e.each(function(){var c=a.data(this,$)||{};a.data(this,$,a.extend(c,b))}).addClass(aa),d=new f(e[0],b),d.get("open")&&o(e[0])),e):e},X.position=function(b,c){function d(){w[0].style.width=z[0].style.width=v[0].style.width=parseInt(t[0].style.width,10)-O+"px",v[0].style.height=x[0].style.height=y[0].style.height=parseInt(t[0].style.height,10)-N+"px"}var f,g,i,j=0,k=0,l=t.offset();if(B.unbind("resize."+_),t.css({top:-9e4,left:-9e4}),g=B.scrollTop(),i=B.scrollLeft(),M.get("fixed")?(l.top-=g,l.left-=i,t.css({position:"fixed"})):(j=g,k=i,t.css({position:"absolute"})),k+=!1!==M.get("right")?Math.max(B.width()-M.w-Q-O-h(M.get("right"),"x"),0):!1!==M.get("left")?h(M.get("left"),"x"):Math.round(Math.max(B.width()-M.w-Q-O,0)/2),j+=!1!==M.get("bottom")?Math.max(e()-M.h-P-N-h(M.get("bottom"),"y"),0):!1!==M.get("top")?h(M.get("top"),"y"):Math.round(Math.max(e()-M.h-P-N,0)/2),t.css({top:l.top,left:l.left,visibility:"visible"}),u[0].style.width=u[0].style.height="9999px",f={width:M.w+Q+O,height:M.h+P+N,top:j,left:k},b){var m=0;a.each(f,function(a){return f[a]!==ka[a]?void(m=b):void 0}),b=m}ka=f,b||t.css(f),t.dequeue().animate(f,{duration:b||0,complete:function(){d(),U=!1,u[0].style.width=M.w+Q+O+"px",u[0].style.height=M.h+P+N+"px",M.get("reposition")&&setTimeout(function(){B.bind("resize."+_,X.position)},1),a.isFunction(c)&&c()},step:d})},X.resize=function(a){var b;T&&(a=a||{},a.width&&(M.w=h(a.width,"x")-Q-O),a.innerWidth&&(M.w=h(a.innerWidth,"x")),C.css({width:M.w}),a.height&&(M.h=h(a.height,"y")-P-N),a.innerHeight&&(M.h=h(a.innerHeight,"y")),a.innerHeight||a.height||(b=C.scrollTop(),C.css({height:"auto"}),M.h=C.height()),C.css({height:M.h}),b&&C.scrollTop(b),X.position("none"===M.get("transition")?0:M.get("speed")))},X.prep=function(c){function e(){return M.w=M.w||C.width(),M.w=M.mw&&M.mw<M.w?M.mw:M.w,M.w}function h(){return M.h=M.h||C.height(),M.h=M.mh&&M.mh<M.h?M.mh:M.h,M.h}if(T){var k,m="none"===M.get("transition")?0:M.get("speed");C.remove(),C=d(ia,"LoadedContent").append(c),C.hide().appendTo(D.show()).css({width:e(),overflow:M.get("scrolling")?"auto":"hidden"}).css({height:h()}).prependTo(v),D.hide(),a(S).css({float:"none"}),l(M.get("className")),k=function(){function c(){!1===a.support.opacity&&t[0].style.removeAttribute("filter")}var d,e,h=A.length;T&&(e=function(){clearTimeout(W),E.hide(),n(da),M.get("onComplete")},F.html(M.get("title")).show(),C.show(),h>1?("string"==typeof M.get("current")&&G.html(M.get("current").replace("{current}",R+1).replace("{total}",h)).show(),I[M.get("loop")||h-1>R?"show":"hide"]().html(M.get("next")),J[M.get("loop")||R?"show":"hide"]().html(M.get("previous")),la(),M.get("preloading")&&a.each([g(-1),g(1)],function(){var c,d=A[this],e=new f(d,a.data(d,$)),g=e.get("href");g&&i(e,g)&&(g=j(e,g),c=b.createElement("img"),c.src=g)})):L.hide(),M.get("iframe")?(d=M.get("createIframe"),M.get("scrolling")||(d.scrolling="no"),a(d).attr({src:M.get("href"),class:_+"Iframe"}).one("load",e).appendTo(C),ha.one(ga,function(){d.src="//about:blank"}),M.get("fastIframe")&&a(d).trigger("load")):e(),"fade"===M.get("transition")?t.fadeTo(m,1,c):c())},"fade"===M.get("transition")?t.fadeTo(m,0,function(){X.position(0,k)}):X.position(m,k)}},X.next=function(){!U&&A[1]&&(M.get("loop")||A[R+1])&&(R=g(1),o(A[R]))},X.prev=function(){!U&&A[1]&&(M.get("loop")||R)&&(R=g(-1),o(A[R]))},X.close=function(){T&&!V&&(V=!0,T=!1,n(ea),M.get("onCleanup"),B.unbind("."+_),s.fadeTo(M.get("fadeOut")||0,0),t.stop().fadeTo(M.get("fadeOut")||0,0,function(){t.hide(),s.hide(),n(ga),C.remove(),setTimeout(function(){V=!1,n(fa),M.get("onClosed")},1)}))},X.remove=function(){t&&(t.stop(),a[$].close(),t.stop(!1,!0).remove(),s.remove(),V=!1,t=null,a("."+aa).removeData($).removeClass(aa),a(b).unbind("click."+_).unbind("keydown."+_))},X.element=function(){return a(M.el)},X.settings=Z)}(jQuery,document,window);var SEARCH_TOTAL=0,SEARCH_HITS=0;if($(function(){$current=1,$max=$(".last").length?parseInt($(".last").attr("href").replace("#","")):0,$(".paginationlink, #next, #prev").click(function(){show($(this),SEARCH_TOTAL,SEARCH_HITS),doPaging()})}),$(document).ready(function(){initJQ()}),void 0===deconcept)var deconcept=new Object;void 0===deconcept.util&&(deconcept.util=new Object),void 0===deconcept.SWFObjectUtil&&(deconcept.SWFObjectUtil=new Object),deconcept.SWFObject=function(a,b,c,d,e,f,g,h,i,j){if(document.getElementById){this.DETECT_KEY=j||"detectflash",this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY),this.params=new Object,this.variables=new Object,this.attributes=new Array,a&&this.setAttribute("swf",a),b&&this.setAttribute("id",b),c&&this.setAttribute("width",c),d&&this.setAttribute("height",d),e&&this.setAttribute("version",new deconcept.PlayerVersion(e.toString().split("."))),this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion(),!window.opera&&document.all&&this.installedVer.major>7&&(deconcept.SWFObject.doPrepUnload=!0),f&&this.addParam("bgcolor",f);var k=g||"high";this.addParam("quality",k),this.setAttribute("useExpressInstall",!1),this.setAttribute("doExpressInstall",!1);var l=h||window.location;this.setAttribute("xiRedirectUrl",l),this.setAttribute("redirectUrl",""),i&&this.setAttribute("redirectUrl",i)}},deconcept.SWFObject.prototype={useExpressInstall:function(a){this.xiSWFPath=a||"expressinstall.swf",this.setAttribute("useExpressInstall",!0)},setAttribute:function(a,b){this.attributes[a]=b},getAttribute:function(a){return this.attributes[a]},addParam:function(a,b){this.params[a]=b},getParams:function(){return this.params},addVariable:function(a,b){this.variables[a]=b},getVariable:function(a){return this.variables[a]},getVariables:function(){return this.variables},getVariablePairs:function(){var a,b=new Array,c=this.getVariables();for(a in c)b[b.length]=a+"="+c[a];return b},getSWFHTML:function(){var a="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){this.getAttribute("doExpressInstall")&&(this.addVariable("MMplayerType","PlugIn"),this.setAttribute("swf",this.xiSWFPath)),a='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'"',a+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';var b=this.getParams();for(var c in b)a+=[c]+'="'+b[c]+'" ';var d=this.getVariablePairs().join("&");d.length>0&&(a+='flashvars="'+d+'"'),a+="/>"}else{this.getAttribute("doExpressInstall")&&(this.addVariable("MMplayerType","ActiveX"),this.setAttribute("swf",this.xiSWFPath)),a='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'">',a+='<param name="movie" value="'+this.getAttribute("swf")+'" />';var b=this.getParams();for(var c in b)a+='<param name="'+c+'" value="'+b[c]+'" />';var d=this.getVariablePairs().join("&");d.length>0&&(a+='<param name="flashvars" value="'+d+'" />'),a+="</object>"}return a},write:function(a){if(this.getAttribute("useExpressInstall")){var b=new deconcept.PlayerVersion([6,0,65]);this.installedVer.versionIsValid(b)&&!this.installedVer.versionIsValid(this.getAttribute("version"))&&(this.setAttribute("doExpressInstall",!0),this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl"))),document.title=document.title.slice(0,47)+" - Flash Player Installation",this.addVariable("MMdoctitle",document.title))}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){return("string"==typeof a?document.getElementById(a):a).innerHTML=this.getSWFHTML(),!0}return""!=this.getAttribute("redirectUrl")&&document.location.replace(this.getAttribute("redirectUrl")),!1}},deconcept.SWFObjectUtil.getPlayerVersion=function(){var a=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=new deconcept.PlayerVersion(b.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")))}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0)for(var c=1,d=3;c;)try{d++,c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+d),a=new deconcept.PlayerVersion([d,0,0])}catch(a){c=null}else{try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(b){try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=new deconcept.PlayerVersion([6,0,21]),c.AllowScriptAccess="always"}catch(b){if(6==a.major)return a}try{c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(a){}}null!=c&&(a=new deconcept.PlayerVersion(c.GetVariable("$version").split(" ")[1].split(",")))}return a},deconcept.PlayerVersion=function(a){this.major=null!=a[0]?parseInt(a[0]):0,this.minor=null!=a[1]?parseInt(a[1]):0,this.rev=null!=a[2]?parseInt(a[2]):0},deconcept.PlayerVersion.prototype.versionIsValid=function(a){return!(this.major<a.major)&&(this.major>a.major||!(this.minor<a.minor)&&(this.minor>a.minor||!(this.rev<a.rev)))},deconcept.util={getRequestParameter:function(a){var b=document.location.search||document.location.hash;if(null==a)return b
;if(b)for(var c=b.substring(1).split("&"),d=0;d<c.length;d++)if(c[d].substring(0,c[d].indexOf("="))==a)return c[d].substring(c[d].indexOf("=")+1);return""}},deconcept.SWFObjectUtil.cleanupSWFs=function(){for(var a=document.getElementsByTagName("OBJECT"),b=a.length-1;b>=0;b--){a[b].style.display="none";for(var c in a[b])"function"==typeof a[b][c]&&(a[b][c]=function(){})}},deconcept.SWFObject.doPrepUnload&&(deconcept.unloadSet||(deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){},window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs)},window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload),deconcept.unloadSet=!0)),!document.getElementById&&document.all&&(document.getElementById=function(a){return document.all[a]});var getQueryParamValue=deconcept.util.getRequestParameter,FlashObject=deconcept.SWFObject,SWFObject=deconcept.SWFObject;$(document).ready(function(){cardHeightEquilze(),$(".flip-front").on("click",function(){$(this).closest(".card-item-wrap").addClass("flip"),cardHeightEquilze()}),$(".card-flip-back").click(function(){$(this).closest(".card-item-wrap").removeClass("flip")})}),$(window).resize(function(){cardHeightEquilze()});var flexVersion="",flexType="",livePattern=new RegExp("genworth.com");$(document).ready(function(){if($("#ltcicalcwrapper")[0]&&(flexVersion=$("#ltcicalcwrapper").attr("flexVersion"),flexType=$("#ltcicalcwrapper").attr("flexType"),$("#ltcCalc").append('<input type="hidden" name="state" id="state" value="'+StateSelector.currentState+'" />'),$("#ltcCalc").append('<input type="hidden" name="productType" id="productType" value="IMOD'+flexVersion+".0"+flexType+'" />'),$(".inputfields2").is(":hidden")&&$("input:radio[name=policyType][value=individual]").attr("checked",!0),$('input:radio[name="policyType"]').change(function(){"couple"==$(this).val()?$(".inputfields2").show():$(".inputfields2").hide();var a=$("input:radio[name=gender2]");!1===a.is(":checked")&&a.filter("[value=female]").prop("checked",!0),setTimeout(resizeLeftColumnFiller,100)}),$("#ltcCalc :input").change(function(){premiumReset(),Genworth_SC.CALCULATOR.trackAtFieldChanged($(this).attr("id"))}),$("a").click(function(a){var b=$(this).attr("tag");void 0!==$(this).attr("href")?void 0!==b&&tagLink($(this).attr("tag")):$(this).attr("data-clickover-open")&&tagLink($(this).attr("tag"))}),$(".ltciCalcDYK").click(function(){setTimeout(function(){$(".expanding-body").is(":visible")&&tagLink("PCFlex${v}${t}:Link_Howdidwegetthenumber")},1e3)}),livePattern.test(window.location.hostname)&&$("#ltcCalc").submit(function(a){a.preventDefault();var b=$(this),c=b.serializeFormJSON();console.log(c.age),Genworth_SC.CALCULATOR.trackAtSubmit("LTC PC Flex"+flexVersion+flexType+" Calculate"),premiumReset(),$.ajax({type:"POST",url:liveActionURI,data:c,dataType:"json",timeout:liveTimeout,success:function(a){void 0!=a.error?(premiumReset(),showError(a.error)):($("#calcPremium").html($.currencyIt(a.premium1)),$("#calcPremium2").html($.currencyIt(a.premium2)),$(".ltciCalcDYK").show(),$("#calcProcessing").css("display","none"),Genworth_SC.CALCULATOR.trackPostSubmit("LTC PC Flex"+flexVersion+flexType+" Calculator Premium"),resizeLeftColumnFiller())},error:function(a,b,c){showError("timeout"==b?"${properties.mess}":c),Genworth_SC.CALCULATOR.trackError(b)}})})),"true"==getQueryVariable("success")){var a="male"==getQueryVariable("gender2")?"1":"2";console.log(".inputfields2 #gender_"+a),$(".inputfields2 #gender_"+a).prop("checked",!0),"couple"==getQueryVariable("policyType")&&(document.getElementById("policyType_2").checked=!0)}}),function(a){a.fn.serializeFormJSON=function(){var b={},c=this.serializeArray();return a.each(c,function(){void 0!==b[this.name]?(b[this.name].push||(b[this.name]=[b[this.name]]),b[this.name].push(this.value||"")):b[this.name]=this.value||""}),b},a.currencyIt=function(a){return"$"+a.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}}(jQuery);var tabnum="",tabordered=!1;$(document).ready(function(){var a=$("body").hasClass(MOBILE_CLASS),b=$(".tabs-wrapper > .menu > li > a");$(".responsive-tab-header-icon")[0]||($(".tabs-wrapper > .menu > li > a").append("<div class='responsive-tab-header-icon'><i class='fa fa-plus-circle'></i></div>"),$(".responsive-tab-header-icon").hide(),$(document).on("click",".responsive-tab-header-wrapper",function(){$(this).find(".responsive-tab-header .responsive-tab-header-icon i").toggleClass("fa-plus-circle"),$(this).find(".responsive-tab-header .responsive-tab-header-icon i").toggleClass("fa-minus-circle"),$(this).toggleClass("responsive-tab-active");var a=$(this).find(".responsive-tab-header").attr("id").slice(1);$("#"+a).slideToggle()})),tabInit(),setTabnum(b.length),a&&reorderTabs("to-mobile")}),$(window).resize(function(){var a=$("body").hasClass(MOBILE_CLASS);a&&!tabordered?reorderTabs("to-mobile"):!a&&tabordered&&reorderTabs("to-desktop")}),function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function b(b,d){var e,f,g=this;if(g.defaults={accessibility:!0,arrows:!0,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button">'+(b+1)+"</button>"},dots:!1,draggable:!0,easing:"linear",fade:!1,infinite:!0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,pauseOnHover:!0,responsive:null,slide:"div",slidesToShow:1,slidesToScroll:1,speed:300,swipe:!0,touchMove:!0,touchThreshold:5,useCSS:!0,vertical:!1},g.initials={animating:!1,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(g,g.initials),g.activeBreakpoint=null,g.animType=null,g.animProp=null,g.breakpoints=[],g.breakpointSettings=[],g.cssTransitions=!1,g.paused=!1,g.positionProp=null,g.$slider=a(b),g.$slidesCache=null,g.transformType=null,g.transitionType=null,g.windowWidth=0,g.windowTimer=null,g.options=a.extend({},g.defaults,d),g.originalSettings=g.options,(e=g.options.responsive||null)&&e.length>-1){for(f in e)e.hasOwnProperty(f)&&(g.breakpoints.push(e[f].breakpoint),g.breakpointSettings[e[f].breakpoint]=e[f].settings);g.breakpoints.sort(function(a,b){return b-a})}g.autoPlay=a.proxy(g.autoPlay,g),g.autoPlayClear=a.proxy(g.autoPlayClear,g),g.changeSlide=a.proxy(g.changeSlide,g),g.setPosition=a.proxy(g.setPosition,g),g.swipeHandler=a.proxy(g.swipeHandler,g),g.dragHandler=a.proxy(g.dragHandler,g),g.keyHandler=a.proxy(g.keyHandler,g),g.autoPlayIterator=a.proxy(g.autoPlayIterator,g),g.instanceUid=c++,g.init()}var c=0;return b}(),b.prototype.addSlide=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(c<0||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):!0===d?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).remove(),e.$slideTrack.append(e.$slides),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateSlide=function(b,c){var d={},e=this;!1===e.transformsEnabled?!1===e.options.vertical?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):!1===e.cssTransitions?a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){!1===e.options.vertical?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}}):(e.applyTransition(),!1===e.options.vertical?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.applyTransition=function(a){var b=this,c={};!1===b.options.fade?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,!1===b.options.fade?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&!0!==a.paused&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;!1===a.options.infinite?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1==0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;!0===b.options.arrows&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a('<a class="slick-prev" title="Previous" alt="Previous"><i class="fa fa-chevron-left"></i></a>').appendTo(b.$slider),b.$nextArrow=a('<a class="slick-next" title="Next" alt="Next"><i class="fa fa-chevron-right"></i></a>').appendTo(b.$slider),!0!==b.options.infinite&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var b,c,d=this;if(!0===d.options.dots&&d.slideCount>d.options.slidesToShow){for(c='<ul class="slick-dots">',b=0;b<=d.getDotCount();b+=1)c+="<li>"+d.options.customPaging.call(this,d,b)+"</li>";c+="</ul>",d.$dots=a(c).appendTo(d.$slider),d.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),!0===b.options.centerMode&&(b.options.infinite=!0,b.options.slidesToScroll=1,b.options.slidesToShow%2==0&&(b.options.slidesToShow=3)),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),!0===b.options.accessibility&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),!0===b.options.draggable&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var b,c,d=this;if(d.originalSettings.responsive&&d.originalSettings.responsive.length>-1&&null!==d.originalSettings.responsive){c=null;for(b in d.breakpoints)d.breakpoints.hasOwnProperty(b)&&a(window).width()<d.breakpoints[b]&&(c=d.breakpoints[b]);null!==c?null!==d.activeBreakpoint?c!==d.activeBreakpoint&&(d.activeBreakpoint=c,d.options=a.extend({},d.defaults,d.breakpointSettings[c]),d.refresh()):(d.activeBreakpoint=c,d.options=a.extend({},d.defaults,d.breakpointSettings[c]),d.refresh()):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=a.extend({},d.defaults,d.originalSettings),d.refresh())}},b.prototype.changeSlide=function(b){var c=this;switch(b.data.message){case"previous":c.slideHandler(c.currentSlide-c.options.slidesToScroll);break;case"next":c.slideHandler(c.currentSlide+c.options.slidesToScroll);break;case"index":c.slideHandler(a(b.target).parent().index()*c.options.slidesToScroll);break;default:return!1}},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.unwrap().unwrap(),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",!1===b.options.fade?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;!1===c.cssTransitions?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).remove(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=function(){return this.currentSlide},b.prototype.getDotCount=function(){var a,b=this,c=0,d=0,e=0;for(a=!0===b.options.infinite?b.slideCount+b.options.slidesToShow-b.options.slidesToScroll:b.slideCount;c<a;)e++,d+=b.options.slidesToScroll,c=d+b.options.slidesToShow;return e},b.prototype.getLeft=function(a){var b,c=this,d=0;return c.slideOffset=0,b=c.$slides.first().outerHeight(),!0===c.options.infinite?(c.slideCount>c.options.slidesToShow&&(c.slideOffset=c.slideWidth*c.options.slidesToShow*-1,d=b*c.options.slidesToShow*-1),c.slideCount%c.options.slidesToScroll!=0&&a+c.options.slidesToScroll>c.slideCount&&c.slideCount>c.options.slidesToShow&&(c.slideOffset=c.slideCount%c.options.slidesToShow*c.slideWidth*-1,d=c.slideCount%c.options.slidesToShow*b*-1)):c.slideCount%c.options.slidesToShow!=0&&a+c.options.slidesToScroll>c.slideCount&&c.slideCount>c.options.slidesToShow&&(c.slideOffset=c.options.slidesToShow*c.slideWidth-c.slideCount%c.options.slidesToShow*c.slideWidth,d=c.slideCount%c.options.slidesToShow*b),!0===c.options.centerMode&&(c.slideOffset+=c.slideWidth*Math.floor(c.options.slidesToShow/2)-c.slideWidth),!1===c.options.vertical?a*c.slideWidth*-1+c.slideOffset:a*b*-1+d},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.checkResponsive()),null!==b.options.onInit&&b.options.onInit.call(this,b)},b.prototype.initArrowEvents=function(){var a=this;!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;!0===b.options.dots&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide)},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),!0===b.options.pauseOnHover&&!0===b.options.autoplay&&(b.$list.on("mouseenter.slick",b.autoPlayClear),b.$list.on("mouseleave.slick",b.autoPlay)),!0===b.options.accessibility&&b.$list.on("keydown.slick",b.keyHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),!0===a.options.dots&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),!0===a.options.autoplay&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){var b,c,d,e,f=this;!0===f.options.centerMode||!0===f.options.fade?(d=f.options.slidesToShow+f.currentSlide-1,e=d+f.options.slidesToShow+2):(d=f.options.infinite?f.options.slidesToShow+f.currentSlide:f.currentSlide,e=d+f.options.slidesToShow),b=f.$slider.find(".slick-slide").slice(d,e),a("img[data-lazy]",b).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})}),f.currentSlide>=f.slideCount-f.options.slidesToShow?(c=f.$slider.find(".slick-cloned").slice(0,f.options.slidesToShow),a("img[data-lazy]",c).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})})):0===f.currentSlide&&(c=f.$slider.find(".slick-cloned").slice(-1*f.options.slidesToShow),a("img[data-lazy]",c).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})}))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.postSlide=function(a){var b=this;null!==b.options.onAfterChange&&b.options.onAfterChange.call(this,b,a),b.animating=!1,b.setPosition(),b.swipeLeft=null,!0===b.options.autoplay&&!1===b.paused&&b.autoPlay()},b.prototype.progressiveLazyLoad=function(){var b,c,d=this;(b=a("img[data-lazy]").not("[src]").length)>0&&(c=a(a("img[data-lazy]",d.$slider).not("[src]").get(0)),c.attr("src",c.attr("data-lazy")).removeClass("slick-loading").load(function(){d.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.currentSlide=c,b.init()},b.prototype.reinit=function(){var a=this;a.$slides=a.$slideTrack.children(a.options.slide).addClass("slick-slide"),a.slideCount=a.$slides.length,a.currentSlide>=a.slideCount&&0!==a.currentSlide&&(a.currentSlide=a.currentSlide-a.options.slidesToScroll),a.setProps(),a.setupInfinite(),a.buildArrows(),a.updateArrows(),a.initArrowEvents(),a.buildDots(),a.updateDots(),a.initDotEvents(),a.setSlideClasses(0),a.setPosition(),null!==a.options.onReInit&&a.options.onReInit.call(this,a)},b.prototype.removeSlide=function(a,b){var c=this;if("boolean"==typeof a?(b=a,a=!0===b?0:c.slideCount-1):a=!0===b?--a:a,c.slideCount<1||a<0||a>c.slideCount-1)return!1;c.unload(),c.$slideTrack.children(this.options.slide).eq(a).remove(),c.$slides=c.$slideTrack.children(this.options.slide),c.$slideTrack.children(this.options.slide).remove(),c.$slideTrack.append(c.$slides),c.$slidesCache=c.$slides,c.reinit()},b.prototype.setCSS=function(a){var b,c,d=this,e={};b="left"==d.positionProp?a+"px":"0px",c="top"==d.positionProp?a+"px":"0px",e[d.positionProp]=a,!1===d.transformsEnabled?d.$slideTrack.css(e):(e={},!1===d.cssTransitions?(e[d.animType]="translate("+b+", "+c+")",d.$slideTrack.css(e)):(e[d.animType]="translate3d("+b+", "+c+", 0px)",d.$slideTrack.css(e)))},b.prototype.setDimensions=function(){var a=this;a.options.centerMode,a.$slideTrack.children(".slick-slide").width(a.slideWidth),!1===a.options.vertical?(a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length)),!0===a.options.centerMode&&a.$list.css({padding:"0px "+a.options.centerPadding})):(a.$list.height(a.$slides.first().outerHeight()*a.options.slidesToShow),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight()*a.$slideTrack.children(".slick-slide").length)),!0===a.options.centerMode&&a.$list.css({padding:a.options.centerPadding+" 0px"}))},b.prototype.setFade=function(){var b,c=this;c.$slides.each(function(d,e){b=c.slideWidth*d*-1,a(e).css({position:"relative",left:b,top:0,zIndex:800,opacity:0})}),c.$slides.eq(c.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setPosition=function(){var a=this;a.setValues(),a.setDimensions(),!1===a.options.fade?a.setCSS(a.getLeft(a.currentSlide)):a.setFade()},b.prototype.setProps=function(){var a=this;a.positionProp=!0===a.options.vertical?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),void 0===document.body.style.WebkitTransition&&void 0===document.body.style.MozTransition&&void 0===document.body.style.msTransition||!0===a.options.useCSS&&(a.cssTransitions=!0),void 0!==document.body.style.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition"),void 0!==document.body.style.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition"),void 0!==document.body.style.msTransform&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType},b.prototype.setValues=function(){var a=this;a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),!1===a.options.vertical?a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow):a.slideWidth=Math.ceil(a.listWidth)},b.prototype.setSlideClasses=function(a){var b,c,d,e=this;e.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),c=e.$slider.find(".slick-slide"),!0===e.options.centerMode?(b=Math.floor(e.options.slidesToShow/2),a>=b&&a<=e.slideCount-1-b?e.$slides.slice(a-b,a+b+1).addClass("slick-active"):(d=e.options.slidesToShow+a,c.slice(d-b+1,d+b+2).addClass("slick-active")),0===a?c.eq(c.length-1-e.options.slidesToShow).addClass("slick-center"):a===e.slideCount-1&&c.eq(e.options.slidesToShow).addClass("slick-center"),e.$slides.eq(a).addClass("slick-center")):a>0&&a<e.slideCount-e.options.slidesToShow?e.$slides.slice(a,a+e.options.slidesToShow).addClass("slick-active"):c.length<=e.options.slidesToShow?c.addClass("slick-active"):(d=!0===e.options.infinite?e.options.slidesToShow+a:a,c.slice(d,d+e.options.slidesToShow).addClass("slick-active")),"ondemand"===e.options.lazyLoad&&e.lazyLoad()},b.prototype.setupInfinite=function(){var b,c,d,e=this;if(!0!==e.options.fade&&!0!==e.options.vertical||(e.options.centerMode=!1),!0===e.options.infinite&&!1===e.options.fade&&(c=null,e.slideCount>e.options.slidesToShow)){for(d=!0===e.options.centerMode?e.options.slidesToShow+1:e.options.slidesToShow,b=e.slideCount;b>e.slideCount-d;b-=1)c=b-1,a(e.$slides[c]).clone().attr("id","").prependTo(e.$slideTrack).addClass("slick-cloned");for(b=0;b<d;b+=1)c=b,a(e.$slides[c]).clone().attr("id","").appendTo(e.$slideTrack).addClass("slick-cloned");e.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.slideHandler=function(a){var b,c,d,e,f=null,g=this;return!0!==g.animating&&(b=a,f=g.getLeft(b),d=g.getLeft(g.currentSlide),e=g.slideCount%g.options.slidesToScroll!=0?g.options.slidesToScroll:0,g.currentLeft=null===g.swipeLeft?d:g.swipeLeft,!1===g.options.infinite&&(a<0||a>g.slideCount-g.options.slidesToShow+e)?(!1===g.options.fade&&(b=g.currentSlide,g.animateSlide(d,function(){g.postSlide(b)})),!1):(!0===g.options.autoplay&&clearInterval(g.autoPlayTimer),c=b<0?g.slideCount%g.options.slidesToScroll!=0?g.slideCount-g.slideCount%g.options.slidesToScroll:g.slideCount-g.options.slidesToScroll:b>g.slideCount-1?0:b,g.animating=!0,null!==g.options.onBeforeChange&&a!==g.currentSlide&&g.options.onBeforeChange.call(this,g,g.currentSlide,c),g.currentSlide=c,g.setSlideClasses(g.currentSlide),g.updateDots(),g.updateArrows(),!0===g.options.fade?(g.fadeSlide(c,function(){g.postSlide(c)}),!1):void g.animateSlide(f,function(){g.postSlide(c)})))},b.prototype.startLoad=function(){var a=this;!0===a.options.arrows&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),!0===a.options.dots&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),d<0&&(d=360-Math.abs(d)),d<=45&&d>=0?"left":d<=360&&d>=315?"left":d>=135&&d<=225?"right":"vertical"},b.prototype.swipeEnd=function(b){var c=this;if(c.$list.removeClass("dragging"),void 0===c.touchObject.curX)return!1;if(c.touchObject.swipeLength>=c.touchObject.minSwipe)switch(a(b.target).on("click.slick",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.slick")}),c.swipeDirection()){case"left":c.slideHandler(c.currentSlide+c.options.slidesToScroll),c.touchObject={};break;case"right":c.slideHandler(c.currentSlide-c.options.slidesToScroll),c.touchObject={}}else c.touchObject.startX!==c.touchObject.curX&&(c.slideHandler(c.currentSlide),c.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(!1===b.options.swipe||"ontouchend"in document&&!1===b.options.swipe)&&!1!==b.options.draggable&&(!1!==b.options.draggable||a.originalEvent.touches))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var b,c,d,e=this;return d=void 0!==a.originalEvent?a.originalEvent.touches:null,b=e.getLeft(e.currentSlide),!(!e.$list.hasClass("dragging")||d&&1!==d.length)&&(e.touchObject.curX=void 0!==d?d[0].pageX:a.clientX,e.touchObject.curY=void 0!==d?d[0].pageY:a.clientY,e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curX-e.touchObject.startX,2))),"vertical"!==e.swipeDirection()?(void 0!==a.originalEvent&&e.touchObject.swipeLength>4&&a.preventDefault(),c=e.touchObject.curX>e.touchObject.startX?1:-1,!1===e.options.vertical?e.swipeLeft=b+e.touchObject.swipeLength*c:e.swipeLeft=b+e.touchObject.swipeLength*(e.$list.height()/e.listWidth)*c,!0!==e.options.fade&&!1!==e.options.touchMove&&(!0===e.animating?(e.swipeLeft=null,!1):void e.setCSS(e.swipeLeft))):void 0)},b.prototype.swipeStart=function(a){var b,c=this;if(1!==c.touchObject.fingerCount||c.slideCount<=c.options.slidesToShow)return c.touchObject={},!1;void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(b=a.originalEvent.touches[0]),c.touchObject.startX=c.touchObject.curX=void 0!==b?b.pageX:a.clientX,c.touchObject.startY=c.touchObject.curY=void 0!==b?b.pageY:a.clientY,c.$list.addClass("dragging")},b.prototype.unfilterSlides=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).remove(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")},b.prototype.updateArrows=function(){var a=this;!0===a.options.arrows&&!0!==a.options.infinite&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(a.currentSlide/a.options.slidesToScroll).addClass("slick-active"))},a.fn.slick=function(a){return this.each(function(c,d){d.slick=new b(d,a)})},a.fn.slickAdd=function(a,b,c){return this.each(function(d,e){e.slick.addSlide(a,b,c)})},a.fn.slickCurrentSlide=function(){return this.get(0).slick.getCurrent()},a.fn.slickFilter=function(a){return this.each(function(b,c){c.slick.filterSlides(a)})},a.fn.slickGoTo=function(a){return this.each(function(b,c){c.slick.slideHandler(a)})},a.fn.slickNext=function(){return this.each(function(a,b){b.slick.changeSlide({data:{message:"next"}})})},a.fn.slickPause=function(){return this.each(function(a,b){b.slick.autoPlayClear(),b.slick.paused=!0})},a.fn.slickPlay=function(){return this.each(function(a,b){b.slick.paused=!1,b.slick.autoPlay()})},a.fn.slickPrev=function(){return this.each(function(a,b){b.slick.changeSlide({data:{message:"previous"}})})},a.fn.slickRemove=function(a,b){return this.each(function(c,d){d.slick.removeSlide(a,b)})},a.fn.slickSetOption=function(a,b,c){return this.each(function(d,e){e.slick.options[a]=b,!0===c&&(e.slick.unload(),e.slick.reinit())})},a.fn.slickUnfilter=function(){return this.each(function(a,b){b.slick.unfilterSlides()})},a.fn.unslick=function(){return this.each(function(a,b){b.slick.destroy()})}}),$(document).ready(function(){$(".footer-head").click(function(){$("body").hasClass(MOBILE_CLASS)&&($(this).children("i").toggleClass("fa-chevron-down fa-chevron-up"),$(".footer-menu ul ul").slideUp().addClass("closed"),$(this).next().is(":visible")||$(this).next().slideDown().removeClass("closed"))})}),$(window).resize(function(){$("body").hasClass(MOBILE_CLASS)?$(".footer-head + .closed").hide():$(".footer-head + .closed").show()}),$(document).ready(function(){if($("body").has(".nav-aside").length){var a=".mnav-container .child-columns .breadcrumb > div";$(a).append('<i id="truncnav-toggle" class="navicon fa fa-chevron-circle-down"></i>'),$(".nav-aside").clone().appendTo(a),$(".mnav-container .child-columns .breadcrumb > div > .nav-aside").addClass("truncnav-aside"),$("#truncnav-toggle.navicon").click(function(){$(this).toggleClass("fa-chevron-circle-down"),
$(this).toggleClass("fa-chevron-circle-up"),$(".truncnav-aside").slideToggle(),$("body").toggleClass("nav-left-showing")}),$(document).on("click",".nav-left-showing",function(a){var b=$(a.target);b.is("#truncnav-toggle")||b.hasClass("truncnav-aside")||b.hasClass("nav-aside-children")||($("#truncnav-toggle").addClass("fa-chevron-circle-down"),$("#truncnav-toggle").removeClass("fa-chevron-circle-up"),$(".truncnav-aside").slideToggle(),$("body").removeClass("nav-left-showing"))})}}),function(a){a.fn.rtResponsiveTables=function(b){function c(b){return!a.trim(b.html())}function d(b){rt_css_code='<style type="text/css">',a(b).find("th").each(function(c,d){rt_css_code+=b+".rt-vertical-table td:nth-of-type("+(c+1)+'):before { content: "'+a(this).text()+'"; }'}),rt_css_code+="</style>",a(rt_css_code).appendTo("head")}function e(b){return rt_table_width=0,b.hasClass("rt-vertical-table")?rt_table_width=b.outerWidth():(b.find("th").each(function(b,c){rt_table_width+=a(this).outerWidth()}),rt_table_width=rt_table_width),rt_table_width}function f(){a("table.rt-responsive-table").length&&a("table.rt-responsive-table").each(function(b){rt_containers_width=a(this).parent().width(),rt_current_width=e(a(this))-1,rt_max_width=a(this).attr("data-rt-max-width"),rt_has_class_rt_vertical_table=a(this).hasClass("rt-vertical-table"),a(this).attr("data-rtContainerBreakPoint")?rt_user_defined_container_breakpoint=a(this).attr("data-rtContainerBreakPoint"):rt_user_defined_container_breakpoint=g.containerBreakPoint,rt_containers_width<rt_current_width||rt_containers_width<=rt_user_defined_container_breakpoint?(a(this).addClass("rt-vertical-table"),rt_max_width>rt_current_width&&rt_max_width>rt_user_defined_container_breakpoint?a(this).attr("data-rt-max-width",rt_current_width):rt_max_width>rt_current_width&&rt_max_width<=rt_user_defined_container_breakpoint&&a(this).attr("data-rt-max-width",rt_user_defined_container_breakpoint)):rt_containers_width>rt_max_width&&rt_containers_width>rt_user_defined_container_breakpoint&&(a(this).removeClass("rt-vertical-table"),rt_max_width>rt_current_width&&!rt_has_class_rt_vertical_table&&rt_max_width>rt_user_defined_container_breakpoint&&!rt_has_class_rt_vertical_table?a(this).attr("data-rt-max-width",rt_current_width):rt_max_width>rt_current_width&&!rt_has_class_rt_vertical_table&&rt_max_width<=rt_user_defined_container_breakpoint&&!rt_has_class_rt_vertical_table&&a(this).attr("data-rt-max-width",rt_user_defined_container_breakpoint))})}var g=a.extend({containerBreakPoint:0},b);return rtStartingOuterWidth=a(window).width(),is_iOS=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),rt_responsive_table_object=this,rt_responsive_table_object.each(function(b,g){a(this).addClass("rt-responsive-table-"+b).addClass("rt-responsive-table"),b==rt_responsive_table_object.length-1&&(a(window).resize(function(){(!is_iOS||is_iOS&&rtStartingOuterWidth!==a(window).width())&&(rtStartingOuterWidth=a(window).width(),f())}),rt_responsive_table_count=a("table.rt-responsive-table").length,a("table.rt-responsive-table").each(function(b,g){d("table.rt-responsive-table-"+b),a("table.rt-responsive-table-"+b).attr("data-rt-max-width",e(a(this))),a(this).find("td,th").each(function(b,d){c(a(this))&&a(this).html("&#160;")}),rt_responsive_table_count-1==b&&f()}))}),this}}(jQuery),$(document).ready(function(){$(".responsive-table").rtResponsiveTables({containerBreakPoint:480}),$(".responsive-table tr").each(function(a){a>0&&$(this).find("td").each(function(a){a>0&&$(this).wrapInner('<div class="responsive-table-divider"></div>')})}),$(".responsive-two-header-table").each(function(a){$this=$(this),$this.after('<table class="table table-bordered responsive-two-header-table-small" id="responsive-two-header-table-'+a+'"></table>'),tableHeaders=[],tableSubHeaders=[],tableContent=[],$this.find("th").each(function(a){a>0&&tableHeaders.push($(this).text())}),$this.find("tr").each(function(a){a>0&&$(this).find("td").each(function(a){0==a?tableSubHeaders.push($(this).text()):tableContent.push($(this).text())})}),contentPos=0,tableHeadersLength=tableHeaders.length,darkHeaderClass="responsive-two-header-table-small-dark",lightHeaderClass="";for(var b=0;b<tableHeadersLength;b++){$(".responsive-two-header-table-small").append('<tr class="responsive-two-header-table-small-header"><td colspan="2">'+tableHeaders[b]+"</td></tr>"),curContentPos=contentPos;for(var c=0;c<tableSubHeaders.length;c++)c%2==0?$(".responsive-two-header-table-small").append('<tr class="responsive-two-header-table-small-content responsive-two-header-table-small-dark"><td class="responsive-two-header-table-small-subheader">'+tableSubHeaders[c]+"</td><td>"+tableContent[curContentPos]+"</td></tr>"):$(".responsive-two-header-table-small").append('<tr class="responsive-two-header-table-small-content"><td class="responsive-two-header-table-small-subheader">'+tableSubHeaders[c]+"</td><td>"+tableContent[curContentPos]+"</td></tr>"),curContentPos+=tableHeadersLength;contentPos++}})}),$(document).ready(function(){$("[data-setevaronly]").on("click touchstart",function(){var a=$(this).data("setevaronly");setEVarOnly("Links",a)})});var documentWrite=function(a){var b=!1;return function(a){b||(b=!0,document.write(a))}}(),fRef=[];window.addEventListener&&(window.addEventListener("load",makeImagesResponsive,!1),window.addEventListener("resize",makeImagesResponsive,!1)),function(a){a.fn.teltag=function(){var a=this.attr("data-teltag");this.attr("href",a)}}(jQuery),$(document).ready(function(){$(".touch .teltag").each(function(){$(this).teltag()})});
(function(a){a.fn.extend({tabify:function(e){function c(b){hash=a(b).find("a").attr("href");return hash=hash.substring(0,hash.length-4)}function f(b){a(b).addClass("active");a(c(b)).show();a(b).siblings("li").each(function(){a(this).removeClass("active");a(c(this)).hide()})}return this.each(function(){function b(){location.hash&&a(d).find("a[href="+location.hash+"]").length>0&&f(a(d).find("a[href="+location.hash+"]").parent())}var d=this,g={ul:a(d)};a(this).find("li a").each(function(){a(this).attr("href", a(this).attr("href")+"-tab")});location.hash&&b();setInterval(b,100);a(this).find("li").each(function(){a(this).hasClass("active")?a(c(this)).show():a(c(this)).hide()});e&&e(g)})}})})(jQuery);
/* Copyright (c) 2009 Michael Manning (actingthemaggot.com) Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.*/
(function(A){A.fn.extend({currency:function(B){var C={s:",",d:".",c:2};C=A.extend({},C,B);return this.each(function(){var D=(C.n||A(this).text());D=(typeof D==="number")?D:((/\./.test(D))?parseFloat(D):parseInt(D)),s=D<0?"-":"",i=parseInt(D=Math.abs(+D||0).toFixed(C.c))+"",j=(j=i.length)>3?j%3:0;A(this).text(s+(j?i.substr(0,j)+C.s:"")+i.substr(j).replace(/(\d{3})(?=\d)/g,"$1"+C.s)+(C.c?C.d+Math.abs(D-i).toFixed(C.c).slice(2):""));return this})}})})(jQuery);jQuery.currency=function(){var A=jQuery("<span>").text(arguments[0]).currency(arguments[1]);return A.text()};
(function($){$.formatCurrency={};$.formatCurrency.regions=[];$.formatCurrency.regions[""]={symbol:"$",positiveFormat:"%s%n",negativeFormat:"(%s%n)",decimalSymbol:".",digitGroupSymbol:",",groupDigits:true};
$.fn.formatCurrency=function(destination,settings){if(arguments.length==1&&typeof destination!=="string"){settings=destination;destination=false
}var defaults={name:"formatCurrency",colorize:false,region:"",global:true,roundToDecimalPlace:0,eventOnDecimalsEntered:false};defaults=$.extend(defaults,$.formatCurrency.regions[""]);
settings=$.extend(defaults,settings);if(settings.region.length>0){settings=$.extend(settings,getRegionOrCulture(settings.region))}settings.regex=generateRegex(settings);
return this.each(function(){$this=$(this);var num="0";num=$this[$this.is("input, select, textarea")?"val":"html"]();if(num.search("\\(")>=0){num="-"+num
}if(num===""||(num==="-"&&settings.roundToDecimalPlace===-1)){return}if(isNaN(num)){num=num.replace(settings.regex,"");if(num===""||(num==="-"&&settings.roundToDecimalPlace===-1)){return
}if(settings.decimalSymbol!="."){num=num.replace(settings.decimalSymbol,".")}if(isNaN(num)){num="0"}}var numParts=String(num).split(".");var isPositive=(num==Math.abs(num));
var hasDecimals=(numParts.length>1);var decimals=(hasDecimals?numParts[1].toString():"0");var originalDecimals=decimals;num=Math.abs(numParts[0]);
num=isNaN(num)?0:num;if(settings.roundToDecimalPlace>=0){decimals=parseFloat("1."+decimals);decimals=decimals.toFixed(settings.roundToDecimalPlace);
if(decimals.substring(0,1)=="2"){num=Number(num)+1}decimals=decimals.substring(2)}num=String(num);if(settings.groupDigits){for(var i=0;i<Math.floor((num.length-(1+i))/3);
i++){num=num.substring(0,num.length-(4*i+3))+settings.digitGroupSymbol+num.substring(num.length-(4*i+3))}}if((hasDecimals&&settings.roundToDecimalPlace==-1)||settings.roundToDecimalPlace>0){num+=settings.decimalSymbol+decimals
}var format=isPositive?settings.positiveFormat:settings.negativeFormat;var money=format.replace(/%s/g,settings.symbol);money=money.replace(/%n/g,num);
var $destination=$([]);if(!destination){$destination=$this}else{$destination=$(destination)}$destination[$destination.is("input, select, textarea")?"val":"html"](money);
if(hasDecimals&&settings.eventOnDecimalsEntered&&originalDecimals.length>settings.roundToDecimalPlace){$destination.trigger("decimalsEntered",originalDecimals)
}if(settings.colorize){$destination.css("color",isPositive?"black":"red")}})};$.fn.toNumber=function(settings){var defaults=$.extend({name:"toNumber",region:"",global:true},$.formatCurrency.regions[""]);
settings=jQuery.extend(defaults,settings);if(settings.region.length>0){settings=$.extend(settings,getRegionOrCulture(settings.region))}settings.regex=generateRegex(settings);
return this.each(function(){var method=$(this).is("input, select, textarea")?"val":"html";$(this)[method]($(this)[method]().replace("(","(-").replace(settings.regex,""))
})};$.fn.asNumber=function(settings){var defaults=$.extend({name:"asNumber",region:"",parse:true,parseType:"Float",global:true},$.formatCurrency.regions[""]);
settings=jQuery.extend(defaults,settings);if(settings.region.length>0){settings=$.extend(settings,getRegionOrCulture(settings.region))}settings.regex=generateRegex(settings);
settings.parseType=validateParseType(settings.parseType);var method=$(this).is("input, select, textarea")?"val":"html";var num=$(this)[method]();
num=num?num:"";num=num.replace("(","(-");num=num.replace(settings.regex,"");if(!settings.parse){return num}if(num.length==0){num="0"}if(settings.decimalSymbol!="."){num=num.replace(settings.decimalSymbol,".")
}return window["parse"+settings.parseType](num)};function getRegionOrCulture(region){var regionInfo=$.formatCurrency.regions[region];if(regionInfo){return regionInfo
}else{if(/(\w+)-(\w+)/g.test(region)){var culture=region.replace(/(\w+)-(\w+)/g,"$1");return $.formatCurrency.regions[culture]}}return null}function validateParseType(parseType){switch(parseType.toLowerCase()){case"int":return"Int";
case"float":return"Float";default:throw"invalid parseType"}}function generateRegex(settings){if(settings.symbol===""){return new RegExp("[^\\d"+settings.decimalSymbol+"-]","g")
}else{var symbol=settings.symbol.replace("$","\\$").replace(".","\\.");return new RegExp(symbol+"|[^\\d"+settings.decimalSymbol+"-]","g")}}})(jQuery);
// Ion.RangeSlider
// version 2.1.3 Build: 352
// Â© Denis Ineshin, 2016
// https://github.com/IonDen
//
// Project page:    http://ionden.com/a/plugins/ion.rangeSlider/en.html
// GitHub page:     https://github.com/IonDen/ion.rangeSlider
//
// Released under MIT licence:
// http://ionden.com/a/plugins/licence-en.html
// =====================================================================================================================
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory(jQuery, document, window, navigator));
    } else {
        factory(jQuery, document, window, navigator);
    }
} (function ($, document, window, navigator, undefined) {
    "use strict";

    // =================================================================================================================
    // Service

    var plugin_count = 0;

    // IE8 fix
    var is_old_ie = (function () {
        var n = navigator.userAgent,
            r = /msie\s\d+/i,
            v;
        if (n.search(r) > 0) {
            v = r.exec(n).toString();
            v = v.split(" ")[1];
            if (v < 9) {
                $("html").addClass("lt-ie9");
                return true;
            }
        }
        return false;
    } ());
    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;
            var slice = [].slice;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
                bound = function () {

                    if (this instanceof bound) {

                        var F = function(){};
                        F.prototype = target.prototype;
                        var self = new F();

                        var result = target.apply(
                            self,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return self;

                    } else {

                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };

            return bound;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(searchElement, fromIndex) {
            var k;
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var O = Object(this);
            var len = O.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = +fromIndex || 0;
            if (Math.abs(n) === Infinity) {
                n = 0;
            }
            if (n >= len) {
                return -1;
            }
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            while (k < len) {
                if (k in O && O[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }



    // =================================================================================================================
    // Template

    var base_html =
        '<span class="irs">' +
        '<span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span>' +
        '<span class="irs-min">0</span><span class="irs-max">1</span>' +
        '<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-num-wrap"><span class="irs-single">0</span><span id="sliderSuffix"></span></span>' +
        '</span>' +
        '<span class="irs-grid"></span>' +
        '<span class="irs-bar"></span>';

    var single_html =
        '<span class="irs-bar-edge"></span>' +
        '<span class="irs-shadow shadow-single"></span>' +
        '<span id="irsSlider" class="irs-slider single" tabindex="0" role="slider"></span>';

    var double_html =
        '<span class="irs-shadow shadow-from"></span>' +
        '<span class="irs-shadow shadow-to"></span>' +
        '<span class="irs-slider from"></span>' +
        '<span class="irs-slider to"></span>';

    var disable_html =
        '<span class="irs-disable-mask"></span>';



    // =================================================================================================================
    // Core

    /**
     * Main plugin constructor
     *
     * @param input {Object} link to base input element
     * @param options {Object} slider config
     * @param plugin_count {Number}
     * @constructor
     */
    var IonRangeSlider = function (input, options, plugin_count) {
        this.VERSION = "2.1.3";
        this.input = input;
        this.plugin_count = plugin_count;
        this.current_plugin = 0;
        this.calc_count = 0;
        this.update_tm = 0;
        this.old_from = 0;
        this.old_to = 0;
        this.old_min_interval = null;
        this.raf_id = null;
        this.dragging = false;
        this.force_redraw = false;
        this.no_diapason = false;
        this.is_key = false;
        this.is_update = false;
        this.is_start = true;
        this.is_finish = false;
        this.is_active = false;
        this.is_resize = false;
        this.is_click = false;

        // cache for links to all DOM elements
        this.$cache = {
            win: $(window),
            body: $(document.body),
            input: $(input),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        };

        // storage for measure variables
        this.coords = {
            // left
            x_gap: 0,
            x_pointer: 0,

            // width
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,

            // percents
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,

            // grid
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        };

        // storage for labels measure variables
        this.labels = {
            // width
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,

            // percents
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };



        /**
         * get and validate config
         */
        var $inp = this.$cache.input,
            val = $inp.prop("value"),
            config, config_from_data, prop;

        // default config
        config = {
            type: "single",

            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,

            min_interval: 0,
            max_interval: 0,
            drag_interval: false,

            values: [],
            p_values: [],

            from_fixed: false,
            from_min: null,
            from_max: null,
            from_shadow: false,

            to_fixed: false,
            to_min: null,
            to_max: null,
            to_shadow: false,

            prettify_enabled: true,
            prettify_separator: " ",
            prettify: null,

            force_edges: false,

            keyboard: false,
            keyboard_step: 5,

            grid: false,
            grid_margin: true,
            grid_num: 4,
            grid_snap: false,

            hide_min_max: false,
            hide_from_to: false,

            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: true,
            values_separator: " â€” ",

            input_values_separator: ";",

            disable: false,

            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        };



        // config from data-attributes extends js config
        config_from_data = {
            type: $inp.data("type"),

            min: $inp.data("min"),
            max: $inp.data("max"),
            from: $inp.data("from"),
            to: $inp.data("to"),
            step: $inp.data("step"),

            min_interval: $inp.data("minInterval"),
            max_interval: $inp.data("maxInterval"),
            drag_interval: $inp.data("dragInterval"),

            values: $inp.data("values"),

            from_fixed: $inp.data("fromFixed"),
            from_min: $inp.data("fromMin"),
            from_max: $inp.data("fromMax"),
            from_shadow: $inp.data("fromShadow"),

            to_fixed: $inp.data("toFixed"),
            to_min: $inp.data("toMin"),
            to_max: $inp.data("toMax"),
            to_shadow: $inp.data("toShadow"),

            prettify_enabled: $inp.data("prettifyEnabled"),
            prettify_separator: $inp.data("prettifySeparator"),

            force_edges: $inp.data("forceEdges"),

            keyboard: $inp.data("keyboard"),
            keyboard_step: $inp.data("keyboardStep"),

            grid: $inp.data("grid"),
            grid_margin: $inp.data("gridMargin"),
            grid_num: $inp.data("gridNum"),
            grid_snap: $inp.data("gridSnap"),

            hide_min_max: $inp.data("hideMinMax"),
            hide_from_to: $inp.data("hideFromTo"),

            prefix: $inp.data("prefix"),
            postfix: $inp.data("postfix"),
            max_postfix: $inp.data("maxPostfix"),
            decorate_both: $inp.data("decorateBoth"),
            values_separator: $inp.data("valuesSeparator"),

            input_values_separator: $inp.data("inputValuesSeparator"),

            disable: $inp.data("disable")
        };
        config_from_data.values = config_from_data.values && config_from_data.values.split(",");

        for (prop in config_from_data) {
            if (config_from_data.hasOwnProperty(prop)) {
                if (!config_from_data[prop] && config_from_data[prop] !== 0) {
                    delete config_from_data[prop];
                }
            }
        }



        // input value extends default config
        if (val) {
            val = val.split(config_from_data.input_values_separator || options.input_values_separator || ";");

            if (val[0] && val[0] == +val[0]) {
                val[0] = +val[0];
            }
            if (val[1] && val[1] == +val[1]) {
                val[1] = +val[1];
            }

            if (options && options.values && options.values.length) {
                config.from = val[0] && options.values.indexOf(val[0]);
                config.to = val[1] && options.values.indexOf(val[1]);
            } else {
                config.from = val[0] && +val[0];
                config.to = val[1] && +val[1];
            }
        }



        // js config extends default config
        $.extend(config, options);


        // data config extends config
        $.extend(config, config_from_data);
        this.options = config;



        // validate config, to be sure that all data types are correct
        this.validate();



        // default result object, returned to callbacks
        this.result = {
            input: this.$cache.input,
            slider: null,

            min: this.options.min,
            max: this.options.max,

            from: this.options.from,
            from_percent: 0,
            from_value: null,

            to: this.options.to,
            to_percent: 0,
            to_value: null
        };



        this.init();
    };

    IonRangeSlider.prototype = {

        /**
         * Starts or updates the plugin instance
         *
         * @param is_update {boolean}
         */
        init: function (is_update) {
            this.no_diapason = false;
            this.coords.p_step = this.convertToPercent(this.options.step, true);

            this.target = "base";

            this.toggleInput();
            this.append();
            this.setMinMax();

            if (is_update) {
                this.force_redraw = true;
                this.calc(true);

                // callbacks called
                this.callOnUpdate();
            } else {
                this.force_redraw = true;
                this.calc(true);

                // callbacks called
                this.callOnStart();
            }

            this.updateScene();
        },

        /**
         * Appends slider template to a DOM
         */
        append: function () {
            var container_html = '<span class="irs js-irs-' + this.plugin_count + '"></span>';
            this.$cache.input.before(container_html);
            this.$cache.input.prop("readonly", true);
            this.$cache.cont = this.$cache.input.prev();
            this.result.slider = this.$cache.cont;

            this.$cache.cont.html(base_html);
            this.$cache.rs = this.$cache.cont.find(".irs");
            this.$cache.min = this.$cache.cont.find(".irs-min");
            this.$cache.max = this.$cache.cont.find(".irs-max");
            this.$cache.from = this.$cache.cont.find(".irs-from");
            this.$cache.to = this.$cache.cont.find(".irs-to");
            this.$cache.single = this.$cache.cont.find(".irs-single");
            this.$cache.bar = this.$cache.cont.find(".irs-bar");
            this.$cache.line = this.$cache.cont.find(".irs-line");
            this.$cache.grid = this.$cache.cont.find(".irs-grid");

            if (this.options.type === "single") {
                this.$cache.cont.append(single_html);
                this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
                this.$cache.s_single = this.$cache.cont.find(".single");
                this.$cache.from[0].style.visibility = "hidden";
                this.$cache.to[0].style.visibility = "hidden";
                this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
            } else {
                this.$cache.cont.append(double_html);
                this.$cache.s_from = this.$cache.cont.find(".from");
                this.$cache.s_to = this.$cache.cont.find(".to");
                this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
                this.$cache.shad_to = this.$cache.cont.find(".shadow-to");

                this.setTopHandler();
            }

            if (this.options.hide_from_to) {
                this.$cache.from[0].style.display = "none";
                this.$cache.to[0].style.display = "none";
                this.$cache.single[0].style.display = "none";
            }

            this.appendGrid();

            if (this.options.disable) {
                this.appendDisableMask();
                this.$cache.input[0].disabled = true;
            } else {
                this.$cache.cont.removeClass("irs-disabled");
                this.$cache.input[0].disabled = false;
                this.bindEvents();
            }

            if (this.options.drag_interval) {
                this.$cache.bar[0].style.cursor = "ew-resize";
            }
        },

        /**
         * Determine which handler has a priority
         * works only for double slider type
         */
        setTopHandler: function () {
            var min = this.options.min,
                max = this.options.max,
                from = this.options.from,
                to = this.options.to;

            if (from > min && to === max) {
                this.$cache.s_from.addClass("type_last");
            } else if (to < max) {
                this.$cache.s_to.addClass("type_last");
            }
        },

        /**
         * Determine which handles was clicked last
         * and which handler should have hover effect
         *
         * @param target {String}
         */
        changeLevel: function (target) {
            switch (target) {
                case "single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
                    break;
                case "from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
                    this.$cache.s_from.addClass("state_hover");
                    this.$cache.s_from.addClass("type_last");
                    this.$cache.s_to.removeClass("type_last");
                    break;
                case "to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
                    this.$cache.s_to.addClass("state_hover");
                    this.$cache.s_to.addClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
                case "both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
                    this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer);
                    this.$cache.s_to.removeClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
            }
        },

        /**
         * Then slider is disabled
         * appends extra layer with opacity
         */
        appendDisableMask: function () {
            this.$cache.cont.append(disable_html);
            this.$cache.cont.addClass("irs-disabled");
        },

        /**
         * Remove slider instance
         * and ubind all events
         */
        remove: function () {
            this.$cache.cont.remove();
            this.$cache.cont = null;

            this.$cache.line.off("keydown.irs_" + this.plugin_count);

            this.$cache.body.off("touchmove.irs_" + this.plugin_count);
            this.$cache.body.off("mousemove.irs_" + this.plugin_count);

            this.$cache.win.off("touchend.irs_" + this.plugin_count);
            this.$cache.win.off("mouseup.irs_" + this.plugin_count);

            if (is_old_ie) {
                this.$cache.body.off("mouseup.irs_" + this.plugin_count);
                this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
            }

            this.$cache.grid_labels = [];
            this.coords.big = [];
            this.coords.big_w = [];
            this.coords.big_p = [];
            this.coords.big_x = [];

            cancelAnimationFrame(this.raf_id);
        },

        /**
         * bind all slider events
         */
        bindEvents: function () {
            if (this.no_diapason) {
                return;
            }

            this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
            this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));

            this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
            this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));

            this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

            if (this.options.drag_interval && this.options.type === "double") {
                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
            } else {
                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            }

            if (this.options.type === "single") {
                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            } else {
                this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
                this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null));

                this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            }

            if (this.options.keyboard) {
                this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
            }

            if (is_old_ie) {
                this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
                this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
            }
        },

        /**
         * Mousemove or touchmove
         * only for handlers
         *
         * @param e {Object} event object
         */
        pointerMove: function (e) {
            if (!this.dragging) {
                return;
            }
            
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            this.coords.x_pointer = x - this.coords.x_gap;

            this.calc();
        },

        /**
         * Mouseup or touchend
         * only for handlers
         *
         * @param e {Object} event object
         */
        pointerUp: function (e) {
            if (this.current_plugin !== this.plugin_count) {
                return;
            }

            if (this.is_active) {
                this.is_active = false;
            } else {
                return;
            }

            this.$cache.cont.find(".state_hover").removeClass("state_hover");

            this.force_redraw = true;

            if (is_old_ie) {
                $("*").prop("unselectable", false);
            }

            this.updateScene();
            this.restoreOriginalMinInterval();

            // callbacks call
            if ($.contains(this.$cache.cont[0], e.target) || this.dragging) {
                this.is_finish = true;
                this.callOnFinish();
            }
            
            this.dragging = false;
        },

        /**
         * Mousedown or touchstart
         * only for handlers
         *
         * @param target {String|null}
         * @param e {Object} event object
         */
        pointerDown: function (target, e) {
            e.preventDefault();
            
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            if (e.button === 2) {
                return;
            }

            if (target === "both") {
                this.setTempMinInterval();
            }

            if (!target) {
                target = this.target;
            }

            this.current_plugin = this.plugin_count;
            this.target = target;

            this.is_active = true;
            this.dragging = true;

            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = x - this.coords.x_gap;

            this.calcPointerPercent();
            this.changeLevel(target);

            if (is_old_ie) {
                $("*").prop("unselectable", true);
            }

            this.$cache.line.trigger("focus");

            this.updateScene();
        },

        /**
         * Mousedown or touchstart
         * for other slider elements, like diapason line
         *
         * @param target {String}
         * @param e {Object} event object
         */
        pointerClick: function (target, e) {
            e.preventDefault();
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            if (e.button === 2) {
                return;
            }

            this.current_plugin = this.plugin_count;
            this.target = target;

            this.is_click = true;
            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = +(x - this.coords.x_gap).toFixed();

            this.force_redraw = true;
            this.calc();

            this.$cache.line.trigger("focus");
        },

        /**
         * Keyborard controls for focused slider
         *
         * @param target {String}
         * @param e {Object} event object
         * @returns {boolean|undefined}
         */
        key: function (target, e) {
            if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                return;
            }

            switch (e.which) {
                case 83: // W
                case 65: // A
                case 40: // DOWN
                case 37: // LEFT
                    e.preventDefault();
                    this.moveByKey(false);
                    break;

                case 87: // S
                case 68: // D
                case 38: // UP
                case 39: // RIGHT
                    e.preventDefault();
                    this.moveByKey(true);
                    break;
            }

            return true;
        },

        /**
         * Move by key. Beta
         * @todo refactor than have plenty of time
         *
         * @param right {boolean} direction to move
         */
        moveByKey: function (right) {
            var p = this.coords.p_pointer;

            if (right) {
                p += this.options.keyboard_step;
            } else {
                p -= this.options.keyboard_step;
            }

            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
            this.is_key = true;
            this.calc();
        },

        /**
         * Set visibility and content
         * of Min and Max labels
         */
        setMinMax: function () {
            if (!this.options) {
                return;
            }

            if (this.options.hide_min_max) {
                this.$cache.min[0].style.display = "none";
                this.$cache.max[0].style.display = "none";
                return;
            }

            if (this.options.values.length) {
                this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
                this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
            } else {
                this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min));
                this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max));
            }

            this.labels.w_min = this.$cache.min.outerWidth(false);
            this.labels.w_max = this.$cache.max.outerWidth(false);
        },

        /**
         * Then dragging interval, prevent interval collapsing
         * using min_interval option
         */
        setTempMinInterval: function () {
            var interval = this.result.to - this.result.from;

            if (this.old_min_interval === null) {
                this.old_min_interval = this.options.min_interval;
            }

            this.options.min_interval = interval;
        },

        /**
         * Restore min_interval option to original
         */
        restoreOriginalMinInterval: function () {
            if (this.old_min_interval !== null) {
                this.options.min_interval = this.old_min_interval;
                this.old_min_interval = null;
            }
        },



        // =============================================================================================================
        // Calculations

        /**
         * All calculations and measures start here
         *
         * @param update {boolean=}
         */
        calc: function (update) {
            if (!this.options) {
                return;
            }

            this.calc_count++;

            if (this.calc_count === 10 || update) {
                this.calc_count = 0;
                this.coords.w_rs = this.$cache.rs.outerWidth(false);

                this.calcHandlePercent();
            }

            if (!this.coords.w_rs) {
                return;
            }

            this.calcPointerPercent();
            var handle_x = this.getHandleX();

            if (this.target === "click") {
                this.coords.p_gap = this.coords.p_handle / 2;
                handle_x = this.getHandleX();

                if (this.options.drag_interval) {
                    this.target = "both_one";
                } else {
                    this.target = this.chooseHandle(handle_x);
                }
            }

            switch (this.target) {
                case "base":
                    var w = (this.options.max - this.options.min) / 100,
                        f = (this.result.from - this.options.min) / w,
                        t = (this.result.to - this.options.min) / w;

                    this.coords.p_single_real = this.toFixed(f);
                    this.coords.p_from_real = this.toFixed(f);
                    this.coords.p_to_real = this.toFixed(t);

                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);

                    this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

                    this.target = null;

                    break;

                case "single":
                    if (this.options.from_fixed) {
                        break;
                    }

                    this.coords.p_single_real = this.convertToRealPercent(handle_x);
                    this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);

                    this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);

                    break;

                case "from":
                    if (this.options.from_fixed) {
                        break;
                    }
                    
                    this.coords.p_from_real = this.convertToRealPercent(handle_x);
                    this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
                    if (this.coords.p_from_real > this.coords.p_to_real) {
                        this.coords.p_from_real = this.coords.p_to_real;
                    }
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");

                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

                    break;

                case "to":
                    if (this.options.to_fixed) {
                        break;
                    }

                    this.coords.p_to_real = this.convertToRealPercent(handle_x);
                    this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
                    if (this.coords.p_to_real < this.coords.p_from_real) {
                        this.coords.p_to_real = this.coords.p_from_real;
                    }
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");

                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

                    break;

                case "both":
                    if (this.options.from_fixed || this.options.to_fixed) {
                        break;
                    }

                    handle_x = this.toFixed(handle_x + (this.coords.p_handle * 0.1));

                    this.coords.p_from_real = this.convertToRealPercent(handle_x) - this.coords.p_gap_left;
                    this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

                    this.coords.p_to_real = this.convertToRealPercent(handle_x) + this.coords.p_gap_right;
                    this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

                    break;

                case "both_one":
                    if (this.options.from_fixed || this.options.to_fixed) {
                        break;
                    }

                    var real_x = this.convertToRealPercent(handle_x),
                        from = this.result.from_percent,
                        to = this.result.to_percent,
                        full = to - from,
                        half = full / 2,
                        new_from = real_x - half,
                        new_to = real_x + half;

                    if (new_from < 0) {
                        new_from = 0;
                        new_to = new_from + full;
                    }

                    if (new_to > 100) {
                        new_to = 100;
                        new_from = new_to - full;
                    }

                    this.coords.p_from_real = this.calcWithStep(new_from);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);

                    this.coords.p_to_real = this.calcWithStep(new_to);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);

                    break;
            }

            if (this.options.type === "single") {
                this.coords.p_bar_x = (this.coords.p_handle / 2);
                this.coords.p_bar_w = this.coords.p_single_fake;

                this.result.from_percent = this.coords.p_single_real;
                this.result.from = this.convertToValue(this.coords.p_single_real);

                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                }
            } else {
                this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + (this.coords.p_handle / 2));
                this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake);

                this.result.from_percent = this.coords.p_from_real;
                this.result.from = this.convertToValue(this.coords.p_from_real);
                this.result.to_percent = this.coords.p_to_real;
                this.result.to = this.convertToValue(this.coords.p_to_real);

                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                    this.result.to_value = this.options.values[this.result.to];
                }
            }

            this.calcMinMax();
            this.calcLabels();
        },


        /**
         * calculates pointer X in percent
         */
        calcPointerPercent: function () {
            if (!this.coords.w_rs) {
                this.coords.p_pointer = 0;
                return;
            }

            if (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)  ) {
                this.coords.x_pointer = 0;
            } else if (this.coords.x_pointer > this.coords.w_rs) {
                this.coords.x_pointer = this.coords.w_rs;
            }

            this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
        },

        convertToRealPercent: function (fake) {
            var full = 100 - this.coords.p_handle;
            return fake / full * 100;
        },

        convertToFakePercent: function (real) {
            var full = 100 - this.coords.p_handle;
            return real / 100 * full;
        },

        getHandleX: function () {
            var max = 100 - this.coords.p_handle,
                x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);

            if (x < 0) {
                x = 0;
            } else if (x > max) {
                x = max;
            }

            return x;
        },

        calcHandlePercent: function () {
            if (this.options.type === "single") {
                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
            } else {
                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
            }

            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
        },

        /**
         * Find closest handle to pointer click
         *
         * @param real_x {Number}
         * @returns {String}
         */
        chooseHandle: function (real_x) {
            if (this.options.type === "single") {
                return "single";
            } else {
                var m_point = this.coords.p_from_real + ((this.coords.p_to_real - this.coords.p_from_real) / 2);
                if (real_x >= m_point) {
                    return this.options.to_fixed ? "from" : "to";
                } else {
                    return this.options.from_fixed ? "to" : "from";
                }
            }
        },

        /**
         * Measure Min and Max labels width in percent
         */
        calcMinMax: function () {
            if (!this.coords.w_rs) {
                return;
            }

            this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
            this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
        },

        /**
         * Measure labels width and X in percent
         */
        calcLabels: function () {
            if (!this.coords.w_rs || this.options.hide_from_to) {
                return;
            }

            if (this.options.type === "single") {

                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = this.coords.p_single_fake + (this.coords.p_handle / 2) - (this.labels.p_single_fake / 2);
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);

            } else {

                this.labels.w_from = this.$cache.from.outerWidth(false);
                this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100;
                this.labels.p_from_left = this.coords.p_from_fake + (this.coords.p_handle / 2) - (this.labels.p_from_fake / 2);
                this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
                this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake);

                this.labels.w_to = this.$cache.to.outerWidth(false);
                this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100;
                this.labels.p_to_left = this.coords.p_to_fake + (this.coords.p_handle / 2) - (this.labels.p_to_fake / 2);
                this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
                this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake);

                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = ((this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2) - (this.labels.p_single_fake / 2);
                this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);

            }
        },



        // =============================================================================================================
        // Drawings

        /**
         * Main function called in request animation frame
         * to update everything
         */
        updateScene: function () {
            if (this.raf_id) {
                cancelAnimationFrame(this.raf_id);
                this.raf_id = null;
            }

            clearTimeout(this.update_tm);
            this.update_tm = null;

            if (!this.options) {
                return;
            }

            this.drawHandles();

            if (this.is_active) {
                this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
            } else {
                this.update_tm = setTimeout(this.updateScene.bind(this), 300);
            }
        },

        /**
         * Draw handles
         */
        drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(false);

            if (!this.coords.w_rs) {
                return;
            }

            if (this.coords.w_rs !== this.coords.w_rs_old) {
                this.target = "base";
                this.is_resize = true;
            }

            if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
                this.setMinMax();
                this.calc(true);
                this.drawLabels();
                if (this.options.grid) {
                    this.calcGridMargin();
                    this.calcGridLabels();
                }
                this.force_redraw = true;
                this.coords.w_rs_old = this.coords.w_rs;
                this.drawShadow();
            }

            if (!this.coords.w_rs) {
                return;
            }

            if (!this.dragging && !this.force_redraw && !this.is_key) {
                return;
            }

            if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {

                this.drawLabels();

                this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
                this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";

                if (this.options.type === "single") {
                    this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%";

                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from);
                    }
                    this.$cache.input.data("from", this.result.from);
                } else {
                    this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
                    this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";

                    if (this.old_from !== this.result.from || this.force_redraw) {
                        this.$cache.from[0].style.left = this.labels.p_from_left + "%";
                    }
                    if (this.old_to !== this.result.to || this.force_redraw) {
                        this.$cache.to[0].style.left = this.labels.p_to_left + "%";
                    }

                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to);
                    }
                    this.$cache.input.data("from", this.result.from);
                    this.$cache.input.data("to", this.result.to);
                }

                if ((this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start) {
                    this.$cache.input.trigger("change");
                }

                this.old_from = this.result.from;
                this.old_to = this.result.to;

                // callbacks call
                if (!this.is_resize && !this.is_update && !this.is_start && !this.is_finish) {
                    this.callOnChange();
                }
                if (this.is_key || this.is_click) {
                    this.is_key = false;
                    this.is_click = false;
                    this.callOnFinish();
                }

                this.is_update = false;
                this.is_resize = false;
                this.is_finish = false;
            }

            this.is_start = false;
            this.is_key = false;
            this.is_click = false;
            this.force_redraw = false;
        },

        /**
         * Draw labels
         * measure labels collisions
         * collapse close labels
         */
        drawLabels: function () {
            if (!this.options) {
                return;
            }

            var values_num = this.options.values.length,
                p_values = this.options.p_values,
                text_single,
                text_from,
                text_to;

            if (this.options.hide_from_to) {
                return;
            }

            if (this.options.type === "single") {

                if (values_num) {
                    text_single = this.decorate(p_values[this.result.from]);
                    this.$cache.single.html(text_single);
                } else {
                    text_single = this.decorate(this._prettify(this.result.from), this.result.from);
                    this.$cache.single.html(text_single);
                }

                this.calcLabels();

                if (this.labels.p_single_left < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }

                if (this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }

            } else {

                if (values_num) {

                    if (this.options.decorate_both) {
                        text_single = this.decorate(p_values[this.result.from]);
                        text_single += this.options.values_separator;
                        text_single += this.decorate(p_values[this.result.to]);
                    } else {
                        text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
                    }
                    text_from = this.decorate(p_values[this.result.from]);
                    text_to = this.decorate(p_values[this.result.to]);

                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);

                } else {

                    if (this.options.decorate_both) {
                        text_single = this.decorate(this._prettify(this.result.from), this.result.from);
                        text_single += this.options.values_separator;
                        text_single += this.decorate(this._prettify(this.result.to), this.result.to);
                    } else {
                        text_single = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to);
                    }
                    text_from = this.decorate(this._prettify(this.result.from), this.result.from);
                    text_to = this.decorate(this._prettify(this.result.to), this.result.to);

                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);

                }

                this.calcLabels();

                var min = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                    single_left = this.labels.p_single_left + this.labels.p_single_fake,
                    to_left = this.labels.p_to_left + this.labels.p_to_fake,
                    max = Math.max(single_left, to_left);

                if (this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left) {
                    this.$cache.from[0].style.visibility = "hidden";
                    this.$cache.to[0].style.visibility = "hidden";
                    this.$cache.single[0].style.visibility = "visible";

                    if (this.result.from === this.result.to) {
                        if (this.target === "from") {
                            this.$cache.from[0].style.visibility = "visible";
                        } else if (this.target === "to") {
                            this.$cache.to[0].style.visibility = "visible";
                        }
                        this.$cache.single[0].style.visibility = "hidden";
                        max = to_left;
                    } else {
                        this.$cache.from[0].style.visibility = "hidden";
                        this.$cache.to[0].style.visibility = "hidden";
                        this.$cache.single[0].style.visibility = "visible";
                        max = Math.max(single_left, to_left);
                    }
                } else {
                    this.$cache.from[0].style.visibility = "visible";
                    this.$cache.to[0].style.visibility = "visible";
                    this.$cache.single[0].style.visibility = "hidden";
                }

                if (min < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }

                if (max > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }

            }
        },

        /**
         * Draw shadow intervals
         */
        drawShadow: function () {
            var o = this.options,
                c = this.$cache,

                is_from_min = typeof o.from_min === "number" && !isNaN(o.from_min),
                is_from_max = typeof o.from_max === "number" && !isNaN(o.from_max),
                is_to_min = typeof o.to_min === "number" && !isNaN(o.to_min),
                is_to_max = typeof o.to_max === "number" && !isNaN(o.to_max),

                from_min,
                from_max,
                to_min,
                to_max;

            if (o.type === "single") {
                if (o.from_shadow && (is_from_min || is_from_max)) {
                    from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
                    from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                    from_min = from_min + (this.coords.p_handle / 2);

                    c.shad_single[0].style.display = "block";
                    c.shad_single[0].style.left = from_min + "%";
                    c.shad_single[0].style.width = from_max + "%";
                } else {
                    c.shad_single[0].style.display = "none";
                }
            } else {
                if (o.from_shadow && (is_from_min || is_from_max)) {
                    from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
                    from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                    from_min = from_min + (this.coords.p_handle / 2);

                    c.shad_from[0].style.display = "block";
                    c.shad_from[0].style.left = from_min + "%";
                    c.shad_from[0].style.width = from_max + "%";
                } else {
                    c.shad_from[0].style.display = "none";
                }

                if (o.to_shadow && (is_to_min || is_to_max)) {
                    to_min = this.convertToPercent(is_to_min ? o.to_min : o.min);
                    to_max = this.convertToPercent(is_to_max ? o.to_max : o.max) - to_min;
                    to_min = this.toFixed(to_min - (this.coords.p_handle / 100 * to_min));
                    to_max = this.toFixed(to_max - (this.coords.p_handle / 100 * to_max));
                    to_min = to_min + (this.coords.p_handle / 2);

                    c.shad_to[0].style.display = "block";
                    c.shad_to[0].style.left = to_min + "%";
                    c.shad_to[0].style.width = to_max + "%";
                } else {
                    c.shad_to[0].style.display = "none";
                }
            }
        },



        // =============================================================================================================
        // Callbacks

        callOnStart: function () {
            if (this.options.onStart && typeof this.options.onStart === "function") {
                this.options.onStart(this.result);
            }
        },
        callOnChange: function () {
            if (this.options.onChange && typeof this.options.onChange === "function") {
                this.options.onChange(this.result);
            }
        },
        callOnFinish: function () {
            if (this.options.onFinish && typeof this.options.onFinish === "function") {
                this.options.onFinish(this.result);
            }
        },
        callOnUpdate: function () {
            if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
                this.options.onUpdate(this.result);
            }
        },



        // =============================================================================================================
        // Service methods

        toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input");
        },

        /**
         * Convert real value to percent
         *
         * @param value {Number} X in real
         * @param no_min {boolean=} don't use min value
         * @returns {Number} X in percent
         */
        convertToPercent: function (value, no_min) {
            var diapason = this.options.max - this.options.min,
                one_percent = diapason / 100,
                val, percent;

            if (!diapason) {
                this.no_diapason = true;
                return 0;
            }

            if (no_min) {
                val = value;
            } else {
                val = value - this.options.min;
            }

            percent = val / one_percent;

            return this.toFixed(percent);
        },

        /**
         * Convert percent to real values
         *
         * @param percent {Number} X in percent
         * @returns {Number} X in real
         */
        convertToValue: function (percent) {
            var min = this.options.min,
                max = this.options.max,
                min_decimals = min.toString().split(".")[1],
                max_decimals = max.toString().split(".")[1],
                min_length, max_length,
                avg_decimals = 0,
                abs = 0;

            if (percent === 0) {
                return this.options.min;
            }
            if (percent === 100) {
                return this.options.max;
            }


            if (min_decimals) {
                min_length = min_decimals.length;
                avg_decimals = min_length;
            }
            if (max_decimals) {
                max_length = max_decimals.length;
                avg_decimals = max_length;
            }
            if (min_length && max_length) {
                avg_decimals = (min_length >= max_length) ? min_length : max_length;
            }

            if (min < 0) {
                abs = Math.abs(min);
                min = +(min + abs).toFixed(avg_decimals);
                max = +(max + abs).toFixed(avg_decimals);
            }

            var number = ((max - min) / 100 * percent) + min,
                string = this.options.step.toString().split(".")[1],
                result;

            if (string) {
                number = +number.toFixed(string.length);
            } else {
                number = number / this.options.step;
                number = number * this.options.step;

                number = +number.toFixed(0);
            }

            if (abs) {
                number -= abs;
            }

            if (string) {
                result = +number.toFixed(string.length);
            } else {
                result = this.toFixed(number);
            }

            if (result < this.options.min) {
                result = this.options.min;
            } else if (result > this.options.max) {
                result = this.options.max;
            }

            return result;
        },

        /**
         * Round percent value with step
         *
         * @param percent {Number}
         * @returns percent {Number} rounded
         */
        calcWithStep: function (percent) {
            var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;

            if (rounded > 100) {
                rounded = 100;
            }
            if (percent === 100) {
                rounded = 100;
            }

            return this.toFixed(rounded);
        },

        checkMinInterval: function (p_current, p_next, type) {
            var o = this.options,
                current,
                next;

            if (!o.min_interval) {
                return p_current;
            }

            current = this.convertToValue(p_current);
            next = this.convertToValue(p_next);

            if (type === "from") {

                if (next - current < o.min_interval) {
                    current = next - o.min_interval;
                }

            } else {

                if (current - next < o.min_interval) {
                    current = next + o.min_interval;
                }

            }

            return this.convertToPercent(current);
        },

        checkMaxInterval: function (p_current, p_next, type) {
            var o = this.options,
                current,
                next;

            if (!o.max_interval) {
                return p_current;
            }

            current = this.convertToValue(p_current);
            next = this.convertToValue(p_next);

            if (type === "from") {

                if (next - current > o.max_interval) {
                    current = next - o.max_interval;
                }

            } else {

                if (current - next > o.max_interval) {
                    current = next + o.max_interval;
                }

            }

            return this.convertToPercent(current);
        },

        checkDiapason: function (p_num, min, max) {
            var num = this.convertToValue(p_num),
                o = this.options;

            if (typeof min !== "number") {
                min = o.min;
            }

            if (typeof max !== "number") {
                max = o.max;
            }

            if (num < min) {
                num = min;
            }

            if (num > max) {
                num = max;
            }

            return this.convertToPercent(num);
        },

        toFixed: function (num) {
            num = num.toFixed(9);
            return +num;
        },

        _prettify: function (num) {
            if (!this.options.prettify_enabled) {
                return num;
            }

            if (this.options.prettify && typeof this.options.prettify === "function") {
                return this.options.prettify(num);
            } else {
                return this.prettify(num);
            }
        },

        prettify: function (num) {
            var n = num.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
        },

        checkEdges: function (left, width) {
            if (!this.options.force_edges) {
                return this.toFixed(left);
            }

            if (left < 0) {
                left = 0;
            } else if (left > 100 - width) {
                left = 100 - width;
            }

            return this.toFixed(left);
        },

        validate: function () {
            var o = this.options,
                r = this.result,
                v = o.values,
                vl = v.length,
                value,
                i;

            if (typeof o.min === "string") o.min = +o.min;
            if (typeof o.max === "string") o.max = +o.max;
            if (typeof o.from === "string") o.from = +o.from;
            if (typeof o.to === "string") o.to = +o.to;
            if (typeof o.step === "string") o.step = +o.step;

            if (typeof o.from_min === "string") o.from_min = +o.from_min;
            if (typeof o.from_max === "string") o.from_max = +o.from_max;
            if (typeof o.to_min === "string") o.to_min = +o.to_min;
            if (typeof o.to_max === "string") o.to_max = +o.to_max;

            if (typeof o.keyboard_step === "string") o.keyboard_step = +o.keyboard_step;
            if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;

            if (o.max < o.min) {
                o.max = o.min;
            }

            if (vl) {
                o.p_values = [];
                o.min = 0;
                o.max = vl - 1;
                o.step = 1;
                o.grid_num = o.max;
                o.grid_snap = true;


                for (i = 0; i < vl; i++) {
                    value = +v[i];

                    if (!isNaN(value)) {
                        v[i] = value;
                        value = this._prettify(value);
                    } else {
                        value = v[i];
                    }

                    o.p_values.push(value);
                }
            }

            if (typeof o.from !== "number" || isNaN(o.from)) {
                o.from = o.min;
            }

            if (typeof o.to !== "number" || isNaN(o.from)) {
                o.to = o.max;
            }

            if (o.type === "single") {

                if (o.from < o.min) {
                    o.from = o.min;
                }

                if (o.from > o.max) {
                    o.from = o.max;
                }

            } else {

                if (o.from < o.min || o.from > o.max) {
                    o.from = o.min;
                }
                if (o.to > o.max || o.to < o.min) {
                    o.to = o.max;
                }
                if (o.from > o.to) {
                    o.from = o.to;
                }

            }

            if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
                o.step = 1;
            }

            if (typeof o.keyboard_step !== "number" || isNaN(o.keyboard_step) || !o.keyboard_step || o.keyboard_step < 0) {
                o.keyboard_step = 5;
            }

            if (typeof o.from_min === "number" && o.from < o.from_min) {
                o.from = o.from_min;
            }

            if (typeof o.from_max === "number" && o.from > o.from_max) {
                o.from = o.from_max;
            }

            if (typeof o.to_min === "number" && o.to < o.to_min) {
                o.to = o.to_min;
            }

            if (typeof o.to_max === "number" && o.from > o.to_max) {
                o.to = o.to_max;
            }

            if (r) {
                if (r.min !== o.min) {
                    r.min = o.min;
                }

                if (r.max !== o.max) {
                    r.max = o.max;
                }

                if (r.from < r.min || r.from > r.max) {
                    r.from = o.from;
                }

                if (r.to < r.min || r.to > r.max) {
                    r.to = o.to;
                }
            }

            if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
                o.min_interval = 0;
            }

            if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
                o.max_interval = 0;
            }

            if (o.min_interval && o.min_interval > o.max - o.min) {
                o.min_interval = o.max - o.min;
            }

            if (o.max_interval && o.max_interval > o.max - o.min) {
                o.max_interval = o.max - o.min;
            }
        },

        decorate: function (num, original) {
            var decorated = "",
                o = this.options;

            if (o.prefix) {
                decorated += o.prefix;
            }

            decorated += num;

            if (o.max_postfix) {
                if (o.values.length && num === o.p_values[o.max]) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                } else if (original === o.max) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                }
            }

            if (o.postfix) {
                decorated += o.postfix;
            }

            return decorated;
        },

        updateFrom: function () {
            this.result.from = this.options.from;
            this.result.from_percent = this.convertToPercent(this.result.from);
            if (this.options.values) {
                this.result.from_value = this.options.values[this.result.from];
            }
        },

        updateTo: function () {
            this.result.to = this.options.to;
            this.result.to_percent = this.convertToPercent(this.result.to);
            if (this.options.values) {
                this.result.to_value = this.options.values[this.result.to];
            }
        },

        updateResult: function () {
            this.result.min = this.options.min;
            this.result.max = this.options.max;
            this.updateFrom();
            this.updateTo();
        },


        // =============================================================================================================
        // Grid

        appendGrid: function () {
            if (!this.options.grid) {
                return;
            }

            var o = this.options,
                i, z,

                total = o.max - o.min,
                big_num = o.grid_num,
                big_p = 0,
                big_w = 0,

                small_max = 4,
                local_small_max,
                small_p,
                small_w = 0,

                result,
                html = '';



            this.calcGridMargin();

            if (o.grid_snap) {
                big_num = total / o.step;
                big_p = this.toFixed(o.step / (total / 100));
            } else {
                big_p = this.toFixed(100 / big_num);
            }

            if (big_num > 4) {
                small_max = 3;
            }
            if (big_num > 7) {
                small_max = 2;
            }
            if (big_num > 14) {
                small_max = 1;
            }
            if (big_num > 28) {
                small_max = 0;
            }

            for (i = 0; i < big_num + 1; i++) {
                local_small_max = small_max;

                big_w = this.toFixed(big_p * i);

                if (big_w > 100) {
                    big_w = 100;

                    local_small_max -= 2;
                    if (local_small_max < 0) {
                        local_small_max = 0;
                    }
                }
                this.coords.big[i] = big_w;

                small_p = (big_w - (big_p * (i - 1))) / (local_small_max + 1);

                for (z = 1; z <= local_small_max; z++) {
                    if (big_w === 0) {
                        break;
                    }

                    small_w = this.toFixed(big_w - (small_p * z));

                    html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
                }

                html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';

                result = this.convertToValue(big_w);
                if (o.values.length) {
                    result = o.p_values[result];
                } else {
                    result = this._prettify(result);
                }

                html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
            }
            this.coords.big_num = Math.ceil(big_num + 1);



            this.$cache.cont.addClass("irs-with-grid");
            this.$cache.grid.html(html);
            this.cacheGridLabels();
        },

        cacheGridLabels: function () {
            var $label, i,
                num = this.coords.big_num;

            for (i = 0; i < num; i++) {
                $label = this.$cache.grid.find(".js-grid-text-" + i);
                this.$cache.grid_labels.push($label);
            }

            this.calcGridLabels();
        },

        calcGridLabels: function () {
            var i, label, start = [], finish = [],
                num = this.coords.big_num;

            for (i = 0; i < num; i++) {
                this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
                this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
                this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);

                start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
                finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
            }

            if (this.options.force_edges) {
                if (start[0] < -this.coords.grid_gap) {
                    start[0] = -this.coords.grid_gap;
                    finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);

                    this.coords.big_x[0] = this.coords.grid_gap;
                }

                if (finish[num - 1] > 100 + this.coords.grid_gap) {
                    finish[num - 1] = 100 + this.coords.grid_gap;
                    start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);

                    this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
                }
            }

            this.calcGridCollision(2, start, finish);
            this.calcGridCollision(4, start, finish);

            for (i = 0; i < num; i++) {
                label = this.$cache.grid_labels[i][0];
                label.style.marginLeft = -this.coords.big_x[i] + "%";
            }
        },

        // Collisions Calc Beta
        // TODO: Refactor then have plenty of time
        calcGridCollision: function (step, start, finish) {
            var i, next_i, label,
                num = this.coords.big_num;

            for (i = 0; i < num; i += step) {
                next_i = i + (step / 2);
                if (next_i >= num) {
                    break;
                }

                label = this.$cache.grid_labels[next_i][0];

                if (finish[i] <= start[next_i]) {
                    label.style.visibility = "visible";
                } else {
                    label.style.visibility = "hidden";
                }
            }
        },

        calcGridMargin: function () {
            if (!this.options.grid_margin) {
                return;
            }

            this.coords.w_rs = this.$cache.rs.outerWidth(false);
            if (!this.coords.w_rs) {
                return;
            }

            if (this.options.type === "single") {
                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
            } else {
                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
            }
            this.coords.p_handle = this.toFixed(this.coords.w_handle  / this.coords.w_rs * 100);
            this.coords.grid_gap = this.toFixed((this.coords.p_handle / 2) - 0.1);

            this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
            this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
        },



        // =============================================================================================================
        // Public methods

        update: function (options) {
            if (!this.input) {
                return;
            }

            this.is_update = true;

            this.options.from = this.result.from;
            this.options.to = this.result.to;

            this.options = $.extend(this.options, options);
            this.validate();
            this.updateResult(options);

            this.toggleInput();
            this.remove();
            this.init(true);
        },

        reset: function () {
            if (!this.input) {
                return;
            }

            this.updateResult();
            this.update();
        },

        destroy: function () {
            if (!this.input) {
                return;
            }

            this.toggleInput();
            this.$cache.input.prop("readonly", false);
            $.data(this.input, "ionRangeSlider", null);

            this.remove();
            this.input = null;
            this.options = null;
        }
    };

    $.fn.ionRangeSlider = function (options) {
        return this.each(function() {
            if (!$.data(this, "ionRangeSlider")) {
                $.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
            }
        });
    };



    // =================================================================================================================
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

    // requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel

    // MIT license

    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

}));
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.VMasker=b()}(this,function(){var a=[9,16,17,18,36,37,38,39,40,91,92,93],b=function(b){for(var c=0,d=a.length;c<d;c++)if(b==a[c])return!1;return!0},c=function(a){return a=a||{},a={delimiter:a.delimiter||".",lastOutput:a.lastOutput,precision:a.hasOwnProperty("precision")?a.precision:2,separator:a.separator||",",showSignal:a.showSignal,suffixUnit:a.suffixUnit&&" "+a.suffixUnit.replace(/[\s]/g,"")||"",unit:a.unit&&a.unit.replace(/[\s]/g,"")+" "||"",zeroCents:a.zeroCents},a.moneyPrecision=a.zeroCents?0:a.precision,a},d=function(a,b,c){for(;b<a.length;b++)"9"!==a[b]&&"A"!==a[b]&&"S"!==a[b]||(a[b]=c);return a},e=function(a){this.elements=a};e.prototype.unbindElementToMask=function(){for(var a=0,b=this.elements.length;a<b;a++)this.elements[a].lastOutput="",this.elements[a].onkeyup=!1,this.elements[a].onkeydown=!1,this.elements[a].value.length&&(this.elements[a].value=this.elements[a].value.replace(/\D/g,""))},e.prototype.bindElementToMask=function(a){for(var c=this,d=function(d){d=d||window.event;var e=d.target||d.srcElement;b(d.keyCode)&&setTimeout(function(){c.opts.lastOutput=e.lastOutput,e.value=f[a](e.value,c.opts),e.lastOutput=e.value,e.setSelectionRange&&c.opts.suffixUnit&&e.setSelectionRange(e.value.length,e.value.length-c.opts.suffixUnit.length)},0)},e=0,g=this.elements.length;e<g;e++)this.elements[e].lastOutput="",this.elements[e].onkeyup=d,this.elements[e].value.length&&(this.elements[e].value=f[a](this.elements[e].value,this.opts))},e.prototype.maskMoney=function(a){this.opts=c(a),this.bindElementToMask("toMoney")},e.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},e.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},e.prototype.maskPattern=function(a){this.opts={pattern:a},this.bindElementToMask("toPattern")},e.prototype.unMask=function(){this.unbindElementToMask()};var f=function(a){if(!a)throw new Error("VanillaMasker: There is no element to bind.");var b="length"in a?a.length?a:[]:[a];return new e(b)};return f.toMoney=function(a,b){if(b=c(b),b.zeroCents){b.lastOutput=b.lastOutput||"";var d="("+b.separator+"[0]{0,"+b.precision+"})",e=new RegExp(d,"g"),f=a.toString().replace(/[\D]/g,"").length||0,g=b.lastOutput.toString().replace(/[\D]/g,"").length||0;a=a.toString().replace(e,""),f<g&&(a=a.slice(0,a.length-1))}var h=a.toString().replace(/[\D]/g,""),i=new RegExp("^(0|\\"+b.delimiter+")"),j=new RegExp("(\\"+b.separator+")$"),k=h.substr(0,h.length-b.moneyPrecision),l=k.substr(0,k.length%3),m=new Array(b.precision+1).join("0");k=k.substr(k.length%3,k.length);for(var n=0,o=k.length;n<o;n++)n%3==0&&(l+=b.delimiter),l+=k[n];l=l.replace(i,""),l=l.length?l:"0";var p="";if(!0===b.showSignal&&(p=a<0||a.startsWith&&a.startsWith("-")?"-":""),!b.zeroCents){var q=h.length-b.precision,r=h.substr(q,b.precision),s=r.length;m=(m+r).slice(-(b.precision>s?b.precision:s))}return(b.unit+p+l+b.separator+m).replace(j,"")+b.suffixUnit},f.toPattern=function(a,b){var c,e="object"==typeof b?b.pattern:b,f=e.replace(/\W/g,""),g=e.split(""),h=a.toString().replace(/\W/g,""),i=h.replace(/\W/g,""),j=0,k=g.length,l="object"==typeof b?b.placeholder:void 0;for(c=0;c<k;c++){if(j>=h.length){if(f.length==i.length)return g.join("");if(void 0!==l&&f.length>i.length)return d(g,c,l).join("");break}if("9"===g[c]&&h[j].match(/[0-9]/)||"A"===g[c]&&h[j].match(/[a-zA-Z]/)||"S"===g[c]&&h[j].match(/[0-9a-zA-Z]/))g[c]=h[j++];else if("9"===g[c]||"A"===g[c]||"S"===g[c])return void 0!==l?d(g,c,l).join(""):g.slice(0,c).join("")}return g.join("").substr(0,c)},f.toNumber=function(a){return a.toString().replace(/(?!^-)[^0-9]/g,"")},f.toAlphaNumeric=function(a){return a.toString().replace(/[^a-z0-9 ]+/i,"")},f});
var URI = {
    SLASH: "/",
    EXT: '.html',
    CTX: '/coc/',
    DELIMITER: '-',
    pageName: '',
    isPrinter: false,
    printer: '.printer.html',
    params: [],
    populateView: function(event){
        populatePage(event);
    },
    getCntxt: function(p){
        URI.params = p.replace(URI.EXT, COCDATA.EMPTY).split(URI.SLASH);
        $.each(URI.params, function(i, p){
            if(p.indexOf(URI.DELIMITER)!=-1){
                URI.params[i] = p.split(URI.DELIMITER).join(" ");
            }
        });
        
        if(URI.params.length==1)    URI.params[1] = "State Median";
    },
    getPageName: function(){
        var pathName = location.pathname;        
        var pName = pathName.substring(pathName.lastIndexOf(URI.SLASH) + 1);
        URI.pageName = pName.replace(URI.EXT, "");
        
        if(pathName.indexOf(URI.CTX)!=-1){
            URI.getCntxt(pathName.split(URI.CTX)[1]);
            URI.printer = '/cost-of-care/landing.printer.html';
        }else if(pathName.indexOf(URI.printer)!=-1){
            URI.isPrinter = true;
        }else{
            URI.printer = pathName.replace(URI.EXT, URI.printer);
        }
    }
};
URI.getPageName();

function populatePage(e){
    var stStr = URI.params[0];
    var regionStr = URI.params[1].capitalizeFirst();
    if(regionStr==COCDATA.STATEMEDIAN){
        $("#coc-title").html(COC.optTitle + stStr.toUpperCase());
    }else{
        $("#coc-title").html(COC.optTitle + regionStr + ", " + stStr.toUpperCase());
    }
    
    globalLocation[0] = stStr;
    STATEDATA.load(globalLocation[0]);
    $.each(USGeoJsonTemplate.features, function(i, c){ 
        if(stStr == c.properties.CODE){
            e.data.feature = c.id;
            selectedState = c.properties.NAME;
         }
    });
    changeState(e);
    
    STATEDATA.loadActiveRegion(regionStr);
    $('#coc-states').append(COC.populateStatesOptions());
    $("#coc-states option[value='-']").remove();
    //$('#coc-stTxt').html($('#coc-stTxt').attr("txt"));
   // $('#back2future').html($('#back2future').attr("txt"));
   // $('#selRight').css("display","block");
    
    $('#coc-stRegions').empty();
    $('#coc-stRegions').append(COC.populateStatesRegionsOptions("current"));
    globalRegion1 = COC.regionSel;
    COC.setTitle(globalRegion1);
    changeLocation();
    populateTilesCheck();
    COC.populateFootnotes();
}
var COCDATA = {
    YEAR: 2018,
    INTERESTRATE: '.03',
    COC_DATA_SRC: 'https://www.trustedlivingcare.com/scrape/cocdata2018.json',
    MAP_DATA_SRC: 'https://www.trustedlivingcare.com/scrape/stateData.json',
    EMPTY: '',
    DELIMITER: ' - ',
    USA: 'usa',
    AREAN: 'Area',
    STATEMEDIAN: 'State Median',
    RESTOFSTATE: 'Rest Of State',
    states: [],
    isReady: false,
    isArea: function(dormant){
        var region = (!!dormant) ? COC.regionNameSelDormant : COC.regionNameSel;
        if(region.indexOf(COCDATA.AREAN)!=-1){
            return true;
        }
        return false;
    },
    load: function(){
        $.getJSON(COCDATA.COC_DATA_SRC, function(data){
            COCDATA.states = data.states; 
            if(data.year)    COCDATA.YEAR = data.year; // set year from file
            COC_OMNI.assignEVar(41, "Monthly");
            COC_OMNI.assignEVar(44, "Dropdown");
            COC_OMNI.assignEVar(43, "USA - Metro Region");
            COC_OMNI.assignEVar(45, "2018");
            COC_OMNI.doTag(5, COC_OMNI.tags['loads']);
            Genworth_SC.Action.assignEVar(55, 44);
			Genworth_SC.Action.assignEvent(7);
			Genworth_SC.Action.trackLink();
            //console.log("from JSON load: Data length is "+COCDATA.states.length); 
            COCDATA.isReady = true;
            if(URI.params.length>1){
                URI.populateView(e);                       
            }else{
                $('#coc-states').append(COC.populateStatesOptions());
                COC.nationalView();
            }
        });
    }
};
//load DATA after MAP loads, in map.js; otherwise
if(URI.isPrinter)   COCDATA.load(); 
var CocSlider = {
    yr_current: COCDATA.YEAR,
    yr_future: COCDATA.YEAR,
    yr: 0,
    yr_title: '(2018)',
    yr_range: 30, // range of desired years to show
    yr_max: function(){ return this.yr_current+this.yr_range },
    id: '#cocSlider', // id of slider input
    obj: {},
    init: function(){
    
    // Initializes slider configuration
    // ------------------------------------

        var THIS = this; // scope parent 'this' => THIS
        var $id = $(THIS.id);
        
        // Array of all years to be captured on the COC slider
        // @returns {Array} All years between current and max year
        var year_arr = (function(){
            _y=[];
            _c=THIS.yr_current;
            _r=THIS.yr_range;
            for (var i=0;i<=_r;i++) _y[i]=_c+i;
            return _y;
        })();
        
        
        
        // Invokes slider plugin
        // ---------------------
        $id.ionRangeSlider({
            grid: true,
            keyboard: true,
            from: THIS.yr, // starts slider at year_arr[0] => current year
            prettify_enabled: false,
            values:year_arr,
            onStart: function (data) {
                //console.log("onStart");
                $('.irs-num-wrap').hide();
            },
            onFinish: function (data) {
                //console.log(data.from);
                $('#irsSlider').attr('aria-valuenow',THIS.yr_future);
                COC_OMNI.checkTag(45, THIS.yr_future, "isLocTab");
                
                // On change animation
                cardBgAnimate();
            }
        });
        
        // Callback for onchange of slider
        $(document).on('change',THIS.id, function () {
            var $this = $(this),
            value = THIS.yr_future = $this.prop('value');                
            value-=THIS.yr_current;
            THIS.yr = value;
            COC.future = (value != 0);
            
            
            $('.irs-num-wrap').toggle(COC.future);
            // eg. (+10 years) 
            $('#sliderSuffix').text('');
            THIS.yr_title = THIS.yr_current;
            if(COC.future){
                $('#sliderSuffix').text(' (+'+value+' years)');
                THIS.yr_title += " vs. " + THIS.yr_future;
            }
            THIS.yr_title = "("+THIS.yr_title+")";
            
            // indicates future nums are showing
            $('#coc-container').toggleClass( 'showing-future', COC.future );
            
            COC.switchTitleYear();
            populateFutureTiles();
            showFutureComparison();
        });
    }
};

//
// Accessability Additions
//
// ARIA labels and WCAG2A additions
// -----------------------------------
$( window ).on( "load", function() { 
    var $ctrlSlider = $('#irsSlider');

    // The slider control
    $ctrlSlider.attr({
        'aria-valuemin': CocSlider.yr_current,
        'aria-valuemax': CocSlider.yr_max(),
        'aria-valuenow': CocSlider.yr_current
    });
});
var COC = {
    currYear: COCDATA.YEAR,
    future: false,
    comparison: false,
    //typeSelector: ["Annual","Monthly","Daily","Hourly"],
    currTitle: "Cost of Care in the Nation",
    optTitle: "Long Term Care Costs in ",
    typeSel: 'Monthly',
    stSel: '',
    stSelDormant: '',
    regionSel: '',
    regionSelDormant:'',
    regionNameSel: '',
    regionNameSelDormant: '',
    tab: 1,
    count: 0,
    data: COCDATA,
    st: STATEDATA,
    durationSelector: [],
    
    //Methods
    populateFootnotes: function(){            
        if($('.coc-btn-group .active').attr('data-freq') != 'Hourly'){ 
					$.each(FOOTNOTES.fn, function(index, sup){
							if(COC.future && COC.typeSel=='Annual')   sup += '_opt'; 
							FOOTNOTES.setSubscript($(index),sup);
							FOOTNOTES.setSubscript($(index+'_mobile'),sup);
					}); 
			
					var footnotes = FOOTNOTES[COC.typeSel].join('<br>');
					if(COC.typeSel=='Annual' && (COC.comparison || COC.future)){
							footnotes = FOOTNOTES[COC.typeSel+"_opt"].join('<br>');
					}
					if(COC.future)    footnotes += '<br>'+FOOTNOTES.Asterisk;
					$('#coc-footnotes').html(footnotes.replace(/\{.*?\}/g, COC.currYear));
				}else{
					COC.populateHourlyFootnotes();
				}
				$('.disclaimers-hour-variable').html($('#weeklyHoursCalculationInput').val());
    },
		populateHourlyFootnotes: function(){
			$('#coc-service-1_headLabel_3 sup, #coc-service-1_headLabel_4 sup, #coc-loc-1_homemaker sup, #coc-loc-1_homeHealth sup, #coc-loc-2_homemaker sup, #coc-loc-2_homeHealth sup').html('1');
			var footnotes = "Genworth Cost of Care Survey 2018, conducted by CareScout<sup>Â®</sup>, June 2018<br><sup>1</sup> As reported hourly cost";
			if(COC.future){
				footnotes += '<br>'+FOOTNOTES.Asterisk;
			}
			//$('#coc-footnotes').html(footnotes);
		},	
    nationalView: function(){
        $("#national_view").css('display','none'); 
        $('#locSelectVal').text('National');
				
        STATEDATA.load("usa");
        COC.setTitle(); // make sure all title put back to default
        COC.switchTitleType('Monthly');

        $('#cocStateDropdown_2, cocLocDropdown_2').hide();        
        
        if($('#cocSlider').length){
            $('#cocSlider').data("ionRangeSlider").reset();
            $('.irs-num-wrap').hide();
        }
        
        $('.coc-btn-group button').removeClass('active');
        $(".coc-btn-group button:nth-child(3)").addClass('active');
        
        $("#coc-title").html($("#coc-title").attr("txt"));
        $('#coc-container').removeClass('showing-state-view');
        
        populateTilesCheck();
        COC.populateFootnotes();
                
        $('.coc-subtitle .region').html($('.coc-subtitle .region').attr("title"));
        $("#coc-states").setFirstElm(); // Select State item
        
        COC.stSel = '';
        COC.regionSel = '';
        COC.regionNameSel = '';
    },
    populateStatesRegionsSelectors: function(state, region){
        $('#locSelectVal').text( region );

        if(STATEDATA.abbr==state){
            if(globalRegion1 != undefined && globalRegion1 != null && globalRegion1 != "" && $('#t1').css("display")== "none"){
                 $("#coc-stRegions option").removeAttr('selected');
								 $("#coc-stRegions option:contains(" + globalRegion1 + ")").attr('selected', 'selected');
                 COC.regionSel = globalRegion1;   
            }else{
                 $("#coc-stRegions option").removeAttr('selected');
								 var selectedVal = $("#coc-stRegions option:contains(" + region + ")").attr('selected', 'selected').val();
                 COC.regionSel = selectedVal;   
            }
        }else{
            STATEDATA.load(state); 
            STATEDATA.loadActiveRegion(0);
            $('#coc-states').append(COC.populateStatesOptions());
            $('#coc-stRegions').empty();
            $('#coc-stRegions').append(COC.populateStatesRegionsOptions("current")); 
        }
        COC.setTitle(COC.regionSel);               
    },
    switchTitleType: function(type){
        $('.coc-subtitle .type').html(type + " Costs:");
        COC_OMNI.checkTag(41, type, "isLocTab");
        COC.typeSel = type;
    },
    switchTitleYear: function(){
        $('.coc-subtitle .year').html(CocSlider.yr_title);
        $('#coc-subtitle_coc-loc-1 .year').html(CocSlider.yr_title);
        $('#coc-subtitle_coc-loc-2 .year').html(CocSlider.yr_title);
    },
    setTitle: function(region){
        var title = "";
        if(isNumber(region)){
            STATEDATA.loadActiveRegion(region);
            if(COC.regionNameSel==COCDATA.STATEMEDIAN){
                title = STATEDATA.current.fullName + TOOLTIP.init();
            }else if(COC.regionNameSel==COCDATA.RESTOFSTATE){
                title = STATEDATA.getStateName(STATEDATA.current.fullName) + COCDATA.DELIMITER + COCDATA.RESTOFSTATE + ' (ROS)' + TOOLTIP.init();
            }else{
                title = STATEDATA.activeRegion.fullName;
                if(COCDATA.isArea())   title += TOOLTIP.init();
                title += ", " + STATEDATA.current.abbrName.toUpperCase();
            }
            
            if(COC.comparison)    COC_OMNI.assignEVar(43, COC.regionNameSel);
            else                  COC_OMNI.doTag(43, COC.regionNameSel);
        }else{
            title = STATEDATA.current.fullName + TOOLTIP.init();

            if(COC.comparison)    COC_OMNI.assignEVar(42, COC.stSel);
            else                  COC_OMNI.doTag(42, COC.stSel);
        }
        if(COC.comparison)        COC_OMNI.doTag(5,"Compare "+COC.regionNameSel+", "+COC.stSel+" to "+COC.regionNameSelDormant+", "+COC.stSelDormant);
        
        $('#coc-subtitle_coc-loc-1 .region').html(title);
        $('.coc-subtitle .region').html(title);
        $('[data-toggle="tooltip"]').tooltip();
    },
    setDormantTitle: function(region){
        var title = "";
      
        if(isNumber(region)){
            STATEDATA.loadDormantRegion(region);
            if(COC.regionNameSelDormant==COCDATA.STATEMEDIAN){
                title = STATEDATA.currentDormant.fullName + TOOLTIP.init(true);
            }else if(COC.regionNameSelDormant==COCDATA.RESTOFSTATE){
                title = STATEDATA.getStateName(STATEDATA.currentDormant.fullName) + COCDATA.DELIMITER + COCDATA.RESTOFSTATE + ' (ROS)' + TOOLTIP.init(true);
            }else{
                title = STATEDATA.dormantRegion.fullName;
                if(COCDATA.isArea(true))   title += TOOLTIP.init(true);
                title += ", " + STATEDATA.currentDormant.abbrName.toUpperCase();
            }

            if(COC.comparison)    COC_OMNI.assignEVar(43, COC.regionNameSelDormant);
            else                  COC_OMNI.doTag(43, COC.regionNameSelDormant);
        }else{
            title = STATEDATA.currentDormant.fullName + TOOLTIP.init(true);
            if(COC.comparison)    COC_OMNI.assignEVar(42, COC.stSelDormant);
            else                  COC_OMNI.doTag(42, COC.stSelDormant);
        }
        
        if(COC.comparison){
            var firstLoc = COC.regionNameSel+", "+COC.stSel;
            if(COC.stSel=='')    firstLoc = 'USA - National Median';

            COC_OMNI.doTag(5,"Compare "+COC.regionNameSelDormant+", "+COC.stSelDormant+" to "+firstLoc);
        }
        
        $('#coc-subtitle_coc-loc-2 .region').html(title);
        $('[data-toggle="tooltip"]').tooltip();
    },
    populateStatesOptions: function(){
        var html = "";
        $.each(COC.data.states, function(index, st){
            if(st.abbrName!=COCDATA.USA){
                var stName = STATEDATA.getStateName(st.fullName);
                html += '<option value="'+st.abbrName+'"';
                if(st.abbrName==COC.stSel)    html += ' SELECTED ';
                html += '>'+stName+'</option>';
            }
        });
        
        return html;
    },
    populateStatesRegionsOptions: function(obj){
        var html = '<option value="0">'+COCDATA.STATEMEDIAN+'</option>';
        var rosOption ="";
        var newCollection;

         if(obj == "current"){
               newCollection = $(STATEDATA.current.cities).sort({"fullName":"asc"},false);
               $.each(newCollection, function(ic, c){
                     if(c.fullName != COCDATA.RESTOFSTATE){
                        html += '<option value="'+c.abbrName+'"';
                        if(c.abbrName==COC.regionSel || c.fullName==COC.regionNameSel)    html += ' SELECTED ';
                        html += '>'+c.fullName+'</option>';
                    }else{
                        rosOption= '<option value="'+c.abbrName+'"';
                         if(c.abbrName==COC.regionSel || c.fullName==COC.regionNameSel)    rosOption += ' SELECTED ';
                         rosOption += '>'+c.fullName+'</option>';
                    }
              });
               
         }else  if(obj == "currentDormant"){
             newCollection = $(STATEDATA.currentDormant.cities).sort({"fullName":"asc"},false);
             $.each(newCollection, function(ic, c){
                 if(c.fullName != COCDATA.RESTOFSTATE){
                    html += '<option value="'+c.abbrName+'"';
                    if(c.abbrName==COC.regionSelDormant || c.fullName==COC.regionNameSelDormant)    html += ' SELECTED ';
                    html += '>'+c.fullName+'</option>';
                }else{
                    rosOption= '<option value="'+c.abbrName+'"';
                     if(c.abbrName==COC.regionSelDormant || c.fullName==COC.regionNameSelDormant)    rosOption += ' SELECTED ';
                     rosOption += '>'+c.fullName+'</option>';
                }
             });
         }
            
        html += rosOption; 
        return html;
    }
};
(function( $ ){
    $.fn.setFirstElm = function(){
        var id = $(this).attr('id');
        var defaultTxt = $('#cocStateDropdown').attr("coc-stTxt");
				if(id == 'coc-states_2'){ 
					defaultTxt = $(this).attr('title');
					$('#locSelectVal_2').text($('#coc-stRegions_2').attr('title'));
					$('#cocLocDropdown_2').css('opacity', '0.5');
				}
        this.prepend('<option value="-">'+defaultTxt+'</option>').val("-");
        $("option[value='-']", this).attr("selected", true);
        
        if(/_/i.test(id))    $("#stateSelectVal_2").text(defaultTxt); 
        else                 $("#stateSelectVal").text(defaultTxt);
        
        $(this).parent().find(".coc-dropdown-nav").removeClass('labelActive');
    };
})( jQuery );
$(function(){
    CocSlider.init();
    if(URI.pageName=="landing")    $('.download-MAP div').show();
    $("#map_view").css('display','none'); 
        
    //
    // '+ Compare' location cta
    // -----------------------------
    $('.coc-compare-other .coc-add-loc').on('click',function(){
        resetComp2();
        COC.comparison = true;

        onParentStateChange($('#cocStateDropdown_1').val(), "1");
        
        $('.coc-compare-other').addClass('coc-compare-hide');        
        $('#coc-container').addClass('hide-main-right');
        
        $(".coc-cost-display").css('display','none'); 
        $("#national_view").css('display','none'); 
        $("#map_view").css('display','block');
        $('#coc-states_2').empty().append(COC.populateStatesOptions());
        $("#coc-states_2").setFirstElm();  // Select State item
        $('#cocStateDropdown_2').css('display','block');
        $('#bottom-coc-loc-1').css('display','block');
        
        // it shouldn't change anything once the + clicked.
        //COC.setTitle();
        COC.populateFootnotes();
        setLocSubscripts(LOC.at);
        COC_OMNI.doTag(5, COC_OMNI.tags['compare']);
        
        $(".coc-loc-title").show().find('H2').css('margin-bottom','-5px');
        $('#coc-compare-title_1').css('display','block');
        $('#coc-compare-title_2').css('display','none');
        
        $("#yearDisplay-coc-loc-1, #yearDisplay-coc-loc-2, .cards-year-1").html(COCDATA.YEAR);
        
        $(".fa").each(function(){
            var cardSID = $(this).attr("data-cardSID");
            $(this).attr("data-container","body").attr("data-html","true").attr("data-original-title", TOOLTIP[cardSID]);
        });
    });
    
    $('#reset').on('click',function(){
          resetComp2();
          $('#reset').css('display','none');
          COC_OMNI.doTag(5, COC_OMNI.tags['toResetLocation']);
    });
    
     //
    // Cost Buttons
    // --------------------------
    $('.coc-btn-group button').on('click',function(){
        $('.coc-btn-group button').removeClass('active');
        $(this).addClass('active');
    });

    
    $('.coc-btn-group').on('click', function(){
      var value =  $('.coc-btn-group .active').attr('data-freq');
			// Hourly is handled separately
			if($('.coc-btn-group .active').attr('data-freq') != 'Hourly'){
				$('.coc-wrapper').removeClass('hourly-active');
				$('.coc-hourly-info-block').hide();
				$('.coc-weekly-hours-wrapper').show();
				COC.switchTitleType(value);
				COC_OMNI.doTag(41, value);
			}// Handle Hourly separately
			else{
				$('.coc-wrapper').addClass('hourly-active');
				$('.coc-weekly-hours-wrapper').hide();
				$('.coc-hourly-info-block').show();
				$('#type-wrap .type, .coc-subtitle .type').text('Hourly Costs:');
				$('.coc-card').fadeTo('fast', 0.5).fadeTo('fast', 1.0); 
			}
        populateTilesCheck();
        setLocSubscripts(LOC.at);
				COC.populateFootnotes();
				
        if( $("#stSelector-"+LOC.comparisonID+"-1").val() != "-"){
            populateData("1",STATEDATA.activeRegion,LOC.comparisonID);
        }
        if( $("#stSelector-"+LOC.comparisonID+"-2").val() != "-"){
            populateData("2",STATEDATA.dormantRegion,LOC.comparisonID);
        } 
            
        if( $("#stSelector-"+LOC.futureID+"-1").val() != "-"){
            populateData("1",STATEDATA.activeRegion,LOC.comparisonID);
            populateDurationData("1",STATEDATA.activeRegion);
        }
          
        if( $("#stSelector-"+LOC.futureID+"-2").val() != "-"){
            populateData("2",STATEDATA.dormantRegion,LOC.futureID);
            populateDurationData("2",STATEDATA.dormantRegion);
        } 
        
        // Used for print CSS
        $('#coc-container').attr('data-period',value); 
    });

  
    $('#coc-states').on('change', { feature: ''}, function(event){
        console.log("coc-states change triggered " + this.value );
        var localVar;
        if(globalLocation[0] != undefined && globalLocation[0] != null && globalLocation[0] != "" && $('#t1').css("display")== "none"){
            localVar=globalLocation[0];
        }else{
            localVar=this.value;
        }
        STATEDATA.load(localVar);
        $('#stateSelectVal').text( $('#coc-states > option:selected').text() );
        $("#coc-states option[value='-']").remove();
        
        $('#coc-container').addClass('showing-state-view');
        $('#coc-stRegions').empty();
        $('#coc-stRegions').append(COC.populateStatesRegionsOptions("current"));
        $('#locSelectVal').text( $('#coc-stRegions > option:selected').text() );
        
        $('#cocStateDropdown .coc-dropdown-nav, #cocLocDropdown .coc-dropdown-nav').addClass('labelActive');
        
        COC.setTitle();
        
        $.each(USGeoJsonTemplate.features, function(i, c){ 
            if(localVar == c.properties.CODE){
                event.data.feature =c.id;
                selectedState = c.properties.NAME;
             }
        });

        COC_OMNI.assignEVar(44, "Dropdown");
        changeState(event);
        populateTilesCheck();
        globalLocation[0] = localVar;
        showFutureComparison();
    });
    
    $('#coc-stRegions').on('change', function(){
        //console.log("localVar globalRegion1--"+globalRegion1 + ", this.value==" +this.value )
        var localVar;
        if(globalRegion1 != undefined && globalRegion1 != null && globalRegion1 != "" && $('#t1').css("display")== "none"){
            localVar=globalRegion1;
        }else{
            localVar=this.value;
        }
        //console.log("localVar--"+localVar)
        $('#locSelectVal').text( $('option:selected', this).text() );
        COC.setTitle(localVar);
        changeLocation();
        populateTilesCheck();
        globalRegion1 = localVar;

        COC_OMNI.assignEVar(44, "Dropdown");
        showFutureComparison();
    });
    
    $('#coc-states_2').on('change', function(event){
        //COC.comparison = true;
        //console.log("coc-states2 change triggered " + this.value);
        $("#coc-states_2 option[value='-']").remove();
        $('#coc-stRegions_2').empty();
    
         STATEDATA.loadDormant(this.value);
         $('#stateSelectVal_2').text( $('#coc-states_2 > option:selected').text() );
         
         $('#coc-stRegions_2').append(COC.populateStatesRegionsOptions("currentDormant"));
         $('#locSelectVal_2').text( $('#coc-stRegions_2 > option:selected').text() );
         if($('#cocLocDropdown_2').css("display") == "block"){
            STATEDATA.loadDormantRegion($('#coc-stRegions_2').val());
         }else{
            STATEDATA.loadDormantRegion(this.value);
         } 
         populateData(2,STATEDATA.dormantRegion,"coc-loc-2");
        
        $('#cocLocDropdown_2').css('display','block').css('opacity', '1');
        $('#bottom-coc-loc-2').css('display','block');
        $('#coc-compare-title_2').css('display','block');
        
        $('#cocStateDropdown_2 .coc-dropdown-nav, #cocLocDropdown_2 .coc-dropdown-nav').addClass('labelActive');
       
        globalLocation[2] = this.value;
        COC.setDormantTitle();
        COC_OMNI.assignEVar(44, "Dropdown");
        
        //onDurationChange();
        showFutureComparison();
        $('#reset').css('display','block');           
    });
    
    $('#coc-stRegions_2').on('change', function(){
        //console.log("coc-stRegions_2 change triggered " + this.value);
        
        COC.setDormantTitle(this.value);
        populateData(2,STATEDATA.dormantRegion,"coc-loc-2"); 
        //  $('#coc-stRegions_2').val(this.value);
        $('#locSelectVal_2').text( $('option:selected', this).text() );
        COC_OMNI.assignEVar(44, "Dropdown");
        showFutureComparison();
    });
    
    $('.coc-return-natl').click(function(){
        $('.coc-region-link').hide();
				// Update classes and data according to Monthly, the default alongside National.
				$(".btn-coc").click();
				$(".btn-coc button[data-freq='Monthly']").click();
				var stateId;
        $.each(USGeoJsonTemplate.features, function(i, c){ 
            if($('#coc-states').val() == c.properties.CODE){
                stateId =c.id;
                //console.log("stateId=="+stateId)
             }
        });
        
        map.data.revertStyle();
        map.data.overrideStyle(map.data.getFeatureById(stateId),{strokeWeight: 0.5,fillOpacity:0});
        selectedState =null;
        
        COC.nationalView();
        COC_OMNI.doTag(5, COC_OMNI.tags['toNationalView']);
        
        hidePins(); 
        map.setZoom(3); 
        map.setCenter(new google.maps.LatLng(MAP_CENTER_LATITUDE,MAP_CENTER_LONGITUDE));
        globalLocation[0]= null;
        clearParentData();
				$('#coc-stRegions').find('option').remove();
				
    });

    $('.coc-return-map').click(function(){
       resetComp2();
       COC.comparison = false;
       $(".coc-loc-title").toggle(COC.comparison);
       //$('#coc-states_2').empty().append(COC.populateStatesOptions());
       $("#cocStateDropdown_2").css('display','none');
       //$('#coc-stRegions_2').append(COC.populateStatesRegionsOptions("currentDormant"));
       $("#cocLocDropdown_2").css('display','none');
       $('#bottom-coc-loc-1').css('display','none');
       $('#coc-compare-title_1').css('display','none');
       $('#coc-compare-title_2').css('display','none');
       $("#map_view").css('display','none');

       populateTiles();
       COC_OMNI.doTag(5, COC_OMNI.tags['toMapView']);
        
       $('.coc-compare-other').removeClass('coc-compare-hide');        
       $('#coc-container').removeClass('hide-main-right');
       $(".coc-cost-display").css('display','block'); 
       $(".coc-cost-title-2").css('display','none'); 
       $('#reset').css('display','none'); 
			 $('#coc-stRegions_2').find('option').remove();
    });   
    
    //bringup(1);
    $("select").keyup(function() {
        $(this).blur().focus();
    });
		
		
		//
		// New Additions for 2018
		// -------------------
		
		// Assure only 3 numbers max can go into the Home Health Care hours field
		
		VMasker(document.querySelector("input.coc-weekly-hours-calculation-input")).maskNumber();
		// Consider an 'enter' keypress as a submission for the input by clicking the calculate button
		$('input.coc-weekly-hours-calculation-input').keydown(function(e){
			var keyPress = e.keyCode || e.which;
			if(keyPress == 13 || keyPress == 9){
				$('button.coc-weekly-hours-calculation-button').click();
			}
		});
		//  Consider leaving the field as a submission for the input by clicking the calculate button
		$('input.coc-weekly-hours-calculation-input').blur(function(){
			// If the newly selected element is not the calculate button, we want to click the calculate button. (prevents double-click and error disappearing on second click)
			setTimeout(function(){
				if (!document.activeElement.classList.contains('coc-weekly-hours-calculation-button') && !document.activeElement.classList.contains('coc-weekly-hours-calculation-reset-link')){
					$('button.coc-weekly-hours-calculation-button').click();
				}
			},1);
		});
		// Run the calculation
		$('button.coc-weekly-hours-calculation-button').click(function(){
			homeHealthCareHoursAreValid();
			$('#coc-container').attr('update-first-only', 'true');
			$('.coc-btn-group').click();
			$('.coc-card-wrap.first .coc-card, #coc-loc-1_homeCareLabel, #coc-loc-1_homeCareLabel + .coc-card-inner, #coc-loc-2_homeCareLabel, #coc-loc-2_homeCareLabel + .coc-card-inner').fadeTo('fast', 0.5).fadeTo('fast', 1.0); 
			$('#coc-container').removeAttr('update-first-only');
		});
		// Reset weekly hours to default 44, remove error, run calculation.
		$('button.coc-weekly-hours-calculation-reset-link').click(function(){
			$('input.coc-weekly-hours-calculation-input').val('44');
			$('button.coc-weekly-hours-calculation-button').click();
		});
		$('#coc-stRegions, #coc-stRegions_2').click(function(){
			if ($(this).children('option').length != 0){
				$('.coc-region-link').show();
			}
		});
		
		// Check validity of home health care hours being between 7-168 (hours in a week)
		// If invalid, set to default 44.
		function homeHealthCareHoursAreValid(){
			var cocWeeklyHoursInput = $('input.coc-weekly-hours-calculation-input');
			var value = cocWeeklyHoursInput.val();
			value = (value == '') ? 0 : parseInt(value);
			if(value < 7 || value > 168){
				cocWeeklyHoursInput.val('44');
				cocWeeklyHoursInput.focus();
				$('.coc-weekly-hours-calculation-error-message').css('display', 'block');
			}else{
				$('.coc-weekly-hours-calculation-error-message').hide();
			}
			if(cocWeeklyHoursInput.val() == '44'){
				$('.coc-weekly-hours-wrapper').addClass('is-default-hours');
			}else{
				$('.coc-weekly-hours-wrapper').removeClass('is-default-hours');
			}
		}
		
		
		
}); // END READY

function resetComp2(){
    $("#coc-states_2").setFirstElm();      
  
    $('#cocLocDropdown_2').css('display','none');
    $('#bottom-coc-loc-2').css('display','none');
    
    globalLocation[1] =null;
    STATEDATA.dormantRegion='';
}

function clearParentData(){
     for(var i=0; i<6; i++){
            $('#'+LOC.comparisonID+'-1-cost'+i).html("");
            $('#'+LOC.futureID+'-1-cost'+i).html("");
        }
}

function cardBgAnimate(){
		var $card = $('.coc-card');
    // Invoke card bg animation
    $card.addClass('cards-rate-change');
    setTimeout(function() { $card.removeClass('cards-rate-change'); },1000);
}

function populateFutureTiles(){
    $('.future-row').toggle(COC.future);
    $('.m-coc-tdlast').toggle(COC.future);
    $('.growth-row').toggle(!COC.future);
    
    var years = CocSlider.yr;
    var costStr = STATEDATA.activeRegion[COC.typeSel.toLowerCase()+"Costs"];
		if(null != costStr && undefined != costStr && "" != costStr){
				var costs = costStr.split(',').reverse();
				// Hourly is handled separately
				if($('.coc-wrapper').hasClass('hourly-active')){
					costs = [STATEDATA.activeRegion['HomeMakerMedianHourly'], STATEDATA.activeRegion['HHAMedianHourly'], 'n/a', 'n/a', 'n/a', 'n/a'];
				}
				for(var i=0; i<costs.length; i++){
						if(isNaN(parseFloat( (+costs[i])* Math.pow((+1 + +COCDATA.INTERESTRATE),years) ))){
								$("#future_"+i+",#future_"+i+"_mobile").html("n/a");
						}else{
								// Edit home health care cost depending on hours per week selected.
								var cost = costs[i];
								if((i == 0 || i == 1) && cost != "n/a" && !$('.coc-wrapper').hasClass('hourly-active')){
									cost = Math.round((parseInt(cost) / 44) * $('.coc-weekly-hours-calculation-input').val());
								}
								$("#future_"+i).html((+cost)* Math.pow((+1 + +COCDATA.INTERESTRATE),years));
								// Hourly is formatted to two decimals
								if((i == 0 || i == 1) && cost != "n/a" && $('.coc-wrapper').hasClass('hourly-active')){
									$("#future_"+i).formatCurrency({ roundToDecimalPlace: 2 });
								}else{
									$("#future_"+i).formatCurrency();
								}
								
								 // For mobile table
								 _$m_future = $("#future_"+i).clone().html();
								 $('#future_'+i+'_mobile').html(_$m_future);
						}
				}
		}
     
    //console.log("Future Year: "+COC.futureYear);
    var futureLabel = CocSlider.yr_future;
    $('.m-futureLabel').html(futureLabel);
    futureLabel += '<sup>*</sup> Cost';
    $('.futureLabel').html(futureLabel);
    
    COC.populateFootnotes();
}

function populateTilesCheck(){
	if(COC.comparison){
        populateData("1",STATEDATA.activeRegion,"1");
    } else {
        populateTiles();
    }
}

function populateTiles(){
    if(COC.stSel!=''&&COC.stSel!='usa')    $("#national_view").toggle(!COC.comparison);
    // Shows background-color feedback on cards when rate numbers update
    if(!$('#coc-container').attr('update-first-only') == 'true'){
			cardBgAnimate();
		}
       if(COC.typeSel=='Annual'){
           for(var i=1 ; i<=4 ; i++){
              for(var j=0 ; j<=5 ; j++){
                 if($('.coc-service-'+i).find('#median_'+j) != undefined){                     
										 var cost = costArray('Costs')[j];
										 if(j == 0 && $('.coc-wrapper').hasClass('hourly-active')){											 
											 cost = STATEDATA.activeRegion['HomeMakerMedianHourly'];
										 }else if (j == 1 && $('.coc-wrapper').hasClass('hourly-active')){
											 cost = STATEDATA.activeRegion['HHAMedianHourly'];
										 }
										 // Edit home health care cost depending on hours per week selected.
										 if((j == 0 || j == 1) && cost != "n/a" && !$('.coc-wrapper').hasClass('hourly-active')){
											 cost = Math.round((parseInt(cost) / 44) * $('.coc-weekly-hours-calculation-input').val());
										 }
										 $('.coc-service-'+i).find('#median_'+j).html(cost); 
										 // Hourly is formatted to two decimals
											if((j == 0 || j == 1) && cost != "n/a" && $('.coc-wrapper').hasClass('hourly-active')){
												$('.coc-service-'+i).find('#median_'+j).formatCurrency({ roundToDecimalPlace: 2 });
											}else{
												$('.coc-service-'+i).find('#median_'+j).formatCurrency();
											}
                     
                     // For mobile table                     
                     _$m_cost = $('.coc-service-'+i+' #median_'+j ).clone().html();
                     $( '.coc-service-'+i).find(' #median_'+j+'_mobile' ).html( _$m_cost );
                 } 
                 
                 if($('.coc-service-'+i).find('#growth_'+j) != undefined){
                     $('.coc-service-'+i).find('#growth_'+j).html(costArray('GrowthRates')[j]); 
                     $('.coc-service-'+i).find('#growth_label_'+j).show(); 
                     $('.coc-service-'+i).find('#growth_'+j).show();
                     $('.coc-service-'+i).find('#growth_'+j).show();
                     
                     // For mobile table
                     _$m_growth = $('.coc-service-'+i+' #growth_'+j ).clone().html();
                     $('.coc-service-'+i).find('#growth_'+j+'_mobile' ).html( _$m_growth );
                     $('.coc-service-'+i).find('#growth_label_'+j+'_mobile').show(); 
                     $('.coc-service-'+i).find('#growth_'+j+'_mobile').show();
                 }
              }
           }
       }else{
           for(var i=1 ; i<=4 ; i++){
              for(var j=0 ; j<=5 ; j++){                  
									var cost = costArray('Costs')[j];	
									if(j == 0 && $('.coc-wrapper').hasClass('hourly-active')){
										cost = STATEDATA.activeRegion['HomeMakerMedianHourly'];
									}else if (j == 1 && $('.coc-wrapper').hasClass('hourly-active')){
										cost = STATEDATA.activeRegion['HHAMedianHourly'];
									}
									// Edit home health care cost depending on hours per week selected.
									if((j == 0 || j == 1) && cost != "n/a" && !$('.coc-wrapper').hasClass('hourly-active')){
										cost = Math.round((parseInt(cost) / 44) * $('.coc-weekly-hours-calculation-input').val());
									}
									if($('.coc-service-'+i).find('#median_'+j) != undefined){
                     $('.coc-service-'+i).find('#median_'+j).html(cost); 
										 // Hourly is formatted to two decimals
											if((j == 0 || j == 1) && cost != "n/a" && $('.coc-wrapper').hasClass('hourly-active')){
												$('.coc-service-'+i).find('#median_'+j).formatCurrency({ roundToDecimalPlace: 2 });
											}else{
												$('.coc-service-'+i).find('#median_'+j).formatCurrency();
											}
                     
                     // For mobile table
                     _$m_cost2 = $('.coc-service-'+i+' #median_'+j ).clone().html();
                     $('.coc-service-'+i).find('#median_'+j+'_mobile').html(_$m_cost2);
                  }
                   
                  if($('.coc-service-'+i).find('#growth_label_'+j) != undefined){
                     $('.coc-service-'+i).find('#growth_label_'+j).hide(); 
                     $('.coc-service-'+i).find('#growth_'+j).hide(); 
                     
                     // For mobile table
                     $('.coc-service-'+i).find('#growth_label_'+j+'_mobile').hide(); 
                     $('.coc-service-'+i).find('#growth_'+j+'_mobile').hide();                      
                  }  
              }
           }
       }
       
       populateFutureTiles();

       var medianLabel = COC.currYear+' Cost';
       if(STATEDATA.abbr=='USA' && COC.typeSel=='Annual'){
           for(var i=1 ; i<=4 ; i++){
               medianLabel = $('#coc-service-'+i+'_file_box').attr('medianlabel');
               $('#coc-service-'+i+'_file_box .medianLabel').html(medianLabel);
           }
       }else{
           $('.medianLabel').html(medianLabel);
       }
       
       $('.m-medianLabel').html(COC.currYear)
       // flashing (only if they all need to flash, otherwise handled with original event)
			 if(!$('#coc-container').attr('update-first-only') == 'true'){
				 $('.coc-card').fadeTo('fast', 0.5).fadeTo('fast', 1.0); 
			 }
}
function costArray(mess){
    var costStr = STATEDATA.activeRegion[COC.typeSel.toLowerCase()+mess];
    if(null != costStr && undefined != costStr && "" != costStr){
			return costStr.split(',').reverse();
		}else{
			return "";
		}
}

function arrayByString(id){
   if(null != id && undefined != id && "" != id){
		return id.split(",").reverse();
	 }else{
		 return "";
	 }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
String.prototype.capitalizeFirst = function(){
    return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ 
        return p1+p2.toUpperCase();
    });
};
var LOC = {
    at: (COC.tab==1) ? 'coc-loc' : 'coc-future',
    comparisonID: 'coc-loc',
    futureID: 'coc-future',
    stIndex: 0,
    regIndex: 0
};


var globalLocation = globalFuture = [];
var globalRegion1;

$(function(){
});

function onParentStateChange(val,id){
   //console.log("onParentStateChange val="+val + " id="+id);
   globalLocation[0]=val;
   STATEDATA.load(val);
   populateData("1",STATEDATA.activeRegion,id);
}

function populateDurationData(obj,region){ 
    var costStr = region[COC.typeSel.toLowerCase()+"Costs"];
    var val =CocSlider.yr;
    var years = "";
    if(null != val && "" != val && undefined != val){
        if(val > 0){
            years = (+val);
        }
    }
    
    if(null != costStr && undefined != costStr && "" != costStr){
        var costs = costStr.split(',').reverse();
				// Hourly is handled separately
				if($('.coc-wrapper').hasClass('hourly-active')){
					costs = [region['HomeMakerMedianHourly'], region['HHAMedianHourly'], 'n/a', 'n/a', 'n/a', 'n/a'];
				}
        for(var i=0; i<costs.length; i++){
            if(isNaN(parseFloat( (+costs[i])* Math.pow((+1 + +COCDATA.INTERESTRATE),years) ))){
                $("#coc-loc-"+obj+"-percent"+i).html("n/a");
            }else{
								// Edit home health care cost depending on hours per week selected.
								var cost = costs[i];
								if((i == 0 || i == 1) && cost != "n/a" && !$('.coc-wrapper').hasClass('hourly-active')){
									cost = Math.round((parseInt(cost) / 44) * $('.coc-weekly-hours-calculation-input').val());
								}
                $("#coc-loc-"+obj+"-percent"+i).html((+cost)* Math.pow((+1 + +COCDATA.INTERESTRATE),years));
                // Hourly is formatted to two decimals
								if((i == 0 || i == 1) && cost != "n/a" && $('.coc-wrapper').hasClass('hourly-active')){
									$('#coc-loc-'+obj+'-percent'+i).formatCurrency({ roundToDecimalPlace: 2 });
								}else{
									$('#coc-loc-'+obj+'-percent'+i).formatCurrency();
								}
            }
          
        }
   }
}


function populateLoc(obj, loc){
    var col = obj+1;
    if(globalLocation[obj] != undefined && globalLocation[obj] != "" && globalLocation[obj] != null && $('#t1').css("display")== "none" ){ 
        $('#stSelector-'+loc+'-'+col).val(globalLocation[obj]);  //console.log("inside initLoc if " + loc + " setting state " + col );
        populateData(col, STATEDATA.secondDormantRegion, loc);
        
        $('#stSelector-'+loc+'-'+col+ " option[value='-']").remove();           
        $('#stateLabel-'+loc+"-3").css('display','block');      
        $('#regLoc-'+loc+'-'+col).css('display','block');
    }else{  
        $('#stSelector-'+loc+'-'+col).val('0');  
    }
}

function showFutureComparison(){    
    var years = COCDATA.YEAR;
    //console.log("years-"+years )
    var val =CocSlider.yr;
    if(null != val && "" != val && undefined != val){
        if(val > 0){
            years = (+years) + (+val);
            COC.futureYear = years;
        }else{
             COC.futureYear = '';
        }
    }
            
    displayFutureCol(1, STATEDATA.activeRegion, years);
    displayFutureCol(2, STATEDATA.dormantRegion, years);
}

function displayFutureCol(obj, reg, fYear){
    var objVal = $("#coc-states_"+obj).val();
    if(1 == obj || (objVal != null && objVal != "-")){
        if(CocSlider.yr != 0){
             $('.m-futureLabel, #future-yearDisplay-coc-loc-'+obj +', .cards-year-2').html(fYear+"<sup>*");
             $('.bottom-right-coc-loc-'+obj).css('display','block').closest('td').addClass('coc-td-width');
             populateDurationData(obj, reg);
        }else{
             $('.bottom-right-coc-loc-'+obj).css('display','none').closest('td').removeClass('coc-td-width');
        }
    }
}

function populateData(obj,region,id){ 
	if(!$('#coc-container').attr('update-first-only') == 'true'){
		cardBgAnimate();
	}
    var costStr = region[COC.typeSel.toLowerCase()+"Costs"];
    if(null != costStr && undefined != costStr && "" != costStr){
        var costs = costStr.split(',').reverse();
				// Hourly is handled separately
				if($('.coc-wrapper').hasClass('hourly-active')){
					costs = [region['HomeMakerMedianHourly'], region['HHAMedianHourly'], 'n/a', 'n/a', 'n/a', 'n/a'];
				}
				for(var i=0; i<costs.length; i++){
						// Edit home health care cost depending on hours per week selected.
						var cost = costs[i];
						if((i == 0 || i == 1) && cost != "n/a" && !$('.coc-wrapper').hasClass('hourly-active')){
							cost = Math.round((parseInt(cost) / 44) * $('.coc-weekly-hours-calculation-input').val());
						}
						//console.log($('#'+LOC.comparisonID+'-'+obj+'-cost'+i))
            $('#'+LOC.comparisonID+'-'+obj+'-cost'+i).html(cost);
            $('#'+LOC.futureID+'-'+obj+'-cost'+i).html(cost);
						// Hourly is formatted to two decimals
						if((i == 0 || i == 1) && cost != "n/a" && $('.coc-wrapper').hasClass('hourly-active')){
							$('#'+LOC.comparisonID+'-'+obj+'-cost'+i).formatCurrency({ roundToDecimalPlace: 2 });
							$('#'+LOC.futureID+'-'+obj+'-cost'+i).formatCurrency({ roundToDecimalPlace: 2 });
						}else{
							$('#'+LOC.comparisonID+'-'+obj+'-cost'+i).formatCurrency();
							$('#'+LOC.futureID+'-'+obj+'-cost'+i).formatCurrency();
						}
        }   
    }
}


function removeFootnotes(No){
	if($('.coc-btn-group .active').attr('data-freq') != 'Hourly'){    
	 var len = FOOTNOTES[COC.typeSel].length;
    $('#coc-footnotes').empty();
    $.each(FOOTNOTES[COC.typeSel], function(i, f){
        if(i!=No-1){
            $('#coc-footnotes').append(f);        
            if(i<len) $('#coc-footnotes').append('<br>');
        }
    });    
	}else{
		COC.populateHourlyFootnotes();
	}
}

function setLocSubscripts(loc){
    for(var i=1; i<3; i++){
        setSubscripts('#'+loc+'-'+i);
    }
}

function setSubscripts(id){
  if($('.coc-btn-group .active').attr('data-freq') != 'Hourly'){
		FOOTNOTES.setSubscript($(id+'_privateBedroom'),assistedLivingFacility_opt);
    FOOTNOTES.setSubscript($(id+'_homemaker'),homemakerServices);
    FOOTNOTES.setSubscript($(id+'_adultHealthCare'),adultHealth_opt);
    FOOTNOTES.setSubscript($(id+'_homeHealth'),homeHealthAide);
    FOOTNOTES.setSubscript($(id+'_privateRoom'),privateRoom_opt);
    FOOTNOTES.setSubscript($(id+'_semiPrivateRoom'),semiPrivateRoom_opt);
	}else{
		COC.populateHourlyFootnotes();
	}
}
var STATEDATA = {
    abbr: '',
    name: '',
    cities: [],
    current: {},
    currentDormant: {},
    activeRegion: {},
    dormantRegion: {},
    load: function(state){
        $.each(COC.data.states, function(index, st){
            var stName = STATEDATA.getStateName(st.fullName);
            if(st.abbrName==state||stName==state){
                STATEDATA.current = STATEDATA.activeRegion = st;
                STATEDATA.name = stName;
                STATEDATA.abbr = st.abbrName.toUpperCase();
                if(st.abbrName==state)    COC.stSel = state;
              
                COC.regionSel = 0;
                COC.regionNameSel = COCDATA.STATEMEDIAN;

                //console.log(" load COC.regionSel =="+ COC.regionSel +" ,COC.regionNameSel == " + COC.regionNameSel+ " globalRegion1 " +globalRegion1);
            }
        });
    },
    loadDormant: function(state){
        $.each(COC.data.states, function(index, st){
            if(st.abbrName==state){
                STATEDATA.currentDormant =  STATEDATA.dormantRegion = st;
                STATEDATA.name = STATEDATA.getStateName(st.fullName);
                STATEDATA.abbr = st.abbrName.toUpperCase();
                COC.stSelDormant = state;
                COC.regionSelDormant = 0;
                COC.regionNameSelDormant = COCDATA.STATEMEDIAN;   
            }
        });
    },
    loadActiveRegion: function(i){     
        if(isNumber(i)){
            var index = i-1;
            COC.regionSel = i;
            if(index>=0 && null != STATEDATA.current.cities && undefined != STATEDATA.current.cities){
                STATEDATA.activeRegion = STATEDATA.current.cities[index];
                COC.regionNameSel = STATEDATA.activeRegion.fullName;
            }else{
                STATEDATA.activeRegion = STATEDATA.current;
                COC.regionNameSel = COCDATA.STATEMEDIAN;
            }
        }else{
            $.each(STATEDATA.current.cities, function(ic, c){
                if(c.fullName==i){
                    STATEDATA.activeRegion = c;
                    COC.regionSel = STATEDATA.activeRegion.abbrName;
                    COC.regionNameSel = i;
                }
            });
        }//console.log(" loadActiveRegion i=="+i + ", COC.regionNameSel = "+ COC.regionNameSel +", COC.regionSel = "+ COC.regionSel + " globalRegion1 " +globalRegion1)
    },
    loadDormantRegion: function(i){     
        if(isNumber(i)){
            var index = i-1;
            COC.regionSelDormant = i;
            if(index>=0){
                STATEDATA.dormantRegion = STATEDATA.currentDormant.cities[index];
                COC.regionNameSelDormant = STATEDATA.dormantRegion.fullName;
            }else{
                STATEDATA.dormantRegion = STATEDATA.currentDormant;
                COC.regionNameSelDormant = COCDATA.STATEMEDIAN;
            }
        }else{
            $.each(STATEDATA.currentDormant.cities, function(ic, c){
                if(c.fullName==i){
                    STATEDATA.dormantRegion = c;
                    COC.regionSelDormant = STATEDATA.dormantRegion.abbrName;
                    COC.regionNameSelDormant = i;
                }
            });
        }//console.log("loadDormantRegion i=="+i + "  COC.regionNameSelDormant ="+ COC.regionNameSelDormant + " regionSelDormant="+COC.regionSelDormant);
    },
    getStateNameByAbbr: function(abbr){
        var fullname = '';
        $.each(COC.data.states, function(index, st){
            if(st.abbrName==abbr){
                fullname = STATEDATA.getStateName(st.fullName);
                return false;
            }
        });
        
        return fullname;
    },
    getStateName: function(str){
        var replacer = COCDATA.DELIMITER+COCDATA.STATEMEDIAN;
        return str.replace(replacer,COCDATA.EMPTY);
    }
}
var TOOLTIP = {
    SPACE: " ",
    COMMA: ",",
    SRC_DELIMITER: "-",
    REG_DELIMITER: " | ",
    BOLD_TAG_OPEN: "<strong>",
    BOLD_TAG_CLOSE: "</strong>",
    PARENTHESIS_OPEN: "(",
    PARENTHESIS_END: ")",
    HTML_OPEN: '<sup><i class="fa fa-info-circle" style="cursor:pointer;" data-toggle="tooltip" data-container="body" data-html="true" title="',
    HTML_END: '"></i></sup>',
    
    ROS: '<strong>Rest of State</strong> is the median cost for care across the state excluding the cities specifically showcased in this map.',        
    AREA_CONJ: 'is the median cost for care across the following cities: ',
    COST: 'estimates how much care might cost in future years based on <strong>3</strong>% annual inflation.',
    stateMedian: '<strong>State Median</strong> is the median cost for care across the entire state.',
    nationalMedian: '<strong>National Median</strong> is the median cost for care across the Nation.',
    nursingHome: "<strong>Nursing Home Care</strong> is for people who may need a higher level of supervision and care than in an assisted living facility. They offer residents personal care, room and board, supervision, medication, therapies and rehabilitation, as well as skilled nursing care 24 hours a day.",
    livingFacility: "<strong>Assisted Living Facility</strong> - these facilities are living arrangements that provide personal care and health services for people who may need assistance with Activities of Daily Living (ADLs). The level of care provided is not as extensive as that which may be provided in a nursing home. Assisted living is not an alternative to a nursing home, but an intermediate level of long term care. (Referred to as Residential Care Facilities in California)",
    healthCare: "<strong>Adult Day Health Care</strong> can offer a break to caregivers. This type of care provides services at a community-based center for adults who need assistance or supervision during the day but who do not need round the clock care. The centers may provide health services, therapeutic services and social activities.",
    homecare: "<strong>Homemaker Services</strong> make it possible for people to live in their own homes or return to their homes by helping them complete household tasks that they canâ€™t manage alone. Homemaker services aides may clean houses, cook meals or run errands.<br><br><strong>Home Health Aides</strong> help those who live in their own homes instead of residential care facilities. Home health aides may offer care to people who need more extensive personal care than family or friends are able to or have the time or resources to provide.",
    
    printDisclaimer: "For more information about long term care planning, please contact your financial professional.",
    printStandardDisclaimer: 'If you do not have a financial professional, please call Genworth at <strong>1 (866) 419-0398</strong> or visit <a href="http://www.genworth.com/costofcare">genworth.com/costofcare</a>"',
    printCopyright: "<br><br>106556 03/09/15",
    costBreakdown: "View the cost of care based on annual, monthly or daily rates.",
    longTermCare: '<strong>Long Term Care</strong><br><br>Long term care is the care you may need if you are unable to perform daily activities on your own. That means things like eating, bathing, dressing, transferring and using the bathroom. The goal of long term care is to help you maintain your lifestyle as you age.',

    init: function(dormant){
        var regionNameSelector = (!!dormant) ? COC.regionNameSelDormant : COC.regionNameSel;
        var activeRegionObj = (!!dormant) ? STATEDATA.dormantRegion : STATEDATA.activeRegion;
        

        var html = COCDATA.EMPTY;       
        if(regionNameSelector==COCDATA.STATEMEDIAN){
            html += TOOLTIP.stateMedian;
        }else if(regionNameSelector==COCDATA.RESTOFSTATE){
            html += TOOLTIP.ROS;
        }else if(COCDATA.isArea(dormant)){
            html += TOOLTIP.BOLD_TAG_OPEN + activeRegionObj.fullName + TOOLTIP.COMMA + TOOLTIP.SPACE + STATEDATA.abbr + TOOLTIP.BOLD_TAG_CLOSE + TOOLTIP.SPACE + TOOLTIP.AREA_CONJ + TOOLTIP.SPACE;
            var areaStr = activeRegionObj.area;
            var areaArr = areaStr.split(TOOLTIP.SRC_DELIMITER);
            var len = areaArr.length;
            
            var coverArea = "";
            var hold = false;
            $.each(areaArr, function(i, r){
                if(r.indexOf(TOOLTIP.PARENTHESIS_OPEN)!=-1){
                    coverArea = r.replace(TOOLTIP.PARENTHESIS_OPEN, COCDATA.EMPTY) + TOOLTIP.SRC_DELIMITER;
                    hold = true;
                }else if(hold){
                    r = coverArea + r.replace(TOOLTIP.PARENTHESIS_END, COCDATA.EMPTY);
                    hold = false;
                }
                
                if(!hold){
                    html += TOOLTIP.BOLD_TAG_OPEN + r + TOOLTIP.COMMA + TOOLTIP.SPACE + STATEDATA.abbr + TOOLTIP.BOLD_TAG_CLOSE;
                    if(i<len-1)    html += TOOLTIP.REG_DELIMITER;
                }
            });
        }else{
            return html; // nothing
        }
        
        return TOOLTIP.HTML_OPEN + html + TOOLTIP.HTML_END;
    }
};

var FOOTNOTES = {
    fn: {'#coc-service-1_headLabel_3':'homemakerServices', '#coc-service-1_headLabel_4':'homeHealthAide', '#coc-service-2_headLabel':'adultHealth', '#coc-service-2_headLabel_3':'adultHealth', '#coc-service-3_headLabel':'assistedLivingFacility', '#coc-service-3_headLabel_3':'assistedLivingFacility', '#coc-service-4_headLabel_3':'privateRoom', '#coc-service-4_headLabel_4':'semiPrivateRoom'},
    SUP: '<sup>',
    Annual:    ["Genworth Cost of Care Survey 2018, conducted by CareScout<sup>&reg;</sup>, June 2018",
                "<sup>1</sup> Based on <span class='disclaimers-hour-variable'></span> hours per week by 52 weeks",
                "<sup>2</sup> Represents the compound annual growth rate based on Genworth Cost of Care Survey",
                "<sup>3</sup> Based on 5 days per week by 52 weeks",
                "<sup>4</sup> Based on 12 months of care, private, one bedroom",
                "<sup>5</sup> Based on 365 days of care"],
    Annual_opt:["Genworth Cost of Care Survey 2018, conducted by CareScout<sup>&reg;</sup>, June 2018",
                "<sup>1</sup> Based on <span class='disclaimers-hour-variable'></span> hours per week by 52 weeks",
                "<sup>2</sup> Based on 5 days per week by 52 weeks",
                "<sup>3</sup> Based on 12 months of care, private, one bedroom",
                "<sup>4</sup> Based on 365 days of care"],
    Monthly:   ["Genworth Cost of Care Survey 2018, conducted by CareScout<sup>&reg;</sup>, June 2018",
                "<sup>1</sup> Based on annual rate divided by 12 months (assumes <span class='disclaimers-hour-variable'></span> hours per week)",
                "<sup>2</sup> Based on annual rate divided by 12 months",
                "<sup>3</sup> As reported, monthly rate, private, one bedroom"],
    Daily:     ["Genworth Cost of Care Survey 2018, conducted by CareScout<sup>&reg;</sup>, June 2018",
                "<sup>1</sup> Based on annual rate divided by 365 days (assumes <span class='disclaimers-hour-variable'></span> hours per week)",
                "<sup>2</sup> As reported, daily rate",
                "<sup>3</sup> Based on annual rate divided by 365 days, private, one bedroom"],
		Hourly:     ["Genworth Cost of Care Survey 2018, conducted by CareScout<sup>&reg;</sup>, June 2018",
                "<sup>1</sup> As reported hourly cost",
                "The median rates are rounded to the nearest dollar."],
    sup3: "<sup>2</sup> Represents the compound annual growth rate based on Genworth Cost of Care Survey",
    Asterisk: "<sup>*</sup> Estimates how much care might cost in future years based on 3% annual inflation",
    setSubscript: function(selector, sup){
        if(selector){
            if(typeof sup === 'string' || sup instanceof String)    sup = window[sup];
            var txtSUP = selector.html();
            var upper = FOOTNOTES.SUP.toUpperCase(); // IE8 fix
            
            if(txtSUP){
                if(txtSUP.indexOf(FOOTNOTES.SUP)!=-1){
                    var txt = txtSUP.split(FOOTNOTES.SUP)[0];
                    selector.html(txt+sup[COC.typeSel]);
                }else if(txtSUP.indexOf(upper)!=-1){
                    selector.html('');
                    var txt = txtSUP.split(upper)[0];
                    selector.html(txt+sup[COC.typeSel]);
                }
            }
        }
   }
};

function SUP(annual, monthly, daily) {
  this.Annual = FOOTNOTES.SUP+annual;
  this.Monthly = FOOTNOTES.SUP+monthly;
  this.Daily = FOOTNOTES.SUP+daily;
}

var homemakerServices = new SUP(1,1,1);
var homeHealthAide = homemakerServices;
var adultHealth = new SUP(3,2,2);
var assistedLivingFacility = new SUP(4,3,3);
var privateRoom = new SUP(5,2,2);
var semiPrivateRoom = privateRoom;

var homemakerServices_opt = homemakerServices;
var homeHealthAide_opt = homemakerServices;
var adultHealth_opt = new SUP(2,2,2);
var assistedLivingFacility_opt = new SUP(3,3,3);
var privateRoom_opt = new SUP(4,2,2);
var semiPrivateRoom_opt = privateRoom_opt;

// Tooltips are initalized in parent clientlib via Styleguide

$(function () {
    $('.coc-ltc').tooltip({
        title: TOOLTIP.longTermCare,
        html: true,
        container: 'body'
    });
});

var geocoder;
var map;
var map_center;
var bounds ;
var globalMarkers = [];
var stateData =[];
var localMarkers = [];
var infowindow ;
var USGeoJsonTemplate;
var selectedState;
var MY_MAPTYPE_ID = 'custom_style';
var RED_MARKER = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
var BLUE_MARKER = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
var MAP_CENTER_LATITUDE=39.350033;
var MAP_CENTER_LONGITUDE=-98.9500523;

$(document).ready(function(){
    if(!URI.isPrinter){ // not loading Map on Printer page
            $.ajax({
                dataType: "json",
                url: COCDATA.MAP_DATA_SRC,
                async: false
              }).done(function(data) {
                  //console.log("Loaded Json data");
                  USGeoJsonTemplate= data;
              });
              COCDATA.load();
    }
});

/* ===================================================================================
 * Fixes click issue on panning icons for Google maps, specifically on the iPad.
 * Runs on page load to allow the map to load
 * =================================================================================== */
$( window ).on( "load", function() { 
        if(!URI.isPrinter){ // not loading Map on Printer page
            $('#map-canvas .gmnoprint div[title^="Pan up"], #map-canvas .gmnoprint div[title^="Pan right"], #map-canvas .gmnoprint div[title^="Pan down"], #map-canvas .gmnoprint div[title^="Pan left"]')
            .on('touchstart', function () {
                $(this).click();
                return false;
            });
        }
});

 function initMap() {

    //console.log("initMap");

     geocoder = new google.maps.Geocoder();
     bounds = new google.maps.LatLngBounds();

      var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(MAP_CENTER_LATITUDE,MAP_CENTER_LONGITUDE),
        disableDefaultUI: true,
        panControl: true,
        panControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
            position: google.maps.ControlPosition.LEFT_TOP
       },
       mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            },
       mapTypeId: MY_MAPTYPE_ID

      }

      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      map_center = map.getCenter();
      var featureOpts = [
                         {
                            featureType: 'administrative.country',
                            elementType: 'labels',
                           stylers: [
                             { visibility: 'off' }
                           ]
                         },
                         {
                             featureType: 'administrative.locality',
                            elementType: 'labels',
                            stylers: [
                              { visibility: 'on' }
                            ]
                          },
                         {
                             featureType: 'road',
                             elementType: 'labels',
                             stylers: [
                               { visibility: 'off' }
                             ]
                         },
                         {
                             featureType: 'poi',
                             elementType: 'labels',
                             stylers: [
                               { visibility: 'off' }
                             ]
                         },
                         {
                             featureType: 'landscape',
                             elementType: 'labels',
                             stylers: [
                               { visibility: 'off' }
                             ]
                         },
                         {
                             featureType: 'water',
                             elementType: 'labels',
                             stylers: [
                               { visibility: 'off' }
                             ]
                         }
                       ];

      var styledMapOptions = {
                name: 'Custom Style'
              };
      var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

      map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

      
      var imageBounds = new google.maps.LatLngBounds(
              new google.maps.LatLng(34.512216, -94.52655),
              new google.maps.LatLng(35.573941, -90.12544));
              
     /* var   historicalOverlay = new google.maps.GroundOverlay(
          '/etc/clientlibs/genworth-twelve-column/coc2015/images/ak.png',
          imageBounds);
          */
     // historicalOverlay.setMap(map);

      google.maps.event.addListener(map, 'click', function(e) {
           // Show modal when click on a non US location
           $('#cocErrorNonUS').modal('show');
      });

     map.data.addGeoJson(USGeoJsonTemplate);
        var featureStyle = {
         strokeWeight: 0.5,
         fillOpacity: 0
      }
      map.data.setStyle(featureStyle);

     map.data.addListener('click', function(event) {
         COC_OMNI.isMap = true;
         //COC_OMNI.doTag(44, 'Map');
         COC_OMNI.assignEVar(44, "Map");
         selectedState = event.feature.getProperty("NAME");

         for (var i = 0; i < globalMarkers.length; i++) {
           globalMarkers[i].setIcon(RED_MARKER);
         }
         
         if(event != null){
              map.data.revertStyle();
              dropPinsByLatLong(event.feature.getProperty("CODE"));
              map.data.overrideStyle(map.data.getFeatureById(event.feature),{strokeWeight: 2,fillOpacity:0.4,fillColor:'#000000'});
         }
              
     });

         google.maps.event.addListener(map, 'zoom_changed', function() {
            if(map.getZoom() < 3){
                map.setZoom(3);
            }else if(map.getZoom() > 7){
                map.setZoom(7);
            }
            
          /*  if (map.getZoom()==4) {    
                historicalOverlay.setMap(map);
              }else{ 
                historicalOverlay.setMap(null);
             } */
            
         });

         infowindow = new google.maps.InfoWindow({
            position : map.getCenter(),
            disableAutoPan: true,
            maxWidth:600
          });

        map.data.addListener('mouseover', function(e) {
              if( selectedState != e.feature.getProperty("NAME")){
                  map.data.overrideStyle(e.feature, {strokeWeight: 2,fillOpacity:0.2,fillColor:'#000000' });
              }else{
                  map.data.overrideStyle(e.feature, {strokeWeight: 2,fillOpacity:0.4,fillColor:'#000000' });
              }
    
               for (var i = 0; i < globalMarkers.length; i++) {
                   if(globalMarkers[i].position.equals(e.latLng)){  
                       infowindow.setContent('<div style="line-height:1.35;overflow:hidden;white-space:nowrap;">'+globalMarkers[i].title+'</div>');
                       infowindow.open(map,globalMarkers[i]);
                   }
               }
        });
        map.data.addListener('mouseout', function(e) {
            if( selectedState == e.feature.getProperty("NAME")){
                map.data.overrideStyle(e.feature, {strokeWeight: 2,fillOpacity:0.4,fillColor:'#000000' });
            }else{
                map.data.overrideStyle(e.feature, {strokeWeight: 0.5,fillOpacity:0});
            }

            for (var i = 0; i < globalMarkers.length; i++) {
               if(globalMarkers[i].position.equals(e.latLng)){  
                   infowindow.close(map,globalMarkers[i]);
               }
            }
        });
        
         google.maps.event.addListenerOnce(map, 'idle', function(){
             google.maps.event.trigger(map, 'resize');
             map.setCenter(map_center);
             map.panTo(map_center);
        });
         map_center = map.getCenter(); 
				 
				// ADA - remove unnecessary iframe
				setTimeout(function(){ $('.coc-google-map iframe').remove(); }, 1000);
				// ADA - Add alt text to zoom images
				setTimeout(function(){ 
					$("#map-canvas button[title='Zoom in'] img").attr('alt', 'Zoom in');
					$("#map-canvas button[title='Zoom out'] img").attr('alt', 'Zoom out');
				}, 10000);
 }

  function geocodeAddress() {
       clearMap();
       globalMarkers =[];
       for (var i= 0; i< STATEDATA.current.cities.length; i++) {
            createMarker(STATEDATA.abbr,STATEDATA.current.cities[i].fullName,STATEDATA.current.cities[i].geoLocations.split(",")[0],STATEDATA.current.cities[i].geoLocations.split(",")[1],RED_MARKER);
        }
  }

 function createMarker(name,add,lat,lng,url) {

     if(add !=="Rest Of State"){

       var marker = new google.maps.Marker({
         position: new google.maps.LatLng(lat,lng),
          map: map,
         icon:url,
         title:add
        });

       globalMarkers.push(marker);
      // console.log("placing marker 266  " + globalMarkers.length + "--"+add);

       google.maps.event.addListener(marker, 'click', function(e) {
          createMarkerByLatLong(add,lat,lng, e);
           infowindow.setContent('<div style="line-height:1.35;overflow:hidden;white-space:nowrap;">'+add+'</div>');
           infowindow.open(map,marker);
          // map.setCenter(new google.maps.LatLng(lat,lng));
          COC.populateStatesRegionsSelectors(name,add);
          populateTilesCheck();
          //COC_OMNI.doTag(44, 'Map');
          COC_OMNI.assignEVar(44, "Map");
          setTimeout(function() {  infowindow.close(map,marker)},2000);
       });

       map.setCenter(new google.maps.LatLng(lat,lng));
      // map.panToWithOffset(marker.position, 0, 50);
       map.panTo(new google.maps.LatLng(lat,lng));
       map.setZoom(5);
      }
       map_center = map.getCenter();
 }


  function changeState(event) { 
        if(event != null){
           map.data.revertStyle();
           map.data.overrideStyle(map.data.getFeatureById(event.data.feature),{strokeWeight: 2,fillOpacity:0.4,fillColor:'#000000'});
           if(COC.stSel ==""){
                dropPinsByLatLong(event.feature.getProperty("CODE"));
           }else if(COC.stSel != "" && COC.stSel != null) {
                 geocodeAddress();
           }
        }
   }


 function createMarkerByLatLong(add,lat,lng,e){

        var latlng;
        if(e == null){
            latlng= new google.maps.LatLng(lat,lng);
        }
        else if(e != null){
            latlng = e.latLng;
        }

        for (var i = 0; i < globalMarkers.length; i++) {

             if(!globalMarkers[i].position.equals(latlng)){
                 globalMarkers[i].setIcon(RED_MARKER);
                 infowindow.close(map,globalMarkers[i]);
             }
          }

        for (var i = 0; i < globalMarkers.length; i++) {

             if(globalMarkers[i].position.equals(latlng)){
                   if(e == null){
                       globalMarkers[i].setVisible(true);
                   }
                   var mpos = globalMarkers[i].getPosition();
                   if(!map.getBounds().contains(mpos))     map.setCenter(globalMarkers[i].getPosition());
                   globalMarkers[i].setIcon(BLUE_MARKER);
                   infowindow.setContent('<div style="line-height:1.35;overflow:hidden;white-space:nowrap;">'+add+'</div>');
                   infowindow.open(map,globalMarkers[i]);
                   setTimeout(function() {  infowindow.close(map,globalMarkers[i])},2000);
              }
          }
      }

 function dropPinsByLatLong(localState){
      $('#coc-states').val(localState);
      $("#coc-states").change();
       map_center = map.getCenter();
}

 function changeLocation() {

       if ( $('#coc-stRegions')!= null) {

               if(STATEDATA.activeRegion != undefined && STATEDATA.activeRegion.fullName==COCDATA.RESTOFSTATE){
                    hidePins();
               }else if((STATEDATA.activeRegion != undefined && STATEDATA.activeRegion.fullName.indexOf(COCDATA.STATEMEDIAN) != -1) ){
                   showPins();
               }else{
                   createMarkerByLatLong(STATEDATA.activeRegion.fullName,STATEDATA.activeRegion.geoLocations.split(",")[0],STATEDATA.activeRegion.geoLocations.split(",")[1]);
               }
        }
  }

// Sets the map on all markers in the array.
function clearMap() {
     if (globalMarkers!= null) {
      for (var i = 0; i < globalMarkers.length; i++) {
            globalMarkers[i].setMap(null);
          }
      }
}

function hidePins() {
     if (globalMarkers!= null) {
      for (var i = 0; i < globalMarkers.length; i++) {
            globalMarkers[i].setVisible(false); 
            infowindow.close(map,globalMarkers[i]);
          }
      }
}

function showPins() {
     if (globalMarkers!= null) {
      for (var i = 0; i < globalMarkers.length; i++) {
            globalMarkers[i].setVisible(true);
            globalMarkers[i].setIcon(RED_MARKER);
            infowindow.close(map,globalMarkers[i]);
          }
      }
}

function loadMapAPI() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBOLYu1AYIWDuIyX8z9srMUNphIvUgeOv0&callback=initMap';
      document.body.appendChild(script);			
}
if(!URI.isPrinter){ // not loading Map on Printer page
    window.onload = loadMapAPI;
}

/*
function loadScript(src,callback){
      
    var script = document.createElement("script");
    script.type = "text/javascript";
    if(callback)script.onload=callback;
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = src;
  }
  
loadScript('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&key=AIzaSyA2doz0vMGWA8SGLm6scWzKUCtwMpPkr34&callback=initMap',
        function(){console.log('google-loader has been loaded, but not the maps-API ');});

*/

/*
* jQuery Sort plugin
* Version 1.1.0 (4/1/09)
* @requires jQuery v1.2.3 or later
*
* Copyright (c) 2009 C. Pettit / ZeroPoint Development
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*  
*/



(function($) {

    $.fn.sort = function(sortAttr, sortDesc) {
	//Must Specify Sort Attribute
        if (typeof (sortAttr) === "undefined") {
            return $(this);
        }
        if (sortAttr == "") {
            return $(this);
        }

	//If sort attribute is a single string such as "name"
        if (typeof (sortAttr) === "string") {

            var retObj = $(this).get().sort(function(a, b) {
		//Sort numeric values
                if (typeof ($(a).attr(sortAttr)) === "number") {

                    return parseInt($(a).attr(sortAttr)) > parseInt($(b).attr(sortAttr)) ? 1 : -1;
                }
		//sort string values
                else {
                    return $(a).attr(sortAttr).toLowerCase() > $(b).attr(sortAttr).toLowerCase() ? 1 : -1;
                }
            });
	    //If sort is descending
            if (getSort(sortDesc)) {
                return $(retObj.reverse());
            }
            else {
                return $(retObj);
            }
        }
	//If data is an object such as a returned JSON object
        if (typeof (sortAttr) === "object") {
	    //If the sort attribute is an Array  i.e. ["Name", "Phone","Foo"] , this will sort based on that order.
            if ((sortAttr).length) {
                var retObj = $(this).get().sort(function(a, b) {
                    var i = 0;
                    var retval = 1;
                    while (i < sortAttr.length) {
                        var al = $(a).attr(sortAttr[i]).toLowerCase();
                        var bl = $(b).attr(sortAttr[i]).toLowerCase();

                        if (al > bl) { retval = 1; break; }
                        if (bl > al) { retval = -1; break; }
                        i++;
                    }
                    return retval;

                });
                if (getSort(sortDesc)) {
                    return $(retObj.reverse());
                }
                else {
                    return $(retObj);
                }
            }
 	    //Sort object based on single sort attribute
            else {
                var retObj = $(this).get().sort(function(a, b) {
                    var attrLen = 0;
                    for (var v in sortAttr) {
                        var al = $(a).attr(v).toLowerCase();
                        var bl = $(b).attr(v).toLowerCase();
                        if (al > bl) { return (getSort(sortAttr[v])) ? -1 : 1; }
                        if (bl > al) { return (getSort(sortAttr[v])) ? 1 : -1; }
                    }

                });
                if (getSort(sortDesc)) {
                    return $(retObj.reverse());
                }
                else {
                    return $(retObj);
                }

            }
        }
    }

	//Determines if the sort should be Ascending(false) or Descending(true)
	//Can determine based on Boolean Value or String
    function getSort(sortDesc) {
        if (typeof sortDesc == "boolean") {
            return sortDesc;
        }
        else if (sortDesc.toLowerCase() == "desc") {
            return true;
        }
	//Incase boolean value gets passed as string
        else if (sortDesc.toLowerCase() == "true") {
            return true;
        }
        else return false;
    }
})(jQuery);
//
// Invokes and tags the tooltips for COC cards (not Compare Location tooltips.)
//
// Invocation has a .5 second delay for more accurate tagging data.
// ------------------------------------------------------------------------------
$(function() {
    $('.coc-card-icon').tooltip({ delay: { "show": 500, "hide": 100 } }).on('shown.bs.tooltip', function () {
       
    	var name = ["Home Health Care","Adult Day Health Care","Assisted Living Facility","Nursing Home Care"];
    	var index = $(this).data('cardsid').slice(-1);
    	
	        COC_OMNI.doTag(5,"gnw:COC:" + name[index-1]);
    });
});
// Break points
var BREAKPOINT_MD = 768;
var BREAKPOINT_SM = 600;
var BREAKPOINT_XS = 480;

var compareLocationSwitcher = function(){
    var viewport = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var iSwitched = false;
    var $elem = $('.coc-compare-opt2');
    var $source = $('.coc-compare-right');
    var $dest = $('.cards-wrap-cost + .cards-wrap-cost');
    
    if (viewport < BREAKPOINT_MD){
        iSwitched =true;
        $elem.prependTo( $dest );
    }
    
    $(window).resize(function(){
        var _v = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // Decreasing viewport to small view
        if ( ( _v < BREAKPOINT_MD) && (!iSwitched)){
            iSwitched =true;
            $elem.prependTo( $dest );
        }
        // Increasing viewport to large view
        else if( ( _v > BREAKPOINT_MD) && (iSwitched)){
            iSwitched =false;
            $elem.prependTo( $source );
        }
    });
};
  
$(function(){
   /* ========================================================================
    * Adds the gray background to the adjacent .row directly after the COC map.
    * Also adds gray background to '#formdate'
    * Alternate treatment might have to be used if .row is not used.
    * ======================================================================== */
   
    var class_coc_bg = 'coc-bg-highlight';

    $('#coc-container').closest('.row').next().wrap('<div class="'+class_coc_bg+'"></div>');
		$('#coc-container').closest('.row').next().next().wrap('<div class="'+class_coc_bg+'"></div>');
    $('#formdate').closest('.row').wrap('<div class="'+class_coc_bg+'"></div>');
    
    
    //
    // Move '+ Compare Location' based on device
    // =============================================
    compareLocationSwitcher();
});
var COC_OMNI = {
    isMap: false,
    isLocTab: false,
    tags: { 
        "loads": 'gnw:COC:Loads',
        "compare": 'gnw:COC:Compare Locations Init',
        "toResetLocation": 'gnw:COC:Link_Location Reset',            
        "toMapView": 'gnw:COC:Return to Map View',
        "toNationalView": 'gnw:COC:Link_Return to National View'
    },
    checkTag: function(n, mess, flag){//console.log("boolean -- "+flag);
        if(!COC_OMNI[flag]){
            COC_OMNI.doTag(n, mess);
        }else{
            COC_OMNI[flag] = false;
        }
    },
    assignEVar: function(n, mess){
       Genworth_SC.Action.assignEVar(n, mess);
    },
    doTag: function(n, mess){
       if(typeof Genworth_SC == "undefined"){
            console.log("There is NO Omniture Base Tag applied.");
        }else{
            this.assignEVar(n, mess);
            if(mess!="Map"&&mess!="Dropdown")   Genworth_SC.Action.assignEvent(51);
            Genworth_SC.Action.trackLink();
        }
    }
};
var PRINTER = {
    COOKIE_NAME: 'printStr',
    COMMA: ',',
    DELIMITER: '|',
    tab: 1,
    type: '',
    regions: [],
    activeRegion: '',
    dormantRegion: '',
    secondDormantRegion: '',
    futureYear: '',
    removeCol: false,
    clicked: false,
    title: ''
};
//console.log('js checks CQ mode:'+CQURLInfo.runModes);
function getFutureValues(arr){
	var fCosts = '';
	for(var i=0; i<arr.length; i++){
		if($('.coc-wrapper').hasClass('hourly-active')){

			var cVal =((+arr[i])* Math.pow((+1 + +COCDATA.INTERESTRATE),CocSlider.yr));
			cVal= cVal.toFixed(2);
		}
		else{

			var cVal = Math.round((+arr[i])* Math.pow((+1 + +COCDATA.INTERESTRATE),CocSlider.yr));
		}
		if(isNaN(parseFloat(cVal)))    fCosts = fCosts+"n/a";
		else    fCosts = fCosts+ cVal;

		if(i<arr.length-1)    fCosts += ",";
	}
	return fCosts;
}

function reverseArray(mess){
	if(mess)    {
		var newlocCosts =[];
		var oldlocCosts=mess.split(',').reverse();

		for(var i=0;i<oldlocCosts.length;i++){
			if(i<=1 && oldlocCosts[i] !="n/a"){
				newlocCosts[i] = Math.round((parseInt(oldlocCosts[i]) / 44) * $('.coc-weekly-hours-calculation-input').val()).toString();
			}else{
				newlocCosts[i]= oldlocCosts[i];
			} 
		}

		return newlocCosts;
	}
	return null;
}

function setupPDF(printStr){
    //$.log("PRINTER str == ["+printStr+"]");
    var pArr = printStr.split('|');
    PRINTER.pdf = pArr[pArr.length-1];
    if((pArr[0]=="3" && pArr.length==5 && pArr[2]!='') || (pArr[0]=="2" && pArr[2]!='')){
        PRINTER.pdf += PRINTER.DELIMITER + "true";
    }else{
        PRINTER.pdf += PRINTER.DELIMITER + "false";
    }
    if($('.coc-wrapper').hasClass('hourly-active')){
    	var loc1Costs = [STATEDATA.activeRegion['HomeMakerMedianHourly'], STATEDATA.activeRegion['HHAMedianHourly'], 'n/a', 'n/a', 'n/a', 'n/a'];
    	
    	var loc2Costs = [STATEDATA.dormantRegion['HomeMakerMedianHourly'], STATEDATA.dormantRegion['HHAMedianHourly'], 'n/a', 'n/a', 'n/a', 'n/a'];
	}else{
		var loc1Costs = reverseArray(STATEDATA.activeRegion[COC.typeSel.toLowerCase()+"Costs"]); //costArray('Costs');
	    
	    var loc2Costs = reverseArray(STATEDATA.dormantRegion[COC.typeSel.toLowerCase()+"Costs"]);
	}
    
    PRINTER.pdf += PRINTER.DELIMITER + pArr[1] + PRINTER.DELIMITER + COC.currYear;
    PRINTER.pdf += PRINTER.DELIMITER + loc1Costs;
    
    if(pArr[0]=="1" && pArr[pArr.length-1]=="Annual")    PRINTER.pdf += PRINTER.DELIMITER + "rate" + PRINTER.DELIMITER + costArray('GrowthRates');
    if(pArr[0]=="2" && pArr[2]!='')                 PRINTER.pdf += PRINTER.DELIMITER + pArr[2] + PRINTER.DELIMITER + COC.currYear + PRINTER.DELIMITER + loc2Costs;
    if(pArr[0]=="3"){
        if(pArr.length==4 && pArr[2]!='')   PRINTER.pdf += PRINTER.DELIMITER + pArr[2] + PRINTER.DELIMITER + getFutureValues(loc1Costs);
        else{
            PRINTER.pdf += PRINTER.DELIMITER + pArr[3] + PRINTER.DELIMITER + getFutureValues(loc1Costs);
            if(pArr[2]!='') PRINTER.pdf += PRINTER.DELIMITER + pArr[2] + PRINTER.DELIMITER + COC.currYear + PRINTER.DELIMITER + loc2Costs + PRINTER.DELIMITER + pArr[3] + PRINTER.DELIMITER + getFutureValues(loc2Costs);
        }                     
    }                     
    printPDF(PRINTER.pdf);
    COC_OMNI.doTag(5, "PDF Icon Printing: "+printStr);
    //$.log("PDF str == ["+PRINTER.pdf+"]");
}

function addField(f, n, v){
    var element= document.createElement("input"); 
    element.setAttribute("type", "hidden");    
    element.name=n;
    element.value=v;    
    f.appendChild(element);
}
function viewFormPost(){
    var data = $('form').serializeFormJSON();
    var mess = "Form post";
    $.each(data, function(key,val){
        mess += "\n\n" + key + ": " + val;
    });
    alert(mess);
}

function replaceNbsps(str) {
	  var re = new RegExp(String.fromCharCode(160), "g");
	  return str.replace(re, " ");
}

function printPDF(dataStr){
    var form = document.createElement("form");
    form.method = "POST";
    form.action = "/bin/gnw-redesign/costofcare"; 
    form.target = "_blank";

    //var  hourlyrate = $('.coc-weekly-hours-calculation-input').val();
    addField(form, "pdfData", dataStr);
    addField(form, "hourlyrate", $('.coc-weekly-hours-calculation-input').val());
    addField(form, "policyDate", replaceNbsps($("#formdate").text()));
    if(URI.pageName=="landing")		addField(form, "name", "cocpro");
    else							addField(form, "name", "costofcare");
    document.body.appendChild(form);
    //if(viewPost)    viewFormPost();
    form.submit();
    document.body.removeChild(form);
}
/////////////////////////////////////////////////////////////////////
$(function(){      
    $('.coc-print-icon').css("cursor","pointer").click(function(){
    	PRINTER.clicked=true;
        //window.print();
    	// Use these lines for PDF button if there is
        PRINTER.regions = [];
        PRINTER.regions[0] = setupRegion(STATEDATA.activeRegion);
        if(COC.comparison)    PRINTER.regions[1] = setupRegion(STATEDATA.dormantRegion, true);
    
        setupPrinter(PRINTER.regions);
    });
}); // end READY

if(window.matchMedia){
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql){
        if(mql.matches)     beforePrint();
        else                afterPrint();
    });
}

var beforePrint = function(){
    //console.log('Before printing.');
    PRINTER.regions = [];
    PRINTER.regions[0] = setupRegion(STATEDATA.activeRegion);
    if(COC.comparison)    PRINTER.regions[1] = setupRegion(STATEDATA.dormantRegion, true);
    
    setupPrinter(PRINTER.regions);
};

var afterPrint = function(){
    //console.log('After printing');        
    var cStr = document.getCookie(PRINTER.COOKIE_NAME);
    var cntxt = "Crtl+P Printing: ";
    if(PRINTER.clicked){
        cntxt = "PDF Icon Printing: ";
        PRINTER.clicked = false;
    }
    COC_OMNI.doTag(5, cntxt+cStr);
};
    
function setupPrinter(arr){    
    var prStr = COC.future ? 3 : COC.comparison ? 2 : 1;
    for(var i=0; i<arr.length; i++){
       // if(arr[i]=='')    continue;
        prStr += PRINTER.DELIMITER+arr[i];
    }
    if(COC.future)    prStr += PRINTER.DELIMITER+CocSlider.yr_future;
    else prStr += PRINTER.DELIMITER;
    if($('.coc-wrapper').hasClass('hourly-active')){
    	
    	prStr += PRINTER.DELIMITER+"Hourly";     
    }
    else{
         
    	prStr += PRINTER.DELIMITER+COC.typeSel;
    }
   
    setupPDF(prStr); // PDF
    document.setCookie(PRINTER.COOKIE_NAME,prStr);
}
function setupRegion(reg, dormant){
    var name = reg.fullName;
    var glob = (!!dormant) ? COC.stSelDormant : COC.stSel;
    if(name){
        if(name.indexOf(COCDATA.STATEMEDIAN)!=-1){
            return name;
        }else if(name.indexOf(COCDATA.RESTOFSTATE)!=-1){
            return STATEDATA.getStateNameByAbbr(glob) + COCDATA.DELIMITER + COCDATA.RESTOFSTATE + ', ' + glob.toUpperCase();
        }
        
        if(glob)    name += ', ' + glob.toUpperCase();
        return name;
    }
    return '';
}

/*********************************************************
gets the value of a cookie
**********************************************************/
document.getCookie = function(sName){
    sName = sName.toLowerCase();
    var oCrumbles = document.cookie.split(';');
    for(var i=0; i<oCrumbles.length;i++){
        var oPair= oCrumbles[i].split('=');
        var sKey = decodeURIComponent(oPair[0].trim().toLowerCase());
        var sValue = oPair.length>1?oPair[1]:'';
        if(sKey == sName)
            return decodeURIComponent(sValue);
    }
    return '';
}
/*********************************************************
sets the value of a cookie
**********************************************************/
document.setCookie = function(sName,sValue){
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 36000;
    now.setTime(expireTime);
    var sCookie = encodeURIComponent(sName) + '=' + encodeURIComponent(sValue) + ';expires=' + now.toGMTString() + ';path=/';
    document.cookie= sCookie;
}
/*********************************************************
removes the value of a cookie
**********************************************************/
document.clearCookie = function(sName){
    setCookie(sName,'');
}
