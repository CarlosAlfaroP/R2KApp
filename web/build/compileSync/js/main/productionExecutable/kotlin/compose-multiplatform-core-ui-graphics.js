(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui-util.js', './compose-multiplatform-core-ui-unit.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui-util.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    root['compose-multiplatform-core-ui-graphics'] = factory(typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-graphics'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui-util'], this['compose-multiplatform-core-ui-unit'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.r9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var classMeta = kotlin_kotlin.$_$.p8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var equals = kotlin_kotlin.$_$.t8;
  var VOID = kotlin_kotlin.$_$.d;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var hashCode = kotlin_kotlin.$_$.c9;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var get_isFinite = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var getNumberHashCode = kotlin_kotlin.$_$.y8;
  var get_isSpecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var isFinite = kotlin_kotlin.$_$.kd;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var Long = kotlin_kotlin.$_$.rc;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.n2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.o2;
  var ulongToDouble = kotlin_kotlin.$_$.fe;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.p2;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var numberToInt = kotlin_kotlin.$_$.n9;
  var toLong = kotlin_kotlin.$_$.t9;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var toRawBits = kotlin_kotlin.$_$.ae;
  var toShort = kotlin_kotlin.$_$.u9;
  var floatFromBits = kotlin_kotlin.$_$.v8;
  var trimIndent = kotlin_kotlin.$_$.ec;
  var get_PI = kotlin_kotlin.$_$.w9;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qd;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r1;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var charSequenceLength = kotlin_kotlin.$_$.n8;
  var toBits = kotlin_kotlin.$_$.yd;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getStringHashCode = kotlin_kotlin.$_$.b9;
  var withSign = kotlin_kotlin.$_$.fa;
  var compareTo = kotlin_kotlin.$_$.q8;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var coerceIn = kotlin_kotlin.$_$.na;
  var arrayCopy = kotlin_kotlin.$_$.z3;
  var coerceIn_0 = kotlin_kotlin.$_$.ma;
  var contentEquals = kotlin_kotlin.$_$.j4;
  var contentHashCode = kotlin_kotlin.$_$.l4;
  var isNaN_0 = kotlin_kotlin.$_$.nd;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q1;
  var CornerRadius_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var roundToInt = kotlin_kotlin.$_$.ba;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var IntOffset__hashCode_impl_w5rrxs = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var longArrayOf = kotlin_kotlin.$_$.i9;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.q2;
  var charSequenceGet = kotlin_kotlin.$_$.m8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.b2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.d2;
  var numberToChar = kotlin_kotlin.$_$.m9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.f2;
  var ulongCompare = kotlin_kotlin.$_$.ee;
  var toDouble = kotlin_kotlin.$_$.zb;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.r2;
  var countLeadingZeroBits = kotlin_kotlin.$_$.fd;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.u2;
  var doubleFromBits = kotlin_kotlin.$_$.s8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var getBooleanHashCode = kotlin_kotlin.$_$.w8;
  var toString_0 = kotlin_kotlin.$_$.g2;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.c2;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.q8;
  var Companion_instance = kotlin_org_jetbrains_skiko_skiko.$_$.x7;
  var Companion_instance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.s7;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.r8;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.n8;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.m8;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c7;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.e7;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.f7;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.u7;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.v7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.z1;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.g7;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.l7;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.l8;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.p8;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.b7;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.n7;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.m7;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.t7;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.y7;
  var toFloatArray = kotlin_kotlin.$_$.y6;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.o8;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BlendMode, 'BlendMode', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Brush, 'Brush', classMeta);
  setMetadataFor(ShaderBrush, 'ShaderBrush', classMeta, Brush);
  setMetadataFor(SolidColor, 'SolidColor', classMeta, Brush);
  setMetadataFor(LinearGradient, 'LinearGradient', classMeta, ShaderBrush);
  setMetadataFor(RadialGradient, 'RadialGradient', classMeta, ShaderBrush);
  setMetadataFor(SweepGradient, 'SweepGradient', classMeta, ShaderBrush);
  function clipRect(rect, clipOp) {
    return this.y43(rect.f39_1, rect.g39_1, rect.h39_1, rect.i39_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_13().b44_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.x43(rect, clipOp);
      tmp = Unit_instance;
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_13().b44_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.c44(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.c44.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.g44(rect.f39_1, rect.g39_1, rect.h39_1, rect.i39_1, paint);
  }
  setMetadataFor(Canvas, 'Canvas', interfaceMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ClipOp, 'ClipOp', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Color, 'Color', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FilterQuality, 'FilterQuality', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(ImageBitmapConfig, 'ImageBitmapConfig', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Matrix, 'Matrix', classMeta);
  setMetadataFor(Outline, 'Outline', classMeta);
  setMetadataFor(Rectangle, 'Rectangle', classMeta, Outline);
  setMetadataFor(Rounded, 'Rounded', classMeta, Outline);
  setMetadataFor(Generic, 'Generic', classMeta, Outline);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance_0().z38_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.c4a(path, offset);
      tmp = Unit_instance;
    } else {
      tmp = $super.c4a.call(this, path, new Offset_0(offset));
    }
    return tmp;
  }
  function rewind() {
    this.m2b();
  }
  setMetadataFor(Path, 'Path', interfaceMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PathFillType, 'PathFillType', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(RectangleShape$1, VOID, classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta, VOID, VOID, Shadow);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(StrokeCap, 'StrokeCap', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(StrokeJoin, 'StrokeJoin', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(TileMode, 'TileMode', classMeta);
  setMetadataFor(Adaptation, 'Adaptation', classMeta);
  setMetadataFor(Adaptation$Companion$Bradford$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$VonKries$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$Ciecat02$1, VOID, classMeta, Adaptation);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(ColorModel, 'ColorModel', classMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(ColorSpaces, 'ColorSpaces', objectMeta);
  setMetadataFor(Connector, 'Connector', classMeta);
  setMetadataFor(Connector$Companion$identity$1, VOID, classMeta, Connector);
  setMetadataFor(RgbConnector, 'RgbConnector', classMeta, Connector);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(Illuminant, 'Illuminant', objectMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Lab, 'Lab', classMeta, ColorSpace);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(Oklab, 'Oklab', classMeta, ColorSpace);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Rgb, 'Rgb', classMeta, ColorSpace);
  setMetadataFor(TransferParameters, 'TransferParameters', classMeta);
  setMetadataFor(WhitePoint, 'WhitePoint', classMeta);
  setMetadataFor(Xyz, 'Xyz', classMeta, ColorSpace);
  setMetadataFor(DrawParams, 'DrawParams', classMeta, VOID, VOID, DrawParams);
  setMetadataFor(CanvasDrawScope$drawContext$1, VOID, classMeta);
  function get_center_0() {
    return get_center(this.p4f().m39());
  }
  function get_size() {
    return this.p4f().m39();
  }
  function drawLine$default(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode, $super) {
    strokeWidth = strokeWidth === VOID ? 0.0 : strokeWidth;
    cap = cap === VOID ? Companion_getInstance_36().i4g_1 : cap;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    alpha = alpha === VOID ? 1.0 : alpha;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.q4f(brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.q4f.call(this, brush, new Offset_0(start), new Offset_0(end), strokeWidth, new StrokeCap(cap), pathEffect, alpha, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().z38_1 : topLeft;
    size = size === VOID ? offsetSize(this.m39(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.o49(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.o49.call(this, brush, new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().z38_1 : topLeft;
    size = size === VOID ? offsetSize(this.m39(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.l49(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.l49.call(this, new Color(color), new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.v4f(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().g3c_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.k39(), image.l39()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().g3c_1 : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().h49_1 : filterQuality;
    var tmp;
    if ($super === VOID) {
      this.u4f(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_instance;
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().z38_1 : topLeft;
    size = size === VOID ? offsetSize(this.m39(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().r38_1 : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.n49(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.n49.call(this, brush, new Offset_0(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.m39()) / 2.0 : radius;
    center = center === VOID ? this.t39() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.x4f(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.x4f.call(this, new Color(color), radius, new Offset_0(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.j49(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.j49.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.m49(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.m49.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  setMetadataFor(DrawScope, 'DrawScope', interfaceMeta, VOID, [Density_0]);
  setMetadataFor(CanvasDrawScope, 'CanvasDrawScope', classMeta, VOID, [DrawScope], CanvasDrawScope);
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_13().b44_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.c44(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.c44.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  setMetadataFor(DrawTransform, 'DrawTransform', interfaceMeta);
  setMetadataFor(asDrawTransform$1, VOID, classMeta, VOID, [DrawTransform]);
  setMetadataFor(DrawStyle, 'DrawStyle', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(Fill, 'Fill', objectMeta, DrawStyle);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(Stroke, 'Stroke', classMeta, DrawStyle, VOID, Stroke);
  setMetadataFor(EmptyCanvas, 'EmptyCanvas', classMeta, VOID, [Canvas], EmptyCanvas);
  setMetadataFor(Painter, 'Painter', classMeta);
  setMetadataFor(BitmapPainter, 'BitmapPainter', classMeta, Painter);
  setMetadataFor(FloatResult, 'FloatResult', classMeta, VOID, VOID, FloatResult);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(PathBuilder, 'PathBuilder', classMeta, VOID, VOID, PathBuilder);
  setMetadataFor(PathNode, 'PathNode', classMeta);
  setMetadataFor(Close, 'Close', objectMeta, PathNode);
  setMetadataFor(RelativeMoveTo, 'RelativeMoveTo', classMeta, PathNode);
  setMetadataFor(MoveTo, 'MoveTo', classMeta, PathNode);
  setMetadataFor(RelativeLineTo, 'RelativeLineTo', classMeta, PathNode);
  setMetadataFor(LineTo, 'LineTo', classMeta, PathNode);
  setMetadataFor(RelativeHorizontalTo, 'RelativeHorizontalTo', classMeta, PathNode);
  setMetadataFor(HorizontalTo, 'HorizontalTo', classMeta, PathNode);
  setMetadataFor(RelativeVerticalTo, 'RelativeVerticalTo', classMeta, PathNode);
  setMetadataFor(VerticalTo, 'VerticalTo', classMeta, PathNode);
  setMetadataFor(RelativeCurveTo, 'RelativeCurveTo', classMeta, PathNode);
  setMetadataFor(CurveTo, 'CurveTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveCurveTo, 'RelativeReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(ReflectiveCurveTo, 'ReflectiveCurveTo', classMeta, PathNode);
  setMetadataFor(RelativeQuadTo, 'RelativeQuadTo', classMeta, PathNode);
  setMetadataFor(QuadTo, 'QuadTo', classMeta, PathNode);
  setMetadataFor(RelativeReflectiveQuadTo, 'RelativeReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(ReflectiveQuadTo, 'ReflectiveQuadTo', classMeta, PathNode);
  setMetadataFor(RelativeArcTo, 'RelativeArcTo', classMeta, PathNode);
  setMetadataFor(ArcTo, 'ArcTo', classMeta, PathNode);
  setMetadataFor(PathParser, 'PathParser', classMeta, VOID, VOID, PathParser);
  setMetadataFor(SkiaBackedCanvas, 'SkiaBackedCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(SkiaBackedPaint, 'SkiaBackedPaint', classMeta, VOID, VOID, SkiaBackedPaint);
  setMetadataFor(SkiaBackedPath, 'SkiaBackedPath', classMeta, VOID, [Path], SkiaBackedPath);
  setMetadataFor(SkiaBackedPathEffect, 'SkiaBackedPathEffect', classMeta);
  setMetadataFor(SkiaBackedPathMeasure, 'SkiaBackedPathMeasure', classMeta, VOID, VOID, SkiaBackedPathMeasure);
  setMetadataFor(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap', classMeta);
  //endregion
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.k40_1 = _BlendMode___init__impl__q6jalh(0);
    this.l40_1 = _BlendMode___init__impl__q6jalh(1);
    this.m40_1 = _BlendMode___init__impl__q6jalh(2);
    this.n40_1 = _BlendMode___init__impl__q6jalh(3);
    this.o40_1 = _BlendMode___init__impl__q6jalh(4);
    this.p40_1 = _BlendMode___init__impl__q6jalh(5);
    this.q40_1 = _BlendMode___init__impl__q6jalh(6);
    this.r40_1 = _BlendMode___init__impl__q6jalh(7);
    this.s40_1 = _BlendMode___init__impl__q6jalh(8);
    this.t40_1 = _BlendMode___init__impl__q6jalh(9);
    this.u40_1 = _BlendMode___init__impl__q6jalh(10);
    this.v40_1 = _BlendMode___init__impl__q6jalh(11);
    this.w40_1 = _BlendMode___init__impl__q6jalh(12);
    this.x40_1 = _BlendMode___init__impl__q6jalh(13);
    this.y40_1 = _BlendMode___init__impl__q6jalh(14);
    this.z40_1 = _BlendMode___init__impl__q6jalh(15);
    this.a41_1 = _BlendMode___init__impl__q6jalh(16);
    this.b41_1 = _BlendMode___init__impl__q6jalh(17);
    this.c41_1 = _BlendMode___init__impl__q6jalh(18);
    this.d41_1 = _BlendMode___init__impl__q6jalh(19);
    this.e41_1 = _BlendMode___init__impl__q6jalh(20);
    this.f41_1 = _BlendMode___init__impl__q6jalh(21);
    this.g41_1 = _BlendMode___init__impl__q6jalh(22);
    this.h41_1 = _BlendMode___init__impl__q6jalh(23);
    this.i41_1 = _BlendMode___init__impl__q6jalh(24);
    this.j41_1 = _BlendMode___init__impl__q6jalh(25);
    this.k41_1 = _BlendMode___init__impl__q6jalh(26);
    this.l41_1 = _BlendMode___init__impl__q6jalh(27);
    this.m41_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance_1;
  function Companion_getInstance_11() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_11().k40_1 ? 'Clear' : $this === Companion_getInstance_11().l40_1 ? 'Src' : $this === Companion_getInstance_11().m40_1 ? 'Dst' : $this === Companion_getInstance_11().n40_1 ? 'SrcOver' : $this === Companion_getInstance_11().o40_1 ? 'DstOver' : $this === Companion_getInstance_11().p40_1 ? 'SrcIn' : $this === Companion_getInstance_11().q40_1 ? 'DstIn' : $this === Companion_getInstance_11().r40_1 ? 'SrcOut' : $this === Companion_getInstance_11().s40_1 ? 'DstOut' : $this === Companion_getInstance_11().t40_1 ? 'SrcAtop' : $this === Companion_getInstance_11().u40_1 ? 'DstAtop' : $this === Companion_getInstance_11().v40_1 ? 'Xor' : $this === Companion_getInstance_11().w40_1 ? 'Plus' : $this === Companion_getInstance_11().x40_1 ? 'Modulate' : $this === Companion_getInstance_11().y40_1 ? 'Screen' : $this === Companion_getInstance_11().z40_1 ? 'Overlay' : $this === Companion_getInstance_11().a41_1 ? 'Darken' : $this === Companion_getInstance_11().b41_1 ? 'Lighten' : $this === Companion_getInstance_11().c41_1 ? 'ColorDodge' : $this === Companion_getInstance_11().d41_1 ? 'ColorBurn' : $this === Companion_getInstance_11().e41_1 ? 'HardLight' : $this === Companion_getInstance_11().f41_1 ? 'Softlight' : $this === Companion_getInstance_11().g41_1 ? 'Difference' : $this === Companion_getInstance_11().h41_1 ? 'Exclusion' : $this === Companion_getInstance_11().i41_1 ? 'Multiply' : $this === Companion_getInstance_11().j41_1 ? 'Hue' : $this === Companion_getInstance_11().k41_1 ? 'Saturation' : $this === Companion_getInstance_11().l41_1 ? 'Color' : $this === Companion_getInstance_11().m41_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.n41_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_11();
    this.n41_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.n41_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.n41_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.n41_1, other);
  };
  function Companion_0() {
  }
  protoOf(Companion_0).o41 = function (colorStops, start, end, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].wd_1.p41_1;
        list.s(new Color(tmp$ret$0));
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.linearGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].vd_1;
        list_0.s(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new LinearGradient(tmp, list_0, start, end, tileMode);
  };
  protoOf(Companion_0).q41 = function (colorStops, center, radius, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].wd_1.p41_1;
        list.s(new Color(tmp$ret$0));
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.radialGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].vd_1;
        list_0.s(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new RadialGradient(tmp, list_0, center, radius, tileMode);
  };
  protoOf(Companion_0).r41 = function (colorStops, center) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        var tmp$ret$0 = colorStops[index].wd_1.p41_1;
        list.s(new Color(tmp$ret$0));
      }
       while (inductionVariable < size);
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.Companion.sweepGradient.<anonymous>' call
        var tmp$ret$3 = colorStops[index_0].vd_1;
        list_0.s(tmp$ret$3);
      }
       while (inductionVariable_0 < size_0);
    return new SweepGradient(center, list, list_0);
  };
  var Companion_instance_2;
  function Companion_getInstance_12() {
    return Companion_instance_2;
  }
  function Brush() {
    this.s41_1 = Companion_getInstance().k3a_1;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.v41_1 = null;
    this.w41_1 = Companion_getInstance().k3a_1;
  }
  protoOf(ShaderBrush).t41 = function (size, p, alpha) {
    var shader = this.v41_1;
    if (shader == null ? true : !equals(this.w41_1, size)) {
      if (Size__isEmpty_impl_o9ye97(size)) {
        shader = null;
        this.v41_1 = null;
        this.w41_1 = Companion_getInstance().k3a_1;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = this.x41(size);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.ShaderBrush.applyTo.<anonymous>' call
        this.v41_1 = this_0;
        shader = this_0;
        this.w41_1 = size;
      }
    }
    if (!equals(p.m42(), Companion_getInstance_14().y41_1)) {
      p.l42(Companion_getInstance_14().y41_1);
    }
    if (!equals(p.n42(), shader)) {
      p.k3m(shader);
    }
    if (!(p.y3z() === alpha)) {
      p.o42(alpha);
    }
  };
  function SolidColor(value) {
    Brush.call(this);
    this.q42_1 = value;
  }
  protoOf(SolidColor).t41 = function (size, p, alpha) {
    p.o42(get_DefaultAlpha());
    var tmp;
    if (!(alpha === get_DefaultAlpha())) {
      tmp = Color__copy$default_impl_ectz3s(this.q42_1, _Color___get_alpha__impl__wcfyv1(this.q42_1) * alpha);
    } else {
      tmp = this.q42_1;
    }
    p.l42(tmp);
    if (!(p.n42() == null)) {
      p.k3m(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.q42_1, other.q42_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.q42_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + new Color(this.q42_1) + ')';
  };
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().r42_1 : tileMode;
    ShaderBrush.call(this);
    this.y42_1 = colors;
    this.z42_1 = stops;
    this.a43_1 = start;
    this.b43_1 = end;
    this.c43_1 = tileMode;
  }
  protoOf(LinearGradient).x41 = function (size) {
    var tmp;
    var tmp_0 = _Offset___get_x__impl__xvi35n(this.a43_1);
    if (tmp_0 === Infinity) {
      tmp = _Size___get_width__impl__58y75t(size);
    } else {
      tmp = _Offset___get_x__impl__xvi35n(this.a43_1);
    }
    var startX = tmp;
    var tmp_1;
    var tmp_2 = _Offset___get_y__impl__8bzhra(this.a43_1);
    if (tmp_2 === Infinity) {
      tmp_1 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_1 = _Offset___get_y__impl__8bzhra(this.a43_1);
    }
    var startY = tmp_1;
    var tmp_3;
    var tmp_4 = _Offset___get_x__impl__xvi35n(this.b43_1);
    if (tmp_4 === Infinity) {
      tmp_3 = _Size___get_width__impl__58y75t(size);
    } else {
      tmp_3 = _Offset___get_x__impl__xvi35n(this.b43_1);
    }
    var endX = tmp_3;
    var tmp_5;
    var tmp_6 = _Offset___get_y__impl__8bzhra(this.b43_1);
    if (tmp_6 === Infinity) {
      tmp_5 = _Size___get_height__impl__a04p02(size);
    } else {
      tmp_5 = _Offset___get_y__impl__8bzhra(this.b43_1);
    }
    var endY = tmp_5;
    var tmp0_colors = this.y42_1;
    var tmp1_colorStops = this.z42_1;
    var tmp2_from = Offset(startX, startY);
    var tmp3_to = Offset(endX, endY);
    var tmp4_tileMode = this.c43_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.y42_1, other.y42_1))
      return false;
    if (!equals(this.z42_1, other.z42_1))
      return false;
    if (!equals(this.a43_1, other.a43_1))
      return false;
    if (!equals(this.b43_1, other.b43_1))
      return false;
    if (!(this.c43_1 === other.c43_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.y42_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.z42_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.a43_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.b43_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.c43_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var startValue = get_isFinite(this.a43_1) ? 'start=' + new Offset_0(this.a43_1) + ', ' : '';
    var endValue = get_isFinite(this.b43_1) ? 'end=' + new Offset_0(this.b43_1) + ', ' : '';
    return 'LinearGradient(colors=' + this.y42_1 + ', ' + ('stops=' + this.z42_1 + ', ') + startValue + endValue + ('tileMode=' + new TileMode(this.c43_1) + ')');
  };
  function RadialGradient(colors, stops, center, radius, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().r42_1 : tileMode;
    ShaderBrush.call(this);
    this.g43_1 = colors;
    this.h43_1 = stops;
    this.i43_1 = center;
    this.j43_1 = radius;
    this.k43_1 = tileMode;
  }
  protoOf(RadialGradient).x41 = function (size) {
    var centerX;
    var centerY;
    if (get_isUnspecified(this.i43_1)) {
      var drawCenter = get_center(size);
      centerX = _Offset___get_x__impl__xvi35n(drawCenter);
      centerY = _Offset___get_y__impl__8bzhra(drawCenter);
    } else {
      var tmp;
      var tmp_0 = _Offset___get_x__impl__xvi35n(this.i43_1);
      if (tmp_0 === Infinity) {
        tmp = _Size___get_width__impl__58y75t(size);
      } else {
        tmp = _Offset___get_x__impl__xvi35n(this.i43_1);
      }
      centerX = tmp;
      var tmp_1;
      var tmp_2 = _Offset___get_y__impl__8bzhra(this.i43_1);
      if (tmp_2 === Infinity) {
        tmp_1 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_1 = _Offset___get_y__impl__8bzhra(this.i43_1);
      }
      centerY = tmp_1;
    }
    var tmp0_colors = this.g43_1;
    var tmp1_colorStops = this.h43_1;
    var tmp2_center = Offset(centerX, centerY);
    var tmp_3;
    if (this.j43_1 === Infinity) {
      tmp_3 = _Size___get_minDimension__impl__4iso0r(size) / 2;
    } else {
      tmp_3 = this.j43_1;
    }
    var tmp3_radius = tmp_3;
    var tmp4_tileMode = this.k43_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(RadialGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.g43_1, other.g43_1))
      return false;
    if (!equals(this.h43_1, other.h43_1))
      return false;
    if (!equals(this.i43_1, other.i43_1))
      return false;
    if (!(this.j43_1 === other.j43_1))
      return false;
    if (!(this.k43_1 === other.k43_1))
      return false;
    return true;
  };
  protoOf(RadialGradient).hashCode = function () {
    var result = hashCode(this.g43_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.h43_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.i43_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.j43_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.k43_1) | 0;
    return result;
  };
  protoOf(RadialGradient).toString = function () {
    var centerValue = get_isSpecified(this.i43_1) ? 'center=' + new Offset_0(this.i43_1) + ', ' : '';
    var radiusValue = isFinite(this.j43_1) ? 'radius=' + this.j43_1 + ', ' : '';
    return 'RadialGradient(' + ('colors=' + this.g43_1 + ', ') + ('stops=' + this.h43_1 + ', ') + centerValue + radiusValue + ('tileMode=' + new TileMode(this.k43_1) + ')');
  };
  function SweepGradient(center, colors, stops) {
    stops = stops === VOID ? null : stops;
    ShaderBrush.call(this);
    this.o43_1 = center;
    this.p43_1 = colors;
    this.q43_1 = stops;
  }
  protoOf(SweepGradient).x41 = function (size) {
    var tmp;
    if (get_isUnspecified(this.o43_1)) {
      tmp = get_center(size);
    } else {
      var tmp_0;
      var tmp_1 = _Offset___get_x__impl__xvi35n(this.o43_1);
      if (tmp_1 === Infinity) {
        tmp_0 = _Size___get_width__impl__58y75t(size);
      } else {
        tmp_0 = _Offset___get_x__impl__xvi35n(this.o43_1);
      }
      var tmp_2 = tmp_0;
      var tmp_3;
      var tmp_4 = _Offset___get_y__impl__8bzhra(this.o43_1);
      if (tmp_4 === Infinity) {
        tmp_3 = _Size___get_height__impl__a04p02(size);
      } else {
        tmp_3 = _Offset___get_y__impl__8bzhra(this.o43_1);
      }
      tmp = Offset(tmp_2, tmp_3);
    }
    return SweepGradientShader(tmp, this.p43_1, this.q43_1);
  };
  protoOf(SweepGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.o43_1, other.o43_1))
      return false;
    if (!equals(this.p43_1, other.p43_1))
      return false;
    if (!equals(this.q43_1, other.q43_1))
      return false;
    return true;
  };
  protoOf(SweepGradient).hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.o43_1);
    result = imul(31, result) + hashCode(this.p43_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.q43_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(SweepGradient).toString = function () {
    var centerValue = get_isSpecified(this.o43_1) ? 'center=' + new Offset_0(this.o43_1) + ', ' : '';
    return 'SweepGradient(' + centerValue + ('colors=' + this.p43_1 + ', stops=' + this.q43_1 + ')');
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_1() {
    Companion_instance_3 = this;
    this.a44_1 = _ClipOp___init__impl__pqwwy8(0);
    this.b44_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_3;
  function Companion_getInstance_13() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_13().a44_1 ? 'Difference' : $this === Companion_getInstance_13().b44_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.l44_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_13();
    this.l44_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.l44_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.l44_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.l44_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var this_0 = ColorSpaces_getInstance();
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.and' call
    var this_1 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).za(_ULong___get_data__impl__fggpzb(other)));
    var id = _ULong___get_data__impl__fggpzb(this_2).db();
    return this_0.i45_1[id];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var thisColorSpace = _Color___get_colorSpace__impl__jqqozk($this);
    if (colorSpace.equals(thisColorSpace)) {
      return $this;
    }
    var connector = connect(thisColorSpace, colorSpace);
    return connector.p45(_Color___get_red__impl__cwrsk6($this), _Color___get_green__impl__bta9rs($this), _Color___get_blue__impl__xwez13($this), _Color___get_alpha__impl__wcfyv1($this));
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).za(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ya(48));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).za(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ya(48));
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).za(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp$ret$7 = _ULong___get_data__impl__fggpzb(this_6).cb();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).za(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ya(40));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).za(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ya(32));
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).za(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp$ret$7 = _ULong___get_data__impl__fggpzb(this_6).cb();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).za(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ya(32));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).za(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ya(16));
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).za(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp$ret$7 = _ULong___get_data__impl__fggpzb(this_6).cb();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var this_0 = _Color___get_value__impl__1pls5m($this);
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).za(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = _Color___get_value__impl__1pls5m($this);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ya(56));
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).za(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_3)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = _Color___get_value__impl__1pls5m($this);
      var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ya(6));
      var other_1 = _ULong___init__impl__c78o9k(new Long(1023, 0));
      // Inline function 'kotlin.ULong.toDouble' call
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).za(_ULong___get_data__impl__fggpzb(other_1)));
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(this_6)) / 1023.0;
    }
    return tmp;
  }
  function Color__component1_impl_lz80qe($this) {
    return _Color___get_red__impl__cwrsk6($this);
  }
  function Color__component2_impl_mg9n4l($this) {
    return _Color___get_green__impl__bta9rs($this);
  }
  function Color__component3_impl_mxb9is($this) {
    return _Color___get_blue__impl__xwez13($this);
  }
  function Color__component4_impl_necvwz($this) {
    return _Color___get_alpha__impl__wcfyv1($this);
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Color(tmp_0)).q45.call(new Color($this), alpha, red, green, blue).p41_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).r45_1 + ')';
  }
  function Companion_2() {
    Companion_instance_4 = this;
    this.y41_1 = Color_1(new Long(-16777216, 0));
    this.z41_1 = Color_1(new Long(-12303292, 0));
    this.a42_1 = Color_1(new Long(-7829368, 0));
    this.b42_1 = Color_1(new Long(-3355444, 0));
    this.c42_1 = Color_1(new Long(-1, 0));
    this.d42_1 = Color_1(new Long(-65536, 0));
    this.e42_1 = Color_1(new Long(-16711936, 0));
    this.f42_1 = Color_1(new Long(-16776961, 0));
    this.g42_1 = Color_1(new Long(-256, 0));
    this.h42_1 = Color_1(new Long(-16711681, 0));
    this.i42_1 = Color_1(new Long(-65281, 0));
    this.j42_1 = Color_3(0);
    this.k42_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().g45_1);
  }
  var Companion_instance_4;
  function Companion_getInstance_14() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.p41_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_14();
    this.p41_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.p41_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.p41_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.p41_1, other);
  };
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().q44_1));
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ya(32));
    return _ULong___get_data__impl__fggpzb(this_1).db();
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().q44_1 : colorSpace;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var containsLower = colorSpace.u45(0);
    if (red <= colorSpace.v45(0) ? containsLower <= red : false) {
      var containsLower_0 = colorSpace.u45(1);
      tmp_1 = green <= colorSpace.v45(1) ? containsLower_0 <= green : false;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var containsLower_1 = colorSpace.u45(2);
      tmp_0 = blue <= colorSpace.v45(2) ? containsLower_1 <= blue : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = 0.0 <= alpha ? alpha <= 1.0 : false;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message = 'red = ' + red + ', green = ' + green + ', blue = ' + blue + ', alpha = ' + alpha + ' outside the range for ' + colorSpace;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (colorSpace.w45()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      // Inline function 'kotlin.ULong.shl' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.toULong' call
      var this_0 = _ULong___init__impl__c78o9k(toLong(argb));
      var other = _ULong___init__impl__c78o9k(new Long(-1, 0));
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).za(_ULong___get_data__impl__fggpzb(other)));
      var tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).wa(32));
      return _Color___init__impl__r6cqi2(tmp$ret$3);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(colorSpace.x45() === 3)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message_0 = 'Color only works with ColorSpaces with 3 components';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var id = colorSpace.t45_1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === -1)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message_1 = 'Unknown color space, please use a color space in ColorSpaces';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var r = _Float16___init__impl__fckrew_0(red);
    var g = _Float16___init__impl__fckrew_0(green);
    var b = _Float16___init__impl__fckrew_0(blue);
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.min' call
    var b_0 = Math.min(alpha, 1.0);
    var tmp$ret$7 = Math.max(0.0, b_0);
    var a = numberToInt(tmp$ret$7 * 1023.0 + 0.5);
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_2 = _Float16___get_halfValue__impl__89tmwx(r);
    var this_3 = _ULong___init__impl__c78o9k(toLong(this_2));
    var other_0 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).za(_ULong___get_data__impl__fggpzb(other_0)));
    var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).wa(48));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_6 = _Float16___get_halfValue__impl__89tmwx(g);
    var this_7 = _ULong___init__impl__c78o9k(toLong(this_6));
    var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    var this_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).za(_ULong___get_data__impl__fggpzb(other_1)));
    var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).wa(32));
    var this_9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ab(_ULong___get_data__impl__fggpzb(other_2)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_10 = _Float16___get_halfValue__impl__89tmwx(b);
    var this_11 = _ULong___init__impl__c78o9k(toLong(this_10));
    var other_3 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    var this_12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_11).za(_ULong___get_data__impl__fggpzb(other_3)));
    var other_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_12).wa(16));
    var this_13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_9).ab(_ULong___get_data__impl__fggpzb(other_4)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_14 = _ULong___init__impl__c78o9k(toLong(a));
    var other_5 = _ULong___init__impl__c78o9k(new Long(1023, 0));
    var this_15 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_14).za(_ULong___get_data__impl__fggpzb(other_5)));
    var other_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_15).wa(6));
    var this_16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_13).ab(_ULong___get_data__impl__fggpzb(other_6)));
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_17 = _ULong___init__impl__c78o9k(toLong(id));
    var other_7 = _ULong___init__impl__c78o9k(new Long(63, 0));
    var other_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_17).za(_ULong___get_data__impl__fggpzb(other_7)));
    var tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_16).ab(_ULong___get_data__impl__fggpzb(other_8)));
    return _Color___init__impl__r6cqi2(tmp$ret$25);
  }
  function Color_1(color) {
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_0 = _ULong___init__impl__c78o9k(color);
    var other = _ULong___init__impl__c78o9k(new Long(-1, 0));
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).za(_ULong___get_data__impl__fggpzb(other)));
    var tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).wa(32));
    return _Color___init__impl__r6cqi2(tmp$ret$2);
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(colorSpace.s45_1, Companion_getInstance_28().y45_1)) {
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      var message = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + new ColorModel(colorSpace.s45_1));
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).r46_1;
    var r = eotf.u46(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf.u46(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf.u46(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    return saturate(0.2126 * r + 0.7152 * g + 0.0722 * b);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var fgC = _Color___get_red__impl__cwrsk6(fg);
    var bgC = _Color___get_red__impl__cwrsk6(background);
    var r = a === 0.0 ? 0.0 : (fgC * fgA + bgC * bgA * (1.0 - fgA)) / a;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var fgC_0 = _Color___get_green__impl__bta9rs(fg);
    var bgC_0 = _Color___get_green__impl__bta9rs(background);
    var g = a === 0.0 ? 0.0 : (fgC_0 * fgA + bgC_0 * bgA * (1.0 - fgA)) / a;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var fgC_1 = _Color___get_blue__impl__xwez13(fg);
    var bgC_1 = _Color___get_blue__impl__xwez13(background);
    var b = a === 0.0 ? 0.0 : (fgC_1 * fgA + bgC_1 * bgA * (1.0 - fgA)) / a;
    return Color_0(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Color_2(red, green, blue, alpha) {
    alpha = alpha === VOID ? 255 : alpha;
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_3(color);
  }
  function Color_3(color) {
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.toULong' call
    var this_0 = _ULong___init__impl__c78o9k(toLong(color));
    var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).wa(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function saturate(v) {
    return v <= 0.0 ? 0.0 : v >= 1.0 ? 1.0 : v;
  }
  function lerp_1(start, stop, fraction) {
    var colorSpace = ColorSpaces_getInstance().h45_1;
    var startColor = Color__convert_impl_so5m8t(start, colorSpace);
    var endColor = Color__convert_impl_so5m8t(stop, colorSpace);
    var startAlpha = _Color___get_alpha__impl__wcfyv1(startColor);
    var startL = _Color___get_red__impl__cwrsk6(startColor);
    var startA = _Color___get_green__impl__bta9rs(startColor);
    var startB = _Color___get_blue__impl__xwez13(startColor);
    var endAlpha = _Color___get_alpha__impl__wcfyv1(endColor);
    var endL = _Color___get_red__impl__cwrsk6(endColor);
    var endA = _Color___get_green__impl__bta9rs(endColor);
    var endB = _Color___get_blue__impl__xwez13(endColor);
    var tmp0_alpha = lerp(startAlpha, endAlpha, fraction);
    var tmp1_red = lerp(startL, endL, fraction);
    var tmp2_green = lerp(startA, endA, fraction);
    var tmp3_blue = lerp(startB, endB, fraction);
    var interpolated = Color_0(tmp1_red, tmp2_green, tmp3_blue, tmp0_alpha, colorSpace);
    return Color__convert_impl_so5m8t(interpolated, _Color___get_colorSpace__impl__jqqozk(stop));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).v46 = function (color, blendMode) {
    return actualTintColorFilter(color, blendMode);
  };
  protoOf(Companion_3).w46 = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_11().p40_1 : blendMode;
    return $super === VOID ? this.v46(color, blendMode) : $super.v46.call(this, new Color(color), new BlendMode(blendMode));
  };
  var Companion_instance_5;
  function Companion_getInstance_15() {
    return Companion_instance_5;
  }
  function ColorFilter(nativeColorFilter) {
    this.x46_1 = nativeColorFilter;
  }
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_4() {
    Companion_instance_6 = this;
    this.y46_1 = _FilterQuality___init__impl__nv51aq(0);
    this.z46_1 = _FilterQuality___init__impl__nv51aq(1);
    this.a47_1 = _FilterQuality___init__impl__nv51aq(2);
    this.b47_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_6;
  function Companion_getInstance_16() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    return $this === Companion_getInstance_16().y46_1 ? 'None' : $this === Companion_getInstance_16().z46_1 ? 'Low' : $this === Companion_getInstance_16().a47_1 ? 'Medium' : $this === Companion_getInstance_16().b47_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  function FilterQuality__equals_impl_katg2v($this, other) {
    if (!(other instanceof FilterQuality))
      return false;
    if (!($this === (other instanceof FilterQuality ? other.c47_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FilterQuality(value) {
    Companion_getInstance_16();
    this.c47_1 = value;
  }
  protoOf(FilterQuality).toString = function () {
    return FilterQuality__toString_impl_i5cfty(this.c47_1);
  };
  protoOf(FilterQuality).hashCode = function () {
    return FilterQuality__hashCode_impl_v4lpcb(this.c47_1);
  };
  protoOf(FilterQuality).equals = function (other) {
    return FilterQuality__equals_impl_katg2v(this.c47_1, other);
  };
  function floatToHalf($this, f) {
    var bits = toRawBits(f);
    var s = bits >>> 31 | 0;
    var e = (bits >>> 23 | 0) & 255;
    var m = bits & 8388607;
    var outE = 0;
    var outM = 0;
    if (e === 255) {
      outE = 31;
      outM = !(m === 0) ? 512 : 0;
    } else {
      e = (e - 127 | 0) + 15 | 0;
      if (e >= 31) {
        outE = 49;
      } else if (e <= 0) {
        if (e >= -10) {
          m = (m | 8388608) >> (1 - e | 0);
          if (!((m & 4096) === 0))
            m = m + 8192 | 0;
          outM = m >> 13;
        }
      } else {
        outE = e;
        outM = m >> 13;
        if (!((m & 4096) === 0)) {
          var out = outE << 10 | outM;
          out = out + 1 | 0;
          return toShort(out | s << 15);
        }
      }
    }
    return toShort(s << 15 | outE << 10 | outM);
  }
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___get_halfValue__impl__89tmwx($this) {
    return $this;
  }
  function _Float16___init__impl__fckrew_0(value) {
    return _Float16___init__impl__fckrew(floatToHalf(Companion_getInstance_17(), value));
  }
  function Float16__toFloat_impl_6i8dal($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    var s = bits & 32768;
    var e = (bits >>> 10 | 0) & 31;
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        // Inline function 'kotlin.fromBits' call
        var bits_0 = 1056964608 + m | 0;
        var o = floatFromBits(bits_0);
        o = o - Companion_getInstance_17().h48_1;
        return s === 0 ? o : -o;
      }
    } else {
      outM = m << 13;
      if (e === 31) {
        outE = 255;
        if (!(outM === 0)) {
          outM = outM | 4194304;
        }
      } else {
        outE = (e - 15 | 0) + 127 | 0;
      }
    }
    var out = s << 16 | outE << 23 | outM;
    // Inline function 'kotlin.fromBits' call
    return floatFromBits(out);
  }
  function Companion_5() {
    Companion_instance_7 = this;
    this.d47_1 = 16;
    this.e47_1 = _Float16___init__impl__fckrew(5120);
    this.f47_1 = 15;
    this.g47_1 = -14;
    this.h47_1 = _Float16___init__impl__fckrew(-1025);
    this.i47_1 = _Float16___init__impl__fckrew(31743);
    this.j47_1 = _Float16___init__impl__fckrew(1024);
    this.k47_1 = _Float16___init__impl__fckrew(1);
    this.l47_1 = _Float16___init__impl__fckrew(32256);
    this.m47_1 = _Float16___init__impl__fckrew(-1024);
    this.n47_1 = _Float16___init__impl__fckrew(-32768);
    this.o47_1 = _Float16___init__impl__fckrew(31744);
    this.p47_1 = _Float16___init__impl__fckrew(0);
    this.q47_1 = _Float16___init__impl__fckrew_0(1.0);
    this.r47_1 = _Float16___init__impl__fckrew_0(-1.0);
    this.s47_1 = 15;
    this.t47_1 = 32768;
    this.u47_1 = 10;
    this.v47_1 = 31;
    this.w47_1 = 1023;
    this.x47_1 = 15;
    this.y47_1 = 32767;
    this.z47_1 = 31744;
    this.a48_1 = 31;
    this.b48_1 = 23;
    this.c48_1 = 255;
    this.d48_1 = 8388607;
    this.e48_1 = 127;
    this.f48_1 = 4194304;
    this.g48_1 = 1056964608;
    var tmp = this;
    // Inline function 'kotlin.fromBits' call
    var bits = 1056964608;
    tmp.h48_1 = floatFromBits(bits);
  }
  var Companion_instance_7;
  function Companion_getInstance_17() {
    if (Companion_instance_7 == null)
      new Companion_5();
    return Companion_instance_7;
  }
  function ImageBitmap(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_18().i48_1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().q44_1 : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_6() {
    Companion_instance_8 = this;
    this.i48_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.j48_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.k48_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.l48_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.m48_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  var Companion_instance_8;
  function Companion_getInstance_18() {
    if (Companion_instance_8 == null)
      new Companion_6();
    return Companion_instance_8;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_18().i48_1 ? 'Argb8888' : $this === Companion_getInstance_18().j48_1 ? 'Alpha8' : $this === Companion_getInstance_18().k48_1 ? 'Rgb565' : $this === Companion_getInstance_18().l48_1 ? 'F16' : $this === Companion_getInstance_18().m48_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === (other instanceof ImageBitmapConfig ? other.n48_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_18();
    this.n48_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.n48_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.n48_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.n48_1, other);
  };
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var z = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = pZ * (tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0]);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    return Offset(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.t38_1, rect.u38_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.t38_1, rect.w38_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.v38_1, rect.u38_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.v38_1, rect.w38_1));
    var tmp = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a = _Offset___get_x__impl__xvi35n(p0);
    var b = _Offset___get_x__impl__xvi35n(p1);
    var a_0 = Math.min(a, b);
    // Inline function 'kotlin.math.min' call
    var a_1 = _Offset___get_x__impl__xvi35n(p3);
    var b_0 = _Offset___get_x__impl__xvi35n(p4);
    var b_1 = Math.min(a_1, b_0);
    tmp.t38_1 = Math.min(a_0, b_1);
    var tmp_0 = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var a_2 = _Offset___get_y__impl__8bzhra(p0);
    var b_2 = _Offset___get_y__impl__8bzhra(p1);
    var a_3 = Math.min(a_2, b_2);
    // Inline function 'kotlin.math.min' call
    var a_4 = _Offset___get_y__impl__8bzhra(p3);
    var b_3 = _Offset___get_y__impl__8bzhra(p4);
    var b_4 = Math.min(a_4, b_3);
    tmp_0.u38_1 = Math.min(a_3, b_4);
    var tmp_1 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_5 = _Offset___get_x__impl__xvi35n(p0);
    var b_5 = _Offset___get_x__impl__xvi35n(p1);
    var a_6 = Math.max(a_5, b_5);
    // Inline function 'kotlin.math.max' call
    var a_7 = _Offset___get_x__impl__xvi35n(p3);
    var b_6 = _Offset___get_x__impl__xvi35n(p4);
    var b_7 = Math.max(a_7, b_6);
    tmp_1.v38_1 = Math.max(a_6, b_7);
    var tmp_2 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var a_8 = _Offset___get_y__impl__8bzhra(p0);
    var b_8 = _Offset___get_y__impl__8bzhra(p1);
    var a_9 = Math.max(a_8, b_8);
    // Inline function 'kotlin.math.max' call
    var a_10 = _Offset___get_y__impl__8bzhra(p3);
    var b_9 = _Offset___get_y__impl__8bzhra(p4);
    var b_10 = Math.max(a_10, b_9);
    tmp_2.w38_1 = Math.max(a_9, b_10);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot($this, 0, m, 0);
    var v01 = dot($this, 0, m, 1);
    var v02 = dot($this, 0, m, 2);
    var v03 = dot($this, 0, m, 3);
    var v10 = dot($this, 1, m, 0);
    var v11 = dot($this, 1, m, 1);
    var v12 = dot($this, 1, m, 2);
    var v13 = dot($this, 1, m, 3);
    var v20 = dot($this, 2, m, 0);
    var v21 = dot($this, 2, m, 1);
    var v22 = dot($this, 2, m, 2);
    var v23 = dot($this, 2, m, 3);
    var v30 = dot($this, 3, m, 0);
    var v31 = dot($this, 3, m, 1);
    var v32 = dot($this, 3, m, 2);
    var v33 = dot($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var v = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = v;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v_10;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).p48.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t1 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_3 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t2 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = tmp_5 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t3 = tmp_7 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_8 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = tmp_9 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t4 = tmp_10 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).q48.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Companion_7() {
    this.r48_1 = 0;
    this.s48_1 = 1;
    this.t48_1 = 3;
    this.u48_1 = 4;
    this.v48_1 = 5;
    this.w48_1 = 7;
    this.x48_1 = 10;
    this.y48_1 = 12;
    this.z48_1 = 13;
    this.a49_1 = 14;
    this.b49_1 = 15;
  }
  var Companion_instance_9;
  function Companion_getInstance_19() {
    return Companion_instance_9;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.o48_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    this.o48_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.o48_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.o48_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.o48_1, other);
  };
  function dot(m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m2)[imul(0, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m2)[imul(1, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m2)[imul(2, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    return tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m2)[imul(3, 4) + column | 0];
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            if (!(_Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0] === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.c49_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.c49_1.equals(other.c49_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.c49_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.d49_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!hasSameCornerRadius(this.d49_1)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      this_0.f49(this.d49_1);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.e49_1 = tmp_0;
  }
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.d49_1.equals(other.d49_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.d49_1.hashCode();
  };
  function Generic() {
  }
  function Outline() {
  }
  function hasSameCornerRadius(_this__u8e3s4) {
    var sameRadiusX = (_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.g3a_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.f3a_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.f3a_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.e3a_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.e3a_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d3a_1) : false;
    var sameRadiusY = (_CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.g3a_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.f3a_1) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.f3a_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.e3a_1) : false) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.e3a_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.d3a_1) : false;
    return sameRadiusX ? sameRadiusY : false;
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.c49_1;
      _this__u8e3s4.l49(color, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.e49_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.j49(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.d49_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.g3a_1);
          var tmp0_topLeft = topLeft_0(rrect);
          var tmp1_size = size_0(rrect);
          var tmp2_cornerRadius = CornerRadius(radius);
          _this__u8e3s4.k49(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.i49_1;
          _this__u8e3s4.j49(path_0, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().g49_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.c49_1;
      _this__u8e3s4.o49(brush, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.e49_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.m49(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.d49_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.g3a_1);
          _this__u8e3s4.n49(brush, topLeft_0(rrect), size_0(rrect), CornerRadius(radius), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.i49_1;
          _this__u8e3s4.m49(path_0, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset(_this__u8e3s4.f39_1, _this__u8e3s4.g39_1);
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.k39(), _this__u8e3s4.l39());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset(_this__u8e3s4.z39_1, _this__u8e3s4.a3a_1);
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.k39(), _this__u8e3s4.l39());
  }
  function get_DefaultAlpha() {
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_10 = this;
    this.p49_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.q49_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_10;
  function Companion_getInstance_20() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_9() {
    Companion_instance_11 = this;
    this.i4a_1 = _PathFillType___init__impl__d59lzz(0);
    this.j4a_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_11;
  function Companion_getInstance_21() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    return $this === Companion_getInstance_21().i4a_1 ? 'NonZero' : $this === Companion_getInstance_21().j4a_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    if (!($this === (other instanceof PathFillType ? other.k4a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_21();
    this.k4a_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.k4a_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.k4a_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.k4a_1, other);
  };
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_10() {
    Companion_instance_12 = this;
    this.l4a_1 = _PathOperation___init__impl__8ddeif(0);
    this.m4a_1 = _PathOperation___init__impl__8ddeif(1);
    this.n4a_1 = _PathOperation___init__impl__8ddeif(2);
    this.o4a_1 = _PathOperation___init__impl__8ddeif(3);
    this.p4a_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_12;
  function Companion_getInstance_22() {
    if (Companion_instance_12 == null)
      new Companion_10();
    return Companion_instance_12;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).q4a = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (!properties_initialized_RectangleShape_kt_h73j90) {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().r42_1 : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().r42_1 : tileMode;
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    colorStops = colorStops === VOID ? null : colorStops;
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function Companion_11() {
    Companion_instance_13 = this;
    this.r4a_1 = new Shadow();
  }
  var Companion_instance_13;
  function Companion_getInstance_23() {
    if (Companion_instance_13 == null)
      new Companion_11();
    return Companion_instance_13;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_23();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance_0().z38_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.s4a_1 = color;
    this.t4a_1 = offset;
    this.u4a_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.s4a_1, other.s4a_1))
      return false;
    if (!equals(this.t4a_1, other.t4a_1))
      return false;
    if (!(this.u4a_1 === other.u4a_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.s4a_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.t4a_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.u4a_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + new Color(this.s4a_1) + ', offset=' + new Offset_0(this.t4a_1) + ', blurRadius=' + this.u4a_1 + ')';
  };
  function lerp_2(start, stop, fraction) {
    return new Shadow(lerp_1(start.s4a_1, stop.s4a_1, fraction), lerp_0(start.t4a_1, stop.t4a_1, fraction), lerp(start.u4a_1, stop.u4a_1, fraction));
  }
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_14 = this;
    this.v4a_1 = _StrokeCap___init__impl__kfgr27(0);
    this.w4a_1 = _StrokeCap___init__impl__kfgr27(1);
    this.x4a_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_14;
  function Companion_getInstance_24() {
    if (Companion_instance_14 == null)
      new Companion_12();
    return Companion_instance_14;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_24().v4a_1 ? 'Butt' : $this === Companion_getInstance_24().w4a_1 ? 'Round' : $this === Companion_getInstance_24().x4a_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    if (!($this === (other instanceof StrokeCap ? other.y4a_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_24();
    this.y4a_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.y4a_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.y4a_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.y4a_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_15 = this;
    this.z4a_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.a4b_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.b4b_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_15;
  function Companion_getInstance_25() {
    if (Companion_instance_15 == null)
      new Companion_13();
    return Companion_instance_15;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_25().z4a_1 ? 'Miter' : $this === Companion_getInstance_25().a4b_1 ? 'Round' : $this === Companion_getInstance_25().b4b_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    if (!($this === (other instanceof StrokeJoin ? other.c4b_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_25();
    this.c4b_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.c4b_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.c4b_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.c4b_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function Companion_14() {
    Companion_instance_16 = this;
    this.r42_1 = _TileMode___init__impl__syhjao(0);
    this.s42_1 = _TileMode___init__impl__syhjao(1);
    this.t42_1 = _TileMode___init__impl__syhjao(2);
    this.u42_1 = _TileMode___init__impl__syhjao(3);
  }
  var Companion_instance_16;
  function Companion_getInstance_26() {
    if (Companion_instance_16 == null)
      new Companion_14();
    return Companion_instance_16;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    return $this === Companion_getInstance_26().r42_1 ? 'Clamp' : $this === Companion_getInstance_26().s42_1 ? 'Repeated' : $this === Companion_getInstance_26().t42_1 ? 'Mirror' : $this === Companion_getInstance_26().u42_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    if (!($this === (other instanceof TileMode ? other.d4b_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_26();
    this.d4b_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.d4b_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.d4b_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.d4b_1, other);
  };
  function Adaptation$Companion$Bradford$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_15() {
    Companion_instance_17 = this;
    var tmp = this;
    tmp.e4b_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.f4b_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.g4b_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_17;
  function Companion_getInstance_27() {
    if (Companion_instance_17 == null)
      new Companion_15();
    return Companion_instance_17;
  }
  function Adaptation(transform) {
    Companion_getInstance_27();
    this.h4b_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _ColorModel___get_packedValue__impl__uvxrhj($this).xa(32).db();
  }
  function Companion_16() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = toLong(3).wa(32).ab(toLong(0).za(new Long(-1, 0)));
    tmp.y45_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = toLong(3).wa(32).ab(toLong(1).za(new Long(-1, 0)));
    tmp_0.z45_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = toLong(3).wa(32).ab(toLong(2).za(new Long(-1, 0)));
    tmp_1.a46_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = toLong(4).wa(32).ab(toLong(3).za(new Long(-1, 0)));
    tmp_2.b46_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_18;
  function Companion_getInstance_28() {
    if (Companion_instance_18 == null)
      new Companion_16();
    return Companion_instance_18;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_28().y45_1) ? 'Rgb' : equals($this, Companion_getInstance_28().z45_1) ? 'Xyz' : equals($this, Companion_getInstance_28().a46_1) ? 'Lab' : equals($this, Companion_getInstance_28().b46_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.i4b_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_28();
    this.i4b_1 = packedValue;
  }
  protoOf(ColorModel).toString = function () {
    return ColorModel__toString_impl_msukd7(this.i4b_1);
  };
  protoOf(ColorModel).hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.i4b_1);
  };
  protoOf(ColorModel).equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.i4b_1, other);
  };
  function Companion_17() {
    this.j4b_1 = -1;
    this.k4b_1 = 63;
  }
  var Companion_instance_19;
  function Companion_getInstance_29() {
    return Companion_instance_19;
  }
  function ColorSpace(name, model, id) {
    this.r45_1 = name;
    this.s45_1 = model;
    this.t45_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.r45_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    if (this.t45_1 < -1 ? true : this.t45_1 > 63) {
      throw IllegalArgumentException_init_$Create$('The id must be between -1 and 63');
    }
  }
  protoOf(ColorSpace).x45 = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.s45_1);
  };
  protoOf(ColorSpace).w45 = function () {
    return false;
  };
  protoOf(ColorSpace).l4b = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.m4b(tmp$ret$0);
  };
  protoOf(ColorSpace).n4b = function (v0, v1, v2) {
    var xyz = this.l4b(v0, v1, v2);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = xyz[0];
    var val2 = xyz[1];
    var v1_0 = toLong(toBits(val1));
    var v2_0 = toLong(toBits(val2));
    return v1_0.wa(32).ab(v2_0.za(new Long(-1, 0)));
  };
  protoOf(ColorSpace).o4b = function (v0, v1, v2) {
    var xyz = this.l4b(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).p4b = function (x, y, z, a, colorSpace) {
    var colors = this.q4b(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).q4b = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.s45_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.r4b(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.r45_1 + ' (id=' + this.t45_1 + ', model=' + new ColorModel(this.s45_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.t45_1 === that.t45_1))
      return false;
    return !(this.r45_1 === that.r45_1) ? false : equals(this.s45_1, that.s45_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.r45_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.s45_1) | 0;
    result = imul(31, result) + this.t45_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().q44_1 : destination;
    intent = intent === VOID ? Companion_getInstance_33().s4b_1 : intent;
    if (_this__u8e3s4 === ColorSpaces_getInstance().q44_1) {
      if (destination === ColorSpaces_getInstance().q44_1) {
        return Companion_getInstance_30().w4b_1;
      }
      if (destination === ColorSpaces_getInstance().h45_1 ? intent === Companion_getInstance_33().s4b_1 : false) {
        return Companion_getInstance_30().x4b_1;
      }
    } else if ((_this__u8e3s4 === ColorSpaces_getInstance().h45_1 ? destination === ColorSpaces_getInstance().q44_1 : false) ? intent === Companion_getInstance_33().s4b_1 : false) {
      return Companion_getInstance_30().y4b_1;
    }
    if (_this__u8e3s4 === destination) {
      return Companion_getInstance_30().z4b(_this__u8e3s4);
    }
    var tmp;
    if (equals(_this__u8e3s4.s45_1, Companion_getInstance_28().y45_1) ? equals(destination.s45_1, Companion_getInstance_28().y45_1) : false) {
      var tmp_0 = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(_this__u8e3s4, destination, intent);
    }
    return tmp;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_27().e4b_1 : adaptation;
    if (equals(_this__u8e3s4.s45_1, Companion_getInstance_28().y45_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_0(rgb.f46_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.c4c();
      var adaptationTransform = chromaticAdaptation(adaptation.h4b_1, rgb.f46_1.c4c(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.k46_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          // Inline function 'kotlin.math.abs' call
          var x = a[i] - b[i];
          tmp = Math.abs(x) > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function mul3x3Float3_0(lhs, r0, r1, r2) {
    return lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
  }
  function mul3x3Float3_1(lhs, r0, r1, r2) {
    return lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
  }
  function mul3x3Float3_2(lhs, r0, r1, r2) {
    return lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = a.a4c_1 - b.a4c_1;
    if (Math.abs(x) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.b4c_1 - b.b4c_1;
      tmp = Math.abs(x_0) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    // Inline function 'kotlin.floatArrayOf' call
    var LMS = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(x, x_0) - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x - e;
      var x_0 = 1.0 / g;
      tmp = (Math.pow(this_0, x_0) - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g);
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g) + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.d4c_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).u46 = function (double) {
    return this.d4c_1(double);
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.m44_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.n44_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    this.o44_1 = new TransferParameters(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.p44_1 = new TransferParameters(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.q44_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.m44_1, Illuminant_getInstance().k4c_1, this.o44_1, 0);
    this.r44_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.m44_1, Illuminant_getInstance().k4c_1, 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().k4c_1;
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.s44_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.m44_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.o44_1, 2);
    this.t44_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.m44_1, Illuminant_getInstance().k4c_1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.u44_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().k4c_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 4);
    var tmp_7 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.v44_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().k4c_1, new TransferParameters(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145), 5);
    var tmp_8 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.w44_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.x44_1 = Rgb_init_$Create$('Display P3', tmp$ret$5, Illuminant_getInstance().k4c_1, this.o44_1, 7);
    this.y44_1 = Rgb_init_$Create$('NTSC (1953)', this.n44_1, Illuminant_getInstance().g4c_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 8);
    var tmp_10 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.z44_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().k4c_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 9);
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.a45_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().k4c_1, 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.b45_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().h4c_1, new TransferParameters(1.8, 1.0, 0.0, 0.0625, 0.031248), 11);
    var tmp_13 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.c45_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().j4c_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.d45_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().j4c_1, 1.0, -65504.0, 65504.0, 13);
    this.e45_1 = new Xyz('Generic XYZ', 14);
    this.f45_1 = new Lab('Generic L*a*b*', 15);
    this.g45_1 = Rgb_init_$Create$('None', this.m44_1, Illuminant_getInstance().k4c_1, this.p44_1, 16);
    this.h45_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.i45_1 = [this.q44_1, this.r44_1, this.s44_1, this.t44_1, this.u44_1, this.v44_1, this.w44_1, this.x44_1, this.y44_1, this.z44_1, this.a45_1, this.b45_1, this.c45_1, this.d45_1, this.e45_1, this.f45_1, this.g45_1, this.h45_1];
  }
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_0(source.f46_1, destination.f46_1)) {
      return mul3x3(destination.l46_1, source.k46_1);
    } else {
      var transform = source.k46_1;
      var inverseTransform = destination.l46_1;
      var srcXYZ = source.f46_1.c4c();
      var dstXYZ = destination.f46_1.c4c();
      if (!compare_0(source.f46_1, Illuminant_getInstance().h4c_1)) {
        var tmp = Companion_getInstance_27().e4b_1.h4b_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = Illuminant_getInstance().n4c_1.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.k46_1);
      }
      if (!compare_0(destination.f46_1, Illuminant_getInstance().h4c_1)) {
        var tmp_0 = Companion_getInstance_27().e4b_1.h4b_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = Illuminant_getInstance().n4c_1.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.k46_1));
      }
      if (intent === Companion_getInstance_33().v4b_1) {
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$4 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_33().v4b_1))
      return null;
    var srcRGB = equals(source.s45_1, Companion_getInstance_28().y45_1);
    var dstRGB = equals(destination.s45_1, Companion_getInstance_28().y45_1);
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.f46_1.c4c() : Illuminant_getInstance().n4c_1;
      var dstXYZ = dstRGB ? rgb.f46_1.c4c() : Illuminant_getInstance().n4c_1;
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_33().t4b_1, this);
  }
  protoOf(Connector$Companion$identity$1).p45 = function (r, g, b, a) {
    return Color_0(r, g, b, a, this.k45_1);
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.s45_1, Companion_getInstance_28().y45_1) ? adapt(source, Illuminant_getInstance().h4c_1) : source;
    var tmp_0;
    if (equals(destination.s45_1, Companion_getInstance_28().y45_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().h4c_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_getInstance_30(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.a4d_1 = mSource;
    this.b4d_1 = mDestination;
    this.c4d_1 = computeTransform(this, this.a4d_1, this.b4d_1, intent);
  }
  protoOf(RgbConnector).p45 = function (r, g, b, a) {
    var v0 = this.a4d_1.r46_1.u46(r);
    var v1 = this.a4d_1.r46_1.u46(g);
    var v2 = this.a4d_1.r46_1.u46(b);
    var v01 = mul3x3Float3_0(this.c4d_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(this.c4d_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(this.c4d_1, v0, v1, v2);
    var v02 = this.b4d_1.o46_1.u46(v01);
    var v12 = this.b4d_1.o46_1.u46(v11);
    var v22 = this.b4d_1.o46_1.u46(v21);
    return Color_0(v02, v12, v22, a, this.b4d_1);
  };
  function Companion_18() {
    Companion_instance_20 = this;
    this.w4b_1 = this.z4b(ColorSpaces_getInstance().q44_1);
    this.x4b_1 = Connector_init_$Create$(ColorSpaces_getInstance().q44_1, ColorSpaces_getInstance().h45_1, Companion_getInstance_33().s4b_1);
    this.y4b_1 = Connector_init_$Create$(ColorSpaces_getInstance().h45_1, ColorSpaces_getInstance().q44_1, Companion_getInstance_33().s4b_1);
  }
  protoOf(Companion_18).z4b = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_20;
  function Companion_getInstance_30() {
    if (Companion_instance_20 == null)
      new Companion_18();
    return Companion_instance_20;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_30();
    this.j45_1 = source;
    this.k45_1 = destination;
    this.l45_1 = transformSource;
    this.m45_1 = transformDestination;
    this.n45_1 = renderIntent;
    this.o45_1 = transform;
  }
  protoOf(Connector).p45 = function (r, g, b, a) {
    var packed = this.l45_1.n4b(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    var bits = packed.xa(32).db();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = packed.za(new Long(-1, 0)).db();
    var y = floatFromBits(bits_0);
    var z = this.l45_1.o4b(r, g, b);
    if (!(this.o45_1 == null)) {
      x = x * this.o45_1[0];
      y = y * this.o45_1[1];
      z = z * this.o45_1[2];
    }
    return this.m45_1.p4b(x, y, z, a, this.k45_1);
  };
  function Illuminant() {
    Illuminant_instance = this;
    this.e4c_1 = new WhitePoint(0.44757, 0.40745);
    this.f4c_1 = new WhitePoint(0.34842, 0.35161);
    this.g4c_1 = new WhitePoint(0.31006, 0.31616);
    this.h4c_1 = new WhitePoint(0.34567, 0.3585);
    this.i4c_1 = new WhitePoint(0.33242, 0.34743);
    this.j4c_1 = new WhitePoint(0.32168, 0.33767);
    this.k4c_1 = new WhitePoint(0.31271, 0.32902);
    this.l4c_1 = new WhitePoint(0.29902, 0.31485);
    this.m4c_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.n4c_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_19() {
    this.d4d_1 = 0.008856452;
    this.e4d_1 = 7.787037;
    this.f4d_1 = 0.13793103;
    this.g4d_1 = 0.20689656;
  }
  var Companion_instance_21;
  function Companion_getInstance_31() {
    return Companion_instance_21;
  }
  function Lab(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_28().a46_1, id);
  }
  protoOf(Lab).u45 = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).v45 = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).m4b = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var x = fx > 0.20689656 ? fx * fx * fx : 0.12841854995680643 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 0.12841854995680643 * (fy - 0.13793103);
    var z = fz > 0.20689656 ? fz * fz * fz : 0.12841854995680643 * (fz - 0.13793103);
    v[0] = x * Illuminant_getInstance().n4c_1[0];
    v[1] = y * Illuminant_getInstance().n4c_1[1];
    v[2] = z * Illuminant_getInstance().n4c_1[2];
    return v;
  };
  protoOf(Lab).n4b = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v10 = coerceIn(v0, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var x = fx > 0.20689656 ? fx * fx * fx : 0.12841854995680643 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 0.12841854995680643 * (fy - 0.13793103);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = x * Illuminant_getInstance().n4c_1[0];
    var val2 = y * Illuminant_getInstance().n4c_1[1];
    var v1_0 = toLong(toBits(val1));
    var v2_0 = toLong(toBits(val2));
    return v1_0.wa(32).ab(v2_0.za(new Long(-1, 0)));
  };
  protoOf(Lab).o4b = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v20 = coerceIn(v2, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var z = fz > 0.20689656 ? fz * fz * fz : 0.12841854995680643 * (fz - 0.13793103);
    return z * Illuminant_getInstance().n4c_1[2];
  };
  protoOf(Lab).p4b = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().n4c_1[0];
    var y1 = y / Illuminant_getInstance().n4c_1[1];
    var z1 = z / Illuminant_getInstance().n4c_1[2];
    var tmp;
    if (x1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 0.3333333333333333;
      tmp = Math.pow(x1, x_0);
    } else {
      tmp = 7.787037 * x1 + 0.13793103;
    }
    var fx = tmp;
    var tmp_0;
    if (y1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_1 = 0.3333333333333333;
      tmp_0 = Math.pow(y1, x_1);
    } else {
      tmp_0 = 7.787037 * y1 + 0.13793103;
    }
    var fy = tmp_0;
    var tmp_1;
    if (z1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_2 = 0.3333333333333333;
      tmp_1 = Math.pow(z1, x_2);
    } else {
      tmp_1 = 7.787037 * z1 + 0.13793103;
    }
    var fz = tmp_1;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    return Color_0(coerceIn(l, 0.0, 100.0), coerceIn(a1, -128.0, 128.0), coerceIn(b, -128.0, 128.0), a, colorSpace);
  };
  protoOf(Lab).r4b = function (v) {
    var x = v[0] / Illuminant_getInstance().n4c_1[0];
    var y = v[1] / Illuminant_getInstance().n4c_1[1];
    var z = v[2] / Illuminant_getInstance().n4c_1[2];
    var tmp;
    if (x > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 0.3333333333333333;
      tmp = Math.pow(x, x_0);
    } else {
      tmp = 7.787037 * x + 0.13793103;
    }
    var fx = tmp;
    var tmp_0;
    if (y > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_1 = 0.3333333333333333;
      tmp_0 = Math.pow(y, x_1);
    } else {
      tmp_0 = 7.787037 * y + 0.13793103;
    }
    var fy = tmp_0;
    var tmp_1;
    if (z > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var x_2 = 0.3333333333333333;
      tmp_1 = Math.pow(z, x_2);
    } else {
      tmp_1 = 7.787037 * z + 0.13793103;
    }
    var fz = tmp_1;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    v[0] = coerceIn(l, 0.0, 100.0);
    v[1] = coerceIn(a, -128.0, 128.0);
    v[2] = coerceIn(b, -128.0, 128.0);
    return v;
  };
  function Companion_20() {
    Companion_instance_22 = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.k4d_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_27().e4b_1.h4b_1, Illuminant_getInstance().h4c_1.c4c(), Illuminant_getInstance().k4c_1.c4c()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.l4d_1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.m4d_1 = inverse3x3(this.k4d_1);
    this.n4d_1 = inverse3x3(this.l4d_1);
  }
  var Companion_instance_22;
  function Companion_getInstance_32() {
    if (Companion_instance_22 == null)
      new Companion_20();
    return Companion_instance_22;
  }
  function Oklab(name, id) {
    Companion_getInstance_32();
    ColorSpace.call(this, name, Companion_getInstance_28().a46_1, id);
  }
  protoOf(Oklab).u45 = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).v45 = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).m4b = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_32().n4d_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_32().m4d_1, v);
    return v;
  };
  protoOf(Oklab).n4b = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_32().n4d_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_32().n4d_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_32().n4d_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v03 = mul3x3Float3_0(Companion_getInstance_32().m4d_1, v02, v12, v22);
    var v13 = mul3x3Float3_1(Companion_getInstance_32().m4d_1, v02, v12, v22);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(v03));
    var v2_0 = toLong(toBits(v13));
    return v1_0.wa(32).ab(v2_0.za(new Long(-1, 0)));
  };
  protoOf(Oklab).o4b = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_32().n4d_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_32().n4d_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_32().n4d_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v23 = mul3x3Float3_2(Companion_getInstance_32().m4d_1, v02, v12, v22);
    return v23;
  };
  protoOf(Oklab).p4b = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(Companion_getInstance_32().k4d_1, x, y, z);
    var v1 = mul3x3Float3_1(Companion_getInstance_32().k4d_1, x, y, z);
    var v2 = mul3x3Float3_2(Companion_getInstance_32().k4d_1, x, y, z);
    // Inline function 'kotlin.math.sign' call
    var x_0 = v0;
    var tmp = sign(x_0);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = v0;
    var this_0 = Math.abs(x_1);
    var x_2 = 0.3333333333333333;
    v0 = tmp * Math.pow(this_0, x_2);
    // Inline function 'kotlin.math.sign' call
    var x_3 = v1;
    var tmp_0 = sign(x_3);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_4 = v1;
    var this_1 = Math.abs(x_4);
    var x_5 = 0.3333333333333333;
    v1 = tmp_0 * Math.pow(this_1, x_5);
    // Inline function 'kotlin.math.sign' call
    var x_6 = v2;
    var tmp_1 = sign(x_6);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_7 = v2;
    var this_2 = Math.abs(x_7);
    var x_8 = 0.3333333333333333;
    v2 = tmp_1 * Math.pow(this_2, x_8);
    var v01 = mul3x3Float3_0(Companion_getInstance_32().l4d_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(Companion_getInstance_32().l4d_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(Companion_getInstance_32().l4d_1, v0, v1, v2);
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).r4b = function (v) {
    mul3x3Float3(Companion_getInstance_32().k4d_1, v);
    // Inline function 'kotlin.math.sign' call
    var x = v[0];
    var tmp = sign(x);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_0 = v[0];
    var this_0 = Math.abs(x_0);
    var x_1 = 0.3333333333333333;
    v[0] = tmp * Math.pow(this_0, x_1);
    // Inline function 'kotlin.math.sign' call
    var x_2 = v[1];
    var tmp_0 = sign(x_2);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_3 = v[1];
    var this_1 = Math.abs(x_3);
    var x_4 = 0.3333333333333333;
    v[1] = tmp_0 * Math.pow(this_1, x_4);
    // Inline function 'kotlin.math.sign' call
    var x_5 = v[2];
    var tmp_1 = sign(x_5);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var x_6 = v[2];
    var this_2 = Math.abs(x_6);
    var x_7 = 0.3333333333333333;
    v[2] = tmp_1 * Math.pow(this_2, x_7);
    mul3x3Float3(Companion_getInstance_32().l4d_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function Companion_21() {
    Companion_instance_23 = this;
    this.s4b_1 = _RenderIntent___init__impl__jceahd(0);
    this.t4b_1 = _RenderIntent___init__impl__jceahd(1);
    this.u4b_1 = _RenderIntent___init__impl__jceahd(2);
    this.v4b_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_23;
  function Companion_getInstance_33() {
    if (Companion_instance_23 == null)
      new Companion_21();
    return Companion_instance_23;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance().m44_1)) {
      return false;
    }
    if (!compare_0(whitePoint, Illuminant_getInstance().k4c_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().q44_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_1($this, x, OETF, srgb.m46_1))
        return false;
      if (!compare_1($this, x, EOTF, srgb.p46_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_1($this, point, a, b) {
    var rA = a.u46(point);
    var rB = b.u46(point);
    // Inline function 'kotlin.math.abs' call
    var x = rA - rB;
    return Math.abs(x) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance().n44_1) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance().m44_1) : false) ? true : min < 0.0 ? max > 1.0 : false;
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    // Inline function 'kotlin.floatArrayOf' call
    var p0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0.0 ? true : cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0.0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0.0 ? true : cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0.0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0.0 ? true : cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0.0);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = primaries;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, xyPrimaries, 0, 0, 6);
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.a4c_1;
    var wy = whitePoint.b4c_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.r4d_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).u46 = function (double) {
    return this.r4d_1(double);
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.x4d_1 === 0.0 ? function_0.y4d_1 === 0.0 : false) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.x4d_1 === 0.0 ? function_0.y4d_1 === 0.0 : false) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_1(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_2(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_34().z4d_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_34().z4d_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_4(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.r45_1, colorSpace.j46_1, whitePoint, transform, colorSpace.m46_1, colorSpace.p46_1, colorSpace.g46_1, colorSpace.h46_1, colorSpace.i46_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_22() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.z4d_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  var Companion_instance_24;
  function Companion_getInstance_34() {
    if (Companion_instance_24 == null)
      new Companion_22();
    return Companion_instance_24;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.a4e_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).u46 = function (double) {
    return this.a4e_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.b4e_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).u46 = function (double) {
    return this.b4e_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.c4e_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).u46 = function (double) {
    return this.c4e_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.d4e_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).u46 = function (double) {
    return this.d4e_1(double);
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.m46_1.u46(x), this$0.g46_1, this$0.h46_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.m46_1.u46(x), this$0.g46_1, this$0.h46_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.p46_1.u46(coerceIn_0(x, this$0.g46_1, this$0.h46_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.p46_1.u46(coerceIn_0(x, this$0.g46_1, this$0.h46_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.t4d_1, $function.u4d_1, $function.v4d_1, $function.w4d_1, $function.s4d_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.t4d_1, $function.u4d_1, $function.v4d_1, $function.w4d_1, $function.x4d_1, $function.y4d_1, $function.s4d_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.t4d_1, $function.u4d_1, $function.v4d_1, $function.w4d_1, $function.s4d_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.t4d_1, $function.u4d_1, $function.v4d_1, $function.w4d_1, $function.x4d_1, $function.y4d_1, $function.s4d_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x < 0.0 ? 0.0 : x;
      var x_0 = 1.0 / $gamma;
      return Math.pow(this_0, x_0);
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = x < 0.0 ? 0.0 : x;
      var x_0 = $gamma;
      return Math.pow(this_0, x_0);
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_34();
    ColorSpace.call(this, name, Companion_getInstance_28().y45_1, id);
    this.f46_1 = whitePoint;
    this.g46_1 = min;
    this.h46_1 = max;
    this.i46_1 = transferParameters;
    this.m46_1 = oetf;
    var tmp = this;
    tmp.n46_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.o46_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.p46_1 = eotf;
    var tmp_2 = this;
    tmp_2.q46_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.r46_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.g46_1 >= this.h46_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.g46_1 + ', max=' + this.h46_1 + '; min must ' + 'be strictly < max');
    }
    this.j46_1 = xyPrimaries(Companion_getInstance_34(), primaries);
    if (transform == null) {
      this.k46_1 = computeXYZMatrix(Companion_getInstance_34(), this.j46_1, this.f46_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.k46_1 = transform;
    }
    this.l46_1 = inverse3x3(this.k46_1);
    this.s46_1 = isWideGamut(Companion_getInstance_34(), this.j46_1, this.g46_1, this.h46_1);
    this.t46_1 = isSrgb(Companion_getInstance_34(), this.j46_1, this.f46_1, oetf, eotf, this.g46_1, this.h46_1, id);
  }
  protoOf(Rgb).w45 = function () {
    return this.t46_1;
  };
  protoOf(Rgb).u45 = function (component) {
    return this.g46_1;
  };
  protoOf(Rgb).v45 = function (component) {
    return this.h46_1;
  };
  protoOf(Rgb).m4b = function (v) {
    v[0] = this.r46_1.u46(v[0]);
    v[1] = this.r46_1.u46(v[1]);
    v[2] = this.r46_1.u46(v[2]);
    return mul3x3Float3(this.k46_1, v);
  };
  protoOf(Rgb).n4b = function (v0, v1, v2) {
    var v00 = this.r46_1.u46(v0);
    var v10 = this.r46_1.u46(v1);
    var v20 = this.r46_1.u46(v2);
    var x = mul3x3Float3_0(this.k46_1, v00, v10, v20);
    var y = mul3x3Float3_1(this.k46_1, v00, v10, v20);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(x));
    var v2_0 = toLong(toBits(y));
    return v1_0.wa(32).ab(v2_0.za(new Long(-1, 0)));
  };
  protoOf(Rgb).o4b = function (v0, v1, v2) {
    var v00 = this.r46_1.u46(v0);
    var v10 = this.r46_1.u46(v1);
    var v20 = this.r46_1.u46(v2);
    var z = mul3x3Float3_2(this.k46_1, v00, v10, v20);
    return z;
  };
  protoOf(Rgb).p4b = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(this.l46_1, x, y, z);
    var v1 = mul3x3Float3_1(this.l46_1, x, y, z);
    var v2 = mul3x3Float3_2(this.l46_1, x, y, z);
    v0 = this.o46_1.u46(v0);
    v1 = this.o46_1.u46(v1);
    v2 = this.o46_1.u46(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).r4b = function (v) {
    mul3x3Float3(this.l46_1, v);
    v[0] = this.o46_1.u46(v[0]);
    v[1] = this.o46_1.u46(v[1]);
    v[2] = this.o46_1.u46(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.g46_1, this.g46_1) === 0))
      return false;
    if (!(compareTo(rgb.h46_1, this.h46_1) === 0))
      return false;
    if (!this.f46_1.equals(rgb.f46_1))
      return false;
    if (!contentEquals(this.j46_1, rgb.j46_1))
      return false;
    if (!(this.i46_1 == null)) {
      return equals(this.i46_1, rgb.i46_1);
    } else if (rgb.i46_1 == null) {
      return true;
    }
    return !equals(this.m46_1, rgb.m46_1) ? false : equals(this.p46_1, rgb.p46_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.f46_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.j46_1) | 0;
    result = imul(31, result) + (!(this.g46_1 === 0.0) ? toBits(this.g46_1) : 0) | 0;
    result = imul(31, result) + (!(this.h46_1 === 0.0) ? toBits(this.h46_1) : 0) | 0;
    result = imul(31, result) + (!(this.i46_1 == null) ? this.i46_1.hashCode() : 0) | 0;
    if (this.i46_1 == null) {
      result = imul(31, result) + hashCode(this.m46_1) | 0;
      result = imul(31, result) + hashCode(this.p46_1) | 0;
    }
    return result;
  };
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.s4d_1 = gamma;
    this.t4d_1 = a;
    this.u4d_1 = b;
    this.v4d_1 = c;
    this.w4d_1 = d;
    this.x4d_1 = e;
    this.y4d_1 = f;
    if ((((((isNaN_0(this.t4d_1) ? true : isNaN_0(this.u4d_1)) ? true : isNaN_0(this.v4d_1)) ? true : isNaN_0(this.w4d_1)) ? true : isNaN_0(this.x4d_1)) ? true : isNaN_0(this.y4d_1)) ? true : isNaN_0(this.s4d_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.w4d_1 >= 0.0 ? this.w4d_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.w4d_1));
    }
    if (this.w4d_1 === 0.0 ? this.t4d_1 === 0.0 ? true : this.s4d_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.w4d_1 >= 1.0 ? this.v4d_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.t4d_1 === 0.0 ? true : this.s4d_1 === 0.0) ? this.v4d_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.v4d_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.t4d_1 < 0.0 ? true : this.s4d_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.s4d_1 + ', a=' + this.t4d_1 + ', b=' + this.u4d_1 + ', c=' + this.v4d_1 + ', d=' + this.w4d_1 + ', e=' + this.x4d_1 + ', f=' + this.y4d_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.s4d_1);
    result = imul(result, 31) + getNumberHashCode(this.t4d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u4d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v4d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w4d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.x4d_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y4d_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.s4d_1, tmp0_other_with_cast.s4d_1))
      return false;
    if (!equals(this.t4d_1, tmp0_other_with_cast.t4d_1))
      return false;
    if (!equals(this.u4d_1, tmp0_other_with_cast.u4d_1))
      return false;
    if (!equals(this.v4d_1, tmp0_other_with_cast.v4d_1))
      return false;
    if (!equals(this.w4d_1, tmp0_other_with_cast.w4d_1))
      return false;
    if (!equals(this.x4d_1, tmp0_other_with_cast.x4d_1))
      return false;
    if (!equals(this.y4d_1, tmp0_other_with_cast.y4d_1))
      return false;
    return true;
  };
  function WhitePoint(x, y) {
    this.a4c_1 = x;
    this.b4c_1 = y;
  }
  protoOf(WhitePoint).c4c = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.a4c_1 / this.b4c_1, 1.0, (1.0 - this.a4c_1 - this.b4c_1) / this.b4c_1]);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.a4c_1 + ', y=' + this.b4c_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.a4c_1);
    result = imul(result, 31) + getNumberHashCode(this.b4c_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.a4c_1, tmp0_other_with_cast.a4c_1))
      return false;
    if (!equals(this.b4c_1, tmp0_other_with_cast.b4c_1))
      return false;
    return true;
  };
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_28().z45_1, id);
  }
  protoOf(Xyz).u45 = function (component) {
    return -2.0;
  };
  protoOf(Xyz).v45 = function (component) {
    return 2.0;
  };
  protoOf(Xyz).m4b = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  protoOf(Xyz).n4b = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val1 = clamp(this, v0);
    var val2 = clamp(this, v1);
    var v1_0 = toLong(toBits(val1));
    var v2_0 = toLong(toBits(val2));
    return v1_0.wa(32).ab(v2_0.za(new Long(-1, 0)));
  };
  protoOf(Xyz).o4b = function (v0, v1, v2) {
    return clamp(this, v2);
  };
  protoOf(Xyz).p4b = function (x, y, z, a, colorSpace) {
    return Color_0(clamp(this, x), clamp(this, y), clamp(this, z), a, colorSpace);
  };
  protoOf(Xyz).r4b = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  function get_DefaultDensity() {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return DefaultDensity;
  }
  var DefaultDensity;
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.j4e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      this_0.l4e(Companion_getInstance_20().p49_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.j4e_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.k4e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      this_0.l4e(Companion_getInstance_20().q49_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.k4e_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp;
    if (equals(drawStyle, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (drawStyle instanceof Stroke) {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainStrokePaint($this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(this_0.g3m() === drawStyle.m4e_1)) {
          this_0.f3m(drawStyle.m4e_1);
        }
        if (!(this_0.s4e() === drawStyle.o4e_1)) {
          this_0.r4e(drawStyle.o4e_1);
        }
        if (!(this_0.u4e() === drawStyle.n4e_1)) {
          this_0.t4e(drawStyle.n4e_1);
        }
        if (!(this_0.w4e() === drawStyle.p4e_1)) {
          this_0.v4e(drawStyle.p4e_1);
        }
        if (!equals(this_0.y4e(), drawStyle.q4e_1)) {
          this_0.x4e(drawStyle.q4e_1);
        }
        tmp = this_0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.t41($this.m39(), this_0, alpha);
    } else if (!(this_0.y3z() === alpha)) {
      this_0.o42(alpha);
    }
    if (!equals(this_0.a4f(), colorFilter)) {
      this_0.z4e(colorFilter);
    }
    if (!(this_0.c4f() === blendMode)) {
      this_0.b4f(blendMode);
    }
    if (!(this_0.e4f() === filterQuality)) {
      this_0.d4f(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().h49_1 : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(this_0.m42(), targetColor)) {
      this_0.l42(targetColor);
    }
    if (!(this_0.n42() == null)) {
      this_0.k3m(null);
    }
    if (!equals(this_0.a4f(), colorFilter)) {
      this_0.z4e(colorFilter);
    }
    if (!(this_0.c4f() === blendMode)) {
      this_0.b4f(blendMode);
    }
    if (!(this_0.e4f() === filterQuality)) {
      this_0.d4f(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().h49_1 : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configureStrokePaint($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = obtainStrokePaint($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configureStrokePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.t41($this.m39(), this_0, alpha);
    } else if (!(this_0.y3z() === alpha)) {
      this_0.o42(alpha);
    }
    if (!equals(this_0.a4f(), colorFilter)) {
      this_0.z4e(colorFilter);
    }
    if (!(this_0.c4f() === blendMode)) {
      this_0.b4f(blendMode);
    }
    if (!(this_0.g3m() === strokeWidth)) {
      this_0.f3m(strokeWidth);
    }
    if (!(this_0.u4e() === miter)) {
      this_0.t4e(miter);
    }
    if (!(this_0.s4e() === cap)) {
      this_0.r4e(cap);
    }
    if (!(this_0.w4e() === join)) {
      this_0.v4e(join);
    }
    if (!equals(this_0.y4e(), pathEffect)) {
      this_0.x4e(pathEffect);
    }
    if (!(this_0.e4f() === filterQuality)) {
      this_0.d4f(filterQuality);
    }
    return this_0;
  }
  function configureStrokePaint$default($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().h49_1 : filterQuality;
    return configureStrokePaint($this, brush, strokeWidth, miter, cap, join, pathEffect, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? new EmptyCanvas() : canvas;
    size = size === VOID ? Companion_getInstance().j3a_1 : size;
    this.f4f_1 = density;
    this.g4f_1 = layoutDirection;
    this.h4f_1 = canvas;
    this.i4f_1 = size;
  }
  protoOf(DrawParams).ae = function () {
    return this.f4f_1;
  };
  protoOf(DrawParams).be = function () {
    return this.g4f_1;
  };
  protoOf(DrawParams).mg = function () {
    return this.h4f_1;
  };
  protoOf(DrawParams).j4f = function () {
    return this.i4f_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + this.f4f_1 + ', layoutDirection=' + this.g4f_1 + ', canvas=' + this.h4f_1 + ', size=' + new Size_0(this.i4f_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.f4f_1);
    result = imul(result, 31) + this.g4f_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.h4f_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.i4f_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.f4f_1, tmp0_other_with_cast.f4f_1))
      return false;
    if (!this.g4f_1.equals(tmp0_other_with_cast.g4f_1))
      return false;
    if (!equals(this.h4f_1, tmp0_other_with_cast.h4f_1))
      return false;
    if (!equals(this.i4f_1, tmp0_other_with_cast.i4f_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.l4f_1 = this$0;
    this.k4f_1 = asDrawTransform(this);
  }
  protoOf(CanvasDrawScope$drawContext$1).n3p = function () {
    return this.l4f_1.h4e_1.h4f_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).m4f = function (value) {
    this.l4f_1.h4e_1.i4f_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).m39 = function () {
    return this.l4f_1.h4e_1.i4f_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).n4f = function () {
    return this.k4f_1;
  };
  function CanvasDrawScope() {
    this.h4e_1 = new DrawParams();
    var tmp = this;
    tmp.i4e_1 = new CanvasDrawScope$drawContext$1(this);
    this.j4e_1 = null;
    this.k4e_1 = null;
  }
  protoOf(CanvasDrawScope).o4f = function () {
    return this.h4e_1.g4f_1;
  };
  protoOf(CanvasDrawScope).h3b = function () {
    return this.h4e_1.f4f_1.h3b();
  };
  protoOf(CanvasDrawScope).i3b = function () {
    return this.h4e_1.f4f_1.i3b();
  };
  protoOf(CanvasDrawScope).p4f = function () {
    return this.i4e_1;
  };
  protoOf(CanvasDrawScope).q4f = function (brush, start, end, strokeWidth, cap, pathEffect, alpha, colorFilter, blendMode) {
    var tmp = this.h4e_1.h4f_1;
    Companion_getInstance_36();
    return tmp.e44(start, end, configureStrokePaint$default(this, brush, strokeWidth, 4.0, cap, Companion_getInstance_25().z4a_1, pathEffect, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).o49 = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.h4e_1.h4f_1.g44(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).l49 = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.h4e_1.h4f_1.g44(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).u4f = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.h4e_1.h4f_1.k44(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).n49 = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    return this.h4e_1.h4f_1.h44(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).k49 = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    return this.h4e_1.h4f_1.h44(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).x4f = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.h4e_1.h4f_1.i44(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).j49 = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.h4e_1.h4f_1.j44(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).m49 = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.h4e_1.h4f_1.j44(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.b4g_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).m39 = function () {
    return this.b4g_1.m39();
  };
  protoOf(asDrawTransform$1).c4g = function (left, top, right, bottom) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = this.b4g_1.n3p();
    var updatedSize = Size(_Size___get_width__impl__58y75t(this.m39()) - (left + right), _Size___get_height__impl__a04p02(this.m39()) - (top + bottom));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Size___get_width__impl__58y75t(updatedSize) >= 0.0 ? _Size___get_height__impl__a04p02(updatedSize) >= 0.0 : false)) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.inset.<anonymous>.<anonymous>' call
      var message = 'Width and height must be greater than or equal to zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.b4g_1.m4f(updatedSize);
    it.u43(left, top);
  };
  protoOf(asDrawTransform$1).y43 = function (left, top, right, bottom, clipOp) {
    this.b4g_1.n3p().y43(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).c44 = function (path, clipOp) {
    this.b4g_1.n3p().c44(path, clipOp);
  };
  protoOf(asDrawTransform$1).u43 = function (left, top) {
    this.b4g_1.n3p().u43(left, top);
  };
  protoOf(asDrawTransform$1).e4g = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.b4g_1.n3p();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    this_0.u43(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    this_0.v43(scaleX, scaleY);
    this_0.u43(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
  };
  protoOf(asDrawTransform$1).f4g = function (matrix) {
    this.b4g_1.n3p().w43(matrix);
  };
  var properties_initialized_CanvasDrawScope_kt_93ztlk;
  function _init_properties_CanvasDrawScope_kt__90zepm() {
    if (!properties_initialized_CanvasDrawScope_kt_93ztlk) {
      properties_initialized_CanvasDrawScope_kt_93ztlk = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function DrawStyle() {
  }
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_23() {
    Companion_instance_25 = this;
    this.g49_1 = Companion_getInstance_11().n40_1;
    this.h49_1 = Companion_getInstance_16().z46_1;
  }
  var Companion_instance_25;
  function Companion_getInstance_35() {
    if (Companion_instance_25 == null)
      new Companion_23();
    return Companion_instance_25;
  }
  function DrawScope() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function Companion_24() {
    Companion_instance_26 = this;
    this.g4g_1 = 0.0;
    this.h4g_1 = 4.0;
    this.i4g_1 = Companion_getInstance_24().v4a_1;
    this.j4g_1 = Companion_getInstance_25().z4a_1;
  }
  var Companion_instance_26;
  function Companion_getInstance_36() {
    if (Companion_instance_26 == null)
      new Companion_24();
    return Companion_instance_26;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_36();
    width = width === VOID ? 0.0 : width;
    miter = miter === VOID ? 4.0 : miter;
    cap = cap === VOID ? Companion_getInstance_36().i4g_1 : cap;
    join = join === VOID ? Companion_getInstance_36().j4g_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.m4e_1 = width;
    this.n4e_1 = miter;
    this.o4e_1 = cap;
    this.p4e_1 = join;
    this.q4e_1 = pathEffect;
  }
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.m4e_1 === other.m4e_1))
      return false;
    if (!(this.n4e_1 === other.n4e_1))
      return false;
    if (!(this.o4e_1 === other.o4e_1))
      return false;
    if (!(this.p4e_1 === other.p4e_1))
      return false;
    if (!equals(this.q4e_1, other.q4e_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.m4e_1);
    result = imul(31, result) + getNumberHashCode(this.n4e_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.o4e_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.p4e_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.q4e_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.m4e_1 + ', miter=' + this.n4e_1 + ', cap=' + new StrokeCap(this.o4e_1) + ', join=' + new StrokeJoin(this.p4e_1) + ', pathEffect=' + this.q4e_1 + ')';
  };
  function DrawTransform() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).r43 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).s43 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).t43 = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).u43 = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).v43 = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).w43 = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).y43 = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).c44 = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).e44 = function (p1, p2, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).g44 = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).h44 = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).i44 = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).j44 = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).k44 = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  function validateSize($this, srcOffset, srcSize) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((((_IntOffset___get_x__impl__qiqr5o(srcOffset) >= 0 ? _IntOffset___get_y__impl__2avpwj(srcOffset) >= 0 : false) ? _IntSize___get_width__impl__d9yl4o(srcSize) >= 0 : false) ? _IntSize___get_height__impl__prv63b(srcSize) >= 0 : false) ? _IntSize___get_width__impl__d9yl4o(srcSize) <= $this.q4g_1.k39() : false) ? _IntSize___get_height__impl__prv63b(srcSize) <= $this.q4g_1.l39() : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return srcSize;
  }
  function BitmapPainter(image, srcOffset, srcSize) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().g3c_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.k39(), image.l39()) : srcSize;
    Painter.call(this);
    this.q4g_1 = image;
    this.r4g_1 = srcOffset;
    this.s4g_1 = srcSize;
    this.t4g_1 = Companion_getInstance_16().z46_1;
    this.u4g_1 = validateSize(this, this.r4g_1, this.s4g_1);
    this.v4g_1 = 1.0;
    this.w4g_1 = null;
  }
  protoOf(BitmapPainter).x4g = function (_this__u8e3s4) {
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = _Size___get_width__impl__58y75t(_this__u8e3s4.m39());
    var tmp = roundToInt(this_0);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = _Size___get_height__impl__a04p02(_this__u8e3s4.m39());
    var tmp$ret$1 = roundToInt(this_1);
    _this__u8e3s4.v4f(this.q4g_1, this.r4g_1, this.s4g_1, VOID, IntSize(tmp, tmp$ret$1), this.v4g_1, VOID, this.w4g_1, VOID, this.t4g_1);
  };
  protoOf(BitmapPainter).y4g = function () {
    return toSize_0(this.u4g_1);
  };
  protoOf(BitmapPainter).z4g = function (alpha) {
    this.v4g_1 = alpha;
    return true;
  };
  protoOf(BitmapPainter).a4h = function (colorFilter) {
    this.w4g_1 = colorFilter;
    return true;
  };
  protoOf(BitmapPainter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapPainter))
      return false;
    if (!equals(this.q4g_1, other.q4g_1))
      return false;
    if (!equals(this.r4g_1, other.r4g_1))
      return false;
    if (!equals(this.s4g_1, other.s4g_1))
      return false;
    if (!(this.t4g_1 === other.t4g_1))
      return false;
    return true;
  };
  protoOf(BitmapPainter).hashCode = function () {
    var result = hashCode(this.q4g_1);
    result = imul(31, result) + IntOffset__hashCode_impl_w5rrxs(this.r4g_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.s4g_1) | 0;
    result = imul(31, result) + FilterQuality__hashCode_impl_v4lpcb(this.t4g_1) | 0;
    return result;
  };
  protoOf(BitmapPainter).toString = function () {
    return 'BitmapPainter(image=' + this.q4g_1 + ', srcOffset=' + new IntOffset(this.r4g_1) + ', srcSize=' + new IntSize_0(this.s4g_1) + ', ' + ('filterQuality=' + new FilterQuality(this.t4g_1) + ')');
  };
  function obtainPaint($this) {
    var target = $this.b4h_1;
    if (target == null) {
      target = Paint();
      $this.b4h_1 = target;
    }
    return target;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.d4h_1, colorFilter)) {
      var consumedColorFilter = $this.a4h(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.b4h_1;
          if (tmp0_safe_receiver != null) {
            tmp0_safe_receiver.z4e(null);
          }
          $this.c4h_1 = false;
        } else {
          obtainPaint($this).z4e(colorFilter);
          $this.c4h_1 = true;
        }
      }
      $this.d4h_1 = colorFilter;
    }
  }
  function configureAlpha($this, alpha) {
    if (!($this.e4h_1 === alpha)) {
      var consumed = $this.z4g(alpha);
      if (!consumed) {
        if (alpha === get_DefaultAlpha()) {
          var tmp0_safe_receiver = $this.b4h_1;
          if (tmp0_safe_receiver != null) {
            tmp0_safe_receiver.o42(alpha);
          }
          $this.c4h_1 = false;
        } else {
          obtainPaint($this).o42(alpha);
          $this.c4h_1 = true;
        }
      }
      $this.e4h_1 = alpha;
    }
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.f4h_1.equals(rtl)) {
      $this.h4h(rtl);
      $this.f4h_1 = rtl;
    }
  }
  function Painter$drawLambda$lambda(this$0) {
    return function ($this$null) {
      this$0.x4g($this$null);
      return Unit_instance;
    };
  }
  function Painter() {
    this.b4h_1 = null;
    this.c4h_1 = false;
    this.d4h_1 = null;
    this.e4h_1 = get_DefaultAlpha();
    this.f4h_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.g4h_1 = Painter$drawLambda$lambda(this);
  }
  protoOf(Painter).z4g = function (alpha) {
    return false;
  };
  protoOf(Painter).a4h = function (colorFilter) {
    return false;
  };
  protoOf(Painter).h4h = function (layoutDirection) {
    return false;
  };
  protoOf(Painter).i4h = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.o4f());
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var right = _Size___get_width__impl__58y75t(_this__u8e3s4.m39()) - _Size___get_width__impl__58y75t(size);
    var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.m39()) - _Size___get_height__impl__a04p02(size);
    _this__u8e3s4.p4f().n4f().c4g(0.0, 0.0, right, bottom);
    // Inline function 'androidx.compose.ui.graphics.painter.Painter.draw.<anonymous>' call
    if ((alpha > 0.0 ? _Size___get_width__impl__58y75t(size) > 0.0 : false) ? _Size___get_height__impl__a04p02(size) > 0.0 : false) {
      if (this.c4h_1) {
        var layerRect = Rect(Companion_getInstance_0().z38_1, Size(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size)));
        // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
        var this_0 = _this__u8e3s4.p4f().n3p();
        var paint = obtainPaint(this);
        var tmp;
        try {
          this_0.t43(layerRect, paint);
          this.x4g(_this__u8e3s4);
          tmp = Unit_instance;
        }finally {
          this_0.s43();
        }
      } else {
        this.x4g(_this__u8e3s4);
      }
    }
    _this__u8e3s4.p4f().n4f().c4g(-0.0, -0.0, -right, -bottom);
  };
  function FloatResult(value, isValid) {
    var tmp;
    if (value === VOID) {
      tmp = NaN;
    } else {
      tmp = value;
    }
    value = tmp;
    isValid = isValid === VOID ? false : isValid;
    this.j4h_1 = value;
    this.k4h_1 = isValid;
  }
  function Companion_25() {
    Companion_instance_27 = this;
    this.l4h_1 = -10;
    this.m4h_1 = 10;
    this.n4h_1 = -325;
    this.o4h_1 = 1024;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.p4h_1 = new Float32Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
    var tmp_0 = this;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp_0.q4h_1 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(2118029704, -1513171909)), _ULong___init__impl__c78o9k(new Long(1573795306, -817723062)), _ULong___init__impl__c78o9k(new Long(2057363890, -2121689650)), _ULong___init__impl__c78o9k(new Long(424221215, -1578370238)), _ULong___init__impl__c78o9k(new Long(-1617207130, -899220974)), _ULong___init__impl__c78o9k(new Long(1199716560, -50284393)), _ULong___init__impl__c78o9k(new Long(-1934531710, -1642040482)), _ULong___init__impl__c78o9k(new Long(803060834, -978808778)), _ULong___init__impl__c78o9k(new Long(-1143657605, -149769149)), _ULong___init__impl__c78o9k(new Long(1432697645, -1704218454)), _ULong___init__impl__c78o9k(new Long(-356611592, -1056531244)), _ULong___init__impl__c78o9k(new Long(627977334, -246922230)), _ULong___init__impl__c78o9k(new Long(1466227658, -1764939130)), _ULong___init__impl__c78o9k(new Long(-314699076, -1132432089)), _ULong___init__impl__c78o9k(new Long(-393373845, -341798287)), _ULong___init__impl__c78o9k(new Long(827883171, -1824236665)), _ULong___init__impl__c78o9k(new Long(-38887860, -1206554008)), _ULong___init__impl__c78o9k(new Long(1025131999, -434450685)), _ULong___init__impl__c78o9k(new Long(103836587, -1882144414)), _ULong___init__impl__c78o9k(new Long(-2017687914, -1278938694)), _ULong___init__impl__c78o9k(new Long(699115580, -524931543)), _ULong___init__impl__c78o9k(new Long(-1173665499, -1938694951)), _ULong___init__impl__c78o9k(new Long(680401775, -1349626864)), _ULong___init__impl__c78o9k(new Long(850502218, -613291756)), _ULong___init__impl__c78o9k(new Long(-1615919762, -1993920084)), _ULong___init__impl__c78o9k(new Long(-946157878, -1418658281)), _ULong___init__impl__c78o9k(new Long(-1182697347, -699581027)), _ULong___init__impl__c78o9k(new Long(-1812927666, -2047850878)), _ULong___init__impl__c78o9k(new Long(955065889, -1486071773)), _ULong___init__impl__c78o9k(new Long(120090538, -783847892)), _ULong___init__impl__c78o9k(new Long(-2072427062, -2100517669)), _ULong___init__impl__c78o9k(new Long(1704433468, -1551905262)), _ULong___init__impl__c78o9k(new Long(-16941812, -866139754)), _ULong___init__impl__c78o9k(new Long(-1094919089, -8932868)), _ULong___init__impl__c78o9k(new Long(-147453519, -1616195779)), _ULong___init__impl__c78o9k(new Long(1963166749, -946502899)), _ULong___init__impl__c78o9k(new Long(-767267035, -109386800)), _ULong___init__impl__c78o9k(new Long(-2090154633, -1678979486)), _ULong___init__impl__c78o9k(new Long(608532181, -1024982533)), _ULong___init__impl__c78o9k(new Long(-313076598, -207486343)), _ULong___init__impl__c78o9k(new Long(878068950, -1740291700)), _ULong___init__impl__c78o9k(new Long(1097586188, -1101622801)), _ULong___init__impl__c78o9k(new Long(298240911, -303286677)), _ULong___init__impl__c78o9k(new Long(-350470343, -1800166910)), _ULong___init__impl__c78o9k(new Long(-1511829753, -1176466813)), _ULong___init__impl__c78o9k(new Long(-1889787191, -396841692)), _ULong___init__impl__c78o9k(new Long(-644246082, -1858638794)), _ULong___init__impl__c78o9k(new Long(-1879049427, -1249556668)), _ULong___init__impl__c78o9k(new Long(-1275069959, -488204011)), _ULong___init__impl__c78o9k(new Long(-1870660549, -1915740243)), _ULong___init__impl__c78o9k(new Long(-190842038, -1320933480)), _ULong___init__impl__c78o9k(new Long(835189277, -577425025)), _ULong___init__impl__c78o9k(new Long(2132606034, -1971503377)), _ULong___init__impl__c78o9k(new Long(1592015718, -1390637397)), _ULong___init__impl__c78o9k(new Long(916277824, -664554922)), _ULong___init__impl__c78o9k(new Long(-501068184, -2025959563)), _ULong___init__impl__c78o9k(new Long(1521148418, -1458707629)), _ULong___init__impl__c78o9k(new Long(827693699, -749642712)), _ULong___init__impl__c78o9k(new Long(517308561, -2079139431)), _ULong___init__impl__c78o9k(new Long(1720377526, -1525182465)), _ULong___init__impl__c78o9k(new Long(1076730083, -832736257)), _ULong___init__impl__c78o9k(new Long(-2011398258, -2131072897)), _ULong___init__impl__c78o9k(new Long(1780719474, -1590099297)), _ULong___init__impl__c78o9k(new Long(1152157518, -913882297)), _ULong___init__impl__c78o9k(new Long(366455074, -68611047)), _ULong___init__impl__c78o9k(new Long(-1381578315, -1653494641)), _ULong___init__impl__c78o9k(new Long(-1726972894, -993126477)), _ULong___init__impl__c78o9k(new Long(2136251179, -167666272)), _ULong___init__impl__c78o9k(new Long(1335156987, -1715404156)), _ULong___init__impl__c78o9k(new Long(1668946233, -1070513371)), _ULong___init__impl__c78o9k(new Long(-1135042680, -264399890)), _ULong___init__impl__c78o9k(new Long(901211061, -1775862667)), _ULong___init__impl__c78o9k(new Long(-2094711646, -1146086510)), _ULong___init__impl__c78o9k(new Long(602835915, -358866313)), _ULong___init__impl__c78o9k(new Long(1987385183, -1834904182)), _ULong___init__impl__c78o9k(new Long(336747830, -1219888403)), _ULong___init__impl__c78o9k(new Long(1494676612, -451118680)), _ULong___init__impl__c78o9k(new Long(934172882, -1892561911)), _ULong___init__impl__c78o9k(new Long(-2053509369, -1291960565)), _ULong___init__impl__c78o9k(new Long(1728080585, -541208882)), _ULong___init__impl__c78o9k(new Long(6308541, -1948868287)), _ULong___init__impl__c78o9k(new Long(1081627501, -1362343535)), _ULong___init__impl__c78o9k(new Long(-1869191096, -629187595)), _ULong___init__impl__c78o9k(new Long(2052981037, -2003854983)), _ULong___init__impl__c78o9k(new Long(-654999176, -1431076905)), _ULong___init__impl__c78o9k(new Long(-818748970, -715104307)), _ULong___init__impl__c78o9k(new Long(-1585459930, -2057552928)), _ULong___init__impl__c78o9k(new Long(-908083089, -1498199336)), _ULong___init__impl__c78o9k(new Long(-61362037, -799007346)), _ULong___init__impl__c78o9k(new Long(1572261463, -2109992327)), _ULong___init__impl__c78o9k(new Long(-1255898643, -1563748585)), _ULong___init__impl__c78o9k(new Long(-1569873304, -880943907)), _ULong___init__impl__c78o9k(new Long(185142018, -27438059)), _ULong___init__impl__c78o9k(new Long(652584673, -1627761523)), _ULong___init__impl__c78o9k(new Long(1889472666, -960960080)), _ULong___init__impl__c78o9k(new Long(-1933126464, -127458276)), _ULong___init__impl__c78o9k(new Long(-671333128, -1690274159)), _ULong___init__impl__c78o9k(new Long(1308317238, -1039100874)), _ULong___init__impl__c78o9k(new Long(-512087100, -225134269)), _ULong___init__impl__c78o9k(new Long(1827429210, -1751321654)), _ULong___init__impl__c78o9k(new Long(136802865, -1115410243)), _ULong___init__impl__c78o9k(new Long(1244745405, -320520980)), _ULong___init__impl__c78o9k(new Long(-1369517770, -1810938349)), _ULong___init__impl__c78o9k(new Long(-1711897212, -1189931112)), _ULong___init__impl__c78o9k(new Long(-1066129691, -413672066)), _ULong___init__impl__c78o9k(new Long(944281679, -1869157777)), _ULong___init__impl__c78o9k(new Long(106610275, -1262705397)), _ULong___init__impl__c78o9k(new Long(-940478981, -504639923)), _ULong___init__impl__c78o9k(new Long(-1661541187, -1926012688)), _ULong___init__impl__c78o9k(new Long(-1003184660, -1333774036)), _ULong___init__impl__c78o9k(new Long(-180239001, -593475721)), _ULong___init__impl__c78o9k(new Long(-112649376, -1981535062)), _ULong___init__impl__c78o9k(new Long(-1214553543, -1403177003)), _ULong___init__impl__c78o9k(new Long(629291719, -680229429)), _ULong___init__impl__c78o9k(new Long(-143563588, -2035756130)), _ULong___init__impl__c78o9k(new Long(-1253196309, -1470953338)), _ULong___init__impl__c78o9k(new Long(1654730086, -764949848)), _ULong___init__impl__c78o9k(new Long(1034206304, -2088706391)), _ULong___init__impl__c78o9k(new Long(-1928467592, -1537141165)), _ULong___init__impl__c78o9k(new Long(1884382806, -847684632)), _ULong___init__impl__c78o9k(new Long(1177739254, -2140415631)), _ULong___init__impl__c78o9k(new Long(-1749051405, -1601777715)), _ULong___init__impl__c78o9k(new Long(-38830608, -928480320)), _ULong___init__impl__c78o9k(new Long(1025203564, -86858575)), _ULong___init__impl__c78o9k(new Long(-969860509, -1664899346)), _ULong___init__impl__c78o9k(new Long(2008899836, -1007382358)), _ULong___init__impl__c78o9k(new Long(363641147, -185486123)), _ULong___init__impl__c78o9k(new Long(764146629, -1726541563)), _ULong___init__impl__c78o9k(new Long(2028925110, -1084435130)), _ULong___init__impl__c78o9k(new Long(388672740, -281802088)), _ULong___init__impl__c78o9k(new Long(242920462, -1786739041)), _ULong___init__impl__c78o9k(new Long(-770091246, -1159681978)), _ULong___init__impl__c78o9k(new Long(-2036355881, -375860648)), _ULong___init__impl__c78o9k(new Long(1411632134, -1845525641)), _ULong___init__impl__c78o9k(new Long(690798344, -1233165227)), _ULong___init__impl__c78o9k(new Long(1937239754, -467714710)), _ULong___init__impl__c78o9k(new Long(-2010450626, -1902934430)), _ULong___init__impl__c78o9k(new Long(708162189, -1304926213)), _ULong___init__impl__c78o9k(new Long(-188539087, -557415943)), _ULong___init__impl__c78o9k(new Long(955904894, -1958997700)), _ULong___init__impl__c78o9k(new Long(1194881118, -1375005301)), _ULong___init__impl__c78o9k(new Long(419859574, -645014802)), _ULong___init__impl__c78o9k(new Long(-811329591, -2013746988)), _ULong___init__impl__c78o9k(new Long(59579836, -1443441910)), _ULong___init__impl__c78o9k(new Long(-2073008853, -730560564)), _ULong___init__impl__c78o9k(new Long(-758759621, -2067213089)), _ULong___init__impl__c78o9k(new Long(-948449527, -1510274537)), _ULong___init__impl__c78o9k(new Long(-1185561908, -814101347)), _ULong___init__impl__c78o9k(new Long(-1814718017, -2119426078)), _ULong___init__impl__c78o9k(new Long(952827951, -1575540773)), _ULong___init__impl__c78o9k(new Long(117293115, -895684142)), _ULong___init__impl__c78o9k(new Long(-2000867254, -45863354)), _ULong___init__impl__c78o9k(new Long(360070702, -1639277332)), _ULong___init__impl__c78o9k(new Long(450088378, -975354841)), _ULong___init__impl__c78o9k(new Long(-511131352, -145451728)), _ULong___init__impl__c78o9k(new Long(-1930069831, -1701520066)), _ULong___init__impl__c78o9k(new Long(808638183, -1053158258)), _ULong___init__impl__c78o9k(new Long(-1136685919, -242705999)), _ULong___init__impl__c78o9k(new Long(363313125, -1762303985)), _ULong___init__impl__c78o9k(new Long(-619600418, -1129138158)), _ULong___init__impl__c78o9k(new Long(-1848242346, -337680873)), _ULong___init__impl__c78o9k(new Long(-1155151467, -1821663282)), _ULong___init__impl__c78o9k(new Long(1777286139, -1203337278)), _ULong___init__impl__c78o9k(new Long(74124026, -430429773)), _ULong___init__impl__c78o9k(new Long(-490543396, -1879631345)), _ULong___init__impl__c78o9k(new Long(-613179245, -1275797357)), _ULong___init__impl__c78o9k(new Long(-766474056, -521004872)), _ULong___init__impl__c78o9k(new Long(-2089659021, -1936240781)), _ULong___init__impl__c78o9k(new Long(1682893519, -1346559152)), _ULong___init__impl__c78o9k(new Long(2103616899, -609457116)), _ULong___init__impl__c78o9k(new Long(-832723086, -1991523434)), _ULong___init__impl__c78o9k(new Long(-2114645681, -1415662468)), _ULong___init__impl__c78o9k(new Long(-1569565278, -695836261)), _ULong___init__impl__c78o9k(new Long(1166505349, -2045510399)), _ULong___init__impl__c78o9k(new Long(-1763093785, -1483146175)), _ULong___init__impl__c78o9k(new Long(-56383584, -780190895)), _ULong___init__impl__c78o9k(new Long(1038502084, -2098232045)), _ULong___init__impl__c78o9k(new Long(224385781, -1549048232)), _ULong___init__impl__c78o9k(new Long(280482227, -862568466)), _ULong___init__impl__c78o9k(new Long(-1796880865, -4468759)), _ULong___init__impl__c78o9k(new Long(-49308717, -1613405711)), _ULong___init__impl__c78o9k(new Long(2085847752, -943015314)), _ULong___init__impl__c78o9k(new Long(459826043, -105027318)), _ULong___init__impl__c78o9k(new Long(1361133101, -1676254810)), _ULong___init__impl__c78o9k(new Long(-446067272, -1021576689)), _ULong___init__impl__c78o9k(new Long(-557584090, -203229037)), _ULong___init__impl__c78o9k(new Long(1798993591, -1737630884)), _ULong___init__impl__c78o9k(new Long(-2046225307, -1098296781)), _ULong___init__impl__c78o9k(new Long(1737185663, -299129152)), _ULong___init__impl__c78o9k(new Long(1085741039, -1797568456)), _ULong___init__impl__c78o9k(new Long(1357176299, -1173218746)), _ULong___init__impl__c78o9k(new Long(-451013274, -392781609)), _ULong___init__impl__c78o9k(new Long(-281883296, -1856101242)), _ULong___init__impl__c78o9k(new Long(-1426095944, -1246384728)), _ULong___init__impl__c78o9k(new Long(-708878106, -484239086)), _ULong___init__impl__c78o9k(new Long(-979919729, -1913262165)), _ULong___init__impl__c78o9k(new Long(-1224899661, -1317835882)), _ULong___init__impl__c78o9k(new Long(1690100896, -573553028)), _ULong___init__impl__c78o9k(new Long(-1091170588, -1969083379)), _ULong___init__impl__c78o9k(new Long(783520413, -1387612399)), _ULong___init__impl__c78o9k(new Long(2053142340, -660773675)), _ULong___init__impl__c78o9k(new Long(1820084875, -2023596283)), _ULong___init__impl__c78o9k(new Long(-946119379, -1455753530)), _ULong___init__impl__c78o9k(new Long(2038576249, -745950088)), _ULong___init__impl__c78o9k(new Long(1274110155, -2076831541)), _ULong___init__impl__c78o9k(new Long(518895870, -1522297602)), _ULong___init__impl__c78o9k(new Long(-1498863810, -829130179)), _ULong___init__impl__c78o9k(new Long(-2010531705, -2128819098)), _ULong___init__impl__c78o9k(new Long(708060840, -1587282048)), _ULong___init__impl__c78o9k(new Long(885076050, -910360736)), _ULong___init__impl__c78o9k(new Long(1106345063, -64209096)), _ULong___init__impl__c78o9k(new Long(691465664, -1650743421)), _ULong___init__impl__c78o9k(new Long(-209409743, -989687453)), _ULong___init__impl__c78o9k(new Long(-261762179, -163367492)), _ULong___init__impl__c78o9k(new Long(373269550, -1712717418)), _ULong___init__impl__c78o9k(new Long(-1680896711, -1067154949)), _ULong___init__impl__c78o9k(new Long(-2101120888, -260201862)), _ULong___init__impl__c78o9k(new Long(-1850071467, -1773238900)), _ULong___init__impl__c78o9k(new Long(-1238847510, -1142806801)), _ULong___init__impl__c78o9k(new Long(-1548559387, -354766677)), _ULong___init__impl__c78o9k(new Long(1179634031, -1832341909)), _ULong___init__impl__c78o9k(new Long(400800715, -1216685562)), _ULong___init__impl__c78o9k(new Long(-1646482755, -447115129)), _ULong___init__impl__c78o9k(new Long(-1029051722, -1890059692)), _ULong___init__impl__c78o9k(new Long(-212572828, -1288832791)), _ULong___init__impl__c78o9k(new Long(1881767613, -537299164)), _ULong___init__impl__c78o9k(new Long(-971378890, -1946424714)), _ULong___init__impl__c78o9k(new Long(2007001859, -1359289068)), _ULong___init__impl__c78o9k(new Long(-1786214972, -625369511)), _ULong___init__impl__c78o9k(new Long(-42642533, -2001468681)), _ULong___init__impl__c78o9k(new Long(-53303167, -1428094027)), _ULong___init__impl__c78o9k(new Long(2080854690, -711375709)), _ULong___init__impl__c78o9k(new Long(763663269, -2055222554)), _ULong___init__impl__c78o9k(new Long(-1192904562, -1495286369)), _ULong___init__impl__c78o9k(new Long(-1491130702, -795366137)), _ULong___init__impl__c78o9k(new Long(-931956689, -2107716572)), _ULong___init__impl__c78o9k(new Long(-91204037, -1560903891)), _ULong___init__impl__c78o9k(new Long(2033478602, -877388039)), _ULong___init__impl__c78o9k(new Long(-679377220, -22993225)), _ULong___init__impl__c78o9k(new Long(-424610762, -1624983502)), _ULong___init__impl__c78o9k(new Long(-1604505277, -957487553)), _ULong___init__impl__c78o9k(new Long(-2005631596, -123117617)), _ULong___init__impl__c78o9k(new Long(-1253519748, -1687561247)), _ULong___init__impl__c78o9k(new Long(580583963, -1035709734)), _ULong___init__impl__c78o9k(new Long(-1421753694, -220895344)), _ULong___init__impl__c78o9k(new Long(1795758501, -1748672326)), _ULong___init__impl__c78o9k(new Long(97214479, -1112098583)), _ULong___init__impl__c78o9k(new Long(1195259923, -316381405)), _ULong___init__impl__c78o9k(new Long(210166539, -1808351114)), _ULong___init__impl__c78o9k(new Long(-1884775474, -1186697069)), _ULong___init__impl__c78o9k(new Long(1938997954, -409629512)), _ULong___init__impl__c78o9k(new Long(1211873721, -1866631181)), _ULong___init__impl__c78o9k(new Long(441100328, -1259547152)), _ULong___init__impl__c78o9k(new Long(551375410, -500692116)), _ULong___init__impl__c78o9k(new Long(-1802874017, -1923545309)), _ULong___init__impl__c78o9k(new Long(2041374775, -1330689812)), _ULong___init__impl__c78o9k(new Long(-1743248828, -589620441)), _ULong___init__impl__c78o9k(new Long(-1089530517, -1979125512)), _ULong___init__impl__c78o9k(new Long(-288171323, -1400165066)), _ULong___init__impl__c78o9k(new Long(-1433955977, -676464508)), _ULong___init__impl__c78o9k(new Long(-359351574, -2033403054)), _ULong___init__impl__c78o9k(new Long(-1522931291, -1468011993)), _ULong___init__impl__c78o9k(new Long(-1903664114, -761273167)), _ULong___init__impl__c78o9k(new Long(-116048247, -2086408466)), _ULong___init__impl__c78o9k(new Long(-1218802133, -1534268758)), _ULong___init__impl__c78o9k(new Long(1697722806, -844094123)), _ULong___init__impl__c78o9k(new Long(1597947665, -2138171563)), _ULong___init__impl__c78o9k(new Long(-1223790890, -1598972630)), _ULong___init__impl__c78o9k(new Long(1691486859, -924973963)), _ULong___init__impl__c78o9k(new Long(-1106866898, -82475630)), _ULong___init__impl__c78o9k(new Long(-1228662723, -1662160005)), _ULong___init__impl__c78o9k(new Long(-1535828404, -1003958182)), _ULong___init__impl__c78o9k(new Long(1301439967, -181205903)), _ULong___init__impl__c78o9k(new Long(-797212757, -1723866426)), _ULong___init__impl__c78o9k(new Long(-2070257770, -1081091208)), _ULong___init__impl__c78o9k(new Long(-1514080388, -277622186)), _ULong___init__impl__c78o9k(new Long(664312493, -1784126602)), _ULong___init__impl__c78o9k(new Long(-1317093031, -1156416429)), _ULong___init__impl__c78o9k(new Long(-1646366289, -371778712)), _ULong___init__impl__c78o9k(new Long(1655375629, -1842974431)), _ULong___init__impl__c78o9k(new Long(-1152005935, -1229976215)), _ULong___init__impl__c78o9k(new Long(707476229, -463728444)), _ULong___init__impl__c78o9k(new Long(-1705311005, -1900443014)), _ULong___init__impl__c78o9k(new Long(1089586716, -1301811943)), _ULong___init__impl__c78o9k(new Long(-1859242077, -553523105)), _ULong___init__impl__c78o9k(new Long(-1162026298, -1956564677)), _ULong___init__impl__c78o9k(new Long(-1452532873, -1371964022)), _ULong___init__impl__c78o9k(new Long(1405559381, -641213203)), _ULong___init__impl__c78o9k(new Long(1415345525, -2011370988)), _ULong___init__impl__c78o9k(new Long(1769181906, -1440471911)), _ULong___init__impl__c78o9k(new Long(-1009748089, -726848065)), _ULong___init__impl__c78o9k(new Long(-631092556, -2064892777)), _ULong___init__impl__c78o9k(new Long(-788865695, -1507374147)), _ULong___init__impl__c78o9k(new Long(1161401530, -810475859)), _ULong___init__impl__c78o9k(new Long(1262746868, -2117160148)), _ULong___init__impl__c78o9k(new Long(1578433585, -1572708361)), _ULong___init__impl__c78o9k(new Long(899300158, -892143627)), _ULong___init__impl__c78o9k(new Long(-2097100275, -41437710)), _ULong___init__impl__c78o9k(new Long(-1847558584, -1636511305)), _ULong___init__impl__c78o9k(new Long(1985519066, -971897307)), _ULong___init__impl__c78o9k(new Long(-739326639, -141129810)), _ULong___init__impl__c78o9k(new Long(1148533586, -1698818867)), _ULong___init__impl__c78o9k(new Long(-1785558489, -1049781760)), _ULong___init__impl__c78o9k(new Long(-1158206287, -238485376)), _ULong___init__impl__c78o9k(new Long(1960475630, -1759666096)), _ULong___init__impl__c78o9k(new Long(-1844372758, -1125840796)), _ULong___init__impl__c78o9k(new Long(-1231724123, -333559171)), _ULong___init__impl__c78o9k(new Long(-1843569401, -1819087218)), _ULong___init__impl__c78o9k(new Long(916763721, -1200117198)), _ULong___init__impl__c78o9k(new Long(-1001528997, -426404674)), _ULong___init__impl__c78o9k(new Long(984657113, -1877115657)), _ULong___init__impl__c78o9k(new Long(157079567, -1272652747)), _ULong___init__impl__c78o9k(new Long(1270091283, -517074110)), _ULong___init__impl__c78o9k(new Long(1867548875, -1933784055)), _ULong___init__impl__c78o9k(new Long(-886789378, -1343488245)), _ULong___init__impl__c78o9k(new Long(-1108486722, -605618482)), _ULong___init__impl__c78o9k(new Long(917808535, -1989124287)), _ULong___init__impl__c78o9k(new Long(-2073964804, -1412663535)), _ULong___init__impl__c78o9k(new Long(-444972356, -692087595)), _ULong___init__impl__c78o9k(new Long(-1351849547, -2043167483)), _ULong___init__impl__c78o9k(new Long(457671715, -1480217529)), _ULong___init__impl__c78o9k(new Long(-501652181, -776530088)), _ULong___init__impl__c78o9k(new Long(-1924145349, -2095944041)), _ULong___init__impl__c78o9k(new Long(1889785610, -1546188227)), _ULong___init__impl__c78o9k(new Long(-858993460, -858993460)), _ULong___init__impl__c78o9k(new Long(0, -2147483648)), _ULong___init__impl__c78o9k(new Long(0, -1610612736)), _ULong___init__impl__c78o9k(new Long(0, -939524096)), _ULong___init__impl__c78o9k(new Long(0, -100663296)), _ULong___init__impl__c78o9k(new Long(0, -1673527296)), _ULong___init__impl__c78o9k(new Long(0, -1018167296)), _ULong___init__impl__c78o9k(new Long(0, -198967296)), _ULong___init__impl__c78o9k(new Long(0, -1734967296)), _ULong___init__impl__c78o9k(new Long(0, -1094967296)), _ULong___init__impl__c78o9k(new Long(0, -294967296)), _ULong___init__impl__c78o9k(new Long(0, -1794967296)), _ULong___init__impl__c78o9k(new Long(0, -1169967296)), _ULong___init__impl__c78o9k(new Long(0, -388717296)), _ULong___init__impl__c78o9k(new Long(0, -1853561046)), _ULong___init__impl__c78o9k(new Long(-2147483648, -1243209484)), _ULong___init__impl__c78o9k(new Long(-1610612736, -480270031)), _ULong___init__impl__c78o9k(new Long(67108864, -1910781505)), _ULong___init__impl__c78o9k(new Long(-989855744, -1314735058)), _ULong___init__impl__c78o9k(new Long(1983905792, -569676998)), _ULong___init__impl__c78o9k(new Long(-1981284352, -1966660860)), _ULong___init__impl__c78o9k(new Long(-1402863616, -1384584251)), _ULong___init__impl__c78o9k(new Long(393904128, -656988489)), _ULong___init__impl__c78o9k(new Long(1856802816, -2021230542)), _ULong___init__impl__c78o9k(new Long(173519872, -1452796353)), _ULong___init__impl__c78o9k(new Long(-856841984, -742253618)), _ULong___init__impl__c78o9k(new Long(1075086496, -2074521247)), _ULong___init__impl__c78o9k(new Long(-1877367352, -1519409735)), _ULong___init__impl__c78o9k(new Long(-199225542, -825520345)), _ULong___init__impl__c78o9k(new Long(-124515964, -2126562952)), _ULong___init__impl__c78o9k(new Long(918096869, -1584461865)), _ULong___init__impl__c78o9k(new Long(73879262, -906835507)), _ULong___init__impl__c78o9k(new Long(1166090902, -59802560)), _ULong___init__impl__c78o9k(new Long(728806813, -1647989336)), _ULong___init__impl__c78o9k(new Long(911008517, -986244846)), _ULong___init__impl__c78o9k(new Long(-1008723002, -159064234)), _ULong___init__impl__c78o9k(new Long(980160860, -1710027882)), _ULong___init__impl__c78o9k(new Long(-922282573, -1063793029)), _ULong___init__impl__c78o9k(new Long(-1152853216, -255999462)), _ULong___init__impl__c78o9k(new Long(-1257404172, -1770612400)), _ULong___init__impl__c78o9k(new Long(-498013391, -1139523676)), _ULong___init__impl__c78o9k(new Long(451225085, -350662770)), _ULong___init__impl__c78o9k(new Long(-791726146, -1829776968)), _ULong___init__impl__c78o9k(new Long(84084141, -1213479385)), _ULong___init__impl__c78o9k(new Long(-968636647, -443107408)), _ULong___init__impl__c78o9k(new Long(2078956655, -1887554866)), _ULong___init__impl__c78o9k(new Long(451212171, -1285701758)), _ULong___init__impl__c78o9k(new Long(-1583468434, -533385374)), _ULong___init__impl__c78o9k(new Long(-1526538683, -1943978595)), _ULong___init__impl__c78o9k(new Long(239310294, -1356231419)), _ULong___init__impl__c78o9k(new Long(1372879692, -621547450)), _ULong___init__impl__c78o9k(new Long(-215692017, -1999079893)), _ULong___init__impl__c78o9k(new Long(-269615021, -1425108042)), _ULong___init__impl__c78o9k(new Long(-1410760600, -707643228)), _ULong___init__impl__c78o9k(new Long(-344854463, -2052889754)), _ULong___init__impl__c78o9k(new Long(-1504809903, -1492370368)), _ULong___init__impl__c78o9k(new Long(-807270555, -791721136)), _ULong___init__impl__c78o9k(new Long(-2115156833, -2105438446)), _ULong___init__impl__c78o9k(new Long(577279431, -1558056233)), _ULong___init__impl__c78o9k(new Long(-352142535, -873828468)), _ULong___init__impl__c78o9k(new Long(633563656, -18543760)), _ULong___init__impl__c78o9k(new Long(395977285, -1622202586)), _ULong___init__impl__c78o9k(new Long(-1652512042, -954011409)), _ULong___init__impl__c78o9k(new Long(-2065640053, -118772437)), _ULong___init__impl__c78o9k(new Long(856458615, -1684845509)), _ULong___init__impl__c78o9k(new Long(-3168555, -1032315063)), _ULong___init__impl__c78o9k(new Long(2143522954, -216652004)), _ULong___init__impl__c78o9k(new Long(-807781802, -1746020239)), _ULong___init__impl__c78o9k(new Long(1137756396, -1108783474)), _ULong___init__impl__c78o9k(new Long(-725288153, -312237519)), _ULong___init__impl__c78o9k(new Long(620436728, -1805761185)), _ULong___init__impl__c78o9k(new Long(-298195914, -1183459658)), _ULong___init__impl__c78o9k(new Long(-1446486716, -405582748)), _ULong___init__impl__c78o9k(new Long(-367183286, -1864101954)), _ULong___init__impl__c78o9k(new Long(-1532720931, -1256385618)), _ULong___init__impl__c78o9k(new Long(1305324308, -496740198)), _ULong___init__impl__c78o9k(new Long(1889569516, -1921075360)), _ULong___init__impl__c78o9k(new Long(-1933005400, -1327602376)), _ULong___init__impl__c78o9k(new Long(-1342514926, -585761146)), _ULong___init__impl__c78o9k(new Long(771540907, -1976713452)), _ULong___init__impl__c78o9k(new Long(964426134, -1397149991)), _ULong___init__impl__c78o9k(new Long(-2015692805, -672695665)), _ULong___init__impl__c78o9k(new Long(-1259808003, -2031047527)), _ULong___init__impl__c78o9k(new Long(572723644, -1465067584)), _ULong___init__impl__c78o9k(new Long(715904555, -757592656)), _ULong___init__impl__c78o9k(new Long(447440347, -2084108146)), _ULong___init__impl__c78o9k(new Long(-1588183214, -1531393359)), _ULong___init__impl__c78o9k(new Long(162254630, -840499874)), _ULong___init__impl__c78o9k(new Long(-972332680, -2135925158)), _ULong___init__impl__c78o9k(new Long(2005809622, -1596164623)), _ULong___init__impl__c78o9k(new Long(-713963444, -921463955)), _ULong___init__impl__c78o9k(new Long(1255029343, -78088119)), _ULong___init__impl__c78o9k(new Long(-826219397, -1659417811)), _ULong___init__impl__c78o9k(new Long(1114709402, -1000530439)), _ULong___init__impl__c78o9k(new Long(-1827838720, -176921225)), _ULong___init__impl__c78o9k(new Long(-1142399200, -1721188502)), _ULong___init__impl__c78o9k(new Long(1793226472, -1077743803)), _ULong___init__impl__c78o9k(new Long(-979692382, -273437930)), _ULong___init__impl__c78o9k(new Long(998304997, -1781511442)), _ULong___init__impl__c78o9k(new Long(-899602401, -1153147479)), _ULong___init__impl__c78o9k(new Long(1022980646, -367692524)), _ULong___init__impl__c78o9k(new Long(-1508120744, -1840420564)), _ULong___init__impl__c78o9k(new Long(-811409106, -1226783881)), _ULong___init__impl__c78o9k(new Long(-1014261382, -459738027)), _ULong___init__impl__c78o9k(new Long(-1707655188, -1897949003)), _ULong___init__impl__c78o9k(new Long(12914663, -1298694429)), _ULong___init__impl__c78o9k(new Long(-1057598495, -549626213)), _ULong___init__impl__c78o9k(new Long(1486484588, -1954129119)), _ULong___init__impl__c78o9k(new Long(-1363119737, -1368919575)), _ULong___init__impl__c78o9k(new Long(443583977, -637407644)), _ULong___init__impl__c78o9k(new Long(-1870243662, -2008992514)), _ULong___init__impl__c78o9k(new Long(883420894, -1437498818)), _ULong___init__impl__c78o9k(new Long(-1043207530, -723131699)), _ULong___init__impl__c78o9k(new Long(-1725746530, -2062570048)), _ULong___init__impl__c78o9k(new Long(-1083441339, -1504470736)), _ULong___init__impl__c78o9k(new Long(-280559850, -806846596)), _ULong___init__impl__c78o9k(new Long(361521006, -2114891858)), _ULong___init__impl__c78o9k(new Long(-1695582391, -1569872999)), _ULong___init__impl__c78o9k(new Long(28005660, -888599424)), _ULong___init__impl__c78o9k(new Long(35007075, -37007456)), _ULong___init__impl__c78o9k(new Long(21879422, -1633742396)), _ULong___init__impl__c78o9k(new Long(27349277, -968436171)), _ULong___init__impl__c78o9k(new Long(1107928421, -136803390)), _ULong___init__impl__c78o9k(new Long(1766197087, -1696114855)), _ULong___init__impl__c78o9k(new Long(-1013479113, -1046401745)), _ULong___init__impl__c78o9k(new Long(-1266848892, -234260357)), _ULong___init__impl__c78o9k(new Long(1355703090, -1757025459)), _ULong___init__impl__c78o9k(new Long(-1526596609, -1122540000)), _ULong___init__impl__c78o9k(new Long(-834503937, -329433176)), _ULong___init__impl__c78o9k(new Long(-2132177697, -1816508471)), _ULong___init__impl__c78o9k(new Long(-517738473, -1196893765)), _ULong___init__impl__c78o9k(new Long(-647173091, -422375382)), _ULong___init__impl__c78o9k(new Long(-941354094, -1874597350)), _ULong___init__impl__c78o9k(new Long(2044532855, -1269504863)), _ULong___init__impl__c78o9k(new Long(-665559404, -513139255)), _ULong___init__impl__c78o9k(new Long(657767197, -1931324770)), _ULong___init__impl__c78o9k(new Long(-1325274652, -1340414139)), _ULong___init__impl__c78o9k(new Long(490890333, -601775849)), _ULong___init__impl__c78o9k(new Long(1917419194, -1986722642)), _ULong___init__impl__c78o9k(new Long(249290345, -1409661478)), _ULong___init__impl__c78o9k(new Long(-1835870717, -688335024)), _ULong___init__impl__c78o9k(new Long(1536935362, -2040822126)), _ULong___init__impl__c78o9k(new Long(-226314446, -1477285834)), _ULong___init__impl__c78o9k(new Long(-1356634881, -772865468)), _ULong___init__impl__c78o9k(new Long(-311025889, -2093653654)), _ULong___init__impl__c78o9k(new Long(-1462524185, -1543325243)), _ULong___init__impl__c78o9k(new Long(319328417, -855414729)), _ULong___init__impl__c78o9k(new Long(1810192996, -2145246942)), _ULong___init__impl__c78o9k(new Long(115257597, -1607816853)), _ULong___init__impl__c78o9k(new Long(-929669827, -936029243)), _ULong___init__impl__c78o9k(new Long(985396364, -96294729)), _ULong___init__impl__c78o9k(new Long(-2068481833, -1670796942)), _ULong___init__impl__c78o9k(new Long(635623181, -1014754353)), _ULong___init__impl__c78o9k(new Long(-279212847, -194701118)), _ULong___init__impl__c78o9k(new Long(-711378942, -1732300935)), _ULong___init__impl__c78o9k(new Long(1258259971, -1091634344)), _ULong___init__impl__c78o9k(new Long(1572824964, -290801106)), _ULong___init__impl__c78o9k(new Long(-90726222, -1792363428)), _ULong___init__impl__c78o9k(new Long(960334047, -1166712460)), _ULong___init__impl__c78o9k(new Long(1200417559, -384648751)), _ULong___init__impl__c78o9k(new Long(-860351762, -1851018206)), _ULong___init__impl__c78o9k(new Long(2145785770, -1240030933)), _ULong___init__impl__c78o9k(new Long(1608490388, -476296842)), _ULong___init__impl__c78o9k(new Long(-68435331, -1908298263)), _ULong___init__impl__c78o9k(new Long(2061939484, -1311631004)), _ULong___init__impl__c78o9k(new Long(-1717542941, -565796931)), _ULong___init__impl__c78o9k(new Long(-2147206162, -1964235818)), _ULong___init__impl__c78o9k(new Long(537217769, -1381552948)), _ULong___init__impl__c78o9k(new Long(671522212, -653199361)), _ULong___init__impl__c78o9k(new Long(2030314118, -2018862337)), _ULong___init__impl__c78o9k(new Long(1464150824, -1449836097)), _ULong___init__impl__c78o9k(new Long(756446706, -738553297)), _ULong___init__impl__c78o9k(new Long(2083391927, -2072208547)), _ULong___init__impl__c78o9k(new Long(-616985563, -1516518860)), _ULong___init__impl__c78o9k(new Long(302509870, -821906750)), _ULong___init__impl__c78o9k(new Long(1262810493, -2124304455)), _ULong___init__impl__c78o9k(new Long(-1642712356, -1581638745)), _ULong___init__impl__c78o9k(new Long(-2053390445, -903306607)), _ULong___init__impl__c78o9k(new Long(-419254408, -55391435)), _ULong___init__impl__c78o9k(new Long(-1335775829, -1645232383)), _ULong___init__impl__c78o9k(new Long(477763862, -982798654)), _ULong___init__impl__c78o9k(new Long(-1550278821, -154756494)), _ULong___init__impl__c78o9k(new Long(-1505795175, -1707335545)), _ULong___init__impl__c78o9k(new Long(-1882243969, -1060427607)), _ULong___init__impl__c78o9k(new Long(-205321313, -251792685)), _ULong___init__impl__c78o9k(new Long(2019157827, -1767983164)), _ULong___init__impl__c78o9k(new Long(-1771020012, -1136237131)), _ULong___init__impl__c78o9k(new Long(-66291367, -346554590)), _ULong___init__impl__c78o9k(new Long(-578303016, -1827209355)), _ULong___init__impl__c78o9k(new Long(1424604878, -1210269869)), _ULong___init__impl__c78o9k(new Long(707014273, -439095512)), _ULong___init__impl__c78o9k(new Long(441883920, -1885047431)), _ULong___init__impl__c78o9k(new Long(1626096725, -1282567465)), _ULong___init__impl__c78o9k(new Long(958879082, -529467507)), _ULong___init__impl__c78o9k(new Long(1136170338, -1941529928)), _ULong___init__impl__c78o9k(new Long(1420212923, -1353170586)), _ULong___init__impl__c78o9k(new Long(-372217494, -617721409)), _ULong___init__impl__c78o9k(new Long(-232635934, -1996688617)), _ULong___init__impl__c78o9k(new Long(-290794918, -1422118947)), _ULong___init__impl__c78o9k(new Long(1783990001, -703906859)), _ULong___init__impl__c78o9k(new Long(1651864662, -2050554523)), _ULong___init__impl__c78o9k(new Long(-1156394644, -1489451330)), _ULong___init__impl__c78o9k(new Long(1775732167, -788072338)), _ULong___init__impl__c78o9k(new Long(36090780, -2103157947)), _ULong___init__impl__c78o9k(new Long(1118855300, -1555205610)), _ULong___init__impl__c78o9k(new Long(-748914523, -870265189)), _ULong___init__impl__c78o9k(new Long(-936143154, -14089662)), _ULong___init__impl__c78o9k(new Long(-1121960383, -1619418775)), _ULong___init__impl__c78o9k(new Long(745033169, -950531644)), _ULong___init__impl__c78o9k(new Long(931291461, -114422731)), _ULong___init__impl__c78o9k(new Long(1118928075, -1682126943)), _ULong___init__impl__c78o9k(new Long(-1822565378, -1028916855)), _ULong___init__impl__c78o9k(new Long(-130723074, -212404245)), _ULong___init__impl__c78o9k(new Long(2065781726, -1743365389)), _ULong___init__impl__c78o9k(new Long(1508485334, -1105464912)), _ULong___init__impl__c78o9k(new Long(1885606668, -308089316)), _ULong___init__impl__c78o9k(new Long(-968979481, -1803168559)), _ULong___init__impl__c78o9k(new Long(936259297, -1180218874)), _ULong___init__impl__c78o9k(new Long(-977159527, -401531769)), _ULong___init__impl__c78o9k(new Long(-610724704, -1861570092)), _ULong___init__impl__c78o9k(new Long(310335944, -1253220790)), _ULong___init__impl__c78o9k(new Long(-1759563718, -492784164)), _ULong___init__impl__c78o9k(new Long(-562856412, -1918602839)), _ULong___init__impl__c78o9k(new Long(1443913133, -1324511724)), _ULong___init__impl__c78o9k(new Long(1804891416, -581897831)), _ULong___init__impl__c78o9k(new Long(-482555601, -1974298881)), _ULong___init__impl__c78o9k(new Long(-603194501, -1394131777)), _ULong___init__impl__c78o9k(new Long(-753993126, -668922897)), _ULong___init__impl__c78o9k(new Long(-471245704, -2028689547)), _ULong___init__impl__c78o9k(new Long(1558426518, -1462120109)), _ULong___init__impl__c78o9k(new Long(874291324, -753908312)), _ULong___init__impl__c78o9k(new Long(546432077, -2081805431)), _ULong___init__impl__c78o9k(new Long(1756781920, -1528514965)), _ULong___init__impl__c78o9k(new Long(1122235577, -836901882)), _ULong___init__impl__c78o9k(new Long(-372344589, -2133676413)), _ULong___init__impl__c78o9k(new Long(-465430736, -1593353692)), _ULong___init__impl__c78o9k(new Long(491953404, -917950290)), _ULong___init__impl__c78o9k(new Long(-1532541892, -73696039)), _ULong___init__impl__c78o9k(new Long(115903141, -1656672760)), _ULong___init__impl__c78o9k(new Long(144878926, -997099126)), _ULong___init__impl__c78o9k(new Long(-1966384990, -172632084)), _ULong___init__impl__c78o9k(new Long(-692119707, -1718507789)), _ULong___init__impl__c78o9k(new Long(-865149633, -1074392912)), _ULong___init__impl__c78o9k(new Long(-7695218, -269249316)), _ULong___init__impl__c78o9k(new Long(532061401, -1778893558)), _ULong___init__impl__c78o9k(new Long(-1482406897, -1149875124)), _ULong___init__impl__c78o9k(new Long(-779266797, -363602081)), _ULong___init__impl__c78o9k(new Long(-487041748, -1837864037)), _ULong___init__impl__c78o9k(new Long(-608802185, -1223588222)), _ULong___init__impl__c78o9k(new Long(-1834744555, -455743453)), _ULong___init__impl__c78o9k(new Long(1000768301, -1895452394)), _ULong___init__impl__c78o9k(new Long(-896523272, -1295573669)), _ULong___init__impl__c78o9k(new Long(-1120654090, -545725262)), _ULong___init__impl__c78o9k(new Long(-1237279718, -1951691025)), _ULong___init__impl__c78o9k(new Long(-1546599648, -1365871957)), _ULong___init__impl__c78o9k(new Long(-1933249560, -633598122)), _ULong___init__impl__c78o9k(new Long(402331761, -2006611562)), _ULong___init__impl__c78o9k(new Long(-1644568947, -1434522629)), _ULong___init__impl__c78o9k(new Long(-2055711183, -719411462)), _ULong___init__impl__c78o9k(new Long(-1821690402, -2060244900)), _ULong___init__impl__c78o9k(new Long(-1203371178, -1501564301)), _ULong___init__impl__c78o9k(new Long(-1504213972, -803213552)), _ULong___init__impl__c78o9k(new Long(1744220827, -2112621206)), _ULong___init__impl__c78o9k(new Long(32792386, -1567034683)), _ULong___init__impl__c78o9k(new Long(1114732307, -885051530)), _ULong___init__impl__c78o9k(new Long(-754068265, -32572589)), _ULong___init__impl__c78o9k(new Long(1676190982, -1630970604)), _ULong___init__impl__c78o9k(new Long(2095238728, -964971431)), _ULong___init__impl__c78o9k(new Long(-602177062, -132472465)), _ULong___init__impl__c78o9k(new Long(-376360664, -1693408027)), _ULong___init__impl__c78o9k(new Long(1677032818, -1043018209)), _ULong___init__impl__c78o9k(new Long(1022549199, -230030937)), _ULong___init__impl__c78o9k(new Long(-2045261311, -1754382072)), _ULong___init__impl__c78o9k(new Long(-1482834814, -1119235766)), _ULong___init__impl__c78o9k(new Long(1367681954, -325302883)), _ULong___init__impl__c78o9k(new Long(1391672133, -1813927038)), _ULong___init__impl__c78o9k(new Long(-407893481, -1193666974)), _ULong___init__impl__c78o9k(new Long(-1583608675, -418341893)), _ULong___init__impl__c78o9k(new Long(1157728226, -1872076419)), _ULong___init__impl__c78o9k(new Long(-1774065190, -1266353700)), _ULong___init__impl__c78o9k(new Long(-1143839663, -509200301)), _ULong___init__impl__c78o9k(new Long(1432583858, -1928862924)), _ULong___init__impl__c78o9k(new Long(1790729823, -1337336831)), _ULong___init__impl__c78o9k(new Long(-982813193, -597929215)), _ULong___init__impl__c78o9k(new Long(459483578, -1984318495)), _ULong___init__impl__c78o9k(new Long(1648096297, -1406656295)), _ULong___init__impl__c78o9k(new Long(-1161105101, -684578545)), _ULong___init__impl__c78o9k(new Long(-725690688, -2038474327)), _ULong___init__impl__c78o9k(new Long(1240370288, -1474351084)), _ULong___init__impl__c78o9k(new Long(1550462860, -769197031)), _ULong___init__impl__c78o9k(new Long(-641573449, -2091360881)), _ULong___init__impl__c78o9k(new Long(-801966811, -1540459277)), _ULong___init__impl__c78o9k(new Long(-1002458513, -851832272)), _ULong___init__impl__c78o9k(new Long(2057817989, -2143007906)), _ULong___init__impl__c78o9k(new Long(424788838, -1605018058)), _ULong___init__impl__c78o9k(new Long(-1616497600, -932530749)), _ULong___init__impl__c78o9k(new Long(-2020622000, -91921612)), _ULong___init__impl__c78o9k(new Long(-726017838, -1668063744)), _ULong___init__impl__c78o9k(new Long(166219527, -1011337855)), _ULong___init__impl__c78o9k(new Long(1281516232, -190430495)), _ULong___init__impl__c78o9k(new Long(-809665091, -1729631796)), _ULong___init__impl__c78o9k(new Long(61660460, -1088297920)), _ULong___init__impl__c78o9k(new Long(77075576, -286630576)), _ULong___init__impl__c78o9k(new Long(48172235, -1789756846)), _ULong___init__impl__c78o9k(new Long(-2087268355, -1163454234)), _ULong___init__impl__c78o9k(new Long(612140029, -380575968)), _ULong___init__impl__c78o9k(new Long(382587518, -1848472716)), _ULong___init__impl__c78o9k(new Long(478234397, -1236849071)), _ULong___init__impl__c78o9k(new Long(1671534821, -472319515)), _ULong___init__impl__c78o9k(new Long(1581580175, -1905812433))]));
  }
  protoOf(Companion_25).r4h = function (s, start, end, result) {
    var tmp = result;
    tmp.j4h_1 = NaN;
    result.k4h_1 = false;
    if (start === end)
      return start;
    var index = start;
    var c = charSequenceGet(s, index);
    var isNegative = c === _Char___init__impl__6a9atx(45);
    if (isNegative) {
      index = index + 1 | 0;
      if (index === end)
        return index;
      c = charSequenceGet(s, index);
      var tmp_0;
      // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
      var this_0 = c;
      // Inline function 'kotlin.code' call
      var this_1 = numberToChar(Char__minus_impl_a2frrh(this_0, _Char___init__impl__6a9atx(48)));
      if (!(Char__toInt_impl_vasixd(this_1) < 10)) {
        tmp_0 = !(c === _Char___init__impl__6a9atx(46));
      } else {
        tmp_0 = false;
      }
      if (tmp_0)
        return index;
    }
    var significand = new Long(0, 0);
    var significandStartIndex = index;
    $l$loop: while (true) {
      var tmp_1;
      if (!(index === end)) {
        // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
        var this_2 = c;
        // Inline function 'kotlin.code' call
        var this_3 = numberToChar(Char__minus_impl_a2frrh(this_2, _Char___init__impl__6a9atx(48)));
        tmp_1 = Char__toInt_impl_vasixd(this_3) < 10;
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = (new Long(10, 0)).m9(significand);
      // Inline function 'kotlin.code' call
      var this_4 = c;
      var tmp_3 = Char__toInt_impl_vasixd(this_4);
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(48);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_5);
      significand = tmp_2.qa(toLong(tmp_3 - tmp$ret$5 | 0));
      // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
      index = index + 1 | 0;
      var index_0 = index;
      var tmp_4;
      if (index_0 < charSequenceLength(s)) {
        tmp_4 = charSequenceGet(s, index_0);
      } else {
        tmp_4 = _Char___init__impl__6a9atx(0);
      }
      c = tmp_4;
    }
    var significandEndIndex = index;
    var digitCount = index - significandStartIndex | 0;
    var exponent = 0;
    var exponentStartIndex = index;
    var exponentEndIndex = index;
    if (!(index === end) ? c === _Char___init__impl__6a9atx(46) : false) {
      index = index + 1 | 0;
      exponentStartIndex = index;
      $l$loop_0: while ((end - index | 0) >= 4) {
        // Inline function 'androidx.compose.ui.graphics.vector.parseFourDigits' call
        var offset = index;
        // Inline function 'kotlin.code' call
        var this_6 = charSequenceGet(s, offset);
        var tmp$ret$7 = Char__toInt_impl_vasixd(this_6);
        var tmp_5 = toLong(tmp$ret$7);
        // Inline function 'kotlin.code' call
        var this_7 = charSequenceGet(s, offset + 1 | 0);
        var tmp$ret$8 = Char__toInt_impl_vasixd(this_7);
        var tmp_6 = tmp_5.ab(toLong(tmp$ret$8).wa(16));
        // Inline function 'kotlin.code' call
        var this_8 = charSequenceGet(s, offset + 2 | 0);
        var tmp$ret$9 = Char__toInt_impl_vasixd(this_8);
        var tmp_7 = tmp_6.ab(toLong(tmp$ret$9).wa(32));
        // Inline function 'kotlin.code' call
        var this_9 = charSequenceGet(s, offset + 3 | 0);
        var tmp$ret$10 = Char__toInt_impl_vasixd(this_9);
        var v = tmp_7.ab(toLong(tmp$ret$10).wa(48));
        var base = v.ra(new Long(3145776, 3145776));
        var predicate = v.qa(new Long(4587590, 4587590)).ab(base);
        var tmp_8;
        // Inline function 'kotlin.ULong.toLong' call
        var this_10 = _ULong___init__impl__c78o9k(new Long(-8323200, -8323200));
        var tmp$ret$11 = _ULong___get_data__impl__fggpzb(this_10);
        if (!predicate.za(tmp$ret$11).equals(new Long(0, 0))) {
          tmp_8 = -1;
        } else {
          tmp_8 = base.m9(new Long(655361, 65536100)).ya(48).db();
        }
        var digits = tmp_8;
        if (digits < 0)
          break $l$loop_0;
        significand = (new Long(10000, 0)).m9(significand).qa(toLong(digits));
        index = index + 4 | 0;
      }
      // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
      var index_1 = index;
      var tmp_9;
      if (index_1 < charSequenceLength(s)) {
        tmp_9 = charSequenceGet(s, index_1);
      } else {
        tmp_9 = _Char___init__impl__6a9atx(0);
      }
      c = tmp_9;
      $l$loop_1: while (true) {
        var tmp_10;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_11 = c;
          // Inline function 'kotlin.code' call
          var this_12 = numberToChar(Char__minus_impl_a2frrh(this_11, _Char___init__impl__6a9atx(48)));
          tmp_10 = Char__toInt_impl_vasixd(this_12) < 10;
        } else {
          tmp_10 = false;
        }
        if (!tmp_10) {
          break $l$loop_1;
        }
        var tmp_11 = (new Long(10, 0)).m9(significand);
        // Inline function 'kotlin.code' call
        var this_13 = c;
        var tmp_12 = Char__toInt_impl_vasixd(this_13);
        // Inline function 'kotlin.code' call
        var this_14 = _Char___init__impl__6a9atx(48);
        var tmp$ret$17 = Char__toInt_impl_vasixd(this_14);
        significand = tmp_11.qa(toLong(tmp_12 - tmp$ret$17 | 0));
        // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
        index = index + 1 | 0;
        var index_2 = index;
        var tmp_13;
        if (index_2 < charSequenceLength(s)) {
          tmp_13 = charSequenceGet(s, index_2);
        } else {
          tmp_13 = _Char___init__impl__6a9atx(0);
        }
        c = tmp_13;
      }
      exponent = exponentStartIndex - index | 0;
      exponentEndIndex = index;
      digitCount = digitCount - exponent | 0;
    }
    if (digitCount === 0)
      return index;
    var exponentNumber = 0;
    // Inline function 'kotlin.code' call
    var this_15 = c;
    var tmp_14 = Char__toInt_impl_vasixd(this_15) | 32;
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(101);
    if (tmp_14 === Char__toInt_impl_vasixd(this_16)) {
      // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
      index = index + 1 | 0;
      var index_3 = index;
      var tmp_15;
      if (index_3 < charSequenceLength(s)) {
        tmp_15 = charSequenceGet(s, index_3);
      } else {
        tmp_15 = _Char___init__impl__6a9atx(0);
      }
      c = tmp_15;
      var isExponentNegative = c === _Char___init__impl__6a9atx(45);
      if (isExponentNegative ? true : c === _Char___init__impl__6a9atx(43)) {
        index = index + 1 | 0;
      }
      c = charSequenceGet(s, index);
      $l$loop_2: while (true) {
        var tmp_16;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_17 = c;
          // Inline function 'kotlin.code' call
          var this_18 = numberToChar(Char__minus_impl_a2frrh(this_17, _Char___init__impl__6a9atx(48)));
          tmp_16 = Char__toInt_impl_vasixd(this_18) < 10;
        } else {
          tmp_16 = false;
        }
        if (!tmp_16) {
          break $l$loop_2;
        }
        if (exponentNumber < 1024) {
          var tmp_17 = imul(10, exponentNumber);
          // Inline function 'kotlin.code' call
          var this_19 = c;
          var tmp_18 = Char__toInt_impl_vasixd(this_19);
          // Inline function 'kotlin.code' call
          var this_20 = _Char___init__impl__6a9atx(48);
          exponentNumber = tmp_17 + (tmp_18 - Char__toInt_impl_vasixd(this_20) | 0) | 0;
        }
        // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
        index = index + 1 | 0;
        var index_4 = index;
        var tmp_19;
        if (index_4 < charSequenceLength(s)) {
          tmp_19 = charSequenceGet(s, index_4);
        } else {
          tmp_19 = _Char___init__impl__6a9atx(0);
        }
        c = tmp_19;
      }
      if (isExponentNegative)
        exponentNumber = -exponentNumber | 0;
      exponent = exponent + exponentNumber | 0;
    }
    var tooManyDigits = false;
    if (digitCount > 19) {
      var retryIndex = significandStartIndex;
      c = charSequenceGet(s, retryIndex);
      while (!(index === end) ? c === _Char___init__impl__6a9atx(48) ? true : c === _Char___init__impl__6a9atx(46) : false) {
        if (c === _Char___init__impl__6a9atx(48)) {
          digitCount = digitCount - 1 | 0;
        }
        // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
        retryIndex = retryIndex + 1 | 0;
        var index_5 = retryIndex;
        var tmp_20;
        if (index_5 < charSequenceLength(s)) {
          tmp_20 = charSequenceGet(s, index_5);
        } else {
          tmp_20 = _Char___init__impl__6a9atx(0);
        }
        c = tmp_20;
      }
      if (digitCount > 19) {
        tooManyDigits = true;
        significand = new Long(0, 0);
        retryIndex = significandStartIndex;
        c = charSequenceGet(s, retryIndex);
        $l$loop_3: while (true) {
          var tmp_21;
          if (!(retryIndex === significandEndIndex)) {
            // Inline function 'kotlin.ULong.compareTo' call
            // Inline function 'kotlin.toULong' call
            var this_21 = significand;
            var this_22 = _ULong___init__impl__c78o9k(this_21);
            var other = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
            tmp_21 = ulongCompare(_ULong___get_data__impl__fggpzb(this_22), _ULong___get_data__impl__fggpzb(other)) < 0;
          } else {
            tmp_21 = false;
          }
          if (!tmp_21) {
            break $l$loop_3;
          }
          var tmp_22 = (new Long(10, 0)).m9(significand);
          // Inline function 'kotlin.code' call
          var this_23 = c;
          var tmp_23 = Char__toInt_impl_vasixd(this_23);
          // Inline function 'kotlin.code' call
          var this_24 = _Char___init__impl__6a9atx(48);
          var tmp$ret$31 = Char__toInt_impl_vasixd(this_24);
          significand = tmp_22.qa(toLong(tmp_23 - tmp$ret$31 | 0));
          // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
          retryIndex = retryIndex + 1 | 0;
          var index_6 = retryIndex;
          var tmp_24;
          if (index_6 < charSequenceLength(s)) {
            tmp_24 = charSequenceGet(s, index_6);
          } else {
            tmp_24 = _Char___init__impl__6a9atx(0);
          }
          c = tmp_24;
        }
        // Inline function 'kotlin.ULong.compareTo' call
        // Inline function 'kotlin.toULong' call
        var this_25 = significand;
        var this_26 = _ULong___init__impl__c78o9k(this_25);
        var other_0 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
        if (ulongCompare(_ULong___get_data__impl__fggpzb(this_26), _ULong___get_data__impl__fggpzb(other_0)) >= 0) {
          exponent = (significandEndIndex - retryIndex | 0) + exponentNumber | 0;
        } else {
          retryIndex = exponentStartIndex;
          c = charSequenceGet(s, retryIndex);
          $l$loop_4: while (true) {
            var tmp_25;
            if (!(retryIndex === exponentEndIndex)) {
              // Inline function 'kotlin.ULong.compareTo' call
              // Inline function 'kotlin.toULong' call
              var this_27 = significand;
              var this_28 = _ULong___init__impl__c78o9k(this_27);
              var other_1 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
              tmp_25 = ulongCompare(_ULong___get_data__impl__fggpzb(this_28), _ULong___get_data__impl__fggpzb(other_1)) < 0;
            } else {
              tmp_25 = false;
            }
            if (!tmp_25) {
              break $l$loop_4;
            }
            var tmp_26 = (new Long(10, 0)).m9(significand);
            // Inline function 'kotlin.code' call
            var this_29 = c;
            var tmp_27 = Char__toInt_impl_vasixd(this_29);
            // Inline function 'kotlin.code' call
            var this_30 = _Char___init__impl__6a9atx(48);
            var tmp$ret$38 = Char__toInt_impl_vasixd(this_30);
            significand = tmp_26.qa(toLong(tmp_27 - tmp$ret$38 | 0));
            // Inline function 'androidx.compose.ui.graphics.vector.charAt' call
            retryIndex = retryIndex + 1 | 0;
            var index_7 = retryIndex;
            var tmp_28;
            if (index_7 < charSequenceLength(s)) {
              tmp_28 = charSequenceGet(s, index_7);
            } else {
              tmp_28 = _Char___init__impl__6a9atx(0);
            }
            c = tmp_28;
          }
          exponent = (exponentStartIndex - retryIndex | 0) + exponentNumber | 0;
        }
      }
    }
    var tmp_29;
    if ((-10 <= exponent ? exponent <= 10 : false) ? !tooManyDigits : false) {
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.toULong' call
      var this_31 = significand;
      var this_32 = _ULong___init__impl__c78o9k(this_31);
      // Inline function 'kotlin.ULong.shl' call
      var this_33 = _ULong___init__impl__c78o9k(new Long(1, 0));
      var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_33).wa(24));
      tmp_29 = ulongCompare(_ULong___get_data__impl__fggpzb(this_32), _ULong___get_data__impl__fggpzb(other_2)) <= 0;
    } else {
      tmp_29 = false;
    }
    if (tmp_29) {
      var f = significand.eb();
      if (exponent < 0) {
        f = f / this.p4h_1[-exponent | 0];
      } else {
        f = f * this.p4h_1[exponent];
      }
      result.k4h_1 = true;
      result.j4h_1 = isNegative ? -f : f;
      return index;
    }
    if (significand.equals(new Long(0, 0))) {
      result.k4h_1 = true;
      result.j4h_1 = isNegative ? -0.0 : 0.0;
      return index;
    }
    if (!(-126 <= exponent ? exponent <= 127 : false)) {
      try {
        var tmp_30 = result;
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.text.substring' call
        var endIndex = index;
        // Inline function 'kotlin.js.asDynamic' call
        var this_34 = s.substring(start, endIndex);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_30.j4h_1 = toDouble(this_34);
      }finally {
        result.k4h_1 = true;
      }
      return index;
    }
    // Inline function 'kotlin.ULong.toLong' call
    var this_35 = ULongArray__get_impl_pr71q9(this.q4h_1, exponent - -325 | 0);
    var significandFactor = _ULong___get_data__impl__fggpzb(this_35);
    var lz = countLeadingZeroBits(significand);
    significand = significand.wa(lz);
    // Inline function 'androidx.compose.ui.graphics.vector.fullMultiplicationHighBits' call
    var x = significand;
    var xLo = x.za(new Long(-1, 0));
    var xHi = x.ya(32);
    var yLo = significandFactor.za(new Long(-1, 0));
    var yHi = significandFactor.ya(32);
    var xTimesYHi = xHi.m9(yHi);
    var xTimesYMid = xLo.m9(yHi);
    var yTimesXMid = xHi.m9(yLo);
    var xTimesYLo = xLo.m9(yLo);
    var carry = yTimesXMid.qa(xTimesYLo.ya(32)).qa(xTimesYMid.za(new Long(-1, 0)));
    var upper = xTimesYHi.qa(carry.ya(32)).qa(xTimesYMid.ya(32));
    var upperBit = upper.ya(63).db();
    var mantissa = upper.ya(upperBit + 9 | 0);
    lz = lz + (1 ^ upperBit) | 0;
    if (upper.za(new Long(511, 0)).equals(new Long(511, 0)) ? true : upper.za(new Long(511, 0)).equals(new Long(0, 0)) ? mantissa.za(new Long(3, 0)).equals(new Long(1, 0)) : false) {
      try {
        var tmp_31 = result;
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.text.substring' call
        var endIndex_0 = index;
        // Inline function 'kotlin.js.asDynamic' call
        var this_36 = s.substring(start, endIndex_0);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_31.j4h_1 = toDouble(this_36);
      }finally {
        result.k4h_1 = true;
      }
      return index;
    }
    // Inline function 'kotlin.Long.plus' call
    mantissa = mantissa.qa(toLong(1));
    mantissa = mantissa.ya(1);
    if (mantissa.a7(new Long(0, 2097152)) >= 0) {
      mantissa = new Long(0, 1048576);
      lz = lz - 1 | 0;
    }
    mantissa = mantissa.za(new Long(-1, -1048577));
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.times' call
    var this_37 = new Long(217706, 0);
    var other_3 = exponent;
    var adjustedExponent = this_37.m9(toLong(other_3)).xa(16).qa(toLong(1024)).qa(toLong(63));
    // Inline function 'kotlin.Long.minus' call
    var other_4 = lz;
    var realExponent = adjustedExponent.ra(toLong(other_4));
    if (realExponent.a7(new Long(1, 0)) < 0 ? true : realExponent.a7(new Long(2046, 0)) > 0) {
      try {
        var tmp_32 = result;
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.text.substring' call
        var endIndex_1 = index;
        // Inline function 'kotlin.js.asDynamic' call
        var this_38 = s.substring(start, endIndex_1);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_32.j4h_1 = toDouble(this_38);
      }finally {
        result.k4h_1 = true;
      }
      return index;
    }
    mantissa = mantissa.ab(realExponent.wa(52));
    mantissa = mantissa.ab(isNegative ? new Long(0, -2147483648) : new Long(0, 0));
    result.k4h_1 = true;
    var tmp_33 = result;
    // Inline function 'kotlin.fromBits' call
    var bits = mantissa;
    tmp_33.j4h_1 = doubleFromBits(bits);
    return index;
  };
  var Companion_instance_27;
  function Companion_getInstance_37() {
    if (Companion_instance_27 == null)
      new Companion_25();
    return Companion_instance_27;
  }
  function addNode($this, node) {
    $this.s4h_1.s(node);
    return $this;
  }
  function PathBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s4h_1 = ArrayList_init_$Create$_0();
  }
  protoOf(PathBuilder).t4h = function () {
    return this.s4h_1;
  };
  protoOf(PathBuilder).u4h = function () {
    return addNode(this, Close_getInstance());
  };
  protoOf(PathBuilder).b3n = function (x, y) {
    return addNode(this, new MoveTo(x, y));
  };
  protoOf(PathBuilder).v4h = function (dx, dy) {
    return addNode(this, new RelativeMoveTo(dx, dy));
  };
  protoOf(PathBuilder).d3n = function (x, y) {
    return addNode(this, new LineTo(x, y));
  };
  protoOf(PathBuilder).w4h = function (dx, dy) {
    return addNode(this, new RelativeLineTo(dx, dy));
  };
  protoOf(PathBuilder).x4h = function (x) {
    return addNode(this, new HorizontalTo(x));
  };
  protoOf(PathBuilder).y4h = function (dx) {
    return addNode(this, new RelativeHorizontalTo(dx));
  };
  protoOf(PathBuilder).z4h = function (y) {
    return addNode(this, new VerticalTo(y));
  };
  protoOf(PathBuilder).a4i = function (dy) {
    return addNode(this, new RelativeVerticalTo(dy));
  };
  protoOf(PathBuilder).b4i = function (x1, y1, x2, y2, x3, y3) {
    return addNode(this, new CurveTo(x1, y1, x2, y2, x3, y3));
  };
  protoOf(PathBuilder).c4i = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    return addNode(this, new RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3));
  };
  protoOf(PathBuilder).d4i = function (dx1, dy1, dx2, dy2) {
    return addNode(this, new RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2));
  };
  function Close() {
    Close_instance = this;
    PathNode.call(this);
  }
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo(dx, dy) {
    PathNode.call(this);
    this.g4i_1 = dx;
    this.h4i_1 = dy;
  }
  protoOf(RelativeMoveTo).toString = function () {
    return 'RelativeMoveTo(dx=' + this.g4i_1 + ', dy=' + this.h4i_1 + ')';
  };
  protoOf(RelativeMoveTo).hashCode = function () {
    var result = getNumberHashCode(this.g4i_1);
    result = imul(result, 31) + getNumberHashCode(this.h4i_1) | 0;
    return result;
  };
  protoOf(RelativeMoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeMoveTo ? other : THROW_CCE();
    if (!equals(this.g4i_1, tmp0_other_with_cast.g4i_1))
      return false;
    if (!equals(this.h4i_1, tmp0_other_with_cast.h4i_1))
      return false;
    return true;
  };
  function MoveTo(x, y) {
    PathNode.call(this);
    this.k4i_1 = x;
    this.l4i_1 = y;
  }
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.k4i_1 + ', y=' + this.l4i_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.k4i_1);
    result = imul(result, 31) + getNumberHashCode(this.l4i_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    var tmp0_other_with_cast = other instanceof MoveTo ? other : THROW_CCE();
    if (!equals(this.k4i_1, tmp0_other_with_cast.k4i_1))
      return false;
    if (!equals(this.l4i_1, tmp0_other_with_cast.l4i_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.o4i_1 = dx;
    this.p4i_1 = dy;
  }
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.o4i_1 + ', dy=' + this.p4i_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.o4i_1);
    result = imul(result, 31) + getNumberHashCode(this.p4i_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeLineTo ? other : THROW_CCE();
    if (!equals(this.o4i_1, tmp0_other_with_cast.o4i_1))
      return false;
    if (!equals(this.p4i_1, tmp0_other_with_cast.p4i_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.s4i_1 = x;
    this.t4i_1 = y;
  }
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.s4i_1 + ', y=' + this.t4i_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.s4i_1);
    result = imul(result, 31) + getNumberHashCode(this.t4i_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    var tmp0_other_with_cast = other instanceof LineTo ? other : THROW_CCE();
    if (!equals(this.s4i_1, tmp0_other_with_cast.s4i_1))
      return false;
    if (!equals(this.t4i_1, tmp0_other_with_cast.t4i_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.w4i_1 = dx;
  }
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.w4i_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.w4i_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeHorizontalTo ? other : THROW_CCE();
    if (!equals(this.w4i_1, tmp0_other_with_cast.w4i_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.z4i_1 = x;
  }
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.z4i_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.z4i_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    var tmp0_other_with_cast = other instanceof HorizontalTo ? other : THROW_CCE();
    if (!equals(this.z4i_1, tmp0_other_with_cast.z4i_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.c4j_1 = dy;
  }
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.c4j_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.c4j_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeVerticalTo ? other : THROW_CCE();
    if (!equals(this.c4j_1, tmp0_other_with_cast.c4j_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.f4j_1 = y;
  }
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.f4j_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.f4j_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    var tmp0_other_with_cast = other instanceof VerticalTo ? other : THROW_CCE();
    if (!equals(this.f4j_1, tmp0_other_with_cast.f4j_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.i4j_1 = dx1;
    this.j4j_1 = dy1;
    this.k4j_1 = dx2;
    this.l4j_1 = dy2;
    this.m4j_1 = dx3;
    this.n4j_1 = dy3;
  }
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.i4j_1 + ', dy1=' + this.j4j_1 + ', dx2=' + this.k4j_1 + ', dy2=' + this.l4j_1 + ', dx3=' + this.m4j_1 + ', dy3=' + this.n4j_1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.i4j_1);
    result = imul(result, 31) + getNumberHashCode(this.j4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n4j_1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeCurveTo ? other : THROW_CCE();
    if (!equals(this.i4j_1, tmp0_other_with_cast.i4j_1))
      return false;
    if (!equals(this.j4j_1, tmp0_other_with_cast.j4j_1))
      return false;
    if (!equals(this.k4j_1, tmp0_other_with_cast.k4j_1))
      return false;
    if (!equals(this.l4j_1, tmp0_other_with_cast.l4j_1))
      return false;
    if (!equals(this.m4j_1, tmp0_other_with_cast.m4j_1))
      return false;
    if (!equals(this.n4j_1, tmp0_other_with_cast.n4j_1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.q4j_1 = x1;
    this.r4j_1 = y1;
    this.s4j_1 = x2;
    this.t4j_1 = y2;
    this.u4j_1 = x3;
    this.v4j_1 = y3;
  }
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.q4j_1 + ', y1=' + this.r4j_1 + ', x2=' + this.s4j_1 + ', y2=' + this.t4j_1 + ', x3=' + this.u4j_1 + ', y3=' + this.v4j_1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.q4j_1);
    result = imul(result, 31) + getNumberHashCode(this.r4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v4j_1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof CurveTo ? other : THROW_CCE();
    if (!equals(this.q4j_1, tmp0_other_with_cast.q4j_1))
      return false;
    if (!equals(this.r4j_1, tmp0_other_with_cast.r4j_1))
      return false;
    if (!equals(this.s4j_1, tmp0_other_with_cast.s4j_1))
      return false;
    if (!equals(this.t4j_1, tmp0_other_with_cast.t4j_1))
      return false;
    if (!equals(this.u4j_1, tmp0_other_with_cast.u4j_1))
      return false;
    if (!equals(this.v4j_1, tmp0_other_with_cast.v4j_1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.y4j_1 = dx1;
    this.z4j_1 = dy1;
    this.a4k_1 = dx2;
    this.b4k_1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.y4j_1 + ', dy1=' + this.z4j_1 + ', dx2=' + this.a4k_1 + ', dy2=' + this.b4k_1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.y4j_1);
    result = imul(result, 31) + getNumberHashCode(this.z4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a4k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b4k_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.y4j_1, tmp0_other_with_cast.y4j_1))
      return false;
    if (!equals(this.z4j_1, tmp0_other_with_cast.z4j_1))
      return false;
    if (!equals(this.a4k_1, tmp0_other_with_cast.a4k_1))
      return false;
    if (!equals(this.b4k_1, tmp0_other_with_cast.b4k_1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.e4k_1 = x1;
    this.f4k_1 = y1;
    this.g4k_1 = x2;
    this.h4k_1 = y2;
  }
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.e4k_1 + ', y1=' + this.f4k_1 + ', x2=' + this.g4k_1 + ', y2=' + this.h4k_1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.e4k_1);
    result = imul(result, 31) + getNumberHashCode(this.f4k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g4k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h4k_1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveCurveTo ? other : THROW_CCE();
    if (!equals(this.e4k_1, tmp0_other_with_cast.e4k_1))
      return false;
    if (!equals(this.f4k_1, tmp0_other_with_cast.f4k_1))
      return false;
    if (!equals(this.g4k_1, tmp0_other_with_cast.g4k_1))
      return false;
    if (!equals(this.h4k_1, tmp0_other_with_cast.h4k_1))
      return false;
    return true;
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, VOID, true);
    this.k4k_1 = dx1;
    this.l4k_1 = dy1;
    this.m4k_1 = dx2;
    this.n4k_1 = dy2;
  }
  protoOf(RelativeQuadTo).toString = function () {
    return 'RelativeQuadTo(dx1=' + this.k4k_1 + ', dy1=' + this.l4k_1 + ', dx2=' + this.m4k_1 + ', dy2=' + this.n4k_1 + ')';
  };
  protoOf(RelativeQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.k4k_1);
    result = imul(result, 31) + getNumberHashCode(this.l4k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m4k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n4k_1) | 0;
    return result;
  };
  protoOf(RelativeQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeQuadTo ? other : THROW_CCE();
    if (!equals(this.k4k_1, tmp0_other_with_cast.k4k_1))
      return false;
    if (!equals(this.l4k_1, tmp0_other_with_cast.l4k_1))
      return false;
    if (!equals(this.m4k_1, tmp0_other_with_cast.m4k_1))
      return false;
    if (!equals(this.n4k_1, tmp0_other_with_cast.n4k_1))
      return false;
    return true;
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode.call(this, VOID, true);
    this.q4k_1 = x1;
    this.r4k_1 = y1;
    this.s4k_1 = x2;
    this.t4k_1 = y2;
  }
  protoOf(QuadTo).toString = function () {
    return 'QuadTo(x1=' + this.q4k_1 + ', y1=' + this.r4k_1 + ', x2=' + this.s4k_1 + ', y2=' + this.t4k_1 + ')';
  };
  protoOf(QuadTo).hashCode = function () {
    var result = getNumberHashCode(this.q4k_1);
    result = imul(result, 31) + getNumberHashCode(this.r4k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s4k_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t4k_1) | 0;
    return result;
  };
  protoOf(QuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof QuadTo ? other : THROW_CCE();
    if (!equals(this.q4k_1, tmp0_other_with_cast.q4k_1))
      return false;
    if (!equals(this.r4k_1, tmp0_other_with_cast.r4k_1))
      return false;
    if (!equals(this.s4k_1, tmp0_other_with_cast.s4k_1))
      return false;
    if (!equals(this.t4k_1, tmp0_other_with_cast.t4k_1))
      return false;
    return true;
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode.call(this, VOID, true);
    this.w4k_1 = dx;
    this.x4k_1 = dy;
  }
  protoOf(RelativeReflectiveQuadTo).toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.w4k_1 + ', dy=' + this.x4k_1 + ')';
  };
  protoOf(RelativeReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.w4k_1);
    result = imul(result, 31) + getNumberHashCode(this.x4k_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.w4k_1, tmp0_other_with_cast.w4k_1))
      return false;
    if (!equals(this.x4k_1, tmp0_other_with_cast.x4k_1))
      return false;
    return true;
  };
  function ReflectiveQuadTo(x, y) {
    PathNode.call(this, VOID, true);
    this.a4l_1 = x;
    this.b4l_1 = y;
  }
  protoOf(ReflectiveQuadTo).toString = function () {
    return 'ReflectiveQuadTo(x=' + this.a4l_1 + ', y=' + this.b4l_1 + ')';
  };
  protoOf(ReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.a4l_1);
    result = imul(result, 31) + getNumberHashCode(this.b4l_1) | 0;
    return result;
  };
  protoOf(ReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    var tmp0_other_with_cast = other instanceof ReflectiveQuadTo ? other : THROW_CCE();
    if (!equals(this.a4l_1, tmp0_other_with_cast.a4l_1))
      return false;
    if (!equals(this.b4l_1, tmp0_other_with_cast.b4l_1))
      return false;
    return true;
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode.call(this);
    this.e4l_1 = horizontalEllipseRadius;
    this.f4l_1 = verticalEllipseRadius;
    this.g4l_1 = theta;
    this.h4l_1 = isMoreThanHalf;
    this.i4l_1 = isPositiveArc;
    this.j4l_1 = arcStartDx;
    this.k4l_1 = arcStartDy;
  }
  protoOf(RelativeArcTo).toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.e4l_1 + ', verticalEllipseRadius=' + this.f4l_1 + ', theta=' + this.g4l_1 + ', isMoreThanHalf=' + this.h4l_1 + ', isPositiveArc=' + this.i4l_1 + ', arcStartDx=' + this.j4l_1 + ', arcStartDy=' + this.k4l_1 + ')';
  };
  protoOf(RelativeArcTo).hashCode = function () {
    var result = getNumberHashCode(this.e4l_1);
    result = imul(result, 31) + getNumberHashCode(this.f4l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g4l_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.h4l_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.i4l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j4l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k4l_1) | 0;
    return result;
  };
  protoOf(RelativeArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof RelativeArcTo ? other : THROW_CCE();
    if (!equals(this.e4l_1, tmp0_other_with_cast.e4l_1))
      return false;
    if (!equals(this.f4l_1, tmp0_other_with_cast.f4l_1))
      return false;
    if (!equals(this.g4l_1, tmp0_other_with_cast.g4l_1))
      return false;
    if (!(this.h4l_1 === tmp0_other_with_cast.h4l_1))
      return false;
    if (!(this.i4l_1 === tmp0_other_with_cast.i4l_1))
      return false;
    if (!equals(this.j4l_1, tmp0_other_with_cast.j4l_1))
      return false;
    if (!equals(this.k4l_1, tmp0_other_with_cast.k4l_1))
      return false;
    return true;
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode.call(this);
    this.n4l_1 = horizontalEllipseRadius;
    this.o4l_1 = verticalEllipseRadius;
    this.p4l_1 = theta;
    this.q4l_1 = isMoreThanHalf;
    this.r4l_1 = isPositiveArc;
    this.s4l_1 = arcStartX;
    this.t4l_1 = arcStartY;
  }
  protoOf(ArcTo).toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.n4l_1 + ', verticalEllipseRadius=' + this.o4l_1 + ', theta=' + this.p4l_1 + ', isMoreThanHalf=' + this.q4l_1 + ', isPositiveArc=' + this.r4l_1 + ', arcStartX=' + this.s4l_1 + ', arcStartY=' + this.t4l_1 + ')';
  };
  protoOf(ArcTo).hashCode = function () {
    var result = getNumberHashCode(this.n4l_1);
    result = imul(result, 31) + getNumberHashCode(this.o4l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p4l_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q4l_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r4l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s4l_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t4l_1) | 0;
    return result;
  };
  protoOf(ArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    var tmp0_other_with_cast = other instanceof ArcTo ? other : THROW_CCE();
    if (!equals(this.n4l_1, tmp0_other_with_cast.n4l_1))
      return false;
    if (!equals(this.o4l_1, tmp0_other_with_cast.o4l_1))
      return false;
    if (!equals(this.p4l_1, tmp0_other_with_cast.p4l_1))
      return false;
    if (!(this.q4l_1 === tmp0_other_with_cast.q4l_1))
      return false;
    if (!(this.r4l_1 === tmp0_other_with_cast.r4l_1))
      return false;
    if (!equals(this.s4l_1, tmp0_other_with_cast.s4l_1))
      return false;
    if (!equals(this.t4l_1, tmp0_other_with_cast.t4l_1))
      return false;
    return true;
  };
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.u4l_1 = isCurve;
    this.v4l_1 = isQuad;
  }
  function addPathNodes(_this__u8e3s4, nodes, args, count) {
    if (_this__u8e3s4 === _Char___init__impl__6a9atx(122) ? true : _this__u8e3s4 === _Char___init__impl__6a9atx(90)) {
      nodes.s(Close_getInstance());
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(109)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end = count - 2 | 0;
      var index = 0;
      while (index <= end) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start = index;
        var node = new RelativeMoveTo(args[start], args[start + 1 | 0]);
        var tmp;
        var tmp_0;
        if (node instanceof MoveTo) {
          tmp_0 = index > 0;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = new LineTo(args[index], args[index + 1 | 0]);
        } else {
          var tmp_1;
          if (node instanceof RelativeMoveTo) {
            tmp_1 = index > 0;
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp = new RelativeLineTo(args[index], args[index + 1 | 0]);
          } else {
            tmp = node;
          }
        }
        nodes.s(tmp);
        index = index + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(77)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_0 = count - 2 | 0;
      var index_0 = 0;
      while (index_0 <= end_0) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_0 = index_0;
        var node_0 = new MoveTo(args[start_0], args[start_0 + 1 | 0]);
        var tmp_2;
        var tmp_3;
        if (node_0 instanceof MoveTo) {
          tmp_3 = index_0 > 0;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp_2 = new LineTo(args[index_0], args[index_0 + 1 | 0]);
        } else {
          var tmp_4;
          if (node_0 instanceof RelativeMoveTo) {
            tmp_4 = index_0 > 0;
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp_2 = new RelativeLineTo(args[index_0], args[index_0 + 1 | 0]);
          } else {
            tmp_2 = node_0;
          }
        }
        nodes.s(tmp_2);
        index_0 = index_0 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(108)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_1 = count - 2 | 0;
      var index_1 = 0;
      while (index_1 <= end_1) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_1 = index_1;
        var node_1 = new RelativeLineTo(args[start_1], args[start_1 + 1 | 0]);
        var tmp_5;
        var tmp_6;
        if (node_1 instanceof MoveTo) {
          tmp_6 = index_1 > 0;
        } else {
          tmp_6 = false;
        }
        if (tmp_6) {
          tmp_5 = new LineTo(args[index_1], args[index_1 + 1 | 0]);
        } else {
          var tmp_7;
          if (node_1 instanceof RelativeMoveTo) {
            tmp_7 = index_1 > 0;
          } else {
            tmp_7 = false;
          }
          if (tmp_7) {
            tmp_5 = new RelativeLineTo(args[index_1], args[index_1 + 1 | 0]);
          } else {
            tmp_5 = node_1;
          }
        }
        nodes.s(tmp_5);
        index_1 = index_1 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(76)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_2 = count - 2 | 0;
      var index_2 = 0;
      while (index_2 <= end_2) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_2 = index_2;
        var node_2 = new LineTo(args[start_2], args[start_2 + 1 | 0]);
        var tmp_8;
        var tmp_9;
        if (node_2 instanceof MoveTo) {
          tmp_9 = index_2 > 0;
        } else {
          tmp_9 = false;
        }
        if (tmp_9) {
          tmp_8 = new LineTo(args[index_2], args[index_2 + 1 | 0]);
        } else {
          var tmp_10;
          if (node_2 instanceof RelativeMoveTo) {
            tmp_10 = index_2 > 0;
          } else {
            tmp_10 = false;
          }
          if (tmp_10) {
            tmp_8 = new RelativeLineTo(args[index_2], args[index_2 + 1 | 0]);
          } else {
            tmp_8 = node_2;
          }
        }
        nodes.s(tmp_8);
        index_2 = index_2 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(104)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_3 = count - 1 | 0;
      var index_3 = 0;
      while (index_3 <= end_3) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_3 = index_3;
        var node_3 = new RelativeHorizontalTo(args[start_3]);
        var tmp_11;
        var tmp_12;
        if (node_3 instanceof MoveTo) {
          tmp_12 = index_3 > 0;
        } else {
          tmp_12 = false;
        }
        if (tmp_12) {
          tmp_11 = new LineTo(args[index_3], args[index_3 + 1 | 0]);
        } else {
          var tmp_13;
          if (node_3 instanceof RelativeMoveTo) {
            tmp_13 = index_3 > 0;
          } else {
            tmp_13 = false;
          }
          if (tmp_13) {
            tmp_11 = new RelativeLineTo(args[index_3], args[index_3 + 1 | 0]);
          } else {
            tmp_11 = node_3;
          }
        }
        nodes.s(tmp_11);
        index_3 = index_3 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(72)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_4 = count - 1 | 0;
      var index_4 = 0;
      while (index_4 <= end_4) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_4 = index_4;
        var node_4 = new HorizontalTo(args[start_4]);
        var tmp_14;
        var tmp_15;
        if (node_4 instanceof MoveTo) {
          tmp_15 = index_4 > 0;
        } else {
          tmp_15 = false;
        }
        if (tmp_15) {
          tmp_14 = new LineTo(args[index_4], args[index_4 + 1 | 0]);
        } else {
          var tmp_16;
          if (node_4 instanceof RelativeMoveTo) {
            tmp_16 = index_4 > 0;
          } else {
            tmp_16 = false;
          }
          if (tmp_16) {
            tmp_14 = new RelativeLineTo(args[index_4], args[index_4 + 1 | 0]);
          } else {
            tmp_14 = node_4;
          }
        }
        nodes.s(tmp_14);
        index_4 = index_4 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(118)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_5 = count - 1 | 0;
      var index_5 = 0;
      while (index_5 <= end_5) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_5 = index_5;
        var node_5 = new RelativeVerticalTo(args[start_5]);
        var tmp_17;
        var tmp_18;
        if (node_5 instanceof MoveTo) {
          tmp_18 = index_5 > 0;
        } else {
          tmp_18 = false;
        }
        if (tmp_18) {
          tmp_17 = new LineTo(args[index_5], args[index_5 + 1 | 0]);
        } else {
          var tmp_19;
          if (node_5 instanceof RelativeMoveTo) {
            tmp_19 = index_5 > 0;
          } else {
            tmp_19 = false;
          }
          if (tmp_19) {
            tmp_17 = new RelativeLineTo(args[index_5], args[index_5 + 1 | 0]);
          } else {
            tmp_17 = node_5;
          }
        }
        nodes.s(tmp_17);
        index_5 = index_5 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(86)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_6 = count - 1 | 0;
      var index_6 = 0;
      while (index_6 <= end_6) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_6 = index_6;
        var node_6 = new VerticalTo(args[start_6]);
        var tmp_20;
        var tmp_21;
        if (node_6 instanceof MoveTo) {
          tmp_21 = index_6 > 0;
        } else {
          tmp_21 = false;
        }
        if (tmp_21) {
          tmp_20 = new LineTo(args[index_6], args[index_6 + 1 | 0]);
        } else {
          var tmp_22;
          if (node_6 instanceof RelativeMoveTo) {
            tmp_22 = index_6 > 0;
          } else {
            tmp_22 = false;
          }
          if (tmp_22) {
            tmp_20 = new RelativeLineTo(args[index_6], args[index_6 + 1 | 0]);
          } else {
            tmp_20 = node_6;
          }
        }
        nodes.s(tmp_20);
        index_6 = index_6 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(99)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_7 = count - 6 | 0;
      var index_7 = 0;
      while (index_7 <= end_7) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_7 = index_7;
        var node_7 = new RelativeCurveTo(args[start_7], args[start_7 + 1 | 0], args[start_7 + 2 | 0], args[start_7 + 3 | 0], args[start_7 + 4 | 0], args[start_7 + 5 | 0]);
        var tmp_23;
        var tmp_24;
        if (node_7 instanceof MoveTo) {
          tmp_24 = index_7 > 0;
        } else {
          tmp_24 = false;
        }
        if (tmp_24) {
          tmp_23 = new LineTo(args[index_7], args[index_7 + 1 | 0]);
        } else {
          var tmp_25;
          if (node_7 instanceof RelativeMoveTo) {
            tmp_25 = index_7 > 0;
          } else {
            tmp_25 = false;
          }
          if (tmp_25) {
            tmp_23 = new RelativeLineTo(args[index_7], args[index_7 + 1 | 0]);
          } else {
            tmp_23 = node_7;
          }
        }
        nodes.s(tmp_23);
        index_7 = index_7 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(67)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_8 = count - 6 | 0;
      var index_8 = 0;
      while (index_8 <= end_8) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_8 = index_8;
        var node_8 = new CurveTo(args[start_8], args[start_8 + 1 | 0], args[start_8 + 2 | 0], args[start_8 + 3 | 0], args[start_8 + 4 | 0], args[start_8 + 5 | 0]);
        var tmp_26;
        var tmp_27;
        if (node_8 instanceof MoveTo) {
          tmp_27 = index_8 > 0;
        } else {
          tmp_27 = false;
        }
        if (tmp_27) {
          tmp_26 = new LineTo(args[index_8], args[index_8 + 1 | 0]);
        } else {
          var tmp_28;
          if (node_8 instanceof RelativeMoveTo) {
            tmp_28 = index_8 > 0;
          } else {
            tmp_28 = false;
          }
          if (tmp_28) {
            tmp_26 = new RelativeLineTo(args[index_8], args[index_8 + 1 | 0]);
          } else {
            tmp_26 = node_8;
          }
        }
        nodes.s(tmp_26);
        index_8 = index_8 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(115)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_9 = count - 4 | 0;
      var index_9 = 0;
      while (index_9 <= end_9) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_9 = index_9;
        var node_9 = new RelativeReflectiveCurveTo(args[start_9], args[start_9 + 1 | 0], args[start_9 + 2 | 0], args[start_9 + 3 | 0]);
        var tmp_29;
        var tmp_30;
        if (node_9 instanceof MoveTo) {
          tmp_30 = index_9 > 0;
        } else {
          tmp_30 = false;
        }
        if (tmp_30) {
          tmp_29 = new LineTo(args[index_9], args[index_9 + 1 | 0]);
        } else {
          var tmp_31;
          if (node_9 instanceof RelativeMoveTo) {
            tmp_31 = index_9 > 0;
          } else {
            tmp_31 = false;
          }
          if (tmp_31) {
            tmp_29 = new RelativeLineTo(args[index_9], args[index_9 + 1 | 0]);
          } else {
            tmp_29 = node_9;
          }
        }
        nodes.s(tmp_29);
        index_9 = index_9 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(83)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_10 = count - 4 | 0;
      var index_10 = 0;
      while (index_10 <= end_10) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_10 = index_10;
        var node_10 = new ReflectiveCurveTo(args[start_10], args[start_10 + 1 | 0], args[start_10 + 2 | 0], args[start_10 + 3 | 0]);
        var tmp_32;
        var tmp_33;
        if (node_10 instanceof MoveTo) {
          tmp_33 = index_10 > 0;
        } else {
          tmp_33 = false;
        }
        if (tmp_33) {
          tmp_32 = new LineTo(args[index_10], args[index_10 + 1 | 0]);
        } else {
          var tmp_34;
          if (node_10 instanceof RelativeMoveTo) {
            tmp_34 = index_10 > 0;
          } else {
            tmp_34 = false;
          }
          if (tmp_34) {
            tmp_32 = new RelativeLineTo(args[index_10], args[index_10 + 1 | 0]);
          } else {
            tmp_32 = node_10;
          }
        }
        nodes.s(tmp_32);
        index_10 = index_10 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(113)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_11 = count - 4 | 0;
      var index_11 = 0;
      while (index_11 <= end_11) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_11 = index_11;
        var node_11 = new RelativeQuadTo(args[start_11], args[start_11 + 1 | 0], args[start_11 + 2 | 0], args[start_11 + 3 | 0]);
        var tmp_35;
        var tmp_36;
        if (node_11 instanceof MoveTo) {
          tmp_36 = index_11 > 0;
        } else {
          tmp_36 = false;
        }
        if (tmp_36) {
          tmp_35 = new LineTo(args[index_11], args[index_11 + 1 | 0]);
        } else {
          var tmp_37;
          if (node_11 instanceof RelativeMoveTo) {
            tmp_37 = index_11 > 0;
          } else {
            tmp_37 = false;
          }
          if (tmp_37) {
            tmp_35 = new RelativeLineTo(args[index_11], args[index_11 + 1 | 0]);
          } else {
            tmp_35 = node_11;
          }
        }
        nodes.s(tmp_35);
        index_11 = index_11 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(81)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_12 = count - 4 | 0;
      var index_12 = 0;
      while (index_12 <= end_12) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_12 = index_12;
        var node_12 = new QuadTo(args[start_12], args[start_12 + 1 | 0], args[start_12 + 2 | 0], args[start_12 + 3 | 0]);
        var tmp_38;
        var tmp_39;
        if (node_12 instanceof MoveTo) {
          tmp_39 = index_12 > 0;
        } else {
          tmp_39 = false;
        }
        if (tmp_39) {
          tmp_38 = new LineTo(args[index_12], args[index_12 + 1 | 0]);
        } else {
          var tmp_40;
          if (node_12 instanceof RelativeMoveTo) {
            tmp_40 = index_12 > 0;
          } else {
            tmp_40 = false;
          }
          if (tmp_40) {
            tmp_38 = new RelativeLineTo(args[index_12], args[index_12 + 1 | 0]);
          } else {
            tmp_38 = node_12;
          }
        }
        nodes.s(tmp_38);
        index_12 = index_12 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(116)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_13 = count - 2 | 0;
      var index_13 = 0;
      while (index_13 <= end_13) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_13 = index_13;
        var node_13 = new RelativeReflectiveQuadTo(args[start_13], args[start_13 + 1 | 0]);
        var tmp_41;
        var tmp_42;
        if (node_13 instanceof MoveTo) {
          tmp_42 = index_13 > 0;
        } else {
          tmp_42 = false;
        }
        if (tmp_42) {
          tmp_41 = new LineTo(args[index_13], args[index_13 + 1 | 0]);
        } else {
          var tmp_43;
          if (node_13 instanceof RelativeMoveTo) {
            tmp_43 = index_13 > 0;
          } else {
            tmp_43 = false;
          }
          if (tmp_43) {
            tmp_41 = new RelativeLineTo(args[index_13], args[index_13 + 1 | 0]);
          } else {
            tmp_41 = node_13;
          }
        }
        nodes.s(tmp_41);
        index_13 = index_13 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(84)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_14 = count - 2 | 0;
      var index_14 = 0;
      while (index_14 <= end_14) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_14 = index_14;
        var node_14 = new ReflectiveQuadTo(args[start_14], args[start_14 + 1 | 0]);
        var tmp_44;
        var tmp_45;
        if (node_14 instanceof MoveTo) {
          tmp_45 = index_14 > 0;
        } else {
          tmp_45 = false;
        }
        if (tmp_45) {
          tmp_44 = new LineTo(args[index_14], args[index_14 + 1 | 0]);
        } else {
          var tmp_46;
          if (node_14 instanceof RelativeMoveTo) {
            tmp_46 = index_14 > 0;
          } else {
            tmp_46 = false;
          }
          if (tmp_46) {
            tmp_44 = new RelativeLineTo(args[index_14], args[index_14 + 1 | 0]);
          } else {
            tmp_44 = node_14;
          }
        }
        nodes.s(tmp_44);
        index_14 = index_14 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(97)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_15 = count - 7 | 0;
      var index_15 = 0;
      while (index_15 <= end_15) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_15 = index_15;
        var node_15 = new RelativeArcTo(args[start_15], args[start_15 + 1 | 0], args[start_15 + 2 | 0], !(compareTo(args[start_15 + 3 | 0], 0.0) === 0), !(compareTo(args[start_15 + 4 | 0], 0.0) === 0), args[start_15 + 5 | 0], args[start_15 + 6 | 0]);
        var tmp_47;
        var tmp_48;
        if (node_15 instanceof MoveTo) {
          tmp_48 = index_15 > 0;
        } else {
          tmp_48 = false;
        }
        if (tmp_48) {
          tmp_47 = new LineTo(args[index_15], args[index_15 + 1 | 0]);
        } else {
          var tmp_49;
          if (node_15 instanceof RelativeMoveTo) {
            tmp_49 = index_15 > 0;
          } else {
            tmp_49 = false;
          }
          if (tmp_49) {
            tmp_47 = new RelativeLineTo(args[index_15], args[index_15 + 1 | 0]);
          } else {
            tmp_47 = node_15;
          }
        }
        nodes.s(tmp_47);
        index_15 = index_15 + 7 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(65)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_16 = count - 7 | 0;
      var index_16 = 0;
      while (index_16 <= end_16) {
        // Inline function 'androidx.compose.ui.graphics.vector.addPathNodes.<anonymous>' call
        var start_16 = index_16;
        var node_16 = new ArcTo(args[start_16], args[start_16 + 1 | 0], args[start_16 + 2 | 0], !(compareTo(args[start_16 + 3 | 0], 0.0) === 0), !(compareTo(args[start_16 + 4 | 0], 0.0) === 0), args[start_16 + 5 | 0], args[start_16 + 6 | 0]);
        var tmp_50;
        var tmp_51;
        if (node_16 instanceof MoveTo) {
          tmp_51 = index_16 > 0;
        } else {
          tmp_51 = false;
        }
        if (tmp_51) {
          tmp_50 = new LineTo(args[index_16], args[index_16 + 1 | 0]);
        } else {
          var tmp_52;
          if (node_16 instanceof RelativeMoveTo) {
            tmp_52 = index_16 > 0;
          } else {
            tmp_52 = false;
          }
          if (tmp_52) {
            tmp_50 = new RelativeLineTo(args[index_16], args[index_16 + 1 | 0]);
          } else {
            tmp_50 = node_16;
          }
        }
        nodes.s(tmp_50);
        index_16 = index_16 + 7 | 0;
      }
    } else
      throw IllegalArgumentException_init_$Create$('Unknown command for: ' + toString_0(_this__u8e3s4));
  }
  var EmptyArray;
  function PathParser() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.w4l_1 = ArrayList_init_$Create$_0();
    this.x4l_1 = new FloatResult();
    this.y4l_1 = new Float32Array(64);
  }
  protoOf(PathParser).z4l = function (pathData) {
    this.w4l_1.c1();
    var start = 0;
    var end = pathData.length;
    var dataCount = 0;
    while (start < end ? Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, start), _Char___init__impl__6a9atx(32)) <= 0 : false) {
      start = start + 1 | 0;
    }
    while (end > start ? Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, end - 1 | 0), _Char___init__impl__6a9atx(32)) <= 0 : false) {
      end = end - 1 | 0;
    }
    var index = start;
    while (index < end) {
      var c;
      var command = _Char___init__impl__6a9atx(0);
      $l$loop: do {
        var tmp2 = index;
        index = tmp2 + 1 | 0;
        c = charSequenceGet(pathData, tmp2);
        // Inline function 'kotlin.code' call
        var lowerChar = Char__toInt_impl_vasixd(c) | 32;
        var tmp;
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(97);
        var tmp_0 = lowerChar - Char__toInt_impl_vasixd(this_0) | 0;
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(122);
        var tmp$ret$2 = Char__toInt_impl_vasixd(this_1);
        if (imul(tmp_0, lowerChar - tmp$ret$2 | 0) <= 0) {
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(101);
          tmp = !(lowerChar === Char__toInt_impl_vasixd(this_2));
        } else {
          tmp = false;
        }
        if (tmp) {
          command = c;
          break $l$loop;
        }
      }
       while (index < end);
      if (!(command === _Char___init__impl__6a9atx(0))) {
        // Inline function 'kotlin.code' call
        var this_3 = command;
        var tmp_1 = Char__toInt_impl_vasixd(this_3) | 32;
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(122);
        if (!(tmp_1 === Char__toInt_impl_vasixd(this_4))) {
          dataCount = 0;
          do {
            while (index < end ? Char__compareTo_impl_ypi4mb(charSequenceGet(pathData, index), _Char___init__impl__6a9atx(32)) <= 0 : false) {
              index = index + 1 | 0;
            }
            index = Companion_getInstance_37().r4h(pathData, index, end, this.x4l_1);
            if (this.x4l_1.k4h_1) {
              var tmp_2 = this.y4l_1;
              var tmp4 = dataCount;
              dataCount = tmp4 + 1 | 0;
              tmp_2[tmp4] = this.x4l_1.j4h_1;
              // Inline function 'androidx.compose.ui.graphics.vector.PathParser.resizeNodeData' call
              var dataCount_0 = dataCount;
              if (dataCount_0 >= this.y4l_1.length) {
                var src = this.y4l_1;
                this.y4l_1 = new Float32Array(imul(dataCount_0, 2));
                // Inline function 'kotlin.collections.copyInto' call
                var destination = this.y4l_1;
                var endIndex = src.length;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = src;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, destination, 0, 0, endIndex);
              }
            }
            while (index < end ? charSequenceGet(pathData, index) === _Char___init__impl__6a9atx(44) : false) {
              index = index + 1 | 0;
            }
          }
           while (index < end ? this.x4l_1.k4h_1 : false);
        }
        // Inline function 'androidx.compose.ui.graphics.vector.PathParser.addNodes' call
        var cmd = command;
        var args = this.y4l_1;
        var count = dataCount;
        addPathNodes(cmd, this.w4l_1, args, count);
      }
    }
    return this;
  };
  protoOf(PathParser).a4m = function () {
    return this.w4l_1;
  };
  function toPath(_this__u8e3s4, target) {
    target = target === VOID ? Path_0() : target;
    _init_properties_PathParser_kt__xn6mis();
    var fillType = target.s49();
    target.e4a();
    target.r49(fillType);
    var currentX = 0.0;
    var currentY = 0.0;
    var ctrlX = 0.0;
    var ctrlY = 0.0;
    var segmentX = 0.0;
    var segmentY = 0.0;
    var reflectiveCtrlX;
    var reflectiveCtrlY;
    var previousNode = _this__u8e3s4.e1() ? Close_getInstance() : _this__u8e3s4.i1(0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i1(index);
        // Inline function 'androidx.compose.ui.graphics.vector.toPath.<anonymous>' call
        if (item instanceof Close) {
          currentX = segmentX;
          currentY = segmentY;
          ctrlX = segmentX;
          ctrlY = segmentY;
          target.j24();
          target.t49(currentX, currentY);
        } else {
          if (item instanceof RelativeMoveTo) {
            currentX = currentX + item.g4i_1;
            currentY = currentY + item.h4i_1;
            target.u49(item.g4i_1, item.h4i_1);
            segmentX = currentX;
            segmentY = currentY;
          } else {
            if (item instanceof MoveTo) {
              currentX = item.k4i_1;
              currentY = item.l4i_1;
              target.t49(item.k4i_1, item.l4i_1);
              segmentX = currentX;
              segmentY = currentY;
            } else {
              if (item instanceof RelativeLineTo) {
                target.w49(item.o4i_1, item.p4i_1);
                currentX = currentX + item.o4i_1;
                currentY = currentY + item.p4i_1;
              } else {
                if (item instanceof LineTo) {
                  target.v49(item.s4i_1, item.t4i_1);
                  currentX = item.s4i_1;
                  currentY = item.t4i_1;
                } else {
                  if (item instanceof RelativeHorizontalTo) {
                    target.w49(item.w4i_1, 0.0);
                    currentX = currentX + item.w4i_1;
                  } else {
                    if (item instanceof HorizontalTo) {
                      target.v49(item.z4i_1, currentY);
                      currentX = item.z4i_1;
                    } else {
                      if (item instanceof RelativeVerticalTo) {
                        target.w49(0.0, item.c4j_1);
                        currentY = currentY + item.c4j_1;
                      } else {
                        if (item instanceof VerticalTo) {
                          target.v49(currentX, item.f4j_1);
                          currentY = item.f4j_1;
                        } else {
                          if (item instanceof RelativeCurveTo) {
                            target.a4a(item.i4j_1, item.j4j_1, item.k4j_1, item.l4j_1, item.m4j_1, item.n4j_1);
                            ctrlX = currentX + item.k4j_1;
                            ctrlY = currentY + item.l4j_1;
                            currentX = currentX + item.m4j_1;
                            currentY = currentY + item.n4j_1;
                          } else {
                            if (item instanceof CurveTo) {
                              target.z49(item.q4j_1, item.r4j_1, item.s4j_1, item.t4j_1, item.u4j_1, item.v4j_1);
                              ctrlX = item.s4j_1;
                              ctrlY = item.t4j_1;
                              currentX = item.u4j_1;
                              currentY = item.v4j_1;
                            } else {
                              if (item instanceof RelativeReflectiveCurveTo) {
                                if (previousNode.u4l_1) {
                                  reflectiveCtrlX = currentX - ctrlX;
                                  reflectiveCtrlY = currentY - ctrlY;
                                } else {
                                  reflectiveCtrlX = 0.0;
                                  reflectiveCtrlY = 0.0;
                                }
                                target.a4a(reflectiveCtrlX, reflectiveCtrlY, item.y4j_1, item.z4j_1, item.a4k_1, item.b4k_1);
                                ctrlX = currentX + item.y4j_1;
                                ctrlY = currentY + item.z4j_1;
                                currentX = currentX + item.a4k_1;
                                currentY = currentY + item.b4k_1;
                              } else {
                                if (item instanceof ReflectiveCurveTo) {
                                  if (previousNode.u4l_1) {
                                    reflectiveCtrlX = 2 * currentX - ctrlX;
                                    reflectiveCtrlY = 2 * currentY - ctrlY;
                                  } else {
                                    reflectiveCtrlX = currentX;
                                    reflectiveCtrlY = currentY;
                                  }
                                  target.z49(reflectiveCtrlX, reflectiveCtrlY, item.e4k_1, item.f4k_1, item.g4k_1, item.h4k_1);
                                  ctrlX = item.e4k_1;
                                  ctrlY = item.f4k_1;
                                  currentX = item.g4k_1;
                                  currentY = item.h4k_1;
                                } else {
                                  if (item instanceof RelativeQuadTo) {
                                    target.y49(item.k4k_1, item.l4k_1, item.m4k_1, item.n4k_1);
                                    ctrlX = currentX + item.k4k_1;
                                    ctrlY = currentY + item.l4k_1;
                                    currentX = currentX + item.m4k_1;
                                    currentY = currentY + item.n4k_1;
                                  } else {
                                    if (item instanceof QuadTo) {
                                      target.x49(item.q4k_1, item.r4k_1, item.s4k_1, item.t4k_1);
                                      ctrlX = item.q4k_1;
                                      ctrlY = item.r4k_1;
                                      currentX = item.s4k_1;
                                      currentY = item.t4k_1;
                                    } else {
                                      if (item instanceof RelativeReflectiveQuadTo) {
                                        if (previousNode.v4l_1) {
                                          reflectiveCtrlX = currentX - ctrlX;
                                          reflectiveCtrlY = currentY - ctrlY;
                                        } else {
                                          reflectiveCtrlX = 0.0;
                                          reflectiveCtrlY = 0.0;
                                        }
                                        target.y49(reflectiveCtrlX, reflectiveCtrlY, item.w4k_1, item.x4k_1);
                                        ctrlX = currentX + reflectiveCtrlX;
                                        ctrlY = currentY + reflectiveCtrlY;
                                        currentX = currentX + item.w4k_1;
                                        currentY = currentY + item.x4k_1;
                                      } else {
                                        if (item instanceof ReflectiveQuadTo) {
                                          if (previousNode.v4l_1) {
                                            reflectiveCtrlX = 2 * currentX - ctrlX;
                                            reflectiveCtrlY = 2 * currentY - ctrlY;
                                          } else {
                                            reflectiveCtrlX = currentX;
                                            reflectiveCtrlY = currentY;
                                          }
                                          target.x49(reflectiveCtrlX, reflectiveCtrlY, item.a4l_1, item.b4l_1);
                                          ctrlX = reflectiveCtrlX;
                                          ctrlY = reflectiveCtrlY;
                                          currentX = item.a4l_1;
                                          currentY = item.b4l_1;
                                        } else {
                                          if (item instanceof RelativeArcTo) {
                                            var arcStartX = item.j4l_1 + currentX;
                                            var arcStartY = item.k4l_1 + currentY;
                                            drawArc(target, currentX, currentY, arcStartX, arcStartY, item.e4l_1, item.f4l_1, item.g4l_1, item.h4l_1, item.i4l_1);
                                            currentX = arcStartX;
                                            currentY = arcStartY;
                                            ctrlX = currentX;
                                            ctrlY = currentY;
                                          } else {
                                            if (item instanceof ArcTo) {
                                              drawArc(target, currentX, currentY, item.s4l_1, item.t4l_1, item.n4l_1, item.o4l_1, item.p4l_1, item.q4l_1, item.r4l_1);
                                              currentX = item.s4l_1;
                                              currentY = item.t4l_1;
                                              ctrlX = currentX;
                                              ctrlY = currentY;
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
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        previousNode = item;
      }
       while (inductionVariable <= last);
    return target;
  }
  function drawArc(p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
    _init_properties_PathParser_kt__xn6mis();
    // Inline function 'androidx.compose.ui.graphics.vector.toRadians' call
    var thetaD = theta / 180 * get_PI();
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(thetaD);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(thetaD);
    var x0p = (x0 * cosTheta + y0 * sinTheta) / a;
    var y0p = (-x0 * sinTheta + y0 * cosTheta) / b;
    var x1p = (x1 * cosTheta + y1 * sinTheta) / a;
    var y1p = (-x1 * sinTheta + y1 * cosTheta) / b;
    var dx = x0p - x1p;
    var dy = y0p - y1p;
    var xm = (x0p + x1p) / 2;
    var ym = (y0p + y1p) / 2;
    var dsq = dx * dx + dy * dy;
    if (dsq === 0.0) {
      return Unit_instance;
    }
    var disc = 1.0 / dsq - 0.25;
    if (disc < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      var adjust = Math.sqrt(dsq) / 1.99999;
      drawArc(p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
      return Unit_instance;
    }
    // Inline function 'kotlin.math.sqrt' call
    var s = Math.sqrt(disc);
    var sdx = s * dx;
    var sdy = s * dy;
    var cx;
    var cy;
    if (isMoreThanHalf === isPositiveArc) {
      cx = xm - sdy;
      cy = ym + sdx;
    } else {
      cx = xm + sdy;
      cy = ym - sdx;
    }
    // Inline function 'kotlin.math.atan2' call
    var y = y0p - cy;
    var x = x0p - cx;
    var eta0 = Math.atan2(y, x);
    // Inline function 'kotlin.math.atan2' call
    var y_0 = y1p - cy;
    var x_0 = x1p - cx;
    var eta1 = Math.atan2(y_0, x_0);
    var sweep = eta1 - eta0;
    if (!(isPositiveArc === sweep >= 0.0)) {
      if (sweep > 0.0) {
        sweep = sweep - 2 * get_PI();
      } else {
        sweep = sweep + 2 * get_PI();
      }
    }
    cx = cx * a;
    cy = cy * b;
    var tcx = cx;
    cx = cx * cosTheta - cy * sinTheta;
    cy = tcx * sinTheta + cy * cosTheta;
    arcToBezier(p, cx, cy, a, b, x0, y0, thetaD, eta0, sweep);
  }
  function arcToBezier(p, cx, cy, a, b, e1x, e1y, theta, start, sweep) {
    _init_properties_PathParser_kt__xn6mis();
    var eta1x = e1x;
    var eta1y = e1y;
    // Inline function 'kotlin.math.ceil' call
    // Inline function 'kotlin.math.abs' call
    var x = sweep * 4 / get_PI();
    var x_0 = Math.abs(x);
    var tmp$ret$1 = Math.ceil(x_0);
    var numSegments = numberToInt(tmp$ret$1);
    var eta1 = start;
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(theta);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(theta);
    // Inline function 'kotlin.math.cos' call
    var x_1 = eta1;
    var cosEta1 = Math.cos(x_1);
    // Inline function 'kotlin.math.sin' call
    var x_2 = eta1;
    var sinEta1 = Math.sin(x_2);
    var ep1x = -a * cosTheta * sinEta1 - b * sinTheta * cosEta1;
    var ep1y = -a * sinTheta * sinEta1 + b * cosTheta * cosEta1;
    var anglePerSegment = sweep / numSegments;
    var inductionVariable = 0;
    if (inductionVariable < numSegments)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var eta2 = eta1 + anglePerSegment;
        // Inline function 'kotlin.math.sin' call
        var sinEta2 = Math.sin(eta2);
        // Inline function 'kotlin.math.cos' call
        var cosEta2 = Math.cos(eta2);
        var e2x = cx + a * cosTheta * cosEta2 - b * sinTheta * sinEta2;
        var e2y = cy + a * sinTheta * cosEta2 + b * cosTheta * sinEta2;
        var ep2x = -a * cosTheta * sinEta2 - b * sinTheta * cosEta2;
        var ep2y = -a * sinTheta * sinEta2 + b * cosTheta * cosEta2;
        // Inline function 'kotlin.math.tan' call
        var x_3 = (eta2 - eta1) / 2;
        var tanDiff2 = Math.tan(x_3);
        // Inline function 'kotlin.math.sin' call
        var x_4 = eta2 - eta1;
        var tmp = Math.sin(x_4);
        // Inline function 'kotlin.math.sqrt' call
        var x_5 = 4 + 3.0 * tanDiff2 * tanDiff2;
        var alpha = tmp * (Math.sqrt(x_5) - 1) / 3;
        var q1x = eta1x + alpha * ep1x;
        var q1y = eta1y + alpha * ep1y;
        var q2x = e2x - alpha * ep2x;
        var q2y = e2y - alpha * ep2y;
        p.z49(q1x, q1y, q2x, q2y, e2x, e2y);
        eta1 = eta2;
        eta1x = e2x;
        eta1y = e2y;
        ep1x = ep2x;
        ep1y = ep2y;
      }
       while (inductionVariable < numSegments);
  }
  var properties_initialized_PathParser_kt_mzars6;
  function _init_properties_PathParser_kt__xn6mis() {
    if (!properties_initialized_PathParser_kt_mzars6) {
      properties_initialized_PathParser_kt_mzars6 = true;
      EmptyArray = new Float32Array(0);
    }
  }
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_11().k40_1 ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_11().l40_1 ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_11().m40_1 ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_11().n40_1 ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_11().o40_1 ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_11().p40_1 ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().q40_1 ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().r40_1 ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_11().s40_1 ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_11().t40_1 ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_11().u40_1 ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_11().v40_1 ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_11().w40_1 ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_11().x40_1 ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_11().y40_1 ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().z40_1 ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_11().a41_1 ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().b41_1 ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().c41_1 ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_11().d41_1 ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().e41_1 ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_11().f41_1 ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_11().g41_1 ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_11().h41_1 ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_11().i41_1 ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_11().j41_1 ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_11().k41_1 ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_11().l41_1 ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_11().m41_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_instance.y3o(_this__u8e3s4.f39_1, _this__u8e3s4.g39_1, _this__u8e3s4.h39_1, _this__u8e3s4.i39_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d3a_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.d3a_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.e3a_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.e3a_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.f3a_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.f3a_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.g3a_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.g3a_1);
    return Companion_instance_0.x3o(_this__u8e3s4.z39_1, _this__u8e3s4.a3a_1, _this__u8e3s4.b3a_1, _this__u8e3s4.c3a_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect_0(_this__u8e3s4.k3f_1, _this__u8e3s4.l3f_1, _this__u8e3s4.m3f_1, _this__u8e3s4.n3f_1);
  }
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).b4m_1;
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).c4m_1 = value;
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    this_0.o4m($this.c4m_1);
    return this_0.d4m_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Companion_getInstance_3().g3l(bitmap);
    var tmp;
    try {
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp = $this.b4m_1.e3g(this_0, Companion_instance.z3f(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_instance.z3f(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.e4f(), $this), _get_skia__ddpejf(paint, $this), true);
    }finally {
      this_0.j24();
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_13().a44_1 ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_13().b44_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 3 | 0];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_16().z46_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : _this__u8e3s4 === Companion_getInstance_16().a47_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : _this__u8e3s4 === Companion_getInstance_16().b47_1 ? new CubicResampler(0.3333333333333333, 0.3333333333333333) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.b4m_1 = skia;
    this.c4m_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).r43 = function () {
    this.b4m_1.q3g();
  };
  protoOf(SkiaBackedCanvas).s43 = function () {
    this.b4m_1.s3g();
  };
  protoOf(SkiaBackedCanvas).t43 = function (bounds, paint) {
    this.b4m_1.r3g(bounds.f39_1, bounds.g39_1, bounds.h39_1, bounds.i39_1, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).u43 = function (dx, dy) {
    this.b4m_1.o39(dx, dy);
  };
  protoOf(SkiaBackedCanvas).v43 = function (sx, sy) {
    this.b4m_1.n3g(sx, sy);
  };
  protoOf(SkiaBackedCanvas).w43 = function (matrix) {
    if (!isIdentity(matrix)) {
      this.b4m_1.o3g(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).y43 = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.b4m_1.k3g(Companion_instance.y3o(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).c44 = function (path, clipOp) {
    var antiAlias = true;
    this.b4m_1.m3g(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).e44 = function (p1, p2, paint) {
    this.b4m_1.i3f(_Offset___get_x__impl__xvi35n(p1), _Offset___get_y__impl__8bzhra(p1), _Offset___get_x__impl__xvi35n(p2), _Offset___get_y__impl__8bzhra(p2), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).g44 = function (left, top, right, bottom, paint) {
    this.b4m_1.j3f(Companion_instance.y3o(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).h44 = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.b4m_1.p3f(Companion_instance_0.w3o(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).i44 = function (center, radius, paint) {
    this.b4m_1.o3f(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).j44 = function (path, paint) {
    this.b4m_1.w3f(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).k44 = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!skiaBitmap.m3d()) {
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function asComposePaint(_this__u8e3s4) {
    return new SkiaBackedPaint(_this__u8e3s4);
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.d4m_1.d3m(toArgb(Color__copy$default_impl_ectz3s(Color_3($this.d4m_1.e3m()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.y3z() : alpha;
    multiplier = multiplier === VOID ? $this.e4m_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_20().p49_1 ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_20().q49_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_24().v4a_1 ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_24().w4a_1 ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_24().x4a_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_25().z4a_1 ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_25().a4b_1 ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_25().b4b_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.d4m_1 = skia;
    this.e4m_1 = 1.0;
    this.f4m_1 = Companion_getInstance_11().n40_1;
    this.g4m_1 = Companion_getInstance_20().p49_1;
    this.h4m_1 = Companion_getInstance_24().v4a_1;
    this.i4m_1 = Companion_getInstance_25().a4b_1;
    this.j4m_1 = 0.0;
    this.k4m_1 = Companion_getInstance_16().a47_1;
    this.l4m_1 = null;
    this.m4m_1 = null;
    this.n4m_1 = null;
  }
  protoOf(SkiaBackedPaint).p4m = function () {
    return this.d4m_1;
  };
  protoOf(SkiaBackedPaint).o4m = function (value) {
    var multiplier = coerceIn(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.e4m_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).o42 = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).y3z = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_3(this.d4m_1.e3m()));
  };
  protoOf(SkiaBackedPaint).b3m = function (value) {
    this.d4m_1.b3m(value);
  };
  protoOf(SkiaBackedPaint).l42 = function (color) {
    this.d4m_1.d3m(toArgb(color));
  };
  protoOf(SkiaBackedPaint).m42 = function () {
    return Color_3(this.d4m_1.e3m());
  };
  protoOf(SkiaBackedPaint).b4f = function (value) {
    this.d4m_1.m3m(toSkia(value));
    this.f4m_1 = value;
  };
  protoOf(SkiaBackedPaint).c4f = function () {
    return this.f4m_1;
  };
  protoOf(SkiaBackedPaint).l4e = function (value) {
    this.d4m_1.c3m(toSkia_3(value, this));
    this.g4m_1 = value;
  };
  protoOf(SkiaBackedPaint).q4m = function () {
    return this.g4m_1;
  };
  protoOf(SkiaBackedPaint).f3m = function (value) {
    this.d4m_1.f3m(value);
  };
  protoOf(SkiaBackedPaint).g3m = function () {
    return this.d4m_1.g3m();
  };
  protoOf(SkiaBackedPaint).r4e = function (value) {
    this.d4m_1.i3m(toSkia_4(value, this));
    this.h4m_1 = value;
  };
  protoOf(SkiaBackedPaint).s4e = function () {
    return this.h4m_1;
  };
  protoOf(SkiaBackedPaint).v4e = function (value) {
    this.d4m_1.j3m(toSkia_5(value, this));
    this.i4m_1 = value;
  };
  protoOf(SkiaBackedPaint).w4e = function () {
    return this.i4m_1;
  };
  protoOf(SkiaBackedPaint).t4e = function (value) {
    this.d4m_1.h3m(value);
    this.j4m_1 = value;
  };
  protoOf(SkiaBackedPaint).u4e = function () {
    return this.j4m_1;
  };
  protoOf(SkiaBackedPaint).d4f = function (_set____db54di) {
    this.k4m_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).e4f = function () {
    return this.k4m_1;
  };
  protoOf(SkiaBackedPaint).k3m = function (value) {
    this.d4m_1.k3m(value);
    this.l4m_1 = value;
  };
  protoOf(SkiaBackedPaint).n42 = function () {
    return this.l4m_1;
  };
  protoOf(SkiaBackedPaint).z4e = function (value) {
    this.d4m_1.l3m(value == null ? null : asSkiaColorFilter(value));
    this.m4m_1 = value;
  };
  protoOf(SkiaBackedPaint).a4f = function () {
    return this.m4m_1;
  };
  protoOf(SkiaBackedPaint).x4e = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.d4m_1.p3m(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.n4m_1 = value;
  };
  protoOf(SkiaBackedPaint).y4e = function () {
    return this.n4m_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_22().l4a_1 ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_22().m4a_1 ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_22().n4a_1 ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_22().o4a_1 ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_22().p4a_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.r4m_1 = internalPath;
  }
  protoOf(SkiaBackedPath).r49 = function (value) {
    var tmp = this.r4m_1;
    var tmp_0;
    if (value === Companion_getInstance_21().j4a_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.v3m(tmp_0);
  };
  protoOf(SkiaBackedPath).s49 = function () {
    if (this.r4m_1.w3m().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_21().j4a_1;
    } else {
      return Companion_getInstance_21().i4a_1;
    }
  };
  protoOf(SkiaBackedPath).t49 = function (x, y) {
    this.r4m_1.b3n(x, y);
  };
  protoOf(SkiaBackedPath).u49 = function (dx, dy) {
    this.r4m_1.c3n(dx, dy);
  };
  protoOf(SkiaBackedPath).v49 = function (x, y) {
    this.r4m_1.d3n(x, y);
  };
  protoOf(SkiaBackedPath).w49 = function (dx, dy) {
    this.r4m_1.e3n(dx, dy);
  };
  protoOf(SkiaBackedPath).x49 = function (x1, y1, x2, y2) {
    this.r4m_1.f3n(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).y49 = function (dx1, dy1, dx2, dy2) {
    this.r4m_1.g3n(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).z49 = function (x1, y1, x2, y2, x3, y3) {
    this.r4m_1.h3n(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).a4a = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.r4m_1.i3n(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).b4a = function (rect) {
    this.r4m_1.l3n(toSkiaRect(rect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).f49 = function (roundRect) {
    this.r4m_1.n3n(toSkiaRRect(roundRect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).c4a = function (path, offset) {
    this.r4m_1.p3n(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).j24 = function () {
    this.r4m_1.j3n();
  };
  protoOf(SkiaBackedPath).m2b = function () {
    var fillType = this.s49();
    this.r4m_1.x3m();
    this.r49(fillType);
  };
  protoOf(SkiaBackedPath).e4a = function () {
    this.r4m_1.y3m();
  };
  protoOf(SkiaBackedPath).f4a = function (offset) {
    this.r4m_1.r3n(Companion_getInstance_4().w3l(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).g4a = function () {
    var bounds = this.r4m_1.z3m();
    return new Rect_0(bounds.k3f_1, bounds.l3f_1, bounds.m3f_1, bounds.n3f_1);
  };
  protoOf(SkiaBackedPath).h4a = function (path1, path2, operation) {
    var path = Companion_getInstance_5().r3m(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    tmp.r4m_1 = path == null ? this.r4m_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).n26 = function () {
    return this.r4m_1.n26();
  };
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.r4m_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).s4m_1;
  }
  function PathMeasure() {
    return new SkiaBackedPathMeasure();
  }
  function SkiaBackedPathMeasure(skia) {
    skia = skia === VOID ? PathMeasure_init_$Create$() : skia;
    this.t4m_1 = skia;
  }
  protoOf(SkiaBackedPathMeasure).u4m = function (path, forceClosed) {
    this.t4m_1.x3n(path == null ? null : asSkiaPath(path), forceClosed);
  };
  protoOf(SkiaBackedPathMeasure).v4m = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.t4m_1.y3n(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  protoOf(SkiaBackedPathMeasure).a = function () {
    return this.t4m_1.a();
  };
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.x46_1;
  }
  function actualTintColorFilter(color, blendMode) {
    return new ColorFilter(Companion_getInstance_6().e3h(toArgb(color), toSkia(blendMode)));
  }
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.v3d(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.w4m_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_18().i48_1 ? Companion_getInstance_7().r3h_1 : _this__u8e3s4 === Companion_getInstance_18().j48_1 ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_18().k48_1 ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_18().l48_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_7().r3h_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().q44_1) ? Companion_getInstance_8().n3h_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().r44_1) ? Companion_getInstance_8().o3h_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().x44_1) ? Companion_getInstance_8().p3h_1 : Companion_getInstance_8().n3h_1;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.w4m_1 = bitmap;
    this.x4m_1 = toComposeColorSpace(this.w4m_1.y3d());
    this.y4m_1 = toComposeConfig(this.w4m_1.x3d());
    this.z4m_1 = !this.w4m_1.z3d();
  }
  protoOf(SkiaBackedImageBitmap).a4n = function () {
    return this.y4m_1;
  };
  protoOf(SkiaBackedImageBitmap).l39 = function () {
    return this.w4m_1.l39();
  };
  protoOf(SkiaBackedImageBitmap).k39 = function () {
    return this.w4m_1.k39();
  };
  protoOf(SkiaBackedImageBitmap).b4n = function () {
    return Unit_instance;
  };
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_8().n3h_1) ? ColorSpaces_getInstance().q44_1 : equals(_this__u8e3s4, Companion_getInstance_8().o3h_1) ? ColorSpaces_getInstance().r44_1 : equals(_this__u8e3s4, Companion_getInstance_8().p3h_1) ? ColorSpaces_getInstance().x44_1 : ColorSpaces_getInstance().q44_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_7().r3h_1) ? Companion_getInstance_18().i48_1 : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_18().j48_1 : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_18().k48_1 : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_18().l48_1 : Companion_getInstance_18().i48_1;
  }
  function toComposeImageBitmap(_this__u8e3s4) {
    return new SkiaBackedImageBitmap(toBitmap(_this__u8e3s4));
  }
  function toBitmap(_this__u8e3s4) {
    var bitmap = Bitmap_init_$Create$();
    bitmap.v3d(Companion_getInstance_9().l3l(_this__u8e3s4.k39(), _this__u8e3s4.l39(), ColorAlphaType_PREMUL_getInstance()));
    var canvas = Canvas_init_$Create$(bitmap);
    canvas.x3f(_this__u8e3s4, 0.0, 0.0);
    bitmap.n3d();
    return bitmap;
  }
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_10();
    var tmp_0 = _Offset___get_x__impl__xvi35n(from);
    var tmp_1 = _Offset___get_y__impl__8bzhra(from);
    var tmp_2 = _Offset___get_x__impl__xvi35n(to);
    var tmp_3 = _Offset___get_y__impl__8bzhra(to);
    var tmp_4 = toIntArray(colors);
    return tmp.z3o(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_10();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.a3p(tmp_0, tmp_1, radius, tmp_2, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_10();
    var tmp_0 = _Offset___get_x__impl__xvi35n(center);
    var tmp_1 = _Offset___get_y__impl__8bzhra(center);
    var tmp_2 = toIntArray(colors);
    return tmp.b3p(tmp_0, tmp_1, tmp_2, colorStops == null ? null : toFloatArray(colorStops));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.n() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.n() === colorStops.n())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.n();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(_this__u8e3s4.i1(tmp_2).p41_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_26().r42_1 ? FilterTileMode_CLAMP_getInstance() : _this__u8e3s4 === Companion_getInstance_26().s42_1 ? FilterTileMode_REPEAT_getInstance() : _this__u8e3s4 === Companion_getInstance_26().t42_1 ? FilterTileMode_MIRROR_getInstance() : _this__u8e3s4 === Companion_getInstance_26().u42_1 ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).r4f = drawLine$default;
  protoOf(CanvasDrawScope).s4f = drawRect$default;
  protoOf(CanvasDrawScope).t4f = drawRect$default_0;
  protoOf(CanvasDrawScope).v4f = drawImage$default;
  protoOf(CanvasDrawScope).w4f = drawRoundRect$default;
  protoOf(CanvasDrawScope).y4f = drawCircle$default;
  protoOf(CanvasDrawScope).z4f = drawPath$default;
  protoOf(CanvasDrawScope).a4g = drawPath$default_0;
  protoOf(CanvasDrawScope).t39 = get_center_0;
  protoOf(CanvasDrawScope).m39 = get_size;
  protoOf(CanvasDrawScope).j3b = toPx;
  protoOf(CanvasDrawScope).l3b = toPx_0;
  protoOf(CanvasDrawScope).k3b = roundToPx;
  protoOf(CanvasDrawScope).p3b = toDp;
  protoOf(CanvasDrawScope).q3b = toDp_0;
  protoOf(CanvasDrawScope).r3b = toSize;
  protoOf(asDrawTransform$1).d4g = clipPath$default_0;
  protoOf(EmptyCanvas).d44 = clipPath$default;
  protoOf(EmptyCanvas).x43 = clipRect;
  protoOf(EmptyCanvas).z43 = clipRect$default;
  protoOf(EmptyCanvas).f44 = drawRect;
  protoOf(SkiaBackedCanvas).d44 = clipPath$default;
  protoOf(SkiaBackedCanvas).x43 = clipRect;
  protoOf(SkiaBackedCanvas).z43 = clipRect$default;
  protoOf(SkiaBackedCanvas).f44 = drawRect;
  protoOf(SkiaBackedPath).d4a = addPath$default;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_0();
  Companion_instance_5 = new Companion_3();
  Companion_instance_9 = new Companion_7();
  DefaultAlpha = 1.0;
  Companion_instance_19 = new Companion_17();
  Companion_instance_21 = new Companion_19();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = BitmapPainter;
  _.$_$.e = Painter;
  _.$_$.f = PathBuilder;
  _.$_$.g = PathParser;
  _.$_$.h = toPath;
  _.$_$.i = BlendMode;
  _.$_$.j = Canvas_0;
  _.$_$.k = Color_2;
  _.$_$.l = Color_3;
  _.$_$.m = Color_0;
  _.$_$.n = Color_1;
  _.$_$.o = Color;
  _.$_$.p = get_DefaultAlpha;
  _.$_$.q = ImageBitmapConfig;
  _.$_$.r = ImageBitmap;
  _.$_$.s = Matrix;
  _.$_$.t = Generic;
  _.$_$.u = Rectangle;
  _.$_$.v = Rounded;
  _.$_$.w = Paint;
  _.$_$.x = PathFillType;
  _.$_$.y = PathMeasure;
  _.$_$.z = Path_0;
  _.$_$.a1 = get_RectangleShape;
  _.$_$.b1 = ShaderBrush;
  _.$_$.c1 = Shadow;
  _.$_$.d1 = SolidColor;
  _.$_$.e1 = StrokeCap;
  _.$_$.f1 = StrokeJoin;
  _.$_$.g1 = TileMode;
  _.$_$.h1 = set_alphaMultiplier;
  _.$_$.i1 = asComposeCanvas;
  _.$_$.j1 = asComposePaint;
  _.$_$.k1 = asSkiaPath;
  _.$_$.l1 = compositeOver;
  _.$_$.m1 = drawOutline;
  _.$_$.n1 = drawOutline_0;
  _.$_$.o1 = lerp_2;
  _.$_$.p1 = lerp_1;
  _.$_$.q1 = luminance;
  _.$_$.r1 = get_nativeCanvas;
  _.$_$.s1 = toArgb;
  _.$_$.t1 = toComposeImageBitmap;
  _.$_$.u1 = toComposeRect;
  _.$_$.v1 = toSkiaRRect;
  _.$_$.w1 = toSkiaRect;
  _.$_$.x1 = drawCircle$default;
  _.$_$.y1 = drawImage$default;
  _.$_$.z1 = drawLine$default;
  _.$_$.a2 = drawPath$default_0;
  _.$_$.b2 = drawPath$default;
  _.$_$.c2 = drawRect$default;
  _.$_$.d2 = drawRect$default_0;
  _.$_$.e2 = drawRoundRect$default;
  _.$_$.f2 = BlendMode__hashCode_impl_93ceri;
  _.$_$.g2 = _Color___init__impl__r6cqi2;
  _.$_$.h2 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.i2 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.j2 = Color__component1_impl_lz80qe;
  _.$_$.k2 = Color__component2_impl_mg9n4l;
  _.$_$.l2 = Color__component3_impl_mxb9is;
  _.$_$.m2 = Color__component4_impl_necvwz;
  _.$_$.n2 = Color__convert_impl_so5m8t;
  _.$_$.o2 = Color__hashCode_impl_vjyivj;
  _.$_$.p2 = _Color___get_value__impl__1pls5m;
  _.$_$.q2 = _Matrix___init__impl__q3kp4w;
  _.$_$.r2 = Matrix__map_impl_7meu7m;
  _.$_$.s2 = Matrix__map_impl_7meu7m_0;
  _.$_$.t2 = Matrix__reset_impl_4l49i7;
  _.$_$.u2 = Matrix__rotateX_impl_3e5y7j;
  _.$_$.v2 = Matrix__rotateY_impl_2x4btc;
  _.$_$.w2 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.x2 = Matrix__scale_impl_6w89a4;
  _.$_$.y2 = Matrix__timesAssign_impl_oas521;
  _.$_$.z2 = _Matrix___get_values__impl__fblr7b;
  _.$_$.a3 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.b3 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.c3 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.d3 = Color__copy$default_impl_ectz3s;
  _.$_$.e3 = Matrix__scale$default_impl_snaws9;
  _.$_$.f3 = Matrix__translate$default_impl_10t8ql;
  _.$_$.g3 = ColorSpaces_getInstance;
  _.$_$.h3 = Companion_getInstance_35;
  _.$_$.i3 = Fill_getInstance;
  _.$_$.j3 = Companion_getInstance_11;
  _.$_$.k3 = Companion_instance_2;
  _.$_$.l3 = Companion_getInstance_13;
  _.$_$.m3 = Companion_getInstance_14;
  _.$_$.n3 = Companion_instance_5;
  _.$_$.o3 = Companion_getInstance_18;
  _.$_$.p3 = Companion_getInstance_20;
  _.$_$.q3 = Companion_getInstance_21;
  _.$_$.r3 = Companion_getInstance_22;
  _.$_$.s3 = Companion_getInstance_23;
  _.$_$.t3 = Companion_getInstance_24;
  _.$_$.u3 = Companion_getInstance_25;
  _.$_$.v3 = Companion_getInstance_26;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-graphics.js.map
