(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-animation-core.js', './appyx-interactions-common.js', './compose-multiplatform-core-ui.js', './appyx-utils-multiplatform.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-animation-core.js'), require('./appyx-interactions-common.js'), require('./compose-multiplatform-core-ui.js'), require('./appyx-utils-multiplatform.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'appyx-components-stable-spotlight-commons'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'appyx-components-stable-spotlight-commons'.");
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
    root['appyx-components-stable-spotlight-commons'] = factory(typeof this['appyx-components-stable-spotlight-commons'] === 'undefined' ? {} : this['appyx-components-stable-spotlight-commons'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-animation-core'], this['appyx-interactions-common'], this['compose-multiplatform-core-ui'], this['appyx-utils-multiplatform']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_appyx_appyx_interactions_appyx_interactions, kotlin_org_jetbrains_compose_ui_ui, kotlin_appyx_utils_multiplatform) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var protoOf = kotlin_kotlin.$_$.r9;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var isInterface = kotlin_kotlin.$_$.h9;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var VOID = kotlin_kotlin.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var listOf = kotlin_kotlin.$_$.z5;
  var awaitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var BaseMutableUiState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.c1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var Noop = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.n;
  var BaseAppyxComponent = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.e;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var GestureSettleConfig = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.q;
  var mapState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.i1;
  var emptyMap = kotlin_kotlin.$_$.s4;
  var hashCode = kotlin_kotlin.$_$.c9;
  var equals = kotlin_kotlin.$_$.t8;
  var Parcelable = kotlin_appyx_utils_multiplatform.$_$.a;
  var Enum = kotlin_kotlin.$_$.mc;
  var numberToInt = kotlin_kotlin.$_$.n9;
  var getOrNull = kotlin_kotlin.$_$.e5;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var getNumberHashCode = kotlin_kotlin.$_$.y8;
  var BaseTransitionModel = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.c;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var asElement = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.g1;
  var to = kotlin_kotlin.$_$.ce;
  var mapOf = kotlin_kotlin.$_$.c6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var addAll = kotlin_kotlin.$_$.y3;
  var toSet = kotlin_kotlin.$_$.g7;
  var Mode_IMPOSED_getInstance = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.j1;
  var BaseOperation = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.b;
  var get_lastIndex = kotlin_kotlin.$_$.q5;
  var BaseVisualisation = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.h1;
  var get_DefaultAnimationSpec = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.t;
  var Target = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.w;
  var checkIndexOverflow = kotlin_kotlin.$_$.f4;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qd;
  var MatchedTargetUiState = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.d1;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var Alpha = kotlin_appyx_appyx_interactions_appyx_interactions.$_$.x;
  //endregion
  //region block: pre-declaration
  setMetadataFor(MutableUiState$animateTo$slambda, 'MutableUiState$animateTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MutableUiState$lerpTo$slambda, 'MutableUiState$lerpTo$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($animateToCOROUTINE$0, '$animateToCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(MutableUiState, 'MutableUiState', classMeta, BaseMutableUiState, VOID, VOID, VOID, VOID, [3, 1]);
  setMetadataFor(Spotlight, 'Spotlight', classMeta, BaseAppyxComponent);
  setMetadataFor(Position, 'Position', classMeta, VOID, [Parcelable], Position);
  setMetadataFor(ElementState, 'ElementState', classMeta, Enum);
  setMetadataFor(State, 'State', classMeta, VOID, [Parcelable]);
  setMetadataFor(SpotlightModel, 'SpotlightModel', classMeta, BaseTransitionModel);
  setMetadataFor(Activate, 'Activate', classMeta, BaseOperation);
  setMetadataFor(SpotlightFader, 'SpotlightFader', classMeta, BaseVisualisation);
  setMetadataFor(TargetUiState, 'TargetUiState', classMeta);
  //endregion
  function MutableUiState$animateTo$slambda(this$0, $target, $springSpec, resultContinuation) {
    this.neq_1 = this$0;
    this.oeq_1 = $target;
    this.peq_1 = $springSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$animateTo$slambda).v1b = function ($this$async, $completion) {
    var tmp = this.w1b($this$async, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$animateTo$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$animateTo$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.neq_1.ber_1.bdx(this.oeq_1.eer_1.cdx_1, spring(this.peq_1.i8p_1, this.peq_1.j8p_1), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 2) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableUiState$animateTo$slambda).w1b = function ($this$async, completion) {
    var i = new MutableUiState$animateTo$slambda(this.neq_1, this.oeq_1, this.peq_1, completion);
    i.qeq_1 = $this$async;
    return i;
  };
  function MutableUiState$animateTo$slambda_0(this$0, $target, $springSpec, resultContinuation) {
    var i = new MutableUiState$animateTo$slambda(this$0, $target, $springSpec, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.v1b($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableUiState$lerpTo$slambda(this$0, $start, $end, $fraction, resultContinuation) {
    this.oer_1 = this$0;
    this.per_1 = $start;
    this.qer_1 = $end;
    this.rer_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableUiState$lerpTo$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState$lerpTo$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState$lerpTo$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.oer_1.ber_1.vdx(this.per_1.eer_1, this.qer_1.eer_1, this.rer_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 2) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableUiState$lerpTo$slambda).w1b = function ($this$launch, completion) {
    var i = new MutableUiState$lerpTo$slambda(this.oer_1, this.per_1, this.qer_1, this.rer_1, completion);
    i.ser_1 = $this$launch;
    return i;
  };
  function MutableUiState$lerpTo$slambda_0(this$0, $start, $end, $fraction, resultContinuation) {
    var i = new MutableUiState$lerpTo$slambda(this$0, $start, $end, $fraction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateToCOROUTINE$0(_this__u8e3s4, scope, target, springSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bes_1 = _this__u8e3s4;
    this.ces_1 = scope;
    this.des_1 = target;
    this.ees_1 = springSpec;
  }
  protoOf($animateToCOROUTINE$0).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = awaitAll(listOf(async(this.ces_1, VOID, VOID, MutableUiState$animateTo$slambda_0(this.bes_1, this.des_1, this.ees_1, null))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 2) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function MutableUiState(uiContext, alpha) {
    BaseMutableUiState.call(this, uiContext, listOf(alpha));
    this.ber_1 = alpha;
    this.cer_1 = Companion_instance.c5j(this.ber_1.m5x());
    this.der_1 = 0;
  }
  protoOf(MutableUiState).se3 = function () {
    return this.cer_1;
  };
  protoOf(MutableUiState).fes = function (scope, target, springSpec, $completion) {
    var tmp = new $animateToCOROUTINE$0(this, scope, target, springSpec, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(MutableUiState).we3 = function (scope, target, springSpec, $completion) {
    return this.fes(scope, target instanceof TargetUiState ? target : THROW_CCE(), springSpec, $completion);
  };
  protoOf(MutableUiState).ges = function (target, $completion) {
    return this.ber_1.d8p(target.eer_1.cdx_1, $completion);
  };
  protoOf(MutableUiState).ue3 = function (target, $completion) {
    return this.ges(target instanceof TargetUiState ? target : THROW_CCE(), $completion);
  };
  protoOf(MutableUiState).hes = function (scope, start, end, fraction) {
    launch(scope, VOID, VOID, MutableUiState$lerpTo$slambda_0(this, start, end, fraction, null));
  };
  protoOf(MutableUiState).ve3 = function (scope, start, end, fraction) {
    var tmp = start instanceof TargetUiState ? start : THROW_CCE();
    return this.hes(scope, tmp, end instanceof TargetUiState ? end : THROW_CCE(), fraction);
  };
  function Spotlight$_init_$lambda_30r555(it) {
    return new Noop();
  }
  function Spotlight$activeIndex$lambda(it) {
    return it.ldk().jes_1;
  }
  function Spotlight$activeElement$lambda(it) {
    return it.ldk().kes_1;
  }
  function Spotlight(scope, model, visualisation, gestureFactory, animationSpec, gestureSettleConfig, disableAnimations, isDebug) {
    scope = scope === VOID ? CoroutineScope_0(SupervisorJob().ef(Dispatchers_getInstance().lp())) : scope;
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
    var tmp_1 = model.ndf();
    tmp_0.ret_1 = mapState(tmp_1, scope, VOID, Spotlight$activeIndex$lambda);
    var tmp_2 = this;
    var tmp_3 = model.ndf();
    tmp_2.set_1 = mapState(tmp_3, scope, VOID, Spotlight$activeElement$lambda);
    this.tet_1 = 0;
  }
  var ElementState_CREATED_instance;
  var ElementState_STANDARD_instance;
  var ElementState_DESTROYED_instance;
  var ElementState_entriesInitialized;
  function ElementState_initEntries() {
    if (ElementState_entriesInitialized)
      return Unit_instance;
    ElementState_entriesInitialized = true;
    ElementState_CREATED_instance = new ElementState('CREATED', 0);
    ElementState_STANDARD_instance = new ElementState('STANDARD', 1);
    ElementState_DESTROYED_instance = new ElementState('DESTROYED', 2);
  }
  function Position(elements) {
    var tmp;
    if (elements === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = elements;
    }
    elements = tmp;
    this.uet_1 = elements;
    this.vet_1 = 8;
  }
  protoOf(Position).wet = function (elements) {
    return new Position(elements);
  };
  protoOf(Position).toString = function () {
    return 'Position(elements=' + this.uet_1 + ')';
  };
  protoOf(Position).hashCode = function () {
    return hashCode(this.uet_1);
  };
  protoOf(Position).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Position))
      return false;
    var tmp0_other_with_cast = other instanceof Position ? other : THROW_CCE();
    if (!equals(this.uet_1, tmp0_other_with_cast.uet_1))
      return false;
    return true;
  };
  function ElementState(name, ordinal) {
    Enum.call(this, name, ordinal);
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
    this.ies_1 = positions;
    this.jes_1 = activeIndex;
    var tmp = this;
    var tmp0_safe_receiver = getOrNull(this.ies_1, numberToInt(this.jes_1));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uet_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.firstNotNullOf' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
        // Inline function 'kotlin.collections.iterator' call
        var tmp0_iterator = tmp1_safe_receiver.q2().v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'com.bumble.appyx.components.spotlight.State.activeElement.<anonymous>' call
          var result = element.t2().cd6_1;
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
    tmp.kes_1 = tmp_0;
    this.les_1 = 0;
  }
  protoOf(State).xet = function (positions, activeIndex) {
    return new State(positions, activeIndex);
  };
  protoOf(State).yet = function (positions, activeIndex, $super) {
    positions = positions === VOID ? this.ies_1 : positions;
    activeIndex = activeIndex === VOID ? this.jes_1 : activeIndex;
    return $super === VOID ? this.xet(positions, activeIndex) : $super.xet.call(this, positions, activeIndex);
  };
  protoOf(State).toString = function () {
    return 'State(positions=' + this.ies_1 + ', activeIndex=' + this.jes_1 + ')';
  };
  protoOf(State).hashCode = function () {
    var result = hashCode(this.ies_1);
    result = imul(result, 31) + getNumberHashCode(this.jes_1) | 0;
    return result;
  };
  protoOf(State).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof State))
      return false;
    var tmp0_other_with_cast = other instanceof State ? other : THROW_CCE();
    if (!equals(this.ies_1, tmp0_other_with_cast.ies_1))
      return false;
    if (!equals(this.jes_1, tmp0_other_with_cast.jes_1))
      return false;
    return true;
  };
  function SpotlightModel(items, initialActiveIndex, savedStateMap) {
    initialActiveIndex = initialActiveIndex === VOID ? 0.0 : initialActiveIndex;
    BaseTransitionModel.call(this, VOID, VOID, savedStateMap);
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(items, 10));
    var tmp0_iterator = items.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.initialState.<anonymous>' call
      var tmp$ret$0 = new Position(mapOf(to(asElement(item), ElementState_STANDARD_getInstance())));
      destination.s(tmp$ret$0);
    }
    tmp.geu_1 = new State(destination, initialActiveIndex);
    this.heu_1 = 0;
  }
  protoOf(SpotlightModel).w8z = function () {
    return this.geu_1;
  };
  protoOf(SpotlightModel).ieu = function (_this__u8e3s4, element) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.ies_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.removeDestroyedElement.<anonymous>' call
      // Inline function 'kotlin.collections.filterNot' call
      // Inline function 'kotlin.collections.filterNotTo' call
      var this_1 = item.uet_1;
      var destination_0 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = this_1.q2().v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.removeDestroyedElement.<anonymous>.<anonymous>' call
        if (!(element_0.t2().equals(element) ? element_0.u2().equals(ElementState_DESTROYED_getInstance()) : false)) {
          destination_0.r2(element_0.t2(), element_0.u2());
        }
      }
      var newElements = destination_0;
      var tmp$ret$4 = item.wet(newElements);
      destination.s(tmp$ret$4);
    }
    var newPositions = destination;
    return _this__u8e3s4.yet(newPositions);
  };
  protoOf(SpotlightModel).tdm = function (_this__u8e3s4, element) {
    return this.ieu(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE(), element);
  };
  protoOf(SpotlightModel).jeu = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.ies_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.removeDestroyedElements.<anonymous>' call
      // Inline function 'kotlin.collections.filterNot' call
      // Inline function 'kotlin.collections.filterNotTo' call
      var this_1 = item.uet_1;
      var destination_0 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = this_1.q2().v();
      while (tmp0_iterator_0.w()) {
        var element = tmp0_iterator_0.y();
        // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.removeDestroyedElements.<anonymous>.<anonymous>' call
        if (!element.u2().equals(ElementState_DESTROYED_getInstance())) {
          destination_0.r2(element.t2(), element.u2());
        }
      }
      var newElements = destination_0;
      var tmp$ret$4 = item.wet(newElements);
      destination.s(tmp$ret$4);
    }
    var newPositions = destination;
    return _this__u8e3s4.yet(newPositions);
  };
  protoOf(SpotlightModel).cdm = function (_this__u8e3s4) {
    return this.jeu(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(SpotlightModel).keu = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = _this__u8e3s4.ies_1;
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.availableElements.<anonymous>' call
      var list = element.uet_1.q2();
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = destination.v();
    while (tmp0_iterator_0.w()) {
      var element_0 = tmp0_iterator_0.y();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.availableElements.<anonymous>' call
      if (!element_0.u2().equals(ElementState_DESTROYED_getInstance())) {
        destination_0.s(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_0, 10));
    var tmp0_iterator_1 = destination_0.v();
    while (tmp0_iterator_1.w()) {
      var item = tmp0_iterator_1.y();
      // Inline function 'com.bumble.appyx.components.spotlight.SpotlightModel.availableElements.<anonymous>' call
      var tmp$ret$6 = item.t2();
      destination_1.s(tmp$ret$6);
    }
    return toSet(destination_1);
  };
  protoOf(SpotlightModel).odl = function (_this__u8e3s4) {
    return this.keu(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  function activate(_this__u8e3s4, index, animationSpec, mode) {
    animationSpec = animationSpec === VOID ? _this__u8e3s4.fd8_1 : animationSpec;
    mode = mode === VOID ? Mode_IMPOSED_getInstance() : mode;
    _this__u8e3s4.edg(new Activate(index, mode), animationSpec);
  }
  function Activate(index, mode) {
    mode = mode === VOID ? Mode_IMPOSED_getInstance() : mode;
    BaseOperation.call(this);
    this.meu_1 = index;
    this.neu_1 = mode;
    this.oeu_1 = 8;
  }
  protoOf(Activate).gdk = function (_set____db54di) {
    this.neu_1 = _set____db54di;
  };
  protoOf(Activate).fdg = function () {
    return this.neu_1;
  };
  protoOf(Activate).peu = function (state) {
    var tmp;
    if (!(this.meu_1 === state.jes_1)) {
      var containsUpper = get_lastIndex(state.ies_1);
      var containsArg = this.meu_1;
      tmp = 0.0 <= containsArg ? containsArg <= containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Activate).rdk = function (state) {
    return this.peu(state instanceof State ? state : THROW_CCE());
  };
  protoOf(Activate).qeu = function (baseLineState) {
    return baseLineState;
  };
  protoOf(Activate).pdk = function (baseLineState) {
    return this.qeu(baseLineState instanceof State ? baseLineState : THROW_CCE());
  };
  protoOf(Activate).reu = function (fromState) {
    return fromState.yet(VOID, this.meu_1);
  };
  protoOf(Activate).qdk = function (fromState) {
    return this.reu(fromState instanceof State ? fromState : THROW_CCE());
  };
  function SpotlightFader(uiContext, defaultAnimationSpec) {
    defaultAnimationSpec = defaultAnimationSpec === VOID ? get_DefaultAnimationSpec() : defaultAnimationSpec;
    BaseVisualisation.call(this, uiContext, defaultAnimationSpec);
    this.eev_1 = new TargetUiState(new Target(0.0));
    this.fev_1 = new TargetUiState(new Target(1.0));
    this.gev_1 = 0;
  }
  protoOf(SpotlightFader).hev = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.flatMapIndexed' call
    // Inline function 'kotlin.collections.flatMapIndexedTo' call
    var this_0 = _this__u8e3s4.ies_1;
    var destination = ArrayList_init_$Create$_0();
    var index = 0;
    var tmp0_iterator = this_0.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'com.bumble.appyx.components.spotlight.ui.fader.SpotlightFader.toUiTargets.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.collections.map' call
      var this_1 = element.uet_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(this_1.n());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = this_1.q2().v();
      while (tmp0_iterator_0.w()) {
        var item = tmp0_iterator_0.y();
        // Inline function 'com.bumble.appyx.components.spotlight.ui.fader.SpotlightFader.toUiTargets.<anonymous>.<anonymous>' call
        var tmp = item.t2();
        var tmp_0;
        if (index_0 === numberToInt(_this__u8e3s4.jes_1)) {
          var tmp_1;
          switch (item.u2().j9_1) {
            case 0:
              tmp_1 = this.eev_1;
              break;
            case 1:
              tmp_1 = this.fev_1;
              break;
            case 2:
              tmp_1 = this.eev_1;
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp_0 = tmp_1;
        } else {
          tmp_0 = this.eev_1;
        }
        var tmp$ret$1 = new MatchedTargetUiState(tmp, TargetUiState_init_$Create$(tmp_0));
        destination_0.s(tmp$ret$1);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  };
  protoOf(SpotlightFader).ueb = function (_this__u8e3s4) {
    return this.hev(_this__u8e3s4 instanceof State ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(SpotlightFader).iev = function (uiContext, targetUiState) {
    return targetUiState.jev(uiContext);
  };
  protoOf(SpotlightFader).veb = function (uiContext, targetUiState) {
    return this.iev(uiContext, targetUiState instanceof TargetUiState ? targetUiState : THROW_CCE());
  };
  function TargetUiState_init_$Init$(base, $this) {
    TargetUiState.call($this, base.eer_1);
    return $this;
  }
  function TargetUiState_init_$Create$(base) {
    return TargetUiState_init_$Init$(base, objectCreate(protoOf(TargetUiState)));
  }
  function TargetUiState(alpha) {
    this.eer_1 = alpha;
    this.fer_1 = 0;
  }
  protoOf(TargetUiState).jev = function (uiContext) {
    return new MutableUiState(uiContext, new Alpha(uiContext.hdu_1, this.eer_1));
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = activate;
  _.$_$.b = SpotlightFader;
  _.$_$.c = SpotlightModel;
  _.$_$.d = Spotlight;
  //endregion
  return _;
}));

//# sourceMappingURL=appyx-components-stable-spotlight-commons.js.map
