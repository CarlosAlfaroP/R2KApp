(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-animation-core.js', './appyx-interactions-common.js', './compose-multiplatform-core-ui.js', './appyx-utils-multiplatform.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-animation-core.js'), require('./appyx-interactions-common.js'), require('./compose-multiplatform-core-ui.js'), require('./appyx-utils-multiplatform.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-spotlight-commons'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'appyx-components-stable-spotlight-commons'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-spotlight-commons'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'appyx-components-stable-spotlight-commons'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-spotlight-commons'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'appyx-components-stable-spotlight-commons'.");
    }
    if (typeof this['appyx-interactions-common'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-spotlight-commons'. Its dependency 'appyx-interactions-common' was not found. Please, check whether 'appyx-interactions-common' is loaded prior to 'appyx-components-stable-spotlight-commons'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-spotlight-commons'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'appyx-components-stable-spotlight-commons'.");
    }
    if (typeof this['appyx-utils-multiplatform'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-spotlight-commons'. Its dependency 'appyx-utils-multiplatform' was not found. Please, check whether 'appyx-utils-multiplatform' is loaded prior to 'appyx-components-stable-spotlight-commons'.");
    }
    root['appyx-components-stable-spotlight-commons'] = factory(typeof this['appyx-components-stable-spotlight-commons'] === 'undefined' ? {} : this['appyx-components-stable-spotlight-commons'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-animation-core'], this['appyx-interactions-common'], this['compose-multiplatform-core-ui'], this['appyx-utils-multiplatform']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_appyx_appyx_interactions_appyx_interactions, kotlin_org_jetbrains_compose_ui_ui, kotlin_appyx_utils_multiplatform) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.eb;
  var Unit_getInstance = kotlin_kotlin.$_$.v4;
  var protoOf = kotlin_kotlin.$_$.jd;
  var THROW_CCE = kotlin_kotlin.$_$.xg;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var isInterface = kotlin_kotlin.$_$.uc;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var VOID = kotlin_kotlin.$_$.li;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.oa;
  var classMeta = kotlin_kotlin.$_$.xb;
  var setMetadataFor = kotlin_kotlin.$_$.kd;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j2;
  var listOf = kotlin_kotlin.$_$.t8;
  var awaitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var BaseMutableUiState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.d1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.i8;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q2;
  var SuspendFunction1 = kotlin_kotlin.$_$.gb;
  var Noop = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.o;
  var BaseAppyxComponent = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.f;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var GestureSettleConfig = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.r;
  var mapState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.l1;
  var THROW_ISE = kotlin_kotlin.$_$.yg;
  var enumEntries = kotlin_kotlin.$_$.mb;
  var emptyMap = kotlin_kotlin.$_$.k7;
  var hashCode = kotlin_kotlin.$_$.jc;
  var equals = kotlin_kotlin.$_$.bc;
  var Parcelable = kotlin_appyx_utils_multiplatform.$_$.a;
  var Enum = kotlin_kotlin.$_$.lg;
  var numberToInt = kotlin_kotlin.$_$.fd;
  var getOrNull = kotlin_kotlin.$_$.z7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var get_lastIndex = kotlin_kotlin.$_$.l8;
  var getNumberHashCode = kotlin_kotlin.$_$.fc;
  var BaseTransitionModel = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.c;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.l6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var asElement = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.j1;
  var to = kotlin_kotlin.$_$.ii;
  var mapOf = kotlin_kotlin.$_$.w8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var addAll = kotlin_kotlin.$_$.b6;
  var toSet = kotlin_kotlin.$_$.fa;
  var operation$default = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.r1;
  var onSettled$default = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.q1;
  var canApply = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.d;
  var Mode_IMPOSED_getInstance = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.m1;
  var BaseOperation = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.b;
  var BaseVisualisation = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.k1;
  var get_DefaultAnimationSpec = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.u;
  var Target = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.x;
  var checkIndexOverflow = kotlin_kotlin.$_$.j6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wh;
  var MatchedTargetUiState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.e1;
  var map = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.i1;
  var mapKeyframes = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.h1;
  var objectCreate = kotlin_kotlin.$_$.hd;
  var Alpha = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.y;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MutableUiState$animateTo$slambda, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(MutableUiState$lerpTo$slambda, 'MutableUiState$lerpTo$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($animateToCOROUTINE$0, '$animateToCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(MutableUiState, 'MutableUiState', classMeta, BaseMutableUiState, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(Spotlight, 'Spotlight', classMeta, BaseAppyxComponent);
  setMetadataFor(Position, 'Position', classMeta, VOID, [Parcelable]);
  setMetadataFor(ElementState, 'ElementState', classMeta, Enum);
  setMetadataFor(State, 'State', classMeta, VOID, [Parcelable]);
  setMetadataFor(SpotlightModel, 'SpotlightModel', classMeta, BaseTransitionModel);
  setMetadataFor(Activate, 'Activate', classMeta, BaseOperation);
  setMetadataFor(SpotlightFader, 'SpotlightFader', classMeta, BaseVisualisation);
  setMetadataFor(TargetUiState, 'TargetUiState', classMeta);
  //endregion
  function get_$stableprop() {
    return 0;
  }
  function MutableUiState$animateTo$slambda(this$0, $target, $springSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$target_1 = $target;
    this.$springSpec_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda).invoke_d6gbsu_k$ = function ($this$async, $completion) {
    var tmp = this.create_b6qu53_k$($this$async, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$animateTo$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.alpha_1.animateTo$default_3sgzyg_k$(this.$target_1.get_alpha_iooth1_k$().get_value_j01efc_k$(), spring(this.$springSpec_1.get_dampingRatio_syjss2_k$(), this.$springSpec_1.get_stiffness_dt2sgm_k$()), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutableUiState$animateTo$slambda).create_b6qu53_k$ = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda(this.this$0__1, this.$target_1, this.$springSpec_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(MutableUiState$animateTo$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$animateTo$slambda_0(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d6gbsu_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$lerpTo$slambda(this$0, $start, $end, $fraction, resultContinuation) {
    this.this$0__1 = this$0;
    this.$start_1 = $start;
    this.$end_1 = $end;
    this.$fraction_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$lerpTo$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState$lerpTo$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$lerpTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.alpha_1.lerpTo_udm63t_k$(this.$start_1.get_alpha_iooth1_k$(), this.$end_1.get_alpha_iooth1_k$(), this.$fraction_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutableUiState$lerpTo$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new MutableUiState$lerpTo$slambda(this.this$0__1, this.$start_1, this.$end_1, this.$fraction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MutableUiState$lerpTo$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutableUiState$lerpTo$slambda_0(this$0, $start, $end, $fraction, resultContinuation) {
    var i = new MutableUiState$lerpTo$slambda(this$0, $start, $end, $fraction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateToCOROUTINE$0(_this__u8e3s4, scope, target, springSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.scope_1 = scope;
    this.target_1 = target;
    this.springSpec_1 = springSpec;
  }
  protoOf($animateToCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = awaitAll(listOf(async(this.scope_1, VOID, VOID, MutableUiState$animateTo$slambda_0(this._this__u8e3s4__1, this.target_1, this.springSpec_1, null))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function MutableUiState(uiContext, alpha) {
    BaseMutableUiState.call(this, uiContext, listOf(alpha));
    this.alpha_1 = alpha;
    this.combinedMotionPropertyModifier_1 = Companion_getInstance().then_5qw5wu_k$(this.alpha_1.get_modifier_t1pq5c_k$());
    this.$stable_2 = 0;
  }
  protoOf(MutableUiState).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(MutableUiState).get_combinedMotionPropertyModifier_g33v2o_k$ = function () {
    return this.combinedMotionPropertyModifier_1;
  };
  protoOf(MutableUiState).animateTo_59s56r_k$ = function (scope, target, springSpec, $completion) {
    var tmp = new $animateToCOROUTINE$0(this, scope, target, springSpec, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutableUiState).animateTo_rmuc3b_k$ = function (scope, target, springSpec, $completion) {
    return this.animateTo_59s56r_k$(scope, target instanceof TargetUiState ? target : THROW_CCE(), springSpec, $completion);
  };
  protoOf(MutableUiState).snapTo_lo765h_k$ = function (target, $completion) {
    return this.alpha_1.snapTo_fkfduh_k$(target.get_alpha_iooth1_k$().get_value_j01efc_k$(), $completion);
  };
  protoOf(MutableUiState).snapTo_pci3i7_k$ = function (target, $completion) {
    return this.snapTo_lo765h_k$(target instanceof TargetUiState ? target : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState).lerpTo_2ksmr6_k$ = function (scope, start, end, fraction) {
    launch(scope, VOID, VOID, MutableUiState$lerpTo$slambda_0(this, start, end, fraction, null));
  };
  protoOf(MutableUiState).lerpTo_maz9ag_k$ = function (scope, start, end, fraction) {
    var tmp = start instanceof TargetUiState ? start : THROW_CCE();
    return this.lerpTo_2ksmr6_k$(scope, tmp, end instanceof TargetUiState ? end : THROW_CCE(), fraction);
  };
  function get_$stableprop_0() {
    return 0;
  }
  function Spotlight$_init_$lambda_30r555(it) {
    return new Noop();
  }
  function Spotlight$activeIndex$lambda(it) {
    return it.get_currentTargetState_l0vn00_k$().get_activeIndex_3txs71_k$();
  }
  function Spotlight$activeElement$lambda(it) {
    return it.get_currentTargetState_l0vn00_k$().get_activeElement_mt5gj1_k$();
  }
  function Spotlight(scope, model, visualisation, gestureFactory, animationSpec, gestureSettleConfig, disableAnimations, isDebug) {
    scope = scope === VOID ? CoroutineScope_0(SupervisorJob().plus_rgw9wi_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$())) : scope;
    var tmp;
    if (gestureFactory === VOID) {
      tmp = Spotlight$_init_$lambda_30r555;
    } else {
      tmp = gestureFactory;
    }
    gestureFactory = tmp;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    gestureSettleConfig = gestureSettleConfig === VOID ? new GestureSettleConfig(0.2, animationSpec, animationSpec) : gestureSettleConfig;
    disableAnimations = disableAnimations === VOID ? false : disableAnimations;
    isDebug = isDebug === VOID ? false : isDebug;
    BaseAppyxComponent.call(this, scope, model, visualisation, gestureFactory, animationSpec, gestureSettleConfig, VOID, VOID, disableAnimations, isDebug);
    var tmp_0 = this;
    var tmp_1 = model.get_output_hs4j62_k$();
    tmp_0.activeIndex_1 = mapState(tmp_1, scope, VOID, Spotlight$activeIndex$lambda);
    var tmp_2 = this;
    var tmp_3 = model.get_output_hs4j62_k$();
    tmp_2.activeElement_1 = mapState(tmp_3, scope, VOID, Spotlight$activeElement$lambda);
    this.$stable_2 = 0;
  }
  protoOf(Spotlight).get_activeIndex_3txs71_k$ = function () {
    return this.activeIndex_1;
  };
  protoOf(Spotlight).get_activeElement_mt5gj1_k$ = function () {
    return this.activeElement_1;
  };
  function get_$stableprop_1() {
    return 8;
  }
  var ElementState_CREATED_instance;
  var ElementState_STANDARD_instance;
  var ElementState_DESTROYED_instance;
  function values() {
    return [ElementState_CREATED_getInstance(), ElementState_STANDARD_getInstance(), ElementState_DESTROYED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'CREATED':
        return ElementState_CREATED_getInstance();
      case 'STANDARD':
        return ElementState_STANDARD_getInstance();
      case 'DESTROYED':
        return ElementState_DESTROYED_getInstance();
      default:
        ElementState_initEntries();
        THROW_ISE();
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ElementState_entriesInitialized;
  function ElementState_initEntries() {
    if (ElementState_entriesInitialized)
      return Unit_getInstance();
    ElementState_entriesInitialized = true;
    ElementState_CREATED_instance = new ElementState('CREATED', 0);
    ElementState_STANDARD_instance = new ElementState('STANDARD', 1);
    ElementState_DESTROYED_instance = new ElementState('DESTROYED', 2);
  }
  var $ENTRIES;
  function Position(elements) {
    var tmp;
    if (elements === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = elements;
    }
    elements = tmp;
    this.elements_1 = elements;
    this.$stable_1 = 8;
  }
  protoOf(Position).get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  protoOf(Position).component1_7eebsc_k$ = function () {
    return this.elements_1;
  };
  protoOf(Position).copy_g6jclk_k$ = function (elements) {
    return new Position(elements);
  };
  protoOf(Position).copy$default_ddxs34_k$ = function (elements, $super) {
    elements = elements === VOID ? this.elements_1 : elements;
    return $super === VOID ? this.copy_g6jclk_k$(elements) : $super.copy_g6jclk_k$.call(this, elements);
  };
  protoOf(Position).toString = function () {
    return 'Position(elements=' + this.elements_1 + ')';
  };
  protoOf(Position).hashCode = function () {
    return hashCode(this.elements_1);
  };
  protoOf(Position).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!equals(this.elements_1, tmp0_other_with_cast.elements_1))
      return false;
    return true;
  };
  function ElementState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_$stableprop_2() {
    return 0;
  }
  function ElementState_CREATED_getInstance() {
    ElementState_initEntries();
    return ElementState_CREATED_instance;
  }
  function ElementState_STANDARD_getInstance() {
    ElementState_initEntries();
    return ElementState_STANDARD_instance;
  }
  function ElementState_DESTROYED_getInstance() {
    ElementState_initEntries();
    return ElementState_DESTROYED_instance;
  }
  function State(positions, activeIndex) {
    this.positions_1 = positions;
    this.activeIndex_1 = activeIndex;
    var tmp = this;
    var tmp0_safe_receiver = getOrNull(this.positions_1, numberToInt(this.activeIndex_1));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.elements_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.firstNotNullOf' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
        // Inline function 'kotlin.collections.iterator' call
        var tmp0_iterator = tmp1_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.bumble.appyx.components.spotlight.State.activeElement.<anonymous>' call
          var result = element.get_key_18j28a_k$().get_interactionTarget_ay5ie_k$();
          if (!(result == null)) {
            tmp$ret$2 = result;
            break $l$block;
          }
        }
        tmp$ret$2 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$2;
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        throw NoSuchElementException_init_$Create$('No element of the map was transformed to a non-null value.');
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp_0 = tmp_1;
    }
    tmp.activeElement_1 = tmp_0;
    this.$stable_1 = 0;
  }
  protoOf(State).get_positions_ya7scf_k$ = function () {
    return this.positions_1;
  };
  protoOf(State).get_activeIndex_3txs71_k$ = function () {
    return this.activeIndex_1;
  };
  protoOf(State).hasPrevious_qh0629_k$ = function () {
    return this.activeIndex_1 >= 1;
  };
  protoOf(State).hasNext_bitz1p_k$ = function () {
    return this.activeIndex_1 <= (get_lastIndex(this.positions_1) - 1 | 0);
  };
  protoOf(State).get_activeElement_mt5gj1_k$ = function () {
    return this.activeElement_1;
  };
  protoOf(State).component1_7eebsc_k$ = function () {
    return this.positions_1;
  };
  protoOf(State).component2_7eebsb_k$ = function () {
    return this.activeIndex_1;
  };
  protoOf(State).copy_lt3gg8_k$ = function (positions, activeIndex) {
    return new State(positions, activeIndex);
  };
  protoOf(State).copy$default_btiyir_k$ = function (positions, activeIndex, $super) {
    positions = positions === VOID ? this.positions_1 : positions;
    activeIndex = activeIndex === VOID ? this.activeIndex_1 : activeIndex;
    return $super === VOID ? this.copy_lt3gg8_k$(positions, activeIndex) : $super.copy_lt3gg8_k$.call(this, positions, activeIndex);
  };
  protoOf(State).toString = function () {
    return 'State(positions=' + this.positions_1 + ', activeIndex=' + this.activeIndex_1 + ')';
  };
  protoOf(State).hashCode = function () {
    var result = hashCode(this.positions_1);
    result = imul(result, 31) + getNumberHashCode(this.activeIndex_1) | 0;
    return result;
  };
  protoOf(State).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof State))
      return false;
    var tmp0_other_with_cast = other instanceof State ? other : THROW_CCE();
    if (!equals(this.positions_1, tmp0_other_with_cast.positions_1))
      return false;
    if (!equals(this.activeIndex_1, tmp0_other_with_cast.activeIndex_1))
      return false;
    return true;
  };
  function get_$stableprop_3() {
    return 0;
  }
  function SpotlightModel(items, initialActiveIndex, savedStateMap) {
    initialActiveIndex = initialActiveIndex === VOID ? 0.0 : initialActiveIndex;
    BaseTransitionModel.call(this, VOID, VOID, savedStateMap);
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(items, 10));
    var tmp0_iterator = items.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.initialState.<anonymous>' call
      tmp$ret$0 = new Position(mapOf(to(asElement(item), ElementState_STANDARD_getInstance())));
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp.initialState_1 = new State(tmp0_mapTo, initialActiveIndex);
    this.$stable_2 = 0;
  }
  protoOf(SpotlightModel).get_initialState_2eu9l6_k$ = function () {
    return this.initialState_1;
  };
  protoOf(SpotlightModel).removeDestroyedElement_5hve0w_k$ = function (_this__u8e3s4, element) {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = _this__u8e3s4.positions_1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$4;
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.removeDestroyedElement.<anonymous>' call
      // Inline function 'kotlin.collections.filterNot' call
      var tmp0_filterNot = item.elements_1;
      // Inline function 'kotlin.collections.filterNotTo' call
      var tmp0_filterNotTo = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = tmp0_filterNot.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.removeDestroyedElement.<anonymous>.<anonymous>' call
        if (!(element_0.get_key_18j28a_k$().equals(element) ? element_0.get_value_j01efc_k$().equals(ElementState_DESTROYED_getInstance()) : false)) {
          tmp0_filterNotTo.put_3mhbri_k$(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
        }
      }
      var newElements = tmp0_filterNotTo;
      tmp$ret$4 = item.copy_g6jclk_k$(newElements);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$4);
    }
    var newPositions = tmp0_mapTo;
    return _this__u8e3s4.copy$default_btiyir_k$(newPositions);
  };
  protoOf(SpotlightModel).removeDestroyedElement_o1hi3m_k$ = function (_this__u8e3s4, element) {
    return this.removeDestroyedElement_5hve0w_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE(), element);
  };
  protoOf(SpotlightModel).removeDestroyedElements_dr1q4x_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = _this__u8e3s4.positions_1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$4;
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.removeDestroyedElements.<anonymous>' call
      // Inline function 'kotlin.collections.filterNot' call
      var tmp0_filterNot = item.elements_1;
      // Inline function 'kotlin.collections.filterNotTo' call
      var tmp0_filterNotTo = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = tmp0_filterNot.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.removeDestroyedElements.<anonymous>.<anonymous>' call
        if (!element.get_value_j01efc_k$().equals(ElementState_DESTROYED_getInstance())) {
          tmp0_filterNotTo.put_3mhbri_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
        }
      }
      var newElements = tmp0_filterNotTo;
      tmp$ret$4 = item.copy_g6jclk_k$(newElements);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$4);
    }
    var newPositions = tmp0_mapTo;
    return _this__u8e3s4.copy$default_btiyir_k$(newPositions);
  };
  protoOf(SpotlightModel).removeDestroyedElements_puyw99_k$ = function (_this__u8e3s4) {
    return this.removeDestroyedElements_dr1q4x_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(SpotlightModel).availableElements_1you05_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = _this__u8e3s4.positions_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.availableElements.<anonymous>' call
      var list = element.elements_1.get_entries_p20ztl_k$();
      addAll(tmp0_flatMapTo, list);
    }
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp0_flatMapTo.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.availableElements.<anonymous>' call
      if (!element_0.get_value_j01efc_k$().equals(ElementState_DESTROYED_getInstance())) {
        tmp0_filterTo.add_1j60pz_k$(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_filterTo, 10));
    var tmp0_iterator_1 = tmp0_filterTo.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.availableElements.<anonymous>' call
      tmp$ret$6 = item.get_key_18j28a_k$();
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$6);
    }
    return toSet(tmp0_mapTo);
  };
  protoOf(SpotlightModel).availableElements_xleoop_k$ = function (_this__u8e3s4) {
    return this.availableElements_1you05_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(SpotlightModel).destroyedElements_tylut1_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = _this__u8e3s4.positions_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.destroyedElements.<anonymous>' call
      var list = element.elements_1.get_entries_p20ztl_k$();
      addAll(tmp0_flatMapTo, list);
    }
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp0_flatMapTo.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.destroyedElements.<anonymous>' call
      if (element_0.get_value_j01efc_k$().equals(ElementState_DESTROYED_getInstance())) {
        tmp0_filterTo.add_1j60pz_k$(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_filterTo, 10));
    var tmp0_iterator_1 = tmp0_filterTo.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$6;
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.destroyedElements.<anonymous>' call
      tmp$ret$6 = item.get_key_18j28a_k$();
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$6);
    }
    return toSet(tmp0_mapTo);
  };
  protoOf(SpotlightModel).destroyedElements_yyaxwp_k$ = function (_this__u8e3s4) {
    return this.destroyedElements_tylut1_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  function activate(_this__u8e3s4, index, animationSpec, mode) {
    animationSpec = animationSpec === VOID ? _this__u8e3s4.get_defaultAnimationSpec_dmgjrt_k$() : animationSpec;
    mode = mode === VOID ? Mode_IMPOSED_getInstance() : mode;
    _this__u8e3s4.operation_hvc77k_k$(new Activate(index, mode), animationSpec);
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function get_$stableprop_4() {
    return 8;
  }
  function Activate(index, mode) {
    mode = mode === VOID ? Mode_IMPOSED_getInstance() : mode;
    BaseOperation.call(this);
    this.index_1 = index;
    this.mode_1 = mode;
    this.$stable_2 = 8;
  }
  protoOf(Activate).set_mode_370sob_k$ = function (_set____db54di) {
    this.mode_1 = _set____db54di;
  };
  protoOf(Activate).get_mode_woqlt8_k$ = function () {
    return this.mode_1;
  };
  protoOf(Activate).isApplicable_jqi9j4_k$ = function (state) {
    var tmp;
    if (!(this.index_1 === state.get_activeIndex_3txs71_k$())) {
      var containsUpper = get_lastIndex(state.get_positions_ya7scf_k$());
      var containsArg = this.index_1;
      tmp = 0.0 <= containsArg ? containsArg <= containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Activate).isApplicable_8peua_k$ = function (state) {
    return this.isApplicable_jqi9j4_k$(state instanceof State ? state : THROW_CCE());
  };
  protoOf(Activate).createFromState_he4w3i_k$ = function (baseLineState) {
    return baseLineState;
  };
  protoOf(Activate).createFromState_kmc50c_k$ = function (baseLineState) {
    return this.createFromState_he4w3i_k$(baseLineState instanceof State ? baseLineState : THROW_CCE());
  };
  protoOf(Activate).createTargetState_mlxqu3_k$ = function (fromState) {
    return fromState.copy$default_btiyir_k$(VOID, this.index_1);
  };
  protoOf(Activate).createTargetState_svdyv1_k$ = function (fromState) {
    return this.createTargetState_mlxqu3_k$(fromState instanceof State ? fromState : THROW_CCE());
  };
  function _get_hidden__i558wv($this) {
    return $this.hidden_1;
  }
  function _get_visible__9o6k2p($this) {
    return $this.visible_1;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function SpotlightFader(uiContext, defaultAnimationSpec) {
    defaultAnimationSpec = defaultAnimationSpec === VOID ? get_DefaultAnimationSpec() : defaultAnimationSpec;
    BaseVisualisation.call(this, uiContext, defaultAnimationSpec);
    this.hidden_1 = new TargetUiState(new Target(0.0));
    this.visible_1 = new TargetUiState(new Target(1.0));
    this.$stable_2 = 0;
  }
  protoOf(SpotlightFader).toUiTargets_hel0w8_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMapIndexed' call
    var tmp0_flatMapIndexed = _this__u8e3s4.get_positions_ya7scf_k$();
    // Inline function 'kotlin.collections.flatMapIndexedTo' call
    var tmp0_flatMapIndexedTo = ArrayList_init_$Create$_0();
    var index = 0;
    var tmp0_iterator = tmp0_flatMapIndexed.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.bumble.appyx.components.spotlight.ui.fader.SpotlightFader.toUiTargets.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp1_anonymous = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = element.get_elements_vxwh8g_k$();
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.get_size_woubt6_k$());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = tmp0_map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'com.bumble.appyx.components.spotlight.ui.fader.SpotlightFader.toUiTargets.<anonymous>.<anonymous>' call
        var tmp = item.get_key_18j28a_k$();
        var tmp_0;
        if (tmp1_anonymous === numberToInt(_this__u8e3s4.get_activeIndex_3txs71_k$())) {
          var tmp_1;
          switch (item.get_value_j01efc_k$().get_ordinal_ip24qg_k$()) {
            case 0:
              tmp_1 = this.hidden_1;
              break;
            case 1:
              tmp_1 = this.visible_1;
              break;
            case 2:
              tmp_1 = this.hidden_1;
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp_0 = tmp_1;
        } else {
          tmp_0 = this.hidden_1;
        }
        tmp$ret$1 = new MatchedTargetUiState(tmp, TargetUiState_init_$Create$(tmp_0));
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$1);
      }
      var list = tmp0_mapTo;
      addAll(tmp0_flatMapIndexedTo, list);
    }
    return tmp0_flatMapIndexedTo;
  };
  protoOf(SpotlightFader).toUiTargets_864b6u_k$ = function (_this__u8e3s4) {
    return this.toUiTargets_hel0w8_k$(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(SpotlightFader).mutableUiStateFor_p098k8_k$ = function (uiContext, targetUiState) {
    return targetUiState.toMutableState_a27pvd_k$(uiContext);
  };
  protoOf(SpotlightFader).mutableUiStateFor_t781ji_k$ = function (uiContext, targetUiState) {
    return this.mutableUiStateFor_p098k8_k$(uiContext, targetUiState instanceof TargetUiState ? targetUiState : THROW_CCE());
  };
  function TargetUiState_init_$Init$(base, $this) {
    TargetUiState.call($this, base.alpha_1);
    return $this;
  }
  function TargetUiState_init_$Create$(base) {
    return TargetUiState_init_$Init$(base, objectCreate(protoOf(TargetUiState)));
  }
  function get_$stableprop_6() {
    return 0;
  }
  function TargetUiState(alpha) {
    this.alpha_1 = alpha;
    this.$stable_1 = 0;
  }
  protoOf(TargetUiState).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(TargetUiState).toMutableState_a27pvd_k$ = function (uiContext) {
    return new MutableUiState(uiContext, new Alpha(uiContext.get_coroutineScope_5k7h45_k$(), this.alpha_1));
  };
  //region block: post-declaration
  protoOf(SpotlightModel).operation$default_1t9tz9_k$ = operation$default;
  protoOf(SpotlightModel).onSettled$default_fzps67_k$ = onSettled$default;
  protoOf(SpotlightModel).canApply_jz0xjw_k$ = canApply;
  protoOf(SpotlightFader).map_xy39ku_k$ = map;
  protoOf(SpotlightFader).mapKeyframes_5z4kk_k$ = mapKeyframes;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = activate;
  _.$_$.b = SpotlightFader;
  _.$_$.c = SpotlightModel;
  _.$_$.d = Spotlight;
  //endregion
  return _;
}));
