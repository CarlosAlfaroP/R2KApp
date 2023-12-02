(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-util.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-ui-geometry'.");
    }
    if (typeof this['compose-multiplatform-core-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-geometry'. Its dependency 'compose-multiplatform-core-ui-util' was not found. Please, check whether 'compose-multiplatform-core-ui-util' is loaded prior to 'compose-multiplatform-core-ui-geometry'.");
    }
    root['compose-multiplatform-core-ui-geometry'] = factory(typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-geometry'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-util']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var floatFromBits = kotlin_kotlin.$_$.v8;
  var Long = kotlin_kotlin.$_$.rc;
  var protoOf = kotlin_kotlin.$_$.r9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var classMeta = kotlin_kotlin.$_$.p8;
  var VOID = kotlin_kotlin.$_$.d;
  var toBits = kotlin_kotlin.$_$.yd;
  var toLong = kotlin_kotlin.$_$.t9;
  var numberToInt = kotlin_kotlin.$_$.n9;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var isNaN_0 = kotlin_kotlin.$_$.md;
  var isFinite = kotlin_kotlin.$_$.kd;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var getNumberHashCode = kotlin_kotlin.$_$.y8;
  var equals = kotlin_kotlin.$_$.t8;
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
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).xa(32).db();
    return floatFromBits(bits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).za(new Long(-1, 0)).db();
    return floatFromBits(bits);
  }
  function Companion() {
    Companion_instance = this;
    this.r38_1 = CornerRadius_0(0.0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
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
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.s38_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.s38_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.s38_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.s38_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.s38_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    var tmp$ret$0 = v1.wa(32).ab(v2.za(new Long(-1, 0)));
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
  function MutableRect(left, top, right, bottom) {
    this.t38_1 = left;
    this.u38_1 = top;
    this.v38_1 = right;
    this.w38_1 = bottom;
    this.x38_1 = 8;
  }
  protoOf(MutableRect).n26 = function () {
    return this.t38_1 >= this.v38_1 ? true : this.u38_1 >= this.w38_1;
  };
  protoOf(MutableRect).y38 = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var b = this.t38_1;
    tmp.t38_1 = Math.max(left, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var b_0 = this.u38_1;
    tmp_0.u38_1 = Math.max(top, b_0);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var b_1 = this.v38_1;
    tmp_1.v38_1 = Math.min(right, b_1);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var b_2 = this.w38_1;
    tmp_2.w38_1 = Math.min(bottom, b_2);
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.t38_1, 1) + ', ') + (toStringAsFixed(this.u38_1, 1) + ', ') + (toStringAsFixed(this.v38_1, 1) + ', ') + (toStringAsFixed(this.w38_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.t38_1, _this__u8e3s4.u38_1, _this__u8e3s4.v38_1, _this__u8e3s4.w38_1);
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
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().b39_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-x>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).xa(32).db();
    return floatFromBits(bits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().b39_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-y>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).za(new Long(-1, 0)).db();
    return floatFromBits(bits);
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
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Offset(tmp_0)).d39.call(new Offset($this), x, y).c39_1;
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.z38_1 = Offset_0(0.0, 0.0);
    var tmp = this;
    tmp.a39_1 = Offset_0(Infinity, Infinity);
    var tmp_0 = this;
    tmp_0.b39_1 = Offset_0(NaN, NaN);
  }
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
    var x = _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
    return Math.sqrt(x);
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
    var tmp0_other_with_cast = other instanceof Offset ? other.c39_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.c39_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.c39_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.c39_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.c39_1, other);
  };
  function Offset_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    var tmp$ret$0 = v1.wa(32).ab(v2.za(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    return isFinite(_Offset___get_x__impl__xvi35n(_this__u8e3s4)) ? isFinite(_Offset___get_y__impl__8bzhra(_this__u8e3s4)) : false;
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().b39_1));
  }
  function get_isUnspecified(_this__u8e3s4) {
    return _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().b39_1));
  }
  function lerp_0(start, stop, fraction) {
    return Offset_0(lerp(_Offset___get_x__impl__xvi35n(start), _Offset___get_x__impl__xvi35n(stop), fraction), lerp(_Offset___get_y__impl__8bzhra(start), _Offset___get_y__impl__8bzhra(stop), fraction));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.e39_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.f39_1 = left;
    this.g39_1 = top;
    this.h39_1 = right;
    this.i39_1 = bottom;
    this.j39_1 = 0;
  }
  protoOf(Rect).k39 = function () {
    return this.h39_1 - this.f39_1;
  };
  protoOf(Rect).l39 = function () {
    return this.i39_1 - this.g39_1;
  };
  protoOf(Rect).m39 = function () {
    return Size_0(this.k39(), this.l39());
  };
  protoOf(Rect).n39 = function (offset) {
    return new Rect(this.f39_1 + _Offset___get_x__impl__xvi35n(offset), this.g39_1 + _Offset___get_y__impl__8bzhra(offset), this.h39_1 + _Offset___get_x__impl__xvi35n(offset), this.i39_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).o39 = function (translateX, translateY) {
    return new Rect(this.f39_1 + translateX, this.g39_1 + translateY, this.h39_1 + translateX, this.i39_1 + translateY);
  };
  protoOf(Rect).p39 = function (delta) {
    return new Rect(this.f39_1 - delta, this.g39_1 - delta, this.h39_1 + delta, this.i39_1 + delta);
  };
  protoOf(Rect).q39 = function (other) {
    // Inline function 'kotlin.math.max' call
    var a = this.f39_1;
    var b = other.f39_1;
    var tmp = Math.max(a, b);
    // Inline function 'kotlin.math.max' call
    var a_0 = this.g39_1;
    var b_0 = other.g39_1;
    var tmp_0 = Math.max(a_0, b_0);
    // Inline function 'kotlin.math.min' call
    var a_1 = this.h39_1;
    var b_1 = other.h39_1;
    var tmp_1 = Math.min(a_1, b_1);
    // Inline function 'kotlin.math.min' call
    var a_2 = this.i39_1;
    var b_2 = other.i39_1;
    var tmp$ret$3 = Math.min(a_2, b_2);
    return new Rect(tmp, tmp_0, tmp_1, tmp$ret$3);
  };
  protoOf(Rect).r39 = function (other) {
    if (this.h39_1 <= other.f39_1 ? true : other.h39_1 <= this.f39_1)
      return false;
    if (this.i39_1 <= other.g39_1 ? true : other.i39_1 <= this.g39_1)
      return false;
    return true;
  };
  protoOf(Rect).s39 = function () {
    return Offset_0(this.f39_1, this.g39_1);
  };
  protoOf(Rect).t39 = function () {
    return Offset_0(this.f39_1 + this.k39() / 2.0, this.g39_1 + this.l39() / 2.0);
  };
  protoOf(Rect).u39 = function () {
    return Offset_0(this.h39_1, this.i39_1);
  };
  protoOf(Rect).v39 = function (offset) {
    return ((_Offset___get_x__impl__xvi35n(offset) >= this.f39_1 ? _Offset___get_x__impl__xvi35n(offset) < this.h39_1 : false) ? _Offset___get_y__impl__8bzhra(offset) >= this.g39_1 : false) ? _Offset___get_y__impl__8bzhra(offset) < this.i39_1 : false;
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.f39_1, 1) + ', ') + (toStringAsFixed(this.g39_1, 1) + ', ') + (toStringAsFixed(this.h39_1, 1) + ', ') + (toStringAsFixed(this.i39_1, 1) + ')');
  };
  protoOf(Rect).w39 = function (left, top, right, bottom) {
    return new Rect(left, top, right, bottom);
  };
  protoOf(Rect).x39 = function (left, top, right, bottom, $super) {
    left = left === VOID ? this.f39_1 : left;
    top = top === VOID ? this.g39_1 : top;
    right = right === VOID ? this.h39_1 : right;
    bottom = bottom === VOID ? this.i39_1 : bottom;
    return $super === VOID ? this.w39(left, top, right, bottom) : $super.w39.call(this, left, top, right, bottom);
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.f39_1);
    result = imul(result, 31) + getNumberHashCode(this.g39_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h39_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.i39_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.f39_1, tmp0_other_with_cast.f39_1))
      return false;
    if (!equals(this.g39_1, tmp0_other_with_cast.g39_1))
      return false;
    if (!equals(this.h39_1, tmp0_other_with_cast.h39_1))
      return false;
    if (!equals(this.i39_1, tmp0_other_with_cast.i39_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Rect_1(topLeft, bottomRight) {
    return new Rect(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(bottomRight), _Offset___get_y__impl__8bzhra(bottomRight));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.y39_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().r38_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().r38_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().r38_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().r38_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().r38_1 : bottomLeftCornerRadius;
    this.z39_1 = left;
    this.a3a_1 = top;
    this.b3a_1 = right;
    this.c3a_1 = bottom;
    this.d3a_1 = topLeftCornerRadius;
    this.e3a_1 = topRightCornerRadius;
    this.f3a_1 = bottomRightCornerRadius;
    this.g3a_1 = bottomLeftCornerRadius;
    this.h3a_1 = null;
    this.i3a_1 = 0;
  }
  protoOf(RoundRect).k39 = function () {
    return this.b3a_1 - this.z39_1;
  };
  protoOf(RoundRect).l39 = function () {
    return this.c3a_1 - this.a3a_1;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.d3a_1;
    var trRadius = this.e3a_1;
    var brRadius = this.f3a_1;
    var blRadius = this.g3a_1;
    var rect = toStringAsFixed(this.z39_1, 1) + ', ' + (toStringAsFixed(this.a3a_1, 1) + ', ') + (toStringAsFixed(this.b3a_1, 1) + ', ') + toStringAsFixed(this.c3a_1, 1);
    if ((equals(tlRadius, trRadius) ? equals(trRadius, brRadius) : false) ? equals(brRadius, blRadius) : false) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + new CornerRadius(tlRadius) + ', ') + ('topRight=' + new CornerRadius(trRadius) + ', ') + ('bottomRight=' + new CornerRadius(brRadius) + ', ') + ('bottomLeft=' + new CornerRadius(blRadius) + ')');
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.z39_1);
    result = imul(result, 31) + getNumberHashCode(this.a3a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b3a_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.c3a_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.d3a_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.e3a_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.f3a_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.g3a_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.z39_1, tmp0_other_with_cast.z39_1))
      return false;
    if (!equals(this.a3a_1, tmp0_other_with_cast.a3a_1))
      return false;
    if (!equals(this.b3a_1, tmp0_other_with_cast.b3a_1))
      return false;
    if (!equals(this.c3a_1, tmp0_other_with_cast.c3a_1))
      return false;
    if (!equals(this.d3a_1, tmp0_other_with_cast.d3a_1))
      return false;
    if (!equals(this.e3a_1, tmp0_other_with_cast.e3a_1))
      return false;
    if (!equals(this.f3a_1, tmp0_other_with_cast.f3a_1))
      return false;
    if (!equals(this.g3a_1, tmp0_other_with_cast.g3a_1))
      return false;
    return true;
  };
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().r38_1 : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().r38_1 : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().r38_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().r38_1 : bottomLeft;
    return new RoundRect(rect.f39_1, rect.g39_1, rect.h39_1, rect.i39_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function get_isSimple(_this__u8e3s4) {
    return (((((_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d3a_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.d3a_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d3a_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.e3a_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d3a_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.e3a_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d3a_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.f3a_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d3a_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.f3a_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d3a_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.g3a_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d3a_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.g3a_1) : false;
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
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().k3a_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-width>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).xa(32).db();
    return floatFromBits(bits);
  }
  function _Size___get_height__impl__a04p02($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().k3a_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-height>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).za(new Long(-1, 0)).db();
    return floatFromBits(bits);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.j3a_1 = Size_0(0.0, 0.0);
    var tmp = this;
    tmp.k3a_1 = Size_0(NaN, NaN);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Size__isEmpty_impl_o9ye97($this) {
    return _Size___get_width__impl__58y75t($this) <= 0.0 ? true : _Size___get_height__impl__a04p02($this) <= 0.0;
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = _Size___get_width__impl__58y75t($this);
    var a = Math.abs(this_0);
    // Inline function 'kotlin.math.absoluteValue' call
    var this_1 = _Size___get_height__impl__a04p02($this);
    var b = Math.abs(this_1);
    return Math.min(a, b);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().k3a_1))) {
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
    var tmp0_other_with_cast = other instanceof Size ? other.l3a_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.l3a_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.l3a_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.l3a_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.l3a_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().z38_1, _this__u8e3s4);
  }
  function Size_0(width, height) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(width));
    var v2 = toLong(toBits(height));
    var tmp$ret$0 = v1.wa(32).ab(v2.za(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    return Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4) / 2.0);
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
  _.$_$.m = get_center;
  _.$_$.n = get_isFinite;
  _.$_$.o = get_isSimple;
  _.$_$.p = get_isSpecified;
  _.$_$.q = get_isUnspecified;
  _.$_$.r = lerp_0;
  _.$_$.s = toRect;
  _.$_$.t = toRect_0;
  _.$_$.u = _CornerRadius___get_x__impl__1594cn;
  _.$_$.v = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.w = Offset__component1_impl_qn5q2;
  _.$_$.x = Offset__component2_impl_9ljbv;
  _.$_$.y = Offset__div_impl_eaxtg1;
  _.$_$.z = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.a1 = Offset__getDistance_impl_pclvxn;
  _.$_$.b1 = Offset__hashCode_impl_hbql41;
  _.$_$.c1 = Offset__isValid_impl_z7krde;
  _.$_$.d1 = Offset__minus_impl_hoj2c0;
  _.$_$.e1 = Offset__plus_impl_c78cg0;
  _.$_$.f1 = Offset__times_impl_jz1mli;
  _.$_$.g1 = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.h1 = _Offset___get_x__impl__xvi35n;
  _.$_$.i1 = _Offset___get_y__impl__8bzhra;
  _.$_$.j1 = Size__hashCode_impl_2h1qpd;
  _.$_$.k1 = _Size___get_height__impl__a04p02;
  _.$_$.l1 = Size__isEmpty_impl_o9ye97;
  _.$_$.m1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.n1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.o1 = _Size___get_width__impl__58y75t;
  _.$_$.p1 = Offset__copy$default_impl_bmwjg8;
  _.$_$.q1 = Companion_getInstance;
  _.$_$.r1 = Companion_getInstance_0;
  _.$_$.s1 = Companion_getInstance_1;
  _.$_$.t1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-geometry.js.map
