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
  var protoOf = kotlin_kotlin.$_$.ud;
  var objectMeta = kotlin_kotlin.$_$.td;
  var setMetadataFor = kotlin_kotlin.$_$.vd;
  var THROW_CCE = kotlin_kotlin.$_$.qh;
  var Annotation = kotlin_kotlin.$_$.yg;
  var classMeta = kotlin_kotlin.$_$.hc;
  var VOID = kotlin_kotlin.$_$.e;
  var interfaceMeta = kotlin_kotlin.$_$.wc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AppyxLoggingLevel, 'AppyxLoggingLevel', objectMeta);
  setMetadataFor(AppyxLogger, 'AppyxLogger', objectMeta);
  setMetadataFor(BuildFlags, 'BuildFlags', objectMeta);
  setMetadataFor(RawValue, 'RawValue', classMeta, VOID, [Annotation]);
  setMetadataFor(Parcelable, 'Parcelable', interfaceMeta);
  setMetadataFor(Parcelize, 'Parcelize', classMeta, VOID, [Annotation]);
  //endregion
  function AppyxLoggingLevel() {
    AppyxLoggingLevel_instance = this;
    this.VERBOSE_1 = 1;
    this.DEBUG_1 = 2;
    this.INFO_1 = 3;
    this.WARN_1 = 4;
    this.ERROR_1 = 5;
    this.DISABLED_1 = 6;
  }
  protoOf(AppyxLoggingLevel).get_VERBOSE_iy29a1_k$ = function () {
    return this.VERBOSE_1;
  };
  protoOf(AppyxLoggingLevel).get_DEBUG_i80x6y_k$ = function () {
    return this.DEBUG_1;
  };
  protoOf(AppyxLoggingLevel).get_INFO_wo2x2v_k$ = function () {
    return this.INFO_1;
  };
  protoOf(AppyxLoggingLevel).get_WARN_wobljj_k$ = function () {
    return this.WARN_1;
  };
  protoOf(AppyxLoggingLevel).get_ERROR_i8tccf_k$ = function () {
    return this.ERROR_1;
  };
  protoOf(AppyxLoggingLevel).get_DISABLED_edo4or_k$ = function () {
    return this.DISABLED_1;
  };
  var AppyxLoggingLevel_instance;
  function AppyxLoggingLevel_getInstance() {
    if (AppyxLoggingLevel_instance == null)
      new AppyxLoggingLevel();
    return AppyxLoggingLevel_instance;
  }
  function AppyxLogger() {
    AppyxLogger_instance = this;
    this.loggingLevel_1 = AppyxLoggingLevel_getInstance().get_DISABLED_edo4or_k$();
  }
  protoOf(AppyxLogger).set_loggingLevel_6o2tp6_k$ = function (_set____db54di) {
    this.loggingLevel_1 = _set____db54di;
  };
  protoOf(AppyxLogger).get_loggingLevel_ajrgb6_k$ = function () {
    return this.loggingLevel_1;
  };
  protoOf(AppyxLogger).v_aecy5i_k$ = function (tag, message) {
    if (this.loggingLevel_1 <= AppyxLoggingLevel_getInstance().get_VERBOSE_iy29a1_k$()) {
      console.log(tag + ': ' + message);
    }
  };
  protoOf(AppyxLogger).d_86dvmc_k$ = function (tag, message) {
    if (this.loggingLevel_1 <= AppyxLoggingLevel_getInstance().get_DEBUG_i80x6y_k$()) {
      console.log(tag + ': ' + message);
    }
  };
  protoOf(AppyxLogger).i_31l207_k$ = function (tag, message) {
    if (this.loggingLevel_1 <= AppyxLoggingLevel_getInstance().get_INFO_wo2x2v_k$()) {
      console.log(tag + ': ' + message);
    }
  };
  protoOf(AppyxLogger).w_mczkmf_k$ = function (tag, message) {
    if (this.loggingLevel_1 <= AppyxLoggingLevel_getInstance().get_WARN_wobljj_k$()) {
      console.log(tag + ': ' + message);
    }
  };
  protoOf(AppyxLogger).e_k50i39_k$ = function (tag, message) {
    if (this.loggingLevel_1 <= AppyxLoggingLevel_getInstance().get_ERROR_i8tccf_k$()) {
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
    BuildFlags_instance = this;
    this.DEBUG_1 = false;
  }
  protoOf(BuildFlags).get_DEBUG_i80x6y_k$ = function () {
    return this.DEBUG_1;
  };
  var BuildFlags_instance;
  function BuildFlags_getInstance() {
    if (BuildFlags_instance == null)
      new BuildFlags();
    return BuildFlags_instance;
  }
  function RawValue() {
  }
  protoOf(RawValue).equals = function (other) {
    if (!(other instanceof RawValue))
      return false;
    other instanceof RawValue || THROW_CCE();
    return true;
  };
  protoOf(RawValue).hashCode = function () {
    return 0;
  };
  protoOf(RawValue).toString = function () {
    return '@com.bumble.appyx.utils.multiplatform.RawValue()';
  };
  function Parcelable() {
  }
  function Parcelize() {
  }
  protoOf(Parcelize).equals = function (other) {
    if (!(other instanceof Parcelize))
      return false;
    other instanceof Parcelize || THROW_CCE();
    return true;
  };
  protoOf(Parcelize).hashCode = function () {
    return 0;
  };
  protoOf(Parcelize).toString = function () {
    return '@com.bumble.appyx.utils.multiplatform.Parcelize()';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Parcelable;
  _.$_$.b = AppyxLogger_getInstance;
  _.$_$.c = BuildFlags_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=appyx-utils-multiplatform.js.map
