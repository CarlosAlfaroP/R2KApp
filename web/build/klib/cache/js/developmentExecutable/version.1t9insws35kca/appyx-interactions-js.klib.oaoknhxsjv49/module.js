(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'uuid', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-unit.js', './appyx-utils-multiplatform.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-foundation.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-animation-core.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-foundation-layout.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('uuid'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./appyx-utils-multiplatform.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-foundation.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-animation-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-foundation-layout.js'));
  else {
    if (typeof Uuid === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'uuid' was not found. Please, check whether 'uuid' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'appyx-interactions-common'.");
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
    root['appyx-interactions-common'] = factory(typeof this['appyx-interactions-common'] === 'undefined' ? {} : this['appyx-interactions-common'], Uuid, this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-unit'], this['appyx-utils-multiplatform'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-animation-core'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-foundation-layout']);
  }
}(this, function (_, Uuid, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_appyx_utils_multiplatform, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation_layout) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var VOID = kotlin_kotlin.$_$.e;
  var stateIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var protoOf = kotlin_kotlin.$_$.ud;
  var toString = kotlin_kotlin.$_$.zd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var classMeta = kotlin_kotlin.$_$.hc;
  var setMetadataFor = kotlin_kotlin.$_$.vd;
  var scan = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var CoroutineImpl = kotlin_kotlin.$_$.ob;
  var Unit_getInstance = kotlin_kotlin.$_$.b5;
  var THROW_CCE = kotlin_kotlin.$_$.qh;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ya;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var SuspendFunction1 = kotlin_kotlin.$_$.qb;
  var SuspendFunction2 = kotlin_kotlin.$_$.rb;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var hashCode = kotlin_kotlin.$_$.uc;
  var getStringHashCode = kotlin_kotlin.$_$.tc;
  var equals = kotlin_kotlin.$_$.lc;
  var Parcelable = kotlin_appyx_utils_multiplatform.$_$.a;
  var getNumberHashCode = kotlin_kotlin.$_$.qc;
  var getBooleanHashCode = kotlin_kotlin.$_$.oc;
  var Annotation = kotlin_kotlin.$_$.yg;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.td;
  var interfaceMeta = kotlin_kotlin.$_$.wc;
  var awaitEachGesture = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m1;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.fd;
  var awaitFirstDown = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var awaitTouchSlopOrCancellation = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o1;
  var awaitDragOrCancellation = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l1;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var emptySet = kotlin_kotlin.$_$.r7;
  var plus = kotlin_kotlin.$_$.k9;
  var objectCreate = kotlin_kotlin.$_$.sd;
  var Set = kotlin_kotlin.$_$.g6;
  var AppyxLogger_getInstance = kotlin_appyx_utils_multiplatform.$_$.b;
  var fillArrayVal = kotlin_kotlin.$_$.mc;
  var isArray = kotlin_kotlin.$_$.xc;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var to = kotlin_kotlin.$_$.dj;
  var combineInternal = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var List = kotlin_kotlin.$_$.v5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var toList = kotlin_kotlin.$_$.ka;
  var copyToArray = kotlin_kotlin.$_$.n7;
  var Pair = kotlin_kotlin.$_$.nh;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.xi;
  var transformLatest = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var emptyList = kotlin_kotlin.$_$.p7;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.yi;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var numberToInt = kotlin_kotlin.$_$.qd;
  var Offset__isValid_impl_z7krde = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var Offset__getDistanceSquared_impl_97mhi6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var ensureNotNull = kotlin_kotlin.$_$.ji;
  var isNaN_0 = kotlin_kotlin.$_$.ni;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ri;
  var get_lastIndex = kotlin_kotlin.$_$.s8;
  var Collection = kotlin_kotlin.$_$.l5;
  var plus_0 = kotlin_kotlin.$_$.m9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j4;
  var lazy = kotlin_kotlin.$_$.qi;
  var KProperty1 = kotlin_kotlin.$_$.df;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sc;
  var distinctUntilChanged = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var filterNotNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var last = kotlin_kotlin.$_$.x8;
  var listOf = kotlin_kotlin.$_$.b9;
  var dropLast = kotlin_kotlin.$_$.o7;
  var coerceIn = kotlin_kotlin.$_$.se;
  var THROW_IAE = kotlin_kotlin.$_$.rh;
  var enumEntries = kotlin_kotlin.$_$.wb;
  var Enum = kotlin_kotlin.$_$.eh;
  var getKClass = kotlin_kotlin.$_$.c;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.h;
  var lazy_0 = kotlin_kotlin.$_$.pi;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.c8;
  var PointerEventPass_Initial_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.k8;
  var interceptOutOfBoundsChildEvents = kotlin_org_jetbrains_compose_ui_ui.$_$.d5;
  var onDensityChange = kotlin_org_jetbrains_compose_ui_ui.$_$.e5;
  var onViewConfigurationChange = kotlin_org_jetbrains_compose_ui_ui.$_$.f5;
  var PointerInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var MutableMap = kotlin_kotlin.$_$.d6;
  var toString_0 = kotlin_kotlin.$_$.cj;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.g;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Offset__times_impl_jz1mli = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var get_PI = kotlin_kotlin.$_$.ae;
  var Offset__component1_impl_qn5q2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var Offset__component2_impl_9ljbv = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var Long = kotlin_kotlin.$_$.jh;
  var numberToLong = kotlin_kotlin.$_$.rd;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var AnimationVector = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var AnimationVector3D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var AnimationVector1D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var combine = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var collectAsState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.o9;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.g8;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var drawWithContent = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a4;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var roundToInt = kotlin_kotlin.$_$.fe;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Alignment = kotlin_org_jetbrains_compose_ui_ui.$_$.w7;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var Animatable_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var boundsInParent = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var boundsInWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.y3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var KProperty0 = kotlin_kotlin.$_$.cf;
  var THROW_ISE = kotlin_kotlin.$_$.sh;
  var getLocalDelegateReference = kotlin_kotlin.$_$.pc;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.x5;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var requiredSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u3;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var onSizeChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var plus_1 = kotlin_kotlin.$_$.n9;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var onGloballyPositioned = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var combine_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var LaunchedEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var collectAsState$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Box$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var roundToLong = kotlin_kotlin.$_$.ge;
  //endregion
  //region block: pre-declaration
  setMetadataFor(CompareValues, 'CompareValues', classMeta, VOID, VOID, CompareValues);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(mapState$o$collect$slambda, 'mapState$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$0, '$collectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(withPrevious$slambda, 'withPrevious$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(withPrevious$o$collect$slambda, 'withPrevious$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(Element, 'Element', classMeta, VOID, [Parcelable]);
  setMetadataFor(FloatRange, 'FloatRange', classMeta, VOID, [Annotation]);
  setMetadataFor(GestureValidator, 'GestureValidator', interfaceMeta);
  setMetadataFor(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0, 'sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0', classMeta, VOID, [GestureValidator]);
  setMetadataFor(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0, 'sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0', classMeta, VOID, [GestureValidator]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(detectDragGesturesOrCancellation$slambda, 'detectDragGesturesOrCancellation$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($dragCOROUTINE$2, '$dragCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Elements, 'Elements', classMeta, VOID, VOID, Elements_init_$Create$);
  setMetadataFor(Plugin, 'Plugin', interfaceMeta);
  function saveInstanceState(state) {
  }
  setMetadataFor(SavesInstanceState, 'SavesInstanceState', interfaceMeta, VOID, [Plugin]);
  setMetadataFor(AppyxComponent, 'AppyxComponent', interfaceMeta, VOID, [SavesInstanceState]);
  setMetadataFor(BaseAppyxComponent$slambda$slambda, 'BaseAppyxComponent$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda$slambda, 'BaseAppyxComponent$observeAnimationChanges$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1, 'BaseAppyxComponent$observeAnimationChanges$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda, 'BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$3, '$collectCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda, 'BaseAppyxComponent$observeVisualisation$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda_1, 'BaseAppyxComponent$observeVisualisation$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda_3, 'BaseAppyxComponent$observeVisualisation$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$slambda, 'BaseAppyxComponent$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda, 'BaseAppyxComponent$observeAnimationChanges$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda_1, 'BaseAppyxComponent$observeAnimationChanges$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda, 'BaseAppyxComponent$observeVisualisation$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(HasDefaultAnimationSpec, 'HasDefaultAnimationSpec', interfaceMeta);
  setMetadataFor(Draggable, 'Draggable', interfaceMeta, VOID, [HasDefaultAnimationSpec]);
  setMetadataFor(UiContextAware, 'UiContextAware', interfaceMeta);
  setMetadataFor(TransitionBoundsAware, 'TransitionBoundsAware', interfaceMeta);
  setMetadataFor(BaseAppyxComponent, 'BaseAppyxComponent', classMeta, VOID, [AppyxComponent, HasDefaultAnimationSpec, Draggable, UiContextAware, TransitionBoundsAware]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_4, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(removedElements$o$collect$slambda, 'removedElements$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$4, '$collectCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(BackPressHandlerStrategy, 'BackPressHandlerStrategy', interfaceMeta);
  setMetadataFor(BaseBackPressHandlerStrategy, 'BaseBackPressHandlerStrategy', classMeta, VOID, [BackPressHandlerStrategy]);
  setMetadataFor(DontHandleBackPress, 'DontHandleBackPress', classMeta, BaseBackPressHandlerStrategy, VOID, DontHandleBackPress);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(AnimatedProgressController$animateModel$slambda, 'AnimatedProgressController$animateModel$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(AnimatedProgressController$stopModel$slambda, 'AnimatedProgressController$stopModel$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ProgressController, 'ProgressController', interfaceMeta);
  setMetadataFor(AnimatedProgressController, 'AnimatedProgressController', classMeta, VOID, [ProgressController, HasDefaultAnimationSpec]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(DebugProgressInputSource, 'DebugProgressInputSource', classMeta, VOID, [ProgressController]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(DragProgressController, 'DragProgressController', classMeta, VOID, [Draggable]);
  setMetadataFor(InstantProgressController, 'InstantProgressController', classMeta, VOID, [ProgressController]);
  setMetadataFor(Operation, 'Operation', interfaceMeta, VOID, [Parcelable]);
  setMetadataFor(BaseOperation, 'BaseOperation', classMeta, VOID, [Operation]);
  setMetadataFor(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0, 'BaseTransitionModel$<get-elements>$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$5, '$collectCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_5, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  function operation$default(operation, overrideMode, $super) {
    overrideMode = overrideMode === VOID ? null : overrideMode;
    return $super === VOID ? this.operation_8tra3c_k$(operation, overrideMode) : $super.operation_8tra3c_k$.call(this, operation, overrideMode);
  }
  function canApply(operation) {
    return operation.isApplicable_aum5ae_k$(this.get_output_hs4j62_k$().get_value_j01efc_k$().get_currentTargetState_l0vn00_k$());
  }
  function onSettled$default(direction, animate, $super) {
    animate = animate === VOID ? false : animate;
    var tmp;
    if ($super === VOID) {
      this.onSettled_jd35ld_k$(direction, animate);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.onSettled_jd35ld_k$.call(this, direction, animate);
    }
    return tmp;
  }
  setMetadataFor(TransitionModel, 'TransitionModel', interfaceMeta, VOID, [SavesInstanceState]);
  setMetadataFor(BaseTransitionModel, 'BaseTransitionModel', classMeta, VOID, [TransitionModel]);
  setMetadataFor(Keyframes$currentIndexFlow$o$collect$slambda, 'Keyframes$currentIndexFlow$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(Keyframes$currentSegmentFlow$o$collect$slambda, 'Keyframes$currentSegmentFlow$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$7, '$collectCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda, 'Keyframes$currentSegmentTargetStateFlow$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$8, '$collectCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(Keyframes$getSegmentProgress$o$collect$slambda, 'Keyframes$getSegmentProgress$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$9, '$collectCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_6, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_7, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_8, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_9, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(Output, 'Output', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_10});
  setMetadataFor(Keyframes, 'Keyframes', classMeta, Output);
  setMetadataFor(Mode, 'Mode', classMeta, Enum);
  setMetadataFor(Noop, 'Noop', classMeta, VOID, [Operation], Noop);
  setMetadataFor(Segment, 'Segment', classMeta);
  setMetadataFor(StateTransition, 'StateTransition', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(SettleDirection, 'SettleDirection', classMeta, Enum);
  setMetadataFor(Update, 'Update', classMeta, Output);
  setMetadataFor(PointerInputElement, 'PointerInputElement', classMeta, ModifierNodeElement);
  setMetadataFor(OnPointerEventNode, 'OnPointerEventNode', classMeta, Node, [PointerInputModifierNode, Node]);
  setMetadataFor(MutableSavedStateMap, 'MutableSavedStateMap', interfaceMeta, VOID, [MutableMap]);
  setMetadataFor(MutableSavedStateMapImpl, 'MutableSavedStateMapImpl', classMeta, VOID, [MutableSavedStateMap, MutableMap]);
  setMetadataFor(Visualisation$map$o$collect$slambda, 'Visualisation$map$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_10, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_8, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  function overrideAnimationSpec(springSpec) {
  }
  function isAnimating() {
    return MutableStateFlow(false);
  }
  function map(output) {
    var tmp;
    if (output instanceof Keyframes) {
      // Inline function 'kotlinx.coroutines.flow.map' call
      // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
      var this_0 = output.get_currentIndexFlow_tqs8s0_k$();
      // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
      tmp = new _no_name_provided__qut3iv_8(this_0, this, output);
    } else {
      if (output instanceof Update) {
        tmp = MutableStateFlow(this.mapUpdate_9ctc9w_k$(output));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function mapKeyframes(keyframes, segmentIndex) {
    var tmp = keyframes.get_currentSegment_vblyf1_k$();
    var tmp_0 = keyframes.getSegmentProgress_gtqlgy_k$(segmentIndex);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = toSegmentProgress(keyframes.get_progress_mo5qeu_k$(), segmentIndex);
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'com.bumble.appyx.interactions.core.ui.Visualisation.mapKeyframes.<anonymous>' call
        var message = 'Segment progress should be in bounds';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return this.mapSegment_9zpqmf_k$(tmp, tmp_0, tmp$ret$1);
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
  setMetadataFor(Noop_0, 'Noop', classMeta, Gesture, VOID, Noop_0);
  function get_isContinuous() {
    return true;
  }
  function onStartDrag(position) {
  }
  setMetadataFor(GestureFactory, 'GestureFactory', interfaceMeta);
  setMetadataFor(Noop_1, 'Noop', classMeta, VOID, [GestureFactory], Noop_1);
  setMetadataFor(GestureSettleConfig, 'GestureSettleConfig', classMeta, VOID, VOID, GestureSettleConfig);
  setMetadataFor(_no_name_provided__qut3iv_9, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(ElementUiModel, 'ElementUiModel', classMeta);
  setMetadataFor(Interpolatable, 'Interpolatable', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [3]);
  setMetadataFor(Target, 'Target', interfaceMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(MotionProperty$renderValueFlow$slambda, 'MotionProperty$renderValueFlow$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor($snapToCOROUTINE$11, '$snapToCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor($animateToCOROUTINE$12, '$animateToCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor(MotionProperty, 'MotionProperty', classMeta, VOID, VOID, VOID, VOID, VOID, [1, 3]);
  setMetadataFor(Target_0, 'Target', classMeta, VOID, [Target]);
  setMetadataFor(Alpha, 'Alpha', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, VOID, [3, 1]);
  setMetadataFor(Target_1, 'Target', classMeta, VOID, [Target]);
  setMetadataFor(ColorOverlay, 'ColorOverlay', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, VOID, [3, 1]);
  setMetadataFor(Target_2, 'Target', classMeta, VOID, [Target]);
  setMetadataFor(GenericFloatProperty, 'GenericFloatProperty', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, VOID, [3, 1]);
  setMetadataFor(Target_3, 'Target', classMeta, VOID, [Target]);
  setMetadataFor(Shadow, 'Shadow', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, VOID, [3, 1]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(BiasAlignment, 'BiasAlignment', classMeta, VOID, [Alignment]);
  setMetadataFor(OutsideAlignment, 'OutsideAlignment', classMeta, BiasAlignment);
  setMetadataFor(InsideAlignment, 'InsideAlignment', classMeta, BiasAlignment);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Value, 'Value', classMeta, VOID, [Alignment], Value);
  setMetadataFor(Target_4, 'Target', classMeta, VOID, [Target], Target_init_$Create$);
  setMetadataFor(PositionAlignment, 'PositionAlignment', classMeta, MotionProperty, [MotionProperty, Interpolatable], VOID, VOID, VOID, [3, 1]);
  setMetadataFor(BaseMutableUiState$isVisible$o$collect$slambda, 'BaseMutableUiState$isVisible$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$13, '$collectCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor(BaseMutableUiState$isAnimating$o$collect$slambda, 'BaseMutableUiState$isAnimating$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$14, '$collectCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_10, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_11, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseMutableUiState, 'BaseMutableUiState', classMeta, VOID, [TransitionBoundsAware], VOID, VOID, VOID, [1, 3]);
  setMetadataFor(MatchedTargetUiState, 'MatchedTargetUiState', classMeta);
  setMetadataFor(AnimationMode, 'AnimationMode', classMeta, Enum);
  setMetadataFor(MutableUiStateSpecs, 'MutableUiStateSpecs', classMeta, VOID, [Annotation]);
  setMetadataFor(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn, 'BaseVisualisation$<get-viewpointIsAnimating>$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$17, '$collectCOROUTINE$17', classMeta, CoroutineImpl);
  setMetadataFor(BaseVisualisation$mapSegment$slambda$slambda, 'BaseVisualisation$mapSegment$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ManageAnimations$composable$slambda$slambda, 'BaseVisualisation$ManageAnimations$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda, 'BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda, 'BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ViewpointBehaviour, 'ViewpointBehaviour', classMeta, Enum);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_11, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_12, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_12, VOID, classMeta, VOID, [Flow], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy, 'BaseVisualisation$<get-isAnimatingState>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [2]);
  setMetadataFor(BaseVisualisation$mapUpdate$slambda, 'BaseVisualisation$mapUpdate$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$mapSegment$slambda, 'BaseVisualisation$mapSegment$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ManageAnimations$composable$slambda, 'BaseVisualisation$ManageAnimations$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda, 'BaseVisualisation$ObserveElementAnimationChanges$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$InterpolateUiState$composable$slambda, 'BaseVisualisation$InterpolateUiState$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($updateViewpointCOROUTINE$15, '$updateViewpointCOROUTINE$15', classMeta, CoroutineImpl);
  setMetadataFor($updateViewpointCOROUTINE$16, '$updateViewpointCOROUTINE$16', classMeta, CoroutineImpl);
  setMetadataFor(BaseVisualisation, 'BaseVisualisation', classMeta, VOID, [Visualisation], VOID, VOID, VOID, [1, 2]);
  setMetadataFor(SystemClock, 'SystemClock', objectMeta);
  setMetadataFor(UUID, 'UUID', objectMeta);
  //endregion
  function mapState(_this__u8e3s4, scope, sharingStarted, mapper) {
    sharingStarted = sharingStarted === VOID ? Companion_getInstance().get_Eagerly_3vw7yc_k$() : sharingStarted;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp$ret$2 = new _no_name_provided__qut3iv(_this__u8e3s4, mapper);
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
      var message = 'Should not be invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CompareValues).get_isInitialized_44jfmn_k$ = function () {
    return !(this.currentNullable_1 == null);
  };
  protoOf(CompareValues).combine_oqdlrk_k$ = function (new_0) {
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
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = scan(_this__u8e3s4, tmp, withPrevious$slambda_0(null));
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(this_0);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function mapState$o$collect$slambda($$this$unsafeFlow, $mapper, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.$mapper_1 = $mapper;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mapState$o$collect$slambda).invoke_oz8tte_k$ = function (value, $completion) {
    var tmp = this.create_zam77m_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(mapState$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_oz8tte_k$((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mapState$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var it = this.value1__1;
            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(this.$mapper_1(it), this);
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
  protoOf(mapState$o$collect$slambda).create_zam77m_k$ = function (value, completion) {
    var i = new mapState$o$collect$slambda(this.$$this$unsafeFlow_1, this.$mapper_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(mapState$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_zam77m_k$((value == null ? true : !(value == null)) ? value : THROW_CCE(), completion);
  };
  function mapState$o$collect$slambda_0($$this$unsafeFlow, $mapper, resultContinuation) {
    var i = new mapState$o$collect$slambda($$this$unsafeFlow, $mapper, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_oz8tte_k$(value, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = mapState$o$collect$slambda_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.$mapper_1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  function _no_name_provided__qut3iv($this, $mapper) {
    this.$this_1 = $this;
    this.$mapper_1 = $mapper;
  }
  protoOf(_no_name_provided__qut3iv).collect_qcqxih_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_qcqxih_k$(collector, $completion);
  };
  function withPrevious$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$slambda).invoke_z92hmi_k$ = function (previous, current, $completion) {
    var tmp = this.create_eggz8a_k$(previous, current, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(withPrevious$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof CompareValues ? p1 : THROW_CCE();
    return this.invoke_z92hmi_k$(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(withPrevious$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.previous_1.combine_oqdlrk_k$(this.current_1);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(withPrevious$slambda).create_eggz8a_k$ = function (previous, current, completion) {
    var i = new withPrevious$slambda(completion);
    i.previous_1 = previous;
    i.current_1 = current;
    return i;
  };
  function withPrevious$slambda_0(resultContinuation) {
    var i = new withPrevious$slambda(resultContinuation);
    var l = function (previous, current, $completion) {
      return i.invoke_z92hmi_k$(previous, current, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function withPrevious$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$o$collect$slambda).invoke_nroxq3_k$ = function (value, $completion) {
    var tmp = this.create_hue3cn_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(withPrevious$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nroxq3_k$(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(withPrevious$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform1__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value2__1 = this.value_1;
            if (this.value2__1.get_isInitialized_44jfmn_k$()) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = this.$this$unsafeTransform1__1.emit_t92u1f_k$(this.value2__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
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
  protoOf(withPrevious$o$collect$slambda).create_hue3cn_k$ = function (value, completion) {
    var i = new withPrevious$o$collect$slambda(this.$$this$unsafeFlow_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(withPrevious$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_hue3cn_k$(value instanceof CompareValues ? value : THROW_CCE(), completion);
  };
  function withPrevious$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new withPrevious$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_nroxq3_k$(value, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = withPrevious$o$collect$slambda_0(this.$this$unsafeFlow0__1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  function _no_name_provided__qut3iv_0($this) {
    this.$this_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_0).collect_pj71r9_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_0).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_pj71r9_k$(collector, $completion);
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
  protoOf(Element).copy_evk2cl_k$ = function (interactionTarget, id) {
    return new Element(interactionTarget, id);
  };
  protoOf(Element).copy$default_x1vxdr_k$ = function (interactionTarget, id, $super) {
    interactionTarget = interactionTarget === VOID ? this.interactionTarget_1 : interactionTarget;
    id = id === VOID ? this.id_1 : id;
    return $super === VOID ? this.copy_evk2cl_k$(interactionTarget, id) : $super.copy_evk2cl_k$.call(this, interactionTarget, id);
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
    result = result + (imul(getStringHashCode('fromInclusive'), 127) ^ getBooleanHashCode(this.fromInclusive_1)) | 0;
    result = result + (imul(getStringHashCode('toInclusive'), 127) ^ getBooleanHashCode(this.toInclusive_1)) | 0;
    return result;
  };
  protoOf(FloatRange).toString = function () {
    return '@com.bumble.appyx.interactions.core.annotations.FloatRange(from=' + this.from_1 + ', to=' + this.to_1 + ', fromInclusive=' + this.fromInclusive_1 + ', toInclusive=' + this.toInclusive_1 + ')';
  };
  function sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0).isGestureValid_ow9x0_k$ = function (position, boundingBox) {
    return this.function_1(new Offset(position), boundingBox);
  };
  function sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0).isGestureValid_ow9x0_k$ = function (position, boundingBox) {
    return this.function_1(new Offset(position), boundingBox);
  };
  function GestureValidator$Companion$defaultValidator$lambda(position, boundingBox) {
    return boundingBox.contains_obi4ph_k$(position.packedValue_1);
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
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
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
      change.consume_sos6hg_k$();
      $overSlop._v = over;
      return Unit_getInstance();
    };
  }
  function detectDragGesturesOrCancellation$slambda$lambda_0($onDrag) {
    return function (it) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.interactions.core.gesture.detectDragGesturesOrCancellation.<anonymous>.<anonymous>.<anonymous>' call
      var $this$run = $onDrag(it, new Offset(positionChange(it)));
      it.consume_sos6hg_k$();
      return $this$run;
    };
  }
  function detectDragGesturesOrCancellation$slambda($onDragStart, $onDrag, $onDragEnd, resultContinuation) {
    this.$onDragStart_1 = $onDragStart;
    this.$onDrag_1 = $onDrag;
    this.$onDragEnd_1 = $onDragEnd;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectDragGesturesOrCancellation$slambda).invoke_mnrbcb_k$ = function ($this$awaitEachGesture, $completion) {
    var tmp = this.create_3qvng7_k$($this$awaitEachGesture, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(detectDragGesturesOrCancellation$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_mnrbcb_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectDragGesturesOrCancellation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(1);
            suspendResult = awaitFirstDown(this.$this$awaitEachGesture_1, false, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.down0__1 = suspendResult;
            this.overSlop2__1 = {_v: new Offset(Companion_getInstance_0().get_Zero_k6n73t_k$())};
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            var tmp_0 = this.down0__1.get_id_o9b1d7_k$();
            suspendResult = awaitTouchSlopOrCancellation(this.$this$awaitEachGesture_1, tmp_0, detectDragGesturesOrCancellation$slambda$lambda(this.overSlop2__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.drag1__1 = suspendResult;
            if (!(this.drag1__1 == null) ? !this.drag1__1.get_isConsumed_scj5q3_k$() : false) {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!(this.drag1__1 == null)) {
              this.$onDragStart_1(new Offset(this.drag1__1.get_position_cpyh94_k$()));
              this.$onDrag_1(this.drag1__1, this.overSlop2__1._v);
              this.set_state_rjd8d0_k$(5);
              var tmp_1 = this.drag1__1.get_id_o9b1d7_k$();
              suspendResult = drag(this.$this$awaitEachGesture_1, tmp_1, detectDragGesturesOrCancellation$slambda$lambda_0(this.$onDrag_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

          case 5:
            if (suspendResult) {
              this.$onDragEnd_1();
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

          case 6:
            this.set_state_rjd8d0_k$(7);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(detectDragGesturesOrCancellation$slambda).create_3qvng7_k$ = function ($this$awaitEachGesture, completion) {
    var i = new detectDragGesturesOrCancellation$slambda(this.$onDragStart_1, this.$onDrag_1, this.$onDragEnd_1, completion);
    i.$this$awaitEachGesture_1 = $this$awaitEachGesture;
    return i;
  };
  protoOf(detectDragGesturesOrCancellation$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3qvng7_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function detectDragGesturesOrCancellation$slambda_0($onDragStart, $onDrag, $onDragEnd, resultContinuation) {
    var i = new detectDragGesturesOrCancellation$slambda($onDragStart, $onDrag, $onDragEnd, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.invoke_mnrbcb_k$($this$awaitEachGesture, $completion);
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
            this.set_exceptionState_fex74n_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
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

            this.pointer0__1 = change.get_id_o9b1d7_k$();
            this.set_state_rjd8d0_k$(1);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
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
  protoOf(BaseAppyxComponent$slambda$slambda).invoke_tobi1d_k$ = function (it, $completion) {
    var tmp = this.create_f7iisz_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_tobi1d_k$((!(p1 == null) ? isInterface(p1, Set) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1._elements_1.emit_t92u1f_k$(Elements_init_$Create$(VOID, this.it_1), this);
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
  protoOf(BaseAppyxComponent$slambda$slambda).create_f7iisz_k$ = function (it, completion) {
    var i = new BaseAppyxComponent$slambda$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(BaseAppyxComponent$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_f7iisz_k$((!(value == null) ? isInterface(value, Set) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$slambda$slambda_0(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$slambda$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_tobi1d_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).invoke_f29lti_k$ = function (it, $completion) {
    var tmp = this.create_vh5neu_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_f29lti_k$((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (!this.it_1) {
            AppyxLogger_getInstance().d_86dvmc_k$('AppyxComponent', 'Finished animating');
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).create_vh5neu_k$ = function (it, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_vh5neu_k$((!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda_0(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_f29lti_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).invoke_v667qb_k$ = function (it, $completion) {
    var tmp = this.create_gvzvvt_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_v667qb_k$(p1 instanceof Element ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          AppyxLogger_getInstance().d_86dvmc_k$('AppyxComponent', '' + this.it_1 + ' onAnimation finished');
          this.this$0__1.model_1.cleanUpElement_m6s01w_k$(this.it_1);
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).create_gvzvvt_k$ = function (it, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_gvzvvt_k$(value instanceof Element ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda_2(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_v667qb_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$lambda($flowArray) {
    return function () {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = $flowArray.length;
      return fillArrayVal(Array(size), null);
    };
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda($elementUiModels, resultContinuation) {
    this.$elementUiModels_1 = $elementUiModels;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).invoke_dgh7wy_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_w28dzq_k$($this$combineInternal, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_dgh7wy_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var visibilityValues = this.it_1;
            var onScreen = LinkedHashSet_init_$Create$();
            var offScreen = LinkedHashSet_init_$Create$();
            var index = 0;
            var inductionVariable = 0;
            var last = visibilityValues.length;
            while (inductionVariable < last) {
              var item = visibilityValues[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              var element = this.$elementUiModels_1.get_c1px32_k$(tmp1).get_element_q8gf71_k$();
              if (item) {
                onScreen.add_utx5q5_k$(element);
              } else {
                offScreen.add_utx5q5_k$(element);
              }
            }

            suspendResult = this.$this$combineInternal_1.emit_t92u1f_k$(to(Elements_init_$Create$(onScreen, offScreen), this.$elementUiModels_1), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).create_w28dzq_k$ = function ($this$combineInternal, it, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda(this.$elementUiModels_1, completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda_0($elementUiModels, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda($elementUiModels, resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_dgh7wy_k$($this$combineInternal, it, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$lambda(this._this__u8e3s4__1.$flowArray_1);
            suspendResult = combineInternal(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.$flowArray_1, tmp_1, BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda_0(this._this__u8e3s4__1.$elementUiModels_1, null), this);
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
  function _no_name_provided__qut3iv_1($flowArray, $elementUiModels) {
    this.$flowArray_1 = $flowArray;
    this.$elementUiModels_1 = $elementUiModels;
  }
  protoOf(_no_name_provided__qut3iv_1).collect_9hf4i9_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_1).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_9hf4i9_k$(collector, $completion);
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda($visualisation, resultContinuation) {
    this.$visualisation_1 = $visualisation;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).invoke_qmgta7_k$ = function ($this$transformLatest, it, $completion) {
    var tmp = this.create_s42l57_k$($this$transformLatest, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_qmgta7_k$(tmp, p2 instanceof Output ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var it = this.it_1;
            suspendResult = emitAll(this.$this$transformLatest_1, this.$visualisation_1.map_1frjmg_k$(it), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).create_s42l57_k$ = function ($this$transformLatest, it, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda(this.$visualisation_1, completion);
    i.$this$transformLatest_1 = $this$transformLatest;
    i.it_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_0($visualisation, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda($visualisation, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.invoke_qmgta7_k$($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).invoke_zdypjf_k$ = function ($this$transformLatest, it, $completion) {
    var tmp = this.create_8dm7sx_k$($this$transformLatest, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_zdypjf_k$(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var elementUiModels = this.it_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elementUiModels, 10));
            var tmp0_iterator = elementUiModels.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator.next_20eer_k$();
              destination.add_utx5q5_k$(item.get_visibleState_frxjc_k$());
            }

            var visibilityFlows = destination;
            var this_0 = toList(visibilityFlows);
            var flowArray = copyToArray(this_0);
            suspendResult = emitAll(this.$this$transformLatest_1, new _no_name_provided__qut3iv_1(flowArray, elementUiModels), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).create_8dm7sx_k$ = function ($this$transformLatest, it, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_1(completion);
    i.$this$transformLatest_1 = $this$transformLatest;
    i.it_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_2(resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_1(resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.invoke_zdypjf_k$($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).invoke_93y9qi_k$ = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.create_e3iwn2_k$(_name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_93y9qi_k$(p1 instanceof Pair ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.elementsState0__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component1_7eebsc_k$();
            this.elementUiModels1__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component2_7eebsb_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1._elements_1.emit_t92u1f_k$(this.elementsState0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.this$0__1._uiModels_1.emit_t92u1f_k$(this.elementUiModels1__1, this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).create_e3iwn2_k$ = function (_name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_3(this.this$0__1, completion);
    i._name_for_destructuring_parameter_0__wldtmu_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).create_wyq9v6_k$ = function (value, completion) {
    return this.create_e3iwn2_k$(value instanceof Pair ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_4(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_3(this$0, resultContinuation);
    var l = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.invoke_93y9qi_k$(_name_for_destructuring_parameter_0__wldtmu, $completion);
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
      tmp0_safe_receiver.cancel$default_8haxne_k$();
    }
    var tmp = $this;
    tmp.animationChangesJob_1 = launch($this.scope_1, VOID, VOID, BaseAppyxComponent$observeAnimationChanges$slambda_0(visualisation, $this, null));
    var tmp1_safe_receiver = $this.animationFinishedJob_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.cancel$default_8haxne_k$();
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
    visualisation.updateBounds_l2zr9a_k$($this.transitionBounds_1);
    observeAnimationChanges($this, visualisation);
    observeVisualisation($this, visualisation);
  }
  function observeVisualisation($this, visualisation) {
    $this.elementsJob_1.cancel$default_8haxne_k$();
    var tmp0_safe_receiver = $this.visualisationObserverJob_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel$default_8haxne_k$();
    }
    var tmp = $this;
    tmp.visualisationObserverJob_1 = launch($this.scope_1, VOID, VOID, BaseAppyxComponent$observeVisualisation$slambda_0($this, visualisation, null));
  }
  function onAnimationsStarted($this) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = $this._isAnimating_1;
      while (true) {
        var prevValue = this_0.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.BaseAppyxComponent.onAnimationsStarted.<anonymous>' call
        var nextValue = true;
        if (this_0.compareAndSet_l3595a_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function onAnimationsFinished($this) {
    $this.model_1.relaxExecutionMode_iy77vp_k$();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = $this._isAnimating_1;
      while (true) {
        var prevValue = this_0.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.BaseAppyxComponent.onAnimationsFinished.<anonymous>' call
        var nextValue = false;
        if (this_0.compareAndSet_l3595a_k$(prevValue, nextValue)) {
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
        tmp0_safe_receiver.settle_7cdax1_k$();
      }
    } else {
      var tmp1_safe_receiver = $this.animated_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.settle_7jstbx_k$(gestureSettleConfig.get_completionThreshold_jce5xi_k$(), gestureSettleConfig.get_completeGestureSpec_cc2uv2_k$(), gestureSettleConfig.get_revertGestureSpec_32f4on_k$());
      }
    }
  }
  function get_$stableprop_2() {
    return 0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).emit_t92u1f_k$ = function (value, $completion) {
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
  protoOf(BaseAppyxComponent$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.this$0__1.model_1.get_elements_vxwh8g_k$();
            var tmp_1 = BaseAppyxComponent$slambda$slambda_0(this.this$0__1, null);
            suspendResult = tmp_0.collect_ve9kyv_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_1), this);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(BaseAppyxComponent$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseAppyxComponent$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$slambda_0(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda($visualisation, this$0, resultContinuation) {
    this.$visualisation_1 = $visualisation;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.$visualisation_1.isAnimating_x1kvqk_k$();
            var tmp_1 = BaseAppyxComponent$observeAnimationChanges$slambda$slambda_0(this.this$0__1, null);
            suspendResult = tmp_0.collect_ve9kyv_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_1), this);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda(this.$visualisation_1, this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda_0($visualisation, this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda($visualisation, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda_1($visualisation, this$0, resultContinuation) {
    this.$visualisation_1 = $visualisation;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this.$visualisation_1.get_finishedAnimations_ooylfa_k$();
            var tmp_1 = BaseAppyxComponent$observeAnimationChanges$slambda$slambda_2(this.this$0__1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_1), this);
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda_1(this.$visualisation_1, this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda_2($visualisation, this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda_1($visualisation, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda(this$0, $visualisation, resultContinuation) {
    this.this$0__1 = this$0;
    this.$visualisation_1 = $visualisation;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var this_0 = this.this$0__1.model_1.get_output_hs4j62_k$();
            var this_1 = transformLatest(this_0, BaseAppyxComponent$observeVisualisation$slambda$slambda_0(this.$visualisation_1, null));
            var tmp_0 = transformLatest(this_1, BaseAppyxComponent$observeVisualisation$slambda$slambda_2(null));
            var tmp_1 = BaseAppyxComponent$observeVisualisation$slambda$slambda_4(this.this$0__1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_1), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda(this.this$0__1, this.$visualisation_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseAppyxComponent$observeVisualisation$slambda_0(this$0, $visualisation, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda(this$0, $visualisation, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent(scope, model, visualisation, gestureFactory, defaultAnimationSpec, gestureSettleConfig, backPressStrategy, animateSettle, disableAnimations, isDebug) {
    scope = scope === VOID ? CoroutineScope_0(SupervisorJob().plus_s13ygv_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$())) : scope;
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
    this.backPressStrategy_1.init_yn7cyt_k$(this, this.model_1);
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
  protoOf(BaseAppyxComponent).onAddedToComposition_wz37qs_k$ = function (scope) {
    this.animationScope_1 = scope;
    createAnimatedInputSource(this, scope);
    createdDebugInputSource(this);
  };
  protoOf(BaseAppyxComponent).onRemovedFromComposition_vua1v5_k$ = function () {
    if (this.isDebug_1) {
      var tmp0_safe_receiver = this.debug_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.stopModel_nouoaf_k$();
      }
    } else {
      var tmp1_safe_receiver = this.animated_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.stopModel_nouoaf_k$();
      }
    }
    var tmp2_safe_receiver = this.animationScope_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      cancel(tmp2_safe_receiver);
    }
  };
  protoOf(BaseAppyxComponent).updateContext_7090ud_k$ = function (uiContext) {
    if (!equals(this.uiContext_1, uiContext)) {
      this.uiContext_1 = uiContext;
      AppyxLogger_getInstance().d_86dvmc_k$('AppyxComponent', '' + getKClassFromExpression(this).get_simpleName_r6f8py_k$() + ' \u2013 UiContext update: ' + uiContext);
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = this.visualisation_1(uiContext);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.interactions.core.model.BaseAppyxComponent.updateContext.<anonymous>' call
      onVisualisationReady(this, this_0);
      tmp._visualisation_1 = this_0;
    }
  };
  protoOf(BaseAppyxComponent).updateBounds_l2zr9a_k$ = function (transitionBounds) {
    if (!transitionBounds.equals(this.transitionBounds_1)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      AppyxLogger_getInstance().d_86dvmc_k$('AppyxComponent', '' + getKClassFromExpression(transitionBounds).get_simpleName_r6f8py_k$() + ' \u2013 Bounds update: ' + transitionBounds.get_widthPx_nfsdj9_k$() + 'x' + transitionBounds.get_heightPx_om8qxk_k$());
      this.transitionBounds_1 = transitionBounds;
      this._gestureFactory_1 = this.gestureFactory_1(transitionBounds);
      var tmp0_safe_receiver = this._visualisation_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.updateBounds_l2zr9a_k$(transitionBounds);
      }
    }
  };
  protoOf(BaseAppyxComponent).operation_o9y6c4_k$ = function (operation, animationSpec) {
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
        tmp0_safe_receiver.overrideAnimationSpec_gi2y1v_k$(animationSpec);
      }
    }
    var animatedSource = this.animated_1;
    var debugSource = this.debug_1;
    if (this.isDebug_1 ? !(debugSource == null) : false) {
      debugSource.operation_v3y197_k$(operation);
    } else if ((animatedSource == null ? true : get_DisableAnimations()) ? true : this.disableAnimations_1) {
      this.instant_1.operation_v3y197_k$(operation);
    } else {
      animatedSource.operation_vu2ij7_k$(operation, animationSpec == null ? this.defaultAnimationSpec_1 : animationSpec);
    }
  };
  protoOf(BaseAppyxComponent).operation$default_54dbls_k$ = function (operation, animationSpec, $super) {
    animationSpec = animationSpec === VOID ? null : animationSpec;
    var tmp;
    if ($super === VOID) {
      this.operation_o9y6c4_k$(operation, animationSpec);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.operation_o9y6c4_k$.call(this, operation, animationSpec);
    }
    return tmp;
  };
  protoOf(BaseAppyxComponent).onStartDrag_qsgty5_k$ = function (position) {
    this.drag_1.onStartDrag_qsgty5_k$(position);
  };
  protoOf(BaseAppyxComponent).onDrag_wbo8ju_k$ = function (dragAmount, density) {
    if (!this._isAnimating_1.get_value_j01efc_k$()) {
      this.drag_1.onDrag_wbo8ju_k$(dragAmount, density);
    }
  };
  protoOf(BaseAppyxComponent).onDragEnd_cvbntk_k$ = function () {
    if (!this._isAnimating_1.get_value_j01efc_k$()) {
      this.drag_1.onDragEnd_cvbntk_k$();
      settle(this, this.gestureSettleConfig_1);
    }
  };
  protoOf(BaseAppyxComponent).onRelease_f1rf6w_k$ = function () {
    if (this.drag_1.isDragging_r126p3_k$()) {
      this.onDragEnd_cvbntk_k$();
    }
  };
  protoOf(BaseAppyxComponent).destroy_evhcfe_k$ = function () {
    var tmp0_safe_receiver = this.visualisationObserverJob_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel$default_8haxne_k$();
    }
    this.elementsJob_1.cancel$default_8haxne_k$();
    cancel(this.scope_1);
  };
  protoOf(BaseAppyxComponent).setNormalisedProgress_feio53_k$ = function (progress) {
    var tmp0_safe_receiver = this.debug_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.setNormalisedProgress_feio53_k$(progress);
    }
  };
  protoOf(BaseAppyxComponent).handleBackPress_wbgl2k_k$ = function () {
    return this.backPressStrategy_1.handleBackPress_wbgl2k_k$();
  };
  protoOf(BaseAppyxComponent).canHandeBackPress_eochwq_k$ = function () {
    return this.backPressStrategy_1.get_canHandleBackPress_do39pp_k$();
  };
  protoOf(BaseAppyxComponent).saveInstanceState_lsffb1_k$ = function (state) {
    this.model_1.saveInstanceState_lsffb1_k$(state);
  };
  function removedElements(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = withPrevious(_this__u8e3s4.get_elements_vxwh8g_k$());
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_2(this_0);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function removedElements$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(removedElements$o$collect$slambda).invoke_t87xmf_k$ = function (value, $completion) {
    var tmp = this.create_k1pcxn_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(removedElements$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_t87xmf_k$(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(removedElements$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var values = this.value1__1;
            var tmp0_safe_receiver = values.get_previous_i5svy8_k$();
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_all_18j9hk_k$();
            var previousKeys = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
            var currentKeys = values.get_current_jwi6j4_k$().get_all_18j9hk_k$();
            var destination = ArrayList_init_$Create$_0();
            var tmp0_iterator = previousKeys.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              if (!currentKeys.contains_aljjnj_k$(element)) {
                destination.add_utx5q5_k$(element);
              }
            }

            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(destination, this);
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
  protoOf(removedElements$o$collect$slambda).create_k1pcxn_k$ = function (value, completion) {
    var i = new removedElements$o$collect$slambda(this.$$this$unsafeFlow_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(removedElements$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_k1pcxn_k$(value instanceof CompareValues ? value : THROW_CCE(), completion);
  };
  function removedElements$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new removedElements$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_t87xmf_k$(value, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = removedElements$o$collect$slambda_0(this.$this$unsafeFlow0__1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_1), this);
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
  function _no_name_provided__qut3iv_2($this) {
    this.$this_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_2).collect_w8q1gt_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$4(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_2).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_w8q1gt_k$(collector, $completion);
  };
  function BackPressHandlerStrategy() {
  }
  function get_$stableprop_3() {
    return 8;
  }
  function BaseBackPressHandlerStrategy() {
    this.$stable_1 = 8;
  }
  protoOf(BaseBackPressHandlerStrategy).set_appyxComponent_7fe95y_k$ = function (_set____db54di) {
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
  protoOf(BaseBackPressHandlerStrategy).set_transitionModel_eezoqk_k$ = function (_set____db54di) {
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
  protoOf(BaseBackPressHandlerStrategy).init_yn7cyt_k$ = function (appyxComponent, transitionModel) {
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
      this$0.model_1.setProgress_rzfdd3_k$($this$animateTo.get_value_j01efc_k$());
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
      this$0.model_1.onSettled_jd35ld_k$(SettleDirection_COMPLETE_getInstance(), this$0.animateSettle_1);
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
      this$0.model_1.onSettled_jd35ld_k$($direction, this$0.animateSettle_1);
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
  protoOf(AnimatedProgressController$animateModel$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedProgressController$animateModel$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedProgressController$animateModel$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatable_1.snapTo_o5pd1b_k$(this.$from_1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            var tmp_0 = this.$target_1();
            var tmp_1 = this.$cancelVelocity_1 ? 0.0 : this.$velocity_1;
            suspendResult = this.this$0__1.animatable_1.animateTo_z368sf_k$(tmp_0, this.$animationSpec_1, tmp_1, AnimatedProgressController$animateModel$slambda$lambda(this.this$0__1), this);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AnimatedProgressController$animateModel$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new AnimatedProgressController$animateModel$slambda(this.this$0__1, this.$from_1, this.$target_1, this.$animationSpec_1, this.$cancelVelocity_1, this.$velocity_1, this.$onAnimationFinished_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(AnimatedProgressController$animateModel$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedProgressController$animateModel$slambda_0(this$0, $from, $target, $animationSpec, $cancelVelocity, $velocity, $onAnimationFinished, resultContinuation) {
    var i = new AnimatedProgressController$animateModel$slambda(this$0, $from, $target, $animationSpec, $cancelVelocity, $velocity, $onAnimationFinished, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedProgressController$stopModel$slambda(this$0, $currentState, resultContinuation) {
    this.this$0__1 = this$0;
    this.$currentState_1 = $currentState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedProgressController$stopModel$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedProgressController$stopModel$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedProgressController$stopModel$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.animatable_1.snapTo_o5pd1b_k$(this.$currentState_1.get_progress_mo5qeu_k$(), this);
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
  protoOf(AnimatedProgressController$stopModel$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new AnimatedProgressController$stopModel$slambda(this.this$0__1, this.$currentState_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(AnimatedProgressController$stopModel$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedProgressController$stopModel$slambda_0(this$0, $currentState, resultContinuation) {
    var i = new AnimatedProgressController$stopModel$slambda(this$0, $currentState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
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
  protoOf(AnimatedProgressController).operation_v3y197_k$ = function (operation) {
    this.operation_vu2ij7_k$(operation, this.defaultAnimationSpec_1);
  };
  protoOf(AnimatedProgressController).operation_vu2ij7_k$ = function (operation, animationSpec) {
    this.model_1.operation$default_gat9f3_k$(operation);
    var currentState = this.model_1.get_output_hs4j62_k$().get_value_j01efc_k$();
    if (currentState instanceof Keyframes) {
      var tmp = AnimatedProgressController$operation$lambda(currentState);
      var tmp_0 = AnimatedProgressController$operation$lambda_0(currentState);
      animateModel(this, tmp, tmp_0, animationSpec, false, AnimatedProgressController$operation$lambda_1(this));
    }
  };
  protoOf(AnimatedProgressController).settle_7jstbx_k$ = function (completionThreshold, completeGestureSpec, revertGestureSpec) {
    var currentState = this.model_1.get_output_hs4j62_k$().get_value_j01efc_k$();
    if (currentState instanceof Keyframes) {
      var currentProgress = currentState.get_progress_mo5qeu_k$();
      var direction = currentProgress % 1 < completionThreshold ? SettleDirection_REVERT_getInstance() : SettleDirection_COMPLETE_getInstance();
      var tmp;
      if (direction.equals(SettleDirection_REVERT_getInstance())) {
        // Inline function 'kotlin.math.floor' call
        var tmp$ret$0 = Math.floor(currentProgress);
        tmp = numberToInt(tmp$ret$0);
      } else {
        // Inline function 'kotlin.math.ceil' call
        var tmp$ret$1 = Math.ceil(currentProgress);
        tmp = numberToInt(tmp$ret$1);
      }
      var targetValue = tmp;
      var animationSpec = direction.equals(SettleDirection_REVERT_getInstance()) ? revertGestureSpec : completeGestureSpec;
      AppyxLogger_getInstance().d_86dvmc_k$('AnimatedProgressController', 'Settle ' + currentState.get_progress_mo5qeu_k$() + ' to: ' + targetValue);
      var tmp_0 = AnimatedProgressController$settle$lambda(currentState);
      var tmp_1 = AnimatedProgressController$settle$lambda_0(targetValue);
      animateModel(this, tmp_0, tmp_1, animationSpec, true, AnimatedProgressController$settle$lambda_1(this, direction));
    }
  };
  protoOf(AnimatedProgressController).settle$default_79slji_k$ = function (completionThreshold, completeGestureSpec, revertGestureSpec, $super) {
    completionThreshold = completionThreshold === VOID ? 0.5 : completionThreshold;
    completeGestureSpec = completeGestureSpec === VOID ? spring() : completeGestureSpec;
    revertGestureSpec = revertGestureSpec === VOID ? spring() : revertGestureSpec;
    var tmp;
    if ($super === VOID) {
      this.settle_7jstbx_k$(completionThreshold, completeGestureSpec, revertGestureSpec);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.settle_7jstbx_k$.call(this, completionThreshold, completeGestureSpec, revertGestureSpec);
    }
    return tmp;
  };
  protoOf(AnimatedProgressController).stopModel_nouoaf_k$ = function () {
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
  protoOf(DebugProgressInputSource).operation_v3y197_k$ = function (operation) {
    this.transitionModel_1.operation_8tra3c_k$(operation, Mode_KEYFRAME_getInstance());
  };
  protoOf(DebugProgressInputSource).setNormalisedProgress_feio53_k$ = function (progress) {
  };
  protoOf(DebugProgressInputSource).settle_7cdax1_k$ = function () {
  };
  protoOf(DebugProgressInputSource).stopModel_nouoaf_k$ = function () {
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
    var value = $this.gesture_1;
    // Inline function 'kotlin.contracts.contract' call
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlin.requireNotNull.<anonymous>' call
        var message_1 = 'Required value was null.';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      } else {
        break $l$block_0;
      }
    }
    var operation = ensureNotNull($this.gesture_1).get_operation_z0nqyq_k$();
    operation.set_mode_yhptjw_k$(Mode_KEYFRAME_getInstance());
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
      if ($this.model_1.canApply_hy0zf0_k$(operation)) {
        $this.model_1.operation$default_gat9f3_k$(operation);
        ensureNotNull($this.gesture_1).set_startProgress_uoyvab_k$(currentProgress);
        AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', 'Gesture operation applied: ' + operation);
      } else {
        AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', "Gesture operation wasn't applied, releasing it to re-evaluate");
        $this.gesture_1 = null;
        return Unit_getInstance();
      }
    }
    var startProgress = ensureNotNull(ensureNotNull($this.gesture_1).get_startProgress_fo2we2_k$());
    var isGestureContinuous = $this.gestureFactory_1().get_isContinuous_ob44bi_k$();
    if (totalTarget > startProgress) {
      if (totalTarget < startProgress + 1) {
        $this.model_1.setProgress_rzfdd3_k$(totalTarget);
        var tmp_0;
        if (currentState instanceof Keyframes) {
          tmp_0 = currentState.get_progress_mo5qeu_k$();
        } else {
          tmp_0 = 0.0;
        }
        var currentProgress_0 = tmp_0;
        AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', 'delta applied forward, new progress: ' + currentProgress_0);
      } else if (isGestureContinuous) {
        var remainder = consumePartial($this, SettleDirection_COMPLETE_getInstance(), dragAmount, totalTarget, deltaProgress, startProgress + 1);
        if (Offset__getDistanceSquared_impl_97mhi6(remainder) > 0.0) {
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
    $this.model_1.setProgress_rzfdd3_k$(boundary);
    $this.model_1.onSettled_jd35ld_k$(direction, false);
    var remainder = ensureNotNull($this.gesture_1).get_partial_bujdrc_k$()(new Offset(dragAmount), totalTarget - boundary).packedValue_1;
    $this.gesture_1 = null;
    AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', '1 ------');
    AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', 'initial offset was: ' + new Offset(dragAmount));
    AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', 'initial deltaProgress was: ' + deltaProgress);
    AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', 'initial target was: ' + totalTarget + ', beyond current segment: ' + boundary);
    AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', 'remainder progress: ' + (totalTarget - boundary));
    AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', 'remainder offset: ' + new Offset(remainder));
    AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', 'going back to start, reevaluate');
    AppyxLogger_getInstance().d_86dvmc_k$('DragProgressController', '2 ------');
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
      return this$0.gestureFactory_1().createGesture_dk900z_k$(this$0.model_1.get_output_hs4j62_k$().get_value_j01efc_k$().get_currentTargetState_l0vn00_k$(), dragAmount.packedValue_1, $density);
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
  protoOf(DragProgressController).onStartDrag_qsgty5_k$ = function (position) {
    this.gestureFactory_1().onStartDrag_qsgty5_k$(position);
  };
  protoOf(DragProgressController).onDrag_wbo8ju_k$ = function (dragAmount, density) {
    if (this._gestureFactory_1 == null) {
      _set__gestureFactory__ww9rdx_0(this, DragProgressController$onDrag$lambda(this, density));
    }
    consumeDrag(this, dragAmount);
  };
  protoOf(DragProgressController).onDragEnd_cvbntk_k$ = function () {
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
  protoOf(InstantProgressController).operation_v3y197_k$ = function (operation) {
    this.model_1.operation$default_gat9f3_k$(operation);
    var currentState = this.model_1.get_output_hs4j62_k$().get_value_j01efc_k$();
    if (currentState instanceof Keyframes) {
      this.model_1.setProgress_rzfdd3_k$(currentState.get_maxProgress_uy5umg_k$());
      this.model_1.onSettled_jd35ld_k$(SettleDirection_COMPLETE_getInstance(), false);
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
  protoOf(BaseOperation).invoke_9jbghh_k$ = function (state) {
    var fromState = this.createFromState_qwyg08_k$(state);
    var targetState = this.createTargetState_ldai3l_k$(fromState);
    return new StateTransition(fromState, targetState);
  };
  function _get_TAG__e5w0nr_2($this) {
    return $this.TAG_1;
  }
  function _get_KEY_TRANSITION_MODEL__bgu3jo($this) {
    return $this.KEY_TRANSITION_MODEL_1;
  }
  function BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0($$this$unsafeFlow, this$0, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).invoke_vgntlf_k$ = function (value, $completion) {
    var tmp = this.create_63pl4p_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_vgntlf_k$(p1 instanceof Output ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var it = this.value1__1;
            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(this.this$0__1.availableElements_ykqj3s_k$(it.get_currentTargetState_l0vn00_k$()), this);
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
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).create_63pl4p_k$ = function (value, completion) {
    var i = new BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0(this.$$this$unsafeFlow_1, this.this$0__1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).create_wyq9v6_k$ = function (value, completion) {
    return this.create_63pl4p_k$(value instanceof Output ? value : THROW_CCE(), completion);
  };
  function BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0_0($$this$unsafeFlow, this$0, resultContinuation) {
    var i = new BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0($$this$unsafeFlow, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_vgntlf_k$(value, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.this$0__1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_5(tmp_1), this);
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
  function _get_key__e6bh8y($this) {
    return $this.key_1;
  }
  function _get_savedStateMap__ok2e1t($this) {
    return $this.savedStateMap_1;
  }
  function _get_savedState__u2bo1r($this) {
    var tmp0_safe_receiver = $this.savedStateMap_1;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_wei43m_k$($this.key_1);
    return (!(tmp == null) ? isInterface(tmp, Parcelable) : false) ? tmp : null;
  }
  function _get_state__b8zcm8($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.state$delegate_1;
    state$factory();
    return this_0.get_value_j01efc_k$();
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
      var this_0 = _get_state__b8zcm8($this);
      while (true) {
        var prevValue = this_0.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.removeDestroyedElements.<anonymous>' call
        var tmp;
        if (prevValue instanceof Update) {
          tmp = prevValue;
        } else {
          if (prevValue instanceof Keyframes) {
            var tmp1_currentTargetState = $this.removeDestroyedElements_hkzkkk_k$(prevValue.get_currentTargetState_l0vn00_k$());
            tmp = new Update(tmp1_currentTargetState, false);
          } else {
            noWhenBranchMatchedException();
          }
        }
        var nextValue = tmp;
        if (this_0.compareAndSet_l3595a_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function createUpdate($this, operation) {
    var baseLine = _get_state__b8zcm8($this).get_value_j01efc_k$();
    var tmp;
    if (operation.isApplicable_aum5ae_k$(baseLine.get_currentTargetState_l0vn00_k$())) {
      var transition = operation.invoke_9jbghh_k$(baseLine.get_currentTargetState_l0vn00_k$());
      var newState = baseLine.deriveUpdate_gmwnl7_k$(transition);
      updateState($this, newState);
      tmp = true;
    } else {
      AppyxLogger_getInstance().d_86dvmc_k$('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on state: ' + baseLine);
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
      var past = currentState.get_currentIndex_shwroi_k$() > 0 ? currentState.get_queue_ixn208_k$().subList_xle3r2_k$(0, currentState.get_currentIndex_shwroi_k$() - 1 | 0) : emptyList();
      var remaining = currentState.get_queue_ixn208_k$().subList_xle3r2_k$(currentState.get_currentIndex_shwroi_k$(), get_lastIndex(currentState.get_queue_ixn208_k$()) + 1 | 0);
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
          if (!operation.isApplicable_aum5ae_k$(element.get_targetState_kri3mx_k$())) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      if (tmp$ret$0) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(remaining, 10));
        var tmp0_iterator_0 = remaining.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.impose.<anonymous>.<anonymous>' call
          var newFrom = operation.invoke_9jbghh_k$(item.get_fromState_9nyiji_k$());
          var newTarget = operation.invoke_9jbghh_k$(item.get_targetState_kri3mx_k$());
          var tmp$ret$2 = item.copy_fxersg_k$(new StateTransition(newFrom.get_targetState_kri3mx_k$(), newTarget.get_targetState_kri3mx_k$()));
          destination.add_utx5q5_k$(tmp$ret$2);
        }
        var newState = currentState.copy$default_sv1yq8_k$(plus_0(past, destination));
        updateState($this, newState);
        tmp_0 = true;
      } else {
        AppyxLogger_getInstance().d_86dvmc_k$('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on one or more queued states: ' + remaining);
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (currentState instanceof Update) {
        var tmp_2;
        if (operation.isApplicable_aum5ae_k$(currentState.get_currentTargetState_l0vn00_k$())) {
          var newState_0 = currentState.deriveUpdate_gmwnl7_k$(operation.invoke_9jbghh_k$(currentState.get_currentTargetState_l0vn00_k$()));
          updateState($this, newState_0);
          tmp_2 = true;
        } else {
          AppyxLogger_getInstance().d_86dvmc_k$('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on states: ' + currentState + '.currentTargetState');
          tmp_2 = false;
        }
        tmp = tmp_2;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function createSegment($this, operation) {
    var currentState = _get_state__b8zcm8($this).get_value_j01efc_k$();
    var baselineState = $this.removeDestroyedElements_hkzkkk_k$(currentState.get_lastTargetState_ts42jj_k$());
    var tmp;
    if (operation.isApplicable_aum5ae_k$(baselineState)) {
      var transition = operation.invoke_9jbghh_k$(baselineState);
      var newState = currentState.deriveKeyframes_1ehzk7_k$(transition);
      updateState($this, newState);
      tmp = true;
    } else {
      AppyxLogger_getInstance().d_86dvmc_k$('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on state: ' + baselineState);
      tmp = false;
    }
    return tmp;
  }
  function updateState($this, output) {
    AppyxLogger_getInstance().d_86dvmc_k$('BaseTransitionModel', 'Publishing new state: ' + output);
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = _get_state__b8zcm8($this);
      while (true) {
        var prevValue = this_0.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.updateState.<anonymous>' call
        var nextValue = output;
        if (this_0.compareAndSet_l3595a_k$(prevValue, nextValue)) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_5).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function _no_name_provided__qut3iv_3($this, this$0) {
    this.$this_1 = $this;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_3).collect_nw8kgl_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$5(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_3).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_nw8kgl_k$(collector, $completion);
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
    scope = scope === VOID ? CoroutineScope_0(EmptyCoroutineContext_getInstance().plus_s13ygv_k$(Dispatchers_getInstance().get_Unconfined_sfvx0q_k$())) : scope;
    key = key === VOID ? 'TransitionModel' : key;
    this.scope_1 = scope;
    this.key_1 = key;
    this.savedStateMap_1 = savedStateMap;
    var tmp = this;
    tmp.state$delegate_1 = lazy(BaseTransitionModel$state$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.output$delegate_1 = lazy(BaseTransitionModel$output$delegate$lambda(this));
    this.enforcedMode_1 = null;
    this.$stable_1 = 8;
  }
  protoOf(BaseTransitionModel).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(BaseTransitionModel).get_elements_vxwh8g_k$ = function () {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.get_output_hs4j62_k$();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp = new _no_name_provided__qut3iv_3(this_0, this);
    var tmp_0 = Companion_getInstance().get_Eagerly_3vw7yc_k$();
    var tmp0_elvis_lhs = _get_savedState__u2bo1r(this);
    return stateIn(tmp, this.scope_1, tmp_0, this.availableElements_ykqj3s_k$(tmp0_elvis_lhs == null ? this.get_initialState_2eu9l6_k$() : tmp0_elvis_lhs));
  };
  protoOf(BaseTransitionModel).saveInstanceState_lsffb1_k$ = function (state) {
    // Inline function 'kotlin.collections.set' call
    var key = this.key_1;
    var value = this.get_output_hs4j62_k$().get_value_j01efc_k$().get_currentTargetState_l0vn00_k$();
    state.put_4fpzoq_k$(key, value);
  };
  protoOf(BaseTransitionModel).get_output_hs4j62_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.output$delegate_1;
    output$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(BaseTransitionModel).relaxExecutionMode_iy77vp_k$ = function () {
    AppyxLogger_getInstance().d_86dvmc_k$('BaseTransitionModel', 'Relaxing mode');
    this.enforcedMode_1 = null;
    removeDestroyedElements(this);
  };
  protoOf(BaseTransitionModel).cleanUpElement_m6s01w_k$ = function (element) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.getAndUpdate' call
      var this_0 = _get_state__b8zcm8(this);
      while (true) {
        var prevValue = this_0.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.cleanUpElement.<anonymous>' call
        var tmp;
        if (prevValue instanceof Update) {
          tmp = prevValue.copy$default_49r5oa_k$(this.removeDestroyedElement_bziy6b_k$(prevValue.get_currentTargetState_l0vn00_k$(), element));
        } else {
          if (prevValue instanceof Keyframes) {
            tmp = prevValue;
          } else {
            noWhenBranchMatchedException();
          }
        }
        var nextValue = tmp;
        if (this_0.compareAndSet_l3595a_k$(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  };
  protoOf(BaseTransitionModel).operation_8tra3c_k$ = function (operation, overrideMode) {
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
  protoOf(BaseTransitionModel).setProgress_rzfdd3_k$ = function (progress) {
    var currentState = _get_state__b8zcm8(this).get_value_j01efc_k$();
    if (currentState instanceof Update) {
      AppyxLogger_getInstance().d_86dvmc_k$('BaseTransitionModel', 'Not in keyframe state, ignoring setProgress');
      return Unit_getInstance();
    } else {
      if (currentState instanceof Keyframes) {
        currentState.setProgress_37683i_k$(progress, BaseTransitionModel$setProgress$lambda);
      }
    }
  };
  protoOf(BaseTransitionModel).onSettled_jd35ld_k$ = function (direction, animate) {
    var currentState = _get_state__b8zcm8(this).get_value_j01efc_k$();
    if (currentState instanceof Update) {
      AppyxLogger_getInstance().d_86dvmc_k$('BaseTransitionModel', 'Not in keyframe state, nothing to do');
      return Unit_getInstance();
    } else {
      if (currentState instanceof Keyframes) {
        var tmp;
        switch (direction.get_ordinal_ip24qg_k$()) {
          case 0:
            tmp = this.removeDestroyedElements_hkzkkk_k$(currentState.get_currentSegment_vblyf1_k$().get_fromState_9nyiji_k$());
            break;
          case 1:
            tmp = this.removeDestroyedElements_hkzkkk_k$(currentState.get_currentSegment_vblyf1_k$().get_targetState_kri3mx_k$());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        var newState = new Update(tmp, animate);
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
  function Keyframes$currentIndexFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).invoke_uo5hpl_k$ = function (value, $completion) {
    var tmp = this.create_qsrv3h_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_uo5hpl_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var progress = this.value1__1;
            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(numberToInt(progress === this.this$0__1.get_maxProgress_uy5umg_k$() ? progress - 1 : progress), this);
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
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).create_qsrv3h_k$ = function (value, completion) {
    var i = new Keyframes$currentIndexFlow$o$collect$slambda(this.$$this$unsafeFlow_1, this.this$0__1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_qsrv3h_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Keyframes$currentIndexFlow$o$collect$slambda_0($$this$unsafeFlow, this$0, resultContinuation) {
    var i = new Keyframes$currentIndexFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_uo5hpl_k$(value, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = Keyframes$currentIndexFlow$o$collect$slambda_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.this$0__1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_6(tmp_1), this);
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
  function Keyframes$currentSegmentFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).invoke_upy66h_k$ = function (value, $completion) {
    var tmp = this.create_t6fi7n_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_upy66h_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var it = this.value1__1;
            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(this.this$0__1.queue_1.get_c1px32_k$(it), this);
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
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).create_t6fi7n_k$ = function (value, completion) {
    var i = new Keyframes$currentSegmentFlow$o$collect$slambda(this.$$this$unsafeFlow_1, this.this$0__1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_t6fi7n_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Keyframes$currentSegmentFlow$o$collect$slambda_0($$this$unsafeFlow, this$0, resultContinuation) {
    var i = new Keyframes$currentSegmentFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_upy66h_k$(value, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = Keyframes$currentSegmentFlow$o$collect$slambda_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.this$0__1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_7(tmp_1), this);
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
  function Keyframes$currentSegmentTargetStateFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).invoke_upy66h_k$ = function (value, $completion) {
    var tmp = this.create_t6fi7n_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_upy66h_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var it = this.value1__1;
            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(this.this$0__1.queue_1.get_c1px32_k$(it).get_targetState_kri3mx_k$(), this);
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
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).create_t6fi7n_k$ = function (value, completion) {
    var i = new Keyframes$currentSegmentTargetStateFlow$o$collect$slambda(this.$$this$unsafeFlow_1, this.this$0__1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_t6fi7n_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Keyframes$currentSegmentTargetStateFlow$o$collect$slambda_0($$this$unsafeFlow, this$0, resultContinuation) {
    var i = new Keyframes$currentSegmentTargetStateFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_upy66h_k$(value, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = Keyframes$currentSegmentTargetStateFlow$o$collect$slambda_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.this$0__1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_8(tmp_1), this);
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
  function Keyframes$getSegmentProgress$o$collect$slambda($$this$unsafeFlow, $segmentIndex, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.$segmentIndex_1 = $segmentIndex;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).invoke_uo5hpl_k$ = function (value, $completion) {
    var tmp = this.create_qsrv3h_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_uo5hpl_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var it = this.value1__1;
            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(toSegmentProgress(it, this.$segmentIndex_1), this);
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
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).create_qsrv3h_k$ = function (value, completion) {
    var i = new Keyframes$getSegmentProgress$o$collect$slambda(this.$$this$unsafeFlow_1, this.$segmentIndex_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_qsrv3h_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Keyframes$getSegmentProgress$o$collect$slambda_0($$this$unsafeFlow, $segmentIndex, resultContinuation) {
    var i = new Keyframes$getSegmentProgress$o$collect$slambda($$this$unsafeFlow, $segmentIndex, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_uo5hpl_k$(value, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = Keyframes$getSegmentProgress$o$collect$slambda_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.$segmentIndex_1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_9(tmp_1), this);
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
  function get_$stableprop_10() {
    return 0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_6).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_7(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_7).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_8(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_8).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_9(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_9).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function _no_name_provided__qut3iv_4($this, this$0) {
    this.$this_1 = $this;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_4).collect_r911o9_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$6(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_4).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_r911o9_k$(collector, $completion);
  };
  function _no_name_provided__qut3iv_5($this, this$0) {
    this.$this_1 = $this;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_5).collect_237noh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$7(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_5).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_237noh_k$(collector, $completion);
  };
  function _no_name_provided__qut3iv_6($this, this$0) {
    this.$this_1 = $this;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_6).collect_9i35bh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$8(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_6).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_9i35bh_k$(collector, $completion);
  };
  function _no_name_provided__qut3iv_7($this, $segmentIndex) {
    this.$this_1 = $this;
    this.$segmentIndex_1 = $segmentIndex;
  }
  protoOf(_no_name_provided__qut3iv_7).collect_ncf36h_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$9(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_7).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_ncf36h_k$(collector, $completion);
  };
  function Keyframes(queue, initialProgress) {
    initialProgress = initialProgress === VOID ? 0.0 : initialProgress;
    Output.call(this);
    this.queue_1 = queue;
    this.initialProgress_1 = initialProgress;
    this.progressFlow_1 = MutableStateFlow(this.initialProgress_1);
    var tmp = this;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.progressFlow_1;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp$ret$2 = new _no_name_provided__qut3iv_4(this_0, this);
    tmp.currentIndexFlow_1 = distinctUntilChanged(tmp$ret$2);
    var tmp_0 = this;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_1 = this.currentIndexFlow_1;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp_0.currentSegmentFlow_1 = new _no_name_provided__qut3iv_5(this_1, this);
    var tmp_1 = this;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_2 = this.currentIndexFlow_1;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp_1.currentSegmentTargetStateFlow_1 = new _no_name_provided__qut3iv_6(this_2, this);
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
    return this.queue_1.get_c1px32_k$(this.get_currentIndex_shwroi_k$());
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
  protoOf(Keyframes).getSegmentProgress_gtqlgy_k$ = function (segmentIndex) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.progressFlow_1;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp$ret$2 = new _no_name_provided__qut3iv_7(this_0, segmentIndex);
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
  protoOf(Keyframes).deriveKeyframes_1ehzk7_k$ = function (stateTransition) {
    return this.copy_77uujr_k$(plus_0(this.queue_1, listOf(new Segment(stateTransition))), this.get_progress_mo5qeu_k$());
  };
  protoOf(Keyframes).deriveUpdate_gmwnl7_k$ = function (stateTransition) {
    return new Update(stateTransition.get_targetState_kri3mx_k$());
  };
  protoOf(Keyframes).dropAfter_b47mut_k$ = function (index) {
    var tmp;
    if (index < get_lastIndex(this.queue_1)) {
      tmp = this.copy$default_sv1yq8_k$(dropLast(this.queue_1, get_lastIndex(this.queue_1) - index | 0));
    } else {
      tmp = this;
    }
    return tmp;
  };
  protoOf(Keyframes).setProgress_37683i_k$ = function (progress, onTransitionFinished) {
    var currentProgress = numberToInt(this.get_progress_mo5qeu_k$());
    var coercedProgress = coerceIn(progress, 0.0, this.get_maxProgress_uy5umg_k$());
    AppyxLogger_getInstance().d_86dvmc_k$('Keyframes', '' + coercedProgress);
    this.progressFlow_1.set_value_v1vabv_k$(coercedProgress);
    if (numberToInt(coercedProgress) > currentProgress) {
      AppyxLogger_getInstance().d_86dvmc_k$('Keyframes', 'onTransitionFinished()');
      onTransitionFinished(this.get_currentSegment_vblyf1_k$().get_fromState_9nyiji_k$());
    }
  };
  protoOf(Keyframes).component1_7eebsc_k$ = function () {
    return this.queue_1;
  };
  protoOf(Keyframes).component2_7eebsb_k$ = function () {
    return this.initialProgress_1;
  };
  protoOf(Keyframes).copy_77uujr_k$ = function (queue, initialProgress) {
    return new Keyframes(queue, initialProgress);
  };
  protoOf(Keyframes).copy$default_sv1yq8_k$ = function (queue, initialProgress, $super) {
    queue = queue === VOID ? this.queue_1 : queue;
    initialProgress = initialProgress === VOID ? this.initialProgress_1 : initialProgress;
    return $super === VOID ? this.copy_77uujr_k$(queue, initialProgress) : $super.copy_77uujr_k$.call(this, queue, initialProgress);
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
        THROW_IAE('No enum constant value.');
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
  protoOf(Noop).set_mode_yhptjw_k$ = function (_set____db54di) {
    this.mode_1 = _set____db54di;
  };
  protoOf(Noop).get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  protoOf(Noop).isApplicable_aum5ae_k$ = function (state) {
    return false;
  };
  protoOf(Noop).invoke_9jbghh_k$ = function (state) {
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
  protoOf(Segment).copy_fxersg_k$ = function (stateTransition) {
    return new Segment(stateTransition);
  };
  protoOf(Segment).copy$default_1cc9dz_k$ = function (stateTransition, $super) {
    stateTransition = stateTransition === VOID ? this.stateTransition_1 : stateTransition;
    return $super === VOID ? this.copy_fxersg_k$(stateTransition) : $super.copy_fxersg_k$.call(this, stateTransition);
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
  protoOf(StateTransition).copy_yhd45x_k$ = function (fromState, targetState) {
    return new StateTransition(fromState, targetState);
  };
  protoOf(StateTransition).copy$default_uof73c_k$ = function (fromState, targetState, $super) {
    fromState = fromState === VOID ? this.fromState_1 : fromState;
    targetState = targetState === VOID ? this.targetState_1 : targetState;
    return $super === VOID ? this.copy_yhd45x_k$(fromState, targetState) : $super.copy_yhd45x_k$.call(this, fromState, targetState);
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
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('com.bumble.appyx.interactions.core.model.transition.TransitionModel.Output', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy_0(tmp_0, TransitionModel$Output$Companion$_anonymous__6gtcv2);
  }
  protoOf(Companion_4).serializer_ftvo48_k$ = function (typeSerial0) {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_4).serializer_nv39qc_k$ = function (typeParamsSerializers) {
    return this.serializer_ftvo48_k$(typeParamsSerializers[0]);
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
        THROW_IAE('No enum constant value.');
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
  protoOf(Update).deriveUpdate_gmwnl7_k$ = function (stateTransition) {
    return new Update(stateTransition.get_targetState_kri3mx_k$());
  };
  protoOf(Update).deriveKeyframes_1ehzk7_k$ = function (stateTransition) {
    return new Keyframes(listOf(new Segment(stateTransition)));
  };
  protoOf(Update).component1_7eebsc_k$ = function () {
    return this.currentTargetState_1;
  };
  protoOf(Update).component2_7eebsb_k$ = function () {
    return this.animate_1;
  };
  protoOf(Update).copy_1uejav_k$ = function (currentTargetState, animate) {
    return new Update(currentTargetState, animate);
  };
  protoOf(Update).copy$default_49r5oa_k$ = function (currentTargetState, animate, $super) {
    currentTargetState = currentTargetState === VOID ? this.currentTargetState_1 : currentTargetState;
    animate = animate === VOID ? this.animate_1 : animate;
    return $super === VOID ? this.copy_1uejav_k$(currentTargetState, animate) : $super.copy_1uejav_k$.call(this, currentTargetState, animate);
  };
  protoOf(Update).toString = function () {
    return 'Update(currentTargetState=' + this.currentTargetState_1 + ', animate=' + this.animate_1 + ')';
  };
  protoOf(Update).hashCode = function () {
    var result = this.currentTargetState_1 == null ? 0 : hashCode(this.currentTargetState_1);
    result = imul(result, 31) + getBooleanHashCode(this.animate_1) | 0;
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
    return _this__u8e3s4.then_g5qrxq_k$(new PointerInputElement(callback));
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
  protoOf(PointerInputElement).update_lqz8pc_k$ = function (node) {
    node.callback_1 = this.callback_1;
  };
  protoOf(PointerInputElement).update_9wd57p_k$ = function (node) {
    return this.update_lqz8pc_k$(node instanceof OnPointerEventNode ? node : THROW_CCE());
  };
  protoOf(PointerInputElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('onPointerEvent');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('callback', this.callback_1);
  };
  protoOf(PointerInputElement).component1_7eebsc_k$ = function () {
    return this.callback_1;
  };
  protoOf(PointerInputElement).copy_qwnwn6_k$ = function (callback) {
    return new PointerInputElement(callback);
  };
  protoOf(PointerInputElement).copy$default_io16j_k$ = function (callback, $super) {
    callback = callback === VOID ? this.callback_1 : callback;
    return $super === VOID ? this.copy_qwnwn6_k$(callback) : $super.copy_qwnwn6_k$.call(this, callback);
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
  protoOf(OnPointerEventNode).set_callback_h8sytb_k$ = function (_set____db54di) {
    this.callback_1 = _set____db54di;
  };
  protoOf(OnPointerEventNode).get_callback_ynh0qa_k$ = function () {
    return this.callback_1;
  };
  protoOf(OnPointerEventNode).onPointerEvent_pn3mb5_k$ = function (pointerEvent, pass, bounds) {
    if (pass.equals(PointerEventPass_Initial_getInstance())) {
      this.callback_1(pointerEvent);
    }
  };
  protoOf(OnPointerEventNode).sharePointerInputWithSiblings_uw6o77_k$ = function () {
    return false;
  };
  protoOf(OnPointerEventNode).onCancelPointerInput_lztb3e_k$ = function () {
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
    if (!!$this.map_1.containsKey_aw81wo_k$(key)) {
      // Inline function 'com.bumble.appyx.interactions.core.state.MutableSavedStateMapImpl.checkKey.<anonymous>' call
      var message = "Save instance process has faced key collision at '" + key + "': " + ("existing value is '" + toString_0($this.map_1.get_wei43m_k$(key)) + "', ") + ("new value is '" + toString_0(value) + "'");
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
  protoOf(MutableSavedStateMapImpl).clear_j9egeb_k$ = function () {
    this.map_1.clear_j9egeb_k$();
  };
  protoOf(MutableSavedStateMapImpl).containsKey_w445h6_k$ = function (key) {
    return this.map_1.containsKey_aw81wo_k$(key);
  };
  protoOf(MutableSavedStateMapImpl).containsKey_aw81wo_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.containsKey_w445h6_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).containsValue_4bai5p_k$ = function (value) {
    return this.map_1.containsValue_yf2ykl_k$(value);
  };
  protoOf(MutableSavedStateMapImpl).containsValue_yf2ykl_k$ = function (value) {
    if (!(value == null ? true : !(value == null)))
      return false;
    return this.containsValue_4bai5p_k$((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).get_6bo4tg_k$ = function (key) {
    return this.map_1.get_wei43m_k$(key);
  };
  protoOf(MutableSavedStateMapImpl).get_wei43m_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.get_6bo4tg_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).isEmpty_y1axqb_k$ = function () {
    return this.map_1.isEmpty_y1axqb_k$();
  };
  protoOf(MutableSavedStateMapImpl).remove_z05dva_k$ = function (key) {
    return this.map_1.remove_gppy8k_k$(key);
  };
  protoOf(MutableSavedStateMapImpl).remove_gppy8k_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.remove_z05dva_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).get_savedState_52fa37_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.savedState$delegate_1;
    savedState$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MutableSavedStateMapImpl).put_9oxj04_k$ = function (key, value) {
    checkState(this);
    checkKey(this, key, value);
    return this.map_1.put_4fpzoq_k$(key, value);
  };
  protoOf(MutableSavedStateMapImpl).put_4fpzoq_k$ = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_9oxj04_k$(tmp, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).putAll_lv0eka_k$ = function (from) {
    checkState(this);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = from.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.interactions.core.state.MutableSavedStateMapImpl.putAll.<anonymous>' call
      checkKey(this, element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
    }
    return this.map_1.putAll_wgg6cj_k$(from);
  };
  protoOf(MutableSavedStateMapImpl).putAll_wgg6cj_k$ = function (from) {
    return this.putAll_lv0eka_k$(from);
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
  function Visualisation$map$o$collect$slambda($$this$unsafeFlow, this$0, $output, resultContinuation) {
    this.$$this$unsafeFlow_1 = $$this$unsafeFlow;
    this.this$0__1 = this$0;
    this.$output_1 = $output;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Visualisation$map$o$collect$slambda).invoke_upy66h_k$ = function (value, $completion) {
    var tmp = this.create_t6fi7n_k$(value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Visualisation$map$o$collect$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_upy66h_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Visualisation$map$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeTransform0__1 = this.$$this$unsafeFlow_1;
            var tmp_1 = this;
            tmp_1.value1__1 = this.value_1;
            this.set_state_rjd8d0_k$(1);
            var it = this.value1__1;
            suspendResult = this.$this$unsafeTransform0__1.emit_t92u1f_k$(this.this$0__1.mapKeyframes_s40g9q_k$(this.$output_1, it), this);
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
  protoOf(Visualisation$map$o$collect$slambda).create_t6fi7n_k$ = function (value, completion) {
    var i = new Visualisation$map$o$collect$slambda(this.$$this$unsafeFlow_1, this.this$0__1, this.$output_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(Visualisation$map$o$collect$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_t6fi7n_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function Visualisation$map$o$collect$slambda_0($$this$unsafeFlow, this$0, $output, resultContinuation) {
    var i = new Visualisation$map$o$collect$slambda($$this$unsafeFlow, this$0, $output, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_upy66h_k$(value, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = Visualisation$map$o$collect$slambda_0(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.this$0__1, this._this__u8e3s4__1.$output_1, null);
            suspendResult = this._this__u8e3s4__1.$this_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_10(tmp_1), this);
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_10(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_10).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function _no_name_provided__qut3iv_8($this, this$0, $output) {
    this.$this_1 = $this;
    this.this$0__1 = this$0;
    this.$output_1 = $output;
  }
  protoOf(_no_name_provided__qut3iv_8).collect_xnk2jf_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$10(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_8).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_xnk2jf_k$(collector, $completion);
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
    tmp.widthDp_1 = this.density_1.toDp_fjakf4_k$(this.widthPx_1);
    var tmp_0 = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.heightDp.<anonymous>' call
    tmp_0.heightDp_1 = this.density_1.toDp_fjakf4_k$(this.heightPx_1);
    var tmp_1 = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.screenWidthDp.<anonymous>' call
    tmp_1.screenWidthDp_1 = this.density_1.toDp_fjakf4_k$(this.screenWidthPx_1);
    var tmp_2 = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.screenHeightDp.<anonymous>' call
    tmp_2.screenHeightDp_1 = this.density_1.toDp_fjakf4_k$(this.screenHeightPx_1);
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
  protoOf(TransitionBounds).get_widthDp_5mnst6_k$ = function () {
    return this.widthDp_1;
  };
  protoOf(TransitionBounds).get_heightDp_11dm13_k$ = function () {
    return this.heightDp_1;
  };
  protoOf(TransitionBounds).get_screenWidthDp_1s9wka_k$ = function () {
    return this.screenWidthDp_1;
  };
  protoOf(TransitionBounds).get_screenHeightDp_fqb2md_k$ = function () {
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
  protoOf(TransitionBounds).copy_csm84c_k$ = function (density, widthPx, heightPx, screenWidthPx, screenHeightPx) {
    return new TransitionBounds(density, widthPx, heightPx, screenWidthPx, screenHeightPx);
  };
  protoOf(TransitionBounds).copy$default_jpilgd_k$ = function (density, widthPx, heightPx, screenWidthPx, screenHeightPx, $super) {
    density = density === VOID ? this.density_1 : density;
    widthPx = widthPx === VOID ? this.widthPx_1 : widthPx;
    heightPx = heightPx === VOID ? this.heightPx_1 : heightPx;
    screenWidthPx = screenWidthPx === VOID ? this.screenWidthPx_1 : screenWidthPx;
    screenHeightPx = screenHeightPx === VOID ? this.screenHeightPx_1 : screenHeightPx;
    return $super === VOID ? this.copy_csm84c_k$(density, widthPx, heightPx, screenWidthPx, screenHeightPx) : $super.copy_csm84c_k$.call(this, density, widthPx, heightPx, screenWidthPx, screenHeightPx);
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
  protoOf(UiContext).copy_1042eo_k$ = function (coroutineScope, clipToBounds) {
    return new UiContext(coroutineScope, clipToBounds);
  };
  protoOf(UiContext).copy$default_q6nuvr_k$ = function (coroutineScope, clipToBounds, $super) {
    coroutineScope = coroutineScope === VOID ? this.coroutineScope_1 : coroutineScope;
    clipToBounds = clipToBounds === VOID ? this.clipToBounds_1 : clipToBounds;
    return $super === VOID ? this.copy_1042eo_k$(coroutineScope, clipToBounds) : $super.copy_1042eo_k$.call(this, coroutineScope, clipToBounds);
  };
  protoOf(UiContext).toString = function () {
    return 'UiContext(coroutineScope=' + this.coroutineScope_1 + ', clipToBounds=' + this.clipToBounds_1 + ')';
  };
  protoOf(UiContext).hashCode = function () {
    var result = hashCode(this.coroutineScope_1);
    result = imul(result, 31) + getBooleanHashCode(this.clipToBounds_1) | 0;
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
        THROW_IAE('No enum constant value.');
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
        THROW_IAE('No enum constant value.');
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
        THROW_IAE('No enum constant value.');
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
        THROW_IAE('No enum constant value.');
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
        THROW_IAE('No enum constant value.');
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
    return _Offset___get_x__impl__xvi35n(delta) < 0.0 ? HorizontalDirection_LEFT_getInstance() : HorizontalDirection_RIGHT_getInstance();
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
  protoOf(Gesture).set_startProgress_uoyvab_k$ = function (_set____db54di) {
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
  protoOf(Noop_1).createGesture_dk900z_k$ = function (state, delta, density) {
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
  protoOf(GestureSettleConfig).copy_3qr4pp_k$ = function (completionThreshold, completeGestureSpec, revertGestureSpec) {
    return new GestureSettleConfig(completionThreshold, completeGestureSpec, revertGestureSpec);
  };
  protoOf(GestureSettleConfig).copy$default_8aw25e_k$ = function (completionThreshold, completeGestureSpec, revertGestureSpec, $super) {
    completionThreshold = completionThreshold === VOID ? this.completionThreshold_1 : completionThreshold;
    completeGestureSpec = completeGestureSpec === VOID ? this.completeGestureSpec_1 : completeGestureSpec;
    revertGestureSpec = revertGestureSpec === VOID ? this.revertGestureSpec_1 : revertGestureSpec;
    return $super === VOID ? this.copy_3qr4pp_k$(completionThreshold, completeGestureSpec, revertGestureSpec) : $super.copy_3qr4pp_k$.call(this, completionThreshold, completeGestureSpec, revertGestureSpec);
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(412435611);
    sourceInformation($composer_0, 'C(AppyxComponentSetup$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(appyxComponent) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(412435611, $dirty, -1, 'com.bumble.appyx.interactions.core.ui.helper.AppyxComponentSetup$composable (InteractionModelSetup.kt:8)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var $composer_1 = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_ip860b_k$(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext._v = AppyxComponentSetup$composable$lambda;
      }
      var composer = $composer_2;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_2;
      $composer_3.startReplaceableGroup_ip860b_k$(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_3.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_3.endReplaceableGroup_ern0ak_k$();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_2.endReplaceableGroup_ern0ak_k$();
      var coroutineScope = tmp0_0;
      DisposableEffect$composable(appyxComponent, AppyxComponentSetup$composable$lambda_0(appyxComponent, coroutineScope), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppyxComponentSetup$composable$lambda_1(appyxComponent, $changed));
    }
  }
  function AppyxComponentSetup$composable$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function _no_name_provided__qut3iv_9($appyxComponent) {
    this.$appyxComponent_1 = $appyxComponent;
  }
  protoOf(_no_name_provided__qut3iv_9).dispose_3nnxhr_k$ = function () {
    // Inline function 'com.bumble.appyx.interactions.core.ui.helper.AppyxComponentSetup$composable.<anonymous>.<anonymous>' call
    this.$appyxComponent_1.onRemovedFromComposition_vua1v5_k$();
  };
  function AppyxComponentSetup$composable$lambda_0($appyxComponent, $coroutineScope) {
    return function ($this$DisposableEffect) {
      $appyxComponent.onAddedToComposition_wz37qs_k$($coroutineScope);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_9($appyxComponent);
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
    var x = theta / 180 * get_PI();
    return l * Math.cos(x);
  }
  function angleDegrees(vector) {
    var x = Offset__component1_impl_qn5q2(vector);
    var y = Offset__component2_impl_9ljbv(vector);
    var tmp;
    if (x === 0.0) {
      tmp = y > 0.0 ? 90.0 : y < 0.0 ? 270.0 : 0.0;
    } else if (y === 0.0) {
      tmp = x > 0.0 ? 0.0 : x < 0.0 ? 180.0 : 0.0;
    } else {
      // Inline function 'kotlin.math.atan' call
      var x_0 = y / x;
      var deg = Math.atan(x_0) * 180.0 / get_PI();
      tmp = x < 0.0 ? 180 + deg : y < 0.0 ? 360 + deg : deg;
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
  protoOf(ElementUiModel).copy_2rdg8n_k$ = function (element, visibleState, motionProperties, persistentContainer, modifier, progress) {
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
  protoOf(ElementUiModel).copy$composable_xtejus_k$ = function (element, visibleState, motionProperties, persistentContainer, modifier, progress) {
    return new ElementUiModel(element, visibleState, motionProperties, persistentContainer, modifier, progress);
  };
  protoOf(ElementUiModel).copy$composable$default_q0t5da_k$ = function (element, visibleState, motionProperties, persistentContainer, modifier, progress, $super) {
    element = element === VOID ? this.element_1 : element;
    visibleState = visibleState === VOID ? this.visibleState_1 : visibleState;
    motionProperties = motionProperties === VOID ? this.motionProperties_1 : motionProperties;
    persistentContainer = persistentContainer === VOID ? this.persistentContainer_1 : persistentContainer;
    modifier = modifier === VOID ? this.modifier_1 : modifier;
    progress = progress === VOID ? this.progress_1 : progress;
    return $super === VOID ? this.copy$composable_xtejus_k$(element, visibleState, motionProperties, persistentContainer, modifier, progress) : $super.copy$composable_xtejus_k$.call(this, element, visibleState, motionProperties, persistentContainer, modifier, progress);
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
      var this_0 = $this.internalValueFlow_1;
      while (true) {
        var prevValue = this_0.get_value_j01efc_k$();
        // Inline function 'com.bumble.appyx.interactions.core.ui.property.MotionProperty.onValueChanged.<anonymous>' call
        var nextValue = $this.get_internalValue_suj1cb_k$();
        if (this_0.compareAndSet_l3595a_k$(prevValue, nextValue)) {
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
    var deltaTimeMs = time.minus_mfbszm_k$($this.lastTime_1).div_jun7gj_k$(new Long(1000000, 0));
    var timeFactor = deltaTimeMs.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? numberToLong(1000).div_jun7gj_k$(deltaTimeMs) : new Long(0, 0);
    $this.lastTime_1 = time;
    var tmp;
    if (vec1 instanceof AnimationVector1D) {
      var vec2 = targetVector instanceof AnimationVector1D ? targetVector : THROW_CCE();
      var tmp_0 = converter.get_convertFromVector_kmewon_k$();
      // Inline function 'kotlin.Long.times' call
      var other = vec2.get_value_j01efc_k$() - vec1.get_value_j01efc_k$();
      var tmp$ret$0 = timeFactor.toFloat_jhbgwv_k$() * other;
      var tmp_1 = new AnimationVector1D(tmp$ret$0);
      tmp = tmp_0(tmp_1 instanceof AnimationVector ? tmp_1 : THROW_CCE());
    } else {
      if (vec1 instanceof AnimationVector2D) {
        var vec2_0 = targetVector instanceof AnimationVector2D ? targetVector : THROW_CCE();
        var tmp_2 = converter.get_convertFromVector_kmewon_k$();
        // Inline function 'kotlin.Long.times' call
        var other_0 = vec2_0.get_v1_kntnng_k$() - vec1.get_v1_kntnng_k$();
        var tmp_3 = timeFactor.toFloat_jhbgwv_k$() * other_0;
        // Inline function 'kotlin.Long.times' call
        var other_1 = vec2_0.get_v2_kntnnf_k$() - vec1.get_v2_kntnnf_k$();
        var tmp$ret$2 = timeFactor.toFloat_jhbgwv_k$() * other_1;
        var tmp_4 = new AnimationVector2D(tmp_3, tmp$ret$2);
        tmp = tmp_2(tmp_4 instanceof AnimationVector ? tmp_4 : THROW_CCE());
      } else {
        if (vec1 instanceof AnimationVector3D) {
          var vec2_1 = targetVector instanceof AnimationVector3D ? targetVector : THROW_CCE();
          var tmp_5 = converter.get_convertFromVector_kmewon_k$();
          // Inline function 'kotlin.Long.times' call
          var other_2 = vec2_1.get_v1_kntnng_k$() - vec1.get_v1_kntnng_k$();
          var tmp_6 = timeFactor.toFloat_jhbgwv_k$() * other_2;
          // Inline function 'kotlin.Long.times' call
          var other_3 = vec2_1.get_v2_kntnnf_k$() - vec1.get_v2_kntnnf_k$();
          var tmp_7 = timeFactor.toFloat_jhbgwv_k$() * other_3;
          // Inline function 'kotlin.Long.times' call
          var other_4 = vec2_1.get_v3_kntnne_k$() - vec1.get_v3_kntnne_k$();
          var tmp$ret$5 = timeFactor.toFloat_jhbgwv_k$() * other_4;
          var tmp_8 = new AnimationVector3D(tmp_6, tmp_7, tmp$ret$5);
          tmp = tmp_5(tmp_8 instanceof AnimationVector ? tmp_8 : THROW_CCE());
        } else {
          if (vec1 instanceof AnimationVector4D) {
            var vec2_2 = targetVector instanceof AnimationVector4D ? targetVector : THROW_CCE();
            var tmp_9 = converter.get_convertFromVector_kmewon_k$();
            // Inline function 'kotlin.Long.times' call
            var other_5 = vec2_2.get_v1_kntnng_k$() - vec1.get_v1_kntnng_k$();
            var tmp_10 = timeFactor.toFloat_jhbgwv_k$() * other_5;
            // Inline function 'kotlin.Long.times' call
            var other_6 = vec2_2.get_v2_kntnnf_k$() - vec1.get_v2_kntnnf_k$();
            var tmp_11 = timeFactor.toFloat_jhbgwv_k$() * other_6;
            // Inline function 'kotlin.Long.times' call
            var other_7 = vec2_2.get_v3_kntnne_k$() - vec1.get_v3_kntnne_k$();
            var tmp_12 = timeFactor.toFloat_jhbgwv_k$() * other_7;
            // Inline function 'kotlin.Long.times' call
            var other_8 = vec2_2.get_v4_kntnnd_k$() - vec1.get_v4_kntnnd_k$();
            var tmp$ret$9 = timeFactor.toFloat_jhbgwv_k$() * other_8;
            var tmp_13 = new AnimationVector4D(tmp_10, tmp_11, tmp_12, tmp$ret$9);
            tmp = tmp_9(tmp_13 instanceof AnimationVector ? tmp_13 : THROW_CCE());
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    var velocity = tmp;
    AppyxLogger_getInstance().v_aecy5i_k$('MotionProperty', 'Calculated velocity: ' + velocity);
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
  protoOf(MotionProperty$renderValueFlow$slambda).invoke_jz5dzz_k$ = function (displacement, value, $completion) {
    var tmp = this.create_xxkg7j_k$(displacement, value, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MotionProperty$renderValueFlow$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE();
    return this.invoke_jz5dzz_k$(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(MotionProperty$renderValueFlow$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return this.this$0__1.calculateRenderValue_qpjm53_k$(this.value_1, this.displacement_1);
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MotionProperty$renderValueFlow$slambda).create_xxkg7j_k$ = function (displacement, value, completion) {
    var i = new MotionProperty$renderValueFlow$slambda(this.this$0__1, completion);
    i.displacement_1 = displacement;
    i.value_1 = value;
    return i;
  };
  function MotionProperty$renderValueFlow$slambda_0(this$0, resultContinuation) {
    var i = new MotionProperty$renderValueFlow$slambda(this$0, resultContinuation);
    var l = function (displacement, value, $completion) {
      return i.invoke_jz5dzz_k$(displacement, value, $completion);
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
      AppyxLogger_getInstance().d_86dvmc_k$('MotionProperty', 'Value = ' + this$0.animatable_1.get_value_j01efc_k$() + ', Velocity = ' + this$0.animatable_1.get_velocity_3hqvmu_k$() + ')');
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
            this.set_exceptionState_fex74n_k$(2);
            this._this__u8e3s4__1.previousVelocity_1 = this._this__u8e3s4__1.lastVelocity_1;
            this._this__u8e3s4__1.lastVelocity_1 = calculateVelocity(this._this__u8e3s4__1, this.targetValue_1);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.animatable_1.snapTo_o5pd1b_k$(this.targetValue_1, this);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
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
            this.set_exceptionState_fex74n_k$(2);
            this.animationSpec10__1 = insertVisibilityThreshold(this._this__u8e3s4__1, this.animationSpec_1);
            AppyxLogger_getInstance().d_86dvmc_k$('MotionProperty', 'Starting with initialVelocity = ' + this._this__u8e3s4__1.previousVelocity_1);
            l$ret$1: do {
              var this_0 = this._this__u8e3s4__1._isAnimatingFlow_1;
              while (true) {
                var prevValue = this_0.get_value_j01efc_k$();
                var nextValue = !equals(this.targetValue_1, this._this__u8e3s4__1.get_internalValue_suj1cb_k$());
                if (this_0.compareAndSet_l3595a_k$(prevValue, nextValue)) {
                  break l$ret$1;
                }
              }
            }
             while (false);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this._this__u8e3s4__1.previousVelocity_1;
            suspendResult = this._this__u8e3s4__1.animatable_1.animateTo_z368sf_k$(this.targetValue_1, this.animationSpec10__1, tmp_0, MotionProperty$animateTo$lambda_0(this.block_1, this._this__u8e3s4__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            l$ret$3: do {
              var this_1 = this._this__u8e3s4__1._isAnimatingFlow_1;
              while (true) {
                var prevValue_0 = this_1.get_value_j01efc_k$();
                var nextValue_0 = !equals(result.get_endState_3g6vgh_k$().get_value_j01efc_k$(), this.targetValue_1);
                if (this_1.compareAndSet_l3595a_k$(prevValue_0, nextValue_0)) {
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
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
  protoOf(MotionProperty).easingTransform_pg9447_k$ = function (priority, fraction) {
    var tmp1_elvis_lhs = priority == null ? this.easing_1 : priority;
    var resolved = tmp1_elvis_lhs == null ? get_LinearEasing() : tmp1_elvis_lhs;
    return resolved.transform_twmo38_k$(fraction);
  };
  protoOf(MotionProperty).easingTransform$default_m2t1rz_k$ = function (priority, fraction, $super) {
    priority = priority === VOID ? null : priority;
    return $super === VOID ? this.easingTransform_pg9447_k$(priority, fraction) : $super.easingTransform_pg9447_k$.call(this, priority, fraction);
  };
  protoOf(MotionProperty).snapTo_o5pd1b_k$ = function (targetValue, $completion) {
    var tmp = new $snapToCOROUTINE$11(this, targetValue, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MotionProperty).animateTo_hsn39i_k$ = function (targetValue, animationSpec, block, $completion) {
    var tmp = new $animateToCOROUTINE$12(this, targetValue, animationSpec, block, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MotionProperty).animateTo$default_bj1666_k$ = function (targetValue, animationSpec, block, $completion, $super) {
    var tmp;
    if (block === VOID) {
      tmp = MotionProperty$animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    return $super === VOID ? this.animateTo_hsn39i_k$(targetValue, animationSpec, block, $completion) : $super.animateTo_hsn39i_k$.call(this, targetValue, animationSpec, block, $completion);
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
      $composer_0.startReplaceableGroup_ip860b_k$(1892018111);
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
      $composer_0.endReplaceableGroup_ern0ak_k$();
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
  protoOf(Alpha).calculateRenderValue_vzhoqz_k$ = function (base, displacement) {
    return base - displacement;
  };
  protoOf(Alpha).calculateRenderValue_qpjm53_k$ = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.calculateRenderValue_vzhoqz_k$(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(Alpha).get_modifier_t1pq5c_k$ = function () {
    var tmp = Companion_getInstance_2();
    return composed$composable(tmp, VOID, Alpha$_get_modifier_$lambda_3nlvw1(this));
  };
  protoOf(Alpha).lerpTo_uziakj_k$ = function (start, end, fraction, $completion) {
    return this.snapTo_o5pd1b_k$(lerpFloat(start.value_1, end.value_1, this.easingTransform_pg9447_k$(end.easing_1, fraction)), $completion);
  };
  protoOf(Alpha).lerpTo_iptvjh_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof Target_0 ? start : THROW_CCE();
    return this.lerpTo_uziakj_k$(tmp, end instanceof Target_0 ? end : THROW_CCE(), fraction, $completion);
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
      $this$drawWithContent.drawContent_m0wwjp_k$();
      $this$drawWithContent.drawRect$default_5x4e2k_k$(Color__copy$default_impl_ectz3s(this$0.color_1, $alpha));
      return Unit_getInstance();
    };
  }
  function ColorOverlay$_get_modifier_$lambda_kerwsg(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_ip860b_k$(246610499);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(246610499, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.ColorOverlay.<get-modifier>.<anonymous> (ColorOverlay.kt:41)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = this$0.get_renderValueFlow_lphgg_k$();
      var alpha = collectAsState$composable(tmp_0, null, $composer_0, 0, 1).get_value_j01efc_k$();
      var tmp_1;
      if (alpha > 0.0) {
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var key1 = this$0;
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_1.changed_ga7h3f_k$(key1) | $composer_1.changed_ga7h3f_k$(alpha));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          // Inline function 'com.bumble.appyx.interactions.core.ui.property.impl.ColorOverlay.<get-modifier>.<anonymous>.<anonymous>' call
          var value = ColorOverlay$_get_modifier_$lambda$lambda_d7jkyd(this$0, alpha);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        tmp_1 = drawWithContent($this$composed, tmp0);
      } else {
        tmp_1 = $this$composed;
      }
      var tmp0_0 = tmp_1;
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0_0;
    };
  }
  function ColorOverlay(coroutineScope, target, color, visibilityThreshold, displacement) {
    color = color === VOID ? Companion_getInstance_3().get_Black_t4k9fh_k$() : color;
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    displacement = displacement === VOID ? MutableStateFlow(0.0) : displacement;
    MotionProperty.call(this, coroutineScope, Animatable(target.value_1), target.easing_1, visibilityThreshold, displacement);
    this.color_1 = color;
    this.$stable_2 = 0;
  }
  protoOf(ColorOverlay).get_color_lnp1vl_k$ = function () {
    return this.color_1;
  };
  protoOf(ColorOverlay).calculateRenderValue_vzhoqz_k$ = function (base, displacement) {
    return base - displacement;
  };
  protoOf(ColorOverlay).calculateRenderValue_qpjm53_k$ = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.calculateRenderValue_vzhoqz_k$(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(ColorOverlay).get_modifier_t1pq5c_k$ = function () {
    var tmp = Companion_getInstance_2();
    return composed$composable(tmp, VOID, ColorOverlay$_get_modifier_$lambda_kerwsg(this));
  };
  protoOf(ColorOverlay).lerpTo_yys3nz_k$ = function (start, end, fraction, $completion) {
    return this.snapTo_o5pd1b_k$(lerpFloat(start.value_1, end.value_1, this.easingTransform_pg9447_k$(end.easing_1, fraction)), $completion);
  };
  protoOf(ColorOverlay).lerpTo_iptvjh_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof Target_1 ? start : THROW_CCE();
    return this.lerpTo_yys3nz_k$(tmp, end instanceof Target_1 ? end : THROW_CCE(), fraction, $completion);
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
  protoOf(GenericFloatProperty).calculateRenderValue_vzhoqz_k$ = function (base, displacement) {
    return base - displacement;
  };
  protoOf(GenericFloatProperty).calculateRenderValue_qpjm53_k$ = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.calculateRenderValue_vzhoqz_k$(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(GenericFloatProperty).get_modifier_t1pq5c_k$ = function () {
    return Companion_getInstance_2();
  };
  protoOf(GenericFloatProperty).lerpTo_c1lfsf_k$ = function (start, end, fraction, $completion) {
    return this.snapTo_o5pd1b_k$(lerpFloat(start.get_internalValue_suj1cb_k$(), end.get_internalValue_suj1cb_k$(), this.easingTransform_pg9447_k$(end.get_easing_cqnn04_k$(), fraction)), $completion);
  };
  protoOf(GenericFloatProperty).lerpTo_iptvjh_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof GenericFloatProperty ? start : THROW_CCE();
    return this.lerpTo_c1lfsf_k$(tmp, end instanceof GenericFloatProperty ? end : THROW_CCE(), fraction, $completion);
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
      $composer_0.startReplaceableGroup_ip860b_k$(1041413789);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1041413789, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.Shadow.<get-modifier>.<anonymous> (Shadow.kt:40)');
        tmp = Unit_getInstance();
      }
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_0 = this$0.get_renderValueFlow_lphgg_k$();
      var this_0 = collectAsState$composable(tmp_0, null, $composer_0, 0, 1).get_value_j01efc_k$();
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(this_0);
      var tmp0 = shadow($this$composed, tmp$ret$0, VOID, false);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
      return tmp0;
    };
  }
  function Shadow(coroutineScope, target, visibilityThreshold, displacement) {
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    displacement = displacement === VOID ? MutableStateFlow(0.0) : displacement;
    MotionProperty.call(this, coroutineScope, Animatable(target.value_1), target.easing_1, visibilityThreshold, displacement);
    this.$stable_2 = 0;
  }
  protoOf(Shadow).calculateRenderValue_vzhoqz_k$ = function (base, displacement) {
    return base - displacement;
  };
  protoOf(Shadow).calculateRenderValue_qpjm53_k$ = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.calculateRenderValue_vzhoqz_k$(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(Shadow).get_modifier_t1pq5c_k$ = function () {
    var tmp = Companion_getInstance_2();
    return composed$composable(tmp, VOID, Shadow$_get_modifier_$lambda_ajkudp(this));
  };
  protoOf(Shadow).lerpTo_yrf6dt_k$ = function (start, end, fraction, $completion) {
    return this.snapTo_o5pd1b_k$(lerpFloat(start.value_1, end.value_1, this.easingTransform_pg9447_k$(end.easing_1, fraction)), $completion);
  };
  protoOf(Shadow).lerpTo_iptvjh_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof Target_3 ? start : THROW_CCE();
    return this.lerpTo_yrf6dt_k$(tmp, end instanceof Target_3 ? end : THROW_CCE(), fraction, $completion);
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
  protoOf(Companion_8).fractionAlignment_tcy341_k$ = function (horizontalBiasFraction, verticalBiasFraction) {
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
  protoOf(OutsideAlignment).align_mb8mzc_k$ = function (size, space, layoutDirection) {
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = this.horizontalBias_2 * _IntSize___get_width__impl__d9yl4o(space);
    var tmp = roundToInt(this_0);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = this.verticalBias_2 * _IntSize___get_height__impl__prv63b(space);
    var tmp$ret$1 = roundToInt(this_1);
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
  protoOf(InsideAlignment).align_mb8mzc_k$ = function (size, space, layoutDirection) {
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
    // Inline function 'kotlin.math.roundToInt' call
    var tmp$ret$1 = roundToInt(y);
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
  protoOf(Value).align_mb8mzc_k$ = function (size, space, layoutDirection) {
    // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
    var this_0 = this.insideAlignment_1.align_mb8mzc_k$(size, space, layoutDirection);
    var other = this.outsideAlignment_1.align_mb8mzc_k$(size, space, layoutDirection);
    return IntOffset(_IntOffset___get_x__impl__qiqr5o(this_0) + _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj(this_0) + _IntOffset___get_y__impl__2avpwj(other) | 0);
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.insideAlignment_1;
  };
  protoOf(Value).component2_7eebsb_k$ = function () {
    return this.outsideAlignment_1;
  };
  protoOf(Value).copy_rd11z0_k$ = function (insideAlignment, outsideAlignment) {
    return new Value(insideAlignment, outsideAlignment);
  };
  protoOf(Value).copy$default_id5z2k_k$ = function (insideAlignment, outsideAlignment, $super) {
    insideAlignment = insideAlignment === VOID ? this.insideAlignment_1 : insideAlignment;
    outsideAlignment = outsideAlignment === VOID ? this.outsideAlignment_1 : outsideAlignment;
    return $super === VOID ? this.copy_rd11z0_k$(insideAlignment, outsideAlignment) : $super.copy_rd11z0_k$.call(this, insideAlignment, outsideAlignment);
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
      $composer_0.startReplaceableGroup_ip860b_k$(-1716707306);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1716707306, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.position.PositionAlignment.<get-modifier>.<anonymous> (PositionAlignment.kt:140)');
        tmp = Unit_getInstance();
      }
      var tmp_0 = this$0.get_renderValueFlow_lphgg_k$();
      var value = collectAsState$composable(tmp_0, null, $composer_0, 0, 1);
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalBoxScope();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0 == null) {
          // Inline function 'kotlin.requireNotNull.<anonymous>' call
          var message = 'Required value was null.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$2 = tmp0;
          break $l$block;
        }
      }
      var boxScope = tmp$ret$2;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.interactions.core.ui.property.impl.position.PositionAlignment.<get-modifier>.<anonymous>.<anonymous>' call
      var tmp0_0 = boxScope.align_uxv7cf_k$($this$composed, value.get_value_j01efc_k$());
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
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
  protoOf(PositionAlignment).calculateRenderValue_frp5hn_k$ = function (base, displacement) {
    return new Value(new InsideAlignment(base.insideAlignment_1.get_horizontalBias_8pmneu_k$() - displacement.insideAlignment_1.get_horizontalBias_8pmneu_k$(), base.insideAlignment_1.get_verticalBias_3xoql4_k$() - displacement.insideAlignment_1.get_verticalBias_3xoql4_k$()), new OutsideAlignment(base.outsideAlignment_1.get_horizontalBias_8pmneu_k$() - displacement.outsideAlignment_1.get_horizontalBias_8pmneu_k$(), base.outsideAlignment_1.get_verticalBias_3xoql4_k$() - displacement.outsideAlignment_1.get_verticalBias_3xoql4_k$()));
  };
  protoOf(PositionAlignment).calculateRenderValue_qpjm53_k$ = function (base, displacement) {
    var tmp = base instanceof Value ? base : THROW_CCE();
    return this.calculateRenderValue_frp5hn_k$(tmp, displacement instanceof Value ? displacement : THROW_CCE());
  };
  protoOf(PositionAlignment).get_modifier_t1pq5c_k$ = function () {
    var tmp = Companion_getInstance_2();
    return composed$composable(tmp, VOID, PositionAlignment$_get_modifier_$lambda_ubt1ir(this));
  };
  protoOf(PositionAlignment).lerpTo_1bez1r_k$ = function (start, end, fraction, $completion) {
    var progress = this.easingTransform_pg9447_k$(end.easing_1, fraction);
    return this.snapTo_o5pd1b_k$(new Value(new InsideAlignment(lerpFloat(start.value_1.insideAlignment_1.get_horizontalBias_8pmneu_k$(), end.value_1.insideAlignment_1.get_horizontalBias_8pmneu_k$(), progress), lerpFloat(start.value_1.insideAlignment_1.get_verticalBias_3xoql4_k$(), end.value_1.insideAlignment_1.get_verticalBias_3xoql4_k$(), progress)), new OutsideAlignment(lerpFloat(start.value_1.outsideAlignment_1.get_horizontalBias_8pmneu_k$(), end.value_1.outsideAlignment_1.get_horizontalBias_8pmneu_k$(), progress), lerpFloat(start.value_1.outsideAlignment_1.get_verticalBias_3xoql4_k$(), end.value_1.outsideAlignment_1.get_verticalBias_3xoql4_k$(), progress))), $completion);
  };
  protoOf(PositionAlignment).lerpTo_iptvjh_k$ = function (start, end, fraction, $completion) {
    var tmp = start instanceof Target_4 ? start : THROW_CCE();
    return this.lerpTo_1bez1r_k$(tmp, end instanceof Target_4 ? end : THROW_CCE(), fraction, $completion);
  };
  function BaseMutableUiState$isVisible$o$collect$lambda($flowArray) {
    return function () {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = $flowArray.length;
      return fillArrayVal(Array(size), null);
    };
  }
  function BaseMutableUiState$isVisible$o$collect$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).invoke_gb7vr7_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_md4kzr_k$($this$combineInternal, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_gb7vr7_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var booleanArray = this.it_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = booleanArray.length;
              while (inductionVariable < last) {
                var element = booleanArray[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                if (!element) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = true;
            }
             while (false);
            suspendResult = this.$this$combineInternal_1.emit_t92u1f_k$(tmp$ret$0, this);
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
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).create_md4kzr_k$ = function ($this$combineInternal, it, completion) {
    var i = new BaseMutableUiState$isVisible$o$collect$slambda(completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function BaseMutableUiState$isVisible$o$collect$slambda_0(resultContinuation) {
    var i = new BaseMutableUiState$isVisible$o$collect$slambda(resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_gb7vr7_k$($this$combineInternal, it, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = BaseMutableUiState$isVisible$o$collect$lambda(this._this__u8e3s4__1.$flowArray_1);
            suspendResult = combineInternal(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.$flowArray_1, tmp_1, BaseMutableUiState$isVisible$o$collect$slambda_0(null), this);
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
  function BaseMutableUiState$isAnimating$o$collect$lambda($flowArray) {
    return function () {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = $flowArray.length;
      return fillArrayVal(Array(size), null);
    };
  }
  function BaseMutableUiState$isAnimating$o$collect$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).invoke_gb7vr7_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_md4kzr_k$($this$combineInternal, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_gb7vr7_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var booleanArray = this.it_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = booleanArray.length;
              while (inductionVariable < last) {
                var element = booleanArray[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                if (element) {
                  tmp$ret$0 = true;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = false;
            }
             while (false);
            suspendResult = this.$this$combineInternal_1.emit_t92u1f_k$(tmp$ret$0, this);
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
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).create_md4kzr_k$ = function ($this$combineInternal, it, completion) {
    var i = new BaseMutableUiState$isAnimating$o$collect$slambda(completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function BaseMutableUiState$isAnimating$o$collect$slambda_0(resultContinuation) {
    var i = new BaseMutableUiState$isAnimating$o$collect$slambda(resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_gb7vr7_k$($this$combineInternal, it, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = BaseMutableUiState$isAnimating$o$collect$lambda(this._this__u8e3s4__1.$flowArray_1);
            suspendResult = combineInternal(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.$flowArray_1, tmp_1, BaseMutableUiState$isAnimating$o$collect$slambda_0(null), this);
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
    return boundsInParent_0.overlaps_l18ztf_k$($this.containerRect_1);
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
      $l$block: {
        // Inline function 'kotlinx.coroutines.flow.update' call
        var this_0 = this$0.size_1;
        while (true) {
          var prevValue = this_0.get_value_j01efc_k$().packedValue_1;
          // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.sizeChangedModifier.<anonymous>.<anonymous>' call
          var nextValue = size.packedValue_1;
          if (this_0.compareAndSet_l3595a_k$(new IntSize(prevValue), new IntSize(nextValue))) {
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
  protoOf(_no_name_provided__qut3iv_10).collect_aebrhc_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_10).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_aebrhc_k$(collector, $completion);
  };
  function BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z($this$graphicsLayer) {
    $this$graphicsLayer.set_alpha_tvzcqh_k$(0.0);
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
      $composer_0.startReplaceableGroup_ip860b_k$(504107695);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(504107695, $changed, -1, 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.<get-visibilityModifier>.<anonymous> (BaseMutableUiState.kt:85)');
        tmp = Unit_getInstance();
      }
      var size$delegate = collectAsState$composable(this$0.size_1, null, $composer_0, 0, 1);
      var tmp_0;
      if (!equals(invoke$lambda(size$delegate), Companion_getInstance_4().get_Zero_9we0a6_k$())) {
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
        sourceInformationMarkerEnd($composer_1);
        var localDensity = tmp0.get_density_qy0267_k$();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var this_1 = _IntSize___get_width__impl__d9yl4o(invoke$lambda(size$delegate)) / localDensity;
        var tmp_1 = _Dp___init__impl__ms3zkb(this_1);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var this_2 = _IntSize___get_height__impl__prv63b(invoke$lambda(size$delegate)) / localDensity;
        var tmp$ret$2 = _Dp___init__impl__ms3zkb(this_2);
        tmp_0 = requiredSize($this$composed, DpSize(tmp_1, tmp$ret$2));
      } else {
        tmp_0 = fillMaxSize($this$composed);
      }
      var tmp0_0 = tmp_0;
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_ern0ak_k$();
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
          var this_0 = this$0._isBoundsVisible_1;
          while (true) {
            var prevValue = this_0.get_value_j01efc_k$();
            // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.<get-visibilityModifier>.<anonymous>.<anonymous>' call
            var nextValue = isVisibleInParent(coordinates, this$0) ? isVisibleInWindow(coordinates, this$0) : false;
            if (this_0.compareAndSet_l3595a_k$(prevValue, nextValue)) {
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
          var this_1 = this$0._isBoundsVisible_1;
          while (true) {
            var prevValue_0 = this_1.get_value_j01efc_k$();
            // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.<get-visibilityModifier>.<anonymous>.<anonymous>' call
            var nextValue_0 = isVisibleInWindow(coordinates, this$0);
            if (this_1.compareAndSet_l3595a_k$(prevValue_0, nextValue_0)) {
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
  protoOf(_no_name_provided__qut3iv_11).collect_aebrhc_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_11).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_aebrhc_k$(collector, $completion);
  };
  function BaseMutableUiState(uiContext, motionProperties) {
    this.uiContext_1 = uiContext;
    this.motionProperties_1 = motionProperties;
    this.containerRect_1 = Rect(Companion_getInstance_0().get_Zero_k6n73t_k$(), Size(0.0, 0.0));
    var tmp = this;
    var tmp_0 = Companion_getInstance_2();
    tmp.sizeChangedModifier_1 = onSizeChanged(tmp_0, BaseMutableUiState$sizeChangedModifier$lambda(this));
    this._isBoundsVisible_1 = MutableStateFlow(false);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = this.motionProperties_1;
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
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
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    tmp_1.visibilitySources_1 = plus_1(destination, this._isBoundsVisible_1);
    this.size_1 = MutableStateFlow(new IntSize(Companion_getInstance_4().get_Zero_9we0a6_k$()));
    var tmp_2 = this;
    // Inline function 'com.bumble.appyx.combineState' call
    var flows = this.visibilitySources_1;
    var scope = this.uiContext_1.get_coroutineScope_5k7h45_k$();
    var sharingStarted = Companion_getInstance().get_Eagerly_3vw7yc_k$();
    // Inline function 'kotlinx.coroutines.flow.combine' call
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = toList(flows);
    var flowArray = copyToArray(this_1);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp_3 = new _no_name_provided__qut3iv_10(flowArray);
    // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.isVisible.<anonymous>' call
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(flows, 10));
    var tmp0_iterator_0 = flows.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.bumble.appyx.combineState.<anonymous>' call
      var tmp$ret$7 = item.get_value_j01efc_k$();
      destination_0.add_utx5q5_k$(tmp$ret$7);
    }
    var booleanArray = copyToArray(destination_0);
    var tmp$ret$12;
    $l$block: {
      // Inline function 'kotlin.collections.all' call
      var inductionVariable = 0;
      var last = booleanArray.length;
      while (inductionVariable < last) {
        var element_0 = booleanArray[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.isVisible.<anonymous>.<anonymous>' call
        if (!element_0) {
          tmp$ret$12 = false;
          break $l$block;
        }
      }
      tmp$ret$12 = true;
    }
    var tmp$ret$13 = tmp$ret$12;
    tmp_2.isVisible_1 = stateIn(tmp_3, scope, sharingStarted, tmp$ret$13);
    var tmp_4 = this;
    // Inline function 'kotlinx.coroutines.flow.combine' call
    // Inline function 'kotlin.collections.map' call
    var this_2 = this.motionProperties_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator_1 = this_2.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.isAnimating.<anonymous>' call
      var tmp$ret$15 = item_0.get_isAnimating_j5dmvp_k$();
      destination_1.add_utx5q5_k$(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_3 = toList(destination_1);
    var flowArray_0 = copyToArray(this_3);
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
    return this.get_combinedMotionPropertyModifier_g33v2o_k$().then_g5qrxq_k$(this.sizeChangedModifier_1);
  };
  protoOf(BaseMutableUiState).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(BaseMutableUiState).get_isVisible_6n82m7_k$ = function () {
    return this.isVisible_1;
  };
  protoOf(BaseMutableUiState).get_visibilityModifier_zfa3qm_k$ = function () {
    var tmp = Companion_getInstance_2();
    var tmp_0 = graphicsLayer(tmp, BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z).then_g5qrxq_k$(this.get_combinedMotionPropertyModifier_g33v2o_k$());
    var tmp_1 = composed$composable(tmp_0, VOID, BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_0(this));
    return onGloballyPositioned(tmp_1, BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_1(this));
  };
  protoOf(BaseMutableUiState).updateBounds_l2zr9a_k$ = function (transitionBounds) {
    this.containerRect_1 = Rect(Companion_getInstance_0().get_Zero_k6n73t_k$(), Size(transitionBounds.get_widthPx_nfsdj9_k$(), transitionBounds.get_heightPx_om8qxk_k$()));
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
  protoOf(MatchedTargetUiState).copy_6i1csm_k$ = function (element, targetUiState) {
    return new MatchedTargetUiState(element, targetUiState);
  };
  protoOf(MatchedTargetUiState).copy$default_mp6bkx_k$ = function (element, targetUiState, $super) {
    element = element === VOID ? this.element_1 : element;
    targetUiState = targetUiState === VOID ? this.targetUiState_1 : targetUiState;
    return $super === VOID ? this.copy_6i1csm_k$(element, targetUiState) : $super.copy_6i1csm_k$.call(this, element, targetUiState);
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
        THROW_IAE('No enum constant value.');
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
        THROW_IAE('No enum constant value.');
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
      // Inline function 'kotlin.arrayOfNulls' call
      var size = $flowArray.length;
      return fillArrayVal(Array(size), null);
    };
  }
  function BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).invoke_gb7vr7_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_md4kzr_k$($this$combineInternal, it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_gb7vr7_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var values = this.it_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = values.length;
              while (inductionVariable < last) {
                var element = values[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                if (element) {
                  tmp$ret$0 = true;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = false;
            }
             while (false);
            suspendResult = this.$this$combineInternal_1.emit_t92u1f_k$(tmp$ret$0, this);
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
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).create_md4kzr_k$ = function ($this$combineInternal, it, completion) {
    var i = new BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn(completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn_0(resultContinuation) {
    var i = new BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn(resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_gb7vr7_k$($this$combineInternal, it, $completion);
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
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            tmp_0.$this$unsafeFlow0__1 = this.collector_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_1 = BaseVisualisation$_get_viewpointIsAnimating_$o$collect$lambda_ft2y4u(this._this__u8e3s4__1.$flowArray_1);
            suspendResult = combineInternal(this.$this$unsafeFlow0__1, this._this__u8e3s4__1.$flowArray_1, tmp_1, BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn_0(null), this);
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
  function BaseVisualisation$mapSegment$slambda$slambda(this$0, $segment, resultContinuation) {
    this.this$0__1 = this$0;
    this.$segment_1 = $segment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).invoke_uo5hpl_k$ = function (it, $completion) {
    var tmp = this.create_qsrv3h_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_uo5hpl_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).create_qsrv3h_k$ = function (it, completion) {
    var i = new BaseVisualisation$mapSegment$slambda$slambda(this.this$0__1, this.$segment_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_qsrv3h_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$mapSegment$slambda$slambda_0(this$0, $segment, resultContinuation) {
    var i = new BaseVisualisation$mapSegment$slambda$slambda(this$0, $segment, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_uo5hpl_k$(it, $completion);
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
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (this.$update_1.get_animate_cwn5s8_k$()) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.$mutableUiState_1.animateTo_q9i1fk_k$(this.$this$launch_1, this.$matchedTargetUiState_1.get_targetUiState_tg1y03_k$(), this.this$0__1.currentSpringSpec_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$mutableUiState_1.snapTo_w9lkk7_k$(this.$matchedTargetUiState_1.get_targetUiState_tg1y03_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda$slambda(this.$update_1, this.$mutableUiState_1, this.$matchedTargetUiState_1, this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ManageAnimations$composable$slambda$slambda_0($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda(this$0, $matchedTargetUiState, resultContinuation) {
    this.this$0__1 = this$0;
    this.$matchedTargetUiState_1 = $matchedTargetUiState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).invoke_uk32iu_k$ = function (values, $completion) {
    var tmp = this.create_5p03gy_k$(values, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_uk32iu_k$(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
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
              var this_0 = this.this$0__1.animations_1;
              var key = this.$matchedTargetUiState_1.get_element_q8gf71_k$().get_id_kntnx8_k$();
              this_0.put_4fpzoq_k$(key, true);
              l$ret$1: do {
                var this_1 = this.this$0__1.updateIsAnimating_1;
                while (true) {
                  var prevValue = this_1.get_value_j01efc_k$();
                  var nextValue = true;
                  if (this_1.compareAndSet_l3595a_k$(prevValue, nextValue)) {
                    break l$ret$1;
                  }
                }
              }
               while (false);
              AppyxLogger_getInstance().d_86dvmc_k$('BaseMotionController', 'animation for element ' + this.$matchedTargetUiState_1.get_element_q8gf71_k$().get_id_kntnx8_k$() + ' is started');
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.this$0__1._finishedAnimations_1.emit_t92u1f_k$(this.$matchedTargetUiState_1.get_element_q8gf71_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var this_2 = this.this$0__1.animations_1;
            var key_0 = this.$matchedTargetUiState_1.get_element_q8gf71_k$().get_id_kntnx8_k$();
            this_2.put_4fpzoq_k$(key_0, false);
            l$ret$5: do {
              var this_3 = this.this$0__1.updateIsAnimating_1;
              while (true) {
                var prevValue_0 = this_3.get_value_j01efc_k$();
                var tmp$ret$2;
                l$ret$3: do {
                  var this_4 = this.this$0__1.animations_1;
                  if (this_4.isEmpty_y1axqb_k$()) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  }
                  var tmp0_iterator = this_4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
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
                if (this_3.compareAndSet_l3595a_k$(prevValue_0, nextValue_0)) {
                  break l$ret$5;
                }
              }
            }
             while (false);
            AppyxLogger_getInstance().d_86dvmc_k$('BaseMotionController', 'animation for element ' + this.$matchedTargetUiState_1.get_element_q8gf71_k$().get_id_kntnx8_k$() + ' is finished');
            this.set_state_rjd8d0_k$(3);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).create_5p03gy_k$ = function (values, completion) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda(this.this$0__1, this.$matchedTargetUiState_1, completion);
    i.values_1 = values;
    return i;
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_5p03gy_k$(value instanceof CompareValues ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda_0(this$0, $matchedTargetUiState, resultContinuation) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda(this$0, $matchedTargetUiState, resultContinuation);
    var l = function (values, $completion) {
      return i.invoke_uk32iu_k$(values, $completion);
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = withPrevious(distinctUntilChanged(this.$mutableUiState_1.get_isAnimating_j5dmvp_k$()));
            var tmp_1 = BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda_0(this.this$0__1, this.$matchedTargetUiState_1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_12(tmp_1), this);
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda(this.$mutableUiState_1, this.this$0__1, this.$matchedTargetUiState_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda_0($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
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
      var this_0 = $this.get_viewpointDimensions_748x5b_k$();
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-viewpointIsAnimating>.<anonymous>' call
        var tmp$ret$1 = item.get_second_jf7fjx_k$().get_isAnimating_j5dmvp_k$();
        destination.add_utx5q5_k$(tmp$ret$1);
      }
      var scope = $this.uiContext_1.get_coroutineScope_5k7h45_k$();
      var sharingStarted = Companion_getInstance().get_Eagerly_3vw7yc_k$();
      // Inline function 'kotlinx.coroutines.flow.combine' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_1 = toList(destination);
      var flowArray = copyToArray(this_1);
      // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
      var tmp_0 = new _no_name_provided__qut3iv_12(flowArray);
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-viewpointIsAnimating>.<anonymous>' call
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
      var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.bumble.appyx.combineState.<anonymous>' call
        var tmp$ret$7 = item_0.get_value_j01efc_k$();
        destination_0.add_utx5q5_k$(tmp$ret$7);
      }
      var values = copyToArray(destination_0);
      var tmp$ret$12;
      $l$block: {
        // Inline function 'kotlin.collections.any' call
        var inductionVariable = 0;
        var last = values.length;
        while (inductionVariable < last) {
          var element = values[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-viewpointIsAnimating>.<anonymous>.<anonymous>' call
          if (element) {
            tmp$ret$12 = true;
            break $l$block;
          }
        }
        tmp$ret$12 = false;
      }
      var tmp$ret$13 = tmp$ret$12;
      tmp = stateIn(tmp_0, scope, sharingStarted, tmp$ret$13);
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
    var this_0 = $this.updateIsAnimating_1;
    var flow = _get_viewpointIsAnimating__nlgw0y($this);
    var scope = $this.uiContext_1.get_coroutineScope_5k7h45_k$();
    var sharingStarted = Companion_getInstance().get_Eagerly_3vw7yc_k$();
    var tmp = combine_0(this_0, flow, BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy_0(null));
    // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-isAnimatingState>.<anonymous>' call
    var b1 = this_0.get_value_j01efc_k$();
    var b2 = flow.get_value_j01efc_k$();
    var tmp$ret$0 = b1 ? true : b2;
    return stateIn(tmp, scope, sharingStarted, tmp$ret$0);
  }
  function _get__finishedAnimations__svnhpt($this) {
    return $this._finishedAnimations_1;
  }
  function cleanUpCacheForDestroyedElements($this, matchedTargetUiStates) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(matchedTargetUiStates, 10));
    var tmp0_iterator = matchedTargetUiStates.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.cleanUpCacheForDestroyedElements.<anonymous>' call
      var tmp$ret$0 = item.get_element_q8gf71_k$().get_id_kntnx8_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var availableIds = destination;
    var iterator = $this.mutableUiStateCache_1.get_keys_wop4xp_k$().iterator_jk1svi_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      var key = iterator.next_20eer_k$();
      if (!availableIds.contains_aljjnj_k$(key)) {
        iterator.remove_ldkf9o_k$();
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
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function InterpolateUiState($this, segmentProgress, mutableUiState, from, to, initialProgress) {
    illegalDecoyCallException('InterpolateUiState');
  }
  function updateViewpoint_0($this, segment, segmentProgress, $completion) {
    var tmp = new $updateViewpointCOROUTINE$16($this, segment, segmentProgress, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1718546927);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(BaseVisualisation$ManageAnimations$composable$lambda($this, mutableUiState, matchedTargetUiState, update, $changed));
    }
  }
  function ObserveElementAnimationChanges$composable($this, mutableUiState, matchedTargetUiState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-18912775);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(BaseVisualisation$ObserveElementAnimationChanges$composable$lambda($this, mutableUiState, matchedTargetUiState, $changed));
    }
  }
  function InterpolateUiState$composable($this, segmentProgress, mutableUiState, from, to, initialProgress, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1618256231);
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
      tmp1_safe_receiver.updateScope_t8jcf_k$(BaseVisualisation$InterpolateUiState$composable$lambda($this, segmentProgress, mutableUiState, from, to, initialProgress, $changed));
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_11(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_11).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_12(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_12).emit_t92u1f_k$ = function (value, $completion) {
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
  protoOf(_no_name_provided__qut3iv_12).collect_aebrhc_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$17(this, collector, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_12).collect_aksokr_k$ = function (collector, $completion) {
    return this.collect_aebrhc_k$(collector, $completion);
  };
  function BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).invoke_rwt088_k$ = function (one, two, $completion) {
    var tmp = this.create_lbsj03_k$(one, two, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).invoke_4tzzq6_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE();
    return this.invoke_rwt088_k$(tmp, (!(p2 == null) ? typeof p2 === 'boolean' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var b1 = this.one_1;
          var b2 = this.two_1;
          return b1 ? true : b2;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).create_lbsj03_k$ = function (one, two, completion) {
    var i = new BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy(completion);
    i.one_1 = one;
    i.two_1 = two;
    return i;
  };
  function BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy_0(resultContinuation) {
    var i = new BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy(resultContinuation);
    var l = function (one, two, $completion) {
      return i.invoke_rwt088_k$(one, two, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BaseVisualisation$mapUpdate$slambda(this$0, $update, resultContinuation) {
    this.this$0__1 = this$0;
    this.$update_1 = $update;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$mapUpdate$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$mapUpdate$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$mapUpdate$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(BaseVisualisation$mapUpdate$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new BaseVisualisation$mapUpdate$slambda(this.this$0__1, this.$update_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseVisualisation$mapUpdate$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$mapUpdate$slambda_0(this$0, $update, resultContinuation) {
    var i = new BaseVisualisation$mapUpdate$slambda(this$0, $update, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function BaseVisualisation$mapUpdate$lambda($mutableUiState, this$0, $t1, $update) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(842344782, $changed, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>.<anonymous> (BaseVisualisation.kt:116)');
        }
        Box$composable($mutableUiState.get_visibilityModifier_zfa3qm_k$(), $composer_0, 0);
        ObserveElementAnimationChanges$composable(this$0, $mutableUiState, $t1, $composer_0, 512);
        ManageAnimations$composable(this$0, $mutableUiState, $t1, $update, $composer_0, 4096);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BaseVisualisation$updateViewpoint$lambda($targetValue) {
    return function ($this$animateTo) {
      AppyxLogger_getInstance().d_86dvmc_k$('BaseMotionController', 'Viewpoint animateTo (Update) \u2013 ' + $targetValue);
      return Unit_getInstance();
    };
  }
  function BaseVisualisation$mapSegment$slambda($segmentProgress, this$0, $segment, resultContinuation) {
    this.$segmentProgress_1 = $segmentProgress;
    this.this$0__1 = this$0;
    this.$segment_1 = $segment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$mapSegment$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$mapSegment$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$mapSegment$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = BaseVisualisation$mapSegment$slambda$slambda_0(this.this$0__1, this.$segment_1, null);
            suspendResult = this.$segmentProgress_1.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_11(tmp_0), this);
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
  protoOf(BaseVisualisation$mapSegment$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new BaseVisualisation$mapSegment$slambda(this.$segmentProgress_1, this.this$0__1, this.$segment_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(BaseVisualisation$mapSegment$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$mapSegment$slambda_0($segmentProgress, this$0, $segment, resultContinuation) {
    var i = new BaseVisualisation$mapSegment$slambda($segmentProgress, this$0, $segment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function BaseVisualisation$mapSegment$lambda($mutableUiState, this$0, $segmentProgress, $t0, $t1, $initialProgress) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1059286326, $changed, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous> (BaseVisualisation.kt:244)');
        }
        Box$composable($mutableUiState.get_visibilityModifier_zfa3qm_k$(), $composer_0, 0);
        InterpolateUiState$composable(this$0, $segmentProgress, $mutableUiState, $t0, $t1, $initialProgress, $composer_0, 262144);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BaseVisualisation$updateViewpoint$lambda_0($viewpointDimension, $targetValue) {
    return function ($this$animateTo) {
      AppyxLogger_getInstance().d_86dvmc_k$('BaseMotionController', 'Viewpoint animateTo (Segment) \u2013 ' + $viewpointDimension.get_internalValue_suj1cb_k$() + ' -> ' + $targetValue);
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
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
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
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda(this.$update_1, this.$mutableUiState_1, this.$matchedTargetUiState_1, this.this$0__1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ManageAnimations$composable$slambda_0($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda(this.$mutableUiState_1, this.this$0__1, this.$matchedTargetUiState_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda_0($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
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
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$mutableUiState_1.lerpTo_8cl9oe_k$(this.this$0__1.coroutineScope_1, this.$from_1.get_targetUiState_tg1y03_k$(), this.$to_1.get_targetUiState_tg1y03_k$(), InterpolateUiState$composable$lambda(this.$progress$delegate_1));
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
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new BaseVisualisation$InterpolateUiState$composable$slambda(this.$mutableUiState_1, this.this$0__1, this.$from_1, this.$to_1, this.$progress$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BaseVisualisation$InterpolateUiState$composable$slambda_0($mutableUiState, this$0, $from, $to, $progress$delegate, resultContinuation) {
    var i = new BaseVisualisation$InterpolateUiState$composable$slambda($mutableUiState, this$0, $from, $to, $progress$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
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
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1.get_viewpointDimensions_748x5b_k$();
            this.tmp0_iterator1__1 = this.this0__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.element2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            var tmp_1 = this;
            tmp_1.name_for_destructuring_parameter_03_f5x4hj_1 = this.element2__1;
            this.fieldOfState4__1 = this.name_for_destructuring_parameter_03_f5x4hj_1.component1_7eebsc_k$();
            this.viewpointDimension5__1 = this.name_for_destructuring_parameter_03_f5x4hj_1.component2_7eebsb_k$();
            this.targetValue6__1 = this.fieldOfState4__1(this.update_1.get_currentTargetState_l0vn00_k$());
            this.set_state_rjd8d0_k$(2);
            var tmp0_stiffness = this._this__u8e3s4__1.currentSpringSpec_1.get_stiffness_dt2sgm_k$();
            var tmp1_dampingRatio = this._this__u8e3s4__1.currentSpringSpec_1.get_dampingRatio_syjss2_k$();
            var tmp_2 = spring(tmp1_dampingRatio, tmp0_stiffness);
            suspendResult = this.viewpointDimension5__1.animateTo_hsn39i_k$(this.targetValue6__1, tmp_2, BaseVisualisation$updateViewpoint$lambda(this.targetValue6__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
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
            this.set_exceptionState_fex74n_k$(7);
            var tmp_0 = this;
            tmp_0.this0__1 = this._this__u8e3s4__1.get_viewpointDimensions_748x5b_k$();
            this.tmp0_iterator1__1 = this.this0__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            this.element2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            var tmp_1 = this;
            tmp_1.name_for_destructuring_parameter_03_f5x4hj_1 = this.element2__1;
            this.fieldOfState4__1 = this.name_for_destructuring_parameter_03_f5x4hj_1.component1_7eebsc_k$();
            this.viewpointDimension5__1 = this.name_for_destructuring_parameter_03_f5x4hj_1.component2_7eebsb_k$();
            this.tmp0_container6__1 = viewpointTargetValue(this._this__u8e3s4__1, this.segment_1, this.segmentProgress_1, this.fieldOfState4__1);
            this.behaviour7__1 = this.tmp0_container6__1.component1_7eebsc_k$();
            this.targetValue8__1 = this.tmp0_container6__1.component2_7eebsb_k$();
            this.tmp1_subject9__1 = this.behaviour7__1;
            this.tmp010__1 = this.tmp1_subject9__1.get_ordinal_ip24qg_k$();
            if (this.tmp010__1 === 0) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = this.viewpointDimension5__1.snapTo_o5pd1b_k$(this.targetValue8__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.tmp010__1 === 1) {
                if (!(this.viewpointDimension5__1.get_internalValue_suj1cb_k$() === this.targetValue8__1)) {
                  this.set_state_rjd8d0_k$(2);
                  var tmp2_stiffness = this._this__u8e3s4__1.currentSpringSpec_1.get_stiffness_dt2sgm_k$();
                  var tmp3_dampingRatio = this._this__u8e3s4__1.currentSpringSpec_1.get_dampingRatio_syjss2_k$();
                  var tmp_2 = spring(tmp3_dampingRatio, tmp2_stiffness);
                  suspendResult = this.viewpointDimension5__1.animateTo_hsn39i_k$(this.targetValue8__1, tmp_2, BaseVisualisation$updateViewpoint$lambda_0(this.viewpointDimension5__1, this.targetValue8__1), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_rjd8d0_k$(3);
                  continue $sm;
                }
              } else {
                this.set_state_rjd8d0_k$(5);
                continue $sm;
              }
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 4:
            AppyxLogger_getInstance().d_86dvmc_k$('BaseMotionController', 'Viewpoint snapTo (Segment): ' + this.targetValue8__1);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(1);
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
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
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
  protoOf(BaseVisualisation).set_currentSpringSpec_kl7w18_k$ = function (_set____db54di) {
    this.currentSpringSpec_1 = _set____db54di;
  };
  protoOf(BaseVisualisation).get_currentSpringSpec_97no60_k$ = function () {
    return this.currentSpringSpec_1;
  };
  protoOf(BaseVisualisation).get_finishedAnimations_ooylfa_k$ = function () {
    return this.finishedAnimations_1;
  };
  protoOf(BaseVisualisation).set_transitionBounds_ljh553_k$ = function (_set____db54di) {
    this.transitionBounds_1 = _set____db54di;
  };
  protoOf(BaseVisualisation).get_transitionBounds_6wxwb1_k$ = function () {
    return this.transitionBounds_1;
  };
  protoOf(BaseVisualisation).updateBounds_l2zr9a_k$ = function (transitionBounds) {
    this.transitionBounds_1 = transitionBounds;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.mutableUiStateCache_1.get_values_ksazhn_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.updateBounds.<anonymous>' call
      element.updateBounds_l2zr9a_k$(transitionBounds);
    }
  };
  protoOf(BaseVisualisation).overrideAnimationSpec_gi2y1v_k$ = function (springSpec) {
    this.currentSpringSpec_1 = springSpec;
  };
  protoOf(BaseVisualisation).isAnimating_x1kvqk_k$ = function () {
    return _get_isAnimatingState__x32vxu(this);
  };
  protoOf(BaseVisualisation).mapUpdate_9ctc9w_k$ = function (update) {
    var matchedTargetUiStates = this.toUiTargets_hl6jeq_k$(update.get_currentTargetState_l0vn00_k$());
    cleanUpCacheForDestroyedElements(this, matchedTargetUiStates);
    launch(this.coroutineScope_1, VOID, VOID, BaseVisualisation$mapUpdate$slambda_0(this, update, null));
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(matchedTargetUiStates, 10));
    var tmp0_iterator = matchedTargetUiStates.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>' call
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = this.mutableUiStateCache_1;
      var key = item.get_element_q8gf71_k$().get_id_kntnx8_k$();
      var value = this_0.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.apply' call
        var this_1 = this.mutableUiStateFor_fzsp1k_k$(this.uiContext_1, item.get_targetUiState_tg1y03_k$());
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>.<anonymous>.<anonymous>' call
        this_1.updateBounds_l2zr9a_k$(this.transitionBounds_1);
        var answer = this_1;
        this_0.put_4fpzoq_k$(key, answer);
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
      var tmp$ret$3 = new ElementUiModel(tmp0_element, tmp1_visibleState, tmp2_motionProperties, ComposableLambda$invoke$ref(composableLambdaInstance(842344782, true, BaseVisualisation$mapUpdate$lambda(mutableUiState, this, item, update))), tmp3_modifier, tmp4_progress);
      destination.add_utx5q5_k$(tmp$ret$3);
    }
    return destination;
  };
  protoOf(BaseVisualisation).mapSegment_9zpqmf_k$ = function (segment, segmentProgress, initialProgress) {
    var tmp0_container = segment.get_stateTransition_4ivdwj_k$();
    var fromState = tmp0_container.component1_7eebsc_k$();
    var targetState = tmp0_container.component2_7eebsb_k$();
    var fromTargetUiState = this.toUiTargets_hl6jeq_k$(fromState);
    var toTargetUiState = this.toUiTargets_hl6jeq_k$(targetState);
    cleanUpCacheForDestroyedElements(this, toTargetUiState);
    launch(this.coroutineScope_1, VOID, VOID, BaseVisualisation$mapSegment$slambda_0(segmentProgress, this, segment, null));
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(toTargetUiState, 10));
    var tmp0_iterator = toTargetUiState.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>' call
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
      var tmp$ret$2 = tmp$ret$1;
      var t0 = ensureNotNull(tmp$ret$2);
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = this.mutableUiStateCache_1;
      var key = item.get_element_q8gf71_k$().get_id_kntnx8_k$();
      var value = this_0.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.apply' call
        var this_1 = this.mutableUiStateFor_fzsp1k_k$(this.uiContext_1, t0.get_targetUiState_tg1y03_k$());
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous>.<anonymous>' call
        this_1.updateBounds_l2zr9a_k$(this.transitionBounds_1);
        var answer = this_1;
        this_0.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var mutableUiState = tmp;
      mutableUiState.lerpTo_8cl9oe_k$(this.coroutineScope_1, t0.get_targetUiState_tg1y03_k$(), item.get_targetUiState_tg1y03_k$(), initialProgress);
      var tmp0_element = item.get_element_q8gf71_k$();
      var tmp1_visibleState = mutableUiState.get_isVisible_6n82m7_k$();
      var tmp2_motionProperties = mutableUiState.get_motionProperties_5siqmq_k$();
      var tmp3_modifier = mutableUiState.get_modifier_t1pq5c_k$();
      var tmp$ret$6 = new ElementUiModel(tmp0_element, tmp1_visibleState, tmp2_motionProperties, ComposableLambda$invoke$ref_0(composableLambdaInstance(1059286326, true, BaseVisualisation$mapSegment$lambda(mutableUiState, this, segmentProgress, t0, item, initialProgress))), tmp3_modifier, segmentProgress);
      destination.add_utx5q5_k$(tmp$ret$6);
    }
    return destination;
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
  protoOf(BaseTransitionModel).operation$default_gat9f3_k$ = operation$default;
  protoOf(BaseTransitionModel).onSettled$default_94n6a2_k$ = onSettled$default;
  protoOf(BaseTransitionModel).canApply_hy0zf0_k$ = canApply;
  protoOf(OnPointerEventNode).interceptOutOfBoundsChildEvents_ffmhz1_k$ = interceptOutOfBoundsChildEvents;
  protoOf(OnPointerEventNode).onDensityChange_hdmpu1_k$ = onDensityChange;
  protoOf(OnPointerEventNode).onViewConfigurationChange_i61u42_k$ = onViewConfigurationChange;
  protoOf(Noop_1).get_isContinuous_ob44bi_k$ = get_isContinuous;
  protoOf(Noop_1).onStartDrag_qsgty5_k$ = onStartDrag;
  protoOf(BaseVisualisation).map_1frjmg_k$ = map;
  protoOf(BaseVisualisation).mapKeyframes_s40g9q_k$ = mapKeyframes;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BaseBackPressHandlerStrategy;
  _.$_$.b = BaseOperation;
  _.$_$.c = BaseTransitionModel;
  _.$_$.d = Elements;
  _.$_$.e = BaseAppyxComponent;
  _.$_$.f = removedElements;
  _.$_$.g = onPointerEvent;
  _.$_$.h = Plugin;
  _.$_$.i = SavesInstanceState;
  _.$_$.j = MutableSavedStateMapImpl;
  _.$_$.k = TransitionBounds;
  _.$_$.l = UiContext;
  _.$_$.m = Noop_0;
  _.$_$.n = Noop_1;
  _.$_$.o = onStartDrag;
  _.$_$.p = GestureFactory;
  _.$_$.q = GestureSettleConfig;
  _.$_$.r = dragHorizontalDirection;
  _.$_$.s = AppyxComponentSetup$composable;
  _.$_$.t = get_DefaultAnimationSpec;
  _.$_$.u = OutsideAlignment;
  _.$_$.v = PositionAlignment;
  _.$_$.w = Target_0;
  _.$_$.x = Alpha;
  _.$_$.y = Target_1;
  _.$_$.z = ColorOverlay;
  _.$_$.a1 = Target_3;
  _.$_$.b1 = Shadow;
  _.$_$.c1 = BaseMutableUiState;
  _.$_$.d1 = MatchedTargetUiState;
  _.$_$.e1 = get_LocalBoxScope;
  _.$_$.f1 = get_LocalMotionProperties;
  _.$_$.g1 = asElement;
  _.$_$.h1 = BaseVisualisation;
  _.$_$.i1 = mapState;
  _.$_$.j1 = Mode_IMPOSED_getInstance;
  _.$_$.k1 = Mode_KEYFRAME_getInstance;
  _.$_$.l1 = HorizontalDirection_RIGHT_getInstance;
  _.$_$.m1 = detectDragGesturesOrCancellation;
  _.$_$.n1 = Gesture_init_$Create$;
  _.$_$.o1 = Target_init_$Create$_0;
  _.$_$.p1 = Companion_getInstance_5;
  _.$_$.q1 = Companion_getInstance_13;
  _.$_$.r1 = UUID_getInstance;
  //endregion
  return _;
}));
