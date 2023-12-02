(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-ui-unit.js', './appyx-navigation-common.js', './R2KApp-common.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-material3.js', './compose-multiplatform-core-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./appyx-navigation-common.js'), require('./R2KApp-common.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-material3.js'), require('./compose-multiplatform-core-foundation.js'));
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
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'R2KApp:web'.");
    }
    if (typeof this['appyx-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp:web'. Its dependency 'appyx-navigation-common' was not found. Please, check whether 'appyx-navigation-common' is loaded prior to 'R2KApp:web'.");
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
    root['R2KApp:web'] = factory(typeof this['R2KApp:web'] === 'undefined' ? {} : this['R2KApp:web'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-ui-unit'], this['appyx-navigation-common'], this['R2KApp-common'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-foundation']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_appyx_appyx_navigation_appyx_navigation, kotlin_R2KApp_common, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var VOID = kotlin_kotlin.$_$.d;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var get_key = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.f8;
  var equals = kotlin_kotlin.$_$.t8;
  var get_type = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.g8;
  var protoOf = kotlin_kotlin.$_$.r9;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var KMutableProperty0 = kotlin_kotlin.$_$.ta;
  var THROW_ISE = kotlin_kotlin.$_$.yc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x8;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var ScreenSize = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.d;
  var RootNode = kotlin_R2KApp_common.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var isInterface = kotlin_kotlin.$_$.h9;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var receiveAsFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var MaterialTheme_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.q;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var onSizeChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var onKeyEvent = kotlin_org_jetbrains_compose_ui_ui.$_$.p1;
  var focusRequester = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var focusable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e1;
  var onFocusChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var WebNodeHost$composable = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.e;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var FocusRequester = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var R2KAppTheme$composable = kotlin_R2KApp_common.$_$.a;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var CanvasBasedWindow$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.g7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(sam$com_bumble_appyx_navigation_integration_NodeFactory$0, 'sam$com_bumble_appyx_navigation_integration_NodeFactory$0', classMeta);
  setMetadataFor(main$lambda$lambda$lambda$slambda, 'main$lambda$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(onKeyEvent$slambda, 'onKeyEvent$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  //endregion
  function main() {
    var events = Channel();
    onWasmReady(main$lambda(events));
  }
  function onKeyEvent_0(keyEvent, events, coroutineScope) {
    coroutineScope = coroutineScope === VOID ? CoroutineScope(SupervisorJob().ef(Dispatchers_getInstance().lp())) : coroutineScope;
    var tmp;
    if (get_type(keyEvent) === Companion_getInstance_0().h6e_1 ? equals(get_key(keyEvent), Companion_getInstance().j80_1) : false) {
      launch(coroutineScope, VOID, VOID, onKeyEvent$slambda_0(events, null));
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sam$com_bumble_appyx_navigation_integration_NodeFactory$0(function_0) {
    this.bgn_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_navigation_integration_NodeFactory$0).af5 = function (buildContext) {
    return this.bgn_1(buildContext);
  };
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function invoke$lambda($hasFocus$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('hasFocus', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $hasFocus$delegate.u2();
  }
  function invoke$lambda_0($hasFocus$delegate, value) {
    getLocalDelegateReference('hasFocus', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $hasFocus$delegate.h1a(value);
    return Unit_instance;
  }
  function invoke$lambda_1($screenSize$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('screenSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $screenSize$delegate.u2();
  }
  function invoke$lambda_2($screenSize$delegate, value) {
    getLocalDelegateReference('screenSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $screenSize$delegate.h1a(value);
    return Unit_instance;
  }
  function main$lambda$lambda$lambda$lambda($screenSize$delegate) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_0 = _IntSize___get_width__impl__d9yl4o(it.p3c_1);
      var tmp = _Dp___init__impl__ms3zkb(this_0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_1 = _IntSize___get_height__impl__prv63b(it.p3c_1);
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
      invoke$lambda_2($screenSize$delegate, new ScreenSize(tmp, tmp$ret$1));
      return Unit_instance;
    };
  }
  function main$lambda$lambda$lambda$lambda_0($events, $eventScope) {
    return function (event) {
      return onKeyEvent_0(event.f6e_1, $events, $eventScope);
    };
  }
  function main$lambda$lambda$lambda$lambda_1($hasFocus$delegate) {
    return function (it) {
      invoke$lambda_0($hasFocus$delegate, it.g5x());
      return Unit_instance;
    };
  }
  function main$lambda$lambda$lambda$lambda_2(buildContext) {
    return new RootNode(buildContext);
  }
  function main$lambda$lambda$lambda$slambda($requester, resultContinuation) {
    this.kgn_1 = $requester;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(main$lambda$lambda$lambda$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(main$lambda$lambda$lambda$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(main$lambda$lambda$lambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          this.kgn_1.o5z();
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(main$lambda$lambda$lambda$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new main$lambda$lambda$lambda$slambda(this.kgn_1, completion);
    i.lgn_1 = $this$LaunchedEffect;
    return i;
  };
  function main$lambda$lambda$lambda$slambda_0($requester, resultContinuation) {
    var i = new main$lambda$lambda$lambda$slambda($requester, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function main$lambda$lambda$lambda($events, $screenSize$delegate, $requester, $hasFocus$delegate, $eventScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1184081960, $changed, -1, 'main.<anonymous>.<anonymous>.<anonymous> (Main.kt:41)');
        }
        var tmp_0 = invoke$lambda_1($screenSize$delegate);
        var tmp_1 = receiveAsFlow($events);
        var tmp_2 = background(fillMaxSize(Companion_instance), MaterialTheme_instance.wfj($composer_0, 6).k4z());
        $composer_0.f1x(1526639093);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.t1z($screenSize$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.r1z();
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = main$lambda$lambda$lambda$lambda($screenSize$delegate);
          $composer_0.s1z(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmpCache = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_0.h1x();
        var tmp_5 = onSizeChanged(tmp_2, tmpCache);
        var tmp_6 = focusable(focusRequester(onKeyEvent(tmp_5, main$lambda$lambda$lambda$lambda_0($events, $eventScope)), $requester));
        $composer_0.f1x(1526639415);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.t1z($hasFocus$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.r1z();
        var tmp_7;
        if (invalid_0 ? true : it_0 === Companion_getInstance_1().t1y_1) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = main$lambda$lambda$lambda$lambda_1($hasFocus$delegate);
          $composer_0.s1z(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmpCache_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.h1x();
        var tmp_9 = onFocusChanged(tmp_6, tmpCache_0);
        $composer_0.f1x(1526639461);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.r1z();
        var tmp_10;
        if (false ? true : it_1 === Companion_getInstance_1().t1y_1) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_11 = main$lambda$lambda$lambda$lambda_2;
          var value_1 = new sam$com_bumble_appyx_navigation_integration_NodeFactory$0(tmp_11);
          $composer_0.s1z(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_12 = tmp_10;
        var tmpCache_1 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        $composer_0.h1x();
        WebNodeHost$composable(tmp_0, tmp_1, tmp_9, null, null, tmpCache_1, $composer_0, 0, 24);
        if (!invoke$lambda($hasFocus$delegate)) {
          $composer_0.f1x(1526639676);
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = $composer_0.t1z($requester);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_2 = $composer_0.r1z();
          var tmp_13;
          if (invalid_1 ? true : it_2 === Companion_getInstance_1().t1y_1) {
            // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_2 = main$lambda$lambda$lambda$slambda_0($requester, null);
            $composer_0.s1z(value_2);
            tmp_13 = value_2;
          } else {
            tmp_13 = it_2;
          }
          var tmp_14 = tmp_13;
          var tmpCache_2 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
          $composer_0.h1x();
          LaunchedEffect$composable(Unit_instance, tmpCache_2, $composer_0, 6);
        }
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_instance;
        }
        tmp = tmp_15;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function main$lambda$lambda($events) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(76758591, $changed, -1, 'main.<anonymous>.<anonymous> (Main.kt:34)');
        }
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
        if (false ? true : it === Companion_getInstance_1().t1y_1) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var value = new FocusRequester();
          $composer_1.s1z(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_1.h1x();
        var requester = tmp0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.f1x(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.r1z();
        var tmp_2;
        if (false ? true : it_0 === Companion_getInstance_1().t1y_1) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = mutableStateOf(false);
          $composer_2.s1z(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_2.h1x();
        var hasFocus$delegate = tmp0_0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.f1x(547886695);
        sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.r1z();
        var tmp_4;
        if (false ? true : it_1 === Companion_getInstance_1().t1y_1) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_5 = _Dp___init__impl__ms3zkb(0);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$11 = _Dp___init__impl__ms3zkb(0);
          var value_1 = mutableStateOf(new ScreenSize(tmp_5, tmp$ret$11));
          $composer_3.s1z(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_6 = tmp_4;
        var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_3.h1x();
        var screenSize$delegate = tmp0_1;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_4 = $composer_0;
        $composer_4.f1x(547886695);
        sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_4.r1z();
        var tmp_7;
        if (false ? true : it_2 === Companion_getInstance_1().t1y_1) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = CoroutineScope(SupervisorJob().ef(Dispatchers_getInstance().lp()));
          $composer_4.s1z(value_2);
          tmp_7 = value_2;
        } else {
          tmp_7 = it_2;
        }
        var tmp_8 = tmp_7;
        var tmp0_2 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_4.h1x();
        var eventScope = tmp0_2;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_9, -1184081960, true, main$lambda$lambda$lambda($events, screenSize$delegate, requester, hasFocus$delegate, eventScope));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_5 = $composer_0;
        $composer_5.f1x(-838505973);
        sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_5.t1z(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_5.r1z();
        var tmp_10;
        if (invalid ? true : it_3 === Companion_getInstance_1().t1y_1) {
          // Inline function 'main.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_5.s1z(value_3);
          tmp_10 = value_3;
        } else {
          tmp_10 = it_3;
        }
        var tmp_11 = tmp_10;
        var tmp0_3 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_5.h1x();
        R2KAppTheme$composable(false, tmp0_3, $composer_0, 48, 1);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_instance;
        }
        tmp = tmp_12;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function main$lambda($events) {
    return function () {
      CanvasBasedWindow$composable('R2K App', VOID, VOID, VOID, ComposableLambda$invoke$ref(composableLambdaInstance(76758591, true, main$lambda$lambda($events))));
      return Unit_instance;
    };
  }
  function onKeyEvent$slambda($events, resultContinuation) {
    this.ugn_1 = $events;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(onKeyEvent$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(onKeyEvent$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(onKeyEvent$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.ugn_1.n11(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 2) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(onKeyEvent$slambda).w1b = function ($this$launch, completion) {
    var i = new onKeyEvent$slambda(this.ugn_1, completion);
    i.vgn_1 = $this$launch;
    return i;
  };
  function onKeyEvent$slambda_0($events, resultContinuation) {
    var i = new onKeyEvent$slambda($events, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  main();
  return _;
}));

//# sourceMappingURL=R2KApp-web.js.map
