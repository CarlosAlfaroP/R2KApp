(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-runtime-saveable.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-util.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-runtime-saveable.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-util.js'), require('./skiko-kjs.js'));
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
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    root['compose-multiplatform-core-ui-text'] = factory(typeof this['compose-multiplatform-core-ui-text'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-text'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-runtime-saveable'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-util'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r9;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.w2;
  var VOID = kotlin_kotlin.$_$.d;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var hashCode = kotlin_kotlin.$_$.c9;
  var getStringHashCode = kotlin_kotlin.$_$.b9;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var equals = kotlin_kotlin.$_$.t8;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var emptyList = kotlin_kotlin.$_$.r4;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var compareValues = kotlin_kotlin.$_$.j7;
  var sortedWith = kotlin_kotlin.$_$.t6;
  var charSequenceGet = kotlin_kotlin.$_$.m8;
  var CharSequence = kotlin_kotlin.$_$.ic;
  var coerceIn = kotlin_kotlin.$_$.oa;
  var charSequenceLength = kotlin_kotlin.$_$.n8;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var coerceAtLeast = kotlin_kotlin.$_$.ha;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.q5;
  var addAll = kotlin_kotlin.$_$.y3;
  var plus = kotlin_kotlin.$_$.k6;
  var last = kotlin_kotlin.$_$.v5;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.y8;
  var compareTo = kotlin_kotlin.$_$.q8;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.od;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var numberToInt = kotlin_kotlin.$_$.n9;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var Enum = kotlin_kotlin.$_$.mc;
  var arrayListOf = kotlin_kotlin.$_$.a4;
  var List = kotlin_kotlin.$_$.q3;
  var isInterface = kotlin_kotlin.$_$.h9;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qd;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var ULong = kotlin_kotlin.$_$.bd;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.c;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p1;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o1;
  var lerp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var toString_0 = kotlin_kotlin.$_$.be;
  var Char = kotlin_kotlin.$_$.jc;
  var isCharSequence = kotlin_kotlin.$_$.g9;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var getBooleanHashCode = kotlin_kotlin.$_$.w8;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Long = kotlin_kotlin.$_$.rc;
  var toLong = kotlin_kotlin.$_$.t9;
  var fillArrayVal = kotlin_kotlin.$_$.u8;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var first = kotlin_kotlin.$_$.a5;
  var Map = kotlin_kotlin.$_$.s3;
  var MutableMap = kotlin_kotlin.$_$.v3;
  var MutableCollection = kotlin_kotlin.$_$.t3;
  var println = kotlin_kotlin.$_$.g8;
  var copyOf = kotlin_kotlin.$_$.o4;
  var copyOf_0 = kotlin_kotlin.$_$.n4;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var arrayCopy = kotlin_kotlin.$_$.z3;
  var ClassCastException = kotlin_kotlin.$_$.kc;
  var NullPointerException = kotlin_kotlin.$_$.uc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.b2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var Exception = kotlin_kotlin.$_$.oc;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var get_indices = kotlin_kotlin.$_$.k5;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CancellationException = kotlin_kotlin.$_$.o7;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.s7;
  var Element = kotlin_kotlin.$_$.b8;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t2;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var to = kotlin_kotlin.$_$.ce;
  var mutableListOf = kotlin_kotlin.$_$.g6;
  var Companion_instance = kotlin_kotlin.$_$.c3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.h2;
  var createFailure = kotlin_kotlin.$_$.hd;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.j2;
  var KMutableProperty1 = kotlin_kotlin.$_$.ua;
  var listOf = kotlin_kotlin.$_$.a6;
  var Comparable = kotlin_kotlin.$_$.lc;
  var lerp_2 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var joinTo = kotlin_kotlin.$_$.o5;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var charArray = kotlin_kotlin.$_$.l8;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Collection = kotlin_kotlin.$_$.o3;
  var lerp_3 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var isNaN_0 = kotlin_kotlin.$_$.md;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var toList = kotlin_kotlin.$_$.c7;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j7;
  var until = kotlin_kotlin.$_$.sa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g4;
  var setOf = kotlin_kotlin.$_$.p6;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.a9;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.a8;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.o7;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.y8;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.a3;
  var isLowSurrogate = kotlin_kotlin.$_$.pb;
  var isHighSurrogate = kotlin_kotlin.$_$.ob;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.f2;
  var sequence = kotlin_kotlin.$_$.gb;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.d2;
  var SequenceScope = kotlin_kotlin.$_$.za;
  var numberRangeToNumber = kotlin_kotlin.$_$.k9;
  var getObjectHashCode = kotlin_kotlin.$_$.z8;
  var last_0 = kotlin_kotlin.$_$.x5;
  var isArray = kotlin_kotlin.$_$.f9;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.d8;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var firstOrNull = kotlin_kotlin.$_$.y4;
  var first_0 = kotlin_kotlin.$_$.b5;
  var Rect_0 = kotlin_org_jetbrains_skiko_skiko.$_$.t8;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.i8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.rb;
  var lastOrNull = kotlin_kotlin.$_$.u5;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k1;
  var coerceAtMost = kotlin_kotlin.$_$.ja;
  var Rect_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var getOrNull = kotlin_kotlin.$_$.d5;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var isWhitespace = kotlin_kotlin.$_$.qb;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var listOf_0 = kotlin_kotlin.$_$.z5;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y6;
  var TypefaceFontProvider = kotlin_org_jetbrains_skiko_skiko.$_$.k8;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.q7;
  var copyToArray = kotlin_kotlin.$_$.p4;
  var mapOf = kotlin_kotlin.$_$.d6;
  var KProperty0 = kotlin_kotlin.$_$.va;
  var lazy_0 = kotlin_kotlin.$_$.pd;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e7;
  var asComposePaint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.a7;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.p7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.y1;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f2;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.r7;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.c8;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.h8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xd;
  var sortWith = kotlin_kotlin.$_$.r6;
  var asReversed = kotlin_kotlin.$_$.c4;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.f8;
  var StrutStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z6;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.j8;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.d7;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.e8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.o8;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.g8;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
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
  var firstOrNull_0 = kotlin_kotlin.$_$.x4;
  var coerceIn_0 = kotlin_kotlin.$_$.na;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MutableRange, 'MutableRange', classMeta);
  setMetadataFor(Range, 'Range', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, VOID, VOID, Builder);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(AnnotatedString, 'AnnotatedString', classMeta, VOID, [CharSequence]);
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
  setMetadataFor(AnnotationType, 'AnnotationType', classMeta, Enum);
  setMetadataFor(SpanStyle, 'SpanStyle', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(TextLayoutResult, 'TextLayoutResult', classMeta);
  setMetadataFor(TextLayoutInput, 'TextLayoutInput', classMeta);
  setMetadataFor(TextPainter, 'TextPainter', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(TextRange, 'TextRange', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta);
  setMetadataFor(TtsAnnotation, 'TtsAnnotation', classMeta);
  setMetadataFor(VerbatimTtsAnnotation, 'VerbatimTtsAnnotation', classMeta, TtsAnnotation);
  setMetadataFor(UrlAnnotation, 'UrlAnnotation', classMeta);
  setMetadataFor(LruCache, 'LruCache', classMeta);
  setMetadataFor(SimpleArrayMap, 'SimpleArrayMap', classMeta, VOID, VOID, SimpleArrayMap_init_$Create$);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  function get_loadingStrategy() {
    return Companion_getInstance_20().d51_1;
  }
  setMetadataFor(Font, 'Font', interfaceMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(FontFamily, 'FontFamily', classMeta);
  setMetadataFor(SystemFontFamily, 'SystemFontFamily', classMeta, FontFamily);
  setMetadataFor(DefaultFontFamily, 'DefaultFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(GenericFontFamily, 'GenericFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(FileBasedFontFamily, 'FileBasedFontFamily', classMeta, FontFamily);
  setMetadataFor(FontListFontFamily, 'FontListFontFamily', classMeta, FileBasedFontFamily, [FileBasedFontFamily, List]);
  setMetadataFor(LoadedFontFamily, 'LoadedFontFamily', classMeta, FontFamily);
  setMetadataFor(TypefaceRequestCache, 'TypefaceRequestCache', classMeta, VOID, VOID, TypefaceRequestCache);
  setMetadataFor(TypefaceRequest, 'TypefaceRequest', classMeta);
  setMetadataFor(Immutable, 'Immutable', classMeta);
  setMetadataFor(Async, 'Async', classMeta);
  setMetadataFor(FontFamilyResolverImpl, 'FontFamilyResolverImpl', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
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
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(AsyncTypefaceResult, 'AsyncTypefaceResult', classMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor($runCachedCOROUTINE$1, '$runCachedCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(AsyncTypefaceCache, 'AsyncTypefaceCache', classMeta, VOID, VOID, AsyncTypefaceCache, VOID, VOID, [4]);
  setMetadataFor(AsyncFontListLoader$load$slambda, 'AsyncFontListLoader$load$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, 'AsyncFontListLoader$loadWithTimeoutOrNull$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($loadCOROUTINE$2, '$loadCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($loadWithTimeoutOrNullCOROUTINE$3, '$loadWithTimeoutOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(AsyncFontListLoader, 'AsyncFontListLoader', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$resolve$slambda, 'FontListFontFamilyTypefaceAdapter$resolve$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', classMeta, VOID, VOID, FontListFontFamilyTypefaceAdapter, VOID, VOID, [2]);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(FontLoadingStrategy, 'FontLoadingStrategy', classMeta);
  setMetadataFor(FontMatcher, 'FontMatcher', classMeta, VOID, VOID, FontMatcher);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(FontSynthesis, 'FontSynthesis', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta, VOID, [Comparable]);
  setMetadataFor(CommitTextCommand, 'CommitTextCommand', classMeta);
  setMetadataFor(DeleteAllCommand, 'DeleteAllCommand', classMeta, VOID, VOID, DeleteAllCommand);
  setMetadataFor(FinishComposingTextCommand, 'FinishComposingTextCommand', classMeta, VOID, VOID, FinishComposingTextCommand);
  setMetadataFor(DeleteSurroundingTextCommand, 'DeleteSurroundingTextCommand', classMeta);
  setMetadataFor(SetSelectionCommand, 'SetSelectionCommand', classMeta);
  setMetadataFor(SetComposingTextCommand, 'SetComposingTextCommand', classMeta);
  setMetadataFor(SetComposingRegionCommand, 'SetComposingRegionCommand', classMeta);
  setMetadataFor(DeleteSurroundingTextInCodePointsCommand, 'DeleteSurroundingTextInCodePointsCommand', classMeta);
  setMetadataFor(BackspaceCommand, 'BackspaceCommand', classMeta);
  setMetadataFor(MoveCursorCommand, 'MoveCursorCommand', classMeta);
  setMetadataFor(EditProcessor, 'EditProcessor', classMeta, VOID, VOID, EditProcessor);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(EditingBuffer, 'EditingBuffer', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(PartialGapBuffer, 'PartialGapBuffer', classMeta);
  setMetadataFor(GapBuffer, 'GapBuffer', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(ImeAction, 'ImeAction', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(ImeOptions, 'ImeOptions', classMeta, VOID, VOID, ImeOptions);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(KeyboardCapitalization, 'KeyboardCapitalization', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(KeyboardType, 'KeyboardType', classMeta);
  setMetadataFor(OffsetMapping$Companion$Identity$1, VOID, classMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(PlatformTextInputPluginRegistryImpl, 'PlatformTextInputPluginRegistryImpl', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(TextFieldValue, 'TextFieldValue', classMeta, VOID, VOID, TextFieldValue_init_$Create$);
  setMetadataFor(TextInputService, 'TextInputService', classMeta);
  function notifyFocusedRect(rect) {
  }
  setMetadataFor(PlatformTextInputService, 'PlatformTextInputService', interfaceMeta);
  setMetadataFor(TextInputSession, 'TextInputSession', classMeta);
  setMetadataFor(sam$androidx_compose_ui_text_input_VisualTransformation$0, 'sam$androidx_compose_ui_text_input_VisualTransformation$0', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TransformedText, 'TransformedText', classMeta);
  setMetadataFor(PasswordVisualTransformation, 'PasswordVisualTransformation', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Locale, 'Locale', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(LocaleList, 'LocaleList', classMeta, VOID, [Collection]);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(BaselineShift, 'BaselineShift', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(Hyphens, 'Hyphens', classMeta);
  setMetadataFor(ResolvedTextDirection, 'ResolvedTextDirection', classMeta, Enum);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(TextDecoration, 'TextDecoration', classMeta);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
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
      var tmp_1 = other.y3z();
      tmp = new BrushStyle(other.c5c_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
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
          tmp = other.s4w(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_instance) ? this : other();
  }
  setMetadataFor(TextForegroundStyle, 'TextForegroundStyle', interfaceMeta);
  setMetadataFor(Unspecified, 'Unspecified', objectMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(BrushStyle, 'BrushStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(ColorStyle, 'ColorStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(TextGeometricTransform, 'TextGeometricTransform', classMeta, VOID, VOID, TextGeometricTransform);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(TextIndent_0, 'TextIndent', classMeta, VOID, VOID, TextIndent_0);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(TextOverflow, 'TextOverflow', classMeta);
  setMetadataFor(NoCache, 'NoCache', classMeta, VOID, VOID, NoCache);
  setMetadataFor(JsLocale, 'JsLocale', classMeta);
  setMetadataFor(createPlatformLocaleDelegate$1, VOID, classMeta);
  setMetadataFor(PlatformFont, 'PlatformFont', classMeta, VOID, [Font]);
  setMetadataFor(ExpireAfterAccessCache, 'ExpireAfterAccessCache', classMeta);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, '<get-codePointsOutsideDirectionalIsolate>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(_get_codePoints_$slambda_43x8dt, '<get-codePoints>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(PlatformParagraphStyle, 'PlatformParagraphStyle', classMeta, VOID, VOID, PlatformParagraphStyle);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(PlatformSpanStyle, 'PlatformSpanStyle', classMeta, VOID, VOID, PlatformSpanStyle);
  setMetadataFor(PlatformTextStyle, 'PlatformTextStyle', classMeta);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().k42_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g49_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.f4r(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.f4r.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_0(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g49_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.h4r(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.h4r.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  setMetadataFor(Paragraph_1, 'Paragraph', interfaceMeta);
  setMetadataFor(SkiaParagraph, 'SkiaParagraph', classMeta, VOID, [Paragraph_1]);
  setMetadataFor(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', classMeta, VOID, VOID, PlatformFontFamilyTypefaceAdapter);
  setMetadataFor(SkiaFontLoader, 'SkiaFontLoader', classMeta, VOID, VOID, SkiaFontLoader, VOID, VOID, [1]);
  setMetadataFor(ParagraphLayouter, 'ParagraphLayouter', classMeta);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(FontLoadResult, 'FontLoadResult', classMeta);
  setMetadataFor(FontLoader, 'FontLoader', classMeta, VOID, VOID, FontLoader);
  setMetadataFor(FontCache, 'FontCache', classMeta, VOID, VOID, FontCache);
  setMetadataFor(SkiaBackedTypeface, 'SkiaBackedTypeface', classMeta);
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
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ParagraphBuilder_0, 'ParagraphBuilder', classMeta);
  setMetadataFor(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(LineBreak, 'LineBreak', classMeta);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
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
  function MutableRange(item, start, end, tag) {
    end = end === VOID ? IntCompanionObject_instance.MIN_VALUE : end;
    tag = tag === VOID ? '' : tag;
    this.h4o_1 = item;
    this.i4o_1 = start;
    this.j4o_1 = end;
    this.k4o_1 = tag;
  }
  protoOf(MutableRange).l4o = function (defaultEnd) {
    var end = this.j4o_1 === IntCompanionObject_instance.MIN_VALUE ? defaultEnd : this.j4o_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(end === IntCompanionObject_instance.MIN_VALUE)) {
      // Inline function 'androidx.compose.ui.text.MutableRange.toRange.<anonymous>' call
      var message = 'Item.end should be set first';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new Range(this.h4o_1, this.i4o_1, end, this.k4o_1);
  };
  protoOf(MutableRange).toString = function () {
    return 'MutableRange(item=' + this.h4o_1 + ', start=' + this.i4o_1 + ', end=' + this.j4o_1 + ', tag=' + this.k4o_1 + ')';
  };
  protoOf(MutableRange).hashCode = function () {
    var result = this.h4o_1 == null ? 0 : hashCode(this.h4o_1);
    result = imul(result, 31) + this.i4o_1 | 0;
    result = imul(result, 31) + this.j4o_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.k4o_1) | 0;
    return result;
  };
  protoOf(MutableRange).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MutableRange))
      return false;
    var tmp0_other_with_cast = other instanceof MutableRange ? other : THROW_CCE();
    if (!equals(this.h4o_1, tmp0_other_with_cast.h4o_1))
      return false;
    if (!(this.i4o_1 === tmp0_other_with_cast.i4o_1))
      return false;
    if (!(this.j4o_1 === tmp0_other_with_cast.j4o_1))
      return false;
    if (!(this.k4o_1 === tmp0_other_with_cast.k4o_1))
      return false;
    return true;
  };
  function Builder_init_$Init$(text, $this) {
    Builder.call($this);
    $this.s4o(text);
    return $this;
  }
  function Builder_init_$Create$(text) {
    return Builder_init_$Init$(text, objectCreate(protoOf(Builder)));
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
    if (spanStyles.e1()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = spanStyles;
    }
    var tmp_2 = tmp_1;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_3;
    if (paragraphStyles.e1()) {
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
    this.t4o_1 = item;
    this.u4o_1 = start;
    this.v4o_1 = end;
    this.w4o_1 = tag;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.u4o_1 <= this.v4o_1)) {
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      var message = 'Reversed range is not supported';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.x4o_1 = 0;
  }
  protoOf(Range).ae = function () {
    return this.t4o_1;
  };
  protoOf(Range).be = function () {
    return this.u4o_1;
  };
  protoOf(Range).mg = function () {
    return this.v4o_1;
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + this.t4o_1 + ', start=' + this.u4o_1 + ', end=' + this.v4o_1 + ', tag=' + this.w4o_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.t4o_1 == null ? 0 : hashCode(this.t4o_1);
    result = imul(result, 31) + this.u4o_1 | 0;
    result = imul(result, 31) + this.v4o_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.w4o_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.t4o_1, tmp0_other_with_cast.t4o_1))
      return false;
    if (!(this.u4o_1 === tmp0_other_with_cast.u4o_1))
      return false;
    if (!(this.v4o_1 === tmp0_other_with_cast.v4o_1))
      return false;
    if (!(this.w4o_1 === tmp0_other_with_cast.w4o_1))
      return false;
    return true;
  };
  function Builder(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    this.m4o_1 = StringBuilder_init_$Create$(capacity);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n4o_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.o4o_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.p4o_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.q4o_1 = ArrayList_init_$Create$();
    this.r4o_1 = 0;
  }
  protoOf(Builder).i8 = function (text) {
    if (text instanceof AnnotatedString) {
      this.s4o(text);
    } else {
      this.m4o_1.i8(text);
    }
    return this;
  };
  protoOf(Builder).a6 = function (char) {
    this.m4o_1.a6(char);
    return this;
  };
  protoOf(Builder).s4o = function (text) {
    var start = this.m4o_1.a();
    this.m4o_1.z5(text.y4o_1);
    var tmp0_safe_receiver = text.z4o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.i1(index);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.d4p(item.t4o_1, start + item.u4o_1 | 0, start + item.v4o_1 | 0);
        }
         while (inductionVariable <= last);
    }
    var tmp1_safe_receiver = text.a4p_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_safe_receiver.n() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_safe_receiver.i1(index_0);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.e4p(item_0.t4o_1, start + item_0.u4o_1 | 0, start + item_0.v4o_1 | 0);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp2_safe_receiver = text.b4p_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp2_safe_receiver.n() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_1 = tmp2_safe_receiver.i1(index_1);
          // Inline function 'androidx.compose.ui.text.Builder.append.<anonymous>' call
          this.p4o_1.s(new MutableRange(item_1.t4o_1, start + item_1.u4o_1 | 0, start + item_1.v4o_1 | 0, item_1.w4o_1));
        }
         while (inductionVariable_1 <= last_1);
    }
  };
  protoOf(Builder).d4p = function (style, start, end) {
    this.n4o_1.s(new MutableRange(style, start, end));
  };
  protoOf(Builder).e4p = function (style, start, end) {
    this.o4o_1.s(new MutableRange(style, start, end));
  };
  protoOf(Builder).f4p = function () {
    var tmp = this.m4o_1.toString();
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = this.n4o_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_0.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.i1(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var element = item.l4o(this.m4o_1.a());
        target.s(element);
      }
       while (inductionVariable <= last);
    var tmp_0;
    if (target.e1()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_0 = null;
    } else {
      tmp_0 = target;
    }
    var tmp_1 = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = this.o4o_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(this_1.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.i1(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var element_0 = item_0.l4o(this.m4o_1.a());
        target_0.s(element_0);
      }
       while (inductionVariable_0 <= last_0);
    var tmp_2;
    if (target_0.e1()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_2 = null;
    } else {
      tmp_2 = target_0;
    }
    var tmp_3 = tmp_2;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_2 = this.p4o_1;
    // Inline function 'kotlin.contracts.contract' call
    var target_1 = ArrayList_init_$Create$_0(this_2.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    var last_1 = this_2.n() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = this_2.i1(index_1);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
        var element_1 = item_1.l4o(this.m4o_1.a());
        target_1.s(element_1);
      }
       while (inductionVariable_1 <= last_1);
    var tmp_4;
    if (target_1.e1()) {
      // Inline function 'androidx.compose.ui.text.Builder.toAnnotatedString.<anonymous>' call
      tmp_4 = null;
    } else {
      tmp_4 = target_1;
    }
    var tmp$ret$11 = tmp_4;
    return new AnnotatedString(tmp, tmp_1, tmp_3, tmp$ret$11);
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.g4p_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).z8 = function (a, b) {
    return this.g4p_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.z8(a, b);
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp = a.u4o_1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp$ret$1 = b.u4o_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(text, spanStylesOrNull, paragraphStylesOrNull, annotations) {
    spanStylesOrNull = spanStylesOrNull === VOID ? null : spanStylesOrNull;
    paragraphStylesOrNull = paragraphStylesOrNull === VOID ? null : paragraphStylesOrNull;
    annotations = annotations === VOID ? null : annotations;
    this.y4o_1 = text;
    this.z4o_1 = spanStylesOrNull;
    this.a4p_1 = paragraphStylesOrNull;
    this.b4p_1 = annotations;
    var lastStyleEnd = -1;
    var tmp0_safe_receiver = this.a4p_1;
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
      var last = tmp1_safe_receiver.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_safe_receiver.i1(index);
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.u4o_1 >= lastStyleEnd)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message = 'ParagraphStyle should not overlap';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.v4o_1 <= this.y4o_1.length)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message_0 = 'ParagraphStyle range [' + item.u4o_1 + ', ' + item.v4o_1 + ')' + ' is out of boundary';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          lastStyleEnd = item.v4o_1;
        }
         while (inductionVariable <= last);
    }
    this.c4p_1 = 0;
  }
  protoOf(AnnotatedString).h4p = function () {
    var tmp0_elvis_lhs = this.z4o_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).i4p = function () {
    var tmp0_elvis_lhs = this.a4p_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).a = function () {
    return this.y4o_1.length;
  };
  protoOf(AnnotatedString).b = function (index) {
    return charSequenceGet(this.y4o_1, index);
  };
  protoOf(AnnotatedString).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startIndex <= endIndex)) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      var message = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 ? endIndex === this.y4o_1.length : false)
      return this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var text = this.y4o_1.substring(startIndex, endIndex);
    return new AnnotatedString(text, filterRanges(this.z4o_1, startIndex, endIndex), filterRanges(this.a4p_1, startIndex, endIndex), filterRanges(this.b4p_1, startIndex, endIndex));
  };
  protoOf(AnnotatedString).j4p = function (range) {
    return this.c(_TextRange___get_min__impl__uu95c4(range), _TextRange___get_max__impl__owm8m(range));
  };
  protoOf(AnnotatedString).k4p = function (other) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.plus.<anonymous>' call
    var $this$with = Builder_init_$Create$(this);
    $this$with.s4o(other);
    return $this$with.f4p();
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.y4o_1 === other.y4o_1))
      return false;
    if (!equals(this.z4o_1, other.z4o_1))
      return false;
    if (!equals(this.a4p_1, other.a4p_1))
      return false;
    if (!equals(this.b4p_1, other.b4p_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.y4o_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.z4o_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.a4p_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.b4p_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.y4o_1;
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
    var target = ArrayList_init_$Create$_0(nonNullRange.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nonNullRange.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.i1(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        if (intersect(start, end, item.u4o_1, item.v4o_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.s(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.i1(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = item_0.u4o_1;
        var tmp_0 = Math.max(start, b) - start | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = item_0.v4o_1;
        var tmp$ret$4 = Math.min(end, b_0);
        var element = new Range(item_0.t4o_1, tmp_0, tmp$ret$4 - start | 0, item_0.w4o_1);
        target_0.s(element);
      }
       while (inductionVariable_0 <= last_0);
    var tmp_1;
    if (target_0.e1()) {
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
    var tmp0_elvis_lhs = _this__u8e3s4.z4o_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spanStyles = tmp;
    if (start === 0 ? end >= _this__u8e3s4.y4o_1.length : false) {
      return spanStyles;
    }
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(spanStyles.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = spanStyles.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = spanStyles.i1(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        if (intersect(start, end, item.u4o_1, item.v4o_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.s(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.i1(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        var element = Range_init_$Create$(item_0.t4o_1, coerceIn(item_0.u4o_1, start, end) - start | 0, coerceIn(item_0.v4o_1, start, end) - start | 0);
        target_0.s(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return (baseStart <= targetStart ? targetEnd <= baseEnd : false) ? !(baseEnd === targetEnd) ? true : targetStart === targetEnd === (baseStart === baseEnd) : false;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (!(start === end)) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.y4o_1.substring(start, end);
    } else {
      tmp = '';
    }
    return new AnnotatedString(tmp, getLocalSpanStyles(_this__u8e3s4, start, end));
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var length = _this__u8e3s4.y4o_1.length;
    var tmp0_elvis_lhs = _this__u8e3s4.a4p_1;
    var paragraphStyles = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var lastOffset = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.i1(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.ae();
        var start = item.be();
        var end = item.mg();
        if (!(start === lastOffset)) {
          result.s(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.s(Range_init_$Create$(defaultParagraphStyle.y4p(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.s(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.e1()) {
      result.s(Range_init_$Create$(defaultParagraphStyle, 0, 0));
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
  function _get_annotatedString__kqljtk($this) {
    return $this.f4q_1.z4p_1;
  }
  function requireIndexInRange($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= (charSequenceLength(_get_annotatedString__kqljtk($this).y4o_1) - 1 | 0) : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRange.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).y4o_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRangeInclusiveEnd.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= lineIndex ? lineIndex < $this.k4q_1 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      var message = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.k4q_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? get_DefaultMaxLines() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    this.f4q_1 = intrinsics;
    this.g4q_1 = maxLines;
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
    var infoList = this.f4q_1.d4q_1;
    var inductionVariable = 0;
    var last = infoList.n() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.i1(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.o4q_1, Constraints(VOID, tmp, VOID, tmp_0), this.g4q_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.l39();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.r4q() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.s(new ParagraphInfo(paragraph, paragraphInfo.p4q_1, paragraphInfo.q4q_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.s4q() ? true : endLineIndex === this.g4q_1 ? !(index === get_lastIndex(this.f4q_1.d4q_1)) : false) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.j4q_1 = currentHeight;
    this.k4q_1 = currentLineCount;
    this.h4q_1 = didExceedMaxLines;
    this.m4q_1 = paragraphInfoList;
    this.i4q_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(paragraphInfoList.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.i1(index_0);
        // Inline function 'androidx.compose.ui.text.fastFlatMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.t4q_1.a4r();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$_0(this_0.n());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.n() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.i1(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var element = item_0 == null ? null : item.b4r(item_0);
            target_0.s(element);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
    var tmp_2;
    if (target.n() < this.f4q_1.a4q_1.n()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.f4q_1.a4q_1.n() - target.n() | 0;
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
          list_0.s(null);
        }
         while (inductionVariable_2 < size);
      tmp_2 = plus(target, list_0);
    } else {
      tmp_2 = target;
    }
    tmp_1.l4q_1 = tmp_2;
    this.n4q_1 = 0;
  }
  protoOf(MultiParagraph).c4r = function () {
    var tmp;
    if (this.m4q_1.e1()) {
      tmp = 0.0;
    } else {
      tmp = this.m4q_1.i1(0).t4q_1.c4r();
    }
    return tmp;
  };
  protoOf(MultiParagraph).d4r = function () {
    var tmp;
    if (this.m4q_1.e1()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      var $this$with = last(this.m4q_1);
      tmp = $this$with.e4r($this$with.t4q_1.d4r());
    }
    return tmp;
  };
  protoOf(MultiParagraph).f4r = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.r43();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.m4q_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.i1(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.t4q_1.f4r(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.u43(0.0, item.t4q_1.l39());
      }
       while (inductionVariable <= last);
    canvas.s43();
  };
  protoOf(MultiParagraph).g4r = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().k42_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g49_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.f4r(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.f4r.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).h4r = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).i4r = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g49_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.h4r(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.h4r.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  };
  protoOf(MultiParagraph).j4r = function (start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= start ? start <= end : false) ? end <= _get_annotatedString__kqljtk(this).y4o_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      var message = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).y4o_1.length + '),' + ' or start > end!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var paragraphIndex = findParagraphByIndex(this.m4q_1, start);
    var path = Path();
    var inductionVariable = paragraphIndex;
    var last = this.m4q_1.n();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var p = this.m4q_1.i1(i);
        if (p.u4q_1 >= end)
          break $l$loop_0;
        if (p.u4q_1 === p.v4q_1)
          continue $l$loop_0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        path.d4a(p.l4r(p.t4q_1.j4r(p.k4r(start), p.k4r(end))));
      }
       while (inductionVariable < last);
    return path;
  };
  protoOf(MultiParagraph).m4r = function (vertical) {
    var paragraphIndex = vertical <= 0.0 ? 0 : vertical >= this.j4q_1 ? get_lastIndex(this.m4q_1) : findParagraphByY(this.m4q_1, vertical);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      // Inline function 'kotlin.math.max' call
      var b = $this$with.u4q_1 - 1 | 0;
      tmp = Math.max(0, b);
    } else {
      tmp = $this$with.o4r($this$with.t4q_1.m4r($this$with.n4r(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).p4r = function (position) {
    var paragraphIndex = _Offset___get_y__impl__8bzhra(position) <= 0.0 ? 0 : _Offset___get_y__impl__8bzhra(position) >= this.j4q_1 ? get_lastIndex(this.m4q_1) : findParagraphByY(this.m4q_1, _Offset___get_y__impl__8bzhra(position));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getOffsetForPosition.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      // Inline function 'kotlin.math.max' call
      var b = $this$with.u4q_1 - 1 | 0;
      tmp = Math.max(0, b);
    } else {
      tmp = $this$with.r4r($this$with.t4q_1.p4r($this$with.q4r(position)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).s4r = function (offset) {
    requireIndexInRange(this, offset);
    var paragraphIndex = findParagraphByIndex(this.m4q_1, offset);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBoundingBox.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.b4r($this$with.t4q_1.s4r($this$with.k4r(offset)));
  };
  protoOf(MultiParagraph).t4r = function (offset, usePrimaryDirection) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.m4q_1);
    } else {
      tmp = findParagraphByIndex(this.m4q_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getHorizontalPosition.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.t4q_1.t4r($this$with.k4r(offset), usePrimaryDirection);
  };
  protoOf(MultiParagraph).u4r = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.m4q_1);
    } else {
      tmp = findParagraphByIndex(this.m4q_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getParagraphDirection.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.t4q_1.u4r($this$with.k4r(offset));
  };
  protoOf(MultiParagraph).v4r = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.m4q_1);
    } else {
      tmp = findParagraphByIndex(this.m4q_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBidiRunDirection.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.t4q_1.v4r($this$with.k4r(offset));
  };
  protoOf(MultiParagraph).w4r = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.m4q_1);
    } else {
      tmp = findParagraphByIndex(this.m4q_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getWordBoundary.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.x4r($this$with.t4q_1.w4r($this$with.k4r(offset)));
  };
  protoOf(MultiParagraph).y4r = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.m4q_1);
    } else {
      tmp = findParagraphByIndex(this.m4q_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getCursorRect.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.b4r($this$with.t4q_1.y4r($this$with.k4r(offset)));
  };
  protoOf(MultiParagraph).z4r = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.m4q_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.m4q_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForOffset.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.o4r($this$with.t4q_1.z4r($this$with.k4r(offset)));
  };
  protoOf(MultiParagraph).a4s = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.m4q_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineLeft.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.t4q_1.a4s($this$with.b4s(lineIndex));
  };
  protoOf(MultiParagraph).c4s = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.m4q_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineRight.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.t4q_1.c4s($this$with.b4s(lineIndex));
  };
  protoOf(MultiParagraph).d4s = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.m4q_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.e4r($this$with.t4q_1.d4s($this$with.b4s(lineIndex)));
  };
  protoOf(MultiParagraph).e4s = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.m4q_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineBottom.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.e4r($this$with.t4q_1.e4s($this$with.b4s(lineIndex)));
  };
  protoOf(MultiParagraph).f4s = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.m4q_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineHeight.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.t4q_1.f4s($this$with.b4s(lineIndex));
  };
  protoOf(MultiParagraph).g4s = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.m4q_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineStart.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.r4r($this$with.t4q_1.g4s($this$with.b4s(lineIndex)));
  };
  protoOf(MultiParagraph).h4s = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.m4q_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    var $this$with = this.m4q_1.i1(paragraphIndex);
    return $this$with.r4r($this$with.t4q_1.h4s($this$with.b4s(lineIndex), visibleEnd));
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.t4q_1 = paragraph;
    this.u4q_1 = startIndex;
    this.v4q_1 = endIndex;
    this.w4q_1 = startLineIndex;
    this.x4q_1 = endLineIndex;
    this.y4q_1 = top;
    this.z4q_1 = bottom;
  }
  protoOf(ParagraphInfo).a = function () {
    return this.v4q_1 - this.u4q_1 | 0;
  };
  protoOf(ParagraphInfo).k4r = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.u4q_1, this.v4q_1) - this.u4q_1 | 0;
  };
  protoOf(ParagraphInfo).r4r = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.u4q_1 | 0;
  };
  protoOf(ParagraphInfo).b4s = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.w4q_1 | 0;
  };
  protoOf(ParagraphInfo).o4r = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.w4q_1 | 0;
  };
  protoOf(ParagraphInfo).e4r = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.y4q_1;
  };
  protoOf(ParagraphInfo).n4r = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.y4q_1;
  };
  protoOf(ParagraphInfo).q4r = function (_this__u8e3s4) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - this.y4q_1);
  };
  protoOf(ParagraphInfo).b4r = function (_this__u8e3s4) {
    return _this__u8e3s4.n39(Offset(0.0, this.y4q_1));
  };
  protoOf(ParagraphInfo).l4r = function (_this__u8e3s4) {
    _this__u8e3s4.f4a(Offset(0.0, this.y4q_1));
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).x4r = function (_this__u8e3s4) {
    return TextRange_0(this.r4r(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.r4r(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + this.t4q_1 + ', startIndex=' + this.u4q_1 + ', endIndex=' + this.v4q_1 + ', startLineIndex=' + this.w4q_1 + ', endLineIndex=' + this.x4q_1 + ', top=' + this.y4q_1 + ', bottom=' + this.z4q_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.t4q_1);
    result = imul(result, 31) + this.u4q_1 | 0;
    result = imul(result, 31) + this.v4q_1 | 0;
    result = imul(result, 31) + this.w4q_1 | 0;
    result = imul(result, 31) + this.x4q_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.y4q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z4q_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.t4q_1, tmp0_other_with_cast.t4q_1))
      return false;
    if (!(this.u4q_1 === tmp0_other_with_cast.u4q_1))
      return false;
    if (!(this.v4q_1 === tmp0_other_with_cast.v4q_1))
      return false;
    if (!(this.w4q_1 === tmp0_other_with_cast.w4q_1))
      return false;
    if (!(this.x4q_1 === tmp0_other_with_cast.x4q_1))
      return false;
    if (!equals(this.y4q_1, tmp0_other_with_cast.y4q_1))
      return false;
    if (!equals(this.z4q_1, tmp0_other_with_cast.z4q_1))
      return false;
    return true;
  };
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.n() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.i1(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        var cmp = midVal.u4q_1 > index ? 1 : midVal.v4q_1 <= index ? -1 : 0;
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
      var high = paragraphInfoList.n() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.i1(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        var cmp = midVal.y4q_1 > y ? 1 : midVal.z4q_1 <= y ? -1 : 0;
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
      var high = paragraphInfoList.n() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.i1(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        var cmp = midVal.w4q_1 > lineIndex ? 1 : midVal.x4q_1 <= lineIndex ? -1 : 0;
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
  function resolveTextDirection($this, style, defaultStyle) {
    var tmp0_safe_receiver = style.m4p_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_1 = tmp0_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.resolveTextDirection.<anonymous>' call
      (tmp_1 == null ? null : new TextDirection(tmp_1)).i4s_1;
      tmp = style;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? style.j4s(VOID, defaultStyle.m4p_1) : tmp1_elvis_lhs;
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.d4q_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.e1()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.i1(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.o4q_1.h3s();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.i1(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.o4q_1.h3s();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o4q_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.h3s();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var this_0 = this$0.d4q_1;
        // Inline function 'kotlin.contracts.contract' call
        if (this_0.e1()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = this_0.i1(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.o4q_1.i3s();
        var inductionVariable = 1;
        var last = get_lastIndex(this_0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = this_0.i1(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.o4q_1.i3s();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o4q_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i3s();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.z4p_1 = annotatedString;
    this.a4q_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.b4q_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.c4q_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.o4s();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.z4p_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_1.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_1.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.i1(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(this_0, item.u4o_1, item.v4o_1);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.t4o_1, paragraphStyle);
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.y4o_1, style.p4s(currentParagraphStyle), annotatedString_0.h4p(), getLocalPlaceholders(this.a4q_1, item.u4o_1, item.v4o_1), density, fontFamilyResolver), item.u4o_1, item.v4o_1);
        target.s(element);
      }
       while (inductionVariable <= last);
    tmp_3.d4q_1 = target;
    this.e4q_1 = 0;
  }
  protoOf(MultiParagraphIntrinsics).h3s = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.b4q_1;
    minIntrinsicWidth$factory();
    return this_0.u2();
  };
  protoOf(MultiParagraphIntrinsics).i3s = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.c4q_1;
    maxIntrinsicWidth$factory();
    return this_0.u2();
  };
  protoOf(MultiParagraphIntrinsics).q4s = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.d4q_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.i1(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          if (item.o4q_1.q4s()) {
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
    this.o4q_1 = intrinsics;
    this.p4q_1 = startIndex;
    this.q4q_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + this.o4q_1 + ', startIndex=' + this.p4q_1 + ', endIndex=' + this.q4q_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.o4q_1);
    result = imul(result, 31) + this.p4q_1 | 0;
    result = imul(result, 31) + this.q4q_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.o4q_1, tmp0_other_with_cast.o4q_1))
      return false;
    if (!(this.p4q_1 === tmp0_other_with_cast.p4q_1))
      return false;
    if (!(this.q4q_1 === tmp0_other_with_cast.q4q_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i1(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        if (intersect(start, end, item.u4o_1, item.v4o_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.s(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(target.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.i1(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(start <= item_0.u4o_1 ? item_0.v4o_1 <= end : false)) {
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          var message = 'placeholder can not overlap with paragraph.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var element = Range_init_$Create$(item_0.t4o_1, item_0.u4o_1 - start | 0, item_0.v4o_1 - start | 0);
        target_0.s(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.h3s();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.i3s();
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
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().r3c_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.l4p_1 = textAlign;
    this.m4p_1 = textDirection;
    this.n4p_1 = lineHeight;
    this.o4p_1 = textIndent;
    this.p4p_1 = platformStyle;
    this.q4p_1 = lineHeightStyle;
    this.r4p_1 = lineBreak;
    this.s4p_1 = hyphens;
    this.t4p_1 = textMotion;
    var tmp = this;
    var tmp0_elvis_lhs = this.l4p_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_37().v4s_1;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.u4p_1 = tmp_0;
    var tmp_2 = this;
    var tmp0_elvis_lhs_0 = this.r4p_1;
    var tmp_3;
    var tmp_4 = tmp0_elvis_lhs_0;
    if ((tmp_4 == null ? null : new LineBreak(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_47().x4s_1;
    } else {
      tmp_3 = tmp0_elvis_lhs_0;
    }
    tmp_2.v4p_1 = tmp_3;
    var tmp_5 = this;
    var tmp0_elvis_lhs_1 = this.s4p_1;
    var tmp_6;
    var tmp_7 = tmp0_elvis_lhs_1;
    if ((tmp_7 == null ? null : new Hyphens(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_36().a4t_1;
    } else {
      tmp_6 = tmp0_elvis_lhs_1;
    }
    tmp_5.w4p_1 = tmp_6;
    if (!equals(this.n4p_1, Companion_getInstance_1().r3c_1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.n4p_1) >= 0.0)) {
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        var message = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.n4p_1) + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    this.x4p_1 = 0;
  }
  protoOf(ParagraphStyle_0).y4p = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.l4p_1, other.m4p_1, other.n4p_1, other.o4p_1, other.p4p_1, other.q4p_1, other.r4p_1, other.s4p_1, other.t4p_1);
  };
  protoOf(ParagraphStyle_0).c4t = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).j4s = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.l4p_1 : textAlign;
    textDirection = textDirection === VOID ? this.m4p_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.n4p_1 : lineHeight;
    textIndent = textIndent === VOID ? this.o4p_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.p4p_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.q4p_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.r4p_1 : lineBreak;
    hyphens = hyphens === VOID ? this.s4p_1 : hyphens;
    textMotion = textMotion === VOID ? this.t4p_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.c4t(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.c4t;
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
    var tmp = this.l4p_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = other.l4p_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1)))
      return false;
    var tmp_2 = this.m4p_1;
    var tmp_3 = tmp_2 == null ? null : new TextDirection(tmp_2);
    var tmp_4 = other.m4p_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new TextDirection(tmp_4)))
      return false;
    if (!equals(this.n4p_1, other.n4p_1))
      return false;
    if (!equals(this.o4p_1, other.o4p_1))
      return false;
    if (!equals(this.p4p_1, other.p4p_1))
      return false;
    if (!equals(this.q4p_1, other.q4p_1))
      return false;
    var tmp_5 = this.r4p_1;
    var tmp_6 = tmp_5 == null ? null : new LineBreak(tmp_5);
    var tmp_7 = other.r4p_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new LineBreak(tmp_7)))
      return false;
    var tmp_8 = this.s4p_1;
    var tmp_9 = tmp_8 == null ? null : new Hyphens(tmp_8);
    var tmp_10 = other.s4p_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new Hyphens(tmp_10)))
      return false;
    if (!equals(this.t4p_1, other.t4p_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var tmp0_safe_receiver = this.l4p_1;
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
    var tmp2_safe_receiver = this.m4p_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = TextDirection__hashCode_impl_g63nwg(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.n4p_1) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.o4p_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_5 = imul(31, result);
    var tmp6_safe_receiver = this.p4p_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_5 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp8_safe_receiver = this.q4p_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.hashCode();
    result = tmp_6 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp10_safe_receiver = this.r4p_1;
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
    var tmp12_safe_receiver = this.s4p_1;
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
    var tmp14_safe_receiver = this.t4p_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : hashCode(tmp14_safe_receiver);
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    var tmp = this.l4p_1;
    var tmp_0 = 'ParagraphStyle(' + ('textAlign=' + (tmp == null ? null : new TextAlign(tmp)) + ', ');
    var tmp_1 = this.m4p_1;
    var tmp_2 = tmp_0 + ('textDirection=' + (tmp_1 == null ? null : new TextDirection(tmp_1)) + ', ') + ('lineHeight=' + new TextUnit(this.n4p_1) + ', ') + ('textIndent=' + this.o4p_1 + ', ') + ('platformStyle=' + this.p4p_1 + ', ') + ('lineHeightStyle=' + this.q4p_1 + ', ');
    var tmp_3 = this.r4p_1;
    var tmp_4 = tmp_2 + ('lineBreak=' + (tmp_3 == null ? null : new LineBreak(tmp_3)) + ', ');
    var tmp_5 = this.s4p_1;
    return tmp_4 + ('hyphens=' + (tmp_5 == null ? null : new Hyphens(tmp_5)) + ', ') + ('textMotion=' + this.t4p_1) + ')';
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
      var tmp_11 = _this__u8e3s4.l4p_1;
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
        tmp_12 = !equals(lineHeight, _this__u8e3s4.n4p_1);
      } else {
        tmp_12 = false;
      }
      tmp_6 = tmp_12;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = !(textIndent == null) ? !equals(textIndent, _this__u8e3s4.o4p_1) : false;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      var tmp_13;
      var tmp_14 = textDirection;
      if (!((tmp_14 == null ? null : new TextDirection(tmp_14)) == null)) {
        var tmp_15 = textDirection;
        var tmp_16 = tmp_15 == null ? null : new TextDirection(tmp_15);
        var tmp_17 = _this__u8e3s4.m4p_1;
        tmp_13 = !equals(tmp_16, tmp_17 == null ? null : new TextDirection(tmp_17));
      } else {
        tmp_13 = false;
      }
      tmp_4 = tmp_13;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.p4p_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !(lineHeightStyle == null) ? !equals(lineHeightStyle, _this__u8e3s4.q4p_1) : false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      var tmp_18;
      var tmp_19 = lineBreak;
      if (!((tmp_19 == null ? null : new LineBreak(tmp_19)) == null)) {
        var tmp_20 = lineBreak;
        var tmp_21 = tmp_20 == null ? null : new LineBreak(tmp_20);
        var tmp_22 = _this__u8e3s4.r4p_1;
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
        var tmp_27 = _this__u8e3s4.s4p_1;
        tmp_23 = !equals(tmp_26, tmp_27 == null ? null : new Hyphens(tmp_27));
      } else {
        tmp_23 = false;
      }
      tmp_0 = tmp_23;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(textMotion == null) ? !equals(textMotion, _this__u8e3s4.t4p_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_28;
    if (get_isUnspecified(lineHeight)) {
      tmp_28 = _this__u8e3s4.n4p_1;
    } else {
      tmp_28 = lineHeight;
    }
    var tmp7_lineHeight = tmp_28;
    var tmp8_textIndent = textIndent == null ? _this__u8e3s4.o4p_1 : textIndent;
    var tmp_29;
    var tmp_30 = textAlign;
    if ((tmp_30 == null ? null : new TextAlign(tmp_30)) == null) {
      tmp_29 = _this__u8e3s4.l4p_1;
    } else {
      tmp_29 = textAlign;
    }
    var tmp9_textAlign = tmp_29;
    var tmp_31;
    var tmp_32 = textDirection;
    if ((tmp_32 == null ? null : new TextDirection(tmp_32)) == null) {
      tmp_31 = _this__u8e3s4.m4p_1;
    } else {
      tmp_31 = textDirection;
    }
    var tmp10_textDirection = tmp_31;
    var tmp11_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp12_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.q4p_1 : lineHeightStyle;
    var tmp_33;
    var tmp_34 = lineBreak;
    if ((tmp_34 == null ? null : new LineBreak(tmp_34)) == null) {
      tmp_33 = _this__u8e3s4.r4p_1;
    } else {
      tmp_33 = lineBreak;
    }
    var tmp13_lineBreak = tmp_33;
    var tmp_35;
    var tmp_36 = hyphens;
    if ((tmp_36 == null ? null : new Hyphens(tmp_36)) == null) {
      tmp_35 = _this__u8e3s4.s4p_1;
    } else {
      tmp_35 = hyphens;
    }
    var tmp14_hyphens = tmp_35;
    var tmp15_textMotion = textMotion == null ? _this__u8e3s4.t4p_1 : textMotion;
    return new ParagraphStyle_0(tmp9_textAlign, tmp10_textDirection, tmp7_lineHeight, tmp8_textIndent, tmp11_platformStyle, tmp12_lineHeightStyle, tmp13_lineBreak, tmp14_hyphens, tmp15_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.p4p_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.p4p_1;
    return _this__u8e3s4.p4p_1.e4t(other);
  }
  function lerp_4(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = start.l4p_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = stop.l4p_1;
    var tmp_2 = lerpDiscrete(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1), fraction);
    var tmp_3 = tmp_2 == null ? null : tmp_2.f4t_1;
    var tmp_4 = start.m4p_1;
    var tmp_5 = tmp_4 == null ? null : new TextDirection(tmp_4);
    var tmp_6 = stop.m4p_1;
    var tmp_7 = lerpDiscrete(tmp_5, tmp_6 == null ? null : new TextDirection(tmp_6), fraction);
    var tmp_8 = tmp_7 == null ? null : tmp_7.i4s_1;
    var tmp_9 = lerpTextUnitInheritable(start.n4p_1, stop.n4p_1, fraction);
    var tmp0_elvis_lhs = start.o4p_1;
    var tmp_10 = tmp0_elvis_lhs == null ? Companion_getInstance_42().g4t_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.o4p_1;
    var tmp_11 = lerp_11(tmp_10, tmp1_elvis_lhs == null ? Companion_getInstance_42().g4t_1 : tmp1_elvis_lhs, fraction);
    var tmp_12 = lerpPlatformStyle(start.p4p_1, stop.p4p_1, fraction);
    var tmp_13 = lerpDiscrete(start.q4p_1, stop.q4p_1, fraction);
    var tmp_14 = start.r4p_1;
    var tmp_15 = tmp_14 == null ? null : new LineBreak(tmp_14);
    var tmp_16 = stop.r4p_1;
    var tmp_17 = lerpDiscrete(tmp_15, tmp_16 == null ? null : new LineBreak(tmp_16), fraction);
    var tmp_18 = tmp_17 == null ? null : tmp_17.h4t_1;
    var tmp_19 = start.s4p_1;
    var tmp_20 = tmp_19 == null ? null : new Hyphens(tmp_19);
    var tmp_21 = stop.s4p_1;
    var tmp_22 = lerpDiscrete(tmp_20, tmp_21 == null ? null : new Hyphens(tmp_21), fraction);
    return new ParagraphStyle_0(tmp_3, tmp_8, tmp_9, tmp_11, tmp_12, tmp_13, tmp_18, tmp_22 == null ? null : tmp_22.i4t_1, lerpDiscrete(start.t4p_1, stop.t4p_1, fraction));
  }
  function lerpPlatformStyle(start, stop, fraction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (start == null ? stop == null : false)
      return null;
    var startNonNull = start == null ? Companion_getInstance_45().j4t_1 : start;
    var stopNonNull = stop == null ? Companion_getInstance_45().j4t_1 : stop;
    return lerp_13(startNonNull, stopNonNull, fraction);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = resolveTextDirection_0(direction, style.m4p_1);
    var tmp_0 = get_isUnspecified(style.n4p_1) ? get_DefaultLineHeight() : style.n4p_1;
    var tmp0_elvis_lhs = style.o4p_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_42().g4t_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.t4p_1;
    return new ParagraphStyle_0(style.u4p_1, tmp, tmp_0, tmp_1, style.p4p_1, style.q4p_1, style.v4p_1, style.w4p_1, tmp1_elvis_lhs == null ? Companion_getInstance_48().k4t_1 : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().r3c_1;
    }
  }
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.m4t_1, other.m4t_1))
      return false;
    if (!equals(this.n4t_1, other.n4t_1))
      return false;
    if (!(this.o4t_1 === other.o4t_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.m4t_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.n4t_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.o4t_1) | 0;
    return result;
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function Companion() {
    Companion_instance_0 = this;
    this.p4t_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.q4t_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.r4t_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.s4t_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.t4t_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.u4t_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.v4t_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
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
      tmp = saver.g4n(scope, value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_Url_instance;
  var AnnotationType_String_instance;
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_instance;
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
    return arrayListOf([save(it.y4o_1), save_0(it.h4p(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.i4p(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.b4p_1, get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.i1(1);
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
        var tmp_0 = saver.e4n(value);
        tmp = (tmp_0 == null ? true : isInterface(tmp_0, List)) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
    }
    var spanStylesOrNull = tmp$ret$0;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.i1(2);
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
        var tmp_2 = saver_0.e4n(value_0);
        tmp_1 = (tmp_2 == null ? true : isInterface(tmp_2, List)) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$5 = tmp_1;
    }
    var paragraphStylesOrNull = tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.i1(0);
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
      if (spanStylesOrNull.e1()) {
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
      if (paragraphStylesOrNull.e1()) {
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
      var value_1 = list.i1(3);
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
        var tmp_12 = saver_1.e4n(value_1);
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
    var target = ArrayList_init_$Create$_0(it.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = it.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.i1(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        var element = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        target.s(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.i1(index);
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
            var tmp_0 = saver.e4n(item);
            tmp = (tmp_0 == null ? true : tmp_0 instanceof Range) ? tmp_0 : THROW_CCE();
          }
          tmp$ret$0 = tmp;
        }
        var range = ensureNotNull(tmp$ret$0);
        target.s(range);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.t4o_1;
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
    switch (marker.j9_1) {
      case 0:
        var tmp_1 = it.t4o_1;
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.t4o_1;
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.t4o_1;
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.t4o_1;
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        tmp_0 = save(it.t4o_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.u4o_1), save(it.v4o_1), save(it.w4o_1)]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.i1(0);
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
    var tmp0_safe_receiver_0 = list.i1(2);
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
    var tmp0_safe_receiver_1 = list.i1(3);
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
    var tmp0_safe_receiver_2 = list.i1(4);
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
    switch (marker.j9_1) {
      case 0:
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var value = list.i1(1);
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
            var tmp_5 = saver.e4n(value);
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
          var value_0 = list.i1(1);
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
            var tmp_7 = saver_0.e4n(value_0);
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
          var value_1 = list.i1(1);
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
            var tmp_9 = saver_1.e4n(value_1);
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
          var value_2 = list.i1(1);
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
            var tmp_11 = saver_2.e4n(value_2);
            tmp_10 = (tmp_11 == null ? true : tmp_11 instanceof UrlAnnotation) ? tmp_11 : THROW_CCE();
          }
          tmp$ret$27 = tmp_10;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.i1(1);
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
    return save(it.x4t_1);
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
    return save(it.z4t_1);
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
    var tmp = it.l4p_1;
    var tmp_0 = save(tmp == null ? null : new TextAlign(tmp));
    var tmp_1 = it.m4p_1;
    return arrayListOf([tmp_0, save(tmp_1 == null ? null : new TextDirection(tmp_1)), save_0(new TextUnit(it.n4p_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(it.o4p_1, get_Saver_0(Companion_getInstance_42()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.i1(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = tmp0_safe_receiver instanceof TextAlign ? tmp0_safe_receiver.f4t_1 : THROW_CCE();
    }
    var tmp_0 = tmp;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.i1(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = tmp0_safe_receiver_0 instanceof TextDirection ? tmp0_safe_receiver_0.i4s_1 : THROW_CCE();
    }
    var tmp_2 = tmp_1;
    var tmp$ret$6;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.i1(2);
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
        var tmp_4 = saver.e4n(value);
        var tmp_5 = tmp_4 == null ? null : tmp_4.t3c_1;
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
      var value_0 = list.i1(3);
      var saver_0 = get_Saver_0(Companion_getInstance_42());
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
        var tmp_13 = saver_0.e4n(value_0);
        tmp_12 = (tmp_13 == null ? true : tmp_13 instanceof TextIndent_0) ? tmp_13 : THROW_CCE();
      }
      tmp$ret$11 = tmp_12;
    }
    return new ParagraphStyle_0(tmp_0, tmp_2, tmp_11.t3c_1, tmp$ret$11);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.m42()), get_Saver_1(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.c4u_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_1 = save_0(it.d4u_1, get_Saver_2(Companion_getInstance_23()), $this$Saver);
    var tmp_2 = it.e4u_1;
    var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = it.f4u_1;
    var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = save(-1);
    var tmp_7 = save(it.h4u_1);
    var tmp_8 = save_0(new TextUnit(it.i4u_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_9 = it.j4u_1;
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_3(Companion_getInstance_35()), $this$Saver), save_0(it.k4u_1, get_Saver_4(Companion_getInstance_41()), $this$Saver), save_0(it.l4u_1, get_Saver_5(Companion_instance_21), $this$Saver), save_0(new Color(it.m4u_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(it.n4u_1, get_Saver_6(Companion_getInstance_38()), $this$Saver), save_0(it.o4u_1, get_Saver_7(Companion_getInstance_2()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.i1(0);
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
        var tmp_0 = saver.e4n(value);
        var tmp_1 = tmp_0 == null ? null : tmp_0.p41_1;
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
      var value_0 = list.i1(1);
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
        var tmp_9 = saver_0.e4n(value_0);
        var tmp_10 = tmp_9 == null ? null : tmp_9.t3c_1;
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
      var value_1 = list.i1(2);
      var saver_1 = get_Saver_2(Companion_getInstance_23());
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
        var tmp_18 = saver_1.e4n(value_1);
        tmp_17 = (tmp_18 == null ? true : tmp_18 instanceof FontWeight) ? tmp_18 : THROW_CCE();
      }
      tmp$ret$10 = tmp_17;
    }
    var tmp_19 = tmp$ret$10;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.i1(3);
    var tmp_20;
    if (tmp0_safe_receiver == null) {
      tmp_20 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_20 = tmp0_safe_receiver instanceof FontStyle ? tmp0_safe_receiver.s4u_1 : THROW_CCE();
    }
    var tmp_21 = tmp_20;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.i1(4);
    var tmp_22;
    if (tmp0_safe_receiver_0 == null) {
      tmp_22 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_22 = tmp0_safe_receiver_0 instanceof FontSynthesis ? tmp0_safe_receiver_0.t4u_1 : THROW_CCE();
    }
    var tmp_23 = tmp_22;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.i1(6);
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
      var value_2 = list.i1(7);
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
        var tmp_27 = saver_2.e4n(value_2);
        var tmp_28 = tmp_27 == null ? null : tmp_27.t3c_1;
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
      var value_3 = list.i1(8);
      var saver_3 = get_Saver_3(Companion_getInstance_35());
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
        var tmp_36 = saver_3.e4n(value_3);
        var tmp_37 = tmp_36 == null ? null : tmp_36.u4u_1;
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
      var value_4 = list.i1(9);
      var saver_4 = get_Saver_4(Companion_getInstance_41());
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
        var tmp_44 = saver_4.e4n(value_4);
        tmp_43 = (tmp_44 == null ? true : tmp_44 instanceof TextGeometricTransform) ? tmp_44 : THROW_CCE();
      }
      tmp$ret$34 = tmp_43;
    }
    var tmp_45 = tmp$ret$34;
    var tmp$ret$39;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_5 = list.i1(10);
      var saver_5 = get_Saver_5(Companion_instance_21);
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
        var tmp_47 = saver_5.e4n(value_5);
        tmp_46 = (tmp_47 == null ? true : tmp_47 instanceof LocaleList) ? tmp_47 : THROW_CCE();
      }
      tmp$ret$39 = tmp_46;
    }
    var tmp_48 = tmp$ret$39;
    var tmp$ret$44;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_6 = list.i1(11);
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
        var tmp_50 = saver_6.e4n(value_6);
        var tmp_51 = tmp_50 == null ? null : tmp_50.p41_1;
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
      var value_7 = list.i1(12);
      var saver_7 = get_Saver_6(Companion_getInstance_38());
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
        var tmp_59 = saver_7.e4n(value_7);
        tmp_58 = (tmp_59 == null ? true : tmp_59 instanceof TextDecoration) ? tmp_59 : THROW_CCE();
      }
      tmp$ret$49 = tmp_58;
    }
    var tmp_60 = tmp$ret$49;
    var tmp$ret$54;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_8 = list.i1(13);
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
        var tmp_62 = saver_8.e4n(value_8);
        tmp_61 = (tmp_62 == null ? true : tmp_62 instanceof Shadow) ? tmp_62 : THROW_CCE();
      }
      tmp$ret$54 = tmp_61;
    }
    return SpanStyle_init_$Create$(tmp_7.p41_1, tmp_16.t3c_1, tmp_19, tmp_21, tmp_23, VOID, tmp_25, tmp_34.t3c_1, tmp_42, tmp_45, tmp_48, tmp_57.p41_1, tmp_60, tmp$ret$54);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.v4u_1;
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.x4u_1, it.y4u_1]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    return new TextGeometricTransform(list.i1(0), list.i1(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.a4v_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(new TextUnit(it.b4v_1), get_Saver(Companion_getInstance_1()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.i1(0);
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
        var tmp_0 = saver.e4n(value);
        var tmp_1 = tmp_0 == null ? null : tmp_0.t3c_1;
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
      var value_0 = list.i1(1);
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
        var tmp_9 = saver_0.e4n(value_0);
        var tmp_10 = tmp_9 == null ? null : tmp_9.t3c_1;
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
    return new TextIndent_0(tmp_7.t3c_1, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).t3c_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.d4v_1;
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.u4u_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.f4v_1)), save(_TextRange___get_end__impl__gcdxpp(it.f4v_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.i1(0);
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
    var tmp0_safe_receiver_0 = list.i1(1);
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
    return arrayListOf([save_0(new Color(it.s4a_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(new Offset_0(it.t4a_1), get_Saver_8(Companion_getInstance_3()), $this$Saver), save(it.u4a_1)]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.i1(0);
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
        var tmp_0 = saver.e4n(value);
        var tmp_1 = tmp_0 == null ? null : tmp_0.p41_1;
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
      var value_0 = list.i1(1);
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
        var tmp_9 = saver_0.e4n(value_0);
        var tmp_10 = tmp_9 == null ? null : tmp_9.c39_1;
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
    var tmp0_safe_receiver = list.i1(2);
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
    return new Shadow(tmp_7.p41_1, tmp_16.c39_1, ensureNotNull(tmp$ret$12));
  }
  function ColorSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return new ULong(_Color___get_value__impl__1pls5m(it.p41_1));
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Color(_Color___init__impl__r6cqi2(it instanceof ULong ? it.xg_1 : THROW_CCE()));
  }
  function TextUnitSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.t3c_1)), save(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.t3c_1)))]);
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.i1(0);
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
    var tmp0_safe_receiver_0 = list.i1(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = tmp0_safe_receiver_0 instanceof TextUnitType ? tmp0_safe_receiver_0.s3c_1 : THROW_CCE();
    }
    var tmp_2 = tmp_1;
    return new TextUnit(TextUnit_0(tmp_0, ensureNotNull(tmp_2 == null ? null : new TextUnitType(tmp_2)).s3c_1));
  }
  function OffsetSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset_0(Companion_getInstance_3().b39_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_Offset___get_x__impl__xvi35n(it.c39_1)), save(_Offset___get_y__impl__8bzhra(it.c39_1))]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_3().b39_1;
    } else {
      var list = isInterface(it, List) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.i1(0);
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
      var tmp0_safe_receiver_0 = list.i1(1);
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
    var this_0 = it.g4v_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(this_0.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.i1(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var element = save_0(item, get_Saver_9(Companion_instance_20), $this$Saver);
        target.s(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function LocaleListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, List) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(list.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.i1(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var saver = get_Saver_9(Companion_instance_20);
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
            var tmp_0 = saver.e4n(item);
            tmp = (tmp_0 == null ? true : tmp_0 instanceof Locale) ? tmp_0 : THROW_CCE();
          }
          tmp$ret$0 = tmp;
        }
        var element = ensureNotNull(tmp$ret$0);
        target.s(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.l4v();
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
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().k42_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().r3c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().r3c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().k42_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_27.m4v(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    fontSize = fontSize === VOID ? Companion_getInstance_1().r3c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().r3c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().k42_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_27.n4v(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().r3c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().r3c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().k42_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.b4u_1 = textForegroundStyle;
    this.c4u_1 = fontSize;
    this.d4u_1 = fontWeight;
    this.e4u_1 = fontStyle;
    this.f4u_1 = fontSynthesis;
    this.g4u_1 = fontFamily;
    this.h4u_1 = fontFeatureSettings;
    this.i4u_1 = letterSpacing;
    this.j4u_1 = baselineShift;
    this.k4u_1 = textGeometricTransform;
    this.l4u_1 = localeList;
    this.m4u_1 = background;
    this.n4u_1 = textDecoration;
    this.o4u_1 = shadow;
    this.p4u_1 = platformStyle;
    this.q4u_1 = drawStyle;
    this.r4u_1 = 0;
  }
  protoOf(SpanStyle).m42 = function () {
    return this.b4u_1.m42();
  };
  protoOf(SpanStyle).o4v = function () {
    return this.b4u_1.o4v();
  };
  protoOf(SpanStyle).y3z = function () {
    return this.b4u_1.y3z();
  };
  protoOf(SpanStyle).p4v = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.b4u_1.m42(), other.b4u_1.o4v(), other.b4u_1.y3z(), other.c4u_1, other.d4u_1, other.e4u_1, other.f4u_1, other.g4u_1, other.h4u_1, other.i4u_1, other.j4u_1, other.k4u_1, other.l4u_1, other.m4u_1, other.n4u_1, other.o4u_1, other.p4u_1, other.q4u_1);
  };
  protoOf(SpanStyle).q4v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.m42())) {
      tmp = this.b4u_1;
    } else {
      tmp = Companion_instance_27.m4v(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).r4v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.m42() : color;
    fontSize = fontSize === VOID ? this.c4u_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.d4u_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.e4u_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.f4u_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.g4u_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.h4u_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.i4u_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.j4u_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.k4u_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.l4u_1 : localeList;
    background = background === VOID ? this.m4u_1 : background;
    textDecoration = textDecoration === VOID ? this.n4u_1 : textDecoration;
    shadow = shadow === VOID ? this.o4u_1 : shadow;
    platformStyle = platformStyle === VOID ? this.p4u_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.q4u_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.q4v(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.q4v;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.t4v(other) ? this.s4v(other) : false;
  };
  protoOf(SpanStyle).t4v = function (other) {
    if (this === other)
      return true;
    if (!equals(this.c4u_1, other.c4u_1))
      return false;
    if (!equals(this.d4u_1, other.d4u_1))
      return false;
    var tmp = this.e4u_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.e4u_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.f4u_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.f4u_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.g4u_1, other.g4u_1))
      return false;
    if (!(this.h4u_1 == other.h4u_1))
      return false;
    if (!equals(this.i4u_1, other.i4u_1))
      return false;
    var tmp_5 = this.j4u_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.j4u_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.k4u_1, other.k4u_1))
      return false;
    if (!equals(this.l4u_1, other.l4u_1))
      return false;
    if (!equals(this.m4u_1, other.m4u_1))
      return false;
    if (!equals(this.p4u_1, other.p4u_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).s4v = function (other) {
    if (!equals(this.b4u_1, other.b4u_1))
      return false;
    if (!equals(this.n4u_1, other.n4u_1))
      return false;
    if (!equals(this.o4u_1, other.o4u_1))
      return false;
    if (!equals(this.q4u_1, other.q4u_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.m42());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.o4v();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.y3z()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.c4u_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.d4u_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.e4u_1;
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
    var tmp4_safe_receiver = this.f4u_1;
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
    var tmp6_safe_receiver = this.g4u_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.h4u_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.i4u_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.j4u_1;
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
    var tmp12_safe_receiver = this.k4u_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.l4u_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.m4u_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.n4u_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.o4u_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.p4u_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.q4u_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    var tmp = 'SpanStyle(' + ('color=' + new Color(this.m42()) + ', ') + ('brush=' + this.o4v() + ', ') + ('alpha=' + this.y3z() + ', ') + ('fontSize=' + new TextUnit(this.c4u_1) + ', ') + ('fontWeight=' + this.d4u_1 + ', ');
    var tmp_0 = this.e4u_1;
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.f4u_1;
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.g4u_1 + ', ') + ('fontFeatureSettings=' + this.h4u_1 + ', ') + ('letterSpacing=' + new TextUnit(this.i4u_1) + ', ');
    var tmp_4 = this.j4u_1;
    return tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.k4u_1 + ', ') + ('localeList=' + this.l4u_1 + ', ') + ('background=' + new Color(this.m4u_1) + ', ') + ('textDecoration=' + this.n4u_1 + ', ') + ('shadow=' + this.o4u_1 + ', ') + ('platformStyle=' + this.p4u_1 + ', ') + ('drawStyle=' + this.q4u_1) + ')';
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
      tmp_16 = !equals(fontSize, _this__u8e3s4.c4u_1);
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
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.b4u_1.m42());
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
        var tmp_23 = _this__u8e3s4.e4u_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !(fontWeight == null) ? !equals(fontWeight, _this__u8e3s4.d4u_1) : false;
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = !(fontFamily == null) ? !(fontFamily === _this__u8e3s4.g4u_1) : false;
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(letterSpacing)) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.i4u_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = !(textDecoration == null) ? !equals(textDecoration, _this__u8e3s4.n4u_1) : false;
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.b4u_1.o4v());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = !(brush == null) ? !(alpha === _this__u8e3s4.b4u_1.y3z()) : false;
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.f4u_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = !(fontFeatureSettings == null) ? !(fontFeatureSettings == _this__u8e3s4.h4u_1) : false;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.j4u_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = !(textGeometricTransform == null) ? !equals(textGeometricTransform, _this__u8e3s4.k4u_1) : false;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(localeList == null) ? !equals(localeList, _this__u8e3s4.l4u_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
        tmp_35 = !equals(background, _this__u8e3s4.m4u_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !(shadow == null) ? !equals(shadow, _this__u8e3s4.o4u_1) : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.p4u_1) : false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(drawStyle == null) ? !equals(drawStyle, _this__u8e3s4.q4u_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_instance_27.n4v(brush, alpha);
    } else {
      tmp_36 = Companion_instance_27.m4v(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.b4u_1.u4v(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.g4u_1 : fontFamily;
    var tmp13_fontSize = !get_isUnspecified(fontSize) ? fontSize : _this__u8e3s4.c4u_1;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.d4u_1 : fontWeight;
    var tmp_37;
    var tmp_38 = fontStyle;
    if ((tmp_38 == null ? null : new FontStyle(tmp_38)) == null) {
      tmp_37 = _this__u8e3s4.e4u_1;
    } else {
      tmp_37 = fontStyle;
    }
    var tmp15_fontStyle = tmp_37;
    var tmp_39;
    var tmp_40 = fontSynthesis;
    if ((tmp_40 == null ? null : new FontSynthesis(tmp_40)) == null) {
      tmp_39 = _this__u8e3s4.f4u_1;
    } else {
      tmp_39 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_39;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.h4u_1 : fontFeatureSettings;
    var tmp_41;
    if (!get_isUnspecified(letterSpacing)) {
      tmp_41 = letterSpacing;
    } else {
      tmp_41 = _this__u8e3s4.i4u_1;
    }
    var tmp18_letterSpacing = tmp_41;
    var tmp_42;
    var tmp_43 = baselineShift;
    if ((tmp_43 == null ? null : new BaselineShift(tmp_43)) == null) {
      tmp_42 = _this__u8e3s4.j4u_1;
    } else {
      tmp_42 = baselineShift;
    }
    var tmp19_baselineShift = tmp_42;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.k4u_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.l4u_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_44;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
      tmp_44 = background;
    } else {
      // Inline function 'androidx.compose.ui.text.fastMerge.<anonymous>' call
      tmp_44 = _this__u8e3s4.m4u_1;
    }
    var tmp22_background = tmp_44;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.n4u_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.o4u_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.q4u_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.p4u_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.p4u_1;
    return _this__u8e3s4.p4u_1.w4v(other);
  }
  function lerp_5(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp8_textForegroundStyle = lerp_9(start.b4u_1, stop.b4u_1, fraction);
    var tmp9_fontFamily = lerpDiscrete(start.g4u_1, stop.g4u_1, fraction);
    var tmp10_fontSize = lerpTextUnitInheritable(start.c4u_1, stop.c4u_1, fraction);
    var tmp0_elvis_lhs = start.d4u_1;
    var tmp = tmp0_elvis_lhs == null ? Companion_getInstance_23().j4w_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = stop.d4u_1;
    var tmp11_fontWeight = lerp_7(tmp, tmp1_elvis_lhs == null ? Companion_getInstance_23().j4w_1 : tmp1_elvis_lhs, fraction);
    var tmp_0 = start.e4u_1;
    var tmp_1 = tmp_0 == null ? null : new FontStyle(tmp_0);
    var tmp_2 = stop.e4u_1;
    var tmp_3 = lerpDiscrete(tmp_1, tmp_2 == null ? null : new FontStyle(tmp_2), fraction);
    var tmp12_fontStyle = tmp_3 == null ? null : tmp_3.s4u_1;
    var tmp_4 = start.f4u_1;
    var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
    var tmp_6 = stop.f4u_1;
    var tmp_7 = lerpDiscrete(tmp_5, tmp_6 == null ? null : new FontSynthesis(tmp_6), fraction);
    var tmp13_fontSynthesis = tmp_7 == null ? null : tmp_7.t4u_1;
    var tmp14_fontFeatureSettings = lerpDiscrete(start.h4u_1, stop.h4u_1, fraction);
    var tmp15_letterSpacing = lerpTextUnitInheritable(start.i4u_1, stop.i4u_1, fraction);
    var tmp2_elvis_lhs = start.j4u_1;
    var tmp_8;
    var tmp_9 = tmp2_elvis_lhs;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null) {
      tmp_8 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_8 = tmp2_elvis_lhs;
    }
    var tmp_10 = tmp_8;
    var tmp3_elvis_lhs = stop.j4u_1;
    var tmp_11;
    var tmp_12 = tmp3_elvis_lhs;
    if ((tmp_12 == null ? null : new BaselineShift(tmp_12)) == null) {
      tmp_11 = _BaselineShift___init__impl__scj05g(0.0);
    } else {
      tmp_11 = tmp3_elvis_lhs;
    }
    var tmp16_baselineShift = lerp_8(tmp_10, tmp_11, fraction);
    var tmp4_elvis_lhs = start.k4u_1;
    var tmp_13 = tmp4_elvis_lhs == null ? Companion_getInstance_41().q4w_1 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = stop.k4u_1;
    var tmp17_textGeometricTransform = lerp_10(tmp_13, tmp5_elvis_lhs == null ? Companion_getInstance_41().q4w_1 : tmp5_elvis_lhs, fraction);
    var tmp18_localeList = lerpDiscrete(start.l4u_1, stop.l4u_1, fraction);
    var tmp19_background = lerp(start.m4u_1, stop.m4u_1, fraction);
    var tmp20_textDecoration = lerpDiscrete(start.n4u_1, stop.n4u_1, fraction);
    var tmp6_elvis_lhs = start.o4u_1;
    var tmp_14 = tmp6_elvis_lhs == null ? new Shadow() : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = stop.o4u_1;
    var tmp21_shadow = lerp_0(tmp_14, tmp7_elvis_lhs == null ? new Shadow() : tmp7_elvis_lhs, fraction);
    var tmp22_platformStyle = lerpPlatformStyle_0(start.p4u_1, stop.p4u_1, fraction);
    var tmp23_drawStyle = lerpDiscrete(start.q4u_1, stop.q4u_1, fraction);
    return new SpanStyle(tmp8_textForegroundStyle, tmp10_fontSize, tmp11_fontWeight, tmp12_fontStyle, tmp13_fontSynthesis, tmp9_fontFamily, tmp14_fontFeatureSettings, tmp15_letterSpacing, tmp16_baselineShift, tmp17_textGeometricTransform, tmp18_localeList, tmp19_background, tmp20_textDecoration, tmp21_shadow, tmp22_platformStyle, tmp23_drawStyle);
  }
  function lerpDiscrete(a, b, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    return fraction < 0.5 ? a : b;
  }
  function lerpTextUnitInheritable(a, b, t) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (get_isUnspecified(a) ? true : get_isUnspecified(b))
      return lerpDiscrete(new TextUnit(a), new TextUnit(b), t).t3c_1;
    return lerp_1(a, b, t);
  }
  function lerpPlatformStyle_0(start, stop, fraction) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (start == null ? stop == null : false)
      return null;
    var startNonNull = start == null ? Companion_getInstance_46().r4w_1 : start;
    var stopNonNull = stop == null ? Companion_getInstance_46().r4w_1 : stop;
    return lerp_12(startNonNull, stopNonNull, fraction);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.b4u_1.s4w(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.c4u_1) ? get_DefaultFontSize() : style.c4u_1;
    var tmp0_elvis_lhs = style.d4u_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_23().j4w_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.e4u_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_21().t4w_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.f4u_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_22().w4w_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.g4u_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_17().z4w_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.h4u_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.i4u_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.i4u_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.j4u_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_35().g4x_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.k4u_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_41().q4w_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.l4u_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_instance_21.z1v() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = style.m4u_1;
    var tmp_17;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
      tmp_17 = this_0;
    } else {
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp_17 = get_DefaultBackgroundColor();
    }
    var tmp_18 = tmp_17;
    var tmp8_elvis_lhs = style.n4u_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_38().h4x_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.o4u_1;
    var tmp_20 = tmp9_elvis_lhs == null ? Companion_getInstance_2().r4a_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.q4u_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp_20, style.p4u_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return Companion_instance_27.m4v(get_DefaultColor());
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().j42_1;
      DefaultColor = Companion_getInstance().y41_1;
    }
  }
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
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
    buffer.i8(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.i1(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.i8(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.i8(truncated);
    }
    buffer.i8(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.i8(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.i8(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.a6(element.sf_1);
        } else {
          _this__u8e3s4.i8(toString_0(element));
        }
      }
    }
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.k4x_1 = layoutInput;
    this.l4x_1 = multiParagraph;
    this.m4x_1 = size;
    this.n4x_1 = this.l4x_1.c4r();
    this.o4x_1 = this.l4x_1.d4r();
    this.p4x_1 = this.l4x_1.l4q_1;
    this.q4x_1 = 8;
  }
  protoOf(TextLayoutResult).r4x = function () {
    return this.l4x_1.h4q_1 ? true : _IntSize___get_height__impl__prv63b(this.m4x_1) < this.l4x_1.j4q_1;
  };
  protoOf(TextLayoutResult).s4x = function () {
    return _IntSize___get_width__impl__d9yl4o(this.m4x_1) < this.l4x_1.i4q_1;
  };
  protoOf(TextLayoutResult).t4x = function () {
    return this.s4x() ? true : this.r4x();
  };
  protoOf(TextLayoutResult).r4q = function () {
    return this.l4x_1.k4q_1;
  };
  protoOf(TextLayoutResult).g4s = function (lineIndex) {
    return this.l4x_1.g4s(lineIndex);
  };
  protoOf(TextLayoutResult).h4s = function (lineIndex, visibleEnd) {
    return this.l4x_1.h4s(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).u4x = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.h4s(lineIndex, visibleEnd) : $super.h4s.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).d4s = function (lineIndex) {
    return this.l4x_1.d4s(lineIndex);
  };
  protoOf(TextLayoutResult).e4s = function (lineIndex) {
    return this.l4x_1.e4s(lineIndex);
  };
  protoOf(TextLayoutResult).a4s = function (lineIndex) {
    return this.l4x_1.a4s(lineIndex);
  };
  protoOf(TextLayoutResult).c4s = function (lineIndex) {
    return this.l4x_1.c4s(lineIndex);
  };
  protoOf(TextLayoutResult).z4r = function (offset) {
    return this.l4x_1.z4r(offset);
  };
  protoOf(TextLayoutResult).m4r = function (vertical) {
    return this.l4x_1.m4r(vertical);
  };
  protoOf(TextLayoutResult).t4r = function (offset, usePrimaryDirection) {
    return this.l4x_1.t4r(offset, usePrimaryDirection);
  };
  protoOf(TextLayoutResult).u4r = function (offset) {
    return this.l4x_1.u4r(offset);
  };
  protoOf(TextLayoutResult).v4r = function (offset) {
    return this.l4x_1.v4r(offset);
  };
  protoOf(TextLayoutResult).p4r = function (position) {
    return this.l4x_1.p4r(position);
  };
  protoOf(TextLayoutResult).s4r = function (offset) {
    return this.l4x_1.s4r(offset);
  };
  protoOf(TextLayoutResult).w4r = function (offset) {
    return this.l4x_1.w4r(offset);
  };
  protoOf(TextLayoutResult).y4r = function (offset) {
    return this.l4x_1.y4r(offset);
  };
  protoOf(TextLayoutResult).j4r = function (start, end) {
    return this.l4x_1.j4r(start, end);
  };
  protoOf(TextLayoutResult).v4x = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.l4x_1, size);
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.k4x_1.equals(other.k4x_1))
      return false;
    if (!equals(this.l4x_1, other.l4x_1))
      return false;
    if (!equals(this.m4x_1, other.m4x_1))
      return false;
    if (!(this.n4x_1 === other.n4x_1))
      return false;
    if (!(this.o4x_1 === other.o4x_1))
      return false;
    if (!equals(this.p4x_1, other.p4x_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.k4x_1.hashCode();
    result = imul(31, result) + hashCode(this.l4x_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.m4x_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.n4x_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.o4x_1) | 0;
    result = imul(31, result) + hashCode(this.p4x_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.k4x_1 + ', ') + ('multiParagraph=' + this.l4x_1 + ', ') + ('size=' + new IntSize(this.m4x_1) + ', ') + ('firstBaseline=' + this.n4x_1 + ', ') + ('lastBaseline=' + this.o4x_1 + ', ') + ('placeholderRects=' + this.p4x_1) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.w4x_1 = text;
    this.x4x_1 = style;
    this.y4x_1 = placeholders;
    this.z4x_1 = maxLines;
    this.a4y_1 = softWrap;
    this.b4y_1 = overflow;
    this.c4y_1 = density;
    this.d4y_1 = layoutDirection;
    this.e4y_1 = fontFamilyResolver;
    this.f4y_1 = constraints;
    this.g4y_1 = resourceLoader;
    this.h4y_1 = 8;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.w4x_1.equals(other.w4x_1))
      return false;
    if (!this.x4x_1.equals(other.x4x_1))
      return false;
    if (!equals(this.y4x_1, other.y4x_1))
      return false;
    if (!(this.z4x_1 === other.z4x_1))
      return false;
    if (!(this.a4y_1 === other.a4y_1))
      return false;
    if (!(this.b4y_1 === other.b4y_1))
      return false;
    if (!equals(this.c4y_1, other.c4y_1))
      return false;
    if (!this.d4y_1.equals(other.d4y_1))
      return false;
    if (!equals(this.e4y_1, other.e4y_1))
      return false;
    if (!equals(this.f4y_1, other.f4y_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.w4x_1.hashCode();
    result = imul(31, result) + this.x4x_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.y4x_1) | 0;
    result = imul(31, result) + this.z4x_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.a4y_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.b4y_1) | 0;
    result = imul(31, result) + hashCode(this.c4y_1) | 0;
    result = imul(31, result) + this.d4y_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.e4y_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.f4y_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    return 'TextLayoutInput(' + ('text=' + this.w4x_1 + ', ') + ('style=' + this.x4x_1 + ', ') + ('placeholders=' + this.y4x_1 + ', ') + ('maxLines=' + this.z4x_1 + ', ') + ('softWrap=' + this.a4y_1 + ', ') + ('overflow=' + new TextOverflow(this.b4y_1) + ', ') + ('density=' + this.c4y_1 + ', ') + ('layoutDirection=' + this.d4y_1 + ', ') + ('fontFamilyResolver=' + this.e4y_1 + ', ') + ('constraints=' + new Constraints_0(this.f4y_1)) + ')';
  };
  var DefaultCacheSize;
  function TextPainter() {
    this.i4y_1 = 0;
  }
  protoOf(TextPainter).j4y = function (canvas, textLayoutResult) {
    var needClipping = textLayoutResult.t4x() ? !(textLayoutResult.k4x_1.b4y_1 === Companion_getInstance_43().m4y_1) : false;
    if (needClipping) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.m4x_1);
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.m4x_1);
      var bounds = Rect(Companion_getInstance_3().z38_1, Size(width, height));
      canvas.r43();
      canvas.z43(bounds);
    }
    var style = textLayoutResult.k4x_1.x4x_1.k4s_1;
    var tmp0_elvis_lhs = style.n4u_1;
    var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_38().h4x_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.o4u_1;
    var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_2().r4a_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = style.q4u_1;
    var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
    try {
      var brush = style.o4v();
      if (!(brush == null)) {
        var tmp;
        if (!(style.b4u_1 === Unspecified_instance)) {
          tmp = style.b4u_1.y3z();
        } else {
          tmp = 1.0;
        }
        var alpha = tmp;
        textLayoutResult.l4x_1.i4r(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp_0;
        if (!(style.b4u_1 === Unspecified_instance)) {
          tmp_0 = style.b4u_1.m42();
        } else {
          tmp_0 = Companion_getInstance().y41_1;
        }
        var color = tmp_0;
        textLayoutResult.l4x_1.g4r(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (needClipping) {
        canvas.s43();
      }
    }
  };
  var TextPainter_instance;
  function TextPainter_getInstance() {
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
    return _get_packedValue__aj623s($this).xa(32).db();
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _get_packedValue__aj623s($this).za(new Long(-1, 0)).db();
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
  function Companion_0() {
    Companion_instance_1 = this;
    this.n4y_1 = TextRange_1(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other instanceof TextRange ? other.f4v_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_14();
    this.f4v_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.f4v_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.f4v_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.f4v_1, other);
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
    return toLong(start).wa(32).ab(toLong(end).za(new Long(-1, 0)));
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
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.p4u_1, paragraphStyle.p4p_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().k42_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().r3c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().r3c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().k42_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().r3c_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.o4y_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.p4y_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.r4y_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_15();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.k4s_1 = spanStyle;
    this.l4s_1 = paragraphStyle;
    this.m4s_1 = platformStyle;
    this.n4s_1 = 0;
  }
  protoOf(TextStyle).s4y = function () {
    return this.k4s_1;
  };
  protoOf(TextStyle).o4s = function () {
    return this.l4s_1;
  };
  protoOf(TextStyle).t4y = function (other) {
    if (other == null ? true : equals(other, Companion_getInstance_15().r4y_1))
      return this;
    return TextStyle_init_$Create$_0(this.s4y().p4v(other.s4y()), this.o4s().y4p(other.o4s()));
  };
  protoOf(TextStyle).u4y = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.k4s_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.o4y_1, drawStyle);
    var mergedParagraphStyle = fastMerge(this.l4s_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.p4y_1, lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.k4s_1 === mergedSpanStyle ? this.l4s_1 === mergedParagraphStyle : false)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).v4y = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().k42_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().r3c_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().r3c_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().k42_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().r3c_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.u4y(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.u4y;
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
  protoOf(TextStyle).p4s = function (other) {
    return TextStyle_init_$Create$_0(this.s4y(), this.o4s().y4p(other));
  };
  protoOf(TextStyle).w4y = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.k4s_1.m42())) {
      tmp = this.k4s_1.b4u_1;
    } else {
      tmp = Companion_instance_27.m4v(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.o4y_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.p4y_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).x4y = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.k4s_1.m42() : color;
    fontSize = fontSize === VOID ? this.k4s_1.c4u_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.k4s_1.d4u_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.k4s_1.e4u_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.k4s_1.f4u_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.k4s_1.g4u_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.k4s_1.h4u_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.k4s_1.i4u_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.k4s_1.j4u_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.k4s_1.k4u_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.k4s_1.l4u_1 : localeList;
    background = background === VOID ? this.k4s_1.m4u_1 : background;
    textDecoration = textDecoration === VOID ? this.k4s_1.n4u_1 : textDecoration;
    shadow = shadow === VOID ? this.k4s_1.o4u_1 : shadow;
    drawStyle = drawStyle === VOID ? this.k4s_1.q4u_1 : drawStyle;
    textAlign = textAlign === VOID ? this.l4s_1.l4p_1 : textAlign;
    textDirection = textDirection === VOID ? this.l4s_1.m4p_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.l4s_1.n4p_1 : lineHeight;
    textIndent = textIndent === VOID ? this.l4s_1.o4p_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.m4s_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.l4s_1.q4p_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.l4s_1.r4p_1 : lineBreak;
    hyphens = hyphens === VOID ? this.l4s_1.s4p_1 : hyphens;
    textMotion = textMotion === VOID ? this.l4s_1.t4p_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.w4y(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.w4y;
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
  protoOf(TextStyle).y4y = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.o4y_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.p4y_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).z4y = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.k4s_1.y3z() : alpha;
    fontSize = fontSize === VOID ? this.k4s_1.c4u_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.k4s_1.d4u_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.k4s_1.e4u_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.k4s_1.f4u_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.k4s_1.g4u_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.k4s_1.h4u_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.k4s_1.i4u_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.k4s_1.j4u_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.k4s_1.k4u_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.k4s_1.l4u_1 : localeList;
    background = background === VOID ? this.k4s_1.m4u_1 : background;
    textDecoration = textDecoration === VOID ? this.k4s_1.n4u_1 : textDecoration;
    shadow = shadow === VOID ? this.k4s_1.o4u_1 : shadow;
    drawStyle = drawStyle === VOID ? this.k4s_1.q4u_1 : drawStyle;
    textAlign = textAlign === VOID ? this.l4s_1.l4p_1 : textAlign;
    textDirection = textDirection === VOID ? this.l4s_1.m4p_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.l4s_1.n4p_1 : lineHeight;
    textIndent = textIndent === VOID ? this.l4s_1.o4p_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.m4s_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.l4s_1.q4p_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.l4s_1.r4p_1 : lineBreak;
    hyphens = hyphens === VOID ? this.l4s_1.s4p_1 : hyphens;
    textMotion = textMotion === VOID ? this.l4s_1.t4p_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.y4y(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.y4y;
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
  protoOf(TextStyle).o4v = function () {
    return this.k4s_1.o4v();
  };
  protoOf(TextStyle).m42 = function () {
    return this.k4s_1.m42();
  };
  protoOf(TextStyle).y3z = function () {
    return this.k4s_1.y3z();
  };
  protoOf(TextStyle).a4z = function () {
    return this.k4s_1.c4u_1;
  };
  protoOf(TextStyle).b4z = function () {
    return this.k4s_1.d4u_1;
  };
  protoOf(TextStyle).c4z = function () {
    return this.k4s_1.e4u_1;
  };
  protoOf(TextStyle).d4z = function () {
    return this.k4s_1.f4u_1;
  };
  protoOf(TextStyle).e4z = function () {
    return this.k4s_1.g4u_1;
  };
  protoOf(TextStyle).f4z = function () {
    return this.k4s_1.h4u_1;
  };
  protoOf(TextStyle).g4z = function () {
    return this.k4s_1.i4u_1;
  };
  protoOf(TextStyle).h4z = function () {
    return this.k4s_1.j4u_1;
  };
  protoOf(TextStyle).i4z = function () {
    return this.k4s_1.k4u_1;
  };
  protoOf(TextStyle).j4z = function () {
    return this.k4s_1.l4u_1;
  };
  protoOf(TextStyle).k4z = function () {
    return this.k4s_1.m4u_1;
  };
  protoOf(TextStyle).l4z = function () {
    return this.k4s_1.n4u_1;
  };
  protoOf(TextStyle).m4z = function () {
    return this.k4s_1.o4u_1;
  };
  protoOf(TextStyle).n4z = function () {
    return this.k4s_1.q4u_1;
  };
  protoOf(TextStyle).o4z = function () {
    return this.l4s_1.l4p_1;
  };
  protoOf(TextStyle).p4z = function () {
    return this.l4s_1.m4p_1;
  };
  protoOf(TextStyle).q4z = function () {
    return this.l4s_1.n4p_1;
  };
  protoOf(TextStyle).r4z = function () {
    return this.l4s_1.o4p_1;
  };
  protoOf(TextStyle).s4z = function () {
    return this.l4s_1.q4p_1;
  };
  protoOf(TextStyle).t4z = function () {
    return this.l4s_1.s4p_1;
  };
  protoOf(TextStyle).u4z = function () {
    return this.l4s_1.r4p_1;
  };
  protoOf(TextStyle).v4z = function () {
    return this.l4s_1.t4p_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.k4s_1.equals(other.k4s_1))
      return false;
    if (!this.l4s_1.equals(other.l4s_1))
      return false;
    if (!equals(this.m4s_1, other.m4s_1))
      return false;
    return true;
  };
  protoOf(TextStyle).w4z = function (other) {
    return this === other ? true : this.l4s_1.equals(other.l4s_1) ? this.k4s_1.t4v(other.k4s_1) : false;
  };
  protoOf(TextStyle).x4z = function (other) {
    return this === other ? true : this.k4s_1.s4v(other.k4s_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.k4s_1.hashCode();
    result = imul(31, result) + this.l4s_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.m4s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    var tmp = 'TextStyle(' + ('color=' + new Color(this.m42()) + ', ') + ('brush=' + this.o4v() + ', ') + ('alpha=' + this.y3z() + ', ') + ('fontSize=' + new TextUnit(this.a4z()) + ', ') + ('fontWeight=' + this.b4z() + ', ');
    var tmp_0 = this.c4z();
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.d4z();
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.e4z() + ', ') + ('fontFeatureSettings=' + this.f4z() + ', ') + ('letterSpacing=' + new TextUnit(this.g4z()) + ', ');
    var tmp_4 = this.h4z();
    var tmp_5 = tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.i4z() + ', ') + ('localeList=' + this.j4z() + ', ') + ('background=' + new Color(this.k4z()) + ', ') + ('textDecoration=' + this.l4z() + ', ') + ('shadow=' + this.m4z() + ', ') + ('drawStyle=' + this.n4z() + ', ');
    var tmp_6 = this.o4z();
    var tmp_7 = tmp_5 + ('textAlign=' + (tmp_6 == null ? null : new TextAlign(tmp_6)) + ', ');
    var tmp_8 = this.p4z();
    var tmp_9 = tmp_7 + ('textDirection=' + (tmp_8 == null ? null : new TextDirection(tmp_8)) + ', ') + ('lineHeight=' + new TextUnit(this.q4z()) + ', ') + ('textIndent=' + this.r4z() + ', ') + ('platformStyle=' + this.m4s_1 + ', ') + ('lineHeightStyle=' + this.s4z() + ', ');
    var tmp_10 = this.u4z();
    var tmp_11 = tmp_9 + ('lineBreak=' + (tmp_10 == null ? null : new LineBreak(tmp_10)) + ', ');
    var tmp_12 = this.t4z();
    return tmp_11 + ('hyphens=' + (tmp_12 == null ? null : new Hyphens(tmp_12)) + ', ') + ('textMotion=' + this.v4z()) + ')';
  };
  function lerp_6(start, stop, fraction) {
    return TextStyle_init_$Create$_0(lerp_5(start.s4y(), stop.s4y(), fraction), lerp_4(start.o4s(), stop.o4s(), fraction));
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
    return new TextStyle(resolveSpanStyleDefaults(style.k4s_1), resolveParagraphStyleDefaults(style.l4s_1, direction), style.m4s_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    var tmp_0 = textDirection;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_39().a50_1))) {
      var tmp_1;
      switch (layoutDirection.j9_1) {
        case 0:
          tmp_1 = Companion_getInstance_39().b50_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_39().c50_1;
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
        switch (layoutDirection.j9_1) {
          case 0:
            tmp_3 = Companion_getInstance_39().y4z_1;
            break;
          case 1:
            tmp_3 = Companion_getInstance_39().z4z_1;
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
  function TtsAnnotation() {
    this.d50_1 = 0;
  }
  function VerbatimTtsAnnotation(verbatim) {
    TtsAnnotation.call(this);
    this.x4t_1 = verbatim;
    this.y4t_1 = 0;
  }
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.x4t_1 === other.x4t_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.x4t_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.x4t_1 + ')';
  };
  function UrlAnnotation(url) {
    this.z4t_1 = url;
    this.a4u_1 = 0;
  }
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.z4t_1 === other.z4t_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.z4t_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.z4t_1 + ')';
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
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxSize > 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.<init>.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.i50_1 = maxSize;
    $this.f50_1 = HashMap_init_$Create$(0, 0.75);
    $this.g50_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, objectCreate(protoOf(LruCache)));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.o50(key, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      var message = 'Negative size: ' + key + '=' + value;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  protoOf(LruCache).n = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e50_1;
    return this.h50_1;
  };
  protoOf(LruCache).b3 = function (key) {
    var mapValue = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e50_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.f50_1.b3(key);
    var tmp;
    if (!(mapValue == null)) {
      this.g50_1.t(key);
      this.g50_1.s(key);
      this.m50_1 = this.m50_1 + 1 | 0;
      return mapValue;
    } else {
      var tmp3 = this.n50_1;
      this.n50_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    var createdValue = this.p50(key);
    if (createdValue == null) {
      return null;
    }
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e50_1;
    this.k50_1 = this.k50_1 + 1 | 0;
    var previousValue = this.f50_1.r2(key, createdValue);
    this.g50_1.t(key);
    this.g50_1.s(key);
    var tmp_0;
    if (!(previousValue == null)) {
      this.f50_1.r2(key, previousValue);
      mapValue = previousValue;
      tmp_0 = Unit_instance;
    } else {
      this.h50_1 = this.n() + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_instance;
    }
    if (!(mapValue == null)) {
      this.r50(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.q50(this.i50_1);
      return createdValue;
    }
  };
  protoOf(LruCache).r2 = function (key, value) {
    if (key == null ? true : value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e50_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    this.j50_1 = this.j50_1 + 1 | 0;
    this.h50_1 = this.n() + safeSizeOf(this, key, value) | 0;
    previous = this.f50_1.r2(key, value);
    if (!(previous == null)) {
      this.h50_1 = this.n() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.g50_1.r(key)) {
      this.g50_1.t(key);
    }
    this.g50_1.s(key);
    if (!(previous == null)) {
      this.r50(false, key, ensureNotNull(previous), value);
    }
    this.q50(this.i50_1);
    return previous;
  };
  protoOf(LruCache).q50 = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.e50_1;
      if ((this.n() < 0 ? true : this.f50_1.e1() ? !(this.n() === 0) : false) ? true : !(this.f50_1.e1() === this.g50_1.e1())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      var tmp;
      if (this.n() > maxSize ? !this.f50_1.e1() : false) {
        key = first(this.g50_1);
        // Inline function 'kotlin.collections.get' call
        var this_0 = this.f50_1;
        var key_0 = key;
        var tmp0_elvis_lhs = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).b3(key_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        value = tmp_0;
        // Inline function 'kotlin.collections.remove' call
        var this_1 = this.f50_1;
        var key_1 = key;
        (isInterface(this_1, MutableMap) ? this_1 : THROW_CCE()).v2(key_1);
        // Inline function 'kotlin.collections.remove' call
        var this_2 = this.g50_1;
        var element = key;
        (isInterface(this_2, MutableCollection) ? this_2 : THROW_CCE()).t(element);
        this.h50_1 = this.n() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        this.l50_1 = this.l50_1 + 1 | 0;
        tmp = Unit_instance;
      }
      if (key == null ? value == null : false) {
        break $l$loop;
      } else {
        this.r50(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  protoOf(LruCache).v2 = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e50_1;
    previous = this.f50_1.v2(key);
    this.g50_1.t(key);
    var tmp;
    if (!(previous == null)) {
      this.h50_1 = this.n() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
      tmp = Unit_instance;
    }
    if (!(previous == null)) {
      this.r50(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  protoOf(LruCache).r50 = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).p50 = function (key) {
    return null;
  };
  protoOf(LruCache).o50 = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e50_1;
    var accesses = this.m50_1 + this.n50_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.m50_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.i50_1 + ',hits=' + this.m50_1 + ',misses=' + this.n50_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  function LruCache() {
    this.e50_1 = createSynchronizedObject();
    this.h50_1 = 0;
    this.i50_1 = 0;
    this.j50_1 = 0;
    this.k50_1 = 0;
    this.l50_1 = 0;
    this.m50_1 = 0;
    this.n50_1 = 0;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    capacity = capacity === VOID ? 0 : capacity;
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.s50_1 = get_EMPTY_INTS();
      $this.t50_1 = get_EMPTY_OBJECTS();
    } else {
      $this.s50_1 = new Int32Array(capacity);
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = capacity << 1;
      tmp.t50_1 = fillArrayVal(Array(size), null);
    }
    $this.u50_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, objectCreate(protoOf(SimpleArrayMap)));
  }
  protoOf(SimpleArrayMap).v50 = function (key, hash) {
    var N = this.u50_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.s50_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.t50_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.s50_1[end] === hash : false) {
      if (equals(key, this.t50_1[end << 1]))
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.s50_1[i] === hash : false) {
      if (equals(key, this.t50_1[i << 1]))
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).w50 = function () {
    var N = this.u50_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.s50_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.t50_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.s50_1[end] === 0 : false) {
      if (null == this.t50_1[end << 1])
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.s50_1[i] === 0 : false) {
      if (null == this.t50_1[i << 1])
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).y2 = function (key) {
    return this.x50(key) >= 0;
  };
  protoOf(SimpleArrayMap).x50 = function (key) {
    return key == null ? this.w50() : this.v50(key, hashCode(key));
  };
  protoOf(SimpleArrayMap).b3 = function (key) {
    var index = this.x50(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.t50_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).y50 = function (index) {
    var tmp = this.t50_1[index << 1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).z50 = function (index) {
    var tmp = this.t50_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).e1 = function () {
    return this.u50_1 <= 0;
  };
  protoOf(SimpleArrayMap).r2 = function (key, value) {
    var osize = this.u50_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.w50();
    } else {
      hash = hashCode(key);
      index = this.v50(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.t50_1[index];
      var old = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.t50_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.s50_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.s50_1.length + ' to ' + n);
      }
      this.s50_1 = copyOf(this.s50_1, n);
      this.t50_1 = copyOf_0(this.t50_1, n << 1);
      if (!(osize === this.u50_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.s50_1;
      var destination = this.s50_1;
      var destinationOffset = index + 1 | 0;
      var startIndex = index;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination, destinationOffset, startIndex, osize);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.t50_1;
      var destination_0 = this.t50_1;
      var destinationOffset_0 = (index + 1 | 0) << 1;
      var startIndex_0 = index << 1;
      var endIndex = this.u50_1 << 1;
      arrayCopy(this_1, destination_0, destinationOffset_0, startIndex_0, endIndex);
    }
    if (!(osize === this.u50_1) ? true : index >= this.s50_1.length) {
      throw ConcurrentModificationException_init_$Create$();
    }
    this.s50_1[index] = hash;
    this.t50_1[index << 1] = key;
    this.t50_1[(index << 1) + 1 | 0] = value;
    this.u50_1 = this.u50_1 + 1 | 0;
    return null;
  };
  protoOf(SimpleArrayMap).equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this.u50_1 === map.u50_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this.u50_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.y50(i);
            var mine = this.z50(i);
            var theirs = map.b3(key);
            if (mine == null) {
              if (!(theirs == null) ? true : !map.y2(key)) {
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
          if (!(this.u50_1 === map_0.n())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this.u50_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.y50(i_0);
              var mine_0 = this.z50(i_0);
              // Inline function 'kotlin.collections.get' call
              var theirs_0 = (isInterface(map_0, Map) ? map_0 : THROW_CCE()).b3(key_0);
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  // Inline function 'kotlin.collections.containsKey' call
                  tmp = !(isInterface(map_0, Map) ? map_0 : THROW_CCE()).y2(key_0);
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
    var hashes = this.s50_1;
    var array = this.t50_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this.u50_1;
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
    if (this.e1()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$(imul(this.u50_1, 28));
    buffer.a6(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this.u50_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.z5(', ');
        }
        var key = this.y50(i);
        if (!(key === this)) {
          buffer.y5(key);
        } else {
          buffer.z5('(this Map)');
        }
        buffer.a6(_Char___init__impl__6a9atx(61));
        var value = this.z50(i);
        if (!(value === this)) {
          buffer.y5(value);
        } else {
          buffer.z5('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.a6(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this.u50_1 = 0;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.a51_1 = new Long(15000, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_16() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function Font() {
  }
  function Companion_3() {
    Companion_instance_4 = this;
    this.z4w_1 = new DefaultFontFamily();
    this.a4x_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.b4x_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.c4x_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.d4x_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_4;
  function Companion_getInstance_17() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_17();
    this.g51_1 = canLoadSynchronously;
    this.h51_1 = 0;
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
    this.k51_1 = 0;
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.o51_1 = name;
    this.p51_1 = fontFamilyName;
    this.q51_1 = 0;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.p51_1;
  };
  function FontListFontFamily() {
  }
  function LoadedFontFamily() {
  }
  function FileBasedFontFamily() {
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
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.r51_1;
      var tmp;
      if (finalResult.t51()) {
        this$0.s51_1.r2($typefaceRequest, finalResult);
        tmp = Unit_instance;
      } else {
        this$0.s51_1.v2($typefaceRequest);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function TypefaceRequestCache() {
    this.r51_1 = createSynchronizedObject();
    this.s51_1 = LruCache_init_$Create$(16);
  }
  protoOf(TypefaceRequestCache).u51 = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.r51_1;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.s51_1.b3(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.t51()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.s51_1.v2(typefaceRequest);
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
    this.r51_1;
    var tmp_3;
    if (this.s51_1.b3(typefaceRequest) == null ? currentTypefaceResult.t51() : false) {
      this.s51_1.r2(typefaceRequest, currentTypefaceResult);
      tmp_3 = Unit_instance;
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.v51_1 = fontFamily;
    this.w51_1 = fontWeight;
    this.x51_1 = fontStyle;
    this.y51_1 = fontSynthesis;
    this.z51_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).a52 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).b52 = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.v51_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.w51_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.x51_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.y51_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.z51_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.a52(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.a52.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + this.v51_1 + ', fontWeight=' + this.w51_1 + ', fontStyle=' + new FontStyle(this.x51_1) + ', fontSynthesis=' + new FontSynthesis(this.y51_1) + ', resourceLoaderCacheKey=' + toString_0(this.z51_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.v51_1 == null ? 0 : hashCode(this.v51_1);
    result = imul(result, 31) + this.w51_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.x51_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.y51_1) | 0;
    result = imul(result, 31) + (this.z51_1 == null ? 0 : hashCode(this.z51_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.v51_1, tmp0_other_with_cast.v51_1))
      return false;
    if (!this.w51_1.equals(tmp0_other_with_cast.w51_1))
      return false;
    if (!(this.x51_1 === tmp0_other_with_cast.x51_1))
      return false;
    if (!(this.y51_1 === tmp0_other_with_cast.y51_1))
      return false;
    if (!equals(this.z51_1, tmp0_other_with_cast.z51_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.c52_1 = value;
    this.d52_1 = cacheable;
    this.e52_1 = 0;
  }
  protoOf(Immutable).u2 = function () {
    return this.c52_1;
  };
  protoOf(Immutable).t51 = function () {
    return this.d52_1;
  };
  function Async(current) {
    this.f52_1 = current;
    this.g52_1 = 0;
  }
  protoOf(Async).u2 = function () {
    return this.f52_1.u2();
  };
  protoOf(Async).t51 = function () {
    return this.f52_1.n52_1;
  };
  function resolve($this, typefaceRequest) {
    var result = $this.q52_1.u51(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.b52(null)).u2();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.r52_1.w52($typefaceRequest, this$0.o52_1, onAsyncCompletion, this$0.t52_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.s52_1.w52($typefaceRequest, this$0.o52_1, onAsyncCompletion, this$0.t52_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_18().x52_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.o52_1 = platformFontLoader;
    this.p52_1 = platformResolveInterceptor;
    this.q52_1 = typefaceRequestCache;
    this.r52_1 = fontListFontFamilyTypefaceAdapter;
    this.s52_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.t52_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).y52 = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.p52_1.z52(fontFamily), this.p52_1.a53(fontWeight), this.p52_1.b53(fontStyle), this.p52_1.c53(fontSynthesis), this.o52_1.d53()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.x52_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_5;
  function Companion_getInstance_18() {
    if (Companion_instance_5 == null)
      new Companion_4();
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
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.e53_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.e53_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.e53_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.e53_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.e53_1, other);
  };
  function Key(font, loaderKey) {
    this.f53_1 = font;
    this.g53_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + this.f53_1 + ', loaderKey=' + toString_0(this.g53_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.f53_1);
    result = imul(result, 31) + (this.g53_1 == null ? 0 : hashCode(this.g53_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.f53_1, tmp0_other_with_cast.f53_1))
      return false;
    if (!equals(this.g53_1, tmp0_other_with_cast.g53_1))
      return false;
    return true;
  };
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p53_1 = _this__u8e3s4;
    this.q53_1 = font;
    this.r53_1 = platformFontLoader;
    this.s53_1 = forever;
    this.t53_1 = block;
  }
  protoOf($runCachedCOROUTINE$1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.u53_1 = new Key(this.q53_1, this.r53_1.d53());
            this.p53_1.y53_1;
            var tmp0_elvis_lhs = this.p53_1.w53_1.b3(this.u53_1);
            var priorResult = tmp0_elvis_lhs == null ? this.p53_1.x53_1.b3(this.u53_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.e53_1);
            }

            this.hb_1 = 1;
            suspendResult = this.t53_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this.p53_1.y53_1;
            if (this_0 == null) {
              this.p53_1.x53_1.r2(this.u53_1, new AsyncTypefaceResult(this.p53_1.v53_1));
            } else if (this.s53_1) {
              this.p53_1.x53_1.r2(this.u53_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this.p53_1.w53_1.r2(this.u53_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            return this_0;
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
  function AsyncTypefaceCache() {
    this.v53_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.w53_1 = LruCache_init_$Create$(16);
    this.x53_1 = SimpleArrayMap_init_$Create$();
    this.y53_1 = createSynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).z53 = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.d53());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.y53_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.x53_1.r2(key, new AsyncTypefaceResult(this.v53_1));
    } else if (forever) {
      tmp = this.x53_1.r2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.w53_1.r2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).a54 = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.z53(font, platformFontLoader, result, forever);
      tmp = Unit_instance;
    } else {
      tmp = $super.z53.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).b54 = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.d53());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.y53_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.w53_1.b3(key);
    return tmp0_elvis_lhs == null ? this.x53_1.b3(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).c54 = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    var this_0 = $this.m52_1;
    value$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.l54_1 = this$0;
    this.m54_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).n54 = function ($completion) {
    var tmp = this.o54($completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(AsyncFontListLoader$load$slambda).p54 = function ($completion) {
    return this.n54($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.l54_1.q54(this.m54_1, this);
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
  protoOf(AsyncFontListLoader$load$slambda).o54 = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.l54_1, this.m54_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    var l = function ($completion) {
      return i.n54($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.z54_1 = this$0;
    this.a55_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).c55 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.w1b($this$withTimeoutOrNull, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).fc = function (p1, $completion) {
    return this.c55((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.z54_1.l52_1.d55(this.a55_1, this);
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
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).w1b = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.z54_1, this.a55_1, completion);
    i.b55_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.c55($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m55_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$2).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 12;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.hb_1 = 2;
            continue $sm;
          case 2:
            this.ib_1 = 11;
            var tmp_0 = this;
            tmp_0.p55_1 = this.m55_1.h52_1;
            this.q55_1 = get_indices(this.p55_1).v();
            this.hb_1 = 3;
            continue $sm;
          case 3:
            if (!this.q55_1.w()) {
              this.hb_1 = 9;
              continue $sm;
            }

            this.r55_1 = this.q55_1.y();
            this.s55_1 = this.p55_1.i1(this.r55_1);
            var tmp_1 = this;
            tmp_1.t55_1 = this.s55_1;
            if (this.t55_1.c51() === Companion_getInstance_20().f51_1) {
              this.hb_1 = 4;
              suspendResult = this.m55_1.j52_1.c54(this.t55_1, this.m55_1.l52_1, false, AsyncFontListLoader$load$slambda_0(this.m55_1, this.t55_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 7;
              continue $sm;
            }

          case 4:
            this.u55_1 = suspendResult;
            if (!(this.u55_1 == null)) {
              _set_value__lx0xdg(this.m55_1, synthesizeTypeface(this.m55_1.i52_1.y51_1, this.u55_1, this.t55_1, this.m55_1.i52_1.w51_1, this.m55_1.i52_1.x51_1));
              this.o55_1 = Unit_instance;
              this.ib_1 = 12;
              this.hb_1 = 8;
              continue $sm;
            } else {
              this.hb_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.hb_1 = 6;
            continue $sm;
          case 6:
            this.hb_1 = 7;
            continue $sm;
          case 7:
            this.hb_1 = 3;
            continue $sm;
          case 8:
            this.ib_1 = 12;
            var shouldCache = get_isActive(this.u6());
            this.m55_1.n52_1 = false;
            this.m55_1.k52_1(new Immutable(this.m55_1.u2(), shouldCache));
            return Unit_instance;
          case 9:
            this.n55_1 = Unit_instance;
            this.ib_1 = 12;
            this.hb_1 = 10;
            continue $sm;
          case 10:
            this.ib_1 = 12;
            var shouldCache_0 = get_isActive(this.u6());
            this.m55_1.n52_1 = false;
            this.m55_1.k52_1(new Immutable(this.m55_1.u2(), shouldCache_0));
            return Unit_instance;
          case 11:
            this.ib_1 = 12;
            var t = this.kb_1;
            var shouldCache_1 = get_isActive(this.u6());
            this.m55_1.n52_1 = false;
            this.m55_1.k52_1(new Immutable(this.m55_1.u2(), shouldCache_1));
            throw t;
          case 12:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 12) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d56_1 = _this__u8e3s4;
    this.e56_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$3).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.ib_1 = 2;
            this.hb_1 = 1;
            Companion_getInstance_16();
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.d56_1, this.e56_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f56_1 = suspendResult;
            this.ib_1 = 3;
            this.hb_1 = 4;
            continue $sm;
          case 2:
            this.ib_1 = 3;
            var tmp_1 = this.kb_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.kb_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.u6())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.f56_1 = tmp_3;
              this.hb_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.kb_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.kb_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.u6().ob(Key_instance);
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.gp(this.u6(), IllegalStateException_init_$Create$_0('Unable to load font ' + this.e56_1, uncaughtFontLoadException));
                }
                tmp_5.f56_1 = null;
                this.hb_1 = 4;
                continue $sm;
              } else {
                throw this.kb_1;
              }
            }

          case 3:
            throw this.kb_1;
          case 4:
            this.ib_1 = 3;
            return this.f56_1;
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
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.h52_1 = fontList;
    this.i52_1 = typefaceRequest;
    this.j52_1 = asyncTypefaceCache;
    this.k52_1 = onCompletion;
    this.l52_1 = platformFontLoader;
    this.m52_1 = mutableStateOf(initialType);
    this.n52_1 = true;
  }
  protoOf(AsyncFontListLoader).u2 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.m52_1;
    value$factory_0();
    return this_0.u2();
  };
  protoOf(AsyncFontListLoader).g56 = function ($completion) {
    var tmp = new $loadCOROUTINE$2(this, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(AsyncFontListLoader).q54 = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(_no_name_provided__qut3iv).gp = function (context, exception) {
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    return Unit_instance;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    this.i56_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.j56_1 = new _no_name_provided__qut3iv();
  }
  var Companion_instance_6;
  function Companion_getInstance_19() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.s56_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.s56_1.g56(this);
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
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).w1b = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.s56_1, completion);
    i.t56_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_19();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.u52_1 = asyncTypefaceCache;
    this.v52_1 = CoroutineScope_0(Companion_getInstance_19().j56_1.ef(injectedContext).ef(SupervisorJob(injectedContext.ob(Key_instance_0))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).w52 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.v51_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_19().i56_1.x56(typefaceRequest.v51_1.w56_1, typefaceRequest.w51_1, typefaceRequest.x51_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.u52_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.ae();
    var synthesizedTypeface = tmp0_container.be();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.u52_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.v52_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.i1(idx);
        var tmp1_subject = font.c51();
        if (tmp1_subject === Companion_getInstance_20().d51_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.y53_1;
            var key = new Key(font, platformFontLoader.d53());
            var tmp0_elvis_lhs = asyncTypefaceCache.w53_1.b3(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.x53_1.b3(key) : tmp0_elvis_lhs;
            var tmp;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.e53_1);
              break $l$block;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp_0;
            try {
              tmp_0 = platformFontLoader.y56(font);
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
            asyncTypefaceCache.a54(font, platformFontLoader, tmp_0);
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
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.y51_1, result, font, typefaceRequest.w51_1, typefaceRequest.x51_1));
        } else if (tmp1_subject === Companion_getInstance_20().e51_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            asyncTypefaceCache.y53_1;
            var key_0 = new Key(font, platformFontLoader.d53());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.w53_1.b3(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.x53_1.b3(key_0) : tmp0_elvis_lhs_0;
            var tmp_3;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.e53_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            // Inline function 'kotlin.Result.getOrNull' call
            // Inline function 'kotlin.runCatching' call
            var tmp_4;
            try {
              // Inline function 'kotlin.Companion.success' call
              // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>.<anonymous>' call
              var value = platformFontLoader.y56(font);
              tmp_4 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
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
            asyncTypefaceCache.a54(font, platformFontLoader, this_1);
            tmp$ret$5 = this_1;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.y51_1, result_0, font, typefaceRequest.w51_1, typefaceRequest.x51_1));
          }
        } else if (tmp1_subject === Companion_getInstance_20().f51_1) {
          var cacheResult = asyncTypefaceCache.b54(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.s(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.e53_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.e53_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.y51_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.e53_1), font, typefaceRequest.w51_1, typefaceRequest.x51_1));
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
      return receiver.u2();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.u2();
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
    return $this === Companion_getInstance_20().d51_1 ? 'Blocking' : $this === Companion_getInstance_20().e51_1 ? 'Optional' : $this === Companion_getInstance_20().f51_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.d51_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.e51_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.f51_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_7;
  function Companion_getInstance_20() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function FontLoadingStrategy__hashCode_impl_xcx5xu($this) {
    return $this;
  }
  function FontLoadingStrategy__equals_impl_5w10z2($this, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    if (!($this === (other instanceof FontLoadingStrategy ? other.z56_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_20();
    this.z56_1 = value;
  }
  protoOf(FontLoadingStrategy).toString = function () {
    return FontLoadingStrategy__toString_impl_fx0z8f(this.z56_1);
  };
  protoOf(FontLoadingStrategy).hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_xcx5xu(this.z56_1);
  };
  protoOf(FontLoadingStrategy).equals = function (other) {
    return FontLoadingStrategy__equals_impl_5w10z2(this.z56_1, other);
  };
  function FontMatcher() {
  }
  protoOf(FontMatcher).x56 = function (fontList, fontWeight, fontStyle) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(fontList.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.i1(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item.a3k().equals(fontWeight) ? item.b51() === fontStyle : false) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.s(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.e1()) {
      return target;
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$_0(fontList.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.i1(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item_0.b51() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.s(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    var tmp_0;
    if (target_0.e1()) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp_0 = fontList;
    } else {
      tmp_0 = target_0;
    }
    var fontsToSearch = tmp_0;
    var tmp_1;
    if (fontWeight.a57(Companion_getInstance_23().a4w_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.i1(index_1);
          var possibleWeight = font.a3k();
          if (!(null == null) ? possibleWeight.a57(null) < 0 : false) {
            continue $l$loop_1;
          }
          if (!(null == null) ? possibleWeight.a57(null) > 0 : false) {
            continue $l$loop_1;
          }
          if (possibleWeight.a57(fontWeight) < 0) {
            if (bestWeightBelow == null ? true : possibleWeight.a57(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.a57(fontWeight) > 0) {
            if (bestWeightAbove == null ? true : possibleWeight.a57(bestWeightAbove) < 0) {
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
      var target_1 = ArrayList_init_$Create$_0(fontsToSearch.n());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.i1(index_2);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_1.a3k().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.s(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_1 = target_1;
    } else if (fontWeight.a57(Companion_getInstance_23().b4w_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.i1(index_3);
          var possibleWeight_0 = font_0.a3k();
          if (!(null == null) ? possibleWeight_0.a57(null) < 0 : false) {
            continue $l$loop_4;
          }
          if (!(null == null) ? possibleWeight_0.a57(null) > 0 : false) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.a57(fontWeight) < 0) {
            if (bestWeightBelow_0 == null ? true : possibleWeight_0.a57(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.a57(fontWeight) > 0) {
            if (bestWeightAbove_0 == null ? true : possibleWeight_0.a57(bestWeightAbove_0) < 0) {
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
      var target_2 = ArrayList_init_$Create$_0(fontsToSearch.n());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.i1(index_4);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_2.a3k().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.s(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_1 = target_2;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_23().b4w_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.i1(index_5);
          var possibleWeight_1 = font_1.a3k();
          if (!(null == null) ? possibleWeight_1.a57(null) < 0 : false) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) ? possibleWeight_1.a57(maxSearchRange) > 0 : false) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.a57(fontWeight) < 0) {
            if (bestWeightBelow_1 == null ? true : possibleWeight_1.a57(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.a57(fontWeight) > 0) {
            if (bestWeightAbove_1 == null ? true : possibleWeight_1.a57(bestWeightAbove_1) < 0) {
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
      var target_3 = ArrayList_init_$Create$_0(fontsToSearch.n());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.i1(index_6);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_3.a3k().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.s(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      var tmp_5;
      if (target_3.e1()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_23().b4w_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.n() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.i1(index_7);
            var possibleWeight_2 = font_2.a3k();
            if (!(minSearchRange == null) ? possibleWeight_2.a57(minSearchRange) < 0 : false) {
              continue $l$loop_10;
            }
            if (!(null == null) ? possibleWeight_2.a57(null) > 0 : false) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.a57(fontWeight) < 0) {
              if (bestWeightBelow_2 == null ? true : possibleWeight_2.a57(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.a57(fontWeight) > 0) {
              if (bestWeightAbove_2 == null ? true : possibleWeight_2.a57(bestWeightAbove_2) < 0) {
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
        var target_4 = ArrayList_init_$Create$_0(fontsToSearch.n());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.n() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.i1(index_8);
            // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            if (item_4.a3k().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.s(item_4);
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
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_21().t4w_1 ? 'Normal' : $this === Companion_getInstance_21().u4w_1 ? 'Italic' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.t4w_1 = _FontStyle___init__impl__jcnduf(0);
    this.u4w_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_21() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === (other instanceof FontStyle ? other.s4u_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_21();
    this.s4u_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.s4u_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.s4u_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.s4u_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_22().v4w_1 ? 'None' : $this === Companion_getInstance_22().w4w_1 ? 'All' : $this === Companion_getInstance_22().x4w_1 ? 'Weight' : $this === Companion_getInstance_22().y4w_1 ? 'Style' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.v4w_1 = _FontSynthesis___init__impl__n397bg(0);
    this.w4w_1 = _FontSynthesis___init__impl__n397bg(1);
    this.x4w_1 = _FontSynthesis___init__impl__n397bg(2);
    this.y4w_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  var Companion_instance_9;
  function Companion_getInstance_22() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === (other instanceof FontSynthesis ? other.t4u_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_22();
    this.t4u_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.t4u_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.t4u_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.t4u_1, other);
  };
  function Companion_9() {
    Companion_instance_10 = this;
    this.x4v_1 = new FontWeight(100);
    this.y4v_1 = new FontWeight(200);
    this.z4v_1 = new FontWeight(300);
    this.a4w_1 = new FontWeight(400);
    this.b4w_1 = new FontWeight(500);
    this.c4w_1 = new FontWeight(600);
    this.d4w_1 = new FontWeight(700);
    this.e4w_1 = new FontWeight(800);
    this.f4w_1 = new FontWeight(900);
    this.g4w_1 = this.x4v_1;
    this.h4w_1 = this.y4v_1;
    this.i4w_1 = this.z4v_1;
    this.j4w_1 = this.a4w_1;
    this.k4w_1 = this.b4w_1;
    this.l4w_1 = this.c4w_1;
    this.m4w_1 = this.d4w_1;
    this.n4w_1 = this.e4w_1;
    this.o4w_1 = this.f4w_1;
    this.p4w_1 = listOf([this.x4v_1, this.y4v_1, this.z4v_1, this.a4w_1, this.b4w_1, this.c4w_1, this.d4w_1, this.e4w_1, this.f4w_1]);
  }
  var Companion_instance_10;
  function Companion_getInstance_23() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function FontWeight(weight) {
    Companion_getInstance_23();
    this.d4v_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.d4v_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      var message = 'Font weight can be in range [1, 1000]. Current value: ' + this.d4v_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.e4v_1 = 0;
  }
  protoOf(FontWeight).a57 = function (other) {
    return compareTo(this.d4v_1, other.d4v_1);
  };
  protoOf(FontWeight).d = function (other) {
    return this.a57(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.d4v_1 === other.d4v_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.d4v_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.d4v_1 + ')';
  };
  function lerp_7(start, stop, fraction) {
    var weight = coerceIn(lerp_2(start.d4v_1, stop.d4v_1, fraction), 1, 1000);
    return new FontWeight(weight);
  }
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    CommitTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(CommitTextCommand)));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.b57_1 = annotatedString;
    this.c57_1 = newCursorPosition;
    this.d57_1 = 0;
  }
  protoOf(CommitTextCommand).e57 = function () {
    return this.b57_1.y4o_1;
  };
  protoOf(CommitTextCommand).f57 = function (buffer) {
    if (buffer.n57()) {
      buffer.m57(buffer.j57_1, buffer.k57_1, this.e57());
    } else {
      buffer.m57(buffer.h57_1, buffer.i57_1, this.e57());
    }
    var newCursor = buffer.o57();
    var tmp;
    if (this.c57_1 > 0) {
      tmp = (newCursor + this.c57_1 | 0) - 1 | 0;
    } else {
      tmp = (newCursor + this.c57_1 | 0) - this.e57().length | 0;
    }
    var newCursorInBuffer = tmp;
    buffer.p57(coerceIn(newCursorInBuffer, 0, buffer.a()));
  };
  protoOf(CommitTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.e57() === other.e57()))
      return false;
    if (!(this.c57_1 === other.c57_1))
      return false;
    return true;
  };
  protoOf(CommitTextCommand).hashCode = function () {
    var result = getStringHashCode(this.e57());
    result = imul(31, result) + this.c57_1 | 0;
    return result;
  };
  protoOf(CommitTextCommand).toString = function () {
    return "CommitTextCommand(text='" + this.e57() + "', newCursorPosition=" + this.c57_1 + ')';
  };
  function DeleteAllCommand() {
    this.q57_1 = 0;
  }
  protoOf(DeleteAllCommand).f57 = function (buffer) {
    buffer.m57(0, buffer.a(), '');
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
  function FinishComposingTextCommand() {
    this.r57_1 = 0;
  }
  protoOf(FinishComposingTextCommand).f57 = function (buffer) {
    buffer.s57();
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
  function DeleteSurroundingTextCommand$applyTo$lambda() {
    return 0;
  }
  function DeleteSurroundingTextCommand(lengthBeforeCursor, lengthAfterCursor) {
    this.t57_1 = lengthBeforeCursor;
    this.u57_1 = lengthAfterCursor;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.t57_1 >= 0 ? this.u57_1 >= 0 : false)) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextCommand.<anonymous>' call
      var message = 'Expected lengthBeforeCursor and lengthAfterCursor to be non-negative, were ' + ('' + this.t57_1 + ' and ' + this.u57_1 + ' respectively.');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v57_1 = 0;
  }
  protoOf(DeleteSurroundingTextCommand).f57 = function (buffer) {
    // Inline function 'androidx.compose.ui.text.input.addExactOrElse' call
    var this_0 = buffer.i57_1;
    var right = this.u57_1;
    var result = this_0 + right | 0;
    var tmp;
    if (((this_0 ^ result) & (right ^ result)) < 0) {
      // Inline function 'androidx.compose.ui.text.input.DeleteSurroundingTextCommand.applyTo.<anonymous>' call
      tmp = buffer.a();
    } else {
      tmp = result;
    }
    var end = tmp;
    var tmp_0 = buffer.i57_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = buffer.a();
    var tmp$ret$2 = Math.min(end, b);
    buffer.w57(tmp_0, tmp$ret$2);
    var tmp_1 = buffer.h57_1;
    var start = subtractExactOrElse(tmp_1, this.t57_1, DeleteSurroundingTextCommand$applyTo$lambda);
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp$ret$3 = Math.max(0, start);
    buffer.w57(tmp$ret$3, buffer.h57_1);
  };
  protoOf(DeleteSurroundingTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeleteSurroundingTextCommand))
      return false;
    if (!(this.t57_1 === other.t57_1))
      return false;
    if (!(this.u57_1 === other.u57_1))
      return false;
    return true;
  };
  protoOf(DeleteSurroundingTextCommand).hashCode = function () {
    var result = this.t57_1;
    result = imul(31, result) + this.u57_1 | 0;
    return result;
  };
  protoOf(DeleteSurroundingTextCommand).toString = function () {
    return 'DeleteSurroundingTextCommand(lengthBeforeCursor=' + this.t57_1 + ', ' + ('lengthAfterCursor=' + this.u57_1 + ')');
  };
  function SetSelectionCommand(start, end) {
    this.x57_1 = start;
    this.y57_1 = end;
    this.z57_1 = 0;
  }
  protoOf(SetSelectionCommand).f57 = function (buffer) {
    var clampedStart = coerceIn(this.x57_1, 0, buffer.a());
    var clampedEnd = coerceIn(this.y57_1, 0, buffer.a());
    if (clampedStart < clampedEnd) {
      buffer.a58(clampedStart, clampedEnd);
    } else {
      buffer.a58(clampedEnd, clampedStart);
    }
  };
  protoOf(SetSelectionCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SetSelectionCommand))
      return false;
    if (!(this.x57_1 === other.x57_1))
      return false;
    if (!(this.y57_1 === other.y57_1))
      return false;
    return true;
  };
  protoOf(SetSelectionCommand).hashCode = function () {
    var result = this.x57_1;
    result = imul(31, result) + this.y57_1 | 0;
    return result;
  };
  protoOf(SetSelectionCommand).toString = function () {
    return 'SetSelectionCommand(start=' + this.x57_1 + ', end=' + this.y57_1 + ')';
  };
  function SetComposingTextCommand() {
  }
  protoOf(SetComposingTextCommand).e57 = function () {
    return this.b58_1.y4o_1;
  };
  function SetComposingRegionCommand() {
  }
  function DeleteSurroundingTextInCodePointsCommand() {
  }
  function BackspaceCommand() {
  }
  function MoveCursorCommand() {
  }
  function generateBatchErrorMessage($this, editCommands, failedCommand) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.EditProcessor.generateBatchErrorMessage.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var tmp = 'Error while applying EditCommand batch to buffer (' + ('length=' + $this.e58_1.a() + ', ');
    var tmp_0 = $this.e58_1.g58();
    var value = tmp + ('composition=' + (tmp_0 == null ? null : new TextRange(tmp_0)) + ', ') + ('selection=' + new TextRange($this.e58_1.h58()) + '):');
    // Inline function 'kotlin.text.appendLine' call
    this_0.z5(value).a6(_Char___init__impl__6a9atx(10));
    joinTo(editCommands, this_0, '\n', VOID, VOID, VOID, VOID, EditProcessor$generateBatchErrorMessage$lambda(failedCommand, $this));
    return this_0.toString();
  }
  function toStringForLog(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof CommitTextCommand) {
      tmp = 'CommitTextCommand(text.length=' + _this__u8e3s4.e57().length + ', newCursorPosition=' + _this__u8e3s4.c57_1 + ')';
    } else {
      if (_this__u8e3s4 instanceof SetComposingTextCommand) {
        tmp = 'SetComposingTextCommand(text.length=' + _this__u8e3s4.e57().length + ', ' + ('newCursorPosition=' + _this__u8e3s4.c58_1 + ')');
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
                        var tmp1_elvis_lhs = getKClassFromExpression(_this__u8e3s4).d7();
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
  function EditProcessor$generateBatchErrorMessage$lambda($failedCommand, this$0) {
    return function (it) {
      var prefix = $failedCommand === it ? ' > ' : '   ';
      return prefix + toStringForLog(it, this$0);
    };
  }
  function EditProcessor() {
    this.d58_1 = new TextFieldValue(emptyAnnotatedString(), Companion_getInstance_14().n4y_1, null);
    this.e58_1 = new EditingBuffer(this.d58_1.i58_1, this.d58_1.j58_1);
    this.f58_1 = 8;
  }
  protoOf(EditProcessor).m58 = function (value, textInputSession) {
    var textChanged = false;
    var selectionChanged = false;
    var tmp = value.k58_1;
    var tmp_0 = tmp == null ? null : new TextRange(tmp);
    var tmp_1 = this.e58_1.g58();
    var compositionChanged = !equals(tmp_0, tmp_1 == null ? null : new TextRange(tmp_1));
    if (!this.d58_1.i58_1.equals(value.i58_1)) {
      this.e58_1 = new EditingBuffer(value.i58_1, value.j58_1);
      textChanged = true;
    } else if (!equals(this.d58_1.j58_1, value.j58_1)) {
      this.e58_1.a58(_TextRange___get_min__impl__uu95c4(value.j58_1), _TextRange___get_max__impl__owm8m(value.j58_1));
      selectionChanged = true;
    }
    var tmp_2 = value.k58_1;
    if ((tmp_2 == null ? null : new TextRange(tmp_2)) == null) {
      this.e58_1.s57();
    } else {
      if (!_TextRange___get_collapsed__impl__cilesp(value.k58_1)) {
        this.e58_1.n58(_TextRange___get_min__impl__uu95c4(value.k58_1), _TextRange___get_max__impl__owm8m(value.k58_1));
      }
    }
    var tmp_3;
    if (textChanged ? true : !selectionChanged ? compositionChanged : false) {
      this.e58_1.s57();
      tmp_3 = value.o58(VOID, VOID, null);
    } else {
      tmp_3 = value;
    }
    var newValue = tmp_3;
    var oldValue = this.d58_1;
    this.d58_1 = newValue;
    if (textInputSession == null)
      null;
    else
      textInputSession.s58(oldValue, newValue);
  };
  protoOf(EditProcessor).t58 = function (editCommands) {
    var lastCommand = null;
    try {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = editCommands.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = editCommands.i1(index);
          // Inline function 'androidx.compose.ui.text.input.EditProcessor.apply.<anonymous>' call
          lastCommand = item;
          item.f57(this.e58_1);
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
    var newState = new TextFieldValue(this.e58_1.f4p(), this.e58_1.h58(), this.e58_1.g58());
    this.d58_1 = newState;
    return newState;
  };
  protoOf(EditProcessor).u58 = function () {
    return this.d58_1;
  };
  function Companion_10() {
    this.v58_1 = -1;
  }
  var Companion_instance_11;
  function Companion_getInstance_24() {
    return Companion_instance_11;
  }
  function _set_selectionStart__65lsx($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionStart>.<anonymous>' call
      var message = 'Cannot set selectionStart to a negative value: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.h57_1 = value;
  }
  function _set_selectionEnd__2o1cag($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(value >= 0)) {
      // Inline function 'androidx.compose.ui.text.input.EditingBuffer.<set-selectionEnd>.<anonymous>' call
      var message = 'Cannot set selectionEnd to a negative value: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.i57_1 = value;
  }
  function EditingBuffer(text, selection) {
    this.g57_1 = new PartialGapBuffer(text.y4o_1);
    this.h57_1 = _TextRange___get_min__impl__uu95c4(selection);
    this.i57_1 = _TextRange___get_max__impl__owm8m(selection);
    this.j57_1 = -1;
    this.k57_1 = -1;
    var start = _TextRange___get_min__impl__uu95c4(selection);
    var end = _TextRange___get_max__impl__owm8m(selection);
    if (start < 0 ? true : start > text.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + text.a());
    }
    if (end < 0 ? true : end > text.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + text.a());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.l57_1 = 8;
  }
  protoOf(EditingBuffer).n57 = function () {
    return !(this.j57_1 === -1);
  };
  protoOf(EditingBuffer).g58 = function () {
    var tmp;
    if (this.n57()) {
      tmp = TextRange_0(this.j57_1, this.k57_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(EditingBuffer).h58 = function () {
    return TextRange_0(this.h57_1, this.i57_1);
  };
  protoOf(EditingBuffer).p57 = function (cursor) {
    return this.a58(cursor, cursor);
  };
  protoOf(EditingBuffer).o57 = function () {
    return this.h57_1 === this.i57_1 ? this.i57_1 : -1;
  };
  protoOf(EditingBuffer).a = function () {
    return this.g57_1.a();
  };
  protoOf(EditingBuffer).m57 = function (start, end, text) {
    if (start < 0 ? true : start > this.g57_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.g57_1.a());
    }
    if (end < 0 ? true : end > this.g57_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.g57_1.a());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    this.g57_1.m57(start, end, text);
    _set_selectionStart__65lsx(this, start + text.length | 0);
    _set_selectionEnd__2o1cag(this, start + text.length | 0);
    this.j57_1 = -1;
    this.k57_1 = -1;
  };
  protoOf(EditingBuffer).w57 = function (start, end) {
    var deleteRange = TextRange_0(start, end);
    this.g57_1.m57(start, end, '');
    var newSelection = updateRangeAfterDelete(TextRange_0(this.h57_1, this.i57_1), deleteRange);
    _set_selectionStart__65lsx(this, _TextRange___get_min__impl__uu95c4(newSelection));
    _set_selectionEnd__2o1cag(this, _TextRange___get_max__impl__owm8m(newSelection));
    if (this.n57()) {
      var compositionRange = TextRange_0(this.j57_1, this.k57_1);
      var newComposition = updateRangeAfterDelete(compositionRange, deleteRange);
      if (_TextRange___get_collapsed__impl__cilesp(newComposition)) {
        this.s57();
      } else {
        this.j57_1 = _TextRange___get_min__impl__uu95c4(newComposition);
        this.k57_1 = _TextRange___get_max__impl__owm8m(newComposition);
      }
    }
  };
  protoOf(EditingBuffer).a58 = function (start, end) {
    if (start < 0 ? true : start > this.g57_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.g57_1.a());
    }
    if (end < 0 ? true : end > this.g57_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.g57_1.a());
    }
    if (start > end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed range: ' + start + ' > ' + end);
    }
    _set_selectionStart__65lsx(this, start);
    _set_selectionEnd__2o1cag(this, end);
  };
  protoOf(EditingBuffer).n58 = function (start, end) {
    if (start < 0 ? true : start > this.g57_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('start (' + start + ') offset is outside of text region ' + this.g57_1.a());
    }
    if (end < 0 ? true : end > this.g57_1.a()) {
      throw IndexOutOfBoundsException_init_$Create$('end (' + end + ') offset is outside of text region ' + this.g57_1.a());
    }
    if (start >= end) {
      throw IllegalArgumentException_init_$Create$('Do not set reversed or empty range: ' + start + ' > ' + end);
    }
    this.j57_1 = start;
    this.k57_1 = end;
  };
  protoOf(EditingBuffer).s57 = function () {
    this.j57_1 = -1;
    this.k57_1 = -1;
  };
  protoOf(EditingBuffer).toString = function () {
    return this.g57_1.toString();
  };
  protoOf(EditingBuffer).f4p = function () {
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
  function Companion_11() {
    this.b59_1 = 255;
    this.c59_1 = 64;
    this.d59_1 = -1;
  }
  var Companion_instance_12;
  function Companion_getInstance_25() {
    return Companion_instance_12;
  }
  function PartialGapBuffer(text) {
    this.w58_1 = text;
    this.x58_1 = null;
    this.y58_1 = -1;
    this.z58_1 = -1;
    this.a59_1 = 8;
  }
  protoOf(PartialGapBuffer).a = function () {
    var tmp0_elvis_lhs = this.x58_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.w58_1.length;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    return (this.w58_1.length - (this.z58_1 - this.y58_1 | 0) | 0) + buffer.i59() | 0;
  };
  protoOf(PartialGapBuffer).m57 = function (start, end, text) {
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
    var buffer = this.x58_1;
    if (buffer == null) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = text.length + 128 | 0;
      var tmp$ret$2 = Math.max(255, b);
      var charArray_0 = charArray(tmp$ret$2);
      // Inline function 'kotlin.comparisons.minOf' call
      var leftCopyCount = Math.min(start, 64);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = this.w58_1.length - end | 0;
      var rightCopyCount = Math.min(a, 64);
      toCharArray_0(this.w58_1, charArray_0, 0, start - leftCopyCount | 0, start);
      toCharArray_0(this.w58_1, charArray_0, charArray_0.length - rightCopyCount | 0, end, end + rightCopyCount | 0);
      toCharArray(text, charArray_0, leftCopyCount);
      this.x58_1 = new GapBuffer(charArray_0, leftCopyCount + text.length | 0, charArray_0.length - rightCopyCount | 0);
      this.y58_1 = start - leftCopyCount | 0;
      this.z58_1 = end + rightCopyCount | 0;
      return Unit_instance;
    }
    var bufferStart = start - this.y58_1 | 0;
    var bufferEnd = end - this.y58_1 | 0;
    if (bufferStart < 0 ? true : bufferEnd > buffer.i59()) {
      this.w58_1 = this.toString();
      this.x58_1 = null;
      this.y58_1 = -1;
      this.z58_1 = -1;
      return this.m57(start, end, text);
    }
    buffer.m57(bufferStart, bufferEnd, text);
  };
  protoOf(PartialGapBuffer).toString = function () {
    var tmp0_elvis_lhs = this.x58_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.w58_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var b = tmp;
    var sb = StringBuilder_init_$Create$_0();
    sb.j8(this.w58_1, 0, this.y58_1);
    b.j59(sb);
    sb.j8(this.w58_1, this.z58_1, this.w58_1.length);
    return sb.toString();
  };
  function gapLength($this) {
    return $this.h59_1 - $this.g59_1 | 0;
  }
  function makeSureAvailableSpace($this, requestSize) {
    if (requestSize <= gapLength($this)) {
      return Unit_instance;
    }
    var necessarySpace = requestSize - gapLength($this) | 0;
    var newCapacity = imul($this.e59_1, 2);
    while ((newCapacity - $this.e59_1 | 0) < necessarySpace) {
      newCapacity = imul(newCapacity, 2);
    }
    var newBuffer = charArray(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.f59_1;
    var endIndex = $this.g59_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newBuffer, 0, 0, endIndex);
    var tailLength = $this.e59_1 - $this.h59_1 | 0;
    var newEnd = newCapacity - tailLength | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.f59_1;
    var startIndex = $this.h59_1;
    var endIndex_0 = $this.h59_1 + tailLength | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newBuffer, newEnd, startIndex, endIndex_0);
    $this.f59_1 = newBuffer;
    $this.e59_1 = newCapacity;
    $this.h59_1 = newEnd;
  }
  function delete_0($this, start, end) {
    if (start < $this.g59_1 ? end <= $this.g59_1 : false) {
      var copyLen = $this.g59_1 - end | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.f59_1;
      var destination = $this.f59_1;
      var destinationOffset = $this.h59_1 - copyLen | 0;
      var endIndex = $this.g59_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, destinationOffset, end, endIndex);
      $this.g59_1 = start;
      $this.h59_1 = $this.h59_1 - copyLen | 0;
    } else if (start < $this.g59_1 ? end >= $this.g59_1 : false) {
      $this.h59_1 = end + gapLength($this) | 0;
      $this.g59_1 = start;
    } else {
      var startInBuffer = start + gapLength($this) | 0;
      var endInBuffer = end + gapLength($this) | 0;
      var copyLen_0 = startInBuffer - $this.h59_1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.f59_1;
      var destination_0 = $this.f59_1;
      var destinationOffset_0 = $this.g59_1;
      var startIndex = $this.h59_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination_0, destinationOffset_0, startIndex, startInBuffer);
      $this.g59_1 = $this.g59_1 + copyLen_0 | 0;
      $this.h59_1 = endInBuffer;
    }
  }
  function GapBuffer(initBuffer, initGapStart, initGapEnd) {
    this.e59_1 = initBuffer.length;
    this.f59_1 = initBuffer;
    this.g59_1 = initGapStart;
    this.h59_1 = initGapEnd;
  }
  protoOf(GapBuffer).m57 = function (start, end, text) {
    makeSureAvailableSpace(this, text.length - (end - start | 0) | 0);
    delete_0(this, start, end);
    toCharArray(text, this.f59_1, this.g59_1);
    this.g59_1 = this.g59_1 + text.length | 0;
  };
  protoOf(GapBuffer).j59 = function (builder) {
    appendPartOfCharArray(builder, this.f59_1, 0, this.g59_1);
    appendPartOfCharArray(builder, this.f59_1, this.h59_1, this.e59_1 - this.h59_1 | 0);
  };
  protoOf(GapBuffer).i59 = function () {
    return this.e59_1 - gapLength(this) | 0;
  };
  protoOf(GapBuffer).toString = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.GapBuffer.toString.<anonymous>' call
    this_0.i8(this_0);
    return this_0.toString();
  };
  function toCharArray(_this__u8e3s4, destination, destinationOffset) {
    return toCharArray_0(_this__u8e3s4, destination, destinationOffset, 0, _this__u8e3s4.length);
  }
  function _ImeAction___init__impl__ucgwde(value) {
    return value;
  }
  function ImeAction__toString_impl_r8bdhy($this) {
    return $this === Companion_getInstance_26().l59_1 ? 'None' : $this === Companion_getInstance_26().k59_1 ? 'Default' : $this === Companion_getInstance_26().m59_1 ? 'Go' : $this === Companion_getInstance_26().n59_1 ? 'Search' : $this === Companion_getInstance_26().o59_1 ? 'Send' : $this === Companion_getInstance_26().p59_1 ? 'Previous' : $this === Companion_getInstance_26().q59_1 ? 'Next' : $this === Companion_getInstance_26().r59_1 ? 'Done' : 'Invalid';
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.k59_1 = _ImeAction___init__impl__ucgwde(1);
    this.l59_1 = _ImeAction___init__impl__ucgwde(0);
    this.m59_1 = _ImeAction___init__impl__ucgwde(2);
    this.n59_1 = _ImeAction___init__impl__ucgwde(3);
    this.o59_1 = _ImeAction___init__impl__ucgwde(4);
    this.p59_1 = _ImeAction___init__impl__ucgwde(5);
    this.q59_1 = _ImeAction___init__impl__ucgwde(6);
    this.r59_1 = _ImeAction___init__impl__ucgwde(7);
  }
  var Companion_instance_13;
  function Companion_getInstance_26() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function ImeAction__hashCode_impl_m1mrob($this) {
    return $this;
  }
  function ImeAction__equals_impl_tgas09($this, other) {
    if (!(other instanceof ImeAction))
      return false;
    if (!($this === (other instanceof ImeAction ? other.s59_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImeAction(value) {
    Companion_getInstance_26();
    this.s59_1 = value;
  }
  protoOf(ImeAction).toString = function () {
    return ImeAction__toString_impl_r8bdhy(this.s59_1);
  };
  protoOf(ImeAction).hashCode = function () {
    return ImeAction__hashCode_impl_m1mrob(this.s59_1);
  };
  protoOf(ImeAction).equals = function (other) {
    return ImeAction__equals_impl_tgas09(this.s59_1, other);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.t59_1 = new ImeOptions();
  }
  var Companion_instance_14;
  function Companion_getInstance_27() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function ImeOptions(singleLine, capitalization, autoCorrect, keyboardType, imeAction) {
    Companion_getInstance_27();
    singleLine = singleLine === VOID ? false : singleLine;
    capitalization = capitalization === VOID ? Companion_getInstance_28().u59_1 : capitalization;
    autoCorrect = autoCorrect === VOID ? true : autoCorrect;
    keyboardType = keyboardType === VOID ? Companion_getInstance_29().y59_1 : keyboardType;
    imeAction = imeAction === VOID ? Companion_getInstance_26().k59_1 : imeAction;
    this.h5a_1 = singleLine;
    this.i5a_1 = capitalization;
    this.j5a_1 = autoCorrect;
    this.k5a_1 = keyboardType;
    this.l5a_1 = imeAction;
    this.m5a_1 = 0;
  }
  protoOf(ImeOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImeOptions))
      return false;
    if (!(this.h5a_1 === other.h5a_1))
      return false;
    if (!(this.i5a_1 === other.i5a_1))
      return false;
    if (!(this.j5a_1 === other.j5a_1))
      return false;
    if (!(this.k5a_1 === other.k5a_1))
      return false;
    if (!(this.l5a_1 === other.l5a_1))
      return false;
    return true;
  };
  protoOf(ImeOptions).hashCode = function () {
    var result = getBooleanHashCode(this.h5a_1);
    result = imul(31, result) + KeyboardCapitalization__hashCode_impl_6ibuz5(this.i5a_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.j5a_1) | 0;
    result = imul(31, result) + KeyboardType__hashCode_impl_mw6m33(this.k5a_1) | 0;
    result = imul(31, result) + ImeAction__hashCode_impl_m1mrob(this.l5a_1) | 0;
    return result;
  };
  protoOf(ImeOptions).toString = function () {
    return 'ImeOptions(singleLine=' + this.h5a_1 + ', capitalization=' + new KeyboardCapitalization(this.i5a_1) + ', ' + ('autoCorrect=' + this.j5a_1 + ', keyboardType=' + new KeyboardType(this.k5a_1) + ', imeAction=' + new ImeAction(this.l5a_1) + ')');
  };
  function _KeyboardCapitalization___init__impl__fmdpvi(value) {
    return value;
  }
  function KeyboardCapitalization__toString_impl_f8u1tq($this) {
    return $this === Companion_getInstance_28().u59_1 ? 'None' : $this === Companion_getInstance_28().v59_1 ? 'Characters' : $this === Companion_getInstance_28().w59_1 ? 'Words' : $this === Companion_getInstance_28().x59_1 ? 'Sentences' : 'Invalid';
  }
  function Companion_14() {
    Companion_instance_15 = this;
    this.u59_1 = _KeyboardCapitalization___init__impl__fmdpvi(0);
    this.v59_1 = _KeyboardCapitalization___init__impl__fmdpvi(1);
    this.w59_1 = _KeyboardCapitalization___init__impl__fmdpvi(2);
    this.x59_1 = _KeyboardCapitalization___init__impl__fmdpvi(3);
  }
  var Companion_instance_15;
  function Companion_getInstance_28() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function KeyboardCapitalization__hashCode_impl_6ibuz5($this) {
    return $this;
  }
  function KeyboardCapitalization__equals_impl_dba8wb($this, other) {
    if (!(other instanceof KeyboardCapitalization))
      return false;
    if (!($this === (other instanceof KeyboardCapitalization ? other.n5a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardCapitalization(value) {
    Companion_getInstance_28();
    this.n5a_1 = value;
  }
  protoOf(KeyboardCapitalization).toString = function () {
    return KeyboardCapitalization__toString_impl_f8u1tq(this.n5a_1);
  };
  protoOf(KeyboardCapitalization).hashCode = function () {
    return KeyboardCapitalization__hashCode_impl_6ibuz5(this.n5a_1);
  };
  protoOf(KeyboardCapitalization).equals = function (other) {
    return KeyboardCapitalization__equals_impl_dba8wb(this.n5a_1, other);
  };
  function _KeyboardType___init__impl__csir7k(value) {
    return value;
  }
  function KeyboardType__toString_impl_150pa8($this) {
    return $this === Companion_getInstance_29().y59_1 ? 'Text' : $this === Companion_getInstance_29().z59_1 ? 'Ascii' : $this === Companion_getInstance_29().a5a_1 ? 'Number' : $this === Companion_getInstance_29().b5a_1 ? 'Phone' : $this === Companion_getInstance_29().c5a_1 ? 'Uri' : $this === Companion_getInstance_29().d5a_1 ? 'Email' : $this === Companion_getInstance_29().e5a_1 ? 'Password' : $this === Companion_getInstance_29().f5a_1 ? 'NumberPassword' : $this === Companion_getInstance_29().g5a_1 ? 'Decimal' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_16 = this;
    this.y59_1 = _KeyboardType___init__impl__csir7k(1);
    this.z59_1 = _KeyboardType___init__impl__csir7k(2);
    this.a5a_1 = _KeyboardType___init__impl__csir7k(3);
    this.b5a_1 = _KeyboardType___init__impl__csir7k(4);
    this.c5a_1 = _KeyboardType___init__impl__csir7k(5);
    this.d5a_1 = _KeyboardType___init__impl__csir7k(6);
    this.e5a_1 = _KeyboardType___init__impl__csir7k(7);
    this.f5a_1 = _KeyboardType___init__impl__csir7k(8);
    this.g5a_1 = _KeyboardType___init__impl__csir7k(9);
  }
  var Companion_instance_16;
  function Companion_getInstance_29() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function KeyboardType__hashCode_impl_mw6m33($this) {
    return $this;
  }
  function KeyboardType__equals_impl_1eug1f($this, other) {
    if (!(other instanceof KeyboardType))
      return false;
    if (!($this === (other instanceof KeyboardType ? other.o5a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function KeyboardType(value) {
    Companion_getInstance_29();
    this.o5a_1 = value;
  }
  protoOf(KeyboardType).toString = function () {
    return KeyboardType__toString_impl_150pa8(this.o5a_1);
  };
  protoOf(KeyboardType).hashCode = function () {
    return KeyboardType__hashCode_impl_mw6m33(this.o5a_1);
  };
  protoOf(KeyboardType).equals = function (other) {
    return KeyboardType__equals_impl_1eug1f(this.o5a_1, other);
  };
  function subtractExactOrElse(_this__u8e3s4, right, defaultValue) {
    var result = _this__u8e3s4 - right | 0;
    return ((_this__u8e3s4 ^ right) & (_this__u8e3s4 ^ result)) < 0 ? defaultValue() : result;
  }
  function OffsetMapping$Companion$Identity$1() {
  }
  protoOf(OffsetMapping$Companion$Identity$1).p5a = function (offset) {
    return offset;
  };
  protoOf(OffsetMapping$Companion$Identity$1).q5a = function (offset) {
    return offset;
  };
  function Companion_16() {
    Companion_instance_17 = this;
    var tmp = this;
    tmp.r5a_1 = new OffsetMapping$Companion$Identity$1();
  }
  var Companion_instance_17;
  function Companion_getInstance_30() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function PlatformTextInputPluginRegistryImpl(factory) {
    this.s5a_1 = factory;
    this.t5a_1 = mutableStateMapOf();
    this.u5a_1 = false;
    this.v5a_1 = null;
    this.w5a_1 = 0;
  }
  function TextFieldValue$Companion$Saver$lambda($this$Saver, it) {
    return arrayListOf([save_0(it.i58_1, get_AnnotatedStringSaver(), $this$Saver), save_0(new TextRange(it.j58_1), get_Saver_10(Companion_getInstance_14()), $this$Saver)]);
  }
  function TextFieldValue$Companion$Saver$lambda_0(it) {
    var list = isInterface(it, List) ? it : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value = list.i1(0);
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
        var tmp_0 = saver.e4n(value);
        tmp = (tmp_0 == null ? true : tmp_0 instanceof AnnotatedString) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
    }
    var tmp_1 = ensureNotNull(tmp$ret$0);
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var value_0 = list.i1(1);
      var saver_0 = get_Saver_10(Companion_getInstance_14());
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
        var tmp_3 = saver_0.e4n(value_0);
        var tmp_4 = tmp_3 == null ? null : tmp_3.f4v_1;
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
    return new TextFieldValue(tmp_1, ensureNotNull(tmp_9 == null ? null : new TextRange(tmp_9)).f4v_1);
  }
  function TextFieldValue_init_$Init$(text, selection, composition, $this) {
    text = text === VOID ? '' : text;
    selection = selection === VOID ? Companion_getInstance_14().n4y_1 : selection;
    composition = composition === VOID ? null : composition;
    TextFieldValue.call($this, AnnotatedString_init_$Create$(text), selection, composition);
    return $this;
  }
  function TextFieldValue_init_$Create$(text, selection, composition) {
    return TextFieldValue_init_$Init$(text, selection, composition, objectCreate(protoOf(TextFieldValue)));
  }
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = TextFieldValue$Companion$Saver$lambda;
    tmp.x5a_1 = Saver(tmp_0, TextFieldValue$Companion$Saver$lambda_0);
  }
  var Companion_instance_18;
  function Companion_getInstance_31() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function TextFieldValue(annotatedString, selection, composition) {
    Companion_getInstance_31();
    selection = selection === VOID ? Companion_getInstance_14().n4y_1 : selection;
    composition = composition === VOID ? null : composition;
    this.i58_1 = annotatedString;
    this.j58_1 = coerceIn_1(selection, 0, this.e57().length);
    var tmp = this;
    var tmp_0;
    var tmp_1 = composition;
    if ((tmp_1 == null ? null : new TextRange(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = coerceIn_1(composition, 0, this.e57().length);
    }
    tmp.k58_1 = tmp_0;
    this.l58_1 = 0;
  }
  protoOf(TextFieldValue).e57 = function () {
    return this.i58_1.y4o_1;
  };
  protoOf(TextFieldValue).y5a = function (annotatedString, selection, composition) {
    return new TextFieldValue(annotatedString, selection, composition);
  };
  protoOf(TextFieldValue).o58 = function (annotatedString, selection, composition, $super) {
    annotatedString = annotatedString === VOID ? this.i58_1 : annotatedString;
    selection = selection === VOID ? this.j58_1 : selection;
    composition = composition === VOID ? this.k58_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.y5a(annotatedString, selection, composition);
    } else {
      var tmp_0 = $super.y5a;
      var tmp_1 = composition;
      tmp = tmp_0.call(this, annotatedString, new TextRange(selection), tmp_1 == null ? null : new TextRange(tmp_1));
    }
    return tmp;
  };
  protoOf(TextFieldValue).z5a = function (text, selection, composition) {
    return new TextFieldValue(AnnotatedString_init_$Create$(text), selection, composition);
  };
  protoOf(TextFieldValue).a5b = function (text, selection, composition, $super) {
    selection = selection === VOID ? this.j58_1 : selection;
    composition = composition === VOID ? this.k58_1 : composition;
    var tmp;
    if ($super === VOID) {
      tmp = this.z5a(text, selection, composition);
    } else {
      var tmp_0 = $super.z5a;
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
    if (equals(this.j58_1, other.j58_1)) {
      var tmp_1 = this.k58_1;
      var tmp_2 = tmp_1 == null ? null : new TextRange(tmp_1);
      var tmp_3 = other.k58_1;
      tmp_0 = equals(tmp_2, tmp_3 == null ? null : new TextRange(tmp_3));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.i58_1.equals(other.i58_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TextFieldValue).hashCode = function () {
    var result = this.i58_1.hashCode();
    result = imul(31, result) + TextRange__hashCode_impl_3zpp6q(this.j58_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.k58_1;
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
    var tmp = 'TextFieldValue(' + ("text='" + this.i58_1 + "', ") + ('selection=' + new TextRange(this.j58_1) + ', ');
    var tmp_0 = this.k58_1;
    return tmp + ('composition=' + (tmp_0 == null ? null : new TextRange(tmp_0)) + ')');
  };
  function getSelectedText(_this__u8e3s4) {
    return _this__u8e3s4.i58_1.j4p(_this__u8e3s4.j58_1);
  }
  function getTextAfterSelection(_this__u8e3s4, maxChars) {
    var tmp = _TextRange___get_max__impl__owm8m(_this__u8e3s4.j58_1);
    // Inline function 'kotlin.math.min' call
    var a = _TextRange___get_max__impl__owm8m(_this__u8e3s4.j58_1) + maxChars | 0;
    var b = _this__u8e3s4.e57().length;
    var tmp$ret$0 = Math.min(a, b);
    return _this__u8e3s4.i58_1.c(tmp, tmp$ret$0);
  }
  function getTextBeforeSelection(_this__u8e3s4, maxChars) {
    // Inline function 'kotlin.math.max' call
    var b = _TextRange___get_min__impl__uu95c4(_this__u8e3s4.j58_1) - maxChars | 0;
    var tmp$ret$0 = Math.max(0, b);
    return _this__u8e3s4.i58_1.c(tmp$ret$0, _TextRange___get_min__impl__uu95c4(_this__u8e3s4.j58_1));
  }
  function TextInputService(platformTextInputService) {
    this.b5b_1 = platformTextInputService;
    this.c5b_1 = new AtomicReference(null);
    this.d5b_1 = 8;
  }
  protoOf(TextInputService).e5b = function () {
    return this.c5b_1.dq();
  };
  protoOf(TextInputService).f5b = function (value, imeOptions, onEditCommand, onImeActionPerformed) {
    this.b5b_1.g5b(value, imeOptions, onEditCommand, onImeActionPerformed);
    var nextSession = new TextInputSession(this, this.b5b_1);
    this.c5b_1.e2d(nextSession);
    return nextSession;
  };
  protoOf(TextInputService).h5b = function (session) {
    if (this.c5b_1.o2d(session, null)) {
      this.b5b_1.i5b();
    }
  };
  function PlatformTextInputService() {
  }
  function TextInputSession(textInputService, platformTextInputService) {
    this.p58_1 = textInputService;
    this.q58_1 = platformTextInputService;
    this.r58_1 = 0;
  }
  protoOf(TextInputSession).n5b = function () {
    return equals(this.p58_1.e5b(), this);
  };
  protoOf(TextInputSession).gk = function () {
    this.p58_1.h5b(this);
  };
  protoOf(TextInputSession).o5b = function (rect) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.n5b();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.notifyFocusedRect.<anonymous>' call
      this.q58_1.m5b(rect);
    }
    return this_0;
  };
  protoOf(TextInputSession).s58 = function (oldValue, newValue) {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.n5b();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.updateState.<anonymous>' call
      this.q58_1.l5b(oldValue, newValue);
    }
    return this_0;
  };
  protoOf(TextInputSession).p5b = function () {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.n5b();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.showSoftwareKeyboard.<anonymous>' call
      this.q58_1.j5b();
    }
    return this_0;
  };
  protoOf(TextInputSession).q5b = function () {
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession' call
    // Inline function 'kotlin.also' call
    var this_0 = this.n5b();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.input.TextInputSession.ensureOpenSession.<anonymous>' call
    if (this_0) {
      // Inline function 'androidx.compose.ui.text.input.TextInputSession.hideSoftwareKeyboard.<anonymous>' call
      this.q58_1.k5b();
    }
    return this_0;
  };
  function sam$androidx_compose_ui_text_input_VisualTransformation$0(function_0) {
    this.r5b_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_text_input_VisualTransformation$0).s5b = function (text) {
    return this.r5b_1(text);
  };
  function VisualTransformation$Companion$None$lambda(text) {
    return new TransformedText(text, Companion_getInstance_30().r5a_1);
  }
  function Companion_18() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = VisualTransformation$Companion$None$lambda;
    tmp.t5b_1 = new sam$androidx_compose_ui_text_input_VisualTransformation$0(tmp_0);
  }
  var Companion_instance_19;
  function Companion_getInstance_32() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function TransformedText(text, offsetMapping) {
    this.u5b_1 = text;
    this.v5b_1 = offsetMapping;
    this.w5b_1 = 8;
  }
  protoOf(TransformedText).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransformedText))
      return false;
    if (!this.u5b_1.equals(other.u5b_1))
      return false;
    if (!equals(this.v5b_1, other.v5b_1))
      return false;
    return true;
  };
  protoOf(TransformedText).hashCode = function () {
    var result = this.u5b_1.hashCode();
    result = imul(31, result) + hashCode(this.v5b_1) | 0;
    return result;
  };
  protoOf(TransformedText).toString = function () {
    return 'TransformedText(text=' + this.u5b_1 + ', offsetMapping=' + this.v5b_1 + ')';
  };
  function PasswordVisualTransformation() {
  }
  function Companion_19() {
  }
  protoOf(Companion_19).z1v = function () {
    return get_platformLocaleDelegate().z1v().i1(0);
  };
  var Companion_instance_20;
  function Companion_getInstance_33() {
    return Companion_instance_20;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().x5b(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function Locale(platformLocale) {
    this.j4v_1 = platformLocale;
    this.k4v_1 = 0;
  }
  protoOf(Locale).l4v = function () {
    return this.j4v_1.l4v();
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.l4v() === other.l4v();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.l4v());
  };
  protoOf(Locale).toString = function () {
    return this.l4v();
  };
  function Companion_20() {
  }
  protoOf(Companion_20).z1v = function () {
    return get_platformLocaleDelegate().z1v();
  };
  var Companion_instance_21;
  function Companion_getInstance_34() {
    return Companion_instance_21;
  }
  function LocaleList(localeList) {
    this.g4v_1 = localeList;
    this.h4v_1 = this.g4v_1.n();
    this.i4v_1 = 0;
  }
  protoOf(LocaleList).i1 = function (i) {
    return this.g4v_1.i1(i);
  };
  protoOf(LocaleList).n = function () {
    return this.h4v_1;
  };
  protoOf(LocaleList).y5b = function (element) {
    return this.g4v_1.r(element);
  };
  protoOf(LocaleList).r = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.y5b(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).z5b = function (elements) {
    return this.g4v_1.d1(elements);
  };
  protoOf(LocaleList).d1 = function (elements) {
    return this.z5b(elements);
  };
  protoOf(LocaleList).e1 = function () {
    return this.g4v_1.e1();
  };
  protoOf(LocaleList).v = function () {
    return this.g4v_1.v();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.g4v_1, other.g4v_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.g4v_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + this.g4v_1 + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
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
  function Companion_21() {
    Companion_instance_22 = this;
    this.e4x_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.f4x_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.g4x_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  var Companion_instance_22;
  function Companion_getInstance_35() {
    if (Companion_instance_22 == null)
      new Companion_21();
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
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.u4u_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_35();
    this.u4u_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.u4u_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.u4u_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.u4u_1, other);
  };
  function lerp_8(start, stop, fraction) {
    return _BaselineShift___init__impl__scj05g(lerp_3(_BaselineShift___get_multiplier__impl__qhmjek(start), _BaselineShift___get_multiplier__impl__qhmjek(stop), fraction));
  }
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function Companion_22() {
    Companion_instance_23 = this;
    this.a4t_1 = _Hyphens___init__impl__m2cvg8(1);
    this.b4t_1 = _Hyphens___init__impl__m2cvg8(2);
  }
  var Companion_instance_23;
  function Companion_getInstance_36() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_36().a4t_1 ? 'Hyphens.None' : $this === Companion_getInstance_36().b4t_1 ? 'Hyphens.Auto' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.i4t_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_36();
    this.i4t_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.i4t_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.i4t_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.i4t_1, other);
  };
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_instance;
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
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_37().r4s_1 ? 'Left' : $this === Companion_getInstance_37().s4s_1 ? 'Right' : $this === Companion_getInstance_37().t4s_1 ? 'Center' : $this === Companion_getInstance_37().u4s_1 ? 'Justify' : $this === Companion_getInstance_37().v4s_1 ? 'Start' : $this === Companion_getInstance_37().w4s_1 ? 'End' : 'Invalid';
  }
  function Companion_23() {
    Companion_instance_24 = this;
    this.r4s_1 = _TextAlign___init__impl__99wz4v(1);
    this.s4s_1 = _TextAlign___init__impl__99wz4v(2);
    this.t4s_1 = _TextAlign___init__impl__99wz4v(3);
    this.u4s_1 = _TextAlign___init__impl__99wz4v(4);
    this.v4s_1 = _TextAlign___init__impl__99wz4v(5);
    this.w4s_1 = _TextAlign___init__impl__99wz4v(6);
  }
  var Companion_instance_24;
  function Companion_getInstance_37() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.f4t_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_37();
    this.f4t_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.f4t_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.f4t_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.f4t_1, other);
  };
  function Companion_24() {
    Companion_instance_25 = this;
    this.h4x_1 = new TextDecoration(0);
    this.i4x_1 = new TextDecoration(1);
    this.j4x_1 = new TextDecoration(2);
  }
  var Companion_instance_25;
  function Companion_getInstance_38() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function TextDecoration(mask) {
    Companion_getInstance_38();
    this.v4u_1 = mask;
    this.w4u_1 = 0;
  }
  protoOf(TextDecoration).a5c = function (other) {
    return (this.v4u_1 | other.v4u_1) === this.v4u_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.v4u_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$();
    if (!((this.v4u_1 & Companion_getInstance_38().i4x_1.v4u_1) === 0)) {
      values.s('Underline');
    }
    if (!((this.v4u_1 & Companion_getInstance_38().j4x_1.v4u_1) === 0)) {
      values.s('LineThrough');
    }
    if (values.n() === 1) {
      return 'TextDecoration.' + values.i1(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.v4u_1 === other.v4u_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.v4u_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_39().y4z_1 ? 'Ltr' : $this === Companion_getInstance_39().z4z_1 ? 'Rtl' : $this === Companion_getInstance_39().a50_1 ? 'Content' : $this === Companion_getInstance_39().b50_1 ? 'ContentOrLtr' : $this === Companion_getInstance_39().c50_1 ? 'ContentOrRtl' : 'Invalid';
  }
  function Companion_25() {
    Companion_instance_26 = this;
    this.y4z_1 = _TextDirection___init__impl__lh8lzt(1);
    this.z4z_1 = _TextDirection___init__impl__lh8lzt(2);
    this.a50_1 = _TextDirection___init__impl__lh8lzt(3);
    this.b50_1 = _TextDirection___init__impl__lh8lzt(4);
    this.c50_1 = _TextDirection___init__impl__lh8lzt(5);
  }
  var Companion_instance_26;
  function Companion_getInstance_39() {
    if (Companion_instance_26 == null)
      new Companion_25();
    return Companion_instance_26;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.i4s_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_39();
    this.i4s_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.i4s_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.i4s_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.i4s_1, other);
  };
  function Unspecified() {
    this.b5c_1 = 0;
  }
  protoOf(Unspecified).m42 = function () {
    return Companion_getInstance().k42_1;
  };
  protoOf(Unspecified).o4v = function () {
    return null;
  };
  protoOf(Unspecified).y3z = function () {
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    return Unspecified_instance;
  }
  function Companion_26() {
  }
  protoOf(Companion_26).m4v = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_instance;
    }
    return tmp;
  };
  protoOf(Companion_26).n4v = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_instance;
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.m4v(modulate(brush.q42_1, alpha));
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
  var Companion_instance_27;
  function Companion_getInstance_40() {
    return Companion_instance_27;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.y3z();
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
    this.c5c_1 = value;
    this.d5c_1 = alpha;
  }
  protoOf(BrushStyle).y3z = function () {
    return this.d5c_1;
  };
  protoOf(BrushStyle).m42 = function () {
    return Companion_getInstance().k42_1;
  };
  protoOf(BrushStyle).o4v = function () {
    return this.c5c_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + this.c5c_1 + ', alpha=' + this.d5c_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.c5c_1);
    result = imul(result, 31) + getNumberHashCode(this.d5c_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.c5c_1, tmp0_other_with_cast.c5c_1))
      return false;
    if (!equals(this.d5c_1, tmp0_other_with_cast.d5c_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.e5c_1 = value;
    // Inline function 'kotlin.require' call
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.e5c_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      var message = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ColorStyle).m42 = function () {
    return this.e5c_1;
  };
  protoOf(ColorStyle).o4v = function () {
    return null;
  };
  protoOf(ColorStyle).y3z = function () {
    return _Color___get_alpha__impl__wcfyv1(this.m42());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + new Color(this.e5c_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.e5c_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.e5c_1, tmp0_other_with_cast.e5c_1))
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
      tmp = Companion_instance_27.m4v(lerp(start.m42(), stop.m42(), fraction));
    } else {
      var tmp_1;
      if (start instanceof BrushStyle) {
        tmp_1 = stop instanceof BrushStyle;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = Companion_instance_27.n4v(lerpDiscrete(start.o4v(), stop.o4v(), fraction), lerp_3(start.y3z(), stop.y3z(), fraction));
      } else {
        tmp = lerpDiscrete(start, stop, fraction);
      }
    }
    return tmp;
  }
  function Companion_27() {
    Companion_instance_28 = this;
    this.q4w_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_28;
  function Companion_getInstance_41() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_41();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.x4u_1 = scaleX;
    this.y4u_1 = skewX;
    this.z4u_1 = 0;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.x4u_1 === other.x4u_1))
      return false;
    if (!(this.y4u_1 === other.y4u_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.x4u_1);
    result = imul(31, result) + getNumberHashCode(this.y4u_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.x4u_1 + ', skewX=' + this.y4u_1 + ')';
  };
  function lerp_10(start, stop, fraction) {
    return new TextGeometricTransform(lerp_3(start.x4u_1, stop.x4u_1, fraction), lerp_3(start.y4u_1, stop.y4u_1, fraction));
  }
  function Companion_28() {
    Companion_instance_29 = this;
    this.g4t_1 = new TextIndent_0();
  }
  var Companion_instance_29;
  function Companion_getInstance_42() {
    if (Companion_instance_29 == null)
      new Companion_28();
    return Companion_instance_29;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_42();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.a4v_1 = firstLine;
    this.b4v_1 = restLine;
    this.c4v_1 = 0;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.a4v_1, other.a4v_1))
      return false;
    if (!equals(this.b4v_1, other.b4v_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.a4v_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.b4v_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + new TextUnit(this.a4v_1) + ', restLine=' + new TextUnit(this.b4v_1) + ')';
  };
  function lerp_11(start, stop, fraction) {
    return new TextIndent_0(lerpTextUnitInheritable(start.a4v_1, stop.a4v_1, fraction), lerpTextUnitInheritable(start.b4v_1, stop.b4v_1, fraction));
  }
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_43().k4y_1 ? 'Clip' : $this === Companion_getInstance_43().l4y_1 ? 'Ellipsis' : $this === Companion_getInstance_43().m4y_1 ? 'Visible' : 'Invalid';
  }
  function Companion_29() {
    Companion_instance_30 = this;
    this.k4y_1 = _TextOverflow___init__impl__obguoe(1);
    this.l4y_1 = _TextOverflow___init__impl__obguoe(2);
    this.m4y_1 = _TextOverflow___init__impl__obguoe(3);
  }
  var Companion_instance_30;
  function Companion_getInstance_43() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.f5c_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_43();
    this.f5c_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.f5c_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.f5c_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.f5c_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  function isNeutralDirection(_this__u8e3s4) {
    var tmp0_subject = CharDirection_getInstance().u3q(_this__u8e3s4);
    var tmp;
    var tmp_0;
    var tmp_1;
    CharDirection_getInstance();
    if (tmp0_subject === 10) {
      tmp_1 = true;
    } else {
      CharDirection_getInstance();
      tmp_1 = tmp0_subject === 9;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      CharDirection_getInstance();
      tmp_0 = tmp0_subject === 18;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function strongDirectionType(_this__u8e3s4) {
    var tmp0_subject = CharDirection_getInstance().u3q(_this__u8e3s4);
    var tmp;
    CharDirection_getInstance();
    if (tmp0_subject === 0) {
      tmp = Companion_getInstance_44().h5c_1;
    } else {
      var tmp_0;
      CharDirection_getInstance();
      if (tmp0_subject === 1) {
        tmp_0 = true;
      } else {
        CharDirection_getInstance();
        tmp_0 = tmp0_subject === 13;
      }
      if (tmp_0) {
        tmp = Companion_getInstance_44().i5c_1;
      } else {
        tmp = Companion_getInstance_44().g5c_1;
      }
    }
    return tmp;
  }
  function toCharArray_0(_this__u8e3s4, destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = until(startIndex, endIndex).v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'androidx.compose.ui.text.input.toCharArray.<anonymous>' call
      destination[(destinationOffset + element | 0) - startIndex | 0] = charSequenceGet(_this__u8e3s4, element);
    }
  }
  function NoCache() {
  }
  protoOf(NoCache).j5c = function (key, loader) {
    return loader(key);
  };
  protoOf(NoCache).k5c = function (key, loader) {
    return this.j5c(!(key == null) ? key : THROW_CCE(), loader);
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
        _this__u8e3s4.a6(charArray[i]);
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
    this.l5c_1 = locale;
  }
  protoOf(JsLocale).m5c = function () {
    return this.l5c_1.language;
  };
  protoOf(JsLocale).l4v = function () {
    return this.l5c_1.baseName;
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
    return get_rtlLanguagesSet().r(_this__u8e3s4.m5c());
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).z1v = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'androidx.compose.ui.text.intl.<no name provided>.<get-current>.<anonymous>' call
      var tmp$ret$0 = new Locale(JsLocale_init_$Create$(item));
      destination.s(tmp$ret$0);
    }
    return new LocaleList(destination);
  };
  protoOf(createPlatformLocaleDelegate$1).x5b = function (languageTag) {
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
    switch (get_hostOs().j9_1) {
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
      tmp = Companion_getInstance_4().q3p(Companion_getInstance_5().w3h(font.n5c_1));
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function PlatformFont() {
  }
  protoOf(PlatformFont).d53 = function () {
    return '' + getKClassFromExpression(this).d7() + '|' + this.o5c();
  };
  function checkEvicted($this, now) {
    var expireTime = now.ra($this.p5c_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = $this.s5c_1.o2();
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.v();
    $l$loop: while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      if (!(ensureNotNull($this.s5c_1.b3(item)).a7(expireTime) < 0))
        break $l$loop;
      list.s(item);
    }
    var tmp0_iterator_0 = list.v();
    while (tmp0_iterator_0.w()) {
      var element = tmp0_iterator_0.y();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      $this.r5c_1.v2(element);
      $this.s5c_1.v2(element);
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
    this.p5c_1 = expireAfterNanos;
    this.q5c_1 = currentNanos;
    this.r5c_1 = HashMap_init_$Create$_0();
    this.s5c_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).k5c = function (key, loader) {
    this.s5c_1.v2(key);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.r5c_1;
    var value = this_0.b3(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
      var answer = loader(key);
      this_0.r2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var this_1 = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
    var now = this.q5c_1();
    // Inline function 'kotlin.collections.set' call
    this.s5c_1.r2(key, now);
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
  function Companion_30() {
    Companion_instance_31 = this;
    this.g5c_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.h5c_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.i5c_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_31;
  function Companion_getInstance_44() {
    if (Companion_instance_31 == null)
      new Companion_30();
    return Companion_instance_31;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var tmp0_iterator = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).v();
    $l$loop: while (tmp0_iterator.w()) {
      var codePoint = tmp0_iterator.y();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_44().g5c_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_44().g5c_1;
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) ? (index + 1 | 0) < _this__u8e3s4.length : false) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_6(), high, low);
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
    Companion_getInstance_6();
    var tmp = Char__minus_impl_a2frrh(high, _Char___init__impl__6a9atx(55296)) << 10;
    Companion_getInstance_6();
    return (tmp | Char__minus_impl_a2frrh(low, _Char___init__impl__6a9atx(56320))) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.b5d_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).e34 = function ($this$sequence, $completion) {
    var tmp = this.f34($this$sequence, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).fc = function (p1, $completion) {
    return this.e34(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 5;
            this.d5d_1 = 0;
            this.e5d_1 = get_codePoints(this.b5d_1).v();
            this.hb_1 = 1;
            continue $sm;
          case 1:
            if (!this.e5d_1.w()) {
              this.hb_1 = 4;
              continue $sm;
            }

            this.f5d_1 = this.e5d_1.y();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.q9_1;
            var containsUpper = progression.r9_1;
            var containsArg = this.f5d_1;
            if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
              this.d5d_1 = this.d5d_1 + 1 | 0;
              this.hb_1 = 3;
              continue $sm;
            } else {
              if (this.f5d_1 === 8297) {
                if (this.d5d_1 > 0) {
                  this.d5d_1 = this.d5d_1 - 1 | 0;
                }
                this.hb_1 = 3;
                continue $sm;
              } else {
                if (this.d5d_1 === 0) {
                  this.hb_1 = 2;
                  suspendResult = this.c5d_1.fe(this.f5d_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.hb_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.hb_1 = 1;
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
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).f34 = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.b5d_1, completion);
    i.c5d_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.e34($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.o5d_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).e34 = function ($this$sequence, $completion) {
    var tmp = this.f34($this$sequence, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).fc = function (p1, $completion) {
    return this.e34(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            this.q5d_1 = 0;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            if (!(this.q5d_1 < this.o5d_1.length)) {
              this.hb_1 = 3;
              continue $sm;
            }

            this.r5d_1 = codePointAt(this.o5d_1, this.q5d_1);
            this.hb_1 = 2;
            suspendResult = this.p5d_1.fe(this.r5d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q5d_1 = this.q5d_1 + charCount(this.r5d_1) | 0;
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
  protoOf(_get_codePoints_$slambda_43x8dt).f34 = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.o5d_1, completion);
    i.p5d_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.e34($this$sequence, $completion);
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
  function Companion_31() {
    Companion_instance_32 = this;
    this.j4t_1 = new PlatformParagraphStyle();
  }
  var Companion_instance_32;
  function Companion_getInstance_45() {
    if (Companion_instance_32 == null)
      new Companion_31();
    return Companion_instance_32;
  }
  function PlatformParagraphStyle() {
    Companion_getInstance_45();
    this.d4t_1 = 0;
  }
  protoOf(PlatformParagraphStyle).e4t = function (other) {
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
  function Companion_32() {
    Companion_instance_33 = this;
    this.r4w_1 = new PlatformSpanStyle();
  }
  var Companion_instance_33;
  function Companion_getInstance_46() {
    if (Companion_instance_33 == null)
      new Companion_32();
    return Companion_instance_33;
  }
  function PlatformSpanStyle() {
    Companion_getInstance_46();
    this.v4v_1 = 0;
  }
  protoOf(PlatformSpanStyle).w4v = function (other) {
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
    $this.o4y_1 = spanStyle;
    $this.p4y_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.p4y_1, other.p4y_1))
      return false;
    if (!equals(this.o4y_1, other.o4y_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle() {
    this.q4y_1 = 0;
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
  function _get_text__de5ose($this) {
    return $this.i5e_1.u5d_1;
  }
  function lineMetricsForOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var metrics = _get_lineMetrics__5iiuki($this);
    var inductionVariable = 0;
    var last = metrics.length;
    while (inductionVariable < last) {
      var line = metrics[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (offset < line.s3r_1) {
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
        if (vertical < element.a3s_1 + element.v3r_1) {
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
    if (_get_text__de5ose($this) === '') {
      var metrics = $this.j5e_1.p5e().k3i();
      var ascent = -metrics.e3j_1;
      var descent = metrics.f3j_1;
      var baseline = $this.k5e_1.j3s();
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      var $this$with = $this.j5e_1.q5e().l3t();
      var tmp_0;
      if ((($this$with.l3u() ? !$this$with.m3u() : false) ? $this$with.p3u() : false) ? $this$with.g3u() > 0.0 : false) {
        tmp_0 = $this$with.l39() * $this$with.g3u();
      } else {
        tmp_0 = ascent + descent;
      }
      var height = tmp_0;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [new LineMetrics(0, 0, 0, 0, true, ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
    } else {
      var tmp_1 = $this.k5e_1.r3s();
      tmp = isArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function getBoxForwardByOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose($this).length) {
      var box = firstOrNull($this.k5e_1.n3s(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
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
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var from = offset - 1 | 0;
    var isRtl = $this.i5e_1.a5e_1.equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.k5e_1.n3s(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (charSequenceGet(_get_text__de5ose($this), from) === _Char___init__impl__6a9atx(10)) {
        var tmp;
        if (!isRtl) {
          var bottom = box.q3u_1.n3f_1 + box.q3u_1.n3f_1 - box.q3u_1.l3f_1;
          var rect = new Rect_0(0.0, box.q3u_1.n3f_1, 0.0, bottom);
          return new TextBox(rect, box.s3u());
        } else {
          var tmp_0;
          if (from === get_lastIndex_0(_get_text__de5ose($this))) {
            var bottom_0 = box.q3u_1.n3f_1 + box.q3u_1.n3f_1 - box.q3u_1.l3f_1;
            var rect_0 = new Rect_0($this.k39(), box.q3u_1.n3f_1, $this.k39(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.s3u());
          } else {
            var nextBox = first_0($this.k5e_1.n3s(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect_0(nextBox.q3u_1.k3f_1, nextBox.q3u_1.l3f_1, nextBox.q3u_1.k3f_1, nextBox.q3u_1.n3f_1);
            tmp_0 = new TextBox(rect_1, nextBox.s3u());
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
  function SkiaParagraph(intrinsics, maxLines, ellipsis, constraints) {
    this.e5e_1 = maxLines;
    this.f5e_1 = ellipsis;
    this.g5e_1 = constraints;
    this.h5e_1 = this.f5e_1 ? '\u2026' : '';
    var tmp = this;
    tmp.i5e_1 = intrinsics instanceof SkiaParagraphIntrinsics ? intrinsics : THROW_CCE();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.i5e_1.r5e();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.layouter.<anonymous>' call
    this_0.s5e(this.e5e_1, this.h5e_1);
    tmp_0.j5e_1 = this_0;
    this.k5e_1 = this.j5e_1.t5e(this.k39());
    this.k5e_1.l3s(this.k39());
  }
  protoOf(SkiaParagraph).k39 = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.g5e_1);
  };
  protoOf(SkiaParagraph).l39 = function () {
    return this.k5e_1.l39();
  };
  protoOf(SkiaParagraph).h3s = function () {
    return this.i5e_1.c5e_1;
  };
  protoOf(SkiaParagraph).c4r = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.a3s_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).d4r = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.a3s_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).s4q = function () {
    return this.k5e_1.k3s();
  };
  protoOf(SkiaParagraph).r4q = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' ? true : this.k5e_1.s3s() < 1) {
      tmp = 1;
    } else {
      tmp = this.k5e_1.s3s();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).a4r = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.k5e_1.o3s();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      var tmp$ret$0 = toComposeRect(item.q3u_1);
      destination.s(tmp$ret$0);
    }
    return destination;
  };
  protoOf(SkiaParagraph).j4r = function (start, end) {
    var boxes = this.k5e_1.n3s(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).l3n(b.q3u_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).y4r = function (offset) {
    var horizontal = this.t4r(offset, true);
    var line = ensureNotNull(lineMetricsForOffset(this, offset));
    var isNewEmptyLine = (offset - 1 | 0) === line.p3r_1 ? offset === _get_text__de5ose(this).length : false;
    var metrics = this.j5e_1.p5e().k3i();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var it = line.u3r_1;
    var tmp;
    if (isNewEmptyLine) {
      var ascent = -metrics.e3j_1;
      tmp = coerceAtMost(it, ascent);
    } else {
      tmp = it;
    }
    var asc = tmp;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.getCursorRect.<anonymous>' call
    var it_0 = line.v3r_1;
    var tmp_0;
    if (isNewEmptyLine) {
      var descent = metrics.f3j_1;
      tmp_0 = coerceAtMost(it_0, descent);
    } else {
      tmp_0 = it_0;
    }
    var desc = tmp_0;
    return new Rect_1(horizontal, line.a3s_1 - asc, horizontal, line.a3s_1 + desc);
  };
  protoOf(SkiaParagraph).a4s = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3r_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).c4s = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c3s();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).d4s = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.a3s_1 - tmp0_safe_receiver.u3r_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).e4s = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineBottom.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.a3s_1 + tmp0_safe_receiver.v3r_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).f4s = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x3r_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver;
    return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
  };
  protoOf(SkiaParagraph).g4s = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p3r_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).h4s = function (lineIndex, visibleEnd) {
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
      if (lineIndex > 0 ? metrics.p3r_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].q3r_1 : false) {
        tmp_1 = metrics.q3r_1;
      } else if (metrics.p3r_1 < _get_text__de5ose(this).length ? charSequenceGet(_get_text__de5ose(this), metrics.p3r_1) === _Char___init__impl__6a9atx(10) : false) {
        tmp_1 = metrics.p3r_1;
      } else {
        tmp_1 = metrics.r3r_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.q3r_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).z4r = function (offset) {
    var tmp0_safe_receiver = lineMetricsForOffset(this, offset);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3s_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).m4r = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b3s_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).t4r = function (offset, usePrimaryDirection) {
    var prevBox = getBoxBackwardByOffset$default(this, offset);
    var nextBox = getBoxForwardByOffset(this, offset);
    var isRtl = this.i5e_1.a5e_1.equals(ResolvedTextDirection_Rtl_getInstance());
    var isLtr = !isRtl;
    return (prevBox == null ? nextBox == null : false) ? isRtl ? this.k39() : 0.0 : prevBox == null ? cursorHorizontalPosition(ensureNotNull(nextBox), true) : nextBox == null ? cursorHorizontalPosition(prevBox) : nextBox.s3u().equals(prevBox.s3u()) ? cursorHorizontalPosition(nextBox, true) : (isLtr ? prevBox.s3u().equals(Direction_LTR_getInstance()) : false) ? cursorHorizontalPosition(nextBox, true) : (isRtl ? prevBox.s3u().equals(Direction_RTL_getInstance()) : false) ? cursorHorizontalPosition(nextBox, true) : usePrimaryDirection ? cursorHorizontalPosition(prevBox) : cursorHorizontalPosition(nextBox, true);
  };
  protoOf(SkiaParagraph).u4r = function (offset) {
    return this.i5e_1.a5e_1;
  };
  protoOf(SkiaParagraph).v4r = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s3u();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.j9_1) {
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
  protoOf(SkiaParagraph).p4r = function (position) {
    var glyphPosition = this.k5e_1.p3s(_Offset___get_x__impl__xvi35n(position), _Offset___get_y__impl__8bzhra(position)).u3t_1;
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, _Offset___get_y__impl__8bzhra(position));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var expectedLine = tmp;
    var isNotEmptyLine = expectedLine.p3r_1 < expectedLine.q3r_1;
    if (_Offset___get_x__impl__xvi35n(position) > expectedLine.z3r_1 ? _Offset___get_x__impl__xvi35n(position) < expectedLine.c3s() : false) {
      return glyphPosition;
    }
    var tmp_0;
    if (isNotEmptyLine) {
      tmp_0 = this.k5e_1.n3s(expectedLine.p3r_1, expectedLine.t3r_1 ? expectedLine.q3r_1 : expectedLine.q3r_1 - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_0 = null;
    }
    var rects = tmp_0;
    var tmp2_safe_receiver = rects == null ? null : firstOrNull(rects);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q3u_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.k3f_1;
    var leftX = tmp4_elvis_lhs == null ? expectedLine.z3r_1 : tmp4_elvis_lhs;
    var tmp6_safe_receiver = rects == null ? null : lastOrNull(rects);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.q3u_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.m3f_1;
    var rightX = tmp8_elvis_lhs == null ? expectedLine.c3s() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var correctedGlyphPosition = glyphPosition;
    if (_Offset___get_x__impl__xvi35n(position) <= leftX) {
      correctedGlyphPosition = this.k5e_1.p3s(leftX + 1.0, _Offset___get_y__impl__8bzhra(position)).u3t_1;
    } else if (_Offset___get_x__impl__xvi35n(position) >= rightX) {
      correctedGlyphPosition = this.k5e_1.p3s(rightX - 1.0, _Offset___get_y__impl__8bzhra(position)).u3t_1;
      var tmp_1;
      if (0 <= correctedGlyphPosition ? correctedGlyphPosition <= (charSequenceLength(_get_text__de5ose(this)) - 1 | 0) : false) {
        tmp_1 = isNeutralDirection(codePointAt(_get_text__de5ose(this), correctedGlyphPosition));
      } else {
        tmp_1 = false;
      }
      var isNeutralChar = tmp_1;
      var tmp_2;
      if (!isNeutralChar) {
        var tmp9_safe_receiver = getBoxBackwardByOffset$default(this, correctedGlyphPosition);
        tmp_2 = equals(tmp9_safe_receiver == null ? null : tmp9_safe_receiver.s3u(), Direction_RTL_getInstance());
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        correctedGlyphPosition = correctedGlyphPosition - 1 | 0;
      }
    }
    return correctedGlyphPosition;
  };
  protoOf(SkiaParagraph).s4r = function (offset) {
    var tmp0_elvis_lhs = getBoxForwardByOffset(this, offset);
    var box = tmp0_elvis_lhs == null ? ensureNotNull(getBoxBackwardByOffset(this, offset, _get_text__de5ose(this).length)) : tmp0_elvis_lhs;
    return toComposeRect(box.q3u_1);
  };
  protoOf(SkiaParagraph).w4r = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose(this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose(this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if ((offset < _get_text__de5ose(this).length ? isWhitespace(charSequenceGet(_get_text__de5ose(this), offset)) : false) ? true : offset === _get_text__de5ose(this).length) {
      var tmp;
      if (offset > 0 ? !isWhitespace(charSequenceGet(_get_text__de5ose(this), offset - 1 | 0)) : false) {
        tmp = toTextRange(this.k5e_1.q3s(offset - 1 | 0));
      } else {
        tmp = TextRange_0(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.k5e_1.q3s(offset));
  };
  protoOf(SkiaParagraph).f4r = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.j5e_1;
    $this$with.u5e(color, shadow, textDecoration);
    $this$with.v5e(drawStyle);
    $this$with.w5e(blendMode);
    tmp.k5e_1 = $this$with.t5e(this.k39());
    this.k5e_1.m3s(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).h4r = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.j5e_1;
    $this$with.x5e(brush, Size(this.k39(), this.l39()), alpha, shadow, textDecoration);
    $this$with.v5e(drawStyle);
    $this$with.w5e(blendMode);
    tmp.k5e_1 = $this$with.t5e(this.k39());
    this.k5e_1.m3s(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function toTextRange(_this__u8e3s4) {
    return TextRange_0(_this__u8e3s4.d3l_1, _this__u8e3s4.e3l_1);
  }
  function createFontFamilyResolver() {
    return new FontFamilyResolverImpl(new SkiaFontLoader());
  }
  function createFontFamilyResolver_0(fontCache) {
    return new FontFamilyResolverImpl(new SkiaFontLoader(fontCache));
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).w52 = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.v51_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.v51_1;
    var result = skiaFontLoader.a5f(tmp0_elvis_lhs == null ? Companion_getInstance_17().z4w_1 : tmp0_elvis_lhs, typefaceRequest.w51_1, typefaceRequest.x51_1);
    return new Immutable(result);
  };
  function SkiaFontLoader(fontCache) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    this.y5e_1 = fontCache;
    this.z5e_1 = this.y5e_1;
  }
  protoOf(SkiaFontLoader).b5f = function () {
    return this.y5e_1.c5f_1;
  };
  protoOf(SkiaFontLoader).y56 = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.c51() === Companion_getInstance_20().e51_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
      return null;
    }
    var tmp0_subject = font.c51();
    var tmp;
    if (tmp0_subject === Companion_getInstance_20().d51_1) {
      tmp = this.y5e_1.g5f(font);
    } else if (tmp0_subject === Companion_getInstance_20().e51_1) {
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        var value = this.y5e_1.g5f(font);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
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
    } else if (tmp0_subject === Companion_getInstance_20().f51_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + new FontLoadingStrategy(font.c51()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).a5f = function (fontFamily, fontWeight, fontStyle) {
    return this.y5e_1.a5f(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).h5f = function (font, $completion) {
    return this.y56(font);
  };
  protoOf(SkiaFontLoader).d55 = function (font, $completion) {
    return this.h5f(font, $completion);
  };
  protoOf(SkiaFontLoader).d53 = function () {
    return this.z5e_1;
  };
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.l5e_1 = text;
    this.m5e_1 = new ParagraphBuilder_0(fontFamilyResolver, this.l5e_1, style, VOID, VOID, VOID, spanStyles, placeholders, density, textDirection);
    this.n5e_1 = null;
    var tmp = this;
    tmp.o5e_1 = NaN;
  }
  protoOf(ParagraphLayouter).p5e = function () {
    return this.m5e_1.p5e();
  };
  protoOf(ParagraphLayouter).q5e = function () {
    return this.m5e_1.q5e();
  };
  protoOf(ParagraphLayouter).s5e = function (maxLines, ellipsis) {
    if (!(this.m5e_1.n5f_1 === maxLines) ? true : !(this.m5e_1.m5f_1 === ellipsis)) {
      this.m5e_1.n5f_1 = maxLines;
      this.m5e_1.m5f_1 = ellipsis;
      this.n5e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).u5e = function (color, shadow, textDecoration) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
      tmp = color;
    } else {
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setTextStyle.<anonymous>' call
      tmp = this.m5e_1.k5f_1.m42();
    }
    var actualColor = tmp;
    if ((!equals(this.m5e_1.k5f_1.m42(), actualColor) ? true : !equals(this.m5e_1.k5f_1.m4z(), shadow)) ? true : !equals(this.m5e_1.k5f_1.l4z(), textDecoration)) {
      this.m5e_1.k5f_1 = this.m5e_1.k5f_1.x4y(actualColor, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.n5e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).x5e = function (brush, brushSize, alpha, shadow, textDecoration) {
    var actualSize = this.m5e_1.l5f_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (!equals(this.m5e_1.k5f_1.o4v(), brush)) {
      tmp_4 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_4 = _Size___get_packedValue__impl__7rlt1o(actualSize).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_7().k3a_1));
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
      tmp_1 = !sameValueAs(this.m5e_1.k5f_1.y3z(), alpha);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !equals(this.m5e_1.k5f_1.m4z(), shadow);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(this.m5e_1.k5f_1.l4z(), textDecoration);
    }
    if (tmp) {
      this.m5e_1.k5f_1 = this.m5e_1.k5f_1.z4y(brush, alpha, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.m5e_1.l5f_1 = brushSize;
      this.n5e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).v5e = function (drawStyle) {
    if (!equals(this.m5e_1.s5f_1, drawStyle)) {
      this.m5e_1.s5f_1 = drawStyle;
      this.n5e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).w5e = function (blendMode) {
    if (!(this.m5e_1.t5f_1 === blendMode)) {
      this.m5e_1.t5f_1 = blendMode;
      this.n5e_1 = null;
    }
  };
  protoOf(ParagraphLayouter).t5e = function (width) {
    var paragraph = this.n5e_1;
    var tmp;
    if (!(paragraph == null)) {
      if (!sameValueAs(this.o5e_1, width)) {
        this.o5e_1 = width;
        paragraph.l3s(width);
      }
      tmp = paragraph;
    } else {
      // Inline function 'kotlin.apply' call
      var this_0 = this.m5e_1.v24();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.layoutParagraph.<anonymous>' call
      this.n5e_1 = this_0;
      this_0.l3s(width);
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
    return this_0.u2();
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
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
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
  function FontLoadResult(typeface, aliases) {
    this.a5g_1 = typeface;
    this.b5g_1 = aliases;
    this.c5g_1 = 8;
  }
  function FontLoader() {
    this.d5g_1 = new FontCache();
    this.e5g_1 = createFontFamilyResolver_0(this.d5g_1);
    this.f5g_1 = 0;
  }
  function mapGenericFontFamily($this, generic) {
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().b3(generic.o51_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unknown generic font family ' + generic.o51_1;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.e5f_1.r(key)) {
      $this.d5f_1.r3v(typeface, key);
      $this.e5f_1.s(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + fontFamily);
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_0 = fontFamily.i5g_1;
        var typeface = tmp_0 instanceof SkiaBackedTypeface ? tmp_0 : THROW_CCE();
        var tmp1_elvis_lhs = typeface.j5g_1;
        var alias = tmp1_elvis_lhs == null ? typeface.k5g_1.v3p() : tmp1_elvis_lhs;
        ensureRegistered($this, typeface.k5g_1, alias);
        tmp = listOf_0(alias);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = mapGenericFontFamily($this, fontFamily);
        } else {
          if (equals(fontFamily, Companion_getInstance_17().z4w_1)) {
            tmp = mapGenericFontFamily($this, Companion_getInstance_17().a4x_1);
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
    this.c5f_1 = FontCollection_init_$Create$();
    this.d5f_1 = new TypefaceFontProvider();
    this.e5f_1 = HashSet_init_$Create$();
    this.f5f_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.c5f_1.h3r(Companion_getInstance_8().u3j_1);
    this.c5f_1.g3r(this.d5f_1);
  }
  protoOf(FontCache).g5f = function (font) {
    var tmp = font.d53();
    var typeface = this.f5f_1.k5c(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.d53());
    return new FontLoadResult(typeface, listOf_0(font.d53()));
  };
  protoOf(FontCache).a5f = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).b3k(fontWeight.d4v_1);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.c5f_1.j3r(tmp$ret$0, style)), aliases);
  };
  function SkiaBackedTypeface() {
  }
  function LoadedFont() {
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().j9_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_17().a4x_1.o51_1, listOf(['Noto Sans', 'DejaVu Sans'])), to(Companion_getInstance_17().b4x_1.o51_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_17().c4x_1.o51_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono'])), to(Companion_getInstance_17().d4x_1.o51_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_17().a4x_1.o51_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_17().b4x_1.o51_1, listOf_0('Times New Roman')), to(Companion_getInstance_17().c4x_1.o51_1, listOf_0('Consolas')), to(Companion_getInstance_17().d4x_1.o51_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_17().a4x_1.o51_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_17().b4x_1.o51_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_17().c4x_1.o51_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_17().d4x_1.o51_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_17().a4x_1.o51_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_17().b4x_1.o51_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_17().c4x_1.o51_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_17().d4x_1.o51_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_17().a4x_1.o51_1, listOf_0('Arial')), to(Companion_getInstance_17().b4x_1.o51_1, listOf_0('Times New Roman')), to(Companion_getInstance_17().c4x_1.o51_1, listOf_0('Consolas')), to(Companion_getInstance_17().d4x_1.o51_1, listOf_0('Comic Sans MS'))]);
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
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_9().n40_1 : blendMode;
    canvas.r43();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.m4q_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.i1(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.t4q_1.h4r(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.u43(0.0, item.t4q_1.l39());
      }
       while (inductionVariable <= last);
    canvas.s43();
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
    brushSize = brushSize === VOID ? Companion_getInstance_7().k3a_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g49_1 : blendMode;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
    var tmp = density.l3b(spanStyle.c4u_1);
    var tmp_0;
    if (get_isUnspecified(spanStyle.i4u_1)) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
      tmp_0 = density.l3b(spanStyle.i4u_1);
    }
    ComputedStyle.call($this, spanStyle.b4u_1, brushSize, tmp, spanStyle.d4u_1, spanStyle.e4u_1, spanStyle.f4u_1, spanStyle.g4u_1, spanStyle.h4u_1, tmp_0, spanStyle.j4u_1, spanStyle.k4u_1, spanStyle.l4u_1, spanStyle.m4u_1, spanStyle.n4u_1, spanStyle.o4u_1, spanStyle.q4u_1, blendMode);
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
      $this$with.l42($this.l5g_1.m42());
      applyBrush($this$with, $this.l5g_1.o4v(), $this.m5g_1, $this.l5g_1.y3z());
      applyDrawStyle($this$with, $this.a5h_1);
      $this$with.b4f($this.b5h_1);
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>.<anonymous>.<anonymous>' call
      if ((!($this$with.n42() == null) ? true : !($this$with.q4m() === Companion_getInstance_10().p49_1)) ? true : !this_0.o3m()) {
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
    background = background === VOID ? Companion_getInstance().k42_1 : background;
    this.l5g_1 = textForegroundStyle;
    this.m5g_1 = brushSize;
    this.n5g_1 = fontSize;
    this.o5g_1 = fontWeight;
    this.p5g_1 = fontStyle;
    this.q5g_1 = fontSynthesis;
    this.r5g_1 = fontFamily;
    this.s5g_1 = fontFeatureSettings;
    this.t5g_1 = letterSpacing;
    this.u5g_1 = baselineShift;
    this.v5g_1 = textGeometricTransform;
    this.w5g_1 = localeList;
    this.x5g_1 = background;
    this.y5g_1 = textDecoration;
    this.z5g_1 = shadow;
    this.a5h_1 = drawStyle;
    this.b5h_1 = blendMode;
  }
  protoOf(ComputedStyle).c5h = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.l5g_1.m42();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
      res.d3m(toArgb(this.l5g_1.m42()));
    }
    var foreground = toTextPaint(this);
    if (!(foreground == null)) {
      res.x3u(foreground);
    }
    var tmp0_safe_receiver = this.p5g_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).s4u_1;
      res.d3v(toSkFontStyle(it));
    }
    var tmp1_safe_receiver = this.y5g_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.b3v(toSkDecorationStyle(tmp1_safe_receiver, this.l5g_1.m42()));
    }
    if (!equals(this.x5g_1, Companion_getInstance().k42_1)) {
      // Inline function 'kotlin.also' call
      var this_1 = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      this_1.d3m(toArgb(this.x5g_1));
      res.z3u(this_1);
    }
    var tmp2_safe_receiver = this.o5g_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.d3v(res.t3p().b3k(tmp2_safe_receiver.d4v_1));
    }
    var tmp3_safe_receiver = this.z5g_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.f3v(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.t5g_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.k3v(tmp4_safe_receiver);
    }
    var tmp_1 = Companion_getInstance_11();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.s5g_1;
    var tmp$ret$8 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.h3v(tmp_1.w3i(tmp$ret$8));
    res.e3u(this.n5g_1);
    var tmp5_safe_receiver = this.r5g_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.o5g_1;
      var tmp_2 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_23().j4w_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.p5g_1;
      var tmp_3;
      var tmp_4 = tmp1_elvis_lhs;
      if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
        tmp_3 = Companion_getInstance_21().t4w_1;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_5 = tmp_3;
      var tmp2_elvis_lhs = this.q5g_1;
      var tmp_6;
      var tmp_7 = tmp2_elvis_lhs;
      if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
        tmp_6 = Companion_getInstance_22().v4w_1;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var tmp_8 = fontFamilyResolver.y52(tmp5_safe_receiver, tmp_2, tmp_5, tmp_6).u2();
      var resolved = tmp_8 instanceof FontLoadResult ? tmp_8 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = resolved.b5g_1;
      var tmp$ret$9 = copyToArray(this_2);
      res.i3v(tmp$ret$9);
    }
    var tmp6_safe_receiver = this.u5g_1;
    var tmp_9 = tmp6_safe_receiver;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_10 = tmp6_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it_0 = (tmp_10 == null ? null : new BaselineShift(tmp_10)).u4u_1;
      var fontMetrics = res.o3v();
      res.m3v(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.e3j_1);
    }
    return res;
  };
  protoOf(ComputedStyle).d5h = function (density, other) {
    var fontSize = fontSizeInHierarchy(density, this.n5g_1, other.c4u_1);
    this.l5g_1 = this.l5g_1.u4v(other.b4u_1);
    var tmp0_safe_receiver = other.g4u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.r5g_1 = tmp0_safe_receiver;
    }
    this.n5g_1 = fontSize;
    var tmp1_safe_receiver = other.d4u_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.o5g_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.e4u_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.p5g_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).s4u_1;
    }
    var tmp3_safe_receiver = other.f4u_1;
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.q5g_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).t4u_1;
    }
    var tmp4_safe_receiver = other.h4u_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.s5g_1 = tmp4_safe_receiver;
    }
    if (!get_isUnspecified(other.i4u_1)) {
      var tmp_3 = this;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      var $this$with = other.i4u_1;
      var tmp_4;
      if (_TextUnit___get_isEm__impl__esrmtl($this$with)) {
        tmp_4 = fontSize * _TextUnit___get_value__impl__hpbx0k($this$with);
      } else if (_TextUnit___get_isSp__impl__8c3r6q($this$with)) {
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>.<anonymous>' call
        tmp_4 = density.l3b($this$with);
      } else {
        throw UnsupportedOperationException_init_$Create$_0();
      }
      tmp_3.t5g_1 = tmp_4;
    }
    var tmp5_safe_receiver = other.j4u_1;
    var tmp_5 = tmp5_safe_receiver;
    if ((tmp_5 == null ? null : new BaselineShift(tmp_5)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_6 = tmp5_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      this.u5g_1 = (tmp_6 == null ? null : new BaselineShift(tmp_6)).u4u_1;
    }
    var tmp6_safe_receiver = other.k4u_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.v5g_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.l4u_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.w5g_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = other.m4u_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
      this.x5g_1 = other.m4u_1;
    }
    var tmp8_safe_receiver = other.n4u_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.y5g_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.o4u_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.z5g_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.q4u_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.a5h_1 = tmp10_safe_receiver;
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = this.l5g_1;
    var tmp_0 = this.m5g_1;
    var tmp_1 = this.n5g_1;
    var tmp_2 = this.o5g_1;
    var tmp_3 = this.p5g_1;
    var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
    var tmp_5 = this.q5g_1;
    var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
    var tmp_7 = this.r5g_1;
    var tmp_8 = this.s5g_1;
    var tmp_9 = this.t5g_1;
    var tmp_10 = this.u5g_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + new Size_0(tmp_0) + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + (tmp_10 == null ? null : new BaselineShift(tmp_10)) + ', textGeometricTransform=' + this.v5g_1 + ', localeList=' + this.w5g_1 + ', background=' + new Color(this.x5g_1) + ', textDecoration=' + this.y5g_1 + ', shadow=' + this.z5g_1 + ', drawStyle=' + this.a5h_1 + ', blendMode=' + new BlendMode(this.b5h_1) + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.l5g_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.m5g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n5g_1) | 0;
    result = imul(result, 31) + (this.o5g_1 == null ? 0 : this.o5g_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.p5g_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.p5g_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.q5g_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.q5g_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.r5g_1 == null ? 0 : hashCode(this.r5g_1)) | 0;
    result = imul(result, 31) + (this.s5g_1 == null ? 0 : getStringHashCode(this.s5g_1)) | 0;
    result = imul(result, 31) + (this.t5g_1 == null ? 0 : getNumberHashCode(this.t5g_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.u5g_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.u5g_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.v5g_1 == null ? 0 : this.v5g_1.hashCode()) | 0;
    result = imul(result, 31) + (this.w5g_1 == null ? 0 : this.w5g_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.x5g_1) | 0;
    result = imul(result, 31) + (this.y5g_1 == null ? 0 : this.y5g_1.hashCode()) | 0;
    result = imul(result, 31) + (this.z5g_1 == null ? 0 : this.z5g_1.hashCode()) | 0;
    result = imul(result, 31) + (this.a5h_1 == null ? 0 : hashCode(this.a5h_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.b5h_1) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.l5g_1, tmp0_other_with_cast.l5g_1))
      return false;
    if (!equals(this.m5g_1, tmp0_other_with_cast.m5g_1))
      return false;
    if (!equals(this.n5g_1, tmp0_other_with_cast.n5g_1))
      return false;
    if (!equals(this.o5g_1, tmp0_other_with_cast.o5g_1))
      return false;
    var tmp = this.p5g_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.p5g_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.q5g_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.q5g_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.r5g_1, tmp0_other_with_cast.r5g_1))
      return false;
    if (!(this.s5g_1 == tmp0_other_with_cast.s5g_1))
      return false;
    if (!equals(this.t5g_1, tmp0_other_with_cast.t5g_1))
      return false;
    var tmp_5 = this.u5g_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.u5g_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.v5g_1, tmp0_other_with_cast.v5g_1))
      return false;
    if (!equals(this.w5g_1, tmp0_other_with_cast.w5g_1))
      return false;
    if (!equals(this.x5g_1, tmp0_other_with_cast.x5g_1))
      return false;
    if (!equals(this.y5g_1, tmp0_other_with_cast.y5g_1))
      return false;
    if (!equals(this.z5g_1, tmp0_other_with_cast.z5g_1))
      return false;
    if (!equals(this.a5h_1, tmp0_other_with_cast.a5h_1))
      return false;
    if (!(this.b5h_1 === tmp0_other_with_cast.b5h_1))
      return false;
    return true;
  };
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return _this__u8e3s4 === Companion_getInstance_21().u4w_1 ? Companion_getInstance_12().y3j_1 : Companion_getInstance_12().w3j_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var underline = _this__u8e3s4.a5c(Companion_getInstance_38().i4x_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.a5c(Companion_getInstance_38().j4x_1);
    var gaps = false;
    var lineStyle = DecorationLineStyle_SOLID_getInstance();
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new Shadow_0(toArgb(_this__u8e3s4.s4a_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.t4a_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.t4a_1), _this__u8e3s4.u4a_1);
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
      tmp = density.l3b(other);
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
    switch (_this__u8e3s4.s3u().j9_1) {
      case 1:
        tmp = opposite ? _this__u8e3s4.q3u_1.k3f_1 : _this__u8e3s4.q3u_1.m3f_1;
        break;
      case 0:
        tmp = opposite ? _this__u8e3s4.q3u_1.m3f_1 : _this__u8e3s4.q3u_1.k3f_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.e5h_1 = position;
    this.f5h_1 = style;
    this.g5h_1 = 8;
  }
  protoOf(StyleAdd).h5h = function () {
    return this.e5h_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.e5h_1 + ', style=' + this.f5h_1 + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.e5h_1;
    result = imul(result, 31) + this.f5h_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.e5h_1 === tmp0_other_with_cast.e5h_1))
      return false;
    if (!this.f5h_1.equals(tmp0_other_with_cast.f5h_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.i5h_1 = cut;
    this.j5h_1 = width;
    this.k5h_1 = height;
    this.l5h_1 = position$factory(this.i5h_1);
    this.m5h_1 = 8;
  }
  protoOf(PutPlaceholder).h5h = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.l5h_1;
    position$factory_0();
    return this_0.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.i5h_1 + ', width=' + this.j5h_1 + ', height=' + this.k5h_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.i5h_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.j5h_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k5h_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.i5h_1.equals(tmp0_other_with_cast.i5h_1))
      return false;
    if (!equals(this.j5h_1, tmp0_other_with_cast.j5h_1))
      return false;
    if (!equals(this.k5h_1, tmp0_other_with_cast.k5h_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.n5h_1 = cut;
    this.o5h_1 = position$factory_1(this.n5h_1);
    this.p5h_1 = 8;
  }
  protoOf(EndPlaceholder).h5h = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.o5h_1;
    position$factory_2();
    return this_0.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.n5h_1 + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.n5h_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.n5h_1.equals(tmp0_other_with_cast.n5h_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.q5h_1 = position;
    this.r5h_1 = style;
    this.s5h_1 = 0;
  }
  protoOf(StyleAdd_0).h5h = function () {
    return this.q5h_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.q5h_1 + ', style=' + this.r5h_1 + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.q5h_1;
    result = imul(result, 31) + this.r5h_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.q5h_1 === tmp0_other_with_cast.q5h_1))
      return false;
    if (!this.r5h_1.equals(tmp0_other_with_cast.r5h_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.t5h_1 = position;
    this.u5h_1 = style;
    this.v5h_1 = 0;
  }
  protoOf(StyleRemove).h5h = function () {
    return this.t5h_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.t5h_1 + ', style=' + this.u5h_1 + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.t5h_1;
    result = imul(result, 31) + this.u5h_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.t5h_1 === tmp0_other_with_cast.t5h_1))
      return false;
    if (!this.u5h_1.equals(tmp0_other_with_cast.u5h_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.w5h_1 = position;
    this.x5h_1 = placeholder;
    this.y5h_1 = 0;
  }
  protoOf(PutPlaceholder_0).h5h = function () {
    return this.w5h_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.w5h_1 + ', placeholder=' + this.x5h_1 + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.w5h_1;
    result = imul(result, 31) + this.x5h_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.w5h_1 === tmp0_other_with_cast.w5h_1))
      return false;
    if (!this.x5h_1.equals(tmp0_other_with_cast.x5h_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.z5h_1 = position;
    this.a5i_1 = 0;
  }
  protoOf(EndPlaceholder_0).h5h = function () {
    return this.z5h_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.z5h_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.z5h_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.z5h_1 === tmp0_other_with_cast.z5h_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.u5f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_defaultStyle__bt02u3($this) {
    var tmp = $this.v5f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('defaultStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.x5f_1;
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
    var tmp0_iterator = spans.v();
    while (tmp0_iterator.w()) {
      var span = tmp0_iterator.y();
      cuts.s(new StyleAdd_0(span.u4o_1, span.t4o_1));
      cuts.s(new StyleRemove(span.v4o_1, span.t4o_1));
    }
    var tmp1_iterator = placeholders.v();
    while (tmp1_iterator.w()) {
      var placeholder = tmp1_iterator.y();
      cuts.s(new PutPlaceholder_0(placeholder.u4o_1, placeholder.t4o_1));
      cuts.s(new EndPlaceholder_0(placeholder.v4o_1));
    }
    var ops = mutableListOf([new StyleAdd(0, _get_defaultStyle__bt02u3($this))]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.n() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.v();
    while (tmp2_iterator.w()) {
      var cut = tmp2_iterator.y();
      if (cut instanceof StyleAdd_0) {
        activeStyles.s(cut.r5h_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.h5h(), ops);
        if (prev == null) {
          var tmp_0 = cut.h5h();
          // Inline function 'kotlin.also' call
          var this_0 = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          this_0.d5h($this.q5f_1, cut.r5h_1);
          ops.s(new StyleAdd(tmp_0, this_0));
        } else {
          prev.f5h_1.d5h($this.q5f_1, cut.r5h_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.t(cut.u5h_1);
          ops.s(new StyleAdd(cut.h5h(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, fontSizeInHierarchy($this.q5f_1, currentStyle.n5g_1, cut.x5h_1.m4t_1), fontSizeInHierarchy($this.q5f_1, currentStyle.n5g_1, cut.x5h_1.n4t_1));
            ops.s(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.s(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.q5f_1, activeStyles.i1(0), $this.l5f_1, $this.t5f_1);
    var inductionVariable = 1;
    var last = activeStyles.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.d5h($this.q5f_1, activeStyles.i1(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).v();
    while (tmp0_iterator.w()) {
      var prevOp = tmp0_iterator.y();
      if (prevOp.h5h() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.m3t(makeSkTextStyle($this, computedStyle));
    var tmp0_safe_receiver = style.o4z();
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new TextAlign(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new TextAlign(tmp_0)).f4t_1;
      pStyle.o3t(toSkAlignment(it));
    }
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = style.q4z();
    if (!get_isUnspecified(this_0)) {
      var strutStyle = StrutStyle_init_$Create$();
      strutStyle.j3u(true);
      strutStyle.n3u(true);
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      var fontSize = $this.q5f_1.l3b(orDefaultFontSize(style.a4z()));
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      var $this$with = style.q4z();
      var tmp_1;
      if (_TextUnit___get_isSp__impl__8c3r6q($this$with)) {
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>.<anonymous>' call
        tmp_1 = $this.q5f_1.l3b($this$with);
      } else if (_TextUnit___get_isEm__impl__esrmtl($this$with)) {
        tmp_1 = fontSize * _TextUnit___get_value__impl__hpbx0k($this$with);
      } else {
        var message = 'Unexpected size in textStyleToParagraphStyle';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var lineHeight = tmp_1;
      strutStyle.h3u(lineHeight / fontSize);
      strutStyle.e3u(fontSize);
      pStyle.k3t(strutStyle);
    }
    pStyle.n3t(toSkDirection($this.r5f_1));
    var tmp1_safe_receiver = $this.k5f_1.r4z();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with_0 = $this.q5f_1;
      pStyle.r3t(new TextIndent($this$with_0.l3b(tmp1_safe_receiver.a4v_1), $this$with_0.l3b(tmp1_safe_receiver.b4v_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.j5c(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.b5i_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).z8 = function (a, b) {
    return this.b5i_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.z8(a, b);
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp = a.h5h();
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp$ret$1 = b.h5h();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.c5h(this$0.i5f_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.k5f_1.e4z();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.defaultFont$delegate.<anonymous>.<anonymous>' call
        var tmp0_elvis_lhs = this$0.k5f_1.b4z();
        var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_23().j4w_1 : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = this$0.k5f_1.c4z();
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs;
        if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_21().t4w_1;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        var tmp_3 = tmp_1;
        var tmp2_elvis_lhs = this$0.k5f_1.d4z();
        var tmp_4;
        var tmp_5 = tmp2_elvis_lhs;
        if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_22().w4w_1;
        } else {
          tmp_4 = tmp2_elvis_lhs;
        }
        var tmp_6 = this$0.i5f_1.y52(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).u2();
        tmp = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
      }
      var loadResult = tmp;
      return Font_init_$Create$(loadResult == null ? null : loadResult.a5g_1, _get_defaultStyle__bt02u3(this$0).n5g_1);
    };
  }
  function ParagraphBuilder$defaultHeight$delegate$lambda(this$0) {
    return function () {
      return this$0.p5e().k3i().l39();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_7().k3a_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? IntCompanionObject_instance.MAX_VALUE : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().g49_1 : blendMode;
    this.i5f_1 = fontFamilyResolver;
    this.j5f_1 = text;
    this.k5f_1 = textStyle;
    this.l5f_1 = brushSize;
    this.m5f_1 = ellipsis;
    this.n5f_1 = maxLines;
    this.o5f_1 = spanStyles;
    this.p5f_1 = placeholders;
    this.q5f_1 = density;
    this.r5f_1 = textDirection;
    this.s5f_1 = drawStyle;
    this.t5f_1 = blendMode;
    var tmp = this;
    tmp.y5f_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.z5f_1 = lazy_0(ParagraphBuilder$defaultHeight$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).q5e = function () {
    var tmp = this.w5f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('paragraphStyle');
    }
  };
  protoOf(ParagraphBuilder_0).v24 = function () {
    this.u5f_1 = copyWithDefaultFontSize(this.k5f_1.s4y(), this.s5f_1);
    this.v5f_1 = ComputedStyle_init_$Create$(this.q5f_1, _get_initialStyle__6to25e(this), this.l5f_1, this.t5f_1);
    this.x5f_1 = makeOps(this, this.o5f_1, this.p5f_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.k5f_1, _get_defaultStyle__bt02u3(this));
    this.w5f_1 = ps;
    if (!(this.n5f_1 === IntCompanionObject_instance.MAX_VALUE)) {
      ps.p3t(this.n5f_1);
      ps.q3t(this.m5f_1);
    }
    var tmp = this.i5f_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).o52_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.b5f();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + platformFontLoader);
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).v();
    while (tmp1_iterator.w()) {
      var op = tmp1_iterator.y();
      if (addText ? pos < op.h5h() : false) {
        pb.y3s(toString(charSequenceSubSequence(this.j5f_1, pos, op.h5h())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.f5h_1.r5g_1;
        var tmp3_elvis_lhs = op.f5h_1.o5g_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_23().j4w_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.f5h_1.p5g_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_21().t4w_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.f5h_1.q5g_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_22().w4w_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.i5f_1.y52(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.x3s(makeSkTextStyle(this, op.f5h_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.j5h_1, op.k5h_1, toSkPlaceholderAlignment(op.i5h_1.x5h_1.o4t_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.z3s(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.h5h();
    }
    if (addText ? pos < this.j5f_1.length : false) {
      pb.y3s(toString(charSequenceSubSequence(this.j5f_1, pos, this.j5f_1.length)));
    }
    return pb.v24();
  };
  protoOf(ParagraphBuilder_0).p5e = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.y5f_1;
    defaultFont$factory();
    return this_0.u2();
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var fontSize = orDefaultFontSize(_this__u8e3s4.c4u_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.i4u_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.i4u_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.i4u_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.r4v(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_13().p4t_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().t4t_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().u4t_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().v4t_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().q4t_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().r4t_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().s4t_1) {
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
    if (_this__u8e3s4 === Companion_getInstance_37().r4s_1) {
      tmp = Alignment_LEFT_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_37().s4s_1) {
      tmp = Alignment_RIGHT_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_37().t4s_1) {
      tmp = Alignment_CENTER_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_37().u4s_1) {
      tmp = Alignment_JUSTIFY_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_37().v4s_1) {
      tmp = Alignment_START_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_37().w4s_1) {
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
    switch (_this__u8e3s4.j9_1) {
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
      return $b0.w5h_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.h5h();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.z5h_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.h5h();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.p5e();
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
  function newLayouter($this) {
    return new ParagraphLayouter($this.u5d_1, $this.a5e_1, $this.v5d_1, $this.w5d_1, $this.x5d_1, $this.y5d_1, $this.z5d_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.u5d_1 = text;
    this.v5d_1 = style;
    this.w5d_1 = spanStyles;
    this.x5d_1 = placeholders;
    this.y5d_1 = density;
    this.z5d_1 = fontFamilyResolver;
    this.a5e_1 = resolveTextDirection_1(this.u5d_1, this.v5d_1.p4z(), this.v5d_1.j4z());
    this.b5e_1 = newLayouter(this);
    this.c5e_1 = 0.0;
    this.d5e_1 = 0.0;
    var tmp = ensureNotNull(this.b5e_1);
    var para = tmp.t5e(Infinity);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.h3s();
    tmp_0.c5e_1 = Math.ceil(x);
    var tmp_1 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.i3s();
    tmp_1.d5e_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).r5e = function () {
    var tmp0_elvis_lhs = this.b5e_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.b5e_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).h3s = function () {
    return this.c5e_1;
  };
  protoOf(SkiaParagraphIntrinsics).i3s = function () {
    return this.d5e_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_39().a50_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_39().y4z_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_39().z4z_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_39().a50_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_39().b50_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_39().c50_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_44().h5c_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_44().i5c_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_instance_20.z1v() : locale).j4v_1)) {
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
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    var tmp_0;
    var tmp_1;
    if (brush instanceof SolidColor) {
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      var this_0 = brush.q42_1;
      tmp_1 = !equals(_Color___get_value__impl__1pls5m(this_0), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_2;
      if (brush instanceof ShaderBrush) {
        // Inline function 'androidx.compose.ui.geometry.isSpecified' call
        tmp_2 = !_Size___get_packedValue__impl__7rlt1o(size).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_7().k3a_1));
      } else {
        tmp_2 = false;
      }
      tmp_0 = tmp_2;
    }
    if (tmp_0) {
      brush.t41(size, _this__u8e3s4, isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
    } else {
      if (brush == null) {
        _this__u8e3s4.k3m(null);
      }
    }
  }
  function applyDrawStyle(_this__u8e3s4, drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) ? true : drawStyle == null) {
      _this__u8e3s4.l4e(Companion_getInstance_10().p49_1);
    } else {
      if (drawStyle instanceof Stroke) {
        _this__u8e3s4.l4e(Companion_getInstance_10().q49_1);
        _this__u8e3s4.f3m(drawStyle.m4e_1);
        _this__u8e3s4.t4e(drawStyle.n4e_1);
        _this__u8e3s4.v4e(drawStyle.p4e_1);
        _this__u8e3s4.r4e(drawStyle.o4e_1);
        _this__u8e3s4.x4e(drawStyle.q4e_1);
      }
    }
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function Companion_33() {
    Companion_instance_34 = this;
    this.x4s_1 = _LineBreak___init__impl__o5i11q(1);
    this.y4s_1 = _LineBreak___init__impl__o5i11q(2);
    this.z4s_1 = _LineBreak___init__impl__o5i11q(3);
  }
  var Companion_instance_34;
  function Companion_getInstance_47() {
    if (Companion_instance_34 == null)
      new Companion_33();
    return Companion_instance_34;
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
    if (!($this === (other instanceof LineBreak ? other.h4t_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_47();
    this.h4t_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.h4t_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.h4t_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.h4t_1, other);
  };
  function Companion_34() {
    Companion_instance_35 = this;
    this.k4t_1 = new TextMotion();
    this.l4t_1 = new TextMotion();
  }
  var Companion_instance_35;
  function Companion_getInstance_48() {
    if (Companion_instance_35 == null)
      new Companion_34();
    return Companion_instance_35;
  }
  function TextMotion() {
    Companion_getInstance_48();
    this.c5i_1 = 0;
  }
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).z52 = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).a53 = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).b53 = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).c53 = interceptFontSynthesis;
  protoOf(Unspecified).u4v = merge;
  protoOf(Unspecified).s4w = takeOrElse;
  protoOf(BrushStyle).u4v = merge;
  protoOf(BrushStyle).s4w = takeOrElse;
  protoOf(ColorStyle).u4v = merge;
  protoOf(ColorStyle).s4w = takeOrElse;
  protoOf(SkiaParagraph).s5d = paint$default;
  protoOf(SkiaParagraph).t5d = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).q4s = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultMaxLines = 2147483647;
  DefaultCacheSize = 8;
  TextPainter_instance = new TextPainter();
  Companion_instance_11 = new Companion_10();
  Companion_instance_12 = new Companion_11();
  Companion_instance_20 = new Companion_19();
  Companion_instance_21 = new Companion_20();
  Unspecified_instance = new Unspecified();
  Companion_instance_27 = new Companion_26();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = FontSynthesis;
  _.$_$.c = createFontFamilyResolver;
  _.$_$.d = CommitTextCommand;
  _.$_$.e = DeleteAllCommand;
  _.$_$.f = DeleteSurroundingTextCommand;
  _.$_$.g = EditProcessor;
  _.$_$.h = FinishComposingTextCommand;
  _.$_$.i = ImeAction;
  _.$_$.j = ImeOptions;
  _.$_$.k = KeyboardCapitalization;
  _.$_$.l = KeyboardType;
  _.$_$.m = PasswordVisualTransformation;
  _.$_$.n = PlatformTextInputPluginRegistryImpl;
  _.$_$.o = notifyFocusedRect;
  _.$_$.p = PlatformTextInputService;
  _.$_$.q = SetSelectionCommand;
  _.$_$.r = TextFieldValue;
  _.$_$.s = TextInputService;
  _.$_$.t = TransformedText;
  _.$_$.u = getSelectedText;
  _.$_$.v = getTextAfterSelection;
  _.$_$.w = getTextBeforeSelection;
  _.$_$.x = FontLoader;
  _.$_$.y = TextAlign;
  _.$_$.z = TextOverflow;
  _.$_$.a1 = MultiParagraphIntrinsics;
  _.$_$.b1 = MultiParagraph;
  _.$_$.c1 = ParagraphIntrinsics_0;
  _.$_$.d1 = Paragraph;
  _.$_$.e1 = Paragraph_0;
  _.$_$.f1 = TextLayoutResult;
  _.$_$.g1 = TextRange_1;
  _.$_$.h1 = TextRange_0;
  _.$_$.i1 = TextRange;
  _.$_$.j1 = lerp_6;
  _.$_$.k1 = resolveDefaults;
  _.$_$.l1 = ResolvedTextDirection_Rtl_getInstance;
  _.$_$.m1 = CommitTextCommand_init_$Create$;
  _.$_$.n1 = TextFieldValue_init_$Create$;
  _.$_$.o1 = AnnotatedString_init_$Create$;
  _.$_$.p1 = Builder_init_$Create$;
  _.$_$.q1 = SpanStyle_init_$Create$;
  _.$_$.r1 = TextLayoutInput_init_$Create$;
  _.$_$.s1 = TextStyle_init_$Create$_1;
  _.$_$.t1 = ImeAction__hashCode_impl_m1mrob;
  _.$_$.u1 = KeyboardCapitalization__hashCode_impl_6ibuz5;
  _.$_$.v1 = KeyboardType__hashCode_impl_mw6m33;
  _.$_$.w1 = _TextOverflow___init__impl__obguoe;
  _.$_$.x1 = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.y1 = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.z1 = _TextRange___get_collapsed__impl__cilesp;
  _.$_$.a2 = _TextRange___get_end__impl__gcdxpp;
  _.$_$.b2 = _TextRange___get_length__impl__7qes3a;
  _.$_$.c2 = _TextRange___get_max__impl__owm8m;
  _.$_$.d2 = _TextRange___get_min__impl__uu95c4;
  _.$_$.e2 = _TextRange___get_reversed__impl__emhnbm;
  _.$_$.f2 = _TextRange___get_start__impl__ww4t90;
  _.$_$.g2 = Companion_getInstance_17;
  _.$_$.h2 = Companion_getInstance_21;
  _.$_$.i2 = Companion_getInstance_22;
  _.$_$.j2 = Companion_getInstance_23;
  _.$_$.k2 = Companion_getInstance_26;
  _.$_$.l2 = Companion_getInstance_27;
  _.$_$.m2 = Companion_getInstance_28;
  _.$_$.n2 = Companion_getInstance_29;
  _.$_$.o2 = Companion_getInstance_30;
  _.$_$.p2 = Companion_getInstance_32;
  _.$_$.q2 = Companion_getInstance_37;
  _.$_$.r2 = Companion_getInstance_38;
  _.$_$.s2 = Companion_getInstance_43;
  _.$_$.t2 = TextPainter_instance;
  _.$_$.u2 = Companion_getInstance_14;
  _.$_$.v2 = Companion_getInstance_15;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-text.js.map
