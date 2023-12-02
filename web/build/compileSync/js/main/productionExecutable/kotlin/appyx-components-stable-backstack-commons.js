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
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var protoOf = kotlin_kotlin.$_$.r9;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var isInterface = kotlin_kotlin.$_$.h9;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var VOID = kotlin_kotlin.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var listOf = kotlin_kotlin.$_$.z5;
  var awaitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var BaseMutableUiState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.c1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var Alpha = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.x;
  var listOf_0 = kotlin_kotlin.$_$.a6;
  var PositionAlignment = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.v;
  var Shadow = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.b1;
  var ColorOverlay = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.z;
  var Noop = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.n;
  var BaseAppyxComponent = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.e;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var GestureSettleConfig = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.q;
  var emptyList = kotlin_kotlin.$_$.r4;
  var hashCode = kotlin_kotlin.$_$.c9;
  var equals = kotlin_kotlin.$_$.t8;
  var Parcelable = kotlin_appyx_utils_multiplatform.$_$.a;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var BaseTransitionModel = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.c;
  var last = kotlin_kotlin.$_$.v5;
  var asElement = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.g1;
  var take = kotlin_kotlin.$_$.w6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var plus = kotlin_kotlin.$_$.l6;
  var plus_0 = kotlin_kotlin.$_$.k6;
  var toSet = kotlin_kotlin.$_$.g7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var mapState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.i1;
  var BaseBackPressHandlerStrategy = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.a;
  var lazy = kotlin_kotlin.$_$.pd;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var Mode_KEYFRAME_getInstance = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.k1;
  var BaseOperation = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.b;
  var dropLast = kotlin_kotlin.$_$.q4;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
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
  var checkIndexOverflow = kotlin_kotlin.$_$.f4;
  var coerceIn = kotlin_kotlin.$_$.na;
  var OutsideAlignment = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.u;
  var Target_init_$Create$ = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.o1;
  var Companion_getInstance = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.q1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MutableUiState$animateTo$slambda, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$lerpTo$slambda, 'MutableUiState$lerpTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($animateToCOROUTINE$0, '$animateToCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(MutableUiState, 'MutableUiState', classMeta, BaseMutableUiState, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(MutableUiState$animateTo$slambda_1, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$animateTo$slambda_3, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$animateTo$slambda_5, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$animateTo$slambda_7, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$lerpTo$slambda_1, 'MutableUiState$lerpTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($animateToCOROUTINE$1, '$animateToCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($snapToCOROUTINE$2, '$snapToCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(MutableUiState_0, 'MutableUiState', classMeta, BaseMutableUiState, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(MutableUiState$animateTo$slambda_9, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$animateTo$slambda_11, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$lerpTo$slambda_3, 'MutableUiState$lerpTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
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
  function MutableUiState$animateTo$slambda(this$0, $target, $springSpec, resultContinuation) {
    this.eec_1 = this$0;
    this.fec_1 = $target;
    this.gec_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda).v1b = function ($this$async, $completion) {
    var tmp = this.w1b($this$async, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$animateTo$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.eec_1.sec_1.bdx(this.fec_1.vec_1.cdx_1, spring(this.gec_1.i8p_1, this.gec_1.j8p_1), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda).w1b = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda(this.eec_1, this.fec_1, this.gec_1, completion);
    i.hec_1 = $this$async;
    return i;
  };
  function MutableUiState$animateTo$slambda_0(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.v1b($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$lerpTo$slambda(this$0, $start, $end, $fraction, resultContinuation) {
    this.fed_1 = this$0;
    this.ged_1 = $start;
    this.hed_1 = $end;
    this.ied_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$lerpTo$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$lerpTo$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$lerpTo$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.fed_1.sec_1.vdx(this.ged_1.vec_1, this.hed_1.vec_1, this.ied_1, this);
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
  protoOf(MutableUiState$lerpTo$slambda).w1b = function ($this$launch, completion) {
    var i = new MutableUiState$lerpTo$slambda(this.fed_1, this.ged_1, this.hed_1, this.ied_1, completion);
    i.jed_1 = $this$launch;
    return i;
  };
  function MutableUiState$lerpTo$slambda_0(this$0, $start, $end, $fraction, resultContinuation) {
    var i = new MutableUiState$lerpTo$slambda(this$0, $start, $end, $fraction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateToCOROUTINE$0(_this__u8e3s4, scope, target, springSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sed_1 = _this__u8e3s4;
    this.ted_1 = scope;
    this.ued_1 = target;
    this.ved_1 = springSpec;
  }
  protoOf($animateToCOROUTINE$0).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = awaitAll(listOf(async(this.ted_1, VOID, VOID, MutableUiState$animateTo$slambda_0(this.sed_1, this.ued_1, this.ved_1, null))), this);
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
  function MutableUiState(uiContext, alpha) {
    BaseMutableUiState.call(this, uiContext, listOf(alpha));
    this.sec_1 = alpha;
    this.tec_1 = Companion_instance.c5j(this.sec_1.m5x());
    this.uec_1 = 0;
  }
  protoOf(MutableUiState).se3 = function () {
    return this.tec_1;
  };
  protoOf(MutableUiState).wed = function (scope, target, springSpec, $completion) {
    var tmp = new $animateToCOROUTINE$0(this, scope, target, springSpec, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState).we3 = function (scope, target, springSpec, $completion) {
    return this.wed(scope, target instanceof TargetUiState ? target : THROW_CCE(), springSpec, $completion);
  };
  protoOf(MutableUiState).xed = function (target, $completion) {
    return this.sec_1.d8p(target.vec_1.cdx_1, $completion);
  };
  protoOf(MutableUiState).ue3 = function (target, $completion) {
    return this.xed(target instanceof TargetUiState ? target : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState).yed = function (scope, start, end, fraction) {
    launch(scope, VOID, VOID, MutableUiState$lerpTo$slambda_0(this, start, end, fraction, null));
  };
  protoOf(MutableUiState).ve3 = function (scope, start, end, fraction) {
    var tmp = start instanceof TargetUiState ? start : THROW_CCE();
    return this.yed(scope, tmp, end instanceof TargetUiState ? end : THROW_CCE(), fraction);
  };
  function toMutableState(_this__u8e3s4, uiContext) {
    return new MutableUiState(uiContext, new Alpha(uiContext.hdu_1, _this__u8e3s4.vec_1));
  }
  function MutableUiState$animateTo$slambda_1(this$0, $target, $springSpec, resultContinuation) {
    this.hee_1 = this$0;
    this.iee_1 = $target;
    this.jee_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_1).v1b = function ($this$async, $completion) {
    var tmp = this.w1b($this$async, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$animateTo$slambda_1).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.hee_1.vee_1.bdx(this.iee_1.bef_1.te0_1, spring(this.jee_1.i8p_1, this.jee_1.j8p_1), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_1).w1b = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_1(this.hee_1, this.iee_1, this.jee_1, completion);
    i.kee_1 = $this$async;
    return i;
  };
  function MutableUiState$animateTo$slambda_2(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_1(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.v1b($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$animateTo$slambda_3(this$0, $target, $springSpec, resultContinuation) {
    this.oef_1 = this$0;
    this.pef_1 = $target;
    this.qef_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_3).v1b = function ($this$async, $completion) {
    var tmp = this.w1b($this$async, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$animateTo$slambda_3).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_3).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.oef_1.wee_1.bdx(this.pef_1.cef_1.pdy_1, spring(this.qef_1.i8p_1, this.qef_1.j8p_1), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_3).w1b = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_3(this.oef_1, this.pef_1, this.qef_1, completion);
    i.ref_1 = $this$async;
    return i;
  };
  function MutableUiState$animateTo$slambda_4(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_3(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.v1b($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$animateTo$slambda_5(this$0, $target, $springSpec, resultContinuation) {
    this.aeg_1 = this$0;
    this.beg_1 = $target;
    this.ceg_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_5).v1b = function ($this$async, $completion) {
    var tmp = this.w1b($this$async, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$animateTo$slambda_5).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_5).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.aeg_1.xee_1.bdx(this.beg_1.def_1.wdx_1, spring(this.ceg_1.i8p_1, this.ceg_1.j8p_1), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_5).w1b = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_5(this.aeg_1, this.beg_1, this.ceg_1, completion);
    i.deg_1 = $this$async;
    return i;
  };
  function MutableUiState$animateTo$slambda_6(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_5(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.v1b($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$animateTo$slambda_7(this$0, $target, $springSpec, resultContinuation) {
    this.meg_1 = this$0;
    this.neg_1 = $target;
    this.oeg_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_7).v1b = function ($this$async, $completion) {
    var tmp = this.w1b($this$async, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$animateTo$slambda_7).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_7).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.meg_1.yee_1.bdx(this.neg_1.eef_1.cdx_1, spring(this.oeg_1.i8p_1, this.oeg_1.j8p_1), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_7).w1b = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_7(this.meg_1, this.neg_1, this.oeg_1, completion);
    i.peg_1 = $this$async;
    return i;
  };
  function MutableUiState$animateTo$slambda_8(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_7(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.v1b($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$lerpTo$slambda_1(this$0, $start, $end, $fraction, resultContinuation) {
    this.yeg_1 = this$0;
    this.zeg_1 = $start;
    this.aeh_1 = $end;
    this.beh_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$lerpTo$slambda_1).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$lerpTo$slambda_1).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$lerpTo$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 5;
            this.hb_1 = 1;
            suspendResult = this.yeg_1.vee_1.me1(this.zeg_1.bef_1, this.aeh_1.bef_1, this.beh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hb_1 = 2;
            suspendResult = this.yeg_1.wee_1.gdz(this.zeg_1.cef_1, this.aeh_1.cef_1, this.beh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.hb_1 = 3;
            suspendResult = this.yeg_1.xee_1.ody(this.zeg_1.def_1, this.aeh_1.def_1, this.beh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.hb_1 = 4;
            suspendResult = this.yeg_1.yee_1.vdx(this.zeg_1.eef_1, this.aeh_1.eef_1, this.beh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 5) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableUiState$lerpTo$slambda_1).w1b = function ($this$launch, completion) {
    var i = new MutableUiState$lerpTo$slambda_1(this.yeg_1, this.zeg_1, this.aeh_1, this.beh_1, completion);
    i.ceh_1 = $this$launch;
    return i;
  };
  function MutableUiState$lerpTo$slambda_2(this$0, $start, $end, $fraction, resultContinuation) {
    var i = new MutableUiState$lerpTo$slambda_1(this$0, $start, $end, $fraction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateToCOROUTINE$1(_this__u8e3s4, scope, target, springSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.leh_1 = _this__u8e3s4;
    this.meh_1 = scope;
    this.neh_1 = target;
    this.oeh_1 = springSpec;
  }
  protoOf($animateToCOROUTINE$1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = async(this.meh_1, VOID, VOID, MutableUiState$animateTo$slambda_2(this.leh_1, this.neh_1, this.oeh_1, null));
            var tmp_1 = async(this.meh_1, VOID, VOID, MutableUiState$animateTo$slambda_4(this.leh_1, this.neh_1, this.oeh_1, null));
            var tmp_2 = async(this.meh_1, VOID, VOID, MutableUiState$animateTo$slambda_6(this.leh_1, this.neh_1, this.oeh_1, null));
            suspendResult = awaitAll(listOf_0([tmp_0, tmp_1, tmp_2, async(this.meh_1, VOID, VOID, MutableUiState$animateTo$slambda_8(this.leh_1, this.neh_1, this.oeh_1, null))]), this);
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
  function $snapToCOROUTINE$2(_this__u8e3s4, target, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xeh_1 = _this__u8e3s4;
    this.yeh_1 = target;
  }
  protoOf($snapToCOROUTINE$2).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 5;
            this.hb_1 = 1;
            suspendResult = this.xeh_1.vee_1.d8p(this.yeh_1.bef_1.te0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hb_1 = 2;
            suspendResult = this.xeh_1.wee_1.d8p(this.yeh_1.cef_1.pdy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.hb_1 = 3;
            suspendResult = this.xeh_1.xee_1.d8p(this.yeh_1.def_1.wdx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.hb_1 = 4;
            suspendResult = this.xeh_1.yee_1.d8p(this.yeh_1.eef_1.cdx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 5) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function MutableUiState_0(uiContext, positionAlignment, shadow, colorOverlay, alpha) {
    BaseMutableUiState.call(this, uiContext, listOf_0([positionAlignment, shadow, colorOverlay, alpha]));
    this.vee_1 = positionAlignment;
    this.wee_1 = shadow;
    this.xee_1 = colorOverlay;
    this.yee_1 = alpha;
    this.zee_1 = Companion_instance.c5j(this.vee_1.m5x()).c5j(this.wee_1.m5x()).c5j(this.xee_1.m5x()).c5j(this.yee_1.m5x());
    this.aef_1 = 0;
  }
  protoOf(MutableUiState_0).se3 = function () {
    return this.zee_1;
  };
  protoOf(MutableUiState_0).zeh = function (scope, target, springSpec, $completion) {
    var tmp = new $animateToCOROUTINE$1(this, scope, target, springSpec, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState_0).we3 = function (scope, target, springSpec, $completion) {
    return this.zeh(scope, target instanceof TargetUiState_0 ? target : THROW_CCE(), springSpec, $completion);
  };
  protoOf(MutableUiState_0).aei = function (target, $completion) {
    var tmp = new $snapToCOROUTINE$2(this, target, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState_0).ue3 = function (target, $completion) {
    return this.aei(target instanceof TargetUiState_0 ? target : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState_0).bei = function (scope, start, end, fraction) {
    launch(scope, VOID, VOID, MutableUiState$lerpTo$slambda_2(this, start, end, fraction, null));
  };
  protoOf(MutableUiState_0).ve3 = function (scope, start, end, fraction) {
    var tmp = start instanceof TargetUiState_0 ? start : THROW_CCE();
    return this.bei(scope, tmp, end instanceof TargetUiState_0 ? end : THROW_CCE(), fraction);
  };
  function toMutableState_0(_this__u8e3s4, uiContext) {
    return new MutableUiState_0(uiContext, new PositionAlignment(uiContext.hdu_1, _this__u8e3s4.bef_1), new Shadow(uiContext.hdu_1, _this__u8e3s4.cef_1), new ColorOverlay(uiContext.hdu_1, _this__u8e3s4.def_1), new Alpha(uiContext.hdu_1, _this__u8e3s4.eef_1));
  }
  function MutableUiState$animateTo$slambda_9(this$0, $target, $springSpec, resultContinuation) {
    this.kei_1 = this$0;
    this.lei_1 = $target;
    this.mei_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_9).v1b = function ($this$async, $completion) {
    var tmp = this.w1b($this$async, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$animateTo$slambda_9).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_9).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.kei_1.yei_1.bdx(this.lei_1.cej_1.te0_1, spring(this.mei_1.i8p_1, this.mei_1.j8p_1), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_9).w1b = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_9(this.kei_1, this.lei_1, this.mei_1, completion);
    i.nei_1 = $this$async;
    return i;
  };
  function MutableUiState$animateTo$slambda_10(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_9(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.v1b($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$animateTo$slambda_11(this$0, $target, $springSpec, resultContinuation) {
    this.nej_1 = this$0;
    this.oej_1 = $target;
    this.pej_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda_11).v1b = function ($this$async, $completion) {
    var tmp = this.w1b($this$async, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$animateTo$slambda_11).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda_11).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.nej_1.zei_1.bdx(this.oej_1.dej_1.cdx_1, spring(this.pej_1.i8p_1, this.pej_1.j8p_1), VOID, this);
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
  protoOf(MutableUiState$animateTo$slambda_11).w1b = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda_11(this.nej_1, this.oej_1, this.pej_1, completion);
    i.qej_1 = $this$async;
    return i;
  };
  function MutableUiState$animateTo$slambda_12(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda_11(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.v1b($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$lerpTo$slambda_3(this$0, $start, $end, $fraction, resultContinuation) {
    this.zej_1 = this$0;
    this.aek_1 = $start;
    this.bek_1 = $end;
    this.cek_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$lerpTo$slambda_3).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$lerpTo$slambda_3).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$lerpTo$slambda_3).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.hb_1 = 1;
            suspendResult = this.zej_1.yei_1.me1(this.aek_1.cej_1, this.bek_1.cej_1, this.cek_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hb_1 = 2;
            suspendResult = this.zej_1.zei_1.vdx(this.aek_1.dej_1, this.bek_1.dej_1, this.cek_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 3) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableUiState$lerpTo$slambda_3).w1b = function ($this$launch, completion) {
    var i = new MutableUiState$lerpTo$slambda_3(this.zej_1, this.aek_1, this.bek_1, this.cek_1, completion);
    i.dek_1 = $this$launch;
    return i;
  };
  function MutableUiState$lerpTo$slambda_4(this$0, $start, $end, $fraction, resultContinuation) {
    var i = new MutableUiState$lerpTo$slambda_3(this$0, $start, $end, $fraction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateToCOROUTINE$3(_this__u8e3s4, scope, target, springSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mek_1 = _this__u8e3s4;
    this.nek_1 = scope;
    this.oek_1 = target;
    this.pek_1 = springSpec;
  }
  protoOf($animateToCOROUTINE$3).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = async(this.nek_1, VOID, VOID, MutableUiState$animateTo$slambda_10(this.mek_1, this.oek_1, this.pek_1, null));
            suspendResult = awaitAll(listOf_0([tmp_0, async(this.nek_1, VOID, VOID, MutableUiState$animateTo$slambda_12(this.mek_1, this.oek_1, this.pek_1, null))]), this);
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
  function $snapToCOROUTINE$4(_this__u8e3s4, target, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yek_1 = _this__u8e3s4;
    this.zek_1 = target;
  }
  protoOf($snapToCOROUTINE$4).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.hb_1 = 1;
            suspendResult = this.yek_1.yei_1.d8p(this.zek_1.cej_1.te0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hb_1 = 2;
            suspendResult = this.yek_1.zei_1.d8p(this.zek_1.dej_1.cdx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 3) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function MutableUiState_1(uiContext, positionAlignment, alpha) {
    BaseMutableUiState.call(this, uiContext, listOf_0([positionAlignment, alpha]));
    this.yei_1 = positionAlignment;
    this.zei_1 = alpha;
    this.aej_1 = Companion_instance.c5j(this.yei_1.m5x()).c5j(this.zei_1.m5x());
    this.bej_1 = 0;
  }
  protoOf(MutableUiState_1).se3 = function () {
    return this.aej_1;
  };
  protoOf(MutableUiState_1).ael = function (scope, target, springSpec, $completion) {
    var tmp = new $animateToCOROUTINE$3(this, scope, target, springSpec, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState_1).we3 = function (scope, target, springSpec, $completion) {
    return this.ael(scope, target instanceof TargetUiState_1 ? target : THROW_CCE(), springSpec, $completion);
  };
  protoOf(MutableUiState_1).bel = function (target, $completion) {
    var tmp = new $snapToCOROUTINE$4(this, target, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState_1).ue3 = function (target, $completion) {
    return this.bel(target instanceof TargetUiState_1 ? target : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState_1).cel = function (scope, start, end, fraction) {
    launch(scope, VOID, VOID, MutableUiState$lerpTo$slambda_4(this, start, end, fraction, null));
  };
  protoOf(MutableUiState_1).ve3 = function (scope, start, end, fraction) {
    var tmp = start instanceof TargetUiState_1 ? start : THROW_CCE();
    return this.cel(scope, tmp, end instanceof TargetUiState_1 ? end : THROW_CCE(), fraction);
  };
  function toMutableState_1(_this__u8e3s4, uiContext) {
    return new MutableUiState_1(uiContext, new PositionAlignment(uiContext.hdu_1, _this__u8e3s4.cej_1), new Alpha(uiContext.hdu_1, _this__u8e3s4.dej_1));
  }
  function BackStack$_init_$lambda_suo4uu(it) {
    return new Noop();
  }
  function BackStack(scope, model, visualisation, animationSpec, gestureFactory, gestureSettleConfig, backPressStrategy, disableAnimations, isDebug) {
    scope = scope === VOID ? CoroutineScope_0(SupervisorJob().ef(Dispatchers_getInstance().lp())) : scope;
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
    this.iem_1 = model;
    this.jem_1 = 0;
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
    this.kem_1 = created;
    this.lem_1 = active;
    this.mem_1 = stashed;
    this.nem_1 = destroyed;
    this.oem_1 = 0;
  }
  protoOf(State).pem = function (created, active, stashed, destroyed) {
    return new State(created, active, stashed, destroyed);
  };
  protoOf(State).qem = function (created, active, stashed, destroyed, $super) {
    created = created === VOID ? this.kem_1 : created;
    active = active === VOID ? this.lem_1 : active;
    stashed = stashed === VOID ? this.mem_1 : stashed;
    destroyed = destroyed === VOID ? this.nem_1 : destroyed;
    return $super === VOID ? this.pem(created, active, stashed, destroyed) : $super.pem.call(this, created, active, stashed, destroyed);
  };
  protoOf(State).toString = function () {
    return 'State(created=' + this.kem_1 + ', active=' + this.lem_1 + ', stashed=' + this.mem_1 + ', destroyed=' + this.nem_1 + ')';
  };
  protoOf(State).hashCode = function () {
    var result = hashCode(this.kem_1);
    result = imul(result, 31) + this.lem_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.mem_1) | 0;
    result = imul(result, 31) + hashCode(this.nem_1) | 0;
    return result;
  };
  protoOf(State).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof State))
      return false;
    var tmp0_other_with_cast = other instanceof State ? other : THROW_CCE();
    if (!equals(this.kem_1, tmp0_other_with_cast.kem_1))
      return false;
    if (!this.lem_1.equals(tmp0_other_with_cast.lem_1))
      return false;
    if (!equals(this.mem_1, tmp0_other_with_cast.mem_1))
      return false;
    if (!equals(this.nem_1, tmp0_other_with_cast.nem_1))
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
  function BackStackModel(initialTargets, savedStateMap) {
    BaseTransitionModel.call(this, VOID, VOID, savedStateMap);
    var tmp = this;
    var tmp_0 = asElement(last(initialTargets));
    // Inline function 'kotlin.collections.map' call
    var this_0 = take(initialTargets, initialTargets.n() - 1 | 0);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.backstack.BackStackModel.initialState.<anonymous>' call
      var tmp$ret$0 = asElement(item);
      destination.s(tmp$ret$0);
    }
    tmp.yem_1 = new State(VOID, tmp_0, destination);
    this.zem_1 = 0;
  }
  protoOf(BackStackModel).aen = function (_this__u8e3s4) {
    return toSet(plus_0(plus_0(plus(_this__u8e3s4.kem_1, _this__u8e3s4.lem_1), _this__u8e3s4.mem_1), _this__u8e3s4.nem_1));
  };
  protoOf(BackStackModel).odl = function (_this__u8e3s4) {
    return this.aen(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackModel).ben = function (_this__u8e3s4, element) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = _this__u8e3s4.nem_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var element_0 = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.backstack.BackStackModel.removeDestroyedElement.<anonymous>' call
      if (!element_0.equals(element)) {
        destination.s(element_0);
      }
    }
    return _this__u8e3s4.qem(VOID, VOID, VOID, destination);
  };
  protoOf(BackStackModel).tdm = function (_this__u8e3s4, element) {
    return this.ben(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE(), element);
  };
  protoOf(BackStackModel).cen = function (_this__u8e3s4) {
    return _this__u8e3s4.qem(VOID, VOID, VOID, emptyList());
  };
  protoOf(BackStackModel).cdm = function (_this__u8e3s4) {
    return this.cen(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackModel).w8z = function () {
    return this.yem_1;
  };
  function PopBackstackStrategy$canHandleBackPress$delegate$lambda$lambda(output) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !output.ldk().mem_1.e1();
  }
  function PopBackstackStrategy$canHandleBackPress$delegate$lambda(this$0) {
    return function () {
      var tmp = this$0.edi().ndf();
      return mapState(tmp, this$0.gen_1, VOID, PopBackstackStrategy$canHandleBackPress$delegate$lambda$lambda);
    };
  }
  function PopBackstackStrategy(scope, animationSpec) {
    animationSpec = animationSpec === VOID ? null : animationSpec;
    BaseBackPressHandlerStrategy.call(this);
    this.gen_1 = scope;
    this.hen_1 = animationSpec;
    var tmp = this;
    tmp.ien_1 = lazy(PopBackstackStrategy$canHandleBackPress$delegate$lambda(this));
    this.jen_1 = 0;
  }
  protoOf(PopBackstackStrategy).wdg = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ien_1;
    canHandleBackPress$factory();
    return this_0.u2();
  };
  protoOf(PopBackstackStrategy).udg = function () {
    var pop = new Pop();
    var tmp;
    if (pop.nen(this.edi().ndf().u2().ldk())) {
      this.ddi().edg(new Pop(), this.hen_1);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function canHandleBackPress$factory() {
    return getPropertyCallableRef('canHandleBackPress', 1, KProperty1, function (receiver) {
      return receiver.wdg();
    }, null);
  }
  function pop(_this__u8e3s4, mode, animationSpec) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    _this__u8e3s4.edg(new Pop(mode), animationSpec);
  }
  function Pop(mode) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    BaseOperation.call(this);
    this.len_1 = mode;
    this.men_1 = 8;
  }
  protoOf(Pop).gdk = function (_set____db54di) {
    this.len_1 = _set____db54di;
  };
  protoOf(Pop).fdg = function () {
    return this.len_1;
  };
  protoOf(Pop).nen = function (state) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !state.mem_1.e1();
  };
  protoOf(Pop).rdk = function (state) {
    return this.nen(state instanceof State ? state : THROW_CCE());
  };
  protoOf(Pop).oen = function (baseLineState) {
    return baseLineState;
  };
  protoOf(Pop).pdk = function (baseLineState) {
    return this.oen(baseLineState instanceof State ? baseLineState : THROW_CCE());
  };
  protoOf(Pop).pen = function (fromState) {
    var tmp0_active = last(fromState.mem_1);
    var tmp1_destroyed = plus(fromState.nem_1, fromState.lem_1);
    var tmp2_stashed = dropLast(fromState.mem_1, 1);
    return fromState.qem(VOID, tmp0_active, tmp2_stashed, tmp1_destroyed);
  };
  protoOf(Pop).qdk = function (fromState) {
    return this.pen(fromState instanceof State ? fromState : THROW_CCE());
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
    _this__u8e3s4.edg(new Push(interactionTarget, mode), animationSpec);
  }
  function Push(interactionTarget, mode) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    BaseOperation.call(this);
    this.ren_1 = interactionTarget;
    this.sen_1 = mode;
    this.ten_1 = 8;
  }
  protoOf(Push).gdk = function (_set____db54di) {
    this.sen_1 = _set____db54di;
  };
  protoOf(Push).fdg = function () {
    return this.sen_1;
  };
  protoOf(Push).nen = function (state) {
    return !equals(this.ren_1, state.lem_1.cd6_1);
  };
  protoOf(Push).rdk = function (state) {
    return this.nen(state instanceof State ? state : THROW_CCE());
  };
  protoOf(Push).oen = function (baseLineState) {
    return baseLineState.qem(plus(baseLineState.kem_1, asElement(this.ren_1)));
  };
  protoOf(Push).pdk = function (baseLineState) {
    return this.oen(baseLineState instanceof State ? baseLineState : THROW_CCE());
  };
  protoOf(Push).pen = function (fromState) {
    var tmp0_active = last(fromState.kem_1);
    var tmp1_created = dropLast(fromState.kem_1, 1);
    var tmp2_stashed = plus(fromState.mem_1, fromState.lem_1);
    return fromState.qem(tmp1_created, tmp0_active, tmp2_stashed);
  };
  protoOf(Push).qdk = function (fromState) {
    return this.pen(fromState instanceof State ? fromState : THROW_CCE());
  };
  protoOf(Push).toString = function () {
    return 'Push(interactionTarget=' + this.ren_1 + ', mode=' + this.sen_1 + ')';
  };
  protoOf(Push).hashCode = function () {
    var result = hashCode(this.ren_1);
    result = imul(result, 31) + this.sen_1.hashCode() | 0;
    return result;
  };
  protoOf(Push).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Push))
      return false;
    var tmp0_other_with_cast = other instanceof Push ? other : THROW_CCE();
    if (!equals(this.ren_1, tmp0_other_with_cast.ren_1))
      return false;
    if (!this.sen_1.equals(tmp0_other_with_cast.sen_1))
      return false;
    return true;
  };
  function replace(_this__u8e3s4, target, mode, animationSpec) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    _this__u8e3s4.edg(new Replace(target, mode), animationSpec);
  }
  function Replace(interactionTarget, mode) {
    mode = mode === VOID ? Mode_KEYFRAME_getInstance() : mode;
    BaseOperation.call(this);
    this.ven_1 = interactionTarget;
    this.wen_1 = mode;
    this.xen_1 = 8;
  }
  protoOf(Replace).gdk = function (_set____db54di) {
    this.wen_1 = _set____db54di;
  };
  protoOf(Replace).fdg = function () {
    return this.wen_1;
  };
  protoOf(Replace).nen = function (state) {
    return !equals(this.ven_1, state.lem_1.cd6_1);
  };
  protoOf(Replace).rdk = function (state) {
    return this.nen(state instanceof State ? state : THROW_CCE());
  };
  protoOf(Replace).oen = function (baseLineState) {
    return baseLineState.qem(plus(baseLineState.kem_1, asElement(this.ven_1)));
  };
  protoOf(Replace).pdk = function (baseLineState) {
    return this.oen(baseLineState instanceof State ? baseLineState : THROW_CCE());
  };
  protoOf(Replace).pen = function (fromState) {
    var tmp0_active = last(fromState.kem_1);
    var tmp1_created = dropLast(fromState.kem_1, 1);
    var tmp2_destroyed = plus(fromState.nem_1, fromState.lem_1);
    return fromState.qem(tmp1_created, tmp0_active, VOID, tmp2_destroyed);
  };
  protoOf(Replace).qdk = function (fromState) {
    return this.pen(fromState instanceof State ? fromState : THROW_CCE());
  };
  protoOf(Replace).toString = function () {
    return 'Replace(interactionTarget=' + this.ven_1 + ', mode=' + this.wen_1 + ')';
  };
  protoOf(Replace).hashCode = function () {
    var result = hashCode(this.ven_1);
    result = imul(result, 31) + this.wen_1.hashCode() | 0;
    return result;
  };
  protoOf(Replace).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Replace))
      return false;
    var tmp0_other_with_cast = other instanceof Replace ? other : THROW_CCE();
    if (!equals(this.ven_1, tmp0_other_with_cast.ven_1))
      return false;
    if (!this.wen_1.equals(tmp0_other_with_cast.wen_1))
      return false;
    return true;
  };
  function BackStackFader(uiContext, defaultAnimationSpec) {
    defaultAnimationSpec = defaultAnimationSpec === VOID ? get_DefaultAnimationSpec() : defaultAnimationSpec;
    BaseVisualisation.call(this, uiContext, defaultAnimationSpec);
    this.keo_1 = new TargetUiState(new Target(1.0));
    this.leo_1 = new TargetUiState(new Target(0.0));
    this.meo_1 = 0;
  }
  protoOf(BackStackFader).neo = function (_this__u8e3s4) {
    var tmp = listOf(new MatchedTargetUiState(_this__u8e3s4.lem_1, this.keo_1));
    // Inline function 'kotlin.collections.map' call
    var this_0 = plus_0(plus_0(_this__u8e3s4.kem_1, _this__u8e3s4.mem_1), _this__u8e3s4.nem_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.backstack.ui.fader.BackStackFader.toUiTargets.<anonymous>' call
      var tmp$ret$0 = new MatchedTargetUiState(item, this.leo_1);
      destination.s(tmp$ret$0);
    }
    return plus_0(tmp, destination);
  };
  protoOf(BackStackFader).ueb = function (_this__u8e3s4) {
    return this.neo(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackFader).oeo = function (uiContext, targetUiState) {
    return toMutableState(targetUiState, uiContext);
  };
  protoOf(BackStackFader).veb = function (uiContext, targetUiState) {
    return this.oeo(uiContext, targetUiState instanceof TargetUiState ? targetUiState : THROW_CCE());
  };
  function TargetUiState(alpha) {
    this.vec_1 = alpha;
    this.wec_1 = 0;
  }
  function Gestures(transitionBounds) {
    this.peo_1 = transitionBounds;
    this.qeo_1 = false;
    this.reo_1 = 0;
  }
  protoOf(Gestures).idk = function () {
    return this.qeo_1;
  };
  protoOf(Gestures).seo = function (state, delta, density) {
    var tmp;
    if (dragHorizontalDirection(delta).equals(HorizontalDirection_RIGHT_getInstance())) {
      tmp = Gesture_init_$Create$(new Pop(), Offset(this.peo_1.vdf_1, 0.0));
    } else {
      tmp = new Noop_0();
    }
    return tmp;
  };
  protoOf(Gestures).mdk = function (state, delta, density) {
    return this.seo(state instanceof State ? state : THROW_CCE(), delta, density);
  };
  function BackStackParallax(uiContext, defaultAnimationSpec) {
    defaultAnimationSpec = defaultAnimationSpec === VOID ? get_DefaultAnimationSpec() : defaultAnimationSpec;
    BaseVisualisation.call(this, uiContext, defaultAnimationSpec);
    this.fep_1 = new CubicBezierEasing(1.0, 0.0, 1.0, 0.0);
    this.gep_1 = TargetUiState_init_$Create$(-1.0, VOID, VOID, new Target(0.0));
    this.hep_1 = TargetUiState_init_$Create$(1.0, VOID, new Target_0(0.0, this.fep_1));
    this.iep_1 = TargetUiState_init_$Create$(-0.2, new Target_1(0.7));
    this.jep_1 = TargetUiState_init_$Create$(0.0, VOID, new Target_0(25.0));
    this.kep_1 = 0;
  }
  protoOf(BackStackParallax).neo = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = _this__u8e3s4.mem_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.backstack.ui.parallax.BackStackParallax.toUiTargets.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var tmp$ret$0 = new MatchedTargetUiState(item, index_0 === (_this__u8e3s4.mem_1.n() - 1 | 0) ? this.iep_1 : this.gep_1);
      destination.s(tmp$ret$0);
    }
    var stashed = destination;
    var tmp = plus_0(stashed, listOf(new MatchedTargetUiState(_this__u8e3s4.lem_1, this.jep_1)));
    // Inline function 'kotlin.collections.map' call
    var this_1 = plus_0(_this__u8e3s4.kem_1, _this__u8e3s4.nem_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.v();
    while (tmp0_iterator_0.w()) {
      var item_0 = tmp0_iterator_0.y();
      // Inline function 'com.bumble.appyx.components.backstack.ui.parallax.BackStackParallax.toUiTargets.<anonymous>' call
      var tmp$ret$3 = new MatchedTargetUiState(item_0, this.hep_1);
      destination_0.s(tmp$ret$3);
    }
    return plus_0(tmp, destination_0);
  };
  protoOf(BackStackParallax).ueb = function (_this__u8e3s4) {
    return this.neo(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackParallax).lep = function (uiContext, targetUiState) {
    return toMutableState_0(targetUiState, uiContext);
  };
  protoOf(BackStackParallax).veb = function (uiContext, targetUiState) {
    return this.lep(uiContext, targetUiState instanceof TargetUiState_0 ? targetUiState : THROW_CCE());
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
  function TargetUiState_0(positionAlignment, shadow, colorOverlay, alpha) {
    positionAlignment = positionAlignment === VOID ? Target_init_$Create$(Companion_getInstance().hdz_1) : positionAlignment;
    this.bef_1 = positionAlignment;
    this.cef_1 = shadow;
    this.def_1 = colorOverlay;
    this.eef_1 = alpha;
    this.fef_1 = 0;
  }
  function BackStackSlider(uiContext) {
    BaseVisualisation.call(this, uiContext);
    this.yep_1 = new TargetUiState_1(Target_init_$Create$(Companion_getInstance().hdz_1), new Target(1.0));
    this.zep_1 = new TargetUiState_1(Target_init_$Create$(Companion_getInstance().hdz_1), new Target(1.0));
    this.aeq_1 = 0;
  }
  protoOf(BackStackSlider).neo = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.kem_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.backstack.ui.slider.BackStackSlider.toUiTargets.<anonymous>' call
      var tmp$ret$0 = new MatchedTargetUiState(item, this.yep_1.beq());
      destination.s(tmp$ret$0);
    }
    var tmp = destination;
    // Inline function 'kotlin.collections.map' call
    var this_1 = listOf(_this__u8e3s4.lem_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.v();
    while (tmp0_iterator_0.w()) {
      var item_0 = tmp0_iterator_0.y();
      // Inline function 'com.bumble.appyx.components.backstack.ui.slider.BackStackSlider.toUiTargets.<anonymous>' call
      var tmp$ret$3 = new MatchedTargetUiState(item_0, this.yep_1.ceq());
      destination_0.s(tmp$ret$3);
    }
    var tmp_0 = plus_0(tmp, destination_0);
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_2 = _this__u8e3s4.mem_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var index = 0;
    var tmp0_iterator_1 = this_2.v();
    while (tmp0_iterator_1.w()) {
      var item_1 = tmp0_iterator_1.y();
      // Inline function 'com.bumble.appyx.components.backstack.ui.slider.BackStackSlider.toUiTargets.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var tmp$ret$6 = new MatchedTargetUiState(item_1, this.yep_1.deq(index_0 - _this__u8e3s4.mem_1.n() | 0));
      destination_1.s(tmp$ret$6);
    }
    var tmp_1 = plus_0(tmp_0, destination_1);
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_3 = _this__u8e3s4.nem_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var index_1 = 0;
    var tmp0_iterator_2 = this_3.v();
    while (tmp0_iterator_2.w()) {
      var item_2 = tmp0_iterator_2.y();
      // Inline function 'com.bumble.appyx.components.backstack.ui.slider.BackStackSlider.toUiTargets.<anonymous>' call
      var tmp1_0 = index_1;
      index_1 = tmp1_0 + 1 | 0;
      checkIndexOverflow(tmp1_0);
      var tmp$ret$9 = new MatchedTargetUiState(item_2, this.zep_1.beq());
      destination_2.s(tmp$ret$9);
    }
    return plus_0(tmp_1, destination_2);
  };
  protoOf(BackStackSlider).ueb = function (_this__u8e3s4) {
    return this.neo(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BackStackSlider).eeq = function (uiContext, targetUiState) {
    return toMutableState_1(targetUiState, uiContext);
  };
  protoOf(BackStackSlider).veb = function (uiContext, targetUiState) {
    return this.eeq(uiContext, targetUiState instanceof TargetUiState_1 ? targetUiState : THROW_CCE());
  };
  function TargetUiState_1(positionAlignment, alpha) {
    this.cej_1 = positionAlignment;
    this.dej_1 = alpha;
    this.eej_1 = 0;
  }
  protoOf(TargetUiState_1).deq = function (multiplier) {
    return new TargetUiState_1(Target_init_$Create$(new OutsideAlignment(multiplier, 0.0)), this.dej_1);
  };
  protoOf(TargetUiState_1).beq = function () {
    return new TargetUiState_1(Target_init_$Create$(Companion_getInstance().ldz_1), this.dej_1);
  };
  protoOf(TargetUiState_1).ceq = function () {
    return new TargetUiState_1(Target_init_$Create$(Companion_getInstance().hdz_1), this.dej_1);
  };
  //region block: post-declaration
  protoOf(Gestures).ldg = onStartDrag;
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

//# sourceMappingURL=appyx-components-stable-backstack-commons.js.map
