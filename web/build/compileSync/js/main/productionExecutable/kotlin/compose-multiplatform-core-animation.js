(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-animation-core.js', './compose-multiplatform-core-ui-graphics.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-animation-core.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'));
  else {
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-animation'.");
    }
    root['compose-multiplatform-core-animation'] = factory(typeof this['compose-multiplatform-core-animation'] === 'undefined' ? {} : this['compose-multiplatform-core-animation'], this['compose-multiplatform-core-animation-core'], this['compose-multiplatform-core-ui-graphics'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var sign = Math.sign;
  var imul = Math.imul;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Color__component1_impl_lz80qe = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var Color__component2_impl_mg9n4l = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var Color__component3_impl_mxb9is = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l2;
  var Color__component4_impl_necvwz = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var coerceIn = kotlin_kotlin.$_$.na;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var Long = kotlin_kotlin.$_$.rc;
  var protoOf = kotlin_kotlin.$_$.r9;
  var getNumberHashCode = kotlin_kotlin.$_$.y8;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var equals = kotlin_kotlin.$_$.t8;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var numberToLong = kotlin_kotlin.$_$.o9;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var animateValueAsState$composable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var numberToInt = kotlin_kotlin.$_$.n9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  //endregion
  //region block: pre-declaration
  setMetadataFor(FlingInfo, 'FlingInfo', classMeta);
  setMetadataFor(FlingCalculator, 'FlingCalculator', classMeta);
  setMetadataFor(FlingResult, 'FlingResult', classMeta);
  setMetadataFor(AndroidFlingSpline, 'AndroidFlingSpline', objectMeta);
  setMetadataFor(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec', classMeta);
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
    var tmp0_container = Color__convert_impl_so5m8t(color.p41_1, ColorSpaces_getInstance().h45_1);
    var l = Color__component1_impl_lz80qe(tmp0_container);
    var a = Color__component2_impl_mg9n4l(tmp0_container);
    var b = Color__component3_impl_mxb9is(tmp0_container);
    var alpha = Color__component4_impl_necvwz(tmp0_container);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      return new Color_0(Color__convert_impl_so5m8t(Color(coerceIn(vector.i8t_1, 0.0, 1.0), coerceIn(vector.j8t_1, -0.5, 0.5), coerceIn(vector.k8t_1, -0.5, 0.5), coerceIn(vector.h8t_1, 0.0, 1.0), ColorSpaces_getInstance().h45_1), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.h3b());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().v9g(velocity, $this.p9g_1 * $this.r9g_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.w9g_1 = initialVelocity;
    this.x9g_1 = distance;
    this.y9g_1 = duration;
    this.z9g_1 = 0;
  }
  protoOf(FlingInfo).a9h = function (time) {
    var tmp;
    if (this.y9g_1.a7(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = this.y9g_1.eb();
      tmp = time.eb() / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    // Inline function 'kotlin.math.sign' call
    var x = this.w9g_1;
    var tmp$ret$1 = sign(x);
    return this.x9g_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().e9h(splinePos).b9h_1;
  };
  protoOf(FlingInfo).f9h = function (time) {
    var tmp;
    if (this.y9g_1.a7(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = this.y9g_1.eb();
      tmp = time.eb() / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().e9h(splinePos).c9h_1;
    // Inline function 'kotlin.math.sign' call
    var x = this.w9g_1;
    return tmp_0 * sign(x) * this.x9g_1 / this.y9g_1.eb() * 1000.0;
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.w9g_1 + ', distance=' + this.x9g_1 + ', duration=' + this.y9g_1.toString() + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.w9g_1);
    result = imul(result, 31) + getNumberHashCode(this.x9g_1) | 0;
    result = imul(result, 31) + this.y9g_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    var tmp0_other_with_cast = other instanceof FlingInfo ? other : THROW_CCE();
    if (!equals(this.w9g_1, tmp0_other_with_cast.w9g_1))
      return false;
    if (!equals(this.x9g_1, tmp0_other_with_cast.x9g_1))
      return false;
    if (!this.y9g_1.equals(tmp0_other_with_cast.y9g_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.p9g_1 = friction;
    this.q9g_1 = density;
    this.r9g_1 = computeDeceleration(this, this.q9g_1);
  }
  protoOf(FlingCalculator).g9h = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    // Inline function 'kotlin.math.exp' call
    var x = l / decelMinusOne;
    var tmp$ret$0 = Math.exp(x);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).h9h = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.p9g_1 * this.r9g_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(x);
  };
  protoOf(FlingCalculator).i9h = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.p9g_1 * this.r9g_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = l / decelMinusOne;
    var tmp$ret$1 = Math.exp(x_0);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 386.08781049999993 * density * 160.0 * friction;
  }
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
    $composer_0.f1x(-836854195);
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
    var key1 = _Color___get_colorSpace__impl__jqqozk(targetValue);
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
      // Inline function 'androidx.compose.animation.animateColorAsState$composable.<anonymous>' call
      var value = get_VectorConverter(Companion_getInstance())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    var converter = tmp0;
    var tmp_1 = animationSpec_0;
    var tmp0_0 = animateValueAsState$composable(new Color_0(targetValue), converter, tmp_1, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.b9h_1 = distanceCoefficient;
    this.c9h_1 = velocityCoefficient;
    this.d9h_1 = 0;
  }
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.b9h_1 + ', velocityCoefficient=' + this.c9h_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.b9h_1);
    result = imul(result, 31) + getNumberHashCode(this.c9h_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    var tmp0_other_with_cast = other instanceof FlingResult ? other : THROW_CCE();
    if (!equals(this.b9h_1, tmp0_other_with_cast.b9h_1))
      return false;
    if (!equals(this.c9h_1, tmp0_other_with_cast.c9h_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.s9g_1 = 100;
    this.t9g_1 = new Float32Array(101);
    this.u9g_1 = new Float32Array(101);
    computeSplineInfo(this.t9g_1, this.u9g_1, 100);
  }
  protoOf(AndroidFlingSpline).e9h = function (time) {
    var index = numberToInt(100 * time);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.t9g_1[index];
      var dSup = this.t9g_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (time - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).v9g = function (velocity, friction) {
    // Inline function 'kotlin.math.ln' call
    // Inline function 'kotlin.math.abs' call
    var x = 0.35 * Math.abs(velocity) / friction;
    return Math.log(x);
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
          var x_0 = tx - alpha;
          if (Math.abs(x_0) < 1.0E-5)
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
          var x_1 = dy - alpha;
          if (Math.abs(x_1) < 1.0E-5)
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
  function flingDistance($this, startVelocity) {
    var tmp = $this.j9h_1.h9h(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.j9h_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
    this.k9h_1 = 0;
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).v8r = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).g8u = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).d8u = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.l9(new Long(1000000, 0));
    return initialValue + this.j9h_1.i9h(initialVelocity).a9h(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).e8u = function (initialValue, initialVelocity) {
    return this.j9h_1.g9h(initialVelocity).m9(new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).f8u = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.l9(new Long(1000000, 0));
    return this.j9h_1.i9h(initialVelocity).f9h(playTimeMillis);
  };
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(802798862);
    sourceInformation($composer_0, 'C(rememberSplineBasedDecay$composable)30@1256L7,31@1275L114:SplineBasedDecayAnimationSpec.js.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(802798862, $changed, -1, 'androidx.compose.animation.rememberSplineBasedDecay$composable (SplineBasedDecayAnimationSpec.js.kt:27)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var key1 = density.h3b();
    var $composer_2 = $composer_0;
    $composer_2.f1x(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.t1z(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.animation.rememberSplineBasedDecay$composable.<anonymous>' call
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      $composer_2.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_2.h1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_VectorConverter;
  _.$_$.b = animateColorAsState$composable;
  _.$_$.c = rememberSplineBasedDecay$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-animation.js.map
