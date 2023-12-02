(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-ui-unit.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-geometry.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'components-library'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-library'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'components-library'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'components-library'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'components-library'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'components-library'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'components-library'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'components-library'.");
    }
    root['components-library'] = factory(typeof this['components-library'] === 'undefined' ? {} : this['components-library'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-ui-unit'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-geometry'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var rememberVectorPainter$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var endsWith = kotlin_kotlin.$_$.mb;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var LaunchedEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qd;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var VOID = kotlin_kotlin.$_$.d;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var protoOf = kotlin_kotlin.$_$.r9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var isInterface = kotlin_kotlin.$_$.h9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var Exception = kotlin_kotlin.$_$.oc;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var KProperty0 = kotlin_kotlin.$_$.va;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var lazy = kotlin_kotlin.$_$.pd;
  var hashCode = kotlin_kotlin.$_$.c9;
  var equals = kotlin_kotlin.$_$.t8;
  var getStringHashCode = kotlin_kotlin.$_$.b9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var removeSuffix = kotlin_kotlin.$_$.tb;
  var toDouble = kotlin_kotlin.$_$.zb;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var startsWith = kotlin_kotlin.$_$.yb;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var toUInt = kotlin_kotlin.$_$.dc;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.m2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v3;
  var Enum = kotlin_kotlin.$_$.mc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var isBlank = kotlin_kotlin.$_$.nb;
  var filter = kotlin_kotlin.$_$.cb;
  var Sequence = kotlin_kotlin.$_$.ab;
  var sequence = kotlin_kotlin.$_$.gb;
  var addPathNodes = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var PathFillType = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var StrokeCap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var StrokeJoin = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var get_DefaultRotation = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var get_DefaultPivotX = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var get_DefaultPivotY = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var get_DefaultScaleX = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var get_DefaultScaleY = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var get_DefaultTranslationX = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var get_DefaultTranslationY = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var get_EmptyPath = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var removeLastOrNull = kotlin_kotlin.$_$.o6;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var TileMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var toList = kotlin_kotlin.$_$.hb;
  var checkIndexOverflow = kotlin_kotlin.$_$.f4;
  var get_lastIndex = kotlin_kotlin.$_$.q5;
  var coerceAtLeast = kotlin_kotlin.$_$.ha;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var to = kotlin_kotlin.$_$.ce;
  var copyToArray = kotlin_kotlin.$_$.p4;
  var SequenceScope = kotlin_kotlin.$_$.za;
  var until = kotlin_kotlin.$_$.sa;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.h1;
  var captureStack = kotlin_kotlin.$_$.j8;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.y1;
  var decodeToString = kotlin_kotlin.$_$.lb;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.s7;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(rememberImageBitmap$composable$slambda, 'rememberImageBitmap$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(rememberImageVector$composable$slambda, 'rememberImageVector$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(LoadState, 'LoadState', classMeta);
  setMetadataFor(Loading, 'Loading', classMeta, LoadState, VOID, Loading);
  setMetadataFor(Success, 'Success', classMeta, LoadState);
  setMetadataFor(Error_0, 'Error', classMeta, LoadState);
  setMetadataFor(AbstractResourceImpl, 'AbstractResourceImpl', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Group, 'Group', classMeta, Enum);
  setMetadataFor(BuildContext, 'BuildContext', classMeta, VOID, VOID, BuildContext);
  setMetadataFor(_get_childrenSequence_$slambda_9jpw3j, '<get-childrenSequence>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Element_0, 'Element', interfaceMeta);
  setMetadataFor(MalformedXMLException, 'MalformedXMLException', classMeta, Exception);
  setMetadataFor(WebResourcesConfiguration, 'WebResourcesConfiguration', objectMeta);
  setMetadataFor($readBytesCOROUTINE$0, '$readBytesCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JSUrlResourceImpl, 'JSUrlResourceImpl', classMeta, AbstractResourceImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(MissingResourceException, 'MissingResourceException', classMeta, Exception);
  setMetadataFor(NodeImpl, 'NodeImpl', classMeta);
  setMetadataFor(ElementImpl, 'ElementImpl', classMeta, NodeImpl, [NodeImpl, Element_0]);
  setMetadataFor(NodeImpl$childNodes$2$1, VOID, classMeta);
  //endregion
  function get_emptyImageBitmap() {
    _init_properties_ComposeResource_common_kt__692f5z();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageBitmap$delegate;
    emptyImageBitmap$factory();
    return this_0.u2();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ComposeResource_common_kt__692f5z();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageVector$delegate;
    emptyImageVector$factory();
    return this_0.u2();
  }
  var emptyImageVector$delegate;
  function painterResource$composable(res, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(-2119472146);
    sourceInformation($composer_0, 'C(painterResource$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-2119472146, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable (ComposeResource.common.kt:117)');
    }
    var tmp;
    if (isSyncResourceLoadingSupported()) {
      $composer_0.f1x(180607650);
      var tmp_0 = painterResource$composable$lambda;
      var tmp1_group = painterResource$composable_0(res, tmp_0, painterResource$composable$lambda_0, $composer_0, 14 & $changed);
      $composer_0.h1x();
      tmp = tmp1_group;
    } else {
      $composer_0.f1x(180607766);
      var tmp_1 = painterResource$composable$lambda_1;
      var tmp2_group = painterResource$composable_0(res, tmp_1, painterResource$composable$lambda_2, $composer_0, 14 & $changed);
      $composer_0.h1x();
      tmp = tmp2_group;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function painterResource$composable_0(res, rememberImageBitmap, rememberImageVector, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(721382759);
    if (isTraceInProgress()) {
      traceEventStart(721382759, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable (ComposeResource.common.kt:93)');
    }
    var tmp;
    if (endsWith(res, '.xml')) {
      $composer_0.f1x(180606871);
      var tmp_0 = resource(res);
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.b20(this_0);
      sourceInformationMarkerEnd($composer_1);
      var tmp1_group = rememberVectorPainter$composable(rememberImageVector(tmp_0, tmp0, $composer_0, 896 & $changed), $composer_0, 0);
      $composer_0.h1x();
      tmp = tmp1_group;
    } else {
      $composer_0.f1x(180606971);
      var tmp2_group = new BitmapPainter(rememberImageBitmap(resource(res), $composer_0, 112 & $changed));
      $composer_0.h1x();
      tmp = tmp2_group;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  function rememberImageBitmapSync$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(68255616);
    if (isTraceInProgress()) {
      traceEventStart(68255616, $changed, -1, 'org.jetbrains.compose.resources.rememberImageBitmapSync$composable (ComposeResource.common.kt:80)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.t1z(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'org.jetbrains.compose.resources.rememberImageBitmapSync$composable.<anonymous>' call
      var value = toImageBitmap(readBytesSync(_this__u8e3s4));
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
  function rememberImageVectorSync$composable(_this__u8e3s4, density, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(-1029554264);
    if (isTraceInProgress()) {
      traceEventStart(-1029554264, $changed, -1, 'org.jetbrains.compose.resources.rememberImageVectorSync$composable (ComposeResource.common.kt:86)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.t1z(_this__u8e3s4) | $composer_1.t1z(density));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'org.jetbrains.compose.resources.rememberImageVectorSync$composable.<anonymous>' call
      var value = toImageVector(readBytesSync(_this__u8e3s4), density);
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
  function orEmpty(_this__u8e3s4) {
    _init_properties_ComposeResource_common_kt__692f5z();
    return orEmpty_1(_this__u8e3s4, get_emptyImageBitmap());
  }
  function rememberImageBitmap$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(1540248957);
    sourceInformation($composer_0, 'C(rememberImageBitmap$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1540248957, $changed, -1, 'org.jetbrains.compose.resources.rememberImageBitmap$composable (ComposeResource.common.kt:30)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.t1z(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'org.jetbrains.compose.resources.rememberImageBitmap$composable.<anonymous>' call
      var value = mutableStateOf(new Loading());
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    var state = tmp0;
    LaunchedEffect$composable(_this__u8e3s4, rememberImageBitmap$composable$slambda_0(state, _this__u8e3s4, null), $composer_0, 14 & $changed);
    var tmp0_0 = state.u2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  function orEmpty_0(_this__u8e3s4) {
    _init_properties_ComposeResource_common_kt__692f5z();
    return orEmpty_1(_this__u8e3s4, get_emptyImageVector());
  }
  function rememberImageVector$composable(_this__u8e3s4, density, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(741159083);
    sourceInformation($composer_0, 'C(rememberImageVector$composable)');
    if (isTraceInProgress()) {
      traceEventStart(741159083, $changed, -1, 'org.jetbrains.compose.resources.rememberImageVector$composable (ComposeResource.common.kt:47)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.t1z(_this__u8e3s4) | $composer_1.t1z(density));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().t1y_1) {
      // Inline function 'org.jetbrains.compose.resources.rememberImageVector$composable.<anonymous>' call
      var value = mutableStateOf(new Loading());
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    var state = tmp0;
    LaunchedEffect$composable_0(_this__u8e3s4, density, rememberImageVector$composable$slambda_0(state, _this__u8e3s4, density, null), $composer_0, 14 & $changed | 112 & $changed);
    var tmp0_0 = state.u2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  function toImageVector(_this__u8e3s4, density) {
    _init_properties_ComposeResource_common_kt__692f5z();
    return parseVectorRoot(parseXML(_this__u8e3s4), density);
  }
  function orEmpty_1(_this__u8e3s4, emptyValue) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var tmp;
    if (_this__u8e3s4 instanceof Loading) {
      tmp = emptyValue;
    } else {
      if (_this__u8e3s4 instanceof Success) {
        tmp = _this__u8e3s4.mgc_1;
      } else {
        if (_this__u8e3s4 instanceof Error_0) {
          tmp = emptyValue;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function emptyImageBitmap$delegate$lambda() {
    _init_properties_ComposeResource_common_kt__692f5z();
    return ImageBitmap(1, 1);
  }
  function emptyImageVector$delegate$lambda() {
    _init_properties_ComposeResource_common_kt__692f5z();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(1);
    return (new Builder(VOID, tmp, tmp$ret$1, 1.0, 1.0)).v24();
  }
  function painterResource$composable$lambda($this$painterResource, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(1313644271);
    if (isTraceInProgress()) {
      traceEventStart(1313644271, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable.<anonymous> (ComposeResource.common.kt:119)');
    }
    var tmp0 = rememberImageBitmapSync$composable($this$painterResource, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function painterResource$composable$lambda_0($this$painterResource, density, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(1595580880);
    if (isTraceInProgress()) {
      traceEventStart(1595580880, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable.<anonymous> (ComposeResource.common.kt:119)');
    }
    var tmp0 = rememberImageVectorSync$composable($this$painterResource, density, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function painterResource$composable$lambda_1($this$painterResource, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(1252106488);
    if (isTraceInProgress()) {
      traceEventStart(1252106488, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable.<anonymous> (ComposeResource.common.kt:121)');
    }
    var tmp0 = orEmpty(rememberImageBitmap$composable($this$painterResource, $composer_0, 14 & $changed));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function painterResource$composable$lambda_2($this$painterResource, density, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.f1x(1864689689);
    if (isTraceInProgress()) {
      traceEventStart(1864689689, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable.<anonymous> (ComposeResource.common.kt:121)');
    }
    var tmp0 = orEmpty_0(rememberImageVector$composable($this$painterResource, density, $composer_0, 14 & $changed | 112 & $changed));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function rememberImageBitmap$composable$slambda($state, $this_rememberImageBitmap$composable, resultContinuation) {
    this.wgc_1 = $state;
    this.xgc_1 = $this_rememberImageBitmap$composable;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberImageBitmap$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(rememberImageBitmap$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberImageBitmap$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.xgc_1.agd(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = toImageBitmap(ARGUMENT);
            this.zgc_1 = new Success(ARGUMENT_0);
            this.ib_1 = 4;
            this.hb_1 = 3;
            continue $sm;
          case 2:
            this.ib_1 = 4;
            var tmp_0 = this.kb_1;
            if (tmp_0 instanceof Exception) {
              var e = this.kb_1;
              var tmp_1 = this;
              tmp_1.zgc_1 = new Error_0(e);
              this.hb_1 = 3;
              continue $sm;
            } else {
              throw this.kb_1;
            }

          case 3:
            this.ib_1 = 4;
            var ARGUMENT_1 = this.zgc_1;
            this.wgc_1.h1a(ARGUMENT_1);
            return Unit_instance;
          case 4:
            throw this.kb_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.ib_1 === 4) {
          throw e_0;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(rememberImageBitmap$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new rememberImageBitmap$composable$slambda(this.wgc_1, this.xgc_1, completion);
    i.ygc_1 = $this$LaunchedEffect;
    return i;
  };
  function rememberImageBitmap$composable$slambda_0($state, $this_rememberImageBitmap$composable, resultContinuation) {
    var i = new rememberImageBitmap$composable$slambda($state, $this_rememberImageBitmap$composable, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function rememberImageVector$composable$slambda($state, $this_rememberImageVector$composable, $density, resultContinuation) {
    this.jgd_1 = $state;
    this.kgd_1 = $this_rememberImageVector$composable;
    this.lgd_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberImageVector$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(rememberImageVector$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberImageVector$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.kgd_1.agd(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = toImageVector(ARGUMENT, this.lgd_1);
            this.ngd_1 = new Success(ARGUMENT_0);
            this.ib_1 = 4;
            this.hb_1 = 3;
            continue $sm;
          case 2:
            this.ib_1 = 4;
            var tmp_0 = this.kb_1;
            if (tmp_0 instanceof Exception) {
              var e = this.kb_1;
              var tmp_1 = this;
              tmp_1.ngd_1 = new Error_0(e);
              this.hb_1 = 3;
              continue $sm;
            } else {
              throw this.kb_1;
            }

          case 3:
            this.ib_1 = 4;
            var ARGUMENT_1 = this.ngd_1;
            this.jgd_1.h1a(ARGUMENT_1);
            return Unit_instance;
          case 4:
            throw this.kb_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.ib_1 === 4) {
          throw e_0;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(rememberImageVector$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new rememberImageVector$composable$slambda(this.jgd_1, this.kgd_1, this.lgd_1, completion);
    i.mgd_1 = $this$LaunchedEffect;
    return i;
  };
  function rememberImageVector$composable$slambda_0($state, $this_rememberImageVector$composable, $density, resultContinuation) {
    var i = new rememberImageVector$composable$slambda($state, $this_rememberImageVector$composable, $density, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function emptyImageBitmap$factory() {
    return getPropertyCallableRef('emptyImageBitmap', 0, KProperty0, function () {
      return get_emptyImageBitmap();
    }, null);
  }
  function emptyImageVector$factory() {
    return getPropertyCallableRef('emptyImageVector', 0, KProperty0, function () {
      return get_emptyImageVector();
    }, null);
  }
  var properties_initialized_ComposeResource_common_kt_eelrej;
  function _init_properties_ComposeResource_common_kt__692f5z() {
    if (!properties_initialized_ComposeResource_common_kt_eelrej) {
      properties_initialized_ComposeResource_common_kt_eelrej = true;
      emptyImageBitmap$delegate = lazy(emptyImageBitmap$delegate$lambda);
      emptyImageVector$delegate = lazy(emptyImageVector$delegate$lambda);
    }
  }
  function Loading() {
    LoadState.call(this);
    this.pgd_1 = 0;
  }
  function Success(value) {
    LoadState.call(this);
    this.mgc_1 = value;
    this.ngc_1 = 0;
  }
  protoOf(Success).toString = function () {
    return 'Success(value=' + this.mgc_1 + ')';
  };
  protoOf(Success).hashCode = function () {
    return this.mgc_1 == null ? 0 : hashCode(this.mgc_1);
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.mgc_1, tmp0_other_with_cast.mgc_1))
      return false;
    return true;
  };
  function Error_0(exception) {
    LoadState.call(this);
    this.rgd_1 = exception;
    this.sgd_1 = 0;
  }
  protoOf(Error_0).toString = function () {
    return 'Error(exception=' + this.rgd_1 + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return hashCode(this.rgd_1);
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!equals(this.rgd_1, tmp0_other_with_cast.rgd_1))
      return false;
    return true;
  };
  function LoadState() {
    this.tgd_1 = 0;
  }
  function AbstractResourceImpl(path) {
    this.ugd_1 = path;
  }
  protoOf(AbstractResourceImpl).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other instanceof AbstractResourceImpl) {
      tmp = this.ugd_1 === other.ugd_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AbstractResourceImpl).hashCode = function () {
    return getStringHashCode(this.ugd_1);
  };
  function parseDp(_this__u8e3s4, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (_this__u8e3s4 == null) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0.0);
    } else if (endsWith(_this__u8e3s4, 'dp')) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      // Inline function 'kotlin.text.toFloat' call
      var this_0 = removeSuffix(_this__u8e3s4, 'dp');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var this_1 = toDouble(this_0);
      tmp = _Dp___init__impl__ms3zkb(this_1);
    } else if (endsWith(_this__u8e3s4, 'px')) {
      // Inline function 'kotlin.text.toFloat' call
      var this_2 = removeSuffix(_this__u8e3s4, 'px');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = toDouble(this_2);
      tmp = density.q3b(tmp$ret$7);
    } else {
      throw UnsupportedOperationException_init_$Create$('value should ends with dp or px');
    }
    return tmp;
  }
  function parseFillType(fillType) {
    var tmp;
    switch (fillType) {
      case 'nonZero':
        tmp = Companion_getInstance_0().i4a_1;
        break;
      case 'evenOdd':
        tmp = Companion_getInstance_0().j4a_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown fillType: ' + fillType);
    }
    return tmp;
  }
  function parseStrokeCap(strokeCap) {
    var tmp;
    switch (strokeCap) {
      case 'butt':
        tmp = Companion_getInstance_1().v4a_1;
        break;
      case 'round':
        tmp = Companion_getInstance_1().w4a_1;
        break;
      case 'square':
        tmp = Companion_getInstance_1().x4a_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeCap: ' + strokeCap);
    }
    return tmp;
  }
  function parseStrokeJoin(strokeJoin) {
    var tmp;
    switch (strokeJoin) {
      case 'miter':
        tmp = Companion_getInstance_2().z4a_1;
        break;
      case 'round':
        tmp = Companion_getInstance_2().a4b_1;
        break;
      case 'bevel':
        tmp = Companion_getInstance_2().b4b_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeJoin: ' + strokeJoin);
    }
    return tmp;
  }
  function parseColorValue(color) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!startsWith(color, '#')) {
      // Inline function 'org.jetbrains.compose.resources.vector.parseColorValue.<anonymous>' call
      var message = 'Invalid color value ' + color;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (color.length) {
      case 7:
        // Inline function 'kotlin.UInt.toInt' call

        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$2 = color.substring(1);
        var this_0 = toUInt(tmp$ret$2, 16);
        tmp = _UInt___get_data__impl__f0vqqw(this_0) | -16777216;
        break;
      case 9:
        // Inline function 'kotlin.UInt.toInt' call

        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$5 = color.substring(1);
        var this_1 = toUInt(tmp$ret$5, 16);
        tmp = _UInt___get_data__impl__f0vqqw(this_1);
        break;
      case 4:
        // Inline function 'kotlin.UInt.toInt' call

        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$8 = color.substring(1);
        var this_2 = toUInt(tmp$ret$8, 16);
        var v = _UInt___get_data__impl__f0vqqw(this_2);
        var k = imul(v >> 8 & 15, 1114112);
        k = k | imul(v >> 4 & 15, 4352);
        k = k | imul(v & 15, 17);
        tmp = k | -16777216;
        break;
      case 5:
        // Inline function 'kotlin.UInt.toInt' call

        // Inline function 'kotlin.text.substring' call

        // Inline function 'kotlin.js.asDynamic' call

        var tmp$ret$11 = color.substring(1);
        var this_3 = toUInt(tmp$ret$11, 16);
        var v_0 = _UInt___get_data__impl__f0vqqw(this_3);
        var k_0 = imul(v_0 >> 12 & 15, 285212672);
        k_0 = k_0 | imul(v_0 >> 8 & 15, 1114112);
        k_0 = k_0 | imul(v_0 >> 4 & 15, 4352);
        k_0 = k_0 | imul(v_0 & 15, 17);
        tmp = k_0 | -16777216;
        break;
      default:
        tmp = -16777216;
        break;
    }
    return tmp;
  }
  function parseTileMode(tileMode) {
    var tmp;
    switch (tileMode) {
      case 'clamp':
        tmp = Companion_getInstance_3().r42_1;
        break;
      case 'repeated':
        tmp = Companion_getInstance_3().s42_1;
        break;
      case 'mirror':
        tmp = Companion_getInstance_3().t42_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown tileMode: ' + tileMode);
    }
    return tmp;
  }
  function parseVectorRoot(_this__u8e3s4, density) {
    var context = new BuildContext();
    var tmp = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'width'), density);
    var tmp_0 = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'height'), density);
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportWidth');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportHeight');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var builder = new Builder(VOID, tmp, tmp_0, tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    parseVectorNodes(_this__u8e3s4, builder, context);
    return builder.v24();
  }
  var Group_Real_instance;
  var Group_Virtual_instance;
  var Group_entriesInitialized;
  function Group_initEntries() {
    if (Group_entriesInitialized)
      return Unit_instance;
    Group_entriesInitialized = true;
    Group_Real_instance = new Group('Real', 0);
    Group_Virtual_instance = new Group('Virtual', 1);
  }
  function Group(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Group_Real_getInstance() {
    Group_initEntries();
    return Group_Real_instance;
  }
  function Group_Virtual_getInstance() {
    Group_initEntries();
    return Group_Virtual_instance;
  }
  function BuildContext() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.vgd_1 = ArrayList_init_$Create$();
  }
  function attributeOrNull(_this__u8e3s4, namespace, name) {
    var value = _this__u8e3s4.wgd(namespace, name);
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp = value;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function parseVectorNodes(_this__u8e3s4, builder, context) {
    // Inline function 'kotlin.sequences.forEach' call
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseVectorNodes$lambda);
    var tmp0_iterator = (isInterface(tmp, Sequence) ? tmp : THROW_CCE()).v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'org.jetbrains.compose.resources.vector.parseVectorNodes.<anonymous>' call
      parseVectorNode(element, builder, context);
    }
  }
  function parseVectorNode(_this__u8e3s4, builder, context) {
    switch (_this__u8e3s4.xgd()) {
      case 'path':
        parsePath(_this__u8e3s4, builder);
        break;
      case 'clip-path':
        parseClipPath(_this__u8e3s4, builder, context);
        break;
      case 'group':
        parseGroup(_this__u8e3s4, builder, context);
        break;
    }
  }
  function get_childrenSequence(_this__u8e3s4) {
    return sequence(_get_childrenSequence_$slambda_9jpw3j_0(_this__u8e3s4, null));
  }
  function parsePath(_this__u8e3s4, builder) {
    var tmp = addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData'));
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillType');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_0 = parseFillType(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    var tmp_2 = tmp1_elvis_lhs;
    if ((tmp_2 == null ? null : new PathFillType(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_0().i4a_1;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_1;
    var tmp2_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
    var tmp_5;
    if (tmp3_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_5 = parseStringBrush(tmp3_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    var tmp_6;
    if (tmp5_elvis_lhs == null) {
      var tmp4_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_7 = parseElementBrush(tmp4_safe_receiver);
      }
      tmp_6 = tmp_7;
    } else {
      tmp_6 = tmp5_elvis_lhs;
    }
    var tmp_8 = tmp_6;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillAlpha');
    var tmp_9;
    if (tmp6_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_9 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_9;
    var tmp_10 = tmp7_elvis_lhs == null ? 1.0 : tmp7_elvis_lhs;
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
    var tmp_11;
    if (tmp8_safe_receiver == null) {
      tmp_11 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_11 = parseStringBrush(tmp8_safe_receiver);
    }
    var tmp10_elvis_lhs = tmp_11;
    var tmp_12;
    if (tmp10_elvis_lhs == null) {
      var tmp9_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
      var tmp_13;
      if (tmp9_safe_receiver == null) {
        tmp_13 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_13 = parseElementBrush(tmp9_safe_receiver);
      }
      tmp_12 = tmp_13;
    } else {
      tmp_12 = tmp10_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeAlpha');
    var tmp_15;
    if (tmp11_safe_receiver == null) {
      tmp_15 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_15 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_15;
    var tmp_16 = tmp12_elvis_lhs == null ? 1.0 : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeWidth');
    var tmp_17;
    if (tmp13_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_17 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_17;
    var tmp_18 = tmp14_elvis_lhs == null ? 1.0 : tmp14_elvis_lhs;
    var tmp15_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineCap');
    var tmp_19;
    if (tmp15_safe_receiver == null) {
      tmp_19 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_19 = parseStrokeCap(tmp15_safe_receiver);
    }
    var tmp16_elvis_lhs = tmp_19;
    var tmp_20;
    var tmp_21 = tmp16_elvis_lhs;
    if ((tmp_21 == null ? null : new StrokeCap(tmp_21)) == null) {
      tmp_20 = Companion_getInstance_1().v4a_1;
    } else {
      tmp_20 = tmp16_elvis_lhs;
    }
    var tmp_22 = tmp_20;
    var tmp17_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineJoin');
    var tmp_23;
    if (tmp17_safe_receiver == null) {
      tmp_23 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_23 = parseStrokeJoin(tmp17_safe_receiver);
    }
    var tmp18_elvis_lhs = tmp_23;
    var tmp_24;
    var tmp_25 = tmp18_elvis_lhs;
    if ((tmp_25 == null ? null : new StrokeJoin(tmp_25)) == null) {
      tmp_24 = Companion_getInstance_2().z4a_1;
    } else {
      tmp_24 = tmp18_elvis_lhs;
    }
    var tmp_26 = tmp_24;
    var tmp19_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeMiterLimit');
    var tmp_27;
    if (tmp19_safe_receiver == null) {
      tmp_27 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_27 = toDouble(tmp19_safe_receiver);
    }
    var tmp20_elvis_lhs = tmp_27;
    var tmp_28 = tmp20_elvis_lhs == null ? 1.0 : tmp20_elvis_lhs;
    var tmp21_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathStart');
    var tmp_29;
    if (tmp21_safe_receiver == null) {
      tmp_29 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_29 = toDouble(tmp21_safe_receiver);
    }
    var tmp22_elvis_lhs = tmp_29;
    var tmp_30 = tmp22_elvis_lhs == null ? 0.0 : tmp22_elvis_lhs;
    var tmp23_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathEnd');
    var tmp_31;
    if (tmp23_safe_receiver == null) {
      tmp_31 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_31 = toDouble(tmp23_safe_receiver);
    }
    var tmp24_elvis_lhs = tmp_31;
    var tmp_32 = tmp24_elvis_lhs == null ? 1.0 : tmp24_elvis_lhs;
    var tmp25_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathOffset');
    var tmp_33;
    if (tmp25_safe_receiver == null) {
      tmp_33 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_33 = toDouble(tmp25_safe_receiver);
    }
    var tmp26_elvis_lhs = tmp_33;
    builder.t66(tmp, tmp_3, tmp_4, tmp_8, tmp_10, tmp_14, tmp_16, tmp_18, tmp_22, tmp_26, tmp_28, tmp_30, tmp_32, tmp26_elvis_lhs == null ? 0.0 : tmp26_elvis_lhs);
  }
  function parseClipPath(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    builder.r66(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, VOID, VOID, VOID, VOID, VOID, VOID, VOID, addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData')));
    context.vgd_1.s(Group_Virtual_getInstance());
  }
  function parseGroup(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'rotation');
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = toDouble(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_1 = tmp2_elvis_lhs == null ? get_DefaultRotation() : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotX');
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_2;
    var tmp_3 = tmp4_elvis_lhs == null ? get_DefaultPivotX() : tmp4_elvis_lhs;
    var tmp5_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotY');
    var tmp_4;
    if (tmp5_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = toDouble(tmp5_safe_receiver);
    }
    var tmp6_elvis_lhs = tmp_4;
    var tmp_5 = tmp6_elvis_lhs == null ? get_DefaultPivotY() : tmp6_elvis_lhs;
    var tmp7_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleX');
    var tmp_6;
    if (tmp7_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_6 = toDouble(tmp7_safe_receiver);
    }
    var tmp8_elvis_lhs = tmp_6;
    var tmp_7 = tmp8_elvis_lhs == null ? get_DefaultScaleX() : tmp8_elvis_lhs;
    var tmp9_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleY');
    var tmp_8;
    if (tmp9_safe_receiver == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_8 = toDouble(tmp9_safe_receiver);
    }
    var tmp10_elvis_lhs = tmp_8;
    var tmp_9 = tmp10_elvis_lhs == null ? get_DefaultScaleY() : tmp10_elvis_lhs;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateX');
    var tmp_10;
    if (tmp11_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_10 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_10;
    var tmp_11 = tmp12_elvis_lhs == null ? get_DefaultTranslationX() : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateY');
    var tmp_12;
    if (tmp13_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_12 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_12;
    builder.q66(tmp, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp14_elvis_lhs == null ? get_DefaultTranslationY() : tmp14_elvis_lhs, get_EmptyPath());
    context.vgd_1.s(Group_Real_getInstance());
    parseVectorNodes(_this__u8e3s4, builder, context);
    do {
      var removedGroup = removeLastOrNull(context.vgd_1);
      builder.s66();
    }
     while (equals(removedGroup, Group_Virtual_getInstance()));
  }
  function parseStringBrush(str) {
    return new SolidColor(Color(parseColorValue(str)));
  }
  function apptAttr(_this__u8e3s4, namespace, name) {
    var prefix = _this__u8e3s4.ygd(namespace);
    // Inline function 'kotlin.sequences.find' call
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, apptAttr$lambda);
    var this_1 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = this_1.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'org.jetbrains.compose.resources.vector.apptAttr.<anonymous>' call
        if ((element.bge() === 'http://schemas.android.com/aapt' ? element.age() === 'attr' : false) ? element.zgd('name') === prefix + ':' + name : false) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    return tmp$ret$2;
  }
  function parseElementBrush(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.find' call
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseElementBrush$lambda);
    var this_1 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = this_1.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'org.jetbrains.compose.resources.vector.parseElementBrush.<anonymous>' call
        if (element.xgd() === 'gradient') {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    return tmp0_safe_receiver == null ? null : parseGradient(tmp0_safe_receiver);
  }
  function parseGradient(_this__u8e3s4) {
    switch (attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'type')) {
      case 'linear':
        return parseLinearGradient(_this__u8e3s4);
      case 'radial':
        return parseRadialGradient(_this__u8e3s4);
      case 'sweep':
        return parseSweepGradient(_this__u8e3s4);
      default:
        return null;
    }
  }
  function parseLinearGradient(_this__u8e3s4) {
    var tmp = Companion_instance;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startY');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var tmp_4 = Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endX');
    var tmp_5;
    if (tmp4_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_5 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    var tmp_6 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endY');
    var tmp_7;
    if (tmp6_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_7 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_7;
    var tmp_8 = Offset(tmp_6, tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs);
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_9;
    if (tmp8_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_9 = parseTileMode(tmp8_safe_receiver);
    }
    var tmp9_elvis_lhs = tmp_9;
    var tmp_10;
    var tmp_11 = tmp9_elvis_lhs;
    if ((tmp_11 == null ? null : new TileMode(tmp_11)) == null) {
      tmp_10 = Companion_getInstance_3().r42_1;
    } else {
      tmp_10 = tmp9_elvis_lhs;
    }
    return tmp.o41(tmp_0, tmp_4, tmp_8, tmp_10);
  }
  function parseRadialGradient(_this__u8e3s4) {
    var tmp = Companion_instance;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var tmp_4 = Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'gradientRadius');
    var tmp_5;
    if (tmp4_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_5 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    var tmp_6 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_7;
    if (tmp6_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_7 = parseTileMode(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_7;
    var tmp_8;
    var tmp_9 = tmp7_elvis_lhs;
    if ((tmp_9 == null ? null : new TileMode(tmp_9)) == null) {
      tmp_8 = Companion_getInstance_3().r42_1;
    } else {
      tmp_8 = tmp7_elvis_lhs;
    }
    return tmp.q41(tmp_0, tmp_4, tmp_6, tmp_8);
  }
  function parseSweepGradient(_this__u8e3s4) {
    var tmp = Companion_instance;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    return tmp.r41(tmp_0, Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs));
  }
  function parseColorStops(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseColorStops$lambda);
    var tmp_0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var items = toList(filter(tmp_0, parseColorStops$lambda_0));
    // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = items.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      // Inline function 'org.jetbrains.compose.resources.vector.parseColorStops.<anonymous>' call
      var index_0 = checkIndexOverflow(tmp1);
      var tmp0_safe_receiver = parseColorStop(item, index_0 / coerceAtLeast(get_lastIndex(items), 1));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.s(tmp0_safe_receiver);
      }
    }
    var colorStops = destination;
    if (colorStops.e1()) {
      var tmp0_safe_receiver_0 = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startColor');
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_1 = parseColorValue(tmp0_safe_receiver_0);
      }
      var startColor = tmp_1;
      var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerColor');
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_2 = parseColorValue(tmp1_safe_receiver);
      }
      var centerColor = tmp_2;
      var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endColor');
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp_3 = parseColorValue(tmp2_safe_receiver);
      }
      var endColor = tmp_3;
      if (!(startColor == null)) {
        colorStops.s(to(0.0, new Color_0(Color(startColor))));
      }
      if (!(centerColor == null)) {
        colorStops.s(to(0.5, new Color_0(Color(centerColor))));
      }
      if (!(endColor == null)) {
        colorStops.s(to(1.0, new Color_0(Color(endColor))));
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(colorStops);
  }
  function parseColorStop(_this__u8e3s4, defaultOffset) {
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'offset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var offset = tmp1_elvis_lhs == null ? defaultOffset : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'color');
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp_0 = parseColorValue(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var color = tmp_1;
    return to(offset, new Color_0(Color(color)));
  }
  function parseVectorNodes$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation) {
    this.kge_1 = $this_childrenSequence;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_childrenSequence_$slambda_9jpw3j).oge = function ($this$sequence, $completion) {
    var tmp = this.pge($this$sequence, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).fc = function (p1, $completion) {
    return this.oge(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            this.mge_1 = until(0, this.kge_1.qge().a()).v();
            this.hb_1 = 1;
            continue $sm;
          case 1:
            if (!this.mge_1.w()) {
              this.hb_1 = 3;
              continue $sm;
            }

            this.nge_1 = this.mge_1.y();
            this.hb_1 = 2;
            suspendResult = this.lge_1.fe(this.kge_1.qge().rge(this.nge_1), this);
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
  protoOf(_get_childrenSequence_$slambda_9jpw3j).pge = function ($this$sequence, completion) {
    var i = new _get_childrenSequence_$slambda_9jpw3j(this.kge_1, completion);
    i.lge_1 = $this$sequence;
    return i;
  };
  function _get_childrenSequence_$slambda_9jpw3j_0($this_childrenSequence, resultContinuation) {
    var i = new _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.oge($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function apptAttr$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseElementBrush$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseColorStops$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseColorStops$lambda_0(it) {
    return it.xgd() === 'item';
  }
  function Element_0() {
  }
  function MalformedXMLException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedXMLException);
    this.sge_1 = 0;
  }
  function isSyncResourceLoadingSupported() {
    return false;
  }
  function resource(path) {
    return WebResourcesConfiguration_getInstance().tge_1(path);
  }
  function readBytesSync(_this__u8e3s4) {
    throw UnsupportedOperationException_init_$Create$_0();
  }
  function parseXML(byteArray) {
    var xmlString = decodeToString(byteArray);
    var xmlDom = (new DOMParser()).parseFromString(xmlString, 'application/xml');
    var tmp0_elvis_lhs = xmlDom.documentElement;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MalformedXMLException('missing documentElement');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var domElement = tmp;
    return new ElementImpl(domElement);
  }
  function WebResourcesConfiguration$jsResourceImplFactory$lambda(it) {
    return urlResource('./' + it);
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.tge_1 = WebResourcesConfiguration$jsResourceImplFactory$lambda;
    this.uge_1 = 8;
  }
  var WebResourcesConfiguration_instance;
  function WebResourcesConfiguration_getInstance() {
    if (WebResourcesConfiguration_instance == null)
      new WebResourcesConfiguration();
    return WebResourcesConfiguration_instance;
  }
  function urlResource(url) {
    return new JSUrlResourceImpl(url);
  }
  function $readBytesCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dgf_1 = _this__u8e3s4;
  }
  protoOf($readBytesCOROUTINE$0).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.hb_1 = 1;
            suspendResult = await_0(window.fetch(this.dgf_1.ugd_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.egf_1 = suspendResult;
            if (!this.egf_1.ok) {
              throw new MissingResourceException(this.dgf_1.ugd_1);
            }

            this.hb_1 = 2;
            suspendResult = await_0(this.egf_1.arrayBuffer(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return toByteArray(ARGUMENT);
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
  function JSUrlResourceImpl(url) {
    AbstractResourceImpl.call(this, url);
  }
  protoOf(JSUrlResourceImpl).agd = function ($completion) {
    var tmp = new $readBytesCOROUTINE$0(this, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function MissingResourceException(path) {
    Exception_init_$Init$('Missing resource with path: ' + path, this);
    captureStack(this, MissingResourceException);
  }
  function toByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4, 0, _this__u8e3s4.byteLength);
  }
  function ElementImpl(element) {
    NodeImpl.call(this, element);
    this.kgf_1 = element;
  }
  protoOf(ElementImpl).age = function () {
    return this.kgf_1.localName;
  };
  protoOf(ElementImpl).bge = function () {
    var tmp0_elvis_lhs = this.kgf_1.namespaceURI;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).wgd = function (nameSpaceURI, localName) {
    var tmp0_elvis_lhs = this.kgf_1.getAttributeNS(nameSpaceURI, localName);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).zgd = function (name) {
    var tmp0_elvis_lhs = this.kgf_1.getAttribute(name);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  function NodeImpl$childNodes$2$1(this$0) {
    this.qgf_1 = this$0;
    this.pgf_1 = this$0.lgf_1.childNodes.length;
  }
  protoOf(NodeImpl$childNodes$2$1).rge = function (i) {
    var tmp0_elvis_lhs = this.qgf_1.lgf_1.childNodes.item(i);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$('no child node accessible at index=' + i);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var child = tmp;
    var tmp_0;
    if (child instanceof Element) {
      tmp_0 = new ElementImpl(child);
    } else {
      tmp_0 = new NodeImpl(child);
    }
    return tmp_0;
  };
  protoOf(NodeImpl$childNodes$2$1).a = function () {
    return this.pgf_1;
  };
  function NodeImpl$childNodes$delegate$lambda(this$0) {
    return function () {
      return new NodeImpl$childNodes$2$1(this$0);
    };
  }
  function NodeImpl(n) {
    this.lgf_1 = n;
    this.mgf_1 = '';
    this.ngf_1 = '';
    var tmp = this;
    tmp.ogf_1 = lazy(NodeImpl$childNodes$delegate$lambda(this));
  }
  protoOf(NodeImpl).xgd = function () {
    return this.lgf_1.nodeName;
  };
  protoOf(NodeImpl).qge = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ogf_1;
    childNodes$factory();
    return this_0.u2();
  };
  protoOf(NodeImpl).ygd = function (namespaceURI) {
    var tmp0_elvis_lhs = this.lgf_1.lookupPrefix(namespaceURI);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  function childNodes$factory() {
    return getPropertyCallableRef('childNodes', 1, KProperty1, function (receiver) {
      return receiver.qge();
    }, null);
  }
  function toImageBitmap(_this__u8e3s4) {
    return toComposeImageBitmap(Companion_getInstance_4().h3l(_this__u8e3s4));
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = painterResource$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=components-library.js.map
