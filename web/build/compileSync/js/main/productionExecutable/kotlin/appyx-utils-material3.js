(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './appyx-components-stable-spotlight-commons.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-material3.js', './appyx-navigation-common.js', './compose-multiplatform-core-animation-core.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-material.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./appyx-components-stable-spotlight-commons.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-material3.js'), require('./appyx-navigation-common.js'), require('./compose-multiplatform-core-animation-core.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-material.js'));
  else {
    if (typeof this['appyx-components-stable-spotlight-commons'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'appyx-components-stable-spotlight-commons' was not found. Please, check whether 'appyx-components-stable-spotlight-commons' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['compose-multiplatform-core-material3'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'compose-multiplatform-core-material3' was not found. Please, check whether 'compose-multiplatform-core-material3' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['appyx-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'appyx-navigation-common' was not found. Please, check whether 'appyx-navigation-common' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['compose-multiplatform-core-material'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'compose-multiplatform-core-material' was not found. Please, check whether 'compose-multiplatform-core-material' is loaded prior to 'appyx-utils-material3'.");
    }
    root['appyx-utils-material3'] = factory(typeof this['appyx-utils-material3'] === 'undefined' ? {} : this['appyx-utils-material3'], this['appyx-components-stable-spotlight-commons'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-material3'], this['appyx-navigation-common'], this['compose-multiplatform-core-animation-core'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-material']);
  }
}(this, function (_, kotlin_appyx_appyx_components_stable_spotlight_spotlight, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material3_material3, kotlin_appyx_appyx_navigation_appyx_navigation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_material_material) {
  'use strict';
  //region block: imports
  var activate = kotlin_appyx_appyx_components_stable_spotlight_spotlight.$_$.a;
  var SpotlightFader = kotlin_appyx_appyx_components_stable_spotlight_spotlight.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.s8;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.p8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var isInterface = kotlin_kotlin.$_$.h9;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var equals = kotlin_kotlin.$_$.t8;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var rowMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var checkIndexOverflow = kotlin_kotlin.$_$.f4;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l2;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var NavigationBarItem$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var NavigationRailItem$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var ParentNode = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.h;
  var first = kotlin_kotlin.$_$.z4;
  var VOID = kotlin_kotlin.$_$.d;
  var Spring_instance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var SpotlightModel = kotlin_appyx_appyx_components_stable_spotlight_spotlight.$_$.c;
  var Spotlight = kotlin_appyx_appyx_components_stable_spotlight_spotlight.$_$.d;
  var EmptyParentNodeView = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.f;
  var Appyx_getInstance = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.l;
  var ChildAwareImpl = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.a;
  var emptyList = kotlin_kotlin.$_$.r4;
  var protoOf = kotlin_kotlin.$_$.r9;
  var collectAsState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var numberToInt = kotlin_kotlin.$_$.n9;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.p;
  var Long = kotlin_kotlin.$_$.rc;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.n2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var Scaffold$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var get_LocalScreenSize = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.c;
  var WindowSizeClass_COMPACT_getInstance = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.j;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var AppyxComponent$composable = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.b;
  var NavigationBar$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.v2;
  var zIndex = kotlin_org_jetbrains_compose_ui_ui.$_$.q7;
  var NavigationRail$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var MaterialTheme_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.q;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w1;
  var Text$composable = kotlin_org_jetbrains_compose_material_material.$_$.c;
  var Icon$composable = kotlin_org_jetbrains_compose_material_material.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AppyxMaterial3NavNode, 'AppyxMaterial3NavNode', classMeta, ParentNode);
  setMetadataFor(AppyxNavItem, 'AppyxNavItem', classMeta);
  //endregion
  function onItemSelected($this, index) {
    activate($this.zgb_1, index);
  }
  function AppyxMaterial3NavNode$_init_$lambda_opyuwi($animationSpec) {
    return function (it) {
      return new SpotlightFader(it, $animationSpec);
    };
  }
  function AppyxMaterial3NavNode$View$composable$lambda(this$0, $$dirty, $selectedIndex) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-94192512, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous> (AppyxMaterial3NavNode.kt:89)');
        }
        if (this$0.cgc($composer_0, 14 & $$dirty >> 3)) {
          this$0.bgc($selectedIndex, $composer_0, 112 & $$dirty);
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$View$composable$lambda_0(this$0, $$dirty, $selectedIndex) {
    return function (paddingValues, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.t1z(paddingValues) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-827315126, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous> (AppyxMaterial3NavNode.kt:95)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var modifier = padding(fillMaxSize(Companion_instance), paddingValues);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        $composer_1.f1x(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance().d5i_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 0 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.f1x(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_0().s6v_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_1 = $composer_3.u1y();
        if (!isInterface(tmp_1, Applier)) {
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
        var tmp_2;
        if ($this$with.v1y() ? true : !equals($this$with.r1z(), compositeKeyHash)) {
          $this$with.s1z(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).q1z(compositeKeyHash, block);
          tmp_2 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_5 = $composer_4;
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var modifier_2 = null;
        var horizontalArrangement = null;
        var verticalAlignment = null;
        var $composer_6 = $composer_5;
        $composer_6.f1x(-636825856);
        sourceInformation($composer_6, 'CC(Row$composable)P(2,1,3)77@3858L58,78@3921L130:Row.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier_2 = Companion_instance;
        if (!((7 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().d93_1;
        if (!((7 & 4) === 0))
          verticalAlignment = Companion_getInstance().m5i_1;
        var measurePolicy_0 = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_3 = modifier_2;
        var $changed_2 = 112 & 0 << 3;
        var modifier_4 = modifier_3;
        var $composer_7 = $composer_6;
        $composer_7.f1x(1725976829);
        sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_4 = Companion_instance;
        var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
        var localMap_0 = $composer_7.a20();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory_0 = Companion_getInstance_0().s6v_1;
        var skippableUpdate_0 = materializerOf(modifier_4);
        var $changed_3 = 6 | 7168 & $changed_2 << 9;
        var $composer_8 = $composer_7;
        var tmp_3 = $composer_8.u1y();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_8.k1z();
        if ($composer_8.v1y()) {
          $composer_8.l1z(factory_0);
        } else {
          $composer_8.m1z();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_0().x6v_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_0().w6v_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block_0 = Companion_getInstance_0().a6w_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
        var tmp_4;
        if ($this$with_0.v1y() ? true : !equals($this$with_0.r1z(), compositeKeyHash_0)) {
          $this$with_0.s1z(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).q1z(compositeKeyHash_0, block_0);
          tmp_4 = Unit_instance;
        }
        skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & $changed_3 >> 3);
        $composer_8.f1x(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var $composer_9 = $composer_8;
        sourceInformationMarkerStart($composer_9, -1568371859, 'C79@3966L9:Row.kt#2w3rfo');
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_10 = $composer_9;
        $composer_10.f1x(1060670857);
        if (this$0.egc($composer_10, 14 & $$dirty >> 3)) {
          this$0.dgc($selectedIndex, null, $composer_10, 896 & $$dirty << 3, 2);
        }
        $composer_10.h1x();
        this$0.fgc($composer_10, 14 & $$dirty >> 3);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.h1x();
        $composer_8.n1z();
        $composer_7.h1x();
        $composer_6.h1x();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.h1x();
        $composer_3.n1z();
        $composer_2.h1x();
        $composer_1.h1x();
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.h1z();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o38(p0, p1, p2);
    };
  }
  function AppyxMaterial3NavNode$View$composable$lambda_1($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.cf9($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AppyxMaterial3NavNode$CurrentNavItem$composable$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.fgc($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda(this$0, $index) {
    return function () {
      onItemSelected(this$0, $index);
      return Unit_instance;
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda_0($appyxNavItem, $selectedIndex, $index) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-920828612, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous> (AppyxMaterial3NavNode.kt:133)');
        }
        $appyxNavItem.hgc_1($selectedIndex === $index, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda_1($appyxNavItem, $selectedIndex, $index) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1200723711, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous> (AppyxMaterial3NavNode.kt:134)');
        }
        $appyxNavItem.ggc_1($selectedIndex === $index, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda(this$0, $selectedIndex, $$dirty) {
    return function ($this$NavigationBar, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.t1z($this$NavigationBar) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1253860686, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous> (AppyxMaterial3NavNode.kt:129)');
        }
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = this$0.ugb_1.v();
        while (tmp0_iterator.w()) {
          var item = tmp0_iterator.y();
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var index_0 = checkIndexOverflow(tmp1);
          var appyxNavItem = this$0.vgb_1(item);
          var tmp0_selected = $selectedIndex === index_0;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var key1 = this$0;
          var $composer_1 = $composer_0;
          $composer_1.f1x(-1124426577);
          sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_1.t1z(key1) | $composer_1.t1z(index_0));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp_1;
          if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda(this$0, index_0);
            $composer_1.s1z(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_1.h1x();
          var tmp_3 = tmp0;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_4 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_4, -920828612, true, AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda_0(appyxNavItem, $selectedIndex, index_0));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_2 = $composer_0;
          $composer_2.f1x(-838505973);
          sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = $composer_2.t1z(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_2.r1z();
          var tmp_5;
          if (invalid_0 ? true : it_0 === Companion_getInstance_1().t1y_1) {
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
            $composer_2.s1z(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_0;
          }
          var tmp_6 = tmp_5;
          var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          $composer_2.h1x();
          var tmp_7 = tmp0_0;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_8 = $composer_0;
          var dispatchReceiver_0 = composableLambda(tmp_8, 1200723711, true, AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda_1(appyxNavItem, $selectedIndex, index_0));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_3 = $composer_0;
          $composer_3.f1x(-838505973);
          sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = $composer_3.t1z(dispatchReceiver_0);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_3.r1z();
          var tmp_9;
          if (invalid_1 ? true : it_1 === Companion_getInstance_1().t1y_1) {
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = ComposableLambda$invoke$ref_2(dispatchReceiver_0);
            $composer_3.s1z(value_1);
            tmp_9 = value_1;
          } else {
            tmp_9 = it_1;
          }
          var tmp_10 = tmp_9;
          var tmp0_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
          $composer_3.h1x();
          var tmp_11 = tmp0_1;
          NavigationBarItem$composable($this$NavigationBar, tmp0_selected, tmp_3, tmp_7, null, false, tmp_11, false, null, null, $composer_0, 1575936 | 14 & $dirty, 472);
        }
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_instance;
        }
        tmp_0 = tmp_12;
      } else {
        $composer_0.h1z();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o38(p0, p1, p2);
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda_0($tmp0_rcvr, $selectedIndex, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.bgc($selectedIndex, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda(this$0, $index) {
    return function () {
      onItemSelected(this$0, $index);
      return Unit_instance;
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda_0($appyxNavItem, $selectedIndex, $index) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(1477867722, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous> (AppyxMaterial3NavNode.kt:149)');
        }
        $appyxNavItem.hgc_1($selectedIndex === $index, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda_1($appyxNavItem, $selectedIndex, $index) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1670248281, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous> (AppyxMaterial3NavNode.kt:150)');
        }
        $appyxNavItem.ggc_1($selectedIndex === $index, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda(this$0, $selectedIndex, $$dirty) {
    return function ($this$NavigationRail, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(388580959, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous> (AppyxMaterial3NavNode.kt:145)');
        }
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = this$0.ugb_1.v();
        while (tmp0_iterator.w()) {
          var item = tmp0_iterator.y();
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var index_0 = checkIndexOverflow(tmp1);
          var appyxNavItem = this$0.vgb_1(item);
          var tmp0_selected = $selectedIndex === index_0;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var key1 = this$0;
          var $composer_1 = $composer_0;
          $composer_1.f1x(-1124426577);
          sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_1.t1z(key1) | $composer_1.t1z(index_0));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.r1z();
          var tmp_0;
          if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda(this$0, index_0);
            $composer_1.s1z(value);
            tmp_0 = value;
          } else {
            tmp_0 = it;
          }
          var tmp_1 = tmp_0;
          var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
          $composer_1.h1x();
          var tmp_2 = tmp0;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_3 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_3, 1477867722, true, AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda_0(appyxNavItem, $selectedIndex, index_0));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_2 = $composer_0;
          $composer_2.f1x(-838505973);
          sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = $composer_2.t1z(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_2.r1z();
          var tmp_4;
          if (invalid_0 ? true : it_0 === Companion_getInstance_1().t1y_1) {
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
            $composer_2.s1z(value_0);
            tmp_4 = value_0;
          } else {
            tmp_4 = it_0;
          }
          var tmp_5 = tmp_4;
          var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          $composer_2.h1x();
          var tmp_6 = tmp0_0;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_7 = $composer_0;
          var dispatchReceiver_0 = composableLambda(tmp_7, -1670248281, true, AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda_1(appyxNavItem, $selectedIndex, index_0));
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_3 = $composer_0;
          $composer_3.f1x(-838505973);
          sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = $composer_3.t1z(dispatchReceiver_0);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_3.r1z();
          var tmp_8;
          if (invalid_1 ? true : it_1 === Companion_getInstance_1().t1y_1) {
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = ComposableLambda$invoke$ref_5(dispatchReceiver_0);
            $composer_3.s1z(value_1);
            tmp_8 = value_1;
          } else {
            tmp_8 = it_1;
          }
          var tmp_9 = tmp_8;
          var tmp0_1 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
          $composer_3.h1x();
          var tmp_10 = tmp0_1;
          NavigationRailItem$composable(tmp0_selected, tmp_2, tmp_6, null, false, tmp_10, false, null, null, $composer_0, 196992, 472);
        }
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_instance;
        }
        tmp = tmp_11;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o38(p0, p1, p2);
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda_0($tmp0_rcvr, $selectedIndex, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.dgc($selectedIndex, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function AppyxMaterial3NavNode(buildContext, navTargets, navTargetResolver, initialActiveElement, animationSpec, visualisation, spotlight, view, childKeepMode, childAware, plugins) {
    initialActiveElement = initialActiveElement === VOID ? first(navTargets) : initialActiveElement;
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 10000.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    var tmp_0;
    if (visualisation === VOID) {
      tmp_0 = AppyxMaterial3NavNode$_init_$lambda_opyuwi(animationSpec);
    } else {
      tmp_0 = visualisation;
    }
    visualisation = tmp_0;
    spotlight = spotlight === VOID ? new Spotlight(VOID, new SpotlightModel(navTargets, navTargets.b2(initialActiveElement), buildContext.if8_1), visualisation) : spotlight;
    view = view === VOID ? new EmptyParentNodeView() : view;
    childKeepMode = childKeepMode === VOID ? Appyx_getInstance().nev_1 : childKeepMode;
    childAware = childAware === VOID ? new ChildAwareImpl() : childAware;
    var tmp_1;
    if (plugins === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_1 = emptyList();
    } else {
      tmp_1 = plugins;
    }
    plugins = tmp_1;
    ParentNode.call(this, spotlight, buildContext, view, childKeepMode, childAware, plugins);
    this.ugb_1 = navTargets;
    this.vgb_1 = navTargetResolver;
    this.wgb_1 = initialActiveElement;
    this.xgb_1 = animationSpec;
    this.ygb_1 = visualisation;
    this.zgb_1 = spotlight;
    this.agc_1 = 0;
  }
  protoOf(AppyxMaterial3NavNode).kgc = function (navTarget, buildContext) {
    return this.vgb_1(navTarget).igc_1(buildContext);
  };
  protoOf(AppyxMaterial3NavNode).ef2 = function (interactionTarget, buildContext) {
    return this.kgc(!(interactionTarget == null) ? interactionTarget : THROW_CCE(), buildContext);
  };
  protoOf(AppyxMaterial3NavNode).cf9 = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1000200167);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(1000200167, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable (AppyxMaterial3NavNode.kt:84)');
      }
      var selectedIndex = numberToInt(collectAsState$composable(this.zgb_1.ret_1, null, $composer_0, 0, 1).u2());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -94192512, true, AppyxMaterial3NavNode$View$composable$lambda(this, $dirty, selectedIndex));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.s1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.h1x();
      var tmp_2 = tmp0;
      var tmp_3 = _FabPosition___init__impl__9ib2hj(0);
      var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_6, -827315126, true, AppyxMaterial3NavNode$View$composable$lambda_0(this, $dirty, selectedIndex));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.f1x(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.t1z(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.r1z();
      var tmp_7;
      if (invalid_0 ? true : it_0 === Companion_getInstance_1().t1y_1) {
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
        $composer_2.s1z(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.h1x();
      Scaffold$composable(null, null, tmp_2, null, null, tmp_3, tmp_4, tmp_5, null, tmp0_0, $composer_0, 805306752, 507);
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
      tmp1_safe_receiver.w2e(AppyxMaterial3NavNode$View$composable$lambda_1(this, modifier, $changed));
    }
  };
  protoOf(AppyxMaterial3NavNode).cgc = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(346489137);
    sourceInformation($composer_0, 'C(shouldUseNavigationBar$composable)');
    if (isTraceInProgress()) {
      traceEventStart(346489137, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.shouldUseNavigationBar$composable (AppyxMaterial3NavNode.kt:113)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalScreenSize();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.b20(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.zf2_1.equals(WindowSizeClass_COMPACT_getInstance());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0_0;
  };
  protoOf(AppyxMaterial3NavNode).egc = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1733511868);
    sourceInformation($composer_0, 'C(shouldUseNavigationRail$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1733511868, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.shouldUseNavigationRail$composable (AppyxMaterial3NavNode.kt:117)');
    }
    var tmp0 = !this.cgc($composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  protoOf(AppyxMaterial3NavNode).fgc = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-561196289);
    sourceInformation($composer_0, 'C(CurrentNavItem$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-561196289, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.CurrentNavItem$composable (AppyxMaterial3NavNode.kt:120)');
      }
      var tmp = _Dp___init__impl__ms3zkb(0.0);
      AppyxComponent$composable(this, this.zgb_1, null, false, null, tmp, null, $composer_0, 14 & $dirty, 62);
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
      tmp1_safe_receiver.w2e(AppyxMaterial3NavNode$CurrentNavItem$composable$lambda(this, $changed));
    }
  };
  protoOf(AppyxMaterial3NavNode).bgc = function (selectedIndex, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-1315264482);
    sourceInformation($composer_0, 'C(NavigationBar$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.v1z(selectedIndex) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-1315264482, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable (AppyxMaterial3NavNode.kt:127)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1253860686, true, AppyxMaterial3NavNode$NavigationBar$composable$lambda(this, selectedIndex, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp_3;
      if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.s1z(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.h1x();
      NavigationBar$composable(null, tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 196608, 31);
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
      tmp1_safe_receiver.w2e(AppyxMaterial3NavNode$NavigationBar$composable$lambda_0(this, selectedIndex, $changed));
    }
  };
  protoOf(AppyxMaterial3NavNode).dgc = function (selectedIndex, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(1980641520);
    sourceInformation($composer_0, 'C(NavigationRail$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.v1z(selectedIndex) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.t1z(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.t1z(this) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.w1y()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(1980641520, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable (AppyxMaterial3NavNode.kt:143)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = zIndex(tmp, 3.4028235E38);
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 388580959, true, AppyxMaterial3NavNode$NavigationRail$composable$lambda(this, selectedIndex, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.f1x(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.t1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.r1z();
      var tmp_4;
      if (invalid ? true : it === Companion_getInstance_1().t1y_1) {
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.s1z(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.h1x();
      NavigationRail$composable(tmp_0, tmp_1, tmp_2, null, null, tmp0, $composer_0, 196608, 30);
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
      tmp1_safe_receiver.w2e(AppyxMaterial3NavNode$NavigationRail$composable$lambda_0(this, selectedIndex, modifier_0, $changed, $default));
    }
  };
  function AppyxNavItem_init_$Init$(text, unselectedIcon, selectedIcon, iconModifier, node, $this) {
    iconModifier = iconModifier === VOID ? Companion_instance : iconModifier;
    var tmp = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1667485993, true, AppyxNavItem$_init_$lambda_wgzkrv(text)));
    AppyxNavItem.call($this, tmp, ComposableLambda$invoke$ref_8(composableLambdaInstance(-1681736138, true, AppyxNavItem$_init_$lambda_wgzkrv_0(selectedIcon, unselectedIcon, text, iconModifier))), node);
    return $this;
  }
  function AppyxNavItem_init_$Create$(text, unselectedIcon, selectedIcon, iconModifier, node) {
    return AppyxNavItem_init_$Init$(text, unselectedIcon, selectedIcon, iconModifier, node, objectCreate(protoOf(AppyxNavItem)));
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o38(p0, p1, p2);
    };
  }
  function AppyxNavItem$_init_$lambda_wgzkrv($text) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1667485993, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxNavItem.<init>.<anonymous> (AppyxNavItem.kt:25)');
        }
        var tmp_0 = MaterialTheme_instance.wfj($composer_0, 6).efl();
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextOverflow___init__impl__obguoe(0);
        Text$composable($text, null, tmp_0, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, null, $composer_0, 0, 0, 131066);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.h1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o38(p0, p1, p2);
    };
  }
  function AppyxNavItem$_init_$lambda_wgzkrv_0($selectedIcon, $unselectedIcon, $text, $iconModifier) {
    return function (isSelected, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.u1z(isSelected) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(-1681736138, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxNavItem.<init>.<anonymous> (AppyxNavItem.kt:31)');
        }
        Icon$composable(isSelected ? $selectedIcon : $unselectedIcon, $text, $iconModifier, MaterialTheme_instance.wfj($composer_0, 6).efl(), $composer_0, 0, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.h1z();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AppyxNavItem(text, icon, node) {
    this.ggc_1 = text;
    this.hgc_1 = icon;
    this.igc_1 = node;
    this.jgc_1 = 0;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AppyxMaterial3NavNode;
  _.$_$.b = AppyxNavItem_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=appyx-utils-material3.js.map
