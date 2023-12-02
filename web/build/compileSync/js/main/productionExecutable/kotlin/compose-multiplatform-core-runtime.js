(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    root['compose-multiplatform-core-runtime'] = factory(typeof this['compose-multiplatform-core-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.r9;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var toString = kotlin_kotlin.$_$.v9;
  var classMeta = kotlin_kotlin.$_$.p8;
  var VOID = kotlin_kotlin.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Companion_instance = kotlin_kotlin.$_$.c3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.h2;
  var createFailure = kotlin_kotlin.$_$.hd;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xd;
  var intercepted = kotlin_kotlin.$_$.r7;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var get = kotlin_kotlin.$_$.z7;
  var fold = kotlin_kotlin.$_$.y7;
  var minusKey = kotlin_kotlin.$_$.a8;
  var plus = kotlin_kotlin.$_$.c8;
  var isInterface = kotlin_kotlin.$_$.h9;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var Enum = kotlin_kotlin.$_$.mc;
  var IllegalStateException = kotlin_kotlin.$_$.qc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.k1;
  var captureStack = kotlin_kotlin.$_$.j8;
  var defineProp = kotlin_kotlin.$_$.r8;
  var equals = kotlin_kotlin.$_$.t8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var fill = kotlin_kotlin.$_$.u4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var rotateLeft = kotlin_kotlin.$_$.td;
  var hashCode = kotlin_kotlin.$_$.c9;
  var emptyList = kotlin_kotlin.$_$.r4;
  var toMutableList = kotlin_kotlin.$_$.e7;
  var MutableCollection = kotlin_kotlin.$_$.t3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var rotateRight = kotlin_kotlin.$_$.ud;
  var sortWith = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var to = kotlin_kotlin.$_$.ce;
  var plus_0 = kotlin_kotlin.$_$.l6;
  var compareValues = kotlin_kotlin.$_$.j7;
  var Long = kotlin_kotlin.$_$.rc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var lazy = kotlin_kotlin.$_$.pd;
  var firstOrNull = kotlin_kotlin.$_$.x4;
  var compareTo = kotlin_kotlin.$_$.q8;
  var KMutableProperty1 = kotlin_kotlin.$_$.ua;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a9;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var isArray = kotlin_kotlin.$_$.f9;
  var Set = kotlin_kotlin.$_$.x3;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var plus_1 = kotlin_kotlin.$_$.h6;
  var Exception = kotlin_kotlin.$_$.oc;
  var copyToArray = kotlin_kotlin.$_$.p4;
  var Map = kotlin_kotlin.$_$.s3;
  var fillArrayVal = kotlin_kotlin.$_$.u8;
  var toString_0 = kotlin_kotlin.$_$.be;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.w2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f2;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Element = kotlin_kotlin.$_$.b8;
  var getStringHashCode = kotlin_kotlin.$_$.b9;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var Collection = kotlin_kotlin.$_$.o3;
  var addAll = kotlin_kotlin.$_$.y3;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var toList = kotlin_kotlin.$_$.b7;
  var flatten = kotlin_kotlin.$_$.c5;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.y;
  var CancellationException = kotlin_kotlin.$_$.o7;
  var addSuppressed = kotlin_kotlin.$_$.ed;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t;
  var removeFirst = kotlin_kotlin.$_$.n6;
  var arrayCopy = kotlin_kotlin.$_$.z3;
  var fill_0 = kotlin_kotlin.$_$.v4;
  var first = kotlin_kotlin.$_$.z4;
  var last = kotlin_kotlin.$_$.v5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t2;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var copyOf = kotlin_kotlin.$_$.o4;
  var joinToString = kotlin_kotlin.$_$.n5;
  var copyOf_0 = kotlin_kotlin.$_$.n4;
  var List = kotlin_kotlin.$_$.q3;
  var checkIndexOverflow = kotlin_kotlin.$_$.f4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var sortWith_0 = kotlin_kotlin.$_$.s6;
  var RandomAccess = kotlin_kotlin.$_$.w3;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var AbstractList = kotlin_kotlin.$_$.g3;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var coerceAtMost = kotlin_kotlin.$_$.la;
  var arrayIterator = kotlin_kotlin.$_$.i8;
  var AbstractMutableList = kotlin_kotlin.$_$.j3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var indexOf = kotlin_kotlin.$_$.g5;
  var lastIndexOf = kotlin_kotlin.$_$.s5;
  var AbstractMap = kotlin_kotlin.$_$.h3;
  var AbstractMutableMap = kotlin_kotlin.$_$.k3;
  var MutableMap = kotlin_kotlin.$_$.v3;
  var MutableEntry = kotlin_kotlin.$_$.u3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var AbstractMutableSet = kotlin_kotlin.$_$.l3;
  var AbstractMutableCollection = kotlin_kotlin.$_$.i3;
  var Entry = kotlin_kotlin.$_$.r3;
  var AbstractSet = kotlin_kotlin.$_$.m3;
  var AbstractCollection = kotlin_kotlin.$_$.f3;
  var objectCreate = kotlin_kotlin.$_$.p9;
  var until = kotlin_kotlin.$_$.sa;
  var step = kotlin_kotlin.$_$.ra;
  var countOneBits = kotlin_kotlin.$_$.gd;
  var takeLowestOneBit = kotlin_kotlin.$_$.vd;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var longArray = kotlin_kotlin.$_$.j9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Char = kotlin_kotlin.$_$.jc;
  var isCharSequence = kotlin_kotlin.$_$.g9;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var singleOrNull = kotlin_kotlin.$_$.q6;
  var contains = kotlin_kotlin.$_$.h4;
  var plus_2 = kotlin_kotlin.$_$.k6;
  var primitiveArrayConcat = kotlin_kotlin.$_$.c;
  var SequenceScope = kotlin_kotlin.$_$.za;
  var intArrayIterator = kotlin_kotlin.$_$.d9;
  var Companion_getInstance = kotlin_kotlin.$_$.b3;
  var toIntArray = kotlin_kotlin.$_$.a7;
  var sequence = kotlin_kotlin.$_$.gb;
  var anyToString = kotlin_kotlin.$_$.h8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g4;
  var mapCapacity = kotlin_kotlin.$_$.b6;
  var coerceAtLeast = kotlin_kotlin.$_$.ha;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var toSet = kotlin_kotlin.$_$.g7;
  var listOf = kotlin_kotlin.$_$.z5;
  var listOf_0 = kotlin_kotlin.$_$.a6;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.e;
  var toDuration = kotlin_kotlin.$_$.gc;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.a2;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.z;
  var println = kotlin_kotlin.$_$.g8;
  var printStackTrace = kotlin_kotlin.$_$.sd;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.v;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_instance_0;
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], BroadcastFrameClock, VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function changed(value) {
    return this.u1z(value);
  }
  function changed_0(value) {
    return this.v1z(value);
  }
  function changed_1(value) {
    return this.w1z(value);
  }
  function changed_2(value) {
    return this.x1z(value);
  }
  function changedInstance(value) {
    return this.t1z(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionContextImpl, 'CompositionContextImpl', classMeta, CompositionContext);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ComposerImpl$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(RecomposeScopeOwner, 'RecomposeScopeOwner', interfaceMeta);
  setMetadataFor(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(SkippableUpdater, 'SkippableUpdater', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(ResultRecord, 'ResultRecord', classMeta, StateRecord, VOID, ResultRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(DerivedSnapshotState, 'DerivedSnapshotState', classMeta, VOID, [StateObject, DerivedState]);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta, VOID, VOID, DisposableEffectScope);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException, VOID, LeftCompositionCancellationException);
  setMetadataFor(CompositionScopedCoroutineScopeCanceller, 'CompositionScopedCoroutineScopeCanceller', classMeta, VOID, [RememberObserver]);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(MutableState, 'MutableState', interfaceMeta);
  setMetadataFor(ProduceStateScope, 'ProduceStateScope', interfaceMeta, VOID, [MutableState, CoroutineScope_0], VOID, VOID, VOID, [1]);
  setMetadataFor(ProduceStateScopeImpl, 'ProduceStateScopeImpl', classMeta, VOID, [ProduceStateScope, MutableState], VOID, VOID, VOID, [1]);
  setMetadataFor(produceState$composable$slambda, 'produceState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$2, '$awaitWorkAvailableCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(SlotTable, 'SlotTable', classMeta, VOID, VOID, SlotTable);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta, VOID, VOID, PrioritySet);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  function set_value(value) {
    this.r2m(value);
  }
  function get_value() {
    return this.s2m();
  }
  setMetadataFor(MutableFloatState, 'MutableFloatState', interfaceMeta, VOID, [MutableState]);
  setMetadataFor(FloatStateStateRecord, 'FloatStateStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotMutableState, 'SnapshotMutableState', interfaceMeta, VOID, [MutableState]);
  setMetadataFor(SnapshotMutableFloatStateImpl, 'SnapshotMutableFloatStateImpl', classMeta, VOID, [StateObject, MutableFloatState, SnapshotMutableState]);
  setMetadataFor(collectAsState$composable$slambda$slambda$slambda, 'collectAsState$composable$slambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(collectAsState$composable$slambda$slambda, 'collectAsState$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(collectAsState$composable$slambda$slambda_1, 'collectAsState$composable$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(collectAsState$composable$slambda, 'collectAsState$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(snapshotFlow$slambda, 'snapshotFlow$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  function set_value_0(value) {
    this.o2p(value);
  }
  function get_value_0() {
    return this.p2p();
  }
  setMetadataFor(MutableIntState, 'MutableIntState', interfaceMeta, VOID, [MutableState]);
  setMetadataFor(IntStateStateRecord, 'IntStateStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotMutableIntStateImpl, 'SnapshotMutableIntStateImpl', classMeta, VOID, [StateObject, MutableIntState, SnapshotMutableState]);
  function set_value_1(value) {
    this.w2p(value);
  }
  function get_value_1() {
    return this.x2p();
  }
  setMetadataFor(MutableLongState, 'MutableLongState', interfaceMeta, VOID, [MutableState]);
  setMetadataFor(LongStateStateRecord, 'LongStateStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotMutableLongStateImpl, 'SnapshotMutableLongStateImpl', classMeta, VOID, [StateObject, MutableLongState, SnapshotMutableState]);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(ReferentialEqualityPolicy, 'ReferentialEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(NeverEqualPolicy, 'NeverEqualPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, VOID, [StateObject, SnapshotMutableState]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta, VOID, VOID, SnapshotThreadLocal);
  setMetadataFor(IntStack, 'IntStack', classMeta, VOID, VOID, IntStack);
  setMetadataFor(Stack, 'Stack', classMeta, VOID, VOID, Stack);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta, VOID, VOID, SynchronizedObject);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta);
  setMetadataFor(IdentityArrayIntMap, 'IdentityArrayIntMap', classMeta, VOID, VOID, IdentityArrayIntMap);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta, VOID, VOID, IdentityArrayMap);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set], IdentityArraySet);
  setMetadataFor(IdentityScopeMap, 'IdentityScopeMap', classMeta, VOID, VOID, IdentityScopeMap);
  setMetadataFor(VectorListIterator, 'VectorListIterator', classMeta);
  setMetadataFor(MutableVectorList, 'MutableVectorList', classMeta, VOID, [MutableCollection, List]);
  setMetadataFor(SubList, 'SubList', classMeta, VOID, [MutableCollection, List]);
  setMetadataFor(MutableVector, 'MutableVector', classMeta, VOID, [RandomAccess]);
  function subList(fromIndex, toIndex) {
    return new SubList_0(this, fromIndex, toIndex);
  }
  setMetadataFor(ImmutableList, 'ImmutableList', interfaceMeta, VOID, [List, Collection]);
  setMetadataFor(SubList_0, 'SubList', classMeta, AbstractList, [ImmutableList, AbstractList]);
  setMetadataFor(AbstractListIterator, 'AbstractListIterator', classMeta);
  setMetadataFor(SingleElementListIterator, 'SingleElementListIterator', classMeta, AbstractListIterator);
  setMetadataFor(AbstractPersistentList, 'AbstractPersistentList', classMeta, AbstractList, [ImmutableList, Collection, AbstractList]);
  setMetadataFor(BufferIterator, 'BufferIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVector, 'PersistentVector', classMeta, AbstractPersistentList, [ImmutableList, Collection, AbstractPersistentList]);
  setMetadataFor(PersistentVectorBuilder, 'PersistentVectorBuilder', classMeta, AbstractMutableList, [AbstractMutableList, MutableCollection, List]);
  setMetadataFor(PersistentVectorIterator, 'PersistentVectorIterator', classMeta, AbstractListIterator);
  setMetadataFor(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', classMeta, AbstractListIterator);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(SmallPersistentVector, 'SmallPersistentVector', classMeta, AbstractPersistentList, [ImmutableList, AbstractPersistentList]);
  setMetadataFor(TrieIterator, 'TrieIterator', classMeta, AbstractListIterator);
  setMetadataFor(ObjectRef, 'ObjectRef', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [MutableCollection, Set, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [MutableCollection, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeKeysIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeValuesIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator, VOID, TrieNodeEntriesIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Collection, Set, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Collection, Set, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Collection, Set]);
  setMetadataFor(Links, 'Links', classMeta, VOID, VOID, Links_init_$Create$);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(ListImplementation, 'ListImplementation', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta, VOID, VOID, MutabilityOwnership);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta, VOID, VOID, DeltaCounter);
  setMetadataFor(Builder, 'Builder', classMeta, PersistentHashMapBuilder, [PersistentHashMapBuilder, MutableMap]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', classMeta, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(TransparentObserverMutableSnapshot, 'TransparentObserverMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(ReadonlySnapshot, 'ReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(NestedReadonlySnapshot, 'NestedReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(TransparentObserverSnapshot, 'TransparentObserverSnapshot', classMeta, Snapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta, VOID, VOID, SnapshotDoubleIndexHeap);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateListStateRecord, 'StateListStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateList, 'SnapshotStateList', classMeta, VOID, [MutableCollection, List, StateObject], SnapshotStateList);
  setMetadataFor(StateListIterator, 'StateListIterator', classMeta);
  setMetadataFor(SubList$listIterator$1, VOID, classMeta);
  setMetadataFor(SubList_1, 'SubList', classMeta, VOID, [MutableCollection, List]);
  setMetadataFor(StateMapStateRecord, 'StateMapStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateMap, 'SnapshotStateMap', classMeta, VOID, [MutableMap, StateObject], SnapshotStateMap);
  setMetadataFor(SnapshotMapSet, 'SnapshotMapSet', classMeta, VOID, [MutableCollection, Set]);
  setMetadataFor(SnapshotMapEntrySet, 'SnapshotMapEntrySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapKeySet, 'SnapshotMapKeySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapValueSet, 'SnapshotMapValueSet', classMeta, SnapshotMapSet);
  setMetadataFor(StateMapMutableEntriesIterator$next$1, VOID, classMeta, VOID, [MutableEntry]);
  setMetadataFor(StateMapMutableIterator, 'StateMapMutableIterator', classMeta);
  setMetadataFor(StateMapMutableEntriesIterator, 'StateMapMutableEntriesIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(StateMapMutableKeysIterator, 'StateMapMutableKeysIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(StateMapMutableValuesIterator, 'StateMapMutableValuesIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(ObservedScopeMap, 'ObservedScopeMap', classMeta);
  setMetadataFor(SnapshotStateObserver, 'SnapshotStateObserver', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta, VOID, VOID, SnapshotWeakSet);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$5, '$withFrameNanosCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], MonotonicClockImpl, VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta, VOID, VOID, IntMap);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.i1w_1 = applier;
    this.j1w_1 = offset;
    this.k1w_1 = 0;
  }
  protoOf(OffsetApplier).z1v = function () {
    return this.i1w_1.z1v();
  };
  protoOf(OffsetApplier).c1w = function (node) {
    this.k1w_1 = this.k1w_1 + 1 | 0;
    this.i1w_1.c1w(node);
  };
  protoOf(OffsetApplier).d1w = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.k1w_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.k1w_1 = this.k1w_1 - 1 | 0;
    this.i1w_1.d1w();
  };
  protoOf(OffsetApplier).e1w = function (index, instance) {
    this.i1w_1.e1w(index + (this.k1w_1 === 0 ? this.j1w_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).f1w = function (index, instance) {
    this.i1w_1.f1w(index + (this.k1w_1 === 0 ? this.j1w_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).g1w = function (index, count) {
    this.i1w_1.g1w(index + (this.k1w_1 === 0 ? this.j1w_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).h1w = function (from, to, count) {
    var effectiveOffset = this.k1w_1 === 0 ? this.j1w_1 : 0;
    this.i1w_1.h1w(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  protoOf(OffsetApplier).c1 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!false) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.clear.<anonymous>' call
      var message = 'Clear is not valid on OffsetApplier';
      composeRuntimeError(toString(message));
    }
  };
  function AbstractApplier(root) {
    this.l1w_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m1w_1 = ArrayList_init_$Create$();
    this.n1w_1 = this.l1w_1;
    this.o1w_1 = 8;
  }
  protoOf(AbstractApplier).p1w = function (_set____db54di) {
    this.n1w_1 = _set____db54di;
  };
  protoOf(AbstractApplier).z1v = function () {
    return this.n1w_1;
  };
  protoOf(AbstractApplier).q1w = function (node) {
    this.m1w_1.s(this.z1v());
    this.p1w(node);
  };
  protoOf(AbstractApplier).c1w = function (node) {
    return this.q1w((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).d1w = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.m1w_1.e1()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.p1w(this.m1w_1.k1(this.m1w_1.n() - 1 | 0));
  };
  protoOf(AbstractApplier).c1 = function () {
    this.m1w_1.c1();
    this.p1w(this.l1w_1);
    this.r1w();
  };
  function FrameAwaiter(onFrame, continuation) {
    this.s1w_1 = onFrame;
    this.t1w_1 = continuation;
  }
  protoOf(FrameAwaiter).u1w = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var value = this.s1w_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.t1w_1.v6(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w1w_1;
    if (!($this.x1w_1 == null))
      return Unit_instance;
    $this.x1w_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.y1w_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.i1(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.t1w_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.v6(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.y1w_1.c1();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.w1w_1;
      var tmp = this$0.y1w_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.t(tmp_0);
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.v1w_1 = onNewAwaiters;
    this.w1w_1 = createSynchronizedObject();
    this.x1w_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y1w_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z1w_1 = ArrayList_init_$Create$();
    this.a1x_1 = 8;
  }
  protoOf(BroadcastFrameClock).b1x = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w1w_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.y1w_1.e1();
  };
  protoOf(BroadcastFrameClock).c1x = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w1w_1;
    var toResume = this.y1w_1;
    this.y1w_1 = this.z1w_1;
    this.z1w_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.i1(i).u1w(timeNanos);
      }
       while (inductionVariable < last);
    toResume.c1();
  };
  protoOf(BroadcastFrameClock).d1x = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jl();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.w1w_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.x1w_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.v6(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.y1w_1.e1();
      var tmp = this.y1w_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.s(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.kl(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.v1w_1 == null) : false) {
        try {
          this.v1w_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.ll();
  };
  function $get_currentCompositeKeyHash$$composable_u3vbzj($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1422486212, $changed, -1, 'androidx.compose.runtime.$get-currentCompositeKeyHash$$composable (Composables.kt:224)');
    }
    var tmp0 = $composer_0.e1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function rememberCompositionContext$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(1739317627);
    sourceInformation($composer_0, 'C(rememberCompositionContext$composable):Composables.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1739317627, $changed, -1, 'androidx.compose.runtime.rememberCompositionContext$composable (Composables.kt:480)');
    }
    var tmp0 = $composer_0.g1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function $get_currentRecomposeScope$$composable_f9ntk0($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -186676516, 'C($get-currentRecomposeScope$$composable):Composables.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-186676516, $changed, -1, 'androidx.compose.runtime.$get-currentRecomposeScope$$composable (Composables.kt:192)');
    }
    var tmp0_elvis_lhs = $composer_0.i1x();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'no recompose scope found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var scope = tmp;
    $composer_0.j1x(scope);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return scope;
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    _init_properties_Composer_kt__bmp4g0();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    _init_properties_Composer_kt__bmp4g0();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.i1y();
    while (tmp0_iterator.w()) {
      var slot = tmp0_iterator.y();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.j1y(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.k1y(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.fp();
      }
    }
    _this__u8e3s4.s1y();
  }
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.t1y_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.f1z(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.g1z();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.f20_1 = compositionLocal;
    this.g20_1 = value;
    this.h20_1 = canOverride;
    this.i20_1 = 0;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.e1z(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) ? it.j20() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k20(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l20();
    }
  }
  function MovableContent() {
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.m20_1 = content;
    this.n20_1 = parameter;
    this.o20_1 = composition;
    this.p20_1 = slotTable;
    this.q20_1 = anchor;
    this.r20_1 = invalidations;
    this.s20_1 = locals;
    this.t20_1 = 8;
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.u20_1 = message;
  }
  protoOf(ComposeRuntimeError).y6 = function () {
    return this.u20_1;
  };
  function _set_compositionLocalScope__ya1b9q($this, _set____db54di) {
    var this_0 = $this.a21_1;
    compositionLocalScope$factory();
    this_0.h1a(_set____db54di);
    return Unit_instance;
  }
  function _get_compositionLocalScope__ulge9q($this) {
    // Inline function 'androidx.compose.runtime.getValue' call
    var this_0 = $this.a21_1;
    compositionLocalScope$factory_0();
    return this_0.u2();
  }
  function startRoot($this) {
    $this.j22_1 = $this.e21_1.m23();
    startGroup($this, 100);
    $this.d21_1.o23();
    $this.w21_1 = $this.d21_1.p23();
    $this.z21_1.s23(asInt($this.y21_1));
    $this.y21_1 = $this.t1z($this.w21_1);
    $this.n22_1 = null;
    if (!$this.r21_1) {
      $this.r21_1 = $this.d21_1.t23();
    }
    var tmp0_safe_receiver = read($this.w21_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.s($this.e21_1);
      $this.d21_1.u23(tmp0_safe_receiver);
    }
    startGroup($this, $this.d21_1.v23());
  }
  function endRoot($this) {
    endGroup($this);
    $this.d21_1.w23();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.j22_1.j24();
    $this.s21_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.j21_1.c1();
    $this.m21_1.c1();
    $this.o21_1.c1();
    $this.v21_1.c1();
    $this.z21_1.c1();
    $this.x21_1.c1();
    if (!$this.j22_1.c24_1) {
      $this.j22_1.j24();
    }
    if (!$this.l22_1.g1y_1) {
      $this.l22_1.j24();
    }
    $this.q22_1.c1();
    createFreshInsertTable($this);
    $this.s22_1 = 0;
    $this.c22_1 = 0;
    $this.t21_1 = false;
    $this.r22_1 = false;
    $this.a22_1 = false;
    $this.h22_1 = false;
    $this.s21_1 = false;
    $this.b22_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_1().m24_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_1().m24_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.n21_1 = $this.n21_1 + $this.j22_1.p24() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.n22_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.j22_1.f24_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.r22_1 ? $this.m22_1 : false) {
      var current = $this.l22_1.f1y_1;
      while (current > 0) {
        if ($this.l22_1.s24(current) === 202 ? equals($this.l22_1.r24(current), get_compositionLocalMap()) : false) {
          var tmp = $this.l22_1.q24(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.n22_1 = providers;
          return providers;
        }
        current = $this.l22_1.t24(current);
      }
    }
    if ($this.j22_1.n() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.j22_1.s24(current_0) === 202 ? equals($this.j22_1.r24(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.x21_1.i1(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.j22_1.q24(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.n22_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.j22_1.t24(current_0);
      }
    }
    $this.n22_1 = $this.w21_1;
    return $this.w21_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = parentScope.u24();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    this_0.s2(currentProviders);
    var providerScope = this_0.v24();
    startGroup_0($this, 204, get_providerMaps());
    $this.t1z(providerScope);
    $this.t1z(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function ensureWriter($this) {
    if ($this.l22_1.g1y_1) {
      $this.l22_1 = $this.k22_1.w24();
      $this.l22_1.h1z();
      $this.m22_1 = false;
      $this.n22_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.l22_1.g1y_1);
    $this.k22_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var this_0 = $this.k22_1.w24();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    this_0.j24();
    tmp.l22_1 = this_0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.j22_1.j1z();
    } else {
      if (!(data == null) ? !($this.j22_1.x24() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.j22_1.y24();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().m24_1));
    if ($this.r22_1) {
      $this.j22_1.z24();
      var startIndex = $this.l22_1.e1y_1;
      if (isNode) {
        $this.l22_1.c25(key, Companion_getInstance_0().t1y_1);
      } else if (!(data == null)) {
        var tmp = $this.l22_1;
        tmp.b25(key, objectKey == null ? Companion_getInstance_0().t1y_1 : objectKey, data);
      } else {
        var tmp_0 = $this.l22_1;
        tmp_0.a25(key, objectKey == null ? Companion_getInstance_0().t1y_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.k21_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.j25(insertKeyInfo, $this.l21_1 - tmp2_safe_receiver.e25_1 | 0);
        tmp2_safe_receiver.k25(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_1().n24_1))) {
      tmp_1 = $this.a22_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.k21_1 == null) {
      var slotKey = $this.j22_1.l25();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.j22_1.n25()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.k21_1 = new Pending($this.j22_1.m25(), $this.l21_1);
      }
    }
    var pending = $this.k21_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.o25(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.k25(keyInfo);
        var location = keyInfo.t25_1;
        $this.l21_1 = pending.w25(keyInfo) + pending.e25_1 | 0;
        var relativePosition = pending.x25(keyInfo);
        var currentRelativePosition = relativePosition - pending.f25_1 | 0;
        pending.y25(relativePosition, pending.f25_1);
        recordReaderMoving($this, location);
        $this.j22_1.z25(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.j22_1.z24();
        $this.r22_1 = true;
        $this.n22_1 = null;
        ensureWriter($this);
        $this.l22_1.p25();
        var startIndex_0 = $this.l22_1.e1y_1;
        if (isNode) {
          $this.l22_1.c25(key, Companion_getInstance_0().t1y_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.l22_1;
          tmp_2.b25(key, objectKey == null ? Companion_getInstance_0().t1y_1 : objectKey, data);
        } else {
          var tmp_3 = $this.l22_1;
          tmp_3.a25(key, objectKey == null ? Companion_getInstance_0().t1y_1 : objectKey);
        }
        $this.p22_1 = $this.l22_1.q25(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.j25(insertKeyInfo_0, $this.l21_1 - pending.e25_1 | 0);
        pending.k25(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.l21_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.j21_1.a26($this.k21_1);
    $this.k21_1 = newPending;
    $this.m21_1.s23($this.l21_1);
    if (isNode)
      $this.l21_1 = 0;
    $this.o21_1.s23($this.n21_1);
    $this.n21_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.j21_1.b26();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.f25_1 = previousPending.f25_1 + 1 | 0;
    }
    $this.k21_1 = previousPending;
    $this.l21_1 = $this.m21_1.b26() + expectedNodeCount | 0;
    $this.n21_1 = $this.o21_1.b26() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.r22_1) {
      var parent = $this.l22_1.f1y_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.l22_1.s24(parent), $this.l22_1.r24(parent), $this.l22_1.q24(parent));
    } else {
      var parent_0 = $this.j22_1.f24_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.j22_1.s24(parent_0), $this.j22_1.r24(parent_0), $this.j22_1.q24(parent_0));
    }
    var expectedNodeCount = $this.n21_1;
    var pending = $this.k21_1;
    if (!(pending == null) ? pending.d25_1.n() > 0 : false) {
      var previous = pending.d25_1;
      var current = pending.c26();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.n();
      var previousIndex = 0;
      var previousEnd = previous.n();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.i1(previousIndex);
        if (!usedKeys.r(previousInfo)) {
          var deleteOffset = pending.w25(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.e25_1 | 0, previousInfo.u25_1);
          pending.d26(previousInfo.t25_1, 0);
          recordReaderMoving($this, previousInfo.t25_1);
          $this.j22_1.z25(previousInfo.t25_1);
          recordDelete($this);
          $this.j22_1.p24();
          removeRange($this.u21_1, previousInfo.t25_1, previousInfo.t25_1 + $this.j22_1.e26(previousInfo.t25_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.r(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.i1(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.w25(currentInfo);
            placedKeys.s(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.f26(currentInfo);
              recordMoveNode($this, nodePosition + pending.e25_1 | 0, nodeOffset + pending.e25_1 | 0, updatedCount);
              pending.g26(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.f26(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.n() > 0) {
        recordReaderMoving($this, $this.j22_1.h26());
        $this.j22_1.h1z();
      }
    }
    var removeIndex = $this.l21_1;
    while (!$this.j22_1.i26()) {
      var startSlot = $this.j22_1.d24_1;
      recordDelete($this);
      var nodesToRemove = $this.j22_1.p24();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.u21_1, startSlot, $this.j22_1.d24_1);
    }
    var inserting = $this.r22_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.j22_1.k26();
      var parentGroup = $this.l22_1.f1y_1;
      $this.l22_1.l26();
      if (!$this.j22_1.o26()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.l22_1.m26();
        $this.l22_1.j24();
        recordInsert($this, $this.p22_1);
        $this.r22_1 = false;
        if (!$this.e21_1.n26()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.j22_1.f24_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.j22_1.j26();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.h22_1;
    $this.h22_1 = true;
    var recomposed = false;
    var parent = $this.j22_1.f24_1;
    var end = parent + $this.j22_1.e26(parent) | 0;
    var recomposeIndex = $this.l21_1;
    var recomposeCompoundKey = $this.s22_1;
    var oldGroupNodeCount = $this.n21_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.u21_1, $this.j22_1.d24_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.q26_1;
      removeLocation($this.u21_1, location);
      if (firstInRange_0.v26()) {
        recomposed = true;
        $this.j22_1.z25(location);
        var newGroup = $this.j22_1.d24_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.l21_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.s22_1 = compoundKeyOf($this, $this.j22_1.t24(newGroup), parent, recomposeCompoundKey);
        $this.n22_1 = null;
        firstInRange_0.p26_1.t26($this);
        $this.n22_1 = null;
        $this.j22_1.u26(parent);
      } else {
        $this.g22_1.a26(firstInRange_0.p26_1);
        firstInRange_0.p26_1.s26();
        $this.g22_1.b26();
      }
      firstInRange_0 = firstInRange($this.u21_1, $this.j22_1.d24_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.j22_1.h1z();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.l21_1 = recomposeIndex + parentGroupNodes | 0;
      $this.n21_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.s22_1 = recomposeCompoundKey;
    $this.h22_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.j21_1.n() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.j21_1.w26(pendingIndex);
            if (!(pending == null) ? pending.d26(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.j22_1.f24_1;
        } else {
          if ($this.j22_1.x26(current))
            break $l$loop_0;
          current = $this.j22_1.t24(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.j22_1.t24(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.j22_1.x26(anchorGroup)) {
      anchorGroup = $this.j22_1.t24(anchorGroup);
    }
    var index = $this.j22_1.x26(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.j22_1.y26(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.j22_1.e26(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.q21_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.b3(group);
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.p21_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.j22_1.y26(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.q21_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.q21_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.r2(group, count);
      } else {
        var tmp1_elvis_lhs = $this.p21_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.j22_1.n());
          fill(newCounts_0, -1);
          $this.p21_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.p21_1 = null;
    $this.q21_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.j22_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.x26(current)) {
        recordUp($this);
      }
      current = reader.t24(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.j22_1.t24(group), nearestCommonRoot);
      if ($this.j22_1.x26(group)) {
        recordDown($this, nodeAt($this.j22_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.j22_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = compoundKeyOf($this, $this.j22_1.t24(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(this_0, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.z26(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.r24(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.j9_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.s24(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.q24(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_0().t1y_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.n21_1 = $this.j22_1.a27();
    $this.j22_1.h1z();
  }
  function addRecomposeScope($this) {
    if ($this.r22_1) {
      var tmp = $this.i21_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.g22_1.a26(scope);
      $this.b27(scope);
      scope.d27($this.d22_1);
    } else {
      var invalidation = removeLocation($this.u21_1, $this.j22_1.f24_1);
      var slot = $this.j22_1.y();
      var tmp_0;
      if (equals(slot, Companion_getInstance_0().t1y_1)) {
        var tmp_1 = $this.i21_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.b27(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.c27(!(invalidation == null));
      $this.g22_1.a26(scope_0);
      scope_0.d27($this.d22_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.y1y(get_movableContentKey(), content);
    $this.t1z(parameter);
    var savedCompoundKeyHash = $this.s22_1;
    try {
      $this.s22_1 = get_movableContentKey();
      if ($this.r22_1) {
        $this.l22_1.e27();
      }
      var providersChanged = $this.r22_1 ? false : !equals($this.j22_1.x24(), locals);
      if (providersChanged) {
        $this.x21_1.f27($this.j22_1.d24_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_1().m24_1, locals);
      if ($this.r22_1 ? !force : false) {
        $this.m22_1 = true;
        $this.n22_1 = null;
        var anchor = $this.l22_1.q25($this.l22_1.t24($this.l22_1.f1y_1));
        var reference = new MovableContentStateReference(content, parameter, $this.i21_1, $this.k22_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.d21_1.g27(reference);
      } else {
        var savedProvidersInvalid = $this.y21_1;
        $this.y21_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.y21_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.s22_1 = savedCompoundKeyHash;
      $this.z1y();
    }
  }
  function insertMovableContentGuarded($this, references) {
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var newChanges = $this.h21_1;
      var savedChanges = $this.g21_1;
      try {
        $this.g21_1 = newChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.i1(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.ae();
            var from = item.be();
            var anchor = to.q20_1;
            var location = to.p20_1.h27(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.p20_1;
              if (equals(toSlotTable, $this.k22_1)) {
                createFreshInsertTable($this);
              }
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var reader = to.p20_1.m23();
              var tmp;
              try {
                reader.z25(location);
                $this.v22_1 = location;
                // Inline function 'kotlin.collections.mutableListOf' call
                var offsetChanges = ArrayList_init_$Create$();
                recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, reader, to));
                var tmp_0;
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!offsetChanges.e1()) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_instance;
                }
                tmp = tmp_0;
              }finally {
                reader.j24();
              }
            } else {
              var resolvedState = $this.d21_1.i27(from);
              var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.j27_1;
              var fromTable = tmp1_elvis_lhs == null ? from.p20_1 : tmp1_elvis_lhs;
              var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.j27_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q25(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.q20_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!nodesToInsert.e1()) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.p20_1, $this.e21_1)) {
                  var group = $this.e21_1.h27(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.n() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var reader_0 = fromTable.m23();
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.j22_1;
                  var savedCountOverrides = $this.p21_1;
                  $this.p21_1 = null;
                  try {
                    $this.j22_1 = reader_0;
                    var newLocation = fromTable.h27(fromAnchor);
                    reader_0.z25(newLocation);
                    $this.v22_1 = newLocation;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    var offsetChanges_0 = ArrayList_init_$Create$();
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.g21_1;
                      try {
                        $this.g21_1 = offsetChanges_0;
                        var tmp_2 = reader_0.d24_1;
                        var tmp_3 = from.r20_1;
                        recomposeMovableContent($this, from.o20_1, to.o20_1, tmp_2, tmp_3, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.g21_1 = savedChanges_0;
                      }
                    }
                    var tmp_4;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    if (!offsetChanges_0.e1()) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_4 = Unit_instance;
                    }
                    tmp$ret$9 = tmp_4;
                    break $l$block_0;
                  }finally {
                    $this.j22_1 = savedReader;
                    $this.p21_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                reader_0.j24();
              }
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.v22_1 = 0;
        break $l$block_1;
      }finally {
        $this.g21_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.x22_1;
    var savedIsComposing = $this.h22_1;
    var savedNodeIndex = $this.l21_1;
    try {
      $this.x22_1 = false;
      $this.h22_1 = true;
      $this.l21_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.i1(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.ae();
          var instances = item.be();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.n27_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.m27_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var instance = !(tmp == null) ? tmp : THROW_CCE();
                $this.l27(scope, instance);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.l27(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.o27(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.x22_1 = savedImplicitRootStart;
      $this.h22_1 = savedIsComposing;
      $this.l21_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.p27(_this__u8e3s4.f24_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.p27(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.t21_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.t21_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.t21_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.g21_1.s(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $super) {
    forParent = forParent === VOID ? false : forParent;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.t22_1;
    if (count > 0) {
      $this.t22_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.u22_1.q27()) {
      realizeDowns($this, $this.u22_1.i3());
      $this.u22_1.c1();
    }
  }
  function recordDown($this, node) {
    $this.u22_1.a26(node);
  }
  function recordUp($this) {
    if ($this.u22_1.q27()) {
      $this.u22_1.b26();
    } else {
      $this.t22_1 = $this.t22_1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.j22_1.f24_1 : $this.j22_1.d24_1;
    var distance = location - $this.v22_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.v22_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.q22_1.e1()) {
      var insertTable = $this.k22_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.q22_1);
      $this.q22_1.c1();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.k22_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.q22_1.s(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.z22_1.a26(change);
  }
  function registerInsertUpFixup($this) {
    $this.q22_1.s($this.z22_1.b26());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.j22_1.d24_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    $this.v22_1 = $this.v22_1 + $this.j22_1.r27() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.w24();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.p25();
      writer.a25(get_movableContentKey(), reference.m20_1);
      writer.e27();
      writer.s27(reference.n20_1);
      var anchors = slots.t27(reference.q20_1, 1, writer);
      writer.p24();
      writer.l26();
      writer.m26();
      tmp = anchors;
    }finally {
      writer.j24();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_4.v27(slotTable, anchors_0)) {
      var composition = $this.i21_1;
      var movableContentRecomposeScopeOwner = new ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.w24();
      var tmp_0;
      try {
        Companion_instance_4.u27(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_instance;
      }finally {
        writer_0.j24();
      }
    }
    $this.d21_1.w27(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.e21_1.x27()) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var changes = ArrayList_init_$Create$();
      $this.o22_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.e21_1.m23();
      var tmp;
      try {
        $this.j22_1 = reader;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.g21_1;
          try {
            $this.g21_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.w22_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_instance;
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.g21_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        reader.j24();
      }
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.j22_1.d24_1 - $this.v22_1 | 0;
    $this.v22_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.j22_1.n() > 0) {
      var reader = $this.j22_1;
      var location = reader.f24_1;
      if (!($this.y22_1.y27(-2) === location)) {
        if (!$this.w22_1 ? $this.x22_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.w22_1 = true;
        }
        if (location > 0) {
          var anchor = reader.q25(location);
          $this.y22_1.s23(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.j22_1.f24_1;
    var currentStartedGroup = $this.y22_1.y27(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if ($this.y22_1.y27(-1) === location) {
      $this.y22_1.b26();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.w22_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.w22_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.j21_1.e1()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.y22_1.e1()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message_0 = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.k21_1 = null;
    $this.l21_1 = 0;
    $this.n21_1 = 0;
    $this.v22_1 = 0;
    $this.s22_1 = 0;
    $this.t21_1 = false;
    $this.w22_1 = false;
    $this.y22_1.c1();
    $this.g22_1.c1();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if ($this.a23_1 === nodeIndex) {
        $this.d23_1 = $this.d23_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.a23_1 = nodeIndex;
        $this.d23_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.d23_1 > 0 ? $this.b23_1 === (from - $this.d23_1 | 0) : false) ? $this.c23_1 === (to - $this.d23_1 | 0) : false) {
        $this.d23_1 = $this.d23_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.b23_1 = from;
        $this.c23_1 = to;
        $this.d23_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.d23_1;
    $this.d23_1 = 0;
    if (count > 0) {
      if ($this.a23_1 >= 0) {
        var removeIndex = $this.a23_1;
        $this.a23_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.b23_1;
        $this.b23_1 = -1;
        var to = $this.c23_1;
        $this.c23_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder(ref) {
    this.z27_1 = ref;
  }
  protoOf(CompositionContextHolder).a28 = function () {
  };
  protoOf(CompositionContextHolder).b28 = function () {
    this.z27_1.gk();
  };
  protoOf(CompositionContextHolder).c28 = function () {
    this.z27_1.gk();
  };
  function CompositionContextImpl($outer, compoundHashKey, collectingParameterInformation) {
    this.b21_1 = $outer;
    CompositionContext.call(this);
    this.w20_1 = compoundHashKey;
    this.x20_1 = collectingParameterInformation;
    this.y20_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.z20_1 = LinkedHashSet_init_$Create$();
    this.a21_1 = mutableStateOf(persistentCompositionLocalHashMapOf());
  }
  protoOf(CompositionContextImpl).v23 = function () {
    return this.w20_1;
  };
  protoOf(CompositionContextImpl).t23 = function () {
    return this.x20_1;
  };
  protoOf(CompositionContextImpl).gk = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.z20_1.e1()) {
      var tmp0_safe_receiver = this.y20_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_iterator = this.z20_1.v();
        while (tmp0_iterator.w()) {
          var composer = tmp0_iterator.y();
          var tmp1_iterator = tmp0_safe_receiver.v();
          while (tmp1_iterator.w()) {
            var table = tmp1_iterator.y();
            table.t(composer.e21_1);
          }
        }
      }
      this.z20_1.c1();
    }
  };
  protoOf(CompositionContextImpl).d28 = function (composer) {
    protoOf(CompositionContext).d28.call(this, composer instanceof ComposerImpl ? composer : THROW_CCE());
    this.z20_1.s(composer);
  };
  protoOf(CompositionContextImpl).e28 = function (composer) {
    var tmp0_safe_receiver = this.y20_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.CompositionContextImpl.unregisterComposer.<anonymous>' call
        element.t((composer instanceof ComposerImpl ? composer : THROW_CCE()).e21_1);
      }
    }
    // Inline function 'kotlin.collections.remove' call
    var this_0 = this.z20_1;
    (isInterface(this_0, MutableCollection) ? this_0 : THROW_CCE()).t(composer);
  };
  protoOf(CompositionContextImpl).f28 = function (composition) {
    this.b21_1.d21_1.f28(composition);
  };
  protoOf(CompositionContextImpl).g28 = function () {
    return this.b21_1.d21_1.g28();
  };
  protoOf(CompositionContextImpl).h28 = function (composition) {
    this.b21_1.d21_1.h28(this.b21_1.i21_1);
    this.b21_1.d21_1.h28(composition);
  };
  protoOf(CompositionContextImpl).p23 = function () {
    return _get_compositionLocalScope__ulge9q(this);
  };
  protoOf(CompositionContextImpl).i28 = function (scope) {
    _set_compositionLocalScope__ya1b9q(this, scope);
  };
  protoOf(CompositionContextImpl).u23 = function (table) {
    var tmp0_elvis_lhs = this.y20_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = HashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionContextImpl.recordInspectionTable.<anonymous>' call
      this.y20_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.s(table);
  };
  protoOf(CompositionContextImpl).o23 = function () {
    var tmp0_this = this.b21_1;
    tmp0_this.c22_1 = tmp0_this.c22_1 + 1 | 0;
  };
  protoOf(CompositionContextImpl).w23 = function () {
    var tmp0_this = this.b21_1;
    tmp0_this.c22_1 = tmp0_this.c22_1 - 1 | 0;
  };
  protoOf(CompositionContextImpl).g27 = function (reference) {
    this.b21_1.d21_1.g27(reference);
  };
  protoOf(CompositionContextImpl).j28 = function (reference) {
    this.b21_1.d21_1.j28(reference);
  };
  protoOf(CompositionContextImpl).i27 = function (reference) {
    return this.b21_1.d21_1.i27(reference);
  };
  protoOf(CompositionContextImpl).w27 = function (reference, data) {
    this.b21_1.d21_1.w27(reference, data);
  };
  protoOf(CompositionContextImpl).k28 = function (composition) {
    this.b21_1.d21_1.k28(composition);
  };
  protoOf(CompositionContextImpl).l28 = function (composition, content) {
    this.b21_1.d21_1.l28(composition, content);
  };
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().t1y_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.j9_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var this_0 = $this.s22_1;
    tmp.s22_1 = rotateLeft(this_0, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_0().t1y_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.j9_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var this_0 = $this.s22_1 ^ groupKey;
    tmp.s22_1 = rotateRight(this_0, 3);
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.h22_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:recompose';
      var token = Trace_instance.m28(sectionName);
      try {
        $this.d22_1 = currentSnapshot().s28();
        $this.x21_1.c1();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.v28_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.t28_1[index];
            var scope = !(tmp == null) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.u28_1[index];
            var set = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = scope.n1y_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w28_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.u21_1.s(new Invalidation(scope, location, set));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var this_0 = $this.u21_1;
        if (this_0.n() > 1) {
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(this_0, tmp$ret$1);
        }
        $this.l21_1 = 0;
        var complete = false;
        $this.h22_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.x28();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.b27((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.f22_1;
          var observers = derivedStateObservers_0();
          try {
            observers.c29(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, content);
              endGroup($this);
            } else if ((($this.s21_1 ? true : $this.y21_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_0().t1y_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.d29();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$2 = observers.a29_1 - 1 | 0;
            observers.k1(tmp$ret$2);
          }
          endRoot($this);
          complete = true;
          tmp_3 = Unit_instance;
        }finally {
          $this.h22_1 = false;
          $this.u21_1.c1();
          if (!complete) {
            abortRoot($this);
          }
        }
        break $l$block;
      }finally {
        Trace_instance.e29(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.f29_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).z8 = function (a, b) {
    return this.f29_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.z8(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.g29(index)) {
      slots.h1z();
      if (slots.x26(slots.f1y_1)) {
        applier.d1w();
      }
      slots.l26();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.e1y_1;
    var current = slots.f1y_1;
    while (current >= 0 ? !slots.x26(current) : false) {
      current = slots.t24(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.h29(original, current)) {
        if (slots.x26(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.x26(current) ? 1 : slots.y26(current)) | 0;
        current = current + slots.e26(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.h27(anchor);
    runtimeCheck(slots.e1y_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.e1y_1 < destination) {
      if (slots.j29(destination)) {
        if (slots.i29()) {
          applier.c1w(slots.p27(slots.e1y_1));
          nodeIndex = 0;
        }
        slots.y24();
      } else
        nodeIndex = nodeIndex + slots.p24() | 0;
    }
    runtimeCheck(slots.e1y_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.j22_1.m29(group)) {
      var key = this$0.j22_1.s24(group);
      var objectKey = this$0.j22_1.r24(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.j22_1.l29(group, 0);
        var anchor = this$0.j22_1.q25(group);
        var end = group + this$0.j22_1.e26(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.u21_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.n());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.i1(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var element = to(item.p26_1, item.r26_1);
            target.s(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.i21_1, this$0.e21_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.d21_1.j28(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.j22_1.x26(group) ? 1 : this$0.j22_1.y26(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.j22_1.y26(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.j22_1.l29(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.z27_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.z20_1.v();
            while (tmp0_iterator.w()) {
              var element_0 = tmp0_iterator.y();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.d21_1.k28(element_0.i21_1);
            }
          }
          tmp_0 = this$0.j22_1.y26(group);
        } else {
          tmp_0 = this$0.j22_1.y26(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.j22_1.k29(group)) {
      var size = this$0.j22_1.e26(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.j22_1.x26(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.j22_1.p27(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.j22_1.e26(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.j22_1.y26(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.n29_1 = this$0;
  }
  protoOf(ComposerImpl$derivedStateObserver$1).o29 = function (derivedState) {
    var tmp0_this = this.n29_1;
    tmp0_this.c22_1 = tmp0_this.c22_1 + 1 | 0;
  };
  protoOf(ComposerImpl$derivedStateObserver$1).p29 = function (derivedState) {
    var tmp0_this = this.n29_1;
    tmp0_this.c22_1 = tmp0_this.c22_1 - 1 | 0;
  };
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.q29($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.e1w($insertIndex, node);
      applier.c1w(node);
      return Unit_instance;
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.r29($groupAnchor);
      applier.d1w();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.f1w($insertIndex, nodeToInsert);
      return Unit_instance;
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.z1v();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).k1x();
    return Unit_instance;
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.z1v();
      $block((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE(), $value);
      return Unit_instance;
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.s29($value);
      return Unit_instance;
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.s29($value);
        tmp = Unit_instance;
      }
      var previous = slots.t29($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.k1y(previous);
        tmp_0 = Unit_instance;
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          previous.fp();
          tmp_0 = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$recordSideEffect$lambda($effect) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.u29($effect);
      return Unit_instance;
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.f1x(-948105361);
      sourceInformation($composer_0, 'C1996@73844L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-948105361, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1995)');
        tmp = Unit_instance;
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.h1x();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.v29($data);
      return Unit_instance;
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.w29($currentRelativePosition);
      return Unit_instance;
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda($node) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.x29($node);
      return Unit_instance;
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda$lambda($data, $index) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!equals($data, slots.y29(slots.e1y_1, $index))) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>.<anonymous>.<anonymous>' call
        var message = 'Slot table is out of sync';
        composeRuntimeError(toString(message));
      }
      rememberManager.k1y($data);
      slots.t29($index, Companion_getInstance_0().t1y_1);
      return Unit_instance;
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda$lambda_0($data, $index) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp;
      if (!equals($data, slots.y29(slots.e1y_1, $index))) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>.<anonymous>.<anonymous>' call
        var message = 'Slot table is out of sync';
        composeRuntimeError(toString(message));
      }
      slots.t29($index, Companion_getInstance_0().t1y_1);
      return Unit_instance;
    };
  }
  function ComposerImpl$deactivateToEndGroup$lambda_0(this$0, $group) {
    return function (index, data) {
      var tmp;
      if (!(data == null) ? isInterface(data, RememberObserver) : false) {
        this$0.j22_1.z25($group);
        recordSlotTableOperation$default(this$0, VOID, ComposerImpl$deactivateToEndGroup$lambda$lambda(data, index));
        tmp = Unit_instance;
      } else {
        if (data instanceof RecomposeScopeImpl) {
          data.fp();
          this$0.j22_1.z25($group);
          recordSlotTableOperation$default(this$0, VOID, ComposerImpl$deactivateToEndGroup$lambda$lambda_0(data, index));
          tmp = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$endRestartGroup$lambda($this, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $this(this$0.i21_1);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112623L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.a2a_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (!isInterface(applier, Applier))
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $reader, $to) {
    return function () {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var this_0 = this$0;
        var newChanges = $offsetChanges;
        var savedChanges = this_0.g21_1;
        try {
          this_0.g21_1 = newChanges;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var this_1 = this$0;
            var reader = $reader;
            var savedReader = this_1.j22_1;
            var savedCountOverrides = this_1.p21_1;
            this_1.p21_1 = null;
            try {
              this_1.j22_1 = reader;
              invokeMovableContentLambda(this$0, $to.m20_1, $to.s20_1, $to.n20_1, true);
              break $l$block;
            }finally {
              this_1.j22_1 = savedReader;
              this_1.p21_1 = savedCountOverrides;
            }
          }
          break $l$block_0;
        }finally {
          this_0.g21_1 = savedChanges;
        }
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      var this_0 = $offsetChanges;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.i1(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      var this_0 = $nodesToInsert;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.i1(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!isInterface(applier, Applier))
            THROW_CCE();
          applier.f1w(base + index | 0, item);
          applier.e1w(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.d21_1.i27($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.b2a(1, state.j27_1, 2);
      var tmp_0 = Companion_instance_4;
      var tmp_1 = $to.o20_1;
      tmp_0.u27(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.m20_1, $to.s20_1, $to.n20_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      var this_0 = $offsetChanges;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.i1(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (!isInterface(applier, Applier))
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.l26();
    return Unit_instance;
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var times = $count;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < times) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.d1w();
        }
         while (inductionVariable < times);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.c1w($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.c2a($distance);
      return Unit_instance;
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.p25();
      slots.e2a($insertTable, $anchor.d2a($insertTable), false);
      slots.m26();
      return Unit_instance;
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer = $insertTable.w24();
      var tmp;
      try {
        var this_0 = $fixups;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.n() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.i1(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, writer, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }finally {
        writer.j24();
      }
      slots.p25();
      slots.e2a($insertTable, $anchor.d2a($insertTable), false);
      slots.m26();
      return Unit_instance;
    };
  }
  function ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.f2a_1 = $composition;
    this.g2a_1 = $reference;
  }
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).h2a = function (scope, instance) {
    var tmp = this.f2a_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2a(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.g2a_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.r20_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        this_0.i2a(this_0);
        tmp_2 = this_0;
      }
      tmp_0.r20_1 = plus_0(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).j2a = function (scope) {
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).k2a = function (value) {
  };
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.l2a($anchor);
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.g1w($removeIndex, $count);
      return Unit_instance;
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.h1w($from, $to, $count);
      return Unit_instance;
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp = a.q26_1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp$ret$1 = b.q26_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.c21_1 = applier;
    this.d21_1 = parentContext;
    this.e21_1 = slotTable;
    this.f21_1 = abandonSet;
    this.g21_1 = changes;
    this.h21_1 = lateChanges;
    this.i21_1 = composition;
    this.j21_1 = new Stack();
    this.k21_1 = null;
    this.l21_1 = 0;
    this.m21_1 = new IntStack();
    this.n21_1 = 0;
    this.o21_1 = new IntStack();
    this.p21_1 = null;
    this.q21_1 = null;
    this.r21_1 = false;
    this.s21_1 = false;
    this.t21_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u21_1 = ArrayList_init_$Create$();
    this.v21_1 = new IntStack();
    this.w21_1 = persistentCompositionLocalHashMapOf();
    this.x21_1 = new IntMap();
    this.y21_1 = false;
    this.z21_1 = new IntStack();
    this.a22_1 = false;
    this.b22_1 = -1;
    this.c22_1 = 0;
    this.d22_1 = 0;
    this.e22_1 = true;
    var tmp_0 = this;
    tmp_0.f22_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.g22_1 = new Stack();
    this.h22_1 = false;
    this.i22_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.e21_1.m23();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.j24();
    tmp_1.j22_1 = this_0;
    this.k22_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_1 = this.k22_1.w24();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_1.j24();
    tmp_2.l22_1 = this_1;
    this.m22_1 = false;
    this.n22_1 = null;
    this.o22_1 = null;
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.k22_1.m23();
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = reader.q25(0);
    }finally {
      reader.j24();
    }
    tmp_3.p22_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_5.q22_1 = ArrayList_init_$Create$();
    this.r22_1 = false;
    this.s22_1 = 0;
    this.t22_1 = 0;
    this.u22_1 = new Stack();
    this.v22_1 = 0;
    this.w22_1 = false;
    this.x22_1 = true;
    this.y22_1 = new IntStack();
    this.z22_1 = new Stack();
    this.a23_1 = -1;
    this.b23_1 = -1;
    this.c23_1 = -1;
    this.d23_1 = 0;
  }
  protoOf(ComposerImpl).u1y = function () {
    return this.c21_1;
  };
  protoOf(ComposerImpl).m2a = function () {
    return this.c22_1 > 0;
  };
  protoOf(ComposerImpl).e20 = function () {
    return this.d21_1.g28();
  };
  protoOf(ComposerImpl).f1x = function (key) {
    return start(this, key, null, Companion_getInstance_1().m24_1, null);
  };
  protoOf(ComposerImpl).h1x = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).a1z = function () {
    return start(this, -127, null, Companion_getInstance_1().m24_1, null);
  };
  protoOf(ComposerImpl).b1z = function () {
    endGroup(this);
    var scope = this.n2a();
    if (!(scope == null) ? scope.c26() : false) {
      scope.o2a(true);
    }
  };
  protoOf(ComposerImpl).x1y = function () {
    var tmp;
    if (this.y21_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.n2a();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1y()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).y1y = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_1().m24_1, null);
  };
  protoOf(ComposerImpl).z1y = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).p2a = function () {
    createFreshInsertTable(this);
    this.x21_1.c1();
  };
  protoOf(ComposerImpl).v1y = function () {
    return this.r22_1;
  };
  protoOf(ComposerImpl).w1y = function () {
    var tmp;
    var tmp_0;
    if ((!this.r22_1 ? !this.a22_1 : false) ? !this.y21_1 : false) {
      var tmp0_safe_receiver = this.n2a();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q2a()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.s21_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).e1x = function () {
    return this.s22_1;
  };
  protoOf(ComposerImpl).gk = function () {
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var sectionName = 'Compose:Composer.dispose';
      var token = Trace_instance.m28(sectionName);
      try {
        this.d21_1.e28(this);
        this.g22_1.c1();
        this.u21_1.c1();
        this.g21_1.c1();
        this.x21_1.c1();
        this.c21_1.c1();
        this.i22_1 = true;
        break $l$block;
      }finally {
        Trace_instance.e29(token);
      }
    }
  };
  protoOf(ComposerImpl).j1z = function () {
    start(this, 125, null, Companion_getInstance_1().n24_1, null);
    this.t21_1 = true;
  };
  protoOf(ComposerImpl).k1z = function () {
    start(this, 125, null, Companion_getInstance_1().o24_1, null);
    this.t21_1 = true;
  };
  protoOf(ComposerImpl).l1z = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.r22_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.m21_1.r2a();
    var groupAnchor = this.l22_1.q25(this.l22_1.f1y_1);
    this.n21_1 = this.n21_1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).m1z = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.r22_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.j22_1, this);
    recordDown(this, node);
    var tmp;
    if (this.a22_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).n1z = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).o1z = function (key, dataKey) {
    if ((this.j22_1.l25() === key ? !equals(this.j22_1.x24(), dataKey) : false) ? this.b22_1 < 0 : false) {
      this.b22_1 = this.j22_1.d24_1;
      this.a22_1 = true;
    }
    start(this, key, null, Companion_getInstance_1().m24_1, dataKey);
  };
  protoOf(ComposerImpl).p1z = function () {
    if (this.a22_1 ? this.j22_1.f24_1 === this.b22_1 : false) {
      this.b22_1 = -1;
      this.a22_1 = false;
    }
    end(this, false);
  };
  protoOf(ComposerImpl).q1z = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.r22_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).x28 = function () {
    var tmp;
    if (this.r22_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_0().t1y_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.j22_1.y();
      tmp = this.a22_1 ? Companion_getInstance_0().t1y_1 : it;
    }
    return tmp;
  };
  protoOf(ComposerImpl).t1z = function (value) {
    var tmp;
    if (!equals(this.x28(), value)) {
      this.b27(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).y1z = function (value) {
    var tmp;
    if (!(this.x28() === value)) {
      this.b27(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).u1z = function (value) {
    var next = this.x28();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.b27(value);
    return true;
  };
  protoOf(ComposerImpl).w1z = function (value) {
    var next = this.x28();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.b27(value);
    return true;
  };
  protoOf(ComposerImpl).x1z = function (value) {
    var next = this.x28();
    if (next instanceof Long) {
      var nextPrimitive = next;
      if (value.equals(nextPrimitive))
        return false;
    }
    this.b27(value);
    return true;
  };
  protoOf(ComposerImpl).v1z = function (value) {
    var next = this.x28();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.b27(value);
    return true;
  };
  protoOf(ComposerImpl).b27 = function (value) {
    if (this.r22_1) {
      this.l22_1.s27(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.f21_1.s(value);
      }
    } else {
      var groupSlotIndex = this.j22_1.s2a() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.f21_1.s(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).z1z = function (effect) {
    record(this, ComposerImpl$recordSideEffect$lambda(effect));
  };
  protoOf(ComposerImpl).a20 = function () {
    return currentCompositionLocalScope(this);
  };
  protoOf(ComposerImpl).c20 = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.r22_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.m22_1 = true;
    } else {
      var tmp = this.j22_1.t2a(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.j22_1.t2a(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentCompositionLocalMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.w1y() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.r22_1 : false) {
      this.x21_1.f27(this.j22_1.d24_1, providers);
    }
    this.z21_1.s23(asInt(this.y21_1));
    this.y21_1 = invalid;
    this.n22_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_1().m24_1, providers);
  };
  protoOf(ComposerImpl).d20 = function () {
    endGroup(this);
    endGroup(this);
    this.y21_1 = asBool(this.z21_1.b26());
    this.n22_1 = null;
  };
  protoOf(ComposerImpl).b20 = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).g1x = function () {
    startGroup_0(this, 206, get_reference());
    if (this.r22_1) {
      this.l22_1.e27();
    }
    var tmp = this.x28();
    var holder = tmp instanceof CompositionContextHolder ? tmp : null;
    if (holder == null) {
      holder = new CompositionContextHolder(new CompositionContextImpl(this, this.s22_1, this.r21_1));
      this.b27(holder);
    }
    holder.z27_1.i28(currentCompositionLocalScope(this));
    endGroup(this);
    return holder.z27_1;
  };
  protoOf(ComposerImpl).n2a = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.g22_1;
    return (this.c22_1 === 0 ? it.q27() : false) ? it.r2a() : null;
  };
  protoOf(ComposerImpl).l27 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.n1y_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.j22_1.x23_1;
    var location = anchor.d2a(slotTable);
    if (this.h22_1 ? location >= this.j22_1.d24_1 : false) {
      insertIfMissing(this.u21_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).d29 = function () {
    if (this.u21_1.e1()) {
      skipGroup(this);
    } else {
      var reader = this.j22_1;
      var key = reader.l25();
      var dataKey = reader.n25();
      var aux = reader.x24();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.i29(), null);
      recomposeToGroupEnd(this);
      reader.j26();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).h1z = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.n21_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.n2a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u2a();
    }
    if (this.u21_1.e1()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).i1z = function (changed) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.n21_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.deactivateToEndGroup.<anonymous>' call
      var message = 'No nodes can be emitted before calling dactivateToEndGroup';
      composeRuntimeError(toString(message));
    }
    if (!this.r22_1) {
      if (!changed) {
        skipReaderToGroupEnd(this);
        return Unit_instance;
      }
      var start = this.j22_1.d24_1;
      var end = this.j22_1.e24_1;
      var inductionVariable = start;
      if (inductionVariable < end)
        do {
          var group = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (this.j22_1.x26(group)) {
            var node = this.j22_1.p27(group);
            if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
              record(this, ComposerImpl$deactivateToEndGroup$lambda(node));
            }
          }
          var tmp = this.j22_1;
          tmp.v2a(group, ComposerImpl$deactivateToEndGroup$lambda_0(this, group));
        }
         while (inductionVariable < end);
      removeRange(this.u21_1, start, end);
      this.j22_1.z25(start);
      this.j22_1.h1z();
    }
  };
  protoOf(ComposerImpl).c1z = function (key) {
    start(this, key, null, Companion_getInstance_1().m24_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).d1z = function () {
    var scope = this.g22_1.q27() ? this.g22_1.b26() : null;
    if (scope != null) {
      scope.c27(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.w2a(this.d22_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
    }
    var tmp;
    if ((!(scope == null) ? !scope.y2a() : false) ? scope.c26() ? true : this.r21_1 : false) {
      if (scope.n1y_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.r22_1) {
          tmp_1 = this.l22_1.q25(this.l22_1.f1y_1);
        } else {
          tmp_1 = this.j22_1.q25(this.j22_1.f24_1);
        }
        tmp_0.n1y_1 = tmp_1;
      }
      scope.x2a(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).z2a = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).e1z = function (sourceInformation) {
    if (this.r22_1 ? this.e22_1 : false) {
      this.l22_1.a2b(sourceInformation);
    }
  };
  protoOf(ComposerImpl).f1z = function (key, sourceInformation) {
    if (this.e22_1) {
      start(this, key, null, Companion_getInstance_1().m24_1, sourceInformation);
    }
  };
  protoOf(ComposerImpl).g1z = function () {
    if (this.e22_1) {
      end(this, false);
    }
  };
  protoOf(ComposerImpl).b2b = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.h22_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.h22_1 = true;
    try {
      block();
    }finally {
      this.h22_1 = false;
    }
  };
  protoOf(ComposerImpl).c2b = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.g21_1.e1()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.q27()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.u21_1.e1();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.s21_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      // Inline function 'kotlin.collections.isNotEmpty' call
      return !this.g21_1.e1();
    }
    return false;
  };
  protoOf(ComposerImpl).i1x = function () {
    return this.n2a();
  };
  protoOf(ComposerImpl).r1z = function () {
    return this.x28();
  };
  protoOf(ComposerImpl).s1z = function (value) {
    return this.b27(value);
  };
  protoOf(ComposerImpl).j1x = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.d2b(true);
    }
  };
  protoOf(ComposerImpl).e2b = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.g21_1.e1()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  function MovableContentState(slotTable) {
    this.j27_1 = slotTable;
    this.k27_1 = 8;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.d25_1.n();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.d25_1.i1(index);
          put(this_0, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      return this_0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.d25_1 = keyInfos;
    this.e25_1 = startIndex;
    this.f25_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.e25_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g25_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.d25_1.n();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.d25_1.i1(index);
        // Inline function 'kotlin.collections.set' call
        var key = keyInfo.t25_1;
        var value = new GroupInfo(index, runningNodeIndex, keyInfo.u25_1);
        result.r2(key, value);
        runningNodeIndex = runningNodeIndex + keyInfo.u25_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.h25_1 = result;
    var tmp_1 = this;
    tmp_1.i25_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).f2b = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.i25_1;
    keyMap$factory();
    return this_0.u2();
  };
  protoOf(Pending).o25 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.f2b(), joinedKey);
  };
  protoOf(Pending).k25 = function (keyInfo) {
    return this.g25_1.s(keyInfo);
  };
  protoOf(Pending).c26 = function () {
    return this.g25_1;
  };
  protoOf(Pending).y25 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.h25_1.p2().v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.g2b_1;
        if (position === from)
          element.g2b_1 = to;
        else if (to <= position ? position < from : false)
          element.g2b_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.h25_1.p2().v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.g2b_1;
        if (position_0 === from)
          element_0.g2b_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.g2b_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).g26 = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.h25_1.p2().v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.h2b_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.h2b_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.h2b_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.h25_1.p2().v();
      while (tmp0_iterator_0.w()) {
        var element_0 = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.h2b_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.h2b_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.h2b_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).j25 = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.h25_1;
    var key = keyInfo.t25_1;
    var value = new GroupInfo(-1, insertIndex, 0);
    this_0.r2(key, value);
  };
  protoOf(Pending).d26 = function (group, newCount) {
    var groupInfo = this.h25_1.b3(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.h2b_1;
      var difference = newCount - groupInfo.i2b_1 | 0;
      groupInfo.i2b_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.h25_1.p2().v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.h2b_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.h2b_1 + difference | 0;
            if (newIndex >= 0)
              element.h2b_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).x25 = function (keyInfo) {
    var tmp0_safe_receiver = this.h25_1.b3(keyInfo.t25_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g2b_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).w25 = function (keyInfo) {
    var tmp0_safe_receiver = this.h25_1.b3(keyInfo.t25_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2b_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).f26 = function (keyInfo) {
    var tmp0_safe_receiver = this.h25_1.b3(keyInfo.t25_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2b_1;
    return tmp1_elvis_lhs == null ? keyInfo.u25_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.p26_1 = scope;
    this.q26_1 = location;
    this.r26_1 = instances;
  }
  protoOf(Invalidation).v26 = function () {
    return this.p26_1.j2b(this.r26_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.m24_1 = _GroupKind___init__impl__iwqg06(0);
    this.n24_1 = _GroupKind___init__impl__iwqg06(1);
    this.o24_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.n()) {
      var validation = _this__u8e3s4.i1(index);
      if (validation.q26_1 < end) {
        _this__u8e3s4.k1(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.n()) {
      var firstInvalidation = _this__u8e3s4.i1(index);
      if (firstInvalidation.q26_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.k1(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.t24(a) === b)
      return b;
    if (_this__u8e3s4.t24(b) === a)
      return a;
    if (_this__u8e3s4.t24(a) === _this__u8e3s4.t24(b))
      return _this__u8e3s4.t24(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.t24(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.t24(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.t24(currentA);
      currentB = _this__u8e3s4.t24(currentB);
    }
    return currentA;
  }
  function get_reuseKey() {
    return reuseKey;
  }
  var reuseKey;
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        this_0.i2a(instance);
        tmp_0 = this_0;
      }
      _this__u8e3s4.y1(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.i1(index).r26_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.i1(index).r26_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.i2a(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.m23();
    var tmp;
    try {
      var index = _this__u8e3s4.h27(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.j24();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.n()) {
      var invalidation = _this__u8e3s4.i1(index);
      if (invalidation.q26_1 < end) {
        result.s(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.g2b_1 = slotIndex;
    this.h2b_1 = nodeIndex;
    this.i2b_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.b3(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.r2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.s(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.s25_1 == null) ? new JoinedKey(_this__u8e3s4.r25_1, _this__u8e3s4.s25_1) : _this__u8e3s4.r25_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.b3(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.n() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.i1(mid);
      var cmp = compareTo(midVal.q26_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.t24(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.b3(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.t(value);
      var tmp_0;
      if (tmp0_safe_receiver.e1()) {
        _this__u8e3s4.v2(key);
        tmp_0 = Unit_instance;
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    var tmp;
    if ($this$with.v1y() ? true : !equals($this$with.r1z(), value)) {
      $this$with.s1z(value);
      _Updater___get_composer__impl__9ty7av($this).q1z(value, block);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function SkippableUpdater__toString_impl_9wisn1($this) {
    return 'SkippableUpdater(composer=' + $this + ')';
  }
  function SkippableUpdater__hashCode_impl_vnopfw($this) {
    return hashCode($this);
  }
  function SkippableUpdater__equals_impl_vm8qds($this, other) {
    if (!(other instanceof SkippableUpdater))
      return false;
    var tmp0_other_with_cast = other instanceof SkippableUpdater ? other.k2b_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkippableUpdater(composer) {
    this.k2b_1 = composer;
  }
  protoOf(SkippableUpdater).toString = function () {
    return SkippableUpdater__toString_impl_9wisn1(this.k2b_1);
  };
  protoOf(SkippableUpdater).hashCode = function () {
    return SkippableUpdater__hashCode_impl_vnopfw(this.k2b_1);
  };
  protoOf(SkippableUpdater).equals = function (other) {
    return SkippableUpdater__equals_impl_vm8qds(this.k2b_1, other);
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.x26(group)) {
      result.s($reader.p27(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.e26(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.e26(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    removeCurrentGroup(slots, rememberManager);
    return Unit_instance;
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.h1z();
    return Unit_instance;
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.l26();
    return Unit_instance;
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.l2b(0);
    return Unit_instance;
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.m2b();
    return Unit_instance;
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function compositionLocalScope$factory() {
    return getPropertyCallableRef('compositionLocalScope', 1, KMutableProperty1, function (receiver) {
      return _get_compositionLocalScope__ulge9q(receiver);
    }, function (receiver, value) {
      return _set_compositionLocalScope__ya1b9q(receiver, value);
    });
  }
  function compositionLocalScope$factory_0() {
    return getPropertyCallableRef('compositionLocalScope', 1, KMutableProperty1, function (receiver) {
      return _get_compositionLocalScope__ulge9q(receiver);
    }, function (receiver, value) {
      return _set_compositionLocalScope__ya1b9q(receiver, value);
    });
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.f2b();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.d2c_1.m2a();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.p2b_1.k2c(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.p2b_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.p2b_1.k2c(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.p2b_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var this_0 = $this.t2b_1;
    var index = find_2(this_0, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.n27_1;
      var inductionVariable = 0;
      var last = this_1.m27_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values[i];
          var scope = !(tmp == null) ? tmp : THROW_CCE();
          if (!$this.y2b_1.r2c(value, scope) ? !scope.m2c(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (scope.l2c() ? !forgetConditionalScopes : false) {
              $this.u2b_1.s(scope);
            } else {
              if (set == null)
                set = HashSet_init_$Create$();
              var tmp0_safe_receiver = set;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver.s(scope);
            }
          }
        }
         while (inductionVariable < last);
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = null;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.n27_1;
      var inductionVariable = 0;
      var last = values.m27_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (value instanceof RecomposeScopeImpl) {
            value.m2c(null);
          } else {
            invalidated = addPendingInvalidationsLocked(invalidated, $this, value, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var this_0 = $this.v2b_1;
            var index = find_2(this_0, value);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var this_1 = scopeSetAt(this_0, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_1 = this_1.n27_1;
              var inductionVariable_0 = 0;
              var last_0 = this_1.m27_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  var tmp_0 = values_1[i_0];
                  var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                  invalidated = addPendingInvalidationsLocked(invalidated, $this, it, forgetConditionalScopes);
                }
                 while (inductionVariable_0 < last_0);
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.m2c(null);
        } else {
          invalidated = addPendingInvalidationsLocked(invalidated, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var this_2 = $this.v2b_1;
          var index_0 = find_2(this_2, element);
          if (index_0 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var this_3 = scopeSetAt(this_2, index_0);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = this_3.n27_1;
            var inductionVariable_1 = 0;
            var last_1 = this_3.m27_1;
            if (inductionVariable_1 < last_1)
              do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var tmp_1 = values_2[i_1];
                var it_0 = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
                invalidated = addPendingInvalidationsLocked(invalidated, $this, it_0, forgetConditionalScopes);
              }
               while (inductionVariable_1 < last_1);
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.u2b_1.e1();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var this_4 = $this.t2b_1;
      var valueOrder = this_4.n2c_1;
      var scopeSets = this_4.p2c_1;
      var values_3 = this_4.o2c_1;
      var destinationIndex = 0;
      var inductionVariable_2 = 0;
      var last_2 = this_4.q2c_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var valueIndex = valueOrder[i_2];
          var set = ensureNotNull(scopeSets[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var values_4 = set.n27_1;
          var size = set.m27_1;
          var destinationIndex_0 = 0;
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < size)
            do {
              var i_3 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              var tmp_3 = values_4[i_3];
              var item = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_4;
              if ($this.u2b_1.r(item)) {
                tmp_4 = true;
              } else {
                var tmp0_safe_receiver = invalidated;
                var tmp_5;
                if (tmp0_safe_receiver == null) {
                  tmp_5 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp_5 = tmp0_safe_receiver.r(item);
                }
                tmp_4 = tmp_5 === true;
              }
              if (!tmp_4) {
                if (!(destinationIndex_0 === i_3)) {
                  values_4[destinationIndex_0] = item;
                }
                destinationIndex_0 = destinationIndex_0 + 1 | 0;
              }
            }
             while (inductionVariable_3 < size);
          var inductionVariable_4 = destinationIndex_0;
          if (inductionVariable_4 < size)
            do {
              var i_4 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              values_4[i_4] = null;
            }
             while (inductionVariable_4 < size);
          set.m27_1 = destinationIndex_0;
          if (set.m27_1 > 0) {
            if (!(destinationIndex === i_2)) {
              var destinationKeyOrder = valueOrder[destinationIndex];
              valueOrder[destinationIndex] = valueIndex;
              valueOrder[i_2] = destinationKeyOrder;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable_2 < last_2);
      var inductionVariable_5 = destinationIndex;
      var last_3 = this_4.q2c_1;
      if (inductionVariable_5 < last_3)
        do {
          var i_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          values_3[valueOrder[i_5]] = null;
        }
         while (inductionVariable_5 < last_3);
      this_4.q2c_1 = destinationIndex;
      $this.u2b_1.c1();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_0 = invalidated;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var this_5 = $this.t2b_1;
        var valueOrder_0 = this_5.n2c_1;
        var scopeSets_0 = this_5.p2c_1;
        var values_5 = this_5.o2c_1;
        var destinationIndex_1 = 0;
        var inductionVariable_6 = 0;
        var last_4 = this_5.q2c_1;
        if (inductionVariable_6 < last_4)
          do {
            var i_6 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var valueIndex_0 = valueOrder_0[i_6];
            var set_0 = ensureNotNull(scopeSets_0[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var values_6 = set_0.n27_1;
            var size_0 = set_0.m27_1;
            var destinationIndex_2 = 0;
            var inductionVariable_7 = 0;
            if (inductionVariable_7 < size_0)
              do {
                var i_7 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                var tmp_6 = values_6[i_7];
                var item_0 = !(tmp_6 == null) ? tmp_6 : THROW_CCE();
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                if (!tmp0_safe_receiver_0.r(item_0)) {
                  if (!(destinationIndex_2 === i_7)) {
                    values_6[destinationIndex_2] = item_0;
                  }
                  destinationIndex_2 = destinationIndex_2 + 1 | 0;
                }
              }
               while (inductionVariable_7 < size_0);
            var inductionVariable_8 = destinationIndex_2;
            if (inductionVariable_8 < size_0)
              do {
                var i_8 = inductionVariable_8;
                inductionVariable_8 = inductionVariable_8 + 1 | 0;
                values_6[i_8] = null;
              }
               while (inductionVariable_8 < size_0);
            set_0.m27_1 = destinationIndex_2;
            if (set_0.m27_1 > 0) {
              if (!(destinationIndex_1 === i_6)) {
                var destinationKeyOrder_0 = valueOrder_0[destinationIndex_1];
                valueOrder_0[destinationIndex_1] = valueIndex_0;
                valueOrder_0[i_6] = destinationKeyOrder_0;
              }
              destinationIndex_1 = destinationIndex_1 + 1 | 0;
            }
          }
           while (inductionVariable_6 < last_4);
        var inductionVariable_9 = destinationIndex_1;
        var last_5 = this_5.q2c_1;
        if (inductionVariable_9 < last_5)
          do {
            var i_9 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            values_5[valueOrder_0[i_9]] = null;
          }
           while (inductionVariable_9 < last_5);
        this_5.q2c_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var this_0 = $this.v2b_1;
    var valueOrder = this_0.n2c_1;
    var scopeSets = this_0.p2c_1;
    var values = this_0.o2c_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this_0.q2c_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var values_0 = set.n27_1;
        var size = set.m27_1;
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = values_0[i_0];
            var item = !(tmp == null) ? tmp : THROW_CCE();
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            if (!!$this.t2b_1.s2c(item)) {
              if (!(destinationIndex_0 === i_0)) {
                values_0[destinationIndex_0] = item;
              }
              destinationIndex_0 = destinationIndex_0 + 1 | 0;
            }
          }
           while (inductionVariable_0 < size);
        var inductionVariable_1 = destinationIndex_0;
        if (inductionVariable_1 < size)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            values_0[i_1] = null;
          }
           while (inductionVariable_1 < size);
        set.m27_1 = destinationIndex_0;
        if (set.m27_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_0 = this_0.q2c_1;
    if (inductionVariable_2 < last_0)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        values[valueOrder[i_2]] = null;
      }
       while (inductionVariable_2 < last_0);
    this_0.q2c_1 = destinationIndex;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.u2b_1.e1()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.u2b_1.v();
      while (iter.w()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.y().l2c()) {
          iter.x();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var this_0 = $this.t2b_1;
    var index = find_2(this_0, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.n27_1;
      var inductionVariable = 0;
      var last = this_1.m27_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp = values[i];
          var scope = !(tmp == null) ? tmp : THROW_CCE();
          if (scope.m2c(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.y2b_1.t2c(value, scope);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.r2b_1);
    try {
      if (changes.e1())
        return Unit_instance;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:applyChanges';
        var token = Trace_instance.m28(sectionName);
        try {
          $this.o2b_1.a1w();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.s2b_1.w24();
          var tmp;
          try {
            var applier = $this.o2b_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.n() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.i1(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, writer, manager);
              }
               while (inductionVariable <= last);
            changes.c1();
            tmp = Unit_instance;
          }finally {
            writer.j24();
          }
          $this.o2b_1.b1w();
          break $l$block;
        }finally {
          Trace_instance.e29(token);
        }
      }
      manager.a2d();
      manager.b2d();
      if ($this.a2c_1) {
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName_0 = 'Compose:unobserve';
          var token_0 = Trace_instance.m28(sectionName_0);
          try {
            $this.a2c_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var this_0 = $this.t2b_1;
            var valueOrder = this_0.n2c_1;
            var scopeSets = this_0.p2c_1;
            var values = this_0.o2c_1;
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = this_0.q2c_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = valueOrder[i];
                var set = ensureNotNull(scopeSets[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var values_0 = set.n27_1;
                var size = set.m27_1;
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                if (inductionVariable_1 < size)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = values_0[i_0];
                    var item_0 = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    if (!!item_0.c2d()) {
                      if (!(destinationIndex_0 === i_0)) {
                        values_0[destinationIndex_0] = item_0;
                      }
                      destinationIndex_0 = destinationIndex_0 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < size);
                var inductionVariable_2 = destinationIndex_0;
                if (inductionVariable_2 < size)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    values_0[i_1] = null;
                  }
                   while (inductionVariable_2 < size);
                set.m27_1 = destinationIndex_0;
                if (set.m27_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = valueOrder[destinationIndex];
                    valueOrder[destinationIndex] = valueIndex;
                    valueOrder[i] = destinationKeyOrder;
                  }
                  destinationIndex = destinationIndex + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_1 = this_0.q2c_1;
            if (inductionVariable_3 < last_1)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                values[valueOrder[i_2]] = null;
              }
               while (inductionVariable_3 < last_1);
            this_0.q2c_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            break $l$block_0;
          }finally {
            Trace_instance.e29(token_0);
          }
        }
      }
    }finally {
      if ($this.x2b_1.e1()) {
        manager.d2d();
      }
    }
  }
  function abandonChanges($this) {
    $this.p2b_1.e2d(null);
    $this.w2b_1.c1();
    $this.x2b_1.c1();
    $this.r2b_1.c1();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.f2d() ? $this.d2c_1.l27(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.q2b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.b2c_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.s2b_1.g2d($this.c2c_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.z2b_1.h2d(scope, null);
      } else {
        addValue($this.z2b_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.n2b_1.h28($this);
    return $this.f2d() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.z2b_1;
    $this.z2b_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.u2c_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v2c_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.w2c_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.x2c_1 = ArrayList_init_$Create$();
    this.y2c_1 = null;
    this.z2c_1 = null;
  }
  protoOf(RememberEventDispatcher).s29 = function (instance) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var index = this.w2c_1.c2(instance);
    var tmp;
    if (index >= 0) {
      this.w2c_1.k1(index);
      tmp = this.u2c_1.t(instance);
    } else {
      tmp = this.v2c_1.s(instance);
    }
  };
  protoOf(RememberEventDispatcher).k1y = function (instance) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var index = this.v2c_1.c2(instance);
    var tmp;
    if (index >= 0) {
      this.v2c_1.k1(index);
      tmp = this.u2c_1.t(instance);
    } else {
      tmp = this.w2c_1.s(instance);
    }
  };
  protoOf(RememberEventDispatcher).u29 = function (effect) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.x2c_1.s(effect);
  };
  protoOf(RememberEventDispatcher).x29 = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.y2c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.deactivating.<anonymous>' call
      this.y2c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.s(instance);
  };
  protoOf(RememberEventDispatcher).j1y = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.z2c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.z2c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.s(instance);
  };
  protoOf(RememberEventDispatcher).a2d = function () {
    var deactivating = this.y2c_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(deactivating == null ? true : deactivating.e1())) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:deactivations';
        var token = Trace_instance.m28(sectionName);
        try {
          var inductionVariable = deactivating.n() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.i1(i);
              instance.l1x();
            }
             while (0 <= inductionVariable);
            tmp = Unit_instance;
          }
          break $l$block;
        }finally {
          Trace_instance.e29(token);
        }
      }
      deactivating.c1();
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.w2c_1.e1()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Compose:onForgotten';
        var token_0 = Trace_instance.m28(sectionName_0);
        try {
          var inductionVariable_0 = this.w2c_1.n() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = this.w2c_1.i1(i_0);
              if (!this.u2c_1.r(instance_0)) {
                instance_0.c28();
              }
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_instance;
          }
          break $l$block_0;
        }finally {
          Trace_instance.e29(token_0);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.v2c_1.e1()) {
      $l$block_1: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_1 = 'Compose:onRemembered';
        var token_1 = Trace_instance.m28(sectionName_1);
        try {
          var this_0 = this.v2c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_1 = 0;
          var last = this_0.n() - 1 | 0;
          var tmp_1;
          if (inductionVariable_1 <= last) {
            do {
              var index = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var item = this_0.i1(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.u2c_1.t(item);
              item.a28();
            }
             while (inductionVariable_1 <= last);
            tmp_1 = Unit_instance;
          }
          break $l$block_1;
        }finally {
          Trace_instance.e29(token_1);
        }
      }
    }
    var releasing = this.z2c_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(releasing == null ? true : releasing.e1())) {
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_2 = 'Compose:releases';
        var token_2 = Trace_instance.m28(sectionName_2);
        try {
          var inductionVariable_2 = releasing.n() - 1 | 0;
          var tmp_2;
          if (0 <= inductionVariable_2) {
            do {
              var i_1 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + -1 | 0;
              var instance_1 = releasing.i1(i_1);
              instance_1.m1x();
            }
             while (0 <= inductionVariable_2);
            tmp_2 = Unit_instance;
          }
          break $l$block_2;
        }finally {
          Trace_instance.e29(token_2);
        }
      }
      releasing.c1();
    }
  };
  protoOf(RememberEventDispatcher).b2d = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.x2c_1.e1()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:sideeffects';
        var token = Trace_instance.m28(sectionName);
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.x2c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.n() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.i1(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.x2c_1.c1();
          break $l$block;
        }finally {
          Trace_instance.e29(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).d2d = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.u2c_1.e1()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName = 'Compose:abandons';
        var token = Trace_instance.m28(sectionName);
        try {
          var iterator = this.u2c_1.v();
          while (iterator.w()) {
            var instance = iterator.y();
            iterator.x();
            instance.b28();
          }
          break $l$block;
        }finally {
          Trace_instance.e29(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.n2b_1 = parent;
    this.o2b_1 = applier;
    this.p2b_1 = new AtomicReference(null);
    this.q2b_1 = createSynchronizedObject();
    this.r2b_1 = HashSet_init_$Create$();
    this.s2b_1 = new SlotTable();
    this.t2b_1 = new IdentityScopeMap();
    this.u2b_1 = HashSet_init_$Create$();
    this.v2b_1 = new IdentityScopeMap();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.w2b_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.x2b_1 = ArrayList_init_$Create$();
    this.y2b_1 = new IdentityScopeMap();
    this.z2b_1 = new IdentityArrayMap();
    this.a2c_1 = false;
    this.b2c_1 = null;
    this.c2c_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new ComposerImpl(this.o2b_1, this.n2b_1, this.s2b_1, this.r2b_1, this.w2b_1, this.x2b_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.n2b_1.d28(this_0);
    tmp_1.d2c_1 = this_0;
    this.e2c_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.n2b_1;
    tmp_2.f2c_1 = tmp_3 instanceof Recomposer;
    this.g2c_1 = false;
    this.h2c_1 = ComposableSingletons$CompositionKt_getInstance().i2d_1;
  }
  protoOf(CompositionImpl).f2d = function () {
    return this.d2c_1.h22_1;
  };
  protoOf(CompositionImpl).k2d = function () {
    return this.g2c_1;
  };
  protoOf(CompositionImpl).gk = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q2b_1;
    var tmp;
    if (!this.g2c_1) {
      this.g2c_1 = true;
      this.l2d(ComposableSingletons$CompositionKt_getInstance().j2d_1);
      var deferredChanges = this.d2c_1.o22_1;
      if (!(deferredChanges == null)) {
        applyChangesInLocked(this, deferredChanges);
      }
      var nonEmptySlotTable = this.s2b_1.f23_1 > 0;
      var tmp_0;
      if (nonEmptySlotTable) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !this.r2b_1.e1();
      }
      if (tmp_0) {
        var manager = new RememberEventDispatcher(this.r2b_1);
        if (nonEmptySlotTable) {
          this.o2b_1.a1w();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = this.s2b_1.w24();
          var tmp_1;
          try {
            removeCurrentGroup(writer, manager);
            tmp_1 = Unit_instance;
          }finally {
            writer.j24();
          }
          this.o2b_1.c1();
          this.o2b_1.b1w();
          manager.a2d();
        }
        manager.d2d();
      }
      this.d2c_1.gk();
      tmp = Unit_instance;
    }
    this.n2b_1.f28(this);
  };
  protoOf(CompositionImpl).m2d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q2b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.<get-hasInvalidations>.<anonymous>' call
    return this.z2b_1.v28_1 > 0;
  };
  protoOf(CompositionImpl).n2d = function (values) {
    $l$loop: while (true) {
      var old = this.p2b_1.dq();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_1((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + this.p2b_1;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.p2b_1.o2d(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this.q2b_1;
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).p2d = function (values) {
    var tmp0_iterator = values.v();
    while (tmp0_iterator.w()) {
      var value = tmp0_iterator.y();
      if (this.t2b_1.s2c(value) ? true : this.v2b_1.s2c(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).b2b = function (block) {
    return this.d2c_1.b2b(block);
  };
  protoOf(CompositionImpl).k2a = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.d2c_1.n2a();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.d2b(true);
        var alreadyRead = tmp0_safe_receiver.q2d(value);
        var tmp;
        if (!alreadyRead) {
          this.t2b_1.t2c(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.v2b_1.r2d(value);
            var indexedObject = value.s2d().t2d();
            var inductionVariable = 0;
            var last = indexedObject.length;
            $l$loop: while (inductionVariable < last) {
              var dependency = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (dependency == null)
                break $l$loop;
              this.v2b_1.t2c(dependency, value);
            }
            tmp_0 = Unit_instance;
          }
          tmp = tmp_0;
        }
      }
    }
  };
  protoOf(CompositionImpl).u2d = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q2b_1;
    invalidateScopeOfLocked(this, value);
    var this_0 = this.v2b_1;
    var index = find_2(this_0, value);
    var tmp;
    if (index >= 0) {
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.n27_1;
      var inductionVariable = 0;
      var last = this_1.m27_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          invalidateScopeOfLocked(this, it);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CompositionImpl).v2d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q2b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.also' call
          var this_0 = this.d2c_1.c2b(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.z2b_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.r2b_1.e1();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.r2b_1)).d2d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).w2d = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.i1(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.vd_1.o20_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.d2c_1.z2a(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r2b_1.e1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r2b_1)).d2d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).x2d = function (state) {
    var manager = new RememberEventDispatcher(this.r2b_1);
    var slotTable = state.j27_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.w24();
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      tmp = Unit_instance;
    }finally {
      writer.j24();
    }
    manager.a2d();
  };
  protoOf(CompositionImpl).y2d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q2b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.w2b_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r2b_1.e1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r2b_1)).d2d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).z2d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q2b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.x2b_1.e1()) {
          applyChangesInLocked(this, this.x2b_1);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r2b_1.e1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r2b_1)).d2d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).p2a = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q2b_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>.<anonymous>' call
        this.d2c_1.p2a();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.r2b_1.e1()) {
          (new RememberEventDispatcher(this.r2b_1)).d2d();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.r2b_1.e1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.r2b_1)).d2d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).a2e = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q2b_1;
    var indexedObject = this.s2b_1.g23_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.b2e();
      }
    }
  };
  protoOf(CompositionImpl).o27 = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.b2c_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.c2c_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.b2c_1 = null;
        this.c2c_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).h2a = function (scope, instance) {
    if (scope.c2e()) {
      scope.x2a(true);
    }
    var anchor = scope.n1y_1;
    if (anchor == null ? true : !anchor.c2d())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.s2b_1.d2e(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.q2b_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.b2c_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.e2e())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).j2a = function (scope) {
    this.a2c_1 = true;
  };
  protoOf(CompositionImpl).f2e = function (instance, scope) {
    this.t2b_1.r2c(instance, scope);
  };
  protoOf(CompositionImpl).g2e = function (state) {
    if (!this.t2b_1.s2c(state)) {
      this.v2b_1.r2d(state);
    }
  };
  protoOf(CompositionImpl).l2d = function (set__$_ezb9bk) {
    this.h2c_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).h2e = function (content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.g2c_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.l2d(content);
    this.n2b_1.l28(this, this.h2c_1);
  };
  protoOf(CompositionImpl).i2e = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent$composable.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this.q2b_1;
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.d2c_1.e2b(invalidations, content);
          tmp_1 = Unit_instance;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.z2b_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_instance;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.r2b_1.e1();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.r2b_1)).d2d();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:506)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.z29(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:597)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.h1z();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.i2d_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.j2d_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.k2e(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.j2e(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.i2a(value);
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      this_0.i2a(value);
      _this__u8e3s4.h2d(key, this_0);
    }
  }
  function Composition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
    this.n23_1 = 0;
  }
  protoOf(CompositionContext).u23 = function (table) {
  };
  protoOf(CompositionContext).d28 = function (composer) {
  };
  protoOf(CompositionContext).e28 = function (composer) {
  };
  protoOf(CompositionContext).p23 = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).o23 = function () {
  };
  protoOf(CompositionContext).w23 = function () {
  };
  protoOf(CompositionContext).i27 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.l2e_1 = new LazyValueHolder(defaultFactory);
    this.m2e_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.q2e_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).r2e = function (value) {
    return new ProvidedValue(this, value, true);
  };
  protoOf(ProvidableCompositionLocal).s2e = function (value) {
    return new ProvidedValue(this, value, false);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).n2e = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@10002L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.c20(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.d20();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.d1z();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.w2e(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function CompositionLocalProvider$composable_0(context, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.c1z(-221175223);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)247@10707L209:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.t1z(context) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.y1z(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.w1y()) {
      if (isTraceInProgress()) {
        traceEventStart(-221175223, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:246)');
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = context.x2e_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(this_0.n());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this_0.q2().v();
      while (tmp0_iterator.w()) {
        var item = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.CompositionLocalProvider$composable.<anonymous>' call
        var tmp = item.t2();
        var tmp$ret$1 = (tmp instanceof ProvidableCompositionLocal ? tmp : THROW_CCE()).r2e(item.u2().u2());
        destination.s(tmp$ret$1);
      }
      var tmp$ret$4 = copyToArray(destination);
      CompositionLocalProvider$composable(tmp$ret$4.slice(), content, $composer_0, 112 & $dirty);
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
      tmp0_safe_receiver.w2e(CompositionLocalProvider$composable$lambda_0(context, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.c2f_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).n2e = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      var value_0 = mutableStateOf(value, this.c2f_1);
      $composer_1.s1z(value_0);
      tmp = value_0;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp0.h1a(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  };
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function CompositionLocalProvider$composable$lambda_0($context, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable_0($context, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.d2f_1 = persistentCompositionLocalHashMapOf();
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.l2e_1.u2();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.y2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.b3(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u2();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-2040419351);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):CompositionLocalMap.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-2040419351, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (CompositionLocalMap.kt:91)');
    }
    var result = persistentCompositionLocalHashMapOf();
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = result.u24();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var provided = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.f1x(1391435594);
      sourceInformation($composer_0, '*101@4372L24');
      if (provided.h20_1 ? true : !contains_0(parentScope, provided.f20_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.f20_1;
        var key = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var value = provided.f20_1.n2e(provided.g20_1, $composer_0, 0);
        this_0.r2(key, value);
      }
      $composer_0.h1x();
    }
    var tmp0 = this_0.v24();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function get_calculationBlockNestedLevel() {
    _init_properties_DerivedState_kt__eqt0x8();
    return calculationBlockNestedLevel;
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().dq();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(0), null);
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().i2f(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function derivedStateOf(calculation) {
    _init_properties_DerivedState_kt__eqt0x8();
    return new DerivedSnapshotState(calculation, null);
  }
  function derivedStateOf_0(policy, calculation) {
    _init_properties_DerivedState_kt__eqt0x8();
    return new DerivedSnapshotState(calculation, policy);
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.j2f_1 = new Object();
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function ResultRecord() {
    Companion_getInstance_3();
    StateRecord.call(this);
    this.n2f_1 = 0;
    this.o2f_1 = 0;
    this.p2f_1 = null;
    this.q2f_1 = Companion_getInstance_3().j2f_1;
    this.r2f_1 = 0;
    this.s2f_1 = 8;
  }
  protoOf(ResultRecord).t2f = function (value) {
    var other = value instanceof ResultRecord ? value : THROW_CCE();
    this.p2f_1 = other.p2f_1;
    this.q2f_1 = other.q2f_1;
    this.r2f_1 = other.r2f_1;
  };
  protoOf(ResultRecord).u2f = function () {
    return new ResultRecord();
  };
  protoOf(ResultRecord).v2f = function (derivedState, snapshot) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.ResultRecord.isValid.<anonymous>' call
    var snapshotChanged = !(this.n2f_1 === snapshot.s28()) ? true : !(this.o2f_1 === snapshot.w2f());
    var isValid = !(this.q2f_1 === Companion_getInstance_3().j2f_1) ? !snapshotChanged ? true : this.r2f_1 === this.x2f(derivedState, snapshot) : false;
    if (isValid ? snapshotChanged : false) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      this.n2f_1 = snapshot.s28();
      this.o2f_1 = snapshot.w2f();
    }
    return isValid;
  };
  protoOf(ResultRecord).x2f = function (derivedState, snapshot) {
    var hash = 7;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.ResultRecord.readableHash.<anonymous>' call
    var dependencies = this.p2f_1;
    if (!(dependencies == null)) {
      // Inline function 'androidx.compose.runtime.notifyObservers' call
      var observers = derivedStateObservers_0();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var size = observers.a29_1;
      if (size > 0) {
        var i = 0;
        var tmp = observers.y28_1;
        var content = isArray(tmp) ? tmp : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
          content[i].o29(derivedState);
          i = i + 1 | 0;
        }
         while (i < size);
      }
      var tmp_0;
      try {
        var inductionVariable = 0;
        var last = dependencies.v28_1;
        var tmp_1;
        if (inductionVariable < last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            $l$block: {
              // Inline function 'androidx.compose.runtime.ResultRecord.readableHash.<anonymous>.<anonymous>' call
              var tmp_2 = dependencies.t28_1[index];
              var stateObject = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
              var tmp_3 = dependencies.u28_1[index];
              if (!(((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()) === 1)) {
                break $l$block;
              }
              var tmp_4;
              if (stateObject instanceof DerivedSnapshotState) {
                tmp_4 = stateObject.c2g(snapshot);
              } else {
                tmp_4 = current_0(stateObject.y2f(), snapshot);
              }
              var record = tmp_4;
              hash = imul(31, hash) + identityHashCode(record) | 0;
              hash = imul(31, hash) + record.d2g_1 | 0;
            }
          }
           while (inductionVariable < last);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }finally {
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var size_0 = observers.a29_1;
        if (size_0 > 0) {
          var i_0 = 0;
          var tmp_5 = observers.y28_1;
          var content_0 = isArray(tmp_5) ? tmp_5 : THROW_CCE();
          do {
            // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
            content_0[i_0].p29(derivedState);
            i_0 = i_0 + 1 | 0;
          }
           while (i_0 < size_0);
        }
      }
    }
    return hash;
  };
  protoOf(ResultRecord).g2g = function () {
    var tmp = this.q2f_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ResultRecord).t2d = function () {
    var tmp0_safe_receiver = this.p2f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t28_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  function currentRecord($this, readable, snapshot, forceDependencyReads, calculation) {
    if (readable.v2f($this, snapshot)) {
      if (forceDependencyReads) {
        // Inline function 'androidx.compose.runtime.notifyObservers' call
        var observers = derivedStateObservers_0();
        // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var size = observers.a29_1;
        if (size > 0) {
          var i = 0;
          var tmp = observers.y28_1;
          var content = isArray(tmp) ? tmp : THROW_CCE();
          do {
            // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
            content[i].o29($this);
            i = i + 1 | 0;
          }
           while (i < size);
        }
        var tmp_0;
        try {
          var dependencies = readable.p2f_1;
          var tmp0_elvis_lhs = get_calculationBlockNestedLevel().dq();
          var invalidationNestedLevel = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
          if (dependencies == null)
            null;
          else {
            // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
            var inductionVariable = 0;
            var last = dependencies.v28_1;
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>.<anonymous>' call
                var tmp_1 = dependencies.t28_1[index];
                var dependency = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
                var tmp_2 = dependencies.u28_1[index];
                var nestedLevel = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                get_calculationBlockNestedLevel().i2f(nestedLevel + invalidationNestedLevel | 0);
                var tmp0_safe_receiver = snapshot.h2g();
                if (tmp0_safe_receiver == null)
                  null;
                else
                  tmp0_safe_receiver(dependency);
              }
               while (inductionVariable < last);
          }
          get_calculationBlockNestedLevel().i2f(invalidationNestedLevel);
          tmp_0 = Unit_instance;
        }finally {
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          // Inline function 'kotlin.contracts.contract' call
          var size_0 = observers.a29_1;
          if (size_0 > 0) {
            var i_0 = 0;
            var tmp_3 = observers.y28_1;
            var content_0 = isArray(tmp_3) ? tmp_3 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
              content_0[i_0].p29($this);
              i_0 = i_0 + 1 | 0;
            }
             while (i_0 < size_0);
          }
        }
      }
      return readable;
    }
    var tmp0_elvis_lhs_0 = get_calculationBlockNestedLevel().dq();
    var nestedCalculationLevel = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    var newDependencies = new IdentityArrayMap();
    // Inline function 'androidx.compose.runtime.notifyObservers' call
    var observers_0 = derivedStateObservers_0();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var size_1 = observers_0.a29_1;
    if (size_1 > 0) {
      var i_1 = 0;
      var tmp_4 = observers_0.y28_1;
      var content_1 = isArray(tmp_4) ? tmp_4 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
        content_1[i_1].o29($this);
        i_1 = i_1 + 1 | 0;
      }
       while (i_1 < size_1);
    }
    var tmp_5;
    try {
      // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>' call
      get_calculationBlockNestedLevel().i2f(nestedCalculationLevel + 1 | 0);
      var tmp_6 = Companion_instance_12;
      var result = tmp_6.i2g(DerivedSnapshotState$currentRecord$lambda($this, newDependencies, nestedCalculationLevel), null, calculation);
      get_calculationBlockNestedLevel().i2f(nestedCalculationLevel);
      tmp_5 = result;
    }finally {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var size_2 = observers_0.a29_1;
      if (size_2 > 0) {
        var i_2 = 0;
        var tmp_7 = observers_0.y28_1;
        var content_2 = isArray(tmp_7) ? tmp_7 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.notifyObservers.<anonymous>' call
          content_2[i_2].p29($this);
          i_2 = i_2 + 1 | 0;
        }
         while (i_2 < size_2);
      }
    }
    var result_0 = tmp_5;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.currentRecord.<anonymous>' call
    var currentSnapshot = Companion_instance_12.z1v();
    var tmp_8;
    var tmp_9;
    if (!(readable.q2f_1 === Companion_getInstance_3().j2f_1)) {
      var tmp0_safe_receiver_0 = $this.a2g_1;
      var tmp_10;
      if (tmp0_safe_receiver_0 == null) {
        tmp_10 = null;
      } else {
        var tmp_11 = readable.q2f_1;
        tmp_10 = tmp0_safe_receiver_0.j2g(result_0, (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE());
      }
      tmp_9 = tmp_10 === true;
    } else {
      tmp_9 = false;
    }
    if (tmp_9) {
      readable.p2f_1 = newDependencies;
      readable.r2f_1 = readable.x2f($this, currentSnapshot);
      readable.n2f_1 = snapshot.s28();
      readable.o2f_1 = snapshot.w2f();
      tmp_8 = readable;
    } else {
      var writable = newWritableRecord($this.b2g_1, $this, currentSnapshot);
      writable.p2f_1 = newDependencies;
      writable.r2f_1 = writable.x2f($this, currentSnapshot);
      writable.n2f_1 = snapshot.s28();
      writable.o2f_1 = snapshot.w2f();
      writable.q2f_1 = result_0;
      tmp_8 = writable;
    }
    var record = tmp_8;
    if (nestedCalculationLevel === 0) {
      Companion_instance_12.k2g();
    }
    return record;
  }
  function displayValue($this) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = $this.b2g_1;
    var it = current(this_0);
    if (it.v2f($this, Companion_instance_12.z1v())) {
      return toString_0(it.q2f_1);
    }
    return '<Not calculated>';
  }
  function DerivedSnapshotState$currentRecord$lambda(this$0, $newDependencies, $nestedCalculationLevel) {
    return function (it) {
      var tmp;
      if (it === this$0) {
        var message = 'A derived state calculation cannot read itself';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp_0;
      if (isInterface(it, StateObject)) {
        var readNestedLevel = ensureNotNull(get_calculationBlockNestedLevel().dq());
        // Inline function 'kotlin.math.min' call
        var a = readNestedLevel - $nestedCalculationLevel | 0;
        var tmp0_elvis_lhs = $newDependencies.j2e(it);
        var b = tmp0_elvis_lhs == null ? IntCompanionObject_instance.MAX_VALUE : tmp0_elvis_lhs;
        var tmp$ret$0 = Math.min(a, b);
        $newDependencies.h2d(it, tmp$ret$0);
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function DerivedSnapshotState(calculation, policy) {
    this.z2f_1 = calculation;
    this.a2g_1 = policy;
    this.b2g_1 = new ResultRecord();
  }
  protoOf(DerivedSnapshotState).f2f = function () {
    return this.a2g_1;
  };
  protoOf(DerivedSnapshotState).c2g = function (snapshot) {
    return currentRecord(this, current_0(this.b2g_1, snapshot), snapshot, false, this.z2f_1);
  };
  protoOf(DerivedSnapshotState).y2f = function () {
    return this.b2g_1;
  };
  protoOf(DerivedSnapshotState).l2g = function (value) {
    var tmp = this;
    tmp.b2g_1 = value instanceof ResultRecord ? value : THROW_CCE();
  };
  protoOf(DerivedSnapshotState).u2 = function () {
    var tmp0_safe_receiver = Companion_instance_12.z1v().h2g();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this);
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.b2g_1;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-value>.<anonymous>' call
    var it = current(this_0);
    var tmp = currentRecord(this, it, Companion_instance_12.z1v(), true, this.z2f_1).q2f_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(DerivedSnapshotState).s2d = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.b2g_1;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.<get-currentRecord>.<anonymous>' call
    var it = current(this_0);
    return currentRecord(this, it, Companion_instance_12.z1v(), false, this.z2f_1);
  };
  protoOf(DerivedSnapshotState).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.b2g_1;
    // Inline function 'androidx.compose.runtime.DerivedSnapshotState.toString.<anonymous>' call
    current(this_0);
    return 'DerivedState(value=' + displayValue(this) + ')@' + hashCode(this);
  };
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
    this.n2g_1 = 0;
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.f1x(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)337@14241L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:332)');
    }
    var applyContext = $composer_0.e20();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.t1z(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.h1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
  }
  function SideEffect$composable(effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.f1x(-706403066);
    sourceInformation($composer_0, 'C(SideEffect$composable):Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-706403066, $changed, -1, 'androidx.compose.runtime.SideEffect$composable (Effects.kt:44)');
    }
    $composer_0.z1z(effect);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
  }
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.f1x(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_1.t1z(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.h1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.o2g_1 = task;
    this.p2g_1 = CoroutineScope(parentCoroutineContext);
    this.q2g_1 = null;
  }
  protoOf(LaunchedEffectImpl).a28 = function () {
    var tmp0_safe_receiver = this.q2g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.q2g_1 = launch(this.p2g_1, VOID, VOID, this.o2g_1);
  };
  protoOf(LaunchedEffectImpl).c28 = function () {
    var tmp0_safe_receiver = this.q2g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vi(new LeftCompositionCancellationException());
    }
    this.q2g_1 = null;
  };
  protoOf(LaunchedEffectImpl).b28 = function () {
    var tmp0_safe_receiver = this.q2g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.vi(new LeftCompositionCancellationException());
    }
    this.q2g_1 = null;
  };
  function DisposableEffectImpl(effect) {
    this.r2g_1 = effect;
    this.s2g_1 = null;
  }
  protoOf(DisposableEffectImpl).a28 = function () {
    this.s2g_1 = this.r2g_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).c28 = function () {
    var tmp0_safe_receiver = this.s2g_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gk();
    }
    this.s2g_1 = null;
  };
  protoOf(DisposableEffectImpl).b28 = function () {
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function LaunchedEffect$composable_0(key1, key2, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.f1x(-1365960137);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1,2)360@15249L64:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1365960137, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:354)');
    }
    var applyContext = $composer_0.e20();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.t1z(key1) | $composer_1.t1z(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.h1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
  }
  function CompositionScopedCoroutineScopeCanceller(coroutineScope) {
    this.t2g_1 = coroutineScope;
  }
  protoOf(CompositionScopedCoroutineScopeCanceller).a28 = function () {
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).c28 = function () {
    cancel_0(this.t2g_1, new LeftCompositionCancellationException());
  };
  protoOf(CompositionScopedCoroutineScopeCanceller).b28 = function () {
    cancel_0(this.t2g_1, new LeftCompositionCancellationException());
  };
  function createCompositionCoroutineScope(coroutineContext, composer) {
    _init_properties_Effects_kt__be5lps();
    var tmp;
    if (!(coroutineContext.ob(Key_instance) == null)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Job();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.createCompositionCoroutineScope.<anonymous>' call
      this_0.ut(IllegalArgumentException_init_$Create$('CoroutineContext supplied to rememberCoroutineScope may not include a parent job'));
      tmp = CoroutineScope(this_0);
    } else {
      var applyContext = composer.e20();
      tmp = CoroutineScope(applyContext.ef(Job(applyContext.ob(Key_instance))).ef(coroutineContext));
    }
    return tmp;
  }
  function DisposableEffect$composable_0(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.f1x(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_1.t1z(key1) | $composer_1.t1z(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (invalid ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    $composer_1.h1x();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.j9_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.u2g_1 = left;
    this.v2g_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.u2g_1), 31) + hashCodeOf(this, this.v2g_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.u2g_1) + ', right=' + toString_0(this.v2g_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.u2g_1, tmp0_other_with_cast.u2g_1))
      return false;
    if (!equals(this.v2g_1, tmp0_other_with_cast.v2g_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.ob(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function withFrameNanos(onFrame, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.u6();
    return get_monotonicFrameClock(tmp$ret$0).d1x(onFrame, $completion);
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.w2g_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.w2g_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.w2g_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.w2g_1 === tmp0_other_with_cast.w2g_1))
      return false;
    return true;
  };
  function produceState$composable(initialValue, key1, key2, producer, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(-655265235);
    sourceInformation($composer_0, 'C(produceState$composable)147@5571L41,148@5617L101:ProduceState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-655265235, $changed, -1, 'androidx.compose.runtime.produceState$composable (ProduceState.kt:141)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.runtime.produceState$composable.<anonymous>' call
      var value = mutableStateOf(initialValue);
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    var result = tmp0;
    LaunchedEffect$composable_0(key1, key2, produceState$composable$slambda_0(producer, result, null), $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return result;
  }
  function ProduceStateScope() {
  }
  function ProduceStateScopeImpl(state, coroutineContext) {
    this.x2g_1 = coroutineContext;
    this.y2g_1 = state;
  }
  protoOf(ProduceStateScopeImpl).mh = function () {
    return this.x2g_1;
  };
  protoOf(ProduceStateScopeImpl).h1a = function (_set____db54di) {
    this.y2g_1.h1a(_set____db54di);
  };
  protoOf(ProduceStateScopeImpl).u2 = function () {
    return this.y2g_1.u2();
  };
  function produceState$composable$slambda($producer, $result, resultContinuation) {
    this.h2h_1 = $producer;
    this.i2h_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(produceState$composable$slambda).v1b = function ($this$LaunchedEffect, $completion) {
    var tmp = this.w1b($this$LaunchedEffect, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(produceState$composable$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(produceState$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.h2h_1(new ProduceStateScopeImpl(this.i2h_1, this.j2h_1.mh()), this);
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
  protoOf(produceState$composable$slambda).w1b = function ($this$LaunchedEffect, completion) {
    var i = new produceState$composable$slambda(this.h2h_1, this.i2h_1, completion);
    i.j2h_1 = $this$LaunchedEffect;
    return i;
  };
  function produceState$composable$slambda_0($producer, $result, resultContinuation) {
    var i = new produceState$composable$slambda($producer, $result, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.v1b($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.l1y_1 = $this.l1y_1 | 32;
    } else {
      $this.l1y_1 = $this.l1y_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.l1y_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.l1y_1 = $this.l1y_1 | 16;
    } else {
      $this.l1y_1 = $this.l1y_1 & -17;
    }
  }
  function Companion_3() {
  }
  protoOf(Companion_3).u27 = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.e1()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.i1(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.k2h(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.l2h(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_3).v27 = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.e1()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.i1(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.d2e(item)) {
              var tmp_1 = slots.y29(slots.h27(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.p1y_1 === $token ? equals($instances, this$0.q1y_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var this_0 = $instances;
        var keys = this_0.n2h_1;
        var values = this_0.o2h_1;
        var size = this_0.m2h_1;
        var destinationIndex = 0;
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = keys[i];
            var key = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
            var value = values[i];
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.also' call
            var this_1 = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (this_1) {
              composition.f2e(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.g2e(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.r1y_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.p2h(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.v28_1 === 0) {
                    this$0.r1y_1 = null;
                    tmp_3 = Unit_instance;
                  }
                  tmp_2 = Unit_instance;
                }
              }
            }
            if (!this_1) {
              if (!(destinationIndex === i)) {
                keys[destinationIndex] = key;
                values[destinationIndex] = value;
              }
              destinationIndex = destinationIndex + 1 | 0;
            }
          }
           while (inductionVariable < size);
        var inductionVariable_0 = destinationIndex;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            keys[i_0] = null;
          }
           while (inductionVariable_0 < size);
        this_0.m2h_1 = destinationIndex;
        var tmp_4;
        if ($instances.m2h_1 === 0) {
          this$0.q1y_1 = null;
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.l1y_1 = 0;
    this.m1y_1 = owner;
    this.n1y_1 = null;
    this.o1y_1 = null;
    this.p1y_1 = 0;
    this.q1y_1 = null;
    this.r1y_1 = null;
  }
  protoOf(RecomposeScopeImpl).c2d = function () {
    var tmp;
    if (!(this.m1y_1 == null)) {
      var tmp0_safe_receiver = this.n1y_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c2d();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).e2e = function () {
    return !(this.o1y_1 == null);
  };
  protoOf(RecomposeScopeImpl).d2b = function (value) {
    if (value) {
      this.l1y_1 = this.l1y_1 | 1;
    } else {
      this.l1y_1 = this.l1y_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).c26 = function () {
    return !((this.l1y_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).o2a = function (value) {
    if (value) {
      this.l1y_1 = this.l1y_1 | 2;
    } else {
      this.l1y_1 = this.l1y_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).c2e = function () {
    return !((this.l1y_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).x2a = function (value) {
    if (value) {
      this.l1y_1 = this.l1y_1 | 4;
    } else {
      this.l1y_1 = this.l1y_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).x1y = function () {
    return !((this.l1y_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).c27 = function (value) {
    if (value) {
      this.l1y_1 = this.l1y_1 | 8;
    } else {
      this.l1y_1 = this.l1y_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).q2a = function () {
    return !((this.l1y_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).t26 = function (composer) {
    var tmp0_safe_receiver = this.o1y_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).m2c = function (value) {
    var tmp0_safe_receiver = this.m1y_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2a(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).fp = function () {
    var tmp0_safe_receiver = this.m1y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j2a(this);
    }
    this.m1y_1 = null;
    this.q1y_1 = null;
    this.r1y_1 = null;
  };
  protoOf(RecomposeScopeImpl).l2h = function (owner) {
    this.m1y_1 = owner;
  };
  protoOf(RecomposeScopeImpl).b2e = function () {
    var tmp0_safe_receiver = this.m1y_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.h2a(this, null);
  };
  protoOf(RecomposeScopeImpl).w2e = function (block) {
    this.o1y_1 = block;
  };
  protoOf(RecomposeScopeImpl).y2a = function () {
    return !((this.l1y_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).d27 = function (token) {
    this.p1y_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).u2a = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).q2d = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.q1y_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.q1y_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.q2h(instance, this.p1y_1);
    if (token === this.p1y_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.r1y_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.r1y_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.h2d(instance, instance.s2d().g2g());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).l2c = function () {
    return !(this.r1y_1 == null);
  };
  protoOf(RecomposeScopeImpl).j2b = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.r1y_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.q27()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (isInterface(instances, Collection)) {
          tmp_1 = instances.e1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.f2f();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.j2g(element.s2d().g2g(), trackedDependencies.j2e(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).s26 = function () {
    var tmp0_safe_receiver = this.m1y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.q1y_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var keys = tmp0_safe_receiver_0.n2h_1;
          var values = tmp0_safe_receiver_0.o2h_1;
          var size = tmp0_safe_receiver_0.m2h_1;
          var inductionVariable = 0;
          var tmp_1;
          if (inductionVariable < size) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              var value = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
              values[i];
              tmp0_safe_receiver.k2a(value);
            }
             while (inductionVariable < size);
            tmp_1 = Unit_instance;
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).w2a = function (token) {
    var tmp0_safe_receiver = this.q1y_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.y2a()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var keys = tmp0_safe_receiver.n2h_1;
          var values = tmp0_safe_receiver.o2h_1;
          var size = tmp0_safe_receiver.m2h_1;
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              !(tmp_2 == null) || THROW_CCE();
              if (!(values[i] === token)) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < size);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.r2h_1.u2();
      var new_0 = old.s(info);
      if (old === new_0 ? true : $this.r2h_1.i1a(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.r2h_1.u2();
      var new_0 = old.t(info);
      if (old === new_0 ? true : $this.r2h_1.i1a(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.c1();
    toInsert.c1();
    toApply.c1();
    toLateApply.c1();
    toComplete.c1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.c1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.w2h_1;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.d2i_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.i1(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.s(item);
      }
       while (inductionVariable <= last);
    this$0.d2i_1.c1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var sectionName = 'Recomposer:animation';
          var token = Trace_instance.m28(sectionName);
          try {
            this$0.v2h_1.c1x(frameTime);
            Companion_instance_12.s2i();
            break $l$block;
          }finally {
            Trace_instance.e29(token);
          }
        }
        tmp = Unit_instance;
      }
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var sectionName_0 = 'Recomposer:recompose';
        var token_0 = Trace_instance.m28(sectionName_0);
        try {
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.w2h_1;
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this$0.b2i_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.n() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.i1(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.s(item);
            }
             while (inductionVariable <= last);
          this$0.b2i_1.c1();
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.e1()) {
              tmp_0 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_0 = !$toInsert.e1();
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_1.n() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.i1(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.i2a(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.s(tmp0_safe_receiver);
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.c1();
            }
            if (modifiedValues.q27()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              this$0.w2h_1;
              var this_2 = this$0.z2h_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = this_2.n() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = this_2.i1(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.t2i(item_1) ? item_1.p2d(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.s(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_instance;
              }
            }
            if ($toRecompose.e1()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.e1()) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var this_3 = $toLateApply;
                  var elements = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll(this_3, elements);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.e1()) {
            var tmp0_this = this$0;
            tmp0_this.u2h_1 = tmp0_this.u2h_1.ta();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = this_4.n() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = this_4.i1(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.s(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = this_5.n() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = this_5.i1(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.y2d();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.c1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toLateApply.e1()) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              var this_6 = $toComplete;
              var elements_0 = $toLateApply;
              addAll(this_6, elements_0);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.v();
              while (tmp0_iterator.w()) {
                var element = tmp0_iterator.y();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.z2d();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.c1();
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toComplete.e1()) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.v();
              while (tmp0_iterator_0.w()) {
                var element_0 = tmp0_iterator_0.y();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.p2a();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.c1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          this$0.w2h_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.k2g();
          this$0.h2i_1 = null;
          break $l$block_0;
        }finally {
          Trace_instance.e29(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.w2h_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.n2i_1.u2().k9(State_Idle_getInstance()) >= 0) {
        this$0.a2i_1.u2i(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.v6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.d2j_1 = $block;
    this.e2j_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).v1b = function ($this$coroutineScope, $completion) {
    var tmp = this.w1b($this$coroutineScope, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.d2j_1(this.f2j_1, this.e2j_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).w1b = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.d2j_1, this.e2j_1, completion);
    i.f2j_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.v1b($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.m2i_1 ? $this.v2h_1.b1x() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.n2i_1.u2().k9(State_ShuttingDown_getInstance()) <= 0) {
      $this.z2h_1.c1();
      $this.a2i_1 = new IdentityArraySet();
      $this.b2i_1.c1();
      $this.c2i_1.c1();
      $this.d2i_1.c1();
      $this.g2i_1 = null;
      var tmp0_safe_receiver = $this.i2i_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.mm();
      $this.i2i_1 = null;
      $this.l2i_1 = null;
      return null;
    }
    var tmp;
    if (!($this.l2i_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.x2h_1 == null) {
        $this.a2i_1 = new IdentityArraySet();
        $this.b2i_1.c1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.b2i_1.e1()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.a2i_1.q27();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.c2i_1.e1();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.d2i_1.e1();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.j2i_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.n2i_1.h1a(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.i2i_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.i2i_1 = null;
      tmp_5 = this_0;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.k2i_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.o2i_1.fq().v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.nh()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.g2j_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.h2j_1 = recoverable;
    this.i2j_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.a2i_1.e1())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = $this.a2i_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.a2i_1 = new IdentityArraySet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = toMutableList($this.z2h_1);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.i1(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.n2d(changes);
            if ($this.n2i_1.u2().k9(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.a2i_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.w2h_1;
        $this.a2i_1.u2i(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.y2h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.n2i_1.u2().k9(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.x2h_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.x2h_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_5().s2h_1.dq()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.w2h_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.c2i_1.c1();
      $this.b2i_1.c1();
      $this.a2i_1 = new IdentityArraySet();
      $this.d2i_1.c1();
      $this.e2i_1.c1();
      $this.f2i_1.c1();
      $this.l2i_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.g2i_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var this_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.g2i_1 = this_0;
          tmp_0 = this_0;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.r(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.s(failedInitialComposition);
        }
        // Inline function 'kotlin.collections.minusAssign' call
        $this.z2h_1.t(failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.a2i_1.q27()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.b2i_1.e1();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$2($this, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.u6();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.v2h_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w2h_1;
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_0 = $this.d2i_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.i1(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.o20_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_instance;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.e1()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.f2d() ? true : composition.k2d()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.h2i_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.s2j(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.t2j();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.q27()) === true) {
              composition.b2b(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.v2d();
            break $l$block;
          }finally {
            snapshot.u2j(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.n());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.i1(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.o20_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.b3(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.r2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.s(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.q2().v();
    while (tmp0_iterator.w()) {
      var tmp1_loop_parameter = tmp0_iterator.y();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.t2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.u2();
      runtimeCheck(!composition.f2d());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.s2j(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.t2j();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              $this.w2h_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.n());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.n() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.i1(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var element = to(item_0, removeLastMultiValue($this.e2i_1, item_0.m20_1));
                  target.s(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.w2d(pairs);
              break $l$block;
            }finally {
              snapshot.u2j(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.o2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.e2i_1.e1()) {
      var references = flatten($this.e2i_1.p2());
      $this.e2i_1.c1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.n());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.i1(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var element = to(item, $this.f2i_1.b3(item));
          target.s(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.f2i_1.c1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.i1(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.ae();
        var state = item_0.be();
        if (!(state == null)) {
          reference.o20_1.x2d(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.k2k();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.gk();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.b2i_1.e1()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_5 = this;
    this.r2h_1 = MutableStateFlow(persistentSetOf());
    this.s2h_1 = new AtomicReference(false);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.c1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this$0.w2h_1;
    var iterator = this$0.d2i_1.v();
    while (iterator.w()) {
      var value = iterator.y();
      if (equals(value.o20_1, $composition)) {
        toInsert.s(value);
        iterator.x();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.w2h_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.n2i_1.u2().k9(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.y2h_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.v6(tmp$ret$4);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.w2h_1;
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.y2h_1 = tmp_0;
      this$0.n2i_1.h1a(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.w2h_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.x2h_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.n2i_1.h1a(State_ShuttingDown_getInstance());
        if (!this$0.k2i_1) {
          runnerJob.vi(cancellation);
        } else if (!(this$0.i2i_1 == null)) {
          continuationToResume = this$0.i2i_1;
        }
        this$0.i2i_1 = null;
        tmp = runnerJob.pi(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.y2h_1 = cancellation;
        this$0.n2i_1.h1a(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.v6(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.t2k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).b2l = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.c2l($this$recompositionRunner, parentFrameClock, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.b2l(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 6;
            var tmp_0 = this;
            tmp_0.w2k_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.x2k_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.y2k_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.z2k_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.a2l_1 = LinkedHashSet_init_$Create$();
            this.hb_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.t2k_1)) {
              this.hb_1 = 5;
              continue $sm;
            }

            this.hb_1 = 2;
            suspendResult = awaitWorkAvailable(this.t2k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.t2k_1)) {
              this.hb_1 = 1;
              continue $sm;
            } else {
              this.hb_1 = 3;
              continue $sm;
            }

          case 3:
            this.hb_1 = 4;
            suspendResult = this.v2k_1.d1x(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.t2k_1, this.w2k_1, this.x2k_1, this.y2k_1, this.z2k_1, this.a2l_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.t2k_1);
            this.hb_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 6) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).c2l = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.t2k_1, completion);
    i.u2k_1 = $this$recompositionRunner;
    i.v2k_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.b2l($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.l2l_1 = this$0;
    this.m2l_1 = $block;
    this.n2l_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).v1b = function ($this$withContext, $completion) {
    var tmp = this.w1b($this$withContext, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(Recomposer$recompositionRunner$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 5;
            this.p2l_1 = get_job(this.o2l_1.mh());
            registerRunnerJob(this.l2l_1, this.p2l_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.q2l_1 = tmp_1.s2l(Recomposer$recompositionRunner$slambda$lambda(this.l2l_1));
            addRunning(Companion_getInstance_5(), this.l2l_1.q2i_1);
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.ib_1 = 4;
            this.l2l_1.w2h_1;
            var this_0 = toMutableList(this.l2l_1.z2h_1);
            var inductionVariable = 0;
            var last = this_0.n() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.i1(index);
                item.a2e();
              }
               while (inductionVariable <= last);
            this.hb_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.m2l_1, this.n2l_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r2l_1 = suspendResult;
            this.ib_1 = 5;
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.ib_1 = 5;
            this.q2l_1.gk();
            this.l2l_1.w2h_1;
            if (this.l2l_1.x2h_1 === this.p2l_1) {
              this.l2l_1.x2h_1 = null;
            }

            deriveStateLocked(this.l2l_1);
            removeRunning(Companion_getInstance_5(), this.l2l_1.q2i_1);
            return Unit_instance;
          case 4:
            this.ib_1 = 5;
            var t = this.kb_1;
            this.q2l_1.gk();
            this.l2l_1.w2h_1;
            if (this.l2l_1.x2h_1 === this.p2l_1) {
              this.l2l_1.x2h_1 = null;
            }

            deriveStateLocked(this.l2l_1);
            removeRunning(Companion_getInstance_5(), this.l2l_1.q2i_1);
            throw t;
          case 5:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 5) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).w1b = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.l2l_1, this.m2l_1, this.n2l_1, completion);
    i.o2l_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.v1b($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var values = this_0.n27_1;
      var inductionVariable = 0;
      var last = this_0.m27_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var it = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
          $composition.u2d(it);
        }
         while (inductionVariable < last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.k2a(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.u2d(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.i2a(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2j_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$2).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.r2j_1)) {
              this.hb_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.jl();
              this.r2j_1.w2h_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.r2j_1)) {
                tmp_0 = cancellable;
              } else {
                this.r2j_1.i2i_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.v6(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.ll(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 2;
              continue $sm;
            }

          case 1:
            this.hb_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 3) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_5();
    CompositionContext.call(this);
    this.u2h_1 = new Long(0, 0);
    var tmp = this;
    tmp.v2h_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.w2h_1 = createSynchronizedObject();
    this.x2h_1 = null;
    this.y2h_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z2h_1 = ArrayList_init_$Create$();
    this.a2i_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.b2i_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.c2i_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.d2i_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.e2i_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.f2i_1 = LinkedHashMap_init_$Create$();
    this.g2i_1 = null;
    this.h2i_1 = null;
    this.i2i_1 = null;
    this.j2i_1 = 0;
    this.k2i_1 = false;
    this.l2i_1 = null;
    this.m2i_1 = false;
    this.n2i_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.ob(Key_instance));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.pi(Recomposer$effectJob$lambda(this));
    tmp_6.o2i_1 = this_0;
    this.p2i_1 = effectCoroutineContext.ef(this.v2h_1).ef(this.o2i_1);
    this.q2i_1 = new RecomposerInfoImpl(this);
    this.r2i_1 = 8;
  }
  protoOf(Recomposer).g28 = function () {
    return this.p2i_1;
  };
  protoOf(Recomposer).t2l = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).v23 = function () {
    return 1000;
  };
  protoOf(Recomposer).t23 = function () {
    return false;
  };
  protoOf(Recomposer).u23 = function (table) {
  };
  protoOf(Recomposer).f28 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w2h_1;
    // Inline function 'kotlin.collections.minusAssign' call
    this.z2h_1.t(composition);
    // Inline function 'kotlin.collections.minusAssign' call
    this.b2i_1.t(composition);
    this.c2i_1.t(composition);
  };
  protoOf(Recomposer).h28 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.b2i_1.r(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.b2i_1.s(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.v6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).g27 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.d2i_1.s(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.v6(tmp$ret$3);
    }
  };
  protoOf(Recomposer).j28 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.e2i_1, reference.m20_1, reference);
  };
  protoOf(Recomposer).w27 = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w2h_1;
    this.f2i_1.r2(reference, data);
  };
  protoOf(Recomposer).k28 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.h2i_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.h2i_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.s(composition);
  };
  protoOf(Recomposer).i27 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w2h_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.f2i_1.v2(reference);
  };
  protoOf(Recomposer).l28 = function (composition, content) {
    var composerWasComposing = composition.f2d();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.s2j(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.t2j();
            try {
              composition.i2e(content);
              break $l$block;
            }finally {
              snapshot.u2j(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.k2g();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.w2h_1;
    var tmp;
    if (this.n2i_1.u2().k9(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.z2h_1.r(composition)) {
        this.z2h_1.s(composition);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.y2d();
      composition.z2d();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.k2g();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.b3(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.e1()) {
        _this__u8e3s4.v2(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.b3(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.r2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.s(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.e26(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.e1y_1);
    if (fromWriter.r1x_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.w1x_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.o1x_1;
    var currentGroup = toWriter.e1y_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.o1x_1;
    var destinationOffset = imul(currentGroup, 5);
    var startIndex = imul(fromIndex, 5);
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, startIndex, endIndex);
    var slots = toWriter.p1x_1;
    var currentSlot = toWriter.u1x_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = fromWriter.p1x_1;
    arrayCopy(this_1, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.f1y_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.y1x_1;
    var slotsGapLen = toWriter.x1x_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.w1x_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.y1x_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.q1x_1, fromIndex, fromWriter.n());
    var endAnchors = locationOf(fromWriter.q1x_1, sourceGroupsEnd, fromWriter.n());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.q1x_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.i1(anchorIndex);
          sourceAnchor.w28_1 = sourceAnchor.w28_1 + anchorDelta | 0;
          anchors.s(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.q1x_1, toWriter.e1y_1, toWriter.n());
      toWriter.q1x_1.a2(insertLocation, anchors);
      sourceAnchors.e2(startAnchors, endAnchors).c1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.t24(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.y24();
        fromWriter.c2a(parentGroup - fromWriter.e1y_1 | 0);
        fromWriter.y24();
      }
      fromWriter.c2a(fromIndex - fromWriter.e1y_1 | 0);
      var anchorsRemoved = fromWriter.s1y();
      if (needsStartGroups) {
        fromWriter.h1z();
        fromWriter.l26();
        fromWriter.h1z();
        fromWriter.l26();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.a1y_1 = toWriter.a1y_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.e1y_1 = currentGroup + groupsToMove | 0;
      toWriter.u1x_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.z1x_1 > 0;
    $this.d1y_1.s23($this.a1y_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.e1y_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_0().t1y_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_0().t1y_1) : false;
      initGroup($this.o1x_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.f1y_1, $this.u1x_1);
      $this.v1x_1 = $this.u1x_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.p1x_1;
        var currentSlot = $this.u1x_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.u1x_1 = currentSlot;
      }
      $this.a1y_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.f1y_1 = current;
      $this.e1y_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.f1y_1;
      $this.b1y_1.s23(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.e1y_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_0().t1y_1)) {
        if (isNode) {
          $this.u2l(aux);
        } else {
          $this.v29(aux);
        }
      }
      $this.u1x_1 = slotIndex($this.o1x_1, $this, currentGroupAddress);
      $this.v1x_1 = dataIndex_0($this.o1x_1, $this, groupIndexToAddress($this, $this.e1y_1 + 1 | 0));
      $this.a1y_1 = nodeCount($this.o1x_1, currentGroupAddress);
      $this.f1y_1 = currentGroup;
      $this.e1y_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.o1x_1, currentGroupAddress) | 0;
    }
    tmp.t1x_1 = tmp_0;
  }
  function Companion_5() {
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.o1x_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.o1x_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.h1y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.q27()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.w2l(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.h1y_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.h1y_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.x2l(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.o1x_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.o1x_1, groupAddress, containsAnyMarks);
      var parent = $this.t24(group);
      if (parent >= 0) {
        set.x2l(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.e26(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.o1x_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.e26(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.c1y_1.s23((_get_capacity__a9k9f3($this) - $this.s1x_1 | 0) - $this.t1x_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.s1x_1 | 0) - $this.c1y_1.b26() | 0;
    $this.t1x_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.r1x_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.o1x_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.o1x_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.s1x_1;
    var gapStart = $this.r1x_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.q1x_1.e1()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.o1x_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, startIndex, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.o1x_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.o1x_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.r1x_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.x1x_1;
    var gapStart = $this.w1x_1;
    var slotsGapOwner = $this.y1x_1;
    if (!(gapStart === index)) {
      var slots = $this.p1x_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = gapStart + gapLen | 0;
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, startIndex, endIndex);
      }
    }
    // Inline function 'kotlin.math.min' call
    var a = group + 1 | 0;
    var b = $this.n();
    var newSlotsGapOwner = Math.min(a, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.p1x_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.r1x_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.o1x_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.o1x_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.s1x_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.o1x_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.o1x_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.r1x_1)
            updateAddress_0 = updateAddress_0 + $this.s1x_1 | 0;
        }
      }
      $this.y1x_1 = newSlotsGapOwner;
    }
    $this.w1x_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.w1x_1;
    var slotsGapEnd = slotsGapStart + $this.x1x_1 | 0;
    fill_0($this.p1x_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.e1y_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.r1x_1;
      var gapLen = $this.s1x_1;
      var oldCapacity = $this.o1x_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.o1x_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = imul(newGapEndAddress, 5);
        var startIndex = imul(oldGapEndAddress, 5);
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, destinationOffset, startIndex, endIndex_0);
        $this.o1x_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.t1x_1;
      if (currentEnd >= gapStart)
        $this.t1x_1 = currentEnd + size | 0;
      $this.r1x_1 = gapStart + size | 0;
      $this.s1x_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.y1x_1 < gapStart ? 0 : $this.w1x_1, $this.x1x_1, $this.p1x_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.o1x_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.y1x_1;
      if (slotsGapOwner >= gapStart) {
        $this.y1x_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.u1x_1, group);
      var gapStart = $this.w1x_1;
      var gapLen = $this.x1x_1;
      if (gapLen < size) {
        var slots = $this.p1x_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var a = imul(oldCapacity, 2);
        var b = oldSize + size | 0;
        var a_0 = Math.max(a, b);
        var newCapacity = Math.max(a_0, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.p1x_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.v1x_1;
      if (currentDataEnd >= gapStart)
        $this.v1x_1 = currentDataEnd + size | 0;
      $this.w1x_1 = gapStart + size | 0;
      $this.x1x_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.q1x_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.e1())
        anchorsRemoved = removeAnchors($this, start, len);
      $this.r1x_1 = start;
      var previousGapLen = $this.s1x_1;
      var newGapLen = previousGapLen + len | 0;
      $this.s1x_1 = newGapLen;
      var slotsGapOwner = $this.y1x_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.y1x_1 = Math.max(start, b);
      }
      if ($this.t1x_1 >= $this.r1x_1) {
        $this.t1x_1 = $this.t1x_1 - len | 0;
      }
      if (containsGroupMark($this, $this.f1y_1)) {
        updateContainsMark($this, $this.f1y_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.x1x_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.w1x_1 = start;
      $this.x1x_1 = gapLen + len | 0;
      fill_0($this.p1x_1, null, start, start + len | 0);
      var currentDataEnd = $this.v1x_1;
      if (currentDataEnd >= start)
        $this.v1x_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.o1x_1.length ? isNode($this.o1x_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.p1x_1[dataIndexToDataAddress($this, nodeIndex($this.o1x_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.s1x_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.q1x_1, previousGapStart, size);
      $l$loop_0: while (index < $this.q1x_1.n()) {
        var anchor = $this.q1x_1.i1(index);
        var location = anchor.w28_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.w28_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.q1x_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.q1x_1.n()) {
        var anchor_0 = $this.q1x_1.i1(index_0);
        var location_0 = anchor_0.w28_1;
        if (location_0 >= 0) {
          anchor_0.w28_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.s1x_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.q1x_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.q1x_1.n() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.q1x_1.i1(index);
      var location = $this.h27(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.w28_1 = IntCompanionObject_instance.MIN_VALUE;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.q1x_1.e2(removeAnchorStart, removeAnchorEnd).c1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.n();
    var index = locationOf($this.q1x_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.q1x_1.n()) {
        var anchor = $this.q1x_1.i1(index);
        var location = $this.h27(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.s(anchor);
          $this.q1x_1.k1(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.i1(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.h27(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.r1x_1) {
          item.w28_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.w28_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.q1x_1, newAnchorIndex, groupsSize);
        $this.q1x_1.y1(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.o1x_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.r1x_1 ? index : index + $this.s1x_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.w1x_1 ? dataIndex : dataIndex + $this.x1x_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.o1x_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.p1x_1.length - $this.x1x_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.x1x_1, $this.p1x_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.p1x_1.length - $this.x1x_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.x1x_1, $this.p1x_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.w1x_1, $this.x1x_1, $this.p1x_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.n() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.n() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.z2l_1 = $end;
    this.a2m_1 = this$0;
    this.y2l_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).w = function () {
    return this.y2l_1 < this.z2l_1;
  };
  protoOf(SlotWriter$groupSlots$1).y = function () {
    var tmp;
    if (this.w()) {
      var tmp_0 = this.a2m_1.p1x_1;
      var tmp1 = this.y2l_1;
      this.y2l_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.a2m_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    this.n1x_1 = table;
    this.o1x_1 = this.n1x_1.e23_1;
    this.p1x_1 = this.n1x_1.g23_1;
    this.q1x_1 = this.n1x_1.l23_1;
    this.r1x_1 = this.n1x_1.f23_1;
    this.s1x_1 = (this.o1x_1.length / 5 | 0) - this.n1x_1.f23_1 | 0;
    this.t1x_1 = this.n1x_1.f23_1;
    this.u1x_1 = 0;
    this.v1x_1 = 0;
    this.w1x_1 = this.n1x_1.h23_1;
    this.x1x_1 = this.p1x_1.length - this.n1x_1.h23_1 | 0;
    this.y1x_1 = this.n1x_1.f23_1;
    this.z1x_1 = 0;
    this.a1y_1 = 0;
    this.b1y_1 = new IntStack();
    this.c1y_1 = new IntStack();
    this.d1y_1 = new IntStack();
    this.e1y_1 = 0;
    this.f1y_1 = -1;
    this.g1y_1 = false;
    this.h1y_1 = null;
  }
  protoOf(SlotWriter).i29 = function () {
    return this.e1y_1 < this.t1x_1 ? isNode(this.o1x_1, groupIndexToAddress(this, this.e1y_1)) : false;
  };
  protoOf(SlotWriter).x26 = function (index) {
    return isNode(this.o1x_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).y26 = function (index) {
    return nodeCount(this.o1x_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).s24 = function (index) {
    return key(this.o1x_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).r24 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.o1x_1, address) ? this.p1x_1[objectKeyIndex(this.o1x_1, address)] : null;
  };
  protoOf(SlotWriter).e26 = function (index) {
    return groupSize(this.o1x_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).q24 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.o1x_1, address) ? this.p1x_1[auxIndex(this.o1x_1, this, address)] : Companion_getInstance_0().t1y_1;
  };
  protoOf(SlotWriter).g29 = function (index) {
    return (index > this.f1y_1 ? index < this.t1x_1 : false) ? true : this.f1y_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).j29 = function (index) {
    return this.h29(index, this.e1y_1);
  };
  protoOf(SlotWriter).h29 = function (index, group) {
    var tmp;
    if (group === this.f1y_1) {
      tmp = this.t1x_1;
    } else if (group > this.b1y_1.y27(0)) {
      tmp = group + this.e26(group) | 0;
    } else {
      var openIndex = this.b1y_1.b2m(group);
      tmp = openIndex < 0 ? group + this.e26(group) | 0 : (_get_capacity__a9k9f3(this) - this.s1x_1 | 0) - this.c1y_1.w26(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).p27 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.o1x_1, address) ? this.p1x_1[dataIndexToDataAddress(this, nodeIndex(this.o1x_1, this, address))] : null;
  };
  protoOf(SlotWriter).r29 = function (anchor) {
    return this.p27(anchor.c2m(this));
  };
  protoOf(SlotWriter).t24 = function (index) {
    return parent(this.o1x_1, this, index);
  };
  protoOf(SlotWriter).j24 = function () {
    this.g1y_1 = true;
    if (this.b1y_1.e1()) {
      moveGroupGapTo(this, this.n());
      moveSlotGapTo(this, this.p1x_1.length - this.x1x_1 | 0, this.r1x_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.n1x_1.d2m(this, this.o1x_1, this.r1x_1, this.p1x_1, this.w1x_1, this.q1x_1);
  };
  protoOf(SlotWriter).m2b = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.e1y_1 = 0;
    this.t1x_1 = _get_capacity__a9k9f3(this) - this.s1x_1 | 0;
    this.u1x_1 = 0;
    this.v1x_1 = 0;
    this.a1y_1 = 0;
  };
  protoOf(SlotWriter).s27 = function (value) {
    var result = this.e2m();
    this.f2m(value);
    return result;
  };
  protoOf(SlotWriter).v29 = function (value) {
    var address = groupIndexToAddress(this, this.e1y_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.o1x_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.p1x_1[dataIndexToDataAddress(this, auxIndex(this.o1x_1, this, address))] = value;
  };
  protoOf(SlotWriter).a2b = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z1x_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message = 'Cannot insert auxiliary data when not inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.f1y_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!hasAux(this.o1x_1, parentGroupAddress)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message_0 = 'Group already has auxiliary data';
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.o1x_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.u1x_1 > auxIndex_0) {
      var slotsToMove = this.u1x_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slotsToMove < 3)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        var message_1 = 'Moving more than two slot not supported';
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.p1x_1[auxAddress + 2 | 0] = this.p1x_1[auxAddress + 1 | 0];
      }
      this.p1x_1[auxAddress + 1 | 0] = this.p1x_1[auxAddress];
    }
    addAux(this.o1x_1, parentGroupAddress);
    this.p1x_1[auxAddress] = value;
    this.u1x_1 = this.u1x_1 + 1 | 0;
  };
  protoOf(SlotWriter).u2l = function (value) {
    return updateNodeOfGroup(this, this.e1y_1, value);
  };
  protoOf(SlotWriter).q29 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.c2m(this), value);
  };
  protoOf(SlotWriter).f2m = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.u1x_1 <= this.v1x_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.p1x_1[dataIndexToDataAddress(this, this.u1x_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).t29 = function (index, value) {
    var address = groupIndexToAddress(this, this.e1y_1);
    var slotsStart = slotIndex(this.o1x_1, this, address);
    var slotsEnd = dataIndex_0(this.o1x_1, this, groupIndexToAddress(this, this.e1y_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + this.e1y_1;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.p1x_1[slotAddress];
    this.p1x_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).e2m = function () {
    if (this.z1x_1 > 0) {
      insertSlots(this, 1, this.f1y_1);
    }
    var tmp = this.p1x_1;
    var tmp1 = this.u1x_1;
    this.u1x_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).k2h = function (anchor, index) {
    return this.y29(this.h27(anchor), index);
  };
  protoOf(SlotWriter).y29 = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.o1x_1, this, address);
    var slotsEnd = dataIndex_0(this.o1x_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_0().t1y_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.p1x_1[slotAddress];
  };
  protoOf(SlotWriter).c2a = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.z1x_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.e1y_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.f1y_1 ? index <= this.t1x_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.f1y_1 + '-' + this.t1x_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.e1y_1 = index;
    var newSlot = dataIndex_0(this.o1x_1, this, groupIndexToAddress(this, index));
    this.u1x_1 = newSlot;
    this.v1x_1 = newSlot;
  };
  protoOf(SlotWriter).h1z = function () {
    var newGroup = this.t1x_1;
    this.e1y_1 = newGroup;
    this.u1x_1 = dataIndex_0(this.o1x_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).p25 = function () {
    var tmp1 = this.z1x_1;
    this.z1x_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).m26 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.z1x_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.z1x_1 = this.z1x_1 - 1 | 0;
    if (this.z1x_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.d1y_1.n() === this.b1y_1.n())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).y24 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_0().t1y_1, false, Companion_getInstance_0().t1y_1);
  };
  protoOf(SlotWriter).a25 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_0().t1y_1);
  };
  protoOf(SlotWriter).c25 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_0().t1y_1);
  };
  protoOf(SlotWriter).b25 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).l26 = function () {
    var inserting = this.z1x_1 > 0;
    var currentGroup = this.e1y_1;
    var currentGroupEnd = this.t1x_1;
    var groupIndex = this.f1y_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.a1y_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.o1x_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.o1x_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.o1x_1, groupAddress, newNodes);
      this.a1y_1 = this.d1y_1.b26() + (isNode_0 ? 1 : newNodes) | 0;
      this.f1y_1 = parent(this.o1x_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.o1x_1, groupAddress);
      var oldNodes = nodeCount(this.o1x_1, groupAddress);
      updateGroupSize(this.o1x_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.o1x_1, groupAddress, newNodes);
      var newParent = this.b1y_1.b26();
      restoreCurrentGroupEnd(this);
      this.f1y_1 = newParent;
      var groupParent = parent(this.o1x_1, this, groupIndex);
      this.a1y_1 = this.d1y_1.b26();
      if (groupParent === newParent) {
        this.a1y_1 = this.a1y_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.o1x_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.o1x_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.o1x_1, currentAddress, nodeCount(this.o1x_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.o1x_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.o1x_1, this, current);
          }
        }
        this.a1y_1 = this.a1y_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).l2b = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z1x_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.f1y_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.t1x_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.e1y_1;
      var oldCurrentSlot = this.u1x_1;
      var oldCurrentSlotEnd = this.v1x_1;
      this.e1y_1 = index;
      this.y24();
      this.e1y_1 = oldCurrent;
      this.u1x_1 = oldCurrentSlot;
      this.v1x_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).l2a = function (anchor) {
    return this.l2b(anchor.c2m(this));
  };
  protoOf(SlotWriter).p24 = function () {
    var groupAddress = groupIndexToAddress(this, this.e1y_1);
    var newGroup = this.e1y_1 + groupSize(this.o1x_1, groupAddress) | 0;
    this.e1y_1 = newGroup;
    this.u1x_1 = dataIndex_0(this.o1x_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.o1x_1, groupAddress) ? 1 : nodeCount(this.o1x_1, groupAddress);
  };
  protoOf(SlotWriter).s1y = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.e1y_1;
    var oldSlot = this.u1x_1;
    var count = this.p24();
    var tmp0_safe_receiver = this.h1y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.q27() ? tmp0_safe_receiver.r2a() >= oldGroup : false) {
        tmp0_safe_receiver.w2l();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.e1y_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.u1x_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.e1y_1 = oldGroup;
    this.u1x_1 = oldSlot;
    this.a1y_1 = this.a1y_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).i1y = function () {
    var start = dataIndex_0(this.o1x_1, this, groupIndexToAddress(this, this.e1y_1));
    var end = dataIndex_0(this.o1x_1, this, groupIndexToAddress(this, this.e1y_1 + this.e26(this.e1y_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).w29 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.z1x_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.e1y_1;
    var parent = this.f1y_1;
    var parentEnd = this.t1x_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.o1x_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.o1x_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.u1x_1;
    var dataStart = dataIndex_0(this.o1x_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.o1x_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.e1y_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.o1x_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = imul(currentAddress, 5);
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, destinationOffset, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.p1x_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, startIndex, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.w1x_1;
    var slotsGapLen = this.x1x_1;
    var slotsCapacity = this.p1x_1.length;
    var slotsGapOwner = this.y1x_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.t1x_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).t27 = function (anchor, offset, writer) {
    runtimeCheck(writer.z1x_1 > 0);
    runtimeCheck(this.z1x_1 === 0);
    runtimeCheck(anchor.c2d());
    var location = this.h27(anchor) + offset | 0;
    var currentGroup = this.e1y_1;
    runtimeCheck(currentGroup <= location ? location < this.t1x_1 : false);
    var parent = this.t24(location);
    var size = this.e26(location);
    var nodes = this.x26(location) ? 1 : this.y26(location);
    var result = moveGroup$default(Companion_instance_6, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.o1x_1, currentAddress, groupSize(this.o1x_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.o1x_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.o1x_1, currentAddress, nodeCount(this.o1x_1, currentAddress) - nodes | 0);
        }
      }
      current = this.t24(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.a1y_1 >= nodes);
      this.a1y_1 = this.a1y_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).e2a = function (table, index, removeSourceGroup) {
    runtimeCheck(this.z1x_1 > 0);
    if (((index === 0 ? this.e1y_1 === 0 : false) ? this.n1x_1.f23_1 === 0 : false) ? groupSize(table.e23_1, index) === table.f23_1 : false) {
      var myGroups = this.o1x_1;
      var mySlots = this.p1x_1;
      var myAnchors = this.q1x_1;
      var groups = table.e23_1;
      var groupsSize = table.f23_1;
      var slots = table.g23_1;
      var slotsSize = table.h23_1;
      this.o1x_1 = groups;
      this.p1x_1 = slots;
      this.q1x_1 = table.l23_1;
      this.r1x_1 = groupsSize;
      this.s1x_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.w1x_1 = slotsSize;
      this.x1x_1 = slots.length - slotsSize | 0;
      this.y1x_1 = groupsSize;
      table.g2m(myGroups, 0, mySlots, 0, myAnchors);
      return this.q1x_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.w24();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_instance_6, writer, index, this, true, true, removeSourceGroup);
    }finally {
      writer.j24();
    }
    return tmp;
  };
  protoOf(SlotWriter).b2a = function (offset, table, index) {
    runtimeCheck(this.z1x_1 <= 0 ? this.e26(this.e1y_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.e1y_1;
    var previousCurrentSlot = this.u1x_1;
    var previousCurrentSlotEnd = this.v1x_1;
    this.c2a(offset);
    this.y24();
    this.p25();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.w24();
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_instance_6, writer, index, this, false, true);
    }finally {
      writer.j24();
    }
    var anchors = tmp;
    this.m26();
    this.l26();
    this.e1y_1 = previousCurrentGroup;
    this.u1x_1 = previousCurrentSlot;
    this.v1x_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).q25 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.q1x_1;
    var effectiveSize = this.n();
    var location = search$accessor$mbvawc(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.r1x_1 ? index : -(this.n() - index | 0) | 0);
      this_0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.i1(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).h2m = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.o1x_1, groupAddress)) {
      updateMark(this.o1x_1, groupAddress, true);
      if (!containsMark(this.o1x_1, groupAddress)) {
        updateContainsMark(this, this.t24(group));
      }
    }
  };
  protoOf(SlotWriter).e27 = function (group, $super) {
    group = group === VOID ? this.f1y_1 : group;
    var tmp;
    if ($super === VOID) {
      this.h2m(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.h2m.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).h27 = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.w28_1;
    return it < 0 ? this.n() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.e1y_1 + ' end=' + this.t1x_1 + ' size = ' + this.n() + ' ' + ('gap=' + this.r1x_1 + '-' + (this.r1x_1 + this.s1x_1 | 0) + ')');
  };
  protoOf(SlotWriter).n = function () {
    return _get_capacity__a9k9f3(this) - this.s1x_1 | 0;
  };
  function Anchor(loc) {
    this.w28_1 = loc;
  }
  protoOf(Anchor).c2d = function () {
    return !(this.w28_1 === IntCompanionObject_instance.MIN_VALUE);
  };
  protoOf(Anchor).d2a = function (slots) {
    return slots.h27(this);
  };
  protoOf(Anchor).c2m = function (writer) {
    return writer.h27(this);
  };
  function SlotTable() {
    this.e23_1 = new Int32Array(0);
    this.f23_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.g23_1 = tmp_1;
    this.h23_1 = 0;
    this.i23_1 = 0;
    this.j23_1 = false;
    this.k23_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.l23_1 = ArrayList_init_$Create$();
  }
  protoOf(SlotTable).n26 = function () {
    return this.f23_1 === 0;
  };
  protoOf(SlotTable).m23 = function () {
    if (this.j23_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.i23_1 = this.i23_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).w24 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.j23_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.i23_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.j23_1 = true;
    this.k23_1 = this.k23_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).q25 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.j23_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead ';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.f23_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.l23_1;
    var effectiveSize = this.f23_1;
    var location = search$accessor$mbvawc(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.i1(location);
    }
    return tmp;
  };
  protoOf(SlotTable).h27 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.j23_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.c2d()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.w28_1;
  };
  protoOf(SlotTable).d2e = function (anchor) {
    var tmp;
    if (anchor.c2d()) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search$accessor$mbvawc(this.l23_1, anchor.w28_1, this.f23_1);
      tmp = it >= 0 ? equals(this.l23_1.i1(it), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).g2d = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.j23_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.f23_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.d2e(anchor)) {
      var containsUpper = groupIndex + groupSize(this.e23_1, groupIndex) | 0;
      var containsArg = anchor.w28_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).i2m = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.x23_1 === this ? this.i23_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.i23_1 = this.i23_1 - 1 | 0;
  };
  protoOf(SlotTable).d2m = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.n1x_1 === this ? this.j23_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.j23_1 = false;
    this.g2m(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).g2m = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.e23_1 = groups;
    this.f23_1 = groupsSize;
    this.g23_1 = slots;
    this.h23_1 = slotsSize;
    this.l23_1 = anchors;
  };
  protoOf(SlotTable).x27 = function () {
    return this.f23_1 > 0 ? containsMark(this.e23_1, 0) : false;
  };
  protoOf(SlotTable).y29 = function (group, slotIndex) {
    var start = slotAnchor(this.e23_1, group);
    var end = (group + 1 | 0) < this.f23_1 ? dataAnchor(this.e23_1, group + 1 | 0) : this.g23_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.g23_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_0().t1y_1;
    }
    return tmp;
  };
  protoOf(SlotTable).v = function () {
    return new GroupIterator(this, 0, this.f23_1);
  };
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.v2l_1 = list;
  }
  protoOf(PrioritySet).x2l = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.v2l_1.e1()) {
      tmp = this.v2l_1.i1(0) === value ? true : this.v2l_1.i1(this.v2l_1.n() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.v2l_1.n();
    this.v2l_1.s(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.v2l_1.i1(parent);
      if (value > parentValue) {
        this.v2l_1.o(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.v2l_1.o(index, value);
  };
  protoOf(PrioritySet).q27 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.v2l_1.e1();
  };
  protoOf(PrioritySet).r2a = function () {
    return first(this.v2l_1);
  };
  protoOf(PrioritySet).w2l = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v2l_1.n() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.v2l_1.i1(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.v2l_1.e1()) {
        tmp = this.v2l_1.i1(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.v2l_1.o(0, last(this.v2l_1));
      this.v2l_1.k1(this.v2l_1.n() - 1 | 0);
      var index = 0;
      var size = this.v2l_1.n();
      var max = this.v2l_1.n() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.v2l_1.i1(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.v2l_1.i1(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.v2l_1.i1(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.v2l_1.o(index, rightValue);
              this.v2l_1.o(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.v2l_1.o(index, leftValue);
          this.v2l_1.o(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search$accessor$mbvawc(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.a24_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().t1y_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.a24_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_0().t1y_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.a24_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.x23_1 = table;
    this.y23_1 = this.x23_1.e23_1;
    this.z23_1 = this.x23_1.f23_1;
    this.a24_1 = this.x23_1.g23_1;
    this.b24_1 = this.x23_1.h23_1;
    this.c24_1 = false;
    this.d24_1 = 0;
    this.e24_1 = this.z23_1;
    this.f24_1 = -1;
    this.g24_1 = 0;
    this.h24_1 = 0;
    this.i24_1 = 0;
  }
  protoOf(SlotReader).n = function () {
    return this.z23_1;
  };
  protoOf(SlotReader).t24 = function (index) {
    return parentAnchor(this.y23_1, index);
  };
  protoOf(SlotReader).i29 = function () {
    return isNode(this.y23_1, this.d24_1);
  };
  protoOf(SlotReader).x26 = function (index) {
    return isNode(this.y23_1, index);
  };
  protoOf(SlotReader).y26 = function (index) {
    return nodeCount(this.y23_1, index);
  };
  protoOf(SlotReader).p27 = function (index) {
    return isNode(this.y23_1, index) ? node(this.y23_1, this, index) : null;
  };
  protoOf(SlotReader).i26 = function () {
    return this.o26() ? true : this.d24_1 === this.e24_1;
  };
  protoOf(SlotReader).o26 = function () {
    return this.g24_1 > 0;
  };
  protoOf(SlotReader).r27 = function () {
    return groupSize(this.y23_1, this.d24_1);
  };
  protoOf(SlotReader).e26 = function (index) {
    return groupSize(this.y23_1, index);
  };
  protoOf(SlotReader).h26 = function () {
    return this.e24_1;
  };
  protoOf(SlotReader).l25 = function () {
    var tmp;
    if (this.d24_1 < this.e24_1) {
      tmp = key(this.y23_1, this.d24_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).s24 = function (index) {
    return key(this.y23_1, index);
  };
  protoOf(SlotReader).s2a = function () {
    return this.h24_1 - slotAnchor(this.y23_1, this.f24_1) | 0;
  };
  protoOf(SlotReader).z26 = function (index) {
    return hasObjectKey(this.y23_1, index);
  };
  protoOf(SlotReader).n25 = function () {
    return this.d24_1 < this.e24_1 ? objectKey(this.y23_1, this, this.d24_1) : null;
  };
  protoOf(SlotReader).r24 = function (index) {
    return objectKey(this.y23_1, this, index);
  };
  protoOf(SlotReader).x24 = function () {
    return this.d24_1 < this.e24_1 ? aux(this.y23_1, this, this.d24_1) : 0;
  };
  protoOf(SlotReader).q24 = function (index) {
    return aux(this.y23_1, this, index);
  };
  protoOf(SlotReader).m29 = function (index) {
    return hasMark(this.y23_1, index);
  };
  protoOf(SlotReader).k29 = function (index) {
    return containsMark(this.y23_1, index);
  };
  protoOf(SlotReader).a27 = function () {
    return this.f24_1 >= 0 ? nodeCount(this.y23_1, this.f24_1) : 0;
  };
  protoOf(SlotReader).t2a = function (index) {
    return this.l29(this.d24_1, index);
  };
  protoOf(SlotReader).l29 = function (group, index) {
    var start = slotAnchor(this.y23_1, group);
    var next = group + 1 | 0;
    var end = next < this.z23_1 ? dataAnchor(this.y23_1, next) : this.b24_1;
    var address = start + index | 0;
    return address < end ? this.a24_1[address] : Companion_getInstance_0().t1y_1;
  };
  protoOf(SlotReader).y = function () {
    if (this.g24_1 > 0 ? true : this.h24_1 >= this.i24_1)
      return Companion_getInstance_0().t1y_1;
    var tmp1 = this.h24_1;
    this.h24_1 = tmp1 + 1 | 0;
    return this.a24_1[tmp1];
  };
  protoOf(SlotReader).z24 = function () {
    this.g24_1 = this.g24_1 + 1 | 0;
  };
  protoOf(SlotReader).k26 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.g24_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.g24_1 = this.g24_1 - 1 | 0;
  };
  protoOf(SlotReader).j24 = function () {
    this.c24_1 = true;
    this.x23_1.i2m(this);
  };
  protoOf(SlotReader).y24 = function () {
    if (this.g24_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.y23_1, this.d24_1) === this.f24_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.f24_1 = this.d24_1;
      this.e24_1 = this.d24_1 + groupSize(this.y23_1, this.d24_1) | 0;
      var tmp1 = this.d24_1;
      this.d24_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.h24_1 = slotAnchor(this.y23_1, current);
      this.i24_1 = current >= (this.z23_1 - 1 | 0) ? this.b24_1 : dataAnchor(this.y23_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).j1z = function () {
    if (this.g24_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.y23_1, this.d24_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.y24();
    }
  };
  protoOf(SlotReader).p24 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.g24_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.y23_1, this.d24_1) ? 1 : nodeCount(this.y23_1, this.d24_1);
    this.d24_1 = this.d24_1 + groupSize(this.y23_1, this.d24_1) | 0;
    return count;
  };
  protoOf(SlotReader).h1z = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.g24_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.d24_1 = this.e24_1;
  };
  protoOf(SlotReader).z25 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.g24_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.d24_1 = index;
    var parent = index < this.z23_1 ? parentAnchor(this.y23_1, index) : -1;
    this.f24_1 = parent;
    if (parent < 0)
      this.e24_1 = this.z23_1;
    else
      this.e24_1 = parent + groupSize(this.y23_1, parent) | 0;
    this.h24_1 = 0;
    this.i24_1 = 0;
  };
  protoOf(SlotReader).u26 = function (index) {
    var newCurrentEnd = index + groupSize(this.y23_1, index) | 0;
    var current = this.d24_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.f24_1 = index;
    this.e24_1 = newCurrentEnd;
    this.h24_1 = 0;
    this.i24_1 = 0;
  };
  protoOf(SlotReader).j26 = function () {
    if (this.g24_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.d24_1 === this.e24_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.y23_1, this.f24_1);
      this.f24_1 = parent;
      this.e24_1 = parent < 0 ? this.z23_1 : parent + groupSize(this.y23_1, parent) | 0;
    }
  };
  protoOf(SlotReader).m25 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.g24_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.d24_1;
    while (childIndex < this.e24_1) {
      var tmp = key(this.y23_1, childIndex);
      var tmp_0 = objectKey(this.y23_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.y23_1, childIndex) ? 1 : nodeCount(this.y23_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.s(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.y23_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).v2a = function (group, block) {
    var start = slotAnchor(this.y23_1, group);
    var end = (group + 1 | 0) < this.x23_1.f23_1 ? dataAnchor(this.x23_1.e23_1, group + 1 | 0) : this.x23_1.h23_1;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        block(index - start | 0, this.a24_1[index]);
      }
       while (inductionVariable < end);
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.d24_1 + ', key=' + this.l25() + ', ' + ('parent=' + this.f24_1 + ', end=' + this.e24_1 + ')');
  };
  protoOf(SlotReader).q25 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var this_0 = this.x23_1.l23_1;
    var effectiveSize = this.z23_1;
    var location = search$accessor$mbvawc(this_0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      this_0.y1(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = this_0.i1(location);
    }
    return tmp;
  };
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.n() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.i1(mid).w28_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.j2m_1.k23_1 === $this.m2m_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.j2m_1 = table;
    this.k2m_1 = end;
    this.l2m_1 = start;
    this.m2m_1 = this.j2m_1.k23_1;
    if (this.j2m_1.j23_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).w = function () {
    return this.l2m_1 < this.k2m_1;
  };
  protoOf(GroupIterator).y = function () {
    validateRead(this);
    var group = this.l2m_1;
    this.l2m_1 = this.l2m_1 + groupSize(this.j2m_1.e23_1, group) | 0;
    return new SlotTableGroup(this.j2m_1, group, this.m2m_1);
  };
  function validateRead_0($this) {
    if (!($this.n2m_1.k23_1 === $this.p2m_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.k23_1 : version;
    this.n2m_1 = table;
    this.o2m_1 = group;
    this.p2m_1 = version;
  }
  protoOf(SlotTableGroup).v = function () {
    validateRead_0(this);
    return new GroupIterator(this.n2m_1, this.o2m_1 + 1 | 0, this.o2m_1 + groupSize(this.n2m_1.e23_1, this.o2m_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.r25_1 = key;
    this.s25_1 = objectKey;
    this.t25_1 = location;
    this.u25_1 = nodes;
    this.v25_1 = index;
  }
  function search$accessor$mbvawc(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function MutableFloatState() {
  }
  function mutableFloatStateOf(value) {
    return createSnapshotMutableFloatState(value);
  }
  function FloatStateStateRecord(value) {
    StateRecord.call(this);
    this.w2m_1 = value;
  }
  protoOf(FloatStateStateRecord).t2f = function (value) {
    var tmp = this;
    tmp.w2m_1 = (value instanceof FloatStateStateRecord ? value : THROW_CCE()).w2m_1;
  };
  protoOf(FloatStateStateRecord).u2f = function () {
    return new FloatStateStateRecord(this.w2m_1);
  };
  function SnapshotMutableFloatStateImpl(value) {
    this.x2m_1 = new FloatStateStateRecord(value);
  }
  protoOf(SnapshotMutableFloatStateImpl).y2f = function () {
    return this.x2m_1;
  };
  protoOf(SnapshotMutableFloatStateImpl).r2m = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.x2m_1;
    var it = current(this_0);
    var tmp;
    if (!(it.w2m_1 === value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.x2m_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      overwritableRecord(this_1, this, snapshot, it).w2m_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableFloatStateImpl).s2m = function () {
    return readable_0(this.x2m_1, this).w2m_1;
  };
  protoOf(SnapshotMutableFloatStateImpl).f2f = function () {
    return structuralEqualityPolicy();
  };
  protoOf(SnapshotMutableFloatStateImpl).l2g = function (value) {
    var tmp = this;
    tmp.x2m_1 = value instanceof FloatStateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableFloatStateImpl).m2g = function (previous, current, applied) {
    var currentRecord = current instanceof FloatStateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof FloatStateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (currentRecord.w2m_1 === appliedRecord.w2m_1) {
      tmp = current;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SnapshotMutableFloatStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.x2m_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableFloatStateImpl.toString.<anonymous>' call
    return 'MutableFloatState(value=' + current(this_0).w2m_1 + ')@' + hashCode(this);
  };
  protoOf(SnapshotMutableFloatStateImpl).h1a = function (_set____db54di) {
    return this.q2m((!(_set____db54di == null) ? typeof _set____db54di === 'number' : false) ? _set____db54di : THROW_CCE());
  };
  function collectAsState$composable(_this__u8e3s4, initial, context, $composer, $changed, $default) {
    var context_0 = {_v: context};
    var $composer_0 = $composer;
    $composer_0.f1x(-2084371839);
    sourceInformation($composer_0, 'C(collectAsState$composable)P(1)61@2283L186:SnapshotFlow.kt#9igjgp');
    if (!(($default & 2) === 0)) {
      context_0._v = EmptyCoroutineContext_getInstance();
    }
    if (isTraceInProgress()) {
      traceEventStart(-2084371839, $changed, -1, 'androidx.compose.runtime.collectAsState$composable (SnapshotFlow.kt:58)');
    }
    var tmp = context_0._v;
    var tmp0 = produceState$composable(initial, _this__u8e3s4, tmp, collectAsState$composable$slambda_0(context_0, _this__u8e3s4, null), $composer_0, 8 & $changed >> 3 | 14 & $changed >> 3 | 112 & $changed << 3 | 896 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function collectAsState$composable_0(_this__u8e3s4, context, $composer, $changed, $default) {
    var context_0 = context;
    var $composer_0 = $composer;
    $composer_0.f1x(1233808880);
    sourceInformation($composer_0, 'C(collectAsState$composable)46@1741L30:SnapshotFlow.kt#9igjgp');
    if (!(($default & 1) === 0))
      context_0 = EmptyCoroutineContext_getInstance();
    if (isTraceInProgress()) {
      traceEventStart(1233808880, $changed, -1, 'androidx.compose.runtime.collectAsState$composable (SnapshotFlow.kt:44)');
    }
    var tmp0 = collectAsState$composable(_this__u8e3s4, _this__u8e3s4.u2(), context_0, $composer_0, 14 & $changed | 896 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function snapshotFlow(block) {
    return flow(snapshotFlow$slambda_0(block, null));
  }
  function intersects(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.n() < other.n()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(_this__u8e3s4, Collection)) {
          tmp_0 = _this__u8e3s4.e1();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = _this__u8e3s4.v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'androidx.compose.runtime.intersects.<anonymous>' call
          if (other.r(element)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(other, Collection)) {
          tmp_1 = other.e1();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = false;
          break $l$block_2;
        }
        var tmp0_iterator_0 = other.v();
        while (tmp0_iterator_0.w()) {
          var element_0 = tmp0_iterator_0.y();
          // Inline function 'androidx.compose.runtime.intersects.<anonymous>' call
          if (_this__u8e3s4.r(element_0)) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
        }
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function collectAsState$composable$slambda$slambda$slambda($this_produceState, resultContinuation) {
    this.g2n_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$composable$slambda$slambda$slambda).i2n = function (it, $completion) {
    var tmp = this.j2n(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(collectAsState$composable$slambda$slambda$slambda).fc = function (p1, $completion) {
    return this.i2n((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$composable$slambda$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          this.g2n_1.h1a(this.h2n_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectAsState$composable$slambda$slambda$slambda).j2n = function (it, completion) {
    var i = new collectAsState$composable$slambda$slambda$slambda(this.g2n_1, completion);
    i.h2n_1 = it;
    return i;
  };
  function collectAsState$composable$slambda$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsState$composable$slambda$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.i2n(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.k2n_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).t13 = function (value, $completion) {
    return this.k2n_1(value, $completion);
  };
  function collectAsState$composable$slambda$slambda($this_produceState, resultContinuation) {
    this.t2n_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$composable$slambda$slambda).i2n = function (it, $completion) {
    var tmp = this.j2n(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(collectAsState$composable$slambda$slambda).fc = function (p1, $completion) {
    return this.i2n((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$composable$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          this.t2n_1.h1a(this.u2n_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectAsState$composable$slambda$slambda).j2n = function (it, completion) {
    var i = new collectAsState$composable$slambda$slambda(this.t2n_1, completion);
    i.u2n_1 = it;
    return i;
  };
  function collectAsState$composable$slambda$slambda_0($this_produceState, resultContinuation) {
    var i = new collectAsState$composable$slambda$slambda($this_produceState, resultContinuation);
    var l = function (it, $completion) {
      return i.i2n(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsState$composable$slambda$slambda_1($this_collectAsState$composable, $this_produceState, resultContinuation) {
    this.d2o_1 = $this_collectAsState$composable;
    this.e2o_1 = $this_produceState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$composable$slambda$slambda_1).v1b = function ($this$withContext, $completion) {
    var tmp = this.w1b($this$withContext, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(collectAsState$composable$slambda$slambda_1).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$composable$slambda$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var tmp_0 = collectAsState$composable$slambda$slambda$slambda_0(this.e2o_1, null);
            suspendResult = this.d2o_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  protoOf(collectAsState$composable$slambda$slambda_1).w1b = function ($this$withContext, completion) {
    var i = new collectAsState$composable$slambda$slambda_1(this.d2o_1, this.e2o_1, completion);
    i.f2o_1 = $this$withContext;
    return i;
  };
  function collectAsState$composable$slambda$slambda_2($this_collectAsState$composable, $this_produceState, resultContinuation) {
    var i = new collectAsState$composable$slambda$slambda_1($this_collectAsState$composable, $this_produceState, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.v1b($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectAsState$composable$slambda($context, $this_collectAsState$composable, resultContinuation) {
    this.o2o_1 = $context;
    this.p2o_1 = $this_collectAsState$composable;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectAsState$composable$slambda).r2o = function ($this$produceState, $completion) {
    var tmp = this.s2o($this$produceState, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(collectAsState$composable$slambda).fc = function (p1, $completion) {
    return this.r2o((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectAsState$composable$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            if (equals(this.o2o_1._v, EmptyCoroutineContext_getInstance())) {
              this.hb_1 = 2;
              var tmp_0 = collectAsState$composable$slambda$slambda_0(this.q2o_1, null);
              suspendResult = this.p2o_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 1;
              var tmp_1 = this.o2o_1._v;
              suspendResult = withContext(tmp_1, collectAsState$composable$slambda$slambda_2(this.p2o_1, this.q2o_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.hb_1 = 3;
            continue $sm;
          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 4) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(collectAsState$composable$slambda).s2o = function ($this$produceState, completion) {
    var i = new collectAsState$composable$slambda(this.o2o_1, this.p2o_1, completion);
    i.q2o_1 = $this$produceState;
    return i;
  };
  function collectAsState$composable$slambda_0($context, $this_collectAsState$composable, resultContinuation) {
    var i = new collectAsState$composable$slambda($context, $this_collectAsState$composable, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.r2o($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function snapshotFlow$slambda$lambda($readSet) {
    return function (it) {
      $readSet.s(it);
      return Unit_instance;
    };
  }
  function snapshotFlow$slambda$lambda_0($appliedChanges) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      $appliedChanges.o11(changed);
      return Unit_instance;
    };
  }
  function snapshotFlow$slambda($block, resultContinuation) {
    this.b2p_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(snapshotFlow$slambda).q1c = function ($this$flow, $completion) {
    var tmp = this.r1c($this$flow, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(snapshotFlow$slambda).fc = function (p1, $completion) {
    return this.q1c((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(snapshotFlow$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 11;
            var tmp_0 = this;
            tmp_0.d2p_1 = LinkedHashSet_init_$Create$();
            var tmp_1 = this;
            tmp_1.e2p_1 = snapshotFlow$slambda$lambda(this.d2p_1);
            var tmp_2 = this;
            Factory_getInstance();
            tmp_2.f2p_1 = Channel(2147483647);
            var tmp_3 = this;
            var tmp_4 = Companion_instance_12;
            tmp_3.g2p_1 = tmp_4.s2l(snapshotFlow$slambda$lambda_0(this.f2p_1));
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.ib_1 = 10;
            var tmp_5 = this;
            var $this$run = Companion_instance_12.m2p(this.e2p_1);
            var tmp$ret$6;
            l$ret$7: do {
              var tmp_6;
              try {
                var tmp$ret$4;
                l$ret$5: do {
                  var previous = $this$run.t2j();
                  l$ret$3: do {
                    var tmp$ret$0;
                    l$ret$1: do {
                      var tmp_7;
                      try {
                        tmp$ret$0 = this.b2p_1();
                        break l$ret$1;
                      } catch ($p) {
                        var tmp_8;
                        var t = $p;
                        $this$run.u2j(previous);
                        throw t;
                      }
                    }
                     while (false);
                    var tmp_9 = tmp$ret$0;
                    $this$run.u2j(previous);
                    tmp$ret$4 = tmp_9;
                    break l$ret$5;
                  }
                   while (false);
                  $this$run.u2j(previous);
                }
                 while (false);
                tmp$ret$6 = tmp$ret$4;
                break l$ret$7;
              } catch ($p) {
                var tmp_10;
                var t_0 = $p;
                $this$run.gk();
                throw t_0;
              }
            }
             while (false);
            var tmp_11 = tmp$ret$6;
            $this$run.gk();
            tmp_5.i2p_1 = tmp_11;
            this.hb_1 = 2;
            suspendResult = this.c2p_1.t13(this.i2p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            if (!true) {
              this.hb_1 = 8;
              continue $sm;
            }

            this.j2p_1 = false;
            this.hb_1 = 4;
            suspendResult = this.f2p_1.q11(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.k2p_1 = suspendResult;
            $l$loop: while (true) {
              this.j2p_1 = this.j2p_1 ? true : intersects(this.d2p_1, this.k2p_1);
              var tmp_12 = this;
              var tmp0_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.f2p_1.s11());
              var tmp_13;
              if (tmp0_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_13 = tmp0_elvis_lhs;
              }
              tmp_12.k2p_1 = tmp_13;
            }

            if (this.j2p_1) {
              this.d2p_1.c1();
              var tmp_14 = this;
              var $this$run_0 = Companion_instance_12.m2p(this.e2p_1);
              var tmp$ret$14;
              l$ret$15: do {
                var tmp_15;
                try {
                  var tmp$ret$12;
                  l$ret$13: do {
                    var previous_0 = $this$run_0.t2j();
                    l$ret$11: do {
                      var tmp$ret$8;
                      l$ret$9: do {
                        var tmp_16;
                        try {
                          tmp$ret$8 = this.b2p_1();
                          break l$ret$9;
                        } catch ($p) {
                          var tmp_17;
                          var t_1 = $p;
                          $this$run_0.u2j(previous_0);
                          throw t_1;
                        }
                      }
                       while (false);
                      var tmp_18 = tmp$ret$8;
                      $this$run_0.u2j(previous_0);
                      tmp$ret$12 = tmp_18;
                      break l$ret$13;
                    }
                     while (false);
                    $this$run_0.u2j(previous_0);
                  }
                   while (false);
                  tmp$ret$14 = tmp$ret$12;
                  break l$ret$15;
                } catch ($p) {
                  var tmp_19;
                  var t_2 = $p;
                  $this$run_0.gk();
                  throw t_2;
                }
              }
               while (false);
              var tmp_20 = tmp$ret$14;
              $this$run_0.gk();
              tmp_14.l2p_1 = tmp_20;
              if (!equals(this.l2p_1, this.i2p_1)) {
                this.i2p_1 = this.l2p_1;
                this.hb_1 = 5;
                suspendResult = this.c2p_1.t13(this.l2p_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.hb_1 = 6;
                continue $sm;
              }
            } else {
              this.hb_1 = 7;
              continue $sm;
            }

          case 5:
            this.hb_1 = 6;
            continue $sm;
          case 6:
            this.hb_1 = 7;
            continue $sm;
          case 7:
            this.hb_1 = 3;
            continue $sm;
          case 8:
            this.h2p_1 = Unit_instance;
            this.ib_1 = 11;
            this.hb_1 = 9;
            continue $sm;
          case 9:
            this.ib_1 = 11;
            this.g2p_1.gk();
            return Unit_instance;
          case 10:
            this.ib_1 = 11;
            var t_3 = this.kb_1;
            this.g2p_1.gk();
            throw t_3;
          case 11:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 11) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(snapshotFlow$slambda).r1c = function ($this$flow, completion) {
    var i = new snapshotFlow$slambda(this.b2p_1, completion);
    i.c2p_1 = $this$flow;
    return i;
  };
  function snapshotFlow$slambda_0($block, resultContinuation) {
    var i = new snapshotFlow$slambda($block, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.q1c($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableIntState() {
  }
  function mutableIntStateOf(value) {
    return createSnapshotMutableIntState(value);
  }
  function IntStateStateRecord(value) {
    StateRecord.call(this);
    this.t2p_1 = value;
  }
  protoOf(IntStateStateRecord).t2f = function (value) {
    var tmp = this;
    tmp.t2p_1 = (value instanceof IntStateStateRecord ? value : THROW_CCE()).t2p_1;
  };
  protoOf(IntStateStateRecord).u2f = function () {
    return new IntStateStateRecord(this.t2p_1);
  };
  function SnapshotMutableIntStateImpl(value) {
    this.u2p_1 = new IntStateStateRecord(value);
  }
  protoOf(SnapshotMutableIntStateImpl).y2f = function () {
    return this.u2p_1;
  };
  protoOf(SnapshotMutableIntStateImpl).o2p = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.u2p_1;
    var it = current(this_0);
    var tmp;
    if (!(it.t2p_1 === value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.u2p_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      overwritableRecord(this_1, this, snapshot, it).t2p_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableIntStateImpl).p2p = function () {
    return readable_0(this.u2p_1, this).t2p_1;
  };
  protoOf(SnapshotMutableIntStateImpl).f2f = function () {
    return structuralEqualityPolicy();
  };
  protoOf(SnapshotMutableIntStateImpl).l2g = function (value) {
    var tmp = this;
    tmp.u2p_1 = value instanceof IntStateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableIntStateImpl).m2g = function (previous, current, applied) {
    var currentRecord = current instanceof IntStateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof IntStateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (currentRecord.t2p_1 === appliedRecord.t2p_1) {
      tmp = current;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SnapshotMutableIntStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.u2p_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableIntStateImpl.toString.<anonymous>' call
    return 'MutableIntState(value=' + current(this_0).t2p_1 + ')@' + hashCode(this);
  };
  protoOf(SnapshotMutableIntStateImpl).h1a = function (_set____db54di) {
    return this.n2p((!(_set____db54di == null) ? typeof _set____db54di === 'number' : false) ? _set____db54di : THROW_CCE());
  };
  function MutableLongState() {
  }
  function mutableLongStateOf(value) {
    return createSnapshotMutableLongState(value);
  }
  function LongStateStateRecord(value) {
    StateRecord.call(this);
    this.b2q_1 = value;
  }
  protoOf(LongStateStateRecord).t2f = function (value) {
    var tmp = this;
    tmp.b2q_1 = (value instanceof LongStateStateRecord ? value : THROW_CCE()).b2q_1;
  };
  protoOf(LongStateStateRecord).u2f = function () {
    return new LongStateStateRecord(this.b2q_1);
  };
  function SnapshotMutableLongStateImpl(value) {
    this.c2q_1 = new LongStateStateRecord(value);
  }
  protoOf(SnapshotMutableLongStateImpl).y2f = function () {
    return this.c2q_1;
  };
  protoOf(SnapshotMutableLongStateImpl).w2p = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.c2q_1;
    var it = current(this_0);
    var tmp;
    if (!it.b2q_1.equals(value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.c2q_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      overwritableRecord(this_1, this, snapshot, it).b2q_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableLongStateImpl).x2p = function () {
    return readable_0(this.c2q_1, this).b2q_1;
  };
  protoOf(SnapshotMutableLongStateImpl).f2f = function () {
    return structuralEqualityPolicy();
  };
  protoOf(SnapshotMutableLongStateImpl).l2g = function (value) {
    var tmp = this;
    tmp.c2q_1 = value instanceof LongStateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableLongStateImpl).m2g = function (previous, current, applied) {
    var currentRecord = current instanceof LongStateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof LongStateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (currentRecord.b2q_1.equals(appliedRecord.b2q_1)) {
      tmp = current;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SnapshotMutableLongStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.c2q_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableLongStateImpl.toString.<anonymous>' call
    return 'MutableLongState(value=' + current(this_0).b2q_1.toString() + ')@' + hashCode(this);
  };
  protoOf(SnapshotMutableLongStateImpl).h1a = function (_set____db54di) {
    return this.v2p(_set____db54di instanceof Long ? _set____db54di : THROW_CCE());
  };
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).e2q = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).j2g = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.e2q(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function referentialEqualityPolicy() {
    var tmp = ReferentialEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function ReferentialEqualityPolicy() {
  }
  protoOf(ReferentialEqualityPolicy).e2q = function (a, b) {
    return a === b;
  };
  protoOf(ReferentialEqualityPolicy).j2g = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.e2q(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(ReferentialEqualityPolicy).toString = function () {
    return 'ReferentialEqualityPolicy';
  };
  var ReferentialEqualityPolicy_instance;
  function ReferentialEqualityPolicy_getInstance() {
    return ReferentialEqualityPolicy_instance;
  }
  function neverEqualPolicy() {
    var tmp = NeverEqualPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function NeverEqualPolicy() {
  }
  protoOf(NeverEqualPolicy).e2q = function (a, b) {
    return false;
  };
  protoOf(NeverEqualPolicy).j2g = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.e2q(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(NeverEqualPolicy).toString = function () {
    return 'NeverEqualPolicy';
  };
  var NeverEqualPolicy_instance;
  function NeverEqualPolicy_getInstance() {
    return NeverEqualPolicy_instance;
  }
  function MutableState() {
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.i2q_1 = myValue;
  }
  protoOf(StateStateRecord).t2f = function (value) {
    var tmp = this;
    tmp.i2q_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).i2q_1;
  };
  protoOf(StateStateRecord).u2f = function () {
    return new StateStateRecord(this.i2q_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    this.j2q_1 = policy;
    this.k2q_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).f2f = function () {
    return this.j2q_1;
  };
  protoOf(SnapshotMutableStateImpl).h1a = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.k2q_1;
    var it = current(this_0);
    var tmp;
    if (!this.f2f().j2g(it.i2q_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.k2q_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      overwritableRecord(this_1, this, snapshot, it).i2q_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).u2 = function () {
    return readable_0(this.k2q_1, this).i2q_1;
  };
  protoOf(SnapshotMutableStateImpl).y2f = function () {
    return this.k2q_1;
  };
  protoOf(SnapshotMutableStateImpl).l2g = function (value) {
    var tmp = this;
    tmp.k2q_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).m2g = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.f2f().j2g(currentRecord.i2q_1, appliedRecord.i2q_1)) {
      tmp = current;
    } else {
      var merged = this.f2f().d2q(previousRecord.i2q_1, currentRecord.i2q_1, appliedRecord.i2q_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.u2f();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).i2q_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.k2q_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(this_0).i2q_1 + ')@' + hashCode(this);
  };
  function rememberUpdatedState$composable(newValue, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.f1x(735465400);
    sourceInformation($composer_0, 'C(rememberUpdatedState$composable)*303@10198L41:SnapshotState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(735465400, $changed, -1, 'androidx.compose.runtime.rememberUpdatedState$composable (SnapshotState.kt:303)');
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.f1x(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.r1z();
    var tmp;
    if (false ? true : it === Companion_getInstance_0().t1y_1) {
      // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
      var value = mutableStateOf(newValue);
      $composer_1.s1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.h1x();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
    tmp0.h1a(newValue);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.h1x();
    return tmp0;
  }
  function mutableStateMapOf() {
    return new SnapshotStateMap();
  }
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.g2f_1 = new AtomicReference(get_emptyThreadMap());
    this.h2f_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).dq = function () {
    var tmp = this.g2f_1.dq().o2q(getCurrentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).i2f = function (value) {
    var key = getCurrentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.h2f_1;
    var current = this.g2f_1.dq();
    if (current.p2q(key, value))
      return Unit_instance;
    this.g2f_1.e2d(current.q2q(key, value));
  };
  function IntStack() {
    this.q23_1 = new Int32Array(10);
    this.r23_1 = 0;
  }
  protoOf(IntStack).n = function () {
    return this.r23_1;
  };
  protoOf(IntStack).s23 = function (value) {
    if (this.r23_1 >= this.q23_1.length) {
      this.q23_1 = copyOf(this.q23_1, imul(this.q23_1.length, 2));
    }
    var tmp = this.q23_1;
    var tmp1 = this.r23_1;
    this.r23_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).b26 = function () {
    var tmp = this.q23_1;
    this.r23_1 = this.r23_1 - 1 | 0;
    return tmp[this.r23_1];
  };
  protoOf(IntStack).y27 = function (default_0) {
    return this.r23_1 > 0 ? this.r2a() : default_0;
  };
  protoOf(IntStack).r2a = function () {
    return this.q23_1[this.r23_1 - 1 | 0];
  };
  protoOf(IntStack).w26 = function (index) {
    return this.q23_1[index];
  };
  protoOf(IntStack).e1 = function () {
    return this.r23_1 === 0;
  };
  protoOf(IntStack).c1 = function () {
    this.r23_1 = 0;
  };
  protoOf(IntStack).b2m = function (value) {
    var inductionVariable = 0;
    var last = this.r23_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.q23_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.k24_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).n = function () {
    return this.k24_1.n();
  };
  protoOf(Stack).a26 = function (value) {
    return this.k24_1.s(value);
  };
  protoOf(Stack).b26 = function () {
    return this.k24_1.k1(this.n() - 1 | 0);
  };
  protoOf(Stack).r2a = function () {
    return this.k24_1.i1(this.n() - 1 | 0);
  };
  protoOf(Stack).w26 = function (index) {
    return this.k24_1.i1(index);
  };
  protoOf(Stack).e1 = function () {
    return this.k24_1.e1();
  };
  protoOf(Stack).q27 = function () {
    return !this.e1();
  };
  protoOf(Stack).c1 = function () {
    return this.k24_1.c1();
  };
  protoOf(Stack).i3 = function () {
    var tmp = 0;
    var tmp_0 = this.k24_1.n();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.k24_1.i1(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.e2f_1;
    current$factory();
    return this_0.u2();
  }
  function LazyValueHolder(valueProducer) {
    this.e2f_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).u2 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.r2q_1 = value;
  }
  protoOf(StaticValueHolder).u2 = function () {
    return this.r2q_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.r2q_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.r2q_1 == null ? 0 : hashCode(this.r2q_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.r2q_1, tmp0_other_with_cast.r2q_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.m2h_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    var keys = $this.n2h_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = keys[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var keys = $this.n2h_1;
    var size = $this.m2h_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = keys[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = keys[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.m2h_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.n2h_1 = fillArrayVal(Array(4), null);
    this.o2h_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).q2h = function (key, value) {
    var values = this.o2h_1;
    var index;
    if (this.m2h_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = values[index];
        values[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var keys = this.n2h_1;
    var size = this.m2h_1;
    if (size === keys.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(keys.length, 2);
      var newKeys = fillArrayVal(Array(size_0), null);
      var newValues = new Int32Array(imul(keys.length, 2));
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, newKeys, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newValues, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(keys, newKeys, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newValues, 0, 0, insertIndex);
      this.n2h_1 = newKeys;
      this.o2h_1 = newValues;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(keys, keys, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, values, destinationOffset_2, insertIndex, size);
    }
    this.n2h_1[insertIndex] = key;
    this.o2h_1[insertIndex] = value;
    this.m2h_1 = this.m2h_1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.v28_1 - 1 | 0;
    var keys = $this.t28_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var keys = $this.t28_1;
    var size = $this.v28_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.t28_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.u28_1 = fillArrayVal(Array(capacity), null);
    this.v28_1 = 0;
  }
  protoOf(IdentityArrayMap).q27 = function () {
    return this.v28_1 > 0;
  };
  protoOf(IdentityArrayMap).k2e = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).j2e = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.u28_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).h2d = function (key, value) {
    var keys = this.t28_1;
    var values = this.u28_1;
    var size = this.v28_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = imul(size, 2);
        tmp = fillArrayVal(Array(size_0), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, destinationOffset, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.t28_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size_1 = imul(size, 2);
        tmp_0 = fillArrayVal(Array(size_1), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, destValues, destinationOffset_0, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.u28_1 = destValues;
      this.v28_1 = this.v28_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).p2h = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.u28_1[index];
      var size = this.v28_1;
      var keys = this.t28_1;
      var values = this.u28_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(keys, keys, index, startIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex_0 = index + 1 | 0;
      arrayCopy(values, values, index, startIndex_0, size);
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.v28_1 = newSize;
      return (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return null;
  };
  protoOf(IdentityArrayMap).c1 = function () {
    this.v28_1 = 0;
    fill_0(this.t28_1, null);
    fill_0(this.u28_1, null);
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.m27_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.n27_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var values = $this.n27_1;
    var size = $this.m27_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.t2q_1 = this$0;
    this.s2q_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).w = function () {
    return this.s2q_1 < this.t2q_1.m27_1;
  };
  protoOf(IdentityArraySet$iterator$1).y = function () {
    var tmp = this.t2q_1.n27_1;
    var tmp1 = this.s2q_1;
    this.s2q_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return !(tmp_0 == null) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.m27_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.n27_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).n = function () {
    return this.m27_1;
  };
  protoOf(IdentityArraySet).t2i = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).r = function (element) {
    if (!!(element == null))
      return false;
    return this.t2i(!(element == null) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).i2a = function (value) {
    var index;
    var size = this.m27_1;
    var values = this.n27_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size_0 = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(size_0), null);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.n27_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      arrayCopy(values, values, destinationOffset_0, insertIndex, size);
    }
    this.n27_1[insertIndex] = value;
    this.m27_1 = this.m27_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).c1 = function () {
    fill_0(this.n27_1, null);
    this.m27_1 = 0;
  };
  protoOf(IdentityArraySet).u2i = function (collection) {
    if (collection.e1())
      return Unit_instance;
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.v();
      while (tmp0_iterator.w()) {
        var value = tmp0_iterator.y();
        this.i2a(value);
      }
    } else {
      var thisValues = this.n27_1;
      var otherValues = collection.n27_1;
      var thisSize = this.m27_1;
      var otherSize = collection.m27_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.n27_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.m27_1 = this.m27_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var size = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(size), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 ? true : otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, startIndex, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.n27_1 = newArray;
        this.m27_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).e1 = function () {
    return this.m27_1 === 0;
  };
  protoOf(IdentityArraySet).q27 = function () {
    return this.m27_1 > 0;
  };
  protoOf(IdentityArraySet).u2q = function (value) {
    var index = find_1(this, value);
    var values = this.n27_1;
    var size = this.m27_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index + 1 | 0;
        arrayCopy(values, values, index, startIndex, size);
      }
      values[size - 1 | 0] = null;
      this.m27_1 = this.m27_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).od = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.e1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.t2i(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).d1 = function (elements) {
    return this.od(elements);
  };
  protoOf(IdentityArraySet).v = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.p2c_1[$this.n2c_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var size = $this.q2c_1;
    var valueOrder = $this.n2c_1;
    var values = $this.o2c_1;
    var scopeSets = $this.p2c_1;
    var index;
    if (size > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size < valueOrder.length) {
      var valueIndex = valueOrder[size];
      values[valueIndex] = value;
      var tmp0_elvis_lhs = scopeSets[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        scopeSets[valueIndex] = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < size) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = insertIndex + 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = valueOrder;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, valueOrder, destinationOffset, insertIndex, size);
      }
      valueOrder[insertIndex] = valueIndex;
      $this.q2c_1 = $this.q2c_1 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul(valueOrder.length, 2);
    var valueIndex_0 = size;
    var newScopeSets = copyOf_0(scopeSets, newSize);
    var scopeSet_0 = new IdentityArraySet();
    newScopeSets[valueIndex_0] = scopeSet_0;
    var newValues = copyOf_0(values, newSize);
    newValues[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = size + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < size) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, newKeyOrder, destinationOffset_0, insertIndex, size);
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_2, newKeyOrder, 0, 0, insertIndex);
    }
    $this.p2c_1 = newScopeSets;
    $this.o2c_1 = newValues;
    $this.n2c_1 = newKeyOrder;
    $this.q2c_1 = $this.q2c_1 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.q2c_1 - 1 | 0;
    var values = $this.o2c_1;
    var valueOrder = $this.n2c_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midValue = values[valueOrder[mid]];
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var values = $this.o2c_1;
    var valueOrder = $this.n2c_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[valueOrder[i]];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.q2c_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[valueOrder[i_0]];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.q2c_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(50);
    while (tmp_0 < 50) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.n2c_1 = tmp_1;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_3.o2c_1 = fillArrayVal(Array(50), null);
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_4.p2c_1 = fillArrayVal(Array(50), null);
    this.q2c_1 = 0;
  }
  protoOf(IdentityScopeMap).t2c = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.i2a(scope);
  };
  protoOf(IdentityScopeMap).s2c = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).c1 = function () {
    var scopeSets = this.p2c_1;
    var valueOrder = this.n2c_1;
    var values = this.o2c_1;
    var inductionVariable = 0;
    var last = scopeSets.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = scopeSets[i];
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.c1();
        }
        valueOrder[i] = i;
        values[i] = null;
      }
       while (inductionVariable <= last);
    this.q2c_1 = 0;
  };
  protoOf(IdentityScopeMap).r2c = function (value, scope) {
    var index = find_2(this, value);
    var valueOrder = this.n2c_1;
    var scopeSets = this.p2c_1;
    var values = this.o2c_1;
    var size = this.q2c_1;
    if (index >= 0) {
      var valueOrderIndex = valueOrder[index];
      var tmp0_elvis_lhs = scopeSets[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.u2q(scope);
      if (set.m27_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = size;
        if (startIndex < endIndex) {
          // Inline function 'kotlin.collections.copyInto' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = valueOrder;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, valueOrder, index, startIndex, endIndex);
        }
        var newSize = size - 1 | 0;
        valueOrder[newSize] = valueOrderIndex;
        values[valueOrderIndex] = null;
        this.q2c_1 = newSize;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).r2d = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = this.n2c_1;
    var scopeSets = this.p2c_1;
    var values = this.o2c_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.q2c_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.u2q(scope);
        if (set.m27_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.q2c_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        values[valueOrder[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.q2c_1 = destinationIndex;
  };
  function VectorListIterator(list, index) {
    this.v2q_1 = list;
    this.w2q_1 = index;
  }
  protoOf(VectorListIterator).w = function () {
    return this.w2q_1 < this.v2q_1.n();
  };
  protoOf(VectorListIterator).y = function () {
    var tmp1 = this.w2q_1;
    this.w2q_1 = tmp1 + 1 | 0;
    return this.v2q_1.i1(tmp1);
  };
  protoOf(VectorListIterator).x = function () {
    this.w2q_1 = this.w2q_1 - 1 | 0;
    this.v2q_1.k1(this.w2q_1);
  };
  protoOf(VectorListIterator).q1 = function () {
    return this.w2q_1 > 0;
  };
  protoOf(VectorListIterator).r1 = function () {
    return this.w2q_1;
  };
  protoOf(VectorListIterator).s1 = function () {
    this.w2q_1 = this.w2q_1 - 1 | 0;
    return this.v2q_1.i1(this.w2q_1);
  };
  protoOf(VectorListIterator).t1 = function () {
    return this.w2q_1 - 1 | 0;
  };
  function MutableVectorList(vector) {
    this.x2q_1 = vector;
  }
  protoOf(MutableVectorList).n = function () {
    return this.x2q_1.a29_1;
  };
  protoOf(MutableVectorList).nd = function (element) {
    return this.x2q_1.nd(element);
  };
  protoOf(MutableVectorList).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.nd((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).od = function (elements) {
    return this.x2q_1.od(elements);
  };
  protoOf(MutableVectorList).d1 = function (elements) {
    return this.od(elements);
  };
  protoOf(MutableVectorList).i1 = function (index) {
    checkIndex(this, index);
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp = this.x2q_1.y28_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(MutableVectorList).y2q = function (element) {
    return this.x2q_1.y2q(element);
  };
  protoOf(MutableVectorList).b2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.y2q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).e1 = function () {
    return this.x2q_1.e1();
  };
  protoOf(MutableVectorList).v = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(MutableVectorList).z2q = function (element) {
    return this.x2q_1.z2q(element);
  };
  protoOf(MutableVectorList).c2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.z2q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).c29 = function (element) {
    return this.x2q_1.c29(element);
  };
  protoOf(MutableVectorList).s = function (element) {
    return this.c29((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).a2r = function (index, element) {
    return this.x2q_1.a2r(index, element);
  };
  protoOf(MutableVectorList).y1 = function (index, element) {
    return this.a2r(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).b2r = function (index, elements) {
    return this.x2q_1.b2r(index, elements);
  };
  protoOf(MutableVectorList).a2 = function (index, elements) {
    return this.b2r(index, elements);
  };
  protoOf(MutableVectorList).c2r = function (elements) {
    return this.x2q_1.c2r(elements);
  };
  protoOf(MutableVectorList).z = function (elements) {
    return this.c2r(elements);
  };
  protoOf(MutableVectorList).c1 = function () {
    return this.x2q_1.c1();
  };
  protoOf(MutableVectorList).d2 = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(MutableVectorList).d2r = function (element) {
    return this.x2q_1.d2r(element);
  };
  protoOf(MutableVectorList).t = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.d2r((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).k1 = function (index) {
    checkIndex(this, index);
    return this.x2q_1.k1(index);
  };
  protoOf(MutableVectorList).e2r = function (elements) {
    return this.x2q_1.e2r(elements);
  };
  protoOf(MutableVectorList).b1 = function (elements) {
    return this.e2r(elements);
  };
  protoOf(MutableVectorList).f2r = function (index, element) {
    checkIndex(this, index);
    return this.x2q_1.f2r(index, element);
  };
  protoOf(MutableVectorList).o = function (index, element) {
    return this.f2r(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).e2 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function SubList(list, start, end) {
    this.g2r_1 = list;
    this.h2r_1 = start;
    this.i2r_1 = end;
  }
  protoOf(SubList).n = function () {
    return this.i2r_1 - this.h2r_1 | 0;
  };
  protoOf(SubList).nd = function (element) {
    var inductionVariable = this.h2r_1;
    var last = this.i2r_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.g2r_1.i1(i), element)) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.nd((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).od = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'androidx.compose.runtime.collection.SubList.containsAll.<anonymous>' call
      if (!this.nd(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SubList).d1 = function (elements) {
    return this.od(elements);
  };
  protoOf(SubList).i1 = function (index) {
    checkIndex(this, index);
    return this.g2r_1.i1(index + this.h2r_1 | 0);
  };
  protoOf(SubList).y2q = function (element) {
    var inductionVariable = this.h2r_1;
    var last = this.i2r_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.g2r_1.i1(i), element)) {
          return i - this.h2r_1 | 0;
        }
      }
       while (inductionVariable < last);
    return -1;
  };
  protoOf(SubList).b2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.y2q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).e1 = function () {
    return this.i2r_1 === this.h2r_1;
  };
  protoOf(SubList).v = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(SubList).z2q = function (element) {
    var inductionVariable = this.i2r_1 - 1 | 0;
    var last = this.h2r_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (equals(this.g2r_1.i1(i), element)) {
          return i - this.h2r_1 | 0;
        }
      }
       while (!(i === last));
    return -1;
  };
  protoOf(SubList).c2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.z2q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).c29 = function (element) {
    var tmp1 = this.i2r_1;
    this.i2r_1 = tmp1 + 1 | 0;
    this.g2r_1.y1(tmp1, element);
    return true;
  };
  protoOf(SubList).s = function (element) {
    return this.c29((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).a2r = function (index, element) {
    this.g2r_1.y1(index + this.h2r_1 | 0, element);
    this.i2r_1 = this.i2r_1 + 1 | 0;
  };
  protoOf(SubList).y1 = function (index, element) {
    return this.a2r(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).b2r = function (index, elements) {
    this.g2r_1.a2(index + this.h2r_1 | 0, elements);
    this.i2r_1 = this.i2r_1 + elements.n() | 0;
    return elements.n() > 0;
  };
  protoOf(SubList).a2 = function (index, elements) {
    return this.b2r(index, elements);
  };
  protoOf(SubList).c2r = function (elements) {
    this.g2r_1.a2(this.i2r_1, elements);
    this.i2r_1 = this.i2r_1 + elements.n() | 0;
    return elements.n() > 0;
  };
  protoOf(SubList).z = function (elements) {
    return this.c2r(elements);
  };
  protoOf(SubList).c1 = function () {
    var inductionVariable = this.i2r_1 - 1 | 0;
    var last = this.h2r_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        this.g2r_1.k1(i);
      }
       while (!(i === last));
    this.i2r_1 = this.h2r_1;
  };
  protoOf(SubList).d2 = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(SubList).d2r = function (element) {
    var inductionVariable = this.h2r_1;
    var last = this.i2r_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.g2r_1.i1(i), element)) {
          this.g2r_1.k1(i);
          this.i2r_1 = this.i2r_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).t = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.d2r((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).k1 = function (index) {
    checkIndex(this, index);
    var item = this.g2r_1.k1(index + this.h2r_1 | 0);
    this.i2r_1 = this.i2r_1 - 1 | 0;
    return item;
  };
  protoOf(SubList).e2r = function (elements) {
    var originalEnd = this.i2r_1;
    var inductionVariable = this.i2r_1 - 1 | 0;
    var last = this.h2r_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = this.g2r_1.i1(i);
        if (!elements.r(item)) {
          this.g2r_1.k1(i);
          this.i2r_1 = this.i2r_1 - 1 | 0;
        }
      }
       while (!(i === last));
    return !(originalEnd === this.i2r_1);
  };
  protoOf(SubList).b1 = function (elements) {
    return this.e2r(elements);
  };
  protoOf(SubList).f2r = function (index, element) {
    checkIndex(this, index);
    return this.g2r_1.o(index + this.h2r_1 | 0, element);
  };
  protoOf(SubList).o = function (index, element) {
    return this.f2r(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList).e2 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function MutableVector(content, size) {
    this.y28_1 = content;
    this.z28_1 = null;
    this.a29_1 = size;
    this.b29_1 = 8;
  }
  protoOf(MutableVector).c29 = function (element) {
    this.j2r(this.a29_1 + 1 | 0);
    this.y28_1[this.a29_1] = element;
    this.a29_1 = this.a29_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).a2r = function (index, element) {
    this.j2r(this.a29_1 + 1 | 0);
    var content = this.y28_1;
    if (!(index === this.a29_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + 1 | 0;
      var endIndex = this.a29_1;
      arrayCopy(content, content, destinationOffset, index, endIndex);
    }
    content[index] = element;
    this.a29_1 = this.a29_1 + 1 | 0;
  };
  protoOf(MutableVector).k2r = function (index, elements) {
    if (elements.e1())
      return false;
    this.j2r(this.a29_1 + elements.a29_1 | 0);
    var content = this.y28_1;
    if (!(index === this.a29_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + elements.a29_1 | 0;
      var endIndex = this.a29_1;
      arrayCopy(content, content, destinationOffset, index, endIndex);
    }
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = elements.y28_1;
    var endIndex_0 = elements.a29_1;
    arrayCopy(this_0, content, index, 0, endIndex_0);
    this.a29_1 = this.a29_1 + elements.a29_1 | 0;
    return true;
  };
  protoOf(MutableVector).b2r = function (index, elements) {
    if (elements.e1())
      return false;
    this.j2r(this.a29_1 + elements.n() | 0);
    var content = this.y28_1;
    if (!(index === this.a29_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + elements.n() | 0;
      var endIndex = this.a29_1;
      arrayCopy(content, content, destinationOffset, index, endIndex);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var tmp0_iterator = elements.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.addAll.<anonymous>' call
      var tmp1 = index_0;
      index_0 = tmp1 + 1 | 0;
      content[index + checkIndexOverflow(tmp1) | 0] = item;
    }
    this.a29_1 = this.a29_1 + elements.n() | 0;
    return true;
  };
  protoOf(MutableVector).c2r = function (elements) {
    return this.b2r(this.a29_1, elements);
  };
  protoOf(MutableVector).l2r = function () {
    var tmp0_elvis_lhs = this.z28_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableVectorList(this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector.asMutableList.<anonymous>' call
      this.z28_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MutableVector).c1 = function () {
    var content = this.y28_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.a29_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.a29_1 = 0;
  };
  protoOf(MutableVector).nd = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.a29_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = i;
        var tmp = this.y28_1[index];
        var tmp$ret$1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).od = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.containsAll.<anonymous>' call
      if (!this.nd(element))
        return false;
    }
    return true;
  };
  protoOf(MutableVector).j2r = function (capacity) {
    var oldContent = this.y28_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.y28_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).zc = function () {
    if (this.e1()) {
      throw NoSuchElementException_init_$Create$('MutableVector is empty.');
    }
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp = this.y28_1[0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(MutableVector).y2q = function (element) {
    var size = this.a29_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.y28_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        i = i + 1 | 0;
      }
       while (i < size);
    }
    return -1;
  };
  protoOf(MutableVector).e1 = function () {
    return this.a29_1 === 0;
  };
  protoOf(MutableVector).q27 = function () {
    return !(this.a29_1 === 0);
  };
  protoOf(MutableVector).ad = function () {
    if (this.e1()) {
      throw NoSuchElementException_init_$Create$('MutableVector is empty.');
    }
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var index = this.a29_1 - 1 | 0;
    var tmp = this.y28_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(MutableVector).z2q = function (element) {
    var size = this.a29_1;
    if (size > 0) {
      var i = size - 1 | 0;
      var tmp = this.y28_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        i = i - 1 | 0;
      }
       while (i >= 0);
    }
    return -1;
  };
  protoOf(MutableVector).d2r = function (element) {
    var index = this.y2q(element);
    if (index >= 0) {
      this.k1(index);
      return true;
    }
    return false;
  };
  protoOf(MutableVector).k1 = function (index) {
    var content = this.y28_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.a29_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      var endIndex = this.a29_1;
      arrayCopy(content, content, index, startIndex, endIndex);
    }
    this.a29_1 = this.a29_1 - 1 | 0;
    content[this.a29_1] = null;
    return item;
  };
  protoOf(MutableVector).f2 = function (start, end) {
    if (end > start) {
      if (end < this.a29_1) {
        // Inline function 'kotlin.collections.copyInto' call
        var this_0 = this.y28_1;
        var destination = this.y28_1;
        var endIndex = this.a29_1;
        arrayCopy(this_0, destination, start, end, endIndex);
      }
      var newSize = this.a29_1 - (end - start | 0) | 0;
      var inductionVariable = newSize;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      var last = this.a29_1 - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.y28_1[i] = null;
        }
         while (!(i === last));
      this.a29_1 = newSize;
    }
  };
  protoOf(MutableVector).e2r = function (elements) {
    var initialSize = this.a29_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.a29_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var tmp = this.y28_1[i];
        var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (!elements.r(item)) {
          this.k1(i);
        }
      }
       while (0 <= inductionVariable);
    return !(initialSize === this.a29_1);
  };
  protoOf(MutableVector).f2r = function (index, element) {
    var content = this.y28_1;
    var tmp = content[index];
    var old = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    content[index] = element;
    return old;
  };
  protoOf(MutableVector).m2r = function (comparator) {
    var tmp = this.y28_1;
    sortWith_0(isArray(tmp) ? tmp : THROW_CCE(), comparator, 0, this.a29_1);
  };
  function checkIndex(_this__u8e3s4, index) {
    var size = _this__u8e3s4.n();
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds. ' + ('The list has ' + size + ' elements.'));
    }
  }
  function checkSubIndex(_this__u8e3s4, fromIndex, toIndex) {
    var size = _this__u8e3s4.n();
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('Indices are out of order. fromIndex (' + fromIndex + ') is ' + ('greater than toIndex (' + toIndex + ').'));
    }
    if (fromIndex < 0) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than 0.');
    }
    if (toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is more than than the list size (' + size + ')');
    }
  }
  function SubList_0(source, fromIndex, toIndex) {
    AbstractList.call(this);
    this.n2r_1 = source;
    this.o2r_1 = fromIndex;
    this.p2r_1 = toIndex;
    this.q2r_1 = 0;
    ListImplementation_instance.q(this.o2r_1, this.p2r_1, this.n2r_1.n());
    this.q2r_1 = this.p2r_1 - this.o2r_1 | 0;
  }
  protoOf(SubList_0).i1 = function (index) {
    ListImplementation_instance.z1(index, this.q2r_1);
    return this.n2r_1.i1(this.o2r_1 + index | 0);
  };
  protoOf(SubList_0).n = function () {
    return this.q2r_1;
  };
  protoOf(SubList_0).e2 = function (fromIndex, toIndex) {
    ListImplementation_instance.q(fromIndex, toIndex, this.q2r_1);
    return new SubList_0(this.n2r_1, this.o2r_1 + fromIndex | 0, this.o2r_1 + toIndex | 0);
  };
  function ImmutableList() {
  }
  function persistentSetOf() {
    return Companion_getInstance_10().s2r();
  }
  function persistentHashMapOf() {
    return Companion_getInstance_8().u2r();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.x2r_1 = element;
  }
  protoOf(SingleElementListIterator).y = function () {
    this.a2s();
    this.y2r_1 = this.y2r_1 + 1 | 0;
    return this.x2r_1;
  };
  protoOf(SingleElementListIterator).s1 = function () {
    this.b2s();
    this.y2r_1 = this.y2r_1 - 1 | 0;
    return this.x2r_1;
  };
  function AbstractListIterator(index, size) {
    this.y2r_1 = index;
    this.z2r_1 = size;
  }
  protoOf(AbstractListIterator).w = function () {
    return this.y2r_1 < this.z2r_1;
  };
  protoOf(AbstractListIterator).q1 = function () {
    return this.y2r_1 > 0;
  };
  protoOf(AbstractListIterator).r1 = function () {
    return this.y2r_1;
  };
  protoOf(AbstractListIterator).t1 = function () {
    return this.y2r_1 - 1 | 0;
  };
  protoOf(AbstractListIterator).a2s = function () {
    if (!this.w())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).b2s = function () {
    if (!this.q1())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).e2 = function (fromIndex, toIndex) {
    return subList.call(this, fromIndex, toIndex);
  };
  protoOf(AbstractPersistentList).z = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.u24();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.z(elements);
    return this_0.v24();
  };
  protoOf(AbstractPersistentList).t = function (element) {
    var index = this.b2(element);
    if (!(index === -1)) {
      return this.k1(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).r = function (element) {
    return !(this.b2(element) === -1);
  };
  protoOf(AbstractPersistentList).d1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.e1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        if (!this.r(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractPersistentList).v = function () {
    return this.ga();
  };
  protoOf(AbstractPersistentList).ga = function () {
    return this.d2(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.f2s_1 = buffer;
  }
  protoOf(BufferIterator).y = function () {
    if (!this.w()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.y2r_1;
    this.y2r_1 = tmp1 + 1 | 0;
    return this.f2s_1[tmp1];
  };
  protoOf(BufferIterator).s1 = function () {
    if (!this.q1()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.y2r_1 = this.y2r_1 - 1 | 0;
    return this.f2s_1[this.y2r_1];
  };
  function rootSize($this) {
    return rootSize_1($this.i2s_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.i2s_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.j2s_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.j2s_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.i2s_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.j2s_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.i2s_1 + 1 | 0, $this.j2s_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.i2s_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = get_MAX_BUFFER_SIZE();
      tmp = fillArrayVal(Array(size), null);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.i2s_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.h2s_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.h2s_1;
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(this_0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.i2s_1 + 1 | 0, $this.j2s_1);
    }
    var lastElement = $this.h2s_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.h2s_1;
    var destinationOffset_0 = tailIndex + 1 | 0;
    var endIndex = tailSize - 1 | 0;
    arrayCopy(this_1, newTail, destinationOffset_0, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, endIndex);
      elementCarry.k2s_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.k2s_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.i2s_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.h2s_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.h2s_1;
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.k2s_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.k2s_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        var size = get_MAX_BUFFER_SIZE();
        tmp = fillArrayVal(Array(size), null);
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, startIndex, endIndex);
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.k2s_1;
      tailCarry.k2s_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.h2s_1;
    }
    var buffer = $this.g2s_1;
    var shift = $this.j2s_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.g2s_1 = root;
    this.h2s_1 = tail;
    this.i2s_1 = size;
    this.j2s_1 = rootShift;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.i2s_1 > get_MAX_BUFFER_SIZE())) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var message = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.i2s_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.i2s_1 - rootSize_1(this.i2s_1) | 0) <= coerceAtMost(this.h2s_1.length, get_MAX_BUFFER_SIZE()));
  }
  protoOf(PersistentVector).n = function () {
    return this.i2s_1;
  };
  protoOf(PersistentVector).s = function (element) {
    var tailSize = this.i2s_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.h2s_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.g2s_1, newTail, this.i2s_1 + 1 | 0, this.j2s_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.g2s_1, this.h2s_1, newTail_0);
  };
  protoOf(PersistentVector).c2s = function (index, element) {
    ListImplementation_instance.p1(index, this.i2s_1);
    if (index === this.i2s_1) {
      return this.s(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.g2s_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.g2s_1, this.j2s_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.k2s_1);
  };
  protoOf(PersistentVector).k1 = function (index) {
    ListImplementation_instance.z1(index, this.i2s_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.g2s_1, rootSize_0, this.j2s_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.g2s_1, this.j2s_1, index, new ObjectRef(this.h2s_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.j2s_1, 0);
  };
  protoOf(PersistentVector).u24 = function () {
    return new PersistentVectorBuilder(this, this.g2s_1, this.h2s_1, this.j2s_1);
  };
  protoOf(PersistentVector).d2 = function (index) {
    ListImplementation_instance.p1(index, this.i2s_1);
    var tmp = this.h2s_1;
    return new PersistentVectorIterator(this.g2s_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.i2s_1, (this.j2s_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  protoOf(PersistentVector).i1 = function (index) {
    ListImplementation_instance.z1(index, this.i2s_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).o = function (index, element) {
    ListImplementation_instance.z1(index, this.i2s_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.h2s_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.g2s_1, newTail, this.i2s_1, this.j2s_1);
    }
    var newRoot = setInRoot(this, this.g2s_1, this.j2s_1, index, element);
    return new PersistentVector(newRoot, this.h2s_1, this.i2s_1, this.j2s_1);
  };
  function rootSize_0($this) {
    if ($this.t2s_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.t2s_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.t2s_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.q2s_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var destination = mutableBuffer($this);
    var endIndex = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, destination, 0, 0, endIndex);
    return destination;
  }
  function makeMutableShiftingRight($this, buffer, distance) {
    if (isMutable($this, buffer)) {
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = get_MAX_BUFFER_SIZE() - distance | 0;
      arrayCopy(buffer, buffer, distance, 0, endIndex);
      return buffer;
    }
    // Inline function 'kotlin.collections.copyInto' call
    var destination = mutableBuffer($this);
    var endIndex_0 = get_MAX_BUFFER_SIZE() - distance | 0;
    arrayCopy(buffer, destination, distance, 0, endIndex_0);
    return destination;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.q2s_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_MUTABLE_BUFFER_SIZE();
    var buffer = fillArrayVal(Array(size), null);
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.q2s_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.t2s_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.p2s_1) {
      $this.r2s_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.p2s_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.s2s_1 = newTail;
      $this.p2s_1 = $this.p2s_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      $this.t2s_1 = $this.t2s_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.r2s_1 = filledTail;
      $this.s2s_1 = newTail;
      $this.t2s_1 = $this.t2s_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.r2s_1 = pushTail_0($this, root, filledTail, $this.p2s_1);
      $this.s2s_1 = newTail;
      $this.t2s_1 = $this.t2s_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.t2s_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.w() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.y();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.p2s_1 ? pushBuffers($this, root, rootSize, $this.p2s_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.w()) {
      $this.p2s_1 = $this.p2s_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.p2s_1, $this.p2s_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.w()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.y();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.w();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.s2s_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.s2s_1;
      var destinationOffset = index + 1 | 0;
      arrayCopy(this_0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.r2s_1 = root;
      $this.s2s_1 = mutableTail;
      $this.t2s_1 = $this.t2s_1 + 1 | 0;
    } else {
      var lastElement = $this.s2s_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = $this.s2s_1;
      var destinationOffset_0 = index + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(this_1, mutableTail, destinationOffset_0, index, endIndex);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.k2s_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var destinationOffset = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, destination, destinationOffset, bufferIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.k2s_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function insertIntoRoot_1($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.checkNotNull' call
    var value = $this.r2s_1;
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var startLeafIndex = index >> get_LOG_MAX_BUFFER_SIZE();
    var startLeaf = shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE()) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex | 0) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    splitToBuffers($this, elements, index, startLeaf, get_MAX_BUFFER_SIZE(), buffers, newNullBuffers, newNextBuffer);
  }
  function shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.checkNotNull' call
    var value = $this.r2s_1;
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var leafCount = rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE();
    var leafBufferIterator_0 = leafBufferIterator($this, leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (!(leafBufferIterator_0.t1() === startLeafIndex)) {
      var currentBuffer = leafBufferIterator_0.s1();
      // Inline function 'kotlin.collections.copyInto' call
      var destination = buffer;
      var startIndex = get_MAX_BUFFER_SIZE() - rightShift | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(currentBuffer, destination, 0, startIndex, endIndex);
      buffer = makeMutableShiftingRight($this, currentBuffer, rightShift);
      bufferIndex = bufferIndex - 1 | 0;
      buffers[bufferIndex] = buffer;
    }
    return leafBufferIterator_0.s1();
  }
  function splitToBuffers($this, elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(nullBuffers >= 1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var firstBuffer = makeMutable($this, startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var endBufferEndIndex = ((index + elements.n() | 0) - 1 | 0) & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < get_MAX_BUFFER_SIZE()) {
      // Inline function 'kotlin.collections.copyInto' call
      var destination = newNextBuffer;
      var destinationOffset = endBufferEndIndex + 1 | 0;
      arrayCopy(firstBuffer, destination, destinationOffset, startBufferStartIndex, startBufferSize);
    } else {
      var toCopyToLast = ((endBufferEndIndex + elementsToShift | 0) - get_MAX_BUFFER_SIZE() | 0) + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = mutableBuffer($this);
        newNullBuffers = newNullBuffers - 1 | 0;
        buffers[newNullBuffers] = newNextBuffer;
      }
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, nextBuffer, 0, startIndex, startBufferSize);
      // Inline function 'kotlin.collections.copyInto' call
      var destination_0 = newNextBuffer;
      var destinationOffset_0 = endBufferEndIndex + 1 | 0;
      var endIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, destination_0, destinationOffset_0, startBufferStartIndex, endIndex);
    }
    var elementsIterator = elements.v();
    copyToBuffer($this, firstBuffer, startBufferStartIndex, elementsIterator);
    var inductionVariable = 1;
    var last = newNullBuffers;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffers[i] = copyToBuffer($this, mutableBuffer($this), 0, elementsIterator);
      }
       while (inductionVariable < last);
    copyToBuffer($this, newNextBuffer, 0, elementsIterator);
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.s2s_1;
    }
    var buffer = ensureNotNull($this.r2s_1);
    var shift = $this.p2s_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.t2s_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.s2s_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.s2s_1[index];
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.s2s_1;
      var destination = makeMutable($this, $this.s2s_1);
      var startIndex = index + 1 | 0;
      arrayCopy(this_0, destination, index, startIndex, tailSize);
      var mutableTail = destination;
      mutableTail[tailSize - 1 | 0] = null;
      $this.r2s_1 = root;
      $this.s2s_1 = mutableTail;
      $this.t2s_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.p2s_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      // Inline function 'kotlin.collections.copyInto' call
      var destination = makeMutable($this, root);
      var startIndex = bufferIndex + 1 | 0;
      var endIndex = get_MAX_BUFFER_SIZE();
      arrayCopy(root, destination, bufferIndex, startIndex, endIndex);
      var mutableRoot = destination;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.k2s_1;
      tailCarry.k2s_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.r2s_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.s2s_1 = tmp_0;
      $this.t2s_1 = rootSize;
      $this.p2s_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.k2s_1;
    tmp_1.s2s_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.t2s_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.r2s_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.p2s_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.r2s_1 = newRoot;
      $this.p2s_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.k2s_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.j1_1 = $this.j1_1 + 1 | 0;
      }
      oldElementCarry.k2s_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    // Inline function 'kotlin.checkNotNull' call
    var value = $this.r2s_1;
    // Inline function 'kotlin.contracts.contract' call
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var leafCount = rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE();
    ListImplementation_instance.p1(index, leafCount);
    if ($this.p2s_1 === 0) {
      return new SingleElementListIterator(ensureNotNull($this.r2s_1), index);
    }
    var trieHeight = $this.p2s_1 / get_LOG_MAX_BUFFER_SIZE() | 0;
    return new TrieIterator(ensureNotNull($this.r2s_1), index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.m2s_1 = vector;
    this.n2s_1 = vectorRoot;
    this.o2s_1 = vectorTail;
    this.p2s_1 = rootShift;
    this.q2s_1 = new MutabilityOwnership();
    this.r2s_1 = this.n2s_1;
    this.s2s_1 = this.o2s_1;
    this.t2s_1 = this.m2s_1.n();
  }
  protoOf(PersistentVectorBuilder).n = function () {
    return this.t2s_1;
  };
  protoOf(PersistentVectorBuilder).u2s = function () {
    return this.j1_1;
  };
  protoOf(PersistentVectorBuilder).v24 = function () {
    var tmp = this;
    var tmp_0;
    if (this.r2s_1 === this.n2s_1 ? this.s2s_1 === this.o2s_1 : false) {
      tmp_0 = this.m2s_1;
    } else {
      this.q2s_1 = new MutabilityOwnership();
      this.n2s_1 = this.r2s_1;
      this.o2s_1 = this.s2s_1;
      var tmp_1;
      if (this.r2s_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.s2s_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.s2s_1, this.t2s_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.r2s_1), this.s2s_1, this.t2s_1, this.p2s_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.m2s_1 = tmp_0;
    return this.m2s_1;
  };
  protoOf(PersistentVectorBuilder).s = function (element) {
    this.j1_1 = this.j1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.s2s_1);
      mutableTail[tailSize] = element;
      this.s2s_1 = mutableTail;
      this.t2s_1 = this.t2s_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.r2s_1, this.s2s_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).z = function (elements) {
    if (elements.e1()) {
      return false;
    }
    this.j1_1 = this.j1_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.v();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.n()) {
      this.s2s_1 = copyToBuffer(this, makeMutable(this, this.s2s_1), tailSize, elementsIterator);
      this.t2s_1 = this.t2s_1 + elements.n() | 0;
    } else {
      var buffersSize = ((elements.n() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = fillArrayVal(Array(buffersSize), null);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.s2s_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.r2s_1;
      var tmp_1 = rootSize_0(this);
      tmp.r2s_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.s2s_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.t2s_1 = this.t2s_1 + elements.n() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).y1 = function (index, element) {
    ListImplementation_instance.p1(index, this.t2s_1);
    if (index === this.t2s_1) {
      this.s(element);
      return Unit_instance;
    }
    this.j1_1 = this.j1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.r2s_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.r2s_1), this.p2s_1, index, element, elementCarry);
    var tmp = elementCarry.k2s_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).a2 = function (index, elements) {
    ListImplementation_instance.p1(index, this.t2s_1);
    if (index === this.t2s_1) {
      return this.z(elements);
    }
    if (elements.e1()) {
      return false;
    }
    this.j1_1 = this.j1_1 + 1 | 0;
    var unaffectedElementsCount = index >> get_LOG_MAX_BUFFER_SIZE() << get_LOG_MAX_BUFFER_SIZE();
    var buffersSize = (((this.t2s_1 - unaffectedElementsCount | 0) + elements.n() | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var endIndex = ((index + elements.n() | 0) - 1 | 0) & get_MAX_BUFFER_SIZE_MINUS_ONE();
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.s2s_1;
      var destination = makeMutable(this, this.s2s_1);
      var destinationOffset = endIndex + 1 | 0;
      var endIndex_0 = tailSize_0(this);
      arrayCopy(this_0, destination, destinationOffset, startIndex, endIndex_0);
      var newTail = destination;
      copyToBuffer(this, newTail, startIndex, elements.v());
      this.s2s_1 = newTail;
      this.t2s_1 = this.t2s_1 + elements.n() | 0;
      return true;
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var buffers = fillArrayVal(Array(buffersSize), null);
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.t2s_1 + elements.n() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.s2s_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.s2s_1, rightShift);
      insertIntoRoot_1(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.s2s_1;
      var destination_0 = mutableBuffer(this);
      var startIndex_0 = tailSize_1 - newTailSize | 0;
      arrayCopy(this_1, destination_0, 0, startIndex_0, tailSize_1);
      newTail_0 = destination_0;
      var rightShift_0 = get_MAX_BUFFER_SIZE() - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.s2s_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_1(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.r2s_1;
    tmp.r2s_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.s2s_1 = newTail_0;
    this.t2s_1 = this.t2s_1 + elements.n() | 0;
    return true;
  };
  protoOf(PersistentVectorBuilder).i1 = function (index) {
    ListImplementation_instance.z1(index, this.t2s_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).k1 = function (index) {
    ListImplementation_instance.z1(index, this.t2s_1);
    this.j1_1 = this.j1_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.r2s_1, rootSize, this.p2s_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.s2s_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.r2s_1), this.p2s_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.p2s_1, 0);
    var tmp_0 = elementCarry.k2s_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).o = function (index, element) {
    ListImplementation_instance.z1(index, this.t2s_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.s2s_1);
      if (!(mutableTail === this.s2s_1)) {
        this.j1_1 = this.j1_1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.s2s_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.r2s_1 = setInRoot_0(this, ensureNotNull(this.r2s_1), this.p2s_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.k2s_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).v = function () {
    return this.ga();
  };
  protoOf(PersistentVectorBuilder).ga = function () {
    return this.d2(0);
  };
  protoOf(PersistentVectorBuilder).d2 = function (index) {
    ListImplementation_instance.p1(index, this.t2s_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.x2s_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.y2s_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).y = function () {
    this.a2s();
    if (this.y2s_1.w()) {
      this.y2r_1 = this.y2r_1 + 1 | 0;
      return this.y2s_1.y();
    }
    var tmp3 = this.y2r_1;
    this.y2r_1 = tmp3 + 1 | 0;
    return this.x2s_1[tmp3 - this.y2s_1.z2r_1 | 0];
  };
  protoOf(PersistentVectorIterator).s1 = function () {
    this.b2s();
    if (this.y2r_1 > this.y2s_1.z2r_1) {
      this.y2r_1 = this.y2r_1 - 1 | 0;
      return this.x2s_1[this.y2r_1 - this.y2s_1.z2r_1 | 0];
    }
    this.y2r_1 = this.y2r_1 - 1 | 0;
    return this.y2s_1.s1();
  };
  function reset($this) {
    $this.z2r_1 = $this.g2t_1.t2s_1;
    $this.h2t_1 = $this.g2t_1.u2s();
    $this.j2t_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.g2t_1.r2s_1;
    if (root == null) {
      $this.i2t_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.g2t_1.t2s_1);
    var trieIndex = coerceAtMost($this.y2r_1, trieSize);
    var trieHeight = ($this.g2t_1.p2s_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.i2t_1 == null) {
      $this.i2t_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.i2t_1).k2t(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.h2t_1 === $this.g2t_1.u2s()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.j2t_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.t2s_1);
    this.g2t_1 = builder;
    this.h2t_1 = this.g2t_1.u2s();
    this.i2t_1 = null;
    this.j2t_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).s1 = function () {
    checkForComodification(this);
    this.b2s();
    this.j2t_1 = this.y2r_1 - 1 | 0;
    var tmp1_elvis_lhs = this.i2t_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.g2t_1.s2s_1;
      this.y2r_1 = this.y2r_1 - 1 | 0;
      var tmp_1 = tmp_0[this.y2r_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.y2r_1 > trieIterator.z2r_1) {
      var tmp_2 = this.g2t_1.s2s_1;
      this.y2r_1 = this.y2r_1 - 1 | 0;
      var tmp_3 = tmp_2[this.y2r_1 - trieIterator.z2r_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.y2r_1 = this.y2r_1 - 1 | 0;
    return trieIterator.s1();
  };
  protoOf(PersistentVectorMutableIterator).y = function () {
    checkForComodification(this);
    this.a2s();
    this.j2t_1 = this.y2r_1;
    var tmp2_elvis_lhs = this.i2t_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.g2t_1.s2s_1;
      var tmp1 = this.y2r_1;
      this.y2r_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.w()) {
      this.y2r_1 = this.y2r_1 + 1 | 0;
      return trieIterator.y();
    }
    var tmp_2 = this.g2t_1.s2s_1;
    var tmp6 = this.y2r_1;
    this.y2r_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.z2r_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).x = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.g2t_1.k1(this.j2t_1);
    if (this.j2t_1 < this.y2r_1)
      this.y2r_1 = this.j2t_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.l2t_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_7();
    AbstractPersistentList.call(this);
    this.m2t_1 = buffer;
    assert(this.m2t_1.length <= get_MAX_BUFFER_SIZE());
  }
  protoOf(SmallPersistentVector).n = function () {
    return this.m2t_1.length;
  };
  protoOf(SmallPersistentVector).s = function (element) {
    if (this.n() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.m2t_1, this.n() + 1 | 0);
      newBuffer[this.n()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.m2t_1, tail, this.n() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).z = function (elements) {
    if ((this.n() + elements.n() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.m2t_1, this.n() + elements.n() | 0);
      var index = this.n();
      var tmp0_iterator = elements.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.u24();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.z(elements);
    return this_0.v24();
  };
  protoOf(SmallPersistentVector).c2s = function (index, element) {
    ListImplementation_instance.p1(index, this.n());
    if (index === this.n()) {
      return this.s(element);
    }
    if (this.n() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.n() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.m2t_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.m2t_1;
      var destinationOffset = index + 1 | 0;
      var endIndex = this.n();
      arrayCopy(this_1, newBuffer, destinationOffset, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.m2t_1.slice();
    // Inline function 'kotlin.collections.copyInto' call
    var this_2 = this.m2t_1;
    var destinationOffset_0 = index + 1 | 0;
    var endIndex_0 = this.n() - 1 | 0;
    arrayCopy(this_2, root, destinationOffset_0, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.m2t_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.n() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).k1 = function (index) {
    ListImplementation_instance.z1(index, this.n());
    if (this.n() === 1) {
      return Companion_getInstance_7().l2t_1;
    }
    var newBuffer = copyOf_0(this.m2t_1, this.n() - 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.m2t_1;
    var startIndex = index + 1 | 0;
    var endIndex = this.n();
    arrayCopy(this_0, newBuffer, index, startIndex, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).u24 = function () {
    return new PersistentVectorBuilder(this, null, this.m2t_1, 0);
  };
  protoOf(SmallPersistentVector).b2 = function (element) {
    return indexOf(this.m2t_1, element);
  };
  protoOf(SmallPersistentVector).c2 = function (element) {
    return lastIndexOf(this.m2t_1, element);
  };
  protoOf(SmallPersistentVector).d2 = function (index) {
    ListImplementation_instance.p1(index, this.n());
    var tmp = this.m2t_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.n());
  };
  protoOf(SmallPersistentVector).i1 = function (index) {
    ListImplementation_instance.z1(index, this.n());
    var tmp = this.m2t_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).o = function (index, element) {
    ListImplementation_instance.z1(index, this.n());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.m2t_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.b2t_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.b2t_1) {
      var tmp = $this.c2t_1;
      var tmp_0 = i;
      var tmp_1 = $this.c2t_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.y2r_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.b2t_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.y2r_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.y2r_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.c2t_1[$this.b2t_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.b2t_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.b2t_1;
    tmp.c2t_1 = fillArrayVal(Array(size_0), null);
    this.d2t_1 = index === size;
    this.c2t_1[0] = root;
    fillPath(this, index - (this.d2t_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).k2t = function (root, index, size, height) {
    this.y2r_1 = index;
    this.z2r_1 = size;
    this.b2t_1 = height;
    if (this.c2t_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.c2t_1 = fillArrayVal(Array(height), null);
    }
    this.c2t_1[0] = root;
    this.d2t_1 = index === size;
    fillPath(this, index - (this.d2t_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).y = function () {
    if (!this.w()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.y2r_1 = this.y2r_1 + 1 | 0;
    if (this.y2r_1 === this.z2r_1) {
      this.d2t_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).s1 = function () {
    if (!this.q1()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.y2r_1 = this.y2r_1 - 1 | 0;
    if (this.d2t_1) {
      this.d2t_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_7().l2t_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = fillArrayVal(Array(32), null);
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.k2s_1 = value;
  }
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.t2r_1 = new PersistentHashMap(Companion_getInstance_9().n2t_1, 0);
  }
  protoOf(Companion_7).u2r = function () {
    var tmp = this.t2r_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_8();
    AbstractMap.call(this);
    this.q2t_1 = node;
    this.r2t_1 = size;
  }
  protoOf(PersistentHashMap).n = function () {
    return this.r2t_1;
  };
  protoOf(PersistentHashMap).o2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).p2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).q2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).y2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.q2t_1.w2t(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).b3 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.q2t_1.x2t(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).r2 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.q2t_1.y2t(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.z2t_1, this.n() + newNodeResult.a2u_1 | 0);
  };
  protoOf(PersistentHashMap).v2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.q2t_1.b2u(tmp$ret$0, key, 0);
    if (this.q2t_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_8().u2r();
    }
    return new PersistentHashMap(newNode, this.n() - 1 | 0);
  };
  protoOf(PersistentHashMap).u24 = function () {
    return new PersistentHashMapBuilder(this);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.g2u_1 = map;
    this.h2u_1 = new MutabilityOwnership();
    this.i2u_1 = this.g2u_1.q2t_1;
    this.j2u_1 = null;
    this.k2u_1 = 0;
    this.l2u_1 = this.g2u_1.n();
  }
  protoOf(PersistentHashMapBuilder).m2u = function (value) {
    this.l2u_1 = value;
    this.k2u_1 = this.k2u_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).n = function () {
    return this.l2u_1;
  };
  protoOf(PersistentHashMapBuilder).v24 = function () {
    var tmp = this;
    var tmp_0;
    if (this.i2u_1 === this.g2u_1.q2t_1) {
      tmp_0 = this.g2u_1;
    } else {
      this.h2u_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.i2u_1, this.n());
    }
    tmp.g2u_1 = tmp_0;
    return this.g2u_1;
  };
  protoOf(PersistentHashMapBuilder).q2 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).o2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).p2 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).y2 = function (key) {
    var tmp = this.i2u_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.w2t(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).b3 = function (key) {
    var tmp = this.i2u_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.x2t(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).r2 = function (key, value) {
    this.j2u_1 = null;
    var tmp = this;
    var tmp_0 = this.i2u_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.i2u_1 = tmp_0.n2u(tmp$ret$0, key, value, 0, this);
    return this.j2u_1;
  };
  protoOf(PersistentHashMapBuilder).s2 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v24();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.n();
      var tmp_0 = this;
      var tmp_1 = this.i2u_1;
      var tmp_2 = map.q2t_1;
      tmp_0.i2u_1 = tmp_1.o2u(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.n() | 0) - intersectionCounter.p2u_1 | 0;
      if (!(oldSize === newSize)) {
        this.m2u(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).s2.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).v2 = function (key) {
    this.j2u_1 = null;
    var tmp = this;
    var tmp_0 = this.i2u_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.q2u(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_9().n2t_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.i2u_1 = tmp_1;
    return this.j2u_1;
  };
  protoOf(PersistentHashMapBuilder).r2u = function (key, value) {
    var oldSize = this.n();
    var tmp = this;
    var tmp_0 = this.i2u_1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.s2u(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_9().n2t_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.i2u_1 = tmp_1;
    return !(oldSize === this.n());
  };
  protoOf(PersistentHashMapBuilder).c1 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_9().n2t_1;
    tmp.i2u_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.m2u(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.t2u_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).w = function () {
    return this.t2u_1.w();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).y = function () {
    return this.t2u_1.y();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).x = function () {
    return this.t2u_1.x();
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.u2u_1[pathIndex].i2v(node.v2t_1, node.v2t_1.length, 0);
      while (!equals($this.u2u_1[pathIndex].e2v(), key)) {
        $this.u2u_1[pathIndex].j2v();
      }
      $this.v2u_1 = pathIndex;
      return Unit_instance;
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.m2v(keyPositionMask)) {
      var keyIndex = node.k2v(keyPositionMask);
      $this.u2u_1[pathIndex].i2v(node.v2t_1, imul(get_ENTRY_SIZE(), node.l2v()), keyIndex);
      $this.v2u_1 = pathIndex;
      return Unit_instance;
    }
    var nodeIndex = node.n2v(keyPositionMask);
    var targetNode = node.o2v(nodeIndex);
    $this.u2u_1[pathIndex].i2v(node.v2t_1, imul(get_ENTRY_SIZE(), node.l2v()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.c2v_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.a2v_1.k2u_1 === $this.d2v_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.i2u_1, path);
    this.a2v_1 = builder;
    this.b2v_1 = null;
    this.c2v_1 = false;
    this.d2v_1 = this.a2v_1.k2u_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).y = function () {
    checkForComodification_0(this);
    this.b2v_1 = this.e2v();
    this.c2v_1 = true;
    return protoOf(PersistentHashMapBaseIterator).y.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).x = function () {
    checkNextWasInvoked(this);
    if (this.w()) {
      var currentKey = this.e2v();
      // Inline function 'kotlin.collections.remove' call
      var this_0 = this.a2v_1;
      var key = this.b2v_1;
      (isInterface(this_0, MutableMap) ? this_0 : THROW_CCE()).v2(key);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.a2v_1.i2u_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.remove' call
      var this_1 = this.a2v_1;
      var key_0 = this.b2v_1;
      (isInterface(this_1, MutableMap) ? this_1 : THROW_CCE()).v2(key_0);
    }
    this.b2v_1 = null;
    this.c2v_1 = false;
    this.d2v_1 = this.a2v_1.k2u_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.s2v_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).y = function () {
    assert(this.t2v());
    this.h2v_1 = this.h2v_1 + 2 | 0;
    var tmp = this.f2v_1[this.h2v_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.f2v_1[this.h2v_1 - 1 | 0];
    return new MutableMapEntry(this.s2v_1, tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.a2w_1 = parentIterator;
    this.b2w_1 = value;
  }
  protoOf(MutableMapEntry).u2 = function () {
    return this.b2w_1;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.e2w_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).f2w = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).s = function (element) {
    return this.f2w((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).c1 = function () {
    this.e2w_1.c1();
  };
  protoOf(PersistentHashMapBuilderEntries).v = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.e2w_1);
  };
  protoOf(PersistentHashMapBuilderEntries).g4 = function (element) {
    return this.e2w_1.r2u(element.t2(), element.u2());
  };
  protoOf(PersistentHashMapBuilderEntries).n = function () {
    return this.e2w_1.n();
  };
  protoOf(PersistentHashMapBuilderEntries).f4 = function (element) {
    var tmp0_safe_receiver = this.e2w_1.b3(element.t2());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp = equals(tmp0_safe_receiver, element.u2());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.u2() == null ? this.e2w_1.y2(element.t2()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.g2w_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).k4 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).s = function (element) {
    return this.k4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).c1 = function () {
    this.g2w_1.c1();
  };
  protoOf(PersistentHashMapBuilderKeys).v = function () {
    return new PersistentHashMapBuilderKeysIterator(this.g2w_1);
  };
  protoOf(PersistentHashMapBuilderKeys).v2 = function (element) {
    if (this.g2w_1.y2(element)) {
      this.g2w_1.v2(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).t = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.v2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).n = function () {
    return this.g2w_1.n();
  };
  protoOf(PersistentHashMapBuilderKeys).p3 = function (element) {
    return this.g2w_1.y2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.p3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.h2w_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).n = function () {
    return this.h2w_1.n();
  };
  protoOf(PersistentHashMapBuilderValues).t3 = function (element) {
    return this.h2w_1.z2(element);
  };
  protoOf(PersistentHashMapBuilderValues).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.t3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).u3 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).s = function (element) {
    return this.u3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).v = function () {
    return new PersistentHashMapBuilderValuesIterator(this.h2w_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).c4 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.f4(element);
  };
  protoOf(AbstractMapBuilderEntries).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.c4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(AbstractMapBuilderEntries).e4 = function (element) {
    var tmp = !(element == null) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.g4(element);
  };
  protoOf(AbstractMapBuilderEntries).t = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.e4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.u2u_1[pathIndex].t2v()) {
      return pathIndex;
    }
    if ($this.u2u_1[pathIndex].v2v()) {
      var node = $this.u2u_1[pathIndex].w2v();
      if (pathIndex === 6) {
        $this.u2u_1[pathIndex + 1 | 0].u2v(node.v2t_1, node.v2t_1.length);
      } else {
        $this.u2u_1[pathIndex + 1 | 0].u2v(node.v2t_1, imul(get_ENTRY_SIZE(), node.l2v()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.u2u_1[$this.v2u_1].t2v()) {
      return Unit_instance;
    }
    var inductionVariable = $this.v2u_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.u2u_1[i].v2v() : false) {
          $this.u2u_1[i].x2v();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.v2u_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.u2u_1[i - 1 | 0].x2v();
        }
        $this.u2u_1[i].u2v(Companion_getInstance_9().n2t_1.v2t_1, 0);
      }
       while (0 <= inductionVariable);
    $this.w2u_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.w())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.u2u_1 = path;
    this.v2u_1 = 0;
    this.w2u_1 = true;
    this.u2u_1[0].u2v(node.v2t_1, imul(get_ENTRY_SIZE(), node.l2v()));
    this.v2u_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).e2v = function () {
    checkHasNext(this);
    return this.u2u_1[this.v2u_1].e2v();
  };
  protoOf(PersistentHashMapBaseIterator).w = function () {
    return this.w2u_1;
  };
  protoOf(PersistentHashMapBaseIterator).y = function () {
    checkHasNext(this);
    var result = this.u2u_1[this.v2u_1].y();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.f2v_1 = Companion_getInstance_9().n2t_1.v2t_1;
    this.g2v_1 = 0;
    this.h2v_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).i2v = function (buffer, dataSize, index) {
    this.f2v_1 = buffer;
    this.g2v_1 = dataSize;
    this.h2v_1 = index;
  };
  protoOf(TrieNodeBaseIterator).u2v = function (buffer, dataSize) {
    this.i2v(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).t2v = function () {
    return this.h2v_1 < this.g2v_1;
  };
  protoOf(TrieNodeBaseIterator).e2v = function () {
    assert(this.t2v());
    var tmp = this.f2v_1[this.h2v_1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).j2v = function () {
    assert(this.t2v());
    this.h2v_1 = this.h2v_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).v2v = function () {
    assert(this.h2v_1 >= this.g2v_1);
    return this.h2v_1 < this.f2v_1.length;
  };
  protoOf(TrieNodeBaseIterator).w2v = function () {
    assert(this.v2v());
    var tmp = this.f2v_1[this.h2v_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).x2v = function () {
    assert(this.v2v());
    this.h2v_1 = this.h2v_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).w = function () {
    return this.t2v();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).y = function () {
    assert(this.t2v());
    this.h2v_1 = this.h2v_1 + 2 | 0;
    var tmp = this.f2v_1[this.h2v_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).y = function () {
    assert(this.t2v());
    this.h2v_1 = this.h2v_1 + 2 | 0;
    var tmp = this.f2v_1[this.h2v_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).y = function () {
    assert(this.t2v());
    this.h2v_1 = this.h2v_1 + 2 | 0;
    var tmp = this.f2v_1[this.h2v_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.f2v_1[this.h2v_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.c2w_1 = key;
    this.d2w_1 = value;
  }
  protoOf(MapEntry).t2 = function () {
    return this.c2w_1;
  };
  protoOf(MapEntry).u2 = function () {
    return this.d2w_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.t2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.u2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = equals(tmp0_safe_receiver.t2(), this.t2()) ? equals(tmp0_safe_receiver.u2(), this.u2()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.t2()) + '=' + toString_0(this.u2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.r2w_1 = map;
  }
  protoOf(PersistentHashMapKeys).n = function () {
    return this.r2w_1.n();
  };
  protoOf(PersistentHashMapKeys).p3 = function (element) {
    return this.r2w_1.y2(element);
  };
  protoOf(PersistentHashMapKeys).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.p3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).v = function () {
    return new PersistentHashMapKeysIterator(this.r2w_1.q2t_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.s2w_1 = map;
  }
  protoOf(PersistentHashMapValues).n = function () {
    return this.s2w_1.n();
  };
  protoOf(PersistentHashMapValues).t3 = function (element) {
    return this.s2w_1.z2(element);
  };
  protoOf(PersistentHashMapValues).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.t3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).v = function () {
    return new PersistentHashMapValuesIterator(this.s2w_1.q2t_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.t2w_1 = map;
  }
  protoOf(PersistentHashMapEntries).n = function () {
    return this.t2w_1.n();
  };
  protoOf(PersistentHashMapEntries).u2w = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.t2w_1.b3(element.t2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.u2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.u2() == null ? this.t2w_1.y2(element.t2()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.u2w((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).v = function () {
    return new PersistentHashMapEntriesIterator(this.t2w_1.q2t_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.z2t_1 = node;
    this.a2u_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.t2t_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.v2t_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.v2t_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.k2v(positionMask);
    var newBuffer = insertEntryAtIndex($this.v2t_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.s2t_1 | positionMask, $this.t2t_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.k2v(positionMask);
    if ($this.u2t_1 === owner) {
      $this.v2t_1 = insertEntryAtIndex($this.v2t_1, keyIndex, key, value);
      $this.s2t_1 = $this.s2t_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.v2t_1, keyIndex, key, value);
    return new TrieNode($this.s2t_1 | positionMask, $this.t2t_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.v2t_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.s2t_1, $this.t2t_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.u2t_1 === mutator.h2u_1) {
      $this.v2t_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.k2u_1 = mutator.k2u_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.v2t_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.s2t_1, $this.t2t_1, newBuffer, mutator.h2u_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.v2t_1;
    if (newNodeBuffer.length === 2 ? newNode.t2t_1 === 0 : false) {
      if ($this.v2t_1.length === 1) {
        newNode.s2t_1 = $this.t2t_1;
        return newNode;
      }
      var keyIndex = $this.k2v(positionMask);
      var newBuffer = replaceNodeWithEntry($this.v2t_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.s2t_1 ^ positionMask, $this.t2t_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.v2t_1, $this.v2t_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.s2t_1, $this.t2t_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.v2t_1.length === 1 ? newNode.v2t_1.length === 2 : false) ? newNode.t2t_1 === 0 : false) {
      newNode.s2t_1 = $this.t2t_1;
      return newNode;
    }
    if ($this.u2t_1 === owner) {
      $this.v2t_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.v2t_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.s2t_1, $this.t2t_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.v2t_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.v2t_1, nodeIndex);
    return TrieNode_init_$Create$($this.s2t_1, $this.t2t_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.v2t_1.length === 1)
      return null;
    if ($this.u2t_1 === owner) {
      $this.v2t_1 = removeNodeAtIndex_0($this.v2t_1, nodeIndex);
      $this.t2t_1 = $this.t2t_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.v2t_1, nodeIndex);
    return new TrieNode($this.s2t_1, $this.t2t_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.n2v(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.v2t_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.s2t_1 ^ positionMask, $this.t2t_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.u2t_1 === owner) {
      $this.v2t_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.s2t_1 = $this.s2t_1 ^ positionMask;
      $this.t2t_1 = $this.t2t_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.s2t_1 ^ positionMask, $this.t2t_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.v2t_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.v2t_1, keyIndex);
    return TrieNode_init_$Create$($this.s2t_1 ^ positionMask, $this.t2t_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp1 = mutator.n();
    mutator.m2u(tmp1 - 1 | 0);
    mutator.j2u_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.v2t_1.length === 2)
      return null;
    if ($this.u2t_1 === mutator.h2u_1) {
      $this.v2t_1 = removeEntryAtIndex_0($this.v2t_1, keyIndex);
      $this.s2t_1 = $this.s2t_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.v2t_1, keyIndex);
    return new TrieNode($this.s2t_1 ^ positionMask, $this.t2t_1, newBuffer, mutator.h2u_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.v2t_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.v2t_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp1 = mutator.n();
    mutator.m2u(tmp1 - 1 | 0);
    mutator.j2u_1 = valueAtKeyIndex($this, i);
    if ($this.v2t_1.length === 2)
      return null;
    if ($this.u2t_1 === mutator.h2u_1) {
      $this.v2t_1 = removeEntryAtIndex_0($this.v2t_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.v2t_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.h2u_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.v2t_1.length), 2);
    var inductionVariable = progression.q9_1;
    var last = progression.r9_1;
    var step_0 = progression.s9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.v2t_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.v2t_1.length), 2);
    var inductionVariable = progression.q9_1;
    var last = progression.r9_1;
    var step_0 = progression.s9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.v2t_1.length), 2);
    var inductionVariable = progression.q9_1;
    var last = progression.r9_1;
    var step_0 = progression.s9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.v2t_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.v2t_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.v2t_1.length), 2);
    var inductionVariable = progression.q9_1;
    var last = progression.r9_1;
    var step_0 = progression.s9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.j2u_1 = valueAtKeyIndex($this, i);
          if ($this.u2t_1 === mutator.h2u_1) {
            $this.v2t_1[i + 1 | 0] = value;
            return $this;
          }
          mutator.k2u_1 = mutator.k2u_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.v2t_1.slice();
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.h2u_1);
        }
      }
       while (!(i === last));
    var tmp4 = mutator.n();
    mutator.m2u(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.v2t_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.h2u_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.v2t_1.length), 2);
    var inductionVariable = progression.q9_1;
    var last = progression.r9_1;
    var step_0 = progression.s9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.v2t_1.length), 2);
    var inductionVariable = progression.q9_1;
    var last = progression.r9_1;
    var step_0 = progression.s9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.v2t_1.length), 2);
    var inductionVariable = progression.q9_1;
    var last = progression.r9_1;
    var step_0 = progression.s9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.t2t_1 === 0);
    assert($this.s2t_1 === 0);
    assert(otherNode.t2t_1 === 0);
    assert(otherNode.s2t_1 === 0);
    var tempBuffer = copyOf_0($this.v2t_1, $this.v2t_1.length + otherNode.v2t_1.length | 0);
    var i = $this.v2t_1.length;
    var progression = step(until(0, otherNode.v2t_1.length), 2);
    var inductionVariable = progression.q9_1;
    var last = progression.r9_1;
    var step_0 = progression.s9_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.v2t_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.v2t_1[j];
          tempBuffer[i + 1 | 0] = otherNode.v2t_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          intersectionCounter.p2u_1 = intersectionCounter.p2u_1 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.v2t_1.length ? $this : newSize === otherNode.v2t_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.o2v($this.n2v(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.o2v(otherNode.n2v(positionMask));
        tmp_0 = targetNode.o2u(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.m2v(positionMask)) {
        var keyIndex = otherNode.k2v(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.n();
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = key == null ? null : hashCode(key);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var this_0 = targetNode.n2u(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.n() === oldSize) {
          intersectionCounter.p2u_1 = intersectionCounter.p2u_1 + 1 | 0;
        }
        tmp_0 = this_0;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.o2v(otherNode.n2v(positionMask));
      var tmp_1;
      if ($this.m2v(positionMask)) {
        var keyIndex_0 = $this.k2v(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs_0 = key_0 == null ? null : hashCode(key_0);
        var tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.w2t(tmp$ret$2, key_0, shift + 5 | 0)) {
          intersectionCounter.p2u_1 = intersectionCounter.p2u_1 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs_1 = key_0 == null ? null : hashCode(key_0);
          var tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.n2u(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.k2v(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.k2v(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_2 = thisKey == null ? null : hashCode(thisKey);
      var tmp_3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_3 = otherKey == null ? null : hashCode(otherKey);
      var tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.h2u_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.t2t_1 === 0)
      return $this.v2t_1.length / 2 | 0;
    var numValues = countOneBits($this.s2t_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.v2t_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.o2v(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.t2t_1 === otherNode.t2t_1))
      return false;
    if (!($this.s2t_1 === otherNode.s2t_1))
      return false;
    var inductionVariable = 0;
    var last = $this.v2t_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.v2t_1[i] === otherNode.v2t_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.u2t_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.n2t_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_9();
    this.s2t_1 = dataMap;
    this.t2t_1 = nodeMap;
    this.u2t_1 = ownedBy;
    this.v2t_1 = buffer;
  }
  protoOf(TrieNode).l2v = function () {
    return countOneBits(this.s2t_1);
  };
  protoOf(TrieNode).m2v = function (positionMask) {
    return !((this.s2t_1 & positionMask) === 0);
  };
  protoOf(TrieNode).k2v = function (positionMask) {
    return imul(2, countOneBits(this.s2t_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).n2v = function (positionMask) {
    return (this.v2t_1.length - 1 | 0) - countOneBits(this.t2t_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).o2v = function (nodeIndex) {
    var tmp = this.v2t_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).w2t = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m2v(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.k2v(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o2v(this.n2v(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.w2t(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).x2t = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m2v(keyPositionMask)) {
      var keyIndex = this.k2v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o2v(this.n2v(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.x2t(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).o2u = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.v2w(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.h2u_1);
    }
    var newNodeMap = this.t2t_1 | otherNode.t2t_1;
    var newDataMap = (this.s2t_1 ^ otherNode.s2t_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask = this.s2t_1 & otherNode.s2t_1;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var leftKey = keyAtIndex(this, this.k2v(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.k2v(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      index = index + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((newNodeMap & newDataMap) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.u2t_1, mutator.h2u_1) ? this.s2t_1 === newDataMap : false) ? this.t2t_1 === newNodeMap : false) {
      tmp = this;
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var size = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      var newBuffer = fillArrayVal(Array(size), null);
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_0 = newNodeMap;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_1 = index_0;
      var newNodeIndex = (mutableNode.v2t_1.length - 1 | 0) - index_1 | 0;
      mutableNode.v2t_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      index_0 = index_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_1 = newDataMap;
    var index_2 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var index_3 = index_2;
      var newKeyIndex = imul(index_3, 2);
      if (!otherNode.m2v(bit_1)) {
        var oldKeyIndex = this.k2v(bit_1);
        mutableNode.v2t_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.v2t_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.k2v(bit_1);
        mutableNode.v2t_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.v2t_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.m2v(bit_1)) {
          intersectionCounter.p2u_1 = intersectionCounter.p2u_1 + 1 | 0;
        }
      }
      index_2 = index_2 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).y2t = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m2v(keyPositionMask)) {
      var keyIndex = this.k2v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n2v(keyPositionMask);
      var targetNode = this.o2v(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.y2t(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.z2t_1;
      tmp_2.z2t_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).n2u = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m2v(keyPositionMask)) {
      var keyIndex = this.k2v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.j2u_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp1 = mutator.n();
      mutator.m2u(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.h2u_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n2v(keyPositionMask);
      var targetNode = this.o2v(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.n2u(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.h2u_1);
    }
    var tmp3 = mutator.n();
    mutator.m2u(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.h2u_1);
  };
  protoOf(TrieNode).b2u = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m2v(keyPositionMask)) {
      var keyIndex = this.k2v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n2v(keyPositionMask);
      var targetNode = this.o2v(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.b2u(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).q2u = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m2v(keyPositionMask)) {
      var keyIndex = this.k2v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n2v(keyPositionMask);
      var targetNode = this.o2v(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.q2u(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.h2u_1);
    }
    return this;
  };
  protoOf(TrieNode).s2u = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m2v(keyPositionMask)) {
      var keyIndex = this.k2v(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n2v(keyPositionMask);
      var targetNode = this.o2v(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.s2u(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.h2u_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = nodeIndex + 2 | 0;
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, destinationOffset, startIndex, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset_0, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = nodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, startIndex, endIndex);
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = newNodeIndex + 1 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, destinationOffset, nodeIndex, endIndex);
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(size), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, endIndex);
    return newBuffer;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.r2r_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_8().u2r());
  }
  protoOf(Companion_9).s2r = function () {
    return this.r2r_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_10();
    AbstractSet.call(this);
    this.w2w_1 = firstElement;
    this.x2w_1 = lastElement;
    this.y2w_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).n = function () {
    return this.y2w_1.n();
  };
  protoOf(PersistentOrderedSet).r = function (element) {
    return this.y2w_1.y2(element);
  };
  protoOf(PersistentOrderedSet).s = function (element) {
    if (this.y2w_1.y2(element)) {
      return this;
    }
    if (this.e1()) {
      var newMap = this.y2w_1.r2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.x2w_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.y2w_1.b3(lastElement));
    var newMap_0 = this.y2w_1.r2(lastElement, lastLinks.b2x(element)).r2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.w2w_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).t = function (element) {
    var tmp0_elvis_lhs = this.y2w_1.b3(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.y2w_1.v2(element);
    if (links.c2x()) {
      // Inline function 'kotlin.collections.get' call
      var this_0 = newMap;
      var key = links.z2w_1;
      var tmp$ret$0 = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).b3(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.z2w_1;
      newMap = tmp_0.r2((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.b2x(links.a2x_1));
    }
    if (links.e2x()) {
      // Inline function 'kotlin.collections.get' call
      var this_1 = newMap;
      var key_0 = links.a2x_1;
      var tmp$ret$1 = (isInterface(this_1, Map) ? this_1 : THROW_CCE()).b3(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.a2x_1;
      newMap = tmp_2.r2((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.d2x(links.z2w_1));
    }
    var newFirstElement = !links.c2x() ? links.a2x_1 : this.w2w_1;
    var newLastElement = !links.e2x() ? links.z2w_1 : this.x2w_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).v = function () {
    return new PersistentOrderedSetIterator(this.w2w_1, this.y2w_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.z2w_1 = previous;
    this.a2x_1 = next;
  }
  protoOf(Links).b2x = function (newNext) {
    return new Links(this.z2w_1, newNext);
  };
  protoOf(Links).d2x = function (newPrevious) {
    return new Links(newPrevious, this.a2x_1);
  };
  protoOf(Links).e2x = function () {
    return !(this.a2x_1 === EndOfChain_instance);
  };
  protoOf(Links).c2x = function () {
    return !(this.z2w_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.w())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.f2x_1 = nextElement;
    this.g2x_1 = map;
    this.h2x_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).w = function () {
    return this.h2x_1 < this.g2x_1.n();
  };
  protoOf(PersistentOrderedSetIterator).y = function () {
    checkHasNext_0(this);
    var tmp = this.f2x_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.h2x_1 = this.h2x_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.g2x_1.b3(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.f2x_1 = tmp_1.a2x_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).z1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).p1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).q = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.p2u_1 = count;
  }
  protoOf(DeltaCounter).v2w = function (that) {
    this.p2u_1 = this.p2u_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.p2u_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.p2u_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.p2u_1 === tmp0_other_with_cast.p2u_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    this_0.n2x(block);
    return this_0;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.c2d() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.n1y_1, other.n1y_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.f1x(key);
    var slot = composer.r1z();
    var tmp;
    if (slot === Companion_getInstance_0().t1y_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.s1z(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.n2x(block);
    composer.h1x();
    return result;
  }
  function Builder(map) {
    PersistentHashMapBuilder.call(this, map);
    this.y2x_1 = map;
    this.z2x_1 = 8;
  }
  protoOf(Builder).v24 = function () {
    var tmp = this;
    var tmp_0;
    if (this.i2u_1 === this.y2x_1.q2t_1) {
      tmp_0 = this.y2x_1;
    } else {
      this.h2u_1 = new MutabilityOwnership();
      tmp_0 = new PersistentCompositionLocalHashMap(this.i2u_1, this.n());
    }
    tmp.y2x_1 = tmp_0;
    return this.y2x_1;
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_9().n2t_1;
    tmp.a2y_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_11();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).q2 = function () {
    return protoOf(PersistentHashMap).q2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).f2y = function (key) {
    return read(this, key);
  };
  protoOf(PersistentCompositionLocalHashMap).u24 = function () {
    return new Builder(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_11().a2y_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_kt__klyo00();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_3($this, key) {
    var high = $this.l2q_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.m2q_1[0].equals(key) ? 0 : $this.m2q_1[0].a7(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.m2q_1[mid];
      var comparison = midVal.ra(key);
      if (comparison.a7(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.a7(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.l2q_1 = size;
    this.m2q_1 = keys;
    this.n2q_1 = values;
  }
  protoOf(ThreadMap).o2q = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.n2q_1[index] : null;
  };
  protoOf(ThreadMap).p2q = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.n2q_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).q2q = function (key, value) {
    var size = this.l2q_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.n2q_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.m2q_1[source];
        var oldValue = this.n2q_1[source];
        if (oldKey.a7(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.m2q_1[source];
          var oldValue_0 = this.n2q_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_kt_kd2vq6;
  function _init_properties_ThreadMap_kt__klyo00() {
    if (!properties_initialized_ThreadMap_kt_kd2vq6) {
      properties_initialized_ThreadMap_kt_kd2vq6 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.i8(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.i1(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.i8(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.i8(truncated);
    }
    buffer.i8(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.i8(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.i8(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.a6(element.sf_1);
        } else {
          _this__u8e3s4.i8(toString_0(element));
        }
      }
    }
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$_0(_this__u8e3s4.n());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i1(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.s(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.g2y_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).gk = function () {
    return this.g2y_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.h2y_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).gk = function () {
    return this.h2y_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      get_applyObservers().t($observer);
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      get_globalWriteObservers().t($observer);
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_11() {
  }
  protoOf(Companion_11).z1v = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).m2p = function (readObserver) {
    return currentSnapshot().i2y(readObserver);
  };
  protoOf(Companion_11).s2j = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2y(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).i2g = function (readObserver, writeObserver, block) {
    if (!(readObserver == null) ? true : !(writeObserver == null)) {
      var currentSnapshot = get_threadSnapshot().dq();
      var tmp;
      var tmp_0;
      if (currentSnapshot == null) {
        tmp_0 = true;
      } else {
        tmp_0 = currentSnapshot instanceof MutableSnapshot;
      }
      if (tmp_0) {
        tmp = new TransparentObserverMutableSnapshot(currentSnapshot instanceof MutableSnapshot ? currentSnapshot : null, readObserver, writeObserver, true, false);
      } else {
        if (readObserver == null) {
          return block();
        } else {
          tmp = currentSnapshot.i2y(readObserver);
        }
      }
      var snapshot = tmp;
      try {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.t2j();
          try {
            tmp$ret$0 = block();
            break $l$block;
          }finally {
            snapshot.u2j(previous);
          }
        }
        return tmp$ret$0;
      }finally {
        snapshot.gk();
      }
    } else
      return block();
  };
  protoOf(Companion_11).k2y = function () {
    return createTransparentSnapshotWithNoParentReadObserver(get_threadSnapshot().dq());
  };
  protoOf(Companion_11).s2l = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    get_applyObservers().s(observer);
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).l2y = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    get_globalWriteObservers().s(observer);
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).k2g = function () {
    return currentSnapshot().k2g();
  };
  protoOf(Companion_11).s2i = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().dq().m2y();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q27()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function Snapshot(id, invalid) {
    this.n28_1 = invalid;
    this.o28_1 = id;
    this.p28_1 = false;
    this.q28_1 = !(id === 0) ? trackPinning(id, this.n2y()) : -1;
    this.r28_1 = 8;
  }
  protoOf(Snapshot).o2y = function (_set____db54di) {
    this.n28_1 = _set____db54di;
  };
  protoOf(Snapshot).n2y = function () {
    return this.n28_1;
  };
  protoOf(Snapshot).p2y = function (_set____db54di) {
    this.o28_1 = _set____db54di;
  };
  protoOf(Snapshot).s28 = function () {
    return this.o28_1;
  };
  protoOf(Snapshot).q2y = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).w2f = function () {
    return 0;
  };
  protoOf(Snapshot).gk = function () {
    this.p28_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.s2y();
  };
  protoOf(Snapshot).t2j = function () {
    var previous = get_threadSnapshot().dq();
    get_threadSnapshot().i2f(this);
    return previous;
  };
  protoOf(Snapshot).u2j = function (snapshot) {
    get_threadSnapshot().i2f(snapshot);
  };
  protoOf(Snapshot).x2y = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.y2y();
    this.z2y();
  };
  protoOf(Snapshot).y2y = function () {
    set_openSnapshots(get_openSnapshots().e2z(this.s28()));
  };
  protoOf(Snapshot).z2y = function () {
    this.s2y();
  };
  protoOf(Snapshot).f2z = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.p28_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).s2y = function () {
    if (this.q28_1 >= 0) {
      releasePinningLocked(this.q28_1);
      this.q28_1 = -1;
    }
  };
  protoOf(Snapshot).g2z = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.q28_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.q28_1 = -1;
    return this_0;
  };
  function StateObject() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.i1(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedSnapshot$lambda($readObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new ReadonlySnapshot(tmp0, invalid, $readObserver);
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!get_globalWriteObservers().e1()) {
      tmp = toMutableList(get_globalWriteObservers());
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp_0 = tmp_1;
    }
    var tmp$ret$6 = tmp_0;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  protoOf(GlobalSnapshot).i2y = function (readObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedSnapshot$lambda(readObserver));
  };
  protoOf(GlobalSnapshot).j2y = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).k2g = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).w2z = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).v2y = function (snapshot) {
    return this.w2z(snapshot);
  };
  protoOf(GlobalSnapshot).x2z = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).u2y = function (snapshot) {
    return this.x2z(snapshot);
  };
  protoOf(GlobalSnapshot).k2k = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).gk = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.s2y();
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.f30(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().l30(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().m30(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().dq();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().dq() : tmp0_elvis_lhs;
  }
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.i2k_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.i2k_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.q28_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.m2y();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.e30(null);
      var id = $this.s28();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.n27_1;
      var inductionVariable = 0;
      var last = modified.m27_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (!(tmp == null) ? tmp : THROW_CCE()).y2f();
          while (!(current == null)) {
            if (current.d2g_1 === id ? true : contains($this.f2k_1, current.d2g_1)) {
              current.d2g_1 = 0;
            }
            current = current.e2g_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.x2y();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.g2k_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.g2k_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.n30_1 = new Int32Array(0);
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_13();
    Snapshot.call(this, id, invalid);
    this.a2k_1 = readObserver;
    this.b2k_1 = writeObserver;
    this.c2k_1 = 0;
    this.d2k_1 = null;
    this.e2k_1 = null;
    this.f2k_1 = Companion_getInstance_14().o30_1;
    this.g2k_1 = Companion_getInstance_13().n30_1;
    this.h2k_1 = 1;
    this.i2k_1 = false;
    this.j2k_1 = 8;
  }
  protoOf(MutableSnapshot).h2g = function () {
    return this.a2k_1;
  };
  protoOf(MutableSnapshot).t2y = function () {
    return this.b2k_1;
  };
  protoOf(MutableSnapshot).j2y = function (readObserver, writeObserver) {
    this.f2z();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a30(this.s28());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().p30(newId));
    var currentInvalid = this.n2y();
    this.o2y(currentInvalid.p30(newId));
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.s28() + 1 | 0, newId), mergedReadObserver(readObserver, this.h2g()), mergedWriteObserver(writeObserver, this.t2y()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.i2k_1 ? !this.p28_1 : false) {
      var previousId = this.s28();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.p2y(tmp0_0);
      set_openSnapshots(get_openSnapshots().p30(this.s28()));
      this.o2y(addRange(this.n2y(), previousId + 1 | 0, this.s28()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).k2k = function () {
    var modified = this.m2y();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().dq(), this, get_openSnapshots().e2z(get_currentGlobalSnapshot().dq().s28())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.m27_1 === 0) {
      this.y2y();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().dq();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.m2y();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.e1())) {
        observers = toMutableList(get_applyObservers());
        globalModified = previousModified;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().dq();
      var result = this.y2z(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().e2z(previousGlobalSnapshot_0.s28()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.y2y();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.m2y();
      this.e30(null);
      previousGlobalSnapshot_0.e30(null);
      observers = toMutableList(get_applyObservers());
      globalModified = previousModified_0;
      tmp = Unit_instance;
    }
    this.i2k_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_0 = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_0 == null ? true : this_0.e1())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_1.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_1.i1(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.e1())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_2 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_2.n() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_2.i1(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.z2y();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.n27_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.m27_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var it = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.n27_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.m27_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_2 = values_0[i_0];
          var it_0 = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
          processForUnusedRecordsLocked(it_0);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.e2k_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.n() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.i1(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.e2k_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).r2y = function () {
    return false;
  };
  protoOf(MutableSnapshot).gk = function () {
    if (!this.p28_1) {
      protoOf(Snapshot).gk.call(this);
      this.v2y(this);
    }
  };
  protoOf(MutableSnapshot).i2y = function (readObserver) {
    this.f2z();
    validateNotAppliedOrPinned(this);
    var previousId = this.s28();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a30(this.s28());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var readonlyId = tmp0;
    set_openSnapshots(get_openSnapshots().p30(readonlyId));
    var this_0 = new NestedReadonlySnapshot(readonlyId, addRange(this.n2y(), previousId + 1 | 0, readonlyId), readObserver, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.i2k_1 ? !this.p28_1 : false) {
      var previousId_0 = this.s28();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.p2y(tmp0_0);
      set_openSnapshots(get_openSnapshots().p30(this.s28()));
      this.o2y(addRange(this.n2y(), previousId_0 + 1 | 0, this.s28()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).u2y = function (snapshot) {
    this.h2k_1 = this.h2k_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).v2y = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.h2k_1 > 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.h2k_1 = this.h2k_1 - 1 | 0;
    if (this.h2k_1 === 0) {
      if (!this.i2k_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).k2g = function () {
    if (this.i2k_1 ? true : this.p28_1)
      return Unit_instance;
    this.z2z();
  };
  protoOf(MutableSnapshot).y2y = function () {
    set_openSnapshots(get_openSnapshots().e2z(this.s28()).q30(this.f2k_1));
  };
  protoOf(MutableSnapshot).z2y = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).z2y.call(this);
  };
  protoOf(MutableSnapshot).y2z = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.n2y().p30(this.s28()).r30(this.f2k_1);
    var modified = ensureNotNull(this.m2y());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.n27_1;
    var inductionVariable = 0;
    var last = modified.m27_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.y2f();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.s28(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.s28(), this.n2y());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.b3(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = state.m2g(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_0;
                  tmp_4 = this_0;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.s(to(state, current.u2f()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_1 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = this_1;
                  tmp_5 = this_1;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.s(state);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_2 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = this_2;
                  tmp_6 = this_2;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.s(!equals(merged, previous) ? to(state, merged) : to(state, previous.u2f()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.z2z();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.n() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.i1(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state_0 = item.ae();
          var stateRecord = item.be();
          stateRecord.d2g_1 = this.s28();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          get_lock();
          stateRecord.e2g_1 = state_0.y2f();
          state_0.l2g(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
        tmp_7 = Unit_instance;
      }
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.n() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.i1(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.u2q(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.e2k_1;
      this.e2k_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).z2z = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a30(this.s28());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.i2k_1 ? !this.p28_1 : false) {
      var previousId = this.s28();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.p2y(tmp0);
      set_openSnapshots(get_openSnapshots().p30(this.s28()));
      this.o2y(addRange(this.n2y(), previousId + 1 | 0, this.s28()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).a30 = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.f2k_1 = this.f2k_1.p30(id);
  };
  protoOf(MutableSnapshot).b30 = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.collections.plus' call
      var this_0 = this.g2k_1;
      // Inline function 'kotlin.intArrayOf' call
      var elements = new Int32Array([id]);
      tmp.g2k_1 = primitiveArrayConcat([this_0, elements]);
    }
  };
  protoOf(MutableSnapshot).c30 = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.g2k_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.g2k_1 = tmp_0;
  };
  protoOf(MutableSnapshot).d30 = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    this.f2k_1 = this.f2k_1.r30(snapshots);
  };
  protoOf(MutableSnapshot).w2y = function (state) {
    var tmp0_elvis_lhs = this.m2y();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.e30(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.i2a(state);
  };
  protoOf(MutableSnapshot).q2y = function (_set____db54di) {
    this.c2k_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).w2f = function () {
    return this.c2k_1;
  };
  protoOf(MutableSnapshot).e30 = function (_set____db54di) {
    this.d2k_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).m2y = function () {
    return this.d2k_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.t30_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.v30_1 = snapshot;
    this.w30_1 = 8;
  }
  function SnapshotApplyResult() {
    this.x30_1 = 0;
  }
  function _get_currentSnapshot__9vker0($this) {
    var tmp0_elvis_lhs = $this.n31_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().dq() : tmp0_elvis_lhs;
  }
  function TransparentObserverMutableSnapshot(parentSnapshot, specifiedReadObserver, specifiedWriteObserver, mergeParentObservers, ownsParentSnapshot) {
    var tmp = Companion_getInstance_14().o30_1;
    var tmp1_elvis_lhs = parentSnapshot == null ? null : parentSnapshot.h2g();
    var tmp_0 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().dq().h2g() : tmp1_elvis_lhs, mergeParentObservers);
    var tmp3_elvis_lhs = parentSnapshot == null ? null : parentSnapshot.t2y();
    MutableSnapshot.call(this, 0, tmp, tmp_0, mergedWriteObserver(specifiedWriteObserver, tmp3_elvis_lhs == null ? get_currentGlobalSnapshot().dq().t2y() : tmp3_elvis_lhs));
    this.n31_1 = parentSnapshot;
    this.o31_1 = mergeParentObservers;
    this.p31_1 = ownsParentSnapshot;
  }
  protoOf(TransparentObserverMutableSnapshot).gk = function () {
    this.p28_1 = true;
    if (this.p31_1) {
      var tmp0_safe_receiver = this.n31_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.gk();
      }
    }
  };
  protoOf(TransparentObserverMutableSnapshot).p2y = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).s28 = function () {
    return _get_currentSnapshot__9vker0(this).s28();
  };
  protoOf(TransparentObserverMutableSnapshot).o2y = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).n2y = function () {
    return _get_currentSnapshot__9vker0(this).n2y();
  };
  protoOf(TransparentObserverMutableSnapshot).e30 = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).m2y = function () {
    return _get_currentSnapshot__9vker0(this).m2y();
  };
  protoOf(TransparentObserverMutableSnapshot).q2y = function (value) {
    _get_currentSnapshot__9vker0(this).q2y(value);
  };
  protoOf(TransparentObserverMutableSnapshot).w2f = function () {
    return _get_currentSnapshot__9vker0(this).w2f();
  };
  protoOf(TransparentObserverMutableSnapshot).r2y = function () {
    return _get_currentSnapshot__9vker0(this).r2y();
  };
  protoOf(TransparentObserverMutableSnapshot).k2k = function () {
    return _get_currentSnapshot__9vker0(this).k2k();
  };
  protoOf(TransparentObserverMutableSnapshot).w2y = function (state) {
    return _get_currentSnapshot__9vker0(this).w2y(state);
  };
  protoOf(TransparentObserverMutableSnapshot).i2y = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.h2g());
    var tmp;
    if (!this.o31_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0(this).i2y(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).i2y(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).j2y = function (readObserver, writeObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.h2g());
    var mergedWriteObserver_0 = mergedWriteObserver(writeObserver, this.t2y());
    var tmp;
    if (!this.o31_1) {
      var nestedSnapshot = _get_currentSnapshot__9vker0(this).j2y(null, mergedWriteObserver_0);
      tmp = new TransparentObserverMutableSnapshot(nestedSnapshot, mergedReadObserver_0, mergedWriteObserver_0, false, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).j2y(mergedReadObserver_0, mergedWriteObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).k2g = function () {
    return _get_currentSnapshot__9vker0(this).k2g();
  };
  protoOf(TransparentObserverMutableSnapshot).x2z = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).u2y = function (snapshot) {
    return this.x2z(snapshot);
  };
  protoOf(TransparentObserverMutableSnapshot).w2z = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).v2y = function (snapshot) {
    return this.w2z(snapshot);
  };
  function createTransparentSnapshotWithNoParentReadObserver(previousSnapshot, readObserver, ownsPreviousSnapshot) {
    readObserver = readObserver === VOID ? null : readObserver;
    ownsPreviousSnapshot = ownsPreviousSnapshot === VOID ? false : ownsPreviousSnapshot;
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    var tmp_0;
    if (previousSnapshot instanceof MutableSnapshot) {
      tmp_0 = true;
    } else {
      tmp_0 = previousSnapshot == null;
    }
    if (tmp_0) {
      tmp = new TransparentObserverMutableSnapshot(previousSnapshot instanceof MutableSnapshot ? previousSnapshot : null, readObserver, null, false, ownsPreviousSnapshot);
    } else {
      tmp = new TransparentObserverSnapshot(previousSnapshot, readObserver, false, ownsPreviousSnapshot);
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().dq();
    modified = previousGlobalSnapshot.m2y();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().l30(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
        var observers = toMutableList(get_applyObservers());
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.n() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.i1(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().l30(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.n27_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.m27_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_3 = values[i];
          var it = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
          processForUnusedRecordsLocked(it);
        }
         while (inductionVariable_0 < last_0);
      tmp_2 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function StateRecord() {
    this.d2g_1 = currentSnapshot().s28();
    this.e2g_1 = null;
    this.f2g_1 = 8;
  }
  function ReadonlySnapshot(id, invalid, readObserver) {
    Snapshot.call(this, id, invalid);
    this.w31_1 = readObserver;
    this.x31_1 = 1;
  }
  protoOf(ReadonlySnapshot).h2g = function () {
    return this.w31_1;
  };
  protoOf(ReadonlySnapshot).r2y = function () {
    return true;
  };
  protoOf(ReadonlySnapshot).t2y = function () {
    return null;
  };
  protoOf(ReadonlySnapshot).i2y = function (readObserver) {
    validateOpen(this);
    return new NestedReadonlySnapshot(this.s28(), this.n2y(), readObserver, this);
  };
  protoOf(ReadonlySnapshot).k2g = function () {
  };
  protoOf(ReadonlySnapshot).gk = function () {
    if (!this.p28_1) {
      this.v2y(this);
      protoOf(Snapshot).gk.call(this);
    }
  };
  protoOf(ReadonlySnapshot).u2y = function (snapshot) {
    this.x31_1 = this.x31_1 + 1 | 0;
  };
  protoOf(ReadonlySnapshot).v2y = function (snapshot) {
    this.x31_1 = this.x31_1 - 1 | 0;
    if (this.x31_1 === 0) {
      this.x2y();
    }
  };
  protoOf(ReadonlySnapshot).w2y = function (state) {
    reportReadonlySnapshotWrite();
  };
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function deactivate($this) {
    if (!$this.o32_1) {
      $this.o32_1 = true;
      $this.n32_1.v2y($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.n32_1 = parent;
    this.o32_1 = false;
    this.n32_1.u2y(this);
  }
  protoOf(NestedMutableSnapshot).gk = function () {
    if (!this.p28_1) {
      protoOf(MutableSnapshot).gk.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).k2k = function () {
    if (this.n32_1.i2k_1 ? true : this.n32_1.p28_1)
      return new Failure(this);
    var modified = this.m2y();
    var id = this.s28();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.n32_1, this, this.n32_1.n2y()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null ? true : modified.m27_1 === 0) {
      this.x2y();
    } else {
      var result = this.y2z(this.n32_1.s28(), optimisticMerges_0, this.n32_1.n2y());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.n32_1.m2y();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.u2i(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.n32_1.e30(modified);
        this.e30(null);
      }
    }
    if (this.n32_1.s28() < id) {
      this.n32_1.z2z();
    }
    this.n32_1.o2y(this.n32_1.n2y().e2z(id).q30(this.f2k_1));
    this.n32_1.a30(id);
    this.n32_1.b30(this.g2z());
    this.n32_1.d30(this.f2k_1);
    this.n32_1.c30(this.g2k_1);
    this.i2k_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.p30(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.m2y();
    var id = currentSnapshot.s28();
    if (modified == null)
      return null;
    var start = applyingSnapshot.n2y().p30(applyingSnapshot.s28()).r30(applyingSnapshot.f2k_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.n27_1;
    var inductionVariable = 0;
    var last = modified.m27_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var state = !(tmp == null) ? tmp : THROW_CCE();
          var first = state.y2f();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.s28(), applyingSnapshot.n2y());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = state.m2g(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var this_0 = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = this_0;
                tmp_3 = this_0;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.r2(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().i1(snapshot.s28())) {
      // Inline function 'kotlin.error' call
      var message = 'Snapshot is not open';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().e2z(previousGlobalSnapshot.s28()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().e2z(previousGlobalSnapshot.s28()));
    get_currentGlobalSnapshot().e2d(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.gk();
    set_openSnapshots(get_openSnapshots().p30(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.p32_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.r32_1[i];
        var value = entry == null ? null : entry.dq();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.r32_1[currentUsed] = entry;
            this_0.q32_1[currentUsed] = this_0.q32_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.r32_1[i_0] = null;
        this_0.q32_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.p32_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().i2a(state);
    }
  }
  function NestedReadonlySnapshot$readObserver$lambda($readObserver, $this) {
    return function (state) {
      $readObserver(state);
      $this(state);
      return Unit_instance;
    };
  }
  function NestedReadonlySnapshot(id, invalid, readObserver, parent) {
    Snapshot.call(this, id, invalid);
    this.y32_1 = parent;
    this.y32_1.u2y(this);
    var tmp = this;
    var tmp_0;
    if (readObserver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>' call
      var tmp0_safe_receiver = this.y32_1.h2g();
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>.<anonymous>' call
        tmp_1 = NestedReadonlySnapshot$readObserver$lambda(readObserver, tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp_0 = tmp1_elvis_lhs == null ? readObserver : tmp1_elvis_lhs;
    }
    var tmp1_elvis_lhs_0 = tmp_0;
    tmp.z32_1 = tmp1_elvis_lhs_0 == null ? this.y32_1.h2g() : tmp1_elvis_lhs_0;
  }
  protoOf(NestedReadonlySnapshot).r2y = function () {
    return true;
  };
  protoOf(NestedReadonlySnapshot).i2y = function (readObserver) {
    return new NestedReadonlySnapshot(this.s28(), this.n2y(), readObserver, this.y32_1);
  };
  protoOf(NestedReadonlySnapshot).k2g = function () {
  };
  protoOf(NestedReadonlySnapshot).h2g = function () {
    return this.z32_1;
  };
  protoOf(NestedReadonlySnapshot).gk = function () {
    if (!this.p28_1) {
      if (!(this.s28() === this.y32_1.s28())) {
        this.x2y();
      }
      this.y32_1.v2y(this);
      protoOf(Snapshot).gk.call(this);
    }
  };
  protoOf(NestedReadonlySnapshot).t2y = function () {
    return null;
  };
  protoOf(NestedReadonlySnapshot).a33 = function (state) {
    reportReadonlySnapshotWrite();
  };
  protoOf(NestedReadonlySnapshot).w2y = function (state) {
    return this.a33(state);
  };
  protoOf(NestedReadonlySnapshot).w2z = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).v2y = function (snapshot) {
    return this.w2z(snapshot);
  };
  protoOf(NestedReadonlySnapshot).x2z = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).u2y = function (snapshot) {
    return this.x2z(snapshot);
  };
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.d2g_1 < current.d2g_1 ? current : candidate;
      }
      current = current.e2g_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function _get_currentSnapshot__9vker0_0($this) {
    var tmp0_elvis_lhs = $this.g33_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().dq() : tmp0_elvis_lhs;
  }
  function TransparentObserverSnapshot(previousSnapshot, specifiedReadObserver, mergeParentObservers, ownsPreviousSnapshot) {
    Snapshot.call(this, 0, Companion_getInstance_14().o30_1);
    this.g33_1 = previousSnapshot;
    this.h33_1 = mergeParentObservers;
    this.i33_1 = ownsPreviousSnapshot;
    var tmp = this;
    var tmp0_safe_receiver = this.g33_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2g();
    tmp.j33_1 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().dq().h2g() : tmp1_elvis_lhs, this.h33_1);
    this.k33_1 = null;
    this.l33_1 = this;
  }
  protoOf(TransparentObserverSnapshot).h2g = function () {
    return this.j33_1;
  };
  protoOf(TransparentObserverSnapshot).t2y = function () {
    return this.k33_1;
  };
  protoOf(TransparentObserverSnapshot).gk = function () {
    this.p28_1 = true;
    if (this.i33_1) {
      var tmp0_safe_receiver = this.g33_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.gk();
      }
    }
  };
  protoOf(TransparentObserverSnapshot).s28 = function () {
    return _get_currentSnapshot__9vker0_0(this).s28();
  };
  protoOf(TransparentObserverSnapshot).n2y = function () {
    return _get_currentSnapshot__9vker0_0(this).n2y();
  };
  protoOf(TransparentObserverSnapshot).r2y = function () {
    return _get_currentSnapshot__9vker0_0(this).r2y();
  };
  protoOf(TransparentObserverSnapshot).w2y = function (state) {
    return _get_currentSnapshot__9vker0_0(this).w2y(state);
  };
  protoOf(TransparentObserverSnapshot).i2y = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.j33_1);
    var tmp;
    if (!this.h33_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0_0(this).i2y(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0_0(this).i2y(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverSnapshot).k2g = function () {
    return _get_currentSnapshot__9vker0_0(this).k2g();
  };
  protoOf(TransparentObserverSnapshot).x2z = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).u2y = function (snapshot) {
    return this.x2z(snapshot);
  };
  protoOf(TransparentObserverSnapshot).w2z = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).v2y = function (snapshot) {
    return this.w2z(snapshot);
  };
  function reportReadonlySnapshotWrite() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Cannot modify a state object in a read-only snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.y2f();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().m33(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.d2g_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.d2g_1 < validRecord.d2g_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var this_0 = state.y2f();
                var current_0 = this_0;
                var youngest = this_0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.d2g_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.d2g_1 < current_0.d2g_1)
                    youngest = current_0;
                  current_0 = current_0.e2g_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.d2g_1 = 0;
            recordToOverwrite.t2f(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.e2g_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.d2g_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.i1(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.z1v();
    var tmp0_safe_receiver = snapshot.h2g();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.s28(), snapshot.n2y());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.z1v();
      var tmp_0 = state.y2f();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.s28(), syncSnapshot.n2y());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_12.z1v();
    var tmp0_elvis_lhs = readable(r, snapshot.s28(), snapshot.n2y());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_12.z1v();
      tmp = readable(r, syncSnapshot.s28(), syncSnapshot.n2y());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.q2y(snapshot.w2f() + 1 | 0);
    var tmp1_safe_receiver = snapshot.t2y();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.r2y()) {
      snapshot.w2y(state);
    }
    var id = snapshot.s28();
    if (candidate.d2g_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.d2g_1 = id;
    snapshot.w2y(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.d2g_1 = IntCompanionObject_instance.MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.u2f();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.d2g_1 = IntCompanionObject_instance.MAX_VALUE;
      this_0.e2g_1 = state.y2f();
      state.l2g(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.y2f();
    var validRecord = null;
    var reuseLimit = get_pinningTable().m33(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_14().o30_1;
    while (!(current == null)) {
      var currentId = current.d2g_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.d2g_1 < validRecord.d2g_1 ? current : validRecord;
        }
      }
      current = current.e2g_1;
    }
    return null;
  }
  function current_0(r, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = readable(r, snapshot.s28(), snapshot.n2y());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    return newWritableRecordLocked(_this__u8e3s4, state, snapshot);
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.r2y()) {
      snapshot.w2y(state);
    }
    var id = snapshot.s28();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.n2y());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.d2g_1 === snapshot.s28())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.w2y(state);
    return newData;
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.t2f(_this__u8e3s4);
    newData.d2g_1 = snapshot.s28();
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().p30(result.s28()));
      return result;
    };
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_14().o30_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      // Inline function 'kotlin.collections.mutableListOf' call
      applyObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.mutableListOf' call
      globalWriteObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_14().o30_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().p30(this_0.s28()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().dq();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.h30_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.h30_1;
    var half = $this.g30_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.g30_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap($this, a, b) {
    var values = $this.h30_1;
    var index = $this.i30_1;
    var handles = $this.j30_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.h30_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.h30_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = $this.i30_1;
    var endIndex_0 = this_1.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.h30_1 = newValues;
    $this.i30_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.j30_1.length;
    if ($this.k30_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = $this.j30_1;
      var endIndex = this_0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.j30_1 = newHandles;
    }
    var handle = $this.k30_1;
    $this.k30_1 = $this.j30_1[$this.k30_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.j30_1[handle] = $this.k30_1;
    $this.k30_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.g30_1 = 0;
    this.h30_1 = new Int32Array(16);
    this.i30_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.j30_1 = tmp_1;
    this.k30_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).m33 = function (default_0) {
    return this.g30_1 > 0 ? this.h30_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).l30 = function (value) {
    ensure(this, this.g30_1 + 1 | 0);
    var tmp1 = this.g30_1;
    this.g30_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.h30_1[i] = value;
    this.i30_1[i] = handle;
    this.j30_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).m30 = function (handle) {
    var i = this.j30_1[handle];
    swap(this, i, this.g30_1 - 1 | 0);
    this.g30_1 = this.g30_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.o30_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.v33_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).e34 = function ($this$sequence, $completion) {
    var tmp = this.f34($this$sequence, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(SnapshotIdSet$iterator$slambda).fc = function (p1, $completion) {
    return this.e34(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 15;
            this.x33_1 = this.v33_1.d2z_1;
            if (!(this.x33_1 == null)) {
              this.y33_1 = intArrayIterator(this.x33_1);
              this.hb_1 = 1;
              continue $sm;
            } else {
              this.hb_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.y33_1.w()) {
              this.hb_1 = 3;
              continue $sm;
            }

            this.z33_1 = this.y33_1.y();
            this.hb_1 = 2;
            suspendResult = this.w33_1.fe(this.z33_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.hb_1 = 1;
            continue $sm;
          case 3:
            this.hb_1 = 4;
            continue $sm;
          case 4:
            if (!this.v33_1.b2z_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance();
              tmp_0.a34_1 = until(0, 64).v();
              this.hb_1 = 5;
              continue $sm;
            } else {
              this.hb_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.a34_1.w()) {
              this.hb_1 = 8;
              continue $sm;
            }

            this.b34_1 = this.a34_1.y();
            if (!this.v33_1.b2z_1.za((new Long(1, 0)).wa(this.b34_1)).equals(new Long(0, 0))) {
              this.hb_1 = 6;
              suspendResult = this.w33_1.fe(this.b34_1 + this.v33_1.c2z_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 7;
              continue $sm;
            }

          case 6:
            this.hb_1 = 7;
            continue $sm;
          case 7:
            this.hb_1 = 5;
            continue $sm;
          case 8:
            this.hb_1 = 9;
            continue $sm;
          case 9:
            if (!this.v33_1.a2z_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance();
              tmp_1.c34_1 = until(0, 64).v();
              this.hb_1 = 10;
              continue $sm;
            } else {
              this.hb_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.c34_1.w()) {
              this.hb_1 = 13;
              continue $sm;
            }

            this.d34_1 = this.c34_1.y();
            if (!this.v33_1.a2z_1.za((new Long(1, 0)).wa(this.d34_1)).equals(new Long(0, 0))) {
              this.hb_1 = 11;
              Companion_getInstance();
              suspendResult = this.w33_1.fe((this.d34_1 + 64 | 0) + this.v33_1.c2z_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 12;
              continue $sm;
            }

          case 11:
            this.hb_1 = 12;
            continue $sm;
          case 12:
            this.hb_1 = 10;
            continue $sm;
          case 13:
            this.hb_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 15) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).f34 = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.v33_1, completion);
    i.w33_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.e34($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_14();
    this.a2z_1 = upperSet;
    this.b2z_1 = lowerSet;
    this.c2z_1 = lowerBound;
    this.d2z_1 = belowBound;
  }
  protoOf(SnapshotIdSet).i1 = function (bit) {
    var offset = bit - this.c2z_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).wa(offset).za(this.b2z_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        return !tmp_1.wa(offset - 64 | 0).za(this.a2z_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.d2z_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp_2 = binarySearch(tmp0_safe_receiver, bit) >= 0;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).p30 = function (bit) {
    var offset = bit - this.c2z_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).wa(offset);
      if (this.b2z_1.za(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.a2z_1, this.b2z_1.ab(mask), this.c2z_1, this.d2z_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.wa(offset - 64 | 0);
        if (this.a2z_1.za(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.a2z_1.ab(mask_0), this.b2z_1, this.c2z_1, this.d2z_1);
        }
      } else {
        Companion_getInstance();
        if (offset >= imul(64, 2)) {
          if (!this.i1(bit)) {
            var newUpperSet = this.a2z_1;
            var newLowerSet = this.b2z_1;
            var newLowerBound = this.c2z_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  // Inline function 'kotlin.apply' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var this_0 = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.d2z_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var inductionVariable = 0;
                    var last = tmp0_safe_receiver.length;
                    while (inductionVariable < last) {
                      var element = tmp0_safe_receiver[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      this_0.s(element);
                    }
                  }
                  newBelowBound = this_0;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance();
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 64)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.za((new Long(1, 0)).wa(index)).equals(new Long(0, 0))) {
                      newBelowBound.s(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.d2z_1 : tmp1_elvis_lhs)).p30(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.d2z_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.intArrayOf' call
            var tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.a2z_1, this.b2z_1, this.c2z_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_9 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_9, newBelowBound_0, 0, 0, insertLocation);
            // Inline function 'kotlin.collections.copyInto' call
            var destinationOffset = insertLocation + 1 | 0;
            var endIndex = newSize - 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_10 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_10, newBelowBound_0, destinationOffset, insertLocation, endIndex);
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.a2z_1, this.b2z_1, this.c2z_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).e2z = function (bit) {
    var offset = bit - this.c2z_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).wa(offset);
      if (!this.b2z_1.za(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.a2z_1, this.b2z_1.za(mask.va()), this.c2z_1, this.d2z_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance();
      if (offset >= 64) {
        Companion_getInstance();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance();
        var mask_0 = tmp_1.wa(offset - 64 | 0);
        if (!this.a2z_1.za(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.a2z_1.za(mask_0.va()), this.b2z_1, this.c2z_1, this.d2z_1);
        }
      } else {
        if (offset < 0) {
          var array = this.d2z_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.a2z_1, this.b2z_1, this.c2z_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                // Inline function 'kotlin.collections.copyInto' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_2 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_2, newBelowBound, 0, 0, location);
              }
              if (location < newSize) {
                // Inline function 'kotlin.collections.copyInto' call
                var startIndex = location + 1 | 0;
                var endIndex = newSize + 1 | 0;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, newBelowBound, location, startIndex, endIndex);
              }
              return new SnapshotIdSet(this.a2z_1, this.b2z_1, this.c2z_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).q30 = function (bits) {
    if (bits === Companion_getInstance_14().o30_1)
      return this;
    if (this === Companion_getInstance_14().o30_1)
      return Companion_getInstance_14().o30_1;
    var tmp;
    if (bits.c2z_1 === this.c2z_1 ? bits.d2z_1 === this.d2z_1 : false) {
      tmp = new SnapshotIdSet(this.a2z_1.za(bits.a2z_1.va()), this.b2z_1.za(bits.b2z_1.va()), this.c2z_1, this.d2z_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.e2z(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).r30 = function (bits) {
    if (bits === Companion_getInstance_14().o30_1)
      return this;
    if (this === Companion_getInstance_14().o30_1)
      return bits;
    var tmp;
    if (bits.c2z_1 === this.c2z_1 ? bits.d2z_1 === this.d2z_1 : false) {
      tmp = new SnapshotIdSet(this.a2z_1.ab(bits.a2z_1), this.b2z_1.ab(bits.b2z_1), this.c2z_1, this.d2z_1);
    } else {
      var tmp_0;
      if (this.d2z_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.v();
        while (tmp0_iterator.w()) {
          var element = tmp0_iterator.y();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.p30(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.v();
        while (tmp0_iterator_0.w()) {
          var element_0 = tmp0_iterator_0.y();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.p30(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).v = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).v();
  };
  protoOf(SnapshotIdSet).f30 = function (default_0) {
    var belowBound = this.d2z_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.b2z_1.equals(new Long(0, 0)))
      return this.c2z_1 + lowestBitOf(this.b2z_1) | 0;
    if (!this.a2z_1.equals(new Long(0, 0))) {
      Companion_getInstance();
      return (this.c2z_1 + 64 | 0) + lowestBitOf(this.a2z_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.v();
    while (tmp0_iterator.w()) {
      var item = tmp0_iterator.y();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.s(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.za(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.xa(32);
    }
    if (b.za(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.xa(16);
    }
    if (b.za(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.xa(8);
    }
    if (b.za(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.xa(4);
    }
    if (!b.za(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.za(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.za(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.za(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function SnapshotMutableState() {
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.j34_1 = list;
    this.k34_1 = 0;
  }
  protoOf(StateListStateRecord).t2f = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$mgqpbl_8m20to();
    var tmp = this;
    tmp.j34_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).j34_1;
    this.k34_1 = value.k34_1;
  };
  protoOf(StateListStateRecord).u2f = function () {
    return new StateListStateRecord(this.j34_1);
  };
  function mutateBoolean($this, block) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = $this.l34_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k34_1;
      oldList = current_0.j34_1;
      var builder = ensureNotNull(oldList).u24();
      result = block(builder);
      var newList = builder.v24();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = $this.l34_1;
        var this_1 = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.z1v();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, $this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$mgqpbl_8m20to();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.k34_1 === currentModification) {
          $this$writable.j34_1 = newList;
          $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, $this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  }
  function SnapshotStateList$addAll$lambda($index, $elements) {
    return function (it) {
      return it.a2($index, $elements);
    };
  }
  function SnapshotStateList$retainAll$lambda($elements) {
    return function (it) {
      return it.b1($elements);
    };
  }
  function SnapshotStateList() {
    this.l34_1 = new StateListStateRecord(persistentListOf());
    this.m34_1 = 0;
  }
  protoOf(SnapshotStateList).y2f = function () {
    return this.l34_1;
  };
  protoOf(SnapshotStateList).l2g = function (value) {
    value.e2g_1 = this.l34_1;
    var tmp = this;
    tmp.l34_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).n34 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.l34_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    return current(this_0).k34_1;
  };
  protoOf(SnapshotStateList).o34 = function () {
    var tmp = this.l34_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).n = function () {
    return this.o34().j34_1.n();
  };
  protoOf(SnapshotStateList).nd = function (element) {
    return this.o34().j34_1.r(element);
  };
  protoOf(SnapshotStateList).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.nd((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).od = function (elements) {
    return this.o34().j34_1.d1(elements);
  };
  protoOf(SnapshotStateList).d1 = function (elements) {
    return this.od(elements);
  };
  protoOf(SnapshotStateList).i1 = function (index) {
    return this.o34().j34_1.i1(index);
  };
  protoOf(SnapshotStateList).y2q = function (element) {
    return this.o34().j34_1.b2(element);
  };
  protoOf(SnapshotStateList).b2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.y2q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).e1 = function () {
    return this.o34().j34_1.e1();
  };
  protoOf(SnapshotStateList).v = function () {
    return this.ga();
  };
  protoOf(SnapshotStateList).z2q = function (element) {
    return this.o34().j34_1.c2(element);
  };
  protoOf(SnapshotStateList).c2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.z2q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).ga = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).d2 = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).e2 = function (fromIndex, toIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= fromIndex ? fromIndex <= toIndex : false) ? toIndex <= this.n() : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SubList_1(this, fromIndex, toIndex);
  };
  protoOf(SnapshotStateList).c29 = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.l34_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k34_1;
      oldList = current_0.j34_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).s(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.l34_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k34_1 === currentModification) {
        $this$writable.j34_1 = newList;
        $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).s = function (element) {
    return this.c29((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).a2r = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.l34_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k34_1;
      oldList = current_0.j34_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).c2s(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.l34_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k34_1 === currentModification) {
        $this$writable.j34_1 = newList;
        $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).y1 = function (index, element) {
    return this.a2r(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).b2r = function (index, elements) {
    return mutateBoolean(this, SnapshotStateList$addAll$lambda(index, elements));
  };
  protoOf(SnapshotStateList).a2 = function (index, elements) {
    return this.b2r(index, elements);
  };
  protoOf(SnapshotStateList).c2r = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.l34_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k34_1;
      oldList = current_0.j34_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).z(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.l34_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k34_1 === currentModification) {
        $this$writable.j34_1 = newList;
        $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).z = function (elements) {
    return this.c2r(elements);
  };
  protoOf(SnapshotStateList).c1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.l34_1;
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_12.z1v();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$mgqpbl_8m20to();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.j34_1 = persistentListOf();
    $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).d2r = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.l34_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k34_1;
      oldList = current_0.j34_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).t(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.l34_1;
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k34_1 === currentModification) {
        $this$writable.j34_1 = newList;
        $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_2 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).t = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.d2r((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).k1 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.i1(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.l34_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.k34_1;
      oldList = current_0.j34_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).k1(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.l34_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k34_1 === currentModification) {
        $this$writable.j34_1 = newList;
        $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).e2r = function (elements) {
    return mutateBoolean(this, SnapshotStateList$retainAll$lambda(elements));
  };
  protoOf(SnapshotStateList).b1 = function (elements) {
    return this.e2r(elements);
  };
  protoOf(SnapshotStateList).f2r = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.i1(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.l34_1;
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.k34_1;
      oldList = current_0.j34_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).o(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.l34_1;
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.k34_1 === currentModification) {
        $this$writable.j34_1 = newList;
        $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      var this_3 = tmp_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).o = function (index, element) {
    return this.f2r(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).f2 = function (fromIndex, toIndex) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.l34_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k34_1;
      oldList = current_0.j34_1;
      var builder = ensureNotNull(oldList).u24();
      builder.e2(fromIndex, toIndex).c1();
      result = Unit_instance;
      var newList = builder.v24();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.l34_1;
        var this_1 = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.z1v();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$mgqpbl_8m20to();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.k34_1 === currentModification) {
          $this$writable.j34_1 = newList;
          $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
  };
  protoOf(SnapshotStateList).p34 = function (elements, start, end) {
    var startSize = this.n();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$mgqpbl_8m20to();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.l34_1;
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.k34_1;
      oldList = current_0.j34_1;
      var builder = ensureNotNull(oldList).u24();
      builder.e2(start, end).b1(elements);
      result = Unit_instance;
      var newList = builder.v24();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.l34_1;
        var this_1 = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.z1v();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$mgqpbl_8m20to();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.k34_1 === currentModification) {
          $this$writable.j34_1 = newList;
          $this$writable.k34_1 = $this$writable.k34_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return startSize - this.n() | 0;
  };
  function validateModification($this) {
    if (!($this.q34_1.n34() === $this.s34_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.q34_1 = list;
    this.r34_1 = offset - 1 | 0;
    this.s34_1 = this.q34_1.n34();
  }
  protoOf(StateListIterator).q1 = function () {
    return this.r34_1 >= 0;
  };
  protoOf(StateListIterator).r1 = function () {
    return this.r34_1 + 1 | 0;
  };
  protoOf(StateListIterator).s1 = function () {
    validateModification(this);
    validateRange(this.r34_1, this.q34_1.n());
    // Inline function 'kotlin.also' call
    var this_0 = this.q34_1.i1(this.r34_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.r34_1 = this.r34_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).t1 = function () {
    return this.r34_1;
  };
  protoOf(StateListIterator).w = function () {
    return this.r34_1 < (this.q34_1.n() - 1 | 0);
  };
  protoOf(StateListIterator).y = function () {
    validateModification(this);
    var newIndex = this.r34_1 + 1 | 0;
    validateRange(newIndex, this.q34_1.n());
    // Inline function 'kotlin.also' call
    var this_0 = this.q34_1.i1(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.r34_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).x = function () {
    validateModification(this);
    this.q34_1.k1(this.r34_1);
    this.r34_1 = this.r34_1 - 1 | 0;
    this.s34_1 = this.q34_1.n34();
  };
  function validateModification_0($this) {
    if (!($this.t34_1.n34() === $this.v34_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SubList$listIterator$1($current, this$0) {
    this.x34_1 = $current;
    this.y34_1 = this$0;
  }
  protoOf(SubList$listIterator$1).q1 = function () {
    return this.x34_1._v >= 0;
  };
  protoOf(SubList$listIterator$1).r1 = function () {
    return this.x34_1._v + 1 | 0;
  };
  protoOf(SubList$listIterator$1).s1 = function () {
    var oldCurrent = this.x34_1._v;
    validateRange(oldCurrent, this.y34_1.w34_1);
    this.x34_1._v = oldCurrent - 1 | 0;
    return this.y34_1.i1(oldCurrent);
  };
  protoOf(SubList$listIterator$1).t1 = function () {
    return this.x34_1._v;
  };
  protoOf(SubList$listIterator$1).w = function () {
    return this.x34_1._v < (this.y34_1.w34_1 - 1 | 0);
  };
  protoOf(SubList$listIterator$1).y = function () {
    var newCurrent = this.x34_1._v + 1 | 0;
    validateRange(newCurrent, this.y34_1.w34_1);
    this.x34_1._v = newCurrent;
    return this.y34_1.i1(newCurrent);
  };
  protoOf(SubList$listIterator$1).zk = function () {
    modificationError();
  };
  protoOf(SubList$listIterator$1).x = function () {
    return this.zk();
  };
  function SubList_1(parentList, fromIndex, toIndex) {
    this.t34_1 = parentList;
    this.u34_1 = fromIndex;
    this.v34_1 = this.t34_1.n34();
    this.w34_1 = toIndex - fromIndex | 0;
  }
  protoOf(SubList_1).n = function () {
    return this.w34_1;
  };
  protoOf(SubList_1).nd = function (element) {
    return this.y2q(element) >= 0;
  };
  protoOf(SubList_1).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.nd((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).od = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.e1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.snapshots.SubList.containsAll.<anonymous>' call
        if (!this.nd(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SubList_1).d1 = function (elements) {
    return this.od(elements);
  };
  protoOf(SubList_1).i1 = function (index) {
    validateModification_0(this);
    validateRange(index, this.w34_1);
    return this.t34_1.i1(this.u34_1 + index | 0);
  };
  protoOf(SubList_1).y2q = function (element) {
    validateModification_0(this);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = until(this.u34_1, this.u34_1 + this.w34_1 | 0).v();
    while (tmp0_iterator.w()) {
      var element_0 = tmp0_iterator.y();
      // Inline function 'androidx.compose.runtime.snapshots.SubList.indexOf.<anonymous>' call
      if (equals(element, this.t34_1.i1(element_0)))
        return element_0 - this.u34_1 | 0;
    }
    return -1;
  };
  protoOf(SubList_1).b2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.y2q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).e1 = function () {
    return this.w34_1 === 0;
  };
  protoOf(SubList_1).v = function () {
    return this.ga();
  };
  protoOf(SubList_1).z2q = function (element) {
    validateModification_0(this);
    var index = (this.u34_1 + this.w34_1 | 0) - 1 | 0;
    while (index >= this.u34_1) {
      if (equals(element, this.t34_1.i1(index)))
        return index - this.u34_1 | 0;
      index = index - 1 | 0;
    }
    return -1;
  };
  protoOf(SubList_1).c2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.z2q((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).c29 = function (element) {
    validateModification_0(this);
    this.t34_1.a2r(this.u34_1 + this.w34_1 | 0, element);
    this.w34_1 = this.w34_1 + 1 | 0;
    this.v34_1 = this.t34_1.n34();
    return true;
  };
  protoOf(SubList_1).s = function (element) {
    return this.c29((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).a2r = function (index, element) {
    validateModification_0(this);
    this.t34_1.a2r(this.u34_1 + index | 0, element);
    this.w34_1 = this.w34_1 + 1 | 0;
    this.v34_1 = this.t34_1.n34();
  };
  protoOf(SubList_1).y1 = function (index, element) {
    return this.a2r(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).b2r = function (index, elements) {
    validateModification_0(this);
    var result = this.t34_1.b2r(index + this.u34_1 | 0, elements);
    if (result) {
      this.w34_1 = this.w34_1 + elements.n() | 0;
      this.v34_1 = this.t34_1.n34();
    }
    return result;
  };
  protoOf(SubList_1).a2 = function (index, elements) {
    return this.b2r(index, elements);
  };
  protoOf(SubList_1).c2r = function (elements) {
    return this.b2r(this.w34_1, elements);
  };
  protoOf(SubList_1).z = function (elements) {
    return this.c2r(elements);
  };
  protoOf(SubList_1).c1 = function () {
    if (this.w34_1 > 0) {
      validateModification_0(this);
      this.t34_1.f2(this.u34_1, this.u34_1 + this.w34_1 | 0);
      this.w34_1 = 0;
      this.v34_1 = this.t34_1.n34();
    }
  };
  protoOf(SubList_1).ga = function () {
    return this.d2(0);
  };
  protoOf(SubList_1).d2 = function (index) {
    validateModification_0(this);
    var current = {_v: index - 1 | 0};
    return new SubList$listIterator$1(current, this);
  };
  protoOf(SubList_1).d2r = function (element) {
    var index = this.y2q(element);
    var tmp;
    if (index >= 0) {
      this.k1(index);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SubList_1).t = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.d2r((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).k1 = function (index) {
    validateModification_0(this);
    // Inline function 'kotlin.also' call
    var this_0 = this.t34_1.k1(this.u34_1 + index | 0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SubList.removeAt.<anonymous>' call
    this.w34_1 = this.w34_1 - 1 | 0;
    this.v34_1 = this.t34_1.n34();
    return this_0;
  };
  protoOf(SubList_1).e2r = function (elements) {
    validateModification_0(this);
    var removed = this.t34_1.p34(elements, this.u34_1, this.u34_1 + this.w34_1 | 0);
    if (removed > 0) {
      this.v34_1 = this.t34_1.n34();
      this.w34_1 = this.w34_1 - removed | 0;
    }
    return removed > 0;
  };
  protoOf(SubList_1).b1 = function (elements) {
    return this.e2r(elements);
  };
  protoOf(SubList_1).f2r = function (index, element) {
    validateRange(index, this.w34_1);
    validateModification_0(this);
    var result = this.t34_1.f2r(index + this.u34_1 | 0, element);
    this.v34_1 = this.t34_1.n34();
    return result;
  };
  protoOf(SubList_1).o = function (index, element) {
    return this.f2r(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SubList_1).e2 = function (fromIndex, toIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= fromIndex ? fromIndex <= toIndex : false) ? toIndex <= this.w34_1 : false)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    validateModification_0(this);
    return new SubList_1(this.t34_1, fromIndex + this.u34_1 | 0, toIndex + this.u34_1 | 0);
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function modificationError() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    var message = 'Cannot modify a state list through an iterator';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function _get_sync_$accessor$mgqpbl_8m20to() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = createSynchronizedObject();
    }
  }
  function get_sync_0() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return sync_0;
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  function StateMapStateRecord(map) {
    StateRecord.call(this);
    this.c35_1 = map;
    this.d35_1 = 0;
  }
  protoOf(StateMapStateRecord).t2f = function (value) {
    var other = value instanceof StateMapStateRecord ? value : THROW_CCE();
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    _get_sync_$accessor$1hruseb_q3n4dp();
    this.c35_1 = other.c35_1;
    this.d35_1 = other.d35_1;
  };
  protoOf(StateMapStateRecord).u2f = function () {
    return new StateMapStateRecord(this.c35_1);
  };
  function SnapshotStateMap() {
    this.e35_1 = new StateMapStateRecord(persistentHashMapOf());
    this.f35_1 = new SnapshotMapEntrySet(this);
    this.g35_1 = new SnapshotMapKeySet(this);
    this.h35_1 = new SnapshotMapValueSet(this);
    this.i35_1 = 0;
  }
  protoOf(SnapshotStateMap).y2f = function () {
    return this.e35_1;
  };
  protoOf(SnapshotStateMap).l2g = function (value) {
    var tmp = this;
    tmp.e35_1 = value instanceof StateMapStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateMap).n = function () {
    return this.o34().c35_1.n();
  };
  protoOf(SnapshotStateMap).y2 = function (key) {
    return this.o34().c35_1.y2(key);
  };
  protoOf(SnapshotStateMap).z2 = function (value) {
    return this.o34().c35_1.z2(value);
  };
  protoOf(SnapshotStateMap).b3 = function (key) {
    return this.o34().c35_1.b3(key);
  };
  protoOf(SnapshotStateMap).e1 = function () {
    return this.o34().c35_1.e1();
  };
  protoOf(SnapshotStateMap).q2 = function () {
    return this.f35_1;
  };
  protoOf(SnapshotStateMap).o2 = function () {
    return this.g35_1;
  };
  protoOf(SnapshotStateMap).p2 = function () {
    return this.h35_1;
  };
  protoOf(SnapshotStateMap).c1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.e35_1;
    var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
    var $this$withCurrent = current(this_0);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.clear.<anonymous>' call
    $this$withCurrent.c35_1;
    var newMap = persistentHashMapOf();
    var tmp_0;
    if (!(newMap === $this$withCurrent.c35_1)) {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_1 = this.e35_1;
      var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.z1v();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>.<anonymous>' call
      $this$writable.c35_1 = newMap;
      $this$writable.d35_1 = $this$writable.d35_1 + 1 | 0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp_0 = Unit_instance;
    }
    return tmp_0;
  };
  protoOf(SnapshotStateMap).r2 = function (key, value) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.e35_1;
      var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      oldMap = current_0.c35_1;
      currentModification = current_0.d35_1;
      var builder = ensureNotNull(oldMap).u24();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.put.<anonymous>' call
      result = builder.r2(key, value);
      var newMap = builder.v24();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.e35_1;
        var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.z1v();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.d35_1 === currentModification) {
          $this$writable.c35_1 = newMap;
          $this$writable.d35_1 = $this$writable.d35_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).s2 = function (from) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.e35_1;
      var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      oldMap = current_0.c35_1;
      currentModification = current_0.d35_1;
      var builder = ensureNotNull(oldMap).u24();
      builder.s2(from);
      result = Unit_instance;
      var newMap = builder.v24();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.e35_1;
        var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.z1v();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.d35_1 === currentModification) {
          $this$writable.c35_1 = newMap;
          $this$writable.d35_1 = $this$writable.d35_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).v2 = function (key) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.e35_1;
      var this_0 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      oldMap = current_0.c35_1;
      currentModification = current_0.d35_1;
      var builder = ensureNotNull(oldMap).u24();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.remove.<anonymous>' call
      result = builder.v2(key);
      var newMap = builder.v24();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.e35_1;
        var this_1 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.z1v();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.d35_1 === currentModification) {
          $this$writable.c35_1 = newMap;
          $this$writable.d35_1 = $this$writable.d35_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_2 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).n34 = function () {
    return this.o34().d35_1;
  };
  protoOf(SnapshotStateMap).y3 = function (value) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.f35_1.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
        if (equals(element.u2(), value)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
      this.v2(tmp0_safe_receiver.t2());
      tmp = true;
    }
    return tmp === true;
  };
  protoOf(SnapshotStateMap).o34 = function () {
    var tmp = this.e35_1;
    return readable_0(tmp instanceof StateMapStateRecord ? tmp : THROW_CCE(), this);
  };
  function SnapshotMapEntrySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapEntrySet).f2w = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).s = function (element) {
    return this.f2w((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).k35 = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).z = function (elements) {
    return this.k35(elements);
  };
  protoOf(SnapshotMapEntrySet).v = function () {
    return new StateMapMutableEntriesIterator(this.l35_1, this.l35_1.o34().c35_1.q2().v());
  };
  protoOf(SnapshotMapEntrySet).m35 = function (element) {
    return !(this.l35_1.v2(element.t2()) == null);
  };
  protoOf(SnapshotMapEntrySet).t = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.m35((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).n35 = function (elements) {
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(elements, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var tmp0_iterator = elements.v();
    while (tmp0_iterator.w()) {
      var element = tmp0_iterator.y();
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapEntrySet.retainAll.<anonymous>' call
      var pair = to(element.t2(), element.u2());
      destination.r2(pair.vd_1, pair.wd_1);
    }
    var entries = destination;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeIf' call
    var this_0 = this.l35_1;
    var removed = false;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this_0.e35_1;
      var this_1 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      oldMap = current_0.c35_1;
      currentModification = current_0.d35_1;
      var builder = ensureNotNull(oldMap).u24();
      var tmp0_iterator_0 = this_0.f35_1.v();
      while (tmp0_iterator_0.w()) {
        var entry = tmp0_iterator_0.y();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapEntrySet.retainAll.<anonymous>' call
        if (!entries.y2(entry.t2()) ? true : !equals(entries.b3(entry.t2()), entry.u2())) {
          builder.v2(entry.t2());
          removed = true;
        }
      }
      result = Unit_instance;
      var newMap = builder.v24();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this_0.e35_1;
        var this_2 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.z1v();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_2, this_0, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.d35_1 === currentModification) {
          $this$writable.c35_1 = newMap;
          $this$writable.d35_1 = $this$writable.d35_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_3 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this_0);
        tmp_0 = this_3;
      }
      if (tmp_0)
        break $l$loop;
    }
    return removed;
  };
  protoOf(SnapshotMapEntrySet).b1 = function (elements) {
    return this.n35(elements);
  };
  protoOf(SnapshotMapEntrySet).o35 = function (element) {
    return equals(this.l35_1.b3(element.t2()), element.u2());
  };
  protoOf(SnapshotMapEntrySet).r = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.o35((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).p35 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.e1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapEntrySet.containsAll.<anonymous>' call
        if (!this.o35(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapEntrySet).d1 = function (elements) {
    return this.p35(elements);
  };
  function SnapshotMapKeySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapKeySet).k4 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).s = function (element) {
    return this.k4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).r35 = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).z = function (elements) {
    return this.r35(elements);
  };
  protoOf(SnapshotMapKeySet).v = function () {
    return new StateMapMutableKeysIterator(this.l35_1, this.l35_1.o34().c35_1.q2().v());
  };
  protoOf(SnapshotMapKeySet).v2 = function (element) {
    return !(this.l35_1.v2(element) == null);
  };
  protoOf(SnapshotMapKeySet).t = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.v2((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).s35 = function (elements) {
    var set = toSet(elements);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeIf' call
    var this_0 = this.l35_1;
    var removed = false;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this_0.e35_1;
      var this_1 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      oldMap = current_0.c35_1;
      currentModification = current_0.d35_1;
      var builder = ensureNotNull(oldMap).u24();
      var tmp0_iterator = this_0.f35_1.v();
      while (tmp0_iterator.w()) {
        var entry = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapKeySet.retainAll.<anonymous>' call
        if (!set.r(entry.t2())) {
          builder.v2(entry.t2());
          removed = true;
        }
      }
      result = Unit_instance;
      var newMap = builder.v24();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this_0.e35_1;
        var this_2 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.z1v();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_2, this_0, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.d35_1 === currentModification) {
          $this$writable.c35_1 = newMap;
          $this$writable.d35_1 = $this$writable.d35_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_3 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this_0);
        tmp_0 = this_3;
      }
      if (tmp_0)
        break $l$loop;
    }
    return removed;
  };
  protoOf(SnapshotMapKeySet).b1 = function (elements) {
    return this.s35(elements);
  };
  protoOf(SnapshotMapKeySet).p3 = function (element) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.l35_1;
    return (isInterface(this_0, Map) ? this_0 : THROW_CCE()).y2(element);
  };
  protoOf(SnapshotMapKeySet).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.p3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).t35 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.e1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapKeySet.containsAll.<anonymous>' call
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.l35_1;
        if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).y2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapKeySet).d1 = function (elements) {
    return this.t35(elements);
  };
  function SnapshotMapValueSet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapValueSet).u3 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).s = function (element) {
    return this.u3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).v3 = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).z = function (elements) {
    return this.v3(elements);
  };
  protoOf(SnapshotMapValueSet).v = function () {
    return new StateMapMutableValuesIterator(this.l35_1, this.l35_1.o34().c35_1.q2().v());
  };
  protoOf(SnapshotMapValueSet).x3 = function (element) {
    return this.l35_1.y3(element);
  };
  protoOf(SnapshotMapValueSet).t = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.x3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).v35 = function (elements) {
    var set = toSet(elements);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeIf' call
    var this_0 = this.l35_1;
    var removed = false;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this_0.e35_1;
      var this_1 = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      oldMap = current_0.c35_1;
      currentModification = current_0.d35_1;
      var builder = ensureNotNull(oldMap).u24();
      var tmp0_iterator = this_0.f35_1.v();
      while (tmp0_iterator.w()) {
        var entry = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapValueSet.retainAll.<anonymous>' call
        if (!set.r(entry.u2())) {
          builder.v2(entry.t2());
          removed = true;
        }
      }
      result = Unit_instance;
      var newMap = builder.v24();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this_0.e35_1;
        var this_2 = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.z1v();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_2, this_0, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.d35_1 === currentModification) {
          $this$writable.c35_1 = newMap;
          $this$writable.d35_1 = $this$writable.d35_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var this_3 = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this_0);
        tmp_0 = this_3;
      }
      if (tmp_0)
        break $l$loop;
    }
    return removed;
  };
  protoOf(SnapshotMapValueSet).b1 = function (elements) {
    return this.v35(elements);
  };
  protoOf(SnapshotMapValueSet).t3 = function (element) {
    return this.l35_1.z2(element);
  };
  protoOf(SnapshotMapValueSet).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.t3((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).w35 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.e1();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapValueSet.containsAll.<anonymous>' call
        if (!this.l35_1.z2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapValueSet).d1 = function (elements) {
    return this.w35(elements);
  };
  function SnapshotMapSet(map) {
    this.l35_1 = map;
  }
  protoOf(SnapshotMapSet).n = function () {
    return this.l35_1.n();
  };
  protoOf(SnapshotMapSet).c1 = function () {
    return this.l35_1.c1();
  };
  protoOf(SnapshotMapSet).e1 = function () {
    return this.l35_1.e1();
  };
  function StateMapMutableEntriesIterator$next$1(this$0) {
    this.z35_1 = this$0;
    this.x35_1 = ensureNotNull(this$0.d36_1).t2();
    this.y35_1 = ensureNotNull(this$0.d36_1).u2();
  }
  protoOf(StateMapMutableEntriesIterator$next$1).t2 = function () {
    return this.x35_1;
  };
  protoOf(StateMapMutableEntriesIterator$next$1).u2 = function () {
    return this.y35_1;
  };
  function StateMapMutableEntriesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableEntriesIterator).y = function () {
    this.z2z();
    if (!(this.d36_1 == null)) {
      return new StateMapMutableEntriesIterator$next$1(this);
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
  };
  function StateMapMutableKeysIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableKeysIterator).y = function () {
    var tmp0_elvis_lhs = this.e36_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.z2z();
    return result.t2();
  };
  function StateMapMutableValuesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableValuesIterator).y = function () {
    var tmp0_elvis_lhs = this.e36_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.z2z();
    return result.u2();
  };
  function StateMapMutableIterator(map, iterator) {
    this.a36_1 = map;
    this.b36_1 = iterator;
    this.c36_1 = this.a36_1.n34();
    this.d36_1 = null;
    this.e36_1 = null;
    this.z2z();
  }
  protoOf(StateMapMutableIterator).x = function () {
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.a36_1.n34() === this.c36_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.remove.<anonymous>' call
    var value = this.d36_1;
    if (!(value == null)) {
      this.a36_1.v2(value.t2());
      this.d36_1 = null;
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify.<anonymous>' call
    this.c36_1 = this.a36_1.n34();
    return Unit_instance;
  };
  protoOf(StateMapMutableIterator).w = function () {
    return !(this.e36_1 == null);
  };
  protoOf(StateMapMutableIterator).z2z = function () {
    this.d36_1 = this.e36_1;
    this.e36_1 = this.b36_1.w() ? this.b36_1.y() : null;
  };
  function _get_sync_$accessor$1hruseb_q3n4dp() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return get_sync_0();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = createSynchronizedObject();
    }
  }
  function recordRead($this, value, currentToken, currentScope, recordedValues) {
    if ($this.d37_1 > 0) {
      return Unit_instance;
    }
    var previousToken = recordedValues.q2h(value, currentToken);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !(previousToken === currentToken);
    } else {
      tmp = false;
    }
    if (tmp) {
      var record = value.s2d();
      // Inline function 'kotlin.collections.set' call
      var this_0 = $this.f37_1;
      var value_0 = record.g2g();
      this_0.r2(value, value_0);
      var dependencies = record.t2d();
      var dependencyToDerivedStates = $this.e37_1;
      dependencyToDerivedStates.r2d(value);
      var inductionVariable = 0;
      var last = dependencies.length;
      $l$loop: while (inductionVariable < last) {
        var dependency = dependencies[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (dependency == null)
          break $l$loop;
        dependencyToDerivedStates.t2c(dependency, value);
      }
    }
    if (previousToken === -1) {
      $this.y36_1.t2c(value, currentScope);
    }
  }
  function clearObsoleteStateReads($this, scope) {
    var currentToken = $this.x36_1;
    var tmp0_safe_receiver = $this.w36_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
      var keys = tmp0_safe_receiver.n2h_1;
      var values = tmp0_safe_receiver.o2h_1;
      var size = tmp0_safe_receiver.m2h_1;
      var destinationIndex = 0;
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = keys[i];
          var key = !(tmp == null) ? tmp : THROW_CCE();
          var value = values[i];
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>' call
          // Inline function 'kotlin.also' call
          var this_0 = !(value === currentToken);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>.<anonymous>' call
          if (this_0) {
            removeObservation($this, scope, key);
          }
          if (!this_0) {
            if (!(destinationIndex === i)) {
              keys[destinationIndex] = key;
              values[destinationIndex] = value;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable < size);
      var inductionVariable_0 = destinationIndex;
      if (inductionVariable_0 < size)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          keys[i_0] = null;
        }
         while (inductionVariable_0 < size);
      tmp0_safe_receiver.m2h_1 = destinationIndex;
    }
  }
  function removeObservation($this, scope, value) {
    $this.y36_1.r2c(value, scope);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !$this.y36_1.s2c(value);
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.e37_1.r2d(value);
      $this.f37_1.v2(value);
    }
  }
  function SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1(this$0) {
    this.g37_1 = this$0;
  }
  protoOf(SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1).o29 = function (derivedState) {
    var tmp0_this = this.g37_1;
    tmp0_this.d37_1 = tmp0_this.d37_1 + 1 | 0;
  };
  protoOf(SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1).p29 = function (derivedState) {
    var tmp0_this = this.g37_1;
    tmp0_this.d37_1 = tmp0_this.d37_1 - 1 | 0;
  };
  function drainChanges($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.n37_1;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
    if ($this.j37_1)
      return false;
    var hasValues = false;
    while (true) {
      var tmp0_elvis_lhs = removeChanges($this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return hasValues;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var notifications = tmp;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      $this.n37_1;
      var this_0 = $this.m37_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = this_0.a29_1;
      var tmp_0;
      if (size > 0) {
        var i = 0;
        var tmp_1 = this_0.y28_1;
        var content = isArray(tmp_1) ? tmp_1 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
          hasValues = content[i].s37(notifications) ? true : hasValues;
          i = i + 1 | 0;
        }
         while (i < size);
        tmp_0 = Unit_instance;
      }
    }
  }
  function sendNotifications($this) {
    $this.h37_1(SnapshotStateObserver$sendNotifications$lambda($this));
  }
  function addChanges($this, set) {
    $l$loop: while (true) {
      var old = $this.i37_1.dq();
      var tmp;
      if (old == null) {
        tmp = set;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          tmp = listOf_0([old, set]);
        } else {
          if (!(old == null) ? isInterface(old, List) : false) {
            tmp = plus_2(old, listOf(set));
          } else {
            report($this);
          }
        }
      }
      var new_0 = tmp;
      if ($this.i37_1.o2d(old, new_0))
        break $l$loop;
    }
  }
  function removeChanges($this) {
    while (true) {
      var old = $this.i37_1.dq();
      var result;
      var new_0;
      if (old == null)
        return null;
      else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          result = (old == null ? true : isInterface(old, Set)) ? old : THROW_CCE();
          new_0 = null;
        } else {
          if (!(old == null) ? isInterface(old, List) : false) {
            var tmp = old.i1(0);
            result = (tmp == null ? true : isInterface(tmp, Set)) ? tmp : THROW_CCE();
            new_0 = old.n() === 2 ? old.i1(1) : old.n() > 2 ? old.e2(1, old.n()) : null;
          } else {
            report($this);
          }
        }
      }
      if ($this.i37_1.o2d(old, new_0)) {
        return result;
      }
    }
  }
  function report($this) {
    composeRuntimeError('Unexpected notification');
  }
  function ensureMap($this, onChanged) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.firstOrNull' call
      var this_0 = $this.m37_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = this_0.a29_1;
      if (size > 0) {
        var i = 0;
        var tmp = this_0.y28_1;
        var content = isArray(tmp) ? tmp : THROW_CCE();
        do {
          var item = content[i];
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.ensureMap.<anonymous>' call
          if (item.u36_1 === onChanged) {
            tmp$ret$1 = item;
            break $l$block;
          }
          i = i + 1 | 0;
        }
         while (i < size);
      }
      tmp$ret$1 = null;
    }
    var scopeMap = tmp$ret$1;
    if (scopeMap == null) {
      var map = new ObservedScopeMap(typeof onChanged === 'function' ? onChanged : THROW_CCE());
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      $this.m37_1.c29(map);
      return map;
    }
    return scopeMap;
  }
  function ObservedScopeMap(onChanged) {
    this.u36_1 = onChanged;
    this.v36_1 = null;
    this.w36_1 = null;
    this.x36_1 = -1;
    this.y36_1 = new IdentityScopeMap();
    this.z36_1 = new IdentityArrayMap();
    this.a37_1 = new IdentityArraySet();
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.b37_1 = new MutableVector(tmp$ret$0, 0);
    var tmp_0 = this;
    tmp_0.c37_1 = new SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1(this);
    this.d37_1 = 0;
    this.e37_1 = new IdentityScopeMap();
    this.f37_1 = HashMap_init_$Create$();
  }
  protoOf(ObservedScopeMap).t37 = function (value) {
    var scope = ensureNotNull(this.v36_1);
    var tmp = this.x36_1;
    var tmp0_elvis_lhs = this.w36_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordRead.<anonymous>' call
      this.w36_1 = this_0;
      this.z36_1.h2d(scope, this_0);
      tmp_0 = this_0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    recordRead(this, value, tmp, scope, tmp_0);
  };
  protoOf(ObservedScopeMap).u37 = function (scope, readObserver, block) {
    var previousScope = this.v36_1;
    var previousReads = this.w36_1;
    var previousToken = this.x36_1;
    this.v36_1 = scope;
    this.w36_1 = this.z36_1.j2e(scope);
    if (this.x36_1 === -1) {
      this.x36_1 = currentSnapshot().s28();
    }
    // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
    var observer = this.c37_1;
    var observers = derivedStateObservers_0();
    try {
      observers.c29(observer);
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.observe.<anonymous>' call
      Companion_instance_12.i2g(readObserver, null, block);
    }finally {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      var tmp$ret$0 = observers.a29_1 - 1 | 0;
      observers.k1(tmp$ret$0);
    }
    clearObsoleteStateReads(this, ensureNotNull(this.v36_1));
    this.v36_1 = previousScope;
    this.w36_1 = previousReads;
    this.x36_1 = previousToken;
  };
  protoOf(ObservedScopeMap).v37 = function (scope) {
    var tmp0_elvis_lhs = this.z36_1.p2h(scope);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var recordedValues = tmp;
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
    var keys = recordedValues.n2h_1;
    var values = recordedValues.o2h_1;
    var size = recordedValues.m2h_1;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearScopeObservations.<anonymous>' call
        var tmp_0 = keys[i];
        var value = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
        values[i];
        removeObservation(this, scope, value);
      }
       while (inductionVariable < size);
  };
  protoOf(ObservedScopeMap).w37 = function (predicate) {
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.removeIf' call
    var this_0 = this.z36_1;
    var current = 0;
    var inductionVariable = 0;
    var last = this_0.v28_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this_0.t28_1[index];
        var key = !(tmp == null) ? tmp : THROW_CCE();
        var tmp_0 = this_0.u28_1[index];
        var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_1 = predicate(key);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>' call
        if (this_1) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
          var keys = value.n2h_1;
          var values = value.o2h_1;
          var size = value.m2h_1;
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < size)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_1 = keys[i];
              var value_0 = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
              values[i];
              removeObservation(this, key, value_0);
            }
             while (inductionVariable_0 < size);
        }
        if (!this_1) {
          if (!(current === index)) {
            this_0.t28_1[current] = key;
            this_0.u28_1[current] = this_0.u28_1[index];
          }
          current = current + 1 | 0;
        }
      }
       while (inductionVariable < last);
    if (this_0.v28_1 > current) {
      var inductionVariable_1 = current;
      var last_0 = this_0.v28_1;
      if (inductionVariable_1 < last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          this_0.t28_1[index_0] = null;
          this_0.u28_1[index_0] = null;
        }
         while (inductionVariable_1 < last_0);
      this_0.v28_1 = current;
    }
  };
  protoOf(ObservedScopeMap).c1 = function () {
    this.y36_1.c1();
    this.z36_1.c1();
    this.e37_1.c1();
    this.f37_1.c1();
  };
  protoOf(ObservedScopeMap).s37 = function (changes) {
    var hasValues = false;
    var dependencyToDerivedStates = this.e37_1;
    var recordedDerivedStateValues = this.f37_1;
    var valueToScopes = this.y36_1;
    var invalidated = this.a37_1;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (changes instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = changes.n27_1;
      var inductionVariable = 0;
      var last = changes.m27_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
          var tmp = values[i];
          var value = !(tmp == null) ? tmp : THROW_CCE();
          if (dependencyToDerivedStates.s2c(value)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var index = find_2(dependencyToDerivedStates, value);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var this_0 = scopeSetAt(dependencyToDerivedStates, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_0 = this_0.n27_1;
              var inductionVariable_0 = 0;
              var last_0 = this_0.m27_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                  var tmp_0 = values_0[i_0];
                  var derivedState = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
                  if (!isInterface(derivedState, DerivedState))
                    THROW_CCE();
                  var previousValue = recordedDerivedStateValues.b3(derivedState);
                  var tmp0_elvis_lhs = derivedState.f2f();
                  var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
                  if (!policy.j2g(derivedState.s2d().g2g(), previousValue)) {
                    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
                    var index_0 = find_2(valueToScopes, derivedState);
                    if (index_0 >= 0) {
                      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
                      var this_1 = scopeSetAt(valueToScopes, index_0);
                      // Inline function 'kotlin.contracts.contract' call
                      var values_1 = this_1.n27_1;
                      var inductionVariable_1 = 0;
                      var last_1 = this_1.m27_1;
                      if (inductionVariable_1 < last_1)
                        do {
                          var i_1 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                          var tmp_1 = values_1[i_1];
                          var scope = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
                          invalidated.i2a(scope);
                          hasValues = true;
                        }
                         while (inductionVariable_1 < last_1);
                    }
                  } else {
                    this.b37_1.c29(derivedState);
                  }
                }
                 while (inductionVariable_0 < last_0);
            }
          }
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var index_1 = find_2(valueToScopes, value);
          if (index_1 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var this_2 = scopeSetAt(valueToScopes, index_1);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = this_2.n27_1;
            var inductionVariable_2 = 0;
            var last_2 = this_2.m27_1;
            if (inductionVariable_2 < last_2)
              do {
                var i_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                var tmp_2 = values_2[i_2];
                var scope_0 = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
                invalidated.i2a(scope_0);
                hasValues = true;
              }
               while (inductionVariable_2 < last_2);
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = changes.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
        if (dependencyToDerivedStates.s2c(element)) {
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var index_2 = find_2(dependencyToDerivedStates, element);
          if (index_2 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var this_3 = scopeSetAt(dependencyToDerivedStates, index_2);
            // Inline function 'kotlin.contracts.contract' call
            var values_3 = this_3.n27_1;
            var inductionVariable_3 = 0;
            var last_3 = this_3.m27_1;
            if (inductionVariable_3 < last_3)
              do {
                var i_3 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                var tmp_3 = values_3[i_3];
                var derivedState_0 = !(tmp_3 == null) ? tmp_3 : THROW_CCE();
                if (!isInterface(derivedState_0, DerivedState))
                  THROW_CCE();
                var previousValue_0 = recordedDerivedStateValues.b3(derivedState_0);
                var tmp0_elvis_lhs_0 = derivedState_0.f2f();
                var policy_0 = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
                if (!policy_0.j2g(derivedState_0.s2d().g2g(), previousValue_0)) {
                  // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
                  var index_3 = find_2(valueToScopes, derivedState_0);
                  if (index_3 >= 0) {
                    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
                    var this_4 = scopeSetAt(valueToScopes, index_3);
                    // Inline function 'kotlin.contracts.contract' call
                    var values_4 = this_4.n27_1;
                    var inductionVariable_4 = 0;
                    var last_4 = this_4.m27_1;
                    if (inductionVariable_4 < last_4)
                      do {
                        var i_4 = inductionVariable_4;
                        inductionVariable_4 = inductionVariable_4 + 1 | 0;
                        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_4 = values_4[i_4];
                        var scope_1 = !(tmp_4 == null) ? tmp_4 : THROW_CCE();
                        invalidated.i2a(scope_1);
                        hasValues = true;
                      }
                       while (inductionVariable_4 < last_4);
                  }
                } else {
                  this.b37_1.c29(derivedState_0);
                }
              }
               while (inductionVariable_3 < last_3);
          }
        }
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var index_4 = find_2(valueToScopes, element);
        if (index_4 >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var this_5 = scopeSetAt(valueToScopes, index_4);
          // Inline function 'kotlin.contracts.contract' call
          var values_5 = this_5.n27_1;
          var inductionVariable_5 = 0;
          var last_5 = this_5.m27_1;
          if (inductionVariable_5 < last_5)
            do {
              var i_5 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
              var tmp_5 = values_5[i_5];
              var scope_2 = !(tmp_5 == null) ? tmp_5 : THROW_CCE();
              invalidated.i2a(scope_2);
              hasValues = true;
            }
             while (inductionVariable_5 < last_5);
        }
      }
    }
    if (this.b37_1.q27()) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      var this_6 = this.b37_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = this_6.a29_1;
      if (size > 0) {
        var i_6 = 0;
        var tmp_6 = this_6.y28_1;
        var content = isArray(tmp_6) ? tmp_6 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
          var it = content[i_6];
          this.x37(it);
          i_6 = i_6 + 1 | 0;
        }
         while (i_6 < size);
      }
      this.b37_1.c1();
    }
    return hasValues;
  };
  protoOf(ObservedScopeMap).x37 = function (derivedState) {
    var scopeToValues = this.z36_1;
    var token = currentSnapshot().s28();
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var this_0 = this.y36_1;
    var index = find_2(this_0, derivedState);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var this_1 = scopeSetAt(this_0, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = this_1.n27_1;
      var inductionVariable = 0;
      var last = this_1.m27_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>' call
          var tmp = values[i];
          var scope = !(tmp == null) ? tmp : THROW_CCE();
          var tmp0_elvis_lhs = scopeToValues.j2e(scope);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var this_2 = new IdentityArrayIntMap();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>.<anonymous>' call
            scopeToValues.h2d(scope, this_2);
            tmp_0 = this_2;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          recordRead(this, derivedState, token, scope, tmp_0);
        }
         while (inductionVariable < last);
    }
  };
  protoOf(ObservedScopeMap).y37 = function () {
    var invalidated = this.a37_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    var block = this.u36_1;
    // Inline function 'kotlin.contracts.contract' call
    var values = invalidated.n27_1;
    var inductionVariable = 0;
    var last = invalidated.m27_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = values[i];
        block(!(tmp == null) ? tmp : THROW_CCE());
      }
       while (inductionVariable < last);
    invalidated.c1();
  };
  function SnapshotStateObserver$applyObserver$lambda(this$0) {
    return function (applied, _anonymous_parameter_1__qggqgd) {
      addChanges(this$0, applied);
      var tmp;
      if (drainChanges(this$0)) {
        sendNotifications(this$0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SnapshotStateObserver$sendNotifications$lambda(this$0) {
    return function () {
      $l$loop: while (true) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this$0.n37_1;
        var tmp;
        if (!this$0.j37_1) {
          this$0.j37_1 = true;
          var tmp_0;
          try {
            var this_0 = this$0.m37_1;
            // Inline function 'kotlin.contracts.contract' call
            var size = this_0.a29_1;
            var tmp_1;
            if (size > 0) {
              var i = 0;
              var tmp_2 = this_0.y28_1;
              var content = isArray(tmp_2) ? tmp_2 : THROW_CCE();
              do {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.sendNotifications.<anonymous>.<anonymous>.<anonymous>' call
                content[i].y37();
                i = i + 1 | 0;
              }
               while (i < size);
              tmp_1 = Unit_instance;
            }
            tmp_0 = tmp_1;
          }finally {
            this$0.j37_1 = false;
          }
          tmp = tmp_0;
        }
        if (!drainChanges(this$0))
          break $l$loop;
      }
      return Unit_instance;
    };
  }
  function SnapshotStateObserver$readObserver$lambda(this$0) {
    return function (state) {
      var tmp;
      if (!this$0.p37_1) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        this$0.n37_1;
        ensureNotNull(this$0.q37_1).t37(state);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SnapshotStateObserver(onChangedExecutor) {
    this.h37_1 = onChangedExecutor;
    this.i37_1 = new AtomicReference(null);
    this.j37_1 = false;
    var tmp = this;
    tmp.k37_1 = SnapshotStateObserver$applyObserver$lambda(this);
    var tmp_0 = this;
    tmp_0.l37_1 = SnapshotStateObserver$readObserver$lambda(this);
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp_1.m37_1 = new MutableVector(tmp$ret$0, 0);
    this.n37_1 = createSynchronizedObject();
    this.o37_1 = null;
    this.p37_1 = false;
    this.q37_1 = null;
    this.r37_1 = 8;
  }
  protoOf(SnapshotStateObserver).z37 = function (scope, onValueChangedForScope, block) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.n37_1;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.observeReads.<anonymous>' call
    var scopeMap = ensureMap(this, onValueChangedForScope);
    var oldPaused = this.p37_1;
    var oldMap = this.q37_1;
    try {
      this.p37_1 = false;
      this.q37_1 = scopeMap;
      scopeMap.u37(scope, this.l37_1, block);
    }finally {
      this.q37_1 = oldMap;
      this.p37_1 = oldPaused;
    }
  };
  protoOf(SnapshotStateObserver).a38 = function (scope) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.n37_1;
    var this_0 = this.m37_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = this_0.a29_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = this_0.y28_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        content[i].v37(scope);
        i = i + 1 | 0;
      }
       while (i < size);
      tmp = Unit_instance;
    }
  };
  protoOf(SnapshotStateObserver).b38 = function (predicate) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.n37_1;
    var this_0 = this.m37_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = this_0.a29_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = this_0.y28_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clearIf.<anonymous>' call
        content[i].w37(predicate);
        i = i + 1 | 0;
      }
       while (i < size);
      tmp = Unit_instance;
    }
  };
  protoOf(SnapshotStateObserver).c38 = function () {
    this.o37_1 = Companion_instance_12.s2l(this.k37_1);
  };
  protoOf(SnapshotStateObserver).d38 = function () {
    var tmp0_safe_receiver = this.o37_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gk();
    }
  };
  protoOf(SnapshotStateObserver).c1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.n37_1;
    var this_0 = this.m37_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = this_0.a29_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = this_0.y28_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        content[i].c1();
        i = i + 1 | 0;
      }
       while (i < size);
      tmp = Unit_instance;
    }
  };
  function find_4($this, value, hash) {
    var low = 0;
    var high = $this.p32_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.q32_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.r32_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dq();
        if (value === midVal)
          return mid;
        return findExactIndex_3($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_3($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.q32_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.r32_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.dq();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.p32_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.q32_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.r32_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.dq();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.p32_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.p32_1 = 0;
    this.q32_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.r32_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).i2a = function (value) {
    var index;
    var size = this.p32_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_4(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.r32_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.r32_1;
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(this_0, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = this.r32_1;
      arrayCopy(this_1, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var this_2 = this.q32_1;
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_2;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.q32_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.r32_1 = newValues;
      this.q32_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var this_3 = this.r32_1;
      var destination = this.r32_1;
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(this_3, destination, destinationOffset_1, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_4 = this.q32_1;
      var destination_0 = this.q32_1;
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = this_4;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, destination_0, destinationOffset_2, insertIndex, size);
    }
    this.r32_1[insertIndex] = new WeakReference(value);
    this.q32_1[insertIndex] = hash;
    this.p32_1 = this.p32_1 + 1 | 0;
    return true;
  };
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.i2c_1 = value;
    this.j2c_1 = 8;
  }
  protoOf(AtomicReference).dq = function () {
    return this.i2c_1;
  };
  protoOf(AtomicReference).e2d = function (value) {
    this.i2c_1 = value;
  };
  protoOf(AtomicReference).k2c = function (value) {
    var oldValue = this.i2c_1;
    this.i2c_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).o2d = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.i2c_1)) {
      this.i2c_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function getCurrentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function AtomicInt(value) {
    this.q31_1 = value;
  }
  protoOf(AtomicInt).l30 = function (amount) {
    this.q31_1 = this.q31_1 + amount | 0;
    return this.q31_1;
  };
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.v6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function $withFrameNanosCOROUTINE$5(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m38_1 = _this__u8e3s4;
    this.n38_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$5).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.n38_1, safe));
            suspendResult = returnIfSuspended(safe.w6(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).d1x = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$5(this, onFrame, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).m28 = function (name) {
    return null;
  };
  protoOf(Trace).e29 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return composable(composer, 1);
  }
  function invokeComposable$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function trackWrite($this) {
    if ($this.j2x_1) {
      var scope = $this.l2x_1;
      if (!(scope == null)) {
        scope.b2e();
        $this.l2x_1 = null;
      }
      var scopes = $this.m2x_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.n();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.i1(index);
            item.b2e();
          }
           while (inductionVariable < last);
        scopes.c1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.j2x_1) {
      var scope = composer.i1x();
      if (!(scope == null)) {
        composer.j1x(scope);
        var lastScope = $this.l2x_1;
        if (replacableWith(lastScope, scope)) {
          $this.l2x_1 = scope;
        } else {
          var lastScopes = $this.m2x_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.m2x_1 = newScopes;
            newScopes.s(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.n();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.i1(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.o(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.s(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.z29(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.o38($p1, nc, $changed | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda_0(this$0, $p1, $p2, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.p38($p1, $p2, nc, $changed | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda_1(this$0, $p1, $p2, $p3, $p4, $p5, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.q38($p1, $p2, $p3, $p4, $p5, nc, $changed | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.i2x_1 = key;
    this.j2x_1 = tracked;
    this.k2x_1 = null;
    this.l2x_1 = null;
    this.m2x_1 = null;
  }
  protoOf(ComposableLambdaImpl).n2x = function (block) {
    if (!equals(this.k2x_1, block)) {
      var oldBlockNull = this.k2x_1 == null;
      this.k2x_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).z29 = function (c, changed) {
    var c_0 = c.c1z(this.i2x_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.t1z(this) ? differentBits(0) : sameBits(0));
    var tmp = this.k2x_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.d1z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).o38 = function (p1, c, changed) {
    var c_0 = c.c1z(this.i2x_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.t1z(this) ? differentBits(1) : sameBits(1));
    var tmp = this.k2x_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.d1z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).p38 = function (p1, p2, c, changed) {
    var c_0 = c.c1z(this.i2x_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.t1z(this) ? differentBits(2) : sameBits(2));
    var tmp = this.k2x_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, p2, c_0, dirty);
    var tmp0_safe_receiver = c_0.d1z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(ComposableLambdaImpl$invoke$lambda_0(this, p1, p2, changed));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).q38 = function (p1, p2, p3, p4, p5, c, changed) {
    var c_0 = c.c1z(this.i2x_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.t1z(this) ? differentBits(5) : sameBits(5));
    var tmp = this.k2x_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, p2, p3, p4, p5, c_0, dirty);
    var tmp0_safe_receiver = c_0.d1z();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w2e(ComposableLambdaImpl$invoke$lambda_1(this, p1, p2, p3, p4, p5, changed));
    }
    return result;
  };
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function createSnapshotMutableFloatState(value) {
    return new SnapshotMutableFloatStateImpl(value);
  }
  function createSnapshotMutableIntState(value) {
    return new SnapshotMutableIntStateImpl(value);
  }
  function createSnapshotMutableLongState(value) {
    return new SnapshotMutableLongStateImpl(value);
  }
  function IntMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.l24_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).i1 = function (key) {
    return this.l24_1.b3(key);
  };
  protoOf(IntMap).f27 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.l24_1.r2(key, value);
  };
  protoOf(IntMap).c1 = function () {
    this.l24_1.c1();
  };
  function WeakReference(reference) {
    this.s32_1 = reference;
  }
  protoOf(WeakReference).dq = function () {
    return this.s32_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).a1w = onBeginChanges;
  protoOf(OffsetApplier).b1w = onEndChanges;
  protoOf(AbstractApplier).a1w = onBeginChanges;
  protoOf(AbstractApplier).b1w = onEndChanges;
  protoOf(BroadcastFrameClock).t2 = get_key;
  protoOf(BroadcastFrameClock).ob = get;
  protoOf(BroadcastFrameClock).df = fold;
  protoOf(BroadcastFrameClock).cf = minusKey;
  protoOf(BroadcastFrameClock).ef = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.y6();
  });
  protoOf(DerivedSnapshotState).m2g = mergeRecords;
  protoOf(SnapshotMutableFloatStateImpl).q2m = set_value;
  protoOf(SnapshotMutableFloatStateImpl).u2 = get_value;
  protoOf(SnapshotMutableIntStateImpl).n2p = set_value_0;
  protoOf(SnapshotMutableIntStateImpl).u2 = get_value_0;
  protoOf(SnapshotMutableLongStateImpl).v2p = set_value_1;
  protoOf(SnapshotMutableLongStateImpl).u2 = get_value_1;
  protoOf(StructuralEqualityPolicy).d2q = merge;
  protoOf(ReferentialEqualityPolicy).d2q = merge;
  protoOf(NeverEqualPolicy).d2q = merge;
  protoOf(SnapshotStateList).m2g = mergeRecords;
  protoOf(SnapshotStateMap).m2g = mergeRecords;
  protoOf(MonotonicClockImpl).t2 = get_key;
  protoOf(MonotonicClockImpl).ob = get;
  protoOf(MonotonicClockImpl).df = fold;
  protoOf(MonotonicClockImpl).cf = minusKey;
  protoOf(MonotonicClockImpl).ef = plus;
  //endregion
  //region block: init
  reuseKey = 207;
  Key_instance_0 = new Key();
  movableContentKey = 126665345;
  Companion_instance_4 = new Companion_3();
  Companion_instance_6 = new Companion_5();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  ReferentialEqualityPolicy_instance = new ReferentialEqualityPolicy();
  NeverEqualPolicy_instance = new NeverEqualPolicy();
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_12 = new Companion_11();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableVector;
  _.$_$.b = composableLambdaInstance;
  _.$_$.c = composableLambda;
  _.$_$.d = SnapshotMutableState;
  _.$_$.e = SnapshotStateList;
  _.$_$.f = SnapshotStateObserver;
  _.$_$.g = $get_currentCompositeKeyHash$$composable_u3vbzj;
  _.$_$.h = $get_currentRecomposeScope$$composable_f9ntk0;
  _.$_$.i = AbstractApplier;
  _.$_$.j = Applier;
  _.$_$.k = AtomicReference;
  _.$_$.l = BroadcastFrameClock;
  _.$_$.m = ComposeNodeLifecycleCallback;
  _.$_$.n = CompositionLocalProvider$composable;
  _.$_$.o = CompositionLocalProvider$composable_0;
  _.$_$.p = CompositionScopedCoroutineScopeCanceller;
  _.$_$.q = Composition;
  _.$_$.r = DisposableEffect$composable_0;
  _.$_$.s = DisposableEffect$composable;
  _.$_$.t = LaunchedEffect$composable;
  _.$_$.u = LaunchedEffect$composable_0;
  _.$_$.v = MutableState;
  _.$_$.w = Recomposer;
  _.$_$.x = RememberObserver;
  _.$_$.y = SideEffect$composable;
  _.$_$.z = SkippableUpdater;
  _.$_$.a1 = SnapshotMutationPolicy;
  _.$_$.b1 = collectAsState$composable;
  _.$_$.c1 = collectAsState$composable_0;
  _.$_$.d1 = compositionLocalOf;
  _.$_$.e1 = createCompositionCoroutineScope;
  _.$_$.f1 = derivedStateOf_0;
  _.$_$.g1 = derivedStateOf;
  _.$_$.h1 = identityHashCode;
  _.$_$.i1 = invalidApplier;
  _.$_$.j1 = isTraceInProgress;
  _.$_$.k1 = mutableFloatStateOf;
  _.$_$.l1 = mutableIntStateOf;
  _.$_$.m1 = mutableLongStateOf;
  _.$_$.n1 = mutableStateListOf;
  _.$_$.o1 = mutableStateMapOf;
  _.$_$.p1 = mutableStateOf;
  _.$_$.q1 = neverEqualPolicy;
  _.$_$.r1 = referentialEqualityPolicy;
  _.$_$.s1 = rememberCompositionContext$composable;
  _.$_$.t1 = rememberUpdatedState$composable;
  _.$_$.u1 = get_reuseKey;
  _.$_$.v1 = snapshotFlow;
  _.$_$.w1 = sourceInformationMarkerEnd;
  _.$_$.x1 = sourceInformationMarkerStart;
  _.$_$.y1 = sourceInformation;
  _.$_$.z1 = staticCompositionLocalOf;
  _.$_$.a2 = structuralEqualityPolicy;
  _.$_$.b2 = traceEventEnd;
  _.$_$.c2 = traceEventStart;
  _.$_$.d2 = updateChangedFlags;
  _.$_$.e2 = withFrameNanos;
  _.$_$.f2 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.g2 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.h2 = _Updater___init__impl__rbfxm8;
  _.$_$.i2 = _Updater___get_composer__impl__9ty7av;
  _.$_$.j2 = Updater__set_impl_v7kwss;
  _.$_$.k2 = Companion_instance_12;
  _.$_$.l2 = Companion_getInstance_0;
  _.$_$.m2 = Companion_getInstance_2;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-runtime.js.map
