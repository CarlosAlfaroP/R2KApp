(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-animation-core.js', './compose-multiplatform-core-ui-graphics.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-animation-core.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    root['compose-multiplatform-core-animation'] = factory(typeof this['compose-multiplatform-core-animation'] === 'undefined' ? {} : this['compose-multiplatform-core-animation'], this['compose-multiplatform-core-animation-core'], this['compose-multiplatform-core-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b3;
  var Color__component1_impl_lz80qe = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var Color__component2_impl_mg9n4l = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y2;
  var Color__component3_impl_mxb9is = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z2;
  var Color__component4_impl_necvwz = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var coerceIn = kotlin_kotlin.$_$.pe;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var protoOf = kotlin_kotlin.$_$.rd;
  var THROW_CCE = kotlin_kotlin.$_$.lh;
  var Annotation = kotlin_kotlin.$_$.tg;
  var classMeta = kotlin_kotlin.$_$.ec;
  var VOID = kotlin_kotlin.$_$.bj;
  var setMetadataFor = kotlin_kotlin.$_$.sd;
  var objectMeta = kotlin_kotlin.$_$.qd;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u3;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.n9;
  var equals = kotlin_kotlin.$_$.ic;
  var getNumberHashCode = kotlin_kotlin.$_$.mc;
  var hashCode = kotlin_kotlin.$_$.qc;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s3;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var Long = kotlin_kotlin.$_$.eh;
  var toString = kotlin_kotlin.$_$.wd;
  var numberToLong = kotlin_kotlin.$_$.od;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a4;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var isObject = kotlin_kotlin.$_$.dd;
  var animateValueAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var numberToInt = kotlin_kotlin.$_$.nd;
  var FloatDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var createTransitionAnimation$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.x5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalAnimationApi, 'ExperimentalAnimationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ExitTransition, 'ExitTransition', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(EnterTransition, 'EnterTransition', classMeta);
  setMetadataFor(TransitionData, 'TransitionData', classMeta);
  setMetadataFor(ExitTransitionImpl, 'ExitTransitionImpl', classMeta, ExitTransition);
  setMetadataFor(Fade, 'Fade', classMeta);
  setMetadataFor(Slide, 'Slide', classMeta);
  setMetadataFor(ChangeSize, 'ChangeSize', classMeta);
  setMetadataFor(Scale, 'Scale', classMeta);
  setMetadataFor(EnterTransitionImpl, 'EnterTransitionImpl', classMeta, EnterTransition);
  setMetadataFor(FlingInfo, 'FlingInfo', classMeta);
  setMetadataFor(FlingCalculator, 'FlingCalculator', classMeta);
  setMetadataFor(FlingResult, 'FlingResult', classMeta);
  setMetadataFor(AndroidFlingSpline, 'AndroidFlingSpline', objectMeta);
  setMetadataFor(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec', classMeta, VOID, [FloatDecayAnimationSpec]);
  //endregion
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp0_container = Color__convert_impl_so5m8t(color.value_1, ColorSpaces_getInstance().get_Oklab_ierso8_k$());
    var l = Color__component1_impl_lz80qe(tmp0_container);
    var a = Color__component2_impl_mg9n4l(tmp0_container);
    var b = Color__component3_impl_mxb9is(tmp0_container);
    var alpha = Color__component4_impl_necvwz(tmp0_container);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      return new Color_0(Color__convert_impl_so5m8t(Color(coerceIn(vector.get_v2_kntnnf_k$(), 0.0, 1.0), coerceIn(vector.get_v3_kntnne_k$(), -0.5, 0.5), coerceIn(vector.get_v4_kntnnd_k$(), -0.5, 0.5), coerceIn(vector.get_v1_kntnng_k$(), 0.0, 1.0), ColorSpaces_getInstance().get_Oklab_ierso8_k$()), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlpha() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlpha;
  }
  var DefaultAlpha;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function ExperimentalAnimationApi() {
  }
  protoOf(ExperimentalAnimationApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    other instanceof ExperimentalAnimationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalAnimationApi()';
  };
  function Companion() {
    Companion_instance = this;
    this.None_1 = new ExitTransitionImpl(new TransitionData());
  }
  protoOf(Companion).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function get_$stableprop() {
    return 0;
  }
  function ExitTransition() {
    Companion_getInstance_4();
    this.$stable_1 = 0;
  }
  protoOf(ExitTransition).plus_3d7su1_k$ = function (exit) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? exit.get_data_wokkxf_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_data_wokkxf_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? exit.get_data_wokkxf_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.get_data_wokkxf_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? exit.get_data_wokkxf_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.get_data_wokkxf_k$().scale_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? exit.get_data_wokkxf_k$().scale_1 : tmp3_elvis_lhs));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.get_data_wokkxf_k$().equals(this.get_data_wokkxf_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_4().None_1)) {
      tmp = 'ExitTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      var tmp0_run = this.get_data_wokkxf_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.fade_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.scale_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.get_data_wokkxf_k$().hashCode();
  };
  function shrinkHorizontally(animationSpec, shrinkTowards, clip, targetWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_End_18ju7i_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetWidth === VOID) {
      tmp = shrinkHorizontally$lambda;
    } else {
      tmp = targetWidth;
    }
    targetWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkHorizontally$lambda_0(targetWidth));
  }
  function fadeOut(animationSpec, targetAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.None_1 = new EnterTransitionImpl(new TransitionData());
  }
  protoOf(Companion_0).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function EnterTransition() {
    Companion_getInstance_5();
    this.$stable_1 = 0;
  }
  protoOf(EnterTransition).plus_9f8al5_k$ = function (enter) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? enter.get_data_wokkxf_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_data_wokkxf_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? enter.get_data_wokkxf_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.get_data_wokkxf_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? enter.get_data_wokkxf_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = this.get_data_wokkxf_k$().scale_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? enter.get_data_wokkxf_k$().scale_1 : tmp3_elvis_lhs));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_5().None_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      var tmp0_run = this.get_data_wokkxf_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var tmp3_safe_receiver = tmp0_run.fade_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = tmp0_run.slide_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = tmp0_run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = tmp0_run.scale_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.get_data_wokkxf_k$().equals(this.get_data_wokkxf_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.get_data_wokkxf_k$().hashCode();
  };
  function expandHorizontally(animationSpec, expandFrom, clip, initialWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_End_18ju7i_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialWidth === VOID) {
      tmp = expandHorizontally$lambda;
    } else {
      tmp = initialWidth;
    }
    initialWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandHorizontally$lambda_0(initialWidth));
  }
  function fadeIn(animationSpec, initialAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$()) : animationSpec;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function expandVertically(animationSpec, expandFrom, clip, initialHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_Bottom_3m75bg_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialHeight === VOID) {
      tmp = expandVertically$lambda;
    } else {
      tmp = initialHeight;
    }
    initialHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandVertically$lambda_0(initialHeight));
  }
  function shrinkVertically(animationSpec, shrinkTowards, clip, targetHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_Bottom_3m75bg_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetHeight === VOID) {
      tmp = shrinkVertically$lambda;
    } else {
      tmp = targetHeight;
    }
    targetHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkVertically$lambda_0(targetHeight));
  }
  function TransitionData(fade, slide, changeSize, scale) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    this.fade_1 = fade;
    this.slide_1 = slide;
    this.changeSize_1 = changeSize;
    this.scale_1 = scale;
  }
  protoOf(TransitionData).get_fade_woluit_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).get_slide_iykyvc_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).get_changeSize_fljy3e_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).component1_7eebsc_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).component2_7eebsb_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).component3_7eebsa_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).component4_7eebs9_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).copy_zgcw61_k$ = function (fade, slide, changeSize, scale) {
    return new TransitionData(fade, slide, changeSize, scale);
  };
  protoOf(TransitionData).copy$default_rtbj4u_k$ = function (fade, slide, changeSize, scale, $super) {
    fade = fade === VOID ? this.fade_1 : fade;
    slide = slide === VOID ? this.slide_1 : slide;
    changeSize = changeSize === VOID ? this.changeSize_1 : changeSize;
    scale = scale === VOID ? this.scale_1 : scale;
    return $super === VOID ? this.copy_zgcw61_k$(fade, slide, changeSize, scale) : $super.copy_zgcw61_k$.call(this, fade, slide, changeSize, scale);
  };
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + this.fade_1 + ', slide=' + this.slide_1 + ', changeSize=' + this.changeSize_1 + ', scale=' + this.scale_1 + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.fade_1 == null ? 0 : this.fade_1.hashCode();
    result = imul(result, 31) + (this.slide_1 == null ? 0 : this.slide_1.hashCode()) | 0;
    result = imul(result, 31) + (this.changeSize_1 == null ? 0 : this.changeSize_1.hashCode()) | 0;
    result = imul(result, 31) + (this.scale_1 == null ? 0 : this.scale_1.hashCode()) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.fade_1, tmp0_other_with_cast.fade_1))
      return false;
    if (!equals(this.slide_1, tmp0_other_with_cast.slide_1))
      return false;
    if (!equals(this.changeSize_1, tmp0_other_with_cast.changeSize_1))
      return false;
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.data_1 = data;
  }
  protoOf(ExitTransitionImpl).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function Fade(alpha, animationSpec) {
    this.alpha_1 = alpha;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Fade).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).component1_7eebsc_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).copy_sae5ax_k$ = function (alpha, animationSpec) {
    return new Fade(alpha, animationSpec);
  };
  protoOf(Fade).copy$default_y9588r_k$ = function (alpha, animationSpec, $super) {
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_sae5ax_k$(alpha, animationSpec) : $super.copy_sae5ax_k$.call(this, alpha, animationSpec);
  };
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.alpha_1 + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.alpha_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.alpha_1, tmp0_other_with_cast.alpha_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function Slide(slideOffset, animationSpec) {
    this.slideOffset_1 = slideOffset;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Slide).get_slideOffset_3j6nyd_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).component1_7eebsc_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).copy_gp3dbw_k$ = function (slideOffset, animationSpec) {
    return new Slide(slideOffset, animationSpec);
  };
  protoOf(Slide).copy$default_40mtxb_k$ = function (slideOffset, animationSpec, $super) {
    slideOffset = slideOffset === VOID ? this.slideOffset_1 : slideOffset;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_gp3dbw_k$(slideOffset, animationSpec) : $super.copy_gp3dbw_k$.call(this, slideOffset, animationSpec);
  };
  protoOf(Slide).toString = function () {
    return 'Slide(slideOffset=' + this.slideOffset_1 + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Slide).hashCode = function () {
    var result = hashCode(this.slideOffset_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Slide).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Slide))
      return false;
    var tmp0_other_with_cast = other instanceof Slide ? other : THROW_CCE();
    if (!equals(this.slideOffset_1, tmp0_other_with_cast.slideOffset_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    return new IntSize(IntSize_0(0, 0));
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.alignment_1 = alignment;
    this.size_1 = size;
    this.animationSpec_1 = animationSpec;
    this.clip_1 = clip;
  }
  protoOf(ChangeSize).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).component1_7eebsc_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).component4_7eebs9_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).copy_c1dznr_k$ = function (alignment, size, animationSpec, clip) {
    return new ChangeSize(alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).copy$default_gegaug_k$ = function (alignment, size, animationSpec, clip, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    size = size === VOID ? this.size_1 : size;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    clip = clip === VOID ? this.clip_1 : clip;
    return $super === VOID ? this.copy_c1dznr_k$(alignment, size, animationSpec, clip) : $super.copy_c1dznr_k$.call(this, alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + this.alignment_1 + ', size=' + this.size_1 + ', animationSpec=' + this.animationSpec_1 + ', clip=' + this.clip_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + hashCode(this.size_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + (this.clip_1 | 0) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    var tmp0_other_with_cast = other instanceof ChangeSize ? other : THROW_CCE();
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    if (!(this.clip_1 === tmp0_other_with_cast.clip_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.scale_1 = scale;
    this.transformOrigin_1 = transformOrigin;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Scale).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).get_transformOrigin_q3dmip_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).component1_7eebsc_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).component2_dvu46t_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).copy_x7tq9e_k$ = function (scale, transformOrigin, animationSpec) {
    return new Scale(scale, transformOrigin, animationSpec);
  };
  protoOf(Scale).copy$default_unhhwl_k$ = function (scale, transformOrigin, animationSpec, $super) {
    scale = scale === VOID ? this.scale_1 : scale;
    transformOrigin = transformOrigin === VOID ? this.transformOrigin_1 : transformOrigin;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_x7tq9e_k$(scale, transformOrigin, animationSpec) : $super.copy_x7tq9e_k$.call(this, scale, new TransformOrigin(transformOrigin), animationSpec);
  };
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.scale_1 + ', transformOrigin=' + new TransformOrigin(this.transformOrigin_1) + ', animationSpec=' + this.animationSpec_1 + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.scale_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.transformOrigin_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.scale_1, tmp0_other_with_cast.scale_1))
      return false;
    if (!equals(this.transformOrigin_1, tmp0_other_with_cast.transformOrigin_1))
      return false;
    if (!equals(this.animationSpec_1, tmp0_other_with_cast.animationSpec_1))
      return false;
    return true;
  };
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_0().get_BottomEnd_ayz0tj_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetSize === VOID) {
      tmp = shrinkOut$lambda;
    } else {
      tmp = targetSize;
    }
    targetSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_0().get_Start_ih4i6x_k$()) ? Companion_getInstance_0().get_CenterStart_2305fg_k$() : equals(_this__u8e3s4, Companion_getInstance_0().get_End_18ju7i_k$()) ? Companion_getInstance_0().get_CenterEnd_uti4xp_k$() : Companion_getInstance_0().get_Center_3arb0i_k$();
  }
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.data_1 = data;
  }
  protoOf(EnterTransitionImpl).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_0().get_BottomEnd_ayz0tj_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialSize === VOID) {
      tmp = expandIn$lambda;
    } else {
      tmp = initialSize;
    }
    initialSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function toAlignment_0(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_0().get_Top_18jj1w_k$()) ? Companion_getInstance_0().get_TopCenter_u4q5vl_k$() : equals(_this__u8e3s4, Companion_getInstance_0().get_Bottom_3m75bg_k$()) ? Companion_getInstance_0().get_BottomCenter_yatb1z_k$() : Companion_getInstance_0().get_Center_3arb0i_k$();
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.packedValue_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function shrinkHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkHorizontally$lambda_0($targetWidth) {
    return function (it) {
      return new IntSize(IntSize_0($targetWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function expandHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandHorizontally$lambda_0($initialWidth) {
    return function (it) {
      return new IntSize(IntSize_0($initialWidth(_IntSize___get_width__impl__d9yl4o(it.packedValue_1)), _IntSize___get_height__impl__prv63b(it.packedValue_1)));
    };
  }
  function expandVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandVertically$lambda_0($initialHeight) {
    return function (it) {
      return new IntSize(IntSize_0(_IntSize___get_width__impl__d9yl4o(it.packedValue_1), $initialHeight(_IntSize___get_height__impl__prv63b(it.packedValue_1))));
    };
  }
  function shrinkVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkVertically$lambda_0($targetHeight) {
    return function (it) {
      return new IntSize(IntSize_0(_IntSize___get_width__impl__d9yl4o(it.packedValue_1), $targetHeight(_IntSize___get_height__impl__prv63b(it.packedValue_1))));
    };
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntSize(IntSize_0(0, 0));
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlpha = mutableFloatStateOf(1.0);
      DefaultAlphaAndScaleSpring = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$());
      DefaultOffsetAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_1())));
      DefaultSizeAnimationSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntSize(get_VisibilityThreshold(Companion_getInstance())));
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  function get_$stableprop_1() {
    return 0;
  }
  function _get_friction__4dx5ox($this) {
    return $this.friction_1;
  }
  function _get_magicPhysicalCoefficient__7ixkai($this) {
    return $this.magicPhysicalCoefficient_1;
  }
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.get_density_qy0267_k$());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().deceleration_b9qzl_k$(velocity, $this.friction_1 * $this.magicPhysicalCoefficient_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.initialVelocity_1 = initialVelocity;
    this.distance_1 = distance;
    this.duration_1 = duration;
    this.$stable_1 = 0;
  }
  protoOf(FlingInfo).get_initialVelocity_xnobx4_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).get_distance_r171oi_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).position_axeral_k$ = function (time) {
    var tmp;
    if (this.duration_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.duration_1.toFloat_jhbgwv_k$();
      tmp = time.toFloat_jhbgwv_k$() / tmp0_div;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sign' call
    var tmp1_sign = this.initialVelocity_1;
    tmp$ret$1 = sign(tmp1_sign);
    return this.distance_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().flingPosition_xrffyv_k$(splinePos).get_distanceCoefficient_3vhbop_k$();
  };
  protoOf(FlingInfo).velocity_v2xlvr_k$ = function (time) {
    var tmp;
    if (this.duration_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.duration_1.toFloat_jhbgwv_k$();
      tmp = time.toFloat_jhbgwv_k$() / tmp0_div;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().flingPosition_xrffyv_k$(splinePos).get_velocityCoefficient_w8qjlb_k$();
    // Inline function 'kotlin.math.sign' call
    var tmp1_sign = this.initialVelocity_1;
    return tmp_0 * sign(tmp1_sign) * this.distance_1 / this.duration_1.toFloat_jhbgwv_k$() * 1000.0;
  };
  protoOf(FlingInfo).component1_7eebsc_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).component2_7eebsb_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).component3_7eebsa_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).copy_qho10f_k$ = function (initialVelocity, distance, duration) {
    return new FlingInfo(initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).copy$default_wl6v6_k$ = function (initialVelocity, distance, duration, $super) {
    initialVelocity = initialVelocity === VOID ? this.initialVelocity_1 : initialVelocity;
    distance = distance === VOID ? this.distance_1 : distance;
    duration = duration === VOID ? this.duration_1 : duration;
    return $super === VOID ? this.copy_qho10f_k$(initialVelocity, distance, duration) : $super.copy_qho10f_k$.call(this, initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.initialVelocity_1 + ', distance=' + this.distance_1 + ', duration=' + toString(this.duration_1) + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.initialVelocity_1);
    result = imul(result, 31) + getNumberHashCode(this.distance_1) | 0;
    result = imul(result, 31) + this.duration_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.initialVelocity_1, tmp0_other_with_cast.initialVelocity_1))
      return false;
    if (!equals(this.distance_1, tmp0_other_with_cast.distance_1))
      return false;
    if (!this.duration_1.equals(tmp0_other_with_cast.duration_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.friction_1 = friction;
    this.density_1 = density;
    this.magicPhysicalCoefficient_1 = computeDeceleration(this, this.density_1);
  }
  protoOf(FlingCalculator).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(FlingCalculator).flingDuration_tlzcny_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = l / decelMinusOne;
    tmp$ret$0 = Math.exp(tmp0_exp);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).flingDistance_fh7swt_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(tmp0_exp);
  };
  protoOf(FlingCalculator).flingInfo_gbiih0_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(tmp0_exp);
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp1_exp = l / decelMinusOne;
    tmp$ret$1 = Math.exp(tmp1_exp);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  function get_InchesPerMeter() {
    return InchesPerMeter;
  }
  var InchesPerMeter;
  function get_GravityEarth() {
    return GravityEarth;
  }
  var GravityEarth;
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
    }
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState$composable(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-836854195);
    sourceInformation($composer_0, 'C(animateColorAsState$composable)P(3:c#ui.graphics.Color!1,2)62@2847L96,65@2955L124:SingleValueAnimation.kt#xbi5r1');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-836854195, $changed, -1, 'androidx.compose.animation.animateColorAsState$composable (SingleValueAnimation.kt:56)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = _Color___get_colorSpace__impl__jqqozk(targetValue);
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
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.animateColorAsState$composable.<anonymous>' call
      var value = get_VectorConverter(Companion_getInstance_2())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_1.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_er37p7_k$();
    var converter = tmp0;
    var tmp_1 = new Color_0(targetValue);
    var tmp_2 = animationSpec_0;
    var tmp0_0 = animateValueAsState$composable(tmp_1, converter, tmp_2, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function get_$stableprop_2() {
    return 0;
  }
  function _get_NbSamples__pl9lcs($this) {
    return $this.NbSamples_1;
  }
  function _get_SplinePositions__4lf5u0($this) {
    return $this.SplinePositions_1;
  }
  function _get_SplineTimes__1bv5pg($this) {
    return $this.SplineTimes_1;
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.distanceCoefficient_1 = distanceCoefficient;
    this.velocityCoefficient_1 = velocityCoefficient;
    this.$stable_1 = 0;
  }
  protoOf(FlingResult).get_distanceCoefficient_3vhbop_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).get_velocityCoefficient_w8qjlb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).component1_7eebsc_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).component2_7eebsb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).copy_138fzp_k$ = function (distanceCoefficient, velocityCoefficient) {
    return new FlingResult(distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).copy$default_6em5l2_k$ = function (distanceCoefficient, velocityCoefficient, $super) {
    distanceCoefficient = distanceCoefficient === VOID ? this.distanceCoefficient_1 : distanceCoefficient;
    velocityCoefficient = velocityCoefficient === VOID ? this.velocityCoefficient_1 : velocityCoefficient;
    return $super === VOID ? this.copy_138fzp_k$(distanceCoefficient, velocityCoefficient) : $super.copy_138fzp_k$.call(this, distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.distanceCoefficient_1 + ', velocityCoefficient=' + this.velocityCoefficient_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.distanceCoefficient_1);
    result = imul(result, 31) + getNumberHashCode(this.velocityCoefficient_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.distanceCoefficient_1, tmp0_other_with_cast.distanceCoefficient_1))
      return false;
    if (!equals(this.velocityCoefficient_1, tmp0_other_with_cast.velocityCoefficient_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.NbSamples_1 = 100;
    this.SplinePositions_1 = new Float32Array(101);
    this.SplineTimes_1 = new Float32Array(101);
    computeSplineInfo(this.SplinePositions_1, this.SplineTimes_1, 100);
  }
  protoOf(AndroidFlingSpline).flingPosition_xrffyv_k$ = function (time) {
    var index = numberToInt(100 * time);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.SplinePositions_1[index];
      var dSup = this.SplinePositions_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (time - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).deceleration_b9qzl_k$ = function (velocity, friction) {
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var tmp0_ln = 0.35 * Math.abs(velocity) / friction;
    return Math.log(tmp0_ln);
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs = tx - alpha;
          if (Math.abs(tmp0_abs) < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          // Inline function 'kotlin.math.abs' call
          var tmp1_abs = dy - alpha;
          if (Math.abs(tmp1_abs) < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  function get_Inflection() {
    return Inflection;
  }
  var Inflection;
  function get_P2() {
    return P2;
  }
  var P2;
  function get_P1() {
    return P1;
  }
  var P1;
  function get_StartTension() {
    return StartTension;
  }
  var StartTension;
  function _get_flingCalculator__k6f165($this) {
    return $this.flingCalculator_1;
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.flingCalculator_1.flingDistance_fh7swt_k$(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function get_$stableprop_3() {
    return 0;
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.flingCalculator_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
    this.$stable_1 = 0;
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).get_absVelocityThreshold_wsgqo5_k$ = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getTargetValue_xs6ane_k$ = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getValueFromNanos_tm63l0_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(new Long(1000000, 0));
    return initialValue + this.flingCalculator_1.flingInfo_gbiih0_k$(initialVelocity).position_axeral_k$(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getDurationNanos_kuw0r9_k$ = function (initialValue, initialVelocity) {
    return this.flingCalculator_1.flingDuration_tlzcny_k$(initialVelocity).times_2zfqpc_k$(new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getVelocityFromNanos_1qiryk_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(new Long(1000000, 0));
    return this.flingCalculator_1.flingInfo_gbiih0_k$(initialVelocity).velocity_v2xlvr_k$(playTimeMillis);
  };
  function animateColor$composable(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1488075038);
    sourceInformation($composer_0, 'CC(animateColor$composable)P(2)68@3220L31,69@3287L70,73@3370L70:Transition.kt#xbi5r1');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateColor$composable$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'ColorAnimation';
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 6).value_1);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.changed_ga7h3f_k$(colorSpace);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
      var value = get_VectorConverter(Companion_getInstance_2())(colorSpace);
      $composer_1.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_er37p7_k$();
    var typeConverter = tmp0;
    // Inline function 'androidx.compose.animation.core.animateValue$composable' call
    var tmp4_animateValue$composable = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = transitionSpec_0;
    var label_1 = label_0;
    var $composer_2 = $composer_0;
    $composer_2.startReplaceableGroup_rp6air_k$(-1940744337);
    sourceInformation($composer_2, 'CC(animateValue$composable)P(3,2)857@34142L32,858@34197L31,859@34253L23,861@34289L89:Transition.kt#pdpnli');
    if (!(0 === 0)) {
      transitionSpec_1 = animateColor$composable$lambda_0;
    }
    if (!(0 === 0))
      label_1 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_2, 112 & tmp4_animateValue$composable >> 9).value_1;
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_2, 112 & tmp4_animateValue$composable >> 9).value_1;
    var animationSpec = transitionSpec_1(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_2, 112 & tmp4_animateValue$composable >> 3);
    var tmp0_0 = createTransitionAnimation$composable(_this__u8e3s4, new Color_0(initialValue), new Color_0(targetValue), animationSpec, typeConverter, label_1, $composer_2, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
    $composer_2.endReplaceableGroup_er37p7_k$();
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function animateColor$composable$lambda($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1457805428);
    if (isTraceInProgress()) {
      traceEventStart(-1457805428, $changed, -1, 'androidx.compose.animation.animateColor$composable.<anonymous> (Transition.kt:64)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function animateColor$composable$lambda_0($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:852)');
    }
    var tmp0 = spring();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(802798862);
    sourceInformation($composer_0, 'C(rememberSplineBasedDecay$composable)30@1256L7,31@1275L114:SplineBasedDecayAnimationSpec.js.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(802798862, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay$composable (SplineBasedDecayAnimationSpec.js.kt:27)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = density.get_density_qy0267_k$();
    var $composer_2 = $composer_0;
    $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_2.changed_ga7h3f_k$(tmp2_remember$composable);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_2.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.animation.rememberSplineBasedDecay$composable.<anonymous>' call
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      $composer_2.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0_0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_2.endReplaceableGroup_er37p7_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  //region block: init
  InchesPerMeter = 39.37;
  GravityEarth = 9.80665;
  Inflection = 0.35;
  P2 = 0.35000002;
  P1 = 0.175;
  StartTension = 0.5;
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_VectorConverter;
  _.$_$.b = animateColorAsState$composable;
  _.$_$.c = expandHorizontally;
  _.$_$.d = expandVertically;
  _.$_$.e = fadeIn;
  _.$_$.f = fadeOut;
  _.$_$.g = rememberSplineBasedDecay$composable;
  _.$_$.h = shrinkHorizontally;
  _.$_$.i = shrinkVertically;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-animation.js.map
