(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './appyx-interactions-common.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-runtime-saveable.js', './appyx-utils-customisation.js', './appyx-utils-multiplatform.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./appyx-interactions-common.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-runtime-saveable.js'), require('./appyx-utils-customisation.js'), require('./appyx-utils-multiplatform.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['appyx-interactions-common'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'appyx-interactions-common' was not found. Please, check whether 'appyx-interactions-common' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'compose-multiplatform-core-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-runtime-saveable' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['appyx-utils-customisation'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'appyx-utils-customisation' was not found. Please, check whether 'appyx-utils-customisation' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['appyx-utils-multiplatform'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'appyx-utils-multiplatform' was not found. Please, check whether 'appyx-utils-multiplatform' is loaded prior to 'appyx-navigation-common'.");
    }
    root['appyx-navigation-common'] = factory(typeof this['appyx-navigation-common'] === 'undefined' ? {} : this['appyx-navigation-common'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['appyx-interactions-common'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-runtime-saveable'], this['appyx-utils-customisation'], this['appyx-utils-multiplatform']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_appyx_appyx_interactions_appyx_interactions, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_appyx_utils_customisations, kotlin_appyx_utils_multiplatform) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var VOID = kotlin_kotlin.$_$.d;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var classMeta = kotlin_kotlin.$_$.p8;
  var scan = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var cast = kotlin_kotlin.$_$.xa;
  var safeCast = kotlin_kotlin.$_$.ya;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var equals = kotlin_kotlin.$_$.t8;
  var Map = kotlin_kotlin.$_$.s3;
  var isInterface = kotlin_kotlin.$_$.h9;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var emptySet = kotlin_kotlin.$_$.t4;
  var minus = kotlin_kotlin.$_$.f6;
  var emptyMap = kotlin_kotlin.$_$.s4;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var Enum = kotlin_kotlin.$_$.mc;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qd;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var Elements = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.d;
  var plus = kotlin_kotlin.$_$.i6;
  var intersect = kotlin_kotlin.$_$.l5;
  var toMutableMap = kotlin_kotlin.$_$.f7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var mapCapacity = kotlin_kotlin.$_$.b6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.wd;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var to = kotlin_kotlin.$_$.ce;
  var plus_0 = kotlin_kotlin.$_$.j6;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var Companion_getInstance = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.p1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var roundToInt = kotlin_kotlin.$_$.ba;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var SideEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var onPointerEvent = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.g;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.p8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var get_LocalBoxScope = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.e1;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var List = kotlin_kotlin.$_$.q3;
  var Offset__unaryMinus_impl_ssu2iv = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var KProperty0 = kotlin_kotlin.$_$.va;
  var THROW_ISE = kotlin_kotlin.$_$.yc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x8;
  var KMutableProperty0 = kotlin_kotlin.$_$.ta;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var removedElements = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.f;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var detectDragGesturesOrCancellation = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.m1;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Offset__div_impl_eaxtg1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var boundsInParent = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var offset = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var rememberSaveableStateHolder$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.h;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var collectAsState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var get_LocalMotionProperties = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.f1;
  var PositionAlignment = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.v;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.n5;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var UiContext = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.l;
  var TransitionBounds = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.k;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.j8;
  var NodeCustomisationDirectoryImpl = kotlin_appyx_utils_customisations.$_$.a;
  var mapSaver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.e;
  var rememberSaveable$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.g;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Triple = kotlin_kotlin.$_$.zc;
  var minOf = kotlin_kotlin.$_$.m7;
  var combine = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var onCompletion = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var AppyxLogger_getInstance = kotlin_appyx_utils_multiplatform.$_$.b;
  var hashCode = kotlin_kotlin.$_$.c9;
  var compareTo = kotlin_kotlin.$_$.q8;
  var compareValues = kotlin_kotlin.$_$.j7;
  var sortedWith = kotlin_kotlin.$_$.u6;
  var lazy = kotlin_kotlin.$_$.pd;
  var UUID_instance = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.r1;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var emptyList = kotlin_kotlin.$_$.r4;
  var Plugin = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.h;
  var listOfNotNull = kotlin_kotlin.$_$.y5;
  var plus_1 = kotlin_kotlin.$_$.k6;
  var BuildFlags_instance = kotlin_appyx_utils_multiplatform.$_$.c;
  var MutableSavedStateMapImpl = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.j;
  var SavesInstanceState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.i;
  var Long = kotlin_kotlin.$_$.rc;
  var collectAsState$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var plus_2 = kotlin_kotlin.$_$.l6;
  var AppyxComponentSetup$composable = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.s;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var Unit = kotlin_kotlin.$_$.cd;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var minus_0 = kotlin_kotlin.$_$.e6;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.i;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Appyx, 'Appyx', objectMeta);
  setMetadataFor(CompareValues, 'CompareValues', classMeta, VOID, VOID, CompareValues);
  setMetadataFor(withPrevious$slambda, 'withPrevious$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(withPrevious$o$collect$slambda, 'withPrevious$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$0, '$collectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChildAwareCallbackInfo, 'ChildAwareCallbackInfo', classMeta);
  setMetadataFor(Single, 'Single', classMeta, ChildAwareCallbackInfo);
  setMetadataFor(Double, 'Double', classMeta, ChildAwareCallbackInfo);
  setMetadataFor(ChildAwareImpl$observeChanges$o$collect$slambda, 'ChildAwareImpl$observeChanges$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(ChildAwareImpl$init$slambda, 'ChildAwareImpl$init$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChildAwareImpl$observeChanges$slambda, 'ChildAwareImpl$observeChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  function init(node) {
  }
  setMetadataFor(NodeReadyObserver, 'NodeReadyObserver', interfaceMeta, VOID, [Plugin]);
  setMetadataFor(ChildAwareImpl, 'ChildAwareImpl', classMeta, VOID, [NodeReadyObserver], ChildAwareImpl, VOID, VOID, [0]);
  setMetadataFor(ChildEntry, 'ChildEntry', classMeta);
  setMetadataFor(Initialized, 'Initialized', classMeta, ChildEntry);
  setMetadataFor(Suspended, 'Suspended', classMeta, ChildEntry);
  setMetadataFor(KeepMode, 'KeepMode', classMeta, Enum);
  setMetadataFor(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda, 'ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$androidx_compose_runtime_saveable_SaverScope$0, 'sam$androidx_compose_runtime_saveable_SaverScope$0', classMeta);
  setMetadataFor(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda, 'ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChildNodeCreationManager, 'ChildNodeCreationManager', classMeta);
  setMetadataFor(ChildrenTransitionScope$children$composable$slambda$slambda, 'ChildrenTransitionScope$children$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(ChildrenTransitionScope$children$composable$slambda, 'ChildrenTransitionScope$children$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChildrenTransitionScope$children$composable$lambda$slambda, 'ChildrenTransitionScope$children$composable$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChildrenTransitionScope, 'ChildrenTransitionScope', classMeta);
  setMetadataFor(ChildRendererImpl, 'ChildRendererImpl', classMeta);
  setMetadataFor(PlatformLifecycleEventObserver, 'PlatformLifecycleEventObserver', interfaceMeta);
  setMetadataFor(sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0, 'sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0', classMeta, VOID, [PlatformLifecycleEventObserver]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta);
  setMetadataFor(WindowSizeClass, 'WindowSizeClass', classMeta, Enum);
  setMetadataFor(ScreenSize, 'ScreenSize', classMeta);
  setMetadataFor(IntegrationPoint, 'IntegrationPoint', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(IntegrationPointStub, 'IntegrationPointStub', classMeta, IntegrationPoint, VOID, IntegrationPointStub);
  setMetadataFor(ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl, 'ChildNodeLifecycleManager$launch$slambda$<init>$ref', classMeta, VOID, VOID, VOID, VOID, VOID, [3]);
  setMetadataFor(ChildNodeLifecycleManager$launch$slambda$slambda, 'ChildNodeLifecycleManager$launch$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(ChildNodeLifecycleManager$launch$slambda$slambda_1, 'ChildNodeLifecycleManager$launch$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(ChildNodeLifecycleManager$launch$slambda, 'ChildNodeLifecycleManager$launch$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1, 3]);
  setMetadataFor(ChildNodeLifecycleManager, 'ChildNodeLifecycleManager', classMeta);
  function onCreate() {
  }
  function onStart() {
  }
  function onResume() {
  }
  function onDestroy() {
  }
  setMetadataFor(DefaultPlatformLifecycleObserver, 'DefaultPlatformLifecycleObserver', interfaceMeta);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(Event, 'Event', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(LifecycleLogger, 'LifecycleLogger', classMeta, VOID, [DefaultPlatformLifecycleObserver]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(MinimumCombinedLifecycle$manage$1, VOID, classMeta, VOID, [DefaultPlatformLifecycleObserver]);
  setMetadataFor(MinimumCombinedLifecycle, 'MinimumCombinedLifecycle', classMeta);
  setMetadataFor(NodeLifecycleImpl, 'NodeLifecycleImpl', classMeta);
  setMetadataFor(AncestryInfo, 'AncestryInfo', classMeta);
  setMetadataFor(Root, 'Root', objectMeta, AncestryInfo);
  setMetadataFor(Child, 'Child', classMeta, AncestryInfo);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(BuildContext, 'BuildContext', classMeta);
  setMetadataFor(Node, 'Node', classMeta);
  setMetadataFor(ComposableNode, 'ComposableNode', classMeta, Node);
  setMetadataFor(EmptyNodeView, 'EmptyNodeView', objectMeta);
  function View$composable(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(3274146);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(3274146, $dirty, -1, 'com.bumble.appyx.navigation.node.ParentNodeView.View$composable (ParentNodeView.kt:15)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalNode();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.b20(this_0);
      sourceInformationMarkerEnd($composer_1);
      var tmp = tmp0;
      var tmp0_elvis_lhs = tmp instanceof ParentNode ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var message = '' + getKClassFromExpression(this) + ' is not provided to the appropriate ParentNode';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var node = tmp_0;
      this.jf9(node, modifier, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp1_safe_receiver.w2e(ParentNodeView$View$composable$lambda(this, modifier, $changed));
    }
  }
  setMetadataFor(ParentNodeView, 'ParentNodeView', interfaceMeta);
  setMetadataFor(EmptyParentNodeView, 'EmptyParentNodeView', classMeta, VOID, [ParentNodeView], EmptyParentNodeView);
  setMetadataFor(Node$1, VOID, classMeta, VOID, [DefaultPlatformLifecycleObserver]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ParentNode, 'ParentNode', classMeta, Node);
  function onCreate_0(lifecycle) {
  }
  setMetadataFor(NodeLifecycleAware, 'NodeLifecycleAware', interfaceMeta, VOID, [Plugin]);
  setMetadataFor(Destroyable, 'Destroyable', interfaceMeta, VOID, [Plugin]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(RetainedInstanceStoreImpl, 'RetainedInstanceStoreImpl', classMeta, VOID, VOID, RetainedInstanceStoreImpl);
  setMetadataFor(MainIntegrationPoint, 'MainIntegrationPoint', classMeta, IntegrationPoint, VOID, MainIntegrationPoint);
  setMetadataFor(WebNodeHost$composable$onBackPressedDispatcherOwner$1$1, VOID, classMeta);
  setMetadataFor(WebNodeHost$composable$slambda$slambda$slambda, 'WebNodeHost$composable$slambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_4, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(WebNodeHost$composable$slambda$slambda, 'WebNodeHost$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(WebNodeHost$composable$slambda, 'WebNodeHost$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(OnBackPressedCallback, 'OnBackPressedCallback', classMeta);
  setMetadataFor(OnBackPressedCancellable, 'OnBackPressedCancellable', classMeta);
  setMetadataFor(OnBackPressedDispatcher, 'OnBackPressedDispatcher', classMeta, VOID, VOID, OnBackPressedDispatcher);
  setMetadataFor(LocalOnBackPressedDispatcherOwner$1$1, VOID, classMeta);
  setMetadataFor(PlatformBackHandler$composable$backCallback$1$1, VOID, classMeta, OnBackPressedCallback);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(PlatformLifecycleRegistry, 'PlatformLifecycleRegistry', classMeta, VOID, VOID, PlatformLifecycleRegistry);
  //endregion
  function Appyx() {
    Appyx_instance = this;
    this.mev_1 = null;
    this.nev_1 = KeepMode_KEEP_getInstance();
    this.oev_1 = 8;
  }
  protoOf(Appyx).pev = function (exception) {
    var handler = this.mev_1;
    if (!(handler == null)) {
      handler(exception);
    } else {
      throw exception;
    }
  };
  var Appyx_instance;
  function Appyx_getInstance() {
    if (Appyx_instance == null)
      new Appyx();
    return Appyx_instance;
  }
  function CompareValues(previous, currentNullable) {
    previous = previous === VOID ? null : previous;
    currentNullable = currentNullable === VOID ? null : currentNullable;
    this.qev_1 = previous;
    this.rev_1 = currentNullable;
  }
  protoOf(CompareValues).z1v = function () {
    var tmp0_elvis_lhs = this.rev_1;
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
    return !(this.rev_1 == null);
  };
  protoOf(CompareValues).jd3 = function (new_0) {
    return new CompareValues(this.rev_1, new_0);
  };
  protoOf(CompareValues).ae = function () {
    return this.qev_1;
  };
  protoOf(CompareValues).be = function () {
    return this.z1v();
  };
  function withPrevious(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.filter' call
    var tmp = new CompareValues();
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = scan(_this__u8e3s4, tmp, withPrevious$slambda_0(null));
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv(this_0);
  }
  function withPrevious$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$slambda).cew = function (previous, current, $completion) {
    var tmp = this.dew(previous, current, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(withPrevious$slambda).i1k = function (p1, p2, $completion) {
    var tmp = p1 instanceof CompareValues ? p1 : THROW_CCE();
    return this.cew(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(withPrevious$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          return this.aew_1.jd3(this.bew_1);
        } else if (tmp === 1) {
          throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(withPrevious$slambda).dew = function (previous, current, completion) {
    var i = new withPrevious$slambda(completion);
    i.aew_1 = previous;
    i.bew_1 = current;
    return i;
  };
  function withPrevious$slambda_0(resultContinuation) {
    var i = new withPrevious$slambda(resultContinuation);
    var l = function (previous, current, $completion) {
      return i.cew(previous, current, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.eew_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).t13 = function (value, $completion) {
    return this.eew_1(value, $completion);
  };
  function withPrevious$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.new_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$o$collect$slambda).sew = function (value, $completion) {
    var tmp = this.tew(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(withPrevious$o$collect$slambda).fc = function (p1, $completion) {
    return this.sew(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
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
            tmp_0.qew_1 = this.new_1;
            var tmp_1 = this;
            tmp_1.rew_1 = this.oew_1;
            if (this.rew_1.id3()) {
              this.hb_1 = 3;
              suspendResult = this.qew_1.t13(this.rew_1, this);
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
            this.pew_1 = suspendResult;
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
  protoOf(withPrevious$o$collect$slambda).tew = function (value, completion) {
    var i = new withPrevious$o$collect$slambda(this.new_1, completion);
    i.oew_1 = value;
    return i;
  };
  function withPrevious$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new withPrevious$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.sew(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cex_1 = _this__u8e3s4;
    this.dex_1 = collector;
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
            tmp_0.eex_1 = this.dex_1;
            this.hb_1 = 1;
            var tmp_1 = withPrevious$o$collect$slambda_0(this.eex_1, null);
            suspendResult = this.cex_1.fex_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  function _no_name_provided__qut3iv($this) {
    this.fex_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).gex = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv).g13 = function (collector, $completion) {
    return this.gex(collector, $completion);
  };
  function notify($this, node1, node2) {
    if (get_isDestroyed($this.kex_1))
      return Unit_instance;
    var lifecycle = (new MinimumCombinedLifecycle([$this.kex_1, node1.bey(), node2.bey()])).nex_1;
    if ($this.hex_1.e7(node1)) {
      $this.jex_1(lifecycle, cast($this.hex_1, node1), cast($this.iex_1, node2));
    } else {
      $this.jex_1(lifecycle, cast($this.hex_1, node2), cast($this.iex_1, node1));
    }
  }
  function getOther($this, node) {
    return $this.hex_1.e7(node) ? $this.iex_1 : $this.iex_1.e7(node) ? $this.hex_1 : null;
  }
  function Single() {
  }
  protoOf(Single).fey = function (newNode) {
    if (get_isDestroyed(this.eey_1))
      return Unit_instance;
    var castedNode = safeCast(this.cey_1, newNode);
    if (!(castedNode == null)) {
      var lifecycle = (new MinimumCombinedLifecycle([this.eey_1, newNode.bey()])).nex_1;
      this.dey_1(lifecycle, castedNode);
    }
  };
  function Double() {
  }
  protoOf(Double).gey = function (activeNodes, newNode, ignoreNodes) {
    var tmp0_elvis_lhs = getOther(this, newNode);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var second = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = activeNodes.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.navigation.children.Double.onNewNodeAppeared.<anonymous>' call
      if ((second.e7(element) ? !equals(element, newNode) : false) ? !ignoreNodes.r(element) : false) {
        destination.s(element);
      }
    }
    var tmp0_iterator_0 = destination.v();
    while (tmp0_iterator_0.w()) {
      var element_0 = tmp0_iterator_0.y();
      // Inline function 'com.bumble.appyx.navigation.children.Double.onNewNodeAppeared.<anonymous>' call
      notify(this, newNode, element_0);
    }
  };
  function ChildAwareCallbackInfo() {
  }
  function ChildAwareImpl$observeChanges$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.pey_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildAwareImpl$observeChanges$o$collect$slambda).tey = function (value, $completion) {
    var tmp = this.uey(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildAwareImpl$observeChanges$o$collect$slambda).fc = function (p1, $completion) {
    return this.tey((!(p1 == null) ? isInterface(p1, Map) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildAwareImpl$observeChanges$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.rey_1 = this.pey_1;
            var tmp_1 = this;
            tmp_1.sey_1 = this.qey_1;
            this.hb_1 = 1;
            var this_0 = this.sey_1.p2();
            var destination = HashSet_init_$Create$();
            var tmp0_iterator = this_0.v();
            while (tmp0_iterator.w()) {
              var element = tmp0_iterator.y();
              var tmp0_safe_receiver = get_nodeOrNull(element);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination.s(tmp0_safe_receiver);
              }
            }

            suspendResult = this.rey_1.t13(destination, this);
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
  protoOf(ChildAwareImpl$observeChanges$o$collect$slambda).uey = function (value, completion) {
    var i = new ChildAwareImpl$observeChanges$o$collect$slambda(this.pey_1, completion);
    i.qey_1 = value;
    return i;
  };
  function ChildAwareImpl$observeChanges$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new ChildAwareImpl$observeChanges$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.tey(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dez_1 = _this__u8e3s4;
    this.eez_1 = collector;
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
            tmp_0.fez_1 = this.eez_1;
            this.hb_1 = 1;
            var tmp_1 = ChildAwareImpl$observeChanges$o$collect$slambda_0(this.fez_1, null);
            suspendResult = this.dez_1.gez_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  function _get_children__my42wc($this) {
    var tmp = $this.iez_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('children');
    }
  }
  function _get_lifecycle__yk9dcp($this) {
    var tmp = $this.jez_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('lifecycle');
    }
  }
  function _get_coroutineScope__o75s5t($this) {
    var tmp = $this.kez_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('coroutineScope');
    }
  }
  function observeChanges($this, $completion) {
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = _get_children__my42wc($this);
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp$ret$2 = new _no_name_provided__qut3iv_0(this_0);
    var tmp = withPrevious(tmp$ret$2);
    var tmp_0 = ChildAwareImpl$observeChanges$slambda_0($this, null);
    return tmp.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), $completion);
  }
  function notifyWhenChanged($this, child, nodes, ignore) {
    var tmp0_iterator = $this.hez_1.v();
    while (tmp0_iterator.w()) {
      var callback = tmp0_iterator.y();
      if (callback instanceof Double) {
        callback.gey(nodes, child, ignore);
      } else {
        if (callback instanceof Single) {
          callback.fey(child);
        }
      }
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.nez_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).t13 = function (value, $completion) {
    return this.nez_1(value, $completion);
  };
  function ChildAwareImpl$init$slambda(this$0, resultContinuation) {
    this.wez_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildAwareImpl$init$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildAwareImpl$init$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildAwareImpl$init$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = observeChanges(this.wez_1, this);
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
  protoOf(ChildAwareImpl$init$slambda).w1b = function ($this$launch, completion) {
    var i = new ChildAwareImpl$init$slambda(this.wez_1, completion);
    i.xez_1 = $this$launch;
    return i;
  };
  function ChildAwareImpl$init$slambda_0(this$0, resultContinuation) {
    var i = new ChildAwareImpl$init$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_0($this) {
    this.gez_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_0).yez = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_0).g13 = function (collector, $completion) {
    return this.yez(collector, $completion);
  };
  function ChildAwareImpl$observeChanges$slambda(this$0, resultContinuation) {
    this.hf0_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildAwareImpl$observeChanges$slambda).jf0 = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.kf0(_name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildAwareImpl$observeChanges$slambda).fc = function (p1, $completion) {
    return this.jf0(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildAwareImpl$observeChanges$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          var previous = this.if0_1.ae();
          var current = this.if0_1.be();
          var newNodes = minus(current, previous == null ? emptySet() : previous);
          var visitedSet = HashSet_init_$Create$();
          var tmp0_iterator = newNodes.v();
          while (tmp0_iterator.w()) {
            var element = tmp0_iterator.y();
            notifyWhenChanged(this.hf0_1, element, current, visitedSet);
            visitedSet.s(element);
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
  protoOf(ChildAwareImpl$observeChanges$slambda).kf0 = function (_name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ChildAwareImpl$observeChanges$slambda(this.hf0_1, completion);
    i.if0_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ChildAwareImpl$observeChanges$slambda_0(this$0, resultContinuation) {
    var i = new ChildAwareImpl$observeChanges$slambda(this$0, resultContinuation);
    var l = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.jf0(_name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildAwareImpl() {
    this.hez_1 = ArrayList_init_$Create$();
    this.mez_1 = 8;
  }
  protoOf(ChildAwareImpl).lf0 = function (node) {
    this.lez_1 = node;
    this.jez_1 = node.bey();
    this.kez_1 = _get_lifecycle__yk9dcp(this).y5j();
    if (node instanceof ParentNode) {
      this.iez_1 = node.fq();
      var tmp = _get_coroutineScope__o75s5t(this);
      launch(tmp, VOID, VOID, ChildAwareImpl$init$slambda_0(this, null));
    } else {
      this.iez_1 = MutableStateFlow(emptyMap());
    }
  };
  var KeepMode_KEEP_instance;
  var KeepMode_SUSPEND_instance;
  var KeepMode_entriesInitialized;
  function KeepMode_initEntries() {
    if (KeepMode_entriesInitialized)
      return Unit_instance;
    KeepMode_entriesInitialized = true;
    KeepMode_KEEP_instance = new KeepMode('KEEP', 0);
    KeepMode_SUSPEND_instance = new KeepMode('SUSPEND', 1);
  }
  function Initialized(key, node) {
    ChildEntry.call(this);
    this.ef1_1 = key;
    this.ff1_1 = node;
    this.gf1_1 = 0;
  }
  protoOf(Initialized).t2 = function () {
    return this.ef1_1;
  };
  function Suspended(key, savedState) {
    ChildEntry.call(this);
    this.if1_1 = key;
    this.jf1_1 = savedState;
    this.kf1_1 = 8;
  }
  protoOf(Suspended).t2 = function () {
    return this.if1_1;
  };
  function KeepMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function KeepMode_KEEP_getInstance() {
    KeepMode_initEntries();
    return KeepMode_KEEP_instance;
  }
  function KeepMode_SUSPEND_getInstance() {
    KeepMode_initEntries();
    return KeepMode_SUSPEND_instance;
  }
  function ChildEntry() {
    this.lf1_1 = 0;
  }
  protoOf(ChildEntry).equals = function (other) {
    var tmp;
    if (!(other == null) ? getKClassFromExpression(other).equals(getKClassFromExpression(this)) : false) {
      var tmp0_safe_receiver = other instanceof ChildEntry ? other : null;
      tmp = equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2(), this.t2());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChildEntry).hashCode = function () {
    return this.t2().hashCode();
  };
  protoOf(ChildEntry).toString = function () {
    return '' + this.t2() + '@' + getKClassFromExpression(this).d7();
  };
  function get_nodeOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof Initialized) {
      tmp = _this__u8e3s4.ff1_1;
    } else {
      if (_this__u8e3s4 instanceof Suspended) {
        tmp = null;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function mapNotNullToSet(_this__u8e3s4, $this, mapper) {
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = HashSet_init_$Create$_0(_this__u8e3s4.n(), 1.0);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = _this__u8e3s4.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      var tmp0_safe_receiver = mapper(element);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.s(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda(this$0, resultContinuation) {
    this.uf1_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda).wf1 = function (state, $completion) {
    var tmp = this.xf1(state, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda).fc = function (p1, $completion) {
    return this.wf1(p1 instanceof Elements ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          var appyxComponentKeepKeys;
          var appyxComponentSuspendKeys;
          var appyxComponentKeys;
          switch (this.uf1_1.af2_1.j9_1) {
            case 0:
              appyxComponentKeepKeys = plus(this.vf1_1.ld7_1, this.vf1_1.md7_1);
              appyxComponentSuspendKeys = emptySet();
              appyxComponentKeys = appyxComponentKeepKeys;
              break;
            case 1:
              appyxComponentKeepKeys = this.vf1_1.ld7_1;
              appyxComponentSuspendKeys = this.vf1_1.md7_1;
              appyxComponentKeys = plus(appyxComponentKeepKeys, appyxComponentSuspendKeys);
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          updateChildren(this.uf1_1, appyxComponentKeys, appyxComponentKeepKeys, appyxComponentSuspendKeys);
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
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda).xf1 = function (state, completion) {
    var i = new ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda(this.uf1_1, completion);
    i.vf1_1 = state;
    return i;
  };
  function ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda_0(this$0, resultContinuation) {
    var i = new ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda(this$0, resultContinuation);
    var l = function (state, $completion) {
      return i.wf1(state, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_parentNode__eo2cht($this) {
    var tmp = $this.bf2_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('parentNode');
    }
  }
  function syncAppyxComponentWithChildren($this, parentNode) {
    var tmp = parentNode.bey().y5j();
    launch(tmp, VOID, VOID, ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda_0(parentNode, $this, null));
  }
  function updateChildren($this, appyxComponentElements, appyxComponentKeepElements, appyxComponentSuspendElements) {
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var this_0 = $this.cf2_1;
      while (true) {
        var prevValue = this_0.u2();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>' call
          var localElements = prevValue.o2();
          var tmp = prevValue.q2();
          var tmp_0 = Companion_instance_0;
          var localKeptElements = mapNotNullToSet(tmp, tmp_0, ChildNodeCreationManager$updateChildren$lambda);
          var tmp_1 = prevValue.q2();
          var tmp_2 = Companion_instance_0;
          var localSuspendedKeys = mapNotNullToSet(tmp_1, tmp_2, ChildNodeCreationManager$updateChildren$lambda_0);
          var newElements = minus(appyxComponentElements, localElements);
          var removedElements = minus(localElements, appyxComponentElements);
          var keepElements = intersect(localSuspendedKeys, appyxComponentKeepElements);
          var suspendElements = intersect(localKeptElements, appyxComponentSuspendElements);
          var noKeysChanges = newElements.e1() ? removedElements.e1() : false;
          var noSuspendChanges = keepElements.e1() ? suspendElements.e1() : false;
          if (noKeysChanges ? noSuspendChanges : false) {
            tmp$ret$0 = prevValue;
            break $l$block;
          }
          var mutableMap = toMutableMap(prevValue);
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = newElements.v();
          while (tmp0_iterator.w()) {
            var element = tmp0_iterator.y();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>' call
            var shouldSuspend = $this.af2_1.equals(KeepMode_SUSPEND_getInstance()) ? appyxComponentSuspendElements.r(element) : false;
            // Inline function 'kotlin.collections.set' call
            var value = childEntry($this, element, null, shouldSuspend);
            mutableMap.r2(element, value);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = removedElements.v();
          while (tmp0_iterator_0.w()) {
            var element_0 = tmp0_iterator_0.y();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>' call
            mutableMap.v2(element_0);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_1 = keepElements.v();
          while (tmp0_iterator_1.w()) {
            var element_1 = tmp0_iterator_1.y();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.set' call
            // Inline function 'kotlin.requireNotNull' call
            var value_0 = mutableMap.b3(element_1);
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              // Inline function 'kotlin.contracts.contract' call
              if (value_0 == null) {
                // Inline function 'kotlin.requireNotNull.<anonymous>' call
                var message = 'Required value was null.';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = value_0;
                break $l$block_0;
              }
            }
            var tmp$ret$3 = tmp$ret$2;
            var value_1 = initialize(tmp$ret$3, $this);
            mutableMap.r2(element_1, value_1);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = suspendElements.v();
          while (tmp0_iterator_2.w()) {
            var element_2 = tmp0_iterator_2.y();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.set' call
            // Inline function 'kotlin.requireNotNull' call
            var value_2 = mutableMap.b3(element_2);
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$5;
            $l$block_1: {
              // Inline function 'kotlin.requireNotNull' call
              // Inline function 'kotlin.contracts.contract' call
              if (value_2 == null) {
                // Inline function 'kotlin.requireNotNull.<anonymous>' call
                var message_0 = 'Required value was null.';
                throw IllegalArgumentException_init_$Create$(toString(message_0));
              } else {
                tmp$ret$5 = value_2;
                break $l$block_1;
              }
            }
            var tmp$ret$6 = tmp$ret$5;
            var value_3 = suspend(tmp$ret$6, $this);
            mutableMap.r2(element_2, value_3);
          }
          tmp$ret$0 = mutableMap;
        }
        var nextValue = tmp$ret$0;
        if (this_0.i1a(prevValue, nextValue)) {
          break $l$block_2;
        }
      }
    }
  }
  function restoreChildren(_this__u8e3s4, $this) {
    var tmp = _this__u8e3s4 == null ? null : _this__u8e3s4.b3('ChildrenState');
    var tmp1_safe_receiver = (!(tmp == null) ? isInterface(tmp, Map) : false) ? tmp : null;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination = LinkedHashMap_init_$Create$(mapCapacity(tmp1_safe_receiver.n()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = tmp1_safe_receiver.q2().v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_1 = element.t2();
        // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.restoreChildren.<anonymous>' call
        var tmp$ret$1 = childEntry($this, element.t2(), element.u2(), true);
        destination.r2(tmp_1, tmp$ret$1);
      }
      tmp_0 = destination;
    }
    return tmp_0;
  }
  function childBuildContext($this, savedState) {
    return new BuildContext(new Child(_get_parentNode__eo2cht($this)), savedState, $this.zf1_1.lev(getKClassFromExpression(_get_parentNode__eo2cht($this))));
  }
  function childEntry($this, key, savedState, suspended) {
    var tmp;
    if (suspended) {
      tmp = new Suspended(key, savedState);
    } else {
      tmp = new Initialized(key, build(_get_parentNode__eo2cht($this).ef2(key.cd6_1, childBuildContext($this, savedState))));
    }
    return tmp;
  }
  function initialize(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof Initialized) {
      tmp = _this__u8e3s4;
    } else {
      if (_this__u8e3s4 instanceof Suspended) {
        tmp = new Initialized(_this__u8e3s4.t2(), build(_get_parentNode__eo2cht($this).ef2(_this__u8e3s4.t2().cd6_1, childBuildContext($this, _this__u8e3s4.jf1_1))));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function suspend(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof Suspended) {
      tmp = _this__u8e3s4;
    } else {
      if (_this__u8e3s4 instanceof Initialized) {
        var tmp_0 = _this__u8e3s4.t2();
        var tmp_1 = ChildNodeCreationManager$suspend$lambda;
        tmp = new Suspended(tmp_0, _this__u8e3s4.ff1_1.ff2(new sam$androidx_compose_runtime_saveable_SaverScope$0(tmp_1)));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function Companion() {
    this.gf2_1 = 'ChildrenState';
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    return Companion_instance_0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.hf2_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).t13 = function (value, $completion) {
    return this.hf2_1(value, $completion);
  };
  function sam$androidx_compose_runtime_saveable_SaverScope$0(function_0) {
    this.if2_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_saveable_SaverScope$0).c4n = function (value) {
    return this.if2_1(value);
  };
  function ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda($parentNode, this$0, resultContinuation) {
    this.rf2_1 = $parentNode;
    this.sf2_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = this.rf2_1.yf0_1.dde();
            var tmp_1 = ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda_0(this.sf2_1, null);
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
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda).w1b = function ($this$launch, completion) {
    var i = new ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda(this.rf2_1, this.sf2_1, completion);
    i.tf2_1 = $this$launch;
    return i;
  };
  function ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda_0($parentNode, this$0, resultContinuation) {
    var i = new ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda($parentNode, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildNodeCreationManager$updateChildren$lambda(entry) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = entry.t2();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>.<anonymous>' call
    var tmp_0 = entry.u2();
    if (tmp_0 instanceof Initialized) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChildNodeCreationManager$updateChildren$lambda_0(entry) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = entry.t2();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>.<anonymous>' call
    var tmp_0 = entry.u2();
    if (tmp_0 instanceof Suspended) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChildNodeCreationManager$suspend$lambda(it) {
    return true;
  }
  function ChildNodeCreationManager(savedStateMap, customisations, keepMode) {
    this.yf1_1 = savedStateMap;
    this.zf1_1 = customisations;
    this.af2_1 = keepMode;
    this.cf2_1 = MutableStateFlow(emptyMap());
    this.df2_1 = asStateFlow(this.cf2_1);
  }
  protoOf(ChildNodeCreationManager).uf2 = function (parentNode) {
    this.bf2_1 = parentNode;
    var tmp0_safe_receiver = restoreChildren(this.yf1_1, this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.launch.<anonymous>' call
      $l$block: {
        // Inline function 'kotlinx.coroutines.flow.update' call
        var this_0 = this.cf2_1;
        while (true) {
          var prevValue = this_0.u2();
          // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.launch.<anonymous>.<anonymous>' call
          var nextValue = tmp0_safe_receiver;
          if (this_0.i1a(prevValue, nextValue)) {
            break $l$block;
          }
        }
      }
      this.yf1_1 = null;
    }
    syncAppyxComponentWithChildren(this, parentNode);
  };
  protoOf(ChildNodeCreationManager).vf2 = function (element) {
    var value = this.cf2_1.u2();
    var tmp0_elvis_lhs = value.b3(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Rendering and children management is out of sync: requested ' + element + ' but have only ' + value.o2();
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var child = tmp;
    var tmp_0;
    if (child instanceof Initialized) {
      tmp_0 = child;
    } else {
      if (child instanceof Suspended) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlinx.coroutines.flow.updateAndGet' call
          var this_0 = this.cf2_1;
          while (true) {
            var prevValue = this_0.u2();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.childOrCreate.<anonymous>' call
            var tmp0_elvis_lhs_0 = prevValue.b3(element);
            var tmp_1;
            if (tmp0_elvis_lhs_0 == null) {
              var message_0 = 'Requested child ' + element + ' disappeared';
              throw IllegalStateException_init_$Create$(toString(message_0));
            } else {
              tmp_1 = tmp0_elvis_lhs_0;
            }
            var updateChild = tmp_1;
            var tmp_2;
            if (updateChild instanceof Initialized) {
              tmp_2 = prevValue;
            } else {
              if (updateChild instanceof Suspended) {
                tmp_2 = plus_0(prevValue, to(element, initialize(updateChild, this)));
              } else {
                noWhenBranchMatchedException();
              }
            }
            var nextValue = tmp_2;
            if (this_0.i1a(prevValue, nextValue)) {
              tmp$ret$1 = nextValue;
              break $l$block;
            }
          }
        }
        var tmp_3 = tmp$ret$1.b3(element);
        tmp_0 = tmp_3 instanceof Initialized ? tmp_3 : THROW_CCE();
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp_0;
  };
  protoOf(ChildNodeCreationManager).wf2 = function (writer) {
    var children = this.cf2_1.u2();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!children.e1()) {
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination = LinkedHashMap_init_$Create$(mapCapacity(children.n()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = children.q2().v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp = element.t2();
        // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.saveChildrenState.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var entry = element.u2();
        var tmp_0;
        if (entry instanceof Initialized) {
          tmp_0 = entry.ff1_1.ff2(writer.tds());
        } else {
          if (entry instanceof Suspended) {
            tmp_0 = entry.jf1_1;
          } else {
            noWhenBranchMatchedException();
          }
        }
        var tmp$ret$3 = tmp_0;
        destination.r2(tmp, tmp$ret$3);
      }
      var childrenState = destination;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!childrenState.e1()) {
        // Inline function 'kotlin.collections.set' call
        var key = 'ChildrenState';
        writer.r2(key, childrenState);
      }
    }
  };
  function get_defaultExtraTouch() {
    _init_properties_AppyxComponent_kt__paqjst();
    return defaultExtraTouch;
  }
  var defaultExtraTouch;
  function AppyxComponent$composable(_this__u8e3s4, appyxComponent, modifier, clipToBounds_0, gestureValidator, gestureExtraTouchArea, block, $composer, $changed, $default) {
    _init_properties_AppyxComponent_kt__paqjst();
    var modifier_0 = {_v: modifier};
    var clipToBounds_1 = {_v: clipToBounds_0};
    var gestureValidator_0 = {_v: gestureValidator};
    var gestureExtraTouchArea_0 = {_v: new Dp(gestureExtraTouchArea)};
    var block_0 = {_v: block};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1826756814);
    sourceInformation($composer_0, 'C(AppyxComponent$composable)P(!1,5,2,4,3:c#ui.unit.Dp)');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(appyxComponent) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.u1z(clipToBounds_1._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.t1z(gestureValidator_0._v) : false) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.w1z(_Dp___get_value__impl__geb1vb(gestureExtraTouchArea_0._v.z3b_1)) ? 131072 : 65536);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1z(block_0._v) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          clipToBounds_1._v = false;
        }
        if (!(($default & 8) === 0)) {
          gestureValidator_0._v = Companion_getInstance().id6_1;
          $dirty = $dirty & -57345;
        }
        if (!(($default & 16) === 0)) {
          gestureExtraTouchArea_0._v = new Dp(get_defaultExtraTouch());
        }
        if (!(($default & 32) === 0)) {
          block_0._v = null;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(1826756814, $dirty, -1, 'com.bumble.appyx.navigation.composable.AppyxComponent$composable (AppyxComponent.kt:59)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.b20(this_0);
      sourceInformationMarkerEnd($composer_1);
      var density = tmp0;
      // Inline function 'kotlin.math.roundToInt' call
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_1 = get_LocalScreenSize();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.b20(this_1);
      sourceInformationMarkerEnd($composer_2);
      var this_2 = tmp0_0.xf2_1;
      var other = density.h3b();
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_2) * other);
      var this_3 = _Dp___get_value__impl__geb1vb(tmp$ret$2);
      var screenWidthPx = roundToInt(this_3);
      // Inline function 'kotlin.math.roundToInt' call
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_4 = get_LocalScreenSize();
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.b20(this_4);
      sourceInformationMarkerEnd($composer_3);
      var this_5 = tmp0_1.yf2_1;
      var other_0 = density.h3b();
      var tmp$ret$5 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_5) * other_0);
      var this_6 = _Dp___get_value__impl__geb1vb(tmp$ret$5);
      var screenHeightPx = roundToInt(this_6);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var $composer_4 = $composer_0;
      var getContext = {_v: null};
      var $composer_5 = $composer_4;
      $composer_5.f1x(102870005);
      sourceInformation($composer_5, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext._v = AppyxComponent$composable$lambda_1;
      }
      var composer = $composer_5;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_5;
      $composer_6.f1x(547886695);
      sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_6.r1z();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().t1y_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_6.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_2 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_6.h1x();
      var wrapper = tmp0_2;
      var tmp0_3 = wrapper.t2g_1;
      $composer_5.h1x();
      var coroutineScope = tmp0_3;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_7 = $composer_0;
      $composer_7.f1x(547886695);
      sourceInformation($composer_7, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_7.r1z();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>' call
        var value_0 = mutableStateOf(new IntSize(Companion_getInstance_1().o3c_1));
        $composer_7.s1z(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_4 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_7.h1x();
      var containerSize$delegate = tmp0_4;
      var tmp0_elvis_lhs = block_0._v;
      var tmp_3;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, -521103310, true, AppyxComponent$composable$lambda_2(_this__u8e3s4, $dirty));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_8 = $composer_0;
        $composer_8.f1x(-838505973);
        sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_8.t1z(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_8.r1z();
        var tmp_5;
        if (invalid ? true : it_1 === Companion_getInstance_0().t1y_1) {
          // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_8.s1z(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0_5 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_8.h1x();
        tmp_3 = tmp0_5;
      } else {
        tmp_3 = tmp0_elvis_lhs;
      }
      var childrenBlock = tmp_3;
      SideEffect$composable(AppyxComponent$composable$lambda_3(appyxComponent, coroutineScope, clipToBounds_1), $composer_0, 0);
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp_7 = fillMaxSize(modifier_0._v).c5j(clipToBounds_1._v ? clipToBounds(Companion_instance) : Companion_instance);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var keys = [containerSize$delegate, appyxComponent, density, screenWidthPx, screenHeightPx];
      var $composer_9 = $composer_0;
      $composer_9.f1x(-1603429786);
      sourceInformation($composer_9, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid_0 = false;
      var inductionVariable = 0;
      var last = keys.length;
      while (inductionVariable < last) {
        var key = keys[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid_0 = !!(invalid_0 | $composer_9.t1z(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = invalid_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_9.r1z();
      var tmp_8;
      if (invalid_1 ? true : it_2 === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>' call
        var value_2 = AppyxComponent$composable$lambda_4(appyxComponent, density, screenWidthPx, screenHeightPx, containerSize$delegate);
        $composer_9.s1z(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_6 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_9.h1x();
      var tmp_10 = onPlaced(tmp_7, tmp0_6);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_10 = $composer_0;
      $composer_10.f1x(-838505973);
      sourceInformation($composer_10, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_10.t1z(appyxComponent);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_10.r1z();
      var tmp_11;
      if (invalid_2 ? true : it_3 === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>' call
        var value_3 = AppyxComponent$composable$lambda_5(appyxComponent);
        $composer_10.s1z(value_3);
        tmp_11 = value_3;
      } else {
        tmp_11 = it_3;
      }
      var tmp_12 = tmp_11;
      var tmp0_7 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_10.h1x();
      var modifier_1 = onPointerEvent(tmp_10, tmp0_7);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_11 = $composer_0;
      $composer_11.f1x(1330882304);
      sourceInformation($composer_11, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_2().d5i_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_11, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_2 = modifier_1;
      var $changed_0 = 112 & 0 << 3;
      var modifier_3 = modifier_2;
      var $composer_12 = $composer_11;
      $composer_12.f1x(1725976829);
      sourceInformation($composer_12, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_3 = Companion_instance;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_12, 0);
      var localMap = $composer_12.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_3().s6v_1;
      var skippableUpdate = materializerOf(modifier_3);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_13 = $composer_12;
      var tmp_13 = $composer_13.u1y();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_13.k1z();
      if ($composer_13.v1y()) {
        $composer_13.l1z(factory);
      } else {
        $composer_13.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_1 = Companion_getInstance_3().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_14;
      if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
        $this$with.s1z(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block_1);
        tmp_14 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_13)), $composer_13, 112 & $changed_1 >> 3);
      $composer_13.f1x(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_14 = $composer_13;
      sourceInformationMarkerStart($composer_14, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>' call
      var $composer_15 = $composer_14;
      var tmp_15 = [get_LocalBoxScope().r2e(BoxScopeInstance_instance)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous>' call
      var tmp_16 = $composer_15;
      var dispatchReceiver_0 = composableLambda(tmp_16, -2097015828, true, AppyxComponent$composable$lambda_6(childrenBlock, appyxComponent, gestureExtraTouchArea_0, gestureValidator_0, containerSize$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_16 = $composer_15;
      $composer_16.f1x(-838505973);
      sourceInformation($composer_16, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = $composer_16.t1z(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_16.r1z();
      var tmp_17;
      if (invalid_3 ? true : it_4 === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_2(dispatchReceiver_0);
        $composer_16.s1z(value_4);
        tmp_17 = value_4;
      } else {
        tmp_17 = it_4;
      }
      var tmp_18 = tmp_17;
      var tmp0_8 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_16.h1x();
      CompositionLocalProvider$composable(tmp_15, tmp0_8, $composer_15, 48);
      sourceInformationMarkerEnd($composer_14);
      $composer_13.h1x();
      $composer_13.n1z();
      $composer_12.h1x();
      $composer_11.h1x();
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
      tmp0_safe_receiver.w2e(AppyxComponent$composable$lambda_7(_this__u8e3s4, appyxComponent, modifier_0, clipToBounds_1, gestureValidator_0, gestureExtraTouchArea_0, block_0, $changed, $default));
    }
  }
  function ChildrenTransitionScope$children$composable$slambda$slambda($saveableStateHolder, resultContinuation) {
    this.jf3_1 = $saveableStateHolder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildrenTransitionScope$children$composable$slambda$slambda).lf3 = function (deletedKeys, $completion) {
    var tmp = this.mf3(deletedKeys, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda$slambda).fc = function (p1, $completion) {
    return this.lf3((!(p1 == null) ? isInterface(p1, List) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          var tmp0_iterator = this.kf3_1.v();
          while (tmp0_iterator.w()) {
            var element = tmp0_iterator.y();
            this.jf3_1.y4n(element);
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
  protoOf(ChildrenTransitionScope$children$composable$slambda$slambda).mf3 = function (deletedKeys, completion) {
    var i = new ChildrenTransitionScope$children$composable$slambda$slambda(this.jf3_1, completion);
    i.kf3_1 = deletedKeys;
    return i;
  };
  function ChildrenTransitionScope$children$composable$slambda$slambda_0($saveableStateHolder, resultContinuation) {
    var i = new ChildrenTransitionScope$children$composable$slambda$slambda($saveableStateHolder, resultContinuation);
    var l = function (deletedKeys, $completion) {
      return i.lf3(deletedKeys, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildrenTransitionScope$children$composable$lambda$slambda$lambda($appyxComponent) {
    return function (position) {
      $appyxComponent.ldg(position.c39_1);
      return Unit_instance;
    };
  }
  function ChildrenTransitionScope$children$composable$lambda$slambda$lambda_0($appyxComponent) {
    return function () {
      $appyxComponent.sdg();
      return Unit_instance;
    };
  }
  function ChildrenTransitionScope$children$composable$lambda$slambda$lambda_1(this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $appyxComponent, $density) {
    return function (change, dragAmount) {
      var tmp;
      if (this$0.qf3_1.gd6(change.e6k_1, children$composable$_anonymous_$lambda$0_ylrj98($transformedBoundingBox$delegate).n39(Offset__unaryMinus_impl_ssu2iv(children$composable$_anonymous_$lambda$4_ylrj9c($offsetCenter$delegate))))) {
        change.z6l();
        $appyxComponent.rdg(dragAmount.c39_1, $density);
        tmp = true;
      } else {
        $appyxComponent.sdg();
        tmp = false;
      }
      return tmp;
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.sf3_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).t13 = function (value, $completion) {
    return this.sf3_1(value, $completion);
  };
  function children$composable$lambda($uiModels$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('uiModels', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $uiModels$delegate.u2();
  }
  function children$composable$_anonymous_$lambda$0_ylrj98($transformedBoundingBox$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('transformedBoundingBox', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $transformedBoundingBox$delegate.u2();
  }
  function children$composable$_anonymous_$lambda$1_ylrj99($transformedBoundingBox$delegate, value) {
    getLocalDelegateReference('transformedBoundingBox', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $transformedBoundingBox$delegate.h1a(value);
    return Unit_instance;
  }
  function children$composable$_anonymous_$lambda$2_ylrj9a($elementSize$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('elementSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $elementSize$delegate.u2().p3c_1;
  }
  function children$composable$_anonymous_$lambda$3_ylrj9b($elementSize$delegate, value) {
    getLocalDelegateReference('elementSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var value_0 = new IntSize(value);
    $elementSize$delegate.h1a(value_0);
    return Unit_instance;
  }
  function children$composable$_anonymous_$lambda$4_ylrj9c($offsetCenter$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('offsetCenter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $offsetCenter$delegate.u2().c39_1;
  }
  function children$composable$_anonymous_$lambda$5_ylrj9d($offsetCenter$delegate, value) {
    getLocalDelegateReference('offsetCenter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var value_0 = new Offset(value);
    $offsetCenter$delegate.h1a(value_0);
    return Unit_instance;
  }
  function children$composable$_anonymous_$lambda$6_ylrj9e($isVisible$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isVisible', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $isVisible$delegate.u2();
  }
  function elementOffset$composable$lambda($result$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('result', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $result$delegate.u2();
  }
  function ChildrenTransitionScope$children$composable$slambda(this$0, $saveableStateHolder, resultContinuation) {
    this.bf4_1 = this$0;
    this.cf4_1 = $saveableStateHolder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildrenTransitionScope$children$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = removedElements(this.bf4_1.of3_1);
            var tmp_1 = ChildrenTransitionScope$children$composable$slambda$slambda_0(this.cf4_1, null);
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
  protoOf(ChildrenTransitionScope$children$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new ChildrenTransitionScope$children$composable$slambda(this.bf4_1, this.cf4_1, completion);
    i.df4_1 = $this$LaunchedEffect;
    return i;
  };
  function ChildrenTransitionScope$children$composable$slambda_0(this$0, $saveableStateHolder, resultContinuation) {
    var i = new ChildrenTransitionScope$children$composable$slambda(this$0, $saveableStateHolder, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildrenTransitionScope$children$composable$lambda$lambda($elementOffset) {
    return function ($this$offset) {
      return new IntOffset($elementOffset);
    };
  }
  function ChildrenTransitionScope$children$composable$lambda$slambda($appyxComponent, this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $density, resultContinuation) {
    this.mf4_1 = $appyxComponent;
    this.nf4_1 = this$0;
    this.of4_1 = $transformedBoundingBox$delegate;
    this.pf4_1 = $offsetCenter$delegate;
    this.qf4_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildrenTransitionScope$children$composable$lambda$slambda).x6n = function ($this$pointerInput, $completion) {
    var tmp = this.y6n($this$pointerInput, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildrenTransitionScope$children$composable$lambda$slambda).fc = function (p1, $completion) {
    return this.x6n((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildrenTransitionScope$children$composable$lambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = ChildrenTransitionScope$children$composable$lambda$slambda$lambda(this.mf4_1);
            var tmp_1 = ChildrenTransitionScope$children$composable$lambda$slambda$lambda_0(this.mf4_1);
            suspendResult = detectDragGesturesOrCancellation(this.rf4_1, tmp_0, tmp_1, ChildrenTransitionScope$children$composable$lambda$slambda$lambda_1(this.nf4_1, this.of4_1, this.pf4_1, this.mf4_1, this.qf4_1), this);
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
  protoOf(ChildrenTransitionScope$children$composable$lambda$slambda).y6n = function ($this$pointerInput, completion) {
    var i = new ChildrenTransitionScope$children$composable$lambda$slambda(this.mf4_1, this.nf4_1, this.of4_1, this.pf4_1, this.qf4_1, completion);
    i.rf4_1 = $this$pointerInput;
    return i;
  };
  function ChildrenTransitionScope$children$composable$lambda$slambda_0($appyxComponent, this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $density, resultContinuation) {
    var i = new ChildrenTransitionScope$children$composable$lambda$slambda($appyxComponent, this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $density, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.x6n($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildrenTransitionScope$children$composable$lambda$lambda_0($elementOffset) {
    return function ($this$offset) {
      // Inline function 'androidx.compose.ui.unit.IntOffset.unaryMinus' call
      var this_0 = $elementOffset;
      var tmp$ret$0 = IntOffset_0(-_IntOffset___get_x__impl__qiqr5o(this_0) | 0, -_IntOffset___get_y__impl__2avpwj(this_0) | 0);
      return new IntOffset(tmp$ret$0);
    };
  }
  function ChildrenTransitionScope$children$composable$lambda$lambda_1($elementSize$delegate, $transformedBoundingBox$delegate, $gestureExtraTouchAreaPx, $offsetCenter$delegate) {
    return function (it) {
      children$composable$_anonymous_$lambda$3_ylrj9b($elementSize$delegate, it.t5o());
      var localCenter = Offset__div_impl_eaxtg1(Offset_0(_IntSize___get_width__impl__d9yl4o(it.t5o()), _IntSize___get_height__impl__prv63b(it.t5o())), 2.0);
      children$composable$_anonymous_$lambda$1_ylrj99($transformedBoundingBox$delegate, boundsInParent(it).p39($gestureExtraTouchAreaPx));
      children$composable$_anonymous_$lambda$5_ylrj9d($offsetCenter$delegate, Offset__minus_impl_hoj2c0(children$composable$_anonymous_$lambda$0_ylrj98($transformedBoundingBox$delegate).t39(), localCenter));
      return Unit_instance;
    };
  }
  function ChildrenTransitionScope$children$composable$lambda($offsetCenter$delegate, this$0, $elementSize$delegate, $$dirty, $this_children$composable, $elementUiModel, $appyxComponent, $transformedBoundingBox$delegate, $density, $gestureExtraTouchAreaPx, $saveableStateHolder, $block) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1075062131, $changed, -1, 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous> (AppyxComponent.kt:156)');
        }
        // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
        // Inline function 'androidx.compose.ui.unit.round' call
        var this_0 = children$composable$_anonymous_$lambda$4_ylrj9c($offsetCenter$delegate);
        // Inline function 'kotlin.math.roundToInt' call
        var this_1 = _Offset___get_x__impl__xvi35n(this_0);
        var tmp_0 = roundToInt(this_1);
        // Inline function 'kotlin.math.roundToInt' call
        var this_2 = _Offset___get_y__impl__8bzhra(this_0);
        var tmp$ret$1 = roundToInt(this_2);
        var this_3 = IntOffset_0(tmp_0, tmp$ret$1);
        var other = this$0.sf4(children$composable$_anonymous_$lambda$2_ylrj9a($elementSize$delegate), this$0.nf3_1, $composer_0, 896 & $$dirty);
        var elementOffset = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(this_3) - _IntOffset___get_x__impl__qiqr5o(other) | 0, _IntOffset___get_y__impl__2avpwj(this_3) - _IntOffset___get_y__impl__2avpwj(other) | 0);
        var tmp_1 = Companion_instance;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var key1 = new IntOffset(elementOffset);
        var $composer_1 = $composer_0;
        $composer_1.f1x(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.t1z(key1);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.r1z();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ChildrenTransitionScope$children$composable$lambda$lambda(elementOffset);
          $composer_1.s1z(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.h1x();
        var tmp_4 = offset(tmp_1, tmp0);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var keys = [$appyxComponent, this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $density];
        var $composer_2 = $composer_0;
        $composer_2.f1x(-1603429786);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var invalid_0 = false;
        var inductionVariable = 0;
        var last = keys.length;
        while (inductionVariable < last) {
          var key = keys[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          invalid_0 = !!(invalid_0 | $composer_2.t1z(key));
        }
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = invalid_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.r1z();
        var tmp_5;
        if (invalid_1 ? true : it_0 === Companion_getInstance_0().t1y_1) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ChildrenTransitionScope$children$composable$lambda$slambda_0($appyxComponent, this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $density, null);
          $composer_2.s1z(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        $composer_2.h1x();
        var tmp_7 = pointerInput(tmp_4, $appyxComponent, tmp0_0);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var key1_0 = new IntOffset(elementOffset);
        var $composer_3 = $composer_0;
        $composer_3.f1x(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_3.t1z(key1_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.r1z();
        var tmp_8;
        if (invalid_2 ? true : it_1 === Companion_getInstance_0().t1y_1) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ChildrenTransitionScope$children$composable$lambda$lambda_0(elementOffset);
          $composer_3.s1z(value_1);
          tmp_8 = value_1;
        } else {
          tmp_8 = it_1;
        }
        var tmp_9 = tmp_8;
        var tmp0_1 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        $composer_3.h1x();
        var tmp_10 = offset(tmp_7, tmp0_1).c5j($elementUiModel.uda_1);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var keys_0 = [$elementSize$delegate, $transformedBoundingBox$delegate, $gestureExtraTouchAreaPx, $offsetCenter$delegate];
        var $composer_4 = $composer_0;
        $composer_4.f1x(-1603429786);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var invalid_3 = false;
        var inductionVariable_0 = 0;
        var last_0 = keys_0.length;
        while (inductionVariable_0 < last_0) {
          var key_0 = keys_0[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          invalid_3 = !!(invalid_3 | $composer_4.t1z(key_0));
        }
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_4 = invalid_3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_4.r1z();
        var tmp_11;
        if (invalid_4 ? true : it_2 === Companion_getInstance_0().t1y_1) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = ChildrenTransitionScope$children$composable$lambda$lambda_1($elementSize$delegate, $transformedBoundingBox$delegate, $gestureExtraTouchAreaPx, $offsetCenter$delegate);
          $composer_4.s1z(value_2);
          tmp_11 = value_2;
        } else {
          tmp_11 = it_2;
        }
        var tmp_12 = tmp_11;
        var tmp0_2 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        $composer_4.h1x();
        Child$composable($this_children$composable, $elementUiModel.tdu(VOID, VOID, VOID, VOID, onPlaced(tmp_10, tmp0_2)), $saveableStateHolder, $block, $composer_0, 14 & $$dirty | 7168 & $$dirty << 6);
        var tmp_13;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_13 = Unit_instance;
        }
        tmp = tmp_13;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ChildrenTransitionScope$children$composable$lambda_0($tmp0_rcvr, $this_children$composable, $block, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.tf4($this_children$composable, $block, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ChildrenTransitionScope(containerSize, appyxComponent, gestureExtraTouchArea, gestureValidator) {
    this.nf3_1 = containerSize;
    this.of3_1 = appyxComponent;
    this.pf3_1 = gestureExtraTouchArea;
    this.qf3_1 = gestureValidator;
    this.rf3_1 = 0;
  }
  protoOf(ChildrenTransitionScope).tf4 = function (_this__u8e3s4, block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-975494963);
    sourceInformation($composer_0, 'C(children$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(block) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-975494963, $dirty, -1, 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable (AppyxComponent.kt:121)');
      }
      var saveableStateHolder = rememberSaveableStateHolder$composable($composer_0, 0);
      LaunchedEffect$composable(this.of3_1, ChildrenTransitionScope$children$composable$slambda_0(this, saveableStateHolder, null), $composer_0, 0);
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.b20(this_0);
      sourceInformationMarkerEnd($composer_1);
      var density = tmp0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>' call
      var gestureExtraTouchAreaPx = density.j3b(this.pf3_1);
      var uiModels$delegate = collectAsState$composable(this.of3_1.zd8_1, null, $composer_0, 0, 1);
      var appyxComponent = this.of3_1;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = children$composable$lambda(uiModels$delegate).v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>' call
        var id = element.qda_1.dd6_1;
        $composer_0.y1y(1799222812, id);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.f1x(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_2.t1z(id);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_2.r1z();
        var tmp;
        if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>' call
          var value = mutableStateOf(Companion_getInstance_4().e39_1);
          $composer_2.s1z(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_2.h1x();
        var transformedBoundingBox$delegate = tmp0_0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.f1x(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_3.t1z(id);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_3.r1z();
        var tmp_1;
        if (invalid_0 ? true : it_0 === Companion_getInstance_0().t1y_1) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>' call
          var value_0 = mutableStateOf(new IntSize(Companion_getInstance_1().o3c_1));
          $composer_3.s1z(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp0_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_3.h1x();
        var elementSize$delegate = tmp0_1;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_4 = $composer_0;
        $composer_4.f1x(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_4.t1z(id);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_4.r1z();
        var tmp_3;
        if (invalid_1 ? true : it_1 === Companion_getInstance_0().t1y_1) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>' call
          var value_1 = mutableStateOf(new Offset(Companion_getInstance_5().z38_1));
          $composer_4.s1z(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp_4 = tmp_3;
        var tmp0_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_4.h1x();
        var offsetCenter$delegate = tmp0_2;
        var isVisible$delegate = collectAsState$composable(element.rda_1, null, $composer_0, 0, 1);
        element.tda_1($composer_0, 0);
        if (children$composable$_anonymous_$lambda$6_ylrj9e(isVisible$delegate)) {
          var tmp_5 = [get_LocalMotionProperties().r2e(element.sda_1)];
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>' call
          var tmp_6 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_6, 1075062131, true, ChildrenTransitionScope$children$composable$lambda(offsetCenter$delegate, this, elementSize$delegate, $dirty, _this__u8e3s4, element, appyxComponent, transformedBoundingBox$delegate, density, gestureExtraTouchAreaPx, saveableStateHolder, block));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_5 = $composer_0;
          $composer_5.f1x(-838505973);
          sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_2 = $composer_5.t1z(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_2 = $composer_5.r1z();
          var tmp_7;
          if (invalid_2 ? true : it_2 === Companion_getInstance_0().t1y_1) {
            // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value_2 = ComposableLambda$invoke$ref(dispatchReceiver);
            $composer_5.s1z(value_2);
            tmp_7 = value_2;
          } else {
            tmp_7 = it_2;
          }
          var tmp_8 = tmp_7;
          var tmp0_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
          $composer_5.h1x();
          CompositionLocalProvider$composable(tmp_5, tmp0_3, $composer_0, 48);
        }
        $composer_0.z1y();
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
      tmp1_safe_receiver.w2e(ChildrenTransitionScope$children$composable$lambda_0(this, _this__u8e3s4, block, $changed));
    }
  };
  protoOf(ChildrenTransitionScope).sf4 = function (elementSize, containerSize, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1080399616);
    sourceInformation($composer_0, 'C(elementOffset$composable)P(1:c#ui.unit.IntSize,0:c#ui.unit.IntSize)');
    if (isTraceInProgress()) {
      traceEventStart(-1080399616, $changed, -1, 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.elementOffset$composable (AppyxComponent.kt:214)');
    }
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'com.bumble.appyx.interactions.core.ui.property.motionPropertyRenderValue$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-805353807);
      sourceInformation($composer_1, 'CC(motionPropertyRenderValue$composable)');
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalMotionProperties();
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_2.b20(this_0);
      sourceInformationMarkerEnd($composer_2);
      var motionProperties = tmp0;
      var tmp;
      if (motionProperties == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.find' call
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var tmp0_iterator = motionProperties.v();
          while (tmp0_iterator.w()) {
            var element = tmp0_iterator.y();
            // Inline function 'com.bumble.appyx.interactions.core.ui.property.motionPropertyRenderValue$composable.<anonymous>' call
            if (element instanceof PositionAlignment) {
              tmp$ret$2 = element;
              break $l$block;
            }
          }
          tmp$ret$2 = null;
        }
        tmp = tmp$ret$2;
      }
      var tmp_0 = tmp;
      var tmp1_safe_receiver = (tmp_0 == null ? true : tmp_0 instanceof PositionAlignment) ? tmp_0 : THROW_CCE();
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ddv_1;
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        $composer_1.h1x();
        tmp$ret$4 = null;
        break $l$block_0;
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      var renderValueFlow = tmp_1;
      var result$delegate = collectAsState$composable(renderValueFlow, null, $composer_1, 0, 1);
      var tmp0_0 = elementOffset$composable$lambda(result$delegate);
      $composer_1.h1x();
      tmp$ret$4 = tmp0_0;
    }
    var positionAlignment = tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_1 = get_LocalLayoutDirection();
    var $composer_3 = $composer_0;
    sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_3.b20(this_1);
    sourceInformationMarkerEnd($composer_3);
    var layoutDirection = tmp0_1;
    var tmp_2;
    if (positionAlignment == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.elementOffset$composable.<anonymous>' call
      tmp_2 = positionAlignment.b5j(elementSize, containerSize, layoutDirection);
    }
    var tmp1_elvis_lhs = tmp_2;
    var tmp_3;
    var tmp_4 = tmp1_elvis_lhs;
    if ((tmp_4 == null ? null : new IntOffset(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_6().g3c_1;
    } else {
      tmp_3 = tmp1_elvis_lhs;
    }
    var alignmentOffset = tmp_3;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return alignmentOffset;
  };
  function AppyxComponent$composable$lambda($containerSize$delegate) {
    _init_properties_AppyxComponent_kt__paqjst();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('containerSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $containerSize$delegate.u2().p3c_1;
  }
  function AppyxComponent$composable$lambda_0($containerSize$delegate, value) {
    _init_properties_AppyxComponent_kt__paqjst();
    getLocalDelegateReference('containerSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var value_0 = new IntSize(value);
    $containerSize$delegate.h1a(value_0);
    return Unit_instance;
  }
  function AppyxComponent$composable$lambda_1() {
    _init_properties_AppyxComponent_kt__paqjst();
    return EmptyCoroutineContext_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p38(p0, p1, p2, p3);
    };
  }
  function AppyxComponent$composable$lambda$lambda(child, $anonymous$parameter$1$, $composer, $changed) {
    _init_properties_AppyxComponent_kt__paqjst();
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(child) ? 4 : 2);
    if (!(($dirty & 651) === 130) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-597091924, $dirty, -1, 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous> (AppyxComponent.kt:67)');
      }
      child.uf4($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    return Unit_instance;
  }
  function AppyxComponent$composable$lambda_2($this_AppyxComponent$composable, $$dirty) {
    return function ($this$null, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.t1z($this$null) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-521103310, $dirty, -1, 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous> (AppyxComponent.kt:66)');
        }
        $this$null.tf4($this_AppyxComponent$composable, ComposableLambda$invoke$ref_0(composableLambdaInstance(-597091924, false, AppyxComponent$composable$lambda$lambda)), $composer_0, 14 & $$dirty | 896 & $dirty << 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.h1z();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o38(p0, p1, p2);
    };
  }
  function AppyxComponent$composable$lambda_3($appyxComponent, $coroutineScope, $clipToBounds) {
    return function () {
      $appyxComponent.tdf(new UiContext($coroutineScope, $clipToBounds._v));
      return Unit_instance;
    };
  }
  function AppyxComponent$composable$lambda_4($appyxComponent, $density, $screenWidthPx, $screenHeightPx, $containerSize$delegate) {
    return function (it) {
      AppyxComponent$composable$lambda_0($containerSize$delegate, it.t5o());
      $appyxComponent.zdc(new TransitionBounds($density, _IntSize___get_width__impl__d9yl4o(it.t5o()), _IntSize___get_height__impl__prv63b(it.t5o()), $screenWidthPx, $screenHeightPx));
      return Unit_instance;
    };
  }
  function AppyxComponent$composable$lambda_5($appyxComponent) {
    return function (it) {
      var tmp;
      if (it.a6k_1 === Companion_getInstance_7().a6l_1) {
        $appyxComponent.m1x();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AppyxComponent$composable$lambda_6($childrenBlock, $appyxComponent, $gestureExtraTouchArea, $gestureValidator, $containerSize$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-2097015828, $changed, -1, 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous> (AppyxComponent.kt:103)');
        }
        $childrenBlock(new ChildrenTransitionScope(AppyxComponent$composable$lambda($containerSize$delegate), $appyxComponent, $gestureExtraTouchArea._v.z3b_1, $gestureValidator._v), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function AppyxComponent$composable$lambda_7($this_AppyxComponent$composable, $appyxComponent, $modifier, $clipToBounds, $gestureValidator, $gestureExtraTouchArea, $block, $$changed, $$default) {
    return function ($composer, $force) {
      AppyxComponent$composable($this_AppyxComponent$composable, $appyxComponent, $modifier._v, $clipToBounds._v, $gestureValidator._v, $gestureExtraTouchArea._v.z3b_1, $block._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_AppyxComponent_kt_dfwb5r;
  function _init_properties_AppyxComponent_kt__paqjst() {
    if (!properties_initialized_AppyxComponent_kt_dfwb5r) {
      properties_initialized_AppyxComponent_kt_dfwb5r = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      defaultExtraTouch = _Dp___init__impl__ms3zkb(48);
    }
  }
  function Child$composable(_this__u8e3s4, elementUiModel, saveableStateHolder, decorator, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1455551485);
    sourceInformation($composer_0, 'C(Child$composable)P(1,2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(elementUiModel) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.t1z(saveableStateHolder) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(decorator) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(1455551485, $dirty, -1, 'com.bumble.appyx.navigation.composable.Child$composable (Child.kt:18)');
      }
      var navElement = elementUiModel.qda_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key1 = navElement.dd6_1;
      var $composer_1 = $composer_0;
      $composer_1.f1x(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t1z(key1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp;
      if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.composable.Child$composable.<anonymous>' call
        var value = _this__u8e3s4.vf2(navElement);
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      var childEntry = tmp0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.Child$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1786452345, true, Child$composable$lambda(decorator, childEntry, elementUiModel, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.f1x(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.r1z();
      var tmp_2;
      if (invalid_0 ? true : it_0 === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.composable.Child$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_2.s1z(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_2.h1x();
      saveableStateHolder.x4n(navElement, tmp0_0, $composer_0, 48 | 896 & $dirty);
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
      tmp0_safe_receiver.w2e(Child$composable$lambda_0(_this__u8e3s4, elementUiModel, saveableStateHolder, decorator, $changed));
    }
  }
  function ChildRendererImpl$invoke$composable$lambda(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-608276698, $changed, -1, 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>.<anonymous> (Child.kt:56)');
        }
        this$0.vf4_1.xf4(Companion_instance, $composer_0, 6, 0);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ChildRendererImpl$invoke$composable$lambda_0($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.uf4($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ChildRendererImpl(node, elementUiModel) {
    this.vf4_1 = node;
    this.wf4_1 = elementUiModel;
  }
  protoOf(ChildRendererImpl).uf4 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1605605476);
    sourceInformation($composer_0, 'C(invoke$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-1605605476, $dirty, -1, 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable (Child.kt:51)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier = this.wf4_1.uda_1;
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      $composer_1.f1x(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_2().d5i_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $changed_0 = 112 & 0 << 3;
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.f1x(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_instance;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_3().s6v_1;
      var skippableUpdate = materializerOf(modifier_1);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.u1y();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.k1z();
      if ($composer_3.v1y()) {
        $composer_3.l1z(factory);
      } else {
        $composer_3.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_3().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_3().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_3().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_0;
      if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
        $this$with.s1z(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
        tmp_0 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.f1x(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_1 = [get_LocalMotionProperties().r2e(this.wf4_1.sda_1)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>.<anonymous>' call
      var tmp_2 = $composer_5;
      var dispatchReceiver = composableLambda(tmp_2, -608276698, true, ChildRendererImpl$invoke$composable$lambda(this));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_5;
      $composer_6.f1x(-838505973);
      sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_6.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_6.r1z();
      var tmp_3;
      if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_6.s1z(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_6.h1x();
      CompositionLocalProvider$composable(tmp_1, tmp0, $composer_5, 48);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.h1x();
      $composer_3.n1z();
      $composer_2.h1x();
      $composer_1.h1x();
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
      tmp1_safe_receiver.w2e(ChildRendererImpl$invoke$composable$lambda_0(this, $changed));
    }
  };
  function Child$composable$lambda($decorator, $childEntry, $elementUiModel, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1786452345, $changed, -1, 'com.bumble.appyx.navigation.composable.Child$composable.<anonymous> (Child.kt:22)');
        }
        $decorator(new ChildRendererImpl($childEntry.ff1_1, $elementUiModel), $elementUiModel, $composer_0, 112 & $$dirty | 896 & $$dirty >> 3);
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
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function Child$composable$lambda_0($this_Child$composable, $elementUiModel, $saveableStateHolder, $decorator, $$changed) {
    return function ($composer, $force) {
      Child$composable($this_Child$composable, $elementUiModel, $saveableStateHolder, $decorator, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NodeHost$composable(lifecycle, integrationPoint, screenSize, modifier, customisations, factory, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var customisations_0 = {_v: customisations};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1970060349);
    sourceInformation($composer_0, 'C(NodeHost$composable)P(3,2,5,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(lifecycle) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(integrationPoint) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.t1z(screenSize) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.t1z(customisations_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.t1z(factory) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 8) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 16) === 0)) {
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
            // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>' call
            var value = new NodeCustomisationDirectoryImpl();
            $composer_1.s1z(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_1.h1x();
          customisations_0._v = tmp0;
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(1970060349, $dirty, -1, 'com.bumble.appyx.navigation.integration.NodeHost$composable (NodeHost.kt:36)');
      }
      var tmp_1 = [get_LocalScreenSize().r2e(screenSize)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -755439189, true, NodeHost$composable$lambda(factory, customisations_0, integrationPoint, $dirty, modifier_0, lifecycle));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.f1x(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.r1z();
      var tmp_3;
      if (invalid ? true : it_0 === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_2.s1z(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_2.h1x();
      CompositionLocalProvider$composable(tmp_1, tmp0_0, $composer_0, 48);
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
      tmp0_safe_receiver.w2e(NodeHost$composable$lambda_0(lifecycle, integrationPoint, screenSize, modifier_0, customisations_0, factory, $changed, $default));
    }
  }
  function rememberNode$composable(factory, customisations, integrationPoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1436725836);
    if (isTraceInProgress()) {
      traceEventStart(1436725836, $changed, -1, 'com.bumble.appyx.navigation.integration.rememberNode$composable (NodeHost.kt:59)');
    }
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [].slice();
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
    if (false ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'com.bumble.appyx.navigation.integration.rememberNode$composable.<anonymous>' call
      var value = rememberNode$composable$lambda;
      $composer_1.s1z(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_1.h1x();
    var tmp_2 = tmp0;
    var tmp_3 = mapSaver(tmp_2, rememberNode$composable$lambda_0(factory, customisations, integrationPoint));
    var tmp0_0 = rememberSaveable$composable(tmp, tmp_3, null, rememberNode$composable$lambda_1(factory, customisations, integrationPoint), $composer_0, 0, 4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  function NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m($node$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('node', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $node$delegate.u2();
  }
  function rememberNode$composable$createNode($factory, $customisations, $integrationPoint, savedStateMap) {
    // Inline function 'kotlin.apply' call
    var this_0 = $factory.af5(Companion_instance_3.zf4(savedStateMap, $customisations));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.navigation.integration.rememberNode$composable.createNode.<anonymous>' call
    this_0.bf5($integrationPoint);
    return build(this_0);
  }
  function sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0(function_0) {
    this.cf5_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0).df5 = function (newState, event) {
    return this.cf5_1(newState, event);
  };
  function _no_name_provided__qut3iv_1($node$delegate) {
    this.ef5_1 = $node$delegate;
  }
  protoOf(_no_name_provided__qut3iv_1).gk = function () {
    // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m(this.ef5_1).ff5(State_DESTROYED_getInstance());
  };
  function NodeHost$composable$lambda$lambda($node$delegate) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1($node$delegate);
    };
  }
  function NodeHost$composable$lambda$lambda$lambda($node$delegate) {
    return function (newState, _anonymous_parameter_1__qggqgd) {
      NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m($node$delegate).ff5(newState);
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_2($lifecycle, $observer) {
    this.gf5_1 = $lifecycle;
    this.hf5_1 = $observer;
  }
  protoOf(_no_name_provided__qut3iv_2).gk = function () {
    // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.gf5_1.if5(this.hf5_1);
  };
  function NodeHost$composable$lambda$lambda_0($node$delegate, $lifecycle) {
    return function ($this$DisposableEffect) {
      NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m($node$delegate).ff5($lifecycle.n90());
      var tmp = NodeHost$composable$lambda$lambda$lambda($node$delegate);
      var observer = new sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0(tmp);
      $lifecycle.jf5(observer);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_2($lifecycle, observer);
    };
  }
  function NodeHost$composable$lambda($factory, $customisations, $integrationPoint, $$dirty, $modifier, $lifecycle) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-755439189, $changed, -1, 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous> (NodeHost.kt:38)');
        }
        var node$delegate = rememberNode$composable($factory, $customisations._v, $integrationPoint, $composer_0, 14 & $$dirty >> 15 | 112 & $$dirty >> 9 | 896 & $$dirty << 3);
        var tmp_0 = NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m(node$delegate);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.f1x(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.t1z(node$delegate);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.r1z();
        var tmp_1;
        if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
          // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = NodeHost$composable$lambda$lambda(node$delegate);
          $composer_1.s1z(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.h1x();
        DisposableEffect$composable(tmp_0, tmp0, $composer_0, 0);
        NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m(node$delegate).xf4($modifier._v, $composer_0, 14 & $$dirty >> 9, 0);
        DisposableEffect$composable($lifecycle, NodeHost$composable$lambda$lambda_0(node$delegate, $lifecycle), $composer_0, 14 & $$dirty);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function NodeHost$composable$lambda_0($lifecycle, $integrationPoint, $screenSize, $modifier, $customisations, $factory, $$changed, $$default) {
    return function ($composer, $force) {
      NodeHost$composable($lifecycle, $integrationPoint, $screenSize, $modifier._v, $customisations._v, $factory, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function rememberNode$composable$lambda($this$mapSaver, node) {
    return node.ff2($this$mapSaver);
  }
  function rememberNode$composable$lambda_0($factory, $customisations, $integrationPoint) {
    return function (state) {
      return rememberNode$composable$createNode($factory, $customisations, $integrationPoint, state);
    };
  }
  function rememberNode$composable$lambda_1($factory, $customisations, $integrationPoint) {
    return function () {
      return mutableStateOf(rememberNode$composable$createNode($factory, $customisations, $integrationPoint, null));
    };
  }
  function get_LocalScreenSize() {
    _init_properties_ScreenSize_kt__gyzrhp();
    return LocalScreenSize;
  }
  var LocalScreenSize;
  var WindowSizeClass_COMPACT_instance;
  var WindowSizeClass_MEDIUM_instance;
  var WindowSizeClass_EXPANDED_instance;
  var WindowSizeClass_entriesInitialized;
  function WindowSizeClass_initEntries() {
    if (WindowSizeClass_entriesInitialized)
      return Unit_instance;
    WindowSizeClass_entriesInitialized = true;
    WindowSizeClass_COMPACT_instance = new WindowSizeClass('COMPACT', 0);
    WindowSizeClass_MEDIUM_instance = new WindowSizeClass('MEDIUM', 1);
    WindowSizeClass_EXPANDED_instance = new WindowSizeClass('EXPANDED', 2);
  }
  function WindowSizeClass(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WindowSizeClass_COMPACT_getInstance() {
    WindowSizeClass_initEntries();
    return WindowSizeClass_COMPACT_instance;
  }
  function WindowSizeClass_MEDIUM_getInstance() {
    WindowSizeClass_initEntries();
    return WindowSizeClass_MEDIUM_instance;
  }
  function WindowSizeClass_EXPANDED_getInstance() {
    WindowSizeClass_initEntries();
    return WindowSizeClass_EXPANDED_instance;
  }
  function ScreenSize(widthDp, heightDp) {
    this.xf2_1 = widthDp;
    this.yf2_1 = heightDp;
    var tmp = this;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(600);
    if (Dp__compareTo_impl_tlg3dl(this.xf2_1, tmp$ret$0) < 0) {
      tmp_0 = WindowSizeClass_COMPACT_getInstance();
    } else {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(840);
      if (Dp__compareTo_impl_tlg3dl(this.xf2_1, tmp$ret$1) < 0) {
        tmp_0 = WindowSizeClass_MEDIUM_getInstance();
      } else {
        tmp_0 = WindowSizeClass_EXPANDED_getInstance();
      }
    }
    tmp.zf2_1 = tmp_0;
    this.af3_1 = 0;
  }
  protoOf(ScreenSize).toString = function () {
    return 'ScreenSize(widthDp=' + new Dp(this.xf2_1) + ', heightDp=' + new Dp(this.yf2_1) + ')';
  };
  protoOf(ScreenSize).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.xf2_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.yf2_1) | 0;
    return result;
  };
  protoOf(ScreenSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScreenSize))
      return false;
    var tmp0_other_with_cast = other instanceof ScreenSize ? other : THROW_CCE();
    if (!equals(this.xf2_1, tmp0_other_with_cast.xf2_1))
      return false;
    if (!equals(this.yf2_1, tmp0_other_with_cast.yf2_1))
      return false;
    return true;
  };
  function LocalScreenSize$lambda() {
    _init_properties_ScreenSize_kt__gyzrhp();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    return new ScreenSize(tmp, tmp$ret$1);
  }
  var properties_initialized_ScreenSize_kt_xrizip;
  function _init_properties_ScreenSize_kt__gyzrhp() {
    if (!properties_initialized_ScreenSize_kt_xrizip) {
      properties_initialized_ScreenSize_kt_xrizip = true;
      LocalScreenSize = compositionLocalOf(VOID, LocalScreenSize$lambda);
    }
  }
  function IntegrationPoint() {
    this.kf5_1 = 0;
  }
  function Companion_0() {
    this.nf5_1 = "You're accessing an IntegrationPointStub. This means you're using a Node without ever integrating it to a proper IntegrationPoint. This is fine during tests with limited scope, but it looks like the code that leads here requires interfacing with a valid implementation. You may be attempting to access the IntegrationPoint before it is attached to the Node.";
  }
  var Companion_instance_1;
  function Companion_getInstance_9() {
    return Companion_instance_1;
  }
  function IntegrationPointStub() {
    IntegrationPoint.call(this);
    this.pf5_1 = 0;
  }
  protoOf(IntegrationPointStub).lf5 = function () {
    return false;
  };
  protoOf(IntegrationPointStub).mf5 = function () {
    // Inline function 'kotlin.error' call
    var message = "You're accessing an IntegrationPointStub. This means you're using a Node without ever integrating it to a proper IntegrationPoint. This is fine during tests with limited scope, but it looks like the code that leads here requires interfacing with a valid implementation. You may be attempting to access the IntegrationPoint before it is attached to the Node.";
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function invoke$lambda(p0, p1, p2, $completion) {
    return new Triple(p0, p1, p2);
  }
  function ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl() {
  }
  protoOf(ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl).qf5 = function (p0, p1, p2, $completion) {
    return invoke$lambda(p0, p1, p2, $completion);
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl).rf5 = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof State ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof Elements ? p2 : THROW_CCE();
    return this.qf5(tmp, tmp_0, p3 instanceof CompareValues ? p3 : THROW_CCE(), $completion);
  };
  function ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl_0() {
    var i = new ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl();
    var l = function (p0, p1, p2, $completion) {
      return i.qf5(p0, p1, p2, $completion);
    };
    l.$arity = 3;
    return l;
  }
  function ChildNodeLifecycleManager$launch$slambda$slambda(this$0, resultContinuation) {
    this.af6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda).df6 = function ($this$onCompletion, it, $completion) {
    var tmp = this.ef6($this$onCompletion, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.df6(tmp, (p2 == null ? true : p2 instanceof Error) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          var tmp0_iterator = this.af6_1.gf6_1.u2().p2().v();
          while (tmp0_iterator.w()) {
            var element = tmp0_iterator.y();
            setState(element, this.af6_1, State_DESTROYED_getInstance());
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
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda).ef6 = function ($this$onCompletion, it, completion) {
    var i = new ChildNodeLifecycleManager$launch$slambda$slambda(this.af6_1, completion);
    i.bf6_1 = $this$onCompletion;
    i.cf6_1 = it;
    return i;
  };
  function ChildNodeLifecycleManager$launch$slambda$slambda_0(this$0, resultContinuation) {
    var i = new ChildNodeLifecycleManager$launch$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$onCompletion, it, $completion) {
      return i.df6($this$onCompletion, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ChildNodeLifecycleManager$launch$slambda$slambda_1(this$0, resultContinuation) {
    this.sf6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda_1).uf6 = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.vf6(_name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda_1).fc = function (p1, $completion) {
    return this.uf6(p1 instanceof Triple ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          var parentLifecycleState = this.tf6_1.ae();
          var screenState = this.tf6_1.be();
          var children = this.tf6_1.mg();
          var tmp0_iterator = screenState.ld7_1.v();
          while (tmp0_iterator.w()) {
            var element = tmp0_iterator.y();
            var childState = minOf(parentLifecycleState, State_RESUMED_getInstance());
            var tmp0_safe_receiver = children.z1v().b3(element);
            if (tmp0_safe_receiver == null)
              null;
            else {
              setState(tmp0_safe_receiver, this.sf6_1, childState);
            }
          }
          var tmp0_iterator_0 = screenState.md7_1.v();
          while (tmp0_iterator_0.w()) {
            var element_0 = tmp0_iterator_0.y();
            if (this.sf6_1.hf6_1.equals(KeepMode_KEEP_getInstance())) {
              var childState_0 = minOf(parentLifecycleState, State_CREATED_getInstance());
              var tmp0_safe_receiver_0 = children.z1v().b3(element_0);
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                setState(tmp0_safe_receiver_0, this.sf6_1, childState_0);
              }
            } else {
              var tmp1_safe_receiver = children.qev_1;
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b3(element_0);
              if (tmp2_safe_receiver == null)
                null;
              else {
                setState(tmp2_safe_receiver, this.sf6_1, State_DESTROYED_getInstance());
              }
            }
          }
          if (!(children.qev_1 == null)) {
            var removedKeys = minus(children.qev_1.o2(), children.z1v().o2());
            var tmp0_iterator_1 = removedKeys.v();
            while (tmp0_iterator_1.w()) {
              var element_1 = tmp0_iterator_1.y();
              var removedChild = children.qev_1.b3(element_1);
              if (removedChild == null)
                null;
              else {
                setState(removedChild, this.sf6_1, State_DESTROYED_getInstance());
              }
            }
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
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda_1).vf6 = function (_name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ChildNodeLifecycleManager$launch$slambda$slambda_1(this.sf6_1, completion);
    i.tf6_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ChildNodeLifecycleManager$launch$slambda$slambda_2(this$0, resultContinuation) {
    var i = new ChildNodeLifecycleManager$launch$slambda$slambda_1(this$0, resultContinuation);
    var l = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.uf6(_name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function setState(_this__u8e3s4, $this, state) {
    var tmp0_safe_receiver = get_nodeOrNull(_this__u8e3s4);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ff5(state);
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.wf6_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).t13 = function (value, $completion) {
    return this.wf6_1(value, $completion);
  };
  function ChildNodeLifecycleManager$launch$slambda(this$0, resultContinuation) {
    this.ff7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeLifecycleManager$launch$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = this.ff7_1.ff6_1.dde();
            var tmp_1 = withPrevious(this.ff7_1.gf6_1);
            var tmp_2 = combine(this.ff7_1.jf6_1, tmp_0, tmp_1, ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl_0());
            var tmp_3 = onCompletion(tmp_2, ChildNodeLifecycleManager$launch$slambda$slambda_0(this.ff7_1, null));
            var tmp_4 = ChildNodeLifecycleManager$launch$slambda$slambda_2(this.ff7_1, null);
            suspendResult = tmp_3.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_4), this);
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
  protoOf(ChildNodeLifecycleManager$launch$slambda).w1b = function ($this$launch, completion) {
    var i = new ChildNodeLifecycleManager$launch$slambda(this.ff7_1, completion);
    i.gf7_1 = $this$launch;
    return i;
  };
  function ChildNodeLifecycleManager$launch$slambda_0(this$0, resultContinuation) {
    var i = new ChildNodeLifecycleManager$launch$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildNodeLifecycleManager(appyxComponent, children, keepMode, coroutineScope) {
    this.ff6_1 = appyxComponent;
    this.gf6_1 = children;
    this.hf6_1 = keepMode;
    this.if6_1 = coroutineScope;
    this.jf6_1 = MutableStateFlow(State_INITIALIZED_getInstance());
  }
  protoOf(ChildNodeLifecycleManager).hf7 = function (state) {
    this.jf6_1.h1a(state);
  };
  protoOf(ChildNodeLifecycleManager).if7 = function () {
    launch(this.if6_1, VOID, VOID, ChildNodeLifecycleManager$launch$slambda_0(this, null));
  };
  function DefaultPlatformLifecycleObserver() {
  }
  function PlatformLifecycleEventObserver() {
  }
  var State_INITIALIZED_instance;
  var State_CREATED_instance;
  var State_STARTED_instance;
  var State_RESUMED_instance;
  var State_DESTROYED_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_INITIALIZED_instance = new State('INITIALIZED', 0);
    State_CREATED_instance = new State('CREATED', 1);
    State_STARTED_instance = new State('STARTED', 2);
    State_RESUMED_instance = new State('RESUMED', 3);
    State_DESTROYED_instance = new State('DESTROYED', 4);
  }
  var Event_ON_CREATE_instance;
  var Event_ON_START_instance;
  var Event_ON_RESUME_instance;
  var Event_ON_PAUSE_instance;
  var Event_ON_STOP_instance;
  var Event_ON_DESTROY_instance;
  var Event_ON_ANY_instance;
  var Event_entriesInitialized;
  function Event_initEntries() {
    if (Event_entriesInitialized)
      return Unit_instance;
    Event_entriesInitialized = true;
    Event_ON_CREATE_instance = new Event('ON_CREATE', 0);
    Event_ON_START_instance = new Event('ON_START', 1);
    Event_ON_RESUME_instance = new Event('ON_RESUME', 2);
    Event_ON_PAUSE_instance = new Event('ON_PAUSE', 3);
    Event_ON_STOP_instance = new Event('ON_STOP', 4);
    Event_ON_DESTROY_instance = new Event('ON_DESTROY', 5);
    Event_ON_ANY_instance = new Event('ON_ANY', 6);
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Event(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function State_INITIALIZED_getInstance() {
    State_initEntries();
    return State_INITIALIZED_instance;
  }
  function State_CREATED_getInstance() {
    State_initEntries();
    return State_CREATED_instance;
  }
  function State_RESUMED_getInstance() {
    State_initEntries();
    return State_RESUMED_instance;
  }
  function State_DESTROYED_getInstance() {
    State_initEntries();
    return State_DESTROYED_instance;
  }
  function Event_ON_CREATE_getInstance() {
    Event_initEntries();
    return Event_ON_CREATE_instance;
  }
  function Event_ON_START_getInstance() {
    Event_initEntries();
    return Event_ON_START_instance;
  }
  function Event_ON_RESUME_getInstance() {
    Event_initEntries();
    return Event_ON_RESUME_instance;
  }
  function Event_ON_DESTROY_getInstance() {
    Event_initEntries();
    return Event_ON_DESTROY_instance;
  }
  function Companion_1() {
    this.mf7_1 = 'Lifecycle';
  }
  var Companion_instance_2;
  function Companion_getInstance_10() {
    return Companion_instance_2;
  }
  function LifecycleLogger(node) {
    this.nf7_1 = node;
  }
  protoOf(LifecycleLogger).jf7 = function () {
    AppyxLogger_getInstance().dd3('Lifecycle', '' + getKClassFromExpression(this.nf7_1).d7() + '@' + hashCode(this.nf7_1) + ' onCreate');
  };
  protoOf(LifecycleLogger).li = function () {
    AppyxLogger_getInstance().dd3('Lifecycle', '' + getKClassFromExpression(this.nf7_1).d7() + '@' + hashCode(this.nf7_1) + ' onStart');
  };
  protoOf(LifecycleLogger).kf7 = function () {
    AppyxLogger_getInstance().dd3('Lifecycle', '' + getKClassFromExpression(this.nf7_1).d7() + '@' + hashCode(this.nf7_1) + ' onResume');
  };
  protoOf(LifecycleLogger).lf7 = function () {
    AppyxLogger_getInstance().dd3('Lifecycle', '' + getKClassFromExpression(this.nf7_1).d7() + '@' + hashCode(this.nf7_1) + ' onDestroy');
  };
  function get_LocalCommonLifecycleOwner() {
    _init_properties_LocalCommonLifecycleOwner_kt__tls7jn();
    return LocalCommonLifecycleOwner;
  }
  var LocalCommonLifecycleOwner;
  function LocalCommonLifecycleOwner$lambda() {
    _init_properties_LocalCommonLifecycleOwner_kt__tls7jn();
    return null;
  }
  var properties_initialized_LocalCommonLifecycleOwner_kt_j49cnj;
  function _init_properties_LocalCommonLifecycleOwner_kt__tls7jn() {
    if (!properties_initialized_LocalCommonLifecycleOwner_kt_j49cnj) {
      properties_initialized_LocalCommonLifecycleOwner_kt_j49cnj = true;
      LocalCommonLifecycleOwner = compositionLocalOf(VOID, LocalCommonLifecycleOwner$lambda);
    }
  }
  function update($this) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.minByOrNull' call
      var iterator = $this.mex_1.v();
      if (!iterator.w()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var minElem = iterator.y();
      if (!iterator.w()) {
        tmp$ret$0 = minElem;
        break $l$block_0;
      }
      // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.update.<anonymous>' call
      var minValue = minElem.n90();
      do {
        var e = iterator.y();
        // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.update.<anonymous>' call
        var v = e.n90();
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.w());
      tmp$ret$0 = minElem;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.update.<anonymous>' call
      if (!tmp0_safe_receiver.n90().equals(State_INITIALIZED_getInstance())) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.update.<anonymous>' call
      $this.lex_1.tf7(tmp1_safe_receiver.n90());
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.uf7_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).z8 = function (a, b) {
    return this.uf7_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.z8(a, b);
  };
  function MinimumCombinedLifecycle$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.<anonymous>' call
    var tmp = a.n90();
    // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.<anonymous>' call
    var tmp$ret$1 = b.n90();
    return compareValues(tmp, tmp$ret$1);
  }
  function MinimumCombinedLifecycle$manage$1(this$0) {
    this.vf7_1 = this$0;
  }
  protoOf(MinimumCombinedLifecycle$manage$1).jf7 = function () {
    update(this.vf7_1);
  };
  protoOf(MinimumCombinedLifecycle$manage$1).li = function () {
    update(this.vf7_1);
  };
  protoOf(MinimumCombinedLifecycle$manage$1).kf7 = function () {
    update(this.vf7_1);
  };
  protoOf(MinimumCombinedLifecycle$manage$1).lf7 = function () {
    update(this.vf7_1);
  };
  function MinimumCombinedLifecycle(lifecycles) {
    this.lex_1 = Companion_instance_6.wf7(this);
    this.mex_1 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = MinimumCombinedLifecycle$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var tmp0_iterator = sortedWith(lifecycles, tmp$ret$0).v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.<anonymous>' call
      this.xf7(element);
    }
    this.nex_1 = this.lex_1;
    this.oex_1 = this.lex_1.y5j();
  }
  protoOf(MinimumCombinedLifecycle).xf7 = function (lifecycle) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.mex_1.s(lifecycle);
    lifecycle.jf5(new MinimumCombinedLifecycle$manage$1(this));
    update(this);
  };
  function NodeLifecycleImpl$lifecycleScope$delegate$lambda(this$0) {
    return function () {
      return this$0.yf7_1.y5j();
    };
  }
  function NodeLifecycleImpl(lifecycleOwner) {
    this.yf7_1 = Companion_instance_6.wf7(lifecycleOwner);
    this.zf7_1 = this.yf7_1;
    var tmp = this;
    tmp.af8_1 = lazy(NodeLifecycleImpl$lifecycleScope$delegate$lambda(this));
  }
  protoOf(NodeLifecycleImpl).ff5 = function (state) {
    this.yf7_1.tf7(state);
  };
  function get_isDestroyed(_this__u8e3s4) {
    return _this__u8e3s4.n90().equals(State_DESTROYED_getInstance());
  }
  function Root() {
    Root_instance = this;
    AncestryInfo.call(this);
    this.cf8_1 = 0;
  }
  var Root_instance;
  function Root_getInstance() {
    if (Root_instance == null)
      new Root();
    return Root_instance;
  }
  function Child(anchor) {
    AncestryInfo.call(this);
    this.ef8_1 = anchor;
    this.ff8_1 = 0;
  }
  protoOf(Child).toString = function () {
    return 'Child(anchor=' + this.ef8_1 + ')';
  };
  protoOf(Child).hashCode = function () {
    return hashCode(this.ef8_1);
  };
  protoOf(Child).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Child))
      return false;
    var tmp0_other_with_cast = other instanceof Child ? other : THROW_CCE();
    if (!equals(this.ef8_1, tmp0_other_with_cast.ef8_1))
      return false;
    return true;
  };
  function AncestryInfo() {
    this.gf8_1 = 0;
  }
  function Companion_2() {
    this.yf4_1 = 'build.context.identifier';
  }
  protoOf(Companion_2).zf4 = function (savedStateMap, customisations) {
    return new BuildContext(Root_getInstance(), savedStateMap, customisations);
  };
  var Companion_instance_3;
  function Companion_getInstance_11() {
    return Companion_instance_3;
  }
  function BuildContext$identifier$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.if8_1 == null) {
        tmp = UUID_instance.bd6();
      } else {
        var tmp_0 = this$0.if8_1.b3('build.context.identifier');
        var tmp0_elvis_lhs = (tmp_0 == null ? true : typeof tmp_0 === 'string') ? tmp_0 : THROW_CCE();
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          var message = 'onSaveInstanceState() was not called';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  function BuildContext(ancestryInfo, savedStateMap, customisations) {
    this.hf8_1 = ancestryInfo;
    this.if8_1 = savedStateMap;
    this.jf8_1 = customisations;
    var tmp = this;
    tmp.kf8_1 = lazy(BuildContext$identifier$delegate$lambda(this));
    this.lf8_1 = 0;
  }
  protoOf(BuildContext).mf8 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.kf8_1;
    identifier$factory();
    return this_0.u2();
  };
  protoOf(BuildContext).nf8 = function (state) {
    // Inline function 'kotlin.collections.set' call
    var key = 'build.context.identifier';
    var value = this.mf8();
    state.r2(key, value);
  };
  protoOf(BuildContext).toString = function () {
    return 'BuildContext(ancestryInfo=' + this.hf8_1 + ', savedStateMap=' + this.if8_1 + ', customisations=' + this.jf8_1 + ')';
  };
  protoOf(BuildContext).hashCode = function () {
    var result = hashCode(this.hf8_1);
    result = imul(result, 31) + (this.if8_1 == null ? 0 : hashCode(this.if8_1)) | 0;
    result = imul(result, 31) + hashCode(this.jf8_1) | 0;
    return result;
  };
  protoOf(BuildContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BuildContext))
      return false;
    var tmp0_other_with_cast = other instanceof BuildContext ? other : THROW_CCE();
    if (!equals(this.hf8_1, tmp0_other_with_cast.hf8_1))
      return false;
    if (!equals(this.if8_1, tmp0_other_with_cast.if8_1))
      return false;
    if (!equals(this.jf8_1, tmp0_other_with_cast.jf8_1))
      return false;
    return true;
  };
  function identifier$factory() {
    return getPropertyCallableRef('identifier', 1, KProperty1, function (receiver) {
      return receiver.mf8();
    }, null);
  }
  function node$composable(buildContext, composable) {
    return new ComposableNode(buildContext, composable);
  }
  function ComposableNode$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.cf9($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ComposableNode(buildContext, composable) {
    Node_init_$Init$(buildContext, VOID, VOID, this);
    this.af9_1 = composable;
    this.bf9_1 = 0;
  }
  protoOf(ComposableNode).cf9 = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1593206340);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(1593206340, $dirty, -1, 'com.bumble.appyx.navigation.node.ComposableNode.View$composable (ComposableNode.kt:14)');
      }
      this.af9_1(modifier, $composer_0, 14 & $dirty);
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
      tmp1_safe_receiver.w2e(ComposableNode$View$composable$lambda(this, modifier, $changed));
    }
  };
  function EmptyNodeView$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.cf9($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function EmptyNodeView() {
    this.hf9_1 = 0;
  }
  protoOf(EmptyNodeView).cf9 = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1379266785);
    sourceInformation($composer_0, 'C(View$composable)');
    if (!(($changed & 1) === 0) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-1379266785, $changed, -1, 'com.bumble.appyx.navigation.node.EmptyNodeView.View$composable (EmptyNodeViews.kt:8)');
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
      tmp1_safe_receiver.w2e(EmptyNodeView$View$composable$lambda(this, modifier, $changed));
    }
  };
  var EmptyNodeView_instance;
  function EmptyNodeView_getInstance() {
    return EmptyNodeView_instance;
  }
  function EmptyParentNodeView$NodeView$composable$lambda($tmp0_rcvr, $this_NodeView$composable, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.jf9($this_NodeView$composable, $modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function EmptyParentNodeView() {
    this.if9_1 = 0;
  }
  protoOf(EmptyParentNodeView).jf9 = function (_this__u8e3s4, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1587885035);
    sourceInformation($composer_0, 'C(NodeView$composable)');
    if (!(($changed & 1) === 0) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-1587885035, $changed, -1, 'com.bumble.appyx.navigation.node.EmptyParentNodeView.NodeView$composable (EmptyNodeViews.kt:14)');
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
      tmp1_safe_receiver.w2e(EmptyParentNodeView$NodeView$composable$lambda(this, _this__u8e3s4, modifier, $changed));
    }
  };
  function get_LocalNode() {
    _init_properties_LocalNode_kt__tayv8b();
    return LocalNode;
  }
  var LocalNode;
  function LocalNode$lambda() {
    _init_properties_LocalNode_kt__tayv8b();
    return null;
  }
  var properties_initialized_LocalNode_kt_q56wv1;
  function _init_properties_LocalNode_kt__tayv8b() {
    if (!properties_initialized_LocalNode_kt_q56wv1) {
      properties_initialized_LocalNode_kt_q56wv1 = true;
      LocalNode = compositionLocalOf(VOID, LocalNode$lambda);
    }
  }
  function Node_init_$Init$(buildContext, view, plugins, $this) {
    view = view === VOID ? EmptyNodeView_instance : view;
    plugins = plugins === VOID ? emptyList() : plugins;
    Node.call($this, buildContext, view, Companion_getInstance_13(), plugins);
    return $this;
  }
  function Node$lifecycleScope$delegate$lambda(this$0) {
    return function () {
      return this$0.bey().y5j();
    };
  }
  function Node$1(this$0) {
    this.kf9_1 = this$0;
  }
  protoOf(Node$1).jf7 = function () {
    if (!this.kf9_1.tex_1) {
      // Inline function 'kotlin.error' call
      var message = 'onBuilt was not invoked for ' + this;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  function Node$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.cf9($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Node$Compose$composable$lambda(this$0, $$dirty, $modifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-549106967, $changed, -1, 'com.bumble.appyx.navigation.node.Node.Compose$composable.<anonymous> (Node.kt:118)');
        }
        this$0.gf9($composer_0, 14 & $$dirty >> 3);
        this$0.cf9($modifier._v, $composer_0, 14 & $$dirty | 112 & $$dirty);
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
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function Node$Compose$composable$lambda_0($tmp0_rcvr, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.xf4($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Node$DerivedSetup$composable$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.gf9($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Node(buildContext, view, retainedInstanceStore, plugins) {
    view = view === VOID ? EmptyNodeView_instance : view;
    plugins = plugins === VOID ? emptyList() : plugins;
    this.pex_1 = buildContext;
    this.qex_1 = view;
    this.rex_1 = retainedInstanceStore;
    this.sex_1 = new NodeLifecycleImpl(this);
    this.tex_1 = false;
    var tmp = this;
    tmp.uex_1 = plus_1(plugins, listOfNotNull(isInterface(this, Plugin) ? this : null));
    this.vex_1 = this.pex_1.hf8_1;
    this.wex_1 = equals(this.vex_1, Root_getInstance());
    var tmp_0 = this;
    var tmp0_subject = this.vex_1;
    var tmp_1;
    if (tmp0_subject instanceof Child) {
      tmp_1 = this.vex_1.ef8_1;
    } else {
      if (tmp0_subject instanceof Root) {
        tmp_1 = null;
      } else {
        noWhenBranchMatchedException();
      }
    }
    tmp_0.xex_1 = tmp_1;
    var tmp_2 = this;
    tmp_2.yex_1 = lazy(Node$lifecycleScope$delegate$lambda(this));
    this.zex_1 = new IntegrationPointStub();
    if (BuildFlags_instance.ed3_1) {
      this.bey().jf5(new LifecycleLogger(this));
    }
    var tmp_3 = this.bey();
    tmp_3.jf5(new Node$1(this));
    this.aey_1 = 0;
  }
  protoOf(Node).s28 = function () {
    return this.pex_1.mf8();
  };
  protoOf(Node).bey = function () {
    return this.sex_1.zf7_1;
  };
  protoOf(Node).df9 = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.yex_1;
    lifecycleScope$factory();
    return this_0.u2();
  };
  protoOf(Node).bf5 = function (value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.wex_1) {
      // Inline function 'com.bumble.appyx.navigation.node.Node.<set-integrationPoint>.<anonymous>' call
      var message = 'Only a root Node can have an integration point';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.zex_1 = value;
  };
  protoOf(Node).ef9 = function () {
    var tmp;
    if (this.wex_1) {
      tmp = this.zex_1;
    } else {
      var tmp0_safe_receiver = this.xex_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ef9();
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Non-root Node should have a parent';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Node).ff9 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.tex_1) {
      // Inline function 'com.bumble.appyx.navigation.node.Node.onBuilt.<anonymous>' call
      var message = 'onBuilt was already invoked';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.tex_1 = true;
    this.ff5(State_CREATED_getInstance());
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'com.bumble.appyx.navigation.plugin.plugins' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this.uex_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      if (!(element == null) ? isInterface(element, NodeReadyObserver) : false) {
        destination.s(element);
      }
    }
    var tmp0_iterator_0 = destination.v();
    while (tmp0_iterator_0.w()) {
      var element_0 = tmp0_iterator_0.y();
      // Inline function 'com.bumble.appyx.navigation.node.Node.onBuilt.<anonymous>' call
      element_0.lf0(this);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'com.bumble.appyx.navigation.plugin.plugins' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_1 = this.uex_1;
    var destination_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = this_1.v();
    while (tmp0_iterator_1.w()) {
      var element_1 = tmp0_iterator_1.y();
      if (!(element_1 == null) ? isInterface(element_1, NodeLifecycleAware) : false) {
        destination_0.s(element_1);
      }
    }
    var tmp0_iterator_2 = destination_0.v();
    while (tmp0_iterator_2.w()) {
      var element_2 = tmp0_iterator_2.y();
      // Inline function 'com.bumble.appyx.navigation.node.Node.onBuilt.<anonymous>' call
      element_2.lf9(this.bey());
    }
  };
  protoOf(Node).ff5 = function (state) {
    if (this.bey().n90().equals(state))
      return Unit_instance;
    if (this.bey().n90().equals(State_DESTROYED_getInstance()) ? !state.equals(State_DESTROYED_getInstance()) : false) {
      Appyx_getInstance().pev(IllegalStateException_init_$Create$('Trying to change lifecycle state of already destroyed node ' + getKClassFromExpression(this)));
      return Unit_instance;
    }
    this.sex_1.ff5(state);
    if (state.equals(State_DESTROYED_getInstance())) {
      if (!this.ef9().lf5()) {
        this.rex_1.mf9(this.s28());
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'com.bumble.appyx.navigation.plugin.plugins' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_0 = this.uex_1;
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        if (!(element == null) ? isInterface(element, Destroyable) : false) {
          destination.s(element);
        }
      }
      var tmp0_iterator_0 = destination.v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'com.bumble.appyx.navigation.node.Node.updateLifecycleState.<anonymous>' call
        element_0.y7r();
      }
    }
  };
  protoOf(Node).ff2 = function (scope) {
    var writer = new MutableSavedStateMapImpl(VOID, scope);
    this.nf8(writer);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this.uex_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      if (!(element == null) ? isInterface(element, SavesInstanceState) : false) {
        destination.s(element);
      }
    }
    var tmp0_iterator_0 = destination.v();
    while (tmp0_iterator_0.w()) {
      var element_0 = tmp0_iterator_0.y();
      // Inline function 'com.bumble.appyx.navigation.node.Node.saveInstanceState.<anonymous>' call
      element_0.xdg(writer);
    }
    return writer.xds();
  };
  protoOf(Node).nf8 = function (state) {
    this.pex_1.nf8(state);
  };
  protoOf(Node).cf9 = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(603141841);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(603141841, $dirty, -1, 'com.bumble.appyx.navigation.node.Node.View$composable (Node.kt:-1)');
      }
      this.qex_1.cf9(modifier, $composer_0, 14 & $dirty);
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
      tmp1_safe_receiver.w2e(Node$View$composable$lambda(this, modifier, $changed));
    }
  };
  protoOf(Node).xf4 = function (modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(964168029);
    sourceInformation($composer_0, 'C(Compose$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(964168029, $dirty, -1, 'com.bumble.appyx.navigation.node.Node.Compose$composable (Node.kt:113)');
      }
      var tmp = [get_LocalNode().r2e(this), get_LocalCommonLifecycleOwner().r2e(this)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.node.Node.Compose$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -549106967, true, Node$Compose$composable$lambda(this, $dirty, modifier_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.node.Node.Compose$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.s1z(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.h1x();
      CompositionLocalProvider$composable(tmp, tmp0, $composer_0, 48);
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
      tmp1_safe_receiver.w2e(Node$Compose$composable$lambda_0(this, modifier_0, $changed, $default));
    }
  };
  protoOf(Node).gf9 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-527311252);
    sourceInformation($composer_0, 'C(DerivedSetup$composable)');
    if (!(($changed & 1) === 0) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-527311252, $changed, -1, 'com.bumble.appyx.navigation.node.Node.DerivedSetup$composable (Node.kt:124)');
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
      tmp1_safe_receiver.w2e(Node$DerivedSetup$composable$lambda(this, $changed));
    }
  };
  function lifecycleScope$factory() {
    return getPropertyCallableRef('lifecycleScope', 1, KProperty1, function (receiver) {
      return receiver.df9();
    }, null);
  }
  function build(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.navigation.node.build.<anonymous>' call
    _this__u8e3s4.ff9();
    return _this__u8e3s4;
  }
  function Companion_3() {
    Companion_instance_4 = this;
    this.nf9_1 = new Long(5000, 0);
  }
  var Companion_instance_4;
  function Companion_getInstance_12() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function BackHandler$composable($this, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1916264799);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z($this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-1916264799, $dirty, -1, 'com.bumble.appyx.navigation.node.ParentNode.BackHandler$composable (ParentNode.kt:88)');
      }
      var tmp = $this.yf0_1.vdg();
      var canHandleBack = collectAsState$composable_0(tmp, false, null, $composer_0, 48, 2);
      var tmp_0 = canHandleBack.u2();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t1z($this);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.node.ParentNode.BackHandler$composable.<anonymous>' call
        var value = ParentNode$BackHandler$composable$lambda($this);
        $composer_1.s1z(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.h1x();
      PlatformBackHandler$composable(tmp_0, tmp0, $composer_0, 0);
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
      tmp1_safe_receiver.w2e(ParentNode$BackHandler$composable$lambda_0($this, $changed));
    }
  }
  function ParentNode$DerivedSetup$composable$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.gf9($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ParentNode$BackHandler$composable$lambda(this$0) {
    return function () {
      this$0.yf0_1.udg();
      return Unit_instance;
    };
  }
  function ParentNode$BackHandler$composable$lambda_0($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      BackHandler$composable($tmp0_rcvr, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ParentNode(appyxComponent, buildContext, view, childKeepMode, childAware, plugins) {
    Companion_getInstance_12();
    view = view === VOID ? new EmptyParentNodeView() : view;
    childKeepMode = childKeepMode === VOID ? Appyx_getInstance().nev_1 : childKeepMode;
    childAware = childAware === VOID ? new ChildAwareImpl() : childAware;
    var tmp;
    if (plugins === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = plugins;
    }
    plugins = tmp;
    var tmp0_plugins = plus_2(plus_2(plugins, appyxComponent), childAware);
    Node_init_$Init$(buildContext, view, tmp0_plugins, this);
    this.yf0_1 = appyxComponent;
    this.zf0_1 = childAware;
    this.af1_1 = new ChildNodeCreationManager(buildContext.if8_1, buildContext.jf8_1, childKeepMode);
    this.bf1_1 = new ChildNodeLifecycleManager(this.yf0_1, this.fq(), childKeepMode, this.df9());
    this.cf1_1 = 0;
  }
  protoOf(ParentNode).fq = function () {
    return this.af1_1.df2_1;
  };
  protoOf(ParentNode).ff9 = function () {
    protoOf(Node).ff9.call(this);
    this.af1_1.uf2(this);
    this.bf1_1.if7();
  };
  protoOf(ParentNode).vf2 = function (element) {
    return this.af1_1.vf2(element);
  };
  protoOf(ParentNode).ff5 = function (state) {
    protoOf(Node).ff5.call(this, state);
    this.bf1_1.hf7(state);
    if (state.equals(State_DESTROYED_getInstance())) {
      this.yf0_1.y7r();
    }
  };
  protoOf(ParentNode).nf8 = function (state) {
    protoOf(Node).nf8.call(this, state);
    this.af1_1.wf2(state);
  };
  protoOf(ParentNode).gf9 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1644974750);
    sourceInformation($composer_0, 'C(DerivedSetup$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-1644974750, $dirty, -1, 'com.bumble.appyx.navigation.node.ParentNode.DerivedSetup$composable (ParentNode.kt:82)');
      }
      AppyxComponentSetup$composable(this.yf0_1, $composer_0, 0);
      BackHandler$composable(this, $composer_0, 14 & $dirty);
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
      tmp1_safe_receiver.w2e(ParentNode$DerivedSetup$composable$lambda(this, $changed));
    }
  };
  function ParentNodeView$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.cf9($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ParentNodeView() {
  }
  function NodeReadyObserver() {
  }
  function NodeLifecycleAware() {
  }
  function Destroyable() {
  }
  function Companion_4() {
    Companion_instance_5 = this;
    this.of9_1 = new RetainedInstanceStoreImpl();
  }
  protoOf(Companion_4).mf9 = function (storeId) {
    this.of9_1.mf9(storeId);
  };
  var Companion_instance_5;
  function Companion_getInstance_13() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function RetainedInstanceStoreImpl() {
    this.pf9_1 = HashMap_init_$Create$();
  }
  protoOf(RetainedInstanceStoreImpl).mf9 = function (storeId) {
    var tmp0_safe_receiver = this.pf9_1.v2(storeId);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p2();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp1_safe_receiver.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'com.bumble.appyx.navigation.store.RetainedInstanceStoreImpl.clearStore.<anonymous>' call
        element.gk();
      }
    }
  };
  function MainIntegrationPoint() {
    IntegrationPoint.call(this);
    this.tf9_1 = 0;
  }
  protoOf(MainIntegrationPoint).lf5 = function () {
    return false;
  };
  protoOf(MainIntegrationPoint).mf5 = function () {
  };
  function WebNodeHost$composable(screenSize, onBackPressedEvents, modifier, integrationPoint, customisations, factory, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var integrationPoint_0 = {_v: integrationPoint};
    var customisations_0 = {_v: customisations};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1022922749);
    sourceInformation($composer_0, 'C(WebNodeHost$composable)P(5,4,3,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(screenSize) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(onBackPressedEvents) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.t1z(integrationPoint_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.t1z(customisations_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.t1z(factory) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 8) === 0)) {
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
            // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
            var value = new MainIntegrationPoint();
            $composer_1.s1z(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_1.h1x();
          integrationPoint_0._v = tmp0;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
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
            // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
            var value_0 = new NodeCustomisationDirectoryImpl();
            $composer_2.s1z(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }
          var tmp_2 = tmp_1;
          var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_2.h1x();
          customisations_0._v = tmp0_0;
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-1022922749, $dirty, -1, 'com.bumble.appyx.navigation.integration.WebNodeHost$composable (WebNodeHost.kt:35)');
      }
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
        // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
        var value_1 = new PlatformLifecycleRegistry();
        $composer_3.s1z(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_3.h1x();
      var platformLifecycleRegistry = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.f1x(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_4.r1z();
      var tmp_5;
      if (false ? true : it_2 === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
        var value_2 = new WebNodeHost$composable$onBackPressedDispatcherOwner$1$1(integrationPoint_0);
        $composer_4.s1z(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_2 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_4.h1x();
      var onBackPressedDispatcherOwner = tmp0_2;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var $composer_5 = $composer_0;
      var getContext = {_v: null};
      var $composer_6 = $composer_5;
      $composer_6.f1x(102870005);
      sourceInformation($composer_6, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext._v = WebNodeHost$composable$lambda;
      }
      var composer = $composer_6;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_7 = $composer_6;
      $composer_7.f1x(547886695);
      sourceInformation($composer_7, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_7.r1z();
      var tmp_7;
      if (false ? true : it_3 === Companion_getInstance_0().t1y_1) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value_3 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_7.s1z(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp0_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_7.h1x();
      var wrapper = tmp0_3;
      var tmp0_4 = wrapper.t2g_1;
      $composer_6.h1x();
      var scope = tmp0_4;
      LaunchedEffect$composable(onBackPressedEvents, WebNodeHost$composable$slambda_0(scope, onBackPressedEvents, onBackPressedDispatcherOwner, null), $composer_0, 14 & $dirty >> 3);
      var tmp_9 = [get_LocalOnBackPressedDispatcherOwner().r2e(onBackPressedDispatcherOwner)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
      var tmp_10 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_10, -5078979, true, WebNodeHost$composable$lambda_0(platformLifecycleRegistry, integrationPoint_0, screenSize, modifier_0, customisations_0, factory, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_8 = $composer_0;
      $composer_8.f1x(-838505973);
      sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_8.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_8.r1z();
      var tmp_11;
      if (invalid ? true : it_4 === Companion_getInstance_0().t1y_1) {
        // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_8.s1z(value_4);
        tmp_11 = value_4;
      } else {
        tmp_11 = it_4;
      }
      var tmp_12 = tmp_11;
      var tmp0_5 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_8.h1x();
      CompositionLocalProvider$composable(tmp_9, tmp0_5, $composer_0, 48);
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
      tmp0_safe_receiver.w2e(WebNodeHost$composable$lambda_1(screenSize, onBackPressedEvents, modifier_0, integrationPoint_0, customisations_0, factory, $changed, $default));
    }
  }
  function WebNodeHost$composable$o$onBackPressedDispatcher$lambda($$integrationPoint) {
    return function () {
      $$integrationPoint._v.mf5();
      return Unit_instance;
    };
  }
  function WebNodeHost$composable$onBackPressedDispatcherOwner$1$1($integrationPoint) {
    var tmp = this;
    tmp.uf9_1 = new OnBackPressedDispatcher(WebNodeHost$composable$o$onBackPressedDispatcher$lambda($integrationPoint));
  }
  protoOf(WebNodeHost$composable$onBackPressedDispatcherOwner$1$1).vf9 = function () {
    return this.uf9_1;
  };
  function WebNodeHost$composable$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function WebNodeHost$composable$slambda$slambda$slambda($onBackPressedDispatcherOwner, resultContinuation) {
    this.efa_1 = $onBackPressedDispatcherOwner;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebNodeHost$composable$slambda$slambda$slambda).gfa = function (it, $completion) {
    var tmp = this.hfa(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(WebNodeHost$composable$slambda$slambda$slambda).fc = function (p1, $completion) {
    return this.gfa(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebNodeHost$composable$slambda$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          this.efa_1.vf9().lfa();
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
  protoOf(WebNodeHost$composable$slambda$slambda$slambda).hfa = function (it, completion) {
    var i = new WebNodeHost$composable$slambda$slambda$slambda(this.efa_1, completion);
    i.ffa_1 = it;
    return i;
  };
  function WebNodeHost$composable$slambda$slambda$slambda_0($onBackPressedDispatcherOwner, resultContinuation) {
    var i = new WebNodeHost$composable$slambda$slambda$slambda($onBackPressedDispatcherOwner, resultContinuation);
    var l = function (it, $completion) {
      return i.gfa(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.mfa_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).t13 = function (value, $completion) {
    return this.mfa_1(value, $completion);
  };
  function WebNodeHost$composable$slambda$slambda($onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation) {
    this.vfa_1 = $onBackPressedEvents;
    this.wfa_1 = $onBackPressedDispatcherOwner;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebNodeHost$composable$slambda$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(WebNodeHost$composable$slambda$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebNodeHost$composable$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = WebNodeHost$composable$slambda$slambda$slambda_0(this.wfa_1, null);
            suspendResult = this.vfa_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_0), this);
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
  protoOf(WebNodeHost$composable$slambda$slambda).w1b = function ($this$launch, completion) {
    var i = new WebNodeHost$composable$slambda$slambda(this.vfa_1, this.wfa_1, completion);
    i.xfa_1 = $this$launch;
    return i;
  };
  function WebNodeHost$composable$slambda$slambda_0($onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation) {
    var i = new WebNodeHost$composable$slambda$slambda($onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function WebNodeHost$composable$slambda($scope, $onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation) {
    this.gfb_1 = $scope;
    this.hfb_1 = $onBackPressedEvents;
    this.ifb_1 = $onBackPressedDispatcherOwner;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebNodeHost$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(WebNodeHost$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebNodeHost$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          launch(this.gfb_1, VOID, VOID, WebNodeHost$composable$slambda$slambda_0(this.hfb_1, this.ifb_1, null));
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
  protoOf(WebNodeHost$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new WebNodeHost$composable$slambda(this.gfb_1, this.hfb_1, this.ifb_1, completion);
    i.jfb_1 = $this$LaunchedEffect;
    return i;
  };
  function WebNodeHost$composable$slambda_0($scope, $onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation) {
    var i = new WebNodeHost$composable$slambda($scope, $onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function WebNodeHost$composable$lambda_0($platformLifecycleRegistry, $integrationPoint, $screenSize, $modifier, $customisations, $factory, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-5078979, $changed, -1, 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous> (WebNodeHost.kt:56)');
        }
        NodeHost$composable($platformLifecycleRegistry, $integrationPoint._v, $screenSize, $modifier._v, $customisations._v, $factory, $composer_0, 8 | 112 & $$dirty >> 6 | 896 & $$dirty << 6 | 7168 & $$dirty << 3 | 57344 & $$dirty | 458752 & $$dirty, 0);
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
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function WebNodeHost$composable$lambda_1($screenSize, $onBackPressedEvents, $modifier, $integrationPoint, $customisations, $factory, $$changed, $$default) {
    return function ($composer, $force) {
      WebNodeHost$composable($screenSize, $onBackPressedEvents, $modifier._v, $integrationPoint._v, $customisations._v, $factory, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function OnBackPressedCallback(isEnabled) {
    this.kfb_1 = isEnabled;
    this.lfb_1 = new AtomicReference(emptyList());
    this.mfb_1 = 8;
  }
  protoOf(OnBackPressedCallback).ofb = function (cancellable) {
    this.lfb_1.e2d(plus_2(this.lfb_1.dq(), cancellable));
  };
  protoOf(OnBackPressedCallback).pfb = function (cancellable) {
    this.lfb_1.e2d(minus_0(this.lfb_1.dq(), cancellable));
  };
  function OnBackPressedCancellable($outer, onBackPressedCallback) {
    this.rfb_1 = $outer;
    this.qfb_1 = onBackPressedCallback;
  }
  protoOf(OnBackPressedCancellable).l8w = function () {
    this.rfb_1.jfa_1.t(this.qfb_1);
    this.qfb_1.pfb(this);
  };
  function OnBackPressedDispatcher(fallbackOnBackPressed) {
    fallbackOnBackPressed = fallbackOnBackPressed === VOID ? null : fallbackOnBackPressed;
    this.ifa_1 = fallbackOnBackPressed;
    this.jfa_1 = ArrayDeque_init_$Create$();
    this.kfa_1 = 0;
  }
  protoOf(OnBackPressedDispatcher).sfb = function (onBackPressedCallback) {
    this.jfa_1.s(onBackPressedCallback);
    var cancellable = new OnBackPressedCancellable(this, onBackPressedCallback);
    onBackPressedCallback.ofb(cancellable);
    return cancellable;
  };
  protoOf(OnBackPressedDispatcher).lfa = function () {
    // Inline function 'androidx.compose.ui.util.fastForEachReversed' call
    var this_0 = this.jfa_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = this_0.n() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = this_0.i1(index);
        // Inline function 'com.bumble.appyx.navigation.platform.OnBackPressedDispatcher.onBackPressed.<anonymous>' call
        if (item.kfb_1) {
          item.nfb();
          return Unit_instance;
        }
      }
       while (0 <= inductionVariable);
    var tmp0_safe_receiver = this.ifa_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
  };
  function get_LocalOnBackPressedDispatcherOwner() {
    _init_properties_PlatformBackHandler_kt__6ss43m();
    return LocalOnBackPressedDispatcherOwner;
  }
  var LocalOnBackPressedDispatcherOwner;
  function PlatformBackHandler$composable(enabled, onBack, $composer, $changed) {
    _init_properties_PlatformBackHandler_kt__6ss43m();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-784315342);
    sourceInformation($composer_0, 'C(PlatformBackHandler$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.u1z(enabled) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(onBack) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-784315342, $dirty, -1, 'com.bumble.appyx.navigation.platform.PlatformBackHandler$composable (PlatformBackHandler.kt:28)');
      }
      var currentOnBack$delegate = rememberUpdatedState$composable(onBack, $composer_0, 14 & $dirty >> 3);
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
        // Inline function 'com.bumble.appyx.navigation.platform.PlatformBackHandler$composable.<anonymous>' call
        var value = new PlatformBackHandler$composable$backCallback$1$1(currentOnBack$delegate, enabled);
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      var backCallback = tmp0;
      SideEffect$composable(PlatformBackHandler$composable$lambda_0(backCallback, enabled), $composer_0, 0);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var this_0 = get_LocalOnBackPressedDispatcherOwner();
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_2.b20(this_0);
        sourceInformationMarkerEnd($composer_2);
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_0 == null) {
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformBackHandler$composable.<anonymous>' call
          var message = 'No OnBackPressedDispatcherOwner was provided via LocalOnBackPressedDispatcherOwner';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp$ret$7 = tmp0_0;
          break $l$block;
        }
      }
      var backDispatcher = tmp$ret$7.vf9();
      DisposableEffect$composable(backDispatcher, PlatformBackHandler$composable$lambda_1(backDispatcher, backCallback), $composer_0, 0);
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
      tmp0_safe_receiver.w2e(PlatformBackHandler$composable$lambda_2(enabled, onBack, $changed));
    }
  }
  function PlatformBackHandler$composable$lambda($currentOnBack$delegate) {
    _init_properties_PlatformBackHandler_kt__6ss43m();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentOnBack', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentOnBack$delegate.u2();
  }
  function LocalOnBackPressedDispatcherOwner$lambda() {
    _init_properties_PlatformBackHandler_kt__6ss43m();
    return new LocalOnBackPressedDispatcherOwner$1$1();
  }
  function LocalOnBackPressedDispatcherOwner$1$1() {
  }
  protoOf(LocalOnBackPressedDispatcherOwner$1$1).vf9 = function () {
    return new OnBackPressedDispatcher(null);
  };
  function PlatformBackHandler$composable$backCallback$1$1($currentOnBack$delegate, $enabled) {
    this.wfb_1 = $currentOnBack$delegate;
    OnBackPressedCallback.call(this, $enabled);
  }
  protoOf(PlatformBackHandler$composable$backCallback$1$1).nfb = function () {
    PlatformBackHandler$composable$lambda(this.wfb_1)();
  };
  function PlatformBackHandler$composable$lambda_0($backCallback, $enabled) {
    return function () {
      $backCallback.kfb_1 = $enabled;
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_3($cancellable) {
    this.xfb_1 = $cancellable;
  }
  protoOf(_no_name_provided__qut3iv_3).gk = function () {
    // Inline function 'com.bumble.appyx.navigation.platform.PlatformBackHandler$composable.<anonymous>.<anonymous>' call
    this.xfb_1.l8w();
  };
  function PlatformBackHandler$composable$lambda_1($backDispatcher, $backCallback) {
    return function ($this$DisposableEffect) {
      var cancellable = $backDispatcher.sfb($backCallback);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_3(cancellable);
    };
  }
  function PlatformBackHandler$composable$lambda_2($enabled, $onBack, $$changed) {
    return function ($composer, $force) {
      PlatformBackHandler$composable($enabled, $onBack, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_PlatformBackHandler_kt_ywe50g;
  function _init_properties_PlatformBackHandler_kt__6ss43m() {
    if (!properties_initialized_PlatformBackHandler_kt_ywe50g) {
      properties_initialized_PlatformBackHandler_kt_ywe50g = true;
      LocalOnBackPressedDispatcherOwner = compositionLocalOf(VOID, LocalOnBackPressedDispatcherOwner$lambda);
    }
  }
  function Companion_5() {
  }
  protoOf(Companion_5).wf7 = function (owner) {
    return new PlatformLifecycleRegistry();
  };
  var Companion_instance_6;
  function Companion_getInstance_14() {
    return Companion_instance_6;
  }
  function PlatformLifecycleRegistry$coroutineScope$delegate$lambda() {
    return MainScope();
  }
  function PlatformLifecycleRegistry() {
    this.of7_1 = ArrayList_init_$Create$();
    this.pf7_1 = ArrayList_init_$Create$();
    this.qf7_1 = State_INITIALIZED_getInstance();
    var tmp = this;
    tmp.rf7_1 = lazy(PlatformLifecycleRegistry$coroutineScope$delegate$lambda);
    this.sf7_1 = 8;
  }
  protoOf(PlatformLifecycleRegistry).yfb = function (value) {
    switch (value.j9_1) {
      case 0:
        break;
      case 1:
        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator = this.of7_1.v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element.jf7();
        }

        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_0 = this.pf7_1.v();
        while (tmp0_iterator_0.w()) {
          var element_0 = tmp0_iterator_0.y();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_0.df5(value, Event_ON_CREATE_getInstance());
        }

        break;
      case 2:
        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_1 = this.of7_1.v();
        while (tmp0_iterator_1.w()) {
          var element_1 = tmp0_iterator_1.y();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_1.li();
        }

        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_2 = this.pf7_1.v();
        while (tmp0_iterator_2.w()) {
          var element_2 = tmp0_iterator_2.y();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_2.df5(value, Event_ON_START_getInstance());
        }

        break;
      case 3:
        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_3 = this.of7_1.v();
        while (tmp0_iterator_3.w()) {
          var element_3 = tmp0_iterator_3.y();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_3.kf7();
        }

        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_4 = this.pf7_1.v();
        while (tmp0_iterator_4.w()) {
          var element_4 = tmp0_iterator_4.y();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_4.df5(value, Event_ON_RESUME_getInstance());
        }

        break;
      case 4:
        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_5 = this.of7_1.v();
        while (tmp0_iterator_5.w()) {
          var element_5 = tmp0_iterator_5.y();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_5.lf7();
        }

        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_6 = this.pf7_1.v();
        while (tmp0_iterator_6.w()) {
          var element_6 = tmp0_iterator_6.y();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_6.df5(value, Event_ON_DESTROY_getInstance());
        }

        if (get_isActive(this.y5j())) {
          cancel(this.y5j(), 'lifecycle was destroyed');
        }

        break;
    }
    this.qf7_1 = value;
  };
  protoOf(PlatformLifecycleRegistry).n90 = function () {
    return this.qf7_1;
  };
  protoOf(PlatformLifecycleRegistry).y5j = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.rf7_1;
    coroutineScope$factory();
    return this_0.u2();
  };
  protoOf(PlatformLifecycleRegistry).jf5 = function (observer) {
    if (isInterface(observer, DefaultPlatformLifecycleObserver)) {
      this.of7_1.s(observer);
    } else {
      if (isInterface(observer, PlatformLifecycleEventObserver)) {
        this.pf7_1.s(observer);
      }
    }
  };
  protoOf(PlatformLifecycleRegistry).if5 = function (observer) {
    if (isInterface(observer, DefaultPlatformLifecycleObserver)) {
      this.of7_1.t(observer);
    } else {
      if (isInterface(observer, PlatformLifecycleEventObserver)) {
        this.pf7_1.t(observer);
      }
    }
  };
  protoOf(PlatformLifecycleRegistry).tf7 = function (state) {
    this.yfb(state);
  };
  function coroutineScope$factory() {
    return getPropertyCallableRef('coroutineScope', 1, KProperty1, function (receiver) {
      return receiver.y5j();
    }, null);
  }
  //region block: post-declaration
  protoOf(EmptyParentNodeView).cf9 = View$composable;
  protoOf(Node$1).li = onStart;
  protoOf(Node$1).kf7 = onResume;
  protoOf(Node$1).lf7 = onDestroy;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  EmptyNodeView_instance = new EmptyNodeView();
  Companion_instance_6 = new Companion_5();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ChildAwareImpl;
  _.$_$.b = AppyxComponent$composable;
  _.$_$.c = get_LocalScreenSize;
  _.$_$.d = ScreenSize;
  _.$_$.e = WebNodeHost$composable;
  _.$_$.f = EmptyParentNodeView;
  _.$_$.g = Node;
  _.$_$.h = ParentNode;
  _.$_$.i = node$composable;
  _.$_$.j = WindowSizeClass_COMPACT_getInstance;
  _.$_$.k = Node_init_$Init$;
  _.$_$.l = Appyx_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=appyx-navigation-common.js.map
