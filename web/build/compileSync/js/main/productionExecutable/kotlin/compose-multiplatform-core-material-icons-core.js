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
  var protoOf = kotlin_kotlin.$_$.r9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var get_DefaultFillType = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var get_DefaultPathName = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var PathBuilder = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Filled, 'Filled', objectMeta);
  setMetadataFor(Outlined, 'Outlined', objectMeta);
  //endregion
  function Filled() {
    this.ucy_1 = 0;
  }
  var Filled_instance;
  function Filled_getInstance() {
    return Filled_instance;
  }
  function Outlined() {
    this.vcy_1 = 0;
  }
  var Outlined_instance;
  function Outlined_getInstance() {
    return Outlined_instance;
  }
  function get_MaterialIconDimension() {
    return MaterialIconDimension;
  }
  var MaterialIconDimension;
  var _accountBox;
  var _accountCircle;
  var _add;
  var _addCircle;
  var _arrowBack;
  var _arrowDropDown;
  var _arrowForward;
  var _build;
  var _call;
  var _check;
  var _checkCircle;
  var _clear;
  var _close;
  var _create;
  var _dateRange;
  var _delete;
  var _done;
  var _edit;
  var _email;
  var _exitToApp;
  var _face;
  var _favorite;
  var _favoriteBorder;
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
    var fill = new SolidColor(Companion_getInstance().y41_1);
    var strokeLineCap = Companion_getInstance_0().v4a_1;
    var strokeLineJoin = Companion_getInstance_1().b4b_1;
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.filled.<get-Home>.<anonymous>.<anonymous>' call
    $this$with.b3n(10.0, 20.0);
    $this$with.a4i(-6.0);
    $this$with.y4h(4.0);
    $this$with.a4i(6.0);
    $this$with.y4h(5.0);
    $this$with.a4i(-8.0);
    $this$with.y4h(3.0);
    $this$with.d3n(12.0, 3.0);
    $this$with.d3n(2.0, 12.0);
    $this$with.y4h(3.0);
    $this$with.a4i(8.0);
    $this$with.u4h();
    var tmp$ret$4 = $this$with.t4h();
    _home = this_2.u66(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).v24();
    return ensureNotNull(_home);
  }
  var _info;
  var _keyboardArrowDown;
  var _keyboardArrowLeft;
  var _keyboardArrowRight;
  var _keyboardArrowUp;
  var _list;
  var _locationOn;
  var _lock;
  var _mailOutline;
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
    var fill = new SolidColor(Companion_getInstance().y41_1);
    var strokeLineCap = Companion_getInstance_0().v4a_1;
    var strokeLineJoin = Companion_getInstance_1().b4b_1;
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.filled.<get-Menu>.<anonymous>.<anonymous>' call
    $this$with.b3n(3.0, 18.0);
    $this$with.y4h(18.0);
    $this$with.a4i(-2.0);
    $this$with.d3n(3.0, 16.0);
    $this$with.a4i(2.0);
    $this$with.u4h();
    $this$with.b3n(3.0, 13.0);
    $this$with.y4h(18.0);
    $this$with.a4i(-2.0);
    $this$with.d3n(3.0, 11.0);
    $this$with.a4i(2.0);
    $this$with.u4h();
    $this$with.b3n(3.0, 6.0);
    $this$with.a4i(2.0);
    $this$with.y4h(18.0);
    $this$with.d3n(21.0, 6.0);
    $this$with.d3n(3.0, 6.0);
    $this$with.u4h();
    var tmp$ret$4 = $this$with.t4h();
    _menu = this_2.u66(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).v24();
    return ensureNotNull(_menu);
  }
  var _moreVert;
  var _notifications;
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
    var fill = new SolidColor(Companion_getInstance().y41_1);
    var strokeLineCap = Companion_getInstance_0().v4a_1;
    var strokeLineJoin = Companion_getInstance_1().b4b_1;
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.filled.<get-Person>.<anonymous>.<anonymous>' call
    $this$with.b3n(12.0, 12.0);
    $this$with.c4i(2.21, 0.0, 4.0, -1.79, 4.0, -4.0);
    $this$with.d4i(-1.79, -4.0, -4.0, -4.0);
    $this$with.d4i(-4.0, 1.79, -4.0, 4.0);
    $this$with.d4i(1.79, 4.0, 4.0, 4.0);
    $this$with.u4h();
    $this$with.b3n(12.0, 14.0);
    $this$with.c4i(-2.67, 0.0, -8.0, 1.34, -8.0, 4.0);
    $this$with.a4i(2.0);
    $this$with.y4h(16.0);
    $this$with.a4i(-2.0);
    $this$with.c4i(0.0, -2.66, -5.33, -4.0, -8.0, -4.0);
    $this$with.u4h();
    var tmp$ret$4 = $this$with.t4h();
    _person = this_2.u66(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).v24();
    return ensureNotNull(_person);
  }
  var _phone;
  var _place;
  var _playArrow;
  var _refresh;
  var _search;
  var _send;
  var _settings;
  var _share;
  var _shoppingCart;
  var _star;
  var _thumbUp;
  var _warning;
  var _accountBox_0;
  var _accountCircle_0;
  var _add_0;
  var _addCircle_0;
  var _arrowBack_0;
  var _arrowDropDown_0;
  var _arrowForward_0;
  var _build_0;
  var _call_0;
  var _check_0;
  var _checkCircle_0;
  var _clear_0;
  var _close_0;
  var _create_0;
  var _dateRange_0;
  var _delete_0;
  var _done_0;
  var _edit_0;
  var _email_0;
  var _exitToApp_0;
  var _face_0;
  var _favorite_0;
  var _favoriteBorder_0;
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
    var fill = new SolidColor(Companion_getInstance().y41_1);
    var strokeLineCap = Companion_getInstance_0().v4a_1;
    var strokeLineJoin = Companion_getInstance_1().b4b_1;
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.outlined.<get-Home>.<anonymous>.<anonymous>' call
    $this$with.b3n(12.0, 5.69);
    $this$with.w4h(5.0, 4.5);
    $this$with.z4h(18.0);
    $this$with.y4h(-2.0);
    $this$with.a4i(-6.0);
    $this$with.x4h(9.0);
    $this$with.a4i(6.0);
    $this$with.x4h(7.0);
    $this$with.a4i(-7.81);
    $this$with.w4h(5.0, -4.5);
    $this$with.b3n(12.0, 3.0);
    $this$with.d3n(2.0, 12.0);
    $this$with.y4h(3.0);
    $this$with.a4i(8.0);
    $this$with.y4h(6.0);
    $this$with.a4i(-6.0);
    $this$with.y4h(2.0);
    $this$with.a4i(6.0);
    $this$with.y4h(6.0);
    $this$with.a4i(-8.0);
    $this$with.y4h(3.0);
    $this$with.d3n(12.0, 3.0);
    $this$with.u4h();
    var tmp$ret$4 = $this$with.t4h();
    _home_0 = this_2.u66(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).v24();
    return ensureNotNull(_home_0);
  }
  var _info_0;
  var _keyboardArrowDown_0;
  var _keyboardArrowLeft_0;
  var _keyboardArrowRight_0;
  var _keyboardArrowUp_0;
  var _list_0;
  var _locationOn_0;
  var _lock_0;
  var _mailOutline_0;
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
    var fill = new SolidColor(Companion_getInstance().y41_1);
    var strokeLineCap = Companion_getInstance_0().v4a_1;
    var strokeLineJoin = Companion_getInstance_1().b4b_1;
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.outlined.<get-Menu>.<anonymous>.<anonymous>' call
    $this$with.b3n(3.0, 18.0);
    $this$with.y4h(18.0);
    $this$with.a4i(-2.0);
    $this$with.d3n(3.0, 16.0);
    $this$with.a4i(2.0);
    $this$with.u4h();
    $this$with.b3n(3.0, 13.0);
    $this$with.y4h(18.0);
    $this$with.a4i(-2.0);
    $this$with.d3n(3.0, 11.0);
    $this$with.a4i(2.0);
    $this$with.u4h();
    $this$with.b3n(3.0, 6.0);
    $this$with.a4i(2.0);
    $this$with.y4h(18.0);
    $this$with.d3n(21.0, 6.0);
    $this$with.d3n(3.0, 6.0);
    $this$with.u4h();
    var tmp$ret$4 = $this$with.t4h();
    _menu_0 = this_2.u66(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).v24();
    return ensureNotNull(_menu_0);
  }
  var _moreVert_0;
  var _notifications_0;
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
    var fill = new SolidColor(Companion_getInstance().y41_1);
    var strokeLineCap = Companion_getInstance_0().v4a_1;
    var strokeLineJoin = Companion_getInstance_1().b4b_1;
    var name_0 = get_DefaultPathName();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.vector.PathData.<anonymous>' call
    var $this$with = new PathBuilder();
    // Inline function 'androidx.compose.material.icons.outlined.<get-Person>.<anonymous>.<anonymous>' call
    $this$with.b3n(12.0, 6.0);
    $this$with.c4i(1.1, 0.0, 2.0, 0.9, 2.0, 2.0);
    $this$with.d4i(-0.9, 2.0, -2.0, 2.0);
    $this$with.d4i(-2.0, -0.9, -2.0, -2.0);
    $this$with.d4i(0.9, -2.0, 2.0, -2.0);
    $this$with.v4h(0.0, 10.0);
    $this$with.c4i(2.7, 0.0, 5.8, 1.29, 6.0, 2.0);
    $this$with.d3n(6.0, 18.0);
    $this$with.c4i(0.23, -0.72, 3.31, -2.0, 6.0, -2.0);
    $this$with.v4h(0.0, -12.0);
    $this$with.b4i(9.79, 4.0, 8.0, 5.79, 8.0, 8.0);
    $this$with.d4i(1.79, 4.0, 4.0, 4.0);
    $this$with.d4i(4.0, -1.79, 4.0, -4.0);
    $this$with.d4i(-1.79, -4.0, -4.0, -4.0);
    $this$with.u4h();
    $this$with.b3n(12.0, 14.0);
    $this$with.c4i(-2.67, 0.0, -8.0, 1.34, -8.0, 4.0);
    $this$with.a4i(2.0);
    $this$with.y4h(16.0);
    $this$with.a4i(-2.0);
    $this$with.c4i(0.0, -2.66, -5.33, -4.0, -8.0, -4.0);
    $this$with.u4h();
    var tmp$ret$4 = $this$with.t4h();
    _person_0 = this_2.u66(tmp$ret$4, pathFillType, name_0, fill, 1.0, null, 1.0, 1.0, strokeLineCap, strokeLineJoin, 1.0).v24();
    return ensureNotNull(_person_0);
  }
  var _phone_0;
  var _place_0;
  var _playArrow_0;
  var _refresh_0;
  var _search_0;
  var _send_0;
  var _settings_0;
  var _share_0;
  var _shoppingCart_0;
  var _star_0;
  var _thumbUp_0;
  var _warning_0;
  var _accountBox_1;
  var _accountCircle_1;
  var _add_1;
  var _addCircle_1;
  var _arrowBack_1;
  var _arrowDropDown_1;
  var _arrowForward_1;
  var _build_1;
  var _call_1;
  var _check_1;
  var _checkCircle_1;
  var _clear_1;
  var _close_1;
  var _create_1;
  var _dateRange_1;
  var _delete_1;
  var _done_1;
  var _edit_1;
  var _email_1;
  var _exitToApp_1;
  var _face_1;
  var _favorite_1;
  var _favoriteBorder_1;
  var _home_1;
  var _info_1;
  var _keyboardArrowDown_1;
  var _keyboardArrowLeft_1;
  var _keyboardArrowRight_1;
  var _keyboardArrowUp_1;
  var _list_1;
  var _locationOn_1;
  var _lock_1;
  var _mailOutline_1;
  var _menu_1;
  var _moreVert_1;
  var _notifications_1;
  var _person_1;
  var _phone_1;
  var _place_1;
  var _playArrow_1;
  var _refresh_1;
  var _search_1;
  var _send_1;
  var _settings_1;
  var _share_1;
  var _shoppingCart_1;
  var _star_1;
  var _thumbUp_1;
  var _warning_1;
  var _accountBox_2;
  var _accountCircle_2;
  var _add_2;
  var _addCircle_2;
  var _arrowBack_2;
  var _arrowDropDown_2;
  var _arrowForward_2;
  var _build_2;
  var _call_2;
  var _check_2;
  var _checkCircle_2;
  var _clear_2;
  var _close_2;
  var _create_2;
  var _dateRange_2;
  var _delete_2;
  var _done_2;
  var _edit_2;
  var _email_2;
  var _exitToApp_2;
  var _face_2;
  var _favorite_2;
  var _favoriteBorder_2;
  var _home_2;
  var _info_2;
  var _keyboardArrowDown_2;
  var _keyboardArrowLeft_2;
  var _keyboardArrowRight_2;
  var _keyboardArrowUp_2;
  var _list_2;
  var _locationOn_2;
  var _lock_2;
  var _mailOutline_2;
  var _menu_2;
  var _moreVert_2;
  var _notifications_2;
  var _person_2;
  var _phone_2;
  var _place_2;
  var _playArrow_2;
  var _refresh_2;
  var _search_2;
  var _send_2;
  var _settings_2;
  var _share_2;
  var _shoppingCart_2;
  var _star_2;
  var _thumbUp_2;
  var _warning_2;
  var _accountBox_3;
  var _accountCircle_3;
  var _add_3;
  var _addCircle_3;
  var _arrowBack_3;
  var _arrowDropDown_3;
  var _arrowForward_3;
  var _build_3;
  var _call_3;
  var _check_3;
  var _checkCircle_3;
  var _clear_3;
  var _close_3;
  var _create_3;
  var _dateRange_3;
  var _delete_3;
  var _done_3;
  var _edit_3;
  var _email_3;
  var _exitToApp_3;
  var _face_3;
  var _favorite_3;
  var _favoriteBorder_3;
  var _home_3;
  var _info_3;
  var _keyboardArrowDown_3;
  var _keyboardArrowLeft_3;
  var _keyboardArrowRight_3;
  var _keyboardArrowUp_3;
  var _list_3;
  var _locationOn_3;
  var _lock_3;
  var _mailOutline_3;
  var _menu_3;
  var _moreVert_3;
  var _notifications_3;
  var _person_3;
  var _phone_3;
  var _place_3;
  var _playArrow_3;
  var _refresh_3;
  var _search_3;
  var _send_3;
  var _settings_3;
  var _share_3;
  var _shoppingCart_3;
  var _star_3;
  var _thumbUp_3;
  var _warning_3;
  //region block: init
  Filled_instance = new Filled();
  Outlined_instance = new Outlined();
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
  _.$_$.g = Filled_instance;
  _.$_$.h = Outlined_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-material-icons-core.js.map
