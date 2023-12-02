(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-customisation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'appyx-utils-customisation'.");
    }
    root['appyx-utils-customisation'] = factory(typeof this['appyx-utils-customisation'] === 'undefined' ? {} : this['appyx-utils-customisation'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.d;
  var protoOf = kotlin_kotlin.$_$.r9;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(NodeCustomisationDirectoryImpl, 'NodeCustomisationDirectoryImpl', classMeta, VOID, VOID, NodeCustomisationDirectoryImpl);
  //endregion
  function NodeCustomisationDirectoryImpl(parent) {
    parent = parent === VOID ? null : parent;
    this.kev_1 = parent;
  }
  protoOf(NodeCustomisationDirectoryImpl).lev = function (key) {
    return this;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NodeCustomisationDirectoryImpl;
  //endregion
  return _;
}));

//# sourceMappingURL=appyx-utils-customisation.js.map
