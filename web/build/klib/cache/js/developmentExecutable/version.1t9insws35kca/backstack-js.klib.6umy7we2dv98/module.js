(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-animation-core.js', './appyx-interactions-common.js', './compose-multiplatform-core-ui.js', './appyx-utils-multiplatform.js', './compose-multiplatform-core-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-animation-core.js'), require('./appyx-interactions-common.js'), require('./compose-multiplatform-core-ui.js'), require('./appyx-utils-multiplatform.js'), require('./compose-multiplatform-core-ui-geometry.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-backstack-commons'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'appyx-components-stable-backstack-commons'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-backstack-commons'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'appyx-components-stable-backstack-commons'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-backstack-commons'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'appyx-components-stable-backstack-commons'.");
    }
    if (typeof this['appyx-interactions-common'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-backstack-commons'. Its dependency 'appyx-interactions-common' was not found. Please, check whether 'appyx-interactions-common' is loaded prior to 'appyx-components-stable-backstack-commons'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-backstack-commons'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'appyx-components-stable-backstack-commons'.");
    }
    if (typeof this['appyx-utils-multiplatform'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-backstack-commons'. Its dependency 'appyx-utils-multiplatform' was not found. Please, check whether 'appyx-utils-multiplatform' is loaded prior to 'appyx-components-stable-backstack-commons'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-backstack-commons'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'appyx-components-stable-backstack-commons'.");
    }
    root['appyx-components-stable-backstack-commons'] = factory(typeof this['appyx-components-stable-backstack-commons'] === 'undefined' ? {} : this['appyx-components-stable-backstack-commons'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-animation-core'], this['appyx-interactions-common'], this['compose-multiplatform-core-ui'], this['appyx-utils-multiplatform'], this['compose-multiplatform-core-ui-geometry']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_appyx_appyx_interactions_appyx_interactions, kotlin_org_jetbrains_compose_ui_ui, kotlin_appyx_utils_multiplatform, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.ob;
  var Unit_getInstance = kotlin_kotlin.$_$.b5;
  var protoOf = kotlin_kotlin.$_$.ud;
  var THROW_CCE = kotlin_kotlin.$_$.qh;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.fd;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var VOID = kotlin_kotlin.$_$.e;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ya;
  var classMeta = kotlin_kotlin.$_$.hc;
  var setMetadataFor = kotlin_kotlin.$_$.vd;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var listOf = kotlin_kotlin.$_$.b9;
  var awaitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var BaseMutableUiState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.c1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.o9;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r2;
  var Alpha = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.x;
  var SuspendFunction1 = kotlin_kotlin.$_$.qb;
  var listOf_0 = kotlin_kotlin.$_$.c9;
  var PositionAlignment = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.v;
  var Shadow = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.b1;
  var ColorOverlay = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.z;
  var Noop = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.n;
  var BaseAppyxComponent = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.e;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var GestureSettleConfig = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.q;
  var emptyList = kotlin_kotlin.$_$.p7;
  var hashCode = kotlin_kotlin.$_$.uc;
  var equals = kotlin_kotlin.$_$.lc;
  var Parcelable = kotlin_appyx_utils_multiplatform.$_$.a;
  var objectCreate = kotlin_kotlin.$_$.sd;
  var BaseTransitionModel = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.c;
  var last = kotlin_kotlin.$_$.x8;
  var asElement = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.g1;
  var take = kotlin_kotlin.$_$.ca;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var plus = kotlin_kotlin.$_$.n9;
  var plus_0 = kotlin_kotlin.$_$.m9;
  var toSet = kotlin_kotlin.$_$.pa;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var mapState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.i1;
  var BaseBackPressHandlerStrategy = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.a;
  var lazy = kotlin_kotlin.$_$.qi;
  var KProperty1 = kotlin_kotlin.$_$.df;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sc;
  var Mode_KEYFRAME_getInstance = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.k1;
  var BaseOperation = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.b;
  var dropLast = kotlin_kotlin.$_$.o7;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var BaseVisualisation = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.h1;
  var get_DefaultAnimationSpec = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.t;
  var Target = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.w;
  var MatchedTargetUiState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.d1;
  var Noop_0 = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.m;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Gesture_init_$Create$ = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.n1;
  var dragHorizontalDirection = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.r;
  var HorizontalDirection_RIGHT_getInstance = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.l1;
  var onStartDrag = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.o;
  var GestureFactory = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.p;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var Target_0 = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.a1;
  var Target_1 = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.y;
  var checkIndexOverflow = kotlin_kotlin.$_$.p6;
  var coerceIn = kotlin_kotlin.$_$.se;
  var OutsideAlignment = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.u;
  var Target_init_$Create$ = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.o1;
  var Companion_getInstance_0 = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.q1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MutableUiState$animateTo$slambda, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$lerpTo$slambda, 'MutableUiState$lerpTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($animateToCOROUTINE$0, '$animateToCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(MutableUiState, 'MutableUiState', classMeta, BaseMutableUiState, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(MutableUiState$animateTo$slambda_1, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$animateTo$slambda_3, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$animateTo$slambda_5, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$animateTo$slambda_7, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$lerpTo$slambda_1, 'MutableUiState$lerpTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($animateToCOROUTINE$1, '$animateToCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($snapToCOROUTINE$2, '$snapToCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(MutableUiState_0, 'MutableUiState', classMeta, BaseMutableUiState, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(MutableUiState$animateTo$slambda_9, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$animateTo$slambda_11, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$lerpTo$slambda_3, 'MutableUiState$lerpTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($animateToCOROUTINE$3, '$animateToCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor($snapToCOROUTINE$4, '$snapToCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(MutableUiState_1, 'MutableUiState', classMeta, BaseMutableUiState, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(BackStack, 'BackStack', classMeta, BaseAppyxComponent);
  setMetadataFor(State, 'State', classMeta, VOID, [Parcelable]);
  setMetadataFor(BackStackModel, 'BackStackModel', classMeta, BaseTransitionModel);
  setMetadataFor(PopBackstackStrategy, 'PopBackstackStrategy', classMeta, BaseBackPressHandlerStrategy);
  setMetadataFor(Pop, 'Pop', classMeta, BaseOperation, VOID, Pop);
  setMetadataFor(Push, 'Push', classMeta, BaseOperation);
  setMetadataFor(Replace, 'Replace', classMeta, BaseOperation);
  setMetadataFor(BackStackFader, 'BackStackFader', classMeta, BaseVisualisation);
  setMetadataFor(TargetUiState, 'TargetUiState', classMeta);
  setMetadataFor(Gestures, 'Gestures', classMeta, VOID, [GestureFactory]);
  setMetadataFor(BackStackParallax, 'BackStackParallax', classMeta, BaseVisualisation);
  setMetadataFor(TargetUiState_0, 'TargetUiState', classMeta);
  setMetadataFor(BackStackSlider, 'BackStackSlider', classMeta, BaseVisualisation);
  setMetadataFor(TargetUiState_1, 'TargetUiState', classMeta);
  //endregion
  function get_$stableprop() {
    return 0;
  }
  function MutableUiState$animateTo$slambda(this$0, $target, $springSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$target_1 = $target;
    this.$springSpec_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$animateTo$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.alpha_1.animateTo$default_bj1666_k$(this.$target_1.get_alpha_iooth1_k$().get_value_j01efc_k$(), spring(this.$springSpec_1.get_dampingRatio_syjss2_k$(), this.$springSpec_1.get_stiffness_dt2sgm_k$()), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda(this.this$0__1, this.$target_1, this.$springSpec_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(MutableUiState$animateTo$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$animateTo$slambda_0(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$lerpTo$slambda(this$0, $start, $end, $fraction, resultContinuation) {
    this.this$0__1 = this$0;
    this.$start_1 = $start;
    this.$end_1 = $end;
    this.$fraction_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$lerpTo$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$lerpTo$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$lerpTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.alpha_1.lerpTo_uziakj_k$(this.$start_1.get_alpha_iooth1_k$(), this.$end_1.get_alpha_iooth1_k$(), this.$fraction_1, this);
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
  protoOf(MutableUiState$lerpTo$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MutableUiState$lerpTo$slambda(this.this$0__1, this.$start_1, this.$end_1, this.$fraction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MutableUiState$lerpTo$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$lerpTo$slambda_0(this$0, $start, $end, $fraction, resultContinuation) {
    var i = new MutableUiState$lerpTo$slambda(this$0, $start, $end, $fraction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateToCOROUTINE$0(_this__u8e3s4, scope, target, springSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.scope_1 = scope;
    this.target_1 = target;
    this.springSpec_1 = springSpec;
  }
  protoOf($animateToCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitAll(listOf(async(this.scope_1, VOID, VOID, MutableUiState$animateTo$slambda_0(this._this__u8e3s4__1, this.target_1, this.springSpec_1, null))), this);
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
  function MutableUiState(uiContext, alpha) {
    BaseMutableUiState.call(this, uiContext, listOf(alpha));
    this.alpha_1 = alpha;
    this.combinedMotionPropertyModifier_1 = Companion_getInstance().then_g5qrxq_k$(this.alpha_1.get_modifier_t1pq5c_k$());
    this.$stable_2 = 0;
  }
  protoOf(MutableUiState).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(MutableUiState).get_combinedMotionPropertyModifier_g33v2o_k$ = function () {
    return this.combinedMotionPropertyModifier_1;
  };
  protoOf(MutableUiState).animateTo_3gy8gb_k$ = function (scope, target, springSpec, $completion) {
    var tmp = new $animateToCOROUTINE$0(this, scope, target, springSpec, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState).animateTo_q9i1fk_k$ = function (scope, target, springSpec, $completion) {
    return this.animateTo_3gy8gb_k$(scope, target instanceof TargetUiState ? target : THROW_CCE(), springSpec, $completion);
  };
  protoOf(MutableUiState).snapTo_mqjh3y_k$ = function (target, $completion) {
    return this.alpha_1.snapTo_o5pd1b_k$(target.get_alpha_iooth1_k$().get_value_j01efc_k$(), $completion);
  };
  protoOf(MutableUiState).snapTo_w9lkk7_k$ = function (target, $completion) {
    return this.snapTo_mqjh3y_k$(target instanceof TargetUiState ? target : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState).lerpTo_7t807s_k$ = function (scope, start, end, fraction) {
    launch(scope, VOID, VOID, MutableUiState$lerpTo$slambda_0(this, start, end, fraction, null));
  };
  protoOf(MutableUiState).lerpTo_8cl9oe_k$ = function (scope, start, end, fraction) {
    var tmp = start instanceof TargetUiState ? start : THROW_CCE();
    return this.lerpTo_7t807s_k$(scope, tmp, end instanceof TargetUiState ? end : THROW_CCE(), fraction);
  };
  function toMutableState(_this__u8e3s4, uiContext) {
    return new MutableUiState(uiContext, new Alpha(uiContext.get_coroutineScope_5k7h45_k$(), _this__u8e3s4.get_alpha_iooth1_k$()));
  }
  function get_$stableprop_0() {
    return 0;
  }
  function MutableUiState$animateTo$slambda_1(this$0, $target, $springSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$target_1 = $target;
    this.$springSpec_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_1).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$animateTo$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.positionAlignment_1.animateTo$default_bj1666_k$(this.$target_1.get_positionAlignment_nh25n5_k$().get_value_j01efc_k$(), spring(this.$springSpec_1.get_dampingRatio_syjss2_k$(), this.$springSpec_1.get_stiffness_dt2sgm_k$()), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_1).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_1(this.this$0__1, this.$target_1, this.$springSpec_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(MutableUiState$animateTo$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$animateTo$slambda_2(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_1(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$animateTo$slambda_3(this$0, $target, $springSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$target_1 = $target;
    this.$springSpec_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_3).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$animateTo$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.shadow_1.animateTo$default_bj1666_k$(this.$target_1.get_shadow_jgtb8p_k$().get_value_j01efc_k$(), spring(this.$springSpec_1.get_dampingRatio_syjss2_k$(), this.$springSpec_1.get_stiffness_dt2sgm_k$()), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_3).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_3(this.this$0__1, this.$target_1, this.$springSpec_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(MutableUiState$animateTo$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$animateTo$slambda_4(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_3(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$animateTo$slambda_5(this$0, $target, $springSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$target_1 = $target;
    this.$springSpec_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_5).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$animateTo$slambda_5).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.colorOverlay_1.animateTo$default_bj1666_k$(this.$target_1.get_colorOverlay_nyfg6u_k$().get_value_j01efc_k$(), spring(this.$springSpec_1.get_dampingRatio_syjss2_k$(), this.$springSpec_1.get_stiffness_dt2sgm_k$()), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_5).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_5(this.this$0__1, this.$target_1, this.$springSpec_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(MutableUiState$animateTo$slambda_5).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$animateTo$slambda_6(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_5(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$animateTo$slambda_7(this$0, $target, $springSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$target_1 = $target;
    this.$springSpec_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_7).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$animateTo$slambda_7).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.alpha_1.animateTo$default_bj1666_k$(this.$target_1.get_alpha_iooth1_k$().get_value_j01efc_k$(), spring(this.$springSpec_1.get_dampingRatio_syjss2_k$(), this.$springSpec_1.get_stiffness_dt2sgm_k$()), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_7).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_7(this.this$0__1, this.$target_1, this.$springSpec_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(MutableUiState$animateTo$slambda_7).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$animateTo$slambda_8(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_7(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$lerpTo$slambda_1(this$0, $start, $end, $fraction, resultContinuation) {
    this.this$0__1 = this$0;
    this.$start_1 = $start;
    this.$end_1 = $end;
    this.$fraction_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$lerpTo$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$lerpTo$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$lerpTo$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.positionAlignment_1.lerpTo_1bez1r_k$(this.$start_1.get_positionAlignment_nh25n5_k$(), this.$end_1.get_positionAlignment_nh25n5_k$(), this.$fraction_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.this$0__1.shadow_1.lerpTo_yrf6dt_k$(this.$start_1.get_shadow_jgtb8p_k$(), this.$end_1.get_shadow_jgtb8p_k$(), this.$fraction_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.this$0__1.colorOverlay_1.lerpTo_yys3nz_k$(this.$start_1.get_colorOverlay_nyfg6u_k$(), this.$end_1.get_colorOverlay_nyfg6u_k$(), this.$fraction_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.this$0__1.alpha_1.lerpTo_uziakj_k$(this.$start_1.get_alpha_iooth1_k$(), this.$end_1.get_alpha_iooth1_k$(), this.$fraction_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutableUiState$lerpTo$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MutableUiState$lerpTo$slambda_1(this.this$0__1, this.$start_1, this.$end_1, this.$fraction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MutableUiState$lerpTo$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$lerpTo$slambda_2(this$0, $start, $end, $fraction, resultContinuation) {
    var i = new MutableUiState$lerpTo$slambda_1(this$0, $start, $end, $fraction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateToCOROUTINE$1(_this__u8e3s4, scope, target, springSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.scope_1 = scope;
    this.target_1 = target;
    this.springSpec_1 = springSpec;
  }
  protoOf($animateToCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = async(this.scope_1, VOID, VOID, MutableUiState$animateTo$slambda_2(this._this__u8e3s4__1, this.target_1, this.springSpec_1, null));
            var tmp_1 = async(this.scope_1, VOID, VOID, MutableUiState$animateTo$slambda_4(this._this__u8e3s4__1, this.target_1, this.springSpec_1, null));
            var tmp_2 = async(this.scope_1, VOID, VOID, MutableUiState$animateTo$slambda_6(this._this__u8e3s4__1, this.target_1, this.springSpec_1, null));
            suspendResult = awaitAll(listOf_0([tmp_0, tmp_1, tmp_2, async(this.scope_1, VOID, VOID, MutableUiState$animateTo$slambda_8(this._this__u8e3s4__1, this.target_1, this.springSpec_1, null))]), this);
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
  function $snapToCOROUTINE$2(_this__u8e3s4, target, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.target_1 = target;
  }
  protoOf($snapToCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.positionAlignment_1.snapTo_o5pd1b_k$(this.target_1.get_positionAlignment_nh25n5_k$().get_value_j01efc_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.shadow_1.snapTo_o5pd1b_k$(this.target_1.get_shadow_jgtb8p_k$().get_value_j01efc_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = this._this__u8e3s4__1.colorOverlay_1.snapTo_o5pd1b_k$(this.target_1.get_colorOverlay_nyfg6u_k$().get_value_j01efc_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            suspendResult = this._this__u8e3s4__1.alpha_1.snapTo_o5pd1b_k$(this.target_1.get_alpha_iooth1_k$().get_value_j01efc_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function MutableUiState_0(uiContext, positionAlignment, shadow, colorOverlay, alpha) {
    BaseMutableUiState.call(this, uiContext, listOf_0([positionAlignment, shadow, colorOverlay, alpha]));
    this.positionAlignment_1 = positionAlignment;
    this.shadow_1 = shadow;
    this.colorOverlay_1 = colorOverlay;
    this.alpha_1 = alpha;
    this.combinedMotionPropertyModifier_1 = Companion_getInstance().then_g5qrxq_k$(this.positionAlignment_1.get_modifier_t1pq5c_k$()).then_g5qrxq_k$(this.shadow_1.get_modifier_t1pq5c_k$()).then_g5qrxq_k$(this.colorOverlay_1.get_modifier_t1pq5c_k$()).then_g5qrxq_k$(this.alpha_1.get_modifier_t1pq5c_k$());
    this.$stable_2 = 0;
  }
  protoOf(MutableUiState_0).get_positionAlignment_nh25n5_k$ = function () {
    return this.positionAlignment_1;
  };
  protoOf(MutableUiState_0).get_shadow_jgtb8p_k$ = function () {
    return this.shadow_1;
  };
  protoOf(MutableUiState_0).get_colorOverlay_nyfg6u_k$ = function () {
    return this.colorOverlay_1;
  };
  protoOf(MutableUiState_0).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(MutableUiState_0).get_combinedMotionPropertyModifier_g33v2o_k$ = function () {
    return this.combinedMotionPropertyModifier_1;
  };
  protoOf(MutableUiState_0).animateTo_az6bq_k$ = function (scope, target, springSpec, $completion) {
    var tmp = new $animateToCOROUTINE$1(this, scope, target, springSpec, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState_0).animateTo_q9i1fk_k$ = function (scope, target, springSpec, $completion) {
    return this.animateTo_az6bq_k$(scope, target instanceof TargetUiState_0 ? target : THROW_CCE(), springSpec, $completion);
  };
  protoOf(MutableUiState_0).snapTo_3lwdip_k$ = function (target, $completion) {
    var tmp = new $snapToCOROUTINE$2(this, target, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState_0).snapTo_w9lkk7_k$ = function (target, $completion) {
    return this.snapTo_3lwdip_k$(target instanceof TargetUiState_0 ? target : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState_0).lerpTo_54fnww_k$ = function (scope, start, end, fraction) {
    launch(scope, VOID, VOID, MutableUiState$lerpTo$slambda_2(this, start, end, fraction, null));
  };
  protoOf(MutableUiState_0).lerpTo_8cl9oe_k$ = function (scope, start, end, fraction) {
    var tmp = start instanceof TargetUiState_0 ? start : THROW_CCE();
    return this.lerpTo_54fnww_k$(scope, tmp, end instanceof TargetUiState_0 ? end : THROW_CCE(), fraction);
  };
  function toMutableState_0(_this__u8e3s4, uiContext) {
    return new MutableUiState_0(uiContext, new PositionAlignment(uiContext.get_coroutineScope_5k7h45_k$(), _this__u8e3s4.get_positionAlignment_nh25n5_k$()), new Shadow(uiContext.get_coroutineScope_5k7h45_k$(), _this__u8e3s4.get_shadow_jgtb8p_k$()), new ColorOverlay(uiContext.get_coroutineScope_5k7h45_k$(), _this__u8e3s4.get_colorOverlay_nyfg6u_k$()), new Alpha(uiContext.get_coroutineScope_5k7h45_k$(), _this__u8e3s4.get_alpha_iooth1_k$()));
  }
  function get_$stableprop_1() {
    return 0;
  }
  function MutableUiState$animateTo$slambda_9(this$0, $target, $springSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$target_1 = $target;
    this.$springSpec_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_9).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$animateTo$slambda_9).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.positionAlignment_1.animateTo$default_bj1666_k$(this.$target_1.get_positionAlignment_nh25n5_k$().get_value_j01efc_k$(), spring(this.$springSpec_1.get_dampingRatio_syjss2_k$(), this.$springSpec_1.get_stiffness_dt2sgm_k$()), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_9).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_9(this.this$0__1, this.$target_1, this.$springSpec_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(MutableUiState$animateTo$slambda_9).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$animateTo$slambda_10(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_9(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$animateTo$slambda_11(this$0, $target, $springSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$target_1 = $target;
    this.$springSpec_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_11).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$animateTo$slambda_11).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.alpha_1.animateTo$default_bj1666_k$(this.$target_1.get_alpha_iooth1_k$().get_value_j01efc_k$(), spring(this.$springSpec_1.get_dampingRatio_syjss2_k$(), this.$springSpec_1.get_stiffness_dt2sgm_k$()), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_11).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_11(this.this$0__1, this.$target_1, this.$springSpec_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(MutableUiState$animateTo$slambda_11).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$animateTo$slambda_12(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_11(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$lerpTo$slambda_3(this$0, $start, $end, $fraction, resultContinuation) {
    this.this$0__1 = this$0;
    this.$start_1 = $start;
    this.$end_1 = $end;
    this.$fraction_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$lerpTo$slambda_3).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$lerpTo$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$lerpTo$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.positionAlignment_1.lerpTo_1bez1r_k$(this.$start_1.get_positionAlignment_nh25n5_k$(), this.$end_1.get_positionAlignment_nh25n5_k$(), this.$fraction_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.this$0__1.alpha_1.lerpTo_uziakj_k$(this.$start_1.get_alpha_iooth1_k$(), this.$end_1.get_alpha_iooth1_k$(), this.$fraction_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutableUiState$lerpTo$slambda_3).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MutableUiState$lerpTo$slambda_3(this.this$0__1, this.$start_1, this.$end_1, this.$fraction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MutableUiState$lerpTo$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$lerpTo$slambda_4(this$0, $start, $end, $fraction, resultContinuation) {
    var i = new MutableUiState$lerpTo$slambda_3(this$0, $start, $end, $fraction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateToCOROUTINE$3(_this__u8e3s4, scope, target, springSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.scope_1 = scope;
    this.target_1 = target;
    this.springSpec_1 = springSpec;
  }
  protoOf($animateToCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = async(this.scope_1, VOID, VOID, MutableUiState$animateTo$slambda_10(this._this__u8e3s4__1, this.target_1, this.springSpec_1, null));
            suspendResult = awaitAll(listOf_0([tmp_0, async(this.scope_1, VOID, VOID, MutableUiState$animateTo$slambda_12(this._this__u8e3s4__1, this.target_1, this.springSpec_1, null))]), this);
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
  function $snapToCOROUTINE$4(_this__u8e3s4, target, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.target_1 = target;
  }
  protoOf($snapToCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.positionAlignment_1.snapTo_o5pd1b_k$(this.target_1.get_positionAlignment_nh25n5_k$().get_value_j01efc_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.alpha_1.snapTo_o5pd1b_k$(this.target_1.get_alpha_iooth1_k$().get_value_j01efc_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function MutableUiState_1(uiContext, positionAlignment, alpha) {
    BaseMutableUiState.call(this, uiContext, listOf_0([positionAlignment, alpha]));
    this.positionAlignment_1 = positionAlignment;
    this.alpha_1 = alpha;
    this.combinedMotionPropertyModifier_1 = Companion_getInstance().then_g5qrxq_k$(this.positionAlignment_1.get_modifier_t1pq5c_k$()).then_g5qrxq_k$(this.alpha_1.get_modifier_t1pq5c_k$());
    this.$stable_2 = 0;
  }
  protoOf(MutableUiState_1).get_positionAlignment_nh25n5_k$ = function () {
    return this.positionAlignment_1;
  };
  protoOf(MutableUiState_1).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(MutableUiState_1).get_combinedMotionPropertyModifier_g33v2o_k$ = function () {
    return this.combinedMotionPropertyModifier_1;
  };
  protoOf(MutableUiState_1).animateTo_yqdekc_k$ = function (scope, target, springSpec, $completion) {
    var tmp = new $animateToCOROUTINE$3(this, scope, target, springSpec, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState_1).animateTo_q9i1fk_k$ = function (scope, target, springSpec, $completion) {
    return this.animateTo_yqdekc_k$(scope, target instanceof TargetUiState_1 ? target : THROW_CCE(), springSpec, $completion);
  };
  protoOf(MutableUiState_1).snapTo_o38b2d_k$ = function (target, $completion) {
    var tmp = new $snapToCOROUTINE$4(this, target, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState_1).snapTo_w9lkk7_k$ = function (target, $completion) {
    return this.snapTo_o38b2d_k$(target instanceof TargetUiState_1 ? target : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState_1).lerpTo_v2jjg0_k$ = function (scope, start, end, fraction) {
    launch(scope, VOID, VOID, MutableUiState$lerpTo$slambda_4(this, start, end, fraction, null));
  };
  protoOf(MutableUiState_1).lerpTo_8cl9oe_k$ = function (scope, start, end, fraction) {
    var tmp = start instanceof TargetUiState_1 ? start : THROW_CCE();
    return this.lerpTo_v2jjg0_k$(scope, tmp, end instanceof TargetUiState_1 ? end : THROW_CCE(), fraction);
  };
  function toMutableState_1(_this__u8e3s4, uiContext) {
    return new MutableUiState_1(uiContext, new PositionAlignment(uiContext.get_coroutineScope_5k7h45_k$(), _this__u8e3s4.get_positionAlignment_nh25n5_k$()), new Alpha(uiContext.get_coroutineScope_5k7h45_k$(), _this__u8e3s4.get_alpha_iooth1_k$()));
  }
  function get_$stableprop_2() {
    return 0;
  }
  function BackStack$_init_$lambda_suo4uu(it) {
    return new Noop();
  }
  function BackStack(scope, model, visualisation, animationSpec, gestureFactory, gestureSettleConfig, backPressStrategy, disableAnimations, isDebug) {
    scope = scope === VOID ? CoroutineScope_0(SupervisorJob().plus_s13ygv_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$())) : scope;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (gestureFactory === VOID) {
      tmp = BackStack$_init_$lambda_suo4uu;
    } else {
      tmp = gestureFactory;
    }
    gestureFactory = tmp;
    gestureSettleConfig = gestureSettleConfig === VOID ? new GestureSettleConfig() : gestureSettleConfig;
    backPressStrategy = backPressStrategy === VOID ? new PopBackstackStrategy(scope) : backPressStrategy;
    disableAnimations = disableAnimations === VOID ? false : disableAnimations;
    isDebug = isDebug === VOID ? false : isDebug;
    BaseAppyxComponent.call(this, scope, model, visualisation, gestureFactory, animationSpec, gestureSettleConfig, backPressStrategy, VOID, disableAnimations, isDebug);
    this.model_2 = model;
    this.$stable_2 = 0;
  }
  protoOf(BackStack).get_model_ivc0lc_k$ = function () {
    return this.model_2;
  };
  function get_$stableprop_3() {
    return 0;
  }
  function State(created, active, stashed, destroyed) {
    var tmp;
    if (created === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = created;
    }
    created = tmp;
    var tmp_0;
    if (stashed === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = stashed;
    }
    stashed = tmp_0;
    var tmp_1;
    if (destroyed === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_1 = emptyList();
    } else {
      tmp_1 = destroyed;
    }
    destroyed = tmp_1;
    this.created_1 = created;
    this.active_1 = active;
    this.stashed_1 = stashed;
    this.destroyed_1 = destroyed;
    this.$stable_1 = 0;
  }
  protoOf(State).get_created_i9xfr3_k$ = function () {
    return this.created_1;
  };
  protoOf(State).get_active_avldsf_k$ = function () {
    return this.active_1;
  };
  protoOf(State).get_stashed_u3yxat_k$ = function () {
    return this.stashed_1;
  };
  protoOf(State).get_destroyed_tnq174_k$ = function () {
    return this.destroyed_1;
  };
  protoOf(State).component1_7eebsc_k$ = function () {
    return this.created_1;
  };
  protoOf(State).component2_7eebsb_k$ = function () {
    return this.active_1;
  };
  protoOf(State).component3_7eebsa_k$ = function () {
    return this.stashed_1;
  };
  protoOf(State).component4_7eebs9_k$ = function () {
    return this.destroyed_1;
  };
  protoOf(State).copy_kokmb9_k$ = function (created, active, stashed, destroyed) {
    return new State(created, active, stashed, destroyed);
  };
  protoOf(State).copy$default_wxxm07_k$ = function (created, active, stashed, destroyed, $super) {
    created = created === VOID ? this.created_1 : created;
    active = active === VOID ? this.active_1 : active;
    stashed = stashed === VOID ? this.stashed_1 : stashed;
    destroyed = destroyed === VOID ? this.destroyed_1 : destroyed;
    return $super === VOID ? this.copy_kokmb9_k$(created, active, stashed, destroyed) : $super.copy_kokmb9_k$.call(this, created, active, stashed, destroyed);
  };
  protoOf(State).toString = function () {
    return 'State(created=' + this.created_1 + ', active=' + this.active_1 + ', stashed=' + this.stashed_1 + ', destroyed=' + this.destroyed_1 + ')';
  };
  protoOf(State).hashCode = function () {
    var result = hashCode(this.created_1);
    result = imul(result, 31) + this.active_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.stashed_1) | 0;
    result = imul(result, 31) + hashCode(this.destroyed_1) | 0;
    return result;
  };
  protoOf(State).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof State))
      return false;
    var tmp0_other_with_cast = other instanceof State ? other : THROW_CCE();
    if (!equals(this.created_1, tmp0_other_with_cast.created_1))
      return false;
    if (!this.active_1.equals(tmp0_other_with_cast.active_1))
      return false;
    if (!equals(this.stashed_1, tmp0_other_with_cast.stashed_1))
      return false;
    if (!equals(this.destroyed_1, tmp0_other_with_cast.destroyed_1))
      return false;
    return true;
  };
  function BackStackModel_init_$Init$(initialTarget, savedStateMap, $this) {
    BackStackModel.call($this, listOf(initialTarget), savedStateMap);
    return $this;
  }
  function BackStackModel_init_$Create$(initialTarget, savedStateMap) {
    return BackStackModel_init_$Init$(initialTarget, savedStateMap, objectCreate(protoOf(BackStackModel)));
  }
  function get_$stableprop_4() {
    return 0;
  }
  function BackStackModel(initialTargets, savedStateMap) {
    BaseTransitionModel.call(this, VOID, VOID, savedStateMap);
    var tmp = this;
    var tmp_0 = asElement(last(initialTargets));
    // Inline function 'kotlin.collections.map' call
    var this_0 = take(initialTargets, initialTargets.get_size_woubt6_k$() - 1 | 0);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.backstack.BackStackModel.initialState.<anonymous>' call
      var tmp$ret$0 = asElement(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.initialState_1 = new State(VOID, tmp_0, destination);
    this.$stable_2 = 0;
  }
  protoOf(BackStackModel).availableElements_hj3gem_k$ = function (_this__u8e3s4) {
    return toSet(plus_0(plus_0(plus(_this__u8e3s4.created_1, _this__u8e3s4.active_1), _this__u8e3s4.stashed_1), _this__u8e3s4.destroyed_1));
  };
  protoOf(BackStackModel).availableElements_ykqj3s_k$ = function (_this__u8e3s4) {
    return this.availableElements_hj3gem_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackModel).destroyedElements_w7vn9e_k$ = function (_this__u8e3s4) {
    return toSet(_this__u8e3s4.destroyed_1);
  };
  protoOf(BackStackModel).destroyedElements_s89ke0_k$ = function (_this__u8e3s4) {
    return this.destroyedElements_w7vn9e_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackModel).removeDestroyedElement_6qauuj_k$ = function (_this__u8e3s4, element) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = _this__u8e3s4.destroyed_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.backstack.BackStackModel.removeDestroyedElement.<anonymous>' call
      if (!element_0.equals(element)) {
        destination.add_utx5q5_k$(element_0);
      }
    }
    return _this__u8e3s4.copy$default_wxxm07_k$(VOID, VOID, VOID, destination);
  };
  protoOf(BackStackModel).removeDestroyedElement_bziy6b_k$ = function (_this__u8e3s4, element) {
    return this.removeDestroyedElement_6qauuj_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE(), element);
  };
  protoOf(BackStackModel).removeDestroyedElements_myclgi_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.copy$default_wxxm07_k$(VOID, VOID, VOID, emptyList());
  };
  protoOf(BackStackModel).removeDestroyedElements_hkzkkk_k$ = function (_this__u8e3s4) {
    return this.removeDestroyedElements_myclgi_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackModel).get_initialState_2eu9l6_k$ = function () {
    return this.initialState_1;
  };
  function get_$stableprop_5() {
    return 0;
  }
  function PopBackstackStrategy$canHandleBackPress$delegate$lambda$lambda(output) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !output.get_currentTargetState_l0vn00_k$().get_stashed_u3yxat_k$().isEmpty_y1axqb_k$();
  }
  function PopBackstackStrategy$canHandleBackPress$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.get_transitionModel_6tgxrf_k$().get_output_hs4j62_k$();
      return mapState(tmp, this$0.scope_1, VOID, PopBackstackStrategy$canHandleBackPress$delegate$lambda$lambda);
    };
  }
  function PopBackstackStrategy(scope, animationSpec) {
    animationSpec = animationSpec === VOID ? null : animationSpec;
    BaseBackPressHandlerStrategy.call(this);
    this.scope_1 = scope;
    this.animationSpec_1 = animationSpec;
    var tmp = this;
    tmp.canHandleBackPress$delegate_1 = lazy(PopBackstackStrategy$canHandleBackPress$delegate$lambda(this));
    this.$stable_2 = 0;
  }
  protoOf(PopBackstackStrategy).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(PopBackstackStrategy).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(PopBackstackStrategy).get_canHandleBackPress_do39pp_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.canHandleBackPress$delegate_1;
    canHandleBackPress$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(PopBackstackStrategy).handleBackPress_wbgl2k_k$ = function () {
    var pop = new Pop();
    var tmp;
    if (pop.isApplicable_4lvmdv_k$(this.get_transitionModel_6tgxrf_k$().get_output_hs4j62_k$().get_value_j01efc_k$().get_currentTargetState_l0vn00_k$())) {
      this.get_appyxComponent_er08wq_k$().operation_o9y6c4_k$(new Pop(), this.animationSpec_1);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function canHandleBackPress$factory() {
    return getPropertyCallableRef('canHandleBackPress', 1, KProperty1, function (receiver) {
      return receiver.get_canHandleBackPress_do39pp_k$();
    }, null);
  }
  function pop(_this__u8e3s4, mode, animationSpec) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    _this__u8e3s4.operation_o9y6c4_k$(new Pop(mode), animationSpec);
  }
  function get_$stableprop_6() {
    return 8;
  }
  function Pop(mode) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    BaseOperation.call(this);
    this.mode_1 = mode;
    this.$stable_2 = 8;
  }
  protoOf(Pop).set_mode_yhptjw_k$ = function (_set____db54di) {
    this.mode_1 = _set____db54di;
  };
  protoOf(Pop).get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  protoOf(Pop).isApplicable_4lvmdv_k$ = function (state) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !state.get_stashed_u3yxat_k$().isEmpty_y1axqb_k$();
  };
  protoOf(Pop).isApplicable_aum5ae_k$ = function (state) {
    return this.isApplicable_4lvmdv_k$(state instanceof State ? state : THROW_CCE());
  };
  protoOf(Pop).createFromState_4shqxd_k$ = function (baseLineState) {
    return baseLineState;
  };
  protoOf(Pop).createFromState_qwyg08_k$ = function (baseLineState) {
    return this.createFromState_4shqxd_k$(baseLineState instanceof State ? baseLineState : THROW_CCE());
  };
  protoOf(Pop).createTargetState_drvc9k_k$ = function (fromState) {
    var tmp0_active = last(fromState.get_stashed_u3yxat_k$());
    var tmp1_destroyed = plus(fromState.get_destroyed_tnq174_k$(), fromState.get_active_avldsf_k$());
    var tmp2_stashed = dropLast(fromState.get_stashed_u3yxat_k$(), 1);
    return fromState.copy$default_wxxm07_k$(VOID, tmp0_active, tmp2_stashed, tmp1_destroyed);
  };
  protoOf(Pop).createTargetState_ldai3l_k$ = function (fromState) {
    return this.createTargetState_drvc9k_k$(fromState instanceof State ? fromState : THROW_CCE());
  };
  protoOf(Pop).equals = function (other) {
    return !(other == null) ? getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false;
  };
  protoOf(Pop).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  function push(_this__u8e3s4, interactionTarget, mode, animationSpec) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    _this__u8e3s4.operation_o9y6c4_k$(new Push(interactionTarget, mode), animationSpec);
  }
  function _get_interactionTarget__67faem($this) {
    return $this.interactionTarget_1;
  }
  function component1($this) {
    return $this.interactionTarget_1;
  }
  function get_$stableprop_7() {
    return 8;
  }
  function Push(interactionTarget, mode) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    BaseOperation.call(this);
    this.interactionTarget_1 = interactionTarget;
    this.mode_1 = mode;
    this.$stable_2 = 8;
  }
  protoOf(Push).set_mode_yhptjw_k$ = function (_set____db54di) {
    this.mode_1 = _set____db54di;
  };
  protoOf(Push).get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  protoOf(Push).isApplicable_4lvmdv_k$ = function (state) {
    return !equals(this.interactionTarget_1, state.get_active_avldsf_k$().get_interactionTarget_ay5ie_k$());
  };
  protoOf(Push).isApplicable_aum5ae_k$ = function (state) {
    return this.isApplicable_4lvmdv_k$(state instanceof State ? state : THROW_CCE());
  };
  protoOf(Push).createFromState_4shqxd_k$ = function (baseLineState) {
    return baseLineState.copy$default_wxxm07_k$(plus(baseLineState.get_created_i9xfr3_k$(), asElement(this.interactionTarget_1)));
  };
  protoOf(Push).createFromState_qwyg08_k$ = function (baseLineState) {
    return this.createFromState_4shqxd_k$(baseLineState instanceof State ? baseLineState : THROW_CCE());
  };
  protoOf(Push).createTargetState_drvc9k_k$ = function (fromState) {
    var tmp0_active = last(fromState.get_created_i9xfr3_k$());
    var tmp1_created = dropLast(fromState.get_created_i9xfr3_k$(), 1);
    var tmp2_stashed = plus(fromState.get_stashed_u3yxat_k$(), fromState.get_active_avldsf_k$());
    return fromState.copy$default_wxxm07_k$(tmp1_created, tmp0_active, tmp2_stashed);
  };
  protoOf(Push).createTargetState_ldai3l_k$ = function (fromState) {
    return this.createTargetState_drvc9k_k$(fromState instanceof State ? fromState : THROW_CCE());
  };
  protoOf(Push).component2_7eebsb_k$ = function () {
    return this.mode_1;
  };
  protoOf(Push).copy_kyjwea_k$ = function (interactionTarget, mode) {
    return new Push(interactionTarget, mode);
  };
  protoOf(Push).copy$default_jb3nth_k$ = function (interactionTarget, mode, $super) {
    interactionTarget = interactionTarget === VOID ? this.interactionTarget_1 : interactionTarget;
    mode = mode === VOID ? this.mode_1 : mode;
    return $super === VOID ? this.copy_kyjwea_k$(interactionTarget, mode) : $super.copy_kyjwea_k$.call(this, interactionTarget, mode);
  };
  protoOf(Push).toString = function () {
    return 'Push(interactionTarget=' + this.interactionTarget_1 + ', mode=' + this.mode_1 + ')';
  };
  protoOf(Push).hashCode = function () {
    var result = hashCode(this.interactionTarget_1);
    result = imul(result, 31) + this.mode_1.hashCode() | 0;
    return result;
  };
  protoOf(Push).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Push))
      return false;
    var tmp0_other_with_cast = other instanceof Push ? other : THROW_CCE();
    if (!equals(this.interactionTarget_1, tmp0_other_with_cast.interactionTarget_1))
      return false;
    if (!this.mode_1.equals(tmp0_other_with_cast.mode_1))
      return false;
    return true;
  };
  function replace(_this__u8e3s4, target, mode, animationSpec) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    _this__u8e3s4.operation_o9y6c4_k$(new Replace(target, mode), animationSpec);
  }
  function _get_interactionTarget__67faem_0($this) {
    return $this.interactionTarget_1;
  }
  function component1_0($this) {
    return $this.interactionTarget_1;
  }
  function get_$stableprop_8() {
    return 8;
  }
  function Replace(interactionTarget, mode) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    BaseOperation.call(this);
    this.interactionTarget_1 = interactionTarget;
    this.mode_1 = mode;
    this.$stable_2 = 8;
  }
  protoOf(Replace).set_mode_yhptjw_k$ = function (_set____db54di) {
    this.mode_1 = _set____db54di;
  };
  protoOf(Replace).get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  protoOf(Replace).isApplicable_4lvmdv_k$ = function (state) {
    return !equals(this.interactionTarget_1, state.get_active_avldsf_k$().get_interactionTarget_ay5ie_k$());
  };
  protoOf(Replace).isApplicable_aum5ae_k$ = function (state) {
    return this.isApplicable_4lvmdv_k$(state instanceof State ? state : THROW_CCE());
  };
  protoOf(Replace).createFromState_4shqxd_k$ = function (baseLineState) {
    return baseLineState.copy$default_wxxm07_k$(plus(baseLineState.get_created_i9xfr3_k$(), asElement(this.interactionTarget_1)));
  };
  protoOf(Replace).createFromState_qwyg08_k$ = function (baseLineState) {
    return this.createFromState_4shqxd_k$(baseLineState instanceof State ? baseLineState : THROW_CCE());
  };
  protoOf(Replace).createTargetState_drvc9k_k$ = function (fromState) {
    var tmp0_active = last(fromState.get_created_i9xfr3_k$());
    var tmp1_created = dropLast(fromState.get_created_i9xfr3_k$(), 1);
    var tmp2_destroyed = plus(fromState.get_destroyed_tnq174_k$(), fromState.get_active_avldsf_k$());
    return fromState.copy$default_wxxm07_k$(tmp1_created, tmp0_active, VOID, tmp2_destroyed);
  };
  protoOf(Replace).createTargetState_ldai3l_k$ = function (fromState) {
    return this.createTargetState_drvc9k_k$(fromState instanceof State ? fromState : THROW_CCE());
  };
  protoOf(Replace).component2_7eebsb_k$ = function () {
    return this.mode_1;
  };
  protoOf(Replace).copy_kyjwea_k$ = function (interactionTarget, mode) {
    return new Replace(interactionTarget, mode);
  };
  protoOf(Replace).copy$default_kyil51_k$ = function (interactionTarget, mode, $super) {
    interactionTarget = interactionTarget === VOID ? this.interactionTarget_1 : interactionTarget;
    mode = mode === VOID ? this.mode_1 : mode;
    return $super === VOID ? this.copy_kyjwea_k$(interactionTarget, mode) : $super.copy_kyjwea_k$.call(this, interactionTarget, mode);
  };
  protoOf(Replace).toString = function () {
    return 'Replace(interactionTarget=' + this.interactionTarget_1 + ', mode=' + this.mode_1 + ')';
  };
  protoOf(Replace).hashCode = function () {
    var result = hashCode(this.interactionTarget_1);
    result = imul(result, 31) + this.mode_1.hashCode() | 0;
    return result;
  };
  protoOf(Replace).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Replace))
      return false;
    var tmp0_other_with_cast = other instanceof Replace ? other : THROW_CCE();
    if (!equals(this.interactionTarget_1, tmp0_other_with_cast.interactionTarget_1))
      return false;
    if (!this.mode_1.equals(tmp0_other_with_cast.mode_1))
      return false;
    return true;
  };
  function _get_visible__9o6k2p($this) {
    return $this.visible_1;
  }
  function _get_hidden__i558wv($this) {
    return $this.hidden_1;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function BackStackFader(uiContext, defaultAnimationSpec) {
    defaultAnimationSpec = defaultAnimationSpec === VOID ? get_DefaultAnimationSpec() : defaultAnimationSpec;
    BaseVisualisation.call(this, uiContext, defaultAnimationSpec);
    this.visible_1 = new TargetUiState(new Target(1.0));
    this.hidden_1 = new TargetUiState(new Target(0.0));
    this.$stable_2 = 0;
  }
  protoOf(BackStackFader).toUiTargets_qula1n_k$ = function (_this__u8e3s4) {
    var tmp = listOf(new MatchedTargetUiState(_this__u8e3s4.get_active_avldsf_k$(), this.visible_1));
    // Inline function 'kotlin.collections.map' call
    var this_0 = plus_0(plus_0(_this__u8e3s4.get_created_i9xfr3_k$(), _this__u8e3s4.get_stashed_u3yxat_k$()), _this__u8e3s4.get_destroyed_tnq174_k$());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.backstack.ui.fader.BackStackFader.toUiTargets.<anonymous>' call
      var tmp$ret$0 = new MatchedTargetUiState(item, this.hidden_1);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return plus_0(tmp, destination);
  };
  protoOf(BackStackFader).toUiTargets_hl6jeq_k$ = function (_this__u8e3s4) {
    return this.toUiTargets_qula1n_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackFader).mutableUiStateFor_79h9sd_k$ = function (uiContext, targetUiState) {
    return toMutableState(targetUiState, uiContext);
  };
  protoOf(BackStackFader).mutableUiStateFor_fzsp1k_k$ = function (uiContext, targetUiState) {
    return this.mutableUiStateFor_79h9sd_k$(uiContext, targetUiState instanceof TargetUiState ? targetUiState : THROW_CCE());
  };
  function get_$stableprop_10() {
    return 0;
  }
  function TargetUiState(alpha) {
    this.alpha_1 = alpha;
    this.$stable_1 = 0;
  }
  protoOf(TargetUiState).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  function _get_transitionBounds__8e95sx($this) {
    return $this.transitionBounds_1;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function _get_slowOutFastInEasing__44qu94($this) {
    return $this.slowOutFastInEasing_1;
  }
  function _get_left__d9qyp0($this) {
    return $this.left_1;
  }
  function _get_right__bvz45n($this) {
    return $this.right_1;
  }
  function _get_bottom__w3218g($this) {
    return $this.bottom_1;
  }
  function _get_top__e6hfbw($this) {
    return $this.top_1;
  }
  function Gestures(transitionBounds) {
    this.transitionBounds_1 = transitionBounds;
    this.isContinuous_1 = false;
    this.$stable_1 = 0;
  }
  protoOf(Gestures).get_isContinuous_ob44bi_k$ = function () {
    return this.isContinuous_1;
  };
  protoOf(Gestures).createGesture_deesso_k$ = function (state, delta, density) {
    var tmp;
    if (dragHorizontalDirection(delta).equals(HorizontalDirection_RIGHT_getInstance())) {
      tmp = Gesture_init_$Create$(new Pop(), Offset(this.transitionBounds_1.get_widthPx_nfsdj9_k$(), 0.0));
    } else {
      tmp = new Noop_0();
    }
    return tmp;
  };
  protoOf(Gestures).createGesture_dk900z_k$ = function (state, delta, density) {
    return this.createGesture_deesso_k$(state instanceof State ? state : THROW_CCE(), delta, density);
  };
  function get_$stableprop_12() {
    return 0;
  }
  function BackStackParallax(uiContext, defaultAnimationSpec) {
    defaultAnimationSpec = defaultAnimationSpec === VOID ? get_DefaultAnimationSpec() : defaultAnimationSpec;
    BaseVisualisation.call(this, uiContext, defaultAnimationSpec);
    this.slowOutFastInEasing_1 = new CubicBezierEasing(1.0, 0.0, 1.0, 0.0);
    this.left_1 = TargetUiState_init_$Create$(-1.0, VOID, VOID, new Target(0.0));
    this.right_1 = TargetUiState_init_$Create$(1.0, VOID, new Target_0(0.0, this.slowOutFastInEasing_1));
    this.bottom_1 = TargetUiState_init_$Create$(-0.2, new Target_1(0.7));
    this.top_1 = TargetUiState_init_$Create$(0.0, VOID, new Target_0(25.0));
    this.$stable_2 = 0;
  }
  protoOf(BackStackParallax).toUiTargets_qula1n_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = _this__u8e3s4.get_stashed_u3yxat_k$();
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.backstack.ui.parallax.BackStackParallax.toUiTargets.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var tmp$ret$0 = new MatchedTargetUiState(item, index_0 === (_this__u8e3s4.get_stashed_u3yxat_k$().get_size_woubt6_k$() - 1 | 0) ? this.bottom_1 : this.left_1);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var stashed = destination;
    var tmp = plus_0(stashed, listOf(new MatchedTargetUiState(_this__u8e3s4.get_active_avldsf_k$(), this.top_1)));
    // Inline function 'kotlin.collections.map' call
    var this_1 = plus_0(_this__u8e3s4.get_created_i9xfr3_k$(), _this__u8e3s4.get_destroyed_tnq174_k$());
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.backstack.ui.parallax.BackStackParallax.toUiTargets.<anonymous>' call
      var tmp$ret$3 = new MatchedTargetUiState(item_0, this.right_1);
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    return plus_0(tmp, destination_0);
  };
  protoOf(BackStackParallax).toUiTargets_hl6jeq_k$ = function (_this__u8e3s4) {
    return this.toUiTargets_qula1n_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackParallax).mutableUiStateFor_d2hipg_k$ = function (uiContext, targetUiState) {
    return toMutableState_0(targetUiState, uiContext);
  };
  protoOf(BackStackParallax).mutableUiStateFor_fzsp1k_k$ = function (uiContext, targetUiState) {
    return this.mutableUiStateFor_d2hipg_k$(uiContext, targetUiState instanceof TargetUiState_0 ? targetUiState : THROW_CCE());
  };
  function TargetUiState_init_$Init$(offsetMultiplier, colorOverlay, shadow, alpha, $this) {
    colorOverlay = colorOverlay === VOID ? new Target_1(0.0) : colorOverlay;
    shadow = shadow === VOID ? new Target_0(0.0) : shadow;
    alpha = alpha === VOID ? new Target(1.0) : alpha;
    var tmp0_positionAlignment = Target_init_$Create$(new OutsideAlignment(coerceIn(offsetMultiplier, -0.5, 1.5), 0.0));
    TargetUiState_0.call($this, tmp0_positionAlignment, shadow, colorOverlay, alpha);
    return $this;
  }
  function TargetUiState_init_$Create$(offsetMultiplier, colorOverlay, shadow, alpha) {
    return TargetUiState_init_$Init$(offsetMultiplier, colorOverlay, shadow, alpha, objectCreate(protoOf(TargetUiState_0)));
  }
  function get_$stableprop_13() {
    return 0;
  }
  function TargetUiState_0(positionAlignment, shadow, colorOverlay, alpha) {
    positionAlignment = positionAlignment === VOID ? Target_init_$Create$(Companion_getInstance_0().get_InContainer_lzd7x_k$()) : positionAlignment;
    this.positionAlignment_1 = positionAlignment;
    this.shadow_1 = shadow;
    this.colorOverlay_1 = colorOverlay;
    this.alpha_1 = alpha;
    this.$stable_1 = 0;
  }
  protoOf(TargetUiState_0).get_positionAlignment_nh25n5_k$ = function () {
    return this.positionAlignment_1;
  };
  protoOf(TargetUiState_0).get_shadow_jgtb8p_k$ = function () {
    return this.shadow_1;
  };
  protoOf(TargetUiState_0).get_colorOverlay_nyfg6u_k$ = function () {
    return this.colorOverlay_1;
  };
  protoOf(TargetUiState_0).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  function _get_visible__9o6k2p_0($this) {
    return $this.visible_1;
  }
  function _get_fadeOut__r6nf1d($this) {
    return $this.fadeOut_1;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function BackStackSlider(uiContext) {
    BaseVisualisation.call(this, uiContext);
    this.visible_1 = new TargetUiState_1(Target_init_$Create$(Companion_getInstance_0().get_InContainer_lzd7x_k$()), new Target(1.0));
    this.fadeOut_1 = new TargetUiState_1(Target_init_$Create$(Companion_getInstance_0().get_InContainer_lzd7x_k$()), new Target(1.0));
    this.$stable_2 = 0;
  }
  protoOf(BackStackSlider).toUiTargets_qula1n_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.get_created_i9xfr3_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.backstack.ui.slider.BackStackSlider.toUiTargets.<anonymous>' call
      var tmp$ret$0 = new MatchedTargetUiState(item, this.visible_1.toOutsideRight_vmwjo2_k$());
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var tmp = destination;
    // Inline function 'kotlin.collections.map' call
    var this_1 = listOf(_this__u8e3s4.get_active_avldsf_k$());
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.backstack.ui.slider.BackStackSlider.toUiTargets.<anonymous>' call
      var tmp$ret$3 = new MatchedTargetUiState(item_0, this.visible_1.toNoOffset_8bmibz_k$());
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    var tmp_0 = plus_0(tmp, destination_0);
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_2 = _this__u8e3s4.get_stashed_u3yxat_k$();
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var index = 0;
    var tmp0_iterator_1 = this_2.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.backstack.ui.slider.BackStackSlider.toUiTargets.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var tmp$ret$6 = new MatchedTargetUiState(item_1, this.visible_1.toOutsideLeft_5ze77r_k$(index_0 - _this__u8e3s4.get_stashed_u3yxat_k$().get_size_woubt6_k$() | 0));
      destination_1.add_utx5q5_k$(tmp$ret$6);
    }
    var tmp_1 = plus_0(tmp_0, destination_1);
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_3 = _this__u8e3s4.get_destroyed_tnq174_k$();
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var index_1 = 0;
    var tmp0_iterator_2 = this_3.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var item_2 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.backstack.ui.slider.BackStackSlider.toUiTargets.<anonymous>' call
      var tmp1_0 = index_1;
      index_1 = tmp1_0 + 1 | 0;
      checkIndexOverflow(tmp1_0);
      var tmp$ret$9 = new MatchedTargetUiState(item_2, this.fadeOut_1.toOutsideRight_vmwjo2_k$());
      destination_2.add_utx5q5_k$(tmp$ret$9);
    }
    return plus_0(tmp_1, destination_2);
  };
  protoOf(BackStackSlider).toUiTargets_hl6jeq_k$ = function (_this__u8e3s4) {
    return this.toUiTargets_qula1n_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackSlider).mutableUiStateFor_664vr2_k$ = function (uiContext, targetUiState) {
    return toMutableState_1(targetUiState, uiContext);
  };
  protoOf(BackStackSlider).mutableUiStateFor_fzsp1k_k$ = function (uiContext, targetUiState) {
    return this.mutableUiStateFor_664vr2_k$(uiContext, targetUiState instanceof TargetUiState_1 ? targetUiState : THROW_CCE());
  };
  function get_$stableprop_15() {
    return 0;
  }
  function TargetUiState_1(positionAlignment, alpha) {
    this.positionAlignment_1 = positionAlignment;
    this.alpha_1 = alpha;
    this.$stable_1 = 0;
  }
  protoOf(TargetUiState_1).get_positionAlignment_nh25n5_k$ = function () {
    return this.positionAlignment_1;
  };
  protoOf(TargetUiState_1).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(TargetUiState_1).toOutsideLeft_5ze77r_k$ = function (multiplier) {
    return new TargetUiState_1(Target_init_$Create$(new OutsideAlignment(multiplier, 0.0)), this.alpha_1);
  };
  protoOf(TargetUiState_1).toOutsideRight_vmwjo2_k$ = function () {
    return new TargetUiState_1(Target_init_$Create$(Companion_getInstance_0().get_OutsideRight_i0f76o_k$()), this.alpha_1);
  };
  protoOf(TargetUiState_1).toNoOffset_8bmibz_k$ = function () {
    return new TargetUiState_1(Target_init_$Create$(Companion_getInstance_0().get_InContainer_lzd7x_k$()), this.alpha_1);
  };
  //region block: post-declaration
  protoOf(Gestures).onStartDrag_qsgty5_k$ = onStartDrag;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = pop;
  _.$_$.b = push;
  _.$_$.c = replace;
  _.$_$.d = BackStackFader;
  _.$_$.e = Gestures;
  _.$_$.f = BackStackParallax;
  _.$_$.g = BackStackSlider;
  _.$_$.h = BackStackModel;
  _.$_$.i = BackStack;
  _.$_$.j = BackStackModel_init_$Create$;
  //endregion
  return _;
}));
