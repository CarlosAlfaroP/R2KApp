(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-unit.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    root['compose-multiplatform-core-animation-core'] = factory(typeof this['compose-multiplatform-core-animation-core'] === 'undefined' ? {} : this['compose-multiplatform-core-animation-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-unit'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var equals = kotlin_kotlin.$_$.t8;
  var VOID = kotlin_kotlin.$_$.d;
  var coerceIn = kotlin_kotlin.$_$.na;
  var Long = kotlin_kotlin.$_$.rc;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var protoOf = kotlin_kotlin.$_$.r9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var CancellationException = kotlin_kotlin.$_$.o7;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var KMutableProperty1 = kotlin_kotlin.$_$.ua;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var SideEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var KProperty0 = kotlin_kotlin.$_$.va;
  var THROW_ISE = kotlin_kotlin.$_$.yc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var isInterface = kotlin_kotlin.$_$.h9;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.w2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var isNaN_0 = kotlin_kotlin.$_$.md;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var Enum = kotlin_kotlin.$_$.mc;
  var hashCode = kotlin_kotlin.$_$.c9;
  var getNumberHashCode = kotlin_kotlin.$_$.y8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var to = kotlin_kotlin.$_$.ce;
  var mapCapacity = kotlin_kotlin.$_$.b6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var toLong = kotlin_kotlin.$_$.t9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var coerceIn_0 = kotlin_kotlin.$_$.pa;
  var numberToLong = kotlin_kotlin.$_$.o9;
  var withFrameNanos = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Key_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.q8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.w;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var captureStack = kotlin_kotlin.$_$.j8;
  var isFinite = kotlin_kotlin.$_$.jd;
  var isNaN_1 = kotlin_kotlin.$_$.nd;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var floatFromBits = kotlin_kotlin.$_$.v8;
  var toBits = kotlin_kotlin.$_$.yd;
  var Key_instance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.u8;
  var mutableLongStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var numberToInt = kotlin_kotlin.$_$.n9;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var roundToInt = kotlin_kotlin.$_$.ba;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var until = kotlin_kotlin.$_$.sa;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.b3;
  var getValue = kotlin_kotlin.$_$.f5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var mapOf = kotlin_kotlin.$_$.d6;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.v;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Animatable$runAnimation$slambda, 'Animatable$runAnimation$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Animatable$snapTo$slambda, 'Animatable$snapTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Animatable, 'Animatable', classMeta, VOID, VOID, VOID, VOID, VOID, [4, 3, 1, 0]);
  setMetadataFor(AnimationResult, 'AnimationResult', classMeta);
  setMetadataFor(animateValueAsState$composable$slambda$slambda, 'animateValueAsState$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(animateValueAsState$composable$slambda, 'animateValueAsState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.a7(this.f8r()) >= 0;
  }
  setMetadataFor(Animation, 'Animation', interfaceMeta);
  setMetadataFor(TargetBasedAnimation, 'TargetBasedAnimation', classMeta, VOID, [Animation]);
  setMetadataFor(DecayAnimation, 'DecayAnimation', classMeta, VOID, [Animation]);
  setMetadataFor(AnimationEndReason, 'AnimationEndReason', classMeta, Enum);
  setMetadataFor(SpringSpec, 'SpringSpec', classMeta, VOID, VOID, SpringSpec);
  setMetadataFor(InfiniteRepeatableSpec, 'InfiniteRepeatableSpec', classMeta);
  setMetadataFor(KeyframesSpecConfig, 'KeyframesSpecConfig', classMeta, VOID, VOID, KeyframesSpecConfig);
  setMetadataFor(KeyframeEntity, 'KeyframeEntity', classMeta);
  setMetadataFor(KeyframesSpec, 'KeyframesSpec', classMeta);
  setMetadataFor(TweenSpec, 'TweenSpec', classMeta, VOID, VOID, TweenSpec);
  setMetadataFor(RepeatMode, 'RepeatMode', classMeta, Enum);
  setMetadataFor(AnimationConstants, 'AnimationConstants', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(AnimationState, 'AnimationState', classMeta);
  setMetadataFor(AnimationScope, 'AnimationScope', classMeta);
  setMetadataFor(AnimationVector, 'AnimationVector', classMeta);
  setMetadataFor(AnimationVector1D, 'AnimationVector1D', classMeta, AnimationVector);
  setMetadataFor(AnimationVector2D, 'AnimationVector2D', classMeta, AnimationVector);
  setMetadataFor(AnimationVector4D, 'AnimationVector4D', classMeta, AnimationVector);
  setMetadataFor(AnimationVector3D, 'AnimationVector3D', classMeta, AnimationVector);
  setMetadataFor(ComplexDouble, 'ComplexDouble', classMeta);
  setMetadataFor(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl', classMeta);
  setMetadataFor(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec', classMeta);
  setMetadataFor(CubicBezierEasing, 'CubicBezierEasing', classMeta);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', classMeta);
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.p8u(this.r8u(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  setMetadataFor(FloatAnimationSpec, 'FloatAnimationSpec', interfaceMeta);
  setMetadataFor(FloatSpringSpec, 'FloatSpringSpec', classMeta, VOID, [FloatAnimationSpec], FloatSpringSpec);
  setMetadataFor(FloatTweenSpec, 'FloatTweenSpec', classMeta, VOID, [FloatAnimationSpec], FloatTweenSpec);
  setMetadataFor(withInfiniteAnimationFrameNanos$slambda, 'withInfiniteAnimationFrameNanos$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor($withInfiniteAnimationFrameNanosCOROUTINE$0, '$withInfiniteAnimationFrameNanosCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(Mutator, 'Mutator', classMeta);
  setMetadataFor(MutatorMutex$mutate$slambda, 'MutatorMutex$mutate$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MutatorMutex, 'MutatorMutex', classMeta, VOID, VOID, MutatorMutex, VOID, VOID, [2, 3]);
  setMetadataFor(MutatePriority, 'MutatePriority', classMeta, Enum);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(MutationInterruptedException, 'MutationInterruptedException', classMeta, PlatformOptimizedCancellationException, VOID, MutationInterruptedException);
  setMetadataFor(SpringSimulation, 'SpringSimulation', classMeta);
  setMetadataFor($animateCOROUTINE$1, '$animateCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($callWithFrameNanosCOROUTINE$2, '$callWithFrameNanosCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(TransitionAnimationState, 'TransitionAnimationState', classMeta);
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.w8z()) ? equals(targetState, this.x8z()) : false;
  }
  setMetadataFor(Segment, 'Segment', interfaceMeta);
  setMetadataFor(SegmentImpl, 'SegmentImpl', classMeta, VOID, [Segment]);
  setMetadataFor(Transition$animateTo$composable$slambda, 'Transition$animateTo$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Transition, 'Transition', classMeta);
  setMetadataFor(MutableTransitionState, 'MutableTransitionState', classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(TwoWayConverterImpl, 'TwoWayConverterImpl', classMeta);
  setMetadataFor(Spring, 'Spring', objectMeta);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.h8r(this.y8q(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  setMetadataFor(VectorizedAnimationSpec, 'VectorizedAnimationSpec', interfaceMeta);
  function get_isInfinite() {
    return false;
  }
  setMetadataFor(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', interfaceMeta, VOID, [VectorizedAnimationSpec]);
  setMetadataFor(VectorizedSpringSpec, 'VectorizedSpringSpec', classMeta, VOID, [VectorizedFiniteAnimationSpec], VectorizedSpringSpec_init_$Create$);
  setMetadataFor(VectorizedFloatAnimationSpec$1, VOID, classMeta);
  setMetadataFor(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', classMeta, VOID, [VectorizedFiniteAnimationSpec]);
  setMetadataFor(VectorizedInfiniteRepeatableSpec, 'VectorizedInfiniteRepeatableSpec', classMeta, VOID, [VectorizedAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.h92() + this.i92() | 0).m9(get_MillisToNanos());
  }
  setMetadataFor(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', interfaceMeta, VOID, [VectorizedFiniteAnimationSpec]);
  setMetadataFor(VectorizedKeyframesSpec, 'VectorizedKeyframesSpec', classMeta, VOID, [VectorizedDurationBasedAnimationSpec]);
  setMetadataFor(VectorizedTweenSpec, 'VectorizedTweenSpec', classMeta, VOID, [VectorizedDurationBasedAnimationSpec], VectorizedTweenSpec);
  setMetadataFor(createSpringAnimations$1, VOID, classMeta);
  setMetadataFor(createSpringAnimations$2, VOID, classMeta);
  //endregion
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.k8m_1);
      var clamped = clampToBounds(this$0, $this$animate.u2());
      var tmp;
      if (!equals(clamped, $this$animate.u2())) {
        this$0.k8m_1.h1a(clamped);
        $endState.h1a(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.n8n();
        $clampingNeeded._v = true;
        tmp = Unit_instance;
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var this_0 = $this.l8m_1;
    isRunning$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var this_0 = $this.m8m_1;
    targetValue$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function createVector(_this__u8e3s4, $this, value) {
    var newVector = $this.h8m_1.o8n()(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.q8n(i, value);
      }
       while (inductionVariable < last);
    return newVector;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.k8m_1.j8n_1;
    return $this.p8m_1.t8n(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.t8m_1, $this.r8m_1) ? equals($this.u8m_1, $this.s8m_1) : false) {
      return value;
    }
    var valueVector = $this.h8m_1.o8n()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.i1(i) < $this.t8m_1.i1(i) ? true : valueVector.i1(i) > $this.u8m_1.i1(i)) {
          clamped = true;
          valueVector.q8n(i, coerceIn(valueVector.i1(i), $this.t8m_1.i1(i), $this.u8m_1.i1(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.h8m_1.u8n()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.k8m_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    this_0.i8n_1.m2b();
    var tmp = this_0;
    AnimationConstants_getInstance();
    tmp.j8n_1 = new Long(0, -2147483648);
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.d8o_1 = this$0;
    this.e8o_1 = $initialVelocity;
    this.f8o_1 = $animation;
    this.g8o_1 = $startTime;
    this.h8o_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).l8o = function ($completion) {
    var tmp = this.o54($completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Animatable$runAnimation$slambda).p54 = function ($completion) {
    return this.l8o($completion);
  };
  protoOf(Animatable$runAnimation$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.ib_1 = 2;
            this.d8o_1.k8m_1.i8n_1 = this.d8o_1.h8m_1.o8n()(this.e8o_1);
            _set_targetValue__aqsk0r(this.d8o_1, this.f8o_1.m8o());
            _set_isRunning__kpbg34(this.d8o_1, true);
            var tmp_0 = this;
            AnimationConstants_getInstance();
            tmp_0.j8o_1 = copy(this.d8o_1.k8m_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.k8o_1 = {_v: false};
            this.hb_1 = 1;
            suspendResult = animate(this.j8o_1, this.f8o_1, this.g8o_1, Animatable$runAnimation$slambda$lambda(this.d8o_1, this.j8o_1, this.h8o_1, this.k8o_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.k8o_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.d8o_1);
            this.i8o_1 = new AnimationResult(this.j8o_1, endReason);
            this.ib_1 = 3;
            this.hb_1 = 4;
            continue $sm;
          case 2:
            this.ib_1 = 3;
            var tmp_1 = this.kb_1;
            if (tmp_1 instanceof CancellationException) {
              var e = this.kb_1;
              var tmp_2 = this;
              endAnimation(this.d8o_1);
              throw e;
            } else {
              throw this.kb_1;
            }

          case 3:
            throw this.kb_1;
          case 4:
            this.ib_1 = 3;
            return this.i8o_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.ib_1 === 3) {
          throw e_0;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).o54 = function (completion) {
    return new Animatable$runAnimation$slambda(this.d8o_1, this.e8o_1, this.f8o_1, this.g8o_1, this.h8o_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.l8o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.v8o_1 = this$0;
    this.w8o_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).x8o = function ($completion) {
    var tmp = this.o54($completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Animatable$snapTo$slambda).p54 = function ($completion) {
    return this.x8o($completion);
  };
  protoOf(Animatable$snapTo$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          endAnimation(this.v8o_1);
          var clampedValue = clampToBounds(this.v8o_1, this.w8o_1);
          this.v8o_1.k8m_1.h1a(clampedValue);
          _set_targetValue__aqsk0r(this.v8o_1, clampedValue);
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
  protoOf(Animatable$snapTo$slambda).o54 = function (completion) {
    return new Animatable$snapTo$slambda(this.v8o_1, this.w8o_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.x8o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.h8m_1 = typeConverter;
    this.i8m_1 = visibilityThreshold;
    this.j8m_1 = label;
    this.k8m_1 = new AnimationState(this.h8m_1, initialValue);
    this.l8m_1 = mutableStateOf(false);
    this.m8m_1 = mutableStateOf(initialValue);
    this.n8m_1 = null;
    this.o8m_1 = null;
    this.p8m_1 = new MutatorMutex();
    this.q8m_1 = new SpringSpec(VOID, VOID, this.i8m_1);
    var tmp = this;
    tmp.r8m_1 = createVector(initialValue, this, -Infinity);
    var tmp_0 = this;
    tmp_0.s8m_1 = createVector(initialValue, this, Infinity);
    this.t8m_1 = this.r8m_1;
    this.u8m_1 = this.s8m_1;
    this.v8m_1 = 8;
  }
  protoOf(Animatable).u2 = function () {
    return this.k8m_1.u2();
  };
  protoOf(Animatable).y8o = function () {
    return this.k8m_1.i8n_1;
  };
  protoOf(Animatable).z8o = function () {
    return this.h8m_1.u8n()(this.y8o());
  };
  protoOf(Animatable).a8p = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.l8m_1;
    isRunning$factory_0();
    return this_0.u2();
  };
  protoOf(Animatable).m8o = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.m8m_1;
    targetValue$factory_0();
    return this_0.u2();
  };
  protoOf(Animatable).b8p = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.u2();
    var tmp1_typeConverter = this.h8m_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).c8p = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.q8m_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.z8o() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.b8p(targetValue, animationSpec, initialVelocity, block, $completion) : $super.b8p.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).d8p = function (targetValue, $completion) {
    return this.p8m_1.t8n(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).e8p = function () {
    return this.k8m_1;
  };
  function AnimationResult(endState, endReason) {
    this.f8p_1 = endState;
    this.g8p_1 = endReason;
    this.h8p_1 = 0;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.g8p_1 + ', endState=' + this.f8p_1 + ')';
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    var tmp;
    if (visibilityThreshold === VOID) {
      tmp = 0.01;
    } else {
      tmp = visibilityThreshold;
    }
    visibilityThreshold = tmp;
    return new Animatable(initialValue, get_VectorConverter_2(FloatCompanionObject_instance), visibilityThreshold);
  }
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8p();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8p();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.m8o();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.m8o();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function get_defaultAnimation() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return defaultAnimation;
  }
  var defaultAnimation;
  function get_dpDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  var sizeDefaultSpring;
  var offsetDefaultSpring;
  var rectDefaultSpring;
  var intDefaultSpring;
  var intOffsetDefaultSpring;
  var intSizeDefaultSpring;
  function animateDpAsState$composable(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.f1x(-686158507);
    sourceInformation($composer_0, 'C(animateDpAsState$composable)P(3:c#ui.unit.Dp!1,2)114@5081L165:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_dpDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'DpAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-686158507, $changed, -1, 'androidx.compose.animation.core.animateDpAsState$composable (AnimateAsState.kt:108)');
    }
    var tmp = get_VectorConverter_6(Companion_getInstance());
    var tmp_0 = animationSpec_0;
    var tmp0 = animateValueAsState$composable(new Dp(targetValue), tmp, tmp_0, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function animateValueAsState$composable(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = {_v: label};
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.f1x(-1860487620);
    sourceInformation($composer_0, 'C(animateValueAsState$composable)P(3,4!1,5,2)393@18031L21,399@18213L44,400@18279L79,401@18379L38,402@18456L339,413@18814L42,414@18861L55,417@18921L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().t1y_1) {
        // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
        var value = spring();
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      animationSpec_0 = tmp0;
    }
    if (!(($default & 8) === 0)) {
      visibilityThreshold_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      label_0._v = 'ValueAnimation';
    }
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1860487620, $changed, -1, 'androidx.compose.animation.core.animateValueAsState$composable (AnimateAsState.kt:390)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.f1x(547886695);
    sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_2.r1z();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      var value_0 = mutableStateOf(null);
      $composer_2.s1z(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_2.h1x();
    var toolingOverride = tmp0_0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.f1x(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_3.r1z();
    var tmp_3;
    if (false ? true : it_1 === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0._v, label_0._v);
      $composer_3.s1z(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp0_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_3.h1x();
    var animatable = tmp0_1;
    var listener$delegate = rememberUpdatedState$composable(finishedListener_0, $composer_0, 14 & $changed >> 15);
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
    var $this$run = animationSpec_0;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    if (!(visibilityThreshold_0._v == null)) {
      tmp_7 = $this$run instanceof SpringSpec;
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = !equals($this$run.k8p_1, visibilityThreshold_0._v);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = spring($this$run.i8p_1, $this$run.j8p_1, visibilityThreshold_0._v);
    } else {
      tmp_5 = $this$run;
    }
    var tmp$ret$16 = tmp_5;
    var animSpec$delegate = rememberUpdatedState$composable(tmp$ret$16, $composer_0, 0);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_4 = $composer_0;
    $composer_4.f1x(547886695);
    sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_4.r1z();
    var tmp_8;
    if (false ? true : it_2 === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      Factory_getInstance();
      var value_2 = Channel(-1);
      $composer_4.s1z(value_2);
      tmp_8 = value_2;
    } else {
      tmp_8 = it_2;
    }
    var tmp_9 = tmp_8;
    var tmp0_2 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
    $composer_4.h1x();
    var channel = tmp0_2;
    SideEffect$composable(animateValueAsState$composable$lambda_1(channel, targetValue), $composer_0, 0);
    LaunchedEffect$composable(channel, animateValueAsState$composable$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null), $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.u2();
    var tmp0_3 = tmp0_elvis_lhs == null ? animatable.e8p() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_3;
  }
  function animateFloatAsState$composable(targetValue, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.f1x(-298361457);
    sourceInformation($composer_0, 'C(animateFloatAsState$composable)P(3!1,4,2)75@3368L173:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_defaultAnimation();
    if (!(($default & 4) === 0)) {
      visibilityThreshold_0._v = 0.01;
    }
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (!(($default & 16) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-298361457, $changed, -1, 'androidx.compose.animation.core.animateFloatAsState$composable (AnimateAsState.kt:62)');
    }
    $composer_0.f1x(-143091539);
    sourceInformation($composer_0, '71@3220L83');
    var tmp;
    if (animationSpec_0 === get_defaultAnimation()) {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key1 = visibilityThreshold_0._v;
      var $composer_1 = $composer_0;
      $composer_1.f1x(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t1z(key1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
        // Inline function 'androidx.compose.animation.core.animateFloatAsState$composable.<anonymous>' call
        var value = spring(VOID, VOID, visibilityThreshold_0._v);
        $composer_1.s1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.h1x();
      tmp = tmp0;
    } else {
      tmp = animationSpec_0;
    }
    var tmp1_group = tmp;
    $composer_0.h1x();
    var resolvedAnimSpec = tmp1_group;
    var tmp0_0 = animateValueAsState$composable(targetValue, get_VectorConverter_2(FloatCompanionObject_instance), resolvedAnimSpec, visibilityThreshold_0._v, label_0, finishedListener_0, $composer_0, 14 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  function animateValueAsState$composable$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $listener$delegate.u2();
  }
  function animateValueAsState$composable$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animSpec$delegate.u2();
  }
  function animateValueAsState$composable$lambda_1($channel, $targetValue) {
    return function () {
      $channel.o11($targetValue);
      return Unit_instance;
    };
  }
  function animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.u8p_1 = $newTarget;
    this.v8p_1 = $animatable;
    this.w8p_1 = $animSpec$delegate;
    this.x8p_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$composable$slambda$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(animateValueAsState$composable$slambda$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$composable$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            if (!equals(this.u8p_1, this.v8p_1.m8o())) {
              this.hb_1 = 1;
              suspendResult = this.v8p_1.c8p(this.u8p_1, animateValueAsState$composable$lambda_0(this.w8p_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$composable$lambda(this.x8p_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.v8p_1.u2());
            this.hb_1 = 2;
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
  protoOf(animateValueAsState$composable$slambda$slambda).w1b = function ($this$launch, completion) {
    var i = new animateValueAsState$composable$slambda$slambda(this.u8p_1, this.v8p_1, this.w8p_1, this.x8p_1, completion);
    i.y8p_1 = $this$launch;
    return i;
  };
  function animateValueAsState$composable$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.h8q_1 = $channel;
    this.i8q_1 = $animatable;
    this.j8q_1 = $animSpec$delegate;
    this.k8q_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(animateValueAsState$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            this.m8q_1 = this.h8q_1.v();
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.hb_1 = 2;
            suspendResult = this.m8q_1.ly(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.hb_1 = 3;
              continue $sm;
            }

            var target = this.m8q_1.y();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.h8q_1.s11());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch(this.l8q_1, VOID, VOID, animateValueAsState$composable$slambda$slambda_0(newTarget, this.i8q_1, this.j8q_1, this.k8q_1, null));
            this.hb_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 4) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$composable$slambda(this.h8q_1, this.i8q_1, this.j8q_1, this.k8q_1, completion);
    i.l8q_1 = $this$LaunchedEffect;
    return i;
  };
  function animateValueAsState$composable$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold(Companion_getInstance())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_0(Companion_getInstance_1())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_1(Companion_getInstance_2())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_2(Companion_getInstance_3()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_3(IntCompanionObject_instance));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold_4(Companion_getInstance_4())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_5(Companion_getInstance_5())));
    }
  }
  function get_MillisToNanos() {
    return MillisToNanos;
  }
  var MillisToNanos;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.n8q(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.o8q_1 = animationSpec;
    this.p8q_1 = typeConverter;
    this.q8q_1 = initialValue;
    this.r8q_1 = targetValue;
    this.s8q_1 = this.p8q_1.o8n()(this.q8q_1);
    this.t8q_1 = this.p8q_1.o8n()(this.r8q_1);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_0(initialVelocityVector);
    tmp.u8q_1 = tmp1_elvis_lhs == null ? newInstance(this.p8q_1.o8n()(this.q8q_1)) : tmp1_elvis_lhs;
    this.v8q_1 = this.o8q_1.y8q(this.s8q_1, this.t8q_1, this.u8q_1);
    this.w8q_1 = this.o8q_1.z8q(this.s8q_1, this.t8q_1, this.u8q_1);
    this.x8q_1 = 0;
  }
  protoOf(TargetBasedAnimation).a8r = function () {
    return this.p8q_1;
  };
  protoOf(TargetBasedAnimation).m8o = function () {
    return this.r8q_1;
  };
  protoOf(TargetBasedAnimation).b8r = function () {
    return this.o8q_1.b8r();
  };
  protoOf(TargetBasedAnimation).c8r = function (playTimeNanos) {
    var tmp;
    if (!this.e8r(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var it = this.o8q_1.d8r(playTimeNanos, this.s8q_1, this.t8q_1, this.u8q_1);
      var inductionVariable = 0;
      var last = it.n();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!isNaN_0(it.i1(i))) {
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            var message = 'AnimationVector cannot contain a NaN. ' + it + '. Animation: ' + this + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
         while (inductionVariable < last);
      tmp = this.p8q_1.u8n()(it);
    } else {
      tmp = this.r8q_1;
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).f8r = function () {
    return this.v8q_1;
  };
  protoOf(TargetBasedAnimation).g8r = function (playTimeNanos) {
    var tmp;
    if (!this.e8r(playTimeNanos)) {
      tmp = this.o8q_1.h8r(playTimeNanos, this.s8q_1, this.t8q_1, this.u8q_1);
    } else {
      tmp = this.w8q_1;
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + this.q8q_1 + ' -> ' + this.r8q_1 + ',' + ('initial velocity: ' + this.u8q_1 + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + this.o8q_1);
  };
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.o8n()(initialVelocity));
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.n8q(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.i8r_1 = animationSpec;
    this.j8r_1 = typeConverter;
    this.k8r_1 = initialValue;
    this.l8r_1 = this.j8r_1.o8n()(this.k8r_1);
    this.m8r_1 = copy_0(initialVelocityVector);
    this.o8r_1 = this.j8r_1.u8n()(this.i8r_1.s8r(this.l8r_1, initialVelocityVector));
    this.q8r_1 = false;
    this.p8r_1 = this.i8r_1.t8r(this.l8r_1, initialVelocityVector);
    this.n8r_1 = copy_0(this.i8r_1.u8r(this.p8r_1, this.l8r_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.n8r_1.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.n8r_1.q8n(i, coerceIn(this.n8r_1.i1(i), -this.i8r_1.v8r(), this.i8r_1.v8r()));
      }
       while (inductionVariable < last);
    this.r8r_1 = 0;
  }
  protoOf(DecayAnimation).a8r = function () {
    return this.j8r_1;
  };
  protoOf(DecayAnimation).m8o = function () {
    return this.o8r_1;
  };
  protoOf(DecayAnimation).f8r = function () {
    return this.p8r_1;
  };
  protoOf(DecayAnimation).b8r = function () {
    return this.q8r_1;
  };
  protoOf(DecayAnimation).c8r = function (playTimeNanos) {
    if (!this.e8r(playTimeNanos)) {
      return this.j8r_1.u8n()(this.i8r_1.w8r(playTimeNanos, this.l8r_1, this.m8r_1));
    } else {
      return this.o8r_1;
    }
  };
  protoOf(DecayAnimation).g8r = function (playTimeNanos) {
    if (!this.e8r(playTimeNanos)) {
      return this.i8r_1.u8r(playTimeNanos, this.l8r_1, this.m8r_1);
    } else {
      return this.n8r_1;
    }
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.f8r().l9(new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_instance;
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.i8p_1 = dampingRatio;
    this.j8p_1 = stiffness;
    this.k8p_1 = visibilityThreshold;
    this.l8p_1 = 0;
  }
  protoOf(SpringSpec).n8q = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.i8p_1, this.j8p_1, convert(converter, this.k8p_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.i8p_1 === this.i8p_1 ? other.j8p_1 === this.j8p_1 : false) ? equals(other.k8p_1, this.k8p_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.k8p_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.i8p_1) | 0, 31) + getNumberHashCode(this.j8p_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.o8n()(data);
    }
  }
  function InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.x8r_1 = animation;
    this.y8r_1 = repeatMode;
    this.z8r_1 = initialStartOffset;
    this.a8s_1 = 8;
  }
  protoOf(InfiniteRepeatableSpec).n8q = function (converter) {
    return new VectorizedInfiniteRepeatableSpec(this.x8r_1.n8q(converter), this.y8r_1, this.z8r_1);
  };
  protoOf(InfiniteRepeatableSpec).equals = function (other) {
    var tmp;
    if (other instanceof InfiniteRepeatableSpec) {
      tmp = (equals(other.x8r_1, this.x8r_1) ? other.y8r_1.equals(this.y8r_1) : false) ? equals(other.z8r_1, this.z8r_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(InfiniteRepeatableSpec).hashCode = function () {
    return imul(imul(hashCode(this.x8r_1), 31) + this.y8r_1.hashCode() | 0, 31) + StartOffset__hashCode_impl_ith3z7(this.z8r_1) | 0;
  };
  function infiniteRepeatable(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    return new InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset);
  }
  function KeyframesSpecConfig() {
    this.b8s_1 = 300;
    this.c8s_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.d8s_1 = LinkedHashMap_init_$Create$();
    this.e8s_1 = 8;
  }
  protoOf(KeyframesSpecConfig).f8s = function (_this__u8e3s4, timeStamp) {
    // Inline function 'kotlin.also' call
    var this_0 = new KeyframeEntity(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.KeyframesSpecConfig.at.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.d8s_1.r2(timeStamp, this_0);
    return this_0;
  };
  protoOf(KeyframesSpecConfig).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof KeyframesSpecConfig) {
      tmp_1 = this.c8s_1 === other.c8s_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.b8s_1 === other.b8s_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.d8s_1, other.d8s_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KeyframesSpecConfig).hashCode = function () {
    return imul(imul(this.b8s_1, 31) + this.c8s_1 | 0, 31) + hashCode(this.d8s_1) | 0;
  };
  function KeyframeEntity(value, easing) {
    easing = easing === VOID ? get_LinearEasing() : easing;
    this.g8s_1 = value;
    this.h8s_1 = easing;
    this.i8s_1 = 8;
  }
  protoOf(KeyframeEntity).j8s = function (convertToVector) {
    return to(convertToVector(this.g8s_1), this.h8s_1);
  };
  protoOf(KeyframeEntity).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof KeyframeEntity) {
      tmp_0 = equals(other.g8s_1, this.g8s_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.h8s_1, this.h8s_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KeyframeEntity).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.g8s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(tmp$ret$0, 31) + hashCode(this.h8s_1) | 0;
  };
  function KeyframesSpec(config) {
    this.k8s_1 = config;
    this.l8s_1 = 0;
  }
  protoOf(KeyframesSpec).equals = function (other) {
    var tmp;
    if (other instanceof KeyframesSpec) {
      tmp = this.k8s_1.equals(other.k8s_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(KeyframesSpec).hashCode = function () {
    return this.k8s_1.hashCode();
  };
  protoOf(KeyframesSpec).n8q = function (converter) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = this.k8s_1.d8s_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.n()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.q2().v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.t2();
      // Inline function 'androidx.compose.animation.core.KeyframesSpec.vectorize.<anonymous>' call
      var tmp$ret$1 = element.u2().j8s(converter.o8n());
      destination.r2(tmp, tmp$ret$1);
    }
    return new VectorizedKeyframesSpec(destination, this.k8s_1.b8s_1, this.k8s_1.c8s_1);
  };
  function keyframes(init) {
    // Inline function 'kotlin.apply' call
    var this_0 = new KeyframesSpecConfig();
    // Inline function 'kotlin.contracts.contract' call
    init(this_0);
    return new KeyframesSpec(this_0);
  }
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.m8s_1 = durationMillis;
    this.n8s_1 = delay;
    this.o8s_1 = easing;
    this.p8s_1 = 0;
  }
  protoOf(TweenSpec).n8q = function (converter) {
    return new VectorizedTweenSpec(this.m8s_1, this.n8s_1, this.o8s_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.m8s_1 === this.m8s_1 ? other.n8s_1 === this.n8s_1 : false) ? equals(other.o8s_1, this.o8s_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.m8s_1, 31) + hashCode(this.o8s_1) | 0, 31) + this.n8s_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  var RepeatMode_Restart_instance;
  var RepeatMode_Reverse_instance;
  var RepeatMode_entriesInitialized;
  function RepeatMode_initEntries() {
    if (RepeatMode_entriesInitialized)
      return Unit_instance;
    RepeatMode_entriesInitialized = true;
    RepeatMode_Restart_instance = new RepeatMode('Restart', 0);
    RepeatMode_Reverse_instance = new RepeatMode('Reverse', 1);
  }
  function RepeatMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _StartOffset___init__impl__615djw(value) {
    return value;
  }
  function _StartOffset___get_value__impl__8sikig($this) {
    return $this;
  }
  function _StartOffset___init__impl__615djw_0(offsetMillis, offsetType) {
    offsetType = offsetType === VOID ? Companion_getInstance_8().q8s_1 : offsetType;
    return _StartOffset___init__impl__615djw(toLong(imul(offsetMillis, _StartOffsetType___get_value__impl__i1pfem(offsetType))));
  }
  function StartOffset__hashCode_impl_ith3z7($this) {
    return $this.hashCode();
  }
  function AnimationConstants() {
    AnimationConstants_instance = this;
    this.s8s_1 = 300;
    this.t8s_1 = new Long(0, -2147483648);
    this.u8s_1 = 0;
  }
  var AnimationConstants_instance;
  function AnimationConstants_getInstance() {
    if (AnimationConstants_instance == null)
      new AnimationConstants();
    return AnimationConstants_instance;
  }
  function _StartOffsetType___init__impl__g1ur7a(value) {
    return value;
  }
  function _StartOffsetType___get_value__impl__i1pfem($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.q8s_1 = _StartOffsetType___init__impl__g1ur7a(-1);
    this.r8s_1 = _StartOffsetType___init__impl__g1ur7a(1);
  }
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function RepeatMode_Restart_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Restart_instance;
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    var tmp;
    if (lastFrameTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = lastFrameTimeNanos;
    }
    lastFrameTimeNanos = tmp;
    var tmp_0;
    if (finishedTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    } else {
      tmp_0 = finishedTimeNanos;
    }
    finishedTimeNanos = tmp_0;
    isRunning = isRunning === VOID ? false : isRunning;
    this.g8n_1 = typeConverter;
    this.h8n_1 = mutableStateOf(initialValue);
    var tmp_1 = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_0(initialVelocityVector);
    tmp_1.i8n_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.g8n_1, initialValue) : tmp1_elvis_lhs;
    this.j8n_1 = lastFrameTimeNanos;
    this.k8n_1 = finishedTimeNanos;
    this.l8n_1 = isRunning;
    this.m8n_1 = 0;
  }
  protoOf(AnimationState).h1a = function (_set____db54di) {
    var this_0 = this.h8n_1;
    value$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationState).u2 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.h8n_1;
    value$factory_0();
    return this_0.u2();
  };
  protoOf(AnimationState).z8o = function () {
    return this.g8n_1.u8n()(this.i8n_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + this.u2() + ', ') + ('velocity=' + this.z8o() + ', ') + ('isRunning=' + this.l8n_1 + ', ') + ('lastFrameTimeNanos=' + this.j8n_1.toString() + ', ') + ('finishedTimeNanos=' + this.k8n_1.toString()) + ')';
  };
  function copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.u2() : value;
    velocityVector = velocityVector === VOID ? copy_0(_this__u8e3s4.i8n_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.j8n_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.k8n_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.l8n_1 : isRunning;
    return new AnimationState(_this__u8e3s4.g8n_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.w8m_1 = typeConverter;
    this.x8m_1 = targetValue;
    this.y8m_1 = startTimeNanos;
    this.z8m_1 = onCancel;
    this.a8n_1 = mutableStateOf(initialValue);
    this.b8n_1 = copy_0(initialVelocityVector);
    this.c8n_1 = lastFrameTimeNanos;
    var tmp = this;
    AnimationConstants_getInstance();
    tmp.d8n_1 = new Long(0, -2147483648);
    this.e8n_1 = mutableStateOf(isRunning);
    this.f8n_1 = 8;
  }
  protoOf(AnimationScope).h1a = function (_set____db54di) {
    var this_0 = this.a8n_1;
    value$factory_1();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).u2 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.a8n_1;
    value$factory_2();
    return this_0.u2();
  };
  protoOf(AnimationScope).v8s = function (_set____db54di) {
    var this_0 = this.e8n_1;
    isRunning$factory_1();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).a8p = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.e8n_1;
    isRunning$factory_2();
    return this_0.u2();
  };
  protoOf(AnimationScope).z8o = function () {
    return this.w8m_1.u8n()(this.b8n_1);
  };
  protoOf(AnimationScope).n8n = function () {
    this.v8s(false);
    this.z8m_1();
  };
  function createZeroVectorFrom(_this__u8e3s4, value) {
    return newInstance(_this__u8e3s4.o8n()(value));
  }
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    var tmp;
    if (lastFrameTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = lastFrameTimeNanos;
    }
    lastFrameTimeNanos = tmp;
    var tmp_0;
    if (finishedTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    } else {
      tmp_0 = finishedTimeNanos;
    }
    finishedTimeNanos = tmp_0;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter_2(FloatCompanionObject_instance), initialValue, AnimationVector_0(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.u2();
    }, function (receiver, value) {
      return receiver.h1a(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.u2();
    }, function (receiver, value) {
      return receiver.h1a(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.u2();
    }, function (receiver, value) {
      return receiver.h1a(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.u2();
    }, function (receiver, value) {
      return receiver.h1a(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8p();
    }, function (receiver, value) {
      return receiver.v8s(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8p();
    }, function (receiver, value) {
      return receiver.v8s(value);
    });
  }
  function AnimationVector() {
    this.p8n_1 = 0;
  }
  function AnimationVector1D(initVal) {
    AnimationVector.call(this);
    this.y8s_1 = initVal;
    this.z8s_1 = 1;
    this.a8t_1 = 8;
  }
  protoOf(AnimationVector1D).m2b = function () {
    this.y8s_1 = 0.0;
  };
  protoOf(AnimationVector1D).w8s = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).i1 = function (index) {
    if (index === 0) {
      return this.y8s_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).q8n = function (index, value) {
    if (index === 0) {
      this.y8s_1 = value;
    }
  };
  protoOf(AnimationVector1D).n = function () {
    return this.z8s_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.y8s_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.y8s_1 === this.y8s_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.y8s_1);
  };
  function AnimationVector2D(v1, v2) {
    AnimationVector.call(this);
    this.c8t_1 = v1;
    this.d8t_1 = v2;
    this.e8t_1 = 2;
    this.f8t_1 = 8;
  }
  protoOf(AnimationVector2D).m2b = function () {
    this.c8t_1 = 0.0;
    this.d8t_1 = 0.0;
  };
  protoOf(AnimationVector2D).w8s = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).i1 = function (index) {
    switch (index) {
      case 0:
        return this.c8t_1;
      case 1:
        return this.d8t_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).q8n = function (index, value) {
    if (index === 0)
      this.c8t_1 = value;
    else if (index === 1)
      this.d8t_1 = value;
  };
  protoOf(AnimationVector2D).n = function () {
    return this.e8t_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.c8t_1 + ', v2 = ' + this.d8t_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.c8t_1 === this.c8t_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.d8t_1 === this.d8t_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.c8t_1), 31) + getNumberHashCode(this.d8t_1) | 0;
  };
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector.call(this);
    this.h8t_1 = v1;
    this.i8t_1 = v2;
    this.j8t_1 = v3;
    this.k8t_1 = v4;
    this.l8t_1 = 4;
    this.m8t_1 = 8;
  }
  protoOf(AnimationVector4D).m2b = function () {
    this.h8t_1 = 0.0;
    this.i8t_1 = 0.0;
    this.j8t_1 = 0.0;
    this.k8t_1 = 0.0;
  };
  protoOf(AnimationVector4D).w8s = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).i1 = function (index) {
    switch (index) {
      case 0:
        return this.h8t_1;
      case 1:
        return this.i8t_1;
      case 2:
        return this.j8t_1;
      case 3:
        return this.k8t_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).q8n = function (index, value) {
    switch (index) {
      case 0:
        this.h8t_1 = value;
        break;
      case 1:
        this.i8t_1 = value;
        break;
      case 2:
        this.j8t_1 = value;
        break;
      case 3:
        this.k8t_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).n = function () {
    return this.l8t_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.h8t_1 + ', v2 = ' + this.i8t_1 + ', v3 = ' + this.j8t_1 + ', v4 = ' + this.k8t_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.h8t_1 === this.h8t_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.i8t_1 === this.i8t_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.j8t_1 === this.j8t_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.k8t_1 === this.k8t_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.h8t_1), 31) + getNumberHashCode(this.i8t_1) | 0, 31) + getNumberHashCode(this.j8t_1) | 0, 31) + getNumberHashCode(this.k8t_1) | 0;
  };
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.w8s();
    return tmp instanceof AnimationVector ? tmp : THROW_CCE();
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector.call(this);
    this.o8t_1 = v1;
    this.p8t_1 = v2;
    this.q8t_1 = v3;
    this.r8t_1 = 3;
    this.s8t_1 = 8;
  }
  protoOf(AnimationVector3D).m2b = function () {
    this.o8t_1 = 0.0;
    this.p8t_1 = 0.0;
    this.q8t_1 = 0.0;
  };
  protoOf(AnimationVector3D).w8s = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).i1 = function (index) {
    switch (index) {
      case 0:
        return this.o8t_1;
      case 1:
        return this.p8t_1;
      case 2:
        return this.q8t_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).q8n = function (index, value) {
    switch (index) {
      case 0:
        this.o8t_1 = value;
        break;
      case 1:
        this.p8t_1 = value;
        break;
      case 2:
        this.q8t_1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).n = function () {
    return this.r8t_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.o8t_1 + ', v2 = ' + this.p8t_1 + ', v3 = ' + this.q8t_1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.o8t_1 === this.o8t_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.p8t_1 === this.p8t_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.q8t_1 === this.q8t_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.o8t_1), 31) + getNumberHashCode(this.p8t_1) | 0, 31) + getNumberHashCode(this.q8t_1) | 0;
  };
  function copy_0(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.q8n(i, _this__u8e3s4.i1(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.q8n(i, source.i1(i));
      }
       while (inductionVariable < last);
  }
  function AnimationVector_0(v1) {
    return new AnimationVector1D(v1);
  }
  function ComplexDouble(_real, _imaginary) {
    this.t8t_1 = _real;
    this.u8t_1 = _imaginary;
  }
  protoOf(ComplexDouble).v8t = function () {
    return this.t8t_1;
  };
  protoOf(ComplexDouble).w8t = function () {
    return this.u8t_1;
  };
  protoOf(ComplexDouble).toString = function () {
    return 'ComplexDouble(_real=' + this.t8t_1 + ', _imaginary=' + this.u8t_1 + ')';
  };
  protoOf(ComplexDouble).hashCode = function () {
    var result = getNumberHashCode(this.t8t_1);
    result = imul(result, 31) + getNumberHashCode(this.u8t_1) | 0;
    return result;
  };
  protoOf(ComplexDouble).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this.t8t_1, tmp0_other_with_cast.t8t_1))
      return false;
    if (!equals(this.u8t_1, tmp0_other_with_cast.u8t_1))
      return false;
    return true;
  };
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      // Inline function 'kotlin.math.abs' call
      var x = Math.abs(num);
      var tmp$ret$1 = Math.sqrt(x);
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      // Inline function 'kotlin.math.sqrt' call
      var tmp$ret$2 = Math.sqrt(num);
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.x8t_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).n8q = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.x8t_1);
  };
  function _get_valueVector__r10idf($this) {
    var tmp = $this.z8t_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.a8u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.b8u_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.y8t_1 = floatDecaySpec;
    this.c8u_1 = this.y8t_1.v8r();
  }
  protoOf(VectorizedFloatDecaySpec).v8r = function () {
    return this.c8u_1;
  };
  protoOf(VectorizedFloatDecaySpec).w8r = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.z8t_1 == null)) {
      this.z8t_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).q8n(i, this.y8t_1.d8u(playTimeNanos, initialValue.i1(i), initialVelocity.i1(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).t8r = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.a8u_1 == null)) {
      this.a8u_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = maxDuration;
        var b = this.y8t_1.e8u(initialValue.i1(i), initialVelocity.i1(i));
        maxDuration = a.a7(b) >= 0 ? a : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).u8r = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.a8u_1 == null)) {
      this.a8u_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).q8n(i, this.y8t_1.f8u(playTimeNanos, initialValue.i1(i), initialVelocity.i1(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).s8r = function (initialValue, initialVelocity) {
    if (!!(this.b8u_1 == null)) {
      this.b8u_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).q8n(i, this.y8t_1.g8u(initialValue.i1(i), initialVelocity.i1(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  var LinearOutSlowInEasing;
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  function evaluateCubic($this, a, b, m) {
    return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
  }
  function CubicBezierEasing(a, b, c, d) {
    this.h8u_1 = a;
    this.i8u_1 = b;
    this.j8u_1 = c;
    this.k8u_1 = d;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((!isNaN_0(this.h8u_1) ? !isNaN_0(this.i8u_1) : false) ? !isNaN_0(this.j8u_1) : false) ? !isNaN_0(this.k8u_1) : false)) {
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      var message = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.h8u_1 + ', ' + this.i8u_1 + ', ' + this.j8u_1 + ', ' + this.k8u_1 + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.l8u_1 = 0;
  }
  protoOf(CubicBezierEasing).m8u = function (fraction) {
    if (fraction > 0.0 ? fraction < 1.0 : false) {
      var start = 0.0;
      var end = 1.0;
      while (true) {
        var midpoint = (start + end) / 2;
        var estimate = evaluateCubic(this, this.h8u_1, this.j8u_1, midpoint);
        // Inline function 'kotlin.math.absoluteValue' call
        var this_0 = fraction - estimate;
        if (Math.abs(this_0) < 0.001)
          return evaluateCubic(this, this.i8u_1, this.k8u_1, midpoint);
        if (estimate < fraction)
          start = midpoint;
        else
          end = midpoint;
      }
    } else {
      return fraction;
    }
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.h8u_1 === other.h8u_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.i8u_1 === other.i8u_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.j8u_1 === other.j8u_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.k8u_1 === other.k8u_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.h8u_1), 31) + getNumberHashCode(this.i8u_1) | 0, 31) + getNumberHashCode(this.j8u_1) | 0, 31) + getNumberHashCode(this.k8u_1) | 0;
  };
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.n8u_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).m8u = function (fraction) {
    return this.n8u_1(fraction);
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function FloatAnimationSpec() {
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    var tmp_1;
    if (visibilityThreshold === VOID) {
      tmp_1 = 0.01;
    } else {
      tmp_1 = visibilityThreshold;
    }
    visibilityThreshold = tmp_1;
    this.t8u_1 = dampingRatio;
    this.u8u_1 = stiffness;
    this.v8u_1 = visibilityThreshold;
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    this_0.f8v(this.t8u_1);
    this_0.g8v(this.u8u_1);
    tmp_2.w8u_1 = this_0;
    this.x8u_1 = 8;
  }
  protoOf(FloatSpringSpec).o8u = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.l9(get_MillisToNanos());
    this.w8u_1.y8u_1 = targetValue;
    var value = _Motion___get_value__impl__e0x31d(this.w8u_1.h8v(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  protoOf(FloatSpringSpec).p8u = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.l9(get_MillisToNanos());
    this.w8u_1.y8u_1 = targetValue;
    var velocity = _Motion___get_velocity__impl__h2mglt(this.w8u_1.h8v(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  protoOf(FloatSpringSpec).q8u = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).r8u = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.w8u_1.i8v();
    var tmp1_dampingRatio = this.w8u_1.e8v_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.v8u_1;
    var tmp3_initialVelocity = initialVelocity / this.v8u_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).m9(get_MillisToNanos());
  };
  protoOf(FloatSpringSpec).n8q = function (converter) {
    return this.s8u(converter);
  };
  function clampPlayTime($this, playTime) {
    // Inline function 'kotlin.Long.minus' call
    var other = $this.k8v_1;
    var tmp$ret$0 = playTime.ra(toLong(other));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong($this.j8v_1));
  }
  function FloatTweenSpec(duration, delay, easing) {
    var tmp;
    if (duration === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = duration;
    }
    duration = tmp;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.j8v_1 = duration;
    this.k8v_1 = delay;
    this.l8v_1 = easing;
    this.m8v_1 = 0;
  }
  protoOf(FloatTweenSpec).o8u = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.l9(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    var tmp;
    if (this.j8v_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = this.j8v_1;
      tmp = clampedPlayTime.eb() / other;
    }
    var rawFraction = tmp;
    var fraction = this.l8v_1.m8u(coerceIn(rawFraction, 0.0, 1.0));
    return lerp(initialValue, targetValue, fraction);
  };
  protoOf(FloatTweenSpec).r8u = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.k8v_1 + this.j8v_1 | 0).m9(get_MillisToNanos());
  };
  protoOf(FloatTweenSpec).p8u = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.l9(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (clampedPlayTime.a7(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTime.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = clampedPlayTime.ra(toLong(1));
    var startNum = this.o8u(tmp$ret$0.m9(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    var endNum = this.o8u(clampedPlayTime.m9(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).n8q = function (converter) {
    return this.s8u(converter);
  };
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.g8w_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).p54 = function ($completion) {
    var tmp = this.o54($completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = withFrameNanos(this.g8w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).o54 = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.g8w_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.p54($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v8v_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$0).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            var tmp_0 = this;
            tmp_0.w8v_1 = this.u6().ob(Key_instance);
            if (this.w8v_1 == null) {
              this.hb_1 = 2;
              suspendResult = withFrameNanos(this.v8v_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 1;
              suspendResult = this.w8v_1.h8w(withInfiniteAnimationFrameNanos$slambda_0(this.v8v_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.x8v_1 = suspendResult;
            this.hb_1 = 3;
            continue $sm;
          case 2:
            this.x8v_1 = suspendResult;
            this.hb_1 = 3;
            continue $sm;
          case 3:
            return this.x8v_1;
          case 4:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 4) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function Mutator(priority, job) {
    this.i8w_1 = priority;
    this.j8w_1 = job;
  }
  protoOf(Mutator).k8w = function (other) {
    return this.i8w_1.k9(other.i8w_1) >= 0;
  };
  protoOf(Mutator).l8w = function () {
    return this.j8w_1.vi(new MutationInterruptedException());
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.r8n_1.dq();
      if (oldMutator == null ? true : mutator.k8w(oldMutator)) {
        if ($this.r8n_1.o2d(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.l8w();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.u8w_1 = $priority;
    this.v8w_1 = this$0;
    this.w8w_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).e8x = function ($this$coroutineScope, $completion) {
    var tmp = this.w1b($this$coroutineScope, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutatorMutex$mutate$slambda).fc = function (p1, $completion) {
    return this.e8x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 13;
            this.y8w_1 = new Mutator(this.u8w_1, ensureNotNull(this.x8w_1.mh().ob(Key_instance_0)));
            tryMutateOrCancel(this.v8w_1, this.y8w_1);
            this.hb_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.a8x_1 = this.v8w_1.s8n_1;
            var tmp_1 = this;
            tmp_1.b8x_1 = null;
            this.hb_1 = 2;
            suspendResult = this.a8x_1.o1s(this.b8x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.hb_1 = 4;
            continue $sm;
          case 4:
            this.ib_1 = 12;
            this.hb_1 = 5;
            continue $sm;
          case 5:
            this.ib_1 = 11;
            this.hb_1 = 6;
            suspendResult = this.w8w_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.d8x_1 = suspendResult;
            this.hb_1 = 7;
            continue $sm;
          case 7:
            var tmp_2 = this.d8x_1;
            this.ib_1 = 12;
            this.v8w_1.r8n_1.o2d(this.y8w_1, null);
            this.c8x_1 = tmp_2;
            this.ib_1 = 13;
            this.hb_1 = 8;
            var tmp_3 = this;
            continue $sm;
          case 8:
            var tmp_4 = this.c8x_1;
            this.ib_1 = 13;
            this.a8x_1.q1s(this.b8x_1);
            this.z8w_1 = tmp_4;
            this.hb_1 = 10;
            continue $sm;
          case 9:
            this.ib_1 = 13;
            this.a8x_1.q1s(this.b8x_1);
            if (false) {
              this.hb_1 = 1;
              continue $sm;
            }

            this.hb_1 = 10;
            continue $sm;
          case 10:
            return this.z8w_1;
          case 11:
            this.ib_1 = 12;
            var t = this.kb_1;
            this.v8w_1.r8n_1.o2d(this.y8w_1, null);
            throw t;
          case 12:
            this.ib_1 = 13;
            var t_0 = this.kb_1;
            this.a8x_1.q1s(this.b8x_1);
            throw t_0;
          case 13:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 13) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).w1b = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.u8w_1, this.v8w_1, this.w8w_1, completion);
    i.x8w_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.e8x($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.r8n_1 = new AtomicReference(null);
    this.s8n_1 = Mutex();
  }
  protoOf(MutatorMutex).f8x = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).t8n = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.f8x(priority, block, $completion) : $super.f8x.call(this, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_instance;
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    // Inline function 'androidx.compose.animation.core.plus' call
    var this_0 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var this_1 = complexSqrt(partialRoot);
    this_1.t8t_1 = this_1.t8t_1 + this_0;
    this_1.t8t_1 = this_1.t8t_1 * 0.5;
    this_1.u8t_1 = this_1.u8t_1 * 0.5;
    var firstRoot = this_1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    // Inline function 'androidx.compose.animation.core.minus' call
    var this_2 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var this_3 = complexSqrt(partialRoot);
    this_3.t8t_1 = this_3.t8t_1 * -1;
    this_3.u8t_1 = this_3.u8t_1 * -1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    this_3.t8t_1 = this_3.t8t_1 + this_2;
    this_3.t8t_1 = this_3.t8t_1 * 0.5;
    this_3.u8t_1 = this_3.u8t_1 * 0.5;
    var secondRoot = this_3;
    return estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 ? initialVelocity === 0.0 : false) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0.0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRoot, p0, v0, delta) : estimateCriticallyDamped(firstRoot, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) {
    var r1 = firstRoot.v8t();
    var r2 = secondRoot.v8t();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 ? -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta : false) {
      if (c2 > 0.0 ? c1 < 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    // Inline function 'kotlin.math.abs' call
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.v8t();
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRoot.w8t();
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.v8t();
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.ln' call
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 ? -xInflection < delta : false) {
      if (c2 < 0.0 ? c1 > 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  var UNSET;
  function init($this) {
    if ($this.a8v_1) {
      return Unit_instance;
    }
    if ($this.y8u_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.e8v_1 * $this.e8v_1;
    if ($this.e8v_1 > 1.0) {
      var tmp = $this;
      var tmp_0 = -$this.e8v_1 * $this.z8u_1;
      var tmp_1 = $this.z8u_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      tmp.b8v_1 = tmp_0 + tmp_1 * Math.sqrt(x);
      var tmp_2 = $this;
      var tmp_3 = -$this.e8v_1 * $this.z8u_1;
      var tmp_4 = $this.z8u_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_0 = dampingRatioSquared - 1;
      tmp_2.c8v_1 = tmp_3 - tmp_4 * Math.sqrt(x_0);
    } else if ($this.e8v_1 >= 0.0 ? $this.e8v_1 < 1.0 : false) {
      var tmp_5 = $this;
      var tmp_6 = $this.z8u_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_1 = 1 - dampingRatioSquared;
      tmp_5.d8v_1 = tmp_6 * Math.sqrt(x_1);
    }
    $this.a8v_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.y8u_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.z8u_1 = Math.sqrt(50.0);
    this.a8v_1 = false;
    this.b8v_1 = 0.0;
    this.c8v_1 = 0.0;
    this.d8v_1 = 0.0;
    var tmp_0 = this;
    tmp_0.e8v_1 = 1.0;
  }
  protoOf(SpringSimulation).g8v = function (value) {
    if (this.i8v() <= 0.0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.z8u_1 = Math.sqrt(value);
    this.a8v_1 = false;
  };
  protoOf(SpringSimulation).i8v = function () {
    return this.z8u_1 * this.z8u_1;
  };
  protoOf(SpringSimulation).f8v = function (value) {
    if (value < 0.0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.e8v_1 = value;
    this.a8v_1 = false;
  };
  protoOf(SpringSimulation).h8v = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.y8u_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = timeElapsed.b7() / 1000.0;
    var displacement;
    var currentVelocity;
    if (this.e8v_1 > 1.0) {
      var coeffA = adjustedDisplacement - (this.c8v_1 * adjustedDisplacement - lastVelocity) / (this.c8v_1 - this.b8v_1);
      var coeffB = (this.c8v_1 * adjustedDisplacement - lastVelocity) / (this.c8v_1 - this.b8v_1);
      // Inline function 'kotlin.math.exp' call
      var x = this.c8v_1 * deltaT;
      var tmp = coeffA * Math.exp(x);
      // Inline function 'kotlin.math.exp' call
      var x_0 = this.b8v_1 * deltaT;
      displacement = tmp + coeffB * Math.exp(x_0);
      var tmp_0 = coeffA * this.c8v_1;
      // Inline function 'kotlin.math.exp' call
      var x_1 = this.c8v_1 * deltaT;
      var tmp_1 = tmp_0 * Math.exp(x_1);
      var tmp_2 = coeffB * this.b8v_1;
      // Inline function 'kotlin.math.exp' call
      var x_2 = this.b8v_1 * deltaT;
      currentVelocity = tmp_1 + tmp_2 * Math.exp(x_2);
    } else if (this.e8v_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.z8u_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_3 = -this.z8u_1 * deltaT;
      displacement = tmp_3 * Math.exp(x_3);
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_4 = -this.z8u_1 * deltaT;
      var tmp_5 = tmp_4 * Math.exp(x_4) * -this.z8u_1;
      // Inline function 'kotlin.math.exp' call
      var x_5 = -this.z8u_1 * deltaT;
      currentVelocity = tmp_5 + coeffB_0 * Math.exp(x_5);
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.d8v_1 * (this.e8v_1 * this.z8u_1 * adjustedDisplacement + lastVelocity);
      // Inline function 'kotlin.math.exp' call
      var x_6 = -this.e8v_1 * this.z8u_1 * deltaT;
      var tmp_6 = Math.exp(x_6);
      // Inline function 'kotlin.math.cos' call
      var x_7 = this.d8v_1 * deltaT;
      var tmp_7 = cosCoeff * Math.cos(x_7);
      // Inline function 'kotlin.math.sin' call
      var x_8 = this.d8v_1 * deltaT;
      displacement = tmp_6 * (tmp_7 + sinCoeff * Math.sin(x_8));
      var tmp_8 = displacement * -this.z8u_1 * this.e8v_1;
      // Inline function 'kotlin.math.exp' call
      var x_9 = -this.e8v_1 * this.z8u_1 * deltaT;
      var tmp_9 = Math.exp(x_9);
      var tmp_10 = -this.d8v_1 * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var x_10 = this.d8v_1 * deltaT;
      var tmp_11 = tmp_10 * Math.sin(x_10);
      var tmp_12 = this.d8v_1 * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      var x_11 = this.d8v_1 * deltaT;
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * Math.cos(x_11));
    }
    var newValue = displacement + this.y8u_1;
    var newVelocity = currentVelocity;
    return Motion(newValue, newVelocity);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).xa(32).db();
    return floatFromBits(bits);
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).za(new Long(-1, 0)).db();
    return floatFromBits(bits);
  }
  function Motion(value, velocity) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(value));
    var v2 = toLong(toBits(velocity));
    var tmp$ret$0 = v1.wa(32).ab(v2.za(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    var tmp;
    if (startTimeNanos === VOID) {
      AnimationConstants_getInstance();
      tmp = new Long(0, -2147483648);
    } else {
      tmp = startTimeNanos;
    }
    startTimeNanos = tmp;
    var tmp_0;
    if (block === VOID) {
      tmp_0 = animate$lambda;
    } else {
      tmp_0 = block;
    }
    block = tmp_0;
    var tmp_1 = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_1.jb_1 = Unit_instance;
    tmp_1.kb_1 = null;
    return tmp_1.tb();
  }
  function updateState(_this__u8e3s4, state) {
    state.h1a(_this__u8e3s4.u2());
    copyFrom(state.i8n_1, _this__u8e3s4.b8n_1);
    state.k8n_1 = _this__u8e3s4.d8n_1;
    state.j8n_1 = _this__u8e3s4.c8n_1;
    state.l8n_1 = _this__u8e3s4.a8p();
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.ob(Key_instance_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n5k();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(scale >= 0.0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return scale;
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.f8r();
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = frameTimeNanos.ra(_this__u8e3s4.y8m_1).eb() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.c8n_1 = frameTimeNanos;
    _this__u8e3s4.h1a(anim.c8r(playTimeNanos));
    _this__u8e3s4.b8n_1 = anim.g8r(playTimeNanos);
    var isLastFrame = anim.e8r(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.d8n_1 = _this__u8e3s4.c8n_1;
      _this__u8e3s4.v8s(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.u2();
    var tmp1_typeConverter = _this__u8e3s4.g8n_1;
    var tmp2_initialVelocityVector = _this__u8e3s4.i8n_1;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    var tmp_0;
    if (sequentialAnimation) {
      tmp_0 = _this__u8e3s4.j8n_1;
    } else {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    }
    return animate(_this__u8e3s4, anim, tmp_0, block, $completion);
  }
  function animateDecay(_this__u8e3s4, animationSpec, sequentialAnimation, block, $completion) {
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateDecay$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.u2();
    var tmp1_initialVelocityVector = _this__u8e3s4.i8n_1;
    var tmp2_typeConverter = _this__u8e3s4.g8n_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    var tmp_0;
    if (sequentialAnimation) {
      tmp_0 = _this__u8e3s4.j8n_1;
    } else {
      AnimationConstants_getInstance();
      tmp_0 = new Long(0, -2147483648);
    }
    return animate(_this__u8e3s4, anim, tmp_0, block, $completion);
  }
  function animate_0(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter_2(FloatCompanionObject_instance), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (initialVelocity == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>' call
      tmp = typeConverter.o8n()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.o8n()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    return animate(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
  }
  function animate$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.l8n_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      // Inline function 'kotlin.apply' call
      var tmp = $animation.a8r();
      var tmp_0 = $animation.m8o();
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_instance;
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.l8n_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_instance;
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var other = get_AnimationDebugDurationScale();
      var tmp$ret$0 = it.l9(toLong(other));
      return $onFrame(tmp$ret$0);
    };
  }
  function animateTo$lambda($this$null) {
    return Unit_instance;
  }
  function animateDecay$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.u2(), $typeConverter.u8n()($this$animate.b8n_1));
      return Unit_instance;
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o8x_1 = _this__u8e3s4;
    this.p8x_1 = animation;
    this.q8x_1 = startTimeNanos;
    this.r8x_1 = block;
  }
  protoOf($animateCOROUTINE$1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 7;
            this.s8x_1 = this.p8x_1.c8r(new Long(0, 0));
            this.t8x_1 = this.p8x_1.g8r(new Long(0, 0));
            this.u8x_1 = {_v: null};
            this.ib_1 = 6;
            AnimationConstants_getInstance();
            if (this.q8x_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.v8x_1 = get_durationScale(this.u6());
              this.hb_1 = 1;
              suspendResult = callWithFrameNanos(this.p8x_1, animate$lambda_0(this.u8x_1, this.s8x_1, this.p8x_1, this.t8x_1, this.v8x_1, this.o8x_1, this.r8x_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.p8x_1.a8r();
              var tmp_2 = this.p8x_1.m8o();
              var this_0 = new AnimationScope(this.s8x_1, tmp_1, this.t8x_1, this.q8x_1, tmp_2, this.q8x_1, true, animate$lambda_1(this.o8x_1));
              doAnimationFrameWithScale(this_0, this.q8x_1, get_durationScale(this.u6()), this.p8x_1, this.o8x_1, this.r8x_1);
              this.u8x_1._v = this_0;
              this.hb_1 = 2;
              continue $sm;
            }

          case 1:
            this.hb_1 = 2;
            continue $sm;
          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.u8x_1._v).a8p()) {
              this.hb_1 = 5;
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.w8x_1 = get_durationScale(this.u6());
            this.hb_1 = 4;
            suspendResult = callWithFrameNanos(this.p8x_1, animate$lambda_2(this.u8x_1, this.w8x_1, this.p8x_1, this.o8x_1, this.r8x_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.hb_1 = 3;
            continue $sm;
          case 5:
            this.ib_1 = 7;
            this.hb_1 = 8;
            continue $sm;
          case 6:
            this.ib_1 = 7;
            var tmp_4 = this.kb_1;
            if (tmp_4 instanceof CancellationException) {
              var e = this.kb_1;
              var tmp0_safe_receiver = this.u8x_1._v;
              if (tmp0_safe_receiver != null) {
                tmp0_safe_receiver.v8s(false);
              }
              var tmp1_safe_receiver = this.u8x_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c8n_1, this.o8x_1.j8n_1)) {
                this.o8x_1.l8n_1 = false;
              }
              throw e;
            } else {
              throw this.kb_1;
            }

          case 7:
            throw this.kb_1;
          case 8:
            this.ib_1 = 7;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.ib_1 === 7) {
          throw e_0;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f8y_1 = _this__u8e3s4;
    this.g8y_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$2).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            if (this.f8y_1.b8r()) {
              this.hb_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.g8y_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.g8y_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h8y_1 = suspendResult;
            this.hb_1 = 3;
            continue $sm;
          case 2:
            this.h8y_1 = suspendResult;
            this.hb_1 = 3;
            continue $sm;
          case 3:
            return this.h8y_1;
          case 4:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 4) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var this_0 = $this.k8y_1;
    targetValue$factory_1();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function _get_targetValue__jjlmb5($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.k8y_1;
    targetValue$factory_2();
    return this_0.u2();
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var this_0 = $this.l8y_1;
    animationSpec$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var this_0 = $this.m8y_1;
    animation$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function _set_offsetTimeNanos__i9wy86($this, _set____db54di) {
    var this_0 = $this.o8y_1;
    offsetTimeNanos$factory();
    this_0.w2p(_set____db54di);
    return Unit_instance;
  }
  function _get_offsetTimeNanos__sdn5qq($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.o8y_1;
    offsetTimeNanos$factory_0();
    return this_0.x2p();
  }
  function _set_needsReset__wyw9nf($this, _set____db54di) {
    var this_0 = $this.p8y_1;
    needsReset$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function _get_needsReset__mzz76h($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.p8y_1;
    needsReset$factory_0();
    return this_0.u2();
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp;
    if (isInterrupted) {
      var tmp_0;
      var tmp_1 = $this.u8y();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.u8y();
      } else {
        tmp_0 = $this.s8y_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.u8y();
    }
    var spec = tmp;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.i8y_1, initialValue, _get_targetValue__jjlmb5($this), $this.r8y_1));
    onChildAnimationUpdated($this.t8y_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.u2() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function Transition$animateTo$composable$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.j8z()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = it.l9(toLong(1));
        this$0.i8z(tmp$ret$0, $durationScale);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Transition_init_$Init$(initialState, label, $this) {
    Transition.call($this, new MutableTransitionState(initialState), label);
    return $this;
  }
  function Transition_init_$Create$(initialState, label) {
    return Transition_init_$Init$(initialState, label, objectCreate(protoOf(Transition)));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var this_0 = $this.y8y_1;
    segment$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function _set_startTimeNanos__1jy4fb($this, _set____db54di) {
    var this_0 = $this.a8z_1;
    startTimeNanos$factory();
    this_0.w2p(_set____db54di);
    return Unit_instance;
  }
  function _get_startTimeNanos__r31kgr($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.a8z_1;
    startTimeNanos$factory_0();
    return this_0.x2p();
  }
  function onChildAnimationUpdated($this) {
    $this.k8z(true);
    if ($this.j8z()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = $this.c8z_1.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
        // Inline function 'kotlin.math.max' call
        var a = maxDurationNanos;
        var b = element.f8r();
        maxDurationNanos = a.a7(b) >= 0 ? a : b;
        element.l8z($this.f8z_1);
      }
      $this.k8z(false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.t8y_1 = $outer;
    this.i8y_1 = typeConverter;
    this.j8y_1 = label;
    this.k8y_1 = mutableStateOf(initialValue);
    this.l8y_1 = mutableStateOf(spring());
    this.m8y_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.u8y(), this.i8y_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.n8y_1 = mutableStateOf(true);
    this.o8y_1 = mutableLongStateOf(new Long(0, 0));
    this.p8y_1 = mutableStateOf(false);
    this.q8y_1 = mutableStateOf(initialValue);
    this.r8y_1 = initialVelocityVector;
    var tmp0_safe_receiver = get_visibilityThresholdMap().b3(this.i8y_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.i8y_1.o8n()(initialValue);
      var inductionVariable = 0;
      var last = vector.n();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.q8n(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.i8y_1.u8n()(vector);
    }
    var visibilityThreshold = tmp;
    this.s8y_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState).u8y = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.l8y_1;
    animationSpec$factory_0();
    return this_0.u2();
  };
  protoOf(TransitionAnimationState).m8z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.m8y_1;
    animation$factory_0();
    return this_0.u2();
  };
  protoOf(TransitionAnimationState).n8z = function (_set____db54di) {
    var this_0 = this.n8y_1;
    isFinished$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).o8z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.n8y_1;
    isFinished$factory_0();
    return this_0.u2();
  };
  protoOf(TransitionAnimationState).h1a = function (_set____db54di) {
    var this_0 = this.q8y_1;
    value$factory_3();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).u2 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.q8y_1;
    value$factory_4();
    return this_0.u2();
  };
  protoOf(TransitionAnimationState).f8r = function () {
    return this.m8z().v8q_1;
  };
  protoOf(TransitionAnimationState).p8z = function (playTimeNanos, durationScale) {
    var tmp;
    if (durationScale > 0.0) {
      // Inline function 'kotlin.Long.div' call
      var scaledTime = playTimeNanos.ra(_get_offsetTimeNanos__sdn5qq(this)).eb() / durationScale;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!isNaN_0(scaledTime)) {
        // Inline function 'androidx.compose.animation.core.TransitionAnimationState.onPlayTimeChanged.<anonymous>' call
        var message = 'Duration scale adjusted time is NaN. Duration scale: ' + durationScale + ',' + ('playTimeNanos: ' + playTimeNanos.toString() + ', offsetTimeNanos: ' + _get_offsetTimeNanos__sdn5qq(this).toString());
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp = numberToLong(scaledTime);
    } else {
      tmp = this.m8z().v8q_1;
    }
    var playTime = tmp;
    this.h1a(this.m8z().c8r(playTime));
    this.r8y_1 = this.m8z().g8r(playTime);
    if (this.m8z().e8r(playTime)) {
      this.n8z(true);
      _set_offsetTimeNanos__i9wy86(this, new Long(0, 0));
    }
  };
  protoOf(TransitionAnimationState).l8z = function (playTimeNanos) {
    this.h1a(this.m8z().c8r(playTimeNanos));
    this.r8y_1 = this.m8z().g8r(playTimeNanos);
  };
  protoOf(TransitionAnimationState).q8z = function () {
    _set_needsReset__wyw9nf(this, true);
  };
  protoOf(TransitionAnimationState).r8z = function (targetValue, animationSpec) {
    if (!equals(_get_targetValue__jjlmb5(this), targetValue) ? true : _get_needsReset__mzz76h(this)) {
      _set_targetValue__aqsk0r_0(this, targetValue);
      _set_animationSpec__7qdru(this, animationSpec);
      updateAnimation$default(this, VOID, !this.o8z());
      this.n8z(false);
      _set_offsetTimeNanos__i9wy86(this, this.t8y_1.s8z());
      _set_needsReset__wyw9nf(this, false);
    }
  };
  protoOf(TransitionAnimationState).t8z = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.m8z().q8q_1, initialValue) ? equals(this.m8z().r8q_1, targetValue) : false) {
      return Unit_instance;
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.u8z_1 = initialState;
    this.v8z_1 = targetState;
  }
  protoOf(SegmentImpl).w8z = function () {
    return this.u8z_1;
  };
  protoOf(SegmentImpl).x8z = function () {
    return this.v8z_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.u8z_1, other.w8z());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.v8z_1, other.x8z());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.u8z_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.v8z_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      var maxDurationNanos = new Long(0, 0);
      var tmp0_iterator = this$0.c8z_1.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.math.max' call
        var a = maxDurationNanos;
        var b = element.f8r();
        maxDurationNanos = a.a7(b) >= 0 ? a : b;
      }
      var tmp0_iterator_0 = this$0.d8z_1.v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.math.max' call
        var a_0 = maxDurationNanos;
        var b_0 = element_0.z8z();
        maxDurationNanos = a_0.a7(b_0) >= 0 ? a_0 : b_0;
      }
      return maxDurationNanos;
    };
  }
  function Transition$updateTarget$composable$lambda($tmp0_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.a90($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Transition$animateTo$composable$slambda(this$0, resultContinuation) {
    this.j90_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Transition$animateTo$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.hb_1 = 4;
              continue $sm;
            }

            this.l90_1 = get_durationScale(this.k90_1.mh());
            this.hb_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$composable$slambda$lambda(this.j90_1, this.l90_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.hb_1 = 1;
            continue $sm;
          case 3:
            throw this.kb_1;
          case 4:
            return Unit_instance;
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
  protoOf(Transition$animateTo$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new Transition$animateTo$composable$slambda(this.j90_1, completion);
    i.k90_1 = $this$LaunchedEffect;
    return i;
  };
  function Transition$animateTo$composable$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$composable$slambda(this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Transition$animateTo$composable$lambda($tmp0_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.m90($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Transition(transitionState, label) {
    label = label === VOID ? null : label;
    this.v8y_1 = transitionState;
    this.w8y_1 = label;
    this.x8y_1 = mutableStateOf(this.n90());
    this.y8y_1 = mutableStateOf(new SegmentImpl(this.n90(), this.n90()));
    this.z8y_1 = mutableLongStateOf(new Long(0, 0));
    var tmp = this;
    AnimationConstants_getInstance();
    tmp.a8z_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.b8z_1 = mutableStateOf(true);
    this.c8z_1 = mutableStateListOf();
    this.d8z_1 = mutableStateListOf();
    this.e8z_1 = mutableStateOf(false);
    this.f8z_1 = new Long(0, 0);
    var tmp_0 = this;
    tmp_0.g8z_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.h8z_1 = 0;
  }
  protoOf(Transition).o90 = function (value) {
    this.v8y_1.o90(value);
  };
  protoOf(Transition).n90 = function () {
    return this.v8y_1.n90();
  };
  protoOf(Transition).t90 = function (_set____db54di) {
    var this_0 = this.x8y_1;
    targetState$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).x8z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.x8y_1;
    targetState$factory_0();
    return this_0.u2();
  };
  protoOf(Transition).u90 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.y8y_1;
    segment$factory_0();
    return this_0.u2();
  };
  protoOf(Transition).a8p = function () {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    return !tmp.equals(new Long(0, -2147483648));
  };
  protoOf(Transition).v90 = function (_set____db54di) {
    var this_0 = this.z8y_1;
    playTimeNanos$factory();
    this_0.w2p(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).s8z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.z8y_1;
    playTimeNanos$factory_0();
    return this_0.x2p();
  };
  protoOf(Transition).k8z = function (_set____db54di) {
    var this_0 = this.b8z_1;
    updateChildrenNeeded$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).w90 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.b8z_1;
    updateChildrenNeeded$factory_0();
    return this_0.u2();
  };
  protoOf(Transition).x90 = function (_set____db54di) {
    var this_0 = this.e8z_1;
    isSeeking$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).j8z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.e8z_1;
    isSeeking$factory_0();
    return this_0.u2();
  };
  protoOf(Transition).z8z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.g8z_1;
    totalDurationNanos$factory();
    return this_0.u2();
  };
  protoOf(Transition).i8z = function (frameTimeNanos, durationScale) {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    if (tmp.equals(new Long(0, -2147483648))) {
      this.y90(frameTimeNanos);
    }
    this.k8z(false);
    this.v90(frameTimeNanos.ra(_get_startTimeNanos__r31kgr(this)));
    var allFinished = true;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.c8z_1.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!element.o8z()) {
        element.p8z(this.s8z(), durationScale);
      }
      if (!element.o8z()) {
        allFinished = false;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.d8z_1.v();
    while (tmp0_iterator_0.w()) {
      var element_0 = tmp0_iterator_0.y();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!equals(element_0.x8z(), element_0.n90())) {
        element_0.i8z(this.s8z(), durationScale);
      }
      if (!equals(element_0.x8z(), element_0.n90())) {
        allFinished = false;
      }
    }
    if (allFinished) {
      this.z90();
    }
  };
  protoOf(Transition).y90 = function (frameTimeNanos) {
    _set_startTimeNanos__1jy4fb(this, frameTimeNanos);
    this.v8y_1.v8s(true);
  };
  protoOf(Transition).z90 = function () {
    AnimationConstants_getInstance();
    _set_startTimeNanos__1jy4fb(this, new Long(0, -2147483648));
    this.o90(this.x8z());
    this.v90(new Long(0, 0));
    this.v8y_1.v8s(false);
  };
  protoOf(Transition).a91 = function (animation) {
    return this.c8z_1.c29(animation);
  };
  protoOf(Transition).b91 = function (animation) {
    this.c8z_1.d2r(animation);
  };
  protoOf(Transition).a90 = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1657853547);
    sourceInformation($composer_0, 'C(updateTarget$composable):Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(1657853547, $changed, -1, 'androidx.compose.animation.core.Transition.updateTarget$composable (Transition.kt:400)');
      }
      if (!this.j8z()) {
        if (!equals(this.x8z(), targetState)) {
          _set_segment__77iylu(this, new SegmentImpl(this.x8z(), targetState));
          this.o90(this.x8z());
          this.t90(targetState);
          if (!this.a8p()) {
            this.k8z(true);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = this.c8z_1.v();
          while (tmp0_iterator.w()) {
            var element = tmp0_iterator.y();
            // Inline function 'androidx.compose.animation.core.Transition.updateTarget$composable.<anonymous>' call
            element.q8z();
          }
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    var tmp1_safe_receiver = $composer_0.d1z();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.w2e(Transition$updateTarget$composable$lambda(this, targetState, $changed));
    }
  };
  protoOf(Transition).m90 = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(254343587);
    sourceInformation($composer_0, 'C(animateTo$composable)427@16681L25,431@16951L655,431@16930L676:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(254343587, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo$composable (Transition.kt:425)');
      }
      if (!this.j8z()) {
        this.a90(targetState, $composer_0, 14 & $dirty | 112 & $dirty);
        if ((!equals(targetState, this.n90()) ? true : this.a8p()) ? true : this.w90()) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.f1x(-838505973);
          sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.t1z(this);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp;
          if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
            // Inline function 'androidx.compose.animation.core.Transition.animateTo$composable.<anonymous>' call
            var value = Transition$animateTo$composable$slambda_0(this, null);
            $composer_1.s1z(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_1.h1x();
          LaunchedEffect$composable(this, tmp0, $composer_0, 14 & $dirty >> 3);
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    var tmp1_safe_receiver = $composer_0.d1z();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.w2e(Transition$animateTo$composable$lambda(this, targetState, $changed));
    }
  };
  function updateTransition$composable(targetState, label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.f1x(-1999981197);
    sourceInformation($composer_0, 'C(updateTransition$composable)P(1)71@2945L51,72@3012L22,73@3068L195,73@3039L224:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      label_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1999981197, $changed, -1, 'androidx.compose.animation.core.updateTransition$composable (Transition.kt:67)');
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
    var tmp;
    if (false ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      var value = Transition_init_$Create$(targetState, label_0._v);
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    var transition = tmp0;
    transition.m90(targetState, $composer_0, 8 & $changed | 14 & $changed);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.f1x(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.t1z(transition);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_2.r1z();
    var tmp_1;
    if (invalid ? true : it_0 === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      var value_0 = updateTransition$composable$lambda(transition);
      $composer_2.s1z(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_2.h1x();
    DisposableEffect$composable(transition, tmp0_0, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return transition;
  }
  function MutableTransitionState(initialState) {
    this.p90_1 = mutableStateOf(initialState);
    this.q90_1 = mutableStateOf(initialState);
    this.r90_1 = mutableStateOf(false);
    this.s90_1 = 0;
  }
  protoOf(MutableTransitionState).o90 = function (_set____db54di) {
    var this_0 = this.p90_1;
    currentState$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).n90 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.p90_1;
    currentState$factory_0();
    return this_0.u2();
  };
  protoOf(MutableTransitionState).v8s = function (_set____db54di) {
    var this_0 = this.r90_1;
    isRunning$factory_3();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).a8p = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.r90_1;
    isRunning$factory_4();
    return this_0.u2();
  };
  function get_AnimationDebugDurationScale() {
    return AnimationDebugDurationScale;
  }
  var AnimationDebugDurationScale;
  function createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1918946450);
    sourceInformation($composer_0, 'C(createTransitionAnimation$composable)P(1,3!1,4)873@34678L499,896@35561L128,896@35523L166:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(1918946450, $changed, -1, 'androidx.compose.animation.core.createTransitionAnimation$composable (Transition.kt:866)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.t1z(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      var value = new TransitionAnimationState(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    var transitionAnimation = tmp0;
    if (_this__u8e3s4.j8z()) {
      transitionAnimation.t8z(initialValue, targetValue, animationSpec);
    } else {
      transitionAnimation.r8z(targetValue, animationSpec);
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.f1x(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!($composer_2.t1z(_this__u8e3s4) | $composer_2.t1z(transitionAnimation));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_2.r1z();
    var tmp_1;
    if (invalid_0 ? true : it_0 === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      var value_0 = createTransitionAnimation$composable$lambda(_this__u8e3s4, transitionAnimation);
      $composer_2.s1z(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_2.h1x();
    DisposableEffect$composable(transitionAnimation, tmp0_0, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return transitionAnimation;
  }
  function _no_name_provided__qut3iv($transition) {
    this.c91_1 = $transition;
  }
  protoOf(_no_name_provided__qut3iv).gk = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.c91_1.z90();
  };
  function updateTransition$composable$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv($transition);
    };
  }
  function _no_name_provided__qut3iv_0($this_createTransitionAnimation$composable, $transitionAnimation) {
    this.d91_1 = $this_createTransitionAnimation$composable;
    this.e91_1 = $transitionAnimation;
  }
  protoOf(_no_name_provided__qut3iv_0).gk = function () {
    // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.d91_1.b91(this.e91_1);
  };
  function createTransitionAnimation$composable$lambda($this_createTransitionAnimation$composable, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation$composable.a91($transitionAnimation);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($this_createTransitionAnimation$composable, $transitionAnimation);
    };
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.x8z();
    }, function (receiver, value) {
      return receiver.t90(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.x8z();
    }, function (receiver, value) {
      return receiver.t90(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.u90();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.u90();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function playTimeNanos$factory() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.s8z();
    }, function (receiver, value) {
      return receiver.v90(value);
    });
  }
  function playTimeNanos$factory_0() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.s8z();
    }, function (receiver, value) {
      return receiver.v90(value);
    });
  }
  function startTimeNanos$factory() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function updateChildrenNeeded$factory() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.w90();
    }, function (receiver, value) {
      return receiver.k8z(value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.w90();
    }, function (receiver, value) {
      return receiver.k8z(value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.j8z();
    }, function (receiver, value) {
      return receiver.x90(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.j8z();
    }, function (receiver, value) {
      return receiver.x90(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.z8z();
    }, null);
  }
  function targetValue$factory_1() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function targetValue$factory_2() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function animationSpec$factory() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.u8y();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.u8y();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.m8z();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.m8z();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.o8z();
    }, function (receiver, value) {
      return receiver.n8z(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.o8z();
    }, function (receiver, value) {
      return receiver.n8z(value);
    });
  }
  function offsetTimeNanos$factory() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function offsetTimeNanos$factory_0() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function needsReset$factory() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function needsReset$factory_0() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.u2();
    }, function (receiver, value) {
      return receiver.h1a(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.u2();
    }, function (receiver, value) {
      return receiver.h1a(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.n90();
    }, function (receiver, value) {
      return receiver.o90(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.n90();
    }, function (receiver, value) {
      return receiver.o90(value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8p();
    }, function (receiver, value) {
      return receiver.v8s(value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.a8p();
    }, function (receiver, value) {
      return receiver.v8s(value);
    });
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function TwoWayConverter(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.f91_1 = convertToVector;
    this.g91_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).o8n = function () {
    return this.f91_1;
  };
  protoOf(TwoWayConverterImpl).u8n = function () {
    return this.g91_1;
  };
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function lerp(start, stop, fraction) {
    _init_properties_VectorConverters_kt__g28mmu();
    return start * (1 - fraction) + stop * fraction;
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.y8s_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.y8s_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.z3b_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.y8s_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.d3c_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.d3c_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.c8t_1;
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.d8t_1;
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.l3a_1), _Size___get_height__impl__a04p02(it.l3a_1));
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Size(Size_0(it.c8t_1, it.d8t_1));
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.c39_1), _Offset___get_y__impl__8bzhra(it.c39_1));
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Offset(Offset_0(it.c8t_1, it.d8t_1));
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.e3c_1), _IntOffset___get_y__impl__2avpwj(it.e3c_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.c8t_1;
    var tmp = roundToInt(this_0);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.d8t_1;
    var tmp$ret$1 = roundToInt(this_1);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$1));
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.p3c_1), _IntSize___get_height__impl__prv63b(it.p3c_1));
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.c8t_1;
    var tmp = roundToInt(this_0);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.d8t_1;
    var tmp$ret$1 = roundToInt(this_1);
    return new IntSize(IntSize_0(tmp, tmp$ret$1));
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.f39_1, it.g39_1, it.h39_1, it.i39_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.h8t_1, it.i8t_1, it.j8t_1, it.k8t_1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter(tmp_7, RectToVector$lambda_0);
    }
  }
  function Spring() {
    this.h91_1 = 10000.0;
    this.i91_1 = 1500.0;
    this.j91_1 = 400.0;
    this.k91_1 = 200.0;
    this.l91_1 = 50.0;
    this.m91_1 = 0.2;
    this.n91_1 = 0.5;
    this.o91_1 = 0.75;
    this.p91_1 = 1.0;
    this.q91_1 = 0.01;
    this.r91_1 = 0;
  }
  var Spring_instance;
  function Spring_getInstance() {
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.s91_1 = dampingRatio;
    this.t91_1 = stiffness;
    this.u91_1 = new VectorizedFloatAnimationSpec(anims);
    this.v91_1 = 8;
  }
  protoOf(VectorizedSpringSpec).b8r = function () {
    return this.u91_1.b8r();
  };
  protoOf(VectorizedSpringSpec).y8q = function (initialValue, targetValue, initialVelocity) {
    return this.u91_1.y8q(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).z8q = function (initialValue, targetValue, initialVelocity) {
    return this.u91_1.z8q(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).d8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.u91_1.d8r(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).h8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.u91_1.h8r(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedAnimationSpec() {
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.x91_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.y91_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.z91_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.b92_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).i1 = function (index) {
    return this.b92_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.w91_1 = anims;
    this.a92_1 = 8;
  }
  protoOf(VectorizedFloatAnimationSpec).d8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.x91_1 == null)) {
      this.x91_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).q8n(i, this.w91_1.i1(i).o8u(playTimeNanos, initialValue.i1(i), targetValue.i1(i), initialVelocity.i1(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).h8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.y91_1 == null)) {
      this.y91_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).q8n(i, this.w91_1.i1(i).p8u(playTimeNanos, initialValue.i1(i), targetValue.i1(i), initialVelocity.i1(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).z8q = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.z91_1 == null)) {
      this.z91_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).q8n(i, this.w91_1.i1(i).q8u(initialValue.i1(i), targetValue.i1(i), initialVelocity.i1(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).y8q = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = until(0, initialValue.n()).v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = maxDuration;
      var b = this.w91_1.i1(element).r8u(initialValue.i1(element), targetValue.i1(element), initialVelocity.i1(element));
      maxDuration = a.a7(b) >= 0 ? a : b;
    }
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function repetitionPlayTimeNanos($this, playTimeNanos) {
    if (playTimeNanos.qa($this.f92_1).a7(new Long(0, 0)) <= 0) {
      return new Long(0, 0);
    } else {
      var postOffsetPlayTimeNanos = playTimeNanos.qa($this.f92_1);
      var repeatsCount = postOffsetPlayTimeNanos.l9($this.e92_1);
      var tmp;
      if ($this.d92_1.equals(RepeatMode_Restart_getInstance())) {
        tmp = true;
      } else {
        // Inline function 'kotlin.Long.rem' call
        tmp = repeatsCount.sa(toLong(2)).equals(new Long(0, 0));
      }
      if (tmp) {
        return postOffsetPlayTimeNanos.ra(repeatsCount.m9($this.e92_1));
      } else {
        // Inline function 'kotlin.Long.plus' call
        return repeatsCount.qa(toLong(1)).m9($this.e92_1).ra(postOffsetPlayTimeNanos);
      }
    }
  }
  function repetitionStartVelocity($this, playTimeNanos, start, startVelocity, end) {
    var tmp;
    if (playTimeNanos.qa($this.f92_1).a7($this.e92_1) > 0) {
      tmp = $this.h8r($this.e92_1.ra($this.f92_1), start, startVelocity, end);
    } else {
      tmp = startVelocity;
    }
    return tmp;
  }
  function VectorizedInfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.c92_1 = animation;
    this.d92_1 = repeatMode;
    this.e92_1 = numberToLong(this.c92_1.h92() + this.c92_1.i92() | 0).m9(get_MillisToNanos());
    this.f92_1 = _StartOffset___get_value__impl__8sikig(initialStartOffset).m9(get_MillisToNanos());
    this.g92_1 = 8;
  }
  protoOf(VectorizedInfiniteRepeatableSpec).b8r = function () {
    return true;
  };
  protoOf(VectorizedInfiniteRepeatableSpec).d8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.c92_1.d8r(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).h8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.c92_1.h8r(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).y8q = function (initialValue, targetValue, initialVelocity) {
    Companion_getInstance_6();
    return new Long(-1, 2147483647);
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  function _get_valueVector__r10idf_1($this) {
    var tmp = $this.m92_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_1($this) {
    var tmp = $this.n92_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function init_0($this, value) {
    if (!!($this.m92_1 == null)) {
      $this.m92_1 = newInstance(value);
      $this.n92_1 = newInstance(value);
    }
  }
  function VectorizedKeyframesSpec(keyframes, durationMillis, delayMillis) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    this.j92_1 = keyframes;
    this.k92_1 = durationMillis;
    this.l92_1 = delayMillis;
    this.o92_1 = 8;
  }
  protoOf(VectorizedKeyframesSpec).i92 = function () {
    return this.k92_1;
  };
  protoOf(VectorizedKeyframesSpec).h92 = function () {
    return this.l92_1;
  };
  protoOf(VectorizedKeyframesSpec).d8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.l9(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime_0(this, playTimeMillis).db();
    if (this.j92_1.y2(clampedPlayTime)) {
      return getValue(this.j92_1, clampedPlayTime).vd_1;
    }
    if (clampedPlayTime >= this.k92_1) {
      return targetValue;
    } else if (clampedPlayTime <= 0)
      return initialValue;
    var startTime = 0;
    var startVal = initialValue;
    var endVal = targetValue;
    var endTime = this.k92_1;
    var easing = get_LinearEasing();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.j92_1.q2().v();
    while (tmp0_iterator.w()) {
      var tmp1_loop_parameter = tmp0_iterator.y();
      // Inline function 'kotlin.collections.component1' call
      var timestamp = tmp1_loop_parameter.t2();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.u2();
      if (clampedPlayTime > timestamp ? timestamp >= startTime : false) {
        startTime = timestamp;
        startVal = value.vd_1;
        easing = value.wd_1;
      } else if (clampedPlayTime < timestamp ? timestamp <= endTime : false) {
        endTime = timestamp;
        endVal = value.vd_1;
      }
    }
    var fraction = easing.m8u((clampedPlayTime - startTime | 0) / (endTime - startTime | 0));
    init_0(this, initialValue);
    var inductionVariable = 0;
    var last = startVal.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_1(this).q8n(i, lerp(startVal.i1(i), endVal.i1(i), fraction));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_1(this);
  };
  protoOf(VectorizedKeyframesSpec).h8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.l9(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime_0(this, playTimeMillis);
    if (clampedPlayTime.a7(new Long(0, 0)) <= 0) {
      return initialVelocity;
    }
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = clampedPlayTime.ra(toLong(1));
    var startNum = getValueFromMillis(this, tmp$ret$0, initialValue, targetValue, initialVelocity);
    var endNum = getValueFromMillis(this, clampedPlayTime, initialValue, targetValue, initialVelocity);
    init_0(this, initialValue);
    var inductionVariable = 0;
    var last = startNum.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_1(this).q8n(i, (startNum.i1(i) - endNum.i1(i)) * 1000.0);
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_1(this);
  };
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    var tmp;
    if (durationMillis === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = durationMillis;
    }
    durationMillis = tmp;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.p92_1 = durationMillis;
    this.q92_1 = delayMillis;
    this.r92_1 = easing;
    this.s92_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.p92_1, this.q92_1, this.r92_1));
    this.t92_1 = 8;
  }
  protoOf(VectorizedTweenSpec).i92 = function () {
    return this.p92_1;
  };
  protoOf(VectorizedTweenSpec).h92 = function () {
    return this.q92_1;
  };
  protoOf(VectorizedTweenSpec).d8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.s92_1.d8r(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).h8r = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.s92_1.h8r(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function clampPlayTime_0(_this__u8e3s4, playTime) {
    // Inline function 'kotlin.Long.minus' call
    var other = _this__u8e3s4.h92();
    var tmp$ret$0 = playTime.ra(toLong(other));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong(_this__u8e3s4.i92()));
  }
  function getValueFromMillis(_this__u8e3s4, playTimeMillis, start, end, startVelocity) {
    return _this__u8e3s4.d8r(playTimeMillis.m9(get_MillisToNanos()), start, end, startVelocity);
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, $visibilityThreshold.n());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
      var tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.i1(item));
      destination.s(tmp$ret$0);
    }
    tmp.u92_1 = destination;
  }
  protoOf(createSpringAnimations$1).i1 = function (index) {
    return this.u92_1.i1(index);
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.v92_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).i1 = function (index) {
    return this.v92_1;
  };
  function get_rectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function get_visibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0.1);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Size_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return Offset_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_rectVisibilityThreshold();
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntOffset_0(1, 1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntSize_0(1, 1);
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter(IntCompanionObject_instance), 1.0), to(get_VectorConverter_0(Companion_getInstance_5()), 1.0), to(get_VectorConverter_1(Companion_getInstance_4()), 1.0), to(get_VectorConverter_2(FloatCompanionObject_instance), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 0.5), to(get_VectorConverter_4(Companion_getInstance_1()), 0.5), to(get_VectorConverter_5(Companion_getInstance_2()), 0.5), to(get_VectorConverter_6(Companion_getInstance()), 0.1), to(get_VectorConverter_7(Companion_getInstance_7()), 0.1)]);
    }
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).e8r = isFinishedFromNanos;
  protoOf(DecayAnimation).e8r = isFinishedFromNanos;
  protoOf(FloatSpringSpec).s8u = vectorize;
  protoOf(FloatTweenSpec).q8u = getEndVelocity;
  protoOf(FloatTweenSpec).s8u = vectorize;
  protoOf(SegmentImpl).y8z = isTransitioningTo;
  protoOf(VectorizedFloatAnimationSpec).b8r = get_isInfinite;
  protoOf(VectorizedInfiniteRepeatableSpec).z8q = getEndVelocity_0;
  protoOf(VectorizedKeyframesSpec).y8q = getDurationNanos;
  protoOf(VectorizedKeyframesSpec).b8r = get_isInfinite;
  protoOf(VectorizedKeyframesSpec).z8q = getEndVelocity_0;
  protoOf(VectorizedTweenSpec).y8q = getDurationNanos;
  protoOf(VectorizedTweenSpec).b8r = get_isInfinite;
  protoOf(VectorizedTweenSpec).z8q = getEndVelocity_0;
  //endregion
  //region block: init
  MillisToNanos = new Long(1000000, 0);
  UNSET = 3.4028235E38;
  AnimationDebugDurationScale = 1;
  Spring_instance = new Spring();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationState_0;
  _.$_$.d = AnimationVector1D;
  _.$_$.e = AnimationVector2D;
  _.$_$.f = AnimationVector3D;
  _.$_$.g = AnimationVector4D;
  _.$_$.h = AnimationVector;
  _.$_$.i = CubicBezierEasing;
  _.$_$.j = get_FastOutSlowInEasing;
  _.$_$.k = get_LinearEasing;
  _.$_$.l = SpringSpec;
  _.$_$.m = TweenSpec;
  _.$_$.n = TwoWayConverter;
  _.$_$.o = get_VectorConverter_6;
  _.$_$.p = get_VectorConverter_2;
  _.$_$.q = get_VisibilityThreshold_4;
  _.$_$.r = animateDpAsState$composable;
  _.$_$.s = animateFloatAsState$composable;
  _.$_$.t = animateValueAsState$composable;
  _.$_$.u = createTransitionAnimation$composable;
  _.$_$.v = generateDecayAnimationSpec;
  _.$_$.w = infiniteRepeatable;
  _.$_$.x = keyframes;
  _.$_$.y = spring;
  _.$_$.z = tween;
  _.$_$.a1 = updateTransition$composable;
  _.$_$.b1 = animateDecay;
  _.$_$.c1 = animateTo;
  _.$_$.d1 = animate_0;
  _.$_$.e1 = AnimationConstants_getInstance;
  _.$_$.f1 = Spring_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-animation-core.js.map
