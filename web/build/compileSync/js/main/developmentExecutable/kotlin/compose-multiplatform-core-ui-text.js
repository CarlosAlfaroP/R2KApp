(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-runtime-saveable.js', './compose-multiplatform-core-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-util.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-runtime-saveable.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-util.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-runtime-saveable' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    root['compose-multiplatform-core-ui-text'] = factory(typeof this['compose-multiplatform-core-ui-text'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-text'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-runtime-saveable'], this['compose-multiplatform-core-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-util'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ud;
  var objectCreate = kotlin_kotlin.$_$.sd;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o4;
  var VOID = kotlin_kotlin.$_$.e;
  var toString = kotlin_kotlin.$_$.zd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var hashCode = kotlin_kotlin.$_$.uc;
  var getStringHashCode = kotlin_kotlin.$_$.tc;
  var THROW_CCE = kotlin_kotlin.$_$.qh;
  var equals = kotlin_kotlin.$_$.lc;
  var classMeta = kotlin_kotlin.$_$.hc;
  var setMetadataFor = kotlin_kotlin.$_$.vd;
  var emptyList = kotlin_kotlin.$_$.p7;
  var Unit_getInstance = kotlin_kotlin.$_$.b5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var Appendable = kotlin_kotlin.$_$.rf;
  var Comparator = kotlin_kotlin.$_$.dh;
  var compareValues = kotlin_kotlin.$_$.sa;
  var sortedWith = kotlin_kotlin.$_$.z9;
  var charSequenceGet = kotlin_kotlin.$_$.ec;
  var List = kotlin_kotlin.$_$.v5;
  var isInterface = kotlin_kotlin.$_$.fd;
  var CharSequence = kotlin_kotlin.$_$.zg;
  var coerceIn = kotlin_kotlin.$_$.te;
  var Annotation = kotlin_kotlin.$_$.yg;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var charSequenceLength = kotlin_kotlin.$_$.fc;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var coerceAtLeast = kotlin_kotlin.$_$.me;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var get_lastIndex = kotlin_kotlin.$_$.s8;
  var addAll = kotlin_kotlin.$_$.h6;
  var plus = kotlin_kotlin.$_$.m9;
  var last = kotlin_kotlin.$_$.x8;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a4;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n4;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.qc;
  var compareTo = kotlin_kotlin.$_$.ic;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.pi;
  var KProperty1 = kotlin_kotlin.$_$.df;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sc;
  var numberToInt = kotlin_kotlin.$_$.qd;
  var interfaceMeta = kotlin_kotlin.$_$.wc;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var objectMeta = kotlin_kotlin.$_$.td;
  var THROW_IAE = kotlin_kotlin.$_$.rh;
  var Enum = kotlin_kotlin.$_$.eh;
  var arrayListOf = kotlin_kotlin.$_$.j6;
  var ensureNotNull = kotlin_kotlin.$_$.ji;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ri;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g4;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var ULong = kotlin_kotlin.$_$.zh;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.f;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c3;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r1;
  var lerp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w3;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.j1;
  var toString_0 = kotlin_kotlin.$_$.cj;
  var Char = kotlin_kotlin.$_$.ah;
  var isCharSequence = kotlin_kotlin.$_$.bd;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var getBooleanHashCode = kotlin_kotlin.$_$.oc;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Long = kotlin_kotlin.$_$.jh;
  var toLong = kotlin_kotlin.$_$.xd;
  var fillArrayVal = kotlin_kotlin.$_$.mc;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var first = kotlin_kotlin.$_$.b8;
  var Map = kotlin_kotlin.$_$.x5;
  var MutableMap = kotlin_kotlin.$_$.d6;
  var MutableCollection = kotlin_kotlin.$_$.y5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var copyOf = kotlin_kotlin.$_$.m7;
  var copyOf_0 = kotlin_kotlin.$_$.l7;
  var println = kotlin_kotlin.$_$.xb;
  var arrayCopy = kotlin_kotlin.$_$.i6;
  var ClassCastException = kotlin_kotlin.$_$.bh;
  var NullPointerException = kotlin_kotlin.$_$.mh;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.m;
  var asList = kotlin_kotlin.$_$.k6;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var Exception = kotlin_kotlin.$_$.gh;
  var State = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var CoroutineImpl = kotlin_kotlin.$_$.ob;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ya;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var get_indices = kotlin_kotlin.$_$.m8;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o2;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var CancellationException = kotlin_kotlin.$_$.xa;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.cb;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var withTimeout = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k2;
  var joinAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j4;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var to = kotlin_kotlin.$_$.dj;
  var first_0 = kotlin_kotlin.$_$.a8;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r2;
  var mutableListOf = kotlin_kotlin.$_$.i9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.w4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.x2;
  var createFailure = kotlin_kotlin.$_$.ii;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.a3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.z2;
  var KMutableProperty1 = kotlin_kotlin.$_$.bf;
  var SuspendFunction0 = kotlin_kotlin.$_$.pb;
  var SuspendFunction1 = kotlin_kotlin.$_$.qb;
  var listOf = kotlin_kotlin.$_$.c9;
  var Comparable = kotlin_kotlin.$_$.ch;
  var lerp_2 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var isLowSurrogate = kotlin_kotlin.$_$.zf;
  var isHighSurrogate = kotlin_kotlin.$_$.yf;
  var joinTo = kotlin_kotlin.$_$.q8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var charArray = kotlin_kotlin.$_$.dc;
  var mutableIntStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var NonCancellable_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var toString_1 = kotlin_kotlin.$_$.w2;
  var repeat = kotlin_kotlin.$_$.fg;
  var Char__hashCode_impl_otmys = kotlin_kotlin.$_$.s2;
  var split = kotlin_kotlin.$_$.ig;
  var trim = kotlin_kotlin.$_$.ug;
  var toList = kotlin_kotlin.$_$.la;
  var Collection = kotlin_kotlin.$_$.l5;
  var lerp_3 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var isNaN_0 = kotlin_kotlin.$_$.ni;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r7;
  var until = kotlin_kotlin.$_$.ye;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var setOf = kotlin_kotlin.$_$.u9;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.n9;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.j8;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var titlecaseChar = kotlin_kotlin.$_$.kg;
  var isLowerCase = kotlin_kotlin.$_$.ag;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.l9;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var Companion_getInstance_8 = kotlin_kotlin.$_$.u4;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.v2;
  var sequence = kotlin_kotlin.$_$.of;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.t2;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.s7;
  var SequenceScope = kotlin_kotlin.$_$.hf;
  var numberRangeToNumber = kotlin_kotlin.$_$.md;
  var getObjectHashCode = kotlin_kotlin.$_$.rc;
  var last_0 = kotlin_kotlin.$_$.z8;
  var isArray = kotlin_kotlin.$_$.xc;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.m8;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var firstOrNull = kotlin_kotlin.$_$.z7;
  var first_1 = kotlin_kotlin.$_$.c8;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$_$.d9;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.r8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.cg;
  var lastOrNull = kotlin_kotlin.$_$.w8;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n1;
  var coerceAtMost = kotlin_kotlin.$_$.oe;
  var Rect_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var getOrNull = kotlin_kotlin.$_$.e8;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var isWhitespace = kotlin_kotlin.$_$.bg;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var listOf_0 = kotlin_kotlin.$_$.b9;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.g7;
  var TypefaceFontProvider = kotlin_org_jetbrains_skiko_skiko.$_$.t8;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.y7;
  var copyToArray = kotlin_kotlin.$_$.n7;
  var mapOf = kotlin_kotlin.$_$.f9;
  var KProperty0 = kotlin_kotlin.$_$.cf;
  var lazy_0 = kotlin_kotlin.$_$.qi;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m7;
  var asComposePaint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d4;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.i7;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v1;
  var Companion_getInstance_14 = kotlin_org_jetbrains_skiko_skiko.$_$.x7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.m2;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t2;
  var Companion_getInstance_15 = kotlin_org_jetbrains_skiko_skiko.$_$.z7;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.l8;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.q8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.yi;
  var sortWith = kotlin_kotlin.$_$.x9;
  var asReversed = kotlin_kotlin.$_$.l6;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.o8;
  var StrutStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.h7;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.s8;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.l7;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.n8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.gc;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.p8;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  var firstOrNull_0 = kotlin_kotlin.$_$.y7;
  var coerceIn_0 = kotlin_kotlin.$_$.se;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MutableRange, 'MutableRange', classMeta);
  setMetadataFor(Range, 'Range', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, [Appendable], Builder);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(AnnotatedString, 'AnnotatedString', classMeta, VOID, [CharSequence]);
  setMetadataFor(ExperimentalTextApi, 'ExperimentalTextApi', classMeta, VOID, [Annotation]);
  setMetadataFor(InternalTextApi, 'InternalTextApi', classMeta, VOID, [Annotation]);
  setMetadataFor(MultiParagraph, 'MultiParagraph', classMeta);
  setMetadataFor(ParagraphInfo, 'ParagraphInfo', classMeta);
  function get_hasStaleResolvedFonts() {
    return false;
  }
  setMetadataFor(ParagraphIntrinsics, 'ParagraphIntrinsics', interfaceMeta);
  setMetadataFor(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo', classMeta);
  setMetadataFor(ParagraphStyle_0, 'ParagraphStyle', classMeta);
  setMetadataFor(Placeholder, 'Placeholder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(PlaceholderVerticalAlign, 'PlaceholderVerticalAlign', classMeta);
  setMetadataFor(AnnotationType, 'AnnotationType', classMeta, Enum);
  setMetadataFor(SpanStyle, 'SpanStyle', classMeta);
  setMetadataFor(PlatformStringDelegate, 'PlatformStringDelegate', interfaceMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(TextLayoutResult, 'TextLayoutResult', classMeta);
  setMetadataFor(TextLayoutInput, 'TextLayoutInput', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ResourceLoader, 'ResourceLoader', interfaceMeta);
  setMetadataFor(DeprecatedBridgeFontResourceLoader, 'DeprecatedBridgeFontResourceLoader', classMeta, VOID, [ResourceLoader]);
  setMetadataFor(TextPainter, 'TextPainter', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(TextRange, 'TextRange', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta);
  setMetadataFor(TtsAnnotation, 'TtsAnnotation', classMeta);
  setMetadataFor(VerbatimTtsAnnotation, 'VerbatimTtsAnnotation', classMeta, TtsAnnotation);
  setMetadataFor(UrlAnnotation, 'UrlAnnotation', classMeta);
  setMetadataFor(LruCache, 'LruCache', classMeta);
  setMetadataFor(SimpleArrayMap, 'SimpleArrayMap', classMeta, VOID, VOID, SimpleArrayMap_init_$Create$);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  function get_loadingStrategy() {
    return Companion_getInstance_24().get_Blocking_7mu9wm_k$();
  }
  setMetadataFor(Font, 'Font', interfaceMeta);
  setMetadataFor(PlatformFontLoader, 'PlatformFontLoader', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  function resolve$default(fontFamily, fontWeight, fontStyle, fontSynthesis, $super) {
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontWeight = fontWeight === VOID ? Companion_getInstance_27().get_Normal_22avww_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? Companion_getInstance_25().get_Normal_tevh6u_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? Companion_getInstance_26().get_All_bqi34r_k$() : fontSynthesis;
    return $super === VOID ? this.resolve_q3h1fi_k$(fontFamily, fontWeight, fontStyle, fontSynthesis) : $super.resolve_q3h1fi_k$.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis));
  }
  setMetadataFor(Resolver, 'Resolver', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FontFamily, 'FontFamily', classMeta);
  setMetadataFor(SystemFontFamily, 'SystemFontFamily', classMeta, FontFamily);
  setMetadataFor(DefaultFontFamily, 'DefaultFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(GenericFontFamily, 'GenericFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(FileBasedFontFamily, 'FileBasedFontFamily', classMeta, FontFamily);
  setMetadataFor(FontListFontFamily, 'FontListFontFamily', classMeta, FileBasedFontFamily, [FileBasedFontFamily, List]);
  setMetadataFor(LoadedFontFamily, 'LoadedFontFamily', classMeta, FontFamily);
  setMetadataFor(TypefaceRequestCache, 'TypefaceRequestCache', classMeta, VOID, VOID, TypefaceRequestCache);
  setMetadataFor(TypefaceRequest, 'TypefaceRequest', classMeta);
  setMetadataFor(TypefaceResult, 'TypefaceResult', interfaceMeta, VOID, [State]);
  setMetadataFor(Immutable, 'Immutable', classMeta, VOID, [TypefaceResult]);
  setMetadataFor(Async, 'Async', classMeta, VOID, [TypefaceResult, State]);
  setMetadataFor($preloadCOROUTINE$0, '$preloadCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(FontFamilyResolverImpl, 'FontFamilyResolverImpl', classMeta, VOID, [Resolver], VOID, VOID, VOID, [1]);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  setMetadataFor(PlatformResolveInterceptor, 'PlatformResolveInterceptor', interfaceMeta);
  setMetadataFor(PlatformResolveInterceptor$Companion$Default$1, VOID, classMeta, VOID, [PlatformResolveInterceptor]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(FontFamilyTypefaceAdapter, 'FontFamilyTypefaceAdapter', interfaceMeta);
  setMetadataFor(AsyncTypefaceResult, 'AsyncTypefaceResult', classMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor($runCachedCOROUTINE$1, '$runCachedCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(AsyncTypefaceCache, 'AsyncTypefaceCache', classMeta, VOID, VOID, AsyncTypefaceCache, VOID, VOID, [4]);
  setMetadataFor(AsyncFontListLoader$load$slambda, 'AsyncFontListLoader$load$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, 'AsyncFontListLoader$loadWithTimeoutOrNull$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor($loadCOROUTINE$2, '$loadCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($loadWithTimeoutOrNullCOROUTINE$3, '$loadWithTimeoutOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(AsyncFontListLoader, 'AsyncFontListLoader', classMeta, VOID, [State], VOID, VOID, VOID, [0]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, CoroutineExceptionHandler]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda, 'FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda, 'FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [0]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda, 'FontListFontFamilyTypefaceAdapter$preload$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$preload$slambda, 'FontListFontFamilyTypefaceAdapter$preload$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$resolve$slambda, 'FontListFontFamilyTypefaceAdapter$resolve$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', classMeta, VOID, [FontFamilyTypefaceAdapter], FontListFontFamilyTypefaceAdapter, VOID, VOID, [2]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(FontLoadingStrategy, 'FontLoadingStrategy', classMeta);
  setMetadataFor(FontMatcher, 'FontMatcher', classMeta, VOID, VOID, FontMatcher);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(FontSynthesis, 'FontSynthesis', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta, VOID, [Comparable]);
  setMetadataFor(Typeface, 'Typeface', interfaceMeta);
  setMetadataFor(EditCommand, 'EditCommand', interfaceMeta);
  setMetadataFor(CommitTextCommand, 'CommitTextCommand', classMeta, VOID, [EditCommand]);
  setMetadataFor(DeleteAllCommand, 'DeleteAllCommand', classMeta, VOID, [EditCommand], DeleteAllCommand);
  setMetadataFor(FinishComposingTextCommand, 'FinishComposingTextCommand', classMeta, VOID, [EditCommand], FinishComposingTextCommand);
  setMetadataFor(DeleteSurroundingTextCommand, 'DeleteSurroundingTextCommand', classMeta, VOID, [EditCommand]);
  setMetadataFor(SetSelectionCommand, 'SetSelectionCommand', classMeta, VOID, [EditCommand]);
  setMetadataFor(SetComposingTextCommand, 'SetComposingTextCommand', classMeta, VOID, [EditCommand]);
  setMetadataFor(SetComposingRegionCommand, 'SetComposingRegionCommand', classMeta, VOID, [EditCommand]);
  setMetadataFor(DeleteSurroundingTextInCodePointsCommand, 'DeleteSurroundingTextInCodePointsCommand', classMeta, VOID, [EditCommand]);
  setMetadataFor(BackspaceCommand, 'BackspaceCommand', classMeta, VOID, [EditCommand], BackspaceCommand);
  setMetadataFor(MoveCursorCommand, 'MoveCursorCommand', classMeta, VOID, [EditCommand]);
  setMetadataFor(EditProcessor, 'EditProcessor', classMeta, VOID, VOID, EditProcessor);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(EditingBuffer, 'EditingBuffer', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(PartialGapBuffer, 'PartialGapBuffer', classMeta);
  setMetadataFor(GapBuffer, 'GapBuffer', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(ImeAction, 'ImeAction', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(ImeOptions, 'ImeOptions', classMeta, VOID, VOID, ImeOptions);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(KeyboardCapitalization, 'KeyboardCapitalization', classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(KeyboardType, 'KeyboardType', classMeta);
  setMetadataFor(OffsetMapping, 'OffsetMapping', interfaceMeta);
  setMetadataFor(OffsetMapping$Companion$Identity$1, VOID, classMeta, VOID, [OffsetMapping]);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(PlatformTextInputPluginRegistry, 'PlatformTextInputPluginRegistry', interfaceMeta);
  setMetadataFor(PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda, 'PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(AdapterHandle, 'AdapterHandle', classMeta);
  setMetadataFor(AdapterWithRefCount, 'AdapterWithRefCount', classMeta);
  setMetadataFor(PlatformTextInput, 'PlatformTextInput', interfaceMeta);
  setMetadataFor(AdapterInput, 'AdapterInput', classMeta, VOID, [PlatformTextInput]);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [DisposableEffectResult]);
  setMetadataFor(PlatformTextInputPluginRegistryImpl, 'PlatformTextInputPluginRegistryImpl', classMeta, VOID, [PlatformTextInputPluginRegistry]);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TextFieldValue, 'TextFieldValue', classMeta, VOID, VOID, TextFieldValue_init_$Create$);
  setMetadataFor(TextInputService, 'TextInputService', classMeta);
  function notifyFocusedRect(rect) {
  }
  setMetadataFor(PlatformTextInputService, 'PlatformTextInputService', interfaceMeta);
  setMetadataFor(TextInputSession, 'TextInputSession', classMeta);
  setMetadataFor(VisualTransformation, 'VisualTransformation', interfaceMeta);
  setMetadataFor(sam$androidx_compose_ui_text_input_VisualTransformation$0, 'sam$androidx_compose_ui_text_input_VisualTransformation$0', classMeta, VOID, [VisualTransformation]);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(TransformedText, 'TransformedText', classMeta);
  setMetadataFor(PasswordVisualTransformation, 'PasswordVisualTransformation', classMeta, VOID, [VisualTransformation], PasswordVisualTransformation);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(Locale, 'Locale', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(LocaleList, 'LocaleList', classMeta, VOID, [Collection]);
  setMetadataFor(PlatformLocale, 'PlatformLocale', interfaceMeta);
  setMetadataFor(PlatformLocaleDelegate, 'PlatformLocaleDelegate', interfaceMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(BaselineShift, 'BaselineShift', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(Hyphens, 'Hyphens', classMeta);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(Trim, 'Trim', classMeta);
  setMetadataFor(Alignment, 'Alignment', classMeta);
  setMetadataFor(LineHeightStyle, 'LineHeightStyle', classMeta);
  setMetadataFor(ResolvedTextDirection, 'ResolvedTextDirection', classMeta, Enum);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(TextDecoration, 'TextDecoration', classMeta);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(TextDirection, 'TextDirection', classMeta);
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1 = other.get_alpha_iooth1_k$();
      tmp = new BrushStyle(other.value_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_2;
      if (other instanceof BrushStyle) {
        tmp_2 = !(this instanceof BrushStyle);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp = other;
      } else {
        var tmp_3;
        if (!(other instanceof BrushStyle)) {
          tmp_3 = this instanceof BrushStyle;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp = this;
        } else {
          tmp = other.takeOrElse_vujaw_k$(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_getInstance()) ? this : other();
  }
  setMetadataFor(TextForegroundStyle, 'TextForegroundStyle', interfaceMeta);
  setMetadataFor(Unspecified, 'Unspecified', objectMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(BrushStyle, 'BrushStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(ColorStyle, 'ColorStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(TextGeometricTransform, 'TextGeometricTransform', classMeta, VOID, VOID, TextGeometricTransform);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(TextIndent_0, 'TextIndent', classMeta, VOID, VOID, TextIndent_0);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(TextOverflow, 'TextOverflow', classMeta);
  setMetadataFor(Cache, 'Cache', interfaceMeta);
  setMetadataFor(NoCache, 'NoCache', classMeta, VOID, [Cache], NoCache);
  setMetadataFor(JsLocale, 'JsLocale', classMeta, VOID, [PlatformLocale]);
  setMetadataFor(createPlatformLocaleDelegate$1, VOID, classMeta, VOID, [PlatformLocaleDelegate]);
  setMetadataFor(JsStringDelegate, 'JsStringDelegate', classMeta, VOID, [PlatformStringDelegate], JsStringDelegate);
  setMetadataFor(PlatformFont, 'PlatformFont', classMeta, VOID, [Font]);
  setMetadataFor(ExpireAfterAccessCache, 'ExpireAfterAccessCache', classMeta, VOID, [Cache]);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(StrongDirectionType, 'StrongDirectionType', classMeta);
  setMetadataFor(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, '<get-codePointsOutsideDirectionalIsolate>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(_get_codePoints_$slambda_43x8dt, '<get-codePoints>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(PlatformParagraphStyle, 'PlatformParagraphStyle', classMeta, VOID, VOID, PlatformParagraphStyle);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(PlatformSpanStyle, 'PlatformSpanStyle', classMeta, VOID, VOID, PlatformSpanStyle);
  setMetadataFor(PlatformTextStyle, 'PlatformTextStyle', classMeta);
  function getLineEnd$default(lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.getLineEnd_o6geci_k$(lineIndex, visibleEnd) : $super.getLineEnd_o6geci_k$.call(this, lineIndex, visibleEnd);
  }
  function paint$default(canvas, color, shadow, textDecoration, $super) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    var tmp;
    if ($super === VOID) {
      this.paint_xx9kwo_k$(canvas, color, shadow, textDecoration);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_xx9kwo_k$.call(this, canvas, new Color(color), shadow, textDecoration);
    }
    return tmp;
  }
  function paint$default_0(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp;
    if ($super === VOID) {
      this.paint_qj08y1_k$(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_qj08y1_k$.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_1(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? FloatCompanionObject_getInstance().get_NaN_18jnv2_k$() : alpha;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp;
    if ($super === VOID) {
      this.paint_t6aqss_k$(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_t6aqss_k$.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  setMetadataFor(Paragraph_1, 'Paragraph', interfaceMeta);
  setMetadataFor(SkiaParagraph, 'SkiaParagraph', classMeta, VOID, [Paragraph_1]);
  setMetadataFor(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', classMeta, VOID, [FontFamilyTypefaceAdapter], PlatformFontFamilyTypefaceAdapter);
  setMetadataFor(SkiaFontLoader, 'SkiaFontLoader', classMeta, VOID, [PlatformFontLoader], SkiaFontLoader, VOID, VOID, [1]);
  setMetadataFor(PlatformTextInputPlugin, 'PlatformTextInputPlugin', interfaceMeta);
  setMetadataFor(PlatformTextInputAdapter, 'PlatformTextInputAdapter', interfaceMeta);
  setMetadataFor(ParagraphLayouter, 'ParagraphLayouter', classMeta);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(FontLoadResult, 'FontLoadResult', classMeta);
  setMetadataFor(FontLoader, 'FontLoader', classMeta, VOID, [ResourceLoader], FontLoader);
  setMetadataFor(FontCache, 'FontCache', classMeta, VOID, VOID, FontCache);
  setMetadataFor(SkiaBackedTypeface, 'SkiaBackedTypeface', classMeta, VOID, [Typeface]);
  setMetadataFor(LoadedFont, 'LoadedFont', classMeta, PlatformFont);
  setMetadataFor(ComputedStyle, 'ComputedStyle', classMeta);
  setMetadataFor(Op, 'Op', classMeta);
  setMetadataFor(StyleAdd, 'StyleAdd', classMeta, Op);
  setMetadataFor(PutPlaceholder, 'PutPlaceholder', classMeta, Op);
  setMetadataFor(EndPlaceholder, 'EndPlaceholder', classMeta, Op);
  setMetadataFor(Cut, 'Cut', classMeta);
  setMetadataFor(StyleAdd_0, 'StyleAdd', classMeta, Cut);
  setMetadataFor(StyleRemove, 'StyleRemove', classMeta, Cut);
  setMetadataFor(PutPlaceholder_0, 'PutPlaceholder', classMeta, Cut);
  setMetadataFor(EndPlaceholder_0, 'EndPlaceholder', classMeta, Cut);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(ParagraphBuilder_0, 'ParagraphBuilder', classMeta);
  setMetadataFor(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(LineBreak, 'LineBreak', classMeta);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor(TextMotion, 'TextMotion', classMeta);
  //endregion
  function get_EmptyAnnotatedString() {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return EmptyAnnotatedString;
  }
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function get_$stableprop() {
    return 0;
  }
  function MutableRange(item, start, end, tag) {
    end = end === VOID ? IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$() : end;
    tag = tag === VOID ? '' : tag;
    this.item_1 = item;
    this.start_1 = start;
    this.end_1 = end;
    this.tag_1 = tag;
  }
  protoOf(MutableRange).get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  protoOf(MutableRange).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(MutableRange).set_end_2o0hu2_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(MutableRange).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(MutableRange).get_tag_18ivnz_k$ = function () {
    return this.tag_1;
  };
  protoOf(MutableRange).toRange_d5re6u_k$ = function (defaultEnd) {
    var end = this.end_1 === IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$() ? defaultEnd : this.end_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(end === IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$())) {
      // Inline function 'androidx.compose.ui.text.MutableRange.toRange.<anonymous>' call
      var message = 'Item.end should be set first';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new Range(this.item_1, this.start_1, end, this.tag_1);
  };
  protoOf(MutableRange).toRange$default_huuesc_k$ = function (defaultEnd, $super) {
    defaultEnd = defaultEnd === VOID ? IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$() : defaultEnd;
    return $super === VOID ? this.toRange_d5re6u_k$(defaultEnd) : $super.toRange_d5re6u_k$.call(this, defaultEnd);
  };
  protoOf(MutableRange).component1_7eebsc_k$ = function () {
    return this.item_1;
  };
  protoOf(MutableRange).component2_7eebsb_k$ = function () {
    return this.start_1;
  };
  protoOf(MutableRange).component3_7eebsa_k$ = function () {
    return this.end_1;
  };
  protoOf(MutableRange).component4_7eebs9_k$ = function () {
    return this.tag_1;
  };
  protoOf(MutableRange).copy_cu5jos_k$ = function (item, start, end, tag) {
    return new MutableRange(item, start, end, tag);
  };
  protoOf(MutableRange).copy$default_maj59_k$ = function (item, start, end, tag, $super) {
    item = item === VOID ? this.item_1 : item;
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    tag = tag === VOID ? this.tag_1 : tag;
    return $super === VOID ? this.copy_cu5jos_k$(item, start, end, tag) : $super.copy_cu5jos_k$.call(this, item, start, end, tag);
  };
  protoOf(MutableRange).toString = function () {
    return 'MutableRange(item=' + this.item_1 + ', start=' + this.start_1 + ', end=' + this.end_1 + ', tag=' + this.tag_1 + ')';
  };
  protoOf(MutableRange).hashCode = function () {
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + this.start_1 | 0;
    result = imul(result, 31) + this.end_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.tag_1) | 0;
    return result;
  };
  protoOf(MutableRange).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MutableRange))
      return false;
    var tmp0_other_with_cast = other instanceof MutableRange ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!(this.start_1 === tmp0_other_with_cast.start_1))
      return false;
    if (!(this.end_1 === tmp0_other_with_cast.end_1))
      return false;
    if (!(this.tag_1 === tmp0_other_with_cast.tag_1))
      return false;
    return true;
  };
  function _get_text__de5ose($this) {
    return $this.text_1;
  }
  function _get_spanStyles__69finz($this) {
    return $this.spanStyles_1;
  }
  function _get_paragraphStyles__eun5lt($this) {
    return $this.paragraphStyles_1;
  }
  function _get_annotations__virbvx($this) {
    return $this.annotations_1;
  }
  function _get_styleStack__yy45qs($this) {
    return $this.styleStack_1;
  }
  function Builder_init_$Init$(text, $this) {
    Builder.call($this);
    $this.append_r87ivk_k$(text);
    return $this;
  }
  function Builder_init_$Create$(text) {
    return Builder_init_$Init$(text, objectCreate(protoOf(Builder)));
  }
  function Builder_init_$Init$_0(text, $this) {
    Builder.call($this);
    $this.append_fd4yh7_k$(text);
    return $this;
  }
  function Builder_init_$Create$_0(text) {
    return Builder_init_$Init$_0(text, objectCreate(protoOf(Builder)));
  }
  function get_$stableprop_0() {
    return 0;
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (paragraphStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = paragraphStyles;
    }
    paragraphStyles = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (spanStyles.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = spanStyles;
    }
    var tmp_2 = tmp_1;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_3;
    if (paragraphStyles.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_3 = null;
    } else {
      tmp_3 = paragraphStyles;
    }
    var tmp$ret$5 = tmp_3;
    AnnotatedString.call($this, text, tmp_2, tmp$ret$5, null);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles) {
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.item_1 = item;
    this.start_1 = start;
    this.end_1 = end;
    this.tag_1 = tag;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.start_1 <= this.end_1)) {
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      var message = 'Reversed range is not supported';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.$stable_1 = 0;
  }
  protoOf(Range).get_item_woo5lo_k$ = function () {
    return this.item_1;
  };
  protoOf(Range).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Range).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Range).get_tag_18ivnz_k$ = function () {
    return this.tag_1;
  };
  protoOf(Range).component1_7eebsc_k$ = function () {
    return this.item_1;
  };
  protoOf(Range).component2_7eebsb_k$ = function () {
    return this.start_1;
  };
  protoOf(Range).component3_7eebsa_k$ = function () {
    return this.end_1;
  };
  protoOf(Range).component4_7eebs9_k$ = function () {
    return this.tag_1;
  };
  protoOf(Range).copy_cu5jos_k$ = function (item, start, end, tag) {
    return new Range(item, start, end, tag);
  };
  protoOf(Range).copy$default_a57cke_k$ = function (item, start, end, tag, $super) {
    item = item === VOID ? this.item_1 : item;
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    tag = tag === VOID ? this.tag_1 : tag;
    return $super === VOID ? this.copy_cu5jos_k$(item, start, end, tag) : $super.copy_cu5jos_k$.call(this, item, start, end, tag);
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + this.item_1 + ', start=' + this.start_1 + ', end=' + this.end_1 + ', tag=' + this.tag_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.item_1 == null ? 0 : hashCode(this.item_1);
    result = imul(result, 31) + this.start_1 | 0;
    result = imul(result, 31) + this.end_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.tag_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.item_1, tmp0_other_with_cast.item_1))
      return false;
    if (!(this.start_1 === tmp0_other_with_cast.start_1))
      return false;
    if (!(this.end_1 === tmp0_other_with_cast.end_1))
      return false;
    if (!(this.tag_1 === tmp0_other_with_cast.tag_1))
      return false;
    return true;
  };
  function Builder(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    this.text_1 = StringBuilder_init_$Create$(capacity);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.spanStyles_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.paragraphStyles_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.annotations_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.styleStack_1 = ArrayList_init_$Create$();
    this.$stable_1 = 0;
  }
  protoOf(Builder).get_length_g42xv3_k$ = function () {
    return this.text_1.get_length_g42xv3_k$();
  };
  protoOf(Builder).append_r87ivk_k$ = function (text) {
    this.text_1.append_22ad7x_k$(text);
  };
  protoOf(Builder).deprecated_append_returning_void_u24qjh_k$ = function (char) {
    this.append_am5a4z_k$(char);
  };
  protoOf(Builder).append_jgojdo_k$ = function (text) {
    if (text instanceof AnnotatedString) {
      this.append_fd4yh7_k$(text);
    } else {
      this.text_1.append_jgojdo_k$(text);
    }
    return this;
  };
  protoOf(Builder).append_xdc1zw_k$ = function (text, start, end) {
    if (text instanceof AnnotatedString) {
      this.append_6at0zv_k$(text, start, end);
    } else {
      this.text_1.append_xdc1zw_k$(text, start, end);
    }
    return this;
  };
  protoOf(Builder).append_am5a4z_k$ = function (char) {
    this.text_1.append_am5a4z_k$(char);
    return this;
  };
  protoOf(Builder).append_fd4yh7_k$ = function (text) {
    var start = this.text_1.get_length_g42xv3_k$();
    this.text_1.append_22ad7x_k$(text.text_1);
    var tmp0_safe_receiver = text.spanStylesOrNull_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.addStyle_pwdtsp_k$(item.item_1, start + item.start_1 | 0, start + item.end_1 | 0);
        }
         while (inductionVariable <= last);
    }
    var tmp1_safe_receiver = text.paragraphStylesOrNull_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_safe_receiver.get_c1px32_k$(index_0);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.addStyle_7tgxpx_k$(item_0.item_1, start + item_0.start_1 | 0, start + item_0.end_1 | 0);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp2_safe_receiver = text.annotations_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp2_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_1 = tmp2_safe_receiver.get_c1px32_k$(index_1);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.annotations_1.add_utx5q5_k$(new MutableRange(item_1.item_1, start + item_1.start_1 | 0, start + item_1.end_1 | 0, item_1.tag_1));
        }
         while (inductionVariable_1 <= last_1);
    }
  };
  protoOf(Builder).append_6at0zv_k$ = function (text, start, end) {
    var insertionStart = this.text_1.get_length_g42xv3_k$();
    this.text_1.append_xdc1zw_k$(text.text_1, start, end);
    var tmp0_safe_receiver = getLocalSpanStyles(text, start, end);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.addStyle_pwdtsp_k$(item.item_1, insertionStart + item.start_1 | 0, insertionStart + item.end_1 | 0);
        }
         while (inductionVariable <= last);
    }
    var tmp1_safe_receiver = getLocalParagraphStyles(text, start, end);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_safe_receiver.get_c1px32_k$(index_0);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.addStyle_7tgxpx_k$(item_0.item_1, insertionStart + item_0.start_1 | 0, insertionStart + item_0.end_1 | 0);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp2_safe_receiver = getLocalAnnotations(text, start, end);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp2_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_1 = tmp2_safe_receiver.get_c1px32_k$(index_1);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.annotations_1.add_utx5q5_k$(new MutableRange(item_1.item_1, insertionStart + item_1.start_1 | 0, insertionStart + item_1.end_1 | 0, item_1.tag_1));
        }
         while (inductionVariable_1 <= last_1);
    }
  };
  protoOf(Builder).addStyle_pwdtsp_k$ = function (style, start, end) {
    this.spanStyles_1.add_utx5q5_k$(new MutableRange(style, start, end));
  };
  protoOf(Builder).addStyle_7tgxpx_k$ = function (style, start, end) {
    this.paragraphStyles_1.add_utx5q5_k$(new MutableRange(style, start, end));
  };
  protoOf(Builder).addStringAnnotation_kxj1ht_k$ = function (tag, annotation, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(annotation, start, end, tag));
  };
  protoOf(Builder).addTtsAnnotation_d5tlel_k$ = function (ttsAnnotation, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(ttsAnnotation, start, end));
  };
  protoOf(Builder).addUrlAnnotation_x1fod9_k$ = function (urlAnnotation, start, end) {
    this.annotations_1.add_utx5q5_k$(new MutableRange(urlAnnotation, start, end));
  };
  protoOf(Builder).pushStyle_sz43ky_k$ = function (style) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(style, this.text_1.get_length_g42xv3_k$());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushStyle.<anonymous>' call
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.spanStyles_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pushStyle_rt8dry_k$ = function (style) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(style, this.text_1.get_length_g42xv3_k$());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushStyle.<anonymous>' call
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.paragraphStyles_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pushStringAnnotation_pqhe92_k$ = function (tag, annotation) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(annotation, this.text_1.get_length_g42xv3_k$(), VOID, tag);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushStringAnnotation.<anonymous>' call
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pushTtsAnnotation_cblj70_k$ = function (ttsAnnotation) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(ttsAnnotation, this.text_1.get_length_g42xv3_k$());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushTtsAnnotation.<anonymous>' call
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pushUrlAnnotation_hldbf8_k$ = function (urlAnnotation) {
    // Inline function 'kotlin.also' call
    var this_0 = new MutableRange(urlAnnotation, this.text_1.get_length_g42xv3_k$());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.Builder.pushUrlAnnotation.<anonymous>' call
    this.styleStack_1.add_utx5q5_k$(this_0);
    this.annotations_1.add_utx5q5_k$(this_0);
    return this.styleStack_1.get_size_woubt6_k$() - 1 | 0;
  };
  protoOf(Builder).pop_6ozo1t_k$ = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.styleStack_1.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.ui.text.Builder.pop.<anonymous>' call
      var message = 'Nothing to pop.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var item = this.styleStack_1.removeAt_6niowx_k$(this.styleStack_1.get_size_woubt6_k$() - 1 | 0);
    item.end_1 = this.text_1.get_length_g42xv3_k$();
  };
  protoOf(Builder).pop_r53bx3_k$ = function (index) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index < this.styleStack_1.get_size_woubt6_k$())) {
      // Inline function 'androidx.compose.ui.text.Builder.pop.<anonymous>' call
      var message = '' + index + ' should be less than ' + this.styleStack_1.get_size_woubt6_k$();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    while ((this.styleStack_1.get_size_woubt6_k$() - 1 | 0) >= index) {
      this.pop_6ozo1t_k$();
    }
  };
  protoOf(Builder).toAnnotatedString_yesz4e_k$ = function () {
    var tmp = this.text_1.toString();
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = this.spanStyles_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var element = item.toRange_d5re6u_k$(this.text_1.get_length_g42xv3_k$());
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    var tmp_0;
    if (target.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_0 = null;
    } else {
      tmp_0 = target;
    }
    var tmp_1 = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = this.paragraphStyles_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(this_1.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var element_0 = item_0.toRange_d5re6u_k$(this.text_1.get_length_g42xv3_k$());
        target_0.add_utx5q5_k$(element_0);
      }
       while (inductionVariable_0 <= last_0);
    var tmp_2;
    if (target_0.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_2 = null;
    } else {
      tmp_2 = target_0;
    }
    var tmp_3 = tmp_2;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_2 = this.annotations_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_1 = ArrayList_init_$Create$_0(this_2.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    var last_1 = this_2.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = this_2.get_c1px32_k$(index_1);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var element_1 = item_1.toRange_d5re6u_k$(this.text_1.get_length_g42xv3_k$());
        target_1.add_utx5q5_k$(element_1);
      }
       while (inductionVariable_1 <= last_1);
    var tmp_4;
    if (target_1.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_4 = null;
    } else {
      tmp_4 = target_1;
    }
    var tmp$ret$11 = tmp_4;
    return new AnnotatedString(tmp, tmp_1, tmp_3, tmp$ret$11);
  };
  function get_$stableprop_1() {
    return 0;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp = a.start_1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp$ret$1 = b.start_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(text, spanStylesOrNull, paragraphStylesOrNull, annotations) {
    spanStylesOrNull = spanStylesOrNull === VOID ? null : spanStylesOrNull;
    paragraphStylesOrNull = paragraphStylesOrNull === VOID ? null : paragraphStylesOrNull;
    annotations = annotations === VOID ? null : annotations;
    this.text_1 = text;
    this.spanStylesOrNull_1 = spanStylesOrNull;
    this.paragraphStylesOrNull_1 = paragraphStylesOrNull;
    this.annotations_1 = annotations;
    var lastStyleEnd = -1;
    var tmp0_safe_receiver = this.paragraphStylesOrNull_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = AnnotatedString$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_0);
      tmp = sortedWith(tmp0_safe_receiver, tmp$ret$0);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_safe_receiver.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.start_1 >= lastStyleEnd)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message = 'ParagraphStyle should not overlap';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.end_1 <= this.text_1.length)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message_0 = 'ParagraphStyle range [' + item.start_1 + ', ' + item.end_1 + ')' + ' is out of boundary';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          lastStyleEnd = item.end_1;
        }
         while (inductionVariable <= last);
    }
    this.$stable_1 = 0;
  }
  protoOf(AnnotatedString).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(AnnotatedString).get_spanStylesOrNull_n7djnj_k$ = function () {
    return this.spanStylesOrNull_1;
  };
  protoOf(AnnotatedString).get_paragraphStylesOrNull_uo51bl_k$ = function () {
    return this.paragraphStylesOrNull_1;
  };
  protoOf(AnnotatedString).get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  protoOf(AnnotatedString).get_spanStyles_muoq3_k$ = function () {
    var tmp0_elvis_lhs = this.spanStylesOrNull_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).get_paragraphStyles_29kgs9_k$ = function () {
    var tmp0_elvis_lhs = this.paragraphStylesOrNull_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).get_length_g42xv3_k$ = function () {
    return this.text_1.length;
  };
  protoOf(AnnotatedString).get_kdzpvg_k$ = function (index) {
    return charSequenceGet(this.text_1, index);
  };
  protoOf(AnnotatedString).subSequence_hm5hnj_k$ = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startIndex <= endIndex)) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      var message = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 ? endIndex === this.text_1.length : false)
      return this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var text = this.text_1.substring(startIndex, endIndex);
    return new AnnotatedString(text, filterRanges(this.spanStylesOrNull_1, startIndex, endIndex), filterRanges(this.paragraphStylesOrNull_1, startIndex, endIndex), filterRanges(this.annotations_1, startIndex, endIndex));
  };
  protoOf(AnnotatedString).subSequence_lx5l5t_k$ = function (range) {
    return this.subSequence_hm5hnj_k$(_TextRange___get_min__impl__uu95c4(range), _TextRange___get_max__impl__owm8m(range));
  };
  protoOf(AnnotatedString).plus_hc879h_k$ = function (other) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.plus.<anonymous>' call
    var $this$with = Builder_init_$Create$_0(this);
    $this$with.append_fd4yh7_k$(other);
    return $this$with.toAnnotatedString_yesz4e_k$();
  };
  protoOf(AnnotatedString).getStringAnnotations_8p6ry5_k$ = function (tag, start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.AnnotatedString.getStringAnnotations.<anonymous>' call
          var tmp_0;
          var tmp_1;
          var tmp_2 = item.item_1;
          if (typeof tmp_2 === 'string') {
            tmp_1 = tag === item.tag_1;
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp_0 = intersect(start, end, item.start_1, item.end_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            target.add_utx5q5_k$(item);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_3 = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    return isInterface(tmp_3, List) ? tmp_3 : THROW_CCE();
  };
  protoOf(AnnotatedString).hasStringAnnotations_89kqwx_k$ = function (tag, start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.get_c1px32_k$(index);
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.AnnotatedString.hasStringAnnotations.<anonymous>' call
            var tmp_0;
            var tmp_1;
            var tmp_2 = item.item_1;
            if (typeof tmp_2 === 'string') {
              tmp_1 = tag === item.tag_1;
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp_0 = intersect(start, end, item.start_1, item.end_1);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(AnnotatedString).getStringAnnotations_p85zqb_k$ = function (start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.AnnotatedString.getStringAnnotations.<anonymous>' call
          var tmp_0;
          var tmp_1 = item.item_1;
          if (typeof tmp_1 === 'string') {
            tmp_0 = intersect(start, end, item.start_1, item.end_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            target.add_utx5q5_k$(item);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2 = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    return isInterface(tmp_2, List) ? tmp_2 : THROW_CCE();
  };
  protoOf(AnnotatedString).getTtsAnnotations_6d58tj_k$ = function (start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.AnnotatedString.getTtsAnnotations.<anonymous>' call
          var tmp_0;
          var tmp_1 = item.item_1;
          if (tmp_1 instanceof TtsAnnotation) {
            tmp_0 = intersect(start, end, item.start_1, item.end_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            target.add_utx5q5_k$(item);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2 = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    return isInterface(tmp_2, List) ? tmp_2 : THROW_CCE();
  };
  protoOf(AnnotatedString).getUrlAnnotations_c2y223_k$ = function (start, end) {
    var tmp0_safe_receiver = this.annotations_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(tmp0_safe_receiver.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.AnnotatedString.getUrlAnnotations.<anonymous>' call
          var tmp_0;
          var tmp_1 = item.item_1;
          if (tmp_1 instanceof UrlAnnotation) {
            tmp_0 = intersect(start, end, item.start_1, item.end_1);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.plusAssign' call
            target.add_utx5q5_k$(item);
          }
        }
         while (inductionVariable <= last);
      tmp = target;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_2 = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    return isInterface(tmp_2, List) ? tmp_2 : THROW_CCE();
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.text_1 === other.text_1))
      return false;
    if (!equals(this.spanStylesOrNull_1, other.spanStylesOrNull_1))
      return false;
    if (!equals(this.paragraphStylesOrNull_1, other.paragraphStylesOrNull_1))
      return false;
    if (!equals(this.annotations_1, other.annotations_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.text_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.spanStylesOrNull_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.paragraphStylesOrNull_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.annotations_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.text_1;
  };
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start <= end)) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      var message = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (ranges == null) {
      return null;
    } else {
      tmp = ranges;
    }
    var nonNullRange = tmp;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(nonNullRange.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nonNullRange.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        if (intersect(start, end, item.start_1, item.end_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = item_0.start_1;
        var tmp_0 = Math.max(start, b) - start | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = item_0.end_1;
        var tmp$ret$4 = Math.min(end, b_0);
        var element = new Range(item_0.item_1, tmp_0, tmp$ret$4 - start | 0, item_0.tag_1);
        target_0.add_utx5q5_k$(element);
      }
       while (inductionVariable_0 <= last_0);
    var tmp_1;
    if (target_0.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = target_0;
    }
    return tmp_1;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp_1 = Math.max(lStart, rStart);
    // Inline function 'kotlin.comparisons.minOf' call
    if (tmp_1 < Math.min(lEnd, rEnd)) {
      tmp_0 = true;
    } else {
      tmp_0 = contains(lStart, lEnd, rStart, rEnd);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = contains(rStart, rEnd, lStart, lEnd);
    }
    return tmp;
  }
  function getLocalSpanStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.spanStylesOrNull_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spanStyles = tmp;
    if (start === 0 ? end >= _this__u8e3s4.text_1.length : false) {
      return spanStyles;
    }
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(spanStyles.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = spanStyles.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = spanStyles.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        if (intersect(start, end, item.start_1, item.end_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        var element = Range_init_$Create$(item_0.item_1, coerceIn(item_0.start_1, start, end) - start | 0, coerceIn(item_0.end_1, start, end) - start | 0);
        target_0.add_utx5q5_k$(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function getLocalParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.paragraphStylesOrNull_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var paragraphStyles = tmp;
    if (start === 0 ? end >= _this__u8e3s4.text_1.length : false) {
      return paragraphStyles;
    }
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(paragraphStyles.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalParagraphStyles.<anonymous>' call
        if (intersect(start, end, item.start_1, item.end_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalParagraphStyles.<anonymous>' call
        var element = Range_init_$Create$(item_0.item_1, coerceIn(item_0.start_1, start, end) - start | 0, coerceIn(item_0.end_1, start, end) - start | 0);
        target_0.add_utx5q5_k$(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function getLocalAnnotations(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.annotations_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var annotations = tmp;
    if (start === 0 ? end >= _this__u8e3s4.text_1.length : false) {
      return annotations;
    }
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(annotations.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = annotations.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = annotations.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalAnnotations.<anonymous>' call
        if (intersect(start, end, item.start_1, item.end_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalAnnotations.<anonymous>' call
        var tmp0_tag = item_0.tag_1;
        var tmp1_item = item_0.item_1;
        var tmp2_start = coerceIn(item_0.start_1, start, end) - start | 0;
        var tmp3_end = coerceIn(item_0.end_1, start, end) - start | 0;
        var element = new Range(tmp1_item, tmp2_start, tmp3_end, tmp0_tag);
        target_0.add_utx5q5_k$(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return (baseStart <= targetStart ? targetEnd <= baseEnd : false) ? !(baseEnd === targetEnd) ? true : targetStart === targetEnd === (baseStart === baseEnd) : false;
  }
  function mapEachParagraphStyle(_this__u8e3s4, defaultParagraphStyle, block) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString = substringWithoutParagraphStyles(_this__u8e3s4, item.start_1, item.end_1);
        var element = block(annotatedString, item);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (!(start === end)) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.text_1.substring(start, end);
    } else {
      tmp = '';
    }
    return new AnnotatedString(tmp, getLocalSpanStyles(_this__u8e3s4, start, end));
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var length = _this__u8e3s4.text_1.length;
    var tmp0_elvis_lhs = _this__u8e3s4.paragraphStylesOrNull_1;
    var paragraphStyles = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var lastOffset = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.component1_7eebsc_k$();
        var start = item.component2_7eebsb_k$();
        var end = item.component3_7eebsa_k$();
        if (!(start === lastOffset)) {
          result.add_utx5q5_k$(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.add_utx5q5_k$(Range_init_$Create$(defaultParagraphStyle.merge_desd12_k$(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.add_utx5q5_k$(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.isEmpty_y1axqb_k$()) {
      result.add_utx5q5_k$(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  function emptyAnnotatedString() {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return get_EmptyAnnotatedString();
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (!properties_initialized_AnnotatedString_kt_um06op) {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
    }
  }
  function ExperimentalTextApi() {
  }
  protoOf(ExperimentalTextApi).equals = function (other) {
    if (!(other instanceof ExperimentalTextApi))
      return false;
    other instanceof ExperimentalTextApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalTextApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalTextApi).toString = function () {
    return '@androidx.compose.ui.text.ExperimentalTextApi()';
  };
  function InternalTextApi() {
  }
  protoOf(InternalTextApi).equals = function (other) {
    if (!(other instanceof InternalTextApi))
      return false;
    other instanceof InternalTextApi || THROW_CCE();
    return true;
  };
  protoOf(InternalTextApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalTextApi).toString = function () {
    return '@androidx.compose.ui.text.InternalTextApi()';
  };
  function MultiParagraph_init_$Init$(intrinsics, maxLines, ellipsis, width, $this) {
    maxLines = maxLines === VOID ? get_DefaultMaxLines() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    MultiParagraph.call($this, intrinsics, Constraints(VOID, ceilToInt(width)), maxLines, ellipsis);
    return $this;
  }
  function MultiParagraph_init_$Create$(intrinsics, maxLines, ellipsis, width) {
    return MultiParagraph_init_$Init$(intrinsics, maxLines, ellipsis, width, objectCreate(protoOf(MultiParagraph)));
  }
  function MultiParagraph_init_$Init$_0(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, $this) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, createFontFamilyResolver(resourceLoader));
    var tmp1_constraints = Constraints(VOID, ceilToInt(width));
    MultiParagraph.call($this, tmp0_intrinsics, tmp1_constraints, maxLines, ellipsis);
    return $this;
  }
  function MultiParagraph_init_$Create$_0(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader) {
    return MultiParagraph_init_$Init$_0(annotatedString, style, placeholders, maxLines, ellipsis, width, density, resourceLoader, objectCreate(protoOf(MultiParagraph)));
  }
  function MultiParagraph_init_$Init$_1(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver);
    var tmp1_constraints = Constraints(VOID, ceilToInt(width));
    MultiParagraph.call($this, tmp0_intrinsics, tmp1_constraints, maxLines, ellipsis);
    return $this;
  }
  function MultiParagraph_init_$Create$_1(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis) {
    return MultiParagraph_init_$Init$_1(annotatedString, style, width, density, fontFamilyResolver, placeholders, maxLines, ellipsis, objectCreate(protoOf(MultiParagraph)));
  }
  function MultiParagraph_init_$Init$_2(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, $this) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    var tmp0_intrinsics = new MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver);
    MultiParagraph.call($this, tmp0_intrinsics, constraints, maxLines, ellipsis);
    return $this;
  }
  function MultiParagraph_init_$Create$_2(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis) {
    return MultiParagraph_init_$Init$_2(annotatedString, style, constraints, density, fontFamilyResolver, placeholders, maxLines, ellipsis, objectCreate(protoOf(MultiParagraph)));
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.intrinsics_1.get_annotatedString_5pdwrk_k$();
  }
  function requireIndexInRange($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= (charSequenceLength(_get_annotatedString__kqljtk($this).get_text_wouvsm_k$()) - 1 | 0) : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRange.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).get_length_g42xv3_k$() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).get_text_wouvsm_k$().length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRangeInclusiveEnd.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).get_length_g42xv3_k$() + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= lineIndex ? lineIndex < $this.lineCount_1 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      var message = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.lineCount_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function get_$stableprop_2() {
    return 0;
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? get_DefaultMaxLines() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    this.intrinsics_1 = intrinsics;
    this.maxLines_1 = maxLines;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
      var message = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    // Inline function 'kotlin.collections.mutableListOf' call
    var paragraphInfoList = ArrayList_init_$Create$();
    var infoList = this.intrinsics_1.get_infoList_sv4zbf_k$();
    var inductionVariable = 0;
    var last = infoList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.get_c1px32_k$(index);
        var tmp = paragraphInfo.get_intrinsics_1zqd0p_k$();
        var tmp_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_1;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_1 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(tmp, Constraints(VOID, tmp_0, VOID, tmp_1), this.maxLines_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.get_height_e7t92o_k$();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.get_lineCount_lmaazy_k$() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.add_utx5q5_k$(new ParagraphInfo(paragraph, paragraphInfo.get_startIndex_oi1lp5_k$(), paragraphInfo.get_endIndex_3lslfk_k$(), startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.get_didExceedMaxLines_xyxo57_k$() ? true : endLineIndex === this.maxLines_1 ? !(index === get_lastIndex(this.intrinsics_1.get_infoList_sv4zbf_k$())) : false) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.height_1 = currentHeight;
    this.lineCount_1 = currentLineCount;
    this.didExceedMaxLines_1 = didExceedMaxLines;
    this.paragraphInfoList_1 = paragraphInfoList;
    this.width_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(paragraphInfoList.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.text.fastFlatMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.paragraph_1.get_placeholderRects_1ky2fv_k$();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.get_c1px32_k$(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var element = item_0 == null ? null : item.toGlobal_ggfqs3_k$(item_0);
            target_0.add_utx5q5_k$(element);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
    var tmp_3;
    if (target.get_size_woubt6_k$() < this.intrinsics_1.get_placeholders_r4ppyh_k$().get_size_woubt6_k$()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.intrinsics_1.get_placeholders_r4ppyh_k$().get_size_woubt6_k$() - target.get_size_woubt6_k$() | 0;
      var list_0 = ArrayList_init_$Create$_0(size);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < size)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
          list_0.add_utx5q5_k$(null);
        }
         while (inductionVariable_2 < size);
      tmp_3 = plus(target, list_0);
    } else {
      tmp_3 = target;
    }
    tmp_2.placeholderRects_1 = tmp_3;
    this.$stable_1 = 0;
  }
  protoOf(MultiParagraph).get_intrinsics_1zqd0p_k$ = function () {
    return this.intrinsics_1;
  };
  protoOf(MultiParagraph).get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  protoOf(MultiParagraph).get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return this.intrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
  };
  protoOf(MultiParagraph).get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return this.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
  };
  protoOf(MultiParagraph).get_didExceedMaxLines_xyxo57_k$ = function () {
    return this.didExceedMaxLines_1;
  };
  protoOf(MultiParagraph).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(MultiParagraph).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(MultiParagraph).get_firstBaseline_s5430_k$ = function () {
    var tmp;
    if (this.paragraphInfoList_1.isEmpty_y1axqb_k$()) {
      tmp = 0.0;
    } else {
      tmp = this.paragraphInfoList_1.get_c1px32_k$(0).paragraph_1.get_firstBaseline_s5430_k$();
    }
    return tmp;
  };
  protoOf(MultiParagraph).get_lastBaseline_inuptw_k$ = function () {
    var tmp;
    if (this.paragraphInfoList_1.isEmpty_y1axqb_k$()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      var $this$with = last(this.paragraphInfoList_1);
      tmp = $this$with.toGlobalYPosition_9oxm7u_k$($this$with.paragraph_1.get_lastBaseline_inuptw_k$());
    }
    return tmp;
  };
  protoOf(MultiParagraph).get_lineCount_lmaazy_k$ = function () {
    return this.lineCount_1;
  };
  protoOf(MultiParagraph).get_placeholderRects_1ky2fv_k$ = function () {
    return this.placeholderRects_1;
  };
  protoOf(MultiParagraph).get_paragraphInfoList_5kk1wv_k$ = function () {
    return this.paragraphInfoList_1;
  };
  protoOf(MultiParagraph).paint_xx9kwo_k$ = function (canvas, color, shadow, decoration) {
    canvas.save_fbe7h_k$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.paragraphInfoList_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.paragraph_1.paint_xx9kwo_k$(canvas, color, shadow, decoration);
        canvas.translate_7gghdu_k$(0.0, item.paragraph_1.get_height_e7t92o_k$());
      }
       while (inductionVariable <= last);
    canvas.restore_a1ykhu_k$();
  };
  protoOf(MultiParagraph).paint$default_nn0zo6_k$ = function (canvas, color, shadow, decoration, $super) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    var tmp;
    if ($super === VOID) {
      this.paint_xx9kwo_k$(canvas, color, shadow, decoration);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_xx9kwo_k$.call(this, canvas, new Color(color), shadow, decoration);
    }
    return tmp;
  };
  protoOf(MultiParagraph).paint_qj08y1_k$ = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.save_fbe7h_k$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.paragraphInfoList_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.paragraph_1.paint_qj08y1_k$(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.translate_7gghdu_k$(0.0, item.paragraph_1.get_height_e7t92o_k$());
      }
       while (inductionVariable <= last);
    canvas.restore_a1ykhu_k$();
  };
  protoOf(MultiParagraph).paint$default_rvqyft_k$ = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp;
    if ($super === VOID) {
      this.paint_qj08y1_k$(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_qj08y1_k$.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).paint_t6aqss_k$ = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).paint$default_3gfbfa_k$ = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? FloatCompanionObject_getInstance().get_NaN_18jnv2_k$() : alpha;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp;
    if ($super === VOID) {
      this.paint_t6aqss_k$(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.paint_t6aqss_k$.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).getPathForRange_bge8b5_k$ = function (start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= start ? start <= end : false) ? end <= _get_annotatedString__kqljtk(this).get_text_wouvsm_k$().length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      var message = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).get_text_wouvsm_k$().length + '),' + ' or start > end!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var paragraphIndex = findParagraphByIndex(this.paragraphInfoList_1, start);
    var path = Path();
    var inductionVariable = paragraphIndex;
    var last = this.paragraphInfoList_1.get_size_woubt6_k$();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var p = this.paragraphInfoList_1.get_c1px32_k$(i);
        if (p.startIndex_1 >= end)
          break $l$loop_0;
        if (p.startIndex_1 === p.endIndex_1)
          continue $l$loop_0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        path.addPath$default_lo4vd5_k$(p.toGlobal_315jad_k$(p.paragraph_1.getPathForRange_bge8b5_k$(p.toLocalIndex_j164i0_k$(start), p.toLocalIndex_j164i0_k$(end))));
      }
       while (inductionVariable < last);
    return path;
  };
  protoOf(MultiParagraph).getLineForVerticalPosition_lon9k6_k$ = function (vertical) {
    var paragraphIndex = vertical <= 0.0 ? 0 : vertical >= this.height_1 ? get_lastIndex(this.paragraphInfoList_1) : findParagraphByY(this.paragraphInfoList_1, vertical);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    var tmp;
    if ($this$with.get_length_g42xv3_k$() === 0) {
      // Inline function 'kotlin.math.max' call
      var b = $this$with.startIndex_1 - 1 | 0;
      tmp = Math.max(0, b);
    } else {
      tmp = $this$with.toGlobalLineIndex_e3lmay_k$($this$with.paragraph_1.getLineForVerticalPosition_lon9k6_k$($this$with.toLocalYPosition_dpfuyg_k$(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).getOffsetForPosition_12t0zj_k$ = function (position) {
    var paragraphIndex = _Offset___get_y__impl__8bzhra(position) <= 0.0 ? 0 : _Offset___get_y__impl__8bzhra(position) >= this.height_1 ? get_lastIndex(this.paragraphInfoList_1) : findParagraphByY(this.paragraphInfoList_1, _Offset___get_y__impl__8bzhra(position));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getOffsetForPosition.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    var tmp;
    if ($this$with.get_length_g42xv3_k$() === 0) {
      // Inline function 'kotlin.math.max' call
      var b = $this$with.startIndex_1 - 1 | 0;
      tmp = Math.max(0, b);
    } else {
      tmp = $this$with.toGlobalIndex_3l3mdy_k$($this$with.paragraph_1.getOffsetForPosition_12t0zj_k$($this$with.toLocal_4j1wri_k$(position)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).getBoundingBox_xfho9l_k$ = function (offset) {
    requireIndexInRange(this, offset);
    var paragraphIndex = findParagraphByIndex(this.paragraphInfoList_1, offset);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBoundingBox.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobal_ggfqs3_k$($this$with.paragraph_1.getBoundingBox_xfho9l_k$($this$with.toLocalIndex_j164i0_k$(offset)));
  };
  protoOf(MultiParagraph).getHorizontalPosition_9mx7bk_k$ = function (offset, usePrimaryDirection) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getHorizontalPosition.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getHorizontalPosition_9mx7bk_k$($this$with.toLocalIndex_j164i0_k$(offset), usePrimaryDirection);
  };
  protoOf(MultiParagraph).getParagraphDirection_qweb73_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getParagraphDirection.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getParagraphDirection_qweb73_k$($this$with.toLocalIndex_j164i0_k$(offset));
  };
  protoOf(MultiParagraph).getBidiRunDirection_c67d8i_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBidiRunDirection.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getBidiRunDirection_c67d8i_k$($this$with.toLocalIndex_j164i0_k$(offset));
  };
  protoOf(MultiParagraph).getWordBoundary_s8pru_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getWordBoundary.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobal_55nchu_k$($this$with.paragraph_1.getWordBoundary_s8pru_k$($this$with.toLocalIndex_j164i0_k$(offset)));
  };
  protoOf(MultiParagraph).getCursorRect_gdluko_k$ = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getCursorRect.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobal_ggfqs3_k$($this$with.paragraph_1.getCursorRect_gdluko_k$($this$with.toLocalIndex_j164i0_k$(offset)));
  };
  protoOf(MultiParagraph).getLineForOffset_jakwx2_k$ = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).get_length_g42xv3_k$()) {
      tmp = get_lastIndex(this.paragraphInfoList_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.paragraphInfoList_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForOffset.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalLineIndex_e3lmay_k$($this$with.paragraph_1.getLineForOffset_jakwx2_k$($this$with.toLocalIndex_j164i0_k$(offset)));
  };
  protoOf(MultiParagraph).getLineLeft_799m07_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineLeft.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getLineLeft_799m07_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex));
  };
  protoOf(MultiParagraph).getLineRight_j8rtqe_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineRight.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getLineRight_j8rtqe_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex));
  };
  protoOf(MultiParagraph).getLineTop_q0a6r_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalYPosition_9oxm7u_k$($this$with.paragraph_1.getLineTop_q0a6r_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex)));
  };
  protoOf(MultiParagraph).getLineBottom_yhu6bn_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineBottom.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalYPosition_9oxm7u_k$($this$with.paragraph_1.getLineBottom_yhu6bn_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex)));
  };
  protoOf(MultiParagraph).getLineHeight_hm3g1l_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineHeight.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getLineHeight_hm3g1l_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex));
  };
  protoOf(MultiParagraph).getLineWidth_vd5x7g_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineWidth.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.paragraph_1.getLineWidth_vd5x7g_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex));
  };
  protoOf(MultiParagraph).getLineStart_clke9s_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineStart.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalIndex_3l3mdy_k$($this$with.paragraph_1.getLineStart_clke9s_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex)));
  };
  protoOf(MultiParagraph).getLineEnd_o6geci_k$ = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    var $this$with = this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex);
    return $this$with.toGlobalIndex_3l3mdy_k$($this$with.paragraph_1.getLineEnd_o6geci_k$($this$with.toLocalLineIndex_nunoc_k$(lineIndex), visibleEnd));
  };
  protoOf(MultiParagraph).getLineEnd$default_uw5hk_k$ = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.getLineEnd_o6geci_k$(lineIndex, visibleEnd) : $super.getLineEnd_o6geci_k$.call(this, lineIndex, visibleEnd);
  };
  protoOf(MultiParagraph).isLineEllipsized_1fausj_k$ = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.paragraphInfoList_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.isLineEllipsized.<anonymous>' call
    return this.paragraphInfoList_1.get_c1px32_k$(paragraphIndex).paragraph_1.isLineEllipsized_1fausj_k$(lineIndex);
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.paragraph_1 = paragraph;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
    this.startLineIndex_1 = startLineIndex;
    this.endLineIndex_1 = endLineIndex;
    this.top_1 = top;
    this.bottom_1 = bottom;
  }
  protoOf(ParagraphInfo).get_paragraph_ua17wb_k$ = function () {
    return this.paragraph_1;
  };
  protoOf(ParagraphInfo).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(ParagraphInfo).get_endIndex_3lslfk_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(ParagraphInfo).set_startLineIndex_c38bz_k$ = function (_set____db54di) {
    this.startLineIndex_1 = _set____db54di;
  };
  protoOf(ParagraphInfo).get_startLineIndex_2jj8jf_k$ = function () {
    return this.startLineIndex_1;
  };
  protoOf(ParagraphInfo).set_endLineIndex_rmrqco_k$ = function (_set____db54di) {
    this.endLineIndex_1 = _set____db54di;
  };
  protoOf(ParagraphInfo).get_endLineIndex_wassus_k$ = function () {
    return this.endLineIndex_1;
  };
  protoOf(ParagraphInfo).set_top_q4a9n4_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(ParagraphInfo).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(ParagraphInfo).set_bottom_hrdqf4_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(ParagraphInfo).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(ParagraphInfo).get_length_g42xv3_k$ = function () {
    return this.endIndex_1 - this.startIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toLocalIndex_j164i0_k$ = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.startIndex_1, this.endIndex_1) - this.startIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toGlobalIndex_3l3mdy_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.startIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toLocalLineIndex_nunoc_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.startLineIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toGlobalLineIndex_e3lmay_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.startLineIndex_1 | 0;
  };
  protoOf(ParagraphInfo).toGlobalYPosition_9oxm7u_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.top_1;
  };
  protoOf(ParagraphInfo).toLocalYPosition_dpfuyg_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.top_1;
  };
  protoOf(ParagraphInfo).toLocal_4j1wri_k$ = function (_this__u8e3s4) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - this.top_1);
  };
  protoOf(ParagraphInfo).toGlobal_ggfqs3_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.translate_e972jg_k$(Offset(0.0, this.top_1));
  };
  protoOf(ParagraphInfo).toGlobal_315jad_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.translate_nzlwb0_k$(Offset(0.0, this.top_1));
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).toGlobal_55nchu_k$ = function (_this__u8e3s4) {
    return TextRange_0(this.toGlobalIndex_3l3mdy_k$(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.toGlobalIndex_3l3mdy_k$(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).component1_7eebsc_k$ = function () {
    return this.paragraph_1;
  };
  protoOf(ParagraphInfo).component2_7eebsb_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(ParagraphInfo).component3_7eebsa_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(ParagraphInfo).component4_7eebs9_k$ = function () {
    return this.startLineIndex_1;
  };
  protoOf(ParagraphInfo).component5_7eebs8_k$ = function () {
    return this.endLineIndex_1;
  };
  protoOf(ParagraphInfo).component6_7eebs7_k$ = function () {
    return this.top_1;
  };
  protoOf(ParagraphInfo).component7_7eebs6_k$ = function () {
    return this.bottom_1;
  };
  protoOf(ParagraphInfo).copy_dj5vo5_k$ = function (paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    return new ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
  };
  protoOf(ParagraphInfo).copy$default_s77fby_k$ = function (paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom, $super) {
    paragraph = paragraph === VOID ? this.paragraph_1 : paragraph;
    startIndex = startIndex === VOID ? this.startIndex_1 : startIndex;
    endIndex = endIndex === VOID ? this.endIndex_1 : endIndex;
    startLineIndex = startLineIndex === VOID ? this.startLineIndex_1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? this.endLineIndex_1 : endLineIndex;
    top = top === VOID ? this.top_1 : top;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    return $super === VOID ? this.copy_dj5vo5_k$(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) : $super.copy_dj5vo5_k$.call(this, paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom);
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + this.paragraph_1 + ', startIndex=' + this.startIndex_1 + ', endIndex=' + this.endIndex_1 + ', startLineIndex=' + this.startLineIndex_1 + ', endLineIndex=' + this.endLineIndex_1 + ', top=' + this.top_1 + ', bottom=' + this.bottom_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.paragraph_1);
    result = imul(result, 31) + this.startIndex_1 | 0;
    result = imul(result, 31) + this.endIndex_1 | 0;
    result = imul(result, 31) + this.startLineIndex_1 | 0;
    result = imul(result, 31) + this.endLineIndex_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.paragraph_1, tmp0_other_with_cast.paragraph_1))
      return false;
    if (!(this.startIndex_1 === tmp0_other_with_cast.startIndex_1))
      return false;
    if (!(this.endIndex_1 === tmp0_other_with_cast.endIndex_1))
      return false;
    if (!(this.startLineIndex_1 === tmp0_other_with_cast.startLineIndex_1))
      return false;
    if (!(this.endLineIndex_1 === tmp0_other_with_cast.endLineIndex_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.get_c1px32_k$(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        var cmp = midVal.startIndex_1 > index ? 1 : midVal.endIndex_1 <= index ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByY(paragraphInfoList, y) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.get_c1px32_k$(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        var cmp = midVal.top_1 > y ? 1 : midVal.bottom_1 <= y ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.get_size_woubt6_k$() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.get_c1px32_k$(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        var cmp = midVal.startLineIndex_1 > lineIndex ? 1 : midVal.endLineIndex_1 <= lineIndex ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function fastBinarySearch(_this__u8e3s4, comparison) {
    var low = 0;
    var high = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.get_c1px32_k$(mid);
      var cmp = comparison(midVal);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function MultiParagraphIntrinsics_init_$Init$(annotatedString, style, placeholders, density, resourceLoader, $this) {
    MultiParagraphIntrinsics.call($this, annotatedString, style, placeholders, density, createFontFamilyResolver(resourceLoader));
    return $this;
  }
  function MultiParagraphIntrinsics_init_$Create$(annotatedString, style, placeholders, density, resourceLoader) {
    return MultiParagraphIntrinsics_init_$Init$(annotatedString, style, placeholders, density, resourceLoader, objectCreate(protoOf(MultiParagraphIntrinsics)));
  }
  function resolveTextDirection($this, style, defaultStyle) {
    var tmp0_safe_receiver = style.get_textDirection_u2eu2k_k$();
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_1 = tmp0_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.resolveTextDirection.<anonymous>' call
      (tmp_1 == null ? null : new TextDirection(tmp_1)).value_1;
      tmp = style;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? style.copy$default_t7kri3_k$(VOID, defaultStyle.get_textDirection_u2eu2k_k$()) : tmp1_elvis_lhs;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.infoList_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.isEmpty_y1axqb_k$()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.get_c1px32_k$(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.intrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.get_c1px32_k$(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.intrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intrinsics_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_minIntrinsicWidth_lmc1rq_k$();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.infoList_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.isEmpty_y1axqb_k$()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.get_c1px32_k$(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.get_c1px32_k$(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.intrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intrinsics_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_maxIntrinsicWidth_b4gk2k_k$();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.annotatedString_1 = annotatedString;
    this.placeholders_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.minIntrinsicWidth$delegate_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.maxIntrinsicWidth$delegate_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.toParagraphStyle_zfuegy_k$();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.annotatedString_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_1.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(this_0, item.get_start_iypx6h_k$(), item.get_end_18j6ha_k$());
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.get_item_woo5lo_k$(), paragraphStyle);
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.get_text_wouvsm_k$(), style.merge_fo5h7n_k$(currentParagraphStyle), annotatedString_0.get_spanStyles_muoq3_k$(), getLocalPlaceholders(this.placeholders_1, item.get_start_iypx6h_k$(), item.get_end_18j6ha_k$()), density, fontFamilyResolver), item.get_start_iypx6h_k$(), item.get_end_18j6ha_k$());
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    tmp_3.infoList_1 = target;
    this.$stable_1 = 0;
  }
  protoOf(MultiParagraphIntrinsics).get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  protoOf(MultiParagraphIntrinsics).get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  protoOf(MultiParagraphIntrinsics).get_minIntrinsicWidth_lmc1rq_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.minIntrinsicWidth$delegate_1;
    minIntrinsicWidth$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MultiParagraphIntrinsics).get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.maxIntrinsicWidth$delegate_1;
    maxIntrinsicWidth$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MultiParagraphIntrinsics).get_infoList_sv4zbf_k$ = function () {
    return this.infoList_1;
  };
  protoOf(MultiParagraphIntrinsics).get_hasStaleResolvedFonts_tun9ic_k$ = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.infoList_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          if (item.intrinsics_1.get_hasStaleResolvedFonts_tun9ic_k$()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.intrinsics_1 = intrinsics;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).get_intrinsics_1zqd0p_k$ = function () {
    return this.intrinsics_1;
  };
  protoOf(ParagraphIntrinsicInfo).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(ParagraphIntrinsicInfo).get_endIndex_3lslfk_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(ParagraphIntrinsicInfo).component1_7eebsc_k$ = function () {
    return this.intrinsics_1;
  };
  protoOf(ParagraphIntrinsicInfo).component2_7eebsb_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(ParagraphIntrinsicInfo).component3_7eebsa_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(ParagraphIntrinsicInfo).copy_1myg2h_k$ = function (intrinsics, startIndex, endIndex) {
    return new ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex);
  };
  protoOf(ParagraphIntrinsicInfo).copy$default_6sahs3_k$ = function (intrinsics, startIndex, endIndex, $super) {
    intrinsics = intrinsics === VOID ? this.intrinsics_1 : intrinsics;
    startIndex = startIndex === VOID ? this.startIndex_1 : startIndex;
    endIndex = endIndex === VOID ? this.endIndex_1 : endIndex;
    return $super === VOID ? this.copy_1myg2h_k$(intrinsics, startIndex, endIndex) : $super.copy_1myg2h_k$.call(this, intrinsics, startIndex, endIndex);
  };
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + this.intrinsics_1 + ', startIndex=' + this.startIndex_1 + ', endIndex=' + this.endIndex_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.intrinsics_1);
    result = imul(result, 31) + this.startIndex_1 | 0;
    result = imul(result, 31) + this.endIndex_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.intrinsics_1, tmp0_other_with_cast.intrinsics_1))
      return false;
    if (!(this.startIndex_1 === tmp0_other_with_cast.startIndex_1))
      return false;
    if (!(this.endIndex_1 === tmp0_other_with_cast.endIndex_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        if (intersect(start, end, item.get_start_iypx6h_k$(), item.get_end_18j6ha_k$())) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(start <= item_0.get_start_iypx6h_k$() ? item_0.get_end_18j6ha_k$() <= end : false)) {
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          var message = 'placeholder can not overlap with paragraph.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var element = Range_init_$Create$(item_0.get_item_woo5lo_k$(), item_0.get_start_iypx6h_k$() - start | 0, item_0.get_end_18j6ha_k$() - start | 0);
        target_0.add_utx5q5_k$(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.get_minIntrinsicWidth_lmc1rq_k$();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.get_maxIntrinsicWidth_b4gk2k_k$();
    }, null);
  }
  function get_DefaultMaxLines() {
    return DefaultMaxLines;
  }
  var DefaultMaxLines;
  function ceilToInt(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints);
  }
  function Paragraph_0(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, ellipsis) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, $this) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    ParagraphStyle_0.call($this, textAlign, textDirection, lineHeight, textIndent, null, null, null, null, null);
    return $this;
  }
  function ParagraphStyle_init_$Create$(textAlign, textDirection, lineHeight, textIndent) {
    return ParagraphStyle_init_$Init$(textAlign, textDirection, lineHeight, textIndent, objectCreate(protoOf(ParagraphStyle_0)));
  }
  function ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $this) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    ParagraphStyle_0.call($this, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, null, null, null);
    return $this;
  }
  function ParagraphStyle_init_$Create$_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    return ParagraphStyle_init_$Init$_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, objectCreate(protoOf(ParagraphStyle_0)));
  }
  function ParagraphStyle_init_$Init$_1(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    ParagraphStyle_0.call($this, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, null);
    return $this;
  }
  function ParagraphStyle_init_$Create$_1(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return ParagraphStyle_init_$Init$_1(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, objectCreate(protoOf(ParagraphStyle_0)));
  }
  function get_$stableprop_4() {
    return 0;
  }
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.textAlign_1 = textAlign;
    this.textDirection_1 = textDirection;
    this.lineHeight_1 = lineHeight;
    this.textIndent_1 = textIndent;
    this.platformStyle_1 = platformStyle;
    this.lineHeightStyle_1 = lineHeightStyle;
    this.lineBreak_1 = lineBreak;
    this.hyphens_1 = hyphens;
    this.textMotion_1 = textMotion;
    var tmp = this;
    var tmp0_elvis_lhs = this.textAlign_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_44().get_Start_ovf7qx_k$();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.textAlignOrDefault_1 = tmp_0;
    var tmp_2 = this;
    var tmp0_elvis_lhs_0 = this.lineBreak_1;
    var tmp_3;
    var tmp_4 = tmp0_elvis_lhs_0;
    if ((tmp_4 == null ? null : new LineBreak(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_54().get_Simple_z0fu2y_k$();
    } else {
      tmp_3 = tmp0_elvis_lhs_0;
    }
    tmp_2.lineBreakOrDefault_1 = tmp_3;
    var tmp_5 = this;
    var tmp0_elvis_lhs_1 = this.hyphens_1;
    var tmp_6;
    var tmp_7 = tmp0_elvis_lhs_1;
    if ((tmp_7 == null ? null : new Hyphens(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_40().get_None_vxrj2y_k$();
    } else {
      tmp_6 = tmp0_elvis_lhs_1;
    }
    tmp_5.hyphensOrDefault_1 = tmp_6;
    if (!equals(this.lineHeight_1, Companion_getInstance_1().get_Unspecified_r048kw_k$())) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.lineHeight_1) >= 0.0)) {
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        var message = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.lineHeight_1) + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    this.$stable_1 = 0;
  }
  protoOf(ParagraphStyle_0).get_textAlign_c2c4cc_k$ = function () {
    return this.textAlign_1;
  };
  protoOf(ParagraphStyle_0).get_textDirection_u2eu2k_k$ = function () {
    return this.textDirection_1;
  };
  protoOf(ParagraphStyle_0).get_lineHeight_3vvefu_k$ = function () {
    return this.lineHeight_1;
  };
  protoOf(ParagraphStyle_0).get_textIndent_5mau2q_k$ = function () {
    return this.textIndent_1;
  };
  protoOf(ParagraphStyle_0).get_platformStyle_7i053p_k$ = function () {
    return this.platformStyle_1;
  };
  protoOf(ParagraphStyle_0).get_lineHeightStyle_fzu4s3_k$ = function () {
    return this.lineHeightStyle_1;
  };
  protoOf(ParagraphStyle_0).get_lineBreak_crhp0k_k$ = function () {
    return this.lineBreak_1;
  };
  protoOf(ParagraphStyle_0).get_hyphens_p35ysk_k$ = function () {
    return this.hyphens_1;
  };
  protoOf(ParagraphStyle_0).get_textMotion_7jbf0s_k$ = function () {
    return this.textMotion_1;
  };
  protoOf(ParagraphStyle_0).get_textAlignOrDefault_utldp9_k$ = function () {
    return this.textAlignOrDefault_1;
  };
  protoOf(ParagraphStyle_0).get_lineBreakOrDefault_jdufg7_k$ = function () {
    return this.lineBreakOrDefault_1;
  };
  protoOf(ParagraphStyle_0).get_hyphensOrDefault_iscmdn_k$ = function () {
    return this.hyphensOrDefault_1;
  };
  protoOf(ParagraphStyle_0).merge_desd12_k$ = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.textAlign_1, other.textDirection_1, other.lineHeight_1, other.textIndent_1, other.platformStyle_1, other.lineHeightStyle_1, other.lineBreak_1, other.hyphens_1, other.textMotion_1);
  };
  protoOf(ParagraphStyle_0).merge$default_robcga_k$ = function (other, $super) {
    other = other === VOID ? null : other;
    return $super === VOID ? this.merge_desd12_k$(other) : $super.merge_desd12_k$.call(this, other);
  };
  protoOf(ParagraphStyle_0).plus_oar7yd_k$ = function (other) {
    return this.merge_desd12_k$(other);
  };
  protoOf(ParagraphStyle_0).copy_tgj1d7_k$ = function (textAlign, textDirection, lineHeight, textIndent) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, this.platformStyle_1, this.lineHeightStyle_1, this.lineBreak_1, this.hyphens_1, this.textMotion_1);
  };
  protoOf(ParagraphStyle_0).copy$default_q3ecvu_k$ = function (textAlign, textDirection, lineHeight, textIndent, $super) {
    textAlign = textAlign === VOID ? this.textAlign_1 : textAlign;
    textDirection = textDirection === VOID ? this.textDirection_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    textIndent = textIndent === VOID ? this.textIndent_1 : textIndent;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_tgj1d7_k$(textAlign, textDirection, lineHeight, textIndent);
    } else {
      var tmp_0 = $super.copy_tgj1d7_k$;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      tmp = tmp_0.call(this, tmp_2, tmp_3 == null ? null : new TextDirection(tmp_3), new TextUnit(lineHeight), textIndent);
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).copy_kw5uqx_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, this.lineBreak_1, this.hyphens_1, this.textMotion_1);
  };
  protoOf(ParagraphStyle_0).copy$default_2owype_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $super) {
    textAlign = textAlign === VOID ? this.textAlign_1 : textAlign;
    textDirection = textDirection === VOID ? this.textDirection_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    textIndent = textIndent === VOID ? this.textIndent_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.lineHeightStyle_1 : lineHeightStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_kw5uqx_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle);
    } else {
      var tmp_0 = $super.copy_kw5uqx_k$;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      tmp = tmp_0.call(this, tmp_2, tmp_3 == null ? null : new TextDirection(tmp_3), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle);
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).copy_9sebpv_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, this.textMotion_1);
  };
  protoOf(ParagraphStyle_0).copy$default_gljecy_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $super) {
    textAlign = textAlign === VOID ? this.textAlign_1 : textAlign;
    textDirection = textDirection === VOID ? this.textDirection_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    textIndent = textIndent === VOID ? this.textIndent_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.lineHeightStyle_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.lineBreak_1 : lineBreak;
    hyphens = hyphens === VOID ? this.hyphens_1 : hyphens;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_9sebpv_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
    } else {
      var tmp_0 = $super.copy_9sebpv_k$;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      var tmp_4 = tmp_3 == null ? null : new TextDirection(tmp_3);
      var tmp_5 = lineBreak;
      var tmp_6 = tmp_5 == null ? null : new LineBreak(tmp_5);
      var tmp_7 = hyphens;
      tmp = tmp_0.call(this, tmp_2, tmp_4, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_6, tmp_7 == null ? null : new Hyphens(tmp_7));
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).copy_5ahe65_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).copy$default_t7kri3_k$ = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.textAlign_1 : textAlign;
    textDirection = textDirection === VOID ? this.textDirection_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    textIndent = textIndent === VOID ? this.textIndent_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.lineHeightStyle_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.lineBreak_1 : lineBreak;
    hyphens = hyphens === VOID ? this.hyphens_1 : hyphens;
    textMotion = textMotion === VOID ? this.textMotion_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_5ahe65_k$(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.copy_5ahe65_k$;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      var tmp_4 = tmp_3 == null ? null : new TextDirection(tmp_3);
      var tmp_5 = lineBreak;
      var tmp_6 = tmp_5 == null ? null : new LineBreak(tmp_5);
      var tmp_7 = hyphens;
      tmp = tmp_0.call(this, tmp_2, tmp_4, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_6, tmp_7 == null ? null : new Hyphens(tmp_7), textMotion);
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    var tmp = this.textAlign_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = other.textAlign_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1)))
      return false;
    var tmp_2 = this.textDirection_1;
    var tmp_3 = tmp_2 == null ? null : new TextDirection(tmp_2);
    var tmp_4 = other.textDirection_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new TextDirection(tmp_4)))
      return false;
    if (!equals(this.lineHeight_1, other.lineHeight_1))
      return false;
    if (!equals(this.textIndent_1, other.textIndent_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    if (!equals(this.lineHeightStyle_1, other.lineHeightStyle_1))
      return false;
    var tmp_5 = this.lineBreak_1;
    var tmp_6 = tmp_5 == null ? null : new LineBreak(tmp_5);
    var tmp_7 = other.lineBreak_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new LineBreak(tmp_7)))
      return false;
    var tmp_8 = this.hyphens_1;
    var tmp_9 = tmp_8 == null ? null : new Hyphens(tmp_8);
    var tmp_10 = other.hyphens_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new Hyphens(tmp_10)))
      return false;
    if (!equals(this.textMotion_1, other.textMotion_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var tmp0_safe_receiver = this.textAlign_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = TextAlign__hashCode_impl_s8g35y(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.textDirection_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = TextDirection__hashCode_impl_g63nwg(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.lineHeight_1) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.textIndent_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_5 = imul(31, result);
    var tmp6_safe_receiver = this.platformStyle_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_5 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp8_safe_receiver = this.lineHeightStyle_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.hashCode();
    result = tmp_6 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp10_safe_receiver = this.lineBreak_1;
    var tmp_8;
    var tmp_9 = tmp10_safe_receiver;
    if ((tmp_9 == null ? null : new LineBreak(tmp_9)) == null) {
      tmp_8 = null;
    } else {
      tmp_8 = LineBreak__hashCode_impl_ybksn(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_8;
    result = tmp_7 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_10 = imul(31, result);
    var tmp12_safe_receiver = this.hyphens_1;
    var tmp_11;
    var tmp_12 = tmp12_safe_receiver;
    if ((tmp_12 == null ? null : new Hyphens(tmp_12)) == null) {
      tmp_11 = null;
    } else {
      tmp_11 = Hyphens__hashCode_impl_yb7t8v(tmp12_safe_receiver);
    }
    var tmp13_elvis_lhs = tmp_11;
    result = tmp_10 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.textMotion_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : hashCode(tmp14_safe_receiver);
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    var tmp = this.textAlign_1;
    var tmp_0 = 'ParagraphStyle(' + ('textAlign=' + (tmp == null ? null : new TextAlign(tmp)) + ', ');
    var tmp_1 = this.textDirection_1;
    var tmp_2 = tmp_0 + ('textDirection=' + (tmp_1 == null ? null : new TextDirection(tmp_1)) + ', ') + ('lineHeight=' + new TextUnit(this.lineHeight_1) + ', ') + ('textIndent=' + this.textIndent_1 + ', ') + ('platformStyle=' + this.platformStyle_1 + ', ') + ('lineHeightStyle=' + this.lineHeightStyle_1 + ', ');
    var tmp_3 = this.lineBreak_1;
    var tmp_4 = tmp_2 + ('lineBreak=' + (tmp_3 == null ? null : new LineBreak(tmp_3)) + ', ');
    var tmp_5 = this.hyphens_1;
    return tmp_4 + ('hyphens=' + (tmp_5 == null ? null : new Hyphens(tmp_5)) + ', ') + ('textMotion=' + this.textMotion_1) + ')';
  };
  function fastMerge(_this__u8e3s4, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8 = textAlign;
    if (!((tmp_8 == null ? null : new TextAlign(tmp_8)) == null)) {
      var tmp_9 = textAlign;
      var tmp_10 = tmp_9 == null ? null : new TextAlign(tmp_9);
      var tmp_11 = _this__u8e3s4.textAlign_1;
      tmp_7 = !equals(tmp_10, tmp_11 == null ? null : new TextAlign(tmp_11));
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      var tmp_12;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(lineHeight)) {
        tmp_12 = !equals(lineHeight, _this__u8e3s4.lineHeight_1);
      } else {
        tmp_12 = false;
      }
      tmp_6 = tmp_12;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = !(textIndent == null) ? !equals(textIndent, _this__u8e3s4.textIndent_1) : false;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      var tmp_13;
      var tmp_14 = textDirection;
      if (!((tmp_14 == null ? null : new TextDirection(tmp_14)) == null)) {
        var tmp_15 = textDirection;
        var tmp_16 = tmp_15 == null ? null : new TextDirection(tmp_15);
        var tmp_17 = _this__u8e3s4.textDirection_1;
        tmp_13 = !equals(tmp_16, tmp_17 == null ? null : new TextDirection(tmp_17));
      } else {
        tmp_13 = false;
      }
      tmp_4 = tmp_13;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.platformStyle_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !(lineHeightStyle == null) ? !equals(lineHeightStyle, _this__u8e3s4.lineHeightStyle_1) : false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      var tmp_18;
      var tmp_19 = lineBreak;
      if (!((tmp_19 == null ? null : new LineBreak(tmp_19)) == null)) {
        var tmp_20 = lineBreak;
        var tmp_21 = tmp_20 == null ? null : new LineBreak(tmp_20);
        var tmp_22 = _this__u8e3s4.lineBreak_1;
        tmp_18 = !equals(tmp_21, tmp_22 == null ? null : new LineBreak(tmp_22));
      } else {
        tmp_18 = false;
      }
      tmp_1 = tmp_18;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_23;
      var tmp_24 = hyphens;
      if (!((tmp_24 == null ? null : new Hyphens(tmp_24)) == null)) {
        var tmp_25 = hyphens;
        var tmp_26 = tmp_25 == null ? null : new Hyphens(tmp_25);
        var tmp_27 = _this__u8e3s4.hyphens_1;
        tmp_23 = !equals(tmp_26, tmp_27 == null ? null : new Hyphens(tmp_27));
      } else {
        tmp_23 = false;
      }
      tmp_0 = tmp_23;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(textMotion == null) ? !equals(textMotion, _this__u8e3s4.textMotion_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_28;
    if (get_isUnspecified(lineHeight)) {
      tmp_28 = _this__u8e3s4.lineHeight_1;
    } else {
      tmp_28 = lineHeight;
    }
    var tmp7_lineHeight = tmp_28;
    var tmp8_textIndent = textIndent == null ? _this__u8e3s4.textIndent_1 : textIndent;
    var tmp_29;
    var tmp_30 = textAlign;
    if ((tmp_30 == null ? null : new TextAlign(tmp_30)) == null) {
      tmp_29 = _this__u8e3s4.textAlign_1;
    } else {
      tmp_29 = textAlign;
    }
    var tmp9_textAlign = tmp_29;
    var tmp_31;
    var tmp_32 = textDirection;
    if ((tmp_32 == null ? null : new TextDirection(tmp_32)) == null) {
      tmp_31 = _this__u8e3s4.textDirection_1;
    } else {
      tmp_31 = textDirection;
    }
    var tmp10_textDirection = tmp_31;
    var tmp11_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp12_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.lineHeightStyle_1 : lineHeightStyle;
    var tmp_33;
    var tmp_34 = lineBreak;
    if ((tmp_34 == null ? null : new LineBreak(tmp_34)) == null) {
      tmp_33 = _this__u8e3s4.lineBreak_1;
    } else {
      tmp_33 = lineBreak;
    }
    var tmp13_lineBreak = tmp_33;
    var tmp_35;
    var tmp_36 = hyphens;
    if ((tmp_36 == null ? null : new Hyphens(tmp_36)) == null) {
      tmp_35 = _this__u8e3s4.hyphens_1;
    } else {
      tmp_35 = hyphens;
    }
    var tmp14_hyphens = tmp_35;
    var tmp15_textMotion = textMotion == null ? _this__u8e3s4.textMotion_1 : textMotion;
    return new ParagraphStyle_0(tmp9_textAlign, tmp10_textDirection, tmp7_lineHeight, tmp8_textIndent, tmp11_platformStyle, tmp12_lineHeightStyle, tmp13_lineBreak, tmp14_hyphens, tmp15_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.platformStyle_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.platformStyle_1;
    return _this__u8e3s4.platformStyle_1.merge_553efx_k$(other);
  }
  function lerp_4(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = start.textAlign_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = stop.textAlign_1;
    var tmp_2 = lerpDiscrete(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1), fraction);
    var tmp_3 = tmp_2 == null ? null : tmp_2.value_1;
    var tmp_4 = start.textDirection_1;
    var tmp_5 = tmp_4 == null ? null : new TextDirection(tmp_4);
    var tmp_6 = stop.textDirection_1;
    var tmp_7 = lerpDiscrete(tmp_5, tmp_6 == null ? null : new TextDirection(tmp_6), fraction);
    var tmp_8 = tmp_7 == null ? null : tmp_7.value_1;
    var tmp_9 = lerpTextUnitInheritable(start.lineHeight_1, stop.lineHeight_1, fraction);
    var tmp0_elvis_lhs = start.textIndent_1;
    var tmp_10 = tmp0_elvis_lhs == null ? Companion_getInstance_49().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.textIndent_1;
    var tmp_11 = lerp_11(tmp_10, tmp1_elvis_lhs == null ? Companion_getInstance_49().get_None_wo6tgh_k$() : tmp1_elvis_lhs, fraction);
    var tmp_12 = lerpPlatformStyle(start.platformStyle_1, stop.platformStyle_1, fraction);
    var tmp_13 = lerpDiscrete(start.lineHeightStyle_1, stop.lineHeightStyle_1, fraction);
    var tmp_14 = start.lineBreak_1;
    var tmp_15 = tmp_14 == null ? null : new LineBreak(tmp_14);
    var tmp_16 = stop.lineBreak_1;
    var tmp_17 = lerpDiscrete(tmp_15, tmp_16 == null ? null : new LineBreak(tmp_16), fraction);
    var tmp_18 = tmp_17 == null ? null : tmp_17.mask_1;
    var tmp_19 = start.hyphens_1;
    var tmp_20 = tmp_19 == null ? null : new Hyphens(tmp_19);
    var tmp_21 = stop.hyphens_1;
    var tmp_22 = lerpDiscrete(tmp_20, tmp_21 == null ? null : new Hyphens(tmp_21), fraction);
    return new ParagraphStyle_0(tmp_3, tmp_8, tmp_9, tmp_11, tmp_12, tmp_13, tmp_18, tmp_22 == null ? null : tmp_22.value_1, lerpDiscrete(start.textMotion_1, stop.textMotion_1, fraction));
  }
  function lerpPlatformStyle(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (start == null ? stop == null : false)
      return null;
    var startNonNull = start == null ? Companion_getInstance_52().get_Default_goqax4_k$() : start;
    var stopNonNull = stop == null ? Companion_getInstance_52().get_Default_goqax4_k$() : stop;
    return lerp_13(startNonNull, stopNonNull, fraction);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = resolveTextDirection_0(direction, style.textDirection_1);
    var tmp_0 = get_isUnspecified(style.lineHeight_1) ? get_DefaultLineHeight() : style.lineHeight_1;
    var tmp0_elvis_lhs = style.textIndent_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_49().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.textMotion_1;
    return new ParagraphStyle_0(style.textAlignOrDefault_1, tmp, tmp_0, tmp_1, style.platformStyle_1, style.lineHeightStyle_1, style.lineBreakOrDefault_1, style.hyphensOrDefault_1, tmp1_elvis_lhs == null ? Companion_getInstance_55().get_Static_4hz9g7_k$() : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().get_Unspecified_r048kw_k$();
    }
  }
  function get_$stableprop_5() {
    return 0;
  }
  function Placeholder(width, height, placeholderVerticalAlign) {
    this.width_1 = width;
    this.height_1 = height;
    this.placeholderVerticalAlign_1 = placeholderVerticalAlign;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!get_isUnspecified(this.width_1)) {
      // Inline function 'androidx.compose.ui.text.Placeholder.<anonymous>' call
      var message = 'width cannot be TextUnit.Unspecified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!get_isUnspecified(this.height_1)) {
      // Inline function 'androidx.compose.ui.text.Placeholder.<anonymous>' call
      var message_0 = 'height cannot be TextUnit.Unspecified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.$stable_1 = 0;
  }
  protoOf(Placeholder).get_width_sw31vj_k$ = function () {
    return this.width_1;
  };
  protoOf(Placeholder).get_height_pbi6b2_k$ = function () {
    return this.height_1;
  };
  protoOf(Placeholder).get_placeholderVerticalAlign_kmyoon_k$ = function () {
    return this.placeholderVerticalAlign_1;
  };
  protoOf(Placeholder).copy_c7klfd_k$ = function (width, height, placeholderVerticalAlign) {
    return new Placeholder(width, height, placeholderVerticalAlign);
  };
  protoOf(Placeholder).copy$default_trap5h_k$ = function (width, height, placeholderVerticalAlign, $super) {
    width = width === VOID ? this.width_1 : width;
    height = height === VOID ? this.height_1 : height;
    placeholderVerticalAlign = placeholderVerticalAlign === VOID ? this.placeholderVerticalAlign_1 : placeholderVerticalAlign;
    return $super === VOID ? this.copy_c7klfd_k$(width, height, placeholderVerticalAlign) : $super.copy_c7klfd_k$.call(this, new TextUnit(width), new TextUnit(height), new PlaceholderVerticalAlign(placeholderVerticalAlign));
  };
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.width_1, other.width_1))
      return false;
    if (!equals(this.height_1, other.height_1))
      return false;
    if (!(this.placeholderVerticalAlign_1 === other.placeholderVerticalAlign_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.width_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.height_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.placeholderVerticalAlign_1) | 0;
    return result;
  };
  protoOf(Placeholder).toString = function () {
    return 'Placeholder(' + ('width=' + new TextUnit(this.width_1) + ', ') + ('height=' + new TextUnit(this.height_1) + ', ') + ('placeholderVerticalAlign=' + new PlaceholderVerticalAlign(this.placeholderVerticalAlign_1)) + ')';
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function PlaceholderVerticalAlign__toString_impl_kf5crp($this) {
    return $this === Companion_getInstance_16().AboveBaseline_1 ? 'AboveBaseline' : $this === Companion_getInstance_16().Top_1 ? 'Top' : $this === Companion_getInstance_16().Bottom_1 ? 'Bottom' : $this === Companion_getInstance_16().Center_1 ? 'Center' : $this === Companion_getInstance_16().TextTop_1 ? 'TextTop' : $this === Companion_getInstance_16().TextBottom_1 ? 'TextBottom' : $this === Companion_getInstance_16().TextCenter_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion() {
    Companion_instance = this;
    this.AboveBaseline_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.Top_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.Bottom_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.Center_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.TextTop_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.TextBottom_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.TextCenter_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  protoOf(Companion).get_AboveBaseline_nu267x_k$ = function () {
    return this.AboveBaseline_1;
  };
  protoOf(Companion).get_Top_4ethrk_k$ = function () {
    return this.Top_1;
  };
  protoOf(Companion).get_Bottom_aqwfjc_k$ = function () {
    return this.Bottom_1;
  };
  protoOf(Companion).get_Center_mzl5ha_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion).get_TextTop_v4gasj_k$ = function () {
    return this.TextTop_1;
  };
  protoOf(Companion).get_TextBottom_m8es0r_k$ = function () {
    return this.TextBottom_1;
  };
  protoOf(Companion).get_TextCenter_yh3hyp_k$ = function () {
    return this.TextCenter_1;
  };
  var Companion_instance;
  function Companion_getInstance_16() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function PlaceholderVerticalAlign__equals_impl_e3pkzy($this, other) {
    if (!(other instanceof PlaceholderVerticalAlign))
      return false;
    if (!($this === (other instanceof PlaceholderVerticalAlign ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PlaceholderVerticalAlign(value) {
    Companion_getInstance_16();
    this.value_1 = value;
  }
  protoOf(PlaceholderVerticalAlign).toString = function () {
    return PlaceholderVerticalAlign__toString_impl_kf5crp(this.value_1);
  };
  protoOf(PlaceholderVerticalAlign).hashCode = function () {
    return PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.value_1);
  };
  protoOf(PlaceholderVerticalAlign).equals = function (other) {
    return PlaceholderVerticalAlign__equals_impl_e3pkzy(this.value_1, other);
  };
  function get_AnnotatedStringSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotatedStringSaver;
  }
  var AnnotatedStringSaver;
  function get_AnnotationRangeListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeListSaver;
  }
  var AnnotationRangeListSaver;
  function get_AnnotationRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeSaver;
  }
  var AnnotationRangeSaver;
  function get_VerbatimTtsAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return VerbatimTtsAnnotationSaver;
  }
  var VerbatimTtsAnnotationSaver;
  function get_UrlAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return UrlAnnotationSaver;
  }
  var UrlAnnotationSaver;
  function get_ParagraphStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ParagraphStyleSaver;
  }
  var ParagraphStyleSaver;
  function get_SpanStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return SpanStyleSaver;
  }
  var SpanStyleSaver;
  function get_TextDecorationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextDecorationSaver;
  }
  var TextDecorationSaver;
  function get_TextGeometricTransformSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextGeometricTransformSaver;
  }
  var TextGeometricTransformSaver;
  function get_TextIndentSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextIndentSaver;
  }
  var TextIndentSaver;
  function get_FontWeightSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontWeightSaver;
  }
  var FontWeightSaver;
  function get_BaselineShiftSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return BaselineShiftSaver;
  }
  var BaselineShiftSaver;
  function get_TextRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextRangeSaver;
  }
  var TextRangeSaver;
  function get_ShadowSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ShadowSaver;
  }
  var ShadowSaver;
  function get_ColorSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ColorSaver;
  }
  var ColorSaver;
  function get_TextUnitSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextUnitSaver;
  }
  var TextUnitSaver;
  function get_OffsetSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return OffsetSaver;
  }
  var OffsetSaver;
  function get_LocaleListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleListSaver;
  }
  var LocaleListSaver;
  function get_LocaleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleSaver;
  }
  var LocaleSaver;
  function save(value) {
    _init_properties_Savers_kt__o6r3ry();
    return value;
  }
  function save_0(value, saver, scope) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.save.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.save.<anonymous>.<anonymous>' call
      tmp = saver.save_khi2yu_k$(scope, value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_Url_instance;
  var AnnotationType_String_instance;
  function values() {
    return [AnnotationType_Paragraph_getInstance(), AnnotationType_Span_getInstance(), AnnotationType_VerbatimTts_getInstance(), AnnotationType_Url_getInstance(), AnnotationType_String_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Paragraph':
        return AnnotationType_Paragraph_getInstance();
      case 'Span':
        return AnnotationType_Span_getInstance();
      case 'VerbatimTts':
        return AnnotationType_VerbatimTts_getInstance();
      case 'Url':
        return AnnotationType_Url_getInstance();
      case 'String':
        return AnnotationType_String_getInstance();
      default:
        AnnotationType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_getInstance();
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_Url_instance = new AnnotationType('Url', 3);
    AnnotationType_String_instance = new AnnotationType('String', 4);
  }
  function AnnotationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_Saver(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextUnitSaver();
  }
  function get_Saver_0(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextIndentSaver();
  }
  function get_Saver_1(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ColorSaver();
  }
  function get_Saver_2(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontWeightSaver();
  }
  function get_Saver_3(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_BaselineShiftSaver();
  }
  function get_Saver_4(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextGeometricTransformSaver();
  }
  function get_Saver_5(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleListSaver();
  }
  function get_Saver_6(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextDecorationSaver();
  }
  function get_Saver_7(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ShadowSaver();
  }
  function get_Saver_8(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_OffsetSaver();
  }
  function get_Saver_9(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleSaver();
  }
  function get_Saver_10(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextRangeSaver();
  }
  function AnnotatedStringSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.get_text_wouvsm_k$()), save_0(it.get_spanStyles_muoq3_k$(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.get_paragraphStyles_29kgs9_k$(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.get_annotations_20dirp_k$(), get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.get_c1px32_k$(1);
      var saver = get_AnnotationRangeListSaver();
      if (equals(value, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (value == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = saver.restore_fyjq85_k$(value);
        tmp = (tmp_0 == null ? true : isInterface(tmp_0, List)) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
    }
    var spanStylesOrNull = tmp$ret$0;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.get_c1px32_k$(2);
      var saver_0 = get_AnnotationRangeListSaver();
      if (equals(value_0, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_1;
      if (value_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_2 = saver_0.restore_fyjq85_k$(value_0);
        tmp_1 = (tmp_2 == null ? true : isInterface(tmp_2, List)) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$5 = tmp_1;
    }
    var paragraphStylesOrNull = tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp_3;
    if (tmp0_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_3 = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$12 = tmp_3;
    var tmp_4 = ensureNotNull(tmp$ret$12);
    var tmp_5;
    if (spanStylesOrNull == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_6;
      if (spanStylesOrNull.isEmpty_y1axqb_k$()) {
        // Inline function 'androidx.compose.ui.text.AnnotatedStringSaver.<anonymous>.<anonymous>' call
        tmp_6 = null;
      } else {
        tmp_6 = spanStylesOrNull;
      }
      tmp_5 = tmp_6;
    }
    var tmp_7 = tmp_5;
    var tmp_8;
    if (paragraphStylesOrNull == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_9;
      if (paragraphStylesOrNull.isEmpty_y1axqb_k$()) {
        // Inline function 'androidx.compose.ui.text.AnnotatedStringSaver.<anonymous>.<anonymous>' call
        tmp_9 = null;
      } else {
        tmp_9 = paragraphStylesOrNull;
      }
      tmp_8 = tmp_9;
    }
    var tmp_10 = tmp_8;
    var tmp$ret$17;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_1 = list.get_c1px32_k$(3);
      var saver_1 = get_AnnotationRangeListSaver();
      if (equals(value_1, false)) {
        tmp$ret$17 = null;
        break $l$block_1;
      }
      var tmp_11;
      if (value_1 == null) {
        tmp_11 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_12 = saver_1.restore_fyjq85_k$(value_1);
        tmp_11 = (tmp_12 == null ? true : isInterface(tmp_12, List)) ? tmp_12 : THROW_CCE();
      }
      tmp$ret$17 = tmp_11;
    }
    return new AnnotatedString(tmp_4, tmp_7, tmp_10, tmp$ret$17);
  }
  function AnnotationRangeListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(it.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = it.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        var element = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var saver = get_AnnotationRangeSaver();
          if (equals(item, false)) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp;
          if (item == null) {
            tmp = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_0 = saver.restore_fyjq85_k$(item);
            tmp = (tmp_0 == null ? true : tmp_0 instanceof Range) ? tmp_0 : THROW_CCE();
          }
          tmp$ret$0 = tmp;
        }
        var range = ensureNotNull(tmp$ret$0);
        target.add_utx5q5_k$(range);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.get_item_woo5lo_k$();
    var tmp;
    if (tmp0_subject instanceof ParagraphStyle_0) {
      tmp = AnnotationType_Paragraph_getInstance();
    } else {
      if (tmp0_subject instanceof SpanStyle) {
        tmp = AnnotationType_Span_getInstance();
      } else {
        if (tmp0_subject instanceof VerbatimTtsAnnotation) {
          tmp = AnnotationType_VerbatimTts_getInstance();
        } else {
          if (tmp0_subject instanceof UrlAnnotation) {
            tmp = AnnotationType_Url_getInstance();
          } else {
            tmp = AnnotationType_String_getInstance();
          }
        }
      }
    }
    var marker = tmp;
    var tmp_0;
    switch (marker.get_ordinal_ip24qg_k$()) {
      case 0:
        var tmp_1 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.get_item_woo5lo_k$();
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        tmp_0 = save(it.get_item_woo5lo_k$());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.get_start_iypx6h_k$()), save(it.get_end_18j6ha_k$()), save(it.get_tag_18ivnz_k$())]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = tmp0_safe_receiver instanceof AnnotationType ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var marker = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(2);
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_0 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$5 = tmp_0;
    var start = ensureNotNull(tmp$ret$5);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.get_c1px32_k$(3);
    var tmp_1;
    if (tmp0_safe_receiver_1 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = typeof tmp0_safe_receiver_1 === 'number' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp$ret$8 = tmp_1;
    var end = ensureNotNull(tmp$ret$8);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_2 = list.get_c1px32_k$(4);
    var tmp_2;
    if (tmp0_safe_receiver_2 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_2 = typeof tmp0_safe_receiver_2 === 'string' ? tmp0_safe_receiver_2 : THROW_CCE();
    }
    var tmp$ret$11 = tmp_2;
    var tag = ensureNotNull(tmp$ret$11);
    var tmp_3;
    switch (marker.get_ordinal_ip24qg_k$()) {
      case 0:
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value = list.get_c1px32_k$(1);
          var saver = get_ParagraphStyleSaver();
          if (equals(value, false)) {
            tmp$ret$12 = null;
            break $l$block;
          }
          var tmp_4;
          if (value == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_5 = saver.restore_fyjq85_k$(value);
            tmp_4 = (tmp_5 == null ? true : tmp_5 instanceof ParagraphStyle_0) ? tmp_5 : THROW_CCE();
          }
          tmp$ret$12 = tmp_4;
        }

        var item = ensureNotNull(tmp$ret$12);
        tmp_3 = new Range(item, start, end, tag);
        break;
      case 1:
        var tmp$ret$17;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value_0 = list.get_c1px32_k$(1);
          var saver_0 = get_SpanStyleSaver();
          if (equals(value_0, false)) {
            tmp$ret$17 = null;
            break $l$block_0;
          }
          var tmp_6;
          if (value_0 == null) {
            tmp_6 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_7 = saver_0.restore_fyjq85_k$(value_0);
            tmp_6 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
          }
          tmp$ret$17 = tmp_6;
        }

        var item_0 = ensureNotNull(tmp$ret$17);
        tmp_3 = new Range(item_0, start, end, tag);
        break;
      case 2:
        var tmp$ret$22;
        $l$block_1: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value_1 = list.get_c1px32_k$(1);
          var saver_1 = get_VerbatimTtsAnnotationSaver();
          if (equals(value_1, false)) {
            tmp$ret$22 = null;
            break $l$block_1;
          }
          var tmp_8;
          if (value_1 == null) {
            tmp_8 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_9 = saver_1.restore_fyjq85_k$(value_1);
            tmp_8 = (tmp_9 == null ? true : tmp_9 instanceof VerbatimTtsAnnotation) ? tmp_9 : THROW_CCE();
          }
          tmp$ret$22 = tmp_8;
        }

        var item_1 = ensureNotNull(tmp$ret$22);
        tmp_3 = new Range(item_1, start, end, tag);
        break;
      case 3:
        var tmp$ret$27;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value_2 = list.get_c1px32_k$(1);
          var saver_2 = get_UrlAnnotationSaver();
          if (equals(value_2, false)) {
            tmp$ret$27 = null;
            break $l$block_2;
          }
          var tmp_10;
          if (value_2 == null) {
            tmp_10 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_11 = saver_2.restore_fyjq85_k$(value_2);
            tmp_10 = (tmp_11 == null ? true : tmp_11 instanceof UrlAnnotation) ? tmp_11 : THROW_CCE();
          }
          tmp$ret$27 = tmp_10;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.get_c1px32_k$(1);
        var tmp_12;
        if (tmp0_safe_receiver_3 == null) {
          tmp_12 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
          tmp_12 = typeof tmp0_safe_receiver_3 === 'string' ? tmp0_safe_receiver_3 : THROW_CCE();
        }

        var tmp$ret$34 = tmp_12;
        var item_3 = ensureNotNull(tmp$ret$34);
        tmp_3 = new Range(item_3, start, end, tag);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_3;
  }
  function VerbatimTtsAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.get_verbatim_64u873_k$());
  }
  function VerbatimTtsAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    return new VerbatimTtsAnnotation(ensureNotNull(tmp$ret$2));
  }
  function UrlAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.get_url_18iuii_k$());
  }
  function UrlAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    return new UrlAnnotation(ensureNotNull(tmp$ret$2));
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = it.get_textAlign_c2c4cc_k$();
    var tmp_0 = save(tmp == null ? null : new TextAlign(tmp));
    var tmp_1 = it.get_textDirection_u2eu2k_k$();
    return arrayListOf([tmp_0, save(tmp_1 == null ? null : new TextDirection(tmp_1)), save_0(new TextUnit(it.get_lineHeight_3vvefu_k$()), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(it.get_textIndent_5mau2q_k$(), get_Saver_0(Companion_getInstance_49()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = tmp0_safe_receiver instanceof TextAlign ? tmp0_safe_receiver.value_1 : THROW_CCE();
    }
    var tmp_0 = tmp;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = tmp0_safe_receiver_0 instanceof TextDirection ? tmp0_safe_receiver_0.value_1 : THROW_CCE();
    }
    var tmp_2 = tmp_1;
    var tmp$ret$6;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.get_c1px32_k$(2);
      var saver = get_Saver(Companion_getInstance_1());
      if (equals(value, false)) {
        tmp$ret$6 = null;
        break $l$block;
      }
      var tmp_3;
      if (value == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_4 = saver.restore_fyjq85_k$(value);
        var tmp_5 = tmp_4 == null ? null : tmp_4.packedValue_1;
        var tmp_6;
        var tmp_7;
        var tmp_8 = tmp_5;
        if ((tmp_8 == null ? null : new TextUnit(tmp_8)) == null) {
          tmp_7 = true;
        } else {
          var tmp_9 = tmp_5;
          tmp_7 = (tmp_9 == null ? null : new TextUnit(tmp_9))instanceof TextUnit;
        }
        if (tmp_7) {
          tmp_6 = tmp_5;
        } else {
          tmp_6 = THROW_CCE();
        }
        tmp_3 = tmp_6;
      }
      tmp$ret$6 = tmp_3;
    }
    var tmp_10 = tmp$ret$6;
    var tmp_11 = ensureNotNull(tmp_10 == null ? null : new TextUnit(tmp_10));
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.get_c1px32_k$(3);
      var saver_0 = get_Saver_0(Companion_getInstance_49());
      if (equals(value_0, false)) {
        tmp$ret$11 = null;
        break $l$block_0;
      }
      var tmp_12;
      if (value_0 == null) {
        tmp_12 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_13 = saver_0.restore_fyjq85_k$(value_0);
        tmp_12 = (tmp_13 == null ? true : tmp_13 instanceof TextIndent_0) ? tmp_13 : THROW_CCE();
      }
      tmp$ret$11 = tmp_12;
    }
    return new ParagraphStyle_0(tmp_0, tmp_2, tmp_11.packedValue_1, tmp$ret$11);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.get_color_lnp1vl_k$()), get_Saver_1(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.get_fontSize_ergf2z_k$()), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_1 = save_0(it.get_fontWeight_wbif2o_k$(), get_Saver_2(Companion_getInstance_27()), $this$Saver);
    var tmp_2 = it.get_fontStyle_hzv4zg_k$();
    var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = it.get_fontSynthesis_h5auiy_k$();
    var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = save(-1);
    var tmp_7 = save(it.get_fontFeatureSettings_a47533_k$());
    var tmp_8 = save_0(new TextUnit(it.get_letterSpacing_k79xfu_k$()), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_9 = it.get_baselineShift_99zyho_k$();
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_3(Companion_getInstance_39()), $this$Saver), save_0(it.get_textGeometricTransform_tdfmin_k$(), get_Saver_4(Companion_getInstance_48()), $this$Saver), save_0(it.get_localeList_1gj9gh_k$(), get_Saver_5(Companion_getInstance_38()), $this$Saver), save_0(new Color(it.get_background_8l4942_k$()), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(it.get_textDecoration_itgjwm_k$(), get_Saver_6(Companion_getInstance_45()), $this$Saver), save_0(it.get_shadow_jgtb8p_k$(), get_Saver_7(Companion_getInstance_2()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.get_c1px32_k$(0);
      var saver = get_Saver_1(Companion_getInstance());
      if (equals(value, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (value == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = saver.restore_fyjq85_k$(value);
        var tmp_1 = tmp_0 == null ? null : tmp_0.value_1;
        var tmp_2;
        var tmp_3;
        var tmp_4 = tmp_1;
        if ((tmp_4 == null ? null : new Color(tmp_4)) == null) {
          tmp_3 = true;
        } else {
          var tmp_5 = tmp_1;
          tmp_3 = (tmp_5 == null ? null : new Color(tmp_5))instanceof Color;
        }
        if (tmp_3) {
          tmp_2 = tmp_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        tmp = tmp_2;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.get_c1px32_k$(1);
      var saver_0 = get_Saver(Companion_getInstance_1());
      if (equals(value_0, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_8;
      if (value_0 == null) {
        tmp_8 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_9 = saver_0.restore_fyjq85_k$(value_0);
        var tmp_10 = tmp_9 == null ? null : tmp_9.packedValue_1;
        var tmp_11;
        var tmp_12;
        var tmp_13 = tmp_10;
        if ((tmp_13 == null ? null : new TextUnit(tmp_13)) == null) {
          tmp_12 = true;
        } else {
          var tmp_14 = tmp_10;
          tmp_12 = (tmp_14 == null ? null : new TextUnit(tmp_14))instanceof TextUnit;
        }
        if (tmp_12) {
          tmp_11 = tmp_10;
        } else {
          tmp_11 = THROW_CCE();
        }
        tmp_8 = tmp_11;
      }
      tmp$ret$5 = tmp_8;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15));
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_1 = list.get_c1px32_k$(2);
      var saver_1 = get_Saver_2(Companion_getInstance_27());
      if (equals(value_1, false)) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_17;
      if (value_1 == null) {
        tmp_17 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_18 = saver_1.restore_fyjq85_k$(value_1);
        tmp_17 = (tmp_18 == null ? true : tmp_18 instanceof FontWeight) ? tmp_18 : THROW_CCE();
      }
      tmp$ret$10 = tmp_17;
    }
    var tmp_19 = tmp$ret$10;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(3);
    var tmp_20;
    if (tmp0_safe_receiver == null) {
      tmp_20 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_20 = tmp0_safe_receiver instanceof FontStyle ? tmp0_safe_receiver.value_1 : THROW_CCE();
    }
    var tmp_21 = tmp_20;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(4);
    var tmp_22;
    if (tmp0_safe_receiver_0 == null) {
      tmp_22 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_22 = tmp0_safe_receiver_0 instanceof FontSynthesis ? tmp0_safe_receiver_0.value_1 : THROW_CCE();
    }
    var tmp_23 = tmp_22;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.get_c1px32_k$(6);
    var tmp_24;
    if (tmp0_safe_receiver_1 == null) {
      tmp_24 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_24 = typeof tmp0_safe_receiver_1 === 'string' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp_25 = tmp_24;
    var tmp$ret$24;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_2 = list.get_c1px32_k$(7);
      var saver_2 = get_Saver(Companion_getInstance_1());
      if (equals(value_2, false)) {
        tmp$ret$24 = null;
        break $l$block_2;
      }
      var tmp_26;
      if (value_2 == null) {
        tmp_26 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_27 = saver_2.restore_fyjq85_k$(value_2);
        var tmp_28 = tmp_27 == null ? null : tmp_27.packedValue_1;
        var tmp_29;
        var tmp_30;
        var tmp_31 = tmp_28;
        if ((tmp_31 == null ? null : new TextUnit(tmp_31)) == null) {
          tmp_30 = true;
        } else {
          var tmp_32 = tmp_28;
          tmp_30 = (tmp_32 == null ? null : new TextUnit(tmp_32))instanceof TextUnit;
        }
        if (tmp_30) {
          tmp_29 = tmp_28;
        } else {
          tmp_29 = THROW_CCE();
        }
        tmp_26 = tmp_29;
      }
      tmp$ret$24 = tmp_26;
    }
    var tmp_33 = tmp$ret$24;
    var tmp_34 = ensureNotNull(tmp_33 == null ? null : new TextUnit(tmp_33));
    var tmp$ret$29;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_3 = list.get_c1px32_k$(8);
      var saver_3 = get_Saver_3(Companion_getInstance_39());
      if (equals(value_3, false)) {
        tmp$ret$29 = null;
        break $l$block_3;
      }
      var tmp_35;
      if (value_3 == null) {
        tmp_35 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_36 = saver_3.restore_fyjq85_k$(value_3);
        var tmp_37 = tmp_36 == null ? null : tmp_36.multiplier_1;
        var tmp_38;
        var tmp_39;
        var tmp_40 = tmp_37;
        if ((tmp_40 == null ? null : new BaselineShift(tmp_40)) == null) {
          tmp_39 = true;
        } else {
          var tmp_41 = tmp_37;
          tmp_39 = (tmp_41 == null ? null : new BaselineShift(tmp_41))instanceof BaselineShift;
        }
        if (tmp_39) {
          tmp_38 = tmp_37;
        } else {
          tmp_38 = THROW_CCE();
        }
        tmp_35 = tmp_38;
      }
      tmp$ret$29 = tmp_35;
    }
    var tmp_42 = tmp$ret$29;
    var tmp$ret$34;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_4 = list.get_c1px32_k$(9);
      var saver_4 = get_Saver_4(Companion_getInstance_48());
      if (equals(value_4, false)) {
        tmp$ret$34 = null;
        break $l$block_4;
      }
      var tmp_43;
      if (value_4 == null) {
        tmp_43 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_44 = saver_4.restore_fyjq85_k$(value_4);
        tmp_43 = (tmp_44 == null ? true : tmp_44 instanceof TextGeometricTransform) ? tmp_44 : THROW_CCE();
      }
      tmp$ret$34 = tmp_43;
    }
    var tmp_45 = tmp$ret$34;
    var tmp$ret$39;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_5 = list.get_c1px32_k$(10);
      var saver_5 = get_Saver_5(Companion_getInstance_38());
      if (equals(value_5, false)) {
        tmp$ret$39 = null;
        break $l$block_5;
      }
      var tmp_46;
      if (value_5 == null) {
        tmp_46 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_47 = saver_5.restore_fyjq85_k$(value_5);
        tmp_46 = (tmp_47 == null ? true : tmp_47 instanceof LocaleList) ? tmp_47 : THROW_CCE();
      }
      tmp$ret$39 = tmp_46;
    }
    var tmp_48 = tmp$ret$39;
    var tmp$ret$44;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_6 = list.get_c1px32_k$(11);
      var saver_6 = get_Saver_1(Companion_getInstance());
      if (equals(value_6, false)) {
        tmp$ret$44 = null;
        break $l$block_6;
      }
      var tmp_49;
      if (value_6 == null) {
        tmp_49 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_50 = saver_6.restore_fyjq85_k$(value_6);
        var tmp_51 = tmp_50 == null ? null : tmp_50.value_1;
        var tmp_52;
        var tmp_53;
        var tmp_54 = tmp_51;
        if ((tmp_54 == null ? null : new Color(tmp_54)) == null) {
          tmp_53 = true;
        } else {
          var tmp_55 = tmp_51;
          tmp_53 = (tmp_55 == null ? null : new Color(tmp_55))instanceof Color;
        }
        if (tmp_53) {
          tmp_52 = tmp_51;
        } else {
          tmp_52 = THROW_CCE();
        }
        tmp_49 = tmp_52;
      }
      tmp$ret$44 = tmp_49;
    }
    var tmp_56 = tmp$ret$44;
    var tmp_57 = ensureNotNull(tmp_56 == null ? null : new Color(tmp_56));
    var tmp$ret$49;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_7 = list.get_c1px32_k$(12);
      var saver_7 = get_Saver_6(Companion_getInstance_45());
      if (equals(value_7, false)) {
        tmp$ret$49 = null;
        break $l$block_7;
      }
      var tmp_58;
      if (value_7 == null) {
        tmp_58 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_59 = saver_7.restore_fyjq85_k$(value_7);
        tmp_58 = (tmp_59 == null ? true : tmp_59 instanceof TextDecoration) ? tmp_59 : THROW_CCE();
      }
      tmp$ret$49 = tmp_58;
    }
    var tmp_60 = tmp$ret$49;
    var tmp$ret$54;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_8 = list.get_c1px32_k$(13);
      var saver_8 = get_Saver_7(Companion_getInstance_2());
      if (equals(value_8, false)) {
        tmp$ret$54 = null;
        break $l$block_8;
      }
      var tmp_61;
      if (value_8 == null) {
        tmp_61 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_62 = saver_8.restore_fyjq85_k$(value_8);
        tmp_61 = (tmp_62 == null ? true : tmp_62 instanceof Shadow) ? tmp_62 : THROW_CCE();
      }
      tmp$ret$54 = tmp_61;
    }
    return SpanStyle_init_$Create$_1(tmp_7.value_1, tmp_16.packedValue_1, tmp_19, tmp_21, tmp_23, VOID, tmp_25, tmp_34.packedValue_1, tmp_42, tmp_45, tmp_48, tmp_57.value_1, tmp_60, tmp$ret$54);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.get_mask_woqbsl_k$();
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.get_scaleX_je2hxz_k$(), it.get_skewX_iyk9d1_k$()]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    return new TextGeometricTransform(list.get_c1px32_k$(0), list.get_c1px32_k$(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.get_firstLine_vqcugt_k$()), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(new TextUnit(it.get_restLine_r6nrrn_k$()), get_Saver(Companion_getInstance_1()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.get_c1px32_k$(0);
      var saver = get_Saver(Companion_getInstance_1());
      if (equals(value, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (value == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = saver.restore_fyjq85_k$(value);
        var tmp_1 = tmp_0 == null ? null : tmp_0.packedValue_1;
        var tmp_2;
        var tmp_3;
        var tmp_4 = tmp_1;
        if ((tmp_4 == null ? null : new TextUnit(tmp_4)) == null) {
          tmp_3 = true;
        } else {
          var tmp_5 = tmp_1;
          tmp_3 = (tmp_5 == null ? null : new TextUnit(tmp_5))instanceof TextUnit;
        }
        if (tmp_3) {
          tmp_2 = tmp_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        tmp = tmp_2;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6));
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.get_c1px32_k$(1);
      var saver_0 = get_Saver(Companion_getInstance_1());
      if (equals(value_0, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_8;
      if (value_0 == null) {
        tmp_8 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_9 = saver_0.restore_fyjq85_k$(value_0);
        var tmp_10 = tmp_9 == null ? null : tmp_9.packedValue_1;
        var tmp_11;
        var tmp_12;
        var tmp_13 = tmp_10;
        if ((tmp_13 == null ? null : new TextUnit(tmp_13)) == null) {
          tmp_12 = true;
        } else {
          var tmp_14 = tmp_10;
          tmp_12 = (tmp_14 == null ? null : new TextUnit(tmp_14))instanceof TextUnit;
        }
        if (tmp_12) {
          tmp_11 = tmp_10;
        } else {
          tmp_11 = THROW_CCE();
        }
        tmp_8 = tmp_11;
      }
      tmp$ret$5 = tmp_8;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7.packedValue_1, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).packedValue_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.get_weight_lbhkzl_k$();
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.multiplier_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.packedValue_1)), save(_TextRange___get_end__impl__gcdxpp(it.packedValue_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$5 = tmp_1;
    return new TextRange(TextRange_0(tmp_0, ensureNotNull(tmp$ret$5)));
  }
  function ShadowSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new Color(it.get_color_lnp1vl_k$()), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(new Offset_0(it.get_offset_slhc8e_k$()), get_Saver_8(Companion_getInstance_3()), $this$Saver), save(it.get_blurRadius_r8jo0y_k$())]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.get_c1px32_k$(0);
      var saver = get_Saver_1(Companion_getInstance());
      if (equals(value, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (value == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = saver.restore_fyjq85_k$(value);
        var tmp_1 = tmp_0 == null ? null : tmp_0.value_1;
        var tmp_2;
        var tmp_3;
        var tmp_4 = tmp_1;
        if ((tmp_4 == null ? null : new Color(tmp_4)) == null) {
          tmp_3 = true;
        } else {
          var tmp_5 = tmp_1;
          tmp_3 = (tmp_5 == null ? null : new Color(tmp_5))instanceof Color;
        }
        if (tmp_3) {
          tmp_2 = tmp_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        tmp = tmp_2;
      }
      tmp$ret$0 = tmp;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.get_c1px32_k$(1);
      var saver_0 = get_Saver_8(Companion_getInstance_3());
      if (equals(value_0, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_8;
      if (value_0 == null) {
        tmp_8 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_9 = saver_0.restore_fyjq85_k$(value_0);
        var tmp_10 = tmp_9 == null ? null : tmp_9.packedValue_1;
        var tmp_11;
        var tmp_12;
        var tmp_13 = tmp_10;
        if ((tmp_13 == null ? null : new Offset_0(tmp_13)) == null) {
          tmp_12 = true;
        } else {
          var tmp_14 = tmp_10;
          tmp_12 = (tmp_14 == null ? null : new Offset_0(tmp_14))instanceof Offset_0;
        }
        if (tmp_12) {
          tmp_11 = tmp_10;
        } else {
          tmp_11 = THROW_CCE();
        }
        tmp_8 = tmp_11;
      }
      tmp$ret$5 = tmp_8;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset_0(tmp_15));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(2);
    var tmp_17;
    if (tmp0_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_17 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$12 = tmp_17;
    return new Shadow(tmp_7.value_1, tmp_16.packedValue_1, ensureNotNull(tmp$ret$12));
  }
  function ColorSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return new ULong(_Color___get_value__impl__1pls5m(it.value_1));
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Color(_Color___init__impl__r6cqi2(it instanceof ULong ? it.data_1 : THROW_CCE()));
  }
  function TextUnitSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.packedValue_1)), save(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.packedValue_1)))]);
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.get_c1px32_k$(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.get_c1px32_k$(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = tmp0_safe_receiver_0 instanceof TextUnitType ? tmp0_safe_receiver_0.type_1 : THROW_CCE();
    }
    var tmp_2 = tmp_1;
    return new TextUnit(TextUnit_0(tmp_0, ensureNotNull(tmp_2 == null ? null : new TextUnitType(tmp_2)).type_1));
  }
  function OffsetSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset_0(Companion_getInstance_3().get_Unspecified_gis8po_k$()))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_Offset___get_x__impl__xvi35n(it.packedValue_1)), save(_Offset___get_y__impl__8bzhra(it.packedValue_1))]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_3().get_Unspecified_gis8po_k$();
    } else {
      var list = isInterface(it, List) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.get_c1px32_k$(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$2 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$2);
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.get_c1px32_k$(1);
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_2 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
      }
      var tmp$ret$5 = tmp_2;
      tmp = Offset(tmp_1, ensureNotNull(tmp$ret$5));
    }
    var tmp_3 = tmp;
    return tmp_3 == null ? null : new Offset_0(tmp_3);
  }
  function LocaleListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = it.get_localeList_1gj9gh_k$();
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var element = save_0(item, get_Saver_9(Companion_getInstance_37()), $this$Saver);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function LocaleListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var saver = get_Saver_9(Companion_getInstance_37());
          if (equals(item, false)) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp;
          if (item == null) {
            tmp = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_0 = saver.restore_fyjq85_k$(item);
            tmp = (tmp_0 == null ? true : tmp_0 instanceof Locale) ? tmp_0 : THROW_CCE();
          }
          tmp$ret$0 = tmp;
        }
        var element = ensureNotNull(tmp$ret$0);
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.toLanguageTag_xneel5_k$();
  }
  function LocaleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function AnnotationType_Paragraph_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Paragraph_instance;
  }
  function AnnotationType_Span_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Span_instance;
  }
  function AnnotationType_VerbatimTts_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_VerbatimTts_instance;
  }
  function AnnotationType_Url_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Url_instance;
  }
  function AnnotationType_String_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_String_instance;
  }
  var properties_initialized_Savers_kt_vjp8zk;
  function _init_properties_Savers_kt__o6r3ry() {
    if (!properties_initialized_Savers_kt_vjp8zk) {
      properties_initialized_Savers_kt_vjp8zk = true;
      var tmp = AnnotatedStringSaver$lambda;
      AnnotatedStringSaver = Saver(tmp, AnnotatedStringSaver$lambda_0);
      var tmp_0 = AnnotationRangeListSaver$lambda;
      AnnotationRangeListSaver = Saver(tmp_0, AnnotationRangeListSaver$lambda_0);
      var tmp_1 = AnnotationRangeSaver$lambda;
      AnnotationRangeSaver = Saver(tmp_1, AnnotationRangeSaver$lambda_0);
      var tmp_2 = VerbatimTtsAnnotationSaver$lambda;
      VerbatimTtsAnnotationSaver = Saver(tmp_2, VerbatimTtsAnnotationSaver$lambda_0);
      var tmp_3 = UrlAnnotationSaver$lambda;
      UrlAnnotationSaver = Saver(tmp_3, UrlAnnotationSaver$lambda_0);
      var tmp_4 = ParagraphStyleSaver$lambda;
      ParagraphStyleSaver = Saver(tmp_4, ParagraphStyleSaver$lambda_0);
      var tmp_5 = SpanStyleSaver$lambda;
      SpanStyleSaver = Saver(tmp_5, SpanStyleSaver$lambda_0);
      var tmp_6 = TextDecorationSaver$lambda;
      TextDecorationSaver = Saver(tmp_6, TextDecorationSaver$lambda_0);
      var tmp_7 = TextGeometricTransformSaver$lambda;
      TextGeometricTransformSaver = Saver(tmp_7, TextGeometricTransformSaver$lambda_0);
      var tmp_8 = TextIndentSaver$lambda;
      TextIndentSaver = Saver(tmp_8, TextIndentSaver$lambda_0);
      var tmp_9 = FontWeightSaver$lambda;
      FontWeightSaver = Saver(tmp_9, FontWeightSaver$lambda_0);
      var tmp_10 = BaselineShiftSaver$lambda;
      BaselineShiftSaver = Saver(tmp_10, BaselineShiftSaver$lambda_0);
      var tmp_11 = TextRangeSaver$lambda;
      TextRangeSaver = Saver(tmp_11, TextRangeSaver$lambda_0);
      var tmp_12 = ShadowSaver$lambda;
      ShadowSaver = Saver(tmp_12, ShadowSaver$lambda_0);
      var tmp_13 = ColorSaver$lambda;
      ColorSaver = Saver(tmp_13, ColorSaver$lambda_0);
      var tmp_14 = TextUnitSaver$lambda;
      TextUnitSaver = Saver(tmp_14, TextUnitSaver$lambda_0);
      var tmp_15 = OffsetSaver$lambda;
      OffsetSaver = Saver(tmp_15, OffsetSaver$lambda_0);
      var tmp_16 = LocaleListSaver$lambda;
      LocaleListSaver = Saver(tmp_16, LocaleListSaver$lambda_0);
      var tmp_17 = LocaleSaver$lambda;
      LocaleSaver = Saver(tmp_17, LocaleSaver$lambda_0);
    }
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $this) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    SpanStyle.call($this, Companion_getInstance_47().from_ccukrb_k$(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, null);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $this) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    SpanStyle.call($this, Companion_getInstance_47().from_ccukrb_k$(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    return SpanStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_getInstance_47().from_ccukrb_k$(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    alpha = alpha === VOID ? FloatCompanionObject_getInstance().get_NaN_18jnv2_k$() : alpha;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_getInstance_47().from_6wp01d_k$(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function get_$stableprop_6() {
    return 0;
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.textForegroundStyle_1 = textForegroundStyle;
    this.fontSize_1 = fontSize;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.fontFamily_1 = fontFamily;
    this.fontFeatureSettings_1 = fontFeatureSettings;
    this.letterSpacing_1 = letterSpacing;
    this.baselineShift_1 = baselineShift;
    this.textGeometricTransform_1 = textGeometricTransform;
    this.localeList_1 = localeList;
    this.background_1 = background;
    this.textDecoration_1 = textDecoration;
    this.shadow_1 = shadow;
    this.platformStyle_1 = platformStyle;
    this.drawStyle_1 = drawStyle;
    this.$stable_1 = 0;
  }
  protoOf(SpanStyle).get_textForegroundStyle_1frzu0_k$ = function () {
    return this.textForegroundStyle_1;
  };
  protoOf(SpanStyle).get_fontSize_ergf2z_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(SpanStyle).get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(SpanStyle).get_fontStyle_hzv4zg_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(SpanStyle).get_fontSynthesis_h5auiy_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(SpanStyle).get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(SpanStyle).get_fontFeatureSettings_a47533_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  protoOf(SpanStyle).get_letterSpacing_k79xfu_k$ = function () {
    return this.letterSpacing_1;
  };
  protoOf(SpanStyle).get_baselineShift_99zyho_k$ = function () {
    return this.baselineShift_1;
  };
  protoOf(SpanStyle).get_textGeometricTransform_tdfmin_k$ = function () {
    return this.textGeometricTransform_1;
  };
  protoOf(SpanStyle).get_localeList_1gj9gh_k$ = function () {
    return this.localeList_1;
  };
  protoOf(SpanStyle).get_background_8l4942_k$ = function () {
    return this.background_1;
  };
  protoOf(SpanStyle).get_textDecoration_itgjwm_k$ = function () {
    return this.textDecoration_1;
  };
  protoOf(SpanStyle).get_shadow_jgtb8p_k$ = function () {
    return this.shadow_1;
  };
  protoOf(SpanStyle).get_platformStyle_7i053p_k$ = function () {
    return this.platformStyle_1;
  };
  protoOf(SpanStyle).get_drawStyle_arbehw_k$ = function () {
    return this.drawStyle_1;
  };
  protoOf(SpanStyle).get_color_lnp1vl_k$ = function () {
    return this.textForegroundStyle_1.get_color_lnp1vl_k$();
  };
  protoOf(SpanStyle).get_brush_ipcjyp_k$ = function () {
    return this.textForegroundStyle_1.get_brush_ipcjyp_k$();
  };
  protoOf(SpanStyle).get_alpha_iooth1_k$ = function () {
    return this.textForegroundStyle_1.get_alpha_iooth1_k$();
  };
  protoOf(SpanStyle).merge_tmjkxk_k$ = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.textForegroundStyle_1.get_color_lnp1vl_k$(), other.textForegroundStyle_1.get_brush_ipcjyp_k$(), other.textForegroundStyle_1.get_alpha_iooth1_k$(), other.fontSize_1, other.fontWeight_1, other.fontStyle_1, other.fontSynthesis_1, other.fontFamily_1, other.fontFeatureSettings_1, other.letterSpacing_1, other.baselineShift_1, other.textGeometricTransform_1, other.localeList_1, other.background_1, other.textDecoration_1, other.shadow_1, other.platformStyle_1, other.drawStyle_1);
  };
  protoOf(SpanStyle).merge$default_qc94do_k$ = function (other, $super) {
    other = other === VOID ? null : other;
    return $super === VOID ? this.merge_tmjkxk_k$(other) : $super.merge_tmjkxk_k$.call(this, other);
  };
  protoOf(SpanStyle).plus_mf6lxd_k$ = function (other) {
    return this.merge_tmjkxk_k$(other);
  };
  protoOf(SpanStyle).copy_dpnny7_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow) {
    var tmp;
    if (equals(color, this.get_color_lnp1vl_k$())) {
      tmp = this.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_47().from_ccukrb_k$(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, this.platformStyle_1, this.drawStyle_1);
  };
  protoOf(SpanStyle).copy$default_irpwk_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, $super) {
    color = color === VOID ? this.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_dpnny7_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow);
    } else {
      var tmp_0 = $super.copy_dpnny7_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow);
    }
    return tmp;
  };
  protoOf(SpanStyle).copy_y2sgus_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle) {
    var tmp;
    if (equals(color, this.get_color_lnp1vl_k$())) {
      tmp = this.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_47().from_ccukrb_k$(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
  };
  protoOf(SpanStyle).copy$default_xj0ne6_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, $super) {
    color = color === VOID ? this.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_y2sgus_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle);
    } else {
      var tmp_0 = $super.copy_y2sgus_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).copy_9s287b_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.get_color_lnp1vl_k$())) {
      tmp = this.textForegroundStyle_1;
    } else {
      tmp = Companion_getInstance_47().from_ccukrb_k$(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).copy$default_yo6fbs_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.drawStyle_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_9s287b_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.copy_9s287b_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).copy_u3yo19_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return new SpanStyle(Companion_getInstance_47().from_6wp01d_k$(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).copy$default_ypa2de_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    alpha = alpha === VOID ? this.get_alpha_iooth1_k$() : alpha;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.drawStyle_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_u3yo19_k$(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.copy_u3yo19_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.hasSameLayoutAffectingAttributes_n0ls75_k$(other) ? this.hasSameNonLayoutAttributes_mkn2vf_k$(other) : false;
  };
  protoOf(SpanStyle).hasSameLayoutAffectingAttributes_n0ls75_k$ = function (other) {
    if (this === other)
      return true;
    if (!equals(this.fontSize_1, other.fontSize_1))
      return false;
    if (!equals(this.fontWeight_1, other.fontWeight_1))
      return false;
    var tmp = this.fontStyle_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.fontStyle_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.fontSynthesis_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.fontFamily_1, other.fontFamily_1))
      return false;
    if (!(this.fontFeatureSettings_1 == other.fontFeatureSettings_1))
      return false;
    if (!equals(this.letterSpacing_1, other.letterSpacing_1))
      return false;
    var tmp_5 = this.baselineShift_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.baselineShift_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.textGeometricTransform_1, other.textGeometricTransform_1))
      return false;
    if (!equals(this.localeList_1, other.localeList_1))
      return false;
    if (!equals(this.background_1, other.background_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hasSameNonLayoutAttributes_mkn2vf_k$ = function (other) {
    if (!equals(this.textForegroundStyle_1, other.textForegroundStyle_1))
      return false;
    if (!equals(this.textDecoration_1, other.textDecoration_1))
      return false;
    if (!equals(this.shadow_1, other.shadow_1))
      return false;
    if (!equals(this.drawStyle_1, other.drawStyle_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.get_color_lnp1vl_k$());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.get_brush_ipcjyp_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.get_alpha_iooth1_k$()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.fontSize_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.fontWeight_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.fontStyle_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.fontSynthesis_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.fontFamily_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.fontFeatureSettings_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.letterSpacing_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.baselineShift_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.textGeometricTransform_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.localeList_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.textDecoration_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.shadow_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.platformStyle_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.drawStyle_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).hashCodeLayoutAffectingAttributes_3jfwjl_k$ = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.fontSize_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.fontWeight_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.fontStyle_1;
    var tmp_1;
    var tmp_2 = tmp2_safe_receiver;
    if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      tmp_1 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_1;
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp4_safe_receiver = this.fontSynthesis_1;
    var tmp_4;
    var tmp_5 = tmp4_safe_receiver;
    if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
      tmp_4 = null;
    } else {
      tmp_4 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_4;
    result = tmp_3 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp6_safe_receiver = this.fontFamily_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_6 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp8_safe_receiver = this.fontFeatureSettings_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_7 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.letterSpacing_1) | 0;
    var tmp_8 = imul(31, result);
    var tmp10_safe_receiver = this.baselineShift_1;
    var tmp_9;
    var tmp_10 = tmp10_safe_receiver;
    if ((tmp_10 == null ? null : new BaselineShift(tmp_10)) == null) {
      tmp_9 = null;
    } else {
      tmp_9 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_9;
    result = tmp_8 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_11 = imul(31, result);
    var tmp12_safe_receiver = this.textGeometricTransform_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_11 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp14_safe_receiver = this.localeList_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_12 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    var tmp_13 = imul(31, result);
    var tmp16_safe_receiver = this.platformStyle_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_13 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    var tmp = 'SpanStyle(' + ('color=' + new Color(this.get_color_lnp1vl_k$()) + ', ') + ('brush=' + this.get_brush_ipcjyp_k$() + ', ') + ('alpha=' + this.get_alpha_iooth1_k$() + ', ') + ('fontSize=' + new TextUnit(this.fontSize_1) + ', ') + ('fontWeight=' + this.fontWeight_1 + ', ');
    var tmp_0 = this.fontStyle_1;
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.fontFamily_1 + ', ') + ('fontFeatureSettings=' + this.fontFeatureSettings_1 + ', ') + ('letterSpacing=' + new TextUnit(this.letterSpacing_1) + ', ');
    var tmp_4 = this.baselineShift_1;
    return tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.textGeometricTransform_1 + ', ') + ('localeList=' + this.localeList_1 + ', ') + ('background=' + new Color(this.background_1) + ', ') + ('textDecoration=' + this.textDecoration_1 + ', ') + ('shadow=' + this.shadow_1 + ', ') + ('platformStyle=' + this.platformStyle_1 + ', ') + ('drawStyle=' + this.drawStyle_1) + ')';
  };
  function fastMerge_0(_this__u8e3s4, color, brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9;
    var tmp_10;
    var tmp_11;
    var tmp_12;
    var tmp_13;
    var tmp_14;
    var tmp_15;
    var tmp_16;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(fontSize)) {
      tmp_16 = !equals(fontSize, _this__u8e3s4.fontSize_1);
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = true;
    } else {
      var tmp_17;
      var tmp_18;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.textForegroundStyle_1.get_color_lnp1vl_k$());
      } else {
        tmp_17 = false;
      }
      tmp_15 = tmp_17;
    }
    if (tmp_15) {
      tmp_14 = true;
    } else {
      var tmp_19;
      var tmp_20 = fontStyle;
      if (!((tmp_20 == null ? null : new FontStyle(tmp_20)) == null)) {
        var tmp_21 = fontStyle;
        var tmp_22 = tmp_21 == null ? null : new FontStyle(tmp_21);
        var tmp_23 = _this__u8e3s4.fontStyle_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !(fontWeight == null) ? !equals(fontWeight, _this__u8e3s4.fontWeight_1) : false;
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = !(fontFamily == null) ? !(fontFamily === _this__u8e3s4.fontFamily_1) : false;
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(letterSpacing)) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.letterSpacing_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = !(textDecoration == null) ? !equals(textDecoration, _this__u8e3s4.textDecoration_1) : false;
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.textForegroundStyle_1.get_brush_ipcjyp_k$());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = !(brush == null) ? !(alpha === _this__u8e3s4.textForegroundStyle_1.get_alpha_iooth1_k$()) : false;
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.fontSynthesis_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = !(fontFeatureSettings == null) ? !(fontFeatureSettings == _this__u8e3s4.fontFeatureSettings_1) : false;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.baselineShift_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = !(textGeometricTransform == null) ? !equals(textGeometricTransform, _this__u8e3s4.textGeometricTransform_1) : false;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(localeList == null) ? !equals(localeList, _this__u8e3s4.localeList_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
        tmp_35 = !equals(background, _this__u8e3s4.background_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !(shadow == null) ? !equals(shadow, _this__u8e3s4.shadow_1) : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.platformStyle_1) : false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(drawStyle == null) ? !equals(drawStyle, _this__u8e3s4.drawStyle_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_getInstance_47().from_6wp01d_k$(brush, alpha);
    } else {
      tmp_36 = Companion_getInstance_47().from_ccukrb_k$(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.textForegroundStyle_1.merge_b7txoj_k$(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.fontFamily_1 : fontFamily;
    var tmp13_fontSize = !get_isUnspecified(fontSize) ? fontSize : _this__u8e3s4.fontSize_1;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.fontWeight_1 : fontWeight;
    var tmp_37;
    var tmp_38 = fontStyle;
    if ((tmp_38 == null ? null : new FontStyle(tmp_38)) == null) {
      tmp_37 = _this__u8e3s4.fontStyle_1;
    } else {
      tmp_37 = fontStyle;
    }
    var tmp15_fontStyle = tmp_37;
    var tmp_39;
    var tmp_40 = fontSynthesis;
    if ((tmp_40 == null ? null : new FontSynthesis(tmp_40)) == null) {
      tmp_39 = _this__u8e3s4.fontSynthesis_1;
    } else {
      tmp_39 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_39;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.fontFeatureSettings_1 : fontFeatureSettings;
    var tmp_41;
    if (!get_isUnspecified(letterSpacing)) {
      tmp_41 = letterSpacing;
    } else {
      tmp_41 = _this__u8e3s4.letterSpacing_1;
    }
    var tmp18_letterSpacing = tmp_41;
    var tmp_42;
    var tmp_43 = baselineShift;
    if ((tmp_43 == null ? null : new BaselineShift(tmp_43)) == null) {
      tmp_42 = _this__u8e3s4.baselineShift_1;
    } else {
      tmp_42 = baselineShift;
    }
    var tmp19_baselineShift = tmp_42;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.textGeometricTransform_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.localeList_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_44;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
      tmp_44 = background;
    } else {
      // Inline function 'androidx.compose.ui.text.fastMerge.<anonymous>' call
      tmp_44 = _this__u8e3s4.background_1;
    }
    var tmp22_background = tmp_44;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.textDecoration_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.shadow_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.drawStyle_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.platformStyle_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.platformStyle_1;
    return _this__u8e3s4.platformStyle_1.merge_ap0tcl_k$(other);
  }
  function lerp_5(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp8_textForegroundStyle = lerp_9(start.textForegroundStyle_1, stop.textForegroundStyle_1, fraction);
    var tmp9_fontFamily = lerpDiscrete(start.fontFamily_1, stop.fontFamily_1, fraction);
    var tmp10_fontSize = lerpTextUnitInheritable(start.fontSize_1, stop.fontSize_1, fraction);
    var tmp0_elvis_lhs = start.fontWeight_1;
    var tmp = tmp0_elvis_lhs == null ? Companion_getInstance_27().get_Normal_22avww_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.fontWeight_1;
    var tmp11_fontWeight = lerp_7(tmp, tmp1_elvis_lhs == null ? Companion_getInstance_27().get_Normal_22avww_k$() : tmp1_elvis_lhs, fraction);
    var tmp_0 = start.fontStyle_1;
    var tmp_1 = tmp_0 == null ? null : new FontStyle(tmp_0);
    var tmp_2 = stop.fontStyle_1;
    var tmp_3 = lerpDiscrete(tmp_1, tmp_2 == null ? null : new FontStyle(tmp_2), fraction);
    var tmp12_fontStyle = tmp_3 == null ? null : tmp_3.value_1;
    var tmp_4 = start.fontSynthesis_1;
    var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
    var tmp_6 = stop.fontSynthesis_1;
    var tmp_7 = lerpDiscrete(tmp_5, tmp_6 == null ? null : new FontSynthesis(tmp_6), fraction);
    var tmp13_fontSynthesis = tmp_7 == null ? null : tmp_7.value_1;
    var tmp14_fontFeatureSettings = lerpDiscrete(start.fontFeatureSettings_1, stop.fontFeatureSettings_1, fraction);
    var tmp15_letterSpacing = lerpTextUnitInheritable(start.letterSpacing_1, stop.letterSpacing_1, fraction);
    var tmp2_elvis_lhs = start.baselineShift_1;
    var tmp_8;
    var tmp_9 = tmp2_elvis_lhs;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null) {
      tmp_8 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_8 = tmp2_elvis_lhs;
    }
    var tmp_10 = tmp_8;
    var tmp3_elvis_lhs = stop.baselineShift_1;
    var tmp_11;
    var tmp_12 = tmp3_elvis_lhs;
    if ((tmp_12 == null ? null : new BaselineShift(tmp_12)) == null) {
      tmp_11 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_11 = tmp3_elvis_lhs;
    }
    var tmp16_baselineShift = lerp_8(tmp_10, tmp_11, fraction);
    var tmp4_elvis_lhs = start.textGeometricTransform_1;
    var tmp_13 = tmp4_elvis_lhs == null ? Companion_getInstance_48().get_None_wo6tgh_k$() : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = stop.textGeometricTransform_1;
    var tmp17_textGeometricTransform = lerp_10(tmp_13, tmp5_elvis_lhs == null ? Companion_getInstance_48().get_None_wo6tgh_k$() : tmp5_elvis_lhs, fraction);
    var tmp18_localeList = lerpDiscrete(start.localeList_1, stop.localeList_1, fraction);
    var tmp19_background = lerp(start.background_1, stop.background_1, fraction);
    var tmp20_textDecoration = lerpDiscrete(start.textDecoration_1, stop.textDecoration_1, fraction);
    var tmp6_elvis_lhs = start.shadow_1;
    var tmp_14 = tmp6_elvis_lhs == null ? new Shadow() : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = stop.shadow_1;
    var tmp21_shadow = lerp_0(tmp_14, tmp7_elvis_lhs == null ? new Shadow() : tmp7_elvis_lhs, fraction);
    var tmp22_platformStyle = lerpPlatformStyle_0(start.platformStyle_1, stop.platformStyle_1, fraction);
    var tmp23_drawStyle = lerpDiscrete(start.drawStyle_1, stop.drawStyle_1, fraction);
    return new SpanStyle(tmp8_textForegroundStyle, tmp10_fontSize, tmp11_fontWeight, tmp12_fontStyle, tmp13_fontSynthesis, tmp9_fontFamily, tmp14_fontFeatureSettings, tmp15_letterSpacing, tmp16_baselineShift, tmp17_textGeometricTransform, tmp18_localeList, tmp19_background, tmp20_textDecoration, tmp21_shadow, tmp22_platformStyle, tmp23_drawStyle);
  }
  function lerpDiscrete(a, b, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    return fraction < 0.5 ? a : b;
  }
  function lerpTextUnitInheritable(a, b, t) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (get_isUnspecified(a) ? true : get_isUnspecified(b))
      return lerpDiscrete(new TextUnit(a), new TextUnit(b), t).packedValue_1;
    return lerp_1(a, b, t);
  }
  function lerpPlatformStyle_0(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (start == null ? stop == null : false)
      return null;
    var startNonNull = start == null ? Companion_getInstance_53().get_Default_goqax4_k$() : start;
    var stopNonNull = stop == null ? Companion_getInstance_53().get_Default_goqax4_k$() : stop;
    return lerp_12(startNonNull, stopNonNull, fraction);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.textForegroundStyle_1.takeOrElse_vujaw_k$(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.fontSize_1) ? get_DefaultFontSize() : style.fontSize_1;
    var tmp0_elvis_lhs = style.fontWeight_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_27().get_Normal_22avww_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.fontStyle_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_25().get_Normal_tevh6u_k$();
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.fontSynthesis_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_26().get_All_bqi34r_k$();
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.fontFamily_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_21().get_Default_goqax4_k$() : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.fontFeatureSettings_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.letterSpacing_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.letterSpacing_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.baselineShift_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_39().get_None_9kuyzu_k$();
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.textGeometricTransform_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_48().get_None_wo6tgh_k$() : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.localeList_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_getInstance_38().get_current_jwi6j4_k$() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = style.background_1;
    var tmp_17;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
      tmp_17 = this_0;
    } else {
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp_17 = get_DefaultBackgroundColor();
    }
    var tmp_18 = tmp_17;
    var tmp8_elvis_lhs = style.textDecoration_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_45().get_None_wo6tgh_k$() : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.shadow_1;
    var tmp_20 = tmp9_elvis_lhs == null ? Companion_getInstance_2().get_None_wo6tgh_k$() : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.drawStyle_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp_20, style.platformStyle_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return Companion_getInstance_47().from_ccukrb_k$(get_DefaultColor());
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().get_Transparent_if5ln4_k$();
      DefaultColor = Companion_getInstance().get_Black_t4k9fh_k$();
    }
  }
  function get_stringDelegate() {
    _init_properties_String_kt__y65ngv();
    return stringDelegate;
  }
  var stringDelegate;
  function PlatformStringDelegate() {
  }
  var properties_initialized_String_kt_x0nxsd;
  function _init_properties_String_kt__y65ngv() {
    if (!properties_initialized_String_kt_x0nxsd) {
      properties_initialized_String_kt_x0nxsd = true;
      stringDelegate = ActualStringDelegate();
    }
  }
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function synchronized(lock, block) {
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    return block();
  }
  function fastFilter(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        if (predicate(item)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastFold(_this__u8e3s4, initial, operation) {
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = initial;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFold.<anonymous>' call
        accumulator = operation(accumulator, item);
      }
       while (inductionVariable <= last);
    return accumulator;
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.append_jgojdo_k$(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.get_c1px32_k$(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.append_jgojdo_k$(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.append_jgojdo_k$(truncated);
    }
    buffer.append_jgojdo_k$(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.append_jgojdo_k$(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.append_jgojdo_k$(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.append_am5a4z_k$(element.value_1);
        } else {
          _this__u8e3s4.append_jgojdo_k$(toString_0(element));
        }
      }
    }
  }
  function fastFlatMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFlatMap.<anonymous>' call
        var list = transform(item);
        addAll(target, list);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastDistinctBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    var set = HashSet_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastDistinctBy.<anonymous>' call
        var key = selector(item);
        if (set.add_utx5q5_k$(key)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function get_$stableprop_7() {
    return 8;
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.layoutInput_1 = layoutInput;
    this.multiParagraph_1 = multiParagraph;
    this.size_1 = size;
    this.firstBaseline_1 = this.multiParagraph_1.get_firstBaseline_s5430_k$();
    this.lastBaseline_1 = this.multiParagraph_1.get_lastBaseline_inuptw_k$();
    this.placeholderRects_1 = this.multiParagraph_1.get_placeholderRects_1ky2fv_k$();
    this.$stable_1 = 8;
  }
  protoOf(TextLayoutResult).get_layoutInput_o7gjah_k$ = function () {
    return this.layoutInput_1;
  };
  protoOf(TextLayoutResult).get_multiParagraph_xte3we_k$ = function () {
    return this.multiParagraph_1;
  };
  protoOf(TextLayoutResult).get_size_kd98kr_k$ = function () {
    return this.size_1;
  };
  protoOf(TextLayoutResult).get_firstBaseline_s5430_k$ = function () {
    return this.firstBaseline_1;
  };
  protoOf(TextLayoutResult).get_lastBaseline_inuptw_k$ = function () {
    return this.lastBaseline_1;
  };
  protoOf(TextLayoutResult).get_didOverflowHeight_k18vi9_k$ = function () {
    return this.multiParagraph_1.get_didExceedMaxLines_xyxo57_k$() ? true : _IntSize___get_height__impl__prv63b(this.size_1) < this.multiParagraph_1.get_height_e7t92o_k$();
  };
  protoOf(TextLayoutResult).get_didOverflowWidth_9kwej6_k$ = function () {
    return _IntSize___get_width__impl__d9yl4o(this.size_1) < this.multiParagraph_1.get_width_j0q4yl_k$();
  };
  protoOf(TextLayoutResult).get_hasVisualOverflow_ocbqq5_k$ = function () {
    return this.get_didOverflowWidth_9kwej6_k$() ? true : this.get_didOverflowHeight_k18vi9_k$();
  };
  protoOf(TextLayoutResult).get_placeholderRects_1ky2fv_k$ = function () {
    return this.placeholderRects_1;
  };
  protoOf(TextLayoutResult).get_lineCount_lmaazy_k$ = function () {
    return this.multiParagraph_1.get_lineCount_lmaazy_k$();
  };
  protoOf(TextLayoutResult).getLineStart_clke9s_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineStart_clke9s_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineEnd_o6geci_k$ = function (lineIndex, visibleEnd) {
    return this.multiParagraph_1.getLineEnd_o6geci_k$(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).getLineEnd$default_8vuhh5_k$ = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.getLineEnd_o6geci_k$(lineIndex, visibleEnd) : $super.getLineEnd_o6geci_k$.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).isLineEllipsized_1fausj_k$ = function (lineIndex) {
    return this.multiParagraph_1.isLineEllipsized_1fausj_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineTop_q0a6r_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineTop_q0a6r_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineBottom_yhu6bn_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineBottom_yhu6bn_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineLeft_799m07_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineLeft_799m07_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineRight_j8rtqe_k$ = function (lineIndex) {
    return this.multiParagraph_1.getLineRight_j8rtqe_k$(lineIndex);
  };
  protoOf(TextLayoutResult).getLineForOffset_jakwx2_k$ = function (offset) {
    return this.multiParagraph_1.getLineForOffset_jakwx2_k$(offset);
  };
  protoOf(TextLayoutResult).getLineForVerticalPosition_lon9k6_k$ = function (vertical) {
    return this.multiParagraph_1.getLineForVerticalPosition_lon9k6_k$(vertical);
  };
  protoOf(TextLayoutResult).getHorizontalPosition_9mx7bk_k$ = function (offset, usePrimaryDirection) {
    return this.multiParagraph_1.getHorizontalPosition_9mx7bk_k$(offset, usePrimaryDirection);
  };
  protoOf(TextLayoutResult).getParagraphDirection_qweb73_k$ = function (offset) {
    return this.multiParagraph_1.getParagraphDirection_qweb73_k$(offset);
  };
  protoOf(TextLayoutResult).getBidiRunDirection_c67d8i_k$ = function (offset) {
    return this.multiParagraph_1.getBidiRunDirection_c67d8i_k$(offset);
  };
  protoOf(TextLayoutResult).getOffsetForPosition_12t0zj_k$ = function (position) {
    return this.multiParagraph_1.getOffsetForPosition_12t0zj_k$(position);
  };
  protoOf(TextLayoutResult).getBoundingBox_xfho9l_k$ = function (offset) {
    return this.multiParagraph_1.getBoundingBox_xfho9l_k$(offset);
  };
  protoOf(TextLayoutResult).getWordBoundary_s8pru_k$ = function (offset) {
    return this.multiParagraph_1.getWordBoundary_s8pru_k$(offset);
  };
  protoOf(TextLayoutResult).getCursorRect_gdluko_k$ = function (offset) {
    return this.multiParagraph_1.getCursorRect_gdluko_k$(offset);
  };
  protoOf(TextLayoutResult).getPathForRange_bge8b5_k$ = function (start, end) {
    return this.multiParagraph_1.getPathForRange_bge8b5_k$(start, end);
  };
  protoOf(TextLayoutResult).copy_masfhl_k$ = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.multiParagraph_1, size);
  };
  protoOf(TextLayoutResult).copy$default_7jjbm1_k$ = function (layoutInput, size, $super) {
    layoutInput = layoutInput === VOID ? this.layoutInput_1 : layoutInput;
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_masfhl_k$(layoutInput, size) : $super.copy_masfhl_k$.call(this, layoutInput, new IntSize(size));
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.layoutInput_1.equals(other.layoutInput_1))
      return false;
    if (!equals(this.multiParagraph_1, other.multiParagraph_1))
      return false;
    if (!equals(this.size_1, other.size_1))
      return false;
    if (!(this.firstBaseline_1 === other.firstBaseline_1))
      return false;
    if (!(this.lastBaseline_1 === other.lastBaseline_1))
      return false;
    if (!equals(this.placeholderRects_1, other.placeholderRects_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.layoutInput_1.hashCode();
    result = imul(31, result) + hashCode(this.multiParagraph_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.size_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.firstBaseline_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.lastBaseline_1) | 0;
    result = imul(31, result) + hashCode(this.placeholderRects_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.layoutInput_1 + ', ') + ('multiParagraph=' + this.multiParagraph_1 + ', ') + ('size=' + new IntSize(this.size_1) + ', ') + ('firstBaseline=' + this.firstBaseline_1 + ', ') + ('lastBaseline=' + this.lastBaseline_1 + ', ') + ('placeholderRects=' + this.placeholderRects_1) + ')';
  };
  function _set__developerSuppliedResourceLoader__3zinn7($this, _set____db54di) {
    $this._developerSuppliedResourceLoader_1 = _set____db54di;
  }
  function _get__developerSuppliedResourceLoader__1ll3nl($this) {
    return $this._developerSuppliedResourceLoader_1;
  }
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, createFontFamilyResolver(resourceLoader), constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput_init_$Init$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$_0(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function get_$stableprop_8() {
    return 8;
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.text_1 = text;
    this.style_1 = style;
    this.placeholders_1 = placeholders;
    this.maxLines_1 = maxLines;
    this.softWrap_1 = softWrap;
    this.overflow_1 = overflow;
    this.density_1 = density;
    this.layoutDirection_1 = layoutDirection;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.constraints_1 = constraints;
    this._developerSuppliedResourceLoader_1 = resourceLoader;
    this.$stable_1 = 8;
  }
  protoOf(TextLayoutInput).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TextLayoutInput).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(TextLayoutInput).get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  protoOf(TextLayoutInput).get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  protoOf(TextLayoutInput).get_softWrap_a000bn_k$ = function () {
    return this.softWrap_1;
  };
  protoOf(TextLayoutInput).get_overflow_30wlhc_k$ = function () {
    return this.overflow_1;
  };
  protoOf(TextLayoutInput).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(TextLayoutInput).get_layoutDirection_7e37v0_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(TextLayoutInput).get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  protoOf(TextLayoutInput).get_constraints_y0yfdk_k$ = function () {
    return this.constraints_1;
  };
  protoOf(TextLayoutInput).get_resourceLoader_tankju_k$ = function () {
    var tmp0_elvis_lhs = this._developerSuppliedResourceLoader_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_17().from_fsblxv_k$(this.fontFamilyResolver_1) : tmp0_elvis_lhs;
  };
  protoOf(TextLayoutInput).copy_7iv9j7_k$ = function (text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) {
    return new TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, this.fontFamilyResolver_1, constraints);
  };
  protoOf(TextLayoutInput).copy$default_s0hxbi_k$ = function (text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints, $super) {
    text = text === VOID ? this.text_1 : text;
    style = style === VOID ? this.style_1 : style;
    placeholders = placeholders === VOID ? this.placeholders_1 : placeholders;
    maxLines = maxLines === VOID ? this.maxLines_1 : maxLines;
    softWrap = softWrap === VOID ? this.softWrap_1 : softWrap;
    overflow = overflow === VOID ? this.overflow_1 : overflow;
    density = density === VOID ? this.density_1 : density;
    layoutDirection = layoutDirection === VOID ? this.layoutDirection_1 : layoutDirection;
    resourceLoader = resourceLoader === VOID ? this.get_resourceLoader_tankju_k$() : resourceLoader;
    constraints = constraints === VOID ? this.constraints_1 : constraints;
    return $super === VOID ? this.copy_7iv9j7_k$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, constraints) : $super.copy_7iv9j7_k$.call(this, text, style, placeholders, maxLines, softWrap, new TextOverflow(overflow), density, layoutDirection, resourceLoader, new Constraints_0(constraints));
  };
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.placeholders_1, other.placeholders_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!equals(this.density_1, other.density_1))
      return false;
    if (!this.layoutDirection_1.equals(other.layoutDirection_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!equals(this.constraints_1, other.constraints_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.placeholders_1) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.softWrap_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.overflow_1) | 0;
    result = imul(31, result) + hashCode(this.density_1) | 0;
    result = imul(31, result) + this.layoutDirection_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.constraints_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    return 'TextLayoutInput(' + ('text=' + this.text_1 + ', ') + ('style=' + this.style_1 + ', ') + ('placeholders=' + this.placeholders_1 + ', ') + ('maxLines=' + this.maxLines_1 + ', ') + ('softWrap=' + this.softWrap_1 + ', ') + ('overflow=' + new TextOverflow(this.overflow_1) + ', ') + ('density=' + this.density_1 + ', ') + ('layoutDirection=' + this.layoutDirection_1 + ', ') + ('fontFamilyResolver=' + this.fontFamilyResolver_1 + ', ') + ('constraints=' + new Constraints_0(this.constraints_1)) + ')';
  };
  function _get_fontFamilyResolver__s3uj2m($this) {
    return $this.fontFamilyResolver_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cache_1 = LinkedHashMap_init_$Create$();
    this.lock_1 = createSynchronizedObject();
  }
  protoOf(Companion_0).set_cache_1rkaye_k$ = function (_set____db54di) {
    this.cache_1 = _set____db54di;
  };
  protoOf(Companion_0).get_cache_ipl461_k$ = function () {
    return this.cache_1;
  };
  protoOf(Companion_0).get_lock_wopyt0_k$ = function () {
    return this.lock_1;
  };
  protoOf(Companion_0).from_fsblxv_k$ = function (fontFamilyResolver) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    var tmp0_safe_receiver = Companion_getInstance_17().cache_1.get_wei43m_k$(fontFamilyResolver);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var deprecatedBridgeFontResourceLoader = new DeprecatedBridgeFontResourceLoader(fontFamilyResolver);
    // Inline function 'kotlin.collections.set' call
    Companion_getInstance_17().cache_1.put_4fpzoq_k$(fontFamilyResolver, deprecatedBridgeFontResourceLoader);
    return deprecatedBridgeFontResourceLoader;
  };
  var Companion_instance_0;
  function Companion_getInstance_17() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DeprecatedBridgeFontResourceLoader(fontFamilyResolver) {
    Companion_getInstance_17();
    this.fontFamilyResolver_1 = fontFamilyResolver;
  }
  protoOf(DeprecatedBridgeFontResourceLoader).load_1hfgn9_k$ = function (font) {
    return this.fontFamilyResolver_1.resolve$default_51n6kl_k$(toFontFamily(font), font.get_weight_lbhkzl_k$(), font.get_style_fnlxse_k$()).get_value_j01efc_k$();
  };
  function get_DefaultCacheSize() {
    return DefaultCacheSize;
  }
  var DefaultCacheSize;
  function get_$stableprop_9() {
    return 0;
  }
  function TextPainter() {
    TextPainter_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(TextPainter).paint_kguo5w_k$ = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult.get_hasVisualOverflow_ocbqq5_k$() ? !(textLayoutResult.get_layoutInput_o7gjah_k$().get_overflow_30wlhc_k$() === Companion_getInstance_50().get_Visible_m15n1a_k$()) : false;
    if (needClipping) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.get_size_kd98kr_k$());
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.get_size_kd98kr_k$());
      var bounds = Rect(Companion_getInstance_3().get_Zero_k6n73t_k$(), Size(width, height));
      canvas.save_fbe7h_k$();
      canvas.clipRect$default_a4bw85_k$(bounds);
    }
    var style = textLayoutResult.get_layoutInput_o7gjah_k$().get_style_iyqetk_k$().get_spanStyle_2b836q_k$();
    var tmp0_elvis_lhs = style.get_textDecoration_itgjwm_k$();
    var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_45().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.get_shadow_jgtb8p_k$();
    var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_2().get_None_wo6tgh_k$() : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = style.get_drawStyle_arbehw_k$();
    var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
    try {
      var brush = style.get_brush_ipcjyp_k$();
      if (!(brush == null)) {
        var tmp;
        if (!(style.get_textForegroundStyle_1frzu0_k$() === Unspecified_getInstance())) {
          tmp = style.get_textForegroundStyle_1frzu0_k$().get_alpha_iooth1_k$();
        } else {
          tmp = 1.0;
        }
        var alpha = tmp;
        textLayoutResult.get_multiParagraph_xte3we_k$().paint$default_3gfbfa_k$(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp_0;
        if (!(style.get_textForegroundStyle_1frzu0_k$() === Unspecified_getInstance())) {
          tmp_0 = style.get_textForegroundStyle_1frzu0_k$().get_color_lnp1vl_k$();
        } else {
          tmp_0 = Companion_getInstance().get_Black_t4k9fh_k$();
        }
        var color = tmp_0;
        textLayoutResult.get_multiParagraph_xte3we_k$().paint$default_rvqyft_k$(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (needClipping) {
        canvas.restore_a1ykhu_k$();
      }
    }
  };
  var TextPainter_instance;
  function TextPainter_getInstance() {
    if (TextPainter_instance == null)
      new TextPainter();
    return TextPainter_instance;
  }
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _get_packedValue__aj623s($this).shr_9fl3wl_k$(32).toInt_1tsl84_k$();
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _get_packedValue__aj623s($this).and_4spn93_k$(new Long(-1, 0)).toInt_1tsl84_k$();
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_end__impl__gcdxpp($this) : _TextRange___get_start__impl__ww4t90($this);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_start__impl__ww4t90($this) : _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_collapsed__impl__cilesp($this) {
    return _TextRange___get_start__impl__ww4t90($this) === _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_reversed__impl__emhnbm($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this);
  }
  function _TextRange___get_length__impl__7qes3a($this) {
    return _TextRange___get_max__impl__owm8m($this) - _TextRange___get_min__impl__uu95c4($this) | 0;
  }
  function TextRange__intersects_impl_mhtn49($this, other) {
    return _TextRange___get_min__impl__uu95c4($this) < _TextRange___get_max__impl__owm8m(other) ? _TextRange___get_min__impl__uu95c4(other) < _TextRange___get_max__impl__owm8m($this) : false;
  }
  function TextRange__contains_impl_ws45z2($this, other) {
    return _TextRange___get_min__impl__uu95c4($this) <= _TextRange___get_min__impl__uu95c4(other) ? _TextRange___get_max__impl__owm8m(other) <= _TextRange___get_max__impl__owm8m($this) : false;
  }
  function TextRange__contains_impl_ws45z2_0($this, offset) {
    var containsLower = _TextRange___get_min__impl__uu95c4($this);
    return offset < _TextRange___get_max__impl__owm8m($this) ? containsLower <= offset : false;
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Zero_1 = TextRange_1(0);
  }
  protoOf(Companion_1).get_Zero_8je9ih_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_18() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other instanceof TextRange ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_18();
    this.packedValue_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.packedValue_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.packedValue_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.packedValue_1, other);
  };
  function TextRange_0(start, end) {
    return _TextRange___init__impl__h6icbt(packWithCheck(start, end));
  }
  function TextRange_1(index) {
    return TextRange_0(index, index);
  }
  function packWithCheck(start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message = 'start cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(end >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message_0 = 'end cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.ui.util.packInts' call
    return toLong(start).shl_bg8if3_k$(32).or_v7fvkl_k$(toLong(end).and_4spn93_k$(new Long(-1, 0)));
  }
  function coerceIn_1(_this__u8e3s4, minimumValue, maximumValue) {
    var newStart = coerceIn(_TextRange___get_start__impl__ww4t90(_this__u8e3s4), minimumValue, maximumValue);
    var newEnd = coerceIn(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4), minimumValue, maximumValue);
    if (!(newStart === _TextRange___get_start__impl__ww4t90(_this__u8e3s4)) ? true : !(newEnd === _TextRange___get_end__impl__gcdxpp(_this__u8e3s4))) {
      return TextRange_0(newStart, newEnd);
    }
    return _this__u8e3s4;
  }
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.get_platformStyle_7i053p_k$(), paragraphStyle.get_platformStyle_7i053p_k$()));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $this) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    TextStyle.call($this, SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, null, null), new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, null, null, null, null, null), null);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $this) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    var tmp = SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), null);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, null, null, null), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    return TextStyle_init_$Init$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $this) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    var tmp = SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$());
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    return TextStyle_init_$Init$_2(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_4(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_3(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_4(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    alpha = alpha === VOID ? FloatCompanionObject_getInstance().get_NaN_18jnv2_k$() : alpha;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_5(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_4(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Default_1 = TextStyle_init_$Create$_4();
  }
  protoOf(Companion_2).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_19() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_19();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.spanStyle_1 = spanStyle;
    this.paragraphStyle_1 = paragraphStyle;
    this.platformStyle_1 = platformStyle;
    this.$stable_1 = 0;
  }
  protoOf(TextStyle).get_spanStyle_2b836q_k$ = function () {
    return this.spanStyle_1;
  };
  protoOf(TextStyle).get_paragraphStyle_27utpo_k$ = function () {
    return this.paragraphStyle_1;
  };
  protoOf(TextStyle).get_platformStyle_7i053p_k$ = function () {
    return this.platformStyle_1;
  };
  protoOf(TextStyle).toSpanStyle_l454tw_k$ = function () {
    return this.spanStyle_1;
  };
  protoOf(TextStyle).toParagraphStyle_zfuegy_k$ = function () {
    return this.paragraphStyle_1;
  };
  protoOf(TextStyle).merge_grd1yz_k$ = function (other) {
    if (other == null ? true : equals(other, Companion_getInstance_19().Default_1))
      return this;
    return TextStyle_init_$Create$_0(this.toSpanStyle_l454tw_k$().merge_tmjkxk_k$(other.toSpanStyle_l454tw_k$()), this.toParagraphStyle_zfuegy_k$().merge_desd12_k$(other.toParagraphStyle_zfuegy_k$()));
  };
  protoOf(TextStyle).merge$default_dwu3q_k$ = function (other, $super) {
    other = other === VOID ? null : other;
    return $super === VOID ? this.merge_grd1yz_k$(other) : $super.merge_grd1yz_k$.call(this, other);
  };
  protoOf(TextStyle).merge_wd0kho_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var tmp = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
    var mergedSpanStyle = fastMerge_0(this.spanStyle_1, color, null, tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    var mergedParagraphStyle = fastMerge(this.paragraphStyle_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.spanStyle_1 === mergedSpanStyle ? this.paragraphStyle_1 === mergedParagraphStyle : false)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).merge$default_iezoge_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().get_Unspecified_r048kw_k$() : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.merge_wd0kho_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.merge_wd0kho_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      var tmp_10 = tmp_9 == null ? null : new TextDirection(tmp_9);
      var tmp_11 = lineBreak;
      var tmp_12 = tmp_11 == null ? null : new LineBreak(tmp_11);
      var tmp_13 = hyphens;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, tmp_8, tmp_10, new TextUnit(lineHeight), textIndent, lineHeightStyle, tmp_12, tmp_13 == null ? null : new Hyphens(tmp_13), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).merge_6pw42n_k$ = function (other) {
    return TextStyle_init_$Create$_0(this.toSpanStyle_l454tw_k$().merge_tmjkxk_k$(other), this.toParagraphStyle_zfuegy_k$());
  };
  protoOf(TextStyle).merge_fo5h7n_k$ = function (other) {
    return TextStyle_init_$Create$_0(this.toSpanStyle_l454tw_k$(), this.toParagraphStyle_zfuegy_k$().merge_desd12_k$(other));
  };
  protoOf(TextStyle).plus_4nq3rw_k$ = function (other) {
    return this.merge_grd1yz_k$(other);
  };
  protoOf(TextStyle).plus_oar7yd_k$ = function (other) {
    return this.merge_fo5h7n_k$(other);
  };
  protoOf(TextStyle).plus_mf6lxd_k$ = function (other) {
    return this.merge_6pw42n_k$(other);
  };
  protoOf(TextStyle).copy_1clm0n_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_lnp1vl_k$())) {
      tmp = this.spanStyle_1.get_textForegroundStyle_1frzu0_k$();
    } else {
      tmp = Companion_getInstance_47().from_ccukrb_k$(color);
    }
    return new TextStyle(new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, this.spanStyle_1.get_platformStyle_7i053p_k$(), this.spanStyle_1.get_drawStyle_arbehw_k$()), new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, this.paragraphStyle_1.get_platformStyle_7i053p_k$(), this.get_lineHeightStyle_fzu4s3_k$(), this.get_lineBreak_crhp0k_k$(), this.get_hyphens_p35ysk_k$(), this.get_textMotion_7jbf0s_k$()), this.platformStyle_1);
  };
  protoOf(TextStyle).copy$default_rmzbvl_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, $super) {
    color = color === VOID ? this.spanStyle_1.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_c2c4cc_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_u2eu2k_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_1clm0n_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent);
    } else {
      var tmp_0 = $super.copy_1clm0n_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, tmp_8, tmp_9 == null ? null : new TextDirection(tmp_9), new TextUnit(lineHeight), textIndent);
    }
    return tmp;
  };
  protoOf(TextStyle).copy_57o59s_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_lnp1vl_k$())) {
      tmp = this.spanStyle_1.get_textForegroundStyle_1frzu0_k$();
    } else {
      tmp = Companion_getInstance_47().from_ccukrb_k$(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), this.spanStyle_1.get_drawStyle_arbehw_k$());
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, this.get_lineBreak_crhp0k_k$(), this.get_hyphens_p35ysk_k$(), this.get_textMotion_7jbf0s_k$()), platformStyle);
  };
  protoOf(TextStyle).copy$default_rvqgsk_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, $super) {
    color = color === VOID ? this.spanStyle_1.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_c2c4cc_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_u2eu2k_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_57o59s_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle);
    } else {
      var tmp_0 = $super.copy_57o59s_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, tmp_8, tmp_9 == null ? null : new TextDirection(tmp_9), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle);
    }
    return tmp;
  };
  protoOf(TextStyle).copy_9myb8m_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_lnp1vl_k$())) {
      tmp = this.spanStyle_1.get_textForegroundStyle_1frzu0_k$();
    } else {
      tmp = Companion_getInstance_47().from_ccukrb_k$(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), this.get_drawStyle_arbehw_k$());
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, this.get_textMotion_7jbf0s_k$()), platformStyle);
  };
  protoOf(TextStyle).copy$default_zll5s_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, $super) {
    color = color === VOID ? this.spanStyle_1.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_c2c4cc_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_u2eu2k_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.paragraphStyle_1.get_lineBreak_crhp0k_k$() : lineBreak;
    hyphens = hyphens === VOID ? this.paragraphStyle_1.get_hyphens_p35ysk_k$() : hyphens;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_9myb8m_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens);
    } else {
      var tmp_0 = $super.copy_9myb8m_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      var tmp_10 = tmp_9 == null ? null : new TextDirection(tmp_9);
      var tmp_11 = lineBreak;
      var tmp_12 = tmp_11 == null ? null : new LineBreak(tmp_11);
      var tmp_13 = hyphens;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, tmp_8, tmp_10, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_12, tmp_13 == null ? null : new Hyphens(tmp_13));
    }
    return tmp;
  };
  protoOf(TextStyle).copy_25irrn_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.spanStyle_1.get_color_lnp1vl_k$())) {
      tmp = this.spanStyle_1.get_textForegroundStyle_1frzu0_k$();
    } else {
      tmp = Companion_getInstance_47().from_ccukrb_k$(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).copy$default_82cxxr_k$ = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.spanStyle_1.get_color_lnp1vl_k$() : color;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    drawStyle = drawStyle === VOID ? this.spanStyle_1.get_drawStyle_arbehw_k$() : drawStyle;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_c2c4cc_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_u2eu2k_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.paragraphStyle_1.get_lineBreak_crhp0k_k$() : lineBreak;
    hyphens = hyphens === VOID ? this.paragraphStyle_1.get_hyphens_p35ysk_k$() : hyphens;
    textMotion = textMotion === VOID ? this.paragraphStyle_1.get_textMotion_7jbf0s_k$() : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_25irrn_k$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.copy_25irrn_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      var tmp_10 = tmp_9 == null ? null : new TextDirection(tmp_9);
      var tmp_11 = lineBreak;
      var tmp_12 = tmp_11 == null ? null : new LineBreak(tmp_11);
      var tmp_13 = hyphens;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, tmp_8, tmp_10, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_12, tmp_13 == null ? null : new Hyphens(tmp_13), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).copy_tq2cgj_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_2(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.get_spanStyle_2b836q_k$(), drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.get_paragraphStyle_27utpo_k$(), lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).copy$default_tzbh93_k$ = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.spanStyle_1.get_alpha_iooth1_k$() : alpha;
    fontSize = fontSize === VOID ? this.spanStyle_1.get_fontSize_ergf2z_k$() : fontSize;
    fontWeight = fontWeight === VOID ? this.spanStyle_1.get_fontWeight_wbif2o_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? this.spanStyle_1.get_fontStyle_hzv4zg_k$() : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.spanStyle_1.get_fontSynthesis_h5auiy_k$() : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.spanStyle_1.get_fontFamily_ulphcs_k$() : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.spanStyle_1.get_fontFeatureSettings_a47533_k$() : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.spanStyle_1.get_letterSpacing_k79xfu_k$() : letterSpacing;
    baselineShift = baselineShift === VOID ? this.spanStyle_1.get_baselineShift_99zyho_k$() : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.spanStyle_1.get_textGeometricTransform_tdfmin_k$() : textGeometricTransform;
    localeList = localeList === VOID ? this.spanStyle_1.get_localeList_1gj9gh_k$() : localeList;
    background = background === VOID ? this.spanStyle_1.get_background_8l4942_k$() : background;
    textDecoration = textDecoration === VOID ? this.spanStyle_1.get_textDecoration_itgjwm_k$() : textDecoration;
    shadow = shadow === VOID ? this.spanStyle_1.get_shadow_jgtb8p_k$() : shadow;
    drawStyle = drawStyle === VOID ? this.spanStyle_1.get_drawStyle_arbehw_k$() : drawStyle;
    textAlign = textAlign === VOID ? this.paragraphStyle_1.get_textAlign_c2c4cc_k$() : textAlign;
    textDirection = textDirection === VOID ? this.paragraphStyle_1.get_textDirection_u2eu2k_k$() : textDirection;
    lineHeight = lineHeight === VOID ? this.paragraphStyle_1.get_lineHeight_3vvefu_k$() : lineHeight;
    textIndent = textIndent === VOID ? this.paragraphStyle_1.get_textIndent_5mau2q_k$() : textIndent;
    platformStyle = platformStyle === VOID ? this.platformStyle_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$() : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.paragraphStyle_1.get_lineBreak_crhp0k_k$() : lineBreak;
    hyphens = hyphens === VOID ? this.paragraphStyle_1.get_hyphens_p35ysk_k$() : hyphens;
    textMotion = textMotion === VOID ? this.paragraphStyle_1.get_textMotion_7jbf0s_k$() : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_tq2cgj_k$(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.copy_tq2cgj_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
      var tmp_7 = textAlign;
      var tmp_8 = tmp_7 == null ? null : new TextAlign(tmp_7);
      var tmp_9 = textDirection;
      var tmp_10 = tmp_9 == null ? null : new TextDirection(tmp_9);
      var tmp_11 = lineBreak;
      var tmp_12 = tmp_11 == null ? null : new LineBreak(tmp_11);
      var tmp_13 = hyphens;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_6, textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, tmp_8, tmp_10, new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, tmp_12, tmp_13 == null ? null : new Hyphens(tmp_13), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).get_brush_ipcjyp_k$ = function () {
    return this.spanStyle_1.get_brush_ipcjyp_k$();
  };
  protoOf(TextStyle).get_color_lnp1vl_k$ = function () {
    return this.spanStyle_1.get_color_lnp1vl_k$();
  };
  protoOf(TextStyle).get_alpha_iooth1_k$ = function () {
    return this.spanStyle_1.get_alpha_iooth1_k$();
  };
  protoOf(TextStyle).get_fontSize_ergf2z_k$ = function () {
    return this.spanStyle_1.get_fontSize_ergf2z_k$();
  };
  protoOf(TextStyle).get_fontWeight_wbif2o_k$ = function () {
    return this.spanStyle_1.get_fontWeight_wbif2o_k$();
  };
  protoOf(TextStyle).get_fontStyle_hzv4zg_k$ = function () {
    return this.spanStyle_1.get_fontStyle_hzv4zg_k$();
  };
  protoOf(TextStyle).get_fontSynthesis_h5auiy_k$ = function () {
    return this.spanStyle_1.get_fontSynthesis_h5auiy_k$();
  };
  protoOf(TextStyle).get_fontFamily_ulphcs_k$ = function () {
    return this.spanStyle_1.get_fontFamily_ulphcs_k$();
  };
  protoOf(TextStyle).get_fontFeatureSettings_a47533_k$ = function () {
    return this.spanStyle_1.get_fontFeatureSettings_a47533_k$();
  };
  protoOf(TextStyle).get_letterSpacing_k79xfu_k$ = function () {
    return this.spanStyle_1.get_letterSpacing_k79xfu_k$();
  };
  protoOf(TextStyle).get_baselineShift_99zyho_k$ = function () {
    return this.spanStyle_1.get_baselineShift_99zyho_k$();
  };
  protoOf(TextStyle).get_textGeometricTransform_tdfmin_k$ = function () {
    return this.spanStyle_1.get_textGeometricTransform_tdfmin_k$();
  };
  protoOf(TextStyle).get_localeList_1gj9gh_k$ = function () {
    return this.spanStyle_1.get_localeList_1gj9gh_k$();
  };
  protoOf(TextStyle).get_background_8l4942_k$ = function () {
    return this.spanStyle_1.get_background_8l4942_k$();
  };
  protoOf(TextStyle).get_textDecoration_itgjwm_k$ = function () {
    return this.spanStyle_1.get_textDecoration_itgjwm_k$();
  };
  protoOf(TextStyle).get_shadow_jgtb8p_k$ = function () {
    return this.spanStyle_1.get_shadow_jgtb8p_k$();
  };
  protoOf(TextStyle).get_drawStyle_arbehw_k$ = function () {
    return this.spanStyle_1.get_drawStyle_arbehw_k$();
  };
  protoOf(TextStyle).get_textAlign_c2c4cc_k$ = function () {
    return this.paragraphStyle_1.get_textAlign_c2c4cc_k$();
  };
  protoOf(TextStyle).get_textDirection_u2eu2k_k$ = function () {
    return this.paragraphStyle_1.get_textDirection_u2eu2k_k$();
  };
  protoOf(TextStyle).get_lineHeight_3vvefu_k$ = function () {
    return this.paragraphStyle_1.get_lineHeight_3vvefu_k$();
  };
  protoOf(TextStyle).get_textIndent_5mau2q_k$ = function () {
    return this.paragraphStyle_1.get_textIndent_5mau2q_k$();
  };
  protoOf(TextStyle).get_lineHeightStyle_fzu4s3_k$ = function () {
    return this.paragraphStyle_1.get_lineHeightStyle_fzu4s3_k$();
  };
  protoOf(TextStyle).get_hyphens_p35ysk_k$ = function () {
    return this.paragraphStyle_1.get_hyphens_p35ysk_k$();
  };
  protoOf(TextStyle).get_lineBreak_crhp0k_k$ = function () {
    return this.paragraphStyle_1.get_lineBreak_crhp0k_k$();
  };
  protoOf(TextStyle).get_textMotion_7jbf0s_k$ = function () {
    return this.paragraphStyle_1.get_textMotion_7jbf0s_k$();
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.spanStyle_1.equals(other.spanStyle_1))
      return false;
    if (!this.paragraphStyle_1.equals(other.paragraphStyle_1))
      return false;
    if (!equals(this.platformStyle_1, other.platformStyle_1))
      return false;
    return true;
  };
  protoOf(TextStyle).hasSameLayoutAffectingAttributes_42axi4_k$ = function (other) {
    return this === other ? true : this.paragraphStyle_1.equals(other.paragraphStyle_1) ? this.spanStyle_1.hasSameLayoutAffectingAttributes_n0ls75_k$(other.spanStyle_1) : false;
  };
  protoOf(TextStyle).hasSameDrawAffectingAttributes_drzoqy_k$ = function (other) {
    return this === other ? true : this.spanStyle_1.hasSameNonLayoutAttributes_mkn2vf_k$(other.spanStyle_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.spanStyle_1.hashCode();
    result = imul(31, result) + this.paragraphStyle_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.platformStyle_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).hashCodeLayoutAffectingAttributes_3jfwjl_k$ = function () {
    var result = this.spanStyle_1.hashCodeLayoutAffectingAttributes_3jfwjl_k$();
    result = imul(31, result) + this.paragraphStyle_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.platformStyle_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    var tmp = 'TextStyle(' + ('color=' + new Color(this.get_color_lnp1vl_k$()) + ', ') + ('brush=' + this.get_brush_ipcjyp_k$() + ', ') + ('alpha=' + this.get_alpha_iooth1_k$() + ', ') + ('fontSize=' + new TextUnit(this.get_fontSize_ergf2z_k$()) + ', ') + ('fontWeight=' + this.get_fontWeight_wbif2o_k$() + ', ');
    var tmp_0 = this.get_fontStyle_hzv4zg_k$();
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.get_fontSynthesis_h5auiy_k$();
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.get_fontFamily_ulphcs_k$() + ', ') + ('fontFeatureSettings=' + this.get_fontFeatureSettings_a47533_k$() + ', ') + ('letterSpacing=' + new TextUnit(this.get_letterSpacing_k79xfu_k$()) + ', ');
    var tmp_4 = this.get_baselineShift_99zyho_k$();
    var tmp_5 = tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.get_textGeometricTransform_tdfmin_k$() + ', ') + ('localeList=' + this.get_localeList_1gj9gh_k$() + ', ') + ('background=' + new Color(this.get_background_8l4942_k$()) + ', ') + ('textDecoration=' + this.get_textDecoration_itgjwm_k$() + ', ') + ('shadow=' + this.get_shadow_jgtb8p_k$() + ', ') + ('drawStyle=' + this.get_drawStyle_arbehw_k$() + ', ');
    var tmp_6 = this.get_textAlign_c2c4cc_k$();
    var tmp_7 = tmp_5 + ('textAlign=' + (tmp_6 == null ? null : new TextAlign(tmp_6)) + ', ');
    var tmp_8 = this.get_textDirection_u2eu2k_k$();
    var tmp_9 = tmp_7 + ('textDirection=' + (tmp_8 == null ? null : new TextDirection(tmp_8)) + ', ') + ('lineHeight=' + new TextUnit(this.get_lineHeight_3vvefu_k$()) + ', ') + ('textIndent=' + this.get_textIndent_5mau2q_k$() + ', ') + ('platformStyle=' + this.platformStyle_1 + ', ') + ('lineHeightStyle=' + this.get_lineHeightStyle_fzu4s3_k$() + ', ');
    var tmp_10 = this.get_lineBreak_crhp0k_k$();
    var tmp_11 = tmp_9 + ('lineBreak=' + (tmp_10 == null ? null : new LineBreak(tmp_10)) + ', ');
    var tmp_12 = this.get_hyphens_p35ysk_k$();
    return tmp_11 + ('hyphens=' + (tmp_12 == null ? null : new Hyphens(tmp_12)) + ', ') + ('textMotion=' + this.get_textMotion_7jbf0s_k$()) + ')';
  };
  function lerp_6(start, stop, fraction) {
    return TextStyle_init_$Create$_0(lerp_5(start.toSpanStyle_l454tw_k$(), stop.toSpanStyle_l454tw_k$(), fraction), lerp_4(start.toParagraphStyle_zfuegy_k$(), stop.toParagraphStyle_zfuegy_k$(), fraction));
  }
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null ? platformParagraphStyle == null : false) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.spanStyle_1), resolveParagraphStyleDefaults(style.paragraphStyle_1, direction), style.platformStyle_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    var tmp_0 = textDirection;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_46().get_Content_gdpx4s_k$()))) {
      var tmp_1;
      switch (layoutDirection.get_ordinal_ip24qg_k$()) {
        case 0:
          tmp_1 = Companion_getInstance_46().get_ContentOrLtr_byc1cl_k$();
          break;
        case 1:
          tmp_1 = Companion_getInstance_46().get_ContentOrRtl_twyiln_k$();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      var tmp_2 = textDirection;
      if ((tmp_2 == null ? null : new TextDirection(tmp_2)) == null) {
        var tmp_3;
        switch (layoutDirection.get_ordinal_ip24qg_k$()) {
          case 0:
            tmp_3 = Companion_getInstance_46().get_Ltr_fd58a3_k$();
            break;
          case 1:
            tmp_3 = Companion_getInstance_46().get_Rtl_qi5bo5_k$();
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_3;
      } else {
        tmp = textDirection;
      }
    }
    return tmp;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function TtsAnnotation() {
    this.$stable_1 = 0;
  }
  function get_$stableprop_12() {
    return 0;
  }
  function VerbatimTtsAnnotation(verbatim) {
    TtsAnnotation.call(this);
    this.verbatim_1 = verbatim;
    this.$stable_2 = 0;
  }
  protoOf(VerbatimTtsAnnotation).get_verbatim_64u873_k$ = function () {
    return this.verbatim_1;
  };
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.verbatim_1 === other.verbatim_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.verbatim_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.verbatim_1 + ')';
  };
  function get_$stableprop_13() {
    return 0;
  }
  function UrlAnnotation(url) {
    this.url_1 = url;
    this.$stable_1 = 0;
  }
  protoOf(UrlAnnotation).get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.url_1 === other.url_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.url_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.url_1 + ')';
  };
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function binarySearchInternal(_this__u8e3s4, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  function _get_monitor__tq0hyv($this) {
    return $this.monitor_1;
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function _get_keySet__ob3y08($this) {
    return $this.keySet_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _set_maxSize__3ox4yo($this, _set____db54di) {
    $this.maxSize_1 = _set____db54di;
  }
  function _get_maxSize__tb5fbo($this) {
    return $this.maxSize_1;
  }
  function _set_putCount__m02mjb($this, _set____db54di) {
    $this.putCount_1 = _set____db54di;
  }
  function _get_putCount__976b2j($this) {
    return $this.putCount_1;
  }
  function _set_createCount__etewhe($this, _set____db54di) {
    $this.createCount_1 = _set____db54di;
  }
  function _get_createCount__pxaz5u($this) {
    return $this.createCount_1;
  }
  function _set_evictionCount__96h6gb($this, _set____db54di) {
    $this.evictionCount_1 = _set____db54di;
  }
  function _get_evictionCount__oe8oyn($this) {
    return $this.evictionCount_1;
  }
  function _set_hitCount__dpetwl($this, _set____db54di) {
    $this.hitCount_1 = _set____db54di;
  }
  function _get_hitCount__qib5dd($this) {
    return $this.hitCount_1;
  }
  function _set_missCount__k5nle($this, _set____db54di) {
    $this.missCount_1 = _set____db54di;
  }
  function _get_missCount__tv03zy($this) {
    return $this.missCount_1;
  }
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxSize > 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.<init>.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.maxSize_1 = maxSize;
    $this.map_1 = HashMap_init_$Create$(0, 0.75);
    $this.keySet_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, objectCreate(protoOf(LruCache)));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.sizeOf_flzyzx_k$(key, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      var message = 'Negative size: ' + key + '=' + value;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  protoOf(LruCache).get_size_woubt6_k$ = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    return this.size_1;
  };
  protoOf(LruCache).resize_ioxo44_k$ = function (maxSize) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxSize > 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.resize.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    this.maxSize_1 = maxSize;
    this.trimToSize_u8t9m2_k$(maxSize);
  };
  protoOf(LruCache).get_wei43m_k$ = function (key) {
    var mapValue = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.map_1.get_wei43m_k$(key);
    var tmp;
    if (!(mapValue == null)) {
      this.keySet_1.remove_cedx0m_k$(key);
      this.keySet_1.add_utx5q5_k$(key);
      this.hitCount_1 = this.hitCount_1 + 1 | 0;
      return mapValue;
    } else {
      var tmp3 = this.missCount_1;
      this.missCount_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    var createdValue = this.create_mqhnms_k$(key);
    if (createdValue == null) {
      return null;
    }
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    this.createCount_1 = this.createCount_1 + 1 | 0;
    var previousValue = this.map_1.put_4fpzoq_k$(key, createdValue);
    this.keySet_1.remove_cedx0m_k$(key);
    this.keySet_1.add_utx5q5_k$(key);
    var tmp_0;
    if (!(previousValue == null)) {
      this.map_1.put_4fpzoq_k$(key, previousValue);
      mapValue = previousValue;
      tmp_0 = Unit_getInstance();
    } else {
      this.size_1 = this.get_size_woubt6_k$() + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_getInstance();
    }
    if (!(mapValue == null)) {
      this.entryRemoved_vg0srm_k$(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.trimToSize_u8t9m2_k$(this.maxSize_1);
      return createdValue;
    }
  };
  protoOf(LruCache).put_4fpzoq_k$ = function (key, value) {
    if (key == null ? true : value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    this.putCount_1 = this.putCount_1 + 1 | 0;
    this.size_1 = this.get_size_woubt6_k$() + safeSizeOf(this, key, value) | 0;
    previous = this.map_1.put_4fpzoq_k$(key, value);
    if (!(previous == null)) {
      this.size_1 = this.get_size_woubt6_k$() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.keySet_1.contains_aljjnj_k$(key)) {
      this.keySet_1.remove_cedx0m_k$(key);
    }
    this.keySet_1.add_utx5q5_k$(key);
    if (!(previous == null)) {
      this.entryRemoved_vg0srm_k$(false, key, ensureNotNull(previous), value);
    }
    this.trimToSize_u8t9m2_k$(this.maxSize_1);
    return previous;
  };
  protoOf(LruCache).trimToSize_u8t9m2_k$ = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.monitor_1;
      if ((this.get_size_woubt6_k$() < 0 ? true : this.map_1.isEmpty_y1axqb_k$() ? !(this.get_size_woubt6_k$() === 0) : false) ? true : !(this.map_1.isEmpty_y1axqb_k$() === this.keySet_1.isEmpty_y1axqb_k$())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      var tmp;
      if (this.get_size_woubt6_k$() > maxSize ? !this.map_1.isEmpty_y1axqb_k$() : false) {
        key = first(this.keySet_1);
        // Inline function 'kotlin.collections.get' call
        var this_0 = this.map_1;
        var key_0 = key;
        var tmp0_elvis_lhs = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        value = tmp_0;
        // Inline function 'kotlin.collections.remove' call
        var this_1 = this.map_1;
        var key_1 = key;
        (isInterface(this_1, MutableMap) ? this_1 : THROW_CCE()).remove_gppy8k_k$(key_1);
        // Inline function 'kotlin.collections.remove' call
        var this_2 = this.keySet_1;
        var element = key;
        (isInterface(this_2, MutableCollection) ? this_2 : THROW_CCE()).remove_cedx0m_k$(element);
        this.size_1 = this.get_size_woubt6_k$() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        this.evictionCount_1 = this.evictionCount_1 + 1 | 0;
        tmp = Unit_getInstance();
      }
      if (key == null ? value == null : false) {
        break $l$loop;
      } else {
        this.entryRemoved_vg0srm_k$(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  protoOf(LruCache).remove_gppy8k_k$ = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    previous = this.map_1.remove_gppy8k_k$(key);
    this.keySet_1.remove_cedx0m_k$(key);
    var tmp;
    if (!(previous == null)) {
      this.size_1 = this.get_size_woubt6_k$() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
      tmp = Unit_getInstance();
    }
    if (!(previous == null)) {
      this.entryRemoved_vg0srm_k$(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  protoOf(LruCache).entryRemoved_vg0srm_k$ = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).create_mqhnms_k$ = function (key) {
    return null;
  };
  protoOf(LruCache).sizeOf_flzyzx_k$ = function (key, value) {
    return 1;
  };
  protoOf(LruCache).evictAll_sdrs94_k$ = function () {
    this.trimToSize_u8t9m2_k$(-1);
  };
  protoOf(LruCache).maxSize_dyjl39_k$ = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.maxSize.<anonymous>' call
    return this.maxSize_1;
  };
  protoOf(LruCache).hitCount_m9mq4k_k$ = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.hitCount.<anonymous>' call
    return this.hitCount_1;
  };
  protoOf(LruCache).missCount_jzozn7_k$ = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.missCount.<anonymous>' call
    return this.missCount_1;
  };
  protoOf(LruCache).createCount_8lc6tp_k$ = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.createCount.<anonymous>' call
    return this.createCount_1;
  };
  protoOf(LruCache).putCount_tak75s_k$ = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.putCount.<anonymous>' call
    return this.putCount_1;
  };
  protoOf(LruCache).evictionCount_nzallc_k$ = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.evictionCount.<anonymous>' call
    return this.evictionCount_1;
  };
  protoOf(LruCache).snapshot_4plubo_k$ = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    var linkedHashMap = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this.keySet_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var key = tmp0_iterator.next_20eer_k$();
      linkedHashMap.put_4fpzoq_k$(key, ensureNotNull(this.map_1.get_wei43m_k$(key)));
    }
    return linkedHashMap;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    var accesses = this.hitCount_1 + this.missCount_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.hitCount_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.maxSize_1 + ',hits=' + this.hitCount_1 + ',misses=' + this.missCount_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  protoOf(LruCache).synchronizedValue_27304n_k$ = function (block) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.monitor_1;
    return block();
  };
  function LruCache() {
    this.monitor_1 = createSynchronizedObject();
    this.size_1 = 0;
    this.maxSize_1 = 0;
    this.putCount_1 = 0;
    this.createCount_1 = 0;
    this.evictionCount_1 = 0;
    this.hitCount_1 = 0;
    this.missCount_1 = 0;
  }
  function _set_hashes__n5xbqd($this, _set____db54di) {
    $this.hashes_1 = _set____db54di;
  }
  function _get_hashes__lp6r3l($this) {
    return $this.hashes_1;
  }
  function _set_keyValues__u4rhj8($this, _set____db54di) {
    $this.keyValues_1 = _set____db54di;
  }
  function _get_keyValues__bli41c($this) {
    return $this.keyValues_1;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    capacity = capacity === VOID ? 0 : capacity;
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.hashes_1 = get_EMPTY_INTS();
      $this.keyValues_1 = get_EMPTY_OBJECTS();
    } else {
      $this.hashes_1 = new Int32Array(capacity);
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = capacity << 1;
      tmp.keyValues_1 = fillArrayVal(Array(size), null);
    }
    $this._size_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, objectCreate(protoOf(SimpleArrayMap)));
  }
  function SimpleArrayMap_init_$Init$_0(map, $this) {
    SimpleArrayMap_init_$Init$(VOID, $this);
    if (!(map == null)) {
      $this.putAll_ohagg0_k$(map);
    }
    return $this;
  }
  function SimpleArrayMap_init_$Create$_0(map) {
    return SimpleArrayMap_init_$Init$_0(map, objectCreate(protoOf(SimpleArrayMap)));
  }
  protoOf(SimpleArrayMap).set__size_yixcpn_k$ = function (_set____db54di) {
    this._size_1 = _set____db54di;
  };
  protoOf(SimpleArrayMap).get__size_inpkfr_k$ = function () {
    return this._size_1;
  };
  protoOf(SimpleArrayMap).get_size_woubt6_k$ = function () {
    return this._size_1;
  };
  protoOf(SimpleArrayMap).indexOf_mzow2l_k$ = function (key, hash) {
    var N = this._size_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.hashes_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.keyValues_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.hashes_1[end] === hash : false) {
      if (equals(key, this.keyValues_1[end << 1]))
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.hashes_1[i] === hash : false) {
      if (equals(key, this.keyValues_1[i << 1]))
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).indexOfNull_k3dchc_k$ = function () {
    var N = this._size_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.hashes_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.keyValues_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.hashes_1[end] === 0 : false) {
      if (null == this.keyValues_1[end << 1])
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.hashes_1[i] === 0 : false) {
      if (null == this.keyValues_1[i << 1])
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).clear_j9egeb_k$ = function () {
    if (this._size_1 > 0) {
      this.hashes_1 = get_EMPTY_INTS();
      this.keyValues_1 = get_EMPTY_OBJECTS();
      this._size_1 = 0;
    }
    if (this._size_1 > 0) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  protoOf(SimpleArrayMap).ensureCapacity_wr7980_k$ = function (minimumCapacity) {
    var osize = this._size_1;
    if (this.hashes_1.length < minimumCapacity) {
      this.hashes_1 = copyOf(this.hashes_1, minimumCapacity);
      this.keyValues_1 = copyOf_0(this.keyValues_1, minimumCapacity << 1);
    }
    if (!(this._size_1 === osize)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  protoOf(SimpleArrayMap).containsKey_aw81wo_k$ = function (key) {
    return this.indexOfKey_ht9ei1_k$(key) >= 0;
  };
  protoOf(SimpleArrayMap).indexOfKey_ht9ei1_k$ = function (key) {
    return key == null ? this.indexOfNull_k3dchc_k$() : this.indexOf_mzow2l_k$(key, hashCode(key));
  };
  protoOf(SimpleArrayMap).indexOfValue_jsyz2z_k$ = function (value) {
    var N = this._size_1 << 1;
    var array = this.keyValues_1;
    if (value == null) {
      var i = 1;
      while (i < N) {
        if (array[i] == null) {
          return i >> 1;
        }
        i = i + 2 | 0;
      }
    } else {
      var i_0 = 1;
      while (i_0 < N) {
        if (equals(value, array[i_0])) {
          return i_0 >> 1;
        }
        i_0 = i_0 + 2 | 0;
      }
    }
    return -1;
  };
  protoOf(SimpleArrayMap).containsValue_yf2ykl_k$ = function (value) {
    return this.indexOfValue_jsyz2z_k$(value) >= 0;
  };
  protoOf(SimpleArrayMap).get_wei43m_k$ = function (key) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.keyValues_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).getOrDefault_6hkvp9_k$ = function (key, defaultValue) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.keyValues_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = defaultValue;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).keyAt_v5apcq_k$ = function (index) {
    var tmp = this.keyValues_1[index << 1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).valueAt_sbdne4_k$ = function (index) {
    var tmp = this.keyValues_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).setValueAt_ro215_k$ = function (index, value) {
    var actualIndex = (index << 1) + 1 | 0;
    var tmp = this.keyValues_1[actualIndex];
    var old = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.keyValues_1[actualIndex] = value;
    return old;
  };
  protoOf(SimpleArrayMap).isEmpty_y1axqb_k$ = function () {
    return this._size_1 <= 0;
  };
  protoOf(SimpleArrayMap).put_4fpzoq_k$ = function (key, value) {
    var osize = this._size_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.indexOfNull_k3dchc_k$();
    } else {
      hash = hashCode(key);
      index = this.indexOf_mzow2l_k$(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.keyValues_1[index];
      var old = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.keyValues_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.hashes_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.hashes_1.length + ' to ' + n);
      }
      this.hashes_1 = copyOf(this.hashes_1, n);
      this.keyValues_1 = copyOf_0(this.keyValues_1, n << 1);
      if (!(osize === this._size_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.hashes_1;
      var destination = this.hashes_1;
      var destinationOffset = index + 1 | 0;
      var startIndex = index;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination, destinationOffset, startIndex, osize);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.keyValues_1;
      var destination_0 = this.keyValues_1;
      var destinationOffset_0 = (index + 1 | 0) << 1;
      var startIndex_0 = index << 1;
      var endIndex = this._size_1 << 1;
      arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex);
    }
    if (!(osize === this._size_1) ? true : index >= this.hashes_1.length) {
      throw ConcurrentModificationException_init_$Create$();
    }
    this.hashes_1[index] = hash;
    this.keyValues_1[index << 1] = key;
    this.keyValues_1[(index << 1) + 1 | 0] = value;
    this._size_1 = this._size_1 + 1 | 0;
    return null;
  };
  protoOf(SimpleArrayMap).putAll_ohagg0_k$ = function (array) {
    var N = array._size_1;
    this.ensureCapacity_wr7980_k$(this._size_1 + N | 0);
    if (this._size_1 === 0) {
      if (N > 0) {
        // Inline function 'kotlin.collections.copyInto' call
        var this_0 = array.hashes_1;
        var destination = this.hashes_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = this_0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, destination, 0, 0, N);
        // Inline function 'kotlin.collections.copyInto' call
        var this_1 = array.keyValues_1;
        var destination_0 = this.keyValues_1;
        var endIndex = N << 1;
        arrayCopy(this_1, destination_0, 0, 0, endIndex);
        this._size_1 = N;
      }
    } else {
      var inductionVariable = 0;
      if (inductionVariable < N)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.put_4fpzoq_k$(array.keyAt_v5apcq_k$(i), array.valueAt_sbdne4_k$(i));
        }
         while (inductionVariable < N);
    }
  };
  protoOf(SimpleArrayMap).putIfAbsent_xcpccg_k$ = function (key, value) {
    var mapValue = this.get_wei43m_k$(key);
    if (mapValue == null) {
      mapValue = this.put_4fpzoq_k$(key, value);
    }
    return mapValue;
  };
  protoOf(SimpleArrayMap).remove_gppy8k_k$ = function (key) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    return index >= 0 ? this.removeAt_6niowx_k$(index) : null;
  };
  protoOf(SimpleArrayMap).remove_tnklb3_k$ = function (key, value) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    if (index >= 0) {
      var mapValue = this.valueAt_sbdne4_k$(index);
      if (equals(value, mapValue)) {
        this.removeAt_6niowx_k$(index);
        return true;
      }
    }
    return false;
  };
  protoOf(SimpleArrayMap).removeAt_6niowx_k$ = function (index) {
    var old = this.keyValues_1[(index << 1) + 1 | 0];
    var osize = this._size_1;
    if (osize <= 1) {
      if (false) {
        println('SimpleArrayMap remove: shrink from ' + this.hashes_1 + '.size to 0');
      }
      this.clear_j9egeb_k$();
    } else {
      var nsize = osize - 1 | 0;
      if (this.hashes_1.length > 8 ? osize < (this.hashes_1.length / 3 | 0) : false) {
        var n = osize > 8 ? osize + (osize >> 1) | 0 : 8;
        if (false) {
          println('SimpleArrayMap remove: shrink from ' + this.hashes_1 + '.size to ' + n);
        }
        var ohashes = this.hashes_1;
        var oarray = this.keyValues_1;
        this.hashes_1 = new Int32Array(n);
        var tmp = this;
        // Inline function 'kotlin.arrayOfNulls' call
        var size = n << 1;
        tmp.keyValues_1 = fillArrayVal(Array(size), null);
        if (!(osize === this._size_1)) {
          throw ConcurrentModificationException_init_$Create$();
        }
        if (index > 0) {
          if (false) {
            println('SimpleArrayMap remove: copy from 0-' + index + ' to 0');
          }
          // Inline function 'kotlin.collections.copyInto' call
          var destination = this.hashes_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = ohashes;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, destination, 0, 0, index);
          // Inline function 'kotlin.collections.copyInto' call
          var destination_0 = this.keyValues_1;
          var endIndex = index << 1;
          arrayCopy(oarray, destination_0, 0, 0, endIndex);
        }
        if (index < nsize) {
          if (false) {
            println('SimpleArrayMap remove: copy from ' + (index + 1 | 0) + '-' + nsize + ' to ' + index);
          }
          // Inline function 'kotlin.collections.copyInto' call
          var destination_1 = this.hashes_1;
          var startIndex = index + 1 | 0;
          var endIndex_0 = nsize + 1 | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = ohashes;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_1, destination_1, index, startIndex, endIndex_0);
          // Inline function 'kotlin.collections.copyInto' call
          var destination_2 = this.keyValues_1;
          var destinationOffset = index << 1;
          var startIndex_0 = (index + 1 | 0) << 1;
          var endIndex_1 = (nsize + 1 | 0) << 1;
          arrayCopy(oarray, destination_2, destinationOffset, startIndex_0, endIndex_1);
        }
      } else {
        if (index < nsize) {
          if (false) {
            println('SimpleArrayMap remove: move ' + (index + 1 | 0) + '-' + nsize + ' to ' + index);
          }
          // Inline function 'kotlin.collections.copyInto' call
          var this_0 = this.hashes_1;
          var destination_3 = this.hashes_1;
          var startIndex_1 = index + 1 | 0;
          var endIndex_2 = nsize + 1 | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_2 = this_0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_2, destination_3, index, startIndex_1, endIndex_2);
          // Inline function 'kotlin.collections.copyInto' call
          var this_1 = this.keyValues_1;
          var destination_4 = this.keyValues_1;
          var destinationOffset_0 = index << 1;
          var startIndex_2 = (index + 1 | 0) << 1;
          var endIndex_3 = (nsize + 1 | 0) << 1;
          arrayCopy(this_1, destination_4, destinationOffset_0, startIndex_2, endIndex_3);
        }
        this.keyValues_1[nsize << 1] = null;
        this.keyValues_1[(nsize << 1) + 1 | 0] = null;
      }
      if (!(osize === this._size_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
      this._size_1 = nsize;
    }
    return (old == null ? true : !(old == null)) ? old : THROW_CCE();
  };
  protoOf(SimpleArrayMap).replace_em6wvl_k$ = function (key, value) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    return index >= 0 ? this.setValueAt_ro215_k$(index, value) : null;
  };
  protoOf(SimpleArrayMap).replace_x39wea_k$ = function (key, oldValue, newValue) {
    var index = this.indexOfKey_ht9ei1_k$(key);
    if (index >= 0) {
      var mapValue = this.valueAt_sbdne4_k$(index);
      if (mapValue === oldValue) {
        this.setValueAt_ro215_k$(index, newValue);
        return true;
      }
    }
    return false;
  };
  protoOf(SimpleArrayMap).equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this._size_1 === map._size_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this._size_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.keyAt_v5apcq_k$(i);
            var mine = this.valueAt_sbdne4_k$(i);
            var theirs = map.get_wei43m_k$(key);
            if (mine == null) {
              if (!(theirs == null) ? true : !map.containsKey_aw81wo_k$(key)) {
                return false;
              }
            } else if (!equals(mine, theirs)) {
              return false;
            }
          }
           while (inductionVariable < last);
        return true;
      } else {
        if (!(other == null) ? isInterface(other, Map) : false) {
          var map_0 = other;
          if (!(this._size_1 === map_0.get_size_woubt6_k$())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this._size_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.keyAt_v5apcq_k$(i_0);
              var mine_0 = this.valueAt_sbdne4_k$(i_0);
              // Inline function 'kotlin.collections.get' call
              var theirs_0 = (isInterface(map_0, Map) ? map_0 : THROW_CCE()).get_wei43m_k$(key_0);
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  // Inline function 'kotlin.collections.containsKey' call
                  tmp = !(isInterface(map_0, Map) ? map_0 : THROW_CCE()).containsKey_aw81wo_k$(key_0);
                }
                if (tmp) {
                  return false;
                }
              } else if (!equals(mine_0, theirs_0)) {
                return false;
              }
            }
             while (inductionVariable_0 < last_0);
          return true;
        }
      }
    } catch ($p) {
      if ($p instanceof NullPointerException) {
        var ignored = $p;
      } else {
        if ($p instanceof ClassCastException) {
          var ignored_0 = $p;
        } else {
          throw $p;
        }
      }
    }
    return false;
  };
  protoOf(SimpleArrayMap).hashCode = function () {
    var hashes = this.hashes_1;
    var array = this.keyValues_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this._size_1;
    while (i < s) {
      var value = array[v];
      var tmp = result;
      var tmp_0 = hashes[i];
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
      i = i + 1 | 0;
      v = v + 2 | 0;
    }
    return result;
  };
  protoOf(SimpleArrayMap).toString = function () {
    if (this.isEmpty_y1axqb_k$()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$(imul(this._size_1, 28));
    buffer.append_am5a4z_k$(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this._size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.append_22ad7x_k$(', ');
        }
        var key = this.keyAt_v5apcq_k$(i);
        if (!(key === this)) {
          buffer.append_t8pm91_k$(key);
        } else {
          buffer.append_22ad7x_k$('(this Map)');
        }
        buffer.append_am5a4z_k$(_Char___init__impl__6a9atx(61));
        var value = this.valueAt_sbdne4_k$(i);
        if (!(value === this)) {
          buffer.append_t8pm91_k$(value);
        } else {
          buffer.append_22ad7x_k$('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.append_am5a4z_k$(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this._size_1 = 0;
  }
  function get_CONCURRENT_MODIFICATION_EXCEPTIONS() {
    return CONCURRENT_MODIFICATION_EXCEPTIONS;
  }
  var CONCURRENT_MODIFICATION_EXCEPTIONS;
  function get_BASE_SIZE() {
    return BASE_SIZE;
  }
  var BASE_SIZE;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_TAG() {
    return TAG;
  }
  var TAG;
  function ResourceLoader() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.MaximumAsyncTimeoutMillis_1 = new Long(15000, 0);
  }
  protoOf(Companion_3).get_MaximumAsyncTimeoutMillis_x7fazm_k$ = function () {
    return this.MaximumAsyncTimeoutMillis_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_20() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Font() {
  }
  function PlatformFontLoader() {
  }
  function toFontFamily(_this__u8e3s4) {
    return FontFamily_0([_this__u8e3s4]);
  }
  function Resolver() {
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.Default_1 = new DefaultFontFamily();
    this.SansSerif_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.Serif_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.Monospace_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.Cursive_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  protoOf(Companion_4).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(Companion_4).get_SansSerif_4qz17l_k$ = function () {
    return this.SansSerif_1;
  };
  protoOf(Companion_4).get_Serif_igv9ro_k$ = function () {
    return this.Serif_1;
  };
  protoOf(Companion_4).get_Monospace_hz2yii_k$ = function () {
    return this.Monospace_1;
  };
  protoOf(Companion_4).get_Cursive_nlhumc_k$ = function () {
    return this.Cursive_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_21() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_21();
    this.canLoadSynchronously_1 = canLoadSynchronously;
    this.$stable_1 = 0;
  }
  protoOf(FontFamily).get_canLoadSynchronously_7ivot3_k$ = function () {
    return this.canLoadSynchronously_1;
  };
  function get_$stableprop_15() {
    return 0;
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
    this.$stable_2 = 0;
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function _get_fontFamilyName__opab5f($this) {
    return $this.fontFamilyName_1;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.name_1 = name;
    this.fontFamilyName_1 = fontFamilyName;
    this.$stable_3 = 0;
  }
  protoOf(GenericFontFamily).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(GenericFontFamily).toString = function () {
    return this.fontFamilyName_1;
  };
  function get_$stableprop_17() {
    return 0;
  }
  function FontListFontFamily(fonts) {
    FileBasedFontFamily.call(this);
    this.$$delegate_0__1 = fonts;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!fonts.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.ui.text.font.FontListFontFamily.<anonymous>' call
      var message = 'At least one font should be passed to FontFamily';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.fonts_1 = ArrayList_init_$Create$_1(fonts);
    this.$stable_3 = 0;
  }
  protoOf(FontListFontFamily).get_size_woubt6_k$ = function () {
    return this.$$delegate_0__1.get_size_woubt6_k$();
  };
  protoOf(FontListFontFamily).contains_7cf4hq_k$ = function (element) {
    return this.$$delegate_0__1.contains_aljjnj_k$(element);
  };
  protoOf(FontListFontFamily).contains_aljjnj_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return false;
    return this.contains_7cf4hq_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  protoOf(FontListFontFamily).containsAll_ppytrt_k$ = function (elements) {
    return this.$$delegate_0__1.containsAll_xk45sd_k$(elements);
  };
  protoOf(FontListFontFamily).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_ppytrt_k$(elements);
  };
  protoOf(FontListFontFamily).get_c1px32_k$ = function (index) {
    return this.$$delegate_0__1.get_c1px32_k$(index);
  };
  protoOf(FontListFontFamily).indexOf_iinxgo_k$ = function (element) {
    return this.$$delegate_0__1.indexOf_si1fv9_k$(element);
  };
  protoOf(FontListFontFamily).indexOf_si1fv9_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return -1;
    return this.indexOf_iinxgo_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  protoOf(FontListFontFamily).isEmpty_y1axqb_k$ = function () {
    return this.$$delegate_0__1.isEmpty_y1axqb_k$();
  };
  protoOf(FontListFontFamily).iterator_jk1svi_k$ = function () {
    return this.$$delegate_0__1.iterator_jk1svi_k$();
  };
  protoOf(FontListFontFamily).lastIndexOf_mex92q_k$ = function (element) {
    return this.$$delegate_0__1.lastIndexOf_v2p1fv_k$(element);
  };
  protoOf(FontListFontFamily).lastIndexOf_v2p1fv_k$ = function (element) {
    if (!(!(element == null) ? isInterface(element, Font) : false))
      return -1;
    return this.lastIndexOf_mex92q_k$((!(element == null) ? isInterface(element, Font) : false) ? element : THROW_CCE());
  };
  protoOf(FontListFontFamily).listIterator_xjshxw_k$ = function () {
    return this.$$delegate_0__1.listIterator_xjshxw_k$();
  };
  protoOf(FontListFontFamily).listIterator_70e65o_k$ = function (index) {
    return this.$$delegate_0__1.listIterator_70e65o_k$(index);
  };
  protoOf(FontListFontFamily).subList_xle3r2_k$ = function (fromIndex, toIndex) {
    return this.$$delegate_0__1.subList_xle3r2_k$(fromIndex, toIndex);
  };
  protoOf(FontListFontFamily).get_fonts_irho7v_k$ = function () {
    return this.fonts_1;
  };
  protoOf(FontListFontFamily).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontListFontFamily))
      return false;
    if (!equals(this.fonts_1, other.fonts_1))
      return false;
    return true;
  };
  protoOf(FontListFontFamily).hashCode = function () {
    return hashCode(this.fonts_1);
  };
  protoOf(FontListFontFamily).toString = function () {
    return 'FontListFontFamily(fonts=' + this.fonts_1 + ')';
  };
  function get_$stableprop_18() {
    return 0;
  }
  function LoadedFontFamily(typeface) {
    FontFamily.call(this, true);
    this.typeface_1 = typeface;
    this.$stable_2 = 0;
  }
  protoOf(LoadedFontFamily).get_typeface_s1tqao_k$ = function () {
    return this.typeface_1;
  };
  protoOf(LoadedFontFamily).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadedFontFamily))
      return false;
    if (!equals(this.typeface_1, other.typeface_1))
      return false;
    return true;
  };
  protoOf(LoadedFontFamily).hashCode = function () {
    return hashCode(this.typeface_1);
  };
  protoOf(LoadedFontFamily).toString = function () {
    return 'LoadedFontFamily(typeface=' + this.typeface_1 + ')';
  };
  function FontFamily_0(fonts) {
    return new FontListFontFamily(asList(fonts));
  }
  function get_$stableprop_19() {
    return 0;
  }
  function FileBasedFontFamily() {
    FontFamily.call(this, false);
    this.$stable_2 = 0;
  }
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  function _get_resultCache__mkt3v0($this) {
    return $this.resultCache_1;
  }
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.lock_1;
      var tmp;
      if (finalResult.get_cacheable_mudhp_k$()) {
        this$0.resultCache_1.put_4fpzoq_k$($typefaceRequest, finalResult);
        tmp = Unit_getInstance();
      } else {
        this$0.resultCache_1.remove_gppy8k_k$($typefaceRequest);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TypefaceRequestCache() {
    this.lock_1 = createSynchronizedObject();
    this.resultCache_1 = LruCache_init_$Create$(16);
  }
  protoOf(TypefaceRequestCache).get_lock_wopyt0_k$ = function () {
    return this.lock_1;
  };
  protoOf(TypefaceRequestCache).runCached_m71hct_k$ = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.resultCache_1.get_wei43m_k$(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.get_cacheable_mudhp_k$()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.resultCache_1.remove_gppy8k_k$(typefaceRequest);
      }
      tmp = tmp_0;
    }
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw IllegalStateException_init_$Create$_0('Could not load font', cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    var tmp_3;
    if (this.resultCache_1.get_wei43m_k$(typefaceRequest) == null ? currentTypefaceResult.get_cacheable_mudhp_k$() : false) {
      this.resultCache_1.put_4fpzoq_k$(typefaceRequest, currentTypefaceResult);
      tmp_3 = Unit_getInstance();
    }
    return currentTypefaceResult;
  };
  protoOf(TypefaceRequestCache).preWarmCache_12tul7_k$ = function (typefaceRequests, resolveTypeface) {
    var inductionVariable = 0;
    var last = typefaceRequests.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var typeRequest = typefaceRequests.get_c1px32_k$(i);
        // Inline function 'androidx.compose.ui.text.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.lock_1;
        // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.preWarmCache.<anonymous>' call
        var prior = this.resultCache_1.get_wei43m_k$(typeRequest);
        if (!(prior == null))
          continue $l$loop_0;
        var tmp;
        try {
          tmp = resolveTypeface(typeRequest);
        } catch ($p) {
          var tmp_0;
          if ($p instanceof Exception) {
            var cause = $p;
            throw IllegalStateException_init_$Create$_0('Could not load font', cause);
          } else {
            throw $p;
          }
        }
        var next = tmp;
        if (next instanceof Async)
          continue $l$loop_0;
        // Inline function 'androidx.compose.ui.text.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.lock_1;
        // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.preWarmCache.<anonymous>' call
        this.resultCache_1.put_4fpzoq_k$(typeRequest, next);
      }
       while (inductionVariable <= last);
  };
  protoOf(TypefaceRequestCache).get_lv4i8a_k$ = function (typefaceRequest) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.get.<anonymous>' call
    return this.resultCache_1.get_wei43m_k$(typefaceRequest);
  };
  protoOf(TypefaceRequestCache).get_size_woubt6_k$ = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.lock_1;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.<get-size>.<anonymous>' call
    return this.resultCache_1.get_size_woubt6_k$();
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.fontFamily_1 = fontFamily;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.resourceLoaderCacheKey_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(TypefaceRequest).get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(TypefaceRequest).get_fontStyle_nhruzn_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(TypefaceRequest).get_fontSynthesis_yx849j_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(TypefaceRequest).get_resourceLoaderCacheKey_29b1wn_k$ = function () {
    return this.resourceLoaderCacheKey_1;
  };
  protoOf(TypefaceRequest).component1_7eebsc_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(TypefaceRequest).component2_7eebsb_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(TypefaceRequest).component3_484z5s_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(TypefaceRequest).component4_6mpqxo_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(TypefaceRequest).component5_7eebs8_k$ = function () {
    return this.resourceLoaderCacheKey_1;
  };
  protoOf(TypefaceRequest).copy_j9k4y4_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).copy$default_dq30up_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.resourceLoaderCacheKey_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.copy_j9k4y4_k$(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.copy_j9k4y4_k$.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + this.fontFamily_1 + ', fontWeight=' + this.fontWeight_1 + ', fontStyle=' + new FontStyle(this.fontStyle_1) + ', fontSynthesis=' + new FontSynthesis(this.fontSynthesis_1) + ', resourceLoaderCacheKey=' + toString_0(this.resourceLoaderCacheKey_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.fontFamily_1 == null ? 0 : hashCode(this.fontFamily_1);
    result = imul(result, 31) + this.fontWeight_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.fontStyle_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.fontSynthesis_1) | 0;
    result = imul(result, 31) + (this.resourceLoaderCacheKey_1 == null ? 0 : hashCode(this.resourceLoaderCacheKey_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.fontFamily_1, tmp0_other_with_cast.fontFamily_1))
      return false;
    if (!this.fontWeight_1.equals(tmp0_other_with_cast.fontWeight_1))
      return false;
    if (!(this.fontStyle_1 === tmp0_other_with_cast.fontStyle_1))
      return false;
    if (!(this.fontSynthesis_1 === tmp0_other_with_cast.fontSynthesis_1))
      return false;
    if (!equals(this.resourceLoaderCacheKey_1, tmp0_other_with_cast.resourceLoaderCacheKey_1))
      return false;
    return true;
  };
  function get_$stableprop_20() {
    return 0;
  }
  function get_$stableprop_21() {
    return 0;
  }
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.value_1 = value;
    this.cacheable_1 = cacheable;
    this.$stable_1 = 0;
  }
  protoOf(Immutable).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Immutable).get_cacheable_mudhp_k$ = function () {
    return this.cacheable_1;
  };
  function Async(current) {
    this.current_1 = current;
    this.$stable_1 = 0;
  }
  protoOf(Async).get_current_jwi6j4_k$ = function () {
    return this.current_1;
  };
  protoOf(Async).get_value_j01efc_k$ = function () {
    return this.current_1.get_value_j01efc_k$();
  };
  protoOf(Async).get_cacheable_mudhp_k$ = function () {
    return this.current_1.get_cacheable_mudhp_k$();
  };
  function TypefaceResult() {
  }
  function _get_platformResolveInterceptor__j8yljz($this) {
    return $this.platformResolveInterceptor_1;
  }
  function _get_typefaceRequestCache__6x0zxb($this) {
    return $this.typefaceRequestCache_1;
  }
  function _get_fontListFontFamilyTypefaceAdapter__9wmrev($this) {
    return $this.fontListFontFamilyTypefaceAdapter_1;
  }
  function _get_platformFamilyTypefaceAdapter__lu65u8($this) {
    return $this.platformFamilyTypefaceAdapter_1;
  }
  function _get_createDefaultTypeface__ho6dxn($this) {
    return $this.createDefaultTypeface_1;
  }
  function resolve($this, typefaceRequest) {
    var result = $this.typefaceRequestCache_1.runCached_m71hct_k$(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.copy$default_dq30up_k$(null)).get_value_j01efc_k$();
    };
  }
  function FontFamilyResolverImpl$preload$lambda$lambda(it) {
    return Unit_getInstance();
  }
  function FontFamilyResolverImpl$preload$lambda$lambda_0(it) {
    return Unit_getInstance();
  }
  function FontFamilyResolverImpl$preload$lambda(this$0) {
    return function (typeRequest) {
      var tmp0_elvis_lhs = this$0.fontListFontFamilyTypefaceAdapter_1.resolve_wywkvk_k$(typeRequest, this$0.platformFontLoader_1, FontFamilyResolverImpl$preload$lambda$lambda, this$0.createDefaultTypeface_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp = this$0.platformFamilyTypefaceAdapter_1.resolve_wywkvk_k$(typeRequest, this$0.platformFontLoader_1, FontFamilyResolverImpl$preload$lambda$lambda_0, this$0.createDefaultTypeface_1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      return tmp_0;
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.fontListFontFamilyTypefaceAdapter_1.resolve_wywkvk_k$($typefaceRequest, this$0.platformFontLoader_1, onAsyncCompletion, this$0.createDefaultTypeface_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.platformFamilyTypefaceAdapter_1.resolve_wywkvk_k$($typefaceRequest, this$0.platformFontLoader_1, onAsyncCompletion, this$0.createDefaultTypeface_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function $preloadCOROUTINE$0(_this__u8e3s4, fontFamily, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.fontFamily_1 = fontFamily;
  }
  protoOf($preloadCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this.fontFamily_1;
            if (!(tmp_0 instanceof FontListFontFamily))
              return Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.fontListFontFamilyTypefaceAdapter_1.preload_2axpx6_k$(this.fontFamily_1, this._this__u8e3s4__1.platformFontLoader_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = this.fontFamily_1.get_fonts_irho7v_k$();
            var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
            var inductionVariable = 0;
            var last = this_0.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.get_c1px32_k$(index);
                var element = new TypefaceRequest(this._this__u8e3s4__1.platformResolveInterceptor_1.interceptFontFamily_gv8ky1_k$(this.fontFamily_1), this._this__u8e3s4__1.platformResolveInterceptor_1.interceptFontWeight_3o5olg_k$(item.get_weight_lbhkzl_k$()), this._this__u8e3s4__1.platformResolveInterceptor_1.interceptFontStyle_a5zuhs_k$(item.get_style_fnlxse_k$()), Companion_getInstance_26().get_All_bqi34r_k$(), this._this__u8e3s4__1.platformFontLoader_1.get_cacheKey_w22q12_k$());
                target.add_utx5q5_k$(element);
              }
               while (inductionVariable <= last);
            var typeRequests = target;
            this._this__u8e3s4__1.typefaceRequestCache_1.preWarmCache_12tul7_k$(typeRequests, FontFamilyResolverImpl$preload$lambda(this._this__u8e3s4__1));
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
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_22().Default_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.platformFontLoader_1 = platformFontLoader;
    this.platformResolveInterceptor_1 = platformResolveInterceptor;
    this.typefaceRequestCache_1 = typefaceRequestCache;
    this.fontListFontFamilyTypefaceAdapter_1 = fontListFontFamilyTypefaceAdapter;
    this.platformFamilyTypefaceAdapter_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.createDefaultTypeface_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).get_platformFontLoader_35ioim_k$ = function () {
    return this.platformFontLoader_1;
  };
  protoOf(FontFamilyResolverImpl).preload_4qpbwt_k$ = function (fontFamily, $completion) {
    var tmp = new $preloadCOROUTINE$0(this, fontFamily, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontFamilyResolverImpl).resolve_q3h1fi_k$ = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.platformResolveInterceptor_1.interceptFontFamily_gv8ky1_k$(fontFamily), this.platformResolveInterceptor_1.interceptFontWeight_3o5olg_k$(fontWeight), this.platformResolveInterceptor_1.interceptFontStyle_a5zuhs_k$(fontStyle), this.platformResolveInterceptor_1.interceptFontSynthesis_3g2w1p_k$(fontSynthesis), this.platformFontLoader_1.get_cacheKey_w22q12_k$()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.Default_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  protoOf(Companion_5).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_22() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function PlatformResolveInterceptor() {
  }
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (!properties_initialized_FontFamilyResolver_kt_43uw85) {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
    }
  }
  function FontFamilyTypefaceAdapter() {
  }
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString_0($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.result_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.result_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.result_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.result_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.result_1, other);
  };
  function _get_PermanentFailure__9wvopd($this) {
    return $this.PermanentFailure_1;
  }
  function Key(font, loaderKey) {
    this.font_1 = font;
    this.loaderKey_1 = loaderKey;
  }
  protoOf(Key).get_font_wom55k_k$ = function () {
    return this.font_1;
  };
  protoOf(Key).get_loaderKey_vl3btv_k$ = function () {
    return this.loaderKey_1;
  };
  protoOf(Key).component1_7eebsc_k$ = function () {
    return this.font_1;
  };
  protoOf(Key).component2_7eebsb_k$ = function () {
    return this.loaderKey_1;
  };
  protoOf(Key).copy_4ipj8r_k$ = function (font, loaderKey) {
    return new Key(font, loaderKey);
  };
  protoOf(Key).copy$default_domdyh_k$ = function (font, loaderKey, $super) {
    font = font === VOID ? this.font_1 : font;
    loaderKey = loaderKey === VOID ? this.loaderKey_1 : loaderKey;
    return $super === VOID ? this.copy_4ipj8r_k$(font, loaderKey) : $super.copy_4ipj8r_k$.call(this, font, loaderKey);
  };
  protoOf(Key).toString = function () {
    return 'Key(font=' + this.font_1 + ', loaderKey=' + toString_0(this.loaderKey_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.font_1);
    result = imul(result, 31) + (this.loaderKey_1 == null ? 0 : hashCode(this.loaderKey_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.font_1, tmp0_other_with_cast.font_1))
      return false;
    if (!equals(this.loaderKey_1, tmp0_other_with_cast.loaderKey_1))
      return false;
    return true;
  };
  function _get_resultCache__mkt3v0_0($this) {
    return $this.resultCache_1;
  }
  function _get_permanentCache__oc9pt5($this) {
    return $this.permanentCache_1;
  }
  function _get_cacheLock__lfu8yk($this) {
    return $this.cacheLock_1;
  }
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.font_1 = font;
    this.platformFontLoader_1 = platformFontLoader;
    this.forever_1 = forever;
    this.block_1 = block;
  }
  protoOf($runCachedCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.key0__1 = new Key(this.font_1, this.platformFontLoader_1.get_cacheKey_w22q12_k$());
            this._this__u8e3s4__1.cacheLock_1;
            var tmp0_elvis_lhs = this._this__u8e3s4__1.resultCache_1.get_wei43m_k$(this.key0__1);
            var priorResult = tmp0_elvis_lhs == null ? this._this__u8e3s4__1.permanentCache_1.get_wei43m_k$(this.key0__1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.result_1);
            }

            this.set_state_rjd8d0_k$(1);
            suspendResult = this.block_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this._this__u8e3s4__1.cacheLock_1;
            if (this_0 == null) {
              this._this__u8e3s4__1.permanentCache_1.put_4fpzoq_k$(this.key0__1, new AsyncTypefaceResult(this._this__u8e3s4__1.PermanentFailure_1));
            } else if (this.forever_1) {
              this._this__u8e3s4__1.permanentCache_1.put_4fpzoq_k$(this.key0__1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this._this__u8e3s4__1.resultCache_1.put_4fpzoq_k$(this.key0__1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            return this_0;
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
  function AsyncTypefaceCache() {
    this.PermanentFailure_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.resultCache_1 = LruCache_init_$Create$(16);
    this.permanentCache_1 = SimpleArrayMap_init_$Create$();
    this.cacheLock_1 = createSynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).put_mkf84z_k$ = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.cacheLock_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.permanentCache_1.put_4fpzoq_k$(key, new AsyncTypefaceResult(this.PermanentFailure_1));
    } else if (forever) {
      tmp = this.permanentCache_1.put_4fpzoq_k$(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.resultCache_1.put_4fpzoq_k$(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).put$default_5282m1_k$ = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.put_mkf84z_k$(font, platformFontLoader, result, forever);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.put_mkf84z_k$.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).get_667wvm_k$ = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.cacheLock_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.resultCache_1.get_wei43m_k$(key);
    return tmp0_elvis_lhs == null ? this.permanentCache_1.get_wei43m_k$(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).runCached_axcv1l_k$ = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncTypefaceCache).runCachedBlocking_6vvwv0_k$ = function (font, platformFontLoader, block) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.cacheLock_1;
    var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
    var tmp0_elvis_lhs = this.resultCache_1.get_wei43m_k$(key);
    var priorResult = tmp0_elvis_lhs == null ? this.permanentCache_1.get_wei43m_k$(key) : tmp0_elvis_lhs;
    var tmp;
    if (!(priorResult == null)) {
      return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.result_1);
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
    this.put$default_5282m1_k$(font, platformFontLoader, this_0);
    return this_0;
  };
  function _get_fontList__196yaq($this) {
    return $this.fontList_1;
  }
  function _get_typefaceRequest__ypbief($this) {
    return $this.typefaceRequest_1;
  }
  function _get_asyncTypefaceCache__u2d4d8($this) {
    return $this.asyncTypefaceCache_1;
  }
  function _get_onCompletion__aa185s($this) {
    return $this.onCompletion_1;
  }
  function _get_platformFontLoader__e61p92($this) {
    return $this.platformFontLoader_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    var this_0 = $this.value$delegate_1;
    value$factory();
    this_0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.this$0__1 = this$0;
    this.$font_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).invoke_vgi6qb_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncFontListLoader$load$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_vgi6qb_k$($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.loadWithTimeoutOrNull_6bbr8n_k$(this.$font_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(AsyncFontListLoader$load$slambda).create_d196fn_k$ = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.this$0__1, this.$font_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    var l = function ($completion) {
      return i.invoke_vgi6qb_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.this$0__1 = this$0;
    this.$this_loadWithTimeoutOrNull_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).invoke_ri3sjx_k$ = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withTimeoutOrNull, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri3sjx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.platformFontLoader_1.awaitLoad_quf34a_k$(this.$this_loadWithTimeoutOrNull_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).create_rcuf4x_k$ = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.this$0__1, this.$this_loadWithTimeoutOrNull_1, completion);
    i.$this$withTimeoutOrNull_1 = $this$withTimeoutOrNull;
    return i;
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.invoke_ri3sjx_k$($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(12);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(11);
            var tmp_0 = this;
            tmp_0.this2__1 = this._this__u8e3s4__1.fontList_1;
            this.tmp0_iterator3__1 = get_indices(this.this2__1).iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!this.tmp0_iterator3__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

            this.index4__1 = this.tmp0_iterator3__1.next_20eer_k$();
            this.item5__1 = this.this2__1.get_c1px32_k$(this.index4__1);
            var tmp_1 = this;
            tmp_1.font6__1 = this.item5__1;
            if (this.font6__1.get_loadingStrategy_s3fce_k$() === Companion_getInstance_24().get_Async_nzjdad_k$()) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = this._this__u8e3s4__1.asyncTypefaceCache_1.runCached_axcv1l_k$(this.font6__1, this._this__u8e3s4__1.platformFontLoader_1, false, AsyncFontListLoader$load$slambda_0(this._this__u8e3s4__1, this.font6__1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

          case 4:
            this.typeface7__1 = suspendResult;
            if (!(this.typeface7__1 == null)) {
              _set_value__lx0xdg(this._this__u8e3s4__1, synthesizeTypeface(this._this__u8e3s4__1.typefaceRequest_1.get_fontSynthesis_yx849j_k$(), this.typeface7__1, this.font6__1, this._this__u8e3s4__1.typefaceRequest_1.get_fontWeight_wbif2o_k$(), this._this__u8e3s4__1.typefaceRequest_1.get_fontStyle_nhruzn_k$()));
              this.tmp$ret$01__1 = Unit_getInstance();
              this.set_exceptionState_fex74n_k$(12);
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(5);
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(12);
            var shouldCache = get_isActive(this.get_context_h02k06_k$());
            this._this__u8e3s4__1.cacheable_1 = false;
            this._this__u8e3s4__1.onCompletion_1(new Immutable(this._this__u8e3s4__1.get_value_j01efc_k$(), shouldCache));
            return Unit_getInstance();
          case 9:
            this.tmp$ret$20__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(12);
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 10:
            this.set_exceptionState_fex74n_k$(12);
            var shouldCache_0 = get_isActive(this.get_context_h02k06_k$());
            this._this__u8e3s4__1.cacheable_1 = false;
            this._this__u8e3s4__1.onCompletion_1(new Immutable(this._this__u8e3s4__1.get_value_j01efc_k$(), shouldCache_0));
            return Unit_getInstance();
          case 11:
            this.set_exceptionState_fex74n_k$(12);
            var t = this.get_exception_x0n6w6_k$();
            var shouldCache_1 = get_isActive(this.get_context_h02k06_k$());
            this._this__u8e3s4__1.cacheable_1 = false;
            this._this__u8e3s4__1.onCompletion_1(new Immutable(this._this__u8e3s4__1.get_value_j01efc_k$(), shouldCache_1));
            throw t;
          case 12:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 12) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = Companion_getInstance_20().get_MaximumAsyncTimeoutMillis_x7fazm_k$();
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this._this__u8e3s4__1, this._this__u8e3s4__2, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.get_context_h02k06_k$())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.TRY_RESULT0__1 = tmp_3;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              var tmp_4 = this.get_exception_x0n6w6_k$();
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.get_exception_x0n6w6_k$();
                var tmp_5 = this;
                var tmp0_safe_receiver = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance());
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.handleException_e679jj_k$(this.get_context_h02k06_k$(), IllegalStateException_init_$Create$_0('Unable to load font ' + this._this__u8e3s4__2, uncaughtFontLoadException));
                }
                tmp_5.TRY_RESULT0__1 = null;
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              } else {
                throw this.get_exception_x0n6w6_k$();
              }
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
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
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.fontList_1 = fontList;
    this.typefaceRequest_1 = typefaceRequest;
    this.asyncTypefaceCache_1 = asyncTypefaceCache;
    this.onCompletion_1 = onCompletion;
    this.platformFontLoader_1 = platformFontLoader;
    this.value$delegate_1 = mutableStateOf(initialType);
    this.cacheable_1 = true;
  }
  protoOf(AsyncFontListLoader).get_value_j01efc_k$ = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.value$delegate_1;
    value$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AsyncFontListLoader).set_cacheable_iwx8y2_k$ = function (_set____db54di) {
    this.cacheable_1 = _set____db54di;
  };
  protoOf(AsyncFontListLoader).get_cacheable_mudhp_k$ = function () {
    return this.cacheable_1;
  };
  protoOf(AsyncFontListLoader).load_uj0wpb_k$ = function ($completion) {
    var tmp = new $loadCOROUTINE$2(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncFontListLoader).loadWithTimeoutOrNull_6bbr8n_k$ = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(_no_name_provided__qut3iv).handleException_e679jj_k$ = function (context, exception) {
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    return Unit_getInstance();
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda($resourceLoader, $font, resultContinuation) {
    this.$resourceLoader_1 = $resourceLoader;
    this.$font_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).invoke_ri3sjx_k$ = function ($this$withTimeout, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withTimeout, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri3sjx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$resourceLoader_1.awaitLoad_quf34a_k$(this.$font_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).create_rcuf4x_k$ = function ($this$withTimeout, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda(this.$resourceLoader_1, this.$font_1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda_0($resourceLoader, $font, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda($resourceLoader, $font, resultContinuation);
    var l = function ($this$withTimeout, $completion) {
      return i.invoke_ri3sjx_k$($this$withTimeout, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda($font, $resourceLoader, resultContinuation) {
    this.$font_1 = $font;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda).invoke_vgi6qb_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_vgi6qb_k$($completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = Companion_getInstance_20().get_MaximumAsyncTimeoutMillis_x7fazm_k$();
            suspendResult = withTimeout(tmp_0, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda$slambda_0(this.$resourceLoader_1, this.$font_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var cause = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              throw IllegalStateException_init_$Create$_0('Unable to load font ' + this.$font_1, cause);
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            var tmp0_elvis_lhs = this.TRY_RESULT0__1;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Unable to load font ' + this.$font_1);
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            return tmp_3;
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
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda).create_d196fn_k$ = function (completion) {
    return new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda(this.$font_1, this.$resourceLoader_1, completion);
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda_0($font, $resourceLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda($font, $resourceLoader, resultContinuation);
    var l = function ($completion) {
      return i.invoke_vgi6qb_k$($completion);
    };
    l.$arity = 0;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this$0, $font, $resourceLoader, resultContinuation) {
    this.this$0__1 = this$0;
    this.$font_1 = $font;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).invoke_ri3sjx_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ri3sjx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.asyncTypefaceCache_1.runCached_axcv1l_k$(this.$font_1, this.$resourceLoader_1, true, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda$slambda_0(this.$font_1, this.$resourceLoader_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this.this$0__1, this.$font_1, this.$resourceLoader_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda$slambda_0(this$0, $font, $resourceLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda$slambda(this$0, $font, $resourceLoader, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_ri3sjx_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_asyncTypefaceCache__u2d4d8_0($this) {
    return $this.asyncTypefaceCache_1;
  }
  function _set_asyncLoadScope__1wnnvf($this, _set____db54di) {
    $this.asyncLoadScope_1 = _set____db54di;
  }
  function _get_asyncLoadScope__nmfs61($this) {
    return $this.asyncLoadScope_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.fontMatcher_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.DropExceptionHandler_1 = new _no_name_provided__qut3iv();
  }
  protoOf(Companion_6).get_fontMatcher_dx896u_k$ = function () {
    return this.fontMatcher_1;
  };
  protoOf(Companion_6).get_DropExceptionHandler_ef4cy5_k$ = function () {
    return this.DropExceptionHandler_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_23() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function FontListFontFamilyTypefaceAdapter$preload$lambda(it) {
    return Unit_getInstance();
  }
  function FontListFontFamilyTypefaceAdapter$preload$slambda($asyncLoads, this$0, $resourceLoader, resultContinuation) {
    this.$asyncLoads_1 = $asyncLoads;
    this.this$0__1 = this$0;
    this.$resourceLoader_1 = $resourceLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var this_0 = this.$asyncLoads_1;
            var set = HashSet_init_$Create$(this_0.get_size_woubt6_k$());
            var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
            var inductionVariable = 0;
            var last = this_0.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.get_c1px32_k$(index);
                var key = item;
                if (set.add_utx5q5_k$(key)) {
                  target.add_utx5q5_k$(item);
                }
              }
               while (inductionVariable <= last);
            var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
            var inductionVariable_0 = 0;
            var last_0 = target.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable_0 <= last_0)
              do {
                var index_0 = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var item_0 = target.get_c1px32_k$(index_0);
                var element = async(this.$this$coroutineScope_1, VOID, VOID, FontListFontFamilyTypefaceAdapter$preload$slambda$slambda_0(this.this$0__1, item_0, this.$resourceLoader_1, null));
                target_0.add_utx5q5_k$(element);
              }
               while (inductionVariable_0 <= last_0);
            suspendResult = joinAll(target_0, this);
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
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda(this.$asyncLoads_1, this.this$0__1, this.$resourceLoader_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(FontListFontFamilyTypefaceAdapter$preload$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FontListFontFamilyTypefaceAdapter$preload$slambda_0($asyncLoads, this$0, $resourceLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$preload$slambda($asyncLoads, this$0, $resourceLoader, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.$asyncLoader_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$asyncLoader_1.load_uj0wpb_k$(this);
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
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.$asyncLoader_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_23();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.asyncTypefaceCache_1 = asyncTypefaceCache;
    this.asyncLoadScope_1 = CoroutineScope_0(Companion_getInstance_23().DropExceptionHandler_1.plus_s13ygv_k$(injectedContext).plus_s13ygv_k$(SupervisorJob(injectedContext.get_y2st91_k$(Key_getInstance_0()))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).preload_2axpx6_k$ = function (family, resourceLoader, $completion) {
    if (!(family instanceof FontListFontFamily))
      return Unit_getInstance();
    var allFonts = family.get_fonts_irho7v_k$();
    // Inline function 'androidx.compose.ui.text.fastDistinctBy' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    var this_0 = family.get_fonts_irho7v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontListFontFamilyTypefaceAdapter.preload.<anonymous>' call
        if (item.get_loadingStrategy_s3fce_k$() === Companion_getInstance_24().get_Async_nzjdad_k$()) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.font.FontListFontFamilyTypefaceAdapter.preload.<anonymous>' call
        var element = to(item_0.get_weight_lbhkzl_k$(), new FontStyle(item_0.get_style_fnlxse_k$()));
        target_0.add_utx5q5_k$(element);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    var set = HashSet_init_$Create$(target_0.get_size_woubt6_k$());
    var target_1 = ArrayList_init_$Create$_0(target_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    var last_1 = target_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = target_0.get_c1px32_k$(index_1);
        // Inline function 'androidx.compose.ui.text.fastDistinctBy.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontListFontFamilyTypefaceAdapter.preload.<anonymous>' call
        var key = item_1;
        if (set.add_utx5q5_k$(key)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_1.add_utx5q5_k$(item_1);
        }
      }
       while (inductionVariable_1 <= last_1);
    var asyncStyles = target_1;
    // Inline function 'kotlin.collections.mutableListOf' call
    var asyncLoads = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_2 = 0;
    var last_2 = asyncStyles.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_2 <= last_2)
      do {
        var index_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var item_2 = asyncStyles.get_c1px32_k$(index_2);
        // Inline function 'androidx.compose.ui.text.font.FontListFontFamilyTypefaceAdapter.preload.<anonymous>' call
        var fontWeight = item_2.component1_7eebsc_k$();
        var fontStyle = item_2.component2_7eebsb_k$().value_1;
        var matched = Companion_getInstance_23().fontMatcher_1.matchFont_6opk8k_k$(allFonts, fontWeight, fontStyle);
        var typeRequest = new TypefaceRequest(family, fontWeight, fontStyle, Companion_getInstance_26().get_All_bqi34r_k$(), resourceLoader.get_cacheKey_w22q12_k$());
        var asyncFontsToLoad = firstImmediatelyAvailable(matched, typeRequest, this.asyncTypefaceCache_1, resourceLoader, FontListFontFamilyTypefaceAdapter$preload$lambda).component1_7eebsc_k$();
        if (!(asyncFontsToLoad == null)) {
          asyncLoads.add_utx5q5_k$(first_0(asyncFontsToLoad));
        }
      }
       while (inductionVariable_2 <= last_2);
    return coroutineScope(FontListFontFamilyTypefaceAdapter$preload$slambda_0(asyncLoads, this, resourceLoader, null), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter).resolve_wywkvk_k$ = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.get_fontFamily_ulphcs_k$();
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_23().fontMatcher_1.matchFont_6opk8k_k$(typefaceRequest.get_fontFamily_ulphcs_k$().get_fonts_irho7v_k$(), typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$());
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.asyncTypefaceCache_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.component1_7eebsc_k$();
    var synthesizedTypeface = tmp0_container.component2_7eebsb_k$();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.asyncTypefaceCache_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.asyncLoadScope_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.get_c1px32_k$(idx);
        var tmp1_subject = font.get_loadingStrategy_s3fce_k$();
        if (tmp1_subject === Companion_getInstance_24().get_Blocking_7mu9wm_k$()) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.cacheLock_1;
            var key = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
            var tmp0_elvis_lhs = asyncTypefaceCache.resultCache_1.get_wei43m_k$(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.permanentCache_1.get_wei43m_k$(key) : tmp0_elvis_lhs;
            var tmp;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.result_1);
              break $l$block;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp_0;
            try {
              tmp_0 = platformFontLoader.loadBlocking_4ao78a_k$(font);
            } catch ($p) {
              var tmp_1;
              if ($p instanceof Exception) {
                var cause = $p;
                throw IllegalStateException_init_$Create$_0('Unable to load font ' + font, cause);
              } else {
                throw $p;
              }
            }
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.put$default_5282m1_k$(font, platformFontLoader, tmp_0);
            tmp$ret$0 = tmp_0;
          }
          var tmp2_elvis_lhs = tmp$ret$0;
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Unable to load font ' + font);
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var result = tmp_2;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.get_fontSynthesis_yx849j_k$(), result, font, typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$()));
        } else if (tmp1_subject === Companion_getInstance_24().get_OptionalLocal_ehk5yi_k$()) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.cacheLock_1;
            var key_0 = new Key(font, platformFontLoader.get_cacheKey_w22q12_k$());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.resultCache_1.get_wei43m_k$(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.permanentCache_1.get_wei43m_k$(key_0) : tmp0_elvis_lhs_0;
            var tmp_3;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.result_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            // Inline function 'kotlin.Result.getOrNull' call
            // Inline function 'kotlin.runCatching' call
            var tmp_4;
            try {
              // Inline function 'kotlin.Companion.success' call
              Companion_getInstance_4();
              // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>.<anonymous>' call
              var value = platformFontLoader.loadBlocking_4ao78a_k$(font);
              tmp_4 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
                Companion_getInstance_4();
                tmp_5 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }
            var this_0 = tmp_4;
            var tmp_6;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_6 = null;
            } else {
              var tmp_7 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_6 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
            }
            var this_1 = tmp_6;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.put$default_5282m1_k$(font, platformFontLoader, this_1);
            tmp$ret$5 = this_1;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.get_fontSynthesis_yx849j_k$(), result_0, font, typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$()));
          }
        } else if (tmp1_subject === Companion_getInstance_24().get_Async_nzjdad_k$()) {
          var cacheResult = asyncTypefaceCache.get_667wvm_k$(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.add_utx5q5_k$(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.result_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.result_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.get_fontSynthesis_yx849j_k$(), _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.result_1), font, typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$()));
          }
        } else
          throw IllegalStateException_init_$Create$('Unknown font type ' + font);
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    return $this === Companion_getInstance_24().Blocking_1 ? 'Blocking' : $this === Companion_getInstance_24().OptionalLocal_1 ? 'Optional' : $this === Companion_getInstance_24().Async_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.Blocking_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.OptionalLocal_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.Async_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  protoOf(Companion_7).get_Blocking_7mu9wm_k$ = function () {
    return this.Blocking_1;
  };
  protoOf(Companion_7).get_OptionalLocal_ehk5yi_k$ = function () {
    return this.OptionalLocal_1;
  };
  protoOf(Companion_7).get_Async_nzjdad_k$ = function () {
    return this.Async_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_24() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function FontLoadingStrategy__hashCode_impl_xcx5xu($this) {
    return $this;
  }
  function FontLoadingStrategy__equals_impl_5w10z2($this, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    if (!($this === (other instanceof FontLoadingStrategy ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_24();
    this.value_1 = value;
  }
  protoOf(FontLoadingStrategy).toString = function () {
    return FontLoadingStrategy__toString_impl_fx0z8f(this.value_1);
  };
  protoOf(FontLoadingStrategy).hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_xcx5xu(this.value_1);
  };
  protoOf(FontLoadingStrategy).equals = function (other) {
    return FontLoadingStrategy__equals_impl_5w10z2(this.value_1, other);
  };
  function FontMatcher() {
  }
  protoOf(FontMatcher).matchFont_6opk8k_k$ = function (fontList, fontWeight, fontStyle) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(fontList.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item.get_weight_lbhkzl_k$().equals(fontWeight) ? item.get_style_fnlxse_k$() === fontStyle : false) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.isEmpty_y1axqb_k$()) {
      return target;
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(fontList.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item_0.get_style_fnlxse_k$() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.add_utx5q5_k$(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    var tmp_0;
    if (target_0.isEmpty_y1axqb_k$()) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp_0 = fontList;
    } else {
      tmp_0 = target_0;
    }
    var fontsToSearch = tmp_0;
    var tmp_1;
    if (fontWeight.compareTo_mrh9jv_k$(Companion_getInstance_27().get_W400_wobb2e_k$()) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.get_c1px32_k$(index_1);
          var possibleWeight = font.get_weight_lbhkzl_k$();
          if (!(null == null) ? possibleWeight.compareTo_mrh9jv_k$(null) < 0 : false) {
            continue $l$loop_1;
          }
          if (!(null == null) ? possibleWeight.compareTo_mrh9jv_k$(null) > 0 : false) {
            continue $l$loop_1;
          }
          if (possibleWeight.compareTo_mrh9jv_k$(fontWeight) < 0) {
            if (bestWeightBelow == null ? true : possibleWeight.compareTo_mrh9jv_k$(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.compareTo_mrh9jv_k$(fontWeight) > 0) {
            if (bestWeightAbove == null ? true : possibleWeight.compareTo_mrh9jv_k$(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_2;
      if (true) {
        var tmp1_elvis_lhs = bestWeightBelow;
        tmp_2 = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
      } else {
        var tmp2_elvis_lhs = bestWeightAbove;
        tmp_2 = tmp2_elvis_lhs == null ? bestWeightBelow : tmp2_elvis_lhs;
      }
      var bestWeight = tmp_2;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.get_c1px32_k$(index_2);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_1.get_weight_lbhkzl_k$().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.add_utx5q5_k$(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_1 = target_1;
    } else if (fontWeight.compareTo_mrh9jv_k$(Companion_getInstance_27().get_W500_wobbt3_k$()) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.get_c1px32_k$(index_3);
          var possibleWeight_0 = font_0.get_weight_lbhkzl_k$();
          if (!(null == null) ? possibleWeight_0.compareTo_mrh9jv_k$(null) < 0 : false) {
            continue $l$loop_4;
          }
          if (!(null == null) ? possibleWeight_0.compareTo_mrh9jv_k$(null) > 0 : false) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.compareTo_mrh9jv_k$(fontWeight) < 0) {
            if (bestWeightBelow_0 == null ? true : possibleWeight_0.compareTo_mrh9jv_k$(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.compareTo_mrh9jv_k$(fontWeight) > 0) {
            if (bestWeightAbove_0 == null ? true : possibleWeight_0.compareTo_mrh9jv_k$(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_3;
      if (false) {
        var tmp1_elvis_lhs_0 = bestWeightBelow_0;
        tmp_3 = tmp1_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp1_elvis_lhs_0;
      } else {
        var tmp2_elvis_lhs_0 = bestWeightAbove_0;
        tmp_3 = tmp2_elvis_lhs_0 == null ? bestWeightBelow_0 : tmp2_elvis_lhs_0;
      }
      var bestWeight_0 = tmp_3;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.get_c1px32_k$(index_4);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_2.get_weight_lbhkzl_k$().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.add_utx5q5_k$(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_1 = target_2;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_27().get_W500_wobbt3_k$();
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.get_c1px32_k$(index_5);
          var possibleWeight_1 = font_1.get_weight_lbhkzl_k$();
          if (!(null == null) ? possibleWeight_1.compareTo_mrh9jv_k$(null) < 0 : false) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) ? possibleWeight_1.compareTo_mrh9jv_k$(maxSearchRange) > 0 : false) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.compareTo_mrh9jv_k$(fontWeight) < 0) {
            if (bestWeightBelow_1 == null ? true : possibleWeight_1.compareTo_mrh9jv_k$(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.compareTo_mrh9jv_k$(fontWeight) > 0) {
            if (bestWeightAbove_1 == null ? true : possibleWeight_1.compareTo_mrh9jv_k$(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_4;
      if (false) {
        var tmp1_elvis_lhs_1 = bestWeightBelow_1;
        tmp_4 = tmp1_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp1_elvis_lhs_1;
      } else {
        var tmp2_elvis_lhs_1 = bestWeightAbove_1;
        tmp_4 = tmp2_elvis_lhs_1 == null ? bestWeightBelow_1 : tmp2_elvis_lhs_1;
      }
      var bestWeight_1 = tmp_4;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.get_c1px32_k$(index_6);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_3.get_weight_lbhkzl_k$().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.add_utx5q5_k$(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      var tmp_5;
      if (target_3.isEmpty_y1axqb_k$()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_27().get_W500_wobbt3_k$();
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.get_c1px32_k$(index_7);
            var possibleWeight_2 = font_2.get_weight_lbhkzl_k$();
            if (!(minSearchRange == null) ? possibleWeight_2.compareTo_mrh9jv_k$(minSearchRange) < 0 : false) {
              continue $l$loop_10;
            }
            if (!(null == null) ? possibleWeight_2.compareTo_mrh9jv_k$(null) > 0 : false) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.compareTo_mrh9jv_k$(fontWeight) < 0) {
              if (bestWeightBelow_2 == null ? true : possibleWeight_2.compareTo_mrh9jv_k$(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.compareTo_mrh9jv_k$(fontWeight) > 0) {
              if (bestWeightAbove_2 == null ? true : possibleWeight_2.compareTo_mrh9jv_k$(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_6;
        if (false) {
          var tmp1_elvis_lhs_2 = bestWeightBelow_2;
          tmp_6 = tmp1_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp1_elvis_lhs_2;
        } else {
          var tmp2_elvis_lhs_2 = bestWeightAbove_2;
          tmp_6 = tmp2_elvis_lhs_2 == null ? bestWeightBelow_2 : tmp2_elvis_lhs_2;
        }
        var bestWeight_2 = tmp_6;
        // Inline function 'androidx.compose.ui.text.fastFilter' call
        // Inline function 'kotlin.contracts.contract' call
        var target_4 = ArrayList_init_$Create$_0(fontsToSearch.get_size_woubt6_k$());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.get_c1px32_k$(index_8);
            // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            if (item_4.get_weight_lbhkzl_k$().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.add_utx5q5_k$(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp_5 = target_4;
      } else {
        tmp_5 = target_3;
      }
      tmp_1 = tmp_5;
    }
    var result = tmp_1;
    return result;
  };
  protoOf(FontMatcher).filterByClosestWeight_k26piv_k$ = function (_this__u8e3s4, fontWeight, preferBelow, minSearchRange, maxSearchRange) {
    var bestWeightAbove = null;
    var bestWeightBelow = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop_1: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.get_c1px32_k$(index);
        var possibleWeight = font.get_weight_lbhkzl_k$();
        if (!(minSearchRange == null) ? possibleWeight.compareTo_mrh9jv_k$(minSearchRange) < 0 : false) {
          continue $l$loop_1;
        }
        if (!(maxSearchRange == null) ? possibleWeight.compareTo_mrh9jv_k$(maxSearchRange) > 0 : false) {
          continue $l$loop_1;
        }
        if (possibleWeight.compareTo_mrh9jv_k$(fontWeight) < 0) {
          if (bestWeightBelow == null ? true : possibleWeight.compareTo_mrh9jv_k$(bestWeightBelow) > 0) {
            bestWeightBelow = possibleWeight;
          }
        } else if (possibleWeight.compareTo_mrh9jv_k$(fontWeight) > 0) {
          if (bestWeightAbove == null ? true : possibleWeight.compareTo_mrh9jv_k$(bestWeightAbove) < 0) {
            bestWeightAbove = possibleWeight;
          }
        } else {
          bestWeightAbove = possibleWeight;
          bestWeightBelow = possibleWeight;
          break $l$loop_1;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (preferBelow) {
      var tmp1_elvis_lhs = bestWeightBelow;
      tmp = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
    } else {
      var tmp2_elvis_lhs = bestWeightAbove;
      tmp = tmp2_elvis_lhs == null ? bestWeightBelow : tmp2_elvis_lhs;
    }
    var bestWeight = tmp;
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = _this__u8e3s4.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
        if (item.get_weight_lbhkzl_k$().equals(bestWeight)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.add_utx5q5_k$(item);
        }
      }
       while (inductionVariable_0 <= last_0);
    return target;
  };
  protoOf(FontMatcher).matchFont_m1ise8_k$ = function (fontFamily, fontWeight, fontStyle) {
    if (!(fontFamily instanceof FontListFontFamily))
      throw IllegalArgumentException_init_$Create$('Only FontFamily instances that presents a list of Fonts can be used');
    return this.matchFont_4rkgzl_k$(fontFamily, fontWeight, fontStyle);
  };
  protoOf(FontMatcher).matchFont_4rkgzl_k$ = function (fontFamily, fontWeight, fontStyle) {
    return this.matchFont_6opk8k_k$(fontFamily.get_fonts_irho7v_k$(), fontWeight, fontStyle);
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function _FontStyle___get_value__impl__gx8aaz($this) {
    return $this;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_25().Normal_1 ? 'Normal' : $this === Companion_getInstance_25().Italic_1 ? 'Italic' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.Normal_1 = _FontStyle___init__impl__jcnduf(0);
    this.Italic_1 = _FontStyle___init__impl__jcnduf(1);
  }
  protoOf(Companion_8).get_Normal_tevh6u_k$ = function () {
    return this.Normal_1;
  };
  protoOf(Companion_8).get_Italic_5ol4ot_k$ = function () {
    return this.Italic_1;
  };
  protoOf(Companion_8).values_dmh61q_k$ = function () {
    return listOf([new FontStyle(this.Normal_1), new FontStyle(this.Italic_1)]);
  };
  var Companion_instance_8;
  function Companion_getInstance_25() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === (other instanceof FontStyle ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_25();
    this.value_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.value_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.value_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.value_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function _FontSynthesis___get_value__impl__xrueqg($this) {
    return $this;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_26().None_1 ? 'None' : $this === Companion_getInstance_26().All_1 ? 'All' : $this === Companion_getInstance_26().Weight_1 ? 'Weight' : $this === Companion_getInstance_26().Style_1 ? 'Style' : 'Invalid';
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.None_1 = _FontSynthesis___init__impl__n397bg(0);
    this.All_1 = _FontSynthesis___init__impl__n397bg(1);
    this.Weight_1 = _FontSynthesis___init__impl__n397bg(2);
    this.Style_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  protoOf(Companion_9).get_None_4h38ia_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_9).get_All_bqi34r_k$ = function () {
    return this.All_1;
  };
  protoOf(Companion_9).get_Weight_42vff6_k$ = function () {
    return this.Weight_1;
  };
  protoOf(Companion_9).get_Style_inainp_k$ = function () {
    return this.Style_1;
  };
  var Companion_instance_9;
  function Companion_getInstance_26() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function _FontSynthesis___get_isWeightOn__impl__6dyd1g($this) {
    return $this === Companion_getInstance_26().All_1 ? true : $this === Companion_getInstance_26().Weight_1;
  }
  function _FontSynthesis___get_isStyleOn__impl__vevcx9($this) {
    return $this === Companion_getInstance_26().All_1 ? true : $this === Companion_getInstance_26().Style_1;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === (other instanceof FontSynthesis ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_26();
    this.value_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.value_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.value_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.value_1, other);
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.W100__1 = new FontWeight(100);
    this.W200__1 = new FontWeight(200);
    this.W300__1 = new FontWeight(300);
    this.W400__1 = new FontWeight(400);
    this.W500__1 = new FontWeight(500);
    this.W600__1 = new FontWeight(600);
    this.W700__1 = new FontWeight(700);
    this.W800__1 = new FontWeight(800);
    this.W900__1 = new FontWeight(900);
    this.Thin_1 = this.W100__1;
    this.ExtraLight_1 = this.W200__1;
    this.Light_1 = this.W300__1;
    this.Normal_1 = this.W400__1;
    this.Medium_1 = this.W500__1;
    this.SemiBold_1 = this.W600__1;
    this.Bold_1 = this.W700__1;
    this.ExtraBold_1 = this.W800__1;
    this.Black_1 = this.W900__1;
    this.values_1 = listOf([this.W100__1, this.W200__1, this.W300__1, this.W400__1, this.W500__1, this.W600__1, this.W700__1, this.W800__1, this.W900__1]);
  }
  protoOf(Companion_10).get_W100_wob8ub_k$ = function () {
    return this.W100__1;
  };
  protoOf(Companion_10).get_W200_wob9l0_k$ = function () {
    return this.W200__1;
  };
  protoOf(Companion_10).get_W300_wobabp_k$ = function () {
    return this.W300__1;
  };
  protoOf(Companion_10).get_W400_wobb2e_k$ = function () {
    return this.W400__1;
  };
  protoOf(Companion_10).get_W500_wobbt3_k$ = function () {
    return this.W500__1;
  };
  protoOf(Companion_10).get_W600_wobcjs_k$ = function () {
    return this.W600__1;
  };
  protoOf(Companion_10).get_W700_wobdah_k$ = function () {
    return this.W700__1;
  };
  protoOf(Companion_10).get_W800_wobe16_k$ = function () {
    return this.W800__1;
  };
  protoOf(Companion_10).get_W900_woberv_k$ = function () {
    return this.W900__1;
  };
  protoOf(Companion_10).get_Thin_woai2q_k$ = function () {
    return this.Thin_1;
  };
  protoOf(Companion_10).get_ExtraLight_ov7yxb_k$ = function () {
    return this.ExtraLight_1;
  };
  protoOf(Companion_10).get_Light_id31e5_k$ = function () {
    return this.Light_1;
  };
  protoOf(Companion_10).get_Normal_22avww_k$ = function () {
    return this.Normal_1;
  };
  protoOf(Companion_10).get_Medium_1fiba6_k$ = function () {
    return this.Medium_1;
  };
  protoOf(Companion_10).get_SemiBold_aid1c4_k$ = function () {
    return this.SemiBold_1;
  };
  protoOf(Companion_10).get_Bold_wnz5ke_k$ = function () {
    return this.Bold_1;
  };
  protoOf(Companion_10).get_ExtraBold_xklwd0_k$ = function () {
    return this.ExtraBold_1;
  };
  protoOf(Companion_10).get_Black_i7mvue_k$ = function () {
    return this.Black_1;
  };
  protoOf(Companion_10).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_27() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function get_$stableprop_22() {
    return 0;
  }
  function FontWeight(weight) {
    Companion_getInstance_27();
    this.weight_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.weight_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      var message = 'Font weight can be in range [1, 1000]. Current value: ' + this.weight_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.$stable_1 = 0;
  }
  protoOf(FontWeight).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(FontWeight).compareTo_mrh9jv_k$ = function (other) {
    return compareTo(this.weight_1, other.weight_1);
  };
  protoOf(FontWeight).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_mrh9jv_k$(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.weight_1 === other.weight_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.weight_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.weight_1 + ')';
  };
  function lerp_7(start, stop, fraction) {
    var weight = coerceIn(lerp_2(start.weight_1, stop.weight_1, fraction), 1, 1000);
    return new FontWeight(weight);
  }
  function Typeface() {
  }
  function EditCommand() {
  }
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    CommitTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(CommitTextCommand)));
  }
  function get_$stableprop_23() {
    return 0;
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.annotatedString_1 = annotatedString;
    this.newCursorPosition_1 = newCursorPosition;
    this.$stable_1 = 0;
  }
  protoOf(CommitTextCommand).get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  protoOf(CommitTextCommand).get_newCursorPosition_tgzkui_k$ = function () {
    return this.newCursorPosition_1;
  };
  protoOf(CommitTextCommand).get_text_wouvsm_k$ = function () {
    return this.annotatedString_1.get_text_wouvsm_k$();
  };
  protoOf(CommitTextCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.hasComposition_fjs7rk_k$()) {
      buffer.replace_k5sxva_k$(buffer.get_compositionStart_3if7fj_k$(), buffer.get_compositionEnd_xx7h0a_k$(), this.get_text_wouvsm_k$());
    } else {
      buffer.replace_k5sxva_k$(buffer.get_selectionStart_1zskht_k$(), buffer.get_selectionEnd_mebxu0_k$(), this.get_text_wouvsm_k$());
    }
    var newCursor = buffer.get_cursor_c3jujj_k$();
    var tmp;
    if (this.newCursorPosition_1 > 0) {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - this.get_text_wouvsm_k$().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.set_cursor_c0ccid_k$(coerceIn(newCursorInBuffer, 0, buffer.get_length_g42xv3_k$()));
  };
  protoOf(CommitTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.get_text_wouvsm_k$() === other.get_text_wouvsm_k$()))
      return false;
    if (!(this.newCursorPosition_1 === other.newCursorPosition_1))
      return false;
    return true;
  };
  protoOf(CommitTextCommand).hashCode = function () {
    var result = getStringHashCode(this.get_text_wouvsm_k$());
    result = imul(31, result) + this.newCursorPosition_1 | 0;
    return result;
  };
  protoOf(CommitTextCommand).toString = function () {
    return "CommitTextCommand(text='" + this.get_text_wouvsm_k$() + "', newCursorPosition=" + this.newCursorPosition_1 + ')';
  };
  function get_$stableprop_24() {
    return 0;
  }
  function DeleteAllCommand() {
    this.$stable_1 = 0;
  }
  protoOf(DeleteAllCommand).applyTo_f361h0_k$ = function (buffer) {
    buffer.replace_k5sxva_k$(0, buffer.get_length_g42xv3_k$(), '');
  };
  protoOf(DeleteAllCommand).equals = function (other) {
    return other instanceof DeleteAllCommand;
  };
  protoOf(DeleteAllCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(DeleteAllCommand).toString = function () {
    return 'DeleteAllCommand()';
  };
  function get_$stableprop_25() {
    return 0;
  }
  function FinishComposingTextCommand() {
    this.$stable_1 = 0;
  }
  protoOf(FinishComposingTextCommand).applyTo_f361h0_k$ = function (buffer) {
    buffer.commitComposition_8w4hjx_k$();
  };
  protoOf(FinishComposingTextCommand).equals = function (other) {
    return other instanceof FinishComposingTextCommand;
  };
  protoOf(FinishComposingTextCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(FinishComposingTextCommand).toString = function () {
    return 'FinishComposingTextCommand()';
  };
  function get_$stableprop_26() {
    return 0;
  }
  function DeleteSurroundingTextCommand$applyTo$lambda() {
    return 0;
  }
  function DeleteSurroundingTextCommand(lengthBeforeCursor, lengthAfterCursor) {
    this.lengthBeforeCursor_1 = lengthBeforeCursor;
    this.lengthAfterCursor_1 = lengthAfterCursor;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.lengthBeforeCursor_1 >= 0 ? this.lengthAfterCursor_1 >= 0 : false)) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextCommand.<anonymous>' call
      var message = 'Expected lengthBeforeCursor and lengthAfterCursor to be non-negative, were ' + ('' + this.lengthBeforeCursor_1 + ' and ' + this.lengthAfterCursor_1 + ' respectively.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.$stable_1 = 0;
  }
  protoOf(DeleteSurroundingTextCommand).get_lengthBeforeCursor_s0y05g_k$ = function () {
    return this.lengthBeforeCursor_1;
  };
  protoOf(DeleteSurroundingTextCommand).get_lengthAfterCursor_pm54bh_k$ = function () {
    return this.lengthAfterCursor_1;
  };
  protoOf(DeleteSurroundingTextCommand).applyTo_f361h0_k$ = function (buffer) {
    // Inline function 'androidx.compose.ui.text.input.addExactOrElse' call
    var this_0 = buffer.get_selectionEnd_mebxu0_k$();
    var right = this.lengthAfterCursor_1;
    var result = this_0 + right | 0;
    var tmp;
    if (((this_0 ^ result) & (right ^ result)) < 0) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextCommand.applyTo.<anonymous>' call
      tmp = buffer.get_length_g42xv3_k$();
    } else {
      tmp = result;
    }
    var end = tmp;
    var tmp_0 = buffer.get_selectionEnd_mebxu0_k$();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = buffer.get_length_g42xv3_k$();
    var tmp$ret$2 = Math.min(end, b);
    buffer.delete_wbvee3_k$(tmp_0, tmp$ret$2);
    var tmp_1 = buffer.get_selectionStart_1zskht_k$();
    var start = subtractExactOrElse(tmp_1, this.lengthBeforeCursor_1, DeleteSurroundingTextCommand$applyTo$lambda);
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp$ret$3 = Math.max(0, start);
    buffer.delete_wbvee3_k$(tmp$ret$3, buffer.get_selectionStart_1zskht_k$());
  };
  protoOf(DeleteSurroundingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeleteSurroundingTextCommand))
      return false;
    if (!(this.lengthBeforeCursor_1 === other.lengthBeforeCursor_1))
      return false;
    if (!(this.lengthAfterCursor_1 === other.lengthAfterCursor_1))
      return false;
    return true;
  };
  protoOf(DeleteSurroundingTextCommand).hashCode = function () {
    var result = this.lengthBeforeCursor_1;
    result = imul(31, result) + this.lengthAfterCursor_1 | 0;
    return result;
  };
  protoOf(DeleteSurroundingTextCommand).toString = function () {
    return 'DeleteSurroundingTextCommand(lengthBeforeCursor=' + this.lengthBeforeCursor_1 + ', ' + ('lengthAfterCursor=' + this.lengthAfterCursor_1 + ')');
  };
  function get_$stableprop_27() {
    return 0;
  }
  function SetSelectionCommand(start, end) {
    this.start_1 = start;
    this.end_1 = end;
    this.$stable_1 = 0;
  }
  protoOf(SetSelectionCommand).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(SetSelectionCommand).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(SetSelectionCommand).applyTo_f361h0_k$ = function (buffer) {
    var clampedStart = coerceIn(this.start_1, 0, buffer.get_length_g42xv3_k$());
    var clampedEnd = coerceIn(this.end_1, 0, buffer.get_length_g42xv3_k$());
    if (clampedStart < clampedEnd) {
      buffer.setSelection_qn2wp2_k$(clampedStart, clampedEnd);
    } else {
      buffer.setSelection_qn2wp2_k$(clampedEnd, clampedStart);
    }
  };
  protoOf(SetSelectionCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetSelectionCommand))
      return false;
    if (!(this.start_1 === other.start_1))
      return false;
    if (!(this.end_1 === other.end_1))
      return false;
    return true;
  };
  protoOf(SetSelectionCommand).hashCode = function () {
    var result = this.start_1;
    result = imul(31, result) + this.end_1 | 0;
    return result;
  };
  protoOf(SetSelectionCommand).toString = function () {
    return 'SetSelectionCommand(start=' + this.start_1 + ', end=' + this.end_1 + ')';
  };
  function SetComposingTextCommand_init_$Init$(text, newCursorPosition, $this) {
    SetComposingTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function SetComposingTextCommand_init_$Create$(text, newCursorPosition) {
    return SetComposingTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(SetComposingTextCommand)));
  }
  function get_$stableprop_28() {
    return 0;
  }
  function SetComposingTextCommand(annotatedString, newCursorPosition) {
    this.annotatedString_1 = annotatedString;
    this.newCursorPosition_1 = newCursorPosition;
    this.$stable_1 = 0;
  }
  protoOf(SetComposingTextCommand).get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  protoOf(SetComposingTextCommand).get_newCursorPosition_tgzkui_k$ = function () {
    return this.newCursorPosition_1;
  };
  protoOf(SetComposingTextCommand).get_text_wouvsm_k$ = function () {
    return this.annotatedString_1.get_text_wouvsm_k$();
  };
  protoOf(SetComposingTextCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.hasComposition_fjs7rk_k$()) {
      var compositionStart = buffer.get_compositionStart_3if7fj_k$();
      buffer.replace_k5sxva_k$(buffer.get_compositionStart_3if7fj_k$(), buffer.get_compositionEnd_xx7h0a_k$(), this.get_text_wouvsm_k$());
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = this.get_text_wouvsm_k$();
      if (charSequenceLength(this_0) > 0) {
        buffer.setComposition_kdu1ns_k$(compositionStart, compositionStart + this.get_text_wouvsm_k$().length | 0);
      }
    } else {
      var selectionStart = buffer.get_selectionStart_1zskht_k$();
      buffer.replace_k5sxva_k$(buffer.get_selectionStart_1zskht_k$(), buffer.get_selectionEnd_mebxu0_k$(), this.get_text_wouvsm_k$());
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_1 = this.get_text_wouvsm_k$();
      if (charSequenceLength(this_1) > 0) {
        buffer.setComposition_kdu1ns_k$(selectionStart, selectionStart + this.get_text_wouvsm_k$().length | 0);
      }
    }
    var newCursor = buffer.get_cursor_c3jujj_k$();
    var tmp;
    if (this.newCursorPosition_1 > 0) {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.newCursorPosition_1 | 0) - this.get_text_wouvsm_k$().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.set_cursor_c0ccid_k$(coerceIn(newCursorInBuffer, 0, buffer.get_length_g42xv3_k$()));
  };
  protoOf(SetComposingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetComposingTextCommand))
      return false;
    if (!(this.get_text_wouvsm_k$() === other.get_text_wouvsm_k$()))
      return false;
    if (!(this.newCursorPosition_1 === other.newCursorPosition_1))
      return false;
    return true;
  };
  protoOf(SetComposingTextCommand).hashCode = function () {
    var result = getStringHashCode(this.get_text_wouvsm_k$());
    result = imul(31, result) + this.newCursorPosition_1 | 0;
    return result;
  };
  protoOf(SetComposingTextCommand).toString = function () {
    return "SetComposingTextCommand(text='" + this.get_text_wouvsm_k$() + "', newCursorPosition=" + this.newCursorPosition_1 + ')';
  };
  function get_$stableprop_29() {
    return 0;
  }
  function SetComposingRegionCommand(start, end) {
    this.start_1 = start;
    this.end_1 = end;
    this.$stable_1 = 0;
  }
  protoOf(SetComposingRegionCommand).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(SetComposingRegionCommand).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(SetComposingRegionCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.hasComposition_fjs7rk_k$()) {
      buffer.commitComposition_8w4hjx_k$();
    }
    var clampedStart = coerceIn(this.start_1, 0, buffer.get_length_g42xv3_k$());
    var clampedEnd = coerceIn(this.end_1, 0, buffer.get_length_g42xv3_k$());
    if (clampedStart !== clampedEnd)
      if (clampedStart < clampedEnd) {
        buffer.setComposition_kdu1ns_k$(clampedStart, clampedEnd);
      } else {
        buffer.setComposition_kdu1ns_k$(clampedEnd, clampedStart);
      }
  };
  protoOf(SetComposingRegionCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetComposingRegionCommand))
      return false;
    if (!(this.start_1 === other.start_1))
      return false;
    if (!(this.end_1 === other.end_1))
      return false;
    return true;
  };
  protoOf(SetComposingRegionCommand).hashCode = function () {
    var result = this.start_1;
    result = imul(31, result) + this.end_1 | 0;
    return result;
  };
  protoOf(SetComposingRegionCommand).toString = function () {
    return 'SetComposingRegionCommand(start=' + this.start_1 + ', end=' + this.end_1 + ')';
  };
  function get_$stableprop_30() {
    return 0;
  }
  function DeleteSurroundingTextInCodePointsCommand(lengthBeforeCursor, lengthAfterCursor) {
    this.lengthBeforeCursor_1 = lengthBeforeCursor;
    this.lengthAfterCursor_1 = lengthAfterCursor;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.lengthBeforeCursor_1 >= 0 ? this.lengthAfterCursor_1 >= 0 : false)) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextInCodePointsCommand.<anonymous>' call
      var message = 'Expected lengthBeforeCursor and lengthAfterCursor to be non-negative, were ' + ('' + this.lengthBeforeCursor_1 + ' and ' + this.lengthAfterCursor_1 + ' respectively.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.$stable_1 = 0;
  }
  protoOf(DeleteSurroundingTextInCodePointsCommand).get_lengthBeforeCursor_s0y05g_k$ = function () {
    return this.lengthBeforeCursor_1;
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).get_lengthAfterCursor_pm54bh_k$ = function () {
    return this.lengthAfterCursor_1;
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).applyTo_f361h0_k$ = function (buffer) {
    var beforeLenInChars = 0;
    var inductionVariable = 0;
    var last = this.lengthBeforeCursor_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        beforeLenInChars = beforeLenInChars + 1 | 0;
        if (buffer.get_selectionStart_1zskht_k$() > beforeLenInChars) {
          var lead = buffer.get_kdzpvg_k$((buffer.get_selectionStart_1zskht_k$() - beforeLenInChars | 0) - 1 | 0);
          var trail = buffer.get_kdzpvg_k$(buffer.get_selectionStart_1zskht_k$() - beforeLenInChars | 0);
          if (isSurrogatePair(lead, trail)) {
            beforeLenInChars = beforeLenInChars + 1 | 0;
          }
        }
        if (beforeLenInChars === buffer.get_selectionStart_1zskht_k$())
          break $l$loop;
      }
       while (inductionVariable < last);
    var afterLenInChars = 0;
    var inductionVariable_0 = 0;
    var last_0 = this.lengthAfterCursor_1;
    if (inductionVariable_0 < last_0)
      $l$loop_0: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        afterLenInChars = afterLenInChars + 1 | 0;
        if ((buffer.get_selectionEnd_mebxu0_k$() + afterLenInChars | 0) < buffer.get_length_g42xv3_k$()) {
          var lead_0 = buffer.get_kdzpvg_k$((buffer.get_selectionEnd_mebxu0_k$() + afterLenInChars | 0) - 1 | 0);
          var trail_0 = buffer.get_kdzpvg_k$(buffer.get_selectionEnd_mebxu0_k$() + afterLenInChars | 0);
          if (isSurrogatePair(lead_0, trail_0)) {
            afterLenInChars = afterLenInChars + 1 | 0;
          }
        }
        if ((buffer.get_selectionEnd_mebxu0_k$() + afterLenInChars | 0) === buffer.get_length_g42xv3_k$())
          break $l$loop_0;
      }
       while (inductionVariable_0 < last_0);
    buffer.delete_wbvee3_k$(buffer.get_selectionEnd_mebxu0_k$(), buffer.get_selectionEnd_mebxu0_k$() + afterLenInChars | 0);
    buffer.delete_wbvee3_k$(buffer.get_selectionStart_1zskht_k$() - beforeLenInChars | 0, buffer.get_selectionStart_1zskht_k$());
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeleteSurroundingTextInCodePointsCommand))
      return false;
    if (!(this.lengthBeforeCursor_1 === other.lengthBeforeCursor_1))
      return false;
    if (!(this.lengthAfterCursor_1 === other.lengthAfterCursor_1))
      return false;
    return true;
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).hashCode = function () {
    var result = this.lengthBeforeCursor_1;
    result = imul(31, result) + this.lengthAfterCursor_1 | 0;
    return result;
  };
  protoOf(DeleteSurroundingTextInCodePointsCommand).toString = function () {
    return 'DeleteSurroundingTextInCodePointsCommand(lengthBeforeCursor=' + this.lengthBeforeCursor_1 + ', ' + ('lengthAfterCursor=' + this.lengthAfterCursor_1 + ')');
  };
  function get_$stableprop_31() {
    return 0;
  }
  function BackspaceCommand() {
    this.$stable_1 = 0;
  }
  protoOf(BackspaceCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.hasComposition_fjs7rk_k$()) {
      buffer.delete_wbvee3_k$(buffer.get_compositionStart_3if7fj_k$(), buffer.get_compositionEnd_xx7h0a_k$());
      return Unit_getInstance();
    }
    if (buffer.get_cursor_c3jujj_k$() === -1) {
      var delStart = buffer.get_selectionStart_1zskht_k$();
      var delEnd = buffer.get_selectionEnd_mebxu0_k$();
      buffer.set_cursor_c0ccid_k$(buffer.get_selectionStart_1zskht_k$());
      buffer.delete_wbvee3_k$(delStart, delEnd);
      return Unit_getInstance();
    }
    if (buffer.get_cursor_c3jujj_k$() === 0) {
      return Unit_getInstance();
    }
    var prevCursorPos = findPrecedingBreak(buffer.toString(), buffer.get_cursor_c3jujj_k$());
    buffer.delete_wbvee3_k$(prevCursorPos, buffer.get_cursor_c3jujj_k$());
  };
  protoOf(BackspaceCommand).equals = function (other) {
    return other instanceof BackspaceCommand;
  };
  protoOf(BackspaceCommand).hashCode = function () {
    return getKClassFromExpression(this).hashCode();
  };
  protoOf(BackspaceCommand).toString = function () {
    return 'BackspaceCommand()';
  };
  function get_$stableprop_32() {
    return 0;
  }
  function MoveCursorCommand(amount) {
    this.amount_1 = amount;
    this.$stable_1 = 0;
  }
  protoOf(MoveCursorCommand).get_amount_b10di9_k$ = function () {
    return this.amount_1;
  };
  protoOf(MoveCursorCommand).applyTo_f361h0_k$ = function (buffer) {
    if (buffer.get_cursor_c3jujj_k$() === -1) {
      buffer.set_cursor_c0ccid_k$(buffer.get_selectionStart_1zskht_k$());
    }
    var newCursor = buffer.get_selectionStart_1zskht_k$();
    var bufferText = buffer.toString();
    if (this.amount_1 > 0) {
      var inductionVariable = 0;
      var last = this.amount_1;
      if (inductionVariable < last)
        $l$loop: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var next = findFollowingBreak(bufferText, newCursor);
          if (next === -1)
            break $l$loop;
          newCursor = next;
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = -this.amount_1 | 0;
      if (inductionVariable_0 < last_0)
        $l$loop_0: do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var prev = findPrecedingBreak(bufferText, newCursor);
          if (prev === -1)
            break $l$loop_0;
          newCursor = prev;
        }
         while (inductionVariable_0 < last_0);
    }
    buffer.set_cursor_c0ccid_k$(newCursor);
  };
  protoOf(MoveCursorCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveCursorCommand))
      return false;
    if (!(this.amount_1 === other.amount_1))
      return false;
    return true;
  };
  protoOf(MoveCursorCommand).hashCode = function () {
    return this.amount_1;
  };
  protoOf(MoveCursorCommand).toString = function () {
    return 'MoveCursorCommand(amount=' + this.amount_1 + ')';
  };
  function isSurrogatePair(high, low) {
    return isHighSurrogate(high) ? isLowSurrogate(low) : false;
  }
  function _set_mBufferState__bqygtp($this, _set____db54di) {
    $this.mBufferState_1 = _set____db54di;
  }
  function _set_mBuffer__xnaq5k($this, _set____db54di) {
    $this.mBuffer_1 = _set____db54di;
  }
  function generateBatchErrorMessage($this, editCommands, failedCommand) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.EditProcessor.generateBatchErrorMessage.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var tmp = 'Error while applying EditCommand batch to buffer (' + ('length=' + $this.mBuffer_1.get_length_g42xv3_k$() + ', ');
    var tmp_0 = $this.mBuffer_1.get_composition_sol8g8_k$();
    var value = tmp + ('composition=' + (tmp_0 == null ? null : new TextRange(tmp_0)) + ', ') + ('selection=' + new TextRange($this.mBuffer_1.get_selection_d115tn_k$()) + '):');
    // Inline function 'kotlin.text.appendLine' call
    this_0.append_22ad7x_k$(value).append_am5a4z_k$(_Char___init__impl__6a9atx(10));
    joinTo(editCommands, this_0, '\n', VOID, VOID, VOID, VOID, EditProcessor$generateBatchErrorMessage$lambda(failedCommand, $this));
    return this_0.toString();
  }
  function toStringForLog(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof CommitTextCommand) {
      tmp = 'CommitTextCommand(text.length=' + _this__u8e3s4.get_text_wouvsm_k$().length + ', newCursorPosition=' + _this__u8e3s4.get_newCursorPosition_tgzkui_k$() + ')';
    } else {
      if (_this__u8e3s4 instanceof SetComposingTextCommand) {
        tmp = 'SetComposingTextCommand(text.length=' + _this__u8e3s4.get_text_wouvsm_k$().length + ', ' + ('newCursorPosition=' + _this__u8e3s4.get_newCursorPosition_tgzkui_k$() + ')');
      } else {
        if (_this__u8e3s4 instanceof SetComposingRegionCommand) {
          tmp = toString(_this__u8e3s4);
        } else {
          if (_this__u8e3s4 instanceof DeleteSurroundingTextCommand) {
            tmp = toString(_this__u8e3s4);
          } else {
            if (_this__u8e3s4 instanceof DeleteSurroundingTextInCodePointsCommand) {
              tmp = toString(_this__u8e3s4);
            } else {
              if (_this__u8e3s4 instanceof SetSelectionCommand) {
                tmp = toString(_this__u8e3s4);
              } else {
                if (_this__u8e3s4 instanceof FinishComposingTextCommand) {
                  tmp = toString(_this__u8e3s4);
                } else {
                  if (_this__u8e3s4 instanceof BackspaceCommand) {
                    tmp = toString(_this__u8e3s4);
                  } else {
                    if (_this__u8e3s4 instanceof MoveCursorCommand) {
                      tmp = toString(_this__u8e3s4);
                    } else {
                      if (_this__u8e3s4 instanceof DeleteAllCommand) {
                        tmp = toString(_this__u8e3s4);
                      } else {
                        var tmp1_elvis_lhs = getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
                        tmp = 'Unknown EditCommand: ' + (tmp1_elvis_lhs == null ? '{anonymous EditCommand}' : tmp1_elvis_lhs);
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
    return tmp;
  }
  function get_$stableprop_33() {
    return 8;
  }
  function EditProcessor$generateBatchErrorMessage$lambda($failedCommand, this$0) {
    return function (it) {
      var prefix = $failedCommand === it ? ' > ' : '   ';
      return prefix + toStringForLog(it, this$0);
    };
  }
  function EditProcessor() {
    this.mBufferState_1 = new TextFieldValue(emptyAnnotatedString(), Companion_getInstance_18().get_Zero_8je9ih_k$(), null);
    this.mBuffer_1 = new EditingBuffer(this.mBufferState_1.get_annotatedString_5pdwrk_k$(), this.mBufferState_1.get_selection_d115tn_k$());
    this.$stable_1 = 8;
  }
  protoOf(EditProcessor).get_mBufferState_ylb5xp_k$ = function () {
    return this.mBufferState_1;
  };
  protoOf(EditProcessor).get_mBuffer_idx5w_k$ = function () {
    return this.mBuffer_1;
  };
  protoOf(EditProcessor).reset_q7o20z_k$ = function (value, textInputSession) {
    var textChanged = false;
    var selectionChanged = false;
    var tmp = value.get_composition_sol8g8_k$();
    var tmp_0 = tmp == null ? null : new TextRange(tmp);
    var tmp_1 = this.mBuffer_1.get_composition_sol8g8_k$();
    var compositionChanged = !equals(tmp_0, tmp_1 == null ? null : new TextRange(tmp_1));
    if (!this.mBufferState_1.get_annotatedString_5pdwrk_k$().equals(value.get_annotatedString_5pdwrk_k$())) {
      this.mBuffer_1 = new EditingBuffer(value.get_annotatedString_5pdwrk_k$(), value.get_selection_d115tn_k$());
      textChanged = true;
    } else if (!equals(this.mBufferState_1.get_selection_d115tn_k$(), value.get_selection_d115tn_k$())) {
      this.mBuffer_1.setSelection_qn2wp2_k$(_TextRange___get_min__impl__uu95c4(value.get_selection_d115tn_k$()), _TextRange___get_max__impl__owm8m(value.get_selection_d115tn_k$()));
      selectionChanged = true;
    }
    var tmp_2 = value.get_composition_sol8g8_k$();
    if ((tmp_2 == null ? null : new TextRange(tmp_2)) == null) {
      this.mBuffer_1.commitComposition_8w4hjx_k$();
    } else {
      if (!_TextRange___get_collapsed__impl__cilesp(value.get_composition_sol8g8_k$())) {
        this.mBuffer_1.setComposition_kdu1ns_k$(_TextRange___get_min__impl__uu95c4(value.get_composition_sol8g8_k$()), _TextRange___get_max__impl__owm8m(value.get_composition_sol8g8_k$()));
      }
    }
    var tmp_3;
    if (textChanged ? true : !selectionChanged ? compositionChanged : false) {
      this.mBuffer_1.commitComposition_8w4hjx_k$();
      tmp_3 = value.copy$default_xf3zur_k$(VOID, VOID, null);
    } else {
      tmp_3 = value;
    }
    var newValue = tmp_3;
    var oldValue = this.mBufferState_1;
    this.mBufferState_1 = newValue;
    if (textInputSession == null)
      null;
    else
      textInputSession.updateState_n7bewf_k$(oldValue, newValue);
  };
  protoOf(EditProcessor).apply_cotx8y_k$ = function (editCommands) {
    var lastCommand = null;
    try {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = editCommands.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = editCommands.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.text.input.EditProcessor.apply.<anonymous>' call
          lastCommand = item;
          item.applyTo_f361h0_k$(this.mBuffer_1);
        }
         while (inductionVariable <= last);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(generateBatchErrorMessage(this, editCommands, lastCommand), e);
      } else {
        throw $p;
      }
    }
    var newState = new TextFieldValue(this.mBuffer_1.toAnnotatedString_yesz4e_k$(), this.mBuffer_1.get_selection_d115tn_k$(), this.mBuffer_1.get_composition_sol8g8_k$());
    this.mBufferState_1 = newState;
    return newState;
  };
  protoOf(EditProcessor).toTextFieldValue_3ykzy7_k$ = function () {
    return this.mBufferState_1;
  };
  function Companion_11() {
    Companion_instance_11 = this;
    this.NOWHERE_1 = -1;
  }
  protoOf(Companion_11).get_NOWHERE_mmp54z_k$ = function () {
    return this.NOWHERE_1;
  };
  var Companion_instance_11;
  function Companion_getInstance_28() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function _get_gapBuffer__3kebmj($this) {
    return $this.gapBuffer_1;
  }
  function _set_selectionStart__65lsx($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionStart>.<anonymous>' call
      var message = 'Cannot set selectionStart to a negative value: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.selectionStart_1 = value;
  }
  function _set_selectionEnd__2o1cag($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionEnd>.<anonymous>' call
      var message = 'Cannot set selectionEnd to a negative value: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.selectionEnd_1 = value;
  }
  function _set_compositionStart__ds49vj($this, _set____db54di) {
    $this.compositionStart_1 = _set____db54di;
  }
  function _set_compositionEnd__mwlz8a($this, _set____db54di) {
    $this.compositionEnd_1 = _set____db54di;
  }
  function EditingBuffer_init_$Init$(text, selection, $this) {
    EditingBuffer.call($this, AnnotatedString_init_$Create$(text), selection);
    return $this;
  }
  function EditingBuffer_init_$Create$(text, selection) {
    return EditingBuffer_init_$Init$(text, selection, objectCreate(protoOf(EditingBuffer)));
  }
  function get_$stableprop_34() {
    return 8;
  }
  function EditingBuffer(text, selection) {
    Companion_getInstance_28();
    this.gapBuffer_1 = new PartialGapBuffer(text.get_text_wouvsm_k$());
    this.selectionStart_1 = _TextRange___get_min__impl__uu95c4(selection);
    this.selectionEnd_1 = _TextRange___get_max__impl__owm8m(selection);
    this.compositionStart_1 = -1;
    this.compositionEnd_1 = -1;
    var start = _TextRange___get_min__impl__uu95c4(selection);
    var end = _TextRange___get_max__impl__owm8m(selection);
    if (start < 0 ? true : start > text.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + text.get_length_g42xv3_k$());
    }
    if (end < 0 ? true : end > text.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + text.get_length_g42xv3_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.$stable_1 = 8;
  }
  protoOf(EditingBuffer).get_selectionStart_1zskht_k$ = function () {
    return this.selectionStart_1;
  };
  protoOf(EditingBuffer).get_selectionEnd_mebxu0_k$ = function () {
    return this.selectionEnd_1;
  };
  protoOf(EditingBuffer).get_compositionStart_3if7fj_k$ = function () {
    return this.compositionStart_1;
  };
  protoOf(EditingBuffer).get_compositionEnd_xx7h0a_k$ = function () {
    return this.compositionEnd_1;
  };
  protoOf(EditingBuffer).hasComposition_fjs7rk_k$ = function () {
    return !(this.compositionStart_1 === -1);
  };
  protoOf(EditingBuffer).get_composition_sol8g8_k$ = function () {
    var tmp;
    if (this.hasComposition_fjs7rk_k$()) {
      tmp = TextRange_0(this.compositionStart_1, this.compositionEnd_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(EditingBuffer).get_selection_d115tn_k$ = function () {
    return TextRange_0(this.selectionStart_1, this.selectionEnd_1);
  };
  protoOf(EditingBuffer).set_cursor_c0ccid_k$ = function (cursor) {
    return this.setSelection_qn2wp2_k$(cursor, cursor);
  };
  protoOf(EditingBuffer).get_cursor_c3jujj_k$ = function () {
    return this.selectionStart_1 === this.selectionEnd_1 ? this.selectionEnd_1 : -1;
  };
  protoOf(EditingBuffer).get_kdzpvg_k$ = function (index) {
    return this.gapBuffer_1.get_kdzpvg_k$(index);
  };
  protoOf(EditingBuffer).get_length_g42xv3_k$ = function () {
    return this.gapBuffer_1.get_length_g42xv3_k$();
  };
  protoOf(EditingBuffer).replace_nuv9id_k$ = function (start, end, text) {
    this.replace_k5sxva_k$(start, end, text.get_text_wouvsm_k$());
  };
  protoOf(EditingBuffer).replace_k5sxva_k$ = function (start, end, text) {
    if (start < 0 ? true : start > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (end < 0 ? true : end > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.gapBuffer_1.replace_k5sxva_k$(start, end, text);
    _set_selectionStart__65lsx(this, start + text.length | 0);
    _set_selectionEnd__2o1cag(this, start + text.length | 0);
    this.compositionStart_1 = -1;
    this.compositionEnd_1 = -1;
  };
  protoOf(EditingBuffer).delete_wbvee3_k$ = function (start, end) {
    var deleteRange = TextRange_0(start, end);
    this.gapBuffer_1.replace_k5sxva_k$(start, end, '');
    var newSelection = updateRangeAfterDelete(TextRange_0(this.selectionStart_1, this.selectionEnd_1), deleteRange);
    _set_selectionStart__65lsx(this, _TextRange___get_min__impl__uu95c4(newSelection));
    _set_selectionEnd__2o1cag(this, _TextRange___get_max__impl__owm8m(newSelection));
    if (this.hasComposition_fjs7rk_k$()) {
      var compositionRange = TextRange_0(this.compositionStart_1, this.compositionEnd_1);
      var newComposition = updateRangeAfterDelete(compositionRange, deleteRange);
      if (_TextRange___get_collapsed__impl__cilesp(newComposition)) {
        this.commitComposition_8w4hjx_k$();
      } else {
        this.compositionStart_1 = _TextRange___get_min__impl__uu95c4(newComposition);
        this.compositionEnd_1 = _TextRange___get_max__impl__owm8m(newComposition);
      }
    }
  };
  protoOf(EditingBuffer).setSelection_qn2wp2_k$ = function (start, end) {
    if (start < 0 ? true : start > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (end < 0 ? true : end > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    _set_selectionStart__65lsx(this, start);
    _set_selectionEnd__2o1cag(this, end);
  };
  protoOf(EditingBuffer).setComposition_kdu1ns_k$ = function (start, end) {
    if (start < 0 ? true : start > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (end < 0 ? true : end > this.gapBuffer_1.get_length_g42xv3_k$()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.gapBuffer_1.get_length_g42xv3_k$());
    }
    if (start >= end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed or empty range: ' + start + ' > ' + end);
    }
    this.compositionStart_1 = start;
    this.compositionEnd_1 = end;
  };
  protoOf(EditingBuffer).cancelComposition_m42fi8_k$ = function () {
    this.replace_k5sxva_k$(this.compositionStart_1, this.compositionEnd_1, '');
    this.compositionStart_1 = -1;
    this.compositionEnd_1 = -1;
  };
  protoOf(EditingBuffer).commitComposition_8w4hjx_k$ = function () {
    this.compositionStart_1 = -1;
    this.compositionEnd_1 = -1;
  };
  protoOf(EditingBuffer).toString = function () {
    return this.gapBuffer_1.toString();
  };
  protoOf(EditingBuffer).toAnnotatedString_yesz4e_k$ = function () {
    return AnnotatedString_init_$Create$(this.toString());
  };
  function updateRangeAfterDelete(target, deleted) {
    var targetMin = _TextRange___get_min__impl__uu95c4(target);
    var targetMax = _TextRange___get_max__impl__owm8m(target);
    if (TextRange__intersects_impl_mhtn49(deleted, target)) {
      if (TextRange__contains_impl_ws45z2(deleted, target)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMin;
      } else if (TextRange__contains_impl_ws45z2(target, deleted)) {
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else if (TextRange__contains_impl_ws45z2_0(deleted, targetMin)) {
        targetMin = _TextRange___get_min__impl__uu95c4(deleted);
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      } else {
        targetMax = _TextRange___get_min__impl__uu95c4(deleted);
      }
    } else {
      if (targetMax > _TextRange___get_min__impl__uu95c4(deleted)) {
        targetMin = targetMin - _TextRange___get_length__impl__7qes3a(deleted) | 0;
        targetMax = targetMax - _TextRange___get_length__impl__7qes3a(deleted) | 0;
      }
    }
    return TextRange_0(targetMin, targetMax);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.BUF_SIZE_1 = 255;
    this.SURROUNDING_SIZE_1 = 64;
    this.NOWHERE_1 = -1;
  }
  protoOf(Companion_12).get_BUF_SIZE_rdxtme_k$ = function () {
    return this.BUF_SIZE_1;
  };
  protoOf(Companion_12).get_SURROUNDING_SIZE_5vdy1n_k$ = function () {
    return this.SURROUNDING_SIZE_1;
  };
  protoOf(Companion_12).get_NOWHERE_mmp54z_k$ = function () {
    return this.NOWHERE_1;
  };
  var Companion_instance_12;
  function Companion_getInstance_29() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_bufStart__tjv11k($this, _set____db54di) {
    $this.bufStart_1 = _set____db54di;
  }
  function _get_bufStart__gqypks($this) {
    return $this.bufStart_1;
  }
  function _set_bufEnd__uy215d($this, _set____db54di) {
    $this.bufEnd_1 = _set____db54di;
  }
  function _get_bufEnd__thbgil($this) {
    return $this.bufEnd_1;
  }
  function get_$stableprop_35() {
    return 8;
  }
  function PartialGapBuffer(text) {
    Companion_getInstance_29();
    this.text_1 = text;
    this.buffer_1 = null;
    this.bufStart_1 = -1;
    this.bufEnd_1 = -1;
    this.$stable_1 = 8;
  }
  protoOf(PartialGapBuffer).set_text_oy06f4_k$ = function (_set____db54di) {
    this.text_1 = _set____db54di;
  };
  protoOf(PartialGapBuffer).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(PartialGapBuffer).get_length_g42xv3_k$ = function () {
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.text_1.length;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    return (this.text_1.length - (this.bufEnd_1 - this.bufStart_1 | 0) | 0) + buffer.length_iap7oa_k$() | 0;
  };
  protoOf(PartialGapBuffer).replace_k5sxva_k$ = function (start, end, text) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start <= end)) {
      // Inline function 'androidx.compose.ui.text.input.PartialGapBuffer.replace.<anonymous>' call
      var message = 'start index must be less than or equal to end index: ' + start + ' > ' + end;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.PartialGapBuffer.replace.<anonymous>' call
      var message_0 = 'start must be non-negative, but was ' + start;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var buffer = this.buffer_1;
    if (buffer == null) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = text.length + 128 | 0;
      var tmp$ret$2 = Math.max(255, b);
      var charArray_0 = charArray(tmp$ret$2);
      // Inline function 'kotlin.comparisons.minOf' call
      var leftCopyCount = Math.min(start, 64);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = this.text_1.length - end | 0;
      var rightCopyCount = Math.min(a, 64);
      toCharArray_0(this.text_1, charArray_0, 0, start - leftCopyCount | 0, start);
      toCharArray_0(this.text_1, charArray_0, charArray_0.length - rightCopyCount | 0, end, end + rightCopyCount | 0);
      toCharArray(text, charArray_0, leftCopyCount);
      this.buffer_1 = new GapBuffer(charArray_0, leftCopyCount + text.length | 0, charArray_0.length - rightCopyCount | 0);
      this.bufStart_1 = start - leftCopyCount | 0;
      this.bufEnd_1 = end + rightCopyCount | 0;
      return Unit_getInstance();
    }
    var bufferStart = start - this.bufStart_1 | 0;
    var bufferEnd = end - this.bufStart_1 | 0;
    if (bufferStart < 0 ? true : bufferEnd > buffer.length_iap7oa_k$()) {
      this.text_1 = this.toString();
      this.buffer_1 = null;
      this.bufStart_1 = -1;
      this.bufEnd_1 = -1;
      return this.replace_k5sxva_k$(start, end, text);
    }
    buffer.replace_k5sxva_k$(bufferStart, bufferEnd, text);
  };
  protoOf(PartialGapBuffer).get_kdzpvg_k$ = function (index) {
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return charSequenceGet(this.text_1, index);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    if (index < this.bufStart_1) {
      return charSequenceGet(this.text_1, index);
    }
    var gapBufLength = buffer.length_iap7oa_k$();
    if (index < (gapBufLength + this.bufStart_1 | 0)) {
      return buffer.get_kdzpvg_k$(index - this.bufStart_1 | 0);
    }
    return charSequenceGet(this.text_1, index - ((gapBufLength - this.bufEnd_1 | 0) + this.bufStart_1 | 0) | 0);
  };
  protoOf(PartialGapBuffer).toString = function () {
    var tmp0_elvis_lhs = this.buffer_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.text_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var b = tmp;
    var sb = StringBuilder_init_$Create$_0();
    sb.append_xdc1zw_k$(this.text_1, 0, this.bufStart_1);
    b.append_rl74gk_k$(sb);
    sb.append_xdc1zw_k$(this.text_1, this.bufEnd_1, this.text_1.length);
    return sb.toString();
  };
  function _set_capacity__2jc21p($this, _set____db54di) {
    $this.capacity_1 = _set____db54di;
  }
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_gapStart__inopwr($this, _set____db54di) {
    $this.gapStart_1 = _set____db54di;
  }
  function _get_gapStart__5usefz($this) {
    return $this.gapStart_1;
  }
  function _set_gapEnd__x4iw0i($this, _set____db54di) {
    $this.gapEnd_1 = _set____db54di;
  }
  function _get_gapEnd__yl9gna($this) {
    return $this.gapEnd_1;
  }
  function gapLength($this) {
    return $this.gapEnd_1 - $this.gapStart_1 | 0;
  }
  function makeSureAvailableSpace($this, requestSize) {
    if (requestSize <= gapLength($this)) {
      return Unit_getInstance();
    }
    var necessarySpace = requestSize - gapLength($this) | 0;
    var newCapacity = imul($this.capacity_1, 2);
    while ((newCapacity - $this.capacity_1 | 0) < necessarySpace) {
      newCapacity = imul(newCapacity, 2);
    }
    var newBuffer = charArray(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.buffer_1;
    var endIndex = $this.gapStart_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newBuffer, 0, 0, endIndex);
    var tailLength = $this.capacity_1 - $this.gapEnd_1 | 0;
    var newEnd = newCapacity - tailLength | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.buffer_1;
    var startIndex = $this.gapEnd_1;
    var endIndex_0 = $this.gapEnd_1 + tailLength | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newBuffer, newEnd, startIndex, endIndex_0);
    $this.buffer_1 = newBuffer;
    $this.capacity_1 = newCapacity;
    $this.gapEnd_1 = newEnd;
  }
  function delete_0($this, start, end) {
    if (start < $this.gapStart_1 ? end <= $this.gapStart_1 : false) {
      var copyLen = $this.gapStart_1 - end | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.buffer_1;
      var destination = $this.buffer_1;
      var destinationOffset = $this.gapEnd_1 - copyLen | 0;
      var endIndex = $this.gapStart_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, destinationOffset, end, endIndex);
      $this.gapStart_1 = start;
      $this.gapEnd_1 = $this.gapEnd_1 - copyLen | 0;
    } else if (start < $this.gapStart_1 ? end >= $this.gapStart_1 : false) {
      $this.gapEnd_1 = end + gapLength($this) | 0;
      $this.gapStart_1 = start;
    } else {
      var startInBuffer = start + gapLength($this) | 0;
      var endInBuffer = end + gapLength($this) | 0;
      var copyLen_0 = startInBuffer - $this.gapEnd_1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.buffer_1;
      var destination_0 = $this.buffer_1;
      var destinationOffset_0 = $this.gapStart_1;
      var startIndex = $this.gapEnd_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination_0, destinationOffset_0, startIndex, startInBuffer);
      $this.gapStart_1 = $this.gapStart_1 + copyLen_0 | 0;
      $this.gapEnd_1 = endInBuffer;
    }
  }
  function GapBuffer(initBuffer, initGapStart, initGapEnd) {
    this.capacity_1 = initBuffer.length;
    this.buffer_1 = initBuffer;
    this.gapStart_1 = initGapStart;
    this.gapEnd_1 = initGapEnd;
  }
  protoOf(GapBuffer).get_kdzpvg_k$ = function (index) {
    if (index < this.gapStart_1) {
      return this.buffer_1[index];
    } else {
      return this.buffer_1[(index - this.gapStart_1 | 0) + this.gapEnd_1 | 0];
    }
  };
  protoOf(GapBuffer).replace_k5sxva_k$ = function (start, end, text) {
    makeSureAvailableSpace(this, text.length - (end - start | 0) | 0);
    delete_0(this, start, end);
    toCharArray(text, this.buffer_1, this.gapStart_1);
    this.gapStart_1 = this.gapStart_1 + text.length | 0;
  };
  protoOf(GapBuffer).append_rl74gk_k$ = function (builder) {
    appendPartOfCharArray(builder, this.buffer_1, 0, this.gapStart_1);
    appendPartOfCharArray(builder, this.buffer_1, this.gapEnd_1, this.capacity_1 - this.gapEnd_1 | 0);
  };
  protoOf(GapBuffer).length_iap7oa_k$ = function () {
    return this.capacity_1 - gapLength(this) | 0;
  };
  protoOf(GapBuffer).toString = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.GapBuffer.toString.<anonymous>' call
    this_0.append_jgojdo_k$(this_0);
    return this_0.toString();
  };
  function toCharArray(_this__u8e3s4, destination, destinationOffset) {
    return toCharArray_0(_this__u8e3s4, destination, destinationOffset, 0, _this__u8e3s4.length);
  }
  function _ImeAction___init__impl__ucgwde(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function ImeAction__toString_impl_r8bdhy($this) {
    return $this === Companion_getInstance_30().None_1 ? 'None' : $this === Companion_getInstance_30().Default_1 ? 'Default' : $this === Companion_getInstance_30().Go_1 ? 'Go' : $this === Companion_getInstance_30().Search_1 ? 'Search' : $this === Companion_getInstance_30().Send_1 ? 'Send' : $this === Companion_getInstance_30().Previous_1 ? 'Previous' : $this === Companion_getInstance_30().Next_1 ? 'Next' : $this === Companion_getInstance_30().Done_1 ? 'Done' : 'Invalid';
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.Default_1 = _ImeAction___init__impl__ucgwde(1);
    this.None_1 = _ImeAction___init__impl__ucgwde(0);
    this.Go_1 = _ImeAction___init__impl__ucgwde(2);
    this.Search_1 = _ImeAction___init__impl__ucgwde(3);
    this.Send_1 = _ImeAction___init__impl__ucgwde(4);
    this.Previous_1 = _ImeAction___init__impl__ucgwde(5);
    this.Next_1 = _ImeAction___init__impl__ucgwde(6);
    this.Done_1 = _ImeAction___init__impl__ucgwde(7);
  }
  protoOf(Companion_13).get_Default_lcd66q_k$ = function () {
    return this.Default_1;
  };
  protoOf(Companion_13).get_None_5pom2x_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_13).get_Go_52bxll_k$ = function () {
    return this.Go_1;
  };
  protoOf(Companion_13).get_Search_bwy63r_k$ = function () {
    return this.Search_1;
  };
  protoOf(Companion_13).get_Send_6cpjsp_k$ = function () {
    return this.Send_1;
  };
  protoOf(Companion_13).get_Previous_enbcba_k$ = function () {
    return this.Previous_1;
  };
  protoOf(Companion_13).get_Next_jtpzvy_k$ = function () {
    return this.Next_1;
  };
  protoOf(Companion_13).get_Done_6zvpof_k$ = function () {
    return this.Done_1;
  };
  var Companion_instance_13;
  function Companion_getInstance_30() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function ImeAction__hashCode_impl_m1mrob($this) {
    return $this;
  }
  function ImeAction__equals_impl_tgas09($this, other) {
    if (!(other instanceof ImeAction))
      return false;
    if (!($this === (other instanceof ImeAction ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImeAction(value) {
    Companion_getInstance_30();
    this.value_1 = value;
  }
  protoOf(ImeAction).toString = function () {
    return ImeAction__toString_impl_r8bdhy(this.value_1);
  };
  protoOf(ImeAction).hashCode = function () {
    return ImeAction__hashCode_impl_m1mrob(this.value_1);
  };
  protoOf(ImeAction).equals = function (other) {
    return ImeAction__equals_impl_tgas09(this.value_1, other);
  };
  function Companion_14() {
    Companion_instance_14 = this;
    this.Default_1 = new ImeOptions();
  }
  protoOf(Companion_14).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_14;
  function Companion_getInstance_31() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function get_$stableprop_36() {
    return 0;
  }
  function ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    Companion_getInstance_31();
    singleLine = singleLine === VOID ? false : singleLine;
    capitalization = capitalization === VOID ? Companion_getInstance_32().get_None_7zn0k1_k$() : capitalization;
    autoCorrect = autoCorrect === VOID ? true : autoCorrect;
    keyboardType = keyboardType === VOID ? Companion_getInstance_33().get_Text_jtxe64_k$() : keyboardType;
    imeAction = imeAction === VOID ? Companion_getInstance_30().get_Default_lcd66q_k$() : imeAction;
    this.singleLine_1 = singleLine;
    this.capitalization_1 = capitalization;
    this.autoCorrect_1 = autoCorrect;
    this.keyboardType_1 = keyboardType;
    this.imeAction_1 = imeAction;
    this.$stable_1 = 0;
  }
  protoOf(ImeOptions).get_singleLine_52fw9n_k$ = function () {
    return this.singleLine_1;
  };
  protoOf(ImeOptions).get_capitalization_dcjeh7_k$ = function () {
    return this.capitalization_1;
  };
  protoOf(ImeOptions).get_autoCorrect_6oo18y_k$ = function () {
    return this.autoCorrect_1;
  };
  protoOf(ImeOptions).get_keyboardType_c7o6fc_k$ = function () {
    return this.keyboardType_1;
  };
  protoOf(ImeOptions).get_imeAction_rjbisc_k$ = function () {
    return this.imeAction_1;
  };
  protoOf(ImeOptions).copy_6g2zqv_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    return new ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction);
  };
  protoOf(ImeOptions).copy$default_oj73e6_k$ = function (singleLine, capitalization, autoCorrect, keyboardType, imeAction, $super) {
    singleLine = singleLine === VOID ? this.singleLine_1 : singleLine;
    capitalization = capitalization === VOID ? this.capitalization_1 : capitalization;
    autoCorrect = autoCorrect === VOID ? this.autoCorrect_1 : autoCorrect;
    keyboardType = keyboardType === VOID ? this.keyboardType_1 : keyboardType;
    imeAction = imeAction === VOID ? this.imeAction_1 : imeAction;
    return $super === VOID ? this.copy_6g2zqv_k$(singleLine, capitalization, autoCorrect, keyboardType, imeAction) : $super.copy_6g2zqv_k$.call(this, singleLine, new KeyboardCapitalization(capitalization), autoCorrect, new KeyboardType(keyboardType), new ImeAction(imeAction));
  };
  protoOf(ImeOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImeOptions))
      return false;
    if (!(this.singleLine_1 === other.singleLine_1))
      return false;
    if (!(this.capitalization_1 === other.capitalization_1))
      return false;
    if (!(this.autoCorrect_1 === other.autoCorrect_1))
      return false;
    if (!(this.keyboardType_1 === other.keyboardType_1))
      return false;
    if (!(this.imeAction_1 === other.imeAction_1))
      return false;
    return true;
  };
  protoOf(ImeOptions).hashCode = function () {
    var result = getBooleanHashCode(this.singleLine_1);
    result = imul(31, result) + KeyboardCapitalization__hashCode_impl_6ibuz5(this.capitalization_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.autoCorrect_1) | 0;
    result = imul(31, result) + KeyboardType__hashCode_impl_mw6m33(this.keyboardType_1) | 0;
    result = imul(31, result) + ImeAction__hashCode_impl_m1mrob(this.imeAction_1) | 0;
    return result;
  };
  protoOf(ImeOptions).toString = function () {
    return 'ImeOptions(singleLine=' + this.singleLine_1 + ', capitalization=' + new KeyboardCapitalization(this.capitalization_1) + ', ' + ('autoCorrect=' + this.autoCorrect_1 + ', keyboardType=' + new KeyboardType(this.keyboardType_1) + ', imeAction=' + new ImeAction(this.imeAction_1) + ')');
  };
  function _KeyboardCapitalization___init__impl__fmdpvi(value) {
    return value;
  }
  function _KeyboardCapitalization___get_value__impl__zfyhn2($this) {
    return $this;
  }
  function KeyboardCapitalization__toString_impl_f8u1tq($this) {
    return $this === Companion_getInstance_32().None_1 ? 'None' : $this === Companion_getInstance_32().Characters_1 ? 'Characters' : $this === Companion_getInstance_32().Words_1 ? 'Words' : $this === Companion_getInstance_32().Sentences_1 ? 'Sentences' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.None_1 = _KeyboardCapitalization___init__impl__fmdpvi(0);
    this.Characters_1 = _KeyboardCapitalization___init__impl__fmdpvi(1);
    this.Words_1 = _KeyboardCapitalization___init__impl__fmdpvi(2);
    this.Sentences_1 = _KeyboardCapitalization___init__impl__fmdpvi(3);
  }
  protoOf(Companion_15).get_None_7zn0k1_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_15).get_Characters_mejxqb_k$ = function () {
    return this.Characters_1;
  };
  protoOf(Companion_15).get_Words_htyj68_k$ = function () {
    return this.Words_1;
  };
  protoOf(Companion_15).get_Sentences_l0uqy1_k$ = function () {
    return this.Sentences_1;
  };
  var Companion_instance_15;
  function Companion_getInstance_32() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function KeyboardCapitalization__hashCode_impl_6ibuz5($this) {
    return $this;
  }
  function KeyboardCapitalization__equals_impl_dba8wb($this, other) {
    if (!(other instanceof KeyboardCapitalization))
      return false;
    if (!($this === (other instanceof KeyboardCapitalization ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardCapitalization(value) {
    Companion_getInstance_32();
    this.value_1 = value;
  }
  protoOf(KeyboardCapitalization).toString = function () {
    return KeyboardCapitalization__toString_impl_f8u1tq(this.value_1);
  };
  protoOf(KeyboardCapitalization).hashCode = function () {
    return KeyboardCapitalization__hashCode_impl_6ibuz5(this.value_1);
  };
  protoOf(KeyboardCapitalization).equals = function (other) {
    return KeyboardCapitalization__equals_impl_dba8wb(this.value_1, other);
  };
  function _KeyboardType___init__impl__csir7k(value) {
    return value;
  }
  function _get_value__a43j40_1($this) {
    return $this;
  }
  function KeyboardType__toString_impl_150pa8($this) {
    return $this === Companion_getInstance_33().Text_1 ? 'Text' : $this === Companion_getInstance_33().Ascii_1 ? 'Ascii' : $this === Companion_getInstance_33().Number_1 ? 'Number' : $this === Companion_getInstance_33().Phone_1 ? 'Phone' : $this === Companion_getInstance_33().Uri_1 ? 'Uri' : $this === Companion_getInstance_33().Email_1 ? 'Email' : $this === Companion_getInstance_33().Password_1 ? 'Password' : $this === Companion_getInstance_33().NumberPassword_1 ? 'NumberPassword' : $this === Companion_getInstance_33().Decimal_1 ? 'Decimal' : 'Invalid';
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.Text_1 = _KeyboardType___init__impl__csir7k(1);
    this.Ascii_1 = _KeyboardType___init__impl__csir7k(2);
    this.Number_1 = _KeyboardType___init__impl__csir7k(3);
    this.Phone_1 = _KeyboardType___init__impl__csir7k(4);
    this.Uri_1 = _KeyboardType___init__impl__csir7k(5);
    this.Email_1 = _KeyboardType___init__impl__csir7k(6);
    this.Password_1 = _KeyboardType___init__impl__csir7k(7);
    this.NumberPassword_1 = _KeyboardType___init__impl__csir7k(8);
    this.Decimal_1 = _KeyboardType___init__impl__csir7k(9);
  }
  protoOf(Companion_16).get_Text_jtxe64_k$ = function () {
    return this.Text_1;
  };
  protoOf(Companion_16).get_Ascii_vkbm9i_k$ = function () {
    return this.Ascii_1;
  };
  protoOf(Companion_16).get_Number_p87pi8_k$ = function () {
    return this.Number_1;
  };
  protoOf(Companion_16).get_Phone_pd75v1_k$ = function () {
    return this.Phone_1;
  };
  protoOf(Companion_16).get_Uri_k6mai7_k$ = function () {
    return this.Uri_1;
  };
  protoOf(Companion_16).get_Email_3353gh_k$ = function () {
    return this.Email_1;
  };
  protoOf(Companion_16).get_Password_14zh8u_k$ = function () {
    return this.Password_1;
  };
  protoOf(Companion_16).get_NumberPassword_7ljaed_k$ = function () {
    return this.NumberPassword_1;
  };
  protoOf(Companion_16).get_Decimal_vgpcne_k$ = function () {
    return this.Decimal_1;
  };
  var Companion_instance_16;
  function Companion_getInstance_33() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function KeyboardType__hashCode_impl_mw6m33($this) {
    return $this;
  }
  function KeyboardType__equals_impl_1eug1f($this, other) {
    if (!(other instanceof KeyboardType))
      return false;
    if (!($this === (other instanceof KeyboardType ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardType(value) {
    Companion_getInstance_33();
    this.value_1 = value;
  }
  protoOf(KeyboardType).toString = function () {
    return KeyboardType__toString_impl_150pa8(this.value_1);
  };
  protoOf(KeyboardType).hashCode = function () {
    return KeyboardType__hashCode_impl_mw6m33(this.value_1);
  };
  protoOf(KeyboardType).equals = function (other) {
    return KeyboardType__equals_impl_1eug1f(this.value_1, other);
  };
  function addExactOrElse(_this__u8e3s4, right, defaultValue) {
    var result = _this__u8e3s4 + right | 0;
    return ((_this__u8e3s4 ^ result) & (right ^ result)) < 0 ? defaultValue() : result;
  }
  function subtractExactOrElse(_this__u8e3s4, right, defaultValue) {
    var result = _this__u8e3s4 - right | 0;
    return ((_this__u8e3s4 ^ right) & (_this__u8e3s4 ^ result)) < 0 ? defaultValue() : result;
  }
  function OffsetMapping$Companion$Identity$1() {
  }
  protoOf(OffsetMapping$Companion$Identity$1).originalToTransformed_qvujev_k$ = function (offset) {
    return offset;
  };
  protoOf(OffsetMapping$Companion$Identity$1).transformedToOriginal_hkmhr3_k$ = function (offset) {
    return offset;
  };
  function Companion_17() {
    Companion_instance_17 = this;
    var tmp = this;
    tmp.Identity_1 = new OffsetMapping$Companion$Identity$1();
  }
  protoOf(Companion_17).get_Identity_wza1cp_k$ = function () {
    return this.Identity_1;
  };
  var Companion_instance_17;
  function Companion_getInstance_34() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function OffsetMapping() {
  }
  function PlatformTextInputPluginRegistry() {
  }
  function _get_onDispose__swc4r5($this) {
    return $this.onDispose_1;
  }
  function _set_disposed__tklm7i($this, _set____db54di) {
    $this.disposed_1 = _set____db54di;
  }
  function _get_disposed__snm4au($this) {
    return $this.disposed_1;
  }
  function get_$stableprop_37() {
    return 8;
  }
  function _set_refCount__5vfkm3($this, _set____db54di) {
    var this_0 = $this.refCount$delegate_1;
    refCount$factory();
    this_0.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_refCount__6xgqup($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.refCount$delegate_1;
    refCount$factory_0();
    return this_0.get_intValue_mlvnn9_k$();
  }
  function _get_plugin__txgc3c($this) {
    return $this.plugin_1;
  }
  function PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          disposeTombstonedAdapters(this.this$0__1);
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
  protoOf(PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda_0(this$0, resultContinuation) {
    var i = new PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_factory__revr21($this) {
    return $this.factory_1;
  }
  function _get_adaptersByPlugin__1r8su5($this) {
    return $this.adaptersByPlugin_1;
  }
  function _set_adaptersMayNeedDisposal__tzyta5($this, _set____db54di) {
    $this.adaptersMayNeedDisposal_1 = _set____db54di;
  }
  function _get_adaptersMayNeedDisposal__9itf0p($this) {
    return $this.adaptersMayNeedDisposal_1;
  }
  function _set_focusedPlugin__9vvj7p($this, _set____db54di) {
    $this.focusedPlugin_1 = _set____db54di;
  }
  function _get_focusedPlugin__p3n1q1($this) {
    return $this.focusedPlugin_1;
  }
  function disposeTombstonedAdapters($this) {
    if (false) {
      println('Composition applied, checking for tombstoned PlatformTextInputAdapters\u2026');
    }
    if ($this.adaptersMayNeedDisposal_1) {
      $this.adaptersMayNeedDisposal_1 = false;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = $this.adaptersByPlugin_1.get_entries_p20ztl_k$();
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.compose.ui.text.input.PlatformTextInputPluginRegistryImpl.disposeTombstonedAdapters.<anonymous>' call
        if (element.get_value_j01efc_k$().get_isRefCountZero_u3zp2h_k$()) {
          destination.add_utx5q5_k$(element);
        }
      }
      var toDispose = destination;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = toDispose.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = toDispose.get_c1px32_k$(index);
          // Inline function 'androidx.compose.ui.text.input.PlatformTextInputPluginRegistryImpl.disposeTombstonedAdapters.<anonymous>' call
          // Inline function 'kotlin.collections.component1' call
          var plugin = item.get_key_18j28a_k$();
          // Inline function 'kotlin.collections.component2' call
          var adapter = item.get_value_j01efc_k$();
          if (false) {
            println('Disposing PlatformTextInputAdapter. ' + ('plugin=' + plugin + ', adapter=' + adapter));
          }
          if (equals($this.focusedPlugin_1, plugin)) {
            $this.focusedPlugin_1 = null;
          }
          // Inline function 'kotlin.collections.minusAssign' call
          $this.adaptersByPlugin_1.remove_gppy8k_k$(plugin);
          dispose(adapter.adapter_1);
        }
         while (inductionVariable <= last);
    }
  }
  function instantiateAdapter($this, plugin) {
    var input = new AdapterInput($this, plugin);
    var tmp = $this.factory_1(plugin, input);
    var newAdapter = isInterface(tmp, PlatformTextInputAdapter) ? tmp : THROW_CCE();
    var withRefCount = new AdapterWithRefCount($this, newAdapter);
    // Inline function 'kotlin.collections.set' call
    $this.adaptersByPlugin_1.put_4fpzoq_k$(plugin, withRefCount);
    if (false) {
      println('Instantiated new PlatformTextInputAdapter. ' + ('plugin=' + plugin + ', adapter=' + newAdapter));
    }
    return withRefCount;
  }
  function AdapterHandle(adapter, onDispose) {
    this.adapter_1 = adapter;
    this.onDispose_1 = onDispose;
    this.disposed_1 = false;
    this.$stable_1 = 8;
  }
  protoOf(AdapterHandle).get_adapter_hrffru_k$ = function () {
    return this.adapter_1;
  };
  protoOf(AdapterHandle).dispose_rnbs4f_k$ = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.disposed_1) {
      // Inline function 'androidx.compose.ui.text.input.AdapterHandle.dispose.<anonymous>' call
      var message = 'AdapterHandle already disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.disposed_1 = true;
    return this.onDispose_1();
  };
  function AdapterWithRefCount($outer, adapter) {
    this.$this_1 = $outer;
    this.adapter_1 = adapter;
    this.refCount$delegate_1 = mutableIntStateOf(0);
  }
  protoOf(AdapterWithRefCount).get_adapter_hrffru_k$ = function () {
    return this.adapter_1;
  };
  protoOf(AdapterWithRefCount).get_isRefCountZero_u3zp2h_k$ = function () {
    return _get_refCount__6xgqup(this) === 0;
  };
  protoOf(AdapterWithRefCount).incrementRefCount_tev091_k$ = function () {
    var tmp1 = _get_refCount__6xgqup(this);
    _set_refCount__5vfkm3(this, tmp1 + 1 | 0);
    if (false) {
      println('Incremented PlatformTextInputAdapter refcount: ' + _get_refCount__6xgqup(this) + ' (adapter=' + this.adapter_1 + ')');
    }
  };
  protoOf(AdapterWithRefCount).decrementRefCount_40ahap_k$ = function () {
    var tmp1 = _get_refCount__6xgqup(this);
    _set_refCount__5vfkm3(this, tmp1 - 1 | 0);
    if (false) {
      println('Decremented PlatformTextInputAdapter refcount: ' + _get_refCount__6xgqup(this) + ' (adapter=' + this.adapter_1 + ')');
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_get_refCount__6xgqup(this) >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.AdapterWithRefCount.decrementRefCount.<anonymous>' call
      var message = 'AdapterWithRefCount.decrementRefCount called too many times (refCount=' + _get_refCount__6xgqup(this) + ')';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (_get_refCount__6xgqup(this) === 0) {
      this.$this_1.adaptersMayNeedDisposal_1 = true;
      return true;
    }
    return false;
  };
  function AdapterInput($outer, plugin) {
    this.$this_1 = $outer;
    this.plugin_1 = plugin;
  }
  protoOf(AdapterInput).requestInputFocus_k3y7gt_k$ = function () {
    if (false) {
      println('PlatformTextInputAdapter requested input focus. plugin=' + this.plugin_1);
    }
    this.$this_1.focusedPlugin_1 = this.plugin_1;
  };
  protoOf(AdapterInput).releaseInputFocus_c63rcr_k$ = function () {
    if (false) {
      println('PlatformTextInputAdapter released input focus. plugin=' + this.plugin_1);
    }
    if (equals(this.$this_1.focusedPlugin_1, this.plugin_1)) {
      this.$this_1.focusedPlugin_1 = null;
    }
  };
  function get_$stableprop_38() {
    return 0;
  }
  function PlatformTextInputPluginRegistryImpl$getOrCreateAdapter$lambda($adapterWithRefCount) {
    return function () {
      return $adapterWithRefCount.decrementRefCount_40ahap_k$();
    };
  }
  function PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function _no_name_provided__qut3iv_0($adapterHandle, $scope, this$0) {
    this.$adapterHandle_1 = $adapterHandle;
    this.$scope_1 = $scope;
    this.this$0__1 = this$0;
  }
  protoOf(_no_name_provided__qut3iv_0).dispose_3nnxhr_k$ = function () {
    // Inline function 'androidx.compose.ui.text.input.PlatformTextInputPluginRegistryImpl.rememberAdapter$composable.<anonymous>.<anonymous>' call
    if (false) {
      println('Disposing PlatformTextInputAdapter handle');
    }
    if (this.$adapterHandle_1.dispose_rnbs4f_k$()) {
      var tmp = NonCancellable_getInstance();
      launch(this.$scope_1, tmp, VOID, PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda$o$dispose$slambda_0(this.this$0__1, null));
    }
  };
  function PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda_0($adapterHandle, $scope, this$0) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0($adapterHandle, $scope, this$0);
    };
  }
  function PlatformTextInputPluginRegistryImpl(factory) {
    this.factory_1 = factory;
    this.adaptersByPlugin_1 = mutableStateMapOf();
    this.adaptersMayNeedDisposal_1 = false;
    this.focusedPlugin_1 = null;
    this.$stable_1 = 0;
  }
  protoOf(PlatformTextInputPluginRegistryImpl).get_focusedAdapter_bl8hlr_k$ = function () {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.adaptersByPlugin_1;
    var key = this.focusedPlugin_1;
    var tmp0_safe_receiver = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key);
    var this_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.adapter_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.PlatformTextInputPluginRegistryImpl.<get-focusedAdapter>.<anonymous>' call
    if (false) {
      println('Found focused PlatformTextInputAdapter: ' + this_1);
    }
    return this_1;
  };
  protoOf(PlatformTextInputPluginRegistryImpl).rememberAdapter_z0wi94_k$ = function (plugin) {
    illegalDecoyCallException('rememberAdapter');
  };
  protoOf(PlatformTextInputPluginRegistryImpl).getOrCreateAdapter_h67r4g_k$ = function (plugin) {
    if (false) {
      println('Getting PlatformTextInputAdapter for plugin ' + plugin);
    }
    var tmp = this.adaptersByPlugin_1.get_wei43m_k$(plugin);
    var tmp0_elvis_lhs = (tmp == null ? true : tmp instanceof AdapterWithRefCount) ? tmp : THROW_CCE();
    var adapterWithRefCount = tmp0_elvis_lhs == null ? instantiateAdapter(this, plugin) : tmp0_elvis_lhs;
    adapterWithRefCount.incrementRefCount_tev091_k$();
    return new AdapterHandle(adapterWithRefCount.adapter_1, PlatformTextInputPluginRegistryImpl$getOrCreateAdapter$lambda(adapterWithRefCount));
  };
  protoOf(PlatformTextInputPluginRegistryImpl).rememberAdapter$composable_tede98_k$ = function (plugin, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1706325120);
    sourceInformation($composer_0, 'C(rememberAdapter$composable)172@6998L47,177@7280L24,178@7313L1452:PlatformTextInputAdapter.kt#n30j42');
    if (isTraceInProgress()) {
      traceEventStart(-1706325120, $changed, -1, 'androidx.compose.ui.text.input.PlatformTextInputPluginRegistryImpl.rememberAdapter$composable (PlatformTextInputAdapter.kt:167)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(plugin);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.ui.text.input.PlatformTextInputPluginRegistryImpl.rememberAdapter$composable.<anonymous>' call
      var value = this.getOrCreateAdapter_h67r4g_k$(plugin);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    var adapterHandle = tmp0;
    // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
    var getContext = {_v: null};
    var $composer_2 = $composer_0;
    $composer_2.startReplaceableGroup_ip860b_k$(102870005);
    sourceInformation($composer_2, 'CC(rememberCoroutineScope$composable)481@20228L144:Effects.kt#9igjgp');
    if (!((1 & 1) === 0)) {
      getContext._v = PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda;
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
    var it_0 = $composer_3.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_5().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
      var value_0 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
      $composer_3.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_3.endReplaceableGroup_ern0ak_k$();
    var wrapper = tmp0_0;
    var tmp0_1 = wrapper.get_coroutineScope_5k7h45_k$();
    $composer_2.endReplaceableGroup_ern0ak_k$();
    var scope = tmp0_1;
    DisposableEffect$composable(adapterHandle, PlatformTextInputPluginRegistryImpl$rememberAdapter$composable$lambda_0(adapterHandle, scope, this), $composer_0, 8);
    var tmp0_2 = adapterHandle.adapter_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_2;
  };
  function PlatformTextInput() {
  }
  function get_DEBUG_0() {
    return DEBUG_0;
  }
  var DEBUG_0;
  function refCount$factory() {
    return getPropertyCallableRef('refCount', 1, KMutableProperty1, function (receiver) {
      return _get_refCount__6xgqup(receiver);
    }, function (receiver, value) {
      return _set_refCount__5vfkm3(receiver, value);
    });
  }
  function refCount$factory_0() {
    return getPropertyCallableRef('refCount', 1, KMutableProperty1, function (receiver) {
      return _get_refCount__6xgqup(receiver);
    }, function (receiver, value) {
      return _set_refCount__5vfkm3(receiver, value);
    });
  }
  function TextFieldValue$Companion$Saver$lambda($this$Saver, it) {
    return arrayListOf([save_0(it.annotatedString_1, get_AnnotatedStringSaver(), $this$Saver), save_0(new TextRange(it.selection_1), get_Saver_10(Companion_getInstance_18()), $this$Saver)]);
  }
  function TextFieldValue$Companion$Saver$lambda_0(it) {
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.get_c1px32_k$(0);
      var saver = get_AnnotatedStringSaver();
      if (equals(value, false)) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp;
      if (value == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_0 = saver.restore_fyjq85_k$(value);
        tmp = (tmp_0 == null ? true : tmp_0 instanceof AnnotatedString) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
    }
    var tmp_1 = ensureNotNull(tmp$ret$0);
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.get_c1px32_k$(1);
      var saver_0 = get_Saver_10(Companion_getInstance_18());
      if (equals(value_0, false)) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_2;
      if (value_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_3 = saver_0.restore_fyjq85_k$(value_0);
        var tmp_4 = tmp_3 == null ? null : tmp_3.packedValue_1;
        var tmp_5;
        var tmp_6;
        var tmp_7 = tmp_4;
        if ((tmp_7 == null ? null : new TextRange(tmp_7)) == null) {
          tmp_6 = true;
        } else {
          var tmp_8 = tmp_4;
          tmp_6 = (tmp_8 == null ? null : new TextRange(tmp_8))instanceof TextRange;
        }
        if (tmp_6) {
          tmp_5 = tmp_4;
        } else {
          tmp_5 = THROW_CCE();
        }
        tmp_2 = tmp_5;
      }
      tmp$ret$5 = tmp_2;
    }
    var tmp_9 = tmp$ret$5;
    return new TextFieldValue(tmp_1, ensureNotNull(tmp_9 == null ? null : new TextRange(tmp_9)).packedValue_1);
  }
  function TextFieldValue_init_$Init$(text, selection, composition, $this) {
    text = text === VOID ? '' : text;
    selection = selection === VOID ? Companion_getInstance_18().get_Zero_8je9ih_k$() : selection;
    composition = composition === VOID ? null : composition;
    TextFieldValue.call($this, AnnotatedString_init_$Create$(text), selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$(text, selection, composition) {
    return TextFieldValue_init_$Init$(text, selection, composition, objectCreate(protoOf(TextFieldValue)));
  }
  function Companion_18() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = TextFieldValue$Companion$Saver$lambda;
    tmp.Saver_1 = Saver(tmp_0, TextFieldValue$Companion$Saver$lambda_0);
  }
  protoOf(Companion_18).get_Saver_igssp8_k$ = function () {
    return this.Saver_1;
  };
  var Companion_instance_18;
  function Companion_getInstance_35() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function get_$stableprop_39() {
    return 0;
  }
  function TextFieldValue(annotatedString, selection, composition) {
    Companion_getInstance_35();
    selection = selection === VOID ? Companion_getInstance_18().get_Zero_8je9ih_k$() : selection;
    composition = composition === VOID ? null : composition;
    this.annotatedString_1 = annotatedString;
    this.selection_1 = coerceIn_1(selection, 0, this.get_text_wouvsm_k$().length);
    var tmp = this;
    var tmp_0;
    var tmp_1 = composition;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = coerceIn_1(composition, 0, this.get_text_wouvsm_k$().length);
    }
    tmp.composition_1 = tmp_0;
    this.$stable_1 = 0;
  }
  protoOf(TextFieldValue).get_annotatedString_5pdwrk_k$ = function () {
    return this.annotatedString_1;
  };
  protoOf(TextFieldValue).get_text_wouvsm_k$ = function () {
    return this.annotatedString_1.get_text_wouvsm_k$();
  };
  protoOf(TextFieldValue).get_selection_d115tn_k$ = function () {
    return this.selection_1;
  };
  protoOf(TextFieldValue).get_composition_sol8g8_k$ = function () {
    return this.composition_1;
  };
  protoOf(TextFieldValue).copy_hntddt_k$ = function (annotatedString, selection, composition) {
    return new TextFieldValue(annotatedString, selection, composition);
  };
  protoOf(TextFieldValue).copy$default_xf3zur_k$ = function (annotatedString, selection, composition, $super) {
    annotatedString = annotatedString === VOID ? this.annotatedString_1 : annotatedString;
    selection = selection === VOID ? this.selection_1 : selection;
    composition = composition === VOID ? this.composition_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_hntddt_k$(annotatedString, selection, composition);
    } else {
      var tmp_0 = $super.copy_hntddt_k$;
      var tmp_1 = composition;
      tmp = tmp_0.call(this, annotatedString, new TextRange(selection), tmp_1 == null ? null : new TextRange(tmp_1));
    }
    return tmp;
  };
  protoOf(TextFieldValue).copy_7dcmyi_k$ = function (text, selection, composition) {
    return new TextFieldValue(AnnotatedString_init_$Create$(text), selection, composition);
  };
  protoOf(TextFieldValue).copy$default_2whmnb_k$ = function (text, selection, composition, $super) {
    selection = selection === VOID ? this.selection_1 : selection;
    composition = composition === VOID ? this.composition_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_7dcmyi_k$(text, selection, composition);
    } else {
      var tmp_0 = $super.copy_7dcmyi_k$;
      var tmp_1 = composition;
      tmp = tmp_0.call(this, text, new TextRange(selection), tmp_1 == null ? null : new TextRange(tmp_1));
    }
    return tmp;
  };
  protoOf(TextFieldValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextFieldValue))
      return false;
    var tmp;
    var tmp_0;
    if (equals(this.selection_1, other.selection_1)) {
      var tmp_1 = this.composition_1;
      var tmp_2 = tmp_1 == null ? null : new TextRange(tmp_1);
      var tmp_3 = other.composition_1;
      tmp_0 = equals(tmp_2, tmp_3 == null ? null : new TextRange(tmp_3));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.annotatedString_1.equals(other.annotatedString_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TextFieldValue).hashCode = function () {
    var result = this.annotatedString_1.hashCode();
    result = imul(31, result) + TextRange__hashCode_impl_3zpp6q(this.selection_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.composition_1;
    var tmp_0;
    var tmp_1 = tmp0_safe_receiver;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = TextRange__hashCode_impl_3zpp6q(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextFieldValue).toString = function () {
    var tmp = 'TextFieldValue(' + ("text='" + this.annotatedString_1 + "', ") + ('selection=' + new TextRange(this.selection_1) + ', ');
    var tmp_0 = this.composition_1;
    return tmp + ('composition=' + (tmp_0 == null ? null : new TextRange(tmp_0)) + ')');
  };
  function getSelectedText(_this__u8e3s4) {
    return _this__u8e3s4.annotatedString_1.subSequence_lx5l5t_k$(_this__u8e3s4.selection_1);
  }
  function getTextAfterSelection(_this__u8e3s4, maxChars) {
    var tmp = _TextRange___get_max__impl__owm8m(_this__u8e3s4.selection_1);
    // Inline function 'kotlin.math.min' call
    var a = _TextRange___get_max__impl__owm8m(_this__u8e3s4.selection_1) + maxChars | 0;
    var b = _this__u8e3s4.get_text_wouvsm_k$().length;
    var tmp$ret$0 = Math.min(a, b);
    return _this__u8e3s4.annotatedString_1.subSequence_hm5hnj_k$(tmp, tmp$ret$0);
  }
  function getTextBeforeSelection(_this__u8e3s4, maxChars) {
    // Inline function 'kotlin.math.max' call
    var b = _TextRange___get_min__impl__uu95c4(_this__u8e3s4.selection_1) - maxChars | 0;
    var tmp$ret$0 = Math.max(0, b);
    return _this__u8e3s4.annotatedString_1.subSequence_hm5hnj_k$(tmp$ret$0, _TextRange___get_min__impl__uu95c4(_this__u8e3s4.selection_1));
  }
  function _get_platformTextInputService__t1msw0($this) {
    return $this.platformTextInputService_1;
  }
  function _get__currentInputSession__sue20r($this) {
    return $this._currentInputSession_1;
  }
  function get_$stableprop_40() {
    return 8;
  }
  function TextInputService(platformTextInputService) {
    this.platformTextInputService_1 = platformTextInputService;
    this._currentInputSession_1 = new AtomicReference(null);
    this.$stable_1 = 8;
  }
  protoOf(TextInputService).get_currentInputSession_pf4yjo_k$ = function () {
    return this._currentInputSession_1.get_26vq_k$();
  };
  protoOf(TextInputService).startInput_axnrsd_k$ = function (value, imeOptions, onEditCommand, onImeActionPerformed) {
    this.platformTextInputService_1.startInput_5tdfa5_k$(value, imeOptions, onEditCommand, onImeActionPerformed);
    var nextSession = new TextInputSession(this, this.platformTextInputService_1);
    this._currentInputSession_1.set_inogor_k$(nextSession);
    return nextSession;
  };
  protoOf(TextInputService).stopInput_noba9q_k$ = function (session) {
    if (this._currentInputSession_1.compareAndSet_10iwom_k$(session, null)) {
      this.platformTextInputService_1.stopInput_mtcoa0_k$();
    }
  };
  protoOf(TextInputService).showSoftwareKeyboard_p5hgcb_k$ = function () {
    if (!(this._currentInputSession_1.get_26vq_k$() == null)) {
      this.platformTextInputService_1.showSoftwareKeyboard_p5hgcb_k$();
    }
  };
  protoOf(TextInputService).hideSoftwareKeyboard_kbn874_k$ = function () {
    return this.platformTextInputService_1.hideSoftwareKeyboard_kbn874_k$();
  };
  function PlatformTextInputService() {
  }
  function _get_textInputService__q1au7n($this) {
    return $this.textInputService_1;
  }
  function _get_platformTextInputService__t1msw0_0($this) {
    return $this.platformTextInputService_1;
  }
  function ensureOpenSession($this, block) {
    // Inline function 'kotlin.also' call
    var this_0 = $this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      block();
    }
    return this_0;
  }
  function get_$stableprop_41() {
    return 0;
  }
  function TextInputSession(textInputService, platformTextInputService) {
    this.textInputService_1 = textInputService;
    this.platformTextInputService_1 = platformTextInputService;
    this.$stable_1 = 0;
  }
  protoOf(TextInputSession).get_isOpen_ew3kpp_k$ = function () {
    return equals(this.textInputService_1.get_currentInputSession_pf4yjo_k$(), this);
  };
  protoOf(TextInputSession).dispose_3nnxhr_k$ = function () {
    this.textInputService_1.stopInput_noba9q_k$(this);
  };
  protoOf(TextInputSession).notifyFocusedRect_p729hj_k$ = function (rect) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.notifyFocusedRect.<anonymous>' call
      this.platformTextInputService_1.notifyFocusedRect_po8zm1_k$(rect);
    }
    return this_0;
  };
  protoOf(TextInputSession).updateState_n7bewf_k$ = function (oldValue, newValue) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.updateState.<anonymous>' call
      this.platformTextInputService_1.updateState_4gjm3l_k$(oldValue, newValue);
    }
    return this_0;
  };
  protoOf(TextInputSession).showSoftwareKeyboard_6wjho5_k$ = function () {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.showSoftwareKeyboard.<anonymous>' call
      this.platformTextInputService_1.showSoftwareKeyboard_p5hgcb_k$();
    }
    return this_0;
  };
  protoOf(TextInputSession).hideSoftwareKeyboard_pwrw8g_k$ = function () {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.get_isOpen_ew3kpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.hideSoftwareKeyboard.<anonymous>' call
      this.platformTextInputService_1.hideSoftwareKeyboard_kbn874_k$();
    }
    return this_0;
  };
  function sam$androidx_compose_ui_text_input_VisualTransformation$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).filter_ki86nb_k$ = function (text) {
    return this.function_1(text);
  };
  function VisualTransformation$Companion$None$lambda(text) {
    return new TransformedText(text, Companion_getInstance_34().get_Identity_wza1cp_k$());
  }
  function Companion_19() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = VisualTransformation$Companion$None$lambda;
    tmp.None_1 = new sam$androidx_compose_ui_text_input_VisualTransformation$0(tmp_0);
  }
  protoOf(Companion_19).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_19;
  function Companion_getInstance_36() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function VisualTransformation() {
  }
  function get_$stableprop_42() {
    return 8;
  }
  function TransformedText(text, offsetMapping) {
    this.text_1 = text;
    this.offsetMapping_1 = offsetMapping;
    this.$stable_1 = 8;
  }
  protoOf(TransformedText).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(TransformedText).get_offsetMapping_mw1yem_k$ = function () {
    return this.offsetMapping_1;
  };
  protoOf(TransformedText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransformedText))
      return false;
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!equals(this.offsetMapping_1, other.offsetMapping_1))
      return false;
    return true;
  };
  protoOf(TransformedText).hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + hashCode(this.offsetMapping_1) | 0;
    return result;
  };
  protoOf(TransformedText).toString = function () {
    return 'TransformedText(text=' + this.text_1 + ', offsetMapping=' + this.offsetMapping_1 + ')';
  };
  function get_$stableprop_43() {
    return 0;
  }
  function PasswordVisualTransformation(mask) {
    mask = mask === VOID ? _Char___init__impl__6a9atx(8226) : mask;
    this.mask_1 = mask;
    this.$stable_1 = 0;
  }
  protoOf(PasswordVisualTransformation).get_mask_wm03zr_k$ = function () {
    return this.mask_1;
  };
  protoOf(PasswordVisualTransformation).filter_ki86nb_k$ = function (text) {
    return new TransformedText(AnnotatedString_init_$Create$(repeat(toString_1(this.mask_1), text.get_text_wouvsm_k$().length)), Companion_getInstance_34().get_Identity_wza1cp_k$());
  };
  protoOf(PasswordVisualTransformation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PasswordVisualTransformation))
      return false;
    if (!(this.mask_1 === other.mask_1))
      return false;
    return true;
  };
  protoOf(PasswordVisualTransformation).hashCode = function () {
    return Char__hashCode_impl_otmys(this.mask_1);
  };
  function Companion_20() {
    Companion_instance_20 = this;
  }
  protoOf(Companion_20).get_current_jwi6j4_k$ = function () {
    return get_platformLocaleDelegate().get_current_jwi6j4_k$().get_c1px32_k$(0);
  };
  var Companion_instance_20;
  function Companion_getInstance_37() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().parseLanguageTag_5wql63_k$(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function get_$stableprop_44() {
    return 0;
  }
  function Locale(platformLocale) {
    Companion_getInstance_37();
    this.platformLocale_1 = platformLocale;
    this.$stable_1 = 0;
  }
  protoOf(Locale).get_platformLocale_g0bmwm_k$ = function () {
    return this.platformLocale_1;
  };
  protoOf(Locale).get_language_cjhhk1_k$ = function () {
    return this.platformLocale_1.get_language_cjhhk1_k$();
  };
  protoOf(Locale).get_script_jedas4_k$ = function () {
    return this.platformLocale_1.get_script_jedas4_k$();
  };
  protoOf(Locale).get_region_iy88ot_k$ = function () {
    return this.platformLocale_1.get_region_iy88ot_k$();
  };
  protoOf(Locale).toLanguageTag_xneel5_k$ = function () {
    return this.platformLocale_1.toLanguageTag_xneel5_k$();
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.toLanguageTag_xneel5_k$() === other.toLanguageTag_xneel5_k$();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.toLanguageTag_xneel5_k$());
  };
  protoOf(Locale).toString = function () {
    return this.toLanguageTag_xneel5_k$();
  };
  function Companion_21() {
    Companion_instance_21 = this;
  }
  protoOf(Companion_21).get_current_jwi6j4_k$ = function () {
    return get_platformLocaleDelegate().get_current_jwi6j4_k$();
  };
  var Companion_instance_21;
  function Companion_getInstance_38() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function LocaleList_init_$Init$(languageTags, $this) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = split(languageTags, [',']);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_0.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.intl.LocaleList.<init>.<anonymous>' call
        // Inline function 'kotlin.text.trim' call
        var element = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
        target.add_utx5q5_k$(element);
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.get_c1px32_k$(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.intl.LocaleList.<init>.<anonymous>' call
        var element_0 = Locale_init_$Create$(item_0);
        target_0.add_utx5q5_k$(element_0);
      }
       while (inductionVariable_0 <= last_0);
    LocaleList.call($this, target_0);
    return $this;
  }
  function LocaleList_init_$Create$(languageTags) {
    return LocaleList_init_$Init$(languageTags, objectCreate(protoOf(LocaleList)));
  }
  function LocaleList_init_$Init$_0(locales, $this) {
    LocaleList.call($this, toList(locales));
    return $this;
  }
  function LocaleList_init_$Create$_0(locales) {
    return LocaleList_init_$Init$_0(locales, objectCreate(protoOf(LocaleList)));
  }
  function get_$stableprop_45() {
    return 0;
  }
  function LocaleList(localeList) {
    Companion_getInstance_38();
    this.localeList_1 = localeList;
    this.size_1 = this.localeList_1.get_size_woubt6_k$();
    this.$stable_1 = 0;
  }
  protoOf(LocaleList).get_localeList_1gj9gh_k$ = function () {
    return this.localeList_1;
  };
  protoOf(LocaleList).get_c1px32_k$ = function (i) {
    return this.localeList_1.get_c1px32_k$(i);
  };
  protoOf(LocaleList).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(LocaleList).contains_3k284h_k$ = function (element) {
    return this.localeList_1.contains_aljjnj_k$(element);
  };
  protoOf(LocaleList).contains_aljjnj_k$ = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.contains_3k284h_k$(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).containsAll_vbf1sa_k$ = function (elements) {
    return this.localeList_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(LocaleList).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_vbf1sa_k$(elements);
  };
  protoOf(LocaleList).isEmpty_y1axqb_k$ = function () {
    return this.localeList_1.isEmpty_y1axqb_k$();
  };
  protoOf(LocaleList).iterator_jk1svi_k$ = function () {
    return this.localeList_1.iterator_jk1svi_k$();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.localeList_1, other.localeList_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.localeList_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + this.localeList_1 + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  function PlatformLocale() {
  }
  function PlatformLocaleDelegate() {
  }
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (!properties_initialized_PlatformLocale_kt_ya8ii9) {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    this.Superscript_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.Subscript_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.None_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  protoOf(Companion_22).get_Superscript_6xh4p2_k$ = function () {
    return this.Superscript_1;
  };
  protoOf(Companion_22).get_Subscript_w4w7o5_k$ = function () {
    return this.Subscript_1;
  };
  protoOf(Companion_22).get_None_9kuyzu_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_22;
  function Companion_getInstance_39() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.multiplier_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_39();
    this.multiplier_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.multiplier_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.multiplier_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.multiplier_1, other);
  };
  function lerp_8(start, stop, fraction) {
    return _BaselineShift___init__impl__scj05g(lerp_3(_BaselineShift___get_multiplier__impl__qhmjek(start), _BaselineShift___get_multiplier__impl__qhmjek(stop), fraction));
  }
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function _Hyphens___get_value__impl__5itus4($this) {
    return $this;
  }
  function Companion_23() {
    Companion_instance_23 = this;
    this.None_1 = _Hyphens___init__impl__m2cvg8(1);
    this.Auto_1 = _Hyphens___init__impl__m2cvg8(2);
  }
  protoOf(Companion_23).get_None_vxrj2y_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_23).get_Auto_4wvpmr_k$ = function () {
    return this.Auto_1;
  };
  var Companion_instance_23;
  function Companion_getInstance_40() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_40().None_1 ? 'Hyphens.None' : $this === Companion_getInstance_40().Auto_1 ? 'Hyphens.Auto' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_40();
    this.value_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.value_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.value_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.value_1, other);
  };
  function _get_FlagTrimTop__843pyu($this) {
    return $this.FlagTrimTop_1;
  }
  function _get_FlagTrimBottom__ejbxxu($this) {
    return $this.FlagTrimBottom_1;
  }
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _get_value__a43j40_2($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _get_value__a43j40_2($this);
    return tmp0_subject === _get_value__a43j40_2(Companion_getInstance_41().FirstLineTop_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _get_value__a43j40_2(Companion_getInstance_41().LastLineBottom_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _get_value__a43j40_2(Companion_getInstance_41().Both_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _get_value__a43j40_2(Companion_getInstance_41().None_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_24() {
    Companion_instance_24 = this;
    this.FlagTrimTop_1 = 1;
    this.FlagTrimBottom_1 = 16;
    this.FirstLineTop_1 = _Trim___init__impl__tcc1lr(1);
    this.LastLineBottom_1 = _Trim___init__impl__tcc1lr(16);
    this.Both_1 = _Trim___init__impl__tcc1lr(17);
    this.None_1 = _Trim___init__impl__tcc1lr(0);
  }
  protoOf(Companion_24).get_FirstLineTop_kxvhiy_k$ = function () {
    return this.FirstLineTop_1;
  };
  protoOf(Companion_24).get_LastLineBottom_9prepu_k$ = function () {
    return this.LastLineBottom_1;
  };
  protoOf(Companion_24).get_Both_9h9iq2_k$ = function () {
    return this.Both_1;
  };
  protoOf(Companion_24).get_None_najgov_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_24;
  function Companion_getInstance_41() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Trim__isTrimFirstLineTop_impl_tqdsaa($this) {
    return (_get_value__a43j40_2($this) & 1) > 0;
  }
  function Trim__isTrimLastLineBottom_impl_8k6x3e($this) {
    return (_get_value__a43j40_2($this) & 16) > 0;
  }
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Trim__equals_impl_6x7eks($this, other) {
    if (!(other instanceof Trim))
      return false;
    if (!($this === (other instanceof Trim ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function _Alignment___init__impl__it107q(topRatio) {
    // Inline function 'kotlin.check' call
    var tmp;
    var containsArg = _Alignment___get_topRatio__impl__gg7tir(topRatio);
    if (0.0 <= containsArg ? containsArg <= 1.0 : false) {
      tmp = true;
    } else {
      tmp = _Alignment___get_topRatio__impl__gg7tir(topRatio) === -1.0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.text.style.Alignment.<anonymous>' call
      var message = 'topRatio should be in [0..1] range or -1';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return topRatio;
  }
  function _Alignment___get_topRatio__impl__gg7tir($this) {
    return $this;
  }
  function Alignment__toString_impl_on6yhu($this) {
    var tmp0_subject = _Alignment___get_topRatio__impl__gg7tir($this);
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_42().Top_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_42().Center_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_42().Proportional_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_42().Bottom_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_25() {
    Companion_instance_25 = this;
    this.Top_1 = _Alignment___init__impl__it107q(0.0);
    this.Center_1 = _Alignment___init__impl__it107q(0.5);
    this.Proportional_1 = _Alignment___init__impl__it107q(-1.0);
    this.Bottom_1 = _Alignment___init__impl__it107q(1.0);
  }
  protoOf(Companion_25).get_Top_1zzwrr_k$ = function () {
    return this.Top_1;
  };
  protoOf(Companion_25).get_Center_9xyfbt_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion_25).get_Proportional_4me62x_k$ = function () {
    return this.Proportional_1;
  };
  protoOf(Companion_25).get_Bottom_t3fcq7_k$ = function () {
    return this.Bottom_1;
  };
  var Companion_instance_25;
  function Companion_getInstance_42() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Alignment__equals_impl_9ve0tn($this, other) {
    if (!(other instanceof Alignment))
      return false;
    var tmp0_other_with_cast = other instanceof Alignment ? other.topRatio_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    this.Default_1 = new LineHeightStyle(Companion_getInstance_42().Proportional_1, Companion_getInstance_41().Both_1);
  }
  protoOf(Companion_26).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_26;
  function Companion_getInstance_43() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Trim(value) {
    Companion_getInstance_41();
    this.value_1 = value;
  }
  protoOf(Trim).toString = function () {
    return Trim__toString_impl_hxcm0x(this.value_1);
  };
  protoOf(Trim).hashCode = function () {
    return Trim__hashCode_impl_vclj5c(this.value_1);
  };
  protoOf(Trim).equals = function (other) {
    return Trim__equals_impl_6x7eks(this.value_1, other);
  };
  function Alignment(topRatio) {
    Companion_getInstance_42();
    this.topRatio_1 = topRatio;
  }
  protoOf(Alignment).toString = function () {
    return Alignment__toString_impl_on6yhu(this.topRatio_1);
  };
  protoOf(Alignment).hashCode = function () {
    return Alignment__hashCode_impl_omr6of(this.topRatio_1);
  };
  protoOf(Alignment).equals = function (other) {
    return Alignment__equals_impl_9ve0tn(this.topRatio_1, other);
  };
  function get_$stableprop_46() {
    return 0;
  }
  function LineHeightStyle(alignment, trim) {
    Companion_getInstance_43();
    this.alignment_1 = alignment;
    this.trim_1 = trim;
    this.$stable_1 = 0;
  }
  protoOf(LineHeightStyle).get_alignment_l3cz3f_k$ = function () {
    return this.alignment_1;
  };
  protoOf(LineHeightStyle).get_trim_cyvk3v_k$ = function () {
    return this.trim_1;
  };
  protoOf(LineHeightStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.alignment_1, other.alignment_1))
      return false;
    if (!(this.trim_1 === other.trim_1))
      return false;
    return true;
  };
  protoOf(LineHeightStyle).hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.alignment_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.trim_1) | 0;
    return result;
  };
  protoOf(LineHeightStyle).toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + new Alignment(this.alignment_1) + ', ') + ('trim=' + new Trim(this.trim_1)) + ')';
  };
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  function values_0() {
    return [ResolvedTextDirection_Ltr_getInstance(), ResolvedTextDirection_Rtl_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Ltr':
        return ResolvedTextDirection_Ltr_getInstance();
      case 'Rtl':
        return ResolvedTextDirection_Rtl_getInstance();
      default:
        ResolvedTextDirection_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_getInstance();
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function _TextAlign___get_value__impl__lst7m3($this) {
    return $this;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_44().Left_1 ? 'Left' : $this === Companion_getInstance_44().Right_1 ? 'Right' : $this === Companion_getInstance_44().Center_1 ? 'Center' : $this === Companion_getInstance_44().Justify_1 ? 'Justify' : $this === Companion_getInstance_44().Start_1 ? 'Start' : $this === Companion_getInstance_44().End_1 ? 'End' : 'Invalid';
  }
  function Companion_27() {
    Companion_instance_27 = this;
    this.Left_1 = _TextAlign___init__impl__99wz4v(1);
    this.Right_1 = _TextAlign___init__impl__99wz4v(2);
    this.Center_1 = _TextAlign___init__impl__99wz4v(3);
    this.Justify_1 = _TextAlign___init__impl__99wz4v(4);
    this.Start_1 = _TextAlign___init__impl__99wz4v(5);
    this.End_1 = _TextAlign___init__impl__99wz4v(6);
  }
  protoOf(Companion_27).get_Left_seblku_k$ = function () {
    return this.Left_1;
  };
  protoOf(Companion_27).get_Right_dlwl8f_k$ = function () {
    return this.Right_1;
  };
  protoOf(Companion_27).get_Center_fp5t1o_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion_27).get_Justify_uf64z9_k$ = function () {
    return this.Justify_1;
  };
  protoOf(Companion_27).get_Start_ovf7qx_k$ = function () {
    return this.Start_1;
  };
  protoOf(Companion_27).get_End_ck95sw_k$ = function () {
    return this.End_1;
  };
  protoOf(Companion_27).values_dmh61q_k$ = function () {
    return listOf([new TextAlign(this.Left_1), new TextAlign(this.Right_1), new TextAlign(this.Center_1), new TextAlign(this.Justify_1), new TextAlign(this.Start_1), new TextAlign(this.End_1)]);
  };
  var Companion_instance_27;
  function Companion_getInstance_44() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_44();
    this.value_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.value_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.value_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.value_1, other);
  };
  function Companion_28() {
    Companion_instance_28 = this;
    this.None_1 = new TextDecoration(0);
    this.Underline_1 = new TextDecoration(1);
    this.LineThrough_1 = new TextDecoration(2);
  }
  protoOf(Companion_28).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_28).get_Underline_oo7egz_k$ = function () {
    return this.Underline_1;
  };
  protoOf(Companion_28).get_LineThrough_pr9ajs_k$ = function () {
    return this.LineThrough_1;
  };
  protoOf(Companion_28).combine_yonjok_k$ = function (decorations) {
    // Inline function 'androidx.compose.ui.text.fastFold' call
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = 0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = decorations.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = decorations.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.fastFold.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.style.Companion.combine.<anonymous>' call
        accumulator = accumulator | item.mask_1;
      }
       while (inductionVariable <= last);
    var mask = accumulator;
    return new TextDecoration(mask);
  };
  var Companion_instance_28;
  function Companion_getInstance_45() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function get_$stableprop_47() {
    return 0;
  }
  function TextDecoration(mask) {
    Companion_getInstance_45();
    this.mask_1 = mask;
    this.$stable_1 = 0;
  }
  protoOf(TextDecoration).get_mask_woqbsl_k$ = function () {
    return this.mask_1;
  };
  protoOf(TextDecoration).plus_868qpp_k$ = function (decoration) {
    return new TextDecoration(this.mask_1 | decoration.mask_1);
  };
  protoOf(TextDecoration).contains_8so89q_k$ = function (other) {
    return (this.mask_1 | other.mask_1) === this.mask_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.mask_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$();
    if (!((this.mask_1 & Companion_getInstance_45().Underline_1.mask_1) === 0)) {
      values.add_utx5q5_k$('Underline');
    }
    if (!((this.mask_1 & Companion_getInstance_45().LineThrough_1.mask_1) === 0)) {
      values.add_utx5q5_k$('LineThrough');
    }
    if (values.get_size_woubt6_k$() === 1) {
      return 'TextDecoration.' + values.get_c1px32_k$(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.mask_1 === other.mask_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.mask_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function _TextDirection___get_value__impl__ka7r45($this) {
    return $this;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_46().Ltr_1 ? 'Ltr' : $this === Companion_getInstance_46().Rtl_1 ? 'Rtl' : $this === Companion_getInstance_46().Content_1 ? 'Content' : $this === Companion_getInstance_46().ContentOrLtr_1 ? 'ContentOrLtr' : $this === Companion_getInstance_46().ContentOrRtl_1 ? 'ContentOrRtl' : 'Invalid';
  }
  function Companion_29() {
    Companion_instance_29 = this;
    this.Ltr_1 = _TextDirection___init__impl__lh8lzt(1);
    this.Rtl_1 = _TextDirection___init__impl__lh8lzt(2);
    this.Content_1 = _TextDirection___init__impl__lh8lzt(3);
    this.ContentOrLtr_1 = _TextDirection___init__impl__lh8lzt(4);
    this.ContentOrRtl_1 = _TextDirection___init__impl__lh8lzt(5);
  }
  protoOf(Companion_29).get_Ltr_fd58a3_k$ = function () {
    return this.Ltr_1;
  };
  protoOf(Companion_29).get_Rtl_qi5bo5_k$ = function () {
    return this.Rtl_1;
  };
  protoOf(Companion_29).get_Content_gdpx4s_k$ = function () {
    return this.Content_1;
  };
  protoOf(Companion_29).get_ContentOrLtr_byc1cl_k$ = function () {
    return this.ContentOrLtr_1;
  };
  protoOf(Companion_29).get_ContentOrRtl_twyiln_k$ = function () {
    return this.ContentOrRtl_1;
  };
  var Companion_instance_29;
  function Companion_getInstance_46() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_46();
    this.value_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.value_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.value_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.value_1, other);
  };
  function get_$stableprop_48() {
    return 0;
  }
  function Unspecified() {
    Unspecified_instance = this;
    this.$stable_1 = 0;
  }
  protoOf(Unspecified).get_color_lnp1vl_k$ = function () {
    return Companion_getInstance().get_Unspecified_j397pn_k$();
  };
  protoOf(Unspecified).get_brush_ipcjyp_k$ = function () {
    return null;
  };
  protoOf(Unspecified).get_alpha_iooth1_k$ = function () {
    return FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    if (Unspecified_instance == null)
      new Unspecified();
    return Unspecified_instance;
  }
  function Companion_30() {
    Companion_instance_30 = this;
  }
  protoOf(Companion_30).from_ccukrb_k$ = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_getInstance();
    }
    return tmp;
  };
  protoOf(Companion_30).from_6wp01d_k$ = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_getInstance();
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.from_ccukrb_k$(modulate(brush.get_value_za03u9_k$(), alpha));
      } else {
        if (brush instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_30;
  function Companion_getInstance_47() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.get_alpha_iooth1_k$();
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function BrushStyle(value, alpha) {
    this.value_1 = value;
    this.alpha_1 = alpha;
  }
  protoOf(BrushStyle).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(BrushStyle).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(BrushStyle).get_color_lnp1vl_k$ = function () {
    return Companion_getInstance().get_Unspecified_j397pn_k$();
  };
  protoOf(BrushStyle).get_brush_ipcjyp_k$ = function () {
    return this.value_1;
  };
  protoOf(BrushStyle).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(BrushStyle).component2_7eebsb_k$ = function () {
    return this.alpha_1;
  };
  protoOf(BrushStyle).copy_c0jrsp_k$ = function (value, alpha) {
    return new BrushStyle(value, alpha);
  };
  protoOf(BrushStyle).copy$default_nmvh3s_k$ = function (value, alpha, $super) {
    value = value === VOID ? this.value_1 : value;
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    return $super === VOID ? this.copy_c0jrsp_k$(value, alpha) : $super.copy_c0jrsp_k$.call(this, value, alpha);
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + this.value_1 + ', alpha=' + this.alpha_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.value_1);
    result = imul(result, 31) + getNumberHashCode(this.alpha_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.value_1 = value;
    // Inline function 'kotlin.require' call
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.value_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      var message = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ColorStyle).get_value_za03u9_k$ = function () {
    return this.value_1;
  };
  protoOf(ColorStyle).get_color_lnp1vl_k$ = function () {
    return this.value_1;
  };
  protoOf(ColorStyle).get_brush_ipcjyp_k$ = function () {
    return null;
  };
  protoOf(ColorStyle).get_alpha_iooth1_k$ = function () {
    return _Color___get_alpha__impl__wcfyv1(this.get_color_lnp1vl_k$());
  };
  protoOf(ColorStyle).component1_9lkot7_k$ = function () {
    return this.value_1;
  };
  protoOf(ColorStyle).copy_5oad5u_k$ = function (value) {
    return new ColorStyle(value);
  };
  protoOf(ColorStyle).copy$default_uhqhaj_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_5oad5u_k$(value) : $super.copy_5oad5u_k$.call(this, new Color(value));
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + new Color(this.value_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.value_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return (isNaN_0(alpha) ? true : alpha >= 1.0) ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function lerp_9(start, stop, fraction) {
    var tmp;
    var tmp_0;
    if (!(start instanceof BrushStyle)) {
      tmp_0 = !(stop instanceof BrushStyle);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = Companion_getInstance_47().from_ccukrb_k$(lerp(start.get_color_lnp1vl_k$(), stop.get_color_lnp1vl_k$(), fraction));
    } else {
      var tmp_1;
      if (start instanceof BrushStyle) {
        tmp_1 = stop instanceof BrushStyle;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = Companion_getInstance_47().from_6wp01d_k$(lerpDiscrete(start.get_brush_ipcjyp_k$(), stop.get_brush_ipcjyp_k$(), fraction), lerp_3(start.get_alpha_iooth1_k$(), stop.get_alpha_iooth1_k$(), fraction));
      } else {
        tmp = lerpDiscrete(start, stop, fraction);
      }
    }
    return tmp;
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.None_1 = new TextGeometricTransform(1.0, 0.0);
  }
  protoOf(Companion_31).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_31;
  function Companion_getInstance_48() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function get_$stableprop_49() {
    return 0;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_48();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.scaleX_1 = scaleX;
    this.skewX_1 = skewX;
    this.$stable_1 = 0;
  }
  protoOf(TextGeometricTransform).get_scaleX_je2hxz_k$ = function () {
    return this.scaleX_1;
  };
  protoOf(TextGeometricTransform).get_skewX_iyk9d1_k$ = function () {
    return this.skewX_1;
  };
  protoOf(TextGeometricTransform).copy_4tzoad_k$ = function (scaleX, skewX) {
    return new TextGeometricTransform(scaleX, skewX);
  };
  protoOf(TextGeometricTransform).copy$default_fkrzc5_k$ = function (scaleX, skewX, $super) {
    scaleX = scaleX === VOID ? this.scaleX_1 : scaleX;
    skewX = skewX === VOID ? this.skewX_1 : skewX;
    return $super === VOID ? this.copy_4tzoad_k$(scaleX, skewX) : $super.copy_4tzoad_k$.call(this, scaleX, skewX);
  };
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.scaleX_1 === other.scaleX_1))
      return false;
    if (!(this.skewX_1 === other.skewX_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.scaleX_1);
    result = imul(31, result) + getNumberHashCode(this.skewX_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.scaleX_1 + ', skewX=' + this.skewX_1 + ')';
  };
  function lerp_10(start, stop, fraction) {
    return new TextGeometricTransform(lerp_3(start.scaleX_1, stop.scaleX_1, fraction), lerp_3(start.skewX_1, stop.skewX_1, fraction));
  }
  function Companion_32() {
    Companion_instance_32 = this;
    this.None_1 = new TextIndent_0();
  }
  protoOf(Companion_32).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_32;
  function Companion_getInstance_49() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function get_$stableprop_50() {
    return 0;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_49();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.firstLine_1 = firstLine;
    this.restLine_1 = restLine;
    this.$stable_1 = 0;
  }
  protoOf(TextIndent_0).get_firstLine_vqcugt_k$ = function () {
    return this.firstLine_1;
  };
  protoOf(TextIndent_0).get_restLine_r6nrrn_k$ = function () {
    return this.restLine_1;
  };
  protoOf(TextIndent_0).copy_cdk0dx_k$ = function (firstLine, restLine) {
    return new TextIndent_0(firstLine, restLine);
  };
  protoOf(TextIndent_0).copy$default_4hubtm_k$ = function (firstLine, restLine, $super) {
    firstLine = firstLine === VOID ? this.firstLine_1 : firstLine;
    restLine = restLine === VOID ? this.restLine_1 : restLine;
    return $super === VOID ? this.copy_cdk0dx_k$(firstLine, restLine) : $super.copy_cdk0dx_k$.call(this, new TextUnit(firstLine), new TextUnit(restLine));
  };
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.firstLine_1, other.firstLine_1))
      return false;
    if (!equals(this.restLine_1, other.restLine_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.firstLine_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.restLine_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + new TextUnit(this.firstLine_1) + ', restLine=' + new TextUnit(this.restLine_1) + ')';
  };
  function lerp_11(start, stop, fraction) {
    return new TextIndent_0(lerpTextUnitInheritable(start.firstLine_1, stop.firstLine_1, fraction), lerpTextUnitInheritable(start.restLine_1, stop.restLine_1, fraction));
  }
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_50().Clip_1 ? 'Clip' : $this === Companion_getInstance_50().Ellipsis_1 ? 'Ellipsis' : $this === Companion_getInstance_50().Visible_1 ? 'Visible' : 'Invalid';
  }
  function Companion_33() {
    Companion_instance_33 = this;
    this.Clip_1 = _TextOverflow___init__impl__obguoe(1);
    this.Ellipsis_1 = _TextOverflow___init__impl__obguoe(2);
    this.Visible_1 = _TextOverflow___init__impl__obguoe(3);
  }
  protoOf(Companion_33).get_Clip_ypf2ge_k$ = function () {
    return this.Clip_1;
  };
  protoOf(Companion_33).get_Ellipsis_8ygjpt_k$ = function () {
    return this.Ellipsis_1;
  };
  protoOf(Companion_33).get_Visible_m15n1a_k$ = function () {
    return this.Visible_1;
  };
  var Companion_instance_33;
  function Companion_getInstance_50() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_50();
    this.value_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.value_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.value_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.value_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  function isNeutralDirection(_this__u8e3s4) {
    var tmp0_subject = CharDirection_getInstance().of_xanmn3_k$(_this__u8e3s4);
    return ((tmp0_subject === CharDirection_getInstance().get_OTHER_NEUTRAL_x7bhv3_k$() ? true : tmp0_subject === CharDirection_getInstance().get_WHITE_SPACE_NEUTRAL_sskz73_k$()) ? true : tmp0_subject === CharDirection_getInstance().get_BOUNDARY_NEUTRAL_moyt2d_k$()) ? true : false;
  }
  function strongDirectionType(_this__u8e3s4) {
    var tmp0_subject = CharDirection_getInstance().of_xanmn3_k$(_this__u8e3s4);
    return tmp0_subject === CharDirection_getInstance().get_LEFT_TO_RIGHT_d09sjd_k$() ? Companion_getInstance_51().get_Ltr_vywptz_k$() : (tmp0_subject === CharDirection_getInstance().get_RIGHT_TO_LEFT_mqemu9_k$() ? true : tmp0_subject === CharDirection_getInstance().get_RIGHT_TO_LEFT_ARABIC_1wz4lo_k$()) ? Companion_getInstance_51().get_Rtl_2t37t3_k$() : Companion_getInstance_51().get_None_1ti3nr_k$();
  }
  function toCharArray_0(_this__u8e3s4, destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = until(startIndex, endIndex).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.ui.text.input.toCharArray.<anonymous>' call
      destination[(destinationOffset + element | 0) - startIndex | 0] = charSequenceGet(_this__u8e3s4, element);
    }
  }
  function NoCache() {
  }
  protoOf(NoCache).get_qk1ys5_k$ = function (key, loader) {
    return loader(key);
  };
  protoOf(NoCache).get_c3034i_k$ = function (key, loader) {
    return this.get_qk1ys5_k$(!(key == null) ? key : THROW_CCE(), loader);
  };
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function appendPartOfCharArray(_this__u8e3s4, charArray, offset, len) {
    var inductionVariable = offset;
    var last = offset + len | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.append_am5a4z_k$(charArray[i]);
      }
       while (inductionVariable < last);
  }
  function get_rtlLanguagesSet() {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return rtlLanguagesSet;
  }
  var rtlLanguagesSet;
  function createPlatformLocaleDelegate() {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return new createPlatformLocaleDelegate$1();
  }
  function JsLocale_init_$Init$(languageTag, $this) {
    JsLocale.call($this, toIntlLocale(languageTag));
    return $this;
  }
  function JsLocale_init_$Create$(languageTag) {
    return JsLocale_init_$Init$(languageTag, objectCreate(protoOf(JsLocale)));
  }
  function JsLocale(locale) {
    this.locale_1 = locale;
  }
  protoOf(JsLocale).get_locale_g9dqar_k$ = function () {
    return this.locale_1;
  };
  protoOf(JsLocale).get_language_cjhhk1_k$ = function () {
    return this.locale_1.language;
  };
  protoOf(JsLocale).get_script_jedas4_k$ = function () {
    var tmp0_elvis_lhs = this.locale_1.script;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(JsLocale).get_region_iy88ot_k$ = function () {
    var tmp0_elvis_lhs = this.locale_1.region;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(JsLocale).toLanguageTag_xneel5_k$ = function () {
    return this.locale_1.baseName;
  };
  function toIntlLocale(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return parseLanguageTagToIntlLocale(_this__u8e3s4);
  }
  function parseLanguageTagToIntlLocale(languageTag) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return new Intl.Locale(languageTag);
  }
  function isRtl(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return get_rtlLanguagesSet().contains_aljjnj_k$(_this__u8e3s4.get_language_cjhhk1_k$());
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).get_current_jwi6j4_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.ui.text.intl.<no name provided>.<get-current>.<anonymous>' call
      var tmp$ret$0 = new Locale(JsLocale_init_$Create$(item));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return new LocaleList(destination);
  };
  protoOf(createPlatformLocaleDelegate$1).parseLanguageTag_5wql63_k$ = function (languageTag) {
    return JsLocale_init_$Create$(languageTag);
  };
  var properties_initialized_JsPlatformLocale_js_kt_nild9t;
  function _init_properties_JsPlatformLocale_js_kt__92ki1d() {
    if (!properties_initialized_JsPlatformLocale_js_kt_nild9t) {
      properties_initialized_JsPlatformLocale_js_kt_nild9t = true;
      rtlLanguagesSet = setOf(['ar', 'fa', 'he', 'iw', 'ji', 'ur', 'yi']);
    }
  }
  function currentPlatform() {
    switch (get_hostOs().get_ordinal_ip24qg_k$()) {
      case 0:
        return Platform_Android_getInstance();
      case 4:
        return Platform_IOS_getInstance();
      case 3:
        return Platform_MacOS_getInstance();
      case 1:
        return Platform_Linux_getInstance();
      case 2:
        return Platform_Windows_getInstance();
      default:
        return Platform_Unknown_getInstance();
    }
  }
  function loadTypeface(font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    var tmp;
    if (font instanceof LoadedFont) {
      tmp = Companion_getInstance_6().makeFromData$default_spx7a0_k$(Companion_getInstance_7().makeFromBytes$default_1ffal6_k$(font.get_data_wokkxf_k$()));
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function ActualStringDelegate() {
    return new JsStringDelegate();
  }
  function titlecaseImpl(_this__u8e3s4, $this, locale) {
    var uppercase = toLocaleUpperCase(toString_1(_this__u8e3s4), locale.get_language_cjhhk1_k$());
    if (uppercase.length > 1) {
      var tmp;
      if (_this__u8e3s4 === _Char___init__impl__6a9atx(329)) {
        tmp = uppercase;
      } else {
        // Inline function 'kotlin.text.plus' call
        var this_0 = charSequenceGet(uppercase, 0);
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        var other = uppercase.substring(1).toLowerCase();
        tmp = toString_1(this_0) + other;
      }
      return tmp;
    }
    return toString_1(titlecaseChar(_this__u8e3s4));
  }
  function JsStringDelegate() {
  }
  protoOf(JsStringDelegate).toUpperCase_ixrwdu_k$ = function (string, locale) {
    return toLocaleUpperCase(string, locale.get_language_cjhhk1_k$());
  };
  protoOf(JsStringDelegate).toLowerCase_5iiwkz_k$ = function (string, locale) {
    return toLocaleLowerCase(string, locale.get_language_cjhhk1_k$());
  };
  protoOf(JsStringDelegate).capitalize_suut0d_k$ = function (string, locale) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(string) > 0) {
      // Inline function 'androidx.compose.ui.text.platform.JsStringDelegate.capitalize.<anonymous>' call
      var it = charSequenceGet(string, 0);
      var tmp_0;
      if (isLowerCase(it)) {
        tmp_0 = titlecaseImpl(it, this, locale);
      } else {
        tmp_0 = toString_1(it);
      }
      var tmp$ret$1 = tmp_0;
      var tmp_1 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_1 + string.substring(1);
    } else {
      tmp = string;
    }
    return tmp;
  };
  protoOf(JsStringDelegate).decapitalize_ce2ovw_k$ = function (string, locale) {
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(string) > 0) {
      // Inline function 'androidx.compose.ui.text.platform.JsStringDelegate.decapitalize.<anonymous>' call
      var it = charSequenceGet(string, 0);
      var tmp$ret$1 = toLocaleLowerCase(toString_1(it), locale.get_language_cjhhk1_k$());
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + string.substring(1);
    } else {
      tmp = string;
    }
    return tmp;
  };
  function toLocaleUpperCase(text, locale) {
    return text.toLocaleUpperCase(locale);
  }
  function toLocaleLowerCase(text, locale) {
    return text.toLocaleLowerCase(locale);
  }
  function get_$stableprop_51() {
    return 0;
  }
  function PlatformFont() {
    this.$stable_1 = 0;
  }
  protoOf(PlatformFont).get_cacheKey_w22q12_k$ = function () {
    return '' + getKClassFromExpression(this).get_simpleName_r6f8py_k$() + '|' + this.get_identity_y1rl2x_k$();
  };
  function Cache() {
  }
  function checkEvicted($this, now) {
    var expireTime = now.minus_mfbszm_k$($this.expireAfterNanos_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = $this.accessTime_1.get_keys_wop4xp_k$();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      if (!(ensureNotNull($this.accessTime_1.get_wei43m_k$(item)).compareTo_9jj042_k$(expireTime) < 0))
        break $l$loop;
      list.add_utx5q5_k$(item);
    }
    var tmp0_iterator_0 = list.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      $this.map_1.remove_gppy8k_k$(element);
      $this.accessTime_1.remove_gppy8k_k$(element);
    }
  }
  function currentNanoTime$ref() {
    var l = function () {
      return currentNanoTime();
    };
    l.callableName = 'currentNanoTime';
    return l;
  }
  function ExpireAfterAccessCache(expireAfterNanos, currentNanos) {
    var tmp;
    if (currentNanos === VOID) {
      tmp = currentNanoTime$ref();
    } else {
      tmp = currentNanos;
    }
    currentNanos = tmp;
    this.expireAfterNanos_1 = expireAfterNanos;
    this.currentNanos_1 = currentNanos;
    this.map_1 = HashMap_init_$Create$_0();
    this.accessTime_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).get_expireAfterNanos_6bfx1n_k$ = function () {
    return this.expireAfterNanos_1;
  };
  protoOf(ExpireAfterAccessCache).get_currentNanos_skfngv_k$ = function () {
    return this.currentNanos_1;
  };
  protoOf(ExpireAfterAccessCache).get_map_18j0ul_k$ = function () {
    return this.map_1;
  };
  protoOf(ExpireAfterAccessCache).get_accessTime_vyxjh6_k$ = function () {
    return this.accessTime_1;
  };
  protoOf(ExpireAfterAccessCache).get_c3034i_k$ = function (key, loader) {
    this.accessTime_1.remove_gppy8k_k$(key);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.map_1;
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
      var answer = loader(key);
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var this_1 = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
    var now = this.currentNanos_1();
    // Inline function 'kotlin.collections.set' call
    this.accessTime_1.put_4fpzoq_k$(key, now);
    checkEvicted(this, now);
    return this_1;
  };
  function get_PUSH_DIRECTIONAL_ISOLATE_RANGE() {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return PUSH_DIRECTIONAL_ISOLATE_RANGE;
  }
  var PUSH_DIRECTIONAL_ISOLATE_RANGE;
  function _StrongDirectionType___init__impl__59uet3(value) {
    return value;
  }
  function _StrongDirectionType___get_value__impl__14d68b($this) {
    return $this;
  }
  function Companion_34() {
    Companion_instance_34 = this;
    this.None_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.Ltr_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.Rtl_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  protoOf(Companion_34).get_None_1ti3nr_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_34).get_Ltr_vywptz_k$ = function () {
    return this.Ltr_1;
  };
  protoOf(Companion_34).get_Rtl_2t37t3_k$ = function () {
    return this.Rtl_1;
  };
  var Companion_instance_34;
  function Companion_getInstance_51() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function StrongDirectionType__toString_impl_uzh5un($this) {
    return 'StrongDirectionType(value=' + $this + ')';
  }
  function StrongDirectionType__hashCode_impl_98b91s($this) {
    return $this;
  }
  function StrongDirectionType__equals_impl_qyb4t0($this, other) {
    if (!(other instanceof StrongDirectionType))
      return false;
    if (!($this === (other instanceof StrongDirectionType ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrongDirectionType(value) {
    Companion_getInstance_51();
    this.value_1 = value;
  }
  protoOf(StrongDirectionType).toString = function () {
    return StrongDirectionType__toString_impl_uzh5un(this.value_1);
  };
  protoOf(StrongDirectionType).hashCode = function () {
    return StrongDirectionType__hashCode_impl_98b91s(this.value_1);
  };
  protoOf(StrongDirectionType).equals = function (other) {
    return StrongDirectionType__equals_impl_qyb4t0(this.value_1, other);
  };
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var tmp0_iterator = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var codePoint = tmp0_iterator.next_20eer_k$();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_51().None_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_51().None_1;
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) ? (index + 1 | 0) < _this__u8e3s4.length : false) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_8(), high, low);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(high);
  }
  function get_codePointsOutsideDirectionalIsolate(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0(_this__u8e3s4, null));
  }
  function toCodePoint(_this__u8e3s4, high, low) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return (Char__minus_impl_a2frrh(high, Companion_getInstance_8().get_MIN_HIGH_SURROGATE_t8674j_k$()) << 10 | Char__minus_impl_a2frrh(low, Companion_getInstance_8().get_MIN_LOW_SURROGATE_mwv6vb_k$())) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function get_POP_DIRECTIONAL_ISOLATE_CODE_POINT() {
    return POP_DIRECTIONAL_ISOLATE_CODE_POINT;
  }
  var POP_DIRECTIONAL_ISOLATE_CODE_POINT;
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function get_MIN_SUPPLEMENTARY_CODE_POINT() {
    return MIN_SUPPLEMENTARY_CODE_POINT;
  }
  var MIN_SUPPLEMENTARY_CODE_POINT;
  function findPrecedingBreak(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var it = Companion_getInstance_9().makeCharacterInstance$default_7rwuey_k$();
    it.setText_1jlejc_k$(_this__u8e3s4);
    return it.preceding_v1dyyd_k$(index);
  }
  function findFollowingBreak(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var it = Companion_getInstance_9().makeCharacterInstance$default_7rwuey_k$();
    it.setText_1jlejc_k$(_this__u8e3s4);
    return it.following_j6g4t5_k$(index);
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.$this_codePointsOutsideDirectionalIsolate_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).invoke_pgsqqr_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_rkcuc7_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_pgsqqr_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.openIsolateCount0__1 = 0;
            this.tmp0_iterator1__1 = get_codePoints(this.$this_codePointsOutsideDirectionalIsolate_1).iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator1__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.codePoint2__1 = this.tmp0_iterator1__1.next_20eer_k$();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.get_first_irdx8n_k$();
            var containsUpper = progression.get_last_wopotb_k$();
            var containsArg = this.codePoint2__1;
            if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
              this.openIsolateCount0__1 = this.openIsolateCount0__1 + 1 | 0;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              if (this.codePoint2__1 === 8297) {
                if (this.openIsolateCount0__1 > 0) {
                  this.openIsolateCount0__1 = this.openIsolateCount0__1 - 1 | 0;
                }
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              } else {
                if (this.openIsolateCount0__1 === 0) {
                  this.set_state_rjd8d0_k$(2);
                  suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.codePoint2__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_rjd8d0_k$(3);
                  continue $sm;
                }
              }
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(1);
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
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).create_rkcuc7_k$ = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.$this_codePointsOutsideDirectionalIsolate_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rkcuc7_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_pgsqqr_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.$this_codePoints_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).invoke_pgsqqr_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_rkcuc7_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_pgsqqr_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.index0__1 = 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!(this.index0__1 < this.$this_codePoints_1.length)) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.codePoint1__1 = codePointAt(this.$this_codePoints_1, this.index0__1);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.codePoint1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.index0__1 = this.index0__1 + charCount(this.codePoint1__1) | 0;
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
  protoOf(_get_codePoints_$slambda_43x8dt).create_rkcuc7_k$ = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.$this_codePoints_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(_get_codePoints_$slambda_43x8dt).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rkcuc7_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_pgsqqr_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_CharHelpers_skiko_kt_d762bq;
  function _init_properties_CharHelpers_skiko_kt__8ej40s() {
    if (!properties_initialized_CharHelpers_skiko_kt_d762bq) {
      properties_initialized_CharHelpers_skiko_kt_d762bq = true;
      PUSH_DIRECTIONAL_ISOLATE_RANGE = numberRangeToNumber(8294, 8296);
    }
  }
  function Companion_35() {
    Companion_instance_35 = this;
    this.Default_1 = new PlatformParagraphStyle();
  }
  protoOf(Companion_35).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_35;
  function Companion_getInstance_52() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function get_$stableprop_52() {
    return 0;
  }
  function PlatformParagraphStyle() {
    Companion_getInstance_52();
    this.$stable_1 = 0;
  }
  protoOf(PlatformParagraphStyle).merge_553efx_k$ = function (other) {
    return this;
  };
  protoOf(PlatformParagraphStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformParagraphStyle))
      return false;
    return true;
  };
  protoOf(PlatformParagraphStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function Companion_36() {
    Companion_instance_36 = this;
    this.Default_1 = new PlatformSpanStyle();
  }
  protoOf(Companion_36).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Companion_instance_36;
  function Companion_getInstance_53() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function get_$stableprop_53() {
    return 0;
  }
  function PlatformSpanStyle() {
    Companion_getInstance_53();
    this.$stable_1 = 0;
  }
  protoOf(PlatformSpanStyle).merge_ap0tcl_k$ = function (other) {
    return this;
  };
  protoOf(PlatformSpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformSpanStyle))
      return false;
    return true;
  };
  protoOf(PlatformSpanStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.spanStyle_1 = spanStyle;
    $this.paragraphStyle_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  function get_$stableprop_54() {
    return 0;
  }
  protoOf(PlatformTextStyle).get_spanStyle_2b836q_k$ = function () {
    return this.spanStyle_1;
  };
  protoOf(PlatformTextStyle).get_paragraphStyle_27utpo_k$ = function () {
    return this.paragraphStyle_1;
  };
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.paragraphStyle_1, other.paragraphStyle_1))
      return false;
    if (!equals(this.spanStyle_1, other.spanStyle_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle() {
    this.$stable_1 = 0;
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function lerp_12(start, stop, fraction) {
    return start;
  }
  function lerp_13(start, stop, fraction) {
    return start;
  }
  function Paragraph_1() {
  }
  function _get_ellipsisChar__lqwbxg($this) {
    return $this.ellipsisChar_1;
  }
  function _get_paragraphIntrinsics__noc1dh($this) {
    return $this.paragraphIntrinsics_1;
  }
  function _get_layouter__1rxx78($this) {
    return $this.layouter_1;
  }
  function _set_paragraph__p1bfvb($this, _set____db54di) {
    $this.paragraph_1 = _set____db54di;
  }
  function _get_paragraph__goy5p9($this) {
    return $this.paragraph_1;
  }
  function _get_text__de5ose_0($this) {
    return $this.paragraphIntrinsics_1.get_text_wouvsm_k$();
  }
  function lineMetricsForOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose_0($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose_0($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var metrics = _get_lineMetrics__5iiuki($this);
    var inductionVariable = 0;
    var last = metrics.length;
    while (inductionVariable < last) {
      var line = metrics[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (offset < line.get_endIncludingNewline_e3twjj_k$()) {
        return line;
      }
    }
    // Inline function 'kotlin.collections.isEmpty' call
    if (metrics.length === 0) {
      return null;
    }
    return last_0(metrics);
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = _get_lineMetrics__5iiuki($this);
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineMetricsForVerticalPosition.<anonymous>' call
        if (vertical < element.get_baseline_arnwum_k$() + element.get_descent_r0gq8h_k$()) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp;
    if (_get_text__de5ose_0($this) === '') {
      var metrics = $this.layouter_1.get_defaultFont_6nsy4n_k$().get_metrics_h2mme2_k$();
      var ascent = -metrics.get_ascent_b435cz_k$();
      var descent = metrics.get_descent_r0gq8h_k$();
      var baseline = $this.paragraph_1.get_alphabeticBaseline_rczsqt_k$();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      var $this$with = $this.layouter_1.get_paragraphStyle_27utpo_k$().get_strutStyle_9kfpti_k$();
      var tmp_0;
      if ((($this$with.get_isEnabled_roz1ma_k$() ? !$this$with.get_isHeightForced_n6afgt_k$() : false) ? $this$with.get_isHeightOverridden_qmvgge_k$() : false) ? $this$with.get_fontSize_pr9n47_k$() > 0.0 : false) {
        tmp_0 = $this$with.get_height_e7t92o_k$() * $this$with.get_fontSize_pr9n47_k$();
      } else {
        tmp_0 = ascent + descent;
      }
      var height = tmp_0;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [new LineMetrics(0, 0, 0, 0, true, ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
    } else {
      var tmp_1 = $this.paragraph_1.get_lineMetrics_yxegqi_k$();
      tmp = isArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function getBoxForwardByOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose_0($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose_0($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose_0($this).length) {
      var box = firstOrNull($this.paragraph_1.getRectsForRange_leji5d_k$(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose_0($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose_0($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var from = offset - 1 | 0;
    var isRtl = $this.paragraphIntrinsics_1.get_textDirection_cl6v6f_k$().equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.paragraph_1.getRectsForRange_leji5d_k$(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (charSequenceGet(_get_text__de5ose_0($this), from) === _Char___init__impl__6a9atx(10)) {
        var tmp;
        if (!isRtl) {
          var bottom = box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$() + box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$() - box.get_rect_wotlbh_k$().get_top_18ivbo_k$();
          var rect = new Rect_0(0.0, box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$(), 0.0, bottom);
          return new TextBox(rect, box.get_direction_7ekune_k$());
        } else {
          var tmp_0;
          if (from === get_lastIndex_0(_get_text__de5ose_0($this))) {
            var bottom_0 = box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$() + box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$() - box.get_rect_wotlbh_k$().get_top_18ivbo_k$();
            var rect_0 = new Rect_0($this.get_width_j0q4yl_k$(), box.get_rect_wotlbh_k$().get_bottom_bj8ras_k$(), $this.get_width_j0q4yl_k$(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.get_direction_7ekune_k$());
          } else {
            var nextBox = first_1($this.paragraph_1.getRectsForRange_leji5d_k$(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect_0(nextBox.get_rect_wotlbh_k$().get_left_woprgw_k$(), nextBox.get_rect_wotlbh_k$().get_top_18ivbo_k$(), nextBox.get_rect_wotlbh_k$().get_left_woprgw_k$(), nextBox.get_rect_wotlbh_k$().get_bottom_bj8ras_k$());
            tmp_0 = new TextBox(rect_1, nextBox.get_direction_7ekune_k$());
          }
          tmp = tmp_0;
        }
        return tmp;
      } else
        return box;
    }
    return null;
  }
  function getBoxBackwardByOffset$default($this, offset, end, $super) {
    end = end === VOID ? offset : end;
    return getBoxBackwardByOffset($this, offset, end);
  }
  function checkOffsetIsValid($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose_0($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose_0($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function SkiaParagraph(intrinsics, maxLines, ellipsis, constraints) {
    this.maxLines_1 = maxLines;
    this.ellipsis_1 = ellipsis;
    this.constraints_1 = constraints;
    this.ellipsisChar_1 = this.ellipsis_1 ? '\u2026' : '';
    var tmp = this;
    tmp.paragraphIntrinsics_1 = intrinsics instanceof SkiaParagraphIntrinsics ? intrinsics : THROW_CCE();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.paragraphIntrinsics_1.layouter_lcs8mh_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.layouter.<anonymous>' call
    this_0.setParagraphStyle_hogelz_k$(this.maxLines_1, this.ellipsisChar_1);
    tmp_0.layouter_1 = this_0;
    this.paragraph_1 = this.layouter_1.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$());
    this.paragraph_1.layout_x0f0tu_k$(this.get_width_j0q4yl_k$());
  }
  protoOf(SkiaParagraph).get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  protoOf(SkiaParagraph).get_ellipsis_sol6jq_k$ = function () {
    return this.ellipsis_1;
  };
  protoOf(SkiaParagraph).get_constraints_y0yfdk_k$ = function () {
    return this.constraints_1;
  };
  protoOf(SkiaParagraph).get_width_j0q4yl_k$ = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.constraints_1);
  };
  protoOf(SkiaParagraph).get_height_e7t92o_k$ = function () {
    return this.paragraph_1.get_height_e7t92o_k$();
  };
  protoOf(SkiaParagraph).get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return this.paragraphIntrinsics_1.get_minIntrinsicWidth_lmc1rq_k$();
  };
  protoOf(SkiaParagraph).get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return this.paragraphIntrinsics_1.get_maxIntrinsicWidth_b4gk2k_k$();
  };
  protoOf(SkiaParagraph).get_firstBaseline_s5430_k$ = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.get_baseline_arnwum_k$();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).get_lastBaseline_inuptw_k$ = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.get_baseline_arnwum_k$();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).get_didExceedMaxLines_xyxo57_k$ = function () {
    return this.paragraph_1.didExceedMaxLines_51frgy_k$();
  };
  protoOf(SkiaParagraph).get_lineCount_lmaazy_k$ = function () {
    var tmp;
    if (_get_text__de5ose_0(this) === '' ? true : this.paragraph_1.get_lineNumber_pm7qca_k$() < 1) {
      tmp = 1;
    } else {
      tmp = this.paragraph_1.get_lineNumber_pm7qca_k$();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).get_placeholderRects_1ky2fv_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.paragraph_1.get_rectsForPlaceholders_vi296l_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      var tmp$ret$0 = toComposeRect(item.get_rect_wotlbh_k$());
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  };
  protoOf(SkiaParagraph).getPathForRange_bge8b5_k$ = function (start, end) {
    var boxes = this.paragraph_1.getRectsForRange_leji5d_k$(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).addRect$default_mv5gnm_k$(b.get_rect_wotlbh_k$());
    }
    return path;
  };
  protoOf(SkiaParagraph).getCursorRect_gdluko_k$ = function (offset) {
    var horizontal = this.getHorizontalPosition_9mx7bk_k$(offset, true);
    var line = ensureNotNull(lineMetricsForOffset(this, offset));
    var isNewEmptyLine = (offset - 1 | 0) === line.get_startIndex_oi1lp5_k$() ? offset === _get_text__de5ose_0(this).length : false;
    var metrics = this.layouter_1.get_defaultFont_6nsy4n_k$().get_metrics_h2mme2_k$();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var it = line.get_ascent_b435cz_k$();
    var tmp;
    if (isNewEmptyLine) {
      var ascent = -metrics.get_ascent_b435cz_k$();
      tmp = coerceAtMost(it, ascent);
    } else {
      tmp = it;
    }
    var asc = tmp;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var it_0 = line.get_descent_r0gq8h_k$();
    var tmp_0;
    if (isNewEmptyLine) {
      var descent = metrics.get_descent_r0gq8h_k$();
      tmp_0 = coerceAtMost(it_0, descent);
    } else {
      tmp_0 = it_0;
    }
    var desc = tmp_0;
    return new Rect_1(horizontal, line.get_baseline_arnwum_k$() - asc, horizontal, line.get_baseline_arnwum_k$() + desc);
  };
  protoOf(SkiaParagraph).getLineLeft_799m07_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_left_woprgw_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineRight_j8rtqe_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_right_ixz7xv_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineTop_q0a6r_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.get_baseline_arnwum_k$() - tmp0_safe_receiver.get_ascent_b435cz_k$();
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineBottom_yhu6bn_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineBottom.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.get_baseline_arnwum_k$() + tmp0_safe_receiver.get_descent_r0gq8h_k$();
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineHeight_hm3g1l_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_height_e7t92o_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineWidth_vd5x7g_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_width_j0q4yl_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineStart_clke9s_k$ = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_startIndex_oi1lp5_k$();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineEnd_o6geci_k$ = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 ? metrics.get_startIndex_oi1lp5_k$() < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].get_endIndex_3lslfk_k$() : false) {
        tmp_1 = metrics.get_endIndex_3lslfk_k$();
      } else if (metrics.get_startIndex_oi1lp5_k$() < _get_text__de5ose_0(this).length ? charSequenceGet(_get_text__de5ose_0(this), metrics.get_startIndex_oi1lp5_k$()) === _Char___init__impl__6a9atx(10) : false) {
        tmp_1 = metrics.get_startIndex_oi1lp5_k$();
      } else {
        tmp_1 = metrics.get_endExcludingWhitespaces_7y3blb_k$();
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.get_endIndex_3lslfk_k$();
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).isLineEllipsized_1fausj_k$ = function (lineIndex) {
    return false;
  };
  protoOf(SkiaParagraph).getLineForOffset_jakwx2_k$ = function (offset) {
    var tmp0_safe_receiver = lineMetricsForOffset(this, offset);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_lineNumber_pm7qca_k$();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).getLineForVerticalPosition_lon9k6_k$ = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_lineNumber_pm7qca_k$();
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).getHorizontalPosition_9mx7bk_k$ = function (offset, usePrimaryDirection) {
    var prevBox = getBoxBackwardByOffset$default(this, offset);
    var nextBox = getBoxForwardByOffset(this, offset);
    var isRtl = this.paragraphIntrinsics_1.get_textDirection_cl6v6f_k$().equals(ResolvedTextDirection_Rtl_getInstance());
    var isLtr = !isRtl;
    return (prevBox == null ? nextBox == null : false) ? isRtl ? this.get_width_j0q4yl_k$() : 0.0 : prevBox == null ? cursorHorizontalPosition(ensureNotNull(nextBox), true) : nextBox == null ? cursorHorizontalPosition(prevBox) : nextBox.get_direction_7ekune_k$().equals(prevBox.get_direction_7ekune_k$()) ? cursorHorizontalPosition(nextBox, true) : (isLtr ? prevBox.get_direction_7ekune_k$().equals(Direction_LTR_getInstance()) : false) ? cursorHorizontalPosition(nextBox, true) : (isRtl ? prevBox.get_direction_7ekune_k$().equals(Direction_RTL_getInstance()) : false) ? cursorHorizontalPosition(nextBox, true) : usePrimaryDirection ? cursorHorizontalPosition(prevBox) : cursorHorizontalPosition(nextBox, true);
  };
  protoOf(SkiaParagraph).getParagraphDirection_qweb73_k$ = function (offset) {
    return this.paragraphIntrinsics_1.get_textDirection_cl6v6f_k$();
  };
  protoOf(SkiaParagraph).getBidiRunDirection_c67d8i_k$ = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_direction_7ekune_k$();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(SkiaParagraph).getOffsetForPosition_12t0zj_k$ = function (position) {
    var glyphPosition = this.paragraph_1.getGlyphPositionAtCoordinate_djajfu_k$(_Offset___get_x__impl__xvi35n(position), _Offset___get_y__impl__8bzhra(position)).get_position_jfponi_k$();
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, _Offset___get_y__impl__8bzhra(position));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var expectedLine = tmp;
    var isNotEmptyLine = expectedLine.get_startIndex_oi1lp5_k$() < expectedLine.get_endIndex_3lslfk_k$();
    if (_Offset___get_x__impl__xvi35n(position) > expectedLine.get_left_woprgw_k$() ? _Offset___get_x__impl__xvi35n(position) < expectedLine.get_right_ixz7xv_k$() : false) {
      return glyphPosition;
    }
    var tmp_0;
    if (isNotEmptyLine) {
      tmp_0 = this.paragraph_1.getRectsForRange_leji5d_k$(expectedLine.get_startIndex_oi1lp5_k$(), expectedLine.get_isHardBreak_lhleg1_k$() ? expectedLine.get_endIndex_3lslfk_k$() : expectedLine.get_endIndex_3lslfk_k$() - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_0 = null;
    }
    var rects = tmp_0;
    var tmp2_safe_receiver = rects == null ? null : firstOrNull(rects);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_rect_wotlbh_k$();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_left_woprgw_k$();
    var leftX = tmp4_elvis_lhs == null ? expectedLine.get_left_woprgw_k$() : tmp4_elvis_lhs;
    var tmp6_safe_receiver = rects == null ? null : lastOrNull(rects);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.get_rect_wotlbh_k$();
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.get_right_ixz7xv_k$();
    var rightX = tmp8_elvis_lhs == null ? expectedLine.get_right_ixz7xv_k$() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var correctedGlyphPosition = glyphPosition;
    if (_Offset___get_x__impl__xvi35n(position) <= leftX) {
      correctedGlyphPosition = this.paragraph_1.getGlyphPositionAtCoordinate_djajfu_k$(leftX + 1.0, _Offset___get_y__impl__8bzhra(position)).get_position_jfponi_k$();
    } else if (_Offset___get_x__impl__xvi35n(position) >= rightX) {
      correctedGlyphPosition = this.paragraph_1.getGlyphPositionAtCoordinate_djajfu_k$(rightX - 1.0, _Offset___get_y__impl__8bzhra(position)).get_position_jfponi_k$();
      var tmp_1;
      if (0 <= correctedGlyphPosition ? correctedGlyphPosition <= (charSequenceLength(_get_text__de5ose_0(this)) - 1 | 0) : false) {
        tmp_1 = isNeutralDirection(codePointAt(_get_text__de5ose_0(this), correctedGlyphPosition));
      } else {
        tmp_1 = false;
      }
      var isNeutralChar = tmp_1;
      var tmp_2;
      if (!isNeutralChar) {
        var tmp9_safe_receiver = getBoxBackwardByOffset$default(this, correctedGlyphPosition);
        tmp_2 = equals(tmp9_safe_receiver == null ? null : tmp9_safe_receiver.get_direction_7ekune_k$(), Direction_RTL_getInstance());
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        correctedGlyphPosition = correctedGlyphPosition - 1 | 0;
      }
    }
    return correctedGlyphPosition;
  };
  protoOf(SkiaParagraph).getBoundingBox_xfho9l_k$ = function (offset) {
    var tmp0_elvis_lhs = getBoxForwardByOffset(this, offset);
    var box = tmp0_elvis_lhs == null ? ensureNotNull(getBoxBackwardByOffset(this, offset, _get_text__de5ose_0(this).length)) : tmp0_elvis_lhs;
    return toComposeRect(box.get_rect_wotlbh_k$());
  };
  protoOf(SkiaParagraph).getWordBoundary_s8pru_k$ = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose_0(this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose_0(this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if ((offset < _get_text__de5ose_0(this).length ? isWhitespace(charSequenceGet(_get_text__de5ose_0(this), offset)) : false) ? true : offset === _get_text__de5ose_0(this).length) {
      var tmp;
      if (offset > 0 ? !isWhitespace(charSequenceGet(_get_text__de5ose_0(this), offset - 1 | 0)) : false) {
        tmp = toTextRange(this.paragraph_1.getWordBoundary_w7r0s2_k$(offset - 1 | 0));
      } else {
        tmp = TextRange_0(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.paragraph_1.getWordBoundary_w7r0s2_k$(offset));
  };
  protoOf(SkiaParagraph).paint_xx9kwo_k$ = function (canvas, color, shadow, textDecoration) {
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.layouter_1;
    $this$with.setTextStyle_v5mujq_k$(color, shadow, textDecoration);
    tmp.paragraph_1 = $this$with.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$());
    this.paragraph_1.paint_utwq50_k$(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).paint_qj08y1_k$ = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.layouter_1;
    $this$with.setTextStyle_v5mujq_k$(color, shadow, textDecoration);
    $this$with.setDrawStyle_16xwa2_k$(drawStyle);
    $this$with.setBlendMode_61cb32_k$(blendMode);
    tmp.paragraph_1 = $this$with.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$());
    this.paragraph_1.paint_utwq50_k$(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).paint_t6aqss_k$ = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.layouter_1;
    $this$with.setTextStyle_4rebey_k$(brush, Size(this.get_width_j0q4yl_k$(), this.get_height_e7t92o_k$()), alpha, shadow, textDecoration);
    $this$with.setDrawStyle_16xwa2_k$(drawStyle);
    $this$with.setBlendMode_61cb32_k$(blendMode);
    tmp.paragraph_1 = $this$with.layoutParagraph_6xbnfw_k$(this.get_width_j0q4yl_k$());
    this.paragraph_1.paint_utwq50_k$(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function toTextRange(_this__u8e3s4) {
    return TextRange_0(_this__u8e3s4.get_start_iypx6h_k$(), _this__u8e3s4.get_end_18j6ha_k$());
  }
  function createFontFamilyResolver(fontResourceLoader) {
    if (!(fontResourceLoader instanceof FontLoader))
      throw IllegalArgumentException_init_$Create$('Unexpected type: ' + fontResourceLoader + ' must be FontLoader');
    return fontResourceLoader.get_fontFamilyResolver_9o0fjy_k$();
  }
  function createFontFamilyResolver_0() {
    return new FontFamilyResolverImpl(new SkiaFontLoader());
  }
  function createFontFamilyResolver_1(fontCache) {
    return new FontFamilyResolverImpl(new SkiaFontLoader(fontCache));
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).resolve_wywkvk_k$ = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.get_fontFamily_ulphcs_k$();
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.get_fontFamily_ulphcs_k$();
    var result = skiaFontLoader.loadPlatformTypes_4rma5w_k$(tmp0_elvis_lhs == null ? Companion_getInstance_21().get_Default_goqax4_k$() : tmp0_elvis_lhs, typefaceRequest.get_fontWeight_wbif2o_k$(), typefaceRequest.get_fontStyle_nhruzn_k$());
    return new Immutable(result);
  };
  function _get_fontCache__rq14qm($this) {
    return $this.fontCache_1;
  }
  function SkiaFontLoader(fontCache) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    this.fontCache_1 = fontCache;
    this.cacheKey_1 = this.fontCache_1;
  }
  protoOf(SkiaFontLoader).get_fontCollection_kf4vje_k$ = function () {
    return this.fontCache_1.get_fonts_irho7v_k$();
  };
  protoOf(SkiaFontLoader).loadBlocking_4ao78a_k$ = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.get_loadingStrategy_s3fce_k$() === Companion_getInstance_24().get_OptionalLocal_ehk5yi_k$())) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
      return null;
    }
    var tmp0_subject = font.get_loadingStrategy_s3fce_k$();
    var tmp;
    if (tmp0_subject === Companion_getInstance_24().get_Blocking_7mu9wm_k$()) {
      tmp = this.fontCache_1.load_baqy1w_k$(font);
    } else if (tmp0_subject === Companion_getInstance_24().get_OptionalLocal_ehk5yi_k$()) {
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance_4();
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        var value = this.fontCache_1.load_baqy1w_k$(font);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance_4();
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var this_0 = tmp_0;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      }
      tmp = tmp_2;
    } else if (tmp0_subject === Companion_getInstance_24().get_Async_nzjdad_k$()) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + new FontLoadingStrategy(font.get_loadingStrategy_s3fce_k$()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).loadPlatformTypes_4rma5w_k$ = function (fontFamily, fontWeight, fontStyle) {
    return this.fontCache_1.loadPlatformTypes_4rma5w_k$(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).loadPlatformTypes$default_p4u6as_k$ = function (fontFamily, fontWeight, fontStyle, $super) {
    fontWeight = fontWeight === VOID ? Companion_getInstance_27().get_Normal_22avww_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? Companion_getInstance_25().get_Normal_tevh6u_k$() : fontStyle;
    return $super === VOID ? this.loadPlatformTypes_4rma5w_k$(fontFamily, fontWeight, fontStyle) : $super.loadPlatformTypes_4rma5w_k$.call(this, fontFamily, fontWeight, new FontStyle(fontStyle));
  };
  protoOf(SkiaFontLoader).awaitLoad_kvuun9_k$ = function (font, $completion) {
    return this.loadBlocking_4ao78a_k$(font);
  };
  protoOf(SkiaFontLoader).awaitLoad_quf34a_k$ = function (font, $completion) {
    return this.awaitLoad_kvuun9_k$(font, $completion);
  };
  protoOf(SkiaFontLoader).get_cacheKey_w22q12_k$ = function () {
    return this.cacheKey_1;
  };
  function PlatformTextInputPlugin() {
  }
  function PlatformTextInputAdapter() {
  }
  function dispose(_this__u8e3s4) {
  }
  function _get_builder__bi005y($this) {
    return $this.builder_1;
  }
  function _set_paragraphCache__j6hfz1($this, _set____db54di) {
    $this.paragraphCache_1 = _set____db54di;
  }
  function _get_paragraphCache__6cm02f($this) {
    return $this.paragraphCache_1;
  }
  function _set_width__mibry7($this, _set____db54di) {
    $this.width_1 = _set____db54di;
  }
  function _get_width__9isoj9($this) {
    return $this.width_1;
  }
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.text_1 = text;
    this.builder_1 = new ParagraphBuilder_0(fontFamilyResolver, this.text_1, style, VOID, VOID, VOID, spanStyles, placeholders, density, textDirection);
    this.paragraphCache_1 = null;
    this.width_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
  }
  protoOf(ParagraphLayouter).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(ParagraphLayouter).get_defaultFont_6nsy4n_k$ = function () {
    return this.builder_1.get_defaultFont_6nsy4n_k$();
  };
  protoOf(ParagraphLayouter).get_paragraphStyle_27utpo_k$ = function () {
    return this.builder_1.get_paragraphStyle_27utpo_k$();
  };
  protoOf(ParagraphLayouter).setParagraphStyle_hogelz_k$ = function (maxLines, ellipsis) {
    if (!(this.builder_1.get_maxLines_pclpoc_k$() === maxLines) ? true : !(this.builder_1.get_ellipsis_sol6jq_k$() === ellipsis)) {
      this.builder_1.set_maxLines_r9wcpc_k$(maxLines);
      this.builder_1.set_ellipsis_iwgwtg_k$(ellipsis);
      this.paragraphCache_1 = null;
    }
  };
  protoOf(ParagraphLayouter).setTextStyle_v5mujq_k$ = function (color, shadow, textDecoration) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
      tmp = color;
    } else {
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setTextStyle.<anonymous>' call
      tmp = this.builder_1.get_textStyle_8tt25h_k$().get_color_lnp1vl_k$();
    }
    var actualColor = tmp;
    if ((!equals(this.builder_1.get_textStyle_8tt25h_k$().get_color_lnp1vl_k$(), actualColor) ? true : !equals(this.builder_1.get_textStyle_8tt25h_k$().get_shadow_jgtb8p_k$(), shadow)) ? true : !equals(this.builder_1.get_textStyle_8tt25h_k$().get_textDecoration_itgjwm_k$(), textDecoration)) {
      this.builder_1.set_textStyle_ovup7l_k$(this.builder_1.get_textStyle_8tt25h_k$().copy$default_82cxxr_k$(actualColor, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow));
      this.paragraphCache_1 = null;
    }
  };
  protoOf(ParagraphLayouter).setTextStyle_4rebey_k$ = function (brush, brushSize, alpha, shadow, textDecoration) {
    var actualSize = this.builder_1.get_brushSize_5w3nu2_k$();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (!equals(this.builder_1.get_textStyle_8tt25h_k$().get_brush_ipcjyp_k$(), brush)) {
      tmp_4 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_4 = _Size___get_packedValue__impl__7rlt1o(actualSize).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_10().get_Unspecified_3ttj0y_k$()));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !sameValueAs(_Size___get_width__impl__58y75t(actualSize), _Size___get_width__impl__58y75t(brushSize));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !sameValueAs(_Size___get_height__impl__a04p02(actualSize), _Size___get_height__impl__a04p02(brushSize));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !sameValueAs(this.builder_1.get_textStyle_8tt25h_k$().get_alpha_iooth1_k$(), alpha);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !equals(this.builder_1.get_textStyle_8tt25h_k$().get_shadow_jgtb8p_k$(), shadow);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(this.builder_1.get_textStyle_8tt25h_k$().get_textDecoration_itgjwm_k$(), textDecoration);
    }
    if (tmp) {
      this.builder_1.set_textStyle_ovup7l_k$(this.builder_1.get_textStyle_8tt25h_k$().copy$default_tzbh93_k$(brush, alpha, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow));
      this.builder_1.set_brushSize_u1ysdq_k$(brushSize);
      this.paragraphCache_1 = null;
    }
  };
  protoOf(ParagraphLayouter).setDrawStyle_16xwa2_k$ = function (drawStyle) {
    if (!equals(this.builder_1.get_drawStyle_arbehw_k$(), drawStyle)) {
      this.builder_1.set_drawStyle_e0kgyj_k$(drawStyle);
      this.paragraphCache_1 = null;
    }
  };
  protoOf(ParagraphLayouter).setBlendMode_61cb32_k$ = function (blendMode) {
    if (!(this.builder_1.get_blendMode_si209t_k$() === blendMode)) {
      this.builder_1.set_blendMode_1e5m6b_k$(blendMode);
      this.paragraphCache_1 = null;
    }
  };
  protoOf(ParagraphLayouter).layoutParagraph_6xbnfw_k$ = function (width) {
    var paragraph = this.paragraphCache_1;
    var tmp;
    if (!(paragraph == null)) {
      if (!sameValueAs(this.width_1, width)) {
        this.width_1 = width;
        paragraph.layout_x0f0tu_k$(width);
      }
      tmp = paragraph;
    } else {
      // Inline function 'kotlin.apply' call
      var this_0 = this.builder_1.build_1k0s4u_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.layoutParagraph.<anonymous>' call
      this.paragraphCache_1 = this_0;
      this_0.layout_x0f0tu_k$(width);
      tmp = this_0;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    // Inline function 'kotlin.math.abs' call
    var x = _this__u8e3s4 - other;
    return Math.abs(x) < 1.0E-5;
  }
  function get_GenericFontFamiliesMapping() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    // Inline function 'kotlin.getValue' call
    var this_0 = GenericFontFamiliesMapping$delegate;
    GenericFontFamiliesMapping$factory();
    return this_0.get_value_j01efc_k$();
  }
  var GenericFontFamiliesMapping$delegate;
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  function values_1() {
    return [Platform_Unknown_getInstance(), Platform_Linux_getInstance(), Platform_Windows_getInstance(), Platform_MacOS_getInstance(), Platform_IOS_getInstance(), Platform_TvOS_getInstance(), Platform_WatchOS_getInstance(), Platform_Android_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Unknown':
        return Platform_Unknown_getInstance();
      case 'Linux':
        return Platform_Linux_getInstance();
      case 'Windows':
        return Platform_Windows_getInstance();
      case 'MacOS':
        return Platform_MacOS_getInstance();
      case 'IOS':
        return Platform_IOS_getInstance();
      case 'TvOS':
        return Platform_TvOS_getInstance();
      case 'WatchOS':
        return Platform_WatchOS_getInstance();
      case 'Android':
        return Platform_Android_getInstance();
      default:
        Platform_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_Unknown_instance = new Platform('Unknown', 0);
    Platform_Linux_instance = new Platform('Linux', 1);
    Platform_Windows_instance = new Platform('Windows', 2);
    Platform_MacOS_instance = new Platform('MacOS', 3);
    Platform_IOS_instance = new Platform('IOS', 4);
    Platform_TvOS_instance = new Platform('TvOS', 5);
    Platform_WatchOS_instance = new Platform('WatchOS', 6);
    Platform_Android_instance = new Platform('Android', 7);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_$stableprop_55() {
    return 8;
  }
  function FontLoadResult(typeface, aliases) {
    this.typeface_1 = typeface;
    this.aliases_1 = aliases;
    this.$stable_1 = 8;
  }
  protoOf(FontLoadResult).get_typeface_s1tqao_k$ = function () {
    return this.typeface_1;
  };
  protoOf(FontLoadResult).get_aliases_duxpez_k$ = function () {
    return this.aliases_1;
  };
  function get_$stableprop_56() {
    return 0;
  }
  function FontLoader() {
    this.fontCache_1 = new FontCache();
    this.fontFamilyResolver_1 = createFontFamilyResolver_1(this.fontCache_1);
    this.$stable_1 = 0;
  }
  protoOf(FontLoader).get_fontCache_he0l6e_k$ = function () {
    return this.fontCache_1;
  };
  protoOf(FontLoader).get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  protoOf(FontLoader).load_1hfgn9_k$ = function (font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    return ensureNotNull(this.fontCache_1.load_baqy1w_k$(font).typeface_1);
  };
  function _get_fontProvider__mhw44r($this) {
    return $this.fontProvider_1;
  }
  function _get_registered__4jyert($this) {
    return $this.registered_1;
  }
  function _get_typefacesCache__6c5nz9($this) {
    return $this.typefacesCache_1;
  }
  function mapGenericFontFamily($this, generic) {
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().get_wei43m_k$(generic.get_name_woqyms_k$());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unknown generic font family ' + generic.get_name_woqyms_k$();
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.registered_1.contains_aljjnj_k$(key)) {
      $this.fontProvider_1.registerTypeface_y1keh7_k$(typeface, key);
      $this.registered_1.add_utx5q5_k$(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + fontFamily);
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_0 = fontFamily.get_typeface_s1tqao_k$();
        var typeface = tmp_0 instanceof SkiaBackedTypeface ? tmp_0 : THROW_CCE();
        var tmp1_elvis_lhs = typeface.alias_1;
        var alias = tmp1_elvis_lhs == null ? typeface.nativeTypeface_1.get_familyName_6ytaaw_k$() : tmp1_elvis_lhs;
        ensureRegistered($this, typeface.nativeTypeface_1, alias);
        tmp = listOf_0(alias);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = mapGenericFontFamily($this, fontFamily);
        } else {
          if (equals(fontFamily, Companion_getInstance_21().get_Default_goqax4_k$())) {
            tmp = mapGenericFontFamily($this, Companion_getInstance_21().get_SansSerif_4qz17l_k$());
          } else {
            throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + fontFamily);
          }
        }
      }
    }
    return tmp;
  }
  function FontCache$load$lambda($font) {
    return function (it) {
      return loadTypeface($font);
    };
  }
  function FontCache() {
    this.fonts_1 = FontCollection_init_$Create$();
    this.fontProvider_1 = new TypefaceFontProvider();
    this.registered_1 = HashSet_init_$Create$_0();
    this.typefacesCache_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.fonts_1.setDefaultFontManager_gweqxp_k$(Companion_getInstance_11().get_default_qtagd4_k$());
    this.fonts_1.setAssetFontManager_9z4eus_k$(this.fontProvider_1);
  }
  protoOf(FontCache).get_fonts_irho7v_k$ = function () {
    return this.fonts_1;
  };
  protoOf(FontCache).load_baqy1w_k$ = function (font) {
    var tmp = font.get_cacheKey_w22q12_k$();
    var typeface = this.typefacesCache_1.get_c3034i_k$(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.get_cacheKey_w22q12_k$());
    return new FontLoadResult(typeface, listOf_0(font.get_cacheKey_w22q12_k$()));
  };
  protoOf(FontCache).loadPlatformTypes_4rma5w_k$ = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).withWeight_ue6mre_k$(fontWeight.get_weight_lbhkzl_k$());
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_1(this.fonts_1.findTypefaces_448rqd_k$(tmp$ret$0, style)), aliases);
  };
  protoOf(FontCache).loadPlatformTypes$default_ho20jj_k$ = function (fontFamily, fontWeight, fontStyle, $super) {
    fontWeight = fontWeight === VOID ? Companion_getInstance_27().get_Normal_22avww_k$() : fontWeight;
    fontStyle = fontStyle === VOID ? Companion_getInstance_25().get_Normal_tevh6u_k$() : fontStyle;
    return $super === VOID ? this.loadPlatformTypes_4rma5w_k$(fontFamily, fontWeight, fontStyle) : $super.loadPlatformTypes_4rma5w_k$.call(this, fontFamily, fontWeight, new FontStyle(fontStyle));
  };
  function SkiaBackedTypeface(alias, nativeTypeface) {
    this.alias_1 = alias;
    this.nativeTypeface_1 = nativeTypeface;
    this.fontFamily_1 = null;
  }
  protoOf(SkiaBackedTypeface).get_alias_iooo4n_k$ = function () {
    return this.alias_1;
  };
  protoOf(SkiaBackedTypeface).get_nativeTypeface_sttuqf_k$ = function () {
    return this.nativeTypeface_1;
  };
  protoOf(SkiaBackedTypeface).get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  function get_$stableprop_57() {
    return 0;
  }
  function LoadedFont(identity, data, weight, style) {
    PlatformFont.call(this);
    this.identity_1 = identity;
    this.data_1 = data;
    this.weight_1 = weight;
    this.style_1 = style;
    this.loadingStrategy_1 = Companion_getInstance_24().get_Blocking_7mu9wm_k$();
    this.$stable_2 = 0;
  }
  protoOf(LoadedFont).get_identity_y1rl2x_k$ = function () {
    return this.identity_1;
  };
  protoOf(LoadedFont).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(LoadedFont).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(LoadedFont).get_style_fnlxse_k$ = function () {
    return this.style_1;
  };
  protoOf(LoadedFont).get_loadingStrategy_s3fce_k$ = function () {
    return this.loadingStrategy_1;
  };
  protoOf(LoadedFont).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoadedFont))
      return false;
    if (!(this.identity_1 === other.identity_1))
      return false;
    if (!this.weight_1.equals(other.weight_1))
      return false;
    return this.style_1 === other.style_1;
  };
  protoOf(LoadedFont).hashCode = function () {
    var result = getStringHashCode(this.identity_1);
    result = imul(31, result) + this.weight_1.hashCode() | 0;
    result = imul(31, result) + FontStyle__hashCode_impl_7qhg4w(this.style_1) | 0;
    return result;
  };
  protoOf(LoadedFont).toString = function () {
    return "LoadedFont(identity='" + this.identity_1 + "', weight=" + this.weight_1 + ', style=' + new FontStyle(this.style_1) + ')';
  };
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_21().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf(['Noto Sans', 'DejaVu Sans'])), to(Companion_getInstance_21().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_21().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf(['Noto Sans Mono', 'DejaVu Sans Mono'])), to(Companion_getInstance_21().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_21().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_21().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf_0('Times New Roman')), to(Companion_getInstance_21().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf_0('Consolas')), to(Companion_getInstance_21().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_21().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_21().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_21().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_21().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_21().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_21().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_21().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_21().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_21().get_SansSerif_4qz17l_k$().get_name_woqyms_k$(), listOf_0('Arial')), to(Companion_getInstance_21().get_Serif_igv9ro_k$().get_name_woqyms_k$(), listOf_0('Times New Roman')), to(Companion_getInstance_21().get_Monospace_hz2yii_k$().get_name_woqyms_k$(), listOf_0('Consolas')), to(Companion_getInstance_21().get_Cursive_nlhumc_k$().get_name_woqyms_k$(), listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_IOS_getInstance() {
    Platform_initEntries();
    return Platform_IOS_instance;
  }
  function Platform_TvOS_getInstance() {
    Platform_initEntries();
    return Platform_TvOS_instance;
  }
  function Platform_WatchOS_getInstance() {
    Platform_initEntries();
    return Platform_WatchOS_instance;
  }
  function Platform_Android_getInstance() {
    Platform_initEntries();
    return Platform_Android_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return get_GenericFontFamiliesMapping();
    }, null);
  }
  var properties_initialized_PlatformFont_skiko_kt_pdb6wl;
  function _init_properties_PlatformFont_skiko_kt__1fvojb() {
    if (!properties_initialized_PlatformFont_skiko_kt_pdb6wl) {
      properties_initialized_PlatformFont_skiko_kt_pdb6wl = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
    }
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    alpha = alpha === VOID ? FloatCompanionObject_getInstance().get_NaN_18jnv2_k$() : alpha;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_12().get_SrcOver_anr685_k$() : blendMode;
    canvas.save_fbe7h_k$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.get_paragraphInfoList_5kk1wv_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.get_paragraph_ua17wb_k$().paint_t6aqss_k$(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.translate_7gghdu_k$(0.0, item.get_paragraph_ua17wb_k$().get_height_e7t92o_k$());
      }
       while (inductionVariable <= last);
    canvas.restore_a1ykhu_k$();
  }
  function get_DefaultFontSize_0() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  function ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, $this) {
    brushSize = brushSize === VOID ? Companion_getInstance_10().get_Unspecified_3ttj0y_k$() : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().get_DefaultBlendMode_svct2m_k$() : blendMode;
    var tmp = spanStyle.get_textForegroundStyle_1frzu0_k$();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
    var tmp_0 = density.toPx_plt68j_k$(spanStyle.get_fontSize_ergf2z_k$());
    var tmp_1 = spanStyle.get_fontWeight_wbif2o_k$();
    var tmp_2 = spanStyle.get_fontStyle_hzv4zg_k$();
    var tmp_3 = spanStyle.get_fontSynthesis_h5auiy_k$();
    var tmp_4 = spanStyle.get_fontFamily_ulphcs_k$();
    var tmp_5 = spanStyle.get_fontFeatureSettings_a47533_k$();
    var tmp_6;
    if (get_isUnspecified(spanStyle.get_letterSpacing_k79xfu_k$())) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
      tmp_6 = density.toPx_plt68j_k$(spanStyle.get_letterSpacing_k79xfu_k$());
    }
    ComputedStyle.call($this, tmp, brushSize, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, spanStyle.get_baselineShift_99zyho_k$(), spanStyle.get_textGeometricTransform_tdfmin_k$(), spanStyle.get_localeList_1gj9gh_k$(), spanStyle.get_background_8l4942_k$(), spanStyle.get_textDecoration_itgjwm_k$(), spanStyle.get_shadow_jgtb8p_k$(), spanStyle.get_drawStyle_arbehw_k$(), blendMode);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, objectCreate(protoOf(ComputedStyle)));
  }
  function toTextPaint($this) {
    // Inline function 'kotlin.let' call
    var this_0 = Paint_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = asComposePaint(this_0);
      $this$with.set_color_m2amxp_k$($this.textForegroundStyle_1.get_color_lnp1vl_k$());
      applyBrush($this$with, $this.textForegroundStyle_1.get_brush_ipcjyp_k$(), $this.brushSize_1, $this.textForegroundStyle_1.get_alpha_iooth1_k$());
      applyDrawStyle($this$with, $this.drawStyle_1);
      $this$with.set_blendMode_1e5m6b_k$($this.blendMode_1);
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>.<anonymous>.<anonymous>' call
      if ((!($this$with.get_shader_jgtazy_k$() == null) ? true : !($this$with.get_style_h1bxuj_k$() === Companion_getInstance_13().get_Fill_7xey15_k$())) ? true : !this_0.get_isSrcOver_xdt2zf_k$()) {
        tmp = this_0;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
      break $l$block;
    }
    return tmp$ret$2;
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, blendMode) {
    background = background === VOID ? Companion_getInstance().get_Unspecified_j397pn_k$() : background;
    this.textForegroundStyle_1 = textForegroundStyle;
    this.brushSize_1 = brushSize;
    this.fontSize_1 = fontSize;
    this.fontWeight_1 = fontWeight;
    this.fontStyle_1 = fontStyle;
    this.fontSynthesis_1 = fontSynthesis;
    this.fontFamily_1 = fontFamily;
    this.fontFeatureSettings_1 = fontFeatureSettings;
    this.letterSpacing_1 = letterSpacing;
    this.baselineShift_1 = baselineShift;
    this.textGeometricTransform_1 = textGeometricTransform;
    this.localeList_1 = localeList;
    this.background_1 = background;
    this.textDecoration_1 = textDecoration;
    this.shadow_1 = shadow;
    this.drawStyle_1 = drawStyle;
    this.blendMode_1 = blendMode;
  }
  protoOf(ComputedStyle).set_textForegroundStyle_kdgspt_k$ = function (_set____db54di) {
    this.textForegroundStyle_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_textForegroundStyle_1frzu0_k$ = function () {
    return this.textForegroundStyle_1;
  };
  protoOf(ComputedStyle).set_brushSize_u1ysdq_k$ = function (_set____db54di) {
    this.brushSize_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_brushSize_5w3nu2_k$ = function () {
    return this.brushSize_1;
  };
  protoOf(ComputedStyle).set_fontSize_ywm6aj_k$ = function (_set____db54di) {
    this.fontSize_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(ComputedStyle).set_fontWeight_pwfx34_k$ = function (_set____db54di) {
    this.fontWeight_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(ComputedStyle).set_fontStyle_h15b5y_k$ = function (_set____db54di) {
    this.fontStyle_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontStyle_hzv4zg_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(ComputedStyle).set_fontSynthesis_i57yq4_k$ = function (_set____db54di) {
    this.fontSynthesis_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontSynthesis_h5auiy_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(ComputedStyle).set_fontFamily_maldhw_k$ = function (_set____db54di) {
    this.fontFamily_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(ComputedStyle).set_fontFeatureSettings_kup0sq_k$ = function (_set____db54di) {
    this.fontFeatureSettings_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_fontFeatureSettings_a47533_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  protoOf(ComputedStyle).set_letterSpacing_d8gj3f_k$ = function (_set____db54di) {
    this.letterSpacing_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_letterSpacing_xp4v84_k$ = function () {
    return this.letterSpacing_1;
  };
  protoOf(ComputedStyle).set_baselineShift_eg376w_k$ = function (_set____db54di) {
    this.baselineShift_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_baselineShift_99zyho_k$ = function () {
    return this.baselineShift_1;
  };
  protoOf(ComputedStyle).set_textGeometricTransform_xpqoye_k$ = function (_set____db54di) {
    this.textGeometricTransform_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_textGeometricTransform_tdfmin_k$ = function () {
    return this.textGeometricTransform_1;
  };
  protoOf(ComputedStyle).set_localeList_mjnofb_k$ = function (_set____db54di) {
    this.localeList_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_localeList_1gj9gh_k$ = function () {
    return this.localeList_1;
  };
  protoOf(ComputedStyle).set_background_jj6oi0_k$ = function (_set____db54di) {
    this.background_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_background_8l4942_k$ = function () {
    return this.background_1;
  };
  protoOf(ComputedStyle).set_textDecoration_xbo67o_k$ = function (_set____db54di) {
    this.textDecoration_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_textDecoration_itgjwm_k$ = function () {
    return this.textDecoration_1;
  };
  protoOf(ComputedStyle).set_shadow_bl41xa_k$ = function (_set____db54di) {
    this.shadow_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_shadow_jgtb8p_k$ = function () {
    return this.shadow_1;
  };
  protoOf(ComputedStyle).set_drawStyle_e0kgyj_k$ = function (_set____db54di) {
    this.drawStyle_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_drawStyle_arbehw_k$ = function () {
    return this.drawStyle_1;
  };
  protoOf(ComputedStyle).set_blendMode_1e5m6b_k$ = function (_set____db54di) {
    this.blendMode_1 = _set____db54di;
  };
  protoOf(ComputedStyle).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(ComputedStyle).toSkTextStyle_msc8ka_k$ = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.textForegroundStyle_1.get_color_lnp1vl_k$();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
      res.set_color_7ztbpe_k$(toArgb(this.textForegroundStyle_1.get_color_lnp1vl_k$()));
    }
    var foreground = toTextPaint(this);
    if (!(foreground == null)) {
      res.set_foreground_im42hg_k$(foreground);
    }
    var tmp0_safe_receiver = this.fontStyle_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).value_1;
      res.set_fontStyle_vxzafm_k$(toSkFontStyle(it));
    }
    var tmp1_safe_receiver = this.textDecoration_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.set_decorationStyle_6iapf7_k$(toSkDecorationStyle(tmp1_safe_receiver, this.textForegroundStyle_1.get_color_lnp1vl_k$()));
    }
    if (!equals(this.background_1, Companion_getInstance().get_Unspecified_j397pn_k$())) {
      // Inline function 'kotlin.also' call
      var this_1 = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      this_1.set_color_7ztbpe_k$(toArgb(this.background_1));
      res.set_background_zaucsh_k$(this_1);
    }
    var tmp2_safe_receiver = this.fontWeight_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.set_fontStyle_vxzafm_k$(res.get_fontStyle_h4vaiv_k$().withWeight_ue6mre_k$(tmp2_safe_receiver.get_weight_lbhkzl_k$()));
    }
    var tmp3_safe_receiver = this.shadow_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.addShadow_pe2457_k$(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.letterSpacing_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.set_letterSpacing_k6mf0o_k$(tmp4_safe_receiver);
    }
    var tmp_1 = Companion_getInstance_14();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.fontFeatureSettings_1;
    var tmp$ret$8 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.addFontFeatures_lx2w9d_k$(tmp_1.parseW3_f4iaol_k$(tmp$ret$8));
    res.set_fontSize_ywm6aj_k$(this.fontSize_1);
    var tmp5_safe_receiver = this.fontFamily_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.fontWeight_1;
      var tmp_2 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_27().get_Normal_22avww_k$() : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.fontStyle_1;
      var tmp_3;
      var tmp_4 = tmp1_elvis_lhs;
      if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
        tmp_3 = Companion_getInstance_25().get_Normal_tevh6u_k$();
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_5 = tmp_3;
      var tmp2_elvis_lhs = this.fontSynthesis_1;
      var tmp_6;
      var tmp_7 = tmp2_elvis_lhs;
      if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
        tmp_6 = Companion_getInstance_26().get_None_4h38ia_k$();
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var tmp_8 = fontFamilyResolver.resolve_q3h1fi_k$(tmp5_safe_receiver, tmp_2, tmp_5, tmp_6).get_value_j01efc_k$();
      var resolved = tmp_8 instanceof FontLoadResult ? tmp_8 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = resolved.get_aliases_duxpez_k$();
      var tmp$ret$9 = copyToArray(this_2);
      res.set_fontFamilies_1qji0k_k$(tmp$ret$9);
    }
    var tmp6_safe_receiver = this.baselineShift_1;
    var tmp_9 = tmp6_safe_receiver;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_10 = tmp6_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it_0 = (tmp_10 == null ? null : new BaselineShift(tmp_10)).multiplier_1;
      var fontMetrics = res.get_fontMetrics_c0s645_k$();
      res.set_baselineShift_pi9thk_k$(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.get_ascent_b435cz_k$());
    }
    return res;
  };
  protoOf(ComputedStyle).merge_2xkpvi_k$ = function (density, other) {
    var fontSize = fontSizeInHierarchy(density, this.fontSize_1, other.get_fontSize_ergf2z_k$());
    this.textForegroundStyle_1 = this.textForegroundStyle_1.merge_b7txoj_k$(other.get_textForegroundStyle_1frzu0_k$());
    var tmp0_safe_receiver = other.get_fontFamily_ulphcs_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fontFamily_1 = tmp0_safe_receiver;
    }
    this.fontSize_1 = fontSize;
    var tmp1_safe_receiver = other.get_fontWeight_wbif2o_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fontWeight_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.get_fontStyle_hzv4zg_k$();
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.fontStyle_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).value_1;
    }
    var tmp3_safe_receiver = other.get_fontSynthesis_h5auiy_k$();
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.fontSynthesis_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).value_1;
    }
    var tmp4_safe_receiver = other.get_fontFeatureSettings_a47533_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.fontFeatureSettings_1 = tmp4_safe_receiver;
    }
    if (!get_isUnspecified(other.get_letterSpacing_k79xfu_k$())) {
      var tmp_3 = this;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      var $this$with = other.get_letterSpacing_k79xfu_k$();
      var tmp_4;
      if (_TextUnit___get_isEm__impl__esrmtl($this$with)) {
        tmp_4 = fontSize * _TextUnit___get_value__impl__hpbx0k($this$with);
      } else if (_TextUnit___get_isSp__impl__8c3r6q($this$with)) {
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>.<anonymous>' call
        tmp_4 = density.toPx_plt68j_k$($this$with);
      } else {
        throw UnsupportedOperationException_init_$Create$_0();
      }
      tmp_3.letterSpacing_1 = tmp_4;
    }
    var tmp5_safe_receiver = other.get_baselineShift_99zyho_k$();
    var tmp_5 = tmp5_safe_receiver;
    if ((tmp_5 == null ? null : new BaselineShift(tmp_5)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_6 = tmp5_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.baselineShift_1 = (tmp_6 == null ? null : new BaselineShift(tmp_6)).multiplier_1;
    }
    var tmp6_safe_receiver = other.get_textGeometricTransform_tdfmin_k$();
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.textGeometricTransform_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.get_localeList_1gj9gh_k$();
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.localeList_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = other.get_background_8l4942_k$();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()))) {
      this.background_1 = other.get_background_8l4942_k$();
    }
    var tmp8_safe_receiver = other.get_textDecoration_itgjwm_k$();
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.textDecoration_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.get_shadow_jgtb8p_k$();
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.shadow_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.get_drawStyle_arbehw_k$();
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.drawStyle_1 = tmp10_safe_receiver;
    }
  };
  protoOf(ComputedStyle).component1_7eebsc_k$ = function () {
    return this.textForegroundStyle_1;
  };
  protoOf(ComputedStyle).component2_oaylq1_k$ = function () {
    return this.brushSize_1;
  };
  protoOf(ComputedStyle).component3_7eebsa_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(ComputedStyle).component4_7eebs9_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(ComputedStyle).component5_s34n7n_k$ = function () {
    return this.fontStyle_1;
  };
  protoOf(ComputedStyle).component6_f98x3_k$ = function () {
    return this.fontSynthesis_1;
  };
  protoOf(ComputedStyle).component7_7eebs6_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(ComputedStyle).component8_7eebs5_k$ = function () {
    return this.fontFeatureSettings_1;
  };
  protoOf(ComputedStyle).component9_7eebs4_k$ = function () {
    return this.letterSpacing_1;
  };
  protoOf(ComputedStyle).component10_8y7g9w_k$ = function () {
    return this.baselineShift_1;
  };
  protoOf(ComputedStyle).component11_gazzfn_k$ = function () {
    return this.textGeometricTransform_1;
  };
  protoOf(ComputedStyle).component12_gazzfm_k$ = function () {
    return this.localeList_1;
  };
  protoOf(ComputedStyle).component13_asgeey_k$ = function () {
    return this.background_1;
  };
  protoOf(ComputedStyle).component14_gazzfk_k$ = function () {
    return this.textDecoration_1;
  };
  protoOf(ComputedStyle).component15_gazzfj_k$ = function () {
    return this.shadow_1;
  };
  protoOf(ComputedStyle).component16_gazzfi_k$ = function () {
    return this.drawStyle_1;
  };
  protoOf(ComputedStyle).component17_xpyy8p_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(ComputedStyle).copy_x4jhhp_k$ = function (textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, blendMode) {
    return new ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, blendMode);
  };
  protoOf(ComputedStyle).copy$default_uazbm4_k$ = function (textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, blendMode, $super) {
    textForegroundStyle = textForegroundStyle === VOID ? this.textForegroundStyle_1 : textForegroundStyle;
    brushSize = brushSize === VOID ? this.brushSize_1 : brushSize;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.fontStyle_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.fontSynthesis_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.fontFeatureSettings_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.letterSpacing_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.baselineShift_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.textGeometricTransform_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.localeList_1 : localeList;
    background = background === VOID ? this.background_1 : background;
    textDecoration = textDecoration === VOID ? this.textDecoration_1 : textDecoration;
    shadow = shadow === VOID ? this.shadow_1 : shadow;
    drawStyle = drawStyle === VOID ? this.drawStyle_1 : drawStyle;
    blendMode = blendMode === VOID ? this.blendMode_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_x4jhhp_k$(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, blendMode);
    } else {
      var tmp_0 = $super.copy_x4jhhp_k$;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, textForegroundStyle, new Size_0(brushSize), fontSize, fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, letterSpacing, tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = this.textForegroundStyle_1;
    var tmp_0 = this.brushSize_1;
    var tmp_1 = this.fontSize_1;
    var tmp_2 = this.fontWeight_1;
    var tmp_3 = this.fontStyle_1;
    var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
    var tmp_5 = this.fontSynthesis_1;
    var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
    var tmp_7 = this.fontFamily_1;
    var tmp_8 = this.fontFeatureSettings_1;
    var tmp_9 = this.letterSpacing_1;
    var tmp_10 = this.baselineShift_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + new Size_0(tmp_0) + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + (tmp_10 == null ? null : new BaselineShift(tmp_10)) + ', textGeometricTransform=' + this.textGeometricTransform_1 + ', localeList=' + this.localeList_1 + ', background=' + new Color(this.background_1) + ', textDecoration=' + this.textDecoration_1 + ', shadow=' + this.shadow_1 + ', drawStyle=' + this.drawStyle_1 + ', blendMode=' + new BlendMode(this.blendMode_1) + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.textForegroundStyle_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.brushSize_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.fontSize_1) | 0;
    result = imul(result, 31) + (this.fontWeight_1 == null ? 0 : this.fontWeight_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.fontStyle_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.fontStyle_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.fontSynthesis_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.fontSynthesis_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.fontFamily_1 == null ? 0 : hashCode(this.fontFamily_1)) | 0;
    result = imul(result, 31) + (this.fontFeatureSettings_1 == null ? 0 : getStringHashCode(this.fontFeatureSettings_1)) | 0;
    result = imul(result, 31) + (this.letterSpacing_1 == null ? 0 : getNumberHashCode(this.letterSpacing_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.baselineShift_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.baselineShift_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.textGeometricTransform_1 == null ? 0 : this.textGeometricTransform_1.hashCode()) | 0;
    result = imul(result, 31) + (this.localeList_1 == null ? 0 : this.localeList_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    result = imul(result, 31) + (this.textDecoration_1 == null ? 0 : this.textDecoration_1.hashCode()) | 0;
    result = imul(result, 31) + (this.shadow_1 == null ? 0 : this.shadow_1.hashCode()) | 0;
    result = imul(result, 31) + (this.drawStyle_1 == null ? 0 : hashCode(this.drawStyle_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.blendMode_1) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.textForegroundStyle_1, tmp0_other_with_cast.textForegroundStyle_1))
      return false;
    if (!equals(this.brushSize_1, tmp0_other_with_cast.brushSize_1))
      return false;
    if (!equals(this.fontSize_1, tmp0_other_with_cast.fontSize_1))
      return false;
    if (!equals(this.fontWeight_1, tmp0_other_with_cast.fontWeight_1))
      return false;
    var tmp = this.fontStyle_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.fontStyle_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.fontSynthesis_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.fontSynthesis_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.fontFamily_1, tmp0_other_with_cast.fontFamily_1))
      return false;
    if (!(this.fontFeatureSettings_1 == tmp0_other_with_cast.fontFeatureSettings_1))
      return false;
    if (!equals(this.letterSpacing_1, tmp0_other_with_cast.letterSpacing_1))
      return false;
    var tmp_5 = this.baselineShift_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.baselineShift_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.textGeometricTransform_1, tmp0_other_with_cast.textGeometricTransform_1))
      return false;
    if (!equals(this.localeList_1, tmp0_other_with_cast.localeList_1))
      return false;
    if (!equals(this.background_1, tmp0_other_with_cast.background_1))
      return false;
    if (!equals(this.textDecoration_1, tmp0_other_with_cast.textDecoration_1))
      return false;
    if (!equals(this.shadow_1, tmp0_other_with_cast.shadow_1))
      return false;
    if (!equals(this.drawStyle_1, tmp0_other_with_cast.drawStyle_1))
      return false;
    if (!(this.blendMode_1 === tmp0_other_with_cast.blendMode_1))
      return false;
    return true;
  };
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return _this__u8e3s4 === Companion_getInstance_25().get_Italic_5ol4ot_k$() ? Companion_getInstance_15().get_ITALIC_qnnif_k$() : Companion_getInstance_15().get_NORMAL_1k4cts_k$();
  }
  function toSkDecorationStyle(_this__u8e3s4, color) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var underline = _this__u8e3s4.contains_8so89q_k$(Companion_getInstance_45().get_Underline_oo7egz_k$());
    var overline = false;
    var lineThrough = _this__u8e3s4.contains_8so89q_k$(Companion_getInstance_45().get_LineThrough_pr9ajs_k$());
    var gaps = false;
    var lineStyle = DecorationLineStyle_SOLID_getInstance();
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new Shadow_0(toArgb(_this__u8e3s4.get_color_lnp1vl_k$()), _Offset___get_x__impl__xvi35n(_this__u8e3s4.get_offset_slhc8e_k$()), _Offset___get_y__impl__8bzhra(_this__u8e3s4.get_offset_slhc8e_k$()), _this__u8e3s4.get_blurRadius_r8jo0y_k$());
  }
  function fontSizeInHierarchy(density, base, other) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(other)) {
      tmp = base;
    } else if (_TextUnit___get_isEm__impl__esrmtl(other)) {
      tmp = base * _TextUnit___get_value__impl__hpbx0k(other);
    } else if (_TextUnit___get_isSp__impl__8c3r6q(other)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.fontSizeInHierarchy.<anonymous>' call
      tmp = density.toPx_plt68j_k$(other);
    } else {
      var message = 'Unexpected size in fontSizeInHierarchy';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, ellipsis, constraints);
  }
  function cursorHorizontalPosition(_this__u8e3s4, opposite) {
    opposite = opposite === VOID ? false : opposite;
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    switch (_this__u8e3s4.get_direction_7ekune_k$().get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = opposite ? _this__u8e3s4.get_rect_wotlbh_k$().get_left_woprgw_k$() : _this__u8e3s4.get_rect_wotlbh_k$().get_right_ixz7xv_k$();
        break;
      case 0:
        tmp = opposite ? _this__u8e3s4.get_rect_wotlbh_k$().get_right_ixz7xv_k$() : _this__u8e3s4.get_rect_wotlbh_k$().get_left_woprgw_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_$stableprop_58() {
    return 8;
  }
  function get_$stableprop_59() {
    return 8;
  }
  function get_$stableprop_60() {
    return 8;
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.position_1 = position;
    this.style_1 = style;
    this.$stable_1 = 8;
  }
  protoOf(StyleAdd).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleAdd).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleAdd).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleAdd).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleAdd).copy_laiai5_k$ = function (position, style) {
    return new StyleAdd(position, style);
  };
  protoOf(StyleAdd).copy$default_s6vvkq_k$ = function (position, style, $super) {
    position = position === VOID ? this.position_1 : position;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_laiai5_k$(position, style) : $super.copy_laiai5_k$.call(this, position, style);
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.position_1 + ', style=' + this.style_1 + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.cut_1 = cut;
    this.width_1 = width;
    this.height_1 = height;
    this.position$delegate_1 = position$factory(this.cut_1);
    this.$stable_1 = 8;
  }
  protoOf(PutPlaceholder).get_cut_18j7s7_k$ = function () {
    return this.cut_1;
  };
  protoOf(PutPlaceholder).set_width_h6zvj3_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(PutPlaceholder).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(PutPlaceholder).set_height_w1sw3g_k$ = function (_set____db54di) {
    this.height_1 = _set____db54di;
  };
  protoOf(PutPlaceholder).get_height_e7t92o_k$ = function () {
    return this.height_1;
  };
  protoOf(PutPlaceholder).get_position_jfponi_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.position$delegate_1;
    position$factory_0();
    return this_0.get();
  };
  protoOf(PutPlaceholder).component1_7eebsc_k$ = function () {
    return this.cut_1;
  };
  protoOf(PutPlaceholder).component2_7eebsb_k$ = function () {
    return this.width_1;
  };
  protoOf(PutPlaceholder).component3_7eebsa_k$ = function () {
    return this.height_1;
  };
  protoOf(PutPlaceholder).copy_py3n8e_k$ = function (cut, width, height) {
    return new PutPlaceholder(cut, width, height);
  };
  protoOf(PutPlaceholder).copy$default_xwjqdu_k$ = function (cut, width, height, $super) {
    cut = cut === VOID ? this.cut_1 : cut;
    width = width === VOID ? this.width_1 : width;
    height = height === VOID ? this.height_1 : height;
    return $super === VOID ? this.copy_py3n8e_k$(cut, width, height) : $super.copy_py3n8e_k$.call(this, cut, width, height);
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.cut_1 + ', width=' + this.width_1 + ', height=' + this.height_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.cut_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.width_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.height_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.cut_1.equals(tmp0_other_with_cast.cut_1))
      return false;
    if (!equals(this.width_1, tmp0_other_with_cast.width_1))
      return false;
    if (!equals(this.height_1, tmp0_other_with_cast.height_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.cut_1 = cut;
    this.position$delegate_1 = position$factory_1(this.cut_1);
    this.$stable_1 = 8;
  }
  protoOf(EndPlaceholder).get_cut_18j7s7_k$ = function () {
    return this.cut_1;
  };
  protoOf(EndPlaceholder).get_position_jfponi_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.position$delegate_1;
    position$factory_2();
    return this_0.get();
  };
  protoOf(EndPlaceholder).component1_7eebsc_k$ = function () {
    return this.cut_1;
  };
  protoOf(EndPlaceholder).copy_kb6psi_k$ = function (cut) {
    return new EndPlaceholder(cut);
  };
  protoOf(EndPlaceholder).copy$default_45vb9g_k$ = function (cut, $super) {
    cut = cut === VOID ? this.cut_1 : cut;
    return $super === VOID ? this.copy_kb6psi_k$(cut) : $super.copy_kb6psi_k$.call(this, cut);
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.cut_1 + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.cut_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.cut_1.equals(tmp0_other_with_cast.cut_1))
      return false;
    return true;
  };
  function get_$stableprop_61() {
    return 0;
  }
  function get_$stableprop_62() {
    return 0;
  }
  function get_$stableprop_63() {
    return 0;
  }
  function get_$stableprop_64() {
    return 0;
  }
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.position_1 = position;
    this.style_1 = style;
    this.$stable_1 = 0;
  }
  protoOf(StyleAdd_0).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleAdd_0).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleAdd_0).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleAdd_0).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleAdd_0).copy_vvecmi_k$ = function (position, style) {
    return new StyleAdd_0(position, style);
  };
  protoOf(StyleAdd_0).copy$default_6k9ayl_k$ = function (position, style, $super) {
    position = position === VOID ? this.position_1 : position;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_vvecmi_k$(position, style) : $super.copy_vvecmi_k$.call(this, position, style);
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.position_1 + ', style=' + this.style_1 + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.position_1 = position;
    this.style_1 = style;
    this.$stable_1 = 0;
  }
  protoOf(StyleRemove).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleRemove).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleRemove).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(StyleRemove).component2_7eebsb_k$ = function () {
    return this.style_1;
  };
  protoOf(StyleRemove).copy_vvecmi_k$ = function (position, style) {
    return new StyleRemove(position, style);
  };
  protoOf(StyleRemove).copy$default_ygqbhq_k$ = function (position, style, $super) {
    position = position === VOID ? this.position_1 : position;
    style = style === VOID ? this.style_1 : style;
    return $super === VOID ? this.copy_vvecmi_k$(position, style) : $super.copy_vvecmi_k$.call(this, position, style);
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.position_1 + ', style=' + this.style_1 + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.position_1 = position;
    this.placeholder_1 = placeholder;
    this.$stable_1 = 0;
  }
  protoOf(PutPlaceholder_0).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(PutPlaceholder_0).get_placeholder_nsdr0q_k$ = function () {
    return this.placeholder_1;
  };
  protoOf(PutPlaceholder_0).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(PutPlaceholder_0).component2_7eebsb_k$ = function () {
    return this.placeholder_1;
  };
  protoOf(PutPlaceholder_0).copy_lkujcy_k$ = function (position, placeholder) {
    return new PutPlaceholder_0(position, placeholder);
  };
  protoOf(PutPlaceholder_0).copy$default_foy0tf_k$ = function (position, placeholder, $super) {
    position = position === VOID ? this.position_1 : position;
    placeholder = placeholder === VOID ? this.placeholder_1 : placeholder;
    return $super === VOID ? this.copy_lkujcy_k$(position, placeholder) : $super.copy_lkujcy_k$.call(this, position, placeholder);
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.position_1 + ', placeholder=' + this.placeholder_1 + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.position_1;
    result = imul(result, 31) + this.placeholder_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    if (!this.placeholder_1.equals(tmp0_other_with_cast.placeholder_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.position_1 = position;
    this.$stable_1 = 0;
  }
  protoOf(EndPlaceholder_0).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(EndPlaceholder_0).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(EndPlaceholder_0).copy_ns6qmb_k$ = function (position) {
    return new EndPlaceholder_0(position);
  };
  protoOf(EndPlaceholder_0).copy$default_aj7p6t_k$ = function (position, $super) {
    position = position === VOID ? this.position_1 : position;
    return $super === VOID ? this.copy_ns6qmb_k$(position) : $super.copy_ns6qmb_k$.call(this, position);
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.position_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.position_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.position_1 === tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  function _set_initialStyle__mdespi($this, _set____db54di) {
    $this.initialStyle_1 = _set____db54di;
  }
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.initialStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _set_defaultStyle__3qqnq1($this, _set____db54di) {
    $this.defaultStyle_1 = _set____db54di;
  }
  function _get_defaultStyle__bt02u3($this) {
    var tmp = $this.defaultStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('defaultStyle');
    }
  }
  function _set_paragraphStyle__bax9po($this, _set____db54di) {
    $this.paragraphStyle_1 = _set____db54di;
  }
  function _set_ops__4wbo2b($this, _set____db54di) {
    $this.ops_1 = _set____db54di;
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.ops_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, spans, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$();
    var tmp0_iterator = spans.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var span = tmp0_iterator.next_20eer_k$();
      cuts.add_utx5q5_k$(new StyleAdd_0(span.get_start_iypx6h_k$(), span.get_item_woo5lo_k$()));
      cuts.add_utx5q5_k$(new StyleRemove(span.get_end_18j6ha_k$(), span.get_item_woo5lo_k$()));
    }
    var tmp1_iterator = placeholders.iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var placeholder = tmp1_iterator.next_20eer_k$();
      cuts.add_utx5q5_k$(new PutPlaceholder_0(placeholder.get_start_iypx6h_k$(), placeholder.get_item_woo5lo_k$()));
      cuts.add_utx5q5_k$(new EndPlaceholder_0(placeholder.get_end_18j6ha_k$()));
    }
    var ops = mutableListOf([new StyleAdd(0, _get_defaultStyle__bt02u3($this))]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.iterator_jk1svi_k$();
    while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var cut = tmp2_iterator.next_20eer_k$();
      if (cut instanceof StyleAdd_0) {
        activeStyles.add_utx5q5_k$(cut.style_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.get_position_jfponi_k$(), ops);
        if (prev == null) {
          var tmp_0 = cut.get_position_jfponi_k$();
          // Inline function 'kotlin.also' call
          var this_0 = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          this_0.merge_2xkpvi_k$($this.density_1, cut.style_1);
          ops.add_utx5q5_k$(new StyleAdd(tmp_0, this_0));
        } else {
          prev.style_1.merge_2xkpvi_k$($this.density_1, cut.style_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.remove_cedx0m_k$(cut.style_1);
          ops.add_utx5q5_k$(new StyleAdd(cut.get_position_jfponi_k$(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, fontSizeInHierarchy($this.density_1, currentStyle.fontSize_1, cut.placeholder_1.get_width_sw31vj_k$()), fontSizeInHierarchy($this.density_1, currentStyle.fontSize_1, cut.placeholder_1.get_height_pbi6b2_k$()));
            ops.add_utx5q5_k$(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.add_utx5q5_k$(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.density_1, activeStyles.get_c1px32_k$(0), $this.brushSize_1, $this.blendMode_1);
    var inductionVariable = 1;
    var last = activeStyles.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.merge_2xkpvi_k$($this.density_1, activeStyles.get_c1px32_k$(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var prevOp = tmp0_iterator.next_20eer_k$();
      if (prevOp.get_position_jfponi_k$() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.set_textStyle_unmu3t_k$(makeSkTextStyle($this, computedStyle));
    var tmp0_safe_receiver = style.get_textAlign_c2c4cc_k$();
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new TextAlign(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new TextAlign(tmp_0)).value_1;
      pStyle.set_alignment_z9alxm_k$(toSkAlignment(it));
    }
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = style.get_lineHeight_3vvefu_k$();
    if (!get_isUnspecified(this_0)) {
      var strutStyle = StrutStyle_init_$Create$();
      strutStyle.set_isEnabled_abraij_k$(true);
      strutStyle.set_isHeightOverridden_52ioib_k$(true);
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      var fontSize = $this.density_1.toPx_plt68j_k$(orDefaultFontSize(style.get_fontSize_ergf2z_k$()));
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      var $this$with = style.get_lineHeight_3vvefu_k$();
      var tmp_1;
      if (_TextUnit___get_isSp__impl__8c3r6q($this$with)) {
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>.<anonymous>' call
        tmp_1 = $this.density_1.toPx_plt68j_k$($this$with);
      } else if (_TextUnit___get_isEm__impl__esrmtl($this$with)) {
        tmp_1 = fontSize * _TextUnit___get_value__impl__hpbx0k($this$with);
      } else {
        var message = 'Unexpected size in textStyleToParagraphStyle';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var lineHeight = tmp_1;
      strutStyle.set_height_w1sw3g_k$(lineHeight / fontSize);
      strutStyle.set_fontSize_ywm6aj_k$(fontSize);
      pStyle.set_strutStyle_4sjo5p_k$(strutStyle);
    }
    pStyle.set_direction_nipmfu_k$(toSkDirection($this.textDirection_1));
    var tmp1_safe_receiver = $this.textStyle_1.get_textIndent_5mau2q_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = $this.density_1;
      pStyle.set_textIndent_g4aksn_k$(new TextIndent($this$with_0.toPx_plt68j_k$(tmp1_safe_receiver.get_firstLine_vqcugt_k$()), $this$with_0.toPx_plt68j_k$(tmp1_safe_receiver.get_restLine_r6nrrn_k$())));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.get_qk1ys5_k$(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp = a.get_position_jfponi_k$();
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp$ret$1 = b.get_position_jfponi_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.toSkTextStyle_msc8ka_k$(this$0.fontFamilyResolver_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.textStyle_1.get_fontFamily_ulphcs_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.defaultFont$delegate.<anonymous>.<anonymous>' call
        var tmp0_elvis_lhs = this$0.textStyle_1.get_fontWeight_wbif2o_k$();
        var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_27().get_Normal_22avww_k$() : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = this$0.textStyle_1.get_fontStyle_hzv4zg_k$();
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs;
        if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_25().get_Normal_tevh6u_k$();
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        var tmp_3 = tmp_1;
        var tmp2_elvis_lhs = this$0.textStyle_1.get_fontSynthesis_h5auiy_k$();
        var tmp_4;
        var tmp_5 = tmp2_elvis_lhs;
        if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_26().get_All_bqi34r_k$();
        } else {
          tmp_4 = tmp2_elvis_lhs;
        }
        var tmp_6 = this$0.fontFamilyResolver_1.resolve_q3h1fi_k$(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).get_value_j01efc_k$();
        tmp = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
      }
      var loadResult = tmp;
      return Font_init_$Create$(loadResult == null ? null : loadResult.get_typeface_s1tqao_k$(), _get_defaultStyle__bt02u3(this$0).fontSize_1);
    };
  }
  function ParagraphBuilder$defaultHeight$delegate$lambda(this$0) {
    return function () {
      return this$0.get_defaultFont_6nsy4n_k$().get_metrics_h2mme2_k$().get_height_e7t92o_k$();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_10().get_Unspecified_3ttj0y_k$() : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().get_DefaultBlendMode_svct2m_k$() : blendMode;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.text_1 = text;
    this.textStyle_1 = textStyle;
    this.brushSize_1 = brushSize;
    this.ellipsis_1 = ellipsis;
    this.maxLines_1 = maxLines;
    this.spanStyles_1 = spanStyles;
    this.placeholders_1 = placeholders;
    this.density_1 = density;
    this.textDirection_1 = textDirection;
    this.drawStyle_1 = drawStyle;
    this.blendMode_1 = blendMode;
    var tmp = this;
    tmp.defaultFont$delegate_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.defaultHeight$delegate_1 = lazy_0(ParagraphBuilder$defaultHeight$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  protoOf(ParagraphBuilder_0).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(ParagraphBuilder_0).set_textStyle_ovup7l_k$ = function (_set____db54di) {
    this.textStyle_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_textStyle_8tt25h_k$ = function () {
    return this.textStyle_1;
  };
  protoOf(ParagraphBuilder_0).set_brushSize_u1ysdq_k$ = function (_set____db54di) {
    this.brushSize_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_brushSize_5w3nu2_k$ = function () {
    return this.brushSize_1;
  };
  protoOf(ParagraphBuilder_0).set_ellipsis_iwgwtg_k$ = function (_set____db54di) {
    this.ellipsis_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_ellipsis_sol6jq_k$ = function () {
    return this.ellipsis_1;
  };
  protoOf(ParagraphBuilder_0).set_maxLines_r9wcpc_k$ = function (_set____db54di) {
    this.maxLines_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  protoOf(ParagraphBuilder_0).get_spanStyles_muoq3_k$ = function () {
    return this.spanStyles_1;
  };
  protoOf(ParagraphBuilder_0).get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  protoOf(ParagraphBuilder_0).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(ParagraphBuilder_0).get_textDirection_cl6v6f_k$ = function () {
    return this.textDirection_1;
  };
  protoOf(ParagraphBuilder_0).set_drawStyle_e0kgyj_k$ = function (_set____db54di) {
    this.drawStyle_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_drawStyle_arbehw_k$ = function () {
    return this.drawStyle_1;
  };
  protoOf(ParagraphBuilder_0).set_blendMode_1e5m6b_k$ = function (_set____db54di) {
    this.blendMode_1 = _set____db54di;
  };
  protoOf(ParagraphBuilder_0).get_blendMode_si209t_k$ = function () {
    return this.blendMode_1;
  };
  protoOf(ParagraphBuilder_0).get_paragraphStyle_27utpo_k$ = function () {
    var tmp = this.paragraphStyle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('paragraphStyle');
    }
  };
  protoOf(ParagraphBuilder_0).build_1k0s4u_k$ = function () {
    this.initialStyle_1 = copyWithDefaultFontSize(this.textStyle_1.toSpanStyle_l454tw_k$(), this.drawStyle_1);
    this.defaultStyle_1 = ComputedStyle_init_$Create$(this.density_1, _get_initialStyle__6to25e(this), this.brushSize_1, this.blendMode_1);
    this.ops_1 = makeOps(this, this.spanStyles_1, this.placeholders_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.textStyle_1, _get_defaultStyle__bt02u3(this));
    this.paragraphStyle_1 = ps;
    if (!(this.maxLines_1 === IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) {
      ps.set_maxLinesCount_v5fbw1_k$(this.maxLines_1);
      ps.set_ellipsis_7c9ky1_k$(this.ellipsis_1);
    }
    var tmp = this.fontFamilyResolver_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).get_platformFontLoader_35ioim_k$();
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.get_fontCollection_kf4vje_k$();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + platformFontLoader);
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).iterator_jk1svi_k$();
    while (tmp1_iterator.hasNext_bitz1p_k$()) {
      var op = tmp1_iterator.next_20eer_k$();
      if (addText ? pos < op.get_position_jfponi_k$() : false) {
        pb.addText_gwm184_k$(toString(charSequenceSubSequence(this.text_1, pos, op.get_position_jfponi_k$())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.style_1.fontFamily_1;
        var tmp3_elvis_lhs = op.style_1.fontWeight_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_27().get_Normal_22avww_k$() : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.style_1.fontStyle_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_25().get_Normal_tevh6u_k$();
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.style_1.fontSynthesis_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_26().get_All_bqi34r_k$();
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.fontFamilyResolver_1.resolve_q3h1fi_k$(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.pushStyle_psv2ye_k$(makeSkTextStyle(this, op.style_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.width_1, op.height_1, toSkPlaceholderAlignment(op.cut_1.placeholder_1.get_placeholderVerticalAlign_kmyoon_k$()), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.addPlaceholder_rs6avq_k$(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.get_position_jfponi_k$();
    }
    if (addText ? pos < this.text_1.length : false) {
      pb.addText_gwm184_k$(toString(charSequenceSubSequence(this.text_1, pos, this.text_1.length)));
    }
    return pb.build_1k0s4u_k$();
  };
  protoOf(ParagraphBuilder_0).get_defaultFont_6nsy4n_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.defaultFont$delegate_1;
    defaultFont$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(ParagraphBuilder_0).get_defaultHeight_9g40wv_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.defaultHeight$delegate_1;
    defaultHeight$factory();
    return this_0.get_value_j01efc_k$();
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var fontSize = orDefaultFontSize(_this__u8e3s4.get_fontSize_ergf2z_k$());
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.get_letterSpacing_k79xfu_k$())) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.get_letterSpacing_k79xfu_k$());
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.get_letterSpacing_k79xfu_k$();
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.copy$default_yo6fbs_k$(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_16().get_AboveBaseline_nu267x_k$()) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_16().get_TextTop_v4gasj_k$()) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_16().get_TextBottom_m8es0r_k$()) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_16().get_TextCenter_yh3hyp_k$()) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_16().get_Top_4ethrk_k$()) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_16().get_Bottom_aqwfjc_k$()) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_16().get_Center_mzl5ha_k$()) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      var message = 'Invalid PlaceholderVerticalAlign.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_44().get_Left_seblku_k$()) {
      tmp = Alignment_LEFT_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_44().get_Right_dlwl8f_k$()) {
      tmp = Alignment_RIGHT_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_44().get_Center_fp5t1o_k$()) {
      tmp = Alignment_CENTER_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_44().get_Justify_uf64z9_k$()) {
      tmp = Alignment_JUSTIFY_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_44().get_Start_ovf7qx_k$()) {
      tmp = Alignment_START_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_44().get_End_ck95sw_k$()) {
      tmp = Alignment_END_getInstance();
    } else {
      var message = 'Invalid TextAlign';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = get_DefaultFontSize_0();
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var this_0 = get_DefaultFontSize_0();
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      checkArithmetic(this_0);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(this_0), _TextUnit___get_value__impl__hpbx0k(this_0) * other);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    switch (_this__u8e3s4.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver), maxLines, ellipsis, constraints);
  }
  function position$factory($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.position_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.get_position_jfponi_k$();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.position_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.get_position_jfponi_k$();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.get_defaultFont_6nsy4n_k$();
    }, null);
  }
  function defaultHeight$factory() {
    return getPropertyCallableRef('defaultHeight', 1, KProperty1, function (receiver) {
      return receiver.get_defaultHeight_9g40wv_k$();
    }, null);
  }
  var properties_initialized_SkiaParagraph_skiko_kt_jww0jv;
  function _init_properties_SkiaParagraph_skiko_kt__cbqn0t() {
    if (!properties_initialized_SkiaParagraph_skiko_kt_jww0jv) {
      properties_initialized_SkiaParagraph_skiko_kt_jww0jv = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new NoCache();
    }
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function _get_style__b8k6v4($this) {
    return $this.style_1;
  }
  function _get_spanStyles__69finz_0($this) {
    return $this.spanStyles_1;
  }
  function _get_placeholders__eecbo5($this) {
    return $this.placeholders_1;
  }
  function _get_density__l5pazb($this) {
    return $this.density_1;
  }
  function _get_fontFamilyResolver__s3uj2m_0($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_layouter__eku8o0($this, _set____db54di) {
    $this.layouter_1 = _set____db54di;
  }
  function _get_layouter__1rxx78_0($this) {
    return $this.layouter_1;
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.text_1, $this.textDirection_1, $this.style_1, $this.spanStyles_1, $this.placeholders_1, $this.density_1, $this.fontFamilyResolver_1);
  }
  function _set_minIntrinsicWidth__6e9wfm($this, _set____db54di) {
    $this.minIntrinsicWidth_1 = _set____db54di;
  }
  function _set_maxIntrinsicWidth__r1bxuo($this, _set____db54di) {
    $this.maxIntrinsicWidth_1 = _set____db54di;
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.text_1 = text;
    this.style_1 = style;
    this.spanStyles_1 = spanStyles;
    this.placeholders_1 = placeholders;
    this.density_1 = density;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.textDirection_1 = resolveTextDirection_1(this.text_1, this.style_1.get_textDirection_u2eu2k_k$(), this.style_1.get_localeList_1gj9gh_k$());
    this.layouter_1 = newLayouter(this);
    this.minIntrinsicWidth_1 = 0.0;
    this.maxIntrinsicWidth_1 = 0.0;
    var para = ensureNotNull(this.layouter_1).layoutParagraph_6xbnfw_k$(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
    var tmp = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.get_minIntrinsicWidth_lmc1rq_k$();
    tmp.minIntrinsicWidth_1 = Math.ceil(x);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.get_maxIntrinsicWidth_b4gk2k_k$();
    tmp_0.maxIntrinsicWidth_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(SkiaParagraphIntrinsics).get_textDirection_cl6v6f_k$ = function () {
    return this.textDirection_1;
  };
  protoOf(SkiaParagraphIntrinsics).layouter_lcs8mh_k$ = function () {
    var tmp0_elvis_lhs = this.layouter_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.layouter_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return this.minIntrinsicWidth_1;
  };
  protoOf(SkiaParagraphIntrinsics).get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return this.maxIntrinsicWidth_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_46().get_Content_gdpx4s_k$();
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_46().get_Ltr_fd58a3_k$()) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_46().get_Rtl_qi5bo5_k$()) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_46().get_Content_gdpx4s_k$()) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_46().get_ContentOrLtr_byc1cl_k$()) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_46().get_ContentOrRtl_twyiln_k$()) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_51().get_Ltr_vywptz_k$() ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_51().get_Rtl_2t37t3_k$() ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_getInstance_37().get_current_jwi6j4_k$() : locale).get_platformLocale_g0bmwm_k$())) {
      tmp = ResolvedTextDirection_Rtl_getInstance();
    } else {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    }
    return tmp;
  }
  function resolveTextDirection$lambda($localeList) {
    return function () {
      var tmp0_safe_receiver = $localeList;
      return localeBasedTextDirection(tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver));
    };
  }
  function resolveTextDirection$lambda_0() {
    return ResolvedTextDirection_Ltr_getInstance();
  }
  function resolveTextDirection$lambda_1() {
    return ResolvedTextDirection_Rtl_getInstance();
  }
  function applyBrush(_this__u8e3s4, brush, size, alpha) {
    alpha = alpha === VOID ? FloatCompanionObject_getInstance().get_NaN_18jnv2_k$() : alpha;
    var tmp;
    var tmp_0;
    if (brush instanceof SolidColor) {
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      var this_0 = brush.get_value_za03u9_k$();
      tmp_0 = !equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_j397pn_k$()));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      var tmp_1;
      if (brush instanceof ShaderBrush) {
        // Inline function 'androidx.compose.ui.geometry.isSpecified' call
        tmp_1 = !_Size___get_packedValue__impl__7rlt1o(size).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_10().get_Unspecified_3ttj0y_k$()));
      } else {
        tmp_1 = false;
      }
      tmp = tmp_1;
    }
    if (tmp) {
      brush.applyTo_5ix92b_k$(size, _this__u8e3s4, isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
    } else {
      if (brush == null) {
        _this__u8e3s4.set_shader_tgaw5e_k$(null);
      }
    }
  }
  function applyDrawStyle(_this__u8e3s4, drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) ? true : drawStyle == null) {
      _this__u8e3s4.set_style_t4zhmv_k$(Companion_getInstance_13().get_Fill_7xey15_k$());
    } else {
      if (drawStyle instanceof Stroke) {
        _this__u8e3s4.set_style_t4zhmv_k$(Companion_getInstance_13().get_Stroke_fu1ixu_k$());
        _this__u8e3s4.set_strokeWidth_owqvpl_k$(drawStyle.get_width_j0q4yl_k$());
        _this__u8e3s4.set_strokeMiterLimit_tej6nx_k$(drawStyle.get_miter_iv8ijg_k$());
        _this__u8e3s4.set_strokeJoin_yrffuj_k$(drawStyle.get_join_i4bzz3_k$());
        _this__u8e3s4.set_strokeCap_x8rhz1_k$(drawStyle.get_cap_3aolkp_k$());
        _this__u8e3s4.set_pathEffect_h6g9g6_k$(drawStyle.get_pathEffect_d6tz6p_k$());
      }
    }
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function _LineBreak___get_mask__impl__je2e1t($this) {
    return $this;
  }
  function Companion_37() {
    Companion_instance_37 = this;
    this.Simple_1 = _LineBreak___init__impl__o5i11q(1);
    this.Heading_1 = _LineBreak___init__impl__o5i11q(2);
    this.Paragraph_1 = _LineBreak___init__impl__o5i11q(3);
  }
  protoOf(Companion_37).get_Simple_z0fu2y_k$ = function () {
    return this.Simple_1;
  };
  protoOf(Companion_37).get_Heading_ybpgoc_k$ = function () {
    return this.Heading_1;
  };
  protoOf(Companion_37).get_Paragraph_xsyoow_k$ = function () {
    return this.Paragraph_1;
  };
  var Companion_instance_37;
  function Companion_getInstance_54() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    if (!($this === (other instanceof LineBreak ? other.mask_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_54();
    this.mask_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.mask_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.mask_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.mask_1, other);
  };
  function Companion_38() {
    Companion_instance_38 = this;
    this.Static_1 = new TextMotion();
    this.Animated_1 = new TextMotion();
  }
  protoOf(Companion_38).get_Static_4hz9g7_k$ = function () {
    return this.Static_1;
  };
  protoOf(Companion_38).get_Animated_r57wcs_k$ = function () {
    return this.Animated_1;
  };
  var Companion_instance_38;
  function Companion_getInstance_55() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function get_$stableprop_65() {
    return 0;
  }
  function TextMotion() {
    Companion_getInstance_55();
    this.$stable_1 = 0;
  }
  //region block: post-declaration
  protoOf(FontFamilyResolverImpl).resolve$default_51n6kl_k$ = resolve$default;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).interceptFontFamily_gv8ky1_k$ = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).interceptFontWeight_3o5olg_k$ = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).interceptFontStyle_a5zuhs_k$ = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).interceptFontSynthesis_3g2w1p_k$ = interceptFontSynthesis;
  protoOf(Unspecified).merge_b7txoj_k$ = merge;
  protoOf(Unspecified).takeOrElse_vujaw_k$ = takeOrElse;
  protoOf(BrushStyle).merge_b7txoj_k$ = merge;
  protoOf(BrushStyle).takeOrElse_vujaw_k$ = takeOrElse;
  protoOf(ColorStyle).merge_b7txoj_k$ = merge;
  protoOf(ColorStyle).takeOrElse_vujaw_k$ = takeOrElse;
  protoOf(PlatformFont).get_loadingStrategy_s3fce_k$ = get_loadingStrategy;
  protoOf(SkiaParagraph).getLineEnd$default_nax8ot_k$ = getLineEnd$default;
  protoOf(SkiaParagraph).paint$default_n29wsh_k$ = paint$default;
  protoOf(SkiaParagraph).paint$default_f7qoik_k$ = paint$default_0;
  protoOf(SkiaParagraph).paint$default_9oas5_k$ = paint$default_1;
  protoOf(SkiaParagraphIntrinsics).get_hasStaleResolvedFonts_tun9ic_k$ = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultMaxLines = 2147483647;
  DefaultCacheSize = 8;
  CONCURRENT_MODIFICATION_EXCEPTIONS = true;
  BASE_SIZE = 4;
  DEBUG = false;
  TAG = 'SimpleArrayMap';
  DEBUG_0 = false;
  POP_DIRECTIONAL_ISOLATE_CODE_POINT = 8297;
  MIN_SUPPLEMENTARY_CODE_POINT = 65536;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = FontSynthesis;
  _.$_$.c = createFontFamilyResolver_0;
  _.$_$.d = CommitTextCommand;
  _.$_$.e = DeleteAllCommand;
  _.$_$.f = DeleteSurroundingTextCommand;
  _.$_$.g = EditProcessor;
  _.$_$.h = FinishComposingTextCommand;
  _.$_$.i = ImeAction;
  _.$_$.j = ImeOptions;
  _.$_$.k = KeyboardCapitalization;
  _.$_$.l = KeyboardType;
  _.$_$.m = OffsetMapping;
  _.$_$.n = PasswordVisualTransformation;
  _.$_$.o = PlatformTextInputPluginRegistryImpl;
  _.$_$.p = notifyFocusedRect;
  _.$_$.q = PlatformTextInputService;
  _.$_$.r = SetSelectionCommand;
  _.$_$.s = TextFieldValue;
  _.$_$.t = TextInputService;
  _.$_$.u = TransformedText;
  _.$_$.v = getSelectedText;
  _.$_$.w = getTextAfterSelection;
  _.$_$.x = getTextBeforeSelection;
  _.$_$.y = FontLoader;
  _.$_$.z = TextAlign;
  _.$_$.a1 = TextOverflow;
  _.$_$.b1 = MultiParagraphIntrinsics;
  _.$_$.c1 = MultiParagraph;
  _.$_$.d1 = ParagraphIntrinsics_0;
  _.$_$.e1 = Paragraph;
  _.$_$.f1 = Paragraph_0;
  _.$_$.g1 = TextLayoutResult;
  _.$_$.h1 = TextRange_1;
  _.$_$.i1 = TextRange_0;
  _.$_$.j1 = TextRange;
  _.$_$.k1 = lerp_6;
  _.$_$.l1 = resolveDefaults;
  _.$_$.m1 = ResolvedTextDirection_Rtl_getInstance;
  _.$_$.n1 = CommitTextCommand_init_$Create$;
  _.$_$.o1 = TextFieldValue_init_$Create$;
  _.$_$.p1 = AnnotatedString_init_$Create$;
  _.$_$.q1 = Builder_init_$Create$_0;
  _.$_$.r1 = SpanStyle_init_$Create$_1;
  _.$_$.s1 = TextLayoutInput_init_$Create$_0;
  _.$_$.t1 = TextStyle_init_$Create$_4;
  _.$_$.u1 = ImeAction__hashCode_impl_m1mrob;
  _.$_$.v1 = KeyboardCapitalization__hashCode_impl_6ibuz5;
  _.$_$.w1 = KeyboardType__hashCode_impl_mw6m33;
  _.$_$.x1 = _TextOverflow___init__impl__obguoe;
  _.$_$.y1 = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.z1 = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.a2 = _TextRange___get_collapsed__impl__cilesp;
  _.$_$.b2 = TextRange__contains_impl_ws45z2_0;
  _.$_$.c2 = _TextRange___get_end__impl__gcdxpp;
  _.$_$.d2 = _TextRange___get_length__impl__7qes3a;
  _.$_$.e2 = _TextRange___get_max__impl__owm8m;
  _.$_$.f2 = _TextRange___get_min__impl__uu95c4;
  _.$_$.g2 = _TextRange___get_reversed__impl__emhnbm;
  _.$_$.h2 = _TextRange___get_start__impl__ww4t90;
  _.$_$.i2 = Companion_getInstance_21;
  _.$_$.j2 = Companion_getInstance_25;
  _.$_$.k2 = Companion_getInstance_26;
  _.$_$.l2 = Companion_getInstance_27;
  _.$_$.m2 = Companion_getInstance_30;
  _.$_$.n2 = Companion_getInstance_31;
  _.$_$.o2 = Companion_getInstance_32;
  _.$_$.p2 = Companion_getInstance_33;
  _.$_$.q2 = Companion_getInstance_34;
  _.$_$.r2 = Companion_getInstance_36;
  _.$_$.s2 = Companion_getInstance_44;
  _.$_$.t2 = Companion_getInstance_45;
  _.$_$.u2 = Companion_getInstance_50;
  _.$_$.v2 = TextPainter_getInstance;
  _.$_$.w2 = Companion_getInstance_18;
  _.$_$.x2 = Companion_getInstance_19;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-text.js.map
