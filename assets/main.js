$(window).load(function() {
	$('.carousel').nivoSlider({
    effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
    slices: 15, // For slice animations
    boxCols: 8, // For box animations
    boxRows: 4, // For box animations
    animSpeed: 500, // Slide transition speed
    pauseTime: 5000, // How long each slide will show
    startSlide: 0, // Set starting Slide (0 index)
    directionNav: false, // Next & Prev navigation
    directionNavHide: true, // Only show on hover
    controlNav: true, // 1,2,3... navigation
    controlNavThumbs: false, // Use thumbnails for Control Nav
    controlNavThumbsFromRel: false, // Use image rel for thumbs
    controlNavThumbsSearch: '.jpg', // Replace this with...
    controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
    keyboardNav: true, // Use left & right arrows
    pauseOnHover: true, // Stop animation while hovering
    manualAdvance: false, // Force manual transitions
    captionOpacity: 0.8, // Universal caption opacity
    prevText: 'Prev', // Prev directionNav text
    nextText: 'Next', // Next directionNav text
    beforeChange: function(){}, // Triggers before a slide transition
    afterChange: function(){}, // Triggers after a slide transition
    slideshowEnd: function(){}, // Triggers after all slides have been shown
    lastSlide: function(){}, // Triggers when last slide is shown
    afterLoad: function(){} // Triggers when slider has loaded
	});
		
	$('.thumb').click(function(){
		$('#big-img').attr('src', $(this).attr('src'));
	});
	
	$('#update-link').click(function(){
		$('#update-button').click();
	});
	$('#checkout-link').click(function(){
		$('#checkout-button').click();
	});
	
	var cart = Raphael(document.getElementById('cart-img'), 16, 13);
	var cartSet = cart.set();
	cart.importSVG('<svg><circle cx="7.43" cy="11.692" r="1.135"/><circle cx="12.851" cy="11.692" r="1.135"/><path d="M14.183,8.505H6.287L3.569,0.429C3.491,0.194,3.27,0.036,3.022,0.036H0.621c-0.317,0-0.576,0.258-0.576,0.577 s0.258,0.576,0.576,0.576h1.988l2.718,8.076C5.405,9.5,5.625,9.658,5.873,9.658h8.31c0.317,0,0.575-0.258,0.575-0.575 C14.758,8.763,14.5,8.505,14.183,8.505z"/><path d="M15.417,2.218L5.644,1.367C5.328,1.339,5.152,1.563,5.253,1.863l1.708,5.072c0.101,0.3,0.444,0.547,0.761,0.547h7.134 c0.318,0,0.605-0.259,0.637-0.574l0.437-4.066C15.964,2.526,15.734,2.246,15.417,2.218z"/></svg>', cartSet);
	cartSet.attr("fill", "#f00");
});