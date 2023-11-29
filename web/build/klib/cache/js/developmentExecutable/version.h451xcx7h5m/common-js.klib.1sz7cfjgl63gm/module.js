(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './appyx-utils-multiplatform.js', './appyx-components-stable-backstack-commons.js', './compose-multiplatform-core-runtime.js', './appyx-navigation-common.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-material3.js', './compose-multiplatform-core-material-icons-core.js', './appyx-utils-material3.js', './compose-multiplatform-core-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./appyx-utils-multiplatform.js'), require('./appyx-components-stable-backstack-commons.js'), require('./compose-multiplatform-core-runtime.js'), require('./appyx-navigation-common.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-material3.js'), require('./compose-multiplatform-core-material-icons-core.js'), require('./appyx-utils-material3.js'), require('./compose-multiplatform-core-foundation.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['appyx-utils-multiplatform'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'appyx-utils-multiplatform' was not found. Please, check whether 'appyx-utils-multiplatform' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['appyx-components-stable-backstack-commons'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'appyx-components-stable-backstack-commons' was not found. Please, check whether 'appyx-components-stable-backstack-commons' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['appyx-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'appyx-navigation-common' was not found. Please, check whether 'appyx-navigation-common' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-material3'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'compose-multiplatform-core-material3' was not found. Please, check whether 'compose-multiplatform-core-material3' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-material-icons-core'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'compose-multiplatform-core-material-icons-core' was not found. Please, check whether 'compose-multiplatform-core-material-icons-core' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['appyx-utils-material3'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'appyx-utils-material3' was not found. Please, check whether 'appyx-utils-material3' is loaded prior to 'R2KApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'R2KApp-common'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'R2KApp-common'.");
    }
    root['R2KApp-common'] = factory(typeof this['R2KApp-common'] === 'undefined' ? {} : this['R2KApp-common'], this['kotlin-kotlin-stdlib-js-ir'], this['appyx-utils-multiplatform'], this['appyx-components-stable-backstack-commons'], this['compose-multiplatform-core-runtime'], this['appyx-navigation-common'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-material-icons-core'], this['appyx-utils-material3'], this['compose-multiplatform-core-foundation']);
  }
}(this, function (_, kotlin_kotlin, kotlin_appyx_utils_multiplatform, kotlin_appyx_appyx_components_stable_backstack_backstack, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_appyx_appyx_navigation_appyx_navigation, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_material_material_icons_core, kotlin_appyx_utils_material3, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.jd;
  var THROW_CCE = kotlin_kotlin.$_$.xg;
  var objectMeta = kotlin_kotlin.$_$.id;
  var VOID = kotlin_kotlin.$_$.li;
  var setMetadataFor = kotlin_kotlin.$_$.kd;
  var classMeta = kotlin_kotlin.$_$.xb;
  var Parcelable = kotlin_appyx_utils_multiplatform.$_$.a;
  var replace = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.c;
  var BackStackFader = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.d;
  var Unit_getInstance = kotlin_kotlin.$_$.v4;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var ParentNode = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.i;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wh;
  var listOf = kotlin_kotlin.$_$.t8;
  var BackStackModel = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.h;
  var BackStack = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.i;
  var emptyList = kotlin_kotlin.$_$.j7;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.i8;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.h8;
  var columnMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.e8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var isInterface = kotlin_kotlin.$_$.uc;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var equals = kotlin_kotlin.$_$.bc;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var AppyxComponent$composable = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.b;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var push = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.b;
  var pop = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.a;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var Long = kotlin_kotlin.$_$.qg;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.m3;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x1;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.o;
  var Text$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var Spacer$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var isObject = kotlin_kotlin.$_$.wc;
  var Button$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s2;
  var BackStackModel_init_$Create$ = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.j;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var node$composable = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.j;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var Node = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.h;
  var Node_init_$Init$ = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.l;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Surface$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var KMutableProperty0 = kotlin_kotlin.$_$.ne;
  var THROW_ISE = kotlin_kotlin.$_$.yg;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ec;
  var BackStackParallax = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.f;
  var Gestures = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.e;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var TextField$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var Outlined_getInstance = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.h;
  var get_Home = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.d;
  var Filled_getInstance = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.g;
  var get_Home_0 = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.a;
  var AppyxNavItem_init_$Create$ = kotlin_appyx_utils_material3.$_$.b;
  var get_Menu = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.e;
  var get_Menu_0 = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.b;
  var get_Person = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.f;
  var get_Person_0 = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.c;
  var enumEntries = kotlin_kotlin.$_$.mb;
  var Enum = kotlin_kotlin.$_$.lg;
  var AppyxMaterial3NavNode = kotlin_appyx_utils_material3.$_$.a;
  var toList = kotlin_kotlin.$_$.ba;
  var BackStackSlider = kotlin_appyx_appyx_components_stable_backstack_backstack.$_$.g;
  var getStringHashCode = kotlin_kotlin.$_$.ic;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var isSystemInDarkTheme$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var MaterialTheme$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l2;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t1;
  var Typography = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  //endregion
  //region block: pre-declaration
  setMetadataFor(NavTarget, 'NavTarget', classMeta, VOID, [Parcelable]);
  setMetadataFor(LoggedOut, 'LoggedOut', objectMeta, NavTarget);
  setMetadataFor(Main, 'Main', classMeta, NavTarget);
  setMetadataFor(RootNode, 'RootNode', classMeta, ParentNode);
  setMetadataFor(NavTarget_0, 'NavTarget', classMeta, VOID, [Parcelable]);
  setMetadataFor(Menu, 'Menu', objectMeta, NavTarget_0);
  setMetadataFor(Tema1, 'Tema1', objectMeta, NavTarget_0);
  setMetadataFor(Tema2, 'Tema2', objectMeta, NavTarget_0);
  setMetadataFor(CategoryNode, 'CategoryNode', classMeta, ParentNode);
  setMetadataFor(ComposableSingletons$CategoryNodeKt, 'ComposableSingletons$CategoryNodeKt', objectMeta);
  setMetadataFor(HomeNode, 'HomeNode', classMeta, Node);
  setMetadataFor(ComposableSingletons$HomeNodeKt, 'ComposableSingletons$HomeNodeKt', objectMeta);
  setMetadataFor(NavTarget_1, 'NavTarget', classMeta, VOID, [Parcelable]);
  setMetadataFor(Splash, 'Splash', objectMeta, NavTarget_1);
  setMetadataFor(Login, 'Login', objectMeta, NavTarget_1);
  setMetadataFor(LoggedOutNode, 'LoggedOutNode', classMeta, ParentNode);
  setMetadataFor(ComposableSingletons$LoggedOutNodeKt, 'ComposableSingletons$LoggedOutNodeKt', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(MainNavItem, 'MainNavItem', classMeta, Enum, [Enum, Parcelable]);
  setMetadataFor(MainNode, 'MainNode', classMeta, AppyxMaterial3NavNode);
  setMetadataFor(NavTarget_2, 'NavTarget', classMeta, VOID, [Parcelable]);
  setMetadataFor(Profile, 'Profile', objectMeta, NavTarget_2);
  setMetadataFor(ProfileNode, 'ProfileNode', classMeta, ParentNode);
  setMetadataFor(ComposableSingletons$ProfileNodeKt, 'ComposableSingletons$ProfileNodeKt', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(User, 'User', classMeta, VOID, [Parcelable]);
  //endregion
  function get_$stableprop() {
    return 0;
  }
  function get_$stableprop_0() {
    return 0;
  }
  function LoggedOut() {
    LoggedOut_instance = this;
    NavTarget.call(this);
    this.$stable_2 = 0;
  }
  protoOf(LoggedOut).toString = function () {
    return 'LoggedOut';
  };
  protoOf(LoggedOut).hashCode = function () {
    return -1322876380;
  };
  protoOf(LoggedOut).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoggedOut))
      return false;
    other instanceof LoggedOut || THROW_CCE();
    return true;
  };
  var LoggedOut_instance;
  function LoggedOut_getInstance() {
    if (LoggedOut_instance == null)
      new LoggedOut();
    return LoggedOut_instance;
  }
  function Main(user) {
    NavTarget.call(this);
    this.user_1 = user;
    this.$stable_2 = 0;
  }
  protoOf(Main).get_user_wovspg_k$ = function () {
    return this.user_1;
  };
  protoOf(Main).component1_7eebsc_k$ = function () {
    return this.user_1;
  };
  protoOf(Main).copy_umbv0d_k$ = function (user) {
    return new Main(user);
  };
  protoOf(Main).copy$default_y5mei2_k$ = function (user, $super) {
    user = user === VOID ? this.user_1 : user;
    return $super === VOID ? this.copy_umbv0d_k$(user) : $super.copy_umbv0d_k$.call(this, user);
  };
  protoOf(Main).toString = function () {
    return 'Main(user=' + this.user_1 + ')';
  };
  protoOf(Main).hashCode = function () {
    return this.user_1.hashCode();
  };
  protoOf(Main).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Main))
      return false;
    var tmp0_other_with_cast = other instanceof Main ? other : THROW_CCE();
    if (!this.user_1.equals(tmp0_other_with_cast.user_1))
      return false;
    return true;
  };
  function get_$stableprop_1() {
    return 0;
  }
  function _get_backStack__hxa7bk($this) {
    return $this.backStack_1;
  }
  function NavTarget() {
    this.$stable_1 = 0;
  }
  function onLogin($this, user) {
    replace($this.backStack_1, new Main(user));
    return $this;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function RootNode$_init_$lambda_8whubd(it) {
    return new BackStackFader(it);
  }
  function RootNode$resolve$lambda(this$0) {
    return function (user) {
      onLogin(this$0, user);
      return Unit_getInstance();
    };
  }
  function RootNode$resolve$lambda_0(this$0) {
    return function () {
      replace(this$0.backStack_1, LoggedOut_getInstance());
      return Unit_getInstance();
    };
  }
  function RootNode$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RootNode(buildContext, autoLogin, backStack, plugins) {
    autoLogin = autoLogin === VOID ? false : autoLogin;
    var tmp;
    if (backStack === VOID) {
      var tmp_0;
      switch (autoLogin) {
        case true:
          tmp_0 = new Main(Companion_getInstance_7().get_Dummy_i8wh27_k$());
          break;
        case false:
          tmp_0 = LoggedOut_getInstance();
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp_1 = new BackStackModel(listOf(tmp_0), buildContext.get_savedStateMap_kmirgp_k$());
      tmp = new BackStack(VOID, tmp_1, RootNode$_init_$lambda_8whubd);
    } else {
      tmp = backStack;
    }
    backStack = tmp;
    var tmp_2;
    if (plugins === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_2 = emptyList();
    } else {
      tmp_2 = plugins;
    }
    plugins = tmp_2;
    ParentNode.call(this, backStack, buildContext, VOID, VOID, VOID, plugins);
    this.backStack_1 = backStack;
    this.$stable_3 = 0;
  }
  protoOf(RootNode).resolve_ov85e0_k$ = function (interactionTarget, buildContext) {
    var tmp;
    if (interactionTarget instanceof LoggedOut) {
      tmp = new LoggedOutNode(buildContext, RootNode$resolve$lambda(this));
    } else {
      if (interactionTarget instanceof Main) {
        tmp = new MainNode(buildContext, interactionTarget.user_1, RootNode$resolve$lambda_0(this));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  protoOf(RootNode).resolve_rgjbzh_k$ = function (interactionTarget, buildContext) {
    return this.resolve_ov85e0_k$(interactionTarget instanceof NavTarget ? interactionTarget : THROW_CCE(), buildContext);
  };
  protoOf(RootNode).View_d643kp_k$ = function (modifier) {
    illegalDecoyCallException('View');
  };
  protoOf(RootNode).View$composable_e844gk_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1204326771);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1204326771, $dirty, -1, 'com.example.r2kapp.common.RootNode.View$composable (RootNode.kt:65)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var tmp3_Column$composable = 14 & $dirty;
      var modifier_0 = modifier;
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(2 === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!(4 === 0))
        horizontalAlignment = Companion_getInstance_0().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & tmp3_Column$composable >> 3 | 112 & tmp3_Column$composable >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp0_Layout$composable = modifier_0;
      var tmp2_Layout$composable = 112 & tmp3_Column$composable << 3;
      var modifier_1 = tmp0_Layout$composable;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jk07k2_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
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
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'com.example.r2kapp.common.RootNode.View$composable.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_1 = ColumnScopeInstance_getInstance().weight$default_cijtzh_k$(Companion_getInstance(), 0.9);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      AppyxComponent$composable(this, this.backStack_1, tmp_1, false, null, tmp_2, null, $composer_5, 14 & $dirty >> 3, 60);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_er37p7_k$();
      $composer_3.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(RootNode$View$composable$lambda(this, modifier, $changed));
    }
  };
  function get_$stableprop_3() {
    return 0;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function Menu() {
    Menu_instance = this;
    NavTarget_0.call(this);
    this.$stable_2 = 0;
  }
  var Menu_instance;
  function Menu_getInstance() {
    if (Menu_instance == null)
      new Menu();
    return Menu_instance;
  }
  function Tema1() {
    Tema1_instance = this;
    NavTarget_0.call(this);
    this.$stable_2 = 0;
  }
  var Tema1_instance;
  function Tema1_getInstance() {
    if (Tema1_instance == null)
      new Tema1();
    return Tema1_instance;
  }
  function Tema2() {
    Tema2_instance = this;
    NavTarget_0.call(this);
    this.$stable_2 = 0;
  }
  var Tema2_instance;
  function Tema2_getInstance() {
    if (Tema2_instance == null)
      new Tema2();
    return Tema2_instance;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function _get_backStack__hxa7bk_0($this) {
    return $this.backStack_1;
  }
  function NavTarget_0() {
    this.$stable_1 = 0;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function CategoryNode$_init_$lambda_5cg27f(it) {
    return new BackStackFader(it);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CategoryNode$resolve$lambda$lambda(this$0) {
    return function () {
      push(this$0.backStack_1, Tema2_getInstance());
      return Unit_getInstance();
    };
  }
  function CategoryNode$resolve$lambda$lambda_0(this$0) {
    return function () {
      pop(this$0.backStack_1);
      return Unit_getInstance();
    };
  }
  function CategoryNode$resolve$lambda(this$0) {
    return function (modifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1063796527, $dirty, -1, 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous> (CategoryNode.kt:53)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp0_Column$composable = fillMaxSize(modifier);
        var tmp1_Column$composable = Arrangement_getInstance().get_Center_3arb0i_k$();
        var tmp2_Column$composable = Companion_getInstance_0().get_CenterHorizontally_97ab0v_k$();
        var tmp3_Column$composable = $composer_0;
        var modifier_0 = tmp0_Column$composable;
        var verticalArrangement = tmp1_Column$composable;
        var horizontalAlignment = tmp2_Column$composable;
        var $composer_1 = tmp3_Column$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        if (!(0 === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!(0 === 0))
          horizontalAlignment = Companion_getInstance_0().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 54);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier_0;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
        var modifier_1 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_1 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jk07k2_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.useNode_inlzo8_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_2;
        if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
          tmp_2 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_2;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous>.<anonymous>' call
        var tmp4_anonymous_1 = ColumnScopeInstance_getInstance();
        var tmp5_anonymous = $composer_4;
        var tmp6_anonymous = 6;
        var $composer_5 = tmp5_anonymous;
        var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextOverflow___init__impl__obguoe(0);
        Text$composable('Tema 1', null, tmp_3, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_5, 6).get_headlineSmall_nqk5ey_k$(), $composer_5, 6, 0, 65534);
        var tmp_8 = Companion_getInstance();
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$2 = _Dp___init__impl__ms3zkb(24);
        Spacer$composable(size(tmp_8, tmp$ret$2), $composer_5, 6);
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_5;
        var $composer_6 = tmp0_remember$composable;
        $composer_6.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_6;
        var tmp1_cache = $composer_6.changed_ga7h3f_k$(this$0);
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$3;
          // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$3 = CategoryNode$resolve$lambda$lambda(this$0);
          var value = tmp$ret$3;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_9 = value;
        } else {
          tmp_9 = tmp0_let;
        }
        tmp$ret$4 = tmp_9;
        tmp$ret$5 = tmp$ret$4;
        var tmp_10 = tmp$ret$5;
        tmp$ret$6 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        var tmp0 = tmp$ret$6;
        $composer_6.endReplaceableGroup_er37p7_k$();
        tmp$ret$7 = tmp0;
        var tmp_11 = tmp$ret$7;
        Button$composable(tmp_11, null, false, null, null, null, null, null, null, ComposableSingletons$CategoryNodeKt_getInstance().lambda_1_r8sbbp_1, $composer_5, 805306368, 510);
        var tmp_12 = Companion_getInstance();
        var tmp$ret$8;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$8 = _Dp___init__impl__ms3zkb(24);
        Spacer$composable(size(tmp_12, tmp$ret$8), $composer_5, 6);
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_5;
        var $composer_7 = tmp1_remember$composable;
        $composer_7.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_7;
        var tmp1_cache_0 = $composer_7.changed_ga7h3f_k$(this$0);
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_13;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$9;
          // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$9 = CategoryNode$resolve$lambda$lambda_0(this$0);
          var value_0 = tmp$ret$9;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_13 = value_0;
        } else {
          tmp_13 = tmp0_let_0;
        }
        tmp$ret$10 = tmp_13;
        tmp$ret$11 = tmp$ret$10;
        var tmp_14 = tmp$ret$11;
        tmp$ret$12 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
        var tmp0_0 = tmp$ret$12;
        $composer_7.endReplaceableGroup_er37p7_k$();
        tmp$ret$13 = tmp0_0;
        var tmp_15 = tmp$ret$13;
        Button$composable(tmp_15, null, false, null, null, null, null, null, null, ComposableSingletons$CategoryNodeKt_getInstance().lambda_2_r8sbbo_1, $composer_5, 805306368, 510);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_er37p7_k$();
        $composer_3.endNode_3mkr10_k$();
        $composer_2.endReplaceableGroup_er37p7_k$();
        $composer_1.endReplaceableGroup_er37p7_k$();
        var tmp_16;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_16 = Unit_getInstance();
        }
        tmp_0 = tmp_16;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CategoryNode$resolve$lambda$lambda_1(this$0) {
    return function () {
      push(this$0.backStack_1, Tema1_getInstance());
      return Unit_getInstance();
    };
  }
  function CategoryNode$resolve$lambda$lambda_2(this$0) {
    return function () {
      pop(this$0.backStack_1);
      return Unit_getInstance();
    };
  }
  function CategoryNode$resolve$lambda_0(this$0) {
    return function (modifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-191173466, $dirty, -1, 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous> (CategoryNode.kt:87)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp0_Column$composable = fillMaxSize(modifier);
        var tmp1_Column$composable = Arrangement_getInstance().get_Center_3arb0i_k$();
        var tmp2_Column$composable = Companion_getInstance_0().get_CenterHorizontally_97ab0v_k$();
        var tmp3_Column$composable = $composer_0;
        var modifier_0 = tmp0_Column$composable;
        var verticalArrangement = tmp1_Column$composable;
        var horizontalAlignment = tmp2_Column$composable;
        var $composer_1 = tmp3_Column$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        if (!(0 === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!(0 === 0))
          horizontalAlignment = Companion_getInstance_0().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 54);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier_0;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
        var modifier_1 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_1 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jk07k2_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.useNode_inlzo8_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_2;
        if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
          tmp_2 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_2;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous>.<anonymous>' call
        var tmp4_anonymous_1 = ColumnScopeInstance_getInstance();
        var tmp5_anonymous = $composer_4;
        var tmp6_anonymous = 6;
        var $composer_5 = tmp5_anonymous;
        var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextOverflow___init__impl__obguoe(0);
        Text$composable('Tema 2', null, tmp_3, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_5, 6).get_headlineSmall_nqk5ey_k$(), $composer_5, 6, 0, 65534);
        var tmp_8 = Companion_getInstance();
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$2 = _Dp___init__impl__ms3zkb(24);
        Spacer$composable(size(tmp_8, tmp$ret$2), $composer_5, 6);
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_5;
        var $composer_6 = tmp0_remember$composable;
        $composer_6.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_6;
        var tmp1_cache = $composer_6.changed_ga7h3f_k$(this$0);
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$3;
          // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$3 = CategoryNode$resolve$lambda$lambda_1(this$0);
          var value = tmp$ret$3;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_9 = value;
        } else {
          tmp_9 = tmp0_let;
        }
        tmp$ret$4 = tmp_9;
        tmp$ret$5 = tmp$ret$4;
        var tmp_10 = tmp$ret$5;
        tmp$ret$6 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        var tmp0 = tmp$ret$6;
        $composer_6.endReplaceableGroup_er37p7_k$();
        tmp$ret$7 = tmp0;
        var tmp_11 = tmp$ret$7;
        Button$composable(tmp_11, null, false, null, null, null, null, null, null, ComposableSingletons$CategoryNodeKt_getInstance().lambda_3_r8sbbn_1, $composer_5, 805306368, 510);
        var tmp_12 = Companion_getInstance();
        var tmp$ret$8;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$8 = _Dp___init__impl__ms3zkb(24);
        Spacer$composable(size(tmp_12, tmp$ret$8), $composer_5, 6);
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_5;
        var $composer_7 = tmp1_remember$composable;
        $composer_7.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_7;
        var tmp1_cache_0 = $composer_7.changed_ga7h3f_k$(this$0);
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_13;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$9;
          // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$9 = CategoryNode$resolve$lambda$lambda_2(this$0);
          var value_0 = tmp$ret$9;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_13 = value_0;
        } else {
          tmp_13 = tmp0_let_0;
        }
        tmp$ret$10 = tmp_13;
        tmp$ret$11 = tmp$ret$10;
        var tmp_14 = tmp$ret$11;
        tmp$ret$12 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
        var tmp0_0 = tmp$ret$12;
        $composer_7.endReplaceableGroup_er37p7_k$();
        tmp$ret$13 = tmp0_0;
        var tmp_15 = tmp$ret$13;
        Button$composable(tmp_15, null, false, null, null, null, null, null, null, ComposableSingletons$CategoryNodeKt_getInstance().lambda_4_r8sbbm_1, $composer_5, 805306368, 510);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_er37p7_k$();
        $composer_3.endNode_3mkr10_k$();
        $composer_2.endReplaceableGroup_er37p7_k$();
        $composer_1.endReplaceableGroup_er37p7_k$();
        var tmp_16;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_16 = Unit_getInstance();
        }
        tmp_0 = tmp_16;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function CategoryNode$resolve$lambda$lambda_3(this$0) {
    return function () {
      push(this$0.backStack_1, Tema1_getInstance());
      return Unit_getInstance();
    };
  }
  function CategoryNode$resolve$lambda$lambda_4(this$0) {
    return function () {
      push(this$0.backStack_1, Tema2_getInstance());
      return Unit_getInstance();
    };
  }
  function CategoryNode$resolve$lambda_1(this$0) {
    return function (modifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-9440217, $dirty, -1, 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous> (CategoryNode.kt:121)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp0_Column$composable = fillMaxSize(modifier);
        var tmp1_Column$composable = Arrangement_getInstance().get_Center_3arb0i_k$();
        var tmp2_Column$composable = Companion_getInstance_0().get_CenterHorizontally_97ab0v_k$();
        var tmp3_Column$composable = $composer_0;
        var modifier_0 = tmp0_Column$composable;
        var verticalArrangement = tmp1_Column$composable;
        var horizontalAlignment = tmp2_Column$composable;
        var $composer_1 = tmp3_Column$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        if (!(0 === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!(0 === 0))
          horizontalAlignment = Companion_getInstance_0().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 54);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier_0;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
        var modifier_1 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_1 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jk07k2_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.useNode_inlzo8_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_2;
        if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
          tmp_2 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_2;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous>.<anonymous>' call
        var tmp4_anonymous_1 = ColumnScopeInstance_getInstance();
        var tmp5_anonymous = $composer_4;
        var tmp6_anonymous = 6;
        var $composer_5 = tmp5_anonymous;
        var tmp0_style = MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_5, 6).get_headlineSmall_nqk5ey_k$();
        var tmp1_textAlign = Companion_getInstance_3().get_Center_qumdtj_k$();
        var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextOverflow___init__impl__obguoe(0);
        Text$composable('Categor\xEDas', null, tmp_3, tmp_4, null, null, null, tmp_5, null, tmp1_textAlign, tmp_6, tmp_7, false, 0, 0, null, tmp0_style, $composer_5, 6, 0, 65022);
        var tmp_8 = Companion_getInstance();
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$2 = _Dp___init__impl__ms3zkb(16);
        Spacer$composable(size(tmp_8, tmp$ret$2), $composer_5, 6);
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_5;
        var $composer_6 = tmp0_remember$composable;
        $composer_6.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_6;
        var tmp1_cache = $composer_6.changed_ga7h3f_k$(this$0);
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$3;
          // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$3 = CategoryNode$resolve$lambda$lambda_3(this$0);
          var value = tmp$ret$3;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_9 = value;
        } else {
          tmp_9 = tmp0_let;
        }
        tmp$ret$4 = tmp_9;
        tmp$ret$5 = tmp$ret$4;
        var tmp_10 = tmp$ret$5;
        tmp$ret$6 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        var tmp0 = tmp$ret$6;
        $composer_6.endReplaceableGroup_er37p7_k$();
        tmp$ret$7 = tmp0;
        var tmp_11 = tmp$ret$7;
        Button$composable(tmp_11, null, false, null, null, null, null, null, null, ComposableSingletons$CategoryNodeKt_getInstance().lambda_5_r8sbbl_1, $composer_5, 805306368, 510);
        var tmp_12 = Companion_getInstance();
        var tmp$ret$8;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$8 = _Dp___init__impl__ms3zkb(16);
        Spacer$composable(size(tmp_12, tmp$ret$8), $composer_5, 6);
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_5;
        var $composer_7 = tmp1_remember$composable;
        $composer_7.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_7;
        var tmp1_cache_0 = $composer_7.changed_ga7h3f_k$(this$0);
        var tmp$ret$11;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_13;
        if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$9;
          // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.resolve.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$9 = CategoryNode$resolve$lambda$lambda_4(this$0);
          var value_0 = tmp$ret$9;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_13 = value_0;
        } else {
          tmp_13 = tmp0_let_0;
        }
        tmp$ret$10 = tmp_13;
        tmp$ret$11 = tmp$ret$10;
        var tmp_14 = tmp$ret$11;
        tmp$ret$12 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
        var tmp0_0 = tmp$ret$12;
        $composer_7.endReplaceableGroup_er37p7_k$();
        tmp$ret$13 = tmp0_0;
        var tmp_15 = tmp$ret$13;
        Button$composable(tmp_15, null, false, null, null, null, null, null, null, ComposableSingletons$CategoryNodeKt_getInstance().lambda_6_r8sbbk_1, $composer_5, 805306368, 510);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_er37p7_k$();
        $composer_3.endNode_3mkr10_k$();
        $composer_2.endReplaceableGroup_er37p7_k$();
        $composer_1.endReplaceableGroup_er37p7_k$();
        var tmp_16;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_16 = Unit_getInstance();
        }
        tmp_0 = tmp_16;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function CategoryNode$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CategoryNode(buildContext, backStack) {
    var tmp;
    if (backStack === VOID) {
      var tmp_0 = BackStackModel_init_$Create$(Menu_getInstance(), buildContext.get_savedStateMap_kmirgp_k$());
      tmp = new BackStack(VOID, tmp_0, CategoryNode$_init_$lambda_5cg27f);
    } else {
      tmp = backStack;
    }
    backStack = tmp;
    ParentNode.call(this, backStack, buildContext);
    this.backStack_1 = backStack;
    this.$stable_3 = 0;
  }
  protoOf(CategoryNode).resolve_ftbqxv_k$ = function (interactionTarget, buildContext) {
    var tmp;
    if (interactionTarget instanceof Tema1) {
      tmp = node$composable(buildContext, ComposableLambda$invoke$ref(composableLambdaInstance(1063796527, true, CategoryNode$resolve$lambda(this))));
    } else {
      if (interactionTarget instanceof Tema2) {
        tmp = node$composable(buildContext, ComposableLambda$invoke$ref_0(composableLambdaInstance(-191173466, true, CategoryNode$resolve$lambda_0(this))));
      } else {
        if (interactionTarget instanceof Menu) {
          tmp = node$composable(buildContext, ComposableLambda$invoke$ref_1(composableLambdaInstance(-9440217, true, CategoryNode$resolve$lambda_1(this))));
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  protoOf(CategoryNode).resolve_rgjbzh_k$ = function (interactionTarget, buildContext) {
    return this.resolve_ftbqxv_k$(interactionTarget instanceof NavTarget_0 ? interactionTarget : THROW_CCE(), buildContext);
  };
  protoOf(CategoryNode).View_d643kp_k$ = function (modifier) {
    illegalDecoyCallException('View');
  };
  protoOf(CategoryNode).View$composable_e844gk_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(440525158);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(440525158, $dirty, -1, 'com.example.r2kapp.common.screens.category.CategoryNode.View$composable (CategoryNode.kt:158)');
      }
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier_0 = fillMaxSize(modifier);
      var contentAlignment = Companion_getInstance_0().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance_0().get_TopStart_o4x792_k$();
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jk07k2_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
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
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'com.example.r2kapp.common.screens.category.CategoryNode.View$composable.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp_1 = Companion_getInstance();
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      AppyxComponent$composable(this, this.backStack_1, tmp_1, false, null, tmp_2, null, $composer_5, 384 | 14 & $dirty >> 3, 60);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_er37p7_k$();
      $composer_3.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(CategoryNode$View$composable$lambda(this, modifier, $changed));
    }
  };
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CategoryNodeKt$lambda_1$lambda_q4kz0s($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1100232439, $changed, -1, 'com.example.r2kapp.common.screens.category.ComposableSingletons$CategoryNodeKt.lambda-1.<anonymous> (CategoryNode.kt:68)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Ir a Tema 2', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).get_bodyMedium_psz2kg_k$(), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CategoryNodeKt$lambda_2$lambda_2p1i1f($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1167482126, $changed, -1, 'com.example.r2kapp.common.screens.category.ComposableSingletons$CategoryNodeKt.lambda-2.<anonymous> (CategoryNode.kt:79)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Volver', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).get_bodyMedium_psz2kg_k$(), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CategoryNodeKt$lambda_3$lambda_vinz3m($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1058838528, $changed, -1, 'com.example.r2kapp.common.screens.category.ComposableSingletons$CategoryNodeKt.lambda-3.<anonymous> (CategoryNode.kt:102)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Ir a Tema 1', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).get_bodyMedium_psz2kg_k$(), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CategoryNodeKt$lambda_4$lambda_aotltb($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1261278295, $changed, -1, 'com.example.r2kapp.common.screens.category.ComposableSingletons$CategoryNodeKt.lambda-4.<anonymous> (CategoryNode.kt:113)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Volver', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).get_bodyMedium_psz2kg_k$(), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CategoryNodeKt$lambda_5$lambda_i4sv8w($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-877105279, $changed, -1, 'com.example.r2kapp.common.screens.category.ComposableSingletons$CategoryNodeKt.lambda-5.<anonymous> (CategoryNode.kt:137)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Ir a Tema 1', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).get_bodyMedium_psz2kg_k$(), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CategoryNodeKt$lambda_6$lambda_o2opo1($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1079545046, $changed, -1, 'com.example.r2kapp.common.screens.category.ComposableSingletons$CategoryNodeKt.lambda-6.<anonymous> (CategoryNode.kt:148)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Ir a Tema 2', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).get_bodyMedium_psz2kg_k$(), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CategoryNodeKt() {
    ComposableSingletons$CategoryNodeKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-1100232439, false, ComposableSingletons$CategoryNodeKt$lambda_1$lambda_q4kz0s));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-1167482126, false, ComposableSingletons$CategoryNodeKt$lambda_2$lambda_2p1i1f));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-1058838528, false, ComposableSingletons$CategoryNodeKt$lambda_3$lambda_vinz3m));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1261278295, false, ComposableSingletons$CategoryNodeKt$lambda_4$lambda_aotltb));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-877105279, false, ComposableSingletons$CategoryNodeKt$lambda_5$lambda_i4sv8w));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1079545046, false, ComposableSingletons$CategoryNodeKt$lambda_6$lambda_o2opo1));
  }
  protoOf(ComposableSingletons$CategoryNodeKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$CategoryNodeKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$CategoryNodeKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$CategoryNodeKt).get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$CategoryNodeKt).get_lambda_5_bzdzzs_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$CategoryNodeKt).get_lambda_6_bzdzzt_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  var ComposableSingletons$CategoryNodeKt_instance;
  function ComposableSingletons$CategoryNodeKt_getInstance() {
    if (ComposableSingletons$CategoryNodeKt_instance == null)
      new ComposableSingletons$CategoryNodeKt();
    return ComposableSingletons$CategoryNodeKt_instance;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function HomeNode$View$composable$lambda() {
    return Unit_getInstance();
  }
  function HomeNode$View$composable$lambda_0($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeNode(buildContext) {
    Node_init_$Init$(buildContext, VOID, VOID, this);
    this.$stable_2 = 0;
  }
  protoOf(HomeNode).View_d643kp_k$ = function (modifier) {
    illegalDecoyCallException('View');
  };
  protoOf(HomeNode).View$composable_e844gk_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1980064826);
    sourceInformation($composer_0, 'C(View$composable)');
    if (!(($changed & 1) === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1980064826, $changed, -1, 'com.example.r2kapp.common.screens.home.HomeNode.View$composable (HomeNode.kt:20)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var modifier_0 = fillMaxSize(Companion_getInstance());
      var verticalArrangement = Arrangement_getInstance().get_Center_3arb0i_k$();
      var horizontalAlignment = Companion_getInstance_0().get_CenterHorizontally_97ab0v_k$();
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance();
      if (!(0 === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!(0 === 0))
        horizontalAlignment = Companion_getInstance_0().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 54);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 48 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jk07k2_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
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
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'com.example.r2kapp.common.screens.home.HomeNode.View$composable.<anonymous>' call
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp0_style = MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_5, 6).get_headlineSmall_nqk5ey_k$();
      var tmp1_textAlign = Companion_getInstance_3().get_Center_qumdtj_k$();
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Home Demo', null, tmp_1, tmp_2, null, null, null, tmp_3, null, tmp1_textAlign, tmp_4, tmp_5, false, 0, 0, null, tmp0_style, $composer_5, 6, 0, 65022);
      var tmp_6 = Companion_getInstance();
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$2 = _Dp___init__impl__ms3zkb(16);
      Spacer$composable(size(tmp_6, tmp$ret$2), $composer_5, 6);
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_6 = $composer_5;
      $composer_6.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_6.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (false ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.r2kapp.common.screens.home.HomeNode.View$composable.<anonymous>.<anonymous>' call
        var value = HomeNode$View$composable$lambda;
        $composer_6.updateRememberedValue_l1colo_k$(value);
        tmp_7 = value;
      } else {
        tmp_7 = tmp0_let;
      }
      var tmp_8 = tmp_7;
      var tmp0 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      $composer_6.endReplaceableGroup_er37p7_k$();
      var tmp_9 = tmp0;
      Button$composable(tmp_9, null, false, null, null, null, null, null, null, ComposableSingletons$HomeNodeKt_getInstance().lambda_1_r8sbbp_1, $composer_5, 805306368, 510);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_er37p7_k$();
      $composer_3.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(HomeNode$View$composable$lambda_0(this, modifier, $changed));
    }
  };
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomeNodeKt$lambda_1$lambda_uhjiol($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1020928588, $changed, -1, 'com.example.r2kapp.common.screens.home.ComposableSingletons$HomeNodeKt.lambda-1.<anonymous> (HomeNode.kt:37)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Ir a...', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).get_bodyMedium_psz2kg_k$(), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HomeNodeKt() {
    ComposableSingletons$HomeNodeKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(1020928588, false, ComposableSingletons$HomeNodeKt$lambda_1$lambda_uhjiol));
  }
  protoOf(ComposableSingletons$HomeNodeKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$HomeNodeKt_instance;
  function ComposableSingletons$HomeNodeKt_getInstance() {
    if (ComposableSingletons$HomeNodeKt_instance == null)
      new ComposableSingletons$HomeNodeKt();
    return ComposableSingletons$HomeNodeKt_instance;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function get_$stableprop_10() {
    return 0;
  }
  function Splash() {
    Splash_instance = this;
    NavTarget_1.call(this);
    this.$stable_2 = 0;
  }
  var Splash_instance;
  function Splash_getInstance() {
    if (Splash_instance == null)
      new Splash();
    return Splash_instance;
  }
  function Login() {
    Login_instance = this;
    NavTarget_1.call(this);
    this.$stable_2 = 0;
  }
  var Login_instance;
  function Login_getInstance() {
    if (Login_instance == null)
      new Login();
    return Login_instance;
  }
  function get_$stableprop_11() {
    return 0;
  }
  function _get_onLogin__ecppbt($this) {
    return $this.onLogin_1;
  }
  function _get_backStack__hxa7bk_1($this) {
    return $this.backStack_1;
  }
  function NavTarget_1() {
    this.$stable_1 = 0;
  }
  function SplashScreen($this, modifier) {
    illegalDecoyCallException('SplashScreen');
  }
  function LoginScreen($this, modifier) {
    illegalDecoyCallException('LoginScreen');
  }
  function get_$stableprop_12() {
    return 0;
  }
  function SplashScreen$composable($this, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1954171605);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(-1954171605, $dirty, -1, 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.SplashScreen$composable (LoggedOutNode.kt:65)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.SplashScreen$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 1293398658, true, LoggedOutNode$SplashScreen$composable$lambda(modifier_0, $dirty, $this));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.SplashScreen$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_4 = value;
      } else {
        tmp_4 = tmp0_let;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Surface$composable(null, null, tmp, tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 12582912, 127);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(LoggedOutNode$SplashScreen$composable$lambda_0($this, modifier_0, $changed, $default));
    }
  }
  function LoginScreen$composable($this, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(452105491);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(452105491, $dirty, -1, 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.LoginScreen$composable (LoggedOutNode.kt:92)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.LoginScreen$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1528929474, true, LoggedOutNode$LoginScreen$composable$lambda(modifier_0, $dirty, $this));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.LoginScreen$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_4 = value;
      } else {
        tmp_4 = tmp0_let;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      Surface$composable(null, null, tmp, tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 12582912, 127);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(LoggedOutNode$LoginScreen$composable$lambda_0($this, modifier_0, $changed, $default));
    }
  }
  function LoginScreen$composable$_anonymous_$_anonymous_$_anonymous_$lambda$0_otjaww($name$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('name', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $name$delegate.get_value_j01efc_k$();
  }
  function LoginScreen$composable$_anonymous_$_anonymous_$_anonymous_$lambda$1_otjawx($name$delegate, value) {
    getLocalDelegateReference('name', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $name$delegate.set_value_rnwamw_k$(value);
  }
  function LoggedOutNode$_init_$lambda_7ikfpf(it) {
    return new BackStackParallax(it);
  }
  function LoggedOutNode$_init_$lambda_7ikfpf_0(it) {
    return new Gestures(it);
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function LoggedOutNode$resolve$lambda(this$0) {
    return function (modifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-515342841, $dirty, -1, 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.resolve.<anonymous> (LoggedOutNode.kt:48)');
        }
        SplashScreen$composable(this$0, modifier, $composer_0, 14 & $dirty, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function LoggedOutNode$resolve$lambda_0(this$0) {
    return function (modifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(363907376, $dirty, -1, 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.resolve.<anonymous> (LoggedOutNode.kt:52)');
        }
        LoginScreen$composable(this$0, modifier, $composer_0, 14 & $dirty, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function LoggedOutNode$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LoggedOutNode$SplashScreen$composable$lambda$lambda(this$0) {
    return function () {
      push(this$0.backStack_1, Login_getInstance());
      return Unit_getInstance();
    };
  }
  function LoggedOutNode$SplashScreen$composable$lambda($modifier, $$dirty, this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1293398658, $changed, -1, 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.SplashScreen$composable.<anonymous> (LoggedOutNode.kt:67)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp0_Column$composable = fillMaxSize($modifier._v);
        var tmp1_Column$composable = Arrangement_getInstance().get_Center_3arb0i_k$();
        var tmp2_Column$composable = Companion_getInstance_0().get_CenterHorizontally_97ab0v_k$();
        var tmp3_Column$composable = $composer_0;
        var modifier = tmp0_Column$composable;
        var verticalArrangement = tmp1_Column$composable;
        var horizontalAlignment = tmp2_Column$composable;
        var $composer_1 = tmp3_Column$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(0 === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!(0 === 0))
          horizontalAlignment = Companion_getInstance_0().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 54);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_0 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jk07k2_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.useNode_inlzo8_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
          tmp_1 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.SplashScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp4_anonymous_1 = ColumnScopeInstance_getInstance();
        var tmp5_anonymous = $composer_4;
        var tmp6_anonymous = 6;
        var $composer_5 = tmp5_anonymous;
        var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextOverflow___init__impl__obguoe(0);
        Text$composable('Bienvenido!', null, tmp_2, tmp_3, null, null, null, tmp_4, null, null, tmp_5, tmp_6, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_5, 6).get_headlineLarge_nmi9we_k$(), $composer_5, 6, 0, 65534);
        var tmp_7 = Companion_getInstance();
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$2 = _Dp___init__impl__ms3zkb(24);
        Spacer$composable(size(tmp_7, tmp$ret$2), $composer_5, 6);
        var tmp$ret$7;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_5;
        var tmp1_remember$composable = 14 & $$dirty >> 3;
        var $composer_6 = tmp0_remember$composable;
        $composer_6.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_6, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_6;
        var tmp1_cache = $composer_6.changed_ga7h3f_k$(this$0);
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$3;
          // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.SplashScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$3 = LoggedOutNode$SplashScreen$composable$lambda$lambda(this$0);
          var value = tmp$ret$3;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_8 = value;
        } else {
          tmp_8 = tmp0_let;
        }
        tmp$ret$4 = tmp_8;
        tmp$ret$5 = tmp$ret$4;
        var tmp_9 = tmp$ret$5;
        tmp$ret$6 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0 = tmp$ret$6;
        $composer_6.endReplaceableGroup_er37p7_k$();
        tmp$ret$7 = tmp0;
        var tmp_10 = tmp$ret$7;
        Button$composable(tmp_10, null, false, null, null, null, null, null, null, ComposableSingletons$LoggedOutNodeKt_getInstance().lambda_1_r8sbbp_1, $composer_5, 805306368, 510);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_er37p7_k$();
        $composer_3.endNode_3mkr10_k$();
        $composer_2.endReplaceableGroup_er37p7_k$();
        $composer_1.endReplaceableGroup_er37p7_k$();
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_getInstance();
        }
        tmp = tmp_11;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function LoggedOutNode$SplashScreen$composable$lambda_0($tmp0_rcvr, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      SplashScreen$composable($tmp0_rcvr, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function LoggedOutNode$LoginScreen$composable$lambda$lambda($name$delegate) {
    return function (it) {
      LoginScreen$composable$_anonymous_$_anonymous_$_anonymous_$lambda$1_otjawx($name$delegate, it);
      return Unit_getInstance();
    };
  }
  function LoggedOutNode$LoginScreen$composable$lambda$lambda_0(this$0, $name$delegate) {
    return function () {
      this$0.onLogin_1(new User(LoginScreen$composable$_anonymous_$_anonymous_$_anonymous_$lambda$0_otjaww($name$delegate)));
      return Unit_getInstance();
    };
  }
  function LoggedOutNode$LoginScreen$composable$lambda($modifier, $$dirty, this$0) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1528929474, $changed, -1, 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.LoginScreen$composable.<anonymous> (LoggedOutNode.kt:94)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp0_Column$composable = fillMaxSize($modifier._v);
        var tmp1_Column$composable = Arrangement_getInstance().get_Center_3arb0i_k$();
        var tmp2_Column$composable = Companion_getInstance_0().get_CenterHorizontally_97ab0v_k$();
        var tmp3_Column$composable = $composer_0;
        var modifier = tmp0_Column$composable;
        var verticalArrangement = tmp1_Column$composable;
        var horizontalAlignment = tmp2_Column$composable;
        var $composer_1 = tmp3_Column$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(0 === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!(0 === 0))
          horizontalAlignment = Companion_getInstance_0().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 54);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_0 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jk07k2_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.useNode_inlzo8_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
          tmp_1 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp4_anonymous_1 = ColumnScopeInstance_getInstance();
        var tmp5_anonymous = $composer_4;
        var tmp6_anonymous = 6;
        var $composer_5 = tmp5_anonymous;
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_5;
        var $composer_6 = tmp0_remember$composable;
        $composer_6.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_6, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_6;
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$2;
          // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$2 = mutableStateOf('Usuario');
          var value = tmp$ret$2;
          tmp0_cache.updateRememberedValue_l1colo_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = tmp0_let;
        }
        tmp$ret$3 = tmp_2;
        tmp$ret$4 = tmp$ret$3;
        var tmp_3 = tmp$ret$4;
        tmp$ret$5 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0 = tmp$ret$5;
        $composer_6.endReplaceableGroup_er37p7_k$();
        tmp$ret$6 = tmp0;
        var name$delegate = tmp$ret$6;
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextOverflow___init__impl__obguoe(0);
        Text$composable('Login', null, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_5, 6).get_headlineSmall_nqk5ey_k$(), $composer_5, 6, 0, 65534);
        var tmp_9 = Companion_getInstance();
        var tmp$ret$7;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$7 = _Dp___init__impl__ms3zkb(24);
        Spacer$composable(size(tmp_9, tmp$ret$7), $composer_5, 6);
        var tmp_10 = LoginScreen$composable$_anonymous_$_anonymous_$_anonymous_$lambda$0_otjaww(name$delegate);
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_5;
        var $composer_7 = tmp1_remember$composable;
        $composer_7.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_7, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_7;
        var tmp1_cache = $composer_7.changed_ga7h3f_k$(name$delegate);
        var tmp$ret$10;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_11;
        if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$8;
          // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$8 = LoggedOutNode$LoginScreen$composable$lambda$lambda(name$delegate);
          var value_0 = tmp$ret$8;
          tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_11 = value_0;
        } else {
          tmp_11 = tmp0_let_0;
        }
        tmp$ret$9 = tmp_11;
        tmp$ret$10 = tmp$ret$9;
        var tmp_12 = tmp$ret$10;
        tmp$ret$11 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
        var tmp0_0 = tmp$ret$11;
        $composer_7.endReplaceableGroup_er37p7_k$();
        tmp$ret$12 = tmp0_0;
        var tmp_13 = tmp$ret$12;
        var tmp_14 = ComposableSingletons$LoggedOutNodeKt_getInstance().lambda_2_r8sbbo_1;
        TextField$composable(tmp_10, tmp_13, null, false, false, null, tmp_14, null, null, null, null, null, null, false, null, null, null, false, 0, 0, null, null, null, $composer_5, 1572864, 0, 0, 8388540);
        var tmp_15 = Companion_getInstance();
        var tmp$ret$13;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$13 = _Dp___init__impl__ms3zkb(24);
        Spacer$composable(size(tmp_15, tmp$ret$13), $composer_5, 6);
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_5;
        var tmp3_remember$composable = 14 & $$dirty >> 3;
        var $composer_8 = tmp2_remember$composable;
        $composer_8.startReplaceableGroup_rp6air_k$(-1124426577);
        sourceInformation($composer_8, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$17;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_1 = $composer_8;
        var tmp1_cache_0 = !!($composer_8.changed_ga7h3f_k$(this$0) | $composer_8.changed_ga7h3f_k$(name$delegate));
        var tmp$ret$16;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp0_cache_1.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_16;
        if (tmp1_cache_0 ? true : tmp0_let_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
          var tmp$ret$14;
          // Inline function 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.LoginScreen$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$14 = LoggedOutNode$LoginScreen$composable$lambda$lambda_0(this$0, name$delegate);
          var value_1 = tmp$ret$14;
          tmp0_cache_1.updateRememberedValue_l1colo_k$(value_1);
          tmp_16 = value_1;
        } else {
          tmp_16 = tmp0_let_1;
        }
        tmp$ret$15 = tmp_16;
        tmp$ret$16 = tmp$ret$15;
        var tmp_17 = tmp$ret$16;
        tmp$ret$17 = (tmp_17 == null ? true : isObject(tmp_17)) ? tmp_17 : THROW_CCE();
        var tmp0_1 = tmp$ret$17;
        $composer_8.endReplaceableGroup_er37p7_k$();
        tmp$ret$18 = tmp0_1;
        var tmp_18 = tmp$ret$18;
        Button$composable(tmp_18, null, false, null, null, null, null, null, null, ComposableSingletons$LoggedOutNodeKt_getInstance().lambda_3_r8sbbn_1, $composer_5, 805306368, 510);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_er37p7_k$();
        $composer_3.endNode_3mkr10_k$();
        $composer_2.endReplaceableGroup_er37p7_k$();
        $composer_1.endReplaceableGroup_er37p7_k$();
        var tmp_19;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_19 = Unit_getInstance();
        }
        tmp = tmp_19;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function LoggedOutNode$LoginScreen$composable$lambda_0($tmp0_rcvr, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LoginScreen$composable($tmp0_rcvr, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function LoggedOutNode(buildContext, onLogin, backStack) {
    var tmp;
    if (backStack === VOID) {
      var tmp_0 = new BackStackModel(listOf(Splash_getInstance()), buildContext.get_savedStateMap_kmirgp_k$());
      var tmp_1 = LoggedOutNode$_init_$lambda_7ikfpf;
      tmp = new BackStack(VOID, tmp_0, tmp_1, VOID, LoggedOutNode$_init_$lambda_7ikfpf_0);
    } else {
      tmp = backStack;
    }
    backStack = tmp;
    ParentNode.call(this, backStack, buildContext);
    this.onLogin_1 = onLogin;
    this.backStack_1 = backStack;
    this.$stable_3 = 0;
  }
  protoOf(LoggedOutNode).resolve_xxltof_k$ = function (navTarget, buildContext) {
    var tmp;
    if (navTarget instanceof Splash) {
      tmp = node$composable(buildContext, ComposableLambda$invoke$ref_9(composableLambdaInstance(-515342841, true, LoggedOutNode$resolve$lambda(this))));
    } else {
      if (equals(navTarget, Login_getInstance())) {
        tmp = node$composable(buildContext, ComposableLambda$invoke$ref_10(composableLambdaInstance(363907376, true, LoggedOutNode$resolve$lambda_0(this))));
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  protoOf(LoggedOutNode).resolve_rgjbzh_k$ = function (interactionTarget, buildContext) {
    return this.resolve_xxltof_k$(interactionTarget instanceof NavTarget_1 ? interactionTarget : THROW_CCE(), buildContext);
  };
  protoOf(LoggedOutNode).View_d643kp_k$ = function (modifier) {
    illegalDecoyCallException('View');
  };
  protoOf(LoggedOutNode).View$composable_e844gk_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-2140150070);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2140150070, $dirty, -1, 'com.example.r2kapp.common.screens.loggedout.LoggedOutNode.View$composable (LoggedOutNode.kt:57)');
      }
      var tmp = Companion_getInstance();
      var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
      AppyxComponent$composable(this, this.backStack_1, tmp, false, null, tmp_0, null, $composer_0, 384 | 14 & $dirty >> 3, 60);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(LoggedOutNode$View$composable$lambda(this, modifier, $changed));
    }
  };
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoggedOutNodeKt$lambda_1$lambda_5blomc($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-899697176, $changed, -1, 'com.example.r2kapp.common.screens.loggedout.ComposableSingletons$LoggedOutNodeKt.lambda-1.<anonymous> (LoggedOutNode.kt:82)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Log in', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).get_bodyMedium_psz2kg_k$(), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$LoggedOutNodeKt$lambda_2$lambda_y585oj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(773837740, $changed, -1, 'com.example.r2kapp.common.screens.loggedout.ComposableSingletons$LoggedOutNodeKt.lambda-2.<anonymous> (LoggedOutNode.kt:109)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Nombre', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoggedOutNodeKt$lambda_3$lambda_829f8e($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-629843176, $changed, -1, 'com.example.r2kapp.common.screens.loggedout.ComposableSingletons$LoggedOutNodeKt.lambda-3.<anonymous> (LoggedOutNode.kt:119)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Entrar', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 131070);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LoggedOutNodeKt() {
    ComposableSingletons$LoggedOutNodeKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-899697176, false, ComposableSingletons$LoggedOutNodeKt$lambda_1$lambda_5blomc));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(773837740, false, ComposableSingletons$LoggedOutNodeKt$lambda_2$lambda_y585oj));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-629843176, false, ComposableSingletons$LoggedOutNodeKt$lambda_3$lambda_829f8e));
  }
  protoOf(ComposableSingletons$LoggedOutNodeKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$LoggedOutNodeKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$LoggedOutNodeKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$LoggedOutNodeKt_instance;
  function ComposableSingletons$LoggedOutNodeKt_getInstance() {
    if (ComposableSingletons$LoggedOutNodeKt_instance == null)
      new ComposableSingletons$LoggedOutNodeKt();
    return ComposableSingletons$LoggedOutNodeKt_instance;
  }
  function get_mainNavItems() {
    _init_properties_MainNode_kt__eriznp();
    return mainNavItems;
  }
  var mainNavItems;
  function MainNode$MainNavItem$Companion$resolver$lambda$lambda(it) {
    return new HomeNode(it);
  }
  function MainNode$MainNavItem$Companion$resolver$lambda$lambda_0(it) {
    return new CategoryNode(it);
  }
  function MainNode$MainNavItem$Companion$resolver$lambda$lambda_1($user, $onLogout) {
    return function (it) {
      return new ProfileNode(it, $user, $onLogout);
    };
  }
  function MainNode$MainNavItem$Companion$resolver$lambda($user, $onLogout) {
    return function (navBarItem) {
      var tmp0_subject = navBarItem;
      var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
      var tmp;
      switch (tmp0) {
        case 0:
          var tmp_0 = get_Home(Outlined_getInstance());
          var tmp_1 = get_Home_0(Filled_getInstance());
          tmp = AppyxNavItem_init_$Create$('Home', tmp_0, tmp_1, VOID, MainNode$MainNavItem$Companion$resolver$lambda$lambda);
          break;
        case 1:
          var tmp_2 = get_Menu(Outlined_getInstance());
          var tmp_3 = get_Menu_0(Filled_getInstance());
          tmp = AppyxNavItem_init_$Create$('Categorias', tmp_2, tmp_3, VOID, MainNode$MainNavItem$Companion$resolver$lambda$lambda_0);
          break;
        case 2:
          var tmp_4 = get_Person(Outlined_getInstance());
          var tmp_5 = get_Person_0(Filled_getInstance());
          tmp = AppyxNavItem_init_$Create$('Perfil', tmp_4, tmp_5, VOID, MainNode$MainNavItem$Companion$resolver$lambda$lambda_1($user, $onLogout));
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  var MainNavItem_DESTINATION1_instance;
  var MainNavItem_DESTINATION2_instance;
  var MainNavItem_DESTINATION3_instance;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).resolver_tvgvpn_k$ = function (user, onLogout) {
    return MainNode$MainNavItem$Companion$resolver$lambda(user, onLogout);
  };
  var Companion_instance;
  function Companion_getInstance_6() {
    MainNavItem_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [MainNavItem_DESTINATION1_getInstance(), MainNavItem_DESTINATION2_getInstance(), MainNavItem_DESTINATION3_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'DESTINATION1':
        return MainNavItem_DESTINATION1_getInstance();
      case 'DESTINATION2':
        return MainNavItem_DESTINATION2_getInstance();
      case 'DESTINATION3':
        return MainNavItem_DESTINATION3_getInstance();
      default:
        MainNavItem_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var MainNavItem_entriesInitialized;
  function MainNavItem_initEntries() {
    if (MainNavItem_entriesInitialized)
      return Unit_getInstance();
    MainNavItem_entriesInitialized = true;
    MainNavItem_DESTINATION1_instance = new MainNavItem('DESTINATION1', 0);
    MainNavItem_DESTINATION2_instance = new MainNavItem('DESTINATION2', 1);
    MainNavItem_DESTINATION3_instance = new MainNavItem('DESTINATION3', 2);
    Companion_getInstance_6();
  }
  var $ENTRIES;
  function _get_user__dey128($this) {
    return $this.user_1;
  }
  function MainNavItem(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_$stableprop_13() {
    return 0;
  }
  function MainNavItem_DESTINATION1_getInstance() {
    MainNavItem_initEntries();
    return MainNavItem_DESTINATION1_instance;
  }
  function MainNavItem_DESTINATION2_getInstance() {
    MainNavItem_initEntries();
    return MainNavItem_DESTINATION2_instance;
  }
  function MainNavItem_DESTINATION3_getInstance() {
    MainNavItem_initEntries();
    return MainNavItem_DESTINATION3_instance;
  }
  function MainNode(buildContext, user, onLogout, plugins) {
    var tmp;
    if (plugins === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = plugins;
    }
    plugins = tmp;
    AppyxMaterial3NavNode.call(this, buildContext, get_mainNavItems(), Companion_getInstance_6().resolver_tvgvpn_k$(user, onLogout), VOID, VOID, VOID, VOID, VOID, VOID, VOID, plugins);
    this.user_1 = user;
    this.$stable_4 = 0;
  }
  var properties_initialized_MainNode_kt_pzx8qr;
  function _init_properties_MainNode_kt__eriznp() {
    if (!properties_initialized_MainNode_kt_pzx8qr) {
      properties_initialized_MainNode_kt_pzx8qr = true;
      mainNavItems = toList(values());
    }
  }
  function get_$stableprop_14() {
    return 0;
  }
  function Profile() {
    Profile_instance = this;
    NavTarget_2.call(this);
    this.$stable_2 = 0;
  }
  var Profile_instance;
  function Profile_getInstance() {
    if (Profile_instance == null)
      new Profile();
    return Profile_instance;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function _get_user__dey128_0($this) {
    return $this.user_1;
  }
  function _get_onLogout__ircgv2($this) {
    return $this.onLogout_1;
  }
  function _get_backStack__hxa7bk_2($this) {
    return $this.backStack_1;
  }
  function NavTarget_2() {
    this.$stable_1 = 0;
  }
  function get_$stableprop_16() {
    return 0;
  }
  function ProfileNode$_init_$lambda_jitr40(it) {
    return new BackStackSlider(it);
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ProfileNode$resolve$lambda(this$0) {
    return function (modifier, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-617506556, $dirty, -1, 'com.example.r2kapp.common.screens.profile.ProfileNode.resolve.<anonymous> (ProfileNode.kt:44)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var tmp0_Column$composable = fillMaxSize(modifier);
        var tmp1_Column$composable = Arrangement_getInstance().get_Center_3arb0i_k$();
        var tmp2_Column$composable = Companion_getInstance_0().get_CenterHorizontally_97ab0v_k$();
        var tmp3_Column$composable = $composer_0;
        var modifier_0 = tmp0_Column$composable;
        var verticalArrangement = tmp1_Column$composable;
        var horizontalAlignment = tmp2_Column$composable;
        var $composer_1 = tmp3_Column$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance();
        if (!(0 === 0))
          verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!(0 === 0))
          horizontalAlignment = Companion_getInstance_0().get_Start_ih4i6x_k$();
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 54);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier_0;
        var tmp1_Layout$composable = $composer_1;
        var tmp2_Layout$composable = 0;
        var modifier_1 = tmp0_Layout$composable;
        var $composer_2 = tmp1_Layout$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_1 = Companion_getInstance();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_1);
        var tmp2_ReusableComposeNode$composable = $composer_2;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_3 = tmp2_ReusableComposeNode$composable;
        var tmp_1 = $composer_3.get_applier_bupu8u_k$();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.startReusableNode_jk07k2_k$();
        if ($composer_3.get_inserting_25mlsw_k$()) {
          $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_3.useNode_inlzo8_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_2;
        if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
          tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
          tmp_2 = Unit_getInstance();
        }
        tmp$ret$0 = tmp_2;
        tmp$ret$1 = tmp$ret$0;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'com.example.r2kapp.common.screens.profile.ProfileNode.resolve.<anonymous>.<anonymous>' call
        var tmp4_anonymous_1 = ColumnScopeInstance_getInstance();
        var tmp5_anonymous = $composer_4;
        var tmp6_anonymous = 6;
        var $composer_5 = tmp5_anonymous;
        var tmp_3 = 'Hola ' + this$0.user_1.get_name_woqyms_k$() + '!';
        var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_8 = _TextOverflow___init__impl__obguoe(0);
        Text$composable(tmp_3, null, tmp_4, tmp_5, null, null, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_5, 6).get_headlineSmall_nqk5ey_k$(), $composer_5, 0, 0, 65534);
        var tmp_9 = Companion_getInstance();
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp$ret$2 = _Dp___init__impl__ms3zkb(24);
        Spacer$composable(size(tmp_9, tmp$ret$2), $composer_5, 6);
        Button$composable(this$0.onLogout_1, null, false, null, null, null, null, null, null, ComposableSingletons$ProfileNodeKt_getInstance().lambda_1_r8sbbp_1, $composer_5, 805306368, 510);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_er37p7_k$();
        $composer_3.endNode_3mkr10_k$();
        $composer_2.endReplaceableGroup_er37p7_k$();
        $composer_1.endReplaceableGroup_er37p7_k$();
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_getInstance();
        }
        tmp_0 = tmp_10;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ProfileNode$View$composable$lambda($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProfileNode(buildContext, user, onLogout, backStack) {
    var tmp;
    if (backStack === VOID) {
      var tmp_0 = new BackStackModel(listOf(Profile_getInstance()), buildContext.get_savedStateMap_kmirgp_k$());
      tmp = new BackStack(VOID, tmp_0, ProfileNode$_init_$lambda_jitr40);
    } else {
      tmp = backStack;
    }
    backStack = tmp;
    ParentNode.call(this, backStack, buildContext);
    this.user_1 = user;
    this.onLogout_1 = onLogout;
    this.backStack_1 = backStack;
    this.$stable_3 = 0;
  }
  protoOf(ProfileNode).resolve_ocodjw_k$ = function (navTarget, buildContext) {
    var tmp;
    if (navTarget instanceof Profile) {
      tmp = node$composable(buildContext, ComposableLambda$invoke$ref_16(composableLambdaInstance(-617506556, true, ProfileNode$resolve$lambda(this))));
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  protoOf(ProfileNode).resolve_rgjbzh_k$ = function (interactionTarget, buildContext) {
    return this.resolve_ocodjw_k$(interactionTarget instanceof NavTarget_2 ? interactionTarget : THROW_CCE(), buildContext);
  };
  protoOf(ProfileNode).View_d643kp_k$ = function (modifier) {
    illegalDecoyCallException('View');
  };
  protoOf(ProfileNode).View$composable_e844gk_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-2146637648);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2146637648, $dirty, -1, 'com.example.r2kapp.common.screens.profile.ProfileNode.View$composable (ProfileNode.kt:68)');
      }
      var tmp = Companion_getInstance();
      var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
      AppyxComponent$composable(this, this.backStack_1, tmp, false, null, tmp_0, null, $composer_0, 384 | 14 & $dirty >> 3, 60);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(ProfileNode$View$composable$lambda(this, modifier, $changed));
    }
  };
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ProfileNodeKt$lambda_1$lambda_gr0g9r($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1270092438, $changed, -1, 'com.example.r2kapp.common.screens.profile.ComposableSingletons$ProfileNodeKt.lambda-1.<anonymous> (ProfileNode.kt:57)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text$composable('Cerrar sesi\xF3n', null, tmp, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, MaterialTheme_getInstance().$get_typography$$composable_fm42xb_k$($composer_0, 6).get_bodyMedium_psz2kg_k$(), $composer_0, 6, 0, 65534);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ProfileNodeKt() {
    ComposableSingletons$ProfileNodeKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-1270092438, false, ComposableSingletons$ProfileNodeKt$lambda_1$lambda_gr0g9r));
  }
  protoOf(ComposableSingletons$ProfileNodeKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$ProfileNodeKt_instance;
  function ComposableSingletons$ProfileNodeKt_getInstance() {
    if (ComposableSingletons$ProfileNodeKt_instance == null)
      new ComposableSingletons$ProfileNodeKt();
    return ComposableSingletons$ProfileNodeKt_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.Dummy_1 = new User('User');
  }
  protoOf(Companion_0).get_Dummy_i8wh27_k$ = function () {
    return this.Dummy_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function get_$stableprop_17() {
    return 0;
  }
  function User(name) {
    Companion_getInstance_7();
    this.name_1 = name;
    this.$stable_1 = 0;
  }
  protoOf(User).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(User).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(User).copy_3t26ic_k$ = function (name) {
    return new User(name);
  };
  protoOf(User).copy$default_k6zjgl_k$ = function (name, $super) {
    name = name === VOID ? this.name_1 : name;
    return $super === VOID ? this.copy_3t26ic_k$(name) : $super.copy_3t26ic_k$.call(this, name);
  };
  protoOf(User).toString = function () {
    return 'User(name=' + this.name_1 + ')';
  };
  protoOf(User).hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  function get_Purple80() {
    _init_properties_Color_kt__6h0l1r();
    return Purple80;
  }
  var Purple80;
  function get_PurpleGrey80() {
    _init_properties_Color_kt__6h0l1r();
    return PurpleGrey80;
  }
  var PurpleGrey80;
  function get_Pink80() {
    _init_properties_Color_kt__6h0l1r();
    return Pink80;
  }
  var Pink80;
  function get_Purple40() {
    _init_properties_Color_kt__6h0l1r();
    return Purple40;
  }
  var Purple40;
  function get_PurpleGrey40() {
    _init_properties_Color_kt__6h0l1r();
    return PurpleGrey40;
  }
  var PurpleGrey40;
  function get_Pink40() {
    _init_properties_Color_kt__6h0l1r();
    return Pink40;
  }
  var Pink40;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      Purple80 = Color(new Long(-3097345, 0));
      PurpleGrey80 = Color(new Long(-3357988, 0));
      Pink80 = Color(new Long(-1066808, 0));
      Purple40 = Color(new Long(-10071900, 0));
      PurpleGrey40 = Color(new Long(-10331279, 0));
      Pink40 = Color(new Long(-8564128, 0));
    }
  }
  function get_DarkColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColorScheme;
  }
  var DarkColorScheme;
  function get_LightColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return LightColorScheme;
  }
  var LightColorScheme;
  function R2KAppTheme$composable(darkTheme, content, $composer, $changed, $default) {
    _init_properties_Theme_kt__w31tqv();
    var darkTheme_0 = {_v: darkTheme};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1585328354);
    sourceInformation($composer_0, 'C(R2KAppTheme$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.changed_i0nym2_k$(darkTheme_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme$composable($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(1585328354, $dirty, -1, 'com.example.r2kapp.common.ui.theme.R2KAppTheme$composable (Theme.kt:34)');
      }
      var colorScheme = darkTheme_0._v ? get_DarkColorScheme() : get_LightColorScheme();
      MaterialTheme$composable(colorScheme, null, get_Typography(), content, $composer_0, 384 | 7168 & $dirty << 6, 2);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(R2KAppTheme$composable$lambda(darkTheme_0, content, $changed, $default));
    }
  }
  function R2KAppTheme$composable$lambda($darkTheme, $content, $$changed, $$default) {
    return function ($composer, $force) {
      R2KAppTheme$composable($darkTheme._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      DarkColorScheme = darkColorScheme(get_Purple80(), VOID, VOID, VOID, VOID, get_PurpleGrey80(), VOID, VOID, VOID, get_Pink80());
      LightColorScheme = lightColorScheme(get_Purple40(), VOID, VOID, VOID, VOID, get_PurpleGrey40(), VOID, VOID, VOID, get_Pink40());
    }
  }
  function get_Typography() {
    _init_properties_Type_kt__qhesii();
    return Typography_0;
  }
  var Typography_0;
  var properties_initialized_Type_kt_b459h8;
  function _init_properties_Type_kt__qhesii() {
    if (!properties_initialized_Type_kt_b459h8) {
      properties_initialized_Type_kt_b459h8 = true;
      var tmp0_fontFamily = Companion_getInstance_4().get_Default_goqax4_k$();
      var tmp1_fontWeight = Companion_getInstance_5().get_Normal_22avww_k$();
      var tmp2_fontSize = get_sp(16);
      var tmp3_lineHeight = get_sp(24);
      var tmp4_letterSpacing = get_sp_0(0.5);
      Typography_0 = new Typography(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, TextStyle_init_$Create$(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, tmp0_fontFamily, VOID, tmp4_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight));
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = R2KAppTheme$composable;
  _.$_$.b = RootNode;
  //endregion
  return _;
}));
