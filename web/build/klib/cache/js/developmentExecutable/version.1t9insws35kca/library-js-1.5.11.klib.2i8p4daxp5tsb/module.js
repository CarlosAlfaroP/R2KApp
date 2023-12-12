(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-unit.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-geometry.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'components-library'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'components-library'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'components-library'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-library'.");
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
    root['components-library'] = factory(typeof this['components-library'] === 'undefined' ? {} : this['components-library'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-unit'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-geometry'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.x5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var rememberVectorPainter$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var endsWith = kotlin_kotlin.$_$.vf;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var THROW_CCE = kotlin_kotlin.$_$.qh;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var LaunchedEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ri;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var VOID = kotlin_kotlin.$_$.e;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var CoroutineImpl = kotlin_kotlin.$_$.ob;
  var Unit_getInstance = kotlin_kotlin.$_$.b5;
  var protoOf = kotlin_kotlin.$_$.ud;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.fd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ya;
  var Exception = kotlin_kotlin.$_$.gh;
  var classMeta = kotlin_kotlin.$_$.hc;
  var setMetadataFor = kotlin_kotlin.$_$.vd;
  var KProperty0 = kotlin_kotlin.$_$.cf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sc;
  var lazy = kotlin_kotlin.$_$.qi;
  var SuspendFunction1 = kotlin_kotlin.$_$.qb;
  var Annotation = kotlin_kotlin.$_$.yg;
  var hashCode = kotlin_kotlin.$_$.uc;
  var equals = kotlin_kotlin.$_$.lc;
  var interfaceMeta = kotlin_kotlin.$_$.wc;
  var getStringHashCode = kotlin_kotlin.$_$.tc;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.n2;
  var removeSuffix = kotlin_kotlin.$_$.eg;
  var toDouble = kotlin_kotlin.$_$.mg;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e4;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h4;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i4;
  var startsWith = kotlin_kotlin.$_$.jg;
  var toString = kotlin_kotlin.$_$.zd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var toUInt = kotlin_kotlin.$_$.sg;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.k3;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j4;
  var THROW_IAE = kotlin_kotlin.$_$.rh;
  var Enum = kotlin_kotlin.$_$.eh;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var isBlank = kotlin_kotlin.$_$.xf;
  var filter = kotlin_kotlin.$_$.kf;
  var Sequence = kotlin_kotlin.$_$.if;
  var sequence = kotlin_kotlin.$_$.of;
  var addPathNodes = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var PathFillType = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z;
  var StrokeCap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var StrokeJoin = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i1;
  var get_DefaultRotation = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var get_DefaultPivotX = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var get_DefaultPivotY = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var get_DefaultScaleX = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var get_DefaultScaleY = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var get_DefaultTranslationX = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var get_DefaultTranslationY = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var get_EmptyPath = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var removeLastOrNull = kotlin_kotlin.$_$.r9;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y3;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var TileMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var toList = kotlin_kotlin.$_$.pf;
  var checkIndexOverflow = kotlin_kotlin.$_$.p6;
  var get_lastIndex = kotlin_kotlin.$_$.s8;
  var coerceAtLeast = kotlin_kotlin.$_$.me;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var to = kotlin_kotlin.$_$.dj;
  var copyToArray = kotlin_kotlin.$_$.n7;
  var SequenceScope = kotlin_kotlin.$_$.hf;
  var until = kotlin_kotlin.$_$.ye;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.p1;
  var captureStack = kotlin_kotlin.$_$.bc;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.m2;
  var decodeToString = kotlin_kotlin.$_$.uf;
  var objectMeta = kotlin_kotlin.$_$.td;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var KProperty1 = kotlin_kotlin.$_$.df;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.a8;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(rememberImageBitmap$composable$slambda, 'rememberImageBitmap$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(rememberImageVector$composable$slambda, 'rememberImageVector$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ExperimentalResourceApi, 'ExperimentalResourceApi', classMeta, VOID, [Annotation]);
  setMetadataFor(LoadState, 'LoadState', classMeta);
  setMetadataFor(Loading, 'Loading', classMeta, LoadState, VOID, Loading);
  setMetadataFor(Success, 'Success', classMeta, LoadState);
  setMetadataFor(Error_0, 'Error', classMeta, LoadState);
  setMetadataFor(Resource, 'Resource', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(AbstractResourceImpl, 'AbstractResourceImpl', classMeta, VOID, [Resource], VOID, VOID, VOID, [0]);
  setMetadataFor(Group, 'Group', classMeta, Enum);
  setMetadataFor(BuildContext, 'BuildContext', classMeta, VOID, VOID, BuildContext);
  setMetadataFor(_get_childrenSequence_$slambda_9jpw3j, '<get-childrenSequence>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Node, 'Node', interfaceMeta);
  setMetadataFor(Element_0, 'Element', interfaceMeta, VOID, [Node]);
  setMetadataFor(MalformedXMLException, 'MalformedXMLException', classMeta, Exception);
  setMetadataFor(NodeList, 'NodeList', interfaceMeta);
  setMetadataFor(WebResourcesConfiguration, 'WebResourcesConfiguration', objectMeta);
  setMetadataFor($readBytesCOROUTINE$0, '$readBytesCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JSUrlResourceImpl, 'JSUrlResourceImpl', classMeta, AbstractResourceImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(MissingResourceException, 'MissingResourceException', classMeta, Exception);
  setMetadataFor(NodeImpl, 'NodeImpl', classMeta, VOID, [Node]);
  setMetadataFor(ElementImpl, 'ElementImpl', classMeta, NodeImpl, [NodeImpl, Element_0]);
  setMetadataFor(NodeImpl$childNodes$2$1, VOID, classMeta, VOID, [NodeList]);
  //endregion
  function get_emptyImageBitmap() {
    _init_properties_ComposeResource_common_kt__692f5z();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageBitmap$delegate;
    emptyImageBitmap$factory();
    return this_0.get_value_j01efc_k$();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ComposeResource_common_kt__692f5z();
    // Inline function 'kotlin.getValue' call
    var this_0 = emptyImageVector$delegate;
    emptyImageVector$factory();
    return this_0.get_value_j01efc_k$();
  }
  var emptyImageVector$delegate;
  function painterResource$composable(res, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-2119472146);
    sourceInformation($composer_0, 'C(painterResource$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-2119472146, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable (ComposeResource.common.kt:117)');
    }
    var tmp;
    if (isSyncResourceLoadingSupported()) {
      $composer_0.startReplaceableGroup_ip860b_k$(180607650);
      var tmp_0 = painterResource$composable$lambda;
      var tmp1_group = painterResource$composable_0(res, tmp_0, painterResource$composable$lambda_0, $composer_0, 14 & $changed);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp1_group;
    } else {
      $composer_0.startReplaceableGroup_ip860b_k$(180607766);
      var tmp_1 = painterResource$composable$lambda_1;
      var tmp2_group = painterResource$composable_0(res, tmp_1, painterResource$composable$lambda_2, $composer_0, 14 & $changed);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp2_group;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function painterResource$composable_0(res, rememberImageBitmap, rememberImageVector, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(721382759);
    if (isTraceInProgress()) {
      traceEventStart(721382759, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable (ComposeResource.common.kt:93)');
    }
    var tmp;
    if (endsWith(res, '.xml')) {
      $composer_0.startReplaceableGroup_ip860b_k$(180606871);
      var tmp_0 = resource(res);
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalDensity();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
      sourceInformationMarkerEnd($composer_1);
      var tmp1_group = rememberVectorPainter$composable(rememberImageVector(tmp_0, tmp0, $composer_0, 896 & $changed), $composer_0, 0);
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp1_group;
    } else {
      $composer_0.startReplaceableGroup_ip860b_k$(180606971);
      var tmp2_group = new BitmapPainter(rememberImageBitmap(resource(res), $composer_0, 112 & $changed));
      $composer_0.endReplaceableGroup_ern0ak_k$();
      tmp = tmp2_group;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  }
  function rememberImageBitmapSync$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(68255616);
    if (isTraceInProgress()) {
      traceEventStart(68255616, $changed, -1, 'org.jetbrains.compose.resources.rememberImageBitmapSync$composable (ComposeResource.common.kt:80)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.resources.rememberImageBitmapSync$composable.<anonymous>' call
      var value = toImageBitmap(readBytesSync(_this__u8e3s4));
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function rememberImageVectorSync$composable(_this__u8e3s4, density, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(-1029554264);
    if (isTraceInProgress()) {
      traceEventStart(-1029554264, $changed, -1, 'org.jetbrains.compose.resources.rememberImageVectorSync$composable (ComposeResource.common.kt:86)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.changed_ga7h3f_k$(_this__u8e3s4) | $composer_1.changed_ga7h3f_k$(density));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.resources.rememberImageVectorSync$composable.<anonymous>' call
      var value = toImageVector(readBytesSync(_this__u8e3s4), density);
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function orEmpty(_this__u8e3s4) {
    _init_properties_ComposeResource_common_kt__692f5z();
    return orEmpty_1(_this__u8e3s4, get_emptyImageBitmap());
  }
  function rememberImageBitmap$composable(_this__u8e3s4, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1540248957);
    sourceInformation($composer_0, 'C(rememberImageBitmap$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1540248957, $changed, -1, 'org.jetbrains.compose.resources.rememberImageBitmap$composable (ComposeResource.common.kt:30)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.changed_ga7h3f_k$(_this__u8e3s4);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.resources.rememberImageBitmap$composable.<anonymous>' call
      var value = mutableStateOf(new Loading());
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    var state = tmp0;
    LaunchedEffect$composable(_this__u8e3s4, rememberImageBitmap$composable$slambda_0(state, _this__u8e3s4, null), $composer_0, 14 & $changed);
    var tmp0_0 = state.get_value_j01efc_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0_0;
  }
  function orEmpty_0(_this__u8e3s4) {
    _init_properties_ComposeResource_common_kt__692f5z();
    return orEmpty_1(_this__u8e3s4, get_emptyImageVector());
  }
  function rememberImageVector$composable(_this__u8e3s4, density, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(741159083);
    sourceInformation($composer_0, 'C(rememberImageVector$composable)');
    if (isTraceInProgress()) {
      traceEventStart(741159083, $changed, -1, 'org.jetbrains.compose.resources.rememberImageVector$composable (ComposeResource.common.kt:47)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_ip860b_k$(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.changed_ga7h3f_k$(_this__u8e3s4) | $composer_1.changed_ga7h3f_k$(density));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid ? true : it === Companion_getInstance().get_Empty_i9b85g_k$()) {
      // Inline function 'org.jetbrains.compose.resources.rememberImageVector$composable.<anonymous>' call
      var value = mutableStateOf(new Loading());
      $composer_1.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_ern0ak_k$();
    var state = tmp0;
    LaunchedEffect$composable_0(_this__u8e3s4, density, rememberImageVector$composable$slambda_0(state, _this__u8e3s4, density, null), $composer_0, 14 & $changed | 112 & $changed);
    var tmp0_0 = state.get_value_j01efc_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
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
        tmp = _this__u8e3s4.get_value_j01efc_k$();
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
    return (new Builder(VOID, tmp, tmp$ret$1, 1.0, 1.0)).build_1k0s4u_k$();
  }
  function painterResource$composable$lambda($this$painterResource, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1313644271);
    if (isTraceInProgress()) {
      traceEventStart(1313644271, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable.<anonymous> (ComposeResource.common.kt:119)');
    }
    var tmp0 = rememberImageBitmapSync$composable($this$painterResource, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function painterResource$composable$lambda_0($this$painterResource, density, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1595580880);
    if (isTraceInProgress()) {
      traceEventStart(1595580880, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable.<anonymous> (ComposeResource.common.kt:119)');
    }
    var tmp0 = rememberImageVectorSync$composable($this$painterResource, density, $composer_0, 14 & $changed | 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function painterResource$composable$lambda_1($this$painterResource, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1252106488);
    if (isTraceInProgress()) {
      traceEventStart(1252106488, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable.<anonymous> (ComposeResource.common.kt:121)');
    }
    var tmp0 = orEmpty(rememberImageBitmap$composable($this$painterResource, $composer_0, 14 & $changed));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function painterResource$composable$lambda_2($this$painterResource, density, $composer, $changed) {
    _init_properties_ComposeResource_common_kt__692f5z();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_ip860b_k$(1864689689);
    if (isTraceInProgress()) {
      traceEventStart(1864689689, $changed, -1, 'org.jetbrains.compose.resources.painterResource$composable.<anonymous> (ComposeResource.common.kt:121)');
    }
    var tmp0 = orEmpty_0(rememberImageVector$composable($this$painterResource, density, $composer_0, 14 & $changed | 112 & $changed));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_ern0ak_k$();
    return tmp0;
  }
  function rememberImageBitmap$composable$slambda($state, $this_rememberImageBitmap$composable, resultContinuation) {
    this.$state_1 = $state;
    this.$this_rememberImageBitmap$composable_1 = $this_rememberImageBitmap$composable;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberImageBitmap$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberImageBitmap$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberImageBitmap$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$this_rememberImageBitmap$composable_1.readBytes_d7rp36_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = toImageBitmap(ARGUMENT);
            this.TRY_RESULT0__1 = new Success(ARGUMENT_0);
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              tmp_1.TRY_RESULT0__1 = new Error_0(e);
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            this.set_exceptionState_fex74n_k$(4);
            var ARGUMENT_1 = this.TRY_RESULT0__1;
            this.$state_1.set_value_v1vabv_k$(ARGUMENT_1);
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(rememberImageBitmap$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new rememberImageBitmap$composable$slambda(this.$state_1, this.$this_rememberImageBitmap$composable_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(rememberImageBitmap$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberImageBitmap$composable$slambda_0($state, $this_rememberImageBitmap$composable, resultContinuation) {
    var i = new rememberImageBitmap$composable$slambda($state, $this_rememberImageBitmap$composable, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function rememberImageVector$composable$slambda($state, $this_rememberImageVector$composable, $density, resultContinuation) {
    this.$state_1 = $state;
    this.$this_rememberImageVector$composable_1 = $this_rememberImageVector$composable;
    this.$density_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberImageVector$composable$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberImageVector$composable$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberImageVector$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$this_rememberImageVector$composable_1.readBytes_d7rp36_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = toImageVector(ARGUMENT, this.$density_1);
            this.TRY_RESULT0__1 = new Success(ARGUMENT_0);
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              tmp_1.TRY_RESULT0__1 = new Error_0(e);
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            this.set_exceptionState_fex74n_k$(4);
            var ARGUMENT_1 = this.TRY_RESULT0__1;
            this.$state_1.set_value_v1vabv_k$(ARGUMENT_1);
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(rememberImageVector$composable$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new rememberImageVector$composable$slambda(this.$state_1, this.$this_rememberImageVector$composable_1, this.$density_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(rememberImageVector$composable$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberImageVector$composable$slambda_0($state, $this_rememberImageVector$composable, $density, resultContinuation) {
    var i = new rememberImageVector$composable$slambda($state, $this_rememberImageVector$composable, $density, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
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
  function ExperimentalResourceApi() {
  }
  protoOf(ExperimentalResourceApi).equals = function (other) {
    if (!(other instanceof ExperimentalResourceApi))
      return false;
    other instanceof ExperimentalResourceApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalResourceApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalResourceApi).toString = function () {
    return '@org.jetbrains.compose.resources.ExperimentalResourceApi()';
  };
  function get_$stableprop() {
    return 0;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function Loading() {
    LoadState.call(this);
    this.$stable_2 = 0;
  }
  function Success(value) {
    LoadState.call(this);
    this.value_1 = value;
    this.$stable_2 = 0;
  }
  protoOf(Success).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Success).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(Success).copy_62qimy_k$ = function (value) {
    return new Success(value);
  };
  protoOf(Success).copy$default_z9ttht_k$ = function (value, $super) {
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_62qimy_k$(value) : $super.copy_62qimy_k$.call(this, value);
  };
  protoOf(Success).toString = function () {
    return 'Success(value=' + this.value_1 + ')';
  };
  protoOf(Success).hashCode = function () {
    return this.value_1 == null ? 0 : hashCode(this.value_1);
  };
  protoOf(Success).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Success))
      return false;
    var tmp0_other_with_cast = other instanceof Success ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function Error_0(exception) {
    LoadState.call(this);
    this.exception_1 = exception;
    this.$stable_2 = 0;
  }
  protoOf(Error_0).get_exception_x0n6w6_k$ = function () {
    return this.exception_1;
  };
  protoOf(Error_0).component1_7eebsc_k$ = function () {
    return this.exception_1;
  };
  protoOf(Error_0).copy_d85agk_k$ = function (exception) {
    return new Error_0(exception);
  };
  protoOf(Error_0).copy$default_7uf0mm_k$ = function (exception, $super) {
    exception = exception === VOID ? this.exception_1 : exception;
    return $super === VOID ? this.copy_d85agk_k$(exception) : $super.copy_d85agk_k$.call(this, exception);
  };
  protoOf(Error_0).toString = function () {
    return 'Error(exception=' + this.exception_1 + ')';
  };
  protoOf(Error_0).hashCode = function () {
    return hashCode(this.exception_1);
  };
  protoOf(Error_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Error_0))
      return false;
    var tmp0_other_with_cast = other instanceof Error_0 ? other : THROW_CCE();
    if (!equals(this.exception_1, tmp0_other_with_cast.exception_1))
      return false;
    return true;
  };
  function get_$stableprop_2() {
    return 0;
  }
  function LoadState() {
    this.$stable_1 = 0;
  }
  function Resource() {
  }
  function AbstractResourceImpl(path) {
    this.path_1 = path;
  }
  protoOf(AbstractResourceImpl).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(AbstractResourceImpl).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other instanceof AbstractResourceImpl) {
      tmp = this.path_1 === other.path_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AbstractResourceImpl).hashCode = function () {
    return getStringHashCode(this.path_1);
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
      tmp = density.toDp_hs0w0_k$(tmp$ret$7);
    } else {
      throw UnsupportedOperationException_init_$Create$('value should ends with dp or px');
    }
    return tmp;
  }
  function parseFillType(fillType) {
    var tmp;
    switch (fillType) {
      case 'nonZero':
        tmp = Companion_getInstance_0().get_NonZero_dwy848_k$();
        break;
      case 'evenOdd':
        tmp = Companion_getInstance_0().get_EvenOdd_cpanrc_k$();
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
        tmp = Companion_getInstance_1().get_Butt_jb7qjw_k$();
        break;
      case 'round':
        tmp = Companion_getInstance_1().get_Round_hjra1h_k$();
        break;
      case 'square':
        tmp = Companion_getInstance_1().get_Square_dbwc3a_k$();
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
        tmp = Companion_getInstance_2().get_Miter_xkwqso_k$();
        break;
      case 'round':
        tmp = Companion_getInstance_2().get_Round_o8jjqp_k$();
        break;
      case 'bevel':
        tmp = Companion_getInstance_2().get_Bevel_8ab6n7_k$();
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
        tmp = Companion_getInstance_3().get_Clamp_ddetsd_k$();
        break;
      case 'repeated':
        tmp = Companion_getInstance_3().get_Repeated_jl00zi_k$();
        break;
      case 'mirror':
        tmp = Companion_getInstance_3().get_Mirror_rukh4t_k$();
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown tileMode: ' + tileMode);
    }
    return tmp;
  }
  function get_ALPHA_MASK() {
    return ALPHA_MASK;
  }
  var ALPHA_MASK;
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
    return builder.build_1k0s4u_k$();
  }
  var Group_Real_instance;
  var Group_Virtual_instance;
  function values() {
    return [Group_Real_getInstance(), Group_Virtual_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Real':
        return Group_Real_getInstance();
      case 'Virtual':
        return Group_Virtual_getInstance();
      default:
        Group_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Group_entriesInitialized;
  function Group_initEntries() {
    if (Group_entriesInitialized)
      return Unit_getInstance();
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
    tmp.currentGroups_1 = ArrayList_init_$Create$();
  }
  protoOf(BuildContext).get_currentGroups_u66glg_k$ = function () {
    return this.currentGroups_1;
  };
  function attributeOrNull(_this__u8e3s4, namespace, name) {
    var value = _this__u8e3s4.getAttributeNS_m2qmcr_k$(namespace, name);
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp = value;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function get_ANDROID_NS() {
    return ANDROID_NS;
  }
  var ANDROID_NS;
  function parseVectorNodes(_this__u8e3s4, builder, context) {
    // Inline function 'kotlin.sequences.forEach' call
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseVectorNodes$lambda);
    var tmp0_iterator = (isInterface(tmp, Sequence) ? tmp : THROW_CCE()).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.resources.vector.parseVectorNodes.<anonymous>' call
      parseVectorNode(element, builder, context);
    }
  }
  function parseVectorNode(_this__u8e3s4, builder, context) {
    switch (_this__u8e3s4.get_nodeName_d8eikq_k$()) {
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
      tmp_1 = Companion_getInstance_0().get_NonZero_dwy848_k$();
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
      tmp_20 = Companion_getInstance_1().get_Butt_jb7qjw_k$();
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
      tmp_24 = Companion_getInstance_2().get_Miter_xkwqso_k$();
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
    builder.addPath_15iv0l_k$(tmp, tmp_3, tmp_4, tmp_8, tmp_10, tmp_14, tmp_16, tmp_18, tmp_22, tmp_26, tmp_28, tmp_30, tmp_32, tmp26_elvis_lhs == null ? 0.0 : tmp26_elvis_lhs);
  }
  function parseClipPath(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    builder.addGroup$default_x7xqxd_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, VOID, VOID, VOID, VOID, VOID, VOID, VOID, addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData')));
    context.currentGroups_1.add_utx5q5_k$(Group_Virtual_getInstance());
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
    builder.addGroup_xxexed_k$(tmp, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp14_elvis_lhs == null ? get_DefaultTranslationY() : tmp14_elvis_lhs, get_EmptyPath());
    context.currentGroups_1.add_utx5q5_k$(Group_Real_getInstance());
    parseVectorNodes(_this__u8e3s4, builder, context);
    do {
      var removedGroup = removeLastOrNull(context.currentGroups_1);
      builder.clearGroup_chitou_k$();
    }
     while (equals(removedGroup, Group_Virtual_getInstance()));
  }
  function parseStringBrush(str) {
    return new SolidColor(Color(parseColorValue(str)));
  }
  function apptAttr(_this__u8e3s4, namespace, name) {
    var prefix = _this__u8e3s4.lookupPrefix_39tj8y_k$(namespace);
    // Inline function 'kotlin.sequences.find' call
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, apptAttr$lambda);
    var this_1 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var tmp0_iterator = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.resources.vector.apptAttr.<anonymous>' call
        if ((element.get_namespaceURI_g6nmhy_k$() === 'http://schemas.android.com/aapt' ? element.get_localName_bf4zrn_k$() === 'attr' : false) ? element.getAttribute_z2kbho_k$('name') === prefix + ':' + name : false) {
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
      var tmp0_iterator = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.resources.vector.parseElementBrush.<anonymous>' call
        if (element.get_nodeName_d8eikq_k$() === 'gradient') {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    return tmp0_safe_receiver == null ? null : parseGradient(tmp0_safe_receiver);
  }
  function get_AAPT_NS() {
    return AAPT_NS;
  }
  var AAPT_NS;
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
    var tmp = Companion_getInstance_4();
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
      tmp_10 = Companion_getInstance_3().get_Clamp_ddetsd_k$();
    } else {
      tmp_10 = tmp9_elvis_lhs;
    }
    return tmp.linearGradient_gq8lze_k$(tmp_0, tmp_4, tmp_8, tmp_10);
  }
  function parseRadialGradient(_this__u8e3s4) {
    var tmp = Companion_getInstance_4();
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
      tmp_8 = Companion_getInstance_3().get_Clamp_ddetsd_k$();
    } else {
      tmp_8 = tmp7_elvis_lhs;
    }
    return tmp.radialGradient_q9mw3i_k$(tmp_0, tmp_4, tmp_6, tmp_8);
  }
  function parseSweepGradient(_this__u8e3s4) {
    var tmp = Companion_getInstance_4();
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
    return tmp.sweepGradient_pf4hbc_k$(tmp_0, Offset(tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs));
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
    var tmp0_iterator = items.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
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
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    var colorStops = destination;
    if (colorStops.isEmpty_y1axqb_k$()) {
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
        colorStops.add_utx5q5_k$(to(0.0, new Color_0(Color(startColor))));
      }
      if (!(centerColor == null)) {
        colorStops.add_utx5q5_k$(to(0.5, new Color_0(Color(centerColor))));
      }
      if (!(endColor == null)) {
        colorStops.add_utx5q5_k$(to(1.0, new Color_0(Color(endColor))));
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
    this.$this_childrenSequence_1 = $this_childrenSequence;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_childrenSequence_$slambda_9jpw3j).invoke_e8kyn4_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_5jok44_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_e8kyn4_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.tmp0_iterator0__1 = until(0, this.$this_childrenSequence_1.get_childNodes_1z4mta_k$().get_length_g42xv3_k$()).iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator0__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.i1__1 = this.tmp0_iterator0__1.next_20eer_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.$this_childrenSequence_1.get_childNodes_1z4mta_k$().item_dog3dn_k$(this.i1__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(_get_childrenSequence_$slambda_9jpw3j).create_5jok44_k$ = function ($this$sequence, completion) {
    var i = new _get_childrenSequence_$slambda_9jpw3j(this.$this_childrenSequence_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).create_wyq9v6_k$ = function (value, completion) {
    return this.create_5jok44_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function _get_childrenSequence_$slambda_9jpw3j_0($this_childrenSequence, resultContinuation) {
    var i = new _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_e8kyn4_k$($this$sequence, $completion);
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
    return it.get_nodeName_d8eikq_k$() === 'item';
  }
  function Element_0() {
  }
  function get_$stableprop_3() {
    return 0;
  }
  function MalformedXMLException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedXMLException);
    this.$stable_1 = 0;
  }
  function Node() {
  }
  function NodeList() {
  }
  function isSyncResourceLoadingSupported() {
    return false;
  }
  function resource(path) {
    return WebResourcesConfiguration_getInstance().jsResourceImplFactory_1(path);
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
  function get_$stableprop_4() {
    return 8;
  }
  function WebResourcesConfiguration$jsResourceImplFactory$lambda(it) {
    return urlResource('./' + it);
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.jsResourceImplFactory_1 = WebResourcesConfiguration$jsResourceImplFactory$lambda;
    this.$stable_1 = 8;
  }
  protoOf(WebResourcesConfiguration).set_jsResourceImplFactory_igc4y0_k$ = function (_set____db54di) {
    this.jsResourceImplFactory_1 = _set____db54di;
  };
  protoOf(WebResourcesConfiguration).get_jsResourceImplFactory_7jzvl6_k$ = function () {
    return this.jsResourceImplFactory_1;
  };
  protoOf(WebResourcesConfiguration).setResourceFactory_x6kgno_k$ = function (factory) {
    this.jsResourceImplFactory_1 = factory;
  };
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
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($readBytesCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(window.fetch(this._this__u8e3s4__1.get_path_wos8ry_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response0__1 = suspendResult;
            if (!this.response0__1.ok) {
              throw new MissingResourceException(this._this__u8e3s4__1.get_path_wos8ry_k$());
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(this.response0__1.arrayBuffer(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return toByteArray(ARGUMENT);
          case 3:
            throw this.get_exception_x0n6w6_k$();
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
  function JSUrlResourceImpl(url) {
    AbstractResourceImpl.call(this, url);
  }
  protoOf(JSUrlResourceImpl).readBytes_d7rp36_k$ = function ($completion) {
    var tmp = new $readBytesCOROUTINE$0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
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
    this.element_1 = element;
  }
  protoOf(ElementImpl).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(ElementImpl).get_localName_bf4zrn_k$ = function () {
    return this.element_1.localName;
  };
  protoOf(ElementImpl).get_namespaceURI_g6nmhy_k$ = function () {
    var tmp0_elvis_lhs = this.element_1.namespaceURI;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).getAttributeNS_m2qmcr_k$ = function (nameSpaceURI, localName) {
    var tmp0_elvis_lhs = this.element_1.getAttributeNS(nameSpaceURI, localName);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).getAttribute_z2kbho_k$ = function (name) {
    var tmp0_elvis_lhs = this.element_1.getAttribute(name);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  function NodeImpl$childNodes$2$1(this$0) {
    this.this$0__1 = this$0;
    this.length_1 = this$0.n_1.childNodes.length;
  }
  protoOf(NodeImpl$childNodes$2$1).item_dog3dn_k$ = function (i) {
    var tmp0_elvis_lhs = this.this$0__1.n_1.childNodes.item(i);
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
  protoOf(NodeImpl$childNodes$2$1).get_length_g42xv3_k$ = function () {
    return this.length_1;
  };
  function NodeImpl$childNodes$delegate$lambda(this$0) {
    return function () {
      return new NodeImpl$childNodes$2$1(this$0);
    };
  }
  function NodeImpl(n) {
    this.n_1 = n;
    this.localName_1 = '';
    this.namespaceURI_1 = '';
    var tmp = this;
    tmp.childNodes$delegate_1 = lazy(NodeImpl$childNodes$delegate$lambda(this));
  }
  protoOf(NodeImpl).get_n_1mhr5x_k$ = function () {
    return this.n_1;
  };
  protoOf(NodeImpl).get_nodeName_d8eikq_k$ = function () {
    return this.n_1.nodeName;
  };
  protoOf(NodeImpl).get_localName_bf4zrn_k$ = function () {
    return this.localName_1;
  };
  protoOf(NodeImpl).get_namespaceURI_g6nmhy_k$ = function () {
    return this.namespaceURI_1;
  };
  protoOf(NodeImpl).get_childNodes_1z4mta_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.childNodes$delegate_1;
    childNodes$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(NodeImpl).lookupPrefix_39tj8y_k$ = function (namespaceURI) {
    var tmp0_elvis_lhs = this.n_1.lookupPrefix(namespaceURI);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  function childNodes$factory() {
    return getPropertyCallableRef('childNodes', 1, KProperty1, function (receiver) {
      return receiver.get_childNodes_1z4mta_k$();
    }, null);
  }
  function toImageBitmap(_this__u8e3s4) {
    return toComposeImageBitmap(Companion_getInstance_5().makeFromEncoded_99p5hy_k$(_this__u8e3s4));
  }
  //region block: init
  ALPHA_MASK = -16777216;
  ANDROID_NS = 'http://schemas.android.com/apk/res/android';
  AAPT_NS = 'http://schemas.android.com/aapt';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = painterResource$composable;
  //endregion
  return _;
}));
