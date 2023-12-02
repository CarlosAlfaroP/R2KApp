(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-foundation.js', './compose-multiplatform-core-animation-core.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-material-ripple.js', './compose-multiplatform-core-animation.js', './compose-multiplatform-core-ui-util.js', './compose-multiplatform-core-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-foundation.js'), require('./compose-multiplatform-core-animation-core.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-material-ripple.js'), require('./compose-multiplatform-core-animation.js'), require('./compose-multiplatform-core-ui-util.js'), require('./compose-multiplatform-core-ui-text.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-material-ripple' was not found. Please, check whether 'compose-multiplatform-core-material-ripple' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-animation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-animation' was not found. Please, check whether 'compose-multiplatform-core-animation' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    root['compose-multiplatform-core-material3'] = factory(typeof this['compose-multiplatform-core-material3'] === 'undefined' ? {} : this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-animation-core'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-material-ripple'], this['compose-multiplatform-core-animation'], this['compose-multiplatform-core-ui-util'], this['compose-multiplatform-core-ui-text']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material_material_ripple, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var Long = kotlin_kotlin.$_$.rc;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.n2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var funMutableInteractionSource = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var VOID = kotlin_kotlin.$_$.d;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.a7;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var equals = kotlin_kotlin.$_$.t8;
  var protoOf = kotlin_kotlin.$_$.r9;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var isInterface = kotlin_kotlin.$_$.h9;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var lastOrNull = kotlin_kotlin.$_$.t5;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.v6;
  var defaultMinSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var rowMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.p8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var columnMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qd;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var KMutableProperty1 = kotlin_kotlin.$_$.ua;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.r5;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.t5;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.o7;
  var roundToInt = kotlin_kotlin.$_$.ba;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var DpSize__hashCode_impl_jvpgaj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.l7;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var rememberRipple$composable = kotlin_org_jetbrains_compose_material_material_ripple.$_$.c;
  var get_LocalIndication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var get_LocalRippleTheme = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var get_LocalTextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var TextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var RippleAlpha = kotlin_org_jetbrains_compose_material_material_ripple.$_$.b;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.o2;
  var selectable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var onSizeChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var animateFloatAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var WindowInsetsSides__plus_impl_9q9m59 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var only = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var animateColorAsState$composable = kotlin_org_jetbrains_compose_animation_animation.$_$.b;
  var layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.q3;
  var alpha = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var KProperty0 = kotlin_kotlin.$_$.va;
  var THROW_ISE = kotlin_kotlin.$_$.yc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.x8;
  var KMutableProperty0 = kotlin_kotlin.$_$.ta;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var windowInsetsPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var selectableGroup = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var clearAndSetSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.z5;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var indication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var Box$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var get_layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.p3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var widthIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var Spacer$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var drawWithContent = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.n5;
  var calculateStartPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var calculateEndPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f;
  var coerceAtLeast = kotlin_kotlin.$_$.ia;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var wrapContentHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var maxOf = kotlin_kotlin.$_$.l7;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var SubcomposeLayout$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var Enum = kotlin_kotlin.$_$.mc;
  var asPaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var compareTo = kotlin_kotlin.$_$.q8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var hashCode = kotlin_kotlin.$_$.c9;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a1;
  var CornerSize = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c1;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d1;
  var set_isContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.n6;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.w2;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s1;
  var BasicText$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p2;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m1;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var BasicTextField$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var collectIsFocusedAsState$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var animateDpAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var BorderStroke = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var AnnotatedString_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o1;
  var charSequenceLength = kotlin_kotlin.$_$.n8;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var updateTransition$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var createTransitionAnimation$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation.$_$.a;
  var LayoutIdParentData = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var lerp_1 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j1;
  var error = kotlin_org_jetbrains_compose_ui_ui.$_$.g6;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g2;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j2;
  var Companion_getInstance_18 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v2;
  var get_systemBars = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ButtonColors, 'ButtonColors', classMeta);
  setMetadataFor(ButtonElevation$animateElevation$composable$slambda$slambda, 'ButtonElevation$animateElevation$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(ButtonElevation$animateElevation$composable$slambda, 'ButtonElevation$animateElevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ButtonElevation$animateElevation$composable$slambda_1, 'ButtonElevation$animateElevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ButtonElevation$animateElevation$composable$slambda_3, 'ButtonElevation$animateElevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ButtonElevation, 'ButtonElevation', classMeta);
  setMetadataFor(ButtonDefaults, 'ButtonDefaults', objectMeta);
  setMetadataFor(CardColors, 'CardColors', classMeta);
  setMetadataFor(CardElevation$animateElevation$composable$slambda$slambda, 'CardElevation$animateElevation$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(CardElevation$animateElevation$composable$slambda, 'CardElevation$animateElevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(CardElevation$animateElevation$composable$slambda_1, 'CardElevation$animateElevation$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(CardElevation, 'CardElevation', classMeta);
  setMetadataFor(CardDefaults, 'CardDefaults', objectMeta);
  setMetadataFor(ColorScheme, 'ColorScheme', classMeta);
  setMetadataFor(ElevationDefaults, 'ElevationDefaults', objectMeta);
  setMetadataFor($animateElevationCOROUTINE$0, '$animateElevationCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(MinimumInteractiveComponentSizeModifier, 'MinimumInteractiveComponentSizeModifier', classMeta, VOID, [LayoutModifier]);
  setMetadataFor(MappedInteractionSource$interactions$o$collect$slambda, 'MappedInteractionSource$interactions$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$1, '$collectCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MappedInteractionSource, 'MappedInteractionSource', classMeta);
  setMetadataFor(MaterialTheme, 'MaterialTheme', objectMeta);
  setMetadataFor(MaterialRippleTheme, 'MaterialRippleTheme', objectMeta);
  setMetadataFor(NavigationBarDefaults, 'NavigationBarDefaults', objectMeta);
  setMetadataFor(NavigationBarItemColors, 'NavigationBarItemColors', classMeta);
  setMetadataFor(NavigationBarItemDefaults, 'NavigationBarItemDefaults', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(NavigationRailDefaults, 'NavigationRailDefaults', objectMeta);
  setMetadataFor(NavigationRailItemColors, 'NavigationRailItemColors', classMeta);
  setMetadataFor(NavigationRailItemDefaults, 'NavigationRailItemDefaults', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0_0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(OutlinedTextFieldMeasurePolicy, 'OutlinedTextFieldMeasurePolicy', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(FabPlacement, 'FabPlacement', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(FabPosition, 'FabPosition', classMeta);
  setMetadataFor(ComposableSingletons$ScaffoldKt, 'ComposableSingletons$ScaffoldKt', objectMeta);
  setMetadataFor(ScaffoldDefaults, 'ScaffoldDefaults', objectMeta);
  setMetadataFor(ScaffoldLayoutContent, 'ScaffoldLayoutContent', classMeta, Enum);
  setMetadataFor(Shapes, 'Shapes', classMeta, VOID, VOID, Shapes);
  setMetadataFor(ShapeDefaults, 'ShapeDefaults', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Surface$composable$lambda$slambda, 'Surface$composable$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(TextFieldMeasurePolicy, 'TextFieldMeasurePolicy', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(TextFieldColors, 'TextFieldColors', classMeta);
  setMetadataFor(TextFieldDefaults, 'TextFieldDefaults', objectMeta);
  setMetadataFor(TextFieldType, 'TextFieldType', classMeta, Enum);
  setMetadataFor(InputPhase, 'InputPhase', classMeta, Enum);
  setMetadataFor(TextFieldTransitionScope, 'TextFieldTransitionScope', objectMeta);
  setMetadataFor(Typography, 'Typography', classMeta, VOID, VOID, Typography);
  setMetadataFor(ColorDarkTokens, 'ColorDarkTokens', objectMeta);
  setMetadataFor(ColorLightTokens, 'ColorLightTokens', objectMeta);
  setMetadataFor(ColorSchemeKeyTokens, 'ColorSchemeKeyTokens', classMeta, Enum);
  setMetadataFor(ElevationTokens, 'ElevationTokens', objectMeta);
  setMetadataFor(FilledButtonTokens, 'FilledButtonTokens', objectMeta);
  setMetadataFor(FilledCardTokens, 'FilledCardTokens', objectMeta);
  setMetadataFor(FilledTextFieldTokens, 'FilledTextFieldTokens', objectMeta);
  setMetadataFor(NavigationBarTokens, 'NavigationBarTokens', objectMeta);
  setMetadataFor(NavigationRailTokens, 'NavigationRailTokens', objectMeta);
  setMetadataFor(PaletteTokens, 'PaletteTokens', objectMeta);
  setMetadataFor(ShapeKeyTokens, 'ShapeKeyTokens', classMeta, Enum);
  setMetadataFor(ShapeTokens, 'ShapeTokens', objectMeta);
  setMetadataFor(StateTokens, 'StateTokens', objectMeta);
  setMetadataFor(TextButtonTokens, 'TextButtonTokens', objectMeta);
  setMetadataFor(TypeScaleTokens, 'TypeScaleTokens', objectMeta);
  setMetadataFor(TypefaceTokens, 'TypefaceTokens', objectMeta);
  setMetadataFor(TypographyKeyTokens, 'TypographyKeyTokens', classMeta, Enum);
  setMetadataFor(TypographyTokens, 'TypographyTokens', objectMeta);
  //endregion
  function Button$composable(onClick, modifier, enabled, shape, colors, elevation, border, contentPadding, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var elevation_0 = {_v: elevation};
    var border_0 = {_v: border};
    var contentPadding_0 = {_v: contentPadding};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-338231550);
    sourceInformation($composer_0, 'C(Button$composable)P(8,7,5,9,1,4!1,3,6)108@5507L5,109@5556L14,110@5621L17,113@5791L39,116@5913L23,117@5973L21,122@6269L22,120@6195L1045:Button.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1z(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.u1z(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.t1z(shape_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.t1z(colors_0._v) : false) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.t1z(elevation_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.t1z(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.t1z(contentPadding_0._v) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.t1z(interactionSource_0._v) : false) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = ButtonDefaults_getInstance().nfc($composer_0, 6);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          var tmp = ButtonDefaults_getInstance();
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp.ofc(tmp_0, tmp_1, tmp_2, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 24576, 15);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          var tmp_3 = ButtonDefaults_getInstance();
          var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_6 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_7 = _Dp___init__impl__ms3zkb(0.0);
          elevation_0._v = tmp_3.pfc(tmp_4, tmp_5, tmp_6, tmp_7, _Dp___init__impl__ms3zkb(0.0), $composer_0, 196608, 31);
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().bfc_1;
        }
        if (!(($default & 256) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.f1x(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp_8;
          if (false ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.Button$composable.<anonymous>' call
            var value = funMutableInteractionSource();
            $composer_1.s1z(value);
            tmp_8 = value;
          } else {
            tmp_8 = it;
          }
          var tmp_9 = tmp_8;
          var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
          $composer_1.h1x();
          interactionSource_0._v = tmp0;
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-338231550, $dirty, -1, 'androidx.compose.material3.Button$composable (Button.kt:104)');
      }
      var containerColor = colors_0._v.vfc(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 9).u2().p41_1;
      var contentColor = colors_0._v.wfc(enabled_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 9).u2().p41_1;
      var tmp0_safe_receiver = elevation_0._v;
      $composer_0.f1x(1669279962);
      sourceInformation($composer_0, '118@6038L43');
      var tmp0_group = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dfd(enabled_0._v, interactionSource_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 21 | 896 & $dirty >> 9);
      $composer_0.h1x();
      var tmp_10;
      if (tmp0_group == null) {
        tmp_10 = null;
      } else {
        var tmp_11 = tmp0_group.u2();
        tmp_10 = tmp_11 == null ? null : tmp_11.z3b_1;
      }
      var tmp2_elvis_lhs = tmp_10;
      var tmp_12;
      var tmp_13 = tmp2_elvis_lhs;
      if ((tmp_13 == null ? null : new Dp(tmp_13)) == null) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_12 = _Dp___init__impl__ms3zkb(0);
      } else {
        tmp_12 = tmp2_elvis_lhs;
      }
      var shadowElevation = tmp_12;
      var tmp3_safe_receiver = elevation_0._v;
      $composer_0.f1x(1669280057);
      sourceInformation($composer_0, '119@6133L42');
      var tmp1_group = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.efd(enabled_0._v, interactionSource_0._v, $composer_0, 14 & $dirty >> 6 | 112 & $dirty >> 21 | 896 & $dirty >> 9);
      $composer_0.h1x();
      var tmp_14;
      if (tmp1_group == null) {
        tmp_14 = null;
      } else {
        var tmp_15 = tmp1_group.u2();
        tmp_14 = tmp_15 == null ? null : tmp_15.z3b_1;
      }
      var tmp5_elvis_lhs = tmp_14;
      var tmp_16;
      var tmp_17 = tmp5_elvis_lhs;
      if ((tmp_17 == null ? null : new Dp(tmp_17)) == null) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_16 = _Dp___init__impl__ms3zkb(0);
      } else {
        tmp_16 = tmp5_elvis_lhs;
      }
      var tonalElevation = tmp_16;
      var tmp_18 = modifier_0._v;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.f1x(547886695);
      sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.r1z();
      var tmp_19;
      if (false ? true : it_0 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.Button$composable.<anonymous>' call
        var value_0 = Button$composable$lambda;
        $composer_2.s1z(value_0);
        tmp_19 = value_0;
      } else {
        tmp_19 = it_0;
      }
      var tmp_20 = tmp_19;
      var tmp0_0 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      $composer_2.h1x();
      var tmp_21 = semantics(tmp_18, VOID, tmp0_0);
      var tmp_22 = enabled_0._v;
      var tmp_23 = shape_0._v;
      var tmp_24 = border_0._v;
      var tmp_25 = interactionSource_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.Button$composable.<anonymous>' call
      var tmp_26 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_26, 956488494, true, Button$composable$lambda_0(contentColor, contentPadding_0, $dirty, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.f1x(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_3.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_3.r1z();
      var tmp_27;
      if (invalid ? true : it_1 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.Button$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_3.s1z(value_1);
        tmp_27 = value_1;
      } else {
        tmp_27 = it_1;
      }
      var tmp_28 = tmp_27;
      var tmp0_1 = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      $composer_3.h1x();
      Surface$composable(onClick, tmp_21, tmp_22, tmp_23, containerColor, contentColor, tonalElevation, shadowElevation, tmp_24, tmp_25, tmp0_1, $composer_0, 14 & $dirty | 896 & $dirty | 7168 & $dirty | 234881024 & $dirty << 6 | 1879048192 & $dirty << 3, 6, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    var tmp2_safe_receiver = $composer_0.d1z();
    if (tmp2_safe_receiver === null)
      null;
    else {
      tmp2_safe_receiver.w2e(Button$composable$lambda_1(onClick, modifier_0, enabled_0, shape_0, colors_0, elevation_0, border_0, contentPadding_0, interactionSource_0, content, $changed, $default));
    }
  }
  function TextButton$composable(onClick, modifier, enabled, shape, colors, elevation, border, contentPadding, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var elevation_0 = {_v: elevation};
    var border_0 = {_v: border};
    var contentPadding_0 = {_v: contentPadding};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(959254421);
    sourceInformation($composer_0, 'C(TextButton$composable)P(8,7,5,9,1,4!1,3,6)409@20955L9,410@21008L18,414@21229L39,417@21323L314:Button.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1z(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.u1z(enabled_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.t1z(shape_0._v) : false) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.t1z(colors_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.t1z(elevation_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.t1z(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.t1z(contentPadding_0._v) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.t1z(interactionSource_0._v) : false) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = ButtonDefaults_getInstance().ffd($composer_0, 6);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          var tmp = ButtonDefaults_getInstance();
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp.gfd(tmp_0, tmp_1, tmp_2, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 24576, 15);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          elevation_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().ffc_1;
        }
        if (!(($default & 256) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.f1x(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp_3;
          if (false ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.TextButton$composable.<anonymous>' call
            var value = funMutableInteractionSource();
            $composer_1.s1z(value);
            tmp_3 = value;
          } else {
            tmp_3 = it;
          }
          var tmp_4 = tmp_3;
          var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_1.h1x();
          interactionSource_0._v = tmp0;
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(959254421, $dirty, -1, 'androidx.compose.material3.TextButton$composable (Button.kt:405)');
      }
      Button$composable(onClick, modifier_0._v, enabled_0._v, shape_0._v, colors_0._v, elevation_0._v, border_0._v, contentPadding_0._v, interactionSource_0._v, content, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty | 29360128 & $dirty | 234881024 & $dirty | 1879048192 & $dirty, 0);
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
      tmp0_safe_receiver.w2e(TextButton$composable$lambda(onClick, modifier_0, enabled_0, shape_0, colors_0, elevation_0, border_0, contentPadding_0, interactionSource_0, content, $changed, $default));
    }
  }
  function ButtonColors(containerColor, contentColor, disabledContainerColor, disabledContentColor) {
    this.qfc_1 = containerColor;
    this.rfc_1 = contentColor;
    this.sfc_1 = disabledContainerColor;
    this.tfc_1 = disabledContentColor;
    this.ufc_1 = 0;
  }
  protoOf(ButtonColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof ButtonColors);
    }
    if (tmp)
      return false;
    if (!equals(this.qfc_1, other.qfc_1))
      return false;
    if (!equals(this.rfc_1, other.rfc_1))
      return false;
    if (!equals(this.sfc_1, other.sfc_1))
      return false;
    if (!equals(this.tfc_1, other.tfc_1))
      return false;
    return true;
  };
  protoOf(ButtonColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.qfc_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.rfc_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.sfc_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.tfc_1) | 0;
    return result;
  };
  protoOf(ButtonColors).vfc = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-121061459);
    sourceInformation($composer_0, 'C(containerColor$composable)923@43315L77:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-121061459, $changed, -1, 'androidx.compose.material3.ButtonColors.containerColor$composable (Button.kt:922)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.qfc_1 : this.sfc_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(ButtonColors).wfc = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-426502411);
    sourceInformation($composer_0, 'C(contentColor$composable)933@43647L73:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-426502411, $changed, -1, 'androidx.compose.material3.ButtonColors.contentColor$composable (Button.kt:932)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.rfc_1 : this.tfc_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  function ButtonElevation$animateElevation$composable$slambda$slambda($interactions, resultContinuation) {
    this.pfd_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$composable$slambda$slambda).fa3 = function (interaction, $completion) {
    var tmp = this.ga3(interaction, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ButtonElevation$animateElevation$composable$slambda$slambda).fc = function (p1, $completion) {
    return this.fa3((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$composable$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          var tmp0_subject = this.qfd_1;
          if (tmp0_subject instanceof Enter) {
            this.pfd_1.c29(this.qfd_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.pfd_1.d2r(this.qfd_1.nb9_1);
            } else {
              if (tmp0_subject instanceof Focus) {
                this.pfd_1.c29(this.qfd_1);
              } else {
                if (tmp0_subject instanceof Unfocus) {
                  this.pfd_1.d2r(this.qfd_1.mb8_1);
                } else {
                  if (tmp0_subject instanceof Press) {
                    this.pfd_1.c29(this.qfd_1);
                  } else {
                    if (tmp0_subject instanceof Release) {
                      this.pfd_1.d2r(this.qfd_1.qba_1);
                    } else {
                      if (tmp0_subject instanceof Cancel) {
                        this.pfd_1.d2r(this.qfd_1.sba_1);
                      }
                    }
                  }
                }
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
  protoOf(ButtonElevation$animateElevation$composable$slambda$slambda).ga3 = function (interaction, completion) {
    var i = new ButtonElevation$animateElevation$composable$slambda$slambda(this.pfd_1, completion);
    i.qfd_1 = interaction;
    return i;
  };
  function ButtonElevation$animateElevation$composable$slambda$slambda_0($interactions, resultContinuation) {
    var i = new ButtonElevation$animateElevation$composable$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $completion) {
      return i.fa3(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateElevation$composable($this, enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1578600982);
    sourceInformation($composer_0, 'C(animateElevation$composable)812@39093L46,813@39182L1077,813@39148L1111,855@40756L51:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1578600982, $changed, -1, 'androidx.compose.material3.ButtonElevation.animateElevation$composable (Button.kt:808)');
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
    if (false ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation$composable.<anonymous>' call
      var value = mutableStateListOf();
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    var interactions = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.f1x(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_2.t1z(interactionSource) | $composer_2.t1z(interactions));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_2.r1z();
    var tmp_1;
    if (invalid ? true : it_0 === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation$composable.<anonymous>' call
      var value_0 = ButtonElevation$animateElevation$composable$slambda_0(interactionSource, interactions, null);
      $composer_2.s1z(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_2.h1x();
    LaunchedEffect$composable(interactionSource, tmp0_0, $composer_0, 14 & $changed >> 3);
    var interaction = lastOrNull(interactions);
    var tmp_3;
    if (!enabled) {
      tmp_3 = $this.bfd_1;
    } else {
      var tmp_4;
      if (interaction instanceof Press) {
        tmp_4 = $this.yfc_1;
      } else {
        if (interaction instanceof Enter) {
          tmp_4 = $this.afd_1;
        } else {
          if (interaction instanceof Focus) {
            tmp_4 = $this.zfc_1;
          } else {
            tmp_4 = $this.xfc_1;
          }
        }
      }
      tmp_3 = tmp_4;
    }
    var target = tmp_3;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.f1x(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_3.r1z();
    var tmp_5;
    if (false ? true : it_1 === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation$composable.<anonymous>' call
      var value_1 = new Animatable(new Dp(target), get_VectorConverter(Companion_getInstance_0()));
      $composer_3.s1z(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = it_1;
    }
    var tmp_6 = tmp_5;
    var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_3.h1x();
    var animatable = tmp0_1;
    if (!enabled) {
      $composer_0.f1x(51109136);
      sourceInformation($composer_0, '859@40929L29,859@40906L52');
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key2 = new Dp(target);
      var $composer_4 = $composer_0;
      $composer_4.f1x(-1124426577);
      sourceInformation($composer_4, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!($composer_4.t1z(animatable) | $composer_4.t1z(key2));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_4.r1z();
      var tmp_7;
      if (invalid_0 ? true : it_2 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation$composable.<anonymous>' call
        var value_2 = ButtonElevation$animateElevation$composable$slambda_2(animatable, target, null);
        $composer_4.s1z(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_2 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_4.h1x();
      LaunchedEffect$composable(new Dp(target), tmp0_2, $composer_0, 0);
      $composer_0.h1x();
    } else {
      $composer_0.f1x(51109279);
      sourceInformation($composer_0, '861@40988L546');
      LaunchedEffect$composable(new Dp(target), ButtonElevation$animateElevation$composable$slambda_4(animatable, $this, target, interaction, null), $composer_0, 0);
      $composer_0.h1x();
    }
    var tmp0_3 = animatable.e8p();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_3;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.rfd_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).t13 = function (value, $completion) {
    return this.rfd_1(value, $completion);
  };
  function ButtonElevation$animateElevation$composable$slambda($interactionSource, $interactions, resultContinuation) {
    this.afe_1 = $interactionSource;
    this.bfe_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ButtonElevation$animateElevation$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = this.afe_1.oa2();
            var tmp_1 = ButtonElevation$animateElevation$composable$slambda$slambda_0(this.bfe_1, null);
            suspendResult = tmp_0.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(ButtonElevation$animateElevation$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new ButtonElevation$animateElevation$composable$slambda(this.afe_1, this.bfe_1, completion);
    i.cfe_1 = $this$LaunchedEffect;
    return i;
  };
  function ButtonElevation$animateElevation$composable$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new ButtonElevation$animateElevation$composable$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ButtonElevation$animateElevation$composable$slambda_1($animatable, $target, resultContinuation) {
    this.lfe_1 = $animatable;
    this.mfe_1 = $target;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$composable$slambda_1).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ButtonElevation$animateElevation$composable$slambda_1).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$composable$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.lfe_1.d8p(new Dp(this.mfe_1), this);
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
  protoOf(ButtonElevation$animateElevation$composable$slambda_1).w1b = function ($this$LaunchedEffect, completion) {
    var i = new ButtonElevation$animateElevation$composable$slambda_1(this.lfe_1, this.mfe_1, completion);
    i.nfe_1 = $this$LaunchedEffect;
    return i;
  };
  function ButtonElevation$animateElevation$composable$slambda_2($animatable, $target, resultContinuation) {
    var i = new ButtonElevation$animateElevation$composable$slambda_1($animatable, $target, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ButtonElevation$animateElevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation) {
    this.wfe_1 = $animatable;
    this.xfe_1 = this$0;
    this.yfe_1 = $target;
    this.zfe_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$composable$slambda_3).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ButtonElevation$animateElevation$composable$slambda_3).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$composable$slambda_3).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            var tmp0_subject = this.wfe_1.m8o().z3b_1;
            tmp_0.bff_1 = equals(tmp0_subject, this.xfe_1.yfc_1) ? new Press(Companion_getInstance_1().z38_1) : equals(tmp0_subject, this.xfe_1.afd_1) ? new Enter() : equals(tmp0_subject, this.xfe_1.zfc_1) ? new Focus() : null;
            this.hb_1 = 1;
            suspendResult = animateElevation(this.wfe_1, this.yfe_1, this.bff_1, this.zfe_1, this);
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
  protoOf(ButtonElevation$animateElevation$composable$slambda_3).w1b = function ($this$LaunchedEffect, completion) {
    var i = new ButtonElevation$animateElevation$composable$slambda_3(this.wfe_1, this.xfe_1, this.yfe_1, this.zfe_1, completion);
    i.aff_1 = $this$LaunchedEffect;
    return i;
  };
  function ButtonElevation$animateElevation$composable$slambda_4($animatable, this$0, $target, $interaction, resultContinuation) {
    var i = new ButtonElevation$animateElevation$composable$slambda_3($animatable, this$0, $target, $interaction, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ButtonElevation(defaultElevation, pressedElevation, focusedElevation, hoveredElevation, disabledElevation) {
    this.xfc_1 = defaultElevation;
    this.yfc_1 = pressedElevation;
    this.zfc_1 = focusedElevation;
    this.afd_1 = hoveredElevation;
    this.bfd_1 = disabledElevation;
    this.cfd_1 = 0;
  }
  protoOf(ButtonElevation).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof ButtonElevation);
    }
    if (tmp)
      return false;
    if (!equals(this.xfc_1, other.xfc_1))
      return false;
    if (!equals(this.yfc_1, other.yfc_1))
      return false;
    if (!equals(this.zfc_1, other.zfc_1))
      return false;
    if (!equals(this.afd_1, other.afd_1))
      return false;
    if (!equals(this.bfd_1, other.bfd_1))
      return false;
    return true;
  };
  protoOf(ButtonElevation).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.xfc_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.yfc_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.zfc_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.afd_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.bfd_1) | 0;
    return result;
  };
  protoOf(ButtonElevation).efd = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(989394611);
    sourceInformation($composer_0, 'C(tonalElevation$composable)785@38071L74:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(989394611, $changed, -1, 'androidx.compose.material3.ButtonElevation.tonalElevation$composable (Button.kt:784)');
    }
    var tmp0 = animateElevation$composable(this, enabled, interactionSource, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(ButtonElevation).dfd = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1723237215);
    sourceInformation($composer_0, 'C(shadowElevation$composable)804@38844L74:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1723237215, $changed, -1, 'androidx.compose.material3.ButtonElevation.shadowElevation$composable (Button.kt:800)');
    }
    var tmp0 = animateElevation$composable(this, enabled, interactionSource, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  function ButtonDefaults() {
    ButtonDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.zfb_1 = _Dp___init__impl__ms3zkb(24);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.afc_1 = _Dp___init__impl__ms3zkb(8);
    this.bfc_1 = PaddingValues(this.zfb_1, this.afc_1, this.zfb_1, this.afc_1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.cfc_1 = _Dp___init__impl__ms3zkb(16);
    this.dfc_1 = PaddingValues(this.cfc_1, this.afc_1, this.zfb_1, this.afc_1);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.efc_1 = _Dp___init__impl__ms3zkb(12);
    this.ffc_1 = PaddingValues(this.efc_1, this.bfc_1.h97(), this.efc_1, this.bfc_1.i97());
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.gfc_1 = _Dp___init__impl__ms3zkb(16);
    this.hfc_1 = PaddingValues(this.efc_1, this.bfc_1.h97(), this.gfc_1, this.bfc_1.i97());
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.ifc_1 = _Dp___init__impl__ms3zkb(58);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.jfc_1 = _Dp___init__impl__ms3zkb(40);
    this.kfc_1 = FilledButtonTokens_getInstance().yff_1;
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_6.lfc_1 = _Dp___init__impl__ms3zkb(8);
    this.mfc_1 = 0;
  }
  protoOf(ButtonDefaults).nfc = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(186874489);
    sourceInformation($composer_0, 'C($get-shape$$composable)528@25540L9:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(186874489, $changed, -1, 'androidx.compose.material3.ButtonDefaults.$get-shape$$composable (Button.kt:528)');
    }
    var tmp0 = toShape$composable(FilledButtonTokens_getInstance().fff_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(ButtonDefaults).ffd = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(252525324);
    sourceInformation($composer_0, 'C($get-textShape$$composable)540@26116L9:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(252525324, $changed, -1, 'androidx.compose.material3.ButtonDefaults.$get-textShape$$composable (Button.kt:540)');
    }
    var tmp0 = toShape$composable(TextButtonTokens_getInstance().bfg_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(ButtonDefaults).ofc = function (containerColor, contentColor, disabledContainerColor, disabledContentColor, $composer, $changed, $default) {
    var containerColor_0 = containerColor;
    var contentColor_0 = contentColor;
    var disabledContainerColor_0 = disabledContainerColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.f1x(-1637900093);
    sourceInformation($composer_0, 'C(buttonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.graphics.Color)553@26706L9,554@26781L9,556@26886L9,558@27052L9:Button.kt#uh7d8r');
    if (!(($default & 1) === 0))
      containerColor_0 = toColor$composable(FilledButtonTokens_getInstance().cff_1, $composer_0, 6);
    if (!(($default & 2) === 0))
      contentColor_0 = toColor$composable(FilledButtonTokens_getInstance().pff_1, $composer_0, 6);
    if (!(($default & 4) === 0)) {
      var tmp = toColor$composable(FilledButtonTokens_getInstance().gff_1, $composer_0, 6);
      FilledButtonTokens_getInstance();
      disabledContainerColor_0 = Color__copy$default_impl_ectz3s(tmp, 0.12);
    }
    if (!(($default & 8) === 0)) {
      var tmp_0 = toColor$composable(FilledButtonTokens_getInstance().jff_1, $composer_0, 6);
      FilledButtonTokens_getInstance();
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(tmp_0, 0.38);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1637900093, $changed, -1, 'androidx.compose.material3.ButtonDefaults.buttonColors$composable (Button.kt:552)');
    }
    var tmp0 = new ButtonColors(containerColor_0, contentColor_0, disabledContainerColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(ButtonDefaults).gfd = function (containerColor, contentColor, disabledContainerColor, disabledContentColor, $composer, $changed, $default) {
    var containerColor_0 = containerColor;
    var contentColor_0 = contentColor;
    var disabledContainerColor_0 = disabledContainerColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.f1x(-1601389354);
    sourceInformation($composer_0, 'C(textButtonColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.graphics.Color)655@31808L9,658@31969L9:Button.kt#uh7d8r');
    if (!(($default & 1) === 0))
      containerColor_0 = Companion_getInstance_2().j42_1;
    if (!(($default & 2) === 0))
      contentColor_0 = toColor$composable(TextButtonTokens_getInstance().gfg_1, $composer_0, 6);
    if (!(($default & 4) === 0))
      disabledContainerColor_0 = Companion_getInstance_2().j42_1;
    if (!(($default & 8) === 0)) {
      var tmp = toColor$composable(TextButtonTokens_getInstance().cfg_1, $composer_0, 6);
      TextButtonTokens_getInstance();
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(tmp, 0.38);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1601389354, $changed, -1, 'androidx.compose.material3.ButtonDefaults.textButtonColors$composable (Button.kt:653)');
    }
    var tmp0 = new ButtonColors(containerColor_0, contentColor_0, disabledContainerColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(ButtonDefaults).pfc = function (defaultElevation, pressedElevation, focusedElevation, hoveredElevation, disabledElevation, $composer, $changed, $default) {
    var defaultElevation_0 = defaultElevation;
    var pressedElevation_0 = pressedElevation;
    var focusedElevation_0 = focusedElevation;
    var hoveredElevation_0 = hoveredElevation;
    var disabledElevation_0 = disabledElevation;
    var $composer_0 = $composer;
    $composer_0.f1x(1242483985);
    sourceInformation($composer_0, 'C(buttonElevation$composable)P(0:c#ui.unit.Dp,4:c#ui.unit.Dp,2:c#ui.unit.Dp,3:c#ui.unit.Dp,1:c#ui.unit.Dp):Button.kt#uh7d8r');
    if (!(($default & 1) === 0))
      defaultElevation_0 = FilledButtonTokens_getInstance().dff_1;
    if (!(($default & 2) === 0))
      pressedElevation_0 = FilledButtonTokens_getInstance().rff_1;
    if (!(($default & 4) === 0))
      focusedElevation_0 = FilledButtonTokens_getInstance().lff_1;
    if (!(($default & 8) === 0))
      hoveredElevation_0 = FilledButtonTokens_getInstance().nff_1;
    if (!(($default & 16) === 0))
      disabledElevation_0 = FilledButtonTokens_getInstance().hff_1;
    if (isTraceInProgress()) {
      traceEventStart(1242483985, $changed, -1, 'androidx.compose.material3.ButtonDefaults.buttonElevation$composable (Button.kt:679)');
    }
    var tmp0 = new ButtonElevation(defaultElevation_0, pressedElevation_0, focusedElevation_0, hoveredElevation_0, disabledElevation_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  var ButtonDefaults_instance;
  function ButtonDefaults_getInstance() {
    if (ButtonDefaults_instance == null)
      new ButtonDefaults();
    return ButtonDefaults_instance;
  }
  function Button$composable$lambda($this$semantics) {
    set_role($this$semantics, Companion_getInstance_3().b7x_1);
    return Unit_instance;
  }
  function Button$composable$lambda$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C134@6743L467:Button.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-2136309793, $changed, -1, 'androidx.compose.material3.Button$composable.<anonymous>.<anonymous>.<anonymous> (Button.kt:133)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var modifier = padding(defaultMinSize(Companion_instance, ButtonDefaults_getInstance().ifc_1, ButtonDefaults_getInstance().jfc_1), $contentPadding._v);
        var horizontalArrangement = Arrangement_getInstance().h93_1;
        var verticalAlignment = Companion_getInstance_4().n5i_1;
        var $changed_0 = 432 | 7168 & $$dirty >> 18;
        var modifier_0 = modifier;
        var horizontalArrangement_0 = horizontalArrangement;
        var verticalAlignment_0 = verticalAlignment;
        var $composer_1 = $composer_0;
        $composer_1.f1x(-636825856);
        sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)77@3858L58,78@3921L130:Row.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier_0 = Companion_instance;
        if (!((0 & 2) === 0))
          horizontalArrangement_0 = Arrangement_getInstance().d93_1;
        if (!((0 & 4) === 0))
          verticalAlignment_0 = Companion_getInstance_4().m5i_1;
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement_0, verticalAlignment_0, $composer_1, 14 & $changed_0 >> 3 | 112 & $changed_0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_1 = modifier_0;
        var $changed_1 = 112 & $changed_0 << 3;
        var modifier_2 = modifier_1;
        var $composer_2 = $composer_1;
        $composer_2.f1x(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_2);
        var $changed_2 = 6 | 7168 & $changed_1 << 9;
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.u1y();
        if (!isInterface(tmp_0, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_1;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_1 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_2 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1568371859, 'C79@3966L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_instance, $composer_4, 6 | 112 & $changed_0 >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
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
  function Button$composable$lambda$lambda($contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C133@6702L10,133@6663L561:Button.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1582292974, $changed, -1, 'androidx.compose.material3.Button$composable.<anonymous>.<anonymous> (Button.kt:132)');
        }
        var tmp_0 = MaterialTheme_instance.hfh($composer_0, 6).cfh_1;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -2136309793, true, Button$composable$lambda$lambda$lambda($contentPadding, $$dirty, $content));
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
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.s1z(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.h1x();
        ProvideTextStyle$composable(tmp_0, tmp0, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
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
  function Button$composable$lambda_0($contentColor, $contentPadding, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C132@6583L651:Button.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(956488494, $changed, -1, 'androidx.compose.material3.Button$composable.<anonymous> (Button.kt:131)');
        }
        var tmp_0 = [get_LocalContentColor().r2e(new Color($contentColor))];
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.Button$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1582292974, true, Button$composable$lambda$lambda($contentPadding, $$dirty, $content));
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
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.Button$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_1.s1z(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.h1x();
        CompositionLocalProvider$composable(tmp_0, tmp0, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function Button$composable$lambda_1($onClick, $modifier, $enabled, $shape, $colors, $elevation, $border, $contentPadding, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button$composable($onClick, $modifier._v, $enabled._v, $shape._v, $colors._v, $elevation._v, $border._v, $contentPadding._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function TextButton$composable$lambda($onClick, $modifier, $enabled, $shape, $colors, $elevation, $border, $contentPadding, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      TextButton$composable($onClick, $modifier._v, $enabled._v, $shape._v, $colors._v, $elevation._v, $border._v, $contentPadding._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Card$composable(modifier, shape, colors, elevation, border, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var elevation_0 = {_v: elevation};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1229709505);
    sourceInformation($composer_0, 'C(Card$composable)P(4,5,1,3)77@3629L5,78@3674L12,79@3732L15,86@3923L30,87@3991L28,88@4062L56,89@4162L57,83@3839L460:Card.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.t1z(shape_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.t1z(colors_0._v) : false) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.t1z(elevation_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.t1z(border_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          shape_0._v = CardDefaults_instance.nfc($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          var tmp = CardDefaults_instance;
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp.jfh(tmp_0, tmp_1, tmp_2, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 24576, 15);
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          var tmp_3 = CardDefaults_instance;
          var tmp_4 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_6 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_7 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
          elevation_0._v = tmp_3.kfh(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, _Dp___init__impl__ms3zkb(0.0), $composer_0, 1572864, 63);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          border_0._v = null;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-1229709505, $dirty, -1, 'androidx.compose.material3.Card$composable (Card.kt:75)');
      }
      var tmp_9 = modifier_0._v;
      var tmp_10 = shape_0._v;
      var tmp_11 = colors_0._v.vfc(true, $composer_0, 6 | 112 & $dirty >> 3).u2();
      var tmp_12 = colors_0._v.wfc(true, $composer_0, 6 | 112 & $dirty >> 3).u2();
      var tmp_13 = elevation_0._v.xfh(true, null, $composer_0, 54 | 896 & $dirty >> 3).u2();
      var tmp_14 = elevation_0._v.yfh(true, null, $composer_0, 54 | 896 & $dirty >> 3).u2();
      var tmp_15 = border_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.Card$composable.<anonymous>' call
      var tmp_16 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_16, 664103990, true, Card$composable$lambda($dirty, content));
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
      var tmp_17;
      if (invalid ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.Card$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.s1z(value);
        tmp_17 = value;
      } else {
        tmp_17 = it;
      }
      var tmp_18 = tmp_17;
      var tmp0 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_1.h1x();
      Surface$composable_0(tmp_9, tmp_10, tmp_11.p41_1, tmp_12.p41_1, tmp_13.z3b_1, tmp_14.z3b_1, tmp_15, tmp0, $composer_0, 12582912 | 14 & $dirty | 112 & $dirty | 3670016 & $dirty << 6, 0);
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
      tmp0_safe_receiver.w2e(Card$composable$lambda_0(modifier_0, shape_0, colors_0, elevation_0, border_0, content, $changed, $default));
    }
  }
  function CardColors(containerColor, contentColor, disabledContainerColor, disabledContentColor) {
    this.lfh_1 = containerColor;
    this.mfh_1 = contentColor;
    this.nfh_1 = disabledContainerColor;
    this.ofh_1 = disabledContentColor;
    this.pfh_1 = 0;
  }
  protoOf(CardColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CardColors);
    }
    if (tmp)
      return false;
    if (!equals(this.lfh_1, other.lfh_1))
      return false;
    if (!equals(this.mfh_1, other.mfh_1))
      return false;
    if (!equals(this.nfh_1, other.nfh_1))
      return false;
    if (!equals(this.ofh_1, other.ofh_1))
      return false;
    return true;
  };
  protoOf(CardColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.lfh_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.mfh_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.nfh_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ofh_1) | 0;
    return result;
  };
  protoOf(CardColors).vfc = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1094485681);
    sourceInformation($composer_0, 'C(containerColor$composable)738@32872L77:Card.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1094485681, $changed, -1, 'androidx.compose.material3.CardColors.containerColor$composable (Card.kt:737)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.lfh_1 : this.nfh_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(CardColors).wfc = function (enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(2043990295);
    sourceInformation($composer_0, 'C(contentColor$composable)748@33200L73:Card.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(2043990295, $changed, -1, 'androidx.compose.material3.CardColors.contentColor$composable (Card.kt:747)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(enabled ? this.mfh_1 : this.ofh_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  function CardElevation$animateElevation$composable$slambda$slambda($interactions, resultContinuation) {
    this.hfi_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CardElevation$animateElevation$composable$slambda$slambda).fa3 = function (interaction, $completion) {
    var tmp = this.ga3(interaction, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(CardElevation$animateElevation$composable$slambda$slambda).fc = function (p1, $completion) {
    return this.fa3((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CardElevation$animateElevation$composable$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          var tmp0_subject = this.ifi_1;
          if (tmp0_subject instanceof Enter) {
            this.hfi_1.c29(this.ifi_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.hfi_1.d2r(this.ifi_1.nb9_1);
            } else {
              if (tmp0_subject instanceof Focus) {
                this.hfi_1.c29(this.ifi_1);
              } else {
                if (tmp0_subject instanceof Unfocus) {
                  this.hfi_1.d2r(this.ifi_1.mb8_1);
                } else {
                  if (tmp0_subject instanceof Press) {
                    this.hfi_1.c29(this.ifi_1);
                  } else {
                    if (tmp0_subject instanceof Release) {
                      this.hfi_1.d2r(this.ifi_1.qba_1);
                    } else {
                      if (tmp0_subject instanceof Cancel) {
                        this.hfi_1.d2r(this.ifi_1.sba_1);
                      } else {
                        if (tmp0_subject instanceof Start) {
                          this.hfi_1.c29(this.ifi_1);
                        } else {
                          if (tmp0_subject instanceof Stop) {
                            this.hfi_1.d2r(this.ifi_1.hb8_1);
                          } else {
                            if (tmp0_subject instanceof Cancel_0) {
                              this.hfi_1.d2r(this.ifi_1.jb8_1);
                            }
                          }
                        }
                      }
                    }
                  }
                }
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
  protoOf(CardElevation$animateElevation$composable$slambda$slambda).ga3 = function (interaction, completion) {
    var i = new CardElevation$animateElevation$composable$slambda$slambda(this.hfi_1, completion);
    i.ifi_1 = interaction;
    return i;
  };
  function CardElevation$animateElevation$composable$slambda$slambda_0($interactions, resultContinuation) {
    var i = new CardElevation$animateElevation$composable$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $completion) {
      return i.fa3(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateElevation$composable_0($this, enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-453758024);
    sourceInformation($composer_0, 'C(animateElevation$composable)616@28160L46,617@28249L1473,617@28215L1507,669@30284L51,671@30345L776:Card.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-453758024, $changed, -1, 'androidx.compose.material3.CardElevation.animateElevation$composable (Card.kt:612)');
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
    if (false ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.material3.CardElevation.animateElevation$composable.<anonymous>' call
      var value = mutableStateListOf();
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    var interactions = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.f1x(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_2.t1z(interactionSource) | $composer_2.t1z(interactions));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_2.r1z();
    var tmp_1;
    if (invalid ? true : it_0 === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.material3.CardElevation.animateElevation$composable.<anonymous>' call
      var value_0 = CardElevation$animateElevation$composable$slambda_0(interactionSource, interactions, null);
      $composer_2.s1z(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_2.h1x();
    LaunchedEffect$composable(interactionSource, tmp0_0, $composer_0, 14 & $changed >> 3);
    var interaction = lastOrNull(interactions);
    var tmp_3;
    if (!enabled) {
      tmp_3 = $this.vfh_1;
    } else {
      var tmp_4;
      if (interaction instanceof Press) {
        tmp_4 = $this.rfh_1;
      } else {
        if (interaction instanceof Enter) {
          tmp_4 = $this.tfh_1;
        } else {
          if (interaction instanceof Focus) {
            tmp_4 = $this.sfh_1;
          } else {
            if (interaction instanceof Start) {
              tmp_4 = $this.ufh_1;
            } else {
              tmp_4 = $this.qfh_1;
            }
          }
        }
      }
      tmp_3 = tmp_4;
    }
    var target = tmp_3;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.f1x(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_3.r1z();
    var tmp_5;
    if (false ? true : it_1 === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.material3.CardElevation.animateElevation$composable.<anonymous>' call
      var value_1 = new Animatable(new Dp(target), get_VectorConverter(Companion_getInstance_0()));
      $composer_3.s1z(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = it_1;
    }
    var tmp_6 = tmp_5;
    var tmp0_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_3.h1x();
    var animatable = tmp0_1;
    LaunchedEffect$composable(new Dp(target), CardElevation$animateElevation$composable$slambda_2(enabled, animatable, $this, target, interaction, null), $composer_0, 0);
    var tmp0_2 = animatable.e8p();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_2;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.jfi_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).t13 = function (value, $completion) {
    return this.jfi_1(value, $completion);
  };
  function CardElevation$animateElevation$composable$slambda($interactionSource, $interactions, resultContinuation) {
    this.sfi_1 = $interactionSource;
    this.tfi_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CardElevation$animateElevation$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(CardElevation$animateElevation$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CardElevation$animateElevation$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = this.sfi_1.oa2();
            var tmp_1 = CardElevation$animateElevation$composable$slambda$slambda_0(this.tfi_1, null);
            suspendResult = tmp_0.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(CardElevation$animateElevation$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new CardElevation$animateElevation$composable$slambda(this.sfi_1, this.tfi_1, completion);
    i.ufi_1 = $this$LaunchedEffect;
    return i;
  };
  function CardElevation$animateElevation$composable$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new CardElevation$animateElevation$composable$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CardElevation$animateElevation$composable$slambda_1($enabled, $animatable, this$0, $target, $interaction, resultContinuation) {
    this.dfj_1 = $enabled;
    this.efj_1 = $animatable;
    this.ffj_1 = this$0;
    this.gfj_1 = $target;
    this.hfj_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CardElevation$animateElevation$composable$slambda_1).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(CardElevation$animateElevation$composable$slambda_1).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CardElevation$animateElevation$composable$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            if (this.dfj_1) {
              var tmp_0 = this;
              var tmp0_subject = this.efj_1.m8o().z3b_1;
              tmp_0.jfj_1 = equals(tmp0_subject, this.ffj_1.rfh_1) ? new Press(Companion_getInstance_1().z38_1) : equals(tmp0_subject, this.ffj_1.tfh_1) ? new Enter() : equals(tmp0_subject, this.ffj_1.sfh_1) ? new Focus() : equals(tmp0_subject, this.ffj_1.ufh_1) ? new Start() : null;
              this.hb_1 = 2;
              suspendResult = animateElevation(this.efj_1, this.gfj_1, this.jfj_1, this.hfj_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 1;
              suspendResult = this.efj_1.d8p(new Dp(this.gfj_1), this);
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
  protoOf(CardElevation$animateElevation$composable$slambda_1).w1b = function ($this$LaunchedEffect, completion) {
    var i = new CardElevation$animateElevation$composable$slambda_1(this.dfj_1, this.efj_1, this.ffj_1, this.gfj_1, this.hfj_1, completion);
    i.ifj_1 = $this$LaunchedEffect;
    return i;
  };
  function CardElevation$animateElevation$composable$slambda_2($enabled, $animatable, this$0, $target, $interaction, resultContinuation) {
    var i = new CardElevation$animateElevation$composable$slambda_1($enabled, $animatable, this$0, $target, $interaction, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CardElevation(defaultElevation, pressedElevation, focusedElevation, hoveredElevation, draggedElevation, disabledElevation) {
    this.qfh_1 = defaultElevation;
    this.rfh_1 = pressedElevation;
    this.sfh_1 = focusedElevation;
    this.tfh_1 = hoveredElevation;
    this.ufh_1 = draggedElevation;
    this.vfh_1 = disabledElevation;
    this.wfh_1 = 0;
  }
  protoOf(CardElevation).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CardElevation);
    }
    if (tmp)
      return false;
    if (!equals(this.qfh_1, other.qfh_1))
      return false;
    if (!equals(this.rfh_1, other.rfh_1))
      return false;
    if (!equals(this.sfh_1, other.sfh_1))
      return false;
    if (!equals(this.tfh_1, other.tfh_1))
      return false;
    if (!equals(this.vfh_1, other.vfh_1))
      return false;
    return true;
  };
  protoOf(CardElevation).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.qfh_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.rfh_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.sfh_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.tfh_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.vfh_1) | 0;
    return result;
  };
  protoOf(CardElevation).xfh = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1054318805);
    sourceInformation($composer_0, 'C(tonalElevation$composable)586@27029L74:Card.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1054318805, $changed, -1, 'androidx.compose.material3.CardElevation.tonalElevation$composable (Card.kt:579)');
    }
    $composer_0.f1x(-2003481588);
    sourceInformation($composer_0, '584@26958L45');
    if (interactionSource == null) {
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
      if (false ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.CardElevation.tonalElevation$composable.<anonymous>' call
        var value = mutableStateOf(new Dp(this.qfh_1));
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      $composer_0.h1x();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.h1x();
      return tmp0;
    }
    $composer_0.h1x();
    var tmp0_0 = animateElevation$composable_0(this, enabled, interactionSource, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  };
  protoOf(CardElevation).yfh = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(289412799);
    sourceInformation($composer_0, 'C(shadowElevation$composable)608@27911L74:Card.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(289412799, $changed, -1, 'androidx.compose.material3.CardElevation.shadowElevation$composable (Card.kt:601)');
    }
    $composer_0.f1x(-195767212);
    sourceInformation($composer_0, '606@27840L45');
    if (interactionSource == null) {
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
      if (false ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.CardElevation.shadowElevation$composable.<anonymous>' call
        var value = mutableStateOf(new Dp(this.qfh_1));
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      $composer_0.h1x();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.h1x();
      return tmp0;
    }
    $composer_0.h1x();
    var tmp0_0 = animateElevation$composable_0(this, enabled, interactionSource, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  };
  function CardDefaults() {
    this.ifh_1 = 0;
  }
  protoOf(CardDefaults).nfc = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1029067675);
    sourceInformation($composer_0, 'C($get-shape$$composable)354@16330L9:Card.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1029067675, $changed, -1, 'androidx.compose.material3.CardDefaults.$get-shape$$composable (Card.kt:354)');
    }
    var tmp0 = toShape$composable(FilledCardTokens_getInstance().mfj_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(CardDefaults).kfh = function (defaultElevation, pressedElevation, focusedElevation, hoveredElevation, draggedElevation, disabledElevation, $composer, $changed, $default) {
    var defaultElevation_0 = defaultElevation;
    var pressedElevation_0 = pressedElevation;
    var focusedElevation_0 = focusedElevation;
    var hoveredElevation_0 = hoveredElevation;
    var draggedElevation_0 = draggedElevation;
    var disabledElevation_0 = disabledElevation;
    var $composer_0 = $composer;
    $composer_0.f1x(-753226817);
    sourceInformation($composer_0, 'C(cardElevation$composable)P(0:c#ui.unit.Dp,5:c#ui.unit.Dp,3:c#ui.unit.Dp,4:c#ui.unit.Dp,2:c#ui.unit.Dp,1:c#ui.unit.Dp):Card.kt#uh7d8r');
    if (!(($default & 1) === 0))
      defaultElevation_0 = FilledCardTokens_getInstance().lfj_1;
    if (!(($default & 2) === 0))
      pressedElevation_0 = FilledCardTokens_getInstance().vfj_1;
    if (!(($default & 4) === 0))
      focusedElevation_0 = FilledCardTokens_getInstance().rfj_1;
    if (!(($default & 8) === 0))
      hoveredElevation_0 = FilledCardTokens_getInstance().sfj_1;
    if (!(($default & 16) === 0))
      draggedElevation_0 = FilledCardTokens_getInstance().qfj_1;
    if (!(($default & 32) === 0))
      disabledElevation_0 = FilledCardTokens_getInstance().ofj_1;
    if (isTraceInProgress()) {
      traceEventStart(-753226817, $changed, -1, 'androidx.compose.material3.CardDefaults.cardElevation$composable (Card.kt:373)');
    }
    var tmp0 = new CardElevation(defaultElevation_0, pressedElevation_0, focusedElevation_0, hoveredElevation_0, draggedElevation_0, disabledElevation_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(CardDefaults).jfh = function (containerColor, contentColor, disabledContainerColor, disabledContentColor, $composer, $changed, $default) {
    var containerColor_0 = containerColor;
    var contentColor_0 = contentColor;
    var disabledContainerColor_0 = disabledContainerColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    $composer_0.f1x(-364986395);
    sourceInformation($composer_0, 'C(cardColors$composable)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.graphics.Color)456@21362L9,457@21403L31,459@21528L9,462@21677L11,466@21861L31:Card.kt#uh7d8r');
    if (!(($default & 1) === 0))
      containerColor_0 = toColor$composable(FilledCardTokens_getInstance().kfj_1, $composer_0, 6);
    if (!(($default & 2) === 0))
      contentColor_0 = contentColorFor$composable(containerColor_0, $composer_0, 14 & $changed);
    if (!(($default & 4) === 0)) {
      var tmp = toColor$composable(FilledCardTokens_getInstance().nfj_1, $composer_0, 6);
      FilledCardTokens_getInstance();
      disabledContainerColor_0 = compositeOver(Color__copy$default_impl_ectz3s(tmp, 0.38), surfaceColorAtElevation(MaterialTheme_instance.wfj($composer_0, 6), FilledCardTokens_getInstance().ofj_1));
    }
    if (!(($default & 8) === 0))
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(contentColorFor$composable(containerColor_0, $composer_0, 14 & $changed), get_DisabledAlpha());
    if (isTraceInProgress()) {
      traceEventStart(-364986395, $changed, -1, 'androidx.compose.material3.CardDefaults.cardColors$composable (Card.kt:455)');
    }
    var tmp0 = new CardColors(containerColor_0, contentColor_0, disabledContainerColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  var CardDefaults_instance;
  function CardDefaults_getInstance() {
    return CardDefaults_instance;
  }
  function Card$composable$lambda($$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C92@4268L25:Card.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(664103990, $changed, -1, 'androidx.compose.material3.Card$composable.<anonymous> (Card.kt:91)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var $changed_0 = 7168 & $$dirty >> 6;
        var modifier = null;
        var verticalArrangement = null;
        var horizontalAlignment = null;
        var $composer_1 = $composer_0;
        $composer_1.f1x(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier = Companion_instance;
        if (!((7 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().f93_1;
        if (!((7 & 4) === 0))
          horizontalAlignment = Companion_getInstance_4().p5i_1;
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & $changed_0 >> 3 | 112 & $changed_0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_1 = 112 & $changed_0 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.f1x(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_2 = 6 | 7168 & $changed_1 << 9;
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.u1y();
        if (!isInterface(tmp_0, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_1;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_1 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_2 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        $content(ColumnScopeInstance_instance, $composer_4, 6 | 112 & $changed_0 >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
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
  function Card$composable$lambda_0($modifier, $shape, $colors, $elevation, $border, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Card$composable($modifier._v, $shape._v, $colors._v, $elevation._v, $border._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_LocalColorScheme() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalColorScheme;
  }
  var LocalColorScheme;
  function ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    this.xfj_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.yfj_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.zfj_1 = mutableStateOf(new Color(primaryContainer), structuralEqualityPolicy());
    this.afk_1 = mutableStateOf(new Color(onPrimaryContainer), structuralEqualityPolicy());
    this.bfk_1 = mutableStateOf(new Color(inversePrimary), structuralEqualityPolicy());
    this.cfk_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.dfk_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.efk_1 = mutableStateOf(new Color(secondaryContainer), structuralEqualityPolicy());
    this.ffk_1 = mutableStateOf(new Color(onSecondaryContainer), structuralEqualityPolicy());
    this.gfk_1 = mutableStateOf(new Color(tertiary), structuralEqualityPolicy());
    this.hfk_1 = mutableStateOf(new Color(onTertiary), structuralEqualityPolicy());
    this.ifk_1 = mutableStateOf(new Color(tertiaryContainer), structuralEqualityPolicy());
    this.jfk_1 = mutableStateOf(new Color(onTertiaryContainer), structuralEqualityPolicy());
    this.kfk_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.lfk_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.mfk_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.nfk_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.ofk_1 = mutableStateOf(new Color(surfaceVariant), structuralEqualityPolicy());
    this.pfk_1 = mutableStateOf(new Color(onSurfaceVariant), structuralEqualityPolicy());
    this.qfk_1 = mutableStateOf(new Color(surfaceTint), structuralEqualityPolicy());
    this.rfk_1 = mutableStateOf(new Color(inverseSurface), structuralEqualityPolicy());
    this.sfk_1 = mutableStateOf(new Color(inverseOnSurface), structuralEqualityPolicy());
    this.tfk_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.ufk_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.vfk_1 = mutableStateOf(new Color(errorContainer), structuralEqualityPolicy());
    this.wfk_1 = mutableStateOf(new Color(onErrorContainer), structuralEqualityPolicy());
    this.xfk_1 = mutableStateOf(new Color(outline), structuralEqualityPolicy());
    this.yfk_1 = mutableStateOf(new Color(outlineVariant), structuralEqualityPolicy());
    this.zfk_1 = mutableStateOf(new Color(scrim), structuralEqualityPolicy());
    this.afl_1 = 0;
  }
  protoOf(ColorScheme).kcz = function (_set____db54di) {
    var this_0 = this.xfj_1;
    primary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).lcz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.xfj_1;
    primary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).xcz = function (_set____db54di) {
    var this_0 = this.yfj_1;
    onPrimary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).ycz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.yfj_1;
    onPrimary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).bfl = function (_set____db54di) {
    var this_0 = this.zfj_1;
    primaryContainer$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).cfl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.zfj_1;
    primaryContainer$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).dfl = function (_set____db54di) {
    var this_0 = this.afk_1;
    onPrimaryContainer$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).efl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.afk_1;
    onPrimaryContainer$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).ffl = function (_set____db54di) {
    var this_0 = this.bfk_1;
    inversePrimary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).gfl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.bfk_1;
    inversePrimary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).ocz = function (_set____db54di) {
    var this_0 = this.cfk_1;
    secondary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).pcz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.cfk_1;
    secondary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).zcz = function (_set____db54di) {
    var this_0 = this.dfk_1;
    onSecondary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).ad0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.dfk_1;
    onSecondary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).hfl = function (_set____db54di) {
    var this_0 = this.efk_1;
    secondaryContainer$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).ifl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.efk_1;
    secondaryContainer$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).jfl = function (_set____db54di) {
    var this_0 = this.ffk_1;
    onSecondaryContainer$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).kfl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ffk_1;
    onSecondaryContainer$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).lfl = function (_set____db54di) {
    var this_0 = this.gfk_1;
    tertiary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).mfl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.gfk_1;
    tertiary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).nfl = function (_set____db54di) {
    var this_0 = this.hfk_1;
    onTertiary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).ofl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.hfk_1;
    onTertiary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).pfl = function (_set____db54di) {
    var this_0 = this.ifk_1;
    tertiaryContainer$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).qfl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ifk_1;
    tertiaryContainer$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).rfl = function (_set____db54di) {
    var this_0 = this.jfk_1;
    onTertiaryContainer$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).sfl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.jfk_1;
    onTertiaryContainer$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).scz = function (_set____db54di) {
    var this_0 = this.kfk_1;
    background$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).k4z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.kfk_1;
    background$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).bd0 = function (_set____db54di) {
    var this_0 = this.lfk_1;
    onBackground$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).cd0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.lfk_1;
    onBackground$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).tcz = function (_set____db54di) {
    var this_0 = this.mfk_1;
    surface$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).ucz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.mfk_1;
    surface$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).dd0 = function (_set____db54di) {
    var this_0 = this.nfk_1;
    onSurface$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).ed0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.nfk_1;
    onSurface$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).tfl = function (_set____db54di) {
    var this_0 = this.ofk_1;
    surfaceVariant$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).ufl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ofk_1;
    surfaceVariant$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).vfl = function (_set____db54di) {
    var this_0 = this.pfk_1;
    onSurfaceVariant$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).wfl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.pfk_1;
    onSurfaceVariant$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).xfl = function (_set____db54di) {
    var this_0 = this.qfk_1;
    surfaceTint$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).yfl = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.qfk_1;
    surfaceTint$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).zfl = function (_set____db54di) {
    var this_0 = this.rfk_1;
    inverseSurface$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).afm = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.rfk_1;
    inverseSurface$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).bfm = function (_set____db54di) {
    var this_0 = this.sfk_1;
    inverseOnSurface$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).cfm = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.sfk_1;
    inverseOnSurface$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).vcz = function (_set____db54di) {
    var this_0 = this.tfk_1;
    error$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).wcz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.tfk_1;
    error$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).fd0 = function (_set____db54di) {
    var this_0 = this.ufk_1;
    onError$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).gd0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ufk_1;
    onError$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).dfm = function (_set____db54di) {
    var this_0 = this.vfk_1;
    errorContainer$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).efm = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.vfk_1;
    errorContainer$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).ffm = function (_set____db54di) {
    var this_0 = this.wfk_1;
    onErrorContainer$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).gfm = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.wfk_1;
    onErrorContainer$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).hfm = function (_set____db54di) {
    var this_0 = this.xfk_1;
    outline$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).ifm = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.xfk_1;
    outline$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).jfm = function (_set____db54di) {
    var this_0 = this.yfk_1;
    outlineVariant$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).kfm = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.yfk_1;
    outlineVariant$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).lfm = function (_set____db54di) {
    var this_0 = this.zfk_1;
    scrim$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(ColorScheme).mfm = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.zfk_1;
    scrim$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(ColorScheme).nfm = function (primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim);
  };
  protoOf(ColorScheme).ofm = function (primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, $super) {
    primary = primary === VOID ? this.lcz() : primary;
    onPrimary = onPrimary === VOID ? this.ycz() : onPrimary;
    primaryContainer = primaryContainer === VOID ? this.cfl() : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? this.efl() : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? this.gfl() : inversePrimary;
    secondary = secondary === VOID ? this.pcz() : secondary;
    onSecondary = onSecondary === VOID ? this.ad0() : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? this.ifl() : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? this.kfl() : onSecondaryContainer;
    tertiary = tertiary === VOID ? this.mfl() : tertiary;
    onTertiary = onTertiary === VOID ? this.ofl() : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? this.qfl() : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? this.sfl() : onTertiaryContainer;
    background = background === VOID ? this.k4z() : background;
    onBackground = onBackground === VOID ? this.cd0() : onBackground;
    surface = surface === VOID ? this.ucz() : surface;
    onSurface = onSurface === VOID ? this.ed0() : onSurface;
    surfaceVariant = surfaceVariant === VOID ? this.ufl() : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? this.wfl() : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? this.yfl() : surfaceTint;
    inverseSurface = inverseSurface === VOID ? this.afm() : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? this.cfm() : inverseOnSurface;
    error = error === VOID ? this.wcz() : error;
    onError = onError === VOID ? this.gd0() : onError;
    errorContainer = errorContainer === VOID ? this.efm() : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? this.gfm() : onErrorContainer;
    outline = outline === VOID ? this.ifm() : outline;
    outlineVariant = outlineVariant === VOID ? this.kfm() : outlineVariant;
    scrim = scrim === VOID ? this.mfm() : scrim;
    return $super === VOID ? this.nfm(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) : $super.nfm.call(this, new Color(primary), new Color(onPrimary), new Color(primaryContainer), new Color(onPrimaryContainer), new Color(inversePrimary), new Color(secondary), new Color(onSecondary), new Color(secondaryContainer), new Color(onSecondaryContainer), new Color(tertiary), new Color(onTertiary), new Color(tertiaryContainer), new Color(onTertiaryContainer), new Color(background), new Color(onBackground), new Color(surface), new Color(onSurface), new Color(surfaceVariant), new Color(onSurfaceVariant), new Color(surfaceTint), new Color(inverseSurface), new Color(inverseOnSurface), new Color(error), new Color(onError), new Color(errorContainer), new Color(onErrorContainer), new Color(outline), new Color(outlineVariant), new Color(scrim));
  };
  protoOf(ColorScheme).toString = function () {
    return 'ColorScheme(' + ('primary=' + new Color(this.lcz())) + ('onPrimary=' + new Color(this.ycz())) + ('primaryContainer=' + new Color(this.cfl())) + ('onPrimaryContainer=' + new Color(this.efl())) + ('inversePrimary=' + new Color(this.gfl())) + ('secondary=' + new Color(this.pcz())) + ('onSecondary=' + new Color(this.ad0())) + ('secondaryContainer=' + new Color(this.ifl())) + ('onSecondaryContainer=' + new Color(this.kfl())) + ('tertiary=' + new Color(this.mfl())) + ('onTertiary=' + new Color(this.ofl())) + ('tertiaryContainer=' + new Color(this.qfl())) + ('onTertiaryContainer=' + new Color(this.sfl())) + ('background=' + new Color(this.k4z())) + ('onBackground=' + new Color(this.cd0())) + ('surface=' + new Color(this.ucz())) + ('onSurface=' + new Color(this.ed0())) + ('surfaceVariant=' + new Color(this.ufl())) + ('onSurfaceVariant=' + new Color(this.wfl())) + ('surfaceTint=' + new Color(this.yfl())) + ('inverseSurface=' + new Color(this.afm())) + ('inverseOnSurface=' + new Color(this.cfm())) + ('error=' + new Color(this.wcz())) + ('onError=' + new Color(this.gd0())) + ('errorContainer=' + new Color(this.efm())) + ('onErrorContainer=' + new Color(this.gfm())) + ('outline=' + new Color(this.ifm())) + ('outlineVariant=' + new Color(this.kfm())) + ('scrim=' + new Color(this.mfm())) + ')';
  };
  function lightColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    primary = primary === VOID ? ColorLightTokens_getInstance().ifn_1 : primary;
    onPrimary = onPrimary === VOID ? ColorLightTokens_getInstance().yfm_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorLightTokens_getInstance().jfn_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorLightTokens_getInstance().zfm_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorLightTokens_getInstance().tfm_1 : inversePrimary;
    secondary = secondary === VOID ? ColorLightTokens_getInstance().lfn_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorLightTokens_getInstance().afn_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorLightTokens_getInstance().mfn_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorLightTokens_getInstance().bfn_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorLightTokens_getInstance().qfn_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorLightTokens_getInstance().efn_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorLightTokens_getInstance().rfn_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorLightTokens_getInstance().ffn_1 : onTertiaryContainer;
    background = background === VOID ? ColorLightTokens_getInstance().pfm_1 : background;
    onBackground = onBackground === VOID ? ColorLightTokens_getInstance().vfm_1 : onBackground;
    surface = surface === VOID ? ColorLightTokens_getInstance().nfn_1 : surface;
    onSurface = onSurface === VOID ? ColorLightTokens_getInstance().cfn_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorLightTokens_getInstance().pfn_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorLightTokens_getInstance().dfn_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorLightTokens_getInstance().ufm_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorLightTokens_getInstance().sfm_1 : inverseOnSurface;
    error = error === VOID ? ColorLightTokens_getInstance().qfm_1 : error;
    onError = onError === VOID ? ColorLightTokens_getInstance().wfm_1 : onError;
    errorContainer = errorContainer === VOID ? ColorLightTokens_getInstance().rfm_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorLightTokens_getInstance().xfm_1 : onErrorContainer;
    outline = outline === VOID ? ColorLightTokens_getInstance().gfn_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorLightTokens_getInstance().hfn_1 : outlineVariant;
    scrim = scrim === VOID ? ColorLightTokens_getInstance().kfn_1 : scrim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim);
  }
  function toColor$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1129189448, 'C(toColor$composable)612@27498L11:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1129189448, $changed, -1, 'androidx.compose.material3.toColor$composable (ColorScheme.kt:611)');
    }
    var tmp0 = fromToken(MaterialTheme_instance.wfj($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function fromToken(_this__u8e3s4, value) {
    _init_properties_ColorScheme_kt__xhtsty();
    var tmp;
    switch (value.j9_1) {
      case 0:
        tmp = _this__u8e3s4.k4z();
        break;
      case 1:
        tmp = _this__u8e3s4.wcz();
        break;
      case 2:
        tmp = _this__u8e3s4.efm();
        break;
      case 3:
        tmp = _this__u8e3s4.cfm();
        break;
      case 4:
        tmp = _this__u8e3s4.gfl();
        break;
      case 5:
        tmp = _this__u8e3s4.afm();
        break;
      case 6:
        tmp = _this__u8e3s4.cd0();
        break;
      case 7:
        tmp = _this__u8e3s4.gd0();
        break;
      case 8:
        tmp = _this__u8e3s4.gfm();
        break;
      case 9:
        tmp = _this__u8e3s4.ycz();
        break;
      case 10:
        tmp = _this__u8e3s4.efl();
        break;
      case 11:
        tmp = _this__u8e3s4.ad0();
        break;
      case 12:
        tmp = _this__u8e3s4.kfl();
        break;
      case 13:
        tmp = _this__u8e3s4.ed0();
        break;
      case 14:
        tmp = _this__u8e3s4.wfl();
        break;
      case 25:
        tmp = _this__u8e3s4.yfl();
        break;
      case 15:
        tmp = _this__u8e3s4.ofl();
        break;
      case 16:
        tmp = _this__u8e3s4.sfl();
        break;
      case 17:
        tmp = _this__u8e3s4.ifm();
        break;
      case 18:
        tmp = _this__u8e3s4.kfm();
        break;
      case 19:
        tmp = _this__u8e3s4.lcz();
        break;
      case 20:
        tmp = _this__u8e3s4.cfl();
        break;
      case 21:
        tmp = _this__u8e3s4.mfm();
        break;
      case 22:
        tmp = _this__u8e3s4.pcz();
        break;
      case 23:
        tmp = _this__u8e3s4.ifl();
        break;
      case 24:
        tmp = _this__u8e3s4.ucz();
        break;
      case 26:
        tmp = _this__u8e3s4.ufl();
        break;
      case 27:
        tmp = _this__u8e3s4.mfl();
        break;
      case 28:
        tmp = _this__u8e3s4.qfl();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function darkColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    primary = primary === VOID ? ColorDarkTokens_getInstance().lfo_1 : primary;
    onPrimary = onPrimary === VOID ? ColorDarkTokens_getInstance().bfo_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorDarkTokens_getInstance().mfo_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorDarkTokens_getInstance().cfo_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorDarkTokens_getInstance().wfn_1 : inversePrimary;
    secondary = secondary === VOID ? ColorDarkTokens_getInstance().ofo_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorDarkTokens_getInstance().dfo_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorDarkTokens_getInstance().pfo_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorDarkTokens_getInstance().efo_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorDarkTokens_getInstance().tfo_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorDarkTokens_getInstance().hfo_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorDarkTokens_getInstance().ufo_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorDarkTokens_getInstance().ifo_1 : onTertiaryContainer;
    background = background === VOID ? ColorDarkTokens_getInstance().sfn_1 : background;
    onBackground = onBackground === VOID ? ColorDarkTokens_getInstance().yfn_1 : onBackground;
    surface = surface === VOID ? ColorDarkTokens_getInstance().qfo_1 : surface;
    onSurface = onSurface === VOID ? ColorDarkTokens_getInstance().ffo_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorDarkTokens_getInstance().sfo_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorDarkTokens_getInstance().gfo_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorDarkTokens_getInstance().xfn_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorDarkTokens_getInstance().vfn_1 : inverseOnSurface;
    error = error === VOID ? ColorDarkTokens_getInstance().tfn_1 : error;
    onError = onError === VOID ? ColorDarkTokens_getInstance().zfn_1 : onError;
    errorContainer = errorContainer === VOID ? ColorDarkTokens_getInstance().ufn_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorDarkTokens_getInstance().afo_1 : onErrorContainer;
    outline = outline === VOID ? ColorDarkTokens_getInstance().jfo_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorDarkTokens_getInstance().kfo_1 : outlineVariant;
    scrim = scrim === VOID ? ColorDarkTokens_getInstance().nfo_1 : scrim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim);
  }
  function contentColorFor$composable(backgroundColor, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1618819404, 'C(contentColorFor$composable)P(0:c#ui.graphics.Color)*474@21497L11,475@21581L7:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1618819404, $changed, -1, 'androidx.compose.material3.contentColorFor$composable (ColorScheme.kt:473)');
    }
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = contentColorFor(MaterialTheme_instance.wfj($composer_0, 6), backgroundColor);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance_2().k42_1))) {
      tmp = this_0;
    } else {
      // Inline function 'androidx.compose.material3.contentColorFor$composable.<anonymous>' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_1 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.b20(this_1);
      sourceInformationMarkerEnd($composer_1);
      tmp = tmp0.p41_1;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function surfaceColorAtElevation(_this__u8e3s4, elevation) {
    _init_properties_ColorScheme_kt__xhtsty();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (equals(elevation, tmp$ret$0))
      return _this__u8e3s4.ucz();
    // Inline function 'kotlin.math.ln' call
    var x = _Dp___get_value__impl__geb1vb(elevation) + 1;
    var alpha = (4.5 * Math.log(x) + 2.0) / 100.0;
    return compositeOver(Color__copy$default_impl_ectz3s(_this__u8e3s4.yfl(), alpha), _this__u8e3s4.ucz());
  }
  function get_DisabledAlpha() {
    return DisabledAlpha;
  }
  var DisabledAlpha;
  function contentColorFor(_this__u8e3s4, backgroundColor) {
    _init_properties_ColorScheme_kt__xhtsty();
    return equals(backgroundColor, _this__u8e3s4.lcz()) ? _this__u8e3s4.ycz() : equals(backgroundColor, _this__u8e3s4.pcz()) ? _this__u8e3s4.ad0() : equals(backgroundColor, _this__u8e3s4.mfl()) ? _this__u8e3s4.ofl() : equals(backgroundColor, _this__u8e3s4.k4z()) ? _this__u8e3s4.cd0() : equals(backgroundColor, _this__u8e3s4.wcz()) ? _this__u8e3s4.gd0() : equals(backgroundColor, _this__u8e3s4.ucz()) ? _this__u8e3s4.ed0() : equals(backgroundColor, _this__u8e3s4.ufl()) ? _this__u8e3s4.wfl() : equals(backgroundColor, _this__u8e3s4.cfl()) ? _this__u8e3s4.efl() : equals(backgroundColor, _this__u8e3s4.ifl()) ? _this__u8e3s4.kfl() : equals(backgroundColor, _this__u8e3s4.qfl()) ? _this__u8e3s4.sfl() : equals(backgroundColor, _this__u8e3s4.efm()) ? _this__u8e3s4.gfm() : equals(backgroundColor, _this__u8e3s4.afm()) ? _this__u8e3s4.cfm() : Companion_getInstance_2().k42_1;
  }
  function updateColorSchemeFrom(_this__u8e3s4, other) {
    _init_properties_ColorScheme_kt__xhtsty();
    _this__u8e3s4.kcz(other.lcz());
    _this__u8e3s4.xcz(other.ycz());
    _this__u8e3s4.bfl(other.cfl());
    _this__u8e3s4.dfl(other.efl());
    _this__u8e3s4.ffl(other.gfl());
    _this__u8e3s4.ocz(other.pcz());
    _this__u8e3s4.zcz(other.ad0());
    _this__u8e3s4.hfl(other.ifl());
    _this__u8e3s4.jfl(other.kfl());
    _this__u8e3s4.lfl(other.mfl());
    _this__u8e3s4.nfl(other.ofl());
    _this__u8e3s4.pfl(other.qfl());
    _this__u8e3s4.rfl(other.sfl());
    _this__u8e3s4.scz(other.k4z());
    _this__u8e3s4.bd0(other.cd0());
    _this__u8e3s4.tcz(other.ucz());
    _this__u8e3s4.dd0(other.ed0());
    _this__u8e3s4.tfl(other.ufl());
    _this__u8e3s4.vfl(other.wfl());
    _this__u8e3s4.xfl(other.yfl());
    _this__u8e3s4.zfl(other.afm());
    _this__u8e3s4.bfm(other.cfm());
    _this__u8e3s4.vcz(other.wcz());
    _this__u8e3s4.fd0(other.gd0());
    _this__u8e3s4.dfm(other.efm());
    _this__u8e3s4.ffm(other.gfm());
    _this__u8e3s4.hfm(other.ifm());
    _this__u8e3s4.jfm(other.kfm());
    _this__u8e3s4.lfm(other.mfm());
  }
  function LocalColorScheme$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return lightColorScheme();
  }
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.lcz());
    }, function (receiver, value) {
      return receiver.kcz(value.p41_1);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.lcz());
    }, function (receiver, value) {
      return receiver.kcz(value.p41_1);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ycz());
    }, function (receiver, value) {
      return receiver.xcz(value.p41_1);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ycz());
    }, function (receiver, value) {
      return receiver.xcz(value.p41_1);
    });
  }
  function primaryContainer$factory() {
    return getPropertyCallableRef('primaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.cfl());
    }, function (receiver, value) {
      return receiver.bfl(value.p41_1);
    });
  }
  function primaryContainer$factory_0() {
    return getPropertyCallableRef('primaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.cfl());
    }, function (receiver, value) {
      return receiver.bfl(value.p41_1);
    });
  }
  function onPrimaryContainer$factory() {
    return getPropertyCallableRef('onPrimaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.efl());
    }, function (receiver, value) {
      return receiver.dfl(value.p41_1);
    });
  }
  function onPrimaryContainer$factory_0() {
    return getPropertyCallableRef('onPrimaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.efl());
    }, function (receiver, value) {
      return receiver.dfl(value.p41_1);
    });
  }
  function inversePrimary$factory() {
    return getPropertyCallableRef('inversePrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.gfl());
    }, function (receiver, value) {
      return receiver.ffl(value.p41_1);
    });
  }
  function inversePrimary$factory_0() {
    return getPropertyCallableRef('inversePrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.gfl());
    }, function (receiver, value) {
      return receiver.ffl(value.p41_1);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.pcz());
    }, function (receiver, value) {
      return receiver.ocz(value.p41_1);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.pcz());
    }, function (receiver, value) {
      return receiver.ocz(value.p41_1);
    });
  }
  function onSecondary$factory() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ad0());
    }, function (receiver, value) {
      return receiver.zcz(value.p41_1);
    });
  }
  function onSecondary$factory_0() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ad0());
    }, function (receiver, value) {
      return receiver.zcz(value.p41_1);
    });
  }
  function secondaryContainer$factory() {
    return getPropertyCallableRef('secondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ifl());
    }, function (receiver, value) {
      return receiver.hfl(value.p41_1);
    });
  }
  function secondaryContainer$factory_0() {
    return getPropertyCallableRef('secondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ifl());
    }, function (receiver, value) {
      return receiver.hfl(value.p41_1);
    });
  }
  function onSecondaryContainer$factory() {
    return getPropertyCallableRef('onSecondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.kfl());
    }, function (receiver, value) {
      return receiver.jfl(value.p41_1);
    });
  }
  function onSecondaryContainer$factory_0() {
    return getPropertyCallableRef('onSecondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.kfl());
    }, function (receiver, value) {
      return receiver.jfl(value.p41_1);
    });
  }
  function tertiary$factory() {
    return getPropertyCallableRef('tertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.mfl());
    }, function (receiver, value) {
      return receiver.lfl(value.p41_1);
    });
  }
  function tertiary$factory_0() {
    return getPropertyCallableRef('tertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.mfl());
    }, function (receiver, value) {
      return receiver.lfl(value.p41_1);
    });
  }
  function onTertiary$factory() {
    return getPropertyCallableRef('onTertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ofl());
    }, function (receiver, value) {
      return receiver.nfl(value.p41_1);
    });
  }
  function onTertiary$factory_0() {
    return getPropertyCallableRef('onTertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ofl());
    }, function (receiver, value) {
      return receiver.nfl(value.p41_1);
    });
  }
  function tertiaryContainer$factory() {
    return getPropertyCallableRef('tertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.qfl());
    }, function (receiver, value) {
      return receiver.pfl(value.p41_1);
    });
  }
  function tertiaryContainer$factory_0() {
    return getPropertyCallableRef('tertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.qfl());
    }, function (receiver, value) {
      return receiver.pfl(value.p41_1);
    });
  }
  function onTertiaryContainer$factory() {
    return getPropertyCallableRef('onTertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.sfl());
    }, function (receiver, value) {
      return receiver.rfl(value.p41_1);
    });
  }
  function onTertiaryContainer$factory_0() {
    return getPropertyCallableRef('onTertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.sfl());
    }, function (receiver, value) {
      return receiver.rfl(value.p41_1);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.k4z());
    }, function (receiver, value) {
      return receiver.scz(value.p41_1);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.k4z());
    }, function (receiver, value) {
      return receiver.scz(value.p41_1);
    });
  }
  function onBackground$factory() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.cd0());
    }, function (receiver, value) {
      return receiver.bd0(value.p41_1);
    });
  }
  function onBackground$factory_0() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.cd0());
    }, function (receiver, value) {
      return receiver.bd0(value.p41_1);
    });
  }
  function surface$factory() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ucz());
    }, function (receiver, value) {
      return receiver.tcz(value.p41_1);
    });
  }
  function surface$factory_0() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ucz());
    }, function (receiver, value) {
      return receiver.tcz(value.p41_1);
    });
  }
  function onSurface$factory() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ed0());
    }, function (receiver, value) {
      return receiver.dd0(value.p41_1);
    });
  }
  function onSurface$factory_0() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ed0());
    }, function (receiver, value) {
      return receiver.dd0(value.p41_1);
    });
  }
  function surfaceVariant$factory() {
    return getPropertyCallableRef('surfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ufl());
    }, function (receiver, value) {
      return receiver.tfl(value.p41_1);
    });
  }
  function surfaceVariant$factory_0() {
    return getPropertyCallableRef('surfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ufl());
    }, function (receiver, value) {
      return receiver.tfl(value.p41_1);
    });
  }
  function onSurfaceVariant$factory() {
    return getPropertyCallableRef('onSurfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wfl());
    }, function (receiver, value) {
      return receiver.vfl(value.p41_1);
    });
  }
  function onSurfaceVariant$factory_0() {
    return getPropertyCallableRef('onSurfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wfl());
    }, function (receiver, value) {
      return receiver.vfl(value.p41_1);
    });
  }
  function surfaceTint$factory() {
    return getPropertyCallableRef('surfaceTint', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.yfl());
    }, function (receiver, value) {
      return receiver.xfl(value.p41_1);
    });
  }
  function surfaceTint$factory_0() {
    return getPropertyCallableRef('surfaceTint', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.yfl());
    }, function (receiver, value) {
      return receiver.xfl(value.p41_1);
    });
  }
  function inverseSurface$factory() {
    return getPropertyCallableRef('inverseSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.afm());
    }, function (receiver, value) {
      return receiver.zfl(value.p41_1);
    });
  }
  function inverseSurface$factory_0() {
    return getPropertyCallableRef('inverseSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.afm());
    }, function (receiver, value) {
      return receiver.zfl(value.p41_1);
    });
  }
  function inverseOnSurface$factory() {
    return getPropertyCallableRef('inverseOnSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.cfm());
    }, function (receiver, value) {
      return receiver.bfm(value.p41_1);
    });
  }
  function inverseOnSurface$factory_0() {
    return getPropertyCallableRef('inverseOnSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.cfm());
    }, function (receiver, value) {
      return receiver.bfm(value.p41_1);
    });
  }
  function error$factory() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wcz());
    }, function (receiver, value) {
      return receiver.vcz(value.p41_1);
    });
  }
  function error$factory_0() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wcz());
    }, function (receiver, value) {
      return receiver.vcz(value.p41_1);
    });
  }
  function onError$factory() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.gd0());
    }, function (receiver, value) {
      return receiver.fd0(value.p41_1);
    });
  }
  function onError$factory_0() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.gd0());
    }, function (receiver, value) {
      return receiver.fd0(value.p41_1);
    });
  }
  function errorContainer$factory() {
    return getPropertyCallableRef('errorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.efm());
    }, function (receiver, value) {
      return receiver.dfm(value.p41_1);
    });
  }
  function errorContainer$factory_0() {
    return getPropertyCallableRef('errorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.efm());
    }, function (receiver, value) {
      return receiver.dfm(value.p41_1);
    });
  }
  function onErrorContainer$factory() {
    return getPropertyCallableRef('onErrorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.gfm());
    }, function (receiver, value) {
      return receiver.ffm(value.p41_1);
    });
  }
  function onErrorContainer$factory_0() {
    return getPropertyCallableRef('onErrorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.gfm());
    }, function (receiver, value) {
      return receiver.ffm(value.p41_1);
    });
  }
  function outline$factory() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ifm());
    }, function (receiver, value) {
      return receiver.hfm(value.p41_1);
    });
  }
  function outline$factory_0() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ifm());
    }, function (receiver, value) {
      return receiver.hfm(value.p41_1);
    });
  }
  function outlineVariant$factory() {
    return getPropertyCallableRef('outlineVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.kfm());
    }, function (receiver, value) {
      return receiver.jfm(value.p41_1);
    });
  }
  function outlineVariant$factory_0() {
    return getPropertyCallableRef('outlineVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.kfm());
    }, function (receiver, value) {
      return receiver.jfm(value.p41_1);
    });
  }
  function scrim$factory() {
    return getPropertyCallableRef('scrim', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.mfm());
    }, function (receiver, value) {
      return receiver.lfm(value.p41_1);
    });
  }
  function scrim$factory_0() {
    return getPropertyCallableRef('scrim', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.mfm());
    }, function (receiver, value) {
      return receiver.lfm(value.p41_1);
    });
  }
  var properties_initialized_ColorScheme_kt_ox8mco;
  function _init_properties_ColorScheme_kt__xhtsty() {
    if (!properties_initialized_ColorScheme_kt_ox8mco) {
      properties_initialized_ColorScheme_kt_ox8mco = true;
      LocalColorScheme = staticCompositionLocalOf(LocalColorScheme$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance_2().y41_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (!properties_initialized_ContentColor_kt_sc8rw) {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  function get_OutgoingSpecEasing() {
    _init_properties_Elevation_kt__80i8t1();
    return OutgoingSpecEasing;
  }
  var OutgoingSpecEasing;
  function get_DefaultIncomingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultIncomingSpec;
  }
  var DefaultIncomingSpec;
  function get_DefaultOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultOutgoingSpec;
  }
  var DefaultOutgoingSpec;
  function get_HoveredOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return HoveredOutgoingSpec;
  }
  var HoveredOutgoingSpec;
  function animateElevation(_this__u8e3s4, target, from, to, $completion) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    var tmp = new $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function ElevationDefaults() {
  }
  protoOf(ElevationDefaults).ifp = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultIncomingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultIncomingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_DefaultIncomingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultIncomingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(ElevationDefaults).jfp = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultOutgoingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultOutgoingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_HoveredOutgoingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultOutgoingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  var ElevationDefaults_instance;
  function ElevationDefaults_getInstance() {
    return ElevationDefaults_instance;
  }
  function $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dfp_1 = _this__u8e3s4;
    this.efp_1 = target;
    this.ffp_1 = from;
    this.gfp_1 = to;
  }
  protoOf($animateElevationCOROUTINE$0).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            this.hfp_1 = !(this.gfp_1 == null) ? ElevationDefaults_instance.ifp(this.gfp_1) : !(this.ffp_1 == null) ? ElevationDefaults_instance.jfp(this.ffp_1) : null;
            if (!(this.hfp_1 == null)) {
              this.hb_1 = 2;
              suspendResult = this.dfp_1.c8p(new Dp(this.efp_1), this.hfp_1, VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 1;
              suspendResult = this.dfp_1.d8p(new Dp(this.efp_1), this);
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
  var properties_initialized_Elevation_kt_70s6ab;
  function _init_properties_Elevation_kt__80i8t1() {
    if (!properties_initialized_Elevation_kt_70s6ab) {
      properties_initialized_Elevation_kt_70s6ab = true;
      OutgoingSpecEasing = new CubicBezierEasing(0.4, 0.0, 0.6, 1.0);
      DefaultIncomingSpec = new TweenSpec(120, VOID, get_FastOutSlowInEasing());
      DefaultOutgoingSpec = new TweenSpec(150, VOID, get_OutgoingSpecEasing());
      HoveredOutgoingSpec = new TweenSpec(120, VOID, get_OutgoingSpecEasing());
    }
  }
  function get_LocalMinimumInteractiveComponentEnforcement() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return LocalMinimumInteractiveComponentEnforcement;
  }
  var LocalMinimumInteractiveComponentEnforcement;
  var LocalMinimumTouchTargetEnforcement;
  function get_minimumInteractiveComponentSize() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return minimumInteractiveComponentSize;
  }
  var minimumInteractiveComponentSize;
  function minimumInteractiveComponentSize_0(_this__u8e3s4) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = minimumInteractiveComponentSize$lambda;
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed$composable(_this__u8e3s4, tmp_0, minimumInteractiveComponentSize$lambda_0);
  }
  function MinimumInteractiveComponentSizeModifier$measure$lambda($width, $placeable, $height) {
    return function ($this$layout) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = ($width - $placeable.m5l_1 | 0) / 2.0;
      var centerX = roundToInt(this_0);
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = ($height - $placeable.n5l_1 | 0) / 2.0;
      var centerY = roundToInt(this_1);
      $this$layout.b72($placeable, centerX, centerY);
      return Unit_instance;
    };
  }
  function MinimumInteractiveComponentSizeModifier(size) {
    this.kfp_1 = size;
  }
  protoOf(MinimumInteractiveComponentSizeModifier).k5l = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.l5l(constraints);
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = placeable.m5l_1;
    var b = _this__u8e3s4.k3b(_DpSize___get_width__impl__o3d5gt(this.kfp_1));
    var width = Math.max(a, b);
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_0 = placeable.n5l_1;
    var b_0 = _this__u8e3s4.k3b(_DpSize___get_height__impl__5xueo2(this.kfp_1));
    var height = Math.max(a_0, b_0);
    return _this__u8e3s4.s5l(width, height, VOID, MinimumInteractiveComponentSizeModifier$measure$lambda(width, placeable, height));
  };
  protoOf(MinimumInteractiveComponentSizeModifier).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof MinimumInteractiveComponentSizeModifier ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.kfp_1, otherModifier.kfp_1);
  };
  protoOf(MinimumInteractiveComponentSizeModifier).hashCode = function () {
    return DpSize__hashCode_impl_jvpgaj(this.kfp_1);
  };
  function LocalMinimumInteractiveComponentEnforcement$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return true;
  }
  function minimumInteractiveComponentSize$lambda($this$null) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    // Inline function 'androidx.compose.material3.minimumInteractiveComponentSize.<anonymous>' call
    $this$null.j5r_1 = 'minimumInteractiveComponentSize';
    $this$null.l5r_1.p5r('README', 'Reserves at least 48.dp in size to disambiguate touch interactions if the element would measure smaller');
    return Unit_instance;
  }
  function minimumInteractiveComponentSize$lambda_0($this$composed, $composer, $changed) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    var $composer_0 = $composer;
    $composer_0.f1x(279503903);
    sourceInformation($composer_0, 'C55@2553L7:InteractiveComponentSize.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(279503903, $changed, -1, 'androidx.compose.material3.minimumInteractiveComponentSize.<anonymous> (InteractiveComponentSize.kt:54)');
    }
    var tmp;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalMinimumInteractiveComponentEnforcement();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (tmp0) {
      tmp = new MinimumInteractiveComponentSizeModifier(get_minimumInteractiveComponentSize());
    } else {
      tmp = Companion_instance;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  var properties_initialized_InteractiveComponentSize_kt_3r58bm;
  function _init_properties_InteractiveComponentSize_kt__58cq2s() {
    if (!properties_initialized_InteractiveComponentSize_kt_3r58bm) {
      properties_initialized_InteractiveComponentSize_kt_3r58bm = true;
      LocalMinimumInteractiveComponentEnforcement = staticCompositionLocalOf(LocalMinimumInteractiveComponentEnforcement$lambda);
      LocalMinimumTouchTargetEnforcement = get_LocalMinimumInteractiveComponentEnforcement();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp = _Dp___init__impl__ms3zkb(48);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
      minimumInteractiveComponentSize = DpSize(tmp, tmp$ret$1);
    }
  }
  function MappedInteractionSource$interactions$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation) {
    this.tfp_1 = $$this$unsafeFlow;
    this.ufp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MappedInteractionSource$interactions$o$collect$slambda).fa3 = function (value, $completion) {
    var tmp = this.ga3(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MappedInteractionSource$interactions$o$collect$slambda).fc = function (p1, $completion) {
    return this.fa3((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MappedInteractionSource$interactions$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.wfp_1 = this.tfp_1;
            var tmp_1 = this;
            tmp_1.xfp_1 = this.vfp_1;
            this.hb_1 = 1;
            var interaction = this.xfp_1;
            var tmp_2;
            if (interaction instanceof Press) {
              var mappedPress = mapPress(this.ufp_1, interaction);
              this.ufp_1.zfp_1.r2(interaction, mappedPress);
              tmp_2 = mappedPress;
            } else {
              if (interaction instanceof Cancel) {
                var mappedPress_0 = this.ufp_1.zfp_1.v2(interaction.sba_1);
                var tmp_3;
                if (mappedPress_0 == null) {
                  tmp_3 = interaction;
                } else {
                  tmp_3 = new Cancel(mappedPress_0);
                }
                tmp_2 = tmp_3;
              } else {
                if (interaction instanceof Release) {
                  var mappedPress_1 = this.ufp_1.zfp_1.v2(interaction.qba_1);
                  var tmp_4;
                  if (mappedPress_1 == null) {
                    tmp_4 = interaction;
                  } else {
                    tmp_4 = new Release(mappedPress_1);
                  }
                  tmp_2 = tmp_4;
                } else {
                  tmp_2 = interaction;
                }
              }
            }

            suspendResult = this.wfp_1.t13(tmp_2, this);
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
  protoOf(MappedInteractionSource$interactions$o$collect$slambda).ga3 = function (value, completion) {
    var i = new MappedInteractionSource$interactions$o$collect$slambda(this.tfp_1, this.ufp_1, completion);
    i.vfp_1 = value;
    return i;
  };
  function MappedInteractionSource$interactions$o$collect$slambda_0($$this$unsafeFlow, this$0, resultContinuation) {
    var i = new MappedInteractionSource$interactions$o$collect$slambda($$this$unsafeFlow, this$0, resultContinuation);
    var l = function (value, $completion) {
      return i.fa3(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jfq_1 = _this__u8e3s4;
    this.kfq_1 = collector;
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
            tmp_0.lfq_1 = this.kfq_1;
            this.hb_1 = 1;
            var tmp_1 = MappedInteractionSource$interactions$o$collect$slambda_0(this.lfq_1, this.jfq_1.nfq_1, null);
            suspendResult = this.jfq_1.mfq_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_1), this);
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
  function mapPress($this, press) {
    return new Press(Offset__minus_impl_hoj2c0(press.oba_1, $this.yfp_1));
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.ofq_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).t13 = function (value, $completion) {
    return this.ofq_1(value, $completion);
  };
  function _no_name_provided__qut3iv($this, this$0) {
    this.mfq_1 = $this;
    this.nfq_1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv).ua3 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv).g13 = function (collector, $completion) {
    return this.ua3(collector, $completion);
  };
  function MappedInteractionSource(underlyingInteractionSource, delta) {
    this.yfp_1 = delta;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.zfp_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = underlyingInteractionSource.oa2();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp_0.afq_1 = new _no_name_provided__qut3iv(this_0, this);
  }
  protoOf(MappedInteractionSource).oa2 = function () {
    return this.afq_1;
  };
  function get_DefaultRippleAlpha() {
    _init_properties_MaterialTheme_kt__ccmets();
    return DefaultRippleAlpha;
  }
  var DefaultRippleAlpha;
  function MaterialTheme() {
    this.gfh_1 = 0;
  }
  protoOf(MaterialTheme).wfj = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1686668101, 'C($get-colorScheme$$composable)95@4170L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1686668101, $changed, -1, 'androidx.compose.material3.MaterialTheme.$get-colorScheme$$composable (MaterialTheme.kt:95)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalColorScheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).hfh = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 800335301, 'C($get-typography$$composable)103@4394L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(800335301, $changed, -1, 'androidx.compose.material3.MaterialTheme.$get-typography$$composable (MaterialTheme.kt:103)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalTypography();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).pfq = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -394650369, 'C($get-shapes$$composable)111@4602L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-394650369, $changed, -1, 'androidx.compose.material3.MaterialTheme.$get-shapes$$composable (MaterialTheme.kt:111)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalShapes();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    return MaterialTheme_instance;
  }
  function MaterialTheme$composable(colorScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1389881873);
    sourceInformation($composer_0, 'C(MaterialTheme$composable)P(!1,2,3)58@2824L11,59@2872L6,60@2923L10,*63@3007L194,70@3286L16,71@3329L50,72@3384L417:MaterialTheme.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.t1z(colorScheme_0._v) : false) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.t1z(shapes_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.t1z(typography_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_instance.wfj($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          shapes_0._v = MaterialTheme_instance.pfq($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          typography_0._v = MaterialTheme_instance.hfh($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-1389881873, $dirty, -1, 'androidx.compose.material3.MaterialTheme$composable (MaterialTheme.kt:57)');
      }
      // Inline function 'kotlin.apply' call
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
      if (false ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>' call
        var value = colorScheme_0._v.ofm();
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>' call
      updateColorSchemeFrom(tmp0, colorScheme_0._v);
      var rememberedColorScheme = tmp0;
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var rippleIndication = rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
      var selectionColors = rememberTextSelectionColors$composable(rememberedColorScheme, $composer_0, 0);
      var tmp_2 = [get_LocalColorScheme().r2e(rememberedColorScheme), get_LocalIndication().r2e(rippleIndication), get_LocalRippleTheme().r2e(MaterialRippleTheme_instance), get_LocalShapes().r2e(shapes_0._v), get_LocalTextSelectionColors().r2e(selectionColors), get_LocalTypography().r2e(typography_0._v)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1066563262, true, MaterialTheme$composable$lambda(typography_0, content, $dirty));
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
      var tmp_4;
      if (invalid ? true : it_0 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_2.s1z(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_2.h1x();
      CompositionLocalProvider$composable(tmp_2, tmp0_0, $composer_0, 48);
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
      tmp0_safe_receiver.w2e(MaterialTheme$composable$lambda_0(colorScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function rememberTextSelectionColors$composable(colorScheme, $composer, $changed) {
    _init_properties_MaterialTheme_kt__ccmets();
    var $composer_0 = $composer;
    $composer_0.f1x(339352566);
    sourceInformation($composer_0, 'C(rememberTextSelectionColors$composable)134@5274L198:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(339352566, $changed, -1, 'androidx.compose.material3.rememberTextSelectionColors$composable (MaterialTheme.kt:132)');
    }
    var primaryColor = colorScheme.lcz();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var key1 = new Color(primaryColor);
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
    if (invalid ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.material3.rememberTextSelectionColors$composable.<anonymous>' call
      var value = new TextSelectionColors(primaryColor, Color__copy$default_impl_ectz3s(primaryColor, 0.4));
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function MaterialRippleTheme() {
  }
  protoOf(MaterialRippleTheme).ecu = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1841182731);
    sourceInformation($composer_0, 'C(defaultColor$composable)117@4743L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1841182731, $changed, -1, 'androidx.compose.material3.MaterialRippleTheme.defaultColor$composable (MaterialTheme.kt:117)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.p41_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  };
  protoOf(MaterialRippleTheme).fcu = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1881832318);
    sourceInformation($composer_0, 'C(rippleAlpha$composable):MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1881832318, $changed, -1, 'androidx.compose.material3.MaterialRippleTheme.rippleAlpha$composable (MaterialTheme.kt:120)');
    }
    var tmp0 = get_DefaultRippleAlpha();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  var MaterialRippleTheme_instance;
  function MaterialRippleTheme_getInstance() {
    return MaterialRippleTheme_instance;
  }
  function MaterialTheme$composable$lambda($typography, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C80@3730L65:MaterialTheme.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1066563262, $changed, -1, 'androidx.compose.material3.MaterialTheme$composable.<anonymous> (MaterialTheme.kt:79)');
        }
        ProvideTextStyle$composable($typography._v.zfg_1, $content, $composer_0, 112 & $$dirty >> 6);
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
  function MaterialTheme$composable$lambda_0($colorScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme$composable($colorScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_MaterialTheme_kt_8j16em;
  function _init_properties_MaterialTheme_kt__ccmets() {
    if (!properties_initialized_MaterialTheme_kt_8j16em) {
      properties_initialized_MaterialTheme_kt_8j16em = true;
      DefaultRippleAlpha = new RippleAlpha(0.16, 0.12, 0.08, 0.12);
    }
  }
  function get_NavigationBarHeight() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return NavigationBarHeight;
  }
  var NavigationBarHeight;
  function get_NavigationBarItemHorizontalPadding() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return NavigationBarItemHorizontalPadding;
  }
  var NavigationBarItemHorizontalPadding;
  function get_NavigationBarItemVerticalPadding() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return NavigationBarItemVerticalPadding;
  }
  var NavigationBarItemVerticalPadding;
  function get_IndicatorHorizontalPadding() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return IndicatorHorizontalPadding;
  }
  var IndicatorHorizontalPadding;
  function get_IndicatorVerticalPadding() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return IndicatorVerticalPadding;
  }
  var IndicatorVerticalPadding;
  function get_IndicatorVerticalOffset() {
    _init_properties_NavigationBar_kt__bsbxjn();
    return IndicatorVerticalOffset;
  }
  var IndicatorVerticalOffset;
  function NavigationBar$composable(modifier, containerColor, contentColor, tonalElevation, windowInsets, content, $composer, $changed, $default) {
    _init_properties_NavigationBar_kt__bsbxjn();
    var modifier_0 = {_v: modifier};
    var containerColor_0 = {_v: new Color(containerColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var tonalElevation_0 = {_v: new Dp(tonalElevation)};
    var windowInsets_0 = {_v: windowInsets};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1656635756);
    sourceInformation($composer_0, 'C(NavigationBar$composable)P(3,0:c#ui.graphics.Color,2:c#ui.graphics.Color,4:c#ui.unit.Dp,5)100@4715L14,101@4771L11,103@4929L12,106@4996L503:NavigationBar.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(containerColor_0._v.p41_1))) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.p41_1))) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.w1z(_Dp___get_value__impl__geb1vb(tonalElevation_0._v.z3b_1)) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.t1z(windowInsets_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          containerColor_0._v = new Color(NavigationBarDefaults_getInstance().sfq($composer_0, 6));
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          contentColor_0._v = new Color(contentColorFor(MaterialTheme_instance.wfj($composer_0, 6), containerColor_0._v.p41_1));
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          tonalElevation_0._v = new Dp(NavigationBarDefaults_getInstance().qfq_1);
        }
        if (!(($default & 16) === 0)) {
          windowInsets_0._v = NavigationBarDefaults_getInstance().tfq($composer_0, 6);
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-1656635756, $dirty, -1, 'androidx.compose.material3.NavigationBar$composable (NavigationBar.kt:98)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = containerColor_0._v;
      var tmp_1 = contentColor_0._v;
      var tmp_2 = tonalElevation_0._v;
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.NavigationBar$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 105663120, true, NavigationBar$composable$lambda(windowInsets_0, $dirty, content));
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
      var tmp_5;
      if (invalid ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationBar$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.s1z(value);
        tmp_5 = value;
      } else {
        tmp_5 = it;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.h1x();
      Surface$composable_0(tmp, null, tmp_0.p41_1, tmp_1.p41_1, tmp_2.z3b_1, tmp_3, null, tmp0, $composer_0, 12582912 | 14 & $dirty | 896 & $dirty << 3 | 7168 & $dirty << 3 | 57344 & $dirty << 3, 98);
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
      tmp0_safe_receiver.w2e(NavigationBar$composable$lambda_0(modifier_0, containerColor_0, contentColor_0, tonalElevation_0, windowInsets_0, content, $changed, $default));
    }
  }
  function NavigationBarItem$composable(_this__u8e3s4, selected, onClick, icon, modifier, enabled, label, alwaysShowLabel, colors, interactionSource, $composer, $changed, $default) {
    _init_properties_NavigationBar_kt__bsbxjn();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var label_0 = {_v: label};
    var alwaysShowLabel_0 = {_v: alwaysShowLabel};
    var colors_0 = {_v: colors};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-43162545);
    sourceInformation($composer_0, 'C(NavigationBarItem$composable)P(8,7,3,6,2,5)167@7728L8,168@7788L39,189@8761L30,202@9139L52,191@8797L2501:NavigationBar.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1z(selected) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(onClick) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(icon) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.u1z(enabled_0._v) ? 131072 : 65536);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1z(label_0._v) ? 1048576 : 524288);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.u1z(alwaysShowLabel_0._v) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.t1z(colors_0._v) : false) ? 67108864 : 33554432);
    if (($changed & 1879048192) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.t1z(interactionSource_0._v) : false) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 8) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 16) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 32) === 0)) {
          label_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          alwaysShowLabel_0._v = true;
        }
        if (!(($default & 128) === 0)) {
          var tmp = NavigationBarItemDefaults_instance;
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp.vfq(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 12582912, 127);
          $dirty = $dirty & -234881025;
        }
        if (!(($default & 256) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.f1x(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp_6;
          if (false ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>' call
            var value = funMutableInteractionSource();
            $composer_1.s1z(value);
            tmp_6 = value;
          } else {
            tmp_6 = it;
          }
          var tmp_7 = tmp_6;
          var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
          $composer_1.h1x();
          interactionSource_0._v = tmp0;
          $dirty = $dirty & -1879048193;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 128) === 0))
          $dirty = $dirty & -234881025;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -1879048193;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-43162545, $dirty, -1, 'androidx.compose.material3.NavigationBarItem$composable (NavigationBar.kt:159)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, -1419576100, true, NavigationBarItem$composable$lambda_1(colors_0, selected, enabled_0, $dirty, label_0, alwaysShowLabel_0, icon));
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
      var tmp_9;
      if (invalid ? true : it_0 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_2.s1z(value_0);
        tmp_9 = value_0;
      } else {
        tmp_9 = it_0;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_2.h1x();
      var styledIcon = tmp0_0;
      var tmp_11;
      if (label_0._v == null) {
        tmp_11 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>' call
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>' call
        var tmp_12 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_12, 1644987592, true, NavigationBarItem$composable$lambda_2(colors_0, selected, enabled_0, $dirty, label_0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.f1x(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_3.t1z(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.r1z();
        var tmp_13;
        if (invalid_0 ? true : it_1 === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_7(dispatchReceiver_0);
          $composer_3.s1z(value_1);
          tmp_13 = value_1;
        } else {
          tmp_13 = it_1;
        }
        var tmp_14 = tmp_13;
        var tmp0_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        $composer_3.h1x();
        tmp_11 = tmp0_1;
      }
      var styledLabel = tmp_11;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_4 = $composer_0;
      $composer_4.f1x(547886695);
      sourceInformation($composer_4, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_4.r1z();
      var tmp_15;
      if (false ? true : it_2 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>' call
        var value_2 = mutableStateOf(0);
        $composer_4.s1z(value_2);
        tmp_15 = value_2;
      } else {
        tmp_15 = it_2;
      }
      var tmp_16 = tmp_15;
      var tmp0_2 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_4.h1x();
      var itemWidth$delegate = tmp0_2;
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp1_role = Companion_getInstance_3().f7x_1;
      var tmp_17 = _this__u8e3s4.d98(selectable(modifier_0._v, selected, interactionSource_0._v, null, enabled_0._v, tmp1_role, onClick), 1.0);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_5 = $composer_0;
      $composer_5.f1x(-838505973);
      sourceInformation($composer_5, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_5.t1z(itemWidth$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_5.r1z();
      var tmp_18;
      if (invalid_1 ? true : it_3 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>' call
        var value_3 = NavigationBarItem$composable$lambda_3(itemWidth$delegate);
        $composer_5.s1z(value_3);
        tmp_18 = value_3;
      } else {
        tmp_18 = it_3;
      }
      var tmp_19 = tmp_18;
      var tmp0_3 = (tmp_19 == null ? true : !(tmp_19 == null)) ? tmp_19 : THROW_CCE();
      $composer_5.h1x();
      var modifier_1 = onSizeChanged(tmp_17, tmp0_3);
      var contentAlignment = Companion_getInstance_4().h5i_1;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_0;
      $composer_6.f1x(1330882304);
      sourceInformation($composer_6, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_4().d5i_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_6, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_2 = modifier_1;
      var $changed_0 = 112 & 48 << 3;
      var modifier_3 = modifier_2;
      var $composer_7 = $composer_6;
      $composer_7.f1x(1725976829);
      sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_3 = Companion_instance;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
      var localMap = $composer_7.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_5().s6v_1;
      var skippableUpdate = materializerOf(modifier_3);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_8 = $composer_7;
      var tmp_20 = $composer_8.u1y();
      if (!isInterface(tmp_20, Applier)) {
        invalidApplier();
      }
      $composer_8.k1z();
      if ($composer_8.v1y()) {
        $composer_8.l1z(factory);
      } else {
        $composer_8.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_21;
      if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
        $this$with.s1z(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
        tmp_21 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & $changed_1 >> 3);
      $composer_8.f1x(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>' call
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -673060284, 'C207@9285L145,*216@9714L7,223@10014L120,248@11007L285:NavigationBar.kt#uh7d8r');
      var tmp_22 = selected ? 1.0 : 0.0;
      var tmp_23 = tween(100);
      var animationProgress$delegate = animateFloatAsState$composable(tmp_22, tmp_23, 0.0, null, null, $composer_10, 48, 28);
      var deltaOffset;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalDensity();
      var $composer_11 = $composer_10;
      sourceInformationMarkerStart($composer_11, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_4 = $composer_11.b20(this_0);
      sourceInformationMarkerEnd($composer_11);
      // Inline function 'kotlin.contracts.contract' call
      var indicatorWidth = tmp0_4.k3b(NavigationBarTokens_getInstance().efr_1);
      deltaOffset = Offset((NavigationBarItem$composable$lambda(itemWidth$delegate) - indicatorWidth | 0) / 2, tmp0_4.j3b(get_IndicatorVerticalOffset()));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key1 = interactionSource_0._v;
      var key2 = new Offset_0(deltaOffset);
      var $composer_12 = $composer_10;
      $composer_12.f1x(-1124426577);
      sourceInformation($composer_12, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = !!($composer_12.t1z(key1) | $composer_12.t1z(key2));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_12.r1z();
      var tmp_24;
      if (invalid_2 ? true : it_4 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>' call
        var value_4 = new MappedInteractionSource(interactionSource_0._v, deltaOffset);
        $composer_12.s1z(value_4);
        tmp_24 = value_4;
      } else {
        tmp_24 = it_4;
      }
      var tmp_25 = tmp_24;
      var tmp0_5 = (tmp_25 == null ? true : !(tmp_25 == null)) ? tmp_25 : THROW_CCE();
      $composer_12.h1x();
      var offsetInteractionSource = tmp0_5;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>' call
      var tmp_26 = $composer_10;
      var dispatchReceiver_1 = composableLambda(tmp_26, 691730997, true, NavigationBarItem$composable$lambda_4(offsetInteractionSource));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_13 = $composer_10;
      $composer_13.f1x(-838505973);
      sourceInformation($composer_13, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = $composer_13.t1z(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_13.r1z();
      var tmp_27;
      if (invalid_3 ? true : it_5 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value_5 = ComposableLambda$invoke$ref_8(dispatchReceiver_1);
        $composer_13.s1z(value_5);
        tmp_27 = value_5;
      } else {
        tmp_27 = it_5;
      }
      var tmp_28 = tmp_27;
      var tmp0_6 = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      $composer_13.h1x();
      var indicatorRipple = tmp0_6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>' call
      var tmp_29 = $composer_10;
      var dispatchReceiver_2 = composableLambda(tmp_29, -474426875, true, NavigationBarItem$composable$lambda_5(colors_0, animationProgress$delegate));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_14 = $composer_10;
      $composer_14.f1x(-838505973);
      sourceInformation($composer_14, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = $composer_14.t1z(dispatchReceiver_2);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_14.r1z();
      var tmp_30;
      if (invalid_4 ? true : it_6 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value_6 = ComposableLambda$invoke$ref_9(dispatchReceiver_2);
        $composer_14.s1z(value_6);
        tmp_30 = value_6;
      } else {
        tmp_30 = it_6;
      }
      var tmp_31 = tmp_30;
      var tmp0_7 = (tmp_31 == null ? true : !(tmp_31 == null)) ? tmp_31 : THROW_CCE();
      $composer_14.h1x();
      var indicator = tmp0_7;
      NavigationBarItemBaselineLayout$composable(indicatorRipple, indicator, styledIcon, styledLabel, alwaysShowLabel_0._v, NavigationBarItem$composable$_anonymous_$lambda$2_e2dvbj(animationProgress$delegate), $composer_10, 438 | 57344 & $dirty >> 9);
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.h1x();
      $composer_8.n1z();
      $composer_7.h1x();
      $composer_6.h1x();
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
      tmp0_safe_receiver.w2e(NavigationBarItem$composable$lambda_6(_this__u8e3s4, selected, onClick, icon, modifier_0, enabled_0, label_0, alwaysShowLabel_0, colors_0, interactionSource_0, $changed, $default));
    }
  }
  function NavigationBarDefaults() {
    NavigationBarDefaults_instance = this;
    this.qfq_1 = NavigationBarTokens_getInstance().jfr_1;
    this.rfq_1 = 0;
  }
  protoOf(NavigationBarDefaults).sfq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(2144380251);
    sourceInformation($composer_0, 'C($get-containerColor$$composable)265@11621L9:NavigationBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(2144380251, $changed, -1, 'androidx.compose.material3.NavigationBarDefaults.$get-containerColor$$composable (NavigationBar.kt:265)');
    }
    var tmp0 = toColor$composable(NavigationBarTokens_getInstance().ifr_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(NavigationBarDefaults).tfq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1009611106);
    sourceInformation($composer_0, 'C($get-windowInsets$$composable)272@11803L29:NavigationBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1009611106, $changed, -1, 'androidx.compose.material3.NavigationBarDefaults.$get-windowInsets$$composable (NavigationBar.kt:272)');
    }
    var tmp0 = only($get_systemBarsForVisualComponents$$composable_kg1zeq(Companion_instance_0, $composer_0, 6), WindowInsetsSides__plus_impl_9q9m59(Companion_getInstance_6().y9f_1, Companion_getInstance_6().v9f_1));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  var NavigationBarDefaults_instance;
  function NavigationBarDefaults_getInstance() {
    if (NavigationBarDefaults_instance == null)
      new NavigationBarDefaults();
    return NavigationBarDefaults_instance;
  }
  function NavigationBarItemColors(selectedIconColor, selectedTextColor, selectedIndicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor) {
    this.xfr_1 = selectedIconColor;
    this.yfr_1 = selectedTextColor;
    this.zfr_1 = selectedIndicatorColor;
    this.afs_1 = unselectedIconColor;
    this.bfs_1 = unselectedTextColor;
    this.cfs_1 = disabledIconColor;
    this.dfs_1 = disabledTextColor;
    this.efs_1 = 0;
  }
  protoOf(NavigationBarItemColors).ffs = function () {
    return this.zfr_1;
  };
  protoOf(NavigationBarItemColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavigationBarItemColors);
    }
    if (tmp)
      return false;
    if (!equals(this.xfr_1, other.xfr_1))
      return false;
    if (!equals(this.afs_1, other.afs_1))
      return false;
    if (!equals(this.yfr_1, other.yfr_1))
      return false;
    if (!equals(this.bfs_1, other.bfs_1))
      return false;
    if (!equals(this.zfr_1, other.zfr_1))
      return false;
    if (!equals(this.cfs_1, other.cfs_1))
      return false;
    if (!equals(this.dfs_1, other.dfs_1))
      return false;
    return true;
  };
  protoOf(NavigationBarItemColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.xfr_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.afs_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.yfr_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.bfs_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.zfr_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.cfs_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.dfs_1) | 0;
    return result;
  };
  protoOf(NavigationBarItemColors).gfs = function (selected, enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(2106888115);
    sourceInformation($composer_0, 'C(iconColor$composable)P(1)356@15817L132:NavigationBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(2106888115, $changed, -1, 'androidx.compose.material3.NavigationBarItemColors.iconColor$composable (NavigationBar.kt:350)');
    }
    var targetValue = !enabled ? this.cfs_1 : selected ? this.xfr_1 : this.afs_1;
    var tmp = tween(100);
    var tmp0 = animateColorAsState$composable(targetValue, tmp, null, null, $composer_0, 48, 12);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(NavigationBarItemColors).hfs = function (selected, enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1849171047);
    sourceInformation($composer_0, 'C(textColor$composable)P(1)375@16447L132:NavigationBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1849171047, $changed, -1, 'androidx.compose.material3.NavigationBarItemColors.textColor$composable (NavigationBar.kt:369)');
    }
    var targetValue = !enabled ? this.dfs_1 : selected ? this.yfr_1 : this.bfs_1;
    var tmp = tween(100);
    var tmp0 = animateColorAsState$composable(targetValue, tmp, null, null, $composer_0, 48, 12);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  function NavigationBarItemDefaults() {
    this.ufq_1 = 0;
  }
  protoOf(NavigationBarItemDefaults).vfq = function (selectedIconColor, selectedTextColor, indicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor, $composer, $changed, $default) {
    var selectedIconColor_0 = selectedIconColor;
    var selectedTextColor_0 = selectedTextColor;
    var indicatorColor_0 = indicatorColor;
    var unselectedIconColor_0 = unselectedIconColor;
    var unselectedTextColor_0 = unselectedTextColor;
    var disabledIconColor_0 = disabledIconColor;
    var disabledTextColor_0 = disabledTextColor;
    var $composer_0 = $composer;
    $composer_0.f1x(1265380837);
    sourceInformation($composer_0, 'C(colors$composable)P(3:c#ui.graphics.Color,4:c#ui.graphics.Color,2:c#ui.graphics.Color,5:c#ui.graphics.Color,6:c#ui.graphics.Color,0:c#ui.graphics.Color,1:c#ui.graphics.Color)294@12969L9,295@13056L9,296@13140L9,297@13226L9,298@13317L9:NavigationBar.kt#uh7d8r');
    if (!(($default & 1) === 0))
      selectedIconColor_0 = toColor$composable(NavigationBarTokens_getInstance().afr_1, $composer_0, 6);
    if (!(($default & 2) === 0))
      selectedTextColor_0 = toColor$composable(NavigationBarTokens_getInstance().ffr_1, $composer_0, 6);
    if (!(($default & 4) === 0))
      indicatorColor_0 = toColor$composable(NavigationBarTokens_getInstance().bfr_1, $composer_0, 6);
    if (!(($default & 8) === 0))
      unselectedIconColor_0 = toColor$composable(NavigationBarTokens_getInstance().sfr_1, $composer_0, 6);
    if (!(($default & 16) === 0))
      unselectedTextColor_0 = toColor$composable(NavigationBarTokens_getInstance().tfr_1, $composer_0, 6);
    if (!(($default & 32) === 0))
      disabledIconColor_0 = Color__copy$default_impl_ectz3s(unselectedIconColor_0, get_DisabledAlpha());
    if (!(($default & 64) === 0))
      disabledTextColor_0 = Color__copy$default_impl_ectz3s(unselectedTextColor_0, get_DisabledAlpha());
    if (isTraceInProgress()) {
      traceEventStart(1265380837, $changed, -1, 'androidx.compose.material3.NavigationBarItemDefaults.colors$composable (NavigationBar.kt:293)');
    }
    var tmp0 = new NavigationBarItemColors(selectedIconColor_0, selectedTextColor_0, indicatorColor_0, unselectedIconColor_0, unselectedTextColor_0, disabledIconColor_0, disabledTextColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  var NavigationBarItemDefaults_instance;
  function NavigationBarItemDefaults_getInstance() {
    return NavigationBarItemDefaults_instance;
  }
  function NavigationBarItemBaselineLayout$composable(indicatorRipple, indicator, icon, label, alwaysShowLabel, animationProgress, $composer, $changed) {
    _init_properties_NavigationBar_kt__bsbxjn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1747333026);
    sourceInformation($composer_0, 'C(NavigationBarItemBaselineLayout$composable)P(4,3,2,5)450@19353L1979,434@18867L2465:NavigationBar.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1z(indicatorRipple) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(indicator) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(icon) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(label) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.u1z(alwaysShowLabel) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.w1z(animationProgress) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-1747333026, $dirty, -1, 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable (NavigationBar.kt:426)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-1058148781);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_1.t1z(animationProgress) | $composer_1.t1z(label)) | $composer_1.t1z(alwaysShowLabel));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable.<anonymous>' call
        var value = NavigationBarItemBaselineLayout$composable$lambda(animationProgress, label, alwaysShowLabel);
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      var measurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp0);
      var modifier = null;
      var $composer_2 = $composer_0;
      $composer_2.f1x(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((2 & 2) === 0))
        modifier = Companion_instance;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_5().s6v_1;
      var skippableUpdate = materializerOf(modifier);
      var $changed_0 = 6 | 7168 & 0 << 9;
      var $composer_3 = $composer_2;
      var tmp_1 = $composer_3.u1y();
      if (!isInterface(tmp_1, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_2;
      if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
        $this$with.s1z(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
        tmp_2 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_0 >> 3);
      $composer_3.f1x(2058660585);
      // Inline function 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -2077729134, 'C435@18884L17,440@18982L50:NavigationBar.kt#uh7d8r');
      indicatorRipple($composer_4, 14 & $dirty);
      $composer_4.f1x(-2077729108);
      sourceInformation($composer_4, '437@18951L11');
      if (animationProgress > 0.0) {
        indicator($composer_4, 14 & $dirty >> 3);
      }
      $composer_4.h1x();
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_0 = layoutId(Companion_instance, 'icon');
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_5 = $composer_4;
      $composer_5.f1x(1330882304);
      sourceInformation($composer_5, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_0 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_4().d5i_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_5, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_1 = modifier_0;
      var $changed_1 = 112 & 6 << 3;
      var modifier_2 = modifier_1;
      var $composer_6 = $composer_5;
      $composer_6.f1x(1725976829);
      sourceInformation($composer_6, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_6, 0);
      var localMap_0 = $composer_6.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory_0 = Companion_getInstance_5().s6v_1;
      var skippableUpdate_0 = materializerOf(modifier_2);
      var $changed_2 = 6 | 7168 & $changed_1 << 9;
      var $composer_7 = $composer_6;
      var tmp_3 = $composer_7.u1y();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_7.k1z();
      if ($composer_7.v1y()) {
        $composer_7.l1z(factory_0);
      } else {
        $composer_7.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_7);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      var tmp_4;
      if ($this$with_0.v1y() ? true : !equals($this$with_0.r1z(), compositeKeyHash_0)) {
        $this$with_0.s1z(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).q1z(compositeKeyHash_0, block_0);
        tmp_4 = Unit_instance;
      }
      skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & $changed_2 >> 3);
      $composer_7.f1x(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable.<anonymous>.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, 1796250687, 'C440@19024L6:NavigationBar.kt#uh7d8r');
      icon($composer_9, 14 & $dirty >> 6);
      sourceInformationMarkerEnd($composer_9);
      sourceInformationMarkerEnd($composer_8);
      $composer_7.h1x();
      $composer_7.n1z();
      $composer_6.h1x();
      $composer_5.h1x();
      $composer_4.f1x(-1851901809);
      sourceInformation($composer_4, '443@19075L260');
      if (!(label == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_5 = alpha(layoutId(Companion_instance, 'label'), alwaysShowLabel ? 1.0 : animationProgress);
        // Inline function 'androidx.compose.ui.unit.Dp.div' call
        var this_0 = get_NavigationBarItemHorizontalPadding();
        var tmp$ret$9 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) / 2);
        var modifier_3 = padding_0(tmp_5, tmp$ret$9);
        var contentAlignment_0 = null;
        var propagateMinConstraints_0 = false;
        var $composer_10 = $composer_4;
        $composer_10.f1x(1330882304);
        sourceInformation($composer_10, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_3 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_10, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_4 = modifier_3;
        var $changed_3 = 112 & 0 << 3;
        var modifier_5 = modifier_4;
        var $composer_11 = $composer_10;
        $composer_11.f1x(1725976829);
        sourceInformation($composer_11, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_5 = Companion_instance;
        var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_11, 0);
        var localMap_1 = $composer_11.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_1 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_1 = materializerOf(modifier_5);
        var $changed_4 = 6 | 7168 & $changed_3 << 9;
        var $composer_12 = $composer_11;
        var tmp_6 = $composer_12.u1y();
        if (!isInterface(tmp_6, Applier)) {
          invalidApplier();
        }
        $composer_12.k1z();
        if ($composer_12.v1y()) {
          $composer_12.l1z(factory_1);
        } else {
          $composer_12.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_12);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        var tmp_7;
        if ($this$with_1.v1y() ? true : !equals($this$with_1.r1z(), compositeKeyHash_1)) {
          $this$with_1.s1z(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).q1z(compositeKeyHash_1, block_1);
          tmp_7 = Unit_instance;
        }
        skippableUpdate_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_12)), $composer_12, 112 & $changed_4 >> 3);
        $composer_12.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable.<anonymous>.<anonymous>' call
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, 1796250989, 'C448@19326L7:NavigationBar.kt#uh7d8r');
        label($composer_14, 14 & $dirty >> 9);
        sourceInformationMarkerEnd($composer_14);
        sourceInformationMarkerEnd($composer_13);
        $composer_12.h1x();
        $composer_12.n1z();
        $composer_11.h1x();
        $composer_10.h1x();
      }
      $composer_4.h1x();
      sourceInformationMarkerEnd($composer_4);
      $composer_3.h1x();
      $composer_3.n1z();
      $composer_2.h1x();
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
      tmp0_safe_receiver.w2e(NavigationBarItemBaselineLayout$composable$lambda_0(indicatorRipple, indicator, icon, label, alwaysShowLabel, animationProgress, $changed));
    }
  }
  function placeIcon(_this__u8e3s4, iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints) {
    _init_properties_NavigationBar_kt__bsbxjn();
    var width = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var height = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var iconX = (width - iconPlaceable.m5l_1 | 0) / 2 | 0;
    var iconY = (height - iconPlaceable.n5l_1 | 0) / 2 | 0;
    var rippleX = (width - indicatorRipplePlaceable.m5l_1 | 0) / 2 | 0;
    var rippleY = (height - indicatorRipplePlaceable.n5l_1 | 0) / 2 | 0;
    return _this__u8e3s4.s5l(width, height, VOID, placeIcon$lambda(indicatorPlaceable, width, height, iconPlaceable, iconX, iconY, indicatorRipplePlaceable, rippleX, rippleY));
  }
  function placeLabelAndIcon(_this__u8e3s4, labelPlaceable, iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints, alwaysShowLabel, animationProgress) {
    _init_properties_NavigationBar_kt__bsbxjn();
    var height = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var labelY = (height - labelPlaceable.n5l_1 | 0) - _this__u8e3s4.k3b(get_NavigationBarItemVerticalPadding()) | 0;
    var selectedIconY = _this__u8e3s4.k3b(get_NavigationBarItemVerticalPadding());
    var unselectedIconY = alwaysShowLabel ? selectedIconY : (height - iconPlaceable.n5l_1 | 0) / 2 | 0;
    var iconDistance = unselectedIconY - selectedIconY | 0;
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = iconDistance * (1 - animationProgress);
    var offset = roundToInt(this_0);
    var containerWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var labelX = (containerWidth - labelPlaceable.m5l_1 | 0) / 2 | 0;
    var iconX = (containerWidth - iconPlaceable.m5l_1 | 0) / 2 | 0;
    var rippleX = (containerWidth - indicatorRipplePlaceable.m5l_1 | 0) / 2 | 0;
    var rippleY = selectedIconY - _this__u8e3s4.k3b(get_IndicatorVerticalPadding()) | 0;
    return _this__u8e3s4.s5l(containerWidth, height, VOID, placeLabelAndIcon$lambda(indicatorPlaceable, containerWidth, selectedIconY, _this__u8e3s4, offset, alwaysShowLabel, animationProgress, labelPlaceable, labelX, labelY, iconPlaceable, iconX, indicatorRipplePlaceable, rippleX, rippleY));
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.ifs_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).e6z = function (_this__u8e3s4, measurables, constraints) {
    return this.ifs_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function NavigationBarItem$composable$_anonymous_$_anonymous_$lambda$0_uo7quy($iconColor$delegate) {
    _init_properties_NavigationBar_kt__bsbxjn();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('iconColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $iconColor$delegate.u2().p41_1;
  }
  function NavigationBarItem$composable$_anonymous_$_anonymous_$_anonymous_$lambda$1_vl6vxe($textColor$delegate) {
    _init_properties_NavigationBar_kt__bsbxjn();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('textColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $textColor$delegate.u2().p41_1;
  }
  function NavigationBarItem$composable$lambda($itemWidth$delegate) {
    _init_properties_NavigationBar_kt__bsbxjn();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('itemWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $itemWidth$delegate.u2();
  }
  function NavigationBarItem$composable$lambda_0($itemWidth$delegate, value) {
    _init_properties_NavigationBar_kt__bsbxjn();
    getLocalDelegateReference('itemWidth', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $itemWidth$delegate.h1a(value);
    return Unit_instance;
  }
  function NavigationBarItem$composable$_anonymous_$lambda$2_e2dvbj($animationProgress$delegate) {
    _init_properties_NavigationBar_kt__bsbxjn();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animationProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animationProgress$delegate.u2();
  }
  function NavigationBar$composable$lambda($windowInsets, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C112@5159L334:NavigationBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(105663120, $changed, -1, 'androidx.compose.material3.NavigationBar$composable.<anonymous> (NavigationBar.kt:111)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var modifier = selectableGroup(height(windowInsetsPadding(fillMaxWidth(Companion_instance), $windowInsets._v), get_NavigationBarHeight()));
        var horizontalArrangement = Arrangement_getInstance().w93(get_NavigationBarItemHorizontalPadding());
        var $changed_0 = 48 | 7168 & $$dirty >> 6;
        var modifier_0 = modifier;
        var horizontalArrangement_0 = horizontalArrangement;
        var verticalAlignment = null;
        var $composer_1 = $composer_0;
        $composer_1.f1x(-636825856);
        sourceInformation($composer_1, 'CC(Row$composable)P(2,1,3)77@3858L58,78@3921L130:Row.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_0 = Companion_instance;
        if (!((4 & 2) === 0))
          horizontalArrangement_0 = Arrangement_getInstance().d93_1;
        if (!((4 & 4) === 0))
          verticalAlignment = Companion_getInstance_4().m5i_1;
        var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement_0, verticalAlignment, $composer_1, 14 & $changed_0 >> 3 | 112 & $changed_0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_1 = modifier_0;
        var $changed_1 = 112 & $changed_0 << 3;
        var modifier_2 = modifier_1;
        var $composer_2 = $composer_1;
        $composer_2.f1x(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_2);
        var $changed_2 = 6 | 7168 & $changed_1 << 9;
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.u1y();
        if (!isInterface(tmp_0, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_1;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_1 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_2 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1568371859, 'C79@3966L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_instance, $composer_4, 6 | 112 & $changed_0 >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
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
  function NavigationBar$composable$lambda_0($modifier, $containerColor, $contentColor, $tonalElevation, $windowInsets, $content, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationBar$composable($modifier._v, $containerColor._v.p41_1, $contentColor._v.p41_1, $tonalElevation._v.z3b_1, $windowInsets._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavigationBarItem$composable$lambda$lambda($this$clearAndSetSemantics) {
    _init_properties_NavigationBar_kt__bsbxjn();
    return Unit_instance;
  }
  function NavigationBarItem$composable$lambda_1($colors, $selected, $enabled, $$dirty, $label, $alwaysShowLabel, $icon) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C171@7899L49,174@8118L185:NavigationBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1419576100, $changed, -1, 'androidx.compose.material3.NavigationBarItem$composable.<anonymous> (NavigationBar.kt:170)');
        }
        var iconColor$delegate = $colors._v.gfs($selected, $enabled._v, $composer_0, 14 & $$dirty >> 3 | 112 & $$dirty >> 12 | 896 & $$dirty >> 18);
        var clearSemantics = !($label._v == null) ? $alwaysShowLabel._v ? true : $selected : false;
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        $composer_0.f1x(-673061404);
        sourceInformation($composer_0, '174@8183L2');
        var tmp_0;
        if (clearSemantics) {
          var tmp_1 = Companion_instance;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.f1x(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp_2;
          if (false ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value = NavigationBarItem$composable$lambda$lambda;
            $composer_1.s1z(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_1.h1x();
          tmp_0 = clearAndSetSemantics(tmp_1, tmp0);
        } else {
          tmp_0 = Companion_instance;
        }
        var tmp0_group = tmp_0;
        $composer_0.h1x();
        var modifier = tmp0_group;
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_2 = $composer_0;
        $composer_2.f1x(1330882304);
        sourceInformation($composer_2, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 0 << 3;
        var modifier_1 = modifier_0;
        var $composer_3 = $composer_2;
        $composer_3.f1x(1725976829);
        sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_3, 0);
        var localMap = $composer_3.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_4 = $composer_3;
        var tmp_4 = $composer_4.u1y();
        if (!isInterface(tmp_4, Applier)) {
          invalidApplier();
        }
        $composer_4.k1z();
        if ($composer_4.v1y()) {
          $composer_4.l1z(factory);
        } else {
          $composer_4.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_5;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_5 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_4)), $composer_4, 112 & $changed_1 >> 3);
        $composer_4.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 4043223, 'C175@8215L78:NavigationBar.kt#uh7d8r');
        CompositionLocalProvider$composable([get_LocalContentColor().r2e(new Color(NavigationBarItem$composable$_anonymous_$_anonymous_$lambda$0_uo7quy(iconColor$delegate)))], $icon, $composer_6, 112 & $$dirty >> 6);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.h1x();
        $composer_4.n1z();
        $composer_3.h1x();
        $composer_2.h1x();
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp = tmp_6;
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
  function NavigationBarItem$composable$lambda$lambda_0($style, $label, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C184@8668L40:NavigationBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(2061683080, $changed, -1, 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>.<anonymous> (NavigationBar.kt:183)');
        }
        ProvideTextStyle$composable($style, $label._v, $composer_0, 112 & $$dirty >> 15);
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
  function NavigationBarItem$composable$lambda_2($colors, $selected, $enabled, $$dirty, $label) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C181@8433L10,182@8525L49,183@8587L135:NavigationBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1644987592, $changed, -1, 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous> (NavigationBar.kt:180)');
        }
        var style = fromToken_1(MaterialTheme_instance.hfh($composer_0, 6), NavigationBarTokens_getInstance().wfr_1);
        var textColor$delegate = $colors._v.hfs($selected, $enabled._v, $composer_0, 14 & $$dirty >> 3 | 112 & $$dirty >> 12 | 896 & $$dirty >> 18);
        var tmp_0 = [get_LocalContentColor().r2e(new Color(NavigationBarItem$composable$_anonymous_$_anonymous_$_anonymous_$lambda$1_vl6vxe(textColor$delegate)))];
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 2061683080, true, NavigationBarItem$composable$lambda$lambda_0(style, $label, $$dirty));
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
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
          $composer_1.s1z(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.h1x();
        CompositionLocalProvider$composable(tmp_0, tmp0, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
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
  function NavigationBarItem$composable$lambda_3($itemWidth$delegate) {
    return function (it) {
      NavigationBarItem$composable$lambda_0($itemWidth$delegate, _IntSize___get_width__impl__d9yl4o(it.p3c_1));
      return Unit_instance;
    };
  }
  function NavigationBarItem$composable$lambda_4($offsetInteractionSource) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C233@10506L9,234@10574L16,230@10351L254:NavigationBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(691730997, $changed, -1, 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous> (NavigationBar.kt:229)');
        }
        var tmp_0 = clip(layoutId(Companion_instance, 'indicatorRipple'), toShape$composable(NavigationBarTokens_getInstance().dfr_1, $composer_0, 6));
        var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
        Box$composable(indication(tmp_0, $offsetInteractionSource, rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7)), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function NavigationBarItem$composable$lambda_5($colors, $animationProgress$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C243@10941L9,238@10666L321:NavigationBar.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-474426875, $changed, -1, 'androidx.compose.material3.NavigationBarItem$composable.<anonymous>.<anonymous> (NavigationBar.kt:237)');
        }
        Box$composable(background(layoutId(Companion_instance, 'indicator'), Color__copy$default_impl_ectz3s($colors._v.ffs(), NavigationBarItem$composable$_anonymous_$lambda$2_e2dvbj($animationProgress$delegate)), toShape$composable(NavigationBarTokens_getInstance().dfr_1, $composer_0, 6)), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function NavigationBarItem$composable$lambda_6($this_NavigationBarItem$composable, $selected, $onClick, $icon, $modifier, $enabled, $label, $alwaysShowLabel, $colors, $interactionSource, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationBarItem$composable($this_NavigationBarItem$composable, $selected, $onClick, $icon, $modifier._v, $enabled._v, $label._v, $alwaysShowLabel._v, $colors._v, $interactionSource._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavigationBarItemBaselineLayout$composable$lambda($animationProgress, $label, $alwaysShowLabel) {
    return function ($this$Layout, measurables, constraints) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator = measurables.v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
          if (equals(get_layoutId(element), 'icon')) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var iconPlaceable = tmp$ret$1.l5l(constraints.e3b_1);
      var tmp = iconPlaceable.m5l_1;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var this_0 = get_IndicatorHorizontalPadding();
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) * 2);
      var totalIndicatorWidth = tmp + $this$Layout.k3b(tmp$ret$2) | 0;
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = totalIndicatorWidth * $animationProgress;
      var animatedIndicatorWidth = roundToInt(this_1);
      var tmp_0 = iconPlaceable.n5l_1;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var this_2 = get_IndicatorVerticalPadding();
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_2) * 2);
      var indicatorHeight = tmp_0 + $this$Layout.k3b(tmp$ret$4) | 0;
      var tmp$ret$6;
      $l$block_0: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator_0 = measurables.v();
        while (tmp0_iterator_0.w()) {
          var element_0 = tmp0_iterator_0.y();
          // Inline function 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
          if (equals(get_layoutId(element_0), 'indicatorRipple')) {
            tmp$ret$6 = element_0;
            break $l$block_0;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var indicatorRipplePlaceable = tmp$ret$6.l5l(Companion_getInstance_7().g3b(totalIndicatorWidth, indicatorHeight));
      var tmp$ret$8;
      $l$block_1: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_1 = measurables.v();
        while (tmp0_iterator_1.w()) {
          var element_1 = tmp0_iterator_1.y();
          // Inline function 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
          if (equals(get_layoutId(element_1), 'indicator')) {
            tmp$ret$8 = element_1;
            break $l$block_1;
          }
        }
        tmp$ret$8 = null;
      }
      var tmp0_safe_receiver = tmp$ret$8;
      var indicatorPlaceable = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l5l(Companion_getInstance_7().g3b(animatedIndicatorWidth, indicatorHeight));
      var tmp_1;
      if ($label == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$10;
        $l$block_2: {
          // Inline function 'kotlin.collections.first' call
          var tmp0_iterator_2 = measurables.v();
          while (tmp0_iterator_2.w()) {
            var element_2 = tmp0_iterator_2.y();
            // Inline function 'androidx.compose.material3.NavigationBarItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (equals(get_layoutId(element_2), 'label')) {
              tmp$ret$10 = element_2;
              break $l$block_2;
            }
          }
          throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
        }
        tmp_1 = tmp$ret$10.l5l(Constraints__copy$default_impl_f452rp(constraints.e3b_1, VOID, VOID, 0));
      }
      var labelPlaceable = tmp_1;
      var tmp_2;
      if ($label == null) {
        tmp_2 = placeIcon($this$Layout, iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints.e3b_1);
      } else {
        tmp_2 = placeLabelAndIcon($this$Layout, ensureNotNull(labelPlaceable), iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints.e3b_1, $alwaysShowLabel, $animationProgress);
      }
      return tmp_2;
    };
  }
  function NavigationBarItemBaselineLayout$composable$lambda_0($indicatorRipple, $indicator, $icon, $label, $alwaysShowLabel, $animationProgress, $$changed) {
    return function ($composer, $force) {
      NavigationBarItemBaselineLayout$composable($indicatorRipple, $indicator, $icon, $label, $alwaysShowLabel, $animationProgress, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function placeIcon$lambda($indicatorPlaceable, $width, $height, $iconPlaceable, $iconX, $iconY, $indicatorRipplePlaceable, $rippleX, $rippleY) {
    return function ($this$layout) {
      var tmp0_safe_receiver = $indicatorPlaceable;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var indicatorX = ($width - tmp0_safe_receiver.m5l_1 | 0) / 2 | 0;
        var indicatorY = ($height - tmp0_safe_receiver.n5l_1 | 0) / 2 | 0;
        $this$layout.e5r(tmp0_safe_receiver, indicatorX, indicatorY);
      }
      $this$layout.e5r($iconPlaceable, $iconX, $iconY);
      $this$layout.e5r($indicatorRipplePlaceable, $rippleX, $rippleY);
      return Unit_instance;
    };
  }
  function placeLabelAndIcon$lambda($indicatorPlaceable, $containerWidth, $selectedIconY, $this_placeLabelAndIcon, $offset, $alwaysShowLabel, $animationProgress, $labelPlaceable, $labelX, $labelY, $iconPlaceable, $iconX, $indicatorRipplePlaceable, $rippleX, $rippleY) {
    return function ($this$layout) {
      var tmp0_safe_receiver = $indicatorPlaceable;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var indicatorX = ($containerWidth - tmp0_safe_receiver.m5l_1 | 0) / 2 | 0;
        var indicatorY = $selectedIconY - $this_placeLabelAndIcon.k3b(get_IndicatorVerticalPadding()) | 0;
        $this$layout.e5r(tmp0_safe_receiver, indicatorX, indicatorY + $offset | 0);
      }
      var tmp;
      if ($alwaysShowLabel ? true : !($animationProgress === 0.0)) {
        $this$layout.e5r($labelPlaceable, $labelX, $labelY + $offset | 0);
        tmp = Unit_instance;
      }
      $this$layout.e5r($iconPlaceable, $iconX, $selectedIconY + $offset | 0);
      $this$layout.e5r($indicatorRipplePlaceable, $rippleX, $rippleY + $offset | 0);
      return Unit_instance;
    };
  }
  var properties_initialized_NavigationBar_kt_9s7nqn;
  function _init_properties_NavigationBar_kt__bsbxjn() {
    if (!properties_initialized_NavigationBar_kt_9s7nqn) {
      properties_initialized_NavigationBar_kt_9s7nqn = true;
      NavigationBarHeight = NavigationBarTokens_getInstance().kfr_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      NavigationBarItemHorizontalPadding = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      NavigationBarItemVerticalPadding = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var this_0 = NavigationBarTokens_getInstance().efr_1;
      var other = NavigationBarTokens_getInstance().nfr_1;
      var this_1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) - _Dp___get_value__impl__geb1vb(other));
      IndicatorHorizontalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) / 2);
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var this_2 = NavigationBarTokens_getInstance().cfr_1;
      var other_0 = NavigationBarTokens_getInstance().nfr_1;
      var this_3 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_2) - _Dp___get_value__impl__geb1vb(other_0));
      IndicatorVerticalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_3) / 2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      IndicatorVerticalOffset = _Dp___init__impl__ms3zkb(12);
    }
  }
  function get_NavigationRailVerticalPadding() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailVerticalPadding;
  }
  var NavigationRailVerticalPadding;
  function get_NavigationRailHeaderPadding() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailHeaderPadding;
  }
  var NavigationRailHeaderPadding;
  function get_NavigationRailItemWidth() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailItemWidth;
  }
  var NavigationRailItemWidth;
  function get_NavigationRailItemHeight() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailItemHeight;
  }
  var NavigationRailItemHeight;
  function get_NavigationRailItemVerticalPadding() {
    _init_properties_NavigationRail_kt__le76sm();
    return NavigationRailItemVerticalPadding;
  }
  var NavigationRailItemVerticalPadding;
  function get_IndicatorHorizontalPadding_0() {
    _init_properties_NavigationRail_kt__le76sm();
    return IndicatorHorizontalPadding_0;
  }
  var IndicatorHorizontalPadding_0;
  function get_IndicatorVerticalPaddingWithLabel() {
    _init_properties_NavigationRail_kt__le76sm();
    return IndicatorVerticalPaddingWithLabel;
  }
  var IndicatorVerticalPaddingWithLabel;
  function get_IndicatorVerticalPaddingNoLabel() {
    _init_properties_NavigationRail_kt__le76sm();
    return IndicatorVerticalPaddingNoLabel;
  }
  var IndicatorVerticalPaddingNoLabel;
  function NavigationRail$composable(modifier, containerColor, contentColor, header, windowInsets, content, $composer, $changed, $default) {
    _init_properties_NavigationRail_kt__le76sm();
    var modifier_0 = {_v: modifier};
    var containerColor_0 = {_v: new Color(containerColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var header_0 = {_v: header};
    var windowInsets_0 = {_v: windowInsets};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1847341275);
    sourceInformation($composer_0, 'C(NavigationRail$composable)P(4,0:c#ui.graphics.Color,2:c#ui.graphics.Color,3,5)102@4774L14,103@4816L31,105@4963L12,108@5033L748:NavigationRail.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(containerColor_0._v.p41_1))) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.p41_1))) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(header_0._v) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.t1z(windowInsets_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          containerColor_0._v = new Color(NavigationRailDefaults_instance.kfs($composer_0, 6));
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(containerColor_0._v.p41_1, $composer_0, 14 & $dirty >> 3));
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          header_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          windowInsets_0._v = NavigationRailDefaults_instance.tfq($composer_0, 6);
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-1847341275, $dirty, -1, 'androidx.compose.material3.NavigationRail$composable (NavigationRail.kt:100)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = containerColor_0._v;
      var tmp_1 = contentColor_0._v;
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.NavigationRail$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -2092683357, true, NavigationRail$composable$lambda(windowInsets_0, header_0, $dirty, content));
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
      var tmp_5;
      if (invalid ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationRail$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_1.s1z(value);
        tmp_5 = value;
      } else {
        tmp_5 = it;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.h1x();
      Surface$composable_0(tmp, null, tmp_0.p41_1, tmp_1.p41_1, tmp_2, tmp_3, null, tmp0, $composer_0, 12582912 | 14 & $dirty | 896 & $dirty << 3 | 7168 & $dirty << 3, 114);
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
      tmp0_safe_receiver.w2e(NavigationRail$composable$lambda_0(modifier_0, containerColor_0, contentColor_0, header_0, windowInsets_0, content, $changed, $default));
    }
  }
  function NavigationRailItem$composable(selected, onClick, icon, modifier, enabled, label, alwaysShowLabel, colors, interactionSource, $composer, $changed, $default) {
    _init_properties_NavigationRail_kt__le76sm();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var label_0 = {_v: label};
    var alwaysShowLabel_0 = {_v: alwaysShowLabel};
    var colors_0 = {_v: colors};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1324608958);
    sourceInformation($composer_0, 'C(NavigationRailItem$composable)P(8,7,3,6,2,5)168@7563L8,169@7623L39,190@8581L2637:NavigationRail.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.u1z(selected) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(onClick) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(icon) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.u1z(enabled_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1z(label_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.u1z(alwaysShowLabel_0._v) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.t1z(colors_0._v) : false) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.t1z(interactionSource_0._v) : false) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 8) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 16) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 32) === 0)) {
          label_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          alwaysShowLabel_0._v = true;
        }
        if (!(($default & 128) === 0)) {
          var tmp = NavigationRailItemDefaults_instance;
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp.vfq(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 12582912, 127);
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.f1x(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp_6;
          if (false ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>' call
            var value = funMutableInteractionSource();
            $composer_1.s1z(value);
            tmp_6 = value;
          } else {
            tmp_6 = it;
          }
          var tmp_7 = tmp_6;
          var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
          $composer_1.h1x();
          interactionSource_0._v = tmp0;
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(1324608958, $dirty, -1, 'androidx.compose.material3.NavigationRailItem$composable (NavigationRail.kt:160)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, -1023357515, true, NavigationRailItem$composable$lambda(colors_0, selected, enabled_0, $dirty, label_0, alwaysShowLabel_0, icon));
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
      var tmp_9;
      if (invalid ? true : it_0 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_2.s1z(value_0);
        tmp_9 = value_0;
      } else {
        tmp_9 = it_0;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_2.h1x();
      var styledIcon = tmp0_0;
      var tmp_11;
      if (label_0._v == null) {
        tmp_11 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>' call
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>' call
        var tmp_12 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_12, -105269599, true, NavigationRailItem$composable$lambda_0(colors_0, selected, enabled_0, $dirty, label_0));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.f1x(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_3.t1z(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_3.r1z();
        var tmp_13;
        if (invalid_0 ? true : it_1 === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_13(dispatchReceiver_0);
          $composer_3.s1z(value_1);
          tmp_13 = value_1;
        } else {
          tmp_13 = it_1;
        }
        var tmp_14 = tmp_13;
        var tmp0_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        $composer_3.h1x();
        tmp_11 = tmp0_1;
      }
      var styledLabel = tmp_11;
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var tmp1_role = Companion_getInstance_3().f7x_1;
      var modifier_1 = widthIn(height(selectable(modifier_0._v, selected, interactionSource_0._v, null, enabled_0._v, tmp1_role, onClick), get_NavigationRailItemHeight()), get_NavigationRailItemWidth());
      var contentAlignment = Companion_getInstance_4().h5i_1;
      var propagateMinConstraints = false;
      var $composer_4 = $composer_0;
      $composer_4.f1x(1330882304);
      sourceInformation($composer_4, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_4().d5i_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_4, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_2 = modifier_1;
      var $changed_0 = 112 & 48 << 3;
      var modifier_3 = modifier_2;
      var $composer_5 = $composer_4;
      $composer_5.f1x(1725976829);
      sourceInformation($composer_5, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_3 = Companion_instance;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_5, 0);
      var localMap = $composer_5.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_5().s6v_1;
      var skippableUpdate = materializerOf(modifier_3);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_6 = $composer_5;
      var tmp_15 = $composer_6.u1y();
      if (!isInterface(tmp_15, Applier)) {
        invalidApplier();
      }
      $composer_6.k1z();
      if ($composer_6.v1y()) {
        $composer_6.l1z(factory);
      } else {
        $composer_6.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_16;
      if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
        $this$with.s1z(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
        tmp_16 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & $changed_1 >> 3);
      $composer_6.f1x(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -2100589572, 'C204@9072L145,*213@9501L7,218@9792L120,249@10925L287:NavigationRail.kt#uh7d8r');
      var tmp_17 = selected ? 1.0 : 0.0;
      var tmp_18 = tween(150);
      var animationProgress$delegate = animateFloatAsState$composable(tmp_17, tmp_18, 0.0, null, null, $composer_8, 48, 28);
      var deltaOffset;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalDensity();
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_9.b20(this_0);
      sourceInformationMarkerEnd($composer_9);
      // Inline function 'kotlin.contracts.contract' call
      var itemWidth = tmp0_2.k3b(get_NavigationRailItemWidth());
      var indicatorWidth = tmp0_2.k3b(NavigationRailTokens_getInstance().ufs_1);
      deltaOffset = Offset((itemWidth - indicatorWidth | 0) / 2, 0.0);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key1 = interactionSource_0._v;
      var key2 = new Offset_0(deltaOffset);
      var $composer_10 = $composer_8;
      $composer_10.f1x(-1124426577);
      sourceInformation($composer_10, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = !!($composer_10.t1z(key1) | $composer_10.t1z(key2));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_10.r1z();
      var tmp_19;
      if (invalid_1 ? true : it_2 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>' call
        var value_2 = new MappedInteractionSource(interactionSource_0._v, deltaOffset);
        $composer_10.s1z(value_2);
        tmp_19 = value_2;
      } else {
        tmp_19 = it_2;
      }
      var tmp_20 = tmp_19;
      var tmp0_3 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      $composer_10.h1x();
      var offsetInteractionSource = tmp0_3;
      var tmp_21;
      if (!(label_0._v == null)) {
        $composer_8.f1x(-2100588650);
        sourceInformation($composer_8, '223@10018L9');
        var tmp0_group = toShape$composable(NavigationRailTokens_getInstance().tfs_1, $composer_8, 6);
        $composer_8.h1x();
        tmp_21 = tmp0_group;
      } else {
        $composer_8.f1x(-2100588569);
        sourceInformation($composer_8, '225@10106L9');
        var tmp1_group = toShape$composable(NavigationRailTokens_getInstance().sft_1, $composer_8, 6);
        $composer_8.h1x();
        tmp_21 = tmp1_group;
      }
      var indicatorShape = tmp_21;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>' call
      var tmp_22 = $composer_8;
      var dispatchReceiver_1 = composableLambda(tmp_22, 211026382, true, NavigationRailItem$composable$lambda_1(indicatorShape, offsetInteractionSource));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_11 = $composer_8;
      $composer_11.f1x(-838505973);
      sourceInformation($composer_11, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_11.t1z(dispatchReceiver_1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_11.r1z();
      var tmp_23;
      if (invalid_2 ? true : it_3 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_14(dispatchReceiver_1);
        $composer_11.s1z(value_3);
        tmp_23 = value_3;
      } else {
        tmp_23 = it_3;
      }
      var tmp_24 = tmp_23;
      var tmp0_4 = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      $composer_11.h1x();
      var indicatorRipple = tmp0_4;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>' call
      var tmp_25 = $composer_8;
      var dispatchReceiver_2 = composableLambda(tmp_25, -1862011490, true, NavigationRailItem$composable$lambda_2(colors_0, $dirty, animationProgress$delegate, indicatorShape));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_12 = $composer_8;
      $composer_12.f1x(-838505973);
      sourceInformation($composer_12, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = $composer_12.t1z(dispatchReceiver_2);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_12.r1z();
      var tmp_26;
      if (invalid_3 ? true : it_4 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var value_4 = ComposableLambda$invoke$ref_15(dispatchReceiver_2);
        $composer_12.s1z(value_4);
        tmp_26 = value_4;
      } else {
        tmp_26 = it_4;
      }
      var tmp_27 = tmp_26;
      var tmp0_5 = (tmp_27 == null ? true : !(tmp_27 == null)) ? tmp_27 : THROW_CCE();
      $composer_12.h1x();
      var indicator = tmp0_5;
      NavigationRailItemBaselineLayout$composable(indicatorRipple, indicator, styledIcon, styledLabel, alwaysShowLabel_0._v, NavigationRailItem$composable$_anonymous_$lambda$2_iw9wvc(animationProgress$delegate), $composer_8, 438 | 57344 & $dirty >> 6);
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.h1x();
      $composer_6.n1z();
      $composer_5.h1x();
      $composer_4.h1x();
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
      tmp0_safe_receiver.w2e(NavigationRailItem$composable$lambda_3(selected, onClick, icon, modifier_0, enabled_0, label_0, alwaysShowLabel_0, colors_0, interactionSource_0, $changed, $default));
    }
  }
  function NavigationRailDefaults() {
    this.jfs_1 = 0;
  }
  protoOf(NavigationRailDefaults).kfs = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1336555122);
    sourceInformation($composer_0, 'C($get-ContainerColor$$composable)263@11438L9:NavigationRail.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1336555122, $changed, -1, 'androidx.compose.material3.NavigationRailDefaults.$get-ContainerColor$$composable (NavigationRail.kt:263)');
    }
    var tmp0 = toColor$composable(NavigationRailTokens_getInstance().yfs_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(NavigationRailDefaults).tfq = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1113785227);
    sourceInformation($composer_0, 'C($get-windowInsets$$composable)270@11599L29:NavigationRail.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1113785227, $changed, -1, 'androidx.compose.material3.NavigationRailDefaults.$get-windowInsets$$composable (NavigationRail.kt:270)');
    }
    var tmp0 = only($get_systemBarsForVisualComponents$$composable_kg1zeq(Companion_instance_0, $composer_0, 6), WindowInsetsSides__plus_impl_9q9m59(Companion_getInstance_6().z9f_1, Companion_getInstance_6().s9f_1));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  var NavigationRailDefaults_instance;
  function NavigationRailDefaults_getInstance() {
    return NavigationRailDefaults_instance;
  }
  function NavigationRailItemColors(selectedIconColor, selectedTextColor, selectedIndicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor) {
    this.tft_1 = selectedIconColor;
    this.uft_1 = selectedTextColor;
    this.vft_1 = selectedIndicatorColor;
    this.wft_1 = unselectedIconColor;
    this.xft_1 = unselectedTextColor;
    this.yft_1 = disabledIconColor;
    this.zft_1 = disabledTextColor;
    this.afu_1 = 0;
  }
  protoOf(NavigationRailItemColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavigationRailItemColors);
    }
    if (tmp)
      return false;
    if (!equals(this.tft_1, other.tft_1))
      return false;
    if (!equals(this.wft_1, other.wft_1))
      return false;
    if (!equals(this.uft_1, other.uft_1))
      return false;
    if (!equals(this.xft_1, other.xft_1))
      return false;
    if (!equals(this.vft_1, other.vft_1))
      return false;
    if (!equals(this.yft_1, other.yft_1))
      return false;
    if (!equals(this.zft_1, other.zft_1))
      return false;
    return true;
  };
  protoOf(NavigationRailItemColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.tft_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.wft_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.uft_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.xft_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.vft_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.yft_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.zft_1) | 0;
    return result;
  };
  protoOf(NavigationRailItemColors).gfs = function (selected, enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-259675386);
    sourceInformation($composer_0, 'C(iconColor$composable)P(1)354@15704L132:NavigationRail.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-259675386, $changed, -1, 'androidx.compose.material3.NavigationRailItemColors.iconColor$composable (NavigationRail.kt:348)');
    }
    var targetValue = !enabled ? this.yft_1 : selected ? this.tft_1 : this.wft_1;
    var tmp = tween(150);
    var tmp0 = animateColorAsState$composable(targetValue, tmp, null, null, $composer_0, 48, 12);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(NavigationRailItemColors).hfs = function (selected, enabled, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-517392454);
    sourceInformation($composer_0, 'C(textColor$composable)P(1)373@16334L132:NavigationRail.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-517392454, $changed, -1, 'androidx.compose.material3.NavigationRailItemColors.textColor$composable (NavigationRail.kt:367)');
    }
    var targetValue = !enabled ? this.zft_1 : selected ? this.uft_1 : this.xft_1;
    var tmp = tween(150);
    var tmp0 = animateColorAsState$composable(targetValue, tmp, null, null, $composer_0, 48, 12);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(NavigationRailItemColors).bfu = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1145296309);
    sourceInformation($composer_0, 'C($get-indicatorColor$$composable):NavigationRail.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1145296309, $changed, -1, 'androidx.compose.material3.NavigationRailItemColors.$get-indicatorColor$$composable (NavigationRail.kt:382)');
    }
    var tmp0 = this.vft_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  function NavigationRailItemDefaults() {
    this.lfs_1 = 0;
  }
  protoOf(NavigationRailItemDefaults).vfq = function (selectedIconColor, selectedTextColor, indicatorColor, unselectedIconColor, unselectedTextColor, disabledIconColor, disabledTextColor, $composer, $changed, $default) {
    var selectedIconColor_0 = selectedIconColor;
    var selectedTextColor_0 = selectedTextColor;
    var indicatorColor_0 = indicatorColor;
    var unselectedIconColor_0 = unselectedIconColor;
    var unselectedTextColor_0 = unselectedTextColor;
    var disabledIconColor_0 = disabledIconColor;
    var disabledTextColor_0 = disabledTextColor;
    var $composer_0 = $composer;
    $composer_0.f1x(-397502695);
    sourceInformation($composer_0, 'C(colors$composable)P(3:c#ui.graphics.Color,4:c#ui.graphics.Color,2:c#ui.graphics.Color,5:c#ui.graphics.Color,6:c#ui.graphics.Color,0:c#ui.graphics.Color,1:c#ui.graphics.Color)291@12767L9,292@12855L9,293@12940L9,294@13027L9,295@13119L9:NavigationRail.kt#uh7d8r');
    if (!(($default & 1) === 0))
      selectedIconColor_0 = toColor$composable(NavigationRailTokens_getInstance().qfs_1, $composer_0, 6);
    if (!(($default & 2) === 0))
      selectedTextColor_0 = toColor$composable(NavigationRailTokens_getInstance().vfs_1, $composer_0, 6);
    if (!(($default & 4) === 0))
      indicatorColor_0 = toColor$composable(NavigationRailTokens_getInstance().rfs_1, $composer_0, 6);
    if (!(($default & 8) === 0))
      unselectedIconColor_0 = toColor$composable(NavigationRailTokens_getInstance().hft_1, $composer_0, 6);
    if (!(($default & 16) === 0))
      unselectedTextColor_0 = toColor$composable(NavigationRailTokens_getInstance().ift_1, $composer_0, 6);
    if (!(($default & 32) === 0))
      disabledIconColor_0 = Color__copy$default_impl_ectz3s(unselectedIconColor_0, get_DisabledAlpha());
    if (!(($default & 64) === 0))
      disabledTextColor_0 = Color__copy$default_impl_ectz3s(unselectedTextColor_0, get_DisabledAlpha());
    if (isTraceInProgress()) {
      traceEventStart(-397502695, $changed, -1, 'androidx.compose.material3.NavigationRailItemDefaults.colors$composable (NavigationRail.kt:290)');
    }
    var tmp0 = new NavigationRailItemColors(selectedIconColor_0, selectedTextColor_0, indicatorColor_0, unselectedIconColor_0, unselectedTextColor_0, disabledIconColor_0, disabledTextColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  var NavigationRailItemDefaults_instance;
  function NavigationRailItemDefaults_getInstance() {
    return NavigationRailItemDefaults_instance;
  }
  function NavigationRailItemBaselineLayout$composable(indicatorRipple, indicator, icon, label, alwaysShowLabel, animationProgress, $composer, $changed) {
    _init_properties_NavigationRail_kt__le76sm();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1997462869);
    sourceInformation($composer_0, 'C(NavigationRailItemBaselineLayout$composable)P(4,3,2,5)449@19182L2158,434@18778L2562:NavigationRail.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.y1z(indicatorRipple) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(indicator) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(icon) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(label) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.u1z(alwaysShowLabel) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.w1z(animationProgress) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-1997462869, $dirty, -1, 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable (NavigationRail.kt:426)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-1058148781);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_1.t1z(animationProgress) | $composer_1.t1z(label)) | $composer_1.t1z(alwaysShowLabel));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable.<anonymous>' call
        var value = NavigationRailItemBaselineLayout$composable$lambda(animationProgress, label, alwaysShowLabel);
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      var measurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0_0(tmp0);
      var modifier = null;
      var $composer_2 = $composer_0;
      $composer_2.f1x(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((2 & 2) === 0))
        modifier = Companion_instance;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_5().s6v_1;
      var skippableUpdate = materializerOf(modifier);
      var $changed_0 = 6 | 7168 & 0 << 9;
      var $composer_3 = $composer_2;
      var tmp_1 = $composer_3.u1y();
      if (!isInterface(tmp_1, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_2;
      if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
        $this$with.s1z(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
        tmp_2 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_0 >> 3);
      $composer_3.f1x(2058660585);
      // Inline function 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1167587834, 'C435@18795L17,440@18893L50:NavigationRail.kt#uh7d8r');
      indicatorRipple($composer_4, 14 & $dirty);
      $composer_4.f1x(-1167587808);
      sourceInformation($composer_4, '437@18862L11');
      if (animationProgress > 0.0) {
        indicator($composer_4, 14 & $dirty >> 3);
      }
      $composer_4.h1x();
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_0 = layoutId(Companion_instance, 'icon');
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_5 = $composer_4;
      $composer_5.f1x(1330882304);
      sourceInformation($composer_5, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_0 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_4().d5i_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_5, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_1 = modifier_0;
      var $changed_1 = 112 & 6 << 3;
      var modifier_2 = modifier_1;
      var $composer_6 = $composer_5;
      $composer_6.f1x(1725976829);
      sourceInformation($composer_6, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_6, 0);
      var localMap_0 = $composer_6.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory_0 = Companion_getInstance_5().s6v_1;
      var skippableUpdate_0 = materializerOf(modifier_2);
      var $changed_2 = 6 | 7168 & $changed_1 << 9;
      var $composer_7 = $composer_6;
      var tmp_3 = $composer_7.u1y();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_7.k1z();
      if ($composer_7.v1y()) {
        $composer_7.l1z(factory_0);
      } else {
        $composer_7.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_7);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_0 = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
      var tmp_4;
      if ($this$with_0.v1y() ? true : !equals($this$with_0.r1z(), compositeKeyHash_0)) {
        $this$with_0.s1z(compositeKeyHash_0);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).q1z(compositeKeyHash_0, block_0);
        tmp_4 = Unit_instance;
      }
      skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_7)), $composer_7, 112 & $changed_2 >> 3);
      $composer_7.f1x(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable.<anonymous>.<anonymous>' call
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, -1292240845, 'C440@18935L6:NavigationRail.kt#uh7d8r');
      icon($composer_9, 14 & $dirty >> 6);
      sourceInformationMarkerEnd($composer_9);
      sourceInformationMarkerEnd($composer_8);
      $composer_7.h1x();
      $composer_7.n1z();
      $composer_6.h1x();
      $composer_5.h1x();
      $composer_4.f1x(682191747);
      sourceInformation($composer_4, '443@18986L178');
      if (!(label == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_3 = alpha(layoutId(Companion_instance, 'label'), alwaysShowLabel ? 1.0 : animationProgress);
        var contentAlignment_0 = null;
        var propagateMinConstraints_0 = false;
        var $composer_10 = $composer_4;
        $composer_10.f1x(1330882304);
        sourceInformation($composer_10, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_3 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_10, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_4 = modifier_3;
        var $changed_3 = 112 & 0 << 3;
        var modifier_5 = modifier_4;
        var $composer_11 = $composer_10;
        $composer_11.f1x(1725976829);
        sourceInformation($composer_11, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_5 = Companion_instance;
        var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_11, 0);
        var localMap_1 = $composer_11.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_1 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_1 = materializerOf(modifier_5);
        var $changed_4 = 6 | 7168 & $changed_3 << 9;
        var $composer_12 = $composer_11;
        var tmp_5 = $composer_12.u1y();
        if (!isInterface(tmp_5, Applier)) {
          invalidApplier();
        }
        $composer_12.k1z();
        if ($composer_12.v1y()) {
          $composer_12.l1z(factory_1);
        } else {
          $composer_12.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_12);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        var tmp_6;
        if ($this$with_1.v1y() ? true : !equals($this$with_1.r1z(), compositeKeyHash_1)) {
          $this$with_1.s1z(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).q1z(compositeKeyHash_1, block_1);
          tmp_6 = Unit_instance;
        }
        skippableUpdate_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_12)), $composer_12, 112 & $changed_4 >> 3);
        $composer_12.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable.<anonymous>.<anonymous>' call
        var $composer_14 = $composer_13;
        sourceInformationMarkerStart($composer_14, -1292240625, 'C447@19155L7:NavigationRail.kt#uh7d8r');
        label($composer_14, 14 & $dirty >> 9);
        sourceInformationMarkerEnd($composer_14);
        sourceInformationMarkerEnd($composer_13);
        $composer_12.h1x();
        $composer_12.n1z();
        $composer_11.h1x();
        $composer_10.h1x();
      }
      $composer_4.h1x();
      sourceInformationMarkerEnd($composer_4);
      $composer_3.h1x();
      $composer_3.n1z();
      $composer_2.h1x();
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
      tmp0_safe_receiver.w2e(NavigationRailItemBaselineLayout$composable$lambda_0(indicatorRipple, indicator, icon, label, alwaysShowLabel, animationProgress, $changed));
    }
  }
  function placeIcon_0(_this__u8e3s4, iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints) {
    _init_properties_NavigationRail_kt__le76sm();
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = iconPlaceable.m5l_1;
    var b = indicatorRipplePlaceable.m5l_1;
    var tmp1_elvis_lhs = indicatorPlaceable == null ? null : indicatorPlaceable.m5l_1;
    var c = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp$ret$0 = Math.max(a, b, c);
    var width = constrainWidth(constraints, tmp$ret$0);
    var height = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var iconX = (width - iconPlaceable.m5l_1 | 0) / 2 | 0;
    var iconY = (height - iconPlaceable.n5l_1 | 0) / 2 | 0;
    var rippleX = (width - indicatorRipplePlaceable.m5l_1 | 0) / 2 | 0;
    var rippleY = (height - indicatorRipplePlaceable.n5l_1 | 0) / 2 | 0;
    return _this__u8e3s4.s5l(width, height, VOID, placeIcon$lambda_0(indicatorPlaceable, width, height, iconPlaceable, iconX, iconY, indicatorRipplePlaceable, rippleX, rippleY));
  }
  function placeLabelAndIcon_0(_this__u8e3s4, labelPlaceable, iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints, alwaysShowLabel, animationProgress) {
    _init_properties_NavigationRail_kt__le76sm();
    var height = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var labelY = (height - labelPlaceable.n5l_1 | 0) - _this__u8e3s4.k3b(get_NavigationRailItemVerticalPadding()) | 0;
    var selectedIconY = _this__u8e3s4.k3b(get_NavigationRailItemVerticalPadding());
    var unselectedIconY = alwaysShowLabel ? selectedIconY : (height - iconPlaceable.n5l_1 | 0) / 2 | 0;
    var iconDistance = unselectedIconY - selectedIconY | 0;
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = iconDistance * (1 - animationProgress);
    var offset = roundToInt(this_0);
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = iconPlaceable.m5l_1;
    var b = labelPlaceable.m5l_1;
    var tmp1_elvis_lhs = indicatorPlaceable == null ? null : indicatorPlaceable.m5l_1;
    var c = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp$ret$1 = Math.max(a, b, c);
    var width = constrainWidth(constraints, tmp$ret$1);
    var labelX = (width - labelPlaceable.m5l_1 | 0) / 2 | 0;
    var iconX = (width - iconPlaceable.m5l_1 | 0) / 2 | 0;
    var rippleX = (width - indicatorRipplePlaceable.m5l_1 | 0) / 2 | 0;
    var rippleY = selectedIconY - _this__u8e3s4.k3b(get_IndicatorVerticalPaddingWithLabel()) | 0;
    return _this__u8e3s4.s5l(width, height, VOID, placeLabelAndIcon$lambda_0(indicatorPlaceable, width, selectedIconY, _this__u8e3s4, offset, alwaysShowLabel, animationProgress, labelPlaceable, labelX, labelY, iconPlaceable, iconX, indicatorRipplePlaceable, rippleX, rippleY));
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.cfu_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).e6z = function (_this__u8e3s4, measurables, constraints) {
    return this.cfu_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function NavigationRailItem$composable$_anonymous_$_anonymous_$lambda$0_o57rot($iconColor$delegate) {
    _init_properties_NavigationRail_kt__le76sm();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('iconColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $iconColor$delegate.u2().p41_1;
  }
  function NavigationRailItem$composable$_anonymous_$_anonymous_$_anonymous_$lambda$1_jqei9n($textColor$delegate) {
    _init_properties_NavigationRail_kt__le76sm();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('textColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $textColor$delegate.u2().p41_1;
  }
  function NavigationRailItem$composable$_anonymous_$lambda$2_iw9wvc($animationProgress$delegate) {
    _init_properties_NavigationRail_kt__le76sm();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animationProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $animationProgress$delegate.u2();
  }
  function NavigationRail$composable$lambda($windowInsets, $header, $$dirty, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C113@5156L619:NavigationRail.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-2092683357, $changed, -1, 'androidx.compose.material3.NavigationRail$composable.<anonymous> (NavigationRail.kt:112)');
        }
        var tmp0_modifier = selectableGroup(padding_0(widthIn(windowInsetsPadding(fillMaxHeight(Companion_instance), $windowInsets._v), NavigationRailTokens_getInstance().bft_1), VOID, get_NavigationRailVerticalPadding()));
        var tmp1_horizontalAlignment = Companion_getInstance_4().q5i_1;
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var modifier = tmp0_modifier;
        var verticalArrangement = Arrangement_getInstance().w93(get_NavigationRailVerticalPadding());
        var horizontalAlignment = tmp1_horizontalAlignment;
        var $composer_1 = $composer_0;
        $composer_1.f1x(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier = Companion_instance;
        if (!((0 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().f93_1;
        if (!((0 & 4) === 0))
          horizontalAlignment = Companion_getInstance_4().p5i_1;
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 432 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.f1x(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.u1y();
        if (!isInterface(tmp_0, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_1;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_1 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>' call
        var $changed_2 = 6 | 112 & 432 >> 6;
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 1436707208, 'C127@5756L9:NavigationRail.kt#uh7d8r');
        $composer_5.f1x(1436707208);
        sourceInformation($composer_5, '124@5652L8,125@5677L52');
        if (!($header._v == null)) {
          $header._v(ColumnScopeInstance_instance, $composer_5, 14 & $changed_2 | 112 & $$dirty >> 6);
          Spacer$composable(height(Companion_instance, get_NavigationRailHeaderPadding()), $composer_5, 6);
        }
        $composer_5.h1x();
        $content(ColumnScopeInstance_instance, $composer_5, 14 & $changed_2 | 112 & $$dirty >> 12);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function NavigationRail$composable$lambda_0($modifier, $containerColor, $contentColor, $header, $windowInsets, $content, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationRail$composable($modifier._v, $containerColor._v.p41_1, $contentColor._v.p41_1, $header._v, $windowInsets._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavigationRailItem$composable$lambda$lambda($this$clearAndSetSemantics) {
    _init_properties_NavigationRail_kt__le76sm();
    return Unit_instance;
  }
  function NavigationRailItem$composable$lambda($colors, $selected, $enabled, $$dirty, $label, $alwaysShowLabel, $icon) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C172@7735L49,175@7954L185:NavigationRail.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1023357515, $changed, -1, 'androidx.compose.material3.NavigationRailItem$composable.<anonymous> (NavigationRail.kt:171)');
        }
        var iconColor$delegate = $colors._v.gfs($selected, $enabled._v, $composer_0, 14 & $$dirty | 112 & $$dirty >> 9 | 896 & $$dirty >> 15);
        var clearSemantics = !($label._v == null) ? $alwaysShowLabel._v ? true : $selected : false;
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        $composer_0.f1x(-2100590643);
        sourceInformation($composer_0, '175@8019L2');
        var tmp_0;
        if (clearSemantics) {
          var tmp_1 = Companion_instance;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.f1x(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp_2;
          if (false ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>.<anonymous>' call
            var value = NavigationRailItem$composable$lambda$lambda;
            $composer_1.s1z(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_1.h1x();
          tmp_0 = clearAndSetSemantics(tmp_1, tmp0);
        } else {
          tmp_0 = Companion_instance;
        }
        var tmp0_group = tmp_0;
        $composer_0.h1x();
        var modifier = tmp0_group;
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_2 = $composer_0;
        $composer_2.f1x(1330882304);
        sourceInformation($composer_2, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_2, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 0 << 3;
        var modifier_1 = modifier_0;
        var $composer_3 = $composer_2;
        $composer_3.f1x(1725976829);
        sourceInformation($composer_3, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_3, 0);
        var localMap = $composer_3.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_4 = $composer_3;
        var tmp_4 = $composer_4.u1y();
        if (!isInterface(tmp_4, Applier)) {
          invalidApplier();
        }
        $composer_4.k1z();
        if ($composer_4.v1y()) {
          $composer_4.l1z(factory);
        } else {
          $composer_4.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_5;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_5 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_4)), $composer_4, 112 & $changed_1 >> 3);
        $composer_4.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -571545536, 'C176@8051L78:NavigationRail.kt#uh7d8r');
        CompositionLocalProvider$composable([get_LocalContentColor().r2e(new Color(NavigationRailItem$composable$_anonymous_$_anonymous_$lambda$0_o57rot(iconColor$delegate)))], $icon, $composer_6, 112 & $$dirty >> 3);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.h1x();
        $composer_4.n1z();
        $composer_3.h1x();
        $composer_2.h1x();
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp = tmp_6;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function NavigationRailItem$composable$lambda$lambda_0($style, $label, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C185@8505L40:NavigationRail.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-288191647, $changed, -1, 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>.<anonymous> (NavigationRail.kt:184)');
        }
        ProvideTextStyle$composable($style, $label._v, $composer_0, 112 & $$dirty >> 12);
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
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function NavigationRailItem$composable$lambda_0($colors, $selected, $enabled, $$dirty, $label) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C182@8269L10,183@8362L49,184@8424L135:NavigationRail.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-105269599, $changed, -1, 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous> (NavigationRail.kt:181)');
        }
        var style = fromToken_1(MaterialTheme_instance.hfh($composer_0, 6), NavigationRailTokens_getInstance().lft_1);
        var textColor$delegate = $colors._v.hfs($selected, $enabled._v, $composer_0, 14 & $$dirty | 112 & $$dirty >> 9 | 896 & $$dirty >> 15);
        var tmp_0 = [get_LocalContentColor().r2e(new Color(NavigationRailItem$composable$_anonymous_$_anonymous_$_anonymous_$lambda$1_jqei9n(textColor$delegate)))];
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, -288191647, true, NavigationRailItem$composable$lambda$lambda_0(style, $label, $$dirty));
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
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
          $composer_1.s1z(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.h1x();
        CompositionLocalProvider$composable(tmp_0, tmp0, $composer_0, 48);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function NavigationRailItem$composable$lambda_1($indicatorShape, $offsetInteractionSource) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C235@10529L16,231@10342L218:NavigationRail.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(211026382, $changed, -1, 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous> (NavigationRail.kt:230)');
        }
        var tmp_0 = clip(layoutId(Companion_instance, 'indicatorRipple'), $indicatorShape);
        var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
        Box$composable(indication(tmp_0, $offsetInteractionSource, rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7)), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function NavigationRailItem$composable$lambda_2($colors, $$dirty, $animationProgress$delegate, $indicatorShape) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C243@10775L14,239@10621L284:NavigationRail.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1862011490, $changed, -1, 'androidx.compose.material3.NavigationRailItem$composable.<anonymous>.<anonymous> (NavigationRail.kt:238)');
        }
        Box$composable(background(layoutId(Companion_instance, 'indicator'), Color__copy$default_impl_ectz3s($colors._v.bfu($composer_0, 14 & $$dirty >> 21), NavigationRailItem$composable$_anonymous_$lambda$2_iw9wvc($animationProgress$delegate)), $indicatorShape), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function NavigationRailItem$composable$lambda_3($selected, $onClick, $icon, $modifier, $enabled, $label, $alwaysShowLabel, $colors, $interactionSource, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationRailItem$composable($selected, $onClick, $icon, $modifier._v, $enabled._v, $label._v, $alwaysShowLabel._v, $colors._v, $interactionSource._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NavigationRailItemBaselineLayout$composable$lambda($animationProgress, $label, $alwaysShowLabel) {
    return function ($this$Layout, measurables, constraints) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator = measurables.v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
          if (equals(get_layoutId(element), 'icon')) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var iconPlaceable = tmp$ret$1.l5l(constraints.e3b_1);
      var tmp = iconPlaceable.m5l_1;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var this_0 = get_IndicatorHorizontalPadding_0();
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) * 2);
      var totalIndicatorWidth = tmp + $this$Layout.k3b(tmp$ret$2) | 0;
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = totalIndicatorWidth * $animationProgress;
      var animatedIndicatorWidth = roundToInt(this_1);
      var tmp_0;
      if ($label == null) {
        tmp_0 = get_IndicatorVerticalPaddingNoLabel();
      } else {
        tmp_0 = get_IndicatorVerticalPaddingWithLabel();
      }
      var indicatorVerticalPadding = tmp_0;
      var tmp_1 = iconPlaceable.n5l_1;
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(indicatorVerticalPadding) * 2);
      var indicatorHeight = tmp_1 + $this$Layout.k3b(tmp$ret$4) | 0;
      var tmp$ret$6;
      $l$block_0: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator_0 = measurables.v();
        while (tmp0_iterator_0.w()) {
          var element_0 = tmp0_iterator_0.y();
          // Inline function 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
          if (equals(get_layoutId(element_0), 'indicatorRipple')) {
            tmp$ret$6 = element_0;
            break $l$block_0;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var indicatorRipplePlaceable = tmp$ret$6.l5l(Companion_getInstance_7().g3b(totalIndicatorWidth, indicatorHeight));
      var tmp$ret$8;
      $l$block_1: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_1 = measurables.v();
        while (tmp0_iterator_1.w()) {
          var element_1 = tmp0_iterator_1.y();
          // Inline function 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
          if (equals(get_layoutId(element_1), 'indicator')) {
            tmp$ret$8 = element_1;
            break $l$block_1;
          }
        }
        tmp$ret$8 = null;
      }
      var tmp0_safe_receiver = tmp$ret$8;
      var indicatorPlaceable = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l5l(Companion_getInstance_7().g3b(animatedIndicatorWidth, indicatorHeight));
      var tmp_2;
      if ($label == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$10;
        $l$block_2: {
          // Inline function 'kotlin.collections.first' call
          var tmp0_iterator_2 = measurables.v();
          while (tmp0_iterator_2.w()) {
            var element_2 = tmp0_iterator_2.y();
            // Inline function 'androidx.compose.material3.NavigationRailItemBaselineLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (equals(get_layoutId(element_2), 'label')) {
              tmp$ret$10 = element_2;
              break $l$block_2;
            }
          }
          throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
        }
        tmp_2 = tmp$ret$10.l5l(Constraints__copy$default_impl_f452rp(constraints.e3b_1, VOID, VOID, 0));
      }
      var labelPlaceable = tmp_2;
      var tmp_3;
      if ($label == null) {
        tmp_3 = placeIcon_0($this$Layout, iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints.e3b_1);
      } else {
        tmp_3 = placeLabelAndIcon_0($this$Layout, ensureNotNull(labelPlaceable), iconPlaceable, indicatorRipplePlaceable, indicatorPlaceable, constraints.e3b_1, $alwaysShowLabel, $animationProgress);
      }
      return tmp_3;
    };
  }
  function NavigationRailItemBaselineLayout$composable$lambda_0($indicatorRipple, $indicator, $icon, $label, $alwaysShowLabel, $animationProgress, $$changed) {
    return function ($composer, $force) {
      NavigationRailItemBaselineLayout$composable($indicatorRipple, $indicator, $icon, $label, $alwaysShowLabel, $animationProgress, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function placeIcon$lambda_0($indicatorPlaceable, $width, $height, $iconPlaceable, $iconX, $iconY, $indicatorRipplePlaceable, $rippleX, $rippleY) {
    return function ($this$layout) {
      var tmp0_safe_receiver = $indicatorPlaceable;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var indicatorX = ($width - tmp0_safe_receiver.m5l_1 | 0) / 2 | 0;
        var indicatorY = ($height - tmp0_safe_receiver.n5l_1 | 0) / 2 | 0;
        $this$layout.e5r(tmp0_safe_receiver, indicatorX, indicatorY);
      }
      $this$layout.e5r($iconPlaceable, $iconX, $iconY);
      $this$layout.e5r($indicatorRipplePlaceable, $rippleX, $rippleY);
      return Unit_instance;
    };
  }
  function placeLabelAndIcon$lambda_0($indicatorPlaceable, $width, $selectedIconY, $this_placeLabelAndIcon, $offset, $alwaysShowLabel, $animationProgress, $labelPlaceable, $labelX, $labelY, $iconPlaceable, $iconX, $indicatorRipplePlaceable, $rippleX, $rippleY) {
    return function ($this$layout) {
      var tmp0_safe_receiver = $indicatorPlaceable;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var indicatorX = ($width - tmp0_safe_receiver.m5l_1 | 0) / 2 | 0;
        var indicatorY = $selectedIconY - $this_placeLabelAndIcon.k3b(get_IndicatorVerticalPaddingWithLabel()) | 0;
        $this$layout.e5r(tmp0_safe_receiver, indicatorX, indicatorY + $offset | 0);
      }
      var tmp;
      if ($alwaysShowLabel ? true : !($animationProgress === 0.0)) {
        $this$layout.e5r($labelPlaceable, $labelX, $labelY + $offset | 0);
        tmp = Unit_instance;
      }
      $this$layout.e5r($iconPlaceable, $iconX, $selectedIconY + $offset | 0);
      $this$layout.e5r($indicatorRipplePlaceable, $rippleX, $rippleY + $offset | 0);
      return Unit_instance;
    };
  }
  var properties_initialized_NavigationRail_kt_2gzc3c;
  function _init_properties_NavigationRail_kt__le76sm() {
    if (!properties_initialized_NavigationRail_kt_2gzc3c) {
      properties_initialized_NavigationRail_kt_2gzc3c = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      NavigationRailVerticalPadding = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      NavigationRailHeaderPadding = _Dp___init__impl__ms3zkb(8);
      NavigationRailItemWidth = NavigationRailTokens_getInstance().bft_1;
      NavigationRailItemHeight = NavigationRailTokens_getInstance().rft_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      NavigationRailItemVerticalPadding = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var this_0 = NavigationRailTokens_getInstance().ufs_1;
      var other = NavigationRailTokens_getInstance().cft_1;
      var this_1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) - _Dp___get_value__impl__geb1vb(other));
      IndicatorHorizontalPadding_0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) / 2);
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var this_2 = NavigationRailTokens_getInstance().sfs_1;
      var other_0 = NavigationRailTokens_getInstance().cft_1;
      var this_3 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_2) - _Dp___get_value__impl__geb1vb(other_0));
      IndicatorVerticalPaddingWithLabel = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_3) / 2);
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var this_4 = NavigationRailTokens_getInstance().rft_1;
      var other_1 = NavigationRailTokens_getInstance().cft_1;
      var this_5 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_4) - _Dp___get_value__impl__geb1vb(other_1));
      IndicatorVerticalPaddingNoLabel = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_5) / 2);
    }
  }
  function get_OutlinedTextFieldInnerPadding() {
    _init_properties_OutlinedTextField_kt__36w0dj();
    return OutlinedTextFieldInnerPadding;
  }
  var OutlinedTextFieldInnerPadding;
  var OutlinedTextFieldTopPadding;
  function outlineCutout(_this__u8e3s4, labelSize, paddingValues) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    return drawWithContent(_this__u8e3s4, outlineCutout$lambda(labelSize, paddingValues));
  }
  function OutlinedTextFieldLayout$composable(modifier, textField, placeholder, label, leading, trailing, prefix, suffix, singleLine, animationProgress, onLabelMeasured, container, supporting, paddingValues, $composer, $changed, $changed1) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-588056437);
    sourceInformation($composer_0, 'C(OutlinedTextFieldLayout$composable)P(4,12,7,2,3,13,8,10,9!1,5!1,11)518@25327L239,526@25614L7,527@25626L3534:OutlinedTextField.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(textField) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(placeholder) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(label) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1z(leading) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1z(trailing) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1z(prefix) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.y1z(suffix) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.u1z(singleLine) ? 67108864 : 33554432);
    if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.w1z(animationProgress) ? 536870912 : 268435456);
    if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(onLabelMeasured) ? 4 : 2);
    if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(container) ? 32 : 16);
    if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(supporting) ? 256 : 128);
    if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1z(paddingValues) ? 2048 : 1024);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 5851) === 1170)) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-588056437, $dirty, $dirty1, 'androidx.compose.material3.OutlinedTextFieldLayout$composable (OutlinedTextField.kt:502)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var keys = [onLabelMeasured, singleLine, animationProgress, paddingValues];
      var $composer_1 = $composer_0;
      $composer_1.f1x(-1603429786);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var inductionVariable = 0;
      var last = keys.length;
      while (inductionVariable < last) {
        var key = keys[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_1.t1z(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = invalid;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp;
      if (invalid_0 ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.OutlinedTextFieldLayout$composable.<anonymous>' call
        var value = new OutlinedTextFieldMeasurePolicy(onLabelMeasured, singleLine, animationProgress, paddingValues);
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      var measurePolicy = tmp0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalLayoutDirection();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.b20(this_0);
      sourceInformationMarkerEnd($composer_2);
      var layoutDirection = tmp0_0;
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var $composer_3 = $composer_0;
      var $changed_0 = 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_4 = $composer_3;
      $composer_4.f1x(1725976829);
      sourceInformation($composer_4, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_4, 0);
      var localMap = $composer_4.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_5().s6v_1;
      var skippableUpdate = materializerOf(modifier_0);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_5 = $composer_4;
      var tmp_1 = $composer_5.u1y();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_5.k1z();
      if ($composer_5.v1y()) {
        $composer_5.l1z(factory);
      } else {
        $composer_5.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_5);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_2;
      if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
        $this$with.s1z(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
        tmp_2 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & $changed_1 >> 3);
      $composer_5.f1x(2058660585);
      // Inline function 'androidx.compose.material3.OutlinedTextFieldLayout$composable.<anonymous>' call
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -1484249279, 'C530@25695L11,600@28180L228:OutlinedTextField.kt#uh7d8r');
      container($composer_6, 14 & $dirty1 >> 3);
      $composer_6.f1x(-1484249254);
      sourceInformation($composer_6, '533@25759L219');
      if (!(leading == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_1 = layoutId(Companion_instance, get_LeadingId()).c5j(get_IconDefaultSizeModifier());
        var contentAlignment = Companion_getInstance_4().h5i_1;
        var propagateMinConstraints = false;
        var $composer_7 = $composer_6;
        $composer_7.f1x(1330882304);
        sourceInformation($composer_7, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_7, 14 & 48 >> 3 | 112 & 48 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_2 = modifier_1;
        var $changed_2 = 112 & 48 << 3;
        var modifier_3 = modifier_2;
        var $composer_8 = $composer_7;
        $composer_8.f1x(1725976829);
        sourceInformation($composer_8, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_3 = Companion_instance;
        var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_8, 0);
        var localMap_0 = $composer_8.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_0 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_0 = materializerOf(modifier_3);
        var $changed_3 = 6 | 7168 & $changed_2 << 9;
        var $composer_9 = $composer_8;
        var tmp_3 = $composer_9.u1y();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_9.k1z();
        if ($composer_9.v1y()) {
          $composer_9.l1z(factory_0);
        } else {
          $composer_9.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_9);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        var tmp_4;
        if ($this$with_0.v1y() ? true : !equals($this$with_0.r1z(), compositeKeyHash_0)) {
          $this$with_0.s1z(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).q1z(compositeKeyHash_0, block_0);
          tmp_4 = Unit_instance;
        }
        skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_9)), $composer_9, 112 & $changed_3 >> 3);
        $composer_9.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_11 = $composer_10;
        sourceInformationMarkerStart($composer_11, 681043810, 'C537@25951L9:OutlinedTextField.kt#uh7d8r');
        leading($composer_11, 14 & $dirty >> 12);
        sourceInformationMarkerEnd($composer_11);
        sourceInformationMarkerEnd($composer_10);
        $composer_9.h1x();
        $composer_9.n1z();
        $composer_8.h1x();
        $composer_7.h1x();
      }
      $composer_6.h1x();
      $composer_6.f1x(-1484248969);
      sourceInformation($composer_6, '541@26045L221');
      if (!(trailing == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_4 = layoutId(Companion_instance, get_TrailingId()).c5j(get_IconDefaultSizeModifier());
        var contentAlignment_0 = Companion_getInstance_4().h5i_1;
        var propagateMinConstraints_0 = false;
        var $composer_12 = $composer_6;
        $composer_12.f1x(1330882304);
        sourceInformation($composer_12, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_4 = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_4().d5i_1;
        if (!((4 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_12, 14 & 48 >> 3 | 112 & 48 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_5 = modifier_4;
        var $changed_4 = 112 & 48 << 3;
        var modifier_6 = modifier_5;
        var $composer_13 = $composer_12;
        $composer_13.f1x(1725976829);
        sourceInformation($composer_13, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_6 = Companion_instance;
        var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_13, 0);
        var localMap_1 = $composer_13.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_1 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_1 = materializerOf(modifier_6);
        var $changed_5 = 6 | 7168 & $changed_4 << 9;
        var $composer_14 = $composer_13;
        var tmp_5 = $composer_14.u1y();
        if (!isInterface(tmp_5, Applier)) {
          invalidApplier();
        }
        $composer_14.k1z();
        if ($composer_14.v1y()) {
          $composer_14.l1z(factory_1);
        } else {
          $composer_14.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_14);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        var tmp_6;
        if ($this$with_1.v1y() ? true : !equals($this$with_1.r1z(), compositeKeyHash_1)) {
          $this$with_1.s1z(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).q1z(compositeKeyHash_1, block_1);
          tmp_6 = Unit_instance;
        }
        skippableUpdate_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_14)), $composer_14, 112 & $changed_5 >> 3);
        $composer_14.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_15 = $composer_14;
        sourceInformationMarkerStart($composer_15, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_16 = $composer_15;
        sourceInformationMarkerStart($composer_16, 681044097, 'C545@26238L10:OutlinedTextField.kt#uh7d8r');
        trailing($composer_16, 14 & $dirty >> 15);
        sourceInformationMarkerEnd($composer_16);
        sourceInformationMarkerEnd($composer_15);
        $composer_14.h1x();
        $composer_14.n1z();
        $composer_13.h1x();
        $composer_12.h1x();
      }
      $composer_6.h1x();
      var startTextFieldPadding = calculateStartPadding(paddingValues, layoutDirection);
      var endTextFieldPadding = calculateEndPadding(paddingValues, layoutDirection);
      var tmp_7;
      if (!(leading == null)) {
        // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var other = get_HorizontalIconPadding();
        var this_1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(startTextFieldPadding) - _Dp___get_value__impl__geb1vb(other));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var minimumValue = _Dp___init__impl__ms3zkb(0);
        tmp_7 = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(this_1), _Dp___get_value__impl__geb1vb(minimumValue)));
      } else {
        tmp_7 = startTextFieldPadding;
      }
      var startPadding = tmp_7;
      var tmp_8;
      if (!(trailing == null)) {
        // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var other_0 = get_HorizontalIconPadding();
        var this_2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(endTextFieldPadding) - _Dp___get_value__impl__geb1vb(other_0));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var minimumValue_0 = _Dp___init__impl__ms3zkb(0);
        tmp_8 = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(this_2), _Dp___get_value__impl__geb1vb(minimumValue_0)));
      } else {
        tmp_8 = endTextFieldPadding;
      }
      var endPadding = tmp_8;
      $composer_6.f1x(-1484248079);
      sourceInformation($composer_6, '564@26933L334');
      if (!(prefix == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_7 = padding_1(wrapContentHeight(heightIn(layoutId(Companion_instance, get_PrefixId()), get_MinTextLineHeight())), startPadding, VOID, get_PrefixSuffixTextPadding());
        var contentAlignment_1 = null;
        var propagateMinConstraints_1 = false;
        var $composer_17 = $composer_6;
        $composer_17.f1x(1330882304);
        sourceInformation($composer_17, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_7 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_1 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_1 = false;
        var measurePolicy_2 = rememberBoxMeasurePolicy$composable(contentAlignment_1, propagateMinConstraints_1, $composer_17, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_8 = modifier_7;
        var $changed_6 = 112 & 0 << 3;
        var modifier_9 = modifier_8;
        var $composer_18 = $composer_17;
        $composer_18.f1x(1725976829);
        sourceInformation($composer_18, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_9 = Companion_instance;
        var compositeKeyHash_2 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_18, 0);
        var localMap_2 = $composer_18.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_2 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_2 = materializerOf(modifier_9);
        var $changed_7 = 6 | 7168 & $changed_6 << 9;
        var $composer_19 = $composer_18;
        var tmp_9 = $composer_19.u1y();
        if (!isInterface(tmp_9, Applier)) {
          invalidApplier();
        }
        $composer_19.k1z();
        if ($composer_19.v1y()) {
          $composer_19.l1z(factory_2);
        } else {
          $composer_19.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_19);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_2 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
        var tmp_10;
        if ($this$with_2.v1y() ? true : !equals($this$with_2.r1z(), compositeKeyHash_2)) {
          $this$with_2.s1z(compositeKeyHash_2);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).q1z(compositeKeyHash_2, block_2);
          tmp_10 = Unit_instance;
        }
        skippableUpdate_2(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_19)), $composer_19, 112 & $changed_7 >> 3);
        $composer_19.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_21 = $composer_20;
        sourceInformationMarkerStart($composer_21, 681045100, 'C571@27241L8:OutlinedTextField.kt#uh7d8r');
        prefix($composer_21, 14 & $dirty >> 18);
        sourceInformationMarkerEnd($composer_21);
        sourceInformationMarkerEnd($composer_20);
        $composer_19.h1x();
        $composer_19.n1z();
        $composer_18.h1x();
        $composer_17.h1x();
      }
      $composer_6.h1x();
      $composer_6.f1x(-1484247680);
      sourceInformation($composer_6, '575@27332L332');
      if (!(suffix == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_10 = padding_1(wrapContentHeight(heightIn(layoutId(Companion_instance, get_SuffixId()), get_MinTextLineHeight())), get_PrefixSuffixTextPadding(), VOID, endPadding);
        var contentAlignment_2 = null;
        var propagateMinConstraints_2 = false;
        var $composer_22 = $composer_6;
        $composer_22.f1x(1330882304);
        sourceInformation($composer_22, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_10 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_2 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_2 = false;
        var measurePolicy_3 = rememberBoxMeasurePolicy$composable(contentAlignment_2, propagateMinConstraints_2, $composer_22, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_11 = modifier_10;
        var $changed_8 = 112 & 0 << 3;
        var modifier_12 = modifier_11;
        var $composer_23 = $composer_22;
        $composer_23.f1x(1725976829);
        sourceInformation($composer_23, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_12 = Companion_instance;
        var compositeKeyHash_3 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_23, 0);
        var localMap_3 = $composer_23.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_3 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_3 = materializerOf(modifier_12);
        var $changed_9 = 6 | 7168 & $changed_8 << 9;
        var $composer_24 = $composer_23;
        var tmp_11 = $composer_24.u1y();
        if (!isInterface(tmp_11, Applier)) {
          invalidApplier();
        }
        $composer_24.k1z();
        if ($composer_24.v1y()) {
          $composer_24.l1z(factory_3);
        } else {
          $composer_24.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_24);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_3 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_3 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3);
        var tmp_12;
        if ($this$with_3.v1y() ? true : !equals($this$with_3.r1z(), compositeKeyHash_3)) {
          $this$with_3.s1z(compositeKeyHash_3);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3).q1z(compositeKeyHash_3, block_3);
          tmp_12 = Unit_instance;
        }
        skippableUpdate_3(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_24)), $composer_24, 112 & $changed_9 >> 3);
        $composer_24.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_25 = $composer_24;
        sourceInformationMarkerStart($composer_25, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_26 = $composer_25;
        sourceInformationMarkerStart($composer_26, 681045497, 'C582@27638L8:OutlinedTextField.kt#uh7d8r');
        suffix($composer_26, 14 & $dirty >> 21);
        sourceInformationMarkerEnd($composer_26);
        sourceInformationMarkerEnd($composer_25);
        $composer_24.h1x();
        $composer_24.n1z();
        $composer_23.h1x();
        $composer_22.h1x();
      }
      $composer_6.h1x();
      var tmp_13 = wrapContentHeight(heightIn(Companion_instance, get_MinTextLineHeight()));
      var tmp_14;
      if (prefix == null) {
        tmp_14 = startPadding;
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_14 = _Dp___init__impl__ms3zkb(0);
      }
      var tmp_15 = tmp_14;
      var tmp_16;
      if (suffix == null) {
        tmp_16 = endPadding;
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_16 = _Dp___init__impl__ms3zkb(0);
      }
      var textPadding = padding_1(tmp_13, tmp_15, VOID, tmp_16);
      $composer_6.f1x(-1484246970);
      sourceInformation($composer_6, '595@28047L105');
      if (!(placeholder == null)) {
        placeholder(layoutId(Companion_instance, get_PlaceholderId()).c5j(textPadding), $composer_6, 112 & $dirty >> 3);
      }
      $composer_6.h1x();
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_13 = layoutId(Companion_instance, get_TextFieldId()).c5j(textPadding);
      var contentAlignment_3 = null;
      var propagateMinConstraints_3 = true;
      var $composer_27 = $composer_6;
      $composer_27.f1x(1330882304);
      sourceInformation($composer_27, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((2 & 1) === 0))
        modifier_13 = Companion_instance;
      if (!((2 & 2) === 0))
        contentAlignment_3 = Companion_getInstance_4().d5i_1;
      if (!((2 & 4) === 0))
        propagateMinConstraints_3 = false;
      var measurePolicy_4 = rememberBoxMeasurePolicy$composable(contentAlignment_3, propagateMinConstraints_3, $composer_27, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_14 = modifier_13;
      var $changed_10 = 112 & 384 << 3;
      var modifier_15 = modifier_14;
      var $composer_28 = $composer_27;
      $composer_28.f1x(1725976829);
      sourceInformation($composer_28, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_15 = Companion_instance;
      var compositeKeyHash_4 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_28, 0);
      var localMap_4 = $composer_28.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory_4 = Companion_getInstance_5().s6v_1;
      var skippableUpdate_4 = materializerOf(modifier_15);
      var $changed_11 = 6 | 7168 & $changed_10 << 9;
      var $composer_29 = $composer_28;
      var tmp_17 = $composer_29.u1y();
      if (!isInterface(tmp_17, Applier)) {
        invalidApplier();
      }
      $composer_29.k1z();
      if ($composer_29.v1y()) {
        $composer_29.l1z(factory_4);
      } else {
        $composer_29.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_29);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_4 = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_4 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_4);
      var tmp_18;
      if ($this$with_4.v1y() ? true : !equals($this$with_4.r1z(), compositeKeyHash_4)) {
        $this$with_4.s1z(compositeKeyHash_4);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_4).q1z(compositeKeyHash_4, block_4);
        tmp_18 = Unit_instance;
      }
      skippableUpdate_4(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_29)), $composer_29, 112 & $changed_11 >> 3);
      $composer_29.f1x(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_30 = $composer_29;
      sourceInformationMarkerStart($composer_30, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
      var $composer_31 = $composer_30;
      sourceInformationMarkerStart($composer_31, 681046242, 'C606@28383L11:OutlinedTextField.kt#uh7d8r');
      textField($composer_31, 14 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_31);
      sourceInformationMarkerEnd($composer_30);
      $composer_29.h1x();
      $composer_29.n1z();
      $composer_28.h1x();
      $composer_27.h1x();
      $composer_6.f1x(-1484246552);
      sourceInformation($composer_6, '610@28459L237');
      if (!(label == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_16 = layoutId(wrapContentHeight(heightIn(Companion_instance, lerp(get_MinTextLineHeight(), get_MinFocusedLabelLineHeight(), animationProgress))), get_LabelId());
        var contentAlignment_4 = null;
        var propagateMinConstraints_4 = false;
        var $composer_32 = $composer_6;
        $composer_32.f1x(1330882304);
        sourceInformation($composer_32, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_16 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_4 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_4 = false;
        var measurePolicy_5 = rememberBoxMeasurePolicy$composable(contentAlignment_4, propagateMinConstraints_4, $composer_32, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_17 = modifier_16;
        var $changed_12 = 112 & 0 << 3;
        var modifier_18 = modifier_17;
        var $composer_33 = $composer_32;
        $composer_33.f1x(1725976829);
        sourceInformation($composer_33, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_18 = Companion_instance;
        var compositeKeyHash_5 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_33, 0);
        var localMap_5 = $composer_33.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_5 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_5 = materializerOf(modifier_18);
        var $changed_13 = 6 | 7168 & $changed_12 << 9;
        var $composer_34 = $composer_33;
        var tmp_19 = $composer_34.u1y();
        if (!isInterface(tmp_19, Applier)) {
          invalidApplier();
        }
        $composer_34.k1z();
        if ($composer_34.v1y()) {
          $composer_34.l1z(factory_5);
        } else {
          $composer_34.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_5 = _Updater___init__impl__rbfxm8($composer_34);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, measurePolicy_5, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, localMap_5, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_5 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_5 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_5);
        var tmp_20;
        if ($this$with_5.v1y() ? true : !equals($this$with_5.r1z(), compositeKeyHash_5)) {
          $this$with_5.s1z(compositeKeyHash_5);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_5).q1z(compositeKeyHash_5, block_5);
          tmp_20 = Unit_instance;
        }
        skippableUpdate_5(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_34)), $composer_34, 112 & $changed_13 >> 3);
        $composer_34.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_35 = $composer_34;
        sourceInformationMarkerStart($composer_35, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_36 = $composer_35;
        sourceInformationMarkerStart($composer_36, 681046546, 'C614@28687L7:OutlinedTextField.kt#uh7d8r');
        label($composer_36, 14 & $dirty >> 9);
        sourceInformationMarkerEnd($composer_36);
        sourceInformationMarkerEnd($composer_35);
        $composer_34.h1x();
        $composer_34.n1z();
        $composer_33.h1x();
        $composer_32.h1x();
      }
      $composer_6.h1x();
      $composer_6.f1x(-1390179723);
      sourceInformation($composer_6, '619@28822L269');
      if (!(supporting == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_19 = padding(wrapContentHeight(heightIn(layoutId(Companion_instance, get_SupportingId()), get_MinSupportingTextLineHeight())), TextFieldDefaults_getInstance().kfu());
        var contentAlignment_5 = null;
        var propagateMinConstraints_5 = false;
        var $composer_37 = $composer_6;
        $composer_37.f1x(1330882304);
        sourceInformation($composer_37, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_19 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_5 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_5 = false;
        var measurePolicy_6 = rememberBoxMeasurePolicy$composable(contentAlignment_5, propagateMinConstraints_5, $composer_37, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_20 = modifier_19;
        var $changed_14 = 112 & 0 << 3;
        var modifier_21 = modifier_20;
        var $composer_38 = $composer_37;
        $composer_38.f1x(1725976829);
        sourceInformation($composer_38, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_21 = Companion_instance;
        var compositeKeyHash_6 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_38, 0);
        var localMap_6 = $composer_38.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_6 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_6 = materializerOf(modifier_21);
        var $changed_15 = 6 | 7168 & $changed_14 << 9;
        var $composer_39 = $composer_38;
        var tmp_21 = $composer_39.u1y();
        if (!isInterface(tmp_21, Applier)) {
          invalidApplier();
        }
        $composer_39.k1z();
        if ($composer_39.v1y()) {
          $composer_39.l1z(factory_6);
        } else {
          $composer_39.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_6 = _Updater___init__impl__rbfxm8($composer_39);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_6, measurePolicy_6, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_6, localMap_6, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_6 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_6 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_6);
        var tmp_22;
        if ($this$with_6.v1y() ? true : !equals($this$with_6.r1z(), compositeKeyHash_6)) {
          $this$with_6.s1z(compositeKeyHash_6);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_6).q1z(compositeKeyHash_6, block_6);
          tmp_22 = Unit_instance;
        }
        skippableUpdate_6(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_39)), $composer_39, 112 & $changed_15 >> 3);
        $composer_39.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_40 = $composer_39;
        sourceInformationMarkerStart($composer_40, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.OutlinedTextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_41 = $composer_40;
        sourceInformationMarkerStart($composer_41, 681046936, 'C624@29077L12:OutlinedTextField.kt#uh7d8r');
        supporting($composer_41, 14 & $dirty1 >> 6);
        sourceInformationMarkerEnd($composer_41);
        sourceInformationMarkerEnd($composer_40);
        $composer_39.h1x();
        $composer_39.n1z();
        $composer_38.h1x();
        $composer_37.h1x();
      }
      $composer_6.h1x();
      sourceInformationMarkerEnd($composer_6);
      $composer_5.h1x();
      $composer_5.n1z();
      $composer_4.h1x();
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
      tmp0_safe_receiver.w2e(OutlinedTextFieldLayout$composable$lambda(modifier, textField, placeholder, label, leading, trailing, prefix, suffix, singleLine, animationProgress, onLabelMeasured, container, supporting, paddingValues, $changed, $changed1));
    }
  }
  function intrinsicWidth(_this__u8e3s4, $this, measurables, height, intrinsicMeasurer) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator = measurables.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element), get_TextFieldId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldWidth = intrinsicMeasurer(tmp$ret$1, height);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_0), get_LabelId())) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp = intrinsicMeasurer(tmp0_safe_receiver, height);
    }
    var tmp1_elvis_lhs = tmp;
    var labelWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.v();
      while (tmp0_iterator_1.w()) {
        var element_1 = tmp0_iterator_1.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_1), get_TrailingId())) {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var tmp2_safe_receiver = tmp$ret$8;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_0 = intrinsicMeasurer(tmp2_safe_receiver, height);
    }
    var tmp3_elvis_lhs = tmp_0;
    var trailingWidth = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.v();
      while (tmp0_iterator_2.w()) {
        var element_2 = tmp0_iterator_2.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_2), get_LeadingId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp4_safe_receiver = tmp$ret$13;
    var tmp_1;
    if (tmp4_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_1 = intrinsicMeasurer(tmp4_safe_receiver, height);
    }
    var tmp5_elvis_lhs = tmp_1;
    var leadingWidth = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$18;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.v();
      while (tmp0_iterator_3.w()) {
        var element_3 = tmp0_iterator_3.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_3), get_PrefixId())) {
          tmp$ret$18 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$18 = null;
    }
    var tmp6_safe_receiver = tmp$ret$18;
    var tmp_2;
    if (tmp6_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_2 = intrinsicMeasurer(tmp6_safe_receiver, height);
    }
    var tmp7_elvis_lhs = tmp_2;
    var prefixWidth = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$23;
    $l$block_4: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_4 = measurables.v();
      while (tmp0_iterator_4.w()) {
        var element_4 = tmp0_iterator_4.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_4), get_SuffixId())) {
          tmp$ret$23 = element_4;
          break $l$block_4;
        }
      }
      tmp$ret$23 = null;
    }
    var tmp8_safe_receiver = tmp$ret$23;
    var tmp_3;
    if (tmp8_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_3 = intrinsicMeasurer(tmp8_safe_receiver, height);
    }
    var tmp9_elvis_lhs = tmp_3;
    var suffixWidth = tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$28;
    $l$block_5: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_5 = measurables.v();
      while (tmp0_iterator_5.w()) {
        var element_5 = tmp0_iterator_5.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_5), get_PlaceholderId())) {
          tmp$ret$28 = element_5;
          break $l$block_5;
        }
      }
      tmp$ret$28 = null;
    }
    var tmp10_safe_receiver = tmp$ret$28;
    var tmp_4;
    if (tmp10_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_4 = intrinsicMeasurer(tmp10_safe_receiver, height);
    }
    var tmp11_elvis_lhs = tmp_4;
    var placeholderWidth = tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs;
    return calculateWidth(leadingWidth, trailingWidth, prefixWidth, suffixWidth, textFieldWidth, labelWidth, placeholderWidth, $this.nfu_1 < 1.0, get_ZeroConstraints(), _this__u8e3s4.h3b(), $this.ofu_1);
  }
  function intrinsicHeight(_this__u8e3s4, $this, measurables, width, intrinsicMeasurer) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator = measurables.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element), get_TextFieldId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldHeight = intrinsicMeasurer(tmp$ret$1, width);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_0), get_LabelId())) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp = intrinsicMeasurer(tmp0_safe_receiver, width);
    }
    var tmp1_elvis_lhs = tmp;
    var labelHeight = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.v();
      while (tmp0_iterator_1.w()) {
        var element_1 = tmp0_iterator_1.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_1), get_TrailingId())) {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var tmp2_safe_receiver = tmp$ret$8;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_0 = intrinsicMeasurer(tmp2_safe_receiver, width);
    }
    var tmp3_elvis_lhs = tmp_0;
    var trailingHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.v();
      while (tmp0_iterator_2.w()) {
        var element_2 = tmp0_iterator_2.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_2), get_LeadingId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp4_safe_receiver = tmp$ret$13;
    var tmp_1;
    if (tmp4_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_1 = intrinsicMeasurer(tmp4_safe_receiver, width);
    }
    var tmp5_elvis_lhs = tmp_1;
    var leadingHeight = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$18;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.v();
      while (tmp0_iterator_3.w()) {
        var element_3 = tmp0_iterator_3.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_3), get_PrefixId())) {
          tmp$ret$18 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$18 = null;
    }
    var tmp6_safe_receiver = tmp$ret$18;
    var tmp_2;
    if (tmp6_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_2 = intrinsicMeasurer(tmp6_safe_receiver, width);
    }
    var tmp7_elvis_lhs = tmp_2;
    var prefixHeight = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$23;
    $l$block_4: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_4 = measurables.v();
      while (tmp0_iterator_4.w()) {
        var element_4 = tmp0_iterator_4.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_4), get_SuffixId())) {
          tmp$ret$23 = element_4;
          break $l$block_4;
        }
      }
      tmp$ret$23 = null;
    }
    var tmp8_safe_receiver = tmp$ret$23;
    var tmp_3;
    if (tmp8_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_3 = intrinsicMeasurer(tmp8_safe_receiver, width);
    }
    var tmp9_elvis_lhs = tmp_3;
    var suffixHeight = tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$28;
    $l$block_5: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_5 = measurables.v();
      while (tmp0_iterator_5.w()) {
        var element_5 = tmp0_iterator_5.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_5), get_PlaceholderId())) {
          tmp$ret$28 = element_5;
          break $l$block_5;
        }
      }
      tmp$ret$28 = null;
    }
    var tmp10_safe_receiver = tmp$ret$28;
    var tmp_4;
    if (tmp10_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_4 = intrinsicMeasurer(tmp10_safe_receiver, width);
    }
    var tmp11_elvis_lhs = tmp_4;
    var placeholderHeight = tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$33;
    $l$block_6: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_6 = measurables.v();
      while (tmp0_iterator_6.w()) {
        var element_6 = tmp0_iterator_6.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_6), get_SupportingId())) {
          tmp$ret$33 = element_6;
          break $l$block_6;
        }
      }
      tmp$ret$33 = null;
    }
    var tmp12_safe_receiver = tmp$ret$33;
    var tmp_5;
    if (tmp12_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_5 = intrinsicMeasurer(tmp12_safe_receiver, width);
    }
    var tmp13_elvis_lhs = tmp_5;
    var supportingHeight = tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs;
    return calculateHeight(leadingHeight, trailingHeight, prefixHeight, suffixHeight, textFieldHeight, labelHeight, placeholderHeight, supportingHeight, get_ZeroConstraints(), _this__u8e3s4.h3b(), $this.ofu_1);
  }
  function OutlinedTextFieldMeasurePolicy$measure$lambda($totalHeight, $width, $leadingPlaceable, $trailingPlaceable, $prefixPlaceable, $suffixPlaceable, $textFieldPlaceable, $labelPlaceable, $placeholderPlaceable, $containerPlaceable, $supportingPlaceable, this$0, $this_measure) {
    return function ($this$layout) {
      place($this$layout, $totalHeight, $width, $leadingPlaceable, $trailingPlaceable, $prefixPlaceable, $suffixPlaceable, $textFieldPlaceable, $labelPlaceable, $placeholderPlaceable, $containerPlaceable, $supportingPlaceable, this$0.nfu_1, this$0.mfu_1, $this_measure.h3b(), $this_measure.o4f(), this$0.ofu_1);
      return Unit_instance;
    };
  }
  function OutlinedTextFieldMeasurePolicy$maxIntrinsicHeight$lambda(intrinsicMeasurable, w) {
    return intrinsicMeasurable.i5r(w);
  }
  function OutlinedTextFieldMeasurePolicy$minIntrinsicHeight$lambda(intrinsicMeasurable, w) {
    return intrinsicMeasurable.h5r(w);
  }
  function OutlinedTextFieldMeasurePolicy$maxIntrinsicWidth$lambda(intrinsicMeasurable, h) {
    return intrinsicMeasurable.g5r(h);
  }
  function OutlinedTextFieldMeasurePolicy$minIntrinsicWidth$lambda(intrinsicMeasurable, h) {
    return intrinsicMeasurable.f5r(h);
  }
  function OutlinedTextFieldMeasurePolicy(onLabelMeasured, singleLine, animationProgress, paddingValues) {
    this.lfu_1 = onLabelMeasured;
    this.mfu_1 = singleLine;
    this.nfu_1 = animationProgress;
    this.ofu_1 = paddingValues;
  }
  protoOf(OutlinedTextFieldMeasurePolicy).e6z = function (_this__u8e3s4, measurables, constraints) {
    var occupiedSpaceHorizontally = 0;
    var occupiedSpaceVertically = 0;
    var bottomPadding = _this__u8e3s4.k3b(this.ofu_1.i97());
    var relaxedConstraints = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = measurables.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element), get_LeadingId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var leadingPlaceable = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l5l(relaxedConstraints);
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(leadingPlaceable) | 0;
    // Inline function 'kotlin.math.max' call
    var a = occupiedSpaceVertically;
    var b = heightOrZero(leadingPlaceable);
    occupiedSpaceVertically = Math.max(a, b);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_0), get_TrailingId())) {
          tmp$ret$5 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp1_safe_receiver = tmp$ret$5;
    var trailingPlaceable = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l5l(offset(relaxedConstraints, -occupiedSpaceHorizontally | 0));
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(trailingPlaceable) | 0;
    // Inline function 'kotlin.math.max' call
    var a_0 = occupiedSpaceVertically;
    var b_0 = heightOrZero(trailingPlaceable);
    occupiedSpaceVertically = Math.max(a_0, b_0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$9;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.v();
      while (tmp0_iterator_1.w()) {
        var element_1 = tmp0_iterator_1.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_1), get_PrefixId())) {
          tmp$ret$9 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$9 = null;
    }
    var tmp2_safe_receiver = tmp$ret$9;
    var prefixPlaceable = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.l5l(offset(relaxedConstraints, -occupiedSpaceHorizontally | 0));
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(prefixPlaceable) | 0;
    // Inline function 'kotlin.math.max' call
    var a_1 = occupiedSpaceVertically;
    var b_1 = heightOrZero(prefixPlaceable);
    occupiedSpaceVertically = Math.max(a_1, b_1);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.v();
      while (tmp0_iterator_2.w()) {
        var element_2 = tmp0_iterator_2.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_2), get_SuffixId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp3_safe_receiver = tmp$ret$13;
    var suffixPlaceable = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.l5l(offset(relaxedConstraints, -occupiedSpaceHorizontally | 0));
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(suffixPlaceable) | 0;
    // Inline function 'kotlin.math.max' call
    var a_2 = occupiedSpaceVertically;
    var b_2 = heightOrZero(suffixPlaceable);
    occupiedSpaceVertically = Math.max(a_2, b_2);
    var isLabelInMiddleSection = this.nfu_1 < 1.0;
    var labelHorizontalPaddingOffset = _this__u8e3s4.k3b(this.ofu_1.a96(_this__u8e3s4.o4f())) + _this__u8e3s4.k3b(this.ofu_1.z95(_this__u8e3s4.o4f())) | 0;
    var tmp;
    if (isLabelInMiddleSection) {
      tmp = (-occupiedSpaceHorizontally | 0) - labelHorizontalPaddingOffset | 0;
    } else {
      tmp = -labelHorizontalPaddingOffset | 0;
    }
    var labelConstraints = offset(relaxedConstraints, tmp, -bottomPadding | 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$17;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.v();
      while (tmp0_iterator_3.w()) {
        var element_3 = tmp0_iterator_3.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_3), get_LabelId())) {
          tmp$ret$17 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$17 = null;
    }
    var tmp4_safe_receiver = tmp$ret$17;
    var labelPlaceable = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.l5l(labelConstraints);
    if (labelPlaceable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.lfu_1(new Size_0(Size(labelPlaceable.m5l_1, labelPlaceable.n5l_1)));
    }
    // Inline function 'kotlin.math.max' call
    var a_3 = heightOrZero(labelPlaceable) / 2 | 0;
    var b_3 = _this__u8e3s4.k3b(this.ofu_1.h97());
    var topPadding = Math.max(a_3, b_3);
    var textConstraints = Constraints__copy$default_impl_f452rp(offset(constraints, -occupiedSpaceHorizontally | 0, (-bottomPadding | 0) - topPadding | 0), VOID, VOID, 0);
    var tmp$ret$22;
    $l$block_4: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator_4 = measurables.v();
      while (tmp0_iterator_4.w()) {
        var element_4 = tmp0_iterator_4.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_4), get_TextFieldId())) {
          tmp$ret$22 = element_4;
          break $l$block_4;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldPlaceable = tmp$ret$22.l5l(textConstraints);
    var placeholderConstraints = Constraints__copy$default_impl_f452rp(textConstraints, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$24;
    $l$block_5: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_5 = measurables.v();
      while (tmp0_iterator_5.w()) {
        var element_5 = tmp0_iterator_5.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_5), get_PlaceholderId())) {
          tmp$ret$24 = element_5;
          break $l$block_5;
        }
      }
      tmp$ret$24 = null;
    }
    var tmp6_safe_receiver = tmp$ret$24;
    var placeholderPlaceable = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.l5l(placeholderConstraints);
    // Inline function 'kotlin.math.max' call
    var a_4 = occupiedSpaceVertically;
    // Inline function 'kotlin.math.max' call
    var a_5 = heightOrZero(textFieldPlaceable);
    var b_4 = heightOrZero(placeholderPlaceable);
    var b_5 = (Math.max(a_5, b_4) + topPadding | 0) + bottomPadding | 0;
    occupiedSpaceVertically = Math.max(a_4, b_5);
    var supportingConstraints = Constraints__copy$default_impl_f452rp(offset(relaxedConstraints, VOID, -occupiedSpaceVertically | 0), VOID, VOID, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$29;
    $l$block_6: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_6 = measurables.v();
      while (tmp0_iterator_6.w()) {
        var element_6 = tmp0_iterator_6.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_6), get_SupportingId())) {
          tmp$ret$29 = element_6;
          break $l$block_6;
        }
      }
      tmp$ret$29 = null;
    }
    var tmp7_safe_receiver = tmp$ret$29;
    var supportingPlaceable = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.l5l(supportingConstraints);
    var supportingHeight = heightOrZero(supportingPlaceable);
    var width = calculateWidth(widthOrZero(leadingPlaceable), widthOrZero(trailingPlaceable), widthOrZero(prefixPlaceable), widthOrZero(suffixPlaceable), textFieldPlaceable.m5l_1, widthOrZero(labelPlaceable), widthOrZero(placeholderPlaceable), isLabelInMiddleSection, constraints, _this__u8e3s4.h3b(), this.ofu_1);
    var totalHeight = calculateHeight(heightOrZero(leadingPlaceable), heightOrZero(trailingPlaceable), heightOrZero(prefixPlaceable), heightOrZero(suffixPlaceable), textFieldPlaceable.n5l_1, heightOrZero(labelPlaceable), heightOrZero(placeholderPlaceable), heightOrZero(supportingPlaceable), constraints, _this__u8e3s4.h3b(), this.ofu_1);
    var height = totalHeight - supportingHeight | 0;
    var tmp$ret$32;
    $l$block_7: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator_7 = measurables.v();
      while (tmp0_iterator_7.w()) {
        var element_7 = tmp0_iterator_7.y();
        // Inline function 'androidx.compose.material3.OutlinedTextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_7), get_ContainerId())) {
          tmp$ret$32 = element_7;
          break $l$block_7;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var tmp_0 = tmp$ret$32;
    var tmp_1;
    Companion_getInstance_7();
    if (!(width === 2147483647)) {
      tmp_1 = width;
    } else {
      tmp_1 = 0;
    }
    var tmp_2 = tmp_1;
    var tmp_3;
    Companion_getInstance_7();
    if (!(height === 2147483647)) {
      tmp_3 = height;
    } else {
      tmp_3 = 0;
    }
    var containerPlaceable = tmp_0.l5l(Constraints_0(tmp_2, width, tmp_3, height));
    return _this__u8e3s4.s5l(width, totalHeight, VOID, OutlinedTextFieldMeasurePolicy$measure$lambda(totalHeight, width, leadingPlaceable, trailingPlaceable, prefixPlaceable, suffixPlaceable, textFieldPlaceable, labelPlaceable, placeholderPlaceable, containerPlaceable, supportingPlaceable, this, _this__u8e3s4));
  };
  protoOf(OutlinedTextFieldMeasurePolicy).i6z = function (_this__u8e3s4, measurables, width) {
    return intrinsicHeight(_this__u8e3s4, this, measurables, width, OutlinedTextFieldMeasurePolicy$maxIntrinsicHeight$lambda);
  };
  protoOf(OutlinedTextFieldMeasurePolicy).g6z = function (_this__u8e3s4, measurables, width) {
    return intrinsicHeight(_this__u8e3s4, this, measurables, width, OutlinedTextFieldMeasurePolicy$minIntrinsicHeight$lambda);
  };
  protoOf(OutlinedTextFieldMeasurePolicy).h6z = function (_this__u8e3s4, measurables, height) {
    return intrinsicWidth(_this__u8e3s4, this, measurables, height, OutlinedTextFieldMeasurePolicy$maxIntrinsicWidth$lambda);
  };
  protoOf(OutlinedTextFieldMeasurePolicy).f6z = function (_this__u8e3s4, measurables, height) {
    return intrinsicWidth(_this__u8e3s4, this, measurables, height, OutlinedTextFieldMeasurePolicy$minIntrinsicWidth$lambda);
  };
  function calculateWidth(leadingPlaceableWidth, trailingPlaceableWidth, prefixPlaceableWidth, suffixPlaceableWidth, textFieldPlaceableWidth, labelPlaceableWidth, placeholderPlaceableWidth, isLabelInMiddleSection, constraints, density, paddingValues) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    var affixTotalWidth = prefixPlaceableWidth + suffixPlaceableWidth | 0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = textFieldPlaceableWidth + affixTotalWidth | 0;
    var b = placeholderPlaceableWidth + affixTotalWidth | 0;
    var c = isLabelInMiddleSection ? labelPlaceableWidth : 0;
    var middleSection = Math.max(a, b, c);
    var wrappedWidth = (leadingPlaceableWidth + middleSection | 0) + trailingPlaceableWidth | 0;
    var tmp;
    if (!isLabelInMiddleSection) {
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var this_0 = paddingValues.a96(LayoutDirection_Ltr_getInstance());
      var other = paddingValues.z95(LayoutDirection_Ltr_getInstance());
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) + _Dp___get_value__impl__geb1vb(other));
      var labelHorizontalPadding = _Dp___get_value__impl__geb1vb(tmp$ret$1) * density;
      // Inline function 'kotlin.math.roundToInt' call
      tmp = labelPlaceableWidth + roundToInt(labelHorizontalPadding) | 0;
    } else {
      tmp = 0;
    }
    var focusedLabelWidth = tmp;
    // Inline function 'kotlin.comparisons.maxOf' call
    var c_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    return Math.max(wrappedWidth, focusedLabelWidth, c_0);
  }
  function calculateHeight(leadingPlaceableHeight, trailingPlaceableHeight, prefixPlaceableHeight, suffixPlaceableHeight, textFieldPlaceableHeight, labelPlaceableHeight, placeholderPlaceableHeight, supportingPlaceableHeight, constraints, density, paddingValues) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    // Inline function 'kotlin.math.max' call
    var inputFieldHeight = Math.max(textFieldPlaceableHeight, placeholderPlaceableHeight);
    var topPadding = _Dp___get_value__impl__geb1vb(paddingValues.h97()) * density;
    var bottomPadding = _Dp___get_value__impl__geb1vb(paddingValues.i97()) * density;
    var tmp = inputFieldHeight + bottomPadding;
    // Inline function 'kotlin.math.max' call
    var b = labelPlaceableHeight / 2.0;
    var middleSectionHeight = tmp + Math.max(topPadding, b);
    // Inline function 'kotlin.math.max' call
    var a = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp$ret$2 = roundToInt(middleSectionHeight);
    var b_0 = maxOf(leadingPlaceableHeight, new Int32Array([trailingPlaceableHeight, prefixPlaceableHeight, suffixPlaceableHeight, tmp$ret$2])) + supportingPlaceableHeight | 0;
    return Math.max(a, b_0);
  }
  function place(_this__u8e3s4, totalHeight, width, leadingPlaceable, trailingPlaceable, prefixPlaceable, suffixPlaceable, textFieldPlaceable, labelPlaceable, placeholderPlaceable, containerPlaceable, supportingPlaceable, animationProgress, singleLine, density, layoutDirection, paddingValues) {
    _init_properties_OutlinedTextField_kt__36w0dj();
    _this__u8e3s4.c72(containerPlaceable, Companion_getInstance_8().g3c_1);
    var height = totalHeight - heightOrZero(supportingPlaceable) | 0;
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = _Dp___get_value__impl__geb1vb(paddingValues.h97()) * density;
    var topPadding = roundToInt(this_0);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = _Dp___get_value__impl__geb1vb(calculateStartPadding(paddingValues, layoutDirection)) * density;
    var startPadding = roundToInt(this_1);
    var iconPadding = _Dp___get_value__impl__geb1vb(get_HorizontalIconPadding()) * density;
    if (leadingPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(leadingPlaceable, 0, Companion_getInstance_4().n5i_1.x5i(leadingPlaceable.n5l_1, height));
    }
    if (trailingPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(trailingPlaceable, width - trailingPlaceable.m5l_1 | 0, Companion_getInstance_4().n5i_1.x5i(trailingPlaceable.n5l_1, height));
    }
    if (labelPlaceable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (singleLine) {
        tmp = Companion_getInstance_4().n5i_1.x5i(labelPlaceable.n5l_1, height);
      } else {
        tmp = topPadding;
      }
      var startPositionY = tmp;
      var positionY = lerp_0(startPositionY, -(labelPlaceable.n5l_1 / 2 | 0) | 0, animationProgress);
      // Inline function 'kotlin.math.roundToInt' call
      var tmp_0;
      if (leadingPlaceable == null) {
        tmp_0 = 0.0;
      } else {
        tmp_0 = (widthOrZero(leadingPlaceable) - iconPadding) * (1 - animationProgress);
      }
      var this_2 = tmp_0;
      var positionX = roundToInt(this_2) + startPadding | 0;
      _this__u8e3s4.e5r(labelPlaceable, positionX, positionY);
    }
    if (prefixPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(prefixPlaceable, widthOrZero(leadingPlaceable), place$calculateVerticalPosition(singleLine, height, topPadding, labelPlaceable, prefixPlaceable));
    }
    if (suffixPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(suffixPlaceable, (width - widthOrZero(trailingPlaceable) | 0) - suffixPlaceable.m5l_1 | 0, place$calculateVerticalPosition(singleLine, height, topPadding, labelPlaceable, suffixPlaceable));
    }
    var textHorizontalPosition = widthOrZero(leadingPlaceable) + widthOrZero(prefixPlaceable) | 0;
    _this__u8e3s4.e5r(textFieldPlaceable, textHorizontalPosition, place$calculateVerticalPosition(singleLine, height, topPadding, labelPlaceable, textFieldPlaceable));
    if (placeholderPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(placeholderPlaceable, textHorizontalPosition, place$calculateVerticalPosition(singleLine, height, topPadding, labelPlaceable, placeholderPlaceable));
    }
    if (supportingPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(supportingPlaceable, 0, height);
    }
  }
  function place$calculateVerticalPosition($singleLine, height, topPadding, $labelPlaceable, placeable) {
    // Inline function 'kotlin.math.max' call
    var tmp;
    if ($singleLine) {
      tmp = Companion_getInstance_4().n5i_1.x5i(placeable.n5l_1, height);
    } else {
      tmp = topPadding;
    }
    var a = tmp;
    var b = heightOrZero($labelPlaceable) / 2 | 0;
    return Math.max(a, b);
  }
  function outlineCutout$lambda($labelSize, $paddingValues) {
    return function ($this$drawWithContent) {
      var labelWidth = _Size___get_width__impl__58y75t($labelSize);
      var tmp;
      if (labelWidth > 0.0) {
        var innerPadding = $this$drawWithContent.j3b(get_OutlinedTextFieldInnerPadding());
        var leftLtr = $this$drawWithContent.j3b($paddingValues.a96($this$drawWithContent.o4f())) - innerPadding;
        var rightLtr = leftLtr + labelWidth + 2 * innerPadding;
        var left = $this$drawWithContent.o4f().j9_1 === 1 ? _Size___get_width__impl__58y75t($this$drawWithContent.m39()) - rightLtr : coerceAtLeast(leftLtr, 0.0);
        var right = $this$drawWithContent.o4f().j9_1 === 1 ? _Size___get_width__impl__58y75t($this$drawWithContent.m39()) - coerceAtLeast(leftLtr, 0.0) : rightLtr;
        var labelHeight = _Size___get_height__impl__a04p02($labelSize);
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var top = -labelHeight / 2;
        var bottom = labelHeight / 2;
        var clipOp = Companion_getInstance_9().a44_1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = $this$drawWithContent.p4f();
        var previousSize = $this$with.m39();
        $this$with.n3p().r43();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        $this$with.n4f().y43(left, top, right, bottom, clipOp);
        // Inline function 'androidx.compose.material3.outlineCutout.<anonymous>.<anonymous>' call
        $this$drawWithContent.s5p();
        $this$with.n3p().s43();
        $this$with.m4f(previousSize);
        tmp = Unit_instance;
      } else {
        $this$drawWithContent.s5p();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function OutlinedTextFieldLayout$composable$lambda($modifier, $textField, $placeholder, $label, $leading, $trailing, $prefix, $suffix, $singleLine, $animationProgress, $onLabelMeasured, $container, $supporting, $paddingValues, $$changed, $$changed1) {
    return function ($composer, $force) {
      OutlinedTextFieldLayout$composable($modifier, $textField, $placeholder, $label, $leading, $trailing, $prefix, $suffix, $singleLine, $animationProgress, $onLabelMeasured, $container, $supporting, $paddingValues, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_instance;
    };
  }
  var properties_initialized_OutlinedTextField_kt_gr7zs5;
  function _init_properties_OutlinedTextField_kt__36w0dj() {
    if (!properties_initialized_OutlinedTextField_kt_gr7zs5) {
      properties_initialized_OutlinedTextField_kt_gr7zs5 = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      OutlinedTextFieldInnerPadding = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      OutlinedTextFieldTopPadding = _Dp___init__impl__ms3zkb(8);
    }
  }
  function get_LocalFabPlacement() {
    _init_properties_Scaffold_kt__o4wwkq();
    return LocalFabPlacement;
  }
  var LocalFabPlacement;
  function get_FabSpacing() {
    _init_properties_Scaffold_kt__o4wwkq();
    return FabSpacing;
  }
  var FabSpacing;
  function FabPlacement(left, width, height) {
    this.pfu_1 = left;
    this.qfu_1 = width;
    this.rfu_1 = height;
  }
  function Scaffold$composable(modifier, topBar, bottomBar, snackbarHost, floatingActionButton, floatingActionButtonPosition, containerColor, contentColor, contentWindowInsets, content, $composer, $changed, $default) {
    _init_properties_Scaffold_kt__o4wwkq();
    var modifier_0 = {_v: modifier};
    var topBar_0 = {_v: topBar};
    var bottomBar_0 = {_v: bottomBar};
    var snackbarHost_0 = {_v: snackbarHost};
    var floatingActionButton_0 = {_v: floatingActionButton};
    var floatingActionButtonPosition_0 = {_v: new FabPosition(floatingActionButtonPosition)};
    var containerColor_0 = {_v: new Color(containerColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var contentWindowInsets_0 = {_v: contentWindowInsets};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1110485146);
    sourceInformation($composer_0, 'C(Scaffold$composable)P(7,9!1,8,5,6:c#material3.FabPosition,1:c#ui.graphics.Color,3:c#ui.graphics.Color,4)80@4062L11,81@4112L31,82@4202L19,85@4280L405:Scaffold.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(topBar_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(bottomBar_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(snackbarHost_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1z(floatingActionButton_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.v1z(_get_value__a43j40(floatingActionButtonPosition_0._v.sfu_1)) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ((($default & 64) === 0 ? $composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(containerColor_0._v.p41_1))) : false) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ((($default & 128) === 0 ? $composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.p41_1))) : false) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ((($default & 256) === 0 ? $composer_0.t1z(contentWindowInsets_0._v) : false) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 536870912 : 268435456);
    if (!(($dirty & 1533916891) === 306783378) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          topBar_0._v = ComposableSingletons$ScaffoldKt_getInstance().tfu_1;
        }
        if (!(($default & 4) === 0)) {
          bottomBar_0._v = ComposableSingletons$ScaffoldKt_getInstance().ufu_1;
        }
        if (!(($default & 8) === 0)) {
          snackbarHost_0._v = ComposableSingletons$ScaffoldKt_getInstance().vfu_1;
        }
        if (!(($default & 16) === 0)) {
          floatingActionButton_0._v = ComposableSingletons$ScaffoldKt_getInstance().wfu_1;
        }
        if (!(($default & 32) === 0)) {
          floatingActionButtonPosition_0._v = new FabPosition(Companion_getInstance_19().yfu_1);
        }
        if (!(($default & 64) === 0)) {
          containerColor_0._v = new Color(MaterialTheme_instance.wfj($composer_0, 6).k4z());
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          contentColor_0._v = new Color(contentColorFor$composable(containerColor_0._v.p41_1, $composer_0, 14 & $dirty >> 18));
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          contentWindowInsets_0._v = ScaffoldDefaults_instance.afv($composer_0, 6);
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-1110485146, $dirty, -1, 'androidx.compose.material3.Scaffold$composable (Scaffold.kt:73)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = containerColor_0._v;
      var tmp_1 = contentColor_0._v;
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.Scaffold$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -1979205334, true, Scaffold$composable$lambda(floatingActionButtonPosition_0, topBar_0, content, snackbarHost_0, floatingActionButton_0, contentWindowInsets_0, bottomBar_0, $dirty));
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
      var tmp_5;
      if (invalid ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.Scaffold$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.s1z(value);
        tmp_5 = value;
      } else {
        tmp_5 = it;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.h1x();
      Surface$composable_0(tmp, null, tmp_0.p41_1, tmp_1.p41_1, tmp_2, tmp_3, null, tmp0, $composer_0, 12582912 | 14 & $dirty | 896 & $dirty >> 12 | 7168 & $dirty >> 12, 114);
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
      tmp0_safe_receiver.w2e(Scaffold$composable$lambda_0(modifier_0, topBar_0, bottomBar_0, snackbarHost_0, floatingActionButton_0, floatingActionButtonPosition_0, containerColor_0, contentColor_0, contentWindowInsets_0, content, $changed, $default));
    }
  }
  function _FabPosition___init__impl__9ib2hj(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.xfu_1 = _FabPosition___init__impl__9ib2hj(0);
    this.yfu_1 = _FabPosition___init__impl__9ib2hj(1);
  }
  var Companion_instance_1;
  function Companion_getInstance_19() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function FabPosition__toString_impl_vcmu5r($this) {
    return $this === Companion_getInstance_19().xfu_1 ? 'FabPosition.Center' : 'FabPosition.End';
  }
  function FabPosition__hashCode_impl_hxbb0i($this) {
    return $this;
  }
  function FabPosition__equals_impl_9xsrq6($this, other) {
    if (!(other instanceof FabPosition))
      return false;
    if (!($this === (other instanceof FabPosition ? other.sfu_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FabPosition(value) {
    Companion_getInstance_19();
    this.sfu_1 = value;
  }
  protoOf(FabPosition).toString = function () {
    return FabPosition__toString_impl_vcmu5r(this.sfu_1);
  };
  protoOf(FabPosition).hashCode = function () {
    return FabPosition__hashCode_impl_hxbb0i(this.sfu_1);
  };
  protoOf(FabPosition).equals = function (other) {
    return FabPosition__equals_impl_9xsrq6(this.sfu_1, other);
  };
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_1$lambda_bni9o6($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(1519764251, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-1.<anonymous> (Scaffold.kt:75)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_2$lambda_h647e1($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(836907051, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-2.<anonymous> (Scaffold.kt:76)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_3$lambda_p1ddiw($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-297736342, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-3.<anonymous> (Scaffold.kt:77)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda_4$lambda_3s93jb($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(1545895435, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda-4.<anonymous> (Scaffold.kt:78)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ScaffoldKt() {
    ComposableSingletons$ScaffoldKt_instance = this;
    var tmp = this;
    tmp.tfu_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(1519764251, false, ComposableSingletons$ScaffoldKt$lambda_1$lambda_bni9o6));
    var tmp_0 = this;
    tmp_0.ufu_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(836907051, false, ComposableSingletons$ScaffoldKt$lambda_2$lambda_h647e1));
    var tmp_1 = this;
    tmp_1.vfu_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-297736342, false, ComposableSingletons$ScaffoldKt$lambda_3$lambda_p1ddiw));
    var tmp_2 = this;
    tmp_2.wfu_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(1545895435, false, ComposableSingletons$ScaffoldKt$lambda_4$lambda_3s93jb));
  }
  var ComposableSingletons$ScaffoldKt_instance;
  function ComposableSingletons$ScaffoldKt_getInstance() {
    if (ComposableSingletons$ScaffoldKt_instance == null)
      new ComposableSingletons$ScaffoldKt();
    return ComposableSingletons$ScaffoldKt_instance;
  }
  function ScaffoldDefaults() {
    this.zfu_1 = 0;
  }
  protoOf(ScaffoldDefaults).afv = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(945866748);
    sourceInformation($composer_0, 'C($get-contentWindowInsets$$composable)279@12437L29:Scaffold.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(945866748, $changed, -1, 'androidx.compose.material3.ScaffoldDefaults.$get-contentWindowInsets$$composable (Scaffold.kt:279)');
    }
    var tmp0 = $get_systemBarsForVisualComponents$$composable_kg1zeq(Companion_instance_0, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  var ScaffoldDefaults_instance;
  function ScaffoldDefaults_getInstance() {
    return ScaffoldDefaults_instance;
  }
  function ScaffoldLayout$composable(fabPosition, topBar, content, snackbar, fab, contentWindowInsets, bottomBar, $composer, $changed) {
    _init_properties_Scaffold_kt__o4wwkq();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1259302881);
    sourceInformation($composer_0, 'C(ScaffoldLayout$composable)P(4:c#material3.FabPosition,6,1,5,3,2)121@5603L6544,121@5586L6561:Scaffold.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.v1z(_get_value__a43j40(fabPosition)) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(topBar) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(snackbar) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1z(fab) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.t1z(contentWindowInsets) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1z(bottomBar) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(1259302881, $dirty, -1, 'androidx.compose.material3.ScaffoldLayout$composable (Scaffold.kt:111)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var keys = [topBar, snackbar, contentWindowInsets, fab, new FabPosition(fabPosition), bottomBar, content];
      var $composer_1 = $composer_0;
      $composer_1.f1x(-1603429786);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var inductionVariable = 0;
      var last = keys.length;
      while (inductionVariable < last) {
        var key = keys[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_1.t1z(key));
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = invalid;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp;
      if (invalid_0 ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>' call
        var value = ScaffoldLayout$composable$lambda(topBar, snackbar, contentWindowInsets, fab, fabPosition, bottomBar, $dirty, content);
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      SubcomposeLayout$composable(null, tmp0, $composer_0, 0, 1);
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
      tmp0_safe_receiver.w2e(ScaffoldLayout$composable$lambda_0(fabPosition, topBar, content, snackbar, fab, contentWindowInsets, bottomBar, $changed));
    }
  }
  var ScaffoldLayoutContent_TopBar_instance;
  var ScaffoldLayoutContent_MainContent_instance;
  var ScaffoldLayoutContent_Snackbar_instance;
  var ScaffoldLayoutContent_Fab_instance;
  var ScaffoldLayoutContent_BottomBar_instance;
  var ScaffoldLayoutContent_entriesInitialized;
  function ScaffoldLayoutContent_initEntries() {
    if (ScaffoldLayoutContent_entriesInitialized)
      return Unit_instance;
    ScaffoldLayoutContent_entriesInitialized = true;
    ScaffoldLayoutContent_TopBar_instance = new ScaffoldLayoutContent('TopBar', 0);
    ScaffoldLayoutContent_MainContent_instance = new ScaffoldLayoutContent('MainContent', 1);
    ScaffoldLayoutContent_Snackbar_instance = new ScaffoldLayoutContent('Snackbar', 2);
    ScaffoldLayoutContent_Fab_instance = new ScaffoldLayoutContent('Fab', 3);
    ScaffoldLayoutContent_BottomBar_instance = new ScaffoldLayoutContent('BottomBar', 4);
  }
  function ScaffoldLayoutContent(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LocalFabPlacement$lambda() {
    _init_properties_Scaffold_kt__o4wwkq();
    return null;
  }
  function Scaffold$composable$lambda($floatingActionButtonPosition, $topBar, $content, $snackbarHost, $floatingActionButton, $contentWindowInsets, $bottomBar, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C86@4372L307:Scaffold.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1979205334, $changed, -1, 'androidx.compose.material3.Scaffold$composable.<anonymous> (Scaffold.kt:85)');
        }
        ScaffoldLayout$composable($floatingActionButtonPosition._v.sfu_1, $topBar._v, $content, $snackbarHost._v, $floatingActionButton._v, $contentWindowInsets._v, $bottomBar._v, $composer_0, 14 & $$dirty >> 15 | 112 & $$dirty | 896 & $$dirty >> 21 | 7168 & $$dirty | 57344 & $$dirty | 458752 & $$dirty >> 9 | 3670016 & $$dirty << 12);
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
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function Scaffold$composable$lambda_0($modifier, $topBar, $bottomBar, $snackbarHost, $floatingActionButton, $floatingActionButtonPosition, $containerColor, $contentColor, $contentWindowInsets, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Scaffold$composable($modifier._v, $topBar._v, $bottomBar._v, $snackbarHost._v, $floatingActionButton._v, $floatingActionButtonPosition._v.sfu_1, $containerColor._v.p41_1, $contentColor._v.p41_1, $contentWindowInsets._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ScaffoldLayout$composable$lambda$lambda$lambda($fabPlacement, $bottomBar, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C194@8951L144:Scaffold.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1455477816, $changed, -1, 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Scaffold.kt:193)');
        }
        CompositionLocalProvider$composable([get_LocalFabPlacement().r2e($fabPlacement)], $bottomBar, $composer_0, 112 & $$dirty >> 15);
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
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ScaffoldLayout$composable$lambda$lambda$lambda_0($contentWindowInsets, $this_SubcomposeLayout, $topBarPlaceables, $topBarHeight, $bottomBarPlaceables, $bottomBarHeight, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C238@10996L21:Scaffold.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1643221465, $changed, -1, 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Scaffold.kt:220)');
        }
        var insets = asPaddingValues($contentWindowInsets, $this_SubcomposeLayout);
        var tmp_0;
        if ($topBarPlaceables.e1()) {
          tmp_0 = insets.h97();
        } else {
          tmp_0 = $this_SubcomposeLayout.p3b($topBarHeight);
        }
        var tmp0_top = tmp_0;
        var tmp_1;
        if ($bottomBarPlaceables.e1() ? true : $bottomBarHeight == null) {
          tmp_1 = insets.i97();
        } else {
          tmp_1 = $this_SubcomposeLayout.p3b($bottomBarHeight);
        }
        var tmp1_bottom = tmp_1;
        var tmp2_start = calculateStartPadding(insets, $this_SubcomposeLayout.o4f());
        var tmp3_end = calculateEndPadding(insets, $this_SubcomposeLayout.o4f());
        var innerPadding = PaddingValues(tmp2_start, tmp0_top, tmp3_end, tmp1_bottom);
        $content(innerPadding, $composer_0, 112 & $$dirty >> 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ScaffoldLayout$composable$lambda$lambda($this_SubcomposeLayout, $topBar, $looseConstraints, $snackbar, $contentWindowInsets, $fab, $fabPosition, $layoutWidth, $layoutHeight, $bottomBar, $$dirty, $content) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $this_SubcomposeLayout.w73(ScaffoldLayoutContent_TopBar_getInstance(), $topBar);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.v();
      while (tmp0_iterator.w()) {
        var item = tmp0_iterator.y();
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = item.l5l($looseConstraints);
        destination.s(tmp$ret$0);
      }
      var topBarPlaceables = destination;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        var iterator = topBarPlaceables.v();
        if (!iterator.w()) {
          tmp$ret$3 = null;
          break $l$block_0;
        }
        var maxElem = iterator.y();
        if (!iterator.w()) {
          tmp$ret$3 = maxElem;
          break $l$block_0;
        }
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue = maxElem.n5l_1;
        do {
          var e = iterator.y();
          // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var v = e.n5l_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (iterator.w());
        tmp$ret$3 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$3;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n5l_1;
      var topBarHeight = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      // Inline function 'kotlin.collections.map' call
      var this_1 = $this_SubcomposeLayout.w73(ScaffoldLayoutContent_Snackbar_getInstance(), $snackbar);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.v();
      while (tmp0_iterator_0.w()) {
        var item_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var leftInset = $contentWindowInsets.k9f($this_SubcomposeLayout, $this_SubcomposeLayout.o4f());
        var rightInset = $contentWindowInsets.m9f($this_SubcomposeLayout, $this_SubcomposeLayout.o4f());
        var bottomInset = $contentWindowInsets.n9f($this_SubcomposeLayout);
        var tmp$ret$6 = item_0.l5l(offset($looseConstraints, (-leftInset | 0) - rightInset | 0, -bottomInset | 0));
        destination_0.s(tmp$ret$6);
      }
      var snackbarPlaceables = destination_0;
      var tmp$ret$9;
      $l$block_2: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        var iterator_0 = snackbarPlaceables.v();
        if (!iterator_0.w()) {
          tmp$ret$9 = null;
          break $l$block_2;
        }
        var maxElem_0 = iterator_0.y();
        if (!iterator_0.w()) {
          tmp$ret$9 = maxElem_0;
          break $l$block_2;
        }
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue_0 = maxElem_0.n5l_1;
        do {
          var e_0 = iterator_0.y();
          // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var v_0 = e_0.n5l_1;
          if (compareTo(maxValue_0, v_0) < 0) {
            maxElem_0 = e_0;
            maxValue_0 = v_0;
          }
        }
         while (iterator_0.w());
        tmp$ret$9 = maxElem_0;
      }
      var tmp2_safe_receiver = tmp$ret$9;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.n5l_1;
      var snackbarHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      var tmp$ret$12;
      $l$block_4: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        var iterator_1 = snackbarPlaceables.v();
        if (!iterator_1.w()) {
          tmp$ret$12 = null;
          break $l$block_4;
        }
        var maxElem_1 = iterator_1.y();
        if (!iterator_1.w()) {
          tmp$ret$12 = maxElem_1;
          break $l$block_4;
        }
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue_1 = maxElem_1.m5l_1;
        do {
          var e_1 = iterator_1.y();
          // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var v_1 = e_1.m5l_1;
          if (compareTo(maxValue_1, v_1) < 0) {
            maxElem_1 = e_1;
            maxValue_1 = v_1;
          }
        }
         while (iterator_1.w());
        tmp$ret$12 = maxElem_1;
      }
      var tmp4_safe_receiver = tmp$ret$12;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.m5l_1;
      var snackbarWidth = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var this_2 = $this_SubcomposeLayout.w73(ScaffoldLayoutContent_Fab_getInstance(), $fab);
      var destination_1 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_1 = this_2.v();
      while (tmp0_iterator_1.w()) {
        var element = tmp0_iterator_1.y();
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var leftInset_0 = $contentWindowInsets.k9f($this_SubcomposeLayout, $this_SubcomposeLayout.o4f());
        var rightInset_0 = $contentWindowInsets.m9f($this_SubcomposeLayout, $this_SubcomposeLayout.o4f());
        var bottomInset_0 = $contentWindowInsets.n9f($this_SubcomposeLayout);
        // Inline function 'kotlin.takeIf' call
        var this_3 = element.l5l(offset($looseConstraints, (-leftInset_0 | 0) - rightInset_0 | 0, -bottomInset_0 | 0));
        // Inline function 'kotlin.contracts.contract' call
        var tmp;
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        if (!(this_3.n5l_1 === 0) ? !(this_3.m5l_1 === 0) : false) {
          tmp = this_3;
        } else {
          tmp = null;
        }
        var tmp0_safe_receiver_0 = tmp;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          destination_1.s(tmp0_safe_receiver_0);
        }
      }
      var fabPlaceables = destination_1;
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!fabPlaceables.e1()) {
        var tmp$ret$22;
        $l$block_6: {
          // Inline function 'kotlin.collections.maxByOrNull' call
          var iterator_2 = fabPlaceables.v();
          if (!iterator_2.w()) {
            tmp$ret$22 = null;
            break $l$block_6;
          }
          var maxElem_2 = iterator_2.y();
          if (!iterator_2.w()) {
            tmp$ret$22 = maxElem_2;
            break $l$block_6;
          }
          // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var maxValue_2 = maxElem_2.m5l_1;
          do {
            var e_2 = iterator_2.y();
            // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var v_2 = e_2.m5l_1;
            if (compareTo(maxValue_2, v_2) < 0) {
              maxElem_2 = e_2;
              maxValue_2 = v_2;
            }
          }
           while (iterator_2.w());
          tmp$ret$22 = maxElem_2;
        }
        var fabWidth = ensureNotNull(tmp$ret$22).m5l_1;
        var tmp$ret$25;
        $l$block_8: {
          // Inline function 'kotlin.collections.maxByOrNull' call
          var iterator_3 = fabPlaceables.v();
          if (!iterator_3.w()) {
            tmp$ret$25 = null;
            break $l$block_8;
          }
          var maxElem_3 = iterator_3.y();
          if (!iterator_3.w()) {
            tmp$ret$25 = maxElem_3;
            break $l$block_8;
          }
          // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var maxValue_3 = maxElem_3.n5l_1;
          do {
            var e_3 = iterator_3.y();
            // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var v_3 = e_3.n5l_1;
            if (compareTo(maxValue_3, v_3) < 0) {
              maxElem_3 = e_3;
              maxValue_3 = v_3;
            }
          }
           while (iterator_3.w());
          tmp$ret$25 = maxElem_3;
        }
        var fabHeight = ensureNotNull(tmp$ret$25).n5l_1;
        var tmp_1;
        if ($fabPosition === Companion_getInstance_19().yfu_1) {
          var tmp_2;
          if ($this_SubcomposeLayout.o4f().equals(LayoutDirection_Ltr_getInstance())) {
            tmp_2 = ($layoutWidth - $this_SubcomposeLayout.k3b(get_FabSpacing()) | 0) - fabWidth | 0;
          } else {
            tmp_2 = $this_SubcomposeLayout.k3b(get_FabSpacing());
          }
          tmp_1 = tmp_2;
        } else {
          tmp_1 = ($layoutWidth - fabWidth | 0) / 2 | 0;
        }
        var fabLeftOffset = tmp_1;
        tmp_0 = new FabPlacement(fabLeftOffset, fabWidth, fabHeight);
      } else {
        tmp_0 = null;
      }
      var fabPlacement = tmp_0;
      // Inline function 'kotlin.collections.map' call
      var tmp_3 = ScaffoldLayoutContent_BottomBar_getInstance();
      var this_4 = $this_SubcomposeLayout.w73(tmp_3, ComposableLambda$invoke$ref_21(composableLambdaInstance(-1455477816, true, ScaffoldLayout$composable$lambda$lambda$lambda(fabPlacement, $bottomBar, $$dirty))));
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
      var tmp0_iterator_2 = this_4.v();
      while (tmp0_iterator_2.w()) {
        var item_1 = tmp0_iterator_2.y();
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$28 = item_1.l5l($looseConstraints);
        destination_2.s(tmp$ret$28);
      }
      var bottomBarPlaceables = destination_2;
      var tmp$ret$31;
      $l$block_10: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        var iterator_4 = bottomBarPlaceables.v();
        if (!iterator_4.w()) {
          tmp$ret$31 = null;
          break $l$block_10;
        }
        var maxElem_4 = iterator_4.y();
        if (!iterator_4.w()) {
          tmp$ret$31 = maxElem_4;
          break $l$block_10;
        }
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var maxValue_4 = maxElem_4.n5l_1;
        do {
          var e_4 = iterator_4.y();
          // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var v_4 = e_4.n5l_1;
          if (compareTo(maxValue_4, v_4) < 0) {
            maxElem_4 = e_4;
            maxValue_4 = v_4;
          }
        }
         while (iterator_4.w());
        tmp$ret$31 = maxElem_4;
      }
      var tmp6_safe_receiver = tmp$ret$31;
      var bottomBarHeight = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.n5l_1;
      var tmp_4;
      if (fabPlacement == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5;
        if (bottomBarHeight == null) {
          tmp_5 = (fabPlacement.rfu_1 + $this_SubcomposeLayout.k3b(get_FabSpacing()) | 0) + $contentWindowInsets.n9f($this_SubcomposeLayout) | 0;
        } else {
          tmp_5 = (bottomBarHeight + fabPlacement.rfu_1 | 0) + $this_SubcomposeLayout.k3b(get_FabSpacing()) | 0;
        }
        tmp_4 = tmp_5;
      }
      var fabOffsetFromBottom = tmp_4;
      var tmp_6;
      if (!(snackbarHeight === 0)) {
        var tmp9_elvis_lhs = fabOffsetFromBottom == null ? bottomBarHeight : fabOffsetFromBottom;
        tmp_6 = snackbarHeight + (tmp9_elvis_lhs == null ? $contentWindowInsets.n9f($this_SubcomposeLayout) : tmp9_elvis_lhs) | 0;
      } else {
        tmp_6 = 0;
      }
      var snackbarOffsetFromBottom = tmp_6;
      // Inline function 'kotlin.collections.map' call
      var tmp_7 = ScaffoldLayoutContent_MainContent_getInstance();
      var this_5 = $this_SubcomposeLayout.w73(tmp_7, ComposableLambda$invoke$ref_22(composableLambdaInstance(1643221465, true, ScaffoldLayout$composable$lambda$lambda$lambda_0($contentWindowInsets, $this_SubcomposeLayout, topBarPlaceables, topBarHeight, bottomBarPlaceables, bottomBarHeight, $content, $$dirty))));
      // Inline function 'kotlin.collections.mapTo' call
      var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(this_5, 10));
      var tmp0_iterator_3 = this_5.v();
      while (tmp0_iterator_3.w()) {
        var item_2 = tmp0_iterator_3.y();
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$36 = item_2.l5l($looseConstraints);
        destination_3.s(tmp$ret$36);
      }
      var bodyContentPlaceables = destination_3;
      var tmp0_iterator_4 = bodyContentPlaceables.v();
      while (tmp0_iterator_4.w()) {
        var element_0 = tmp0_iterator_4.y();
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $this$layout.b72(element_0, 0, 0);
      }
      var tmp0_iterator_5 = topBarPlaceables.v();
      while (tmp0_iterator_5.w()) {
        var element_1 = tmp0_iterator_5.y();
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $this$layout.b72(element_1, 0, 0);
      }
      var tmp0_iterator_6 = snackbarPlaceables.v();
      while (tmp0_iterator_6.w()) {
        var element_2 = tmp0_iterator_6.y();
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $this$layout.b72(element_2, (($layoutWidth - snackbarWidth | 0) / 2 | 0) + $contentWindowInsets.k9f($this_SubcomposeLayout, $this_SubcomposeLayout.o4f()) | 0, $layoutHeight - snackbarOffsetFromBottom | 0);
      }
      var tmp0_iterator_7 = bottomBarPlaceables.v();
      while (tmp0_iterator_7.w()) {
        var element_3 = tmp0_iterator_7.y();
        // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $this$layout.b72(element_3, 0, $layoutHeight - (bottomBarHeight == null ? 0 : bottomBarHeight) | 0);
      }
      if (fabPlacement == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_iterator_8 = fabPlaceables.v();
        while (tmp0_iterator_8.w()) {
          var element_4 = tmp0_iterator_8.y();
          // Inline function 'androidx.compose.material3.ScaffoldLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          $this$layout.b72(element_4, fabPlacement.pfu_1, $layoutHeight - ensureNotNull(fabOffsetFromBottom) | 0);
        }
      }
      return Unit_instance;
    };
  }
  function ScaffoldLayout$composable$lambda($topBar, $snackbar, $contentWindowInsets, $fab, $fabPosition, $bottomBar, $$dirty, $content) {
    return function ($this$SubcomposeLayout, constraints) {
      var layoutWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints.e3b_1);
      var layoutHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints.e3b_1);
      var looseConstraints = Constraints__copy$default_impl_f452rp(constraints.e3b_1, 0, VOID, 0);
      return $this$SubcomposeLayout.s5l(layoutWidth, layoutHeight, VOID, ScaffoldLayout$composable$lambda$lambda($this$SubcomposeLayout, $topBar, looseConstraints, $snackbar, $contentWindowInsets, $fab, $fabPosition, layoutWidth, layoutHeight, $bottomBar, $$dirty, $content));
    };
  }
  function ScaffoldLayout$composable$lambda_0($fabPosition, $topBar, $content, $snackbar, $fab, $contentWindowInsets, $bottomBar, $$changed) {
    return function ($composer, $force) {
      ScaffoldLayout$composable($fabPosition, $topBar, $content, $snackbar, $fab, $contentWindowInsets, $bottomBar, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ScaffoldLayoutContent_TopBar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_TopBar_instance;
  }
  function ScaffoldLayoutContent_MainContent_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_MainContent_instance;
  }
  function ScaffoldLayoutContent_Snackbar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_Snackbar_instance;
  }
  function ScaffoldLayoutContent_Fab_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_Fab_instance;
  }
  function ScaffoldLayoutContent_BottomBar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_BottomBar_instance;
  }
  var properties_initialized_Scaffold_kt_ayrd2w;
  function _init_properties_Scaffold_kt__o4wwkq() {
    if (!properties_initialized_Scaffold_kt_ayrd2w) {
      properties_initialized_Scaffold_kt_ayrd2w = true;
      LocalFabPlacement = staticCompositionLocalOf(LocalFabPlacement$lambda);
      // Inline function 'androidx.compose.ui.unit.dp' call
      FabSpacing = _Dp___init__impl__ms3zkb(16);
    }
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  function toShape$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_Shapes_kt__48nj2q();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 122218565, 'C(toShape$composable)189@7718L6:Shapes.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(122218565, $changed, -1, 'androidx.compose.material3.toShape$composable (Shapes.kt:188)');
    }
    var tmp0 = fromToken_0(MaterialTheme_instance.pfq($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function Shapes(extraSmall, small, medium, large, extraLarge) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().bfv_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().cfv_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().dfv_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().efv_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().ffv_1 : extraLarge;
    this.hfv_1 = extraSmall;
    this.ifv_1 = small;
    this.jfv_1 = medium;
    this.kfv_1 = large;
    this.lfv_1 = extraLarge;
    this.mfv_1 = 0;
  }
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.hfv_1, other.hfv_1))
      return false;
    if (!equals(this.ifv_1, other.ifv_1))
      return false;
    if (!equals(this.jfv_1, other.jfv_1))
      return false;
    if (!equals(this.kfv_1, other.kfv_1))
      return false;
    if (!equals(this.lfv_1, other.lfv_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.hfv_1);
    result = imul(31, result) + hashCode(this.ifv_1) | 0;
    result = imul(31, result) + hashCode(this.jfv_1) | 0;
    result = imul(31, result) + hashCode(this.kfv_1) | 0;
    result = imul(31, result) + hashCode(this.lfv_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(' + ('extraSmall=' + this.hfv_1 + ', ') + ('small=' + this.ifv_1 + ', ') + ('medium=' + this.jfv_1 + ', ') + ('large=' + this.kfv_1 + ', ') + ('extraLarge=' + this.lfv_1 + ')');
  };
  function fromToken_0(_this__u8e3s4, value) {
    _init_properties_Shapes_kt__48nj2q();
    var tmp;
    switch (value.j9_1) {
      case 0:
        tmp = _this__u8e3s4.lfv_1;
        break;
      case 1:
        tmp = top(_this__u8e3s4.lfv_1);
        break;
      case 2:
        tmp = _this__u8e3s4.hfv_1;
        break;
      case 3:
        tmp = top(_this__u8e3s4.hfv_1);
        break;
      case 4:
        tmp = get_CircleShape();
        break;
      case 5:
        tmp = _this__u8e3s4.kfv_1;
        break;
      case 6:
        tmp = end(_this__u8e3s4.kfv_1);
        break;
      case 7:
        tmp = top(_this__u8e3s4.kfv_1);
        break;
      case 8:
        tmp = _this__u8e3s4.jfv_1;
        break;
      case 9:
        tmp = get_RectangleShape();
        break;
      case 10:
        tmp = _this__u8e3s4.ifv_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ShapeDefaults() {
    ShapeDefaults_instance = this;
    this.bfv_1 = ShapeTokens_getInstance().pfv_1;
    this.cfv_1 = ShapeTokens_getInstance().xfv_1;
    this.dfv_1 = ShapeTokens_getInstance().vfv_1;
    this.efv_1 = ShapeTokens_getInstance().sfv_1;
    this.ffv_1 = ShapeTokens_getInstance().nfv_1;
    this.gfv_1 = 0;
  }
  var ShapeDefaults_instance;
  function ShapeDefaults_getInstance() {
    if (ShapeDefaults_instance == null)
      new ShapeDefaults();
    return ShapeDefaults_instance;
  }
  function top(_this__u8e3s4) {
    _init_properties_Shapes_kt__48nj2q();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0.0);
    var tmp0_bottomStart = CornerSize(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp1_bottomEnd = CornerSize(tmp$ret$1);
    return _this__u8e3s4.gbu(VOID, VOID, tmp1_bottomEnd, tmp0_bottomStart);
  }
  function end(_this__u8e3s4) {
    _init_properties_Shapes_kt__48nj2q();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0.0);
    var tmp = CornerSize(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0.0);
    return _this__u8e3s4.gbu(tmp, VOID, VOID, CornerSize(tmp$ret$1));
  }
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return new Shapes();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (!properties_initialized_Shapes_kt_91wqbw) {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
    }
  }
  function nextId($this) {
    var tmp1 = $this.yfv_1;
    $this.yfv_1 = tmp1 + 1 | 0;
    return tmp1;
  }
  function _Strings___init__impl__htkkc7(value) {
    value = value === VOID ? nextId(Companion_getInstance_20()) : value;
    return value;
  }
  function Companion_0() {
    Companion_instance_2 = this;
    this.yfv_1 = 0;
    this.zfv_1 = _Strings___init__impl__htkkc7();
    this.afw_1 = _Strings___init__impl__htkkc7();
    this.bfw_1 = _Strings___init__impl__htkkc7();
    this.cfw_1 = _Strings___init__impl__htkkc7();
    this.dfw_1 = _Strings___init__impl__htkkc7();
    this.efw_1 = _Strings___init__impl__htkkc7();
    this.ffw_1 = _Strings___init__impl__htkkc7();
    this.gfw_1 = _Strings___init__impl__htkkc7();
    this.hfw_1 = _Strings___init__impl__htkkc7();
    this.ifw_1 = _Strings___init__impl__htkkc7();
    this.jfw_1 = _Strings___init__impl__htkkc7();
    this.kfw_1 = _Strings___init__impl__htkkc7();
    this.lfw_1 = _Strings___init__impl__htkkc7();
    this.mfw_1 = _Strings___init__impl__htkkc7();
    this.nfw_1 = _Strings___init__impl__htkkc7();
    this.ofw_1 = _Strings___init__impl__htkkc7();
    this.pfw_1 = _Strings___init__impl__htkkc7();
    this.qfw_1 = _Strings___init__impl__htkkc7();
    this.rfw_1 = _Strings___init__impl__htkkc7();
    this.sfw_1 = _Strings___init__impl__htkkc7();
    this.tfw_1 = _Strings___init__impl__htkkc7();
    this.ufw_1 = _Strings___init__impl__htkkc7();
    this.vfw_1 = _Strings___init__impl__htkkc7();
    this.wfw_1 = _Strings___init__impl__htkkc7();
    this.xfw_1 = _Strings___init__impl__htkkc7();
    this.yfw_1 = _Strings___init__impl__htkkc7();
    this.zfw_1 = _Strings___init__impl__htkkc7();
    this.afx_1 = _Strings___init__impl__htkkc7();
    this.bfx_1 = _Strings___init__impl__htkkc7();
    this.cfx_1 = _Strings___init__impl__htkkc7();
    this.dfx_1 = _Strings___init__impl__htkkc7();
    this.efx_1 = _Strings___init__impl__htkkc7();
    this.ffx_1 = _Strings___init__impl__htkkc7();
    this.gfx_1 = _Strings___init__impl__htkkc7();
    this.hfx_1 = _Strings___init__impl__htkkc7();
    this.ifx_1 = _Strings___init__impl__htkkc7();
    this.jfx_1 = _Strings___init__impl__htkkc7();
    this.kfx_1 = _Strings___init__impl__htkkc7();
    this.lfx_1 = _Strings___init__impl__htkkc7();
    this.mfx_1 = _Strings___init__impl__htkkc7();
    this.nfx_1 = _Strings___init__impl__htkkc7();
    this.ofx_1 = _Strings___init__impl__htkkc7();
    this.pfx_1 = _Strings___init__impl__htkkc7();
    this.qfx_1 = _Strings___init__impl__htkkc7();
    this.rfx_1 = _Strings___init__impl__htkkc7();
    this.sfx_1 = _Strings___init__impl__htkkc7();
    this.tfx_1 = _Strings___init__impl__htkkc7();
    this.ufx_1 = _Strings___init__impl__htkkc7();
    this.vfx_1 = _Strings___init__impl__htkkc7();
    this.wfx_1 = _Strings___init__impl__htkkc7();
    this.xfx_1 = _Strings___init__impl__htkkc7();
    this.yfx_1 = _Strings___init__impl__htkkc7();
    this.zfx_1 = _Strings___init__impl__htkkc7();
    this.afy_1 = _Strings___init__impl__htkkc7();
    this.bfy_1 = _Strings___init__impl__htkkc7();
    this.cfy_1 = _Strings___init__impl__htkkc7();
    this.dfy_1 = _Strings___init__impl__htkkc7();
    this.efy_1 = _Strings___init__impl__htkkc7();
    this.ffy_1 = _Strings___init__impl__htkkc7();
    this.gfy_1 = _Strings___init__impl__htkkc7();
    this.hfy_1 = _Strings___init__impl__htkkc7();
    this.ify_1 = _Strings___init__impl__htkkc7();
    this.jfy_1 = _Strings___init__impl__htkkc7();
  }
  var Companion_instance_2;
  function Companion_getInstance_20() {
    if (Companion_instance_2 == null)
      new Companion_0();
    return Companion_instance_2;
  }
  function get_LocalAbsoluteTonalElevation() {
    _init_properties_Surface_kt__8o7unv();
    return LocalAbsoluteTonalElevation;
  }
  var LocalAbsoluteTonalElevation;
  function Surface$composable(onClick, modifier, enabled, shape, color, contentColor, tonalElevation, shadowElevation, border, interactionSource, content, $composer, $changed, $changed1, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0.f1x(498153214);
    sourceInformation($composer_0, 'C(Surface$composable)P(7,6,4,9,1:c#ui.graphics.Color,3:c#ui.graphics.Color,10:c#ui.unit.Dp,8:c#ui.unit.Dp!1,5)206@10475L11,207@10522L22,211@10693L39,*214@10830L7,215@10859L917:Surface.kt#uh7d8r');
    if (!(($default & 2) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 4) === 0)) {
      enabled_0._v = true;
    }
    if (!(($default & 8) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 16) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.wfj($composer_0, 6).ucz());
    }
    if (!(($default & 32) === 0))
      contentColor_0 = contentColorFor$composable(color_0._v.p41_1, $composer_0, 14 & $changed >> 12);
    if (!(($default & 64) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 128) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 256) === 0)) {
      border_0._v = null;
    }
    if (!(($default & 512) === 0)) {
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
      if (false ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>' call
        var value = funMutableInteractionSource();
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      interactionSource_0._v = tmp0;
    }
    if (isTraceInProgress()) {
      traceEventStart(498153214, $changed, $changed1, 'androidx.compose.material3.Surface$composable (Surface.kt:201)');
    }
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_2.b20(this_0);
    sourceInformationMarkerEnd($composer_2);
    var this_1 = tmp0_0.z3b_1;
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) + _Dp___get_value__impl__geb1vb(other));
    var tmp_1 = [get_LocalContentColor().r2e(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().r2e(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>' call
    var tmp_2 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_2, 1279702876, true, Surface$composable$lambda(modifier_0, shape_0, color_0, absoluteElevation, $changed, border_0, shadowElevation_0, interactionSource_0, enabled_0, onClick, content, $changed1));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.f1x(-838505973);
    sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_3.t1z(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_3.r1z();
    var tmp_3;
    if (invalid ? true : it_0 === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>' call
      var value_0 = ComposableLambda$invoke$ref_23(dispatchReceiver);
      $composer_3.s1z(value_0);
      tmp_3 = value_0;
    } else {
      tmp_3 = it_0;
    }
    var tmp_4 = tmp_3;
    var tmp0_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_3.h1x();
    CompositionLocalProvider$composable(tmp_1, tmp0_1, $composer_0, 48);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
  }
  function Surface$composable_0(modifier, shape, color, contentColor, tonalElevation, shadowElevation, border, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    $composer_0.f1x(-976280440);
    sourceInformation($composer_0, 'C(Surface$composable)P(4,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color,7:c#ui.unit.Dp,5:c#ui.unit.Dp)102@5102L11,103@5149L22,*109@5366L7,110@5395L784:Surface.kt#uh7d8r');
    if (!(($default & 1) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 2) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 4) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.wfj($composer_0, 6).ucz());
    }
    if (!(($default & 8) === 0))
      contentColor_0 = contentColorFor$composable(color_0._v.p41_1, $composer_0, 14 & $changed >> 6);
    if (!(($default & 16) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 32) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 64) === 0)) {
      border_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-976280440, $changed, -1, 'androidx.compose.material3.Surface$composable (Surface.kt:99)');
    }
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    var this_1 = tmp0.z3b_1;
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) + _Dp___get_value__impl__geb1vb(other));
    var tmp = [get_LocalContentColor().r2e(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().r2e(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>' call
    var tmp_0 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_0, -70914509, true, Surface$composable$lambda_0(modifier_0, shape_0, color_0, absoluteElevation, $changed, border_0, shadowElevation_0, content));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.f1x(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.t1z(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.r1z();
    var tmp_1;
    if (invalid ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
      $composer_2.s1z(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_2.h1x();
    CompositionLocalProvider$composable(tmp, tmp0_0, $composer_0, 48);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, shadowElevation) {
    _init_properties_Surface_kt__8o7unv();
    return clip(background(shadow(_this__u8e3s4, shadowElevation, shape, false).c5j(!(border_0 == null) ? border(Companion_instance, border_0, shape) : Companion_instance), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation$composable(color, elevation, $composer, $changed) {
    _init_properties_Surface_kt__8o7unv();
    var $composer_0 = $composer;
    $composer_0.f1x(369008065);
    sourceInformation($composer_0, 'C(surfaceColorAtElevation$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)476@23481L11,477@23526L11:Surface.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(369008065, $changed, -1, 'androidx.compose.material3.surfaceColorAtElevation$composable (Surface.kt:475)');
    }
    var tmp;
    if (equals(color, MaterialTheme_instance.wfj($composer_0, 6).ucz())) {
      tmp = surfaceColorAtElevation(MaterialTheme_instance.wfj($composer_0, 6), elevation);
    } else {
      tmp = color;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function LocalAbsoluteTonalElevation$lambda() {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  function Surface$composable$lambda($modifier, $shape, $color, $absoluteElevation, $$changed, $border, $shadowElevation, $interactionSource, $enabled, $onClick, $content, $$changed1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C224@11200L139,233@11570L16,219@11013L757:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1279702876, $changed, -1, 'androidx.compose.material3.Surface$composable.<anonymous> (Surface.kt:218)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = surface(minimumInteractiveComponentSize_0($modifier._v), $shape._v, surfaceColorAtElevation$composable($color._v.p41_1, $absoluteElevation, $composer_0, 14 & $$changed >> 12), $border._v, $shadowElevation._v.z3b_1);
        var tmp_1 = $interactionSource._v;
        var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
        var modifier = clickable(tmp_0, tmp_1, rememberRipple$composable(false, tmp_2, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7), $enabled._v, VOID, VOID, $onClick);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_1 = $composer_0;
        $composer_1.f1x(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 384 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.f1x(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_3 = $composer_3.u1y();
        if (!isInterface(tmp_3, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_4;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_4 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 675031554, 'C239@11751L9:Surface.kt#uh7d8r');
        $content($composer_5, 14 & $$changed1);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function Surface$composable$lambda$lambda($this$semantics) {
    _init_properties_Surface_kt__8o7unv();
    set_isContainer($this$semantics, true);
    return Unit_instance;
  }
  function Surface$composable$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$composable$lambda$slambda).x6n = function ($this$pointerInput, $completion) {
    var tmp = this.y6n($this$pointerInput, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Surface$composable$lambda$slambda).fc = function (p1, $completion) {
    return this.x6n((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$composable$lambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
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
  protoOf(Surface$composable$lambda$slambda).y6n = function ($this$pointerInput, completion) {
    var i = new Surface$composable$lambda$slambda(completion);
    i.sfy_1 = $this$pointerInput;
    return i;
  };
  function Surface$composable$lambda$slambda_0(resultContinuation) {
    var i = new Surface$composable$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.x6n($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda_0($modifier, $shape, $color, $absoluteElevation, $$changed, $border, $shadowElevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C118@5685L139,125@5988L58,128@6083L2,114@5549L624:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-70914509, $changed, -1, 'androidx.compose.material3.Surface$composable.<anonymous> (Surface.kt:113)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = surface($modifier._v, $shape._v, surfaceColorAtElevation$composable($color._v.p41_1, $absoluteElevation, $composer_0, 14 & $$changed >> 6), $border._v, $shadowElevation._v.z3b_1);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.f1x(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.r1z();
        var tmp_1;
        if (false ? true : it === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$composable$lambda$lambda;
          $composer_1.s1z(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_1.h1x();
        var tmp_3 = semantics(tmp_0, false, tmp0);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_2 = $composer_0;
        $composer_2.f1x(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_2.r1z();
        var tmp_4;
        if (false ? true : it_0 === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = Surface$composable$lambda$slambda_0(null);
          $composer_2.s1z(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_2.h1x();
        var modifier = pointerInput(tmp_3, Unit_instance, tmp0_0);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_3 = $composer_0;
        $composer_3.f1x(1330882304);
        sourceInformation($composer_3, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_3, 14 & 384 >> 3 | 112 & 384 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 384 << 3;
        var modifier_1 = modifier_0;
        var $composer_4 = $composer_3;
        $composer_4.f1x(1725976829);
        sourceInformation($composer_4, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_4, 0);
        var localMap = $composer_4.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_5 = $composer_4;
        var tmp_6 = $composer_5.u1y();
        if (!isInterface(tmp_6, Applier)) {
          invalidApplier();
        }
        $composer_5.k1z();
        if ($composer_5.v1y()) {
          $composer_5.l1z(factory);
        } else {
          $composer_5.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_5);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_7;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_7 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & $changed_1 >> 3);
        $composer_5.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_7 = $composer_6;
        sourceInformationMarkerStart($composer_7, 675025957, 'C131@6154L9:Surface.kt#uh7d8r');
        $content($composer_7, 14 & $$changed >> 21);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        $composer_5.h1x();
        $composer_5.n1z();
        $composer_4.h1x();
        $composer_3.h1x();
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      LocalAbsoluteTonalElevation = compositionLocalOf(VOID, LocalAbsoluteTonalElevation$lambda);
    }
  }
  function $get_systemBarsForVisualComponents$$composable_kg1zeq(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1985743758);
    sourceInformation($composer_0, 'C($get-systemBarsForVisualComponents$$composable)23@951L31:SystemBarsDefaultInsets.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1985743758, $changed, -1, 'androidx.compose.material3.$get-systemBarsForVisualComponents$$composable (SystemBarsDefaultInsets.kt:23)');
    }
    var tmp0 = systemBarsForVisualComponents$composable(_this__u8e3s4, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function ProvideTextStyle$composable(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(915084672);
    sourceInformation($composer_0, 'C(ProvideTextStyle$composable)P(1)358@14903L7,359@14928L80:Text.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(value) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(915084672, $dirty, -1, 'androidx.compose.material3.ProvideTextStyle$composable (Text.kt:357)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalTextStyle();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.b20(this_0);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0.t4y(value);
      CompositionLocalProvider$composable([get_LocalTextStyle().r2e(mergedStyle)], content, $composer_0, 112 & $dirty);
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
      tmp0_safe_receiver.w2e(ProvideTextStyle$composable$lambda(value, content, $changed));
    }
  }
  function Text$composable(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1760961850);
    sourceInformation($composer_0, 'C(Text$composable)P(14,9,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,16,15:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,11:c#ui.text.style.TextOverflow,12)107@5541L2,108@5583L7,131@6301L162:Text.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.p41_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.x1z(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.t3c_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.t1z(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.t1z(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.t1z(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.x1z(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.t3c_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.t1z(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.t1z(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.x1z(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.t3c_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.v1z(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.f5c_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1z(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.v1z(maxLines_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.v1z(minLines_0._v) ? 16384 : 8192);
    if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ((($default & 32768) === 0 ? $composer_0.y1z(onTextLayout_0._v) : false) ? 131072 : 65536);
    if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ((($default & 65536) === 0 ? $composer_0.t1z(style_0._v) : false) ? 1048576 : 524288);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 2995931) === 599186)) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_2().k42_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_10().r3c_1);
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_10().r3c_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_10().r3c_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_11().k4y_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = IntCompanionObject_instance.MAX_VALUE;
        }
        if (!(($default & 16384) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 32768) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.f1x(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp_1;
          if (false ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.Text$composable.<anonymous>' call
            var value = Text$composable$lambda;
            $composer_1.s1z(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_1.h1x();
          onTextLayout_0._v = tmp0;
          $dirty1 = $dirty1 & -458753;
        }
        if (!(($default & 65536) === 0)) {
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var this_0 = get_LocalTextStyle();
          var $composer_2 = $composer_0;
          sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.b20(this_0);
          sourceInformationMarkerEnd($composer_2);
          style_0._v = tmp0_0;
          $dirty1 = $dirty1 & -3670017;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 32768) === 0))
          $dirty1 = $dirty1 & -458753;
        if (!(($default & 65536) === 0))
          $dirty1 = $dirty1 & -3670017;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-1760961850, $dirty, $dirty1, 'androidx.compose.material3.Text$composable (Text.kt:91)');
      }
      $composer_0.f1x(-502032011);
      sourceInformation($composer_0, '*113@5698L7');
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var this_1 = color_0._v.p41_1;
      var tmp_3;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(this_1), _Color___get_value__impl__1pls5m(Companion_getInstance_2().k42_1))) {
        tmp_3 = this_1;
      } else {
        // Inline function 'androidx.compose.material3.Text$composable.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var this_2 = style_0._v.m42();
        var tmp_4;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(this_2), _Color___get_value__impl__1pls5m(Companion_getInstance_2().k42_1))) {
          tmp_4 = this_2;
        } else {
          // Inline function 'androidx.compose.material3.Text$composable.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var this_3 = get_LocalContentColor();
          var $composer_3 = $composer_0;
          sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_1 = $composer_3.b20(this_3);
          sourceInformationMarkerEnd($composer_3);
          tmp_4 = tmp0_1.p41_1;
        }
        tmp_3 = tmp_4;
      }
      var tmp0_group = tmp_3;
      $composer_0.h1x();
      var textColor = tmp0_group;
      var tmp_5 = style_0._v;
      var tmp_6 = fontSize_0._v;
      var tmp_7 = fontWeight_0._v;
      var tmp_8 = fontStyle_0._v;
      var tmp_9 = tmp_8 == null ? null : tmp_8.s4u_1;
      var tmp_10 = fontFamily_0._v;
      var tmp_11 = letterSpacing_0._v;
      var tmp_12 = textDecoration_0._v;
      var tmp_13 = textAlign_0._v;
      var mergedStyle = tmp_5.t4y(TextStyle_init_$Create$(textColor, tmp_6.t3c_1, tmp_7, tmp_9, VOID, tmp_10, VOID, tmp_11.t3c_1, VOID, VOID, VOID, VOID, tmp_12, VOID, VOID, tmp_13 == null ? null : tmp_13.f4t_1, VOID, lineHeight_0._v.t3c_1));
      var tmp_14 = modifier_0._v;
      var tmp_15 = onTextLayout_0._v;
      var tmp_16 = overflow_0._v;
      var tmp_17 = softWrap_0._v;
      var tmp_18 = maxLines_0._v;
      var tmp_19 = minLines_0._v;
      BasicText$composable(text, tmp_14, mergedStyle, tmp_15, tmp_16.f5c_1, tmp_17, tmp_18, tmp_19, null, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 6 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9 | 29360128 & $dirty1 << 9, 256);
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
      tmp1_safe_receiver.w2e(Text$composable$lambda_0(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return get_DefaultTextStyle();
  }
  function ProvideTextStyle$composable$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle$composable($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Text$composable$lambda(it) {
    _init_properties_Text_kt__l2j80d();
    return Unit_instance;
  }
  function Text$composable$lambda_0($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v;
      var tmp_1 = $fontSize._v;
      var tmp_2 = $fontStyle._v;
      var tmp_3 = tmp_2 == null ? null : tmp_2.s4u_1;
      var tmp_4 = $fontWeight._v;
      var tmp_5 = $fontFamily._v;
      var tmp_6 = $letterSpacing._v;
      var tmp_7 = $textDecoration._v;
      var tmp_8 = $textAlign._v;
      Text$composable($text, tmp, tmp_0.p41_1, tmp_1.t3c_1, tmp_3, tmp_4, tmp_5, tmp_6.t3c_1, tmp_7, tmp_8 == null ? null : tmp_8.f4t_1, $lineHeight._v.t3c_1, $overflow._v.f5c_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  function get_TextFieldWithLabelVerticalPadding() {
    _init_properties_TextField_kt__b1se5h();
    return TextFieldWithLabelVerticalPadding;
  }
  var TextFieldWithLabelVerticalPadding;
  function drawIndicatorLine(_this__u8e3s4, indicatorBorder) {
    _init_properties_TextField_kt__b1se5h();
    var strokeWidthDp = indicatorBorder.p9i_1;
    return drawWithContent(_this__u8e3s4, drawIndicatorLine$lambda(strokeWidthDp, indicatorBorder));
  }
  function TextFieldLayout$composable(modifier, textField, label, placeholder, leading, trailing, prefix, suffix, singleLine, animationProgress, container, supporting, paddingValues, $composer, $changed, $changed1) {
    _init_properties_TextField_kt__b1se5h();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1292895375);
    sourceInformation($composer_0, 'C(TextFieldLayout$composable)P(4,11,2,6,3,12,7,9,8!2,10)512@24588L139,515@24775L7,516@24787L3994:TextField.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(textField) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(label) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(placeholder) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1z(leading) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1z(trailing) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1z(prefix) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.y1z(suffix) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.u1z(singleLine) ? 67108864 : 33554432);
    if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.w1z(animationProgress) ? 536870912 : 268435456);
    if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(container) ? 4 : 2);
    if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(supporting) ? 32 : 16);
    if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1z(paddingValues) ? 256 : 128);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 731) === 146)) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(1292895375, $dirty, $dirty1, 'androidx.compose.material3.TextFieldLayout$composable (TextField.kt:497)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-1058148781);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_1.t1z(singleLine) | $composer_1.t1z(animationProgress)) | $composer_1.t1z(paddingValues));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.TextFieldLayout$composable.<anonymous>' call
        var value = new TextFieldMeasurePolicy(singleLine, animationProgress, paddingValues);
        $composer_1.s1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      var measurePolicy = tmp0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalLayoutDirection();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.b20(this_0);
      sourceInformationMarkerEnd($composer_2);
      var layoutDirection = tmp0_0;
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var $composer_3 = $composer_0;
      var $changed_0 = 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_4 = $composer_3;
      $composer_4.f1x(1725976829);
      sourceInformation($composer_4, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_4, 0);
      var localMap = $composer_4.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_5().s6v_1;
      var skippableUpdate = materializerOf(modifier_0);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_5 = $composer_4;
      var tmp_1 = $composer_5.u1y();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_5.k1z();
      if ($composer_5.v1y()) {
        $composer_5.l1z(factory);
      } else {
        $composer_5.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_5);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_2;
      if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
        $this$with.s1z(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
        tmp_2 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & $changed_1 >> 3);
      $composer_5.f1x(2058660585);
      // Inline function 'androidx.compose.material3.TextFieldLayout$composable.<anonymous>' call
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -1940134730, 'C522@25106L11,605@28102L229:TextField.kt#uh7d8r');
      container($composer_6, 14 & $dirty1);
      $composer_6.f1x(-1940134705);
      sourceInformation($composer_6, '525@25170L269');
      if (!(leading == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_1 = layoutId(Companion_instance, get_LeadingId()).c5j(get_IconDefaultSizeModifier());
        var contentAlignment = Companion_getInstance_4().h5i_1;
        var propagateMinConstraints = false;
        var $composer_7 = $composer_6;
        $composer_7.f1x(1330882304);
        sourceInformation($composer_7, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_1 = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_7, 14 & 48 >> 3 | 112 & 48 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_2 = modifier_1;
        var $changed_2 = 112 & 48 << 3;
        var modifier_3 = modifier_2;
        var $composer_8 = $composer_7;
        $composer_8.f1x(1725976829);
        sourceInformation($composer_8, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_3 = Companion_instance;
        var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_8, 0);
        var localMap_0 = $composer_8.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_0 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_0 = materializerOf(modifier_3);
        var $changed_3 = 6 | 7168 & $changed_2 << 9;
        var $composer_9 = $composer_8;
        var tmp_3 = $composer_9.u1y();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_9.k1z();
        if ($composer_9.v1y()) {
          $composer_9.l1z(factory_0);
        } else {
          $composer_9.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_9);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        var tmp_4;
        if ($this$with_0.v1y() ? true : !equals($this$with_0.r1z(), compositeKeyHash_0)) {
          $this$with_0.s1z(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).q1z(compositeKeyHash_0, block_0);
          tmp_4 = Unit_instance;
        }
        skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_9)), $composer_9, 112 & $changed_3 >> 3);
        $composer_9.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.TextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_11 = $composer_10;
        sourceInformationMarkerStart($composer_11, -368045559, 'C531@25412L9:TextField.kt#uh7d8r');
        leading($composer_11, 14 & $dirty >> 12);
        sourceInformationMarkerEnd($composer_11);
        sourceInformationMarkerEnd($composer_10);
        $composer_9.h1x();
        $composer_9.n1z();
        $composer_8.h1x();
        $composer_7.h1x();
      }
      $composer_6.h1x();
      $composer_6.f1x(-1940134370);
      sourceInformation($composer_6, '535@25506L271');
      if (!(trailing == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_4 = layoutId(Companion_instance, get_TrailingId()).c5j(get_IconDefaultSizeModifier());
        var contentAlignment_0 = Companion_getInstance_4().h5i_1;
        var propagateMinConstraints_0 = false;
        var $composer_12 = $composer_6;
        $composer_12.f1x(1330882304);
        sourceInformation($composer_12, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((4 & 1) === 0))
          modifier_4 = Companion_instance;
        if (!((4 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_4().d5i_1;
        if (!((4 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_12, 14 & 48 >> 3 | 112 & 48 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_5 = modifier_4;
        var $changed_4 = 112 & 48 << 3;
        var modifier_6 = modifier_5;
        var $composer_13 = $composer_12;
        $composer_13.f1x(1725976829);
        sourceInformation($composer_13, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_6 = Companion_instance;
        var compositeKeyHash_1 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_13, 0);
        var localMap_1 = $composer_13.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_1 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_1 = materializerOf(modifier_6);
        var $changed_5 = 6 | 7168 & $changed_4 << 9;
        var $composer_14 = $composer_13;
        var tmp_5 = $composer_14.u1y();
        if (!isInterface(tmp_5, Applier)) {
          invalidApplier();
        }
        $composer_14.k1z();
        if ($composer_14.v1y()) {
          $composer_14.l1z(factory_1);
        } else {
          $composer_14.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_14);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_1 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_1 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1);
        var tmp_6;
        if ($this$with_1.v1y() ? true : !equals($this$with_1.r1z(), compositeKeyHash_1)) {
          $this$with_1.s1z(compositeKeyHash_1);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_1).q1z(compositeKeyHash_1, block_1);
          tmp_6 = Unit_instance;
        }
        skippableUpdate_1(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_14)), $composer_14, 112 & $changed_5 >> 3);
        $composer_14.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_15 = $composer_14;
        sourceInformationMarkerStart($composer_15, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.TextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_16 = $composer_15;
        sourceInformationMarkerStart($composer_16, -368045222, 'C541@25749L10:TextField.kt#uh7d8r');
        trailing($composer_16, 14 & $dirty >> 15);
        sourceInformationMarkerEnd($composer_16);
        sourceInformationMarkerEnd($composer_15);
        $composer_14.h1x();
        $composer_14.n1z();
        $composer_13.h1x();
        $composer_12.h1x();
      }
      $composer_6.h1x();
      var startTextFieldPadding = calculateStartPadding(paddingValues, layoutDirection);
      var endTextFieldPadding = calculateEndPadding(paddingValues, layoutDirection);
      var tmp_7;
      if (!(leading == null)) {
        // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var other = get_HorizontalIconPadding();
        var this_1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(startTextFieldPadding) - _Dp___get_value__impl__geb1vb(other));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var minimumValue = _Dp___init__impl__ms3zkb(0);
        tmp_7 = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(this_1), _Dp___get_value__impl__geb1vb(minimumValue)));
      } else {
        tmp_7 = startTextFieldPadding;
      }
      var startPadding = tmp_7;
      var tmp_8;
      if (!(trailing == null)) {
        // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var other_0 = get_HorizontalIconPadding();
        var this_2 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(endTextFieldPadding) - _Dp___get_value__impl__geb1vb(other_0));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var minimumValue_0 = _Dp___init__impl__ms3zkb(0);
        tmp_8 = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(this_2), _Dp___get_value__impl__geb1vb(minimumValue_0)));
      } else {
        tmp_8 = endTextFieldPadding;
      }
      var endPadding = tmp_8;
      $composer_6.f1x(-1940133430);
      sourceInformation($composer_6, '560@26444L334');
      if (!(prefix == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_7 = padding_1(wrapContentHeight(heightIn(layoutId(Companion_instance, get_PrefixId()), get_MinTextLineHeight())), startPadding, VOID, get_PrefixSuffixTextPadding());
        var contentAlignment_1 = null;
        var propagateMinConstraints_1 = false;
        var $composer_17 = $composer_6;
        $composer_17.f1x(1330882304);
        sourceInformation($composer_17, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_7 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_1 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_1 = false;
        var measurePolicy_2 = rememberBoxMeasurePolicy$composable(contentAlignment_1, propagateMinConstraints_1, $composer_17, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_8 = modifier_7;
        var $changed_6 = 112 & 0 << 3;
        var modifier_9 = modifier_8;
        var $composer_18 = $composer_17;
        $composer_18.f1x(1725976829);
        sourceInformation($composer_18, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_9 = Companion_instance;
        var compositeKeyHash_2 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_18, 0);
        var localMap_2 = $composer_18.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_2 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_2 = materializerOf(modifier_9);
        var $changed_7 = 6 | 7168 & $changed_6 << 9;
        var $composer_19 = $composer_18;
        var tmp_9 = $composer_19.u1y();
        if (!isInterface(tmp_9, Applier)) {
          invalidApplier();
        }
        $composer_19.k1z();
        if ($composer_19.v1y()) {
          $composer_19.l1z(factory_2);
        } else {
          $composer_19.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_19);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_2 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_2 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2);
        var tmp_10;
        if ($this$with_2.v1y() ? true : !equals($this$with_2.r1z(), compositeKeyHash_2)) {
          $this$with_2.s1z(compositeKeyHash_2);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_2).q1z(compositeKeyHash_2, block_2);
          tmp_10 = Unit_instance;
        }
        skippableUpdate_2(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_19)), $composer_19, 112 & $changed_7 >> 3);
        $composer_19.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.TextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_21 = $composer_20;
        sourceInformationMarkerStart($composer_21, -368044219, 'C567@26752L8:TextField.kt#uh7d8r');
        prefix($composer_21, 14 & $dirty >> 18);
        sourceInformationMarkerEnd($composer_21);
        sourceInformationMarkerEnd($composer_20);
        $composer_19.h1x();
        $composer_19.n1z();
        $composer_18.h1x();
        $composer_17.h1x();
      }
      $composer_6.h1x();
      $composer_6.f1x(-1940133031);
      sourceInformation($composer_6, '571@26843L332');
      if (!(suffix == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_10 = padding_1(wrapContentHeight(heightIn(layoutId(Companion_instance, get_SuffixId()), get_MinTextLineHeight())), get_PrefixSuffixTextPadding(), VOID, endPadding);
        var contentAlignment_2 = null;
        var propagateMinConstraints_2 = false;
        var $composer_22 = $composer_6;
        $composer_22.f1x(1330882304);
        sourceInformation($composer_22, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_10 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_2 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_2 = false;
        var measurePolicy_3 = rememberBoxMeasurePolicy$composable(contentAlignment_2, propagateMinConstraints_2, $composer_22, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_11 = modifier_10;
        var $changed_8 = 112 & 0 << 3;
        var modifier_12 = modifier_11;
        var $composer_23 = $composer_22;
        $composer_23.f1x(1725976829);
        sourceInformation($composer_23, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_12 = Companion_instance;
        var compositeKeyHash_3 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_23, 0);
        var localMap_3 = $composer_23.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_3 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_3 = materializerOf(modifier_12);
        var $changed_9 = 6 | 7168 & $changed_8 << 9;
        var $composer_24 = $composer_23;
        var tmp_11 = $composer_24.u1y();
        if (!isInterface(tmp_11, Applier)) {
          invalidApplier();
        }
        $composer_24.k1z();
        if ($composer_24.v1y()) {
          $composer_24.l1z(factory_3);
        } else {
          $composer_24.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_24);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_3 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_3 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3);
        var tmp_12;
        if ($this$with_3.v1y() ? true : !equals($this$with_3.r1z(), compositeKeyHash_3)) {
          $this$with_3.s1z(compositeKeyHash_3);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_3).q1z(compositeKeyHash_3, block_3);
          tmp_12 = Unit_instance;
        }
        skippableUpdate_3(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_24)), $composer_24, 112 & $changed_9 >> 3);
        $composer_24.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_25 = $composer_24;
        sourceInformationMarkerStart($composer_25, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.TextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_26 = $composer_25;
        sourceInformationMarkerStart($composer_26, -368043822, 'C578@27149L8:TextField.kt#uh7d8r');
        suffix($composer_26, 14 & $dirty >> 21);
        sourceInformationMarkerEnd($composer_26);
        sourceInformationMarkerEnd($composer_25);
        $composer_24.h1x();
        $composer_24.n1z();
        $composer_23.h1x();
        $composer_22.h1x();
      }
      $composer_6.h1x();
      $composer_6.f1x(-1940132633);
      sourceInformation($composer_6, '583@27240L347');
      if (!(label == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_13 = padding_1(wrapContentHeight(heightIn(layoutId(Companion_instance, get_LabelId()), lerp(get_MinTextLineHeight(), get_MinFocusedLabelLineHeight(), animationProgress))), startPadding, VOID, endPadding);
        var contentAlignment_3 = null;
        var propagateMinConstraints_3 = false;
        var $composer_27 = $composer_6;
        $composer_27.f1x(1330882304);
        sourceInformation($composer_27, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_13 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_3 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_3 = false;
        var measurePolicy_4 = rememberBoxMeasurePolicy$composable(contentAlignment_3, propagateMinConstraints_3, $composer_27, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_14 = modifier_13;
        var $changed_10 = 112 & 0 << 3;
        var modifier_15 = modifier_14;
        var $composer_28 = $composer_27;
        $composer_28.f1x(1725976829);
        sourceInformation($composer_28, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_15 = Companion_instance;
        var compositeKeyHash_4 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_28, 0);
        var localMap_4 = $composer_28.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_4 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_4 = materializerOf(modifier_15);
        var $changed_11 = 6 | 7168 & $changed_10 << 9;
        var $composer_29 = $composer_28;
        var tmp_13 = $composer_29.u1y();
        if (!isInterface(tmp_13, Applier)) {
          invalidApplier();
        }
        $composer_29.k1z();
        if ($composer_29.v1y()) {
          $composer_29.l1z(factory_4);
        } else {
          $composer_29.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_29);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_4 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_4 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_4);
        var tmp_14;
        if ($this$with_4.v1y() ? true : !equals($this$with_4.r1z(), compositeKeyHash_4)) {
          $this$with_4.s1z(compositeKeyHash_4);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_4).q1z(compositeKeyHash_4, block_4);
          tmp_14 = Unit_instance;
        }
        skippableUpdate_4(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_29)), $composer_29, 112 & $changed_11 >> 3);
        $composer_29.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_30 = $composer_29;
        sourceInformationMarkerStart($composer_30, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.TextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_31 = $composer_30;
        sourceInformationMarkerStart($composer_31, -368043393, 'C589@27578L7:TextField.kt#uh7d8r');
        label($composer_31, 14 & $dirty >> 6);
        sourceInformationMarkerEnd($composer_31);
        sourceInformationMarkerEnd($composer_30);
        $composer_29.h1x();
        $composer_29.n1z();
        $composer_28.h1x();
        $composer_27.h1x();
      }
      $composer_6.h1x();
      var tmp_15 = wrapContentHeight(heightIn(Companion_instance, get_MinTextLineHeight()));
      var tmp_16;
      if (prefix == null) {
        tmp_16 = startPadding;
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_16 = _Dp___init__impl__ms3zkb(0);
      }
      var tmp_17 = tmp_16;
      var tmp_18;
      if (suffix == null) {
        tmp_18 = endPadding;
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_18 = _Dp___init__impl__ms3zkb(0);
      }
      var textPadding = padding_1(tmp_15, tmp_17, VOID, tmp_18);
      $composer_6.f1x(-1940131909);
      sourceInformation($composer_6, '601@27970L105');
      if (!(placeholder == null)) {
        placeholder(layoutId(Companion_instance, get_PlaceholderId()).c5j(textPadding), $composer_6, 112 & $dirty >> 6);
      }
      $composer_6.h1x();
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_16 = layoutId(Companion_instance, get_TextFieldId()).c5j(textPadding);
      var contentAlignment_4 = null;
      var propagateMinConstraints_4 = true;
      var $composer_32 = $composer_6;
      $composer_32.f1x(1330882304);
      sourceInformation($composer_32, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!((2 & 1) === 0))
        modifier_16 = Companion_instance;
      if (!((2 & 2) === 0))
        contentAlignment_4 = Companion_getInstance_4().d5i_1;
      if (!((2 & 4) === 0))
        propagateMinConstraints_4 = false;
      var measurePolicy_5 = rememberBoxMeasurePolicy$composable(contentAlignment_4, propagateMinConstraints_4, $composer_32, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_17 = modifier_16;
      var $changed_12 = 112 & 384 << 3;
      var modifier_18 = modifier_17;
      var $composer_33 = $composer_32;
      $composer_33.f1x(1725976829);
      sourceInformation($composer_33, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_18 = Companion_instance;
      var compositeKeyHash_5 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_33, 0);
      var localMap_5 = $composer_33.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory_5 = Companion_getInstance_5().s6v_1;
      var skippableUpdate_5 = materializerOf(modifier_18);
      var $changed_13 = 6 | 7168 & $changed_12 << 9;
      var $composer_34 = $composer_33;
      var tmp_19 = $composer_34.u1y();
      if (!isInterface(tmp_19, Applier)) {
        invalidApplier();
      }
      $composer_34.k1z();
      if ($composer_34.v1y()) {
        $composer_34.l1z(factory_5);
      } else {
        $composer_34.m1z();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode_5 = _Updater___init__impl__rbfxm8($composer_34);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, measurePolicy_5, Companion_getInstance_5().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, localMap_5, Companion_getInstance_5().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block_5 = Companion_getInstance_5().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_5 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_5);
      var tmp_20;
      if ($this$with_5.v1y() ? true : !equals($this$with_5.r1z(), compositeKeyHash_5)) {
        $this$with_5.s1z(compositeKeyHash_5);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_5).q1z(compositeKeyHash_5, block_5);
        tmp_20 = Unit_instance;
      }
      skippableUpdate_5(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_34)), $composer_34, 112 & $changed_13 >> 3);
      $composer_34.f1x(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_35 = $composer_34;
      sourceInformationMarkerStart($composer_35, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'androidx.compose.material3.TextFieldLayout$composable.<anonymous>.<anonymous>' call
      var $composer_36 = $composer_35;
      sourceInformationMarkerStart($composer_36, -368042665, 'C611@28306L11:TextField.kt#uh7d8r');
      textField($composer_36, 14 & $dirty >> 3);
      sourceInformationMarkerEnd($composer_36);
      sourceInformationMarkerEnd($composer_35);
      $composer_34.h1x();
      $composer_34.n1z();
      $composer_33.h1x();
      $composer_32.h1x();
      $composer_6.f1x(-875078724);
      sourceInformation($composer_6, '616@28443L269');
      if (!(supporting == null)) {
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_19 = padding(wrapContentHeight(heightIn(layoutId(Companion_instance, get_SupportingId()), get_MinSupportingTextLineHeight())), TextFieldDefaults_getInstance().kfu());
        var contentAlignment_5 = null;
        var propagateMinConstraints_5 = false;
        var $composer_37 = $composer_6;
        $composer_37.f1x(1330882304);
        sourceInformation($composer_37, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_19 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_5 = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_5 = false;
        var measurePolicy_6 = rememberBoxMeasurePolicy$composable(contentAlignment_5, propagateMinConstraints_5, $composer_37, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_20 = modifier_19;
        var $changed_14 = 112 & 0 << 3;
        var modifier_21 = modifier_20;
        var $composer_38 = $composer_37;
        $composer_38.f1x(1725976829);
        sourceInformation($composer_38, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_21 = Companion_instance;
        var compositeKeyHash_6 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_38, 0);
        var localMap_6 = $composer_38.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_6 = Companion_getInstance_5().s6v_1;
        var skippableUpdate_6 = materializerOf(modifier_21);
        var $changed_15 = 6 | 7168 & $changed_14 << 9;
        var $composer_39 = $composer_38;
        var tmp_21 = $composer_39.u1y();
        if (!isInterface(tmp_21, Applier)) {
          invalidApplier();
        }
        $composer_39.k1z();
        if ($composer_39.v1y()) {
          $composer_39.l1z(factory_6);
        } else {
          $composer_39.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_6 = _Updater___init__impl__rbfxm8($composer_39);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_6, measurePolicy_6, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_6, localMap_6, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_6 = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_6 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_6);
        var tmp_22;
        if ($this$with_6.v1y() ? true : !equals($this$with_6.r1z(), compositeKeyHash_6)) {
          $this$with_6.s1z(compositeKeyHash_6);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_6).q1z(compositeKeyHash_6, block_6);
          tmp_22 = Unit_instance;
        }
        skippableUpdate_6(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_39)), $composer_39, 112 & $changed_15 >> 3);
        $composer_39.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_40 = $composer_39;
        sourceInformationMarkerStart($composer_40, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.TextFieldLayout$composable.<anonymous>.<anonymous>' call
        var $composer_41 = $composer_40;
        sourceInformationMarkerStart($composer_41, -368042273, 'C621@28698L12:TextField.kt#uh7d8r');
        supporting($composer_41, 14 & $dirty1 >> 3);
        sourceInformationMarkerEnd($composer_41);
        sourceInformationMarkerEnd($composer_40);
        $composer_39.h1x();
        $composer_39.n1z();
        $composer_38.h1x();
        $composer_37.h1x();
      }
      $composer_6.h1x();
      sourceInformationMarkerEnd($composer_6);
      $composer_5.h1x();
      $composer_5.n1z();
      $composer_4.h1x();
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
      tmp0_safe_receiver.w2e(TextFieldLayout$composable$lambda(modifier, textField, label, placeholder, leading, trailing, prefix, suffix, singleLine, animationProgress, container, supporting, paddingValues, $changed, $changed1));
    }
  }
  function intrinsicWidth_0($this, measurables, height, intrinsicMeasurer) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator = measurables.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element), get_TextFieldId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldWidth = intrinsicMeasurer(tmp$ret$1, height);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_0), get_LabelId())) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp = intrinsicMeasurer(tmp0_safe_receiver, height);
    }
    var tmp1_elvis_lhs = tmp;
    var labelWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.v();
      while (tmp0_iterator_1.w()) {
        var element_1 = tmp0_iterator_1.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_1), get_TrailingId())) {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var tmp2_safe_receiver = tmp$ret$8;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_0 = intrinsicMeasurer(tmp2_safe_receiver, height);
    }
    var tmp3_elvis_lhs = tmp_0;
    var trailingWidth = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.v();
      while (tmp0_iterator_2.w()) {
        var element_2 = tmp0_iterator_2.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_2), get_PrefixId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp4_safe_receiver = tmp$ret$13;
    var tmp_1;
    if (tmp4_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_1 = intrinsicMeasurer(tmp4_safe_receiver, height);
    }
    var tmp5_elvis_lhs = tmp_1;
    var prefixWidth = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$18;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.v();
      while (tmp0_iterator_3.w()) {
        var element_3 = tmp0_iterator_3.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_3), get_SuffixId())) {
          tmp$ret$18 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$18 = null;
    }
    var tmp6_safe_receiver = tmp$ret$18;
    var tmp_2;
    if (tmp6_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_2 = intrinsicMeasurer(tmp6_safe_receiver, height);
    }
    var tmp7_elvis_lhs = tmp_2;
    var suffixWidth = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$23;
    $l$block_4: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_4 = measurables.v();
      while (tmp0_iterator_4.w()) {
        var element_4 = tmp0_iterator_4.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_4), get_LeadingId())) {
          tmp$ret$23 = element_4;
          break $l$block_4;
        }
      }
      tmp$ret$23 = null;
    }
    var tmp8_safe_receiver = tmp$ret$23;
    var tmp_3;
    if (tmp8_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_3 = intrinsicMeasurer(tmp8_safe_receiver, height);
    }
    var tmp9_elvis_lhs = tmp_3;
    var leadingWidth = tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$28;
    $l$block_5: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_5 = measurables.v();
      while (tmp0_iterator_5.w()) {
        var element_5 = tmp0_iterator_5.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
        if (equals(get_layoutId_0(element_5), get_PlaceholderId())) {
          tmp$ret$28 = element_5;
          break $l$block_5;
        }
      }
      tmp$ret$28 = null;
    }
    var tmp10_safe_receiver = tmp$ret$28;
    var tmp_4;
    if (tmp10_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicWidth.<anonymous>' call
      tmp_4 = intrinsicMeasurer(tmp10_safe_receiver, height);
    }
    var tmp11_elvis_lhs = tmp_4;
    var placeholderWidth = tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs;
    return calculateWidth_0(leadingWidth, trailingWidth, prefixWidth, suffixWidth, textFieldWidth, labelWidth, placeholderWidth, get_ZeroConstraints());
  }
  function intrinsicHeight_0(_this__u8e3s4, $this, measurables, width, intrinsicMeasurer) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator = measurables.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element), get_TextFieldId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldHeight = intrinsicMeasurer(tmp$ret$1, width);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_0), get_LabelId())) {
          tmp$ret$3 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp = intrinsicMeasurer(tmp0_safe_receiver, width);
    }
    var tmp1_elvis_lhs = tmp;
    var labelHeight = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.v();
      while (tmp0_iterator_1.w()) {
        var element_1 = tmp0_iterator_1.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_1), get_TrailingId())) {
          tmp$ret$8 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$8 = null;
    }
    var tmp2_safe_receiver = tmp$ret$8;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_0 = intrinsicMeasurer(tmp2_safe_receiver, width);
    }
    var tmp3_elvis_lhs = tmp_0;
    var trailingHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.v();
      while (tmp0_iterator_2.w()) {
        var element_2 = tmp0_iterator_2.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_2), get_LeadingId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp4_safe_receiver = tmp$ret$13;
    var tmp_1;
    if (tmp4_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_1 = intrinsicMeasurer(tmp4_safe_receiver, width);
    }
    var tmp5_elvis_lhs = tmp_1;
    var leadingHeight = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$18;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.v();
      while (tmp0_iterator_3.w()) {
        var element_3 = tmp0_iterator_3.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_3), get_PrefixId())) {
          tmp$ret$18 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$18 = null;
    }
    var tmp6_safe_receiver = tmp$ret$18;
    var tmp_2;
    if (tmp6_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_2 = intrinsicMeasurer(tmp6_safe_receiver, width);
    }
    var tmp7_elvis_lhs = tmp_2;
    var prefixHeight = tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$23;
    $l$block_4: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_4 = measurables.v();
      while (tmp0_iterator_4.w()) {
        var element_4 = tmp0_iterator_4.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_4), get_SuffixId())) {
          tmp$ret$23 = element_4;
          break $l$block_4;
        }
      }
      tmp$ret$23 = null;
    }
    var tmp8_safe_receiver = tmp$ret$23;
    var tmp_3;
    if (tmp8_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_3 = intrinsicMeasurer(tmp8_safe_receiver, width);
    }
    var tmp9_elvis_lhs = tmp_3;
    var suffixHeight = tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$28;
    $l$block_5: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_5 = measurables.v();
      while (tmp0_iterator_5.w()) {
        var element_5 = tmp0_iterator_5.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_5), get_PlaceholderId())) {
          tmp$ret$28 = element_5;
          break $l$block_5;
        }
      }
      tmp$ret$28 = null;
    }
    var tmp10_safe_receiver = tmp$ret$28;
    var tmp_4;
    if (tmp10_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_4 = intrinsicMeasurer(tmp10_safe_receiver, width);
    }
    var tmp11_elvis_lhs = tmp_4;
    var placeholderHeight = tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$33;
    $l$block_6: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_6 = measurables.v();
      while (tmp0_iterator_6.w()) {
        var element_6 = tmp0_iterator_6.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
        if (equals(get_layoutId_0(element_6), get_SupportingId())) {
          tmp$ret$33 = element_6;
          break $l$block_6;
        }
      }
      tmp$ret$33 = null;
    }
    var tmp12_safe_receiver = tmp$ret$33;
    var tmp_5;
    if (tmp12_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.intrinsicHeight.<anonymous>' call
      tmp_5 = intrinsicMeasurer(tmp12_safe_receiver, width);
    }
    var tmp13_elvis_lhs = tmp_5;
    var supportingHeight = tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs;
    return calculateHeight_0(textFieldHeight, labelHeight, leadingHeight, trailingHeight, prefixHeight, suffixHeight, placeholderHeight, supportingHeight, $this.ufy_1 === 1.0, get_ZeroConstraints(), _this__u8e3s4.h3b(), $this.vfy_1);
  }
  function TextFieldMeasurePolicy$measure$lambda($labelPlaceable, $width, $totalHeight, $textFieldPlaceable, $placeholderPlaceable, $leadingPlaceable, $trailingPlaceable, $prefixPlaceable, $suffixPlaceable, $containerPlaceable, $supportingPlaceable, this$0, $topPaddingValue, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (!($labelPlaceable == null)) {
        placeWithLabel($this$layout, $width, $totalHeight, $textFieldPlaceable, $labelPlaceable, $placeholderPlaceable, $leadingPlaceable, $trailingPlaceable, $prefixPlaceable, $suffixPlaceable, $containerPlaceable, $supportingPlaceable, this$0.tfy_1, $topPaddingValue, $topPaddingValue + $labelPlaceable.n5l_1 | 0, this$0.ufy_1, $this_measure.h3b());
        tmp = Unit_instance;
      } else {
        placeWithoutLabel($this$layout, $width, $totalHeight, $textFieldPlaceable, $placeholderPlaceable, $leadingPlaceable, $trailingPlaceable, $prefixPlaceable, $suffixPlaceable, $containerPlaceable, $supportingPlaceable, this$0.tfy_1, $this_measure.h3b(), this$0.vfy_1);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function TextFieldMeasurePolicy$maxIntrinsicHeight$lambda(intrinsicMeasurable, w) {
    return intrinsicMeasurable.i5r(w);
  }
  function TextFieldMeasurePolicy$minIntrinsicHeight$lambda(intrinsicMeasurable, w) {
    return intrinsicMeasurable.h5r(w);
  }
  function TextFieldMeasurePolicy$maxIntrinsicWidth$lambda(intrinsicMeasurable, h) {
    return intrinsicMeasurable.g5r(h);
  }
  function TextFieldMeasurePolicy$minIntrinsicWidth$lambda(intrinsicMeasurable, h) {
    return intrinsicMeasurable.f5r(h);
  }
  function TextFieldMeasurePolicy(singleLine, animationProgress, paddingValues) {
    this.tfy_1 = singleLine;
    this.ufy_1 = animationProgress;
    this.vfy_1 = paddingValues;
  }
  protoOf(TextFieldMeasurePolicy).e6z = function (_this__u8e3s4, measurables, constraints) {
    var topPaddingValue = _this__u8e3s4.k3b(this.vfy_1.h97());
    var bottomPaddingValue = _this__u8e3s4.k3b(this.vfy_1.i97());
    var occupiedSpaceHorizontally = 0;
    var occupiedSpaceVertically = 0;
    var looseConstraints = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = measurables.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element), get_LeadingId())) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var leadingPlaceable = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l5l(looseConstraints);
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(leadingPlaceable) | 0;
    // Inline function 'kotlin.math.max' call
    var a = occupiedSpaceVertically;
    var b = heightOrZero(leadingPlaceable);
    occupiedSpaceVertically = Math.max(a, b);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = measurables.v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_0), get_TrailingId())) {
          tmp$ret$5 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp1_safe_receiver = tmp$ret$5;
    var trailingPlaceable = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l5l(offset(looseConstraints, -occupiedSpaceHorizontally | 0));
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(trailingPlaceable) | 0;
    // Inline function 'kotlin.math.max' call
    var a_0 = occupiedSpaceVertically;
    var b_0 = heightOrZero(trailingPlaceable);
    occupiedSpaceVertically = Math.max(a_0, b_0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$9;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_1 = measurables.v();
      while (tmp0_iterator_1.w()) {
        var element_1 = tmp0_iterator_1.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_1), get_PrefixId())) {
          tmp$ret$9 = element_1;
          break $l$block_1;
        }
      }
      tmp$ret$9 = null;
    }
    var tmp2_safe_receiver = tmp$ret$9;
    var prefixPlaceable = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.l5l(offset(looseConstraints, -occupiedSpaceHorizontally | 0));
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(prefixPlaceable) | 0;
    // Inline function 'kotlin.math.max' call
    var a_1 = occupiedSpaceVertically;
    var b_1 = heightOrZero(prefixPlaceable);
    occupiedSpaceVertically = Math.max(a_1, b_1);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$13;
    $l$block_2: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_2 = measurables.v();
      while (tmp0_iterator_2.w()) {
        var element_2 = tmp0_iterator_2.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_2), get_SuffixId())) {
          tmp$ret$13 = element_2;
          break $l$block_2;
        }
      }
      tmp$ret$13 = null;
    }
    var tmp3_safe_receiver = tmp$ret$13;
    var suffixPlaceable = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.l5l(offset(looseConstraints, -occupiedSpaceHorizontally | 0));
    occupiedSpaceHorizontally = occupiedSpaceHorizontally + widthOrZero(suffixPlaceable) | 0;
    // Inline function 'kotlin.math.max' call
    var a_2 = occupiedSpaceVertically;
    var b_2 = heightOrZero(suffixPlaceable);
    occupiedSpaceVertically = Math.max(a_2, b_2);
    var tmp4_vertical = -bottomPaddingValue | 0;
    var tmp5_horizontal = -occupiedSpaceHorizontally | 0;
    var labelConstraints = offset(looseConstraints, tmp5_horizontal, tmp4_vertical);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$17;
    $l$block_3: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_3 = measurables.v();
      while (tmp0_iterator_3.w()) {
        var element_3 = tmp0_iterator_3.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_3), get_LabelId())) {
          tmp$ret$17 = element_3;
          break $l$block_3;
        }
      }
      tmp$ret$17 = null;
    }
    var tmp6_safe_receiver = tmp$ret$17;
    var labelPlaceable = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.l5l(labelConstraints);
    var effectiveTopOffset = topPaddingValue + heightOrZero(labelPlaceable) | 0;
    var verticalConstraintOffset = (-effectiveTopOffset | 0) - bottomPaddingValue | 0;
    var tmp7_$receiver = Constraints__copy$default_impl_f452rp(constraints, VOID, VOID, 0);
    var tmp8_horizontal = -occupiedSpaceHorizontally | 0;
    var textFieldConstraints = offset(tmp7_$receiver, tmp8_horizontal, verticalConstraintOffset);
    var tmp$ret$20;
    $l$block_4: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator_4 = measurables.v();
      while (tmp0_iterator_4.w()) {
        var element_4 = tmp0_iterator_4.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_4), get_TextFieldId())) {
          tmp$ret$20 = element_4;
          break $l$block_4;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var textFieldPlaceable = tmp$ret$20.l5l(textFieldConstraints);
    var placeholderConstraints = Constraints__copy$default_impl_f452rp(textFieldConstraints, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$22;
    $l$block_5: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_5 = measurables.v();
      while (tmp0_iterator_5.w()) {
        var element_5 = tmp0_iterator_5.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_5), get_PlaceholderId())) {
          tmp$ret$22 = element_5;
          break $l$block_5;
        }
      }
      tmp$ret$22 = null;
    }
    var tmp9_safe_receiver = tmp$ret$22;
    var placeholderPlaceable = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.l5l(placeholderConstraints);
    // Inline function 'kotlin.math.max' call
    var a_3 = occupiedSpaceVertically;
    // Inline function 'kotlin.math.max' call
    var a_4 = heightOrZero(textFieldPlaceable);
    var b_3 = heightOrZero(placeholderPlaceable);
    var b_4 = (Math.max(a_4, b_3) + effectiveTopOffset | 0) + bottomPaddingValue | 0;
    occupiedSpaceVertically = Math.max(a_3, b_4);
    var supportingConstraints = Constraints__copy$default_impl_f452rp(offset(looseConstraints, VOID, -occupiedSpaceVertically | 0), VOID, VOID, 0);
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$27;
    $l$block_6: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_6 = measurables.v();
      while (tmp0_iterator_6.w()) {
        var element_6 = tmp0_iterator_6.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_6), get_SupportingId())) {
          tmp$ret$27 = element_6;
          break $l$block_6;
        }
      }
      tmp$ret$27 = null;
    }
    var tmp10_safe_receiver = tmp$ret$27;
    var supportingPlaceable = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.l5l(supportingConstraints);
    var supportingHeight = heightOrZero(supportingPlaceable);
    var width = calculateWidth_0(widthOrZero(leadingPlaceable), widthOrZero(trailingPlaceable), widthOrZero(prefixPlaceable), widthOrZero(suffixPlaceable), textFieldPlaceable.m5l_1, widthOrZero(labelPlaceable), widthOrZero(placeholderPlaceable), constraints);
    var totalHeight = calculateHeight_0(textFieldPlaceable.n5l_1, heightOrZero(labelPlaceable), heightOrZero(leadingPlaceable), heightOrZero(trailingPlaceable), heightOrZero(prefixPlaceable), heightOrZero(suffixPlaceable), heightOrZero(placeholderPlaceable), heightOrZero(supportingPlaceable), this.ufy_1 === 1.0, constraints, _this__u8e3s4.h3b(), this.vfy_1);
    var height = totalHeight - supportingHeight | 0;
    var tmp$ret$30;
    $l$block_7: {
      // Inline function 'kotlin.collections.first' call
      var tmp0_iterator_7 = measurables.v();
      while (tmp0_iterator_7.w()) {
        var element_7 = tmp0_iterator_7.y();
        // Inline function 'androidx.compose.material3.TextFieldMeasurePolicy.measure.<anonymous>' call
        if (equals(get_layoutId(element_7), get_ContainerId())) {
          tmp$ret$30 = element_7;
          break $l$block_7;
        }
      }
      throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
    }
    var tmp = tmp$ret$30;
    var tmp_0;
    Companion_getInstance_7();
    if (!(width === 2147483647)) {
      tmp_0 = width;
    } else {
      tmp_0 = 0;
    }
    var tmp_1 = tmp_0;
    var tmp_2;
    Companion_getInstance_7();
    if (!(height === 2147483647)) {
      tmp_2 = height;
    } else {
      tmp_2 = 0;
    }
    var containerPlaceable = tmp.l5l(Constraints_0(tmp_1, width, tmp_2, height));
    return _this__u8e3s4.s5l(width, totalHeight, VOID, TextFieldMeasurePolicy$measure$lambda(labelPlaceable, width, totalHeight, textFieldPlaceable, placeholderPlaceable, leadingPlaceable, trailingPlaceable, prefixPlaceable, suffixPlaceable, containerPlaceable, supportingPlaceable, this, topPaddingValue, _this__u8e3s4));
  };
  protoOf(TextFieldMeasurePolicy).i6z = function (_this__u8e3s4, measurables, width) {
    return intrinsicHeight_0(_this__u8e3s4, this, measurables, width, TextFieldMeasurePolicy$maxIntrinsicHeight$lambda);
  };
  protoOf(TextFieldMeasurePolicy).g6z = function (_this__u8e3s4, measurables, width) {
    return intrinsicHeight_0(_this__u8e3s4, this, measurables, width, TextFieldMeasurePolicy$minIntrinsicHeight$lambda);
  };
  protoOf(TextFieldMeasurePolicy).h6z = function (_this__u8e3s4, measurables, height) {
    return intrinsicWidth_0(this, measurables, height, TextFieldMeasurePolicy$maxIntrinsicWidth$lambda);
  };
  protoOf(TextFieldMeasurePolicy).f6z = function (_this__u8e3s4, measurables, height) {
    return intrinsicWidth_0(this, measurables, height, TextFieldMeasurePolicy$minIntrinsicWidth$lambda);
  };
  function calculateWidth_0(leadingWidth, trailingWidth, prefixWidth, suffixWidth, textFieldWidth, labelWidth, placeholderWidth, constraints) {
    _init_properties_TextField_kt__b1se5h();
    var affixTotalWidth = prefixWidth + suffixWidth | 0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = textFieldWidth + affixTotalWidth | 0;
    var b = placeholderWidth + affixTotalWidth | 0;
    var middleSection = Math.max(a, b, labelWidth);
    var wrappedWidth = (leadingWidth + middleSection | 0) + trailingWidth | 0;
    // Inline function 'kotlin.math.max' call
    var b_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    return Math.max(wrappedWidth, b_0);
  }
  function calculateHeight_0(textFieldHeight, labelHeight, leadingHeight, trailingHeight, prefixHeight, suffixHeight, placeholderHeight, supportingHeight, isLabelFocused, constraints, density, paddingValues) {
    _init_properties_TextField_kt__b1se5h();
    var hasLabel = labelHeight > 0;
    var tmp;
    if (!hasLabel ? true : isLabelFocused) {
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var this_0 = paddingValues.h97();
      var other = paddingValues.i97();
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) + _Dp___get_value__impl__geb1vb(other));
      tmp = _Dp___get_value__impl__geb1vb(tmp$ret$0);
    } else {
      // Inline function 'androidx.compose.ui.unit.Dp.times' call
      var this_1 = get_TextFieldPadding();
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_1) * 2);
      tmp = _Dp___get_value__impl__geb1vb(tmp$ret$1);
    }
    var verticalPadding = density * tmp;
    var tmp_0;
    if (hasLabel ? isLabelFocused : false) {
      var tmp_1 = verticalPadding + labelHeight;
      // Inline function 'kotlin.math.max' call
      tmp_0 = tmp_1 + Math.max(textFieldHeight, placeholderHeight);
    } else {
      // Inline function 'kotlin.comparisons.maxOf' call
      tmp_0 = verticalPadding + Math.max(labelHeight, textFieldHeight, placeholderHeight);
    }
    var middleSectionHeight = tmp_0;
    // Inline function 'kotlin.math.max' call
    var a = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp$ret$4 = roundToInt(middleSectionHeight);
    var b = maxOf(leadingHeight, new Int32Array([trailingHeight, prefixHeight, suffixHeight, tmp$ret$4])) + supportingHeight | 0;
    return Math.max(a, b);
  }
  function placeWithLabel(_this__u8e3s4, width, totalHeight, textfieldPlaceable, labelPlaceable, placeholderPlaceable, leadingPlaceable, trailingPlaceable, prefixPlaceable, suffixPlaceable, containerPlaceable, supportingPlaceable, singleLine, labelEndPosition, textPosition, animationProgress, density) {
    _init_properties_TextField_kt__b1se5h();
    _this__u8e3s4.c72(containerPlaceable, Companion_getInstance_8().g3c_1);
    var height = totalHeight - heightOrZero(supportingPlaceable) | 0;
    if (leadingPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(leadingPlaceable, 0, Companion_getInstance_4().n5i_1.x5i(leadingPlaceable.n5l_1, height));
    }
    if (trailingPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(trailingPlaceable, width - trailingPlaceable.m5l_1 | 0, Companion_getInstance_4().n5i_1.x5i(trailingPlaceable.n5l_1, height));
    }
    if (labelPlaceable == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (singleLine) {
        tmp = Companion_getInstance_4().n5i_1.x5i(labelPlaceable.n5l_1, height);
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = _Dp___get_value__impl__geb1vb(get_TextFieldPadding()) * density;
        tmp = roundToInt(this_0);
      }
      var startPosition = tmp;
      var distance = startPosition - labelEndPosition | 0;
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = distance * animationProgress;
      var positionY = startPosition - roundToInt(this_1) | 0;
      _this__u8e3s4.e5r(labelPlaceable, widthOrZero(leadingPlaceable), positionY);
    }
    if (prefixPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(prefixPlaceable, widthOrZero(leadingPlaceable), textPosition);
    }
    if (suffixPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(suffixPlaceable, (width - widthOrZero(trailingPlaceable) | 0) - suffixPlaceable.m5l_1 | 0, textPosition);
    }
    var textHorizontalPosition = widthOrZero(leadingPlaceable) + widthOrZero(prefixPlaceable) | 0;
    _this__u8e3s4.e5r(textfieldPlaceable, textHorizontalPosition, textPosition);
    if (placeholderPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(placeholderPlaceable, textHorizontalPosition, textPosition);
    }
    if (supportingPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(supportingPlaceable, 0, height);
    }
  }
  function placeWithoutLabel(_this__u8e3s4, width, totalHeight, textPlaceable, placeholderPlaceable, leadingPlaceable, trailingPlaceable, prefixPlaceable, suffixPlaceable, containerPlaceable, supportingPlaceable, singleLine, density, paddingValues) {
    _init_properties_TextField_kt__b1se5h();
    _this__u8e3s4.c72(containerPlaceable, Companion_getInstance_8().g3c_1);
    var height = totalHeight - heightOrZero(supportingPlaceable) | 0;
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = _Dp___get_value__impl__geb1vb(paddingValues.h97()) * density;
    var topPadding = roundToInt(this_0);
    if (leadingPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(leadingPlaceable, 0, Companion_getInstance_4().n5i_1.x5i(leadingPlaceable.n5l_1, height));
    }
    if (trailingPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(trailingPlaceable, width - trailingPlaceable.m5l_1 | 0, Companion_getInstance_4().n5i_1.x5i(trailingPlaceable.n5l_1, height));
    }
    if (prefixPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(prefixPlaceable, widthOrZero(leadingPlaceable), placeWithoutLabel$calculateVerticalPosition(singleLine, height, topPadding, prefixPlaceable));
    }
    if (suffixPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(suffixPlaceable, (width - widthOrZero(trailingPlaceable) | 0) - suffixPlaceable.m5l_1 | 0, placeWithoutLabel$calculateVerticalPosition(singleLine, height, topPadding, suffixPlaceable));
    }
    var textHorizontalPosition = widthOrZero(leadingPlaceable) + widthOrZero(prefixPlaceable) | 0;
    _this__u8e3s4.e5r(textPlaceable, textHorizontalPosition, placeWithoutLabel$calculateVerticalPosition(singleLine, height, topPadding, textPlaceable));
    if (placeholderPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(placeholderPlaceable, textHorizontalPosition, placeWithoutLabel$calculateVerticalPosition(singleLine, height, topPadding, placeholderPlaceable));
    }
    if (supportingPlaceable == null)
      null;
    else {
      _this__u8e3s4.e5r(supportingPlaceable, 0, height);
    }
  }
  function TextField$composable(value, onValueChange, modifier, enabled, readOnly, textStyle, label, placeholder, leadingIcon, trailingIcon, prefix, suffix, supportingText, isError, visualTransformation, keyboardOptions, keyboardActions, singleLine, maxLines, minLines, interactionSource, shape, colors, $composer, $changed, $changed1, $changed2, $default) {
    _init_properties_TextField_kt__b1se5h();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var readOnly_0 = {_v: readOnly};
    var textStyle_0 = {_v: textStyle};
    var label_0 = {_v: label};
    var placeholder_0 = {_v: placeholder};
    var leadingIcon_0 = {_v: leadingIcon};
    var trailingIcon_0 = {_v: trailingIcon};
    var prefix_0 = {_v: prefix};
    var suffix_0 = {_v: suffix};
    var supportingText_0 = {_v: supportingText};
    var isError_0 = {_v: isError};
    var visualTransformation_0 = {_v: visualTransformation};
    var keyboardOptions_0 = {_v: keyboardOptions};
    var keyboardActions_0 = {_v: keyboardActions};
    var singleLine_0 = {_v: singleLine};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var interactionSource_0 = {_v: interactionSource};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1338241571);
    sourceInformation($composer_0, 'C(TextField$composable)P(21,11,10,1,14,19,6,12,7,20,13,17,18,3,22,5,4,16,8,9,2,15)171@8945L7,186@9697L39,187@9775L5,188@9830L8,196@10192L15,196@10126L1825:TextField.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    var $dirty2 = $changed2;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(value) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(onValueChange) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.u1z(enabled_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.u1z(readOnly_0._v) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ((($default & 32) === 0 ? $composer_0.t1z(textStyle_0._v) : false) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1z(label_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.y1z(placeholder_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.y1z(leadingIcon_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.y1z(trailingIcon_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(prefix_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(suffix_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(supportingText_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1z(isError_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1z(visualTransformation_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1z(keyboardOptions_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1z(keyboardActions_0._v) ? 1048576 : 524288);
    if (!(($default & 131072) === 0))
      $dirty1 = $dirty1 | 12582912;
    else if (($changed1 & 29360128) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1z(singleLine_0._v) ? 8388608 : 4194304);
    if (($changed1 & 234881024) === 0)
      $dirty1 = $dirty1 | ((($default & 262144) === 0 ? $composer_0.v1z(maxLines_0._v) : false) ? 67108864 : 33554432);
    if (!(($default & 524288) === 0))
      $dirty1 = $dirty1 | 805306368;
    else if (($changed1 & 1879048192) === 0)
      $dirty1 = $dirty1 | ($composer_0.v1z(minLines_0._v) ? 536870912 : 268435456);
    if (($changed2 & 14) === 0)
      $dirty2 = $dirty2 | ((($default & 1048576) === 0 ? $composer_0.t1z(interactionSource_0._v) : false) ? 4 : 2);
    if (($changed2 & 112) === 0)
      $dirty2 = $dirty2 | ((($default & 2097152) === 0 ? $composer_0.t1z(shape_0._v) : false) ? 32 : 16);
    if (($changed2 & 896) === 0)
      $dirty2 = $dirty2 | ((($default & 4194304) === 0 ? $composer_0.t1z(colors_0._v) : false) ? 256 : 128);
    if (((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 1533916891) === 306783378)) ? true : !(($dirty2 & 731) === 146)) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 8) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 16) === 0)) {
          readOnly_0._v = false;
        }
        if (!(($default & 32) === 0)) {
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var this_0 = get_LocalTextStyle();
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_1.b20(this_0);
          sourceInformationMarkerEnd($composer_1);
          textStyle_0._v = tmp0;
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          label_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          leadingIcon_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          trailingIcon_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          prefix_0._v = null;
        }
        if (!(($default & 2048) === 0)) {
          suffix_0._v = null;
        }
        if (!(($default & 4096) === 0)) {
          supportingText_0._v = null;
        }
        if (!(($default & 8192) === 0)) {
          isError_0._v = false;
        }
        if (!(($default & 16384) === 0)) {
          visualTransformation_0._v = Companion_getInstance_12().t5b_1;
        }
        if (!(($default & 32768) === 0)) {
          keyboardOptions_0._v = Companion_getInstance_13().abv_1;
        }
        if (!(($default & 65536) === 0)) {
          keyboardActions_0._v = Companion_getInstance_14().bbv_1;
        }
        if (!(($default & 131072) === 0)) {
          singleLine_0._v = false;
        }
        if (!(($default & 262144) === 0)) {
          maxLines_0._v = singleLine_0._v ? 1 : IntCompanionObject_instance.MAX_VALUE;
          $dirty1 = $dirty1 & -234881025;
        }
        if (!(($default & 524288) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 1048576) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_2 = $composer_0;
          $composer_2.f1x(547886695);
          sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_2.r1z();
          var tmp;
          if (false ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.TextField$composable.<anonymous>' call
            var value_0 = funMutableInteractionSource();
            $composer_2.s1z(value_0);
            tmp = value_0;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp0_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_2.h1x();
          interactionSource_0._v = tmp0_0;
          $dirty2 = $dirty2 & -15;
        }
        if (!(($default & 2097152) === 0)) {
          shape_0._v = TextFieldDefaults_getInstance().nfc($composer_0, 6);
          $dirty2 = $dirty2 & -113;
        }
        if (!(($default & 4194304) === 0)) {
          var tmp_1 = TextFieldDefaults_getInstance();
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_13 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_17 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_18 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_20 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_21 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_22 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_23 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_24 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_25 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_26 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_27 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_28 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_29 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_30 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_31 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_32 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_33 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_34 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_35 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_36 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_37 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_38 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_39 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_40 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_41 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_42 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = tmp_1.wfy(tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, null, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, tmp_38, tmp_39, tmp_40, tmp_41, tmp_42, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 0, 0, 0, 3072, 2147483647, 4095);
          $dirty2 = $dirty2 & -897;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 262144) === 0))
          $dirty1 = $dirty1 & -234881025;
        if (!(($default & 1048576) === 0))
          $dirty2 = $dirty2 & -15;
        if (!(($default & 2097152) === 0))
          $dirty2 = $dirty2 & -113;
        if (!(($default & 4194304) === 0))
          $dirty2 = $dirty2 & -897;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-1338241571, $dirty, $dirty1, 'androidx.compose.material3.TextField$composable (TextField.kt:165)');
      }
      $composer_0.f1x(-391632093);
      sourceInformation($composer_0, '*192@9990L46');
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var this_1 = textStyle_0._v.m42();
      var tmp_43;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(this_1), _Color___get_value__impl__1pls5m(Companion_getInstance_2().k42_1))) {
        tmp_43 = this_1;
      } else {
        // Inline function 'androidx.compose.material3.TextField$composable.<anonymous>' call
        tmp_43 = colors_0._v.pg0(enabled_0._v, isError_0._v, interactionSource_0._v, $composer_0, 14 & $dirty >> 9 | 112 & $dirty1 >> 6 | 896 & $dirty2 << 6 | 7168 & $dirty2 << 3).u2().p41_1;
      }
      var tmp0_group = tmp_43;
      $composer_0.h1x();
      var textColor = tmp0_group;
      var mergedTextStyle = textStyle_0._v.t4y(TextStyle_init_$Create$(textColor));
      var tmp_44 = [get_LocalTextSelectionColors().r2e(colors_0._v.qg0($composer_0, 14 & $dirty2 >> 6))];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.TextField$composable.<anonymous>' call
      var tmp_45 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_45, 1859145987, true, TextField$composable$lambda(modifier_0, colors_0, isError_0, $dirty1, $dirty2, value, onValueChange, enabled_0, readOnly_0, mergedTextStyle, keyboardOptions_0, keyboardActions_0, singleLine_0, maxLines_0, minLines_0, visualTransformation_0, interactionSource_0, $dirty, label_0, placeholder_0, leadingIcon_0, trailingIcon_0, prefix_0, suffix_0, supportingText_0, shape_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_3 = $composer_0;
      $composer_3.f1x(-838505973);
      sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_3.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_3.r1z();
      var tmp_46;
      if (invalid ? true : it_0 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.TextField$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_26(dispatchReceiver);
        $composer_3.s1z(value_1);
        tmp_46 = value_1;
      } else {
        tmp_46 = it_0;
      }
      var tmp_47 = tmp_46;
      var tmp0_1 = (tmp_47 == null ? true : !(tmp_47 == null)) ? tmp_47 : THROW_CCE();
      $composer_3.h1x();
      CompositionLocalProvider$composable(tmp_44, tmp0_1, $composer_0, 48);
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
      tmp1_safe_receiver.w2e(TextField$composable$lambda_0(value, onValueChange, modifier_0, enabled_0, readOnly_0, textStyle_0, label_0, placeholder_0, leadingIcon_0, trailingIcon_0, prefix_0, suffix_0, supportingText_0, isError_0, visualTransformation_0, keyboardOptions_0, keyboardActions_0, singleLine_0, maxLines_0, minLines_0, interactionSource_0, shape_0, colors_0, $changed, $changed1, $changed2, $default));
    }
  }
  function placeWithoutLabel$calculateVerticalPosition($singleLine, height, topPadding, placeable) {
    var tmp;
    if ($singleLine) {
      tmp = Companion_getInstance_4().n5i_1.x5i(placeable.n5l_1, height);
    } else {
      tmp = topPadding;
    }
    return tmp;
  }
  function drawIndicatorLine$lambda($strokeWidthDp, $indicatorBorder) {
    return function ($this$drawWithContent) {
      $this$drawWithContent.s5p();
      var tmp;
      if (equals($strokeWidthDp, Companion_getInstance_0().w3b_1)) {
        return Unit_instance;
      }
      var strokeWidth = _Dp___get_value__impl__geb1vb($strokeWidthDp) * $this$drawWithContent.h3b();
      var y = _Size___get_height__impl__a04p02($this$drawWithContent.m39()) - strokeWidth / 2;
      $this$drawWithContent.r4f($indicatorBorder.q9i_1, Offset(0.0, y), Offset(_Size___get_width__impl__58y75t($this$drawWithContent.m39()), y), strokeWidth);
      return Unit_instance;
    };
  }
  function TextFieldLayout$composable$lambda($modifier, $textField, $label, $placeholder, $leading, $trailing, $prefix, $suffix, $singleLine, $animationProgress, $container, $supporting, $paddingValues, $$changed, $$changed1) {
    return function ($composer, $force) {
      TextFieldLayout$composable($modifier, $textField, $label, $placeholder, $leading, $trailing, $prefix, $suffix, $singleLine, $animationProgress, $container, $supporting, $paddingValues, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_instance;
    };
  }
  function TextField$composable$lambda$lambda($value, $enabled, $singleLine, $visualTransformation, $interactionSource, $isError, $label, $placeholder, $leadingIcon, $trailingIcon, $prefix, $suffix, $supportingText, $shape, $colors, $$dirty, $$dirty1, $$dirty2) {
    return function (innerTextField, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C218@11178L743:TextField.kt#uh7d8r');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.y1z(innerTextField) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-288211827, $dirty, -1, 'androidx.compose.material3.TextField$composable.<anonymous>.<anonymous> (TextField.kt:216)');
        }
        var tmp_1 = TextFieldDefaults_getInstance();
        var tmp_2 = $enabled._v;
        var tmp_3 = $singleLine._v;
        var tmp_4 = $visualTransformation._v;
        var tmp_5 = $interactionSource._v;
        var tmp_6 = $isError._v;
        var tmp_7 = $label._v;
        var tmp_8 = $placeholder._v;
        var tmp_9 = $leadingIcon._v;
        var tmp_10 = $trailingIcon._v;
        var tmp_11 = $prefix._v;
        var tmp_12 = $suffix._v;
        var tmp_13 = $supportingText._v;
        var tmp_14 = $shape._v;
        var tmp_15 = $colors._v;
        tmp_1.rg0($value, innerTextField, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, null, null, $composer_0, 14 & $$dirty | 112 & $dirty << 3 | 896 & $$dirty >> 3 | 7168 & $$dirty1 >> 12 | 57344 & $$dirty1 | 458752 & $$dirty2 << 15 | 3670016 & $$dirty1 << 9 | 29360128 & $$dirty << 3 | 234881024 & $$dirty << 3 | 1879048192 & $$dirty << 3, 100663296 | 14 & $$dirty >> 27 | 112 & $$dirty1 << 3 | 896 & $$dirty1 << 3 | 7168 & $$dirty1 << 3 | 57344 & $$dirty2 << 9 | 458752 & $$dirty2 << 9, 196608);
        var tmp_16;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_16 = Unit_instance;
        }
        tmp_0 = tmp_16;
      } else {
        $composer_0.h1z();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o38(p0, p1, p2);
    };
  }
  function TextField$composable$lambda($modifier, $colors, $isError, $$dirty1, $$dirty2, $value, $onValueChange, $enabled, $readOnly, $mergedTextStyle, $keyboardOptions, $keyboardActions, $singleLine, $maxLines, $minLines, $visualTransformation, $interactionSource, $$dirty, $label, $placeholder, $leadingIcon, $trailingIcon, $prefix, $suffix, $supportingText, $shape) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C208@10657L20,197@10219L1726:TextField.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1859145987, $changed, -1, 'androidx.compose.material3.TextField$composable.<anonymous> (TextField.kt:196)');
        }
        var tmp0_modifier = defaultMinSize($modifier._v, TextFieldDefaults_getInstance().efu_1, TextFieldDefaults_getInstance().dfu_1);
        var tmp1_cursorBrush = new SolidColor($colors._v.sg0($isError._v, $composer_0, 14 & $$dirty1 >> 9 | 112 & $$dirty2 >> 3).u2().p41_1);
        var tmp_0 = $enabled._v;
        var tmp_1 = $readOnly._v;
        var tmp_2 = $keyboardOptions._v;
        var tmp_3 = $keyboardActions._v;
        var tmp_4 = $singleLine._v;
        var tmp_5 = $maxLines._v;
        var tmp_6 = $minLines._v;
        var tmp_7 = $visualTransformation._v;
        var tmp_8 = $interactionSource._v;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.TextField$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_9, -288211827, true, TextField$composable$lambda$lambda($value, $enabled, $singleLine, $visualTransformation, $interactionSource, $isError, $label, $placeholder, $leadingIcon, $trailingIcon, $prefix, $suffix, $supportingText, $shape, $colors, $$dirty, $$dirty1, $$dirty2));
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
        var tmp_10;
        if (invalid ? true : it === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.TextField$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
          $composer_1.s1z(value);
          tmp_10 = value;
        } else {
          tmp_10 = it;
        }
        var tmp_11 = tmp_10;
        var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_1.h1x();
        BasicTextField$composable($value, $onValueChange, tmp0_modifier, tmp_0, tmp_1, $mergedTextStyle, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, null, tmp_8, tmp1_cursorBrush, tmp0, $composer_0, 14 & $$dirty | 112 & $$dirty | 7168 & $$dirty | 57344 & $$dirty | 3670016 & $$dirty1 << 3 | 29360128 & $$dirty1 << 3 | 234881024 & $$dirty1 << 3 | 1879048192 & $$dirty1 << 3, 196608 | 14 & $$dirty1 >> 27 | 112 & $$dirty1 >> 9 | 7168 & $$dirty2 << 9, 4096);
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
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function TextField$composable$lambda_0($value, $onValueChange, $modifier, $enabled, $readOnly, $textStyle, $label, $placeholder, $leadingIcon, $trailingIcon, $prefix, $suffix, $supportingText, $isError, $visualTransformation, $keyboardOptions, $keyboardActions, $singleLine, $maxLines, $minLines, $interactionSource, $shape, $colors, $$changed, $$changed1, $$changed2, $$default) {
    return function ($composer, $force) {
      TextField$composable($value, $onValueChange, $modifier._v, $enabled._v, $readOnly._v, $textStyle._v, $label._v, $placeholder._v, $leadingIcon._v, $trailingIcon._v, $prefix._v, $suffix._v, $supportingText._v, $isError._v, $visualTransformation._v, $keyboardOptions._v, $keyboardActions._v, $singleLine._v, $maxLines._v, $minLines._v, $interactionSource._v, $shape._v, $colors._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), updateChangedFlags($$changed2), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_TextField_kt_dspx0j;
  function _init_properties_TextField_kt__b1se5h() {
    if (!properties_initialized_TextField_kt_dspx0j) {
      properties_initialized_TextField_kt_dspx0j = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      TextFieldWithLabelVerticalPadding = _Dp___init__impl__ms3zkb(8);
    }
  }
  function leadingIconColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function trailingIconColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function indicatorColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function containerColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function placeholderColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function labelColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function textColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function supportingTextColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function prefixColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function suffixColor$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function TextFieldColors(focusedTextColor, unfocusedTextColor, disabledTextColor, errorTextColor, focusedContainerColor, unfocusedContainerColor, disabledContainerColor, errorContainerColor, cursorColor, errorCursorColor, textSelectionColors, focusedIndicatorColor, unfocusedIndicatorColor, disabledIndicatorColor, errorIndicatorColor, focusedLeadingIconColor, unfocusedLeadingIconColor, disabledLeadingIconColor, errorLeadingIconColor, focusedTrailingIconColor, unfocusedTrailingIconColor, disabledTrailingIconColor, errorTrailingIconColor, focusedLabelColor, unfocusedLabelColor, disabledLabelColor, errorLabelColor, focusedPlaceholderColor, unfocusedPlaceholderColor, disabledPlaceholderColor, errorPlaceholderColor, focusedSupportingTextColor, unfocusedSupportingTextColor, disabledSupportingTextColor, errorSupportingTextColor, focusedPrefixColor, unfocusedPrefixColor, disabledPrefixColor, errorPrefixColor, focusedSuffixColor, unfocusedSuffixColor, disabledSuffixColor, errorSuffixColor) {
    this.xfy_1 = focusedTextColor;
    this.yfy_1 = unfocusedTextColor;
    this.zfy_1 = disabledTextColor;
    this.afz_1 = errorTextColor;
    this.bfz_1 = focusedContainerColor;
    this.cfz_1 = unfocusedContainerColor;
    this.dfz_1 = disabledContainerColor;
    this.efz_1 = errorContainerColor;
    this.ffz_1 = cursorColor;
    this.gfz_1 = errorCursorColor;
    this.hfz_1 = textSelectionColors;
    this.ifz_1 = focusedIndicatorColor;
    this.jfz_1 = unfocusedIndicatorColor;
    this.kfz_1 = disabledIndicatorColor;
    this.lfz_1 = errorIndicatorColor;
    this.mfz_1 = focusedLeadingIconColor;
    this.nfz_1 = unfocusedLeadingIconColor;
    this.ofz_1 = disabledLeadingIconColor;
    this.pfz_1 = errorLeadingIconColor;
    this.qfz_1 = focusedTrailingIconColor;
    this.rfz_1 = unfocusedTrailingIconColor;
    this.sfz_1 = disabledTrailingIconColor;
    this.tfz_1 = errorTrailingIconColor;
    this.ufz_1 = focusedLabelColor;
    this.vfz_1 = unfocusedLabelColor;
    this.wfz_1 = disabledLabelColor;
    this.xfz_1 = errorLabelColor;
    this.yfz_1 = focusedPlaceholderColor;
    this.zfz_1 = unfocusedPlaceholderColor;
    this.ag0_1 = disabledPlaceholderColor;
    this.bg0_1 = errorPlaceholderColor;
    this.cg0_1 = focusedSupportingTextColor;
    this.dg0_1 = unfocusedSupportingTextColor;
    this.eg0_1 = disabledSupportingTextColor;
    this.fg0_1 = errorSupportingTextColor;
    this.gg0_1 = focusedPrefixColor;
    this.hg0_1 = unfocusedPrefixColor;
    this.ig0_1 = disabledPrefixColor;
    this.jg0_1 = errorPrefixColor;
    this.kg0_1 = focusedSuffixColor;
    this.lg0_1 = unfocusedSuffixColor;
    this.mg0_1 = disabledSuffixColor;
    this.ng0_1 = errorSuffixColor;
    this.og0_1 = 0;
  }
  protoOf(TextFieldColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof TextFieldColors);
    }
    if (tmp)
      return false;
    if (!equals(this.xfy_1, other.xfy_1))
      return false;
    if (!equals(this.yfy_1, other.yfy_1))
      return false;
    if (!equals(this.zfy_1, other.zfy_1))
      return false;
    if (!equals(this.afz_1, other.afz_1))
      return false;
    if (!equals(this.bfz_1, other.bfz_1))
      return false;
    if (!equals(this.cfz_1, other.cfz_1))
      return false;
    if (!equals(this.dfz_1, other.dfz_1))
      return false;
    if (!equals(this.efz_1, other.efz_1))
      return false;
    if (!equals(this.ffz_1, other.ffz_1))
      return false;
    if (!equals(this.gfz_1, other.gfz_1))
      return false;
    if (!this.hfz_1.equals(other.hfz_1))
      return false;
    if (!equals(this.ifz_1, other.ifz_1))
      return false;
    if (!equals(this.jfz_1, other.jfz_1))
      return false;
    if (!equals(this.kfz_1, other.kfz_1))
      return false;
    if (!equals(this.lfz_1, other.lfz_1))
      return false;
    if (!equals(this.mfz_1, other.mfz_1))
      return false;
    if (!equals(this.nfz_1, other.nfz_1))
      return false;
    if (!equals(this.ofz_1, other.ofz_1))
      return false;
    if (!equals(this.pfz_1, other.pfz_1))
      return false;
    if (!equals(this.qfz_1, other.qfz_1))
      return false;
    if (!equals(this.rfz_1, other.rfz_1))
      return false;
    if (!equals(this.sfz_1, other.sfz_1))
      return false;
    if (!equals(this.tfz_1, other.tfz_1))
      return false;
    if (!equals(this.ufz_1, other.ufz_1))
      return false;
    if (!equals(this.vfz_1, other.vfz_1))
      return false;
    if (!equals(this.wfz_1, other.wfz_1))
      return false;
    if (!equals(this.xfz_1, other.xfz_1))
      return false;
    if (!equals(this.yfz_1, other.yfz_1))
      return false;
    if (!equals(this.zfz_1, other.zfz_1))
      return false;
    if (!equals(this.ag0_1, other.ag0_1))
      return false;
    if (!equals(this.bg0_1, other.bg0_1))
      return false;
    if (!equals(this.cg0_1, other.cg0_1))
      return false;
    if (!equals(this.dg0_1, other.dg0_1))
      return false;
    if (!equals(this.eg0_1, other.eg0_1))
      return false;
    if (!equals(this.fg0_1, other.fg0_1))
      return false;
    if (!equals(this.gg0_1, other.gg0_1))
      return false;
    if (!equals(this.hg0_1, other.hg0_1))
      return false;
    if (!equals(this.ig0_1, other.ig0_1))
      return false;
    if (!equals(this.jg0_1, other.jg0_1))
      return false;
    if (!equals(this.kg0_1, other.kg0_1))
      return false;
    if (!equals(this.lg0_1, other.lg0_1))
      return false;
    if (!equals(this.mg0_1, other.mg0_1))
      return false;
    if (!equals(this.ng0_1, other.ng0_1))
      return false;
    return true;
  };
  protoOf(TextFieldColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.xfy_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.yfy_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.zfy_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.afz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.bfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.cfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.dfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.efz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ffz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.gfz_1) | 0;
    result = imul(31, result) + this.hfz_1.hashCode() | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ifz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.jfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.kfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.lfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.mfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.nfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ofz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.pfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.qfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.rfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.sfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.tfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ufz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.vfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.wfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.xfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.yfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.zfz_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ag0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.bg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.cg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.dg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.eg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.fg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.gg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.hg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ig0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.jg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.kg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.lg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.mg0_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ng0_1) | 0;
    return result;
  };
  protoOf(TextFieldColors).tg0 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1928926212);
    sourceInformation($composer_0, 'C(leadingIconColor$composable)P(!1,2)1753@97489L25,1755@97531L267:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1928926212, $changed, -1, 'androidx.compose.material3.TextFieldColors.leadingIconColor$composable (TextFieldDefaults.kt:1748)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var tmp0 = rememberUpdatedState$composable(new Color(!enabled ? this.ofz_1 : isError ? this.pfz_1 : leadingIconColor$composable$lambda(focused$delegate) ? this.mfz_1 : this.nfz_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).ug0 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1677136250);
    sourceInformation($composer_0, 'C(trailingIconColor$composable)P(!1,2)1779@98384L25,1781@98426L271:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1677136250, $changed, -1, 'androidx.compose.material3.TextFieldColors.trailingIconColor$composable (TextFieldDefaults.kt:1774)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var tmp0 = rememberUpdatedState$composable(new Color(!enabled ? this.sfz_1 : isError ? this.tfz_1 : trailingIconColor$composable$lambda(focused$delegate) ? this.qfz_1 : this.rfz_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).vg0 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-738828908);
    sourceInformation($composer_0, 'C(indicatorColor$composable)P(!1,2)1805@99283L25:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-738828908, $changed, -1, 'androidx.compose.material3.TextFieldColors.indicatorColor$composable (TextFieldDefaults.kt:1800)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var targetValue = !enabled ? this.kfz_1 : isError ? this.lfz_1 : indicatorColor$composable$lambda(focused$delegate) ? this.ifz_1 : this.jfz_1;
    var tmp;
    if (enabled) {
      $composer_0.f1x(2080447103);
      sourceInformation($composer_0, '1814@99574L75');
      var tmp_0 = tween(get_AnimationDuration());
      var tmp1_group = animateColorAsState$composable(targetValue, tmp_0, null, null, $composer_0, 48, 12);
      $composer_0.h1x();
      tmp = tmp1_group;
    } else {
      $composer_0.f1x(2080447208);
      sourceInformation($composer_0, '1816@99679L33');
      var tmp2_group = rememberUpdatedState$composable(new Color(targetValue), $composer_0, 0);
      $composer_0.h1x();
      tmp = tmp2_group;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).wg0 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-2029214238);
    sourceInformation($composer_0, 'C(containerColor$composable)P(!1,2)1834@100289L25,1842@100553L75:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-2029214238, $changed, -1, 'androidx.compose.material3.TextFieldColors.containerColor$composable (TextFieldDefaults.kt:1829)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var targetValue = !enabled ? this.dfz_1 : isError ? this.efz_1 : containerColor$composable$lambda(focused$delegate) ? this.bfz_1 : this.cfz_1;
    var tmp = tween(get_AnimationDuration());
    var tmp0 = animateColorAsState$composable(targetValue, tmp, null, null, $composer_0, 48, 12);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).xg0 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1466696016);
    sourceInformation($composer_0, 'C(placeholderColor$composable)P(!1,2)1859@101211L25,1867@101483L33:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1466696016, $changed, -1, 'androidx.compose.material3.TextFieldColors.placeholderColor$composable (TextFieldDefaults.kt:1854)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var targetValue = !enabled ? this.ag0_1 : isError ? this.bg0_1 : placeholderColor$composable$lambda(focused$delegate) ? this.yfz_1 : this.zfz_1;
    var tmp0 = rememberUpdatedState$composable(new Color(targetValue), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).yg0 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-941303153);
    sourceInformation($composer_0, 'C(labelColor$composable)P(!1,2)1884@102087L25,1892@102335L33:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-941303153, $changed, -1, 'androidx.compose.material3.TextFieldColors.labelColor$composable (TextFieldDefaults.kt:1879)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var targetValue = !enabled ? this.wfz_1 : isError ? this.xfz_1 : labelColor$composable$lambda(focused$delegate) ? this.ufz_1 : this.vfz_1;
    var tmp0 = rememberUpdatedState$composable(new Color(targetValue), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).pg0 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(389936398);
    sourceInformation($composer_0, 'C(textColor$composable)P(!1,2)1909@102944L25,1917@103188L33:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(389936398, $changed, -1, 'androidx.compose.material3.TextFieldColors.textColor$composable (TextFieldDefaults.kt:1904)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var targetValue = !enabled ? this.zfy_1 : isError ? this.afz_1 : textColor$composable$lambda(focused$delegate) ? this.xfy_1 : this.yfy_1;
    var tmp0 = rememberUpdatedState$composable(new Color(targetValue), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).zg0 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-735962405);
    sourceInformation($composer_0, 'C(supportingTextColor$composable)P(!1,2)1926@103443L25,1928@103485L279:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-735962405, $changed, -1, 'androidx.compose.material3.TextFieldColors.supportingTextColor$composable (TextFieldDefaults.kt:1921)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var tmp0 = rememberUpdatedState$composable(new Color(!enabled ? this.eg0_1 : isError ? this.fg0_1 : supportingTextColor$composable$lambda(focused$delegate) ? this.cg0_1 : this.dg0_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).ag1 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1750245513);
    sourceInformation($composer_0, 'C(prefixColor$composable)P(!1,2)1952@104337L25,1960@104589L33:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1750245513, $changed, -1, 'androidx.compose.material3.TextFieldColors.prefixColor$composable (TextFieldDefaults.kt:1947)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var targetValue = !enabled ? this.ig0_1 : isError ? this.jg0_1 : prefixColor$composable$lambda(focused$delegate) ? this.gg0_1 : this.hg0_1;
    var tmp0 = rememberUpdatedState$composable(new Color(targetValue), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).bg1 = function (enabled, isError, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1087718038);
    sourceInformation($composer_0, 'C(suffixColor$composable)P(!1,2)1977@105195L25,1985@105447L33:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1087718038, $changed, -1, 'androidx.compose.material3.TextFieldColors.suffixColor$composable (TextFieldDefaults.kt:1972)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var targetValue = !enabled ? this.mg0_1 : isError ? this.ng0_1 : suffixColor$composable$lambda(focused$delegate) ? this.kg0_1 : this.lg0_1;
    var tmp0 = rememberUpdatedState$composable(new Color(targetValue), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).sg0 = function (isError, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(859567483);
    sourceInformation($composer_0, 'C(cursorColor$composable)1995@105746L68:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(859567483, $changed, -1, 'androidx.compose.material3.TextFieldColors.cursorColor$composable (TextFieldDefaults.kt:1994)');
    }
    var tmp0 = rememberUpdatedState$composable(new Color(isError ? this.gfz_1 : this.ffz_1), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldColors).qg0 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1287193133);
    sourceInformation($composer_0, 'C($get-selectionColors$$composable):TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1287193133, $changed, -1, 'androidx.compose.material3.TextFieldColors.$get-selectionColors$$composable (TextFieldDefaults.kt:2002)');
    }
    var tmp0 = this.hfz_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  function TextFieldDefaults$indicatorLine$lambda($enabled, $isError, $interactionSource, $colors, $focusedIndicatorLineThickness, $unfocusedIndicatorLineThickness) {
    return function ($this$null) {
      $this$null.j5r_1 = 'indicatorLine';
      $this$null.l5r_1.p5r('enabled', $enabled);
      $this$null.l5r_1.p5r('isError', $isError);
      $this$null.l5r_1.p5r('interactionSource', $interactionSource);
      $this$null.l5r_1.p5r('colors', $colors);
      $this$null.l5r_1.p5r('focusedIndicatorLineThickness', new Dp($focusedIndicatorLineThickness));
      $this$null.l5r_1.p5r('unfocusedIndicatorLineThickness', new Dp($unfocusedIndicatorLineThickness));
      return Unit_instance;
    };
  }
  function TextFieldDefaults$indicatorLine$lambda_0($enabled, $isError, $interactionSource, $colors, $focusedIndicatorLineThickness, $unfocusedIndicatorLineThickness) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.f1x(-891038934);
      sourceInformation($composer_0, 'C140@6028L217:TextFieldDefaults.kt#uh7d8r');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-891038934, $changed, -1, 'androidx.compose.material3.TextFieldDefaults.indicatorLine.<anonymous> (TextFieldDefaults.kt:139)');
        tmp = Unit_instance;
      }
      var stroke = animateBorderStrokeAsState$composable($enabled, $isError, $interactionSource, $colors, $focusedIndicatorLineThickness, $unfocusedIndicatorLineThickness, $composer_0, 0);
      var tmp0 = drawIndicatorLine(Companion_instance, stroke.u2());
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.h1x();
      return tmp0;
    };
  }
  function TextFieldDefaults$ContainerBox$composable$lambda($tmp0_rcvr, $enabled, $isError, $interactionSource, $colors, $shape, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.cg1($enabled, $isError, $interactionSource, $colors, $shape._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function TextFieldDefaults$DecorationBox$composable$lambda($enabled, $isError, $interactionSource, $colors, $shape, $$dirty, $$dirty1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C434@24948L64:TextFieldDefaults.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-435523791, $changed, -1, 'androidx.compose.material3.TextFieldDefaults.DecorationBox$composable.<anonymous> (TextFieldDefaults.kt:433)');
        }
        TextFieldDefaults_getInstance().cg1($enabled, $isError._v, $interactionSource, $colors._v, $shape._v, $composer_0, 196608 | 14 & $$dirty >> 6 | 112 & $$dirty >> 15 | 896 & $$dirty >> 9 | 7168 & $$dirty1 >> 6 | 57344 & $$dirty1, 0);
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
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function TextFieldDefaults$DecorationBox$composable$lambda_0($tmp0_rcvr, $value, $innerTextField, $enabled, $singleLine, $visualTransformation, $interactionSource, $isError, $label, $placeholder, $leadingIcon, $trailingIcon, $prefix, $suffix, $supportingText, $shape, $colors, $contentPadding, $container, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.rg0($value, $innerTextField, $enabled, $singleLine, $visualTransformation, $interactionSource, $isError._v, $label._v, $placeholder._v, $leadingIcon._v, $trailingIcon._v, $prefix._v, $suffix._v, $supportingText._v, $shape._v, $colors._v, $contentPadding._v, $container._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function TextFieldDefaults() {
    TextFieldDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.dfu_1 = _Dp___init__impl__ms3zkb(56);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.efu_1 = _Dp___init__impl__ms3zkb(280);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.ffu_1 = _Dp___init__impl__ms3zkb(1);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.gfu_1 = _Dp___init__impl__ms3zkb(2);
    this.hfu_1 = this.ffu_1;
    this.ifu_1 = this.gfu_1;
    this.jfu_1 = 0;
  }
  protoOf(TextFieldDefaults).dg1 = function (_this__u8e3s4, enabled, isError, interactionSource, colors, focusedIndicatorLineThickness, unfocusedIndicatorLineThickness) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = TextFieldDefaults$indicatorLine$lambda(enabled, isError, interactionSource, colors, focusedIndicatorLineThickness, unfocusedIndicatorLineThickness);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed$composable(_this__u8e3s4, tmp_0, TextFieldDefaults$indicatorLine$lambda_0(enabled, isError, interactionSource, colors, focusedIndicatorLineThickness, unfocusedIndicatorLineThickness));
  };
  protoOf(TextFieldDefaults).eg1 = function (_this__u8e3s4, enabled, isError, interactionSource, colors, focusedIndicatorLineThickness, unfocusedIndicatorLineThickness, $super) {
    focusedIndicatorLineThickness = focusedIndicatorLineThickness === VOID ? this.gfu_1 : focusedIndicatorLineThickness;
    unfocusedIndicatorLineThickness = unfocusedIndicatorLineThickness === VOID ? this.ffu_1 : unfocusedIndicatorLineThickness;
    return $super === VOID ? this.dg1(_this__u8e3s4, enabled, isError, interactionSource, colors, focusedIndicatorLineThickness, unfocusedIndicatorLineThickness) : $super.dg1.call(this, _this__u8e3s4, enabled, isError, interactionSource, colors, new Dp(focusedIndicatorLineThickness), new Dp(unfocusedIndicatorLineThickness));
  };
  protoOf(TextFieldDefaults).fg1 = function (start, end, top, bottom) {
    return PaddingValues(start, top, end, bottom);
  };
  protoOf(TextFieldDefaults).gg1 = function (start, end, top, bottom, $super) {
    start = start === VOID ? get_TextFieldPadding() : start;
    end = end === VOID ? get_TextFieldPadding() : end;
    top = top === VOID ? get_TextFieldWithLabelVerticalPadding() : top;
    bottom = bottom === VOID ? get_TextFieldWithLabelVerticalPadding() : bottom;
    return $super === VOID ? this.fg1(start, end, top, bottom) : $super.fg1.call(this, new Dp(start), new Dp(end), new Dp(top), new Dp(bottom));
  };
  protoOf(TextFieldDefaults).hg1 = function (start, top, end, bottom) {
    return PaddingValues(start, top, end, bottom);
  };
  protoOf(TextFieldDefaults).ig1 = function (start, top, end, bottom, $super) {
    start = start === VOID ? get_TextFieldPadding() : start;
    top = top === VOID ? get_TextFieldPadding() : top;
    end = end === VOID ? get_TextFieldPadding() : end;
    bottom = bottom === VOID ? get_TextFieldPadding() : bottom;
    return $super === VOID ? this.hg1(start, top, end, bottom) : $super.hg1.call(this, new Dp(start), new Dp(top), new Dp(end), new Dp(bottom));
  };
  protoOf(TextFieldDefaults).jg1 = function (start, top, end, bottom) {
    return PaddingValues(start, top, end, bottom);
  };
  protoOf(TextFieldDefaults).kfu = function (start, top, end, bottom, $super) {
    start = start === VOID ? get_TextFieldPadding() : start;
    top = top === VOID ? get_SupportingTopPadding() : top;
    end = end === VOID ? get_TextFieldPadding() : end;
    var tmp;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = bottom;
    }
    bottom = tmp;
    return $super === VOID ? this.jg1(start, top, end, bottom) : $super.jg1.call(this, new Dp(start), new Dp(top), new Dp(end), new Dp(bottom));
  };
  protoOf(TextFieldDefaults).nfc = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(958150564);
    sourceInformation($composer_0, 'C($get-shape$$composable)57@2544L9:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(958150564, $changed, -1, 'androidx.compose.material3.TextFieldDefaults.$get-shape$$composable (TextFieldDefaults.kt:57)');
    }
    var tmp0 = toShape$composable(FilledTextFieldTokens_getInstance().pg1_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(TextFieldDefaults).cg1 = function (enabled, isError, interactionSource, colors, shape, $composer, $changed, $default) {
    var shape_0 = {_v: shape};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1275373963);
    sourceInformation($composer_0, 'C(ContainerBox$composable)P(1,3,2)100@4155L5,104@4239L51,102@4178L203:TextFieldDefaults.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.u1z(enabled) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.u1z(isError) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.t1z(interactionSource) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.t1z(colors) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ((($default & 16) === 0 ? $composer_0.t1z(shape_0._v) : false) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 16) === 0)) {
          shape_0._v = TextFieldDefaults_getInstance().nfc($composer_0, 6);
          $dirty = $dirty & -57345;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(1275373963, $dirty, -1, 'androidx.compose.material3.TextFieldDefaults.ContainerBox$composable (TextFieldDefaults.kt:95)');
      }
      Box$composable(this.eg1(background(Companion_instance, colors.wg0(enabled, isError, interactionSource, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty | 7168 & $dirty).u2().p41_1, shape_0._v), enabled, isError, interactionSource, colors), $composer_0, 0);
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
      tmp1_safe_receiver.w2e(TextFieldDefaults$ContainerBox$composable$lambda(this, enabled, isError, interactionSource, colors, shape_0, $changed, $default));
    }
  };
  protoOf(TextFieldDefaults).wfy = function (focusedTextColor, unfocusedTextColor, disabledTextColor, errorTextColor, focusedContainerColor, unfocusedContainerColor, disabledContainerColor, errorContainerColor, cursorColor, errorCursorColor, selectionColors, focusedIndicatorColor, unfocusedIndicatorColor, disabledIndicatorColor, errorIndicatorColor, focusedLeadingIconColor, unfocusedLeadingIconColor, disabledLeadingIconColor, errorLeadingIconColor, focusedTrailingIconColor, unfocusedTrailingIconColor, disabledTrailingIconColor, errorTrailingIconColor, focusedLabelColor, unfocusedLabelColor, disabledLabelColor, errorLabelColor, focusedPlaceholderColor, unfocusedPlaceholderColor, disabledPlaceholderColor, errorPlaceholderColor, focusedSupportingTextColor, unfocusedSupportingTextColor, disabledSupportingTextColor, errorSupportingTextColor, focusedPrefixColor, unfocusedPrefixColor, disabledPrefixColor, errorPrefixColor, focusedSuffixColor, unfocusedSuffixColor, disabledSuffixColor, errorSuffixColor, $composer, $changed, $changed1, $changed2, $changed3, $changed4, $default, $default1) {
    var focusedTextColor_0 = focusedTextColor;
    var unfocusedTextColor_0 = unfocusedTextColor;
    var disabledTextColor_0 = disabledTextColor;
    var errorTextColor_0 = errorTextColor;
    var focusedContainerColor_0 = focusedContainerColor;
    var unfocusedContainerColor_0 = unfocusedContainerColor;
    var disabledContainerColor_0 = disabledContainerColor;
    var errorContainerColor_0 = errorContainerColor;
    var cursorColor_0 = cursorColor;
    var errorCursorColor_0 = errorCursorColor;
    var selectionColors_0 = selectionColors;
    var focusedIndicatorColor_0 = focusedIndicatorColor;
    var unfocusedIndicatorColor_0 = unfocusedIndicatorColor;
    var disabledIndicatorColor_0 = disabledIndicatorColor;
    var errorIndicatorColor_0 = errorIndicatorColor;
    var focusedLeadingIconColor_0 = focusedLeadingIconColor;
    var unfocusedLeadingIconColor_0 = unfocusedLeadingIconColor;
    var disabledLeadingIconColor_0 = disabledLeadingIconColor;
    var errorLeadingIconColor_0 = errorLeadingIconColor;
    var focusedTrailingIconColor_0 = focusedTrailingIconColor;
    var unfocusedTrailingIconColor_0 = unfocusedTrailingIconColor;
    var disabledTrailingIconColor_0 = disabledTrailingIconColor;
    var errorTrailingIconColor_0 = errorTrailingIconColor;
    var focusedLabelColor_0 = focusedLabelColor;
    var unfocusedLabelColor_0 = unfocusedLabelColor;
    var disabledLabelColor_0 = disabledLabelColor;
    var errorLabelColor_0 = errorLabelColor;
    var focusedPlaceholderColor_0 = focusedPlaceholderColor;
    var unfocusedPlaceholderColor_0 = unfocusedPlaceholderColor;
    var disabledPlaceholderColor_0 = disabledPlaceholderColor;
    var errorPlaceholderColor_0 = errorPlaceholderColor;
    var focusedSupportingTextColor_0 = focusedSupportingTextColor;
    var unfocusedSupportingTextColor_0 = unfocusedSupportingTextColor;
    var disabledSupportingTextColor_0 = disabledSupportingTextColor;
    var errorSupportingTextColor_0 = errorSupportingTextColor;
    var focusedPrefixColor_0 = focusedPrefixColor;
    var unfocusedPrefixColor_0 = unfocusedPrefixColor;
    var disabledPrefixColor_0 = disabledPrefixColor;
    var errorPrefixColor_0 = errorPrefixColor;
    var focusedSuffixColor_0 = focusedSuffixColor;
    var unfocusedSuffixColor_0 = unfocusedSuffixColor;
    var disabledSuffixColor_0 = disabledSuffixColor;
    var errorSuffixColor_0 = errorSuffixColor;
    var $composer_0 = $composer;
    $composer_0.f1x(-1100815008);
    sourceInformation($composer_0, 'C(colors$composable)P(30:c#ui.graphics.Color,41:c#ui.graphics.Color,9:c#ui.graphics.Color,20:c#ui.graphics.Color,22:c#ui.graphics.Color,33:c#ui.graphics.Color,1:c#ui.graphics.Color,11:c#ui.graphics.Color,0:c#ui.graphics.Color,12:c#ui.graphics.Color,32,23:c#ui.graphics.Color,34:c#ui.graphics.Color,2:c#ui.graphics.Color,13:c#ui.graphics.Color,25:c#ui.graphics.Color,36:c#ui.graphics.Color,4:c#ui.graphics.Color,15:c#ui.graphics.Color,31:c#ui.graphics.Color,42:c#ui.graphics.Color,10:c#ui.graphics.Color,21:c#ui.graphics.Color,24:c#ui.graphics.Color,35:c#ui.graphics.Color,3:c#ui.graphics.Color,14:c#ui.graphics.Color,26:c#ui.graphics.Color,37:c#ui.graphics.Color,5:c#ui.graphics.Color,16:c#ui.graphics.Color,29:c#ui.graphics.Color,40:c#ui.graphics.Color,8:c#ui.graphics.Color,19:c#ui.graphics.Color,27:c#ui.graphics.Color,38:c#ui.graphics.Color,6:c#ui.graphics.Color,17:c#ui.graphics.Color,28:c#ui.graphics.Color,39:c#ui.graphics.Color,7:c#ui.graphics.Color,18:c#ui.graphics.Color)247@12192L9,248@12272L9,249@12359L9,251@12510L9,252@12597L9,253@12686L9,254@12774L9,255@12859L9,256@12932L9,257@13020L9,258@13103L7,259@13199L9,260@13294L9,261@13396L9,263@13572L9,264@13668L9,265@13761L9,266@13861L9,268@14031L9,269@14129L9,270@14224L9,271@14326L9,273@14499L9,274@14583L9,275@14664L9,276@14752L9,278@14904L9,279@15000L9,280@15098L9,281@15192L9,283@15356L9,284@15454L9,285@15549L9,286@15651L9,288@15822L9,289@15908L9,290@15996L9,291@16083L9,293@16237L9,294@16323L9,295@16411L9,296@16498L9,298@16652L9:TextFieldDefaults.kt#uh7d8r');
    if (!(($default & 1) === 0))
      focusedTextColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().ag3_1, $composer_0, 6);
    if (!(($default & 2) === 0))
      unfocusedTextColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().mg3_1, $composer_0, 6);
    if (!(($default & 4) === 0)) {
      var tmp = toColor$composable(FilledTextFieldTokens_getInstance().vg1_1, $composer_0, 6);
      FilledTextFieldTokens_getInstance();
      disabledTextColor_0 = Color__copy$default_impl_ectz3s(tmp, 0.38);
    }
    if (!(($default & 8) === 0))
      errorTextColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().tg2_1, $composer_0, 6);
    if (!(($default & 16) === 0))
      focusedContainerColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().ng1_1, $composer_0, 6);
    if (!(($default & 32) === 0))
      unfocusedContainerColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().ng1_1, $composer_0, 6);
    if (!(($default & 64) === 0))
      disabledContainerColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().ng1_1, $composer_0, 6);
    if (!(($default & 128) === 0))
      errorContainerColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().ng1_1, $composer_0, 6);
    if (!(($default & 256) === 0))
      cursorColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().mg1_1, $composer_0, 6);
    if (!(($default & 512) === 0))
      errorCursorColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().hg2_1, $composer_0, 6);
    if (!(($default & 1024) === 0)) {
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalTextSelectionColors();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.b20(this_0);
      sourceInformationMarkerEnd($composer_1);
      selectionColors_0 = tmp0;
    }
    if (!(($default & 2048) === 0))
      focusedIndicatorColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().yg2_1, $composer_0, 6);
    if (!(($default & 4096) === 0))
      unfocusedIndicatorColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().kg1_1, $composer_0, 6);
    if (!(($default & 8192) === 0)) {
      var tmp_0 = toColor$composable(FilledTextFieldTokens_getInstance().qg1_1, $composer_0, 6);
      FilledTextFieldTokens_getInstance();
      disabledIndicatorColor_0 = Color__copy$default_impl_ectz3s(tmp_0, 0.38);
    }
    if (!(($default & 16384) === 0))
      errorIndicatorColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().fg2_1, $composer_0, 6);
    if (!(($default & 32768) === 0))
      focusedLeadingIconColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().cg3_1, $composer_0, 6);
    if (!(($default & 65536) === 0))
      unfocusedLeadingIconColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().tg3_1, $composer_0, 6);
    if (!(($default & 131072) === 0)) {
      var tmp_1 = toColor$composable(FilledTextFieldTokens_getInstance().zg1_1, $composer_0, 6);
      FilledTextFieldTokens_getInstance();
      disabledLeadingIconColor_0 = Color__copy$default_impl_ectz3s(tmp_1, 0.38);
    }
    if (!(($default & 262144) === 0))
      errorLeadingIconColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().vg2_1, $composer_0, 6);
    if (!(($default & 524288) === 0))
      focusedTrailingIconColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().eg3_1, $composer_0, 6);
    if (!(($default & 1048576) === 0))
      unfocusedTrailingIconColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().xg3_1, $composer_0, 6);
    if (!(($default & 2097152) === 0)) {
      var tmp_2 = toColor$composable(FilledTextFieldTokens_getInstance().dg2_1, $composer_0, 6);
      FilledTextFieldTokens_getInstance();
      disabledTrailingIconColor_0 = Color__copy$default_impl_ectz3s(tmp_2, 0.38);
    }
    if (!(($default & 4194304) === 0))
      errorTrailingIconColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().xg2_1, $composer_0, 6);
    if (!(($default & 8388608) === 0))
      focusedLabelColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().bg3_1, $composer_0, 6);
    if (!(($default & 16777216) === 0))
      unfocusedLabelColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().rg3_1, $composer_0, 6);
    if (!(($default & 33554432) === 0)) {
      var tmp_3 = toColor$composable(FilledTextFieldTokens_getInstance().xg1_1, $composer_0, 6);
      FilledTextFieldTokens_getInstance();
      disabledLabelColor_0 = Color__copy$default_impl_ectz3s(tmp_3, 0.38);
    }
    if (!(($default & 67108864) === 0))
      errorLabelColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().ug2_1, $composer_0, 6);
    if (!(($default & 134217728) === 0))
      focusedPlaceholderColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().og3_1, $composer_0, 6);
    if (!(($default & 268435456) === 0))
      unfocusedPlaceholderColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().og3_1, $composer_0, 6);
    if (!(($default & 536870912) === 0)) {
      var tmp_4 = toColor$composable(FilledTextFieldTokens_getInstance().vg1_1, $composer_0, 6);
      FilledTextFieldTokens_getInstance();
      disabledPlaceholderColor_0 = Color__copy$default_impl_ectz3s(tmp_4, 0.38);
    }
    if (!(($default & 1073741824) === 0))
      errorPlaceholderColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().og3_1, $composer_0, 6);
    if (!(($default1 & 1) === 0))
      focusedSupportingTextColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().dg3_1, $composer_0, 6);
    if (!(($default1 & 2) === 0))
      unfocusedSupportingTextColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().vg3_1, $composer_0, 6);
    if (!(($default1 & 4) === 0)) {
      var tmp_5 = toColor$composable(FilledTextFieldTokens_getInstance().bg2_1, $composer_0, 6);
      FilledTextFieldTokens_getInstance();
      disabledSupportingTextColor_0 = Color__copy$default_impl_ectz3s(tmp_5, 0.38);
    }
    if (!(($default1 & 8) === 0))
      errorSupportingTextColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().wg2_1, $composer_0, 6);
    if (!(($default1 & 16) === 0))
      focusedPrefixColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().pg3_1, $composer_0, 6);
    if (!(($default1 & 32) === 0))
      unfocusedPrefixColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().pg3_1, $composer_0, 6);
    if (!(($default1 & 64) === 0)) {
      var tmp_6 = toColor$composable(FilledTextFieldTokens_getInstance().pg3_1, $composer_0, 6);
      FilledTextFieldTokens_getInstance();
      disabledPrefixColor_0 = Color__copy$default_impl_ectz3s(tmp_6, 0.38);
    }
    if (!(($default1 & 128) === 0))
      errorPrefixColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().pg3_1, $composer_0, 6);
    if (!(($default1 & 256) === 0))
      focusedSuffixColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().qg3_1, $composer_0, 6);
    if (!(($default1 & 512) === 0))
      unfocusedSuffixColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().qg3_1, $composer_0, 6);
    if (!(($default1 & 1024) === 0)) {
      var tmp_7 = toColor$composable(FilledTextFieldTokens_getInstance().qg3_1, $composer_0, 6);
      FilledTextFieldTokens_getInstance();
      disabledSuffixColor_0 = Color__copy$default_impl_ectz3s(tmp_7, 0.38);
    }
    if (!(($default1 & 2048) === 0))
      errorSuffixColor_0 = toColor$composable(FilledTextFieldTokens_getInstance().qg3_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventStart(-1100815008, $changed, $changed1, 'androidx.compose.material3.TextFieldDefaults.colors$composable (TextFieldDefaults.kt:246)');
    }
    var tmp0_0 = new TextFieldColors(focusedTextColor_0, unfocusedTextColor_0, disabledTextColor_0, errorTextColor_0, focusedContainerColor_0, unfocusedContainerColor_0, disabledContainerColor_0, errorContainerColor_0, cursorColor_0, errorCursorColor_0, selectionColors_0, focusedIndicatorColor_0, unfocusedIndicatorColor_0, disabledIndicatorColor_0, errorIndicatorColor_0, focusedLeadingIconColor_0, unfocusedLeadingIconColor_0, disabledLeadingIconColor_0, errorLeadingIconColor_0, focusedTrailingIconColor_0, unfocusedTrailingIconColor_0, disabledTrailingIconColor_0, errorTrailingIconColor_0, focusedLabelColor_0, unfocusedLabelColor_0, disabledLabelColor_0, errorLabelColor_0, focusedPlaceholderColor_0, unfocusedPlaceholderColor_0, disabledPlaceholderColor_0, errorPlaceholderColor_0, focusedSupportingTextColor_0, unfocusedSupportingTextColor_0, disabledSupportingTextColor_0, errorSupportingTextColor_0, focusedPrefixColor_0, unfocusedPrefixColor_0, disabledPrefixColor_0, errorPrefixColor_0, focusedSuffixColor_0, unfocusedSuffixColor_0, disabledSuffixColor_0, errorSuffixColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  };
  protoOf(TextFieldDefaults).rg0 = function (value, innerTextField, enabled, singleLine, visualTransformation, interactionSource, isError, label, placeholder, leadingIcon, trailingIcon, prefix, suffix, supportingText, shape, colors, contentPadding, container, $composer, $changed, $changed1, $default) {
    var isError_0 = {_v: isError};
    var label_0 = {_v: label};
    var placeholder_0 = {_v: placeholder};
    var leadingIcon_0 = {_v: leadingIcon};
    var trailingIcon_0 = {_v: trailingIcon};
    var prefix_0 = {_v: prefix};
    var suffix_0 = {_v: suffix};
    var supportingText_0 = {_v: supportingText};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var contentPadding_0 = {_v: contentPadding};
    var container_0 = {_v: container};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1621472693);
    sourceInformation($composer_0, 'C(DecorationBox$composable)P(16,4,3,12,17,5,6,7,9,8,15,10,13,14,11!1,2)425@24643L5,426@24684L8,437@25039L707:TextFieldDefaults.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(value) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(innerTextField) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.u1z(enabled) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.u1z(singleLine) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.t1z(visualTransformation) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.t1z(interactionSource) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.u1z(isError_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.y1z(label_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.y1z(placeholder_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.y1z(leadingIcon_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(trailingIcon_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(prefix_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(suffix_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(supportingText_0._v) ? 2048 : 1024);
    if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ((($default & 16384) === 0 ? $composer_0.t1z(shape_0._v) : false) ? 16384 : 8192);
    if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ((($default & 32768) === 0 ? $composer_0.t1z(colors_0._v) : false) ? 131072 : 65536);
    if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ((($default & 65536) === 0 ? $composer_0.t1z(contentPadding_0._v) : false) ? 1048576 : 524288);
    if (!(($default & 131072) === 0))
      $dirty1 = $dirty1 | 12582912;
    else if (($changed1 & 29360128) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(container_0._v) ? 8388608 : 4194304);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 23967451) === 4793490)) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 64) === 0)) {
          isError_0._v = false;
        }
        if (!(($default & 128) === 0)) {
          label_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          leadingIcon_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          trailingIcon_0._v = null;
        }
        if (!(($default & 2048) === 0)) {
          prefix_0._v = null;
        }
        if (!(($default & 4096) === 0)) {
          suffix_0._v = null;
        }
        if (!(($default & 8192) === 0)) {
          supportingText_0._v = null;
        }
        if (!(($default & 16384) === 0)) {
          shape_0._v = TextFieldDefaults_getInstance().nfc($composer_0, 6);
          $dirty1 = $dirty1 & -57345;
        }
        if (!(($default & 32768) === 0)) {
          var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_8 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_9 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_10 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_12 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_13 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_15 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_16 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_17 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_18 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_20 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_21 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_22 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_23 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_24 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_25 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_26 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_27 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_28 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_29 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_30 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_31 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_32 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_33 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_34 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_35 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_36 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_37 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_38 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          var tmp_39 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
          colors_0._v = this.wfy(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, null, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, tmp_38, tmp_39, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 0, 0, 0, 0, 2147483647, 4095);
          $dirty1 = $dirty1 & -458753;
        }
        if (!(($default & 65536) === 0)) {
          var tmp_40;
          if (label_0._v == null) {
            tmp_40 = this.ig1();
          } else {
            tmp_40 = this.gg1();
          }
          contentPadding_0._v = tmp_40;
          $dirty1 = $dirty1 & -3670017;
        }
        if (!(($default & 131072) === 0)) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.TextFieldDefaults.DecorationBox$composable.<anonymous>' call
          var tmp_41 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_41, -435523791, true, TextFieldDefaults$DecorationBox$composable$lambda(enabled, isError_0, interactionSource, colors_0, shape_0, $dirty, $dirty1));
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
          var tmp_42;
          if (invalid ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.TextFieldDefaults.DecorationBox$composable.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_27(dispatchReceiver);
            $composer_1.s1z(value_0);
            tmp_42 = value_0;
          } else {
            tmp_42 = it;
          }
          var tmp_43 = tmp_42;
          var tmp0 = (tmp_43 == null ? true : !(tmp_43 == null)) ? tmp_43 : THROW_CCE();
          $composer_1.h1x();
          container_0._v = tmp0;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 16384) === 0))
          $dirty1 = $dirty1 & -57345;
        if (!(($default & 32768) === 0))
          $dirty1 = $dirty1 & -458753;
        if (!(($default & 65536) === 0))
          $dirty1 = $dirty1 & -3670017;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(1621472693, $dirty, $dirty1, 'androidx.compose.material3.TextFieldDefaults.DecorationBox$composable (TextFieldDefaults.kt:410)');
      }
      var tmp0_type = TextFieldType_Filled_getInstance();
      CommonDecorationBox$composable(tmp0_type, value, innerTextField, visualTransformation, label_0._v, placeholder_0._v, leadingIcon_0._v, trailingIcon_0._v, prefix_0._v, suffix_0._v, supportingText_0._v, singleLine, enabled, isError_0._v, interactionSource, contentPadding_0._v, colors_0._v, container_0._v, $composer_0, 6 | 112 & $dirty << 3 | 896 & $dirty << 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 9 | 458752 & $dirty >> 9 | 3670016 & $dirty >> 9 | 29360128 & $dirty1 << 21 | 234881024 & $dirty1 << 21 | 1879048192 & $dirty1 << 21, 14 & $dirty1 >> 9 | 112 & $dirty >> 6 | 896 & $dirty | 7168 & $dirty >> 9 | 57344 & $dirty >> 3 | 458752 & $dirty1 >> 3 | 3670016 & $dirty1 << 3 | 29360128 & $dirty1, 0);
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
      tmp1_safe_receiver.w2e(TextFieldDefaults$DecorationBox$composable$lambda_0(this, value, innerTextField, enabled, singleLine, visualTransformation, interactionSource, isError_0, label_0, placeholder_0, leadingIcon_0, trailingIcon_0, prefix_0, suffix_0, supportingText_0, shape_0, colors_0, contentPadding_0, container_0, $changed, $changed1, $default));
    }
  };
  var TextFieldDefaults_instance;
  function TextFieldDefaults_getInstance() {
    if (TextFieldDefaults_instance == null)
      new TextFieldDefaults();
    return TextFieldDefaults_instance;
  }
  function animateBorderStrokeAsState$composable(enabled, isError, interactionSource, colors, focusedBorderThickness, unfocusedBorderThickness, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1175954513);
    sourceInformation($composer_0, 'C(animateBorderStrokeAsState$composable)P(1,4,3!1,2:c#ui.unit.Dp,5:c#ui.unit.Dp)2112@112642L25,2113@112700L51,2120@113057L107:TextFieldDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1175954513, $changed, -1, 'androidx.compose.material3.animateBorderStrokeAsState$composable (TextFieldDefaults.kt:2104)');
    }
    var focused$delegate = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed >> 6);
    var indicatorColor = colors.vg0(enabled, isError, interactionSource, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed | 7168 & $changed);
    var targetThickness = animateBorderStrokeAsState$composable$lambda(focused$delegate) ? focusedBorderThickness : unfocusedBorderThickness;
    var tmp;
    if (enabled) {
      $composer_0.f1x(-1860194271);
      sourceInformation($composer_0, '2116@112895L76');
      var tmp_0 = tween(get_AnimationDuration());
      var tmp1_group = animateDpAsState$composable(targetThickness, tmp_0, null, null, $composer_0, 48, 12);
      $composer_0.h1x();
      tmp = tmp1_group;
    } else {
      $composer_0.f1x(-1860194173);
      sourceInformation($composer_0, '2118@112993L46');
      var tmp2_group = rememberUpdatedState$composable(new Dp(unfocusedBorderThickness), $composer_0, 14 & $changed >> 15);
      $composer_0.h1x();
      tmp = tmp2_group;
    }
    var animatedThickness = tmp;
    var tmp0 = rememberUpdatedState$composable(new BorderStroke(animatedThickness.u2().z3b_1, new SolidColor(indicatorColor.u2().p41_1)), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function animateBorderStrokeAsState$composable$lambda($focused$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focused', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $focused$delegate.u2();
  }
  function get_ZeroConstraints() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return ZeroConstraints;
  }
  var ZeroConstraints;
  function get_TextFieldPadding() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return TextFieldPadding;
  }
  var TextFieldPadding;
  function get_HorizontalIconPadding() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return HorizontalIconPadding;
  }
  var HorizontalIconPadding;
  function get_SupportingTopPadding() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return SupportingTopPadding;
  }
  var SupportingTopPadding;
  function get_PrefixSuffixTextPadding() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return PrefixSuffixTextPadding;
  }
  var PrefixSuffixTextPadding;
  function get_MinTextLineHeight() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return MinTextLineHeight;
  }
  var MinTextLineHeight;
  function get_MinFocusedLabelLineHeight() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return MinFocusedLabelLineHeight;
  }
  var MinFocusedLabelLineHeight;
  function get_MinSupportingTextLineHeight() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return MinSupportingTextLineHeight;
  }
  var MinSupportingTextLineHeight;
  function get_IconDefaultSizeModifier() {
    _init_properties_TextFieldImpl_kt__7vp9id();
    return IconDefaultSizeModifier;
  }
  var IconDefaultSizeModifier;
  function get_AnimationDuration() {
    return AnimationDuration;
  }
  var AnimationDuration;
  var TextFieldType_Filled_instance;
  var TextFieldType_Outlined_instance;
  var TextFieldType_entriesInitialized;
  function TextFieldType_initEntries() {
    if (TextFieldType_entriesInitialized)
      return Unit_instance;
    TextFieldType_entriesInitialized = true;
    TextFieldType_Filled_instance = new TextFieldType('Filled', 0);
    TextFieldType_Outlined_instance = new TextFieldType('Outlined', 1);
  }
  function TextFieldType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CommonDecorationBox$composable(type, value, innerTextField, visualTransformation, label, placeholder, leadingIcon, trailingIcon, prefix, suffix, supportingText, singleLine, enabled, isError, interactionSource, contentPadding, colors, container, $composer, $changed, $changed1, $default) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var placeholder_0 = {_v: placeholder};
    var leadingIcon_0 = {_v: leadingIcon};
    var trailingIcon_0 = {_v: trailingIcon};
    var prefix_0 = {_v: prefix};
    var suffix_0 = {_v: suffix};
    var supportingText_0 = {_v: supportingText};
    var singleLine_0 = {_v: singleLine};
    var enabled_0 = {_v: enabled};
    var isError_0 = {_v: isError};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(203596693);
    sourceInformation($composer_0, 'C(CommonDecorationBox$composable)P(15,16,4,17,7,9,8,14,10,12,13,11,3,6,5,2)81@3217L105,85@3372L25,96@3756L10,103@4099L7282:TextFieldImpl.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(value) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(innerTextField) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.t1z(visualTransformation) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.y1z(label) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1z(placeholder_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.y1z(leadingIcon_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.y1z(trailingIcon_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.y1z(prefix_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.y1z(suffix_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(supportingText_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1z(singleLine_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1z(enabled_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1z(isError_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1z(interactionSource) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1z(contentPadding) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ($composer_0.t1z(colors) ? 1048576 : 524288);
    if (!(($default & 131072) === 0))
      $dirty1 = $dirty1 | 12582912;
    else if (($changed1 & 29360128) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(container) ? 8388608 : 4194304);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 23967451) === 4793490)) ? true : !$composer_0.w1y()) {
      if (!(($default & 32) === 0)) {
        placeholder_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        leadingIcon_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        trailingIcon_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        prefix_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        suffix_0._v = null;
      }
      if (!(($default & 1024) === 0)) {
        supportingText_0._v = null;
      }
      if (!(($default & 2048) === 0)) {
        singleLine_0._v = false;
      }
      if (!(($default & 4096) === 0)) {
        enabled_0._v = true;
      }
      if (!(($default & 8192) === 0)) {
        isError_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(203596693, $dirty, $dirty1, 'androidx.compose.material3.CommonDecorationBox$composable (TextFieldImpl.kt:61)');
      }
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_1.t1z(value) | $composer_1.t1z(visualTransformation));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp;
      if (invalid ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>' call
        var value_0 = visualTransformation.s5b(AnnotatedString_init_$Create$(value));
        $composer_1.s1z(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.h1x();
      var transformedText = tmp0.u5b_1.y4o_1;
      var isFocused = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $dirty1 >> 12).u2();
      var tmp_1;
      if (isFocused) {
        tmp_1 = InputPhase_Focused_getInstance();
      } else {
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(transformedText) === 0) {
          tmp_1 = InputPhase_UnfocusedEmpty_getInstance();
        } else {
          tmp_1 = InputPhase_UnfocusedNotEmpty_getInstance();
        }
      }
      var inputState = tmp_1;
      var labelColor = CommonDecorationBox$composable$lambda(colors, enabled_0, isError_0, interactionSource, $dirty1);
      var typography = MaterialTheme_instance.hfh($composer_0, 6);
      var bodyLarge = typography.zfg_1;
      var bodySmall = typography.bfh_1;
      var shouldOverrideTextStyleColor = (equals(bodyLarge.m42(), Companion_getInstance_2().k42_1) ? !equals(bodySmall.m42(), Companion_getInstance_2().k42_1) : false) ? true : !equals(bodyLarge.m42(), Companion_getInstance_2().k42_1) ? equals(bodySmall.m42(), Companion_getInstance_2().k42_1) : false;
      var tmp_2 = TextFieldTransitionScope_instance;
      $composer_0.f1x(665025228);
      sourceInformation($composer_0, '*105@4195L10,106@4289L22');
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>' call
      var $this$with = MaterialTheme_instance.hfh($composer_0, 6).bfh_1.m42();
      var tmp_3;
      if (shouldOverrideTextStyleColor) {
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var tmp_4;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m($this$with), _Color___get_value__impl__1pls5m(Companion_getInstance_2().k42_1))) {
          tmp_4 = $this$with;
        } else {
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>' call
          tmp_4 = labelColor(inputState, $composer_0, 0).p41_1;
        }
        tmp_3 = tmp_4;
      } else {
        tmp_3 = $this$with;
      }
      var tmp0_group = tmp_3;
      $composer_0.h1x();
      $composer_0.f1x(665025421);
      sourceInformation($composer_0, '*108@4388L10,109@4482L22');
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>' call
      var $this$with_0 = MaterialTheme_instance.hfh($composer_0, 6).zfg_1.m42();
      var tmp_5;
      if (shouldOverrideTextStyleColor) {
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var tmp_6;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m($this$with_0), _Color___get_value__impl__1pls5m(Companion_getInstance_2().k42_1))) {
          tmp_6 = $this$with_0;
        } else {
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>' call
          tmp_6 = labelColor(inputState, $composer_0, 0).p41_1;
        }
        tmp_5 = tmp_6;
      } else {
        tmp_5 = $this$with_0;
      }
      var tmp1_group = tmp_5;
      $composer_0.h1x();
      var tmp_7 = !(label == null);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>' call
      var tmp_8 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_8, 1290853831, true, CommonDecorationBox$composable$lambda_0(label, placeholder_0, transformedText, colors, enabled_0, isError_0, interactionSource, $dirty1, prefix_0, suffix_0, leadingIcon_0, trailingIcon_0, supportingText_0, type, innerTextField, singleLine_0, contentPadding, $dirty, shouldOverrideTextStyleColor, bodyLarge, bodySmall, container));
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
      var tmp_9;
      if (invalid_0 ? true : it_0 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_37(dispatchReceiver);
        $composer_2.s1z(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_0;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_2.h1x();
      tmp_2.zg3(inputState, tmp0_group, tmp1_group, labelColor, tmp_7, tmp0_0, $composer_0, 1769472);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    var tmp2_safe_receiver = $composer_0.d1z();
    if (tmp2_safe_receiver === null)
      null;
    else {
      tmp2_safe_receiver.w2e(CommonDecorationBox$composable$lambda_1(type, value, innerTextField, visualTransformation, label, placeholder_0, leadingIcon_0, trailingIcon_0, prefix_0, suffix_0, supportingText_0, singleLine_0, enabled_0, isError_0, interactionSource, contentPadding, colors, container, $changed, $changed1, $default));
    }
  }
  var InputPhase_Focused_instance;
  var InputPhase_UnfocusedEmpty_instance;
  var InputPhase_UnfocusedNotEmpty_instance;
  var InputPhase_entriesInitialized;
  function InputPhase_initEntries() {
    if (InputPhase_entriesInitialized)
      return Unit_instance;
    InputPhase_entriesInitialized = true;
    InputPhase_Focused_instance = new InputPhase('Focused', 0);
    InputPhase_UnfocusedEmpty_instance = new InputPhase('UnfocusedEmpty', 1);
    InputPhase_UnfocusedNotEmpty_instance = new InputPhase('UnfocusedNotEmpty', 2);
  }
  function InputPhase(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Transition$composable$lambda($labelProgress$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('labelProgress', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $labelProgress$delegate.u2();
  }
  function Transition$composable$lambda_0($placeholderOpacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('placeholderOpacity', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $placeholderOpacity$delegate.u2();
  }
  function Transition$composable$lambda_1($prefixSuffixOpacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('prefixSuffixOpacity', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $prefixSuffixOpacity$delegate.u2();
  }
  function Transition$composable$lambda_2($labelTextStyleColor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('labelTextStyleColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $labelTextStyleColor$delegate.u2().p41_1;
  }
  function Transition$composable$lambda_3($labelContentColor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('labelContentColor', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $labelContentColor$delegate.u2().p41_1;
  }
  function TextFieldTransitionScope$Transition$composable$lambda($this$animateFloat, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-4765522);
    if (isTraceInProgress()) {
      traceEventStart(-4765522, $changed, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:314)');
    }
    var tmp0 = tween(150);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_0($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:935)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_1($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_2($this$animateFloat, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1635067817);
    if (isTraceInProgress()) {
      traceEventStart(-1635067817, $changed, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:325)');
    }
    var tmp;
    if ($this$animateFloat.y8z(InputPhase_Focused_getInstance(), InputPhase_UnfocusedEmpty_getInstance())) {
      tmp = tween(67, VOID, get_LinearEasing());
    } else if ($this$animateFloat.y8z(InputPhase_UnfocusedEmpty_getInstance(), InputPhase_Focused_getInstance()) ? true : $this$animateFloat.y8z(InputPhase_UnfocusedNotEmpty_getInstance(), InputPhase_UnfocusedEmpty_getInstance())) {
      tmp = tween(83, 67, get_LinearEasing());
    } else {
      tmp = spring();
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_3($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:935)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_4($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_5($this$animateFloat, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1189967029);
    if (isTraceInProgress()) {
      traceEventStart(1189967029, $changed, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:353)');
    }
    var tmp0 = tween(150);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_6($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:935)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_7($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_8($this$animateColor, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(2041936647);
    if (isTraceInProgress()) {
      traceEventStart(2041936647, $changed, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:363)');
    }
    var tmp0 = tween(150);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_9($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1457805428);
    if (isTraceInProgress()) {
      traceEventStart(-1457805428, $changed, -1, 'androidx.compose.animation.animateColor$composable.<anonymous> (Transition.kt:64)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_10($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_11($this$animateColor, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(766065458);
    if (isTraceInProgress()) {
      traceEventStart(766065458, $changed, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:373)');
    }
    var tmp0 = tween(150);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_12($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1457805428);
    if (isTraceInProgress()) {
      traceEventStart(-1457805428, $changed, -1, 'androidx.compose.animation.animateColor$composable.<anonymous> (Transition.kt:64)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_13($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function TextFieldTransitionScope$Transition$composable$lambda_14($tmp0_rcvr, $inputState, $focusedTextStyleColor, $unfocusedTextStyleColor, $contentColor, $showLabel, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.zg3($inputState, $focusedTextStyleColor, $unfocusedTextStyleColor, $contentColor, $showLabel, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function TextFieldTransitionScope() {
  }
  protoOf(TextFieldTransitionScope).zg3 = function (inputState, focusedTextStyleColor, unfocusedTextStyleColor, contentColor, showLabel, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1577017868);
    sourceInformation($composer_0, 'C(Transition$composable)P(3,2:c#ui.graphics.Color,5:c#ui.graphics.Color,1,4)310@12822L59,312@12923L325,323@13295L1101,351@14444L354,362@14846L299,372@15191L186,378@15387L174:TextFieldImpl.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(inputState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(focusedTextStyleColor))) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(unfocusedTextStyleColor))) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.y1z(contentColor) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.u1z(showLabel) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-1577017868, $dirty, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable (TextFieldImpl.kt:293)');
      }
      var transition = updateTransition$composable(inputState, 'TextFieldInputState', $composer_0, 48 | 14 & $dirty, 0);
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var transitionSpec = TextFieldTransitionScope$Transition$composable$lambda;
      var label = 'LabelProgress';
      var $composer_1 = $composer_0;
      $composer_1.f1x(1610198356);
      sourceInformation($composer_1, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
      if (!((0 & 1) === 0)) {
        transitionSpec = TextFieldTransitionScope$Transition$composable$lambda_0;
      }
      if (!((0 & 2) === 0))
        label = 'FloatAnimation';
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var typeConverter = get_VectorConverter_0(FloatCompanionObject_instance);
      var $changed_0 = 14 & 384 | 896 & 384 << 3 | 7168 & 384 << 3 | 57344 & 384 << 3;
      var transitionSpec_0 = transitionSpec;
      var label_0 = label;
      var $composer_2 = $composer_1;
      $composer_2.f1x(-1940744337);
      sourceInformation($composer_2, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!((0 & 2) === 0)) {
        transitionSpec_0 = TextFieldTransitionScope$Transition$composable$lambda_1;
      }
      if (!((0 & 4) === 0))
        label_0 = 'ValueAnimation';
      // Inline function 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var it = transition.n90();
      var $changed_1 = 112 & $changed_0 >> 9;
      var $composer_3 = $composer_2;
      $composer_3.f1x(240378898);
      sourceInformation($composer_3, 'C:TextFieldImpl.kt#uh7d8r');
      if (isTraceInProgress()) {
        traceEventStart(240378898, $changed_1, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:315)');
      }
      var tmp;
      switch (it.j9_1) {
        case 0:
          tmp = 1.0;
          break;
        case 1:
          tmp = 0.0;
          break;
        case 2:
          tmp = 1.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0 = tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_3.h1x();
      var initialValue = tmp0;
      // Inline function 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var it_0 = transition.x8z();
      var $changed_2 = 112 & $changed_0 >> 9;
      var $composer_4 = $composer_2;
      $composer_4.f1x(240378898);
      sourceInformation($composer_4, 'C:TextFieldImpl.kt#uh7d8r');
      if (isTraceInProgress()) {
        traceEventStart(240378898, $changed_2, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:315)');
      }
      var tmp_0;
      switch (it_0.j9_1) {
        case 0:
          tmp_0 = 1.0;
          break;
        case 1:
          tmp_0 = 0.0;
          break;
        case 2:
          tmp_0 = 1.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_0 = tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_4.h1x();
      var targetValue = tmp0_0;
      var animationSpec = transitionSpec_0(transition.u90(), $composer_2, 112 & $changed_0 >> 3);
      var tmp0_1 = createTransitionAnimation$composable(transition, initialValue, targetValue, animationSpec, typeConverter, label_0, $composer_2, 14 & $changed_0 | 57344 & $changed_0 << 9 | 458752 & $changed_0 << 6);
      $composer_2.h1x();
      $composer_1.h1x();
      var labelProgress$delegate = tmp0_1;
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var transitionSpec_1 = TextFieldTransitionScope$Transition$composable$lambda_2;
      var label_1 = 'PlaceholderOpacity';
      var $composer_5 = $composer_0;
      $composer_5.f1x(1610198356);
      sourceInformation($composer_5, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
      if (!((0 & 1) === 0)) {
        transitionSpec_1 = TextFieldTransitionScope$Transition$composable$lambda_3;
      }
      if (!((0 & 2) === 0))
        label_1 = 'FloatAnimation';
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var typeConverter_0 = get_VectorConverter_0(FloatCompanionObject_instance);
      var $changed_3 = 14 & 384 | 896 & 384 << 3 | 7168 & 384 << 3 | 57344 & 384 << 3;
      var transitionSpec_2 = transitionSpec_1;
      var label_2 = label_1;
      var $composer_6 = $composer_5;
      $composer_6.f1x(-1940744337);
      sourceInformation($composer_6, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!((0 & 2) === 0)) {
        transitionSpec_2 = TextFieldTransitionScope$Transition$composable$lambda_4;
      }
      if (!((0 & 4) === 0))
        label_2 = 'ValueAnimation';
      // Inline function 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var it_1 = transition.n90();
      var $changed_4 = 112 & $changed_3 >> 9;
      var $composer_7 = $composer_6;
      $composer_7.f1x(2067512179);
      sourceInformation($composer_7, 'C:TextFieldImpl.kt#uh7d8r');
      if (isTraceInProgress()) {
        traceEventStart(2067512179, $changed_4, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:343)');
      }
      var tmp_1;
      switch (it_1.j9_1) {
        case 0:
          tmp_1 = 1.0;
          break;
        case 1:
          tmp_1 = showLabel ? 0.0 : 1.0;
          break;
        case 2:
          tmp_1 = 0.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_2 = tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_7.h1x();
      var initialValue_0 = tmp0_2;
      // Inline function 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var it_2 = transition.x8z();
      var $changed_5 = 112 & $changed_3 >> 9;
      var $composer_8 = $composer_6;
      $composer_8.f1x(2067512179);
      sourceInformation($composer_8, 'C:TextFieldImpl.kt#uh7d8r');
      if (isTraceInProgress()) {
        traceEventStart(2067512179, $changed_5, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:343)');
      }
      var tmp_2;
      switch (it_2.j9_1) {
        case 0:
          tmp_2 = 1.0;
          break;
        case 1:
          tmp_2 = showLabel ? 0.0 : 1.0;
          break;
        case 2:
          tmp_2 = 0.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_3 = tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_8.h1x();
      var targetValue_0 = tmp0_3;
      var animationSpec_0 = transitionSpec_2(transition.u90(), $composer_6, 112 & $changed_3 >> 3);
      var tmp0_4 = createTransitionAnimation$composable(transition, initialValue_0, targetValue_0, animationSpec_0, typeConverter_0, label_2, $composer_6, 14 & $changed_3 | 57344 & $changed_3 << 9 | 458752 & $changed_3 << 6);
      $composer_6.h1x();
      $composer_5.h1x();
      var placeholderOpacity$delegate = tmp0_4;
      // Inline function 'androidx.compose.animation.core.animateFloat$composable' call
      var transitionSpec_3 = TextFieldTransitionScope$Transition$composable$lambda_5;
      var label_3 = 'PrefixSuffixOpacity';
      var $composer_9 = $composer_0;
      $composer_9.f1x(1610198356);
      sourceInformation($composer_9, 'CC(animateFloat$composable)P(2)939@37552L78:Transition.kt#pdpnli');
      if (!((0 & 1) === 0)) {
        transitionSpec_3 = TextFieldTransitionScope$Transition$composable$lambda_6;
      }
      if (!((0 & 2) === 0))
        label_3 = 'FloatAnimation';
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var typeConverter_1 = get_VectorConverter_0(FloatCompanionObject_instance);
      var $changed_6 = 14 & 384 | 896 & 384 << 3 | 7168 & 384 << 3 | 57344 & 384 << 3;
      var transitionSpec_4 = transitionSpec_3;
      var label_4 = label_3;
      var $composer_10 = $composer_9;
      $composer_10.f1x(-1940744337);
      sourceInformation($composer_10, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!((0 & 2) === 0)) {
        transitionSpec_4 = TextFieldTransitionScope$Transition$composable$lambda_7;
      }
      if (!((0 & 4) === 0))
        label_4 = 'ValueAnimation';
      // Inline function 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var it_3 = transition.n90();
      var $changed_7 = 112 & $changed_6 >> 9;
      var $composer_11 = $composer_10;
      $composer_11.f1x(5829913);
      sourceInformation($composer_11, 'C:TextFieldImpl.kt#uh7d8r');
      if (isTraceInProgress()) {
        traceEventStart(5829913, $changed_7, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:354)');
      }
      var tmp_3;
      switch (it_3.j9_1) {
        case 0:
          tmp_3 = 1.0;
          break;
        case 1:
          tmp_3 = showLabel ? 0.0 : 1.0;
          break;
        case 2:
          tmp_3 = 1.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_5 = tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_11.h1x();
      var initialValue_1 = tmp0_5;
      // Inline function 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var it_4 = transition.x8z();
      var $changed_8 = 112 & $changed_6 >> 9;
      var $composer_12 = $composer_10;
      $composer_12.f1x(5829913);
      sourceInformation($composer_12, 'C:TextFieldImpl.kt#uh7d8r');
      if (isTraceInProgress()) {
        traceEventStart(5829913, $changed_8, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:354)');
      }
      var tmp_4;
      switch (it_4.j9_1) {
        case 0:
          tmp_4 = 1.0;
          break;
        case 1:
          tmp_4 = showLabel ? 0.0 : 1.0;
          break;
        case 2:
          tmp_4 = 1.0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp0_6 = tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_12.h1x();
      var targetValue_1 = tmp0_6;
      var animationSpec_1 = transitionSpec_4(transition.u90(), $composer_10, 112 & $changed_6 >> 3);
      var tmp0_7 = createTransitionAnimation$composable(transition, initialValue_1, targetValue_1, animationSpec_1, typeConverter_1, label_4, $composer_10, 14 & $changed_6 | 57344 & $changed_6 << 9 | 458752 & $changed_6 << 6);
      $composer_10.h1x();
      $composer_9.h1x();
      var prefixSuffixOpacity$delegate = tmp0_7;
      // Inline function 'androidx.compose.animation.animateColor$composable' call
      var transitionSpec_5 = TextFieldTransitionScope$Transition$composable$lambda_8;
      var label_5 = 'LabelTextStyleColor';
      var $composer_13 = $composer_0;
      $composer_13.f1x(-1488075038);
      sourceInformation($composer_13, 'CC(animateColor$composable)P(2)68@3220L31,69@3287L70,73@3370L70:Transition.kt#xbi5r1');
      if (!((0 & 1) === 0)) {
        transitionSpec_5 = TextFieldTransitionScope$Transition$composable$lambda_9;
      }
      if (!((0 & 2) === 0))
        label_5 = 'ColorAnimation';
      // Inline function 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var it_5 = transition.x8z();
      var $changed_9 = 112 & 384 >> 6;
      var $composer_14 = $composer_13;
      $composer_14.f1x(-1468066062);
      sourceInformation($composer_14, 'C:TextFieldImpl.kt#uh7d8r');
      if (isTraceInProgress()) {
        traceEventStart(-1468066062, $changed_9, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:365)');
      }
      var tmp0_8 = it_5.j9_1 === 0 ? focusedTextStyleColor : unfocusedTextStyleColor;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_14.h1x();
      var colorSpace = _Color___get_colorSpace__impl__jqqozk(tmp0_8);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_15 = $composer_13;
      $composer_15.f1x(-838505973);
      sourceInformation($composer_15, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_15.t1z(colorSpace);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_15.r1z();
      var tmp_5;
      if (invalid ? true : it_6 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
        var value = get_VectorConverter_1(Companion_getInstance_2())(colorSpace);
        $composer_15.s1z(value);
        tmp_5 = value;
      } else {
        tmp_5 = it_6;
      }
      var tmp_6 = tmp_5;
      var tmp0_9 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_15.h1x();
      var typeConverter_2 = tmp0_9;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var $changed_10 = 14 & 384 | 896 & 384 << 3 | 7168 & 384 << 3 | 57344 & 384 << 3;
      var transitionSpec_6 = transitionSpec_5;
      var label_6 = label_5;
      var $composer_16 = $composer_13;
      $composer_16.f1x(-1940744337);
      sourceInformation($composer_16, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!((0 & 2) === 0)) {
        transitionSpec_6 = TextFieldTransitionScope$Transition$composable$lambda_10;
      }
      if (!((0 & 4) === 0))
        label_6 = 'ValueAnimation';
      // Inline function 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var it_7 = transition.n90();
      var $changed_11 = 112 & $changed_10 >> 9;
      var $composer_17 = $composer_16;
      $composer_17.f1x(-1468066062);
      sourceInformation($composer_17, 'C:TextFieldImpl.kt#uh7d8r');
      if (isTraceInProgress()) {
        traceEventStart(-1468066062, $changed_11, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:365)');
      }
      var tmp0_10 = it_7.j9_1 === 0 ? focusedTextStyleColor : unfocusedTextStyleColor;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_17.h1x();
      var initialValue_2 = tmp0_10;
      // Inline function 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous>' call
      var it_8 = transition.x8z();
      var $changed_12 = 112 & $changed_10 >> 9;
      var $composer_18 = $composer_16;
      $composer_18.f1x(-1468066062);
      sourceInformation($composer_18, 'C:TextFieldImpl.kt#uh7d8r');
      if (isTraceInProgress()) {
        traceEventStart(-1468066062, $changed_12, -1, 'androidx.compose.material3.TextFieldTransitionScope.Transition$composable.<anonymous> (TextFieldImpl.kt:365)');
      }
      var tmp0_11 = it_8.j9_1 === 0 ? focusedTextStyleColor : unfocusedTextStyleColor;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_18.h1x();
      var targetValue_2 = tmp0_11;
      var animationSpec_2 = transitionSpec_6(transition.u90(), $composer_16, 112 & $changed_10 >> 3);
      var tmp0_12 = createTransitionAnimation$composable(transition, new Color(initialValue_2), new Color(targetValue_2), animationSpec_2, typeConverter_2, label_6, $composer_16, 14 & $changed_10 | 57344 & $changed_10 << 9 | 458752 & $changed_10 << 6);
      $composer_16.h1x();
      $composer_13.h1x();
      var labelTextStyleColor$delegate = tmp0_12;
      // Inline function 'androidx.compose.animation.animateColor$composable' call
      var $changed_13 = 384 | 7168 & $dirty;
      var transitionSpec_7 = TextFieldTransitionScope$Transition$composable$lambda_11;
      var label_7 = 'LabelContentColor';
      var $composer_19 = $composer_0;
      $composer_19.f1x(-1488075038);
      sourceInformation($composer_19, 'CC(animateColor$composable)P(2)68@3220L31,69@3287L70,73@3370L70:Transition.kt#xbi5r1');
      if (!((0 & 1) === 0)) {
        transitionSpec_7 = TextFieldTransitionScope$Transition$composable$lambda_12;
      }
      if (!((0 & 2) === 0))
        label_7 = 'ColorAnimation';
      var colorSpace_0 = _Color___get_colorSpace__impl__jqqozk(contentColor(transition.x8z(), $composer_19, 112 & $changed_13 >> 6).p41_1);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_20 = $composer_19;
      $composer_20.f1x(-838505973);
      sourceInformation($composer_20, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_20.t1z(colorSpace_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_9 = $composer_20.r1z();
      var tmp_7;
      if (invalid_0 ? true : it_9 === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
        var value_0 = get_VectorConverter_1(Companion_getInstance_2())(colorSpace_0);
        $composer_20.s1z(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_9;
      }
      var tmp_8 = tmp_7;
      var tmp0_13 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_20.h1x();
      var typeConverter_3 = tmp0_13;
      // Inline function 'androidx.compose.animation.core.animateValue$composable' call
      var $changed_14 = 14 & $changed_13 | 896 & $changed_13 << 3 | 7168 & $changed_13 << 3 | 57344 & $changed_13 << 3;
      var transitionSpec_8 = transitionSpec_7;
      var label_8 = label_7;
      var $composer_21 = $composer_19;
      $composer_21.f1x(-1940744337);
      sourceInformation($composer_21, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
      if (!((0 & 2) === 0)) {
        transitionSpec_8 = TextFieldTransitionScope$Transition$composable$lambda_13;
      }
      if (!((0 & 4) === 0))
        label_8 = 'ValueAnimation';
      var initialValue_3 = contentColor(transition.n90(), $composer_21, 112 & $changed_14 >> 9).p41_1;
      var targetValue_3 = contentColor(transition.x8z(), $composer_21, 112 & $changed_14 >> 9).p41_1;
      var animationSpec_3 = transitionSpec_8(transition.u90(), $composer_21, 112 & $changed_14 >> 3);
      var tmp0_14 = createTransitionAnimation$composable(transition, new Color(initialValue_3), new Color(targetValue_3), animationSpec_3, typeConverter_3, label_8, $composer_21, 14 & $changed_14 | 57344 & $changed_14 << 9 | 458752 & $changed_14 << 6);
      $composer_21.h1x();
      $composer_19.h1x();
      var labelContentColor$delegate = tmp0_14;
      content(Transition$composable$lambda(labelProgress$delegate), new Color(Transition$composable$lambda_2(labelTextStyleColor$delegate)), new Color(Transition$composable$lambda_3(labelContentColor$delegate)), Transition$composable$lambda_0(placeholderOpacity$delegate), Transition$composable$lambda_1(prefixSuffixOpacity$delegate), $composer_0, 458752 & $dirty);
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
      tmp1_safe_receiver.w2e(TextFieldTransitionScope$Transition$composable$lambda_14(this, inputState, focusedTextStyleColor, unfocusedTextStyleColor, contentColor, showLabel, content, $changed));
    }
  };
  var TextFieldTransitionScope_instance;
  function TextFieldTransitionScope_getInstance() {
    return TextFieldTransitionScope_instance;
  }
  function Decoration$composable(contentColor, typography, content, $composer, $changed, $default) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-800811936);
    sourceInformation($composer_0, 'C(Decoration$composable)P(1:c#ui.graphics.Color,2):TextFieldImpl.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor))) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(typography_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.w1y()) {
      if (!(($default & 2) === 0)) {
        typography_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-800811936, $dirty, -1, 'androidx.compose.material3.Decoration$composable (TextFieldImpl.kt:274)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.Decoration$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1449369305, true, Decoration$composable$lambda(contentColor, content, $dirty));
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
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().t1y_1) {
        // Inline function 'androidx.compose.material3.Decoration$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_38(dispatchReceiver);
        $composer_1.s1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.h1x();
      var contentWithColor = tmp0;
      if (!(typography_0._v == null)) {
        $composer_0.f1x(-758496651);
        sourceInformation($composer_0, '285@11827L46');
        ProvideTextStyle$composable(typography_0._v, contentWithColor, $composer_0, 48 | 14 & $dirty >> 3);
        $composer_0.h1x();
      } else {
        $composer_0.f1x(-758496599);
        sourceInformation($composer_0, '285@11879L18');
        contentWithColor($composer_0, 6);
        $composer_0.h1x();
      }
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
      tmp0_safe_receiver.w2e(Decoration$composable$lambda_0(contentColor, typography_0, content, $changed, $default));
    }
  }
  function get_ContainerId() {
    return ContainerId;
  }
  var ContainerId;
  function get_LeadingId() {
    return LeadingId;
  }
  var LeadingId;
  function get_TrailingId() {
    return TrailingId;
  }
  var TrailingId;
  function get_PrefixId() {
    return PrefixId;
  }
  var PrefixId;
  function get_SuffixId() {
    return SuffixId;
  }
  var SuffixId;
  function get_LabelId() {
    return LabelId;
  }
  var LabelId;
  function get_PlaceholderId() {
    return PlaceholderId;
  }
  var PlaceholderId;
  function get_TextFieldId() {
    return TextFieldId;
  }
  var TextFieldId;
  function get_SupportingId() {
    return SupportingId;
  }
  var SupportingId;
  function widthOrZero(placeable) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var tmp1_elvis_lhs = placeable == null ? null : placeable.m5l_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  function heightOrZero(placeable) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var tmp1_elvis_lhs = placeable == null ? null : placeable.n5l_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  }
  function get_layoutId_0(_this__u8e3s4) {
    _init_properties_TextFieldImpl_kt__7vp9id();
    var tmp = _this__u8e3s4.s6u();
    var tmp0_safe_receiver = (!(tmp == null) ? isInterface(tmp, LayoutIdParentData) : false) ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h6w();
  }
  function CommonDecorationBox$composable$lambda($colors, $enabled, $isError, $interactionSource, $$dirty1) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.f1x(-502832279);
      sourceInformation($composer_0, 'C93@3660L47:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-502832279, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous> (TextFieldImpl.kt:92)');
        tmp = Unit_instance;
      }
      var tmp0 = $colors.yg0($enabled._v, $isError._v, $interactionSource, $composer_0, 14 & $$dirty1 >> 6 | 112 & $$dirty1 >> 6 | 896 & $$dirty1 >> 6 | 7168 & $$dirty1 >> 9).u2().p41_1;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.h1x();
      return new Color(tmp0);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda($labelProgress, $shouldOverrideTextStyleColor, $labelTextStyleColor, $labelContentColor, $this, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C*119@4896L10,120@4952L10,125@5165L49:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-382297919, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous> (TextFieldImpl.kt:117)');
        }
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var it = lerp_1(MaterialTheme_instance.hfh($composer_0, 6).zfg_1, MaterialTheme_instance.hfh($composer_0, 6).bfh_1, $labelProgress);
        var labelTextStyle = $shouldOverrideTextStyleColor ? it.x4y($labelTextStyleColor) : it;
        Decoration$composable($labelContentColor, labelTextStyle, $this, $composer_0, 14 & $$dirty >> 6, 0);
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
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_0($placeholderAlphaProgress, $colors, $enabled, $isError, $interactionSource, $$dirty1, $placeholder, $$dirty) {
    return function (modifier, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C135@5640L401:TextFieldImpl.kt#uh7d8r');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.t1z(modifier) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-524658155, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous> (TextFieldImpl.kt:134)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier_0 = alpha(modifier, $placeholderAlphaProgress);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        $composer_1.f1x(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_0 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_1 = modifier_0;
        var $changed_0 = 112 & 0 << 3;
        var modifier_2 = modifier_1;
        var $composer_2 = $composer_1;
        $composer_2.f1x(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_2 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_2);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_1 = $composer_3.u1y();
        if (!isInterface(tmp_1, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_2;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_2 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 1076542639, 'C138@5806L53,139@5922L10,136@5712L307:TextFieldImpl.kt#uh7d8r');
        Decoration$composable($colors.xg0($enabled._v, $isError._v, $interactionSource, $composer_5, 14 & $$dirty1 >> 6 | 112 & $$dirty1 >> 6 | 896 & $$dirty1 >> 6 | 7168 & $$dirty1 >> 9).u2().p41_1, MaterialTheme_instance.hfh($composer_5, 6).zfg_1, $placeholder._v, $composer_5, 896 & $$dirty >> 9, 0);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp_0 = tmp_3;
      } else {
        $composer_0.h1z();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o38(p0, p1, p2);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_1($prefixSuffixAlphaProgress, $prefixColor, $bodyLarge, $prefix, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C150@6348L285:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1824482619, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous> (TextFieldImpl.kt:149)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier = alpha(Companion_instance, $prefixSuffixAlphaProgress);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        $composer_1.f1x(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
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
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.u1y();
        if (!isInterface(tmp_0, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_1;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_1 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 1076543348, 'C151@6421L190:TextFieldImpl.kt#uh7d8r');
        Decoration$composable($prefixColor, $bodyLarge, $prefix._v, $composer_5, 896 & $$dirty >> 18, 0);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_2($prefixSuffixAlphaProgress, $suffixColor, $bodyLarge, $suffix, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C164@6940L285:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(907456412, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous> (TextFieldImpl.kt:163)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier = alpha(Companion_instance, $prefixSuffixAlphaProgress);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        $composer_1.f1x(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
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
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.u1y();
        if (!isInterface(tmp_0, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_1;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_1 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 1076543940, 'C165@7013L190:TextFieldImpl.kt#uh7d8r');
        Decoration$composable($suffixColor, $bodyLarge, $suffix._v, $composer_5, 896 & $$dirty >> 21, 0);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_3($isError, $defaultErrorMessage) {
    return function ($this$semantics) {
      var tmp;
      if ($isError._v) {
        error($this$semantics, $defaultErrorMessage);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_4($leadingIconColor, $this) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C183@7858L57:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(90769583, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous> (TextFieldImpl.kt:182)');
        }
        Decoration$composable($leadingIconColor, null, $this, $composer_0, 0, 2);
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
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_5($trailingIconColor, $this) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C190@8162L58:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(2077796155, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous> (TextFieldImpl.kt:189)');
        }
        Decoration$composable($trailingIconColor, null, $this, $composer_0, 0, 2);
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
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_6($supportingTextColor, $bodySmall, $this) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C198@8487L84:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1531019900, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous> (TextFieldImpl.kt:197)');
        }
        Decoration$composable($supportingTextColor, $bodySmall, $this, $composer_0, 0, 0);
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
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_7($container, $$dirty1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C205@8741L151:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-2124779163, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous> (TextFieldImpl.kt:204)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier = layoutId(Companion_instance, 'Container');
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_1 = $composer_0;
        $composer_1.f1x(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & 390 >> 3 | 112 & 390 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 390 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.f1x(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.u1y();
        if (!isInterface(tmp_0, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_1;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_1 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 1076545786, 'C207@8859L11:TextFieldImpl.kt#uh7d8r');
        $container($composer_5, 14 & $$dirty1 >> 21);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_8($labelSize, $contentPadding, $container, $$dirty1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C231@9859L302:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1902535592, $changed, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous> (TextFieldImpl.kt:230)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier = outlineCutout(layoutId(Companion_instance, 'Container'), $labelSize.u2().l3a_1, $contentPadding);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_1 = $composer_0;
        $composer_1.f1x(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_4().d5i_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 384 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.f1x(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.u1y();
        if (!isInterface(tmp_0, Applier)) {
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
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_1;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_1 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 1076547055, 'C237@10128L11:TextFieldImpl.kt#uh7d8r');
        $container($composer_5, 14 & $$dirty1 >> 21);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function CommonDecorationBox$composable$lambda$lambda_9($labelProgress, $labelSize) {
    return function (it) {
      var labelWidth = _Size___get_width__impl__58y75t(it.l3a_1) * $labelProgress;
      var labelHeight = _Size___get_height__impl__a04p02(it.l3a_1) * $labelProgress;
      var tmp;
      if (!(_Size___get_width__impl__58y75t($labelSize.u2().l3a_1) === labelWidth) ? true : !(_Size___get_height__impl__a04p02($labelSize.u2().l3a_1) === labelHeight)) {
        $labelSize.h1a(new Size_0(Size(labelWidth, labelHeight)));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CommonDecorationBox$composable$lambda_0($label, $placeholder, $transformedText, $colors, $enabled, $isError, $interactionSource, $$dirty1, $prefix, $suffix, $leadingIcon, $trailingIcon, $supportingText, $type, $innerTextField, $singleLine, $contentPadding, $$dirty, $shouldOverrideTextStyleColor, $bodyLarge, $bodySmall, $container) {
    return function (labelProgress, labelTextStyleColor, labelContentColor, placeholderAlphaProgress, prefixSuffixAlphaProgress, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'CP(1,2:c#ui.graphics.Color,0:c#ui.graphics.Color)146@6118L48,160@6710L48,177@7510L30,178@7596L43,180@7679L53,187@7980L54,195@8299L56:TextFieldImpl.kt#uh7d8r');
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.w1z(labelProgress) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(labelTextStyleColor.p41_1))) ? 32 : 16);
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if (($changed & 896) === 0) {
        $dirty = $dirty | ($composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(labelContentColor.p41_1))) ? 256 : 128);
        tmp_1 = Unit_instance;
      }
      var tmp_2;
      if (($changed & 7168) === 0) {
        $dirty = $dirty | ($composer_0.w1z(placeholderAlphaProgress) ? 2048 : 1024);
        tmp_2 = Unit_instance;
      }
      var tmp_3;
      if (($changed & 57344) === 0) {
        $dirty = $dirty | ($composer_0.w1z(prefixSuffixAlphaProgress) ? 16384 : 8192);
        tmp_3 = Unit_instance;
      }
      var tmp_4;
      if (!(($dirty & 374491) === 74898) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1290853831, $dirty, -1, 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous> (TextFieldImpl.kt:113)');
        }
        var tmp0_safe_receiver = $label;
        var tmp_5;
        if (tmp0_safe_receiver == null) {
          tmp_5 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_6 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_6, -382297919, true, CommonDecorationBox$composable$lambda$lambda(labelProgress, $shouldOverrideTextStyleColor, labelTextStyleColor.p41_1, labelContentColor.p41_1, tmp0_safe_receiver, $dirty));
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
          var tmp_7;
          if (invalid ? true : it === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableLambda$invoke$ref_28(dispatchReceiver);
            $composer_1.s1z(value);
            tmp_7 = value;
          } else {
            tmp_7 = it;
          }
          var tmp_8 = tmp_7;
          var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
          $composer_1.h1x();
          tmp_5 = tmp0;
        }
        var decoratedLabel = tmp_5;
        var tmp_9;
        var tmp_10;
        var tmp_11;
        if (!($placeholder._v == null)) {
          // Inline function 'kotlin.text.isEmpty' call
          var this_0 = $transformedText;
          tmp_11 = charSequenceLength(this_0) === 0;
        } else {
          tmp_11 = false;
        }
        if (tmp_11) {
          tmp_10 = placeholderAlphaProgress > 0.0;
        } else {
          tmp_10 = false;
        }
        if (tmp_10) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_12 = $composer_0;
          var dispatchReceiver_0 = composableLambda(tmp_12, -524658155, true, CommonDecorationBox$composable$lambda$lambda_0(placeholderAlphaProgress, $colors, $enabled, $isError, $interactionSource, $$dirty1, $placeholder, $$dirty));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_2 = $composer_0;
          $composer_2.f1x(-838505973);
          sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = $composer_2.t1z(dispatchReceiver_0);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_2.r1z();
          var tmp_13;
          if (invalid_0 ? true : it_0 === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_29(dispatchReceiver_0);
            $composer_2.s1z(value_0);
            tmp_13 = value_0;
          } else {
            tmp_13 = it_0;
          }
          var tmp_14 = tmp_13;
          var tmp0_0 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
          $composer_2.h1x();
          tmp_9 = tmp0_0;
        } else {
          tmp_9 = null;
        }
        var decoratedPlaceholder = tmp_9;
        var prefixColor = $colors.ag1($enabled._v, $isError._v, $interactionSource, $composer_0, 14 & $$dirty1 >> 6 | 112 & $$dirty1 >> 6 | 896 & $$dirty1 >> 6 | 7168 & $$dirty1 >> 9).u2().p41_1;
        var tmp_15;
        if (!($prefix._v == null) ? prefixSuffixAlphaProgress > 0.0 : false) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_16 = $composer_0;
          var dispatchReceiver_1 = composableLambda(tmp_16, 1824482619, true, CommonDecorationBox$composable$lambda$lambda_1(prefixSuffixAlphaProgress, prefixColor, $bodyLarge, $prefix, $$dirty));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_3 = $composer_0;
          $composer_3.f1x(-838505973);
          sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = $composer_3.t1z(dispatchReceiver_1);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_3.r1z();
          var tmp_17;
          if (invalid_1 ? true : it_1 === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = ComposableLambda$invoke$ref_30(dispatchReceiver_1);
            $composer_3.s1z(value_1);
            tmp_17 = value_1;
          } else {
            tmp_17 = it_1;
          }
          var tmp_18 = tmp_17;
          var tmp0_1 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
          $composer_3.h1x();
          tmp_15 = tmp0_1;
        } else {
          tmp_15 = null;
        }
        var decoratedPrefix = tmp_15;
        var suffixColor = $colors.bg1($enabled._v, $isError._v, $interactionSource, $composer_0, 14 & $$dirty1 >> 6 | 112 & $$dirty1 >> 6 | 896 & $$dirty1 >> 6 | 7168 & $$dirty1 >> 9).u2().p41_1;
        var tmp_19;
        if (!($suffix._v == null) ? prefixSuffixAlphaProgress > 0.0 : false) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_20 = $composer_0;
          var dispatchReceiver_2 = composableLambda(tmp_20, 907456412, true, CommonDecorationBox$composable$lambda$lambda_2(prefixSuffixAlphaProgress, suffixColor, $bodyLarge, $suffix, $$dirty));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_4 = $composer_0;
          $composer_4.f1x(-838505973);
          sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_2 = $composer_4.t1z(dispatchReceiver_2);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_2 = $composer_4.r1z();
          var tmp_21;
          if (invalid_2 ? true : it_2 === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_2 = ComposableLambda$invoke$ref_31(dispatchReceiver_2);
            $composer_4.s1z(value_2);
            tmp_21 = value_2;
          } else {
            tmp_21 = it_2;
          }
          var tmp_22 = tmp_21;
          var tmp0_2 = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
          $composer_4.h1x();
          tmp_19 = tmp0_2;
        } else {
          tmp_19 = null;
        }
        var decoratedSuffix = tmp_19;
        var defaultErrorMessage = getString$composable(Companion_getInstance_20().cfw_1, $composer_0, 6);
        var tmp_23 = Companion_instance;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var key1 = $isError._v;
        var $composer_5 = $composer_0;
        $composer_5.f1x(-1124426577);
        sourceInformation($composer_5, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = !!($composer_5.t1z(key1) | $composer_5.t1z(defaultErrorMessage));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_5.r1z();
        var tmp_24;
        if (invalid_3 ? true : it_3 === Companion_getInstance().t1y_1) {
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = CommonDecorationBox$composable$lambda$lambda_3($isError, defaultErrorMessage);
          $composer_5.s1z(value_3);
          tmp_24 = value_3;
        } else {
          tmp_24 = it_3;
        }
        var tmp_25 = tmp_24;
        var tmp0_3 = (tmp_25 == null ? true : !(tmp_25 == null)) ? tmp_25 : THROW_CCE();
        $composer_5.h1x();
        var decorationBoxModifier = semantics(tmp_23, VOID, tmp0_3);
        var leadingIconColor = $colors.tg0($enabled._v, $isError._v, $interactionSource, $composer_0, 14 & $$dirty1 >> 6 | 112 & $$dirty1 >> 6 | 896 & $$dirty1 >> 6 | 7168 & $$dirty1 >> 9).u2().p41_1;
        var tmp1_safe_receiver = $leadingIcon._v;
        var tmp_26;
        if (tmp1_safe_receiver == null) {
          tmp_26 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_27 = $composer_0;
          var dispatchReceiver_3 = composableLambda(tmp_27, 90769583, true, CommonDecorationBox$composable$lambda$lambda_4(leadingIconColor, tmp1_safe_receiver));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_6 = $composer_0;
          $composer_6.f1x(-838505973);
          sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_4 = $composer_6.t1z(dispatchReceiver_3);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_4 = $composer_6.r1z();
          var tmp_28;
          if (invalid_4 ? true : it_4 === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_4 = ComposableLambda$invoke$ref_32(dispatchReceiver_3);
            $composer_6.s1z(value_4);
            tmp_28 = value_4;
          } else {
            tmp_28 = it_4;
          }
          var tmp_29 = tmp_28;
          var tmp0_4 = (tmp_29 == null ? true : !(tmp_29 == null)) ? tmp_29 : THROW_CCE();
          $composer_6.h1x();
          tmp_26 = tmp0_4;
        }
        var decoratedLeading = tmp_26;
        var trailingIconColor = $colors.ug0($enabled._v, $isError._v, $interactionSource, $composer_0, 14 & $$dirty1 >> 6 | 112 & $$dirty1 >> 6 | 896 & $$dirty1 >> 6 | 7168 & $$dirty1 >> 9).u2().p41_1;
        var tmp2_safe_receiver = $trailingIcon._v;
        var tmp_30;
        if (tmp2_safe_receiver == null) {
          tmp_30 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_31 = $composer_0;
          var dispatchReceiver_4 = composableLambda(tmp_31, 2077796155, true, CommonDecorationBox$composable$lambda$lambda_5(trailingIconColor, tmp2_safe_receiver));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_7 = $composer_0;
          $composer_7.f1x(-838505973);
          sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_5 = $composer_7.t1z(dispatchReceiver_4);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_5 = $composer_7.r1z();
          var tmp_32;
          if (invalid_5 ? true : it_5 === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_5 = ComposableLambda$invoke$ref_33(dispatchReceiver_4);
            $composer_7.s1z(value_5);
            tmp_32 = value_5;
          } else {
            tmp_32 = it_5;
          }
          var tmp_33 = tmp_32;
          var tmp0_5 = (tmp_33 == null ? true : !(tmp_33 == null)) ? tmp_33 : THROW_CCE();
          $composer_7.h1x();
          tmp_30 = tmp0_5;
        }
        var decoratedTrailing = tmp_30;
        var supportingTextColor = $colors.zg0($enabled._v, $isError._v, $interactionSource, $composer_0, 14 & $$dirty1 >> 6 | 112 & $$dirty1 >> 6 | 896 & $$dirty1 >> 6 | 7168 & $$dirty1 >> 9).u2().p41_1;
        var tmp3_safe_receiver = $supportingText._v;
        var tmp_34;
        if (tmp3_safe_receiver == null) {
          tmp_34 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_35 = $composer_0;
          var dispatchReceiver_5 = composableLambda(tmp_35, -1531019900, true, CommonDecorationBox$composable$lambda$lambda_6(supportingTextColor, $bodySmall, tmp3_safe_receiver));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_8 = $composer_0;
          $composer_8.f1x(-838505973);
          sourceInformation($composer_8, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_6 = $composer_8.t1z(dispatchReceiver_5);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_6 = $composer_8.r1z();
          var tmp_36;
          if (invalid_6 ? true : it_6 === Companion_getInstance().t1y_1) {
            // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_6 = ComposableLambda$invoke$ref_34(dispatchReceiver_5);
            $composer_8.s1z(value_6);
            tmp_36 = value_6;
          } else {
            tmp_36 = it_6;
          }
          var tmp_37 = tmp_36;
          var tmp0_6 = (tmp_37 == null ? true : !(tmp_37 == null)) ? tmp_37 : THROW_CCE();
          $composer_8.h1x();
          tmp_34 = tmp0_6;
        }
        var decoratedSupporting = tmp_34;
        switch ($type.j9_1) {
          case 0:
            $composer_0.f1x(1279439980);
            sourceInformation($composer_0, '211@8928L680');
            // Inline function 'kotlin.run' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call

            var tmp_38 = $composer_0;
            var dispatchReceiver_6 = composableLambda(tmp_38, -2124779163, true, CommonDecorationBox$composable$lambda$lambda_7($container, $$dirty1));
            // Inline function 'androidx.compose.runtime.remember$composable' call

            var $composer_9 = $composer_0;
            $composer_9.f1x(-838505973);
            sourceInformation($composer_9, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call

            var invalid_7 = $composer_9.t1z(dispatchReceiver_6);
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

            var it_7 = $composer_9.r1z();
            var tmp_39;
            if (invalid_7 ? true : it_7 === Companion_getInstance().t1y_1) {
              // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value_7 = ComposableLambda$invoke$ref_35(dispatchReceiver_6);
              $composer_9.s1z(value_7);
              tmp_39 = value_7;
            } else {
              tmp_39 = it_7;
            }

            var tmp_40 = tmp_39;
            var tmp0_7 = (tmp_40 == null ? true : !(tmp_40 == null)) ? tmp_40 : THROW_CCE();
            $composer_9.h1x();
            var containerWithId = tmp0_7;
            TextFieldLayout$composable(decorationBoxModifier, $innerTextField, decoratedLabel, decoratedPlaceholder, decoratedLeading, decoratedTrailing, decoratedPrefix, decoratedSuffix, $singleLine._v, labelProgress, containerWithId, decoratedSupporting, $contentPadding, $composer_0, 112 & $$dirty >> 3 | 234881024 & $$dirty1 << 21 | 1879048192 & $dirty << 27, 6 | 896 & $$dirty1 >> 9);
            $composer_0.h1x();
            break;
          case 1:
            $composer_0.f1x(1279440986);
            sourceInformation($composer_0, '229@9730L38,252@10751L420,241@10197L1154');
            // Inline function 'androidx.compose.runtime.remember$composable' call

            var $composer_10 = $composer_0;
            $composer_10.f1x(547886695);
            sourceInformation($composer_10, 'CC(remember$composable):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call

            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

            var it_8 = $composer_10.r1z();
            var tmp_41;
            if (false ? true : it_8 === Companion_getInstance().t1y_1) {
              // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
              var value_8 = mutableStateOf(new Size_0(Companion_getInstance_15().j3a_1));
              $composer_10.s1z(value_8);
              tmp_41 = value_8;
            } else {
              tmp_41 = it_8;
            }

            var tmp_42 = tmp_41;
            var tmp0_8 = (tmp_42 == null ? true : !(tmp_42 == null)) ? tmp_42 : THROW_CCE();
            $composer_10.h1x();
            var labelSize = tmp0_8;
            // Inline function 'kotlin.run' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call

            var tmp_43 = $composer_0;
            var dispatchReceiver_7 = composableLambda(tmp_43, 1902535592, true, CommonDecorationBox$composable$lambda$lambda_8(labelSize, $contentPadding, $container, $$dirty1));
            // Inline function 'androidx.compose.runtime.remember$composable' call

            var $composer_11 = $composer_0;
            $composer_11.f1x(-838505973);
            sourceInformation($composer_11, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call

            var invalid_8 = $composer_11.t1z(dispatchReceiver_7);
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

            var it_9 = $composer_11.r1z();
            var tmp_44;
            if (invalid_8 ? true : it_9 === Companion_getInstance().t1y_1) {
              // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value_9 = ComposableLambda$invoke$ref_36(dispatchReceiver_7);
              $composer_11.s1z(value_9);
              tmp_44 = value_9;
            } else {
              tmp_44 = it_9;
            }

            var tmp_45 = tmp_44;
            var tmp0_9 = (tmp_45 == null ? true : !(tmp_45 == null)) ? tmp_45 : THROW_CCE();
            $composer_11.h1x();
            var borderContainerWithId = tmp0_9;
            var tmp_46 = $singleLine._v;
            // Inline function 'androidx.compose.runtime.remember$composable' call

            var $composer_12 = $composer_0;
            $composer_12.f1x(-1124426577);
            sourceInformation($composer_12, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call

            var invalid_9 = !!($composer_12.t1z(labelProgress) | $composer_12.t1z(labelSize));
            // Inline function 'kotlin.let' call

            // Inline function 'kotlin.contracts.contract' call

            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call

            var it_10 = $composer_12.r1z();
            var tmp_47;
            if (invalid_9 ? true : it_10 === Companion_getInstance().t1y_1) {
              // Inline function 'androidx.compose.material3.CommonDecorationBox$composable.<anonymous>.<anonymous>.<anonymous>' call
              var value_10 = CommonDecorationBox$composable$lambda$lambda_9(labelProgress, labelSize);
              $composer_12.s1z(value_10);
              tmp_47 = value_10;
            } else {
              tmp_47 = it_10;
            }

            var tmp_48 = tmp_47;
            var tmp0_10 = (tmp_48 == null ? true : !(tmp_48 == null)) ? tmp_48 : THROW_CCE();
            $composer_12.h1x();
            OutlinedTextFieldLayout$composable(decorationBoxModifier, $innerTextField, decoratedPlaceholder, decoratedLabel, decoratedLeading, decoratedTrailing, decoratedPrefix, decoratedSuffix, tmp_46, labelProgress, tmp0_10, borderContainerWithId, decoratedSupporting, $contentPadding, $composer_0, 112 & $$dirty >> 3 | 234881024 & $$dirty1 << 21 | 1879048192 & $dirty << 27, 48 | 7168 & $$dirty1 >> 6);
            $composer_0.h1x();
            break;
          default:
            $composer_0.f1x(1279442700);
            $composer_0.h1x();
            break;
        }
        var tmp_49;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_49 = Unit_instance;
        }
        tmp_4 = tmp_49;
      } else {
        $composer_0.h1z();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2, p3, p4, p5, p6) {
      return $boundThis.q38(p0, p1, p2, p3, p4, p5, p6);
    };
  }
  function CommonDecorationBox$composable$lambda_1($type, $value, $innerTextField, $visualTransformation, $label, $placeholder, $leadingIcon, $trailingIcon, $prefix, $suffix, $supportingText, $singleLine, $enabled, $isError, $interactionSource, $contentPadding, $colors, $container, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      CommonDecorationBox$composable($type, $value, $innerTextField, $visualTransformation, $label, $placeholder._v, $leadingIcon._v, $trailingIcon._v, $prefix._v, $suffix._v, $supportingText._v, $singleLine._v, $enabled._v, $isError._v, $interactionSource, $contentPadding, $colors, $container, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function Decoration$composable$lambda($contentColor, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C280@11674L118:TextFieldImpl.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1449369305, $changed, -1, 'androidx.compose.material3.Decoration$composable.<anonymous> (TextFieldImpl.kt:279)');
        }
        CompositionLocalProvider$composable([get_LocalContentColor().r2e(new Color($contentColor))], $content, $composer_0, 112 & $$dirty >> 3);
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
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function Decoration$composable$lambda_0($contentColor, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Decoration$composable($contentColor, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function TextFieldType_Filled_getInstance() {
    TextFieldType_initEntries();
    return TextFieldType_Filled_instance;
  }
  function InputPhase_Focused_getInstance() {
    InputPhase_initEntries();
    return InputPhase_Focused_instance;
  }
  function InputPhase_UnfocusedEmpty_getInstance() {
    InputPhase_initEntries();
    return InputPhase_UnfocusedEmpty_instance;
  }
  function InputPhase_UnfocusedNotEmpty_getInstance() {
    InputPhase_initEntries();
    return InputPhase_UnfocusedNotEmpty_instance;
  }
  var properties_initialized_TextFieldImpl_kt_by5wbh;
  function _init_properties_TextFieldImpl_kt__7vp9id() {
    if (!properties_initialized_TextFieldImpl_kt_by5wbh) {
      properties_initialized_TextFieldImpl_kt_by5wbh = true;
      ZeroConstraints = Constraints_0(0, 0, 0, 0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      TextFieldPadding = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      HorizontalIconPadding = _Dp___init__impl__ms3zkb(12);
      // Inline function 'androidx.compose.ui.unit.dp' call
      SupportingTopPadding = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      PrefixSuffixTextPadding = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      MinTextLineHeight = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.ui.unit.dp' call
      MinFocusedLabelLineHeight = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      MinSupportingTextLineHeight = _Dp___init__impl__ms3zkb(16);
      var tmp = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_0 = _Dp___init__impl__ms3zkb(48);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(48);
      IconDefaultSizeModifier = defaultMinSize(tmp, tmp_0, tmp$ret$1);
    }
  }
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    displayLarge = displayLarge === VOID ? TypographyTokens_getInstance().dg4_1 : displayLarge;
    displayMedium = displayMedium === VOID ? TypographyTokens_getInstance().eg4_1 : displayMedium;
    displaySmall = displaySmall === VOID ? TypographyTokens_getInstance().fg4_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? TypographyTokens_getInstance().gg4_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? TypographyTokens_getInstance().hg4_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? TypographyTokens_getInstance().ig4_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? TypographyTokens_getInstance().mg4_1 : titleLarge;
    titleMedium = titleMedium === VOID ? TypographyTokens_getInstance().ng4_1 : titleMedium;
    titleSmall = titleSmall === VOID ? TypographyTokens_getInstance().og4_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? TypographyTokens_getInstance().ag4_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? TypographyTokens_getInstance().bg4_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? TypographyTokens_getInstance().cg4_1 : bodySmall;
    labelLarge = labelLarge === VOID ? TypographyTokens_getInstance().jg4_1 : labelLarge;
    labelMedium = labelMedium === VOID ? TypographyTokens_getInstance().kg4_1 : labelMedium;
    labelSmall = labelSmall === VOID ? TypographyTokens_getInstance().lg4_1 : labelSmall;
    this.qfg_1 = displayLarge;
    this.rfg_1 = displayMedium;
    this.sfg_1 = displaySmall;
    this.tfg_1 = headlineLarge;
    this.ufg_1 = headlineMedium;
    this.vfg_1 = headlineSmall;
    this.wfg_1 = titleLarge;
    this.xfg_1 = titleMedium;
    this.yfg_1 = titleSmall;
    this.zfg_1 = bodyLarge;
    this.afh_1 = bodyMedium;
    this.bfh_1 = bodySmall;
    this.cfh_1 = labelLarge;
    this.dfh_1 = labelMedium;
    this.efh_1 = labelSmall;
    this.ffh_1 = 0;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.qfg_1.equals(other.qfg_1))
      return false;
    if (!this.rfg_1.equals(other.rfg_1))
      return false;
    if (!this.sfg_1.equals(other.sfg_1))
      return false;
    if (!this.tfg_1.equals(other.tfg_1))
      return false;
    if (!this.ufg_1.equals(other.ufg_1))
      return false;
    if (!this.vfg_1.equals(other.vfg_1))
      return false;
    if (!this.wfg_1.equals(other.wfg_1))
      return false;
    if (!this.xfg_1.equals(other.xfg_1))
      return false;
    if (!this.yfg_1.equals(other.yfg_1))
      return false;
    if (!this.zfg_1.equals(other.zfg_1))
      return false;
    if (!this.afh_1.equals(other.afh_1))
      return false;
    if (!this.bfh_1.equals(other.bfh_1))
      return false;
    if (!this.cfh_1.equals(other.cfh_1))
      return false;
    if (!this.dfh_1.equals(other.dfh_1))
      return false;
    if (!this.efh_1.equals(other.efh_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.qfg_1.hashCode();
    result = imul(31, result) + this.rfg_1.hashCode() | 0;
    result = imul(31, result) + this.sfg_1.hashCode() | 0;
    result = imul(31, result) + this.tfg_1.hashCode() | 0;
    result = imul(31, result) + this.ufg_1.hashCode() | 0;
    result = imul(31, result) + this.vfg_1.hashCode() | 0;
    result = imul(31, result) + this.wfg_1.hashCode() | 0;
    result = imul(31, result) + this.xfg_1.hashCode() | 0;
    result = imul(31, result) + this.yfg_1.hashCode() | 0;
    result = imul(31, result) + this.zfg_1.hashCode() | 0;
    result = imul(31, result) + this.afh_1.hashCode() | 0;
    result = imul(31, result) + this.bfh_1.hashCode() | 0;
    result = imul(31, result) + this.cfh_1.hashCode() | 0;
    result = imul(31, result) + this.dfh_1.hashCode() | 0;
    result = imul(31, result) + this.efh_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(displayLarge=' + this.qfg_1 + ', displayMedium=' + this.rfg_1 + ',' + ('displaySmall=' + this.sfg_1 + ', ') + ('headlineLarge=' + this.tfg_1 + ', headlineMedium=' + this.ufg_1 + ',') + (' headlineSmall=' + this.vfg_1 + ', ') + ('titleLarge=' + this.wfg_1 + ', titleMedium=' + this.xfg_1 + ', titleSmall=' + this.yfg_1 + ', ') + ('bodyLarge=' + this.zfg_1 + ', bodyMedium=' + this.afh_1 + ', bodySmall=' + this.bfh_1 + ', ') + ('labelLarge=' + this.cfh_1 + ', labelMedium=' + this.dfh_1 + ', labelSmall=' + this.efh_1 + ')');
  };
  function fromToken_1(_this__u8e3s4, value) {
    _init_properties_Typography_kt__rm3fch();
    var tmp;
    switch (value.j9_1) {
      case 3:
        tmp = _this__u8e3s4.qfg_1;
        break;
      case 4:
        tmp = _this__u8e3s4.rfg_1;
        break;
      case 5:
        tmp = _this__u8e3s4.sfg_1;
        break;
      case 6:
        tmp = _this__u8e3s4.tfg_1;
        break;
      case 7:
        tmp = _this__u8e3s4.ufg_1;
        break;
      case 8:
        tmp = _this__u8e3s4.vfg_1;
        break;
      case 12:
        tmp = _this__u8e3s4.wfg_1;
        break;
      case 13:
        tmp = _this__u8e3s4.xfg_1;
        break;
      case 14:
        tmp = _this__u8e3s4.yfg_1;
        break;
      case 0:
        tmp = _this__u8e3s4.zfg_1;
        break;
      case 1:
        tmp = _this__u8e3s4.afh_1;
        break;
      case 2:
        tmp = _this__u8e3s4.bfh_1;
        break;
      case 9:
        tmp = _this__u8e3s4.cfh_1;
        break;
      case 10:
        tmp = _this__u8e3s4.dfh_1;
        break;
      case 11:
        tmp = _this__u8e3s4.efh_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return new Typography();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (!properties_initialized_Typography_kt_bpd27j) {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function ColorDarkTokens() {
    ColorDarkTokens_instance = this;
    this.sfn_1 = PaletteTokens_getInstance().eg5_1;
    this.tfn_1 = PaletteTokens_getInstance().zg4_1;
    this.ufn_1 = PaletteTokens_getInstance().ug4_1;
    this.vfn_1 = PaletteTokens_getInstance().gg5_1;
    this.wfn_1 = PaletteTokens_getInstance().ig6_1;
    this.xfn_1 = PaletteTokens_getInstance().ng5_1;
    this.yfn_1 = PaletteTokens_getInstance().ng5_1;
    this.zfn_1 = PaletteTokens_getInstance().tg4_1;
    this.afo_1 = PaletteTokens_getInstance().ag5_1;
    this.bfo_1 = PaletteTokens_getInstance().gg6_1;
    this.cfo_1 = PaletteTokens_getInstance().ng6_1;
    this.dfo_1 = PaletteTokens_getInstance().tg6_1;
    this.efo_1 = PaletteTokens_getInstance().ag7_1;
    this.ffo_1 = PaletteTokens_getInstance().ng5_1;
    this.gfo_1 = PaletteTokens_getInstance().zg5_1;
    this.hfo_1 = PaletteTokens_getInstance().gg7_1;
    this.ifo_1 = PaletteTokens_getInstance().ng7_1;
    this.jfo_1 = PaletteTokens_getInstance().xg5_1;
    this.kfo_1 = PaletteTokens_getInstance().ug5_1;
    this.lfo_1 = PaletteTokens_getInstance().mg6_1;
    this.mfo_1 = PaletteTokens_getInstance().hg6_1;
    this.nfo_1 = PaletteTokens_getInstance().dg5_1;
    this.ofo_1 = PaletteTokens_getInstance().zg6_1;
    this.pfo_1 = PaletteTokens_getInstance().ug6_1;
    this.qfo_1 = PaletteTokens_getInstance().eg5_1;
    this.rfo_1 = this.lfo_1;
    this.sfo_1 = PaletteTokens_getInstance().ug5_1;
    this.tfo_1 = PaletteTokens_getInstance().mg7_1;
    this.ufo_1 = PaletteTokens_getInstance().hg7_1;
  }
  var ColorDarkTokens_instance;
  function ColorDarkTokens_getInstance() {
    if (ColorDarkTokens_instance == null)
      new ColorDarkTokens();
    return ColorDarkTokens_instance;
  }
  function ColorLightTokens() {
    ColorLightTokens_instance = this;
    this.pfm_1 = PaletteTokens_getInstance().pg5_1;
    this.qfm_1 = PaletteTokens_getInstance().vg4_1;
    this.rfm_1 = PaletteTokens_getInstance().ag5_1;
    this.sfm_1 = PaletteTokens_getInstance().og5_1;
    this.tfm_1 = PaletteTokens_getInstance().mg6_1;
    this.ufm_1 = PaletteTokens_getInstance().gg5_1;
    this.vfm_1 = PaletteTokens_getInstance().eg5_1;
    this.wfm_1 = PaletteTokens_getInstance().sg4_1;
    this.xfm_1 = PaletteTokens_getInstance().rg4_1;
    this.yfm_1 = PaletteTokens_getInstance().fg6_1;
    this.zfm_1 = PaletteTokens_getInstance().eg6_1;
    this.afn_1 = PaletteTokens_getInstance().sg6_1;
    this.bfn_1 = PaletteTokens_getInstance().rg6_1;
    this.cfn_1 = PaletteTokens_getInstance().eg5_1;
    this.dfn_1 = PaletteTokens_getInstance().ug5_1;
    this.efn_1 = PaletteTokens_getInstance().fg7_1;
    this.ffn_1 = PaletteTokens_getInstance().eg7_1;
    this.gfn_1 = PaletteTokens_getInstance().wg5_1;
    this.hfn_1 = PaletteTokens_getInstance().zg5_1;
    this.ifn_1 = PaletteTokens_getInstance().ig6_1;
    this.jfn_1 = PaletteTokens_getInstance().ng6_1;
    this.kfn_1 = PaletteTokens_getInstance().dg5_1;
    this.lfn_1 = PaletteTokens_getInstance().vg6_1;
    this.mfn_1 = PaletteTokens_getInstance().ag7_1;
    this.nfn_1 = PaletteTokens_getInstance().pg5_1;
    this.ofn_1 = this.ifn_1;
    this.pfn_1 = PaletteTokens_getInstance().ag6_1;
    this.qfn_1 = PaletteTokens_getInstance().ig7_1;
    this.rfn_1 = PaletteTokens_getInstance().ng7_1;
  }
  var ColorLightTokens_instance;
  function ColorLightTokens_getInstance() {
    if (ColorLightTokens_instance == null)
      new ColorLightTokens();
    return ColorLightTokens_instance;
  }
  var ColorSchemeKeyTokens_Background_instance;
  var ColorSchemeKeyTokens_Error_instance;
  var ColorSchemeKeyTokens_ErrorContainer_instance;
  var ColorSchemeKeyTokens_InverseOnSurface_instance;
  var ColorSchemeKeyTokens_InversePrimary_instance;
  var ColorSchemeKeyTokens_InverseSurface_instance;
  var ColorSchemeKeyTokens_OnBackground_instance;
  var ColorSchemeKeyTokens_OnError_instance;
  var ColorSchemeKeyTokens_OnErrorContainer_instance;
  var ColorSchemeKeyTokens_OnPrimary_instance;
  var ColorSchemeKeyTokens_OnPrimaryContainer_instance;
  var ColorSchemeKeyTokens_OnSecondary_instance;
  var ColorSchemeKeyTokens_OnSecondaryContainer_instance;
  var ColorSchemeKeyTokens_OnSurface_instance;
  var ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  var ColorSchemeKeyTokens_OnTertiary_instance;
  var ColorSchemeKeyTokens_OnTertiaryContainer_instance;
  var ColorSchemeKeyTokens_Outline_instance;
  var ColorSchemeKeyTokens_OutlineVariant_instance;
  var ColorSchemeKeyTokens_Primary_instance;
  var ColorSchemeKeyTokens_PrimaryContainer_instance;
  var ColorSchemeKeyTokens_Scrim_instance;
  var ColorSchemeKeyTokens_Secondary_instance;
  var ColorSchemeKeyTokens_SecondaryContainer_instance;
  var ColorSchemeKeyTokens_Surface_instance;
  var ColorSchemeKeyTokens_SurfaceTint_instance;
  var ColorSchemeKeyTokens_SurfaceVariant_instance;
  var ColorSchemeKeyTokens_Tertiary_instance;
  var ColorSchemeKeyTokens_TertiaryContainer_instance;
  var ColorSchemeKeyTokens_entriesInitialized;
  function ColorSchemeKeyTokens_initEntries() {
    if (ColorSchemeKeyTokens_entriesInitialized)
      return Unit_instance;
    ColorSchemeKeyTokens_entriesInitialized = true;
    ColorSchemeKeyTokens_Background_instance = new ColorSchemeKeyTokens('Background', 0);
    ColorSchemeKeyTokens_Error_instance = new ColorSchemeKeyTokens('Error', 1);
    ColorSchemeKeyTokens_ErrorContainer_instance = new ColorSchemeKeyTokens('ErrorContainer', 2);
    ColorSchemeKeyTokens_InverseOnSurface_instance = new ColorSchemeKeyTokens('InverseOnSurface', 3);
    ColorSchemeKeyTokens_InversePrimary_instance = new ColorSchemeKeyTokens('InversePrimary', 4);
    ColorSchemeKeyTokens_InverseSurface_instance = new ColorSchemeKeyTokens('InverseSurface', 5);
    ColorSchemeKeyTokens_OnBackground_instance = new ColorSchemeKeyTokens('OnBackground', 6);
    ColorSchemeKeyTokens_OnError_instance = new ColorSchemeKeyTokens('OnError', 7);
    ColorSchemeKeyTokens_OnErrorContainer_instance = new ColorSchemeKeyTokens('OnErrorContainer', 8);
    ColorSchemeKeyTokens_OnPrimary_instance = new ColorSchemeKeyTokens('OnPrimary', 9);
    ColorSchemeKeyTokens_OnPrimaryContainer_instance = new ColorSchemeKeyTokens('OnPrimaryContainer', 10);
    ColorSchemeKeyTokens_OnSecondary_instance = new ColorSchemeKeyTokens('OnSecondary', 11);
    ColorSchemeKeyTokens_OnSecondaryContainer_instance = new ColorSchemeKeyTokens('OnSecondaryContainer', 12);
    ColorSchemeKeyTokens_OnSurface_instance = new ColorSchemeKeyTokens('OnSurface', 13);
    ColorSchemeKeyTokens_OnSurfaceVariant_instance = new ColorSchemeKeyTokens('OnSurfaceVariant', 14);
    ColorSchemeKeyTokens_OnTertiary_instance = new ColorSchemeKeyTokens('OnTertiary', 15);
    ColorSchemeKeyTokens_OnTertiaryContainer_instance = new ColorSchemeKeyTokens('OnTertiaryContainer', 16);
    ColorSchemeKeyTokens_Outline_instance = new ColorSchemeKeyTokens('Outline', 17);
    ColorSchemeKeyTokens_OutlineVariant_instance = new ColorSchemeKeyTokens('OutlineVariant', 18);
    ColorSchemeKeyTokens_Primary_instance = new ColorSchemeKeyTokens('Primary', 19);
    ColorSchemeKeyTokens_PrimaryContainer_instance = new ColorSchemeKeyTokens('PrimaryContainer', 20);
    ColorSchemeKeyTokens_Scrim_instance = new ColorSchemeKeyTokens('Scrim', 21);
    ColorSchemeKeyTokens_Secondary_instance = new ColorSchemeKeyTokens('Secondary', 22);
    ColorSchemeKeyTokens_SecondaryContainer_instance = new ColorSchemeKeyTokens('SecondaryContainer', 23);
    ColorSchemeKeyTokens_Surface_instance = new ColorSchemeKeyTokens('Surface', 24);
    ColorSchemeKeyTokens_SurfaceTint_instance = new ColorSchemeKeyTokens('SurfaceTint', 25);
    ColorSchemeKeyTokens_SurfaceVariant_instance = new ColorSchemeKeyTokens('SurfaceVariant', 26);
    ColorSchemeKeyTokens_Tertiary_instance = new ColorSchemeKeyTokens('Tertiary', 27);
    ColorSchemeKeyTokens_TertiaryContainer_instance = new ColorSchemeKeyTokens('TertiaryContainer', 28);
  }
  function ColorSchemeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorSchemeKeyTokens_Error_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Error_instance;
  }
  function ColorSchemeKeyTokens_OnErrorContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnErrorContainer_instance;
  }
  function ColorSchemeKeyTokens_OnPrimary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnPrimary_instance;
  }
  function ColorSchemeKeyTokens_OnSecondaryContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSecondaryContainer_instance;
  }
  function ColorSchemeKeyTokens_OnSurface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurface_instance;
  }
  function ColorSchemeKeyTokens_OnSurfaceVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  }
  function ColorSchemeKeyTokens_Primary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Primary_instance;
  }
  function ColorSchemeKeyTokens_SecondaryContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SecondaryContainer_instance;
  }
  function ColorSchemeKeyTokens_Surface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Surface_instance;
  }
  function ColorSchemeKeyTokens_SurfaceTint_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceTint_instance;
  }
  function ColorSchemeKeyTokens_SurfaceVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceVariant_instance;
  }
  function ElevationTokens() {
    ElevationTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.rg7_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.sg7_1 = _Dp___init__impl__ms3zkb(1.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.tg7_1 = _Dp___init__impl__ms3zkb(3.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.ug7_1 = _Dp___init__impl__ms3zkb(6.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.vg7_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.wg7_1 = _Dp___init__impl__ms3zkb(12.0);
  }
  var ElevationTokens_instance;
  function ElevationTokens_getInstance() {
    if (ElevationTokens_instance == null)
      new ElevationTokens();
    return ElevationTokens_instance;
  }
  function FilledButtonTokens() {
    FilledButtonTokens_instance = this;
    this.cff_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.dff_1 = ElevationTokens_getInstance().rg7_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.eff_1 = _Dp___init__impl__ms3zkb(40.0);
    this.fff_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.gff_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.hff_1 = ElevationTokens_getInstance().rg7_1;
    this.iff_1 = 0.12;
    this.jff_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.kff_1 = 0.38;
    this.lff_1 = ElevationTokens_getInstance().rg7_1;
    this.mff_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.nff_1 = ElevationTokens_getInstance().sg7_1;
    this.off_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.pff_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.qff_1 = TypographyKeyTokens_LabelLarge_getInstance();
    this.rff_1 = ElevationTokens_getInstance().rg7_1;
    this.sff_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.tff_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.uff_1 = 0.38;
    this.vff_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.wff_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.xff_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.yff_1 = _Dp___init__impl__ms3zkb(18.0);
    this.zff_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
  }
  var FilledButtonTokens_instance;
  function FilledButtonTokens_getInstance() {
    if (FilledButtonTokens_instance == null)
      new FilledButtonTokens();
    return FilledButtonTokens_instance;
  }
  function FilledCardTokens() {
    FilledCardTokens_instance = this;
    this.kfj_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.lfj_1 = ElevationTokens_getInstance().rg7_1;
    this.mfj_1 = ShapeKeyTokens_CornerMedium_getInstance();
    this.nfj_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    this.ofj_1 = ElevationTokens_getInstance().rg7_1;
    this.pfj_1 = 0.38;
    this.qfj_1 = ElevationTokens_getInstance().ug7_1;
    this.rfj_1 = ElevationTokens_getInstance().rg7_1;
    this.sfj_1 = ElevationTokens_getInstance().sg7_1;
    this.tfj_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ufj_1 = _Dp___init__impl__ms3zkb(24.0);
    this.vfj_1 = ElevationTokens_getInstance().rg7_1;
  }
  var FilledCardTokens_instance;
  function FilledCardTokens_getInstance() {
    if (FilledCardTokens_instance == null)
      new FilledCardTokens();
    return FilledCardTokens_instance;
  }
  function FilledTextFieldTokens() {
    FilledTextFieldTokens_instance = this;
    this.kg1_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.lg1_1 = _Dp___init__impl__ms3zkb(1.0);
    this.mg1_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ng1_1 = ColorSchemeKeyTokens_SurfaceVariant_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.og1_1 = _Dp___init__impl__ms3zkb(56.0);
    this.pg1_1 = ShapeKeyTokens_CornerExtraSmallTop_getInstance();
    this.qg1_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.rg1_1 = _Dp___init__impl__ms3zkb(1.0);
    this.sg1_1 = 0.38;
    this.tg1_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ug1_1 = 0.04;
    this.vg1_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.wg1_1 = 0.38;
    this.xg1_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.yg1_1 = 0.38;
    this.zg1_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ag2_1 = 0.38;
    this.bg2_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.cg2_1 = 0.38;
    this.dg2_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.eg2_1 = 0.38;
    this.fg2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.gg2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.hg2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.ig2_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.jg2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.kg2_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.lg2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.mg2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.ng2_1 = ColorSchemeKeyTokens_OnErrorContainer_getInstance();
    this.og2_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.pg2_1 = ColorSchemeKeyTokens_OnErrorContainer_getInstance();
    this.qg2_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.rg2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.sg2_1 = ColorSchemeKeyTokens_OnErrorContainer_getInstance();
    this.tg2_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ug2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.vg2_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.wg2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.xg2_1 = ColorSchemeKeyTokens_Error_getInstance();
    this.yg2_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.zg2_1 = _Dp___init__impl__ms3zkb(2.0);
    this.ag3_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.bg3_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.cg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.dg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.eg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.fg3_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.gg3_1 = _Dp___init__impl__ms3zkb(1.0);
    this.hg3_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ig3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.jg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.kg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.lg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.mg3_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ng3_1 = TypographyKeyTokens_BodyLarge_getInstance();
    this.og3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.pg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.qg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.rg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.sg3_1 = TypographyKeyTokens_BodyLarge_getInstance();
    this.tg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.ug3_1 = _Dp___init__impl__ms3zkb(20.0);
    this.vg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.wg3_1 = TypographyKeyTokens_BodySmall_getInstance();
    this.xg3_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.yg3_1 = _Dp___init__impl__ms3zkb(24.0);
  }
  var FilledTextFieldTokens_instance;
  function FilledTextFieldTokens_getInstance() {
    if (FilledTextFieldTokens_instance == null)
      new FilledTextFieldTokens();
    return FilledTextFieldTokens_instance;
  }
  function NavigationBarTokens() {
    NavigationBarTokens_instance = this;
    this.wfq_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.xfq_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.yfq_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.zfq_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.afr_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.bfr_1 = ColorSchemeKeyTokens_SecondaryContainer_getInstance();
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.cfr_1 = _Dp___init__impl__ms3zkb(32.0);
    this.dfr_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.efr_1 = _Dp___init__impl__ms3zkb(64.0);
    this.ffr_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.gfr_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.hfr_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ifr_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.jfr_1 = ElevationTokens_getInstance().tg7_1;
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.kfr_1 = _Dp___init__impl__ms3zkb(80.0);
    this.lfr_1 = ShapeKeyTokens_CornerNone_getInstance();
    this.mfr_1 = ColorSchemeKeyTokens_SurfaceTint_getInstance();
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.nfr_1 = _Dp___init__impl__ms3zkb(24.0);
    this.ofr_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.pfr_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.qfr_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.rfr_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.sfr_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.tfr_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ufr_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.vfr_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.wfr_1 = TypographyKeyTokens_LabelMedium_getInstance();
  }
  var NavigationBarTokens_instance;
  function NavigationBarTokens_getInstance() {
    if (NavigationBarTokens_instance == null)
      new NavigationBarTokens();
    return NavigationBarTokens_instance;
  }
  function NavigationRailTokens() {
    NavigationRailTokens_instance = this;
    this.mfs_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.nfs_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ofs_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.pfs_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.qfs_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.rfs_1 = ColorSchemeKeyTokens_SecondaryContainer_getInstance();
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.sfs_1 = _Dp___init__impl__ms3zkb(32.0);
    this.tfs_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.ufs_1 = _Dp___init__impl__ms3zkb(56.0);
    this.vfs_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.wfs_1 = ColorSchemeKeyTokens_OnSecondaryContainer_getInstance();
    this.xfs_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.yfs_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.zfs_1 = ElevationTokens_getInstance().rg7_1;
    this.aft_1 = ShapeKeyTokens_CornerNone_getInstance();
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.bft_1 = _Dp___init__impl__ms3zkb(80.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.cft_1 = _Dp___init__impl__ms3zkb(24.0);
    this.dft_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.eft_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.fft_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.gft_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.hft_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ift_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.jft_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.kft_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.lft_1 = TypographyKeyTokens_LabelMedium_getInstance();
    this.mft_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.nft_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.oft_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.pft_1 = _Dp___init__impl__ms3zkb(24.0);
    this.qft_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.rft_1 = _Dp___init__impl__ms3zkb(56.0);
    this.sft_1 = ShapeKeyTokens_CornerFull_getInstance();
  }
  var NavigationRailTokens_instance;
  function NavigationRailTokens_getInstance() {
    if (NavigationRailTokens_instance == null)
      new NavigationRailTokens();
    return NavigationRailTokens_instance;
  }
  function PaletteTokens() {
    PaletteTokens_instance = this;
    this.pg4_1 = Color_0(0, 0, 0);
    this.qg4_1 = Color_0(0, 0, 0);
    this.rg4_1 = Color_0(65, 14, 11);
    this.sg4_1 = Color_0(255, 255, 255);
    this.tg4_1 = Color_0(96, 20, 16);
    this.ug4_1 = Color_0(140, 29, 24);
    this.vg4_1 = Color_0(179, 38, 30);
    this.wg4_1 = Color_0(220, 54, 46);
    this.xg4_1 = Color_0(228, 105, 98);
    this.yg4_1 = Color_0(236, 146, 142);
    this.zg4_1 = Color_0(242, 184, 181);
    this.ag5_1 = Color_0(249, 222, 220);
    this.bg5_1 = Color_0(252, 238, 238);
    this.cg5_1 = Color_0(255, 251, 249);
    this.dg5_1 = Color_0(0, 0, 0);
    this.eg5_1 = Color_0(28, 27, 31);
    this.fg5_1 = Color_0(255, 255, 255);
    this.gg5_1 = Color_0(49, 48, 51);
    this.hg5_1 = Color_0(72, 70, 73);
    this.ig5_1 = Color_0(96, 93, 98);
    this.jg5_1 = Color_0(120, 117, 121);
    this.kg5_1 = Color_0(147, 144, 148);
    this.lg5_1 = Color_0(174, 170, 174);
    this.mg5_1 = Color_0(201, 197, 202);
    this.ng5_1 = Color_0(230, 225, 229);
    this.og5_1 = Color_0(244, 239, 244);
    this.pg5_1 = Color_0(255, 251, 254);
    this.qg5_1 = Color_0(0, 0, 0);
    this.rg5_1 = Color_0(29, 26, 34);
    this.sg5_1 = Color_0(255, 255, 255);
    this.tg5_1 = Color_0(50, 47, 55);
    this.ug5_1 = Color_0(73, 69, 79);
    this.vg5_1 = Color_0(96, 93, 102);
    this.wg5_1 = Color_0(121, 116, 126);
    this.xg5_1 = Color_0(147, 143, 153);
    this.yg5_1 = Color_0(174, 169, 180);
    this.zg5_1 = Color_0(202, 196, 208);
    this.ag6_1 = Color_0(231, 224, 236);
    this.bg6_1 = Color_0(245, 238, 250);
    this.cg6_1 = Color_0(255, 251, 254);
    this.dg6_1 = Color_0(0, 0, 0);
    this.eg6_1 = Color_0(33, 0, 93);
    this.fg6_1 = Color_0(255, 255, 255);
    this.gg6_1 = Color_0(56, 30, 114);
    this.hg6_1 = Color_0(79, 55, 139);
    this.ig6_1 = Color_0(103, 80, 164);
    this.jg6_1 = Color_0(127, 103, 190);
    this.kg6_1 = Color_0(154, 130, 219);
    this.lg6_1 = Color_0(182, 157, 248);
    this.mg6_1 = Color_0(208, 188, 255);
    this.ng6_1 = Color_0(234, 221, 255);
    this.og6_1 = Color_0(246, 237, 255);
    this.pg6_1 = Color_0(255, 251, 254);
    this.qg6_1 = Color_0(0, 0, 0);
    this.rg6_1 = Color_0(29, 25, 43);
    this.sg6_1 = Color_0(255, 255, 255);
    this.tg6_1 = Color_0(51, 45, 65);
    this.ug6_1 = Color_0(74, 68, 88);
    this.vg6_1 = Color_0(98, 91, 113);
    this.wg6_1 = Color_0(122, 114, 137);
    this.xg6_1 = Color_0(149, 141, 165);
    this.yg6_1 = Color_0(176, 167, 192);
    this.zg6_1 = Color_0(204, 194, 220);
    this.ag7_1 = Color_0(232, 222, 248);
    this.bg7_1 = Color_0(246, 237, 255);
    this.cg7_1 = Color_0(255, 251, 254);
    this.dg7_1 = Color_0(0, 0, 0);
    this.eg7_1 = Color_0(49, 17, 29);
    this.fg7_1 = Color_0(255, 255, 255);
    this.gg7_1 = Color_0(73, 37, 50);
    this.hg7_1 = Color_0(99, 59, 72);
    this.ig7_1 = Color_0(125, 82, 96);
    this.jg7_1 = Color_0(152, 105, 119);
    this.kg7_1 = Color_0(181, 131, 146);
    this.lg7_1 = Color_0(210, 157, 172);
    this.mg7_1 = Color_0(239, 184, 200);
    this.ng7_1 = Color_0(255, 216, 228);
    this.og7_1 = Color_0(255, 236, 241);
    this.pg7_1 = Color_0(255, 251, 250);
    this.qg7_1 = Color_0(255, 255, 255);
  }
  var PaletteTokens_instance;
  function PaletteTokens_getInstance() {
    if (PaletteTokens_instance == null)
      new PaletteTokens();
    return PaletteTokens_instance;
  }
  var ShapeKeyTokens_CornerExtraLarge_instance;
  var ShapeKeyTokens_CornerExtraLargeTop_instance;
  var ShapeKeyTokens_CornerExtraSmall_instance;
  var ShapeKeyTokens_CornerExtraSmallTop_instance;
  var ShapeKeyTokens_CornerFull_instance;
  var ShapeKeyTokens_CornerLarge_instance;
  var ShapeKeyTokens_CornerLargeEnd_instance;
  var ShapeKeyTokens_CornerLargeTop_instance;
  var ShapeKeyTokens_CornerMedium_instance;
  var ShapeKeyTokens_CornerNone_instance;
  var ShapeKeyTokens_CornerSmall_instance;
  var ShapeKeyTokens_entriesInitialized;
  function ShapeKeyTokens_initEntries() {
    if (ShapeKeyTokens_entriesInitialized)
      return Unit_instance;
    ShapeKeyTokens_entriesInitialized = true;
    ShapeKeyTokens_CornerExtraLarge_instance = new ShapeKeyTokens('CornerExtraLarge', 0);
    ShapeKeyTokens_CornerExtraLargeTop_instance = new ShapeKeyTokens('CornerExtraLargeTop', 1);
    ShapeKeyTokens_CornerExtraSmall_instance = new ShapeKeyTokens('CornerExtraSmall', 2);
    ShapeKeyTokens_CornerExtraSmallTop_instance = new ShapeKeyTokens('CornerExtraSmallTop', 3);
    ShapeKeyTokens_CornerFull_instance = new ShapeKeyTokens('CornerFull', 4);
    ShapeKeyTokens_CornerLarge_instance = new ShapeKeyTokens('CornerLarge', 5);
    ShapeKeyTokens_CornerLargeEnd_instance = new ShapeKeyTokens('CornerLargeEnd', 6);
    ShapeKeyTokens_CornerLargeTop_instance = new ShapeKeyTokens('CornerLargeTop', 7);
    ShapeKeyTokens_CornerMedium_instance = new ShapeKeyTokens('CornerMedium', 8);
    ShapeKeyTokens_CornerNone_instance = new ShapeKeyTokens('CornerNone', 9);
    ShapeKeyTokens_CornerSmall_instance = new ShapeKeyTokens('CornerSmall', 10);
  }
  function ShapeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ShapeKeyTokens_CornerExtraSmallTop_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerExtraSmallTop_instance;
  }
  function ShapeKeyTokens_CornerFull_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerFull_instance;
  }
  function ShapeKeyTokens_CornerMedium_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerMedium_instance;
  }
  function ShapeKeyTokens_CornerNone_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerNone_instance;
  }
  function ShapeTokens() {
    ShapeTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(28.0);
    tmp.nfv_1 = RoundedCornerShape(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_1 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_2 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$4 = _Dp___init__impl__ms3zkb(0.0);
    tmp_0.ofv_1 = RoundedCornerShape_0(tmp_1, tmp_2, tmp_3, tmp$ret$4);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$5 = _Dp___init__impl__ms3zkb(4.0);
    tmp_4.pfv_1 = RoundedCornerShape(tmp$ret$5);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_6 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_7 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$9 = _Dp___init__impl__ms3zkb(0.0);
    tmp_5.qfv_1 = RoundedCornerShape_0(tmp_6, tmp_7, tmp_8, tmp$ret$9);
    this.rfv_1 = get_CircleShape();
    var tmp_9 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$10 = _Dp___init__impl__ms3zkb(16.0);
    tmp_9.sfv_1 = RoundedCornerShape(tmp$ret$10);
    var tmp_10 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_11 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_12 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_13 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$14 = _Dp___init__impl__ms3zkb(0.0);
    tmp_10.tfv_1 = RoundedCornerShape_0(tmp_11, tmp_12, tmp_13, tmp$ret$14);
    var tmp_14 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_15 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_16 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$18 = _Dp___init__impl__ms3zkb(0.0);
    tmp_14.ufv_1 = RoundedCornerShape_0(tmp_15, tmp_16, tmp_17, tmp$ret$18);
    var tmp_18 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$19 = _Dp___init__impl__ms3zkb(12.0);
    tmp_18.vfv_1 = RoundedCornerShape(tmp$ret$19);
    this.wfv_1 = get_RectangleShape();
    var tmp_19 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$20 = _Dp___init__impl__ms3zkb(8.0);
    tmp_19.xfv_1 = RoundedCornerShape(tmp$ret$20);
  }
  var ShapeTokens_instance;
  function ShapeTokens_getInstance() {
    if (ShapeTokens_instance == null)
      new ShapeTokens();
    return ShapeTokens_instance;
  }
  function StateTokens() {
    this.xg7_1 = 0.16;
    this.yg7_1 = 0.12;
    this.zg7_1 = 0.08;
    this.ag8_1 = 0.12;
  }
  var StateTokens_instance;
  function StateTokens_getInstance() {
    return StateTokens_instance;
  }
  function TextButtonTokens() {
    TextButtonTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.afg_1 = _Dp___init__impl__ms3zkb(40.0);
    this.bfg_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.cfg_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.dfg_1 = 0.38;
    this.efg_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ffg_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.gfg_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.hfg_1 = TypographyKeyTokens_LabelLarge_getInstance();
    this.ifg_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.jfg_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.kfg_1 = 0.38;
    this.lfg_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.mfg_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.nfg_1 = ColorSchemeKeyTokens_Primary_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.ofg_1 = _Dp___init__impl__ms3zkb(18.0);
    this.pfg_1 = ColorSchemeKeyTokens_Primary_getInstance();
  }
  var TextButtonTokens_instance;
  function TextButtonTokens_getInstance() {
    if (TextButtonTokens_instance == null)
      new TextButtonTokens();
    return TextButtonTokens_instance;
  }
  function TypeScaleTokens() {
    TypeScaleTokens_instance = this;
    this.bg8_1 = TypefaceTokens_getInstance().zga_1;
    this.cg8_1 = get_sp(24.0);
    this.dg8_1 = get_sp_0(16);
    this.eg8_1 = get_sp(0.5);
    this.fg8_1 = TypefaceTokens_getInstance().cgb_1;
    this.gg8_1 = TypefaceTokens_getInstance().zga_1;
    this.hg8_1 = get_sp(20.0);
    this.ig8_1 = get_sp_0(14);
    this.jg8_1 = get_sp(0.2);
    this.kg8_1 = TypefaceTokens_getInstance().cgb_1;
    this.lg8_1 = TypefaceTokens_getInstance().zga_1;
    this.mg8_1 = get_sp(16.0);
    this.ng8_1 = get_sp_0(12);
    this.og8_1 = get_sp(0.4);
    this.pg8_1 = TypefaceTokens_getInstance().cgb_1;
    this.qg8_1 = TypefaceTokens_getInstance().yga_1;
    this.rg8_1 = get_sp(64.0);
    this.sg8_1 = get_sp_0(57);
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.TextUnit.unaryMinus' call
    var this_0 = get_sp(0.2);
    checkArithmetic(this_0);
    tmp.tg8_1 = pack(_TextUnit___get_rawType__impl__tu8yq5(this_0), -_TextUnit___get_value__impl__hpbx0k(this_0));
    this.ug8_1 = TypefaceTokens_getInstance().cgb_1;
    this.vg8_1 = TypefaceTokens_getInstance().yga_1;
    this.wg8_1 = get_sp(52.0);
    this.xg8_1 = get_sp_0(45);
    this.yg8_1 = get_sp(0.0);
    this.zg8_1 = TypefaceTokens_getInstance().cgb_1;
    this.ag9_1 = TypefaceTokens_getInstance().yga_1;
    this.bg9_1 = get_sp(44.0);
    this.cg9_1 = get_sp_0(36);
    this.dg9_1 = get_sp(0.0);
    this.eg9_1 = TypefaceTokens_getInstance().cgb_1;
    this.fg9_1 = TypefaceTokens_getInstance().yga_1;
    this.gg9_1 = get_sp(40.0);
    this.hg9_1 = get_sp_0(32);
    this.ig9_1 = get_sp(0.0);
    this.jg9_1 = TypefaceTokens_getInstance().cgb_1;
    this.kg9_1 = TypefaceTokens_getInstance().yga_1;
    this.lg9_1 = get_sp(36.0);
    this.mg9_1 = get_sp_0(28);
    this.ng9_1 = get_sp(0.0);
    this.og9_1 = TypefaceTokens_getInstance().cgb_1;
    this.pg9_1 = TypefaceTokens_getInstance().yga_1;
    this.qg9_1 = get_sp(32.0);
    this.rg9_1 = get_sp_0(24);
    this.sg9_1 = get_sp(0.0);
    this.tg9_1 = TypefaceTokens_getInstance().cgb_1;
    this.ug9_1 = TypefaceTokens_getInstance().zga_1;
    this.vg9_1 = get_sp(20.0);
    this.wg9_1 = get_sp_0(14);
    this.xg9_1 = get_sp(0.1);
    this.yg9_1 = TypefaceTokens_getInstance().bgb_1;
    this.zg9_1 = TypefaceTokens_getInstance().zga_1;
    this.aga_1 = get_sp(16.0);
    this.bga_1 = get_sp_0(12);
    this.cga_1 = get_sp(0.5);
    this.dga_1 = TypefaceTokens_getInstance().bgb_1;
    this.ega_1 = TypefaceTokens_getInstance().zga_1;
    this.fga_1 = get_sp(16.0);
    this.gga_1 = get_sp_0(11);
    this.hga_1 = get_sp(0.5);
    this.iga_1 = TypefaceTokens_getInstance().bgb_1;
    this.jga_1 = TypefaceTokens_getInstance().yga_1;
    this.kga_1 = get_sp(28.0);
    this.lga_1 = get_sp_0(22);
    this.mga_1 = get_sp(0.0);
    this.nga_1 = TypefaceTokens_getInstance().cgb_1;
    this.oga_1 = TypefaceTokens_getInstance().zga_1;
    this.pga_1 = get_sp(24.0);
    this.qga_1 = get_sp_0(16);
    this.rga_1 = get_sp(0.2);
    this.sga_1 = TypefaceTokens_getInstance().bgb_1;
    this.tga_1 = TypefaceTokens_getInstance().zga_1;
    this.uga_1 = get_sp(20.0);
    this.vga_1 = get_sp_0(14);
    this.wga_1 = get_sp(0.1);
    this.xga_1 = TypefaceTokens_getInstance().bgb_1;
  }
  var TypeScaleTokens_instance;
  function TypeScaleTokens_getInstance() {
    if (TypeScaleTokens_instance == null)
      new TypeScaleTokens();
    return TypeScaleTokens_instance;
  }
  function TypefaceTokens() {
    TypefaceTokens_instance = this;
    this.yga_1 = Companion_getInstance_16().a4x_1;
    this.zga_1 = Companion_getInstance_16().a4x_1;
    this.agb_1 = Companion_getInstance_17().m4w_1;
    this.bgb_1 = Companion_getInstance_17().k4w_1;
    this.cgb_1 = Companion_getInstance_17().j4w_1;
  }
  var TypefaceTokens_instance;
  function TypefaceTokens_getInstance() {
    if (TypefaceTokens_instance == null)
      new TypefaceTokens();
    return TypefaceTokens_instance;
  }
  var TypographyKeyTokens_BodyLarge_instance;
  var TypographyKeyTokens_BodyMedium_instance;
  var TypographyKeyTokens_BodySmall_instance;
  var TypographyKeyTokens_DisplayLarge_instance;
  var TypographyKeyTokens_DisplayMedium_instance;
  var TypographyKeyTokens_DisplaySmall_instance;
  var TypographyKeyTokens_HeadlineLarge_instance;
  var TypographyKeyTokens_HeadlineMedium_instance;
  var TypographyKeyTokens_HeadlineSmall_instance;
  var TypographyKeyTokens_LabelLarge_instance;
  var TypographyKeyTokens_LabelMedium_instance;
  var TypographyKeyTokens_LabelSmall_instance;
  var TypographyKeyTokens_TitleLarge_instance;
  var TypographyKeyTokens_TitleMedium_instance;
  var TypographyKeyTokens_TitleSmall_instance;
  var TypographyKeyTokens_entriesInitialized;
  function TypographyKeyTokens_initEntries() {
    if (TypographyKeyTokens_entriesInitialized)
      return Unit_instance;
    TypographyKeyTokens_entriesInitialized = true;
    TypographyKeyTokens_BodyLarge_instance = new TypographyKeyTokens('BodyLarge', 0);
    TypographyKeyTokens_BodyMedium_instance = new TypographyKeyTokens('BodyMedium', 1);
    TypographyKeyTokens_BodySmall_instance = new TypographyKeyTokens('BodySmall', 2);
    TypographyKeyTokens_DisplayLarge_instance = new TypographyKeyTokens('DisplayLarge', 3);
    TypographyKeyTokens_DisplayMedium_instance = new TypographyKeyTokens('DisplayMedium', 4);
    TypographyKeyTokens_DisplaySmall_instance = new TypographyKeyTokens('DisplaySmall', 5);
    TypographyKeyTokens_HeadlineLarge_instance = new TypographyKeyTokens('HeadlineLarge', 6);
    TypographyKeyTokens_HeadlineMedium_instance = new TypographyKeyTokens('HeadlineMedium', 7);
    TypographyKeyTokens_HeadlineSmall_instance = new TypographyKeyTokens('HeadlineSmall', 8);
    TypographyKeyTokens_LabelLarge_instance = new TypographyKeyTokens('LabelLarge', 9);
    TypographyKeyTokens_LabelMedium_instance = new TypographyKeyTokens('LabelMedium', 10);
    TypographyKeyTokens_LabelSmall_instance = new TypographyKeyTokens('LabelSmall', 11);
    TypographyKeyTokens_TitleLarge_instance = new TypographyKeyTokens('TitleLarge', 12);
    TypographyKeyTokens_TitleMedium_instance = new TypographyKeyTokens('TitleMedium', 13);
    TypographyKeyTokens_TitleSmall_instance = new TypographyKeyTokens('TitleSmall', 14);
  }
  function TypographyKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TypographyKeyTokens_BodyLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_BodyLarge_instance;
  }
  function TypographyKeyTokens_BodySmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_BodySmall_instance;
  }
  function TypographyKeyTokens_LabelLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_LabelLarge_instance;
  }
  function TypographyKeyTokens_LabelMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_LabelMedium_instance;
  }
  function get_DefaultTextStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultTextStyle;
  }
  var DefaultTextStyle;
  function TypographyTokens() {
    TypographyTokens_instance = this;
    var tmp = this;
    var tmp0_$this = get_DefaultTextStyle();
    var tmp1_fontFamily = TypeScaleTokens_getInstance().bg8_1;
    var tmp2_fontWeight = TypeScaleTokens_getInstance().fg8_1;
    var tmp3_fontSize = TypeScaleTokens_getInstance().dg8_1;
    var tmp4_lineHeight = TypeScaleTokens_getInstance().cg8_1;
    var tmp5_letterSpacing = TypeScaleTokens_getInstance().eg8_1;
    tmp.ag4_1 = tmp0_$this.x4y(VOID, tmp3_fontSize, tmp2_fontWeight, VOID, VOID, tmp1_fontFamily, VOID, tmp5_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight);
    var tmp_0 = this;
    var tmp0_$this_0 = get_DefaultTextStyle();
    var tmp1_fontFamily_0 = TypeScaleTokens_getInstance().gg8_1;
    var tmp2_fontWeight_0 = TypeScaleTokens_getInstance().kg8_1;
    var tmp3_fontSize_0 = TypeScaleTokens_getInstance().ig8_1;
    var tmp4_lineHeight_0 = TypeScaleTokens_getInstance().hg8_1;
    var tmp5_letterSpacing_0 = TypeScaleTokens_getInstance().jg8_1;
    tmp_0.bg4_1 = tmp0_$this_0.x4y(VOID, tmp3_fontSize_0, tmp2_fontWeight_0, VOID, VOID, tmp1_fontFamily_0, VOID, tmp5_letterSpacing_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_0);
    var tmp_1 = this;
    var tmp0_$this_1 = get_DefaultTextStyle();
    var tmp1_fontFamily_1 = TypeScaleTokens_getInstance().lg8_1;
    var tmp2_fontWeight_1 = TypeScaleTokens_getInstance().pg8_1;
    var tmp3_fontSize_1 = TypeScaleTokens_getInstance().ng8_1;
    var tmp4_lineHeight_1 = TypeScaleTokens_getInstance().mg8_1;
    var tmp5_letterSpacing_1 = TypeScaleTokens_getInstance().og8_1;
    tmp_1.cg4_1 = tmp0_$this_1.x4y(VOID, tmp3_fontSize_1, tmp2_fontWeight_1, VOID, VOID, tmp1_fontFamily_1, VOID, tmp5_letterSpacing_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_1);
    var tmp_2 = this;
    var tmp0_$this_2 = get_DefaultTextStyle();
    var tmp1_fontFamily_2 = TypeScaleTokens_getInstance().qg8_1;
    var tmp2_fontWeight_2 = TypeScaleTokens_getInstance().ug8_1;
    var tmp3_fontSize_2 = TypeScaleTokens_getInstance().sg8_1;
    var tmp4_lineHeight_2 = TypeScaleTokens_getInstance().rg8_1;
    var tmp5_letterSpacing_2 = TypeScaleTokens_getInstance().tg8_1;
    tmp_2.dg4_1 = tmp0_$this_2.x4y(VOID, tmp3_fontSize_2, tmp2_fontWeight_2, VOID, VOID, tmp1_fontFamily_2, VOID, tmp5_letterSpacing_2, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_2);
    var tmp_3 = this;
    var tmp0_$this_3 = get_DefaultTextStyle();
    var tmp1_fontFamily_3 = TypeScaleTokens_getInstance().vg8_1;
    var tmp2_fontWeight_3 = TypeScaleTokens_getInstance().zg8_1;
    var tmp3_fontSize_3 = TypeScaleTokens_getInstance().xg8_1;
    var tmp4_lineHeight_3 = TypeScaleTokens_getInstance().wg8_1;
    var tmp5_letterSpacing_3 = TypeScaleTokens_getInstance().yg8_1;
    tmp_3.eg4_1 = tmp0_$this_3.x4y(VOID, tmp3_fontSize_3, tmp2_fontWeight_3, VOID, VOID, tmp1_fontFamily_3, VOID, tmp5_letterSpacing_3, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_3);
    var tmp_4 = this;
    var tmp0_$this_4 = get_DefaultTextStyle();
    var tmp1_fontFamily_4 = TypeScaleTokens_getInstance().ag9_1;
    var tmp2_fontWeight_4 = TypeScaleTokens_getInstance().eg9_1;
    var tmp3_fontSize_4 = TypeScaleTokens_getInstance().cg9_1;
    var tmp4_lineHeight_4 = TypeScaleTokens_getInstance().bg9_1;
    var tmp5_letterSpacing_4 = TypeScaleTokens_getInstance().dg9_1;
    tmp_4.fg4_1 = tmp0_$this_4.x4y(VOID, tmp3_fontSize_4, tmp2_fontWeight_4, VOID, VOID, tmp1_fontFamily_4, VOID, tmp5_letterSpacing_4, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_4);
    var tmp_5 = this;
    var tmp0_$this_5 = get_DefaultTextStyle();
    var tmp1_fontFamily_5 = TypeScaleTokens_getInstance().fg9_1;
    var tmp2_fontWeight_5 = TypeScaleTokens_getInstance().jg9_1;
    var tmp3_fontSize_5 = TypeScaleTokens_getInstance().hg9_1;
    var tmp4_lineHeight_5 = TypeScaleTokens_getInstance().gg9_1;
    var tmp5_letterSpacing_5 = TypeScaleTokens_getInstance().ig9_1;
    tmp_5.gg4_1 = tmp0_$this_5.x4y(VOID, tmp3_fontSize_5, tmp2_fontWeight_5, VOID, VOID, tmp1_fontFamily_5, VOID, tmp5_letterSpacing_5, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_5);
    var tmp_6 = this;
    var tmp0_$this_6 = get_DefaultTextStyle();
    var tmp1_fontFamily_6 = TypeScaleTokens_getInstance().kg9_1;
    var tmp2_fontWeight_6 = TypeScaleTokens_getInstance().og9_1;
    var tmp3_fontSize_6 = TypeScaleTokens_getInstance().mg9_1;
    var tmp4_lineHeight_6 = TypeScaleTokens_getInstance().lg9_1;
    var tmp5_letterSpacing_6 = TypeScaleTokens_getInstance().ng9_1;
    tmp_6.hg4_1 = tmp0_$this_6.x4y(VOID, tmp3_fontSize_6, tmp2_fontWeight_6, VOID, VOID, tmp1_fontFamily_6, VOID, tmp5_letterSpacing_6, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_6);
    var tmp_7 = this;
    var tmp0_$this_7 = get_DefaultTextStyle();
    var tmp1_fontFamily_7 = TypeScaleTokens_getInstance().pg9_1;
    var tmp2_fontWeight_7 = TypeScaleTokens_getInstance().tg9_1;
    var tmp3_fontSize_7 = TypeScaleTokens_getInstance().rg9_1;
    var tmp4_lineHeight_7 = TypeScaleTokens_getInstance().qg9_1;
    var tmp5_letterSpacing_7 = TypeScaleTokens_getInstance().sg9_1;
    tmp_7.ig4_1 = tmp0_$this_7.x4y(VOID, tmp3_fontSize_7, tmp2_fontWeight_7, VOID, VOID, tmp1_fontFamily_7, VOID, tmp5_letterSpacing_7, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_7);
    var tmp_8 = this;
    var tmp0_$this_8 = get_DefaultTextStyle();
    var tmp1_fontFamily_8 = TypeScaleTokens_getInstance().ug9_1;
    var tmp2_fontWeight_8 = TypeScaleTokens_getInstance().yg9_1;
    var tmp3_fontSize_8 = TypeScaleTokens_getInstance().wg9_1;
    var tmp4_lineHeight_8 = TypeScaleTokens_getInstance().vg9_1;
    var tmp5_letterSpacing_8 = TypeScaleTokens_getInstance().xg9_1;
    tmp_8.jg4_1 = tmp0_$this_8.x4y(VOID, tmp3_fontSize_8, tmp2_fontWeight_8, VOID, VOID, tmp1_fontFamily_8, VOID, tmp5_letterSpacing_8, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_8);
    var tmp_9 = this;
    var tmp0_$this_9 = get_DefaultTextStyle();
    var tmp1_fontFamily_9 = TypeScaleTokens_getInstance().zg9_1;
    var tmp2_fontWeight_9 = TypeScaleTokens_getInstance().dga_1;
    var tmp3_fontSize_9 = TypeScaleTokens_getInstance().bga_1;
    var tmp4_lineHeight_9 = TypeScaleTokens_getInstance().aga_1;
    var tmp5_letterSpacing_9 = TypeScaleTokens_getInstance().cga_1;
    tmp_9.kg4_1 = tmp0_$this_9.x4y(VOID, tmp3_fontSize_9, tmp2_fontWeight_9, VOID, VOID, tmp1_fontFamily_9, VOID, tmp5_letterSpacing_9, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_9);
    var tmp_10 = this;
    var tmp0_$this_10 = get_DefaultTextStyle();
    var tmp1_fontFamily_10 = TypeScaleTokens_getInstance().ega_1;
    var tmp2_fontWeight_10 = TypeScaleTokens_getInstance().iga_1;
    var tmp3_fontSize_10 = TypeScaleTokens_getInstance().gga_1;
    var tmp4_lineHeight_10 = TypeScaleTokens_getInstance().fga_1;
    var tmp5_letterSpacing_10 = TypeScaleTokens_getInstance().hga_1;
    tmp_10.lg4_1 = tmp0_$this_10.x4y(VOID, tmp3_fontSize_10, tmp2_fontWeight_10, VOID, VOID, tmp1_fontFamily_10, VOID, tmp5_letterSpacing_10, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_10);
    var tmp_11 = this;
    var tmp0_$this_11 = get_DefaultTextStyle();
    var tmp1_fontFamily_11 = TypeScaleTokens_getInstance().jga_1;
    var tmp2_fontWeight_11 = TypeScaleTokens_getInstance().nga_1;
    var tmp3_fontSize_11 = TypeScaleTokens_getInstance().lga_1;
    var tmp4_lineHeight_11 = TypeScaleTokens_getInstance().kga_1;
    var tmp5_letterSpacing_11 = TypeScaleTokens_getInstance().mga_1;
    tmp_11.mg4_1 = tmp0_$this_11.x4y(VOID, tmp3_fontSize_11, tmp2_fontWeight_11, VOID, VOID, tmp1_fontFamily_11, VOID, tmp5_letterSpacing_11, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_11);
    var tmp_12 = this;
    var tmp0_$this_12 = get_DefaultTextStyle();
    var tmp1_fontFamily_12 = TypeScaleTokens_getInstance().oga_1;
    var tmp2_fontWeight_12 = TypeScaleTokens_getInstance().sga_1;
    var tmp3_fontSize_12 = TypeScaleTokens_getInstance().qga_1;
    var tmp4_lineHeight_12 = TypeScaleTokens_getInstance().pga_1;
    var tmp5_letterSpacing_12 = TypeScaleTokens_getInstance().rga_1;
    tmp_12.ng4_1 = tmp0_$this_12.x4y(VOID, tmp3_fontSize_12, tmp2_fontWeight_12, VOID, VOID, tmp1_fontFamily_12, VOID, tmp5_letterSpacing_12, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_12);
    var tmp_13 = this;
    var tmp0_$this_13 = get_DefaultTextStyle();
    var tmp1_fontFamily_13 = TypeScaleTokens_getInstance().tga_1;
    var tmp2_fontWeight_13 = TypeScaleTokens_getInstance().xga_1;
    var tmp3_fontSize_13 = TypeScaleTokens_getInstance().vga_1;
    var tmp4_lineHeight_13 = TypeScaleTokens_getInstance().uga_1;
    var tmp5_letterSpacing_13 = TypeScaleTokens_getInstance().wga_1;
    tmp_13.og4_1 = tmp0_$this_13.x4y(VOID, tmp3_fontSize_13, tmp2_fontWeight_13, VOID, VOID, tmp1_fontFamily_13, VOID, tmp5_letterSpacing_13, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_13);
  }
  var TypographyTokens_instance;
  function TypographyTokens_getInstance() {
    if (TypographyTokens_instance == null)
      new TypographyTokens();
    return TypographyTokens_instance;
  }
  var properties_initialized_TypographyTokens_kt_gw7fqt;
  function _init_properties_TypographyTokens_kt__by6b7t() {
    if (!properties_initialized_TypographyTokens_kt_gw7fqt) {
      properties_initialized_TypographyTokens_kt_gw7fqt = true;
      DefaultTextStyle = Companion_getInstance_18().r4y_1.x4y(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, defaultPlatformTextStyle());
    }
  }
  function defaultPlatformTextStyle() {
    return null;
  }
  function getString$composable(string, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1660593609, 'C(getString$composable)P(0:c#material3.Strings):Strings.skiko.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1660593609, $changed, -1, 'androidx.compose.material3.getString$composable (Strings.skiko.kt:24)');
    }
    var tmp0 = string === Companion_getInstance_20().zfv_1 ? 'Navigation menu' : string === Companion_getInstance_20().afw_1 ? 'Close navigation menu' : string === Companion_getInstance_20().bfw_1 ? 'Close sheet' : string === Companion_getInstance_20().cfw_1 ? 'Invalid input' : string === Companion_getInstance_20().efw_1 ? 'Range Start' : string === Companion_getInstance_20().ffw_1 ? 'Range End' : string === Companion_getInstance_20().gfw_1 ? 'Dialog' : string === Companion_getInstance_20().hfw_1 ? 'Expanded' : string === Companion_getInstance_20().ifw_1 ? 'Collapsed' : string === Companion_getInstance_20().jfw_1 ? 'Dismiss' : string === Companion_getInstance_20().kfw_1 ? 'Search' : string === Companion_getInstance_20().lfw_1 ? 'Suggestions below' : string === Companion_getInstance_20().mfw_1 ? 'Select date' : string === Companion_getInstance_20().nfw_1 ? 'Selected date' : string === Companion_getInstance_20().ofw_1 ? 'Year picker visible' : string === Companion_getInstance_20().pfw_1 ? 'Switch to selecting a year' : string === Companion_getInstance_20().qfw_1 ? 'Swipe to select a year, or tap to switch back to selecting a day' : string === Companion_getInstance_20().rfw_1 ? 'Change to next month' : string === Companion_getInstance_20().sfw_1 ? 'Change to previous month' : string === Companion_getInstance_20().tfw_1 ? 'Navigate to year %1$' : string === Companion_getInstance_20().ufw_1 ? 'Current selection: %1$' : string === Companion_getInstance_20().vfw_1 ? 'None' : string === Companion_getInstance_20().wfw_1 ? 'Today' : string === Companion_getInstance_20().xfw_1 ? 'Scroll to show later years' : string === Companion_getInstance_20().yfw_1 ? 'Scroll to show earlier years' : string === Companion_getInstance_20().zfw_1 ? 'Select date' : string === Companion_getInstance_20().afx_1 ? 'Entered date' : string === Companion_getInstance_20().bfx_1 ? 'Date' : string === Companion_getInstance_20().cfx_1 ? 'Entered date: %1$' : string === Companion_getInstance_20().dfx_1 ? 'None' : string === Companion_getInstance_20().efx_1 ? 'Date not allowed: %1$' : string === Companion_getInstance_20().ffx_1 ? 'Date does not match expected pattern: %1$' : string === Companion_getInstance_20().gfx_1 ? 'Date out of expected year range %1$ - %2$' : string === Companion_getInstance_20().hfx_1 ? 'Switch to calendar input mode' : string === Companion_getInstance_20().ifx_1 ? 'Switch to text input mode' : string === Companion_getInstance_20().jfx_1 ? 'Select dates' : string === Companion_getInstance_20().kfx_1 ? 'Start date' : string === Companion_getInstance_20().lfx_1 ? 'End date' : string === Companion_getInstance_20().mfx_1 ? 'Scroll to show the next month' : string === Companion_getInstance_20().nfx_1 ? 'Scroll to show the previous month' : string === Companion_getInstance_20().ofx_1 ? 'In range' : string === Companion_getInstance_20().pfx_1 ? 'Enter dates' : string === Companion_getInstance_20().qfx_1 ? 'Invalid date range input' : string === Companion_getInstance_20().rfx_1 ? 'Bottom Sheet' : string === Companion_getInstance_20().sfx_1 ? 'Drag Handle' : string === Companion_getInstance_20().tfx_1 ? 'Collapse bottom sheet' : string === Companion_getInstance_20().ufx_1 ? 'Dismiss bottom sheet' : string === Companion_getInstance_20().vfx_1 ? 'Expand bottom sheet' : string === Companion_getInstance_20().wfx_1 ? 'Show tooltip' : string === Companion_getInstance_20().xfx_1 ? 'AM' : string === Companion_getInstance_20().yfx_1 ? 'PM' : string === Companion_getInstance_20().zfx_1 ? 'Select AM or PM' : string === Companion_getInstance_20().bfy_1 ? 'Select minutes' : string === Companion_getInstance_20().afy_1 ? 'Select hour' : string === Companion_getInstance_20().cfy_1 ? "%1$ o'clock" : string === Companion_getInstance_20().efy_1 ? '%1$ minutes' : string === Companion_getInstance_20().dfy_1 ? '%1$ hours' : string === Companion_getInstance_20().gfy_1 ? 'Minute' : string === Companion_getInstance_20().ffy_1 ? 'Hour' : string === Companion_getInstance_20().ify_1 ? 'for minutes' : string === Companion_getInstance_20().hfy_1 ? 'for hour' : string === Companion_getInstance_20().jfy_1 ? 'Tooltip' : '';
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function systemBarsForVisualComponents$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(873421393);
    sourceInformation($composer_0, 'C(systemBarsForVisualComponents$composable):SystemBarsDefaultInsets.skiko.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(873421393, $changed, -1, 'androidx.compose.material3.systemBarsForVisualComponents$composable (SystemBarsDefaultInsets.skiko.kt:24)');
    }
    var tmp0 = get_systemBars(Companion_instance_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  //region block: post-declaration
  protoOf(MinimumInteractiveComponentSizeModifier).t5l = minIntrinsicWidth;
  protoOf(MinimumInteractiveComponentSizeModifier).u5l = minIntrinsicHeight;
  protoOf(MinimumInteractiveComponentSizeModifier).v5l = maxIntrinsicWidth;
  protoOf(MinimumInteractiveComponentSizeModifier).w5l = maxIntrinsicHeight;
  protoOf(MinimumInteractiveComponentSizeModifier).h5j = foldIn;
  protoOf(MinimumInteractiveComponentSizeModifier).i5j = all;
  protoOf(MinimumInteractiveComponentSizeModifier).c5j = then;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).f6z = minIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).g6z = minIntrinsicHeight_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).h6z = maxIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).i6z = maxIntrinsicHeight_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).f6z = minIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).g6z = minIntrinsicHeight_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).h6z = maxIntrinsicWidth_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).i6z = maxIntrinsicHeight_0;
  //endregion
  //region block: init
  CardDefaults_instance = new CardDefaults();
  DisabledAlpha = 0.38;
  ElevationDefaults_instance = new ElevationDefaults();
  MaterialTheme_instance = new MaterialTheme();
  MaterialRippleTheme_instance = new MaterialRippleTheme();
  NavigationBarItemDefaults_instance = new NavigationBarItemDefaults();
  NavigationRailDefaults_instance = new NavigationRailDefaults();
  NavigationRailItemDefaults_instance = new NavigationRailItemDefaults();
  ScaffoldDefaults_instance = new ScaffoldDefaults();
  AnimationDuration = 150;
  TextFieldTransitionScope_instance = new TextFieldTransitionScope();
  ContainerId = 'Container';
  LeadingId = 'Leading';
  TrailingId = 'Trailing';
  PrefixId = 'Prefix';
  SuffixId = 'Suffix';
  LabelId = 'Label';
  PlaceholderId = 'Hint';
  TextFieldId = 'TextField';
  SupportingId = 'Supporting';
  StateTokens_instance = new StateTokens();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Button$composable;
  _.$_$.b = Card$composable;
  _.$_$.c = MaterialTheme$composable;
  _.$_$.d = NavigationBar$composable;
  _.$_$.e = NavigationBarItem$composable;
  _.$_$.f = NavigationRail$composable;
  _.$_$.g = NavigationRailItem$composable;
  _.$_$.h = Scaffold$composable;
  _.$_$.i = Surface$composable_0;
  _.$_$.j = Text$composable;
  _.$_$.k = TextButton$composable;
  _.$_$.l = TextField$composable;
  _.$_$.m = Typography;
  _.$_$.n = darkColorScheme;
  _.$_$.o = lightColorScheme;
  _.$_$.p = _FabPosition___init__impl__9ib2hj;
  _.$_$.q = MaterialTheme_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-material3.js.map
