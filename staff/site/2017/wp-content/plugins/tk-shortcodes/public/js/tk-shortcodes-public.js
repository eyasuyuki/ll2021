(function( $ ) {
	'use strict';

		jQuery(document).ready(function(){

            // Responsive columns fix

			var sixthColumn      = $('.row-columns .column-lg-2');
			var sixthColumnWidth = sixthColumn.outerWidth();

            if( sixthColumnWidth < 120){
                sixthColumn.removeClass('column-lg-2');
                sixthColumn.addClass('column-lg-4');
            }

		    // Tabs

		    var tabsBlock = $('.tk-shortcode-tabs');

		    if($().tabs) {
		        tabsBlock.tabs({
		            show: true
		        });
		    }

		    var activeTab = $('.tk-shortcode-tabs .tk-nav-tabs').find('.ui-state-active');
		    activeTab.addClass('active');

		    $('.ui-tabs-anchor').click(function(){
		    	$(this).parent().addClass('active');
		    	$('.tk-shortcode-tabs .tk-nav-tabs > li').not('.ui-state-active').removeClass('active');
		    });

	    	function checkTabsWidth(){
		        tabsBlock.each(function(){

		            var $this = $(this);
		            var tabsNav = $this.find('.tk-nav-tabs');
		            var tabsNavItem = tabsNav.find('li');
		            var tabsNavWidth = 0;

		            tabsNavItem.each(function () {
		                tabsNavWidth += $(this).width();
		            });

		            var tabsContentWidth = tabsNav.next('.tab-content').width();

		            if(tabsNavWidth > tabsContentWidth){
		                tabsNav.find('li').addClass('fullwidth');
		            }

		        });
		    }

		    $(window).load(function(){
			    checkTabsWidth();
		    });

		    $(window).resize(function(){
		        checkTabsWidth();
		    });


		    // Toggles

		    var toggleHeader = $('.tk_toggle .tab-head');

		    toggleHeader.each( function() {
				var toggle       = $(this).parent();
				var toggle_state = toggle.data('state');

				if('opened' == toggle_state){
					toggle.toggleClass('opened').find('.tab-body').animate({height: 'toggle'}, 400);
					toggle.addClass('opened');
				}

		        $(this).click(function() {
		            toggle.toggleClass('opened').find('.tab-body').animate({height: 'toggle'}, 400);
		            return false;
		        });

		    });

		    // Accordion

		    var accordionBlock = $('.tk_accordion');

		    accordionBlock.each(function(){
		        var $this = $(this);
		        var accordionHeader = $this.find('.tab-head');

		        function accordionAddClass(){
		            if($this.hasClass('opened')){
		                accordionHeader.next().slideDown();
		            }
		            else{
		                accordionHeader.next().slideUp();
		            }
		        }

		        accordionAddClass();

		        accordionHeader.click(function(){
		            var $this = $(this);
		            $this.parent().siblings().removeClass('opened').find('.tab-body').slideUp();
		            if($this.parent().hasClass('opened')){
		                $this.parent().removeClass('opened');
		            }
		            else{
		                $this.parent().addClass('opened');
		            }
		            accordionAddClass();
		        });

		    });

		    // Infobox

		    var infoBoxClose = $('.close-infobox');

		    infoBoxClose.click(function(){
		        var $this = $(this);
		        $this.parent().fadeOut();
		    });

		    // Progress Bar


		    function barPercentage(){
		        var progressBar = $('.tk-progress');
		        progressBar.each(function(){
		            var $this = $(this);
		            var progressBarLoaded = $this.find('.bar');
		            var progressBarLoadedAmount = parseInt(progressBarLoaded.data('width'));
		            $this.find('.bar-percentage').text(progressBarLoadedAmount+'%');
		        });
		    }

		    barPercentage();

		    var progressBarLoaded = $('.tk-progress').find('.bar');

		    progressBarLoaded.each(function(){
		        var $this = $(this);
		        var value = parseInt($this.data('width'));

		        setTimeout(function(){
		            $this.animate({width: value+'%'}, 800);
		        }, 1000);
		    });

	});

})( jQuery );
