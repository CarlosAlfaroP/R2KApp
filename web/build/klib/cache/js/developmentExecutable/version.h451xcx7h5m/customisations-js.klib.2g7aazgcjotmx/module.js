(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-customisation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'appyx-utils-customisation'.");
    }
    root['appyx-utils-customisation'] = factory(typeof this['appyx-utils-customisation'] === 'undefined' ? {} : this['appyx-utils-customisation'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.jd;
  var interfaceMeta = kotlin_kotlin.$_$.lc;
  var VOID = kotlin_kotlin.$_$.li;
  var setMetadataFor = kotlin_kotlin.$_$.kd;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var classMeta = kotlin_kotlin.$_$.xb;
  //endregion
  //region block: pre-declaration
  function getRecursivelyOrDefault(default_0) {
    var tmp1_elvis_lhs = this.get_5xtif6_k$(getKClassFromExpression(default_0));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = this.get_parent_hy4reb_k$();
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_5xtif6_k$(getKClassFromExpression(default_0));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? default_0 : tmp2_elvis_lhs;
  }
  setMetadataFor(NodeCustomisationDirectory, 'NodeCustomisationDirectory', interfaceMeta);
  setMetadataFor(MutableNodeCustomisationDirectory, 'MutableNodeCustomisationDirectory', interfaceMeta, VOID, [NodeCustomisationDirectory]);
  setMetadataFor(NodeCustomisation, 'NodeCustomisation', interfaceMeta);
  setMetadataFor(NodeCustomisationDirectoryImpl, 'NodeCustomisationDirectoryImpl', classMeta, VOID, [MutableNodeCustomisationDirectory]);
  //endregion
  function MutableNodeCustomisationDirectory() {
  }
  function NodeCustomisation() {
  }
  function NodeCustomisationDirectory() {
  }
  function NodeCustomisationDirectoryImpl(parent) {
    parent = parent === VOID ? null : parent;
    this.parent_1 = parent;
  }
  protoOf(NodeCustomisationDirectoryImpl).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(NodeCustomisationDirectoryImpl).put_68m61y_k$ = function (key, valueProvider) {
  };
  protoOf(NodeCustomisationDirectoryImpl).get_5xtif6_k$ = function (key) {
    return null;
  };
  protoOf(NodeCustomisationDirectoryImpl).getRecursively_5tpyid_k$ = function (key) {
    return null;
  };
  protoOf(NodeCustomisationDirectoryImpl).putSubDirectory_fktsdf_k$ = function (key, valueProvider) {
  };
  protoOf(NodeCustomisationDirectoryImpl).getSubDirectory_7zcjo8_k$ = function (key) {
    return null;
  };
  protoOf(NodeCustomisationDirectoryImpl).getSubDirectoryOrSelf_vtw4p5_k$ = function (key) {
    return this;
  };
  protoOf(NodeCustomisationDirectoryImpl).invoke_t4gx9i_k$ = function (_this__u8e3s4, block) {
  };
  //region block: post-declaration
  protoOf(NodeCustomisationDirectoryImpl).getRecursivelyOrDefault_1mcspa_k$ = getRecursivelyOrDefault;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NodeCustomisationDirectoryImpl;
  //endregion
  return _;
}));
