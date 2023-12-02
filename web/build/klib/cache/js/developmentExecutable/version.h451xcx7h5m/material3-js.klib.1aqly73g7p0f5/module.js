(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './appyx-components-stable-spotlight-commons.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-material3.js', './appyx-navigation-common.js', './compose-multiplatform-core-animation-core.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-material.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./appyx-components-stable-spotlight-commons.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-material3.js'), require('./appyx-navigation-common.js'), require('./compose-multiplatform-core-animation-core.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-material.js'));
  else {
    if (typeof this['appyx-components-stable-spotlight-commons'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'appyx-components-stable-spotlight-commons' was not found. Please, check whether 'appyx-components-stable-spotlight-commons' is loaded prior to 'appyx-utils-material3'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-utils-material3'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'appyx-utils-material3'.");
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
    root['appyx-utils-material3'] = factory(typeof this['appyx-utils-material3'] === 'undefined' ? {} : this['appyx-utils-material3'], this['appyx-components-stable-spotlight-commons'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-material3'], this['appyx-navigation-common'], this['compose-multiplatform-core-animation-core'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-material']);
  }
}(this, function (_, kotlin_appyx_appyx_components_stable_spotlight_spotlight, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material3_material3, kotlin_appyx_appyx_navigation_appyx_navigation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_material_material) {
  'use strict';
  //region block: imports
  var activate = kotlin_appyx_appyx_components_stable_spotlight_spotlight.$_$.a;
  var SpotlightFader = kotlin_appyx_appyx_components_stable_spotlight_spotlight.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.z4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h2;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.o9;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.n9;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.k9;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var isInterface = kotlin_kotlin.$_$.bd;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n2;
  var equals = kotlin_kotlin.$_$.ic;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var rowMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var checkIndexOverflow = kotlin_kotlin.$_$.n6;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q2;
  var THROW_CCE = kotlin_kotlin.$_$.lh;
  var isObject = kotlin_kotlin.$_$.dd;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var NavigationBarItem$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var NavigationRailItem$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var ParentNode = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.i;
  var first = kotlin_kotlin.$_$.y7;
  var VOID = kotlin_kotlin.$_$.bj;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j1;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var SpotlightModel = kotlin_appyx_appyx_components_stable_spotlight_spotlight.$_$.c;
  var Spotlight = kotlin_appyx_appyx_components_stable_spotlight_spotlight.$_$.d;
  var EmptyParentNodeView = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.g;
  var Appyx_getInstance = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.m;
  var ChildAwareImpl = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.a;
  var emptyList = kotlin_kotlin.$_$.n7;
  var protoOf = kotlin_kotlin.$_$.rd;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var collectAsState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var numberToInt = kotlin_kotlin.$_$.nd;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.p;
  var Long = kotlin_kotlin.$_$.eh;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.p3;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var Scaffold$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var get_LocalScreenSize = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.c;
  var WindowSizeClass_COMPACT_getInstance = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.k;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var AppyxComponent$composable = kotlin_appyx_appyx_navigation_appyx_navigation.$_$.b;
  var NavigationBar$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.l4;
  var zIndex = kotlin_org_jetbrains_compose_ui_ui.$_$.i8;
  var NavigationRail$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var classMeta = kotlin_kotlin.$_$.ec;
  var setMetadataFor = kotlin_kotlin.$_$.sd;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var objectCreate = kotlin_kotlin.$_$.pd;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.q;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x1;
  var Text$composable = kotlin_org_jetbrains_compose_material_material.$_$.c;
  var Icon$composable = kotlin_org_jetbrains_compose_material_material.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AppyxMaterial3NavNode, 'AppyxMaterial3NavNode', classMeta, ParentNode);
  setMetadataFor(AppyxNavItem, 'AppyxNavItem', classMeta);
  //endregion
  function _get_navTargets__p65slo($this) {
    return $this.navTargets_1;
  }
  function _get_navTargetResolver__szfnx3($this) {
    return $this.navTargetResolver_1;
  }
  function _get_initialActiveElement__abtnbt($this) {
    return $this.initialActiveElement_1;
  }
  function _get_animationSpec__ffhwa6($this) {
    return $this.animationSpec_1;
  }
  function _get_visualisation__jxb5p6($this) {
    return $this.visualisation_1;
  }
  function _get_spotlight__3xvfy5($this) {
    return $this.spotlight_1;
  }
  function onItemSelected($this, index) {
    activate($this.spotlight_1, index);
  }
  function get_$stableprop() {
    return 0;
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
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-94192512, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous> (AppyxMaterial3NavNode.kt:89)');
        }
        if (this$0.shouldUseNavigationBar$composable_7s119c_k$($composer_0, 14 & $$dirty >> 3)) {
          this$0.NavigationBar$composable_je6jbs_k$($selectedIndex, $composer_0, 112 & $$dirty);
        }
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$View$composable$lambda_0(this$0, $$dirty, $selectedIndex) {
    return function (paddingValues, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(paddingValues) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-827315126, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous> (AppyxMaterial3NavNode.kt:95)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp0_Box$composable = padding(fillMaxSize(Companion_getInstance()), paddingValues);
        var tmp1_Box$composable = null;
        var tmp2_Box$composable = false;
        var tmp3_Box$composable = $composer_0;
        var modifier = tmp0_Box$composable;
        var contentAlignment = tmp1_Box$composable;
        var propagateMinConstraints = tmp2_Box$composable;
        var $composer_1 = tmp3_Box$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(1330882304);
        sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_0().get_TopStart_o4x792_k$();
        if (!(4 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 0);
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
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3_anonymous = $composer_3;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_4 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp4_anonymous_1 = BoxScopeInstance_getInstance();
        var tmp5_anonymous = $composer_4;
        var tmp6_anonymous = 6;
        var $composer_5 = tmp5_anonymous;
        // Inline function 'androidx.compose.foundation.layout.Row$composable' call
        var tmp0_Row$composable = null;
        var tmp1_Row$composable = null;
        var tmp2_Row$composable = null;
        var tmp3_Row$composable = $composer_5;
        var modifier_1 = tmp0_Row$composable;
        var horizontalArrangement = tmp1_Row$composable;
        var verticalAlignment = tmp2_Row$composable;
        var $composer_6 = tmp3_Row$composable;
        $composer_6.startReplaceableGroup_rp6air_k$(-636825856);
        sourceInformation($composer_6, 'CC(Row$composable)P(2,1,3)77@3858L58,78@3921L130:Row.kt#2w3rfo');
        if (!(1 === 0))
          modifier_1 = Companion_getInstance();
        if (!(2 === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!(4 === 0))
          verticalAlignment = Companion_getInstance_0().get_Top_18jj1w_k$();
        var measurePolicy_0 = rowMeasurePolicy$composable(horizontalArrangement, verticalAlignment, $composer_6, 0);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable_0 = modifier_1;
        var tmp1_Layout$composable_0 = $composer_6;
        var tmp2_Layout$composable_0 = 0;
        var modifier_2 = tmp0_Layout$composable_0;
        var $composer_7 = tmp1_Layout$composable_0;
        $composer_7.startReplaceableGroup_rp6air_k$(1725976829);
        sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_2 = Companion_getInstance();
        var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
        var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable_0 = Companion_getInstance_1().get_Constructor_f7ieep_k$();
        var tmp1_ReusableComposeNode$composable_0 = materializerOf(modifier_2);
        var tmp2_ReusableComposeNode$composable_0 = $composer_7;
        var tmp3_ReusableComposeNode$composable_0 = 6 | 7168 & tmp2_Layout$composable_0 << 9;
        var $composer_8 = tmp2_ReusableComposeNode$composable_0;
        var tmp_3 = $composer_8.get_applier_bupu8u_k$();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_8.startReusableNode_jk07k2_k$();
        if ($composer_8.get_inserting_25mlsw_k$()) {
          $composer_8.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable_0);
        } else {
          $composer_8.useNode_inlzo8_k$();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous_2 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss(tmp4_anonymous_2, measurePolicy_0, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss(tmp4_anonymous_2, localMap_0, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set_0 = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
        var tmp$ret$2;
        // Inline function 'kotlin.with' call
        var tmp0_with_0 = _Updater___get_composer__impl__9ty7av(tmp4_anonymous_2);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_4;
        if (tmp0_with_0.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with_0.rememberedValue_4dg93v_k$(), compositeKeyHash_0)) {
          tmp0_with_0.updateRememberedValue_l1colo_k$(compositeKeyHash_0);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous_2).apply_ar56ei_k$(compositeKeyHash_0, tmp0_set_0);
          tmp_4 = Unit_getInstance();
        }
        tmp$ret$2 = tmp_4;
        tmp$ret$3 = tmp$ret$2;
        tmp1_ReusableComposeNode$composable_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & tmp3_ReusableComposeNode$composable_0 >> 3);
        $composer_8.startReplaceableGroup_rp6air_k$(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Row$composable.<anonymous>' call
        var tmp3_anonymous_0 = $composer_8;
        var tmp4_anonymous_3 = 14 & tmp3_ReusableComposeNode$composable_0 >> 9;
        var $composer_9 = tmp3_anonymous_0;
        sourceInformationMarkerStart($composer_9, -1568371859, 'C79@3966L9:Row.kt#2w3rfo');
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp4_anonymous_4 = RowScopeInstance_getInstance();
        var tmp5_anonymous_0 = $composer_9;
        var tmp6_anonymous_0 = 6;
        var $composer_10 = tmp5_anonymous_0;
        $composer_10.startReplaceableGroup_rp6air_k$(1060670857);
        if (this$0.shouldUseNavigationRail$composable_sky9wx_k$($composer_10, 14 & $$dirty >> 3)) {
          this$0.NavigationRail$composable_mmbhw0_k$($selectedIndex, null, $composer_10, 896 & $$dirty << 3, 2);
        }
        $composer_10.endReplaceableGroup_er37p7_k$();
        this$0.CurrentNavItem$composable_2hx70j_k$($composer_10, 14 & $$dirty >> 3);
        sourceInformationMarkerEnd($composer_9);
        $composer_8.endReplaceableGroup_er37p7_k$();
        $composer_8.endNode_3mkr10_k$();
        $composer_7.endReplaceableGroup_er37p7_k$();
        $composer_6.endReplaceableGroup_er37p7_k$();
        sourceInformationMarkerEnd($composer_4);
        $composer_3.endReplaceableGroup_er37p7_k$();
        $composer_3.endNode_3mkr10_k$();
        $composer_2.endReplaceableGroup_er37p7_k$();
        $composer_1.endReplaceableGroup_er37p7_k$();
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp_0 = tmp_5;
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
  function AppyxMaterial3NavNode$View$composable$lambda_1($tmp0_rcvr, $modifier, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.View$composable_e844gk_k$($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AppyxMaterial3NavNode$CurrentNavItem$composable$lambda($tmp0_rcvr, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.CurrentNavItem$composable_2hx70j_k$($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda(this$0, $tmp1_anonymous) {
    return function () {
      onItemSelected(this$0, $tmp1_anonymous);
      return Unit_getInstance();
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda_0($appyxNavItem, $selectedIndex, $tmp1_anonymous) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-920828612, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous> (AppyxMaterial3NavNode.kt:133)');
        }
        $appyxNavItem.get_icon_wont8i_k$()($selectedIndex === $tmp1_anonymous, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda_1($appyxNavItem, $selectedIndex, $tmp1_anonymous) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1200723711, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous> (AppyxMaterial3NavNode.kt:134)');
        }
        $appyxNavItem.get_text_wouvsm_k$()($selectedIndex === $tmp1_anonymous, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda(this$0, $selectedIndex, $$dirty) {
    return function ($this$NavigationBar, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$NavigationBar) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1253860686, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous> (AppyxMaterial3NavNode.kt:129)');
        }
        // Inline function 'kotlin.collections.forEachIndexed' call
        var tmp0_forEachIndexed = this$0.navTargets_1;
        var index = 0;
        var tmp0_iterator = tmp0_forEachIndexed.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp1_anonymous = checkIndexOverflow(tmp1);
          var appyxNavItem = this$0.navTargetResolver_1(item);
          var tmp0_selected = $selectedIndex === tmp1_anonymous;
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_0;
          var tmp1_remember$composable = 14 & $$dirty >> 3;
          var $composer_1 = tmp0_remember$composable;
          $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
          sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache = $composer_1;
          var tmp1_cache = !!($composer_1.changed_ga7h3f_k$(this$0) | $composer_1.changed_ga7h3f_k$(tmp1_anonymous));
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            var tmp$ret$0;
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda(this$0, tmp1_anonymous);
            var value = tmp$ret$0;
            tmp0_cache.updateRememberedValue_l1colo_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = tmp0_let;
          }
          tmp$ret$1 = tmp_1;
          tmp$ret$2 = tmp$ret$1;
          var tmp_2 = tmp$ret$2;
          tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.endReplaceableGroup_er37p7_k$();
          tmp$ret$4 = tmp0;
          var tmp_3 = tmp$ret$4;
          var tmp$ret$11;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$10;
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_4 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_4, -920828612, true, AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda_0(appyxNavItem, $selectedIndex, tmp1_anonymous));
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable_0 = $composer_0;
          var $composer_2 = tmp0_remember$composable_0;
          $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$8;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_0 = $composer_2;
          var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
          var tmp$ret$7;
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$6;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_5;
          if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            var tmp$ret$5;
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$5 = ComposableLambda$invoke$ref_1(dispatchReceiver);
            var value_0 = tmp$ret$5;
            tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = tmp0_let_0;
          }
          tmp$ret$6 = tmp_5;
          tmp$ret$7 = tmp$ret$6;
          var tmp_6 = tmp$ret$7;
          tmp$ret$8 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
          var tmp0_0 = tmp$ret$8;
          $composer_2.endReplaceableGroup_er37p7_k$();
          tmp$ret$9 = tmp0_0;
          tmp$ret$10 = tmp$ret$9;
          tmp$ret$11 = tmp$ret$10;
          var tmp_7 = tmp$ret$11;
          var tmp$ret$18;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$17;
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_8 = $composer_0;
          var dispatchReceiver_0 = composableLambda(tmp_8, 1200723711, true, AppyxMaterial3NavNode$NavigationBar$composable$lambda$lambda_1(appyxNavItem, $selectedIndex, tmp1_anonymous));
          var tmp$ret$16;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable_1 = $composer_0;
          var $composer_3 = tmp0_remember$composable_1;
          $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$15;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_1 = $composer_3;
          var tmp1_cache_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
          var tmp$ret$14;
          // Inline function 'kotlin.let' call
          var tmp0_let_1 = tmp0_cache_1.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$13;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_9;
          if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            var tmp$ret$12;
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$12 = ComposableLambda$invoke$ref_2(dispatchReceiver_0);
            var value_1 = tmp$ret$12;
            tmp0_cache_1.updateRememberedValue_l1colo_k$(value_1);
            tmp_9 = value_1;
          } else {
            tmp_9 = tmp0_let_1;
          }
          tmp$ret$13 = tmp_9;
          tmp$ret$14 = tmp$ret$13;
          var tmp_10 = tmp$ret$14;
          tmp$ret$15 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
          var tmp0_1 = tmp$ret$15;
          $composer_3.endReplaceableGroup_er37p7_k$();
          tmp$ret$16 = tmp0_1;
          tmp$ret$17 = tmp$ret$16;
          tmp$ret$18 = tmp$ret$17;
          var tmp_11 = tmp$ret$18;
          NavigationBarItem$composable($this$NavigationBar, tmp0_selected, tmp_3, tmp_7, null, false, tmp_11, false, null, null, $composer_0, 1575936 | 14 & $dirty, 472);
        }
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp_0 = tmp_12;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function AppyxMaterial3NavNode$NavigationBar$composable$lambda_0($tmp0_rcvr, $selectedIndex, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.NavigationBar$composable_je6jbs_k$($selectedIndex, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda(this$0, $tmp1_anonymous) {
    return function () {
      onItemSelected(this$0, $tmp1_anonymous);
      return Unit_getInstance();
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda_0($appyxNavItem, $selectedIndex, $tmp1_anonymous) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1477867722, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous> (AppyxMaterial3NavNode.kt:149)');
        }
        $appyxNavItem.get_icon_wont8i_k$()($selectedIndex === $tmp1_anonymous, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda_1($appyxNavItem, $selectedIndex, $tmp1_anonymous) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1670248281, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous> (AppyxMaterial3NavNode.kt:150)');
        }
        $appyxNavItem.get_text_wouvsm_k$()($selectedIndex === $tmp1_anonymous, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda(this$0, $selectedIndex, $$dirty) {
    return function ($this$NavigationRail, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(388580959, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous> (AppyxMaterial3NavNode.kt:145)');
        }
        // Inline function 'kotlin.collections.forEachIndexed' call
        var tmp0_forEachIndexed = this$0.navTargets_1;
        var index = 0;
        var tmp0_iterator = tmp0_forEachIndexed.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp1_anonymous = checkIndexOverflow(tmp1);
          var appyxNavItem = this$0.navTargetResolver_1(item);
          var tmp0_selected = $selectedIndex === tmp1_anonymous;
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_0;
          var tmp1_remember$composable = 14 & $$dirty >> 6;
          var $composer_1 = tmp0_remember$composable;
          $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
          sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache = $composer_1;
          var tmp1_cache = !!($composer_1.changed_ga7h3f_k$(this$0) | $composer_1.changed_ga7h3f_k$(tmp1_anonymous));
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_0;
          if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            var tmp$ret$0;
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda(this$0, tmp1_anonymous);
            var value = tmp$ret$0;
            tmp0_cache.updateRememberedValue_l1colo_k$(value);
            tmp_0 = value;
          } else {
            tmp_0 = tmp0_let;
          }
          tmp$ret$1 = tmp_0;
          tmp$ret$2 = tmp$ret$1;
          var tmp_1 = tmp$ret$2;
          tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          var tmp0 = tmp$ret$3;
          $composer_1.endReplaceableGroup_er37p7_k$();
          tmp$ret$4 = tmp0;
          var tmp_2 = tmp$ret$4;
          var tmp$ret$11;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$10;
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_3 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_3, 1477867722, true, AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda_0(appyxNavItem, $selectedIndex, tmp1_anonymous));
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable_0 = $composer_0;
          var $composer_2 = tmp0_remember$composable_0;
          $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$8;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_0 = $composer_2;
          var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
          var tmp$ret$7;
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = tmp0_cache_0.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$6;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_4;
          if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            var tmp$ret$5;
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$5 = ComposableLambda$invoke$ref_4(dispatchReceiver);
            var value_0 = tmp$ret$5;
            tmp0_cache_0.updateRememberedValue_l1colo_k$(value_0);
            tmp_4 = value_0;
          } else {
            tmp_4 = tmp0_let_0;
          }
          tmp$ret$6 = tmp_4;
          tmp$ret$7 = tmp$ret$6;
          var tmp_5 = tmp$ret$7;
          tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
          var tmp0_0 = tmp$ret$8;
          $composer_2.endReplaceableGroup_er37p7_k$();
          tmp$ret$9 = tmp0_0;
          tmp$ret$10 = tmp$ret$9;
          tmp$ret$11 = tmp$ret$10;
          var tmp_6 = tmp$ret$11;
          var tmp$ret$18;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$17;
          // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_7 = $composer_0;
          var dispatchReceiver_0 = composableLambda(tmp_7, -1670248281, true, AppyxMaterial3NavNode$NavigationRail$composable$lambda$lambda_1(appyxNavItem, $selectedIndex, tmp1_anonymous));
          var tmp$ret$16;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable_1 = $composer_0;
          var $composer_3 = tmp0_remember$composable_1;
          $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_3, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$15;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp0_cache_1 = $composer_3;
          var tmp1_cache_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_0);
          var tmp$ret$14;
          // Inline function 'kotlin.let' call
          var tmp0_let_1 = tmp0_cache_1.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$13;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_8;
          if (tmp1_cache_1 ? true : tmp0_let_1 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
            var tmp$ret$12;
            // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$12 = ComposableLambda$invoke$ref_5(dispatchReceiver_0);
            var value_1 = tmp$ret$12;
            tmp0_cache_1.updateRememberedValue_l1colo_k$(value_1);
            tmp_8 = value_1;
          } else {
            tmp_8 = tmp0_let_1;
          }
          tmp$ret$13 = tmp_8;
          tmp$ret$14 = tmp$ret$13;
          var tmp_9 = tmp$ret$14;
          tmp$ret$15 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
          var tmp0_1 = tmp$ret$15;
          $composer_3.endReplaceableGroup_er37p7_k$();
          tmp$ret$16 = tmp0_1;
          tmp$ret$17 = tmp$ret$16;
          tmp$ret$18 = tmp$ret$17;
          var tmp_10 = tmp$ret$18;
          NavigationRailItem$composable(tmp0_selected, tmp_2, tmp_6, null, false, tmp_10, false, null, null, $composer_0, 196992, 472);
        }
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
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function AppyxMaterial3NavNode$NavigationRail$composable$lambda_0($tmp0_rcvr, $selectedIndex, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.NavigationRail$composable_mmbhw0_k$($selectedIndex, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AppyxMaterial3NavNode(buildContext, navTargets, navTargetResolver, initialActiveElement, animationSpec, visualisation, spotlight, view, childKeepMode, childAware, plugins) {
    initialActiveElement = initialActiveElement === VOID ? first(navTargets) : initialActiveElement;
    animationSpec = animationSpec === VOID ? spring(VOID, Spring_getInstance().get_StiffnessHigh_u6kma0_k$()) : animationSpec;
    var tmp;
    if (visualisation === VOID) {
      tmp = AppyxMaterial3NavNode$_init_$lambda_opyuwi(animationSpec);
    } else {
      tmp = visualisation;
    }
    visualisation = tmp;
    spotlight = spotlight === VOID ? new Spotlight(VOID, new SpotlightModel(navTargets, navTargets.indexOf_dcv8dt_k$(initialActiveElement), buildContext.get_savedStateMap_kmirgp_k$()), visualisation) : spotlight;
    view = view === VOID ? new EmptyParentNodeView() : view;
    childKeepMode = childKeepMode === VOID ? Appyx_getInstance().get_defaultChildKeepMode_i4s390_k$() : childKeepMode;
    childAware = childAware === VOID ? new ChildAwareImpl() : childAware;
    var tmp_0;
    if (plugins === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = plugins;
    }
    plugins = tmp_0;
    ParentNode.call(this, spotlight, buildContext, view, childKeepMode, childAware, plugins);
    this.navTargets_1 = navTargets;
    this.navTargetResolver_1 = navTargetResolver;
    this.initialActiveElement_1 = initialActiveElement;
    this.animationSpec_1 = animationSpec;
    this.visualisation_1 = visualisation;
    this.spotlight_1 = spotlight;
    this.$stable_3 = 0;
  }
  protoOf(AppyxMaterial3NavNode).resolve_bir5b8_k$ = function (navTarget, buildContext) {
    return this.navTargetResolver_1(navTarget).get_node_wor8sr_k$()(buildContext);
  };
  protoOf(AppyxMaterial3NavNode).resolve_rgjbzh_k$ = function (interactionTarget, buildContext) {
    return this.resolve_bir5b8_k$(isObject(interactionTarget) ? interactionTarget : THROW_CCE(), buildContext);
  };
  protoOf(AppyxMaterial3NavNode).View_d643kp_k$ = function (modifier) {
    illegalDecoyCallException('View');
  };
  protoOf(AppyxMaterial3NavNode).shouldUseNavigationBar_6cve39_k$ = function () {
    illegalDecoyCallException('shouldUseNavigationBar');
  };
  protoOf(AppyxMaterial3NavNode).shouldUseNavigationRail_g0l8sa_k$ = function () {
    illegalDecoyCallException('shouldUseNavigationRail');
  };
  protoOf(AppyxMaterial3NavNode).CurrentNavItem_o9bjtg_k$ = function () {
    illegalDecoyCallException('CurrentNavItem');
  };
  protoOf(AppyxMaterial3NavNode).NavigationBar_6ns8i9_k$ = function (selectedIndex) {
    illegalDecoyCallException('NavigationBar');
  };
  protoOf(AppyxMaterial3NavNode).NavigationRail_u8k8fx_k$ = function (selectedIndex, modifier) {
    illegalDecoyCallException('NavigationRail');
  };
  protoOf(AppyxMaterial3NavNode).View$composable_e844gk_k$ = function (modifier, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1000200167);
    sourceInformation($composer_0, 'C(View$composable)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1000200167, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable (AppyxMaterial3NavNode.kt:84)');
      }
      var tmp = this.spotlight_1.get_activeIndex_3txs71_k$();
      var selectedIndex = numberToInt(collectAsState$composable(tmp, null, $composer_0, 0, 1).get_value_j01efc_k$());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, -94192512, true, AppyxMaterial3NavNode$View$composable$lambda(this, $dirty, selectedIndex));
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
      var tmp_1;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      var tmp_3 = tmp0;
      var tmp_4 = _FabPosition___init__impl__9ib2hj(0);
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_6 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_7, -827315126, true, AppyxMaterial3NavNode$View$composable$lambda_0(this, $dirty, selectedIndex));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (tmp1_cache_0 ? true : tmp0_let_0 === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.View$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1colo_k$(value_0);
        tmp_8 = value_0;
      } else {
        tmp_8 = tmp0_let_0;
      }
      var tmp_9 = tmp_8;
      var tmp0_0 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      $composer_2.endReplaceableGroup_er37p7_k$();
      Scaffold$composable(null, null, tmp_3, null, null, tmp_4, tmp_5, tmp_6, null, tmp0_0, $composer_0, 805306752, 507);
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
      tmp1_safe_receiver.updateScope_xhrf9y_k$(AppyxMaterial3NavNode$View$composable$lambda_1(this, modifier, $changed));
    }
  };
  protoOf(AppyxMaterial3NavNode).shouldUseNavigationBar$composable_7s119c_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(346489137);
    sourceInformation($composer_0, 'C(shouldUseNavigationBar$composable)');
    if (isTraceInProgress()) {
      traceEventStart(346489137, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.shouldUseNavigationBar$composable (AppyxMaterial3NavNode.kt:113)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalScreenSize();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.get_windowSizeClass_aq7666_k$().equals(WindowSizeClass_COMPACT_getInstance());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  };
  protoOf(AppyxMaterial3NavNode).shouldUseNavigationRail$composable_sky9wx_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1733511868);
    sourceInformation($composer_0, 'C(shouldUseNavigationRail$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1733511868, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.shouldUseNavigationRail$composable (AppyxMaterial3NavNode.kt:117)');
    }
    var tmp0 = !this.shouldUseNavigationBar$composable_7s119c_k$($composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  protoOf(AppyxMaterial3NavNode).CurrentNavItem$composable_2hx70j_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-561196289);
    sourceInformation($composer_0, 'C(CurrentNavItem$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-561196289, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.CurrentNavItem$composable (AppyxMaterial3NavNode.kt:120)');
      }
      var tmp = _Dp___init__impl__ms3zkb(0.0);
      AppyxComponent$composable(this, this.spotlight_1, null, false, null, tmp, null, $composer_0, 14 & $dirty, 62);
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
      tmp1_safe_receiver.updateScope_xhrf9y_k$(AppyxMaterial3NavNode$CurrentNavItem$composable$lambda(this, $changed));
    }
  };
  protoOf(AppyxMaterial3NavNode).NavigationBar$composable_je6jbs_k$ = function (selectedIndex, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1315264482);
    sourceInformation($composer_0, 'C(NavigationBar$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(selectedIndex) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
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
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationBar$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      NavigationBar$composable(null, tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 196608, 31);
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
      tmp1_safe_receiver.updateScope_xhrf9y_k$(AppyxMaterial3NavNode$NavigationBar$composable$lambda_0(this, selectedIndex, $changed));
    }
  };
  protoOf(AppyxMaterial3NavNode).NavigationRail$composable_mmbhw0_k$ = function (selectedIndex, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1980641520);
    sourceInformation($composer_0, 'C(NavigationRail$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(selectedIndex) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (isTraceInProgress()) {
        traceEventStart(1980641520, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable (AppyxMaterial3NavNode.kt:143)');
      }
      var tmp = zIndex(modifier_0._v, FloatCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 388580959, true, AppyxMaterial3NavNode$NavigationRail$composable$lambda(this, selectedIndex, $dirty));
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
      var tmp_3;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_2().get_Empty_i9b85g_k$()) {
        // Inline function 'com.bumble.appyx.utils.material3.AppyxMaterial3NavNode.NavigationRail$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.updateRememberedValue_l1colo_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = tmp0_let;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_er37p7_k$();
      NavigationRail$composable(tmp, tmp_0, tmp_1, null, null, tmp0, $composer_0, 196608, 30);
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
      tmp1_safe_receiver.updateScope_xhrf9y_k$(AppyxMaterial3NavNode$NavigationRail$composable$lambda_0(this, selectedIndex, modifier_0, $changed, $default));
    }
  };
  function AppyxNavItem_init_$Init$(text, unselectedIcon, selectedIcon, iconModifier, node, $this) {
    iconModifier = iconModifier === VOID ? Companion_getInstance() : iconModifier;
    var tmp = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1667485993, true, AppyxNavItem$_init_$lambda_wgzkrv(text)));
    AppyxNavItem.call($this, tmp, ComposableLambda$invoke$ref_8(composableLambdaInstance(-1681736138, true, AppyxNavItem$_init_$lambda_wgzkrv_0(selectedIcon, unselectedIcon, text, iconModifier))), node);
    return $this;
  }
  function AppyxNavItem_init_$Create$(text, unselectedIcon, selectedIcon, iconModifier, node) {
    return AppyxNavItem_init_$Init$(text, unselectedIcon, selectedIcon, iconModifier, node, objectCreate(protoOf(AppyxNavItem)));
  }
  function get_$stableprop_0() {
    return 0;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function AppyxNavItem$_init_$lambda_wgzkrv($text) {
    return function (it, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1667485993, $changed, -1, 'com.bumble.appyx.utils.material3.AppyxNavItem.<init>.<anonymous> (AppyxNavItem.kt:25)');
        }
        var tmp_0 = MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6).get_onPrimaryContainer_60kxp0_k$();
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextOverflow___init__impl__obguoe(0);
        Text$composable($text, null, tmp_0, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, null, $composer_0, 0, 0, 131066);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function AppyxNavItem$_init_$lambda_wgzkrv_0($selectedIcon, $unselectedIcon, $text, $iconModifier) {
    return function (isSelected, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_i0nym2_k$(isSelected) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1681736138, $dirty, -1, 'com.bumble.appyx.utils.material3.AppyxNavItem.<init>.<anonymous> (AppyxNavItem.kt:31)');
        }
        Icon$composable(isSelected ? $selectedIcon : $unselectedIcon, $text, $iconModifier, MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6).get_onPrimaryContainer_60kxp0_k$(), $composer_0, 0, 0);
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
  function AppyxNavItem(text, icon, node) {
    illegalDecoyCallException('<init>');
  }
  protoOf(AppyxNavItem).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(AppyxNavItem).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(AppyxNavItem).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  function AppyxNavItem(text, icon, node) {
    this.text_1 = text;
    this.icon_1 = icon;
    this.node_1 = node;
    this.$stable_1 = 0;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AppyxMaterial3NavNode;
  _.$_$.b = AppyxNavItem_init_$Create$;
  //endregion
  return _;
}));
