(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-runtime-saveable'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime-saveable'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-runtime-saveable'.");
    }
    root['compose-multiplatform-core-runtime-saveable'] = factory(typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined' ? {} : this['compose-multiplatform-core-runtime-saveable'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var charSequenceLength = kotlin_kotlin.$_$.n8;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var toString_0 = kotlin_kotlin.$_$.cc;
  var isInterface = kotlin_kotlin.$_$.h9;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var toString_1 = kotlin_kotlin.$_$.be;
  var referentialEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var neverEqualPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var SnapshotMutableState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var protoOf = kotlin_kotlin.$_$.r9;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var VOID = kotlin_kotlin.$_$.d;
  var SnapshotMutationPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var MutableState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var toMutableMap = kotlin_kotlin.$_$.f7;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var Map = kotlin_kotlin.$_$.s3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var get_reuseKey = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var isBlank = kotlin_kotlin.$_$.nb;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.j;
  var arrayListOf = kotlin_kotlin.$_$.a4;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(sam$androidx_compose_runtime_saveable_SaverScope$0, 'sam$androidx_compose_runtime_saveable_SaverScope$0', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(RegistryHolder, 'RegistryHolder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(SaveableStateHolderImpl, 'SaveableStateHolderImpl', classMeta, VOID, VOID, SaveableStateHolderImpl);
  setMetadataFor(SaveableStateRegistryImpl$registerProvider$3, VOID, classMeta);
  setMetadataFor(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl', classMeta);
  setMetadataFor(Saver, 'Saver', interfaceMeta);
  setMetadataFor(Saver$1, VOID, classMeta, VOID, [Saver]);
  //endregion
  function listSaver(save, restore) {
    var tmp = listSaver$lambda(save);
    return Saver_0(tmp, typeof restore === 'function' ? restore : THROW_CCE());
  }
  function listSaver$lambda($save) {
    return function ($this$Saver, it) {
      var list = $save($this$Saver, it);
      var inductionVariable = 0;
      var last = list.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.i1(index);
          if (!(item == null)) {
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'kotlin.require' call
            // Inline function 'kotlin.contracts.contract' call
            if (!$this$Saver.c4n(item)) {
              // Inline function 'kotlin.require.<anonymous>' call
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!list.e1()) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        tmp_0 = null;
      }
      return tmp_0;
    };
  }
  function mapSaver(save, restore) {
    var tmp = mapSaver$lambda(save);
    return listSaver(tmp, mapSaver$lambda_0(restore));
  }
  function mapSaver$lambda($save) {
    return function ($this$listSaver, it) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.saveable.mapSaver.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $save($this$listSaver, it).q2().v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.saveable.mapSaver.<anonymous>.<anonymous>.<anonymous>' call
        this_0.s(element.t2());
        this_0.s(element.u2());
      }
      return this_0;
    };
  }
  function mapSaver$lambda_0($restore) {
    return function (list) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      var map = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!((list.n() % 2 | 0) === 0)) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var index = 0;
      while (index < list.n()) {
        var tmp_0 = list.i1(index);
        var key = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
        var value = list.i1(index + 1 | 0);
        // Inline function 'kotlin.collections.set' call
        map.r2(key, value);
        index = index + 2 | 0;
      }
      return $restore(map);
    };
  }
  var MaxSupportedRadix;
  function rememberSaveable$composable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    $composer_0.f1x(-1490773347);
    sourceInformation($composer_0, 'C(rememberSaveable$composable)P(1,3,2)80@3500L7,82@3597L244,95@4209L27,96@4262L27,98@4299L441:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1490773347, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable$composable (RememberSaveable.kt:65)');
    }
    $composer_0.f1x(1790924732);
    sourceInformation($composer_0, '75@3334L23');
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = key_0;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : charSequenceLength(this_0) === 0)) {
      tmp = key_0;
    } else {
      tmp = toString_0($get_currentCompositeKeyHash$$composable_u3vbzj($composer_0, 0), MaxSupportedRadix);
    }
    var tmp1_group = tmp;
    $composer_0.h1x();
    var finalKey = tmp1_group;
    var tmp_0 = saver_0._v;
    if (!(!(tmp_0 == null) ? isInterface(tmp_0, Saver) : false))
      THROW_CCE();
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_1);
    sourceInformationMarkerEnd($composer_1);
    var registry = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var keys = inputs.slice();
    var $composer_2 = $composer_0;
    $composer_2.f1x(-1603429786);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys.length;
    while (inductionVariable < last) {
      var key_1 = keys[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_2.t1z(key_1));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.r1z();
    var tmp_1;
    if (invalid_0 ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>' call
      var tmp1_safe_receiver = registry == null ? null : registry.d4n(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
        tmp_2 = saver_0._v.e4n(tmp1_safe_receiver);
      }
      var restored = tmp_2;
      var value = restored == null ? init() : restored;
      $composer_2.s1z(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_3 = tmp_1;
    var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    $composer_2.h1x();
    var value_0 = tmp0_0;
    if (!(registry == null)) {
      var saverState = rememberUpdatedState$composable(saver_0._v, $composer_0, 0);
      var valueState = rememberUpdatedState$composable(value_0, $composer_0, 0);
      DisposableEffect$composable(registry, finalKey, rememberSaveable$composable$lambda(registry, finalKey, saverState, valueState), $composer_0, 0);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return value_0;
  }
  function rememberSaveable$composable_0(inputs, stateSaver, key, init, $composer, $changed, $default) {
    var key_0 = key;
    var $composer_0 = $composer;
    $composer_0.f1x(-1040428287);
    sourceInformation($composer_0, 'C(rememberSaveable$composable)P(1,3,2)141@6040L106:RememberSaveable.kt#r2ddri');
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1040428287, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable$composable (RememberSaveable.kt:136)');
    }
    var tmp0 = rememberSaveable$composable(inputs.slice(), mutableStateSaver(stateSaver), key_0, init, $composer_0, 896 & $changed | 7168 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) ? !_this__u8e3s4.c4n(value) : false) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if ((!(value.f2f() === neverEqualPolicy()) ? !(value.f2f() === structuralEqualityPolicy()) : false) ? !(value.f2f() === referentialEqualityPolicy()) : false) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_1(value.u2()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = toString_1(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function mutableStateSaver(inner) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.saveable.mutableStateSaver.<anonymous>' call
    var $this$with = isInterface(inner, Saver) ? inner : THROW_CCE();
    var tmp = mutableStateSaver$lambda($this$with);
    return Saver_0(tmp, mutableStateSaver$lambda_0($this$with));
  }
  function sam$androidx_compose_runtime_saveable_SaverScope$0(function_0) {
    this.f4n_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_saveable_SaverScope$0).c4n = function (value) {
    return this.f4n_1(value);
  };
  function rememberSaveable$composable$lambda$lambda$lambda($registry) {
    return function (it) {
      return $registry.c4n(it);
    };
  }
  function rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>.<anonymous>' call
      var $this$with = $saverState.u2();
      var tmp = rememberSaveable$composable$lambda$lambda$lambda($registry);
      return $this$with.g4n(new sam$androidx_compose_runtime_saveable_SaverScope$0(tmp), $valueState.u2());
    };
  }
  function _no_name_provided__qut3iv($entry) {
    this.h4n_1 = $entry;
  }
  protoOf(_no_name_provided__qut3iv).gk = function () {
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
    this.h4n_1.i4n();
  };
  function rememberSaveable$composable$lambda($registry, $finalKey, $saverState, $valueState) {
    return function ($this$DisposableEffect) {
      var valueProvider = rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry);
      requireCanBeSaved($registry, valueProvider());
      var entry = $registry.j4n($finalKey, valueProvider);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(entry);
    };
  }
  function mutableStateSaver$lambda($$this$with) {
    return function ($this$Saver, state) {
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!isInterface(state, SnapshotMutableState)) {
        // Inline function 'androidx.compose.runtime.saveable.mutableStateSaver.<anonymous>.<anonymous>.<anonymous>' call
        var message = 'If you use a custom MutableState implementation you have to write a custom Saver and pass it as a saver param to rememberSaveable()';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp_0 = $$this$with.g4n($this$Saver, state.u2());
      var tmp_1 = state.f2f();
      return mutableStateOf(tmp_0, isInterface(tmp_1, SnapshotMutationPolicy) ? tmp_1 : THROW_CCE());
    };
  }
  function mutableStateSaver$lambda_0($$this$with) {
    return function (it) {
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!isInterface(it, SnapshotMutableState)) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp_0 = !(it.u2() == null) ? $$this$with.e4n(ensureNotNull(it.u2())) : null;
      var tmp_1 = it.f2f();
      var tmp_2 = mutableStateOf(tmp_0, isInterface(tmp_1, SnapshotMutationPolicy) ? tmp_1 : THROW_CCE());
      return isInterface(tmp_2, MutableState) ? tmp_2 : THROW_CCE();
    };
  }
  function rememberSaveableStateHolder$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1658217662);
    sourceInformation($composer_0, 'C(rememberSaveableStateHolder$composable)*61@2439L41,59@2369L111,64@2554L7:SaveableStateHolder.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(-1658217662, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable (SaveableStateHolder.kt:58)');
    }
    // Inline function 'kotlin.apply' call
    var tmp = Companion_getInstance_0().k4n_1;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp_0;
    if (false ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable.<anonymous>' call
      var value = rememberSaveableStateHolder$composable$lambda;
      $composer_1.s1z(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_1.h1x();
    var this_0 = rememberSaveable$composable([], tmp, null, tmp0, $composer_0, 8, 4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveableStateHolder$composable.<anonymous>' call
    var tmp_2 = this_0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_2.b20(this_1);
    sourceInformationMarkerEnd($composer_2);
    tmp_2.n4n_1 = tmp0_0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return this_0;
  }
  function SaveableStateHolderImpl$RegistryHolder$registry$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.n4n_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c4n(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda($this$Saver, it) {
    return saveAll(it);
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda_0(it) {
    return new SaveableStateHolderImpl(it);
  }
  function saveAll($this) {
    var map = toMutableMap($this.l4n_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.m4n_1.p2().v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      element.s4n(map);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (map.e1()) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.saveAll.<anonymous>' call
      tmp = null;
    } else {
      tmp = map;
    }
    return tmp;
  }
  function RegistryHolder($outer, key) {
    this.r4n_1 = $outer;
    this.o4n_1 = key;
    this.p4n_1 = true;
    var tmp = this;
    var tmp_0 = this.r4n_1.l4n_1.b3(this.o4n_1);
    tmp.q4n_1 = SaveableStateRegistry(tmp_0, SaveableStateHolderImpl$RegistryHolder$registry$lambda(this.r4n_1));
  }
  protoOf(RegistryHolder).s4n = function (map) {
    if (this.p4n_1) {
      var savedData = this.q4n_1.t4n();
      if (savedData.e1()) {
        // Inline function 'kotlin.collections.minusAssign' call
        var key = this.o4n_1;
        map.v2(key);
      } else {
        // Inline function 'kotlin.collections.set' call
        var key_0 = this.o4n_1;
        map.r2(key_0, savedData);
      }
    }
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda;
    tmp.k4n_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0);
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _no_name_provided__qut3iv_0($registryHolder, this$0, $key) {
    this.u4n_1 = $registryHolder;
    this.v4n_1 = this$0;
    this.w4n_1 = $key;
  }
  protoOf(_no_name_provided__qut3iv_0).gk = function () {
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.u4n_1.s4n(this.v4n_1.l4n_1);
    // Inline function 'kotlin.collections.minusAssign' call
    var this_0 = this.v4n_1.m4n_1;
    var key = this.w4n_1;
    this_0.v2(key);
  };
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this$0, $key, $registryHolder) {
    return function ($this$DisposableEffect) {
      // Inline function 'kotlin.collections.contains' call
      var this_0 = this$0.m4n_1;
      // Inline function 'kotlin.collections.containsKey' call
      var key = $key;
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).y2(key)) {
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
        var message = 'Key ' + toString($key) + ' was used multiple times ';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var this_1 = this$0.l4n_1;
      var key_0 = $key;
      this_1.v2(key_0);
      var this_2 = this$0.m4n_1;
      var key_1 = $key;
      var value = $registryHolder;
      this_2.r2(key_1, value);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($registryHolder, this$0, $key);
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$composable$lambda_0($tmp0_rcvr, $key, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.x4n($key, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_0();
    var tmp;
    if (savedStates === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = savedStates;
    }
    savedStates = tmp;
    this.l4n_1 = savedStates;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.m4n_1 = LinkedHashMap_init_$Create$();
    this.n4n_1 = null;
  }
  protoOf(SaveableStateHolderImpl).y4n = function (key) {
    var registryHolder = this.m4n_1.b3(key);
    if (!(registryHolder == null)) {
      registryHolder.p4n_1 = false;
    } else {
      // Inline function 'kotlin.collections.minusAssign' call
      this.l4n_1.v2(key);
    }
  };
  protoOf(SaveableStateHolderImpl).x4n = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1898146948);
    sourceInformation($composer_0, 'C(SaveableStateProvider$composable)P(1)75@2967L923:SaveableStateHolder.kt#r2ddri');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(1898146948, $dirty, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable (SaveableStateHolder.kt:74)');
    }
    // Inline function 'androidx.compose.runtime.ReusableContent$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(1346827672);
    sourceInformation($composer_1, 'CC(ReusableContent$composable)P(1)145@5313L9:Composables.kt#9igjgp');
    $composer_1.o1z(get_reuseKey(), key);
    // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>' call
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, -65727059, 'C76@3023L321,83@3357L150,87@3520L360:SaveableStateHolder.kt#r2ddri');
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_2;
    $composer_3.f1x(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_3.r1z();
    var tmp;
    if (false ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_safe_receiver = this.n4n_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c4n(key);
      // Inline function 'kotlin.contracts.contract' call
      if (!(tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs)) {
        // Inline function 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider$composable.<anonymous>.<anonymous>.<anonymous>' call
        var message = 'Type of the key ' + toString(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var value = new RegistryHolder(this, key);
      $composer_3.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_3.h1x();
    var registryHolder = tmp0;
    CompositionLocalProvider$composable([get_LocalSaveableStateRegistry().r2e(registryHolder.q4n_1)], content, $composer_2, 112 & $dirty);
    DisposableEffect$composable_0(Unit_instance, SaveableStateHolderImpl$SaveableStateProvider$composable$lambda(this, key, registryHolder), $composer_2, 6);
    sourceInformationMarkerEnd($composer_2);
    $composer_1.p1z();
    $composer_1.h1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.d1z();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.w2e(SaveableStateHolderImpl$SaveableStateProvider$composable$lambda_0(this, key, content, $changed));
    }
  };
  function rememberSaveableStateHolder$composable$lambda() {
    return new SaveableStateHolderImpl();
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function SaveableStateRegistry(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function SaveableStateRegistryImpl$registerProvider$3(this$0, $key, $valueProvider) {
    this.z4n_1 = this$0;
    this.a4o_1 = $key;
    this.b4o_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$3).i4n = function () {
    var list = this.z4n_1.e4o_1.v2(this.a4o_1);
    if (list == null)
      null;
    else
      list.t(this.b4o_1);
    var tmp;
    if (!(list == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !list.e1();
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.set' call
      var this_0 = this.z4n_1.e4o_1;
      var key = this.a4o_1;
      this_0.r2(key, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.c4o_1 = canBeSaved;
    var tmp = this;
    var tmp1_elvis_lhs = restored == null ? null : toMutableMap(restored);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp_0 = LinkedHashMap_init_$Create$();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp.d4o_1 = tmp_0;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.e4o_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SaveableStateRegistryImpl).c4n = function (value) {
    return this.c4o_1(value);
  };
  protoOf(SaveableStateRegistryImpl).d4n = function (key) {
    var list = this.d4o_1.v2(key);
    var tmp;
    var tmp_0;
    if (!(list == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !list.e1();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      if (list.n() > 1) {
        // Inline function 'kotlin.collections.set' call
        var this_0 = this.d4o_1;
        var value = list.e2(1, list.n());
        this_0.r2(key, value);
      }
      tmp = list.i1(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).j4n = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(key)) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      var message = 'Registered key is empty or blank';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.e4o_1;
    var value = this_0.b3(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.registerProvider.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$_0();
      this_0.r2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp.s(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$3(this, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).t4n = function () {
    var map = toMutableMap(this.d4o_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.e4o_1.q2().v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.t2();
      // Inline function 'kotlin.collections.component2' call
      var list = element.u2();
      if (list.n() === 1) {
        var value = list.i1(0)();
        if (!(value == null)) {
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.c4n(value)) {
            // Inline function 'kotlin.check.<anonymous>' call
            var message = 'Check failed.';
            throw IllegalStateException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.collections.set' call
          var value_0 = arrayListOf([value]);
          map.r2(key, value_0);
        }
      } else {
        // Inline function 'kotlin.collections.set' call
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = list.n();
        var list_0 = ArrayList_init_$Create$_1(size);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'androidx.compose.runtime.saveable.SaveableStateRegistryImpl.performSave.<anonymous>.<anonymous>' call
            var value_1 = list.i1(index)();
            if (!(value_1 == null)) {
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              if (!this.c4n(value_1)) {
                // Inline function 'kotlin.check.<anonymous>' call
                var message_0 = 'Check failed.';
                throw IllegalStateException_init_$Create$(toString(message_0));
              }
            }
            list_0.s(value_1);
          }
           while (inductionVariable < size);
        map.r2(key, list_0);
      }
    }
    return map;
  };
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (!properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.f4o_1 = $save;
    this.g4o_1 = $restore;
  }
  protoOf(Saver$1).g4n = function (_this__u8e3s4, value) {
    return this.f4o_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).e4n = function (value) {
    return this.g4o_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (!properties_initialized_Saver_kt_ch40dh) {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSaveableStateRegistry;
  _.$_$.b = SaveableStateRegistry;
  _.$_$.c = Saver_0;
  _.$_$.d = listSaver;
  _.$_$.e = mapSaver;
  _.$_$.f = rememberSaveable$composable;
  _.$_$.g = rememberSaveable$composable_0;
  _.$_$.h = rememberSaveableStateHolder$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-runtime-saveable.js.map
