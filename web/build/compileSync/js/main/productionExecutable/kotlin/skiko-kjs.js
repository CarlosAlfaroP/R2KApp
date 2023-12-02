(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'skiko-kjs'.");
    }
    root['skiko-kjs'] = factory(typeof this['skiko-kjs'] === 'undefined' ? {} : this['skiko-kjs'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var protoOf = kotlin_kotlin.$_$.r9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var classMeta = kotlin_kotlin.$_$.p8;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var Enum = kotlin_kotlin.$_$.mc;
  var VOID = kotlin_kotlin.$_$.d;
  var charSequenceGet = kotlin_kotlin.$_$.m8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.f2;
  var toShort = kotlin_kotlin.$_$.u9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var equals = kotlin_kotlin.$_$.t8;
  var hashCode = kotlin_kotlin.$_$.c9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qd;
  var toBits = kotlin_kotlin.$_$.yd;
  var compareTo = kotlin_kotlin.$_$.q8;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var isCharSequence = kotlin_kotlin.$_$.g9;
  var trim = kotlin_kotlin.$_$.fc;
  var toString = kotlin_kotlin.$_$.v9;
  var split = kotlin_kotlin.$_$.xb;
  var getOrNull = kotlin_kotlin.$_$.e5;
  var toIntOrNull = kotlin_kotlin.$_$.ac;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l2;
  var fillArrayVal = kotlin_kotlin.$_$.u8;
  var splitToSequence = kotlin_kotlin.$_$.wb;
  var mapNotNull = kotlin_kotlin.$_$.db;
  var toList = kotlin_kotlin.$_$.hb;
  var copyToArray = kotlin_kotlin.$_$.p4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.m2;
  var uintCompare = kotlin_kotlin.$_$.de;
  var Companion_getInstance = kotlin_kotlin.$_$.d3;
  var UInt = kotlin_kotlin.$_$.ad;
  var isNaN_0 = kotlin_kotlin.$_$.md;
  var numberToChar = kotlin_kotlin.$_$.m9;
  var charArrayOf = kotlin_kotlin.$_$.k8;
  var concatToString = kotlin_kotlin.$_$.jb;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var decodeToString = kotlin_kotlin.$_$.lb;
  var contentEquals = kotlin_kotlin.$_$.j4;
  var contentHashCode = kotlin_kotlin.$_$.l4;
  var contentHashCode_0 = kotlin_kotlin.$_$.k4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var NotImplementedError = kotlin_kotlin.$_$.tc;
  var last = kotlin_kotlin.$_$.w5;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var floatFromBits = kotlin_kotlin.$_$.v8;
  var joinToString = kotlin_kotlin.$_$.m5;
  var Error_init_$Create$ = kotlin_kotlin.$_$.f1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var until = kotlin_kotlin.$_$.sa;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toBits_0 = kotlin_kotlin.$_$.zd;
  var getNumberHashCode = kotlin_kotlin.$_$.y8;
  var Long = kotlin_kotlin.$_$.rc;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var getStringHashCode = kotlin_kotlin.$_$.b9;
  var listOf = kotlin_kotlin.$_$.z5;
  var getBooleanHashCode = kotlin_kotlin.$_$.w8;
  var RuntimeException = kotlin_kotlin.$_$.wc;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.j8;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.a1;
  var charSequenceLength = kotlin_kotlin.$_$.n8;
  var lazy = kotlin_kotlin.$_$.pd;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var toIntArray = kotlin_kotlin.$_$.a7;
  var plus = kotlin_kotlin.$_$.rd;
  var toString_0 = kotlin_kotlin.$_$.cc;
  var numberToLong = kotlin_kotlin.$_$.o9;
  var numberToInt = kotlin_kotlin.$_$.n9;
  var setOf = kotlin_kotlin.$_$.p6;
  var contains = kotlin_kotlin.$_$.kb;
  var defineProp = kotlin_kotlin.$_$.r8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder, '_FinalizerHolder', objectMeta);
  setMetadataFor(Native, 'Native', classMeta);
  setMetadataFor(Managed, 'Managed', classMeta, Native);
  setMetadataFor(BackendRenderTarget, 'BackendRenderTarget', classMeta, Managed);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_0, '_FinalizerHolder', objectMeta);
  function get_width() {
    return this.j3d().q3d_1;
  }
  function get_height() {
    return this.j3d().r3d_1;
  }
  function get_colorType() {
    return this.j3d().p3d_1.s3d_1;
  }
  function get_colorSpace() {
    return this.j3d().p3d_1.u3d_1;
  }
  function get_isOpaque() {
    return this.j3d().p3d_1.z3d();
  }
  setMetadataFor(IHasImageInfo, 'IHasImageInfo', interfaceMeta);
  setMetadataFor(Bitmap, 'Bitmap', classMeta, Managed, [Managed, IHasImageInfo], Bitmap_init_$Create$);
  setMetadataFor(BlendMode, 'BlendMode', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_1, '_FinalizerHolder', objectMeta);
  setMetadataFor(BreakIterator, 'BreakIterator', classMeta, Managed);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_2, '_FinalizerHolder', objectMeta);
  setMetadataFor(Canvas, 'Canvas', classMeta, Managed);
  setMetadataFor(ClipMode, 'ClipMode', classMeta, Enum);
  setMetadataFor(Color, 'Color', objectMeta);
  setMetadataFor(ColorAlphaType, 'ColorAlphaType', classMeta, Enum);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RefCnt, 'RefCnt', classMeta, Managed);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta, RefCnt);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(ColorInfo, 'ColorInfo', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_3, '_FinalizerHolder', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta, Managed);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(ColorType, 'ColorType', classMeta, Enum);
  setMetadataFor(CubicResampler, 'CubicResampler', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_4, '_FinalizerHolder', objectMeta);
  setMetadataFor(Data, 'Data', classMeta, Managed);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(DirectContext, 'DirectContext', classMeta, RefCnt);
  setMetadataFor(FilterMipmap, 'FilterMipmap', classMeta);
  setMetadataFor(FilterMode, 'FilterMode', classMeta, Enum);
  setMetadataFor(FilterTileMode, 'FilterTileMode', classMeta, Enum);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_5, '_FinalizerHolder', objectMeta);
  setMetadataFor(Font, 'Font', classMeta, Managed, VOID, Font_init_$Create$);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(FontFeature, 'FontFeature', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(FontMetrics, 'FontMetrics', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(FontMgr, 'FontMgr', classMeta, RefCnt);
  setMetadataFor(FontSlant, 'FontSlant', classMeta, Enum);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(GradientStyle, 'GradientStyle', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(IRange, 'IRange', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Image, 'Image', classMeta, RefCnt, [RefCnt, IHasImageInfo]);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(ImageInfo, 'ImageInfo', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_6, '_FinalizerHolder', objectMeta);
  setMetadataFor(ManagedString, 'ManagedString', classMeta, Managed);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(Matrix33, 'Matrix33', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(Matrix44, 'Matrix44', classMeta);
  setMetadataFor(MipmapMode, 'MipmapMode', classMeta, Enum);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_7, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paint, 'Paint', classMeta, Managed, VOID, Paint_init_$Create$);
  setMetadataFor(PaintMode, 'PaintMode', classMeta, Enum);
  setMetadataFor(PaintStrokeCap, 'PaintStrokeCap', classMeta, Enum);
  setMetadataFor(PaintStrokeJoin, 'PaintStrokeJoin', classMeta, Enum);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_8, '_FinalizerHolder', objectMeta);
  setMetadataFor(Path, 'Path', classMeta, Managed, VOID, Path_init_$Create$);
  setMetadataFor(PathDirection, 'PathDirection', classMeta, Enum);
  setMetadataFor(PathFillMode, 'PathFillMode', classMeta, Enum);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_9, '_FinalizerHolder', objectMeta);
  setMetadataFor(PathMeasure, 'PathMeasure', classMeta, Managed, VOID, PathMeasure_init_$Create$);
  setMetadataFor(PathOp, 'PathOp', classMeta, Enum);
  setMetadataFor(PathSegment, 'PathSegment', classMeta, VOID, VOID, PathSegment);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(PathSegmentIterator, 'PathSegmentIterator', classMeta, Managed);
  setMetadataFor(PathVerb, 'PathVerb', classMeta, Enum);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(Picture, 'Picture', classMeta, RefCnt);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_10, '_FinalizerHolder', objectMeta);
  setMetadataFor(PictureRecorder, 'PictureRecorder', classMeta, Managed, VOID, PictureRecorder_init_$Create$);
  setMetadataFor(PixelGeometry, 'PixelGeometry', classMeta, Enum);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(Point, 'Point', classMeta);
  setMetadataFor(Point3, 'Point3', classMeta);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(RRect, 'RRect', classMeta, Rect);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(Shader, 'Shader', classMeta, RefCnt);
  setMetadataFor(ShadowUtils, 'ShadowUtils', objectMeta);
  setMetadataFor(ArrayDecoder, 'ArrayDecoder', classMeta);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(Surface, 'Surface', classMeta, RefCnt);
  setMetadataFor(SurfaceColorFormat, 'SurfaceColorFormat', classMeta, Enum);
  setMetadataFor(SurfaceOrigin, 'SurfaceOrigin', classMeta, Enum);
  setMetadataFor(SurfaceProps, 'SurfaceProps', classMeta, VOID, VOID, SurfaceProps);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(Typeface, 'Typeface', classMeta, RefCnt);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_11, '_FinalizerHolder', objectMeta);
  setMetadataFor(U16String, 'U16String', classMeta, Managed);
  setMetadataFor(CharDirection, 'CharDirection', objectMeta);
  setMetadataFor(Affinity, 'Affinity', classMeta, Enum);
  setMetadataFor(Alignment, 'Alignment', classMeta, Enum);
  setMetadataFor(BaselineMode, 'BaselineMode', classMeta, Enum);
  setMetadataFor(DecorationLineStyle, 'DecorationLineStyle', classMeta, Enum);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor(DecorationStyle, 'DecorationStyle', classMeta);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(Companion_39, 'Companion', objectMeta);
  setMetadataFor(FontCollection, 'FontCollection', classMeta, RefCnt, VOID, FontCollection_init_$Create$);
  setMetadataFor(Companion_40, 'Companion', objectMeta);
  setMetadataFor(LineMetrics, 'LineMetrics', classMeta);
  setMetadataFor(Companion_41, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_12, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paragraph, 'Paragraph', classMeta, Managed);
  setMetadataFor(Companion_42, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_13, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphBuilder, 'ParagraphBuilder', classMeta, Managed);
  setMetadataFor(Companion_43, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_14, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphStyle, 'ParagraphStyle', classMeta, Managed, VOID, ParagraphStyle);
  setMetadataFor(PlaceholderAlignment, 'PlaceholderAlignment', classMeta, Enum);
  setMetadataFor(PlaceholderStyle, 'PlaceholderStyle', classMeta);
  setMetadataFor(PositionWithAffinity, 'PositionWithAffinity', classMeta);
  setMetadataFor(RectHeightMode, 'RectHeightMode', classMeta, Enum);
  setMetadataFor(RectWidthMode, 'RectWidthMode', classMeta, Enum);
  setMetadataFor(Companion_44, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta);
  setMetadataFor(Companion_45, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_15, '_FinalizerHolder', objectMeta);
  setMetadataFor(StrutStyle, 'StrutStyle', classMeta, Managed, VOID, StrutStyle_init_$Create$);
  setMetadataFor(Companion_46, 'Companion', objectMeta);
  setMetadataFor(TextBox, 'TextBox', classMeta);
  setMetadataFor(TextIndent, 'TextIndent', classMeta, VOID, VOID, TextIndent);
  setMetadataFor(Companion_47, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_16, '_FinalizerHolder', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta, Managed, VOID, TextStyle_init_$Create$);
  setMetadataFor(Companion_48, 'Companion', objectMeta);
  setMetadataFor(TypefaceFontProvider, 'TypefaceFontProvider', classMeta, FontMgr, VOID, TypefaceFontProvider);
  setMetadataFor(SkikoKeyboardEvent, 'SkikoKeyboardEvent', classMeta);
  setMetadataFor(Companion_49, 'Companion', objectMeta);
  setMetadataFor(SkikoInputModifiers, 'SkikoInputModifiers', classMeta);
  setMetadataFor(SkikoKeyboardEventKind, 'SkikoKeyboardEventKind', classMeta, Enum);
  setMetadataFor(SkikoInputEvent, 'SkikoInputEvent', classMeta);
  setMetadataFor(SkikoPointerEvent, 'SkikoPointerEvent', classMeta);
  setMetadataFor(SkikoPointerEventKind, 'SkikoPointerEventKind', classMeta, Enum);
  setMetadataFor(SkikoPointer, 'SkikoPointer', classMeta);
  setMetadataFor(SkikoPointerDevice, 'SkikoPointerDevice', classMeta, Enum);
  setMetadataFor(Companion_50, 'Companion', objectMeta);
  setMetadataFor(SkikoMouseButtons, 'SkikoMouseButtons', classMeta);
  setMetadataFor(GraphicsApi, 'GraphicsApi', classMeta, Enum);
  setMetadataFor(OS, 'OS', classMeta, Enum);
  setMetadataFor(Arch, 'Arch', classMeta, Enum);
  setMetadataFor(ClipboardManager, 'ClipboardManager', classMeta, VOID, VOID, ClipboardManager);
  setMetadataFor(URIManager, 'URIManager', classMeta, VOID, VOID, URIManager);
  setMetadataFor(RenderException, 'RenderException', classMeta, RuntimeException, VOID, RenderException);
  function onKeyboardEvent(event) {
    return Unit_instance;
  }
  function onPointerEvent(event) {
    return Unit_instance;
  }
  function get_input() {
    return Empty_instance;
  }
  setMetadataFor(SkikoView, 'SkikoView', interfaceMeta);
  setMetadataFor(SystemTheme, 'SystemTheme', classMeta, Enum);
  setMetadataFor(Pattern, 'Pattern', classMeta);
  setMetadataFor(Companion_51, 'Companion', objectMeta);
  setMetadataFor(FinalizationThunk, 'FinalizationThunk', classMeta);
  setMetadataFor(InteropScope, 'InteropScope', classMeta, VOID, VOID, InteropScope);
  setMetadataFor(Companion_52, 'Companion', objectMeta);
  setMetadataFor(NativePointerArray, 'NativePointerArray', classMeta);
  setMetadataFor(Companion_53, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_17, '_FinalizerHolder', objectMeta);
  setMetadataFor(Stats, 'Stats', objectMeta);
  setMetadataFor(CanvasRenderer, 'CanvasRenderer', classMeta);
  setMetadataFor(SkiaLayer$attachTo$1, VOID, classMeta, CanvasRenderer);
  setMetadataFor(SkiaLayer, 'SkiaLayer', classMeta, VOID, VOID, SkiaLayer);
  setMetadataFor(Empty, 'Empty', objectMeta);
  setMetadataFor(Companion_54, 'Companion', objectMeta);
  setMetadataFor(SkikoKey, 'SkikoKey', classMeta, Enum);
  setMetadataFor(createWebGLContext$contextAttributes$1, VOID, classMeta);
  //endregion
  function Companion() {
    Companion_instance = this;
    Companion_instance_51.x3c();
  }
  protoOf(Companion).y3c = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_instance.z3c();
    return new BackendRenderTarget(org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat));
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.a3d_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance().a3d_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_instance.z3c();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(objectCreate(protoOf(Bitmap)));
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.f3d_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function _nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = '_nGetImageInfo';
    return l;
  }
  function Bitmap(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().f3d_1);
    this.i3d_1 = null;
  }
  protoOf(Bitmap).j3d = function () {
    var tmp;
    try {
      if (this.i3d_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_21();
        var tmp_2 = this.d3d_1;
        tmp_0.i3d_1 = tmp_1.l3d(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.i3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).m3d = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).n3d = function () {
    Stats_instance.z3c();
    org_jetbrains_skia_Bitmap__1nSetImmutable(this.d3d_1);
    return this;
  };
  protoOf(Bitmap).o3d = function (info, rowBytes) {
    var tmp;
    try {
      this.i3d_1 = null;
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.d3d_1, info.q3d_1, info.r3d_1, info.p3d_1.s3d_1.j9_1, info.p3d_1.t3d_1.j9_1, getPtr(info.p3d_1.u3d_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.p3d_1.u3d_1);
    }
    return tmp;
  };
  protoOf(Bitmap).v3d = function (imageInfo) {
    return this.o3d(imageInfo, imageInfo.w3d());
  };
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_instance;
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function BreakIterator$Companion$makeCharacterInstance$lambda($locale) {
    return function ($this$withErrorGuard, it) {
      return org_jetbrains_skia_BreakIterator__1nMake(0, $this$withErrorGuard.c3e($locale), it);
    };
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.d3e_1 = -1;
    this.e3e_1 = 0;
    this.f3e_1 = 100;
    this.g3e_1 = 100;
    this.h3e_1 = 200;
    this.i3e_1 = 200;
    this.j3e_1 = 300;
    this.k3e_1 = 300;
    this.l3e_1 = 400;
    this.m3e_1 = 400;
    this.n3e_1 = 500;
    Companion_instance_51.x3c();
  }
  protoOf(Companion_1).o3e = function (locale) {
    Stats_instance.z3c();
    return new BreakIterator(withErrorGuard('Failed to create character iterator', BreakIterator$Companion$makeCharacterInstance$lambda(locale)));
  };
  protoOf(Companion_1).p3e = function (locale, $super) {
    locale = locale === VOID ? null : locale;
    return $super === VOID ? this.o3e(locale) : $super.o3e.call(this, locale);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.q3e_1 = org_jetbrains_skia_BreakIterator__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function BreakIterator$setText$lambda(this$0, $text) {
    return function ($this$withErrorGuard, it) {
      var tmp = this$0.d3d_1;
      var tmp_0;
      if ($text == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.jetbrains.skia.BreakIterator.setText.<anonymous>.<anonymous>' call
        var tmp_1 = 0;
        var tmp_2 = $text.length;
        var tmp_3 = new Int16Array(tmp_2);
        while (tmp_1 < tmp_2) {
          var tmp_4 = tmp_1;
          // Inline function 'kotlin.code' call
          var this_0 = charSequenceGet($text, tmp_4);
          var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
          tmp_3[tmp_4] = toShort(tmp$ret$0);
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0 = tmp_3;
      }
      var tmp_5 = $this$withErrorGuard.r3e(tmp_0);
      var tmp1_safe_receiver = $text;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
      return org_jetbrains_skia_BreakIterator__1nSetText(tmp, tmp_5, tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, it);
    };
  }
  function BreakIterator(ptr) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().q3e_1);
    this.u3e_1 = null;
  }
  protoOf(BreakIterator).j24 = function () {
    protoOf(Managed).j24.call(this);
    var tmp0_safe_receiver = this.u3e_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j24();
    }
  };
  protoOf(BreakIterator).v3e = function (offset) {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_BreakIterator__1nPreceding(this.d3d_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).w3e = function (offset) {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_BreakIterator__1nFollowing(this.d3d_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).x3e = function (text) {
    try {
      Stats_instance.z3c();
      var tmp0_safe_receiver = this.u3e_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.j24();
      }
      var tmp = this;
      tmp.u3e_1 = new U16String(withErrorGuard('Failed to setText', BreakIterator$setText$lambda(this, text)));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.u3e_1);
    }
  };
  function withErrorGuard(message, block) {
    var errorCode = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.withErrorGuard.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = $this$interopScope.y3e(errorCode);
        var res = block($this$interopScope, handle);
        $this$interopScope.z3e(handle, errorCode);
        if (errorCode[0] > 0) {
          throw RuntimeException_init_$Create$(message + '; operation failed with status ' + errorCode);
        }
        if (res === Companion_instance_53.a3f()) {
          throw IllegalArgumentException_init_$Create$(message);
        }
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return res;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    surfaceProps = surfaceProps === VOID ? new SurfaceProps() : surfaceProps;
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.d3d_1, surfaceProps.d3f(), surfaceProps.c3f_1.j9_1), true, bitmap);
    Stats_instance.z3c();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps) {
    return Canvas_init_$Init$(bitmap, surfaceProps, objectCreate(protoOf(Canvas)));
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.e3f_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_3();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_2().e3f_1, managed);
    this.h3f_1 = _owner;
  }
  protoOf(Canvas).i3f = function (x0, y0, x1, y1, paint) {
    Stats_instance.z3c();
    try {
      org_jetbrains_skia_Canvas__1nDrawLine(this.d3d_1, x0, y0, x1, y1, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).j3f = function (r, paint) {
    Stats_instance.z3c();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.d3d_1, r.k3f_1, r.l3f_1, r.m3f_1, r.n3f_1, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).o3f = function (x, y, radius, paint) {
    Stats_instance.z3c();
    try {
      org_jetbrains_skia_Canvas__1nDrawOval(this.d3d_1, x - radius, y - radius, x + radius, y + radius, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).p3f = function (r, paint) {
    Stats_instance.z3c();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_Canvas__1nDrawRRect(this.d3d_1, r.k3f_1, r.l3f_1, r.m3f_1, r.n3f_1, $this$interopScope.v3f(r.u3f_1), r.u3f_1.length, getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).w3f = function (path, paint) {
    Stats_instance.z3c();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.d3d_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).x3f = function (image, left, top) {
    return this.e3g(image, Companion_instance_32.y3f(image.k39(), image.l39()), Companion_instance_32.z3f(left, top, image.k39(), image.l39()), Companion_getInstance_34().a3g_1, null, true);
  };
  protoOf(Canvas).e3g = function (image, src, dst, samplingMode, paint, strict) {
    Stats_instance.z3c();
    try {
      org_jetbrains_skia_Canvas__1nDrawImageRect(this.d3d_1, getPtr(image), src.k3f_1, src.l3f_1, src.m3f_1, src.n3f_1, dst.k3f_1, dst.l3f_1, dst.m3f_1, dst.n3f_1, samplingMode.f3g(), samplingMode.g3g(), getPtr(paint), strict);
    }finally {
      reachabilityBarrier(image);
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).h3g = function (picture, matrix, paint) {
    Stats_instance.z3c();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp = this.d3d_1;
          var tmp_0 = getPtr(picture);
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, $this$interopScope.v3f(matrix == null ? null : matrix.i3g_1), getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).e2z = function (color) {
    Stats_instance.z3c();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.d3d_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).j3g = function () {
    Stats_instance.z3c();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.d3d_1);
    return this;
  };
  protoOf(Canvas).k3g = function (r, mode, antiAlias) {
    Stats_instance.z3c();
    org_jetbrains_skia_Canvas__1nClipRect(this.d3d_1, r.k3f_1, r.l3f_1, r.m3f_1, r.n3f_1, mode.j9_1, antiAlias);
    return this;
  };
  protoOf(Canvas).l3g = function (r, mode, antiAlias) {
    Stats_instance.z3c();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Canvas__1nClipRRect(this.d3d_1, r.k3f_1, r.l3f_1, r.m3f_1, r.n3f_1, $this$interopScope.v3f(r.u3f_1), r.u3f_1.length, mode.j9_1, antiAlias);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).m3g = function (p, mode, antiAlias) {
    Stats_instance.z3c();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.d3d_1, getPtr(p), mode.j9_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).o39 = function (dx, dy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_instance.z3c();
        org_jetbrains_skia_Canvas__1nTranslate(this.d3d_1, dx, dy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).n3g = function (sx, sy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_instance.z3c();
        org_jetbrains_skia_Canvas__1nScale(this.d3d_1, sx, sy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).o3g = function (matrix) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_instance.z3c();
        org_jetbrains_skia_Canvas__1nConcat44(this.d3d_1, $this$interopScope.v3f(matrix.p3g_1));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).q3g = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).r3g = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.d3d_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).s3g = function () {
    Stats_instance.z3c();
    org_jetbrains_skia_Canvas__1nRestore(this.d3d_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_instance;
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  function Color() {
    this.t3g_1 = 0;
    this.u3g_1 = -16777216;
    this.v3g_1 = -1;
    this.w3g_1 = -65536;
    this.x3g_1 = -16711936;
    this.y3g_1 = -16776961;
    this.z3g_1 = -256;
    this.a3h_1 = -16711681;
    this.b3h_1 = -65281;
  }
  var Color_instance;
  function Color_getInstance() {
    return Color_instance;
  }
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values_0() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_instance;
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    Companion_instance_51.x3c();
    this.c3h_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.d3h_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  protoOf(Companion_3).e3h = function (color, mode) {
    Stats_instance.z3c();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.j9_1));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter() {
    Companion_getInstance_4();
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.i3h_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_5();
    this.s3d_1 = colorType;
    this.t3d_1 = alphaType;
    this.u3d_1 = colorSpace;
  }
  protoOf(ColorInfo).z3d = function () {
    return this.t3d_1.equals(ColorAlphaType_OPAQUE_getInstance()) ? true : this.s3d_1.l3h();
  };
  protoOf(ColorInfo).m3h = function () {
    return this.s3d_1.m3h();
  };
  protoOf(ColorInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.s3d_1.equals(other.s3d_1))
      return false;
    if (!this.t3d_1.equals(other.t3d_1))
      return false;
    return equals(this.u3d_1, other.u3d_1);
  };
  protoOf(ColorInfo).hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.s3d_1.hashCode() | 0;
    result = imul(result, prime) + this.t3d_1.hashCode() | 0;
    var tmp = imul(result, prime);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.u3d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(ColorInfo).toString = function () {
    return 'ColorInfo(_colorType=' + this.s3d_1 + ', _alphaType=' + this.t3d_1 + ', _colorSpace=' + this.u3d_1 + ')';
  };
  function Companion_5() {
    Companion_instance_5 = this;
    Companion_instance_51.x3c();
    this.n3h_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.o3h_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.p3h_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_3().q3h_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, objectCreate(protoOf(ColorSpace)));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_3().q3h_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.q3h_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function ColorSpace() {
    Companion_getInstance_6();
  }
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_6() {
    Companion_instance_6 = this;
    this.r3h_1 = ColorType_BGRA_8888_getInstance();
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    ColorType_initEntries();
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function values_1() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_instance;
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 11);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 12);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 13);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 14);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 15);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 16);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 17);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 18);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 19);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 20);
    Companion_getInstance_7();
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorType).m3h = function () {
    var tmp;
    switch (this.j9_1) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 1;
        break;
      case 12:
        tmp = 8;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 16;
        break;
      case 15:
        tmp = 2;
        break;
      case 18:
        tmp = 2;
        break;
      case 19:
        tmp = 4;
        break;
      case 16:
        tmp = 2;
        break;
      case 17:
        tmp = 4;
        break;
      case 20:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorType).l3h = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.j9_1);
  };
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.s3h_1 = b;
    this.t3h_1 = c;
  }
  protoOf(CubicResampler).f3g = function () {
    return toBits(this.s3h_1) | -2147483648;
  };
  protoOf(CubicResampler).g3g = function () {
    return toBits(this.t3h_1);
  };
  protoOf(CubicResampler).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.s3h_1, other.s3h_1) === 0))
      return false;
    return compareTo(this.t3h_1, other.t3h_1) === 0;
  };
  protoOf(CubicResampler).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.s3h_1) | 0;
    result = imul(result, PRIME) + toBits(this.t3h_1) | 0;
    return result;
  };
  protoOf(CubicResampler).toString = function () {
    return 'CubicResampler(_B=' + this.s3h_1 + ', _C=' + this.t3h_1 + ')';
  };
  function Companion_7() {
    Companion_instance_7 = this;
    Companion_instance_51.x3c();
  }
  protoOf(Companion_7).u3h = function (bytes, offset, length) {
    Stats_instance.z3c();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromBytes.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$1 = org_jetbrains_skia_Data__1nMakeFromBytes($this$interopScope.v3h(bytes), offset, length);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  protoOf(Companion_7).w3h = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.u3h(bytes, offset, length) : $super.u3h.call(this, bytes, offset, length);
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.x3h_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function Data(ptr) {
    Companion_getInstance_8();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_4().x3h_1);
    this.a3i_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.e3d(otherData);
  };
  protoOf(Data).e3d = function (other) {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_Data__1nEquals(this.d3d_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_instance_51.x3c();
  }
  protoOf(Companion_8).b3i = function () {
    Stats_instance.z3c();
    return new DirectContext(org_jetbrains_skia_DirectContext__1nMakeGL());
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function DirectContext(ptr) {
    Companion_getInstance_9();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).e3i = function () {
    Stats_instance.z3c();
    org_jetbrains_skia_DirectContext__1nFlush(this.d3d_1);
    return this;
  };
  function FilterMipmap(filterMode, mipmapMode) {
    mipmapMode = mipmapMode === VOID ? MipmapMode_NONE_getInstance() : mipmapMode;
    this.f3i_1 = filterMode;
    this.g3i_1 = mipmapMode;
  }
  protoOf(FilterMipmap).f3g = function () {
    return this.f3i_1.j9_1;
  };
  protoOf(FilterMipmap).g3g = function () {
    return this.g3i_1.j9_1;
  };
  protoOf(FilterMipmap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.f3i_1.equals(other.f3i_1))
      return false;
    return this.g3i_1.equals(other.g3i_1);
  };
  protoOf(FilterMipmap).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.f3i_1.hashCode() | 0;
    result = imul(result, PRIME) + this.g3i_1.hashCode() | 0;
    return result;
  };
  protoOf(FilterMipmap).toString = function () {
    return 'FilterMipmap(_filterMode=' + this.f3i_1 + ', _mipmapMode=' + this.g3i_1 + ')';
  };
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_instance;
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  var FilterTileMode_CLAMP_instance;
  var FilterTileMode_REPEAT_instance;
  var FilterTileMode_MIRROR_instance;
  var FilterTileMode_DECAL_instance;
  var FilterTileMode_entriesInitialized;
  function FilterTileMode_initEntries() {
    if (FilterTileMode_entriesInitialized)
      return Unit_instance;
    FilterTileMode_entriesInitialized = true;
    FilterTileMode_CLAMP_instance = new FilterTileMode('CLAMP', 0);
    FilterTileMode_REPEAT_instance = new FilterTileMode('REPEAT', 1);
    FilterTileMode_MIRROR_instance = new FilterTileMode('MIRROR', 2);
    FilterTileMode_DECAL_instance = new FilterTileMode('DECAL', 3);
  }
  function FilterTileMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterTileMode_CLAMP_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_CLAMP_instance;
  }
  function FilterTileMode_REPEAT_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_REPEAT_instance;
  }
  function FilterTileMode_MIRROR_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_MIRROR_instance;
  }
  function FilterTileMode_DECAL_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_DECAL_instance;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_5().h3i_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0($this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeDefault(), $this);
    Stats_instance.z3c();
    return $this;
  }
  function Font_init_$Create$() {
    return Font_init_$Init$_0(objectCreate(protoOf(Font)));
  }
  function Font_init_$Init$_1(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_instance.z3c();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$_0(typeface, size) {
    return Font_init_$Init$_1(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.h3i_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.d3d_1, it);
      return Unit_instance;
    };
  }
  protoOf(Font).e3d = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.d3d_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).k3i = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      var tmp_0 = Companion_instance_11;
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_10();
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.i1(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    FontFeature.call($this, Companion_instance_16.l3i(feature), value, _UInt___init__impl__l7qpdl(0), _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.m3i_1 = _UInt___init__impl__l7qpdl(0);
    this.n3i_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.o3i_1 = fillArrayVal(Array(0), null);
    this.p3i_1 = compilePattern('\\s+');
    this.q3i_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.r3i_1 = 1;
    this.s3i_1 = 2;
    this.t3i_1 = 3;
    this.u3i_1 = 4;
    this.v3i_1 = 5;
  }
  protoOf(Companion_10).w3i = function (str) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = splitToSequence(str, [',']);
    var this_0 = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    return copyToArray(this_0);
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_11();
    this.x3i_1 = _tag;
    this.y3i_1 = value;
    this.z3i_1 = start;
    this.a3j_1 = end;
  }
  protoOf(FontFeature).b3j = function () {
    return Companion_instance_16.c3j(this.x3i_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    // Inline function 'kotlin.UInt.compareTo' call
    var this_0 = this.z3i_1;
    var other = _UInt___init__impl__l7qpdl(0);
    if (uintCompare(_UInt___get_data__impl__f0vqqw(this_0), _UInt___get_data__impl__f0vqqw(other)) > 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.UInt.compareTo' call
      var this_1 = this.a3j_1;
      Companion_getInstance();
      var other_0 = _UInt___init__impl__l7qpdl(-1);
      tmp = uintCompare(_UInt___get_data__impl__f0vqqw(this_1), _UInt___get_data__impl__f0vqqw(other_0)) < 0;
    }
    if (tmp) {
      var tmp_0;
      // Inline function 'kotlin.UInt.compareTo' call
      var this_2 = this.z3i_1;
      var other_1 = _UInt___init__impl__l7qpdl(0);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_2), _UInt___get_data__impl__f0vqqw(other_1)) > 0) {
        tmp_0 = new UInt(this.z3i_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      // Inline function 'kotlin.UInt.compareTo' call
      var this_3 = this.a3j_1;
      Companion_getInstance();
      var other_2 = _UInt___init__impl__l7qpdl(-1);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_3), _UInt___get_data__impl__f0vqqw(other_2)) < 0) {
        tmp_2 = new UInt(this.a3j_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.y3i_1 === 0)
      valuePrefix = '-';
    else if (this.y3i_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.y3i_1;
    return 'FontFeature(' + valuePrefix + this.x3i_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.b3j() === other.b3j()))
      return false;
    if (!(this.y3i_1 === other.y3i_1))
      return false;
    if (!(this.z3i_1 === other.z3i_1))
      return false;
    return this.a3j_1 === other.a3j_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.x3i_1 | 0;
    result = imul(result, PRIME) + this.y3i_1 | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var this_0 = this.z3i_1;
    var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> 16 | 0);
    var other = this.z3i_1;
    var this_2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) ^ _UInt___get_data__impl__f0vqqw(other));
    result = tmp + _UInt___get_data__impl__f0vqqw(this_2) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var this_3 = this.a3j_1;
    var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) >>> 16 | 0);
    var other_0 = this.a3j_1;
    var this_5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) ^ _UInt___get_data__impl__f0vqqw(other_0));
    result = tmp_0 + _UInt___get_data__impl__f0vqqw(this_5) | 0;
    return result;
  };
  function Companion_11() {
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    this.d3j_1 = top;
    this.e3j_1 = ascent;
    this.f3j_1 = descent;
    this.g3j_1 = bottom;
    this.h3j_1 = leading;
    this.i3j_1 = avgCharWidth;
    this.j3j_1 = maxCharWidth;
    this.k3j_1 = xMin;
    this.l3j_1 = xMax;
    this.m3j_1 = xHeight;
    this.n3j_1 = capHeight;
    this.o3j_1 = underlineThickness;
    this.p3j_1 = underlinePosition;
    this.q3j_1 = strikeoutThickness;
    this.r3j_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).l39 = function () {
    return this.f3j_1 - this.e3j_1;
  };
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.d3j_1, other.d3j_1) === 0))
      return false;
    if (!(compareTo(this.e3j_1, other.e3j_1) === 0))
      return false;
    if (!(compareTo(this.f3j_1, other.f3j_1) === 0))
      return false;
    if (!(compareTo(this.g3j_1, other.g3j_1) === 0))
      return false;
    if (!(compareTo(this.h3j_1, other.h3j_1) === 0))
      return false;
    if (!(compareTo(this.i3j_1, other.i3j_1) === 0))
      return false;
    if (!(compareTo(this.j3j_1, other.j3j_1) === 0))
      return false;
    if (!(compareTo(this.k3j_1, other.k3j_1) === 0))
      return false;
    if (!(compareTo(this.l3j_1, other.l3j_1) === 0))
      return false;
    if (!(compareTo(this.m3j_1, other.m3j_1) === 0))
      return false;
    if (!(compareTo(this.n3j_1, other.n3j_1) === 0))
      return false;
    if (this.o3j_1 == null ? !(other.o3j_1 == null) : !(this.o3j_1 == other.o3j_1))
      return false;
    if (this.p3j_1 == null ? !(other.p3j_1 == null) : !(this.p3j_1 == other.p3j_1))
      return false;
    if (this.q3j_1 == null ? !(other.q3j_1 == null) : !(this.q3j_1 == other.q3j_1))
      return false;
    return !(this.r3j_1 == null ? !(other.r3j_1 == null) : !(this.r3j_1 == other.r3j_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.d3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.e3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.f3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.g3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.h3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.i3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.j3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.k3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.l3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.m3j_1) | 0;
    result = imul(result, PRIME) + toBits(this.n3j_1) | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.o3j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.p3j_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.q3j_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    var tmp_2 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.r3j_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.d3j_1 + ', _ascent=' + this.e3j_1 + ', _descent=' + this.f3j_1 + ', _bottom=' + this.g3j_1 + ', _leading=' + this.h3j_1 + ', _avgCharWidth=' + this.i3j_1 + ', _maxCharWidth=' + this.j3j_1 + ', _xMin=' + this.k3j_1 + ', _xMax=' + this.l3j_1 + ', _xHeight=' + this.m3j_1 + ', _capHeight=' + this.n3j_1 + ', _underlineThickness=' + this.o3j_1 + ', _underlinePosition=' + this.p3j_1 + ', _strikeoutThickness=' + this.q3j_1 + ', _strikeoutPosition=' + this.r3j_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(15);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = $this$interopScope.s3j(result);
        block($this$interopScope, handle);
        $this$interopScope.t3j(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return fromRawData(_this__u8e3s4, result);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_0 = rawData[11];
    var tmp_10 = isNaN_0(this_0) ? null : this_0;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_1 = rawData[12];
    var tmp_11 = isNaN_0(this_1) ? null : this_1;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_2 = rawData[13];
    var tmp_12 = isNaN_0(this_2) ? null : this_2;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_3 = rawData[14];
    var tmp$ret$3 = isNaN_0(this_3) ? null : this_3;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    Companion_instance_51.x3c();
    this.u3j_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  function FontMgr() {
    Companion_getInstance_13();
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_2() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_instance;
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.v3j_1 = weight & 65535 | (width & 255) << 16 | slant.j9_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.v3j_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_13() {
    Companion_instance_13 = this;
    var tmp = this;
    tmp.w3j_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_0 = this;
    tmp_0.x3j_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_1 = this;
    tmp_1.y3j_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    var tmp_2 = this;
    tmp_2.z3j_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  protoOf(FontStyle).a3k = function () {
    return this.v3j_1 & 65535;
  };
  protoOf(FontStyle).b3k = function (weight) {
    return FontStyle_init_$Create$(weight, this.k39(), this.c3k());
  };
  protoOf(FontStyle).k39 = function () {
    return this.v3j_1 >> 16 & 255;
  };
  protoOf(FontStyle).c3k = function () {
    return values_2()[this.v3j_1 >> 24 & 255];
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.a3k() + ', width=' + this.k39() + ', slant=' + this.c3k() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.v3j_1 === other.v3j_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.v3j_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_14();
  }
  function Companion_14() {
    this.d3k_1 = 0;
    this.e3k_1 = 100;
    this.f3k_1 = 200;
    this.g3k_1 = 300;
    this.h3k_1 = 400;
    this.i3k_1 = 500;
    this.j3k_1 = 600;
    this.k3k_1 = 700;
    this.l3k_1 = 800;
    this.m3k_1 = 900;
    this.n3k_1 = 1000;
  }
  var Companion_instance_14;
  function Companion_getInstance_15() {
    return Companion_instance_14;
  }
  function Companion_15() {
    this.o3k_1 = 1;
    this.p3k_1 = 2;
    this.q3k_1 = 3;
    this.r3k_1 = 4;
    this.s3k_1 = 5;
    this.t3k_1 = 6;
    this.u3k_1 = 7;
    this.v3k_1 = 8;
    this.w3k_1 = 9;
  }
  var Companion_instance_15;
  function Companion_getInstance_16() {
    return Companion_instance_15;
  }
  function Companion_16() {
  }
  protoOf(Companion_16).l3i = function (name) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(name.length === 4)) {
      // Inline function 'org.jetbrains.skia.Companion.fromString.<anonymous>' call
      var message = "Name must be exactly 4 symbols, got: '" + name + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(name, 0);
    var tmp = (Char__toInt_impl_vasixd(this_0) & 255) << 24;
    // Inline function 'kotlin.code' call
    var this_1 = charSequenceGet(name, 1);
    var tmp_0 = tmp | (Char__toInt_impl_vasixd(this_1) & 255) << 16;
    // Inline function 'kotlin.code' call
    var this_2 = charSequenceGet(name, 2);
    var tmp_1 = tmp_0 | (Char__toInt_impl_vasixd(this_2) & 255) << 8;
    // Inline function 'kotlin.code' call
    var this_3 = charSequenceGet(name, 3);
    return tmp_1 | Char__toInt_impl_vasixd(this_3) & 255;
  };
  protoOf(Companion_16).c3j = function (tag) {
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    return Companion_instance_16;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.x3k_1 = 1;
    this.y3k_1 = new GradientStyle(FilterTileMode_CLAMP_getInstance(), true, null);
  }
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function GradientStyle(tileMode, isPremul, localMatrix) {
    Companion_getInstance_18();
    this.z3k_1 = tileMode;
    this.a3l_1 = isPremul;
    this.b3l_1 = localMatrix;
  }
  protoOf(GradientStyle).d3f = function () {
    return 0 | (this.a3l_1 ? Companion_getInstance_18().x3k_1 : 0);
  };
  protoOf(GradientStyle).c3l = function () {
    var tmp0_safe_receiver = this.b3l_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i3g_1;
  };
  protoOf(GradientStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof GradientStyle))
      return false;
    if (!(this.a3l_1 === other.a3l_1))
      return false;
    if (!this.z3k_1.equals(other.z3k_1))
      return false;
    return !(this.b3l_1 == null ? !(other.b3l_1 == null) : !equals(this.b3l_1, other.b3l_1));
  };
  protoOf(GradientStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.a3l_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.z3k_1.hashCode() | 0;
    var tmp = imul(result, PRIME);
    var tmp0_safe_receiver = this.b3l_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 43 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(GradientStyle).toString = function () {
    return 'GradientStyle(_tileMode=' + this.z3k_1 + ', _premul=' + this.a3l_1 + ', _localMatrix=' + this.b3l_1 + ')';
  };
  function IHasImageInfo() {
  }
  function Companion_18() {
  }
  var Companion_instance_18;
  function Companion_getInstance_19() {
    return Companion_instance_18;
  }
  function IRange(start, end) {
    this.d3l_1 = start;
    this.e3l_1 = end;
  }
  protoOf(IRange).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof IRange))
      return false;
    if (!(this.d3l_1 === other.d3l_1))
      return false;
    return this.e3l_1 === other.e3l_1;
  };
  protoOf(IRange).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.d3l_1 | 0;
    result = imul(result, PRIME) + this.e3l_1 | 0;
    return result;
  };
  protoOf(IRange).toString = function () {
    return 'IRange(_start=' + this.d3l_1 + ', _end=' + this.e3l_1 + ')';
  };
  function fromInteropPointer_0(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = $this$interopScope.f3l(result);
        block($this$interopScope, handle);
        $this$interopScope.z3e(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    var result_0 = result;
    return new IRange(result_0[0], result_0[1]);
  }
  function Companion_19() {
    Companion_instance_19 = this;
    Companion_instance_51.x3c();
  }
  protoOf(Companion_19).g3l = function (bitmap) {
    var tmp;
    try {
      Stats_instance.z3c();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_instance_53.a3f())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap);
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  protoOf(Companion_19).h3l = function (bytes) {
    Stats_instance.z3c();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromEncoded.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$1 = org_jetbrains_skia_Image__1nMakeFromEncoded($this$interopScope.v3h(bytes), bytes.length);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    var ptr = tmp$ret$1;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(ptr === Companion_instance_53.a3f())) {
      // Inline function 'org.jetbrains.skia.Companion.makeFromEncoded.<anonymous>' call
      var message = 'Failed to Image::makeFromEncoded';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new Image(ptr);
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Image_nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'Image_nGetImageInfo';
    return l;
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.k3l_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_21();
        var tmp_2 = this$0.d3d_1;
        tmp_0.k3l_1 = tmp_1.l3d(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image(ptr) {
    Companion_getInstance_20();
    RefCnt_init_$Init$(ptr, this);
    this.k3l_1 = null;
  }
  protoOf(Image).j3d = function () {
    var tmp;
    try {
      if (this.k3l_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.k3l_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, values_1()[colorType], values_0()[alphaType], colorSpace === Companion_instance_53.a3f() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, objectCreate(protoOf(ImageInfo)));
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.k3d_1 = new ImageInfo(Companion_getInstance_5().i3h_1, 0, 0);
  }
  protoOf(Companion_20).l3l = function (width, height, alphaType) {
    return new ImageInfo(new ColorInfo(Companion_getInstance_7().r3h_1, alphaType, null), width, height);
  };
  protoOf(Companion_20).l3d = function (_ptr, _nGetImageInfo) {
    Stats_instance.z3c();
    var colorSpacePtr = null;
    // Inline function 'kotlin.let' call
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(4);
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = $this$interopScope.f3l(result);
        // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var result_0 = new NativePointerArray(1);
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var $this$interopScope_0 = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var handle_0 = $this$interopScope_0.m3l(result_0);
            // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>.<anonymous>' call
            _nGetImageInfo(_ptr, handle, handle_0);
            $this$interopScope_0.n3l(handle_0, result_0);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
            }
          }
        }
        colorSpacePtr = result_0.i1(0);
        $this$interopScope.z3e(handle, result);
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
    return ImageInfo_init_$Create$(result[0], result[1], result[2], result[3], ensureNotNull(colorSpacePtr));
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_21();
    this.p3d_1 = colorInfo;
    this.q3d_1 = width;
    this.r3d_1 = height;
  }
  protoOf(ImageInfo).w3d = function () {
    return imul(this.q3d_1, this.m3h());
  };
  protoOf(ImageInfo).m3h = function () {
    return this.p3d_1.m3h();
  };
  protoOf(ImageInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.q3d_1 === other.q3d_1))
      return false;
    if (!(this.r3d_1 === other.r3d_1))
      return false;
    return this.p3d_1.equals(other.p3d_1);
  };
  protoOf(ImageInfo).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.q3d_1 | 0;
    result = imul(result, PRIME) + this.r3d_1 | 0;
    result = imul(result, PRIME) + this.p3d_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageInfo).toString = function () {
    return 'ImageInfo(_colorInfo=' + this.p3d_1 + ', _width=' + this.q3d_1 + ', _height=' + this.r3d_1 + ')';
  };
  function Companion_21() {
    Companion_instance_21 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.ManagedString.<init>.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$1 = org_jetbrains_skia_ManagedString__1nMake($this$interopScope.c3e(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    ManagedString.call($this, tmp$ret$1);
    Stats_instance.z3c();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.p3l_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_22();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_6().p3l_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.d3d_1);
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var result = new Int8Array(size);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var handle = $this$interopScope.q3l(result);
          // Inline function 'org.jetbrains.skia.ManagedString.toString.<anonymous>' call
          org_jetbrains_skia_ManagedString__nStringData(this.d3d_1, handle, size);
          $this$interopScope.r3l(handle, result);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
      tmp = decodeToString(result);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).u3l = function (s) {
    Stats_instance.z3c();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_ManagedString__1nAppend(this.d3d_1, $this$interopScope.c3e(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return this;
  };
  function Companion_22() {
    Companion_instance_22 = this;
    this.v3l_1 = this.w3l(0.0, 0.0);
  }
  protoOf(Companion_22).w3l = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Matrix33(mat) {
    Companion_getInstance_23();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 9)) {
      // Inline function 'org.jetbrains.skia.Matrix33.<anonymous>' call
      var message = 'Expected 9 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.i3g_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.i3g_1, other.i3g_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.i3g_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + this.i3g_1 + ')';
  };
  function Companion_23() {
    Companion_instance_23 = this;
    this.x3l_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function Matrix44(mat) {
    Companion_getInstance_24();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 16)) {
      // Inline function 'org.jetbrains.skia.Matrix44.<anonymous>' call
      var message = 'Expected 16 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.p3g_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.p3g_1, other.p3g_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.p3g_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + this.p3g_1 + ')';
  };
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_instance;
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.y3l_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_7().y3l_1);
    Paint.call($this);
    Stats_instance.z3c();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).e3d = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.d3d_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).b3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetAntiAlias(this.d3d_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).c3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetMode(this.d3d_1, value.j9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).d3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetColor(this.d3d_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).e3m = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).f3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.d3d_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).g3m = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).h3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.d3d_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).i3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.d3d_1, value.j9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).j3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.d3d_1, value.j9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).k3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetShader(this.d3d_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).l3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.d3d_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).m3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.d3d_1, value.j9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).n3m = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = values()[org_jetbrains_skia_Paint__1nGetBlendMode(this.d3d_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).o3m = function () {
    return this.n3m().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).p3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.d3d_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).q3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.d3d_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_25();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_instance;
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_instance;
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_instance;
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_instance_51.x3c();
  }
  protoOf(Companion_25).r3m = function (one, two, op) {
    var tmp;
    try {
      Stats_instance.z3c();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.j9_1);
      tmp = ptr === Companion_instance_53.a3f() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.s3m_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_instance.z3c();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.d3d_1, it);
      return Unit_instance;
    };
  }
  function Path(ptr) {
    Companion_getInstance_26();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_8().s3m_1);
  }
  protoOf(Path).e3d = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.d3d_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).v3m = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Path__1nSetFillMode(this.d3d_1, value.j9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).w3m = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = values_3()[org_jetbrains_skia_Path__1nGetFillMode(this.d3d_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).x3m = function () {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nReset(this.d3d_1);
    return this;
  };
  protoOf(Path).y3m = function () {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nRewind(this.d3d_1);
    return this;
  };
  protoOf(Path).n26 = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).z3m = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      var tmp_0 = Companion_instance_32;
      tmp = tmp_0.a3n(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).b3n = function (x, y) {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nMoveTo(this.d3d_1, x, y);
    return this;
  };
  protoOf(Path).c3n = function (dx, dy) {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nRMoveTo(this.d3d_1, dx, dy);
    return this;
  };
  protoOf(Path).d3n = function (x, y) {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nLineTo(this.d3d_1, x, y);
    return this;
  };
  protoOf(Path).e3n = function (dx, dy) {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nRLineTo(this.d3d_1, dx, dy);
    return this;
  };
  protoOf(Path).f3n = function (x1, y1, x2, y2) {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nQuadTo(this.d3d_1, x1, y1, x2, y2);
    return this;
  };
  protoOf(Path).g3n = function (dx1, dy1, dx2, dy2) {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nRQuadTo(this.d3d_1, dx1, dy1, dx2, dy2);
    return this;
  };
  protoOf(Path).h3n = function (x1, y1, x2, y2, x3, y3) {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nCubicTo(this.d3d_1, x1, y1, x2, y2, x3, y3);
    return this;
  };
  protoOf(Path).i3n = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nRCubicTo(this.d3d_1, dx1, dy1, dx2, dy2, dx3, dy3);
    return this;
  };
  protoOf(Path).j3n = function () {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nClosePath(this.d3d_1);
    return this;
  };
  protoOf(Path).k3n = function (rect, dir, start) {
    Stats_instance.z3c();
    org_jetbrains_skia_Path__1nAddRect(this.d3d_1, rect.k3f_1, rect.l3f_1, rect.m3f_1, rect.n3f_1, dir.j9_1, start);
    return this;
  };
  protoOf(Path).l3n = function (rect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.k3n(rect, dir, start) : $super.k3n.call(this, rect, dir, start);
  };
  protoOf(Path).m3n = function (rrect, dir, start) {
    Stats_instance.z3c();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Path__1nAddRRect(this.d3d_1, rrect.k3f_1, rrect.l3f_1, rrect.m3f_1, rrect.n3f_1, $this$interopScope.v3f(rrect.u3f_1), rrect.u3f_1.length, dir.j9_1, start);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return this;
  };
  protoOf(Path).n3n = function (rrect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.m3n(rrect, dir, start) : $super.m3n.call(this, rrect, dir, start);
  };
  protoOf(Path).o3n = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Path__1nAddPathOffset(this.d3d_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(Path).p3n = function (src, dx, dy, extend, $super) {
    extend = extend === VOID ? false : extend;
    return $super === VOID ? this.o3n(src, dx, dy, extend) : $super.o3n.call(this, src, dx, dy, extend);
  };
  protoOf(Path).q3n = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_instance.z3c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_Path__1nTransform(this.d3d_1, $this$interopScope.v3f(matrix.i3g_1), getPtr(dst), applyPerspectiveClip);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  protoOf(Path).r3n = function (matrix, dst, applyPerspectiveClip, $super) {
    dst = dst === VOID ? null : dst;
    applyPerspectiveClip = applyPerspectiveClip === VOID ? true : applyPerspectiveClip;
    return $super === VOID ? this.q3n(matrix, dst, applyPerspectiveClip) : $super.q3n.call(this, matrix, dst, applyPerspectiveClip);
  };
  protoOf(Path).v = function () {
    return this.s3n(false);
  };
  protoOf(Path).s3n = function (forceClose) {
    return Companion_getInstance_28().t3n(this, forceClose);
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_instance;
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_3() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_instance;
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function PathMeasure_init_$Init$($this) {
    PathMeasure.call($this, org_jetbrains_skia_PathMeasure__1nMake());
    return $this;
  }
  function PathMeasure_init_$Create$() {
    return PathMeasure_init_$Init$(objectCreate(protoOf(PathMeasure)));
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.u3n_1 = org_jetbrains_skia_PathMeasure__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function PathMeasure(ptr) {
    Companion_getInstance_27();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().u3n_1);
  }
  protoOf(PathMeasure).x3n = function (path, forceClosed) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_PathMeasure__1nSetPath(this.d3d_1, getPtr(path), forceClosed);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
    }
    return tmp;
  };
  protoOf(PathMeasure).a = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_PathMeasure__1nGetLength(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathMeasure).y3n = function (startD, endD, dst, startWithMoveTo) {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_PathMeasure__1nGetSegment(this.d3d_1, startD, endD, getPtr(dst), startWithMoveTo);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_instance;
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_4()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(verbOrdinal === PathVerb_MOVE_getInstance().j9_1 ? true : verbOrdinal === PathVerb_CLOSE_getInstance().j9_1)) {
      // Inline function 'org.jetbrains.skia.PathSegment.<init>.<anonymous>' call
      var message = 'Expected MOVE or CLOSE, got ' + values_4()[verbOrdinal];
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.z3n_1 = verb;
    this.a3o_1 = p0;
    this.b3o_1 = p1;
    this.c3o_1 = p2;
    this.d3o_1 = p3;
    this.e3o_1 = conicWeight;
    this.f3o_1 = isCloseLine;
    this.g3o_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.z3n_1 + (!this.z3n_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + this.a3o_1 : '') + ((((this.z3n_1.equals(PathVerb_LINE_getInstance()) ? true : this.z3n_1.equals(PathVerb_QUAD_getInstance())) ? true : this.z3n_1.equals(PathVerb_CONIC_getInstance())) ? true : this.z3n_1.equals(PathVerb_CUBIC_getInstance())) ? ', p1=' + this.b3o_1 : '') + (((this.z3n_1.equals(PathVerb_QUAD_getInstance()) ? true : this.z3n_1.equals(PathVerb_CONIC_getInstance())) ? true : this.z3n_1.equals(PathVerb_CUBIC_getInstance())) ? ', p2=' + this.c3o_1 : '') + (this.z3n_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + this.d3o_1 : '') + (this.z3n_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.e3o_1 : '') + (this.z3n_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.f3o_1 : '') + (!this.z3n_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.g3o_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return ((((((this.z3n_1.equals(other.z3n_1) ? !this.z3n_1.equals(PathVerb_DONE_getInstance()) ? equals(this.a3o_1, other.a3o_1) : true : false) ? (((this.z3n_1.equals(PathVerb_LINE_getInstance()) ? true : this.z3n_1.equals(PathVerb_QUAD_getInstance())) ? true : this.z3n_1.equals(PathVerb_CONIC_getInstance())) ? true : this.z3n_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.b3o_1, other.b3o_1) : true : false) ? ((this.z3n_1.equals(PathVerb_QUAD_getInstance()) ? true : this.z3n_1.equals(PathVerb_CONIC_getInstance())) ? true : this.z3n_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.c3o_1, other.c3o_1) : true : false) ? this.z3n_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.d3o_1, other.d3o_1) : true : false) ? this.z3n_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.e3o_1, this.e3o_1) === 0 : true : false) ? this.z3n_1.equals(PathVerb_LINE_getInstance()) ? this.f3o_1 === other.f3o_1 : true : false) ? !this.z3n_1.equals(PathVerb_DONE_getInstance()) ? this.g3o_1 === other.g3o_1 : true : false;
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp;
    switch (this.z3n_1.j9_1) {
      case 6:
        tmp = objectHashes([this.z3n_1]);
        break;
      case 0:
        tmp = objectHashes([this.z3n_1, this.a3o_1, this.g3o_1]);
        break;
      case 1:
        tmp = objectHashes([this.z3n_1, this.a3o_1, this.b3o_1, this.f3o_1, this.g3o_1]);
        break;
      case 2:
        tmp = objectHashes([this.z3n_1, this.a3o_1, this.b3o_1, this.c3o_1, this.g3o_1]);
        break;
      case 3:
        tmp = objectHashes([this.z3n_1, this.a3o_1, this.b3o_1, this.c3o_1, this.e3o_1, this.g3o_1]);
        break;
      case 4:
        tmp = objectHashes([this.z3n_1, this.a3o_1, this.b3o_1, this.c3o_1, this.d3o_1, this.g3o_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_27() {
    Companion_instance_27 = this;
    Companion_instance_51.x3c();
  }
  protoOf(Companion_27).t3n = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.k3o_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function nextSegment($this) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(10);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = $this$interopScope.f3l(result);
        // Inline function 'org.jetbrains.skia.PathSegmentIterator.nextSegment.<anonymous>' call
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.d3d_1, handle);
        $this$interopScope.z3e(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return pathSegmentFromIntArray(result);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_28();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.j3o_1 = _path;
    this.k3o_1 = null;
    Stats_instance.z3c();
  }
  protoOf(PathSegmentIterator).y = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.k3o_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3n_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.k3o_1;
      this.k3o_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).w = function () {
    var tmp0_safe_receiver = this.k3o_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3n_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).x = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp;
    switch (values_4()[verb].j9_1) {
      case 0:
      case 5:
        // Inline function 'kotlin.fromBits' call

        var bits = points[0];
        var tmp_0 = floatFromBits(bits);
        // Inline function 'kotlin.fromBits' call

        var bits_0 = points[1];
        var tmp$ret$1 = floatFromBits(bits_0);
        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        // Inline function 'kotlin.fromBits' call

        var bits_1 = points[0];
        var tmp_1 = floatFromBits(bits_1);
        // Inline function 'kotlin.fromBits' call

        var bits_2 = points[1];
        var tmp_2 = floatFromBits(bits_2);
        // Inline function 'kotlin.fromBits' call

        var bits_3 = points[2];
        var tmp_3 = floatFromBits(bits_3);
        // Inline function 'kotlin.fromBits' call

        var bits_4 = points[3];
        var tmp$ret$5 = floatFromBits(bits_4);
        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        // Inline function 'kotlin.fromBits' call

        var bits_5 = points[0];
        var tmp_4 = floatFromBits(bits_5);
        // Inline function 'kotlin.fromBits' call

        var bits_6 = points[1];
        var tmp_5 = floatFromBits(bits_6);
        // Inline function 'kotlin.fromBits' call

        var bits_7 = points[2];
        var tmp_6 = floatFromBits(bits_7);
        // Inline function 'kotlin.fromBits' call

        var bits_8 = points[3];
        var tmp_7 = floatFromBits(bits_8);
        // Inline function 'kotlin.fromBits' call

        var bits_9 = points[4];
        var tmp_8 = floatFromBits(bits_9);
        // Inline function 'kotlin.fromBits' call

        var bits_10 = points[5];
        var tmp$ret$11 = floatFromBits(bits_10);
        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        // Inline function 'kotlin.fromBits' call

        var bits_11 = points[0];
        var tmp_9 = floatFromBits(bits_11);
        // Inline function 'kotlin.fromBits' call

        var bits_12 = points[1];
        var tmp_10 = floatFromBits(bits_12);
        // Inline function 'kotlin.fromBits' call

        var bits_13 = points[2];
        var tmp_11 = floatFromBits(bits_13);
        // Inline function 'kotlin.fromBits' call

        var bits_14 = points[3];
        var tmp_12 = floatFromBits(bits_14);
        // Inline function 'kotlin.fromBits' call

        var bits_15 = points[4];
        var tmp_13 = floatFromBits(bits_15);
        // Inline function 'kotlin.fromBits' call

        var bits_16 = points[5];
        var tmp_14 = floatFromBits(bits_16);
        // Inline function 'kotlin.fromBits' call

        var bits_17 = points[8];
        var tmp$ret$18 = floatFromBits(bits_17);
        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        // Inline function 'kotlin.fromBits' call

        var bits_18 = points[0];
        var tmp_15 = floatFromBits(bits_18);
        // Inline function 'kotlin.fromBits' call

        var bits_19 = points[1];
        var tmp_16 = floatFromBits(bits_19);
        // Inline function 'kotlin.fromBits' call

        var bits_20 = points[2];
        var tmp_17 = floatFromBits(bits_20);
        // Inline function 'kotlin.fromBits' call

        var bits_21 = points[3];
        var tmp_18 = floatFromBits(bits_21);
        // Inline function 'kotlin.fromBits' call

        var bits_22 = points[4];
        var tmp_19 = floatFromBits(bits_22);
        // Inline function 'kotlin.fromBits' call

        var bits_23 = points[5];
        var tmp_20 = floatFromBits(bits_23);
        // Inline function 'kotlin.fromBits' call

        var bits_24 = points[6];
        var tmp_21 = floatFromBits(bits_24);
        // Inline function 'kotlin.fromBits' call

        var bits_25 = points[7];
        var tmp$ret$26 = floatFromBits(bits_25);
        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_4() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_instance;
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_28() {
    Companion_instance_28 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Picture(ptr) {
    Companion_getInstance_29();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_29() {
    Companion_instance_29 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_instance.z3c();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.l3o_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_30();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_10().l3o_1);
  }
  protoOf(PictureRecorder).o3o = function (bounds) {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.d3d_1, bounds.k3f_1, bounds.l3f_1, bounds.m3f_1, bounds.n3f_1), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).p3o = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.d3d_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_instance;
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.q3o_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Point(x, y) {
    Companion_getInstance_31();
    this.r3o_1 = x;
    this.s3o_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.r3o_1, other.r3o_1) === 0))
      return false;
    return compareTo(this.s3o_1, other.s3o_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.r3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.s3o_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.r3o_1 + ', _y=' + this.s3o_1 + ')';
  };
  function Point3(x, y, z) {
    this.t3o_1 = x;
    this.u3o_1 = y;
    this.v3o_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.t3o_1, other.t3o_1) === 0))
      return false;
    if (!(compareTo(this.u3o_1, other.u3o_1) === 0))
      return false;
    return compareTo(this.v3o_1, other.v3o_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.t3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.u3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.v3o_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.t3o_1 + ', _y=' + this.u3o_1 + ', _z=' + this.v3o_1 + ')';
  };
  function Companion_31() {
  }
  protoOf(Companion_31).w3o = function (l, t, r, b, xRad, yRad) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([xRad, yRad]);
    return new RRect(l, t, r, b, tmp$ret$0);
  };
  protoOf(Companion_31).x3o = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  var Companion_instance_31;
  function Companion_getInstance_32() {
    return Companion_instance_31;
  }
  function RRect(l, t, r, b, radii) {
    Rect.call(this, l, t, r, b);
    this.u3f_1 = radii;
  }
  protoOf(RRect).toString = function () {
    return 'RRect(_left=' + this.k3f_1 + ', _top=' + this.l3f_1 + ', _right=' + this.m3f_1 + ', _bottom=' + this.n3f_1 + ', _radii=' + joinToString(this.u3f_1) + ')';
  };
  protoOf(RRect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!protoOf(Rect).equals.call(this, other))
      return false;
    var tmp;
    if (this.u3f_1.length === other.u3f_1.length) {
      tmp = contentEquals(this.u3f_1, other.u3f_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.u3f_1), normalizeRadii(other.u3f_1));
    }
    return tmp;
  };
  protoOf(RRect).hashCode = function () {
    var PRIME = 59;
    var result = protoOf(Rect).hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.u3f_1) | 0;
    return result;
  };
  function normalizeRadii(radii) {
    var tmp;
    switch (radii.length) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = new Float32Array(8);
        while (tmp_0 < 8) {
          tmp_1[tmp_0] = 0.0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_1;
        break;
      case 1:
        var tmp_2 = 0;
        var tmp_3 = new Float32Array(8);
        while (tmp_2 < 8) {
          tmp_3[tmp_2] = radii[0];
          tmp_2 = tmp_2 + 1 | 0;
        }

        tmp = tmp_3;
        break;
      case 2:
        var tmp_4 = 0;
        var tmp_5 = new Float32Array(8);
        while (tmp_4 < 8) {
          var tmp_6 = tmp_4;
          tmp_5[tmp_6] = radii[tmp_6 % 2 | 0];
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_5;
        break;
      case 4:
        var tmp_7 = 0;
        var tmp_8 = new Float32Array(8);
        while (tmp_7 < 8) {
          var tmp_9 = tmp_7;
          tmp_8[tmp_9] = radii[tmp_9 / 2 | 0];
          tmp_7 = tmp_7 + 1 | 0;
        }

        tmp = tmp_8;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Companion_32() {
  }
  protoOf(Companion_32).y3o = function (l, t, r, b) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(l <= r)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      var message = 'Rect::makeLTRB expected l <= r, got ' + l + ' > ' + r;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(t <= b)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      var message_0 = 'Rect::makeLTRB expected t <= b, got ' + t + ' > ' + b;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, r, b);
  };
  protoOf(Companion_32).y3f = function (w, h) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(w >= 0.0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeWH.<anonymous>' call
      var message = 'Rect::makeWH expected w >= 0, got: ' + w;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(h >= 0.0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeWH.<anonymous>' call
      var message_0 = 'Rect::makeWH expected h >= 0, got: ' + h;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(0.0, 0.0, w, h);
  };
  protoOf(Companion_32).z3f = function (l, t, w, h) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(w >= 0.0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      var message = 'Rect::makeXYWH expected w >= 0, got: ' + w;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(h >= 0.0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      var message_0 = 'Rect::makeXYWH expected h >= 0, got: ' + h;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, l + w, t + h);
  };
  protoOf(Companion_32).a3n = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(4);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = $this$interopScope.s3j(result);
        block($this$interopScope, handle);
        $this$interopScope.t3j(handle, result);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    var result_0 = result;
    return new Rect(result_0[0], result_0[1], result_0[2], result_0[3]);
  };
  var Companion_instance_32;
  function Companion_getInstance_33() {
    return Companion_instance_32;
  }
  function Rect(left, top, right, bottom) {
    this.k3f_1 = left;
    this.l3f_1 = top;
    this.m3f_1 = right;
    this.n3f_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.k3f_1, other.k3f_1) === 0))
      return false;
    if (!(compareTo(this.l3f_1, other.l3f_1) === 0))
      return false;
    if (!(compareTo(this.m3f_1, other.m3f_1) === 0))
      return false;
    return compareTo(this.n3f_1, other.n3f_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.k3f_1) | 0;
    result = imul(result, PRIME) + toBits(this.l3f_1) | 0;
    result = imul(result, PRIME) + toBits(this.m3f_1) | 0;
    result = imul(result, PRIME) + toBits(this.n3f_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.k3f_1 + ', _top=' + this.l3f_1 + ', _right=' + this.m3f_1 + ', _bottom=' + this.n3f_1 + ')';
  };
  function Companion_33() {
    Companion_instance_33 = this;
    this.a3g_1 = new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
    this.b3g_1 = new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance());
    this.c3g_1 = new CubicResampler(0.33333334, 0.33333334);
    this.d3g_1 = new CubicResampler(0.0, 0.5);
  }
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function Companion_34() {
    Companion_instance_34 = this;
    Companion_instance_51.x3c();
  }
  protoOf(Companion_34).z3o = function (x0, y0, x1, y1, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null ? true : colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.z3c();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeLinearGradient.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeLinearGradient(x0, y0, x1, y1, $this$interopScope.y3e(colors), $this$interopScope.v3f(positions), colors.length, style.z3k_1.j9_1, style.d3f(), $this$interopScope.v3f(style.c3l()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  protoOf(Companion_34).a3p = function (x, y, r, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null ? true : colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeRadialGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.z3c();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeRadialGradient.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeRadialGradient(x, y, r, $this$interopScope.y3e(colors), $this$interopScope.v3f(positions), colors.length, style.z3k_1.j9_1, style.d3f(), $this$interopScope.v3f(style.c3l()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  protoOf(Companion_34).b3p = function (x, y, colors, positions) {
    return this.c3p(x, y, 0.0, 360.0, colors, positions, Companion_getInstance_18().y3k_1);
  };
  protoOf(Companion_34).c3p = function (x, y, startAngle, endAngle, colors, positions, style) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(positions == null ? true : colors.length === positions.length)) {
      // Inline function 'org.jetbrains.skia.Companion.makeSweepGradient.<anonymous>' call
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.z3c();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeSweepGradient.<anonymous>' call
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeSweepGradient(x, y, startAngle, endAngle, $this$interopScope.y3e(colors), $this$interopScope.v3f(positions), colors.length, style.z3k_1.j9_1, style.d3f(), $this$interopScope.v3f(style.c3l()));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function Shader(ptr) {
    Companion_getInstance_35();
    RefCnt_init_$Init$(ptr, this);
  }
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_instance_51.x3c();
  }
  protoOf(ShadowUtils).d3p = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_instance.z3c();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.t3o_1, zPlaneParams.u3o_1, zPlaneParams.v3o_1, lightPos.t3o_1, lightPos.u3o_1, lightPos.v3o_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.e3p_1 = ptr;
    this.f3p_1 = disposePtr;
  }
  protoOf(ArrayDecoder).gk = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.e3p_1, this.f3p_1);
  };
  protoOf(ArrayDecoder).g3p = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.e3p_1, index);
  };
  protoOf(ArrayDecoder).n = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.e3p_1);
  };
  function Companion_35() {
    Companion_instance_35 = this;
    Companion_instance_51.x3c();
  }
  protoOf(Companion_35).h3p = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_instance.z3c();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Companion.makeFromBackendRenderTarget.<anonymous>' call
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          tmp$ret$1 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.j9_1, colorFormat.j9_1, tmp_2, $this$interopScope.y3e(surfaceProps == null ? null : surfaceProps.i3p()));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_53.a3f() ? null : Surface_init_$Create$(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  var Companion_instance_35;
  function Companion_getInstance_36() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function Surface_init_$Init$(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.l3p_1 = context;
    $this.m3p_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$(ptr, context, renderTarget) {
    return Surface_init_$Init$(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).n3p = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.d3d_1);
      var tmp_0;
      if (ptr === Companion_instance_53.a3f()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).o3p = function () {
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_Surface__1nFlushAndSubmit(this.d3d_1, false);
    }finally {
      reachabilityBarrier(this);
    }
  };
  function Surface() {
    Companion_getInstance_36();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_instance;
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_instance;
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.c3f_1.j9_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.b3f_1 = isDeviceIndependentFonts;
    this.c3f_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).d3f = function () {
    return 0 | (this.b3f_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.b3f_1 === other.b3f_1))
      return false;
    return this.c3f_1.equals(other.c3f_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.b3f_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.c3f_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.b3f_1 + ', _pixelGeometry=' + this.c3f_1 + ')';
  };
  protoOf(SurfaceProps).i3p = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([this.d3f(), _getPixelGeometryOrdinal(this)]);
  };
  function Companion_36() {
    Companion_instance_36 = this;
    Companion_instance_51.x3c();
  }
  protoOf(Companion_36).p3p = function (data, index) {
    var tmp;
    try {
      Stats_instance.z3c();
      var ptr = org_jetbrains_skia_Typeface__1nMakeFromData(getPtr(data), index);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === Companion_instance_53.a3f())) {
        // Inline function 'org.jetbrains.skia.Companion.makeFromData.<anonymous>' call
        var message = 'Failed to create Typeface from data ' + data;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = new Typeface(ptr);
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(Companion_36).q3p = function (data, index, $super) {
    index = index === VOID ? 0 : index;
    return $super === VOID ? this.p3p(data, index) : $super.p3p.call(this, data, index);
  };
  var Companion_instance_36;
  function Companion_getInstance_37() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function Typeface(ptr) {
    Companion_getInstance_37();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).t3p = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_Typeface__1nGetFontStyle(this.d3d_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).u3p = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_Typeface__1nGetUniqueId(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).e3d = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.d3d_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).v3p = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      // Inline function 'org.jetbrains.skia.impl.use' call
      // Inline function 'org.jetbrains.skia.Typeface.<get-familyName>.<anonymous>' call
      var tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.d3d_1);
      var this_0 = new ManagedString(tmp$ret$0);
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
        tmp_0 = this_0.toString();
      }finally {
        this_0.j24();
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).toString = function () {
    return "Typeface(familyName='" + this.v3p() + "', fontStyle=" + this.t3p() + ', uniqueId=' + this.u3p() + ')';
  };
  function Companion_37() {
    Companion_instance_37 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_37;
  function Companion_getInstance_38() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.w3p_1 = org_jetbrains_skia_U16String__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function U16String(ptr) {
    Companion_getInstance_38();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_11().w3p_1);
  }
  function CharDirection() {
    CharDirection_instance = this;
    Companion_instance_51.x3c();
    this.x3p_1 = 0;
    this.y3p_1 = 1;
    this.z3p_1 = 2;
    this.a3q_1 = 3;
    this.b3q_1 = 4;
    this.c3q_1 = 5;
    this.d3q_1 = 6;
    this.e3q_1 = 7;
    this.f3q_1 = 8;
    this.g3q_1 = 9;
    this.h3q_1 = 10;
    this.i3q_1 = 11;
    this.j3q_1 = 12;
    this.k3q_1 = 13;
    this.l3q_1 = 14;
    this.m3q_1 = 15;
    this.n3q_1 = 16;
    this.o3q_1 = 17;
    this.p3q_1 = 18;
    this.q3q_1 = 19;
    this.r3q_1 = 20;
    this.s3q_1 = 21;
    this.t3q_1 = 22;
  }
  protoOf(CharDirection).u3q = function (codePoint) {
    return org_jetbrains_skia_icu_Unicode_charDirection(codePoint);
  };
  var CharDirection_instance;
  function CharDirection_getInstance() {
    if (CharDirection_instance == null)
      new CharDirection();
    return CharDirection_instance;
  }
  function getPtr(n) {
    var tmp1_elvis_lhs = n == null ? null : n.d3d_1;
    return tmp1_elvis_lhs == null ? Companion_instance_53.a3f() : tmp1_elvis_lhs;
  }
  var Affinity_UPSTREAM_instance;
  var Affinity_DOWNSTREAM_instance;
  var Affinity_entriesInitialized;
  function Affinity_initEntries() {
    if (Affinity_entriesInitialized)
      return Unit_instance;
    Affinity_entriesInitialized = true;
    Affinity_UPSTREAM_instance = new Affinity('UPSTREAM', 0);
    Affinity_DOWNSTREAM_instance = new Affinity('DOWNSTREAM', 1);
  }
  function Affinity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Affinity_UPSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_UPSTREAM_instance;
  }
  function Affinity_DOWNSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_DOWNSTREAM_instance;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_instance;
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_instance;
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_instance;
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function Companion_38() {
    Companion_instance_38 = this;
    this.v3q_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_38;
  function Companion_getInstance_39() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_39();
    this.w3q_1 = _underline;
    this.x3q_1 = _overline;
    this.y3q_1 = _lineThrough;
    this.z3q_1 = _gaps;
    this.a3r_1 = color;
    this.b3r_1 = lineStyle;
    this.c3r_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).d3r = function () {
    return this.b3r_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.w3q_1 === other.w3q_1))
      return false;
    if (!(this.x3q_1 === other.x3q_1))
      return false;
    if (!(this.y3q_1 === other.y3q_1))
      return false;
    if (!(this.z3q_1 === other.z3q_1))
      return false;
    if (!(this.a3r_1 === other.a3r_1))
      return false;
    if (!(compareTo(this.c3r_1, other.c3r_1) === 0))
      return false;
    return this.d3r().equals(other.d3r());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.w3q_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.x3q_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.y3q_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.z3q_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.a3r_1 | 0;
    result = imul(result, PRIME) + toBits(this.c3r_1) | 0;
    result = imul(result, PRIME) + this.d3r().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.w3q_1 + ', _overline=' + this.x3q_1 + ', _lineThrough=' + this.y3q_1 + ', _gaps=' + this.z3q_1 + ', _color=' + this.a3r_1 + ', _lineStyle=' + this.d3r() + ', _thicknessMultiplier=' + this.c3r_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_5() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_39() {
    Companion_instance_39 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_39;
  function Companion_getInstance_40() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_instance.z3c();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_40();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).g3r = function (fontMgr) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.d3d_1, getPtr(fontMgr), Companion_instance_53.a3f());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).h3r = function (fontMgr) {
    return this.i3r(fontMgr, null);
  };
  protoOf(FontCollection).i3r = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_instance.z3c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.d3d_1, getPtr(fontMgr), $this$interopScope.c3e(defaultFamilyName));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).j3r = function (familyNames, style) {
    var tmp;
    try {
      Stats_instance.z3c();
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var tmp_1 = this.d3d_1;
            var tmp_2 = $this$interopScope.k3r(familyNames);
            var tmp1_elvis_lhs = familyNames == null ? null : familyNames.length;
            tmp$ret$1 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.v3j_1);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
            }
          }
        }
        arrayDecoder = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var arrayDecoder_0 = arrayDecoder;
        // Inline function 'kotlin.collections.toTypedArray' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = until(0, arrayDecoder_0.n());
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator = this_0.v();
        while (tmp0_iterator.w()) {
          var item = tmp0_iterator.y();
          // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
          var tmp$ret$3 = new Typeface(arrayDecoder_0.g3p(item));
          destination.s(tmp$ret$3);
        }
        tmp_0 = copyToArray(destination);
      }finally {
        var tmp0_safe_receiver = arrayDecoder;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.gk();
        }
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_40() {
  }
  protoOf(Companion_40).l3r = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_40).m3r = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_40).n3r = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, $this$interopScope.y3e(intArray), $this$interopScope.o3r(doubleArray));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_40;
  function Companion_getInstance_41() {
    return Companion_instance_40;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    this.p3r_1 = startIndex;
    this.q3r_1 = endIndex;
    this.r3r_1 = endExcludingWhitespaces;
    this.s3r_1 = endIncludingNewline;
    this.t3r_1 = isHardBreak;
    this.u3r_1 = ascent;
    this.v3r_1 = descent;
    this.w3r_1 = unscaledAscent;
    this.x3r_1 = height;
    this.y3r_1 = width;
    this.z3r_1 = left;
    this.a3s_1 = baseline;
    this.b3s_1 = lineNumber;
  }
  protoOf(LineMetrics).c3s = function () {
    return this.z3r_1 + this.y3r_1;
  };
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.p3r_1 === other.p3r_1))
      return false;
    if (!(this.q3r_1 === other.q3r_1))
      return false;
    if (!(this.r3r_1 === other.r3r_1))
      return false;
    if (!(this.s3r_1 === other.s3r_1))
      return false;
    if (!(this.t3r_1 === other.t3r_1))
      return false;
    if (!(compareTo(this.u3r_1, other.u3r_1) === 0))
      return false;
    if (!(compareTo(this.v3r_1, other.v3r_1) === 0))
      return false;
    if (!(compareTo(this.w3r_1, other.w3r_1) === 0))
      return false;
    if (!(compareTo(this.x3r_1, other.x3r_1) === 0))
      return false;
    if (!(compareTo(this.y3r_1, other.y3r_1) === 0))
      return false;
    if (!(compareTo(this.z3r_1, other.z3r_1) === 0))
      return false;
    if (!(compareTo(this.a3s_1, other.a3s_1) === 0))
      return false;
    return this.b3s_1 === other.b3s_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.p3r_1 | 0;
    result = imul(result, PRIME) + this.q3r_1 | 0;
    result = imul(result, PRIME) + this.r3r_1 | 0;
    result = imul(result, PRIME) + this.s3r_1 | 0;
    result = imul(result, PRIME) + (this.t3r_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + toBits_0(this.u3r_1).db() | 0;
    result = imul(result, PRIME) + toBits_0(this.v3r_1).db() | 0;
    result = imul(result, PRIME) + toBits_0(this.w3r_1).db() | 0;
    result = imul(result, PRIME) + toBits_0(this.x3r_1).db() | 0;
    result = imul(result, PRIME) + toBits_0(this.y3r_1).db() | 0;
    result = imul(result, PRIME) + toBits_0(this.z3r_1).db() | 0;
    result = imul(result, PRIME) + toBits_0(this.a3s_1).db() | 0;
    result = imul(result, PRIME) + this.b3s_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.p3r_1 + ', _endIndex=' + this.q3r_1 + ', _endExcludingWhitespaces=' + this.r3r_1 + ', _endIncludingNewline=' + this.s3r_1 + ', _hardBreak=' + this.t3r_1 + ', _ascent=' + this.u3r_1 + ', _descent=' + this.v3r_1 + ', _unscaledAscent=' + this.w3r_1 + ', _height=' + this.x3r_1 + ', _width=' + this.y3r_1 + ', _left=' + this.z3r_1 + ', _baseline=' + this.a3s_1 + ', _lineNumber=' + this.b3s_1 + ')';
  };
  function Companion_41() {
    Companion_instance_41 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_41;
  function Companion_getInstance_42() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.d3s_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function Paragraph$getWordBoundary$lambda(this$0, $offset) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary(this$0.d3d_1, $offset, it);
      return Unit_instance;
    };
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_42();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_12().d3s_1);
    Stats_instance.z3c();
    this.g3s_1 = text;
  }
  protoOf(Paragraph).j24 = function () {
    if (!(this.g3s_1 == null)) {
      ensureNotNull(this.g3s_1).j24();
      this.g3s_1 = null;
    }
    protoOf(Managed).j24.call(this);
  };
  protoOf(Paragraph).l39 = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).h3s = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).i3s = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).j3s = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).k3s = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).l3s = function (width) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.d3d_1, width);
    return this;
  };
  protoOf(Paragraph).m3s = function (canvas, x, y) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.d3d_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).n3s = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_instance.z3c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.getRectsForRange.<anonymous>' call
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.d3d_1, start, end, rectHeightMode.j9_1, rectWidthMode.j9_1);
          var size = Companion_instance_46.l3r(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_46.n3r(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_46.m3r(this_0);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).o3s = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-rectsForPlaceholders>.<anonymous>' call
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.d3d_1);
          var size = Companion_instance_46.l3r(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_46.n3r(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_46.m3r(this_0);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).p3s = function (dx, dy) {
    var tmp;
    try {
      Stats_instance.z3c();
      var res = org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate(this.d3d_1, dx, dy);
      tmp = res >= 0 ? new PositionWithAffinity(res, Affinity_DOWNSTREAM_getInstance()) : new PositionWithAffinity((-res | 0) - 1 | 0, Affinity_UPSTREAM_getInstance());
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).q3s = function (offset) {
    var tmp;
    try {
      Stats_instance.z3c();
      var tmp_0 = Companion_instance_18;
      tmp = fromInteropPointer_0(tmp_0, Paragraph$getWordBoundary$lambda(this, offset));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).r3s = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.g3s_1 == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      } else {
        Stats_instance.z3c();
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-lineMetrics>.<anonymous>' call
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.d3d_1, getPtr(this.g3s_1));
            var size = Companion_instance_40.l3r(this_0);
            var tmp_1 = 0;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp_2 = fillArrayVal(Array(size), null);
            while (tmp_1 < size) {
              var tmp_3 = tmp_1;
              tmp_2[tmp_3] = Companion_instance_40.n3r(this_0, tmp_3);
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_2;
            Companion_instance_40.m3r(this_0);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
            }
          }
        }
        tmp_0 = result;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.g3s_1);
    }
    return tmp;
  };
  protoOf(Paragraph).s3s = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_42() {
    Companion_instance_42 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_42;
  function Companion_getInstance_43() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.t3s_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_43();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_13().t3s_1);
    this.w3s_1 = null;
  }
  protoOf(ParagraphBuilder).x3s = function (style) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.d3d_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).y3s = function (text) {
    Stats_instance.z3c();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.d3d_1, $this$interopScope.c3e(text));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.w3s_1 == null)
      this.w3s_1 = ManagedString_init_$Create$(text);
    else {
      ensureNotNull(this.w3s_1).u3l(text);
    }
    return this;
  };
  protoOf(ParagraphBuilder).z3s = function (style) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.d3d_1, style.a3t_1, style.b3t_1, style.f3t().j9_1, style.g3t().j9_1, style.e3t_1);
    return this;
  };
  protoOf(ParagraphBuilder).v24 = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.d3d_1), this.w3s_1);
      this.w3s_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_instance.z3c();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_43() {
    Companion_instance_43 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_43;
  function Companion_getInstance_44() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.h3t_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function ParagraphStyle() {
    Companion_getInstance_44();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_14().h3t_1);
    Stats_instance.z3c();
  }
  protoOf(ParagraphStyle).e3d = function (other) {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.d3d_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).k3t = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle(this.d3d_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).l3t = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = new StrutStyle(org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle(this.d3d_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).m3t = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.d3d_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).n3t = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.d3d_1, value.j9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).o3t = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.d3d_1, value.j9_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).p3t = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.d3d_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).q3t = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.d3d_1, $this$interopScope.c3e(value));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).r3t = function (value) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.d3d_1, value.s3t_1, value.t3t_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_instance;
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.a3t_1 = width;
    this.b3t_1 = height;
    this.c3t_1 = alignment;
    this.d3t_1 = baselineMode;
    this.e3t_1 = baseline;
  }
  protoOf(PlaceholderStyle).f3t = function () {
    return this.c3t_1;
  };
  protoOf(PlaceholderStyle).g3t = function () {
    return this.d3t_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.a3t_1, other.a3t_1) === 0))
      return false;
    if (!(compareTo(this.b3t_1, other.b3t_1) === 0))
      return false;
    if (!(compareTo(this.e3t_1, other.e3t_1) === 0))
      return false;
    if (!this.f3t().equals(other.f3t()))
      return false;
    return this.g3t().equals(other.g3t());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.a3t_1) | 0;
    result = imul(result, PRIME) + toBits(this.b3t_1) | 0;
    result = imul(result, PRIME) + toBits(this.e3t_1) | 0;
    result = imul(result, PRIME) + this.f3t().hashCode() | 0;
    result = imul(result, PRIME) + this.g3t().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.a3t_1 + ', _height=' + this.b3t_1 + ', _alignment=' + this.f3t() + ', _baselineMode=' + this.g3t() + ', _baseline=' + this.e3t_1 + ')';
  };
  function PositionWithAffinity(position, affinity) {
    this.u3t_1 = position;
    this.v3t_1 = affinity;
  }
  protoOf(PositionWithAffinity).w3t = function () {
    return this.v3t_1;
  };
  protoOf(PositionWithAffinity).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PositionWithAffinity))
      return false;
    if (!(this.u3t_1 === other.u3t_1))
      return false;
    return this.w3t().equals(other.w3t());
  };
  protoOf(PositionWithAffinity).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.u3t_1 | 0;
    result = imul(result, PRIME) + this.w3t().hashCode() | 0;
    return result;
  };
  protoOf(PositionWithAffinity).toString = function () {
    return 'PositionWithAffinity(_position=' + this.u3t_1 + ', _affinity=' + this.w3t() + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_instance;
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_instance;
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_44() {
  }
  var Companion_instance_44;
  function Companion_getInstance_45() {
    return Companion_instance_44;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    this.x3t_1 = color;
    this.y3t_1 = offsetX;
    this.z3t_1 = offsetY;
    this.a3u_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.x3t_1 === other.x3t_1))
      return false;
    if (!(compareTo(this.y3t_1, other.y3t_1) === 0))
      return false;
    if (!(compareTo(this.z3t_1, other.z3t_1) === 0))
      return false;
    return compareTo(this.a3u_1, other.a3u_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.x3t_1 | 0;
    result = imul(result, PRIME) + toBits(this.y3t_1) | 0;
    result = imul(result, PRIME) + toBits(this.z3t_1) | 0;
    var blurSigma = toBits_0(this.a3u_1);
    result = imul(result, PRIME) + blurSigma.ya(32).bb(blurSigma).db() | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.x3t_1 + ', _offsetX=' + this.y3t_1 + ', _offsetY=' + this.z3t_1 + ', _blurSigma=' + this.a3u_1 + ')';
  };
  function Companion_45() {
    Companion_instance_45 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_45;
  function Companion_getInstance_46() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function StrutStyle_init_$Init$($this) {
    StrutStyle.call($this, org_jetbrains_skia_paragraph_StrutStyle__1nMake());
    Stats_instance.z3c();
    return $this;
  }
  function StrutStyle_init_$Create$() {
    return StrutStyle_init_$Init$(objectCreate(protoOf(StrutStyle)));
  }
  function _FinalizerHolder_15() {
    _FinalizerHolder_instance_15 = this;
    this.b3u_1 = org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_15;
  function _FinalizerHolder_getInstance_15() {
    if (_FinalizerHolder_instance_15 == null)
      new _FinalizerHolder_15();
    return _FinalizerHolder_instance_15;
  }
  function StrutStyle(ptr) {
    Companion_getInstance_46();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_15().b3u_1);
  }
  protoOf(StrutStyle).e3d = function (other) {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nEquals(this.d3d_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(StrutStyle).e3u = function (value) {
    this.f3u(value);
  };
  protoOf(StrutStyle).g3u = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).f3u = function (value) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize(this.d3d_1, value);
    return this;
  };
  protoOf(StrutStyle).h3u = function (value) {
    this.i3u(value);
  };
  protoOf(StrutStyle).l39 = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).i3u = function (value) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight(this.d3d_1, value);
    return this;
  };
  protoOf(StrutStyle).j3u = function (value) {
    this.k3u(value);
  };
  protoOf(StrutStyle).l3u = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).k3u = function (value) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled(this.d3d_1, value);
    return this;
  };
  protoOf(StrutStyle).m3u = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).n3u = function (value) {
    this.o3u(value);
  };
  protoOf(StrutStyle).p3u = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden(this.d3d_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).o3u = function (value) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden(this.d3d_1, value);
    return this;
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_instance_32.y3o(l, t, r, b), values_5()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_46() {
  }
  protoOf(Companion_46).n3r = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var rectPtr = $this$interopScope.v3f(rect);
        var directionPtr = $this$interopScope.y3e(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        $this$interopScope.t3j(rectPtr, rect);
        $this$interopScope.z3e(directionPtr, direction);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_46).l3r = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_46).m3r = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_46;
  function Companion_getInstance_47() {
    return Companion_instance_46;
  }
  function TextBox(rect, direction) {
    this.q3u_1 = rect;
    this.r3u_1 = direction;
  }
  protoOf(TextBox).s3u = function () {
    return this.r3u_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.q3u_1.equals(other.q3u_1))
      return false;
    return this.s3u().equals(other.s3u());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.q3u_1.hashCode() | 0;
    result = imul(result, PRIME) + this.s3u().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.q3u_1 + ', _direction=' + this.s3u() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.s3t_1 = firstLine;
    this.t3t_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.s3t_1 + ', restLine=' + this.t3t_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.s3t_1);
    result = imul(result, 31) + getNumberHashCode(this.t3t_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.s3t_1, tmp0_other_with_cast.s3t_1))
      return false;
    if (!equals(this.t3t_1, tmp0_other_with_cast.t3t_1))
      return false;
    return true;
  };
  function Companion_47() {
    Companion_instance_47 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_47;
  function Companion_getInstance_48() {
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_instance.z3c();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_16() {
    _FinalizerHolder_instance_16 = this;
    this.t3u_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_16;
  function _FinalizerHolder_getInstance_16() {
    if (_FinalizerHolder_instance_16 == null)
      new _FinalizerHolder_16();
    return _FinalizerHolder_instance_16;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.d3d_1, it);
      return Unit_instance;
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_48();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_16().t3u_1);
  }
  protoOf(TextStyle).e3d = function (other) {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.d3d_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).d3m = function (value) {
    this.w3u(value);
  };
  protoOf(TextStyle).w3u = function (color) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.d3d_1, color);
    return this;
  };
  protoOf(TextStyle).x3u = function (value) {
    this.y3u(value);
  };
  protoOf(TextStyle).y3u = function (paint) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.d3d_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).z3u = function (value) {
    this.a3v(value);
  };
  protoOf(TextStyle).a3v = function (paint) {
    var tmp;
    try {
      Stats_instance.z3c();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.d3d_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).b3v = function (value) {
    this.c3v(value);
  };
  protoOf(TextStyle).c3v = function (d) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.d3d_1, d.w3q_1, d.x3q_1, d.y3q_1, d.z3q_1, d.a3r_1, d.b3r_1.j9_1, d.c3r_1);
    return this;
  };
  protoOf(TextStyle).d3v = function (value) {
    this.e3v(value);
  };
  protoOf(TextStyle).t3p = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.d3d_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).e3v = function (s) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.d3d_1, s.v3j_1);
    return this;
  };
  protoOf(TextStyle).f3v = function (s) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.d3d_1, s.x3t_1, s.y3t_1, s.z3t_1, s.a3u_1);
    return this;
  };
  protoOf(TextStyle).g3v = function (f) {
    Stats_instance.z3c();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.d3d_1, $this$interopScope.c3e(f.b3j()), f.y3i_1);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).h3v = function (FontFeatures) {
    var inductionVariable = 0;
    var last = FontFeatures.length;
    while (inductionVariable < last) {
      var s = FontFeatures[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.g3v(s);
    }
    return this;
  };
  protoOf(TextStyle).e3u = function (value) {
    this.f3u(value);
  };
  protoOf(TextStyle).f3u = function (size) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.d3d_1, size);
    return this;
  };
  protoOf(TextStyle).i3v = function (value) {
    this.j3v(value);
  };
  protoOf(TextStyle).j3v = function (families) {
    Stats_instance.z3c();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var tmp = this.d3d_1;
        var tmp_0 = $this$interopScope.k3r(families);
        var tmp1_elvis_lhs = families == null ? null : families.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).k3v = function (value) {
    this.l3v(value);
  };
  protoOf(TextStyle).l3v = function (letterSpacing) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.d3d_1, letterSpacing);
    return this;
  };
  protoOf(TextStyle).m3v = function (value) {
    this.n3v(value);
  };
  protoOf(TextStyle).n3v = function (baselineShift) {
    Stats_instance.z3c();
    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.d3d_1, baselineShift);
    return this;
  };
  protoOf(TextStyle).o3v = function () {
    var tmp;
    try {
      Stats_instance.z3c();
      var tmp_0 = Companion_instance_11;
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_48() {
    Companion_instance_48 = this;
    Companion_instance_51.x3c();
  }
  var Companion_instance_48;
  function Companion_getInstance_49() {
    if (Companion_instance_48 == null)
      new Companion_48();
    return Companion_instance_48;
  }
  function TypefaceFontProvider() {
    Companion_getInstance_49();
    FontMgr_init_$Init$(org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake(), this);
    Stats_instance.z3c();
  }
  protoOf(TypefaceFontProvider).r3v = function (typeface, alias) {
    var tmp;
    try {
      Stats_instance.z3c();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var $this$interopScope = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface(this.d3d_1, getPtr(typeface), $this$interopScope.c3e(alias));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().fp();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  function SkikoKeyboardEvent(key, modifiers, kind, timestamp, platform) {
    modifiers = modifiers === VOID ? Companion_getInstance_50().s3v_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    this.x3v_1 = key;
    this.y3v_1 = modifiers;
    this.z3v_1 = kind;
    this.a3w_1 = timestamp;
    this.b3w_1 = platform;
  }
  protoOf(SkikoKeyboardEvent).toString = function () {
    return 'SkikoKeyboardEvent(key=' + this.x3v_1 + ', modifiers=' + new SkikoInputModifiers(this.y3v_1) + ', kind=' + this.z3v_1 + ', timestamp=' + this.a3w_1.toString() + ', platform=' + this.b3w_1 + ')';
  };
  protoOf(SkikoKeyboardEvent).hashCode = function () {
    var result = this.x3v_1.hashCode();
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.y3v_1) | 0;
    result = imul(result, 31) + this.z3v_1.hashCode() | 0;
    result = imul(result, 31) + this.a3w_1.hashCode() | 0;
    result = imul(result, 31) + (this.b3w_1 == null ? 0 : hashCode(this.b3w_1)) | 0;
    return result;
  };
  protoOf(SkikoKeyboardEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoKeyboardEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoKeyboardEvent ? other : THROW_CCE();
    if (!this.x3v_1.equals(tmp0_other_with_cast.x3v_1))
      return false;
    if (!(this.y3v_1 === tmp0_other_with_cast.y3v_1))
      return false;
    if (!this.z3v_1.equals(tmp0_other_with_cast.z3v_1))
      return false;
    if (!this.a3w_1.equals(tmp0_other_with_cast.a3w_1))
      return false;
    if (!equals(this.b3w_1, tmp0_other_with_cast.b3w_1))
      return false;
    return true;
  };
  function _SkikoInputModifiers___init__impl__z8g2zy(value) {
    return value;
  }
  function _SkikoInputModifiers___get_value__impl__13eq4a($this) {
    return $this;
  }
  function Companion_49() {
    Companion_instance_49 = this;
    this.s3v_1 = _SkikoInputModifiers___init__impl__z8g2zy(0);
    this.t3v_1 = _SkikoInputModifiers___init__impl__z8g2zy(1);
    this.u3v_1 = _SkikoInputModifiers___init__impl__z8g2zy(2);
    this.v3v_1 = _SkikoInputModifiers___init__impl__z8g2zy(4);
    this.w3v_1 = _SkikoInputModifiers___init__impl__z8g2zy(8);
  }
  var Companion_instance_49;
  function Companion_getInstance_50() {
    if (Companion_instance_49 == null)
      new Companion_49();
    return Companion_instance_49;
  }
  function SkikoInputModifiers__has_impl_qg30o6($this, value) {
    if (!((_SkikoInputModifiers___get_value__impl__13eq4a(value) & _SkikoInputModifiers___get_value__impl__13eq4a($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoInputModifiers__toString_impl_86hiai($this) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoInputModifiers.toString.<anonymous>' call
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_50().t3v_1)) {
      this_0.s('META');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_50().u3v_1)) {
      this_0.s('CONTROL');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_50().v3v_1)) {
      this_0.s('ALT');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_50().w3v_1)) {
      this_0.s('SHIFT');
    }
    var result = this_0;
    return !result.e1() ? toString(result) : '';
  }
  function SkikoInputModifiers__hashCode_impl_dkoeid($this) {
    return $this;
  }
  function SkikoInputModifiers__equals_impl_tcfkiv($this, other) {
    if (!(other instanceof SkikoInputModifiers))
      return false;
    if (!($this === (other instanceof SkikoInputModifiers ? other.c3w_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SkikoInputModifiers(value) {
    Companion_getInstance_50();
    this.c3w_1 = value;
  }
  protoOf(SkikoInputModifiers).toString = function () {
    return SkikoInputModifiers__toString_impl_86hiai(this.c3w_1);
  };
  protoOf(SkikoInputModifiers).hashCode = function () {
    return SkikoInputModifiers__hashCode_impl_dkoeid(this.c3w_1);
  };
  protoOf(SkikoInputModifiers).equals = function (other) {
    return SkikoInputModifiers__equals_impl_tcfkiv(this.c3w_1, other);
  };
  var SkikoKeyboardEventKind_UNKNOWN_instance;
  var SkikoKeyboardEventKind_UP_instance;
  var SkikoKeyboardEventKind_DOWN_instance;
  var SkikoKeyboardEventKind_TYPE_instance;
  var SkikoKeyboardEventKind_entriesInitialized;
  function SkikoKeyboardEventKind_initEntries() {
    if (SkikoKeyboardEventKind_entriesInitialized)
      return Unit_instance;
    SkikoKeyboardEventKind_entriesInitialized = true;
    SkikoKeyboardEventKind_UNKNOWN_instance = new SkikoKeyboardEventKind('UNKNOWN', 0);
    SkikoKeyboardEventKind_UP_instance = new SkikoKeyboardEventKind('UP', 1);
    SkikoKeyboardEventKind_DOWN_instance = new SkikoKeyboardEventKind('DOWN', 2);
    SkikoKeyboardEventKind_TYPE_instance = new SkikoKeyboardEventKind('TYPE', 3);
  }
  function SkikoKeyboardEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoInputEvent(input, key, modifiers, kind, platform) {
    modifiers = modifiers === VOID ? Companion_getInstance_50().s3v_1 : modifiers;
    this.d3w_1 = input;
    this.e3w_1 = key;
    this.f3w_1 = modifiers;
    this.g3w_1 = kind;
    this.h3w_1 = platform;
  }
  protoOf(SkikoInputEvent).toString = function () {
    return 'SkikoInputEvent(input=' + this.d3w_1 + ', key=' + this.e3w_1 + ', modifiers=' + new SkikoInputModifiers(this.f3w_1) + ', kind=' + this.g3w_1 + ', platform=' + this.h3w_1 + ')';
  };
  protoOf(SkikoInputEvent).hashCode = function () {
    var result = getStringHashCode(this.d3w_1);
    result = imul(result, 31) + this.e3w_1.hashCode() | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.f3w_1) | 0;
    result = imul(result, 31) + this.g3w_1.hashCode() | 0;
    result = imul(result, 31) + (this.h3w_1 == null ? 0 : hashCode(this.h3w_1)) | 0;
    return result;
  };
  protoOf(SkikoInputEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoInputEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoInputEvent ? other : THROW_CCE();
    if (!(this.d3w_1 === tmp0_other_with_cast.d3w_1))
      return false;
    if (!this.e3w_1.equals(tmp0_other_with_cast.e3w_1))
      return false;
    if (!(this.f3w_1 === tmp0_other_with_cast.f3w_1))
      return false;
    if (!this.g3w_1.equals(tmp0_other_with_cast.g3w_1))
      return false;
    if (!equals(this.h3w_1, tmp0_other_with_cast.h3w_1))
      return false;
    return true;
  };
  function SkikoPointerEvent(x, y, kind, deltaX, deltaY, pressedButtons, button, modifiers, timestamp, pointers, platform) {
    deltaX = deltaX === VOID ? 0.0 : deltaX;
    deltaY = deltaY === VOID ? 0.0 : deltaY;
    pressedButtons = pressedButtons === VOID ? Companion_getInstance_51().i3w_1 : pressedButtons;
    button = button === VOID ? Companion_getInstance_51().i3w_1 : button;
    modifiers = modifiers === VOID ? Companion_getInstance_50().s3v_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    pointers = pointers === VOID ? listOf(new SkikoPointer(new Long(0, 0), x, y, SkikoMouseButtons__has_impl_481exw(pressedButtons, Companion_getInstance_51().j3w_1))) : pointers;
    platform = platform === VOID ? null : platform;
    this.u3w_1 = x;
    this.v3w_1 = y;
    this.w3w_1 = kind;
    this.x3w_1 = deltaX;
    this.y3w_1 = deltaY;
    this.z3w_1 = pressedButtons;
    this.a3x_1 = button;
    this.b3x_1 = modifiers;
    this.c3x_1 = timestamp;
    this.d3x_1 = pointers;
    this.e3x_1 = platform;
  }
  protoOf(SkikoPointerEvent).toString = function () {
    return 'SkikoPointerEvent(x=' + this.u3w_1 + ', y=' + this.v3w_1 + ', kind=' + this.w3w_1 + ', deltaX=' + this.x3w_1 + ', deltaY=' + this.y3w_1 + ', pressedButtons=' + new SkikoMouseButtons(this.z3w_1) + ', button=' + new SkikoMouseButtons(this.a3x_1) + ', modifiers=' + new SkikoInputModifiers(this.b3x_1) + ', timestamp=' + this.c3x_1.toString() + ', pointers=' + this.d3x_1 + ', platform=' + this.e3x_1 + ')';
  };
  protoOf(SkikoPointerEvent).hashCode = function () {
    var result = getNumberHashCode(this.u3w_1);
    result = imul(result, 31) + getNumberHashCode(this.v3w_1) | 0;
    result = imul(result, 31) + this.w3w_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.x3w_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y3w_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.z3w_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.a3x_1) | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.b3x_1) | 0;
    result = imul(result, 31) + this.c3x_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.d3x_1) | 0;
    result = imul(result, 31) + (this.e3x_1 == null ? 0 : hashCode(this.e3x_1)) | 0;
    return result;
  };
  protoOf(SkikoPointerEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointerEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointerEvent ? other : THROW_CCE();
    if (!equals(this.u3w_1, tmp0_other_with_cast.u3w_1))
      return false;
    if (!equals(this.v3w_1, tmp0_other_with_cast.v3w_1))
      return false;
    if (!this.w3w_1.equals(tmp0_other_with_cast.w3w_1))
      return false;
    if (!equals(this.x3w_1, tmp0_other_with_cast.x3w_1))
      return false;
    if (!equals(this.y3w_1, tmp0_other_with_cast.y3w_1))
      return false;
    if (!(this.z3w_1 === tmp0_other_with_cast.z3w_1))
      return false;
    if (!(this.a3x_1 === tmp0_other_with_cast.a3x_1))
      return false;
    if (!(this.b3x_1 === tmp0_other_with_cast.b3x_1))
      return false;
    if (!this.c3x_1.equals(tmp0_other_with_cast.c3x_1))
      return false;
    if (!equals(this.d3x_1, tmp0_other_with_cast.d3x_1))
      return false;
    if (!equals(this.e3x_1, tmp0_other_with_cast.e3x_1))
      return false;
    return true;
  };
  var SkikoPointerEventKind_UNKNOWN_instance;
  var SkikoPointerEventKind_UP_instance;
  var SkikoPointerEventKind_DOWN_instance;
  var SkikoPointerEventKind_MOVE_instance;
  var SkikoPointerEventKind_DRAG_instance;
  var SkikoPointerEventKind_SCROLL_instance;
  var SkikoPointerEventKind_ENTER_instance;
  var SkikoPointerEventKind_EXIT_instance;
  var SkikoPointerEventKind_entriesInitialized;
  function SkikoPointerEventKind_initEntries() {
    if (SkikoPointerEventKind_entriesInitialized)
      return Unit_instance;
    SkikoPointerEventKind_entriesInitialized = true;
    SkikoPointerEventKind_UNKNOWN_instance = new SkikoPointerEventKind('UNKNOWN', 0);
    SkikoPointerEventKind_UP_instance = new SkikoPointerEventKind('UP', 1);
    SkikoPointerEventKind_DOWN_instance = new SkikoPointerEventKind('DOWN', 2);
    SkikoPointerEventKind_MOVE_instance = new SkikoPointerEventKind('MOVE', 3);
    SkikoPointerEventKind_DRAG_instance = new SkikoPointerEventKind('DRAG', 4);
    SkikoPointerEventKind_SCROLL_instance = new SkikoPointerEventKind('SCROLL', 5);
    SkikoPointerEventKind_ENTER_instance = new SkikoPointerEventKind('ENTER', 6);
    SkikoPointerEventKind_EXIT_instance = new SkikoPointerEventKind('EXIT', 7);
  }
  function SkikoPointerEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoPointer(id, x, y, pressed, device, pressure) {
    device = device === VOID ? SkikoPointerDevice_MOUSE_getInstance() : device;
    pressure = pressure === VOID ? 1.0 : pressure;
    this.f3x_1 = id;
    this.g3x_1 = x;
    this.h3x_1 = y;
    this.i3x_1 = pressed;
    this.j3x_1 = device;
    this.k3x_1 = pressure;
  }
  protoOf(SkikoPointer).toString = function () {
    return 'SkikoPointer(id=' + this.f3x_1.toString() + ', x=' + this.g3x_1 + ', y=' + this.h3x_1 + ', pressed=' + this.i3x_1 + ', device=' + this.j3x_1 + ', pressure=' + this.k3x_1 + ')';
  };
  protoOf(SkikoPointer).hashCode = function () {
    var result = this.f3x_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.g3x_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h3x_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.i3x_1) | 0;
    result = imul(result, 31) + this.j3x_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.k3x_1) | 0;
    return result;
  };
  protoOf(SkikoPointer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointer))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointer ? other : THROW_CCE();
    if (!this.f3x_1.equals(tmp0_other_with_cast.f3x_1))
      return false;
    if (!equals(this.g3x_1, tmp0_other_with_cast.g3x_1))
      return false;
    if (!equals(this.h3x_1, tmp0_other_with_cast.h3x_1))
      return false;
    if (!(this.i3x_1 === tmp0_other_with_cast.i3x_1))
      return false;
    if (!this.j3x_1.equals(tmp0_other_with_cast.j3x_1))
      return false;
    if (!equals(this.k3x_1, tmp0_other_with_cast.k3x_1))
      return false;
    return true;
  };
  var SkikoPointerDevice_UNKNOWN_instance;
  var SkikoPointerDevice_MOUSE_instance;
  var SkikoPointerDevice_TOUCH_instance;
  var SkikoPointerDevice_entriesInitialized;
  function SkikoPointerDevice_initEntries() {
    if (SkikoPointerDevice_entriesInitialized)
      return Unit_instance;
    SkikoPointerDevice_entriesInitialized = true;
    SkikoPointerDevice_UNKNOWN_instance = new SkikoPointerDevice('UNKNOWN', 0);
    SkikoPointerDevice_MOUSE_instance = new SkikoPointerDevice('MOUSE', 1);
    SkikoPointerDevice_TOUCH_instance = new SkikoPointerDevice('TOUCH', 2);
  }
  function SkikoPointerDevice(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _SkikoMouseButtons___init__impl__kylsco(value) {
    return value;
  }
  function _SkikoMouseButtons___get_value__impl__ltkvwc($this) {
    return $this;
  }
  function Companion_50() {
    Companion_instance_50 = this;
    this.i3w_1 = _SkikoMouseButtons___init__impl__kylsco(0);
    this.j3w_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.k3w_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.l3w_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.m3w_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.n3w_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.o3w_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.p3w_1 = _SkikoMouseButtons___init__impl__kylsco(8);
    this.q3w_1 = _SkikoMouseButtons___init__impl__kylsco(16);
    this.r3w_1 = _SkikoMouseButtons___init__impl__kylsco(32);
    this.s3w_1 = _SkikoMouseButtons___init__impl__kylsco(64);
    this.t3w_1 = _SkikoMouseButtons___init__impl__kylsco(128);
  }
  var Companion_instance_50;
  function Companion_getInstance_51() {
    if (Companion_instance_50 == null)
      new Companion_50();
    return Companion_instance_50;
  }
  function SkikoMouseButtons__has_impl_481exw($this, value) {
    if (!((_SkikoMouseButtons___get_value__impl__ltkvwc(value) & _SkikoMouseButtons___get_value__impl__ltkvwc($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoMouseButtons__toString_impl_e77028($this) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var this_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoMouseButtons.toString.<anonymous>' call
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_51().j3w_1)) {
      this_0.s('LEFT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_51().k3w_1)) {
      this_0.s('RIGHT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_51().l3w_1)) {
      this_0.s('MIDDLE');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_51().p3w_1)) {
      this_0.s('BUTTON_4');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_51().q3w_1)) {
      this_0.s('BUTTON_5');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_51().r3w_1)) {
      this_0.s('BUTTON_6');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_51().s3w_1)) {
      this_0.s('BUTTON_7');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_51().t3w_1)) {
      this_0.s('BUTTON_8');
    }
    var result = this_0;
    return !result.e1() ? toString(result) : '';
  }
  function SkikoMouseButtons__hashCode_impl_7jywqn($this) {
    return $this;
  }
  function SkikoMouseButtons__equals_impl_jnid9f($this, other) {
    if (!(other instanceof SkikoMouseButtons))
      return false;
    if (!($this === (other instanceof SkikoMouseButtons ? other.l3x_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SkikoMouseButtons(value) {
    Companion_getInstance_51();
    this.l3x_1 = value;
  }
  protoOf(SkikoMouseButtons).toString = function () {
    return SkikoMouseButtons__toString_impl_e77028(this.l3x_1);
  };
  protoOf(SkikoMouseButtons).hashCode = function () {
    return SkikoMouseButtons__hashCode_impl_7jywqn(this.l3x_1);
  };
  protoOf(SkikoMouseButtons).equals = function (other) {
    return SkikoMouseButtons__equals_impl_jnid9f(this.l3x_1, other);
  };
  function SkikoKeyboardEventKind_UP_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_UP_instance;
  }
  function SkikoKeyboardEventKind_DOWN_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_DOWN_instance;
  }
  function SkikoKeyboardEventKind_TYPE_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_TYPE_instance;
  }
  function SkikoPointerEventKind_UP_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_UP_instance;
  }
  function SkikoPointerEventKind_DOWN_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DOWN_instance;
  }
  function SkikoPointerEventKind_MOVE_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_MOVE_instance;
  }
  function SkikoPointerEventKind_DRAG_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DRAG_instance;
  }
  function SkikoPointerEventKind_SCROLL_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_SCROLL_instance;
  }
  function SkikoPointerDevice_MOUSE_getInstance() {
    SkikoPointerDevice_initEntries();
    return SkikoPointerDevice_MOUSE_instance;
  }
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_instance;
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  var OS_Android_instance;
  var OS_Linux_instance;
  var OS_Windows_instance;
  var OS_MacOS_instance;
  var OS_Ios_instance;
  var OS_JS_instance;
  var OS_Unknown_instance;
  var OS_entriesInitialized;
  function OS_initEntries() {
    if (OS_entriesInitialized)
      return Unit_instance;
    OS_entriesInitialized = true;
    OS_Android_instance = new OS('Android', 0, 'android');
    OS_Linux_instance = new OS('Linux', 1, 'linux');
    OS_Windows_instance = new OS('Windows', 2, 'windows');
    OS_MacOS_instance = new OS('MacOS', 3, 'macos');
    OS_Ios_instance = new OS('Ios', 4, 'ios');
    OS_JS_instance = new OS('JS', 5, 'js');
    OS_Unknown_instance = new OS('Unknown', 6, 'unknown');
  }
  function OS(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.o3x_1 = id;
  }
  var Arch_X64_instance;
  var Arch_Arm64_instance;
  var Arch_JS_instance;
  var Arch_WASM_instance;
  var Arch_Unknown_instance;
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_instance;
    Arch_entriesInitialized = true;
    Arch_X64_instance = new Arch('X64', 0, 'x64');
    Arch_Arm64_instance = new Arch('Arm64', 1, 'arm64');
    Arch_JS_instance = new Arch('JS', 2, 'js');
    Arch_WASM_instance = new Arch('WASM', 3, 'wasm');
    Arch_Unknown_instance = new Arch('Unknown', 4, 'unknown');
  }
  function Arch(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.r3x_1 = id;
  }
  function OS_Android_getInstance() {
    OS_initEntries();
    return OS_Android_instance;
  }
  function OS_Linux_getInstance() {
    OS_initEntries();
    return OS_Linux_instance;
  }
  function OS_Windows_getInstance() {
    OS_initEntries();
    return OS_Windows_instance;
  }
  function OS_MacOS_getInstance() {
    OS_initEntries();
    return OS_MacOS_instance;
  }
  function OS_Ios_getInstance() {
    OS_initEntries();
    return OS_Ios_instance;
  }
  function OS_Unknown_getInstance() {
    OS_initEntries();
    return OS_Unknown_instance;
  }
  function Arch_Unknown_getInstance() {
    Arch_initEntries();
    return Arch_Unknown_instance;
  }
  function ClipboardManager() {
  }
  protoOf(ClipboardManager).s3x = function (text) {
    return ClipboardManager_setText(text);
  };
  protoOf(ClipboardManager).t3x = function () {
    return ClipboardManager_getText();
  };
  protoOf(ClipboardManager).u3x = function () {
    return ClipboardManager_hasText();
  };
  function URIManager() {
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  function SkikoView() {
  }
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_instance;
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  var LANG$delegate;
  function Pattern(regex) {
    this.z3x_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_js_kt__v403ki();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    _init_properties_Actuals_js_kt__v403ki();
    block();
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_js_kt__v403ki();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_0 = charSequenceLength(lang) === 0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function _init_properties_Actuals_js_kt__v403ki() {
    if (!properties_initialized_Actuals_js_kt_fw1oy4) {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_51() {
  }
  protoOf(Companion_51).x3c = function () {
  };
  var Companion_instance_51;
  function Companion_getInstance_52() {
    return Companion_instance_51;
  }
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function FinalizationThunk(finalizer, obj) {
    this.a3y_1 = finalizer;
    this.b3y_1 = obj;
  }
  protoOf(FinalizationThunk).c3y = function () {
    if (!(this.b3y_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.a3y_1, this.b3y_1);
    }
    this.b3y_1 = 0;
  };
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.c3d_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message = 'Managed ptr is 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(finalizer === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message_0 = 'Managed finalizer is 0';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.c3d_1 = thunk;
    }
  }
  protoOf(Managed).j24 = function () {
    if (Companion_instance_53.a3f() === this.d3d_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).d7() + ', _ptr=' + this.d3d_1);
    else if (null == this.c3d_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).d7() + ', _ptr=' + this.d3d_1);
    else {
      unregister(this);
      ensureNotNull(this.c3d_1).c3y();
      this.c3d_1 = null;
      this.d3d_1 = 0;
    }
  };
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.c3y();
    return Unit_instance;
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (!properties_initialized_Managed_js_kt_llxy4m) {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function get_INTEROP_SCOPE() {
    _init_properties_Native_js_kt__80argu();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_js_kt__80argu();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(array.length);
      $this.a3e_1.s(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 2));
      $this.a3e_1.s(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.a3e_1.s(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.a3e_1.s(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 8));
      $this.a3e_1.s(data);
      if (copyArrayToWasm) {
        toWasm_3(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_4($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) ? array.n() > 0 : false) {
      var data = _malloc(imul(array.n(), 4));
      $this.a3e_1.s(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array.o3l_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a3e_1 = ArrayList_init_$Create$_0();
    this.b3e_1 = false;
  }
  protoOf(InteropScope).c3e = function (string) {
    var tmp;
    if (!(string == null)) {
      var data = _malloc(imul(string.length, 4));
      stringToUTF8(string, data, imul(string.length, 4));
      this.a3e_1.s(data);
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).v3h = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).q3l = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).r3e = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).z3e = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).y3e = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).f3l = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).t3j = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).v3f = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).s3j = function (array) {
    return toInterop_2(this, array, false);
  };
  protoOf(InteropScope).o3r = function (array) {
    return toInterop_3(this, array, true);
  };
  protoOf(InteropScope).r3l = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).m3l = function (array) {
    return toInterop_4(this, array, false);
  };
  protoOf(InteropScope).n3l = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.o3l_1);
  };
  protoOf(InteropScope).k3r = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(stringArray.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(stringArray.length);
      var inductionVariable = 0;
      var last = stringArray.length;
      while (inductionVariable < last) {
        var item = stringArray[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.skia.impl.InteropScope.toInterop.<anonymous>' call
        var tmp$ret$2 = this.c3e(item);
        destination.s(tmp$ret$2);
      }
      var ptrs = toIntArray(destination);
      tmp = this.y3e(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).fp = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.a3e_1.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'org.jetbrains.skia.impl.InteropScope.release.<anonymous>' call
      _free(element);
    }
    this.a3e_1.c1();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.b3e_1) {
      _releaseLocalCallbackScope$accessor$wmqves();
      this.b3e_1 = false;
    }
  };
  function toWasm(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU8.set(src, dest);
  }
  function toWasm_0(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU16.set(src, dest / 2 | 0);
  }
  function fromWasm(src, result) {
    _init_properties_Native_js_kt__80argu();
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_1(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU32.set(src, dest / 4 | 0);
  }
  function fromWasm_0(src, result) {
    _init_properties_Native_js_kt__80argu();
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_2(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPF32.set(src, dest / 4 | 0);
  }
  function toWasm_3(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPF64.set(src, dest / 8 | 0);
  }
  function fromWasm_1(src, result) {
    _init_properties_Native_js_kt__80argu();
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU8.subarray(src, src + result.length | 0));
  }
  function Companion_52() {
  }
  var Companion_instance_52;
  function Companion_getInstance_53() {
    return Companion_instance_52;
  }
  function NativePointerArray(size) {
    this.o3l_1 = new Int32Array(size);
  }
  protoOf(NativePointerArray).i1 = function (index) {
    return this.o3l_1[index];
  };
  protoOf(NativePointerArray).n = function () {
    return this.o3l_1.length;
  };
  function Companion_53() {
  }
  protoOf(Companion_53).a3f = function () {
    return 0;
  };
  var Companion_instance_53;
  function Companion_getInstance_54() {
    return Companion_instance_53;
  }
  function Native(ptr) {
    if (ptr === Companion_instance_53.a3f())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.d3d_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.d3d_1 === other.d3d_1 ? true : this.e3d(other);
  };
  protoOf(Native).hashCode = function () {
    return this.d3d_1;
  };
  protoOf(Native).e3d = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).d7(), '(_ptr=0x') + toString_0(this.d3d_1, 16) + ')';
  };
  function reachabilityBarrier(obj) {
    _init_properties_Native_js_kt__80argu();
  }
  function _createLocalCallbackScope$accessor$wmqves() {
    _init_properties_Native_js_kt__80argu();
    return _createLocalCallbackScope();
  }
  function _releaseLocalCallbackScope$accessor$wmqves() {
    _init_properties_Native_js_kt__80argu();
    return _releaseLocalCallbackScope();
  }
  function _set_interopScopeCounter_$accessor$wmqves_ygusxq(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    return set_interopScopeCounter(_set____db54di);
  }
  function _get_interopScopeCounter_$accessor$wmqves_umgosu() {
    _init_properties_Native_js_kt__80argu();
    return get_interopScopeCounter();
  }
  function _get_INTEROP_SCOPE_$accessor$wmqves_peku9r() {
    _init_properties_Native_js_kt__80argu();
    return get_INTEROP_SCOPE();
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function _init_properties_Native_js_kt__80argu() {
    if (!properties_initialized_Native_js_kt_fdhhkg) {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().d3y_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_17().d3y_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).h3h = function () {
    Stats_instance.z3c();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.d3d_1);
  };
  protoOf(RefCnt).toString = function () {
    var s = protoOf(Managed).toString.call(this);
    // Inline function 'kotlin.text.substring' call
    var endIndex = s.length - 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return s.substring(0, endIndex) + ', refCount=' + this.h3h() + ')';
  };
  function RefCnt() {
  }
  function _FinalizerHolder_17() {
    _FinalizerHolder_instance_17 = this;
    this.d3y_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_17;
  function _FinalizerHolder_getInstance_17() {
    if (_FinalizerHolder_instance_17 == null)
      new _FinalizerHolder_17();
    return _FinalizerHolder_instance_17;
  }
  function Stats() {
  }
  protoOf(Stats).z3c = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function ClipboardManager_setText(text) {
    window.navigator.clipboard.writeText(text);
  }
  function ClipboardManager_getText() {
    return null;
  }
  function ClipboardManager_hasText() {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = ClipboardManager_getText();
    // Inline function 'kotlin.contracts.contract' call
    return !(this_0 == null ? true : charSequenceLength(this_0) === 0);
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.h3y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j24();
    }
    $this.h3y_1 = null;
    var tmp1_safe_receiver = $this.i3y_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.j24();
    }
    $this.i3y_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.k3y_1 = false;
      GL.makeContextCurrent(this$0.f3y_1);
      var tmp0_safe_receiver = this$0.j3y_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.e2z(-1);
      }
      var tmp1_safe_receiver = this$0.j3y_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.j3g();
      this$0.l3y(timestamp);
      var tmp2_safe_receiver = this$0.h3y_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.o3p();
      }
      this$0.g3y_1.e3i();
      return Unit_instance;
    };
  }
  function CanvasRenderer(htmlCanvas) {
    this.e3y_1 = htmlCanvas;
    this.f3y_1 = createWebGLContext(this.e3y_1);
    this.h3y_1 = null;
    this.i3y_1 = null;
    this.j3y_1 = null;
    GL.makeContextCurrent(this.f3y_1);
    this.g3y_1 = Companion_getInstance_9().b3i();
    this.k3y_1 = false;
  }
  protoOf(CanvasRenderer).k39 = function () {
    return this.e3y_1.width;
  };
  protoOf(CanvasRenderer).l39 = function () {
    return this.e3y_1.height;
  };
  protoOf(CanvasRenderer).m3y = function (desiredWidth, desiredHeight, scale, pixelGeometry) {
    disposeCanvas(this);
    this.e3y_1.width = numberToInt(desiredWidth * scale);
    this.e3y_1.height = numberToInt(desiredHeight * scale);
    this.i3y_1 = Companion_getInstance_0().y3c(this.k39(), this.l39(), 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_36().h3p(this.g3y_1, ensureNotNull(this.i3y_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_6().n3h_1, new SurfaceProps(VOID, pixelGeometry));
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.h3y_1 = tmp_0;
    this.j3y_1 = ensureNotNull(this.h3y_1).n3p();
  };
  protoOf(CanvasRenderer).n3y = function () {
    if (this.k3y_1) {
      return Unit_instance;
    }
    this.k3y_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_SPECIAL_KEYS() {
    _init_properties_Convertors_js_kt__upzh8o();
    return SPECIAL_KEYS;
  }
  var SPECIAL_KEYS;
  function set_buttonsFlags(_set____db54di) {
    _init_properties_Convertors_js_kt__upzh8o();
    buttonsFlags = _set____db54di;
  }
  function get_buttonsFlags() {
    _init_properties_Convertors_js_kt__upzh8o();
    return buttonsFlags;
  }
  var buttonsFlags;
  function toSkikoEvent(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_pressedButtons = toSkikoPressedMouseButtons(event, kind);
    var tmp3_button = toSkikoMouseButton(event);
    var tmp4_modifiers = toSkikoModifiers(event);
    var tmp5_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, kind, VOID, VOID, tmp2_pressedButtons, tmp3_button, tmp4_modifiers, tmp5_timestamp, VOID, event);
  }
  function toSkikoDragEvent(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_pressedButtons = _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    var tmp3_button = toSkikoMouseButton(event);
    var tmp4_modifiers = toSkikoModifiers(event);
    var tmp5_kind = SkikoPointerEventKind_DRAG_getInstance();
    var tmp6_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, tmp5_kind, VOID, VOID, tmp2_pressedButtons, tmp3_button, tmp4_modifiers, tmp6_timestamp, VOID, event);
  }
  function toSkikoScrollEvent(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_deltaX = event.deltaX;
    var tmp3_deltaY = event.deltaY;
    var tmp4_pressedButtons = _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    var tmp5_button = Companion_getInstance_51().i3w_1;
    var tmp6_modifiers = toSkikoModifiers(event);
    var tmp7_kind = SkikoPointerEventKind_SCROLL_getInstance();
    var tmp8_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, tmp7_kind, tmp2_deltaX, tmp3_deltaY, tmp4_pressedButtons, tmp5_button, tmp6_modifiers, tmp8_timestamp, VOID, event);
  }
  function toSkikoEvent_0(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    return new SkikoKeyboardEvent(Companion_instance_54.o3y(toSkikoKey(event)), toSkikoModifiers_0(event), kind, numberToLong(event.timeStamp), event);
  }
  function toSkikoTypeEvent(character, event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp;
    if (get_SPECIAL_KEYS().r(character)) {
      tmp = null;
    } else {
      var input;
      switch (character) {
        case 'Enter':
          input = '\n';
          break;
        case 'Tab':
          input = '\t';
          break;
        default:
          input = character;
          break;
      }
      var key = !(event == null) ? Companion_instance_54.o3y(event.keyCode) : SkikoKey_KEY_UNKNOWN_getInstance();
      var modifiers = !(event == null) ? toSkikoModifiers_0(event) : Companion_getInstance_50().s3v_1;
      tmp = new SkikoInputEvent(input, key, modifiers, SkikoKeyboardEventKind_TYPE_getInstance(), event);
    }
    return tmp;
  }
  function toSkikoPressedMouseButtons(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    var button = event.button;
    if (kind.equals(SkikoPointerEventKind_DOWN_getInstance())) {
      set_buttonsFlags(get_buttonsFlags() | getSkikoButtonValue(button));
      return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    }
    set_buttonsFlags(get_buttonsFlags() ^ getSkikoButtonValue(button));
    return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
  }
  function toSkikoMouseButton(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    return _SkikoMouseButtons___init__impl__kylsco(getSkikoButtonValue(event.button));
  }
  function toSkikoModifiers(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_50().v3v_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_50().w3v_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_50().u3v_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_50().t3v_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function toSkikoKey(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var key = event.keyCode;
    var side = event.location;
    if (side === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      if ((key === SkikoKey_KEY_LEFT_CONTROL_getInstance().r3y_1 ? true : key === SkikoKey_KEY_LEFT_SHIFT_getInstance().r3y_1) ? true : key === SkikoKey_KEY_LEFT_META_getInstance().r3y_1)
        key = key | -2147483648;
    }
    return key;
  }
  function toSkikoModifiers_0(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_50().v3v_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_50().w3v_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_50().u3v_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_50().t3v_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function getSkikoButtonValue(button) {
    _init_properties_Convertors_js_kt__upzh8o();
    switch (button) {
      case 0:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_51().j3w_1);
      case 1:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_51().l3w_1);
      case 2:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_51().k3w_1);
      case 3:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_51().p3w_1);
      case 4:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_51().q3w_1);
      default:
        return 0;
    }
  }
  var properties_initialized_Convertors_js_kt_vbq0oa;
  function _init_properties_Convertors_js_kt__upzh8o() {
    if (!properties_initialized_Convertors_js_kt_vbq0oa) {
      properties_initialized_Convertors_js_kt_vbq0oa = true;
      SPECIAL_KEYS = setOf(['Unidentified', 'Alt', 'AltGraph', 'Backspace', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Help', 'Home', 'Delete', 'End', 'PageUp', 'PageDown', 'Escape', 'Clear', 'Clear']);
      buttonsFlags = 0;
    }
  }
  function get_hostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostOs;
  }
  var hostOs;
  function get_hostArch() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostArch;
  }
  var hostArch;
  var hostId$delegate;
  function detectHostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    // Inline function 'kotlin.takeIf' call
    var this_0 = getNavigatorInfo();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.jetbrains.skiko.detectHostOs.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var platformInfo = tmp0_elvis_lhs == null ? window.navigator.userAgent : tmp0_elvis_lhs;
    return contains(platformInfo, 'Android', true) ? OS_Android_getInstance() : contains(platformInfo, 'iPhone', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iOS', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iPad', true) ? OS_Ios_getInstance() : contains(platformInfo, 'Linux', true) ? OS_Linux_getInstance() : contains(platformInfo, 'Mac', true) ? OS_MacOS_getInstance() : contains(platformInfo, 'Win', true) ? OS_Windows_getInstance() : OS_Unknown_getInstance();
  }
  function getNavigatorInfo() {
    _init_properties_OsArch_js_kt__jkqwph();
    var tmp = navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function hostId$delegate$lambda() {
    _init_properties_OsArch_js_kt__jkqwph();
    return get_hostOs().o3x_1 + '-' + get_hostArch().r3x_1;
  }
  var properties_initialized_OsArch_js_kt_ik094d;
  function _init_properties_OsArch_js_kt__jkqwph() {
    if (!properties_initialized_OsArch_js_kt_ik094d) {
      properties_initialized_OsArch_js_kt_ik094d = true;
      hostOs = detectHostOs();
      hostArch = Arch_Unknown_getInstance();
      hostId$delegate = lazy(hostId$delegate$lambda);
    }
  }
  var onContentScaleChanged;
  function setOnChangeScaleNotifier($this) {
    var tmp0_safe_receiver = $this.s3y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m3y($this.w3y_1, $this.x3y_1, $this.z3y(), $this.a3z());
    }
    var tmp = window.matchMedia('(resolution: ' + $this.z3y() + 'dppx)');
    tmp.addEventListener('change', SkiaLayer$setOnChangeScaleNotifier$lambda($this), true);
    var tmp1_safe_receiver = onContentScaleChanged;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver($this.z3y());
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.i3z_1 = this$0;
    CanvasRenderer.call(this, $htmlCanvas);
  }
  protoOf(SkiaLayer$attachTo$1).l3y = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.i3z_1.u3y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y3x(ensureNotNull(this.j3y_1), this.k39(), this.l39(), numberToLong(currentNanos));
    }
  };
  function SkiaLayer$attachTo$lambda(this$0) {
    return function (event) {
      if (!(event instanceof MouseEvent))
        THROW_CCE();
      this$0.v3y_1 = true;
      var tmp0_safe_receiver = this$0.u3y_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w3x(toSkikoEvent(event, SkikoPointerEventKind_DOWN_getInstance()));
      }
      return Unit_instance;
    };
  }
  function SkiaLayer$attachTo$lambda_0(this$0) {
    return function (event) {
      if (!(event instanceof MouseEvent))
        THROW_CCE();
      this$0.v3y_1 = false;
      var tmp0_safe_receiver = this$0.u3y_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w3x(toSkikoEvent(event, SkikoPointerEventKind_UP_getInstance()));
      }
      return Unit_instance;
    };
  }
  function SkiaLayer$attachTo$lambda_1(this$0) {
    return function (event) {
      if (!(event instanceof MouseEvent))
        THROW_CCE();
      var tmp;
      if (this$0.v3y_1) {
        var tmp0_safe_receiver = this$0.u3y_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.w3x(toSkikoDragEvent(event));
        }
        tmp = Unit_instance;
      } else {
        var tmp1_safe_receiver = this$0.u3y_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.w3x(toSkikoEvent(event, SkikoPointerEventKind_MOVE_getInstance()));
        }
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SkiaLayer$attachTo$lambda_2(this$0) {
    return function (event) {
      if (!(event instanceof WheelEvent))
        THROW_CCE();
      var tmp0_safe_receiver = this$0.u3y_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w3x(toSkikoScrollEvent(event));
      }
      return Unit_instance;
    };
  }
  function SkiaLayer$attachTo$lambda_3(event) {
    event.preventDefault();
    return Unit_instance;
  }
  function SkiaLayer$attachTo$lambda_4(this$0) {
    return function (event) {
      if (!(event instanceof KeyboardEvent))
        THROW_CCE();
      var tmp0_safe_receiver = this$0.u3y_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.v3x(toSkikoEvent_0(event, SkikoKeyboardEventKind_DOWN_getInstance()));
      }
      var tmp1_safe_receiver = toSkikoTypeEvent(event.key, event);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_safe_receiver_0 = this$0.u3y_1;
        var tmp1_safe_receiver_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.x3x();
        if (tmp1_safe_receiver_0 == null)
          null;
        else {
          tmp1_safe_receiver_0.j3z(tmp1_safe_receiver);
        }
      }
      return Unit_instance;
    };
  }
  function SkiaLayer$attachTo$lambda_5(this$0) {
    return function (event) {
      if (!(event instanceof KeyboardEvent))
        THROW_CCE();
      var tmp0_safe_receiver = this$0.u3y_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.v3x(toSkikoEvent_0(event, SkikoKeyboardEventKind_UP_getInstance()));
      }
      return Unit_instance;
    };
  }
  function SkiaLayer$setOnChangeScaleNotifier$lambda(this$0) {
    return function (it) {
      setOnChangeScaleNotifier(this$0);
      return Unit_instance;
    };
  }
  function SkiaLayer() {
    this.s3y_1 = null;
    this.t3y_1 = GraphicsApi_WEBGL_getInstance();
    this.u3y_1 = null;
    this.v3y_1 = false;
    this.w3y_1 = 0;
    this.x3y_1 = 0;
    this.y3y_1 = null;
  }
  protoOf(SkiaLayer).z3y = function () {
    return window.devicePixelRatio;
  };
  protoOf(SkiaLayer).n3y = function () {
    var tmp0_safe_receiver = this.s3y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n3y();
    }
  };
  protoOf(SkiaLayer).k3z = function (htmlCanvas, autoDetach) {
    this.y3y_1 = htmlCanvas;
    this.w3y_1 = htmlCanvas.width;
    this.x3y_1 = htmlCanvas.height;
    htmlCanvas.style.width = '' + this.w3y_1 + 'px';
    htmlCanvas.style.height = '' + this.x3y_1 + 'px';
    setOnChangeScaleNotifier(this);
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SkiaLayer$attachTo$1(htmlCanvas, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkiaLayer.attachTo.<anonymous>' call
    this_0.m3y(this.w3y_1, this.x3y_1, this.z3y(), this.a3z());
    tmp.s3y_1 = this_0;
    htmlCanvas.addEventListener('mousedown', SkiaLayer$attachTo$lambda(this));
    htmlCanvas.addEventListener('mouseup', SkiaLayer$attachTo$lambda_0(this));
    htmlCanvas.addEventListener('mousemove', SkiaLayer$attachTo$lambda_1(this));
    htmlCanvas.addEventListener('wheel', SkiaLayer$attachTo$lambda_2(this));
    htmlCanvas.addEventListener('contextmenu', SkiaLayer$attachTo$lambda_3);
    htmlCanvas.addEventListener('keydown', SkiaLayer$attachTo$lambda_4(this));
    htmlCanvas.addEventListener('keyup', SkiaLayer$attachTo$lambda_5(this));
  };
  protoOf(SkiaLayer).l3z = function (htmlCanvas, autoDetach, $super) {
    autoDetach = autoDetach === VOID ? true : autoDetach;
    var tmp;
    if ($super === VOID) {
      this.k3z(htmlCanvas, autoDetach);
      tmp = Unit_instance;
    } else {
      tmp = $super.k3z.call(this, htmlCanvas, autoDetach);
    }
    return tmp;
  };
  protoOf(SkiaLayer).a3z = function () {
    return PixelGeometry_UNKNOWN_getInstance();
  };
  function Empty() {
  }
  protoOf(Empty).j3z = function (event) {
    return Unit_instance;
  };
  var Empty_instance;
  function Empty_getInstance() {
    return Empty_instance;
  }
  var SkikoKey_KEY_UNKNOWN_instance;
  var SkikoKey_KEY_A_instance;
  var SkikoKey_KEY_S_instance;
  var SkikoKey_KEY_D_instance;
  var SkikoKey_KEY_F_instance;
  var SkikoKey_KEY_H_instance;
  var SkikoKey_KEY_G_instance;
  var SkikoKey_KEY_Z_instance;
  var SkikoKey_KEY_X_instance;
  var SkikoKey_KEY_C_instance;
  var SkikoKey_KEY_V_instance;
  var SkikoKey_KEY_B_instance;
  var SkikoKey_KEY_Q_instance;
  var SkikoKey_KEY_W_instance;
  var SkikoKey_KEY_E_instance;
  var SkikoKey_KEY_R_instance;
  var SkikoKey_KEY_Y_instance;
  var SkikoKey_KEY_T_instance;
  var SkikoKey_KEY_U_instance;
  var SkikoKey_KEY_I_instance;
  var SkikoKey_KEY_P_instance;
  var SkikoKey_KEY_L_instance;
  var SkikoKey_KEY_J_instance;
  var SkikoKey_KEY_K_instance;
  var SkikoKey_KEY_N_instance;
  var SkikoKey_KEY_M_instance;
  var SkikoKey_KEY_O_instance;
  var SkikoKey_KEY_1_instance;
  var SkikoKey_KEY_2_instance;
  var SkikoKey_KEY_3_instance;
  var SkikoKey_KEY_4_instance;
  var SkikoKey_KEY_5_instance;
  var SkikoKey_KEY_6_instance;
  var SkikoKey_KEY_7_instance;
  var SkikoKey_KEY_8_instance;
  var SkikoKey_KEY_9_instance;
  var SkikoKey_KEY_0_instance;
  var SkikoKey_KEY_CLOSE_BRACKET_instance;
  var SkikoKey_KEY_OPEN_BRACKET_instance;
  var SkikoKey_KEY_QUOTE_instance;
  var SkikoKey_KEY_SEMICOLON_instance;
  var SkikoKey_KEY_SLASH_instance;
  var SkikoKey_KEY_COMMA_instance;
  var SkikoKey_KEY_BACKSLASH_instance;
  var SkikoKey_KEY_PERIOD_instance;
  var SkikoKey_KEY_BACK_QUOTE_instance;
  var SkikoKey_KEY_EQUALS_instance;
  var SkikoKey_KEY_MINUS_instance;
  var SkikoKey_KEY_ENTER_instance;
  var SkikoKey_KEY_ESCAPE_instance;
  var SkikoKey_KEY_TAB_instance;
  var SkikoKey_KEY_BACKSPACE_instance;
  var SkikoKey_KEY_SPACE_instance;
  var SkikoKey_KEY_CAPSLOCK_instance;
  var SkikoKey_KEY_LEFT_META_instance;
  var SkikoKey_KEY_LEFT_SHIFT_instance;
  var SkikoKey_KEY_LEFT_ALT_instance;
  var SkikoKey_KEY_LEFT_CONTROL_instance;
  var SkikoKey_KEY_RIGHT_META_instance;
  var SkikoKey_KEY_RIGHT_SHIFT_instance;
  var SkikoKey_KEY_RIGHT_ALT_instance;
  var SkikoKey_KEY_RIGHT_CONTROL_instance;
  var SkikoKey_KEY_MENU_instance;
  var SkikoKey_KEY_UP_instance;
  var SkikoKey_KEY_DOWN_instance;
  var SkikoKey_KEY_LEFT_instance;
  var SkikoKey_KEY_RIGHT_instance;
  var SkikoKey_KEY_F1_instance;
  var SkikoKey_KEY_F2_instance;
  var SkikoKey_KEY_F3_instance;
  var SkikoKey_KEY_F4_instance;
  var SkikoKey_KEY_F5_instance;
  var SkikoKey_KEY_F6_instance;
  var SkikoKey_KEY_F7_instance;
  var SkikoKey_KEY_F8_instance;
  var SkikoKey_KEY_F9_instance;
  var SkikoKey_KEY_F10_instance;
  var SkikoKey_KEY_F11_instance;
  var SkikoKey_KEY_F12_instance;
  var SkikoKey_KEY_PRINTSCEEN_instance;
  var SkikoKey_KEY_SCROLL_LOCK_instance;
  var SkikoKey_KEY_PAUSE_instance;
  var SkikoKey_KEY_INSERT_instance;
  var SkikoKey_KEY_HOME_instance;
  var SkikoKey_KEY_PGUP_instance;
  var SkikoKey_KEY_DELETE_instance;
  var SkikoKey_KEY_END_instance;
  var SkikoKey_KEY_PGDOWN_instance;
  var SkikoKey_KEY_NUM_LOCK_instance;
  var SkikoKey_KEY_NUMPAD_0_instance;
  var SkikoKey_KEY_NUMPAD_1_instance;
  var SkikoKey_KEY_NUMPAD_2_instance;
  var SkikoKey_KEY_NUMPAD_3_instance;
  var SkikoKey_KEY_NUMPAD_4_instance;
  var SkikoKey_KEY_NUMPAD_5_instance;
  var SkikoKey_KEY_NUMPAD_6_instance;
  var SkikoKey_KEY_NUMPAD_7_instance;
  var SkikoKey_KEY_NUMPAD_8_instance;
  var SkikoKey_KEY_NUMPAD_9_instance;
  var SkikoKey_KEY_NUMPAD_ENTER_instance;
  var SkikoKey_KEY_NUMPAD_ADD_instance;
  var SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  var SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  var SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  var SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  function Companion_54() {
  }
  protoOf(Companion_54).o3y = function (platformKeyCode) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = values_6();
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.skiko.Companion.valueOf.<anonymous>' call
        if (element.r3y_1 === platformKeyCode) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? SkikoKey_KEY_UNKNOWN_getInstance() : tmp0_elvis_lhs;
  };
  var Companion_instance_54;
  function Companion_getInstance_55() {
    return Companion_instance_54;
  }
  function values_6() {
    return [SkikoKey_KEY_UNKNOWN_getInstance(), SkikoKey_KEY_A_getInstance(), SkikoKey_KEY_S_getInstance(), SkikoKey_KEY_D_getInstance(), SkikoKey_KEY_F_getInstance(), SkikoKey_KEY_H_getInstance(), SkikoKey_KEY_G_getInstance(), SkikoKey_KEY_Z_getInstance(), SkikoKey_KEY_X_getInstance(), SkikoKey_KEY_C_getInstance(), SkikoKey_KEY_V_getInstance(), SkikoKey_KEY_B_getInstance(), SkikoKey_KEY_Q_getInstance(), SkikoKey_KEY_W_getInstance(), SkikoKey_KEY_E_getInstance(), SkikoKey_KEY_R_getInstance(), SkikoKey_KEY_Y_getInstance(), SkikoKey_KEY_T_getInstance(), SkikoKey_KEY_U_getInstance(), SkikoKey_KEY_I_getInstance(), SkikoKey_KEY_P_getInstance(), SkikoKey_KEY_L_getInstance(), SkikoKey_KEY_J_getInstance(), SkikoKey_KEY_K_getInstance(), SkikoKey_KEY_N_getInstance(), SkikoKey_KEY_M_getInstance(), SkikoKey_KEY_O_getInstance(), SkikoKey_KEY_1_getInstance(), SkikoKey_KEY_2_getInstance(), SkikoKey_KEY_3_getInstance(), SkikoKey_KEY_4_getInstance(), SkikoKey_KEY_5_getInstance(), SkikoKey_KEY_6_getInstance(), SkikoKey_KEY_7_getInstance(), SkikoKey_KEY_8_getInstance(), SkikoKey_KEY_9_getInstance(), SkikoKey_KEY_0_getInstance(), SkikoKey_KEY_CLOSE_BRACKET_getInstance(), SkikoKey_KEY_OPEN_BRACKET_getInstance(), SkikoKey_KEY_QUOTE_getInstance(), SkikoKey_KEY_SEMICOLON_getInstance(), SkikoKey_KEY_SLASH_getInstance(), SkikoKey_KEY_COMMA_getInstance(), SkikoKey_KEY_BACKSLASH_getInstance(), SkikoKey_KEY_PERIOD_getInstance(), SkikoKey_KEY_BACK_QUOTE_getInstance(), SkikoKey_KEY_EQUALS_getInstance(), SkikoKey_KEY_MINUS_getInstance(), SkikoKey_KEY_ENTER_getInstance(), SkikoKey_KEY_ESCAPE_getInstance(), SkikoKey_KEY_TAB_getInstance(), SkikoKey_KEY_BACKSPACE_getInstance(), SkikoKey_KEY_SPACE_getInstance(), SkikoKey_KEY_CAPSLOCK_getInstance(), SkikoKey_KEY_LEFT_META_getInstance(), SkikoKey_KEY_LEFT_SHIFT_getInstance(), SkikoKey_KEY_LEFT_ALT_getInstance(), SkikoKey_KEY_LEFT_CONTROL_getInstance(), SkikoKey_KEY_RIGHT_META_getInstance(), SkikoKey_KEY_RIGHT_SHIFT_getInstance(), SkikoKey_KEY_RIGHT_ALT_getInstance(), SkikoKey_KEY_RIGHT_CONTROL_getInstance(), SkikoKey_KEY_MENU_getInstance(), SkikoKey_KEY_UP_getInstance(), SkikoKey_KEY_DOWN_getInstance(), SkikoKey_KEY_LEFT_getInstance(), SkikoKey_KEY_RIGHT_getInstance(), SkikoKey_KEY_F1_getInstance(), SkikoKey_KEY_F2_getInstance(), SkikoKey_KEY_F3_getInstance(), SkikoKey_KEY_F4_getInstance(), SkikoKey_KEY_F5_getInstance(), SkikoKey_KEY_F6_getInstance(), SkikoKey_KEY_F7_getInstance(), SkikoKey_KEY_F8_getInstance(), SkikoKey_KEY_F9_getInstance(), SkikoKey_KEY_F10_getInstance(), SkikoKey_KEY_F11_getInstance(), SkikoKey_KEY_F12_getInstance(), SkikoKey_KEY_PRINTSCEEN_getInstance(), SkikoKey_KEY_SCROLL_LOCK_getInstance(), SkikoKey_KEY_PAUSE_getInstance(), SkikoKey_KEY_INSERT_getInstance(), SkikoKey_KEY_HOME_getInstance(), SkikoKey_KEY_PGUP_getInstance(), SkikoKey_KEY_DELETE_getInstance(), SkikoKey_KEY_END_getInstance(), SkikoKey_KEY_PGDOWN_getInstance(), SkikoKey_KEY_NUM_LOCK_getInstance(), SkikoKey_KEY_NUMPAD_0_getInstance(), SkikoKey_KEY_NUMPAD_1_getInstance(), SkikoKey_KEY_NUMPAD_2_getInstance(), SkikoKey_KEY_NUMPAD_3_getInstance(), SkikoKey_KEY_NUMPAD_4_getInstance(), SkikoKey_KEY_NUMPAD_5_getInstance(), SkikoKey_KEY_NUMPAD_6_getInstance(), SkikoKey_KEY_NUMPAD_7_getInstance(), SkikoKey_KEY_NUMPAD_8_getInstance(), SkikoKey_KEY_NUMPAD_9_getInstance(), SkikoKey_KEY_NUMPAD_ENTER_getInstance(), SkikoKey_KEY_NUMPAD_ADD_getInstance(), SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance(), SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance(), SkikoKey_KEY_NUMPAD_DIVIDE_getInstance(), SkikoKey_KEY_NUMPAD_DECIMAL_getInstance()];
  }
  var SkikoKey_entriesInitialized;
  function SkikoKey_initEntries() {
    if (SkikoKey_entriesInitialized)
      return Unit_instance;
    SkikoKey_entriesInitialized = true;
    SkikoKey_KEY_UNKNOWN_instance = new SkikoKey('KEY_UNKNOWN', 0, -1);
    SkikoKey_KEY_A_instance = new SkikoKey('KEY_A', 1, 65);
    SkikoKey_KEY_S_instance = new SkikoKey('KEY_S', 2, 83);
    SkikoKey_KEY_D_instance = new SkikoKey('KEY_D', 3, 68);
    SkikoKey_KEY_F_instance = new SkikoKey('KEY_F', 4, 70);
    SkikoKey_KEY_H_instance = new SkikoKey('KEY_H', 5, 72);
    SkikoKey_KEY_G_instance = new SkikoKey('KEY_G', 6, 71);
    SkikoKey_KEY_Z_instance = new SkikoKey('KEY_Z', 7, 90);
    SkikoKey_KEY_X_instance = new SkikoKey('KEY_X', 8, 88);
    SkikoKey_KEY_C_instance = new SkikoKey('KEY_C', 9, 67);
    SkikoKey_KEY_V_instance = new SkikoKey('KEY_V', 10, 86);
    SkikoKey_KEY_B_instance = new SkikoKey('KEY_B', 11, 66);
    SkikoKey_KEY_Q_instance = new SkikoKey('KEY_Q', 12, 81);
    SkikoKey_KEY_W_instance = new SkikoKey('KEY_W', 13, 87);
    SkikoKey_KEY_E_instance = new SkikoKey('KEY_E', 14, 69);
    SkikoKey_KEY_R_instance = new SkikoKey('KEY_R', 15, 82);
    SkikoKey_KEY_Y_instance = new SkikoKey('KEY_Y', 16, 89);
    SkikoKey_KEY_T_instance = new SkikoKey('KEY_T', 17, 54);
    SkikoKey_KEY_U_instance = new SkikoKey('KEY_U', 18, 85);
    SkikoKey_KEY_I_instance = new SkikoKey('KEY_I', 19, 73);
    SkikoKey_KEY_P_instance = new SkikoKey('KEY_P', 20, 80);
    SkikoKey_KEY_L_instance = new SkikoKey('KEY_L', 21, 76);
    SkikoKey_KEY_J_instance = new SkikoKey('KEY_J', 22, 74);
    SkikoKey_KEY_K_instance = new SkikoKey('KEY_K', 23, 75);
    SkikoKey_KEY_N_instance = new SkikoKey('KEY_N', 24, 78);
    SkikoKey_KEY_M_instance = new SkikoKey('KEY_M', 25, 77);
    SkikoKey_KEY_O_instance = new SkikoKey('KEY_O', 26, 79);
    SkikoKey_KEY_1_instance = new SkikoKey('KEY_1', 27, 49);
    SkikoKey_KEY_2_instance = new SkikoKey('KEY_2', 28, 50);
    SkikoKey_KEY_3_instance = new SkikoKey('KEY_3', 29, 51);
    SkikoKey_KEY_4_instance = new SkikoKey('KEY_4', 30, 52);
    SkikoKey_KEY_5_instance = new SkikoKey('KEY_5', 31, 53);
    SkikoKey_KEY_6_instance = new SkikoKey('KEY_6', 32, 54);
    SkikoKey_KEY_7_instance = new SkikoKey('KEY_7', 33, 55);
    SkikoKey_KEY_8_instance = new SkikoKey('KEY_8', 34, 56);
    SkikoKey_KEY_9_instance = new SkikoKey('KEY_9', 35, 57);
    SkikoKey_KEY_0_instance = new SkikoKey('KEY_0', 36, 48);
    SkikoKey_KEY_CLOSE_BRACKET_instance = new SkikoKey('KEY_CLOSE_BRACKET', 37, 221);
    SkikoKey_KEY_OPEN_BRACKET_instance = new SkikoKey('KEY_OPEN_BRACKET', 38, 219);
    SkikoKey_KEY_QUOTE_instance = new SkikoKey('KEY_QUOTE', 39, 222);
    SkikoKey_KEY_SEMICOLON_instance = new SkikoKey('KEY_SEMICOLON', 40, 59);
    SkikoKey_KEY_SLASH_instance = new SkikoKey('KEY_SLASH', 41, 191);
    SkikoKey_KEY_COMMA_instance = new SkikoKey('KEY_COMMA', 42, 188);
    SkikoKey_KEY_BACKSLASH_instance = new SkikoKey('KEY_BACKSLASH', 43, 220);
    SkikoKey_KEY_PERIOD_instance = new SkikoKey('KEY_PERIOD', 44, 190);
    SkikoKey_KEY_BACK_QUOTE_instance = new SkikoKey('KEY_BACK_QUOTE', 45, 192);
    SkikoKey_KEY_EQUALS_instance = new SkikoKey('KEY_EQUALS', 46, 61);
    SkikoKey_KEY_MINUS_instance = new SkikoKey('KEY_MINUS', 47, 173);
    SkikoKey_KEY_ENTER_instance = new SkikoKey('KEY_ENTER', 48, 13);
    SkikoKey_KEY_ESCAPE_instance = new SkikoKey('KEY_ESCAPE', 49, 27);
    SkikoKey_KEY_TAB_instance = new SkikoKey('KEY_TAB', 50, 9);
    SkikoKey_KEY_BACKSPACE_instance = new SkikoKey('KEY_BACKSPACE', 51, 8);
    SkikoKey_KEY_SPACE_instance = new SkikoKey('KEY_SPACE', 52, 32);
    SkikoKey_KEY_CAPSLOCK_instance = new SkikoKey('KEY_CAPSLOCK', 53, 20);
    SkikoKey_KEY_LEFT_META_instance = new SkikoKey('KEY_LEFT_META', 54, 224);
    SkikoKey_KEY_LEFT_SHIFT_instance = new SkikoKey('KEY_LEFT_SHIFT', 55, 16);
    SkikoKey_KEY_LEFT_ALT_instance = new SkikoKey('KEY_LEFT_ALT', 56, 18);
    SkikoKey_KEY_LEFT_CONTROL_instance = new SkikoKey('KEY_LEFT_CONTROL', 57, 17);
    SkikoKey_KEY_RIGHT_META_instance = new SkikoKey('KEY_RIGHT_META', 58, -2147483424);
    SkikoKey_KEY_RIGHT_SHIFT_instance = new SkikoKey('KEY_RIGHT_SHIFT', 59, -2147483632);
    SkikoKey_KEY_RIGHT_ALT_instance = new SkikoKey('KEY_RIGHT_ALT', 60, 225);
    SkikoKey_KEY_RIGHT_CONTROL_instance = new SkikoKey('KEY_RIGHT_CONTROL', 61, -2147483631);
    SkikoKey_KEY_MENU_instance = new SkikoKey('KEY_MENU', 62, 93);
    SkikoKey_KEY_UP_instance = new SkikoKey('KEY_UP', 63, 38);
    SkikoKey_KEY_DOWN_instance = new SkikoKey('KEY_DOWN', 64, 40);
    SkikoKey_KEY_LEFT_instance = new SkikoKey('KEY_LEFT', 65, 37);
    SkikoKey_KEY_RIGHT_instance = new SkikoKey('KEY_RIGHT', 66, 39);
    SkikoKey_KEY_F1_instance = new SkikoKey('KEY_F1', 67, 112);
    SkikoKey_KEY_F2_instance = new SkikoKey('KEY_F2', 68, 113);
    SkikoKey_KEY_F3_instance = new SkikoKey('KEY_F3', 69, 114);
    SkikoKey_KEY_F4_instance = new SkikoKey('KEY_F4', 70, 115);
    SkikoKey_KEY_F5_instance = new SkikoKey('KEY_F5', 71, 116);
    SkikoKey_KEY_F6_instance = new SkikoKey('KEY_F6', 72, 117);
    SkikoKey_KEY_F7_instance = new SkikoKey('KEY_F7', 73, 118);
    SkikoKey_KEY_F8_instance = new SkikoKey('KEY_F8', 74, 119);
    SkikoKey_KEY_F9_instance = new SkikoKey('KEY_F9', 75, 120);
    SkikoKey_KEY_F10_instance = new SkikoKey('KEY_F10', 76, 121);
    SkikoKey_KEY_F11_instance = new SkikoKey('KEY_F11', 77, 122);
    SkikoKey_KEY_F12_instance = new SkikoKey('KEY_F12', 78, 123);
    SkikoKey_KEY_PRINTSCEEN_instance = new SkikoKey('KEY_PRINTSCEEN', 79, 44);
    SkikoKey_KEY_SCROLL_LOCK_instance = new SkikoKey('KEY_SCROLL_LOCK', 80, 145);
    SkikoKey_KEY_PAUSE_instance = new SkikoKey('KEY_PAUSE', 81, 19);
    SkikoKey_KEY_INSERT_instance = new SkikoKey('KEY_INSERT', 82, 45);
    SkikoKey_KEY_HOME_instance = new SkikoKey('KEY_HOME', 83, 36);
    SkikoKey_KEY_PGUP_instance = new SkikoKey('KEY_PGUP', 84, 33);
    SkikoKey_KEY_DELETE_instance = new SkikoKey('KEY_DELETE', 85, 46);
    SkikoKey_KEY_END_instance = new SkikoKey('KEY_END', 86, 35);
    SkikoKey_KEY_PGDOWN_instance = new SkikoKey('KEY_PGDOWN', 87, 34);
    SkikoKey_KEY_NUM_LOCK_instance = new SkikoKey('KEY_NUM_LOCK', 88, 144);
    SkikoKey_KEY_NUMPAD_0_instance = new SkikoKey('KEY_NUMPAD_0', 89, 96);
    SkikoKey_KEY_NUMPAD_1_instance = new SkikoKey('KEY_NUMPAD_1', 90, 97);
    SkikoKey_KEY_NUMPAD_2_instance = new SkikoKey('KEY_NUMPAD_2', 91, 98);
    SkikoKey_KEY_NUMPAD_3_instance = new SkikoKey('KEY_NUMPAD_3', 92, 99);
    SkikoKey_KEY_NUMPAD_4_instance = new SkikoKey('KEY_NUMPAD_4', 93, 100);
    SkikoKey_KEY_NUMPAD_5_instance = new SkikoKey('KEY_NUMPAD_5', 94, 101);
    SkikoKey_KEY_NUMPAD_6_instance = new SkikoKey('KEY_NUMPAD_6', 95, 102);
    SkikoKey_KEY_NUMPAD_7_instance = new SkikoKey('KEY_NUMPAD_7', 96, 103);
    SkikoKey_KEY_NUMPAD_8_instance = new SkikoKey('KEY_NUMPAD_8', 97, 104);
    SkikoKey_KEY_NUMPAD_9_instance = new SkikoKey('KEY_NUMPAD_9', 98, 105);
    SkikoKey_KEY_NUMPAD_ENTER_instance = new SkikoKey('KEY_NUMPAD_ENTER', 99, 14);
    SkikoKey_KEY_NUMPAD_ADD_instance = new SkikoKey('KEY_NUMPAD_ADD', 100, 107);
    SkikoKey_KEY_NUMPAD_SUBTRACT_instance = new SkikoKey('KEY_NUMPAD_SUBTRACT', 101, 109);
    SkikoKey_KEY_NUMPAD_MULTIPLY_instance = new SkikoKey('KEY_NUMPAD_MULTIPLY', 102, 106);
    SkikoKey_KEY_NUMPAD_DIVIDE_instance = new SkikoKey('KEY_NUMPAD_DIVIDE', 103, 111);
    SkikoKey_KEY_NUMPAD_DECIMAL_instance = new SkikoKey('KEY_NUMPAD_DECIMAL', 104, 110);
  }
  function SkikoKey(name, ordinal, platformKeyCode) {
    Enum.call(this, name, ordinal);
    this.r3y_1 = platformKeyCode;
  }
  function SkikoKey_KEY_UNKNOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UNKNOWN_instance;
  }
  function SkikoKey_KEY_A_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_A_instance;
  }
  function SkikoKey_KEY_S_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_S_instance;
  }
  function SkikoKey_KEY_D_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_D_instance;
  }
  function SkikoKey_KEY_F_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F_instance;
  }
  function SkikoKey_KEY_H_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_H_instance;
  }
  function SkikoKey_KEY_G_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_G_instance;
  }
  function SkikoKey_KEY_Z_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Z_instance;
  }
  function SkikoKey_KEY_X_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_X_instance;
  }
  function SkikoKey_KEY_C_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_C_instance;
  }
  function SkikoKey_KEY_V_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_V_instance;
  }
  function SkikoKey_KEY_B_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_B_instance;
  }
  function SkikoKey_KEY_Q_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Q_instance;
  }
  function SkikoKey_KEY_W_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_W_instance;
  }
  function SkikoKey_KEY_E_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_E_instance;
  }
  function SkikoKey_KEY_R_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_R_instance;
  }
  function SkikoKey_KEY_Y_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Y_instance;
  }
  function SkikoKey_KEY_T_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_T_instance;
  }
  function SkikoKey_KEY_U_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_U_instance;
  }
  function SkikoKey_KEY_I_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_I_instance;
  }
  function SkikoKey_KEY_P_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_P_instance;
  }
  function SkikoKey_KEY_L_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_L_instance;
  }
  function SkikoKey_KEY_J_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_J_instance;
  }
  function SkikoKey_KEY_K_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_K_instance;
  }
  function SkikoKey_KEY_N_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_N_instance;
  }
  function SkikoKey_KEY_M_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_M_instance;
  }
  function SkikoKey_KEY_O_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_O_instance;
  }
  function SkikoKey_KEY_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_1_instance;
  }
  function SkikoKey_KEY_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_2_instance;
  }
  function SkikoKey_KEY_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_3_instance;
  }
  function SkikoKey_KEY_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_4_instance;
  }
  function SkikoKey_KEY_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_5_instance;
  }
  function SkikoKey_KEY_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_6_instance;
  }
  function SkikoKey_KEY_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_7_instance;
  }
  function SkikoKey_KEY_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_8_instance;
  }
  function SkikoKey_KEY_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_9_instance;
  }
  function SkikoKey_KEY_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_0_instance;
  }
  function SkikoKey_KEY_CLOSE_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CLOSE_BRACKET_instance;
  }
  function SkikoKey_KEY_OPEN_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_OPEN_BRACKET_instance;
  }
  function SkikoKey_KEY_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_QUOTE_instance;
  }
  function SkikoKey_KEY_SEMICOLON_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SEMICOLON_instance;
  }
  function SkikoKey_KEY_SLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SLASH_instance;
  }
  function SkikoKey_KEY_COMMA_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_COMMA_instance;
  }
  function SkikoKey_KEY_BACKSLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSLASH_instance;
  }
  function SkikoKey_KEY_PERIOD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PERIOD_instance;
  }
  function SkikoKey_KEY_BACK_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACK_QUOTE_instance;
  }
  function SkikoKey_KEY_EQUALS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_EQUALS_instance;
  }
  function SkikoKey_KEY_MINUS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MINUS_instance;
  }
  function SkikoKey_KEY_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ENTER_instance;
  }
  function SkikoKey_KEY_ESCAPE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ESCAPE_instance;
  }
  function SkikoKey_KEY_TAB_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_TAB_instance;
  }
  function SkikoKey_KEY_BACKSPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSPACE_instance;
  }
  function SkikoKey_KEY_SPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SPACE_instance;
  }
  function SkikoKey_KEY_CAPSLOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CAPSLOCK_instance;
  }
  function SkikoKey_KEY_LEFT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_META_instance;
  }
  function SkikoKey_KEY_LEFT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_SHIFT_instance;
  }
  function SkikoKey_KEY_LEFT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_ALT_instance;
  }
  function SkikoKey_KEY_LEFT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_CONTROL_instance;
  }
  function SkikoKey_KEY_RIGHT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_META_instance;
  }
  function SkikoKey_KEY_RIGHT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_SHIFT_instance;
  }
  function SkikoKey_KEY_RIGHT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_ALT_instance;
  }
  function SkikoKey_KEY_RIGHT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_CONTROL_instance;
  }
  function SkikoKey_KEY_MENU_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MENU_instance;
  }
  function SkikoKey_KEY_UP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UP_instance;
  }
  function SkikoKey_KEY_DOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DOWN_instance;
  }
  function SkikoKey_KEY_LEFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_instance;
  }
  function SkikoKey_KEY_RIGHT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_instance;
  }
  function SkikoKey_KEY_F1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F1_instance;
  }
  function SkikoKey_KEY_F2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F2_instance;
  }
  function SkikoKey_KEY_F3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F3_instance;
  }
  function SkikoKey_KEY_F4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F4_instance;
  }
  function SkikoKey_KEY_F5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F5_instance;
  }
  function SkikoKey_KEY_F6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F6_instance;
  }
  function SkikoKey_KEY_F7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F7_instance;
  }
  function SkikoKey_KEY_F8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F8_instance;
  }
  function SkikoKey_KEY_F9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F9_instance;
  }
  function SkikoKey_KEY_F10_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F10_instance;
  }
  function SkikoKey_KEY_F11_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F11_instance;
  }
  function SkikoKey_KEY_F12_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F12_instance;
  }
  function SkikoKey_KEY_PRINTSCEEN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PRINTSCEEN_instance;
  }
  function SkikoKey_KEY_SCROLL_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SCROLL_LOCK_instance;
  }
  function SkikoKey_KEY_PAUSE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PAUSE_instance;
  }
  function SkikoKey_KEY_INSERT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_INSERT_instance;
  }
  function SkikoKey_KEY_HOME_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_HOME_instance;
  }
  function SkikoKey_KEY_PGUP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGUP_instance;
  }
  function SkikoKey_KEY_DELETE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DELETE_instance;
  }
  function SkikoKey_KEY_END_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_END_instance;
  }
  function SkikoKey_KEY_PGDOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGDOWN_instance;
  }
  function SkikoKey_KEY_NUM_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUM_LOCK_instance;
  }
  function SkikoKey_KEY_NUMPAD_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_0_instance;
  }
  function SkikoKey_KEY_NUMPAD_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_1_instance;
  }
  function SkikoKey_KEY_NUMPAD_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_2_instance;
  }
  function SkikoKey_KEY_NUMPAD_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_3_instance;
  }
  function SkikoKey_KEY_NUMPAD_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_4_instance;
  }
  function SkikoKey_KEY_NUMPAD_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_5_instance;
  }
  function SkikoKey_KEY_NUMPAD_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_6_instance;
  }
  function SkikoKey_KEY_NUMPAD_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_7_instance;
  }
  function SkikoKey_KEY_NUMPAD_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_8_instance;
  }
  function SkikoKey_KEY_NUMPAD_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_9_instance;
  }
  function SkikoKey_KEY_NUMPAD_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ENTER_instance;
  }
  function SkikoKey_KEY_NUMPAD_ADD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ADD_instance;
  }
  function SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  }
  function SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  }
  function SkikoKey_KEY_NUMPAD_DIVIDE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  }
  function SkikoKey_KEY_NUMPAD_DECIMAL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  }
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    if (_this__u8e3s4.alpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.alpha = _this__u8e3s4.alpha;
    }
    if (_this__u8e3s4.depth == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.depth = _this__u8e3s4.depth;
    }
    if (_this__u8e3s4.stencil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.stencil = _this__u8e3s4.stencil;
    }
    if (_this__u8e3s4.antialias == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.antialias = _this__u8e3s4.antialias;
    }
    if (_this__u8e3s4.premultipliedAlpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    if (_this__u8e3s4.preserveDrawingBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    if (_this__u8e3s4.preferLowPowerToHighPerformance == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    if (_this__u8e3s4.failIfMajorPerformanceCaveat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    if (_this__u8e3s4.enableExtensionsByDefault == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    if (_this__u8e3s4.explicitSwapControl == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    if (_this__u8e3s4.renderViaOffscreenBackBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    if (_this__u8e3s4.majorVersion == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp1_elvis_lhs = $attr == null ? null : $attr.alpha;
    tmp.m3z_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs_0 = $attr == null ? null : $attr.depth;
    tmp_0.n3z_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp1_elvis_lhs_1 = $attr == null ? null : $attr.stencil;
    tmp_1.o3z_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp1_elvis_lhs_2 = $attr == null ? null : $attr.antialias;
    tmp_2.p3z_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp1_elvis_lhs_3 = $attr == null ? null : $attr.premultipliedAlpha;
    tmp_3.q3z_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp1_elvis_lhs_4 = $attr == null ? null : $attr.preserveDrawingBuffer;
    tmp_4.r3z_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp1_elvis_lhs_5 = $attr == null ? null : $attr.preferLowPowerToHighPerformance;
    tmp_5.s3z_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp1_elvis_lhs_6 = $attr == null ? null : $attr.failIfMajorPerformanceCaveat;
    tmp_6.t3z_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp1_elvis_lhs_7 = $attr == null ? null : $attr.enableExtensionsByDefault;
    tmp_7.u3z_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp1_elvis_lhs_8 = $attr == null ? null : $attr.explicitSwapControl;
    tmp_8.v3z_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp1_elvis_lhs_9 = $attr == null ? null : $attr.renderViaOffscreenBackBuffer;
    tmp_9.w3z_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp1_elvis_lhs_10 = $attr == null ? null : $attr.majorVersion;
    tmp_10.x3z_1 = tmp1_elvis_lhs_10 == null ? 1 : tmp1_elvis_lhs_10;
  }
  protoOf(createWebGLContext$contextAttributes$1).y3z = function () {
    return this.m3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).z3z = function () {
    return this.n3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).a40 = function () {
    return this.o3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).b40 = function () {
    return this.p3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).c40 = function () {
    return this.q3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).d40 = function () {
    return this.r3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).e40 = function () {
    return this.s3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).f40 = function () {
    return this.t3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).g40 = function () {
    return this.u3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).h40 = function () {
    return this.v3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).i40 = function () {
    return this.w3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).j40 = function () {
    return this.x3z_1;
  };
  //region block: post-declaration
  protoOf(Bitmap).k39 = get_width;
  protoOf(Bitmap).l39 = get_height;
  protoOf(Bitmap).x3d = get_colorType;
  protoOf(Bitmap).y3d = get_colorSpace;
  protoOf(Bitmap).z3d = get_isOpaque;
  protoOf(Image).k39 = get_width;
  protoOf(Image).l39 = get_height;
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.y3z();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.z3z();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.a40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.b40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.c40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.d40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.e40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.f40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.g40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.h40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.i40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.j40();
  });
  //endregion
  //region block: init
  Color_instance = new Color();
  Companion_instance_11 = new Companion_11();
  Companion_instance_14 = new Companion_14();
  Companion_instance_15 = new Companion_15();
  Companion_instance_16 = new Companion_16();
  Companion_instance_18 = new Companion_18();
  Companion_instance_31 = new Companion_31();
  Companion_instance_32 = new Companion_32();
  Companion_instance_40 = new Companion_40();
  Companion_instance_44 = new Companion_44();
  Companion_instance_46 = new Companion_46();
  Companion_instance_51 = new Companion_51();
  Companion_instance_52 = new Companion_52();
  Companion_instance_53 = new Companion_53();
  Stats_instance = new Stats();
  onContentScaleChanged = null;
  Empty_instance = new Empty();
  Companion_instance_54 = new Companion_54();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_SOLID_getInstance;
  _.$_$.i = Direction_LTR_getInstance;
  _.$_$.j = Direction_RTL_getInstance;
  _.$_$.k = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.l = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.m = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.n = PlaceholderAlignment_TOP_getInstance;
  _.$_$.o = RectHeightMode_MAX_getInstance;
  _.$_$.p = RectHeightMode_STRUT_getInstance;
  _.$_$.q = RectWidthMode_TIGHT_getInstance;
  _.$_$.r = BlendMode_CLEAR_getInstance;
  _.$_$.s = BlendMode_COLOR_BURN_getInstance;
  _.$_$.t = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.u = BlendMode_COLOR_getInstance;
  _.$_$.v = BlendMode_DARKEN_getInstance;
  _.$_$.w = BlendMode_DIFFERENCE_getInstance;
  _.$_$.x = BlendMode_DST_ATOP_getInstance;
  _.$_$.y = BlendMode_DST_IN_getInstance;
  _.$_$.z = BlendMode_DST_OUT_getInstance;
  _.$_$.a1 = BlendMode_DST_OVER_getInstance;
  _.$_$.b1 = BlendMode_DST_getInstance;
  _.$_$.c1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.d1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.e1 = BlendMode_HUE_getInstance;
  _.$_$.f1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.g1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.h1 = BlendMode_MODULATE_getInstance;
  _.$_$.i1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.j1 = BlendMode_OVERLAY_getInstance;
  _.$_$.k1 = BlendMode_PLUS_getInstance;
  _.$_$.l1 = BlendMode_SATURATION_getInstance;
  _.$_$.m1 = BlendMode_SCREEN_getInstance;
  _.$_$.n1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.o1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.p1 = BlendMode_SRC_IN_getInstance;
  _.$_$.q1 = BlendMode_SRC_OUT_getInstance;
  _.$_$.r1 = BlendMode_SRC_OVER_getInstance;
  _.$_$.s1 = BlendMode_SRC_getInstance;
  _.$_$.t1 = BlendMode_XOR_getInstance;
  _.$_$.u1 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.v1 = ClipMode_INTERSECT_getInstance;
  _.$_$.w1 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.x1 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.y1 = ColorType_ALPHA_8_getInstance;
  _.$_$.z1 = ColorType_RGBA_F16_getInstance;
  _.$_$.a2 = ColorType_RGB_565_getInstance;
  _.$_$.b2 = FilterMode_LINEAR_getInstance;
  _.$_$.c2 = FilterMode_NEAREST_getInstance;
  _.$_$.d2 = FilterTileMode_CLAMP_getInstance;
  _.$_$.e2 = FilterTileMode_DECAL_getInstance;
  _.$_$.f2 = FilterTileMode_MIRROR_getInstance;
  _.$_$.g2 = FilterTileMode_REPEAT_getInstance;
  _.$_$.h2 = MipmapMode_NEAREST_getInstance;
  _.$_$.i2 = MipmapMode_NONE_getInstance;
  _.$_$.j2 = PaintMode_FILL_getInstance;
  _.$_$.k2 = PaintMode_STROKE_getInstance;
  _.$_$.l2 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.m2 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.n2 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.o2 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.p2 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.q2 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.r2 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.s2 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.t2 = PathFillMode_WINDING_getInstance;
  _.$_$.u2 = PathOp_DIFFERENCE_getInstance;
  _.$_$.v2 = PathOp_INTERSECT_getInstance;
  _.$_$.w2 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.x2 = PathOp_UNION_getInstance;
  _.$_$.y2 = PathOp_XOR_getInstance;
  _.$_$.z2 = SkikoKey_KEY_0_getInstance;
  _.$_$.a3 = SkikoKey_KEY_1_getInstance;
  _.$_$.b3 = SkikoKey_KEY_2_getInstance;
  _.$_$.c3 = SkikoKey_KEY_3_getInstance;
  _.$_$.d3 = SkikoKey_KEY_4_getInstance;
  _.$_$.e3 = SkikoKey_KEY_5_getInstance;
  _.$_$.f3 = SkikoKey_KEY_6_getInstance;
  _.$_$.g3 = SkikoKey_KEY_7_getInstance;
  _.$_$.h3 = SkikoKey_KEY_8_getInstance;
  _.$_$.i3 = SkikoKey_KEY_9_getInstance;
  _.$_$.j3 = SkikoKey_KEY_A_getInstance;
  _.$_$.k3 = SkikoKey_KEY_BACKSLASH_getInstance;
  _.$_$.l3 = SkikoKey_KEY_BACKSPACE_getInstance;
  _.$_$.m3 = SkikoKey_KEY_BACK_QUOTE_getInstance;
  _.$_$.n3 = SkikoKey_KEY_B_getInstance;
  _.$_$.o3 = SkikoKey_KEY_CAPSLOCK_getInstance;
  _.$_$.p3 = SkikoKey_KEY_CLOSE_BRACKET_getInstance;
  _.$_$.q3 = SkikoKey_KEY_COMMA_getInstance;
  _.$_$.r3 = SkikoKey_KEY_C_getInstance;
  _.$_$.s3 = SkikoKey_KEY_DELETE_getInstance;
  _.$_$.t3 = SkikoKey_KEY_DOWN_getInstance;
  _.$_$.u3 = SkikoKey_KEY_D_getInstance;
  _.$_$.v3 = SkikoKey_KEY_END_getInstance;
  _.$_$.w3 = SkikoKey_KEY_ENTER_getInstance;
  _.$_$.x3 = SkikoKey_KEY_EQUALS_getInstance;
  _.$_$.y3 = SkikoKey_KEY_ESCAPE_getInstance;
  _.$_$.z3 = SkikoKey_KEY_E_getInstance;
  _.$_$.a4 = SkikoKey_KEY_F10_getInstance;
  _.$_$.b4 = SkikoKey_KEY_F11_getInstance;
  _.$_$.c4 = SkikoKey_KEY_F12_getInstance;
  _.$_$.d4 = SkikoKey_KEY_F1_getInstance;
  _.$_$.e4 = SkikoKey_KEY_F2_getInstance;
  _.$_$.f4 = SkikoKey_KEY_F3_getInstance;
  _.$_$.g4 = SkikoKey_KEY_F4_getInstance;
  _.$_$.h4 = SkikoKey_KEY_F5_getInstance;
  _.$_$.i4 = SkikoKey_KEY_F6_getInstance;
  _.$_$.j4 = SkikoKey_KEY_F7_getInstance;
  _.$_$.k4 = SkikoKey_KEY_F8_getInstance;
  _.$_$.l4 = SkikoKey_KEY_F9_getInstance;
  _.$_$.m4 = SkikoKey_KEY_F_getInstance;
  _.$_$.n4 = SkikoKey_KEY_G_getInstance;
  _.$_$.o4 = SkikoKey_KEY_HOME_getInstance;
  _.$_$.p4 = SkikoKey_KEY_H_getInstance;
  _.$_$.q4 = SkikoKey_KEY_INSERT_getInstance;
  _.$_$.r4 = SkikoKey_KEY_I_getInstance;
  _.$_$.s4 = SkikoKey_KEY_J_getInstance;
  _.$_$.t4 = SkikoKey_KEY_K_getInstance;
  _.$_$.u4 = SkikoKey_KEY_LEFT_ALT_getInstance;
  _.$_$.v4 = SkikoKey_KEY_LEFT_CONTROL_getInstance;
  _.$_$.w4 = SkikoKey_KEY_LEFT_META_getInstance;
  _.$_$.x4 = SkikoKey_KEY_LEFT_SHIFT_getInstance;
  _.$_$.y4 = SkikoKey_KEY_LEFT_getInstance;
  _.$_$.z4 = SkikoKey_KEY_L_getInstance;
  _.$_$.a5 = SkikoKey_KEY_MINUS_getInstance;
  _.$_$.b5 = SkikoKey_KEY_M_getInstance;
  _.$_$.c5 = SkikoKey_KEY_NUMPAD_0_getInstance;
  _.$_$.d5 = SkikoKey_KEY_NUMPAD_1_getInstance;
  _.$_$.e5 = SkikoKey_KEY_NUMPAD_2_getInstance;
  _.$_$.f5 = SkikoKey_KEY_NUMPAD_3_getInstance;
  _.$_$.g5 = SkikoKey_KEY_NUMPAD_4_getInstance;
  _.$_$.h5 = SkikoKey_KEY_NUMPAD_5_getInstance;
  _.$_$.i5 = SkikoKey_KEY_NUMPAD_6_getInstance;
  _.$_$.j5 = SkikoKey_KEY_NUMPAD_7_getInstance;
  _.$_$.k5 = SkikoKey_KEY_NUMPAD_8_getInstance;
  _.$_$.l5 = SkikoKey_KEY_NUMPAD_9_getInstance;
  _.$_$.m5 = SkikoKey_KEY_NUMPAD_ADD_getInstance;
  _.$_$.n5 = SkikoKey_KEY_NUMPAD_DIVIDE_getInstance;
  _.$_$.o5 = SkikoKey_KEY_NUMPAD_ENTER_getInstance;
  _.$_$.p5 = SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance;
  _.$_$.q5 = SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance;
  _.$_$.r5 = SkikoKey_KEY_NUM_LOCK_getInstance;
  _.$_$.s5 = SkikoKey_KEY_N_getInstance;
  _.$_$.t5 = SkikoKey_KEY_OPEN_BRACKET_getInstance;
  _.$_$.u5 = SkikoKey_KEY_O_getInstance;
  _.$_$.v5 = SkikoKey_KEY_PERIOD_getInstance;
  _.$_$.w5 = SkikoKey_KEY_PGDOWN_getInstance;
  _.$_$.x5 = SkikoKey_KEY_PGUP_getInstance;
  _.$_$.y5 = SkikoKey_KEY_PRINTSCEEN_getInstance;
  _.$_$.z5 = SkikoKey_KEY_P_getInstance;
  _.$_$.a6 = SkikoKey_KEY_Q_getInstance;
  _.$_$.b6 = SkikoKey_KEY_RIGHT_ALT_getInstance;
  _.$_$.c6 = SkikoKey_KEY_RIGHT_CONTROL_getInstance;
  _.$_$.d6 = SkikoKey_KEY_RIGHT_META_getInstance;
  _.$_$.e6 = SkikoKey_KEY_RIGHT_SHIFT_getInstance;
  _.$_$.f6 = SkikoKey_KEY_RIGHT_getInstance;
  _.$_$.g6 = SkikoKey_KEY_R_getInstance;
  _.$_$.h6 = SkikoKey_KEY_SCROLL_LOCK_getInstance;
  _.$_$.i6 = SkikoKey_KEY_SEMICOLON_getInstance;
  _.$_$.j6 = SkikoKey_KEY_SLASH_getInstance;
  _.$_$.k6 = SkikoKey_KEY_SPACE_getInstance;
  _.$_$.l6 = SkikoKey_KEY_S_getInstance;
  _.$_$.m6 = SkikoKey_KEY_TAB_getInstance;
  _.$_$.n6 = SkikoKey_KEY_T_getInstance;
  _.$_$.o6 = SkikoKey_KEY_UNKNOWN_getInstance;
  _.$_$.p6 = SkikoKey_KEY_UP_getInstance;
  _.$_$.q6 = SkikoKey_KEY_U_getInstance;
  _.$_$.r6 = SkikoKey_KEY_V_getInstance;
  _.$_$.s6 = SkikoKey_KEY_W_getInstance;
  _.$_$.t6 = SkikoKey_KEY_X_getInstance;
  _.$_$.u6 = SkikoKey_KEY_Y_getInstance;
  _.$_$.v6 = SkikoKey_KEY_Z_getInstance;
  _.$_$.w6 = SkikoKeyboardEventKind_DOWN_getInstance;
  _.$_$.x6 = SkikoPointerEventKind_SCROLL_getInstance;
  _.$_$.y6 = FontCollection_init_$Create$;
  _.$_$.z6 = StrutStyle_init_$Create$;
  _.$_$.a7 = TextStyle_init_$Create$;
  _.$_$.b7 = Bitmap_init_$Create$;
  _.$_$.c7 = Canvas_init_$Create$;
  _.$_$.d7 = Font_init_$Create$_0;
  _.$_$.e7 = Paint_init_$Create$;
  _.$_$.f7 = Path_init_$Create$;
  _.$_$.g7 = PathMeasure_init_$Create$;
  _.$_$.h7 = PictureRecorder_init_$Create$;
  _.$_$.i7 = SkikoInputModifiers__has_impl_qg30o6;
  _.$_$.j7 = CharDirection_getInstance;
  _.$_$.k7 = Companion_getInstance_2;
  _.$_$.l7 = Companion_getInstance_4;
  _.$_$.m7 = Companion_getInstance_6;
  _.$_$.n7 = Companion_getInstance_7;
  _.$_$.o7 = Companion_getInstance_8;
  _.$_$.p7 = Companion_getInstance_11;
  _.$_$.q7 = Companion_getInstance_13;
  _.$_$.r7 = Companion_getInstance_14;
  _.$_$.s7 = Companion_getInstance_20;
  _.$_$.t7 = Companion_getInstance_21;
  _.$_$.u7 = Companion_getInstance_23;
  _.$_$.v7 = Companion_getInstance_26;
  _.$_$.w7 = Companion_instance_31;
  _.$_$.x7 = Companion_instance_32;
  _.$_$.y7 = Companion_getInstance_35;
  _.$_$.z7 = ShadowUtils_getInstance;
  _.$_$.a8 = Companion_getInstance_37;
  _.$_$.b8 = Companion_getInstance_50;
  _.$_$.c8 = DecorationStyle;
  _.$_$.d8 = LineMetrics;
  _.$_$.e8 = ParagraphBuilder;
  _.$_$.f8 = ParagraphStyle;
  _.$_$.g8 = PlaceholderStyle;
  _.$_$.h8 = Shadow;
  _.$_$.i8 = TextBox;
  _.$_$.j8 = TextIndent;
  _.$_$.k8 = TypefaceFontProvider;
  _.$_$.l8 = ColorInfo;
  _.$_$.m8 = CubicResampler;
  _.$_$.n8 = FilterMipmap;
  _.$_$.o8 = GradientStyle;
  _.$_$.p8 = ImageInfo;
  _.$_$.q8 = Matrix33;
  _.$_$.r8 = Matrix44;
  _.$_$.s8 = Point3;
  _.$_$.t8 = Rect;
  _.$_$.u8 = ClipboardManager;
  _.$_$.v8 = SkiaLayer;
  _.$_$.w8 = SkikoView;
  _.$_$.x8 = URIManager;
  _.$_$.y8 = currentNanoTime;
  _.$_$.z8 = get_currentSystemTheme;
  _.$_$.a9 = get_hostOs;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
