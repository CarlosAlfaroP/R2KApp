(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-ui-graphics.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-ui-graphics.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-icons-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-material-icons-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-icons-core'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-material-icons-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-icons-core'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-material-icons-core'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-icons-core'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-material-icons-core'.");
    }
    root['compose-multiplatform-core-material-icons-core'] = factory(typeof this['compose-multiplatform-core-material-icons-core'] === 'undefined' ? {} : this['compose-multiplatform-core-material-icons-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-ui-graphics']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ud;
  var objectMeta = kotlin_kotlin.$_$.td;
  var setMetadataFor = kotlin_kotlin.$_$.vd;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var VOID = kotlin_kotlin.$_$.e;
  var get_DefaultFillType = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a4;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h4;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i4;
  var get_DefaultPathName = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var PathBuilder = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.ji;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Filled, 'Filled', objectMeta);
  setMetadataFor(Outlined, 'Outlined', objectMeta);
  setMetadataFor(Rounded, 'Rounded', objectMeta);
  setMetadataFor(TwoTone, 'TwoTone', objectMeta);
  setMetadataFor(Sharp, 'Sharp', objectMeta);
  setMetadataFor(Icons, 'Icons', objectMeta);
  //endregion
  function get_$stableprop() {
    return 0;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function Filled() {
    Filled_instance = this;
    this.$stable_1 = 0;
  }
  var Filled_instance;
  function Filled_getInstance() {
    if (Filled_instance == null)
      new Filled();
    return Filled_instance;
  }
  function Outlined() {
    Outlined_instance = this;
    this.$stable_1 = 0;
  }
  var Outlined_instance;
  function Outlined_getInstance() {
    if (Outlined_instance == null)
      new Outlined();
    return Outlined_instance;
  }
  function Rounded() {
    Rounded_instance = this;
    this.$stable_1 = 0;
  }
  var Rounded_instance;
  function Rounded_getInstance() {
    if (Rounded_instance == null)
      new Rounded();
    return Rounded_instance;
  }
  function TwoTone() {
    TwoTone_instance = this;
    this.$stable_1 = 0;
  }
  var TwoTone_instance;
  function TwoTone_getInstance() {
    if (TwoTone_instance == null)
      new TwoTone();
    return TwoTone_instance;
  }
  function Sharp() {
    Sharp_instance = this;
    this.$stable_1 = 0;
  }
  var Sharp_instance;
  function Sharp_getInstance() {
    if (Sharp_instance == null)
      new Sharp();
    return Sharp_instance;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function Icons() {
    Icons_instance = this;
    this.Default_1 = Filled_getInstance();
    this.$stable_1 = 0;
  }
  protoOf(Icons).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  var Icons_instance;
  function Icons_getInstance() {
    if (Icons_instance == null)
      new Icons();
    return Icons_instance;
  }
  function materialIcon(name, block) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(24.0);
    return block(new Builder(name, tmp, tmp$ret$1, 24.0, 24.0)).build_1k0s4u_k$();
  }
  function materialPath(_this__u8e3s4, fillAlpha, strokeAlpha, pathFillType, pathBuilder) {
    fillAlpha = fillAlpha === VOID ? 1.0 : fillAlpha;
    strokeAlpha = strokeAlpha === VOID ? 1.0 : strokeAlpha;
    pathFillType = pathFillType === VOID ? get_DefaultFillType() : pathFillType;
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var fill = new SolidColor(Companion_getInstance().get_Black_t4k9fh_k$());
    var strokeLineCap = Companion_getInstance_0().get_Butt_jb7qjw_k$();
    var strokeLineJoin = Companion_getInstance_1().get_Bevel_8ab6n7_k$();
    var name = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    pathBuilder($this$with);
    var tmp$ret$2 = $this$with.getNodes_wff5kr_k$();
    return _this__u8e3s4.addPath$default_98yxvz_k$(tmp$ret$2, pathFillType, name, fill, fillAlpha, null, strokeAlpha, 1.0, strokeLineCap, strokeLineJoin, 1.0);
  }
  function get_MaterialIconDimension() {
    return MaterialIconDimension;
  }
  var MaterialIconDimension;
  function set__accountBox(_set____db54di) {
    _accountBox = _set____db54di;
  }
  function get__accountBox() {
    return _accountBox;
  }
  var _accountBox;
  function set__accountCircle(_set____db54di) {
    _accountCircle = _set____db54di;
  }
  function get__accountCircle() {
    return _accountCircle;
  }
  var _accountCircle;
  function set__add(_set____db54di) {
    _add = _set____db54di;
  }
  function get__add() {
    return _add;
  }
  var _add;
  function set__addCircle(_set____db54di) {
    _addCircle = _set____db54di;
  }
  function get__addCircle() {
    return _addCircle;
  }
  var _addCircle;
  function set__arrowBack(_set____db54di) {
    _arrowBack = _set____db54di;
  }
  function get__arrowBack() {
    return _arrowBack;
  }
  var _arrowBack;
  function set__arrowDropDown(_set____db54di) {
    _arrowDropDown = _set____db54di;
  }
  function get__arrowDropDown() {
    return _arrowDropDown;
  }
  var _arrowDropDown;
  function set__arrowForward(_set____db54di) {
    _arrowForward = _set____db54di;
  }
  function get__arrowForward() {
    return _arrowForward;
  }
  var _arrowForward;
  function set__build(_set____db54di) {
    _build = _set____db54di;
  }
  function get__build() {
    return _build;
  }
  var _build;
  function set__call(_set____db54di) {
    _call = _set____db54di;
  }
  function get__call() {
    return _call;
  }
  var _call;
  function set__check(_set____db54di) {
    _check = _set____db54di;
  }
  function get__check() {
    return _check;
  }
  var _check;
  function set__checkCircle(_set____db54di) {
    _checkCircle = _set____db54di;
  }
  function get__checkCircle() {
    return _checkCircle;
  }
  var _checkCircle;
  function set__clear(_set____db54di) {
    _clear = _set____db54di;
  }
  function get__clear() {
    return _clear;
  }
  var _clear;
  function set__close(_set____db54di) {
    _close = _set____db54di;
  }
  function get__close() {
    return _close;
  }
  var _close;
  function set__create(_set____db54di) {
    _create = _set____db54di;
  }
  function get__create() {
    return _create;
  }
  var _create;
  function set__dateRange(_set____db54di) {
    _dateRange = _set____db54di;
  }
  function get__dateRange() {
    return _dateRange;
  }
  var _dateRange;
  function set__delete(_set____db54di) {
    _delete = _set____db54di;
  }
  function get__delete() {
    return _delete;
  }
  var _delete;
  function set__done(_set____db54di) {
    _done = _set____db54di;
  }
  function get__done() {
    return _done;
  }
  var _done;
  function set__edit(_set____db54di) {
    _edit = _set____db54di;
  }
  function get__edit() {
    return _edit;
  }
  var _edit;
  function set__email(_set____db54di) {
    _email = _set____db54di;
  }
  function get__email() {
    return _email;
  }
  var _email;
  function set__exitToApp(_set____db54di) {
    _exitToApp = _set____db54di;
  }
  function get__exitToApp() {
    return _exitToApp;
  }
  var _exitToApp;
  function set__face(_set____db54di) {
    _face = _set____db54di;
  }
  function get__face() {
    return _face;
  }
  var _face;
  function set__favorite(_set____db54di) {
    _favorite = _set____db54di;
  }
  function get__favorite() {
    return _favorite;
  }
  var _favorite;
  function set__favoriteBorder(_set____db54di) {
    _favoriteBorder = _set____db54di;
  }
  function get__favoriteBorder() {
    return _favoriteBorder;
  }
  var _favoriteBorder;
  function set__home(_set____db54di) {
    _home = _set____db54di;
  }
  function get__home() {
    return _home;
  }
  var _home;
  function get_Home(_this__u8e3s4) {
    if (!(_home == null)) {
      return ensureNotNull(_home);
    }
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var name = 'Filled.Home';
    // Inline function 'androidx.compose.material.icons.filled.<get-Home>.<anonymous>' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = get_MaterialIconDimension();
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = get_MaterialIconDimension();
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var this_2 = new Builder(name, tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var fill = new SolidColor(Companion_getInstance().get_Black_t4k9fh_k$());
    var strokeLineCap = Companion_getInstance_0().get_Butt_jb7qjw_k$();
    var strokeLineJoin = Companion_getInstance_1().get_Bevel_8ab6n7_k$();
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.filled.<get-Home>.<anonymous>.<anonymous>' call
    $this$with.moveTo_n8tdjo_k$(10.0, 20.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-6.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(4.0);
    $this$with.verticalLineToRelative_io0vy1_k$(6.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(5.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-8.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(3.0);
    $this$with.lineTo_985bqp_k$(12.0, 3.0);
    $this$with.lineTo_985bqp_k$(2.0, 12.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(3.0);
    $this$with.verticalLineToRelative_io0vy1_k$(8.0);
    $this$with.close_1keygo_k$();
    var tmp$ret$4 = $this$with.getNodes_wff5kr_k$();
    _home = this_2.addPath$default_98yxvz_k$(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).build_1k0s4u_k$();
    return ensureNotNull(_home);
  }
  function set__info(_set____db54di) {
    _info = _set____db54di;
  }
  function get__info() {
    return _info;
  }
  var _info;
  function set__keyboardArrowDown(_set____db54di) {
    _keyboardArrowDown = _set____db54di;
  }
  function get__keyboardArrowDown() {
    return _keyboardArrowDown;
  }
  var _keyboardArrowDown;
  function set__keyboardArrowLeft(_set____db54di) {
    _keyboardArrowLeft = _set____db54di;
  }
  function get__keyboardArrowLeft() {
    return _keyboardArrowLeft;
  }
  var _keyboardArrowLeft;
  function set__keyboardArrowRight(_set____db54di) {
    _keyboardArrowRight = _set____db54di;
  }
  function get__keyboardArrowRight() {
    return _keyboardArrowRight;
  }
  var _keyboardArrowRight;
  function set__keyboardArrowUp(_set____db54di) {
    _keyboardArrowUp = _set____db54di;
  }
  function get__keyboardArrowUp() {
    return _keyboardArrowUp;
  }
  var _keyboardArrowUp;
  function set__list(_set____db54di) {
    _list = _set____db54di;
  }
  function get__list() {
    return _list;
  }
  var _list;
  function set__locationOn(_set____db54di) {
    _locationOn = _set____db54di;
  }
  function get__locationOn() {
    return _locationOn;
  }
  var _locationOn;
  function set__lock(_set____db54di) {
    _lock = _set____db54di;
  }
  function get__lock() {
    return _lock;
  }
  var _lock;
  function set__mailOutline(_set____db54di) {
    _mailOutline = _set____db54di;
  }
  function get__mailOutline() {
    return _mailOutline;
  }
  var _mailOutline;
  function set__menu(_set____db54di) {
    _menu = _set____db54di;
  }
  function get__menu() {
    return _menu;
  }
  var _menu;
  function get_Menu(_this__u8e3s4) {
    if (!(_menu == null)) {
      return ensureNotNull(_menu);
    }
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var name = 'Filled.Menu';
    // Inline function 'androidx.compose.material.icons.filled.<get-Menu>.<anonymous>' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = get_MaterialIconDimension();
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = get_MaterialIconDimension();
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var this_2 = new Builder(name, tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var fill = new SolidColor(Companion_getInstance().get_Black_t4k9fh_k$());
    var strokeLineCap = Companion_getInstance_0().get_Butt_jb7qjw_k$();
    var strokeLineJoin = Companion_getInstance_1().get_Bevel_8ab6n7_k$();
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.filled.<get-Menu>.<anonymous>.<anonymous>' call
    $this$with.moveTo_n8tdjo_k$(3.0, 18.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(18.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-2.0);
    $this$with.lineTo_985bqp_k$(3.0, 16.0);
    $this$with.verticalLineToRelative_io0vy1_k$(2.0);
    $this$with.close_1keygo_k$();
    $this$with.moveTo_n8tdjo_k$(3.0, 13.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(18.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-2.0);
    $this$with.lineTo_985bqp_k$(3.0, 11.0);
    $this$with.verticalLineToRelative_io0vy1_k$(2.0);
    $this$with.close_1keygo_k$();
    $this$with.moveTo_n8tdjo_k$(3.0, 6.0);
    $this$with.verticalLineToRelative_io0vy1_k$(2.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(18.0);
    $this$with.lineTo_985bqp_k$(21.0, 6.0);
    $this$with.lineTo_985bqp_k$(3.0, 6.0);
    $this$with.close_1keygo_k$();
    var tmp$ret$4 = $this$with.getNodes_wff5kr_k$();
    _menu = this_2.addPath$default_98yxvz_k$(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).build_1k0s4u_k$();
    return ensureNotNull(_menu);
  }
  function set__moreVert(_set____db54di) {
    _moreVert = _set____db54di;
  }
  function get__moreVert() {
    return _moreVert;
  }
  var _moreVert;
  function set__notifications(_set____db54di) {
    _notifications = _set____db54di;
  }
  function get__notifications() {
    return _notifications;
  }
  var _notifications;
  function set__person(_set____db54di) {
    _person = _set____db54di;
  }
  function get__person() {
    return _person;
  }
  var _person;
  function get_Person(_this__u8e3s4) {
    if (!(_person == null)) {
      return ensureNotNull(_person);
    }
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var name = 'Filled.Person';
    // Inline function 'androidx.compose.material.icons.filled.<get-Person>.<anonymous>' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = get_MaterialIconDimension();
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = get_MaterialIconDimension();
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var this_2 = new Builder(name, tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var fill = new SolidColor(Companion_getInstance().get_Black_t4k9fh_k$());
    var strokeLineCap = Companion_getInstance_0().get_Butt_jb7qjw_k$();
    var strokeLineJoin = Companion_getInstance_1().get_Bevel_8ab6n7_k$();
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.filled.<get-Person>.<anonymous>.<anonymous>' call
    $this$with.moveTo_n8tdjo_k$(12.0, 12.0);
    $this$with.curveToRelative_jg9hoq_k$(2.21, 0.0, 4.0, -1.79, 4.0, -4.0);
    $this$with.reflectiveCurveToRelative_y66nqz_k$(-1.79, -4.0, -4.0, -4.0);
    $this$with.reflectiveCurveToRelative_y66nqz_k$(-4.0, 1.79, -4.0, 4.0);
    $this$with.reflectiveCurveToRelative_y66nqz_k$(1.79, 4.0, 4.0, 4.0);
    $this$with.close_1keygo_k$();
    $this$with.moveTo_n8tdjo_k$(12.0, 14.0);
    $this$with.curveToRelative_jg9hoq_k$(-2.67, 0.0, -8.0, 1.34, -8.0, 4.0);
    $this$with.verticalLineToRelative_io0vy1_k$(2.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(16.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-2.0);
    $this$with.curveToRelative_jg9hoq_k$(0.0, -2.66, -5.33, -4.0, -8.0, -4.0);
    $this$with.close_1keygo_k$();
    var tmp$ret$4 = $this$with.getNodes_wff5kr_k$();
    _person = this_2.addPath$default_98yxvz_k$(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).build_1k0s4u_k$();
    return ensureNotNull(_person);
  }
  function set__phone(_set____db54di) {
    _phone = _set____db54di;
  }
  function get__phone() {
    return _phone;
  }
  var _phone;
  function set__place(_set____db54di) {
    _place = _set____db54di;
  }
  function get__place() {
    return _place;
  }
  var _place;
  function set__playArrow(_set____db54di) {
    _playArrow = _set____db54di;
  }
  function get__playArrow() {
    return _playArrow;
  }
  var _playArrow;
  function set__refresh(_set____db54di) {
    _refresh = _set____db54di;
  }
  function get__refresh() {
    return _refresh;
  }
  var _refresh;
  function set__search(_set____db54di) {
    _search = _set____db54di;
  }
  function get__search() {
    return _search;
  }
  var _search;
  function set__send(_set____db54di) {
    _send = _set____db54di;
  }
  function get__send() {
    return _send;
  }
  var _send;
  function set__settings(_set____db54di) {
    _settings = _set____db54di;
  }
  function get__settings() {
    return _settings;
  }
  var _settings;
  function set__share(_set____db54di) {
    _share = _set____db54di;
  }
  function get__share() {
    return _share;
  }
  var _share;
  function set__shoppingCart(_set____db54di) {
    _shoppingCart = _set____db54di;
  }
  function get__shoppingCart() {
    return _shoppingCart;
  }
  var _shoppingCart;
  function set__star(_set____db54di) {
    _star = _set____db54di;
  }
  function get__star() {
    return _star;
  }
  var _star;
  function set__thumbUp(_set____db54di) {
    _thumbUp = _set____db54di;
  }
  function get__thumbUp() {
    return _thumbUp;
  }
  var _thumbUp;
  function set__warning(_set____db54di) {
    _warning = _set____db54di;
  }
  function get__warning() {
    return _warning;
  }
  var _warning;
  function set__accountBox_0(_set____db54di) {
    _accountBox_0 = _set____db54di;
  }
  function get__accountBox_0() {
    return _accountBox_0;
  }
  var _accountBox_0;
  function set__accountCircle_0(_set____db54di) {
    _accountCircle_0 = _set____db54di;
  }
  function get__accountCircle_0() {
    return _accountCircle_0;
  }
  var _accountCircle_0;
  function set__add_0(_set____db54di) {
    _add_0 = _set____db54di;
  }
  function get__add_0() {
    return _add_0;
  }
  var _add_0;
  function set__addCircle_0(_set____db54di) {
    _addCircle_0 = _set____db54di;
  }
  function get__addCircle_0() {
    return _addCircle_0;
  }
  var _addCircle_0;
  function set__arrowBack_0(_set____db54di) {
    _arrowBack_0 = _set____db54di;
  }
  function get__arrowBack_0() {
    return _arrowBack_0;
  }
  var _arrowBack_0;
  function set__arrowDropDown_0(_set____db54di) {
    _arrowDropDown_0 = _set____db54di;
  }
  function get__arrowDropDown_0() {
    return _arrowDropDown_0;
  }
  var _arrowDropDown_0;
  function set__arrowForward_0(_set____db54di) {
    _arrowForward_0 = _set____db54di;
  }
  function get__arrowForward_0() {
    return _arrowForward_0;
  }
  var _arrowForward_0;
  function set__build_0(_set____db54di) {
    _build_0 = _set____db54di;
  }
  function get__build_0() {
    return _build_0;
  }
  var _build_0;
  function set__call_0(_set____db54di) {
    _call_0 = _set____db54di;
  }
  function get__call_0() {
    return _call_0;
  }
  var _call_0;
  function set__check_0(_set____db54di) {
    _check_0 = _set____db54di;
  }
  function get__check_0() {
    return _check_0;
  }
  var _check_0;
  function set__checkCircle_0(_set____db54di) {
    _checkCircle_0 = _set____db54di;
  }
  function get__checkCircle_0() {
    return _checkCircle_0;
  }
  var _checkCircle_0;
  function set__clear_0(_set____db54di) {
    _clear_0 = _set____db54di;
  }
  function get__clear_0() {
    return _clear_0;
  }
  var _clear_0;
  function set__close_0(_set____db54di) {
    _close_0 = _set____db54di;
  }
  function get__close_0() {
    return _close_0;
  }
  var _close_0;
  function set__create_0(_set____db54di) {
    _create_0 = _set____db54di;
  }
  function get__create_0() {
    return _create_0;
  }
  var _create_0;
  function set__dateRange_0(_set____db54di) {
    _dateRange_0 = _set____db54di;
  }
  function get__dateRange_0() {
    return _dateRange_0;
  }
  var _dateRange_0;
  function set__delete_0(_set____db54di) {
    _delete_0 = _set____db54di;
  }
  function get__delete_0() {
    return _delete_0;
  }
  var _delete_0;
  function set__done_0(_set____db54di) {
    _done_0 = _set____db54di;
  }
  function get__done_0() {
    return _done_0;
  }
  var _done_0;
  function set__edit_0(_set____db54di) {
    _edit_0 = _set____db54di;
  }
  function get__edit_0() {
    return _edit_0;
  }
  var _edit_0;
  function set__email_0(_set____db54di) {
    _email_0 = _set____db54di;
  }
  function get__email_0() {
    return _email_0;
  }
  var _email_0;
  function set__exitToApp_0(_set____db54di) {
    _exitToApp_0 = _set____db54di;
  }
  function get__exitToApp_0() {
    return _exitToApp_0;
  }
  var _exitToApp_0;
  function set__face_0(_set____db54di) {
    _face_0 = _set____db54di;
  }
  function get__face_0() {
    return _face_0;
  }
  var _face_0;
  function set__favorite_0(_set____db54di) {
    _favorite_0 = _set____db54di;
  }
  function get__favorite_0() {
    return _favorite_0;
  }
  var _favorite_0;
  function set__favoriteBorder_0(_set____db54di) {
    _favoriteBorder_0 = _set____db54di;
  }
  function get__favoriteBorder_0() {
    return _favoriteBorder_0;
  }
  var _favoriteBorder_0;
  function set__home_0(_set____db54di) {
    _home_0 = _set____db54di;
  }
  function get__home_0() {
    return _home_0;
  }
  var _home_0;
  function get_Home_0(_this__u8e3s4) {
    if (!(_home_0 == null)) {
      return ensureNotNull(_home_0);
    }
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var name = 'Outlined.Home';
    // Inline function 'androidx.compose.material.icons.outlined.<get-Home>.<anonymous>' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = get_MaterialIconDimension();
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = get_MaterialIconDimension();
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var this_2 = new Builder(name, tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var fill = new SolidColor(Companion_getInstance().get_Black_t4k9fh_k$());
    var strokeLineCap = Companion_getInstance_0().get_Butt_jb7qjw_k$();
    var strokeLineJoin = Companion_getInstance_1().get_Bevel_8ab6n7_k$();
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.outlined.<get-Home>.<anonymous>.<anonymous>' call
    $this$with.moveTo_n8tdjo_k$(12.0, 5.69);
    $this$with.lineToRelative_h8lj2d_k$(5.0, 4.5);
    $this$with.verticalLineTo_1gpzkd_k$(18.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(-2.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-6.0);
    $this$with.horizontalLineTo_w9x139_k$(9.0);
    $this$with.verticalLineToRelative_io0vy1_k$(6.0);
    $this$with.horizontalLineTo_w9x139_k$(7.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-7.81);
    $this$with.lineToRelative_h8lj2d_k$(5.0, -4.5);
    $this$with.moveTo_n8tdjo_k$(12.0, 3.0);
    $this$with.lineTo_985bqp_k$(2.0, 12.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(3.0);
    $this$with.verticalLineToRelative_io0vy1_k$(8.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(6.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-6.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(2.0);
    $this$with.verticalLineToRelative_io0vy1_k$(6.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(6.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-8.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(3.0);
    $this$with.lineTo_985bqp_k$(12.0, 3.0);
    $this$with.close_1keygo_k$();
    var tmp$ret$4 = $this$with.getNodes_wff5kr_k$();
    _home_0 = this_2.addPath$default_98yxvz_k$(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).build_1k0s4u_k$();
    return ensureNotNull(_home_0);
  }
  function set__info_0(_set____db54di) {
    _info_0 = _set____db54di;
  }
  function get__info_0() {
    return _info_0;
  }
  var _info_0;
  function set__keyboardArrowDown_0(_set____db54di) {
    _keyboardArrowDown_0 = _set____db54di;
  }
  function get__keyboardArrowDown_0() {
    return _keyboardArrowDown_0;
  }
  var _keyboardArrowDown_0;
  function set__keyboardArrowLeft_0(_set____db54di) {
    _keyboardArrowLeft_0 = _set____db54di;
  }
  function get__keyboardArrowLeft_0() {
    return _keyboardArrowLeft_0;
  }
  var _keyboardArrowLeft_0;
  function set__keyboardArrowRight_0(_set____db54di) {
    _keyboardArrowRight_0 = _set____db54di;
  }
  function get__keyboardArrowRight_0() {
    return _keyboardArrowRight_0;
  }
  var _keyboardArrowRight_0;
  function set__keyboardArrowUp_0(_set____db54di) {
    _keyboardArrowUp_0 = _set____db54di;
  }
  function get__keyboardArrowUp_0() {
    return _keyboardArrowUp_0;
  }
  var _keyboardArrowUp_0;
  function set__list_0(_set____db54di) {
    _list_0 = _set____db54di;
  }
  function get__list_0() {
    return _list_0;
  }
  var _list_0;
  function set__locationOn_0(_set____db54di) {
    _locationOn_0 = _set____db54di;
  }
  function get__locationOn_0() {
    return _locationOn_0;
  }
  var _locationOn_0;
  function set__lock_0(_set____db54di) {
    _lock_0 = _set____db54di;
  }
  function get__lock_0() {
    return _lock_0;
  }
  var _lock_0;
  function set__mailOutline_0(_set____db54di) {
    _mailOutline_0 = _set____db54di;
  }
  function get__mailOutline_0() {
    return _mailOutline_0;
  }
  var _mailOutline_0;
  function set__menu_0(_set____db54di) {
    _menu_0 = _set____db54di;
  }
  function get__menu_0() {
    return _menu_0;
  }
  var _menu_0;
  function get_Menu_0(_this__u8e3s4) {
    if (!(_menu_0 == null)) {
      return ensureNotNull(_menu_0);
    }
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var name = 'Outlined.Menu';
    // Inline function 'androidx.compose.material.icons.outlined.<get-Menu>.<anonymous>' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = get_MaterialIconDimension();
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = get_MaterialIconDimension();
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var this_2 = new Builder(name, tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var fill = new SolidColor(Companion_getInstance().get_Black_t4k9fh_k$());
    var strokeLineCap = Companion_getInstance_0().get_Butt_jb7qjw_k$();
    var strokeLineJoin = Companion_getInstance_1().get_Bevel_8ab6n7_k$();
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.outlined.<get-Menu>.<anonymous>.<anonymous>' call
    $this$with.moveTo_n8tdjo_k$(3.0, 18.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(18.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-2.0);
    $this$with.lineTo_985bqp_k$(3.0, 16.0);
    $this$with.verticalLineToRelative_io0vy1_k$(2.0);
    $this$with.close_1keygo_k$();
    $this$with.moveTo_n8tdjo_k$(3.0, 13.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(18.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-2.0);
    $this$with.lineTo_985bqp_k$(3.0, 11.0);
    $this$with.verticalLineToRelative_io0vy1_k$(2.0);
    $this$with.close_1keygo_k$();
    $this$with.moveTo_n8tdjo_k$(3.0, 6.0);
    $this$with.verticalLineToRelative_io0vy1_k$(2.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(18.0);
    $this$with.lineTo_985bqp_k$(21.0, 6.0);
    $this$with.lineTo_985bqp_k$(3.0, 6.0);
    $this$with.close_1keygo_k$();
    var tmp$ret$4 = $this$with.getNodes_wff5kr_k$();
    _menu_0 = this_2.addPath$default_98yxvz_k$(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).build_1k0s4u_k$();
    return ensureNotNull(_menu_0);
  }
  function set__moreVert_0(_set____db54di) {
    _moreVert_0 = _set____db54di;
  }
  function get__moreVert_0() {
    return _moreVert_0;
  }
  var _moreVert_0;
  function set__notifications_0(_set____db54di) {
    _notifications_0 = _set____db54di;
  }
  function get__notifications_0() {
    return _notifications_0;
  }
  var _notifications_0;
  function set__person_0(_set____db54di) {
    _person_0 = _set____db54di;
  }
  function get__person_0() {
    return _person_0;
  }
  var _person_0;
  function get_Person_0(_this__u8e3s4) {
    if (!(_person_0 == null)) {
      return ensureNotNull(_person_0);
    }
    // Inline function 'androidx.compose.material.icons.materialIcon' call
    var name = 'Outlined.Person';
    // Inline function 'androidx.compose.material.icons.outlined.<get-Person>.<anonymous>' call
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = get_MaterialIconDimension();
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = get_MaterialIconDimension();
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    // Inline function 'androidx.compose.material.icons.materialPath' call
    var this_2 = new Builder(name, tmp, tmp$ret$1, get_MaterialIconDimension(), get_MaterialIconDimension());
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var fill = new SolidColor(Companion_getInstance().get_Black_t4k9fh_k$());
    var strokeLineCap = Companion_getInstance_0().get_Butt_jb7qjw_k$();
    var strokeLineJoin = Companion_getInstance_1().get_Bevel_8ab6n7_k$();
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.outlined.<get-Person>.<anonymous>.<anonymous>' call
    $this$with.moveTo_n8tdjo_k$(12.0, 6.0);
    $this$with.curveToRelative_jg9hoq_k$(1.1, 0.0, 2.0, 0.9, 2.0, 2.0);
    $this$with.reflectiveCurveToRelative_y66nqz_k$(-0.9, 2.0, -2.0, 2.0);
    $this$with.reflectiveCurveToRelative_y66nqz_k$(-2.0, -0.9, -2.0, -2.0);
    $this$with.reflectiveCurveToRelative_y66nqz_k$(0.9, -2.0, 2.0, -2.0);
    $this$with.moveToRelative_2s28m0_k$(0.0, 10.0);
    $this$with.curveToRelative_jg9hoq_k$(2.7, 0.0, 5.8, 1.29, 6.0, 2.0);
    $this$with.lineTo_985bqp_k$(6.0, 18.0);
    $this$with.curveToRelative_jg9hoq_k$(0.23, -0.72, 3.31, -2.0, 6.0, -2.0);
    $this$with.moveToRelative_2s28m0_k$(0.0, -12.0);
    $this$with.curveTo_y0llje_k$(9.79, 4.0, 8.0, 5.79, 8.0, 8.0);
    $this$with.reflectiveCurveToRelative_y66nqz_k$(1.79, 4.0, 4.0, 4.0);
    $this$with.reflectiveCurveToRelative_y66nqz_k$(4.0, -1.79, 4.0, -4.0);
    $this$with.reflectiveCurveToRelative_y66nqz_k$(-1.79, -4.0, -4.0, -4.0);
    $this$with.close_1keygo_k$();
    $this$with.moveTo_n8tdjo_k$(12.0, 14.0);
    $this$with.curveToRelative_jg9hoq_k$(-2.67, 0.0, -8.0, 1.34, -8.0, 4.0);
    $this$with.verticalLineToRelative_io0vy1_k$(2.0);
    $this$with.horizontalLineToRelative_8skmzd_k$(16.0);
    $this$with.verticalLineToRelative_io0vy1_k$(-2.0);
    $this$with.curveToRelative_jg9hoq_k$(0.0, -2.66, -5.33, -4.0, -8.0, -4.0);
    $this$with.close_1keygo_k$();
    var tmp$ret$4 = $this$with.getNodes_wff5kr_k$();
    _person_0 = this_2.addPath$default_98yxvz_k$(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).build_1k0s4u_k$();
    return ensureNotNull(_person_0);
  }
  function set__phone_0(_set____db54di) {
    _phone_0 = _set____db54di;
  }
  function get__phone_0() {
    return _phone_0;
  }
  var _phone_0;
  function set__place_0(_set____db54di) {
    _place_0 = _set____db54di;
  }
  function get__place_0() {
    return _place_0;
  }
  var _place_0;
  function set__playArrow_0(_set____db54di) {
    _playArrow_0 = _set____db54di;
  }
  function get__playArrow_0() {
    return _playArrow_0;
  }
  var _playArrow_0;
  function set__refresh_0(_set____db54di) {
    _refresh_0 = _set____db54di;
  }
  function get__refresh_0() {
    return _refresh_0;
  }
  var _refresh_0;
  function set__search_0(_set____db54di) {
    _search_0 = _set____db54di;
  }
  function get__search_0() {
    return _search_0;
  }
  var _search_0;
  function set__send_0(_set____db54di) {
    _send_0 = _set____db54di;
  }
  function get__send_0() {
    return _send_0;
  }
  var _send_0;
  function set__settings_0(_set____db54di) {
    _settings_0 = _set____db54di;
  }
  function get__settings_0() {
    return _settings_0;
  }
  var _settings_0;
  function set__share_0(_set____db54di) {
    _share_0 = _set____db54di;
  }
  function get__share_0() {
    return _share_0;
  }
  var _share_0;
  function set__shoppingCart_0(_set____db54di) {
    _shoppingCart_0 = _set____db54di;
  }
  function get__shoppingCart_0() {
    return _shoppingCart_0;
  }
  var _shoppingCart_0;
  function set__star_0(_set____db54di) {
    _star_0 = _set____db54di;
  }
  function get__star_0() {
    return _star_0;
  }
  var _star_0;
  function set__thumbUp_0(_set____db54di) {
    _thumbUp_0 = _set____db54di;
  }
  function get__thumbUp_0() {
    return _thumbUp_0;
  }
  var _thumbUp_0;
  function set__warning_0(_set____db54di) {
    _warning_0 = _set____db54di;
  }
  function get__warning_0() {
    return _warning_0;
  }
  var _warning_0;
  function set__accountBox_1(_set____db54di) {
    _accountBox_1 = _set____db54di;
  }
  function get__accountBox_1() {
    return _accountBox_1;
  }
  var _accountBox_1;
  function set__accountCircle_1(_set____db54di) {
    _accountCircle_1 = _set____db54di;
  }
  function get__accountCircle_1() {
    return _accountCircle_1;
  }
  var _accountCircle_1;
  function set__add_1(_set____db54di) {
    _add_1 = _set____db54di;
  }
  function get__add_1() {
    return _add_1;
  }
  var _add_1;
  function set__addCircle_1(_set____db54di) {
    _addCircle_1 = _set____db54di;
  }
  function get__addCircle_1() {
    return _addCircle_1;
  }
  var _addCircle_1;
  function set__arrowBack_1(_set____db54di) {
    _arrowBack_1 = _set____db54di;
  }
  function get__arrowBack_1() {
    return _arrowBack_1;
  }
  var _arrowBack_1;
  function set__arrowDropDown_1(_set____db54di) {
    _arrowDropDown_1 = _set____db54di;
  }
  function get__arrowDropDown_1() {
    return _arrowDropDown_1;
  }
  var _arrowDropDown_1;
  function set__arrowForward_1(_set____db54di) {
    _arrowForward_1 = _set____db54di;
  }
  function get__arrowForward_1() {
    return _arrowForward_1;
  }
  var _arrowForward_1;
  function set__build_1(_set____db54di) {
    _build_1 = _set____db54di;
  }
  function get__build_1() {
    return _build_1;
  }
  var _build_1;
  function set__call_1(_set____db54di) {
    _call_1 = _set____db54di;
  }
  function get__call_1() {
    return _call_1;
  }
  var _call_1;
  function set__check_1(_set____db54di) {
    _check_1 = _set____db54di;
  }
  function get__check_1() {
    return _check_1;
  }
  var _check_1;
  function set__checkCircle_1(_set____db54di) {
    _checkCircle_1 = _set____db54di;
  }
  function get__checkCircle_1() {
    return _checkCircle_1;
  }
  var _checkCircle_1;
  function set__clear_1(_set____db54di) {
    _clear_1 = _set____db54di;
  }
  function get__clear_1() {
    return _clear_1;
  }
  var _clear_1;
  function set__close_1(_set____db54di) {
    _close_1 = _set____db54di;
  }
  function get__close_1() {
    return _close_1;
  }
  var _close_1;
  function set__create_1(_set____db54di) {
    _create_1 = _set____db54di;
  }
  function get__create_1() {
    return _create_1;
  }
  var _create_1;
  function set__dateRange_1(_set____db54di) {
    _dateRange_1 = _set____db54di;
  }
  function get__dateRange_1() {
    return _dateRange_1;
  }
  var _dateRange_1;
  function set__delete_1(_set____db54di) {
    _delete_1 = _set____db54di;
  }
  function get__delete_1() {
    return _delete_1;
  }
  var _delete_1;
  function set__done_1(_set____db54di) {
    _done_1 = _set____db54di;
  }
  function get__done_1() {
    return _done_1;
  }
  var _done_1;
  function set__edit_1(_set____db54di) {
    _edit_1 = _set____db54di;
  }
  function get__edit_1() {
    return _edit_1;
  }
  var _edit_1;
  function set__email_1(_set____db54di) {
    _email_1 = _set____db54di;
  }
  function get__email_1() {
    return _email_1;
  }
  var _email_1;
  function set__exitToApp_1(_set____db54di) {
    _exitToApp_1 = _set____db54di;
  }
  function get__exitToApp_1() {
    return _exitToApp_1;
  }
  var _exitToApp_1;
  function set__face_1(_set____db54di) {
    _face_1 = _set____db54di;
  }
  function get__face_1() {
    return _face_1;
  }
  var _face_1;
  function set__favorite_1(_set____db54di) {
    _favorite_1 = _set____db54di;
  }
  function get__favorite_1() {
    return _favorite_1;
  }
  var _favorite_1;
  function set__favoriteBorder_1(_set____db54di) {
    _favoriteBorder_1 = _set____db54di;
  }
  function get__favoriteBorder_1() {
    return _favoriteBorder_1;
  }
  var _favoriteBorder_1;
  function set__home_1(_set____db54di) {
    _home_1 = _set____db54di;
  }
  function get__home_1() {
    return _home_1;
  }
  var _home_1;
  function set__info_1(_set____db54di) {
    _info_1 = _set____db54di;
  }
  function get__info_1() {
    return _info_1;
  }
  var _info_1;
  function set__keyboardArrowDown_1(_set____db54di) {
    _keyboardArrowDown_1 = _set____db54di;
  }
  function get__keyboardArrowDown_1() {
    return _keyboardArrowDown_1;
  }
  var _keyboardArrowDown_1;
  function set__keyboardArrowLeft_1(_set____db54di) {
    _keyboardArrowLeft_1 = _set____db54di;
  }
  function get__keyboardArrowLeft_1() {
    return _keyboardArrowLeft_1;
  }
  var _keyboardArrowLeft_1;
  function set__keyboardArrowRight_1(_set____db54di) {
    _keyboardArrowRight_1 = _set____db54di;
  }
  function get__keyboardArrowRight_1() {
    return _keyboardArrowRight_1;
  }
  var _keyboardArrowRight_1;
  function set__keyboardArrowUp_1(_set____db54di) {
    _keyboardArrowUp_1 = _set____db54di;
  }
  function get__keyboardArrowUp_1() {
    return _keyboardArrowUp_1;
  }
  var _keyboardArrowUp_1;
  function set__list_1(_set____db54di) {
    _list_1 = _set____db54di;
  }
  function get__list_1() {
    return _list_1;
  }
  var _list_1;
  function set__locationOn_1(_set____db54di) {
    _locationOn_1 = _set____db54di;
  }
  function get__locationOn_1() {
    return _locationOn_1;
  }
  var _locationOn_1;
  function set__lock_1(_set____db54di) {
    _lock_1 = _set____db54di;
  }
  function get__lock_1() {
    return _lock_1;
  }
  var _lock_1;
  function set__mailOutline_1(_set____db54di) {
    _mailOutline_1 = _set____db54di;
  }
  function get__mailOutline_1() {
    return _mailOutline_1;
  }
  var _mailOutline_1;
  function set__menu_1(_set____db54di) {
    _menu_1 = _set____db54di;
  }
  function get__menu_1() {
    return _menu_1;
  }
  var _menu_1;
  function set__moreVert_1(_set____db54di) {
    _moreVert_1 = _set____db54di;
  }
  function get__moreVert_1() {
    return _moreVert_1;
  }
  var _moreVert_1;
  function set__notifications_1(_set____db54di) {
    _notifications_1 = _set____db54di;
  }
  function get__notifications_1() {
    return _notifications_1;
  }
  var _notifications_1;
  function set__person_1(_set____db54di) {
    _person_1 = _set____db54di;
  }
  function get__person_1() {
    return _person_1;
  }
  var _person_1;
  function set__phone_1(_set____db54di) {
    _phone_1 = _set____db54di;
  }
  function get__phone_1() {
    return _phone_1;
  }
  var _phone_1;
  function set__place_1(_set____db54di) {
    _place_1 = _set____db54di;
  }
  function get__place_1() {
    return _place_1;
  }
  var _place_1;
  function set__playArrow_1(_set____db54di) {
    _playArrow_1 = _set____db54di;
  }
  function get__playArrow_1() {
    return _playArrow_1;
  }
  var _playArrow_1;
  function set__refresh_1(_set____db54di) {
    _refresh_1 = _set____db54di;
  }
  function get__refresh_1() {
    return _refresh_1;
  }
  var _refresh_1;
  function set__search_1(_set____db54di) {
    _search_1 = _set____db54di;
  }
  function get__search_1() {
    return _search_1;
  }
  var _search_1;
  function set__send_1(_set____db54di) {
    _send_1 = _set____db54di;
  }
  function get__send_1() {
    return _send_1;
  }
  var _send_1;
  function set__settings_1(_set____db54di) {
    _settings_1 = _set____db54di;
  }
  function get__settings_1() {
    return _settings_1;
  }
  var _settings_1;
  function set__share_1(_set____db54di) {
    _share_1 = _set____db54di;
  }
  function get__share_1() {
    return _share_1;
  }
  var _share_1;
  function set__shoppingCart_1(_set____db54di) {
    _shoppingCart_1 = _set____db54di;
  }
  function get__shoppingCart_1() {
    return _shoppingCart_1;
  }
  var _shoppingCart_1;
  function set__star_1(_set____db54di) {
    _star_1 = _set____db54di;
  }
  function get__star_1() {
    return _star_1;
  }
  var _star_1;
  function set__thumbUp_1(_set____db54di) {
    _thumbUp_1 = _set____db54di;
  }
  function get__thumbUp_1() {
    return _thumbUp_1;
  }
  var _thumbUp_1;
  function set__warning_1(_set____db54di) {
    _warning_1 = _set____db54di;
  }
  function get__warning_1() {
    return _warning_1;
  }
  var _warning_1;
  function set__accountBox_2(_set____db54di) {
    _accountBox_2 = _set____db54di;
  }
  function get__accountBox_2() {
    return _accountBox_2;
  }
  var _accountBox_2;
  function set__accountCircle_2(_set____db54di) {
    _accountCircle_2 = _set____db54di;
  }
  function get__accountCircle_2() {
    return _accountCircle_2;
  }
  var _accountCircle_2;
  function set__add_2(_set____db54di) {
    _add_2 = _set____db54di;
  }
  function get__add_2() {
    return _add_2;
  }
  var _add_2;
  function set__addCircle_2(_set____db54di) {
    _addCircle_2 = _set____db54di;
  }
  function get__addCircle_2() {
    return _addCircle_2;
  }
  var _addCircle_2;
  function set__arrowBack_2(_set____db54di) {
    _arrowBack_2 = _set____db54di;
  }
  function get__arrowBack_2() {
    return _arrowBack_2;
  }
  var _arrowBack_2;
  function set__arrowDropDown_2(_set____db54di) {
    _arrowDropDown_2 = _set____db54di;
  }
  function get__arrowDropDown_2() {
    return _arrowDropDown_2;
  }
  var _arrowDropDown_2;
  function set__arrowForward_2(_set____db54di) {
    _arrowForward_2 = _set____db54di;
  }
  function get__arrowForward_2() {
    return _arrowForward_2;
  }
  var _arrowForward_2;
  function set__build_2(_set____db54di) {
    _build_2 = _set____db54di;
  }
  function get__build_2() {
    return _build_2;
  }
  var _build_2;
  function set__call_2(_set____db54di) {
    _call_2 = _set____db54di;
  }
  function get__call_2() {
    return _call_2;
  }
  var _call_2;
  function set__check_2(_set____db54di) {
    _check_2 = _set____db54di;
  }
  function get__check_2() {
    return _check_2;
  }
  var _check_2;
  function set__checkCircle_2(_set____db54di) {
    _checkCircle_2 = _set____db54di;
  }
  function get__checkCircle_2() {
    return _checkCircle_2;
  }
  var _checkCircle_2;
  function set__clear_2(_set____db54di) {
    _clear_2 = _set____db54di;
  }
  function get__clear_2() {
    return _clear_2;
  }
  var _clear_2;
  function set__close_2(_set____db54di) {
    _close_2 = _set____db54di;
  }
  function get__close_2() {
    return _close_2;
  }
  var _close_2;
  function set__create_2(_set____db54di) {
    _create_2 = _set____db54di;
  }
  function get__create_2() {
    return _create_2;
  }
  var _create_2;
  function set__dateRange_2(_set____db54di) {
    _dateRange_2 = _set____db54di;
  }
  function get__dateRange_2() {
    return _dateRange_2;
  }
  var _dateRange_2;
  function set__delete_2(_set____db54di) {
    _delete_2 = _set____db54di;
  }
  function get__delete_2() {
    return _delete_2;
  }
  var _delete_2;
  function set__done_2(_set____db54di) {
    _done_2 = _set____db54di;
  }
  function get__done_2() {
    return _done_2;
  }
  var _done_2;
  function set__edit_2(_set____db54di) {
    _edit_2 = _set____db54di;
  }
  function get__edit_2() {
    return _edit_2;
  }
  var _edit_2;
  function set__email_2(_set____db54di) {
    _email_2 = _set____db54di;
  }
  function get__email_2() {
    return _email_2;
  }
  var _email_2;
  function set__exitToApp_2(_set____db54di) {
    _exitToApp_2 = _set____db54di;
  }
  function get__exitToApp_2() {
    return _exitToApp_2;
  }
  var _exitToApp_2;
  function set__face_2(_set____db54di) {
    _face_2 = _set____db54di;
  }
  function get__face_2() {
    return _face_2;
  }
  var _face_2;
  function set__favorite_2(_set____db54di) {
    _favorite_2 = _set____db54di;
  }
  function get__favorite_2() {
    return _favorite_2;
  }
  var _favorite_2;
  function set__favoriteBorder_2(_set____db54di) {
    _favoriteBorder_2 = _set____db54di;
  }
  function get__favoriteBorder_2() {
    return _favoriteBorder_2;
  }
  var _favoriteBorder_2;
  function set__home_2(_set____db54di) {
    _home_2 = _set____db54di;
  }
  function get__home_2() {
    return _home_2;
  }
  var _home_2;
  function set__info_2(_set____db54di) {
    _info_2 = _set____db54di;
  }
  function get__info_2() {
    return _info_2;
  }
  var _info_2;
  function set__keyboardArrowDown_2(_set____db54di) {
    _keyboardArrowDown_2 = _set____db54di;
  }
  function get__keyboardArrowDown_2() {
    return _keyboardArrowDown_2;
  }
  var _keyboardArrowDown_2;
  function set__keyboardArrowLeft_2(_set____db54di) {
    _keyboardArrowLeft_2 = _set____db54di;
  }
  function get__keyboardArrowLeft_2() {
    return _keyboardArrowLeft_2;
  }
  var _keyboardArrowLeft_2;
  function set__keyboardArrowRight_2(_set____db54di) {
    _keyboardArrowRight_2 = _set____db54di;
  }
  function get__keyboardArrowRight_2() {
    return _keyboardArrowRight_2;
  }
  var _keyboardArrowRight_2;
  function set__keyboardArrowUp_2(_set____db54di) {
    _keyboardArrowUp_2 = _set____db54di;
  }
  function get__keyboardArrowUp_2() {
    return _keyboardArrowUp_2;
  }
  var _keyboardArrowUp_2;
  function set__list_2(_set____db54di) {
    _list_2 = _set____db54di;
  }
  function get__list_2() {
    return _list_2;
  }
  var _list_2;
  function set__locationOn_2(_set____db54di) {
    _locationOn_2 = _set____db54di;
  }
  function get__locationOn_2() {
    return _locationOn_2;
  }
  var _locationOn_2;
  function set__lock_2(_set____db54di) {
    _lock_2 = _set____db54di;
  }
  function get__lock_2() {
    return _lock_2;
  }
  var _lock_2;
  function set__mailOutline_2(_set____db54di) {
    _mailOutline_2 = _set____db54di;
  }
  function get__mailOutline_2() {
    return _mailOutline_2;
  }
  var _mailOutline_2;
  function set__menu_2(_set____db54di) {
    _menu_2 = _set____db54di;
  }
  function get__menu_2() {
    return _menu_2;
  }
  var _menu_2;
  function set__moreVert_2(_set____db54di) {
    _moreVert_2 = _set____db54di;
  }
  function get__moreVert_2() {
    return _moreVert_2;
  }
  var _moreVert_2;
  function set__notifications_2(_set____db54di) {
    _notifications_2 = _set____db54di;
  }
  function get__notifications_2() {
    return _notifications_2;
  }
  var _notifications_2;
  function set__person_2(_set____db54di) {
    _person_2 = _set____db54di;
  }
  function get__person_2() {
    return _person_2;
  }
  var _person_2;
  function set__phone_2(_set____db54di) {
    _phone_2 = _set____db54di;
  }
  function get__phone_2() {
    return _phone_2;
  }
  var _phone_2;
  function set__place_2(_set____db54di) {
    _place_2 = _set____db54di;
  }
  function get__place_2() {
    return _place_2;
  }
  var _place_2;
  function set__playArrow_2(_set____db54di) {
    _playArrow_2 = _set____db54di;
  }
  function get__playArrow_2() {
    return _playArrow_2;
  }
  var _playArrow_2;
  function set__refresh_2(_set____db54di) {
    _refresh_2 = _set____db54di;
  }
  function get__refresh_2() {
    return _refresh_2;
  }
  var _refresh_2;
  function set__search_2(_set____db54di) {
    _search_2 = _set____db54di;
  }
  function get__search_2() {
    return _search_2;
  }
  var _search_2;
  function set__send_2(_set____db54di) {
    _send_2 = _set____db54di;
  }
  function get__send_2() {
    return _send_2;
  }
  var _send_2;
  function set__settings_2(_set____db54di) {
    _settings_2 = _set____db54di;
  }
  function get__settings_2() {
    return _settings_2;
  }
  var _settings_2;
  function set__share_2(_set____db54di) {
    _share_2 = _set____db54di;
  }
  function get__share_2() {
    return _share_2;
  }
  var _share_2;
  function set__shoppingCart_2(_set____db54di) {
    _shoppingCart_2 = _set____db54di;
  }
  function get__shoppingCart_2() {
    return _shoppingCart_2;
  }
  var _shoppingCart_2;
  function set__star_2(_set____db54di) {
    _star_2 = _set____db54di;
  }
  function get__star_2() {
    return _star_2;
  }
  var _star_2;
  function set__thumbUp_2(_set____db54di) {
    _thumbUp_2 = _set____db54di;
  }
  function get__thumbUp_2() {
    return _thumbUp_2;
  }
  var _thumbUp_2;
  function set__warning_2(_set____db54di) {
    _warning_2 = _set____db54di;
  }
  function get__warning_2() {
    return _warning_2;
  }
  var _warning_2;
  function set__accountBox_3(_set____db54di) {
    _accountBox_3 = _set____db54di;
  }
  function get__accountBox_3() {
    return _accountBox_3;
  }
  var _accountBox_3;
  function set__accountCircle_3(_set____db54di) {
    _accountCircle_3 = _set____db54di;
  }
  function get__accountCircle_3() {
    return _accountCircle_3;
  }
  var _accountCircle_3;
  function set__add_3(_set____db54di) {
    _add_3 = _set____db54di;
  }
  function get__add_3() {
    return _add_3;
  }
  var _add_3;
  function set__addCircle_3(_set____db54di) {
    _addCircle_3 = _set____db54di;
  }
  function get__addCircle_3() {
    return _addCircle_3;
  }
  var _addCircle_3;
  function set__arrowBack_3(_set____db54di) {
    _arrowBack_3 = _set____db54di;
  }
  function get__arrowBack_3() {
    return _arrowBack_3;
  }
  var _arrowBack_3;
  function set__arrowDropDown_3(_set____db54di) {
    _arrowDropDown_3 = _set____db54di;
  }
  function get__arrowDropDown_3() {
    return _arrowDropDown_3;
  }
  var _arrowDropDown_3;
  function set__arrowForward_3(_set____db54di) {
    _arrowForward_3 = _set____db54di;
  }
  function get__arrowForward_3() {
    return _arrowForward_3;
  }
  var _arrowForward_3;
  function set__build_3(_set____db54di) {
    _build_3 = _set____db54di;
  }
  function get__build_3() {
    return _build_3;
  }
  var _build_3;
  function set__call_3(_set____db54di) {
    _call_3 = _set____db54di;
  }
  function get__call_3() {
    return _call_3;
  }
  var _call_3;
  function set__check_3(_set____db54di) {
    _check_3 = _set____db54di;
  }
  function get__check_3() {
    return _check_3;
  }
  var _check_3;
  function set__checkCircle_3(_set____db54di) {
    _checkCircle_3 = _set____db54di;
  }
  function get__checkCircle_3() {
    return _checkCircle_3;
  }
  var _checkCircle_3;
  function set__clear_3(_set____db54di) {
    _clear_3 = _set____db54di;
  }
  function get__clear_3() {
    return _clear_3;
  }
  var _clear_3;
  function set__close_3(_set____db54di) {
    _close_3 = _set____db54di;
  }
  function get__close_3() {
    return _close_3;
  }
  var _close_3;
  function set__create_3(_set____db54di) {
    _create_3 = _set____db54di;
  }
  function get__create_3() {
    return _create_3;
  }
  var _create_3;
  function set__dateRange_3(_set____db54di) {
    _dateRange_3 = _set____db54di;
  }
  function get__dateRange_3() {
    return _dateRange_3;
  }
  var _dateRange_3;
  function set__delete_3(_set____db54di) {
    _delete_3 = _set____db54di;
  }
  function get__delete_3() {
    return _delete_3;
  }
  var _delete_3;
  function set__done_3(_set____db54di) {
    _done_3 = _set____db54di;
  }
  function get__done_3() {
    return _done_3;
  }
  var _done_3;
  function set__edit_3(_set____db54di) {
    _edit_3 = _set____db54di;
  }
  function get__edit_3() {
    return _edit_3;
  }
  var _edit_3;
  function set__email_3(_set____db54di) {
    _email_3 = _set____db54di;
  }
  function get__email_3() {
    return _email_3;
  }
  var _email_3;
  function set__exitToApp_3(_set____db54di) {
    _exitToApp_3 = _set____db54di;
  }
  function get__exitToApp_3() {
    return _exitToApp_3;
  }
  var _exitToApp_3;
  function set__face_3(_set____db54di) {
    _face_3 = _set____db54di;
  }
  function get__face_3() {
    return _face_3;
  }
  var _face_3;
  function set__favorite_3(_set____db54di) {
    _favorite_3 = _set____db54di;
  }
  function get__favorite_3() {
    return _favorite_3;
  }
  var _favorite_3;
  function set__favoriteBorder_3(_set____db54di) {
    _favoriteBorder_3 = _set____db54di;
  }
  function get__favoriteBorder_3() {
    return _favoriteBorder_3;
  }
  var _favoriteBorder_3;
  function set__home_3(_set____db54di) {
    _home_3 = _set____db54di;
  }
  function get__home_3() {
    return _home_3;
  }
  var _home_3;
  function set__info_3(_set____db54di) {
    _info_3 = _set____db54di;
  }
  function get__info_3() {
    return _info_3;
  }
  var _info_3;
  function set__keyboardArrowDown_3(_set____db54di) {
    _keyboardArrowDown_3 = _set____db54di;
  }
  function get__keyboardArrowDown_3() {
    return _keyboardArrowDown_3;
  }
  var _keyboardArrowDown_3;
  function set__keyboardArrowLeft_3(_set____db54di) {
    _keyboardArrowLeft_3 = _set____db54di;
  }
  function get__keyboardArrowLeft_3() {
    return _keyboardArrowLeft_3;
  }
  var _keyboardArrowLeft_3;
  function set__keyboardArrowRight_3(_set____db54di) {
    _keyboardArrowRight_3 = _set____db54di;
  }
  function get__keyboardArrowRight_3() {
    return _keyboardArrowRight_3;
  }
  var _keyboardArrowRight_3;
  function set__keyboardArrowUp_3(_set____db54di) {
    _keyboardArrowUp_3 = _set____db54di;
  }
  function get__keyboardArrowUp_3() {
    return _keyboardArrowUp_3;
  }
  var _keyboardArrowUp_3;
  function set__list_3(_set____db54di) {
    _list_3 = _set____db54di;
  }
  function get__list_3() {
    return _list_3;
  }
  var _list_3;
  function set__locationOn_3(_set____db54di) {
    _locationOn_3 = _set____db54di;
  }
  function get__locationOn_3() {
    return _locationOn_3;
  }
  var _locationOn_3;
  function set__lock_3(_set____db54di) {
    _lock_3 = _set____db54di;
  }
  function get__lock_3() {
    return _lock_3;
  }
  var _lock_3;
  function set__mailOutline_3(_set____db54di) {
    _mailOutline_3 = _set____db54di;
  }
  function get__mailOutline_3() {
    return _mailOutline_3;
  }
  var _mailOutline_3;
  function set__menu_3(_set____db54di) {
    _menu_3 = _set____db54di;
  }
  function get__menu_3() {
    return _menu_3;
  }
  var _menu_3;
  function set__moreVert_3(_set____db54di) {
    _moreVert_3 = _set____db54di;
  }
  function get__moreVert_3() {
    return _moreVert_3;
  }
  var _moreVert_3;
  function set__notifications_3(_set____db54di) {
    _notifications_3 = _set____db54di;
  }
  function get__notifications_3() {
    return _notifications_3;
  }
  var _notifications_3;
  function set__person_3(_set____db54di) {
    _person_3 = _set____db54di;
  }
  function get__person_3() {
    return _person_3;
  }
  var _person_3;
  function set__phone_3(_set____db54di) {
    _phone_3 = _set____db54di;
  }
  function get__phone_3() {
    return _phone_3;
  }
  var _phone_3;
  function set__place_3(_set____db54di) {
    _place_3 = _set____db54di;
  }
  function get__place_3() {
    return _place_3;
  }
  var _place_3;
  function set__playArrow_3(_set____db54di) {
    _playArrow_3 = _set____db54di;
  }
  function get__playArrow_3() {
    return _playArrow_3;
  }
  var _playArrow_3;
  function set__refresh_3(_set____db54di) {
    _refresh_3 = _set____db54di;
  }
  function get__refresh_3() {
    return _refresh_3;
  }
  var _refresh_3;
  function set__search_3(_set____db54di) {
    _search_3 = _set____db54di;
  }
  function get__search_3() {
    return _search_3;
  }
  var _search_3;
  function set__send_3(_set____db54di) {
    _send_3 = _set____db54di;
  }
  function get__send_3() {
    return _send_3;
  }
  var _send_3;
  function set__settings_3(_set____db54di) {
    _settings_3 = _set____db54di;
  }
  function get__settings_3() {
    return _settings_3;
  }
  var _settings_3;
  function set__share_3(_set____db54di) {
    _share_3 = _set____db54di;
  }
  function get__share_3() {
    return _share_3;
  }
  var _share_3;
  function set__shoppingCart_3(_set____db54di) {
    _shoppingCart_3 = _set____db54di;
  }
  function get__shoppingCart_3() {
    return _shoppingCart_3;
  }
  var _shoppingCart_3;
  function set__star_3(_set____db54di) {
    _star_3 = _set____db54di;
  }
  function get__star_3() {
    return _star_3;
  }
  var _star_3;
  function set__thumbUp_3(_set____db54di) {
    _thumbUp_3 = _set____db54di;
  }
  function get__thumbUp_3() {
    return _thumbUp_3;
  }
  var _thumbUp_3;
  function set__warning_3(_set____db54di) {
    _warning_3 = _set____db54di;
  }
  function get__warning_3() {
    return _warning_3;
  }
  var _warning_3;
  //region block: init
  MaterialIconDimension = 24.0;
  _accountBox = null;
  _accountCircle = null;
  _add = null;
  _addCircle = null;
  _arrowBack = null;
  _arrowDropDown = null;
  _arrowForward = null;
  _build = null;
  _call = null;
  _check = null;
  _checkCircle = null;
  _clear = null;
  _close = null;
  _create = null;
  _dateRange = null;
  _delete = null;
  _done = null;
  _edit = null;
  _email = null;
  _exitToApp = null;
  _face = null;
  _favorite = null;
  _favoriteBorder = null;
  _home = null;
  _info = null;
  _keyboardArrowDown = null;
  _keyboardArrowLeft = null;
  _keyboardArrowRight = null;
  _keyboardArrowUp = null;
  _list = null;
  _locationOn = null;
  _lock = null;
  _mailOutline = null;
  _menu = null;
  _moreVert = null;
  _notifications = null;
  _person = null;
  _phone = null;
  _place = null;
  _playArrow = null;
  _refresh = null;
  _search = null;
  _send = null;
  _settings = null;
  _share = null;
  _shoppingCart = null;
  _star = null;
  _thumbUp = null;
  _warning = null;
  _accountBox_0 = null;
  _accountCircle_0 = null;
  _add_0 = null;
  _addCircle_0 = null;
  _arrowBack_0 = null;
  _arrowDropDown_0 = null;
  _arrowForward_0 = null;
  _build_0 = null;
  _call_0 = null;
  _check_0 = null;
  _checkCircle_0 = null;
  _clear_0 = null;
  _close_0 = null;
  _create_0 = null;
  _dateRange_0 = null;
  _delete_0 = null;
  _done_0 = null;
  _edit_0 = null;
  _email_0 = null;
  _exitToApp_0 = null;
  _face_0 = null;
  _favorite_0 = null;
  _favoriteBorder_0 = null;
  _home_0 = null;
  _info_0 = null;
  _keyboardArrowDown_0 = null;
  _keyboardArrowLeft_0 = null;
  _keyboardArrowRight_0 = null;
  _keyboardArrowUp_0 = null;
  _list_0 = null;
  _locationOn_0 = null;
  _lock_0 = null;
  _mailOutline_0 = null;
  _menu_0 = null;
  _moreVert_0 = null;
  _notifications_0 = null;
  _person_0 = null;
  _phone_0 = null;
  _place_0 = null;
  _playArrow_0 = null;
  _refresh_0 = null;
  _search_0 = null;
  _send_0 = null;
  _settings_0 = null;
  _share_0 = null;
  _shoppingCart_0 = null;
  _star_0 = null;
  _thumbUp_0 = null;
  _warning_0 = null;
  _accountBox_1 = null;
  _accountCircle_1 = null;
  _add_1 = null;
  _addCircle_1 = null;
  _arrowBack_1 = null;
  _arrowDropDown_1 = null;
  _arrowForward_1 = null;
  _build_1 = null;
  _call_1 = null;
  _check_1 = null;
  _checkCircle_1 = null;
  _clear_1 = null;
  _close_1 = null;
  _create_1 = null;
  _dateRange_1 = null;
  _delete_1 = null;
  _done_1 = null;
  _edit_1 = null;
  _email_1 = null;
  _exitToApp_1 = null;
  _face_1 = null;
  _favorite_1 = null;
  _favoriteBorder_1 = null;
  _home_1 = null;
  _info_1 = null;
  _keyboardArrowDown_1 = null;
  _keyboardArrowLeft_1 = null;
  _keyboardArrowRight_1 = null;
  _keyboardArrowUp_1 = null;
  _list_1 = null;
  _locationOn_1 = null;
  _lock_1 = null;
  _mailOutline_1 = null;
  _menu_1 = null;
  _moreVert_1 = null;
  _notifications_1 = null;
  _person_1 = null;
  _phone_1 = null;
  _place_1 = null;
  _playArrow_1 = null;
  _refresh_1 = null;
  _search_1 = null;
  _send_1 = null;
  _settings_1 = null;
  _share_1 = null;
  _shoppingCart_1 = null;
  _star_1 = null;
  _thumbUp_1 = null;
  _warning_1 = null;
  _accountBox_2 = null;
  _accountCircle_2 = null;
  _add_2 = null;
  _addCircle_2 = null;
  _arrowBack_2 = null;
  _arrowDropDown_2 = null;
  _arrowForward_2 = null;
  _build_2 = null;
  _call_2 = null;
  _check_2 = null;
  _checkCircle_2 = null;
  _clear_2 = null;
  _close_2 = null;
  _create_2 = null;
  _dateRange_2 = null;
  _delete_2 = null;
  _done_2 = null;
  _edit_2 = null;
  _email_2 = null;
  _exitToApp_2 = null;
  _face_2 = null;
  _favorite_2 = null;
  _favoriteBorder_2 = null;
  _home_2 = null;
  _info_2 = null;
  _keyboardArrowDown_2 = null;
  _keyboardArrowLeft_2 = null;
  _keyboardArrowRight_2 = null;
  _keyboardArrowUp_2 = null;
  _list_2 = null;
  _locationOn_2 = null;
  _lock_2 = null;
  _mailOutline_2 = null;
  _menu_2 = null;
  _moreVert_2 = null;
  _notifications_2 = null;
  _person_2 = null;
  _phone_2 = null;
  _place_2 = null;
  _playArrow_2 = null;
  _refresh_2 = null;
  _search_2 = null;
  _send_2 = null;
  _settings_2 = null;
  _share_2 = null;
  _shoppingCart_2 = null;
  _star_2 = null;
  _thumbUp_2 = null;
  _warning_2 = null;
  _accountBox_3 = null;
  _accountCircle_3 = null;
  _add_3 = null;
  _addCircle_3 = null;
  _arrowBack_3 = null;
  _arrowDropDown_3 = null;
  _arrowForward_3 = null;
  _build_3 = null;
  _call_3 = null;
  _check_3 = null;
  _checkCircle_3 = null;
  _clear_3 = null;
  _close_3 = null;
  _create_3 = null;
  _dateRange_3 = null;
  _delete_3 = null;
  _done_3 = null;
  _edit_3 = null;
  _email_3 = null;
  _exitToApp_3 = null;
  _face_3 = null;
  _favorite_3 = null;
  _favoriteBorder_3 = null;
  _home_3 = null;
  _info_3 = null;
  _keyboardArrowDown_3 = null;
  _keyboardArrowLeft_3 = null;
  _keyboardArrowRight_3 = null;
  _keyboardArrowUp_3 = null;
  _list_3 = null;
  _locationOn_3 = null;
  _lock_3 = null;
  _mailOutline_3 = null;
  _menu_3 = null;
  _moreVert_3 = null;
  _notifications_3 = null;
  _person_3 = null;
  _phone_3 = null;
  _place_3 = null;
  _playArrow_3 = null;
  _refresh_3 = null;
  _search_3 = null;
  _send_3 = null;
  _settings_3 = null;
  _share_3 = null;
  _shoppingCart_3 = null;
  _star_3 = null;
  _thumbUp_3 = null;
  _warning_3 = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_Home;
  _.$_$.b = get_Menu;
  _.$_$.c = get_Person;
  _.$_$.d = get_Home_0;
  _.$_$.e = get_Menu_0;
  _.$_$.f = get_Person_0;
  _.$_$.g = Filled_getInstance;
  _.$_$.h = Outlined_getInstance;
  //endregion
  return _;
}));
