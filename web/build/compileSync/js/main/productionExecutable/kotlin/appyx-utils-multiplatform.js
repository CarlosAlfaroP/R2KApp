(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-multiplatform'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'appyx-utils-multiplatform'.");
    }
    root['appyx-utils-multiplatform'] = factory(typeof this['appyx-utils-multiplatform'] === 'undefined' ? {} : this['appyx-utils-multiplatform'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.r9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AppyxLoggingLevel, 'AppyxLoggingLevel', objectMeta);
  setMetadataFor(AppyxLogger, 'AppyxLogger', objectMeta);
  setMetadataFor(BuildFlags, 'BuildFlags', objectMeta);
  setMetadataFor(Parcelable, 'Parcelable', interfaceMeta);
  //endregion
  function AppyxLoggingLevel() {
    this.vd2_1 = 1;
    this.wd2_1 = 2;
    this.xd2_1 = 3;
    this.yd2_1 = 4;
    this.zd2_1 = 5;
    this.ad3_1 = 6;
  }
  var AppyxLoggingLevel_instance;
  function AppyxLoggingLevel_getInstance() {
    return AppyxLoggingLevel_instance;
  }
  function AppyxLogger() {
    AppyxLogger_instance = this;
    var tmp = this;
    tmp.bd3_1 = 6;
  }
  protoOf(AppyxLogger).cd3 = function (tag, message) {
    var tmp = this.bd3_1;
    if (tmp <= 1) {
      console.log(tag + ': ' + message);
    }
  };
  protoOf(AppyxLogger).dd3 = function (tag, message) {
    var tmp = this.bd3_1;
    if (tmp <= 2) {
      console.log(tag + ': ' + message);
    }
  };
  var AppyxLogger_instance;
  function AppyxLogger_getInstance() {
    if (AppyxLogger_instance == null)
      new AppyxLogger();
    return AppyxLogger_instance;
  }
  function BuildFlags() {
    this.ed3_1 = false;
  }
  var BuildFlags_instance;
  function BuildFlags_getInstance() {
    return BuildFlags_instance;
  }
  function Parcelable() {
  }
  //region block: init
  AppyxLoggingLevel_instance = new AppyxLoggingLevel();
  BuildFlags_instance = new BuildFlags();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Parcelable;
  _.$_$.b = AppyxLogger_getInstance;
  _.$_$.c = BuildFlags_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=appyx-utils-multiplatform.js.map
