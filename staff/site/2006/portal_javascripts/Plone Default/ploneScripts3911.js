/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by ----- filename.js -----
 */

/* ----- register_function.js ----- */
/* Essential javascripts, used a lot. 
 * These should be placed inline
 * We have to be certain they are loaded before anything that uses them 
 */

// check for ie5 mac
var bugRiddenCrashPronePieceOfJunk = (
    navigator.userAgent.indexOf('MSIE 5') != -1
    &&
    navigator.userAgent.indexOf('Mac') != -1
)

// check for W3CDOM compatibility
var W3CDOM = (!bugRiddenCrashPronePieceOfJunk &&
               document.getElementsByTagName &&
               document.createElement);

// cross browser function for registering event handlers
function registerEventListener(elem, event, func) {
    if (elem.addEventListener) {
        elem.addEventListener(event, func, false);
        return true;
    } else if (elem.attachEvent) {
        var result = elem.attachEvent("on"+event, func);
        return result;
    }
    // maybe we could implement something with an array
    return false;
}

// cross browser function for unregistering event handlers
function unRegisterEventListener(elem, event, func) {
    if (elem.removeEventListener) {
        elem.removeEventListener(event, func, false);
        return true;
    } else if (elem.detachEvent) {
        var result = elem.detachEvent("on"+event, func);
        return result;
    }
    // maybe we could implement something with an array
    return false;
}

function registerPloneFunction(func) {
    // registers a function to fire onload.
    registerEventListener(window, "load", func);
}

function unRegisterPloneFunction(func) {
    // unregisters a function so it does not fire onload.
    unRegisterEventListener(window, "load", func);
}

function getContentArea() {
    // returns our content area element
    if (W3CDOM) {
        var node = document.getElementById('region-content');
        if (!node) {
            node = document.getElementById('content');
        }
        return node;
    }
} 


/* ----- cssQuery.js ----- */
/*
	cssQuery, version 2.0 (2005/05/23)
	Copyright: 2004-2005, Dean Edwards (http://dean.edwards.name/)
	License: http://creativecommons.org/licenses/LGPL/2.1/
*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 z=5(){7 1M="2.0 (3e)";7 Z=M;7 C=/\\s*,\\s*/;7 z=5(s,D){3d{7 m=[];7 u=1C.3c.2j&&!D;7 b=(D)?(D.3b==26)?D:[D]:[1l];7 1N=1f(s).1o(C),i;h(i=0;i<1N.x;i++){s=1I(1N[i]);8(Z&&s.V(0,3).2i("")==" *#"){s=s.V(2);D=2e([],b,s[1])}1J D=b;7 j=0,t,f,a,c="";H(j<s.x){t=s[j++];f=s[j++];c+=t+f;a="";8(s[j]=="("){H(s[j++]!=")")a+=s[j];a=a.V(0,-1);c+="("+a+")"}D=(u&&12[c])?12[c]:2c(D,t,f,a);8(u)12[c]=D}m=m.3a(D)}1E z.2k;6 m}39(e){z.2k=e;6[]}};z.2a=5(){6"5 z() {\\n  [1M "+1M+"]\\n}"};7 12={};z.2j=P;z.38=5(s){8(s){s=1I(s).2i("");1E 12[s]}1J 12={}};7 1y={};7 1g=P;z.1c=5(n,s){8(1g)1a("s="+17(s));1y[n]=X s()};z.37=5(c){6 c?1a(c):y};7 F={};7 l={};7 Y=[];F[" "]=5(r,f,t,n){7 e,i,j;h(i=0;i<f.x;i++){7 s=13(f[i],t,n);h(j=0;(e=s[j]);j++){8(R(e)&&19(e,n))r.B(e)}}};F["#"]=5(r,f,i){7 e,j;h(j=0;(e=f[j]);j++)8(e.Q==i)r.B(e)};F["."]=5(r,f,c){c=X 1x("(^|\\\\s)"+c+"(\\\\s|$)");7 e,i;h(i=0;(e=f[i]);i++)8(c.q(e.23))r.B(e)};F[":"]=5(r,f,p,a){7 t=l[p],e,i;8(t)h(i=0;(e=f[i]);i++)8(t(e,a))r.B(e)};l["36"]=5(e){7 d=T(e);8(d.1L)h(7 i=0;i<d.1L.x;i++){8(d.1L[i]==e)6 M}};l["35"]=5(e){};7 R=5(e){6(e&&e.1i==1&&e.1k!="!")?e:2d};7 1d=5(e){H(e&&(e=e.34)&&!R(e))2h;6 e};7 J=5(e){H(e&&(e=e.33)&&!R(e))2h;6 e};7 1v=5(e){6 R(e.2g)||J(e.2g)};7 1X=5(e){6 R(e.2f)||1d(e.2f)};7 1r=5(e){7 c=[];e=1v(e);H(e){c.B(e);e=J(e)}6 c};7 1m=5(e){6 T(e).32=="31 30"};7 T=5(e){6 e.2Z||e.1l};7 13=5(e,t){6(t=="*"&&e.1K)?e.1K:e.13(t)};7 1e=5(e,t,n){8(t=="*")6 R(e);8(!19(e,n))6 P;8(!1m(e))t=t.2Y();6 e.1k==t};7 19=5(e,n){6!n||(n=="*")||(e.2X==n)};7 1j=5(e){6 e.1P};5 2e(r,f,Q){7 m,i,j;h(i=0;i<f.x;i++){8(m=f[i].1K.2W(Q)){8(m.x==2d)r.B(m);1J h(j=0;j<m.x;j++)r.B(m[j])}}6 r};7 N=/\\|/;5 2c(D,t,f,a){8(N.q(f)){f=f.1o(N);a=f[0];f=f[1]}7 r=[];8(F[t]){F[t](r,D,f,a)}6 r};7 S=/^[^\\s>+~]/;7 2b=/[\\s#.:>+~()@]|[^\\s#.:>+~()@]+/g;5 1I(s){8(S.q(s))s=" "+s;6 s.10(2b)||[]};7 W=/\\s*([\\s>+~(),]|^|$)\\s*/g;7 I=/([\\s>+~,]|[^(]\\+|^)([#.:@])/g;7 1f=5(s){6 s.G(W,"$1").G(I,"$1*$2")};7 1z={2a:5(){6"\'"},10:/^(\'[^\']*\')|("[^"]*")$/,q:5(s){6 y.10.q(s)},21:5(s){6 y.q(s)?s:y+s+y},29:5(s){6 y.q(s)?s.V(1,-1):s}};7 1w=5(t){6 1z.29(t)};7 E=/([\\/()[\\]?{}|*+-])/g;5 U(s){6 s.G(E,"\\\\$1")};X 5(){7 1G=5(f,o,a){f.1H(o,a)};8(\'\'.G(/^/,17)){7 27=17.1D.G;7 28=5(e,r){7 m,n="",s=y;H(s&&(m=e.2V(s))){n+=s.V(0,m.2U)+1G(r,y,m);s=s.V(m.2T)}6 n+s};17.1D.G=5(e,r){y.G=(2S r=="5")?28:27;6 y.G(e,r)}}8(!24.1H){7 L="1H-"+2R(X 2Q);1G=5(f,o,a){7 r;o[L]=f;18(a.x){A 0:r=o[L]();O;A 1:r=o[L](a[0]);O;A 2:r=o[L](a[0],a[1]);O;A 3:r=o[L](a[0],a[1],a[2]);O;A 4:r=o[L](a[0],a[1],a[2],a[3]);O;2P:7 1F=[],i=a.x-1;2O 1F[i]="a["+i+"]";H(i--);1a("r=o[L]("+1F+")")}1E o[L];6 r}}8(![].B)26.1D.B=5(){h(7 i=0;i<1C.x;i++){y[y.x]=1C[i]}6 y.x}};z.1c("1b-1Y",5(){F[">"]=5(r,f,t,n){7 e,i,j;h(i=0;i<f.x;i++){7 s=1r(f[i]);h(j=0;(e=s[j]);j++)8(1e(e,t,n))r.B(e)}};F["+"]=5(r,f,t,n){h(7 i=0;i<f.x;i++){7 e=J(f[i]);8(e&&1e(e,t,n))r.B(e)}};F["@"]=5(r,f,a){7 t=Y[a].q;7 e,i;h(i=0;(e=f[i]);i++)8(t(e))r.B(e)};l["2N-15"]=5(e){6!1d(e)};l["1B"]=5(e,c){c=X 1x("^"+c,"i");H(e&&!e.16("1B"))e=e.1q;6 e&&c.q(e.16("1B"))};7 9={};9.1A="@";9.K={};9.10=/\\[([\\w-]+)\\s*(\\W?=)?\\s*([^\\]]*)\\]/g;9.G=5(m,a,c,v){7 k=9.1A+m;8(!Y[k]){a=9.25(a,c||"",v||"");Y[k]=a;Y.B(a)}6 Y[k].Q};9.1Z=5(s){6 s.G(y.10,y.G)};9.25=5(p,t,v){7 a={};a.Q=9.1A+Y.x;a.2M=p;t=y.K[t];t=t?t(9.16(p),1w(v)):P;a.q=X 24("e","6 "+t);6 a};9.16=5(n){18(n.2L()){A"Q":6"e.Q";A"2K":6"e.23";A"h":6"e.2J";A"22":8(Z){6"17((e.2I.10(/22=\\"?([^\\\\s\\"]*)\\"?/)||[])[1]||\'\')"}}6"e.16(\'"+n+"\')"};y.9=9;9.K[""]=5(a){6 a};9.K["="]=5(a,v){6 a+"=="+1z.21(v)};9.K["~="]=5(a,v){6"/(^|\\\\s)"+U(v)+"(\\\\s|$)/.q("+a+")"};9.K["|="]=5(a,v){6"/^"+U(v)+"(-|$)/.q("+a+")"};7 20=1f;1f=5(s){6 20(9.1Z(s))}});z.1c("1b-2H",5(){7 1t=1y["1b-1Y"];8(!1t)6;F["~"]=5(r,f,t,n){7 e,i;h(i=0;(e=f[i]);i++){H(e=J(e)){8(1e(e,t,n))r.B(e)}}};l["2G"]=5(e,t){t=X 1x(U(1w(t)));6 t.q(1j(e))};l["2F"]=5(e){6 e==T(e).1Q};l["2E"]=5(e){7 n,i;h(i=0;(n=e.1O[i]);i++){8(R(n)||n.1i==3)6 P}6 M};l["1V-15"]=5(e){6!J(e)};l["2D-15"]=5(e){e=e.1q;6 1v(e)==1X(e)};l["2C"]=5(e,s){7 n=z(s,T(e));h(7 i=0;i<n.x;i++){8(n[i]==e)6 P}6 M};l["1W-15"]=5(e,a){6 1s(e,a,1d)};l["1W-1V-15"]=5(e,a){6 1s(e,a,J)};l["2B"]=5(e){6 e.Q==2A.2z.V(1)};l["1U"]=5(e){6 e.1U};l["2y"]=5(e){6 e.1u===P};l["1u"]=5(e){6 e.1u};l["1T"]=5(e){6 e.1T};7 9=1t.9;9.K["^="]=5(a,v){6"/^"+U(v)+"/.q("+a+")"};9.K["$="]=5(a,v){6"/"+U(v)+"$/.q("+a+")"};9.K["*="]=5(a,v){6"/"+U(v)+"/.q("+a+")"};5 1s(e,a,t){18(a){A"n":6 M;A"2x":a="2n";O;A"2w":a="2n+1"}7 1p=1r(e.1q);5 1n(i){7 i=(t==J)?1p.x-i:i-1;6 1p[i]==e};8(!14(a))6 1n(a);a=a.1o("n");7 m=1S(a[0]);7 s=1S(a[1]);8((14(m)||m==1)&&s==0)6 M;8(m==0&&!14(s))6 1n(s);8(14(s))s=0;7 c=1;H(e=t(e))c++;8(14(m)||m==1)6(t==J)?(c<=s):(s>=c);6(c%m)==s}});z.1c("1b-2v",5(){Z=1a("P;/*@2u@8(@\\2t)Z=M@2s@*/");8(!Z){13=5(e,t,n){6 n?e.2r("*",t):e.13(t)};19=5(e,n){6!n||(n=="*")||(e.2q==n)};1m=1l.1R?5(e){6/2p/i.q(T(e).1R)}:5(e){6 T(e).1Q.1k!="2o"};1j=5(e){6 e.2m||e.1P||1h(e)};5 1h(e){7 t="",n,i;h(i=0;(n=e.1O[i]);i++){18(n.1i){A 11:A 1:t+=1h(n);O;A 3:t+=n.2l;O}}6 t}}});1g=M;6 z}();',62,201,'|||||function|return|var|if|AttributeSelector||||||||for||||pseudoClasses|||||test|||||||length|this|cssQuery|case|push||fr||selectors|replace|while||nextElementSibling|tests|APPLY|true||break|false|id|thisElement||getDocument|regEscape|slice||new|attributeSelectors|isMSIE|match||cache|getElementsByTagName|isNaN|child|getAttribute|String|switch|compareNamespace|eval|css|addModule|previousElementSibling|compareTagName|parseSelector|loaded|_0|nodeType|getTextContent|tagName|document|isXML|_1|split|ch|parentNode|childElements|nthChild|css2|disabled|firstElementChild|getText|RegExp|modules|Quote|PREFIX|lang|arguments|prototype|delete|aa|ap|apply|_2|else|all|links|version|se|childNodes|innerText|documentElement|contentType|parseInt|indeterminate|checked|last|nth|lastElementChild|level2|parse|_3|add|href|className|Function|create|Array|_4|_5|remove|toString|ST|select|null|_6|lastChild|firstChild|continue|join|caching|error|nodeValue|textContent||HTML|xml|prefix|getElementsByTagNameNS|end|x5fwin32|cc_on|standard|odd|even|enabled|hash|location|target|not|only|empty|root|contains|level3|outerHTML|htmlFor|class|toLowerCase|name|first|do|default|Date|Number|typeof|lastIndex|index|exec|item|scopeName|toUpperCase|ownerDocument|Document|XML|mimeType|nextSibling|previousSibling|visited|link|valueOf|clearCache|catch|concat|constructor|callee|try|beta'.split('|'),0,{}))


/* ----- plone_javascript_variables.js ----- */

// Global Plone variables that need to be accessible to the Javascripts
var portal_url = 'http://ll.jus.or.jp/2006';
var form_modified_message = 'Your form has not been saved. All changes you have made will be lost.';
var form_resubmit_message = 'Your already clicked the submit button. Do you really want to submit this form again?';


/* ----- nodeutilities.js ----- */

function wrapNode(node, wrappertype, wrapperclass){
    /* utility function to wrap a node in an arbitrary element of type "wrappertype"
     * with a class of "wrapperclass" */
    var wrapper = document.createElement(wrappertype)
    wrapper.className = wrapperclass;
    var innerNode = node.parentNode.replaceChild(wrapper,node);
    wrapper.appendChild(innerNode);
};

function nodeContained(innernode, outernode){
    // check if innernode is contained in outernode
    var node = innernode.parentNode;
    while (node != document) {
        if (node == outernode) {
            return true; 
        }
        node=node.parentNode;
    }
    return false;
};

function findContainer(node, func) {
    // Starting with the given node, find the nearest containing element
    // for which the given function returns true.

    while (node != null) {
        if (func(node)) {
            return node;
        }
        node = node.parentNode;
    }
    return false;
};

function hasClassName(node, class_name) {
    return new RegExp('\\b'+class_name+'\\b').test(node.className);
};

function addClassName(node, class_name) {
    if (!node.className) {
        node.className = class_name;
    } else if (!hasClassName(node, class_name)) {
        var className = node.className+" "+class_name;
        // cleanup
        node.className = className.split(/\s+/).join(' ');
    }
};

function removeClassName(node, class_name) {
    var className = node.className;
    if (className) {
        // remove
        className = className.replace(new RegExp('\\b'+class_name+'\\b'), '');
        // cleanup
        className = className.replace(/\s+/g, ' ');
        node.className = className.replace(/\s+$/g, '');
    }
};

function replaceClassName(node, old_class, new_class, ignore_missing) {
    if (ignore_missing && !hasClassName(node, old_class)) {
        addClassName(node, new_class);
    } else {
        var className = node.className;
        if (className) {
            // replace
            className = className.replace(new RegExp('\\b'+old_class+'\\b'), new_class);
            // cleanup
            className = className.replace(/\s+/g, ' ');
            node.className = className.replace(/\s+$/g, '');
        }
    }
};

function walkTextNodes(node, func, data) {
    // traverse childnodes and call func when a textnode is found
    if (!node){return false}
    if (node.hasChildNodes) {
        // we can't use for (i in childNodes) here, because the number of
        // childNodes might change (higlightsearchterms)
        for (var i=0;i<node.childNodes.length;i++) {
            walkTextNodes(node.childNodes[i], func, data);
        }
        if (node.nodeType == 3) {
            // this is a text node
            func(node, data);
        }
    }
};

/* These are two functions, because getInnerTextFast doesn't always return the
 * the same results, as it depends on the implementation of node.innerText of
 * the browser. getInnerTextCompatible will always return the same values, but
 * is a bit slower. The difference is just in the whitespace, so if this
 * doesn't matter, you should always use getInnerTextFast.
 */

function getInnerTextCompatible(node) {
    var result = new Array();
    walkTextNodes(node,
                  function(n, d){d.push(n.nodeValue)},
                  result);
    return result.join("");
};

function getInnerTextFast(node) {
    if (node.innerText) {
        return node.innerText;
    } else {
        return getInnerTextCompatible(node);
    }
};

/* This function reorder nodes in the DOM.
 * fetch_func - the function which returns the value for comparison
 * cmp_func - the compare function, if not provided then the string of the
 * value returned by fetch_func is used.
 */
function sortNodes(nodes, fetch_func, cmp_func) {
    // terminate if we hit a non-compliant DOM implementation
    if (!W3CDOM){return false};

    // wrapper for sorting
    var SortNodeWrapper = function(node) {
        this.value = fetch_func(node);
        this.cloned_node = node.cloneNode(true);
        this.toString = function() {
            if (this.value.toString) {
                return this.value.toString();
            } else {
                return this.value;
            }
        }
    }

    // wrap nodes
    var items = new Array();
    for (var i=0; i<nodes.length; i++) {
        items.push(new SortNodeWrapper(nodes[i]));
    }

    //sort
    if (cmp_func) {
        items.sort(cmp_func);
    } else {
        items.sort();
    }

    // reorder nodes
    for (var i=0; i<items.length; i++) {
        var dest = nodes[i];
        dest.parentNode.replaceChild(items[i].cloned_node, dest);
    }
};


/* ----- cookie_functions.js ----- */
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name+"="+escape(value)+expires+"; path=/;";
};

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return unescape(c.substring(nameEQ.length,c.length));
        }
    }
    return null;
};


/* ----- livesearch.js ----- */
/*
// +----------------------------------------------------------------------+
// | Copyright (c) 2004 Bitflux GmbH                                      |
// +----------------------------------------------------------------------+
// | Licensed under the Apache License, Version 2.0 (the "License");      |
// | you may not use this file except in compliance with the License.     |
// | You may obtain a copy of the License at                              |
// | http://www.apache.org/licenses/LICENSE-2.0                           |
// | Unless required by applicable law or agreed to in writing, software  |
// | distributed under the License is distributed on an "AS IS" BASIS,    |
// | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or      |
// | implied. See the License for the specific language governing         |
// | permissions and limitations under the License.                       |
// +----------------------------------------------------------------------+
// | Author: Bitflux GmbH <devel@bitflux.ch>                              |
// +----------------------------------------------------------------------+

*/
var liveSearchReq = false;
var t = null;
var liveSearchLast = "";
var queryTarget = "livesearch_reply?q=";

var searchForm = null;
var searchInput = null; 

var isIE = false;


var _cache = new Object();

var widthOffset=1;

function calculateWidth(){
}


function getElementDimensions(elemID) {
    var base = document.getElementById(elemID);
    var offsetTrail = base;
    var offsetLeft = 0;
    var offsetTop = 0;
    var width = 0;
    
    while (offsetTrail) {
        offsetLeft += offsetTrail.offsetLeft;
        offsetTop += offsetTrail.offsetTop;
        offsetTrail = offsetTrail.offsetParent;
    }
    if (navigator.userAgent.indexOf("Mac") != -1 &&
        typeof document.body.leftMargin != "undefined") {
        offsetLeft += document.body.leftMargin;
        offsetTop += document.body.topMargin;
    }

    if(!isIE){
    width =  searchInput.offsetWidth-widthOffset*2;
    }
    else {
    width = searchInput.offsetWidth;
    }

    return { left:offsetLeft, 
         top:offsetTop, 
         width: width, 
             height: base.offsetHeight,
         bottom: offsetTop + base.offsetHeight, 
         right : offsetLeft + width};
}

function liveSearchInit() {
    searchInput = document.getElementById('searchGadget');
    if (searchInput == null || searchInput == undefined) return
//  Only keypress catches repeats in moz/FF but keydown is needed for
//  khtml based browsers.
    if (navigator.userAgent.indexOf("KHTML") > 0) {
        searchInput.addEventListener("keydown",liveSearchKeyPress,false);
        searchInput.addEventListener("focus",liveSearchDoSearch,false);
        searchInput.addEventListener("keydown",liveSearchStart, false);
    } else if (searchInput.addEventListener) {
        searchInput.addEventListener("keypress",liveSearchKeyPress,false);
        searchInput.addEventListener("blur",liveSearchHideDelayed,false);
        searchInput.addEventListener("keypress",liveSearchStart, false);
    } else {
        searchInput.attachEvent("onkeydown",liveSearchKeyPress);
        searchInput.attachEvent("onkeydown",liveSearchStart);
//      searchInput.attachEvent("onblur",liveSearchHide);
        isIE = true;
    }

//  Why doesn't this work in konq, setting it inline does.
    searchInput.setAttribute("autocomplete","off");

    var pos = getElementDimensions('searchGadget'); 
    result = document.getElementById('LSResult');
    pos.left = pos.left - result.offsetParent.offsetLeft + pos.width;
    result.style.display='none';
}


function liveSearchHideDelayed() {
    window.setTimeout("liveSearchHide()",400);
}
    
function liveSearchHide() { 
    document.getElementById("LSResult").style.display = "none";
    var highlight = document.getElementById("LSHighlight");
    if (highlight) {
        highlight.removeAttribute("id");
    }
}

function getFirstHighlight() {
    var set = getHits();
    return set[0];
}

function getLastHighlight() {
    var set = getHits();
    return set[set.length-1];
}

function getHits() {
    var res = document.getElementById("LSShadow");
    var set = res.getElementsByTagName('li');
    return set
}

function findChild(object, specifier) {
    var cur = object.firstChild;
    try {
    while (cur != undefined) {
        cur = cur.nextSibling;
        if (specifier(cur) == true) return cur;
    }
    } catch(e) {};
    return null;
    
}

function findNext(object, specifier) {
 var cur = object;
 try {
 while (cur != undefined) {

    cur = cur.nextSibling;
    if (cur.nodeType==3) cur=cur.nextSibling;
    
    if (cur != undefined) {
        if (specifier(cur) == true) return cur;
    } else { break }
 }
 } catch(e) {};
 return null;
}

function findPrev(object, specifier) {
 var cur = object;
 try {
        cur = cur.previousSibling;
        if (cur.nodeType==3) cur=cur.previousSibling;
        if (cur!=undefined) {
            if (specifier(cur) == true) 
                return cur;
        } 
 } catch(e) {};
 return null;
}


function liveSearchKeyPress(event) {
    if (event.keyCode == 40 )
    //KEY DOWN
    {
        highlight = document.getElementById("LSHighlight");
        if (!highlight) {
            highlight = getFirstHighlight();
        } else {
            highlight.removeAttribute("id");
            highlight = findNext(highlight, function (o) {return o.className =="LSRow";});

        }
        if (highlight) {
            highlight.setAttribute("id","LSHighlight");
        } 
        if (!isIE) { event.preventDefault(); }
    } 
    //KEY UP
    else if (event.keyCode == 38 ) {
        highlight = document.getElementById("LSHighlight");
        if (!highlight) {
            highlight = getLastHighlight();
        } 
        else {
            highlight.removeAttribute("id");
            highlight = findPrev(highlight, function (o) {return o.className=='LSRow';});
        }
        if (highlight) {
                highlight.setAttribute("id","LSHighlight");
        }
        if (!isIE) { event.preventDefault(); }
    } 
    //ESC
    else if (event.keyCode == 27) {
        highlight = document.getElementById("LSHighlight");
        if (highlight) {
            highlight.removeAttribute("id");
        }
        document.getElementById("LSResult").style.display = "none";
    } 
}
function liveSearchStart(event) {
    if (t) {
        window.clearTimeout(t);
    }
    code = event.keyCode;
    if (code!=40 && code!=38 && code!=27 && code!=37 && code!=39) {
        t = window.setTimeout("liveSearchDoSearch()",200);
    } 
}

function liveSearchDoSearch() {

    if (typeof liveSearchRoot == "undefined") {
        liveSearchRoot = "";
    }
    if (typeof liveSearchRootSubDir == "undefined") {
        liveSearchRootSubDir = "";
    }

    if (liveSearchLast != searchInput.value) {
    if (liveSearchReq && liveSearchReq.readyState < 4) {
        liveSearchReq.abort();
    }
    if ( searchInput.value == "") {
        liveSearchHide();
        return false;
    }

    // Do nothing as long as we have less then two characters - 
    // the search results makes no sense, and it's harder on the server.
    if ( searchInput.value.length < 2) {
        liveSearchHide();
        return false;
    }

    // Do we have cached results
    var result = _cache[searchInput.value];
    if (result) {
        showResult(result); 
        return;
    }
    liveSearchReq = new XMLHttpRequest();
    liveSearchReq.onreadystatechange= liveSearchProcessReqChange;
    liveSearchReq.open("GET", liveSearchRoot + queryTarget + encodeURI(searchInput.value) );
    liveSearchLast = searchInput.value;
    liveSearchReq.send(null);
    }
}

function showResult(result) {
  var  res = document.getElementById("LSResult");
  res.style.display = "block";
  var  sh = document.getElementById("LSShadow");
  sh.innerHTML = result;
}

function liveSearchProcessReqChange() {
    if (liveSearchReq.readyState == 4) {
        if (liveSearchReq.status > 299 || liveSearchReq.status < 200  ||
            liveSearchReq.responseText.length < 10) return; 
    showResult(liveSearchReq.responseText);
    _cache[liveSearchLast] = liveSearchReq.responseText;
    }
}

function liveSearchSubmit() {
    var highlight = document.getElementById("LSHighlight");
    
    if (highlight){
        target = highlight.getElementsByTagName('a')[0];
        window.location = liveSearchRoot + liveSearchRootSubDir + target;
        return false;
    } 
    else {
        return true;
    }
}



if (window.addEventListener) window.addEventListener("load",liveSearchInit,false);
else if (window.attachEvent) window.attachEvent("onload", liveSearchInit);



/* ----- fullscreenmode.js ----- */
function toggleFullScreenMode() {
    var body = cssQuery('body')[0];

    if (hasClassName(body, 'fullscreen')) {
        // unset cookie
        removeClassName(body, 'fullscreen');
        createCookie('fullscreenMode', '');
    } else {
        // set cookie
        addClassName(body, 'fullscreen');
        createCookie('fullscreenMode', '1');
    }
};

function fullscreenModeLoad() {
    // based on cookie
    if (readCookie('fullscreenMode') == '1') {
        var body = cssQuery('body')[0];
        addClassName(body, 'fullscreen');
    }
};
registerPloneFunction(fullscreenModeLoad)


/* ----- select_all.js ----- */
// Functions for selecting all checkboxes in folder_contents/search_form view
function selectAll(id, formName) {
    // Get the elements. if formName is provided, get the elements inside the form
    if (formName==null) {
        checkboxes = document.getElementsByName(id)
        for (i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = true ;
            }
    } else {
        for (i=0; i<document.forms[formName].elements.length;i++){
            if (document.forms[formName].elements[i].name==id){
                document.forms[formName].elements[i].checked=true; 
                }
            }
        }
    }
function deselectAll(id, formName) {
    if (formName==null) {
        checkboxes = document.getElementsByName(id)
        for (i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = false ;}
    } else {
        for (i=0; i<document.forms[formName].elements.length;i++){
            if (document.forms[formName].elements[i].name==id){
                document.forms[formName].elements[i].checked=false;
                }
            }
        }
    }
function toggleSelect(selectbutton, id, initialState, formName) {
    /* required selectbutton: you can pass any object that will function as a toggle
     * optional id: id of the the group of checkboxes that needs to be toggled (default=ids:list
     * optional initialState: initial state of the group. (default=false)
     * e.g. folder_contents is false, search_form=true because the item boxes
     * are checked initially.
     * optional formName: name of the form in which the boxes reside, use this if there are more
     * forms on the page with boxes with the same name
     */
    id=id || 'ids:list'  // defaults to ids:list, this is the most common usage

    if (selectbutton.isSelected==null){
        initialState=initialState || false;
        selectbutton.isSelected=initialState;
        }
    /* create and use a property on the button itself so you don't have to 
     * use a global variable and we can have as much groups on a page as we like.
     */
    if (selectbutton.isSelected == false) {
        selectbutton.setAttribute('src', portal_url + '/select_none_icon.gif');
        selectbutton.isSelected=true;
        return selectAll(id, formName);
    } else {
        selectbutton.setAttribute('src',portal_url + '/select_all_icon.gif');
        selectbutton.isSelected=false;
        return deselectAll(id, formName);
        }
    } 

/* ----- dropdown.js ----- */
/*
 * This is the code for the dropdown menus. It uses the following markup:
 *
 * <dl class="actionMenu" id="uniqueIdForThisMenu">
 *   <dt class="actionMenuHeader">
 *     <!-- The following a-tag needs to be clicked to dropdown the menu -->
 *     <a href="some_destination">A Title</a>
 *   </dt>
 *   <dd class="actionMenuContent">
 *     <!-- Here can be any content you want -->
 *   </dd>
 * </dl>
 *
 * When the menu is toggled, then the dl with the class actionMenu will get an
 * additional class which switches between 'activated' and 'deactivated'.
 * You can use this to style it accordingly, for example:
 *
 * .actionMenu.activated {
 *   display: block;
 * }
 *
 * .actionMenu.deactivated {
 *   display: none;
 * }
 *
 * When you click somewhere else than the menu, then all open menus will be
 * deactivated. When you move your mouse over the a-tag of another menu, then
 * that one will be activated and all others deactivated. When you click on a
 * link inside the actionMenuContent element, then the menu will be closed and
 * the link followed.
 *
 * This file uses functions from register_function.js, cssQuery.js and
 * nodeutils.js.
 *
 */

function isActionMenu(node) {
    if (hasClassName(node, 'actionMenu')) {
        return true;
    }
    return false;
};

function hideAllMenus() {
    var menus = cssQuery('dl.actionMenu');
    for (var i=0; i < menus.length; i++) {
        replaceClassName(menus[i], 'activated', 'deactivated', true);
    }
};

function toggleMenuHandler(event) {
    if (!event) var event = window.event; // IE compatibility

    // terminate if we hit a non-compliant DOM implementation
    // returning true, so the link is still followed
    if (!W3CDOM){return true;}

    var container = findContainer(this, isActionMenu);
    if (!container) {
        return true;
    }

    // check if the menu is visible
    if (hasClassName(container, 'activated')) {
        // it's visible - hide it
        replaceClassName(container, 'activated', 'deactivated', true);
    } else {
        // it's invisible - make it visible
        replaceClassName(container, 'deactivated', 'activated', true);
    }

    return false;
};

function hideMenusHandler(event) {
    if (!event) var event = window.event; // IE compatibility

    hideAllMenus();

    // we want to follow this link
    return true;
};

function actionMenuDocumentMouseDown(event) {
    if (!event) var event = window.event; // IE compatibility

    if (event.target)
        targ = event.target;
    else if (event.srcElement)
        targ = event.srcElement;

    var container = findContainer(targ, isActionMenu);
    if (container) {
        // targ is part of the menu, so just return and do the default
        return true;
    }

    hideAllMenus();

    return true;
};

function actionMenuMouseOver(event) {
    if (!event) var event = window.event; // IE compatibility

    if (!this.tagName && (this.tagName == 'A' || this.tagName == 'a')) {
        return true;
    }

    var container = findContainer(this, isActionMenu);
    if (!container) {
        return true;
    }
    var menu_id = container.id;

    var switch_menu = false;
    // hide all menus
    var menus = cssQuery('dl.actionMenu');
    for (var i=0; i < menus.length; i++) {
        var menu = menus[i]
        // check if the menu is visible
        if (hasClassName(menu, 'activated')) {
            switch_menu = true;
        }
        // turn off menu when it's not the current one
        if (menu.id != menu_id) {
            replaceClassName(menu, 'activated', 'deactivated', true);
        }
    }

    if (switch_menu) {
        var menu = cssQuery('#'+menu_id)[0];
        if (menu) {
            replaceClassName(menu, 'deactivated', 'activated', true);
        }
    }

    return true;
};

function initializeMenus() {
    // terminate if we hit a non-compliant DOM implementation
    if (!W3CDOM) {return false;}

    document.onmousedown = actionMenuDocumentMouseDown;

    hideAllMenus();

    // add toggle function to header links
    var menu_headers = cssQuery('dl.actionMenu > dt.actionMenuHeader > a');
    for (var i=0; i < menu_headers.length; i++) {
        var menu_header = menu_headers[i];

        menu_header.onclick = toggleMenuHandler;
        menu_header.onmouseover = actionMenuMouseOver;
    }

    // add hide function to all links in the dropdown, so the dropdown closes
    // when any link is clicked
    var menu_contents = cssQuery('dl.actionMenu > dd.actionMenuContent');
    for (var i=0; i < menu_contents.length; i++) {
        menu_contents[i].onclick = hideMenusHandler;
    }

    // uncomment to enable sorting of elements
    //var nodes = cssQuery('#objectMenu > dd.actionMenuContent li');
    //sortNodes(nodes, getInnerTextFast);
};

registerPloneFunction(initializeMenus);


/* ----- mark_special_links.js ----- */
/* Scan all links in the document and set classes on them if
 * they point outside the site, or are special protocols
 * To disable this effect for links on a one-by-one-basis,
 * give them a class of 'link-plain'
 */

function scanforlinks() {
    // terminate if we hit a non-compliant DOM implementation
    if (!W3CDOM) { return false; }

    contentarea = getContentArea();
    if (!contentarea) { return false; }

    links = contentarea.getElementsByTagName('a');
    for (i=0; i < links.length; i++) {
        if ( (links[i].getAttribute('href'))
             && (links[i].className.indexOf('link-plain')==-1) ) {
            var linkval = links[i].getAttribute('href');

            // check if the link href is a relative link, or an absolute link to
            // the current host.
            if (linkval.toLowerCase().indexOf(window.location.protocol
                                              + '//'
                                              + window.location.host)==0) {
                // absolute link internal to our host - do nothing
            } else if (linkval.indexOf('http:') != 0) {
                // not a http-link. Possibly an internal relative link, but also
                // possibly a mailto or other protocol add tests for relevant
                // protocols as you like.
                protocols = ['mailto', 'ftp', 'news', 'irc', 'h323', 'sip',
                             'callto', 'https', 'feed', 'webcal'];
                // h323, sip and callto are internet telephony VoIP protocols
                for (p=0; p < protocols.length; p++) {
                    if (linkval.indexOf(protocols[p]+':') == 0) {
                        // if the link matches one of the listed protocols, add
                        // className = link-protocol
                        wrapNode(links[i], 'span', 'link-'+protocols[p]);
                        break;
                    }
                }
            } else {
                // we are in here if the link points to somewhere else than our
                // site.
                if ( links[i].getElementsByTagName('img').length == 0 ) {
                    // we do not want to mess with those links that already have
                    // images in them
                    wrapNode(links[i], 'span', 'link-external');
                    // uncomment the next line if you want external links to be
                    // opened in a new window.
                    // links[i].setAttribute('target', '_blank');
                }
            }
        }
    }
};

registerPloneFunction(scanforlinks);


/* ----- collapsiblesections.js ----- */
/*
 * This is the code for the collapsibles. It uses the following markup:
 *
 * <dl class="collapsible">
 *   <dt class="collapsibleHeader">
 *     A Title
 *   </dt>
 *   <dd class="collapsibleContent">
 *     <!-- Here can be any content you want -->
 *   </dd>
 * </dl>
 *
 * When the collapsible is toggled, then the dl will get an additional class
 * which switches between 'collapsedBlockCollapsible' and
 * 'expandedBlockCollapsible'. You can use this to style it accordingly, for
 * example:
 *
 * .expandedBlockCollapsible .collapsibleContent {
 *   display: block;
 * }
 *
 * .collapsedBlockCollapsible .collapsibleContent {
 *   display: none;
 * }
 *
 * If you add the 'collapsedOnLoad' class to the dl, then it will get
 * collapsed on page load, this is done, so the content is accessible even when
 * javascript is disabled.
 *
 * If you add the 'inline' class to the dl, then it will toggle between
 * 'collapsedInlineCollapsible' and 'expandedInlineCollapsible' instead of
 * 'collapsedBlockCollapsible' and 'expandedBlockCollapsible'.
 *
 * This file uses functions from register_function.js, cssQuery.js and
 * nodeutils.js.
 *
 */

function isCollapsible(node) {
    if (hasClassName(node, 'collapsible')) {
        return true;
    }
    return false;
};

function toggleCollapsible(event) {
    if (!event) var event = window.event; // IE compatibility

    if (!this.tagName && (this.tagName == 'DT' || this.tagName == 'dt')) {
        return true;
    }

    var container = findContainer(this, isCollapsible);
    if (!container) {
        return true;
    }

    if (hasClassName(container, 'collapsedBlockCollapsible')) {
        replaceClassName(container, 'collapsedBlockCollapsible', 'expandedBlockCollapsible');
    } else if (hasClassName(container, 'expandedBlockCollapsible')) {
        replaceClassName(container, 'expandedBlockCollapsible', 'collapsedBlockCollapsible');
    } else if (hasClassName(container, 'collapsedInlineCollapsible')) {
        replaceClassName(container, 'collapsedInlineCollapsible', 'expandedInlineCollapsible');
    } else if (hasClassName(container, 'expandedInlineCollapsible')) {
        replaceClassName(container, 'expandedInlineCollapsible', 'collapsedInlineCollapsible');
    }
};

function activateCollapsibles() {
    if (!W3CDOM) {return false;}

    var collapsibles = cssQuery('dl.collapsible');
    for (var i=0; i < collapsibles.length; i++) {
        var collapsible = collapsibles[i];

        var collapsible_header = cssQuery('dt.collapsibleHeader', collapsible)[0];
        collapsible_header.onclick = toggleCollapsible;

        if (hasClassName(collapsible, 'inline')) {
            // the collapsible should be inline
            if (hasClassName(collapsible, 'collapsedOnLoad')) {
                replaceClassName(collapsible, 'collapsedOnLoad', 'collapsedInlineCollapsible');
            } else {
                addClassName(collapsible, 'expandedInlineCollapsible');
            }
        } else {
            // the collapsible is a block
            if (hasClassName(collapsible, 'collapsedOnLoad')) {
                replaceClassName(collapsible, 'collapsedOnLoad', 'collapsedBlockCollapsible');
            } else {
                addClassName(collapsible, 'expandedBlockCollapsible');
            }
        }
    }
};

registerPloneFunction(activateCollapsibles);


/* ----- highlightsearchterms.js ----- */
function highlightTermInNode(node, word) {
    var contents = node.nodeValue;
    var index = contents.toLowerCase().indexOf(word.toLowerCase());
    if (index < 0){return false};

    var parent = node.parentNode;
    if (parent.className != "highlightedSearchTerm") {
        // make 3 shiny new nodes
        var hiword = document.createElement("span");
        hiword.className = "highlightedSearchTerm";
        hiword.appendChild(document.createTextNode(contents.substr(index, word.length)));
        parent.insertBefore(document.createTextNode(contents.substr(0, index)), node);
        parent.insertBefore(hiword, node);
        parent.insertBefore(document.createTextNode(contents.substr(index+word.length)), node);
        parent.removeChild(node);
    }
}

function highlightSearchTerms(terms, startnode) {
    // terminate if we hit a non-compliant DOM implementation
    if (!W3CDOM){return false};
    if (!terms){return false};
    if (!startnode){return false};

    for (var term_index=0; term_index < terms.length; term_index++) {
        // don't highlight reserved catalog search terms
        var term = terms[term_index];
        var term_lower = term.toLowerCase();
        if (term_lower != 'not'
            && term_lower != 'and'
            && term_lower != 'or') {
            walkTextNodes(startnode, highlightTermInNode, term);
        }
    }
}

function getSearchTermsFromURI(uri) {
    var query;
    if (typeof decodeURI != 'undefined') {
        query = decodeURI(uri);
    } else if (typeof unescape != 'undefined') {
        // _robert_ ie 5 does not have decodeURI 
        query = unescape(uri);
    } else {
        // we just try to be lucky, for single words this will still work
    }
    var result = new Array();
    if (window.decodeReferrer) {
        var referrerSearch = decodeReferrer();
        if (null != referrerSearch && referrerSearch.length > 0) {
            result = referrerSearch;
        }
    }
    var qfinder = new RegExp("searchterm=([^&]*)", "gi");
    var qq = qfinder.exec(query);
    if (qq && qq[1]) {
        var terms = qq[1].replace(/\+/g,' ').split(/\s+/);
        for (var i=0; i < terms.length; i++) {
            if (terms[i] != '') {
                result.push(terms[i]);
            }
        }
        return result;
    }
    return result.length == 0 ? false : result;
}

function highlightSearchTermsFromURI() {
    // terminate if we hit a non-compliant DOM implementation
    if (!W3CDOM){return false};

    // search-term-highlighter function --  Geir Bækholt
    var terms = getSearchTermsFromURI(window.location.search);
    // make sure we start the right place so we don't higlight menuitems or breadcrumb
    var contentarea = getContentArea();
    highlightSearchTerms(terms, contentarea);
}

registerPloneFunction(highlightSearchTermsFromURI);


/* ----- se-highlight.js ----- */
/* List of search engine matchers and the referrer search
 * code where carefully borrowed from the
 * "Search Engine Keyword Highlight" by Scott Yang,
 * see http://fucoder.com/code/se-hilite/ for further
 * details.
 */
var searchEngines = [
    ['^http://(www)?\\.?google.*', 'q='],              // Google
    ['^http://search\\.yahoo.*', 'p='],                // Yahoo
    ['^http://search\\.msn.*', 'q='],                  // MSN
    ['^http://search\\.aol.*', 'userQuery='],          // AOL
    ['^http://(www\\.)?altavista.*', 'q='],            // AltaVista
    ['^http://(www\\.)?feedster.*', 'q='],             // Feedster
    ['^http://search\\.lycos.*', 'query='],            // Lycos
    ['^http://(www\\.)?alltheweb.*', 'q=']             // AllTheWeb
]

function decodeReferrer(ref) {
    // checks if we are beeing searched by a search engine
    if (null == ref && document.referrer) {
        ref = document.referrer;
    }
    if (!ref) return null;

    var match = new RegExp('');
    var seQuery = '';
    for (var i = 0; i < searchEngines.length; i ++) {
        match.compile(searchEngines[i][0], 'i');
        if (ref.match(match)) {
            match.compile('^.*'+searchEngines[i][1]+'([^&]+)&?.*$');
            seQuery = ref.replace(match, '$1');
            if (seQuery) {
                seQuery = decodeURIComponent(seQuery);
                seQuery = seQuery.replace(/\'|"/, '');
                return seQuery.split(/[\s,\+\.]+/);
            }

        }
    }
    return null;
}


/* ----- first_input_focus.js ----- */
// Focus on error 
function setFocus(){
    // terminate if we hit a non-compliant DOM implementation
    if (!W3CDOM){return false};

    var xre = new RegExp(/\berror\b/);
    // Search only forms to avoid spending time on regular text
    for (var f = 0; (formnode = document.getElementsByTagName('form').item(f)); f++){
        // Search for errors first, focus on first error if found
        for (var i = 0; (node = formnode.getElementsByTagName('div').item(i)); i++) {
            if (xre.exec(node.className)){
                for (var j = 0; (inputnode = node.getElementsByTagName('input').item(j)); j++) {
                    try {
                        if (inputnode.focus) { // check availability first
                            inputnode.focus();
                            return;
                        }
                    } catch(e) {
                        // try next one, this can happen with a hidden or
                        // invisible input field
                    }
                }
            }
        }
    }
}
registerPloneFunction(setFocus)


/* ----- folder_contents_filter.js ----- */
// Actions used in the folder_contents view
function submitFolderAction(folderAction) {
    document.folderContentsForm.action = document.folderContentsForm.action+'/'+folderAction;
    document.folderContentsForm.submit();
}

function submitFilterAction() {
    document.folderContentsForm.action = document.folderContentsForm.action+'/folder_contents';
    filter_selection=document.getElementById('filter_selection');
    for (var i =0; i < filter_selection.length; i++){
        if (filter_selection.options[i].selected) {
            if (filter_selection.options[i].value=='#') {
                document.folderContentsForm.filter_state.value='clear_view_filter';
            }
            else {
                document.folderContentsForm.filter_state.value='set_view_filter';
            }
        }
    }
    document.folderContentsForm.submit();
}



/* ----- folder_contents_hideAddItems.js ----- */
// function to hide the traditional add items pull down menu.

function hideTraditionalAddItemPullDown() {
    // Get the old style Add Item pulldown. We already have
    // such a menu. This is only for system that don't have javascript
    // so we can savely remove it.
    pullDown = document.getElementById('traditional-add-item-pulldown');
    if (pullDown) { 
        pullDown.style.display='none';
    }
}

registerPloneFunction(hideTraditionalAddItemPullDown)

/* ----- styleswitcher.js ----- */
// StyleSwitcher functions written by Paul Sowden
function setActiveStyleSheet(title, reset) {
    // terminate if we hit a non-compliant DOM implementation
    if (!W3CDOM){return false};

    var i, a, main;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title) {
                a.disabled = false;
            }
        }
    }
    if (reset == 1) {
        createCookie("wstyle", title, 365);
    }
};

function setStyle() {
    var style = readCookie("wstyle");
    if (style != null) {
        setActiveStyleSheet(style, 0);
    }
};
registerPloneFunction(setStyle);




/* ----- table_sorter.js ----- */

/********* Table sorter script *************/
// Table sorter script, thanks to Geir Bækholt for this.
// DOM table sorter originally made by Paul Sowden 

function compare(a,b)
{
    au = new String(a);
    bu = new String(b);

    if (au.charAt(4) != '-' && au.charAt(7) != '-')
    {
    var an = parseFloat(au)
    var bn = parseFloat(bu)
    }
    if (isNaN(an) || isNaN(bn))
        {as = au.toLowerCase()
         bs = bu.toLowerCase()
        if (as > bs)
            {return 1;}
        else
            {return -1;}
        }
    else {
    return an - bn;
    }
}
function getConcatenedTextContent(node) {
    var _result = "";
      if (node == null) {
            return _result;
      }
    var childrens = node.childNodes;
    var i = 0;
    while (i < childrens.length) {
        var child = childrens.item(i);
        switch (child.nodeType) {
            case 1: // ELEMENT_NODE
            case 5: // ENTITY_REFERENCE_NODE
                _result += getConcatenedTextContent(child);
                break;
            case 3: // TEXT_NODE
            case 2: // ATTRIBUTE_NODE
            case 4: // CDATA_SECTION_NODE
                _result += child.nodeValue;
                break;
            case 6: // ENTITY_NODE
            case 7: // PROCESSING_INSTRUCTION_NODE
            case 8: // COMMENT_NODE
            case 9: // DOCUMENT_NODE
            case 10: // DOCUMENT_TYPE_NODE
            case 11: // DOCUMENT_FRAGMENT_NODE
            case 12: // NOTATION_NODE
                // skip
                break;
        }
        i ++;
    }
    return _result;
}

function sort(e) {
    var el = window.event ? window.event.srcElement : e.currentTarget;

    // a pretty ugly sort function, but it works nonetheless
    var a = new Array();
    // check if the image or the th is clicked. Proceed to parent id it is the image
    // NOTE THAT nodeName IS UPPERCASE
    if (el.nodeName == 'IMG') el = el.parentNode;
    //var name = el.firstChild.nodeValue;
    // This is not very robust, it assumes there is an image as first node then text
    var name = el.childNodes.item(1).nodeValue;
    var dad = el.parentNode;
    var node;
    
    // kill all arrows
    for (var im = 0; (node = dad.getElementsByTagName("th").item(im)); im++) {
        // NOTE THAT nodeName IS IN UPPERCASE
        if (node.lastChild.nodeName == 'IMG')
        {
            lastindex = node.getElementsByTagName('img').length - 1;
            node.getElementsByTagName('img').item(lastindex).setAttribute('src',portal_url + '/arrowBlank.gif');
        }
    }
    
    for (var i = 0; (node = dad.getElementsByTagName("th").item(i)); i++) {
        var xre = new RegExp(/\bnosort\b/);
        // Make sure we are not messing with nosortable columns, then check second node.
        if (!xre.exec(node.className) && node.childNodes.item(1).nodeValue == name) 
        {
            //window.alert(node.childNodes.item(1).nodeValue;
            lastindex = node.getElementsByTagName('img').length -1;
            node.getElementsByTagName('img').item(lastindex).setAttribute('src',portal_url + '/arrowUp.gif');
            break;
        }
    }

    var tbody = dad.parentNode.parentNode.getElementsByTagName("tbody").item(0);
    for (var j = 0; (node = tbody.getElementsByTagName("tr").item(j)); j++) {

        // crude way to sort by surname and name after first choice
        a[j] = new Array();
        a[j][0] = getConcatenedTextContent(node.getElementsByTagName("td").item(i));
        a[j][1] = getConcatenedTextContent(node.getElementsByTagName("td").item(1));
        a[j][2] = getConcatenedTextContent(node.getElementsByTagName("td").item(0));        
        a[j][3] = node;
    }

    if (a.length > 1) {
    
        a.sort(compare);

        // not a perfect way to check, but hell, it suits me fine
        if (a[0][0] == getConcatenedTextContent(tbody.getElementsByTagName("tr").item(0).getElementsByTagName("td").item(i))
           && a[1][0] == getConcatenedTextContent(tbody.getElementsByTagName("tr").item(1).getElementsByTagName("td").item(i))) 
        {
            a.reverse();
            lastindex = el.getElementsByTagName('img').length - 1;
            el.getElementsByTagName('img').item(lastindex).setAttribute('src', portal_url + '/arrowDown.gif');
        }

    }
    
    for (var j = 0; j < a.length; j++) {
        tbody.appendChild(a[j][3]);
    }
}
    
function initalizeTableSort(e) {
    // terminate if we hit a non-compliant DOM implementation
    if (!W3CDOM){return false};

    var tbls = document.getElementsByTagName('table');
    for (var t = 0; t < tbls.length; t++)
        {
        // elements of class="listing" can be sorted
        var re = new RegExp(/\blisting\b/)
        // elements of class="nosort" should not be sorted
        var xre = new RegExp(/\bnosort\b/)
        if (re.exec(tbls[t].className) && !xre.exec(tbls[t].className))
        {
            try {
               var thead = tbls[t].getElementsByTagName("thead").item(0);
                var node;
                // set up blank spaceholder gifs
                blankarrow = document.createElement('img');
                blankarrow.setAttribute('src', portal_url + '/arrowBlank.gif');
                blankarrow.setAttribute('height',6);
                blankarrow.setAttribute('width',9);
                // the first sortable column should get an arrow initially.
                initialsort = false;
                for (var i = 0; (node = thead.getElementsByTagName("th").item(i)); i++) {
                    // check that the columns does not have class="nosort"
                    if (!xre.exec(node.className)) {
                        node.insertBefore(blankarrow.cloneNode(1), node.firstChild);
                        node.style.cursor = 'pointer';
                        if (!initialsort) {
                            initialsort = true;
                            uparrow = document.createElement('img');
                            uparrow.setAttribute('src', portal_url + '/arrowUp.gif');
                            uparrow.setAttribute('height',6);
                            uparrow.setAttribute('width',9);
                            node.appendChild(uparrow);
                        } else {
                            node.appendChild(blankarrow.cloneNode(1));
                        }
    
                        if (node.addEventListener) node.addEventListener("click",sort,false);
                        else if (node.attachEvent) node.attachEvent("onclick",sort);
                    }
                }
            } catch(er) {}
        }
    }
}   
// **** End table sort script ***
registerPloneFunction(initalizeTableSort)   



/* ----- calendar_formfield.js ----- */
// jscalendar glue -- Leonard Norrgård <vinsci@*>
// This function gets called when the user clicks on some date.
function onJsCalendarDateUpdate(cal) {
    var year   = cal.params.input_id_year;
    var month  = cal.params.input_id_month;
    var day    = cal.params.input_id_day;
    // var hour   = cal.params.input_id_hour;
    // var minute = cal.params.input_id_minute;

    // cal.params.inputField.value = cal.date.print('%Y/%m/%d %H:%M'); // doesn't work in Opera, don't use time now
    //cal.params.inputField.value = cal.date.print('%Y/%m/%d'); // doesn't work in Opera
    var daystr = '' + cal.date.getDate();
    if (daystr.length == 1)
    	daystr = '0' + daystr;
    var monthstr = '' + (cal.date.getMonth()+1);
    if (monthstr.length == 1)
	monthstr = '0' + monthstr;
    cal.params.inputField.value = '' + cal.date.getFullYear() + '/' + monthstr + '/' + daystr

    year.value  = cal.params.inputField.value.substring(0,4);
    month.value = cal.params.inputField.value.substring(5,7);
    day.value   = cal.params.inputField.value.substring(8,10);
    // hour.value  = cal.params.inputField.value.substring(11,13);
    // minute.value= cal.params.inputField.value.substring(14,16);
}


function showJsCalendar(input_id_anchor, input_id, input_id_year, input_id_month, input_id_day, input_id_hour, input_id_minute, yearStart, yearEnd) {
    // do what jscalendar-x.y.z/calendar-setup.js:Calendar.setup would do
    var input_id_anchor = document.getElementById(input_id_anchor);
    var input_id = document.getElementById(input_id);
    var input_id_year = document.getElementById(input_id_year);
    var input_id_month = document.getElementById(input_id_month);
    var input_id_day = document.getElementById(input_id_day);
    // var input_id_hour = document.getElementById(input_id_hour);
    // var input_id_minute = document.getElementById(input_id_minute);
    var format = 'y/mm/dd';

    var dateEl = input_id;
    var mustCreate = false;
    var cal = window.calendar;

    var params = {
        'range' : [yearStart, yearEnd],
        inputField : input_id,
        input_id_year : input_id_year,
        input_id_month: input_id_month,
        input_id_day  : input_id_day
        // input_id_hour : input_id_hour,
        // input_id_minute: input_id_minute
    };

    function param_default(pname, def) { if (typeof params[pname] == "undefined") { params[pname] = def; } };

    param_default("inputField",     null);
    param_default("displayArea",    null);
    param_default("button",         null);
    param_default("eventName",      "click");
    param_default("ifFormat",       "%Y/%m/%d");
    param_default("daFormat",       "%Y/%m/%d");
    param_default("singleClick",    true);
    param_default("disableFunc",    null);
    param_default("dateStatusFunc", params["disableFunc"]); // takes precedence if both are defined
    param_default("dateText",       null);
    param_default("firstDay",       1);
    param_default("align",          "Bl");
    param_default("range",          [1900, 2999]);
    param_default("weekNumbers",    true);
    param_default("flat",           null);
    param_default("flatCallback",   null);
    param_default("onSelect",       null);
    param_default("onClose",        null);
    param_default("onUpdate",       null);
    param_default("date",           null);
    param_default("showsTime",      false);
    param_default("timeFormat",     "24");
    param_default("electric",       true);
    param_default("step",           2);
    param_default("position",       null);
    param_default("cache",          false);
    param_default("showOthers",     false);
    param_default("multiple",       null);

    if (!(cal && params.cache)) {
	window.calendar = cal = new Calendar(params.firstDay,
	     null,
	     onJsCalendarDateUpdate,
	     function(cal) { cal.hide(); });
	cal.time24 = true;
	cal.weekNumbers = true;
	mustCreate = true;
    } else {
        cal.hide();
    }
    cal.showsOtherMonths = false;
    cal.yearStep = 2;
    cal.setRange(yearStart,yearEnd);
    cal.params = params;
    cal.setDateStatusHandler(null);
    cal.getDateText = null;
    cal.setDateFormat(format);
    if (mustCreate)
	cal.create();
    cal.refresh();
    if (!params.position)
        cal.showAtElement(input_id_anchor, null);
    else
        cal.showAt(params.position[0], params.position[1]);
    return false;
}


// This function updates a hidden date field with the current values of the widgets
function update_date_field(field, year, month, day, hour, minute, ampm)
{
    var field  = document.getElementById(field)
    var date   = document.getElementById(date)
    var year   = document.getElementById(year)
    var month  = document.getElementById(month)
    var day    = document.getElementById(day)
    var hour   = document.getElementById(hour)
    var minute = document.getElementById(minute)
    var ampm   = document.getElementById(ampm)

    if (0 < year.value)
    {
        // Return ISO date string
        // Note: This relies heavily on what date_components_support.py puts into the form.
        field.value = year.value + "-" + month.value + "-" + day.value + " " + hour.value + ":" + minute.value
        // Handle optional AM/PM
        if (ampm && ampm.value)
            field.value = field.value + " " + ampm.value
    } 
    else 
    {
        // Return empty string
        field.value = ''
        // Reset widgets
        month.options[0].selected = 1
        day.options[0].selected = 1
        hour.options[0].selected = 1
        minute.options[0].selected = 1
        if (ampm && ampm.options)
            ampm.options[0].selected = 1
    }
}




/* ----- calendarpopup.js ----- */

// The calendar popup show/hide:

    function showDay(date) {
        document.getElementById('day' + date).style.visibility = 'visible';
        return true;
    }    
    function hideDay(date) {
        document.getElementById('day' + date).style.visibility = 'hidden';
        return true;
    }


 




/* ----- ie5fixes.js ----- */
/* Mike Malloch's fixes for Internet Explorer 5 - 
 * We dont care too much about IE5,
 * But these stop if from spitting errormessages at the user 
 */
function hackPush(el){
    this[this.length] = el;
}

function hackPop(){
    var N = this.length - 1, el = this[N];
    this.length = N
    return el;
}

function hackShift(){
    var one = this[0], N = this.length;
    for (var i = 1; i < N; i++){
            this[i-1] = this[i];
    }
    this.length = N-1
    return one;
}

var testPushPop = new Array();
if (testPushPop.push){
}else{
    Array.prototype.push = hackPush
    Array.prototype.pop = hackPop
    Array.prototype.shift = hackShift;
}

/* ----- formUnload.js ----- */
/* BeforeUnload form processing */
if (!window.beforeunload) (function() {
    var BeforeUnloadHandler = function() {
        var self = this;

        this.message = window.form_modified_message ||
            "Your form has not been saved. All changes you have made will be lost.";

        this.forms = [];
        this.chkId = [];
        this.chkType = new this.CheckType();
        this.handlers = [this.isAnyFormChanged];
        this.submitting = false;

        this.execute = function(event) {
            if (self.submitting) return;
            if (!event) event = window.event;

            for (var i = 0; i < self.handlers.length; i++) {
                var fn = self.handlers[i];
                var message = message || fn.apply(self);
            }
            if (message===true) message = self.message;
            if (message===false) message = undefined;
            if (event && message) { event.returnValue = message; }
            return message;
        }
        this.execute.tool = this;
    }
    var Class = BeforeUnloadHandler.prototype;

    // form checking code
    Class.isAnyFormChanged = function() {
        for (var i=0; i < this.forms.length; i++) {
            var form = this.forms[i];
            if (this.isElementChanged(form)) {
                return true;
            }
        }
        return false;
    }
    Class.addHandler = function(fn) {
        this.handlers.push(fn);
    }
    Class.onsubmit = function() {
        var tool = window.onbeforeunload && window.onbeforeunload.tool;
        tool.submitting = true;
    }
    Class.addForm = function(form) {
        for (var i = 0; i < this.forms.length; i++) {
            if (this.forms[i]==form) return;
        }
        this.forms.push(form);
        form.onsubmit = this.onsubmit;
        var elements = form.getElementsByTagName('input');
        for (var j = 0; j < elements.length; j++) {
            var ele = elements[j];
            if (ele.type=='hidden') {
                ele.setAttribute('originalValue', ele.defaultValue);
            }
        }
    }
    Class.addForms = function() {
        for (var i = 0; i < arguments.length; i++) {
            var element = arguments[i];
            if (!element) continue;
            if (element.tagName=='FORM') {
                this.addForm(element);
            }
            else {
                var forms = element.getElementsByTagName('form');
                for (var j = 0; j < forms.length; j++) {
                    this.addForm(forms[j]);
                }
            }
        }
    }
    Class.removeForms = function() {
        for (var i = 0; i < arguments.length; i++) {
            var element = arguments[i];
            if (!element) continue;
            if (element.tagName=='FORM') {
                for (var j = 0; j < arguments.length; j++) {
                    if (this.forms[j] == element) {
                        this.forms.splice(j--, 1);
                        element.onsubmit=null;
                    }
                }
            } else {
                var forms = element.getElementsByTagName('form');
                for (var j = 0; j < forms.length; j++) {
                    this.removeForms(forms[j]);
                }
            }
        }
    }

    Class.CheckType = function() {};
    var c = Class.CheckType.prototype;
    c.checkbox = c.radio = function(ele) {
        return ele.checked != ele.defaultChecked;
    }
    c.password = c.textarea = c.text = function(ele) {
        return ele.value != ele.defaultValue;
    }
    // hidden: cannot tell on Mozilla without special treatment
    c.hidden = function(ele) {
        var orig = ele.getAttribute("originalValue");
        return orig && (ele.value != orig);
    }

    c['select-one'] = function(ele) {
        for (var i=0 ; i < ele.length; i++) {
            var opt = ele.options[i];
            if ( opt.selected != opt.defaultSelected) {
                if (i===0 && opt.selected) continue; /* maybe no default */
                return true;
            }
        }
        return false;
    }

    c['select-multiple'] = function(ele) {
        for (var i=0 ; i < ele.length; i++) {
            var opt = ele.options[i];
            if ( opt.selected != opt.defaultSelected) {
                return true;
            }
        }
        return false;
    }

    Class.chk_form = function(form) {
        var elements = form.elements;
        for (var i=0; i < elements.length; i++ ) {
            var element = elements[i];
            if (this.isElementChanged(element)) {
                return true;
            }
        }
        return false;
    }

    Class.isElementChanged = function(ele) {
        var method = ele.id && this.chkId[ele.id];
        if (!method && ele.type && ele.name)
            method = this.chkType[ele.type];
        if (!method && ele.tagName)
            method = this['chk_'+ele.tagName.toLowerCase()];

        return method? method.apply(this, [ele]) : false;
    };

    window.onbeforeunload = new BeforeUnloadHandler().execute;
    
    registerPloneFunction(function() {
        // terminate if we hit a non-compliant DOM implementation
        if (!W3CDOM){return false};

        var tool = window.onbeforeunload && window.onbeforeunload.tool;
        var content = getContentArea();
        if (tool && content) {
            var forms = cssQuery('form.enableUnloadProtection');
            for (var i=0; i < forms.length; i++) {
                tool.addForm(forms[i]);
            }
        }
    });
})();

/* ----- sarissa.js ----- */
/*****************************************************************************
 *
 * Sarissa XML library version 0.9.6
 * Copyright (c) 2003 Manos Batsis, 
 * mailto: mbatsis at users full stop sourceforge full stop net
 * This software is distributed under the Kupu License. See
 * LICENSE.txt for license text. See the Sarissa homepage at
 * http://sarissa.sourceforge.net for more information.
 *
 *****************************************************************************

 * ====================================================================
 * About
 * ====================================================================
 * Sarissa cross browser XML library 
 * @version 0.9.6
 * @author: Manos Batsis, mailto: mbatsis at users full stop sourceforge full stop net
 *
 * Sarissa is an ECMAScript library acting as a cross-browser wrapper for native XML APIs.
 * The library supports Gecko based browsers like Mozilla and Firefox,
 * Internet Explorer (5.5+ with MSXML3.0+) and, last but not least, KHTML based browsers like
 * Konqueror and Safari.
 *
 */
/**
 * <p>Sarissa is a utility class. Provides static methods for DOMDocument and 
 * XMLHTTP objects, DOM Node serializatrion to XML strings and other goodies.</p>
 * @constructor
 */
function Sarissa(){};
/** @private */
Sarissa.PARSED_OK = "Document contains no parsing errors";
/**
 * Tells you whether transformNode and transformNodeToObject are available. This functionality
 * is contained in sarissa_ieemu_xslt.js and is deprecated. If you want to control XSLT transformations
 * use the XSLTProcessor
 * @deprecated
 * @type boolean
 */
Sarissa.IS_ENABLED_TRANSFORM_NODE = false;
/**
 * tells you whether XMLHttpRequest (or equivalent) is available
 * @type boolean
 */
Sarissa.IS_ENABLED_XMLHTTP = false;
/**
 * tells you whether selectNodes/selectSingleNode is available
 * @type boolean
 */
Sarissa.IS_ENABLED_SELECT_NODES = false;
var _sarissa_iNsCounter = 0;
var _SARISSA_IEPREFIX4XSLPARAM = "";
var _SARISSA_HAS_DOM_IMPLEMENTATION = document.implementation && true;
var _SARISSA_HAS_DOM_CREATE_DOCUMENT = _SARISSA_HAS_DOM_IMPLEMENTATION && document.implementation.createDocument;
var _SARISSA_HAS_DOM_FEATURE = _SARISSA_HAS_DOM_IMPLEMENTATION && document.implementation.hasFeature;
var _SARISSA_IS_MOZ = _SARISSA_HAS_DOM_CREATE_DOCUMENT && _SARISSA_HAS_DOM_FEATURE;
var _SARISSA_IS_SAFARI = navigator.userAgent.toLowerCase().indexOf("applewebkit") != -1;
var _SARISSA_IS_IE = document.all && window.ActiveXObject && navigator.userAgent.toLowerCase().indexOf("msie") > -1  && navigator.userAgent.toLowerCase().indexOf("opera") == -1;

if(!window.Node || !window.Node.ELEMENT_NODE){
    var Node = {ELEMENT_NODE: 1, ATTRIBUTE_NODE: 2, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, ENTITY_REFERENCE_NODE: 5,  ENTITY_NODE: 6, PROCESSING_INSTRUCTION_NODE: 7, COMMENT_NODE: 8, DOCUMENT_NODE: 9, DOCUMENT_TYPE_NODE: 10, DOCUMENT_FRAGMENT_NODE: 11, NOTATION_NODE: 12};
};

// IE initialization
if(_SARISSA_IS_IE){
    // for XSLT parameter names, prefix needed by IE
    _SARISSA_IEPREFIX4XSLPARAM = "xsl:";
    // used to store the most recent ProgID available out of the above
    var _SARISSA_DOM_PROGID = "";
    var _SARISSA_XMLHTTP_PROGID = "";
    /**
     * Called when the Sarissa_xx.js file is parsed, to pick most recent
     * ProgIDs for IE, then gets destroyed.
     * @param idList an array of MSXML PROGIDs from which the most recent will be picked for a given object
     * @param enabledList an array of arrays where each array has two items; the index of the PROGID for which a certain feature is enabled
     */
    pickRecentProgID = function (idList, enabledList){
        // found progID flag
        var bFound = false;
        for(var i=0; i < idList.length && !bFound; i++){
            try{
                var oDoc = new ActiveXObject(idList[i]);
                o2Store = idList[i];
                bFound = true;
                for(var j=0;j<enabledList.length;j++)
                    if(i <= enabledList[j][1])
                        Sarissa["IS_ENABLED_"+enabledList[j][0]] = true;
            }catch (objException){
                // trap; try next progID
            };
        };
        if (!bFound)
            throw "Could not retreive a valid progID of Class: " + idList[idList.length-1]+". (original exception: "+e+")";
        idList = null;
        return o2Store;
    };
    // pick best available MSXML progIDs
    _SARISSA_DOM_PROGID = pickRecentProgID(["Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0", "Msxml2.DOMDocument.3.0", "MSXML2.DOMDocument", "MSXML.DOMDocument", "Microsoft.XMLDOM"], [["SELECT_NODES", 2],["TRANSFORM_NODE", 2]]);
    _SARISSA_XMLHTTP_PROGID = pickRecentProgID(["Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], [["XMLHTTP", 4]]);
    _SARISSA_THREADEDDOM_PROGID = pickRecentProgID(["Msxml2.FreeThreadedDOMDocument.5.0", "MSXML2.FreeThreadedDOMDocument.4.0", "MSXML2.FreeThreadedDOMDocument.3.0"]);
    _SARISSA_XSLTEMPLATE_PROGID = pickRecentProgID(["Msxml2.XSLTemplate.5.0", "Msxml2.XSLTemplate.4.0", "MSXML2.XSLTemplate.3.0"], [["XSLTPROC", 2]]);
    // we dont need this anymore
    pickRecentProgID = null;
    //============================================
    // Factory methods (IE)
    //============================================
    // see non-IE version
    Sarissa.getDomDocument = function(sUri, sName){
        var oDoc = new ActiveXObject(_SARISSA_DOM_PROGID);
        // if a root tag name was provided, we need to load it in the DOM
        // object
        if (sName){
            // if needed, create an artifical namespace prefix the way Moz
            // does
            if (sUri){
                oDoc.loadXML("<a" + _sarissa_iNsCounter + ":" + sName + " xmlns:a" + _sarissa_iNsCounter + "=\"" + sUri + "\" />");
                // don't use the same prefix again
                ++_sarissa_iNsCounter;
            }
            else
                oDoc.loadXML("<" + sName + "/>");
        };
        return oDoc;
    };
    // see non-IE version   
    Sarissa.getParseErrorText = function (oDoc) {
        var parseErrorText = Sarissa.PARSED_OK;
        if(oDoc.parseError != 0){
            parseErrorText = "XML Parsing Error: " + oDoc.parseError.reason + 
                "\nLocation: " + oDoc.parseError.url + 
                "\nLine Number " + oDoc.parseError.line + ", Column " + 
                oDoc.parseError.linepos + 
                ":\n" + oDoc.parseError.srcText +
                "\n";
            for(var i = 0;  i < oDoc.parseError.linepos;i++){
                parseErrorText += "-";
            };
            parseErrorText +=  "^\n";
        };
        return parseErrorText;
    };
    // see non-IE version
    Sarissa.setXpathNamespaces = function(oDoc, sNsSet) {
        oDoc.setProperty("SelectionLanguage", "XPath");
        oDoc.setProperty("SelectionNamespaces", sNsSet);
    };   
    /**
     * Basic implementation of Mozilla's XSLTProcessor for IE. 
     * Reuses the same XSLT stylesheet for multiple transforms
     * @constructor
     */
    XSLTProcessor = function(){
        this.template = new ActiveXObject(_SARISSA_XSLTEMPLATE_PROGID);
        this.processor = null;
    };
    /**
     * Impoprts the given XSLT DOM and compiles it to a reusable transform
     * @argument xslDoc The XSLT DOMDocument to import
     */
    XSLTProcessor.prototype.importStylesheet = function(xslDoc){
        // convert stylesheet to free threaded
        var converted = new ActiveXObject(_SARISSA_THREADEDDOM_PROGID); 
        converted.loadXML(xslDoc.xml);
        this.template.stylesheet = converted;
        this.processor = this.template.createProcessor();
        // (re)set default param values
        this.paramsSet = new Array();
    };
    /**
     * Transform the given XML DOM
     * @argument sourceDoc The XML DOMDocument to transform
     * @return The transformation result as a DOM Document
     */
    XSLTProcessor.prototype.transformToDocument = function(sourceDoc){
        this.processor.input = sourceDoc;
        var outDoc = new ActiveXObject(_SARISSA_DOM_PROGID);
        this.processor.output = outDoc; 
        this.processor.transform();
        return outDoc;
    };
    /**
     * Not sure if this works in IE. Maybe this will allow non-well-formed
     * transformation results (i.e. with no single root element)
     * @argument sourceDoc The XML DOMDocument to transform
     * @return The transformation result as a DOM Fragment
     */
    XSLTProcessor.prototype.transformToFragment = function(sourceDoc, ownerDocument){
        return this.transformToDocument(sourceDoc);
    };
    /**
     * Set global XSLT parameter of the imported stylesheet
     * @argument nsURI The parameter namespace URI
     * @argument name The parameter base name
     * @argument value The new parameter value
     */
    XSLTProcessor.prototype.setParameter = function(nsURI, name, value){
        /* nsURI is optional but cannot be null */
        if(nsURI){
            this.processor.addParameter(name, value, nsURI);
        }else{
            this.processor.addParameter(name, value);
        };
        /* update updated params for getParameter */
        if(!this.paramsSet[""+nsURI]){
            this.paramsSet[""+nsURI] = new Array();
        };
        this.paramsSet[""+nsURI][name] = value;
    };
    /**
     * Gets a parameter if previously set by setParameter. Returns null
     * otherwise
     * @argument name The parameter base name
     * @argument value The new parameter value
     * @return The parameter value if reviously set by setParameter, null otherwise
     */
    XSLTProcessor.prototype.getParameter = function(nsURI, name){
        if(this.paramsSet[""+nsURI] && this.paramsSet[""+nsURI][name])
            return this.paramsSet[""+nsURI][name];
        else
            return null;
    };
}
else{ /* end IE initialization, try to deal with real browsers now ;-) */
   if(_SARISSA_HAS_DOM_CREATE_DOCUMENT){
        if(window.XMLDocument){
            /**
            * <p>Emulate IE's onreadystatechange attribute</p>
            */
            XMLDocument.prototype.onreadystatechange = null;
            /**
            * <p>Emulates IE's readyState property, which always gives an integer from 0 to 4:</p>
            * <ul><li>1 == LOADING,</li>
            * <li>2 == LOADED,</li>
            * <li>3 == INTERACTIVE,</li>
            * <li>4 == COMPLETED</li></ul>
            */
            XMLDocument.prototype.readyState = 0;
            /**
            * <p>Emulate IE's parseError attribute</p>
            */
            XMLDocument.prototype.parseError = 0;

            // NOTE: setting async to false will only work with documents
            // called over HTTP (meaning a server), not the local file system,
            // unless you are using Moz 1.4+.
            // BTW the try>catch block is for 1.4; I haven't found a way to check if
            // the property is implemented without
            // causing an error and I dont want to use user agent stuff for that...
            var _SARISSA_SYNC_NON_IMPLEMENTED = false;
            try{
                /**
                * <p>Emulates IE's async property for Moz versions prior to 1.4.
                * It controls whether loading of remote XML files works
                * synchronously or asynchronously.</p>
                */
                XMLDocument.prototype.async = true;
                _SARISSA_SYNC_NON_IMPLEMENTED = true;
            }catch(e){/* trap */};
            /**
            * <p>Keeps a handle to the original load() method. Internal use and only
            * if Mozilla version is lower than 1.4</p>
            * @private
            */
            XMLDocument.prototype._sarissa_load = XMLDocument.prototype.load;

            /**
            * <p>Overrides the original load method to provide synchronous loading for
            * Mozilla versions prior to 1.4, using an XMLHttpRequest object (if
            * async is set to false)</p>
            * @returns the DOM Object as it was before the load() call (may be  empty)
            */
            XMLDocument.prototype.load = function(sURI) {
                var oDoc = document.implementation.createDocument("", "", null);
                Sarissa.copyChildNodes(this, oDoc);
                this.parseError = 0;
                Sarissa.__setReadyState__(this, 1);
                try {
                    if(this.async == false && _SARISSA_SYNC_NON_IMPLEMENTED) {
                        var tmp = new XMLHttpRequest();
                        tmp.open("GET", sURI, false);
                        tmp.send(null);
                        Sarissa.__setReadyState__(this, 2);
                        Sarissa.copyChildNodes(tmp.responseXML, this);
                        Sarissa.__setReadyState__(this, 3);
                    }
                    else {
                        this._sarissa_load(sURI);
                    };
                }
                catch (objException) {
                    this.parseError = -1;
                }
                finally {
                    if(this.async == false){
                        Sarissa.__handleLoad__(this);
                    };
                };
                return oDoc;
            };
        };//if(window.XMLDocument)

        /**
         * <p>Ensures the document was loaded correctly, otherwise sets the
         * parseError to -1 to indicate something went wrong. Internal use</p>
         * @private
         */
        Sarissa.__handleLoad__ = function(oDoc){
            if (!oDoc.documentElement || oDoc.documentElement.tagName == "parsererror")
                oDoc.parseError = -1;
            Sarissa.__setReadyState__(oDoc, 4);
        };
        
        /**
        * <p>Attached by an event handler to the load event. Internal use.</p>
        * @private
        */
        _sarissa_XMLDocument_onload = function(){
            Sarissa.__handleLoad__(this);
        };
        
        /**
         * <p>Sets the readyState property of the given DOM Document object.
         * Internal use.</p>
         * @private
         * @argument oDoc the DOM Document object to fire the
         *          readystatechange event
         * @argument iReadyState the number to change the readystate property to
         */
        Sarissa.__setReadyState__ = function(oDoc, iReadyState){
            oDoc.readyState = iReadyState;
            if (oDoc.onreadystatechange != null && typeof oDoc.onreadystatechange == "function")
                oDoc.onreadystatechange();
        };
        /**
        * <p>Factory method to obtain a new DOM Document object</p>
        * @argument sUri the namespace of the root node (if any)
        * @argument sUri the local name of the root node (if any)
        * @returns a new DOM Document
        */
        Sarissa.getDomDocument = function(sUri, sName){
            var oDoc = document.implementation.createDocument(sUri?sUri:"", sName?sName:"", null);
            oDoc.addEventListener("load", _sarissa_XMLDocument_onload, false);
            return oDoc;
        };        
    };//if(_SARISSA_HAS_DOM_CREATE_DOCUMENT)
};
//==========================================
// Common stuff
//==========================================
if(!window.DOMParser){
    /** 
    * DOMParser is a utility class, used to construct DOMDocuments from XML strings
    * @constructor
    */
    DOMParser = function() {
    };
    /** 
    * Construct a new DOM Document from the given XMLstring
    * @param sXml the given XML string
    * @param contentType the content type of the document the given string represents (one of text/xml, application/xml, application/xhtml+xml). 
    * @return a new DOM Document from the given XML string
    */
    DOMParser.prototype.parseFromString = function(sXml, contentType){
        var doc = Sarissa.getDomDocument();
        doc.loadXML(sXml);
        return doc;
    };
    
};

if(window.XMLHttpRequest){
    Sarissa.IS_ENABLED_XMLHTTP = true;
}
else if(_SARISSA_IS_IE){
    /**
     * Emulate XMLHttpRequest
     * @constructor
     */
    XMLHttpRequest = function() {
        return new ActiveXObject(_SARISSA_XMLHTTP_PROGID);
    };
    Sarissa.IS_ENABLED_XMLHTTP = true;
};

if(!window.document.importNode && _SARISSA_IS_IE){
    try{
        /**
        * Implements importNode for the current window document in IE using innerHTML.
        * Testing showed that DOM was multiple times slower than innerHTML for this,
        * sorry folks. If you encounter trouble (who knows what IE does behind innerHTML)
        * please gimme a call.
        * @param oNode the Node to import
        * @param bChildren whether to include the children of oNode
        * @returns the imported node for further use
        */
        window.document.importNode = function(oNode, bChildren){
            var importNode = document.createElement("div");
            if(bChildren)
                importNode.innerHTML = Sarissa.serialize(oNode);
            else
                importNode.innerHTML = Sarissa.serialize(oNode.cloneNode(false));
            return importNode.firstChild;
        };
        }catch(e){};
};
if(!Sarissa.getParseErrorText){
    /**
     * <p>Returns a human readable description of the parsing error. Usefull
     * for debugging. Tip: append the returned error string in a &lt;pre&gt;
     * element if you want to render it.</p>
     * <p>Many thanks to Christian Stocker for the initial patch.</p>
     * @argument oDoc The target DOM document
     * @returns The parsing error description of the target Document in
     *          human readable form (preformated text)
     */
    Sarissa.getParseErrorText = function (oDoc){
        var parseErrorText = Sarissa.PARSED_OK;
        if(oDoc.parseError != 0){
            /*moz*/
            if(oDoc.documentElement.tagName == "parsererror"){
                parseErrorText = oDoc.documentElement.firstChild.data;
                parseErrorText += "\n" +  oDoc.documentElement.firstChild.nextSibling.firstChild.data;
            }/*konq*/
            else if(oDoc.documentElement.tagName == "html"){
                parseErrorText = Sarissa.getText(oDoc.documentElement.getElementsByTagName("h1")[0], false) + "\n";
                parseErrorText += Sarissa.getText(oDoc.documentElement.getElementsByTagName("body")[0], false) + "\n";
                parseErrorText += Sarissa.getText(oDoc.documentElement.getElementsByTagName("pre")[0], false);
            };
        };
        return parseErrorText;
    };
};
Sarissa.getText = function(oNode, deep){
    var s = "";
    var nodes = oNode.childNodes;
    for(var i=0; i < nodes.length; i++){
        var node = nodes[i];
        var nodeType = node.nodeType;
        if(nodeType == Node.TEXT_NODE || nodeType == Node.CDATA_SECTION_NODE){
            s += node.data;
        }
        else if(deep == true
                    && (nodeType == Node.ELEMENT_NODE
                        || nodeType == Node.DOCUMENT_NODE
                        || nodeType == Node.DOCUMENT_FRAGMENT_NODE)){
            s += Sarissa.getText(node, true);
        };
    };
    return s;
};
if(window.XMLSerializer){
    /**
     * <p>Factory method to obtain the serialization of a DOM Node</p>
     * @returns the serialized Node as an XML string
     */
    Sarissa.serialize = function(oDoc){
        return (new XMLSerializer()).serializeToString(oDoc);
    };
}else{
    if((Sarissa.getDomDocument("","foo", null)).xml){
        // see non-IE version
        Sarissa.serialize = function(oDoc) {
            // TODO: check for HTML document and return innerHTML instead
            return oDoc.xml;
        };
        /**
         * Utility class to serialize DOM Node objects to XML strings
         * @constructor
         */
        XMLSerializer = function(){};
        /**
         * Serialize the given DOM Node to an XML string
         * @param oNode the DOM Node to serialize
         */
        XMLSerializer.prototype.serializeToString = function(oNode) {
            return oNode.xml;
        };
    };
};

/**
 * strips tags from a markup string
 */
Sarissa.stripTags = function (s) {
    return s.replace(/<[^>]+>/g,"");
};
/**
 * <p>Deletes all child nodes of the given node</p>
 * @argument oNode the Node to empty
 */
Sarissa.clearChildNodes = function(oNode) {
    while(oNode.hasChildNodes()){
        oNode.removeChild(oNode.firstChild);
    };
};
/**
 * <p> Copies the childNodes of nodeFrom to nodeTo</p>
 * <p> <b>Note:</b> The second object's original content is deleted before 
 * the copy operation, unless you supply a true third parameter</p>
 * @argument nodeFrom the Node to copy the childNodes from
 * @argument nodeTo the Node to copy the childNodes to
 * @argument bPreserveExisting whether to preserve the original content of nodeTo, default is false
 */
Sarissa.copyChildNodes = function(nodeFrom, nodeTo, bPreserveExisting) {
    if(!bPreserveExisting){
        Sarissa.clearChildNodes(nodeTo);
    };
    var ownerDoc = nodeTo.nodeType == Node.DOCUMENT_NODE ? nodeTo : nodeTo.ownerDocument;
    var nodes = nodeFrom.childNodes;
    if(ownerDoc.importNode && (!_SARISSA_IS_IE)) {
        for(var i=0;i < nodes.length;i++) {
            nodeTo.appendChild(ownerDoc.importNode(nodes[i], true));
        };
    }
    else{
        for(var i=0;i < nodes.length;i++) {
            nodeTo.appendChild(nodes[i].cloneNode(true));
        };
    };
};

/**
 * <p> Moves the childNodes of nodeFrom to nodeTo</p>
 * <p> <b>Note:</b> The second object's original content is deleted before 
 * the move operation, unless you supply a true third parameter</p>
 * @argument nodeFrom the Node to copy the childNodes from
 * @argument nodeTo the Node to copy the childNodes to
 * @argument bPreserveExisting whether to preserve the original content of nodeTo, default is false
 */
Sarissa.moveChildNodes = function(nodeFrom, nodeTo, bPreserveExisting) {
    if(!bPreserveExisting){
        Sarissa.clearChildNodes(nodeTo);
    };
    
    var nodes = nodeFrom.childNodes;
    // if within the same doc, just move, else copy and delete
    if(nodeFrom.ownerDocument == nodeTo.ownerDocument){
        nodeTo.appendChild(nodes[i]);
    }else{
        var ownerDoc = nodeTo.nodeType == Node.DOCUMENT_NODE ? nodeTo : nodeTo.ownerDocument;
         if(ownerDoc.importNode && (!_SARISSA_IS_IE)) {
            for(var i=0;i < nodes.length;i++) {
                nodeTo.appendChild(ownerDoc.importNode(nodes[i], true));
            };
        }
        else{
            for(var i=0;i < nodes.length;i++) {
                nodeTo.appendChild(nodes[i].cloneNode(true));
            };
        };
        Sarissa.clearChildNodes(nodeFrom);
    };
    
};

/** 
 * <p>Serialize any object to an XML string. All properties are serialized using the property name
 * as the XML element name. Array elements are rendered as <code>array-item</code> elements, 
 * using their index/key as the value of the <code>key</code> attribute.</p>
 * @argument anyObject the object to serialize
 * @argument objectName a name for that object
 * @return the XML serializationj of the given object as a string
 */
Sarissa.xmlize = function(anyObject, objectName, indentSpace){
    indentSpace = indentSpace?indentSpace:'';
    var s = indentSpace  + '<' + objectName + '>';
    var isLeaf = false;
    if(!(anyObject instanceof Object) || anyObject instanceof Number || anyObject instanceof String 
        || anyObject instanceof Boolean || anyObject instanceof Date){
        s += Sarissa.escape(""+anyObject);
        isLeaf = true;
    }else{
        s += "\n";
        var itemKey = '';
        var isArrayItem = anyObject instanceof Array;
        for(var name in anyObject){
            s += Sarissa.xmlize(anyObject[name], (isArrayItem?"array-item key=\""+name+"\"":name), indentSpace + "   ");
        };
        s += indentSpace;
    };
    return s += (objectName.indexOf(' ')!=-1?"</array-item>\n":"</" + objectName + ">\n");
};

/** 
 * Escape the given string chacters that correspond to the five predefined XML entities
 * @param sXml the string to escape
 */
Sarissa.escape = function(sXml){
    return sXml.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
};

/** 
 * Unescape the given string. This turns the occurences of the predefined XML 
 * entities to become the characters they represent correspond to the five predefined XML entities
 * @param sXml the string to unescape
 */
Sarissa.unescape = function(sXml){
    return sXml.replace(/&apos;/g,"'")
        .replace(/&quot;/g,"\"")
        .replace(/&gt;/g,">")
        .replace(/&lt;/g,"<")
        .replace(/&amp;/g,"&");
};
//   EOF


/* ----- login.js ----- */
// Functions used by login pages

function cookiesEnabled() {
  // Test whether cookies are enabled by attempting to set a cookie and then change its value
  // set test cookie
  var c = "areYourCookiesEnabled=0";
  document.cookie = c;
  var dc = document.cookie;
  // cookie not set?  fail
  if (dc.indexOf(c) == -1) return 0;
  // change test cookie
  c = "areYourCookiesEnabled=1";
  document.cookie = c;
  dc = document.cookie;
  // cookie not changed?  fail
  if (dc.indexOf(c) == -1) return 0;
  // delete cookie
  document.cookie = "areYourCookiesEnabled=; expires=Thu, 01-Jan-70 00:00:01 GMT";
  return 1;
}

function setLoginVars(user_name_id, alt_user_name_id, password_id, empty_password_id, js_enabled_id, cookies_enabled_id) {
  // Indicate that javascript is enabled, set cookie status, copy username and password length info to 
  // alternative variables since these vars are removed from the request by zope's authentication mechanism.
  if (js_enabled_id) {
    el = document.getElementById(js_enabled_id);
    if (el) { el.value = 1; }
  }
  if (cookies_enabled_id) {
    el = document.getElementById(cookies_enabled_id);
    // Do a fresh cookies enabled test every time we press the login button
    //   so that we are up to date in case the user enables cookies after seeing
    //   the cookies message.
    if (el) { el.value = cookiesEnabled(); } 
  }
  if (user_name_id && alt_user_name_id) {
    user_name = document.getElementById(user_name_id)
    alt_user_name = document.getElementById(alt_user_name_id)
    if (user_name && alt_user_name) {
       alt_user_name.value = user_name.value;
    } 
  }
  if (password_id && empty_password_id) {
    password = document.getElementById(password_id)
    empty_password = document.getElementById(empty_password_id)
    if (password && empty_password) {
       if (password.value.length==0) {
          empty_password.value = '1';
       } else {
          empty_password.value = '0';
       }
    }
  }
  return 1;
}

function showCookieMessage(msg_id) {
  // Show the element with the given id if cookies are not enabled
  msg = document.getElementById(msg_id)
  if (msg) {
     if (cookiesEnabled()) {
        msg.style.display = 'none';
     } else {
        msg.style.display = 'block';
     }
  }
}

function showEnableCookiesMessage() {
  // Show the element with the id 'enable_cookies_message' if cookies are not enabled
  showCookieMessage('enable_cookies_message')
}
// Call showEnableCookiesMessage after the page loads
registerPloneFunction(showEnableCookiesMessage);

