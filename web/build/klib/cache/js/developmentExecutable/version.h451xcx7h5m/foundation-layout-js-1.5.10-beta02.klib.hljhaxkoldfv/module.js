(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    root['compose-multiplatform-core-foundation-layout'] = factory(typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined' ? {} : this['compose-multiplatform-core-foundation-layout'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.jd;
  var classMeta = kotlin_kotlin.$_$.xb;
  var VOID = kotlin_kotlin.$_$.li;
  var setMetadataFor = kotlin_kotlin.$_$.kd;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var interfaceMeta = kotlin_kotlin.$_$.lc;
  var objectMeta = kotlin_kotlin.$_$.id;
  var Unit_getInstance = kotlin_kotlin.$_$.v4;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var hashCode = kotlin_kotlin.$_$.jc;
  var THROW_CCE = kotlin_kotlin.$_$.xg;
  var equals = kotlin_kotlin.$_$.bc;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.h8;
  var roundToInt = kotlin_kotlin.$_$.ud;
  var get_lastIndex = kotlin_kotlin.$_$.k8;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.y6;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i8;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.e8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var isInterface = kotlin_kotlin.$_$.uc;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var isObject = kotlin_kotlin.$_$.wc;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.n5;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.w6;
  var foldOut = kotlin_org_jetbrains_compose_ui_ui.$_$.x6;
  var any = kotlin_org_jetbrains_compose_ui_ui.$_$.v6;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.u6;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.z6;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var fillArrayVal = kotlin_kotlin.$_$.cc;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var toString = kotlin_kotlin.$_$.od;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var Annotation = kotlin_kotlin.$_$.fg;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.j2;
  var THROW_ISE = kotlin_kotlin.$_$.yg;
  var Enum = kotlin_kotlin.$_$.lg;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.c8;
  var getNumberHashCode = kotlin_kotlin.$_$.fc;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var toLong = kotlin_kotlin.$_$.md;
  var Long = kotlin_kotlin.$_$.qg;
  var numberToLong = kotlin_kotlin.$_$.gd;
  var coerceAtLeast = kotlin_kotlin.$_$.zd;
  var until = kotlin_kotlin.$_$.le;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var get_sign = kotlin_kotlin.$_$.xd;
  var coerceIn = kotlin_kotlin.$_$.ie;
  var ensureNotNull = kotlin_kotlin.$_$.oh;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q3;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var coerceIn_0 = kotlin_kotlin.$_$.he;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.ae;
  var coerceAtMost = kotlin_kotlin.$_$.ee;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h1;
  var charSequenceLength = kotlin_kotlin.$_$.vb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var InspectorValueInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var minIntrinsicWidth_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var minIntrinsicHeight_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var maxIntrinsicWidth_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var maxIntrinsicHeight_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var ModifierLocalConsumer = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var ModifierLocalProvider = kotlin_org_jetbrains_compose_ui_ui.$_$.q3;
  var KMutableProperty1 = kotlin_kotlin.$_$.oe;
  var getPropertyCallableRef = kotlin_kotlin.$_$.hc;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(Horizontal, 'Horizontal', interfaceMeta);
  setMetadataFor(Arrangement$Absolute$Left$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$Center$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$Right$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$SpaceBetween$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$SpaceEvenly$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Absolute$SpaceAround$1, VOID, classMeta, VOID, [Horizontal]);
  function get_spacing_0() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(Vertical, 'Vertical', interfaceMeta);
  function get_spacing_1() {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return tmp$ret$0;
  }
  setMetadataFor(HorizontalOrVertical, 'HorizontalOrVertical', interfaceMeta, VOID, [Horizontal, Vertical]);
  setMetadataFor(Absolute, 'Absolute', objectMeta);
  setMetadataFor(SpacedAligned, 'SpacedAligned', classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$Start$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$End$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Top$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Bottom$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Center$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$SpaceEvenly$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$SpaceBetween$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement$SpaceAround$1, VOID, classMeta, VOID, [HorizontalOrVertical]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  setMetadataFor(BoxChildDataNode, 'BoxChildDataNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(BoxScope, 'BoxScope', interfaceMeta);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta, VOID, [BoxScope]);
  setMetadataFor(BoxChildDataElement, 'BoxChildDataElement', classMeta, ModifierNodeElement);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0_0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.weight_eps4yz_k$(_this__u8e3s4, weight, fill) : $super.weight_eps4yz_k$.call(this, _this__u8e3s4, weight, fill);
  }
  setMetadataFor(ColumnScope, 'ColumnScope', interfaceMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta, VOID, [ColumnScope]);
  setMetadataFor(LayoutScopeMarker, 'LayoutScopeMarker', classMeta, VOID, [Annotation]);
  setMetadataFor(OffsetPxElement, 'OffsetPxElement', classMeta, ModifierNodeElement);
  setMetadataFor(OffsetPxNode, 'OffsetPxNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(PaddingValues, 'PaddingValues', interfaceMeta);
  setMetadataFor(Absolute_0, 'Absolute', classMeta, VOID, [PaddingValues]);
  setMetadataFor(PaddingElement, 'PaddingElement', classMeta, ModifierNodeElement);
  setMetadataFor(PaddingValuesImpl, 'PaddingValuesImpl', classMeta, VOID, [PaddingValues]);
  setMetadataFor(PaddingValuesElement, 'PaddingValuesElement', classMeta, ModifierNodeElement);
  setMetadataFor(PaddingNode, 'PaddingNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(PaddingValuesModifier, 'PaddingValuesModifier', classMeta, Node, [LayoutModifierNode, Node]);
  function weight$default_0(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.weight_eps4yz_k$(_this__u8e3s4, weight, fill) : $super.weight_eps4yz_k$.call(this, _this__u8e3s4, weight, fill);
  }
  setMetadataFor(RowScope, 'RowScope', interfaceMeta);
  setMetadataFor(RowScopeInstance, 'RowScopeInstance', objectMeta, VOID, [RowScope]);
  setMetadataFor(LayoutOrientation, 'LayoutOrientation', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CrossAxisAlignment, 'CrossAxisAlignment', classMeta);
  setMetadataFor(CenterCrossAxisAlignment, 'CenterCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(StartCrossAxisAlignment, 'StartCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(EndCrossAxisAlignment, 'EndCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(AlignmentLineCrossAxisAlignment, 'AlignmentLineCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(VerticalCrossAxisAlignment, 'VerticalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(SizeMode, 'SizeMode', classMeta, Enum);
  setMetadataFor(AlignmentLineProvider, 'AlignmentLineProvider', classMeta);
  setMetadataFor(Block, 'Block', classMeta, AlignmentLineProvider);
  setMetadataFor(Value, 'Value', classMeta, AlignmentLineProvider);
  setMetadataFor(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks', objectMeta);
  setMetadataFor(RowColumnParentData, 'RowColumnParentData', classMeta);
  setMetadataFor(OrientationIndependentConstraints, 'OrientationIndependentConstraints', classMeta);
  setMetadataFor(LayoutWeightElement, 'LayoutWeightElement', classMeta, ModifierNodeElement);
  setMetadataFor(HorizontalAlignElement, 'HorizontalAlignElement', classMeta, ModifierNodeElement);
  setMetadataFor(WithAlignmentLineElement, 'WithAlignmentLineElement', classMeta, ModifierNodeElement);
  setMetadataFor(WithAlignmentLineBlockElement, 'WithAlignmentLineBlockElement', classMeta, ModifierNodeElement);
  setMetadataFor(LayoutWeightNode, 'LayoutWeightNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(HorizontalAlignNode, 'HorizontalAlignNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(SiblingsAlignedNode, 'SiblingsAlignedNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(WithAlignmentLineBlockNode, 'WithAlignmentLineBlockNode', classMeta, SiblingsAlignedNode);
  setMetadataFor(WithAlignmentLineNode, 'WithAlignmentLineNode', classMeta, SiblingsAlignedNode);
  setMetadataFor(VerticalAlignElement, 'VerticalAlignElement', classMeta, ModifierNodeElement);
  setMetadataFor(VerticalAlignNode, 'VerticalAlignNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(rowColumnMeasurePolicy$1, VOID, classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(RowColumnMeasurementHelper, 'RowColumnMeasurementHelper', classMeta);
  setMetadataFor(RowColumnMeasureHelperResult, 'RowColumnMeasureHelperResult', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(FillElement, 'FillElement', classMeta, ModifierNodeElement);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(WrapContentElement, 'WrapContentElement', classMeta, ModifierNodeElement);
  setMetadataFor(FillNode, 'FillNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(WrapContentNode, 'WrapContentNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(SizeElement, 'SizeElement', classMeta, ModifierNodeElement);
  setMetadataFor(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', classMeta, ModifierNodeElement);
  setMetadataFor(SizeNode, 'SizeNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(SpacerMeasurePolicy, 'SpacerMeasurePolicy', objectMeta, VOID, [MeasurePolicy]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(WindowInsets, 'WindowInsets', interfaceMeta);
  setMetadataFor(FixedIntInsets, 'FixedIntInsets', classMeta, VOID, [WindowInsets]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(WindowInsetsSides, 'WindowInsetsSides', classMeta);
  setMetadataFor(InsetsPaddingValues, 'InsetsPaddingValues', classMeta, VOID, [PaddingValues]);
  setMetadataFor(LimitInsets, 'LimitInsets', classMeta, VOID, [WindowInsets]);
  setMetadataFor(ExcludeInsets, 'ExcludeInsets', classMeta, VOID, [WindowInsets]);
  setMetadataFor(UnionInsets, 'UnionInsets', classMeta, VOID, [WindowInsets]);
  setMetadataFor(InsetsPaddingModifier, 'InsetsPaddingModifier', classMeta, InspectorValueInfo, [InspectorValueInfo, LayoutModifier, ModifierLocalConsumer, ModifierLocalProvider]);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  //endregion
  function get_$stableprop() {
    return 0;
  }
  function Arrangement$Absolute$Left$1() {
  }
  protoOf(Arrangement$Absolute$Left$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Left$1).toString = function () {
    return 'AbsoluteArrangement#Left';
  };
  function Arrangement$Absolute$Center$1() {
  }
  protoOf(Arrangement$Absolute$Center$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Center$1).toString = function () {
    return 'AbsoluteArrangement#Center';
  };
  function Arrangement$Absolute$Right$1() {
  }
  protoOf(Arrangement$Absolute$Right$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Right$1).toString = function () {
    return 'AbsoluteArrangement#Right';
  };
  function Arrangement$Absolute$SpaceBetween$1() {
  }
  protoOf(Arrangement$Absolute$SpaceBetween$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceBetween$1).toString = function () {
    return 'AbsoluteArrangement#SpaceBetween';
  };
  function Arrangement$Absolute$SpaceEvenly$1() {
  }
  protoOf(Arrangement$Absolute$SpaceEvenly$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceEvenly$1).toString = function () {
    return 'AbsoluteArrangement#SpaceEvenly';
  };
  function Arrangement$Absolute$SpaceAround$1() {
  }
  protoOf(Arrangement$Absolute$SpaceAround$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceAround$1).toString = function () {
    return 'AbsoluteArrangement#SpaceAround';
  };
  function Arrangement$Absolute$spacedBy$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$Absolute$spacedBy$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement$Absolute$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Horizontal() {
  }
  function Vertical() {
  }
  function HorizontalOrVertical() {
  }
  function Absolute() {
    Absolute_instance = this;
    var tmp = this;
    tmp.Left_1 = new Arrangement$Absolute$Left$1();
    var tmp_0 = this;
    tmp_0.Center_1 = new Arrangement$Absolute$Center$1();
    var tmp_1 = this;
    tmp_1.Right_1 = new Arrangement$Absolute$Right$1();
    var tmp_2 = this;
    tmp_2.SpaceBetween_1 = new Arrangement$Absolute$SpaceBetween$1();
    var tmp_3 = this;
    tmp_3.SpaceEvenly_1 = new Arrangement$Absolute$SpaceEvenly$1();
    var tmp_4 = this;
    tmp_4.SpaceAround_1 = new Arrangement$Absolute$SpaceAround$1();
    this.$stable_1 = 0;
  }
  protoOf(Absolute).get_Left_wo5bw0_k$ = function () {
    return this.Left_1;
  };
  protoOf(Absolute).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Absolute).get_Right_igdsyb_k$ = function () {
    return this.Right_1;
  };
  protoOf(Absolute).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Absolute).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Absolute).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Absolute).spacedBy_vy2thv_k$ = function (space) {
    return new SpacedAligned(space, false, null);
  };
  protoOf(Absolute).spacedBy_junro7_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda(alignment));
  };
  protoOf(Absolute).spacedBy_osvfph_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$Absolute$spacedBy$lambda_0(alignment));
  };
  protoOf(Absolute).aligned_2187lk_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    return new SpacedAligned(tmp, false, Arrangement$Absolute$aligned$lambda(alignment));
  };
  var Absolute_instance;
  function Absolute_getInstance() {
    if (Absolute_instance == null)
      new Absolute();
    return Absolute_instance;
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.space_1 = space;
    this.rtlMirror_1 = rtlMirror;
    this.alignment_1 = alignment;
    this.spacing_1 = this.space_1;
  }
  protoOf(SpacedAligned).get_space_glqwpk_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).get_rtlMirror_4wv9cw_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(SpacedAligned).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (sizes.length === 0)
      return Unit_getInstance();
    var spacePx = _this__u8e3s4.roundToPx_hl1u8z_k$(this.space_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.rtlMirror_1 ? layoutDirection.equals(LayoutDirection_Rtl_getInstance()) : false;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    Arrangement_getInstance();
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = sizes.length;
      while (inductionVariable < last) {
        var item = sizes[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.min' call
        var tmp0_min = occupied;
        var tmp1_min = totalSize - item | 0;
        outPositions[tmp1] = Math.min(tmp0_min, tmp1_min);
        // Inline function 'kotlin.math.min' call
        var tmp2_min = (totalSize - outPositions[tmp1] | 0) - item | 0;
        lastSpace = Math.min(spacePx, tmp2_min);
        occupied = (outPositions[tmp1] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
          var tmp2_anonymous = sizes[i];
          // Inline function 'kotlin.math.min' call
          var tmp0_min_0 = occupied;
          var tmp1_min_0 = totalSize - tmp2_anonymous | 0;
          outPositions[i] = Math.min(tmp0_min_0, tmp1_min_0);
          // Inline function 'kotlin.math.min' call
          var tmp2_min_0 = (totalSize - outPositions[i] | 0) - tmp2_anonymous | 0;
          lastSpace = Math.min(spacePx, tmp2_min_0);
          occupied = (outPositions[i] + tmp2_anonymous | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.alignment_1 == null) ? occupied < totalSize : false) {
      var groupPosition = this.alignment_1(totalSize - occupied | 0, layoutDirection);
      var inductionVariable_1 = 0;
      var last_0 = outPositions.length - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          outPositions[index_0] = outPositions[index_0] + groupPosition | 0;
        }
         while (inductionVariable_1 <= last_0);
    }
  };
  protoOf(SpacedAligned).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.arrange_6sc983_k$(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.rtlMirror_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + new Dp(this.space_1) + ', ' + this.alignment_1 + ')';
  };
  protoOf(SpacedAligned).component1_z2a8sv_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).component2_7eebsb_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).component3_7eebsa_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).copy_f6k3do_k$ = function (space, rtlMirror, alignment) {
    return new SpacedAligned(space, rtlMirror, alignment);
  };
  protoOf(SpacedAligned).copy$default_kmttfe_k$ = function (space, rtlMirror, alignment, $super) {
    space = space === VOID ? this.space_1 : space;
    rtlMirror = rtlMirror === VOID ? this.rtlMirror_1 : rtlMirror;
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    return $super === VOID ? this.copy_f6k3do_k$(space, rtlMirror, alignment) : $super.copy_f6k3do_k$.call(this, new Dp(space), rtlMirror, alignment);
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.space_1);
    result = imul(result, 31) + (this.rtlMirror_1 | 0) | 0;
    result = imul(result, 31) + (this.alignment_1 == null ? 0 : hashCode(this.alignment_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.space_1, tmp0_other_with_cast.space_1))
      return false;
    if (!(this.rtlMirror_1 === tmp0_other_with_cast.rtlMirror_1))
      return false;
    if (!equals(this.alignment_1, tmp0_other_with_cast.alignment_1))
      return false;
    return true;
  };
  function forEachIndexed(_this__u8e3s4, $this, reversed, action) {
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = _this__u8e3s4.length;
      while (inductionVariable < last) {
        var item = _this__u8e3s4[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        action(tmp1, item);
      }
    } else {
      var inductionVariable_0 = _this__u8e3s4.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          action(i, _this__u8e3s4[i]);
        }
         while (0 <= inductionVariable_0);
    }
  }
  function get_$stableprop_0() {
    return 0;
  }
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_1r2n9x_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_j5u2x1_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$Center$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeCenter_icok0k_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_ojzjdq_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_8d7z33_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).get_spacing_kuwe3v_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_6sc983_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_bbki90_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_2yd3pg_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance().get_Start_ih4i6x_k$().align_a5f08y_k$(0, size, layoutDirection);
  }
  function Arrangement$spacedBy$lambda_0($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$spacedBy$lambda_1($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_a5f08y_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$aligned$lambda_0($alignment) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return $alignment.align_1fj06d_k$(0, size);
    };
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.Start_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.End_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.Top_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.Bottom_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.Center_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.SpaceEvenly_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.SpaceBetween_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.SpaceAround_1 = new Arrangement$SpaceAround$1();
    this.$stable_1 = 0;
  }
  protoOf(Arrangement).get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  protoOf(Arrangement).get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  protoOf(Arrangement).get_Top_18jj1w_k$ = function () {
    return this.Top_1;
  };
  protoOf(Arrangement).get_Bottom_3m75bg_k$ = function () {
    return this.Bottom_1;
  };
  protoOf(Arrangement).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Arrangement).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Arrangement).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Arrangement).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Arrangement).spacedBy_vy2thv_k$ = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  protoOf(Arrangement).spacedBy_junro7_k$ = function (space, alignment) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda_0(alignment));
  };
  protoOf(Arrangement).spacedBy_osvfph_k$ = function (space, alignment) {
    return new SpacedAligned(space, false, Arrangement$spacedBy$lambda_1(alignment));
  };
  protoOf(Arrangement).aligned_2187lk_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    return new SpacedAligned(tmp, true, Arrangement$aligned$lambda(alignment));
  };
  protoOf(Arrangement).aligned_8fzwhi_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    return new SpacedAligned(tmp, false, Arrangement$aligned$lambda_0(alignment));
  };
  protoOf(Arrangement).placeRightOrBottom_j5u2x1_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        outPosition[tmp1] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var tmp2_anonymous = size[i];
          outPosition[i] = current;
          current = current + tmp2_anonymous | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeLeftOrTop_1r2n9x_k$ = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        outPosition[tmp1] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var tmp1_anonymous = size[i];
          outPosition[i] = current;
          current = current + tmp1_anonymous | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).placeCenter_icok0k_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        outPosition[tmp1] = roundToInt(tmp0_roundToInt);
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var tmp2_anonymous = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          outPosition[i] = roundToInt(tmp0_roundToInt_0);
          current = current + tmp2_anonymous;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceEvenly_ojzjdq_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        outPosition[tmp1] = roundToInt(tmp0_roundToInt);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var tmp2_anonymous = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          outPosition[i] = roundToInt(tmp0_roundToInt_0);
          current = current + (tmp2_anonymous + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceBetween_8d7z33_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_getInstance();
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp1_maxOf = get_lastIndex(size);
    var noOfGaps = Math.max(tmp1_maxOf, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput ? size.length === 1 : false) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        outPosition[tmp1] = roundToInt(tmp0_roundToInt);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var tmp3_anonymous = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          outPosition[i] = roundToInt(tmp0_roundToInt_0);
          current = current + (tmp3_anonymous + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceAround_2yd3pg_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'kotlin.math.roundToInt' call
        var tmp0_roundToInt = current;
        outPosition[tmp1] = roundToInt(tmp0_roundToInt);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var tmp2_anonymous = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt_0 = current;
          outPosition[i] = roundToInt(tmp0_roundToInt_0);
          current = current + (tmp2_anonymous + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_DefaultBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  function boxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = boxMeasurePolicy$lambda(propagateMinConstraints, alignment);
    return new sam$androidx_compose_ui_layout_MeasurePolicy$0_0(tmp);
  }
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchParentSize_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.align_f85h4l_k$(IntSize(placeable.get_width_j0q4yl_k$(), placeable.get_height_e7t92o_k$()), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.place$default_b921p1_k$(placeable, position);
  }
  function BoxChildDataNode(alignment, matchParentSize) {
    Node.call(this);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
  }
  protoOf(BoxChildDataNode).set_alignment_ks94gw_k$ = function (_set____db54di) {
    this.alignment_1 = _set____db54di;
  };
  protoOf(BoxChildDataNode).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(BoxChildDataNode).set_matchParentSize_t943cm_k$ = function (_set____db54di) {
    this.matchParentSize_1 = _set____db54di;
  };
  protoOf(BoxChildDataNode).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(BoxChildDataNode).modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    return this;
  };
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function BoxScope() {
  }
  function Box$composable(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-233896031);
    sourceInformation($composer_0, 'C(Box$composable)199@7940L70:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-233896031, $dirty, -1, 'androidx.compose.foundation.layout.Box$composable (Box.kt:198)');
      }
      var tmp0_measurePolicy = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = $composer_0;
      var tmp1_Layout$composable = 384 | 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_1 = tmp0_Layout$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_1, 0);
      var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp1_Layout$composable << 9;
      var $composer_2 = $composer_1;
      var tmp = $composer_2.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.startReusableNode_jk07k2_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        $composer_2.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_2.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss(tmp4_anonymous, tmp0_measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
        tmp_0 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_2)), $composer_2, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_2.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -1851532291, 'C:Box.kt#2w3rfo');
      sourceInformationMarkerEnd($composer_3);
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_2.endNode_3mkr10_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Box$composable$lambda(modifier, $changed));
    }
  }
  function Box$composable_0(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    _init_properties_Box_kt__tvzvdl();
    var modifier_0 = modifier;
    var contentAlignment_0 = contentAlignment;
    var propagateMinConstraints_0 = propagateMinConstraints;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1330882304);
    sourceInformation($composer_0, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      contentAlignment_0 = Companion_getInstance().get_TopStart_o4x792_k$();
    if (!(($default & 4) === 0))
      propagateMinConstraints_0 = false;
    var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = modifier_0;
    var tmp2_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp0_Layout$composable;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
    sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance_0();
    var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_1, 0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
    var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
    var $composer_2 = $composer_1;
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jk07k2_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
    } else {
      $composer_2.useNode_inlzo8_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
      tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
      tmp_0 = Unit_getInstance();
    }
    tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_2)), $composer_2, 112 & tmp3_ReusableComposeNode$composable >> 3);
    $composer_2.startReplaceableGroup_rp6air_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
    content(BoxScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    sourceInformationMarkerEnd($composer_3);
    $composer_2.endReplaceableGroup_er37p7_k$();
    $composer_2.endNode_3mkr10_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function rememberBoxMeasurePolicy$composable(alignment, propagateMinConstraints, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1048091512);
    sourceInformation($composer_0, 'C(rememberBoxMeasurePolicy$composable)85@3660L113:Box.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-1048091512, $changed, -1, 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable (Box.kt:79)');
    }
    var tmp;
    if (equals(alignment, Companion_getInstance().get_TopStart_o4x792_k$()) ? !propagateMinConstraints : false) {
      tmp = get_DefaultBoxMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.changed_ga7h3f_k$(alignment) | $composer_1.changed_ga7h3f_k$(propagateMinConstraints));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable.<anonymous>' call
        var value = boxMeasurePolicy(alignment, propagateMinConstraints);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('align');
      $this$null.set_value_rj6yh0_k$($alignment);
      return Unit_getInstance();
    };
  }
  function BoxScopeInstance$matchParentSize$lambda($this$null) {
    // Inline function 'androidx.compose.foundation.layout.BoxScopeInstance.matchParentSize.<anonymous>' call
    $this$null.set_name_1v3553_k$('matchParentSize');
    return Unit_getInstance();
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  protoOf(BoxScopeInstance).align_eg370n_k$ = function (_this__u8e3s4, alignment) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new BoxChildDataElement(alignment, false, tmp$ret$0));
  };
  protoOf(BoxScopeInstance).matchParentSize_f3w2c1_k$ = function (_this__u8e3s4) {
    var tmp = Companion_getInstance().get_Center_3arb0i_k$();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_0;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_0 = BoxScopeInstance$matchParentSize$lambda;
    } else {
      tmp_0 = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp_0;
    return _this__u8e3s4.then_5qw5wu_k$(new BoxChildDataElement(tmp, true, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function BoxChildDataElement(alignment, matchParentSize, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(BoxChildDataElement).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(BoxChildDataElement).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(BoxChildDataElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(BoxChildDataElement).create_md4cuc_k$ = function () {
    return new BoxChildDataNode(this.alignment_1, this.matchParentSize_1);
  };
  protoOf(BoxChildDataElement).update_kmw868_k$ = function (node) {
    node.alignment_1 = this.alignment_1;
    node.matchParentSize_1 = this.matchParentSize_1;
  };
  protoOf(BoxChildDataElement).update_c7m3nr_k$ = function (node) {
    return this.update_kmw868_k$(node instanceof BoxChildDataNode ? node : THROW_CCE());
  };
  protoOf(BoxChildDataElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(BoxChildDataElement).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(31, result) + (this.matchParentSize_1 | 0) | 0;
    return result;
  };
  protoOf(BoxChildDataElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildDataElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1) ? this.matchParentSize_1 === otherModifier.matchParentSize_1 : false;
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
    return $this$MeasurePolicy.layout$default_8ylrvs_k$(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda_0($placeable, $measurable, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_MeasurePolicy.get_layoutDirection_7e37v0_k$(), $boxWidth, $boxHeight, $alignment);
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda$lambda_1($placeables, $measurables, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0_anonymous = tmp1;
        if (item instanceof Placeable)
          item;
        else
          THROW_CCE();
        var measurable = $measurables.get_fkrdnv_k$(tmp0_anonymous);
        placeInBox($this$layout, item, measurable, $this_MeasurePolicy.get_layoutDirection_7e37v0_k$(), $boxWidth._v, $boxHeight._v, $alignment);
      }
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda($propagateMinConstraints, $alignment) {
    return function ($this$MeasurePolicy, measurables, constraints) {
      var tmp;
      if (measurables.isEmpty_y1axqb_k$()) {
        var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
        var tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
        return $this$MeasurePolicy.layout$default_8ylrvs_k$(tmp_0, tmp_1, VOID, boxMeasurePolicy$lambda$lambda);
      }
      var tmp_2;
      if ($propagateMinConstraints) {
        tmp_2 = constraints.value_1;
      } else {
        tmp_2 = Constraints__copy$default_impl_f452rp(constraints.value_1, 0, VOID, 0);
      }
      var contentConstraints = tmp_2;
      var tmp_3;
      if (measurables.get_size_woubt6_k$() === 1) {
        var measurable = measurables.get_fkrdnv_k$(0);
        var boxWidth;
        var boxHeight;
        var placeable;
        if (!get_matchesParentSize(measurable)) {
          placeable = measurable.measure_ikak0q_k$(contentConstraints);
          var tmp$ret$0;
          // Inline function 'kotlin.math.max' call
          var tmp0_max = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
          var tmp1_max = placeable.get_width_j0q4yl_k$();
          tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
          boxWidth = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
          var tmp3_max = placeable.get_height_e7t92o_k$();
          tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
          boxHeight = tmp$ret$1;
        } else {
          boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
          boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
          placeable = measurable.measure_ikak0q_k$(Companion_getInstance_3().fixed_bmujv7_k$(_Constraints___get_minWidth__impl__hi9lfi(constraints.value_1), _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1)));
        }
        return $this$MeasurePolicy.layout$default_8ylrvs_k$(boxWidth, boxHeight, VOID, boxMeasurePolicy$lambda$lambda_0(placeable, measurable, $this$MeasurePolicy, boxWidth, boxHeight, $alignment));
      }
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp4_arrayOfNulls = measurables.get_size_woubt6_k$();
      tmp$ret$2 = fillArrayVal(Array(tmp4_arrayOfNulls), null);
      var placeables = tmp$ret$2;
      var hasMatchParentSizeChildren = false;
      var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1)};
      var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1)};
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      var tmp_4;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
          if (!get_matchesParentSize(item)) {
            var placeable_0 = item.measure_ikak0q_k$(contentConstraints);
            placeables[index] = placeable_0;
            var tmp$ret$3;
            // Inline function 'kotlin.math.max' call
            var tmp0_max_0 = boxWidth_0._v;
            var tmp1_max_0 = placeable_0.get_width_j0q4yl_k$();
            tmp$ret$3 = Math.max(tmp0_max_0, tmp1_max_0);
            boxWidth_0._v = tmp$ret$3;
            var tmp$ret$4;
            // Inline function 'kotlin.math.max' call
            var tmp2_max_0 = boxHeight_0._v;
            var tmp3_max_0 = placeable_0.get_height_e7t92o_k$();
            tmp$ret$4 = Math.max(tmp2_max_0, tmp3_max_0);
            boxHeight_0._v = tmp$ret$4;
          } else {
            hasMatchParentSizeChildren = true;
          }
        }
         while (inductionVariable <= last);
        tmp_4 = Unit_getInstance();
      }
      var tmp_5;
      if (hasMatchParentSizeChildren) {
        var tmp0_minWidth = !(boxWidth_0._v === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? boxWidth_0._v : 0;
        var tmp1_minHeight = !(boxHeight_0._v === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? boxHeight_0._v : 0;
        var tmp2_maxWidth = boxWidth_0._v;
        var tmp3_maxHeight = boxHeight_0._v;
        var matchParentSizeConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
        var tmp_6;
        if (inductionVariable_0 <= last_0) {
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.get_fkrdnv_k$(index_0);
            // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
            if (get_matchesParentSize(item_0)) {
              placeables[index_0] = item_0.measure_ikak0q_k$(matchParentSizeConstraints);
            }
          }
           while (inductionVariable_0 <= last_0);
          tmp_6 = Unit_getInstance();
        }
        tmp_5 = tmp_6;
      }
      var tmp_7 = boxWidth_0._v;
      var tmp_8 = boxHeight_0._v;
      return $this$MeasurePolicy.layout$default_8ylrvs_k$(tmp_7, tmp_8, VOID, boxMeasurePolicy$lambda$lambda_1(placeables, measurables, $this$MeasurePolicy, boxWidth_0, boxHeight_0, $alignment));
    };
  }
  function Box$composable$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box$composable($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      DefaultBoxMeasurePolicy = boxMeasurePolicy(Companion_getInstance().get_TopStart_o4x792_k$(), false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function Column$composable(modifier, verticalArrangement, horizontalAlignment, content, $composer, $changed, $default) {
    _init_properties_Column_kt__s1zb92();
    var modifier_0 = modifier;
    var verticalArrangement_0 = verticalArrangement;
    var horizontalAlignment_0 = horizontalAlignment;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(860130704);
    sourceInformation($composer_0, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
    if (!(($default & 4) === 0))
      horizontalAlignment_0 = Companion_getInstance().get_Start_ih4i6x_k$();
    var measurePolicy = columnMeasurePolicy$composable(verticalArrangement_0, horizontalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = modifier_0;
    var tmp2_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp0_Layout$composable;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
    sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance_0();
    var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_1, 0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
    var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
    var $composer_2 = $composer_1;
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jk07k2_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
    } else {
      $composer_2.useNode_inlzo8_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
      tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
      tmp_0 = Unit_getInstance();
    }
    tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_2)), $composer_2, 112 & tmp3_ReusableComposeNode$composable >> 3);
    $composer_2.startReplaceableGroup_rp6air_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
    content(ColumnScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    sourceInformationMarkerEnd($composer_3);
    $composer_2.endReplaceableGroup_er37p7_k$();
    $composer_2.endNode_3mkr10_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function ColumnScope() {
  }
  function columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(47657763);
    sourceInformation($composer_0, 'C(columnMeasurePolicy$composable)P(1)103@4799L562:Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(47657763, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy$composable (Column.kt:97)');
    }
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().get_Top_18jj1w_k$()) ? equals(horizontalAlignment, Companion_getInstance().get_Start_ih4i6x_k$()) : false) {
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.changed_ga7h3f_k$(verticalArrangement) | $composer_1.changed_ga7h3f_k$(horizontalAlignment));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy$composable.<anonymous>' call
        var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
        var tmp1_arrangementSpacing = verticalArrangement.get_spacing_kuwe3v_k$();
        var tmp2_crossAxisAlignment = Companion_getInstance_7().horizontal_d2uuko_k$(horizontalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        var value = rowColumnMeasurePolicy(tmp0_orientation, columnMeasurePolicy$composable$lambda(verticalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  protoOf(ColumnScopeInstance).weight_eps4yz_k$ = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.ColumnScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.then_5qw5wu_k$(new LayoutWeightElement(weight, fill));
  };
  protoOf(ColumnScopeInstance).align_9ddj9c_k$ = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.then_5qw5wu_k$(new HorizontalAlignElement(alignment));
  };
  protoOf(ColumnScopeInstance).alignBy_radkhc_k$ = function (_this__u8e3s4, alignmentLine) {
    return _this__u8e3s4.then_5qw5wu_k$(new WithAlignmentLineElement(alignmentLine));
  };
  protoOf(ColumnScopeInstance).alignBy_knmuph_k$ = function (_this__u8e3s4, alignmentLineBlock) {
    return _this__u8e3s4.then_5qw5wu_k$(new WithAlignmentLineBlockElement(alignmentLineBlock));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    if (ColumnScopeInstance_instance == null)
      new ColumnScopeInstance();
    return ColumnScopeInstance_instance;
  }
  function DefaultColumnMeasurePolicy$lambda(totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
    _init_properties_Column_kt__s1zb92();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    Arrangement_getInstance().get_Top_18jj1w_k$().arrange_bbki90_k$(density, totalSize, size, outPosition);
    return Unit_getInstance();
  }
  function columnMeasurePolicy$composable$lambda($verticalArrangement) {
    return function (totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $verticalArrangement.arrange_bbki90_k$(density, totalSize, size, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().get_Top_18jj1w_k$().get_spacing_kuwe3v_k$();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().horizontal_d2uuko_k$(Companion_getInstance().get_Start_ih4i6x_k$());
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultColumnMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultColumnMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  function get_CROSS_AXIS_ALIGNMENT_TOP() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_TOP;
  }
  var CROSS_AXIS_ALIGNMENT_TOP;
  function get_CROSS_AXIS_ALIGNMENT_START() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_START;
  }
  var CROSS_AXIS_ALIGNMENT_START;
  var properties_initialized_FlowLayout_kt_edjldy;
  function _init_properties_FlowLayout_kt__ftkyso() {
    if (!properties_initialized_FlowLayout_kt_edjldy) {
      properties_initialized_FlowLayout_kt_edjldy = true;
      CROSS_AXIS_ALIGNMENT_TOP = Companion_getInstance_7().vertical_qzmr60_k$(Companion_getInstance().get_Top_18jj1w_k$());
      CROSS_AXIS_ALIGNMENT_START = Companion_getInstance_7().horizontal_d2uuko_k$(Companion_getInstance().get_Start_ih4i6x_k$());
    }
  }
  function LayoutScopeMarker() {
  }
  protoOf(LayoutScopeMarker).equals = function (other) {
    if (!(other instanceof LayoutScopeMarker))
      return false;
    other instanceof LayoutScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(LayoutScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LayoutScopeMarker).toString = function () {
    return '@androidx.compose.foundation.layout.LayoutScopeMarker()';
  };
  function offset_0(_this__u8e3s4, offset) {
    return _this__u8e3s4.then_5qw5wu_k$(new OffsetPxElement(offset, true, offset$lambda(offset)));
  }
  function OffsetPxElement(offset, rtlAware, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.offset_1 = offset;
    this.rtlAware_1 = rtlAware;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(OffsetPxElement).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(OffsetPxElement).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(OffsetPxElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(OffsetPxElement).create_md4cuc_k$ = function () {
    return new OffsetPxNode(this.offset_1, this.rtlAware_1);
  };
  protoOf(OffsetPxElement).update_xpywhs_k$ = function (node) {
    node.offset_1 = this.offset_1;
    node.rtlAware_1 = this.rtlAware_1;
  };
  protoOf(OffsetPxElement).update_c7m3nr_k$ = function (node) {
    return this.update_xpywhs_k$(node instanceof OffsetPxNode ? node : THROW_CCE());
  };
  protoOf(OffsetPxElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof OffsetPxElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.offset_1, otherModifier.offset_1) ? this.rtlAware_1 === otherModifier.rtlAware_1 : false;
  };
  protoOf(OffsetPxElement).toString = function () {
    return 'OffsetPxModifier(offset=' + this.offset_1 + ', rtlAware=' + this.rtlAware_1 + ')';
  };
  protoOf(OffsetPxElement).hashCode = function () {
    var result = hashCode(this.offset_1);
    result = imul(31, result) + (this.rtlAware_1 | 0) | 0;
    return result;
  };
  protoOf(OffsetPxElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function OffsetPxNode$measure$lambda(this$0, $this_measure, $placeable) {
    return function ($this$layout) {
      var offsetValue = this$0.offset_1($this_measure).packedValue_1;
      var tmp;
      if (this$0.rtlAware_1) {
        $this$layout.placeRelativeWithLayer$default_kkfq15_k$($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_getInstance();
      } else {
        $this$layout.placeWithLayer$default_2x3mot_k$($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function OffsetPxNode(offset, rtlAware) {
    Node.call(this);
    this.offset_1 = offset;
    this.rtlAware_1 = rtlAware;
  }
  protoOf(OffsetPxNode).set_offset_8u1sh4_k$ = function (_set____db54di) {
    this.offset_1 = _set____db54di;
  };
  protoOf(OffsetPxNode).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(OffsetPxNode).set_rtlAware_k1zma0_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(OffsetPxNode).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(OffsetPxNode).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_ikak0q_k$(constraints);
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_8ylrvs_k$(tmp, tmp_0, VOID, OffsetPxNode$measure$lambda(this, _this__u8e3s4, placeable));
  };
  function offset$lambda($offset) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('offset');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('offset', $offset);
      return Unit_getInstance();
    };
  }
  function padding(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return _this__u8e3s4.then_5qw5wu_k$(new PaddingElement(start, top, end, bottom, true, padding$lambda(start, top, end, bottom)));
  }
  function _get_left__d9qyp0($this) {
    return $this.left_1;
  }
  function _get_top__e6hfbw($this) {
    return $this.top_1;
  }
  function _get_right__bvz45n($this) {
    return $this.right_1;
  }
  function _get_bottom__w3218g($this) {
    return $this.bottom_1;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function Absolute_0(left, top, right, bottom) {
    var tmp;
    if (left === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = left;
    }
    left = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (right === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = right;
    }
    right = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.$stable_1 = 0;
  }
  protoOf(Absolute_0).calculateLeftPadding_71tp16_k$ = function (layoutDirection) {
    return this.left_1;
  };
  protoOf(Absolute_0).calculateTopPadding_ok52o3_k$ = function () {
    return this.top_1;
  };
  protoOf(Absolute_0).calculateRightPadding_wmvkqr_k$ = function (layoutDirection) {
    return this.right_1;
  };
  protoOf(Absolute_0).calculateBottomPadding_lu87vf_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Absolute_0).equals = function (other) {
    if (!(other instanceof Absolute_0))
      return false;
    return ((equals(this.left_1, other.left_1) ? equals(this.top_1, other.top_1) : false) ? equals(this.right_1, other.right_1) : false) ? equals(this.bottom_1, other.bottom_1) : false;
  };
  protoOf(Absolute_0).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.left_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.right_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(Absolute_0).toString = function () {
    return 'PaddingValues.Absolute(left=' + new Dp(this.left_1) + ', top=' + new Dp(this.top_1) + ', right=' + new Dp(this.right_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  function PaddingValues() {
  }
  function PaddingValues_0(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_1(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function PaddingValues_2(horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return new PaddingValuesImpl(horizontal, vertical, horizontal, vertical);
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.calculateLeftPadding_71tp16_k$(layoutDirection);
    } else {
      tmp = _this__u8e3s4.calculateRightPadding_wmvkqr_k$(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.calculateRightPadding_wmvkqr_k$(layoutDirection);
    } else {
      tmp = _this__u8e3s4.calculateLeftPadding_71tp16_k$(layoutDirection);
    }
    return tmp;
  }
  function padding_0(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.then_5qw5wu_k$(new PaddingValuesElement(paddingValues, padding$lambda_0(paddingValues)));
  }
  function PaddingElement(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    ModifierNodeElement.call(this);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
    this.inspectorInfo_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((((_Dp___get_value__impl__geb1vb(this.start_1) >= 0.0 ? true : equals(this.start_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) ? _Dp___get_value__impl__geb1vb(this.top_1) >= 0.0 ? true : equals(this.top_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) : false) ? _Dp___get_value__impl__geb1vb(this.end_1) >= 0.0 ? true : equals(this.end_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) : false) ? _Dp___get_value__impl__geb1vb(this.bottom_1) >= 0.0 ? true : equals(this.bottom_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) : false)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingElement.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PaddingElement).set_start_y0ds9a_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_start_dazqs_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingElement).set_top_fscbvf_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_top_qz4pg9_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingElement).set_end_5kctjp_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_end_wf34x9_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingElement).set_bottom_c7zkob_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_bottom_dp2gsx_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingElement).set_rtlAware_k1zma0_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(PaddingElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(PaddingElement).create_md4cuc_k$ = function () {
    return new PaddingNode(this.start_1, this.top_1, this.end_1, this.bottom_1, this.rtlAware_1);
  };
  protoOf(PaddingElement).update_3dir4i_k$ = function (node) {
    node.start_1 = this.start_1;
    node.top_1 = this.top_1;
    node.end_1 = this.end_1;
    node.bottom_1 = this.bottom_1;
    node.rtlAware_1 = this.rtlAware_1;
  };
  protoOf(PaddingElement).update_c7m3nr_k$ = function (node) {
    return this.update_3dir4i_k$(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.start_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.top_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.end_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
    result = imul(31, result) + (this.rtlAware_1 | 0) | 0;
    return result;
  };
  protoOf(PaddingElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return (((equals(this.start_1, otherModifierElement.start_1) ? equals(this.top_1, otherModifierElement.top_1) : false) ? equals(this.end_1, otherModifierElement.end_1) : false) ? equals(this.bottom_1, otherModifierElement.bottom_1) : false) ? this.rtlAware_1 === otherModifierElement.rtlAware_1 : false;
  };
  protoOf(PaddingElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
  }
  protoOf(PaddingValuesImpl).get_start_dazqs_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingValuesImpl).get_top_qz4pg9_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).get_end_wf34x9_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingValuesImpl).get_bottom_dp2gsx_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).calculateLeftPadding_71tp16_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.start_1 : this.end_1;
  };
  protoOf(PaddingValuesImpl).calculateTopPadding_ok52o3_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).calculateRightPadding_wmvkqr_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.end_1 : this.start_1;
  };
  protoOf(PaddingValuesImpl).calculateBottomPadding_lu87vf_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return ((equals(this.start_1, other.start_1) ? equals(this.top_1, other.top_1) : false) ? equals(this.end_1, other.end_1) : false) ? equals(this.bottom_1, other.bottom_1) : false;
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.start_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.end_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + new Dp(this.start_1) + ', top=' + new Dp(this.top_1) + ', end=' + new Dp(this.end_1) + ', bottom=' + new Dp(this.bottom_1) + ')';
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.paddingValues_1 = paddingValues;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).get_paddingValues_bdsiui_k$ = function () {
    return this.paddingValues_1;
  };
  protoOf(PaddingValuesElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(PaddingValuesElement).create_md4cuc_k$ = function () {
    return new PaddingValuesModifier(this.paddingValues_1);
  };
  protoOf(PaddingValuesElement).update_uobapx_k$ = function (node) {
    node.paddingValues_1 = this.paddingValues_1;
  };
  protoOf(PaddingValuesElement).update_c7m3nr_k$ = function (node) {
    return this.update_uobapx_k$(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.paddingValues_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.paddingValues_1, otherElement.paddingValues_1);
  };
  protoOf(PaddingValuesElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function PaddingNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        $this$layout.placeRelative$default_mxzlyj_k$($placeable, $this_measure.roundToPx_hl1u8z_k$(this$0.start_1), $this_measure.roundToPx_hl1u8z_k$(this$0.top_1));
        tmp = Unit_getInstance();
      } else {
        $this$layout.place$default_eachz5_k$($placeable, $this_measure.roundToPx_hl1u8z_k$(this$0.start_1), $this_measure.roundToPx_hl1u8z_k$(this$0.top_1));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function PaddingNode(start, top, end, bottom, rtlAware) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    Node.call(this);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
  }
  protoOf(PaddingNode).set_start_y0ds9a_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_start_dazqs_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingNode).set_top_fscbvf_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_top_qz4pg9_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingNode).set_end_5kctjp_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_end_wf34x9_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingNode).set_bottom_c7zkob_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_bottom_dp2gsx_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingNode).set_rtlAware_k1zma0_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(PaddingNode).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.roundToPx_hl1u8z_k$(this.start_1) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.end_1) | 0;
    var vertical = _this__u8e3s4.roundToPx_hl1u8z_k$(this.top_1) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.bottom_1) | 0;
    var placeable = measurable.measure_ikak0q_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_8ylrvs_k$(width, height, VOID, PaddingNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.place$default_eachz5_k$($placeable, $this_measure.roundToPx_hl1u8z_k$(this$0.paddingValues_1.calculateLeftPadding_71tp16_k$($this_measure.get_layoutDirection_7e37v0_k$())), $this_measure.roundToPx_hl1u8z_k$(this$0.paddingValues_1.calculateTopPadding_ok52o3_k$()));
      return Unit_getInstance();
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.paddingValues_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).set_paddingValues_wayku7_k$ = function (_set____db54di) {
    this.paddingValues_1 = _set____db54di;
  };
  protoOf(PaddingValuesModifier).get_paddingValues_bdsiui_k$ = function () {
    return this.paddingValues_1;
  };
  protoOf(PaddingValuesModifier).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.paddingValues_1.calculateLeftPadding_71tp16_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.paddingValues_1.calculateTopPadding_ok52o3_k$();
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.paddingValues_1.calculateRightPadding_wmvkqr_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.paddingValues_1.calculateBottomPadding_lu87vf_k$();
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
      tmp = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$3) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesModifier.measure.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var horizontal = _this__u8e3s4.roundToPx_hl1u8z_k$(this.paddingValues_1.calculateLeftPadding_71tp16_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$())) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.paddingValues_1.calculateRightPadding_wmvkqr_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$())) | 0;
    var vertical = _this__u8e3s4.roundToPx_hl1u8z_k$(this.paddingValues_1.calculateTopPadding_ok52o3_k$()) + _this__u8e3s4.roundToPx_hl1u8z_k$(this.paddingValues_1.calculateBottomPadding_lu87vf_k$()) | 0;
    var placeable = measurable.measure_ikak0q_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_8ylrvs_k$(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  function padding_1(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return _this__u8e3s4.then_5qw5wu_k$(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda_1(horizontal, vertical)));
  }
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('padding');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('start', new Dp($start));
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('top', new Dp($top));
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('end', new Dp($end));
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($paddingValues) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('padding');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('paddingValues', $paddingValues);
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($horizontal, $vertical) {
    return function ($this$$receiver) {
      $this$$receiver.set_name_1v3553_k$('padding');
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('horizontal', new Dp($horizontal));
      $this$$receiver.get_properties_zhllqc_k$().set_y753qn_k$('vertical', new Dp($vertical));
      return Unit_getInstance();
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function RowScope() {
  }
  function Row$composable(modifier, horizontalArrangement, verticalAlignment, content, $composer, $changed, $default) {
    _init_properties_Row_kt__jenljs();
    var modifier_0 = modifier;
    var horizontalArrangement_0 = horizontalArrangement;
    var verticalAlignment_0 = verticalAlignment;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-636825856);
    sourceInformation($composer_0, 'CC(Row$composable)P(2,1,3)77@3858L58,78@3921L130:Row.kt#2w3rfo');
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
    if (!(($default & 4) === 0))
      verticalAlignment_0 = Companion_getInstance().get_Top_18jj1w_k$();
    var measurePolicy = rowMeasurePolicy$composable(horizontalArrangement_0, verticalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp0_Layout$composable = modifier_0;
    var tmp2_Layout$composable = 112 & $changed << 3;
    var modifier_1 = tmp0_Layout$composable;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
    sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_1 = Companion_getInstance_0();
    var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_1, 0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
    var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
    var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
    var $composer_2 = $composer_1;
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jk07k2_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
    } else {
      $composer_2.useNode_inlzo8_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
      tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
      tmp_0 = Unit_getInstance();
    }
    tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_2)), $composer_2, 112 & tmp3_ReusableComposeNode$composable >> 3);
    $composer_2.startReplaceableGroup_rp6air_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, -1568371859, 'C79@3966L9:Row.kt#2w3rfo');
    content(RowScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    sourceInformationMarkerEnd($composer_3);
    $composer_2.endReplaceableGroup_er37p7_k$();
    $composer_2.endNode_3mkr10_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(270154611);
    sourceInformation($composer_0, 'C(rowMeasurePolicy$composable)107@4916L639:Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(270154611, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy$composable (Row.kt:101)');
    }
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().get_Start_ih4i6x_k$()) ? equals(verticalAlignment, Companion_getInstance().get_Top_18jj1w_k$()) : false) {
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.changed_ga7h3f_k$(horizontalArrangement) | $composer_1.changed_ga7h3f_k$(verticalAlignment));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy$composable.<anonymous>' call
        var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
        var tmp1_arrangementSpacing = horizontalArrangement.get_spacing_kuwe3v_k$();
        var tmp2_crossAxisAlignment = Companion_getInstance_7().vertical_qzmr60_k$(verticalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        var value = rowColumnMeasurePolicy(tmp0_orientation, rowMeasurePolicy$composable$lambda(horizontalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  protoOf(RowScopeInstance).weight_eps4yz_k$ = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.RowScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.then_5qw5wu_k$(new LayoutWeightElement(weight, fill));
  };
  protoOf(RowScopeInstance).align_h48q6q_k$ = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.then_5qw5wu_k$(new VerticalAlignElement(alignment));
  };
  protoOf(RowScopeInstance).alignBy_9842pq_k$ = function (_this__u8e3s4, alignmentLine) {
    return _this__u8e3s4.then_5qw5wu_k$(new WithAlignmentLineElement(alignmentLine));
  };
  protoOf(RowScopeInstance).alignByBaseline_xip4e8_k$ = function (_this__u8e3s4) {
    return this.alignBy_9842pq_k$(_this__u8e3s4, get_FirstBaseline());
  };
  protoOf(RowScopeInstance).alignBy_knmuph_k$ = function (_this__u8e3s4, alignmentLineBlock) {
    return _this__u8e3s4.then_5qw5wu_k$(new WithAlignmentLineBlockElement(alignmentLineBlock));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    if (RowScopeInstance_instance == null)
      new RowScopeInstance();
    return RowScopeInstance_instance;
  }
  function DefaultRowMeasurePolicy$lambda(totalSize, size, layoutDirection, density, outPosition) {
    _init_properties_Row_kt__jenljs();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    Arrangement_getInstance().get_Start_ih4i6x_k$().arrange_6sc983_k$(density, totalSize, size, layoutDirection, outPosition);
    return Unit_getInstance();
  }
  function rowMeasurePolicy$composable$lambda($horizontalArrangement) {
    return function (totalSize, size, layoutDirection, density, outPosition) {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $horizontalArrangement.arrange_6sc983_k$(density, totalSize, size, layoutDirection, outPosition);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().get_Start_ih4i6x_k$().get_spacing_kuwe3v_k$();
      var tmp2_crossAxisAlignment = Companion_getInstance_7().vertical_qzmr60_k$(Companion_getInstance().get_Top_18jj1w_k$());
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultRowMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultRowMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
  function values() {
    return [LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Horizontal':
        return LayoutOrientation_Horizontal_getInstance();
      case 'Vertical':
        return LayoutOrientation_Vertical_getInstance();
      default:
        LayoutOrientation_initEntries();
        THROW_ISE();
        break;
    }
  }
  var LayoutOrientation_entriesInitialized;
  function LayoutOrientation_initEntries() {
    if (LayoutOrientation_entriesInitialized)
      return Unit_getInstance();
    LayoutOrientation_entriesInitialized = true;
    LayoutOrientation_Horizontal_instance = new LayoutOrientation('Horizontal', 0);
    LayoutOrientation_Vertical_instance = new LayoutOrientation('Vertical', 1);
  }
  function LayoutOrientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
    Companion_instance = this;
    this.Center_1 = CenterCrossAxisAlignment_getInstance();
    this.Start_1 = StartCrossAxisAlignment_getInstance();
    this.End_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Companion).get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  protoOf(Companion).get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  protoOf(Companion).AlignmentLine_9o8d2s_k$ = function (alignmentLine) {
    return new AlignmentLineCrossAxisAlignment(new Value(alignmentLine));
  };
  protoOf(Companion).Relative_767dzl_k$ = function (alignmentLineProvider) {
    return new AlignmentLineCrossAxisAlignment(alignmentLineProvider);
  };
  protoOf(Companion).vertical_qzmr60_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(Companion).horizontal_d2uuko_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(CenterCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return size / 2 | 0;
  };
  var CenterCrossAxisAlignment_instance;
  function CenterCrossAxisAlignment_getInstance() {
    if (CenterCrossAxisAlignment_instance == null)
      new CenterCrossAxisAlignment();
    return CenterCrossAxisAlignment_instance;
  }
  function StartCrossAxisAlignment() {
    StartCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(StartCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? 0 : size;
  };
  var StartCrossAxisAlignment_instance;
  function StartCrossAxisAlignment_getInstance() {
    if (StartCrossAxisAlignment_instance == null)
      new StartCrossAxisAlignment();
    return StartCrossAxisAlignment_instance;
  }
  function EndCrossAxisAlignment() {
    EndCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(EndCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function AlignmentLineCrossAxisAlignment(alignmentLineProvider) {
    CrossAxisAlignment.call(this);
    this.alignmentLineProvider_1 = alignmentLineProvider;
  }
  protoOf(AlignmentLineCrossAxisAlignment).get_alignmentLineProvider_242uu9_k$ = function () {
    return this.alignmentLineProvider_1;
  };
  protoOf(AlignmentLineCrossAxisAlignment).get_isRelative_skgyhr_k$ = function () {
    return true;
  };
  protoOf(AlignmentLineCrossAxisAlignment).calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return this.alignmentLineProvider_1.calculateAlignmentLinePosition_92xdb9_k$(placeable);
  };
  protoOf(AlignmentLineCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    var alignmentLinePosition = this.alignmentLineProvider_1.calculateAlignmentLinePosition_92xdb9_k$(placeable);
    var tmp;
    if (!(alignmentLinePosition === Companion_getInstance_5().get_Unspecified_el0w4u_k$())) {
      var line = beforeCrossAxisAlignmentLine - alignmentLinePosition | 0;
      var tmp_0;
      if (layoutDirection.equals(LayoutDirection_Rtl_getInstance())) {
        tmp_0 = size - line | 0;
      } else {
        tmp_0 = line;
      }
      tmp = tmp_0;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.vertical_1 = vertical;
  }
  protoOf(VerticalCrossAxisAlignment).get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.vertical_1.align_1fj06d_k$(0, size);
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalCrossAxisAlignment).align_gldapf_k$ = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.horizontal_1.align_a5f08y_k$(0, size, layoutDirection);
  };
  function CrossAxisAlignment() {
    Companion_getInstance_7();
  }
  protoOf(CrossAxisAlignment).get_isRelative_skgyhr_k$ = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return null;
  };
  var SizeMode_Wrap_instance;
  var SizeMode_Expand_instance;
  function values_0() {
    return [SizeMode_Wrap_getInstance(), SizeMode_Expand_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Wrap':
        return SizeMode_Wrap_getInstance();
      case 'Expand':
        return SizeMode_Expand_getInstance();
      default:
        SizeMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SizeMode_entriesInitialized;
  function SizeMode_initEntries() {
    if (SizeMode_entriesInitialized)
      return Unit_getInstance();
    SizeMode_entriesInitialized = true;
    SizeMode_Wrap_instance = new SizeMode('Wrap', 0);
    SizeMode_Expand_instance = new SizeMode('Expand', 1);
  }
  function SizeMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function rowColumnMeasurePolicy(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment) {
    return new rowColumnMeasurePolicy$1(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment);
  }
  function get_$stableprop_2() {
    return 0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function Block(lineProviderBlock) {
    AlignmentLineProvider.call(this);
    this.lineProviderBlock_1 = lineProviderBlock;
    this.$stable_1 = 0;
  }
  protoOf(Block).get_lineProviderBlock_1gxdy7_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return this.lineProviderBlock_1(placeable);
  };
  protoOf(Block).component1_7eebsc_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).copy_o786p1_k$ = function (lineProviderBlock) {
    return new Block(lineProviderBlock);
  };
  protoOf(Block).copy$default_qzfj8e_k$ = function (lineProviderBlock, $super) {
    lineProviderBlock = lineProviderBlock === VOID ? this.lineProviderBlock_1 : lineProviderBlock;
    return $super === VOID ? this.copy_o786p1_k$(lineProviderBlock) : $super.copy_o786p1_k$.call(this, lineProviderBlock);
  };
  protoOf(Block).toString = function () {
    return 'Block(lineProviderBlock=' + this.lineProviderBlock_1 + ')';
  };
  protoOf(Block).hashCode = function () {
    return hashCode(this.lineProviderBlock_1);
  };
  protoOf(Block).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block))
      return false;
    var tmp0_other_with_cast = other instanceof Block ? other : THROW_CCE();
    if (!equals(this.lineProviderBlock_1, tmp0_other_with_cast.lineProviderBlock_1))
      return false;
    return true;
  };
  function Value(alignmentLine) {
    AlignmentLineProvider.call(this);
    this.alignmentLine_1 = alignmentLine;
    this.$stable_1 = 0;
  }
  protoOf(Value).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).calculateAlignmentLinePosition_92xdb9_k$ = function (placeable) {
    return placeable.get_4x1crv_k$(this.alignmentLine_1);
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).copy_d594q2_k$ = function (alignmentLine) {
    return new Value(alignmentLine);
  };
  protoOf(Value).copy$default_8i1ixr_k$ = function (alignmentLine, $super) {
    alignmentLine = alignmentLine === VOID ? this.alignmentLine_1 : alignmentLine;
    return $super === VOID ? this.copy_d594q2_k$(alignmentLine) : $super.copy_d594q2_k$.call(this, alignmentLine);
  };
  protoOf(Value).toString = function () {
    return 'Value(alignmentLine=' + this.alignmentLine_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    var tmp0_other_with_cast = other instanceof Value ? other : THROW_CCE();
    if (!equals(this.alignmentLine_1, tmp0_other_with_cast.alignmentLine_1))
      return false;
    return true;
  };
  function AlignmentLineProvider() {
  }
  function MinIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinWidth_1;
    }
    return tmp;
  }
  function MinIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMinHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMinHeight_1;
    }
    return tmp;
  }
  function MaxIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxWidth_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxWidth_1;
    }
    return tmp;
  }
  function MaxIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().HorizontalMaxHeight_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().VerticalMaxHeight_1;
    }
    return tmp;
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.minIntrinsicWidth_3wv0r6_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.minIntrinsicWidth_3wv0r6_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.minIntrinsicHeight_7ydhpj_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.minIntrinsicHeight_7ydhpj_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.maxIntrinsicHeight_cegb5z_k$(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.maxIntrinsicWidth_g1vwkc_k$(h);
  }
  function IntrinsicMeasureBlocks() {
    IntrinsicMeasureBlocks_instance = this;
    var tmp = this;
    tmp.HorizontalMinWidth_1 = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda;
    var tmp_0 = this;
    tmp_0.VerticalMinWidth_1 = IntrinsicMeasureBlocks$VerticalMinWidth$lambda;
    var tmp_1 = this;
    tmp_1.HorizontalMinHeight_1 = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda;
    var tmp_2 = this;
    tmp_2.VerticalMinHeight_1 = IntrinsicMeasureBlocks$VerticalMinHeight$lambda;
    var tmp_3 = this;
    tmp_3.HorizontalMaxWidth_1 = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda;
    var tmp_4 = this;
    tmp_4.VerticalMaxWidth_1 = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda;
    var tmp_5 = this;
    tmp_5.HorizontalMaxHeight_1 = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda;
    var tmp_6 = this;
    tmp_6.VerticalMaxHeight_1 = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda;
  }
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMinWidth_u55zsv_k$ = function () {
    return this.HorizontalMinWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMinWidth_gd1cdp_k$ = function () {
    return this.VerticalMinWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMinHeight_i7hp2s_k$ = function () {
    return this.HorizontalMinHeight_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMinHeight_h65uva_k$ = function () {
    return this.VerticalMinHeight_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMaxWidth_rnxox_k$ = function () {
    return this.HorizontalMaxWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMaxWidth_d0gpq9_k$ = function () {
    return this.VerticalMaxWidth_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_HorizontalMaxHeight_uzelcy_k$ = function () {
    return this.HorizontalMaxHeight_1;
  };
  protoOf(IntrinsicMeasureBlocks).get_VerticalMaxHeight_ty2r5g_k$ = function () {
    return this.VerticalMaxHeight_1;
  };
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    if (IntrinsicMeasureBlocks_instance == null)
      new IntrinsicMeasureBlocks();
    return IntrinsicMeasureBlocks_instance;
  }
  function intrinsicSize(children, intrinsicMainSize, intrinsicCrossSize, crossAxisAvailable, mainAxisSpacing, layoutOrientation, intrinsicOrientation) {
    var tmp;
    if (layoutOrientation.equals(intrinsicOrientation)) {
      tmp = intrinsicMainAxisSize(children, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    } else {
      tmp = intrinsicCrossAxisSize(children, intrinsicCrossSize, intrinsicMainSize, crossAxisAvailable, mainAxisSpacing);
    }
    return tmp;
  }
  function intrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing) {
    var weightUnitSpace = 0;
    var fixedSpace = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        var size = mainAxisSize(item, crossAxisAvailable);
        if (weight === 0.0) {
          fixedSpace = fixedSpace + size | 0;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          // Inline function 'kotlin.math.max' call
          var tmp1_max = weightUnitSpace;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt = size / weight;
          var tmp2_max = roundToInt(tmp0_roundToInt);
          weightUnitSpace = Math.max(tmp1_max, tmp2_max);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt_0 = weightUnitSpace * totalWeight;
    return (roundToInt(tmp0_roundToInt_0) + fixedSpace | 0) + imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing) {
    // Inline function 'kotlin.math.min' call
    var tmp0_min = imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
    var fixedSpace = Math.min(tmp0_min, mainAxisAvailable);
    var crossAxisMax = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        if (weight === 0.0) {
          // Inline function 'kotlin.math.min' call
          var tmp0_min_0 = mainAxisSize(item, Companion_getInstance_3().get_Infinity_rvchkf_k$());
          var tmp1_min = mainAxisAvailable - fixedSpace | 0;
          var mainAxisSpace = Math.min(tmp0_min_0, tmp1_min);
          fixedSpace = fixedSpace + mainAxisSpace | 0;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = crossAxisMax;
          var tmp3_max = crossAxisSize(item, mainAxisSpace);
          crossAxisMax = Math.max(tmp2_max, tmp3_max);
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (totalWeight === 0.0) {
      tmp = 0;
    } else if (mainAxisAvailable === Companion_getInstance_3().get_Infinity_rvchkf_k$()) {
      tmp = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      // Inline function 'kotlin.math.max' call
      var tmp1_max = mainAxisAvailable - fixedSpace | 0;
      var tmp2_roundToInt = Math.max(tmp1_max, 0) / totalWeight;
      tmp = roundToInt(tmp2_roundToInt);
    }
    var weightUnitSpace = tmp;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = children.get_fkrdnv_k$(index_0);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight_0 = get_weight(get_rowColumnParentData(item_0));
        if (weight_0 > 0.0) {
          // Inline function 'kotlin.math.max' call
          var tmp1_max_0 = crossAxisMax;
          var tmp_0;
          if (!(weightUnitSpace === Companion_getInstance_3().get_Infinity_rvchkf_k$())) {
            // Inline function 'kotlin.math.roundToInt' call
            var tmp0_roundToInt = weightUnitSpace * weight_0;
            tmp_0 = roundToInt(tmp0_roundToInt);
          } else {
            tmp_0 = Companion_getInstance_3().get_Infinity_rvchkf_k$();
          }
          var tmp2_max_0 = crossAxisSize(item_0, tmp_0);
          crossAxisMax = Math.max(tmp1_max_0, tmp2_max_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    return crossAxisMax;
  }
  function get_weight(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.weight_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    this.weight_1 = weight;
    this.fill_1 = fill;
    this.crossAxisAlignment_1 = crossAxisAlignment;
  }
  protoOf(RowColumnParentData).set_weight_m01gs8_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).set_fill_4bxxsn_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).set_crossAxisAlignment_lamcle_k$ = function (_set____db54di) {
    this.crossAxisAlignment_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_crossAxisAlignment_ebqiz9_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).component1_7eebsc_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).component2_7eebsb_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).component3_7eebsa_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).copy_he66y9_k$ = function (weight, fill, crossAxisAlignment) {
    return new RowColumnParentData(weight, fill, crossAxisAlignment);
  };
  protoOf(RowColumnParentData).copy$default_etqtut_k$ = function (weight, fill, crossAxisAlignment, $super) {
    weight = weight === VOID ? this.weight_1 : weight;
    fill = fill === VOID ? this.fill_1 : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? this.crossAxisAlignment_1 : crossAxisAlignment;
    return $super === VOID ? this.copy_he66y9_k$(weight, fill, crossAxisAlignment) : $super.copy_he66y9_k$.call(this, weight, fill, crossAxisAlignment);
  };
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.weight_1 + ', fill=' + this.fill_1 + ', crossAxisAlignment=' + this.crossAxisAlignment_1 + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(result, 31) + (this.fill_1 | 0) | 0;
    result = imul(result, 31) + (this.crossAxisAlignment_1 == null ? 0 : hashCode(this.crossAxisAlignment_1)) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.weight_1, tmp0_other_with_cast.weight_1))
      return false;
    if (!(this.fill_1 === tmp0_other_with_cast.fill_1))
      return false;
    if (!equals(this.crossAxisAlignment_1, tmp0_other_with_cast.crossAxisAlignment_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _OrientationIndependentConstraints___get_mainAxisMin__impl__e7yize($this) {
    return _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
  }
  function _OrientationIndependentConstraints___get_mainAxisMax__impl__qnszw8($this) {
    return _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
  }
  function _OrientationIndependentConstraints___get_crossAxisMin__impl__l4ltx7($this) {
    return _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
  }
  function _OrientationIndependentConstraints___get_crossAxisMax__impl__jr5oyf($this) {
    return _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf(Constraints_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax));
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_1(c, orientation) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__hi9lfi(c) : _Constraints___get_minHeight__impl__ev4bgx(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__uuyqc(c) : _Constraints___get_maxHeight__impl__dt3e8z(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__ev4bgx(c) : _Constraints___get_minWidth__impl__hi9lfi(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__dt3e8z(c) : _Constraints___get_maxWidth__impl__uuyqc(c));
  }
  function OrientationIndependentConstraints__stretchCrossAxis_impl_x272kb($this) {
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
    var tmp_0 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
    var tmp_1;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    if (!(_Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this)) === Companion_getInstance_3().get_Infinity_rvchkf_k$())) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
    }
    var tmp_2 = tmp_1;
    var tmp$ret$5;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    tmp$ret$5 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(tmp, tmp_0, tmp_2, tmp$ret$5);
  }
  function OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v($this, orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
      var tmp$ret$3;
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp$ret$3 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
      tmp = Constraints_0(tmp_0, tmp_1, tmp_2, tmp$ret$3);
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_3 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp_4 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      var tmp_5 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
      var tmp$ret$7;
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp$ret$7 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
      tmp = Constraints_0(tmp_3, tmp_4, tmp_5, tmp$ret$7);
    }
    return tmp;
  }
  function OrientationIndependentConstraints__maxWidth_impl_nicugx($this, orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    }
    return tmp;
  }
  function OrientationIndependentConstraints__maxHeight_impl_juif4e($this, orientation) {
    var tmp;
    if (orientation === LayoutOrientation_Horizontal_getInstance()) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
    }
    return tmp;
  }
  function OrientationIndependentConstraints__copy_impl_osm42c($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
  }
  function OrientationIndependentConstraints__copy$default_impl_4x4eq9($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax, $super) {
    var tmp;
    if (mainAxisMin === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      tmp = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
    } else {
      tmp = mainAxisMin;
    }
    mainAxisMin = tmp;
    var tmp_0;
    if (mainAxisMax === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp_0 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
    } else {
      tmp_0 = mainAxisMax;
    }
    mainAxisMax = tmp_0;
    var tmp_1;
    if (crossAxisMin === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
    } else {
      tmp_1 = crossAxisMin;
    }
    crossAxisMin = tmp_1;
    var tmp_2;
    if (crossAxisMax === VOID) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
    } else {
      tmp_2 = crossAxisMax;
    }
    crossAxisMax = tmp_2;
    var tmp_3;
    if ($super === VOID) {
      tmp_3 = OrientationIndependentConstraints__copy_impl_osm42c($this, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      var tmp_4 = new OrientationIndependentConstraints($this);
      var tmp_5 = $super;
      tmp_3 = (tmp_5 == null ? null : new OrientationIndependentConstraints(tmp_5)).copy_5fs0y7_k$.call(tmp_4, mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax).value_1;
    }
    return tmp_3;
  }
  function OrientationIndependentConstraints__toString_impl_h1z0yz($this) {
    return 'OrientationIndependentConstraints(value=' + new Constraints($this) + ')';
  }
  function OrientationIndependentConstraints__hashCode_impl_w7z47a($this) {
    return Constraints__hashCode_impl_ij7484($this);
  }
  function OrientationIndependentConstraints__equals_impl_b6og0u($this, other) {
    if (!(other instanceof OrientationIndependentConstraints))
      return false;
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other.value_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function OrientationIndependentConstraints(value) {
    this.value_1 = value;
  }
  protoOf(OrientationIndependentConstraints).toString = function () {
    return OrientationIndependentConstraints__toString_impl_h1z0yz(this.value_1);
  };
  protoOf(OrientationIndependentConstraints).hashCode = function () {
    return OrientationIndependentConstraints__hashCode_impl_w7z47a(this.value_1);
  };
  protoOf(OrientationIndependentConstraints).equals = function (other) {
    return OrientationIndependentConstraints__equals_impl_b6og0u(this.value_1, other);
  };
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isRelative_skgyhr_k$();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.fill_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    return _this__u8e3s4 == null ? null : _this__u8e3s4.crossAxisAlignment_1;
  }
  function LayoutWeightElement(weight, fill) {
    ModifierNodeElement.call(this);
    this.weight_1 = weight;
    this.fill_1 = fill;
  }
  protoOf(LayoutWeightElement).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(LayoutWeightElement).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(LayoutWeightElement).create_md4cuc_k$ = function () {
    return new LayoutWeightNode(this.weight_1, this.fill_1);
  };
  protoOf(LayoutWeightElement).update_tnfwsn_k$ = function (node) {
    node.weight_1 = this.weight_1;
    node.fill_1 = this.fill_1;
  };
  protoOf(LayoutWeightElement).update_c7m3nr_k$ = function (node) {
    return this.update_tnfwsn_k$(node instanceof LayoutWeightNode ? node : THROW_CCE());
  };
  protoOf(LayoutWeightElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$('weight');
    _this__u8e3s4.set_value_rj6yh0_k$(this.weight_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('weight', this.weight_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('fill', this.fill_1);
  };
  protoOf(LayoutWeightElement).hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(31, result) + (this.fill_1 | 0) | 0;
    return result;
  };
  protoOf(LayoutWeightElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof LayoutWeightElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.weight_1 === otherModifier.weight_1 ? this.fill_1 === otherModifier.fill_1 : false;
  };
  function HorizontalAlignElement(horizontal) {
    ModifierNodeElement.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalAlignElement).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalAlignElement).create_md4cuc_k$ = function () {
    return new HorizontalAlignNode(this.horizontal_1);
  };
  protoOf(HorizontalAlignElement).update_ogbici_k$ = function (node) {
    node.horizontal_1 = this.horizontal_1;
  };
  protoOf(HorizontalAlignElement).update_c7m3nr_k$ = function (node) {
    return this.update_ogbici_k$(node instanceof HorizontalAlignNode ? node : THROW_CCE());
  };
  protoOf(HorizontalAlignElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$('align');
    _this__u8e3s4.set_value_rj6yh0_k$(this.horizontal_1);
  };
  protoOf(HorizontalAlignElement).hashCode = function () {
    return hashCode(this.horizontal_1);
  };
  protoOf(HorizontalAlignElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof HorizontalAlignElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.horizontal_1, otherModifier.horizontal_1);
  };
  function WithAlignmentLineElement(alignmentLine) {
    ModifierNodeElement.call(this);
    this.alignmentLine_1 = alignmentLine;
  }
  protoOf(WithAlignmentLineElement).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(WithAlignmentLineElement).create_md4cuc_k$ = function () {
    return new WithAlignmentLineNode(this.alignmentLine_1);
  };
  protoOf(WithAlignmentLineElement).update_5mo31q_k$ = function (node) {
    node.alignmentLine_1 = this.alignmentLine_1;
  };
  protoOf(WithAlignmentLineElement).update_c7m3nr_k$ = function (node) {
    return this.update_5mo31q_k$(node instanceof WithAlignmentLineNode ? node : THROW_CCE());
  };
  protoOf(WithAlignmentLineElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$('alignBy');
    _this__u8e3s4.set_value_rj6yh0_k$(this.alignmentLine_1);
  };
  protoOf(WithAlignmentLineElement).hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  protoOf(WithAlignmentLineElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof WithAlignmentLineElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignmentLine_1, otherModifier.alignmentLine_1);
  };
  function WithAlignmentLineBlockElement(block) {
    ModifierNodeElement.call(this);
    this.block_1 = block;
  }
  protoOf(WithAlignmentLineBlockElement).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(WithAlignmentLineBlockElement).create_md4cuc_k$ = function () {
    return new WithAlignmentLineBlockNode(this.block_1);
  };
  protoOf(WithAlignmentLineBlockElement).update_g5jm81_k$ = function (node) {
    node.block_1 = this.block_1;
  };
  protoOf(WithAlignmentLineBlockElement).update_c7m3nr_k$ = function (node) {
    return this.update_g5jm81_k$(node instanceof WithAlignmentLineBlockNode ? node : THROW_CCE());
  };
  protoOf(WithAlignmentLineBlockElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof WithAlignmentLineBlockElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.block_1, otherModifier.block_1);
  };
  protoOf(WithAlignmentLineBlockElement).hashCode = function () {
    return hashCode(this.block_1);
  };
  protoOf(WithAlignmentLineBlockElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$('alignBy');
    _this__u8e3s4.set_value_rj6yh0_k$(this.block_1);
  };
  function LayoutWeightNode(weight, fill) {
    Node.call(this);
    this.weight_1 = weight;
    this.fill_1 = fill;
  }
  protoOf(LayoutWeightNode).set_weight_m01gs8_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  protoOf(LayoutWeightNode).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(LayoutWeightNode).set_fill_4bxxsn_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(LayoutWeightNode).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(LayoutWeightNode).modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp0_also = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.LayoutWeightNode.modifyParentData.<anonymous>' call
    tmp0_also.weight_1 = this.weight_1;
    tmp0_also.fill_1 = this.fill_1;
    return tmp0_also;
  };
  function HorizontalAlignNode(horizontal) {
    Node.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalAlignNode).set_horizontal_xxza2y_k$ = function (_set____db54di) {
    this.horizontal_1 = _set____db54di;
  };
  protoOf(HorizontalAlignNode).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalAlignNode).modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp0_also = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.HorizontalAlignNode.modifyParentData.<anonymous>' call
    tmp0_also.crossAxisAlignment_1 = Companion_getInstance_7().horizontal_d2uuko_k$(this.horizontal_1);
    return tmp0_also;
  };
  function WithAlignmentLineBlockNode(block) {
    SiblingsAlignedNode.call(this);
    this.block_1 = block;
  }
  protoOf(WithAlignmentLineBlockNode).set_block_4fbz8v_k$ = function (_set____db54di) {
    this.block_1 = _set____db54di;
  };
  protoOf(WithAlignmentLineBlockNode).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(WithAlignmentLineBlockNode).modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp0_also = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.WithAlignmentLineBlockNode.modifyParentData.<anonymous>' call
    tmp0_also.crossAxisAlignment_1 = Companion_getInstance_7().Relative_767dzl_k$(new Block(this.block_1));
    return tmp0_also;
  };
  function WithAlignmentLineNode(alignmentLine) {
    SiblingsAlignedNode.call(this);
    this.alignmentLine_1 = alignmentLine;
  }
  protoOf(WithAlignmentLineNode).set_alignmentLine_gaq75s_k$ = function (_set____db54di) {
    this.alignmentLine_1 = _set____db54di;
  };
  protoOf(WithAlignmentLineNode).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(WithAlignmentLineNode).modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp0_also = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.WithAlignmentLineNode.modifyParentData.<anonymous>' call
    tmp0_also.crossAxisAlignment_1 = Companion_getInstance_7().Relative_767dzl_k$(new Value(this.alignmentLine_1));
    return tmp0_also;
  };
  function SiblingsAlignedNode() {
    Node.call(this);
  }
  function VerticalAlignElement(alignment) {
    ModifierNodeElement.call(this);
    this.alignment_1 = alignment;
  }
  protoOf(VerticalAlignElement).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(VerticalAlignElement).create_md4cuc_k$ = function () {
    return new VerticalAlignNode(this.alignment_1);
  };
  protoOf(VerticalAlignElement).update_mdjo7g_k$ = function (node) {
    node.vertical_1 = this.alignment_1;
  };
  protoOf(VerticalAlignElement).update_c7m3nr_k$ = function (node) {
    return this.update_mdjo7g_k$(node instanceof VerticalAlignNode ? node : THROW_CCE());
  };
  protoOf(VerticalAlignElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$('align');
    _this__u8e3s4.set_value_rj6yh0_k$(this.alignment_1);
  };
  protoOf(VerticalAlignElement).hashCode = function () {
    return hashCode(this.alignment_1);
  };
  protoOf(VerticalAlignElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof VerticalAlignElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1);
  };
  function VerticalAlignNode(vertical) {
    Node.call(this);
    this.vertical_1 = vertical;
  }
  protoOf(VerticalAlignNode).set_vertical_n35y16_k$ = function (_set____db54di) {
    this.vertical_1 = _set____db54di;
  };
  protoOf(VerticalAlignNode).get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalAlignNode).modifyParentData_x7ztp7_k$ = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var tmp0_also = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.VerticalAlignNode.modifyParentData.<anonymous>' call
    tmp0_also.crossAxisAlignment_1 = Companion_getInstance_7().vertical_qzmr60_k$(this.vertical_1);
    return tmp0_also;
  };
  function rowColumnMeasurePolicy$o$measure$lambda($rowColumnMeasureHelper, $measureResult, $this_measure) {
    return function ($this$layout) {
      $rowColumnMeasureHelper.placeHelper_4kmipn_k$($this$layout, $measureResult, 0, $this_measure.get_layoutDirection_7e37v0_k$());
      return Unit_getInstance();
    };
  }
  function rowColumnMeasurePolicy$1($orientation, $arrangement, $arrangementSpacing, $crossAxisSize, $crossAxisAlignment) {
    this.$orientation_1 = $orientation;
    this.$arrangement_1 = $arrangement;
    this.$arrangementSpacing_1 = $arrangementSpacing;
    this.$crossAxisSize_1 = $crossAxisSize;
    this.$crossAxisAlignment_1 = $crossAxisAlignment;
  }
  protoOf(rowColumnMeasurePolicy$1).measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = measurables.get_size_woubt6_k$();
    var placeables = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var rowColumnMeasureHelper = new RowColumnMeasurementHelper(this.$orientation_1, this.$arrangement_1, this.$arrangementSpacing_1, this.$crossAxisSize_1, this.$crossAxisAlignment_1, measurables, placeables);
    var measureResult = rowColumnMeasureHelper.measureWithoutPlacing_lsn42g_k$(_this__u8e3s4, constraints, 0, measurables.get_size_woubt6_k$());
    var layoutWidth;
    var layoutHeight;
    if (this.$orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      layoutWidth = measureResult.get_mainAxisSize_vd88f0_k$();
      layoutHeight = measureResult.get_crossAxisSize_vn6o3d_k$();
    } else {
      layoutWidth = measureResult.get_crossAxisSize_vn6o3d_k$();
      layoutHeight = measureResult.get_mainAxisSize_vd88f0_k$();
    }
    return _this__u8e3s4.layout$default_8ylrvs_k$(layoutWidth, layoutHeight, VOID, rowColumnMeasurePolicy$o$measure$lambda(rowColumnMeasureHelper, measureResult, _this__u8e3s4));
  };
  protoOf(rowColumnMeasurePolicy$1).minIntrinsicWidth_h4fdo9_k$ = function (_this__u8e3s4, measurables, height) {
    return MinIntrinsicWidthMeasureBlock(this.$orientation_1)(measurables, height, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  protoOf(rowColumnMeasurePolicy$1).minIntrinsicHeight_n7gxym_k$ = function (_this__u8e3s4, measurables, width) {
    return MinIntrinsicHeightMeasureBlock(this.$orientation_1)(measurables, width, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  protoOf(rowColumnMeasurePolicy$1).maxIntrinsicWidth_4tn57d_k$ = function (_this__u8e3s4, measurables, height) {
    return MaxIntrinsicWidthMeasureBlock(this.$orientation_1)(measurables, height, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  protoOf(rowColumnMeasurePolicy$1).maxIntrinsicHeight_6rhckk_k$ = function (_this__u8e3s4, measurables, width) {
    return MaxIntrinsicHeightMeasureBlock(this.$orientation_1)(measurables, width, _this__u8e3s4.roundToPx_hl1u8z_k$(this.$arrangementSpacing_1));
  };
  function LayoutOrientation_Horizontal_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Horizontal_instance;
  }
  function LayoutOrientation_Vertical_getInstance() {
    LayoutOrientation_initEntries();
    return LayoutOrientation_Vertical_instance;
  }
  function SizeMode_Wrap_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Wrap_instance;
  }
  function SizeMode_Expand_getInstance() {
    SizeMode_initEntries();
    return SizeMode_Expand_instance;
  }
  function _get_rowColumnParentData__3b0p0t($this) {
    return $this.rowColumnParentData_1;
  }
  function mainAxisPositions($this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    $this.arrangement_1(mainAxisLayoutSize, childrenMainAxisSize, measureScope.get_layoutDirection_7e37v0_k$(), measureScope, mainAxisPositions);
    return mainAxisPositions;
  }
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, layoutDirection, beforeCrossAxisAlignmentLine) {
    var tmp1_elvis_lhs = parentData == null ? null : parentData.get_crossAxisAlignment_ebqiz9_k$();
    var childCrossAlignment = tmp1_elvis_lhs == null ? $this.crossAxisAlignment_1 : tmp1_elvis_lhs;
    var tmp = crossAxisLayoutSize - $this.crossAxisSize_chrzol_k$(placeable) | 0;
    var tmp_0;
    if ($this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_0 = LayoutDirection_Ltr_getInstance();
    } else {
      tmp_0 = layoutDirection;
    }
    return childCrossAlignment.align_gldapf_k$(tmp, tmp_0, placeable, beforeCrossAxisAlignmentLine);
  }
  function RowColumnMeasurementHelper(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment, measurables, placeables) {
    this.orientation_1 = orientation;
    this.arrangement_1 = arrangement;
    this.arrangementSpacing_1 = arrangementSpacing;
    this.crossAxisSize_1 = crossAxisSize;
    this.crossAxisAlignment_1 = crossAxisAlignment;
    this.measurables_1 = measurables;
    this.placeables_1 = placeables;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.measurables_1.get_size_woubt6_k$();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = get_rowColumnParentData(this.measurables_1.get_fkrdnv_k$(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.rowColumnParentData_1 = tmp_2;
  }
  protoOf(RowColumnMeasurementHelper).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(RowColumnMeasurementHelper).get_arrangement_fq5uht_k$ = function () {
    return this.arrangement_1;
  };
  protoOf(RowColumnMeasurementHelper).get_arrangementSpacing_kcgzh9_k$ = function () {
    return this.arrangementSpacing_1;
  };
  protoOf(RowColumnMeasurementHelper).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(RowColumnMeasurementHelper).get_crossAxisAlignment_ebqiz9_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnMeasurementHelper).get_measurables_g5hf9z_k$ = function () {
    return this.measurables_1;
  };
  protoOf(RowColumnMeasurementHelper).get_placeables_ojteit_k$ = function () {
    return this.placeables_1;
  };
  protoOf(RowColumnMeasurementHelper).mainAxisSize_e623hw_k$ = function (_this__u8e3s4) {
    return this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.get_width_j0q4yl_k$() : _this__u8e3s4.get_height_e7t92o_k$();
  };
  protoOf(RowColumnMeasurementHelper).crossAxisSize_chrzol_k$ = function (_this__u8e3s4) {
    return this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.get_height_e7t92o_k$() : _this__u8e3s4.get_width_j0q4yl_k$();
  };
  protoOf(RowColumnMeasurementHelper).measureWithoutPlacing_lsn42g_k$ = function (measureScope, constraints, startIndex, endIndex) {
    var constraints_0 = _OrientationIndependentConstraints___init__impl__1uqmhf_1(constraints, this.orientation_1);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
    var arrangementSpacingPx = toLong(measureScope.roundToPx_hl1u8z_k$(this.arrangementSpacing_1));
    var totalWeight = 0.0;
    var fixedSpace = new Long(0, 0);
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = this.measurables_1.get_fkrdnv_k$(i);
        var parentData = this.rowColumnParentData_1[i];
        var weight = get_weight(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
          var mainAxisMax = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
          var tmp1_elvis_lhs = this.placeables_1[i];
          var tmp;
          if (tmp1_elvis_lhs == null) {
            var tmp_0;
            if (mainAxisMax === Companion_getInstance_3().get_Infinity_rvchkf_k$()) {
              tmp_0 = Companion_getInstance_3().get_Infinity_rvchkf_k$();
            } else {
              tmp_0 = coerceAtLeast(numberToLong(mainAxisMax).minus_llf5ei_k$(fixedSpace), new Long(0, 0)).toInt_1tsl84_k$();
            }
            tmp = child.measure_ikak0q_k$(OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(OrientationIndependentConstraints__copy$default_impl_4x4eq9(constraints_0, 0, tmp_0, 0), this.orientation_1));
          } else {
            tmp = tmp1_elvis_lhs;
          }
          var placeable = tmp;
          // Inline function 'kotlin.math.min' call
          var tmp2_min = arrangementSpacingPx.toInt_1tsl84_k$();
          var tmp$ret$3;
          // Inline function 'kotlin.Long.minus' call
          var tmp0_minus = numberToLong(mainAxisMax).minus_llf5ei_k$(fixedSpace);
          var tmp1_minus = this.mainAxisSize_e623hw_k$(placeable);
          tmp$ret$3 = tmp0_minus.minus_llf5ei_k$(toLong(tmp1_minus));
          var tmp3_min = coerceAtLeast(tmp$ret$3, new Long(0, 0)).toInt_1tsl84_k$();
          spaceAfterLastNoWeight = Math.min(tmp2_min, tmp3_min);
          // Inline function 'kotlin.Long.plus' call
          var tmp4_plus = fixedSpace;
          var tmp5_plus = this.mainAxisSize_e623hw_k$(placeable) + spaceAfterLastNoWeight | 0;
          fixedSpace = tmp4_plus.plus_u6jwas_k$(toLong(tmp5_plus));
          // Inline function 'kotlin.math.max' call
          var tmp6_max = crossAxisSpace;
          var tmp7_max = this.crossAxisSize_chrzol_k$(placeable);
          crossAxisSpace = Math.max(tmp6_max, tmp7_max);
          anyAlignBy = anyAlignBy ? true : get_isRelative(parentData);
          this.placeables_1[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      // Inline function 'kotlin.Long.minus' call
      var tmp8_minus = fixedSpace;
      var tmp9_minus = spaceAfterLastNoWeight;
      fixedSpace = tmp8_minus.minus_llf5ei_k$(toLong(tmp9_minus));
    } else {
      var tmp_1;
      var tmp_2;
      if (totalWeight > 0.0) {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
        tmp_2 = !(_Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0)) === Companion_getInstance_3().get_Infinity_rvchkf_k$());
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
      } else {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
        tmp_1 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40(constraints_0));
      }
      var targetSpace = tmp_1;
      // Inline function 'kotlin.Long.times' call
      var tmp10_times = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = arrangementSpacingPx.times_2zfqpc_k$(toLong(tmp10_times));
      var remainingToTarget = coerceAtLeast(numberToLong(targetSpace).minus_llf5ei_k$(fixedSpace).minus_llf5ei_k$(arrangementSpacingTotal), new Long(0, 0));
      var tmp_3;
      if (totalWeight > 0) {
        // Inline function 'kotlin.Long.div' call
        var tmp11_div = totalWeight;
        tmp_3 = remainingToTarget.toFloat_jhbgwv_k$() / tmp11_div;
      } else {
        tmp_3 = 0.0;
      }
      var weightUnitSpace = tmp_3;
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.collections.sumOf' call
      var tmp12_sumOf = until(startIndex, endIndex);
      var sum = 0;
      var inductionVariable_0 = tmp12_sumOf.get_first_irdx8n_k$();
      var last = tmp12_sumOf.get_last_wopotb_k$();
      if (inductionVariable_0 <= last)
        do {
          var element = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_4 = sum;
          // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
          // Inline function 'kotlin.math.roundToInt' call
          var tmp0_roundToInt = weightUnitSpace * get_weight(this.rowColumnParentData_1[element]);
          sum = tmp_4 + roundToInt(tmp0_roundToInt) | 0;
        }
         while (!(element === last));
      var tmp13_minus = sum;
      var remainder = remainingToTarget.minus_llf5ei_k$(toLong(tmp13_minus));
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (this.placeables_1[i_0] == null) {
            var child_0 = this.measurables_1.get_fkrdnv_k$(i_0);
            var parentData_0 = this.rowColumnParentData_1[i_0];
            var weight_0 = get_weight(parentData_0);
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(weight_0 > 0)) {
              // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
              var message = 'All weights <= 0 should have placeables';
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            remainder = remainder.minus_llf5ei_k$(toLong(remainderUnit));
            // Inline function 'kotlin.math.max' call
            // Inline function 'kotlin.math.roundToInt' call
            var tmp16_roundToInt = weightUnitSpace * weight_0;
            var tmp17_max = roundToInt(tmp16_roundToInt) + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, tmp17_max);
            var tmp_5;
            if (get_fill(parentData_0) ? !(childMainAxisSize === Companion_getInstance_3().get_Infinity_rvchkf_k$()) : false) {
              tmp_5 = childMainAxisSize;
            } else {
              tmp_5 = 0;
            }
            var tmp_6 = tmp_5;
            var tmp$ret$21;
            // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
            tmp$ret$21 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
            var placeable_0 = child_0.measure_ikak0q_k$(OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(_OrientationIndependentConstraints___init__impl__1uqmhf_0(tmp_6, childMainAxisSize, 0, tmp$ret$21), this.orientation_1));
            weightedSpace = weightedSpace + this.mainAxisSize_e623hw_k$(placeable_0) | 0;
            // Inline function 'kotlin.math.max' call
            var tmp18_max = crossAxisSpace;
            var tmp19_max = this.crossAxisSize_chrzol_k$(placeable_0);
            crossAxisSpace = Math.max(tmp18_max, tmp19_max);
            anyAlignBy = anyAlignBy ? true : get_isRelative(parentData_0);
            this.placeables_1[i_0] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      var tmp_7 = numberToLong(weightedSpace).plus_u6jwas_k$(arrangementSpacingTotal);
      var tmp_8 = new Long(0, 0);
      var tmp$ret$23;
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      tmp$ret$23 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
      weightedSpace = coerceIn(tmp_7, tmp_8, numberToLong(tmp$ret$23).minus_llf5ei_k$(fixedSpace)).toInt_1tsl84_k$();
    }
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = ensureNotNull(this.placeables_1[i_1]);
          var parentData_1 = this.rowColumnParentData_1[i_1];
          var tmp4_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.calculateAlignmentLinePosition_92xdb9_k$(placeable_1);
          if (!(alignmentLinePosition == null)) {
            // Inline function 'kotlin.math.max' call
            var tmp20_max = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp21_max = !(alignmentLinePosition === Companion_getInstance_5().get_Unspecified_el0w4u_k$()) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(tmp20_max, tmp21_max);
            // Inline function 'kotlin.math.max' call
            var tmp22_max = afterCrossAxisAlignmentLine;
            var tmp_9 = this.crossAxisSize_chrzol_k$(placeable_1);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp_10;
            if (!(alignmentLinePosition === Companion_getInstance_5().get_Unspecified_el0w4u_k$())) {
              tmp_10 = alignmentLinePosition;
            } else {
              tmp_10 = this.crossAxisSize_chrzol_k$(placeable_1);
            }
            var tmp23_max = tmp_9 - tmp_10 | 0;
            afterCrossAxisAlignmentLine = Math.max(tmp22_max, tmp23_max);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'kotlin.math.max' call
    var tmp$ret$30;
    // Inline function 'kotlin.Long.plus' call
    var tmp24_plus = fixedSpace;
    var tmp25_plus = weightedSpace;
    tmp$ret$30 = tmp24_plus.plus_u6jwas_k$(toLong(tmp25_plus));
    var tmp26_max = coerceAtLeast(tmp$ret$30, new Long(0, 0)).toInt_1tsl84_k$();
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var tmp27_max = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40(constraints_0));
    var mainAxisLayoutSize = Math.max(tmp26_max, tmp27_max);
    var tmp_11;
    var tmp_12;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    if (!(_Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0)) === Companion_getInstance_3().get_Infinity_rvchkf_k$())) {
      tmp_12 = this.crossAxisSize_1.equals(SizeMode_Expand_getInstance());
    } else {
      tmp_12 = false;
    }
    if (tmp_12) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_11 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
    } else {
      // Inline function 'kotlin.math.max' call
      var tmp30_max = crossAxisSpace;
      // Inline function 'kotlin.math.max' call
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp28_max = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40(constraints_0));
      var tmp29_max = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
      var tmp31_max = Math.max(tmp28_max, tmp29_max);
      tmp_11 = Math.max(tmp30_max, tmp31_max);
    }
    var crossAxisLayoutSize = tmp_11;
    var tmp_13 = 0;
    var tmp_14 = new Int32Array(subSize);
    while (tmp_13 < subSize) {
      tmp_14[tmp_13] = 0;
      tmp_13 = tmp_13 + 1 | 0;
    }
    var mainAxisPositions_0 = tmp_14;
    var tmp_15 = 0;
    var tmp_16 = new Int32Array(subSize);
    while (tmp_15 < subSize) {
      var tmp_17 = tmp_15;
      tmp_16[tmp_17] = this.mainAxisSize_e623hw_k$(ensureNotNull(this.placeables_1[tmp_17 + startIndex | 0]));
      tmp_15 = tmp_15 + 1 | 0;
    }
    var childrenMainAxisSize = tmp_16;
    var tmp5_beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine;
    var tmp6_mainAxisPositions = mainAxisPositions(this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions_0, measureScope);
    return new RowColumnMeasureHelperResult(crossAxisLayoutSize, mainAxisLayoutSize, startIndex, endIndex, tmp5_beforeCrossAxisAlignmentLine, tmp6_mainAxisPositions);
  };
  protoOf(RowColumnMeasurementHelper).placeHelper_4kmipn_k$ = function (placeableScope, measureResult, crossAxisOffset, layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = measureResult.startIndex_1;
    var last = measureResult.endIndex_1;
    var tmp;
    if (inductionVariable < last) {
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var placeable = this.placeables_1[i];
        ensureNotNull(placeable);
        var mainAxisPositions = measureResult.mainAxisPositions_1;
        var tmp_0 = this.measurables_1.get_fkrdnv_k$(i).get_parentData_o87vnn_k$();
        var crossAxisPosition = getCrossAxisPosition(this, placeable, tmp_0 instanceof RowColumnParentData ? tmp_0 : null, measureResult.crossAxisSize_1, layoutDirection, measureResult.beforeCrossAxisAlignmentLine_1) + crossAxisOffset | 0;
        if (this.orientation_1.equals(LayoutOrientation_Horizontal_getInstance())) {
          placeableScope.place$default_eachz5_k$(placeable, mainAxisPositions[i - measureResult.startIndex_1 | 0], crossAxisPosition);
        } else {
          placeableScope.place$default_eachz5_k$(placeable, crossAxisPosition, mainAxisPositions[i - measureResult.startIndex_1 | 0]);
        }
      }
       while (inductionVariable < last);
      tmp = Unit_getInstance();
    }
  };
  function RowColumnMeasureHelperResult(crossAxisSize, mainAxisSize, startIndex, endIndex, beforeCrossAxisAlignmentLine, mainAxisPositions) {
    this.crossAxisSize_1 = crossAxisSize;
    this.mainAxisSize_1 = mainAxisSize;
    this.startIndex_1 = startIndex;
    this.endIndex_1 = endIndex;
    this.beforeCrossAxisAlignmentLine_1 = beforeCrossAxisAlignmentLine;
    this.mainAxisPositions_1 = mainAxisPositions;
  }
  protoOf(RowColumnMeasureHelperResult).get_crossAxisSize_vn6o3d_k$ = function () {
    return this.crossAxisSize_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_mainAxisSize_vd88f0_k$ = function () {
    return this.mainAxisSize_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_startIndex_oi1lp5_k$ = function () {
    return this.startIndex_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_endIndex_3lslfk_k$ = function () {
    return this.endIndex_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_beforeCrossAxisAlignmentLine_gqpg9q_k$ = function () {
    return this.beforeCrossAxisAlignmentLine_1;
  };
  protoOf(RowColumnMeasureHelperResult).get_mainAxisPositions_av3ffr_k$ = function () {
    return this.mainAxisPositions_1;
  };
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function get_FillWholeMaxHeight() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  function get_WrapContentWidthCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthCenter;
  }
  var WrapContentWidthCenter;
  function get_WrapContentWidthStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthStart;
  }
  var WrapContentWidthStart;
  function get_WrapContentHeightCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function get_WrapContentSizeCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function get_WrapContentSizeTopStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function _get_direction__hwzary($this) {
    return $this.direction_1;
  }
  function _get_fraction__t0yzux($this) {
    return $this.fraction_1;
  }
  function _get_inspectorName__omemen($this) {
    return $this.inspectorName_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).width_gnd1pk_k$ = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion_0).height_163sgp_k$ = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion_0).size_8tgb5f_k$ = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function FillElement(direction, fraction, inspectorName) {
    Companion_getInstance_8();
    ModifierNodeElement.call(this);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
    this.inspectorName_1 = inspectorName;
  }
  protoOf(FillElement).create_md4cuc_k$ = function () {
    return new FillNode(this.direction_1, this.fraction_1);
  };
  protoOf(FillElement).update_undta0_k$ = function (node) {
    node.direction_1 = this.direction_1;
    node.fraction_1 = this.fraction_1;
  };
  protoOf(FillElement).update_c7m3nr_k$ = function (node) {
    return this.update_undta0_k$(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$(this.inspectorName_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('fraction', this.fraction_1);
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.direction_1.equals(other.direction_1))
      return false;
    if (!(this.fraction_1 === other.fraction_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.fraction_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.align_a5f08y_k$(0, _IntSize___get_width__impl__d9yl4o(size.packedValue_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.align_1fj06d_k$(0, _IntSize___get_height__impl__prv63b(size.packedValue_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.align_f85h4l_k$(Companion_getInstance_6().get_Zero_4ip44w_k$(), size.packedValue_1, layoutDirection));
    };
  }
  function _get_direction__hwzary_0($this) {
    return $this.direction_1;
  }
  function _get_unbounded__vdc64z($this) {
    return $this.unbounded_1;
  }
  function _get_alignmentCallback__m7n7k9($this) {
    return $this.alignmentCallback_1;
  }
  function _get_align__jw21zo($this) {
    return $this.align_1;
  }
  function _get_inspectorName__omemen_0($this) {
    return $this.inspectorName_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).width_z5a5g_k$ = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_1).height_agk7zn_k$ = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_1).size_cbdbg2_k$ = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    Companion_getInstance_9();
    ModifierNodeElement.call(this);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
    this.align_1 = align;
    this.inspectorName_1 = inspectorName;
  }
  protoOf(WrapContentElement).create_md4cuc_k$ = function () {
    return new WrapContentNode(this.direction_1, this.unbounded_1, this.alignmentCallback_1);
  };
  protoOf(WrapContentElement).update_2pw0es_k$ = function (node) {
    node.direction_1 = this.direction_1;
    node.unbounded_1 = this.unbounded_1;
    node.alignmentCallback_1 = this.alignmentCallback_1;
  };
  protoOf(WrapContentElement).update_c7m3nr_k$ = function (node) {
    return this.update_2pw0es_k$(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$(this.inspectorName_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('align', this.align_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('unbounded', this.unbounded_1);
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.direction_1.equals(other.direction_1))
      return false;
    if (!(this.unbounded_1 === other.unbounded_1))
      return false;
    if (!equals(this.align_1, other.align_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(31, result) + (this.unbounded_1 | 0) | 0;
    result = imul(31, result) + hashCode(this.align_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_mxzlyj_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
  }
  protoOf(FillNode).set_direction_zaviip_k$ = function (_set____db54di) {
    this.direction_1 = _set____db54di;
  };
  protoOf(FillNode).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(FillNode).set_fraction_1erpa_k$ = function (_set____db54di) {
    this.fraction_1 = _set____db54di;
  };
  protoOf(FillNode).get_fraction_bvkonf_k$ = function () {
    return this.fraction_1;
  };
  protoOf(FillNode).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) ? !this.direction_1.equals(Direction_Vertical_getInstance()) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.fraction_1;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var width = coerceIn_0(tmp$ret$0, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) ? !this.direction_1.equals(Direction_Horizontal_getInstance()) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.fraction_1;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var height = coerceIn_0(tmp$ret$1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.measure_ikak0q_k$(Constraints_0(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_8ylrvs_k$(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  function values_1() {
    return [Direction_Vertical_getInstance(), Direction_Horizontal_getInstance(), Direction_Both_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Vertical':
        return Direction_Vertical_getInstance();
      case 'Horizontal':
        return Direction_Horizontal_getInstance();
      case 'Both':
        return Direction_Both_getInstance();
      default:
        Direction_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.alignmentCallback_1(new IntSize_0(IntSize($wrapperWidth - $placeable.get_width_j0q4yl_k$() | 0, $wrapperHeight - $placeable.get_height_e7t92o_k$() | 0)), $this_measure.get_layoutDirection_7e37v0_k$()).packedValue_1;
      $this$layout.place$default_b921p1_k$($placeable, position);
      return Unit_getInstance();
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).set_direction_zaviip_k$ = function (_set____db54di) {
    this.direction_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(WrapContentNode).set_unbounded_bqiif6_k$ = function (_set____db54di) {
    this.unbounded_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_unbounded_x1kds5_k$ = function () {
    return this.unbounded_1;
  };
  protoOf(WrapContentNode).set_alignmentCallback_65sffq_k$ = function (_set____db54di) {
    this.alignmentCallback_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_alignmentCallback_mp8hup_k$ = function () {
    return this.alignmentCallback_1;
  };
  protoOf(WrapContentNode).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.direction_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.direction_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.direction_1.equals(Direction_Vertical_getInstance()) ? this.unbounded_1 : false) {
      tmp = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.direction_1.equals(Direction_Horizontal_getInstance()) ? this.unbounded_1 : false) {
      tmp_0 = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var wrapperWidth = coerceIn_0(placeable.get_width_j0q4yl_k$(), _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn_0(placeable.get_height_e7t92o_k$(), _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.layout$default_8ylrvs_k$(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function width(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeElement(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function fillMaxHeight(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_5qw5wu_k$(fraction === 1.0 ? get_FillWholeMaxHeight() : Companion_getInstance_8().height_163sgp_k$(fraction));
  }
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : min;
    max = max === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : max;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function widthIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : min;
    max = max === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : max;
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = widthIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeElement(min, VOID, max, VOID, true, tmp$ret$0));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_5qw5wu_k$(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function wrapContentHeight(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance().get_CenterVertically_dmkbbz_k$() : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance().get_CenterVertically_dmkbbz_k$()) ? !unbounded : false) {
      tmp = get_WrapContentHeightCenter();
    } else if (equals(align, Companion_getInstance().get_Top_18jj1w_k$()) ? !unbounded : false) {
      tmp = get_WrapContentHeightTop();
    } else {
      tmp = Companion_getInstance_9().height_agk7zn_k$(align, unbounded);
    }
    return _this__u8e3s4.then_5qw5wu_k$(tmp);
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_5qw5wu_k$(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_getInstance_8().size_8tgb5f_k$(fraction));
  }
  function _get_minWidth__tgi6yf($this) {
    return $this.minWidth_1;
  }
  function _get_minHeight__j32lk8($this) {
    return $this.minHeight_1;
  }
  function _get_maxWidth__golao9($this) {
    return $this.maxWidth_1;
  }
  function _get_maxHeight__b29xja($this) {
    return $this.maxHeight_1;
  }
  function _get_enforceIncoming__5fpgix($this) {
    return $this.enforceIncoming_1;
  }
  function _get_inspectorInfo__ojvtbg($this) {
    return $this.inspectorInfo_1;
  }
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : maxHeight;
    ModifierNodeElement.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(SizeElement).create_md4cuc_k$ = function () {
    return new SizeNode(this.minWidth_1, this.minHeight_1, this.maxWidth_1, this.maxHeight_1, this.enforceIncoming_1);
  };
  protoOf(SizeElement).update_qudmva_k$ = function (node) {
    node.minWidth_1 = this.minWidth_1;
    node.minHeight_1 = this.minHeight_1;
    node.maxWidth_1 = this.maxWidth_1;
    node.maxHeight_1 = this.maxHeight_1;
    node.enforceIncoming_1 = this.enforceIncoming_1;
  };
  protoOf(SizeElement).update_c7m3nr_k$ = function (node) {
    return this.update_qudmva_k$(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.minWidth_1, other.minWidth_1))
      return false;
    if (!equals(this.minHeight_1, other.minHeight_1))
      return false;
    if (!equals(this.maxWidth_1, other.maxWidth_1))
      return false;
    if (!equals(this.maxHeight_1, other.maxHeight_1))
      return false;
    if (!(this.enforceIncoming_1 === other.enforceIncoming_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.minWidth_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.maxWidth_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.maxHeight_1) | 0;
    result = imul(31, result) + (this.enforceIncoming_1 | 0) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minHeight;
    ModifierNodeElement.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).get_minWidth_iptkt4_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(UnspecifiedConstraintsElement).get_minHeight_6vlbo5_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsElement).create_md4cuc_k$ = function () {
    return new UnspecifiedConstraintsNode(this.minWidth_1, this.minHeight_1);
  };
  protoOf(UnspecifiedConstraintsElement).update_m3trb0_k$ = function (node) {
    node.minWidth_1 = this.minWidth_1;
    node.minHeight_1 = this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsElement).update_c7m3nr_k$ = function (node) {
    return this.update_m3trb0_k$(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$('defaultMinSize');
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('minWidth', new Dp(this.minWidth_1));
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('minHeight', new Dp(this.minHeight_1));
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.minWidth_1, other.minWidth_1) ? equals(this.minHeight_1, other.minHeight_1) : false;
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.minWidth_1), 31) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
  };
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.maxWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
      tmp = coerceAtLeast_0(_this__u8e3s4.roundToPx_hl1u8z_k$($this.maxWidth_1), 0);
    } else {
      tmp = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    }
    var maxWidth = tmp;
    var tmp_0;
    if (!equals($this.maxHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
      tmp_0 = coerceAtLeast_0(_this__u8e3s4.roundToPx_hl1u8z_k$($this.maxHeight_1), 0);
    } else {
      tmp_0 = Companion_getInstance_3().get_Infinity_rvchkf_k$();
    }
    var maxHeight = tmp_0;
    var tmp_1;
    if (!equals($this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
      // Inline function 'kotlin.let' call
      var tmp0_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$($this.minWidth_1), maxWidth), 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      tmp_1 = !(tmp0_let === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? tmp0_let : 0;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_2;
    if (!equals($this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
      // Inline function 'kotlin.let' call
      var tmp1_let = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$($this.minHeight_1), maxHeight), 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      tmp_2 = !(tmp1_let === Companion_getInstance_3().get_Infinity_rvchkf_k$()) ? tmp1_let : 0;
    } else {
      tmp_2 = 0;
    }
    var minHeight = tmp_2;
    return Constraints_0(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_mxzlyj_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : maxHeight;
    Node.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
  }
  protoOf(SizeNode).set_minWidth_7r3ge_k$ = function (_set____db54di) {
    this.minWidth_1 = _set____db54di;
  };
  protoOf(SizeNode).get_minWidth_iptkt4_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(SizeNode).set_minHeight_wj2pnt_k$ = function (_set____db54di) {
    this.minHeight_1 = _set____db54di;
  };
  protoOf(SizeNode).get_minHeight_6vlbo5_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(SizeNode).set_maxWidth_nlli7g_k$ = function (_set____db54di) {
    this.maxWidth_1 = _set____db54di;
  };
  protoOf(SizeNode).get_maxWidth_fctp2y_k$ = function () {
    return this.maxWidth_1;
  };
  protoOf(SizeNode).set_maxHeight_nvz6rp_k$ = function (_set____db54di) {
    this.maxHeight_1 = _set____db54di;
  };
  protoOf(SizeNode).get_maxHeight_2b1zct_k$ = function () {
    return this.maxHeight_1;
  };
  protoOf(SizeNode).set_enforceIncoming_q1t0la_k$ = function (_set____db54di) {
    this.enforceIncoming_1 = _set____db54di;
  };
  protoOf(SizeNode).get_enforceIncoming_ilwx4x_k$ = function () {
    return this.enforceIncoming_1;
  };
  protoOf(SizeNode).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    var tmp0_let = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SizeNode.measure.<anonymous>' call
    var tmp;
    if (this.enforceIncoming_1) {
      tmp = constrain(constraints, tmp0_let);
    } else {
      var tmp_0;
      if (!equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(tmp0_let);
      } else {
        tmp_0 = coerceAtMost(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(tmp0_let));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.maxWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(tmp0_let);
      } else {
        tmp_1 = coerceAtLeast_0(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(tmp0_let));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(tmp0_let);
      } else {
        tmp_2 = coerceAtMost(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.maxHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$())) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(tmp0_let);
      } else {
        tmp_3 = coerceAtLeast_0(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(tmp0_let));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints_0(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var tmp_4 = placeable.get_width_j0q4yl_k$();
    var tmp_5 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_8ylrvs_k$(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  protoOf(SizeNode).minIntrinsicWidth_72od57_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.minIntrinsicWidth_3wv0r6_k$(height));
    }
    return tmp;
  };
  protoOf(SizeNode).minIntrinsicHeight_zr6pa_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.minIntrinsicHeight_7ydhpj_k$(width));
    }
    return tmp;
  };
  protoOf(SizeNode).maxIntrinsicWidth_o2xntp_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.maxIntrinsicWidth_g1vwkc_k$(height));
    }
    return tmp;
  };
  protoOf(SizeNode).maxIntrinsicHeight_t0gmkg_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.maxIntrinsicHeight_cegb5z_k$(width));
    }
    return tmp;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_mxzlyj_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_o6a50p_k$() : minHeight;
    Node.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).set_minWidth_7r3ge_k$ = function (_set____db54di) {
    this.minWidth_1 = _set____db54di;
  };
  protoOf(UnspecifiedConstraintsNode).get_minWidth_iptkt4_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(UnspecifiedConstraintsNode).set_minHeight_wj2pnt_k$ = function (_set____db54di) {
    this.minHeight_1 = _set____db54di;
  };
  protoOf(UnspecifiedConstraintsNode).get_minHeight_6vlbo5_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsNode).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 : false) {
      tmp = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$(this.minWidth_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false) {
      tmp_2 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.roundToPx_hl1u8z_k$(this.minHeight_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints_0(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.measure_ikak0q_k$(wrappedConstraints);
    var tmp_3 = placeable.get_width_j0q4yl_k$();
    var tmp_4 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_8ylrvs_k$(tmp_3, tmp_4, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsNode).minIntrinsicWidth_72od57_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.minIntrinsicWidth_3wv0r6_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minWidth_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).maxIntrinsicWidth_o2xntp_k$ = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.maxIntrinsicWidth_g1vwkc_k$(height), !equals(this.minWidth_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minWidth_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).minIntrinsicHeight_zr6pa_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.minIntrinsicHeight_7ydhpj_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minHeight_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).maxIntrinsicHeight_t0gmkg_k$ = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.maxIntrinsicHeight_cegb5z_k$(width), !equals(this.minHeight_1, Companion_getInstance_4().get_Unspecified_o6a50p_k$()) ? _this__u8e3s4.roundToPx_hl1u8z_k$(this.minHeight_1) : 0);
  };
  function requiredSize(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    return requiredSize_0(_this__u8e3s4, _DpSize___get_width__impl__o3d5gt(size), _DpSize___get_height__impl__5xueo2(size));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_5qw5wu_k$(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_getInstance_8().width_gnd1pk_k$(fraction));
  }
  function requiredSize_0(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = requiredSize$lambda(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new SizeElement(width, height, width, height, false, tmp0_inspectorInfo));
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('width');
      $this$null.set_value_rj6yh0_k$(new Dp($width));
      return Unit_getInstance();
    };
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('size');
      $this$null.set_value_rj6yh0_k$(new Dp($size));
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('heightIn');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('min', new Dp($min));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function widthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('widthIn');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('min', new Dp($min));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('height');
      $this$null.set_value_rj6yh0_k$(new Dp($height));
      return Unit_getInstance();
    };
  }
  function requiredSize$lambda($width, $height) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('requiredSize');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('width', new Dp($width));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('height', new Dp($height));
      return Unit_getInstance();
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_getInstance_8().width_gnd1pk_k$(1.0);
      FillWholeMaxHeight = Companion_getInstance_8().height_163sgp_k$(1.0);
      FillWholeMaxSize = Companion_getInstance_8().size_8tgb5f_k$(1.0);
      WrapContentWidthCenter = Companion_getInstance_9().width_z5a5g_k$(Companion_getInstance().get_CenterHorizontally_97ab0v_k$(), false);
      WrapContentWidthStart = Companion_getInstance_9().width_z5a5g_k$(Companion_getInstance().get_Start_ih4i6x_k$(), false);
      WrapContentHeightCenter = Companion_getInstance_9().height_agk7zn_k$(Companion_getInstance().get_CenterVertically_dmkbbz_k$(), false);
      WrapContentHeightTop = Companion_getInstance_9().height_agk7zn_k$(Companion_getInstance().get_Top_18jj1w_k$(), false);
      WrapContentSizeCenter = Companion_getInstance_9().size_cbdbg2_k$(Companion_getInstance().get_Center_3arb0i_k$(), false);
      WrapContentSizeTopStart = Companion_getInstance_9().size_cbdbg2_k$(Companion_getInstance().get_TopStart_o4x792_k$(), false);
    }
  }
  function Spacer$composable(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(344887062);
    sourceInformation($composer_0, 'C(Spacer$composable)39@1433L68:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(344887062, $changed, -1, 'androidx.compose.foundation.layout.Spacer$composable (Spacer.kt:38)');
    }
    var tmp0_measurePolicy = SpacerMeasurePolicy_getInstance();
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var tmp1_Layout$composable = 384 | 112 & $changed << 3;
    var modifier_0 = modifier;
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(1725976829);
    sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
    if (!(0 === 0))
      modifier_0 = Companion_getInstance_0();
    var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_1, 0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
    var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
    var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp1_Layout$composable << 9;
    var $composer_2 = $composer_1;
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jk07k2_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
    } else {
      $composer_2.useNode_inlzo8_k$();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss(tmp4_anonymous, tmp0_measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
      tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
      tmp_0 = Unit_getInstance();
    }
    tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_2)), $composer_2, 112 & tmp3_ReusableComposeNode$composable >> 3);
    $composer_2.startReplaceableGroup_rp6air_k$(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Spacer$composable.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, 918629639, 'C:Spacer.kt#2w3rfo');
    sourceInformationMarkerEnd($composer_3);
    $composer_2.endReplaceableGroup_er37p7_k$();
    $composer_2.endNode_3mkr10_k$();
    $composer_1.endReplaceableGroup_er37p7_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function SpacerMeasurePolicy() {
    SpacerMeasurePolicy_instance = this;
  }
  protoOf(SpacerMeasurePolicy).measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.layout$default_8ylrvs_k$(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    if (SpacerMeasurePolicy_instance == null)
      new SpacerMeasurePolicy();
    return SpacerMeasurePolicy_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function WindowInsets() {
  }
  function WindowInsets_0(left, top, right, bottom) {
    left = left === VOID ? 0 : left;
    top = top === VOID ? 0 : top;
    right = right === VOID ? 0 : right;
    bottom = bottom === VOID ? 0 : bottom;
    return new FixedIntInsets(left, top, right, bottom);
  }
  function _get_leftVal__7g7e4p($this) {
    return $this.leftVal_1;
  }
  function _get_topVal__iy0agv($this) {
    return $this.topVal_1;
  }
  function _get_rightVal__1fxr7e($this) {
    return $this.rightVal_1;
  }
  function _get_bottomVal__lks4yj($this) {
    return $this.bottomVal_1;
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.leftVal_1 = leftVal;
    this.topVal_1 = topVal;
    this.rightVal_1 = rightVal;
    this.bottomVal_1 = bottomVal;
  }
  protoOf(FixedIntInsets).getLeft_1vhdo6_k$ = function (density, layoutDirection) {
    return this.leftVal_1;
  };
  protoOf(FixedIntInsets).getTop_6mwa89_k$ = function (density) {
    return this.topVal_1;
  };
  protoOf(FixedIntInsets).getRight_tjbxo3_k$ = function (density, layoutDirection) {
    return this.rightVal_1;
  };
  protoOf(FixedIntInsets).getBottom_smmq2d_k$ = function (density) {
    return this.bottomVal_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.leftVal_1 + ', top=' + this.topVal_1 + ', right=' + this.rightVal_1 + ', bottom=' + this.bottomVal_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return ((this.leftVal_1 === other.leftVal_1 ? this.topVal_1 === other.topVal_1 : false) ? this.rightVal_1 === other.rightVal_1 : false) ? this.bottomVal_1 === other.bottomVal_1 : false;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.leftVal_1;
    result = imul(31, result) + this.topVal_1 | 0;
    result = imul(31, result) + this.rightVal_1 | 0;
    result = imul(31, result) + this.bottomVal_1 | 0;
    return result;
  };
  function asPaddingValues(_this__u8e3s4, density) {
    return new InsetsPaddingValues(_this__u8e3s4, density);
  }
  function only(_this__u8e3s4, sides) {
    return new LimitInsets(_this__u8e3s4, sides);
  }
  function _WindowInsetsSides___init__impl__nuufbx(value) {
    return value;
  }
  function _get_value__a43j40_0($this) {
    return $this;
  }
  function WindowInsetsSides__plus_impl_9q9m59($this, sides) {
    return _WindowInsetsSides___init__impl__nuufbx(_get_value__a43j40_0($this) | _get_value__a43j40_0(sides));
  }
  function WindowInsetsSides__hasAny_impl_v1wjnf($this, sides) {
    return !((_get_value__a43j40_0($this) & _get_value__a43j40_0(sides)) === 0);
  }
  function WindowInsetsSides__toString_impl_h23h9x($this) {
    return 'WindowInsetsSides(' + valueToString($this) + ')';
  }
  function valueToString($this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.WindowInsetsSides.valueToString.<anonymous>' call
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_11().Start_1)) === _get_value__a43j40_0(Companion_getInstance_11().Start_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(tmp0_apply, 'Start');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_11().Left_1)) === _get_value__a43j40_0(Companion_getInstance_11().Left_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(tmp0_apply, 'Left');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_11().Top_1)) === _get_value__a43j40_0(Companion_getInstance_11().Top_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(tmp0_apply, 'Top');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_11().End_1)) === _get_value__a43j40_0(Companion_getInstance_11().End_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(tmp0_apply, 'End');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_11().Right_1)) === _get_value__a43j40_0(Companion_getInstance_11().Right_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(tmp0_apply, 'Right');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_11().Bottom_1)) === _get_value__a43j40_0(Companion_getInstance_11().Bottom_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(tmp0_apply, 'Bottom');
    }
    return tmp0_apply.toString();
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.AllowLeftInLtr_1 = _WindowInsetsSides___init__impl__nuufbx(8);
    this.AllowRightInLtr_1 = _WindowInsetsSides___init__impl__nuufbx(4);
    this.AllowLeftInRtl_1 = _WindowInsetsSides___init__impl__nuufbx(2);
    this.AllowRightInRtl_1 = _WindowInsetsSides___init__impl__nuufbx(1);
    this.Start_1 = WindowInsetsSides__plus_impl_9q9m59(this.AllowLeftInLtr_1, this.AllowRightInRtl_1);
    this.End_1 = WindowInsetsSides__plus_impl_9q9m59(this.AllowRightInLtr_1, this.AllowLeftInRtl_1);
    this.Top_1 = _WindowInsetsSides___init__impl__nuufbx(16);
    this.Bottom_1 = _WindowInsetsSides___init__impl__nuufbx(32);
    this.Left_1 = WindowInsetsSides__plus_impl_9q9m59(this.AllowLeftInLtr_1, this.AllowLeftInRtl_1);
    this.Right_1 = WindowInsetsSides__plus_impl_9q9m59(this.AllowRightInLtr_1, this.AllowRightInRtl_1);
    this.Horizontal_1 = WindowInsetsSides__plus_impl_9q9m59(this.Left_1, this.Right_1);
    this.Vertical_1 = WindowInsetsSides__plus_impl_9q9m59(this.Top_1, this.Bottom_1);
  }
  protoOf(Companion_3).get_AllowLeftInLtr_z6bqs0_k$ = function () {
    return this.AllowLeftInLtr_1;
  };
  protoOf(Companion_3).get_AllowRightInLtr_qda7vp_k$ = function () {
    return this.AllowRightInLtr_1;
  };
  protoOf(Companion_3).get_AllowLeftInRtl_no45ao_k$ = function () {
    return this.AllowLeftInRtl_1;
  };
  protoOf(Companion_3).get_AllowRightInRtl_ev2med_k$ = function () {
    return this.AllowRightInRtl_1;
  };
  protoOf(Companion_3).get_Start_1kznzp_k$ = function () {
    return this.Start_1;
  };
  protoOf(Companion_3).get_End_80zks_k$ = function () {
    return this.End_1;
  };
  protoOf(Companion_3).get_Top_1wf4ki_k$ = function () {
    return this.Top_1;
  };
  protoOf(Companion_3).get_Bottom_cuo0x2_k$ = function () {
    return this.Bottom_1;
  };
  protoOf(Companion_3).get_Left_rycwg2_k$ = function () {
    return this.Left_1;
  };
  protoOf(Companion_3).get_Right_5ptjd1_k$ = function () {
    return this.Right_1;
  };
  protoOf(Companion_3).get_Horizontal_q3fnk1_k$ = function () {
    return this.Horizontal_1;
  };
  protoOf(Companion_3).get_Vertical_bjmedt_k$ = function () {
    return this.Vertical_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_11() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function WindowInsetsSides__hashCode_impl_w7unwc($this) {
    return $this;
  }
  function WindowInsetsSides__equals_impl_fwz4tk($this, other) {
    if (!(other instanceof WindowInsetsSides))
      return false;
    if (!($this === (other instanceof WindowInsetsSides ? other.value_1 : THROW_CCE())))
      return false;
    return true;
  }
  function valueToString$_anonymous_$appendPlus_uyjmpe($this_buildString, text) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength($this_buildString) > 0) {
      $this_buildString.append_t8oh9e_k$(_Char___init__impl__6a9atx(43));
    }
    $this_buildString.append_ssq29y_k$(text);
  }
  function WindowInsetsSides(value) {
    Companion_getInstance_11();
    this.value_1 = value;
  }
  protoOf(WindowInsetsSides).toString = function () {
    return WindowInsetsSides__toString_impl_h23h9x(this.value_1);
  };
  protoOf(WindowInsetsSides).hashCode = function () {
    return WindowInsetsSides__hashCode_impl_w7unwc(this.value_1);
  };
  protoOf(WindowInsetsSides).equals = function (other) {
    return WindowInsetsSides__equals_impl_fwz4tk(this.value_1, other);
  };
  function _get_density__l5pazb($this) {
    return $this.density_1;
  }
  function InsetsPaddingValues(insets, density) {
    this.insets_1 = insets;
    this.density_1 = density;
  }
  protoOf(InsetsPaddingValues).get_insets_etzdhb_k$ = function () {
    return this.insets_1;
  };
  protoOf(InsetsPaddingValues).calculateLeftPadding_71tp16_k$ = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    var tmp0_with = this.density_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateLeftPadding.<anonymous>' call
    return tmp0_with.toDp_2eugbd_k$(this.insets_1.getLeft_1vhdo6_k$(tmp0_with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).calculateTopPadding_ok52o3_k$ = function () {
    // Inline function 'kotlin.with' call
    var tmp0_with = this.density_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateTopPadding.<anonymous>' call
    return tmp0_with.toDp_2eugbd_k$(this.insets_1.getTop_6mwa89_k$(tmp0_with));
  };
  protoOf(InsetsPaddingValues).calculateRightPadding_wmvkqr_k$ = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    var tmp0_with = this.density_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateRightPadding.<anonymous>' call
    return tmp0_with.toDp_2eugbd_k$(this.insets_1.getRight_tjbxo3_k$(tmp0_with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).calculateBottomPadding_lu87vf_k$ = function () {
    // Inline function 'kotlin.with' call
    var tmp0_with = this.density_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateBottomPadding.<anonymous>' call
    return tmp0_with.toDp_2eugbd_k$(this.insets_1.getBottom_smmq2d_k$(tmp0_with));
  };
  protoOf(InsetsPaddingValues).toString = function () {
    return 'InsetsPaddingValues(insets=' + this.insets_1 + ', density=' + this.density_1 + ')';
  };
  protoOf(InsetsPaddingValues).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingValues)) {
      return false;
    }
    return equals(this.insets_1, other.insets_1) ? equals(this.density_1, other.density_1) : false;
  };
  protoOf(InsetsPaddingValues).hashCode = function () {
    var result = hashCode(this.insets_1);
    result = imul(31, result) + hashCode(this.density_1) | 0;
    return result;
  };
  function LimitInsets(insets, sides) {
    this.insets_1 = insets;
    this.sides_1 = sides;
  }
  protoOf(LimitInsets).get_insets_etzdhb_k$ = function () {
    return this.insets_1;
  };
  protoOf(LimitInsets).get_sides_f2t2gr_k$ = function () {
    return this.sides_1;
  };
  protoOf(LimitInsets).getLeft_1vhdo6_k$ = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_11().AllowLeftInLtr_1;
    } else {
      tmp = Companion_getInstance_11().AllowLeftInRtl_1;
    }
    var layoutDirectionSide = tmp;
    var allowLeft = WindowInsetsSides__hasAny_impl_v1wjnf(this.sides_1, layoutDirectionSide);
    var tmp_0;
    if (allowLeft) {
      tmp_0 = this.insets_1.getLeft_1vhdo6_k$(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).getTop_6mwa89_k$ = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.sides_1, Companion_getInstance_11().Top_1) ? this.insets_1.getTop_6mwa89_k$(density) : 0;
  };
  protoOf(LimitInsets).getRight_tjbxo3_k$ = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_11().AllowRightInLtr_1;
    } else {
      tmp = Companion_getInstance_11().AllowRightInRtl_1;
    }
    var layoutDirectionSide = tmp;
    var allowRight = WindowInsetsSides__hasAny_impl_v1wjnf(this.sides_1, layoutDirectionSide);
    var tmp_0;
    if (allowRight) {
      tmp_0 = this.insets_1.getRight_tjbxo3_k$(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).getBottom_smmq2d_k$ = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.sides_1, Companion_getInstance_11().Bottom_1) ? this.insets_1.getBottom_smmq2d_k$(density) : 0;
  };
  protoOf(LimitInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LimitInsets)) {
      return false;
    }
    return equals(this.insets_1, other.insets_1) ? this.sides_1 === other.sides_1 : false;
  };
  protoOf(LimitInsets).hashCode = function () {
    var result = hashCode(this.insets_1);
    result = imul(31, result) + WindowInsetsSides__hashCode_impl_w7unwc(this.sides_1) | 0;
    return result;
  };
  protoOf(LimitInsets).toString = function () {
    return '(' + this.insets_1 + ' only ' + new WindowInsetsSides(this.sides_1) + ')';
  };
  function exclude(_this__u8e3s4, insets) {
    return new ExcludeInsets(_this__u8e3s4, insets);
  }
  function union(_this__u8e3s4, insets) {
    return new UnionInsets(_this__u8e3s4, insets);
  }
  function _get_included__8zasx($this) {
    return $this.included_1;
  }
  function _get_excluded__imysvz($this) {
    return $this.excluded_1;
  }
  function ExcludeInsets(included, excluded) {
    this.included_1 = included;
    this.excluded_1 = excluded;
  }
  protoOf(ExcludeInsets).getLeft_1vhdo6_k$ = function (density, layoutDirection) {
    return coerceAtLeast_0(this.included_1.getLeft_1vhdo6_k$(density, layoutDirection) - this.excluded_1.getLeft_1vhdo6_k$(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).getTop_6mwa89_k$ = function (density) {
    return coerceAtLeast_0(this.included_1.getTop_6mwa89_k$(density) - this.excluded_1.getTop_6mwa89_k$(density) | 0, 0);
  };
  protoOf(ExcludeInsets).getRight_tjbxo3_k$ = function (density, layoutDirection) {
    return coerceAtLeast_0(this.included_1.getRight_tjbxo3_k$(density, layoutDirection) - this.excluded_1.getRight_tjbxo3_k$(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).getBottom_smmq2d_k$ = function (density) {
    return coerceAtLeast_0(this.included_1.getBottom_smmq2d_k$(density) - this.excluded_1.getBottom_smmq2d_k$(density) | 0, 0);
  };
  protoOf(ExcludeInsets).toString = function () {
    return '(' + this.included_1 + ' - ' + this.excluded_1 + ')';
  };
  protoOf(ExcludeInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ExcludeInsets)) {
      return false;
    }
    return equals(other.included_1, this.included_1) ? equals(other.excluded_1, this.excluded_1) : false;
  };
  protoOf(ExcludeInsets).hashCode = function () {
    return imul(31, hashCode(this.included_1)) + hashCode(this.excluded_1) | 0;
  };
  function _get_first__hkbbvj($this) {
    return $this.first_1;
  }
  function _get_second__njbah($this) {
    return $this.second_1;
  }
  function UnionInsets(first, second) {
    this.first_1 = first;
    this.second_1 = second;
  }
  protoOf(UnionInsets).getLeft_1vhdo6_k$ = function (density, layoutDirection) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.first_1.getLeft_1vhdo6_k$(density, layoutDirection);
    var tmp1_maxOf = this.second_1.getLeft_1vhdo6_k$(density, layoutDirection);
    return Math.max(tmp0_maxOf, tmp1_maxOf);
  };
  protoOf(UnionInsets).getTop_6mwa89_k$ = function (density) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.first_1.getTop_6mwa89_k$(density);
    var tmp1_maxOf = this.second_1.getTop_6mwa89_k$(density);
    return Math.max(tmp0_maxOf, tmp1_maxOf);
  };
  protoOf(UnionInsets).getRight_tjbxo3_k$ = function (density, layoutDirection) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.first_1.getRight_tjbxo3_k$(density, layoutDirection);
    var tmp1_maxOf = this.second_1.getRight_tjbxo3_k$(density, layoutDirection);
    return Math.max(tmp0_maxOf, tmp1_maxOf);
  };
  protoOf(UnionInsets).getBottom_smmq2d_k$ = function (density) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = this.first_1.getBottom_smmq2d_k$(density);
    var tmp1_maxOf = this.second_1.getBottom_smmq2d_k$(density);
    return Math.max(tmp0_maxOf, tmp1_maxOf);
  };
  protoOf(UnionInsets).hashCode = function () {
    return hashCode(this.first_1) + imul(hashCode(this.second_1), 31) | 0;
  };
  protoOf(UnionInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof UnionInsets)) {
      return false;
    }
    return equals(other.first_1, this.first_1) ? equals(other.second_1, this.second_1) : false;
  };
  protoOf(UnionInsets).toString = function () {
    return '(' + this.first_1 + ' \u222A ' + this.second_1 + ')';
  };
  function get_ModifierLocalConsumedWindowInsets() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  function windowInsetsPadding(_this__u8e3s4, insets) {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = windowInsetsPadding$lambda(insets);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(new InsetsPaddingModifier(insets, tmp$ret$0));
  }
  function _get_insets__v8zl7($this) {
    return $this.insets_1;
  }
  function _set_unconsumedInsets__kb2lgg($this, _set____db54di) {
    unconsumedInsets$factory();
    return $this.unconsumedInsets$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_unconsumedInsets__8s1nmc($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    unconsumedInsets$factory_0();
    return $this.unconsumedInsets$delegate_1.get_value_j01efc_k$();
  }
  function _set_consumedInsets__2lpxax($this, _set____db54di) {
    consumedInsets$factory();
    return $this.consumedInsets$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_consumedInsets__s4tdcd($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    consumedInsets$factory_0();
    return $this.consumedInsets$delegate_1.get_value_j01efc_k$();
  }
  function InsetsPaddingModifier$_init_$lambda_43mml5($insets) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('InsetsPaddingModifier');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('insets', $insets);
      return Unit_getInstance();
    };
  }
  function InsetsPaddingModifier$measure$lambda($placeable, $left, $top) {
    return function ($this$layout) {
      $this$layout.place$default_eachz5_k$($placeable, $left, $top);
      return Unit_getInstance();
    };
  }
  function InsetsPaddingModifier(insets, inspectorInfo) {
    var tmp;
    if (inspectorInfo === VOID) {
      // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
      var tmp_0;
      if (get_isDebugInspectorInfoEnabled()) {
        tmp_0 = InsetsPaddingModifier$_init_$lambda_43mml5(insets);
      } else {
        tmp_0 = get_NoInspectorInfo();
      }
      tmp = tmp_0;
    } else {
      tmp = inspectorInfo;
    }
    inspectorInfo = tmp;
    InspectorValueInfo.call(this, inspectorInfo);
    this.insets_1 = insets;
    this.unconsumedInsets$delegate_1 = mutableStateOf(this.insets_1);
    this.consumedInsets$delegate_1 = mutableStateOf(this.insets_1);
  }
  protoOf(InsetsPaddingModifier).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var left = _get_unconsumedInsets__8s1nmc(this).getLeft_1vhdo6_k$(_this__u8e3s4, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
    var top = _get_unconsumedInsets__8s1nmc(this).getTop_6mwa89_k$(_this__u8e3s4);
    var right = _get_unconsumedInsets__8s1nmc(this).getRight_tjbxo3_k$(_this__u8e3s4, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
    var bottom = _get_unconsumedInsets__8s1nmc(this).getBottom_smmq2d_k$(_this__u8e3s4);
    var horizontal = left + right | 0;
    var vertical = top + bottom | 0;
    var childConstraints = offset(constraints, -horizontal | 0, -vertical | 0);
    var placeable = measurable.measure_ikak0q_k$(childConstraints);
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_8ylrvs_k$(width, height, VOID, InsetsPaddingModifier$measure$lambda(placeable, left, top));
  };
  protoOf(InsetsPaddingModifier).onModifierLocalsUpdated_dk8grv_k$ = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var consumed = scope.get_current_76jhw1_k$(get_ModifierLocalConsumedWindowInsets());
    _set_unconsumedInsets__kb2lgg(this, exclude(this.insets_1, consumed));
    _set_consumedInsets__2lpxax(this, union(consumed, this.insets_1));
  };
  protoOf(InsetsPaddingModifier).get_key_18j28a_k$ = function () {
    return get_ModifierLocalConsumedWindowInsets();
  };
  protoOf(InsetsPaddingModifier).get_value_j01efc_k$ = function () {
    return _get_consumedInsets__s4tdcd(this);
  };
  protoOf(InsetsPaddingModifier).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingModifier)) {
      return false;
    }
    return equals(other.insets_1, this.insets_1);
  };
  protoOf(InsetsPaddingModifier).hashCode = function () {
    return hashCode(this.insets_1);
  };
  function ModifierLocalConsumedWindowInsets$lambda() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return WindowInsets_0(0, 0, 0, 0);
  }
  function windowInsetsPadding$lambda($insets) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('windowInsetsPadding');
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('insets', $insets);
      return Unit_getInstance();
    };
  }
  function unconsumedInsets$factory() {
    return getPropertyCallableRef('unconsumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_unconsumedInsets__8s1nmc(receiver);
    }, function (receiver, value) {
      return _set_unconsumedInsets__kb2lgg(receiver, value);
    });
  }
  function unconsumedInsets$factory_0() {
    return getPropertyCallableRef('unconsumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_unconsumedInsets__8s1nmc(receiver);
    }, function (receiver, value) {
      return _set_unconsumedInsets__kb2lgg(receiver, value);
    });
  }
  function consumedInsets$factory() {
    return getPropertyCallableRef('consumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_consumedInsets__s4tdcd(receiver);
    }, function (receiver, value) {
      return _set_consumedInsets__2lpxax(receiver, value);
    });
  }
  function consumedInsets$factory_0() {
    return getPropertyCallableRef('consumedInsets', 1, KMutableProperty1, function (receiver) {
      return _get_consumedInsets__s4tdcd(receiver);
    }, function (receiver, value) {
      return _set_consumedInsets__2lpxax(receiver, value);
    });
  }
  var properties_initialized_WindowInsetsPadding_kt_k80ef9;
  function _init_properties_WindowInsetsPadding_kt__2qyozr() {
    if (!properties_initialized_WindowInsetsPadding_kt_k80ef9) {
      properties_initialized_WindowInsetsPadding_kt_k80ef9 = true;
      ModifierLocalConsumedWindowInsets = modifierLocalOf(ModifierLocalConsumedWindowInsets$lambda);
    }
  }
  function NoOp() {
  }
  protoOf(NoOp).equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    other instanceof NoOp || THROW_CCE();
    return true;
  };
  protoOf(NoOp).hashCode = function () {
    return 0;
  };
  protoOf(NoOp).toString = function () {
    return '@androidx.compose.foundation.layout.internal.NoOp()';
  };
  function get_ZeroInsets() {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return ZeroInsets;
  }
  var ZeroInsets;
  function get_statusBars(_this__u8e3s4) {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return get_ZeroInsets();
  }
  function get_systemBars(_this__u8e3s4) {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return get_ZeroInsets();
  }
  var properties_initialized_WindowInsets_notMobile_kt_v7y701;
  function _init_properties_WindowInsets_notMobile_kt__cg4w4z() {
    if (!properties_initialized_WindowInsets_notMobile_kt_v7y701) {
      properties_initialized_WindowInsets_notMobile_kt_v7y701 = true;
      ZeroInsets = WindowInsets_0(0, 0, 0, 0);
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Absolute$Left$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Center$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Right$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceBetween$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceEvenly$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceAround$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Start$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$End$1).get_spacing_kuwe3v_k$ = get_spacing;
  protoOf(Arrangement$Top$1).get_spacing_kuwe3v_k$ = get_spacing_0;
  protoOf(Arrangement$Bottom$1).get_spacing_kuwe3v_k$ = get_spacing_0;
  protoOf(BoxChildDataElement).foldIn_u08fre_k$ = foldIn;
  protoOf(BoxChildDataElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(BoxChildDataElement).any_hrontp_k$ = any;
  protoOf(BoxChildDataElement).all_ctzlrs_k$ = all;
  protoOf(BoxChildDataElement).then_5qw5wu_k$ = then;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  protoOf(ColumnScopeInstance).weight$default_cijtzh_k$ = weight$default;
  protoOf(OffsetPxElement).foldIn_u08fre_k$ = foldIn;
  protoOf(OffsetPxElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(OffsetPxElement).any_hrontp_k$ = any;
  protoOf(OffsetPxElement).all_ctzlrs_k$ = all;
  protoOf(OffsetPxElement).then_5qw5wu_k$ = then;
  protoOf(OffsetPxNode).minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  protoOf(OffsetPxNode).minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  protoOf(OffsetPxNode).maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  protoOf(OffsetPxNode).maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  protoOf(PaddingElement).foldIn_u08fre_k$ = foldIn;
  protoOf(PaddingElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(PaddingElement).any_hrontp_k$ = any;
  protoOf(PaddingElement).all_ctzlrs_k$ = all;
  protoOf(PaddingElement).then_5qw5wu_k$ = then;
  protoOf(PaddingValuesElement).foldIn_u08fre_k$ = foldIn;
  protoOf(PaddingValuesElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(PaddingValuesElement).any_hrontp_k$ = any;
  protoOf(PaddingValuesElement).all_ctzlrs_k$ = all;
  protoOf(PaddingValuesElement).then_5qw5wu_k$ = then;
  protoOf(PaddingNode).minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  protoOf(PaddingNode).minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  protoOf(PaddingNode).maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  protoOf(PaddingNode).maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  protoOf(RowScopeInstance).weight$default_ygsn3h_k$ = weight$default_0;
  protoOf(LayoutWeightElement).foldIn_u08fre_k$ = foldIn;
  protoOf(LayoutWeightElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(LayoutWeightElement).any_hrontp_k$ = any;
  protoOf(LayoutWeightElement).all_ctzlrs_k$ = all;
  protoOf(LayoutWeightElement).then_5qw5wu_k$ = then;
  protoOf(HorizontalAlignElement).foldIn_u08fre_k$ = foldIn;
  protoOf(HorizontalAlignElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(HorizontalAlignElement).any_hrontp_k$ = any;
  protoOf(HorizontalAlignElement).all_ctzlrs_k$ = all;
  protoOf(HorizontalAlignElement).then_5qw5wu_k$ = then;
  protoOf(WithAlignmentLineElement).foldIn_u08fre_k$ = foldIn;
  protoOf(WithAlignmentLineElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(WithAlignmentLineElement).any_hrontp_k$ = any;
  protoOf(WithAlignmentLineElement).all_ctzlrs_k$ = all;
  protoOf(WithAlignmentLineElement).then_5qw5wu_k$ = then;
  protoOf(WithAlignmentLineBlockElement).foldIn_u08fre_k$ = foldIn;
  protoOf(WithAlignmentLineBlockElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(WithAlignmentLineBlockElement).any_hrontp_k$ = any;
  protoOf(WithAlignmentLineBlockElement).all_ctzlrs_k$ = all;
  protoOf(WithAlignmentLineBlockElement).then_5qw5wu_k$ = then;
  protoOf(VerticalAlignElement).foldIn_u08fre_k$ = foldIn;
  protoOf(VerticalAlignElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(VerticalAlignElement).any_hrontp_k$ = any;
  protoOf(VerticalAlignElement).all_ctzlrs_k$ = all;
  protoOf(VerticalAlignElement).then_5qw5wu_k$ = then;
  protoOf(FillElement).foldIn_u08fre_k$ = foldIn;
  protoOf(FillElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(FillElement).any_hrontp_k$ = any;
  protoOf(FillElement).all_ctzlrs_k$ = all;
  protoOf(FillElement).then_5qw5wu_k$ = then;
  protoOf(WrapContentElement).foldIn_u08fre_k$ = foldIn;
  protoOf(WrapContentElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(WrapContentElement).any_hrontp_k$ = any;
  protoOf(WrapContentElement).all_ctzlrs_k$ = all;
  protoOf(WrapContentElement).then_5qw5wu_k$ = then;
  protoOf(FillNode).minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  protoOf(FillNode).minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  protoOf(FillNode).maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  protoOf(FillNode).maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  protoOf(WrapContentNode).minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_0;
  protoOf(WrapContentNode).minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_0;
  protoOf(WrapContentNode).maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_0;
  protoOf(WrapContentNode).maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_0;
  protoOf(SizeElement).foldIn_u08fre_k$ = foldIn;
  protoOf(SizeElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(SizeElement).any_hrontp_k$ = any;
  protoOf(SizeElement).all_ctzlrs_k$ = all;
  protoOf(SizeElement).then_5qw5wu_k$ = then;
  protoOf(UnspecifiedConstraintsElement).foldIn_u08fre_k$ = foldIn;
  protoOf(UnspecifiedConstraintsElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(UnspecifiedConstraintsElement).any_hrontp_k$ = any;
  protoOf(UnspecifiedConstraintsElement).all_ctzlrs_k$ = all;
  protoOf(UnspecifiedConstraintsElement).then_5qw5wu_k$ = then;
  protoOf(SpacerMeasurePolicy).minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  protoOf(SpacerMeasurePolicy).maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  protoOf(InsetsPaddingModifier).minIntrinsicWidth_72od57_k$ = minIntrinsicWidth_1;
  protoOf(InsetsPaddingModifier).minIntrinsicHeight_zr6pa_k$ = minIntrinsicHeight_1;
  protoOf(InsetsPaddingModifier).maxIntrinsicWidth_o2xntp_k$ = maxIntrinsicWidth_1;
  protoOf(InsetsPaddingModifier).maxIntrinsicHeight_t0gmkg_k$ = maxIntrinsicHeight_1;
  protoOf(InsetsPaddingModifier).foldIn_u08fre_k$ = foldIn;
  protoOf(InsetsPaddingModifier).foldOut_4ty55p_k$ = foldOut;
  protoOf(InsetsPaddingModifier).any_hrontp_k$ = any;
  protoOf(InsetsPaddingModifier).all_ctzlrs_k$ = all;
  protoOf(InsetsPaddingModifier).then_5qw5wu_k$ = then;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = PaddingValues_2;
  _.$_$.c = PaddingValues_0;
  _.$_$.d = PaddingValues_1;
  _.$_$.e = Spacer$composable;
  _.$_$.f = asPaddingValues;
  _.$_$.g = calculateEndPadding;
  _.$_$.h = calculateStartPadding;
  _.$_$.i = columnMeasurePolicy$composable;
  _.$_$.j = defaultMinSize;
  _.$_$.k = fillMaxHeight;
  _.$_$.l = fillMaxSize;
  _.$_$.m = fillMaxWidth;
  _.$_$.n = heightIn;
  _.$_$.o = height;
  _.$_$.p = offset_0;
  _.$_$.q = only;
  _.$_$.r = padding_0;
  _.$_$.s = padding;
  _.$_$.t = padding_1;
  _.$_$.u = rememberBoxMeasurePolicy$composable;
  _.$_$.v = requiredSize;
  _.$_$.w = rowMeasurePolicy$composable;
  _.$_$.x = size;
  _.$_$.y = get_statusBars;
  _.$_$.z = get_systemBars;
  _.$_$.a1 = widthIn;
  _.$_$.b1 = width;
  _.$_$.c1 = windowInsetsPadding;
  _.$_$.d1 = wrapContentHeight;
  _.$_$.e1 = WindowInsetsSides__plus_impl_9q9m59;
  _.$_$.f1 = Arrangement_getInstance;
  _.$_$.g1 = BoxScopeInstance_getInstance;
  _.$_$.h1 = ColumnScopeInstance_getInstance;
  _.$_$.i1 = RowScopeInstance_getInstance;
  _.$_$.j1 = Companion_getInstance_10;
  _.$_$.k1 = Companion_getInstance_11;
  //endregion
  return _;
}));
