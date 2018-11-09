(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  src: url('Champagne-Limousines-Bold.eot?#iefix') format('embedded-opentype'), url('Champagne-Limousines-Bold.woff') format('woff'), url('Champagne-Limousines-Bold.ttf') format('truetype'), url('Champagne-Limousines-Bold.svg#Champagne&Limousines-Bold') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Blacksword';\r\n  src: url('Blacksword.eot?#iefix') format('embedded-opentype'), url('Blacksword.eot') format('opentype'),\r\n  url('Blacksword.woff') format('woff'), url('Blacksword.ttf') format('truetype'), url('Blacksword.svg#Blacksword') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.content {\r\n  max-width: 1100px;\r\n  margin: auto;\r\n  display: block;\r\n  width: 95%;\r\n}\r\n\r\n.centrado-vertical {\r\n  display: contents;\r\n  clear: both;\r\n}\r\n\r\nsection {\r\n\r\n}\r\n\r\n.titulo-corrido {\r\n  font-family: 'Blacksword';\r\n  margin: auto;\r\n  display: block;\r\n  width: 800px;\r\n  text-align: center;\r\n  font-size: 65px;\r\n  color: #cc0099;\r\n  line-height: 1;\r\n  font-weight: lighter;\r\n}\r\n\r\n.titulo-normal {\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  margin: auto;\r\n  display: block;\r\n  width: 800px;\r\n  text-align: center;\r\n  font-size: 82px;\r\n  line-height: 38px;\r\n  font-weight: lighter;\r\n}\r\n\r\n.titulo-normal-2 {\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  margin: auto;\r\n  display: block;\r\n  width: 800px;\r\n  text-align: center;\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n  color: white;\r\n  padding: 16px 0px 16px 0px;\r\n}\r\n\r\n.boton_reserva {\r\n  font-family: 'Champagne-Limousines-Bold';\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  background-color: #cc0099;\r\n  color: white;\r\n  border-bottom: 1px;\r\n  padding: 13px;\r\n  margin: 30px auto;\r\n  width: 200px;\r\n}\r\n\r\n@media only screen and (max-width: 1020px) {\r\n  .content {\r\n    display: block;\r\n    margin: auto;\r\n  }\r\n\r\n  .team h2 {\r\n    color: white;\r\n  }\r\n\r\n  .direccion {\r\n    padding: 0 10px;\r\n  }\r\n\r\n  .direccion img {\r\n    margin: 0 5px;\r\n  }\r\n\r\n  .direccion p {\r\n    width: 115px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .con-foot {\r\n    padding-top: 5px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 812px) {\r\n\r\n  .titulo-corrido {\r\n    font-size: 45px;\r\n    width: 100%;\r\n  }\r\n\r\n  .titulo-normal {\r\n\r\n    font-size: 60px;\r\n    width: 100%;\r\n  }\r\n\r\n  .titulo-normal-2 {\r\n    font-size: 40px;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* Slider */\r\n\r\n.slick-slider {\r\n  position: relative;\r\n\r\n  display: block;\r\n  box-sizing: border-box;\r\n\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n\r\n  -webkit-touch-callout: none;\r\n  -khtml-user-select: none;\r\n  touch-action: pan-y;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.slick-list {\r\n  position: relative;\r\n\r\n  display: block;\r\n  overflow: hidden;\r\n\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.slick-list:focus {\r\n  outline: none;\r\n}\r\n\r\n.slick-list.dragging {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\n.slick-slider .slick-track,\r\n.slick-slider .slick-list {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.slick-track {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.slick-track:before,\r\n.slick-track:after {\r\n  display: table;\r\n\r\n  content: '';\r\n}\r\n\r\n.slick-track:after {\r\n  clear: both;\r\n}\r\n\r\n.slick-loading .slick-track {\r\n  visibility: hidden;\r\n}\r\n\r\n.slick-slide {\r\n  display: none;\r\n  float: left;\r\n\r\n  height: 100%;\r\n  min-height: 1px;\r\n}\r\n\r\n[dir='rtl'] .slick-slide {\r\n  float: right;\r\n}\r\n\r\n.slick-slide img {\r\n  display: block;\r\n}\r\n\r\n.slick-slide.slick-loading img {\r\n  display: none;\r\n}\r\n\r\n.slick-slide.dragging img {\r\n  pointer-events: none;\r\n}\r\n\r\n.slick-initialized .slick-slide {\r\n  display: block;\r\n}\r\n\r\n.slick-loading .slick-slide {\r\n  visibility: hidden;\r\n}\r\n\r\n.slick-vertical .slick-slide {\r\n  display: block;\r\n\r\n  height: auto;\r\n\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.slick-arrow.slick-hidden {\r\n  display: none;\r\n}\r\n\r\n/* Icons */\r\n\r\n@font-face {\r\n  font-family: 'slick';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n/* Arrows */\r\n\r\n.slick-prev,\r\n.slick-next {\r\n  font-size: 0;\r\n  line-height: 0;\r\n\r\n  position: absolute;\r\n  top: 50%;\r\n\r\n  display: block;\r\n\r\n  width: 20px;\r\n  height: 20px;\r\n  padding: 0;\r\n  -webkit-transform: translate(0, -50%);\r\n  transform: translate(0, -50%);\r\n\r\n  cursor: pointer;\r\n\r\n  color: transparent;\r\n  border: none;\r\n  outline: none;\r\n  background: transparent;\r\n}\r\n\r\n.slick-prev:hover,\r\n.slick-prev:focus,\r\n.slick-next:hover,\r\n.slick-next:focus {\r\n  color: transparent;\r\n  outline: none;\r\n  background: transparent;\r\n}\r\n\r\n.slick-prev:hover:before,\r\n.slick-prev:focus:before,\r\n.slick-next:hover:before,\r\n.slick-next:focus:before {\r\n  opacity: 1;\r\n}\r\n\r\n.slick-prev.slick-disabled:before,\r\n.slick-next.slick-disabled:before {\r\n  opacity: .25;\r\n}\r\n\r\n.slick-prev:before,\r\n.slick-next:before {\r\n  font-family: 'slick';\r\n  font-size: 20px;\r\n  line-height: 1;\r\n\r\n  opacity: .75;\r\n  color: white;\r\n\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.slick-prev {\r\n  left: -25px;\r\n}\r\n\r\n[dir='rtl'] .slick-prev {\r\n  right: -25px;\r\n  left: auto;\r\n}\r\n\r\n.slick-prev:before {\r\n  content: '←';\r\n}\r\n\r\n[dir='rtl'] .slick-prev:before {\r\n  content: '→';\r\n}\r\n\r\n.slick-next {\r\n  right: -25px;\r\n}\r\n\r\n[dir='rtl'] .slick-next {\r\n  right: auto;\r\n  left: -25px;\r\n}\r\n\r\n.slick-next:before {\r\n  content: '→';\r\n}\r\n\r\n[dir='rtl'] .slick-next:before {\r\n  content: '←';\r\n}\r\n\r\n/* Dots */\r\n\r\n.slick-dotted.slick-slider {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.slick-dots {\r\n  position: absolute;\r\n  bottom: 0;\r\n\r\n  display: block;\r\n\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n\r\n  list-style: none;\r\n\r\n  text-align: center;\r\n}\r\n\r\n.slick-dots li {\r\n  position: relative;\r\n\r\n  display: inline-block;\r\n\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 5px;\r\n  padding: 0;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n.slick-dots li button {\r\n  font-size: 0;\r\n  line-height: 0;\r\n\r\n  display: block;\r\n\r\n  width: 30px;\r\n  height: 30px;\r\n  padding: 5px;\r\n\r\n  cursor: pointer;\r\n\r\n  color: white;\r\n  border: 0;\r\n  outline: none;\r\n  background: transparent;\r\n}\r\n\r\n.slick-dots li button:hover,\r\n.slick-dots li button:focus {\r\n  outline: none;\r\n}\r\n\r\n.slick-dots li button:hover:before,\r\n.slick-dots li button:focus:before {\r\n  opacity: 1;\r\n}\r\n\r\n.slick-dots li button:before {\r\n  font-family: 'slick';\r\n  font-size: 50px;\r\n  line-height: 20px;\r\n\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n  content: '•';\r\n  text-align: center;\r\n\r\n  opacity: .25;\r\n  color: white;\r\n\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.slick-dots li.slick-active button:before {\r\n  opacity: .75;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Proyectoss\versatti\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map