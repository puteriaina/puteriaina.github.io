!function(a){function b(b,d,e){function f(){j.afterLoaded(),j.settings.hideFramesUntilPreloaded&&void 0!==j.settings.preloader&&j.settings.preloader!==!1&&j.frames.show(),void 0!==j.settings.preloader&&j.settings.preloader!==!1?j.settings.hidePreloaderUsingCSS&&j.transitionsSupported?(j.prependPreloadingCompleteTo=j.settings.prependPreloadingComplete===!0?j.settings.preloader:a(j.settings.prependPreloadingComplete),j.prependPreloadingCompleteTo.addClass("preloading-complete"),setTimeout(i,j.settings.hidePreloaderDelay)):j.settings.preloader.fadeOut(j.settings.hidePreloaderDelay,function(){clearInterval(j.defaultPreloader),i()}):i()}function g(b,c){var d=[];if(c)for(var e=b;e>0;e--)d.push(a("body").find('img[src="'+j.settings.preloadTheseImages[e-1]+'"]'));else for(var f=b;f>0;f--)j.frames.eq(j.settings.preloadTheseFrames[f-1]-1).find("img").each(function(){d.push(a(this)[0])});return d}function h(b,c){function d(){var b=a(l),d=a(m);h&&(m.length?h.reject(j,b,d):h.resolve(j)),a.isFunction(c)&&c.call(g,j,b,d)}function e(b,c){b.src!==f&&-1===a.inArray(b,k)&&(k.push(b),c?m.push(b):l.push(b),a.data(b,"imagesLoaded",{isBroken:c,src:b.src}),i&&h.notifyWith(a(b),[c,j,a(l),a(m)]),j.length===k.length&&(setTimeout(d),j.unbind(".imagesLoaded")))}var f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=b,h=a.isFunction(a.Deferred)?a.Deferred():0,i=a.isFunction(h.notify),j=g.find("img").add(g.filter("img")),k=[],l=[],m=[];a.isPlainObject(c)&&a.each(c,function(a,b){"callback"===a?c=b:h&&h[a](b)}),j.length?j.bind("load.imagesLoaded error.imagesLoaded",function(a){e(a.target,"error"===a.type)}).each(function(b,c){var d=c.src,g=a.data(c,"imagesLoaded");return g&&g.src===d?void e(c,g.isBroken):c.complete&&void 0!==c.naturalWidth?void e(c,0===c.naturalWidth||0===c.naturalHeight):void((c.readyState||c.complete)&&(c.src=f,c.src=d))}):d()}function i(){function b(a,b){var c,d;for(d in b)c="left"===d||"right"===d?f[d]:d,a===parseFloat(c)&&j._initCustomKeyEvent(b[d])}function c(){j.canvas.on("touchmove.sequence",d),g=null,i=!1}function d(a){if(j.settings.swipePreventsDefault&&a.preventDefault(),i){var b=a.originalEvent.touches[0].pageX,d=a.originalEvent.touches[0].pageY,e=g-b,f=h-d;Math.abs(e)>=j.settings.swipeThreshold?(c(),j._initCustomKeyEvent(e>0?j.settings.swipeEvents.left:j.settings.swipeEvents.right)):Math.abs(f)>=j.settings.swipeThreshold&&(c(),j._initCustomKeyEvent(f>0?j.settings.swipeEvents.down:j.settings.swipeEvents.up))}}function e(a){1===a.originalEvent.touches.length&&(g=a.originalEvent.touches[0].pageX,h=a.originalEvent.touches[0].pageY,i=!0,j.canvas.on("touchmove.sequence",d))}if(a(j.settings.preloader).remove(),j.nextButton=j._renderUiElements(j.settings.nextButton,".sequence-next"),j.prevButton=j._renderUiElements(j.settings.prevButton,".sequence-prev"),j.pauseButton=j._renderUiElements(j.settings.pauseButton,".sequence-pause"),j.pagination=j._renderUiElements(j.settings.pagination,".sequence-pagination"),void 0!==j.nextButton&&j.nextButton!==!1&&j.settings.showNextButtonOnInit===!0&&j.nextButton.show(),void 0!==j.prevButton&&j.prevButton!==!1&&j.settings.showPrevButtonOnInit===!0&&j.prevButton.show(),void 0!==j.pauseButton&&j.pauseButton!==!1&&j.settings.showPauseButtonOnInit===!0&&j.pauseButton.show(),j.settings.pauseIcon!==!1?(j.pauseIcon=j._renderUiElements(j.settings.pauseIcon,".sequence-pause-icon"),void 0!==j.pauseIcon&&j.pauseIcon.hide()):j.pauseIcon=void 0,void 0!==j.pagination&&j.pagination!==!1&&(j.paginationLinks=j.pagination.children(),j.paginationLinks.on("click.sequence",function(){var b=a(this).index()+1;j.goTo(b)}),j.settings.showPaginationOnInit===!0&&j.pagination.show()),j.nextFrameID=j.settings.startingFrameID,j.settings.hashTags===!0&&(j.frames.each(function(){j.frameHashID.push(a(this).prop(j.getHashTagFrom))}),j.currentHashTag=location.hash.replace("#",""),void 0===j.currentHashTag||""===j.currentHashTag?j.nextFrameID=j.settings.startingFrameID:(j.frameHashIndex=a.inArray(j.currentHashTag,j.frameHashID),j.nextFrameID=-1!==j.frameHashIndex?j.frameHashIndex+1:j.settings.startingFrameID)),j.nextFrame=j.frames.eq(j.nextFrameID-1),j.nextFrameChildren=j.nextFrame.children(),void 0!==j.pagination&&a(j.paginationLinks[j.settings.startingFrameID-1]).addClass("current"),j.transitionsSupported?j.settings.animateStartingFrameIn?j.settings.reverseAnimationsWhenNavigatingBackwards&&j.settings.autoPlayDirection-1&&j.settings.animateStartingFrameIn?(j._resetElements(j.transitionPrefix,j.nextFrameChildren,"0s"),j.nextFrame.addClass("animate-out"),j.goTo(j.nextFrameID,-1,!0)):j.goTo(j.nextFrameID,1,!0):(j.currentFrameID=j.nextFrameID,j.settings.moveActiveFrameToTop&&j.nextFrame.css("z-index",j.numberOfFrames),j._resetElements(j.transitionPrefix,j.nextFrameChildren,"0s"),j.nextFrame.addClass("animate-in"),j.settings.hashTags&&j.settings.hashChangesOnFirstFrame&&(j.currentHashTag=j.nextFrame.prop(j.getHashTagFrom),document.location.hash="#"+j.currentHashTag),setTimeout(function(){j._resetElements(j.transitionPrefix,j.nextFrameChildren,"")},100),j._resetAutoPlay(!0,j.settings.autoPlayDelay)):(j.container.addClass("sequence-fallback"),j.currentFrameID=j.nextFrameID,j.settings.hashTags&&j.settings.hashChangesOnFirstFrame&&(j.currentHashTag=j.nextFrame.prop(j.getHashTagFrom),document.location.hash="#"+j.currentHashTag),j.frames.addClass("animate-in"),j.frames.not(":eq("+(j.nextFrameID-1)+")").css({display:"none",opacity:0}),j._resetAutoPlay(!0,j.settings.autoPlayDelay)),void 0!==j.nextButton&&j.nextButton.bind("click.sequence",function(){j.next()}),void 0!==j.prevButton&&j.prevButton.bind("click.sequence",function(){j.prev()}),void 0!==j.pauseButton&&j.pauseButton.bind("click.sequence",function(){j.pause(!0)}),j.settings.keyNavigation){var f={left:37,right:39};a(document).bind("keydown.sequence",function(a){var c=String.fromCharCode(a.keyCode);c>0&&c<=j.numberOfFrames&&j.settings.numericKeysGoToFrames&&(j.nextFrameID=c,j.goTo(j.nextFrameID)),b(a.keyCode,j.settings.keyEvents),b(a.keyCode,j.settings.customKeyEvents)})}if(j.canvas.on({"mouseenter.sequence":function(){j.settings.pauseOnHover&&j.settings.autoPlay&&!j.hasTouch&&(j.isBeingHoveredOver=!0,j.isHardPaused||j.pause())},"mouseleave.sequence":function(){j.settings.pauseOnHover&&j.settings.autoPlay&&!j.hasTouch&&(j.isBeingHoveredOver=!1,j.isHardPaused||j.unpause())}}),j.settings.hashTags&&a(window).bind("hashchange.sequence",function(){var b=location.hash.replace("#","");j.currentHashTag!==b&&(j.currentHashTag=b,j.frameHashIndex=a.inArray(j.currentHashTag,j.frameHashID),-1!==j.frameHashIndex&&(j.nextFrameID=j.frameHashIndex+1,j.goTo(j.nextFrameID)))}),j.settings.swipeNavigation&&j.hasTouch){var g,h,i=!1;j.canvas.on("touchstart.sequence",e)}}var j=this;j.container=a(b),j.canvas=j.container.children(".sequence-canvas"),j.frames=j.canvas.children("li"),j._modernizrForSequence();var k={WebkitTransition:"-webkit-",WebkitAnimation:"-webkit-",MozTransition:"-moz-","MozAnimation ":"-moz-",OTransition:"-o-",OAnimation:"-o-",msTransition:"-ms-",msAnimation:"-ms-",transition:"",animation:""},l={WebkitTransition:"webkitTransitionEnd.sequence",WebkitAnimation:"webkitAnimationEnd.sequence",MozTransition:"transitionend.sequence",MozAnimation:"animationend.sequence",OTransition:"otransitionend.sequence",OAnimation:"oanimationend.sequence",msTransition:"MSTransitionEnd.sequence",msAnimation:"MSAnimationEnd.sequence",transition:"transitionend.sequence",animation:"animationend.sequence"};j.transitionPrefix=k[ModernizrForSequence.prefixed("transition")],j.animationPrefix=k[ModernizrForSequence.prefixed("animation")],j.transitionProperties={},j.transitionEnd=l[ModernizrForSequence.prefixed("transition")]+" "+l[ModernizrForSequence.prefixed("animation")],j.numberOfFrames=j.frames.length,j.transitionsSupported=void 0!==j.transitionPrefix?!0:!1,j.hasTouch="ontouchstart"in window?!0:!1,j.isPaused=!1,j.isBeingHoveredOver=!1,j.container.removeClass("sequence-destroyed"),j.paused=function(){},j.unpaused=function(){},j.beforeNextFrameAnimatesIn=function(){},j.afterNextFrameAnimatesIn=function(){},j.beforeCurrentFrameAnimatesOut=function(){},j.afterCurrentFrameAnimatesOut=function(){},j.afterLoaded=function(){},j.destroyed=function(){},j.settings=a.extend({},e,d),j.settings.preloader=j._renderUiElements(j.settings.preloader,".sequence-preloader"),j.isStartingFrame=j.settings.animateStartingFrameIn?!0:!1,j.settings.unpauseDelay=null===j.settings.unpauseDelay?j.settings.autoPlayDelay:j.settings.unpauseDelay,j.getHashTagFrom=j.settings.hashDataAttribute?"data-sequence-hashtag":"id",j.frameHashID=[],j.direction=j.settings.autoPlayDirection,j.settings.hideFramesUntilPreloaded&&void 0!==j.settings.preloader&&j.settings.preloader!==!1&&j.frames.hide(),"-o-"===j.transitionPrefix&&(j.transitionsSupported=j._operaTest()),j.frames.removeClass("animate-in");var m=j.settings.preloadTheseFrames.length,n=j.settings.preloadTheseImages.length;if(j.settings.windowLoaded===!0&&(c=j.settings.windowLoaded),void 0===j.settings.preloader||j.settings.preloader===!1||0===m&&0===n)c===!0?(f(),a(this).unbind("load.sequence")):a(window).bind("load.sequence",function(){f(),a(this).unbind("load.sequence")});else{var o=g(m),p=g(n,!0),q=a(o.concat(p));h(q,f)}}var c=!1;a(window).bind("load",function(){c=!0}),b.prototype={startAutoPlay:function(a){var b=this;a=void 0===a?b.settings.autoPlayDelay:a,b.unpause(),b._resetAutoPlay(),b.autoPlayTimer=setTimeout(function(){1===b.settings.autoPlayDirection?b.next():b.prev()},a)},stopAutoPlay:function(){var a=this;a.pause(!0),clearTimeout(a.autoPlayTimer)},pause:function(a){var b=this;b.isSoftPaused?b.unpause():(void 0!==b.pauseButton&&(b.pauseButton.addClass("paused"),void 0!==b.pauseIcon&&b.pauseIcon.show()),b.paused(),b.isSoftPaused=!0,b.isHardPaused=a?!0:!1,b.isPaused=!0,b._resetAutoPlay())},unpause:function(a){var b=this;void 0!==b.pauseButton&&(b.pauseButton.removeClass("paused"),void 0!==b.pauseIcon&&b.pauseIcon.hide()),b.isSoftPaused=!1,b.isHardPaused=!1,b.isPaused=!1,b.active?b.delayUnpause=!0:(a!==!1&&b.unpaused(),b._resetAutoPlay(!0,b.settings.unpauseDelay))},next:function(){var a=this;id=a.currentFrameID!==a.numberOfFrames?a.currentFrameID+1:1,a.active===!1||void 0===a.active?a.goTo(id,1):a.goTo(id,1,!0)},prev:function(){var a=this;id=1===a.currentFrameID?a.numberOfFrames:a.currentFrameID-1,a.active===!1||void 0===a.active?a.goTo(id,-1):a.goTo(id,-1,!0)},goTo:function(b,c,d){function e(){f._setHashTag(),f.active=!1,f._resetAutoPlay(!0,f.settings.autoPlayDelay)}var f=this;f.nextFrameID=parseFloat(b);var g=d===!0?0:f.settings.transitionThreshold;if(f.nextFrameID===f.currentFrameID||f.settings.navigationSkip&&f.navigationSkipThresholdActive||!f.settings.navigationSkip&&f.active||!f.transitionsSupported&&f.active||!f.settings.cycle&&1===c&&f.currentFrameID===f.numberOfFrames||!f.settings.cycle&&-1===c&&1===f.currentFrameID||f.settings.preventReverseSkipping&&f.direction!==c&&f.active)return!1;if(f.settings.navigationSkip&&f.active&&(f.navigationSkipThresholdActive=!0,f.settings.fadeFrameWhenSkipped&&f.nextFrame.stop().animate({opacity:0},f.settings.fadeFrameTime),clearTimeout(f.transitionThresholdTimer),setTimeout(function(){f.navigationSkipThresholdActive=!1},f.settings.navigationSkipThreshold)),!f.active||f.settings.navigationSkip){if(f.active=!0,f._resetAutoPlay(),f.direction=void 0===c?f.nextFrameID>f.currentFrameID?1:-1:c,f.currentFrame=f.canvas.children(".animate-in"),f.nextFrame=f.frames.eq(f.nextFrameID-1),f.currentFrameChildren=f.currentFrame.children(),f.nextFrameChildren=f.nextFrame.children(),void 0!==f.pagination&&(f.paginationLinks.removeClass("current"),a(f.paginationLinks[f.nextFrameID-1]).addClass("current")),f.transitionsSupported)void 0!==f.currentFrame.length?(f.beforeCurrentFrameAnimatesOut(),f.settings.moveActiveFrameToTop&&f.currentFrame.css("z-index",1),f._resetElements(f.transitionPrefix,f.nextFrameChildren,"0s"),f.settings.reverseAnimationsWhenNavigatingBackwards&&1!==f.direction?f.settings.reverseAnimationsWhenNavigatingBackwards&&-1===f.direction&&(f.nextFrame.addClass("animate-out"),f._reverseTransitionProperties()):(f.nextFrame.removeClass("animate-out"),f._resetElements(f.transitionPrefix,f.currentFrameChildren,""))):f.isStartingFrame=!1,f.active=!0,f.currentFrame.unbind(f.transitionEnd),f.nextFrame.unbind(f.transitionEnd),f.settings.fadeFrameWhenSkipped&&f.settings.navigationSkip&&f.nextFrame.css("opacity",1),f.beforeNextFrameAnimatesIn(),f.settings.moveActiveFrameToTop&&f.nextFrame.css("z-index",f.numberOfFrames),f.settings.reverseAnimationsWhenNavigatingBackwards&&1!==f.direction?f.settings.reverseAnimationsWhenNavigatingBackwards&&-1===f.direction&&(setTimeout(function(){f._resetElements(f.transitionPrefix,f.currentFrameChildren,""),f._resetElements(f.transitionPrefix,f.nextFrameChildren,""),f._reverseTransitionProperties(),f._waitForAnimationsToComplete(f.nextFrame,f.nextFrameChildren,"in"),("function () {}"!==f.afterCurrentFrameAnimatesOut||f.settings.transitionThreshold===!0&&d!==!0)&&f._waitForAnimationsToComplete(f.currentFrame,f.currentFrameChildren,"out",!0,-1)},50),setTimeout(function(){f.settings.transitionThreshold===!1||0===f.settings.transitionThreshold||d===!0?(f.currentFrame.removeClass("animate-in"),f.nextFrame.toggleClass("animate-out animate-in")):(f.currentFrame.removeClass("animate-in"),f.settings.transitionThreshold!==!0&&(f.transitionThresholdTimer=setTimeout(function(){f.nextFrame.toggleClass("animate-out animate-in")},g)))},50)):(setTimeout(function(){f._resetElements(f.transitionPrefix,f.nextFrameChildren,""),f._waitForAnimationsToComplete(f.nextFrame,f.nextFrameChildren,"in"),("function () {}"!==f.afterCurrentFrameAnimatesOut||f.settings.transitionThreshold===!0&&d!==!0)&&f._waitForAnimationsToComplete(f.currentFrame,f.currentFrameChildren,"out",!0,1)},50),setTimeout(function(){f.settings.transitionThreshold===!1||0===f.settings.transitionThreshold||d===!0?(f.currentFrame.toggleClass("animate-out animate-in"),f.nextFrame.addClass("animate-in")):(f.currentFrame.toggleClass("animate-out animate-in"),f.settings.transitionThreshold!==!0&&(f.transitionThresholdTimer=setTimeout(function(){f.nextFrame.addClass("animate-in")},g)))},50));else switch(f.settings.fallback.theme){case"fade":f.frames.css({position:"relative"}),f.beforeCurrentFrameAnimatesOut(),f.currentFrame=f.frames.eq(f.currentFrameID-1),f.currentFrame.animate({opacity:0},f.settings.fallback.speed,function(){f.currentFrame.css({display:"none","z-index":"1"}),f.afterCurrentFrameAnimatesOut(),f.beforeNextFrameAnimatesIn(),f.nextFrame.css({display:"block","z-index":f.numberOfFrames}).animate({opacity:1},500,function(){f.afterNextFrameAnimatesIn()}),e()}),f.frames.css({position:"relative"});break;case"slide":default:var h={},i={},j={};1===f.direction?(h.left="-100%",i.left="100%"):(h.left="100%",i.left="-100%"),j.left="0",j.opacity=1,f.currentFrame=f.frames.eq(f.currentFrameID-1),f.beforeCurrentFrameAnimatesOut(),f.currentFrame.animate(h,f.settings.fallback.speed,function(){f.currentFrame.css({display:"none","z-index":"1"}),f.afterCurrentFrameAnimatesOut()}),f.beforeNextFrameAnimatesIn(),f.nextFrame.show().css(i),f.nextFrame.css({display:"block","z-index":f.numberOfFrames}).animate(j,f.settings.fallback.speed,function(){e(),f.afterNextFrameAnimatesIn()})}f.currentFrameID=f.nextFrameID}},destroy:function(b){var c=this;c.container.addClass("sequence-destroyed"),void 0!==c.nextButton&&c.nextButton.unbind("click.sequence"),void 0!==c.prevButton&&c.prevButton.unbind("click.sequence"),void 0!==c.pauseButton&&c.pauseButton.unbind("click.sequence"),void 0!==c.pagination&&c.paginationLinks.unbind("click.sequence"),a(document).unbind("keydown.sequence"),c.canvas.unbind("mouseenter.sequence, mouseleave.sequence, touchstart.sequence, touchmove.sequence"),a(window).unbind("hashchange.sequence"),c.stopAutoPlay(),clearTimeout(c.transitionThresholdTimer),c.canvas.children("li").remove(),c.canvas.prepend(c.frames),c.frames.removeClass("animate-in animate-out").removeAttr("style"),c.frames.eq(c.currentFrameID-1).addClass("animate-in"),void 0!==c.nextButton&&c.nextButton!==!1&&c.nextButton.hide(),void 0!==c.prevButton&&c.prevButton!==!1&&c.prevButton.hide(),void 0!==c.pauseButton&&c.pauseButton!==!1&&c.pauseButton.hide(),void 0!==c.pauseIcon&&c.pauseIcon!==!1&&c.pauseIcon.hide(),void 0!==c.pagination&&c.pagination!==!1&&c.pagination.hide(),void 0!==b&&b(),c.destroyed(),c.container.removeData()},_initCustomKeyEvent:function(a){var b=this;switch(a){case"next":b.next();break;case"prev":b.prev();break;case"pause":b.pause(!0)}},_resetElements:function(a,b,c){var d=this;b.css(d._prefixCSS(a,{"transition-duration":c,"transition-delay":c,"transition-timing-function":""}))},_reverseTransitionProperties:function(){var b=this,c=[],d=[];b.currentFrameChildren.each(function(){c.push(parseFloat(a(this).css(b.transitionPrefix+"transition-duration").replace("s",""))+parseFloat(a(this).css(b.transitionPrefix+"transition-delay").replace("s","")))}),b.nextFrameChildren.each(function(){d.push(parseFloat(a(this).css(b.transitionPrefix+"transition-duration").replace("s",""))+parseFloat(a(this).css(b.transitionPrefix+"transition-delay").replace("s","")))});var e=Math.max.apply(Math,c),f=Math.max.apply(Math,d),g=e-f,h=0,i=0;0>g&&!b.settings.preventDelayWhenReversingAnimations?h=Math.abs(g):g>0&&(i=Math.abs(g));var j=function(c,d,e,f){function g(a){a=a.split(",")[0];var b={linear:"cubic-bezier(0.0,0.0,1.0,1.0)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1.0)","ease-in":"cubic-bezier(0.42, 0.0, 1.0, 1.0)","ease-in-out":"cubic-bezier(0.42, 0.0, 0.58, 1.0)","ease-out":"cubic-bezier(0.0, 0.0, 0.58, 1.0)"};return a.indexOf("cubic-bezier")<0&&(a=b[a]),a}d.each(function(){var d=parseFloat(a(this).css(b.transitionPrefix+"transition-duration").replace("s","")),h=parseFloat(a(this).css(b.transitionPrefix+"transition-delay").replace("s","")),i=a(this).css(b.transitionPrefix+"transition-timing-function");if(-1===i.indexOf("cubic"))var i=g(i);if(b.settings.reverseEaseWhenNavigatingBackwards){var j=i.replace("cubic-bezier(","").replace(")","").split(",");a.each(j,function(a,b){j[a]=parseFloat(b)});var k=[1-j[2],1-j[3],1-j[0],1-j[1]];i="cubic-bezier("+k+")"}var l=d+h;c["transition-duration"]=d+"s",c["transition-delay"]=e-l+f+"s",c["transition-timing-function"]=i,a(this).css(b._prefixCSS(b.transitionPrefix,c))})};j(b.transitionProperties,b.currentFrameChildren,e,h),j(b.transitionProperties,b.nextFrameChildren,f,i)},_prefixCSS:function(a,b){var c={};for(var d in b)c[a+d]=b[d];return c},_resetAutoPlay:function(a,b){var c=this;a===!0?c.settings.autoPlay&&!c.isSoftPaused&&(clearTimeout(c.autoPlayTimer),c.autoPlayTimer=setTimeout(function(){1===c.settings.autoPlayDirection?c.next():c.prev()},b)):clearTimeout(c.autoPlayTimer)},_renderUiElements:function(b,c){var d=this;switch(b){case!1:return void 0;case!0:return".sequence-preloader"===c&&d._defaultPreloader(d.container,d.transitionsSupported,d.animationPrefix),a(c,d.container);default:return a(b,d.container)}},_waitForAnimationsToComplete:function(b,c,d,e,f){var g=this;if("out"===d)var h=function(){g.afterCurrentFrameAnimatesOut(),g.settings.transitionThreshold===!0&&(1===f?g.nextFrame.addClass("animate-in"):-1===f&&g.nextFrame.toggleClass("animate-out animate-in"))};else if("in"===d)var h=function(){g.afterNextFrameAnimatesIn(),g._setHashTag(),g.active=!1,g.isHardPaused||g.isBeingHoveredOver||(g.delayUnpause?(g.delayUnpause=!1,g.unpause()):g.unpause(!1))};c.data("animationEnded",!1),b.bind(g.transitionEnd,function(d){a(d.target).data("animationEnded",!0);var e=!0;c.each(function(){return a(this).data("animationEnded")===!1?(e=!1,!1):void 0}),e&&(b.unbind(g.transitionEnd),h())})},_setHashTag:function(){var b=this;b.settings.hashTags&&(b.currentHashTag=b.nextFrame.prop(b.getHashTagFrom),b.frameHashIndex=a.inArray(b.currentHashTag,b.frameHashID),-1===b.frameHashIndex||!b.settings.hashChangesOnFirstFrame&&b.isStartingFrame&&b.transitionsSupported?(b.nextFrameID=b.settings.startingFrameID,b.isStartingFrame=!1):(b.nextFrameID=b.frameHashIndex+1,document.location.hash="#"+b.currentHashTag))},_modernizrForSequence:function(){window.ModernizrForSequence=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+t.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+u.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.1",n={},o=b.documentElement,p="modernizrForSequence",q=b.createElement(p),r=q.style,s=({}.toString,"Webkit Moz O ms"),t=s.split(" "),u=s.toLowerCase().split(" "),v={svg:"http://www.w3.org/2000/svg"},w={},x=[],y=x.slice,z={}.hasOwnProperty;l=e(z,"undefined")||e(z.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return z.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=self;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(self instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.svg=function(){return!!b.createElementNS&&!!b.createElementNS(v.svg,"svg").createSVGRect};for(var A in w)l(w,A)&&(k=A.toLowerCase(),n[k]=w[A](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._domPrefixes=u,n._cssomPrefixes=t,n.testProp=function(a){return g([a])},n.testAllProps=i,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(self,self.document)},_defaultPreloader:function(b,c,d){var e='<div class="sequence-preloader"><svg class="preloading" xmlns="http://www.w3.org/2000/svg"><circle class="circle" cx="6" cy="6" r="6" /><circle class="circle" cx="22" cy="6" r="6" /><circle class="circle" cx="38" cy="6" r="6" /></svg></div>';a("head").append("<style>.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@"+d+"keyframes preload{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}}.sequence-preloader .preloading .circle{fill: #ff9442;display: inline-block;height: 12px;position: relative;top: -50%;width: 12px;"+d+"animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{display:block;height: 12px;margin: 0 auto;top: 50%;margin-top:-6px;position: relative;width: 48px;}.sequence-preloader .preloading .circle:nth-child(2){"+d+"animation-delay: .15s; animation-delay: .15s;}.sequence-preloader .preloading .circle:nth-child(3){"+d+"animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;"+d+"transition-duration: 1s; transition-duration: 1s;}div.inline{background-color: #ff9442; margin-right: 4px; float: left;}</style>"),b.prepend(e),ModernizrForSequence.svg||c?c||setInterval(function(){a(".sequence-preloader").fadeToggle(500)},500):(a(".sequence-preloader").prepend('<div class="preloading"><div class="circle inline"></div><div class="circle inline"></div><div class="circle inline"></div></div>'),setInterval(function(){a(".sequence-preloader .circle").fadeToggle(500)},500))},_operaTest:function(){a("body").append('<span id="sequence-opera-test"></span>');var b=a("#sequence-opera-test");return b.css("-o-transition","1s"),"1s"!==b.css("-o-transition")?(b.remove(),!1):(b.remove(),!0)}};var d={startingFrameID:1,cycle:!0,animateStartingFrameIn:!1,transitionThreshold:!1,reverseAnimationsWhenNavigatingBackwards:!0,reverseEaseWhenNavigatingBackwards:!0,preventDelayWhenReversingAnimations:!1,moveActiveFrameToTop:!0,windowLoaded:!1,autoPlay:!1,autoPlayDirection:1,autoPlayDelay:5e3,navigationSkip:!0,navigationSkipThreshold:250,fadeFrameWhenSkipped:!0,fadeFrameTime:150,preventReverseSkipping:!1,nextButton:!1,showNextButtonOnInit:!0,prevButton:!1,showPrevButtonOnInit:!0,pauseButton:!1,unpauseDelay:null,pauseOnHover:!0,pauseIcon:!1,showPauseButtonOnInit:!0,pagination:!1,showPaginationOnInit:!0,preloader:!1,preloadTheseFrames:[1],preloadTheseImages:[],hideFramesUntilPreloaded:!0,prependPreloadingComplete:!0,hidePreloaderUsingCSS:!0,hidePreloaderDelay:0,keyNavigation:!0,numericKeysGoToFrames:!0,keyEvents:{left:"prev",right:"next"},customKeyEvents:{},swipeNavigation:!0,swipeThreshold:20,swipePreventsDefault:!1,swipeEvents:{left:"prev",right:"next",up:!1,down:!1},hashTags:!1,hashDataAttribute:!1,hashChangesOnFirstFrame:!1,fallback:{theme:"slide",speed:500}};a.fn.sequence=function(c){return this.each(function(){a.data(this,"sequence")||a.data(this,"sequence",new b(a(this),c,d))})}}(jQuery);