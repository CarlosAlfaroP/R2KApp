(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui.js', './appyx-navigation-common.js', './compose-multiplatform-core-ui-unit.js', './R2KApp-common.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-material3.js', './compose-multiplatform-core-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui.js'), require('./appyx-navigation-common.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./R2KApp-common.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-material3.js'), require('./compose-multiplatform-core-foundation.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['appyx-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'appyx-navigation-common' was not found. Please, check whether 'appyx-navigation-common' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['R2KApp-common'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'R2KApp-common' was not found. Please, check whether 'R2KApp-common' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['compose-multiplatform-core-material3'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'compose-multiplatform-core-material3' was not found. Please, check whether 'compose-multiplatform-core-material3' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'R2KApp:web'.");
    }
    root['R2KApp:web'] = factory(typeof this['R2KApp:web'] === 'undefined' ? {} : this['R2KApp:web'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui'], this['appyx-navigation-common'], this['compose-multiplatform-core-ui-unit'], this['R2KApp-common'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-foundation']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_appyx_appyx_navigation_appyx_navigation, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_R2KApp_common, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var VOID = kotlin_kotlin.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r2;
  var get_key = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.a9;
  var equals = kotlin_kotlin.$_$.lc;
  var get_type = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b9;
  var protoOf = kotlin_kotlin.$_$.ud;
  var NodeFactory = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.d;
  var classMeta = kotlin_kotlin.$_$.hc;
  var setMetadataFor = kotlin_kotlin.$_$.vd;
  var KMutableProperty0 = kotlin_kotlin.$_$.af;
  var THROW_ISE = kotlin_kotlin.$_$.sh;
  var getLocalDelegateReference = kotlin_kotlin.$_$.pc;
  var Unit_getInstance = kotlin_kotlin.$_$.b5;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var ScreenSize = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.e;
  var RootNode = kotlin_R2KApp_common.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.ob;
  var THROW_CCE = kotlin_kotlin.$_$.qh;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.fd;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var receiveAsFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.o9;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.q;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var onSizeChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var onKeyEvent = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var focusRequester = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var focusable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var onFocusChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var WebNodeHost$composable = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.f;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var FocusRequester = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var R2KAppTheme$composable = kotlin_R2KApp_common.$_$.a;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var CanvasBasedWindow$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.v7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ya;
  var SuspendFunction1 = kotlin_kotlin.$_$.qb;
  //endregion
  //region block: pre-declaration
  setMetadataFor(sam$com_bumble_appyx_navigation_integration_NodeFactory$0, 'sam$com_bumble_appyx_navigation_integration_NodeFactory$0', classMeta, VOID, [NodeFactory]);
  setMetadataFor(main$lambda$lambda$lambda$slambda, 'main$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(onKeyEvent$slambda, 'onKeyEvent$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  //endregion
  function main() {
    var events = Channel();
    onWasmReady(main$lambda(events));
  }
  function onKeyEvent_0(keyEvent, events, coroutineScope) {
    coroutineScope = coroutineScope === VOID ? CoroutineScope(SupervisorJob().plus_s13ygv_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$())) : coroutineScope;
    var tmp;
    if (get_type(keyEvent) === Companion_getInstance_0().get_KeyUp_ws4i37_k$() ? equals(get_key(keyEvent), Companion_getInstance().get_Backspace_7jmd2y_k$()) : false) {
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
  protoOf(sam$com_bumble_appyx_navigation_integration_NodeFactory$0).create_g34fwj_k$ = function (buildContext) {
    return this.function_1(buildContext);
  };
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
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
    $hasFocus$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
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
    $screenSize$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function main$lambda$lambda$lambda$lambda($screenSize$delegate) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_0 = _IntSize___get_width__impl__d9yl4o(it.packedValue_1);
      var tmp = _Dp___init__impl__ms3zkb(this_0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_1 = _IntSize___get_height__impl__prv63b(it.packedValue_1);
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
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
  protoOf(main$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(main$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$requester_1.requestFocus_9180nb_k$();
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
  protoOf(main$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new main$lambda$lambda$lambda$slambda(this.$requester_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(main$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function main$lambda$lambda$lambda$slambda_0($requester, resultContinuation) {
    var i = new main$lambda$lambda$lambda$slambda($requester, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
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
        var tmp_2 = background(fillMaxSize(Companion_getInstance_1()), MaterialTheme_getInstance().$get_colorScheme$$composable_t1waqp_k$($composer_0, 6).get_background_8l4942_k$());
        $composer_0.startReplaceableGroup_ip860b_k$(1526639093);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($screenSize$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = main$lambda$lambda$lambda$lambda($screenSize$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmpCache = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_5 = onSizeChanged(tmp_2, tmpCache);
        var tmp_6 = focusable(focusRequester(onKeyEvent(tmp_5, main$lambda$lambda$lambda$lambda_0($events, $eventScope)), $requester));
        $composer_0.startReplaceableGroup_ip860b_k$(1526639415);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changed_ga7h3f_k$($hasFocus$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid_0 ? true : it_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = main$lambda$lambda$lambda$lambda_1($hasFocus$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmpCache_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        var tmp_9 = onFocusChanged(tmp_6, tmpCache_0);
        $composer_0.startReplaceableGroup_ip860b_k$(1526639461);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (false ? true : it_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_11 = main$lambda$lambda$lambda$lambda_2;
          var value_1 = new sam$com_bumble_appyx_navigation_integration_NodeFactory$0(tmp_11);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_12 = tmp_10;
        var tmpCache_1 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        $composer_0.endReplaceableGroup_ern0ak_k$();
        WebNodeHost$composable(tmp_0, tmp_1, tmp_9, null, null, tmpCache_1, $composer_0, 0, 24);
        if (!invoke$lambda($hasFocus$delegate)) {
          $composer_0.startReplaceableGroup_ip860b_k$(1526639676);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = $composer_0.changed_ga7h3f_k$($requester);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_2 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_13;
          if (invalid_1 ? true : it_2 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_2 = main$lambda$lambda$lambda$slambda_0($requester, null);
            $composer_0.updateRememberedValue_l1wh71_k$(value_2);
            tmp_13 = value_2;
          } else {
            tmp_13 = it_2;
          }
          var tmp_14 = tmp_13;
          var tmpCache_2 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
          $composer_0.endReplaceableGroup_ern0ak_k$();
          LaunchedEffect$composable(Unit_getInstance(), tmpCache_2, $composer_0, 6);
        }
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp = tmp_15;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
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
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false ? true : it === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var value = new FocusRequester();
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        var requester = tmp0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_ip860b_k$(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (false ? true : it_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = mutableStateOf(false);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_2.endReplaceableGroup_ern0ak_k$();
        var hasFocus$delegate = tmp0_0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.startReplaceableGroup_ip860b_k$(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (false ? true : it_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_5 = _Dp___init__impl__ms3zkb(0);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$11 = _Dp___init__impl__ms3zkb(0);
          var value_1 = mutableStateOf(new ScreenSize(tmp_5, tmp$ret$11));
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_6 = tmp_4;
        var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_3.endReplaceableGroup_ern0ak_k$();
        var screenSize$delegate = tmp0_1;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_4 = $composer_0;
        $composer_4.startReplaceableGroup_ip860b_k$(547886695);
        sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_4.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (false ? true : it_2 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = CoroutineScope(SupervisorJob().plus_s13ygv_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$()));
          $composer_4.updateRememberedValue_l1wh71_k$(value_2);
          tmp_7 = value_2;
        } else {
          tmp_7 = it_2;
        }
        var tmp_8 = tmp_7;
        var tmp0_2 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_4.endReplaceableGroup_ern0ak_k$();
        var eventScope = tmp0_2;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_9, -1184081960, true, main$lambda$lambda$lambda($events, screenSize$delegate, requester, hasFocus$delegate, eventScope));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_5 = $composer_0;
        $composer_5.startReplaceableGroup_ip860b_k$(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_5.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_5.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid ? true : it_3 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_5.updateRememberedValue_l1wh71_k$(value_3);
          tmp_10 = value_3;
        } else {
          tmp_10 = it_3;
        }
        var tmp_11 = tmp_10;
        var tmp0_3 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_5.endReplaceableGroup_ern0ak_k$();
        R2KAppTheme$composable(false, tmp0_3, $composer_0, 48, 1);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
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
  protoOf(onKeyEvent$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(onKeyEvent$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(onKeyEvent$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$events_1.send_44jogj_k$(Unit_getInstance(), this);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(onKeyEvent$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new onKeyEvent$slambda(this.$events_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(onKeyEvent$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope_0) : false) ? value : THROW_CCE(), completion);
  };
  function onKeyEvent$slambda_0($events, resultContinuation) {
    var i = new onKeyEvent$slambda($events, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  main();
  return _;
}));

//# sourceMappingURL=R2KApp-web.js.map
