(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-util'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-ui-util'.");
    }
    root['compose-multiplatform-core-ui-util'] = factory(typeof this['compose-multiplatform-core-ui-util'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-util'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var roundToInt = kotlin_kotlin.$_$.ba;
  //endregion
  //region block: pre-declaration
  //endregion
  function lerp(start, stop, fraction) {
    return start + roundToInt((stop - start | 0) * fraction) | 0;
  }
  function lerp_0(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = lerp_0;
  _.$_$.b = lerp;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-util.js.map
