//ajaxSearch.js
//Version: 1.7 - refactored by coroico
//Created by: KyleJ (kjaebker@muddydogpaws.com)
//Created on: 03/14/06
//Description: This code is used to setup the ajax search request.
//My thanks to Steve Smith of orderlist.com for sharing his code on how he did this
//Live Search by Thomas (Shadock)

//Updated: 01/02/08 - Added version, folder and some others parameters - 1.7
//Updated: 12/14/07 - Transeffect fix : bad URI with several document groups - 1.6.2d - 
//Updated: 11/17/07 - Added IDs document selection - 1.6.2
//Updated: 11/06/07 - character encoding and opacity troubles corrected - 1.6.1

//Updated: 01/22/07 - Switched to mootools support
//Updated: 09/18/06 - Added user permissions to searching

//set the loading image to the correct location for you
//set the close image to the correct location for you
//set the ajax call to the correct location of ajaxSearch.php

// AjaxSearch Snippet folder location
var _base = 'assets/snippets/ajaxSearch/';

// AjaxSearch Snippet folder
var _version = '1.7';

//From Thomas : vars for live search
var _oldInputFieldValue = "";
var _currentInputFieldValue = "";
var _timeoutAdjustment = 0;
var newToggle;
var is_searching = false;
var liveTimeout = null;

function activateSearch() {
	var searchForm = $('ajaxSearch_form');

  if (as_version != _version) {
    alert("AjaxSearch version obsolete. Check the version of AjaxSearch.js file");
    return;
  }
  
  if (searchForm) {
		$('ajaxSearch_form').onsubmit = function() { doSearch(); return false; };
		
    var i = new Element('img');
		i.setProperties({
		   src: _base + 'images/indicator.white.gif', //Loading Image
		   alt: 'loading',
		   id: 'indicator'
		});
		toggleImage(i);
		
		searchForm.appendChild(i);

    var c = new Element('img'); //Close Image
		c.setProperties({
		   src: _base + 'images/cross.png', 
		   alt: 'close search',
		   id: 'searchClose'
		});
		c.addEvent('click', function(){closeSearch();});

    if (liveSearch) {
			c.setStyles({
			   position: 'absolute',
			   top: '1px',
			   right: '1px'
			});
    } else {
      toggleImage(c);
    }
		
		var s = $('ajaxSearch_output');
		
    var n = new Element('div'); // New search results div
		n.setProperty('id', 'current-search-results');
		n.setStyle('opacity', '1');
		s.appendChild(n);
		newToggle = new Fx.Slide('current-search-results', {duration: 600}).hide();
		newToggle.isDisplayed = function() {
			return this.wrapper['offset'+this.layout.capitalize()] > 0;
		}
		
    if (liveSearch) {
			s.appendChild(c);
		} else {
			searchForm.appendChild(c);
		}        
        
    is_searching = false;
    search_open = false;
    if (liveSearch) {
			$('ajaxSearch_input').addEvent('keyup', liveSearchReq);
      $('ajaxSearch_submit').setStyle('opacity', '0');         
    }
  }
}

function liveSearchReq() {
	if (liveTimeout) {
		window.clearTimeout(liveTimeout);
	}
	liveTimeout = window.setTimeout("doSearch()",400);
}

function doSearch() {
  // If we're already loading, don't do anything
  if (is_searching) return false;
  s = $('ajaxSearch_input').value;
  // Same if the search is blank
  if (s == '') return false;
  is_searching = true;
  c = $('current-search-results');

	toggleImage($('indicator'));
  if (!liveSearch) {if (!search_open) {toggleImage($('searchClose'));}}
  search_open = true;
  b = $('ajaxSearch_submit');
  b.disabled = true;
	
	if (newToggle.isDisplayed()) {
		newToggle.toggle(); 
	}

  // Setup the parameters and make the ajax call
	var pars = Object.toQueryString({
		q: _base + 'ajaxSearch.php',
		search: s, 
		as_version: as_version,
		debug: debug,
		ajaxMax: ajaxMax,
		stripHtml: stripHtml,
		stripSnip: stripSnip,
		stripSnippets: stripSnippets,
		useAllWords: useAllWords,
		searchStyle: encodeURI(searchStyle),
		minChars: minChars,
		showMoreResults: showMoreResults,
		moreResultsPage: moreResultsPage,
		as_language: as_language,
		extract: extract,
		extractLength: extractLength,
		docgrp: encodeURI(docgrp),
		highlightResult: highlightResult,
		listIDs: listIDs
	});
	
  var ajaxSearchReq = new Ajax('index-ajax.php', {postBody: pars, onComplete: doSearchResponse});
 	if (newToggle.isDisplayed()) {
		newToggle.toggle(); 
		ajaxSearchReq.request.delay(600, ajaxSearchReq);
	} else {
		ajaxSearchReq.request();
	}
  return true;
}

function doSearchResponse(request) {
  var o = $('ajaxSearch_output');
  o.setStyle('opacity', opacity);  // set of opacity parameter
  $('current-search-results').setHTML(decodeURIComponent(request));
	newToggle.toggle();
	is_searching = false;
	setTimeout('resetForm()',600);
}

function resetForm() {
  s = $('ajaxSearch_submit');
  s.disabled = false;
  toggleImage($('indicator'));
}

function closeSearch() {
	newToggle.toggle();
	setTimeout('clearSearch()',600);
}

function clearSearch() {
  toggleImage($('searchClose'));
  search_open = false;
  $('current-search-results').innerHTML = '';
  var o = $('ajaxSearch_output');
  o.setStyle('opacity', '0');
  $('ajaxSearch_input').value="";
  $('ajaxSearch_input').focus();
}

function toggleImage(imgElement) {
	imgStyle = imgElement.getStyle('opacity');
	if (imgStyle == '0') {
		imgElement.setStyle('opacity', '1');
	} else {
		imgElement.setStyle('opacity', '0');
	}
}

//Event.observe(window, 'load', activateSearch, false);
Window.onDomReady(activateSearch);
