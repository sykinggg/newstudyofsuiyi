(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * MUI JS config module
 * 配置模块
 *
 **/
module.exports = {
  debug: true,
  cssPrfx: 'mui-'
};

},{}],2:[function(require,module,exports){
'use strict';

var config = require('./config.js'),
    jqLite = require('./lib/jqLite.js'),
    wrapperClass = config.cssPrfx + 'dropdown',
    openClass = config.cssPrfx + 'open',
    menuClass = config.cssPrfx + 'dropdown-menu',
    disabledClass = config.cssPrfx + 'disabled';


function clickHandler(ev) {
  // only left clicks
  // 只留下点击
  if (ev.button !== 0) return;
  
  var toggleEl = ev.target,
      parentEl = toggleEl.parentNode;
  
  // exit if parent doesn't have wrapper class
  // 如果父容器没有包装类的退出
  if (!parentEl || !jqLite.hasClass(parentEl, wrapperClass)) return;
  
  // exit if toggle button is disabled
  // 退出，如果切换按钮是禁用
  if (toggleEl.getAttribute('disabled') !== null ||
      jqLite.hasClass(toggleEl, disabledClass)) {
    return;
  }

  toggleDropdown(parentEl, toggleEl);
}


function toggleDropdown(parentEl, toggleEl) {
  // exit if dropdown is already open
  // 如果下拉已经打开
  if (jqLite.hasClass(parentEl, openClass)) return;
  
  // get menu element
  // 获取菜单元素
  var childEl = parentEl.firstElementChild;
  while (childEl) {
    if (jqLite.hasClass(childEl, menuClass)) break;
    childEl = childEl.nextElementSibling;
  }

  // exit if no menu found
  // 退出，如果没有菜单找到
  if (!childEl) return;

  var menuEl = childEl,
      doc = parentEl.ownerDocument;
  
  // ignore clicks inside menu
  // 忽略内的菜单
  function ignoreClicksFn(ev) {
    ev.stopPropagation();
  }
  
  jqLite.on(menuEl, 'click', ignoreClicksFn);
  
  // close dropdown when user clicks outside of menu
  // 当用户点击关闭下拉菜单
  jqLite.on(doc, 'click', function closeDropdownFn(ev) {
    jqLite.removeClass(parentEl, openClass);

    // remove event handlers
    // 删除事件处理程序
    jqLite.off(doc, 'click', closeDropdownFn);
    jqLite.off(menuEl, 'click', ignoreClicksFn);
  });

  // position menu element below toggle button
  // 位置菜单元素下面切换按钮
  var parentRect = parentEl.getBoundingClientRect(),
      toggleRect = toggleEl.getBoundingClientRect();

  var top = toggleRect.top - parentRect.top + toggleRect.height;
  jqLite.css(menuEl, 'top', top + 'px');
  
  // add open class to wrapper
  // 给包装打开类
  jqLite.addClass(parentEl, openClass);
}

  
/**************************
 * Module API
 * 模块接口
 **************************/
module.exports = {
  initListeners: function() {
    // attach to global click event
    // 附加到全局的点击事件
    jqLite.on(document, 'click', clickHandler);
  }
};

},{"./config.js":1,"./lib/jqLite.js":5}],3:[function(require,module,exports){
(function(win) {
  'use strict';

  // return if library has been loaded already
  // 返回库加载
  if (win._muiLoadedJS) return;
  else win._muiLoadedJS = true;
  
  // load dependencies
  // 负载依赖
  var jqLite = require('./lib/jqLite.js'),
      forms = require('./forms.js'),
      ripple = require('./ripple.js'),
      dropdowns = require('./dropdowns.js'),
      overlay = require('./overlay.js');

  // expose api
  // 暴露api
  win.mui = {
    overlay: overlay
  };
  
  // init libraries
  // 初始化库
  jqLite.ready(function() {
    forms.initListeners();
    ripple.initListeners();
    dropdowns.initListeners();
  });
})(window);

},{"./dropdowns.js":2,"./forms.js":4,"./lib/jqLite.js":5,"./overlay.js":7,"./ripple.js":8}],4:[function(require,module,exports){
'use strict';

var config = require('./config.js'),
    jqLite = require('./lib/jqLite.js'),
    formControlClass = config.cssPrfx + 'form-control',
    formGroupClass = config.cssPrfx + 'form-group',
    floatingLabelBaseClass = config.cssPrfx + 'form-floating-label',
    floatingLabelActiveClass = floatingLabelBaseClass + '-active';


function processLabel(labelEl) {
  // check flag
  // 检查标识
  if (labelEl._muiFloatLabel === true) return;
  else labelEl._muiFloatLabel = true;
  
  var inputEl = labelEl.previousElementSibling;

  if (inputEl.value.length) jqLite.addClass(labelEl, floatingLabelActiveClass);

  // handle input events
  // 处理输入事件
  jqLite.on(inputEl, 'input', inputHandler);
  
  // add transition after timeout to avoid screen jitter
  // 加载过渡超时后，用以避免屏幕抖动
  setTimeout(function() {
    var s = '.15s ease-out';

    jqLite.css(labelEl, {
      '-webkit-transition': s,
      '-moz-transition': s,
      '-o-transition': s,
      'transition': s
    });
  }, 150);

  // pointer-events shim
  // 点击活动交互的底层样式
  if (supportsPointerEvents() === false) {
    jqLite.css(labelEl, 'cursor', 'text');
    jqLite.on(labelEl, 'click', function() {
      if (!jqLite.hasClass(labelEl, floatingLabelActiveClass)) inputEl.focus();
    });
  }
}


function inputHandler(ev) {
  var inputEl = ev.target,
      labelEl = inputEl.nextElementSibling;

  if (jqLite.hasClass(labelEl, floatingLabelBaseClass)) {
    if (inputEl.value.length === 0) {
      jqLite.removeClass(labelEl, floatingLabelActiveClass);
    } else {
      jqLite.addClass(labelEl, floatingLabelActiveClass);
    }
  }
}


function activateLabel(labelEl) {
  jqLite.addClass(labelEl, floatingLabelActiveClass);

  if (supportsPointerEvents() === false) {
    jqLite.css(labelEl, 'cursor', 'default');
  }
}


function deactivateLabel(labelEl, inputEl) {
  jqLite.removeClass(labelEl, floatingLabelActiveClass);

  if (supportsPointerEvents() === false) {
  }
}


/******************************
 * Utilities
 * 公共的事件
 ******************************/
var _supportsPointerEvents;

function supportsPointerEvents() {
  // check cache
  // 检查高速缓存
  if (_supportsPointerEvents !== undefined) return _supportsPointerEvents;
  
  var element = document.createElement('x');
  element.style.cssText = 'pointer-events:auto';
  _supportsPointerEvents = (element.style.pointerEvents === 'auto');
  return _supportsPointerEvents;
}


/******************************
 * Module API
 * 模块接口
 ******************************/
module.exports = {
  formControlClass: formControlClass,
  formGroupClass: formGroupClass,
  floatingLabelBaseClass: floatingLabelBaseClass,
  floatingLabelActiveClass: floatingLabelActiveClass,
  processLabel: processLabel,
  initListeners: function() {
    var doc = document;

    // markup elements available when method is called
    // 在调用方法时可用标记元素
    var elList = doc.getElementsByClassName(floatingLabelBaseClass);
    for (var i=0; i < elList.length; i++) processLabel(elList[i]);
    
    // listen for new elements
    // 坚挺新的元素
    function handlerFn(ev) {
      if (ev.animationName !== 'muiNodeInserted') return;
      processLabel(ev.target);
    }
    
    jqLite.on(doc, 'animationstart', handlerFn);
    jqLite.on(doc, 'mozAnimationStart', handlerFn);
    jqLite.on(doc, 'webkitAnimationStart', handlerFn);
  }
};

},{"./config.js":1,"./lib/jqLite.js":5}],5:[function(require,module,exports){
/**
 * MUI JS jqLite module
 * mui的jqLite模块
 *
 **/
'use strict';


// ----------------------
// addClass
// 添加类名
// ----------------------
function jqLiteAddClass(element, cssClasses) {
  if (!cssClasses || !element.setAttribute) return;

  var existingClasses = _getExistingClasses(element),
      splitClasses = cssClasses.split(' '),
      cssClass;

  for (var i=0; i < splitClasses.length; i++) {
    cssClass = splitClasses[i].trim();
    if (existingClasses.indexOf(' ' + cssClass + ' ') === -1) {
      existingClasses += cssClass + ' ';
    }
  }
  
  element.setAttribute('class', existingClasses.trim());
}


// ---------------------
// css
// 样式
// ---------------------
function jqLiteCss(element, name, value) {
  // --- Return full style object ---
  // --- 返回全样式对象 ---
  if (name === undefined) {
    return getComputedStyle(element);
  }

  var nameType = jqLiteType(name);

  // --- Set multiple values ---
  // --- 设置多个值 ---
  if (nameType === 'object') {
    for (var key in name) element.style[_camelCase(key)] = name[key];
    return;
  }

  // --- Set a single value ---
  // --- 设置一个值 ---
  if (nameType === 'string' && value !== undefined) {
    element.style[_camelCase(name)] = value;
  }

  var styleObj = getComputedStyle(element),
      isArray = (jqLiteType(name) === 'array');

  // --- Read single value ---
  // --- 读取单个值 ---
  if (!isArray) return _getCurrCssProp(element, name, styleObj);

  // --- Read multiple values ---
  // --- 读取多个值 ---
  var outObj = {},
      key;

  for (var i=0; i < name.length; i++) {
    key = name[i];
    outObj[key] = _getCurrCssProp(element, key, styleObj);
  }

  return outObj;
}


// ---------------------
// hasClass
// 添加样式
// ---------------------
function jqLiteHasClass(element, selector) {
  if (!selector || !element.getAttribute) return false;
  return (_getExistingClasses(element).indexOf(' ' + selector + ' ') > -1);
}


// ------------------------
// type
// 类型
// ------------------------
function jqLiteType(somevar) {
  // handle undefined
  // 处理未定义的样式
  if (somevar === undefined) return 'undefined';

  // handle others (of type [object <Type>])
  // 处理其他类型(对象类型)
  var typeStr = Object.prototype.toString.call(somevar);
  if (typeStr.indexOf('[object ') === 0) {
    return typeStr.slice(8, -1).toLowerCase();
  } else {
    throw "Could not understand type: " + typeStr;
  }    
}


// ------------------------
// on
// 绑定/启用
// ------------------------
function jqLiteOn(element, type, callback, useCapture) {
  useCapture = (useCapture === undefined) ? false : useCapture;

  // add to DOM
  // 添加dom元素
  element.addEventListener(type, callback, useCapture);

  // add to cache
  // 添加到缓存
  var cache = element._muiEventCache = element._muiEventCache || {};
  cache[type] = cache[type] || [];
  cache[type].push([callback, useCapture]);
}


// -----------------------
// off
// 解除绑定/关闭
// -----------------------
function jqLiteOff(element, type, callback, useCapture) {
  useCapture = (useCapture === undefined) ? false : useCapture;

  // remove from cache
  // 从缓存中删除
  var cache = element._muiEventCache = element._muiEventCache || {},
      argsList = cache[type] || [],
      args,
      i;

  i = argsList.length;
  while (i--) {
    args = argsList[i];

    // remove all events if callback is undefined
    // 如果回调是未定义的，删除所有事件
    if (callback === undefined ||
        (args[0] === callback && args[1] === useCapture)) {

      // remove from cache
      // 从缓存中删除
      argsList.splice(i, 1);
      
      // remove from DOM
      // 删除dom元素
      element.removeEventListener(type, args[0], args[1]);
    }
  }
}


// ---------------------
// one
// 单独事件
// ---------------------
function jqLiteOne(element, type, callback, useCapture) {
  // remove functions after event fires
  // 事件执行后的删除功能
  jqLiteOn(element, type, function onFn() {
    jqLiteOff(element, type, callback);
    jqLiteOff(element, type, onFn);
  });

  // add listener
  // 添加事件监听
  jqLiteOn(element, type, fn);
}


// -----------------------
// offset
// 样式偏移
// -----------------------
function jqLiteOffset(element) {
  var win = window,
      docEl = document.documentElement,
      rect = element.getBoundingClientRect(),
      viewLeft,
      viewTop;

  viewLeft = (win.pageXOffset || docEl.scrollLeft) - (docEl.clientLeft || 0);
  viewTop = (win.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);

  return {
    top: rect.top + viewTop,
    left: rect.left + viewLeft,
    height: rect.height,
    width: rect.width
  };
}


// -----------------------
// ready
// 事件准备
// -----------------------
function jqLiteReady(fn) {
  var done = false,
      top = true,
      doc = document,
      win = doc.defaultView,
      root = doc.documentElement,
      add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
      rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
      pre = doc.addEventListener ? '' : 'on';

  var init = function(e) {
    if (e.type == 'readystatechange' && doc.readyState != 'complete') {
      return;
    }

    (e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
    if (!done && (done = true)) fn.call(win, e.type || e);
  };

  var poll = function() {
    try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
    init('poll');
  };

  if (doc.readyState == 'complete') {
    fn.call(win, 'lazy');
  } else {
    if (doc.createEventObject && root.doScroll) {
      try { top = !win.frameElement; } catch(e) { }
      if (top) poll();
    }
    doc[add](pre + 'DOMContentLoaded', init, false);
    doc[add](pre + 'readystatechange', init, false);
    win[add](pre + 'load', init, false);
  }
}


// ---------------------
// removeClass
// 删除绑定的样式类名
// ---------------------
function jqLiteRemoveClass(element, cssClasses) {
  if (!cssClasses || !element.setAttribute) return;

  var existingClasses = _getExistingClasses(element),
      splitClasses = cssClasses.split(' '),
      cssClass;
  
  for (var i=0; i < splitClasses.length; i++) {
    cssClass = splitClasses[i].trim();
    while (existingClasses.indexOf(' ' + cssClass + ' ') >= 0) {
      existingClasses = existingClasses.replace(' ' + cssClass + ' ', ' ');
    }
  }

  element.setAttribute('class', existingClasses.trim());
}


/**************************
 * Utilities
 * 公共事件
 **************************/
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g,
    MOZ_HACK_REGEXP = /^moz([A-Z])/,
    ESCAPE_REGEXP = /([.*+?^=!:${}()|\[\]\/\\])/g,
    BOOLEAN_ATTRS;


BOOLEAN_ATTRS = {
  multiple: true,
  selected: true,
  checked: true,
  disabled: true,
  readonly: true,
  required: true,
  open: true
}


function _getExistingClasses(element) {
  var classes = (element.getAttribute('class') || '').replace(/[\n\t]/g, '');
  return ' ' + classes + ' ';
}


function _camelCase(name) {
  return name.
    replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    }).
    replace(MOZ_HACK_REGEXP, 'Moz$1');
}


function _escapeRegExp(string) {
  return string.replace(ESCAPE_REGEXP, "\\$1");
}


function _getCurrCssProp(elem, name, computed) {
  var ret;

  // try computed style
  // 计算样式
  ret = computed.getPropertyValue(name);

  // try style attribute (if element is not attached to document)
  // 样式属性连接(如果元素没有连接到文档)
  if (ret === '' && !elem.ownerDocument) ret = elem.style[_camelCase(name)];

  return ret;
}


/**************************
 * Module API
 * 模块接口
 **************************/
module.exports = {
  addClass: jqLiteAddClass,
  css: jqLiteCss,
  hasClass: jqLiteHasClass,
  off: jqLiteOff,
  offset: jqLiteOffset,
  on: jqLiteOn,
  one: jqLiteOne,
  ready: jqLiteReady,
  removeClass: jqLiteRemoveClass,
  type: jqLiteType
};

},{}],6:[function(require,module,exports){
/**
 * MUI JS lib module
 * mui js库模块
 *
 **/
'use strict';

var config = require('../config.js');


// --------------------------
// Shared variables
// 共享变量
// --------------------------
var win = window,
    doc = window.document;

var head = doc.head
  || doc.getElementsByTagName('head')[0] 
  || doc.documentElement;


// -------------------------
// log
// 日志事件
// -------------------------
function logFn() {
  if (config.debug && typeof win.console !== "undefined") {
    try {
      win.console.log.apply(win.console, arguments);
    } catch (a) {
      var e = Array.prototype.slice.call(arguments);
      win.console.log(e.join("\n"));
    }
  }
}


// -------------------------
// loadStyle
// 载入样式事件
// -------------------------
function loadStyleFn(s) {
  if (doc.createStyleSheet) {
    doc.createStyleSheet().cssText = s;
  } else {
    var e = doc.createElement('style');
    e.type = 'text/css';
    
    if (e.styleSheet) e.styleSheet.cssText = s;
    else e.appendChild(doc.createTextNode(s));
    
    // add to document
    // 添加到文档
    head.insertBefore(e, head.firstChild);
  }
}


// -------------------------
// Raise
// 提高事件
// -------------------------
function raiseErrorFn(msg) {
  throw "MUI Error: " + msg;
}


// -------------------------
// Module API
// 模块接口
// -------------------------
module.exports = {
  log: logFn,
  loadStyle: loadStyleFn,
  raiseError: raiseErrorFn
};

},{"../config.js":1}],7:[function(require,module,exports){
'use strict';

var config = require('./config.js'),
    util = require('./lib/util.js'),
    jqLite = require('./lib/jqLite.js'),
    bodyClass = config.cssPrfx + 'overlay-on',
    overlayId = config.cssPrfx + 'overlay';


function overlayFn(arg) {
  var bodyEl = document.body,
      overlayEl = document.getElementById(overlayId);
  
  if (arg === 'on') {
    // add overlay
    // 添加覆盖
    jqLite.addClass(bodyEl, bodyClass);

    if (!overlayEl) {
      overlayEl = document.createElement('div');
      overlayEl.setAttribute('id', overlayId);
      bodyEl.appendChild(overlayEl);
    }

  } else if (arg === 'off') {
    // remove overlay
    // 移除覆盖
    if (overlayEl) overlayEl.parentNode.removeChild(overlayEl);
    jqLite.removeClass(bodyEl, bodyClass);

  } else {
    // raise error
    // 检查误差
    util.raiseError("Expecting 'on' or 'off'");
  }

  return overlayEl;
}


/**************************
 * Module API
 * 模块接口
 **************************/
module.exports = overlayFn;

},{"./config.js":1,"./lib/jqLite.js":5,"./lib/util.js":6}],8:[function(require,module,exports){
// 
// Based on Craigtut solution from Codepen (http://codepen.io/Craigtut/)
// Craigtut solution基于Codepen 事件
//
'use strict';

var config = require('./config.js'),
    jqLite = require('./lib/jqLite.js'),
    btnClass = config.cssPrfx + 'btn',
    btnFlatClass = config.cssPrfx + 'btn-flat',
    btnFloatingClass = config.cssPrfx + 'btn-floating',
    rippleClass = config.cssPrfx + 'ripple-effect';


function mousedownHandler(ev) {
  // only left clicks
  // 只留下点击事件
  if (ev.button !== 0) return;

  var buttonEl = ev.target;

  // exit if element doesn't have button class
  // 退出。如果元素没有按钮样式
  if (!jqLite.hasClass(buttonEl, btnClass)) return;

  // exit if element is INPUT (doesn't support absolute positioned children)
  // 如果元素是输入元素(不支持子元素的绝对定位)
  if (buttonEl.tagName === 'INPUT') return;

  // exit if button is disabled
  // 退出按钮被禁用事件
  if (buttonEl.disabled === true) return;
  
  var rippleEl = document.createElement('div');
  rippleEl.className = rippleClass;

  var offset = jqLite.offset(buttonEl),
      xPos = ev.pageX - offset.left,
      yPos = ev.pageY - offset.top,
      diameter,
      radius;

  // get height
  // 获取元素高度
  if (jqLite.hasClass(buttonEl, btnFloatingClass)) {
    diameter = offset.height / 2;
  } else {
    diameter = offset.height;
  }

  radius = diameter / 2;
  
  jqLite.css(rippleEl, {
    height: diameter + 'px',
    width: diameter + 'px',
    top: yPos - radius + 'px',
    left: xPos - radius + 'px'
  });

  buttonEl.appendChild(rippleEl);
  
  window.setTimeout(function() {
    buttonEl.removeChild(rippleEl);
  }, 2000);
}


/**********************************
 * Module API
 * 模块接口
 **********************************/
module.exports = {
  initListeners: function() {
    jqLite.on(document, 'mousedown', mousedownHandler);
  }
};

},{"./config.js":1,"./lib/jqLite.js":5}]},{},[3])