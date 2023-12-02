(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-util.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-geometry'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-geometry'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-ui-geometry'.");
    }
    root['compose-multiplatform-core-ui-geometry'] = factory(typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-geometry'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-util']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.l4;
  var floatFromBits = kotlin_kotlin.$_$.kc;
  var Long = kotlin_kotlin.$_$.eh;
  var VOID = kotlin_kotlin.$_$.bj;
  var protoOf = kotlin_kotlin.$_$.rd;
  var objectMeta = kotlin_kotlin.$_$.qd;
  var setMetadataFor = kotlin_kotlin.$_$.sd;
  var THROW_CCE = kotlin_kotlin.$_$.lh;
  var classMeta = kotlin_kotlin.$_$.ec;
  var toBits = kotlin_kotlin.$_$.ti;
  var toLong = kotlin_kotlin.$_$.ud;
  var numberToInt = kotlin_kotlin.$_$.nd;
  var toString = kotlin_kotlin.$_$.wd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var isNaN_0 = kotlin_kotlin.$_$.hi;
  var isFinite = kotlin_kotlin.$_$.fi;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var getNumberHashCode = kotlin_kotlin.$_$.mc;
  var equals = kotlin_kotlin.$_$.ic;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CornerRadius, 'CornerRadius', classMeta);
  setMetadataFor(MutableRect, 'MutableRect', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Offset, 'Offset', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RoundRect, 'RoundRect', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Size, 'Size', classMeta);
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp0_unpackFloat1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    return floatFromBits(tmp1_fromBits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp0_unpackFloat2 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return floatFromBits(tmp1_fromBits);
  }
  function CornerRadius__component1_impl_6k47wy($this) {
    return _CornerRadius___get_x__impl__1594cn($this);
  }
  function CornerRadius__component2_impl_715ub5($this) {
    return _CornerRadius___get_y__impl__tyvleu($this);
  }
  function CornerRadius__copy_impl_mqhhap($this, x, y) {
    return CornerRadius_0(x, y);
  }
  function CornerRadius__copy$default_impl_tg6w18($this, x, y, $super) {
    x = x === VOID ? _CornerRadius___get_x__impl__1594cn($this) : x;
    y = y === VOID ? _CornerRadius___get_y__impl__tyvleu($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = CornerRadius__copy_impl_mqhhap($this, x, y);
    } else {
      var tmp_0 = new CornerRadius($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new CornerRadius(tmp_1)).copy_qymoql_k$.call(tmp_0, x, y).packedValue_1;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    this.Zero_1 = CornerRadius_0(0.0);
  }
  protoOf(Companion).get_Zero_5wbciv_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__unaryMinus_impl_li2ovv($this) {
    return CornerRadius_0(-_CornerRadius___get_x__impl__1594cn($this), -_CornerRadius___get_y__impl__tyvleu($this));
  }
  function CornerRadius__minus_impl_dt91p8($this, other) {
    return CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this) - _CornerRadius___get_x__impl__1594cn(other), _CornerRadius___get_y__impl__tyvleu($this) - _CornerRadius___get_y__impl__tyvleu(other));
  }
  function CornerRadius__plus_impl_qmk9is($this, other) {
    return CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this) + _CornerRadius___get_x__impl__1594cn(other), _CornerRadius___get_y__impl__tyvleu($this) + _CornerRadius___get_y__impl__tyvleu(other));
  }
  function CornerRadius__times_impl_g3rlyq($this, operand) {
    return CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this) * operand, _CornerRadius___get_y__impl__tyvleu($this) * operand);
  }
  function CornerRadius__div_impl_bxtjdv($this, operand) {
    return CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this) / operand, _CornerRadius___get_y__impl__tyvleu($this) / operand);
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    if (_CornerRadius___get_x__impl__1594cn($this) === _CornerRadius___get_y__impl__tyvleu($this)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu($this), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.packedValue_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.packedValue_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.packedValue_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.packedValue_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function get_$stableprop() {
    return 8;
  }
  function MutableRect(left, top, right, bottom) {
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.$stable_1 = 8;
  }
  protoOf(MutableRect).set_left_i6srx5_k$ = function (_set____db54di) {
    this.left_1 = _set____db54di;
  };
  protoOf(MutableRect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(MutableRect).set_top_62laxx_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(MutableRect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(MutableRect).set_right_uydszm_k$ = function (_set____db54di) {
    this.right_1 = _set____db54di;
  };
  protoOf(MutableRect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(MutableRect).set_bottom_y9ard7_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(MutableRect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(MutableRect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1;
  };
  protoOf(MutableRect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  protoOf(MutableRect).get_size_x9ctfw_k$ = function () {
    // Inline function 'androidx.compose.ui.geometry.MutableRect.width' call
    var tmp = this.right_1 - this.left_1;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.geometry.MutableRect.height' call
    tmp$ret$1 = this.bottom_1 - this.top_1;
    return Size_0(tmp, tmp$ret$1);
  };
  protoOf(MutableRect).get_isEmpty_zauvru_k$ = function () {
    return this.left_1 >= this.right_1 ? true : this.top_1 >= this.bottom_1;
  };
  protoOf(MutableRect).intersect_50a7g2_k$ = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.left_1;
    tmp.left_1 = Math.max(left, tmp0_max);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var tmp1_max = this.top_1;
    tmp_0.top_1 = Math.max(top, tmp1_max);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var tmp2_min = this.right_1;
    tmp_1.right_1 = Math.min(right, tmp2_min);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var tmp3_min = this.bottom_1;
    tmp_2.bottom_1 = Math.min(bottom, tmp3_min);
  };
  protoOf(MutableRect).contains_ggguyy_k$ = function (offset) {
    return ((_Offset___get_x__impl__xvi35n(offset) >= this.left_1 ? _Offset___get_x__impl__xvi35n(offset) < this.right_1 : false) ? _Offset___get_y__impl__8bzhra(offset) >= this.top_1 : false) ? _Offset___get_y__impl__8bzhra(offset) < this.bottom_1 : false;
  };
  protoOf(MutableRect).set_3mqxe9_k$ = function (left, top, right, bottom) {
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.left_1, 1) + ', ') + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + (toStringAsFixed(this.bottom_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().Unspecified_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-x>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    return floatFromBits(tmp1_fromBits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().Unspecified_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-y>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return floatFromBits(tmp1_fromBits);
  }
  function Offset__component1_impl_qn5q2($this) {
    return _Offset___get_x__impl__xvi35n($this);
  }
  function Offset__component2_impl_9ljbv($this) {
    return _Offset___get_y__impl__8bzhra($this);
  }
  function Offset__copy_impl_9gtypn($this, x, y) {
    return Offset_0(x, y);
  }
  function Offset__copy$default_impl_bmwjg8($this, x, y, $super) {
    x = x === VOID ? _Offset___get_x__impl__xvi35n($this) : x;
    y = y === VOID ? _Offset___get_y__impl__8bzhra($this) : y;
    var tmp;
    if ($super === VOID) {
      tmp = Offset__copy_impl_9gtypn($this, x, y);
    } else {
      var tmp_0 = new Offset($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Offset(tmp_1)).copy_wh0c5l_k$.call(tmp_0, x, y).packedValue_1;
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.Zero_1 = Offset_0(0.0, 0.0);
    this.Infinite_1 = Offset_0(FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$(), FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$());
    this.Unspecified_1 = Offset_0(FloatCompanionObject_getInstance().get_NaN_18jnv2_k$(), FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
  }
  protoOf(Companion_0).get_Zero_sctq3f_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_0).get_Infinite_oe4l7z_k$ = function () {
    return this.Infinite_1;
  };
  protoOf(Companion_0).get_Unspecified_ooyrpa_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__isValid_impl_z7krde($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!isNaN_0(_Offset___get_x__impl__xvi35n($this)) ? !isNaN_0(_Offset___get_y__impl__8bzhra($this)) : false)) {
      // Inline function 'androidx.compose.ui.geometry.Offset.isValid.<anonymous>' call
      var message = 'Offset argument contained a NaN value.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return true;
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
    return Math.sqrt(tmp0_sqrt);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    return _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return Offset_0(-_Offset___get_x__impl__xvi35n($this), -_Offset___get_y__impl__8bzhra($this));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) - _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) - _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__plus_impl_c78cg0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) + _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) + _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__times_impl_jz1mli($this, operand) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) * operand, _Offset___get_y__impl__8bzhra($this) * operand);
  }
  function Offset__div_impl_eaxtg1($this, operand) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) / operand, _Offset___get_y__impl__8bzhra($this) / operand);
  }
  function Offset__rem_impl_swr6wq($this, operand) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) % operand, _Offset___get_y__impl__8bzhra($this) % operand);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.packedValue_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.packedValue_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.packedValue_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.packedValue_1, other);
  };
  function Offset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    return isFinite(_Offset___get_x__impl__xvi35n(_this__u8e3s4)) ? isFinite(_Offset___get_y__impl__8bzhra(_this__u8e3s4)) : false;
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().Unspecified_1));
  }
  function get_isUnspecified(_this__u8e3s4) {
    return _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().Unspecified_1));
  }
  function lerp_0(start, stop, fraction) {
    return Offset_0(lerp(_Offset___get_x__impl__xvi35n(start), _Offset___get_x__impl__xvi35n(stop), fraction), lerp(_Offset___get_y__impl__8bzhra(start), _Offset___get_y__impl__8bzhra(stop), fraction));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Zero_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  protoOf(Companion_1).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.$stable_1 = 0;
  }
  protoOf(Rect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(Rect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(Rect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(Rect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Rect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1;
  };
  protoOf(Rect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  protoOf(Rect).get_size_x9ctfw_k$ = function () {
    return Size_0(this.get_width_j0q4yl_k$(), this.get_height_e7t92o_k$());
  };
  protoOf(Rect).get_isInfinite_uffwnt_k$ = function () {
    return ((this.left_1 >= FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$() ? true : this.top_1 >= FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$()) ? true : this.right_1 >= FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$()) ? true : this.bottom_1 >= FloatCompanionObject_getInstance().get_POSITIVE_INFINITY_yq30fv_k$();
  };
  protoOf(Rect).get_isFinite_taph6q_k$ = function () {
    return ((isFinite(this.left_1) ? isFinite(this.top_1) : false) ? isFinite(this.right_1) : false) ? isFinite(this.bottom_1) : false;
  };
  protoOf(Rect).get_isEmpty_zauvru_k$ = function () {
    return this.left_1 >= this.right_1 ? true : this.top_1 >= this.bottom_1;
  };
  protoOf(Rect).translate_bllf6j_k$ = function (offset) {
    return new Rect(this.left_1 + _Offset___get_x__impl__xvi35n(offset), this.top_1 + _Offset___get_y__impl__8bzhra(offset), this.right_1 + _Offset___get_x__impl__xvi35n(offset), this.bottom_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).translate_y4aglq_k$ = function (translateX, translateY) {
    return new Rect(this.left_1 + translateX, this.top_1 + translateY, this.right_1 + translateX, this.bottom_1 + translateY);
  };
  protoOf(Rect).inflate_f59jyf_k$ = function (delta) {
    return new Rect(this.left_1 - delta, this.top_1 - delta, this.right_1 + delta, this.bottom_1 + delta);
  };
  protoOf(Rect).deflate_wl1pyb_k$ = function (delta) {
    return this.inflate_f59jyf_k$(-delta);
  };
  protoOf(Rect).intersect_f9p2yv_k$ = function (other) {
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.left_1;
    var tmp1_max = other.left_1;
    var tmp = Math.max(tmp0_max, tmp1_max);
    // Inline function 'kotlin.math.max' call
    var tmp2_max = this.top_1;
    var tmp3_max = other.top_1;
    var tmp_0 = Math.max(tmp2_max, tmp3_max);
    // Inline function 'kotlin.math.min' call
    var tmp4_min = this.right_1;
    var tmp5_min = other.right_1;
    var tmp_1 = Math.min(tmp4_min, tmp5_min);
    var tmp$ret$3;
    // Inline function 'kotlin.math.min' call
    var tmp6_min = this.bottom_1;
    var tmp7_min = other.bottom_1;
    tmp$ret$3 = Math.min(tmp6_min, tmp7_min);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).overlaps_b0bhu4_k$ = function (other) {
    if (this.right_1 <= other.left_1 ? true : other.right_1 <= this.left_1)
      return false;
    if (this.bottom_1 <= other.top_1 ? true : other.bottom_1 <= this.top_1)
      return false;
    return true;
  };
  protoOf(Rect).get_minDimension_t9b43n_k$ = function () {
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0_get_absoluteValue_aog79f = this.get_width_j0q4yl_k$();
    var tmp2_min = Math.abs(tmp0_get_absoluteValue_aog79f);
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1_get_absoluteValue_on85xe = this.get_height_e7t92o_k$();
    var tmp3_min = Math.abs(tmp1_get_absoluteValue_on85xe);
    return Math.min(tmp2_min, tmp3_min);
  };
  protoOf(Rect).get_maxDimension_xxccdn_k$ = function () {
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0_get_absoluteValue_aog79f = this.get_width_j0q4yl_k$();
    var tmp2_max = Math.abs(tmp0_get_absoluteValue_aog79f);
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1_get_absoluteValue_on85xe = this.get_height_e7t92o_k$();
    var tmp3_max = Math.abs(tmp1_get_absoluteValue_on85xe);
    return Math.max(tmp2_max, tmp3_max);
  };
  protoOf(Rect).get_topLeft_qjp8dj_k$ = function () {
    return Offset_0(this.left_1, this.top_1);
  };
  protoOf(Rect).get_topCenter_zfsoad_k$ = function () {
    return Offset_0(this.left_1 + this.get_width_j0q4yl_k$() / 2.0, this.top_1);
  };
  protoOf(Rect).get_topRight_xe1k4k_k$ = function () {
    return Offset_0(this.right_1, this.top_1);
  };
  protoOf(Rect).get_centerLeft_htlaef_k$ = function () {
    return Offset_0(this.left_1, this.top_1 + this.get_height_e7t92o_k$() / 2.0);
  };
  protoOf(Rect).get_center_568eeq_k$ = function () {
    return Offset_0(this.left_1 + this.get_width_j0q4yl_k$() / 2.0, this.top_1 + this.get_height_e7t92o_k$() / 2.0);
  };
  protoOf(Rect).get_centerRight_7j4fle_k$ = function () {
    return Offset_0(this.right_1, this.top_1 + this.get_height_e7t92o_k$() / 2.0);
  };
  protoOf(Rect).get_bottomLeft_q0jlkf_k$ = function () {
    return Offset_0(this.left_1, this.bottom_1);
  };
  protoOf(Rect).get_bottomCenter_la770d_k$ = function () {
    return Offset_0(this.left_1 + this.get_width_j0q4yl_k$() / 2.0, this.bottom_1);
  };
  protoOf(Rect).get_bottomRight_gw6x24_k$ = function () {
    return Offset_0(this.right_1, this.bottom_1);
  };
  protoOf(Rect).contains_ggguyy_k$ = function (offset) {
    return ((_Offset___get_x__impl__xvi35n(offset) >= this.left_1 ? _Offset___get_x__impl__xvi35n(offset) < this.right_1 : false) ? _Offset___get_y__impl__8bzhra(offset) >= this.top_1 : false) ? _Offset___get_y__impl__8bzhra(offset) < this.bottom_1 : false;
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.left_1, 1) + ', ') + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + (toStringAsFixed(this.bottom_1, 1) + ')');
  };
  protoOf(Rect).component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  protoOf(Rect).component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  protoOf(Rect).component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  protoOf(Rect).component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Rect).copy_skjbed_k$ = function (left, top, right, bottom) {
    return new Rect(left, top, right, bottom);
  };
  protoOf(Rect).copy$default_8axww1_k$ = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    return $super === VOID ? this.copy_skjbed_k$(left, top, right, bottom) : $super.copy_skjbed_k$.call(this, left, top, right, bottom);
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.left_1);
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.right_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Rect_1(topLeft, bottomRight) {
    return new Rect(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(bottomRight), _Offset___get_y__impl__8bzhra(bottomRight));
  }
  function _set__scaledRadiiRect__azre1j($this, _set____db54di) {
    $this._scaledRadiiRect_1 = _set____db54di;
  }
  function _get__scaledRadiiRect__uy8eut($this) {
    return $this._scaledRadiiRect_1;
  }
  function scaledRadiiRect($this) {
    var tmp0_elvis_lhs = $this._scaledRadiiRect_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.geometry.RoundRect.scaledRadiiRect.<anonymous>' call
      var scale = 1.0;
      scale = minRadius($this, scale, _CornerRadius___get_y__impl__tyvleu($this.bottomLeftCornerRadius_1), _CornerRadius___get_y__impl__tyvleu($this.topLeftCornerRadius_1), $this.get_height_e7t92o_k$());
      scale = minRadius($this, scale, _CornerRadius___get_x__impl__1594cn($this.topLeftCornerRadius_1), _CornerRadius___get_x__impl__1594cn($this.topRightCornerRadius_1), $this.get_width_j0q4yl_k$());
      scale = minRadius($this, scale, _CornerRadius___get_y__impl__tyvleu($this.topRightCornerRadius_1), _CornerRadius___get_y__impl__tyvleu($this.bottomRightCornerRadius_1), $this.get_height_e7t92o_k$());
      scale = minRadius($this, scale, _CornerRadius___get_x__impl__1594cn($this.bottomRightCornerRadius_1), _CornerRadius___get_x__impl__1594cn($this.bottomLeftCornerRadius_1), $this.get_width_j0q4yl_k$());
      var tmp0_also = new RoundRect($this.left_1 * scale, $this.top_1 * scale, $this.right_1 * scale, $this.bottom_1 * scale, CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this.topLeftCornerRadius_1) * scale, _CornerRadius___get_y__impl__tyvleu($this.topLeftCornerRadius_1) * scale), CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this.topRightCornerRadius_1) * scale, _CornerRadius___get_y__impl__tyvleu($this.topRightCornerRadius_1) * scale), CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this.bottomRightCornerRadius_1) * scale, _CornerRadius___get_y__impl__tyvleu($this.bottomRightCornerRadius_1) * scale), CornerRadius_0(_CornerRadius___get_x__impl__1594cn($this.bottomLeftCornerRadius_1) * scale, _CornerRadius___get_y__impl__tyvleu($this.bottomLeftCornerRadius_1) * scale));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.geometry.RoundRect.scaledRadiiRect.<anonymous>' call
      $this._scaledRadiiRect_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function minRadius($this, min, radius1, radius2, limit) {
    var sum = radius1 + radius2;
    var tmp;
    if (sum > limit ? !(sum === 0.0) : false) {
      // Inline function 'kotlin.math.min' call
      var tmp0_min = limit / sum;
      tmp = Math.min(min, tmp0_min);
    } else {
      tmp = min;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.Zero_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().get_Zero_5wbciv_k$());
  }
  protoOf(Companion_2).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().get_Zero_5wbciv_k$() : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().get_Zero_5wbciv_k$() : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().get_Zero_5wbciv_k$() : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().get_Zero_5wbciv_k$() : bottomLeftCornerRadius;
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    this.topLeftCornerRadius_1 = topLeftCornerRadius;
    this.topRightCornerRadius_1 = topRightCornerRadius;
    this.bottomRightCornerRadius_1 = bottomRightCornerRadius;
    this.bottomLeftCornerRadius_1 = bottomLeftCornerRadius;
    this._scaledRadiiRect_1 = null;
    this.$stable_1 = 0;
  }
  protoOf(RoundRect).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  protoOf(RoundRect).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(RoundRect).get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  protoOf(RoundRect).get_bottom_bj8ras_k$ = function () {
    return this.bottom_1;
  };
  protoOf(RoundRect).get_topLeftCornerRadius_nzteym_k$ = function () {
    return this.topLeftCornerRadius_1;
  };
  protoOf(RoundRect).get_topRightCornerRadius_h21xrz_k$ = function () {
    return this.topRightCornerRadius_1;
  };
  protoOf(RoundRect).get_bottomRightCornerRadius_vv4dft_k$ = function () {
    return this.bottomRightCornerRadius_1;
  };
  protoOf(RoundRect).get_bottomLeftCornerRadius_na53na_k$ = function () {
    return this.bottomLeftCornerRadius_1;
  };
  protoOf(RoundRect).get_width_j0q4yl_k$ = function () {
    return this.right_1 - this.left_1;
  };
  protoOf(RoundRect).get_height_e7t92o_k$ = function () {
    return this.bottom_1 - this.top_1;
  };
  protoOf(RoundRect).contains_ggguyy_k$ = function (point) {
    if (((_Offset___get_x__impl__xvi35n(point) < this.left_1 ? true : _Offset___get_x__impl__xvi35n(point) >= this.right_1) ? true : _Offset___get_y__impl__8bzhra(point) < this.top_1) ? true : _Offset___get_y__impl__8bzhra(point) >= this.bottom_1) {
      return false;
    }
    var scaled = scaledRadiiRect(this);
    var x;
    var y;
    var radiusX;
    var radiusY;
    if (_Offset___get_x__impl__xvi35n(point) < this.left_1 + _CornerRadius___get_x__impl__1594cn(scaled.topLeftCornerRadius_1) ? _Offset___get_y__impl__8bzhra(point) < this.top_1 + _CornerRadius___get_y__impl__tyvleu(scaled.topLeftCornerRadius_1) : false) {
      x = _Offset___get_x__impl__xvi35n(point) - this.left_1 - _CornerRadius___get_x__impl__1594cn(scaled.topLeftCornerRadius_1);
      y = _Offset___get_y__impl__8bzhra(point) - this.top_1 - _CornerRadius___get_y__impl__tyvleu(scaled.topLeftCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__1594cn(scaled.topLeftCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__tyvleu(scaled.topLeftCornerRadius_1);
    } else if (_Offset___get_x__impl__xvi35n(point) > this.right_1 - _CornerRadius___get_x__impl__1594cn(scaled.topRightCornerRadius_1) ? _Offset___get_y__impl__8bzhra(point) < this.top_1 + _CornerRadius___get_y__impl__tyvleu(scaled.topRightCornerRadius_1) : false) {
      x = _Offset___get_x__impl__xvi35n(point) - this.right_1 + _CornerRadius___get_x__impl__1594cn(scaled.topRightCornerRadius_1);
      y = _Offset___get_y__impl__8bzhra(point) - this.top_1 - _CornerRadius___get_y__impl__tyvleu(scaled.topRightCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__1594cn(scaled.topRightCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__tyvleu(scaled.topRightCornerRadius_1);
    } else if (_Offset___get_x__impl__xvi35n(point) > this.right_1 - _CornerRadius___get_x__impl__1594cn(scaled.bottomRightCornerRadius_1) ? _Offset___get_y__impl__8bzhra(point) > this.bottom_1 - _CornerRadius___get_y__impl__tyvleu(scaled.bottomRightCornerRadius_1) : false) {
      x = _Offset___get_x__impl__xvi35n(point) - this.right_1 + _CornerRadius___get_x__impl__1594cn(scaled.bottomRightCornerRadius_1);
      y = _Offset___get_y__impl__8bzhra(point) - this.bottom_1 + _CornerRadius___get_y__impl__tyvleu(scaled.bottomRightCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__1594cn(scaled.bottomRightCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__tyvleu(scaled.bottomRightCornerRadius_1);
    } else if (_Offset___get_x__impl__xvi35n(point) < this.left_1 + _CornerRadius___get_x__impl__1594cn(scaled.bottomLeftCornerRadius_1) ? _Offset___get_y__impl__8bzhra(point) > this.bottom_1 - _CornerRadius___get_y__impl__tyvleu(scaled.bottomLeftCornerRadius_1) : false) {
      x = _Offset___get_x__impl__xvi35n(point) - this.left_1 - _CornerRadius___get_x__impl__1594cn(scaled.bottomLeftCornerRadius_1);
      y = _Offset___get_y__impl__8bzhra(point) - this.bottom_1 + _CornerRadius___get_y__impl__tyvleu(scaled.bottomLeftCornerRadius_1);
      radiusX = _CornerRadius___get_x__impl__1594cn(scaled.bottomLeftCornerRadius_1);
      radiusY = _CornerRadius___get_y__impl__tyvleu(scaled.bottomLeftCornerRadius_1);
    } else {
      return true;
    }
    var newX = x / radiusX;
    var newY = y / radiusY;
    return newX * newX + newY * newY <= 1.0;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.topLeftCornerRadius_1;
    var trRadius = this.topRightCornerRadius_1;
    var brRadius = this.bottomRightCornerRadius_1;
    var blRadius = this.bottomLeftCornerRadius_1;
    var rect = toStringAsFixed(this.left_1, 1) + ', ' + (toStringAsFixed(this.top_1, 1) + ', ') + (toStringAsFixed(this.right_1, 1) + ', ') + toStringAsFixed(this.bottom_1, 1);
    if ((equals(tlRadius, trRadius) ? equals(trRadius, brRadius) : false) ? equals(brRadius, blRadius) : false) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + new CornerRadius(tlRadius) + ', ') + ('topRight=' + new CornerRadius(trRadius) + ', ') + ('bottomRight=' + new CornerRadius(brRadius) + ', ') + ('bottomLeft=' + new CornerRadius(blRadius) + ')');
  };
  protoOf(RoundRect).component1_7eebsc_k$ = function () {
    return this.left_1;
  };
  protoOf(RoundRect).component2_7eebsb_k$ = function () {
    return this.top_1;
  };
  protoOf(RoundRect).component3_7eebsa_k$ = function () {
    return this.right_1;
  };
  protoOf(RoundRect).component4_7eebs9_k$ = function () {
    return this.bottom_1;
  };
  protoOf(RoundRect).component5_hvouow_k$ = function () {
    return this.topLeftCornerRadius_1;
  };
  protoOf(RoundRect).component6_kjz4nz_k$ = function () {
    return this.topRightCornerRadius_1;
  };
  protoOf(RoundRect).component7_c1gxya_k$ = function () {
    return this.bottomRightCornerRadius_1;
  };
  protoOf(RoundRect).component8_qe71el_k$ = function () {
    return this.bottomLeftCornerRadius_1;
  };
  protoOf(RoundRect).copy_qy0ogv_k$ = function (left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    return new RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius);
  };
  protoOf(RoundRect).copy$default_lvciiv_k$ = function (left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius, $super) {
    left = left === VOID ? this.left_1 : left;
    top = top === VOID ? this.top_1 : top;
    right = right === VOID ? this.right_1 : right;
    bottom = bottom === VOID ? this.bottom_1 : bottom;
    topLeftCornerRadius = topLeftCornerRadius === VOID ? this.topLeftCornerRadius_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? this.topRightCornerRadius_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? this.bottomRightCornerRadius_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? this.bottomLeftCornerRadius_1 : bottomLeftCornerRadius;
    return $super === VOID ? this.copy_qy0ogv_k$(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) : $super.copy_qy0ogv_k$.call(this, left, top, right, bottom, new CornerRadius(topLeftCornerRadius), new CornerRadius(topRightCornerRadius), new CornerRadius(bottomRightCornerRadius), new CornerRadius(bottomLeftCornerRadius));
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.left_1);
    result = imul(result, 31) + getNumberHashCode(this.top_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.right_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.bottom_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.topLeftCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.topRightCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.bottomRightCornerRadius_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.bottomLeftCornerRadius_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.left_1, tmp0_other_with_cast.left_1))
      return false;
    if (!equals(this.top_1, tmp0_other_with_cast.top_1))
      return false;
    if (!equals(this.right_1, tmp0_other_with_cast.right_1))
      return false;
    if (!equals(this.bottom_1, tmp0_other_with_cast.bottom_1))
      return false;
    if (!equals(this.topLeftCornerRadius_1, tmp0_other_with_cast.topLeftCornerRadius_1))
      return false;
    if (!equals(this.topRightCornerRadius_1, tmp0_other_with_cast.topRightCornerRadius_1))
      return false;
    if (!equals(this.bottomRightCornerRadius_1, tmp0_other_with_cast.bottomRightCornerRadius_1))
      return false;
    if (!equals(this.bottomLeftCornerRadius_1, tmp0_other_with_cast.bottomLeftCornerRadius_1))
      return false;
    return true;
  };
  function get_boundingRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.left_1, _this__u8e3s4.top_1, _this__u8e3s4.right_1, _this__u8e3s4.bottom_1);
  }
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().get_Zero_5wbciv_k$() : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().get_Zero_5wbciv_k$() : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().get_Zero_5wbciv_k$() : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().get_Zero_5wbciv_k$() : bottomLeft;
    return new RoundRect(rect.get_left_woprgw_k$(), rect.get_top_18ivbo_k$(), rect.get_right_ixz7xv_k$(), rect.get_bottom_bj8ras_k$(), topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function get_isSimple(_this__u8e3s4) {
    return (((((_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.topLeftCornerRadius_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topRightCornerRadius_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.topRightCornerRadius_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.bottomRightCornerRadius_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.bottomRightCornerRadius_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.bottomLeftCornerRadius_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.topLeftCornerRadius_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.bottomLeftCornerRadius_1) : false;
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().Unspecified_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-width>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    return floatFromBits(tmp1_fromBits);
  }
  function _Size___get_height__impl__a04p02($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().Unspecified_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-height>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return floatFromBits(tmp1_fromBits);
  }
  function Size__component1_impl_9kmfl4($this) {
    return _Size___get_width__impl__58y75t($this);
  }
  function Size__component2_impl_93kt6x($this) {
    return _Size___get_height__impl__a04p02($this);
  }
  function Size__copy_impl_jrw2sp($this, width, height) {
    return Size_0(width, height);
  }
  function Size__copy$default_impl_nrzrkq($this, width, height, $super) {
    width = width === VOID ? _Size___get_width__impl__58y75t($this) : width;
    height = height === VOID ? _Size___get_height__impl__a04p02($this) : height;
    var tmp;
    if ($super === VOID) {
      tmp = Size__copy_impl_jrw2sp($this, width, height);
    } else {
      var tmp_0 = new Size($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Size(tmp_1)).copy_c30i9j_k$.call(tmp_0, width, height).packedValue_1;
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.Zero_1 = Size_0(0.0, 0.0);
    this.Unspecified_1 = Size_0(FloatCompanionObject_getInstance().get_NaN_18jnv2_k$(), FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
  }
  protoOf(Companion_3).get_Zero_mv7bl9_k$ = function () {
    return this.Zero_1;
  };
  protoOf(Companion_3).get_Unspecified_o59ai8_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Size__isEmpty_impl_o9ye97($this) {
    return _Size___get_width__impl__58y75t($this) <= 0.0 ? true : _Size___get_height__impl__a04p02($this) <= 0.0;
  }
  function Size__times_impl_fnp4nc($this, operand) {
    return Size_0(_Size___get_width__impl__58y75t($this) * operand, _Size___get_height__impl__a04p02($this) * operand);
  }
  function Size__div_impl_f5ffdp($this, operand) {
    return Size_0(_Size___get_width__impl__58y75t($this) / operand, _Size___get_height__impl__a04p02($this) / operand);
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0_get_absoluteValue_aog79f = _Size___get_width__impl__58y75t($this);
    var tmp2_min = Math.abs(tmp0_get_absoluteValue_aog79f);
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1_get_absoluteValue_on85xe = _Size___get_height__impl__a04p02($this);
    var tmp3_min = Math.abs(tmp1_get_absoluteValue_on85xe);
    return Math.min(tmp2_min, tmp3_min);
  }
  function _Size___get_maxDimension__impl__3y1xu1($this) {
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0_get_absoluteValue_aog79f = _Size___get_width__impl__58y75t($this);
    var tmp2_max = Math.abs(tmp0_get_absoluteValue_aog79f);
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1_get_absoluteValue_on85xe = _Size___get_height__impl__a04p02($this);
    var tmp3_max = Math.abs(tmp1_get_absoluteValue_on85xe);
    return Math.max(tmp2_max, tmp3_max);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().Unspecified_1))) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.packedValue_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.packedValue_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.packedValue_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.packedValue_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().get_Zero_sctq3f_k$(), _this__u8e3s4);
  }
  function get_isSpecified_0(_this__u8e3s4) {
    return !_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().Unspecified_1));
  }
  function Size_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(width));
    var v2 = toLong(toBits(height));
    tmp$ret$0 = v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    return Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4) / 2.0);
  }
  function get_isUnspecified_0(_this__u8e3s4) {
    return _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().Unspecified_1));
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius_0;
  _.$_$.b = CornerRadius;
  _.$_$.c = MutableRect;
  _.$_$.d = Offset_0;
  _.$_$.e = Offset;
  _.$_$.f = Rect_1;
  _.$_$.g = Rect_0;
  _.$_$.h = Rect;
  _.$_$.i = RoundRect_0;
  _.$_$.j = RoundRect;
  _.$_$.k = Size_0;
  _.$_$.l = Size;
  _.$_$.m = get_boundingRect;
  _.$_$.n = get_center;
  _.$_$.o = get_isFinite;
  _.$_$.p = get_isSimple;
  _.$_$.q = get_isSpecified;
  _.$_$.r = get_isUnspecified;
  _.$_$.s = lerp_0;
  _.$_$.t = toRect;
  _.$_$.u = toRect_0;
  _.$_$.v = _CornerRadius___get_x__impl__1594cn;
  _.$_$.w = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.x = Offset__component1_impl_qn5q2;
  _.$_$.y = Offset__component2_impl_9ljbv;
  _.$_$.z = Offset__div_impl_eaxtg1;
  _.$_$.a1 = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.b1 = Offset__getDistance_impl_pclvxn;
  _.$_$.c1 = Offset__hashCode_impl_hbql41;
  _.$_$.d1 = Offset__isValid_impl_z7krde;
  _.$_$.e1 = Offset__minus_impl_hoj2c0;
  _.$_$.f1 = Offset__plus_impl_c78cg0;
  _.$_$.g1 = Offset__times_impl_jz1mli;
  _.$_$.h1 = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.i1 = _Offset___get_x__impl__xvi35n;
  _.$_$.j1 = _Offset___get_y__impl__8bzhra;
  _.$_$.k1 = Size__hashCode_impl_2h1qpd;
  _.$_$.l1 = _Size___get_height__impl__a04p02;
  _.$_$.m1 = Size__isEmpty_impl_o9ye97;
  _.$_$.n1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.o1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.p1 = _Size___get_width__impl__58y75t;
  _.$_$.q1 = Offset__copy$default_impl_bmwjg8;
  _.$_$.r1 = Companion_getInstance;
  _.$_$.s1 = Companion_getInstance_0;
  _.$_$.t1 = Companion_getInstance_1;
  _.$_$.u1 = Companion_getInstance_3;
  //endregion
  return _;
}));
