(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'uuid', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib.js', './appyx-utils-multiplatform.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-foundation.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-animation-core.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-foundation-layout.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('uuid'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib.js'), require('./appyx-utils-multiplatform.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-foundation.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-animation-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-foundation-layout.js'));
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
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'appyx-interactions-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'appyx-interactions-common'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'appyx-interactions-common'.");
    }
    root['appyx-interactions-common'] = factory(typeof this['appyx-interactions-common'] === 'undefined' ? {} : this['appyx-interactions-common'], Uuid, this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['appyx-utils-multiplatform'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-animation-core'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-foundation-layout']);
  }
}(this, function (_, Uuid, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_appyx_utils_multiplatform, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation_layout) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var VOID = kotlin_kotlin.$_$.d;
  var stateIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var protoOf = kotlin_kotlin.$_$.r9;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var scan = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var hashCode = kotlin_kotlin.$_$.c9;
  var getStringHashCode = kotlin_kotlin.$_$.b9;
  var equals = kotlin_kotlin.$_$.t8;
  var Parcelable = kotlin_appyx_utils_multiplatform.$_$.a;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var awaitEachGesture = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.y1;
  var isInterface = kotlin_kotlin.$_$.h9;
  var awaitFirstDown = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var awaitTouchSlopOrCancellation = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k1;
  var awaitDragOrCancellation = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h1;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var emptySet = kotlin_kotlin.$_$.t4;
  var plus = kotlin_kotlin.$_$.i6;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var Set = kotlin_kotlin.$_$.x3;
  var AppyxLogger_getInstance = kotlin_appyx_utils_multiplatform.$_$.b;
  var fillArrayVal = kotlin_kotlin.$_$.u8;
  var isArray = kotlin_kotlin.$_$.f9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var to = kotlin_kotlin.$_$.ce;
  var combineInternal = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var emitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var List = kotlin_kotlin.$_$.q3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toList = kotlin_kotlin.$_$.b7;
  var copyToArray = kotlin_kotlin.$_$.p4;
  var Pair = kotlin_kotlin.$_$.vc;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.wd;
  var transformLatest = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var emptyList = kotlin_kotlin.$_$.r4;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xd;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var numberToInt = kotlin_kotlin.$_$.n9;
  var Offset__isValid_impl_z7krde = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Offset__getDistanceSquared_impl_97mhi6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var isNaN_0 = kotlin_kotlin.$_$.md;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qd;
  var get_lastIndex = kotlin_kotlin.$_$.q5;
  var Collection = kotlin_kotlin.$_$.o3;
  var plus_0 = kotlin_kotlin.$_$.k6;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t2;
  var lazy = kotlin_kotlin.$_$.pd;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var distinctUntilChanged = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var filterNotNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var last = kotlin_kotlin.$_$.v5;
  var listOf = kotlin_kotlin.$_$.z5;
  var coerceIn = kotlin_kotlin.$_$.na;
  var getNumberHashCode = kotlin_kotlin.$_$.y8;
  var Enum = kotlin_kotlin.$_$.mc;
  var getKClass = kotlin_kotlin.$_$.b;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy_0 = kotlin_kotlin.$_$.od;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var getBooleanHashCode = kotlin_kotlin.$_$.w8;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.k7;
  var PointerEventPass_Initial_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.s7;
  var interceptOutOfBoundsChildEvents = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var onDensityChange = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var onViewConfigurationChange = kotlin_org_jetbrains_compose_ui_ui.$_$.t4;
  var PointerInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v4;
  var toString_0 = kotlin_kotlin.$_$.be;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.f;
  var MutableMap = kotlin_kotlin.$_$.v3;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Offset__times_impl_jz1mli = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var get_PI = kotlin_kotlin.$_$.w9;
  var Offset__component1_impl_qn5q2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var Offset__component2_impl_9ljbv = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var Long = kotlin_kotlin.$_$.rc;
  var numberToLong = kotlin_kotlin.$_$.o9;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var AnimationVector = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var AnimationVector3D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var AnimationVector1D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var combine = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var collectAsState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.o7;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var drawWithContent = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var roundToInt = kotlin_kotlin.$_$.ba;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Animatable_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var boundsInParent = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var boundsInWindow = kotlin_org_jetbrains_compose_ui_ui.$_$.o3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var KProperty0 = kotlin_kotlin.$_$.va;
  var THROW_ISE = kotlin_kotlin.$_$.yc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x8;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var requiredSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var onSizeChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var plus_1 = kotlin_kotlin.$_$.l6;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var onGloballyPositioned = kotlin_org_jetbrains_compose_ui_ui.$_$.t3;
  var combine_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var LaunchedEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var collectAsState$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Box$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var roundToLong = kotlin_kotlin.$_$.ca;
  //endregion
  //region block: pre-declaration
  setMetadataFor(CompareValues, 'CompareValues', classMeta, VOID, VOID, CompareValues);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(mapState$o$collect$slambda, 'mapState$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$0, '$collectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(withPrevious$slambda, 'withPrevious$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(withPrevious$o$collect$slambda, 'withPrevious$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Element, 'Element', classMeta, VOID, [Parcelable]);
  setMetadataFor(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0, 'sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0', classMeta);
  setMetadataFor(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0, 'sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(detectDragGesturesOrCancellation$slambda, 'detectDragGesturesOrCancellation$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($dragCOROUTINE$2, '$dragCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Elements, 'Elements', classMeta, VOID, VOID, Elements_init_$Create$);
  setMetadataFor(BaseAppyxComponent$slambda$slambda, 'BaseAppyxComponent$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda$slambda, 'BaseAppyxComponent$observeAnimationChanges$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1, 'BaseAppyxComponent$observeAnimationChanges$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda, 'BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$3, '$collectCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda, 'BaseAppyxComponent$observeVisualisation$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda_1, 'BaseAppyxComponent$observeVisualisation$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda$slambda_3, 'BaseAppyxComponent$observeVisualisation$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$slambda, 'BaseAppyxComponent$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda, 'BaseAppyxComponent$observeAnimationChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeAnimationChanges$slambda_1, 'BaseAppyxComponent$observeAnimationChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseAppyxComponent$observeVisualisation$slambda, 'BaseAppyxComponent$observeVisualisation$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Plugin, 'Plugin', interfaceMeta);
  function saveInstanceState(state) {
  }
  setMetadataFor(SavesInstanceState, 'SavesInstanceState', interfaceMeta, VOID, [Plugin]);
  setMetadataFor(BaseAppyxComponent, 'BaseAppyxComponent', classMeta, VOID, [SavesInstanceState]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_4, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(removedElements$o$collect$slambda, 'removedElements$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$4, '$collectCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseBackPressHandlerStrategy, 'BaseBackPressHandlerStrategy', classMeta);
  setMetadataFor(DontHandleBackPress, 'DontHandleBackPress', classMeta, BaseBackPressHandlerStrategy, VOID, DontHandleBackPress);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(AnimatedProgressController$animateModel$slambda, 'AnimatedProgressController$animateModel$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AnimatedProgressController$stopModel$slambda, 'AnimatedProgressController$stopModel$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AnimatedProgressController, 'AnimatedProgressController', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(DebugProgressInputSource, 'DebugProgressInputSource', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(DragProgressController, 'DragProgressController', classMeta);
  setMetadataFor(InstantProgressController, 'InstantProgressController', classMeta);
  setMetadataFor(BaseOperation, 'BaseOperation', classMeta, VOID, [Parcelable]);
  setMetadataFor(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0, 'BaseTransitionModel$<get-elements>$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$5, '$collectCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_5, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  function operation$default(operation, overrideMode, $super) {
    overrideMode = overrideMode === VOID ? null : overrideMode;
    return $super === VOID ? this.adk(operation, overrideMode) : $super.adk.call(this, operation, overrideMode);
  }
  function canApply(operation) {
    return operation.rdk(this.ndf().u2().ldk());
  }
  setMetadataFor(TransitionModel, 'TransitionModel', interfaceMeta, VOID, [SavesInstanceState]);
  setMetadataFor(BaseTransitionModel, 'BaseTransitionModel', classMeta, VOID, [TransitionModel]);
  setMetadataFor(Keyframes$currentIndexFlow$o$collect$slambda, 'Keyframes$currentIndexFlow$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$6, '$collectCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(Keyframes$currentSegmentFlow$o$collect$slambda, 'Keyframes$currentSegmentFlow$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$7, '$collectCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda, 'Keyframes$currentSegmentTargetStateFlow$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$8, '$collectCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(Keyframes$getSegmentProgress$o$collect$slambda, 'Keyframes$getSegmentProgress$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$9, '$collectCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_6, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_7, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_8, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_9, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Output, 'Output', classMeta, VOID, VOID, VOID, VOID, {0: Companion_getInstance_9});
  setMetadataFor(Keyframes, 'Keyframes', classMeta, Output);
  setMetadataFor(Mode, 'Mode', classMeta, Enum);
  setMetadataFor(Noop, 'Noop', classMeta, VOID, [Parcelable], Noop);
  setMetadataFor(Segment, 'Segment', classMeta);
  setMetadataFor(StateTransition, 'StateTransition', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SettleDirection, 'SettleDirection', classMeta, Enum);
  setMetadataFor(Update, 'Update', classMeta, Output);
  setMetadataFor(PointerInputElement, 'PointerInputElement', classMeta, ModifierNodeElement);
  setMetadataFor(OnPointerEventNode, 'OnPointerEventNode', classMeta, Node, [PointerInputModifierNode, Node]);
  setMetadataFor(MutableSavedStateMapImpl, 'MutableSavedStateMapImpl', classMeta, VOID, [MutableMap]);
  setMetadataFor(Visualisation$map$o$collect$slambda, 'Visualisation$map$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_10, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_8, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
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
      var this_0 = output.qdi_1;
      // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
      tmp = new _no_name_provided__qut3iv_8(this_0, this, output);
    } else {
      if (output instanceof Update) {
        tmp = MutableStateFlow(this.fdu(output));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function mapKeyframes(keyframes, segmentIndex) {
    var tmp = keyframes.bdn();
    var tmp_0 = keyframes.ndr(segmentIndex);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      var value = toSegmentProgress(keyframes.udi(), segmentIndex);
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
    return this.gdu(tmp, tmp_0, tmp$ret$1);
  }
  setMetadataFor(Visualisation, 'Visualisation', interfaceMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(TransitionBounds, 'TransitionBounds', classMeta);
  setMetadataFor(UiContext, 'UiContext', classMeta);
  setMetadataFor(HorizontalDirection, 'HorizontalDirection', classMeta, Enum);
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
  setMetadataFor(_no_name_provided__qut3iv_9, VOID, classMeta);
  setMetadataFor(ElementUiModel, 'ElementUiModel', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(MotionProperty$renderValueFlow$slambda, 'MotionProperty$renderValueFlow$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($snapToCOROUTINE$11, '$snapToCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor($animateToCOROUTINE$12, '$animateToCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor(MotionProperty, 'MotionProperty', classMeta, VOID, VOID, VOID, VOID, VOID, [1, 3]);
  setMetadataFor(Target, 'Target', classMeta);
  setMetadataFor(Alpha, 'Alpha', classMeta, MotionProperty, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(Target_0, 'Target', classMeta);
  setMetadataFor(ColorOverlay, 'ColorOverlay', classMeta, MotionProperty, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(Target_1, 'Target', classMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta, MotionProperty, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(BiasAlignment, 'BiasAlignment', classMeta);
  setMetadataFor(OutsideAlignment, 'OutsideAlignment', classMeta, BiasAlignment);
  setMetadataFor(InsideAlignment, 'InsideAlignment', classMeta, BiasAlignment);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Value, 'Value', classMeta, VOID, VOID, Value);
  setMetadataFor(Target_2, 'Target', classMeta, VOID, VOID, Target_init_$Create$);
  setMetadataFor(PositionAlignment, 'PositionAlignment', classMeta, MotionProperty, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(BaseMutableUiState$isVisible$o$collect$slambda, 'BaseMutableUiState$isVisible$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$13, '$collectCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor(BaseMutableUiState$isAnimating$o$collect$slambda, 'BaseMutableUiState$isAnimating$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$14, '$collectCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_10, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_11, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseMutableUiState, 'BaseMutableUiState', classMeta, VOID, VOID, VOID, VOID, VOID, [1, 3]);
  setMetadataFor(MatchedTargetUiState, 'MatchedTargetUiState', classMeta);
  setMetadataFor(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn, 'BaseVisualisation$<get-viewpointIsAnimating>$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$17, '$collectCOROUTINE$17', classMeta, CoroutineImpl);
  setMetadataFor(BaseVisualisation$mapSegment$slambda$slambda, 'BaseVisualisation$mapSegment$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ManageAnimations$composable$slambda$slambda, 'BaseVisualisation$ManageAnimations$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda, 'BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda, 'BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ViewpointBehaviour, 'ViewpointBehaviour', classMeta, Enum);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_11, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_12, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_12, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy, 'BaseVisualisation$<get-isAnimatingState>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(BaseVisualisation$mapUpdate$slambda, 'BaseVisualisation$mapUpdate$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$mapSegment$slambda, 'BaseVisualisation$mapSegment$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ManageAnimations$composable$slambda, 'BaseVisualisation$ManageAnimations$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda, 'BaseVisualisation$ObserveElementAnimationChanges$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(BaseVisualisation$InterpolateUiState$composable$slambda, 'BaseVisualisation$InterpolateUiState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($updateViewpointCOROUTINE$15, '$updateViewpointCOROUTINE$15', classMeta, CoroutineImpl);
  setMetadataFor($updateViewpointCOROUTINE$16, '$updateViewpointCOROUTINE$16', classMeta, CoroutineImpl);
  setMetadataFor(BaseVisualisation, 'BaseVisualisation', classMeta, VOID, [Visualisation], VOID, VOID, VOID, [1, 2]);
  setMetadataFor(SystemClock, 'SystemClock', objectMeta);
  setMetadataFor(UUID, 'UUID', objectMeta);
  //endregion
  function mapState(_this__u8e3s4, scope, sharingStarted, mapper) {
    sharingStarted = sharingStarted === VOID ? Companion_getInstance().e18_1 : sharingStarted;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp$ret$2 = new _no_name_provided__qut3iv(_this__u8e3s4, mapper);
    return stateIn(tmp$ret$2, scope, sharingStarted, mapper(_this__u8e3s4.u2()));
  }
  function CompareValues(previous, currentNullable) {
    previous = previous === VOID ? null : previous;
    currentNullable = currentNullable === VOID ? null : currentNullable;
    this.fd3_1 = previous;
    this.gd3_1 = currentNullable;
    this.hd3_1 = 0;
  }
  protoOf(CompareValues).z1v = function () {
    var tmp0_elvis_lhs = this.gd3_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Should not be invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CompareValues).id3 = function () {
    return !(this.gd3_1 == null);
  };
  protoOf(CompareValues).jd3 = function (new_0) {
    return new CompareValues(this.gd3_1, new_0);
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
    this.kd3_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).t13 = function (value, $completion) {
    return this.kd3_1(value, $completion);
  };
  function mapState$o$collect$slambda($$this$unsafeFlow, $mapper, resultContinuation) {
    this.td3_1 = $$this$unsafeFlow;
    this.ud3_1 = $mapper;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mapState$o$collect$slambda).o1d = function (value, $completion) {
    var tmp = this.p1d(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(mapState$o$collect$slambda).fc = function (p1, $completion) {
    return this.o1d((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mapState$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.wd3_1 = this.td3_1;
            var tmp_1 = this;
            tmp_1.xd3_1 = this.vd3_1;
            this.hb_1 = 1;
            var it = this.xd3_1;
            suspendResult = this.wd3_1.t13(this.ud3_1(it), this);
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
  protoOf(mapState$o$collect$slambda).p1d = function (value, completion) {
    var i = new mapState$o$collect$slambda(this.td3_1, this.ud3_1, completion);
    i.vd3_1 = value;
    return i;
  };
  function mapState$o$collect$slambda_0($$this$unsafeFlow, $mapper, resultContinuation) {
    var i = new mapState$o$collect$slambda($$this$unsafeFlow, $mapper, resultContinuation);
    var l = function (value, $completion) {
      return i.o1d(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gd4_1 = _this__u8e3s4;
    this.hd4_1 = collector;
  }
  protoOf($collectCOROUTINE$0).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.id4_1 = this.hd4_1;
            this.hb_1 = 1;
            var tmp_1 = mapState$o$collect$slambda_0(this.id4_1, this.gd4_1.kd4_1, null);
            suspendResult = this.gd4_1.jd4_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  function _no_name_provided__qut3iv($this, $mapper) {
    this.jd4_1 = $this;
    this.kd4_1 = $mapper;
  }
  protoOf(_no_name_provided__qut3iv).a1o = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv).g13 = function (collector, $completion) {
    return this.a1o(collector, $completion);
  };
  function withPrevious$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$slambda).vd4 = function (previous, current, $completion) {
    var tmp = this.wd4(previous, current, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(withPrevious$slambda).i1k = function (p1, p2, $completion) {
    var tmp = p1 instanceof CompareValues ? p1 : THROW_CCE();
    return this.vd4(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(withPrevious$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          return this.td4_1.jd3(this.ud4_1);
        } else if (tmp === 1) {
          throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(withPrevious$slambda).wd4 = function (previous, current, completion) {
    var i = new withPrevious$slambda(completion);
    i.td4_1 = previous;
    i.ud4_1 = current;
    return i;
  };
  function withPrevious$slambda_0(resultContinuation) {
    var i = new withPrevious$slambda(resultContinuation);
    var l = function (previous, current, $completion) {
      return i.vd4(previous, current, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.xd4_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).t13 = function (value, $completion) {
    return this.xd4_1(value, $completion);
  };
  function withPrevious$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.gd5_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$o$collect$slambda).ld5 = function (value, $completion) {
    var tmp = this.md5(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(withPrevious$o$collect$slambda).fc = function (p1, $completion) {
    return this.ld5(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(withPrevious$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 5;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.jd5_1 = this.gd5_1;
            var tmp_1 = this;
            tmp_1.kd5_1 = this.hd5_1;
            if (this.kd5_1.id3()) {
              this.hb_1 = 3;
              suspendResult = this.jd5_1.t13(this.kd5_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 2;
              continue $sm;
            }

          case 2:
            if (false) {
              this.hb_1 = 1;
              continue $sm;
            }

            this.hb_1 = 4;
            continue $sm;
          case 3:
            this.id5_1 = suspendResult;
            this.hb_1 = 4;
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
  protoOf(withPrevious$o$collect$slambda).md5 = function (value, completion) {
    var i = new withPrevious$o$collect$slambda(this.gd5_1, completion);
    i.hd5_1 = value;
    return i;
  };
  function withPrevious$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new withPrevious$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.ld5(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vd5_1 = _this__u8e3s4;
    this.wd5_1 = collector;
  }
  protoOf($collectCOROUTINE$1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.xd5_1 = this.wd5_1;
            this.hb_1 = 1;
            var tmp_1 = withPrevious$o$collect$slambda_0(this.xd5_1, null);
            suspendResult = this.vd5_1.yd5_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  function _no_name_provided__qut3iv_0($this) {
    this.yd5_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_0).zd5 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_0).g13 = function (collector, $completion) {
    return this.zd5(collector, $completion);
  };
  function Element(interactionTarget, id) {
    id = id === VOID ? UUID_instance.bd6() : id;
    this.cd6_1 = interactionTarget;
    this.dd6_1 = id;
    this.ed6_1 = 0;
  }
  protoOf(Element).toString = function () {
    return 'Element(interactionTarget=' + this.cd6_1 + ', id=' + this.dd6_1 + ')';
  };
  protoOf(Element).hashCode = function () {
    var result = this.cd6_1 == null ? 0 : hashCode(this.cd6_1);
    result = imul(result, 31) + getStringHashCode(this.dd6_1) | 0;
    return result;
  };
  protoOf(Element).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Element))
      return false;
    var tmp0_other_with_cast = other instanceof Element ? other : THROW_CCE();
    if (!equals(this.cd6_1, tmp0_other_with_cast.cd6_1))
      return false;
    if (!(this.dd6_1 === tmp0_other_with_cast.dd6_1))
      return false;
    return true;
  };
  function asElement(_this__u8e3s4) {
    return new Element(_this__u8e3s4);
  }
  function sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0(function_0) {
    this.fd6_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0).gd6 = function (position, boundingBox) {
    return this.fd6_1(new Offset(position), boundingBox);
  };
  function sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0(function_0) {
    this.hd6_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0).gd6 = function (position, boundingBox) {
    return this.hd6_1(new Offset(position), boundingBox);
  };
  function GestureValidator$Companion$defaultValidator$lambda(position, boundingBox) {
    return boundingBox.v39(position.c39_1);
  }
  function GestureValidator$Companion$permissiveValidator$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return true;
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = GestureValidator$Companion$defaultValidator$lambda;
    tmp.id6_1 = new sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = GestureValidator$Companion$permissiveValidator$lambda;
    tmp_1.jd6_1 = new sam$com_bumble_appyx_interactions_core_gesture_GestureValidator$0_0(tmp_2);
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
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
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function detectDragGesturesOrCancellation$lambda(it) {
    return Unit_instance;
  }
  function detectDragGesturesOrCancellation$lambda_0() {
    return Unit_instance;
  }
  function detectDragGesturesOrCancellation$slambda$lambda($overSlop) {
    return function (change, over) {
      change.z6l();
      $overSlop._v = over;
      return Unit_instance;
    };
  }
  function detectDragGesturesOrCancellation$slambda$lambda_0($onDrag) {
    return function (it) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.interactions.core.gesture.detectDragGesturesOrCancellation.<anonymous>.<anonymous>.<anonymous>' call
      var $this$run = $onDrag(it, new Offset(positionChange(it)));
      it.z6l();
      return $this$run;
    };
  }
  function detectDragGesturesOrCancellation$slambda($onDragStart, $onDrag, $onDragEnd, resultContinuation) {
    this.ed7_1 = $onDragStart;
    this.fd7_1 = $onDrag;
    this.gd7_1 = $onDragEnd;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectDragGesturesOrCancellation$slambda).k6n = function ($this$awaitEachGesture, $completion) {
    var tmp = this.l6n($this$awaitEachGesture, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(detectDragGesturesOrCancellation$slambda).fc = function (p1, $completion) {
    return this.k6n((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectDragGesturesOrCancellation$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 8;
            this.hb_1 = 1;
            suspendResult = awaitFirstDown(this.hd7_1, false, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.id7_1 = suspendResult;
            this.kd7_1 = {_v: new Offset(Companion_getInstance_0().z38_1)};
            this.hb_1 = 2;
            continue $sm;
          case 2:
            this.hb_1 = 3;
            suspendResult = awaitTouchSlopOrCancellation(this.hd7_1, this.id7_1.c6k_1, detectDragGesturesOrCancellation$slambda$lambda(this.kd7_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.jd7_1 = suspendResult;
            if (!(this.jd7_1 == null) ? !this.jd7_1.v6l() : false) {
              this.hb_1 = 2;
              continue $sm;
            }

            this.hb_1 = 4;
            continue $sm;
          case 4:
            if (!(this.jd7_1 == null)) {
              this.ed7_1(new Offset(this.jd7_1.e6k_1));
              this.fd7_1(this.jd7_1, this.kd7_1._v);
              this.hb_1 = 5;
              var tmp_0 = this.jd7_1.c6k_1;
              suspendResult = drag(this.hd7_1, tmp_0, detectDragGesturesOrCancellation$slambda$lambda_0(this.fd7_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 7;
              continue $sm;
            }

          case 5:
            if (suspendResult) {
              this.gd7_1();
              this.hb_1 = 6;
              continue $sm;
            } else {
              this.hb_1 = 6;
              continue $sm;
            }

          case 6:
            this.hb_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 8) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(detectDragGesturesOrCancellation$slambda).l6n = function ($this$awaitEachGesture, completion) {
    var i = new detectDragGesturesOrCancellation$slambda(this.ed7_1, this.fd7_1, this.gd7_1, completion);
    i.hd7_1 = $this$awaitEachGesture;
    return i;
  };
  function detectDragGesturesOrCancellation$slambda_0($onDragStart, $onDrag, $onDragEnd, resultContinuation) {
    var i = new detectDragGesturesOrCancellation$slambda($onDragStart, $onDrag, $onDragEnd, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.k6n($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $dragCOROUTINE$2(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sd6_1 = _this__u8e3s4;
    this.td6_1 = pointerId;
    this.ud6_1 = onDrag;
  }
  protoOf($dragCOROUTINE$2).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.vd6_1 = this.td6_1;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.hb_1 = 4;
              continue $sm;
            }

            this.hb_1 = 2;
            suspendResult = awaitDragOrCancellation(this.sd6_1, this.vd6_1, this);
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

            if (!this.ud6_1(change)) {
              return false;
            }

            this.vd6_1 = change.c6k_1;
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
  function Elements_init_$Init$(onScreen, offScreen, $this) {
    onScreen = onScreen === VOID ? emptySet() : onScreen;
    offScreen = offScreen === VOID ? emptySet() : offScreen;
    Elements.call($this, onScreen, offScreen, plus(onScreen, offScreen));
    return $this;
  }
  function Elements_init_$Create$(onScreen, offScreen) {
    return Elements_init_$Init$(onScreen, offScreen, objectCreate(protoOf(Elements)));
  }
  function Elements(onScreen, offScreen, all) {
    this.ld7_1 = onScreen;
    this.md7_1 = offScreen;
    this.nd7_1 = all;
    this.od7_1 = 0;
  }
  function BaseAppyxComponent$slambda$slambda(this$0, resultContinuation) {
    this.xd7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$slambda$slambda).zd7 = function (it, $completion) {
    var tmp = this.ad8(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$slambda$slambda).fc = function (p1, $completion) {
    return this.zd7((!(p1 == null) ? isInterface(p1, Set) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.xd7_1.bd9_1.t13(Elements_init_$Create$(VOID, this.yd7_1), this);
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
  protoOf(BaseAppyxComponent$slambda$slambda).ad8 = function (it, completion) {
    var i = new BaseAppyxComponent$slambda$slambda(this.xd7_1, completion);
    i.yd7_1 = it;
    return i;
  };
  function BaseAppyxComponent$slambda$slambda_0(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$slambda$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.zd7(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda(this$0, resultContinuation) {
    this.od9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).lc0 = function (it, $completion) {
    var tmp = this.mc0(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).fc = function (p1, $completion) {
    return this.lc0((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          if (!this.pd9_1) {
            AppyxLogger_getInstance().dd3('AppyxComponent', 'Finished animating');
            onAnimationsFinished(this.od9_1);
          } else {
            onAnimationsStarted(this.od9_1);
          }
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda).mc0 = function (it, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda(this.od9_1, completion);
    i.pd9_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda_0(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.lc0(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1(this$0, resultContinuation) {
    this.yd9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).ada = function (it, $completion) {
    var tmp = this.bda(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).fc = function (p1, $completion) {
    return this.ada(p1 instanceof Element ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          AppyxLogger_getInstance().dd3('AppyxComponent', '' + this.zd9_1 + ' onAnimation finished');
          this.yd9_1.cd8_1.cda(this.zd9_1);
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1).bda = function (it, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1(this.yd9_1, completion);
    i.zd9_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda$slambda_2(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.ada(it, $completion);
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
    this.lda_1 = $elementUiModels;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).oda = function ($this$combineInternal, it, $completion) {
    var tmp = this.pda($this$combineInternal, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.oda(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var visibilityValues = this.nda_1;
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
              var element = this.lda_1.i1(tmp1).qda_1;
              if (item) {
                onScreen.s(element);
              } else {
                offScreen.s(element);
              }
            }

            suspendResult = this.mda_1.t13(to(Elements_init_$Create$(onScreen, offScreen), this.lda_1), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda).pda = function ($this$combineInternal, it, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda(this.lda_1, completion);
    i.mda_1 = $this$combineInternal;
    i.nda_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda_0($elementUiModels, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda($elementUiModels, resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.oda($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fdb_1 = _this__u8e3s4;
    this.gdb_1 = collector;
  }
  protoOf($collectCOROUTINE$3).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.hdb_1 = this.gdb_1;
            this.hb_1 = 1;
            var tmp_1 = BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$lambda(this.fdb_1.idb_1);
            suspendResult = combineInternal(this.hdb_1, this.fdb_1.idb_1, tmp_1, BaseAppyxComponent$observeVisualisation$slambda$slambda$o$collect$slambda_0(this.fdb_1.jdb_1, null), this);
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
  function _no_name_provided__qut3iv_1($flowArray, $elementUiModels) {
    this.idb_1 = $flowArray;
    this.jdb_1 = $elementUiModels;
  }
  protoOf(_no_name_provided__qut3iv_1).kdb = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_1).g13 = function (collector, $completion) {
    return this.kdb(collector, $completion);
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda($visualisation, resultContinuation) {
    this.tdb_1 = $visualisation;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).wdb = function ($this$transformLatest, it, $completion) {
    var tmp = this.xdb($this$transformLatest, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.wdb(tmp, p2 instanceof Output ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var it = this.vdb_1;
            suspendResult = emitAll(this.udb_1, this.tdb_1.ydb(it), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda).xdb = function ($this$transformLatest, it, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda(this.tdb_1, completion);
    i.udb_1 = $this$transformLatest;
    i.vdb_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_0($visualisation, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda($visualisation, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.wdb($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).jdc = function ($this$transformLatest, it, $completion) {
    var tmp = this.kdc($this$transformLatest, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.jdc(tmp, (!(p2 == null) ? isInterface(p2, List) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var elementUiModels = this.idc_1;
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(elementUiModels, 10));
            var tmp0_iterator = elementUiModels.v();
            while (tmp0_iterator.w()) {
              var item = tmp0_iterator.y();
              destination.s(item.rda_1);
            }

            var visibilityFlows = destination;
            var this_0 = toList(visibilityFlows);
            var flowArray = copyToArray(this_0);
            suspendResult = emitAll(this.hdc_1, new _no_name_provided__qut3iv_1(flowArray, elementUiModels), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_1).kdc = function ($this$transformLatest, it, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_1(completion);
    i.hdc_1 = $this$transformLatest;
    i.idc_1 = it;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_2(resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_1(resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.jdc($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_3(this$0, resultContinuation) {
    this.tdc_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).xdc = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.ydc(_name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).fc = function (p1, $completion) {
    return this.xdc(p1 instanceof Pair ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.vdc_1 = this.udc_1.ae();
            this.wdc_1 = this.udc_1.be();
            this.hb_1 = 1;
            suspendResult = this.tdc_1.bd9_1.t13(this.vdc_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hb_1 = 2;
            suspendResult = this.tdc_1.yd8_1.t13(this.wdc_1, this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda$slambda_3).ydc = function (_name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_3(this.tdc_1, completion);
    i.udc_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda$slambda_4(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda$slambda_3(this$0, resultContinuation);
    var l = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.xdc(_name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function observeAnimationChanges($this, visualisation) {
    var tmp0_safe_receiver = $this.od8_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wi();
    }
    var tmp = $this;
    tmp.od8_1 = launch($this.bd8_1, VOID, VOID, BaseAppyxComponent$observeAnimationChanges$slambda_0(visualisation, $this, null));
    var tmp1_safe_receiver = $this.pd8_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.wi();
    }
    var tmp_0 = $this;
    tmp_0.pd8_1 = launch($this.bd8_1, VOID, VOID, BaseAppyxComponent$observeAnimationChanges$slambda_2(visualisation, $this, null));
  }
  function createAnimatedInputSource($this, scope) {
    $this.vd8_1 = new AnimatedProgressController($this.cd8_1, scope, $this.fd8_1, $this.id8_1);
  }
  function createdDebugInputSource($this) {
    $this.wd8_1 = new DebugProgressInputSource($this.cd8_1);
  }
  function onVisualisationReady($this, visualisation) {
    visualisation.zdc($this.rd8_1);
    observeAnimationChanges($this, visualisation);
    observeVisualisation($this, visualisation);
  }
  function observeVisualisation($this, visualisation) {
    $this.ad9_1.wi();
    var tmp0_safe_receiver = $this.ld8_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wi();
    }
    var tmp = $this;
    tmp.ld8_1 = launch($this.bd8_1, VOID, VOID, BaseAppyxComponent$observeVisualisation$slambda_0($this, visualisation, null));
  }
  function onAnimationsStarted($this) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = $this.sd8_1;
      while (true) {
        var prevValue = this_0.u2();
        // Inline function 'com.bumble.appyx.interactions.core.model.BaseAppyxComponent.onAnimationsStarted.<anonymous>' call
        var nextValue = true;
        if (this_0.i1a(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function onAnimationsFinished($this) {
    $this.cd8_1.add();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = $this.sd8_1;
      while (true) {
        var prevValue = this_0.u2();
        // Inline function 'com.bumble.appyx.interactions.core.model.BaseAppyxComponent.onAnimationsFinished.<anonymous>' call
        var nextValue = false;
        if (this_0.i1a(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function settle($this, gestureSettleConfig) {
    if ($this.kd8_1) {
      var tmp0_safe_receiver = $this.wd8_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.pdd();
      }
    } else {
      var tmp1_safe_receiver = $this.vd8_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.ldd(gestureSettleConfig.bdd_1, gestureSettleConfig.cdd_1, gestureSettleConfig.ddd_1);
      }
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.qdd_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).t13 = function (value, $completion) {
    return this.qdd_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.rdd_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).t13 = function (value, $completion) {
    return this.rdd_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.sdd_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).t13 = function (value, $completion) {
    return this.sdd_1(value, $completion);
  };
  function BaseAppyxComponent$_init_$lambda_o8w1tv(it) {
    return new Noop_1();
  }
  function BaseAppyxComponent$drag$lambda(this$0) {
    return function () {
      return this$0.nd8_1;
    };
  }
  function BaseAppyxComponent$slambda(this$0, resultContinuation) {
    this.bde_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = this.bde_1.cd8_1.dde();
            var tmp_1 = BaseAppyxComponent$slambda$slambda_0(this.bde_1, null);
            suspendResult = tmp_0.t17(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  protoOf(BaseAppyxComponent$slambda).w1b = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$slambda(this.bde_1, completion);
    i.cde_1 = $this$launch;
    return i;
  };
  function BaseAppyxComponent$slambda_0(this$0, resultContinuation) {
    var i = new BaseAppyxComponent$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda($visualisation, this$0, resultContinuation) {
    this.mde_1 = $visualisation;
    this.nde_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = this.mde_1.pde();
            var tmp_1 = BaseAppyxComponent$observeAnimationChanges$slambda$slambda_0(this.nde_1, null);
            suspendResult = tmp_0.t17(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda).w1b = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda(this.mde_1, this.nde_1, completion);
    i.ode_1 = $this$launch;
    return i;
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda_0($visualisation, this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda($visualisation, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeAnimationChanges$slambda_1($visualisation, this$0, resultContinuation) {
    this.yde_1 = $visualisation;
    this.zde_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = this.yde_1.bdf();
            var tmp_1 = BaseAppyxComponent$observeAnimationChanges$slambda$slambda_2(this.zde_1, null);
            suspendResult = tmp_0.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_1), this);
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
  protoOf(BaseAppyxComponent$observeAnimationChanges$slambda_1).w1b = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda_1(this.yde_1, this.zde_1, completion);
    i.adf_1 = $this$launch;
    return i;
  };
  function BaseAppyxComponent$observeAnimationChanges$slambda_2($visualisation, this$0, resultContinuation) {
    var i = new BaseAppyxComponent$observeAnimationChanges$slambda_1($visualisation, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent$observeVisualisation$slambda(this$0, $visualisation, resultContinuation) {
    this.kdf_1 = this$0;
    this.ldf_1 = $visualisation;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var this_0 = this.kdf_1.cd8_1.ndf();
            var this_1 = transformLatest(this_0, BaseAppyxComponent$observeVisualisation$slambda$slambda_0(this.ldf_1, null));
            var tmp_0 = transformLatest(this_1, BaseAppyxComponent$observeVisualisation$slambda$slambda_2(null));
            var tmp_1 = BaseAppyxComponent$observeVisualisation$slambda$slambda_4(this.kdf_1, null);
            suspendResult = tmp_0.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_1), this);
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
  protoOf(BaseAppyxComponent$observeVisualisation$slambda).w1b = function ($this$launch, completion) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda(this.kdf_1, this.ldf_1, completion);
    i.mdf_1 = $this$launch;
    return i;
  };
  function BaseAppyxComponent$observeVisualisation$slambda_0(this$0, $visualisation, resultContinuation) {
    var i = new BaseAppyxComponent$observeVisualisation$slambda(this$0, $visualisation, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseAppyxComponent(scope, model, visualisation, gestureFactory, defaultAnimationSpec, gestureSettleConfig, backPressStrategy, animateSettle, disableAnimations, isDebug) {
    scope = scope === VOID ? CoroutineScope_0(SupervisorJob().ef(Dispatchers_getInstance().lp())) : scope;
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
    this.bd8_1 = scope;
    this.cd8_1 = model;
    this.dd8_1 = visualisation;
    this.ed8_1 = gestureFactory;
    this.fd8_1 = defaultAnimationSpec;
    this.gd8_1 = gestureSettleConfig;
    this.hd8_1 = backPressStrategy;
    this.id8_1 = animateSettle;
    this.jd8_1 = disableAnimations;
    this.kd8_1 = isDebug;
    this.hd8_1.odf(this, this.cd8_1);
    this.ld8_1 = null;
    this.md8_1 = null;
    this.nd8_1 = this.ed8_1(Companion_getInstance_10().pdf_1);
    this.od8_1 = null;
    this.pd8_1 = null;
    this.qd8_1 = null;
    this.rd8_1 = Companion_getInstance_10().pdf_1;
    this.sd8_1 = MutableStateFlow(false);
    this.td8_1 = this.sd8_1;
    this.ud8_1 = new InstantProgressController(this.cd8_1);
    this.vd8_1 = null;
    this.wd8_1 = null;
    var tmp_0 = this;
    tmp_0.xd8_1 = new DragProgressController(this.cd8_1, BaseAppyxComponent$drag$lambda(this), this.fd8_1);
    this.yd8_1 = MutableStateFlow(emptyList());
    this.zd8_1 = this.yd8_1;
    this.bd9_1 = MutableStateFlow(Elements_init_$Create$(VOID, this.cd8_1.dde().u2()));
    this.cd9_1 = this.bd9_1;
    var tmp_1 = this;
    tmp_1.ad9_1 = launch(this.bd8_1, VOID, VOID, BaseAppyxComponent$slambda_0(this, null));
    this.dd9_1 = null;
    this.ed9_1 = false;
    this.fd9_1 = 0;
  }
  protoOf(BaseAppyxComponent).dde = function () {
    return this.cd9_1;
  };
  protoOf(BaseAppyxComponent).qdf = function (scope) {
    this.dd9_1 = scope;
    createAnimatedInputSource(this, scope);
    createdDebugInputSource(this);
  };
  protoOf(BaseAppyxComponent).rdf = function () {
    if (this.kd8_1) {
      var tmp0_safe_receiver = this.wd8_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.sdf();
      }
    } else {
      var tmp1_safe_receiver = this.vd8_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.sdf();
      }
    }
    var tmp2_safe_receiver = this.dd9_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      cancel(tmp2_safe_receiver);
    }
  };
  protoOf(BaseAppyxComponent).tdf = function (uiContext) {
    if (!equals(this.qd8_1, uiContext)) {
      this.qd8_1 = uiContext;
      AppyxLogger_getInstance().dd3('AppyxComponent', '' + getKClassFromExpression(this).d7() + ' \u2013 UiContext update: ' + uiContext);
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = this.dd8_1(uiContext);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.interactions.core.model.BaseAppyxComponent.updateContext.<anonymous>' call
      onVisualisationReady(this, this_0);
      tmp.md8_1 = this_0;
    }
  };
  protoOf(BaseAppyxComponent).zdc = function (transitionBounds) {
    if (!transitionBounds.equals(this.rd8_1)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      AppyxLogger_getInstance().dd3('AppyxComponent', '' + getKClassFromExpression(transitionBounds).d7() + ' \u2013 Bounds update: ' + transitionBounds.vdf_1 + 'x' + transitionBounds.wdf_1);
      this.rd8_1 = transitionBounds;
      this.nd8_1 = this.ed8_1(transitionBounds);
      var tmp0_safe_receiver = this.md8_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.zdc(transitionBounds);
      }
    }
  };
  protoOf(BaseAppyxComponent).edg = function (operation, animationSpec) {
    var tmp;
    if (operation.fdg().equals(Mode_IMMEDIATE_getInstance())) {
      tmp = animationSpec instanceof SpringSpec;
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp0_safe_receiver = this.md8_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.gdg(animationSpec);
      }
    }
    var animatedSource = this.vd8_1;
    var debugSource = this.wd8_1;
    if (this.kd8_1 ? !(debugSource == null) : false) {
      debugSource.kdg(operation);
    } else if ((animatedSource == null ? true : get_DisableAnimations()) ? true : this.jd8_1) {
      this.ud8_1.kdg(operation);
    } else {
      animatedSource.hdg(operation, animationSpec == null ? this.fd8_1 : animationSpec);
    }
  };
  protoOf(BaseAppyxComponent).ldg = function (position) {
    this.xd8_1.ldg(position);
  };
  protoOf(BaseAppyxComponent).rdg = function (dragAmount, density) {
    if (!this.sd8_1.u2()) {
      this.xd8_1.rdg(dragAmount, density);
    }
  };
  protoOf(BaseAppyxComponent).sdg = function () {
    if (!this.sd8_1.u2()) {
      this.xd8_1.sdg();
      settle(this, this.gd8_1);
    }
  };
  protoOf(BaseAppyxComponent).m1x = function () {
    if (this.xd8_1.tdg()) {
      this.sdg();
    }
  };
  protoOf(BaseAppyxComponent).y7r = function () {
    var tmp0_safe_receiver = this.ld8_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wi();
    }
    this.ad9_1.wi();
    cancel(this.bd8_1);
  };
  protoOf(BaseAppyxComponent).udg = function () {
    return this.hd8_1.udg();
  };
  protoOf(BaseAppyxComponent).vdg = function () {
    return this.hd8_1.wdg();
  };
  protoOf(BaseAppyxComponent).xdg = function (state) {
    this.cd8_1.xdg(state);
  };
  function removedElements(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = withPrevious(_this__u8e3s4.dde());
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_2(this_0);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.ydg_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).t13 = function (value, $completion) {
    return this.ydg_1(value, $completion);
  };
  function removedElements$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.hdh_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(removedElements$o$collect$slambda).ldh = function (value, $completion) {
    var tmp = this.mdh(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(removedElements$o$collect$slambda).fc = function (p1, $completion) {
    return this.ldh(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(removedElements$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.jdh_1 = this.hdh_1;
            var tmp_1 = this;
            tmp_1.kdh_1 = this.idh_1;
            this.hb_1 = 1;
            var values = this.kdh_1;
            var tmp0_safe_receiver = values.fd3_1;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nd7_1;
            var previousKeys = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
            var currentKeys = values.z1v().nd7_1;
            var destination = ArrayList_init_$Create$_0();
            var tmp0_iterator = previousKeys.v();
            while (tmp0_iterator.w()) {
              var element = tmp0_iterator.y();
              if (!currentKeys.r(element)) {
                destination.s(element);
              }
            }

            suspendResult = this.jdh_1.t13(destination, this);
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
  protoOf(removedElements$o$collect$slambda).mdh = function (value, completion) {
    var i = new removedElements$o$collect$slambda(this.hdh_1, completion);
    i.idh_1 = value;
    return i;
  };
  function removedElements$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new removedElements$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.ldh(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$4(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vdh_1 = _this__u8e3s4;
    this.wdh_1 = collector;
  }
  protoOf($collectCOROUTINE$4).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.xdh_1 = this.wdh_1;
            this.hb_1 = 1;
            var tmp_1 = removedElements$o$collect$slambda_0(this.xdh_1, null);
            suspendResult = this.vdh_1.ydh_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_1), this);
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
  function _no_name_provided__qut3iv_2($this) {
    this.ydh_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_2).zdh = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$4(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_2).g13 = function (collector, $completion) {
    return this.zdh(collector, $completion);
  };
  function BaseBackPressHandlerStrategy() {
    this.cdi_1 = 8;
  }
  protoOf(BaseBackPressHandlerStrategy).ddi = function () {
    var tmp = this.adi_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('appyxComponent');
    }
  };
  protoOf(BaseBackPressHandlerStrategy).edi = function () {
    var tmp = this.bdi_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('transitionModel');
    }
  };
  protoOf(BaseBackPressHandlerStrategy).odf = function (appyxComponent, transitionModel) {
    this.adi_1 = appyxComponent;
    this.bdi_1 = transitionModel;
  };
  function DontHandleBackPress() {
    BaseBackPressHandlerStrategy.call(this);
    this.idi_1 = MutableStateFlow(false);
    this.jdi_1 = 8;
  }
  protoOf(DontHandleBackPress).wdg = function () {
    return this.idi_1;
  };
  protoOf(DontHandleBackPress).udg = function () {
    return false;
  };
  function AnimatedProgressController$animateModel$slambda$lambda(this$0) {
    return function ($this$animateTo) {
      this$0.fdd_1.kdi($this$animateTo.u2());
      return Unit_instance;
    };
  }
  function animateModel($this, from, target, animationSpec, cancelVelocity, onAnimationFinished) {
    var velocity = $this.jdd_1.z8o();
    var tmp = Dispatchers_getInstance().lp().bu();
    launch($this.gdd_1, tmp, VOID, AnimatedProgressController$animateModel$slambda_0($this, from, target, animationSpec, cancelVelocity, velocity, onAnimationFinished, null));
  }
  function Companion_0() {
    this.ldi_1 = 'AnimatedProgressController';
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function AnimatedProgressController$operation$lambda($currentState) {
    return function () {
      return $currentState.udi();
    };
  }
  function AnimatedProgressController$operation$lambda_0($currentState) {
    return function () {
      return $currentState.vdi();
    };
  }
  function AnimatedProgressController$operation$lambda_1(this$0) {
    return function () {
      this$0.fdd_1.wdi(SettleDirection_COMPLETE_getInstance(), this$0.idd_1);
      return Unit_instance;
    };
  }
  function AnimatedProgressController$settle$lambda($currentState) {
    return function () {
      return $currentState.udi();
    };
  }
  function AnimatedProgressController$settle$lambda_0($targetValue) {
    return function () {
      return $targetValue;
    };
  }
  function AnimatedProgressController$settle$lambda_1(this$0, $direction) {
    return function () {
      this$0.fdd_1.wdi($direction, this$0.idd_1);
      return Unit_instance;
    };
  }
  function AnimatedProgressController$animateModel$slambda(this$0, $from, $target, $animationSpec, $cancelVelocity, $velocity, $onAnimationFinished, resultContinuation) {
    this.fdj_1 = this$0;
    this.gdj_1 = $from;
    this.hdj_1 = $target;
    this.idj_1 = $animationSpec;
    this.jdj_1 = $cancelVelocity;
    this.kdj_1 = $velocity;
    this.ldj_1 = $onAnimationFinished;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedProgressController$animateModel$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(AnimatedProgressController$animateModel$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedProgressController$animateModel$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.hb_1 = 1;
            suspendResult = this.fdj_1.jdd_1.d8p(this.gdj_1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hb_1 = 2;
            var tmp_0 = this.hdj_1();
            var tmp_1 = this.jdj_1 ? 0.0 : this.kdj_1;
            suspendResult = this.fdj_1.jdd_1.b8p(tmp_0, this.idj_1, tmp_1, AnimatedProgressController$animateModel$slambda$lambda(this.fdj_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ldj_1();
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
  protoOf(AnimatedProgressController$animateModel$slambda).w1b = function ($this$launch, completion) {
    var i = new AnimatedProgressController$animateModel$slambda(this.fdj_1, this.gdj_1, this.hdj_1, this.idj_1, this.jdj_1, this.kdj_1, this.ldj_1, completion);
    i.mdj_1 = $this$launch;
    return i;
  };
  function AnimatedProgressController$animateModel$slambda_0(this$0, $from, $target, $animationSpec, $cancelVelocity, $velocity, $onAnimationFinished, resultContinuation) {
    var i = new AnimatedProgressController$animateModel$slambda(this$0, $from, $target, $animationSpec, $cancelVelocity, $velocity, $onAnimationFinished, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedProgressController$stopModel$slambda(this$0, $currentState, resultContinuation) {
    this.vdj_1 = this$0;
    this.wdj_1 = $currentState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedProgressController$stopModel$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(AnimatedProgressController$stopModel$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedProgressController$stopModel$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.vdj_1.jdd_1.d8p(this.wdj_1.udi(), this);
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
  protoOf(AnimatedProgressController$stopModel$slambda).w1b = function ($this$launch, completion) {
    var i = new AnimatedProgressController$stopModel$slambda(this.vdj_1, this.wdj_1, completion);
    i.xdj_1 = $this$launch;
    return i;
  };
  function AnimatedProgressController$stopModel$slambda_0(this$0, $currentState, resultContinuation) {
    var i = new AnimatedProgressController$stopModel$slambda(this$0, $currentState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedProgressController(model, coroutineScope, defaultAnimationSpec, animateSettle) {
    defaultAnimationSpec = defaultAnimationSpec === VOID ? spring() : defaultAnimationSpec;
    animateSettle = animateSettle === VOID ? false : animateSettle;
    this.fdd_1 = model;
    this.gdd_1 = coroutineScope;
    this.hdd_1 = defaultAnimationSpec;
    this.idd_1 = animateSettle;
    this.jdd_1 = Animatable(0.0);
    this.kdd_1 = 0;
  }
  protoOf(AnimatedProgressController).hdg = function (operation, animationSpec) {
    this.fdd_1.ydj(operation);
    var currentState = this.fdd_1.ndf().u2();
    if (currentState instanceof Keyframes) {
      var tmp = AnimatedProgressController$operation$lambda(currentState);
      var tmp_0 = AnimatedProgressController$operation$lambda_0(currentState);
      animateModel(this, tmp, tmp_0, animationSpec, false, AnimatedProgressController$operation$lambda_1(this));
    }
  };
  protoOf(AnimatedProgressController).ldd = function (completionThreshold, completeGestureSpec, revertGestureSpec) {
    var currentState = this.fdd_1.ndf().u2();
    if (currentState instanceof Keyframes) {
      var currentProgress = currentState.udi();
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
      AppyxLogger_getInstance().dd3('AnimatedProgressController', 'Settle ' + currentState.udi() + ' to: ' + targetValue);
      var tmp_0 = AnimatedProgressController$settle$lambda(currentState);
      var tmp_1 = AnimatedProgressController$settle$lambda_0(targetValue);
      animateModel(this, tmp_0, tmp_1, animationSpec, true, AnimatedProgressController$settle$lambda_1(this, direction));
    }
  };
  protoOf(AnimatedProgressController).sdf = function () {
    var currentState = this.fdd_1.ndf().u2();
    if (currentState instanceof Keyframes) {
      var tmp = Dispatchers_getInstance().lp();
      launch(this.gdd_1, tmp, VOID, AnimatedProgressController$stopModel$slambda_0(this, currentState, null));
    }
  };
  function Companion_1() {
    this.zdj_1 = 'DebugProgressInputSource';
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function DebugProgressInputSource(transitionModel) {
    this.mdd_1 = transitionModel;
    this.ndd_1 = 1.0;
    this.odd_1 = 8;
  }
  protoOf(DebugProgressInputSource).kdg = function (operation) {
    this.mdd_1.adk(operation, Mode_KEYFRAME_getInstance());
  };
  protoOf(DebugProgressInputSource).pdd = function () {
  };
  protoOf(DebugProgressInputSource).sdf = function () {
  };
  function _set__gestureFactory__ww9rdx($this, value) {
    $this.pdg_1 = value;
    if (value == null) {
      $this.qdg_1 = null;
    }
  }
  function consumeDrag($this, dragAmount) {
    var currentState = $this.mdg_1.ndf().u2();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Offset__isValid_impl_z7krde(dragAmount)) {
      // Inline function 'com.bumble.appyx.interactions.core.model.progress.DragProgressController.consumeDrag.<anonymous>' call
      var message = 'dragAmount is NaN';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (Offset__getDistanceSquared_impl_97mhi6(dragAmount) === 0.0) {
      return Unit_instance;
    }
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if ($this.pdg_1 == null) {
        // Inline function 'com.bumble.appyx.interactions.core.model.progress.DragProgressController.consumeDrag.<anonymous>' call
        var message_0 = 'This should have been set already in this class';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        break $l$block;
      }
    }
    if ($this.qdg_1 == null) {
      $this.qdg_1 = ensureNotNull($this.pdg_1)(new Offset(dragAmount));
    }
    // Inline function 'kotlin.requireNotNull' call
    var value = $this.qdg_1;
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
    var operation = ensureNotNull($this.qdg_1).bdk_1;
    operation.gdk(Mode_KEYFRAME_getInstance());
    var deltaProgress = ensureNotNull($this.qdg_1).cdk_1(new Offset(dragAmount));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isNaN_0(deltaProgress)) {
      // Inline function 'com.bumble.appyx.interactions.core.model.progress.DragProgressController.consumeDrag.<anonymous>' call
      var message_2 = 'deltaProgress is NaN! \u2013 dragAmount: ' + new Offset(dragAmount) + ', gesture: ' + $this.qdg_1 + ', operation: ' + operation;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    var tmp;
    if (currentState instanceof Keyframes) {
      tmp = currentState.udi();
    } else {
      tmp = 0.0;
    }
    var currentProgress = tmp;
    var totalTarget = currentProgress + deltaProgress;
    if (ensureNotNull($this.qdg_1).edk_1 == null) {
      if ($this.mdg_1.hdk(operation)) {
        $this.mdg_1.ydj(operation);
        ensureNotNull($this.qdg_1).edk_1 = currentProgress;
        AppyxLogger_getInstance().dd3('DragProgressController', 'Gesture operation applied: ' + operation);
      } else {
        AppyxLogger_getInstance().dd3('DragProgressController', "Gesture operation wasn't applied, releasing it to re-evaluate");
        $this.qdg_1 = null;
        return Unit_instance;
      }
    }
    var startProgress = ensureNotNull(ensureNotNull($this.qdg_1).edk_1);
    var isGestureContinuous = $this.ndg_1().idk();
    if (totalTarget > startProgress) {
      if (totalTarget < startProgress + 1) {
        $this.mdg_1.kdi(totalTarget);
        var tmp_0;
        if (currentState instanceof Keyframes) {
          tmp_0 = currentState.udi();
        } else {
          tmp_0 = 0.0;
        }
        var currentProgress_0 = tmp_0;
        AppyxLogger_getInstance().dd3('DragProgressController', 'delta applied forward, new progress: ' + currentProgress_0);
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
    $this.mdg_1.kdi(boundary);
    $this.mdg_1.wdi(direction, false);
    var remainder = ensureNotNull($this.qdg_1).ddk_1(new Offset(dragAmount), totalTarget - boundary).c39_1;
    $this.qdg_1 = null;
    AppyxLogger_getInstance().dd3('DragProgressController', '1 ------');
    AppyxLogger_getInstance().dd3('DragProgressController', 'initial offset was: ' + new Offset(dragAmount));
    AppyxLogger_getInstance().dd3('DragProgressController', 'initial deltaProgress was: ' + deltaProgress);
    AppyxLogger_getInstance().dd3('DragProgressController', 'initial target was: ' + totalTarget + ', beyond current segment: ' + boundary);
    AppyxLogger_getInstance().dd3('DragProgressController', 'remainder progress: ' + (totalTarget - boundary));
    AppyxLogger_getInstance().dd3('DragProgressController', 'remainder offset: ' + new Offset(remainder));
    AppyxLogger_getInstance().dd3('DragProgressController', 'going back to start, reevaluate');
    AppyxLogger_getInstance().dd3('DragProgressController', '2 ------');
    return remainder;
  }
  function Companion_2() {
    this.jdk_1 = 'DragProgressController';
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function DragProgressController$onDrag$lambda(this$0, $density) {
    return function (dragAmount) {
      return this$0.ndg_1().mdk(this$0.mdg_1.ndf().u2().ldk(), dragAmount.c39_1, $density);
    };
  }
  function DragProgressController(model, gestureFactory, defaultAnimationSpec) {
    this.mdg_1 = model;
    this.ndg_1 = gestureFactory;
    this.odg_1 = defaultAnimationSpec;
    this.pdg_1 = null;
    this.qdg_1 = null;
  }
  protoOf(DragProgressController).ldg = function (position) {
    this.ndg_1().ldg(position);
  };
  protoOf(DragProgressController).rdg = function (dragAmount, density) {
    if (this.pdg_1 == null) {
      _set__gestureFactory__ww9rdx(this, DragProgressController$onDrag$lambda(this, density));
    }
    consumeDrag(this, dragAmount);
  };
  protoOf(DragProgressController).sdg = function () {
    _set__gestureFactory__ww9rdx(this, null);
  };
  protoOf(DragProgressController).tdg = function () {
    return !(this.pdg_1 == null);
  };
  function InstantProgressController(model) {
    this.idg_1 = model;
    this.jdg_1 = 8;
  }
  protoOf(InstantProgressController).kdg = function (operation) {
    this.idg_1.ydj(operation);
    var currentState = this.idg_1.ndf().u2();
    if (currentState instanceof Keyframes) {
      this.idg_1.kdi(currentState.vdi());
      this.idg_1.wdi(SettleDirection_COMPLETE_getInstance(), false);
    }
  };
  function BaseOperation() {
    this.ndk_1 = 0;
  }
  protoOf(BaseOperation).odk = function (state) {
    var fromState = this.pdk(state);
    var targetState = this.qdk(fromState);
    return new StateTransition(fromState, targetState);
  };
  function BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0($$this$unsafeFlow, this$0, resultContinuation) {
    this.adl_1 = $$this$unsafeFlow;
    this.bdl_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).fdl = function (value, $completion) {
    var tmp = this.gdl(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).fc = function (p1, $completion) {
    return this.fdl(p1 instanceof Output ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.ddl_1 = this.adl_1;
            var tmp_1 = this;
            tmp_1.edl_1 = this.cdl_1;
            this.hb_1 = 1;
            var it = this.edl_1;
            suspendResult = this.ddl_1.t13(this.bdl_1.odl(it.ldk()), this);
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
  protoOf(BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0).gdl = function (value, completion) {
    var i = new BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0(this.adl_1, this.bdl_1, completion);
    i.cdl_1 = value;
    return i;
  };
  function BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0_0($$this$unsafeFlow, this$0, resultContinuation) {
    var i = new BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0($$this$unsafeFlow, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.fdl(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xdl_1 = _this__u8e3s4;
    this.ydl_1 = collector;
  }
  protoOf($collectCOROUTINE$5).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.zdl_1 = this.ydl_1;
            this.hb_1 = 1;
            var tmp_1 = BaseTransitionModel$_get_elements_$o$collect$slambda_ozplj0_0(this.zdl_1, this.xdl_1.bdm_1, null);
            suspendResult = this.xdl_1.adm_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_5(tmp_1), this);
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
  function _get_savedState__u2bo1r($this) {
    var tmp0_safe_receiver = $this.jdl_1;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3($this.idl_1);
    return (!(tmp == null) ? isInterface(tmp, Parcelable) : false) ? tmp : null;
  }
  function _get_state__b8zcm8($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.kdl_1;
    state$factory();
    return this_0.u2();
  }
  function removeDestroyedElements($this) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.getAndUpdate' call
      var this_0 = _get_state__b8zcm8($this);
      while (true) {
        var prevValue = this_0.u2();
        // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.removeDestroyedElements.<anonymous>' call
        var tmp;
        if (prevValue instanceof Update) {
          tmp = prevValue;
        } else {
          if (prevValue instanceof Keyframes) {
            var tmp1_currentTargetState = $this.cdm(prevValue.ldk());
            tmp = new Update(tmp1_currentTargetState, false);
          } else {
            noWhenBranchMatchedException();
          }
        }
        var nextValue = tmp;
        if (this_0.i1a(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function createUpdate($this, operation) {
    var baseLine = _get_state__b8zcm8($this).u2();
    var tmp;
    if (operation.rdk(baseLine.ldk())) {
      var transition = operation.odk(baseLine.ldk());
      var newState = baseLine.ddm(transition);
      updateState($this, newState);
      tmp = true;
    } else {
      AppyxLogger_getInstance().dd3('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on state: ' + baseLine);
      tmp = false;
    }
    return tmp;
  }
  function impose($this, operation) {
    var currentState = _get_state__b8zcm8($this).u2();
    var tmp;
    if (currentState instanceof Keyframes) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.impose.<anonymous>' call
      var past = currentState.edm() > 0 ? currentState.ndi_1.e2(0, currentState.edm() - 1 | 0) : emptyList();
      var remaining = currentState.ndi_1.e2(currentState.edm(), get_lastIndex(currentState.ndi_1) + 1 | 0);
      var tmp_0;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(remaining, Collection)) {
          tmp_1 = remaining.e1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = remaining.v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.impose.<anonymous>.<anonymous>' call
          if (!operation.rdk(element.x8z())) {
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
        var tmp0_iterator_0 = remaining.v();
        while (tmp0_iterator_0.w()) {
          var item = tmp0_iterator_0.y();
          // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.impose.<anonymous>.<anonymous>' call
          var newFrom = operation.odk(item.hdm());
          var newTarget = operation.odk(item.x8z());
          var tmp$ret$2 = item.ldm(new StateTransition(newFrom.jdm_1, newTarget.jdm_1));
          destination.s(tmp$ret$2);
        }
        var newState = currentState.mdm(plus_0(past, destination));
        updateState($this, newState);
        tmp_0 = true;
      } else {
        AppyxLogger_getInstance().dd3('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on one or more queued states: ' + remaining);
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (currentState instanceof Update) {
        var tmp_2;
        if (operation.rdk(currentState.ldk())) {
          var newState_0 = currentState.ddm(operation.odk(currentState.ldk()));
          updateState($this, newState_0);
          tmp_2 = true;
        } else {
          AppyxLogger_getInstance().dd3('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on states: ' + currentState + '.currentTargetState');
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
    var currentState = _get_state__b8zcm8($this).u2();
    var baselineState = $this.cdm(currentState.ndm());
    var tmp;
    if (operation.rdk(baselineState)) {
      var transition = operation.odk(baselineState);
      var newState = currentState.odm(transition);
      updateState($this, newState);
      tmp = true;
    } else {
      AppyxLogger_getInstance().dd3('BaseTransitionModel', 'Operation ' + operation + ' is not applicable on state: ' + baselineState);
      tmp = false;
    }
    return tmp;
  }
  function updateState($this, output) {
    AppyxLogger_getInstance().dd3('BaseTransitionModel', 'Publishing new state: ' + output);
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = _get_state__b8zcm8($this);
      while (true) {
        var prevValue = this_0.u2();
        // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.updateState.<anonymous>' call
        var nextValue = output;
        if (this_0.i1a(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function Companion_3() {
    this.pdm_1 = 'BaseTransitionModel';
    this.qdm_1 = 'TransitionModel';
  }
  var Companion_instance_4;
  function Companion_getInstance_8() {
    return Companion_instance_4;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_5(function_0) {
    this.rdm_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_5).t13 = function (value, $completion) {
    return this.rdm_1(value, $completion);
  };
  function _no_name_provided__qut3iv_3($this, this$0) {
    this.adm_1 = $this;
    this.bdm_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_3).sdm = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$5(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_3).g13 = function (collector, $completion) {
    return this.sdm(collector, $completion);
  };
  function BaseTransitionModel$state$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = _get_savedState__u2bo1r(this$0);
      return MutableStateFlow(new Update(tmp0_elvis_lhs == null ? this$0.w8z() : tmp0_elvis_lhs, false));
    };
  }
  function BaseTransitionModel$output$delegate$lambda(this$0) {
    return function () {
      return _get_state__b8zcm8(this$0);
    };
  }
  function BaseTransitionModel$setProgress$lambda(it) {
    return Unit_instance;
  }
  function BaseTransitionModel(scope, key, savedStateMap) {
    scope = scope === VOID ? CoroutineScope_0(EmptyCoroutineContext_getInstance().ef(Dispatchers_getInstance().ip_1)) : scope;
    key = key === VOID ? 'TransitionModel' : key;
    this.hdl_1 = scope;
    this.idl_1 = key;
    this.jdl_1 = savedStateMap;
    var tmp = this;
    tmp.kdl_1 = lazy(BaseTransitionModel$state$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.ldl_1 = lazy(BaseTransitionModel$output$delegate$lambda(this));
    this.mdl_1 = null;
    this.ndl_1 = 8;
  }
  protoOf(BaseTransitionModel).dde = function () {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.ndf();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp = new _no_name_provided__qut3iv_3(this_0, this);
    var tmp_0 = Companion_getInstance().e18_1;
    var tmp0_elvis_lhs = _get_savedState__u2bo1r(this);
    return stateIn(tmp, this.hdl_1, tmp_0, this.odl(tmp0_elvis_lhs == null ? this.w8z() : tmp0_elvis_lhs));
  };
  protoOf(BaseTransitionModel).xdg = function (state) {
    // Inline function 'kotlin.collections.set' call
    var key = this.idl_1;
    var value = this.ndf().u2().ldk();
    state.r2(key, value);
  };
  protoOf(BaseTransitionModel).ndf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ldl_1;
    output$factory();
    return this_0.u2();
  };
  protoOf(BaseTransitionModel).add = function () {
    AppyxLogger_getInstance().dd3('BaseTransitionModel', 'Relaxing mode');
    this.mdl_1 = null;
    removeDestroyedElements(this);
  };
  protoOf(BaseTransitionModel).cda = function (element) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.getAndUpdate' call
      var this_0 = _get_state__b8zcm8(this);
      while (true) {
        var prevValue = this_0.u2();
        // Inline function 'com.bumble.appyx.interactions.core.model.transition.BaseTransitionModel.cleanUpElement.<anonymous>' call
        var tmp;
        if (prevValue instanceof Update) {
          tmp = prevValue.zdm(this.tdm(prevValue.ldk(), element));
        } else {
          if (prevValue instanceof Keyframes) {
            tmp = prevValue;
          } else {
            noWhenBranchMatchedException();
          }
        }
        var nextValue = tmp;
        if (this_0.i1a(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  };
  protoOf(BaseTransitionModel).adk = function (operation, overrideMode) {
    var tmp0_elvis_lhs = this.mdl_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? overrideMode : tmp0_elvis_lhs;
    var tmp;
    switch ((tmp1_elvis_lhs == null ? operation.fdg() : tmp1_elvis_lhs).j9_1) {
      case 0:
        this.mdl_1 = Mode_IMMEDIATE_getInstance();
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
  protoOf(BaseTransitionModel).kdi = function (progress) {
    var currentState = _get_state__b8zcm8(this).u2();
    if (currentState instanceof Update) {
      AppyxLogger_getInstance().dd3('BaseTransitionModel', 'Not in keyframe state, ignoring setProgress');
      return Unit_instance;
    } else {
      if (currentState instanceof Keyframes) {
        currentState.adn(progress, BaseTransitionModel$setProgress$lambda);
      }
    }
  };
  protoOf(BaseTransitionModel).wdi = function (direction, animate) {
    var currentState = _get_state__b8zcm8(this).u2();
    if (currentState instanceof Update) {
      AppyxLogger_getInstance().dd3('BaseTransitionModel', 'Not in keyframe state, nothing to do');
      return Unit_instance;
    } else {
      if (currentState instanceof Keyframes) {
        var tmp;
        switch (direction.j9_1) {
          case 0:
            tmp = this.cdm(currentState.bdn().hdm());
            break;
          case 1:
            tmp = this.cdm(currentState.bdn().x8z());
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
      return receiver.ndf();
    }, null);
  }
  function Keyframes$currentIndexFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation) {
    this.kdn_1 = $$this$unsafeFlow;
    this.ldn_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).pdn = function (value, $completion) {
    var tmp = this.qdn(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).fc = function (p1, $completion) {
    return this.pdn((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.ndn_1 = this.kdn_1;
            var tmp_1 = this;
            tmp_1.odn_1 = this.mdn_1;
            this.hb_1 = 1;
            var progress = this.odn_1;
            suspendResult = this.ndn_1.t13(numberToInt(progress === this.ldn_1.vdi() ? progress - 1 : progress), this);
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
  protoOf(Keyframes$currentIndexFlow$o$collect$slambda).qdn = function (value, completion) {
    var i = new Keyframes$currentIndexFlow$o$collect$slambda(this.kdn_1, this.ldn_1, completion);
    i.mdn_1 = value;
    return i;
  };
  function Keyframes$currentIndexFlow$o$collect$slambda_0($$this$unsafeFlow, this$0, resultContinuation) {
    var i = new Keyframes$currentIndexFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.pdn(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$6(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zdn_1 = _this__u8e3s4;
    this.ado_1 = collector;
  }
  protoOf($collectCOROUTINE$6).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.bdo_1 = this.ado_1;
            this.hb_1 = 1;
            var tmp_1 = Keyframes$currentIndexFlow$o$collect$slambda_0(this.bdo_1, this.zdn_1.ddo_1, null);
            suspendResult = this.zdn_1.cdo_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_6(tmp_1), this);
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
  function Keyframes$currentSegmentFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation) {
    this.mdo_1 = $$this$unsafeFlow;
    this.ndo_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).s18 = function (value, $completion) {
    var tmp = this.t18(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).fc = function (p1, $completion) {
    return this.s18((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.pdo_1 = this.mdo_1;
            var tmp_1 = this;
            tmp_1.qdo_1 = this.odo_1;
            this.hb_1 = 1;
            var it = this.qdo_1;
            suspendResult = this.pdo_1.t13(this.ndo_1.ndi_1.i1(it), this);
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
  protoOf(Keyframes$currentSegmentFlow$o$collect$slambda).t18 = function (value, completion) {
    var i = new Keyframes$currentSegmentFlow$o$collect$slambda(this.mdo_1, this.ndo_1, completion);
    i.odo_1 = value;
    return i;
  };
  function Keyframes$currentSegmentFlow$o$collect$slambda_0($$this$unsafeFlow, this$0, resultContinuation) {
    var i = new Keyframes$currentSegmentFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.s18(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$7(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zdo_1 = _this__u8e3s4;
    this.adp_1 = collector;
  }
  protoOf($collectCOROUTINE$7).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.bdp_1 = this.adp_1;
            this.hb_1 = 1;
            var tmp_1 = Keyframes$currentSegmentFlow$o$collect$slambda_0(this.bdp_1, this.zdo_1.ddp_1, null);
            suspendResult = this.zdo_1.cdp_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_7(tmp_1), this);
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
  function Keyframes$currentSegmentTargetStateFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation) {
    this.mdp_1 = $$this$unsafeFlow;
    this.ndp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).s18 = function (value, $completion) {
    var tmp = this.t18(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).fc = function (p1, $completion) {
    return this.s18((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.pdp_1 = this.mdp_1;
            var tmp_1 = this;
            tmp_1.qdp_1 = this.odp_1;
            this.hb_1 = 1;
            var it = this.qdp_1;
            suspendResult = this.pdp_1.t13(this.ndp_1.ndi_1.i1(it).x8z(), this);
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
  protoOf(Keyframes$currentSegmentTargetStateFlow$o$collect$slambda).t18 = function (value, completion) {
    var i = new Keyframes$currentSegmentTargetStateFlow$o$collect$slambda(this.mdp_1, this.ndp_1, completion);
    i.odp_1 = value;
    return i;
  };
  function Keyframes$currentSegmentTargetStateFlow$o$collect$slambda_0($$this$unsafeFlow, this$0, resultContinuation) {
    var i = new Keyframes$currentSegmentTargetStateFlow$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.s18(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$8(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zdp_1 = _this__u8e3s4;
    this.adq_1 = collector;
  }
  protoOf($collectCOROUTINE$8).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.bdq_1 = this.adq_1;
            this.hb_1 = 1;
            var tmp_1 = Keyframes$currentSegmentTargetStateFlow$o$collect$slambda_0(this.bdq_1, this.zdp_1.ddq_1, null);
            suspendResult = this.zdp_1.cdq_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_8(tmp_1), this);
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
  function Keyframes$getSegmentProgress$o$collect$slambda($$this$unsafeFlow, $segmentIndex, resultContinuation) {
    this.mdq_1 = $$this$unsafeFlow;
    this.ndq_1 = $segmentIndex;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).pdn = function (value, $completion) {
    var tmp = this.qdn(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).fc = function (p1, $completion) {
    return this.pdn((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.pdq_1 = this.mdq_1;
            var tmp_1 = this;
            tmp_1.qdq_1 = this.odq_1;
            this.hb_1 = 1;
            var it = this.qdq_1;
            suspendResult = this.pdq_1.t13(toSegmentProgress(it, this.ndq_1), this);
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
  protoOf(Keyframes$getSegmentProgress$o$collect$slambda).qdn = function (value, completion) {
    var i = new Keyframes$getSegmentProgress$o$collect$slambda(this.mdq_1, this.ndq_1, completion);
    i.odq_1 = value;
    return i;
  };
  function Keyframes$getSegmentProgress$o$collect$slambda_0($$this$unsafeFlow, $segmentIndex, resultContinuation) {
    var i = new Keyframes$getSegmentProgress$o$collect$slambda($$this$unsafeFlow, $segmentIndex, resultContinuation);
    var l = function (value, $completion) {
      return i.pdn(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$9(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zdq_1 = _this__u8e3s4;
    this.adr_1 = collector;
  }
  protoOf($collectCOROUTINE$9).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.bdr_1 = this.adr_1;
            this.hb_1 = 1;
            var tmp_1 = Keyframes$getSegmentProgress$o$collect$slambda_0(this.bdr_1, this.zdq_1.ddr_1, null);
            suspendResult = this.zdq_1.cdr_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_9(tmp_1), this);
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_6(function_0) {
    this.edr_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_6).t13 = function (value, $completion) {
    return this.edr_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_7(function_0) {
    this.fdr_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_7).t13 = function (value, $completion) {
    return this.fdr_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_8(function_0) {
    this.gdr_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_8).t13 = function (value, $completion) {
    return this.gdr_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_9(function_0) {
    this.hdr_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_9).t13 = function (value, $completion) {
    return this.hdr_1(value, $completion);
  };
  function _no_name_provided__qut3iv_4($this, this$0) {
    this.cdo_1 = $this;
    this.ddo_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_4).idr = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$6(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_4).g13 = function (collector, $completion) {
    return this.idr(collector, $completion);
  };
  function _no_name_provided__qut3iv_5($this, this$0) {
    this.cdp_1 = $this;
    this.ddp_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_5).jdr = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$7(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_5).g13 = function (collector, $completion) {
    return this.jdr(collector, $completion);
  };
  function _no_name_provided__qut3iv_6($this, this$0) {
    this.cdq_1 = $this;
    this.ddq_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_6).kdr = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$8(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_6).g13 = function (collector, $completion) {
    return this.kdr(collector, $completion);
  };
  function _no_name_provided__qut3iv_7($this, $segmentIndex) {
    this.cdr_1 = $this;
    this.ddr_1 = $segmentIndex;
  }
  protoOf(_no_name_provided__qut3iv_7).ldr = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$9(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_7).g13 = function (collector, $completion) {
    return this.ldr(collector, $completion);
  };
  function Keyframes(queue, initialProgress) {
    initialProgress = initialProgress === VOID ? 0.0 : initialProgress;
    Output.call(this);
    this.ndi_1 = queue;
    this.odi_1 = initialProgress;
    this.pdi_1 = MutableStateFlow(this.odi_1);
    var tmp = this;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.pdi_1;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp$ret$2 = new _no_name_provided__qut3iv_4(this_0, this);
    tmp.qdi_1 = distinctUntilChanged(tmp$ret$2);
    var tmp_0 = this;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_1 = this.qdi_1;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp_0.rdi_1 = new _no_name_provided__qut3iv_5(this_1, this);
    var tmp_1 = this;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_2 = this.qdi_1;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp_1.sdi_1 = new _no_name_provided__qut3iv_6(this_2, this);
    this.tdi_1 = 0;
  }
  protoOf(Keyframes).edm = function () {
    return numberToInt(this.mdr() ? this.udi() - 1 : this.udi());
  };
  protoOf(Keyframes).vdi = function () {
    return get_lastIndex(this.ndi_1) + 1 | 0;
  };
  protoOf(Keyframes).mdr = function () {
    return this.udi() === this.vdi();
  };
  protoOf(Keyframes).bdn = function () {
    return this.ndi_1.i1(this.edm());
  };
  protoOf(Keyframes).ndr = function (segmentIndex) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = this.pdi_1;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp$ret$2 = new _no_name_provided__qut3iv_7(this_0, segmentIndex);
    return filterNotNull(tmp$ret$2);
  };
  protoOf(Keyframes).udi = function () {
    return this.pdi_1.u2();
  };
  protoOf(Keyframes).ldk = function () {
    return this.bdn().x8z();
  };
  protoOf(Keyframes).ndm = function () {
    return last(this.ndi_1).x8z();
  };
  protoOf(Keyframes).odm = function (stateTransition) {
    return this.odr(plus_0(this.ndi_1, listOf(new Segment(stateTransition))), this.udi());
  };
  protoOf(Keyframes).ddm = function (stateTransition) {
    return new Update(stateTransition.jdm_1);
  };
  protoOf(Keyframes).adn = function (progress, onTransitionFinished) {
    var currentProgress = numberToInt(this.udi());
    var coercedProgress = coerceIn(progress, 0.0, this.vdi());
    AppyxLogger_getInstance().dd3('Keyframes', '' + coercedProgress);
    this.pdi_1.h1a(coercedProgress);
    if (numberToInt(coercedProgress) > currentProgress) {
      AppyxLogger_getInstance().dd3('Keyframes', 'onTransitionFinished()');
      onTransitionFinished(this.bdn().hdm());
    }
  };
  protoOf(Keyframes).odr = function (queue, initialProgress) {
    return new Keyframes(queue, initialProgress);
  };
  protoOf(Keyframes).mdm = function (queue, initialProgress, $super) {
    queue = queue === VOID ? this.ndi_1 : queue;
    initialProgress = initialProgress === VOID ? this.odi_1 : initialProgress;
    return $super === VOID ? this.odr(queue, initialProgress) : $super.odr.call(this, queue, initialProgress);
  };
  protoOf(Keyframes).toString = function () {
    return 'Keyframes(queue=' + this.ndi_1 + ', initialProgress=' + this.odi_1 + ')';
  };
  protoOf(Keyframes).hashCode = function () {
    var result = hashCode(this.ndi_1);
    result = imul(result, 31) + getNumberHashCode(this.odi_1) | 0;
    return result;
  };
  protoOf(Keyframes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Keyframes))
      return false;
    var tmp0_other_with_cast = other instanceof Keyframes ? other : THROW_CCE();
    if (!equals(this.ndi_1, tmp0_other_with_cast.ndi_1))
      return false;
    if (!equals(this.odi_1, tmp0_other_with_cast.odi_1))
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
  var Mode_entriesInitialized;
  function Mode_initEntries() {
    if (Mode_entriesInitialized)
      return Unit_instance;
    Mode_entriesInitialized = true;
    Mode_IMMEDIATE_instance = new Mode('IMMEDIATE', 0);
    Mode_KEYFRAME_instance = new Mode('KEYFRAME', 1);
    Mode_IMPOSED_instance = new Mode('IMPOSED', 2);
  }
  function Mode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Noop() {
    this.pdr_1 = Mode_IMMEDIATE_getInstance();
    this.qdr_1 = 8;
  }
  protoOf(Noop).gdk = function (_set____db54di) {
    this.pdr_1 = _set____db54di;
  };
  protoOf(Noop).fdg = function () {
    return this.pdr_1;
  };
  protoOf(Noop).rdk = function (state) {
    return false;
  };
  protoOf(Noop).odk = function (state) {
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
  function Segment(stateTransition) {
    this.fdm_1 = stateTransition;
    this.gdm_1 = 0;
  }
  protoOf(Segment).hdm = function () {
    return this.fdm_1.idm_1;
  };
  protoOf(Segment).x8z = function () {
    return this.fdm_1.jdm_1;
  };
  protoOf(Segment).ldm = function (stateTransition) {
    return new Segment(stateTransition);
  };
  protoOf(Segment).toString = function () {
    return 'Segment(stateTransition=' + this.fdm_1 + ')';
  };
  protoOf(Segment).hashCode = function () {
    return this.fdm_1.hashCode();
  };
  protoOf(Segment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Segment))
      return false;
    var tmp0_other_with_cast = other instanceof Segment ? other : THROW_CCE();
    if (!this.fdm_1.equals(tmp0_other_with_cast.fdm_1))
      return false;
    return true;
  };
  function StateTransition(fromState, targetState) {
    this.idm_1 = fromState;
    this.jdm_1 = targetState;
    this.kdm_1 = 0;
  }
  protoOf(StateTransition).ae = function () {
    return this.idm_1;
  };
  protoOf(StateTransition).be = function () {
    return this.jdm_1;
  };
  protoOf(StateTransition).toString = function () {
    return 'StateTransition(fromState=' + this.idm_1 + ', targetState=' + this.jdm_1 + ')';
  };
  protoOf(StateTransition).hashCode = function () {
    var result = this.idm_1 == null ? 0 : hashCode(this.idm_1);
    result = imul(result, 31) + (this.jdm_1 == null ? 0 : hashCode(this.jdm_1)) | 0;
    return result;
  };
  protoOf(StateTransition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StateTransition))
      return false;
    var tmp0_other_with_cast = other instanceof StateTransition ? other : THROW_CCE();
    if (!equals(this.idm_1, tmp0_other_with_cast.idm_1))
      return false;
    if (!equals(this.jdm_1, tmp0_other_with_cast.jdm_1))
      return false;
    return true;
  };
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
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.rdr_1 = lazy_0(tmp_0, TransitionModel$Output$Companion$_anonymous__6gtcv2);
  }
  var Companion_instance_5;
  function Companion_getInstance_9() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  var SettleDirection_REVERT_instance;
  var SettleDirection_COMPLETE_instance;
  var SettleDirection_entriesInitialized;
  function SettleDirection_initEntries() {
    if (SettleDirection_entriesInitialized)
      return Unit_instance;
    SettleDirection_entriesInitialized = true;
    SettleDirection_REVERT_instance = new SettleDirection('REVERT', 0);
    SettleDirection_COMPLETE_instance = new SettleDirection('COMPLETE', 1);
  }
  function Output() {
    Companion_getInstance_9();
    this.kdk_1 = 0;
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
  function Update(currentTargetState, animate) {
    animate = animate === VOID ? true : animate;
    Output.call(this);
    this.vdm_1 = currentTargetState;
    this.wdm_1 = animate;
    this.xdm_1 = this.vdm_1;
    this.ydm_1 = 0;
  }
  protoOf(Update).ldk = function () {
    return this.vdm_1;
  };
  protoOf(Update).ndm = function () {
    return this.xdm_1;
  };
  protoOf(Update).ddm = function (stateTransition) {
    return new Update(stateTransition.jdm_1);
  };
  protoOf(Update).odm = function (stateTransition) {
    return new Keyframes(listOf(new Segment(stateTransition)));
  };
  protoOf(Update).sdr = function (currentTargetState, animate) {
    return new Update(currentTargetState, animate);
  };
  protoOf(Update).zdm = function (currentTargetState, animate, $super) {
    currentTargetState = currentTargetState === VOID ? this.vdm_1 : currentTargetState;
    animate = animate === VOID ? this.wdm_1 : animate;
    return $super === VOID ? this.sdr(currentTargetState, animate) : $super.sdr.call(this, currentTargetState, animate);
  };
  protoOf(Update).toString = function () {
    return 'Update(currentTargetState=' + this.vdm_1 + ', animate=' + this.wdm_1 + ')';
  };
  protoOf(Update).hashCode = function () {
    var result = this.vdm_1 == null ? 0 : hashCode(this.vdm_1);
    result = imul(result, 31) + getBooleanHashCode(this.wdm_1) | 0;
    return result;
  };
  protoOf(Update).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Update))
      return false;
    var tmp0_other_with_cast = other instanceof Update ? other : THROW_CCE();
    if (!equals(this.vdm_1, tmp0_other_with_cast.vdm_1))
      return false;
    if (!(this.wdm_1 === tmp0_other_with_cast.wdm_1))
      return false;
    return true;
  };
  function onPointerEvent(_this__u8e3s4, callback) {
    return _this__u8e3s4.c5j(new PointerInputElement(callback));
  }
  function PointerInputElement(callback) {
    ModifierNodeElement.call(this);
    this.vdr_1 = callback;
    this.wdr_1 = 0;
  }
  protoOf(PointerInputElement).u2f = function () {
    return new OnPointerEventNode(this.vdr_1);
  };
  protoOf(PointerInputElement).xdr = function (node) {
    node.mds_1 = this.vdr_1;
  };
  protoOf(PointerInputElement).h5l = function (node) {
    return this.xdr(node instanceof OnPointerEventNode ? node : THROW_CCE());
  };
  protoOf(PointerInputElement).toString = function () {
    return 'PointerInputElement(callback=' + this.vdr_1 + ')';
  };
  protoOf(PointerInputElement).hashCode = function () {
    return hashCode(this.vdr_1);
  };
  protoOf(PointerInputElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PointerInputElement))
      return false;
    var tmp0_other_with_cast = other instanceof PointerInputElement ? other : THROW_CCE();
    if (!equals(this.vdr_1, tmp0_other_with_cast.vdr_1))
      return false;
    return true;
  };
  function OnPointerEventNode(callback) {
    Node.call(this);
    this.mds_1 = callback;
    this.nds_1 = 8;
  }
  protoOf(OnPointerEventNode).p6k = function (pointerEvent, pass, bounds) {
    if (pass.equals(PointerEventPass_Initial_getInstance())) {
      this.mds_1(pointerEvent);
    }
  };
  protoOf(OnPointerEventNode).g6s = function () {
    return false;
  };
  protoOf(OnPointerEventNode).f6l = function () {
  };
  function Plugin() {
  }
  function SavesInstanceState() {
  }
  function checkState($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.qds_1) {
      // Inline function 'com.bumble.appyx.interactions.core.state.MutableSavedStateMapImpl.checkState.<anonymous>' call
      var message = 'This MutableSavedStateMap has already dumped its state, it is meaningless to write anything anymore';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKey($this, key, value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.ods_1.y2(key)) {
      // Inline function 'com.bumble.appyx.interactions.core.state.MutableSavedStateMapImpl.checkKey.<anonymous>' call
      var message = "Save instance process has faced key collision at '" + key + "': " + ("existing value is '" + toString_0($this.ods_1.b3(key)) + "', ") + ("new value is '" + toString_0(value) + "'");
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function MutableSavedStateMapImpl$savedState$delegate$lambda(this$0) {
    return function () {
      this$0.qds_1 = true;
      return this$0.ods_1;
    };
  }
  function MutableSavedStateMapImpl(map, saverScope) {
    map = map === VOID ? HashMap_init_$Create$() : map;
    this.ods_1 = map;
    this.pds_1 = saverScope;
    this.qds_1 = false;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.rds_1 = lazy_0(tmp_0, MutableSavedStateMapImpl$savedState$delegate$lambda(this));
    this.sds_1 = 8;
  }
  protoOf(MutableSavedStateMapImpl).tds = function () {
    return this.pds_1;
  };
  protoOf(MutableSavedStateMapImpl).q2 = function () {
    return this.ods_1.q2();
  };
  protoOf(MutableSavedStateMapImpl).o2 = function () {
    return this.ods_1.o2();
  };
  protoOf(MutableSavedStateMapImpl).n = function () {
    return this.ods_1.n();
  };
  protoOf(MutableSavedStateMapImpl).p2 = function () {
    return this.ods_1.p2();
  };
  protoOf(MutableSavedStateMapImpl).c1 = function () {
    this.ods_1.c1();
  };
  protoOf(MutableSavedStateMapImpl).uds = function (key) {
    return this.ods_1.y2(key);
  };
  protoOf(MutableSavedStateMapImpl).y2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.uds((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).vds = function (key) {
    return this.ods_1.b3(key);
  };
  protoOf(MutableSavedStateMapImpl).b3 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.vds((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).e1 = function () {
    return this.ods_1.e1();
  };
  protoOf(MutableSavedStateMapImpl).wds = function (key) {
    return this.ods_1.v2(key);
  };
  protoOf(MutableSavedStateMapImpl).v2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.wds((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).xds = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.rds_1;
    savedState$factory();
    return this_0.u2();
  };
  protoOf(MutableSavedStateMapImpl).yds = function (key, value) {
    checkState(this);
    checkKey(this, key, value);
    return this.ods_1.r2(key, value);
  };
  protoOf(MutableSavedStateMapImpl).r2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.yds(tmp, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(MutableSavedStateMapImpl).zds = function (from) {
    checkState(this);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = from.q2().v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.interactions.core.state.MutableSavedStateMapImpl.putAll.<anonymous>' call
      checkKey(this, element.t2(), element.u2());
    }
    return this.ods_1.s2(from);
  };
  protoOf(MutableSavedStateMapImpl).s2 = function (from) {
    return this.zds(from);
  };
  function savedState$factory() {
    return getPropertyCallableRef('savedState', 1, KProperty1, function (receiver) {
      return receiver.xds();
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
    this.idt_1 = $$this$unsafeFlow;
    this.jdt_1 = this$0;
    this.kdt_1 = $output;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Visualisation$map$o$collect$slambda).s18 = function (value, $completion) {
    var tmp = this.t18(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Visualisation$map$o$collect$slambda).fc = function (p1, $completion) {
    return this.s18((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Visualisation$map$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.mdt_1 = this.idt_1;
            var tmp_1 = this;
            tmp_1.ndt_1 = this.ldt_1;
            this.hb_1 = 1;
            var it = this.ndt_1;
            suspendResult = this.mdt_1.t13(this.jdt_1.odt(this.kdt_1, it), this);
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
  protoOf(Visualisation$map$o$collect$slambda).t18 = function (value, completion) {
    var i = new Visualisation$map$o$collect$slambda(this.idt_1, this.jdt_1, this.kdt_1, completion);
    i.ldt_1 = value;
    return i;
  };
  function Visualisation$map$o$collect$slambda_0($$this$unsafeFlow, this$0, $output, resultContinuation) {
    var i = new Visualisation$map$o$collect$slambda($$this$unsafeFlow, this$0, $output, resultContinuation);
    var l = function (value, $completion) {
      return i.s18(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xdt_1 = _this__u8e3s4;
    this.ydt_1 = collector;
  }
  protoOf($collectCOROUTINE$10).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.zdt_1 = this.ydt_1;
            this.hb_1 = 1;
            var tmp_1 = Visualisation$map$o$collect$slambda_0(this.zdt_1, this.xdt_1.bdu_1, this.xdt_1.cdu_1, null);
            suspendResult = this.xdt_1.adu_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_10(tmp_1), this);
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_10(function_0) {
    this.ddu_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_10).t13 = function (value, $completion) {
    return this.ddu_1(value, $completion);
  };
  function _no_name_provided__qut3iv_8($this, this$0, $output) {
    this.adu_1 = $this;
    this.bdu_1 = this$0;
    this.cdu_1 = $output;
  }
  protoOf(_no_name_provided__qut3iv_8).edu = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$10(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_8).g13 = function (collector, $completion) {
    return this.edu(collector, $completion);
  };
  function Visualisation() {
  }
  function Companion_5() {
    Companion_instance_6 = this;
    this.pdf_1 = new TransitionBounds(Density(0.0), 0, 0, 0, 0);
  }
  var Companion_instance_6;
  function Companion_getInstance_10() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function TransitionBounds(density, widthPx, heightPx, screenWidthPx, screenHeightPx) {
    Companion_getInstance_10();
    this.udf_1 = density;
    this.vdf_1 = widthPx;
    this.wdf_1 = heightPx;
    this.xdf_1 = screenWidthPx;
    this.ydf_1 = screenHeightPx;
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.widthDp.<anonymous>' call
    tmp.zdf_1 = this.udf_1.p3b(this.vdf_1);
    var tmp_0 = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.heightDp.<anonymous>' call
    tmp_0.adg_1 = this.udf_1.p3b(this.wdf_1);
    var tmp_1 = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.screenWidthDp.<anonymous>' call
    tmp_1.bdg_1 = this.udf_1.p3b(this.xdf_1);
    var tmp_2 = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.interactions.core.ui.context.TransitionBounds.screenHeightDp.<anonymous>' call
    tmp_2.cdg_1 = this.udf_1.p3b(this.ydf_1);
    this.ddg_1 = 0;
  }
  protoOf(TransitionBounds).toString = function () {
    return 'TransitionBounds(density=' + this.udf_1 + ', widthPx=' + this.vdf_1 + ', heightPx=' + this.wdf_1 + ', screenWidthPx=' + this.xdf_1 + ', screenHeightPx=' + this.ydf_1 + ')';
  };
  protoOf(TransitionBounds).hashCode = function () {
    var result = hashCode(this.udf_1);
    result = imul(result, 31) + this.vdf_1 | 0;
    result = imul(result, 31) + this.wdf_1 | 0;
    result = imul(result, 31) + this.xdf_1 | 0;
    result = imul(result, 31) + this.ydf_1 | 0;
    return result;
  };
  protoOf(TransitionBounds).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionBounds))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionBounds ? other : THROW_CCE();
    if (!equals(this.udf_1, tmp0_other_with_cast.udf_1))
      return false;
    if (!(this.vdf_1 === tmp0_other_with_cast.vdf_1))
      return false;
    if (!(this.wdf_1 === tmp0_other_with_cast.wdf_1))
      return false;
    if (!(this.xdf_1 === tmp0_other_with_cast.xdf_1))
      return false;
    if (!(this.ydf_1 === tmp0_other_with_cast.ydf_1))
      return false;
    return true;
  };
  function UiContext(coroutineScope, clipToBounds) {
    this.hdu_1 = coroutineScope;
    this.idu_1 = clipToBounds;
    this.jdu_1 = 0;
  }
  protoOf(UiContext).toString = function () {
    return 'UiContext(coroutineScope=' + this.hdu_1 + ', clipToBounds=' + this.idu_1 + ')';
  };
  protoOf(UiContext).hashCode = function () {
    var result = hashCode(this.hdu_1);
    result = imul(result, 31) + getBooleanHashCode(this.idu_1) | 0;
    return result;
  };
  protoOf(UiContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UiContext))
      return false;
    var tmp0_other_with_cast = other instanceof UiContext ? other : THROW_CCE();
    if (!equals(this.hdu_1, tmp0_other_with_cast.hdu_1))
      return false;
    if (!(this.idu_1 === tmp0_other_with_cast.idu_1))
      return false;
    return true;
  };
  var HorizontalDirection_LEFT_instance;
  var HorizontalDirection_RIGHT_instance;
  var HorizontalDirection_entriesInitialized;
  function HorizontalDirection_initEntries() {
    if (HorizontalDirection_entriesInitialized)
      return Unit_instance;
    HorizontalDirection_entriesInitialized = true;
    HorizontalDirection_LEFT_instance = new HorizontalDirection('LEFT', 0);
    HorizontalDirection_RIGHT_instance = new HorizontalDirection('RIGHT', 1);
  }
  function HorizontalDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HorizontalDirection_LEFT_getInstance() {
    HorizontalDirection_initEntries();
    return HorizontalDirection_LEFT_instance;
  }
  function HorizontalDirection_RIGHT_getInstance() {
    HorizontalDirection_initEntries();
    return HorizontalDirection_RIGHT_instance;
  }
  function dragHorizontalDirection(delta) {
    return _Offset___get_x__impl__xvi35n(delta) < 0.0 ? HorizontalDirection_LEFT_getInstance() : HorizontalDirection_RIGHT_getInstance();
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
    this.pdu_1 = 0;
  }
  function Gesture$_init_$lambda_qx53ia($completeAt) {
    return function (offset) {
      return proportionOf(offset.c39_1, $completeAt);
    };
  }
  function Gesture$_init_$lambda_qx53ia_0($completeAt) {
    return function (offset, remainder) {
      var totalProgress = proportionOf(offset.c39_1, $completeAt);
      return new Offset(Offset__times_impl_jz1mli(offset.c39_1, remainder / totalProgress));
    };
  }
  function Gesture(operation, dragToProgress, partial) {
    this.bdk_1 = operation;
    this.cdk_1 = dragToProgress;
    this.ddk_1 = partial;
    this.edk_1 = null;
    this.fdk_1 = 8;
  }
  function Noop_1() {
    this.qdu_1 = 0;
  }
  protoOf(Noop_1).mdk = function (state, delta, density) {
    return new Noop_0();
  };
  function GestureFactory() {
  }
  function GestureSettleConfig(completionThreshold, completeGestureSpec, revertGestureSpec) {
    completionThreshold = completionThreshold === VOID ? 0.5 : completionThreshold;
    completeGestureSpec = completeGestureSpec === VOID ? get_DefaultAnimationSpec() : completeGestureSpec;
    revertGestureSpec = revertGestureSpec === VOID ? get_DefaultAnimationSpec() : revertGestureSpec;
    this.bdd_1 = completionThreshold;
    this.cdd_1 = completeGestureSpec;
    this.ddd_1 = revertGestureSpec;
    this.edd_1 = 0;
  }
  protoOf(GestureSettleConfig).toString = function () {
    return 'GestureSettleConfig(completionThreshold=' + this.bdd_1 + ', completeGestureSpec=' + this.cdd_1 + ', revertGestureSpec=' + this.ddd_1 + ')';
  };
  protoOf(GestureSettleConfig).hashCode = function () {
    var result = getNumberHashCode(this.bdd_1);
    result = imul(result, 31) + hashCode(this.cdd_1) | 0;
    result = imul(result, 31) + hashCode(this.ddd_1) | 0;
    return result;
  };
  protoOf(GestureSettleConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GestureSettleConfig))
      return false;
    var tmp0_other_with_cast = other instanceof GestureSettleConfig ? other : THROW_CCE();
    if (!equals(this.bdd_1, tmp0_other_with_cast.bdd_1))
      return false;
    if (!equals(this.cdd_1, tmp0_other_with_cast.cdd_1))
      return false;
    if (!equals(this.ddd_1, tmp0_other_with_cast.ddd_1))
      return false;
    return true;
  };
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
    $composer_0 = $composer_0.c1z(412435611);
    sourceInformation($composer_0, 'C(AppyxComponentSetup$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(appyxComponent) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(412435611, $dirty, -1, 'com.bumble.appyx.interactions.core.ui.helper.AppyxComponentSetup$composable (InteractionModelSetup.kt:8)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var $composer_1 = $composer_0;
      var getContext = {_v: null};
      var $composer_2 = $composer_1;
      $composer_2.f1x(102870005);
      sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext._v = AppyxComponentSetup$composable$lambda;
      }
      var composer = $composer_2;
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
      if (false ? true : it === Companion_getInstance_1().t1y_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_3.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_3.h1x();
      var wrapper = tmp0;
      var tmp0_0 = wrapper.t2g_1;
      $composer_2.h1x();
      var coroutineScope = tmp0_0;
      DisposableEffect$composable(appyxComponent, AppyxComponentSetup$composable$lambda_0(appyxComponent, coroutineScope), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    var tmp0_safe_receiver = $composer_0.d1z();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.w2e(AppyxComponentSetup$composable$lambda_1(appyxComponent, $changed));
    }
  }
  function AppyxComponentSetup$composable$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function _no_name_provided__qut3iv_9($appyxComponent) {
    this.rdu_1 = $appyxComponent;
  }
  protoOf(_no_name_provided__qut3iv_9).gk = function () {
    // Inline function 'com.bumble.appyx.interactions.core.ui.helper.AppyxComponentSetup$composable.<anonymous>.<anonymous>' call
    this.rdu_1.rdf();
  };
  function AppyxComponentSetup$composable$lambda_0($appyxComponent, $coroutineScope) {
    return function ($this$DisposableEffect) {
      $appyxComponent.qdf($coroutineScope);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_9($appyxComponent);
    };
  }
  function AppyxComponentSetup$composable$lambda_1($appyxComponent, $$changed) {
    return function ($composer, $force) {
      AppyxComponentSetup$composable($appyxComponent, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
  protoOf(ElementUiModel).toString = function () {
    return 'ElementUiModel(element=' + this.qda_1 + ', visibleState=' + this.rda_1 + ', motionProperties=' + this.sda_1 + ', persistentContainer=' + this.tda_1 + ', modifier=' + this.uda_1 + ', progress=' + this.vda_1 + ')';
  };
  protoOf(ElementUiModel).hashCode = function () {
    var result = this.qda_1.hashCode();
    result = imul(result, 31) + hashCode(this.rda_1) | 0;
    result = imul(result, 31) + hashCode(this.sda_1) | 0;
    result = imul(result, 31) + hashCode(this.tda_1) | 0;
    result = imul(result, 31) + hashCode(this.uda_1) | 0;
    result = imul(result, 31) + hashCode(this.vda_1) | 0;
    return result;
  };
  protoOf(ElementUiModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ElementUiModel))
      return false;
    var tmp0_other_with_cast = other instanceof ElementUiModel ? other : THROW_CCE();
    if (!this.qda_1.equals(tmp0_other_with_cast.qda_1))
      return false;
    if (!equals(this.rda_1, tmp0_other_with_cast.rda_1))
      return false;
    if (!equals(this.sda_1, tmp0_other_with_cast.sda_1))
      return false;
    if (!equals(this.tda_1, tmp0_other_with_cast.tda_1))
      return false;
    if (!equals(this.uda_1, tmp0_other_with_cast.uda_1))
      return false;
    if (!equals(this.vda_1, tmp0_other_with_cast.vda_1))
      return false;
    return true;
  };
  function ElementUiModel(element, visibleState, motionProperties, persistentContainer, modifier, progress) {
    this.qda_1 = element;
    this.rda_1 = visibleState;
    this.sda_1 = motionProperties;
    this.tda_1 = persistentContainer;
    this.uda_1 = modifier;
    this.vda_1 = progress;
    this.wda_1 = 0;
  }
  protoOf(ElementUiModel).sdu = function (element, visibleState, motionProperties, persistentContainer, modifier, progress) {
    return new ElementUiModel(element, visibleState, motionProperties, persistentContainer, modifier, progress);
  };
  protoOf(ElementUiModel).tdu = function (element, visibleState, motionProperties, persistentContainer, modifier, progress, $super) {
    element = element === VOID ? this.qda_1 : element;
    visibleState = visibleState === VOID ? this.rda_1 : visibleState;
    motionProperties = motionProperties === VOID ? this.sda_1 : motionProperties;
    persistentContainer = persistentContainer === VOID ? this.tda_1 : persistentContainer;
    modifier = modifier === VOID ? this.uda_1 : modifier;
    progress = progress === VOID ? this.vda_1 : progress;
    return $super === VOID ? this.sdu(element, visibleState, motionProperties, persistentContainer, modifier, progress) : $super.sdu.call(this, element, visibleState, motionProperties, persistentContainer, modifier, progress);
  };
  function onValueChanged($this) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = $this.cdv_1;
      while (true) {
        var prevValue = this_0.u2();
        // Inline function 'com.bumble.appyx.interactions.core.ui.property.MotionProperty.onValueChanged.<anonymous>' call
        var nextValue = $this.hdv();
        if (this_0.i1a(prevValue, nextValue)) {
          break $l$block;
        }
      }
    }
  }
  function calculateVelocity($this, targetValue) {
    if ($this.bdv_1.equals(new Long(0, 0)))
      $this.bdv_1 = SystemClock_getInstance().kdv();
    var converter = $this.vdu_1.h8m_1;
    var vec1 = converter.o8n()($this.vdu_1.u2());
    var targetVector = converter.o8n()(targetValue);
    var time = SystemClock_getInstance().kdv();
    var deltaTimeMs = time.ra($this.bdv_1).l9(new Long(1000000, 0));
    var timeFactor = deltaTimeMs.a7(new Long(0, 0)) > 0 ? numberToLong(1000).l9(deltaTimeMs) : new Long(0, 0);
    $this.bdv_1 = time;
    var tmp;
    if (vec1 instanceof AnimationVector1D) {
      var vec2 = targetVector instanceof AnimationVector1D ? targetVector : THROW_CCE();
      var tmp_0 = converter.u8n();
      // Inline function 'kotlin.Long.times' call
      var other = vec2.y8s_1 - vec1.y8s_1;
      var tmp$ret$0 = timeFactor.eb() * other;
      var tmp_1 = new AnimationVector1D(tmp$ret$0);
      tmp = tmp_0(tmp_1 instanceof AnimationVector ? tmp_1 : THROW_CCE());
    } else {
      if (vec1 instanceof AnimationVector2D) {
        var vec2_0 = targetVector instanceof AnimationVector2D ? targetVector : THROW_CCE();
        var tmp_2 = converter.u8n();
        // Inline function 'kotlin.Long.times' call
        var other_0 = vec2_0.c8t_1 - vec1.c8t_1;
        var tmp_3 = timeFactor.eb() * other_0;
        // Inline function 'kotlin.Long.times' call
        var other_1 = vec2_0.d8t_1 - vec1.d8t_1;
        var tmp$ret$2 = timeFactor.eb() * other_1;
        var tmp_4 = new AnimationVector2D(tmp_3, tmp$ret$2);
        tmp = tmp_2(tmp_4 instanceof AnimationVector ? tmp_4 : THROW_CCE());
      } else {
        if (vec1 instanceof AnimationVector3D) {
          var vec2_1 = targetVector instanceof AnimationVector3D ? targetVector : THROW_CCE();
          var tmp_5 = converter.u8n();
          // Inline function 'kotlin.Long.times' call
          var other_2 = vec2_1.o8t_1 - vec1.o8t_1;
          var tmp_6 = timeFactor.eb() * other_2;
          // Inline function 'kotlin.Long.times' call
          var other_3 = vec2_1.p8t_1 - vec1.p8t_1;
          var tmp_7 = timeFactor.eb() * other_3;
          // Inline function 'kotlin.Long.times' call
          var other_4 = vec2_1.q8t_1 - vec1.q8t_1;
          var tmp$ret$5 = timeFactor.eb() * other_4;
          var tmp_8 = new AnimationVector3D(tmp_6, tmp_7, tmp$ret$5);
          tmp = tmp_5(tmp_8 instanceof AnimationVector ? tmp_8 : THROW_CCE());
        } else {
          if (vec1 instanceof AnimationVector4D) {
            var vec2_2 = targetVector instanceof AnimationVector4D ? targetVector : THROW_CCE();
            var tmp_9 = converter.u8n();
            // Inline function 'kotlin.Long.times' call
            var other_5 = vec2_2.h8t_1 - vec1.h8t_1;
            var tmp_10 = timeFactor.eb() * other_5;
            // Inline function 'kotlin.Long.times' call
            var other_6 = vec2_2.i8t_1 - vec1.i8t_1;
            var tmp_11 = timeFactor.eb() * other_6;
            // Inline function 'kotlin.Long.times' call
            var other_7 = vec2_2.j8t_1 - vec1.j8t_1;
            var tmp_12 = timeFactor.eb() * other_7;
            // Inline function 'kotlin.Long.times' call
            var other_8 = vec2_2.k8t_1 - vec1.k8t_1;
            var tmp$ret$9 = timeFactor.eb() * other_8;
            var tmp_13 = new AnimationVector4D(tmp_10, tmp_11, tmp_12, tmp$ret$9);
            tmp = tmp_9(tmp_13 instanceof AnimationVector ? tmp_13 : THROW_CCE());
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    var velocity = tmp;
    AppyxLogger_getInstance().cd3('MotionProperty', 'Calculated velocity: ' + velocity);
    return velocity;
  }
  function insertVisibilityThreshold($this, animationSpec) {
    var tmp;
    if (animationSpec instanceof SpringSpec) {
      var tmp0_stiffness = animationSpec.j8p_1;
      var tmp1_dampingRatio = animationSpec.i8p_1;
      var tmp2_visibilityThreshold = $this.xdu_1;
      tmp = spring(tmp1_dampingRatio, tmp0_stiffness, tmp2_visibilityThreshold);
    } else {
      tmp = animationSpec;
    }
    return tmp;
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.ldv_1 = new Long(1000000, 0);
  }
  var Companion_instance_7;
  function Companion_getInstance_11() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function MotionProperty$renderValueFlow$slambda(this$0, resultContinuation) {
    this.udv_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MotionProperty$renderValueFlow$slambda).xdv = function (displacement, value, $completion) {
    var tmp = this.ydv(displacement, value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MotionProperty$renderValueFlow$slambda).i1k = function (p1, p2, $completion) {
    var tmp = (p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE();
    return this.xdv(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(MotionProperty$renderValueFlow$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          return this.udv_1.zdv(this.wdv_1, this.vdv_1);
        } else if (tmp === 1) {
          throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(MotionProperty$renderValueFlow$slambda).ydv = function (displacement, value, completion) {
    var i = new MotionProperty$renderValueFlow$slambda(this.udv_1, completion);
    i.vdv_1 = displacement;
    i.wdv_1 = value;
    return i;
  };
  function MotionProperty$renderValueFlow$slambda_0(this$0, resultContinuation) {
    var i = new MotionProperty$renderValueFlow$slambda(this$0, resultContinuation);
    var l = function (displacement, value, $completion) {
      return i.xdv(displacement, value, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function MotionProperty$animateTo$lambda($this$null) {
    return Unit_instance;
  }
  function MotionProperty$animateTo$lambda_0($block, this$0) {
    return function ($this$animateTo) {
      $block($this$animateTo);
      AppyxLogger_getInstance().dd3('MotionProperty', 'Value = ' + this$0.vdu_1.u2() + ', Velocity = ' + this$0.vdu_1.z8o() + ')');
      this$0.zdu_1 = this$0.vdu_1.z8o();
      this$0.adv_1 = this$0.vdu_1.z8o();
      onValueChanged(this$0);
      return Unit_instance;
    };
  }
  function $snapToCOROUTINE$11(_this__u8e3s4, targetValue, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.idw_1 = _this__u8e3s4;
    this.jdw_1 = targetValue;
  }
  protoOf($snapToCOROUTINE$11).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.idw_1.adv_1 = this.idw_1.zdu_1;
            this.idw_1.zdu_1 = calculateVelocity(this.idw_1, this.jdw_1);
            this.hb_1 = 1;
            suspendResult = this.idw_1.vdu_1.d8p(this.jdw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            onValueChanged(this.idw_1);
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
  function $animateToCOROUTINE$12(_this__u8e3s4, targetValue, animationSpec, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sdw_1 = _this__u8e3s4;
    this.tdw_1 = targetValue;
    this.udw_1 = animationSpec;
    this.vdw_1 = block;
  }
  protoOf($animateToCOROUTINE$12).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.wdw_1 = insertVisibilityThreshold(this.sdw_1, this.udw_1);
            AppyxLogger_getInstance().dd3('MotionProperty', 'Starting with initialVelocity = ' + this.sdw_1.adv_1);
            l$ret$1: do {
              var this_0 = this.sdw_1.edv_1;
              while (true) {
                var prevValue = this_0.u2();
                var nextValue = !equals(this.tdw_1, this.sdw_1.hdv());
                if (this_0.i1a(prevValue, nextValue)) {
                  break l$ret$1;
                }
              }
            }
             while (false);
            this.hb_1 = 1;
            var tmp_0 = this.sdw_1.adv_1;
            suspendResult = this.sdw_1.vdu_1.b8p(this.tdw_1, this.wdw_1, tmp_0, MotionProperty$animateTo$lambda_0(this.vdw_1, this.sdw_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            l$ret$3: do {
              var this_1 = this.sdw_1.edv_1;
              while (true) {
                var prevValue_0 = this_1.u2();
                var nextValue_0 = !equals(result.f8p_1.u2(), this.tdw_1);
                if (this_1.i1a(prevValue_0, nextValue_0)) {
                  break l$ret$3;
                }
              }
            }
             while (false);
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
  function MotionProperty(coroutineScope, animatable, easing, visibilityThreshold, displacement) {
    Companion_getInstance_11();
    easing = easing === VOID ? null : easing;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.udu_1 = coroutineScope;
    this.vdu_1 = animatable;
    this.wdu_1 = easing;
    this.xdu_1 = visibilityThreshold;
    this.ydu_1 = displacement;
    this.zdu_1 = this.vdu_1.z8o();
    this.adv_1 = this.vdu_1.z8o();
    this.bdv_1 = new Long(0, 0);
    this.cdv_1 = MutableStateFlow(this.vdu_1.u2());
    var tmp = this;
    tmp.ddv_1 = stateIn(combine(this.ydu_1, this.cdv_1, MotionProperty$renderValueFlow$slambda_0(this, null)), this.udu_1, Companion_getInstance().e18_1, this.cdv_1.u2());
    this.edv_1 = MutableStateFlow(false);
    this.fdv_1 = null;
    this.gdv_1 = 8;
  }
  protoOf(MotionProperty).hdv = function () {
    return this.vdu_1.u2();
  };
  protoOf(MotionProperty).xdw = function () {
    return this.edv_1;
  };
  protoOf(MotionProperty).ydw = function () {
    return this.fdv_1;
  };
  protoOf(MotionProperty).zdw = function (priority, fraction) {
    var tmp1_elvis_lhs = priority == null ? this.wdu_1 : priority;
    var resolved = tmp1_elvis_lhs == null ? get_LinearEasing() : tmp1_elvis_lhs;
    return resolved.m8u(fraction);
  };
  protoOf(MotionProperty).d8p = function (targetValue, $completion) {
    var tmp = new $snapToCOROUTINE$11(this, targetValue, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MotionProperty).adx = function (targetValue, animationSpec, block, $completion) {
    var tmp = new $animateToCOROUTINE$12(this, targetValue, animationSpec, block, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MotionProperty).bdx = function (targetValue, animationSpec, block, $completion, $super) {
    var tmp;
    if (block === VOID) {
      tmp = MotionProperty$animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    return $super === VOID ? this.adx(targetValue, animationSpec, block, $completion) : $super.adx.call(this, targetValue, animationSpec, block, $completion);
  };
  function Target(value, easing) {
    easing = easing === VOID ? null : easing;
    this.cdx_1 = value;
    this.ddx_1 = easing;
    this.edx_1 = 0;
  }
  function Alpha$isVisibleFlow$lambda(it) {
    return it > 0.0;
  }
  function Alpha$_get_modifier_$lambda_3nlvw1(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.f1x(1892018111);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1892018111, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.Alpha.<get-modifier>.<anonymous> (Alpha.kt:45)');
        tmp = Unit_instance;
      }
      var tmp0 = alpha($this$composed, collectAsState$composable(this$0.ddv_1, null, $composer_0, 0, 1).u2());
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.h1x();
      return tmp0;
    };
  }
  function Alpha(coroutineScope, target, visibilityThreshold, displacement) {
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    displacement = displacement === VOID ? MutableStateFlow(0.0) : displacement;
    MotionProperty.call(this, coroutineScope, Animatable(target.cdx_1), target.ddx_1, visibilityThreshold, displacement);
    var tmp = this;
    tmp.sdx_1 = mapState(this.ddv_1, coroutineScope, VOID, Alpha$isVisibleFlow$lambda);
    this.tdx_1 = 8;
  }
  protoOf(Alpha).ydw = function () {
    return this.sdx_1;
  };
  protoOf(Alpha).udx = function (base, displacement) {
    return base - displacement;
  };
  protoOf(Alpha).zdv = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.udx(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(Alpha).m5x = function () {
    var tmp = Companion_instance;
    return composed$composable(tmp, VOID, Alpha$_get_modifier_$lambda_3nlvw1(this));
  };
  protoOf(Alpha).vdx = function (start, end, fraction, $completion) {
    return this.d8p(lerpFloat(start.cdx_1, end.cdx_1, this.zdw(end.ddx_1, fraction)), $completion);
  };
  function Target_0(value, easing) {
    easing = easing === VOID ? null : easing;
    this.wdx_1 = value;
    this.xdx_1 = easing;
    this.ydx_1 = 0;
  }
  function ColorOverlay$_get_modifier_$lambda$lambda_d7jkyd(this$0, $alpha) {
    return function ($this$drawWithContent) {
      $this$drawWithContent.s5p();
      $this$drawWithContent.t4f(Color__copy$default_impl_ectz3s(this$0.mdy_1, $alpha));
      return Unit_instance;
    };
  }
  function ColorOverlay$_get_modifier_$lambda_kerwsg(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.f1x(246610499);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(246610499, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.ColorOverlay.<get-modifier>.<anonymous> (ColorOverlay.kt:41)');
        tmp = Unit_instance;
      }
      var alpha = collectAsState$composable(this$0.ddv_1, null, $composer_0, 0, 1).u2();
      var tmp_0;
      if (alpha > 0.0) {
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var key1 = this$0;
        var $composer_1 = $composer_0;
        $composer_1.f1x(-1124426577);
        sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_1.t1z(key1) | $composer_1.t1z(alpha));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.r1z();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
          // Inline function 'com.bumble.appyx.interactions.core.ui.property.impl.ColorOverlay.<get-modifier>.<anonymous>.<anonymous>' call
          var value = ColorOverlay$_get_modifier_$lambda$lambda_d7jkyd(this$0, alpha);
          $composer_1.s1z(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.h1x();
        tmp_0 = drawWithContent($this$composed, tmp0);
      } else {
        tmp_0 = $this$composed;
      }
      var tmp0_0 = tmp_0;
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      $composer_0.h1x();
      return tmp0_0;
    };
  }
  function ColorOverlay(coroutineScope, target, color, visibilityThreshold, displacement) {
    color = color === VOID ? Companion_getInstance_2().y41_1 : color;
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    displacement = displacement === VOID ? MutableStateFlow(0.0) : displacement;
    MotionProperty.call(this, coroutineScope, Animatable(target.wdx_1), target.xdx_1, visibilityThreshold, displacement);
    this.mdy_1 = color;
    this.ndy_1 = 0;
  }
  protoOf(ColorOverlay).udx = function (base, displacement) {
    return base - displacement;
  };
  protoOf(ColorOverlay).zdv = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.udx(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(ColorOverlay).m5x = function () {
    var tmp = Companion_instance;
    return composed$composable(tmp, VOID, ColorOverlay$_get_modifier_$lambda_kerwsg(this));
  };
  protoOf(ColorOverlay).ody = function (start, end, fraction, $completion) {
    return this.d8p(lerpFloat(start.wdx_1, end.wdx_1, this.zdw(end.xdx_1, fraction)), $completion);
  };
  function Target_1(value, easing) {
    easing = easing === VOID ? null : easing;
    this.pdy_1 = value;
    this.qdy_1 = easing;
    this.rdy_1 = 0;
  }
  function Shadow$_get_modifier_$lambda_ajkudp(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.f1x(1041413789);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1041413789, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.Shadow.<get-modifier>.<anonymous> (Shadow.kt:40)');
        tmp = Unit_instance;
      }
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_0 = collectAsState$composable(this$0.ddv_1, null, $composer_0, 0, 1).u2();
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(this_0);
      var tmp0 = shadow($this$composed, tmp$ret$0, VOID, false);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.h1x();
      return tmp0;
    };
  }
  function Shadow(coroutineScope, target, visibilityThreshold, displacement) {
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    displacement = displacement === VOID ? MutableStateFlow(0.0) : displacement;
    MotionProperty.call(this, coroutineScope, Animatable(target.pdy_1), target.qdy_1, visibilityThreshold, displacement);
    this.fdz_1 = 0;
  }
  protoOf(Shadow).udx = function (base, displacement) {
    return base - displacement;
  };
  protoOf(Shadow).zdv = function (base, displacement) {
    var tmp = (!(base == null) ? typeof base === 'number' : false) ? base : THROW_CCE();
    return this.udx(tmp, (!(displacement == null) ? typeof displacement === 'number' : false) ? displacement : THROW_CCE());
  };
  protoOf(Shadow).m5x = function () {
    var tmp = Companion_instance;
    return composed$composable(tmp, VOID, Shadow$_get_modifier_$lambda_ajkudp(this));
  };
  protoOf(Shadow).gdz = function (start, end, fraction, $completion) {
    return this.d8p(lerpFloat(start.pdy_1, end.pdy_1, this.zdw(end.qdy_1, fraction)), $completion);
  };
  function Companion_7() {
    Companion_instance_8 = this;
    this.hdz_1 = new OutsideAlignment(0.0, 0.0);
    this.idz_1 = new OutsideAlignment(-1.0, 0.0);
    this.jdz_1 = new OutsideAlignment(-1.0, -1.0);
    this.kdz_1 = new OutsideAlignment(-1.0, 1.0);
    this.ldz_1 = new OutsideAlignment(1.0, 0.0);
    this.mdz_1 = new OutsideAlignment(1.0, 1.0);
    this.ndz_1 = new OutsideAlignment(1.0, -1.0);
    this.odz_1 = new OutsideAlignment(0.0, 1.0);
    this.pdz_1 = new OutsideAlignment(0.0, -1.0);
  }
  var Companion_instance_8;
  function Companion_getInstance_12() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.qdz_1 = new InsideAlignment(-1.0, -1.0);
    this.rdz_1 = new InsideAlignment(0.0, -1.0);
    this.sdz_1 = new InsideAlignment(1.0, -1.0);
    this.tdz_1 = new InsideAlignment(-1.0, 0.0);
    this.udz_1 = new InsideAlignment(0.0, 0.0);
    this.vdz_1 = new InsideAlignment(1.0, 0.0);
    this.wdz_1 = new InsideAlignment(-1.0, 1.0);
    this.xdz_1 = new InsideAlignment(0.0, 1.0);
    this.ydz_1 = new InsideAlignment(1.0, 1.0);
  }
  var Companion_instance_9;
  function Companion_getInstance_13() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function OutsideAlignment(horizontalBias, verticalBias) {
    Companion_getInstance_12();
    BiasAlignment.call(this, horizontalBias, verticalBias);
    this.ce0_1 = horizontalBias;
    this.de0_1 = verticalBias;
    this.ee0_1 = 0;
  }
  protoOf(OutsideAlignment).b5j = function (size, space, layoutDirection) {
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = this.ce0_1 * _IntSize___get_width__impl__d9yl4o(space);
    var tmp = roundToInt(this_0);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = this.de0_1 * _IntSize___get_height__impl__prv63b(space);
    var tmp$ret$1 = roundToInt(this_1);
    return IntOffset(tmp, tmp$ret$1);
  };
  function InsideAlignment(horizontalBias, verticalBias) {
    Companion_getInstance_13();
    BiasAlignment.call(this, horizontalBias, verticalBias);
    this.ie0_1 = horizontalBias;
    this.je0_1 = verticalBias;
    this.ke0_1 = 0;
  }
  protoOf(InsideAlignment).b5j = function (size, space, layoutDirection) {
    var centerX = (_IntSize___get_width__impl__d9yl4o(space) - _IntSize___get_width__impl__d9yl4o(size) | 0) / 2.0;
    var centerY = (_IntSize___get_height__impl__prv63b(space) - _IntSize___get_height__impl__prv63b(size) | 0) / 2.0;
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = this.ie0_1;
    } else {
      tmp = -1 * this.ie0_1;
    }
    var resolvedHorizontalBias = tmp;
    var x = centerX * (1 + resolvedHorizontalBias);
    var y = centerY * (1 + this.je0_1);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp_0 = roundToInt(x);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp$ret$1 = roundToInt(y);
    return IntOffset(tmp_0, tmp$ret$1);
  };
  function BiasAlignment(horizontalBias, verticalBias) {
    this.le0_1 = horizontalBias;
    this.me0_1 = verticalBias;
    this.ne0_1 = 0;
  }
  function PositionAlignment$Value$Companion$VectorConverter$lambda(it) {
    return new AnimationVector4D(it.oe0_1.ie0_1, it.oe0_1.je0_1, it.pe0_1.ce0_1, it.pe0_1.de0_1);
  }
  function PositionAlignment$Value$Companion$VectorConverter$lambda_0(it) {
    return new Value(new InsideAlignment(it.h8t_1, it.i8t_1), new OutsideAlignment(it.j8t_1, it.k8t_1));
  }
  function Companion_9() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = PositionAlignment$Value$Companion$VectorConverter$lambda;
    tmp.re0_1 = TwoWayConverter(tmp_0, PositionAlignment$Value$Companion$VectorConverter$lambda_0);
    this.se0_1 = new Value(new InsideAlignment(0.0, 0.0));
  }
  var Companion_instance_10;
  function Companion_getInstance_14() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function Target_init_$Init$($this) {
    Target_2.call($this, new Value(Companion_getInstance_13().qdz_1, Companion_getInstance_12().hdz_1));
    return $this;
  }
  function Target_init_$Create$() {
    return Target_init_$Init$(objectCreate(protoOf(Target_2)));
  }
  function Target_init_$Init$_0(outsideAlignment, $this) {
    Target_2.call($this, new Value(Companion_getInstance_13().qdz_1, outsideAlignment));
    return $this;
  }
  function Target_init_$Create$_0(outsideAlignment) {
    return Target_init_$Init$_0(outsideAlignment, objectCreate(protoOf(Target_2)));
  }
  function Value(insideAlignment, outsideAlignment) {
    Companion_getInstance_14();
    insideAlignment = insideAlignment === VOID ? Companion_getInstance_13().qdz_1 : insideAlignment;
    outsideAlignment = outsideAlignment === VOID ? Companion_getInstance_12().hdz_1 : outsideAlignment;
    this.oe0_1 = insideAlignment;
    this.pe0_1 = outsideAlignment;
    this.qe0_1 = 0;
  }
  protoOf(Value).b5j = function (size, space, layoutDirection) {
    // Inline function 'androidx.compose.ui.unit.IntOffset.plus' call
    var this_0 = this.oe0_1.b5j(size, space, layoutDirection);
    var other = this.pe0_1.b5j(size, space, layoutDirection);
    return IntOffset(_IntOffset___get_x__impl__qiqr5o(this_0) + _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj(this_0) + _IntOffset___get_y__impl__2avpwj(other) | 0);
  };
  protoOf(Value).toString = function () {
    return 'Value(insideAlignment=' + this.oe0_1 + ', outsideAlignment=' + this.pe0_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    var result = hashCode(this.oe0_1);
    result = imul(result, 31) + hashCode(this.pe0_1) | 0;
    return result;
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!equals(this.oe0_1, tmp0_other_with_cast.oe0_1))
      return false;
    if (!equals(this.pe0_1, tmp0_other_with_cast.pe0_1))
      return false;
    return true;
  };
  function Target_2(value, easing) {
    easing = easing === VOID ? null : easing;
    this.te0_1 = value;
    this.ue0_1 = easing;
    this.ve0_1 = 0;
  }
  function PositionAlignment$_get_modifier_$lambda_ubt1ir(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.f1x(-1716707306);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1716707306, $changed, -1, 'com.bumble.appyx.interactions.core.ui.property.impl.position.PositionAlignment.<get-modifier>.<anonymous> (PositionAlignment.kt:140)');
        tmp = Unit_instance;
      }
      var value = collectAsState$composable(this$0.ddv_1, null, $composer_0, 0, 1);
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalBoxScope();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.b20(this_0);
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
      var tmp0_0 = boxScope.n94($this$composed, value.u2());
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.h1x();
      return tmp0_0;
    };
  }
  function PositionAlignment(coroutineScope, target, displacement, visibilityThreshold) {
    displacement = displacement === VOID ? MutableStateFlow(Companion_getInstance_14().se0_1) : displacement;
    visibilityThreshold = visibilityThreshold === VOID ? new Value(new InsideAlignment(0.001, 0.001), new OutsideAlignment(0.001, 0.001)) : visibilityThreshold;
    MotionProperty.call(this, coroutineScope, new Animatable_0(target.te0_1, Companion_getInstance_14().re0_1), target.ue0_1, visibilityThreshold, displacement);
    this.je1_1 = target;
    this.ke1_1 = 0;
  }
  protoOf(PositionAlignment).le1 = function (base, displacement) {
    return new Value(new InsideAlignment(base.oe0_1.ie0_1 - displacement.oe0_1.ie0_1, base.oe0_1.je0_1 - displacement.oe0_1.je0_1), new OutsideAlignment(base.pe0_1.ce0_1 - displacement.pe0_1.ce0_1, base.pe0_1.de0_1 - displacement.pe0_1.de0_1));
  };
  protoOf(PositionAlignment).zdv = function (base, displacement) {
    var tmp = base instanceof Value ? base : THROW_CCE();
    return this.le1(tmp, displacement instanceof Value ? displacement : THROW_CCE());
  };
  protoOf(PositionAlignment).m5x = function () {
    var tmp = Companion_instance;
    return composed$composable(tmp, VOID, PositionAlignment$_get_modifier_$lambda_ubt1ir(this));
  };
  protoOf(PositionAlignment).me1 = function (start, end, fraction, $completion) {
    var progress = this.zdw(end.ue0_1, fraction);
    return this.d8p(new Value(new InsideAlignment(lerpFloat(start.te0_1.oe0_1.ie0_1, end.te0_1.oe0_1.ie0_1, progress), lerpFloat(start.te0_1.oe0_1.je0_1, end.te0_1.oe0_1.je0_1, progress)), new OutsideAlignment(lerpFloat(start.te0_1.pe0_1.ce0_1, end.te0_1.pe0_1.ce0_1, progress), lerpFloat(start.te0_1.pe0_1.de0_1, end.te0_1.pe0_1.de0_1, progress))), $completion);
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
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).xe1 = function ($this$combineInternal, it, $completion) {
    var tmp = this.ye1($this$combineInternal, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.xe1(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var booleanArray = this.we1_1;
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
            suspendResult = this.ve1_1.t13(tmp$ret$0, this);
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
  protoOf(BaseMutableUiState$isVisible$o$collect$slambda).ye1 = function ($this$combineInternal, it, completion) {
    var i = new BaseMutableUiState$isVisible$o$collect$slambda(completion);
    i.ve1_1 = $this$combineInternal;
    i.we1_1 = it;
    return i;
  };
  function BaseMutableUiState$isVisible$o$collect$slambda_0(resultContinuation) {
    var i = new BaseMutableUiState$isVisible$o$collect$slambda(resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.xe1($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.he2_1 = _this__u8e3s4;
    this.ie2_1 = collector;
  }
  protoOf($collectCOROUTINE$13).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.je2_1 = this.ie2_1;
            this.hb_1 = 1;
            var tmp_1 = BaseMutableUiState$isVisible$o$collect$lambda(this.he2_1.ke2_1);
            suspendResult = combineInternal(this.je2_1, this.he2_1.ke2_1, tmp_1, BaseMutableUiState$isVisible$o$collect$slambda_0(null), this);
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
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).xe1 = function ($this$combineInternal, it, $completion) {
    var tmp = this.ye1($this$combineInternal, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.xe1(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var booleanArray = this.ue2_1;
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
            suspendResult = this.te2_1.t13(tmp$ret$0, this);
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
  protoOf(BaseMutableUiState$isAnimating$o$collect$slambda).ye1 = function ($this$combineInternal, it, completion) {
    var i = new BaseMutableUiState$isAnimating$o$collect$slambda(completion);
    i.te2_1 = $this$combineInternal;
    i.ue2_1 = it;
    return i;
  };
  function BaseMutableUiState$isAnimating$o$collect$slambda_0(resultContinuation) {
    var i = new BaseMutableUiState$isAnimating$o$collect$slambda(resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.xe1($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.de3_1 = _this__u8e3s4;
    this.ee3_1 = collector;
  }
  protoOf($collectCOROUTINE$14).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.fe3_1 = this.ee3_1;
            this.hb_1 = 1;
            var tmp_1 = BaseMutableUiState$isAnimating$o$collect$lambda(this.de3_1.ge3_1);
            suspendResult = combineInternal(this.fe3_1, this.de3_1.ge3_1, tmp_1, BaseMutableUiState$isAnimating$o$collect$slambda_0(null), this);
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
  function isVisibleInParent(_this__u8e3s4, $this) {
    var boundsInParent_0 = boundsInParent(_this__u8e3s4);
    return boundsInParent_0.r39($this.je3_1);
  }
  function isVisibleInWindow(_this__u8e3s4, $this) {
    var boundsInWindow_0 = boundsInWindow(_this__u8e3s4);
    return boundsInWindow_0.k39() > 0.0 ? boundsInWindow_0.l39() > 0.0 : false;
  }
  function BaseMutableUiState$sizeChangedModifier$lambda(this$0) {
    return function (size) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.flow.update' call
        var this_0 = this$0.ne3_1;
        while (true) {
          var prevValue = this_0.u2().p3c_1;
          // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.sizeChangedModifier.<anonymous>.<anonymous>' call
          var nextValue = size.p3c_1;
          if (this_0.i1a(new IntSize(prevValue), new IntSize(nextValue))) {
            break $l$block;
          }
        }
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_10($flowArray) {
    this.ke2_1 = $flowArray;
  }
  protoOf(_no_name_provided__qut3iv_10).re3 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_10).g13 = function (collector, $completion) {
    return this.re3(collector, $completion);
  };
  function BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z($this$graphicsLayer) {
    $this$graphicsLayer.o42(0.0);
    return Unit_instance;
  }
  function invoke$lambda($size$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('size', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $size$delegate.u2().p3c_1;
  }
  function BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_0(this$0) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.f1x(504107695);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(504107695, $changed, -1, 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.<get-visibilityModifier>.<anonymous> (BaseMutableUiState.kt:85)');
        tmp = Unit_instance;
      }
      var size$delegate = collectAsState$composable(this$0.ne3_1, null, $composer_0, 0, 1);
      var tmp_0;
      if (!equals(invoke$lambda(size$delegate), Companion_getInstance_3().o3c_1)) {
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.b20(this_0);
        sourceInformationMarkerEnd($composer_1);
        var localDensity = tmp0.h3b();
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
        tmp_2 = Unit_instance;
      }
      $composer_0.h1x();
      return tmp0_0;
    };
  }
  function BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_1(this$0) {
    return function (coordinates) {
      var tmp;
      if (this$0.he3_1.idu_1) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlinx.coroutines.flow.update' call
          var this_0 = this$0.le3_1;
          while (true) {
            var prevValue = this_0.u2();
            // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.<get-visibilityModifier>.<anonymous>.<anonymous>' call
            var nextValue = isVisibleInParent(coordinates, this$0) ? isVisibleInWindow(coordinates, this$0) : false;
            if (this_0.i1a(prevValue, nextValue)) {
              tmp$ret$1 = Unit_instance;
              break $l$block;
            }
          }
        }
        tmp = tmp$ret$1;
      } else {
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.flow.update' call
          var this_1 = this$0.le3_1;
          while (true) {
            var prevValue_0 = this_1.u2();
            // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.<get-visibilityModifier>.<anonymous>.<anonymous>' call
            var nextValue_0 = isVisibleInWindow(coordinates, this$0);
            if (this_1.i1a(prevValue_0, nextValue_0)) {
              tmp$ret$3 = Unit_instance;
              break $l$block_0;
            }
          }
        }
        tmp = tmp$ret$3;
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_11($flowArray) {
    this.ge3_1 = $flowArray;
  }
  protoOf(_no_name_provided__qut3iv_11).re3 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_11).g13 = function (collector, $completion) {
    return this.re3(collector, $completion);
  };
  function BaseMutableUiState(uiContext, motionProperties) {
    this.he3_1 = uiContext;
    this.ie3_1 = motionProperties;
    this.je3_1 = Rect(Companion_getInstance_0().z38_1, Size(0.0, 0.0));
    var tmp = this;
    var tmp_0 = Companion_instance;
    tmp.ke3_1 = onSizeChanged(tmp_0, BaseMutableUiState$sizeChangedModifier$lambda(this));
    this.le3_1 = MutableStateFlow(false);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = this.ie3_1;
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.visibilitySources.<anonymous>' call
      var tmp0_safe_receiver = element.ydw();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.s(tmp0_safe_receiver);
      }
    }
    tmp_1.me3_1 = plus_1(destination, this.le3_1);
    this.ne3_1 = MutableStateFlow(new IntSize(Companion_getInstance_3().o3c_1));
    var tmp_2 = this;
    // Inline function 'com.bumble.appyx.combineState' call
    var flows = this.me3_1;
    var scope = this.he3_1.hdu_1;
    var sharingStarted = Companion_getInstance().e18_1;
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
    var tmp0_iterator_0 = flows.v();
    while (tmp0_iterator_0.w()) {
      var item = tmp0_iterator_0.y();
      // Inline function 'com.bumble.appyx.combineState.<anonymous>' call
      var tmp$ret$7 = item.u2();
      destination_0.s(tmp$ret$7);
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
    tmp_2.oe3_1 = stateIn(tmp_3, scope, sharingStarted, tmp$ret$13);
    var tmp_4 = this;
    // Inline function 'kotlinx.coroutines.flow.combine' call
    // Inline function 'kotlin.collections.map' call
    var this_2 = this.ie3_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator_1 = this_2.v();
    while (tmp0_iterator_1.w()) {
      var item_0 = tmp0_iterator_1.y();
      // Inline function 'com.bumble.appyx.interactions.core.ui.state.BaseMutableUiState.isAnimating.<anonymous>' call
      var tmp$ret$15 = item_0.xdw();
      destination_1.s(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_3 = toList(destination_1);
    var flowArray_0 = copyToArray(this_3);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp_4.pe3_1 = new _no_name_provided__qut3iv_11(flowArray_0);
    this.qe3_1 = 8;
  }
  protoOf(BaseMutableUiState).m5x = function () {
    return this.se3().c5j(this.ke3_1);
  };
  protoOf(BaseMutableUiState).te3 = function () {
    var tmp = Companion_instance;
    var tmp_0 = graphicsLayer(tmp, BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z).c5j(this.se3());
    var tmp_1 = composed$composable(tmp_0, VOID, BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_0(this));
    return onGloballyPositioned(tmp_1, BaseMutableUiState$_get_visibilityModifier_$lambda_bt3f8z_1(this));
  };
  protoOf(BaseMutableUiState).zdc = function (transitionBounds) {
    this.je3_1 = Rect(Companion_getInstance_0().z38_1, Size(transitionBounds.vdf_1, transitionBounds.wdf_1));
  };
  function MatchedTargetUiState(element, targetUiState) {
    this.xe3_1 = element;
    this.ye3_1 = targetUiState;
    this.ze3_1 = 0;
  }
  protoOf(MatchedTargetUiState).toString = function () {
    return 'MatchedTargetUiState(element=' + this.xe3_1 + ', targetUiState=' + this.ye3_1 + ')';
  };
  protoOf(MatchedTargetUiState).hashCode = function () {
    var result = this.xe3_1.hashCode();
    result = imul(result, 31) + (this.ye3_1 == null ? 0 : hashCode(this.ye3_1)) | 0;
    return result;
  };
  protoOf(MatchedTargetUiState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MatchedTargetUiState))
      return false;
    var tmp0_other_with_cast = other instanceof MatchedTargetUiState ? other : THROW_CCE();
    if (!this.xe3_1.equals(tmp0_other_with_cast.xe3_1))
      return false;
    if (!equals(this.ye3_1, tmp0_other_with_cast.ye3_1))
      return false;
    return true;
  };
  var ViewpointBehaviour_SNAP_instance;
  var ViewpointBehaviour_ANIMATE_instance;
  var ViewpointBehaviour_entriesInitialized;
  function ViewpointBehaviour_initEntries() {
    if (ViewpointBehaviour_entriesInitialized)
      return Unit_instance;
    ViewpointBehaviour_entriesInitialized = true;
    ViewpointBehaviour_SNAP_instance = new ViewpointBehaviour('SNAP', 0);
    ViewpointBehaviour_ANIMATE_instance = new ViewpointBehaviour('ANIMATE', 1);
  }
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
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).xe1 = function ($this$combineInternal, it, $completion) {
    var tmp = this.ye1($this$combineInternal, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.xe1(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var values = this.je4_1;
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
            suspendResult = this.ie4_1.t13(tmp$ret$0, this);
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
  protoOf(BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn).ye1 = function ($this$combineInternal, it, completion) {
    var i = new BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn(completion);
    i.ie4_1 = $this$combineInternal;
    i.je4_1 = it;
    return i;
  };
  function BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn_0(resultContinuation) {
    var i = new BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn(resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.xe1($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$17(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.se4_1 = _this__u8e3s4;
    this.te4_1 = collector;
  }
  protoOf($collectCOROUTINE$17).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.ue4_1 = this.te4_1;
            this.hb_1 = 1;
            var tmp_1 = BaseVisualisation$_get_viewpointIsAnimating_$o$collect$lambda_ft2y4u(this.se4_1.ve4_1);
            suspendResult = combineInternal(this.ue4_1, this.se4_1.ve4_1, tmp_1, BaseVisualisation$_get_viewpointIsAnimating_$o$collect$slambda_tki8nn_0(null), this);
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
  function BaseVisualisation$mapSegment$slambda$slambda(this$0, $segment, resultContinuation) {
    this.ee5_1 = this$0;
    this.fe5_1 = $segment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).pdn = function (it, $completion) {
    var tmp = this.qdn(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).fc = function (p1, $completion) {
    return this.pdn((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = updateViewpoint_0(this.ee5_1, this.fe5_1, this.ge5_1, this);
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
  protoOf(BaseVisualisation$mapSegment$slambda$slambda).qdn = function (it, completion) {
    var i = new BaseVisualisation$mapSegment$slambda$slambda(this.ee5_1, this.fe5_1, completion);
    i.ge5_1 = it;
    return i;
  };
  function BaseVisualisation$mapSegment$slambda$slambda_0(this$0, $segment, resultContinuation) {
    var i = new BaseVisualisation$mapSegment$slambda$slambda(this$0, $segment, resultContinuation);
    var l = function (it, $completion) {
      return i.pdn(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ManageAnimations$composable$slambda$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    this.pe5_1 = $update;
    this.qe5_1 = $mutableUiState;
    this.re5_1 = $matchedTargetUiState;
    this.se5_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            if (this.pe5_1.wdm_1) {
              this.hb_1 = 2;
              suspendResult = this.qe5_1.we3(this.te5_1, this.re5_1.ye3_1, this.se5_1.be6_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 1;
              suspendResult = this.qe5_1.ue3(this.re5_1.ye3_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.hb_1 = 3;
            continue $sm;
          case 2:
            this.hb_1 = 3;
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
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda$slambda).w1b = function ($this$launch, completion) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda$slambda(this.pe5_1, this.qe5_1, this.re5_1, this.se5_1, completion);
    i.te5_1 = $this$launch;
    return i;
  };
  function BaseVisualisation$ManageAnimations$composable$slambda$slambda_0($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda(this$0, $matchedTargetUiState, resultContinuation) {
    this.oe6_1 = this$0;
    this.pe6_1 = $matchedTargetUiState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).te6 = function (values, $completion) {
    var tmp = this.ue6(values, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).fc = function (p1, $completion) {
    return this.te6(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.qe6_1.fd3_1;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.re6_1 = tmp_1;
            this.se6_1 = this.qe6_1.z1v();
            if (this.se6_1 ? !this.re6_1 : false) {
              var this_0 = this.oe6_1.ze5_1;
              var key = this.pe6_1.xe3_1.dd6_1;
              this_0.r2(key, true);
              l$ret$1: do {
                var this_1 = this.oe6_1.ae6_1;
                while (true) {
                  var prevValue = this_1.u2();
                  var nextValue = true;
                  if (this_1.i1a(prevValue, nextValue)) {
                    break l$ret$1;
                  }
                }
              }
               while (false);
              AppyxLogger_getInstance().dd3('BaseMotionController', 'animation for element ' + this.pe6_1.xe3_1.dd6_1 + ' is started');
              this.hb_1 = 3;
              continue $sm;
            } else {
              this.hb_1 = 1;
              suspendResult = this.oe6_1.ce6_1.t13(this.pe6_1.xe3_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var this_2 = this.oe6_1.ze5_1;
            var key_0 = this.pe6_1.xe3_1.dd6_1;
            this_2.r2(key_0, false);
            l$ret$5: do {
              var this_3 = this.oe6_1.ae6_1;
              while (true) {
                var prevValue_0 = this_3.u2();
                var tmp$ret$2;
                l$ret$3: do {
                  var this_4 = this.oe6_1.ze5_1;
                  if (this_4.e1()) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  }
                  var tmp0_iterator = this_4.q2().v();
                  while (tmp0_iterator.w()) {
                    var element = tmp0_iterator.y();
                    if (element.u2()) {
                      tmp$ret$2 = true;
                      break l$ret$3;
                    }
                  }
                  tmp$ret$2 = false;
                }
                 while (false);
                var nextValue_0 = tmp$ret$2;
                if (this_3.i1a(prevValue_0, nextValue_0)) {
                  break l$ret$5;
                }
              }
            }
             while (false);
            AppyxLogger_getInstance().dd3('BaseMotionController', 'animation for element ' + this.pe6_1.xe3_1.dd6_1 + ' is finished');
            this.hb_1 = 3;
            continue $sm;
          case 2:
            throw this.kb_1;
          case 3:
            return Unit_instance;
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda).ue6 = function (values, completion) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda(this.oe6_1, this.pe6_1, completion);
    i.qe6_1 = values;
    return i;
  };
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda_0(this$0, $matchedTargetUiState, resultContinuation) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda(this$0, $matchedTargetUiState, resultContinuation);
    var l = function (values, $completion) {
      return i.te6(values, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    this.de7_1 = $mutableUiState;
    this.ee7_1 = this$0;
    this.fe7_1 = $matchedTargetUiState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = withPrevious(distinctUntilChanged(this.de7_1.pe3_1));
            var tmp_1 = BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda$slambda_0(this.ee7_1, this.fe7_1, null);
            suspendResult = tmp_0.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_12(tmp_1), this);
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda).w1b = function ($this$launch, completion) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda(this.de7_1, this.ee7_1, this.fe7_1, completion);
    i.ge7_1 = $this$launch;
    return i;
  };
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda_0($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_viewpointIsAnimating__nlgw0y($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.he7().e1()) {
      // Inline function 'com.bumble.appyx.combineState' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = $this.he7();
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.v();
      while (tmp0_iterator.w()) {
        var item = tmp0_iterator.y();
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-viewpointIsAnimating>.<anonymous>' call
        var tmp$ret$1 = item.wd_1.xdw();
        destination.s(tmp$ret$1);
      }
      var scope = $this.ue5_1.hdu_1;
      var sharingStarted = Companion_getInstance().e18_1;
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
      var tmp0_iterator_0 = destination.v();
      while (tmp0_iterator_0.w()) {
        var item_0 = tmp0_iterator_0.y();
        // Inline function 'com.bumble.appyx.combineState.<anonymous>' call
        var tmp$ret$7 = item_0.u2();
        destination_0.s(tmp$ret$7);
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
  function _get_isAnimatingState__x32vxu($this) {
    // Inline function 'com.bumble.appyx.combineState' call
    var this_0 = $this.ae6_1;
    var flow = _get_viewpointIsAnimating__nlgw0y($this);
    var scope = $this.ue5_1.hdu_1;
    var sharingStarted = Companion_getInstance().e18_1;
    var tmp = combine_0(this_0, flow, BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy_0(null));
    // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.<get-isAnimatingState>.<anonymous>' call
    var b1 = this_0.u2();
    var b2 = flow.u2();
    var tmp$ret$0 = b1 ? true : b2;
    return stateIn(tmp, scope, sharingStarted, tmp$ret$0);
  }
  function cleanUpCacheForDestroyedElements($this, matchedTargetUiStates) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(matchedTargetUiStates, 10));
    var tmp0_iterator = matchedTargetUiStates.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.cleanUpCacheForDestroyedElements.<anonymous>' call
      var tmp$ret$0 = item.xe3_1.dd6_1;
      destination.s(tmp$ret$0);
    }
    var availableIds = destination;
    var iterator = $this.ye5_1.o2().v();
    while (iterator.w()) {
      var key = iterator.y();
      if (!availableIds.r(key)) {
        iterator.x();
      }
    }
  }
  function updateViewpoint($this, update, $completion) {
    var tmp = new $updateViewpointCOROUTINE$15($this, update, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function updateViewpoint_0($this, segment, segmentProgress, $completion) {
    var tmp = new $updateViewpointCOROUTINE$16($this, segment, segmentProgress, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function viewpointTargetValue($this, segment, segmentProgress, fieldOfState) {
    var fromValue = fieldOfState(segment.hdm());
    var targetValue = fieldOfState(segment.x8z());
    return fromValue === targetValue ? to(ViewpointBehaviour_ANIMATE_getInstance(), targetValue) : to(ViewpointBehaviour_SNAP_getInstance(), lerpFloat(fromValue, targetValue, segmentProgress));
  }
  function ViewpointBehaviour(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_10() {
    this.ve8_1 = 'BaseMotionController';
  }
  var Companion_instance_11;
  function Companion_getInstance_15() {
    return Companion_instance_11;
  }
  function ManageAnimations$composable($this, mutableUiState, matchedTargetUiState, update, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1718546927);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1718546927, $dirty, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.ManageAnimations$composable (BaseVisualisation.kt:145)');
    }
    LaunchedEffect$composable(update, $this, BaseVisualisation$ManageAnimations$composable$slambda_0(update, mutableUiState, matchedTargetUiState, $this, null), $composer_0, 64 | 14 & $dirty >> 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.d1z();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.w2e(BaseVisualisation$ManageAnimations$composable$lambda($this, mutableUiState, matchedTargetUiState, update, $changed));
    }
  }
  function ObserveElementAnimationChanges$composable($this, mutableUiState, matchedTargetUiState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-18912775);
    if (isTraceInProgress()) {
      traceEventStart(-18912775, $changed, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.ObserveElementAnimationChanges$composable (BaseVisualisation.kt:167)');
    }
    LaunchedEffect$composable_0($this, BaseVisualisation$ObserveElementAnimationChanges$composable$slambda_0(mutableUiState, $this, matchedTargetUiState, null), $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.d1z();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.w2e(BaseVisualisation$ObserveElementAnimationChanges$composable$lambda($this, mutableUiState, matchedTargetUiState, $changed));
    }
  }
  function InterpolateUiState$composable($this, segmentProgress, mutableUiState, from, to, initialProgress, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1618256231);
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
    var tmp1_safe_receiver = $composer_0.d1z();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.w2e(BaseVisualisation$InterpolateUiState$composable$lambda($this, segmentProgress, mutableUiState, from, to, initialProgress, $changed));
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_11(function_0) {
    this.we8_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_11).t13 = function (value, $completion) {
    return this.we8_1(value, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_12(function_0) {
    this.xe8_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_12).t13 = function (value, $completion) {
    return this.xe8_1(value, $completion);
  };
  function InterpolateUiState$composable$lambda($progress$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('progress', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $progress$delegate.u2();
  }
  function _no_name_provided__qut3iv_12($flowArray) {
    this.ve4_1 = $flowArray;
  }
  protoOf(_no_name_provided__qut3iv_12).re3 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$17(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_12).g13 = function (collector, $completion) {
    return this.re3(collector, $completion);
  };
  function BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).ie9 = function (one, two, $completion) {
    var tmp = this.je9(one, two, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE();
    return this.ie9(tmp, (!(p2 == null) ? typeof p2 === 'boolean' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          var b1 = this.ge9_1;
          var b2 = this.he9_1;
          return b1 ? true : b2;
        } else if (tmp === 1) {
          throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy).je9 = function (one, two, completion) {
    var i = new BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy(completion);
    i.ge9_1 = one;
    i.he9_1 = two;
    return i;
  };
  function BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy_0(resultContinuation) {
    var i = new BaseVisualisation$_get_isAnimatingState_$slambda_nb8zvy(resultContinuation);
    var l = function (one, two, $completion) {
      return i.ie9(one, two, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function BaseVisualisation$mapUpdate$slambda(this$0, $update, resultContinuation) {
    this.se9_1 = this$0;
    this.te9_1 = $update;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$mapUpdate$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$mapUpdate$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$mapUpdate$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = updateViewpoint(this.se9_1, this.te9_1, this);
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
  protoOf(BaseVisualisation$mapUpdate$slambda).w1b = function ($this$launch, completion) {
    var i = new BaseVisualisation$mapUpdate$slambda(this.se9_1, this.te9_1, completion);
    i.ue9_1 = $this$launch;
    return i;
  };
  function BaseVisualisation$mapUpdate$slambda_0(this$0, $update, resultContinuation) {
    var i = new BaseVisualisation$mapUpdate$slambda(this$0, $update, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function BaseVisualisation$mapUpdate$lambda($mutableUiState, this$0, $t1, $update) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(842344782, $changed, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>.<anonymous> (BaseVisualisation.kt:116)');
        }
        Box$composable($mutableUiState.te3(), $composer_0, 0);
        ObserveElementAnimationChanges$composable(this$0, $mutableUiState, $t1, $composer_0, 512);
        ManageAnimations$composable(this$0, $mutableUiState, $t1, $update, $composer_0, 4096);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BaseVisualisation$updateViewpoint$lambda($targetValue) {
    return function ($this$animateTo) {
      AppyxLogger_getInstance().dd3('BaseMotionController', 'Viewpoint animateTo (Update) \u2013 ' + $targetValue);
      return Unit_instance;
    };
  }
  function BaseVisualisation$mapSegment$slambda($segmentProgress, this$0, $segment, resultContinuation) {
    this.dea_1 = $segmentProgress;
    this.eea_1 = this$0;
    this.fea_1 = $segment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$mapSegment$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$mapSegment$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$mapSegment$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = BaseVisualisation$mapSegment$slambda$slambda_0(this.eea_1, this.fea_1, null);
            suspendResult = this.dea_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_11(tmp_0), this);
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
  protoOf(BaseVisualisation$mapSegment$slambda).w1b = function ($this$launch, completion) {
    var i = new BaseVisualisation$mapSegment$slambda(this.dea_1, this.eea_1, this.fea_1, completion);
    i.gea_1 = $this$launch;
    return i;
  };
  function BaseVisualisation$mapSegment$slambda_0($segmentProgress, this$0, $segment, resultContinuation) {
    var i = new BaseVisualisation$mapSegment$slambda($segmentProgress, this$0, $segment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function BaseVisualisation$mapSegment$lambda($mutableUiState, this$0, $segmentProgress, $t0, $t1, $initialProgress) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1059286326, $changed, -1, 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous> (BaseVisualisation.kt:244)');
        }
        Box$composable($mutableUiState.te3(), $composer_0, 0);
        InterpolateUiState$composable(this$0, $segmentProgress, $mutableUiState, $t0, $t1, $initialProgress, $composer_0, 262144);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BaseVisualisation$updateViewpoint$lambda_0($viewpointDimension, $targetValue) {
    return function ($this$animateTo) {
      AppyxLogger_getInstance().dd3('BaseMotionController', 'Viewpoint animateTo (Segment) \u2013 ' + $viewpointDimension.hdv() + ' -> ' + $targetValue);
      return Unit_instance;
    };
  }
  function BaseVisualisation$ManageAnimations$composable$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    this.pea_1 = $update;
    this.qea_1 = $mutableUiState;
    this.rea_1 = $matchedTargetUiState;
    this.sea_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          launch(this.tea_1, VOID, VOID, BaseVisualisation$ManageAnimations$composable$slambda$slambda_0(this.pea_1, this.qea_1, this.rea_1, this.sea_1, null));
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
  protoOf(BaseVisualisation$ManageAnimations$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda(this.pea_1, this.qea_1, this.rea_1, this.sea_1, completion);
    i.tea_1 = $this$LaunchedEffect;
    return i;
  };
  function BaseVisualisation$ManageAnimations$composable$slambda_0($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation) {
    var i = new BaseVisualisation$ManageAnimations$composable$slambda($update, $mutableUiState, $matchedTargetUiState, this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ManageAnimations$composable$lambda($tmp0_rcvr, $mutableUiState, $matchedTargetUiState, $update, $$changed) {
    return function ($composer, $force) {
      ManageAnimations$composable($tmp0_rcvr, $mutableUiState, $matchedTargetUiState, $update, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    this.ceb_1 = $mutableUiState;
    this.deb_1 = this$0;
    this.eeb_1 = $matchedTargetUiState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          launch(this.feb_1, VOID, VOID, BaseVisualisation$ObserveElementAnimationChanges$composable$slambda$slambda_0(this.ceb_1, this.deb_1, this.eeb_1, null));
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
  protoOf(BaseVisualisation$ObserveElementAnimationChanges$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda(this.ceb_1, this.deb_1, this.eeb_1, completion);
    i.feb_1 = $this$LaunchedEffect;
    return i;
  };
  function BaseVisualisation$ObserveElementAnimationChanges$composable$slambda_0($mutableUiState, this$0, $matchedTargetUiState, resultContinuation) {
    var i = new BaseVisualisation$ObserveElementAnimationChanges$composable$slambda($mutableUiState, this$0, $matchedTargetUiState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$ObserveElementAnimationChanges$composable$lambda($tmp0_rcvr, $mutableUiState, $matchedTargetUiState, $$changed) {
    return function ($composer, $force) {
      ObserveElementAnimationChanges$composable($tmp0_rcvr, $mutableUiState, $matchedTargetUiState, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function BaseVisualisation$InterpolateUiState$composable$slambda($mutableUiState, this$0, $from, $to, $progress$delegate, resultContinuation) {
    this.oeb_1 = $mutableUiState;
    this.peb_1 = this$0;
    this.qeb_1 = $from;
    this.reb_1 = $to;
    this.seb_1 = $progress$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          this.oeb_1.ve3(this.peb_1.xe5_1, this.qeb_1.ye3_1, this.reb_1.ye3_1, InterpolateUiState$composable$lambda(this.seb_1));
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
  protoOf(BaseVisualisation$InterpolateUiState$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new BaseVisualisation$InterpolateUiState$composable$slambda(this.oeb_1, this.peb_1, this.qeb_1, this.reb_1, this.seb_1, completion);
    i.teb_1 = $this$LaunchedEffect;
    return i;
  };
  function BaseVisualisation$InterpolateUiState$composable$slambda_0($mutableUiState, this$0, $from, $to, $progress$delegate, resultContinuation) {
    var i = new BaseVisualisation$InterpolateUiState$composable$slambda($mutableUiState, this$0, $from, $to, $progress$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function BaseVisualisation$InterpolateUiState$composable$lambda($tmp0_rcvr, $segmentProgress, $mutableUiState, $from, $to, $initialProgress, $$changed) {
    return function ($composer, $force) {
      InterpolateUiState$composable($tmp0_rcvr, $segmentProgress, $mutableUiState, $from, $to, $initialProgress, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
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
    this.qe7_1 = _this__u8e3s4;
    this.re7_1 = update;
  }
  protoOf($updateViewpointCOROUTINE$15).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            var tmp_0 = this;
            tmp_0.se7_1 = this.qe7_1.he7();
            this.te7_1 = this.se7_1.v();
            this.hb_1 = 1;
            continue $sm;
          case 1:
            if (!this.te7_1.w()) {
              this.hb_1 = 3;
              continue $sm;
            }

            this.ue7_1 = this.te7_1.y();
            var tmp_1 = this;
            tmp_1.ve7_1 = this.ue7_1;
            this.we7_1 = this.ve7_1.ae();
            this.xe7_1 = this.ve7_1.be();
            this.ye7_1 = this.we7_1(this.re7_1.vdm_1);
            this.hb_1 = 2;
            var tmp0_stiffness = this.qe7_1.be6_1.j8p_1;
            var tmp1_dampingRatio = this.qe7_1.be6_1.i8p_1;
            var tmp_2 = spring(tmp1_dampingRatio, tmp0_stiffness);
            suspendResult = this.xe7_1.adx(this.ye7_1, tmp_2, BaseVisualisation$updateViewpoint$lambda(this.ye7_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  function $updateViewpointCOROUTINE$16(_this__u8e3s4, segment, segmentProgress, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.he8_1 = _this__u8e3s4;
    this.ie8_1 = segment;
    this.je8_1 = segmentProgress;
  }
  protoOf($updateViewpointCOROUTINE$16).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 7;
            var tmp_0 = this;
            tmp_0.ke8_1 = this.he8_1.he7();
            this.le8_1 = this.ke8_1.v();
            this.hb_1 = 1;
            continue $sm;
          case 1:
            if (!this.le8_1.w()) {
              this.hb_1 = 6;
              continue $sm;
            }

            this.me8_1 = this.le8_1.y();
            var tmp_1 = this;
            tmp_1.ne8_1 = this.me8_1;
            this.oe8_1 = this.ne8_1.ae();
            this.pe8_1 = this.ne8_1.be();
            this.qe8_1 = viewpointTargetValue(this.he8_1, this.ie8_1, this.je8_1, this.oe8_1);
            this.re8_1 = this.qe8_1.ae();
            this.se8_1 = this.qe8_1.be();
            this.te8_1 = this.re8_1;
            this.ue8_1 = this.te8_1.j9_1;
            if (this.ue8_1 === 0) {
              this.hb_1 = 4;
              suspendResult = this.pe8_1.d8p(this.se8_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.ue8_1 === 1) {
                if (!(this.pe8_1.hdv() === this.se8_1)) {
                  this.hb_1 = 2;
                  var tmp2_stiffness = this.he8_1.be6_1.j8p_1;
                  var tmp3_dampingRatio = this.he8_1.be6_1.i8p_1;
                  var tmp_2 = spring(tmp3_dampingRatio, tmp2_stiffness);
                  suspendResult = this.pe8_1.adx(this.se8_1, tmp_2, BaseVisualisation$updateViewpoint$lambda_0(this.pe8_1, this.se8_1), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.hb_1 = 3;
                  continue $sm;
                }
              } else {
                this.hb_1 = 5;
                continue $sm;
              }
            }

          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.hb_1 = 5;
            continue $sm;
          case 4:
            AppyxLogger_getInstance().dd3('BaseMotionController', 'Viewpoint snapTo (Segment): ' + this.se8_1);
            this.hb_1 = 5;
            continue $sm;
          case 5:
            this.hb_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 7) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function BaseVisualisation(uiContext, defaultAnimationSpec) {
    defaultAnimationSpec = defaultAnimationSpec === VOID ? get_DefaultAnimationSpec() : defaultAnimationSpec;
    this.ue5_1 = uiContext;
    this.ve5_1 = defaultAnimationSpec;
    this.we5_1 = emptyList();
    this.xe5_1 = this.ue5_1.hdu_1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ye5_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.ze5_1 = LinkedHashMap_init_$Create$();
    this.ae6_1 = MutableStateFlow(false);
    this.be6_1 = this.ve5_1;
    this.ce6_1 = MutableSharedFlow();
    this.de6_1 = this.ce6_1;
    this.ee6_1 = Companion_getInstance_10().pdf_1;
    this.fe6_1 = 8;
  }
  protoOf(BaseVisualisation).he7 = function () {
    return this.we5_1;
  };
  protoOf(BaseVisualisation).bdf = function () {
    return this.de6_1;
  };
  protoOf(BaseVisualisation).zdc = function (transitionBounds) {
    this.ee6_1 = transitionBounds;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.ye5_1.p2().v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.updateBounds.<anonymous>' call
      element.zdc(transitionBounds);
    }
  };
  protoOf(BaseVisualisation).gdg = function (springSpec) {
    this.be6_1 = springSpec;
  };
  protoOf(BaseVisualisation).pde = function () {
    return _get_isAnimatingState__x32vxu(this);
  };
  protoOf(BaseVisualisation).fdu = function (update) {
    var matchedTargetUiStates = this.ueb(update.vdm_1);
    cleanUpCacheForDestroyedElements(this, matchedTargetUiStates);
    launch(this.xe5_1, VOID, VOID, BaseVisualisation$mapUpdate$slambda_0(this, update, null));
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(matchedTargetUiStates, 10));
    var tmp0_iterator = matchedTargetUiStates.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>' call
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = this.ye5_1;
      var key = item.xe3_1.dd6_1;
      var value = this_0.b3(key);
      var tmp;
      if (value == null) {
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.apply' call
        var this_1 = this.veb(this.ue5_1, item.ye3_1);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapUpdate.<anonymous>.<anonymous>.<anonymous>' call
        this_1.zdc(this.ee6_1);
        var answer = this_1;
        this_0.r2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var mutableUiState = tmp;
      var tmp0_element = item.xe3_1;
      var tmp1_visibleState = mutableUiState.oe3_1;
      var tmp2_motionProperties = mutableUiState.ie3_1;
      var tmp3_modifier = mutableUiState.m5x();
      var tmp4_progress = MutableStateFlow(1.0);
      var tmp$ret$3 = new ElementUiModel(tmp0_element, tmp1_visibleState, tmp2_motionProperties, ComposableLambda$invoke$ref(composableLambdaInstance(842344782, true, BaseVisualisation$mapUpdate$lambda(mutableUiState, this, item, update))), tmp3_modifier, tmp4_progress);
      destination.s(tmp$ret$3);
    }
    return destination;
  };
  protoOf(BaseVisualisation).gdu = function (segment, segmentProgress, initialProgress) {
    var tmp0_container = segment.fdm_1;
    var fromState = tmp0_container.ae();
    var targetState = tmp0_container.be();
    var fromTargetUiState = this.ueb(fromState);
    var toTargetUiState = this.ueb(targetState);
    cleanUpCacheForDestroyedElements(this, toTargetUiState);
    launch(this.xe5_1, VOID, VOID, BaseVisualisation$mapSegment$slambda_0(segmentProgress, this, segment, null));
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(toTargetUiState, 10));
    var tmp0_iterator = toTargetUiState.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>' call
      // Inline function 'kotlin.collections.find' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = fromTargetUiState.v();
        while (tmp0_iterator_0.w()) {
          var element = tmp0_iterator_0.y();
          // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous>' call
          if (element.xe3_1.dd6_1 === item.xe3_1.dd6_1) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp$ret$2 = tmp$ret$1;
      var t0 = ensureNotNull(tmp$ret$2);
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = this.ye5_1;
      var key = item.xe3_1.dd6_1;
      var value = this_0.b3(key);
      var tmp;
      if (value == null) {
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.apply' call
        var this_1 = this.veb(this.ue5_1, t0.ye3_1);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.bumble.appyx.transitionmodel.BaseVisualisation.mapSegment.<anonymous>.<anonymous>.<anonymous>' call
        this_1.zdc(this.ee6_1);
        var answer = this_1;
        this_0.r2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var mutableUiState = tmp;
      mutableUiState.ve3(this.xe5_1, t0.ye3_1, item.ye3_1, initialProgress);
      var tmp0_element = item.xe3_1;
      var tmp1_visibleState = mutableUiState.oe3_1;
      var tmp2_motionProperties = mutableUiState.ie3_1;
      var tmp3_modifier = mutableUiState.m5x();
      var tmp$ret$6 = new ElementUiModel(tmp0_element, tmp1_visibleState, tmp2_motionProperties, ComposableLambda$invoke$ref_0(composableLambdaInstance(1059286326, true, BaseVisualisation$mapSegment$lambda(mutableUiState, this, segmentProgress, t0, item, initialProgress))), tmp3_modifier, segmentProgress);
      destination.s(tmp$ret$6);
    }
    return destination;
  };
  function SystemClock() {
    SystemClock_instance = this;
    this.idv_1 = new Long(1000000, 0);
    this.jdv_1 = 0;
  }
  protoOf(SystemClock).kdv = function () {
    return roundToLong(window.performance.now() * (new Long(1000000, 0)).b7());
  };
  var SystemClock_instance;
  function SystemClock_getInstance() {
    if (SystemClock_instance == null)
      new SystemClock();
    return SystemClock_instance;
  }
  function UUID() {
    this.ad6_1 = 0;
  }
  protoOf(UUID).bd6 = function () {
    return Uuid.v4();
  };
  var UUID_instance;
  function UUID_getInstance() {
    return UUID_instance;
  }
  //region block: post-declaration
  protoOf(BaseTransitionModel).ydj = operation$default;
  protoOf(BaseTransitionModel).hdk = canApply;
  protoOf(OnPointerEventNode).f6s = interceptOutOfBoundsChildEvents;
  protoOf(OnPointerEventNode).d6s = onDensityChange;
  protoOf(OnPointerEventNode).e6s = onViewConfigurationChange;
  protoOf(Noop_1).idk = get_isContinuous;
  protoOf(Noop_1).ldg = onStartDrag;
  protoOf(BaseVisualisation).ydb = map;
  protoOf(BaseVisualisation).odt = mapKeyframes;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_11 = new Companion_10();
  UUID_instance = new UUID();
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
  _.$_$.w = Target;
  _.$_$.x = Alpha;
  _.$_$.y = Target_0;
  _.$_$.z = ColorOverlay;
  _.$_$.a1 = Target_1;
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
  _.$_$.p1 = Companion_getInstance_4;
  _.$_$.q1 = Companion_getInstance_12;
  _.$_$.r1 = UUID_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=appyx-interactions-common.js.map
