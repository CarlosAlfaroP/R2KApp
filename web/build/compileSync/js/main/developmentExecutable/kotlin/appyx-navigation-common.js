(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './appyx-interactions-common.js', './compose-multiplatform-core-runtime-saveable.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-ui-geometry.js', './appyx-utils-customisation.js', './appyx-utils-multiplatform.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./appyx-interactions-common.js'), require('./compose-multiplatform-core-runtime-saveable.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./appyx-utils-customisation.js'), require('./appyx-utils-multiplatform.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['appyx-interactions-common'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'appyx-interactions-common' was not found. Please, check whether 'appyx-interactions-common' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'compose-multiplatform-core-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-runtime-saveable' is loaded prior to 'appyx-navigation-common'.");
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
    if (typeof this['appyx-utils-customisation'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'appyx-utils-customisation' was not found. Please, check whether 'appyx-utils-customisation' is loaded prior to 'appyx-navigation-common'.");
    }
    if (typeof this['appyx-utils-multiplatform'] === 'undefined') {
      throw new Error("Error loading module 'appyx-navigation-common'. Its dependency 'appyx-utils-multiplatform' was not found. Please, check whether 'appyx-utils-multiplatform' is loaded prior to 'appyx-navigation-common'.");
    }
    root['appyx-navigation-common'] = factory(typeof this['appyx-navigation-common'] === 'undefined' ? {} : this['appyx-navigation-common'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['appyx-interactions-common'], this['compose-multiplatform-core-runtime-saveable'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-ui-geometry'], this['appyx-utils-customisation'], this['appyx-utils-multiplatform']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_appyx_appyx_interactions_appyx_interactions, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_appyx_utils_customisations, kotlin_appyx_utils_multiplatform) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.jd;
  var objectMeta = kotlin_kotlin.$_$.id;
  var VOID = kotlin_kotlin.$_$.li;
  var setMetadataFor = kotlin_kotlin.$_$.kd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var classMeta = kotlin_kotlin.$_$.xb;
  var scan = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var CoroutineImpl = kotlin_kotlin.$_$.eb;
  var Unit_getInstance = kotlin_kotlin.$_$.v4;
  var THROW_CCE = kotlin_kotlin.$_$.xg;
  var isObject = kotlin_kotlin.$_$.wc;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.oa;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var SuspendFunction2 = kotlin_kotlin.$_$.hb;
  var SuspendFunction1 = kotlin_kotlin.$_$.gb;
  var interfaceMeta = kotlin_kotlin.$_$.lc;
  var cast = kotlin_kotlin.$_$.se;
  var safeCast = kotlin_kotlin.$_$.te;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var equals = kotlin_kotlin.$_$.bc;
  var checkIndexOverflow = kotlin_kotlin.$_$.j6;
  var emptySet = kotlin_kotlin.$_$.l7;
  var Map = kotlin_kotlin.$_$.r5;
  var isInterface = kotlin_kotlin.$_$.uc;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.di;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var minus = kotlin_kotlin.$_$.z8;
  var emptyMap = kotlin_kotlin.$_$.k7;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var THROW_ISE = kotlin_kotlin.$_$.yg;
  var enumEntries = kotlin_kotlin.$_$.mb;
  var Enum = kotlin_kotlin.$_$.lg;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wh;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var Elements = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.e;
  var plus = kotlin_kotlin.$_$.c9;
  var intersect = kotlin_kotlin.$_$.g8;
  var toMutableMap = kotlin_kotlin.$_$.ea;
  var toString = kotlin_kotlin.$_$.od;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var mapCapacity = kotlin_kotlin.$_$.v8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var SaverScope = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.a;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.ci;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var to = kotlin_kotlin.$_$.ii;
  var plus_0 = kotlin_kotlin.$_$.d9;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.i8;
  var Companion_getInstance_0 = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.u1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.c5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var roundToInt = kotlin_kotlin.$_$.ud;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var SideEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var onPointerEvent = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.h;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.h8;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.e8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var get_LocalBoxScope = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.f1;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var List = kotlin_kotlin.$_$.p5;
  var Offset__unaryMinus_impl_ssu2iv = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var KProperty0 = kotlin_kotlin.$_$.pe;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ec;
  var KMutableProperty0 = kotlin_kotlin.$_$.ne;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var removedElements = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.g;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var detectDragGesturesOrCancellation = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.p1;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Offset__div_impl_eaxtg1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var boundsInParent = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var offset = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var rememberSaveableStateHolder$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.g;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var collectAsState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var get_LocalMotionProperties = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.g1;
  var PositionAlignment = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.w;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.e4;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var UiContext = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.m;
  var TransitionBounds = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.l;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui.$_$.z7;
  var NodeCustomisationDirectoryImpl = kotlin_appyx_utils_customisations.$_$.a;
  var mapSaver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.d;
  var rememberSaveable$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.f;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Triple = kotlin_kotlin.$_$.zg;
  var minOf = kotlin_kotlin.$_$.la;
  var combine = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var onCompletion = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var SuspendFunction3 = kotlin_kotlin.$_$.ib;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var awaitClose = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var callbackFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var AppyxLogger_getInstance = kotlin_appyx_utils_multiplatform.$_$.b;
  var hashCode = kotlin_kotlin.$_$.jc;
  var compareTo = kotlin_kotlin.$_$.yb;
  var Comparator = kotlin_kotlin.$_$.kg;
  var compareValues = kotlin_kotlin.$_$.ia;
  var sortedWith = kotlin_kotlin.$_$.q9;
  var lazy = kotlin_kotlin.$_$.vh;
  var KProperty1 = kotlin_kotlin.$_$.qe;
  var getPropertyCallableRef = kotlin_kotlin.$_$.hc;
  var UUID_getInstance = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.w1;
  var emptyList = kotlin_kotlin.$_$.j7;
  var objectCreate = kotlin_kotlin.$_$.hd;
  var Collection = kotlin_kotlin.$_$.f5;
  var Plugin = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.i;
  var listOfNotNull = kotlin_kotlin.$_$.s8;
  var plus_1 = kotlin_kotlin.$_$.e9;
  var BuildFlags_getInstance = kotlin_appyx_utils_multiplatform.$_$.c;
  var MutableSavedStateMapImpl = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.k;
  var SavesInstanceState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.j;
  var Long = kotlin_kotlin.$_$.qg;
  var collectAsState$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var plus_2 = kotlin_kotlin.$_$.f9;
  var AppyxComponentSetup$composable = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.t;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var Unit = kotlin_kotlin.$_$.ih;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var minus_0 = kotlin_kotlin.$_$.y8;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.i;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g2;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l2;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Appyx, 'Appyx', objectMeta);
  setMetadataFor(CompareValues, 'CompareValues', classMeta);
  setMetadataFor(withPrevious$slambda, 'withPrevious$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(withPrevious$o$collect$slambda, 'withPrevious$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$0, '$collectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  function init(node) {
  }
  setMetadataFor(NodeReadyObserver, 'NodeReadyObserver', interfaceMeta, VOID, [Plugin]);
  setMetadataFor(NodeAware, 'NodeAware', interfaceMeta, VOID, [NodeReadyObserver]);
  setMetadataFor(ChildAware, 'ChildAware', interfaceMeta, VOID, [NodeAware]);
  setMetadataFor(ChildAwareCallbackInfo, 'ChildAwareCallbackInfo', classMeta);
  setMetadataFor(Single, 'Single', classMeta, ChildAwareCallbackInfo);
  setMetadataFor(Double, 'Double', classMeta, ChildAwareCallbackInfo);
  setMetadataFor(ChildAwareImpl$observeChanges$o$collect$slambda, 'ChildAwareImpl$observeChanges$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(ChildAwareImpl$init$slambda, 'ChildAwareImpl$init$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(ChildAwareImpl$observeChanges$slambda, 'ChildAwareImpl$observeChanges$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(PlatformLifecycleObserver, 'PlatformLifecycleObserver', interfaceMeta);
  function onCreate() {
  }
  function onStart() {
  }
  function onResume() {
  }
  function onPause() {
  }
  function onStop() {
  }
  function onDestroy() {
  }
  setMetadataFor(DefaultPlatformLifecycleObserver, 'DefaultPlatformLifecycleObserver', interfaceMeta, VOID, [PlatformLifecycleObserver]);
  setMetadataFor(ChildAwareImpl$removeWhenDestroyed$1, VOID, classMeta, VOID, [DefaultPlatformLifecycleObserver]);
  setMetadataFor(ChildAwareImpl, 'ChildAwareImpl', classMeta, VOID, [ChildAware], VOID, VOID, [0]);
  setMetadataFor(ChildEntry, 'ChildEntry', classMeta);
  setMetadataFor(Initialized, 'Initialized', classMeta, ChildEntry);
  setMetadataFor(Suspended, 'Suspended', classMeta, ChildEntry);
  setMetadataFor(KeepMode, 'KeepMode', classMeta, Enum);
  setMetadataFor(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda, 'ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$androidx_compose_runtime_saveable_SaverScope$0, 'sam$androidx_compose_runtime_saveable_SaverScope$0', classMeta, VOID, [SaverScope]);
  setMetadataFor(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda, 'ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ChildNodeCreationManager, 'ChildNodeCreationManager', classMeta);
  setMetadataFor(ChildrenTransitionScope$children$composable$slambda$slambda, 'ChildrenTransitionScope$children$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(ChildrenTransitionScope$children$composable$slambda, 'ChildrenTransitionScope$children$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ChildrenTransitionScope$children$composable$lambda$slambda, 'ChildrenTransitionScope$children$composable$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ChildrenTransitionScope, 'ChildrenTransitionScope', classMeta);
  setMetadataFor(ChildRenderer, 'ChildRenderer', interfaceMeta);
  setMetadataFor(ChildRendererImpl, 'ChildRendererImpl', classMeta, VOID, [ChildRenderer]);
  setMetadataFor(NodeFactory, 'NodeFactory', interfaceMeta);
  setMetadataFor(PlatformLifecycleEventObserver, 'PlatformLifecycleEventObserver', interfaceMeta, VOID, [PlatformLifecycleObserver]);
  setMetadataFor(sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0, 'sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0', classMeta, VOID, [PlatformLifecycleEventObserver]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(WindowSizeClass, 'WindowSizeClass', classMeta, Enum);
  setMetadataFor(ScreenSize, 'ScreenSize', classMeta);
  setMetadataFor(UpNavigationHandler, 'UpNavigationHandler', interfaceMeta);
  setMetadataFor(IntegrationPoint, 'IntegrationPoint', classMeta, VOID, [UpNavigationHandler]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(IntegrationPointStub, 'IntegrationPointStub', classMeta, IntegrationPoint);
  setMetadataFor(ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl, 'ChildNodeLifecycleManager$launch$slambda$<init>$ref', classMeta, VOID, VOID, VOID, VOID, [3]);
  setMetadataFor(ChildNodeLifecycleManager$launch$slambda$slambda, 'ChildNodeLifecycleManager$launch$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(ChildNodeLifecycleManager$launch$slambda$slambda_1, 'ChildNodeLifecycleManager$launch$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(ChildNodeLifecycleManager$launch$slambda, 'ChildNodeLifecycleManager$launch$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1, 3]);
  setMetadataFor(ChildNodeLifecycleManager, 'ChildNodeLifecycleManager', classMeta);
  setMetadataFor(CommonLifecycleOwner, 'CommonLifecycleOwner', interfaceMeta);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(Event, 'Event', classMeta, Enum);
  setMetadataFor(sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0_0, 'sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0', classMeta, VOID, [PlatformLifecycleEventObserver]);
  setMetadataFor(Lifecycle$asFlow$slambda, 'Lifecycle$asFlow$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  function asFlow() {
    return callbackFlow(Lifecycle$asFlow$slambda_0(this, null));
  }
  setMetadataFor(Lifecycle, 'Lifecycle', interfaceMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(LifecycleLogger, 'LifecycleLogger', classMeta, VOID, [DefaultPlatformLifecycleObserver]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(MinimumCombinedLifecycle$manage$1, VOID, classMeta, VOID, [DefaultPlatformLifecycleObserver]);
  setMetadataFor(MinimumCombinedLifecycle, 'MinimumCombinedLifecycle', classMeta, VOID, [CommonLifecycleOwner]);
  setMetadataFor(NodeLifecycle, 'NodeLifecycle', interfaceMeta, VOID, [CommonLifecycleOwner]);
  setMetadataFor(NodeLifecycleImpl, 'NodeLifecycleImpl', classMeta, VOID, [NodeLifecycle]);
  setMetadataFor(AncestryInfo, 'AncestryInfo', classMeta);
  setMetadataFor(Root, 'Root', objectMeta, AncestryInfo);
  setMetadataFor(Child, 'Child', classMeta, AncestryInfo);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(BuildContext, 'BuildContext', classMeta);
  setMetadataFor(Resolver, 'Resolver', interfaceMeta);
  setMetadataFor(NodeView, 'NodeView', interfaceMeta);
  setMetadataFor(Node, 'Node', classMeta, VOID, [NodeLifecycle, NodeView]);
  setMetadataFor(ComposableNode, 'ComposableNode', classMeta, Node);
  setMetadataFor(EmptyNodeView, 'EmptyNodeView', objectMeta, VOID, [NodeView]);
  function View(modifier) {
    illegalDecoyCallException('View');
  }
  function View$composable(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(3274146);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(3274146, $dirty, -1, 'com.bumble.appyx.navigation.node.ParentNodeView.View$composable (ParentNodeView.kt:15)');
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalNode();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof ParentNode ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2_error = '' + getKClassFromExpression(this) + ' is not provided to the appropriate ParentNode';
        throw IllegalStateException_init_$Create$(toString(tmp2_error));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var node = tmp_0;
      this.NodeView$composable_ssh72e_k$(node, modifier, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(ParentNodeView$View$composable$lambda(tmp0_rcvr, modifier, $changed));
    }
  }
  setMetadataFor(ParentNodeView, 'ParentNodeView', interfaceMeta, VOID, [NodeView]);
  setMetadataFor(EmptyParentNodeView, 'EmptyParentNodeView', classMeta, VOID, [ParentNodeView]);
  setMetadataFor(Node$1, VOID, classMeta, VOID, [DefaultPlatformLifecycleObserver]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ParentNode, 'ParentNode', classMeta, Node, [Node, Resolver]);
  function onCreate_0(lifecycle) {
  }
  setMetadataFor(NodeLifecycleAware, 'NodeLifecycleAware', interfaceMeta, VOID, [Plugin]);
  setMetadataFor(Destroyable, 'Destroyable', interfaceMeta, VOID, [Plugin]);
  function handleUpNavigation() {
    return false;
  }
  setMetadataFor(UpNavigationHandler_0, 'UpNavigationHandler', interfaceMeta, VOID, [Plugin]);
  function get$default(storeId, key, disposer, factory, $super) {
    var tmp;
    if (disposer === VOID) {
      tmp = RetainedInstanceStore$get$lambda;
    } else {
      tmp = disposer;
    }
    disposer = tmp;
    return $super === VOID ? this.get_5e3whn_k$(storeId, key, disposer, factory) : $super.get_5e3whn_k$.call(this, storeId, key, disposer, factory);
  }
  setMetadataFor(RetainedInstanceStore, 'RetainedInstanceStore', interfaceMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta, VOID, [RetainedInstanceStore]);
  setMetadataFor(ValueHolder, 'ValueHolder', classMeta);
  setMetadataFor(RetainedInstanceStoreImpl, 'RetainedInstanceStoreImpl', classMeta, VOID, [RetainedInstanceStore]);
  setMetadataFor(MainIntegrationPoint, 'MainIntegrationPoint', classMeta, IntegrationPoint);
  setMetadataFor(OnBackPressedDispatcherOwner, 'OnBackPressedDispatcherOwner', interfaceMeta);
  setMetadataFor(WebNodeHost$composable$onBackPressedDispatcherOwner$1$1, VOID, classMeta, VOID, [OnBackPressedDispatcherOwner]);
  setMetadataFor(WebNodeHost$composable$slambda$slambda$slambda, 'WebNodeHost$composable$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_4, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(WebNodeHost$composable$slambda$slambda, 'WebNodeHost$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(WebNodeHost$composable$slambda, 'WebNodeHost$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(OnBackPressedCallback, 'OnBackPressedCallback', classMeta);
  setMetadataFor(Cancellable, 'Cancellable', interfaceMeta);
  setMetadataFor(OnBackPressedCancellable, 'OnBackPressedCancellable', classMeta, VOID, [Cancellable]);
  setMetadataFor(OnBackPressedDispatcher, 'OnBackPressedDispatcher', classMeta);
  setMetadataFor(LocalOnBackPressedDispatcherOwner$1$1, VOID, classMeta, VOID, [OnBackPressedDispatcherOwner]);
  setMetadataFor(PlatformBackHandler$composable$backCallback$1$1, VOID, classMeta, OnBackPressedCallback);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(PlatformLifecycleRegistry, 'PlatformLifecycleRegistry', classMeta, VOID, [Lifecycle]);
  //endregion
  function get_$stableprop() {
    return 8;
  }
  function Appyx() {
    Appyx_instance = this;
    this.exceptionHandler_1 = null;
    this.defaultChildKeepMode_1 = KeepMode_KEEP_getInstance();
    this.$stable_1 = 8;
  }
  protoOf(Appyx).set_exceptionHandler_nj5ft6_k$ = function (_set____db54di) {
    this.exceptionHandler_1 = _set____db54di;
  };
  protoOf(Appyx).get_exceptionHandler_sscres_k$ = function () {
    return this.exceptionHandler_1;
  };
  protoOf(Appyx).set_defaultChildKeepMode_5lob45_k$ = function (_set____db54di) {
    this.defaultChildKeepMode_1 = _set____db54di;
  };
  protoOf(Appyx).get_defaultChildKeepMode_i4s390_k$ = function () {
    return this.defaultChildKeepMode_1;
  };
  protoOf(Appyx).reportException_9dumbv_k$ = function (exception) {
    var handler = this.exceptionHandler_1;
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
  function _get_currentNullable__3er2hj($this) {
    return $this.currentNullable_1;
  }
  function CompareValues(previous, currentNullable) {
    previous = previous === VOID ? null : previous;
    currentNullable = currentNullable === VOID ? null : currentNullable;
    this.previous_1 = previous;
    this.currentNullable_1 = currentNullable;
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
    return new _no_name_provided__qut3iv(tmp0_filter);
  }
  function withPrevious$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$slambda).invoke_usp5f0_k$ = function (previous, current, $completion) {
    var tmp = this.create_al2gzt_k$(previous, current, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(withPrevious$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = p1 instanceof CompareValues ? p1 : THROW_CCE();
    return this.invoke_usp5f0_k$(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE(), $completion);
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
  protoOf(withPrevious$slambda).create_al2gzt_k$ = function (previous, current, completion) {
    var i = new withPrevious$slambda(completion);
    i.previous_1 = previous;
    i.current_1 = current;
    return i;
  };
  function withPrevious$slambda_0(resultContinuation) {
    var i = new withPrevious$slambda(resultContinuation);
    var l = function (previous, current, $completion) {
      return i.invoke_usp5f0_k$(previous, current, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function withPrevious$o$collect$slambda($collector, resultContinuation) {
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withPrevious$o$collect$slambda).invoke_vsvjwf_k$ = function (value, $completion) {
    var tmp = this.create_u6kivy_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(withPrevious$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_vsvjwf_k$(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
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
  protoOf(withPrevious$o$collect$slambda).create_u6kivy_k$ = function (value, completion) {
    var i = new withPrevious$o$collect$slambda(this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(withPrevious$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_u6kivy_k$(value instanceof CompareValues ? value : THROW_CCE(), completion);
  };
  function withPrevious$o$collect$slambda_0($collector, resultContinuation) {
    var i = new withPrevious$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_vsvjwf_k$(value, $completion);
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
            var tmp_0 = withPrevious$o$collect$slambda_0(this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_filter_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  function _no_name_provided__qut3iv($tmp0_filter) {
    this.$tmp0_filter_1 = $tmp0_filter;
  }
  protoOf(_no_name_provided__qut3iv).collect_3svhti_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_3svhti_k$(collector, $completion);
  };
  function ChildAware() {
  }
  function _get_child__j05w3v($this) {
    return $this.child_1;
  }
  function _get_callback__78r8km($this) {
    return $this.callback_1;
  }
  function _get_parentLifecycle__r7p69($this) {
    return $this.parentLifecycle_1;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function _get_child1__kw67sa($this) {
    return $this.child1__1;
  }
  function _get_child2__kw67rf($this) {
    return $this.child2__1;
  }
  function _get_callback__78r8km_0($this) {
    return $this.callback_1;
  }
  function _get_parentLifecycle__r7p69_0($this) {
    return $this.parentLifecycle_1;
  }
  function notify($this, node1, node2) {
    if (get_isDestroyed($this.parentLifecycle_1))
      return Unit_getInstance();
    var lifecycle = (new MinimumCombinedLifecycle([$this.parentLifecycle_1, node1.get_lifecycle_3iiym9_k$(), node2.get_lifecycle_3iiym9_k$()])).get_lifecycle_3iiym9_k$();
    if ($this.child1__1.isInstance_6tn68w_k$(node1)) {
      $this.callback_1(lifecycle, cast($this.child1__1, node1), cast($this.child2__1, node2));
    } else {
      $this.callback_1(lifecycle, cast($this.child1__1, node2), cast($this.child2__1, node1));
    }
  }
  function getOther($this, node) {
    return $this.child1__1.isInstance_6tn68w_k$(node) ? $this.child2__1 : $this.child2__1.isInstance_6tn68w_k$(node) ? $this.child1__1 : null;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function Single(child, callback, parentLifecycle) {
    ChildAwareCallbackInfo.call(this);
    this.child_1 = child;
    this.callback_1 = callback;
    this.parentLifecycle_1 = parentLifecycle;
    this.$stable_1 = 0;
  }
  protoOf(Single).onNewNodeAppeared_fecqf_k$ = function (newNode) {
    if (get_isDestroyed(this.parentLifecycle_1))
      return Unit_getInstance();
    var castedNode = safeCast(this.child_1, newNode);
    if (!(castedNode == null)) {
      var lifecycle = (new MinimumCombinedLifecycle([this.parentLifecycle_1, newNode.get_lifecycle_3iiym9_k$()])).get_lifecycle_3iiym9_k$();
      this.callback_1(lifecycle, castedNode);
    }
  };
  protoOf(Single).onRegistered_vg08qn_k$ = function (activeNodes) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = activeNodes.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.navigation.children.Single.onRegistered.<anonymous>' call
      this.onNewNodeAppeared_fecqf_k$(element);
    }
  };
  function Double(child1, child2, callback, parentLifecycle) {
    ChildAwareCallbackInfo.call(this);
    this.child1__1 = child1;
    this.child2__1 = child2;
    this.callback_1 = callback;
    this.parentLifecycle_1 = parentLifecycle;
    this.$stable_1 = 0;
  }
  protoOf(Double).onNewNodeAppeared_josshh_k$ = function (activeNodes, newNode, ignoreNodes) {
    var tmp0_elvis_lhs = getOther(this, newNode);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var second = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = activeNodes.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.navigation.children.Double.onNewNodeAppeared.<anonymous>' call
      if ((second.isInstance_6tn68w_k$(element) ? !equals(element, newNode) : false) ? !ignoreNodes.contains_2ehdt1_k$(element) : false) {
        tmp0_filterTo.add_1j60pz_k$(element);
      }
    }
    var tmp0_iterator_0 = tmp0_filterTo.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.bumble.appyx.navigation.children.Double.onNewNodeAppeared.<anonymous>' call
      notify(this, newNode, element_0);
    }
  };
  protoOf(Double).onRegistered_vg08qn_k$ = function (activeNodes) {
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = activeNodes.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.navigation.children.Double.onRegistered.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0_anonymous = checkIndexOverflow(tmp1);
      this.onNewNodeAppeared_josshh_k$(activeNodes.subList_d153ha_k$(tmp0_anonymous + 1 | 0, activeNodes.get_size_woubt6_k$()), item, emptySet());
    }
  };
  function ChildAwareCallbackInfo() {
  }
  function ChildAwareImpl$observeChanges$o$collect$slambda($collector, resultContinuation) {
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildAwareImpl$observeChanges$o$collect$slambda).invoke_z91a2t_k$ = function (value, $completion) {
    var tmp = this.create_cevzoi_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildAwareImpl$observeChanges$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_z91a2t_k$((!(p1 == null) ? isInterface(p1, Map) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildAwareImpl$observeChanges$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp0_mapNotNullTo = this.value_1.get_values_ksazhn_k$();
            var tmp1_mapNotNullTo = HashSet_init_$Create$();
            var tmp0_iterator = tmp0_mapNotNullTo.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              var tmp0_safe_receiver = get_nodeOrNull(element);
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp1_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver);
              }
            }

            suspendResult = this.$collector_1.emit_1fbrsb_k$(tmp1_mapNotNullTo, this);
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
  protoOf(ChildAwareImpl$observeChanges$o$collect$slambda).create_cevzoi_k$ = function (value, completion) {
    var i = new ChildAwareImpl$observeChanges$o$collect$slambda(this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(ChildAwareImpl$observeChanges$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_cevzoi_k$((!(value == null) ? isInterface(value, Map) : false) ? value : THROW_CCE(), completion);
  };
  function ChildAwareImpl$observeChanges$o$collect$slambda_0($collector, resultContinuation) {
    var i = new ChildAwareImpl$observeChanges$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_z91a2t_k$(value, $completion);
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
            var tmp_0 = ChildAwareImpl$observeChanges$o$collect$slambda_0(this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), this);
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
  function _get_callbacks__bg494z($this) {
    return $this.callbacks_1;
  }
  function _set_children__za3nm0($this, _set____db54di) {
    $this.children_1 = _set____db54di;
  }
  function _get_children__my42wc($this) {
    var tmp = $this.children_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('children');
    }
  }
  function _set_lifecycle__76087v($this, _set____db54di) {
    $this.lifecycle_1 = _set____db54di;
  }
  function _get_lifecycle__yk9dcp($this) {
    var tmp = $this.lifecycle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('lifecycle');
    }
  }
  function _set_coroutineScope__lautrv($this, _set____db54di) {
    $this.coroutineScope_1 = _set____db54di;
  }
  function _get_coroutineScope__o75s5t($this) {
    var tmp = $this.coroutineScope_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('coroutineScope');
    }
  }
  function _set_node__9r8wb9($this, _set____db54di) {
    $this.node_1 = _set____db54di;
  }
  function observeChanges($this, $completion) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.flow.map' call
    var tmp0_map = _get_children__my42wc($this);
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$2 = new _no_name_provided__qut3iv_0(tmp0_map);
    var tmp = withPrevious(tmp$ret$2);
    var tmp_0 = ChildAwareImpl$observeChanges$slambda_0($this, null);
    return tmp.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_0), $completion);
  }
  function notifyWhenRegistered($this, callback) {
    callback.onRegistered_vg08qn_k$(getCreatedNodes($this, _get_children__my42wc($this).get_value_j01efc_k$()));
  }
  function notifyWhenChanged($this, child, nodes, ignore) {
    var tmp0_iterator = $this.callbacks_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var callback = tmp0_iterator.next_20eer_k$();
      if (callback instanceof Double) {
        callback.onNewNodeAppeared_josshh_k$(nodes, child, ignore);
      } else {
        if (callback instanceof Single) {
          callback.onNewNodeAppeared_fecqf_k$(child);
        }
      }
    }
  }
  function removeWhenDestroyed(_this__u8e3s4, $this, info) {
    _this__u8e3s4.addObserver_ch8ntw_k$(new ChildAwareImpl$removeWhenDestroyed$1($this, info));
  }
  function getCreatedNodes($this, childEntryMap) {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0_mapNotNull = childEntryMap.get_values_ksazhn_k$();
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = tmp0_mapNotNull.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.bumble.appyx.navigation.children.ChildAwareImpl.getCreatedNodes.<anonymous>' call
      var tmp0_safe_receiver = get_nodeOrNull(element);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver);
      }
    }
    return tmp0_mapNotNullTo;
  }
  function get_$stableprop_2() {
    return 8;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function ChildAwareImpl$init$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildAwareImpl$init$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildAwareImpl$init$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildAwareImpl$init$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = observeChanges(this.this$0__1, this);
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
  protoOf(ChildAwareImpl$init$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new ChildAwareImpl$init$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ChildAwareImpl$init$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChildAwareImpl$init$slambda_0(this$0, resultContinuation) {
    var i = new ChildAwareImpl$init$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_0($tmp0_map) {
    this.$tmp0_map_1 = $tmp0_map;
  }
  protoOf(_no_name_provided__qut3iv_0).collect_m5owll_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_0).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_m5owll_k$(collector, $completion);
  };
  function ChildAwareImpl$observeChanges$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildAwareImpl$observeChanges$slambda).invoke_a3l2h5_k$ = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.create_m340fg_k$(_name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildAwareImpl$observeChanges$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_a3l2h5_k$(p1 instanceof CompareValues ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildAwareImpl$observeChanges$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var previous = this._name_for_destructuring_parameter_0__wldtmu_1.component1_7eebsc_k$();
          var current = this._name_for_destructuring_parameter_0__wldtmu_1.component2_7eebsb_k$();
          var newNodes = minus(current, previous == null ? emptySet() : previous);
          var visitedSet = HashSet_init_$Create$();
          var tmp0_iterator = newNodes.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            notifyWhenChanged(this.this$0__1, element, current, visitedSet);
            visitedSet.add_1j60pz_k$(element);
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
  protoOf(ChildAwareImpl$observeChanges$slambda).create_m340fg_k$ = function (_name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ChildAwareImpl$observeChanges$slambda(this.this$0__1, completion);
    i._name_for_destructuring_parameter_0__wldtmu_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  protoOf(ChildAwareImpl$observeChanges$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_m340fg_k$(value instanceof CompareValues ? value : THROW_CCE(), completion);
  };
  function ChildAwareImpl$observeChanges$slambda_0(this$0, resultContinuation) {
    var i = new ChildAwareImpl$observeChanges$slambda(this$0, resultContinuation);
    var l = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.invoke_a3l2h5_k$(_name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildAwareImpl$removeWhenDestroyed$1(this$0, $info) {
    this.this$0__1 = this$0;
    this.$info_1 = $info;
  }
  protoOf(ChildAwareImpl$removeWhenDestroyed$1).onDestroy_x0zuba_k$ = function () {
    this.this$0__1.callbacks_1.remove_8hbkc6_k$(this.$info_1);
  };
  function ChildAwareImpl() {
    this.callbacks_1 = ArrayList_init_$Create$();
    this.$stable_1 = 8;
  }
  protoOf(ChildAwareImpl).get_node_wor8sr_k$ = function () {
    var tmp = this.node_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('node');
    }
  };
  protoOf(ChildAwareImpl).init_6xmvzm_k$ = function (node) {
    this.node_1 = node;
    this.lifecycle_1 = node.get_lifecycle_3iiym9_k$();
    this.coroutineScope_1 = _get_lifecycle__yk9dcp(this).get_coroutineScope_5k7h45_k$();
    if (node instanceof ParentNode) {
      this.children_1 = node.get_children_4cwbp4_k$();
      var tmp = _get_coroutineScope__o75s5t(this);
      launch(tmp, VOID, VOID, ChildAwareImpl$init$slambda_0(this, null));
    } else {
      this.children_1 = MutableStateFlow(emptyMap());
    }
  };
  protoOf(ChildAwareImpl).whenChildAttached_homwl1_k$ = function (child, callback) {
    if (get_isDestroyed(_get_lifecycle__yk9dcp(this)))
      return Unit_getInstance();
    var info = new Single(child, callback, _get_lifecycle__yk9dcp(this));
    // Inline function 'kotlin.collections.plusAssign' call
    this.callbacks_1.add_1j60pz_k$(info);
    notifyWhenRegistered(this, info);
    removeWhenDestroyed(_get_lifecycle__yk9dcp(this), this, info);
  };
  protoOf(ChildAwareImpl).whenChildrenAttached_jtt3b8_k$ = function (child1, child2, callback) {
    if (get_isDestroyed(_get_lifecycle__yk9dcp(this)))
      return Unit_getInstance();
    var info = new Double(child1, child2, callback, _get_lifecycle__yk9dcp(this));
    // Inline function 'kotlin.collections.plusAssign' call
    this.callbacks_1.add_1j60pz_k$(info);
    notifyWhenRegistered(this, info);
    removeWhenDestroyed(_get_lifecycle__yk9dcp(this), this, info);
  };
  function get_$stableprop_3() {
    return 0;
  }
  function get_$stableprop_4() {
    return 8;
  }
  var KeepMode_KEEP_instance;
  var KeepMode_SUSPEND_instance;
  function values() {
    return [KeepMode_KEEP_getInstance(), KeepMode_SUSPEND_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'KEEP':
        return KeepMode_KEEP_getInstance();
      case 'SUSPEND':
        return KeepMode_SUSPEND_getInstance();
      default:
        KeepMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var KeepMode_entriesInitialized;
  function KeepMode_initEntries() {
    if (KeepMode_entriesInitialized)
      return Unit_getInstance();
    KeepMode_entriesInitialized = true;
    KeepMode_KEEP_instance = new KeepMode('KEEP', 0);
    KeepMode_SUSPEND_instance = new KeepMode('SUSPEND', 1);
  }
  var $ENTRIES;
  function Initialized(key, node) {
    ChildEntry.call(this);
    this.key_1 = key;
    this.node_1 = node;
    this.$stable_2 = 0;
  }
  protoOf(Initialized).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Initialized).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  function Suspended(key, savedState) {
    ChildEntry.call(this);
    this.key_1 = key;
    this.savedState_1 = savedState;
    this.$stable_2 = 8;
  }
  protoOf(Suspended).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Suspended).get_savedState_52fa37_k$ = function () {
    return this.savedState_1;
  };
  function KeepMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_$stableprop_5() {
    return 0;
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
    this.$stable_1 = 0;
  }
  protoOf(ChildEntry).equals = function (other) {
    var tmp;
    if (!(other == null) ? getKClassFromExpression(other).equals(getKClassFromExpression(this)) : false) {
      var tmp0_safe_receiver = other instanceof ChildEntry ? other : null;
      tmp = equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_key_18j28a_k$(), this.get_key_18j28a_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ChildEntry).hashCode = function () {
    return this.get_key_18j28a_k$().hashCode();
  };
  protoOf(ChildEntry).toString = function () {
    return '' + this.get_key_18j28a_k$() + '@' + getKClassFromExpression(this).get_simpleName_r6f8py_k$();
  };
  function get_nodeOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof Initialized) {
      tmp = _this__u8e3s4.get_node_wor8sr_k$();
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
    var tmp0_mapNotNullTo = HashSet_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$(), 1.0);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      var tmp0_safe_receiver = mapper(element);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver);
      }
    }
    return tmp0_mapNotNullTo;
  }
  function ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda).invoke_eykgfz_k$ = function (state, $completion) {
    var tmp = this.create_xhvbvi_k$(state, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_eykgfz_k$(p1 instanceof Elements ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var appyxComponentKeepKeys;
          var appyxComponentSuspendKeys;
          var appyxComponentKeys;
          switch (this.this$0__1.keepMode_1.get_ordinal_ip24qg_k$()) {
            case 0:
              appyxComponentKeepKeys = plus(this.state_2.get_onScreen_75efbg_k$(), this.state_2.get_offScreen_vxq0b6_k$());
              appyxComponentSuspendKeys = emptySet();
              appyxComponentKeys = appyxComponentKeepKeys;
              break;
            case 1:
              appyxComponentKeepKeys = this.state_2.get_onScreen_75efbg_k$();
              appyxComponentSuspendKeys = this.state_2.get_offScreen_vxq0b6_k$();
              appyxComponentKeys = plus(appyxComponentKeepKeys, appyxComponentSuspendKeys);
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          updateChildren(this.this$0__1, appyxComponentKeys, appyxComponentKeepKeys, appyxComponentSuspendKeys);
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
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda).create_xhvbvi_k$ = function (state, completion) {
    var i = new ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda(this.this$0__1, completion);
    i.state_2 = state;
    return i;
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_xhvbvi_k$(value instanceof Elements ? value : THROW_CCE(), completion);
  };
  function ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda_0(this$0, resultContinuation) {
    var i = new ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda(this$0, resultContinuation);
    var l = function (state, $completion) {
      return i.invoke_eykgfz_k$(state, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_savedStateMap__9cavjh($this, _set____db54di) {
    $this.savedStateMap_1 = _set____db54di;
  }
  function _get_savedStateMap__ok2e1t($this) {
    return $this.savedStateMap_1;
  }
  function _get_customisations__kjkagi($this) {
    return $this.customisations_1;
  }
  function _get_keepMode__4o73lp($this) {
    return $this.keepMode_1;
  }
  function _set_parentNode__e68nf($this, _set____db54di) {
    $this.parentNode_1 = _set____db54di;
  }
  function _get_parentNode__eo2cht($this) {
    var tmp = $this.parentNode_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('parentNode');
    }
  }
  function _get__children__n7wjoz($this) {
    return $this._children_1;
  }
  function syncAppyxComponentWithChildren($this, parentNode) {
    var tmp = parentNode.get_lifecycle_3iiym9_k$().get_coroutineScope_5k7h45_k$();
    launch(tmp, VOID, VOID, ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda_0(parentNode, $this, null));
  }
  function updateChildren($this, appyxComponentElements, appyxComponentKeepElements, appyxComponentSuspendElements) {
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.flow.update' call
      var tmp0_update = $this._children_1;
      while (true) {
        var prevValue = tmp0_update.get_value_j01efc_k$();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>' call
          var localElements = prevValue.get_keys_wop4xp_k$();
          var tmp = prevValue.get_entries_p20ztl_k$();
          var tmp_0 = Companion_getInstance_9();
          var localKeptElements = mapNotNullToSet(tmp, tmp_0, ChildNodeCreationManager$updateChildren$lambda);
          var tmp_1 = prevValue.get_entries_p20ztl_k$();
          var tmp_2 = Companion_getInstance_9();
          var localSuspendedKeys = mapNotNullToSet(tmp_1, tmp_2, ChildNodeCreationManager$updateChildren$lambda_0);
          var newElements = minus(appyxComponentElements, localElements);
          var removedElements = minus(localElements, appyxComponentElements);
          var keepElements = intersect(localSuspendedKeys, appyxComponentKeepElements);
          var suspendElements = intersect(localKeptElements, appyxComponentSuspendElements);
          var noKeysChanges = newElements.isEmpty_y1axqb_k$() ? removedElements.isEmpty_y1axqb_k$() : false;
          var noSuspendChanges = keepElements.isEmpty_y1axqb_k$() ? suspendElements.isEmpty_y1axqb_k$() : false;
          if (noKeysChanges ? noSuspendChanges : false) {
            tmp$ret$0 = prevValue;
            break $l$block;
          }
          var mutableMap = toMutableMap(prevValue);
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = newElements.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>' call
            var shouldSuspend = $this.keepMode_1.equals(KeepMode_SUSPEND_getInstance()) ? appyxComponentSuspendElements.contains_2ehdt1_k$(element) : false;
            // Inline function 'kotlin.collections.set' call
            var tmp0_set = childEntry($this, element, null, shouldSuspend);
            mutableMap.put_3mhbri_k$(element, tmp0_set);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = removedElements.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>' call
            mutableMap.remove_8hbkc0_k$(element_0);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_1 = keepElements.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_1.next_20eer_k$();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.set' call
            var tmp$ret$3;
            // Inline function 'kotlin.requireNotNull' call
            var tmp0_requireNotNull = mutableMap.get_1mhr4y_k$(element_1);
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              // Inline function 'kotlin.contracts.contract' call
              if (tmp0_requireNotNull == null) {
                // Inline function 'kotlin.requireNotNull.<anonymous>' call
                var message = 'Required value was null.';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0_requireNotNull;
                break $l$block_0;
              }
            }
            tmp$ret$3 = tmp$ret$2;
            var tmp1_set = initialize(tmp$ret$3, $this);
            mutableMap.put_3mhbri_k$(element_1, tmp1_set);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = suspendElements.iterator_jk1svi_k$();
          while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_2.next_20eer_k$();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.set' call
            var tmp$ret$6;
            // Inline function 'kotlin.requireNotNull' call
            var tmp0_requireNotNull_0 = mutableMap.get_1mhr4y_k$(element_2);
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$5;
            $l$block_1: {
              // Inline function 'kotlin.requireNotNull' call
              // Inline function 'kotlin.contracts.contract' call
              if (tmp0_requireNotNull_0 == null) {
                // Inline function 'kotlin.requireNotNull.<anonymous>' call
                var message_0 = 'Required value was null.';
                throw IllegalArgumentException_init_$Create$(toString(message_0));
              } else {
                tmp$ret$5 = tmp0_requireNotNull_0;
                break $l$block_1;
              }
            }
            tmp$ret$6 = tmp$ret$5;
            var tmp1_set_0 = suspend(tmp$ret$6, $this);
            mutableMap.put_3mhbri_k$(element_2, tmp1_set_0);
          }
          tmp$ret$0 = mutableMap;
        }
        var nextValue = tmp$ret$0;
        if (tmp0_update.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
          break $l$block_2;
        }
      }
    }
  }
  function restoreChildren(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = null;
    } else {
      Companion_getInstance_9();
      tmp = _this__u8e3s4.get_1mhr4y_k$('ChildrenState');
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = (!(tmp_0 == null) ? isInterface(tmp_0, Map) : false) ? tmp_0 : null;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.mapValuesTo' call
      var tmp0_mapValuesTo = LinkedHashMap_init_$Create$(mapCapacity(tmp1_safe_receiver.get_size_woubt6_k$()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = tmp1_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_2 = element.get_key_18j28a_k$();
        var tmp$ret$1;
        // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.restoreChildren.<anonymous>' call
        tmp$ret$1 = childEntry($this, element.get_key_18j28a_k$(), element.get_value_j01efc_k$(), true);
        tmp0_mapValuesTo.put_3mhbri_k$(tmp_2, tmp$ret$1);
      }
      tmp_1 = tmp0_mapValuesTo;
    }
    return tmp_1;
  }
  function childBuildContext($this, savedState) {
    return new BuildContext(new Child(_get_parentNode__eo2cht($this)), savedState, $this.customisations_1.getSubDirectoryOrSelf_vtw4p5_k$(getKClassFromExpression(_get_parentNode__eo2cht($this))));
  }
  function childEntry($this, key, savedState, suspended) {
    var tmp;
    if (suspended) {
      tmp = new Suspended(key, savedState);
    } else {
      tmp = new Initialized(key, build(_get_parentNode__eo2cht($this).resolve_rgjbzh_k$(key.get_interactionTarget_ay5ie_k$(), childBuildContext($this, savedState))));
    }
    return tmp;
  }
  function initialize(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof Initialized) {
      tmp = _this__u8e3s4;
    } else {
      if (_this__u8e3s4 instanceof Suspended) {
        tmp = new Initialized(_this__u8e3s4.get_key_18j28a_k$(), build(_get_parentNode__eo2cht($this).resolve_rgjbzh_k$(_this__u8e3s4.get_key_18j28a_k$().get_interactionTarget_ay5ie_k$(), childBuildContext($this, _this__u8e3s4.get_savedState_52fa37_k$()))));
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
        var tmp_0 = _this__u8e3s4.get_key_18j28a_k$();
        var tmp_1 = _this__u8e3s4.get_node_wor8sr_k$();
        var tmp_2 = ChildNodeCreationManager$suspend$lambda;
        tmp = new Suspended(tmp_0, tmp_1.saveInstanceState_8yjxr3_k$(new sam$androidx_compose_runtime_saveable_SaverScope$0(tmp_2)));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    this.KEY_CHILDREN_STATE_1 = 'ChildrenState';
  }
  protoOf(Companion).get_KEY_CHILDREN_STATE_eylnei_k$ = function () {
    return this.KEY_CHILDREN_STATE_1;
  };
  var Companion_instance;
  function Companion_getInstance_9() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function sam$androidx_compose_runtime_saveable_SaverScope$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_saveable_SaverScope$0).canBeSaved_nnajrq_k$ = function (value) {
    return this.function_1(value);
  };
  function ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda($parentNode, this$0, resultContinuation) {
    this.$parentNode_1 = $parentNode;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this.$parentNode_1.get_appyxComponent_er08wq_k$().get_elements_vxwh8g_k$();
            var tmp_1 = ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda$slambda_0(this.this$0__1, null);
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
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda(this.$parentNode_1, this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda_0($parentNode, this$0, resultContinuation) {
    var i = new ChildNodeCreationManager$syncAppyxComponentWithChildren$slambda($parentNode, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildNodeCreationManager$updateChildren$lambda(entry) {
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = entry.get_key_18j28a_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>.<anonymous>' call
    var tmp_0 = entry.get_value_j01efc_k$();
    if (tmp_0 instanceof Initialized) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChildNodeCreationManager$updateChildren$lambda_0(entry) {
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = entry.get_key_18j28a_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.updateChildren.<anonymous>.<anonymous>.<anonymous>' call
    var tmp_0 = entry.get_value_j01efc_k$();
    if (tmp_0 instanceof Suspended) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChildNodeCreationManager$suspend$lambda(it) {
    return true;
  }
  function ChildNodeCreationManager(savedStateMap, customisations, keepMode) {
    Companion_getInstance_9();
    this.savedStateMap_1 = savedStateMap;
    this.customisations_1 = customisations;
    this.keepMode_1 = keepMode;
    this._children_1 = MutableStateFlow(emptyMap());
    this.children_1 = asStateFlow(this._children_1);
  }
  protoOf(ChildNodeCreationManager).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(ChildNodeCreationManager).launch_53dbba_k$ = function (parentNode) {
    this.parentNode_1 = parentNode;
    var tmp0_safe_receiver = restoreChildren(this.savedStateMap_1, this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.launch.<anonymous>' call
      $l$block: {
        // Inline function 'kotlinx.coroutines.flow.update' call
        var tmp0_update = this._children_1;
        while (true) {
          var prevValue = tmp0_update.get_value_j01efc_k$();
          // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.launch.<anonymous>.<anonymous>' call
          var nextValue = tmp0_safe_receiver;
          if (tmp0_update.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
            break $l$block;
          }
        }
      }
      this.savedStateMap_1 = null;
    }
    syncAppyxComponentWithChildren(this, parentNode);
  };
  protoOf(ChildNodeCreationManager).childOrCreate_ienlyf_k$ = function (element) {
    var value = this._children_1.get_value_j01efc_k$();
    var tmp0_elvis_lhs = value.get_1mhr4y_k$(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Rendering and children management is out of sync: requested ' + element + ' but have only ' + value.get_keys_wop4xp_k$();
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
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
          var tmp1_updateAndGet = this._children_1;
          while (true) {
            var prevValue = tmp1_updateAndGet.get_value_j01efc_k$();
            // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.childOrCreate.<anonymous>' call
            var tmp0_elvis_lhs_0 = prevValue.get_1mhr4y_k$(element);
            var tmp_1;
            if (tmp0_elvis_lhs_0 == null) {
              var tmp0_error_0 = 'Requested child ' + element + ' disappeared';
              throw IllegalStateException_init_$Create$(toString(tmp0_error_0));
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
            if (tmp1_updateAndGet.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
              tmp$ret$1 = nextValue;
              break $l$block;
            }
          }
        }
        var tmp_3 = tmp$ret$1.get_1mhr4y_k$(element);
        tmp_0 = tmp_3 instanceof Initialized ? tmp_3 : THROW_CCE();
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp_0;
  };
  protoOf(ChildNodeCreationManager).saveChildrenState_ku378i_k$ = function (writer) {
    var children = this._children_1.get_value_j01efc_k$();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!children.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.mapValuesTo' call
      var tmp0_mapValuesTo = LinkedHashMap_init_$Create$(mapCapacity(children.get_size_woubt6_k$()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator = children.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp = element.get_key_18j28a_k$();
        var tmp$ret$3;
        // Inline function 'com.bumble.appyx.navigation.children.ChildNodeCreationManager.saveChildrenState.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var entry = element.get_value_j01efc_k$();
        var tmp_0;
        if (entry instanceof Initialized) {
          tmp_0 = entry.get_node_wor8sr_k$().saveInstanceState_8yjxr3_k$(writer.get_saverScope_borf48_k$());
        } else {
          if (entry instanceof Suspended) {
            tmp_0 = entry.get_savedState_52fa37_k$();
          } else {
            noWhenBranchMatchedException();
          }
        }
        tmp$ret$3 = tmp_0;
        tmp0_mapValuesTo.put_3mhbri_k$(tmp, tmp$ret$3);
      }
      var childrenState = tmp0_mapValuesTo;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!childrenState.isEmpty_y1axqb_k$()) {
        // Inline function 'kotlin.collections.set' call
        Companion_getInstance_9();
        var tmp0_set = 'ChildrenState';
        writer.put_3mhbri_k$(tmp0_set, childrenState);
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1826756814);
    sourceInformation($composer_0, 'C(AppyxComponent$composable)P(!1,5,2,4,3:c#ui.unit.Dp)');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(appyxComponent) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(clipToBounds_1._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga7h3f_k$(gestureValidator_0._v) : false) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_7hxtmu_k$(_Dp___get_value__impl__geb1vb(gestureExtraTouchArea_0._v.value_1)) ? 131072 : 65536);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(block_0._v) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 4) === 0)) {
          clipToBounds_1._v = false;
        }
        if (!(($default & 8) === 0)) {
          gestureValidator_0._v = Companion_getInstance_0().get_defaultValidator_z5qn1i_k$();
          $dirty = $dirty & -57345;
        }
        if (!(($default & 16) === 0)) {
          gestureExtraTouchArea_0._v = new Dp(get_defaultExtraTouch());
        }
        if (!(($default & 32) === 0)) {
          block_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(1826756814, $dirty, -1, 'com.bumble.appyx.navigation.composable.AppyxComponent$composable (AppyxComponent.kt:59)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      var density = tmp0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalScreenSize();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.consume_11nid3_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      var tmp4_times = tmp0_0.get_widthDp_98cklg_k$();
      var tmp5_times = density.get_density_qy0267_k$();
      tmp$ret$2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp4_times) * tmp5_times);
      var tmp6_roundToInt = _Dp___get_value__impl__geb1vb(tmp$ret$2);
      var screenWidthPx = roundToInt(tmp6_roundToInt);
      // Inline function 'kotlin.math.roundToInt' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp7_$get_current$$composable_dkarp2 = get_LocalScreenSize();
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.consume_11nid3_k$(tmp7_$get_current$$composable_dkarp2);
      sourceInformationMarkerEnd($composer_3);
      var tmp9_times = tmp0_1.get_heightDp_dtmrdj_k$();
      var tmp10_times = density.get_density_qy0267_k$();
      tmp$ret$5 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp9_times) * tmp10_times);
      var tmp11_roundToInt = _Dp___get_value__impl__geb1vb(tmp$ret$5);
      var screenHeightPx = roundToInt(tmp11_roundToInt);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp13_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: null};
      var $composer_4 = tmp13_rememberCoroutineScope$composable;
      $composer_4.startReplaceableGroup_rp6air_k$(102870005);
      sourceInformation($composer_4, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = AppyxComponent$composable$lambda_1;
      }
      var composer = $composer_4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_4;
      $composer_5.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_5, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_5.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_5.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0_2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_5.endReplaceableGroup_er37p7_k$();
      var wrapper = tmp0_2;
      var tmp0_3 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_4.endReplaceableGroup_er37p7_k$();
      var coroutineScope = tmp0_3;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_0;
      $composer_6.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_6.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>' call
        var value_0 = mutableStateOf(new IntSize(Companion_getInstance_2().get_Zero_4ip44w_k$()));
        $composer_6.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_4 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_6.endReplaceableGroup_er37p7_k$();
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
        var $composer_7 = $composer_0;
        $composer_7.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_7.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = $composer_7.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp1_cache ? true : tmp0_let_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_1(dispatchReceiver);
          $composer_7.updateRememberedValue_l1colo_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = tmp0_let_1;
        }
        var tmp_6 = tmp_5;
        var tmp0_5 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        $composer_7.endReplaceableGroup_er37p7_k$();
        tmp_3 = tmp0_5;
      } else {
        tmp_3 = tmp0_elvis_lhs;
      }
      var childrenBlock = tmp_3;
      SideEffect$composable(AppyxComponent$composable$lambda_3(appyxComponent, coroutineScope, clipToBounds_1), $composer_0, 0);
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp_7 = fillMaxSize(modifier_0._v).then_5qw5wu_k$(clipToBounds_1._v ? clipToBounds(Companion_getInstance()) : Companion_getInstance());
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_8 = $composer_0;
      $composer_8.startReplaceableGroup_rp6air_k$(-1603429786);
      sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = [containerSize$delegate, appyxComponent, density, screenWidthPx, screenHeightPx];
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_8.changed_ga7h3f_k$(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = invalid;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_8.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (tmp1_cache_0 ? true : tmp0_let_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>' call
        var value_2 = AppyxComponent$composable$lambda_4(appyxComponent, density, screenWidthPx, screenHeightPx, containerSize$delegate);
        $composer_8.updateRememberedValue_l1colo_k$(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = tmp0_let_2;
      }
      var tmp_9 = tmp_8;
      var tmp0_6 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      $composer_8.endReplaceableGroup_er37p7_k$();
      var tmp_10 = onPlaced(tmp_7, tmp0_6);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_9 = $composer_0;
      $composer_9.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_9, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_9.changed_ga7h3f_k$(appyxComponent);
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = $composer_9.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (tmp1_cache_1 ? true : tmp0_let_3 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>' call
        var value_3 = AppyxComponent$composable$lambda_5(appyxComponent);
        $composer_9.updateRememberedValue_l1colo_k$(value_3);
        tmp_11 = value_3;
      } else {
        tmp_11 = tmp0_let_3;
      }
      var tmp_12 = tmp_11;
      var tmp0_7 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      $composer_9.endReplaceableGroup_er37p7_k$();
      var modifier_1 = onPointerEvent(tmp_10, tmp0_7);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_10 = $composer_0;
      $composer_10.startReplaceableGroup_rp6air_k$(1330882304);
      sourceInformation($composer_10, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_10, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_2 = modifier_1;
      var $composer_11 = $composer_10;
      $composer_11.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_11, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_2 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_11, 0);
      var localMap = $composer_11.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_2);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 0 << 9;
      var $composer_12 = $composer_11;
      var tmp_13 = $composer_12.get_applier_bupu8u_k$();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_12.startReusableNode_jk07k2_k$();
      if ($composer_12.get_inserting_25mlsw_k$()) {
        $composer_12.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_12.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_12);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_14;
      if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
        tmp_14 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_12)), $composer_12, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_12.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_13 = $composer_12;
      sourceInformationMarkerStart($composer_13, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>' call
      var tmp22_anonymous = BoxScopeInstance_getInstance();
      var $composer_14 = $composer_13;
      var tmp_15 = [get_LocalBoxScope().provides_3e53yf_k$(tmp22_anonymous)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous>' call
      var tmp_16 = $composer_14;
      var dispatchReceiver_0 = composableLambda(tmp_16, -2097015828, true, AppyxComponent$composable$lambda_6(childrenBlock, appyxComponent, gestureExtraTouchArea_0, gestureValidator_0, containerSize$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_15 = $composer_14;
      $composer_15.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_15, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_15.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = $composer_15.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_17;
      if (tmp1_cache_2 ? true : tmp0_let_4 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_2(dispatchReceiver_0);
        $composer_15.updateRememberedValue_l1colo_k$(value_4);
        tmp_17 = value_4;
      } else {
        tmp_17 = tmp0_let_4;
      }
      var tmp_18 = tmp_17;
      var tmp0_8 = (tmp_18 == null ? true : isObject(tmp_18)) ? tmp_18 : THROW_CCE();
      $composer_15.endReplaceableGroup_er37p7_k$();
      CompositionLocalProvider$composable(tmp_15, tmp0_8, $composer_14, 48);
      sourceInformationMarkerEnd($composer_13);
      $composer_12.endReplaceableGroup_er37p7_k$();
      $composer_12.endNode_3mkr10_k$();
      $composer_11.endReplaceableGroup_er37p7_k$();
      $composer_10.endReplaceableGroup_er37p7_k$();
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(AppyxComponent$composable$lambda_7(_this__u8e3s4, appyxComponent, modifier_0, clipToBounds_1, gestureValidator_0, gestureExtraTouchArea_0, block_0, $changed, $default));
    }
  }
  function ChildrenTransitionScope$children$composable$slambda$slambda($saveableStateHolder, resultContinuation) {
    this.$saveableStateHolder_1 = $saveableStateHolder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildrenTransitionScope$children$composable$slambda$slambda).invoke_dfk2m9_k$ = function (deletedKeys, $completion) {
    var tmp = this.create_ggjkiq_k$(deletedKeys, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_dfk2m9_k$((!(p1 == null) ? isInterface(p1, List) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_iterator = this.deletedKeys_1.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            this.$saveableStateHolder_1.removeState_5vvsww_k$(element);
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
  protoOf(ChildrenTransitionScope$children$composable$slambda$slambda).create_ggjkiq_k$ = function (deletedKeys, completion) {
    var i = new ChildrenTransitionScope$children$composable$slambda$slambda(this.$saveableStateHolder_1, completion);
    i.deletedKeys_1 = deletedKeys;
    return i;
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_ggjkiq_k$((!(value == null) ? isInterface(value, List) : false) ? value : THROW_CCE(), completion);
  };
  function ChildrenTransitionScope$children$composable$slambda$slambda_0($saveableStateHolder, resultContinuation) {
    var i = new ChildrenTransitionScope$children$composable$slambda$slambda($saveableStateHolder, resultContinuation);
    var l = function (deletedKeys, $completion) {
      return i.invoke_dfk2m9_k$(deletedKeys, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildrenTransitionScope$children$composable$lambda$slambda$lambda($appyxComponent) {
    return function (position) {
      $appyxComponent.onStartDrag_50u6al_k$(position.packedValue_1);
      return Unit_getInstance();
    };
  }
  function ChildrenTransitionScope$children$composable$lambda$slambda$lambda_0($appyxComponent) {
    return function () {
      $appyxComponent.onDragEnd_curv87_k$();
      return Unit_getInstance();
    };
  }
  function ChildrenTransitionScope$children$composable$lambda$slambda$lambda_1(this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $appyxComponent, $density) {
    return function (change, dragAmount) {
      var tmp;
      if (this$0.gestureValidator_1.isGestureValid_cl3szg_k$(change.get_position_kw508q_k$(), children$composable$_anonymous_$lambda$0_ylrj98($transformedBoundingBox$delegate).translate_bllf6j_k$(Offset__unaryMinus_impl_ssu2iv(children$composable$_anonymous_$lambda$4_ylrj9c($offsetCenter$delegate))))) {
        change.consume_spbz2t_k$();
        $appyxComponent.onDrag_v1qkpx_k$(dragAmount.packedValue_1, $density);
        tmp = true;
      } else {
        $appyxComponent.onDragEnd_curv87_k$();
        tmp = false;
      }
      return tmp;
    };
  }
  function _get_containerSize__mnf01b($this) {
    return $this.containerSize_1;
  }
  function _get_appyxComponent__eksp4i($this) {
    return $this.appyxComponent_1;
  }
  function _get_gestureExtraTouchArea__hgrxbo($this) {
    return $this.gestureExtraTouchArea_1;
  }
  function _get_gestureValidator__y4sg0u($this) {
    return $this.gestureValidator_1;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function children$composable$lambda($uiModels$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('uiModels', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $uiModels$delegate.get_value_j01efc_k$();
  }
  function children$composable$_anonymous_$lambda$0_ylrj98($transformedBoundingBox$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('transformedBoundingBox', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $transformedBoundingBox$delegate.get_value_j01efc_k$();
  }
  function children$composable$_anonymous_$lambda$1_ylrj99($transformedBoundingBox$delegate, value) {
    getLocalDelegateReference('transformedBoundingBox', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $transformedBoundingBox$delegate.set_value_rnwamw_k$(value);
  }
  function children$composable$_anonymous_$lambda$2_ylrj9a($elementSize$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('elementSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $elementSize$delegate.get_value_j01efc_k$().packedValue_1;
  }
  function children$composable$_anonymous_$lambda$3_ylrj9b($elementSize$delegate, value) {
    getLocalDelegateReference('elementSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $elementSize$delegate.set_value_rnwamw_k$(new IntSize(value));
  }
  function children$composable$_anonymous_$lambda$4_ylrj9c($offsetCenter$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('offsetCenter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $offsetCenter$delegate.get_value_j01efc_k$().packedValue_1;
  }
  function children$composable$_anonymous_$lambda$5_ylrj9d($offsetCenter$delegate, value) {
    getLocalDelegateReference('offsetCenter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $offsetCenter$delegate.set_value_rnwamw_k$(new Offset(value));
  }
  function children$composable$_anonymous_$lambda$6_ylrj9e($isVisible$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isVisible', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $isVisible$delegate.get_value_j01efc_k$();
  }
  function elementOffset$composable$lambda($result$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('result', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $result$delegate.get_value_j01efc_k$();
  }
  function ChildrenTransitionScope$children$composable$slambda(this$0, $saveableStateHolder, resultContinuation) {
    this.this$0__1 = this$0;
    this.$saveableStateHolder_1 = $saveableStateHolder;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildrenTransitionScope$children$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = removedElements(this.this$0__1.appyxComponent_1);
            var tmp_1 = ChildrenTransitionScope$children$composable$slambda$slambda_0(this.$saveableStateHolder_1, null);
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
  protoOf(ChildrenTransitionScope$children$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new ChildrenTransitionScope$children$composable$slambda(this.this$0__1, this.$saveableStateHolder_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(ChildrenTransitionScope$children$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChildrenTransitionScope$children$composable$slambda_0(this$0, $saveableStateHolder, resultContinuation) {
    var i = new ChildrenTransitionScope$children$composable$slambda(this$0, $saveableStateHolder, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
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
    this.$appyxComponent_1 = $appyxComponent;
    this.this$0__1 = this$0;
    this.$transformedBoundingBox$delegate_1 = $transformedBoundingBox$delegate;
    this.$offsetCenter$delegate_1 = $offsetCenter$delegate;
    this.$density_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildrenTransitionScope$children$composable$lambda$slambda).invoke_dycxzz_k$ = function ($this$pointerInput, $completion) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildrenTransitionScope$children$composable$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildrenTransitionScope$children$composable$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = ChildrenTransitionScope$children$composable$lambda$slambda$lambda(this.$appyxComponent_1);
            var tmp_1 = ChildrenTransitionScope$children$composable$lambda$slambda$lambda_0(this.$appyxComponent_1);
            suspendResult = detectDragGesturesOrCancellation(this.$this$pointerInput_1, tmp_0, tmp_1, ChildrenTransitionScope$children$composable$lambda$slambda$lambda_1(this.this$0__1, this.$transformedBoundingBox$delegate_1, this.$offsetCenter$delegate_1, this.$appyxComponent_1, this.$density_1), this);
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
  protoOf(ChildrenTransitionScope$children$composable$lambda$slambda).create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new ChildrenTransitionScope$children$composable$lambda$slambda(this.$appyxComponent_1, this.this$0__1, this.$transformedBoundingBox$delegate_1, this.$offsetCenter$delegate_1, this.$density_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  protoOf(ChildrenTransitionScope$children$composable$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChildrenTransitionScope$children$composable$lambda$slambda_0($appyxComponent, this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $density, resultContinuation) {
    var i = new ChildrenTransitionScope$children$composable$lambda$slambda($appyxComponent, this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $density, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.invoke_dycxzz_k$($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildrenTransitionScope$children$composable$lambda$lambda_0($elementOffset) {
    return function ($this$offset) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.IntOffset.unaryMinus' call
      tmp$ret$0 = IntOffset_0(-_IntOffset___get_x__impl__qiqr5o($elementOffset) | 0, -_IntOffset___get_y__impl__2avpwj($elementOffset) | 0);
      return new IntOffset(tmp$ret$0);
    };
  }
  function ChildrenTransitionScope$children$composable$lambda$lambda_1($elementSize$delegate, $transformedBoundingBox$delegate, $gestureExtraTouchAreaPx, $offsetCenter$delegate) {
    return function (it) {
      children$composable$_anonymous_$lambda$3_ylrj9b($elementSize$delegate, it.get_size_yscczt_k$());
      var localCenter = Offset__div_impl_eaxtg1(Offset_0(_IntSize___get_width__impl__d9yl4o(it.get_size_yscczt_k$()), _IntSize___get_height__impl__prv63b(it.get_size_yscczt_k$())), 2.0);
      children$composable$_anonymous_$lambda$1_ylrj99($transformedBoundingBox$delegate, boundsInParent(it).inflate_f59jyf_k$($gestureExtraTouchAreaPx));
      children$composable$_anonymous_$lambda$5_ylrj9d($offsetCenter$delegate, Offset__minus_impl_hoj2c0(children$composable$_anonymous_$lambda$0_ylrj98($transformedBoundingBox$delegate).get_center_568eeq_k$(), localCenter));
      return Unit_getInstance();
    };
  }
  function ChildrenTransitionScope$children$composable$lambda($offsetCenter$delegate, this$0, $elementSize$delegate, $$dirty, $this_children$composable, $element, $appyxComponent, $transformedBoundingBox$delegate, $density, $gestureExtraTouchAreaPx, $saveableStateHolder, $block) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1075062131, $changed, -1, 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous> (AppyxComponent.kt:156)');
        }
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.unit.IntOffset.minus' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.unit.round' call
        var tmp0_round = children$composable$_anonymous_$lambda$4_ylrj9c($offsetCenter$delegate);
        var tmp$ret$0;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = _Offset___get_x__impl__xvi35n(tmp0_round);
        tmp$ret$0 = roundToInt(tmp0_roundToInt);
        var tmp_0 = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp1_roundToInt = _Offset___get_y__impl__8bzhra(tmp0_round);
        tmp$ret$1 = roundToInt(tmp1_roundToInt);
        tmp$ret$2 = IntOffset_0(tmp_0, tmp$ret$1);
        var tmp1_minus = tmp$ret$2;
        var tmp2_minus = this$0.elementOffset$composable_havfpl_k$(children$composable$_anonymous_$lambda$2_ylrj9a($elementSize$delegate), this$0.containerSize_1, $composer_0, 896 & $$dirty);
        tmp$ret$3 = IntOffset_0(_IntOffset___get_x__impl__qiqr5o(tmp1_minus) - _IntOffset___get_x__impl__qiqr5o(tmp2_minus) | 0, _IntOffset___get_y__impl__2avpwj(tmp1_minus) - _IntOffset___get_y__impl__2avpwj(tmp2_minus) | 0);
        var elementOffset = tmp$ret$3;
        var tmp_1 = Companion_getInstance();
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(new IntOffset(elementOffset));
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp$ret$4;
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$4 = ChildrenTransitionScope$children$composable$lambda$lambda(elementOffset);
          var value = tmp$ret$4;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$5 = tmp_2;
        tmp$ret$6 = tmp$ret$5;
        var tmp_3 = tmp$ret$6;
        tmp$ret$7 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$7;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$8 = tmp0;
        var tmp_4 = offset(tmp_1, tmp$ret$8);
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp4_remember$composable = $composer_0;
        var $composer_2 = tmp4_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(-1603429786);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var invalid = false;
        var indexedObject = [$appyxComponent, this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $density];
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var key = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          invalid = !!(invalid | $composer_2.changed_ga7h3f_k$(key));
        }
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp1_cache_0 = invalid;
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp$ret$9;
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$9 = ChildrenTransitionScope$children$composable$lambda$slambda_0($appyxComponent, this$0, $transformedBoundingBox$delegate, $offsetCenter$delegate, $density, null);
          var value_0 = tmp$ret$9;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = tmp0_let_0;
        }
        tmp$ret$10 = tmp_5;
        tmp$ret$11 = tmp$ret$10;
        var tmp_6 = tmp$ret$11;
        tmp$ret$12 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_0 = tmp$ret$12;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$13 = tmp0_0;
        var tmp_7 = pointerInput(tmp_4, $appyxComponent, tmp$ret$13);
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp5_remember$composable = $composer_0;
        var $composer_3 = tmp5_remember$composable;
        $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_3;
        var tmp1_cache_1 = $composer_3.changed_ga7h3f_k$(new IntOffset(elementOffset));
        var tmp$ret$16;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp$ret$14;
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$14 = ChildrenTransitionScope$children$composable$lambda$lambda_0(elementOffset);
          var value_1 = tmp$ret$14;
          tmp0_cache_1.updateRememberedValue_l1colo_k$(value_1);
          tmp_8 = value_1;
        } else {
          tmp_8 = tmp0_let_1;
        }
        tmp$ret$15 = tmp_8;
        tmp$ret$16 = tmp$ret$15;
        var tmp_9 = tmp$ret$16;
        tmp$ret$17 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_1 = tmp$ret$17;
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$18 = tmp0_1;
        var tmp_10 = offset(tmp_7, tmp$ret$18).then_5qw5wu_k$($element.get_modifier_t1pq5c_k$());
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp6_remember$composable = $composer_0;
        var $composer_4 = tmp6_remember$composable;
        $composer_4.startReplaceableGroup_rp6air_k$(-1603429786);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var invalid_0 = false;
        var indexedObject_0 = [$elementSize$delegate, $transformedBoundingBox$delegate, $gestureExtraTouchAreaPx, $offsetCenter$delegate];
        var inductionVariable_0 = 0;
        var last_0 = indexedObject_0.length;
        while (inductionVariable_0 < last_0) {
          var key_0 = indexedObject_0[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          invalid_0 = !!(invalid_0 | $composer_4.changed_ga7h3f_k$(key_0));
        }
        var tmp$ret$22;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_2 = $composer_4;
        var tmp1_cache_2 = invalid_0;
        var tmp$ret$21;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp0_cache_2.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_11;
        if (tmp1_cache_2 ? true : tmp0_let_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp$ret$19;
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$19 = ChildrenTransitionScope$children$composable$lambda$lambda_1($elementSize$delegate, $transformedBoundingBox$delegate, $gestureExtraTouchAreaPx, $offsetCenter$delegate);
          var value_2 = tmp$ret$19;
          tmp0_cache_2.updateRememberedValue_l1colo_k$(value_2);
          tmp_11 = value_2;
        } else {
          tmp_11 = tmp0_let_2;
        }
        tmp$ret$20 = tmp_11;
        tmp$ret$21 = tmp$ret$20;
        var tmp_12 = tmp$ret$21;
        tmp$ret$22 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
        var tmp0_2 = tmp$ret$22;
        $composer_4.endReplaceableGroup_er37p7_k$();
        tmp$ret$23 = tmp0_2;
        Child$composable($this_children$composable, $element.copy$composable$default_uk62at_k$(VOID, VOID, VOID, VOID, onPlaced(tmp_10, tmp$ret$23)), $saveableStateHolder, $block, $composer_0, 14 & $$dirty | 7168 & $$dirty << 6);
        var tmp_13;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_13 = Unit_getInstance();
        }
        tmp = tmp_13;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ChildrenTransitionScope$children$composable$lambda_0($tmp0_rcvr, $this_children$composable, $block, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.children$composable_dhg18c_k$($this_children$composable, $block, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ChildrenTransitionScope(containerSize, appyxComponent, gestureExtraTouchArea, gestureValidator) {
    this.containerSize_1 = containerSize;
    this.appyxComponent_1 = appyxComponent;
    this.gestureExtraTouchArea_1 = gestureExtraTouchArea;
    this.gestureValidator_1 = gestureValidator;
    this.$stable_1 = 0;
  }
  protoOf(ChildrenTransitionScope).children_pj4jd4_k$ = function (_this__u8e3s4, block) {
    illegalDecoyCallException('children');
  };
  protoOf(ChildrenTransitionScope).elementOffset_lcncu4_k$ = function (elementSize, containerSize) {
    illegalDecoyCallException('elementOffset');
  };
  protoOf(ChildrenTransitionScope).children$composable_dhg18c_k$ = function (_this__u8e3s4, block, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-975494963);
    sourceInformation($composer_0, 'C(children$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(block) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-975494963, $dirty, -1, 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable (AppyxComponent.kt:121)');
      }
      var saveableStateHolder = rememberSaveableStateHolder$composable($composer_0, 0);
      LaunchedEffect$composable(this.appyxComponent_1, ChildrenTransitionScope$children$composable$slambda_0(this, saveableStateHolder, null), $composer_0, 0);
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      var density = tmp0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>' call
      var gestureExtraTouchAreaPx = density.toPx_u0ojv5_k$(this.gestureExtraTouchArea_1);
      var tmp = this.appyxComponent_1.get_uiModels_ipbt2f_k$();
      var uiModels$delegate = collectAsState$composable(tmp, null, $composer_0, 0, 1);
      var appyxComponent = this.appyxComponent_1;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = children$composable$lambda(uiModels$delegate).iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>' call
        var id = element.get_element_q8gf71_k$().get_id_kntnx8_k$();
        $composer_0.startMovableGroup_rpq74u_k$(1799222812, id);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_2.changed_ga7h3f_k$(id);
        // Inline function 'kotlin.let' call
        var tmp0_let = $composer_2.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>' call
          var value = mutableStateOf(Companion_getInstance_5().get_Zero_woe9zl_k$());
          $composer_2.updateRememberedValue_l1colo_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        var tmp_1 = tmp_0;
        var tmp0_0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        $composer_2.endReplaceableGroup_er37p7_k$();
        var transformedBoundingBox$delegate = tmp0_0;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_3.changed_ga7h3f_k$(id);
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = $composer_3.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>' call
          var value_0 = mutableStateOf(new IntSize(Companion_getInstance_2().get_Zero_4ip44w_k$()));
          $composer_3.updateRememberedValue_l1colo_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_1 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        $composer_3.endReplaceableGroup_er37p7_k$();
        var elementSize$delegate = tmp0_1;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_4 = $composer_0;
        $composer_4.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_4.changed_ga7h3f_k$(id);
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = $composer_4.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>' call
          var value_1 = mutableStateOf(new Offset(Companion_getInstance_6().get_Zero_sctq3f_k$()));
          $composer_4.updateRememberedValue_l1colo_k$(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = tmp0_let_1;
        }
        var tmp_5 = tmp_4;
        var tmp0_2 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        $composer_4.endReplaceableGroup_er37p7_k$();
        var offsetCenter$delegate = tmp0_2;
        var tmp_6 = element.get_visibleState_frxjc_k$();
        var isVisible$delegate = collectAsState$composable(tmp_6, null, $composer_0, 0, 1);
        element.get_persistentContainer_b48fy7_k$()($composer_0, 0);
        if (children$composable$_anonymous_$lambda$6_ylrj9e(isVisible$delegate)) {
          var tmp_7 = [get_LocalMotionProperties().provides_3e53yf_k$(element.get_motionProperties_5siqmq_k$())];
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>' call
          var tmp_8 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_8, 1075062131, true, ChildrenTransitionScope$children$composable$lambda(offsetCenter$delegate, this, elementSize$delegate, $dirty, _this__u8e3s4, element, appyxComponent, transformedBoundingBox$delegate, density, gestureExtraTouchAreaPx, saveableStateHolder, block));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_5 = $composer_0;
          $composer_5.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_2 = $composer_5.changed_ga7h3f_k$(dispatchReceiver);
          // Inline function 'kotlin.let' call
          var tmp0_let_2 = $composer_5.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_9;
          if (tmp1_cache_2 ? true : tmp0_let_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
            // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.children$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value_2 = ComposableLambda$invoke$ref(dispatchReceiver);
            $composer_5.updateRememberedValue_l1colo_k$(value_2);
            tmp_9 = value_2;
          } else {
            tmp_9 = tmp0_let_2;
          }
          var tmp_10 = tmp_9;
          var tmp0_3 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
          $composer_5.endReplaceableGroup_er37p7_k$();
          CompositionLocalProvider$composable(tmp_7, tmp0_3, $composer_0, 48);
        }
        $composer_0.endMovableGroup_kciorf_k$();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(ChildrenTransitionScope$children$composable$lambda_0(this, _this__u8e3s4, block, $changed));
    }
  };
  protoOf(ChildrenTransitionScope).elementOffset$composable_havfpl_k$ = function (elementSize, containerSize, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1080399616);
    sourceInformation($composer_0, 'C(elementOffset$composable)P(1:c#ui.unit.IntSize,0:c#ui.unit.IntSize)');
    if (isTraceInProgress()) {
      traceEventStart(-1080399616, $changed, -1, 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.elementOffset$composable (AppyxComponent.kt:214)');
    }
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'com.bumble.appyx.interactions.core.ui.property.motionPropertyRenderValue$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-805353807);
      sourceInformation($composer_1, 'CC(motionPropertyRenderValue$composable)');
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalMotionProperties();
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_2.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
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
          var tmp0_iterator = motionProperties.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
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
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_renderValueFlow_lphgg_k$();
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = null;
        break $l$block_0;
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }
      var renderValueFlow = tmp_1;
      var result$delegate = collectAsState$composable(renderValueFlow, null, $composer_1, 0, 1);
      var tmp0_0 = elementOffset$composable$lambda(result$delegate);
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0_0;
    }
    var positionAlignment = tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp1_$get_current$$composable_gn3xww = get_LocalLayoutDirection();
    var $composer_3 = $composer_0;
    sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_1 = $composer_3.consume_11nid3_k$(tmp1_$get_current$$composable_gn3xww);
    sourceInformationMarkerEnd($composer_3);
    var layoutDirection = tmp0_1;
    var tmp_2;
    if (positionAlignment == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.ChildrenTransitionScope.elementOffset$composable.<anonymous>' call
      tmp_2 = positionAlignment.align_f85h4l_k$(elementSize, containerSize, layoutDirection);
    }
    var tmp1_elvis_lhs = tmp_2;
    var tmp_3;
    var tmp_4 = tmp1_elvis_lhs;
    if ((tmp_4 == null ? null : new IntOffset(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_7().get_Zero_c6qc7y_k$();
    } else {
      tmp_3 = tmp1_elvis_lhs;
    }
    var alignmentOffset = tmp_3;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return alignmentOffset;
  };
  function AppyxComponent$composable$lambda($containerSize$delegate) {
    _init_properties_AppyxComponent_kt__paqjst();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('containerSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $containerSize$delegate.get_value_j01efc_k$().packedValue_1;
  }
  function AppyxComponent$composable$lambda_0($containerSize$delegate, value) {
    _init_properties_AppyxComponent_kt__paqjst();
    getLocalDelegateReference('containerSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $containerSize$delegate.set_value_rnwamw_k$(new IntSize(value));
  }
  function AppyxComponent$composable$lambda_1() {
    _init_properties_AppyxComponent_kt__paqjst();
    return EmptyCoroutineContext_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.invoke_locru7_k$(p0, p1, p2, p3);
    };
  }
  function AppyxComponent$composable$lambda$lambda(child, $anonymous$parameter$1$, $composer, $changed) {
    _init_properties_AppyxComponent_kt__paqjst();
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(child) ? 4 : 2);
    if (!(($dirty & 651) === 130) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-597091924, $dirty, -1, 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous> (AppyxComponent.kt:67)');
      }
      child.invoke$composable_vq47s2_k$($composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function AppyxComponent$composable$lambda_2($this_AppyxComponent$composable, $$dirty) {
    return function ($this$null, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$null) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-521103310, $dirty, -1, 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous> (AppyxComponent.kt:66)');
        }
        $this$null.children$composable_dhg18c_k$($this_AppyxComponent$composable, ComposableLambda$invoke$ref_0(composableLambdaInstance(-597091924, false, AppyxComponent$composable$lambda$lambda)), $composer_0, 14 & $$dirty | 896 & $dirty << 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function AppyxComponent$composable$lambda_3($appyxComponent, $coroutineScope, $clipToBounds) {
    return function () {
      $appyxComponent.updateContext_i1gwt4_k$(new UiContext($coroutineScope, $clipToBounds._v));
      return Unit_getInstance();
    };
  }
  function AppyxComponent$composable$lambda_4($appyxComponent, $density, $screenWidthPx, $screenHeightPx, $containerSize$delegate) {
    return function (it) {
      AppyxComponent$composable$lambda_0($containerSize$delegate, it.get_size_yscczt_k$());
      $appyxComponent.updateBounds_8j3per_k$(new TransitionBounds($density, _IntSize___get_width__impl__d9yl4o(it.get_size_yscczt_k$()), _IntSize___get_height__impl__prv63b(it.get_size_yscczt_k$()), $screenWidthPx, $screenHeightPx));
      return Unit_getInstance();
    };
  }
  function AppyxComponent$composable$lambda_5($appyxComponent) {
    return function (it) {
      var tmp;
      if (it.get_type_tjo6xw_k$() === Companion_getInstance_8().get_Release_6p7pzd_k$()) {
        $appyxComponent.onRelease_f2b7s9_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AppyxComponent$composable$lambda_6($childrenBlock, $appyxComponent, $gestureExtraTouchArea, $gestureValidator, $containerSize$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-2097015828, $changed, -1, 'com.bumble.appyx.navigation.composable.AppyxComponent$composable.<anonymous>.<anonymous> (AppyxComponent.kt:103)');
        }
        $childrenBlock(new ChildrenTransitionScope(AppyxComponent$composable$lambda($containerSize$delegate), $appyxComponent, $gestureExtraTouchArea._v.value_1, $gestureValidator._v), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function AppyxComponent$composable$lambda_7($this_AppyxComponent$composable, $appyxComponent, $modifier, $clipToBounds, $gestureValidator, $gestureExtraTouchArea, $block, $$changed, $$default) {
    return function ($composer, $force) {
      AppyxComponent$composable($this_AppyxComponent$composable, $appyxComponent, $modifier._v, $clipToBounds._v, $gestureValidator._v, $gestureExtraTouchArea._v.value_1, $block._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1455551485);
    sourceInformation($composer_0, 'C(Child$composable)P(1,2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(elementUiModel) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(saveableStateHolder) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(decorator) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1455551485, $dirty, -1, 'com.bumble.appyx.navigation.composable.Child$composable (Child.kt:18)');
      }
      var navElement = elementUiModel.get_element_q8gf71_k$();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = navElement.get_id_kntnx8_k$();
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(tmp0_remember$composable);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.composable.Child$composable.<anonymous>' call
        var value = _this__u8e3s4.childOrCreate_ienlyf_k$(navElement);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var childEntry = tmp0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.Child$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1786452345, true, Child$composable$lambda(decorator, childEntry, elementUiModel, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.composable.Child$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      saveableStateHolder.SaveableStateProvider$composable_n5yi3h_k$(navElement, tmp0_0, $composer_0, 48 | 896 & $dirty);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Child$composable$lambda_0(_this__u8e3s4, elementUiModel, saveableStateHolder, decorator, $changed));
    }
  }
  function _get_node__db0vwp($this) {
    return $this.node_1;
  }
  function _get_elementUiModel__xmovu6($this) {
    return $this.elementUiModel_1;
  }
  function ChildRendererImpl$invoke$composable$lambda(this$0, $modifier, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1023464157, $changed, -1, 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>.<anonymous> (Child.kt:44)');
        }
        this$0.node_1.Compose$composable_g1xpaf_k$($modifier, $composer_0, 14 & $$dirty, 0);
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
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ChildRendererImpl$invoke$composable$lambda_0($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.invoke$composable_hdq5lr_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ChildRendererImpl$invoke$composable$lambda_1(this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-608276698, $changed, -1, 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>.<anonymous> (Child.kt:56)');
        }
        this$0.node_1.Compose$composable_g1xpaf_k$(Companion_getInstance(), $composer_0, 6, 0);
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
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ChildRendererImpl$invoke$composable$lambda_2($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.invoke$composable_vq47s2_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ChildRendererImpl(node, elementUiModel) {
    this.node_1 = node;
    this.elementUiModel_1 = elementUiModel;
  }
  protoOf(ChildRendererImpl).invoke_imz6ii_k$ = function (modifier) {
    illegalDecoyCallException('invoke');
  };
  protoOf(ChildRendererImpl).invoke_7ro3zb_k$ = function () {
    illegalDecoyCallException('invoke');
  };
  protoOf(ChildRendererImpl).invoke$composable_hdq5lr_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(719156668);
    sourceInformation($composer_0, 'C(invoke$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(719156668, $dirty, -1, 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable (Child.kt:39)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_0 = this.elementUiModel_1.get_modifier_t1pq5c_k$();
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jk07k2_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
        tmp_0 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp_1 = [get_LocalMotionProperties().provides_3e53yf_k$(this.elementUiModel_1.get_motionProperties_5siqmq_k$())];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>.<anonymous>' call
      var tmp_2 = $composer_5;
      var dispatchReceiver = composableLambda(tmp_2, 1023464157, true, ChildRendererImpl$invoke$composable$lambda(this, modifier, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_5;
      $composer_6.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_6.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_6.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_6.updateRememberedValue_l1colo_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_6.endReplaceableGroup_er37p7_k$();
      CompositionLocalProvider$composable(tmp_1, tmp0, $composer_5, 48);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_er37p7_k$();
      $composer_3.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(ChildRendererImpl$invoke$composable$lambda_0(this, modifier, $changed));
    }
  };
  protoOf(ChildRendererImpl).invoke$composable_vq47s2_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1605605476);
    sourceInformation($composer_0, 'C(invoke$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1605605476, $dirty, -1, 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable (Child.kt:51)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier = this.elementUiModel_1.get_modifier_t1pq5c_k$();
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance();
      if (!(2 === 0))
        contentAlignment = Companion_getInstance_3().get_TopStart_o4x792_k$();
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_4().get_Constructor_f7ieep_k$();
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jk07k2_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_4().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_4().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_4().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
        tmp_0 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp_1 = [get_LocalMotionProperties().provides_3e53yf_k$(this.elementUiModel_1.get_motionProperties_5siqmq_k$())];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>.<anonymous>' call
      var tmp_2 = $composer_5;
      var dispatchReceiver = composableLambda(tmp_2, -608276698, true, ChildRendererImpl$invoke$composable$lambda_1(this));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_5;
      $composer_6.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_6.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_6.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.composable.ChildRendererImpl.invoke$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_6.updateRememberedValue_l1colo_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_6.endReplaceableGroup_er37p7_k$();
      CompositionLocalProvider$composable(tmp_1, tmp0, $composer_5, 48);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_er37p7_k$();
      $composer_3.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(ChildRendererImpl$invoke$composable$lambda_2(this, $changed));
    }
  };
  function Child$composable$lambda($decorator, $childEntry, $elementUiModel, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1786452345, $changed, -1, 'com.bumble.appyx.navigation.composable.Child$composable.<anonymous> (Child.kt:22)');
        }
        $decorator(new ChildRendererImpl($childEntry.get_node_wor8sr_k$(), $elementUiModel), $elementUiModel, $composer_0, 112 & $$dirty | 896 & $$dirty >> 3);
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Child$composable$lambda_0($this_Child$composable, $elementUiModel, $saveableStateHolder, $decorator, $$changed) {
    return function ($composer, $force) {
      Child$composable($this_Child$composable, $elementUiModel, $saveableStateHolder, $decorator, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ChildRenderer() {
  }
  function NodeFactory() {
  }
  function NodeHost$composable(lifecycle, integrationPoint, screenSize, modifier, customisations, factory, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var customisations_0 = {_v: customisations};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1970060349);
    sourceInformation($composer_0, 'C(NodeHost$composable)P(3,2,5,4)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(lifecycle) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(integrationPoint) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(screenSize) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.changed_ga7h3f_k$(customisations_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(factory) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 8) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 16) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
            // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>' call
            var value = new NodeCustomisationDirectoryImpl();
            $composer_1.updateRememberedValue_l1colo_k$(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.endReplaceableGroup_er37p7_k$();
          customisations_0._v = tmp0;
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(1970060349, $dirty, -1, 'com.bumble.appyx.navigation.integration.NodeHost$composable (NodeHost.kt:36)');
      }
      var tmp_1 = [get_LocalScreenSize().provides_3e53yf_k$(screenSize)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -755439189, true, NodeHost$composable$lambda(factory, customisations_0, integrationPoint, $dirty, modifier_0, lifecycle));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      CompositionLocalProvider$composable(tmp_1, tmp0_0, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(NodeHost$composable$lambda_0(lifecycle, integrationPoint, screenSize, modifier_0, customisations_0, factory, $changed, $default));
    }
  }
  function rememberNode$composable(factory, customisations, integrationPoint, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1436725836);
    if (isTraceInProgress()) {
      traceEventStart(1436725836, $changed, -1, 'com.bumble.appyx.navigation.integration.rememberNode$composable (NodeHost.kt:59)');
    }
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = [].slice();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_0;
    if (false ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      // Inline function 'com.bumble.appyx.navigation.integration.rememberNode$composable.<anonymous>' call
      var value = rememberNode$composable$lambda;
      $composer_1.updateRememberedValue_l1colo_k$(value);
      tmp_0 = value;
    } else {
      tmp_0 = tmp0_let;
    }
    var tmp_1 = tmp_0;
    var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    $composer_1.endReplaceableGroup_er37p7_k$();
    var tmp_2 = tmp0;
    var tmp_3 = mapSaver(tmp_2, rememberNode$composable$lambda_0(factory, customisations, integrationPoint));
    var tmp0_0 = rememberSaveable$composable(tmp, tmp_3, null, rememberNode$composable$lambda_1(factory, customisations, integrationPoint), $composer_0, 0, 4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m($node$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('node', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $node$delegate.get_value_j01efc_k$();
  }
  function rememberNode$composable$createNode($factory, $customisations, $integrationPoint, savedStateMap) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = $factory.create_6swt8h_k$(Companion_getInstance_12().root_ovvf1a_k$(savedStateMap, $customisations));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.navigation.integration.rememberNode$composable.createNode.<anonymous>' call
    tmp0_apply.set_integrationPoint_je01kl_k$($integrationPoint);
    return build(tmp0_apply);
  }
  function sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0).onStateChanged_9vyt26_k$ = function (newState, event) {
    return this.function_1(newState, event);
  };
  function _no_name_provided__qut3iv_1($node$delegate) {
    this.$node$delegate_1 = $node$delegate;
  }
  protoOf(_no_name_provided__qut3iv_1).dispose_3n44we_k$ = function () {
    // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m(this.$node$delegate_1).updateLifecycleState_xc7s69_k$(State_DESTROYED_getInstance());
  };
  function NodeHost$composable$lambda$lambda($node$delegate) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_1($node$delegate);
      return tmp$ret$0;
    };
  }
  function NodeHost$composable$lambda$lambda$lambda($node$delegate) {
    return function (newState, _anonymous_parameter_1__qggqgd) {
      NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m($node$delegate).updateLifecycleState_xc7s69_k$(newState);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_2($lifecycle, $observer) {
    this.$lifecycle_1 = $lifecycle;
    this.$observer_1 = $observer;
  }
  protoOf(_no_name_provided__qut3iv_2).dispose_3n44we_k$ = function () {
    // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.$lifecycle_1.removeObserver_qy34vt_k$(this.$observer_1);
  };
  function NodeHost$composable$lambda$lambda_0($node$delegate, $lifecycle) {
    return function ($this$DisposableEffect) {
      NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m($node$delegate).updateLifecycleState_xc7s69_k$($lifecycle.get_currentState_snihnl_k$());
      var tmp = NodeHost$composable$lambda$lambda$lambda($node$delegate);
      var observer = new sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0(tmp);
      $lifecycle.addObserver_ch8ntw_k$(observer);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_2($lifecycle, observer);
      return tmp$ret$0;
    };
  }
  function NodeHost$composable$lambda($factory, $customisations, $integrationPoint, $$dirty, $modifier, $lifecycle) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-755439189, $changed, -1, 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous> (NodeHost.kt:38)');
        }
        var node$delegate = rememberNode$composable($factory, $customisations._v, $integrationPoint, $composer_0, 14 & $$dirty >> 15 | 112 & $$dirty >> 9 | 896 & $$dirty << 3);
        var tmp_0 = NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m(node$delegate);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp1_cache = $composer_1.changed_ga7h3f_k$(node$delegate);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'com.bumble.appyx.navigation.integration.NodeHost$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = NodeHost$composable$lambda$lambda(node$delegate);
          var value = tmp$ret$0;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$4 = tmp0;
        DisposableEffect$composable(tmp_0, tmp$ret$4, $composer_0, 0);
        NodeHost$composable$_anonymous_$_anonymous_$lambda$0_ugwk3m(node$delegate).Compose$composable_g1xpaf_k$($modifier._v, $composer_0, 14 & $$dirty >> 9, 0);
        DisposableEffect$composable($lifecycle, NodeHost$composable$lambda$lambda_0(node$delegate, $lifecycle), $composer_0, 14 & $$dirty);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function NodeHost$composable$lambda_0($lifecycle, $integrationPoint, $screenSize, $modifier, $customisations, $factory, $$changed, $$default) {
    return function ($composer, $force) {
      NodeHost$composable($lifecycle, $integrationPoint, $screenSize, $modifier._v, $customisations._v, $factory, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function rememberNode$composable$lambda($this$mapSaver, node) {
    return node.saveInstanceState_8yjxr3_k$($this$mapSaver);
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
  function values_0() {
    return [WindowSizeClass_COMPACT_getInstance(), WindowSizeClass_MEDIUM_getInstance(), WindowSizeClass_EXPANDED_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'COMPACT':
        return WindowSizeClass_COMPACT_getInstance();
      case 'MEDIUM':
        return WindowSizeClass_MEDIUM_getInstance();
      case 'EXPANDED':
        return WindowSizeClass_EXPANDED_getInstance();
      default:
        WindowSizeClass_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var WindowSizeClass_entriesInitialized;
  function WindowSizeClass_initEntries() {
    if (WindowSizeClass_entriesInitialized)
      return Unit_getInstance();
    WindowSizeClass_entriesInitialized = true;
    WindowSizeClass_COMPACT_instance = new WindowSizeClass('COMPACT', 0);
    WindowSizeClass_MEDIUM_instance = new WindowSizeClass('MEDIUM', 1);
    WindowSizeClass_EXPANDED_instance = new WindowSizeClass('EXPANDED', 2);
  }
  var $ENTRIES_0;
  function WindowSizeClass(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_$stableprop_7() {
    return 0;
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
    this.widthDp_1 = widthDp;
    this.heightDp_1 = heightDp;
    var tmp = this;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(600);
    if (Dp__compareTo_impl_tlg3dl(this.widthDp_1, tmp$ret$0) < 0) {
      tmp_0 = WindowSizeClass_COMPACT_getInstance();
    } else {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(840);
      if (Dp__compareTo_impl_tlg3dl(this.widthDp_1, tmp$ret$1) < 0) {
        tmp_0 = WindowSizeClass_MEDIUM_getInstance();
      } else {
        tmp_0 = WindowSizeClass_EXPANDED_getInstance();
      }
    }
    tmp.windowSizeClass_1 = tmp_0;
    this.$stable_1 = 0;
  }
  protoOf(ScreenSize).get_widthDp_98cklg_k$ = function () {
    return this.widthDp_1;
  };
  protoOf(ScreenSize).get_heightDp_dtmrdj_k$ = function () {
    return this.heightDp_1;
  };
  protoOf(ScreenSize).get_windowSizeClass_aq7666_k$ = function () {
    return this.windowSizeClass_1;
  };
  protoOf(ScreenSize).component1_z2a8sv_k$ = function () {
    return this.widthDp_1;
  };
  protoOf(ScreenSize).component2_11tj3k_k$ = function () {
    return this.heightDp_1;
  };
  protoOf(ScreenSize).copy_6vlr75_k$ = function (widthDp, heightDp) {
    return new ScreenSize(widthDp, heightDp);
  };
  protoOf(ScreenSize).copy$default_ux1z8f_k$ = function (widthDp, heightDp, $super) {
    widthDp = widthDp === VOID ? this.widthDp_1 : widthDp;
    heightDp = heightDp === VOID ? this.heightDp_1 : heightDp;
    return $super === VOID ? this.copy_6vlr75_k$(widthDp, heightDp) : $super.copy_6vlr75_k$.call(this, new Dp(widthDp), new Dp(heightDp));
  };
  protoOf(ScreenSize).toString = function () {
    return 'ScreenSize(widthDp=' + new Dp(this.widthDp_1) + ', heightDp=' + new Dp(this.heightDp_1) + ')';
  };
  protoOf(ScreenSize).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.widthDp_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.heightDp_1) | 0;
    return result;
  };
  protoOf(ScreenSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScreenSize))
      return false;
    var tmp0_other_with_cast = other instanceof ScreenSize ? other : THROW_CCE();
    if (!equals(this.widthDp_1, tmp0_other_with_cast.widthDp_1))
      return false;
    if (!equals(this.heightDp_1, tmp0_other_with_cast.heightDp_1))
      return false;
    return true;
  };
  function LocalScreenSize$lambda() {
    _init_properties_ScreenSize_kt__gyzrhp();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    return new ScreenSize(tmp, tmp$ret$1);
  }
  var properties_initialized_ScreenSize_kt_xrizip;
  function _init_properties_ScreenSize_kt__gyzrhp() {
    if (!properties_initialized_ScreenSize_kt_xrizip) {
      properties_initialized_ScreenSize_kt_xrizip = true;
      LocalScreenSize = compositionLocalOf(VOID, LocalScreenSize$lambda);
    }
  }
  function get_$stableprop_8() {
    return 0;
  }
  function IntegrationPoint() {
    this.$stable_1 = 0;
  }
  function _get_ERROR__xk1bmf($this) {
    return $this.ERROR_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.ERROR_1 = "You're accessing an IntegrationPointStub. This means you're using a Node without ever integrating it to a proper IntegrationPoint. This is fine during tests with limited scope, but it looks like the code that leads here requires interfacing with a valid implementation. You may be attempting to access the IntegrationPoint before it is attached to the Node.";
  }
  var Companion_instance_0;
  function Companion_getInstance_10() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function IntegrationPointStub() {
    Companion_getInstance_10();
    IntegrationPoint.call(this);
    this.$stable_2 = 0;
  }
  protoOf(IntegrationPointStub).get_isChangingConfigurations_y5jk2r_k$ = function () {
    return false;
  };
  protoOf(IntegrationPointStub).handleUpNavigation_he8kje_k$ = function () {
    // Inline function 'kotlin.error' call
    Companion_getInstance_10();
    var tmp0_error = "You're accessing an IntegrationPointStub. This means you're using a Node without ever integrating it to a proper IntegrationPoint. This is fine during tests with limited scope, but it looks like the code that leads here requires interfacing with a valid implementation. You may be attempting to access the IntegrationPoint before it is attached to the Node.";
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  };
  protoOf(IntegrationPointStub).onRootFinished_leuu1u_k$ = function () {
    // Inline function 'kotlin.error' call
    Companion_getInstance_10();
    var tmp0_error = "You're accessing an IntegrationPointStub. This means you're using a Node without ever integrating it to a proper IntegrationPoint. This is fine during tests with limited scope, but it looks like the code that leads here requires interfacing with a valid implementation. You may be attempting to access the IntegrationPoint before it is attached to the Node.";
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  };
  function invoke$lambda(p0, p1, p2, $completion) {
    return new Triple(p0, p1, p2);
  }
  function ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl() {
  }
  protoOf(ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl).invoke_kn8amk_k$ = function (p0, p1, p2, $completion) {
    return invoke$lambda(p0, p1, p2, $completion);
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl).invoke_l0wd0r_k$ = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof State ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof Elements ? p2 : THROW_CCE();
    return this.invoke_kn8amk_k$(tmp, tmp_0, p3 instanceof CompareValues ? p3 : THROW_CCE(), $completion);
  };
  function ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl_0() {
    var i = new ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl();
    var l = function (p0, p1, p2, $completion) {
      return i.invoke_kn8amk_k$(p0, p1, p2, $completion);
    };
    l.$arity = 3;
    return l;
  }
  function ChildNodeLifecycleManager$launch$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda).invoke_csnqqn_k$ = function ($this$onCompletion, it, $completion) {
    var tmp = this.create_tg1dfo_k$($this$onCompletion, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_csnqqn_k$(tmp, (p2 == null ? true : p2 instanceof Error) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_iterator = this.this$0__1.children_1.get_value_j01efc_k$().get_values_ksazhn_k$().iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            setState(element, this.this$0__1, State_DESTROYED_getInstance());
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
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda).create_tg1dfo_k$ = function ($this$onCompletion, it, completion) {
    var i = new ChildNodeLifecycleManager$launch$slambda$slambda(this.this$0__1, completion);
    i.$this$onCompletion_1 = $this$onCompletion;
    i.it_1 = it;
    return i;
  };
  function ChildNodeLifecycleManager$launch$slambda$slambda_0(this$0, resultContinuation) {
    var i = new ChildNodeLifecycleManager$launch$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$onCompletion, it, $completion) {
      return i.invoke_csnqqn_k$($this$onCompletion, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ChildNodeLifecycleManager$launch$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda_1).invoke_phiz0b_k$ = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
    var tmp = this.create_nkv9hs_k$(_name_for_destructuring_parameter_0__wldtmu, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda_1).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_phiz0b_k$(p1 instanceof Triple ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var parentLifecycleState = this._name_for_destructuring_parameter_0__wldtmu_1.component1_7eebsc_k$();
          var screenState = this._name_for_destructuring_parameter_0__wldtmu_1.component2_7eebsb_k$();
          var children = this._name_for_destructuring_parameter_0__wldtmu_1.component3_7eebsa_k$();
          var tmp0_iterator = screenState.get_onScreen_75efbg_k$().iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            var childState = minOf(parentLifecycleState, State_RESUMED_getInstance());
            var tmp0_safe_receiver = children.get_current_jwi6j4_k$().get_1mhr4y_k$(element);
            if (tmp0_safe_receiver == null)
              null;
            else {
              setState(tmp0_safe_receiver, this.this$0__1, childState);
            }
          }
          var tmp0_iterator_0 = screenState.get_offScreen_vxq0b6_k$().iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            if (this.this$0__1.keepMode_1.equals(KeepMode_KEEP_getInstance())) {
              var childState_0 = minOf(parentLifecycleState, State_CREATED_getInstance());
              var tmp0_safe_receiver_0 = children.get_current_jwi6j4_k$().get_1mhr4y_k$(element_0);
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                setState(tmp0_safe_receiver_0, this.this$0__1, childState_0);
              }
            } else {
              var tmp1_safe_receiver = children.get_previous_i5svy8_k$();
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_1mhr4y_k$(element_0);
              if (tmp2_safe_receiver == null)
                null;
              else {
                setState(tmp2_safe_receiver, this.this$0__1, State_DESTROYED_getInstance());
              }
            }
          }
          if (!(children.get_previous_i5svy8_k$() == null)) {
            var removedKeys = minus(children.get_previous_i5svy8_k$().get_keys_wop4xp_k$(), children.get_current_jwi6j4_k$().get_keys_wop4xp_k$());
            var tmp0_iterator_1 = removedKeys.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_1 = tmp0_iterator_1.next_20eer_k$();
              var removedChild = children.get_previous_i5svy8_k$().get_1mhr4y_k$(element_1);
              if (removedChild == null)
                null;
              else {
                setState(removedChild, this.this$0__1, State_DESTROYED_getInstance());
              }
            }
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
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda_1).create_nkv9hs_k$ = function (_name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ChildNodeLifecycleManager$launch$slambda$slambda_1(this.this$0__1, completion);
    i._name_for_destructuring_parameter_0__wldtmu_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda$slambda_1).create_xubfvz_k$ = function (value, completion) {
    return this.create_nkv9hs_k$(value instanceof Triple ? value : THROW_CCE(), completion);
  };
  function ChildNodeLifecycleManager$launch$slambda$slambda_2(this$0, resultContinuation) {
    var i = new ChildNodeLifecycleManager$launch$slambda$slambda_1(this$0, resultContinuation);
    var l = function (_name_for_destructuring_parameter_0__wldtmu, $completion) {
      return i.invoke_phiz0b_k$(_name_for_destructuring_parameter_0__wldtmu, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_appyxComponent__eksp4i_0($this) {
    return $this.appyxComponent_1;
  }
  function _get_children__my42wc_0($this) {
    return $this.children_1;
  }
  function _get_keepMode__4o73lp_0($this) {
    return $this.keepMode_1;
  }
  function _get_coroutineScope__o75s5t_0($this) {
    return $this.coroutineScope_1;
  }
  function _get_lifecycleState__4h1go4($this) {
    return $this.lifecycleState_1;
  }
  function setState(_this__u8e3s4, $this, state) {
    var tmp0_safe_receiver = get_nodeOrNull(_this__u8e3s4);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateLifecycleState_xc7s69_k$(state);
    }
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function ChildNodeLifecycleManager$launch$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChildNodeLifecycleManager$launch$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this.this$0__1.appyxComponent_1.get_elements_vxwh8g_k$();
            var tmp_1 = withPrevious(this.this$0__1.children_1);
            var tmp_2 = combine(this.this$0__1.lifecycleState_1, tmp_0, tmp_1, ChildNodeLifecycleManager$launch$slambda$_init_$ref_3xtfdl_0());
            var tmp_3 = onCompletion(tmp_2, ChildNodeLifecycleManager$launch$slambda$slambda_0(this.this$0__1, null));
            var tmp_4 = ChildNodeLifecycleManager$launch$slambda$slambda_2(this.this$0__1, null);
            suspendResult = tmp_3.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_4), this);
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
  protoOf(ChildNodeLifecycleManager$launch$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new ChildNodeLifecycleManager$launch$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ChildNodeLifecycleManager$launch$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChildNodeLifecycleManager$launch$slambda_0(this$0, resultContinuation) {
    var i = new ChildNodeLifecycleManager$launch$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChildNodeLifecycleManager(appyxComponent, children, keepMode, coroutineScope) {
    this.appyxComponent_1 = appyxComponent;
    this.children_1 = children;
    this.keepMode_1 = keepMode;
    this.coroutineScope_1 = coroutineScope;
    this.lifecycleState_1 = MutableStateFlow(State_INITIALIZED_getInstance());
  }
  protoOf(ChildNodeLifecycleManager).propagateLifecycleToChildren_yhl4bw_k$ = function (state) {
    this.lifecycleState_1.set_value_rnwamw_k$(state);
  };
  protoOf(ChildNodeLifecycleManager).launch_9yx17m_k$ = function () {
    launch(this.coroutineScope_1, VOID, VOID, ChildNodeLifecycleManager$launch$slambda_0(this, null));
  };
  function DefaultPlatformLifecycleObserver() {
  }
  function PlatformLifecycleObserver() {
  }
  function PlatformLifecycleEventObserver() {
  }
  function CommonLifecycleOwner() {
  }
  var State_INITIALIZED_instance;
  var State_CREATED_instance;
  var State_STARTED_instance;
  var State_RESUMED_instance;
  var State_DESTROYED_instance;
  function values_1() {
    return [State_INITIALIZED_getInstance(), State_CREATED_getInstance(), State_STARTED_getInstance(), State_RESUMED_getInstance(), State_DESTROYED_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'INITIALIZED':
        return State_INITIALIZED_getInstance();
      case 'CREATED':
        return State_CREATED_getInstance();
      case 'STARTED':
        return State_STARTED_getInstance();
      case 'RESUMED':
        return State_RESUMED_getInstance();
      case 'DESTROYED':
        return State_DESTROYED_getInstance();
      default:
        State_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_INITIALIZED_instance = new State('INITIALIZED', 0);
    State_CREATED_instance = new State('CREATED', 1);
    State_STARTED_instance = new State('STARTED', 2);
    State_RESUMED_instance = new State('RESUMED', 3);
    State_DESTROYED_instance = new State('DESTROYED', 4);
  }
  var $ENTRIES_1;
  var Event_ON_CREATE_instance;
  var Event_ON_START_instance;
  var Event_ON_RESUME_instance;
  var Event_ON_PAUSE_instance;
  var Event_ON_STOP_instance;
  var Event_ON_DESTROY_instance;
  var Event_ON_ANY_instance;
  function values_2() {
    return [Event_ON_CREATE_getInstance(), Event_ON_START_getInstance(), Event_ON_RESUME_getInstance(), Event_ON_PAUSE_getInstance(), Event_ON_STOP_getInstance(), Event_ON_DESTROY_getInstance(), Event_ON_ANY_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'ON_CREATE':
        return Event_ON_CREATE_getInstance();
      case 'ON_START':
        return Event_ON_START_getInstance();
      case 'ON_RESUME':
        return Event_ON_RESUME_getInstance();
      case 'ON_PAUSE':
        return Event_ON_PAUSE_getInstance();
      case 'ON_STOP':
        return Event_ON_STOP_getInstance();
      case 'ON_DESTROY':
        return Event_ON_DESTROY_getInstance();
      case 'ON_ANY':
        return Event_ON_ANY_getInstance();
      default:
        Event_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Event_entriesInitialized;
  function Event_initEntries() {
    if (Event_entriesInitialized)
      return Unit_getInstance();
    Event_entriesInitialized = true;
    Event_ON_CREATE_instance = new Event('ON_CREATE', 0);
    Event_ON_START_instance = new Event('ON_START', 1);
    Event_ON_RESUME_instance = new Event('ON_RESUME', 2);
    Event_ON_PAUSE_instance = new Event('ON_PAUSE', 3);
    Event_ON_STOP_instance = new Event('ON_STOP', 4);
    Event_ON_DESTROY_instance = new Event('ON_DESTROY', 5);
    Event_ON_ANY_instance = new Event('ON_ANY', 6);
  }
  var $ENTRIES_2;
  function Lifecycle$asFlow$slambda$lambda($this_callbackFlow) {
    return function (state, _anonymous_parameter_1__qggqgd) {
      $this_callbackFlow.trySend_3hclq4_k$(state);
      return Unit_getInstance();
    };
  }
  function Lifecycle$asFlow$slambda$lambda_0(this$0, $observer) {
    return function () {
      this$0.removeObserver_qy34vt_k$($observer);
      return Unit_getInstance();
    };
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Event(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0_0).onStateChanged_9vyt26_k$ = function (newState, event) {
    return this.function_1(newState, event);
  };
  function Lifecycle$asFlow$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Lifecycle$asFlow$slambda).invoke_qna05v_k$ = function ($this$callbackFlow, $completion) {
    var tmp = this.create_6vyak0_k$($this$callbackFlow, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Lifecycle$asFlow$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_qna05v_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Lifecycle$asFlow$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            var tmp_1 = Lifecycle$asFlow$slambda$lambda(this.$this$callbackFlow_1);
            tmp_0.observer0__1 = new sam$com_bumble_appyx_navigation_lifecycle_PlatformLifecycleEventObserver$0_0(tmp_1);
            this.$this$callbackFlow_1.trySend_3hclq4_k$(this.this$0__1.get_currentState_snihnl_k$());
            this.this$0__1.addObserver_ch8ntw_k$(this.observer0__1);
            this.set_state_a96kl8_k$(1);
            suspendResult = awaitClose(this.$this$callbackFlow_1, Lifecycle$asFlow$slambda$lambda_0(this.this$0__1, this.observer0__1), this);
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
  protoOf(Lifecycle$asFlow$slambda).create_6vyak0_k$ = function ($this$callbackFlow, completion) {
    var i = new Lifecycle$asFlow$slambda(this.this$0__1, completion);
    i.$this$callbackFlow_1 = $this$callbackFlow;
    return i;
  };
  protoOf(Lifecycle$asFlow$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_6vyak0_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function Lifecycle$asFlow$slambda_0(this$0, resultContinuation) {
    var i = new Lifecycle$asFlow$slambda(this$0, resultContinuation);
    var l = function ($this$callbackFlow, $completion) {
      return i.invoke_qna05v_k$($this$callbackFlow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State_INITIALIZED_getInstance() {
    State_initEntries();
    return State_INITIALIZED_instance;
  }
  function State_CREATED_getInstance() {
    State_initEntries();
    return State_CREATED_instance;
  }
  function State_STARTED_getInstance() {
    State_initEntries();
    return State_STARTED_instance;
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
  function Event_ON_PAUSE_getInstance() {
    Event_initEntries();
    return Event_ON_PAUSE_instance;
  }
  function Event_ON_STOP_getInstance() {
    Event_initEntries();
    return Event_ON_STOP_instance;
  }
  function Event_ON_DESTROY_getInstance() {
    Event_initEntries();
    return Event_ON_DESTROY_instance;
  }
  function Event_ON_ANY_getInstance() {
    Event_initEntries();
    return Event_ON_ANY_instance;
  }
  function Lifecycle() {
  }
  function _get_LOG_TAG__av49aq($this) {
    return $this.LOG_TAG_1;
  }
  function _get_node__db0vwp_0($this) {
    return $this.node_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.LOG_TAG_1 = 'Lifecycle';
  }
  var Companion_instance_1;
  function Companion_getInstance_11() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function LifecycleLogger(node) {
    Companion_getInstance_11();
    this.node_1 = node;
  }
  protoOf(LifecycleLogger).onCreate_ghfmom_k$ = function () {
    var tmp = AppyxLogger_getInstance();
    Companion_getInstance_11();
    tmp.d_3t63e7_k$('Lifecycle', '' + getKClassFromExpression(this.node_1).get_simpleName_r6f8py_k$() + '@' + hashCode(this.node_1) + ' onCreate');
  };
  protoOf(LifecycleLogger).onStart_qth026_k$ = function () {
    var tmp = AppyxLogger_getInstance();
    Companion_getInstance_11();
    tmp.d_3t63e7_k$('Lifecycle', '' + getKClassFromExpression(this.node_1).get_simpleName_r6f8py_k$() + '@' + hashCode(this.node_1) + ' onStart');
  };
  protoOf(LifecycleLogger).onResume_qb8fiz_k$ = function () {
    var tmp = AppyxLogger_getInstance();
    Companion_getInstance_11();
    tmp.d_3t63e7_k$('Lifecycle', '' + getKClassFromExpression(this.node_1).get_simpleName_r6f8py_k$() + '@' + hashCode(this.node_1) + ' onResume');
  };
  protoOf(LifecycleLogger).onPause_rvjkli_k$ = function () {
    var tmp = AppyxLogger_getInstance();
    Companion_getInstance_11();
    tmp.d_3t63e7_k$('Lifecycle', '' + getKClassFromExpression(this.node_1).get_simpleName_r6f8py_k$() + '@' + hashCode(this.node_1) + ' onPause');
  };
  protoOf(LifecycleLogger).onStop_aip7ow_k$ = function () {
    var tmp = AppyxLogger_getInstance();
    Companion_getInstance_11();
    tmp.d_3t63e7_k$('Lifecycle', '' + getKClassFromExpression(this.node_1).get_simpleName_r6f8py_k$() + '@' + hashCode(this.node_1) + ' onStop');
  };
  protoOf(LifecycleLogger).onDestroy_x0zuba_k$ = function () {
    var tmp = AppyxLogger_getInstance();
    Companion_getInstance_11();
    tmp.d_3t63e7_k$('Lifecycle', '' + getKClassFromExpression(this.node_1).get_simpleName_r6f8py_k$() + '@' + hashCode(this.node_1) + ' onDestroy');
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
  function _get_registry__pststq($this) {
    return $this.registry_1;
  }
  function _get_lifecycles__5zdmzi($this) {
    return $this.lifecycles_1;
  }
  function update($this) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.minByOrNull' call
      var iterator = $this.lifecycles_1.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var minElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = minElem;
        break $l$block_0;
      }
      // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.update.<anonymous>' call
      var minValue = minElem.get_currentState_snihnl_k$();
      do {
        var e = iterator.next_20eer_k$();
        // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.update.<anonymous>' call
        var v = e.get_currentState_snihnl_k$();
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
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
      if (!tmp0_safe_receiver.get_currentState_snihnl_k$().equals(State_INITIALIZED_getInstance())) {
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
      $this.registry_1.setCurrentState_8fydcb_k$(tmp1_safe_receiver.get_currentState_snihnl_k$());
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_6tbigh_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_6tbigh_k$(a, b);
  };
  function MinimumCombinedLifecycle$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.<anonymous>' call
    var tmp = a.get_currentState_snihnl_k$();
    var tmp$ret$1;
    // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.<anonymous>' call
    tmp$ret$1 = b.get_currentState_snihnl_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function MinimumCombinedLifecycle$manage$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(MinimumCombinedLifecycle$manage$1).onCreate_ghfmom_k$ = function () {
    update(this.this$0__1);
  };
  protoOf(MinimumCombinedLifecycle$manage$1).onStart_qth026_k$ = function () {
    update(this.this$0__1);
  };
  protoOf(MinimumCombinedLifecycle$manage$1).onResume_qb8fiz_k$ = function () {
    update(this.this$0__1);
  };
  protoOf(MinimumCombinedLifecycle$manage$1).onPause_rvjkli_k$ = function () {
    update(this.this$0__1);
  };
  protoOf(MinimumCombinedLifecycle$manage$1).onStop_aip7ow_k$ = function () {
    update(this.this$0__1);
  };
  protoOf(MinimumCombinedLifecycle$manage$1).onDestroy_x0zuba_k$ = function () {
    update(this.this$0__1);
  };
  function MinimumCombinedLifecycle(lifecycles) {
    this.registry_1 = Companion_getInstance_15().create_4z1tll_k$(this);
    this.lifecycles_1 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = MinimumCombinedLifecycle$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var tmp0_iterator = sortedWith(lifecycles, tmp$ret$0).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.navigation.lifecycle.MinimumCombinedLifecycle.<anonymous>' call
      this.manage_1jr4up_k$(element);
    }
    this.lifecycle_1 = this.registry_1;
    this.lifecycleScope_1 = this.registry_1.get_coroutineScope_5k7h45_k$();
  }
  protoOf(MinimumCombinedLifecycle).get_lifecycle_3iiym9_k$ = function () {
    return this.lifecycle_1;
  };
  protoOf(MinimumCombinedLifecycle).get_lifecycleScope_8rp53n_k$ = function () {
    return this.lifecycleScope_1;
  };
  protoOf(MinimumCombinedLifecycle).manage_1jr4up_k$ = function (lifecycle) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.lifecycles_1.add_1j60pz_k$(lifecycle);
    lifecycle.addObserver_ch8ntw_k$(new MinimumCombinedLifecycle$manage$1(this));
    update(this);
  };
  function NodeLifecycle() {
  }
  function _get_lifecycleRegistry__nls87q($this) {
    return $this.lifecycleRegistry_1;
  }
  function NodeLifecycleImpl$lifecycleScope$delegate$lambda(this$0) {
    return function () {
      return this$0.lifecycleRegistry_1.get_coroutineScope_5k7h45_k$();
    };
  }
  function NodeLifecycleImpl(lifecycleOwner) {
    this.lifecycleRegistry_1 = Companion_getInstance_15().create_4z1tll_k$(lifecycleOwner);
    this.lifecycle_1 = this.lifecycleRegistry_1;
    var tmp = this;
    tmp.lifecycleScope$delegate_1 = lazy(NodeLifecycleImpl$lifecycleScope$delegate$lambda(this));
  }
  protoOf(NodeLifecycleImpl).get_lifecycle_3iiym9_k$ = function () {
    return this.lifecycle_1;
  };
  protoOf(NodeLifecycleImpl).get_lifecycleScope_8rp53n_k$ = function () {
    // Inline function 'kotlin.getValue' call
    lifecycleScope$factory();
    return this.lifecycleScope$delegate_1.get_value_j01efc_k$();
  };
  protoOf(NodeLifecycleImpl).updateLifecycleState_xc7s69_k$ = function (state) {
    this.lifecycleRegistry_1.setCurrentState_8fydcb_k$(state);
  };
  function lifecycleScope$factory() {
    return getPropertyCallableRef('lifecycleScope', 1, KProperty1, function (receiver) {
      return receiver.get_lifecycleScope_8rp53n_k$();
    }, null);
  }
  function get_isDestroyed(_this__u8e3s4) {
    return _this__u8e3s4.get_currentState_snihnl_k$().equals(State_DESTROYED_getInstance());
  }
  function get_$stableprop_10() {
    return 0;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function Root() {
    Root_instance = this;
    AncestryInfo.call(this);
    this.$stable_2 = 0;
  }
  var Root_instance;
  function Root_getInstance() {
    if (Root_instance == null)
      new Root();
    return Root_instance;
  }
  function Child(anchor) {
    AncestryInfo.call(this);
    this.anchor_1 = anchor;
    this.$stable_2 = 0;
  }
  protoOf(Child).get_anchor_b1c8n2_k$ = function () {
    return this.anchor_1;
  };
  protoOf(Child).component1_7eebsc_k$ = function () {
    return this.anchor_1;
  };
  protoOf(Child).copy_vewypa_k$ = function (anchor) {
    return new Child(anchor);
  };
  protoOf(Child).copy$default_g5d583_k$ = function (anchor, $super) {
    anchor = anchor === VOID ? this.anchor_1 : anchor;
    return $super === VOID ? this.copy_vewypa_k$(anchor) : $super.copy_vewypa_k$.call(this, anchor);
  };
  protoOf(Child).toString = function () {
    return 'Child(anchor=' + this.anchor_1 + ')';
  };
  protoOf(Child).hashCode = function () {
    return hashCode(this.anchor_1);
  };
  protoOf(Child).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Child))
      return false;
    var tmp0_other_with_cast = other instanceof Child ? other : THROW_CCE();
    if (!equals(this.anchor_1, tmp0_other_with_cast.anchor_1))
      return false;
    return true;
  };
  function get_$stableprop_12() {
    return 0;
  }
  function AncestryInfo() {
    this.$stable_1 = 0;
  }
  function _get_IDENTIFIER_KEY__w8f6gu($this) {
    return $this.IDENTIFIER_KEY_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.IDENTIFIER_KEY_1 = 'build.context.identifier';
  }
  protoOf(Companion_2).root_ovvf1a_k$ = function (savedStateMap, customisations) {
    return new BuildContext(Root_getInstance(), savedStateMap, customisations);
  };
  protoOf(Companion_2).root$default_wv8ej_k$ = function (savedStateMap, customisations, $super) {
    customisations = customisations === VOID ? new NodeCustomisationDirectoryImpl() : customisations;
    return $super === VOID ? this.root_ovvf1a_k$(savedStateMap, customisations) : $super.root_ovvf1a_k$.call(this, savedStateMap, customisations);
  };
  var Companion_instance_2;
  function Companion_getInstance_12() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_13() {
    return 0;
  }
  function BuildContext$identifier$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.savedStateMap_1 == null) {
        tmp = UUID_getInstance().randomUUID_1wutxa_k$();
      } else {
        Companion_getInstance_12();
        var tmp_0 = this$0.savedStateMap_1.get_1mhr4y_k$('build.context.identifier');
        var tmp0_elvis_lhs = (tmp_0 == null ? true : typeof tmp_0 === 'string') ? tmp_0 : THROW_CCE();
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('onSaveInstanceState() was not called');
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  function BuildContext(ancestryInfo, savedStateMap, customisations) {
    Companion_getInstance_12();
    this.ancestryInfo_1 = ancestryInfo;
    this.savedStateMap_1 = savedStateMap;
    this.customisations_1 = customisations;
    var tmp = this;
    tmp.identifier$delegate_1 = lazy(BuildContext$identifier$delegate$lambda(this));
    this.$stable_1 = 0;
  }
  protoOf(BuildContext).get_ancestryInfo_ogmf2m_k$ = function () {
    return this.ancestryInfo_1;
  };
  protoOf(BuildContext).get_savedStateMap_kmirgp_k$ = function () {
    return this.savedStateMap_1;
  };
  protoOf(BuildContext).get_customisations_bbqeny_k$ = function () {
    return this.customisations_1;
  };
  protoOf(BuildContext).get_identifier_o3acky_k$ = function () {
    // Inline function 'kotlin.getValue' call
    identifier$factory();
    return this.identifier$delegate_1.get_value_j01efc_k$();
  };
  protoOf(BuildContext).getOrDefault_5trpuj_k$ = function (defaultCustomisation) {
    return this.customisations_1.getRecursivelyOrDefault_1mcspa_k$(defaultCustomisation);
  };
  protoOf(BuildContext).onSaveInstanceState_royvtj_k$ = function (state) {
    // Inline function 'kotlin.collections.set' call
    Companion_getInstance_12();
    var tmp0_set = 'build.context.identifier';
    var tmp1_set = this.get_identifier_o3acky_k$();
    state.put_3mhbri_k$(tmp0_set, tmp1_set);
  };
  protoOf(BuildContext).component1_7eebsc_k$ = function () {
    return this.ancestryInfo_1;
  };
  protoOf(BuildContext).component2_7eebsb_k$ = function () {
    return this.savedStateMap_1;
  };
  protoOf(BuildContext).component3_7eebsa_k$ = function () {
    return this.customisations_1;
  };
  protoOf(BuildContext).copy_w3cejg_k$ = function (ancestryInfo, savedStateMap, customisations) {
    return new BuildContext(ancestryInfo, savedStateMap, customisations);
  };
  protoOf(BuildContext).copy$default_2p91xo_k$ = function (ancestryInfo, savedStateMap, customisations, $super) {
    ancestryInfo = ancestryInfo === VOID ? this.ancestryInfo_1 : ancestryInfo;
    savedStateMap = savedStateMap === VOID ? this.savedStateMap_1 : savedStateMap;
    customisations = customisations === VOID ? this.customisations_1 : customisations;
    return $super === VOID ? this.copy_w3cejg_k$(ancestryInfo, savedStateMap, customisations) : $super.copy_w3cejg_k$.call(this, ancestryInfo, savedStateMap, customisations);
  };
  protoOf(BuildContext).toString = function () {
    return 'BuildContext(ancestryInfo=' + this.ancestryInfo_1 + ', savedStateMap=' + this.savedStateMap_1 + ', customisations=' + this.customisations_1 + ')';
  };
  protoOf(BuildContext).hashCode = function () {
    var result = hashCode(this.ancestryInfo_1);
    result = imul(result, 31) + (this.savedStateMap_1 == null ? 0 : hashCode(this.savedStateMap_1)) | 0;
    result = imul(result, 31) + hashCode(this.customisations_1) | 0;
    return result;
  };
  protoOf(BuildContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BuildContext))
      return false;
    var tmp0_other_with_cast = other instanceof BuildContext ? other : THROW_CCE();
    if (!equals(this.ancestryInfo_1, tmp0_other_with_cast.ancestryInfo_1))
      return false;
    if (!equals(this.savedStateMap_1, tmp0_other_with_cast.savedStateMap_1))
      return false;
    if (!equals(this.customisations_1, tmp0_other_with_cast.customisations_1))
      return false;
    return true;
  };
  function identifier$factory() {
    return getPropertyCallableRef('identifier', 1, KProperty1, function (receiver) {
      return receiver.get_identifier_o3acky_k$();
    }, null);
  }
  function Resolver() {
  }
  function UpNavigationHandler() {
  }
  function node$composable(buildContext, composable) {
    return new ComposableNode(buildContext, composable);
  }
  function _get_composable__ptv7ku($this) {
    return $this.composable_1;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function ComposableNode$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ComposableNode(buildContext, composable) {
    illegalDecoyCallException('<init>');
  }
  protoOf(ComposableNode).View_d643kp_k$ = function (modifier) {
    illegalDecoyCallException('View');
  };
  function ComposableNode(buildContext, composable) {
    Node_init_$Init$(buildContext, VOID, VOID, this);
    this.composable_1 = composable;
    this.$stable_2 = 0;
  }
  protoOf(ComposableNode).View$composable_e844gk_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1593206340);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1593206340, $dirty, -1, 'com.bumble.appyx.navigation.node.ComposableNode.View$composable (ComposableNode.kt:14)');
      }
      this.composable_1(modifier, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(ComposableNode$View$composable$lambda(this, modifier, $changed));
    }
  };
  function get_$stableprop_15() {
    return 0;
  }
  function EmptyNodeView$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EmptyNodeView() {
    EmptyNodeView_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(EmptyNodeView).View_d643kp_k$ = function (modifier) {
    illegalDecoyCallException('View');
  };
  protoOf(EmptyNodeView).View$composable_e844gk_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1379266785);
    sourceInformation($composer_0, 'C(View$composable)');
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1379266785, $changed, -1, 'com.bumble.appyx.navigation.node.EmptyNodeView.View$composable (EmptyNodeViews.kt:8)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(EmptyNodeView$View$composable$lambda(this, modifier, $changed));
    }
  };
  var EmptyNodeView_instance;
  function EmptyNodeView_getInstance() {
    if (EmptyNodeView_instance == null)
      new EmptyNodeView();
    return EmptyNodeView_instance;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function EmptyParentNodeView$NodeView$composable$lambda($tmp0_rcvr, $this_NodeView$composable, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.NodeView$composable_ssh72e_k$($this_NodeView$composable, $modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function EmptyParentNodeView() {
    this.$stable_1 = 0;
  }
  protoOf(EmptyParentNodeView).NodeView_l9xxvb_k$ = function (_this__u8e3s4, modifier) {
    illegalDecoyCallException('NodeView');
  };
  protoOf(EmptyParentNodeView).NodeView$composable_ssh72e_k$ = function (_this__u8e3s4, modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1587885035);
    sourceInformation($composer_0, 'C(NodeView$composable)');
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1587885035, $changed, -1, 'com.bumble.appyx.navigation.node.EmptyParentNodeView.NodeView$composable (EmptyNodeViews.kt:14)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(EmptyParentNodeView$NodeView$composable$lambda(this, _this__u8e3s4, modifier, $changed));
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
  function _get_buildContext__m34ik6($this) {
    return $this.buildContext_1;
  }
  function _get_retainedInstanceStore__t662dl($this) {
    return $this.retainedInstanceStore_1;
  }
  function Node_init_$Init$(buildContext, view, plugins, $this) {
    view = view === VOID ? EmptyNodeView_getInstance() : view;
    plugins = plugins === VOID ? emptyList() : plugins;
    Node.call($this, buildContext, view, Companion_getInstance_14(), plugins);
    return $this;
  }
  function Node_init_$Create$(buildContext, view, plugins) {
    return Node_init_$Init$(buildContext, view, plugins, objectCreate(protoOf(Node)));
  }
  function _get_nodeLifecycle__qufws7($this) {
    return $this.nodeLifecycle_1;
  }
  function _set_wasBuilt__2kor4y($this, _set____db54di) {
    $this.wasBuilt_1 = _set____db54di;
  }
  function _get_wasBuilt__a87kbu($this) {
    return $this.wasBuilt_1;
  }
  function handleUpNavigationByPlugins($this) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      // Inline function 'com.bumble.appyx.navigation.plugin.plugins' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0_filterIsInstance = $this.plugins_1;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp0_filterIsInstance.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        if (!(element == null) ? isInterface(element, UpNavigationHandler_0) : false) {
          tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
        }
      }
      var tmp;
      if (isInterface(tmp0_filterIsInstanceTo, Collection)) {
        tmp = tmp0_filterIsInstanceTo.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$3 = false;
        break $l$block_0;
      }
      var tmp0_iterator_0 = tmp0_filterIsInstanceTo.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.bumble.appyx.navigation.node.Node.handleUpNavigationByPlugins.<anonymous>' call
        if (element_0.handleUpNavigation_uacklz_k$()) {
          tmp$ret$3 = true;
          break $l$block_0;
        }
      }
      tmp$ret$3 = false;
    }
    return tmp$ret$3;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function Node$lifecycleScope$delegate$lambda(this$0) {
    return function () {
      return this$0.get_lifecycle_3iiym9_k$().get_coroutineScope_5k7h45_k$();
    };
  }
  function Node$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(Node$1).onCreate_ghfmom_k$ = function () {
    if (!this.this$0__1.wasBuilt_1) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'onBuilt was not invoked for ' + this;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  };
  function Node$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Node$Compose$composable$lambda(this$0, $$dirty, $modifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-549106967, $changed, -1, 'com.bumble.appyx.navigation.node.Node.Compose$composable.<anonymous> (Node.kt:118)');
        }
        this$0.DerivedSetup$composable_6g13ru_k$($composer_0, 14 & $$dirty >> 3);
        this$0.View$composable_e844gk_k$($modifier._v, $composer_0, 14 & $$dirty | 112 & $$dirty);
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
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function Node$Compose$composable$lambda_0($tmp0_rcvr, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.Compose$composable_g1xpaf_k$($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Node$DerivedSetup$composable$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.DerivedSetup$composable_6g13ru_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Node(buildContext, view, retainedInstanceStore, plugins) {
    view = view === VOID ? EmptyNodeView_getInstance() : view;
    plugins = plugins === VOID ? emptyList() : plugins;
    this.buildContext_1 = buildContext;
    this.view_1 = view;
    this.retainedInstanceStore_1 = retainedInstanceStore;
    this.nodeLifecycle_1 = new NodeLifecycleImpl(this);
    this.wasBuilt_1 = false;
    var tmp = this;
    tmp.plugins_1 = plus_1(plugins, listOfNotNull(isInterface(this, Plugin) ? this : null));
    this.ancestryInfo_1 = this.buildContext_1.get_ancestryInfo_ogmf2m_k$();
    this.isRoot_1 = equals(this.ancestryInfo_1, Root_getInstance());
    var tmp_0 = this;
    var tmp0_subject = this.ancestryInfo_1;
    var tmp_1;
    if (tmp0_subject instanceof Child) {
      tmp_1 = this.ancestryInfo_1.get_anchor_b1c8n2_k$();
    } else {
      if (tmp0_subject instanceof Root) {
        tmp_1 = null;
      } else {
        noWhenBranchMatchedException();
      }
    }
    tmp_0.parent_1 = tmp_1;
    var tmp_2 = this;
    tmp_2.lifecycleScope$delegate_1 = lazy(Node$lifecycleScope$delegate$lambda(this));
    this.integrationPoint_1 = new IntegrationPointStub();
    if (BuildFlags_getInstance().get_DEBUG_i80x6y_k$()) {
      this.get_lifecycle_3iiym9_k$().addObserver_ch8ntw_k$(new LifecycleLogger(this));
    }
    var tmp_3 = this.get_lifecycle_3iiym9_k$();
    tmp_3.addObserver_ch8ntw_k$(new Node$1(this));
    this.$stable_1 = 0;
  }
  protoOf(Node).get_view_wow8a6_k$ = function () {
    return this.view_1;
  };
  protoOf(Node).View_d643kp_k$ = function (modifier) {
    illegalDecoyCallException('View');
  };
  protoOf(Node).get_id_kntnx8_k$ = function () {
    return this.buildContext_1.get_identifier_o3acky_k$();
  };
  protoOf(Node).get_plugins_6lmg5l_k$ = function () {
    return this.plugins_1;
  };
  protoOf(Node).get_ancestryInfo_ogmf2m_k$ = function () {
    return this.ancestryInfo_1;
  };
  protoOf(Node).get_isRoot_ew5h6d_k$ = function () {
    return this.isRoot_1;
  };
  protoOf(Node).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Node).get_lifecycle_3iiym9_k$ = function () {
    return this.nodeLifecycle_1.get_lifecycle_3iiym9_k$();
  };
  protoOf(Node).get_lifecycleScope_8rp53n_k$ = function () {
    // Inline function 'kotlin.getValue' call
    lifecycleScope$factory_0();
    return this.lifecycleScope$delegate_1.get_value_j01efc_k$();
  };
  protoOf(Node).set_integrationPoint_je01kl_k$ = function (value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.isRoot_1) {
      // Inline function 'com.bumble.appyx.navigation.node.Node.<set-integrationPoint>.<anonymous>' call
      var message = 'Only a root Node can have an integration point';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.integrationPoint_1 = value;
  };
  protoOf(Node).get_integrationPoint_pd8bmt_k$ = function () {
    var tmp;
    if (this.isRoot_1) {
      tmp = this.integrationPoint_1;
    } else {
      var tmp0_safe_receiver = this.parent_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_integrationPoint_pd8bmt_k$();
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Non-root Node should have a parent');
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Node).onBuilt_yrckfm_k$ = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.wasBuilt_1) {
      // Inline function 'com.bumble.appyx.navigation.node.Node.onBuilt.<anonymous>' call
      var message = 'onBuilt was already invoked';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.wasBuilt_1 = true;
    this.updateLifecycleState_xc7s69_k$(State_CREATED_getInstance());
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'com.bumble.appyx.navigation.plugin.plugins' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0_filterIsInstance = this.plugins_1;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filterIsInstance.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      if (!(element == null) ? isInterface(element, NodeReadyObserver) : false) {
        tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
      }
    }
    var tmp0_iterator_0 = tmp0_filterIsInstanceTo.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.bumble.appyx.navigation.node.Node.onBuilt.<anonymous>' call
      element_0.init_6xmvzm_k$(this);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'com.bumble.appyx.navigation.plugin.plugins' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0_filterIsInstance_0 = this.plugins_1;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp0_filterIsInstanceTo_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = tmp0_filterIsInstance_0.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      if (!(element_1 == null) ? isInterface(element_1, NodeLifecycleAware) : false) {
        tmp0_filterIsInstanceTo_0.add_1j60pz_k$(element_1);
      }
    }
    var tmp0_iterator_2 = tmp0_filterIsInstanceTo_0.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'com.bumble.appyx.navigation.node.Node.onBuilt.<anonymous>' call
      element_2.onCreate_ndnn5n_k$(this.get_lifecycle_3iiym9_k$());
    }
  };
  protoOf(Node).Compose_42w13g_k$ = function (modifier) {
    illegalDecoyCallException('Compose');
  };
  protoOf(Node).DerivedSetup_11tnf5_k$ = function () {
    illegalDecoyCallException('DerivedSetup');
  };
  protoOf(Node).updateLifecycleState_xc7s69_k$ = function (state) {
    if (this.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().equals(state))
      return Unit_getInstance();
    if (this.get_lifecycle_3iiym9_k$().get_currentState_snihnl_k$().equals(State_DESTROYED_getInstance()) ? !state.equals(State_DESTROYED_getInstance()) : false) {
      Appyx_getInstance().reportException_9dumbv_k$(IllegalStateException_init_$Create$('Trying to change lifecycle state of already destroyed node ' + getKClassFromExpression(this)));
      return Unit_getInstance();
    }
    this.nodeLifecycle_1.updateLifecycleState_xc7s69_k$(state);
    if (state.equals(State_DESTROYED_getInstance())) {
      if (!this.get_integrationPoint_pd8bmt_k$().get_isChangingConfigurations_y5jk2r_k$()) {
        this.retainedInstanceStore_1.clearStore_wkfjsy_k$(this.get_id_kntnx8_k$());
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'com.bumble.appyx.navigation.plugin.plugins' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0_filterIsInstance = this.plugins_1;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp0_filterIsInstance.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        if (!(element == null) ? isInterface(element, Destroyable) : false) {
          tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
        }
      }
      var tmp0_iterator_0 = tmp0_filterIsInstanceTo.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.bumble.appyx.navigation.node.Node.updateLifecycleState.<anonymous>' call
        element_0.destroy_euxju1_k$();
      }
    }
  };
  protoOf(Node).saveInstanceState_8yjxr3_k$ = function (scope) {
    var writer = new MutableSavedStateMapImpl(VOID, scope);
    this.onSaveInstanceState_royvtj_k$(writer);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0_filterIsInstance = this.plugins_1;
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filterIsInstance.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      if (!(element == null) ? isInterface(element, SavesInstanceState) : false) {
        tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
      }
    }
    var tmp0_iterator_0 = tmp0_filterIsInstanceTo.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.bumble.appyx.navigation.node.Node.saveInstanceState.<anonymous>' call
      element_0.saveInstanceState_ymawco_k$(writer);
    }
    return writer.get_savedState_52fa37_k$();
  };
  protoOf(Node).onSaveInstanceState_royvtj_k$ = function (state) {
    this.buildContext_1.onSaveInstanceState_royvtj_k$(state);
  };
  protoOf(Node).finish_mgihxe_k$ = function () {
    var tmp0_safe_receiver = this.parent_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp0_safe_receiver.onChildFinished_uzn1gh_k$(this);
      tmp = Unit_getInstance();
    }
    if (tmp == null) {
      this.get_integrationPoint_pd8bmt_k$().onRootFinished_leuu1u_k$();
    }
  };
  protoOf(Node).navigateUp_qz66w5_k$ = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(this.parent_1 == null) ? true : this.isRoot_1)) {
      // Inline function 'com.bumble.appyx.navigation.node.Node.navigateUp.<anonymous>' call
      var message = "Can't navigate up, neither parent nor integration point is presented";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_safe_receiver = this.parent_1;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.performUpNavigation_18a4gg_k$()) === true)) {
      this.get_integrationPoint_pd8bmt_k$().handleUpNavigation_he8kje_k$();
    }
  };
  protoOf(Node).performUpNavigation_18a4gg_k$ = function () {
    var tmp;
    if (handleUpNavigationByPlugins(this)) {
      tmp = true;
    } else {
      var tmp_0 = this.parent_1;
      var tmp0_safe_receiver = tmp_0 instanceof Node ? tmp_0 : null;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.performUpNavigation_18a4gg_k$()) === true;
    }
    return tmp;
  };
  protoOf(Node).View$composable_e844gk_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(603141841);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(603141841, $dirty, -1, 'com.bumble.appyx.navigation.node.Node.View$composable (Node.kt:-1)');
      }
      this.view_1.View$composable_e844gk_k$(modifier, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Node$View$composable$lambda(this, modifier, $changed));
    }
  };
  protoOf(Node).Compose$composable_g1xpaf_k$ = function (modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(964168029);
    sourceInformation($composer_0, 'C(Compose$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(964168029, $dirty, -1, 'com.bumble.appyx.navigation.node.Node.Compose$composable (Node.kt:113)');
      }
      var tmp = [get_LocalNode().provides_3e53yf_k$(this), get_LocalCommonLifecycleOwner().provides_3e53yf_k$(this)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.node.Node.Compose$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -549106967, true, Node$Compose$composable$lambda(this, $dirty, modifier_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.node.Node.Compose$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      CompositionLocalProvider$composable(tmp, tmp0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Node$Compose$composable$lambda_0(this, modifier_0, $changed, $default));
    }
  };
  protoOf(Node).DerivedSetup$composable_6g13ru_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-527311252);
    sourceInformation($composer_0, 'C(DerivedSetup$composable)');
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-527311252, $changed, -1, 'com.bumble.appyx.navigation.node.Node.DerivedSetup$composable (Node.kt:124)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Node$DerivedSetup$composable$lambda(this, $changed));
    }
  };
  function lifecycleScope$factory_0() {
    return getPropertyCallableRef('lifecycleScope', 1, KProperty1, function (receiver) {
      return receiver.get_lifecycleScope_8rp53n_k$();
    }, null);
  }
  function build(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.bumble.appyx.navigation.node.build.<anonymous>' call
    _this__u8e3s4.onBuilt_yrckfm_k$();
    return _this__u8e3s4;
  }
  function NodeView() {
  }
  function _get_childAware__a4i0bt($this) {
    return $this.childAware_1;
  }
  function _get_childNodeCreationManager__dddiat($this) {
    return $this.childNodeCreationManager_1;
  }
  function _get_childNodeLifecycleManager__7yj2kw($this) {
    return $this.childNodeLifecycleManager_1;
  }
  function BackHandler($this) {
    illegalDecoyCallException('BackHandler');
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.ATTACH_WORKFLOW_SYNC_TIMEOUT_1 = new Long(5000, 0);
  }
  protoOf(Companion_3).get_ATTACH_WORKFLOW_SYNC_TIMEOUT_li3xg4_k$ = function () {
    return this.ATTACH_WORKFLOW_SYNC_TIMEOUT_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_13() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function get_$stableprop_18() {
    return 0;
  }
  function BackHandler$composable($this, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1916264799);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1916264799, $dirty, -1, 'com.bumble.appyx.navigation.node.ParentNode.BackHandler$composable (ParentNode.kt:88)');
      }
      var tmp = $this.appyxComponent_1.canHandeBackPress_eochwq_k$();
      var canHandleBack = collectAsState$composable_0(tmp, false, null, $composer_0, 48, 2);
      var tmp_0 = canHandleBack.get_value_j01efc_k$();
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$($this);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.node.ParentNode.BackHandler$composable.<anonymous>' call
        var value = ParentNode$BackHandler$composable$lambda($this);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      PlatformBackHandler$composable(tmp_0, tmp0, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(ParentNode$BackHandler$composable$lambda_0($this, $changed));
    }
  }
  function ParentNode$DerivedSetup$composable$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.DerivedSetup$composable_6g13ru_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ParentNode$BackHandler$composable$lambda(this$0) {
    return function () {
      this$0.appyxComponent_1.handleBackPress_wbgl2k_k$();
      return Unit_getInstance();
    };
  }
  function ParentNode$BackHandler$composable$lambda_0($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      BackHandler$composable($tmp0_rcvr, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ParentNode(appyxComponent, buildContext, view, childKeepMode, childAware, plugins) {
    Companion_getInstance_13();
    view = view === VOID ? new EmptyParentNodeView() : view;
    childKeepMode = childKeepMode === VOID ? Appyx_getInstance().get_defaultChildKeepMode_i4s390_k$() : childKeepMode;
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
    this.appyxComponent_1 = appyxComponent;
    this.childAware_1 = childAware;
    this.childNodeCreationManager_1 = new ChildNodeCreationManager(buildContext.get_savedStateMap_kmirgp_k$(), buildContext.get_customisations_bbqeny_k$(), childKeepMode);
    this.childNodeLifecycleManager_1 = new ChildNodeLifecycleManager(this.appyxComponent_1, this.get_children_4cwbp4_k$(), childKeepMode, this.get_lifecycleScope_8rp53n_k$());
    this.$stable_2 = 0;
  }
  protoOf(ParentNode).get_appyxComponent_er08wq_k$ = function () {
    return this.appyxComponent_1;
  };
  protoOf(ParentNode).get_children_4cwbp4_k$ = function () {
    return this.childNodeCreationManager_1.get_children_4cwbp4_k$();
  };
  protoOf(ParentNode).onBuilt_yrckfm_k$ = function () {
    protoOf(Node).onBuilt_yrckfm_k$.call(this);
    this.childNodeCreationManager_1.launch_53dbba_k$(this);
    this.childNodeLifecycleManager_1.launch_9yx17m_k$();
  };
  protoOf(ParentNode).childOrCreate_ienlyf_k$ = function (element) {
    return this.childNodeCreationManager_1.childOrCreate_ienlyf_k$(element);
  };
  protoOf(ParentNode).updateLifecycleState_xc7s69_k$ = function (state) {
    protoOf(Node).updateLifecycleState_xc7s69_k$.call(this, state);
    this.childNodeLifecycleManager_1.propagateLifecycleToChildren_yhl4bw_k$(state);
    if (state.equals(State_DESTROYED_getInstance())) {
      this.appyxComponent_1.destroy_euxju1_k$();
    }
  };
  protoOf(ParentNode).DerivedSetup_11tnf5_k$ = function () {
    illegalDecoyCallException('DerivedSetup');
  };
  protoOf(ParentNode).performUpNavigation_18a4gg_k$ = function () {
    return this.appyxComponent_1.handleBackPress_wbgl2k_k$() ? true : protoOf(Node).performUpNavigation_18a4gg_k$.call(this);
  };
  protoOf(ParentNode).onChildFinished_uzn1gh_k$ = function (child) {
  };
  protoOf(ParentNode).onSaveInstanceState_royvtj_k$ = function (state) {
    protoOf(Node).onSaveInstanceState_royvtj_k$.call(this, state);
    this.childNodeCreationManager_1.saveChildrenState_ku378i_k$(state);
  };
  protoOf(ParentNode).whenChildAttached_homwl1_k$ = function (child, callback) {
    this.childAware_1.whenChildAttached_homwl1_k$(child, callback);
  };
  protoOf(ParentNode).whenChildrenAttached_jtt3b8_k$ = function (child1, child2, callback) {
    this.childAware_1.whenChildrenAttached_jtt3b8_k$(child1, child2, callback);
  };
  protoOf(ParentNode).DerivedSetup$composable_6g13ru_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1644974750);
    sourceInformation($composer_0, 'C(DerivedSetup$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1644974750, $dirty, -1, 'com.bumble.appyx.navigation.node.ParentNode.DerivedSetup$composable (ParentNode.kt:82)');
      }
      AppyxComponentSetup$composable(this.appyxComponent_1, $composer_0, 0);
      BackHandler$composable(this, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(ParentNode$DerivedSetup$composable$lambda(this, $changed));
    }
  };
  function ParentNodeView$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
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
  function UpNavigationHandler_0() {
  }
  function NodeAware() {
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.$$delegate_0__1 = new RetainedInstanceStoreImpl();
  }
  protoOf(Companion_4).clearStore_wkfjsy_k$ = function (storeId) {
    this.$$delegate_0__1.clearStore_wkfjsy_k$(storeId);
  };
  protoOf(Companion_4).get_5e3whn_k$ = function (storeId, key, disposer, factory) {
    return this.$$delegate_0__1.get_5e3whn_k$(storeId, key, disposer, factory);
  };
  protoOf(Companion_4).isRetained_vbrpg0_k$ = function (value) {
    return this.$$delegate_0__1.isRetained_vbrpg0_k$(value);
  };
  protoOf(Companion_4).isRetainedByStoreId_nvlf0o_k$ = function (storeId, value) {
    return this.$$delegate_0__1.isRetainedByStoreId_nvlf0o_k$(storeId, value);
  };
  var Companion_instance_4;
  function Companion_getInstance_14() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function RetainedInstanceStore$get$lambda(it) {
    return Unit_getInstance();
  }
  function RetainedInstanceStore() {
  }
  function _get_disposer__snm4mw($this) {
    return $this.disposer_1;
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function hasValue(_this__u8e3s4, $this, value) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = _this__u8e3s4.get_values_ksazhn_k$();
      var tmp;
      if (isInterface(tmp0_any, Collection)) {
        tmp = tmp0_any.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_any.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.bumble.appyx.navigation.store.RetainedInstanceStoreImpl.hasValue.<anonymous>' call
        if (element.value_1 === value) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function ValueHolder(value, disposer) {
    this.value_1 = value;
    this.disposer_1 = disposer;
  }
  protoOf(ValueHolder).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(ValueHolder).dispose_3n44we_k$ = function () {
    this.disposer_1(this.value_1);
  };
  function RetainedInstanceStoreImpl() {
    this.map_1 = HashMap_init_$Create$();
  }
  protoOf(RetainedInstanceStoreImpl).get_5e3whn_k$ = function (storeId, key, disposer, factory) {
    // Inline function 'kotlin.collections.getOrPut' call
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.map_1;
    var value = tmp0_getOrPut.get_1mhr4y_k$(storeId);
    var tmp;
    if (value == null) {
      // Inline function 'com.bumble.appyx.navigation.store.RetainedInstanceStoreImpl.get.<anonymous>' call
      var answer = HashMap_init_$Create$();
      tmp0_getOrPut.put_3mhbri_k$(storeId, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var tmp1_getOrPut = tmp;
    var value_0 = tmp1_getOrPut.get_1mhr4y_k$(key);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'com.bumble.appyx.navigation.store.RetainedInstanceStoreImpl.get.<anonymous>' call
      var answer_0 = new ValueHolder(factory(), disposer);
      tmp1_getOrPut.put_3mhbri_k$(key, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var tmp_1 = tmp_0.value_1;
    return isObject(tmp_1) ? tmp_1 : THROW_CCE();
  };
  protoOf(RetainedInstanceStoreImpl).isRetainedByStoreId_nvlf0o_k$ = function (storeId, value) {
    var tmp0_safe_receiver = this.map_1.get_1mhr4y_k$(storeId);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hasValue(tmp0_safe_receiver, this, value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(RetainedInstanceStoreImpl).isRetained_vbrpg0_k$ = function (value) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp0_any = this.map_1.get_values_ksazhn_k$();
      var tmp;
      if (isInterface(tmp0_any, Collection)) {
        tmp = tmp0_any.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_any.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.bumble.appyx.navigation.store.RetainedInstanceStoreImpl.isRetained.<anonymous>' call
        if (hasValue(element, this, value)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(RetainedInstanceStoreImpl).clearStore_wkfjsy_k$ = function (storeId) {
    var tmp0_safe_receiver = this.map_1.remove_8hbkc0_k$(storeId);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_values_ksazhn_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'com.bumble.appyx.navigation.store.RetainedInstanceStoreImpl.clearStore.<anonymous>' call
        element.dispose_3n44we_k$();
      }
    }
  };
  function get_$stableprop_19() {
    return 0;
  }
  function MainIntegrationPoint() {
    IntegrationPoint.call(this);
    this.$stable_2 = 0;
  }
  protoOf(MainIntegrationPoint).get_isChangingConfigurations_y5jk2r_k$ = function () {
    return false;
  };
  protoOf(MainIntegrationPoint).onRootFinished_leuu1u_k$ = function () {
  };
  protoOf(MainIntegrationPoint).handleUpNavigation_he8kje_k$ = function () {
  };
  function WebNodeHost$composable(screenSize, onBackPressedEvents, modifier, integrationPoint, customisations, factory, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var integrationPoint_0 = {_v: integrationPoint};
    var customisations_0 = {_v: customisations};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1022922749);
    sourceInformation($composer_0, 'C(WebNodeHost$composable)P(5,4,3,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(screenSize) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(onBackPressedEvents) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga7h3f_k$(integrationPoint_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.changed_ga7h3f_k$(customisations_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(factory) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 8) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (false ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
            // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
            var value = new MainIntegrationPoint();
            $composer_1.updateRememberedValue_l1colo_k$(value);
            tmp = value;
          } else {
            tmp = tmp0_let;
          }
          var tmp_0 = tmp;
          var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          $composer_1.endReplaceableGroup_er37p7_k$();
          integrationPoint_0._v = tmp0;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_2 = $composer_0;
          $composer_2.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (false ? true : tmp0_let_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
            // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
            var value_0 = new NodeCustomisationDirectoryImpl();
            $composer_2.updateRememberedValue_l1colo_k$(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = tmp0_let_0;
          }
          var tmp_2 = tmp_1;
          var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          $composer_2.endReplaceableGroup_er37p7_k$();
          customisations_0._v = tmp0_0;
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1022922749, $dirty, -1, 'com.bumble.appyx.navigation.integration.WebNodeHost$composable (WebNodeHost.kt:35)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = $composer_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
        var value_1 = new PlatformLifecycleRegistry();
        $composer_3.updateRememberedValue_l1colo_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = tmp0_let_1;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_3.endReplaceableGroup_er37p7_k$();
      var platformLifecycleRegistry = tmp0_1;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = $composer_4.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (false ? true : tmp0_let_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
        var value_2 = new WebNodeHost$composable$onBackPressedDispatcherOwner$1$1(integrationPoint_0);
        $composer_4.updateRememberedValue_l1colo_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = tmp0_let_2;
      }
      var tmp_6 = tmp_5;
      var tmp0_2 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      $composer_4.endReplaceableGroup_er37p7_k$();
      var onBackPressedDispatcherOwner = tmp0_2;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp5_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: null};
      var $composer_5 = tmp5_rememberCoroutineScope$composable;
      $composer_5.startReplaceableGroup_rp6air_k$(102870005);
      sourceInformation($composer_5, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = WebNodeHost$composable$lambda;
      }
      var composer = $composer_5;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_5;
      $composer_6.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = $composer_6.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp0_let_3 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        var value_3 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        $composer_6.updateRememberedValue_l1colo_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = tmp0_let_3;
      }
      var tmp_8 = tmp_7;
      var tmp0_3 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      $composer_6.endReplaceableGroup_er37p7_k$();
      var wrapper = tmp0_3;
      var tmp0_4 = wrapper.get_coroutineScope_5k7h45_k$();
      $composer_5.endReplaceableGroup_er37p7_k$();
      var scope = tmp0_4;
      LaunchedEffect$composable(onBackPressedEvents, WebNodeHost$composable$slambda_0(scope, onBackPressedEvents, onBackPressedDispatcherOwner, null), $composer_0, 14 & $dirty >> 3);
      var tmp_9 = [get_LocalOnBackPressedDispatcherOwner().provides_3e53yf_k$(onBackPressedDispatcherOwner)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>' call
      var tmp_10 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_10, -5078979, true, WebNodeHost$composable$lambda_0(platformLifecycleRegistry, integrationPoint_0, screenSize, modifier_0, customisations_0, factory, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_7 = $composer_0;
      $composer_7.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_7.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = $composer_7.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (tmp1_cache ? true : tmp0_let_4 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_8(dispatchReceiver);
        $composer_7.updateRememberedValue_l1colo_k$(value_4);
        tmp_11 = value_4;
      } else {
        tmp_11 = tmp0_let_4;
      }
      var tmp_12 = tmp_11;
      var tmp0_5 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      $composer_7.endReplaceableGroup_er37p7_k$();
      CompositionLocalProvider$composable(tmp_9, tmp0_5, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(WebNodeHost$composable$lambda_1(screenSize, onBackPressedEvents, modifier_0, integrationPoint_0, customisations_0, factory, $changed, $default));
    }
  }
  function WebNodeHost$composable$o$onBackPressedDispatcher$lambda($$integrationPoint) {
    return function () {
      $$integrationPoint._v.handleUpNavigation_he8kje_k$();
      return Unit_getInstance();
    };
  }
  function WebNodeHost$composable$onBackPressedDispatcherOwner$1$1($integrationPoint) {
    var tmp = this;
    tmp.onBackPressedDispatcher_1 = new OnBackPressedDispatcher(WebNodeHost$composable$o$onBackPressedDispatcher$lambda($integrationPoint));
  }
  protoOf(WebNodeHost$composable$onBackPressedDispatcherOwner$1$1).get_onBackPressedDispatcher_1978li_k$ = function () {
    return this.onBackPressedDispatcher_1;
  };
  function WebNodeHost$composable$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function WebNodeHost$composable$slambda$slambda$slambda($onBackPressedDispatcherOwner, resultContinuation) {
    this.$onBackPressedDispatcherOwner_1 = $onBackPressedDispatcherOwner;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebNodeHost$composable$slambda$slambda$slambda).invoke_p2pull_k$ = function (it, $completion) {
    var tmp = this.create_axmm2q_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(WebNodeHost$composable$slambda$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_p2pull_k$(p1 instanceof Unit ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebNodeHost$composable$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          this.$onBackPressedDispatcherOwner_1.get_onBackPressedDispatcher_1978li_k$().onBackPressed_xq0ia3_k$();
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
  protoOf(WebNodeHost$composable$slambda$slambda$slambda).create_axmm2q_k$ = function (it, completion) {
    var i = new WebNodeHost$composable$slambda$slambda$slambda(this.$onBackPressedDispatcherOwner_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(WebNodeHost$composable$slambda$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_axmm2q_k$(value instanceof Unit ? value : THROW_CCE(), completion);
  };
  function WebNodeHost$composable$slambda$slambda$slambda_0($onBackPressedDispatcherOwner, resultContinuation) {
    var i = new WebNodeHost$composable$slambda$slambda$slambda($onBackPressedDispatcherOwner, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_p2pull_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function WebNodeHost$composable$slambda$slambda($onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation) {
    this.$onBackPressedEvents_1 = $onBackPressedEvents;
    this.$onBackPressedDispatcherOwner_1 = $onBackPressedDispatcherOwner;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebNodeHost$composable$slambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(WebNodeHost$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebNodeHost$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = WebNodeHost$composable$slambda$slambda$slambda_0(this.$onBackPressedDispatcherOwner_1, null);
            suspendResult = this.$onBackPressedEvents_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_0), this);
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
  protoOf(WebNodeHost$composable$slambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new WebNodeHost$composable$slambda$slambda(this.$onBackPressedEvents_1, this.$onBackPressedDispatcherOwner_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(WebNodeHost$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function WebNodeHost$composable$slambda$slambda_0($onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation) {
    var i = new WebNodeHost$composable$slambda$slambda($onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function WebNodeHost$composable$slambda($scope, $onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation) {
    this.$scope_1 = $scope;
    this.$onBackPressedEvents_1 = $onBackPressedEvents;
    this.$onBackPressedDispatcherOwner_1 = $onBackPressedDispatcherOwner;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebNodeHost$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(WebNodeHost$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebNodeHost$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          launch(this.$scope_1, VOID, VOID, WebNodeHost$composable$slambda$slambda_0(this.$onBackPressedEvents_1, this.$onBackPressedDispatcherOwner_1, null));
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
  protoOf(WebNodeHost$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new WebNodeHost$composable$slambda(this.$scope_1, this.$onBackPressedEvents_1, this.$onBackPressedDispatcherOwner_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(WebNodeHost$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function WebNodeHost$composable$slambda_0($scope, $onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation) {
    var i = new WebNodeHost$composable$slambda($scope, $onBackPressedEvents, $onBackPressedDispatcherOwner, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function WebNodeHost$composable$lambda_0($platformLifecycleRegistry, $integrationPoint, $screenSize, $modifier, $customisations, $factory, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-5078979, $changed, -1, 'com.bumble.appyx.navigation.integration.WebNodeHost$composable.<anonymous> (WebNodeHost.kt:56)');
        }
        NodeHost$composable($platformLifecycleRegistry, $integrationPoint._v, $screenSize, $modifier._v, $customisations._v, $factory, $composer_0, 8 | 112 & $$dirty >> 6 | 896 & $$dirty << 6 | 7168 & $$dirty << 3 | 57344 & $$dirty | 458752 & $$dirty, 0);
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
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function WebNodeHost$composable$lambda_1($screenSize, $onBackPressedEvents, $modifier, $integrationPoint, $customisations, $factory, $$changed, $$default) {
    return function ($composer, $force) {
      WebNodeHost$composable($screenSize, $onBackPressedEvents, $modifier._v, $integrationPoint._v, $customisations._v, $factory, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function _get_cancellablesReference__mu3l9($this) {
    return $this.cancellablesReference_1;
  }
  function get_$stableprop_20() {
    return 8;
  }
  function OnBackPressedCallback(isEnabled) {
    this.isEnabled_1 = isEnabled;
    this.cancellablesReference_1 = new AtomicReference(emptyList());
    this.$stable_1 = 8;
  }
  protoOf(OnBackPressedCallback).set_isEnabled_65t46p_k$ = function (_set____db54di) {
    this.isEnabled_1 = _set____db54di;
  };
  protoOf(OnBackPressedCallback).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(OnBackPressedCallback).remove_le47v1_k$ = function () {
    var tmp0_iterator = this.cancellablesReference_1.get_26vq_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var cancellable = tmp0_iterator.next_20eer_k$();
      cancellable.cancel_2kogtl_k$();
    }
  };
  protoOf(OnBackPressedCallback).addCancellable_yxv5k0_k$ = function (cancellable) {
    this.cancellablesReference_1.set_8wdrq0_k$(plus_2(this.cancellablesReference_1.get_26vq_k$(), cancellable));
  };
  protoOf(OnBackPressedCallback).removeCancellable_y7fyil_k$ = function (cancellable) {
    this.cancellablesReference_1.set_8wdrq0_k$(minus_0(this.cancellablesReference_1.get_26vq_k$(), cancellable));
  };
  function Cancellable() {
  }
  function _get_onBackPressedCallback__kielrk($this) {
    return $this.onBackPressedCallback_1;
  }
  function _get_fallbackOnBackPressed__gh2p6x($this) {
    return $this.fallbackOnBackPressed_1;
  }
  function OnBackPressedCancellable($outer, onBackPressedCallback) {
    this.$this_1 = $outer;
    this.onBackPressedCallback_1 = onBackPressedCallback;
  }
  protoOf(OnBackPressedCancellable).cancel_2kogtl_k$ = function () {
    this.$this_1.onBackPressedCallbacks_1.remove_8hbkc6_k$(this.onBackPressedCallback_1);
    this.onBackPressedCallback_1.removeCancellable_y7fyil_k$(this);
  };
  function get_$stableprop_21() {
    return 0;
  }
  function OnBackPressedDispatcher(fallbackOnBackPressed) {
    fallbackOnBackPressed = fallbackOnBackPressed === VOID ? null : fallbackOnBackPressed;
    this.fallbackOnBackPressed_1 = fallbackOnBackPressed;
    this.onBackPressedCallbacks_1 = ArrayDeque_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(OnBackPressedDispatcher).get_onBackPressedCallbacks_ol45ej_k$ = function () {
    return this.onBackPressedCallbacks_1;
  };
  protoOf(OnBackPressedDispatcher).addCancellableCallback_8mr4wv_k$ = function (onBackPressedCallback) {
    this.onBackPressedCallbacks_1.add_1j60pz_k$(onBackPressedCallback);
    var cancellable = new OnBackPressedCancellable(this, onBackPressedCallback);
    onBackPressedCallback.addCancellable_yxv5k0_k$(cancellable);
    return cancellable;
  };
  protoOf(OnBackPressedDispatcher).onBackPressed_xq0ia3_k$ = function () {
    // Inline function 'androidx.compose.ui.util.fastForEachReversed' call
    var tmp0_fastForEachReversed = this.onBackPressedCallbacks_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = tmp0_fastForEachReversed.get_size_woubt6_k$() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = tmp0_fastForEachReversed.get_fkrdnv_k$(index);
        // Inline function 'com.bumble.appyx.navigation.platform.OnBackPressedDispatcher.onBackPressed.<anonymous>' call
        if (item.get_isEnabled_roz1ma_k$()) {
          item.handleOnBackPressed_rlpdq5_k$();
          return Unit_getInstance();
        }
      }
       while (0 <= inductionVariable);
    var tmp0_safe_receiver = this.fallbackOnBackPressed_1;
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-784315342);
    sourceInformation($composer_0, 'C(PlatformBackHandler$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(enabled) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onBack) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-784315342, $dirty, -1, 'com.bumble.appyx.navigation.platform.PlatformBackHandler$composable (PlatformBackHandler.kt:28)');
      }
      var currentOnBack$delegate = rememberUpdatedState$composable(onBack, $composer_0, 14 & $dirty >> 3);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.navigation.platform.PlatformBackHandler$composable.<anonymous>' call
        var value = new PlatformBackHandler$composable$backCallback$1$1(currentOnBack$delegate, enabled);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var backCallback = tmp0;
      SideEffect$composable(PlatformBackHandler$composable$lambda_0(backCallback, enabled), $composer_0, 0);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp1_$get_current$$composable_gn3xww = get_LocalOnBackPressedDispatcherOwner();
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_2.consume_11nid3_k$(tmp1_$get_current$$composable_gn3xww);
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
      var backDispatcher = tmp$ret$7.get_onBackPressedDispatcher_1978li_k$();
      DisposableEffect$composable(backDispatcher, PlatformBackHandler$composable$lambda_1(backDispatcher, backCallback), $composer_0, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(PlatformBackHandler$composable$lambda_2(enabled, onBack, $changed));
    }
  }
  function OnBackPressedDispatcherOwner() {
  }
  function PlatformBackHandler$composable$lambda($currentOnBack$delegate) {
    _init_properties_PlatformBackHandler_kt__6ss43m();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentOnBack', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentOnBack$delegate.get_value_j01efc_k$();
  }
  function LocalOnBackPressedDispatcherOwner$lambda() {
    _init_properties_PlatformBackHandler_kt__6ss43m();
    return new LocalOnBackPressedDispatcherOwner$1$1();
  }
  function LocalOnBackPressedDispatcherOwner$1$1() {
  }
  protoOf(LocalOnBackPressedDispatcherOwner$1$1).get_onBackPressedDispatcher_1978li_k$ = function () {
    return new OnBackPressedDispatcher(null);
  };
  function PlatformBackHandler$composable$backCallback$1$1($currentOnBack$delegate, $enabled) {
    this.$currentOnBack$delegate_1 = $currentOnBack$delegate;
    OnBackPressedCallback.call(this, $enabled);
  }
  protoOf(PlatformBackHandler$composable$backCallback$1$1).handleOnBackPressed_rlpdq5_k$ = function () {
    PlatformBackHandler$composable$lambda(this.$currentOnBack$delegate_1)();
  };
  function PlatformBackHandler$composable$lambda_0($backCallback, $enabled) {
    return function () {
      $backCallback.set_isEnabled_65t46p_k$($enabled);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_3($cancellable) {
    this.$cancellable_1 = $cancellable;
  }
  protoOf(_no_name_provided__qut3iv_3).dispose_3n44we_k$ = function () {
    // Inline function 'com.bumble.appyx.navigation.platform.PlatformBackHandler$composable.<anonymous>.<anonymous>' call
    this.$cancellable_1.cancel_2kogtl_k$();
  };
  function PlatformBackHandler$composable$lambda_1($backDispatcher, $backCallback) {
    return function ($this$DisposableEffect) {
      var cancellable = $backDispatcher.addCancellableCallback_8mr4wv_k$($backCallback);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_3(cancellable);
      return tmp$ret$0;
    };
  }
  function PlatformBackHandler$composable$lambda_2($enabled, $onBack, $$changed) {
    return function ($composer, $force) {
      PlatformBackHandler$composable($enabled, $onBack, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_PlatformBackHandler_kt_ywe50g;
  function _init_properties_PlatformBackHandler_kt__6ss43m() {
    if (!properties_initialized_PlatformBackHandler_kt_ywe50g) {
      properties_initialized_PlatformBackHandler_kt_ywe50g = true;
      LocalOnBackPressedDispatcherOwner = compositionLocalOf(VOID, LocalOnBackPressedDispatcherOwner$lambda);
    }
  }
  function _get_managedDefaultLifecycleObservers__lm5rti($this) {
    return $this.managedDefaultLifecycleObservers_1;
  }
  function _get_managedLifecycleEventObservers__sr9gub($this) {
    return $this.managedLifecycleEventObservers_1;
  }
  function _set__currentState__mzpdg2($this, _set____db54di) {
    $this._currentState_1 = _set____db54di;
  }
  function _get__currentState__wtn60q($this) {
    return $this._currentState_1;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  protoOf(Companion_5).create_4z1tll_k$ = function (owner) {
    return new PlatformLifecycleRegistry();
  };
  var Companion_instance_5;
  function Companion_getInstance_15() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_$stableprop_22() {
    return 8;
  }
  function PlatformLifecycleRegistry$coroutineScope$delegate$lambda() {
    return MainScope();
  }
  function PlatformLifecycleRegistry() {
    Companion_getInstance_15();
    this.managedDefaultLifecycleObservers_1 = ArrayList_init_$Create$();
    this.managedLifecycleEventObservers_1 = ArrayList_init_$Create$();
    this._currentState_1 = State_INITIALIZED_getInstance();
    var tmp = this;
    tmp.coroutineScope$delegate_1 = lazy(PlatformLifecycleRegistry$coroutineScope$delegate$lambda);
    this.$stable_1 = 8;
  }
  protoOf(PlatformLifecycleRegistry).set_currentState_yrkgjq_k$ = function (value) {
    switch (value.get_ordinal_ip24qg_k$()) {
      case 0:
        break;
      case 1:
        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator = this.managedDefaultLifecycleObservers_1.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element.onCreate_ghfmom_k$();
        }

        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_0 = this.managedLifecycleEventObservers_1.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_0.onStateChanged_9vyt26_k$(value, Event_ON_CREATE_getInstance());
        }

        break;
      case 2:
        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_1 = this.managedDefaultLifecycleObservers_1.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_1.onStart_qth026_k$();
        }

        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_2 = this.managedLifecycleEventObservers_1.iterator_jk1svi_k$();
        while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
          var element_2 = tmp0_iterator_2.next_20eer_k$();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_2.onStateChanged_9vyt26_k$(value, Event_ON_START_getInstance());
        }

        break;
      case 3:
        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_3 = this.managedDefaultLifecycleObservers_1.iterator_jk1svi_k$();
        while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
          var element_3 = tmp0_iterator_3.next_20eer_k$();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_3.onResume_qb8fiz_k$();
        }

        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_4 = this.managedLifecycleEventObservers_1.iterator_jk1svi_k$();
        while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
          var element_4 = tmp0_iterator_4.next_20eer_k$();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_4.onStateChanged_9vyt26_k$(value, Event_ON_RESUME_getInstance());
        }

        break;
      case 4:
        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_5 = this.managedDefaultLifecycleObservers_1.iterator_jk1svi_k$();
        while (tmp0_iterator_5.hasNext_bitz1p_k$()) {
          var element_5 = tmp0_iterator_5.next_20eer_k$();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_5.onDestroy_x0zuba_k$();
        }

        // Inline function 'kotlin.collections.forEach' call

        var tmp0_iterator_6 = this.managedLifecycleEventObservers_1.iterator_jk1svi_k$();
        while (tmp0_iterator_6.hasNext_bitz1p_k$()) {
          var element_6 = tmp0_iterator_6.next_20eer_k$();
          // Inline function 'com.bumble.appyx.navigation.platform.PlatformLifecycleRegistry.<set-currentState>.<anonymous>' call
          element_6.onStateChanged_9vyt26_k$(value, Event_ON_DESTROY_getInstance());
        }

        if (get_isActive(this.get_coroutineScope_5k7h45_k$())) {
          cancel(this.get_coroutineScope_5k7h45_k$(), 'lifecycle was destroyed');
        }

        break;
    }
    this._currentState_1 = value;
  };
  protoOf(PlatformLifecycleRegistry).get_currentState_snihnl_k$ = function () {
    return this._currentState_1;
  };
  protoOf(PlatformLifecycleRegistry).get_coroutineScope_5k7h45_k$ = function () {
    // Inline function 'kotlin.getValue' call
    coroutineScope$factory();
    return this.coroutineScope$delegate_1.get_value_j01efc_k$();
  };
  protoOf(PlatformLifecycleRegistry).addObserver_ch8ntw_k$ = function (observer) {
    if (isInterface(observer, DefaultPlatformLifecycleObserver)) {
      this.managedDefaultLifecycleObservers_1.add_1j60pz_k$(observer);
    } else {
      if (isInterface(observer, PlatformLifecycleEventObserver)) {
        this.managedLifecycleEventObservers_1.add_1j60pz_k$(observer);
      }
    }
  };
  protoOf(PlatformLifecycleRegistry).removeObserver_qy34vt_k$ = function (observer) {
    if (isInterface(observer, DefaultPlatformLifecycleObserver)) {
      this.managedDefaultLifecycleObservers_1.remove_8hbkc6_k$(observer);
    } else {
      if (isInterface(observer, PlatformLifecycleEventObserver)) {
        this.managedLifecycleEventObservers_1.remove_8hbkc6_k$(observer);
      }
    }
  };
  protoOf(PlatformLifecycleRegistry).setCurrentState_8fydcb_k$ = function (state) {
    this.set_currentState_yrkgjq_k$(state);
  };
  function coroutineScope$factory() {
    return getPropertyCallableRef('coroutineScope', 1, KProperty1, function (receiver) {
      return receiver.get_coroutineScope_5k7h45_k$();
    }, null);
  }
  //region block: post-declaration
  protoOf(ChildAwareImpl$removeWhenDestroyed$1).onCreate_ghfmom_k$ = onCreate;
  protoOf(ChildAwareImpl$removeWhenDestroyed$1).onStart_qth026_k$ = onStart;
  protoOf(ChildAwareImpl$removeWhenDestroyed$1).onResume_qb8fiz_k$ = onResume;
  protoOf(ChildAwareImpl$removeWhenDestroyed$1).onPause_rvjkli_k$ = onPause;
  protoOf(ChildAwareImpl$removeWhenDestroyed$1).onStop_aip7ow_k$ = onStop;
  protoOf(EmptyParentNodeView).View_d643kp_k$ = View;
  protoOf(EmptyParentNodeView).View$composable_e844gk_k$ = View$composable;
  protoOf(Node$1).onStart_qth026_k$ = onStart;
  protoOf(Node$1).onResume_qb8fiz_k$ = onResume;
  protoOf(Node$1).onPause_rvjkli_k$ = onPause;
  protoOf(Node$1).onStop_aip7ow_k$ = onStop;
  protoOf(Node$1).onDestroy_x0zuba_k$ = onDestroy;
  protoOf(Companion_4).get$default_ikli56_k$ = get$default;
  protoOf(RetainedInstanceStoreImpl).get$default_ikli56_k$ = get$default;
  protoOf(PlatformLifecycleRegistry).asFlow_nb7dkw_k$ = asFlow;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ChildAwareImpl;
  _.$_$.b = AppyxComponent$composable;
  _.$_$.c = get_LocalScreenSize;
  _.$_$.d = NodeFactory;
  _.$_$.e = ScreenSize;
  _.$_$.f = WebNodeHost$composable;
  _.$_$.g = EmptyParentNodeView;
  _.$_$.h = Node;
  _.$_$.i = ParentNode;
  _.$_$.j = node$composable;
  _.$_$.k = WindowSizeClass_COMPACT_getInstance;
  _.$_$.l = Node_init_$Init$;
  _.$_$.m = Appyx_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=appyx-navigation-common.js.map
