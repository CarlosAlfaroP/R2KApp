(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui.js', './appyx-navigation-common.js', './compose-multiplatform-core-ui-unit.js', './R2KApp-common.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-material3.js', './compose-multiplatform-core-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui.js'), require('./appyx-navigation-common.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./R2KApp-common.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-material3.js'), require('./compose-multiplatform-core-foundation.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'R2KApp-web'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'R2KApp-web'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'R2KApp-web'.");
    }
    if (typeof this['appyx-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'appyx-navigation-common' was not found. Please, check whether 'appyx-navigation-common' is loaded prior to 'R2KApp-web'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'R2KApp-web'.");
    }
    if (typeof this['R2KApp-common'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'R2KApp-common' was not found. Please, check whether 'R2KApp-common' is loaded prior to 'R2KApp-web'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'R2KApp-web'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'R2KApp-web'.");
    }
    if (typeof this['compose-multiplatform-core-material3'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'compose-multiplatform-core-material3' was not found. Please, check whether 'compose-multiplatform-core-material3' is loaded prior to 'R2KApp-web'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-web'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'R2KApp-web'.");
    }
    root['R2KApp-web'] = factory(typeof this['R2KApp-web'] === 'undefined' ? {} : this['R2KApp-web'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui'], this['appyx-navigation-common'], this['compose-multiplatform-core-ui-unit'], this['R2KApp-common'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-foundation']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_appyx_appyx_navigation_appyx_navigation, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_R2KApp_common, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var VOID = kotlin_kotlin.$_$.bj;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var get_key = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.a9;
  var equals = kotlin_kotlin.$_$.ic;
  var get_type = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b9;
  var protoOf = kotlin_kotlin.$_$.rd;
  var NodeFactory = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.d;
  var classMeta = kotlin_kotlin.$_$.ec;
  var setMetadataFor = kotlin_kotlin.$_$.sd;
  var KMutableProperty0 = kotlin_kotlin.$_$.xe;
  var THROW_ISE = kotlin_kotlin.$_$.mh;
  var getLocalDelegateReference = kotlin_kotlin.$_$.lc;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var ScreenSize = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.z4;
  var RootNode = kotlin_R2KApp_common.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.lb;
  var THROW_CCE = kotlin_kotlin.$_$.lh;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var isInterface = kotlin_kotlin.$_$.bd;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var receiveAsFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.o9;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.q;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var isObject = kotlin_kotlin.$_$.dd;
  var onSizeChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var onKeyEvent = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var focusRequester = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var focusable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var onFocusChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var WebNodeHost$composable = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.f;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var FocusRequester = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var R2KAppTheme$composable = kotlin_R2KApp_common.$_$.a;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var CanvasBasedWindow$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.v7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.va;
  var SuspendFunction1 = kotlin_kotlin.$_$.nb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(sam$com_bumble_appyx_navigation_integration_NodeFactory$0, 'sam$com_bumble_appyx_navigation_integration_NodeFactory$0', classMeta, VOID, [NodeFactory]);
  setMetadataFor(main$lambda$lambda$lambda$slambda, 'main$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(onKeyEvent$slambda, 'onKeyEvent$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  //endregion
  function main() {
    var events = Channel();
    onWasmReady(main$lambda(events));
  }
  function onKeyEvent_0(keyEvent, events, coroutineScope) {
    coroutineScope = coroutineScope === VOID ? CoroutineScope(SupervisorJob().plus_rgw9wi_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$())) : coroutineScope;
    var tmp;
    if (get_type(keyEvent) === Companion_getInstance_0().get_KeyUp_mt1bam_k$() ? equals(get_key(keyEvent), Companion_getInstance().get_Backspace_g19x21_k$()) : false) {
      launch(coroutineScope, VOID, VOID, onKeyEvent$slambda_0(events, null));
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sam$com_bumble_appyx_navigation_integration_NodeFactory$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_navigation_integration_NodeFactory$0).create_6swt8h_k$ = function (buildContext) {
    return this.function_1(buildContext);
  };
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function invoke$lambda($hasFocus$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('hasFocus', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $hasFocus$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_0($hasFocus$delegate, value) {
    getLocalDelegateReference('hasFocus', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $hasFocus$delegate.set_value_rnwamw_k$(value);
  }
  function invoke$lambda_1($screenSize$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('screenSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $screenSize$delegate.get_value_j01efc_k$();
  }
  function invoke$lambda_2($screenSize$delegate, value) {
    getLocalDelegateReference('screenSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $screenSize$delegate.set_value_rnwamw_k$(value);
  }
  function main$lambda$lambda$lambda$lambda($screenSize$delegate) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp0_get_dp_bnsrxl = _IntSize___get_width__impl__d9yl4o(it.packedValue_1);
      tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0_get_dp_bnsrxl);
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp1_get_dp_ujoszc = _IntSize___get_height__impl__prv63b(it.packedValue_1);
      tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1_get_dp_ujoszc);
      invoke$lambda_2($screenSize$delegate, new ScreenSize(tmp, tmp$ret$1));
      return Unit_getInstance();
    };
  }
  function main$lambda$lambda$lambda$lambda_0($events, $eventScope) {
    return function (event) {
      return onKeyEvent_0(event.nativeKeyEvent_1, $events, $eventScope);
    };
  }
  function main$lambda$lambda$lambda$lambda_1($hasFocus$delegate) {
    return function (it) {
      invoke$lambda_0($hasFocus$delegate, it.get_hasFocus_tux8ex_k$());
      return Unit_getInstance();
    };
  }
  function main$lambda$lambda$lambda$lambda_2(buildContext) {
    return new RootNode(buildContext);
  }
  function main$lambda$lambda$lambda$slambda($requester, resultContinuation) {
    this.$requester_1 = $requester;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$lambda$lambda$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(main$lambda$lambda$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          this.$requester_1.requestFocus_91rt8o_k$();
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$lambda$lambda$lambda$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new main$lambda$lambda$lambda$slambda(this.$requester_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(main$lambda$lambda$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function main$lambda$lambda$lambda$slambda_0($requester, resultContinuation) {
    var i = new main$lambda$lambda$lambda$slambda($requester, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda$lambda$lambda($events, $screenSize$delegate, $requester, $hasFocus$delegate, $eventScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1184081960, $changed, -1, 'main.<anonymous>.<anonymous>.<anonymous> (Main.kt:41)');
        }
        var tmp_0 = invoke$lambda_1($screenSize$delegate);
        var tmp_1 = receiveAsFlow($events);
        var tmp_2 = background(fillMaxSize(Companion_getInstance_1()), MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6).get_background_ubksc_k$());
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$($screenSize$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = main$lambda$lambda$lambda$lambda($screenSize$delegate);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var tmp_5 = onSizeChanged(tmp_2, tmp$ret$4);
        var tmp_6 = focusable(focusRequester(onKeyEvent(tmp_5, main$lambda$lambda$lambda$lambda_0($events, $eventScope)), $requester));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$($hasFocus$delegate);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_7;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = main$lambda$lambda$lambda$lambda_1($hasFocus$delegate);
          var value_0 = tmp$ret$5;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_7;
        tmp$ret$7 = tmp$ret$6;
        var tmp_8 = tmp$ret$7;
        tmp$ret$8 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_0;
        var tmp_9 = onFocusChanged(tmp_6, tmp$ret$9);
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_3 = tmp2_remember$composable;
        $composer_3.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_10;
        if (false ? true : tmp0_let_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$10;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_11 = main$lambda$lambda$lambda$lambda_2;
          tmp$ret$10 = new sam$com_bumble_appyx_navigation_integration_NodeFactory$0(tmp_11);
          var value_1 = tmp$ret$10;
          tmp0_cache_1.updateRememberedValue_l1colo_k$(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = tmp0_let_1;
        }
        tmp$ret$11 = tmp_10;
        tmp$ret$12 = tmp$ret$11;
        var tmp_12 = tmp$ret$12;
        tmp$ret$13 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
        var tmp0_1 = tmp$ret$13;
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$14 = tmp0_1;
        WebNodeHost$composable(tmp_0, tmp_1, tmp_9, null, null, tmp$ret$14, $composer_0, 0, 24);
        if (!invoke$lambda($hasFocus$delegate)) {
          var tmp$ret$19;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp3_remember$composable = $composer_0;
          var $composer_4 = tmp3_remember$composable;
          $composer_4.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$18;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_2 = $composer_4;
          var tmp1_cache_1 = $composer_4.changed_ga7h3f_k$($requester);
          var tmp$ret$17;
          // Inline function 'kotlin.let' call
          var tmp0_let_2 = tmp0_cache_2.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$16;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_13;
          if (tmp1_cache_1 ? true : tmp0_let_2 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            var tmp$ret$15;
            // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$15 = main$lambda$lambda$lambda$slambda_0($requester, null);
            var value_2 = tmp$ret$15;
            tmp0_cache_2.updateRememberedValue_l1colo_k$(value_2);
            tmp_13 = value_2;
          } else {
            tmp_13 = tmp0_let_2;
          }
          tmp$ret$16 = tmp_13;
          tmp$ret$17 = tmp$ret$16;
          var tmp_14 = tmp$ret$17;
          tmp$ret$18 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
          var tmp0_2 = tmp$ret$18;
          $composer_4.endReplaceableGroup_er37p7_k$();
          tmp$ret$19 = tmp0_2;
          LaunchedEffect$composable(Unit_getInstance(), tmp$ret$19, $composer_0, 6);
        }
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp = tmp_15;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function main$lambda$lambda($events) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(76758591, $changed, -1, 'main.<anonymous>.<anonymous> (Main.kt:34)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = new FocusRequester();
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        var requester = tmp$ret$4;
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = mutableStateOf(false);
          var value_0 = tmp$ret$5;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        var tmp_3 = tmp$ret$7;
        tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_0;
        var hasFocus$delegate = tmp$ret$9;
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_3 = tmp2_remember$composable;
        $composer_3.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp0_let_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$12;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$10;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$10 = _Dp___init__impl__ms3zkb(0);
          var tmp_5 = tmp$ret$10;
          var tmp$ret$11;
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp$ret$11 = _Dp___init__impl__ms3zkb(0);
          tmp$ret$12 = mutableStateOf(new ScreenSize(tmp_5, tmp$ret$11));
          var value_1 = tmp$ret$12;
          tmp0_cache_1.updateRememberedValue_l1colo_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = tmp0_let_1;
        }
        tmp$ret$13 = tmp_4;
        tmp$ret$14 = tmp$ret$13;
        var tmp_6 = tmp$ret$14;
        tmp$ret$15 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_1 = tmp$ret$15;
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$16 = tmp0_1;
        var screenSize$delegate = tmp$ret$16;
        var tmp$ret$21;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_4 = tmp3_remember$composable;
        $composer_4.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_2 = $composer_4;
        var tmp$ret$19;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp0_cache_2.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_7;
        if (false ? true : tmp0_let_2 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$17;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$17 = CoroutineScope(SupervisorJob().plus_rgw9wi_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$()));
          var value_2 = tmp$ret$17;
          tmp0_cache_2.updateRememberedValue_l1colo_k$(value_2);
          tmp_7 = value_2;
        } else {
          tmp_7 = tmp0_let_2;
        }
        tmp$ret$18 = tmp_7;
        tmp$ret$19 = tmp$ret$18;
        var tmp_8 = tmp$ret$19;
        tmp$ret$20 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_2 = tmp$ret$20;
        $composer_4.endReplaceableGroup_er37p7_k$();
        tmp$ret$21 = tmp0_2;
        var eventScope = tmp$ret$21;
        var tmp$ret$28;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$27;
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_9, -1184081960, true, main$lambda$lambda$lambda($events, screenSize$delegate, requester, hasFocus$delegate, eventScope));
        var tmp$ret$26;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_5 = tmp0_remember$composable_0;
        $composer_5.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$25;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_3 = $composer_5;
        var tmp1_cache = $composer_5.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$24;
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = tmp0_cache_3.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_10;
        if (tmp1_cache ? true : tmp0_let_3 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$22;
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$22 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          var value_3 = tmp$ret$22;
          tmp0_cache_3.updateRememberedValue_l1colo_k$(value_3);
          tmp_10 = value_3;
        } else {
          tmp_10 = tmp0_let_3;
        }
        tmp$ret$23 = tmp_10;
        tmp$ret$24 = tmp$ret$23;
        var tmp_11 = tmp$ret$24;
        tmp$ret$25 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
        var tmp0_3 = tmp$ret$25;
        $composer_5.endReplaceableGroup_er37p7_k$();
        tmp$ret$26 = tmp0_3;
        tmp$ret$27 = tmp$ret$26;
        tmp$ret$28 = tmp$ret$27;
        R2KAppTheme$composable(false, tmp$ret$28, $composer_0, 48, 1);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function main$lambda($events) {
    return function () {
      CanvasBasedWindow$composable('R2K App', VOID, VOID, VOID, ComposableLambda$invoke$ref(composableLambdaInstance(76758591, true, main$lambda$lambda($events))));
      return Unit_getInstance();
    };
  }
  function onKeyEvent$slambda($events, resultContinuation) {
    this.$events_1 = $events;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(onKeyEvent$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(onKeyEvent$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(onKeyEvent$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$events_1.send_4idxxh_k$(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(onKeyEvent$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new onKeyEvent$slambda(this.$events_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(onKeyEvent$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function onKeyEvent$slambda_0($events, resultContinuation) {
    var i = new onKeyEvent$slambda($events, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  main();
  return _;
}));
