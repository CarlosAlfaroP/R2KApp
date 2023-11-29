(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'uuid', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-unit.js', './appyx-utils-multiplatform.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-foundation.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-animation-core.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-foundation-layout.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('uuid'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./appyx-utils-multiplatform.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-foundation.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-animation-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-foundation-layout.js'));
  else {
    if (typeof Uuid === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'uuid' was not found. Please, check whether 'uuid' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['appyx-utils-multiplatform'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'appyx-utils-multiplatform' was not found. Please, check whether 'appyx-utils-multiplatform' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'appyx-interactions-common'.");
    }
    root['appyx-interactions-common'] = factory(typeof this['appyx-interactions-common'] === 'undefined' ? {} : this['appyx-interactions-common'], Uuid, this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-unit'], this['appyx-utils-multiplatform'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-animation-core'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-foundation-layout']);
  }
}(this, function (_, Uuid, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_appyx_utils_multiplatform, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation_layout) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var VOID = kotlin_kotlin.$_$.li;
  var stateIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var protoOf = kotlin_kotlin.$_$.jd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var classMeta = kotlin_kotlin.$_$.xb;
  var setMetadataFor = kotlin_kotlin.$_$.kd;
  var scan = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CoroutineImpl = kotlin_kotlin.$_$.eb;
  var Unit_getInstance = kotlin_kotlin.$_$.v4;
  var THROW_CCE = kotlin_kotlin.$_$.xg;
  var isObject = kotlin_kotlin.$_$.wc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.oa;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var SuspendFunction1 = kotlin_kotlin.$_$.gb;
  var SuspendFunction2 = kotlin_kotlin.$_$.hb;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var hashCode = kotlin_kotlin.$_$.jc;
  var getStringHashCode = kotlin_kotlin.$_$.ic;
  var equals = kotlin_kotlin.$_$.bc;
  var Parcelable = kotlin_appyx_utils_multiplatform.$_$.a;
  var getNumberHashCode = kotlin_kotlin.$_$.fc;
  var Annotation = kotlin_kotlin.$_$.fg;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.id;
  var interfaceMeta = kotlin_kotlin.$_$.lc;
  var awaitEachGesture = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k1;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var isInterface = kotlin_kotlin.$_$.uc;
  var awaitFirstDown = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var awaitTouchSlopOrCancellation = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m1;
  var awaitDragOrCancellation = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j1;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.z1;
  var emptySet = kotlin_kotlin.$_$.l7;
  var plus = kotlin_kotlin.$_$.c9;
  var objectCreate = kotlin_kotlin.$_$.hd;
  var Set = kotlin_kotlin.$_$.a6;
  var AppyxLogger_getInstance = kotlin_appyx_utils_multiplatform.$_$.b;
  var fillArrayVal = kotlin_kotlin.$_$.cc;
  var isArray = kotlin_kotlin.$_$.mc;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var to = kotlin_kotlin.$_$.ii;
  var combineInternal = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var List = kotlin_kotlin.$_$.p5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.l6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toList = kotlin_kotlin.$_$.aa;
  var copyToArray = kotlin_kotlin.$_$.h7;
  var Pair = kotlin_kotlin.$_$.ug;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.ci;
  var transformLatest = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var emptyList = kotlin_kotlin.$_$.j7;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.di;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var numberToInt = kotlin_kotlin.$_$.fd;
  var Offset__isValid_impl_z7krde = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var toString = kotlin_kotlin.$_$.od;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var Offset__getDistanceSquared_impl_97mhi6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var ensureNotNull = kotlin_kotlin.$_$.oh;
  var isNaN_0 = kotlin_kotlin.$_$.sh;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wh;
  var get_lastIndex = kotlin_kotlin.$_$.l8;
  var Collection = kotlin_kotlin.$_$.f5;
  var plus_0 = kotlin_kotlin.$_$.e9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.e4;
  var lazy = kotlin_kotlin.$_$.vh;
  var KProperty1 = kotlin_kotlin.$_$.qe;
  var getPropertyCallableRef = kotlin_kotlin.$_$.hc;
  var distinctUntilChanged = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var filterNotNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var last = kotlin_kotlin.$_$.p8;
  var listOf = kotlin_kotlin.$_$.t8;
  var dropLast = kotlin_kotlin.$_$.i7;
  var coerceIn = kotlin_kotlin.$_$.ge;
  var THROW_ISE = kotlin_kotlin.$_$.yg;
  var enumEntries = kotlin_kotlin.$_$.mb;
  var Enum = kotlin_kotlin.$_$.lg;
  var getKClass = kotlin_kotlin.$_$.c;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy_0 = kotlin_kotlin.$_$.uh;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.w6;
  var foldOut = kotlin_org_jetbrains_compose_ui_ui.$_$.x6;
  var any = kotlin_org_jetbrains_compose_ui_ui.$_$.v6;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.u6;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.z6;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.y6;
  var PointerEventPass_Initial_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.g7;
  var interceptOutOfBoundsChildEvents = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var onDensityChange = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var onViewConfigurationChange = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var PointerInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.m4;
  var MutableMap = kotlin_kotlin.$_$.x5;
  var toString_0 = kotlin_kotlin.$_$.hi;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.f;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Offset__times_impl_jz1mli = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var get_PI = kotlin_kotlin.$_$.pd;
  var Offset__component1_impl_qn5q2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var Offset__component2_impl_9ljbv = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var Long = kotlin_kotlin.$_$.qg;
  var numberToLong = kotlin_kotlin.$_$.gd;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var AnimationVector = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var AnimationVector3D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var AnimationVector1D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var combine = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var collectAsState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.i8;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.c7;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var drawWithContent = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var roundToInt = kotlin_kotlin.$_$.ud;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Alignment = kotlin_org_jetbrains_compose_ui_ui.$_$.s6;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var Animatable_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var boundsInParent = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var boundsInWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var KProperty0 = kotlin_kotlin.$_$.pe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ec;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.c5;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var requiredSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q3;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var onSizeChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var plus_1 = kotlin_kotlin.$_$.f9;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var onGloballyPositioned = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var combine_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var LaunchedEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var collectAsState$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Box$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var roundToLong = kotlin_kotlin.$_$.vd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(CompareValues, 'CompareValues', classMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(mapState$o$collect$slambda, 'mapState$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$0, '$collectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(withPrevious$slambda, 'withPrevious$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(withPrevious$o$collect$slambda, 'withPrevious$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(Element, 'Element', classMeta, VOID, [Parcelable]);
  setMetadataFor(FloatRange, 'FloatRange', classMeta, VOID, [Annotation]);
  setMetadataFor(GestureValidator, 'GestureValidator', interfaceMeta);
  setMetadataFor(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0, 'sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0', classMeta, VOID, [GestureValidator]);
  setMetadataFor(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0, 'sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0', classMeta, VOID, [GestureValidator]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(detectDragGesturesOrCancellation$slambda, 'detectDragGesturesOrCancellation$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($dragCOROUTINE$2, '$dragCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Elements, 'Elements', classMeta);
  setMetadataFor(Plugin, 'Plugin', interfaceMeta);
  function saveInstanceState(state) {
  }
  setMetadataFor(SavesInstanceState, 'SavesInstanceState', interfaceMeta, VOID, [Plugin]);
  setMetadataFor(AppyxComponent, 'AppyxComponent', interfaceMeta, VOID, [SavesInstanceState]);
  setMetadataFor(BaseAppyxComponent$slambda$slambda, 'BaseAppyxComponent$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda$slambda, 'BaseAppyxComponent$observeAnimationChanges$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1, 'BaseAppyxComponent$observeAnimationChanges$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda, 'BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$3, '$collectCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda, 'BaseAppyxComponent$observeVisualisation$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda_1, 'BaseAppyxComponent$observeVisualisation$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda_3, 'BaseAppyxComponent$observeVisualisation$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$slambda, 'BaseAppyxComponent$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda, 'BaseAppyxComponent$observeAnimationChanges$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda_1, 'BaseAppyxComponent$observeAnimationChanges$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda, 'BaseAppyxComponent$observeVisualisation$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(HasDefaultAnimationSpec, 'HasDefaultAnimationSpec', interfaceMeta);
  setMetadataFor(Draggable, 'Draggable', interfaceMeta, VOID, [HasDefaultAnimationSpec]);
  setMetadataFor(UiContextAware, 'UiContextAware', interfaceMeta);
  setMetadataFor(TransitionBoundsAware, 'TransitionBoundsAware', interfaceMeta);
  setMetadataFor(BaseAppyxComponent, 'BaseAppyxComponent', classMeta, VOID, [AppyxComponent, HasDefaultAnimationSpec, Draggable, UiContextAware, TransitionBoundsAware]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_4, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(removedElements$o$collect$slambda, 'removedElements$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$4, '$collectCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(BackPressHandlerStrategy, 'BackPressHandlerStrategy', interfaceMeta);
  setMetadataFor(BaseBackPressHandlerStrategy, 'BaseBackPressHandlerStrategy', classMeta, VOID, [BackPressHandlerStrategy]);
  setMetadataFor(DontHandleBackPress, 'DontHandleBackPress', classMeta, BaseBackPressHandlerStrategy);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(AnimatedProgressController$animateModel$slambda, 'AnimatedProgressController$animateModel$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(AnimatedProgressController$stopModel$slambda, 'AnimatedProgressController$stopModel$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ProgressController, 'ProgressController', interfaceMeta);
  setMetadataFor(AnimatedProgressController, 'AnimatedProgressController', classMeta, VOID, [ProgressController, HasDefaultAnimationSpec]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(DebugProgressInputSource, 'DebugProgressInputSource', classMeta, VOID, [ProgressController]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(DragProgressController, 'DragProgressController', classMeta, VOID, [Draggable]);
  setMetadataFor(InstantProgressController, 'InstantProgressController', classMeta, VOID, [ProgressController]);
  setMetadataFor(Operation, 'Operation', interfaceMeta, VOID, [Parcelable]);
  setMetadataFor(BaseOperation, 'BaseOperation', classMeta, VOID, [Operation]);
  setMetadataFor(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0, 'BaseTransitionModel$<get-elements>$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$5, '$collectCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_5, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  function operation$default(operation, overrideMode, $super) {
    overrideMode = overrideMode === VOID ? null : overrideMode;
    return $super === VOID ? this.operation_j8yb0i_k$(operation, overrideMode) : $super.operation_j8yb0i_k$.call(this, operation, overrideMode);
  }
  function canApply(operation) {
    return operation.isApplicable_8peua_k$(this.get_output_hs4j62_k$().get_value_j01efc_k$().get_currentTargetState_l0vn00_k$());
  }
  function onSettled$default(direction, animate, $super) {
    animate = animate === VOID ? false : animate;
    var tmp;
    if ($super === VOID) {
      this.onSettled_u9dneq_k$(direction, animate);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.onSettled_u9dneq_k$.call(this, direction, animate);
    }
    return tmp;
  }
  setMetadataFor(TransitionModel, 'TransitionModel', interfaceMeta, VOID, [SavesInstanceState]);
  setMetadataFor(BaseTransitionModel, 'BaseTransitionModel', classMeta, VOID, [TransitionModel]);
  setMetadataFor(Keyframes$currentIndexFlow$o$collect$slambda, 'Keyframes$currentIndexFlow$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(Keyframes$currentSegmentFlow$o$collect$slambda, 'Keyframes$currentSegmentFlow$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$7, '$collectCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda, 'Keyframes$currentSegmentTargetStateFlow$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$8, '$collectCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(Keyframes$getSegmentProgress$o$collect$slambda, 'Keyframes$getSegmentProgress$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$9, '$collectCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_6, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_7, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_8, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_9, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(Output, 'Output', classMeta, VOID, VOID, VOID, {0: Companion_getInstance_10});
  setMetadataFor(Keyframes, 'Keyframes', classMeta, Output);
  setMetadataFor(Mode, 'Mode', classMeta, Enum);
  setMetadataFor(Noop, 'Noop', classMeta, VOID, [Operation]);
  setMetadataFor(Segment, 'Segment', classMeta);
  setMetadataFor(StateTransition, 'StateTransition', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(SettleDirection, 'SettleDirection', classMeta, Enum);
  setMetadataFor(Update, 'Update', classMeta, Output);
  setMetadataFor(PointerInputElement, 'PointerInputElement', classMeta, ModifierNodeElement);
  setMetadataFor(OnPointerEventNode, 'OnPointerEventNode', classMeta, Node, [PointerInputModifierNode, Node]);
  setMetadataFor(MutableSavedStateMap, 'MutableSavedStateMap', interfaceMeta, VOID, [MutableMap]);
  setMetadataFor(MutableSavedStateMapImpl, 'MutableSavedStateMapImpl', classMeta, VOID, [MutableSavedStateMap, MutableMap]);
  setMetadataFor(Visualisation$map$o$collect$slambda, 'Visualisation$map$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_10, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_8, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  function overrideAnimationSpec(springSpec) {
  }
  function isAnimating() {
    return MutableStateFlow(false);
  }
  function map(output) {
    var tmp0_subject = output;
    var tmp;
    if (tmp0_subject instanceof Keyframes) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.flow.map' call
      var tmp0_map = output.get_currentIndexFlow_tqs8s0_k$();
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
      tmp$ret$0 = new _no_name_provided__qut3iv_8(tmp0_map, this, output);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } else {
      if (tmp0_subject instanceof Update) {
        tmp = MutableStateFlow(this.mapUpdate_eouxkv_k$(output));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function mapKeyframes(keyframes, segmentIndex) {
    var tmp = keyframes.get_currentSegment_vblyf1_k$();
    var tmp_0 = keyframes.getSegmentProgress_dzti15_k$(segmentIndex);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var tmp0_checkNotNull = toSegmentProgress(keyframes.get_progress_mo5qeu_k$(), segmentIndex);
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'com.bumble.appyx.interactions.core.ui.Visualisation.mapKeyframes.<anonymous>' call
        tmp$ret$0 = 'Segment progress should be in bounds';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    return this.mapSegment_8q2y0b_k$(tmp, tmp_0, tmp$ret$1);
  }
  setMetadataFor(Visualisation, 'Visualisation', interfaceMeta, VOID, [TransitionBoundsAware]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(TransitionBounds, 'TransitionBounds', classMeta);
  setMetadataFor(UiContext, 'UiContext', classMeta);
  setMetadataFor(VerticalDirection, 'VerticalDirection', classMeta, Enum);
  setMetadataFor(HorizontalDirection, 'HorizontalDirection', classMeta, Enum);
  setMetadataFor(Direction4, 'Direction4', classMeta, Enum);
  setMetadataFor(Direction8, 'Direction8', classMeta, Enum);
  setMetadataFor(ClockDirection, 'ClockDirection', classMeta, Enum);
  setMetadataFor(Drag, 'Drag', interfaceMeta);
  setMetadataFor(Gesture, 'Gesture', classMeta);
  setMetadataFor(Noop_0, 'Noop', classMeta, Gesture);
  function get_isContinuous() {
    return true;
  }
  function onStartDrag(position) {
  }
  setMetadataFor(GestureFactory, 'GestureFactory', interfaceMeta);
  setMetadataFor(Noop_1, 'Noop', classMeta, VOID, [GestureFactory]);
  setMetadataFor(GestureSettleConfig, 'GestureSettleConfig', classMeta);
  setMetadataFor(_no_name_provided__qut3iv_9, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(ElementUiModel, 'ElementUiModel', classMeta);
  setMetadataFor(Interpolatable, 'Interpolatable', interfaceMeta, VOID, VOID, VOID, VOID, [3]);
  setMetadataFor(Target, 'Target', interfaceMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(MotionProperty$renderValueFlow$slambda, 'MotionProperty$renderValueFlow$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($snapToCOROUTINE$11, '$snapToCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor($animateToCOROUTINE$12, '$animateToCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor(MotionProperty, 'MotionProperty', classMeta, VOID, VOID, VOID, VOID, [1, 3]);
  setMetadataFor(Target_0, 'Target', classMeta, VOID, [Target]);
  setMetadataFor(Alpha, 'Alpha', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, [3, 1]);
  setMetadataFor(Target_1, 'Target', classMeta, VOID, [Target]);
  setMetadataFor(ColorOverlay, 'ColorOverlay', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, [3, 1]);
  setMetadataFor(Target_2, 'Target', classMeta, VOID, [Target]);
  setMetadataFor(GenericFloatProperty, 'GenericFloatProperty', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, [3, 1]);
  setMetadataFor(Target_3, 'Target', classMeta, VOID, [Target]);
  setMetadataFor(Shadow, 'Shadow', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, [3, 1]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(BiasAlignment, 'BiasAlignment', classMeta, VOID, [Alignment]);
  setMetadataFor(OutsideAlignment, 'OutsideAlignment', classMeta, BiasAlignment);
  setMetadataFor(InsideAlignment, 'InsideAlignment', classMeta, BiasAlignment);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Value, 'Value', classMeta, VOID, [Alignment]);
  setMetadataFor(Target_4, 'Target', classMeta, VOID, [Target]);
  setMetadataFor(PositionAlignment, 'PositionAlignment', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, [3, 1]);
  setMetadataFor(BaseMutableUiState$isVisible$o$collect$slambda, 'BaseMutableUiState$isVisible$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$13, '$collectCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor(BaseMutableUiState$isAnimating$o$collect$slambda, 'BaseMutableUiState$isAnimating$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$14, '$collectCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_10, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_11, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(BaseMutableUiState, 'BaseMutableUiState', classMeta, VOID, [TransitionBoundsAware], VOID, VOID, [1, 3]);
  setMetadataFor(MatchedTargetUiState, 'MatchedTargetUiState', classMeta);
  setMetadataFor(AnimationMode, 'AnimationMode', classMeta, Enum);
  setMetadataFor(MutableUiStateSpecs, 'MutableUiStateSpecs', classMeta, VOID, [Annotation]);
  setMetadataFor(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn, 'BaseVisualisation$<get-viewpointIsAnimating>$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$17, '$collectCOROUTINE$17', classMeta, CoroutineImpl);
  setMetadataFor(BaseVisualisation$mapSegment$slambda$slambda, 'BaseVisualisation$mapSegment$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ManageAnimations$composable$slambda$slambda, 'BaseVisualisation$ManageAnimations$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda, 'BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda, 'BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ViewpointBehaviour, 'ViewpointBehaviour', classMeta, Enum);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_11, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_12, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_12, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy, 'BaseVisualisation$<get-isAnimatingState>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(BaseVisualisation$mapUpdate$slambda, 'BaseVisualisation$mapUpdate$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$mapSegment$slambda, 'BaseVisualisation$mapSegment$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ManageAnimations$composable$slambda, 'BaseVisualisation$ManageAnimations$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda, 'BaseVisualisation$ObserveElementAnimationChanges$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$InterpolateUiState$composable$slambda, 'BaseVisualisation$InterpolateUiState$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($updateViewpointCOROUTINE$15, '$updateViewpointCOROUTINE$15', classMeta, CoroutineImpl);
  setMetadataFor($updateViewpointCOROUTINE$16, '$updateViewpointCOROUTINE$16', classMeta, CoroutineImpl);
  setMetadataFor(BaseVisualisation, 'BaseVisualisation', classMeta, VOID, [Visualisation], VOID, VOID, [1, 2]);
  setMetadataFor(SystemClock, 'SystemClock', objectMeta);
  setMetadataFor(UUID, 'UUID', objectMeta);
  //endregion
  function mapState(_this__u8e3s4, scope, sharingStarted, mapper) {
    sharingStarted = sharingStarted === VOID ? Companion_getInstance().get_Eagerly_3vw7yc_k$() : sharingStarted;
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$2 = new _no_name_provided__qut3iv(_this__u8e3s4, mapper);
    return stateIn(tmp$ret$2, scope, sharingStarted, mapper(_this__u8e3s4.get_value_j01efc_k$()));
  }
  function _get_currentNullable__3er2hj($this) {
    return $this.currentNullable_1;
  }
  function get_$stableprop() {
    return 0;
  }
  function CompareValues(previous, currentNullable) {
    previous = previous === VOID ? null : previous;
    currentNullable = currentNullable === VOID ? null : currentNullable;
    this.previous_1 = previous;
    this.currentNullable_1 = currentNullable;
    this.$stable_1 = 0;
  }
  protoOf(CompareValues).get_previous_i5svy8_k$ = function () {
    return this.previous_1;
  };
  protoOf(CompareValues).get_current_jwi6j4_k$ = function () {
    var tmp0_elvis_lhs = this.currentNullable_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Should not be invoked');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CompareValues).get_isInitialized_44jfmn_k$ = function () {
    return !(this.currentNullable_1 == null);
  };
  protoOf(CompareValues).combine_tvecoc_k$ = function (new_0) {
    return new CompareValues(this.currentNullable_1, new_0);
  };
  protoOf(CompareValues).component1_7eebsc_k$ = function () {
    return this.previous_1;
  };
  protoOf(CompareValues).component2_7eebsb_k$ = function () {
    return this.get_current_jwi6j4_k$();
  };
  function withPrevious(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.filter' call
    var tmp = new CompareValues();
    var tmp0_filter = scan(_this__u8e3s4, tmp, withPrevious$slambda_0(null));
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(tmp0_filter);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function mapState$o$collect$slambda($collector, $mapper, resultContinuation) {
    this.$collector_1 = $collector;
    this.$mapper_1 = $mapper;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mapState$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(mapState$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mapState$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.$mapper_1(this.value_1), this);
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
  protoOf(mapState$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new mapState$o$collect$slambda(this.$collector_1, this.$mapper_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(mapState$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function mapState$o$collect$slambda_0($collector, $mapper, resultContinuation) {
    var i = new mapState$o$collect$slambda($collector, $mapper, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = mapState$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.$mapper_1, null);
            suspendResult = this._this__u8e3s4__1.$this_mapState_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  function _no_name_provided__qut3iv($this_mapState, $mapper) {
    this.$this_mapState_1 = $this_mapState;
    this.$mapper_1 = $mapper;
  }
  protoOf(_no_name_provided__qut3iv).collect_aabnv5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_aabnv5_k$(collector, $completion);
  };
  function withPrevious$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$slambda).invoke_u19kbw_k$ = function (previous, current, $completion) {
    var tmp = this.create_ysrdeb_k$(previous, current, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(withPrevious$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof CompareValues ? p1 : THROW_CCE();
    return this.invoke_u19kbw_k$(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(withPrevious$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return this.previous_1.combine_tvecoc_k$(this.current_1);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(withPrevious$slambda).create_ysrdeb_k$ = function (previous, current, completion) {
    var i = new withPrevious$slambda(completion);
    i.previous_1 = previous;
    i.current_1 = current;
    return i;
  };
  function withPrevious$slambda_0(resultContinuation) {
    var i = new withPrevious$slambda(resultContinuation);
    var l = function (previous, current, $completion) {
      return i.invoke_u19kbw_k$(previous, current, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function withPrevious$o$collect$slambda($collector, resultContinuation) {
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$o$collect$slambda).invoke_n1k31_k$ = function (value, $completion) {
    var tmp = this.create_gwkk8y_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(withPrevious$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_n1k31_k$(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(withPrevious$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (this.value_1.get_isInitialized_44jfmn_k$()) {
              this.set_state_a96kl8_k$(3);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 2:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(4);
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
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(withPrevious$o$collect$slambda).create_gwkk8y_k$ = function (value, completion) {
    var i = new withPrevious$o$collect$slambda(this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(withPrevious$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_gwkk8y_k$(value instanceof CompareValues ? value : THROW_CCE(), completion);
  };
  function withPrevious$o$collect$slambda_0($collector, resultContinuation) {
    var i = new withPrevious$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_n1k31_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = withPrevious$o$collect$slambda_0(this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_filter_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  function _no_name_provided__qut3iv_0($tmp0_filter) {
    this.$tmp0_filter_1 = $tmp0_filter;
  }
  protoOf(_no_name_provided__qut3iv_0).collect_tajkms_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_0).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_tajkms_k$(collector, $completion);
  };
  function get_defaultExtraTouch() {
    _init_properties_AppyxComponent_kt__paqjst();
    return defaultExtraTouch;
  }
  var defaultExtraTouch;
  var properties_initialized_AppyxComponent_kt_dfwb5r;
  function _init_properties_AppyxComponent_kt__paqjst() {
    if (!properties_initialized_AppyxComponent_kt_dfwb5r) {
      properties_initialized_AppyxComponent_kt_dfwb5r = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      defaultExtraTouch = _Dp___init__impl__ms3zkb(48.0);
    }
  }
  function get_$stableprop_0() {
    return 0;
  }
  function Element(interactionTarget, id) {
    id = id === VOID ? UUID_getInstance().randomUUID_1wutxa_k$() : id;
    this.interactionTarget_1 = interactionTarget;
    this.id_1 = id;
    this.$stable_1 = 0;
  }
  protoOf(Element).get_interactionTarget_ay5ie_k$ = function () {
    return this.interactionTarget_1;
  };
  protoOf(Element).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Element).component1_7eebsc_k$ = function () {
    return this.interactionTarget_1;
  };
  protoOf(Element).component2_7eebsb_k$ = function () {
    return this.id_1;
  };
  protoOf(Element).copy_x6p7hk_k$ = function (interactionTarget, id) {
    return new Element(interactionTarget, id);
  };
  protoOf(Element).copy$default_abadpo_k$ = function (interactionTarget, id, $super) {
    interactionTarget = interactionTarget === VOID ? this.interactionTarget_1 : interactionTarget;
    id = id === VOID ? this.id_1 : id;
    return $super === VOID ? this.copy_x6p7hk_k$(interactionTarget, id) : $super.copy_x6p7hk_k$.call(this, interactionTarget, id);
  };
  protoOf(Element).toString = function () {
    return 'Element(interactionTarget=' + this.interactionTarget_1 + ', id=' + this.id_1 + ')';
  };
  protoOf(Element).hashCode = function () {
    var result = this.interactionTarget_1 == null ? 0 : hashCode(this.interactionTarget_1);
    result = imul(result, 31) + getStringHashCode(this.id_1) | 0;
    return result;
  };
  protoOf(Element).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Element))
      return false;
    var tmp0_other_with_cast = other instanceof Element ? other : THROW_CCE();
    if (!equals(this.interactionTarget_1, tmp0_other_with_cast.interactionTarget_1))
      return false;
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    return true;
  };
  function asElement(_this__u8e3s4) {
    return new Element(_this__u8e3s4);
  }
  function FloatRange(from, to, fromInclusive, toInclusive) {
    from = from === VOID ? -Infinity : from;
    to = to === VOID ? Infinity : to;
    fromInclusive = fromInclusive === VOID ? true : fromInclusive;
    toInclusive = toInclusive === VOID ? true : toInclusive;
    this.from_1 = from;
    this.to_1 = to;
    this.fromInclusive_1 = fromInclusive;
    this.toInclusive_1 = toInclusive;
  }
  protoOf(FloatRange).get_from_wom7eb_k$ = function () {
    return this.from_1;
  };
  protoOf(FloatRange).get_to_kntnng_k$ = function () {
    return this.to_1;
  };
  protoOf(FloatRange).get_fromInclusive_9bry2h_k$ = function () {
    return this.fromInclusive_1;
  };
  protoOf(FloatRange).get_toInclusive_l55gvs_k$ = function () {
    return this.toInclusive_1;
  };
  protoOf(FloatRange).equals = function (other) {
    if (!(other instanceof FloatRange))
      return false;
    var tmp0_other_with_cast = other instanceof FloatRange ? other : THROW_CCE();
    if (!equals(this.from_1, tmp0_other_with_cast.from_1))
      return false;
    if (!equals(this.to_1, tmp0_other_with_cast.to_1))
      return false;
    if (!(this.fromInclusive_1 === tmp0_other_with_cast.fromInclusive_1))
      return false;
    if (!(this.toInclusive_1 === tmp0_other_with_cast.toInclusive_1))
      return false;
    return true;
  };
  protoOf(FloatRange).hashCode = function () {
    var result = imul(getStringHashCode('from'), 127) ^ getNumberHashCode(this.from_1);
    result = result + (imul(getStringHashCode('to'), 127) ^ getNumberHashCode(this.to_1)) | 0;
    result = result + (imul(getStringHashCode('fromInclusive'), 127) ^ (this.fromInclusive_1 | 0)) | 0;
    result = result + (imul(getStringHashCode('toInclusive'), 127) ^ (this.toInclusive_1 | 0)) | 0;
    return result;
  };
  protoOf(FloatRange).toString = function () {
    return '@com.bumble.appyx.interactions.core.annotations.FloatRange(from=' + this.from_1 + ', to=' + this.to_1 + ', fromInclusive=' + this.fromInclusive_1 + ', toInclusive=' + this.toInclusive_1 + ')';
  };
  function sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0).isGestureValid_cl3szg_k$ = function (position, boundingBox) {
    return this.function_1(new Offset(position), boundingBox);
  };
  function sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0).isGestureValid_cl3szg_k$ = function (position, boundingBox) {
    return this.function_1(new Offset(position), boundingBox);
  };
  function GestureValidator$Companion$defaultValidator$lambda(position, boundingBox) {
    return boundingBox.contains_ggguyy_k$(position.packedValue_1);
  }
  function GestureValidator$Companion$permissiveValidator$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return true;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = GestureValidator$Companion$defaultValidator$lambda;
    tmp.defaultValidator_1 = new sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = GestureValidator$Companion$permissiveValidator$lambda;
    tmp_1.permissiveValidator_1 = new sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0(tmp_2);
  }
  protoOf(Companion).get_defaultValidator_z5qn1i_k$ = function () {
    return this.defaultValidator_1;
  };
  protoOf(Companion).get_permissiveValidator_5k3u2e_k$ = function () {
    return this.permissiveValidator_1;
  };
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function GestureValidator() {
  }
  function detectDragGesturesOrCancellation(_this__u8e3s4, onDragStart, onDragEnd, onDrag, $completion) {
    var tmp;
    if (onDragStart === VOID) {
      tmp = detectDragGesturesOrCancellation$lambda;
    } else {
      tmp = onDragStart;
    }
    onDragStart = tmp;
    var tmp_0;
    if (onDragEnd === VOID) {
      tmp_0 = detectDragGesturesOrCancellation$lambda_0;
    } else {
      tmp_0 = onDragEnd;
    }
    onDragEnd = tmp_0;
    return awaitEachGesture(_this__u8e3s4, detectDragGesturesOrCancellation$slambda_0(onDragStart, onDrag, onDragEnd, null), $completion);
  }
  function drag(_this__u8e3s4, pointerId, onDrag, $completion) {
    var tmp = new $dragCOROUTINE$2(_this__u8e3s4, pointerId, onDrag, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function detectDragGesturesOrCancellation$lambda(it) {
    return Unit_getInstance();
  }
  function detectDragGesturesOrCancellation$lambda_0() {
    return Unit_getInstance();
  }
  function detectDragGesturesOrCancellation$slambda$lambda($overSlop) {
    return function (change, over) {
      change.consume_spbz2t_k$();
      $overSlop._v = over;
      return Unit_getInstance();
    };
  }
  function detectDragGesturesOrCancellation$slambda$lambda_0($onDrag) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      var tmp0_run = $onDrag(it, new Offset(positionChange(it)));
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'com.bumble.appyx.interactions.core.gesture.detectDragGesturesOrCancellation.<anonymous>.<anonymous>.<anonymous>' call
      it.consume_spbz2t_k$();
      tmp$ret$0 = tmp0_run;
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    };
  }
  function detectDragGesturesOrCancellation$slambda($onDragStart, $onDrag, $onDragEnd, resultContinuation) {
    this.$onDragStart_1 = $onDragStart;
    this.$onDrag_1 = $onDrag;
    this.$onDragEnd_1 = $onDragEnd;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectDragGesturesOrCancellation$slambda).invoke_6kuihv_k$ = function ($this$awaitEachGesture, $completion) {
    var tmp = this.create_699gxy_k$($this$awaitEachGesture, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(detectDragGesturesOrCancellation$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectDragGesturesOrCancellation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            this.set_state_a96kl8_k$(1);
            suspendResult = awaitFirstDown(this.$this$awaitEachGesture_1, false, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.down0__1 = suspendResult;
            this.overSlop2__1 = {_v: new Offset(Companion_getInstance_0().get_Zero_sctq3f_k$())};
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            var tmp_0 = this.down0__1.get_id_o0558_k$();
            suspendResult = awaitTouchSlopOrCancellation(this.$this$awaitEachGesture_1, tmp_0, detectDragGesturesOrCancellation$slambda$lambda(this.overSlop2__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.drag1__1 = suspendResult;
            if (!(this.drag1__1 == null) ? !this.drag1__1.get_isConsumed_scj5q3_k$() : false) {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            if (!(this.drag1__1 == null)) {
              this.$onDragStart_1(new Offset(this.drag1__1.get_position_kw508q_k$()));
              this.$onDrag_1(this.drag1__1, this.overSlop2__1._v);
              this.set_state_a96kl8_k$(5);
              var tmp_1 = this.drag1__1.get_id_o0558_k$();
              suspendResult = drag(this.$this$awaitEachGesture_1, tmp_1, detectDragGesturesOrCancellation$slambda$lambda_0(this.$onDrag_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(7);
              continue $sm;
            }

          case 5:
            if (suspendResult) {
              this.$onDragEnd_1();
              this.set_state_a96kl8_k$(6);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(detectDragGesturesOrCancellation$slambda).create_699gxy_k$ = function ($this$awaitEachGesture, completion) {
    var i = new detectDragGesturesOrCancellation$slambda(this.$onDragStart_1, this.$onDrag_1, this.$onDragEnd_1, completion);
    i.$this$awaitEachGesture_1 = $this$awaitEachGesture;
    return i;
  };
  protoOf(detectDragGesturesOrCancellation$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function detectDragGesturesOrCancellation$slambda_0($onDragStart, $onDrag, $onDragEnd, resultContinuation) {
    var i = new detectDragGesturesOrCancellation$slambda($onDragStart, $onDrag, $onDragEnd, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.invoke_6kuihv_k$($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $dragCOROUTINE$2(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.onDrag_1 = onDrag;
  }
  protoOf($dragCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = awaitDragOrCancellation(this._this__u8e3s4__1, this.pointer0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var change = tmp_0;
            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            if (!this.onDrag_1(change)) {
              return false;
            }

            this.pointer0__1 = change.get_id_o0558_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function Elements_init_$Init$(onScreen, offScreen, $this) {
    onScreen = onScreen === VOID ? emptySet() : onScreen;
    offScreen = offScreen === VOID ? emptySet() : offScreen;
    Elements.call($this, onScreen, offScreen, plus(onScreen, offScreen));
    return $this;
  }
  function Elements_init_$Create$(onScreen, offScreen) {
    return Elements_init_$Init$(onScreen, offScreen, objectCreate(protoOf(Elements)));
  }
  function get_$stableprop_1() {
    return 0;
  }
  function Elements(onScreen, offScreen, all) {
    this.onScreen_1 = onScreen;
    this.offScreen_1 = offScreen;
    this.all_1 = all;
    this.$stable_1 = 0;
  }
  protoOf(Elements).get_onScreen_75efbg_k$ = function () {
    return this.onScreen_1;
  };
  protoOf(Elements).get_offScreen_vxq0b6_k$ = function () {
    return this.offScreen_1;
  };
  protoOf(Elements).get_all_18j9hk_k$ = function () {
    return this.all_1;
  };
  function AppyxComponent() {
  }
  function BaseAppyxComponent$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$slambda$slambda).invoke_q0g55z_k$ = function (it, $completion) {
    var tmp = this.create_1j0nno_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_q0g55z_k$((!(p1 == null) ? isInterface(p1, Set) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1._elements_1.emit_1fbrsb_k$(Elements_init_$Create$(VOID, this.it_1), this);
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
  protoOf(BaseAppyxComponent$slambda$slambda).create_1j0nno_k$ = function (it, completion) {
    var i = new BaseAppyxComponent$slambda$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(BaseAppyxComponent$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_1j0nno_k$((!(value == null) ? isInterface(value, Set) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$slambda$slambda_0(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$slambda$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_q0g55z_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).invoke_btt3f5_k$ = function (it, $completion) {
    var tmp = this.create_ihwdaq_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_btt3f5_k$((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          if (!this.it_1) {
            AppyxLogger_getInstance().d_3t63e7_k$('AppyxComponent', 'Finished animating');
            onAnimationsFinished(this.this$0__1);
          } else {
            onAnimationsStarted(this.this$0__1);
          }
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).create_ihwdaq_k$ = function (it, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_ihwdaq_k$((!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda_0(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_btt3f5_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).invoke_9m88fj_k$ = function (it, $completion) {
    var tmp = this.create_a2w2pw_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_9m88fj_k$(p1 instanceof Element ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          AppyxLogger_getInstance().d_3t63e7_k$('AppyxComponent', '' + this.it_1 + ' onAnimation finished');
          this.this$0__1.model_1.cleanUpElement_csfwct_k$(this.it_1);
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).create_a2w2pw_k$ = function (it, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).create_xubfvz_k$ = function (value, completion) {
    return this.create_a2w2pw_k$(value instanceof Element ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda_2(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_9m88fj_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$lambda($flowArray) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = $flowArray.length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      return tmp$ret$0;
    };
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda($it, resultContinuation) {
    this.$it_1 = $it;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).invoke_90g5mg_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_w8jcwz_k$($this$combineInternal, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_90g5mg_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var onScreen = LinkedHashSet_init_$Create$();
            var offScreen = LinkedHashSet_init_$Create$();
            var index = 0;
            var indexedObject = this.it_1;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var item = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              var element = this.$it_1.get_fkrdnv_k$(tmp1).get_element_q8gf71_k$();
              if (item) {
                onScreen.add_1j60pz_k$(element);
              } else {
                offScreen.add_1j60pz_k$(element);
              }
            }

            suspendResult = this.$this$combineInternal_1.emit_1fbrsb_k$(to(Elements_init_$Create$(onScreen, offScreen), this.$it_1), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).create_w8jcwz_k$ = function ($this$combineInternal, it, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda(this.$it_1, completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda_0($it, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda($it, resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_90g5mg_k$($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$lambda(this._this__u8e3s4__1.$flowArray_1);
            suspendResult = combineInternal(this.collector_1, this._this__u8e3s4__1.$flowArray_1, tmp_0, BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda_0(this._this__u8e3s4__1.$it_1, null), this);
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
  function _no_name_provided__qut3iv_1($flowArray, $it) {
    this.$flowArray_1 = $flowArray;
    this.$it_1 = $it;
  }
  protoOf(_no_name_provided__qut3iv_1).collect_pzvu66_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_1).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_pzvu66_k$(collector, $completion);
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda($visualisation, resultContinuation) {
    this.$visualisation_1 = $visualisation;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).invoke_juswts_k$ = function ($this$transformLatest, it, $completion) {
    var tmp = this.create_w4e1uj_k$($this$transformLatest, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_juswts_k$(tmp, p2 instanceof Output ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = emitAll(this.$this$transformLatest_1, this.$visualisation_1.map_xy39ku_k$(this.it_1), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).create_w4e1uj_k$ = function ($this$transformLatest, it, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda(this.$visualisation_1, completion);
    i.$this$transformLatest_1 = $this$transformLatest;
    i.it_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_0($visualisation, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda($visualisation, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.invoke_juswts_k$($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).invoke_2djmxs_k$ = function ($this$transformLatest, it, $completion) {
    var tmp = this.create_hkx9dp_k$($this$transformLatest, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_2djmxs_k$(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(this.it_1, 10));
            var tmp0_iterator = this.it_1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator.next_20eer_k$();
              tmp0_mapTo.add_1j60pz_k$(item.get_visibleState_frxjc_k$());
            }

            var visibilityFlows = tmp0_mapTo;
            var tmp0_toTypedArray = toList(visibilityFlows);
            var flowArray = copyToArray(tmp0_toTypedArray);
            suspendResult = emitAll(this.$this$transformLatest_1, new _no_name_provided__qut3iv_1(flowArray, this.it_1), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).create_hkx9dp_k$ = function ($this$transformLatest, it, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_1(completion);
    i.$this$transformLatest_1 = $this$transformLatest;
    i.it_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_2(resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_1(resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.invoke_2djmxs_k$($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).invoke_jam0or_k$ = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.create_qrxwq8_k$(_name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_jam0or_k$(p1 instanceof Pair ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.elementsState0__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component1_7eebsc_k$();
            this.elementUiModels1__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component2_7eebsb_k$();
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1._elements_1.emit_1fbrsb_k$(this.elementsState0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this.this$0__1._uiModels_1.emit_1fbrsb_k$(this.elementUiModels1__1, this);
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
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).create_qrxwq8_k$ = function (_name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_3(this.this$0__1, completion);
    i._name_for_destructuring_parameter_0__wldtmu_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).create_xubfvz_k$ = function (value, completion) {
    return this.create_qrxwq8_k$(value instanceof Pair ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_4(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_3(this$0, resultContinuation);
    var l = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.invoke_jam0or_k$(_name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_scope__bi2zur($this) {
    return $this.scope_1;
  }
  function _get_model__e5yfy0($this) {
    return $this.model_1;
  }
  function _get_visualisation__jxb5p6($this) {
    return $this.visualisation_1;
  }
  function _get_gestureFactory__an17e2($this) {
    return $this.gestureFactory_1;
  }
  function _get_backPressStrategy__1kwd1e($this) {
    return $this.backPressStrategy_1;
  }
  function _get_animateSettle__msm091($this) {
    return $this.animateSettle_1;
  }
  function _get_disableAnimations__r330hy($this) {
    return $this.disableAnimations_1;
  }
  function _get_isDebug__o7t42w($this) {
    return $this.isDebug_1;
  }
  function _set_visualisationObserverJob__jgpixn($this, _set____db54di) {
    $this.visualisationObserverJob_1 = _set____db54di;
  }
  function _get_visualisationObserverJob__nz2qkv($this) {
    return $this.visualisationObserverJob_1;
  }
  function _set__visualisation__qmabbf($this, _set____db54di) {
    $this._visualisation_1 = _set____db54di;
  }
  function _get__visualisation__ivqam9($this) {
    return $this._visualisation_1;
  }
  function _set__gestureFactory__ww9rdx($this, _set____db54di) {
    $this._gestureFactory_1 = _set____db54di;
  }
  function _get__gestureFactory__s1432n($this) {
    return $this._gestureFactory_1;
  }
  function _set_animationChangesJob__kx3cpz($this, _set____db54di) {
    $this.animationChangesJob_1 = _set____db54di;
  }
  function _get_animationChangesJob__y7tlmb($this) {
    return $this.animationChangesJob_1;
  }
  function _set_animationFinishedJob__kfy26o($this, _set____db54di) {
    $this.animationFinishedJob_1 = _set____db54di;
  }
  function _get_animationFinishedJob__ye0q70($this) {
    return $this.animationFinishedJob_1;
  }
  function _set_uiContext__qlq5hy($this, _set____db54di) {
    $this.uiContext_1 = _set____db54di;
  }
  function _get_uiContext__2p4awm($this) {
    return $this.uiContext_1;
  }
  function _set_transitionBounds__kov39v($this, _set____db54di) {
    $this.transitionBounds_1 = _set____db54di;
  }
  function _get_transitionBounds__8e95sx($this) {
    return $this.transitionBounds_1;
  }
  function _set__isAnimating__dja1zy($this, _set____db54di) {
    $this._isAnimating_1 = _set____db54di;
  }
  function _get__isAnimating__20gok6($this) {
    return $this._isAnimating_1;
  }
  function _get_instant__qotxgw($this) {
    return $this.instant_1;
  }
  function _set_animated__f81f8s($this, _set____db54di) {
    $this.animated_1 = _set____db54di;
  }
  function _get_animated__s0xqpk($this) {
    return $this.animated_1;
  }
  function _set_debug__dg8itu($this, _set____db54di) {
    $this.debug_1 = _set____db54di;
  }
  function _get_debug__ikvxnm($this) {
    return $this.debug_1;
  }
  function _get_drag__d5ksrb($this) {
    return $this.drag_1;
  }
  function _get__uiModels__rts3n8($this) {
    return $this._uiModels_1;
  }
  function _set_elementsJob__c4jkht($this, _set____db54di) {
    $this.elementsJob_1 = _set____db54di;
  }
  function _get_elementsJob__i5ulu3($this) {
    return $this.elementsJob_1;
  }
  function _get__elements__ki4fqz($this) {
    return $this._elements_1;
  }
  function _set_animationScope__6uoi6x($this, _set____db54di) {
    $this.animationScope_1 = _set____db54di;
  }
  function _get_animationScope__ioexuj($this) {
    return $this.animationScope_1;
  }
  function _set_isInitialised__4ox5eq($this, _set____db54di) {
    $this.isInitialised_1 = _set____db54di;
  }
  function _get_isInitialised__aiud3m($this) {
    return $this.isInitialised_1;
  }
  function observeAnimationChanges($this, visualisation) {
    var tmp0_safe_receiver = $this.animationChangesJob_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel$default_64jlsz_k$();
    }
    var tmp = $this;
    tmp.animationChangesJob_1 = launch($this.scope_1, VOID, VOID, BaseAppyxComponent$observeAnimationChanges$slambda_0(visualisation, $this, null));
    var tmp1_safe_receiver = $this.animationFinishedJob_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.cancel$default_64jlsz_k$();
    }
    var tmp_0 = $this;
    tmp_0.animationFinishedJob_1 = launch($this.scope_1, VOID, VOID, BaseAppyxComponent$observeAnimationChanges$slambda_2(visualisation, $this, null));
  }
  function createAnimatedInputSource($this, scope) {
    $this.animated_1 = new AnimatedProgressController($this.model_1, scope, $this.defaultAnimationSpec_1, $this.animateSettle_1);
  }
  function createdDebugInputSource($this) {
    $this.debug_1 = new DebugProgressInputSource($this.model_1);
  }
  function onVisualisationReady($this, visualisation) {
    visualisation.updateBounds_8j3per_k$($this.transitionBounds_1);
    observeAnimationChanges($this, visualisation);
    observeVisualisation($this, visualisation);
  }
  function observeVisualisation($this, visualisation) {
    $this.elementsJob_1.cancel$default_64jlsz_k$();
    var tmp0_safe_receiver = $this.visualisationObserverJob_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel$default_64jlsz_k$();
    }
    var tmp = $this;
    tmp.visualisationObserverJob_1 = launch($this.scope_1, VOID, VOID, BaseAppyxComponent$observeVisualisation$slambda_0($this, visualisation, null));
  }
  function onAnimationsStarted($this) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var tmp0_update = $this._isAnimating_1;
      while (true) {
        var prevValue = tmp0_update.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.BaseAppyxComponent.onAnimationsStarted.<anonymous>' call
        var nextValue = true;
        if (tmp0_update.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function onAnimationsFinished($this) {
    $this.model_1.relaxExecutionMode_iyr0h2_k$();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var tmp0_update = $this._isAnimating_1;
      while (true) {
        var prevValue = tmp0_update.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.BaseAppyxComponent.onAnimationsFinished.<anonymous>' call
        var nextValue = false;
        if (tmp0_update.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function settle($this, gestureSettleConfig) {
    if ($this.isDebug_1) {
      var tmp0_safe_receiver = $this.debug_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.settle_7cx3ie_k$();
      }
    } else {
      var tmp1_safe_receiver = $this.animated_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.settle_6nj1ww_k$(gestureSettleConfig.get_completionThreshold_jce5xi_k$(), gestureSettleConfig.get_completeGestureSpec_cc2uv2_k$(), gestureSettleConfig.get_revertGestureSpec_32f4on_k$());
      }
    }
  }
  function get_$stableprop_2() {
    return 0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function BaseAppyxComponent$_init_$lambda_o8w1tv(it) {
    return new Noop_1();
  }
  function BaseAppyxComponent$drag$lambda(this$0) {
    return function () {
      return this$0._gestureFactory_1;
    };
  }
  function BaseAppyxComponent$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this.this$0__1.model_1.get_elements_vxwh8g_k$();
            var tmp_1 = BaseAppyxComponent$slambda$slambda_0(this.this$0__1, null);
            suspendResult = tmp_0.collect_4rdebi_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  protoOf(BaseAppyxComponent$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseAppyxComponent$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$slambda_0(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda($visualisation, this$0, resultContinuation) {
    this.$visualisation_1 = $visualisation;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this.$visualisation_1.isAnimating_x1kvqk_k$();
            var tmp_1 = BaseAppyxComponent$observeAnimationChanges$slambda$slambda_0(this.this$0__1, null);
            suspendResult = tmp_0.collect_4rdebi_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda(this.$visualisation_1, this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda_0($visualisation, this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda($visualisation, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda_1($visualisation, this$0, resultContinuation) {
    this.$visualisation_1 = $visualisation;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this.$visualisation_1.get_finishedAnimations_ooylfa_k$();
            var tmp_1 = BaseAppyxComponent$observeAnimationChanges$slambda$slambda_2(this.this$0__1, null);
            suspendResult = tmp_0.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_1), this);
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda_1(this.$visualisation_1, this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda_2($visualisation, this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda_1($visualisation, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda(this$0, $visualisation, resultContinuation) {
    this.this$0__1 = this$0;
    this.$visualisation_1 = $visualisation;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0_flatMapLatest = this.this$0__1.model_1.get_output_hs4j62_k$();
            var tmp1_flatMapLatest = transformLatest(tmp0_flatMapLatest, BaseAppyxComponent$observeVisualisation$slambda$slambda_0(this.$visualisation_1, null));
            var tmp_0 = transformLatest(tmp1_flatMapLatest, BaseAppyxComponent$observeVisualisation$slambda$slambda_2(null));
            var tmp_1 = BaseAppyxComponent$observeVisualisation$slambda$slambda_4(this.this$0__1, null);
            suspendResult = tmp_0.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_1), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda(this.this$0__1, this.$visualisation_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeVisualisation$slambda_0(this$0, $visualisation, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda(this$0, $visualisation, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent(scope, model, visualisation, gestureFactory, defaultAnimationSpec, gestureSettleConfig, backPressStrategy, animateSettle, disableAnimations, isDebug) {
    scope = scope === VOID ? CoroutineScope_0(SupervisorJob().plus_rgw9wi_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$())) : scope;
    var tmp;
    if (gestureFactory === VOID) {
      tmp = BaseAppyxComponent$_init_$lambda_o8w1tv;
    } else {
      tmp = gestureFactory;
    }
    gestureFactory = tmp;
    defaultAnimationSpec = defaultAnimationSpec === VOID ? get_DefaultAnimationSpec() : defaultAnimationSpec;
    gestureSettleConfig = gestureSettleConfig === VOID ? new GestureSettleConfig(VOID, defaultAnimationSpec, defaultAnimationSpec) : gestureSettleConfig;
    backPressStrategy = backPressStrategy === VOID ? new DontHandleBackPress() : backPressStrategy;
    animateSettle = animateSettle === VOID ? false : animateSettle;
    disableAnimations = disableAnimations === VOID ? false : disableAnimations;
    isDebug = isDebug === VOID ? false : isDebug;
    this.scope_1 = scope;
    this.model_1 = model;
    this.visualisation_1 = visualisation;
    this.gestureFactory_1 = gestureFactory;
    this.defaultAnimationSpec_1 = defaultAnimationSpec;
    this.gestureSettleConfig_1 = gestureSettleConfig;
    this.backPressStrategy_1 = backPressStrategy;
    this.animateSettle_1 = animateSettle;
    this.disableAnimations_1 = disableAnimations;
    this.isDebug_1 = isDebug;
    this.backPressStrategy_1.init_5c6vny_k$(this, this.model_1);
    this.visualisationObserverJob_1 = null;
    this._visualisation_1 = null;
    this._gestureFactory_1 = this.gestureFactory_1(Companion_getInstance_11().get_Zero_woe9zl_k$());
    this.animationChangesJob_1 = null;
    this.animationFinishedJob_1 = null;
    this.uiContext_1 = null;
    this.transitionBounds_1 = Companion_getInstance_11().get_Zero_woe9zl_k$();
    this._isAnimating_1 = MutableStateFlow(false);
    this.isAnimating_1 = this._isAnimating_1;
    this.instant_1 = new InstantProgressController(this.model_1);
    this.animated_1 = null;
    this.debug_1 = null;
    var tmp_0 = this;
    tmp_0.drag_1 = new DragProgressController(this.model_1, BaseAppyxComponent$drag$lambda(this), this.defaultAnimationSpec_1);
    this._uiModels_1 = MutableStateFlow(emptyList());
    this.uiModels_1 = this._uiModels_1;
    this._elements_1 = MutableStateFlow(Elements_init_$Create$(VOID, this.model_1.get_elements_vxwh8g_k$().get_value_j01efc_k$()));
    this.elements_1 = this._elements_1;
    var tmp_1 = this;
    tmp_1.elementsJob_1 = launch(this.scope_1, VOID, VOID, BaseAppyxComponent$slambda_0(this, null));
    this.animationScope_1 = null;
    this.isInitialised_1 = false;
    this.$stable_1 = 0;
  }
  protoOf(BaseAppyxComponent).get_defaultAnimationSpec_dmgjrt_k$ = function () {
    return this.defaultAnimationSpec_1;
  };
  protoOf(BaseAppyxComponent).get_gestureSettleConfig_q239pp_k$ = function () {
    return this.gestureSettleConfig_1;
  };
  protoOf(BaseAppyxComponent).get_isAnimating_j5dmvp_k$ = function () {
    return this.isAnimating_1;
  };
  protoOf(BaseAppyxComponent).get_uiModels_ipbt2f_k$ = function () {
    return this.uiModels_1;
  };
  protoOf(BaseAppyxComponent).get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  protoOf(BaseAppyxComponent).onAddedToComposition_kj50uu_k$ = function (scope) {
    this.animationScope_1 = scope;
    createAnimatedInputSource(this, scope);
    createdDebugInputSource(this);
  };
  protoOf(BaseAppyxComponent).onRemovedFromComposition_vutugi_k$ = function () {
    if (this.isDebug_1) {
      var tmp0_safe_receiver = this.debug_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.stopModel_noavp2_k$();
      }
    } else {
      var tmp1_safe_receiver = this.animated_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.stopModel_noavp2_k$();
      }
    }
    var tmp2_safe_receiver = this.animationScope_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      cancel(tmp2_safe_receiver);
    }
  };
  protoOf(BaseAppyxComponent).updateContext_i1gwt4_k$ = function (uiContext) {
    if (!equals(this.uiContext_1, uiContext)) {
      this.uiContext_1 = uiContext;
      AppyxLogger_getInstance().d_3t63e7_k$('AppyxComponent', '' + getKClassFromExpression(this).get_simpleName_r6f8py_k$() + ' \u2013 UiContext update: ' + uiContext);
      var tmp = this;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.visualisation_1(uiContext);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.interactions.core.model.BaseAppyxComponent.updateContext.<anonymous>' call
      onVisualisationReady(this, tmp0_also);
      tmp._visualisation_1 = tmp0_also;
    }
  };
  protoOf(BaseAppyxComponent).updateBounds_8j3per_k$ = function (transitionBounds) {
    if (!transitionBounds.equals(this.transitionBounds_1)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      AppyxLogger_getInstance().d_3t63e7_k$('AppyxComponent', '' + getKClassFromExpression(transitionBounds).get_simpleName_r6f8py_k$() + ' \u2013 Bounds update: ' + transitionBounds.get_widthPx_nfsdj9_k$() + 'x' + transitionBounds.get_heightPx_om8qxk_k$());
      this.transitionBounds_1 = transitionBounds;
      this._gestureFactory_1 = this.gestureFactory_1(transitionBounds);
      var tmp0_safe_receiver = this._visualisation_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.updateBounds_8j3per_k$(transitionBounds);
      }
    }
  };
  protoOf(BaseAppyxComponent).operation_hvc77k_k$ = function (operation, animationSpec) {
    var tmp;
    if (operation.get_mode_woqlt8_k$().equals(Mode_IMMEDIATE_getInstance())) {
      tmp = animationSpec instanceof SpringSpec;
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp0_safe_receiver = this._visualisation_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.overrideAnimationSpec_tldeh2_k$(animationSpec);
      }
    }
    var animatedSource = this.animated_1;
    var debugSource = this.debug_1;
    if (this.isDebug_1 ? !(debugSource == null) : false) {
      debugSource.operation_oywo50_k$(operation);
    } else if ((animatedSource == null ? true : get_DisableAnimations()) ? true : this.disableAnimations_1) {
      this.instant_1.operation_oywo50_k$(operation);
    } else {
      animatedSource.operation_uf6i59_k$(operation, animationSpec == null ? this.defaultAnimationSpec_1 : animationSpec);
    }
  };
  protoOf(BaseAppyxComponent).operation$default_tq7xqo_k$ = function (operation, animationSpec, $super) {
    animationSpec = animationSpec === VOID ? null : animationSpec;
    var tmp;
    if ($super === VOID) {
      this.operation_hvc77k_k$(operation, animationSpec);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.operation_hvc77k_k$.call(this, operation, animationSpec);
    }
    return tmp;
  };
  protoOf(BaseAppyxComponent).onStartDrag_50u6al_k$ = function (position) {
    this.drag_1.onStartDrag_50u6al_k$(position);
  };
  protoOf(BaseAppyxComponent).onDrag_v1qkpx_k$ = function (dragAmount, density) {
    if (!this._isAnimating_1.get_value_j01efc_k$()) {
      this.drag_1.onDrag_v1qkpx_k$(dragAmount, density);
    }
  };
  protoOf(BaseAppyxComponent).onDragEnd_curv87_k$ = function () {
    if (!this._isAnimating_1.get_value_j01efc_k$()) {
      this.drag_1.onDragEnd_curv87_k$();
      settle(this, this.gestureSettleConfig_1);
    }
  };
  protoOf(BaseAppyxComponent).onRelease_f2b7s9_k$ = function () {
    if (this.drag_1.isDragging_r126p3_k$()) {
      this.onDragEnd_curv87_k$();
    }
  };
  protoOf(BaseAppyxComponent).destroy_euxju1_k$ = function () {
    var tmp0_safe_receiver = this.visualisationObserverJob_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel$default_64jlsz_k$();
    }
    this.elementsJob_1.cancel$default_64jlsz_k$();
    cancel(this.scope_1);
  };
  protoOf(BaseAppyxComponent).setNormalisedProgress_92h62m_k$ = function (progress) {
    var tmp0_safe_receiver = this.debug_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.setNormalisedProgress_92h62m_k$(progress);
    }
  };
  protoOf(BaseAppyxComponent).handleBackPress_wbgl2k_k$ = function () {
    return this.backPressStrategy_1.handleBackPress_wbgl2k_k$();
  };
  protoOf(BaseAppyxComponent).canHandeBackPress_eochwq_k$ = function () {
    return this.backPressStrategy_1.get_canHandleBackPress_do39pp_k$();
  };
  protoOf(BaseAppyxComponent).saveInstanceState_ymawco_k$ = function (state) {
    this.model_1.saveInstanceState_ymawco_k$(state);
  };
  function removedElements(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp0_map = withPrevious(_this__u8e3s4.get_elements_vxwh8g_k$());
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_2(tmp0_map);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function removedElements$o$collect$slambda($collector, resultContinuation) {
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(removedElements$o$collect$slambda).invoke_3e54x0_k$ = function (value, $completion) {
    var tmp = this.create_yqgl2x_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(removedElements$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_3e54x0_k$(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(removedElements$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0_safe_receiver = this.value_1.get_previous_i5svy8_k$();
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_all_18j9hk_k$();
            var previousKeys = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
            var currentKeys = this.value_1.get_current_jwi6j4_k$().get_all_18j9hk_k$();
            var tmp0_filterTo = ArrayList_init_$Create$_0();
            var tmp0_iterator = previousKeys.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              if (!currentKeys.contains_2ehdt1_k$(element)) {
                tmp0_filterTo.add_1j60pz_k$(element);
              }
            }

            suspendResult = this.$collector_1.emit_1fbrsb_k$(tmp0_filterTo, this);
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
  protoOf(removedElements$o$collect$slambda).create_yqgl2x_k$ = function (value, completion) {
    var i = new removedElements$o$collect$slambda(this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(removedElements$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_yqgl2x_k$(value instanceof CompareValues ? value : THROW_CCE(), completion);
  };
  function removedElements$o$collect$slambda_0($collector, resultContinuation) {
    var i = new removedElements$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_3e54x0_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$4(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = removedElements$o$collect$slambda_0(this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_0), this);
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
  function _no_name_provided__qut3iv_2($tmp0_map) {
    this.$tmp0_map_1 = $tmp0_map;
  }
  protoOf(_no_name_provided__qut3iv_2).collect_481fna_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$4(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_2).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_481fna_k$(collector, $completion);
  };
  function BackPressHandlerStrategy() {
  }
  function get_$stableprop_3() {
    return 8;
  }
  function BaseBackPressHandlerStrategy() {
    this.$stable_1 = 8;
  }
  protoOf(BaseBackPressHandlerStrategy).set_appyxComponent_atuuv7_k$ = function (_set____db54di) {
    this.appyxComponent_1 = _set____db54di;
  };
  protoOf(BaseBackPressHandlerStrategy).get_appyxComponent_er08wq_k$ = function () {
    var tmp = this.appyxComponent_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('appyxComponent');
    }
  };
  protoOf(BaseBackPressHandlerStrategy).set_transitionModel_ow94op_k$ = function (_set____db54di) {
    this.transitionModel_1 = _set____db54di;
  };
  protoOf(BaseBackPressHandlerStrategy).get_transitionModel_6tgxrf_k$ = function () {
    var tmp = this.transitionModel_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('transitionModel');
    }
  };
  protoOf(BaseBackPressHandlerStrategy).init_5c6vny_k$ = function (appyxComponent, transitionModel) {
    this.appyxComponent_1 = appyxComponent;
    this.transitionModel_1 = transitionModel;
  };
  function get_$stableprop_4() {
    return 8;
  }
  function DontHandleBackPress() {
    BaseBackPressHandlerStrategy.call(this);
    this.canHandleBackPress_1 = MutableStateFlow(false);
    this.$stable_2 = 8;
  }
  protoOf(DontHandleBackPress).get_canHandleBackPress_do39pp_k$ = function () {
    return this.canHandleBackPress_1;
  };
  protoOf(DontHandleBackPress).handleBackPress_wbgl2k_k$ = function () {
    return false;
  };
  function _get_TAG__e5w0nr($this) {
    return $this.TAG_1;
  }
  function AnimatedProgressController$animateModel$slambda$lambda(this$0) {
    return function ($this$animateTo) {
      this$0.model_1.setProgress_5taz02_k$($this$animateTo.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function _get_model__e5yfy0_0($this) {
    return $this.model_1;
  }
  function _get_coroutineScope__o75s5t($this) {
    return $this.coroutineScope_1;
  }
  function _get_animateSettle__msm091_0($this) {
    return $this.animateSettle_1;
  }
  function _get_animatable__cd8nbn($this) {
    return $this.animatable_1;
  }
  function animateModel($this, from, target, animationSpec, cancelVelocity, onAnimationFinished) {
    var velocity = $this.animatable_1.get_velocity_3hqvmu_k$();
    var tmp = Dispatchers_getInstance().get_Main_wo5vz6_k$().get_immediate_r3y8eg_k$();
    launch($this.coroutineScope_1, tmp, VOID, AnimatedProgressController$animateModel$slambda_0($this, from, target, animationSpec, cancelVelocity, velocity, onAnimationFinished, null));
  }
  function animateModel$default($this, from, target, animationSpec, cancelVelocity, onAnimationFinished, $super) {
    var tmp;
    if (onAnimationFinished === VOID) {
      tmp = AnimatedProgressController$animateModel$lambda;
    } else {
      tmp = onAnimationFinished;
    }
    onAnimationFinished = tmp;
    return animateModel($this, from, target, animationSpec, cancelVelocity, onAnimationFinished);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.TAG_1 = 'AnimatedProgressController';
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function AnimatedProgressController$operation$lambda($currentState) {
    return function () {
      return $currentState.get_progress_mo5qeu_k$();
    };
  }
  function AnimatedProgressController$operation$lambda_0($currentState) {
    return function () {
      return $currentState.get_maxProgress_uy5umg_k$();
    };
  }
  function AnimatedProgressController$operation$lambda_1(this$0) {
    return function () {
      this$0.model_1.onSettled_u9dneq_k$(SettleDirection_COMPLETE_getInstance(), this$0.animateSettle_1);
      return Unit_getInstance();
    };
  }
  function AnimatedProgressController$settle$lambda($currentState) {
    return function () {
      return $currentState.get_progress_mo5qeu_k$();
    };
  }
  function AnimatedProgressController$settle$lambda_0($targetValue) {
    return function () {
      return $targetValue;
    };
  }
  function AnimatedProgressController$settle$lambda_1(this$0, $direction) {
    return function () {
      this$0.model_1.onSettled_u9dneq_k$($direction, this$0.animateSettle_1);
      return Unit_getInstance();
    };
  }
  function AnimatedProgressController$animateModel$lambda() {
    return Unit_getInstance();
  }
  function AnimatedProgressController$animateModel$slambda(this$0, $from, $target, $animationSpec, $cancelVelocity, $velocity, $onAnimationFinished, resultContinuation) {
    this.this$0__1 = this$0;
    this.$from_1 = $from;
    this.$target_1 = $target;
    this.$animationSpec_1 = $animationSpec;
    this.$cancelVelocity_1 = $cancelVelocity;
    this.$velocity_1 = $velocity;
    this.$onAnimationFinished_1 = $onAnimationFinished;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedProgressController$animateModel$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedProgressController$animateModel$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedProgressController$animateModel$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.animatable_1.snapTo_fkfduh_k$(this.$from_1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            var tmp_0 = this.$target_1();
            var tmp_1 = this.$cancelVelocity_1 ? 0.0 : this.$velocity_1;
            suspendResult = this.this$0__1.animatable_1.animateTo_h218fu_k$(tmp_0, this.$animationSpec_1, tmp_1, AnimatedProgressController$animateModel$slambda$lambda(this.this$0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.$onAnimationFinished_1();
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(AnimatedProgressController$animateModel$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new AnimatedProgressController$animateModel$slambda(this.this$0__1, this.$from_1, this.$target_1, this.$animationSpec_1, this.$cancelVelocity_1, this.$velocity_1, this.$onAnimationFinished_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(AnimatedProgressController$animateModel$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedProgressController$animateModel$slambda_0(this$0, $from, $target, $animationSpec, $cancelVelocity, $velocity, $onAnimationFinished, resultContinuation) {
    var i = new AnimatedProgressController$animateModel$slambda(this$0, $from, $target, $animationSpec, $cancelVelocity, $velocity, $onAnimationFinished, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedProgressController$stopModel$slambda(this$0, $currentState, resultContinuation) {
    this.this$0__1 = this$0;
    this.$currentState_1 = $currentState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedProgressController$stopModel$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedProgressController$stopModel$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedProgressController$stopModel$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.animatable_1.snapTo_fkfduh_k$(this.$currentState_1.get_progress_mo5qeu_k$(), this);
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
  protoOf(AnimatedProgressController$stopModel$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new AnimatedProgressController$stopModel$slambda(this.this$0__1, this.$currentState_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(AnimatedProgressController$stopModel$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedProgressController$stopModel$slambda_0(this$0, $currentState, resultContinuation) {
    var i = new AnimatedProgressController$stopModel$slambda(this$0, $currentState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedProgressController(model, coroutineScope, defaultAnimationSpec, animateSettle) {
    Companion_getInstance_6();
    defaultAnimationSpec = defaultAnimationSpec === VOID ? spring() : defaultAnimationSpec;
    animateSettle = animateSettle === VOID ? false : animateSettle;
    this.model_1 = model;
    this.coroutineScope_1 = coroutineScope;
    this.defaultAnimationSpec_1 = defaultAnimationSpec;
    this.animateSettle_1 = animateSettle;
    this.animatable_1 = Animatable(0.0);
    this.$stable_1 = 0;
  }
  protoOf(AnimatedProgressController).get_defaultAnimationSpec_dmgjrt_k$ = function () {
    return this.defaultAnimationSpec_1;
  };
  protoOf(AnimatedProgressController).operation_oywo50_k$ = function (operation) {
    this.operation_uf6i59_k$(operation, this.defaultAnimationSpec_1);
  };
  protoOf(AnimatedProgressController).operation_uf6i59_k$ = function (operation, animationSpec) {
    this.model_1.operation$default_1t9tz9_k$(operation);
    var currentState = this.model_1.get_output_hs4j62_k$().get_value_j01efc_k$();
    if (currentState instanceof Keyframes) {
      var tmp = AnimatedProgressController$operation$lambda(currentState);
      var tmp_0 = AnimatedProgressController$operation$lambda_0(currentState);
      animateModel(this, tmp, tmp_0, animationSpec, false, AnimatedProgressController$operation$lambda_1(this));
    }
  };
  protoOf(AnimatedProgressController).settle_6nj1ww_k$ = function (completionThreshold, completeGestureSpec, revertGestureSpec) {
    var currentState = this.model_1.get_output_hs4j62_k$().get_value_j01efc_k$();
    if (currentState instanceof Keyframes) {
      var currentProgress = currentState.get_progress_mo5qeu_k$();
      var direction = currentProgress % 1 < completionThreshold ? SettleDirection_REVERT_getInstance() : SettleDirection_COMPLETE_getInstance();
      var tmp;
      if (direction.equals(SettleDirection_REVERT_getInstance())) {
        var tmp$ret$0;
        // Inline function 'kotlin.math.floor' call
        tmp$ret$0 = Math.floor(currentProgress);
        tmp = numberToInt(tmp$ret$0);
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.math.ceil' call
        tmp$ret$1 = Math.ceil(currentProgress);
        tmp = numberToInt(tmp$ret$1);
      }
      var targetValue = tmp;
      var animationSpec = direction.equals(SettleDirection_REVERT_getInstance()) ? revertGestureSpec : completeGestureSpec;
      var tmp_0 = AppyxLogger_getInstance();
      Companion_getInstance_6();
      tmp_0.d_3t63e7_k$('AnimatedProgressController', 'Settle ' + currentState.get_progress_mo5qeu_k$() + ' to: ' + targetValue);
      var tmp_1 = AnimatedProgressController$settle$lambda(currentState);
      var tmp_2 = AnimatedProgressController$settle$lambda_0(targetValue);
      animateModel(this, tmp_1, tmp_2, animationSpec, true, AnimatedProgressController$settle$lambda_1(this, direction));
    }
  };
  protoOf(AnimatedProgressController).settle$default_ro6iyp_k$ = function (completionThreshold, completeGestureSpec, revertGestureSpec, $super) {
    completionThreshold = completionThreshold === VOID ? 0.5 : completionThreshold;
    completeGestureSpec = completeGestureSpec === VOID ? spring() : completeGestureSpec;
    revertGestureSpec = revertGestureSpec === VOID ? spring() : revertGestureSpec;
    var tmp;
    if ($super === VOID) {
      this.settle_6nj1ww_k$(completionThreshold, completeGestureSpec, revertGestureSpec);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.settle_6nj1ww_k$.call(this, completionThreshold, completeGestureSpec, revertGestureSpec);
    }
    return tmp;
  };
  protoOf(AnimatedProgressController).stopModel_noavp2_k$ = function () {
    var currentState = this.model_1.get_output_hs4j62_k$().get_value_j01efc_k$();
    if (currentState instanceof Keyframes) {
      var tmp = Dispatchers_getInstance().get_Main_wo5vz6_k$();
      launch(this.coroutineScope_1, tmp, VOID, AnimatedProgressController$stopModel$slambda_0(this, currentState, null));
    }
  };
  function _get_TAG__e5w0nr_0($this) {
    return $this.TAG_1;
  }
  function _get_transitionModel__ccegn1($this) {
    return $this.transitionModel_1;
  }
  function _set_result__gjrnty($this, _set____db54di) {
    $this.result_1 = _set____db54di;
  }
  function _get_result__f31376($this) {
    var tmp = $this.result_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('result');
    }
  }
  function _set_progress__lafk22($this, _set____db54di) {
    $this.progress_1 = _set____db54di;
  }
  function _get_progress__8hj8la($this) {
    return $this.progress_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.TAG_1 = 'DebugProgressInputSource';
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function get_$stableprop_6() {
    return 8;
  }
  function DebugProgressInputSource(transitionModel) {
    Companion_getInstance_7();
    this.transitionModel_1 = transitionModel;
    this.progress_1 = 1.0;
    this.$stable_1 = 8;
  }
  protoOf(DebugProgressInputSource).operation_oywo50_k$ = function (operation) {
    this.transitionModel_1.operation_j8yb0i_k$(operation, Mode_KEYFRAME_getInstance());
  };
  protoOf(DebugProgressInputSource).setNormalisedProgress_92h62m_k$ = function (progress) {
  };
  protoOf(DebugProgressInputSource).settle_7cx3ie_k$ = function () {
  };
  protoOf(DebugProgressInputSource).stopModel_noavp2_k$ = function () {
  };
  function _get_TAG__e5w0nr_1($this) {
    return $this.TAG_1;
  }
  function _get_model__e5yfy0_1($this) {
    return $this.model_1;
  }
  function _get_gestureFactory__an17e2_0($this) {
    return $this.gestureFactory_1;
  }
  function _set__gestureFactory__ww9rdx_0($this, value) {
    $this._gestureFactory_1 = value;
    if (value == null) {
      $this.gesture_1 = null;
    }
  }
  function _get__gestureFactory__s1432n_0($this) {
    return $this._gestureFactory_1;
  }
  function _set_gesture__ma9v18($this, _set____db54di) {
    $this.gesture_1 = _set____db54di;
  }
  function _get_gesture__3byfbs($this) {
    return $this.gesture_1;
  }
  function consumeDrag($this, dragAmount) {
    var currentState = $this.model_1.get_output_hs4j62_k$().get_value_j01efc_k$();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Offset__isValid_impl_z7krde(dragAmount)) {
      // Inline function 'com.bumble.appyx.interactions.core.model.progress.DragProgressController.consumeDrag.<anonymous>' call
      var message = 'dragAmount is NaN';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (Offset__getDistanceSquared_impl_97mhi6(dragAmount) === 0.0) {
      return Unit_getInstance();
    }
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if ($this._gestureFactory_1 == null) {
        // Inline function 'com.bumble.appyx.interactions.core.model.progress.DragProgressController.consumeDrag.<anonymous>' call
        var message_0 = 'This should have been set already in this class';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        break $l$block;
      }
    }
    if ($this.gesture_1 == null) {
      $this.gesture_1 = ensureNotNull($this._gestureFactory_1)(new Offset(dragAmount));
    }
    // Inline function 'kotlin.requireNotNull' call
    var tmp2_requireNotNull = $this.gesture_1;
    // Inline function 'kotlin.contracts.contract' call
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp2_requireNotNull == null) {
        // Inline function 'kotlin.requireNotNull.<anonymous>' call
        var message_1 = 'Required value was null.';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      } else {
        break $l$block_0;
      }
    }
    var operation = ensureNotNull($this.gesture_1).get_operation_z0nqyq_k$();
    operation.set_mode_370sob_k$(Mode_KEYFRAME_getInstance());
    var deltaProgress = ensureNotNull($this.gesture_1).get_dragToProgress_2wwwrf_k$()(new Offset(dragAmount));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(deltaProgress)) {
      // Inline function 'com.bumble.appyx.interactions.core.model.progress.DragProgressController.consumeDrag.<anonymous>' call
      var message_2 = 'deltaProgress is NaN! \u2013 dragAmount: ' + new Offset(dragAmount) + ', gesture: ' + $this.gesture_1 + ', operation: ' + operation;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    var tmp;
    if (currentState instanceof Keyframes) {
      tmp = currentState.get_progress_mo5qeu_k$();
    } else {
      tmp = 0.0;
    }
    var currentProgress = tmp;
    var totalTarget = currentProgress + deltaProgress;
    if (ensureNotNull($this.gesture_1).get_startProgress_fo2we2_k$() == null) {
      if ($this.model_1.canApply_jz0xjw_k$(operation)) {
        $this.model_1.operation$default_1t9tz9_k$(operation);
        ensureNotNull($this.gesture_1).set_startProgress_jj592m_k$(currentProgress);
        var tmp_0 = AppyxLogger_getInstance();
        Companion_getInstance_8();
        tmp_0.d_3t63e7_k$('DragProgressController', 'Gesture operation applied: ' + operation);
      } else {
        var tmp_1 = AppyxLogger_getInstance();
        Companion_getInstance_8();
        tmp_1.d_3t63e7_k$('DragProgressController', "Gesture operation wasn't applied, releasing it to re-evaluate");
        $this.gesture_1 = null;
        return Unit_getInstance();
      }
    }
    var startProgress = ensureNotNull(ensureNotNull($this.gesture_1).get_startProgress_fo2we2_k$());
    var isGestureContinuous = $this.gestureFactory_1().get_isContinuous_ob44bi_k$();
    if (totalTarget > startProgress) {
      if (totalTarget < startProgress + 1) {
        $this.model_1.setProgress_5taz02_k$(totalTarget);
        var tmp_2;
        if (currentState instanceof Keyframes) {
          tmp_2 = currentState.get_progress_mo5qeu_k$();
        } else {
          tmp_2 = 0.0;
        }
        var currentProgress_0 = tmp_2;
        var tmp_3 = AppyxLogger_getInstance();
        Companion_getInstance_8();
        tmp_3.d_3t63e7_k$('DragProgressController', 'delta applied forward, new progress: ' + currentProgress_0);
      } else if (isGestureContinuous) {
        var remainder = consumePartial($this, SettleDirection_COMPLETE_getInstance(), dragAmount, totalTarget, deltaProgress, startProgress + 1);
        if (Offset__getDistanceSquared_impl_97mhi6(remainder) > 0) {
          consumeDrag($this, remainder);
        }
      }
    } else if (isGestureContinuous) {
      var remainder_0 = consumePartial($this, SettleDirection_REVERT_getInstance(), dragAmount, totalTarget, deltaProgress, startProgress);
      if (!equals(dragAmount, remainder_0)) {
        consumeDrag($this, remainder_0);
      }
    }
  }
  function consumePartial($this, direction, dragAmount, totalTarget, deltaProgress, boundary) {
    $this.model_1.setProgress_5taz02_k$(boundary);
    $this.model_1.onSettled_u9dneq_k$(direction, false);
    var remainder = ensureNotNull($this.gesture_1).get_partial_bujdrc_k$()(new Offset(dragAmount), totalTarget - boundary).packedValue_1;
    $this.gesture_1 = null;
    var tmp = AppyxLogger_getInstance();
    Companion_getInstance_8();
    tmp.d_3t63e7_k$('DragProgressController', '1 ------');
    var tmp_0 = AppyxLogger_getInstance();
    Companion_getInstance_8();
    tmp_0.d_3t63e7_k$('DragProgressController', 'initial offset was: ' + new Offset(dragAmount));
    var tmp_1 = AppyxLogger_getInstance();
    Companion_getInstance_8();
    tmp_1.d_3t63e7_k$('DragProgressController', 'initial deltaProgress was: ' + deltaProgress);
    var tmp_2 = AppyxLogger_getInstance();
    Companion_getInstance_8();
    tmp_2.d_3t63e7_k$('DragProgressController', 'initial target was: ' + totalTarget + ', beyond current segment: ' + boundary);
    var tmp_3 = AppyxLogger_getInstance();
    Companion_getInstance_8();
    tmp_3.d_3t63e7_k$('DragProgressController', 'remainder progress: ' + (totalTarget - boundary));
    var tmp_4 = AppyxLogger_getInstance();
    Companion_getInstance_8();
    tmp_4.d_3t63e7_k$('DragProgressController', 'remainder offset: ' + new Offset(remainder));
    var tmp_5 = AppyxLogger_getInstance();
    Companion_getInstance_8();
    tmp_5.d_3t63e7_k$('DragProgressController', 'going back to start, reevaluate');
    var tmp_6 = AppyxLogger_getInstance();
    Companion_getInstance_8();
    tmp_6.d_3t63e7_k$('DragProgressController', '2 ------');
    return remainder;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.TAG_1 = 'DragProgressController';
  }
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function DragProgressController$onDrag$lambda(this$0, $density) {
    return function (dragAmount) {
      return this$0.gestureFactory_1().createGesture_2asjs5_k$(this$0.model_1.get_output_hs4j62_k$().get_value_j01efc_k$().get_currentTargetState_l0vn00_k$(), dragAmount.packedValue_1, $density);
    };
  }
  function DragProgressController(model, gestureFactory, defaultAnimationSpec) {
    Companion_getInstance_8();
    this.model_1 = model;
    this.gestureFactory_1 = gestureFactory;
    this.defaultAnimationSpec_1 = defaultAnimationSpec;
    this._gestureFactory_1 = null;
    this.gesture_1 = null;
  }
  protoOf(DragProgressController).get_defaultAnimationSpec_dmgjrt_k$ = function () {
    return this.defaultAnimationSpec_1;
  };
  protoOf(DragProgressController).onStartDrag_50u6al_k$ = function (position) {
    this.gestureFactory_1().onStartDrag_50u6al_k$(position);
  };
  protoOf(DragProgressController).onDrag_v1qkpx_k$ = function (dragAmount, density) {
    if (this._gestureFactory_1 == null) {
      _set__gestureFactory__ww9rdx_0(this, DragProgressController$onDrag$lambda(this, density));
    }
    consumeDrag(this, dragAmount);
  };
  protoOf(DragProgressController).onDragEnd_curv87_k$ = function () {
    _set__gestureFactory__ww9rdx_0(this, null);
  };
  protoOf(DragProgressController).isDragging_r126p3_k$ = function () {
    return !(this._gestureFactory_1 == null);
  };
  function Draggable() {
  }
  function HasDefaultAnimationSpec() {
  }
  function _get_model__e5yfy0_2($this) {
    return $this.model_1;
  }
  function get_$stableprop_7() {
    return 8;
  }
  function InstantProgressController(model) {
    this.model_1 = model;
    this.$stable_1 = 8;
  }
  protoOf(InstantProgressController).operation_oywo50_k$ = function (operation) {
    this.model_1.operation$default_1t9tz9_k$(operation);
    var currentState = this.model_1.get_output_hs4j62_k$().get_value_j01efc_k$();
    if (currentState instanceof Keyframes) {
      this.model_1.setProgress_5taz02_k$(currentState.get_maxProgress_uy5umg_k$());
      this.model_1.onSettled_u9dneq_k$(SettleDirection_COMPLETE_getInstance(), false);
    }
  };
  function ProgressController() {
  }
  function get_$stableprop_8() {
    return 0;
  }
  function BaseOperation() {
    this.$stable_1 = 0;
  }
  protoOf(BaseOperation).invoke_kt623z_k$ = function (state) {
    var fromState = this.createFromState_kmc50c_k$(state);
    var targetState = this.createTargetState_svdyv1_k$(fromState);
    return new StateTransition(fromState, targetState);
  };
  function _get_TAG__e5w0nr_2($this) {
    return $this.TAG_1;
  }
  function _get_KEY_TRANSITION_MODEL__bgu3jo($this) {
    return $this.KEY_TRANSITION_MODEL_1;
  }
  function BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0($collector, this$0, resultContinuation) {
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).invoke_q3glkd_k$ = function (value, $completion) {
    var tmp = this.create_ed852u_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_q3glkd_k$(p1 instanceof Output ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.this$0__1.availableElements_xleoop_k$(this.value_1.get_currentTargetState_l0vn00_k$()), this);
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
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).create_ed852u_k$ = function (value, completion) {
    var i = new BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0(this.$collector_1, this.this$0__1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).create_xubfvz_k$ = function (value, completion) {
    return this.create_ed852u_k$(value instanceof Output ? value : THROW_CCE(), completion);
  };
  function BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0_0($collector, this$0, resultContinuation) {
    var i = new BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0($collector, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_q3glkd_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0_0(this.collector_1, this._this__u8e3s4__1.this$0__1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_5(tmp_0), this);
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
  function _get_key__e6bh8y($this) {
    return $this.key_1;
  }
  function _get_savedStateMap__ok2e1t($this) {
    return $this.savedStateMap_1;
  }
  function _get_savedState__u2bo1r($this) {
    var tmp0_safe_receiver = $this.savedStateMap_1;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_1mhr4y_k$($this.key_1);
    return (!(tmp == null) ? isInterface(tmp, Parcelable) : false) ? tmp : null;
  }
  function _get_state__b8zcm8($this) {
    // Inline function 'kotlin.getValue' call
    state$factory();
    return $this.state$delegate_1.get_value_j01efc_k$();
  }
  function _set_enforcedMode__8uuauq($this, _set____db54di) {
    $this.enforcedMode_1 = _set____db54di;
  }
  function _get_enforcedMode__oel1eu($this) {
    return $this.enforcedMode_1;
  }
  function removeDestroyedElements($this) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.getAndUpdate' call
      var tmp0_getAndUpdate = _get_state__b8zcm8($this);
      while (true) {
        var prevValue = tmp0_getAndUpdate.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.removeDestroyedElements.<anonymous>' call
        var tmp;
        if (prevValue instanceof Update) {
          tmp = prevValue;
        } else {
          if (prevValue instanceof Keyframes) {
            var tmp1_currentTargetState = $this.removeDestroyedElements_puyw99_k$(prevValue.get_currentTargetState_l0vn00_k$());
            tmp = new Update(tmp1_currentTargetState, false);
          } else {
            noWhenBranchMatchedException();
          }
        }
        var nextValue = tmp;
        if (tmp0_getAndUpdate.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function createUpdate($this, operation) {
    var baseLine = _get_state__b8zcm8($this).get_value_j01efc_k$();
    var tmp;
    if (operation.isApplicable_8peua_k$(baseLine.get_currentTargetState_l0vn00_k$())) {
      var transition = operation.invoke_kt623z_k$(baseLine.get_currentTargetState_l0vn00_k$());
      var newState = baseLine.deriveUpdate_v2uddf_k$(transition);
      updateState($this, newState);
      tmp = true;
    } else {
      var tmp_0 = AppyxLogger_getInstance();
      Companion_getInstance_9();
      tmp_0.d_3t63e7_k$('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on state: ' + baseLine);
      tmp = false;
    }
    return tmp;
  }
  function impose($this, operation) {
    var currentState = _get_state__b8zcm8($this).get_value_j01efc_k$();
    var tmp;
    if (currentState instanceof Keyframes) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.impose.<anonymous>' call
      var past = currentState.get_currentIndex_shwroi_k$() > 0 ? currentState.get_queue_ixn208_k$().subList_d153ha_k$(0, currentState.get_currentIndex_shwroi_k$() - 1 | 0) : emptyList();
      var remaining = currentState.get_queue_ixn208_k$().subList_d153ha_k$(currentState.get_currentIndex_shwroi_k$(), get_lastIndex(currentState.get_queue_ixn208_k$()) + 1 | 0);
      var tmp_0;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(remaining, Collection)) {
          tmp_1 = remaining.isEmpty_y1axqb_k$();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = remaining.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.impose.<anonymous>.<anonymous>' call
          if (!operation.isApplicable_8peua_k$(element.get_targetState_kri3mx_k$())) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      if (tmp$ret$0) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(remaining, 10));
        var tmp0_iterator_0 = remaining.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$2;
          // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.impose.<anonymous>.<anonymous>' call
          var newFrom = operation.invoke_kt623z_k$(item.get_fromState_9nyiji_k$());
          var newTarget = operation.invoke_kt623z_k$(item.get_targetState_kri3mx_k$());
          tmp$ret$2 = item.copy_qw7jaq_k$(new StateTransition(newFrom.get_targetState_kri3mx_k$(), newTarget.get_targetState_kri3mx_k$()));
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
        }
        var newState = currentState.copy$default_21dbdt_k$(plus_0(past, tmp0_mapTo));
        updateState($this, newState);
        tmp_0 = true;
      } else {
        var tmp_2 = AppyxLogger_getInstance();
        Companion_getInstance_9();
        tmp_2.d_3t63e7_k$('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on one or more queued states: ' + remaining);
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (currentState instanceof Update) {
        var tmp_3;
        if (operation.isApplicable_8peua_k$(currentState.get_currentTargetState_l0vn00_k$())) {
          var newState_0 = currentState.deriveUpdate_v2uddf_k$(operation.invoke_kt623z_k$(currentState.get_currentTargetState_l0vn00_k$()));
          updateState($this, newState_0);
          tmp_3 = true;
        } else {
          var tmp_4 = AppyxLogger_getInstance();
          Companion_getInstance_9();
          tmp_4.d_3t63e7_k$('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on states: ' + currentState + '.currentTargetState');
          tmp_3 = false;
        }
        tmp = tmp_3;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function createSegment($this, operation) {
    var currentState = _get_state__b8zcm8($this).get_value_j01efc_k$();
    var baselineState = $this.removeDestroyedElements_puyw99_k$(currentState.get_lastTargetState_ts42jj_k$());
    var tmp;
    if (operation.isApplicable_8peua_k$(baselineState)) {
      var transition = operation.invoke_kt623z_k$(baselineState);
      var newState = currentState.deriveKeyframes_gyhrob_k$(transition);
      updateState($this, newState);
      tmp = true;
    } else {
      var tmp_0 = AppyxLogger_getInstance();
      Companion_getInstance_9();
      tmp_0.d_3t63e7_k$('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on state: ' + baselineState);
      tmp = false;
    }
    return tmp;
  }
  function updateState($this, output) {
    var tmp = AppyxLogger_getInstance();
    Companion_getInstance_9();
    tmp.d_3t63e7_k$('BaseTransitionModel', 'Publishing new state: ' + output);
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var tmp0_update = _get_state__b8zcm8($this);
      while (true) {
        var prevValue = tmp0_update.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.updateState.<anonymous>' call
        var nextValue = output;
        if (tmp0_update.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.TAG_1 = 'BaseTransitionModel';
    this.KEY_TRANSITION_MODEL_1 = 'TransitionModel';
  }
  var Companion_instance_3;
  function Companion_getInstance_9() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function get_$stableprop_9() {
    return 8;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_5).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function _no_name_provided__qut3iv_3($tmp0_map, this$0) {
    this.$tmp0_map_1 = $tmp0_map;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_3).collect_2pmwr6_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$5(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_3).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_2pmwr6_k$(collector, $completion);
  };
  function BaseTransitionModel$state$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = _get_savedState__u2bo1r(this$0);
      return MutableStateFlow(new Update(tmp0_elvis_lhs == null ? this$0.get_initialState_2eu9l6_k$() : tmp0_elvis_lhs, false));
    };
  }
  function BaseTransitionModel$output$delegate$lambda(this$0) {
    return function () {
      return _get_state__b8zcm8(this$0);
    };
  }
  function BaseTransitionModel$setProgress$lambda(it) {
    return Unit_getInstance();
  }
  function BaseTransitionModel(scope, key, savedStateMap) {
    Companion_getInstance_9();
    scope = scope === VOID ? CoroutineScope_0(EmptyCoroutineContext_getInstance().plus_rgw9wi_k$(Dispatchers_getInstance().get_Unconfined_sfvx0q_k$())) : scope;
    var tmp;
    if (key === VOID) {
      Companion_getInstance_9();
      tmp = 'TransitionModel';
    } else {
      tmp = key;
    }
    key = tmp;
    this.scope_1 = scope;
    this.key_1 = key;
    this.savedStateMap_1 = savedStateMap;
    var tmp_0 = this;
    tmp_0.state$delegate_1 = lazy(BaseTransitionModel$state$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.output$delegate_1 = lazy(BaseTransitionModel$output$delegate$lambda(this));
    this.enforcedMode_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(BaseTransitionModel).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(BaseTransitionModel).get_elements_vxwh8g_k$ = function () {
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp0_map = this.get_output_hs4j62_k$();
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp = new _no_name_provided__qut3iv_3(tmp0_map, this);
    var tmp_0 = Companion_getInstance().get_Eagerly_3vw7yc_k$();
    var tmp0_elvis_lhs = _get_savedState__u2bo1r(this);
    return stateIn(tmp, this.scope_1, tmp_0, this.availableElements_xleoop_k$(tmp0_elvis_lhs == null ? this.get_initialState_2eu9l6_k$() : tmp0_elvis_lhs));
  };
  protoOf(BaseTransitionModel).saveInstanceState_ymawco_k$ = function (state) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.key_1;
    var tmp1_set = this.get_output_hs4j62_k$().get_value_j01efc_k$().get_currentTargetState_l0vn00_k$();
    state.put_3mhbri_k$(tmp0_set, tmp1_set);
  };
  protoOf(BaseTransitionModel).get_output_hs4j62_k$ = function () {
    // Inline function 'kotlin.getValue' call
    output$factory();
    return this.output$delegate_1.get_value_j01efc_k$();
  };
  protoOf(BaseTransitionModel).relaxExecutionMode_iyr0h2_k$ = function () {
    AppyxLogger_getInstance().d_3t63e7_k$('BaseTransitionModel', 'Relaxing mode');
    this.enforcedMode_1 = null;
    removeDestroyedElements(this);
  };
  protoOf(BaseTransitionModel).cleanUpElement_csfwct_k$ = function (element) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.getAndUpdate' call
      var tmp0_getAndUpdate = _get_state__b8zcm8(this);
      while (true) {
        var prevValue = tmp0_getAndUpdate.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.cleanUpElement.<anonymous>' call
        var tmp;
        if (prevValue instanceof Update) {
          tmp = prevValue.copy$default_2vzs7w_k$(this.removeDestroyedElement_o1hi3m_k$(prevValue.get_currentTargetState_l0vn00_k$(), element));
        } else {
          if (prevValue instanceof Keyframes) {
            tmp = prevValue;
          } else {
            noWhenBranchMatchedException();
          }
        }
        var nextValue = tmp;
        if (tmp0_getAndUpdate.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  };
  protoOf(BaseTransitionModel).operation_j8yb0i_k$ = function (operation, overrideMode) {
    var tmp0_elvis_lhs = this.enforcedMode_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? overrideMode : tmp0_elvis_lhs;
    var tmp;
    switch ((tmp1_elvis_lhs == null ? operation.get_mode_woqlt8_k$() : tmp1_elvis_lhs).get_ordinal_ip24qg_k$()) {
      case 0:
        this.enforcedMode_1 = Mode_IMMEDIATE_getInstance();
        tmp = createUpdate(this, operation);
        break;
      case 2:
        tmp = impose(this, operation);
        break;
      case 1:
        tmp = createSegment(this, operation);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(BaseTransitionModel).setProgress_5taz02_k$ = function (progress) {
    var currentState = _get_state__b8zcm8(this).get_value_j01efc_k$();
    if (currentState instanceof Update) {
      var tmp = AppyxLogger_getInstance();
      Companion_getInstance_9();
      tmp.d_3t63e7_k$('BaseTransitionModel', 'Not in keyframe state, ignoring setProgress');
      return Unit_getInstance();
    } else {
      if (currentState instanceof Keyframes) {
        currentState.setProgress_rvqey8_k$(progress, BaseTransitionModel$setProgress$lambda);
      }
    }
  };
  protoOf(BaseTransitionModel).onSettled_u9dneq_k$ = function (direction, animate) {
    var currentState = _get_state__b8zcm8(this).get_value_j01efc_k$();
    if (currentState instanceof Update) {
      var tmp = AppyxLogger_getInstance();
      Companion_getInstance_9();
      tmp.d_3t63e7_k$('BaseTransitionModel', 'Not in keyframe state, nothing to do');
      return Unit_getInstance();
    } else {
      if (currentState instanceof Keyframes) {
        var tmp_0;
        switch (direction.get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_0 = this.removeDestroyedElements_puyw99_k$(currentState.get_currentSegment_vblyf1_k$().get_fromState_9nyiji_k$());
            break;
          case 1:
            tmp_0 = this.removeDestroyedElements_puyw99_k$(currentState.get_currentSegment_vblyf1_k$().get_targetState_kri3mx_k$());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var newState = new Update(tmp_0, animate);
        updateState(this, newState);
      }
    }
  };
  function state$factory() {
    return getPropertyCallableRef('state', 1, KProperty1, function (receiver) {
      return _get_state__b8zcm8(receiver);
    }, null);
  }
  function output$factory() {
    return getPropertyCallableRef('output', 1, KProperty1, function (receiver) {
      return receiver.get_output_hs4j62_k$();
    }, null);
  }
  function Keyframes$currentIndexFlow$o$collect$slambda($collector, this$0, resultContinuation) {
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).invoke_pwzufx_k$ = function (value, $completion) {
    var tmp = this.create_icagai_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_pwzufx_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(numberToInt(this.value_1 === this.this$0__1.get_maxProgress_uy5umg_k$() ? this.value_1 - 1 : this.value_1), this);
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
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).create_icagai_k$ = function (value, completion) {
    var i = new Keyframes$currentIndexFlow$o$collect$slambda(this.$collector_1, this.this$0__1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_icagai_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Keyframes$currentIndexFlow$o$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new Keyframes$currentIndexFlow$o$collect$slambda($collector, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_pwzufx_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = Keyframes$currentIndexFlow$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.this$0__1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_6(tmp_0), this);
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
  function Keyframes$currentSegmentFlow$o$collect$slambda($collector, this$0, resultContinuation) {
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).invoke_kv9s22_k$ = function (value, $completion) {
    var tmp = this.create_4s7vdz_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_kv9s22_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.this$0__1.queue_1.get_fkrdnv_k$(this.value_1), this);
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
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).create_4s7vdz_k$ = function (value, completion) {
    var i = new Keyframes$currentSegmentFlow$o$collect$slambda(this.$collector_1, this.this$0__1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_4s7vdz_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Keyframes$currentSegmentFlow$o$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new Keyframes$currentSegmentFlow$o$collect$slambda($collector, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_kv9s22_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$7(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = Keyframes$currentSegmentFlow$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.this$0__1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_7(tmp_0), this);
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
  function Keyframes$currentSegmentTargetStateFlow$o$collect$slambda($collector, this$0, resultContinuation) {
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).invoke_kv9s22_k$ = function (value, $completion) {
    var tmp = this.create_4s7vdz_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_kv9s22_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.this$0__1.queue_1.get_fkrdnv_k$(this.value_1).get_targetState_kri3mx_k$(), this);
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
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).create_4s7vdz_k$ = function (value, completion) {
    var i = new Keyframes$currentSegmentTargetStateFlow$o$collect$slambda(this.$collector_1, this.this$0__1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_4s7vdz_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Keyframes$currentSegmentTargetStateFlow$o$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new Keyframes$currentSegmentTargetStateFlow$o$collect$slambda($collector, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_kv9s22_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$8(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = Keyframes$currentSegmentTargetStateFlow$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.this$0__1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_8(tmp_0), this);
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
  function Keyframes$getSegmentProgress$o$collect$slambda($collector, $segmentIndex, resultContinuation) {
    this.$collector_1 = $collector;
    this.$segmentIndex_1 = $segmentIndex;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).invoke_pwzufx_k$ = function (value, $completion) {
    var tmp = this.create_icagai_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_pwzufx_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(toSegmentProgress(this.value_1, this.$segmentIndex_1), this);
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
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).create_icagai_k$ = function (value, completion) {
    var i = new Keyframes$getSegmentProgress$o$collect$slambda(this.$collector_1, this.$segmentIndex_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_icagai_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Keyframes$getSegmentProgress$o$collect$slambda_0($collector, $segmentIndex, resultContinuation) {
    var i = new Keyframes$getSegmentProgress$o$collect$slambda($collector, $segmentIndex, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_pwzufx_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$9(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = Keyframes$getSegmentProgress$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.$segmentIndex_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_9(tmp_0), this);
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
  function get_$stableprop_10() {
    return 0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_6).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_7(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_7).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_8(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_8).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_9(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_9).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function _no_name_provided__qut3iv_4($tmp0_map, this$0) {
    this.$tmp0_map_1 = $tmp0_map;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_4).collect_uf7hu5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$6(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_4).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_uf7hu5_k$(collector, $completion);
  };
  function _no_name_provided__qut3iv_5($tmp0_map, this$0) {
    this.$tmp0_map_1 = $tmp0_map;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_5).collect_p3cpl4_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$7(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_5).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_p3cpl4_k$(collector, $completion);
  };
  function _no_name_provided__qut3iv_6($tmp0_map, this$0) {
    this.$tmp0_map_1 = $tmp0_map;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_6).collect_96maz1_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$8(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_6).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_96maz1_k$(collector, $completion);
  };
  function _no_name_provided__qut3iv_7($tmp0_map, $segmentIndex) {
    this.$tmp0_map_1 = $tmp0_map;
    this.$segmentIndex_1 = $segmentIndex;
  }
  protoOf(_no_name_provided__qut3iv_7).collect_outvgv_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$9(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_7).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_outvgv_k$(collector, $completion);
  };
  function Keyframes(queue, initialProgress) {
    initialProgress = initialProgress === VOID ? 0.0 : initialProgress;
    Output.call(this);
    this.queue_1 = queue;
    this.initialProgress_1 = initialProgress;
    this.progressFlow_1 = MutableStateFlow(this.initialProgress_1);
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp0_map = this.progressFlow_1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$2 = new _no_name_provided__qut3iv_4(tmp0_map, this);
    tmp.currentIndexFlow_1 = distinctUntilChanged(tmp$ret$2);
    var tmp_0 = this;
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp0_map_0 = this.currentIndexFlow_1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp_0.currentSegmentFlow_1 = new _no_name_provided__qut3iv_5(tmp0_map_0, this);
    var tmp_1 = this;
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp0_map_1 = this.currentIndexFlow_1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp_1.currentSegmentTargetStateFlow_1 = new _no_name_provided__qut3iv_6(tmp0_map_1, this);
    this.$stable_2 = 0;
  }
  protoOf(Keyframes).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(Keyframes).get_initialProgress_i70va0_k$ = function () {
    return this.initialProgress_1;
  };
  protoOf(Keyframes).get_currentIndex_shwroi_k$ = function () {
    return numberToInt(this.get_reachedMaxProgress_vlj4i0_k$() ? this.get_progress_mo5qeu_k$() - 1 : this.get_progress_mo5qeu_k$());
  };
  protoOf(Keyframes).get_maxProgress_uy5umg_k$ = function () {
    return get_lastIndex(this.queue_1) + 1 | 0;
  };
  protoOf(Keyframes).get_reachedMaxProgress_vlj4i0_k$ = function () {
    return this.get_progress_mo5qeu_k$() === this.get_maxProgress_uy5umg_k$();
  };
  protoOf(Keyframes).get_currentSegment_vblyf1_k$ = function () {
    return this.queue_1.get_fkrdnv_k$(this.get_currentIndex_shwroi_k$());
  };
  protoOf(Keyframes).get_progressFlow_gek0uc_k$ = function () {
    return this.progressFlow_1;
  };
  protoOf(Keyframes).get_currentIndexFlow_tqs8s0_k$ = function () {
    return this.currentIndexFlow_1;
  };
  protoOf(Keyframes).get_currentSegmentFlow_24rkj3_k$ = function () {
    return this.currentSegmentFlow_1;
  };
  protoOf(Keyframes).get_currentSegmentTargetStateFlow_6harwr_k$ = function () {
    return this.currentSegmentTargetStateFlow_1;
  };
  protoOf(Keyframes).getSegmentProgress_dzti15_k$ = function (segmentIndex) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp0_map = this.progressFlow_1;
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$2 = new _no_name_provided__qut3iv_7(tmp0_map, segmentIndex);
    return filterNotNull(tmp$ret$2);
  };
  protoOf(Keyframes).get_progress_mo5qeu_k$ = function () {
    return this.progressFlow_1.get_value_j01efc_k$();
  };
  protoOf(Keyframes).get_currentTargetState_l0vn00_k$ = function () {
    return this.get_currentSegment_vblyf1_k$().get_targetState_kri3mx_k$();
  };
  protoOf(Keyframes).get_lastTargetState_ts42jj_k$ = function () {
    return last(this.queue_1).get_targetState_kri3mx_k$();
  };
  protoOf(Keyframes).deriveKeyframes_gyhrob_k$ = function (stateTransition) {
    return this.copy_w9bejt_k$(plus_0(this.queue_1, listOf(new Segment(stateTransition))), this.get_progress_mo5qeu_k$());
  };
  protoOf(Keyframes).deriveUpdate_v2uddf_k$ = function (stateTransition) {
    return new Update(stateTransition.get_targetState_kri3mx_k$());
  };
  protoOf(Keyframes).dropAfter_kuicac_k$ = function (index) {
    var tmp;
    if (index < get_lastIndex(this.queue_1)) {
      tmp = this.copy$default_21dbdt_k$(dropLast(this.queue_1, get_lastIndex(this.queue_1) - index | 0));
    } else {
      tmp = this;
    }
    return tmp;
  };
  protoOf(Keyframes).setProgress_rvqey8_k$ = function (progress, onTransitionFinished) {
    var currentProgress = numberToInt(this.get_progress_mo5qeu_k$());
    var coercedProgress = coerceIn(progress, 0.0, this.get_maxProgress_uy5umg_k$());
    AppyxLogger_getInstance().d_3t63e7_k$('Keyframes', '' + coercedProgress);
    this.progressFlow_1.set_value_rnwamw_k$(coercedProgress);
    if (numberToInt(coercedProgress) > currentProgress) {
      AppyxLogger_getInstance().d_3t63e7_k$('Keyframes', 'onTransitionFinished()');
      onTransitionFinished(this.get_currentSegment_vblyf1_k$().get_fromState_9nyiji_k$());
    }
  };
  protoOf(Keyframes).component1_7eebsc_k$ = function () {
    return this.queue_1;
  };
  protoOf(Keyframes).component2_7eebsb_k$ = function () {
    return this.initialProgress_1;
  };
  protoOf(Keyframes).copy_w9bejt_k$ = function (queue, initialProgress) {
    return new Keyframes(queue, initialProgress);
  };
  protoOf(Keyframes).copy$default_21dbdt_k$ = function (queue, initialProgress, $super) {
    queue = queue === VOID ? this.queue_1 : queue;
    initialProgress = initialProgress === VOID ? this.initialProgress_1 : initialProgress;
    return $super === VOID ? this.copy_w9bejt_k$(queue, initialProgress) : $super.copy_w9bejt_k$.call(this, queue, initialProgress);
  };
  protoOf(Keyframes).toString = function () {
    return 'Keyframes(queue=' + this.queue_1 + ', initialProgress=' + this.initialProgress_1 + ')';
  };
  protoOf(Keyframes).hashCode = function () {
    var result = hashCode(this.queue_1);
    result = imul(result, 31) + getNumberHashCode(this.initialProgress_1) | 0;
    return result;
  };
  protoOf(Keyframes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Keyframes))
      return false;
    var tmp0_other_with_cast = other instanceof Keyframes ? other : THROW_CCE();
    if (!equals(this.queue_1, tmp0_other_with_cast.queue_1))
      return false;
    if (!equals(this.initialProgress_1, tmp0_other_with_cast.initialProgress_1))
      return false;
    return true;
  };
  function toSegmentProgress(_this__u8e3s4, segmentIndex) {
    var segmentProgress = _this__u8e3s4 - segmentIndex;
    var tmp;
    if (0.0 <= segmentProgress ? segmentProgress <= 1.0 : false) {
      tmp = segmentProgress;
    } else {
      tmp = null;
    }
    return tmp;
  }
  var Mode_IMMEDIATE_instance;
  var Mode_KEYFRAME_instance;
  var Mode_IMPOSED_instance;
  function values() {
    return [Mode_IMMEDIATE_getInstance(), Mode_KEYFRAME_getInstance(), Mode_IMPOSED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'IMMEDIATE':
        return Mode_IMMEDIATE_getInstance();
      case 'KEYFRAME':
        return Mode_KEYFRAME_getInstance();
      case 'IMPOSED':
        return Mode_IMPOSED_getInstance();
      default:
        Mode_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Mode_entriesInitialized;
  function Mode_initEntries() {
    if (Mode_entriesInitialized)
      return Unit_getInstance();
    Mode_entriesInitialized = true;
    Mode_IMMEDIATE_instance = new Mode('IMMEDIATE', 0);
    Mode_KEYFRAME_instance = new Mode('KEYFRAME', 1);
    Mode_IMPOSED_instance = new Mode('IMPOSED', 2);
  }
  var $ENTRIES;
  function get_$stableprop_11() {
    return 8;
  }
  function Mode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Noop() {
    this.mode_1 = Mode_IMMEDIATE_getInstance();
    this.$stable_1 = 8;
  }
  protoOf(Noop).set_mode_370sob_k$ = function (_set____db54di) {
    this.mode_1 = _set____db54di;
  };
  protoOf(Noop).get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  protoOf(Noop).isApplicable_8peua_k$ = function (state) {
    return false;
  };
  protoOf(Noop).invoke_kt623z_k$ = function (state) {
    return new StateTransition(state, state);
  };
  protoOf(Noop).equals = function (other) {
    return !(other == null) ? getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false;
  };
  protoOf(Noop).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  function Mode_IMMEDIATE_getInstance() {
    Mode_initEntries();
    return Mode_IMMEDIATE_instance;
  }
  function Mode_KEYFRAME_getInstance() {
    Mode_initEntries();
    return Mode_KEYFRAME_instance;
  }
  function Mode_IMPOSED_getInstance() {
    Mode_initEntries();
    return Mode_IMPOSED_instance;
  }
  function Operation() {
  }
  function get_$stableprop_12() {
    return 0;
  }
  function Segment(stateTransition) {
    this.stateTransition_1 = stateTransition;
    this.$stable_1 = 0;
  }
  protoOf(Segment).get_stateTransition_4ivdwj_k$ = function () {
    return this.stateTransition_1;
  };
  protoOf(Segment).get_fromState_9nyiji_k$ = function () {
    return this.stateTransition_1.get_fromState_9nyiji_k$();
  };
  protoOf(Segment).get_targetState_kri3mx_k$ = function () {
    return this.stateTransition_1.get_targetState_kri3mx_k$();
  };
  protoOf(Segment).component1_7eebsc_k$ = function () {
    return this.stateTransition_1;
  };
  protoOf(Segment).copy_qw7jaq_k$ = function (stateTransition) {
    return new Segment(stateTransition);
  };
  protoOf(Segment).copy$default_6ggbzt_k$ = function (stateTransition, $super) {
    stateTransition = stateTransition === VOID ? this.stateTransition_1 : stateTransition;
    return $super === VOID ? this.copy_qw7jaq_k$(stateTransition) : $super.copy_qw7jaq_k$.call(this, stateTransition);
  };
  protoOf(Segment).toString = function () {
    return 'Segment(stateTransition=' + this.stateTransition_1 + ')';
  };
  protoOf(Segment).hashCode = function () {
    return this.stateTransition_1.hashCode();
  };
  protoOf(Segment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Segment))
      return false;
    var tmp0_other_with_cast = other instanceof Segment ? other : THROW_CCE();
    if (!this.stateTransition_1.equals(tmp0_other_with_cast.stateTransition_1))
      return false;
    return true;
  };
  function get_$stableprop_13() {
    return 0;
  }
  function StateTransition(fromState, targetState) {
    this.fromState_1 = fromState;
    this.targetState_1 = targetState;
    this.$stable_1 = 0;
  }
  protoOf(StateTransition).get_fromState_9nyiji_k$ = function () {
    return this.fromState_1;
  };
  protoOf(StateTransition).get_targetState_kri3mx_k$ = function () {
    return this.targetState_1;
  };
  protoOf(StateTransition).component1_7eebsc_k$ = function () {
    return this.fromState_1;
  };
  protoOf(StateTransition).component2_7eebsb_k$ = function () {
    return this.targetState_1;
  };
  protoOf(StateTransition).copy_bri0r9_k$ = function (fromState, targetState) {
    return new StateTransition(fromState, targetState);
  };
  protoOf(StateTransition).copy$default_8tjn10_k$ = function (fromState, targetState, $super) {
    fromState = fromState === VOID ? this.fromState_1 : fromState;
    targetState = targetState === VOID ? this.targetState_1 : targetState;
    return $super === VOID ? this.copy_bri0r9_k$(fromState, targetState) : $super.copy_bri0r9_k$.call(this, fromState, targetState);
  };
  protoOf(StateTransition).toString = function () {
    return 'StateTransition(fromState=' + this.fromState_1 + ', targetState=' + this.targetState_1 + ')';
  };
  protoOf(StateTransition).hashCode = function () {
    var result = this.fromState_1 == null ? 0 : hashCode(this.fromState_1);
    result = imul(result, 31) + (this.targetState_1 == null ? 0 : hashCode(this.targetState_1)) | 0;
    return result;
  };
  protoOf(StateTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StateTransition))
      return false;
    var tmp0_other_with_cast = other instanceof StateTransition ? other : THROW_CCE();
    if (!equals(this.fromState_1, tmp0_other_with_cast.fromState_1))
      return false;
    if (!equals(this.targetState_1, tmp0_other_with_cast.targetState_1))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.$cachedSerializer$delegate_1.get_value_j01efc_k$();
  }
  function TransitionModel$Output$Companion$_anonymous__6gtcv2() {
    var tmp = getKClass(Output);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [];
    var tmp$ret$8;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('com.bumble.appyx.interactions.core.model.transition.TransitionModel.Output', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy_0(tmp_0, TransitionModel$Output$Companion$_anonymous__6gtcv2);
  }
  protoOf(Companion_4).serializer_idvbxl_k$ = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_4).serializer_5xgt5t_k$ = function (typeParamsSerializers) {
    return this.serializer_idvbxl_k$(typeParamsSerializers[0]);
  };
  var Companion_instance_4;
  function Companion_getInstance_10() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Output_init_$Init$(seen1, serializationConstructorMarker, $this) {
    $this.$stable_1 = 0;
    return $this;
  }
  function Output_init_$Create$(seen1, serializationConstructorMarker) {
    return Output_init_$Init$(seen1, serializationConstructorMarker, objectCreate(protoOf(Output)));
  }
  function get_$stableprop_14() {
    return 0;
  }
  var SettleDirection_REVERT_instance;
  var SettleDirection_COMPLETE_instance;
  function values_0() {
    return [SettleDirection_REVERT_getInstance(), SettleDirection_COMPLETE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'REVERT':
        return SettleDirection_REVERT_getInstance();
      case 'COMPLETE':
        return SettleDirection_COMPLETE_getInstance();
      default:
        SettleDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var SettleDirection_entriesInitialized;
  function SettleDirection_initEntries() {
    if (SettleDirection_entriesInitialized)
      return Unit_getInstance();
    SettleDirection_entriesInitialized = true;
    SettleDirection_REVERT_instance = new SettleDirection('REVERT', 0);
    SettleDirection_COMPLETE_instance = new SettleDirection('COMPLETE', 1);
  }
  var $ENTRIES_0;
  function Output() {
    Companion_getInstance_10();
    this.$stable_1 = 0;
  }
  function SettleDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SettleDirection_REVERT_getInstance() {
    SettleDirection_initEntries();
    return SettleDirection_REVERT_instance;
  }
  function SettleDirection_COMPLETE_getInstance() {
    SettleDirection_initEntries();
    return SettleDirection_COMPLETE_instance;
  }
  function TransitionModel() {
  }
  function get_$stableprop_15() {
    return 0;
  }
  function Update(currentTargetState, animate) {
    animate = animate === VOID ? true : animate;
    Output.call(this);
    this.currentTargetState_1 = currentTargetState;
    this.animate_1 = animate;
    this.lastTargetState_1 = this.currentTargetState_1;
    this.$stable_2 = 0;
  }
  protoOf(Update).get_currentTargetState_l0vn00_k$ = function () {
    return this.currentTargetState_1;
  };
  protoOf(Update).get_animate_cwn5s8_k$ = function () {
    return this.animate_1;
  };
  protoOf(Update).get_lastTargetState_ts42jj_k$ = function () {
    return this.lastTargetState_1;
  };
  protoOf(Update).deriveUpdate_v2uddf_k$ = function (stateTransition) {
    return new Update(stateTransition.get_targetState_kri3mx_k$());
  };
  protoOf(Update).deriveKeyframes_gyhrob_k$ = function (stateTransition) {
    return new Keyframes(listOf(new Segment(stateTransition)));
  };
  protoOf(Update).component1_7eebsc_k$ = function () {
    return this.currentTargetState_1;
  };
  protoOf(Update).component2_7eebsb_k$ = function () {
    return this.animate_1;
  };
  protoOf(Update).copy_x25f54_k$ = function (currentTargetState, animate) {
    return new Update(currentTargetState, animate);
  };
  protoOf(Update).copy$default_2vzs7w_k$ = function (currentTargetState, animate, $super) {
    currentTargetState = currentTargetState === VOID ? this.currentTargetState_1 : currentTargetState;
    animate = animate === VOID ? this.animate_1 : animate;
    return $super === VOID ? this.copy_x25f54_k$(currentTargetState, animate) : $super.copy_x25f54_k$.call(this, currentTargetState, animate);
  };
  protoOf(Update).toString = function () {
    return 'Update(currentTargetState=' + this.currentTargetState_1 + ', animate=' + this.animate_1 + ')';
  };
  protoOf(Update).hashCode = function () {
    var result = this.currentTargetState_1 == null ? 0 : hashCode(this.currentTargetState_1);
    result = imul(result, 31) + (this.animate_1 | 0) | 0;
    return result;
  };
  protoOf(Update).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Update))
      return false;
    var tmp0_other_with_cast = other instanceof Update ? other : THROW_CCE();
    if (!equals(this.currentTargetState_1, tmp0_other_with_cast.currentTargetState_1))
      return false;
    if (!(this.animate_1 === tmp0_other_with_cast.animate_1))
      return false;
    return true;
  };
  function onPointerEvent(_this__u8e3s4, callback) {
    return _this__u8e3s4.then_5qw5wu_k$(new PointerInputElement(callback));
  }
  function get_$stableprop_16() {
    return 0;
  }
  function PointerInputElement(callback) {
    ModifierNodeElement.call(this);
    this.callback_1 = callback;
    this.$stable_2 = 0;
  }
  protoOf(PointerInputElement).get_callback_ynh0qa_k$ = function () {
    return this.callback_1;
  };
  protoOf(PointerInputElement).create_md4cuc_k$ = function () {
    return new OnPointerEventNode(this.callback_1);
  };
  protoOf(PointerInputElement).update_cozftl_k$ = function (node) {
    node.callback_1 = this.callback_1;
  };
  protoOf(PointerInputElement).update_c7m3nr_k$ = function (node) {
    return this.update_cozftl_k$(node instanceof OnPointerEventNode ? node : THROW_CCE());
  };
  protoOf(PointerInputElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$('onPointerEvent');
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('callback', this.callback_1);
  };
  protoOf(PointerInputElement).component1_7eebsc_k$ = function () {
    return this.callback_1;
  };
  protoOf(PointerInputElement).copy_8q5oew_k$ = function (callback) {
    return new PointerInputElement(callback);
  };
  protoOf(PointerInputElement).copy$default_z756v_k$ = function (callback, $super) {
    callback = callback === VOID ? this.callback_1 : callback;
    return $super === VOID ? this.copy_8q5oew_k$(callback) : $super.copy_8q5oew_k$.call(this, callback);
  };
  protoOf(PointerInputElement).toString = function () {
    return 'PointerInputElement(callback=' + this.callback_1 + ')';
  };
  protoOf(PointerInputElement).hashCode = function () {
    return hashCode(this.callback_1);
  };
  protoOf(PointerInputElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PointerInputElement))
      return false;
    var tmp0_other_with_cast = other instanceof PointerInputElement ? other : THROW_CCE();
    if (!equals(this.callback_1, tmp0_other_with_cast.callback_1))
      return false;
    return true;
  };
  function get_$stableprop_17() {
    return 8;
  }
  function OnPointerEventNode(callback) {
    Node.call(this);
    this.callback_1 = callback;
    this.$stable_2 = 8;
  }
  protoOf(OnPointerEventNode).set_callback_sc8zqi_k$ = function (_set____db54di) {
    this.callback_1 = _set____db54di;
  };
  protoOf(OnPointerEventNode).get_callback_ynh0qa_k$ = function () {
    return this.callback_1;
  };
  protoOf(OnPointerEventNode).onPointerEvent_5xxilc_k$ = function (pointerEvent, pass, bounds) {
    if (pass.equals(PointerEventPass_Initial_getInstance())) {
      this.callback_1(pointerEvent);
    }
  };
  protoOf(OnPointerEventNode).sharePointerInputWithSiblings_uw6o77_k$ = function () {
    return false;
  };
  protoOf(OnPointerEventNode).onCancelPointerInput_m0d3or_k$ = function () {
  };
  function Plugin() {
  }
  function SavesInstanceState() {
  }
  function MutableSavedStateMap() {
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function _set_lock__9q5aj0($this, _set____db54di) {
    $this.lock_1 = _set____db54di;
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function checkState($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.lock_1) {
      // Inline function 'com.bumble.appyx.interactions.core.state.MutableSavedStateMapImpl.checkState.<anonymous>' call
      var message = 'This MutableSavedStateMap has already dumped its state, it is meaningless to write anything anymore';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKey($this, key, value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.map_1.containsKey_wgk31w_k$(key)) {
      // Inline function 'com.bumble.appyx.interactions.core.state.MutableSavedStateMapImpl.checkKey.<anonymous>' call
      var message = "Save instance process has faced key collision at '" + key + "': " + ("existing value is '" + toString_0($this.map_1.get_1mhr4y_k$(key)) + "', ") + ("new value is '" + toString_0(value) + "'");
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function get_$stableprop_18() {
    return 8;
  }
  function MutableSavedStateMapImpl$savedState$delegate$lambda(this$0) {
    return function () {
      this$0.lock_1 = true;
      return this$0.map_1;
    };
  }
  function MutableSavedStateMapImpl(map, saverScope) {
    map = map === VOID ? HashMap_init_$Create$() : map;
    this.map_1 = map;
    this.saverScope_1 = saverScope;
    this.lock_1 = false;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.savedState$delegate_1 = lazy_0(tmp_0, MutableSavedStateMapImpl$savedState$delegate$lambda(this));
    this.$stable_1 = 8;
  }
  protoOf(MutableSavedStateMapImpl).get_saverScope_borf48_k$ = function () {
    return this.saverScope_1;
  };
  protoOf(MutableSavedStateMapImpl).get_entries_p20ztl_k$ = function () {
    return this.map_1.get_entries_p20ztl_k$();
  };
  protoOf(MutableSavedStateMapImpl).get_keys_wop4xp_k$ = function () {
    return this.map_1.get_keys_wop4xp_k$();
  };
  protoOf(MutableSavedStateMapImpl).get_size_woubt6_k$ = function () {
    return this.map_1.get_size_woubt6_k$();
  };
  protoOf(MutableSavedStateMapImpl).get_values_ksazhn_k$ = function () {
    return this.map_1.get_values_ksazhn_k$();
  };
  protoOf(MutableSavedStateMapImpl).clear_j9y8zo_k$ = function () {
    this.map_1.clear_j9y8zo_k$();
  };
  protoOf(MutableSavedStateMapImpl).containsKey_mw51tt_k$ = function (key) {
    return this.map_1.containsKey_wgk31w_k$(key);
  };
  protoOf(MutableSavedStateMapImpl).containsKey_wgk31w_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.containsKey_mw51tt_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).containsValue_4bai5p_k$ = function (value) {
    return this.map_1.containsValue_5viga1_k$(value);
  };
  protoOf(MutableSavedStateMapImpl).containsValue_5viga1_k$ = function (value) {
    if (!(value == null ? true : isObject(value)))
      return false;
    return this.containsValue_4bai5p_k$((value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).get_4u8u51_k$ = function (key) {
    return this.map_1.get_1mhr4y_k$(key);
  };
  protoOf(MutableSavedStateMapImpl).get_1mhr4y_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.get_4u8u51_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).isEmpty_y1axqb_k$ = function () {
    return this.map_1.isEmpty_y1axqb_k$();
  };
  protoOf(MutableSavedStateMapImpl).remove_kj1003_k$ = function (key) {
    return this.map_1.remove_8hbkc0_k$(key);
  };
  protoOf(MutableSavedStateMapImpl).remove_8hbkc0_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.remove_kj1003_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).get_savedState_52fa37_k$ = function () {
    // Inline function 'kotlin.getValue' call
    savedState$factory();
    return this.savedState$delegate_1.get_value_j01efc_k$();
  };
  protoOf(MutableSavedStateMapImpl).put_rzw4nj_k$ = function (key, value) {
    checkState(this);
    checkKey(this, key, value);
    return this.map_1.put_3mhbri_k$(key, value);
  };
  protoOf(MutableSavedStateMapImpl).put_3mhbri_k$ = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_rzw4nj_k$(tmp, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).putAll_qa1csm_k$ = function (from) {
    checkState(this);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = from.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.interactions.core.state.MutableSavedStateMapImpl.putAll.<anonymous>' call
      checkKey(this, element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
    }
    return this.map_1.putAll_mee1c3_k$(from);
  };
  protoOf(MutableSavedStateMapImpl).putAll_mee1c3_k$ = function (from) {
    return this.putAll_qa1csm_k$(from);
  };
  function savedState$factory() {
    return getPropertyCallableRef('savedState', 1, KProperty1, function (receiver) {
      return receiver.get_savedState_52fa37_k$();
    }, null);
  }
  function get_LocalMotionProperties() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    return LocalMotionProperties;
  }
  var LocalMotionProperties;
  function get_LocalBoxScope() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    return LocalBoxScope;
  }
  var LocalBoxScope;
  function LocalMotionProperties$lambda() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    return null;
  }
  function LocalBoxScope$lambda() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    return null;
  }
  var properties_initialized_CompositionLocals_kt_24dxlq;
  function _init_properties_CompositionLocals_kt__uo3k1s() {
    if (!properties_initialized_CompositionLocals_kt_24dxlq) {
      properties_initialized_CompositionLocals_kt_24dxlq = true;
      LocalMotionProperties = compositionLocalOf(VOID, LocalMotionProperties$lambda);
      LocalBoxScope = compositionLocalOf(VOID, LocalBoxScope$lambda);
    }
  }
  function Visualisation$map$o$collect$slambda($collector, this$0, $output, resultContinuation) {
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    this.$output_1 = $output;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Visualisation$map$o$collect$slambda).invoke_kv9s22_k$ = function (value, $completion) {
    var tmp = this.create_4s7vdz_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Visualisation$map$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_kv9s22_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Visualisation$map$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.this$0__1.mapKeyframes_5z4kk_k$(this.$output_1, this.value_1), this);
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
  protoOf(Visualisation$map$o$collect$slambda).create_4s7vdz_k$ = function (value, completion) {
    var i = new Visualisation$map$o$collect$slambda(this.$collector_1, this.this$0__1, this.$output_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Visualisation$map$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_4s7vdz_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Visualisation$map$o$collect$slambda_0($collector, this$0, $output, resultContinuation) {
    var i = new Visualisation$map$o$collect$slambda($collector, this$0, $output, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_kv9s22_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = Visualisation$map$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.this$0__1, this._this__u8e3s4__1.$output_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_10(tmp_0), this);
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_10(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_10).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function _no_name_provided__qut3iv_8($tmp0_map, this$0, $output) {
    this.$tmp0_map_1 = $tmp0_map;
    this.this$0__1 = this$0;
    this.$output_1 = $output;
  }
  protoOf(_no_name_provided__qut3iv_8).collect_mhn8ga_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$10(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_8).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_mhn8ga_k$(collector, $completion);
  };
  function Visualisation() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.Zero_1 = new TransitionBounds(Density(0.0), 0, 0, 0, 0);
  }
  protoOf(Companion_5).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_11() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_$stableprop_19() {
    return 0;
  }
  function TransitionBounds(density, widthPx, heightPx, screenWidthPx, screenHeightPx) {
    Companion_getInstance_11();
    this.density_1 = density;
    this.widthPx_1 = widthPx;
    this.heightPx_1 = heightPx;
    this.screenWidthPx_1 = screenWidthPx;
    this.screenHeightPx_1 = screenHeightPx;
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.widthDp.<anonymous>' call
    tmp.widthDp_1 = this.density_1.toDp_2eugbd_k$(this.widthPx_1);
    var tmp_0 = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.heightDp.<anonymous>' call
    tmp_0.heightDp_1 = this.density_1.toDp_2eugbd_k$(this.heightPx_1);
    var tmp_1 = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.screenWidthDp.<anonymous>' call
    tmp_1.screenWidthDp_1 = this.density_1.toDp_2eugbd_k$(this.screenWidthPx_1);
    var tmp_2 = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.screenHeightDp.<anonymous>' call
    tmp_2.screenHeightDp_1 = this.density_1.toDp_2eugbd_k$(this.screenHeightPx_1);
    this.$stable_1 = 0;
  }
  protoOf(TransitionBounds).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(TransitionBounds).get_widthPx_nfsdj9_k$ = function () {
    return this.widthPx_1;
  };
  protoOf(TransitionBounds).get_heightPx_om8qxk_k$ = function () {
    return this.heightPx_1;
  };
  protoOf(TransitionBounds).get_screenWidthPx_r81ozr_k$ = function () {
    return this.screenWidthPx_1;
  };
  protoOf(TransitionBounds).get_screenHeightPx_grts10_k$ = function () {
    return this.screenHeightPx_1;
  };
  protoOf(TransitionBounds).get_widthDp_98cklg_k$ = function () {
    return this.widthDp_1;
  };
  protoOf(TransitionBounds).get_heightDp_dtmrdj_k$ = function () {
    return this.heightDp_1;
  };
  protoOf(TransitionBounds).get_screenWidthDp_gna9yw_k$ = function () {
    return this.screenWidthDp_1;
  };
  protoOf(TransitionBounds).get_screenHeightDp_ulbg0z_k$ = function () {
    return this.screenHeightDp_1;
  };
  protoOf(TransitionBounds).component1_7eebsc_k$ = function () {
    return this.density_1;
  };
  protoOf(TransitionBounds).component2_7eebsb_k$ = function () {
    return this.widthPx_1;
  };
  protoOf(TransitionBounds).component3_7eebsa_k$ = function () {
    return this.heightPx_1;
  };
  protoOf(TransitionBounds).component4_7eebs9_k$ = function () {
    return this.screenWidthPx_1;
  };
  protoOf(TransitionBounds).component5_7eebs8_k$ = function () {
    return this.screenHeightPx_1;
  };
  protoOf(TransitionBounds).copy_9ydejl_k$ = function (density, widthPx, heightPx, screenWidthPx, screenHeightPx) {
    return new TransitionBounds(density, widthPx, heightPx, screenWidthPx, screenHeightPx);
  };
  protoOf(TransitionBounds).copy$default_p1apc0_k$ = function (density, widthPx, heightPx, screenWidthPx, screenHeightPx, $super) {
    density = density === VOID ? this.density_1 : density;
    widthPx = widthPx === VOID ? this.widthPx_1 : widthPx;
    heightPx = heightPx === VOID ? this.heightPx_1 : heightPx;
    screenWidthPx = screenWidthPx === VOID ? this.screenWidthPx_1 : screenWidthPx;
    screenHeightPx = screenHeightPx === VOID ? this.screenHeightPx_1 : screenHeightPx;
    return $super === VOID ? this.copy_9ydejl_k$(density, widthPx, heightPx, screenWidthPx, screenHeightPx) : $super.copy_9ydejl_k$.call(this, density, widthPx, heightPx, screenWidthPx, screenHeightPx);
  };
  protoOf(TransitionBounds).toString = function () {
    return 'TransitionBounds(density=' + this.density_1 + ', widthPx=' + this.widthPx_1 + ', heightPx=' + this.heightPx_1 + ', screenWidthPx=' + this.screenWidthPx_1 + ', screenHeightPx=' + this.screenHeightPx_1 + ')';
  };
  protoOf(TransitionBounds).hashCode = function () {
    var result = hashCode(this.density_1);
    result = imul(result, 31) + this.widthPx_1 | 0;
    result = imul(result, 31) + this.heightPx_1 | 0;
    result = imul(result, 31) + this.screenWidthPx_1 | 0;
    result = imul(result, 31) + this.screenHeightPx_1 | 0;
    return result;
  };
  protoOf(TransitionBounds).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionBounds))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionBounds ? other : THROW_CCE();
    if (!equals(this.density_1, tmp0_other_with_cast.density_1))
      return false;
    if (!(this.widthPx_1 === tmp0_other_with_cast.widthPx_1))
      return false;
    if (!(this.heightPx_1 === tmp0_other_with_cast.heightPx_1))
      return false;
    if (!(this.screenWidthPx_1 === tmp0_other_with_cast.screenWidthPx_1))
      return false;
    if (!(this.screenHeightPx_1 === tmp0_other_with_cast.screenHeightPx_1))
      return false;
    return true;
  };
  function TransitionBoundsAware() {
  }
  function get_$stableprop_20() {
    return 0;
  }
  function UiContext(coroutineScope, clipToBounds) {
    this.coroutineScope_1 = coroutineScope;
    this.clipToBounds_1 = clipToBounds;
    this.$stable_1 = 0;
  }
  protoOf(UiContext).get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  protoOf(UiContext).get_clipToBounds_snmqix_k$ = function () {
    return this.clipToBounds_1;
  };
  protoOf(UiContext).component1_7eebsc_k$ = function () {
    return this.coroutineScope_1;
  };
  protoOf(UiContext).component2_7eebsb_k$ = function () {
    return this.clipToBounds_1;
  };
  protoOf(UiContext).copy_usg17w_k$ = function (coroutineScope, clipToBounds) {
    return new UiContext(coroutineScope, clipToBounds);
  };
  protoOf(UiContext).copy$default_cwwqh9_k$ = function (coroutineScope, clipToBounds, $super) {
    coroutineScope = coroutineScope === VOID ? this.coroutineScope_1 : coroutineScope;
    clipToBounds = clipToBounds === VOID ? this.clipToBounds_1 : clipToBounds;
    return $super === VOID ? this.copy_usg17w_k$(coroutineScope, clipToBounds) : $super.copy_usg17w_k$.call(this, coroutineScope, clipToBounds);
  };
  protoOf(UiContext).toString = function () {
    return 'UiContext(coroutineScope=' + this.coroutineScope_1 + ', clipToBounds=' + this.clipToBounds_1 + ')';
  };
  protoOf(UiContext).hashCode = function () {
    var result = hashCode(this.coroutineScope_1);
    result = imul(result, 31) + (this.clipToBounds_1 | 0) | 0;
    return result;
  };
  protoOf(UiContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UiContext))
      return false;
    var tmp0_other_with_cast = other instanceof UiContext ? other : THROW_CCE();
    if (!equals(this.coroutineScope_1, tmp0_other_with_cast.coroutineScope_1))
      return false;
    if (!(this.clipToBounds_1 === tmp0_other_with_cast.clipToBounds_1))
      return false;
    return true;
  };
  function UiContextAware() {
  }
  var VerticalDirection_UP_instance;
  var VerticalDirection_DOWN_instance;
  function values_1() {
    return [VerticalDirection_UP_getInstance(), VerticalDirection_DOWN_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'UP':
        return VerticalDirection_UP_getInstance();
      case 'DOWN':
        return VerticalDirection_DOWN_getInstance();
      default:
        VerticalDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var VerticalDirection_entriesInitialized;
  function VerticalDirection_initEntries() {
    if (VerticalDirection_entriesInitialized)
      return Unit_getInstance();
    VerticalDirection_entriesInitialized = true;
    VerticalDirection_UP_instance = new VerticalDirection('UP', 0);
    VerticalDirection_DOWN_instance = new VerticalDirection('DOWN', 1);
  }
  var $ENTRIES_1;
  var HorizontalDirection_LEFT_instance;
  var HorizontalDirection_RIGHT_instance;
  function values_2() {
    return [HorizontalDirection_LEFT_getInstance(), HorizontalDirection_RIGHT_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'LEFT':
        return HorizontalDirection_LEFT_getInstance();
      case 'RIGHT':
        return HorizontalDirection_RIGHT_getInstance();
      default:
        HorizontalDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var HorizontalDirection_entriesInitialized;
  function HorizontalDirection_initEntries() {
    if (HorizontalDirection_entriesInitialized)
      return Unit_getInstance();
    HorizontalDirection_entriesInitialized = true;
    HorizontalDirection_LEFT_instance = new HorizontalDirection('LEFT', 0);
    HorizontalDirection_RIGHT_instance = new HorizontalDirection('RIGHT', 1);
  }
  var $ENTRIES_2;
  var Direction4_UP_instance;
  var Direction4_DOWN_instance;
  var Direction4_LEFT_instance;
  var Direction4_RIGHT_instance;
  function values_3() {
    return [Direction4_UP_getInstance(), Direction4_DOWN_getInstance(), Direction4_LEFT_getInstance(), Direction4_RIGHT_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'UP':
        return Direction4_UP_getInstance();
      case 'DOWN':
        return Direction4_DOWN_getInstance();
      case 'LEFT':
        return Direction4_LEFT_getInstance();
      case 'RIGHT':
        return Direction4_RIGHT_getInstance();
      default:
        Direction4_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var Direction4_entriesInitialized;
  function Direction4_initEntries() {
    if (Direction4_entriesInitialized)
      return Unit_getInstance();
    Direction4_entriesInitialized = true;
    Direction4_UP_instance = new Direction4('UP', 0);
    Direction4_DOWN_instance = new Direction4('DOWN', 1);
    Direction4_LEFT_instance = new Direction4('LEFT', 2);
    Direction4_RIGHT_instance = new Direction4('RIGHT', 3);
  }
  var $ENTRIES_3;
  var Direction8_UP_instance;
  var Direction8_UPRIGHT_instance;
  var Direction8_RIGHT_instance;
  var Direction8_DOWNRIGHT_instance;
  var Direction8_DOWN_instance;
  var Direction8_DOWNLEFT_instance;
  var Direction8_LEFT_instance;
  var Direction8_UPLEFT_instance;
  function values_4() {
    return [Direction8_UP_getInstance(), Direction8_UPRIGHT_getInstance(), Direction8_RIGHT_getInstance(), Direction8_DOWNRIGHT_getInstance(), Direction8_DOWN_getInstance(), Direction8_DOWNLEFT_getInstance(), Direction8_LEFT_getInstance(), Direction8_UPLEFT_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'UP':
        return Direction8_UP_getInstance();
      case 'UPRIGHT':
        return Direction8_UPRIGHT_getInstance();
      case 'RIGHT':
        return Direction8_RIGHT_getInstance();
      case 'DOWNRIGHT':
        return Direction8_DOWNRIGHT_getInstance();
      case 'DOWN':
        return Direction8_DOWN_getInstance();
      case 'DOWNLEFT':
        return Direction8_DOWNLEFT_getInstance();
      case 'LEFT':
        return Direction8_LEFT_getInstance();
      case 'UPLEFT':
        return Direction8_UPLEFT_getInstance();
      default:
        Direction8_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var Direction8_entriesInitialized;
  function Direction8_initEntries() {
    if (Direction8_entriesInitialized)
      return Unit_getInstance();
    Direction8_entriesInitialized = true;
    Direction8_UP_instance = new Direction8('UP', 0);
    Direction8_UPRIGHT_instance = new Direction8('UPRIGHT', 1);
    Direction8_RIGHT_instance = new Direction8('RIGHT', 2);
    Direction8_DOWNRIGHT_instance = new Direction8('DOWNRIGHT', 3);
    Direction8_DOWN_instance = new Direction8('DOWN', 4);
    Direction8_DOWNLEFT_instance = new Direction8('DOWNLEFT', 5);
    Direction8_LEFT_instance = new Direction8('LEFT', 6);
    Direction8_UPLEFT_instance = new Direction8('UPLEFT', 7);
  }
  var $ENTRIES_4;
  var ClockDirection_Clock1_instance;
  var ClockDirection_Clock2_instance;
  var ClockDirection_Clock3_instance;
  var ClockDirection_Clock4_instance;
  var ClockDirection_Clock5_instance;
  var ClockDirection_Clock6_instance;
  var ClockDirection_Clock7_instance;
  var ClockDirection_Clock8_instance;
  var ClockDirection_Clock9_instance;
  var ClockDirection_Clock10_instance;
  var ClockDirection_Clock11_instance;
  var ClockDirection_Clock12_instance;
  function values_5() {
    return [ClockDirection_Clock1_getInstance(), ClockDirection_Clock2_getInstance(), ClockDirection_Clock3_getInstance(), ClockDirection_Clock4_getInstance(), ClockDirection_Clock5_getInstance(), ClockDirection_Clock6_getInstance(), ClockDirection_Clock7_getInstance(), ClockDirection_Clock8_getInstance(), ClockDirection_Clock9_getInstance(), ClockDirection_Clock10_getInstance(), ClockDirection_Clock11_getInstance(), ClockDirection_Clock12_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'Clock1':
        return ClockDirection_Clock1_getInstance();
      case 'Clock2':
        return ClockDirection_Clock2_getInstance();
      case 'Clock3':
        return ClockDirection_Clock3_getInstance();
      case 'Clock4':
        return ClockDirection_Clock4_getInstance();
      case 'Clock5':
        return ClockDirection_Clock5_getInstance();
      case 'Clock6':
        return ClockDirection_Clock6_getInstance();
      case 'Clock7':
        return ClockDirection_Clock7_getInstance();
      case 'Clock8':
        return ClockDirection_Clock8_getInstance();
      case 'Clock9':
        return ClockDirection_Clock9_getInstance();
      case 'Clock10':
        return ClockDirection_Clock10_getInstance();
      case 'Clock11':
        return ClockDirection_Clock11_getInstance();
      case 'Clock12':
        return ClockDirection_Clock12_getInstance();
      default:
        ClockDirection_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var ClockDirection_entriesInitialized;
  function ClockDirection_initEntries() {
    if (ClockDirection_entriesInitialized)
      return Unit_getInstance();
    ClockDirection_entriesInitialized = true;
    ClockDirection_Clock1_instance = new ClockDirection('Clock1', 0, 1);
    ClockDirection_Clock2_instance = new ClockDirection('Clock2', 1, 2);
    ClockDirection_Clock3_instance = new ClockDirection('Clock3', 2, 3);
    ClockDirection_Clock4_instance = new ClockDirection('Clock4', 3, 4);
    ClockDirection_Clock5_instance = new ClockDirection('Clock5', 4, 5);
    ClockDirection_Clock6_instance = new ClockDirection('Clock6', 5, 6);
    ClockDirection_Clock7_instance = new ClockDirection('Clock7', 6, 7);
    ClockDirection_Clock8_instance = new ClockDirection('Clock8', 7, 8);
    ClockDirection_Clock9_instance = new ClockDirection('Clock9', 8, 9);
    ClockDirection_Clock10_instance = new ClockDirection('Clock10', 9, 10);
    ClockDirection_Clock11_instance = new ClockDirection('Clock11', 10, 11);
    ClockDirection_Clock12_instance = new ClockDirection('Clock12', 11, 12);
  }
  var $ENTRIES_5;
  function VerticalDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HorizontalDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction4(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction8(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClockDirection(name, ordinal, digit) {
    Enum.call(this, name, ordinal);
    this.digit_1 = digit;
  }
  protoOf(ClockDirection).get_digit_iqa3no_k$ = function () {
    return this.digit_1;
  };
  function VerticalDirection_UP_getInstance() {
    VerticalDirection_initEntries();
    return VerticalDirection_UP_instance;
  }
  function VerticalDirection_DOWN_getInstance() {
    VerticalDirection_initEntries();
    return VerticalDirection_DOWN_instance;
  }
  function HorizontalDirection_LEFT_getInstance() {
    HorizontalDirection_initEntries();
    return HorizontalDirection_LEFT_instance;
  }
  function HorizontalDirection_RIGHT_getInstance() {
    HorizontalDirection_initEntries();
    return HorizontalDirection_RIGHT_instance;
  }
  function Direction4_UP_getInstance() {
    Direction4_initEntries();
    return Direction4_UP_instance;
  }
  function Direction4_DOWN_getInstance() {
    Direction4_initEntries();
    return Direction4_DOWN_instance;
  }
  function Direction4_LEFT_getInstance() {
    Direction4_initEntries();
    return Direction4_LEFT_instance;
  }
  function Direction4_RIGHT_getInstance() {
    Direction4_initEntries();
    return Direction4_RIGHT_instance;
  }
  function Direction8_UP_getInstance() {
    Direction8_initEntries();
    return Direction8_UP_instance;
  }
  function Direction8_UPRIGHT_getInstance() {
    Direction8_initEntries();
    return Direction8_UPRIGHT_instance;
  }
  function Direction8_RIGHT_getInstance() {
    Direction8_initEntries();
    return Direction8_RIGHT_instance;
  }
  function Direction8_DOWNRIGHT_getInstance() {
    Direction8_initEntries();
    return Direction8_DOWNRIGHT_instance;
  }
  function Direction8_DOWN_getInstance() {
    Direction8_initEntries();
    return Direction8_DOWN_instance;
  }
  function Direction8_DOWNLEFT_getInstance() {
    Direction8_initEntries();
    return Direction8_DOWNLEFT_instance;
  }
  function Direction8_LEFT_getInstance() {
    Direction8_initEntries();
    return Direction8_LEFT_instance;
  }
  function Direction8_UPLEFT_getInstance() {
    Direction8_initEntries();
    return Direction8_UPLEFT_instance;
  }
  function ClockDirection_Clock1_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock1_instance;
  }
  function ClockDirection_Clock2_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock2_instance;
  }
  function ClockDirection_Clock3_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock3_instance;
  }
  function ClockDirection_Clock4_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock4_instance;
  }
  function ClockDirection_Clock5_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock5_instance;
  }
  function ClockDirection_Clock6_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock6_instance;
  }
  function ClockDirection_Clock7_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock7_instance;
  }
  function ClockDirection_Clock8_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock8_instance;
  }
  function ClockDirection_Clock9_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock9_instance;
  }
  function ClockDirection_Clock10_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock10_instance;
  }
  function ClockDirection_Clock11_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock11_instance;
  }
  function ClockDirection_Clock12_getInstance() {
    ClockDirection_initEntries();
    return ClockDirection_Clock12_instance;
  }
  function Drag() {
  }
  function dragHorizontalDirection(delta) {
    return _Offset___get_x__impl__xvi35n(delta) < 0 ? HorizontalDirection_LEFT_getInstance() : HorizontalDirection_RIGHT_getInstance();
  }
  function get_$stableprop_21() {
    return 0;
  }
  function Gesture$Noop$_init_$lambda_rotrea(it) {
    return 0.0;
  }
  function Gesture$Noop$_init_$lambda_rotrea_0(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return new Offset(Offset_0(0.0, 0.0));
  }
  function Gesture_init_$Init$(operation, completeAt, $this) {
    var tmp = Gesture$_init_$lambda_qx53ia(completeAt);
    Gesture.call($this, operation, tmp, Gesture$_init_$lambda_qx53ia_0(completeAt));
    return $this;
  }
  function Gesture_init_$Create$(operation, completeAt) {
    return Gesture_init_$Init$(operation, completeAt, objectCreate(protoOf(Gesture)));
  }
  function Noop_0() {
    var tmp = new Noop();
    var tmp_0 = Gesture$Noop$_init_$lambda_rotrea;
    Gesture.call(this, tmp, tmp_0, Gesture$Noop$_init_$lambda_rotrea_0);
    this.$stable_2 = 0;
  }
  function get_$stableprop_22() {
    return 8;
  }
  function Gesture$_init_$lambda_qx53ia($completeAt) {
    return function (offset) {
      return proportionOf(offset.packedValue_1, $completeAt);
    };
  }
  function Gesture$_init_$lambda_qx53ia_0($completeAt) {
    return function (offset, remainder) {
      var totalProgress = proportionOf(offset.packedValue_1, $completeAt);
      return new Offset(Offset__times_impl_jz1mli(offset.packedValue_1, remainder / totalProgress));
    };
  }
  function Gesture(operation, dragToProgress, partial) {
    this.operation_1 = operation;
    this.dragToProgress_1 = dragToProgress;
    this.partial_1 = partial;
    this.startProgress_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(Gesture).get_operation_z0nqyq_k$ = function () {
    return this.operation_1;
  };
  protoOf(Gesture).get_dragToProgress_2wwwrf_k$ = function () {
    return this.dragToProgress_1;
  };
  protoOf(Gesture).get_partial_bujdrc_k$ = function () {
    return this.partial_1;
  };
  protoOf(Gesture).set_startProgress_jj592m_k$ = function (_set____db54di) {
    this.startProgress_1 = _set____db54di;
  };
  protoOf(Gesture).get_startProgress_fo2we2_k$ = function () {
    return this.startProgress_1;
  };
  function get_$stableprop_23() {
    return 0;
  }
  function Noop_1() {
    this.$stable_1 = 0;
  }
  protoOf(Noop_1).createGesture_2asjs5_k$ = function (state, delta, density) {
    return new Noop_0();
  };
  function GestureFactory() {
  }
  function get_$stableprop_24() {
    return 0;
  }
  function GestureSettleConfig(completionThreshold, completeGestureSpec, revertGestureSpec) {
    completionThreshold = completionThreshold === VOID ? 0.5 : completionThreshold;
    completeGestureSpec = completeGestureSpec === VOID ? get_DefaultAnimationSpec() : completeGestureSpec;
    revertGestureSpec = revertGestureSpec === VOID ? get_DefaultAnimationSpec() : revertGestureSpec;
    this.completionThreshold_1 = completionThreshold;
    this.completeGestureSpec_1 = completeGestureSpec;
    this.revertGestureSpec_1 = revertGestureSpec;
    this.$stable_1 = 0;
  }
  protoOf(GestureSettleConfig).get_completionThreshold_jce5xi_k$ = function () {
    return this.completionThreshold_1;
  };
  protoOf(GestureSettleConfig).get_completeGestureSpec_cc2uv2_k$ = function () {
    return this.completeGestureSpec_1;
  };
  protoOf(GestureSettleConfig).get_revertGestureSpec_32f4on_k$ = function () {
    return this.revertGestureSpec_1;
  };
  protoOf(GestureSettleConfig).component1_7eebsc_k$ = function () {
    return this.completionThreshold_1;
  };
  protoOf(GestureSettleConfig).component2_7eebsb_k$ = function () {
    return this.completeGestureSpec_1;
  };
  protoOf(GestureSettleConfig).component3_7eebsa_k$ = function () {
    return this.revertGestureSpec_1;
  };
  protoOf(GestureSettleConfig).copy_6t2pdj_k$ = function (completionThreshold, completeGestureSpec, revertGestureSpec) {
    return new GestureSettleConfig(completionThreshold, completeGestureSpec, revertGestureSpec);
  };
  protoOf(GestureSettleConfig).copy$default_6iu8c_k$ = function (completionThreshold, completeGestureSpec, revertGestureSpec, $super) {
    completionThreshold = completionThreshold === VOID ? this.completionThreshold_1 : completionThreshold;
    completeGestureSpec = completeGestureSpec === VOID ? this.completeGestureSpec_1 : completeGestureSpec;
    revertGestureSpec = revertGestureSpec === VOID ? this.revertGestureSpec_1 : revertGestureSpec;
    return $super === VOID ? this.copy_6t2pdj_k$(completionThreshold, completeGestureSpec, revertGestureSpec) : $super.copy_6t2pdj_k$.call(this, completionThreshold, completeGestureSpec, revertGestureSpec);
  };
  protoOf(GestureSettleConfig).toString = function () {
    return 'GestureSettleConfig(completionThreshold=' + this.completionThreshold_1 + ', completeGestureSpec=' + this.completeGestureSpec_1 + ', revertGestureSpec=' + this.revertGestureSpec_1 + ')';
  };
  protoOf(GestureSettleConfig).hashCode = function () {
    var result = getNumberHashCode(this.completionThreshold_1);
    result = imul(result, 31) + hashCode(this.completeGestureSpec_1) | 0;
    result = imul(result, 31) + hashCode(this.revertGestureSpec_1) | 0;
    return result;
  };
  protoOf(GestureSettleConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GestureSettleConfig))
      return false;
    var tmp0_other_with_cast = other instanceof GestureSettleConfig ? other : THROW_CCE();
    if (!equals(this.completionThreshold_1, tmp0_other_with_cast.completionThreshold_1))
      return false;
    if (!equals(this.completeGestureSpec_1, tmp0_other_with_cast.completeGestureSpec_1))
      return false;
    if (!equals(this.revertGestureSpec_1, tmp0_other_with_cast.revertGestureSpec_1))
      return false;
    return true;
  };
  function set_DisableAnimations(_set____db54di) {
    _init_properties_Gestures_kt__t6axd6();
    DisableAnimations = _set____db54di;
  }
  function get_DisableAnimations() {
    _init_properties_Gestures_kt__t6axd6();
    return DisableAnimations;
  }
  var DisableAnimations;
  function get_DefaultAnimationSpec() {
    _init_properties_Gestures_kt__t6axd6();
    return DefaultAnimationSpec;
  }
  var DefaultAnimationSpec;
  var properties_initialized_Gestures_kt_2we6k;
  function _init_properties_Gestures_kt__t6axd6() {
    if (!properties_initialized_Gestures_kt_2we6k) {
      properties_initialized_Gestures_kt_2we6k = true;
      DisableAnimations = false;
      DefaultAnimationSpec = spring();
    }
  }
  function AppyxComponentSetup$composable(appyxComponent, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(412435611);
    sourceInformation($composer_0, 'C(AppyxComponentSetup$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(appyxComponent) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(412435611, $dirty, -1, 'com.bumble.appyx.interactions.core.ui.helper.AppyxComponentSetup$composable (InteractionModelSetup.kt:8)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp1_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: null};
      var $composer_1 = tmp1_rememberCoroutineScope$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(102870005);
      sourceInformation($composer_1, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = AppyxComponentSetup$composable$lambda;
      }
      var composer = $composer_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_2.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var coroutineScope = tmp0_0;
      DisposableEffect$composable(appyxComponent, AppyxComponentSetup$composable$lambda_0(appyxComponent, coroutineScope), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(AppyxComponentSetup$composable$lambda_1(appyxComponent, $changed));
    }
  }
  function AppyxComponentSetup$composable$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function _no_name_provided__qut3iv_9($appyxComponent) {
    this.$appyxComponent_1 = $appyxComponent;
  }
  protoOf(_no_name_provided__qut3iv_9).dispose_3n44we_k$ = function () {
    // Inline function 'com.bumble.appyx.interactions.core.ui.helper.AppyxComponentSetup$composable.<anonymous>.<anonymous>' call
    this.$appyxComponent_1.onRemovedFromComposition_vutugi_k$();
  };
  function AppyxComponentSetup$composable$lambda_0($appyxComponent, $coroutineScope) {
    return function ($this$DisposableEffect) {
      $appyxComponent.onAddedToComposition_kj50uu_k$($coroutineScope);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_9($appyxComponent);
      return tmp$ret$0;
    };
  }
  function AppyxComponentSetup$composable$lambda_1($appyxComponent, $$changed) {
    return function ($composer, $force) {
      AppyxComponentSetup$composable($appyxComponent, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function lerpFloat(start, end, progress) {
    return start + progress * (end - start);
  }
  function proportionOf(v1, v2) {
    var s = scalarComponentOf(v1, v2);
    return s / Offset__getDistance_impl_pclvxn(v2);
  }
  function scalarComponentOf(v1, v2) {
    var theta = angleDegrees(v1) - angleDegrees(v2);
    var l = Offset__getDistance_impl_pclvxn(v1);
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = theta / 180 * get_PI();
    return l * Math.cos(tmp0_cos);
  }
  function angleDegrees(vector) {
    var x = Offset__component1_impl_qn5q2(vector);
    var y = Offset__component2_impl_9ljbv(vector);
    var tmp;
    if (x === 0.0) {
      tmp = y > 0 ? 90.0 : y < 0 ? 270.0 : 0.0;
    } else if (y === 0.0) {
      tmp = x > 0 ? 0.0 : x < 0 ? 180.0 : 0.0;
    } else {
      // Inline function 'kotlin.math.atan' call
      var tmp0_atan = y / x;
      var deg = Math.atan(tmp0_atan) * 180.0 / get_PI();
      tmp = x < 0 ? 180 + deg : y < 0 ? 360 + deg : deg;
    }
    var deg_0 = tmp;
    return (deg_0 + 90) % 360;
  }
  function get_$stableprop_25() {
    return 0;
  }
  function ElementUiModel(element, visibleState, motionProperties, persistentContainer, modifier, progress) {
    illegalDecoyCallException('<init>');
  }
  protoOf(ElementUiModel).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(ElementUiModel).get_visibleState_frxjc_k$ = function () {
    return this.visibleState_1;
  };
  protoOf(ElementUiModel).get_motionProperties_5siqmq_k$ = function () {
    return this.motionProperties_1;
  };
  protoOf(ElementUiModel).get_persistentContainer_b48fy7_k$ = function () {
    return this.persistentContainer_1;
  };
  protoOf(ElementUiModel).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(ElementUiModel).get_progress_mo5qeu_k$ = function () {
    return this.progress_1;
  };
  protoOf(ElementUiModel).component1_7eebsc_k$ = function () {
    return this.element_1;
  };
  protoOf(ElementUiModel).component2_7eebsb_k$ = function () {
    return this.visibleState_1;
  };
  protoOf(ElementUiModel).component3_7eebsa_k$ = function () {
    return this.motionProperties_1;
  };
  protoOf(ElementUiModel).component4_7eebs9_k$ = function () {
    return this.persistentContainer_1;
  };
  protoOf(ElementUiModel).component5_7eebs8_k$ = function () {
    return this.modifier_1;
  };
  protoOf(ElementUiModel).component6_7eebs7_k$ = function () {
    return this.progress_1;
  };
  protoOf(ElementUiModel).copy_e80z3b_k$ = function (element, visibleState, motionProperties, persistentContainer, modifier, progress) {
    illegalDecoyCallException('copy');
  };
  protoOf(ElementUiModel).toString = function () {
    return 'ElementUiModel(element=' + this.element_1 + ', visibleState=' + this.visibleState_1 + ', motionProperties=' + this.motionProperties_1 + ', persistentContainer=' + this.persistentContainer_1 + ', modifier=' + this.modifier_1 + ', progress=' + this.progress_1 + ')';
  };
  protoOf(ElementUiModel).hashCode = function () {
    var result = this.element_1.hashCode();
    result = imul(result, 31) + hashCode(this.visibleState_1) | 0;
    result = imul(result, 31) + hashCode(this.motionProperties_1) | 0;
    result = imul(result, 31) + hashCode(this.persistentContainer_1) | 0;
    result = imul(result, 31) + hashCode(this.modifier_1) | 0;
    result = imul(result, 31) + hashCode(this.progress_1) | 0;
    return result;
  };
  protoOf(ElementUiModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementUiModel))
      return false;
    var tmp0_other_with_cast = other instanceof ElementUiModel ? other : THROW_CCE();
    if (!this.element_1.equals(tmp0_other_with_cast.element_1))
      return false;
    if (!equals(this.visibleState_1, tmp0_other_with_cast.visibleState_1))
      return false;
    if (!equals(this.motionProperties_1, tmp0_other_with_cast.motionProperties_1))
      return false;
    if (!equals(this.persistentContainer_1, tmp0_other_with_cast.persistentContainer_1))
      return false;
    if (!equals(this.modifier_1, tmp0_other_with_cast.modifier_1))
      return false;
    if (!equals(this.progress_1, tmp0_other_with_cast.progress_1))
      return false;
    return true;
  };
  function ElementUiModel(element, visibleState, motionProperties, persistentContainer, modifier, progress) {
    this.element_1 = element;
    this.visibleState_1 = visibleState;
    this.motionProperties_1 = motionProperties;
    this.persistentContainer_1 = persistentContainer;
    this.modifier_1 = modifier;
    this.progress_1 = progress;
    this.$stable_1 = 0;
  }
  protoOf(ElementUiModel).copy$composable_o3b8q5_k$ = function (element, visibleState, motionProperties, persistentContainer, modifier, progress) {
    return new ElementUiModel(element, visibleState, motionProperties, persistentContainer, modifier, progress);
  };
  protoOf(ElementUiModel).copy$composable$default_uk62at_k$ = function (element, visibleState, motionProperties, persistentContainer, modifier, progress, $super) {
    element = element === VOID ? this.element_1 : element;
    visibleState = visibleState === VOID ? this.visibleState_1 : visibleState;
    motionProperties = motionProperties === VOID ? this.motionProperties_1 : motionProperties;
    persistentContainer = persistentContainer === VOID ? this.persistentContainer_1 : persistentContainer;
    modifier = modifier === VOID ? this.modifier_1 : modifier;
    progress = progress === VOID ? this.progress_1 : progress;
    return $super === VOID ? this.copy$composable_o3b8q5_k$(element, visibleState, motionProperties, persistentContainer, modifier, progress) : $super.copy$composable_o3b8q5_k$.call(this, element, visibleState, motionProperties, persistentContainer, modifier, progress);
  };
  function Interpolatable() {
  }
  function _get_animatable__cd8nbn_0($this) {
    return $this.animatable_1;
  }
  function _get_visibilityThreshold__cvk72g($this) {
    return $this.visibilityThreshold_1;
  }
  function _get_displacement__6fe7tg($this) {
    return $this.displacement_1;
  }
  function Target() {
  }
  function _set_lastVelocity__ksfu1o($this, _set____db54di) {
    $this.lastVelocity_1 = _set____db54di;
  }
  function _get_lastVelocity__58p3hk($this) {
    return $this.lastVelocity_1;
  }
  function _set_previousVelocity__vdvzhf($this, _set____db54di) {
    $this.previousVelocity_1 = _set____db54di;
  }
  function _get_previousVelocity__ak3tex($this) {
    return $this.previousVelocity_1;
  }
  function _set_lastTime__ljdjg($this, _set____db54di) {
    $this.lastTime_1 = _set____db54di;
  }
  function _get_lastTime__defp08($this) {
    return $this.lastTime_1;
  }
  function _get_internalValueFlow__jbgyvj($this) {
    return $this.internalValueFlow_1;
  }
  function _get__isAnimatingFlow__k170hk($this) {
    return $this._isAnimatingFlow_1;
  }
  function onValueChanged($this) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var tmp0_update = $this.internalValueFlow_1;
      while (true) {
        var prevValue = tmp0_update.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.ui.property.MotionProperty.onValueChanged.<anonymous>' call
        var nextValue = $this.get_internalValue_suj1cb_k$();
        if (tmp0_update.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function calculateVelocity($this, targetValue) {
    if ($this.lastTime_1.equals(new Long(0, 0)))
      $this.lastTime_1 = SystemClock_getInstance().nanoTime_v2dkm9_k$();
    var converter = $this.animatable_1.get_typeConverter_seyvfn_k$();
    var vec1 = converter.get_convertToVector_s594l4_k$()($this.animatable_1.get_value_j01efc_k$());
    var targetVector = converter.get_convertToVector_s594l4_k$()(targetValue);
    var time = SystemClock_getInstance().nanoTime_v2dkm9_k$();
    var tmp = time.minus_llf5ei_k$($this.lastTime_1);
    Companion_getInstance_12();
    var deltaTimeMs = tmp.div_9s1fi3_k$(new Long(1000000, 0));
    var timeFactor = deltaTimeMs.compareTo_n4fqi2_k$(new Long(0, 0)) > 0 ? numberToLong(1000).div_9s1fi3_k$(deltaTimeMs) : new Long(0, 0);
    $this.lastTime_1 = time;
    var tmp_0;
    if (vec1 instanceof AnimationVector1D) {
      var vec2 = targetVector instanceof AnimationVector1D ? targetVector : THROW_CCE();
      var tmp_1 = converter.get_convertFromVector_kmewon_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = vec2.get_value_j01efc_k$() - vec1.get_value_j01efc_k$();
      tmp$ret$0 = timeFactor.toFloat_jhbgwv_k$() * tmp0_times;
      var tmp_2 = new AnimationVector1D(tmp$ret$0);
      tmp_0 = tmp_1(tmp_2 instanceof AnimationVector ? tmp_2 : THROW_CCE());
    } else {
      if (vec1 instanceof AnimationVector2D) {
        var vec2_0 = targetVector instanceof AnimationVector2D ? targetVector : THROW_CCE();
        var tmp_3 = converter.get_convertFromVector_kmewon_k$();
        // Inline function 'kotlin.Long.times' call
        var tmp1_times = vec2_0.get_v1_kntnng_k$() - vec1.get_v1_kntnng_k$();
        var tmp_4 = timeFactor.toFloat_jhbgwv_k$() * tmp1_times;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.times' call
        var tmp2_times = vec2_0.get_v2_kntnnf_k$() - vec1.get_v2_kntnnf_k$();
        tmp$ret$2 = timeFactor.toFloat_jhbgwv_k$() * tmp2_times;
        var tmp_5 = new AnimationVector2D(tmp_4, tmp$ret$2);
        tmp_0 = tmp_3(tmp_5 instanceof AnimationVector ? tmp_5 : THROW_CCE());
      } else {
        if (vec1 instanceof AnimationVector3D) {
          var vec2_1 = targetVector instanceof AnimationVector3D ? targetVector : THROW_CCE();
          var tmp_6 = converter.get_convertFromVector_kmewon_k$();
          // Inline function 'kotlin.Long.times' call
          var tmp3_times = vec2_1.get_v1_kntnng_k$() - vec1.get_v1_kntnng_k$();
          var tmp_7 = timeFactor.toFloat_jhbgwv_k$() * tmp3_times;
          // Inline function 'kotlin.Long.times' call
          var tmp4_times = vec2_1.get_v2_kntnnf_k$() - vec1.get_v2_kntnnf_k$();
          var tmp_8 = timeFactor.toFloat_jhbgwv_k$() * tmp4_times;
          var tmp$ret$5;
          // Inline function 'kotlin.Long.times' call
          var tmp5_times = vec2_1.get_v3_kntnne_k$() - vec1.get_v3_kntnne_k$();
          tmp$ret$5 = timeFactor.toFloat_jhbgwv_k$() * tmp5_times;
          var tmp_9 = new AnimationVector3D(tmp_7, tmp_8, tmp$ret$5);
          tmp_0 = tmp_6(tmp_9 instanceof AnimationVector ? tmp_9 : THROW_CCE());
        } else {
          if (vec1 instanceof AnimationVector4D) {
            var vec2_2 = targetVector instanceof AnimationVector4D ? targetVector : THROW_CCE();
            var tmp_10 = converter.get_convertFromVector_kmewon_k$();
            // Inline function 'kotlin.Long.times' call
            var tmp6_times = vec2_2.get_v1_kntnng_k$() - vec1.get_v1_kntnng_k$();
            var tmp_11 = timeFactor.toFloat_jhbgwv_k$() * tmp6_times;
            // Inline function 'kotlin.Long.times' call
            var tmp7_times = vec2_2.get_v2_kntnnf_k$() - vec1.get_v2_kntnnf_k$();
            var tmp_12 = timeFactor.toFloat_jhbgwv_k$() * tmp7_times;
            // Inline function 'kotlin.Long.times' call
            var tmp8_times = vec2_2.get_v3_kntnne_k$() - vec1.get_v3_kntnne_k$();
            var tmp_13 = timeFactor.toFloat_jhbgwv_k$() * tmp8_times;
            var tmp$ret$9;
            // Inline function 'kotlin.Long.times' call
            var tmp9_times = vec2_2.get_v4_kntnnd_k$() - vec1.get_v4_kntnnd_k$();
            tmp$ret$9 = timeFactor.toFloat_jhbgwv_k$() * tmp9_times;
            var tmp_14 = new AnimationVector4D(tmp_11, tmp_12, tmp_13, tmp$ret$9);
            tmp_0 = tmp_10(tmp_14 instanceof AnimationVector ? tmp_14 : THROW_CCE());
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    var velocity = tmp_0;
    AppyxLogger_getInstance().v_cvrl3x_k$('MotionProperty', 'Calculated velocity: ' + velocity);
    return velocity;
  }
  function insertVisibilityThreshold($this, animationSpec) {
    var tmp;
    if (animationSpec instanceof SpringSpec) {
      var tmp0_stiffness = animationSpec.get_stiffness_dt2sgm_k$();
      var tmp1_dampingRatio = animationSpec.get_dampingRatio_syjss2_k$();
      var tmp2_visibilityThreshold = $this.visibilityThreshold_1;
      tmp = spring(tmp1_dampingRatio, tmp0_stiffness, tmp2_visibilityThreshold);
    } else {
      tmp = animationSpec;
    }
    return tmp;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.MillisToNanos_1 = new Long(1000000, 0);
  }
  protoOf(Companion_6).get_MillisToNanos_of436d_k$ = function () {
    return this.MillisToNanos_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_12() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function get_$stableprop_26() {
    return 8;
  }
  function MotionProperty$renderValueFlow$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MotionProperty$renderValueFlow$slambda).invoke_smh2mk_k$ = function (displacement, value, $completion) {
    var tmp = this.create_l5bgmy_k$(displacement, value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MotionProperty$renderValueFlow$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE();
    return this.invoke_smh2mk_k$(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(MotionProperty$renderValueFlow$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return this.this$0__1.calculateRenderValue_3a9ezj_k$(this.value_1, this.displacement_1);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MotionProperty$renderValueFlow$slambda).create_l5bgmy_k$ = function (displacement, value, completion) {
    var i = new MotionProperty$renderValueFlow$slambda(this.this$0__1, completion);
    i.displacement_1 = displacement;
    i.value_1 = value;
    return i;
  };
  function MotionProperty$renderValueFlow$slambda_0(this$0, resultContinuation) {
    var i = new MotionProperty$renderValueFlow$slambda(this$0, resultContinuation);
    var l = function (displacement, value, $completion) {
      return i.invoke_smh2mk_k$(displacement, value, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function MotionProperty$animateTo$lambda($this$null) {
    return Unit_getInstance();
  }
  function MotionProperty$animateTo$lambda_0($block, this$0) {
    return function ($this$animateTo) {
      $block($this$animateTo);
      AppyxLogger_getInstance().d_3t63e7_k$('MotionProperty', 'Value = ' + this$0.animatable_1.get_value_j01efc_k$() + ', Velocity = ' + this$0.animatable_1.get_velocity_3hqvmu_k$() + ')');
      this$0.lastVelocity_1 = this$0.animatable_1.get_velocity_3hqvmu_k$();
      this$0.previousVelocity_1 = this$0.animatable_1.get_velocity_3hqvmu_k$();
      onValueChanged(this$0);
      return Unit_getInstance();
    };
  }
  function $snapToCOROUTINE$11(_this__u8e3s4, targetValue, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.targetValue_1 = targetValue;
  }
  protoOf($snapToCOROUTINE$11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this._this__u8e3s4__1.previousVelocity_1 = this._this__u8e3s4__1.lastVelocity_1;
            this._this__u8e3s4__1.lastVelocity_1 = calculateVelocity(this._this__u8e3s4__1, this.targetValue_1);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.animatable_1.snapTo_fkfduh_k$(this.targetValue_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            onValueChanged(this._this__u8e3s4__1);
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
  function $animateToCOROUTINE$12(_this__u8e3s4, targetValue, animationSpec, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.targetValue_1 = targetValue;
    this.animationSpec_1 = animationSpec;
    this.block_1 = block;
  }
  protoOf($animateToCOROUTINE$12).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.animationSpec10__1 = insertVisibilityThreshold(this._this__u8e3s4__1, this.animationSpec_1);
            AppyxLogger_getInstance().d_3t63e7_k$('MotionProperty', 'Starting with initialVelocity = ' + this._this__u8e3s4__1.previousVelocity_1);
            l$ret$1: do {
              var tmp0_update = this._this__u8e3s4__1._isAnimatingFlow_1;
              while (true) {
                var prevValue = tmp0_update.get_value_j01efc_k$();
                var nextValue = !equals(this.targetValue_1, this._this__u8e3s4__1.get_internalValue_suj1cb_k$());
                if (tmp0_update.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
                  break l$ret$1;
                }
              }
            }
             while (false);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this._this__u8e3s4__1.previousVelocity_1;
            suspendResult = this._this__u8e3s4__1.animatable_1.animateTo_h218fu_k$(this.targetValue_1, this.animationSpec10__1, tmp_0, MotionProperty$animateTo$lambda_0(this.block_1, this._this__u8e3s4__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            l$ret$3: do {
              var tmp1_update = this._this__u8e3s4__1._isAnimatingFlow_1;
              while (true) {
                var prevValue_0 = tmp1_update.get_value_j01efc_k$();
                var nextValue_0 = !equals(result.get_endState_3g6vgh_k$().get_value_j01efc_k$(), this.targetValue_1);
                if (tmp1_update.compareAndSet_fjyiiu_k$(prevValue_0, nextValue_0)) {
                  break l$ret$3;
                }
              }
            }
             while (false);
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
  function MotionProperty(coroutineScope, animatable, easing, visibilityThreshold, displacement) {
    Companion_getInstance_12();
    easing = easing === VOID ? null : easing;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.coroutineScope_1 = coroutineScope;
    this.animatable_1 = animatable;
    this.easing_1 = easing;
    this.visibilityThreshold_1 = visibilityThreshold;
    this.displacement_1 = displacement;
    this.lastVelocity_1 = this.animatable_1.get_velocity_3hqvmu_k$();
    this.previousVelocity_1 = this.animatable_1.get_velocity_3hqvmu_k$();
    this.lastTime_1 = new Long(0, 0);
    this.internalValueFlow_1 = MutableStateFlow(this.animatable_1.get_value_j01efc_k$());
    var tmp = this;
    tmp.renderValueFlow_1 = stateIn(combine(this.displacement_1, this.internalValueFlow_1, MotionProperty$renderValueFlow$slambda_0(this, null)), this.coroutineScope_1, Companion_getInstance().get_Eagerly_3vw7yc_k$(), this.internalValueFlow_1.get_value_j01efc_k$());
    this._isAnimatingFlow_1 = MutableStateFlow(false);
    this.isVisibleFlow_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(MotionProperty).get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  protoOf(MotionProperty).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(MotionProperty).get_internalValue_suj1cb_k$ = function () {
    return this.animatable_1.get_value_j01efc_k$();
  };
  protoOf(MotionProperty).get_renderValueFlow_lphgg_k$ = function () {
    return this.renderValueFlow_1;
  };
  protoOf(MotionProperty).get_renderValue_d63bam_k$ = function () {
    return this.renderValueFlow_1.get_value_j01efc_k$();
  };
  protoOf(MotionProperty).get_isAnimating_j5dmvp_k$ = function () {
    return this._isAnimatingFlow_1;
  };
  protoOf(MotionProperty).get_isVisibleFlow_mdrapf_k$ = function () {
    return this.isVisibleFlow_1;
  };
  protoOf(MotionProperty).easingTransform_phctz8_k$ = function (priority, fraction) {
    var tmp1_elvis_lhs = priority == null ? this.easing_1 : priority;
    var resolved = tmp1_elvis_lhs == null ? get_LinearEasing() : tmp1_elvis_lhs;
    return resolved.transform_mzom4i_k$(fraction);
  };
  protoOf(MotionProperty).easingTransform$default_tul3p2_k$ = function (priority, fraction, $super) {
    priority = priority === VOID ? null : priority;
    return $super === VOID ? this.easingTransform_phctz8_k$(priority, fraction) : $super.easingTransform_phctz8_k$.call(this, priority, fraction);
  };
  protoOf(MotionProperty).snapTo_fkfduh_k$ = function (targetValue, $completion) {
    var tmp = new $snapToCOROUTINE$11(this, targetValue, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MotionProperty).animateTo_p33olm_k$ = function (targetValue, animationSpec, block, $completion) {
    var tmp = new $animateToCOROUTINE$12(this, targetValue, animationSpec, block, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MotionProperty).animateTo$default_3sgzyg_k$ = function (targetValue, animationSpec, block, $completion, $super) {
    var tmp;
    if (block === VOID) {
      tmp = MotionProperty$animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    return $super === VOID ? this.animateTo_p33olm_k$(targetValue, animationSpec, block, $completion) : $super.animateTo_p33olm_k$.call(this, targetValue, animationSpec, block, $completion);
  };
  function get_$stableprop_27() {
    return 0;
  }
  function Target_0(value, easing) {
    easing = easing === VOID ? null : easing;
    this.value_1 = value;
    this.easing_1 = easing;
    this.$stable_1 = 0;
  }
  protoOf(Target_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Target_0).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  function get_$stableprop_28() {
    return 8;
  }
  function Alpha$isVisibleFlow$lambda(it) {
    return it > 0.0;
  }
  function Alpha$_get_modifier_$lambda_3nlvw1(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(1892018111);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1892018111, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.Alpha.<get-modifier>.<anonymous> (Alpha.kt:45)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = this$0.get_renderValueFlow_lphgg_k$();
      var tmp0 = alpha($this$composed, collectAsState$composable(tmp_0, null, $composer_0, 0, 1).get_value_j01efc_k$());
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function Alpha(coroutineScope, target, visibilityThreshold, displacement) {
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    displacement = displacement === VOID ? MutableStateFlow(0.0) : displacement;
    MotionProperty.call(this, coroutineScope, Animatable(target.value_1), target.easing_1, visibilityThreshold, displacement);
    var tmp = this;
    var tmp_0 = this.get_renderValueFlow_lphgg_k$();
    tmp.isVisibleFlow_2 = mapState(tmp_0, coroutineScope, VOID, Alpha$isVisibleFlow$lambda);
    this.$stable_2 = 8;
  }
  protoOf(Alpha).get_isVisibleFlow_mdrapf_k$ = function () {
    return this.isVisibleFlow_2;
  };
  protoOf(Alpha).calculateRenderValue_low8jv_k$ = function (base, displacement) {
    return base - displacement;
  };
  protoOf(Alpha).calculateRenderValue_3a9ezj_k$ = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.calculateRenderValue_low8jv_k$(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(Alpha).get_modifier_t1pq5c_k$ = function () {
    var tmp = Companion_getInstance_2();
    return composed$composable(tmp, VOID, Alpha$_get_modifier_$lambda_3nlvw1(this));
  };
  protoOf(Alpha).lerpTo_udm63t_k$ = function (start, end, fraction, $completion) {
    return this.snapTo_fkfduh_k$(lerpFloat(start.value_1, end.value_1, this.easingTransform_phctz8_k$(end.easing_1, fraction)), $completion);
  };
  protoOf(Alpha).lerpTo_fsjbdr_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof Target_0 ? start : THROW_CCE();
    return this.lerpTo_udm63t_k$(tmp, end instanceof Target_0 ? end : THROW_CCE(), fraction, $completion);
  };
  function get_$stableprop_29() {
    return 0;
  }
  function Target_1(value, easing) {
    easing = easing === VOID ? null : easing;
    this.value_1 = value;
    this.easing_1 = easing;
    this.$stable_1 = 0;
  }
  protoOf(Target_1).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Target_1).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  function get_$stableprop_30() {
    return 0;
  }
  function ColorOverlay$_get_modifier_$lambda$lambda_d7jkyd(this$0, $alpha) {
    return function ($this$drawWithContent) {
      $this$drawWithContent.drawContent_m0d3yc_k$();
      $this$drawWithContent.drawRect$default_agcbs4_k$(Color__copy$default_impl_ectz3s(this$0.color_1, $alpha));
      return Unit_getInstance();
    };
  }
  function ColorOverlay$_get_modifier_$lambda_kerwsg(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(246610499);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(246610499, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.ColorOverlay.<get-modifier>.<anonymous> (ColorOverlay.kt:41)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = this$0.get_renderValueFlow_lphgg_k$();
      var alpha = collectAsState$composable(tmp_0, null, $composer_0, 0, 1).get_value_j01efc_k$();
      var tmp_1;
      if (alpha > 0) {
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = !!($composer_1.changed_ga7h3f_k$(this$0) | $composer_1.changed_ga7h3f_k$(alpha));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.bumble.appyx.interactions.core.ui.property.impl.ColorOverlay.<get-modifier>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ColorOverlay$_get_modifier_$lambda$lambda_d7jkyd(this$0, alpha);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$1 = tmp_2;
        tmp$ret$2 = tmp$ret$1;
        var tmp_3 = tmp$ret$2;
        tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        tmp_1 = drawWithContent($this$composed, tmp$ret$4);
      } else {
        tmp_1 = $this$composed;
      }
      var tmp1_group = tmp_1;
      var tmp0_0 = tmp1_group;
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_0;
    };
  }
  function ColorOverlay(coroutineScope, target, color, visibilityThreshold, displacement) {
    color = color === VOID ? Companion_getInstance_3().get_Black_wh3yn9_k$() : color;
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    displacement = displacement === VOID ? MutableStateFlow(0.0) : displacement;
    MotionProperty.call(this, coroutineScope, Animatable(target.value_1), target.easing_1, visibilityThreshold, displacement);
    this.color_1 = color;
    this.$stable_2 = 0;
  }
  protoOf(ColorOverlay).get_color_v34vrz_k$ = function () {
    return this.color_1;
  };
  protoOf(ColorOverlay).calculateRenderValue_low8jv_k$ = function (base, displacement) {
    return base - displacement;
  };
  protoOf(ColorOverlay).calculateRenderValue_3a9ezj_k$ = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.calculateRenderValue_low8jv_k$(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(ColorOverlay).get_modifier_t1pq5c_k$ = function () {
    var tmp = Companion_getInstance_2();
    return composed$composable(tmp, VOID, ColorOverlay$_get_modifier_$lambda_kerwsg(this));
  };
  protoOf(ColorOverlay).lerpTo_udm63t_k$ = function (start, end, fraction, $completion) {
    return this.snapTo_fkfduh_k$(lerpFloat(start.value_1, end.value_1, this.easingTransform_phctz8_k$(end.easing_1, fraction)), $completion);
  };
  protoOf(ColorOverlay).lerpTo_fsjbdr_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof Target_1 ? start : THROW_CCE();
    return this.lerpTo_udm63t_k$(tmp, end instanceof Target_1 ? end : THROW_CCE(), fraction, $completion);
  };
  function _Target___init__impl__g9wueo(value) {
    return value;
  }
  function _Target___get_value__impl__453uqk($this) {
    return $this;
  }
  function Target__toString_impl_eyqw4w($this) {
    return 'Target(value=' + $this + ')';
  }
  function Target__hashCode_impl_6sf0nz($this) {
    return getNumberHashCode($this);
  }
  function Target__equals_impl_sqrqtf($this, other) {
    if (!(other instanceof Target_2))
      return false;
    var tmp0_other_with_cast = other instanceof Target_2 ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Target_2(value) {
    this.value_1 = value;
  }
  protoOf(Target_2).toString = function () {
    return Target__toString_impl_eyqw4w(this.value_1);
  };
  protoOf(Target_2).hashCode = function () {
    return Target__hashCode_impl_6sf0nz(this.value_1);
  };
  protoOf(Target_2).equals = function (other) {
    return Target__equals_impl_sqrqtf(this.value_1, other);
  };
  function get_$stableprop_31() {
    return 0;
  }
  function GenericFloatProperty(coroutineScope, target, displacement) {
    displacement = displacement === VOID ? MutableStateFlow(0.0) : displacement;
    MotionProperty.call(this, coroutineScope, Animatable(_Target___get_value__impl__453uqk(target)), VOID, VOID, displacement);
    this.$stable_2 = 0;
  }
  protoOf(GenericFloatProperty).calculateRenderValue_low8jv_k$ = function (base, displacement) {
    return base - displacement;
  };
  protoOf(GenericFloatProperty).calculateRenderValue_3a9ezj_k$ = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.calculateRenderValue_low8jv_k$(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(GenericFloatProperty).get_modifier_t1pq5c_k$ = function () {
    return Companion_getInstance_2();
  };
  protoOf(GenericFloatProperty).lerpTo_23m32h_k$ = function (start, end, fraction, $completion) {
    return this.snapTo_fkfduh_k$(lerpFloat(start.get_internalValue_suj1cb_k$(), end.get_internalValue_suj1cb_k$(), this.easingTransform_phctz8_k$(end.get_easing_cqnn04_k$(), fraction)), $completion);
  };
  protoOf(GenericFloatProperty).lerpTo_fsjbdr_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof GenericFloatProperty ? start : THROW_CCE();
    return this.lerpTo_23m32h_k$(tmp, end instanceof GenericFloatProperty ? end : THROW_CCE(), fraction, $completion);
  };
  function get_$stableprop_32() {
    return 0;
  }
  function Target_3(value, easing) {
    easing = easing === VOID ? null : easing;
    this.value_1 = value;
    this.easing_1 = easing;
    this.$stable_1 = 0;
  }
  protoOf(Target_3).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Target_3).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  function get_$stableprop_33() {
    return 0;
  }
  function Shadow$_get_modifier_$lambda_ajkudp(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(1041413789);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1041413789, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.Shadow.<get-modifier>.<anonymous> (Shadow.kt:40)');
        tmp = Unit_getInstance();
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_0 = this$0.get_renderValueFlow_lphgg_k$();
      var tmp0_get_dp_bnsrxl = collectAsState$composable(tmp_0, null, $composer_0, 0, 1).get_value_j01efc_k$();
      tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0_get_dp_bnsrxl);
      var tmp0 = shadow($this$composed, tmp$ret$0, VOID, false);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0;
    };
  }
  function Shadow(coroutineScope, target, visibilityThreshold, displacement) {
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    displacement = displacement === VOID ? MutableStateFlow(0.0) : displacement;
    MotionProperty.call(this, coroutineScope, Animatable(target.value_1), target.easing_1, visibilityThreshold, displacement);
    this.$stable_2 = 0;
  }
  protoOf(Shadow).calculateRenderValue_low8jv_k$ = function (base, displacement) {
    return base - displacement;
  };
  protoOf(Shadow).calculateRenderValue_3a9ezj_k$ = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.calculateRenderValue_low8jv_k$(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(Shadow).get_modifier_t1pq5c_k$ = function () {
    var tmp = Companion_getInstance_2();
    return composed$composable(tmp, VOID, Shadow$_get_modifier_$lambda_ajkudp(this));
  };
  protoOf(Shadow).lerpTo_udm63t_k$ = function (start, end, fraction, $completion) {
    return this.snapTo_fkfduh_k$(lerpFloat(start.value_1, end.value_1, this.easingTransform_phctz8_k$(end.easing_1, fraction)), $completion);
  };
  protoOf(Shadow).lerpTo_fsjbdr_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof Target_3 ? start : THROW_CCE();
    return this.lerpTo_udm63t_k$(tmp, end instanceof Target_3 ? end : THROW_CCE(), fraction, $completion);
  };
  function OutsideAlignment_init_$Init$(horizontalBias, verticalBias, $this) {
    OutsideAlignment.call($this, horizontalBias, verticalBias);
    return $this;
  }
  function OutsideAlignment_init_$Create$(horizontalBias, verticalBias) {
    return OutsideAlignment_init_$Init$(horizontalBias, verticalBias, objectCreate(protoOf(OutsideAlignment)));
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.InContainer_1 = new OutsideAlignment(0.0, 0.0);
    this.OutsideLeft_1 = new OutsideAlignment(-1.0, 0.0);
    this.OutsideTopLeft_1 = new OutsideAlignment(-1.0, -1.0);
    this.OutsideBottomLeft_1 = new OutsideAlignment(-1.0, 1.0);
    this.OutsideRight_1 = new OutsideAlignment(1.0, 0.0);
    this.OutsideBottomRight_1 = new OutsideAlignment(1.0, 1.0);
    this.OutsideTopRight_1 = new OutsideAlignment(1.0, -1.0);
    this.OutsideBottom_1 = new OutsideAlignment(0.0, 1.0);
    this.OutsideTop_1 = new OutsideAlignment(0.0, -1.0);
  }
  protoOf(Companion_7).get_InContainer_lzd7x_k$ = function () {
    return this.InContainer_1;
  };
  protoOf(Companion_7).get_OutsideLeft_1pgmo3_k$ = function () {
    return this.OutsideLeft_1;
  };
  protoOf(Companion_7).get_OutsideTopLeft_gfv51c_k$ = function () {
    return this.OutsideTopLeft_1;
  };
  protoOf(Companion_7).get_OutsideBottomLeft_sscj2m_k$ = function () {
    return this.OutsideBottomLeft_1;
  };
  protoOf(Companion_7).get_OutsideRight_i0f76o_k$ = function () {
    return this.OutsideRight_1;
  };
  protoOf(Companion_7).get_OutsideBottomRight_uwaydn_k$ = function () {
    return this.OutsideBottomRight_1;
  };
  protoOf(Companion_7).get_OutsideTopRight_ccnm9p_k$ = function () {
    return this.OutsideTopRight_1;
  };
  protoOf(Companion_7).get_OutsideBottom_2emm07_k$ = function () {
    return this.OutsideBottom_1;
  };
  protoOf(Companion_7).get_OutsideTop_tubp5l_k$ = function () {
    return this.OutsideTop_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_13() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function get_$stableprop_34() {
    return 0;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.TopStart_1 = new InsideAlignment(-1.0, -1.0);
    this.TopCenter_1 = new InsideAlignment(0.0, -1.0);
    this.TopEnd_1 = new InsideAlignment(1.0, -1.0);
    this.CenterStart_1 = new InsideAlignment(-1.0, 0.0);
    this.Center_1 = new InsideAlignment(0.0, 0.0);
    this.CenterEnd_1 = new InsideAlignment(1.0, 0.0);
    this.BottomStart_1 = new InsideAlignment(-1.0, 1.0);
    this.BottomCenter_1 = new InsideAlignment(0.0, 1.0);
    this.BottomEnd_1 = new InsideAlignment(1.0, 1.0);
  }
  protoOf(Companion_8).fractionAlignment_e1vypr_k$ = function (horizontalBiasFraction, verticalBiasFraction) {
    return new InsideAlignment(-1.0 + horizontalBiasFraction * 2.0, -1.0 + verticalBiasFraction * 2.0);
  };
  protoOf(Companion_8).get_TopStart_o4x792_k$ = function () {
    return this.TopStart_1;
  };
  protoOf(Companion_8).get_TopCenter_u4q5vl_k$ = function () {
    return this.TopCenter_1;
  };
  protoOf(Companion_8).get_TopEnd_4wiiy7_k$ = function () {
    return this.TopEnd_1;
  };
  protoOf(Companion_8).get_CenterStart_2305fg_k$ = function () {
    return this.CenterStart_1;
  };
  protoOf(Companion_8).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion_8).get_CenterEnd_uti4xp_k$ = function () {
    return this.CenterEnd_1;
  };
  protoOf(Companion_8).get_BottomStart_v81qpa_k$ = function () {
    return this.BottomStart_1;
  };
  protoOf(Companion_8).get_BottomCenter_yatb1z_k$ = function () {
    return this.BottomCenter_1;
  };
  protoOf(Companion_8).get_BottomEnd_ayz0tj_k$ = function () {
    return this.BottomEnd_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_14() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function get_$stableprop_35() {
    return 0;
  }
  function OutsideAlignment(horizontalBias, verticalBias) {
    Companion_getInstance_13();
    BiasAlignment.call(this, horizontalBias, verticalBias);
    this.horizontalBias_2 = horizontalBias;
    this.verticalBias_2 = verticalBias;
    this.$stable_2 = 0;
  }
  protoOf(OutsideAlignment).get_horizontalBias_8pmneu_k$ = function () {
    return this.horizontalBias_2;
  };
  protoOf(OutsideAlignment).get_verticalBias_3xoql4_k$ = function () {
    return this.verticalBias_2;
  };
  protoOf(OutsideAlignment).align_f85h4l_k$ = function (size, space, layoutDirection) {
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = this.horizontalBias_2 * _IntSize___get_width__impl__d9yl4o(space);
    var tmp = roundToInt(tmp0_roundToInt);
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = this.verticalBias_2 * _IntSize___get_height__impl__prv63b(space);
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return IntOffset(tmp, tmp$ret$1);
  };
  function InsideAlignment(horizontalBias, verticalBias) {
    Companion_getInstance_14();
    BiasAlignment.call(this, horizontalBias, verticalBias);
    this.horizontalBias_2 = horizontalBias;
    this.verticalBias_2 = verticalBias;
    this.$stable_2 = 0;
  }
  protoOf(InsideAlignment).get_horizontalBias_8pmneu_k$ = function () {
    return this.horizontalBias_2;
  };
  protoOf(InsideAlignment).get_verticalBias_3xoql4_k$ = function () {
    return this.verticalBias_2;
  };
  protoOf(InsideAlignment).align_f85h4l_k$ = function (size, space, layoutDirection) {
    var centerX = (_IntSize___get_width__impl__d9yl4o(space) - _IntSize___get_width__impl__d9yl4o(size) | 0) / 2.0;
    var centerY = (_IntSize___get_height__impl__prv63b(space) - _IntSize___get_height__impl__prv63b(size) | 0) / 2.0;
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = this.horizontalBias_2;
    } else {
      tmp = -1 * this.horizontalBias_2;
    }
    var resolvedHorizontalBias = tmp;
    var x = centerX * (1 + resolvedHorizontalBias);
    var y = centerY * (1 + this.verticalBias_2);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp_0 = roundToInt(x);
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    tmp$ret$1 = roundToInt(y);
    return IntOffset(tmp_0, tmp$ret$1);
  };
  function get_$stableprop_36() {
    return 0;
  }
  function BiasAlignment(horizontalBias, verticalBias) {
    this.horizontalBias_1 = horizontalBias;
    this.verticalBias_1 = verticalBias;
    this.$stable_1 = 0;
  }
  protoOf(BiasAlignment).get_horizontalBias_8pmneu_k$ = function () {
    return this.horizontalBias_1;
  };
  protoOf(BiasAlignment).get_verticalBias_3xoql4_k$ = function () {
    return this.verticalBias_1;
  };
  function PositionAlignment$Value$Companion$VectorConverter$lambda(it) {
    return new AnimationVector4D(it.insideAlignment_1.get_horizontalBias_8pmneu_k$(), it.insideAlignment_1.get_verticalBias_3xoql4_k$(), it.outsideAlignment_1.get_horizontalBias_8pmneu_k$(), it.outsideAlignment_1.get_verticalBias_3xoql4_k$());
  }
  function PositionAlignment$Value$Companion$VectorConverter$lambda_0(it) {
    return new Value(new InsideAlignment(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()), new OutsideAlignment(it.get_v3_kntnne_k$(), it.get_v4_kntnnd_k$()));
  }
  function Companion_9() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = PositionAlignment$Value$Companion$VectorConverter$lambda;
    tmp.VectorConverter_1 = TwoWayConverter(tmp_0, PositionAlignment$Value$Companion$VectorConverter$lambda_0);
    this.Zero_1 = new Value(new InsideAlignment(0.0, 0.0));
  }
  protoOf(Companion_9).get_VectorConverter_lxn6ac_k$ = function () {
    return this.VectorConverter_1;
  };
  protoOf(Companion_9).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_15() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function get_$stableprop_37() {
    return 0;
  }
  function Target_init_$Init$($this) {
    Target_4.call($this, new Value(Companion_getInstance_14().get_TopStart_o4x792_k$(), Companion_getInstance_13().get_InContainer_lzd7x_k$()));
    return $this;
  }
  function Target_init_$Create$() {
    return Target_init_$Init$(objectCreate(protoOf(Target_4)));
  }
  function Target_init_$Init$_0(outsideAlignment, $this) {
    Target_4.call($this, new Value(Companion_getInstance_14().get_TopStart_o4x792_k$(), outsideAlignment));
    return $this;
  }
  function Target_init_$Create$_0(outsideAlignment) {
    return Target_init_$Init$_0(outsideAlignment, objectCreate(protoOf(Target_4)));
  }
  function Target_init_$Init$_1(insideAlignment, $this) {
    Target_4.call($this, new Value(insideAlignment, Companion_getInstance_13().get_InContainer_lzd7x_k$()));
    return $this;
  }
  function Target_init_$Create$_1(insideAlignment) {
    return Target_init_$Init$_1(insideAlignment, objectCreate(protoOf(Target_4)));
  }
  function Target_init_$Init$_2(insideAlignment, outsideAlignment, $this) {
    Target_4.call($this, new Value(insideAlignment, outsideAlignment));
    return $this;
  }
  function Target_init_$Create$_2(insideAlignment, outsideAlignment) {
    return Target_init_$Init$_2(insideAlignment, outsideAlignment, objectCreate(protoOf(Target_4)));
  }
  function get_$stableprop_38() {
    return 0;
  }
  function Value(insideAlignment, outsideAlignment) {
    Companion_getInstance_15();
    insideAlignment = insideAlignment === VOID ? Companion_getInstance_14().get_TopStart_o4x792_k$() : insideAlignment;
    outsideAlignment = outsideAlignment === VOID ? Companion_getInstance_13().get_InContainer_lzd7x_k$() : outsideAlignment;
    this.insideAlignment_1 = insideAlignment;
    this.outsideAlignment_1 = outsideAlignment;
    this.$stable_1 = 0;
  }
  protoOf(Value).get_insideAlignment_d508ym_k$ = function () {
    return this.insideAlignment_1;
  };
  protoOf(Value).get_outsideAlignment_jsp8jr_k$ = function () {
    return this.outsideAlignment_1;
  };
  protoOf(Value).align_f85h4l_k$ = function (size, space, layoutDirection) {
    // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
    var tmp0_plus = this.insideAlignment_1.align_f85h4l_k$(size, space, layoutDirection);
    var tmp1_plus = this.outsideAlignment_1.align_f85h4l_k$(size, space, layoutDirection);
    return IntOffset(_IntOffset___get_x__impl__qiqr5o(tmp0_plus) + _IntOffset___get_x__impl__qiqr5o(tmp1_plus) | 0, _IntOffset___get_y__impl__2avpwj(tmp0_plus) + _IntOffset___get_y__impl__2avpwj(tmp1_plus) | 0);
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.insideAlignment_1;
  };
  protoOf(Value).component2_7eebsb_k$ = function () {
    return this.outsideAlignment_1;
  };
  protoOf(Value).copy_akch9s_k$ = function (insideAlignment, outsideAlignment) {
    return new Value(insideAlignment, outsideAlignment);
  };
  protoOf(Value).copy$default_fj6s66_k$ = function (insideAlignment, outsideAlignment, $super) {
    insideAlignment = insideAlignment === VOID ? this.insideAlignment_1 : insideAlignment;
    outsideAlignment = outsideAlignment === VOID ? this.outsideAlignment_1 : outsideAlignment;
    return $super === VOID ? this.copy_akch9s_k$(insideAlignment, outsideAlignment) : $super.copy_akch9s_k$.call(this, insideAlignment, outsideAlignment);
  };
  protoOf(Value).toString = function () {
    return 'Value(insideAlignment=' + this.insideAlignment_1 + ', outsideAlignment=' + this.outsideAlignment_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    var result = hashCode(this.insideAlignment_1);
    result = imul(result, 31) + hashCode(this.outsideAlignment_1) | 0;
    return result;
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!equals(this.insideAlignment_1, tmp0_other_with_cast.insideAlignment_1))
      return false;
    if (!equals(this.outsideAlignment_1, tmp0_other_with_cast.outsideAlignment_1))
      return false;
    return true;
  };
  function Target_4(value, easing) {
    easing = easing === VOID ? null : easing;
    this.value_1 = value;
    this.easing_1 = easing;
    this.$stable_1 = 0;
  }
  protoOf(Target_4).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Target_4).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  function get_$stableprop_39() {
    return 0;
  }
  function PositionAlignment$_get_modifier_$lambda_ubt1ir(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-1716707306);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1716707306, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.position.PositionAlignment.<get-modifier>.<anonymous> (PositionAlignment.kt:140)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = this$0.get_renderValueFlow_lphgg_k$();
      var value = collectAsState$composable(tmp_0, null, $composer_0, 0, 1);
      var tmp$ret$3;
      // Inline function 'kotlin.requireNotNull' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalBoxScope();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var tmp2_requireNotNull = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        if (tmp2_requireNotNull == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.requireNotNull.<anonymous>' call
          tmp$ret$1 = 'Required value was null.';
          var message = tmp$ret$1;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$2 = tmp2_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$3 = tmp$ret$2;
      var boxScope = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'com.bumble.appyx.interactions.core.ui.property.impl.position.PositionAlignment.<get-modifier>.<anonymous>.<anonymous>' call
      var tmp0_return = boxScope.align_eg370n_k$($this$composed, value.get_value_j01efc_k$());
      tmp$ret$4 = tmp0_return;
      tmp$ret$5 = tmp$ret$4;
      var tmp0_0 = tmp$ret$5;
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_0;
    };
  }
  function PositionAlignment(coroutineScope, target, displacement, visibilityThreshold) {
    displacement = displacement === VOID ? MutableStateFlow(Companion_getInstance_15().Zero_1) : displacement;
    visibilityThreshold = visibilityThreshold === VOID ? new Value(new InsideAlignment(0.001, 0.001), new OutsideAlignment(0.001, 0.001)) : visibilityThreshold;
    MotionProperty.call(this, coroutineScope, new Animatable_0(target.value_1, Companion_getInstance_15().VectorConverter_1), target.easing_1, visibilityThreshold, displacement);
    this.target_1 = target;
    this.$stable_2 = 0;
  }
  protoOf(PositionAlignment).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(PositionAlignment).calculateRenderValue_kf1v05_k$ = function (base, displacement) {
    return new Value(new InsideAlignment(base.insideAlignment_1.get_horizontalBias_8pmneu_k$() - displacement.insideAlignment_1.get_horizontalBias_8pmneu_k$(), base.insideAlignment_1.get_verticalBias_3xoql4_k$() - displacement.insideAlignment_1.get_verticalBias_3xoql4_k$()), new OutsideAlignment(base.outsideAlignment_1.get_horizontalBias_8pmneu_k$() - displacement.outsideAlignment_1.get_horizontalBias_8pmneu_k$(), base.outsideAlignment_1.get_verticalBias_3xoql4_k$() - displacement.outsideAlignment_1.get_verticalBias_3xoql4_k$()));
  };
  protoOf(PositionAlignment).calculateRenderValue_3a9ezj_k$ = function (base, displacement) {
    var tmp = base instanceof Value ? base : THROW_CCE();
    return this.calculateRenderValue_kf1v05_k$(tmp, displacement instanceof Value ? displacement : THROW_CCE());
  };
  protoOf(PositionAlignment).get_modifier_t1pq5c_k$ = function () {
    var tmp = Companion_getInstance_2();
    return composed$composable(tmp, VOID, PositionAlignment$_get_modifier_$lambda_ubt1ir(this));
  };
  protoOf(PositionAlignment).lerpTo_32zno9_k$ = function (start, end, fraction, $completion) {
    var progress = this.easingTransform_phctz8_k$(end.easing_1, fraction);
    return this.snapTo_fkfduh_k$(new Value(new InsideAlignment(lerpFloat(start.value_1.insideAlignment_1.get_horizontalBias_8pmneu_k$(), end.value_1.insideAlignment_1.get_horizontalBias_8pmneu_k$(), progress), lerpFloat(start.value_1.insideAlignment_1.get_verticalBias_3xoql4_k$(), end.value_1.insideAlignment_1.get_verticalBias_3xoql4_k$(), progress)), new OutsideAlignment(lerpFloat(start.value_1.outsideAlignment_1.get_horizontalBias_8pmneu_k$(), end.value_1.outsideAlignment_1.get_horizontalBias_8pmneu_k$(), progress), lerpFloat(start.value_1.outsideAlignment_1.get_verticalBias_3xoql4_k$(), end.value_1.outsideAlignment_1.get_verticalBias_3xoql4_k$(), progress))), $completion);
  };
  protoOf(PositionAlignment).lerpTo_fsjbdr_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof Target_4 ? start : THROW_CCE();
    return this.lerpTo_32zno9_k$(tmp, end instanceof Target_4 ? end : THROW_CCE(), fraction, $completion);
  };
  function BaseMutableUiState$isVisible$o$collect$lambda($flowArray) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = $flowArray.length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      return tmp$ret$0;
    };
  }
  function BaseMutableUiState$isVisible$o$collect$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).invoke_l9bav0_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_7xtxnd_k$($this$combineInternal, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_l9bav0_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp$ret$0;
            l$ret$1: do {
              var indexedObject = this.it_1;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var element = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                if (!element) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = true;
            }
             while (false);
            suspendResult = this.$this$combineInternal_1.emit_1fbrsb_k$(tmp$ret$0, this);
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
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).create_7xtxnd_k$ = function ($this$combineInternal, it, completion) {
    var i = new BaseMutableUiState$isVisible$o$collect$slambda(completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function BaseMutableUiState$isVisible$o$collect$slambda_0(resultContinuation) {
    var i = new BaseMutableUiState$isVisible$o$collect$slambda(resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_l9bav0_k$($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$13).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = BaseMutableUiState$isVisible$o$collect$lambda(this._this__u8e3s4__1.$flowArray_1);
            suspendResult = combineInternal(this.collector_1, this._this__u8e3s4__1.$flowArray_1, tmp_0, BaseMutableUiState$isVisible$o$collect$slambda_0(null), this);
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
  function BaseMutableUiState$isAnimating$o$collect$lambda($flowArray) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = $flowArray.length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      return tmp$ret$0;
    };
  }
  function BaseMutableUiState$isAnimating$o$collect$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).invoke_l9bav0_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_7xtxnd_k$($this$combineInternal, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_l9bav0_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp$ret$0;
            l$ret$1: do {
              var indexedObject = this.it_1;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var element = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                if (element) {
                  tmp$ret$0 = true;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = false;
            }
             while (false);
            suspendResult = this.$this$combineInternal_1.emit_1fbrsb_k$(tmp$ret$0, this);
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
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).create_7xtxnd_k$ = function ($this$combineInternal, it, completion) {
    var i = new BaseMutableUiState$isAnimating$o$collect$slambda(completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function BaseMutableUiState$isAnimating$o$collect$slambda_0(resultContinuation) {
    var i = new BaseMutableUiState$isAnimating$o$collect$slambda(resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_l9bav0_k$($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$14).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = BaseMutableUiState$isAnimating$o$collect$lambda(this._this__u8e3s4__1.$flowArray_1);
            suspendResult = combineInternal(this.collector_1, this._this__u8e3s4__1.$flowArray_1, tmp_0, BaseMutableUiState$isAnimating$o$collect$slambda_0(null), this);
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
  function _set_containerRect__x6kco0($this, _set____db54di) {
    $this.containerRect_1 = _set____db54di;
  }
  function _get_containerRect__mms6ss($this) {
    return $this.containerRect_1;
  }
  function _get_sizeChangedModifier__qtx0ux($this) {
    return $this.sizeChangedModifier_1;
  }
  function _get__isBoundsVisible__79duhj($this) {
    return $this._isBoundsVisible_1;
  }
  function _get_visibilitySources__j9qea3($this) {
    return $this.visibilitySources_1;
  }
  function isVisibleInParent(_this__u8e3s4, $this) {
    var boundsInParent_0 = boundsInParent(_this__u8e3s4);
    return boundsInParent_0.overlaps_b0bhu4_k$($this.containerRect_1);
  }
  function isVisibleInWindow(_this__u8e3s4, $this) {
    var boundsInWindow_0 = boundsInWindow(_this__u8e3s4);
    return boundsInWindow_0.get_width_j0q4yl_k$() > 0.0 ? boundsInWindow_0.get_height_e7t92o_k$() > 0.0 : false;
  }
  function get_$stableprop_40() {
    return 8;
  }
  function BaseMutableUiState$sizeChangedModifier$lambda(this$0) {
    return function (size) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.flow.update' call
        var tmp0_update = this$0.size_1;
        while (true) {
          var prevValue = tmp0_update.get_value_j01efc_k$().packedValue_1;
          var tmp$ret$0;
          // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.sizeChangedModifier.<anonymous>.<anonymous>' call
          tmp$ret$0 = size.packedValue_1;
          var nextValue = tmp$ret$0;
          if (tmp0_update.compareAndSet_fjyiiu_k$(new IntSize(prevValue), new IntSize(nextValue))) {
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_10($flowArray) {
    this.$flowArray_1 = $flowArray;
  }
  protoOf(_no_name_provided__qut3iv_10).collect_snddeu_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_10).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_snddeu_k$(collector, $completion);
  };
  function BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z($this$graphicsLayer) {
    $this$graphicsLayer.set_alpha_k1tx50_k$(0.0);
    return Unit_getInstance();
  }
  function invoke$lambda($size$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('size', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $size$delegate.get_value_j01efc_k$().packedValue_1;
  }
  function BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_0(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(504107695);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(504107695, $changed, -1, 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.<get-visibilityModifier>.<anonymous> (BaseMutableUiState.kt:85)');
        tmp = Unit_getInstance();
      }
      var size$delegate = collectAsState$composable(this$0.size_1, null, $composer_0, 0, 1);
      var tmp_0;
      if (!equals(invoke$lambda(size$delegate), Companion_getInstance_4().get_Zero_4ip44w_k$())) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
        var tmp1_$get_current$$composable_gn3xww = $composer_0;
        var $composer_1 = tmp1_$get_current$$composable_gn3xww;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
        sourceInformationMarkerEnd($composer_1);
        tmp$ret$0 = tmp0;
        var localDensity = tmp$ret$0.get_density_qy0267_k$();
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp2_get_dp_1q2bx5 = _IntSize___get_width__impl__d9yl4o(invoke$lambda(size$delegate)) / localDensity;
        tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp2_get_dp_1q2bx5);
        var tmp_1 = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp3_get_dp_r3k552 = _IntSize___get_height__impl__prv63b(invoke$lambda(size$delegate)) / localDensity;
        tmp$ret$2 = _Dp___init__impl__ms3zkb(tmp3_get_dp_r3k552);
        tmp_0 = requiredSize($this$composed, DpSize(tmp_1, tmp$ret$2));
      } else {
        tmp_0 = fillMaxSize($this$composed);
      }
      var tmp1_group = tmp_0;
      var tmp0_0 = tmp1_group;
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_0;
    };
  }
  function BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_1(this$0) {
    return function (coordinates) {
      var tmp;
      if (this$0.uiContext_1.get_clipToBounds_snmqix_k$()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlinx.coroutines.flow.update' call
          var tmp0_update = this$0._isBoundsVisible_1;
          while (true) {
            var prevValue = tmp0_update.get_value_j01efc_k$();
            var tmp$ret$0;
            // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.<get-visibilityModifier>.<anonymous>.<anonymous>' call
            tmp$ret$0 = isVisibleInParent(coordinates, this$0) ? isVisibleInWindow(coordinates, this$0) : false;
            var nextValue = tmp$ret$0;
            if (tmp0_update.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
              tmp$ret$1 = Unit_getInstance();
              break $l$block;
            }
          }
        }
        tmp = tmp$ret$1;
      } else {
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.flow.update' call
          var tmp1_update = this$0._isBoundsVisible_1;
          while (true) {
            var prevValue_0 = tmp1_update.get_value_j01efc_k$();
            var tmp$ret$2;
            // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.<get-visibilityModifier>.<anonymous>.<anonymous>' call
            tmp$ret$2 = isVisibleInWindow(coordinates, this$0);
            var nextValue_0 = tmp$ret$2;
            if (tmp1_update.compareAndSet_fjyiiu_k$(prevValue_0, nextValue_0)) {
              tmp$ret$3 = Unit_getInstance();
              break $l$block_0;
            }
          }
        }
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_11($flowArray) {
    this.$flowArray_1 = $flowArray;
  }
  protoOf(_no_name_provided__qut3iv_11).collect_snddeu_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_11).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_snddeu_k$(collector, $completion);
  };
  function BaseMutableUiState(uiContext, motionProperties) {
    this.uiContext_1 = uiContext;
    this.motionProperties_1 = motionProperties;
    this.containerRect_1 = Rect(Companion_getInstance_0().get_Zero_sctq3f_k$(), Size(0.0, 0.0));
    var tmp = this;
    var tmp_0 = Companion_getInstance_2();
    tmp.sizeChangedModifier_1 = onSizeChanged(tmp_0, BaseMutableUiState$sizeChangedModifier$lambda(this));
    this._isBoundsVisible_1 = MutableStateFlow(false);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0_mapNotNull = this.motionProperties_1;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = tmp0_mapNotNull.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.visibilitySources.<anonymous>' call
      var tmp0_safe_receiver = element.get_isVisibleFlow_mdrapf_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver);
      }
    }
    tmp_1.visibilitySources_1 = plus_1(tmp0_mapNotNullTo, this._isBoundsVisible_1);
    this.size_1 = MutableStateFlow(new IntSize(Companion_getInstance_4().get_Zero_4ip44w_k$()));
    var tmp_2 = this;
    // Inline function 'com.bumble.appyx.combineState' call
    var tmp0_combineState = this.visibilitySources_1;
    var tmp1_combineState = this.uiContext_1.get_coroutineScope_5k7h45_k$();
    var tmp2_combineState = Companion_getInstance().get_Eagerly_3vw7yc_k$();
    // Inline function 'kotlinx.coroutines.flow.combine' call
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = toList(tmp0_combineState);
    var flowArray = copyToArray(tmp0_toTypedArray);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp_3 = new _no_name_provided__qut3iv_10(flowArray);
    var tmp$ret$13;
    // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.isVisible.<anonymous>' call
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_combineState, 10));
    var tmp0_iterator_0 = tmp0_combineState.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$7;
      // Inline function 'com.bumble.appyx.combineState.<anonymous>' call
      tmp$ret$7 = item.get_value_j01efc_k$();
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$7);
    }
    var tmp3_anonymous = copyToArray(tmp0_mapTo);
    var tmp$ret$12;
    $l$block: {
      // Inline function 'kotlin.collections.all' call
      var inductionVariable = 0;
      var last = tmp3_anonymous.length;
      while (inductionVariable < last) {
        var element_0 = tmp3_anonymous[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.isVisible.<anonymous>.<anonymous>' call
        if (!element_0) {
          tmp$ret$12 = false;
          break $l$block;
        }
      }
      tmp$ret$12 = true;
    }
    tmp$ret$13 = tmp$ret$12;
    tmp_2.isVisible_1 = stateIn(tmp_3, tmp1_combineState, tmp2_combineState, tmp$ret$13);
    var tmp_4 = this;
    // Inline function 'kotlinx.coroutines.flow.combine' call
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.motionProperties_1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator_1 = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$15;
      // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.isAnimating.<anonymous>' call
      tmp$ret$15 = item_0.get_isAnimating_j5dmvp_k$();
      tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = toList(tmp0_mapTo_0);
    var flowArray_0 = copyToArray(tmp0_toTypedArray_0);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp_4.isAnimating_1 = new _no_name_provided__qut3iv_11(flowArray_0);
    this.$stable_1 = 8;
  }
  protoOf(BaseMutableUiState).get_uiContext_70a8r6_k$ = function () {
    return this.uiContext_1;
  };
  protoOf(BaseMutableUiState).get_motionProperties_5siqmq_k$ = function () {
    return this.motionProperties_1;
  };
  protoOf(BaseMutableUiState).get_modifier_t1pq5c_k$ = function () {
    return this.get_combinedMotionPropertyModifier_g33v2o_k$().then_5qw5wu_k$(this.sizeChangedModifier_1);
  };
  protoOf(BaseMutableUiState).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(BaseMutableUiState).get_isVisible_6n82m7_k$ = function () {
    return this.isVisible_1;
  };
  protoOf(BaseMutableUiState).get_visibilityModifier_zfa3qm_k$ = function () {
    var tmp = Companion_getInstance_2();
    var tmp_0 = graphicsLayer(tmp, BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z).then_5qw5wu_k$(this.get_combinedMotionPropertyModifier_g33v2o_k$());
    var tmp_1 = composed$composable(tmp_0, VOID, BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_0(this));
    return onGloballyPositioned(tmp_1, BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_1(this));
  };
  protoOf(BaseMutableUiState).updateBounds_8j3per_k$ = function (transitionBounds) {
    this.containerRect_1 = Rect(Companion_getInstance_0().get_Zero_sctq3f_k$(), Size(transitionBounds.get_widthPx_nfsdj9_k$(), transitionBounds.get_heightPx_om8qxk_k$()));
  };
  protoOf(BaseMutableUiState).get_isAnimating_j5dmvp_k$ = function () {
    return this.isAnimating_1;
  };
  function get_$stableprop_41() {
    return 0;
  }
  function MatchedTargetUiState(element, targetUiState) {
    this.element_1 = element;
    this.targetUiState_1 = targetUiState;
    this.$stable_1 = 0;
  }
  protoOf(MatchedTargetUiState).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(MatchedTargetUiState).get_targetUiState_tg1y03_k$ = function () {
    return this.targetUiState_1;
  };
  protoOf(MatchedTargetUiState).component1_7eebsc_k$ = function () {
    return this.element_1;
  };
  protoOf(MatchedTargetUiState).component2_7eebsb_k$ = function () {
    return this.targetUiState_1;
  };
  protoOf(MatchedTargetUiState).copy_2v3drm_k$ = function (element, targetUiState) {
    return new MatchedTargetUiState(element, targetUiState);
  };
  protoOf(MatchedTargetUiState).copy$default_ihq1or_k$ = function (element, targetUiState, $super) {
    element = element === VOID ? this.element_1 : element;
    targetUiState = targetUiState === VOID ? this.targetUiState_1 : targetUiState;
    return $super === VOID ? this.copy_2v3drm_k$(element, targetUiState) : $super.copy_2v3drm_k$.call(this, element, targetUiState);
  };
  protoOf(MatchedTargetUiState).toString = function () {
    return 'MatchedTargetUiState(element=' + this.element_1 + ', targetUiState=' + this.targetUiState_1 + ')';
  };
  protoOf(MatchedTargetUiState).hashCode = function () {
    var result = this.element_1.hashCode();
    result = imul(result, 31) + (this.targetUiState_1 == null ? 0 : hashCode(this.targetUiState_1)) | 0;
    return result;
  };
  protoOf(MatchedTargetUiState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MatchedTargetUiState))
      return false;
    var tmp0_other_with_cast = other instanceof MatchedTargetUiState ? other : THROW_CCE();
    if (!this.element_1.equals(tmp0_other_with_cast.element_1))
      return false;
    if (!equals(this.targetUiState_1, tmp0_other_with_cast.targetUiState_1))
      return false;
    return true;
  };
  var AnimationMode_CONCURRENT_instance;
  var AnimationMode_SEQUENTIAL_instance;
  function values_6() {
    return [AnimationMode_CONCURRENT_getInstance(), AnimationMode_SEQUENTIAL_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'CONCURRENT':
        return AnimationMode_CONCURRENT_getInstance();
      case 'SEQUENTIAL':
        return AnimationMode_SEQUENTIAL_getInstance();
      default:
        AnimationMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var AnimationMode_entriesInitialized;
  function AnimationMode_initEntries() {
    if (AnimationMode_entriesInitialized)
      return Unit_getInstance();
    AnimationMode_entriesInitialized = true;
    AnimationMode_CONCURRENT_instance = new AnimationMode('CONCURRENT', 0);
    AnimationMode_SEQUENTIAL_instance = new AnimationMode('SEQUENTIAL', 1);
  }
  var $ENTRIES_6;
  function AnimationMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationMode_CONCURRENT_getInstance() {
    AnimationMode_initEntries();
    return AnimationMode_CONCURRENT_instance;
  }
  function AnimationMode_SEQUENTIAL_getInstance() {
    AnimationMode_initEntries();
    return AnimationMode_SEQUENTIAL_instance;
  }
  function MutableUiStateSpecs(animationMode) {
    animationMode = animationMode === VOID ? AnimationMode_CONCURRENT_getInstance() : animationMode;
    this.animationMode_1 = animationMode;
  }
  protoOf(MutableUiStateSpecs).get_animationMode_wdg84e_k$ = function () {
    return this.animationMode_1;
  };
  protoOf(MutableUiStateSpecs).equals = function (other) {
    if (!(other instanceof MutableUiStateSpecs))
      return false;
    var tmp0_other_with_cast = other instanceof MutableUiStateSpecs ? other : THROW_CCE();
    if (!this.animationMode_1.equals(tmp0_other_with_cast.animationMode_1))
      return false;
    return true;
  };
  protoOf(MutableUiStateSpecs).hashCode = function () {
    return imul(getStringHashCode('animationMode'), 127) ^ this.animationMode_1.hashCode();
  };
  protoOf(MutableUiStateSpecs).toString = function () {
    return '@com.bumble.appyx.interactions.core.ui.state.MutableUiStateSpecs(animationMode=' + this.animationMode_1 + ')';
  };
  var ViewpointBehaviour_SNAP_instance;
  var ViewpointBehaviour_ANIMATE_instance;
  function values_7() {
    return [ViewpointBehaviour_SNAP_getInstance(), ViewpointBehaviour_ANIMATE_getInstance()];
  }
  function valueOf_7(value) {
    switch (value) {
      case 'SNAP':
        return ViewpointBehaviour_SNAP_getInstance();
      case 'ANIMATE':
        return ViewpointBehaviour_ANIMATE_getInstance();
      default:
        ViewpointBehaviour_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_7() {
    if ($ENTRIES_7 == null)
      $ENTRIES_7 = enumEntries(values_7());
    return $ENTRIES_7;
  }
  var ViewpointBehaviour_entriesInitialized;
  function ViewpointBehaviour_initEntries() {
    if (ViewpointBehaviour_entriesInitialized)
      return Unit_getInstance();
    ViewpointBehaviour_entriesInitialized = true;
    ViewpointBehaviour_SNAP_instance = new ViewpointBehaviour('SNAP', 0);
    ViewpointBehaviour_ANIMATE_instance = new ViewpointBehaviour('ANIMATE', 1);
  }
  var $ENTRIES_7;
  function BaseVisualisation$_get_viewpointIsAnimating_$o$collect$lambda_ft2y4u($flowArray) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = $flowArray.length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      return tmp$ret$0;
    };
  }
  function BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).invoke_l9bav0_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_7xtxnd_k$($this$combineInternal, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_l9bav0_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp$ret$0;
            l$ret$1: do {
              var indexedObject = this.it_1;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var element = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                if (element) {
                  tmp$ret$0 = true;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = false;
            }
             while (false);
            suspendResult = this.$this$combineInternal_1.emit_1fbrsb_k$(tmp$ret$0, this);
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
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).create_7xtxnd_k$ = function ($this$combineInternal, it, completion) {
    var i = new BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn(completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn_0(resultContinuation) {
    var i = new BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn(resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_l9bav0_k$($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$17(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$17).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = BaseVisualisation$_get_viewpointIsAnimating_$o$collect$lambda_ft2y4u(this._this__u8e3s4__1.$flowArray_1);
            suspendResult = combineInternal(this.collector_1, this._this__u8e3s4__1.$flowArray_1, tmp_0, BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn_0(null), this);
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
  function BaseVisualisation$mapSegment$slambda$slambda(this$0, $segment, resultContinuation) {
    this.this$0__1 = this$0;
    this.$segment_1 = $segment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).invoke_pwzufx_k$ = function (it, $completion) {
    var tmp = this.create_icagai_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_pwzufx_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = updateViewpoint_0(this.this$0__1, this.$segment_1, this.it_1, this);
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
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).create_icagai_k$ = function (it, completion) {
    var i = new BaseVisualisation$mapSegment$slambda$slambda(this.this$0__1, this.$segment_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_icagai_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$mapSegment$slambda$slambda_0(this$0, $segment, resultContinuation) {
    var i = new BaseVisualisation$mapSegment$slambda$slambda(this$0, $segment, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_pwzufx_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ManageAnimations$composable$slambda$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    this.$update_1 = $update;
    this.$mutableUiState_1 = $mutableUiState;
    this.$matchedTargetUiState_1 = $matchedTargetUiState;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            if (this.$update_1.get_animate_cwn5s8_k$()) {
              this.set_state_a96kl8_k$(2);
              suspendResult = this.$mutableUiState_1.animateTo_rmuc3b_k$(this.$this$launch_1, this.$matchedTargetUiState_1.get_targetUiState_tg1y03_k$(), this.this$0__1.currentSpringSpec_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              suspendResult = this.$mutableUiState_1.snapTo_pci3i7_k$(this.$matchedTargetUiState_1.get_targetUiState_tg1y03_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda$slambda(this.$update_1, this.$mutableUiState_1, this.$matchedTargetUiState_1, this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ManageAnimations$composable$slambda$slambda_0($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda(this$0, $matchedTargetUiState, resultContinuation) {
    this.this$0__1 = this$0;
    this.$matchedTargetUiState_1 = $matchedTargetUiState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).invoke_f1eq0k_k$ = function (values, $completion) {
    var tmp = this.create_stb2hj_k$(values, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_f1eq0k_k$(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.values_1.get_previous_i5svy8_k$();
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.previous0__1 = tmp_1;
            this.current1__1 = this.values_1.get_current_jwi6j4_k$();
            if (this.current1__1 ? !this.previous0__1 : false) {
              var tmp0_set = this.this$0__1.animations_1;
              var tmp1_set = this.$matchedTargetUiState_1.get_element_q8gf71_k$().get_id_kntnx8_k$();
              tmp0_set.put_3mhbri_k$(tmp1_set, true);
              l$ret$1: do {
                var tmp2_update = this.this$0__1.updateIsAnimating_1;
                while (true) {
                  var prevValue = tmp2_update.get_value_j01efc_k$();
                  var nextValue = true;
                  if (tmp2_update.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
                    break l$ret$1;
                  }
                }
              }
               while (false);
              var tmp_2 = AppyxLogger_getInstance();
              Companion_getInstance_16();
              tmp_2.d_3t63e7_k$('BaseMotionController', 'animation for element ' + this.$matchedTargetUiState_1.get_element_q8gf71_k$().get_id_kntnx8_k$() + ' is started');
              this.set_state_a96kl8_k$(3);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              suspendResult = this.this$0__1._finishedAnimations_1.emit_1fbrsb_k$(this.$matchedTargetUiState_1.get_element_q8gf71_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp3_set = this.this$0__1.animations_1;
            var tmp4_set = this.$matchedTargetUiState_1.get_element_q8gf71_k$().get_id_kntnx8_k$();
            tmp3_set.put_3mhbri_k$(tmp4_set, false);
            l$ret$5: do {
              var tmp5_update = this.this$0__1.updateIsAnimating_1;
              while (true) {
                var prevValue_0 = tmp5_update.get_value_j01efc_k$();
                var tmp$ret$2;
                l$ret$3: do {
                  var tmp0_any = this.this$0__1.animations_1;
                  if (tmp0_any.isEmpty_y1axqb_k$()) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  }
                  var tmp0_iterator = tmp0_any.get_entries_p20ztl_k$().iterator_jk1svi_k$();
                  while (tmp0_iterator.hasNext_bitz1p_k$()) {
                    var element = tmp0_iterator.next_20eer_k$();
                    if (element.get_value_j01efc_k$()) {
                      tmp$ret$2 = true;
                      break l$ret$3;
                    }
                  }
                  tmp$ret$2 = false;
                }
                 while (false);
                var nextValue_0 = tmp$ret$2;
                if (tmp5_update.compareAndSet_fjyiiu_k$(prevValue_0, nextValue_0)) {
                  break l$ret$5;
                }
              }
            }
             while (false);
            var tmp_3 = AppyxLogger_getInstance();
            Companion_getInstance_16();
            tmp_3.d_3t63e7_k$('BaseMotionController', 'animation for element ' + this.$matchedTargetUiState_1.get_element_q8gf71_k$().get_id_kntnx8_k$() + ' is finished');
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            throw this.get_exception_x0n6w6_k$();
          case 3:
            return Unit_getInstance();
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).create_stb2hj_k$ = function (values, completion) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda(this.this$0__1, this.$matchedTargetUiState_1, completion);
    i.values_1 = values;
    return i;
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_stb2hj_k$(value instanceof CompareValues ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda_0(this$0, $matchedTargetUiState, resultContinuation) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda(this$0, $matchedTargetUiState, resultContinuation);
    var l = function (values, $completion) {
      return i.invoke_f1eq0k_k$(values, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    this.$mutableUiState_1 = $mutableUiState;
    this.this$0__1 = this$0;
    this.$matchedTargetUiState_1 = $matchedTargetUiState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = withPrevious(distinctUntilChanged(this.$mutableUiState_1.get_isAnimating_j5dmvp_k$()));
            var tmp_1 = BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda_0(this.this$0__1, this.$matchedTargetUiState_1, null);
            suspendResult = tmp_0.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_12(tmp_1), this);
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda(this.$mutableUiState_1, this.this$0__1, this.$matchedTargetUiState_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda_0($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_uiContext__2p4awm_0($this) {
    return $this.uiContext_1;
  }
  function _get_coroutineScope__o75s5t_0($this) {
    return $this.coroutineScope_1;
  }
  function _get_mutableUiStateCache__okxcp2($this) {
    return $this.mutableUiStateCache_1;
  }
  function _get_animations__c8lxxg($this) {
    return $this.animations_1;
  }
  function _get_viewpointIsAnimating__nlgw0y($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.get_viewpointDimensions_748x5b_k$().isEmpty_y1axqb_k$()) {
      // Inline function 'com.bumble.appyx.combineState' call
      // Inline function 'kotlin.collections.map' call
      var tmp1_map = $this.get_viewpointDimensions_748x5b_k$();
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
      var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-viewpointIsAnimating>.<anonymous>' call
        tmp$ret$1 = item.get_second_jf7fjx_k$().get_isAnimating_j5dmvp_k$();
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
      }
      var tmp3_combineState = $this.uiContext_1.get_coroutineScope_5k7h45_k$();
      var tmp4_combineState = Companion_getInstance().get_Eagerly_3vw7yc_k$();
      // Inline function 'kotlinx.coroutines.flow.combine' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = toList(tmp0_mapTo);
      var flowArray = copyToArray(tmp0_toTypedArray);
      // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
      var tmp_0 = new _no_name_provided__qut3iv_12(flowArray);
      var tmp$ret$13;
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-viewpointIsAnimating>.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_mapTo, 10));
      var tmp0_iterator_0 = tmp0_mapTo.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$7;
        // Inline function 'com.bumble.appyx.combineState.<anonymous>' call
        tmp$ret$7 = item_0.get_value_j01efc_k$();
        tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$7);
      }
      var tmp5_anonymous = copyToArray(tmp0_mapTo_0);
      var tmp$ret$12;
      $l$block: {
        // Inline function 'kotlin.collections.any' call
        var inductionVariable = 0;
        var last = tmp5_anonymous.length;
        while (inductionVariable < last) {
          var element = tmp5_anonymous[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-viewpointIsAnimating>.<anonymous>.<anonymous>' call
          if (element) {
            tmp$ret$12 = true;
            break $l$block;
          }
        }
        tmp$ret$12 = false;
      }
      tmp$ret$13 = tmp$ret$12;
      tmp = stateIn(tmp_0, tmp3_combineState, tmp4_combineState, tmp$ret$13);
    } else {
      tmp = MutableStateFlow(false);
    }
    return tmp;
  }
  function _get_updateIsAnimating__3sy68q($this) {
    return $this.updateIsAnimating_1;
  }
  function _get_isAnimatingState__x32vxu($this) {
    // Inline function 'com.bumble.appyx.combineState' call
    var tmp0_combineState = $this.updateIsAnimating_1;
    var tmp1_combineState = _get_viewpointIsAnimating__nlgw0y($this);
    var tmp2_combineState = $this.uiContext_1.get_coroutineScope_5k7h45_k$();
    var tmp3_combineState = Companion_getInstance().get_Eagerly_3vw7yc_k$();
    var tmp = combine_0(tmp0_combineState, tmp1_combineState, BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy_0(null));
    var tmp$ret$0;
    // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-isAnimatingState>.<anonymous>' call
    var tmp4_anonymous = tmp0_combineState.get_value_j01efc_k$();
    var tmp5_anonymous = tmp1_combineState.get_value_j01efc_k$();
    tmp$ret$0 = tmp4_anonymous ? true : tmp5_anonymous;
    return stateIn(tmp, tmp2_combineState, tmp3_combineState, tmp$ret$0);
  }
  function _get__finishedAnimations__svnhpt($this) {
    return $this._finishedAnimations_1;
  }
  function cleanUpCacheForDestroyedElements($this, matchedTargetUiStates) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(matchedTargetUiStates, 10));
    var tmp0_iterator = matchedTargetUiStates.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.cleanUpCacheForDestroyedElements.<anonymous>' call
      tmp$ret$0 = item.get_element_q8gf71_k$().get_id_kntnx8_k$();
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    var availableIds = tmp0_mapTo;
    var iterator = $this.mutableUiStateCache_1.get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var key = iterator.next_20eer_k$();
      if (!availableIds.contains_2ehdt1_k$(key)) {
        iterator.remove_le47v1_k$();
      }
    }
  }
  function ManageAnimations($this, mutableUiState, matchedTargetUiState, update) {
    illegalDecoyCallException('ManageAnimations');
  }
  function ObserveElementAnimationChanges($this, mutableUiState, matchedTargetUiState) {
    illegalDecoyCallException('ObserveElementAnimationChanges');
  }
  function updateViewpoint($this, update, $completion) {
    var tmp = new $updateViewpointCOROUTINE$15($this, update, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function InterpolateUiState($this, segmentProgress, mutableUiState, from, to, initialProgress) {
    illegalDecoyCallException('InterpolateUiState');
  }
  function updateViewpoint_0($this, segment, segmentProgress, $completion) {
    var tmp = new $updateViewpointCOROUTINE$16($this, segment, segmentProgress, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function viewpointTargetValue($this, segment, segmentProgress, fieldOfState) {
    var fromValue = fieldOfState(segment.get_fromState_9nyiji_k$());
    var targetValue = fieldOfState(segment.get_targetState_kri3mx_k$());
    return fromValue === targetValue ? to(ViewpointBehaviour_ANIMATE_getInstance(), targetValue) : to(ViewpointBehaviour_SNAP_getInstance(), lerpFloat(fromValue, targetValue, segmentProgress));
  }
  function ViewpointBehaviour(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.TAG_1 = 'BaseMotionController';
  }
  protoOf(Companion_10).get_TAG_18jk6n_k$ = function () {
    return this.TAG_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_16() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function get_$stableprop_42() {
    return 8;
  }
  function ManageAnimations$composable($this, mutableUiState, matchedTargetUiState, update, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1718546927);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1718546927, $dirty, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.ManageAnimations$composable (BaseVisualisation.kt:145)');
    }
    LaunchedEffect$composable(update, $this, BaseVisualisation$ManageAnimations$composable$slambda_0(update, mutableUiState, matchedTargetUiState, $this, null), $composer_0, 64 | 14 & $dirty >> 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(BaseVisualisation$ManageAnimations$composable$lambda($this, mutableUiState, matchedTargetUiState, update, $changed));
    }
  }
  function ObserveElementAnimationChanges$composable($this, mutableUiState, matchedTargetUiState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-18912775);
    if (isTraceInProgress()) {
      traceEventStart(-18912775, $changed, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.ObserveElementAnimationChanges$composable (BaseVisualisation.kt:167)');
    }
    LaunchedEffect$composable_0($this, BaseVisualisation$ObserveElementAnimationChanges$composable$slambda_0(mutableUiState, $this, matchedTargetUiState, null), $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(BaseVisualisation$ObserveElementAnimationChanges$composable$lambda($this, mutableUiState, matchedTargetUiState, $changed));
    }
  }
  function InterpolateUiState$composable($this, segmentProgress, mutableUiState, from, to, initialProgress, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1618256231);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(1618256231, $dirty, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.InterpolateUiState$composable (BaseVisualisation.kt:261)');
    }
    var progress$delegate = collectAsState$composable_0(segmentProgress, initialProgress, null, $composer_0, 14 & $dirty | 112 & $dirty >> 9, 2);
    var tmp = InterpolateUiState$composable$lambda(progress$delegate);
    LaunchedEffect$composable_0(tmp, BaseVisualisation$InterpolateUiState$composable$slambda_0(mutableUiState, $this, from, to, progress$delegate, null), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(BaseVisualisation$InterpolateUiState$composable$lambda($this, segmentProgress, mutableUiState, from, to, initialProgress, $changed));
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_11(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_11).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_12(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_12).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function InterpolateUiState$composable$lambda($progress$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('progress', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $progress$delegate.get_value_j01efc_k$();
  }
  function _no_name_provided__qut3iv_12($flowArray) {
    this.$flowArray_1 = $flowArray;
  }
  protoOf(_no_name_provided__qut3iv_12).collect_snddeu_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$17(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_12).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_snddeu_k$(collector, $completion);
  };
  function BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).invoke_ckpeut_k$ = function (one, two, $completion) {
    var tmp = this.create_o6yyb4_k$(one, two, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE();
    return this.invoke_ckpeut_k$(tmp, (!(p2 == null) ? typeof p2 === 'boolean' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return this.one_1 ? true : this.two_1;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).create_o6yyb4_k$ = function (one, two, completion) {
    var i = new BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy(completion);
    i.one_1 = one;
    i.two_1 = two;
    return i;
  };
  function BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy_0(resultContinuation) {
    var i = new BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy(resultContinuation);
    var l = function (one, two, $completion) {
      return i.invoke_ckpeut_k$(one, two, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BaseVisualisation$mapUpdate$slambda(this$0, $update, resultContinuation) {
    this.this$0__1 = this$0;
    this.$update_1 = $update;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$mapUpdate$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$mapUpdate$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$mapUpdate$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = updateViewpoint(this.this$0__1, this.$update_1, this);
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
  protoOf(BaseVisualisation$mapUpdate$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new BaseVisualisation$mapUpdate$slambda(this.this$0__1, this.$update_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseVisualisation$mapUpdate$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$mapUpdate$slambda_0(this$0, $update, resultContinuation) {
    var i = new BaseVisualisation$mapUpdate$slambda(this$0, $update, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function BaseVisualisation$mapUpdate$lambda($mutableUiState, this$0, $item, $update) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(842344782, $changed, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>.<anonymous> (BaseVisualisation.kt:116)');
        }
        Box$composable($mutableUiState.get_visibilityModifier_zfa3qm_k$(), $composer_0, 0);
        ObserveElementAnimationChanges$composable(this$0, $mutableUiState, $item, $composer_0, 512);
        ManageAnimations$composable(this$0, $mutableUiState, $item, $update, $composer_0, 4096);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BaseVisualisation$updateViewpoint$lambda($targetValue) {
    return function ($this$animateTo) {
      var tmp = AppyxLogger_getInstance();
      Companion_getInstance_16();
      tmp.d_3t63e7_k$('BaseMotionController', 'Viewpoint animateTo (Update) \u2013 ' + $targetValue);
      return Unit_getInstance();
    };
  }
  function BaseVisualisation$mapSegment$slambda($segmentProgress, this$0, $segment, resultContinuation) {
    this.$segmentProgress_1 = $segmentProgress;
    this.this$0__1 = this$0;
    this.$segment_1 = $segment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$mapSegment$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$mapSegment$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$mapSegment$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = BaseVisualisation$mapSegment$slambda$slambda_0(this.this$0__1, this.$segment_1, null);
            suspendResult = this.$segmentProgress_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_11(tmp_0), this);
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
  protoOf(BaseVisualisation$mapSegment$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new BaseVisualisation$mapSegment$slambda(this.$segmentProgress_1, this.this$0__1, this.$segment_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseVisualisation$mapSegment$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$mapSegment$slambda_0($segmentProgress, this$0, $segment, resultContinuation) {
    var i = new BaseVisualisation$mapSegment$slambda($segmentProgress, this$0, $segment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function BaseVisualisation$mapSegment$lambda($mutableUiState, this$0, $segmentProgress, $t0, $item, $initialProgress) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1059286326, $changed, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous> (BaseVisualisation.kt:244)');
        }
        Box$composable($mutableUiState.get_visibilityModifier_zfa3qm_k$(), $composer_0, 0);
        InterpolateUiState$composable(this$0, $segmentProgress, $mutableUiState, $t0, $item, $initialProgress, $composer_0, 262144);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BaseVisualisation$updateViewpoint$lambda_0($viewpointDimension, $targetValue) {
    return function ($this$animateTo) {
      var tmp = AppyxLogger_getInstance();
      Companion_getInstance_16();
      tmp.d_3t63e7_k$('BaseMotionController', 'Viewpoint animateTo (Segment) \u2013 ' + $viewpointDimension.get_internalValue_suj1cb_k$() + ' -> ' + $targetValue);
      return Unit_getInstance();
    };
  }
  function BaseVisualisation$ManageAnimations$composable$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    this.$update_1 = $update;
    this.$mutableUiState_1 = $mutableUiState;
    this.$matchedTargetUiState_1 = $matchedTargetUiState;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          launch(this.$this$LaunchedEffect_1, VOID, VOID, BaseVisualisation$ManageAnimations$composable$slambda$slambda_0(this.$update_1, this.$mutableUiState_1, this.$matchedTargetUiState_1, this.this$0__1, null));
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
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda(this.$update_1, this.$mutableUiState_1, this.$matchedTargetUiState_1, this.this$0__1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ManageAnimations$composable$slambda_0($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ManageAnimations$composable$lambda($tmp0_rcvr, $mutableUiState, $matchedTargetUiState, $update, $$changed) {
    return function ($composer, $force) {
      ManageAnimations$composable($tmp0_rcvr, $mutableUiState, $matchedTargetUiState, $update, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    this.$mutableUiState_1 = $mutableUiState;
    this.this$0__1 = this$0;
    this.$matchedTargetUiState_1 = $matchedTargetUiState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          launch(this.$this$LaunchedEffect_1, VOID, VOID, BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda_0(this.$mutableUiState_1, this.this$0__1, this.$matchedTargetUiState_1, null));
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda(this.$mutableUiState_1, this.this$0__1, this.$matchedTargetUiState_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda_0($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ObserveElementAnimationChanges$composable$lambda($tmp0_rcvr, $mutableUiState, $matchedTargetUiState, $$changed) {
    return function ($composer, $force) {
      ObserveElementAnimationChanges$composable($tmp0_rcvr, $mutableUiState, $matchedTargetUiState, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function BaseVisualisation$InterpolateUiState$composable$slambda($mutableUiState, this$0, $from, $to, $progress$delegate, resultContinuation) {
    this.$mutableUiState_1 = $mutableUiState;
    this.this$0__1 = this$0;
    this.$from_1 = $from;
    this.$to_1 = $to;
    this.$progress$delegate_1 = $progress$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          this.$mutableUiState_1.lerpTo_maz9ag_k$(this.this$0__1.coroutineScope_1, this.$from_1.get_targetUiState_tg1y03_k$(), this.$to_1.get_targetUiState_tg1y03_k$(), InterpolateUiState$composable$lambda(this.$progress$delegate_1));
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
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new BaseVisualisation$InterpolateUiState$composable$slambda(this.$mutableUiState_1, this.this$0__1, this.$from_1, this.$to_1, this.$progress$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$InterpolateUiState$composable$slambda_0($mutableUiState, this$0, $from, $to, $progress$delegate, resultContinuation) {
    var i = new BaseVisualisation$InterpolateUiState$composable$slambda($mutableUiState, this$0, $from, $to, $progress$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$InterpolateUiState$composable$lambda($tmp0_rcvr, $segmentProgress, $mutableUiState, $from, $to, $initialProgress, $$changed) {
    return function ($composer, $force) {
      InterpolateUiState$composable($tmp0_rcvr, $segmentProgress, $mutableUiState, $from, $to, $initialProgress, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ViewpointBehaviour_SNAP_getInstance() {
    ViewpointBehaviour_initEntries();
    return ViewpointBehaviour_SNAP_instance;
  }
  function ViewpointBehaviour_ANIMATE_getInstance() {
    ViewpointBehaviour_initEntries();
    return ViewpointBehaviour_ANIMATE_instance;
  }
  function $updateViewpointCOROUTINE$15(_this__u8e3s4, update, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.update_1 = update;
  }
  protoOf($updateViewpointCOROUTINE$15).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            var tmp_0 = this;
            tmp_0.tmp0_forEach0__1 = this._this__u8e3s4__1.get_viewpointDimensions_748x5b_k$();
            this.tmp0_iterator1__1 = this.tmp0_forEach0__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            this.element2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            this.fieldOfState3__1 = this.element2__1.component1_7eebsc_k$();
            this.viewpointDimension4__1 = this.element2__1.component2_7eebsb_k$();
            this.targetValue5__1 = this.fieldOfState3__1(this.update_1.get_currentTargetState_l0vn00_k$());
            this.set_state_a96kl8_k$(2);
            var tmp0_stiffness = this._this__u8e3s4__1.currentSpringSpec_1.get_stiffness_dt2sgm_k$();
            var tmp1_dampingRatio = this._this__u8e3s4__1.currentSpringSpec_1.get_dampingRatio_syjss2_k$();
            var tmp_1 = spring(tmp1_dampingRatio, tmp0_stiffness);
            suspendResult = this.viewpointDimension4__1.animateTo_p33olm_k$(this.targetValue5__1, tmp_1, BaseVisualisation$updateViewpoint$lambda(this.targetValue5__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $updateViewpointCOROUTINE$16(_this__u8e3s4, segment, segmentProgress, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.segment_1 = segment;
    this.segmentProgress_1 = segmentProgress;
  }
  protoOf($updateViewpointCOROUTINE$16).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            var tmp_0 = this;
            tmp_0.tmp0_forEach0__1 = this._this__u8e3s4__1.get_viewpointDimensions_748x5b_k$();
            this.tmp0_iterator1__1 = this.tmp0_forEach0__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            this.element2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            this.fieldOfState3__1 = this.element2__1.component1_7eebsc_k$();
            this.viewpointDimension4__1 = this.element2__1.component2_7eebsb_k$();
            this.tmp0_container5__1 = viewpointTargetValue(this._this__u8e3s4__1, this.segment_1, this.segmentProgress_1, this.fieldOfState3__1);
            this.behaviour6__1 = this.tmp0_container5__1.component1_7eebsc_k$();
            this.targetValue7__1 = this.tmp0_container5__1.component2_7eebsb_k$();
            this.tmp1_subject8__1 = this.behaviour6__1;
            this.tmp09__1 = this.tmp1_subject8__1.get_ordinal_ip24qg_k$();
            if (this.tmp09__1 === 0) {
              this.set_state_a96kl8_k$(4);
              suspendResult = this.viewpointDimension4__1.snapTo_fkfduh_k$(this.targetValue7__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.tmp09__1 === 1) {
                if (!(this.viewpointDimension4__1.get_internalValue_suj1cb_k$() === this.targetValue7__1)) {
                  this.set_state_a96kl8_k$(2);
                  var tmp2_stiffness = this._this__u8e3s4__1.currentSpringSpec_1.get_stiffness_dt2sgm_k$();
                  var tmp3_dampingRatio = this._this__u8e3s4__1.currentSpringSpec_1.get_dampingRatio_syjss2_k$();
                  var tmp_1 = spring(tmp3_dampingRatio, tmp2_stiffness);
                  suspendResult = this.viewpointDimension4__1.animateTo_p33olm_k$(this.targetValue7__1, tmp_1, BaseVisualisation$updateViewpoint$lambda_0(this.viewpointDimension4__1, this.targetValue7__1), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_a96kl8_k$(3);
                  continue $sm;
                }
              } else {
                this.set_state_a96kl8_k$(5);
                continue $sm;
              }
            }

          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 4:
            var tmp_2 = AppyxLogger_getInstance();
            Companion_getInstance_16();
            tmp_2.d_3t63e7_k$('BaseMotionController', 'Viewpoint snapTo (Segment): ' + this.targetValue7__1);
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function BaseVisualisation(uiContext, defaultAnimationSpec) {
    Companion_getInstance_16();
    defaultAnimationSpec = defaultAnimationSpec === VOID ? get_DefaultAnimationSpec() : defaultAnimationSpec;
    this.uiContext_1 = uiContext;
    this.defaultAnimationSpec_1 = defaultAnimationSpec;
    this.viewpointDimensions_1 = emptyList();
    this.coroutineScope_1 = this.uiContext_1.get_coroutineScope_5k7h45_k$();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.mutableUiStateCache_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.animations_1 = LinkedHashMap_init_$Create$();
    this.updateIsAnimating_1 = MutableStateFlow(false);
    this.currentSpringSpec_1 = this.defaultAnimationSpec_1;
    this._finishedAnimations_1 = MutableSharedFlow();
    this.finishedAnimations_1 = this._finishedAnimations_1;
    this.transitionBounds_1 = Companion_getInstance_11().get_Zero_woe9zl_k$();
    this.$stable_1 = 8;
  }
  protoOf(BaseVisualisation).get_defaultAnimationSpec_dmgjrt_k$ = function () {
    return this.defaultAnimationSpec_1;
  };
  protoOf(BaseVisualisation).get_viewpointDimensions_748x5b_k$ = function () {
    return this.viewpointDimensions_1;
  };
  protoOf(BaseVisualisation).set_currentSpringSpec_s60m8n_k$ = function (_set____db54di) {
    this.currentSpringSpec_1 = _set____db54di;
  };
  protoOf(BaseVisualisation).get_currentSpringSpec_97no60_k$ = function () {
    return this.currentSpringSpec_1;
  };
  protoOf(BaseVisualisation).get_finishedAnimations_ooylfa_k$ = function () {
    return this.finishedAnimations_1;
  };
  protoOf(BaseVisualisation).set_transitionBounds_kd6ohy_k$ = function (_set____db54di) {
    this.transitionBounds_1 = _set____db54di;
  };
  protoOf(BaseVisualisation).get_transitionBounds_6wxwb1_k$ = function () {
    return this.transitionBounds_1;
  };
  protoOf(BaseVisualisation).updateBounds_8j3per_k$ = function (transitionBounds) {
    this.transitionBounds_1 = transitionBounds;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.mutableUiStateCache_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.updateBounds.<anonymous>' call
      element.updateBounds_8j3per_k$(transitionBounds);
    }
  };
  protoOf(BaseVisualisation).overrideAnimationSpec_tldeh2_k$ = function (springSpec) {
    this.currentSpringSpec_1 = springSpec;
  };
  protoOf(BaseVisualisation).isAnimating_x1kvqk_k$ = function () {
    return _get_isAnimatingState__x32vxu(this);
  };
  protoOf(BaseVisualisation).mapUpdate_eouxkv_k$ = function (update) {
    var matchedTargetUiStates = this.toUiTargets_864b6u_k$(update.get_currentTargetState_l0vn00_k$());
    cleanUpCacheForDestroyedElements(this, matchedTargetUiStates);
    launch(this.coroutineScope_1, VOID, VOID, BaseVisualisation$mapUpdate$slambda_0(this, update, null));
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(matchedTargetUiStates, 10));
    var tmp0_iterator = matchedTargetUiStates.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>' call
      // Inline function 'kotlin.collections.getOrPut' call
      var tmp0_getOrPut = this.mutableUiStateCache_1;
      var tmp1_getOrPut = item.get_element_q8gf71_k$().get_id_kntnx8_k$();
      var value = tmp0_getOrPut.get_1mhr4y_k$(tmp1_getOrPut);
      var tmp;
      if (value == null) {
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.apply' call
        var tmp0_apply = this.mutableUiStateFor_t781ji_k$(this.uiContext_1, item.get_targetUiState_tg1y03_k$());
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>.<anonymous>.<anonymous>' call
        tmp0_apply.updateBounds_8j3per_k$(this.transitionBounds_1);
        var answer = tmp0_apply;
        tmp0_getOrPut.put_3mhbri_k$(tmp1_getOrPut, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var mutableUiState = tmp;
      var tmp0_element = item.get_element_q8gf71_k$();
      var tmp1_visibleState = mutableUiState.get_isVisible_6n82m7_k$();
      var tmp2_motionProperties = mutableUiState.get_motionProperties_5siqmq_k$();
      var tmp3_modifier = mutableUiState.get_modifier_t1pq5c_k$();
      var tmp4_progress = MutableStateFlow(1.0);
      tmp$ret$3 = new ElementUiModel(tmp0_element, tmp1_visibleState, tmp2_motionProperties, ComposableLambda$invoke$ref(composableLambdaInstance(842344782, true, BaseVisualisation$mapUpdate$lambda(mutableUiState, this, item, update))), tmp3_modifier, tmp4_progress);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$3);
    }
    return tmp0_mapTo;
  };
  protoOf(BaseVisualisation).mapSegment_8q2y0b_k$ = function (segment, segmentProgress, initialProgress) {
    var tmp0_container = segment.get_stateTransition_4ivdwj_k$();
    var fromState = tmp0_container.component1_7eebsc_k$();
    var targetState = tmp0_container.component2_7eebsb_k$();
    var fromTargetUiState = this.toUiTargets_864b6u_k$(fromState);
    var toTargetUiState = this.toUiTargets_864b6u_k$(targetState);
    cleanUpCacheForDestroyedElements(this, toTargetUiState);
    launch(this.coroutineScope_1, VOID, VOID, BaseVisualisation$mapSegment$slambda_0(segmentProgress, this, segment, null));
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(toTargetUiState, 10));
    var tmp0_iterator = toTargetUiState.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.find' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = fromTargetUiState.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous>' call
          if (element.get_element_q8gf71_k$().get_id_kntnx8_k$() === item.get_element_q8gf71_k$().get_id_kntnx8_k$()) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      tmp$ret$2 = tmp$ret$1;
      var t0 = ensureNotNull(tmp$ret$2);
      // Inline function 'kotlin.collections.getOrPut' call
      var tmp0_getOrPut = this.mutableUiStateCache_1;
      var tmp1_getOrPut = item.get_element_q8gf71_k$().get_id_kntnx8_k$();
      var value = tmp0_getOrPut.get_1mhr4y_k$(tmp1_getOrPut);
      var tmp;
      if (value == null) {
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.apply' call
        var tmp0_apply = this.mutableUiStateFor_t781ji_k$(this.uiContext_1, t0.get_targetUiState_tg1y03_k$());
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous>.<anonymous>' call
        tmp0_apply.updateBounds_8j3per_k$(this.transitionBounds_1);
        var answer = tmp0_apply;
        tmp0_getOrPut.put_3mhbri_k$(tmp1_getOrPut, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var mutableUiState = tmp;
      mutableUiState.lerpTo_maz9ag_k$(this.coroutineScope_1, t0.get_targetUiState_tg1y03_k$(), item.get_targetUiState_tg1y03_k$(), initialProgress);
      var tmp0_element = item.get_element_q8gf71_k$();
      var tmp1_visibleState = mutableUiState.get_isVisible_6n82m7_k$();
      var tmp2_motionProperties = mutableUiState.get_motionProperties_5siqmq_k$();
      var tmp3_modifier = mutableUiState.get_modifier_t1pq5c_k$();
      tmp$ret$6 = new ElementUiModel(tmp0_element, tmp1_visibleState, tmp2_motionProperties, ComposableLambda$invoke$ref_0(composableLambdaInstance(1059286326, true, BaseVisualisation$mapSegment$lambda(mutableUiState, this, segmentProgress, t0, item, initialProgress))), tmp3_modifier, segmentProgress);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$6);
    }
    return tmp0_mapTo;
  };
  function _get_MillisToNanos__m16n2r($this) {
    return $this.MillisToNanos_1;
  }
  function get_$stableprop_43() {
    return 0;
  }
  function SystemClock() {
    SystemClock_instance = this;
    this.MillisToNanos_1 = new Long(1000000, 0);
    this.$stable_1 = 0;
  }
  protoOf(SystemClock).nanoTime_v2dkm9_k$ = function () {
    return roundToLong(window.performance.now() * (new Long(1000000, 0)).toDouble_ygsx0s_k$());
  };
  var SystemClock_instance;
  function SystemClock_getInstance() {
    if (SystemClock_instance == null)
      new SystemClock();
    return SystemClock_instance;
  }
  function get_$stableprop_44() {
    return 0;
  }
  function UUID() {
    UUID_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(UUID).randomUUID_1wutxa_k$ = function () {
    return Uuid.v4();
  };
  var UUID_instance;
  function UUID_getInstance() {
    if (UUID_instance == null)
      new UUID();
    return UUID_instance;
  }
  //region block: post-declaration
  protoOf(BaseTransitionModel).operation$default_1t9tz9_k$ = operation$default;
  protoOf(BaseTransitionModel).onSettled$default_fzps67_k$ = onSettled$default;
  protoOf(BaseTransitionModel).canApply_jz0xjw_k$ = canApply;
  protoOf(PointerInputElement).foldIn_u08fre_k$ = foldIn;
  protoOf(PointerInputElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(PointerInputElement).any_hrontp_k$ = any;
  protoOf(PointerInputElement).all_ctzlrs_k$ = all;
  protoOf(PointerInputElement).then_5qw5wu_k$ = then;
  protoOf(OnPointerEventNode).interceptOutOfBoundsChildEvents_ffmhz1_k$ = interceptOutOfBoundsChildEvents;
  protoOf(OnPointerEventNode).onDensityChange_hd2x8o_k$ = onDensityChange;
  protoOf(OnPointerEventNode).onViewConfigurationChange_i5i1ip_k$ = onViewConfigurationChange;
  protoOf(Noop_1).get_isContinuous_ob44bi_k$ = get_isContinuous;
  protoOf(Noop_1).onStartDrag_50u6al_k$ = onStartDrag;
  protoOf(BaseVisualisation).map_xy39ku_k$ = map;
  protoOf(BaseVisualisation).mapKeyframes_5z4kk_k$ = mapKeyframes;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BaseBackPressHandlerStrategy;
  _.$_$.b = BaseOperation;
  _.$_$.c = BaseTransitionModel;
  _.$_$.d = canApply;
  _.$_$.e = Elements;
  _.$_$.f = BaseAppyxComponent;
  _.$_$.g = removedElements;
  _.$_$.h = onPointerEvent;
  _.$_$.i = Plugin;
  _.$_$.j = SavesInstanceState;
  _.$_$.k = MutableSavedStateMapImpl;
  _.$_$.l = TransitionBounds;
  _.$_$.m = UiContext;
  _.$_$.n = Noop_0;
  _.$_$.o = Noop_1;
  _.$_$.p = onStartDrag;
  _.$_$.q = GestureFactory;
  _.$_$.r = GestureSettleConfig;
  _.$_$.s = dragHorizontalDirection;
  _.$_$.t = AppyxComponentSetup$composable;
  _.$_$.u = get_DefaultAnimationSpec;
  _.$_$.v = OutsideAlignment;
  _.$_$.w = PositionAlignment;
  _.$_$.x = Target_0;
  _.$_$.y = Alpha;
  _.$_$.z = Target_1;
  _.$_$.a1 = ColorOverlay;
  _.$_$.b1 = Target_3;
  _.$_$.c1 = Shadow;
  _.$_$.d1 = BaseMutableUiState;
  _.$_$.e1 = MatchedTargetUiState;
  _.$_$.f1 = get_LocalBoxScope;
  _.$_$.g1 = get_LocalMotionProperties;
  _.$_$.h1 = mapKeyframes;
  _.$_$.i1 = map;
  _.$_$.j1 = asElement;
  _.$_$.k1 = BaseVisualisation;
  _.$_$.l1 = mapState;
  _.$_$.m1 = Mode_IMPOSED_getInstance;
  _.$_$.n1 = Mode_KEYFRAME_getInstance;
  _.$_$.o1 = HorizontalDirection_RIGHT_getInstance;
  _.$_$.p1 = detectDragGesturesOrCancellation;
  _.$_$.q1 = onSettled$default;
  _.$_$.r1 = operation$default;
  _.$_$.s1 = Gesture_init_$Create$;
  _.$_$.t1 = Target_init_$Create$_0;
  _.$_$.u1 = Companion_getInstance_5;
  _.$_$.v1 = Companion_getInstance_13;
  _.$_$.w1 = UUID_getInstance;
  //endregion
  return _;
}));
