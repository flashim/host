var ScalingAPI = function () {
	var scalingObj = {
		init: function () {
			var self = this;
			window.onload = self.doScaling;
			window.onresize = self.doScaling;
			self.doScaling();
		},
		/*
		 * 4/23/2015 6:41 PM
		 * This metohd is being used to scale the element "wrapper_parent" added in index.html
		*/
		doScaling: function () {
			var winHeight = window.innerHeight;
			var winWidth = window.innerWidth;
			//console.log(winHeight, winWidth);
			var offset = 0,
				containerTop = 0,
				containerLeft = 0,
				RESIZE_RATIO = winWidth / winHeight,
				containerView = $('#wrapper'),
				containerViewParent = $('#wrapper_parent'),
				parentWidth = 0,
				parentHeight = 0,
				parentMarginTop = 0,
				ASPECT_RATIO = containerView.width() / containerView.height(),
				containerScale = 1;

			containerView.css({
				'-webkit-transform': 'scale(' + containerScale + ')',
				'-moz-transform': 'scale(' + containerScale + ')',
				'-ms-transform': 'scale(' + containerScale + ')',
				'-o-transform': 'scale(' + containerScale + ')'
			});
			containerViewParent.css({
				width: '0px',
				height: '0px',
				top: '50%',
				left: '0px'
			});
			var widthDiff = (containerView.width() - winWidth) / winWidth * 100;
			var heightDiff = ((containerView.height()) - winHeight) / winHeight * 100;
			(widthDiff > heightDiff) ? (containerScale = winWidth / containerView.width()) : (containerScale = winHeight / (containerView.height()));
			/* if (config.commonfeatures.scaling.scalingup !== undefined && !config.commonfeatures.scaling.scalingup) {
				containerScale = 1;
			} */

			/* if (containerScale > 1) {
				containerScale = 1;
			} */
			containerView.css({
				'-webkit-transform': 'scale(' + containerScale + ')',
				'-moz-transform': 'scale(' + containerScale + ')',
				'-ms-transform': 'scale(' + containerScale + ')',
				'-o-transform': 'scale(' + containerScale + ')'
			});
			parentWidth = Math.round(containerView.width() * containerScale);
			parentHeight = Math.round(containerView.height() * containerScale);

			parentMarginTop = (parentHeight / 2)

			containerViewParent.css({
				height: parentHeight + 'px',
				width: parentWidth + 'px',
				marginTop: -parentMarginTop + 'px'
				/* marginTop: (widthDiff > heightDiff) ? -parentMarginTop + 'px' : (heightDiff) + 'px' */
			});
			window.scrollTo(0, 0);
			//model.scaleFactor = containerScale;
		}
	}
	scalingObj.init();
	return scalingObj;
}