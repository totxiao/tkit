(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.totkit = factory());
}(this, (function () { 'use strict';

	const dataV = {
	    sum:(x,y) => x + y,
	};

	const dataP = {
	    add:(x,y) => x + y,
	};

	const totkit = {
	    VERSION:1,
	    dataV,dataP
	};

	return totkit;

})));
