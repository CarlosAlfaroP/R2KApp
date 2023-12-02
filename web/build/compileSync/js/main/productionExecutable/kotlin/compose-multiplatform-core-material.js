(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-foundation.js'));
  else {
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'compose-multiplatform-core-material'.");
    }
    root['compose-multiplatform-core-material'] = factory(typeof this['compose-multiplatform-core-material'] === 'undefined' ? {} : this['compose-multiplatform-core-material'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-foundation']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var protoOf = kotlin_kotlin.$_$.r9;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var Long = kotlin_kotlin.$_$.rc;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var VOID = kotlin_kotlin.$_$.d;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var KMutableProperty1 = kotlin_kotlin.$_$.ua;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var rememberVectorPainter$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.o2;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.a7;
  var toolingGraphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.o8;
  var paint = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var Box$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t1;
  var equals = kotlin_kotlin.$_$.t8;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var isInfinite = kotlin_kotlin.$_$.ld;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var set_contentDescription = kotlin_org_jetbrains_compose_ui_ui.$_$.b6;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.v6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.w2;
  var BasicText$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g2;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j2;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Colors, 'Colors', classMeta);
  setMetadataFor(ContentAlpha, 'ContentAlpha', objectMeta);
  setMetadataFor(MaterialTheme, 'MaterialTheme', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_ColorProducer$0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', classMeta);
  setMetadataFor(Typography, 'Typography', classMeta, VOID, VOID, Typography_init_$Create$);
  //endregion
  function get_LocalColors() {
    _init_properties_Colors_kt__dgoqts();
    return LocalColors;
  }
  var LocalColors;
  function Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, isLight) {
    this.wcy_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.xcy_1 = mutableStateOf(new Color(primaryVariant), structuralEqualityPolicy());
    this.ycy_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.zcy_1 = mutableStateOf(new Color(secondaryVariant), structuralEqualityPolicy());
    this.acz_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.bcz_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.ccz_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.dcz_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.ecz_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.fcz_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.gcz_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.hcz_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.icz_1 = mutableStateOf(isLight, structuralEqualityPolicy());
    this.jcz_1 = 0;
  }
  protoOf(Colors).kcz = function (_set____db54di) {
    var this_0 = this.wcy_1;
    primary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).lcz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.wcy_1;
    primary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).mcz = function (_set____db54di) {
    var this_0 = this.xcy_1;
    primaryVariant$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).ncz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.xcy_1;
    primaryVariant$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).ocz = function (_set____db54di) {
    var this_0 = this.ycy_1;
    secondary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).pcz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ycy_1;
    secondary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).qcz = function (_set____db54di) {
    var this_0 = this.zcy_1;
    secondaryVariant$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).rcz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.zcy_1;
    secondaryVariant$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).scz = function (_set____db54di) {
    var this_0 = this.acz_1;
    background$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).k4z = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.acz_1;
    background$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).tcz = function (_set____db54di) {
    var this_0 = this.bcz_1;
    surface$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).ucz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.bcz_1;
    surface$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).vcz = function (_set____db54di) {
    var this_0 = this.ccz_1;
    error$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).wcz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ccz_1;
    error$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).xcz = function (_set____db54di) {
    var this_0 = this.dcz_1;
    onPrimary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).ycz = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.dcz_1;
    onPrimary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).zcz = function (_set____db54di) {
    var this_0 = this.ecz_1;
    onSecondary$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).ad0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.ecz_1;
    onSecondary$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).bd0 = function (_set____db54di) {
    var this_0 = this.fcz_1;
    onBackground$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).cd0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.fcz_1;
    onBackground$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).dd0 = function (_set____db54di) {
    var this_0 = this.gcz_1;
    onSurface$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).ed0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.gcz_1;
    onSurface$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).fd0 = function (_set____db54di) {
    var this_0 = this.hcz_1;
    onError$factory();
    var value = new Color(_set____db54di);
    this_0.h1a(value);
    return Unit_instance;
  };
  protoOf(Colors).gd0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.hcz_1;
    onError$factory_0();
    return this_0.u2().p41_1;
  };
  protoOf(Colors).hd0 = function (_set____db54di) {
    var this_0 = this.icz_1;
    isLight$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  };
  protoOf(Colors).id0 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = this.icz_1;
    isLight$factory_0();
    return this_0.u2();
  };
  protoOf(Colors).toString = function () {
    return 'Colors(' + ('primary=' + new Color(this.lcz()) + ', ') + ('primaryVariant=' + new Color(this.ncz()) + ', ') + ('secondary=' + new Color(this.pcz()) + ', ') + ('secondaryVariant=' + new Color(this.rcz()) + ', ') + ('background=' + new Color(this.k4z()) + ', ') + ('surface=' + new Color(this.ucz()) + ', ') + ('error=' + new Color(this.wcz()) + ', ') + ('onPrimary=' + new Color(this.ycz()) + ', ') + ('onSecondary=' + new Color(this.ad0()) + ', ') + ('onBackground=' + new Color(this.cd0()) + ', ') + ('onSurface=' + new Color(this.ed0()) + ', ') + ('onError=' + new Color(this.gd0()) + ', ') + ('isLight=' + this.id0()) + ')';
  };
  function lightColors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError) {
    primary = primary === VOID ? Color_0(new Long(-10354450, 0)) : primary;
    primaryVariant = primaryVariant === VOID ? Color_0(new Long(-13172557, 0)) : primaryVariant;
    secondary = secondary === VOID ? Color_0(new Long(-16524602, 0)) : secondary;
    secondaryVariant = secondaryVariant === VOID ? Color_0(new Long(-16676986, 0)) : secondaryVariant;
    background = background === VOID ? Companion_getInstance().c42_1 : background;
    surface = surface === VOID ? Companion_getInstance().c42_1 : surface;
    error = error === VOID ? Color_0(new Long(-5242848, 0)) : error;
    onPrimary = onPrimary === VOID ? Companion_getInstance().c42_1 : onPrimary;
    onSecondary = onSecondary === VOID ? Companion_getInstance().y41_1 : onSecondary;
    onBackground = onBackground === VOID ? Companion_getInstance().y41_1 : onBackground;
    onSurface = onSurface === VOID ? Companion_getInstance().y41_1 : onSurface;
    onError = onError === VOID ? Companion_getInstance().c42_1 : onError;
    _init_properties_Colors_kt__dgoqts();
    return new Colors(primary, primaryVariant, secondary, secondaryVariant, background, surface, error, onPrimary, onSecondary, onBackground, onSurface, onError, true);
  }
  function LocalColors$lambda() {
    _init_properties_Colors_kt__dgoqts();
    return lightColors();
  }
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.lcz());
    }, function (receiver, value) {
      return receiver.kcz(value.p41_1);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.lcz());
    }, function (receiver, value) {
      return receiver.kcz(value.p41_1);
    });
  }
  function primaryVariant$factory() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ncz());
    }, function (receiver, value) {
      return receiver.mcz(value.p41_1);
    });
  }
  function primaryVariant$factory_0() {
    return getPropertyCallableRef('primaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ncz());
    }, function (receiver, value) {
      return receiver.mcz(value.p41_1);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.pcz());
    }, function (receiver, value) {
      return receiver.ocz(value.p41_1);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.pcz());
    }, function (receiver, value) {
      return receiver.ocz(value.p41_1);
    });
  }
  function secondaryVariant$factory() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.rcz());
    }, function (receiver, value) {
      return receiver.qcz(value.p41_1);
    });
  }
  function secondaryVariant$factory_0() {
    return getPropertyCallableRef('secondaryVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.rcz());
    }, function (receiver, value) {
      return receiver.qcz(value.p41_1);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.k4z());
    }, function (receiver, value) {
      return receiver.scz(value.p41_1);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.k4z());
    }, function (receiver, value) {
      return receiver.scz(value.p41_1);
    });
  }
  function surface$factory() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ucz());
    }, function (receiver, value) {
      return receiver.tcz(value.p41_1);
    });
  }
  function surface$factory_0() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ucz());
    }, function (receiver, value) {
      return receiver.tcz(value.p41_1);
    });
  }
  function error$factory() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wcz());
    }, function (receiver, value) {
      return receiver.vcz(value.p41_1);
    });
  }
  function error$factory_0() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.wcz());
    }, function (receiver, value) {
      return receiver.vcz(value.p41_1);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ycz());
    }, function (receiver, value) {
      return receiver.xcz(value.p41_1);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ycz());
    }, function (receiver, value) {
      return receiver.xcz(value.p41_1);
    });
  }
  function onSecondary$factory() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ad0());
    }, function (receiver, value) {
      return receiver.zcz(value.p41_1);
    });
  }
  function onSecondary$factory_0() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ad0());
    }, function (receiver, value) {
      return receiver.zcz(value.p41_1);
    });
  }
  function onBackground$factory() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.cd0());
    }, function (receiver, value) {
      return receiver.bd0(value.p41_1);
    });
  }
  function onBackground$factory_0() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.cd0());
    }, function (receiver, value) {
      return receiver.bd0(value.p41_1);
    });
  }
  function onSurface$factory() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ed0());
    }, function (receiver, value) {
      return receiver.dd0(value.p41_1);
    });
  }
  function onSurface$factory_0() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.ed0());
    }, function (receiver, value) {
      return receiver.dd0(value.p41_1);
    });
  }
  function onError$factory() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.gd0());
    }, function (receiver, value) {
      return receiver.fd0(value.p41_1);
    });
  }
  function onError$factory_0() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.gd0());
    }, function (receiver, value) {
      return receiver.fd0(value.p41_1);
    });
  }
  function isLight$factory() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.id0();
    }, function (receiver, value) {
      return receiver.hd0(value);
    });
  }
  function isLight$factory_0() {
    return getPropertyCallableRef('isLight', 1, KMutableProperty1, function (receiver) {
      return receiver.id0();
    }, function (receiver, value) {
      return receiver.hd0(value);
    });
  }
  var properties_initialized_Colors_kt_23tfjm;
  function _init_properties_Colors_kt__dgoqts() {
    if (!properties_initialized_Colors_kt_23tfjm) {
      properties_initialized_Colors_kt_23tfjm = true;
      LocalColors = staticCompositionLocalOf(LocalColors$lambda);
    }
  }
  function get_LocalContentAlpha() {
    _init_properties_ContentAlpha_kt__y2n6o5();
    return LocalContentAlpha;
  }
  var LocalContentAlpha;
  function contentAlpha$composable($this, highContrastAlpha, lowContrastAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-198048456);
    sourceInformation($composer_0, 'C(contentAlpha$composable)76@2623L7,77@2670L6:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-198048456, $changed, -1, 'androidx.compose.material.ContentAlpha.contentAlpha$composable (ContentAlpha.kt:70)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    var contentColor = tmp0.p41_1;
    var lightTheme = MaterialTheme_instance.kd0($composer_0, 6).id0();
    var tmp;
    if (lightTheme) {
      tmp = luminance(contentColor) > 0.5 ? highContrastAlpha : lowContrastAlpha;
    } else {
      tmp = luminance(contentColor) < 0.5 ? highContrastAlpha : lowContrastAlpha;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  }
  function ContentAlpha() {
    this.ld0_1 = 0;
  }
  protoOf(ContentAlpha).md0 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-277492921);
    sourceInformation($composer_0, 'C($get-medium$$composable)45@1458L150:ContentAlpha.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(-277492921, $changed, -1, 'androidx.compose.material.ContentAlpha.$get-medium$$composable (ContentAlpha.kt:45)');
    }
    var tmp0 = contentAlpha$composable(this, 0.74, 0.6, $composer_0, 54 | 896 & $changed << 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  var ContentAlpha_instance;
  function ContentAlpha_getInstance() {
    return ContentAlpha_instance;
  }
  function LocalContentAlpha$lambda() {
    _init_properties_ContentAlpha_kt__y2n6o5();
    return 1.0;
  }
  var properties_initialized_ContentAlpha_kt_tnmwxz;
  function _init_properties_ContentAlpha_kt__y2n6o5() {
    if (!properties_initialized_ContentAlpha_kt_tnmwxz) {
      properties_initialized_ContentAlpha_kt_tnmwxz = true;
      LocalContentAlpha = compositionLocalOf(VOID, LocalContentAlpha$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance().y41_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (!properties_initialized_ContentColor_kt_sc8rw) {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  function get_DefaultIconSizeModifier() {
    _init_properties_Icon_kt__pgqcnt();
    return DefaultIconSizeModifier;
  }
  var DefaultIconSizeModifier;
  function Icon$composable(imageVector, contentDescription, modifier, tint, $composer, $changed, $default) {
    _init_properties_Icon_kt__pgqcnt();
    var modifier_0 = modifier;
    var tint_0 = tint;
    var $composer_0 = $composer;
    $composer_0.f1x(-1798234707);
    sourceInformation($composer_0, 'C(Icon$composable)P(1!,3:c#ui.graphics.Color)65@3149L7,65@3188L7,68@3229L34,67@3205L163:Icon.kt#jmzs0o');
    if (!(($default & 4) === 0))
      modifier_0 = Companion_instance;
    if (!(($default & 8) === 0)) {
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_0 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.b20(this_0);
      sourceInformationMarkerEnd($composer_1);
      var tmp = tmp0.p41_1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_1 = get_LocalContentAlpha();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.b20(this_1);
      sourceInformationMarkerEnd($composer_2);
      tint_0 = Color__copy$default_impl_ectz3s(tmp, tmp0_0);
    }
    if (isTraceInProgress()) {
      traceEventStart(-1798234707, $changed, -1, 'androidx.compose.material.Icon$composable (Icon.kt:61)');
    }
    Icon$composable_0(rememberVectorPainter$composable(imageVector, $composer_0, 14 & $changed), contentDescription, modifier_0, tint_0, $composer_0, 112 & $changed | 896 & $changed | 7168 & $changed, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
  }
  function Icon$composable_0(painter, contentDescription, modifier, tint, $composer, $changed, $default) {
    _init_properties_Icon_kt__pgqcnt();
    var modifier_0 = {_v: modifier};
    var tint_0 = {_v: new Color(tint)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1405370588);
    sourceInformation($composer_0, 'C(Icon$composable)P(2!,3:c#ui.graphics.Color)133@6456L7,133@6495L7,145@6878L253:Icon.kt#jmzs0o');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(painter) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(contentDescription) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(tint_0._v.p41_1))) : false) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 8) === 0)) {
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var this_0 = get_LocalContentColor();
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_1.b20(this_0);
          sourceInformationMarkerEnd($composer_1);
          var tmp = tmp0.p41_1;
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var this_1 = get_LocalContentAlpha();
          var $composer_2 = $composer_0;
          sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.b20(this_1);
          sourceInformationMarkerEnd($composer_2);
          tint_0._v = new Color(Color__copy$default_impl_ectz3s(tmp, tmp0_0));
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(-1405370588, $dirty, -1, 'androidx.compose.material.Icon$composable (Icon.kt:129)');
      }
      var colorFilter = tint_0._v.equals(new Color(Companion_getInstance().k42_1)) ? null : Companion_instance_0.w46(tint_0._v.p41_1);
      $composer_0.f1x(1651962591);
      sourceInformation($composer_0, '138@6734L103');
      var tmp_0;
      if (!(contentDescription == null)) {
        var tmp_1 = Companion_instance;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.f1x(-838505973);
        sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_3.t1z(contentDescription);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_3.r1z();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
          // Inline function 'androidx.compose.material.Icon$composable.<anonymous>' call
          var value = Icon$composable$lambda(contentDescription);
          $composer_3.s1z(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_1 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_3.h1x();
        tmp_0 = semantics(tmp_1, VOID, tmp0_1);
      } else {
        tmp_0 = Companion_instance;
      }
      var tmp0_group = tmp_0;
      $composer_0.h1x();
      var semantics_0 = tmp0_group;
      var tmp0_$receiver = defaultSizeFor(toolingGraphicsLayer(modifier_0._v), painter);
      var tmp1_contentScale = Companion_getInstance_1().u5p_1;
      Box$composable(paint(tmp0_$receiver, painter, VOID, VOID, tmp1_contentScale, VOID, colorFilter).c5j(semantics_0), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    var tmp1_safe_receiver = $composer_0.d1z();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.w2e(Icon$composable$lambda_0(painter, contentDescription, modifier_0, tint_0, $changed, $default));
    }
  }
  function defaultSizeFor(_this__u8e3s4, painter) {
    _init_properties_Icon_kt__pgqcnt();
    var tmp;
    if (equals(painter.y4g(), Companion_getInstance_2().k3a_1) ? true : isInfinite_0(painter.y4g())) {
      tmp = get_DefaultIconSizeModifier();
    } else {
      tmp = Companion_instance;
    }
    return _this__u8e3s4.c5j(tmp);
  }
  function isInfinite_0(_this__u8e3s4) {
    _init_properties_Icon_kt__pgqcnt();
    return isInfinite(_Size___get_width__impl__58y75t(_this__u8e3s4)) ? isInfinite(_Size___get_height__impl__a04p02(_this__u8e3s4)) : false;
  }
  function Icon$composable$lambda($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_3().g7x_1);
      return Unit_instance;
    };
  }
  function Icon$composable$lambda_0($painter, $contentDescription, $modifier, $tint, $$changed, $$default) {
    return function ($composer, $force) {
      Icon$composable_0($painter, $contentDescription, $modifier._v, $tint._v.p41_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Icon_kt_u3g1lx;
  function _init_properties_Icon_kt__pgqcnt() {
    if (!properties_initialized_Icon_kt_u3g1lx) {
      properties_initialized_Icon_kt_u3g1lx = true;
      var tmp = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      DefaultIconSizeModifier = size(tmp, tmp$ret$0);
    }
  }
  function MaterialTheme() {
    this.jd0_1 = 0;
  }
  protoOf(MaterialTheme).kd0 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 273761861, 'C($get-colors$$composable)102@4462L7:MaterialTheme.kt#jmzs0o');
    if (isTraceInProgress()) {
      traceEventStart(273761861, $changed, -1, 'androidx.compose.material.MaterialTheme.$get-colors$$composable (MaterialTheme.kt:102)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalColors();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    return MaterialTheme_instance;
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text$composable(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(66730249);
    sourceInformation($composer_0, 'C(Text$composable)P(14,9,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,16,15:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,11:c#ui.text.style.TextOverflow,12)109@5711L7,128@6923L7,129@6977L7,156@7775L30,138@7204L607:Text.kt#jmzs0o');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.x1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.p41_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.x1z(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.t3c_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.t1z(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.t1z(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.t1z(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.x1z(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.t3c_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.t1z(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.t1z(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.x1z(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.t3c_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.v1z(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.f5c_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.u1z(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.v1z(maxLines_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.v1z(minLines_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ($composer_0.y1z(onTextLayout_0._v) ? 131072 : 65536);
    if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ((($default & 65536) === 0 ? $composer_0.t1z(style_0._v) : false) ? 1048576 : 524288);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 2995931) === 599186)) ? true : !$composer_0.w1y()) {
      $composer_0.a1z();
      if (($changed & 1) === 0 ? true : $composer_0.x1y()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance().k42_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_4().r3c_1);
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_4().r3c_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_4().r3c_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_5().k4y_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = IntCompanionObject_instance.MAX_VALUE;
        }
        if (!(($default & 16384) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 32768) === 0)) {
          onTextLayout_0._v = null;
        }
        if (!(($default & 65536) === 0)) {
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var this_0 = get_LocalTextStyle();
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0 = $composer_1.b20(this_0);
          sourceInformationMarkerEnd($composer_1);
          style_0._v = tmp0;
          $dirty1 = $dirty1 & -3670017;
        }
      } else {
        $composer_0.h1z();
        if (!(($default & 65536) === 0))
          $dirty1 = $dirty1 & -3670017;
      }
      $composer_0.b1z();
      if (isTraceInProgress()) {
        traceEventStart(66730249, $dirty, $dirty1, 'androidx.compose.material.Text$composable (Text.kt:92)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_1 = get_LocalContentColor();
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.b20(this_1);
      sourceInformationMarkerEnd($composer_2);
      var localContentColor = tmp0_0.p41_1;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var this_2 = get_LocalContentAlpha();
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.b20(this_2);
      sourceInformationMarkerEnd($composer_3);
      var localContentAlpha = tmp0_1;
      var tmp_1;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      var this_3 = color_0._v.p41_1;
      if (!equals(_Color___get_value__impl__1pls5m(this_3), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
        tmp_1 = color_0._v.p41_1;
      } else {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        var this_4 = style_0._v.m42();
        if (!equals(_Color___get_value__impl__1pls5m(this_4), _Color___get_value__impl__1pls5m(Companion_getInstance().k42_1))) {
          tmp_1 = style_0._v.m42();
        } else {
          tmp_1 = Color__copy$default_impl_ectz3s(localContentColor, localContentAlpha);
        }
      }
      var overrideColorOrUnspecified = tmp_1;
      var tmp_2 = modifier_0._v;
      var tmp_3 = style_0._v;
      var tmp_4 = fontSize_0._v;
      var tmp_5 = fontWeight_0._v;
      var tmp_6 = fontStyle_0._v;
      var tmp_7 = tmp_6 == null ? null : tmp_6.s4u_1;
      var tmp_8 = fontFamily_0._v;
      var tmp_9 = letterSpacing_0._v;
      var tmp_10 = textDecoration_0._v;
      var tmp_11 = textAlign_0._v;
      var tmp_12 = tmp_3.v4y(VOID, tmp_4.t3c_1, tmp_5, tmp_7, VOID, tmp_8, VOID, tmp_9.t3c_1, VOID, VOID, VOID, VOID, tmp_10, VOID, VOID, tmp_11 == null ? null : tmp_11.f4t_1, VOID, lineHeight_0._v.t3c_1);
      var tmp_13 = onTextLayout_0._v;
      var tmp_14 = overflow_0._v;
      var tmp_15 = softWrap_0._v;
      var tmp_16 = maxLines_0._v;
      var tmp_17 = minLines_0._v;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var key1 = new Color(overrideColorOrUnspecified);
      var $composer_4 = $composer_0;
      $composer_4.f1x(-838505973);
      sourceInformation($composer_4, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_4.t1z(key1);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_4.r1z();
      var tmp_18;
      if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
        // Inline function 'androidx.compose.material.Text$composable.<anonymous>' call
        var value = Text$composable$lambda(overrideColorOrUnspecified);
        $composer_4.s1z(value);
        tmp_18 = value;
      } else {
        tmp_18 = it;
      }
      var tmp_19 = tmp_18;
      var tmp0_2 = (tmp_19 == null ? true : !(tmp_19 == null)) ? tmp_19 : THROW_CCE();
      $composer_4.h1x();
      BasicText$composable(text, tmp_2, tmp_12, tmp_13, tmp_14.f5c_1, tmp_15, tmp_16, tmp_17, new sam$androidx_compose_ui_graphics_ColorProducer$0(tmp0_2), $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 6 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9 | 29360128 & $dirty1 << 9, 0);
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
      tmp0_safe_receiver.w2e(Text$composable$lambda_0(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0(function_0) {
    this.nd0_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).ecm = function () {
    return this.nd0_1().p41_1;
  };
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return get_DefaultTextStyle();
  }
  function Text$composable$lambda($overrideColorOrUnspecified) {
    return function () {
      return new Color($overrideColorOrUnspecified);
    };
  }
  function Text$composable$lambda_0($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v;
      var tmp_1 = $fontSize._v;
      var tmp_2 = $fontStyle._v;
      var tmp_3 = tmp_2 == null ? null : tmp_2.s4u_1;
      var tmp_4 = $fontWeight._v;
      var tmp_5 = $fontFamily._v;
      var tmp_6 = $letterSpacing._v;
      var tmp_7 = $textDecoration._v;
      var tmp_8 = $textAlign._v;
      Text$composable($text, tmp, tmp_0.p41_1, tmp_1.t3c_1, tmp_3, tmp_4, tmp_5, tmp_6.t3c_1, tmp_7, tmp_8 == null ? null : tmp_8.f4t_1, $lineHeight._v.t3c_1, $overflow._v.f5c_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  function get_DefaultTextStyle() {
    _init_properties_Typography_kt__rm3fch();
    return DefaultTextStyle;
  }
  var DefaultTextStyle;
  var LocalTypography;
  function Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, $this) {
    defaultFontFamily = defaultFontFamily === VOID ? Companion_getInstance_6().z4w_1 : defaultFontFamily;
    var tmp;
    if (h1 === VOID) {
      var tmp0_$this = get_DefaultTextStyle();
      var tmp1_fontWeight = Companion_getInstance_7().i4w_1;
      var tmp2_fontSize = get_sp(96);
      var tmp3_letterSpacing = get_sp_0(-1.5);
      tmp = tmp0_$this.x4y(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, VOID, VOID, tmp3_letterSpacing);
    } else {
      tmp = h1;
    }
    h1 = tmp;
    var tmp_0;
    if (h2 === VOID) {
      var tmp4_$this = get_DefaultTextStyle();
      var tmp5_fontWeight = Companion_getInstance_7().i4w_1;
      var tmp6_fontSize = get_sp(60);
      var tmp7_letterSpacing = get_sp_0(-0.5);
      tmp_0 = tmp4_$this.x4y(VOID, tmp6_fontSize, tmp5_fontWeight, VOID, VOID, VOID, VOID, tmp7_letterSpacing);
    } else {
      tmp_0 = h2;
    }
    h2 = tmp_0;
    var tmp_1;
    if (h3 === VOID) {
      var tmp8_$this = get_DefaultTextStyle();
      var tmp9_fontWeight = Companion_getInstance_7().j4w_1;
      var tmp10_fontSize = get_sp(48);
      var tmp11_letterSpacing = get_sp(0);
      tmp_1 = tmp8_$this.x4y(VOID, tmp10_fontSize, tmp9_fontWeight, VOID, VOID, VOID, VOID, tmp11_letterSpacing);
    } else {
      tmp_1 = h3;
    }
    h3 = tmp_1;
    var tmp_2;
    if (h4 === VOID) {
      var tmp12_$this = get_DefaultTextStyle();
      var tmp13_fontWeight = Companion_getInstance_7().j4w_1;
      var tmp14_fontSize = get_sp(34);
      var tmp15_letterSpacing = get_sp_0(0.25);
      tmp_2 = tmp12_$this.x4y(VOID, tmp14_fontSize, tmp13_fontWeight, VOID, VOID, VOID, VOID, tmp15_letterSpacing);
    } else {
      tmp_2 = h4;
    }
    h4 = tmp_2;
    var tmp_3;
    if (h5 === VOID) {
      var tmp16_$this = get_DefaultTextStyle();
      var tmp17_fontWeight = Companion_getInstance_7().j4w_1;
      var tmp18_fontSize = get_sp(24);
      var tmp19_letterSpacing = get_sp(0);
      tmp_3 = tmp16_$this.x4y(VOID, tmp18_fontSize, tmp17_fontWeight, VOID, VOID, VOID, VOID, tmp19_letterSpacing);
    } else {
      tmp_3 = h5;
    }
    h5 = tmp_3;
    var tmp_4;
    if (h6 === VOID) {
      var tmp20_$this = get_DefaultTextStyle();
      var tmp21_fontWeight = Companion_getInstance_7().k4w_1;
      var tmp22_fontSize = get_sp(20);
      var tmp23_letterSpacing = get_sp_0(0.15);
      tmp_4 = tmp20_$this.x4y(VOID, tmp22_fontSize, tmp21_fontWeight, VOID, VOID, VOID, VOID, tmp23_letterSpacing);
    } else {
      tmp_4 = h6;
    }
    h6 = tmp_4;
    var tmp_5;
    if (subtitle1 === VOID) {
      var tmp24_$this = get_DefaultTextStyle();
      var tmp25_fontWeight = Companion_getInstance_7().j4w_1;
      var tmp26_fontSize = get_sp(16);
      var tmp27_letterSpacing = get_sp_0(0.15);
      tmp_5 = tmp24_$this.x4y(VOID, tmp26_fontSize, tmp25_fontWeight, VOID, VOID, VOID, VOID, tmp27_letterSpacing);
    } else {
      tmp_5 = subtitle1;
    }
    subtitle1 = tmp_5;
    var tmp_6;
    if (subtitle2 === VOID) {
      var tmp28_$this = get_DefaultTextStyle();
      var tmp29_fontWeight = Companion_getInstance_7().k4w_1;
      var tmp30_fontSize = get_sp(14);
      var tmp31_letterSpacing = get_sp_0(0.1);
      tmp_6 = tmp28_$this.x4y(VOID, tmp30_fontSize, tmp29_fontWeight, VOID, VOID, VOID, VOID, tmp31_letterSpacing);
    } else {
      tmp_6 = subtitle2;
    }
    subtitle2 = tmp_6;
    var tmp_7;
    if (body1 === VOID) {
      var tmp32_$this = get_DefaultTextStyle();
      var tmp33_fontWeight = Companion_getInstance_7().j4w_1;
      var tmp34_fontSize = get_sp(16);
      var tmp35_letterSpacing = get_sp_0(0.5);
      tmp_7 = tmp32_$this.x4y(VOID, tmp34_fontSize, tmp33_fontWeight, VOID, VOID, VOID, VOID, tmp35_letterSpacing);
    } else {
      tmp_7 = body1;
    }
    body1 = tmp_7;
    var tmp_8;
    if (body2 === VOID) {
      var tmp36_$this = get_DefaultTextStyle();
      var tmp37_fontWeight = Companion_getInstance_7().j4w_1;
      var tmp38_fontSize = get_sp(14);
      var tmp39_letterSpacing = get_sp_0(0.25);
      tmp_8 = tmp36_$this.x4y(VOID, tmp38_fontSize, tmp37_fontWeight, VOID, VOID, VOID, VOID, tmp39_letterSpacing);
    } else {
      tmp_8 = body2;
    }
    body2 = tmp_8;
    var tmp_9;
    if (button === VOID) {
      var tmp40_$this = get_DefaultTextStyle();
      var tmp41_fontWeight = Companion_getInstance_7().k4w_1;
      var tmp42_fontSize = get_sp(14);
      var tmp43_letterSpacing = get_sp_0(1.25);
      tmp_9 = tmp40_$this.x4y(VOID, tmp42_fontSize, tmp41_fontWeight, VOID, VOID, VOID, VOID, tmp43_letterSpacing);
    } else {
      tmp_9 = button;
    }
    button = tmp_9;
    var tmp_10;
    if (caption === VOID) {
      var tmp44_$this = get_DefaultTextStyle();
      var tmp45_fontWeight = Companion_getInstance_7().j4w_1;
      var tmp46_fontSize = get_sp(12);
      var tmp47_letterSpacing = get_sp_0(0.4);
      tmp_10 = tmp44_$this.x4y(VOID, tmp46_fontSize, tmp45_fontWeight, VOID, VOID, VOID, VOID, tmp47_letterSpacing);
    } else {
      tmp_10 = caption;
    }
    caption = tmp_10;
    var tmp_11;
    if (overline === VOID) {
      var tmp48_$this = get_DefaultTextStyle();
      var tmp49_fontWeight = Companion_getInstance_7().j4w_1;
      var tmp50_fontSize = get_sp(10);
      var tmp51_letterSpacing = get_sp_0(1.5);
      tmp_11 = tmp48_$this.x4y(VOID, tmp50_fontSize, tmp49_fontWeight, VOID, VOID, VOID, VOID, tmp51_letterSpacing);
    } else {
      tmp_11 = overline;
    }
    overline = tmp_11;
    Typography.call($this, withDefaultFontFamily(h1, defaultFontFamily), withDefaultFontFamily(h2, defaultFontFamily), withDefaultFontFamily(h3, defaultFontFamily), withDefaultFontFamily(h4, defaultFontFamily), withDefaultFontFamily(h5, defaultFontFamily), withDefaultFontFamily(h6, defaultFontFamily), withDefaultFontFamily(subtitle1, defaultFontFamily), withDefaultFontFamily(subtitle2, defaultFontFamily), withDefaultFontFamily(body1, defaultFontFamily), withDefaultFontFamily(body2, defaultFontFamily), withDefaultFontFamily(button, defaultFontFamily), withDefaultFontFamily(caption, defaultFontFamily), withDefaultFontFamily(overline, defaultFontFamily));
    return $this;
  }
  function Typography_init_$Create$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    return Typography_init_$Init$(defaultFontFamily, h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline, objectCreate(protoOf(Typography)));
  }
  function Typography(h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption, overline) {
    this.od0_1 = h1;
    this.pd0_1 = h2;
    this.qd0_1 = h3;
    this.rd0_1 = h4;
    this.sd0_1 = h5;
    this.td0_1 = h6;
    this.ud0_1 = subtitle1;
    this.vd0_1 = subtitle2;
    this.wd0_1 = body1;
    this.xd0_1 = body2;
    this.yd0_1 = button;
    this.zd0_1 = caption;
    this.ad1_1 = overline;
    this.bd1_1 = 0;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.od0_1.equals(other.od0_1))
      return false;
    if (!this.pd0_1.equals(other.pd0_1))
      return false;
    if (!this.qd0_1.equals(other.qd0_1))
      return false;
    if (!this.rd0_1.equals(other.rd0_1))
      return false;
    if (!this.sd0_1.equals(other.sd0_1))
      return false;
    if (!this.td0_1.equals(other.td0_1))
      return false;
    if (!this.ud0_1.equals(other.ud0_1))
      return false;
    if (!this.vd0_1.equals(other.vd0_1))
      return false;
    if (!this.wd0_1.equals(other.wd0_1))
      return false;
    if (!this.xd0_1.equals(other.xd0_1))
      return false;
    if (!this.yd0_1.equals(other.yd0_1))
      return false;
    if (!this.zd0_1.equals(other.zd0_1))
      return false;
    if (!this.ad1_1.equals(other.ad1_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.od0_1.hashCode();
    result = imul(31, result) + this.pd0_1.hashCode() | 0;
    result = imul(31, result) + this.qd0_1.hashCode() | 0;
    result = imul(31, result) + this.rd0_1.hashCode() | 0;
    result = imul(31, result) + this.sd0_1.hashCode() | 0;
    result = imul(31, result) + this.td0_1.hashCode() | 0;
    result = imul(31, result) + this.ud0_1.hashCode() | 0;
    result = imul(31, result) + this.vd0_1.hashCode() | 0;
    result = imul(31, result) + this.wd0_1.hashCode() | 0;
    result = imul(31, result) + this.xd0_1.hashCode() | 0;
    result = imul(31, result) + this.yd0_1.hashCode() | 0;
    result = imul(31, result) + this.zd0_1.hashCode() | 0;
    result = imul(31, result) + this.ad1_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(h1=' + this.od0_1 + ', h2=' + this.pd0_1 + ', h3=' + this.qd0_1 + ', h4=' + this.rd0_1 + ', h5=' + this.sd0_1 + ', h6=' + this.td0_1 + ', ' + ('subtitle1=' + this.ud0_1 + ', subtitle2=' + this.vd0_1 + ', body1=' + this.wd0_1 + ', ') + ('body2=' + this.xd0_1 + ', button=' + this.yd0_1 + ', caption=' + this.zd0_1 + ', overline=' + this.ad1_1 + ')');
  };
  function withDefaultFontFamily(_this__u8e3s4, default_0) {
    _init_properties_Typography_kt__rm3fch();
    return !(_this__u8e3s4.e4z() == null) ? _this__u8e3s4 : _this__u8e3s4.x4y(VOID, VOID, VOID, VOID, VOID, default_0);
  }
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return Typography_init_$Create$();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (!properties_initialized_Typography_kt_bpd27j) {
      properties_initialized_Typography_kt_bpd27j = true;
      DefaultTextStyle = Companion_getInstance_8().r4y_1.x4y(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, defaultPlatformTextStyle());
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function defaultPlatformTextStyle() {
    return null;
  }
  //region block: init
  ContentAlpha_instance = new ContentAlpha();
  MaterialTheme_instance = new MaterialTheme();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Icon$composable;
  _.$_$.b = get_LocalContentAlpha;
  _.$_$.c = Text$composable;
  _.$_$.d = ContentAlpha_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-material.js.map
