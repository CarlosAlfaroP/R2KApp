(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-unit.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-unit.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    root['compose-multiplatform-core-foundation-layout'] = factory(typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined' ? {} : this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-ui-unit'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var protoOf = kotlin_kotlin.$_$.r9;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var getBooleanHashCode = kotlin_kotlin.$_$.w8;
  var hashCode = kotlin_kotlin.$_$.c9;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var equals = kotlin_kotlin.$_$.t8;
  var classMeta = kotlin_kotlin.$_$.p8;
  var VOID = kotlin_kotlin.$_$.d;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var roundToInt = kotlin_kotlin.$_$.ba;
  var get_lastIndex = kotlin_kotlin.$_$.p5;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.k7;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.p8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var isInterface = kotlin_kotlin.$_$.h9;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.r5;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.t5;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var fillArrayVal = kotlin_kotlin.$_$.u8;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.m4;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Enum = kotlin_kotlin.$_$.mc;
  var getNumberHashCode = kotlin_kotlin.$_$.y8;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var toLong = kotlin_kotlin.$_$.t9;
  var Long = kotlin_kotlin.$_$.rc;
  var numberToLong = kotlin_kotlin.$_$.o9;
  var coerceAtLeast = kotlin_kotlin.$_$.ga;
  var until = kotlin_kotlin.$_$.sa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var get_sign = kotlin_kotlin.$_$.da;
  var coerceIn = kotlin_kotlin.$_$.pa;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.m8;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var coerceIn_0 = kotlin_kotlin.$_$.oa;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.ha;
  var coerceAtMost = kotlin_kotlin.$_$.la;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var charSequenceLength = kotlin_kotlin.$_$.n8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.b2;
  var InspectorValueInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.g5;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var minIntrinsicWidth_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var minIntrinsicHeight_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var maxIntrinsicWidth_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var maxIntrinsicHeight_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.i7;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.l7;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var ModifierLocalConsumer = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var ModifierLocalProvider = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var KMutableProperty1 = kotlin_kotlin.$_$.ua;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  setMetadataFor(Horizontal, 'Horizontal', interfaceMeta);
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  setMetadataFor(Vertical, 'Vertical', interfaceMeta);
  setMetadataFor(SpacedAligned, 'SpacedAligned', classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement$Start$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$End$1, VOID, classMeta, VOID, [Horizontal]);
  setMetadataFor(Arrangement$Top$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Bottom$1, VOID, classMeta, VOID, [Vertical]);
  setMetadataFor(Arrangement$Center$1, VOID, classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement$SpaceEvenly$1, VOID, classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement$SpaceBetween$1, VOID, classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement$SpaceAround$1, VOID, classMeta, VOID, [Vertical, Horizontal]);
  setMetadataFor(Arrangement, 'Arrangement', objectMeta);
  setMetadataFor(BoxChildDataNode, 'BoxChildDataNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta);
  setMetadataFor(BoxChildDataElement, 'BoxChildDataElement', classMeta, ModifierNodeElement);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0_0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta, VOID, [MeasurePolicy]);
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.w94(_this__u8e3s4, weight, fill) : $super.w94.call(this, _this__u8e3s4, weight, fill);
  }
  setMetadataFor(ColumnScope, 'ColumnScope', interfaceMeta);
  setMetadataFor(ColumnScopeInstance, 'ColumnScopeInstance', objectMeta, VOID, [ColumnScope]);
  setMetadataFor(OffsetPxElement, 'OffsetPxElement', classMeta, ModifierNodeElement);
  setMetadataFor(OffsetPxNode, 'OffsetPxNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(PaddingElement, 'PaddingElement', classMeta, ModifierNodeElement);
  setMetadataFor(PaddingValuesImpl, 'PaddingValuesImpl', classMeta, VOID, VOID, PaddingValuesImpl);
  setMetadataFor(PaddingValuesElement, 'PaddingValuesElement', classMeta, ModifierNodeElement);
  setMetadataFor(PaddingNode, 'PaddingNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(PaddingValuesModifier, 'PaddingValuesModifier', classMeta, Node, [LayoutModifierNode, Node]);
  function weight$default_0(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.w94(_this__u8e3s4, weight, fill) : $super.w94.call(this, _this__u8e3s4, weight, fill);
  }
  setMetadataFor(RowScope, 'RowScope', interfaceMeta);
  setMetadataFor(RowScopeInstance, 'RowScopeInstance', objectMeta, VOID, [RowScope]);
  setMetadataFor(LayoutOrientation, 'LayoutOrientation', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CrossAxisAlignment, 'CrossAxisAlignment', classMeta);
  setMetadataFor(CenterCrossAxisAlignment, 'CenterCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(StartCrossAxisAlignment, 'StartCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(EndCrossAxisAlignment, 'EndCrossAxisAlignment', objectMeta, CrossAxisAlignment);
  setMetadataFor(VerticalCrossAxisAlignment, 'VerticalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', classMeta, CrossAxisAlignment);
  setMetadataFor(SizeMode, 'SizeMode', classMeta, Enum);
  setMetadataFor(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks', objectMeta);
  setMetadataFor(RowColumnParentData, 'RowColumnParentData', classMeta, VOID, VOID, RowColumnParentData);
  setMetadataFor(OrientationIndependentConstraints, 'OrientationIndependentConstraints', classMeta);
  setMetadataFor(LayoutWeightElement, 'LayoutWeightElement', classMeta, ModifierNodeElement);
  setMetadataFor(HorizontalAlignElement, 'HorizontalAlignElement', classMeta, ModifierNodeElement);
  setMetadataFor(LayoutWeightNode, 'LayoutWeightNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(HorizontalAlignNode, 'HorizontalAlignNode', classMeta, Node, [ParentDataModifierNode, Node]);
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
  setMetadataFor(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', classMeta, ModifierNodeElement, VOID, UnspecifiedConstraintsElement);
  setMetadataFor(SizeNode, 'SizeNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', classMeta, Node, [LayoutModifierNode, Node], UnspecifiedConstraintsNode);
  setMetadataFor(SpacerMeasurePolicy, 'SpacerMeasurePolicy', objectMeta, VOID, [MeasurePolicy]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(FixedIntInsets, 'FixedIntInsets', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(WindowInsetsSides, 'WindowInsetsSides', classMeta);
  setMetadataFor(InsetsPaddingValues, 'InsetsPaddingValues', classMeta);
  setMetadataFor(LimitInsets, 'LimitInsets', classMeta);
  setMetadataFor(ExcludeInsets, 'ExcludeInsets', classMeta);
  setMetadataFor(UnionInsets, 'UnionInsets', classMeta);
  setMetadataFor(InsetsPaddingModifier, 'InsetsPaddingModifier', classMeta, InspectorValueInfo, [InspectorValueInfo, LayoutModifier, ModifierLocalConsumer, ModifierLocalProvider]);
  //endregion
  function Horizontal() {
  }
  function Vertical() {
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.z92_1 = space;
    this.a93_1 = rtlMirror;
    this.b93_1 = alignment;
    this.c93_1 = this.z92_1;
  }
  protoOf(SpacedAligned).w92 = function () {
    return this.c93_1;
  };
  protoOf(SpacedAligned).x92 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (sizes.length === 0)
      return Unit_instance;
    var spacePx = _this__u8e3s4.k3b(this.z92_1);
    var occupied = 0;
    var lastSpace = 0;
    var reversed = this.a93_1 ? layoutDirection.equals(LayoutDirection_Rtl_getInstance()) : false;
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
        var a = occupied;
        var b = totalSize - item | 0;
        outPositions[tmp1] = Math.min(a, b);
        // Inline function 'kotlin.math.min' call
        var b_0 = (totalSize - outPositions[tmp1] | 0) - item | 0;
        lastSpace = Math.min(spacePx, b_0);
        occupied = (outPositions[tmp1] + item | 0) + lastSpace | 0;
      }
    } else {
      var inductionVariable_0 = sizes.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.SpacedAligned.arrange.<anonymous>' call
          var it = sizes[i];
          // Inline function 'kotlin.math.min' call
          var a_0 = occupied;
          var b_1 = totalSize - it | 0;
          outPositions[i] = Math.min(a_0, b_1);
          // Inline function 'kotlin.math.min' call
          var b_2 = (totalSize - outPositions[i] | 0) - it | 0;
          lastSpace = Math.min(spacePx, b_2);
          occupied = (outPositions[i] + it | 0) + lastSpace | 0;
        }
         while (0 <= inductionVariable_0);
    }
    occupied = occupied - lastSpace | 0;
    if (!(this.b93_1 == null) ? occupied < totalSize : false) {
      var groupPosition = this.b93_1(totalSize - occupied | 0, layoutDirection);
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
  protoOf(SpacedAligned).y92 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.x92(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.a93_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + new Dp(this.z92_1) + ', ' + this.b93_1 + ')';
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.z92_1);
    result = imul(result, 31) + getBooleanHashCode(this.a93_1) | 0;
    result = imul(result, 31) + (this.b93_1 == null ? 0 : hashCode(this.b93_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    var tmp0_other_with_cast = other instanceof SpacedAligned ? other : THROW_CCE();
    if (!equals(this.z92_1, tmp0_other_with_cast.z92_1))
      return false;
    if (!(this.a93_1 === tmp0_other_with_cast.a93_1))
      return false;
    if (!equals(this.b93_1, tmp0_other_with_cast.b93_1))
      return false;
    return true;
  };
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).x92 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().n93(sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().m93(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).x92 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().m93(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().n93(sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).y92 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().n93(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).y92 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().m93(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.o93_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).w92 = function () {
    return this.o93_1;
  };
  protoOf(Arrangement$Center$1).x92 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().p93(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().p93(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).y92 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().p93(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.q93_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).w92 = function () {
    return this.q93_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).x92 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().r93(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().r93(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).y92 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().r93(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.s93_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).w92 = function () {
    return this.s93_1;
  };
  protoOf(Arrangement$SpaceBetween$1).x92 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().t93(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().t93(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).y92 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().t93(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.u93_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).w92 = function () {
    return this.u93_1;
  };
  protoOf(Arrangement$SpaceAround$1).x92 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().v93(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().v93(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).y92 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().v93(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance().p5i_1.u5i(0, size, layoutDirection);
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.d93_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.e93_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.f93_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.g93_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.h93_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.i93_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.j93_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.k93_1 = new Arrangement$SpaceAround$1();
    this.l93_1 = 0;
  }
  protoOf(Arrangement).w93 = function (space) {
    return new SpacedAligned(space, true, Arrangement$spacedBy$lambda);
  };
  protoOf(Arrangement).m93 = function (totalSize, size, outPosition, reverseInput) {
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
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).n93 = function (size, outPosition, reverseInput) {
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
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).p93 = function (totalSize, size, outPosition, reverseInput) {
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
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var it = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).r93 = function (totalSize, size, outPosition, reverseInput) {
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
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var it = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).t93 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_instance;
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
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
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
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var it = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).v93 = function (totalSize, size, outPosition, reverseInput) {
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
        var this_0 = current;
        outPosition[tmp1] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var it = size[i];
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
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
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m94_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l94_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.b5j(IntSize(placeable.m5l_1, placeable.n5l_1), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.c72(placeable, position);
  }
  function BoxChildDataNode(alignment, matchParentSize) {
    Node.call(this);
    this.l94_1 = alignment;
    this.m94_1 = matchParentSize;
  }
  protoOf(BoxChildDataNode).b6x = function (_this__u8e3s4, parentData) {
    return this;
  };
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.s6u();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function Box$composable(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-233896031);
    sourceInformation($composer_0, 'C(Box$composable)199@7940L70:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-233896031, $dirty, -1, 'androidx.compose.foundation.layout.Box$composable (Box.kt:198)');
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var measurePolicy = get_EmptyBoxMeasurePolicy();
      var $composer_1 = $composer_0;
      var $changed_0 = 384 | 112 & $dirty << 3;
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      $composer_2.f1x(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.a20();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_0().s6v_1;
      var skippableUpdate = materializerOf(modifier_0);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.u1y();
      if (!isInterface(tmp, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().x6v_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().w6v_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_0().a6w_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_0;
      if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
        $this$with.s1z(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
        tmp_0 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.f1x(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851532291, 'C:Box.kt#2w3rfo');
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
      tmp0_safe_receiver.w2e(Box$composable$lambda(modifier, $changed));
    }
  }
  function rememberBoxMeasurePolicy$composable(alignment, propagateMinConstraints, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0.f1x(-1048091512);
    sourceInformation($composer_0, 'C(rememberBoxMeasurePolicy$composable)85@3660L113:Box.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-1048091512, $changed, -1, 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable (Box.kt:79)');
    }
    var tmp;
    if (equals(alignment, Companion_getInstance().d5i_1) ? !propagateMinConstraints : false) {
      tmp = get_DefaultBoxMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_1.t1z(alignment) | $composer_1.t1z(propagateMinConstraints));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
        // Inline function 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable.<anonymous>' call
        var value = boxMeasurePolicy(alignment, propagateMinConstraints);
        $composer_1.s1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.h1x();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function ($this$null) {
      $this$null.j5r_1 = 'align';
      $this$null.k5r_1 = $alignment;
      return Unit_instance;
    };
  }
  function BoxScopeInstance() {
  }
  protoOf(BoxScopeInstance).n94 = function (_this__u8e3s4, alignment) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.c5j(new BoxChildDataElement(alignment, false, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function BoxChildDataElement(alignment, matchParentSize, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.q94_1 = alignment;
    this.r94_1 = matchParentSize;
    this.s94_1 = inspectorInfo;
  }
  protoOf(BoxChildDataElement).u2f = function () {
    return new BoxChildDataNode(this.q94_1, this.r94_1);
  };
  protoOf(BoxChildDataElement).t94 = function (node) {
    node.l94_1 = this.q94_1;
    node.m94_1 = this.r94_1;
  };
  protoOf(BoxChildDataElement).h5l = function (node) {
    return this.t94(node instanceof BoxChildDataNode ? node : THROW_CCE());
  };
  protoOf(BoxChildDataElement).hashCode = function () {
    var result = hashCode(this.q94_1);
    result = imul(31, result) + getBooleanHashCode(this.r94_1) | 0;
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
    return equals(this.q94_1, otherModifier.q94_1) ? this.r94_1 === otherModifier.r94_1 : false;
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.u94_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).e6z = function (_this__u8e3s4, measurables, constraints) {
    return this.u94_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.v94_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).e6z = function (_this__u8e3s4, measurables, constraints) {
    return this.v94_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.e3b_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.e3b_1);
    return $this$MeasurePolicy.s5l(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_instance;
  }
  function boxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_instance;
  }
  function boxMeasurePolicy$lambda$lambda_0($placeable, $measurable, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_MeasurePolicy.o4f(), $boxWidth, $boxHeight, $alignment);
      return Unit_instance;
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
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.i1(tmp1);
        placeInBox($this$layout, item, measurable, $this_MeasurePolicy.o4f(), $boxWidth._v, $boxHeight._v, $alignment);
      }
      return Unit_instance;
    };
  }
  function boxMeasurePolicy$lambda($propagateMinConstraints, $alignment) {
    return function ($this$MeasurePolicy, measurables, constraints) {
      var tmp;
      if (measurables.e1()) {
        var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints.e3b_1);
        var tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints.e3b_1);
        return $this$MeasurePolicy.s5l(tmp_0, tmp_1, VOID, boxMeasurePolicy$lambda$lambda);
      }
      var tmp_2;
      if ($propagateMinConstraints) {
        tmp_2 = constraints.e3b_1;
      } else {
        tmp_2 = Constraints__copy$default_impl_f452rp(constraints.e3b_1, 0, VOID, 0);
      }
      var contentConstraints = tmp_2;
      var tmp_3;
      if (measurables.n() === 1) {
        var measurable = measurables.i1(0);
        var boxWidth;
        var boxHeight;
        var placeable;
        if (!get_matchesParentSize(measurable)) {
          placeable = measurable.l5l(contentConstraints);
          // Inline function 'kotlin.math.max' call
          var a = _Constraints___get_minWidth__impl__hi9lfi(constraints.e3b_1);
          var b = placeable.m5l_1;
          boxWidth = Math.max(a, b);
          // Inline function 'kotlin.math.max' call
          var a_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.e3b_1);
          var b_0 = placeable.n5l_1;
          boxHeight = Math.max(a_0, b_0);
        } else {
          boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints.e3b_1);
          boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints.e3b_1);
          placeable = measurable.l5l(Companion_getInstance_2().g3b(_Constraints___get_minWidth__impl__hi9lfi(constraints.e3b_1), _Constraints___get_minHeight__impl__ev4bgx(constraints.e3b_1)));
        }
        return $this$MeasurePolicy.s5l(boxWidth, boxHeight, VOID, boxMeasurePolicy$lambda$lambda_0(placeable, measurable, $this$MeasurePolicy, boxWidth, boxHeight, $alignment));
      }
      // Inline function 'kotlin.arrayOfNulls' call
      var size = measurables.n();
      var placeables = fillArrayVal(Array(size), null);
      var hasMatchParentSizeChildren = false;
      var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints.e3b_1)};
      var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints.e3b_1)};
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.n() - 1 | 0;
      var tmp_4;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.i1(index);
          // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
          if (!get_matchesParentSize(item)) {
            var placeable_0 = item.l5l(contentConstraints);
            placeables[index] = placeable_0;
            // Inline function 'kotlin.math.max' call
            var a_1 = boxWidth_0._v;
            var b_1 = placeable_0.m5l_1;
            boxWidth_0._v = Math.max(a_1, b_1);
            // Inline function 'kotlin.math.max' call
            var a_2 = boxHeight_0._v;
            var b_2 = placeable_0.n5l_1;
            boxHeight_0._v = Math.max(a_2, b_2);
          } else {
            hasMatchParentSizeChildren = true;
          }
        }
         while (inductionVariable <= last);
        tmp_4 = Unit_instance;
      }
      var tmp_5;
      if (hasMatchParentSizeChildren) {
        var tmp_6;
        var tmp_7 = boxWidth_0._v;
        Companion_getInstance_2();
        if (!(tmp_7 === 2147483647)) {
          tmp_6 = boxWidth_0._v;
        } else {
          tmp_6 = 0;
        }
        var tmp0_minWidth = tmp_6;
        var tmp_8;
        var tmp_9 = boxHeight_0._v;
        Companion_getInstance_2();
        if (!(tmp_9 === 2147483647)) {
          tmp_8 = boxHeight_0._v;
        } else {
          tmp_8 = 0;
        }
        var tmp1_minHeight = tmp_8;
        var tmp2_maxWidth = boxWidth_0._v;
        var tmp3_maxHeight = boxHeight_0._v;
        var matchParentSizeConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = measurables.n() - 1 | 0;
        var tmp_10;
        if (inductionVariable_0 <= last_0) {
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.i1(index_0);
            // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
            if (get_matchesParentSize(item_0)) {
              placeables[index_0] = item_0.l5l(matchParentSizeConstraints);
            }
          }
           while (inductionVariable_0 <= last_0);
          tmp_10 = Unit_instance;
        }
        tmp_5 = tmp_10;
      }
      var tmp_11 = boxWidth_0._v;
      var tmp_12 = boxHeight_0._v;
      return $this$MeasurePolicy.s5l(tmp_11, tmp_12, VOID, boxMeasurePolicy$lambda$lambda_1(placeables, measurables, $this$MeasurePolicy, boxWidth_0, boxHeight_0, $alignment));
    };
  }
  function Box$composable$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box$composable($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      DefaultBoxMeasurePolicy = boxMeasurePolicy(Companion_getInstance().d5i_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function ColumnScope() {
  }
  function columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    $composer_0.f1x(47657763);
    sourceInformation($composer_0, 'C(columnMeasurePolicy$composable)P(1)103@4799L562:Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(47657763, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy$composable (Column.kt:97)');
    }
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().f93_1) ? equals(horizontalAlignment, Companion_getInstance().p5i_1) : false) {
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_1.t1z(verticalArrangement) | $composer_1.t1z(horizontalAlignment));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
        // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy$composable.<anonymous>' call
        var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
        var tmp1_arrangementSpacing = verticalArrangement.w92();
        var tmp2_crossAxisAlignment = Companion_getInstance_5().c95(horizontalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        var value = rowColumnMeasurePolicy(tmp0_orientation, columnMeasurePolicy$composable$lambda(verticalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
        $composer_1.s1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.h1x();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  function ColumnScopeInstance() {
  }
  protoOf(ColumnScopeInstance).w94 = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.ColumnScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.c5j(new LayoutWeightElement(weight, fill));
  };
  protoOf(ColumnScopeInstance).y94 = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.c5j(new HorizontalAlignElement(alignment));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  function DefaultColumnMeasurePolicy$lambda(totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
    _init_properties_Column_kt__s1zb92();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    Arrangement_getInstance().f93_1.y92(density, totalSize, size, outPosition);
    return Unit_instance;
  }
  function columnMeasurePolicy$composable$lambda($verticalArrangement) {
    return function (totalSize, size, _anonymous_parameter_2__qggqfi, density, outPosition) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $verticalArrangement.y92(density, totalSize, size, outPosition);
      return Unit_instance;
    };
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      var tmp0_orientation = LayoutOrientation_Vertical_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().f93_1.w92();
      var tmp2_crossAxisAlignment = Companion_getInstance_5().c95(Companion_getInstance().p5i_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultColumnMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultColumnMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  function offset_0(_this__u8e3s4, offset) {
    return _this__u8e3s4.c5j(new OffsetPxElement(offset, true, offset$lambda(offset)));
  }
  function OffsetPxElement(offset, rtlAware, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.f95_1 = offset;
    this.g95_1 = rtlAware;
    this.h95_1 = inspectorInfo;
  }
  protoOf(OffsetPxElement).u2f = function () {
    return new OffsetPxNode(this.f95_1, this.g95_1);
  };
  protoOf(OffsetPxElement).i95 = function (node) {
    node.x95_1 = this.f95_1;
    node.y95_1 = this.g95_1;
  };
  protoOf(OffsetPxElement).h5l = function (node) {
    return this.i95(node instanceof OffsetPxNode ? node : THROW_CCE());
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
    return equals(this.f95_1, otherModifier.f95_1) ? this.g95_1 === otherModifier.g95_1 : false;
  };
  protoOf(OffsetPxElement).toString = function () {
    return 'OffsetPxModifier(offset=' + this.f95_1 + ', rtlAware=' + this.g95_1 + ')';
  };
  protoOf(OffsetPxElement).hashCode = function () {
    var result = hashCode(this.f95_1);
    result = imul(31, result) + getBooleanHashCode(this.g95_1) | 0;
    return result;
  };
  function OffsetPxNode$measure$lambda(this$0, $this_measure, $placeable) {
    return function ($this$layout) {
      var offsetValue = this$0.x95_1($this_measure).e3c_1;
      var tmp;
      if (this$0.y95_1) {
        $this$layout.g72($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_instance;
      } else {
        $this$layout.o63($placeable, _IntOffset___get_x__impl__qiqr5o(offsetValue), _IntOffset___get_y__impl__2avpwj(offsetValue));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function OffsetPxNode(offset, rtlAware) {
    Node.call(this);
    this.x95_1 = offset;
    this.y95_1 = rtlAware;
  }
  protoOf(OffsetPxNode).k5l = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.l5l(constraints);
    var tmp = placeable.m5l_1;
    var tmp_0 = placeable.n5l_1;
    return _this__u8e3s4.s5l(tmp, tmp_0, VOID, OffsetPxNode$measure$lambda(this, _this__u8e3s4, placeable));
  };
  function offset$lambda($offset) {
    return function ($this$$receiver) {
      $this$$receiver.j5r_1 = 'offset';
      $this$$receiver.l5r_1.p5r('offset', $offset);
      return Unit_instance;
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
    return _this__u8e3s4.c5j(new PaddingElement(start, top, end, bottom, true, padding$lambda(start, top, end, bottom)));
  }
  function PaddingValues(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_0(start, top, end, bottom) {
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
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.a96(layoutDirection);
    } else {
      tmp = _this__u8e3s4.z95(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.z95(layoutDirection);
    } else {
      tmp = _this__u8e3s4.a96(layoutDirection);
    }
    return tmp;
  }
  function padding_0(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.c5j(new PaddingValuesElement(paddingValues, padding$lambda_0(paddingValues)));
  }
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
    return _this__u8e3s4.c5j(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda_1(horizontal, vertical)));
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
    this.d96_1 = start;
    this.e96_1 = top;
    this.f96_1 = end;
    this.g96_1 = bottom;
    this.h96_1 = rtlAware;
    this.i96_1 = inspectorInfo;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((((_Dp___get_value__impl__geb1vb(this.d96_1) >= 0.0 ? true : equals(this.d96_1, Companion_getInstance_3().y3b_1)) ? _Dp___get_value__impl__geb1vb(this.e96_1) >= 0.0 ? true : equals(this.e96_1, Companion_getInstance_3().y3b_1) : false) ? _Dp___get_value__impl__geb1vb(this.f96_1) >= 0.0 ? true : equals(this.f96_1, Companion_getInstance_3().y3b_1) : false) ? _Dp___get_value__impl__geb1vb(this.g96_1) >= 0.0 ? true : equals(this.g96_1, Companion_getInstance_3().y3b_1) : false)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingElement.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(PaddingElement).u2f = function () {
    return new PaddingNode(this.d96_1, this.e96_1, this.f96_1, this.g96_1, this.h96_1);
  };
  protoOf(PaddingElement).j96 = function (node) {
    node.y96_1 = this.d96_1;
    node.z96_1 = this.e96_1;
    node.a97_1 = this.f96_1;
    node.b97_1 = this.g96_1;
    node.c97_1 = this.h96_1;
  };
  protoOf(PaddingElement).h5l = function (node) {
    return this.j96(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.d96_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.e96_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.f96_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.g96_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.h96_1) | 0;
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
    return (((equals(this.d96_1, otherModifierElement.d96_1) ? equals(this.e96_1, otherModifierElement.e96_1) : false) ? equals(this.f96_1, otherModifierElement.f96_1) : false) ? equals(this.g96_1, otherModifierElement.g96_1) : false) ? this.h96_1 === otherModifierElement.h96_1 : false;
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
    this.d97_1 = start;
    this.e97_1 = top;
    this.f97_1 = end;
    this.g97_1 = bottom;
  }
  protoOf(PaddingValuesImpl).a96 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.d97_1 : this.f97_1;
  };
  protoOf(PaddingValuesImpl).h97 = function () {
    return this.e97_1;
  };
  protoOf(PaddingValuesImpl).z95 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.f97_1 : this.d97_1;
  };
  protoOf(PaddingValuesImpl).i97 = function () {
    return this.g97_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return ((equals(this.d97_1, other.d97_1) ? equals(this.e97_1, other.e97_1) : false) ? equals(this.f97_1, other.f97_1) : false) ? equals(this.g97_1, other.g97_1) : false;
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.d97_1), 31) + Dp__hashCode_impl_sxkrra(this.e97_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.f97_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.g97_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + new Dp(this.d97_1) + ', top=' + new Dp(this.e97_1) + ', end=' + new Dp(this.f97_1) + ', bottom=' + new Dp(this.g97_1) + ')';
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.l97_1 = paddingValues;
    this.m97_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).u2f = function () {
    return new PaddingValuesModifier(this.l97_1);
  };
  protoOf(PaddingValuesElement).n97 = function (node) {
    node.c98_1 = this.l97_1;
  };
  protoOf(PaddingValuesElement).h5l = function (node) {
    return this.n97(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.l97_1);
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
    return equals(this.l97_1, otherElement.l97_1);
  };
  function PaddingNode$measure$lambda(this$0, $placeable, $this_measure) {
    return function ($this$layout) {
      var tmp;
      if (this$0.c97_1) {
        $this$layout.e5r($placeable, $this_measure.k3b(this$0.y96_1), $this_measure.k3b(this$0.z96_1));
        tmp = Unit_instance;
      } else {
        $this$layout.b72($placeable, $this_measure.k3b(this$0.y96_1), $this_measure.k3b(this$0.z96_1));
        tmp = Unit_instance;
      }
      return Unit_instance;
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
    this.y96_1 = start;
    this.z96_1 = top;
    this.a97_1 = end;
    this.b97_1 = bottom;
    this.c97_1 = rtlAware;
  }
  protoOf(PaddingNode).k5l = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.k3b(this.y96_1) + _this__u8e3s4.k3b(this.a97_1) | 0;
    var vertical = _this__u8e3s4.k3b(this.z96_1) + _this__u8e3s4.k3b(this.b97_1) | 0;
    var placeable = measurable.l5l(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.m5l_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.n5l_1 + vertical | 0);
    return _this__u8e3s4.s5l(width, height, VOID, PaddingNode$measure$lambda(this, placeable, _this__u8e3s4));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.b72($placeable, $this_measure.k3b(this$0.c98_1.a96($this_measure.o4f())), $this_measure.k3b(this$0.c98_1.h97()));
      return Unit_instance;
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.c98_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).k5l = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.c98_1.a96(_this__u8e3s4.o4f());
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.c98_1.h97();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.c98_1.z95(_this__u8e3s4.o4f());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.c98_1.i97();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
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
    var horizontal = _this__u8e3s4.k3b(this.c98_1.a96(_this__u8e3s4.o4f())) + _this__u8e3s4.k3b(this.c98_1.z95(_this__u8e3s4.o4f())) | 0;
    var vertical = _this__u8e3s4.k3b(this.c98_1.h97()) + _this__u8e3s4.k3b(this.c98_1.i97()) | 0;
    var placeable = measurable.l5l(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.m5l_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.n5l_1 + vertical | 0);
    return _this__u8e3s4.s5l(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$$receiver) {
      $this$$receiver.j5r_1 = 'padding';
      $this$$receiver.l5r_1.p5r('start', new Dp($start));
      $this$$receiver.l5r_1.p5r('top', new Dp($top));
      $this$$receiver.l5r_1.p5r('end', new Dp($end));
      $this$$receiver.l5r_1.p5r('bottom', new Dp($bottom));
      return Unit_instance;
    };
  }
  function padding$lambda_0($paddingValues) {
    return function ($this$$receiver) {
      $this$$receiver.j5r_1 = 'padding';
      $this$$receiver.l5r_1.p5r('paddingValues', $paddingValues);
      return Unit_instance;
    };
  }
  function padding$lambda_1($horizontal, $vertical) {
    return function ($this$$receiver) {
      $this$$receiver.j5r_1 = 'padding';
      $this$$receiver.l5r_1.p5r('horizontal', new Dp($horizontal));
      $this$$receiver.l5r_1.p5r('vertical', new Dp($vertical));
      return Unit_instance;
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function RowScope() {
  }
  function rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    $composer_0.f1x(270154611);
    sourceInformation($composer_0, 'C(rowMeasurePolicy$composable)107@4916L639:Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(270154611, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy$composable (Row.kt:101)');
    }
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().d93_1) ? equals(verticalAlignment, Companion_getInstance().m5i_1) : false) {
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_1.t1z(horizontalArrangement) | $composer_1.t1z(verticalAlignment));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
        // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy$composable.<anonymous>' call
        var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
        var tmp1_arrangementSpacing = horizontalArrangement.w92();
        var tmp2_crossAxisAlignment = Companion_getInstance_5().e98(verticalAlignment);
        var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
        var value = rowColumnMeasurePolicy(tmp0_orientation, rowMeasurePolicy$composable$lambda(horizontalArrangement), tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
        $composer_1.s1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.h1x();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  function RowScopeInstance() {
  }
  protoOf(RowScopeInstance).w94 = function (_this__u8e3s4, weight, fill) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(weight > 0.0)) {
      // Inline function 'androidx.compose.foundation.layout.RowScopeInstance.weight.<anonymous>' call
      var message = 'invalid weight ' + weight + '; must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return _this__u8e3s4.c5j(new LayoutWeightElement(weight, fill));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  function DefaultRowMeasurePolicy$lambda(totalSize, size, layoutDirection, density, outPosition) {
    _init_properties_Row_kt__jenljs();
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    Arrangement_getInstance().d93_1.x92(density, totalSize, size, layoutDirection, outPosition);
    return Unit_instance;
  }
  function rowMeasurePolicy$composable$lambda($horizontalArrangement) {
    return function (totalSize, size, layoutDirection, density, outPosition) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $horizontalArrangement.x92(density, totalSize, size, layoutDirection, outPosition);
      return Unit_instance;
    };
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      var tmp0_orientation = LayoutOrientation_Horizontal_getInstance();
      var tmp1_arrangementSpacing = Arrangement_getInstance().d93_1.w92();
      var tmp2_crossAxisAlignment = Companion_getInstance_5().e98(Companion_getInstance().m5i_1);
      var tmp3_crossAxisSize = SizeMode_Wrap_getInstance();
      DefaultRowMeasurePolicy = rowColumnMeasurePolicy(tmp0_orientation, DefaultRowMeasurePolicy$lambda, tmp1_arrangementSpacing, tmp3_crossAxisSize, tmp2_crossAxisAlignment);
    }
  }
  var LayoutOrientation_Horizontal_instance;
  var LayoutOrientation_Vertical_instance;
  var LayoutOrientation_entriesInitialized;
  function LayoutOrientation_initEntries() {
    if (LayoutOrientation_entriesInitialized)
      return Unit_instance;
    LayoutOrientation_entriesInitialized = true;
    LayoutOrientation_Horizontal_instance = new LayoutOrientation('Horizontal', 0);
    LayoutOrientation_Vertical_instance = new LayoutOrientation('Vertical', 1);
  }
  function LayoutOrientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
    Companion_instance_1 = this;
    this.z94_1 = CenterCrossAxisAlignment_getInstance();
    this.a95_1 = StartCrossAxisAlignment_getInstance();
    this.b95_1 = EndCrossAxisAlignment_getInstance();
  }
  protoOf(Companion).e98 = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(Companion).c95 = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function CenterCrossAxisAlignment() {
    CenterCrossAxisAlignment_instance = this;
    CrossAxisAlignment.call(this);
  }
  protoOf(CenterCrossAxisAlignment).f98 = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
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
  protoOf(StartCrossAxisAlignment).f98 = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
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
  protoOf(EndCrossAxisAlignment).f98 = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? size : 0;
  };
  var EndCrossAxisAlignment_instance;
  function EndCrossAxisAlignment_getInstance() {
    if (EndCrossAxisAlignment_instance == null)
      new EndCrossAxisAlignment();
    return EndCrossAxisAlignment_instance;
  }
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.i98_1 = vertical;
  }
  protoOf(VerticalCrossAxisAlignment).f98 = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.i98_1.x5i(0, size);
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.j98_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).f98 = function (size, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.j98_1.u5i(0, size, layoutDirection);
  };
  function CrossAxisAlignment() {
    Companion_getInstance_5();
  }
  protoOf(CrossAxisAlignment).g98 = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).h98 = function (placeable) {
    return null;
  };
  var SizeMode_Wrap_instance;
  var SizeMode_Expand_instance;
  var SizeMode_entriesInitialized;
  function SizeMode_initEntries() {
    if (SizeMode_entriesInitialized)
      return Unit_instance;
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
  function MinIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().k98_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().l98_1;
    }
    return tmp;
  }
  function MinIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().m98_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().n98_1;
    }
    return tmp;
  }
  function MaxIntrinsicWidthMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().o98_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().p98_1;
    }
    return tmp;
  }
  function MaxIntrinsicHeightMeasureBlock(orientation) {
    var tmp;
    if (orientation.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp = IntrinsicMeasureBlocks_getInstance().q98_1;
    } else {
      tmp = IntrinsicMeasureBlocks_getInstance().r98_1;
    }
    return tmp;
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.f5r(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.i5r(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.f5r(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.i5r(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.h5r(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.g5r(h);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.h5r(w);
  }
  function IntrinsicMeasureBlocks$VerticalMinHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.g5r(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.g5r(h);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.i5r(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda(measurables, availableHeight, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0, availableHeight, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Horizontal_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda($this$intrinsicSize, h) {
    return $this$intrinsicSize.g5r(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxWidth$lambda$lambda_0($this$intrinsicSize, w) {
    return $this$intrinsicSize.i5r(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Horizontal_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.i5r(w);
  }
  function IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.g5r(h);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda(measurables, availableWidth, mainAxisSpacing) {
    var tmp = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda;
    return intrinsicSize(measurables, tmp, IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0, availableWidth, mainAxisSpacing, LayoutOrientation_Vertical_getInstance(), LayoutOrientation_Vertical_getInstance());
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda($this$intrinsicSize, w) {
    return $this$intrinsicSize.i5r(w);
  }
  function IntrinsicMeasureBlocks$VerticalMaxHeight$lambda$lambda_0($this$intrinsicSize, h) {
    return $this$intrinsicSize.g5r(h);
  }
  function IntrinsicMeasureBlocks() {
    IntrinsicMeasureBlocks_instance = this;
    var tmp = this;
    tmp.k98_1 = IntrinsicMeasureBlocks$HorizontalMinWidth$lambda;
    var tmp_0 = this;
    tmp_0.l98_1 = IntrinsicMeasureBlocks$VerticalMinWidth$lambda;
    var tmp_1 = this;
    tmp_1.m98_1 = IntrinsicMeasureBlocks$HorizontalMinHeight$lambda;
    var tmp_2 = this;
    tmp_2.n98_1 = IntrinsicMeasureBlocks$VerticalMinHeight$lambda;
    var tmp_3 = this;
    tmp_3.o98_1 = IntrinsicMeasureBlocks$HorizontalMaxWidth$lambda;
    var tmp_4 = this;
    tmp_4.p98_1 = IntrinsicMeasureBlocks$VerticalMaxWidth$lambda;
    var tmp_5 = this;
    tmp_5.q98_1 = IntrinsicMeasureBlocks$HorizontalMaxHeight$lambda;
    var tmp_6 = this;
    tmp_6.r98_1 = IntrinsicMeasureBlocks$VerticalMaxHeight$lambda;
  }
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
    var last = children.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.i1(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        var size = mainAxisSize(item, crossAxisAvailable);
        if (weight === 0.0) {
          fixedSpace = fixedSpace + size | 0;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          // Inline function 'kotlin.math.max' call
          var a = weightUnitSpace;
          // Inline function 'kotlin.math.roundToInt' call
          var this_0 = size / weight;
          var b = roundToInt(this_0);
          weightUnitSpace = Math.max(a, b);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = weightUnitSpace * totalWeight;
    return (roundToInt(this_1) + fixedSpace | 0) + imul(children.n() - 1 | 0, mainAxisSpacing) | 0;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing) {
    // Inline function 'kotlin.math.min' call
    var a = imul(children.n() - 1 | 0, mainAxisSpacing);
    var fixedSpace = Math.min(a, mainAxisAvailable);
    var crossAxisMax = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = children.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.i1(index);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight = get_weight(get_rowColumnParentData(item));
        if (weight === 0.0) {
          // Inline function 'kotlin.math.min' call
          Companion_getInstance_2();
          var a_0 = mainAxisSize(item, 2147483647);
          var b = mainAxisAvailable - fixedSpace | 0;
          var mainAxisSpace = Math.min(a_0, b);
          fixedSpace = fixedSpace + mainAxisSpace | 0;
          // Inline function 'kotlin.math.max' call
          var a_1 = crossAxisMax;
          var b_0 = crossAxisSize(item, mainAxisSpace);
          crossAxisMax = Math.max(a_1, b_0);
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (totalWeight === 0.0) {
      tmp = 0;
    } else {
      Companion_getInstance_2();
      if (mainAxisAvailable === 2147483647) {
        Companion_getInstance_2();
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        // Inline function 'kotlin.math.max' call
        var a_2 = mainAxisAvailable - fixedSpace | 0;
        var this_0 = Math.max(a_2, 0) / totalWeight;
        tmp = roundToInt(this_0);
      }
    }
    var weightUnitSpace = tmp;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = children.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = children.i1(index_0);
        // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize.<anonymous>' call
        var weight_0 = get_weight(get_rowColumnParentData(item_0));
        if (weight_0 > 0.0) {
          // Inline function 'kotlin.math.max' call
          var a_3 = crossAxisMax;
          var tmp_0;
          Companion_getInstance_2();
          if (!(weightUnitSpace === 2147483647)) {
            // Inline function 'kotlin.math.roundToInt' call
            var this_1 = weightUnitSpace * weight_0;
            tmp_0 = roundToInt(this_1);
          } else {
            Companion_getInstance_2();
            tmp_0 = 2147483647;
          }
          var b_1 = crossAxisSize(item_0, tmp_0);
          crossAxisMax = Math.max(a_3, b_1);
        }
      }
       while (inductionVariable_0 <= last_0);
    return crossAxisMax;
  }
  function get_weight(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.s98_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function RowColumnParentData(weight, fill, crossAxisAlignment) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    this.s98_1 = weight;
    this.t98_1 = fill;
    this.u98_1 = crossAxisAlignment;
  }
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.s98_1 + ', fill=' + this.t98_1 + ', crossAxisAlignment=' + this.u98_1 + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.s98_1);
    result = imul(result, 31) + getBooleanHashCode(this.t98_1) | 0;
    result = imul(result, 31) + (this.u98_1 == null ? 0 : hashCode(this.u98_1)) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    var tmp0_other_with_cast = other instanceof RowColumnParentData ? other : THROW_CCE();
    if (!equals(this.s98_1, tmp0_other_with_cast.s98_1))
      return false;
    if (!(this.t98_1 === tmp0_other_with_cast.t98_1))
      return false;
    if (!equals(this.u98_1, tmp0_other_with_cast.u98_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.s6u();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf(Constraints_0(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax));
  }
  function _OrientationIndependentConstraints___init__impl__1uqmhf_1(c, orientation) {
    return _OrientationIndependentConstraints___init__impl__1uqmhf_0(orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minWidth__impl__hi9lfi(c) : _Constraints___get_minHeight__impl__ev4bgx(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxWidth__impl__uuyqc(c) : _Constraints___get_maxHeight__impl__dt3e8z(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_minHeight__impl__ev4bgx(c) : _Constraints___get_minWidth__impl__hi9lfi(c), orientation === LayoutOrientation_Horizontal_getInstance() ? _Constraints___get_maxHeight__impl__dt3e8z(c) : _Constraints___get_maxWidth__impl__uuyqc(c));
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
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp$ret$3 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
      tmp = Constraints_0(tmp_0, tmp_1, tmp_2, tmp$ret$3);
    } else {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var tmp_3 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      var tmp_4 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
      var tmp_5 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40($this));
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var tmp$ret$7 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40($this));
      tmp = Constraints_0(tmp_3, tmp_4, tmp_5, tmp$ret$7);
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
      var tmp_4 = $super;
      tmp_3 = (tmp_4 == null ? null : new OrientationIndependentConstraints(tmp_4)).w98.call(new OrientationIndependentConstraints($this), mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax).v98_1;
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
    var tmp0_other_with_cast = other instanceof OrientationIndependentConstraints ? other.v98_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function OrientationIndependentConstraints(value) {
    this.v98_1 = value;
  }
  protoOf(OrientationIndependentConstraints).toString = function () {
    return OrientationIndependentConstraints__toString_impl_h1z0yz(this.v98_1);
  };
  protoOf(OrientationIndependentConstraints).hashCode = function () {
    return OrientationIndependentConstraints__hashCode_impl_w7z47a(this.v98_1);
  };
  protoOf(OrientationIndependentConstraints).equals = function (other) {
    return OrientationIndependentConstraints__equals_impl_b6og0u(this.v98_1, other);
  };
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g98();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.t98_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    return _this__u8e3s4 == null ? null : _this__u8e3s4.u98_1;
  }
  function LayoutWeightElement(weight, fill) {
    ModifierNodeElement.call(this);
    this.z98_1 = weight;
    this.a99_1 = fill;
  }
  protoOf(LayoutWeightElement).u2f = function () {
    return new LayoutWeightNode(this.z98_1, this.a99_1);
  };
  protoOf(LayoutWeightElement).b99 = function (node) {
    node.q99_1 = this.z98_1;
    node.r99_1 = this.a99_1;
  };
  protoOf(LayoutWeightElement).h5l = function (node) {
    return this.b99(node instanceof LayoutWeightNode ? node : THROW_CCE());
  };
  protoOf(LayoutWeightElement).hashCode = function () {
    var result = getNumberHashCode(this.z98_1);
    result = imul(31, result) + getBooleanHashCode(this.a99_1) | 0;
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
    return this.z98_1 === otherModifier.z98_1 ? this.a99_1 === otherModifier.a99_1 : false;
  };
  function HorizontalAlignElement(horizontal) {
    ModifierNodeElement.call(this);
    this.u99_1 = horizontal;
  }
  protoOf(HorizontalAlignElement).u2f = function () {
    return new HorizontalAlignNode(this.u99_1);
  };
  protoOf(HorizontalAlignElement).v99 = function (node) {
    node.k9a_1 = this.u99_1;
  };
  protoOf(HorizontalAlignElement).h5l = function (node) {
    return this.v99(node instanceof HorizontalAlignNode ? node : THROW_CCE());
  };
  protoOf(HorizontalAlignElement).hashCode = function () {
    return hashCode(this.u99_1);
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
    return equals(this.u99_1, otherModifier.u99_1);
  };
  function LayoutWeightNode(weight, fill) {
    Node.call(this);
    this.q99_1 = weight;
    this.r99_1 = fill;
  }
  protoOf(LayoutWeightNode).b6x = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.LayoutWeightNode.modifyParentData.<anonymous>' call
    this_0.s98_1 = this.q99_1;
    this_0.t98_1 = this.r99_1;
    return this_0;
  };
  function HorizontalAlignNode(horizontal) {
    Node.call(this);
    this.k9a_1 = horizontal;
  }
  protoOf(HorizontalAlignNode).b6x = function (_this__u8e3s4, parentData) {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.HorizontalAlignNode.modifyParentData.<anonymous>' call
    this_0.u98_1 = Companion_getInstance_5().c95(this.k9a_1);
    return this_0;
  };
  function rowColumnMeasurePolicy$o$measure$lambda($rowColumnMeasureHelper, $measureResult, $this_measure) {
    return function ($this$layout) {
      $rowColumnMeasureHelper.t9a($this$layout, $measureResult, 0, $this_measure.o4f());
      return Unit_instance;
    };
  }
  function rowColumnMeasurePolicy$1($orientation, $arrangement, $arrangementSpacing, $crossAxisSize, $crossAxisAlignment) {
    this.u9a_1 = $orientation;
    this.v9a_1 = $arrangement;
    this.w9a_1 = $arrangementSpacing;
    this.x9a_1 = $crossAxisSize;
    this.y9a_1 = $crossAxisAlignment;
  }
  protoOf(rowColumnMeasurePolicy$1).e6z = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.n();
    var placeables = fillArrayVal(Array(size), null);
    var rowColumnMeasureHelper = new RowColumnMeasurementHelper(this.u9a_1, this.v9a_1, this.w9a_1, this.x9a_1, this.y9a_1, measurables, placeables);
    var measureResult = rowColumnMeasureHelper.z9a(_this__u8e3s4, constraints, 0, measurables.n());
    var layoutWidth;
    var layoutHeight;
    if (this.u9a_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      layoutWidth = measureResult.b9b_1;
      layoutHeight = measureResult.a9b_1;
    } else {
      layoutWidth = measureResult.a9b_1;
      layoutHeight = measureResult.b9b_1;
    }
    return _this__u8e3s4.s5l(layoutWidth, layoutHeight, VOID, rowColumnMeasurePolicy$o$measure$lambda(rowColumnMeasureHelper, measureResult, _this__u8e3s4));
  };
  protoOf(rowColumnMeasurePolicy$1).f6z = function (_this__u8e3s4, measurables, height) {
    return MinIntrinsicWidthMeasureBlock(this.u9a_1)(measurables, height, _this__u8e3s4.k3b(this.w9a_1));
  };
  protoOf(rowColumnMeasurePolicy$1).g6z = function (_this__u8e3s4, measurables, width) {
    return MinIntrinsicHeightMeasureBlock(this.u9a_1)(measurables, width, _this__u8e3s4.k3b(this.w9a_1));
  };
  protoOf(rowColumnMeasurePolicy$1).h6z = function (_this__u8e3s4, measurables, height) {
    return MaxIntrinsicWidthMeasureBlock(this.u9a_1)(measurables, height, _this__u8e3s4.k3b(this.w9a_1));
  };
  protoOf(rowColumnMeasurePolicy$1).i6z = function (_this__u8e3s4, measurables, width) {
    return MaxIntrinsicHeightMeasureBlock(this.u9a_1)(measurables, width, _this__u8e3s4.k3b(this.w9a_1));
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
  function mainAxisPositions($this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    $this.m9a_1(mainAxisLayoutSize, childrenMainAxisSize, measureScope.o4f(), measureScope, mainAxisPositions);
    return mainAxisPositions;
  }
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, layoutDirection, beforeCrossAxisAlignmentLine) {
    var tmp1_elvis_lhs = parentData == null ? null : parentData.u98_1;
    var childCrossAlignment = tmp1_elvis_lhs == null ? $this.p9a_1 : tmp1_elvis_lhs;
    var tmp = crossAxisLayoutSize - $this.g9b(placeable) | 0;
    var tmp_0;
    if ($this.l9a_1.equals(LayoutOrientation_Horizontal_getInstance())) {
      tmp_0 = LayoutDirection_Ltr_getInstance();
    } else {
      tmp_0 = layoutDirection;
    }
    return childCrossAlignment.f98(tmp, tmp_0, placeable, beforeCrossAxisAlignmentLine);
  }
  function RowColumnMeasurementHelper(orientation, arrangement, arrangementSpacing, crossAxisSize, crossAxisAlignment, measurables, placeables) {
    this.l9a_1 = orientation;
    this.m9a_1 = arrangement;
    this.n9a_1 = arrangementSpacing;
    this.o9a_1 = crossAxisSize;
    this.p9a_1 = crossAxisAlignment;
    this.q9a_1 = measurables;
    this.r9a_1 = placeables;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.q9a_1.n();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = get_rowColumnParentData(this.q9a_1.i1(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.s9a_1 = tmp_2;
  }
  protoOf(RowColumnMeasurementHelper).h9b = function (_this__u8e3s4) {
    return this.l9a_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.m5l_1 : _this__u8e3s4.n5l_1;
  };
  protoOf(RowColumnMeasurementHelper).g9b = function (_this__u8e3s4) {
    return this.l9a_1.equals(LayoutOrientation_Horizontal_getInstance()) ? _this__u8e3s4.n5l_1 : _this__u8e3s4.m5l_1;
  };
  protoOf(RowColumnMeasurementHelper).z9a = function (measureScope, constraints, startIndex, endIndex) {
    var constraints_0 = _OrientationIndependentConstraints___init__impl__1uqmhf_1(constraints, this.l9a_1);
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
    var arrangementSpacingPx = toLong(measureScope.k3b(this.n9a_1));
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
        var child = this.q9a_1.i1(i);
        var parentData = this.s9a_1[i];
        var weight = get_weight(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
          var mainAxisMax = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
          var tmp1_elvis_lhs = this.r9a_1[i];
          var tmp;
          if (tmp1_elvis_lhs == null) {
            var tmp_0;
            Companion_getInstance_2();
            if (mainAxisMax === 2147483647) {
              Companion_getInstance_2();
              tmp_0 = 2147483647;
            } else {
              tmp_0 = coerceAtLeast(numberToLong(mainAxisMax).ra(fixedSpace), new Long(0, 0)).db();
            }
            tmp = child.l5l(OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(OrientationIndependentConstraints__copy$default_impl_4x4eq9(constraints_0, 0, tmp_0, 0), this.l9a_1));
          } else {
            tmp = tmp1_elvis_lhs;
          }
          var placeable = tmp;
          // Inline function 'kotlin.math.min' call
          var a = arrangementSpacingPx.db();
          // Inline function 'kotlin.Long.minus' call
          var this_0 = numberToLong(mainAxisMax).ra(fixedSpace);
          var other = this.h9b(placeable);
          var tmp$ret$3 = this_0.ra(toLong(other));
          var b = coerceAtLeast(tmp$ret$3, new Long(0, 0)).db();
          spaceAfterLastNoWeight = Math.min(a, b);
          // Inline function 'kotlin.Long.plus' call
          var this_1 = fixedSpace;
          var other_0 = this.h9b(placeable) + spaceAfterLastNoWeight | 0;
          fixedSpace = this_1.qa(toLong(other_0));
          // Inline function 'kotlin.math.max' call
          var a_0 = crossAxisSpace;
          var b_0 = this.g9b(placeable);
          crossAxisSpace = Math.max(a_0, b_0);
          anyAlignBy = anyAlignBy ? true : get_isRelative(parentData);
          this.r9a_1[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      // Inline function 'kotlin.Long.minus' call
      var this_2 = fixedSpace;
      var other_1 = spaceAfterLastNoWeight;
      fixedSpace = this_2.ra(toLong(other_1));
    } else {
      var tmp_1;
      var tmp_2;
      if (totalWeight > 0.0) {
        // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
        var tmp_3 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
        Companion_getInstance_2();
        tmp_2 = !(tmp_3 === 2147483647);
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
      var other_2 = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = arrangementSpacingPx.m9(toLong(other_2));
      var remainingToTarget = coerceAtLeast(numberToLong(targetSpace).ra(fixedSpace).ra(arrangementSpacingTotal), new Long(0, 0));
      var tmp_4;
      if (totalWeight > 0.0) {
        // Inline function 'kotlin.Long.div' call
        var other_3 = totalWeight;
        tmp_4 = remainingToTarget.eb() / other_3;
      } else {
        tmp_4 = 0.0;
      }
      var weightUnitSpace = tmp_4;
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.collections.sumOf' call
      var sum = 0;
      var tmp0_iterator = until(startIndex, endIndex).v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        var tmp_5 = sum;
        // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_3 = weightUnitSpace * get_weight(this.s9a_1[element]);
        sum = tmp_5 + roundToInt(this_3) | 0;
      }
      var other_4 = sum;
      var remainder = remainingToTarget.ra(toLong(other_4));
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (this.r9a_1[i_0] == null) {
            var child_0 = this.q9a_1.i1(i_0);
            var parentData_0 = this.s9a_1[i_0];
            var weight_0 = get_weight(parentData_0);
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(weight_0 > 0.0)) {
              // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
              var message = 'All weights <= 0 should have placeables';
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            remainder = remainder.ra(toLong(remainderUnit));
            // Inline function 'kotlin.math.max' call
            // Inline function 'kotlin.math.roundToInt' call
            var this_4 = weightUnitSpace * weight_0;
            var b_1 = roundToInt(this_4) + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_1);
            var tmp_6;
            var tmp_7;
            if (get_fill(parentData_0)) {
              Companion_getInstance_2();
              tmp_7 = !(childMainAxisSize === 2147483647);
            } else {
              tmp_7 = false;
            }
            if (tmp_7) {
              tmp_6 = childMainAxisSize;
            } else {
              tmp_6 = 0;
            }
            var tmp_8 = tmp_6;
            // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
            var tmp$ret$21 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
            var placeable_0 = child_0.l5l(OrientationIndependentConstraints__toBoxConstraints_impl_o98i7v(_OrientationIndependentConstraints___init__impl__1uqmhf_0(tmp_8, childMainAxisSize, 0, tmp$ret$21), this.l9a_1));
            weightedSpace = weightedSpace + this.h9b(placeable_0) | 0;
            // Inline function 'kotlin.math.max' call
            var a_1 = crossAxisSpace;
            var b_2 = this.g9b(placeable_0);
            crossAxisSpace = Math.max(a_1, b_2);
            anyAlignBy = anyAlignBy ? true : get_isRelative(parentData_0);
            this.r9a_1[i_0] = placeable_0;
          }
        }
         while (inductionVariable_0 < endIndex);
      var tmp_9 = numberToLong(weightedSpace).qa(arrangementSpacingTotal);
      var tmp_10 = new Long(0, 0);
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMax' call
      var tmp$ret$23 = _Constraints___get_maxWidth__impl__uuyqc(_get_value__a43j40(constraints_0));
      weightedSpace = coerceIn(tmp_9, tmp_10, numberToLong(tmp$ret$23).ra(fixedSpace)).db();
    }
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    if (anyAlignBy) {
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var placeable_1 = ensureNotNull(this.r9a_1[i_1]);
          var parentData_1 = this.s9a_1[i_1];
          var tmp4_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.h98(placeable_1);
          if (!(alignmentLinePosition == null)) {
            // Inline function 'kotlin.math.max' call
            var a_2 = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp_11;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_11 = alignmentLinePosition;
            } else {
              tmp_11 = 0;
            }
            var b_3 = tmp_11;
            beforeCrossAxisAlignmentLine = Math.max(a_2, b_3);
            // Inline function 'kotlin.math.max' call
            var a_3 = afterCrossAxisAlignmentLine;
            var tmp_12 = this.g9b(placeable_1);
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.foundation.layout.RowColumnMeasurementHelper.measureWithoutPlacing.<anonymous>' call
            var tmp_13;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_13 = alignmentLinePosition;
            } else {
              tmp_13 = this.g9b(placeable_1);
            }
            var b_4 = tmp_12 - tmp_13 | 0;
            afterCrossAxisAlignmentLine = Math.max(a_3, b_4);
          }
        }
         while (inductionVariable_1 < endIndex);
    }
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.Long.plus' call
    var this_5 = fixedSpace;
    var other_5 = weightedSpace;
    var tmp$ret$30 = this_5.qa(toLong(other_5));
    var a_4 = coerceAtLeast(tmp$ret$30, new Long(0, 0)).db();
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.mainAxisMin' call
    var b_5 = _Constraints___get_minWidth__impl__hi9lfi(_get_value__a43j40(constraints_0));
    var mainAxisLayoutSize = Math.max(a_4, b_5);
    var tmp_14;
    var tmp_15;
    // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
    var tmp_16 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
    Companion_getInstance_2();
    if (!(tmp_16 === 2147483647)) {
      tmp_15 = this.o9a_1.equals(SizeMode_Expand_getInstance());
    } else {
      tmp_15 = false;
    }
    if (tmp_15) {
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMax' call
      tmp_14 = _Constraints___get_maxHeight__impl__dt3e8z(_get_value__a43j40(constraints_0));
    } else {
      // Inline function 'kotlin.math.max' call
      var a_5 = crossAxisSpace;
      // Inline function 'kotlin.math.max' call
      // Inline function 'androidx.compose.foundation.layout.OrientationIndependentConstraints.crossAxisMin' call
      var a_6 = _Constraints___get_minHeight__impl__ev4bgx(_get_value__a43j40(constraints_0));
      var b_6 = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
      var b_7 = Math.max(a_6, b_6);
      tmp_14 = Math.max(a_5, b_7);
    }
    var crossAxisLayoutSize = tmp_14;
    var tmp_17 = 0;
    var tmp_18 = new Int32Array(subSize);
    while (tmp_17 < subSize) {
      tmp_18[tmp_17] = 0;
      tmp_17 = tmp_17 + 1 | 0;
    }
    var mainAxisPositions_0 = tmp_18;
    var tmp_19 = 0;
    var tmp_20 = new Int32Array(subSize);
    while (tmp_19 < subSize) {
      var tmp_21 = tmp_19;
      tmp_20[tmp_21] = this.h9b(ensureNotNull(this.r9a_1[tmp_21 + startIndex | 0]));
      tmp_19 = tmp_19 + 1 | 0;
    }
    var childrenMainAxisSize = tmp_20;
    var tmp5_beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine;
    var tmp6_mainAxisPositions = mainAxisPositions(this, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions_0, measureScope);
    return new RowColumnMeasureHelperResult(crossAxisLayoutSize, mainAxisLayoutSize, startIndex, endIndex, tmp5_beforeCrossAxisAlignmentLine, tmp6_mainAxisPositions);
  };
  protoOf(RowColumnMeasurementHelper).t9a = function (placeableScope, measureResult, crossAxisOffset, layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = measureResult.c9b_1;
    var last = measureResult.d9b_1;
    var tmp;
    if (inductionVariable < last) {
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var placeable = this.r9a_1[i];
        ensureNotNull(placeable);
        var mainAxisPositions = measureResult.f9b_1;
        var tmp_0 = this.q9a_1.i1(i).s6u();
        var crossAxisPosition = getCrossAxisPosition(this, placeable, tmp_0 instanceof RowColumnParentData ? tmp_0 : null, measureResult.a9b_1, layoutDirection, measureResult.e9b_1) + crossAxisOffset | 0;
        if (this.l9a_1.equals(LayoutOrientation_Horizontal_getInstance())) {
          placeableScope.b72(placeable, mainAxisPositions[i - measureResult.c9b_1 | 0], crossAxisPosition);
        } else {
          placeableScope.b72(placeable, crossAxisPosition, mainAxisPositions[i - measureResult.c9b_1 | 0]);
        }
      }
       while (inductionVariable < last);
      tmp = Unit_instance;
    }
  };
  function RowColumnMeasureHelperResult(crossAxisSize, mainAxisSize, startIndex, endIndex, beforeCrossAxisAlignmentLine, mainAxisPositions) {
    this.a9b_1 = crossAxisSize;
    this.b9b_1 = mainAxisSize;
    this.c9b_1 = startIndex;
    this.d9b_1 = endIndex;
    this.e9b_1 = beforeCrossAxisAlignmentLine;
    this.f9b_1 = mainAxisPositions;
  }
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
  var WrapContentWidthCenter;
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
  var WrapContentSizeCenter;
  var WrapContentSizeTopStart;
  function Companion_0() {
  }
  protoOf(Companion_0).i9b = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion_0).j9b = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion_0).k9b = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function FillElement(direction, fraction, inspectorName) {
    ModifierNodeElement.call(this);
    this.n9b_1 = direction;
    this.o9b_1 = fraction;
    this.p9b_1 = inspectorName;
  }
  protoOf(FillElement).u2f = function () {
    return new FillNode(this.n9b_1, this.o9b_1);
  };
  protoOf(FillElement).q9b = function (node) {
    node.f9c_1 = this.n9b_1;
    node.g9c_1 = this.o9b_1;
  };
  protoOf(FillElement).h5l = function (node) {
    return this.q9b(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.n9b_1.equals(other.n9b_1))
      return false;
    if (!(this.o9b_1 === other.o9b_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.n9b_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.o9b_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.u5i(0, _IntSize___get_width__impl__d9yl4o(size.p3c_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.x5i(0, _IntSize___get_height__impl__prv63b(size.p3c_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.b5j(Companion_getInstance_4().o3c_1, size.p3c_1, layoutDirection));
    };
  }
  function Companion_1() {
  }
  protoOf(Companion_1).h9c = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_1).i9c = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_1).j9c = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    ModifierNodeElement.call(this);
    this.m9c_1 = direction;
    this.n9c_1 = unbounded;
    this.o9c_1 = alignmentCallback;
    this.p9c_1 = align;
    this.q9c_1 = inspectorName;
  }
  protoOf(WrapContentElement).u2f = function () {
    return new WrapContentNode(this.m9c_1, this.n9c_1, this.o9c_1);
  };
  protoOf(WrapContentElement).r9c = function (node) {
    node.g9d_1 = this.m9c_1;
    node.h9d_1 = this.n9c_1;
    node.i9d_1 = this.o9c_1;
  };
  protoOf(WrapContentElement).h5l = function (node) {
    return this.r9c(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.m9c_1.equals(other.m9c_1))
      return false;
    if (!(this.n9c_1 === other.n9c_1))
      return false;
    if (!equals(this.p9c_1, other.p9c_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.m9c_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.n9c_1) | 0;
    result = imul(31, result) + hashCode(this.p9c_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.e5r($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.f9c_1 = direction;
    this.g9c_1 = fraction;
  }
  protoOf(FillNode).k5l = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) ? !this.f9c_1.equals(Direction_Vertical_getInstance()) : false) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.g9c_1;
      var tmp$ret$0 = roundToInt(this_0);
      var width = coerceIn_0(tmp$ret$0, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) ? !this.f9c_1.equals(Direction_Horizontal_getInstance()) : false) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.g9c_1;
      var tmp$ret$1 = roundToInt(this_1);
      var height = coerceIn_0(tmp$ret$1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.l5l(Constraints_0(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.m5l_1;
    var tmp_0 = placeable.n5l_1;
    return _this__u8e3s4.s5l(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
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
      var position = this$0.i9d_1(new IntSize_0(IntSize($wrapperWidth - $placeable.m5l_1 | 0, $wrapperHeight - $placeable.n5l_1 | 0)), $this_measure.o4f()).e3c_1;
      $this$layout.c72($placeable, position);
      return Unit_instance;
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.g9d_1 = direction;
    this.h9d_1 = unbounded;
    this.i9d_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).k5l = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.g9d_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.g9d_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.g9d_1.equals(Direction_Vertical_getInstance()) ? this.h9d_1 : false) {
      Companion_getInstance_2();
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.g9d_1.equals(Direction_Horizontal_getInstance()) ? this.h9d_1 : false) {
      Companion_getInstance_2();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.l5l(wrappedConstraints);
    var wrapperWidth = coerceIn_0(placeable.m5l_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn_0(placeable.n5l_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.s5l(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function width(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.c5j(new SizeElement(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function fillMaxHeight(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.c5j(fraction === 1.0 ? get_FillWholeMaxHeight() : Companion_instance_2.j9b(fraction));
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
    return _this__u8e3s4.c5j(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_3().y3b_1 : min;
    max = max === VOID ? Companion_getInstance_3().y3b_1 : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.c5j(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function widthIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_3().y3b_1 : min;
    max = max === VOID ? Companion_getInstance_3().y3b_1 : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = widthIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.c5j(new SizeElement(min, VOID, max, VOID, true, tmp$ret$0));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().y3b_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().y3b_1 : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.c5j(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function wrapContentHeight(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance().n5i_1 : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance().n5i_1) ? !unbounded : false) {
      tmp = get_WrapContentHeightCenter();
    } else if (equals(align, Companion_getInstance().m5i_1) ? !unbounded : false) {
      tmp = get_WrapContentHeightTop();
    } else {
      tmp = Companion_instance_3.i9c(align, unbounded);
    }
    return _this__u8e3s4.c5j(tmp);
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.c5j(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_instance_2.k9b(fraction));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.c5j(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.c5j(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_instance_2.i9b(fraction));
  }
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().y3b_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().y3b_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().y3b_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().y3b_1 : maxHeight;
    ModifierNodeElement.call(this);
    this.l9d_1 = minWidth;
    this.m9d_1 = minHeight;
    this.n9d_1 = maxWidth;
    this.o9d_1 = maxHeight;
    this.p9d_1 = enforceIncoming;
    this.q9d_1 = inspectorInfo;
  }
  protoOf(SizeElement).u2f = function () {
    return new SizeNode(this.l9d_1, this.m9d_1, this.n9d_1, this.o9d_1, this.p9d_1);
  };
  protoOf(SizeElement).r9d = function (node) {
    node.g9e_1 = this.l9d_1;
    node.h9e_1 = this.m9d_1;
    node.i9e_1 = this.n9d_1;
    node.j9e_1 = this.o9d_1;
    node.k9e_1 = this.p9d_1;
  };
  protoOf(SizeElement).h5l = function (node) {
    return this.r9d(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.l9d_1, other.l9d_1))
      return false;
    if (!equals(this.m9d_1, other.m9d_1))
      return false;
    if (!equals(this.n9d_1, other.n9d_1))
      return false;
    if (!equals(this.o9d_1, other.o9d_1))
      return false;
    if (!(this.p9d_1 === other.p9d_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.l9d_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.m9d_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.n9d_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.o9d_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.p9d_1) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().y3b_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().y3b_1 : minHeight;
    ModifierNodeElement.call(this);
    this.n9e_1 = minWidth;
    this.o9e_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).u2f = function () {
    return new UnspecifiedConstraintsNode(this.n9e_1, this.o9e_1);
  };
  protoOf(UnspecifiedConstraintsElement).p9e = function (node) {
    node.e9f_1 = this.n9e_1;
    node.f9f_1 = this.o9e_1;
  };
  protoOf(UnspecifiedConstraintsElement).h5l = function (node) {
    return this.p9e(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.n9e_1, other.n9e_1) ? equals(this.o9e_1, other.o9e_1) : false;
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.n9e_1), 31) + Dp__hashCode_impl_sxkrra(this.o9e_1) | 0;
  };
  function _get_targetConstraints__wn7g24(_this__u8e3s4, $this) {
    var tmp;
    if (!equals($this.i9e_1, Companion_getInstance_3().y3b_1)) {
      tmp = coerceAtLeast_0(_this__u8e3s4.k3b($this.i9e_1), 0);
    } else {
      Companion_getInstance_2();
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (!equals($this.j9e_1, Companion_getInstance_3().y3b_1)) {
      tmp_0 = coerceAtLeast_0(_this__u8e3s4.k3b($this.j9e_1), 0);
    } else {
      Companion_getInstance_2();
      tmp_0 = 2147483647;
    }
    var maxHeight = tmp_0;
    var tmp_1;
    if (!equals($this.g9e_1, Companion_getInstance_3().y3b_1)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.k3b($this.g9e_1), maxWidth), 0);
      var tmp_2;
      Companion_getInstance_2();
      if (!(it === 2147483647)) {
        tmp_2 = it;
      } else {
        tmp_2 = 0;
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_3;
    if (!equals($this.h9e_1, Companion_getInstance_3().y3b_1)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.layout.SizeNode.<get-targetConstraints>.<anonymous>' call
      var it_0 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.k3b($this.h9e_1), maxHeight), 0);
      var tmp_4;
      Companion_getInstance_2();
      if (!(it_0 === 2147483647)) {
        tmp_4 = it_0;
      } else {
        tmp_4 = 0;
      }
      tmp_3 = tmp_4;
    } else {
      tmp_3 = 0;
    }
    var minHeight = tmp_3;
    return Constraints_0(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.e5r($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().y3b_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().y3b_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_3().y3b_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_3().y3b_1 : maxHeight;
    Node.call(this);
    this.g9e_1 = minWidth;
    this.h9e_1 = minHeight;
    this.i9e_1 = maxWidth;
    this.j9e_1 = maxHeight;
    this.k9e_1 = enforceIncoming;
  }
  protoOf(SizeNode).k5l = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SizeNode.measure.<anonymous>' call
    var targetConstraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (this.k9e_1) {
      tmp = constrain(constraints, targetConstraints);
    } else {
      var tmp_0;
      if (!equals(this.g9e_1, Companion_getInstance_3().y3b_1)) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
      } else {
        tmp_0 = coerceAtMost(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(targetConstraints));
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      if (!equals(this.i9e_1, Companion_getInstance_3().y3b_1)) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
      } else {
        tmp_1 = coerceAtLeast_0(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_minWidth__impl__hi9lfi(targetConstraints));
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      if (!equals(this.h9e_1, Companion_getInstance_3().y3b_1)) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
      } else {
        tmp_2 = coerceAtMost(_Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints));
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      if (!equals(this.j9e_1, Companion_getInstance_3().y3b_1)) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
      } else {
        tmp_3 = coerceAtLeast_0(_Constraints___get_maxHeight__impl__dt3e8z(constraints), _Constraints___get_minHeight__impl__ev4bgx(targetConstraints));
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints_0(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.l5l(wrappedConstraints);
    var tmp_4 = placeable.m5l_1;
    var tmp_5 = placeable.n5l_1;
    return _this__u8e3s4.s5l(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  protoOf(SizeNode).t5l = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.f5r(height));
    }
    return tmp;
  };
  protoOf(SizeNode).u5l = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.h5r(width));
    }
    return tmp;
  };
  protoOf(SizeNode).v5l = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = constrainWidth(constraints, measurable.g5r(height));
    }
    return tmp;
  };
  protoOf(SizeNode).w5l = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(_this__u8e3s4, this);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      tmp = constrainHeight(constraints, measurable.i5r(width));
    }
    return tmp;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.e5r($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_3().y3b_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_3().y3b_1 : minHeight;
    Node.call(this);
    this.e9f_1 = minWidth;
    this.f9f_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).k5l = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.e9f_1, Companion_getInstance_3().y3b_1) ? _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 : false) {
      tmp = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.k3b(this.e9f_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.f9f_1, Companion_getInstance_3().y3b_1) ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false) {
      tmp_2 = coerceAtLeast_0(coerceAtMost(_this__u8e3s4.k3b(this.f9f_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints_0(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.l5l(wrappedConstraints);
    var tmp_3 = placeable.m5l_1;
    var tmp_4 = placeable.n5l_1;
    return _this__u8e3s4.s5l(tmp_3, tmp_4, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsNode).t5l = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.f5r(height), !equals(this.e9f_1, Companion_getInstance_3().y3b_1) ? _this__u8e3s4.k3b(this.e9f_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).v5l = function (_this__u8e3s4, measurable, height) {
    return coerceAtLeast_0(measurable.g5r(height), !equals(this.e9f_1, Companion_getInstance_3().y3b_1) ? _this__u8e3s4.k3b(this.e9f_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).u5l = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.h5r(width), !equals(this.f9f_1, Companion_getInstance_3().y3b_1) ? _this__u8e3s4.k3b(this.f9f_1) : 0);
  };
  protoOf(UnspecifiedConstraintsNode).w5l = function (_this__u8e3s4, measurable, width) {
    return coerceAtLeast_0(measurable.i5r(width), !equals(this.f9f_1, Companion_getInstance_3().y3b_1) ? _this__u8e3s4.k3b(this.f9f_1) : 0);
  };
  function requiredSize(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    return requiredSize_0(_this__u8e3s4, _DpSize___get_width__impl__o3d5gt(size), _DpSize___get_height__impl__5xueo2(size));
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
    return _this__u8e3s4.c5j(new SizeElement(width, height, width, height, false, tmp0_inspectorInfo));
  }
  function width$lambda($width) {
    return function ($this$null) {
      $this$null.j5r_1 = 'width';
      $this$null.k5r_1 = new Dp($width);
      return Unit_instance;
    };
  }
  function size$lambda($size) {
    return function ($this$null) {
      $this$null.j5r_1 = 'size';
      $this$null.k5r_1 = new Dp($size);
      return Unit_instance;
    };
  }
  function heightIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.j5r_1 = 'heightIn';
      $this$null.l5r_1.p5r('min', new Dp($min));
      $this$null.l5r_1.p5r('max', new Dp($max));
      return Unit_instance;
    };
  }
  function widthIn$lambda($min, $max) {
    return function ($this$null) {
      $this$null.j5r_1 = 'widthIn';
      $this$null.l5r_1.p5r('min', new Dp($min));
      $this$null.l5r_1.p5r('max', new Dp($max));
      return Unit_instance;
    };
  }
  function height$lambda($height) {
    return function ($this$null) {
      $this$null.j5r_1 = 'height';
      $this$null.k5r_1 = new Dp($height);
      return Unit_instance;
    };
  }
  function requiredSize$lambda($width, $height) {
    return function ($this$null) {
      $this$null.j5r_1 = 'requiredSize';
      $this$null.l5r_1.p5r('width', new Dp($width));
      $this$null.l5r_1.p5r('height', new Dp($height));
      return Unit_instance;
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
      FillWholeMaxWidth = Companion_instance_2.i9b(1.0);
      FillWholeMaxHeight = Companion_instance_2.j9b(1.0);
      FillWholeMaxSize = Companion_instance_2.k9b(1.0);
      WrapContentWidthCenter = Companion_instance_3.h9c(Companion_getInstance().q5i_1, false);
      WrapContentWidthStart = Companion_instance_3.h9c(Companion_getInstance().p5i_1, false);
      WrapContentHeightCenter = Companion_instance_3.i9c(Companion_getInstance().n5i_1, false);
      WrapContentHeightTop = Companion_instance_3.i9c(Companion_getInstance().m5i_1, false);
      WrapContentSizeCenter = Companion_instance_3.j9c(Companion_getInstance().h5i_1, false);
      WrapContentSizeTopStart = Companion_instance_3.j9c(Companion_getInstance().d5i_1, false);
    }
  }
  function Spacer$composable(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(344887062);
    sourceInformation($composer_0, 'C(Spacer$composable)39@1433L68:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(344887062, $changed, -1, 'androidx.compose.foundation.layout.Spacer$composable (Spacer.kt:38)');
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var $changed_0 = 384 | 112 & $changed << 3;
    var modifier_0 = modifier;
    var $composer_1 = $composer_0;
    $composer_1.f1x(1725976829);
    sourceInformation($composer_1, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
    if (!((0 & 2) === 0))
      modifier_0 = Companion_instance;
    var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_1, 0);
    var localMap = $composer_1.a20();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var factory = Companion_getInstance_0().s6v_1;
    var skippableUpdate = materializerOf(modifier_0);
    var $changed_1 = 6 | 7168 & $changed_0 << 9;
    var $composer_2 = $composer_1;
    var tmp = $composer_2.u1y();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.k1z();
    if ($composer_2.v1y()) {
      $composer_2.l1z(factory);
    } else {
      $composer_2.m1z();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, SpacerMeasurePolicy_instance, Companion_getInstance_0().x6v_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().w6v_1);
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_0().a6w_1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    var tmp_0;
    if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
      $this$with.s1z(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
      tmp_0 = Unit_instance;
    }
    skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_2)), $composer_2, 112 & $changed_1 >> 3);
    $composer_2.f1x(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Spacer$composable.<anonymous>' call
    var $composer_3 = $composer_2;
    sourceInformationMarkerStart($composer_3, 918629639, 'C:Spacer.kt#2w3rfo');
    sourceInformationMarkerEnd($composer_3);
    $composer_2.h1x();
    $composer_2.n1z();
    $composer_1.h1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function SpacerMeasurePolicy() {
  }
  protoOf(SpacerMeasurePolicy).e6z = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.SpacerMeasurePolicy.measure.<anonymous>' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.s5l(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    return SpacerMeasurePolicy_instance;
  }
  function Companion_2() {
  }
  var Companion_instance_4;
  function Companion_getInstance_8() {
    return Companion_instance_4;
  }
  function WindowInsets(left, top, right, bottom) {
    left = left === VOID ? 0 : left;
    top = top === VOID ? 0 : top;
    right = right === VOID ? 0 : right;
    bottom = bottom === VOID ? 0 : bottom;
    return new FixedIntInsets(left, top, right, bottom);
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.g9f_1 = leftVal;
    this.h9f_1 = topVal;
    this.i9f_1 = rightVal;
    this.j9f_1 = bottomVal;
  }
  protoOf(FixedIntInsets).k9f = function (density, layoutDirection) {
    return this.g9f_1;
  };
  protoOf(FixedIntInsets).l9f = function (density) {
    return this.h9f_1;
  };
  protoOf(FixedIntInsets).m9f = function (density, layoutDirection) {
    return this.i9f_1;
  };
  protoOf(FixedIntInsets).n9f = function (density) {
    return this.j9f_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.g9f_1 + ', top=' + this.h9f_1 + ', right=' + this.i9f_1 + ', bottom=' + this.j9f_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return ((this.g9f_1 === other.g9f_1 ? this.h9f_1 === other.h9f_1 : false) ? this.i9f_1 === other.i9f_1 : false) ? this.j9f_1 === other.j9f_1 : false;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.g9f_1;
    result = imul(31, result) + this.h9f_1 | 0;
    result = imul(31, result) + this.i9f_1 | 0;
    result = imul(31, result) + this.j9f_1 | 0;
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
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.WindowInsetsSides.valueToString.<anonymous>' call
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().s9f_1)) === _get_value__a43j40_0(Companion_getInstance_9().s9f_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Start');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().w9f_1)) === _get_value__a43j40_0(Companion_getInstance_9().w9f_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Left');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().u9f_1)) === _get_value__a43j40_0(Companion_getInstance_9().u9f_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Top');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().t9f_1)) === _get_value__a43j40_0(Companion_getInstance_9().t9f_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'End');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().x9f_1)) === _get_value__a43j40_0(Companion_getInstance_9().x9f_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Right');
    }
    if ((_get_value__a43j40_0($this) & _get_value__a43j40_0(Companion_getInstance_9().v9f_1)) === _get_value__a43j40_0(Companion_getInstance_9().v9f_1)) {
      valueToString$_anonymous_$appendPlus_uyjmpe(this_0, 'Bottom');
    }
    return this_0.toString();
  }
  function Companion_3() {
    Companion_instance_5 = this;
    this.o9f_1 = _WindowInsetsSides___init__impl__nuufbx(8);
    this.p9f_1 = _WindowInsetsSides___init__impl__nuufbx(4);
    this.q9f_1 = _WindowInsetsSides___init__impl__nuufbx(2);
    this.r9f_1 = _WindowInsetsSides___init__impl__nuufbx(1);
    this.s9f_1 = WindowInsetsSides__plus_impl_9q9m59(this.o9f_1, this.r9f_1);
    this.t9f_1 = WindowInsetsSides__plus_impl_9q9m59(this.p9f_1, this.q9f_1);
    this.u9f_1 = _WindowInsetsSides___init__impl__nuufbx(16);
    this.v9f_1 = _WindowInsetsSides___init__impl__nuufbx(32);
    this.w9f_1 = WindowInsetsSides__plus_impl_9q9m59(this.o9f_1, this.q9f_1);
    this.x9f_1 = WindowInsetsSides__plus_impl_9q9m59(this.p9f_1, this.r9f_1);
    this.y9f_1 = WindowInsetsSides__plus_impl_9q9m59(this.w9f_1, this.x9f_1);
    this.z9f_1 = WindowInsetsSides__plus_impl_9q9m59(this.u9f_1, this.v9f_1);
  }
  var Companion_instance_5;
  function Companion_getInstance_9() {
    if (Companion_instance_5 == null)
      new Companion_3();
    return Companion_instance_5;
  }
  function WindowInsetsSides__hashCode_impl_w7unwc($this) {
    return $this;
  }
  function WindowInsetsSides__equals_impl_fwz4tk($this, other) {
    if (!(other instanceof WindowInsetsSides))
      return false;
    if (!($this === (other instanceof WindowInsetsSides ? other.a9g_1 : THROW_CCE())))
      return false;
    return true;
  }
  function valueToString$_anonymous_$appendPlus_uyjmpe($this_buildString, text) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength($this_buildString) > 0) {
      $this_buildString.a6(_Char___init__impl__6a9atx(43));
    }
    $this_buildString.z5(text);
  }
  function WindowInsetsSides(value) {
    Companion_getInstance_9();
    this.a9g_1 = value;
  }
  protoOf(WindowInsetsSides).toString = function () {
    return WindowInsetsSides__toString_impl_h23h9x(this.a9g_1);
  };
  protoOf(WindowInsetsSides).hashCode = function () {
    return WindowInsetsSides__hashCode_impl_w7unwc(this.a9g_1);
  };
  protoOf(WindowInsetsSides).equals = function (other) {
    return WindowInsetsSides__equals_impl_fwz4tk(this.a9g_1, other);
  };
  function InsetsPaddingValues(insets, density) {
    this.b9g_1 = insets;
    this.c9g_1 = density;
  }
  protoOf(InsetsPaddingValues).a96 = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateLeftPadding.<anonymous>' call
    var $this$with = this.c9g_1;
    return $this$with.p3b(this.b9g_1.k9f($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).h97 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateTopPadding.<anonymous>' call
    var $this$with = this.c9g_1;
    return $this$with.p3b(this.b9g_1.l9f($this$with));
  };
  protoOf(InsetsPaddingValues).z95 = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateRightPadding.<anonymous>' call
    var $this$with = this.c9g_1;
    return $this$with.p3b(this.b9g_1.m9f($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).i97 = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.layout.InsetsPaddingValues.calculateBottomPadding.<anonymous>' call
    var $this$with = this.c9g_1;
    return $this$with.p3b(this.b9g_1.n9f($this$with));
  };
  protoOf(InsetsPaddingValues).toString = function () {
    return 'InsetsPaddingValues(insets=' + this.b9g_1 + ', density=' + this.c9g_1 + ')';
  };
  protoOf(InsetsPaddingValues).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingValues)) {
      return false;
    }
    return equals(this.b9g_1, other.b9g_1) ? equals(this.c9g_1, other.c9g_1) : false;
  };
  protoOf(InsetsPaddingValues).hashCode = function () {
    var result = hashCode(this.b9g_1);
    result = imul(31, result) + hashCode(this.c9g_1) | 0;
    return result;
  };
  function LimitInsets(insets, sides) {
    this.d9g_1 = insets;
    this.e9g_1 = sides;
  }
  protoOf(LimitInsets).k9f = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_9().o9f_1;
    } else {
      tmp = Companion_getInstance_9().q9f_1;
    }
    var layoutDirectionSide = tmp;
    var allowLeft = WindowInsetsSides__hasAny_impl_v1wjnf(this.e9g_1, layoutDirectionSide);
    var tmp_0;
    if (allowLeft) {
      tmp_0 = this.d9g_1.k9f(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).l9f = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.e9g_1, Companion_getInstance_9().u9f_1) ? this.d9g_1.l9f(density) : 0;
  };
  protoOf(LimitInsets).m9f = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_9().p9f_1;
    } else {
      tmp = Companion_getInstance_9().r9f_1;
    }
    var layoutDirectionSide = tmp;
    var allowRight = WindowInsetsSides__hasAny_impl_v1wjnf(this.e9g_1, layoutDirectionSide);
    var tmp_0;
    if (allowRight) {
      tmp_0 = this.d9g_1.m9f(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).n9f = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.e9g_1, Companion_getInstance_9().v9f_1) ? this.d9g_1.n9f(density) : 0;
  };
  protoOf(LimitInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LimitInsets)) {
      return false;
    }
    return equals(this.d9g_1, other.d9g_1) ? this.e9g_1 === other.e9g_1 : false;
  };
  protoOf(LimitInsets).hashCode = function () {
    var result = hashCode(this.d9g_1);
    result = imul(31, result) + WindowInsetsSides__hashCode_impl_w7unwc(this.e9g_1) | 0;
    return result;
  };
  protoOf(LimitInsets).toString = function () {
    return '(' + this.d9g_1 + ' only ' + new WindowInsetsSides(this.e9g_1) + ')';
  };
  function exclude(_this__u8e3s4, insets) {
    return new ExcludeInsets(_this__u8e3s4, insets);
  }
  function union(_this__u8e3s4, insets) {
    return new UnionInsets(_this__u8e3s4, insets);
  }
  function ExcludeInsets(included, excluded) {
    this.f9g_1 = included;
    this.g9g_1 = excluded;
  }
  protoOf(ExcludeInsets).k9f = function (density, layoutDirection) {
    return coerceAtLeast_0(this.f9g_1.k9f(density, layoutDirection) - this.g9g_1.k9f(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).l9f = function (density) {
    return coerceAtLeast_0(this.f9g_1.l9f(density) - this.g9g_1.l9f(density) | 0, 0);
  };
  protoOf(ExcludeInsets).m9f = function (density, layoutDirection) {
    return coerceAtLeast_0(this.f9g_1.m9f(density, layoutDirection) - this.g9g_1.m9f(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).n9f = function (density) {
    return coerceAtLeast_0(this.f9g_1.n9f(density) - this.g9g_1.n9f(density) | 0, 0);
  };
  protoOf(ExcludeInsets).toString = function () {
    return '(' + this.f9g_1 + ' - ' + this.g9g_1 + ')';
  };
  protoOf(ExcludeInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ExcludeInsets)) {
      return false;
    }
    return equals(other.f9g_1, this.f9g_1) ? equals(other.g9g_1, this.g9g_1) : false;
  };
  protoOf(ExcludeInsets).hashCode = function () {
    return imul(31, hashCode(this.f9g_1)) + hashCode(this.g9g_1) | 0;
  };
  function UnionInsets(first, second) {
    this.h9g_1 = first;
    this.i9g_1 = second;
  }
  protoOf(UnionInsets).k9f = function (density, layoutDirection) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.h9g_1.k9f(density, layoutDirection);
    var b = this.i9g_1.k9f(density, layoutDirection);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).l9f = function (density) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.h9g_1.l9f(density);
    var b = this.i9g_1.l9f(density);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).m9f = function (density, layoutDirection) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.h9g_1.m9f(density, layoutDirection);
    var b = this.i9g_1.m9f(density, layoutDirection);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).n9f = function (density) {
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = this.h9g_1.n9f(density);
    var b = this.i9g_1.n9f(density);
    return Math.max(a, b);
  };
  protoOf(UnionInsets).hashCode = function () {
    return hashCode(this.h9g_1) + imul(hashCode(this.i9g_1), 31) | 0;
  };
  protoOf(UnionInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof UnionInsets)) {
      return false;
    }
    return equals(other.h9g_1, this.h9g_1) ? equals(other.i9g_1, this.i9g_1) : false;
  };
  protoOf(UnionInsets).toString = function () {
    return '(' + this.h9g_1 + ' \u222A ' + this.i9g_1 + ')';
  };
  function get_ModifierLocalConsumedWindowInsets() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return ModifierLocalConsumedWindowInsets;
  }
  var ModifierLocalConsumedWindowInsets;
  function windowInsetsPadding(_this__u8e3s4, insets) {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = windowInsetsPadding$lambda(insets);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.c5j(new InsetsPaddingModifier(insets, tmp$ret$0));
  }
  function _set_unconsumedInsets__kb2lgg($this, _set____db54di) {
    var this_0 = $this.n9g_1;
    unconsumedInsets$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function _get_unconsumedInsets__8s1nmc($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.n9g_1;
    unconsumedInsets$factory_0();
    return this_0.u2();
  }
  function _set_consumedInsets__2lpxax($this, _set____db54di) {
    var this_0 = $this.o9g_1;
    consumedInsets$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function _get_consumedInsets__s4tdcd($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.o9g_1;
    consumedInsets$factory_0();
    return this_0.u2();
  }
  function InsetsPaddingModifier$_init_$lambda_43mml5($insets) {
    return function ($this$null) {
      $this$null.j5r_1 = 'InsetsPaddingModifier';
      $this$null.l5r_1.p5r('insets', $insets);
      return Unit_instance;
    };
  }
  function InsetsPaddingModifier$measure$lambda($placeable, $left, $top) {
    return function ($this$layout) {
      $this$layout.b72($placeable, $left, $top);
      return Unit_instance;
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
    this.m9g_1 = insets;
    this.n9g_1 = mutableStateOf(this.m9g_1);
    this.o9g_1 = mutableStateOf(this.m9g_1);
  }
  protoOf(InsetsPaddingModifier).k5l = function (_this__u8e3s4, measurable, constraints) {
    var left = _get_unconsumedInsets__8s1nmc(this).k9f(_this__u8e3s4, _this__u8e3s4.o4f());
    var top = _get_unconsumedInsets__8s1nmc(this).l9f(_this__u8e3s4);
    var right = _get_unconsumedInsets__8s1nmc(this).m9f(_this__u8e3s4, _this__u8e3s4.o4f());
    var bottom = _get_unconsumedInsets__8s1nmc(this).n9f(_this__u8e3s4);
    var horizontal = left + right | 0;
    var vertical = top + bottom | 0;
    var childConstraints = offset(constraints, -horizontal | 0, -vertical | 0);
    var placeable = measurable.l5l(childConstraints);
    var width = constrainWidth(constraints, placeable.m5l_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.n5l_1 + vertical | 0);
    return _this__u8e3s4.s5l(width, height, VOID, InsetsPaddingModifier$measure$lambda(placeable, left, top));
  };
  protoOf(InsetsPaddingModifier).p6m = function (scope) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var consumed = scope.m60(get_ModifierLocalConsumedWindowInsets());
    _set_unconsumedInsets__kb2lgg(this, exclude(this.m9g_1, consumed));
    _set_consumedInsets__2lpxax(this, union(consumed, this.m9g_1));
  };
  protoOf(InsetsPaddingModifier).t2 = function () {
    return get_ModifierLocalConsumedWindowInsets();
  };
  protoOf(InsetsPaddingModifier).u2 = function () {
    return _get_consumedInsets__s4tdcd(this);
  };
  protoOf(InsetsPaddingModifier).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingModifier)) {
      return false;
    }
    return equals(other.m9g_1, this.m9g_1);
  };
  protoOf(InsetsPaddingModifier).hashCode = function () {
    return hashCode(this.m9g_1);
  };
  function ModifierLocalConsumedWindowInsets$lambda() {
    _init_properties_WindowInsetsPadding_kt__2qyozr();
    return WindowInsets(0, 0, 0, 0);
  }
  function windowInsetsPadding$lambda($insets) {
    return function ($this$null) {
      $this$null.j5r_1 = 'windowInsetsPadding';
      $this$null.l5r_1.p5r('insets', $insets);
      return Unit_instance;
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
  function get_ZeroInsets() {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return ZeroInsets;
  }
  var ZeroInsets;
  function get_systemBars(_this__u8e3s4) {
    _init_properties_WindowInsets_notMobile_kt__cg4w4z();
    return get_ZeroInsets();
  }
  var properties_initialized_WindowInsets_notMobile_kt_v7y701;
  function _init_properties_WindowInsets_notMobile_kt__cg4w4z() {
    if (!properties_initialized_WindowInsets_notMobile_kt_v7y701) {
      properties_initialized_WindowInsets_notMobile_kt_v7y701 = true;
      ZeroInsets = WindowInsets(0, 0, 0, 0);
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Start$1).w92 = get_spacing;
  protoOf(Arrangement$End$1).w92 = get_spacing;
  protoOf(Arrangement$Top$1).w92 = get_spacing_0;
  protoOf(Arrangement$Bottom$1).w92 = get_spacing_0;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).f6z = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).g6z = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).h6z = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).i6z = maxIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).f6z = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).g6z = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).h6z = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).i6z = maxIntrinsicHeight;
  protoOf(ColumnScopeInstance).x94 = weight$default;
  protoOf(OffsetPxNode).t5l = minIntrinsicWidth_0;
  protoOf(OffsetPxNode).u5l = minIntrinsicHeight_0;
  protoOf(OffsetPxNode).v5l = maxIntrinsicWidth_0;
  protoOf(OffsetPxNode).w5l = maxIntrinsicHeight_0;
  protoOf(PaddingNode).t5l = minIntrinsicWidth_0;
  protoOf(PaddingNode).u5l = minIntrinsicHeight_0;
  protoOf(PaddingNode).v5l = maxIntrinsicWidth_0;
  protoOf(PaddingNode).w5l = maxIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).t5l = minIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).u5l = minIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).v5l = maxIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).w5l = maxIntrinsicHeight_0;
  protoOf(RowScopeInstance).d98 = weight$default_0;
  protoOf(FillNode).t5l = minIntrinsicWidth_0;
  protoOf(FillNode).u5l = minIntrinsicHeight_0;
  protoOf(FillNode).v5l = maxIntrinsicWidth_0;
  protoOf(FillNode).w5l = maxIntrinsicHeight_0;
  protoOf(WrapContentNode).t5l = minIntrinsicWidth_0;
  protoOf(WrapContentNode).u5l = minIntrinsicHeight_0;
  protoOf(WrapContentNode).v5l = maxIntrinsicWidth_0;
  protoOf(WrapContentNode).w5l = maxIntrinsicHeight_0;
  protoOf(SpacerMeasurePolicy).f6z = minIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).g6z = minIntrinsicHeight;
  protoOf(SpacerMeasurePolicy).h6z = maxIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).i6z = maxIntrinsicHeight;
  protoOf(InsetsPaddingModifier).t5l = minIntrinsicWidth_1;
  protoOf(InsetsPaddingModifier).u5l = minIntrinsicHeight_1;
  protoOf(InsetsPaddingModifier).v5l = maxIntrinsicWidth_1;
  protoOf(InsetsPaddingModifier).w5l = maxIntrinsicHeight_1;
  protoOf(InsetsPaddingModifier).h5j = foldIn;
  protoOf(InsetsPaddingModifier).i5j = all;
  protoOf(InsetsPaddingModifier).c5j = then;
  //endregion
  //region block: init
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  RowScopeInstance_instance = new RowScopeInstance();
  Companion_instance_2 = new Companion_0();
  Companion_instance_3 = new Companion_1();
  SpacerMeasurePolicy_instance = new SpacerMeasurePolicy();
  Companion_instance_4 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Box$composable;
  _.$_$.b = PaddingValues;
  _.$_$.c = PaddingValues_0;
  _.$_$.d = Spacer$composable;
  _.$_$.e = asPaddingValues;
  _.$_$.f = calculateEndPadding;
  _.$_$.g = calculateStartPadding;
  _.$_$.h = columnMeasurePolicy$composable;
  _.$_$.i = defaultMinSize;
  _.$_$.j = fillMaxHeight;
  _.$_$.k = fillMaxSize;
  _.$_$.l = fillMaxWidth;
  _.$_$.m = heightIn;
  _.$_$.n = height;
  _.$_$.o = offset_0;
  _.$_$.p = only;
  _.$_$.q = padding_0;
  _.$_$.r = padding;
  _.$_$.s = padding_1;
  _.$_$.t = rememberBoxMeasurePolicy$composable;
  _.$_$.u = requiredSize;
  _.$_$.v = rowMeasurePolicy$composable;
  _.$_$.w = size;
  _.$_$.x = get_systemBars;
  _.$_$.y = widthIn;
  _.$_$.z = width;
  _.$_$.a1 = windowInsetsPadding;
  _.$_$.b1 = wrapContentHeight;
  _.$_$.c1 = WindowInsetsSides__plus_impl_9q9m59;
  _.$_$.d1 = Arrangement_getInstance;
  _.$_$.e1 = BoxScopeInstance_instance;
  _.$_$.f1 = ColumnScopeInstance_instance;
  _.$_$.g1 = RowScopeInstance_instance;
  _.$_$.h1 = Companion_instance_4;
  _.$_$.i1 = Companion_getInstance_9;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-foundation-layout.js.map
