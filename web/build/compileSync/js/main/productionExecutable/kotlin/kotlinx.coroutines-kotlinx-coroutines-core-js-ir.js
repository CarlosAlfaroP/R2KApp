(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var protoOf = kotlin_kotlin.$_$.r9;
  var THROW_CCE = kotlin_kotlin.$_$.xc;
  var Continuation = kotlin_kotlin.$_$.x7;
  var classMeta = kotlin_kotlin.$_$.p8;
  var setMetadataFor = kotlin_kotlin.$_$.s9;
  var VOID = kotlin_kotlin.$_$.d;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Companion_instance = kotlin_kotlin.$_$.c3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.h2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.r7;
  var fillArrayVal = kotlin_kotlin.$_$.u8;
  var CoroutineImpl = kotlin_kotlin.$_$.d8;
  var copyToArray = kotlin_kotlin.$_$.p4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p7;
  var emptyList = kotlin_kotlin.$_$.r4;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.t2;
  var Key_instance = kotlin_kotlin.$_$.s2;
  var equals = kotlin_kotlin.$_$.t8;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.q7;
  var toString = kotlin_kotlin.$_$.v9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var interfaceMeta = kotlin_kotlin.$_$.e9;
  var isInterface = kotlin_kotlin.$_$.h9;
  var toString_0 = kotlin_kotlin.$_$.be;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var hashCode = kotlin_kotlin.$_$.c9;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.w;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.i2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k2;
  var createFailure = kotlin_kotlin.$_$.hd;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.t7;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.s7;
  var get = kotlin_kotlin.$_$.u7;
  var minusKey = kotlin_kotlin.$_$.v7;
  var ContinuationInterceptor = kotlin_kotlin.$_$.w7;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var Enum = kotlin_kotlin.$_$.mc;
  var startCoroutine = kotlin_kotlin.$_$.f8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.qd;
  var Long = kotlin_kotlin.$_$.rc;
  var Companion_getInstance = kotlin_kotlin.$_$.b3;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.i;
  var RuntimeException = kotlin_kotlin.$_$.wc;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.j8;
  var Error_0 = kotlin_kotlin.$_$.nc;
  var Error_init_$Init$ = kotlin_kotlin.$_$.g1;
  var Element = kotlin_kotlin.$_$.b8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CancellationException = kotlin_kotlin.$_$.o7;
  var ArrayList = kotlin_kotlin.$_$.n3;
  var SequenceScope = kotlin_kotlin.$_$.za;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var sequence = kotlin_kotlin.$_$.gb;
  var plus = kotlin_kotlin.$_$.c8;
  var get_0 = kotlin_kotlin.$_$.z7;
  var fold = kotlin_kotlin.$_$.y7;
  var minusKey_0 = kotlin_kotlin.$_$.a8;
  var anyToString = kotlin_kotlin.$_$.h8;
  var UnsupportedOperationException = kotlin_kotlin.$_$.dd;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.v;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.z2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.e;
  var toDuration = kotlin_kotlin.$_$.hc;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.id;
  var toLong = kotlin_kotlin.$_$.t9;
  var addSuppressed = kotlin_kotlin.$_$.ed;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.a6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var compareTo = kotlin_kotlin.$_$.q8;
  var last = kotlin_kotlin.$_$.sb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.b2;
  var IllegalStateException = kotlin_kotlin.$_$.qc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.m1;
  var NoSuchElementException = kotlin_kotlin.$_$.sc;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.r1;
  var getKClass = kotlin_kotlin.$_$.b;
  var Unit = kotlin_kotlin.$_$.cd;
  var copyOf = kotlin_kotlin.$_$.n4;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.w2;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.wd;
  var joinToString = kotlin_kotlin.$_$.n5;
  var IndexedValue = kotlin_kotlin.$_$.p3;
  var fill = kotlin_kotlin.$_$.v4;
  var numberToByte = kotlin_kotlin.$_$.l9;
  var isArray = kotlin_kotlin.$_$.f9;
  var arrayCopy = kotlin_kotlin.$_$.z3;
  var coerceAtLeast = kotlin_kotlin.$_$.ha;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  var Exception = kotlin_kotlin.$_$.oc;
  var toLongOrNull = kotlin_kotlin.$_$.bc;
  var plus_0 = kotlin_kotlin.$_$.l6;
  var List = kotlin_kotlin.$_$.q3;
  var listOf_0 = kotlin_kotlin.$_$.z5;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.x;
  var getStringHashCode = kotlin_kotlin.$_$.b9;
  var removeFirstOrNull = kotlin_kotlin.$_$.m6;
  var MutableCollection = kotlin_kotlin.$_$.t3;
  var coerceIn = kotlin_kotlin.$_$.pa;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.u1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.u;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.y1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.vi(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.vi.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.qi(onCancelling, invokeImmediately, handler) : $super.qi.call(this, onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, VOID, [0]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(DisposeHandlersOnCancel, 'DisposeHandlersOnCancel', classMeta, CancelHandler);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta, VOID, VOID, LinkedListNode);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  setMetadataFor(AwaitAllNode, 'AwaitAllNode', classMeta, JobNode);
  setMetadataFor(AwaitAll, 'AwaitAll', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor($awaitAllCOROUTINE$1, '$awaitAllCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Job], VOID, VOID, VOID, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, VOID, VOID, VOID, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.lm(cause) : $super.lm.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler);
  setMetadataFor(Runnable, 'Runnable', interfaceMeta);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, VOID, [Runnable]);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(Waiter, 'Waiter', interfaceMeta);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor($awaitCOROUTINE$3, '$awaitCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, VOID, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_0, 'Key', objectMeta);
  setMetadataFor(Key_1, 'Key', objectMeta);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().np(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', interfaceMeta, VOID, [Delay], VOID, VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_2, 'Key', objectMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode, VOID, LinkedListHead);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete], NodeList);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, VOID, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, [ScopeCoroutine, Runnable], VOID, VOID, VOID, [0]);
  setMetadataFor($withTimeoutOrNullCOROUTINE$4, '$withTimeoutOrNullCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_3, 'Key', objectMeta);
  setMetadataFor(YieldContext, 'YieldContext', classMeta, AbstractCoroutineContextElement, VOID, YieldContext);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode', classMeta);
  setMetadataFor(Segment, 'Segment', classMeta, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  setMetadataFor(ChannelSegment, 'ChannelSegment', classMeta, Segment);
  setMetadataFor($hasNextCOROUTINE$8, '$hasNextCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(SendBroadcast, 'SendBroadcast', classMeta, VOID, [Waiter]);
  setMetadataFor(BufferedChannelIterator, 'BufferedChannelIterator', classMeta, VOID, [Waiter], VOID, VOID, VOID, [0, 3]);
  setMetadataFor($sendCOROUTINE$5, '$sendCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor($receiveCOROUTINE$6, '$receiveCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor($receiveCatchingCOROUTINE$7, '$receiveCatchingCOROUTINE$7', classMeta, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.u11(cause) : $super.u11.call(this, cause);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.vi(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.vi.call(this, cause);
    }
    return tmp;
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(BufferedChannel, 'BufferedChannel', classMeta, VOID, [SendChannel, ReceiveChannel], VOID, VOID, VOID, [1, 4, 0, 3]);
  setMetadataFor(WaiterEB, 'WaiterEB', classMeta);
  setMetadataFor(ReceiveCatching, 'ReceiveCatching', classMeta, VOID, [Waiter]);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(Failed, 'Failed', classMeta, VOID, VOID, Failed);
  setMetadataFor(Closed, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor(ChannelCoroutine, 'ChannelCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, SendChannel, ReceiveChannel], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(ConflatedBufferedChannel, 'ConflatedBufferedChannel', classMeta, BufferedChannel, VOID, VOID, VOID, VOID, [1, 0]);
  setMetadataFor(ProducerScope, 'ProducerScope', interfaceMeta, VOID, [CoroutineScope, SendChannel], VOID, VOID, VOID, [1]);
  setMetadataFor(ProducerCoroutine, 'ProducerCoroutine', classMeta, ChannelCoroutine, [ChannelCoroutine, ProducerScope], VOID, VOID, VOID, [0, 1]);
  setMetadataFor(AbstractFlow, 'AbstractFlow', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SafeFlow, 'SafeFlow', classMeta, AbstractFlow, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$14, '$collectCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$15, '$collectCOROUTINE$15', classMeta, CoroutineImpl);
  function fuse$default(context, capacity, onBufferOverflow, $super) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = -3;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    return $super === VOID ? this.u14(context, capacity, onBufferOverflow) : $super.u14.call(this, context, capacity, onBufferOverflow);
  }
  setMetadataFor(FusibleFlow, 'FusibleFlow', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow, 'ChannelFlow', classMeta, VOID, [FusibleFlow], VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelAsFlow, 'ChannelAsFlow', classMeta, ChannelFlow, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($emitAllImplCOROUTINE$16, '$emitAllImplCOROUTINE$16', classMeta, CoroutineImpl);
  setMetadataFor($collectCOROUTINE$17, '$collectCOROUTINE$17', classMeta, CoroutineImpl);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(Emitter, 'Emitter', classMeta);
  setMetadataFor($collectCOROUTINE$18, '$collectCOROUTINE$18', classMeta, CoroutineImpl);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  setMetadataFor(SharedFlowImpl, 'SharedFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector, FusibleFlow], VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot', classMeta);
  setMetadataFor(SharedFlowSlot, 'SharedFlowSlot', classMeta, AbstractSharedFlowSlot, VOID, SharedFlowSlot);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(SharingCommand, 'SharingCommand', classMeta, Enum);
  setMetadataFor(StartedEagerly, 'StartedEagerly', classMeta, VOID, VOID, StartedEagerly);
  setMetadataFor(StartedLazily$command$slambda$slambda, 'StartedLazily$command$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(StartedLazily$command$slambda, 'StartedLazily$command$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(StartedLazily, 'StartedLazily', classMeta, VOID, VOID, StartedLazily);
  setMetadataFor(StateFlow, 'StateFlow', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$19, '$collectCOROUTINE$19', classMeta, CoroutineImpl);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, FlowCollector, StateFlow, FusibleFlow], VOID, VOID, VOID, [1]);
  setMetadataFor(StateFlowSlot, 'StateFlowSlot', classMeta, AbstractSharedFlowSlot, VOID, StateFlowSlot, VOID, VOID, [0]);
  setMetadataFor(SubscriptionCountStateFlow, 'SubscriptionCountStateFlow', classMeta, SharedFlowImpl, [StateFlow, SharedFlowImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow$_get_collectToFun_$slambda_j53z2e, 'ChannelFlow$<get-collectToFun>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlow$collect$slambda, 'ChannelFlow$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowOperator, 'ChannelFlowOperator', classMeta, ChannelFlow, VOID, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(ChannelFlowOperatorImpl, 'ChannelFlowOperatorImpl', classMeta, ChannelFlowOperator, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowOperator$collectWithContextUndispatched$slambda, 'ChannelFlowOperator$collectWithContextUndispatched$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$20, '$collectCOROUTINE$20', classMeta, CoroutineImpl);
  setMetadataFor(UndispatchedContextCollector$emitRef$slambda, 'UndispatchedContextCollector$emitRef$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(UndispatchedContextCollector, 'UndispatchedContextCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(StackFrameContinuation, 'StackFrameContinuation', classMeta, VOID, [Continuation]);
  setMetadataFor(combineInternal$slambda$slambda$slambda, 'combineInternal$slambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(combineInternal$slambda$slambda, 'combineInternal$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(combineInternal$slambda, 'combineInternal$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(FlowCoroutine, 'FlowCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda, 'ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowTransformLatest$flowCollect$slambda$slambda, 'ChannelFlowTransformLatest$flowCollect$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowTransformLatest$flowCollect$slambda, 'ChannelFlowTransformLatest$flowCollect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowTransformLatest, 'ChannelFlowTransformLatest', classMeta, ChannelFlowOperator, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(NopCollector, 'NopCollector', objectMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(SendingCollector, 'SendingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(DistinctFlowImpl$collect$slambda, 'DistinctFlowImpl$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(DistinctFlowImpl, 'DistinctFlowImpl', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ThrowingCollector, 'ThrowingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$22, '$collectCOROUTINE$22', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($invokeSafelyCOROUTINE$21, '$invokeSafelyCOROUTINE$21', classMeta, CoroutineImpl);
  setMetadataFor(mapLatest$slambda, 'mapLatest$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($onSubscriptionCOROUTINE$29, '$onSubscriptionCOROUTINE$29', classMeta, CoroutineImpl);
  setMetadataFor(SubscribedFlowCollector, 'SubscribedFlowCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1, 0]);
  setMetadataFor(SharingConfig, 'SharingConfig', classMeta);
  setMetadataFor($collectCOROUTINE$30, '$collectCOROUTINE$30', classMeta, CoroutineImpl);
  setMetadataFor(ReadonlyStateFlow, 'ReadonlyStateFlow', classMeta, VOID, [StateFlow, FusibleFlow], VOID, VOID, VOID, [1]);
  setMetadataFor(launchSharing$slambda$slambda, 'launchSharing$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(launchSharing$slambda$slambda_1, 'launchSharing$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(launchSharing$slambda, 'launchSharing$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(runningFold$o$collect$slambda, 'runningFold$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$33, '$collectCOROUTINE$33', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_4, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(filterNotNull$o$collect$slambda, 'filterNotNull$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$34, '$collectCOROUTINE$34', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(combine$o$collect$slambda, 'combine$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$35, '$collectCOROUTINE$35', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(combine$o$collect$slambda_1, 'combine$o$collect$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$36, '$collectCOROUTINE$36', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$38, '$emitCOROUTINE$38', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor($firstCOROUTINE$37, '$firstCOROUTINE$37', classMeta, CoroutineImpl);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(SegmentOrClosed, 'SegmentOrClosed', classMeta);
  setMetadataFor(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', objectMeta, Exception);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation]);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(SelectInstance, 'SelectInstance', interfaceMeta);
  setMetadataFor(ClauseData, 'ClauseData', classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SelectImplementation, 'SelectImplementation', classMeta, CancelHandler, [CancelHandler, SelectInstance, Waiter], VOID, VOID, VOID, [0, 2]);
  setMetadataFor(TrySelectDetailedResult, 'TrySelectDetailedResult', classMeta, Enum);
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.o1s(owner, $completion) : $super.o1s.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.q1s(owner);
      tmp = Unit_instance;
    } else {
      tmp = $super.q1s.call(this, owner);
    }
    return tmp;
  }
  setMetadataFor(Mutex, 'Mutex', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', classMeta, VOID, [CancellableContinuation, Waiter]);
  setMetadataFor(SemaphoreImpl, 'SemaphoreImpl', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(MutexImpl, 'MutexImpl', classMeta, SemaphoreImpl, [SemaphoreImpl, Mutex], VOID, VOID, VOID, [1, 0]);
  setMetadataFor(SemaphoreSegment, 'SemaphoreSegment', classMeta, Segment);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop, VOID, UnconfinedEventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, VOID, [MutableCollection, List]);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler);
  setMetadataFor(WindowClearTimeout, 'WindowClearTimeout', classMeta, ClearTimeout);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException);
  setMetadataFor(ChildCancelledException, 'ChildCancelledException', classMeta, CancellationException, VOID, ChildCancelledException);
  setMetadataFor(SafeCollector, 'SafeCollector', classMeta, VOID, [FlowCollector], VOID, VOID, VOID, [1]);
  setMetadataFor(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', classMeta, RuntimeException);
  setMetadataFor(LocalAtomicInt, 'LocalAtomicInt', classMeta);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta, VOID, VOID, CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.ih(parentContext.ob(Key_instance_3));
    }
    this.lh_1 = parentContext.ef(this);
  }
  protoOf(AbstractCoroutine).u6 = function () {
    return this.lh_1;
  };
  protoOf(AbstractCoroutine).mh = function () {
    return this.lh_1;
  };
  protoOf(AbstractCoroutine).nh = function () {
    return protoOf(JobSupport).nh.call(this);
  };
  protoOf(AbstractCoroutine).oh = function (value) {
  };
  protoOf(AbstractCoroutine).ph = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).qh = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).rh = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.ph(state.sh_1, state.uh());
    } else {
      this.oh((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).v6 = function (result) {
    var state = this.vh(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.wh(state);
  };
  protoOf(AbstractCoroutine).wh = function (state) {
    return this.xh(state);
  };
  protoOf(AbstractCoroutine).yh = function (exception) {
    handleCoroutineException(this.lh_1, exception);
  };
  protoOf(AbstractCoroutine).zh = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.lh_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).zh.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).zh.call(this);
  };
  protoOf(AbstractCoroutine).ai = function (start, receiver, block) {
    start.di(block, receiver, this);
  };
  function awaitAll(_this__u8e3s4, $completion) {
    var tmp = new $awaitAllCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function DisposeHandlersOnCancel($outer, nodes) {
    this.vj_1 = $outer;
    CancelHandler.call(this);
    this.uj_1 = nodes;
  }
  protoOf(DisposeHandlersOnCancel).wj = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.uj_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.coroutines.DisposeHandlersOnCancel.disposeAll.<anonymous>' call
      element.fk().gk();
    }
  };
  protoOf(DisposeHandlersOnCancel).hk = function (cause) {
    this.wj();
  };
  protoOf(DisposeHandlersOnCancel).invoke = function (cause) {
    return this.hk(cause);
  };
  protoOf(DisposeHandlersOnCancel).toString = function () {
    return 'DisposeHandlersOnCancel[' + this.uj_1 + ']';
  };
  function AwaitAllNode($outer, continuation) {
    this.ek_1 = $outer;
    JobNode.call(this);
    this.bk_1 = continuation;
    this.dk_1 = atomic$ref$1(null);
  }
  protoOf(AwaitAllNode).fk = function () {
    var tmp = this.ck_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('handle');
    }
  };
  protoOf(AwaitAllNode).ik = function (value) {
    this.dk_1.kotlinx$atomicfu$value = value;
  };
  protoOf(AwaitAllNode).jk = function () {
    return this.dk_1.kotlinx$atomicfu$value;
  };
  protoOf(AwaitAllNode).hk = function (cause) {
    if (!(cause == null)) {
      var token = this.bk_1.nk(cause);
      if (!(token == null)) {
        this.bk_1.ok(token);
        var tmp0_safe_receiver = this.jk();
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.wj();
        }
      }
    } else if (this.ek_1.lk_1.atomicfu$decrementAndGet() === 0) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = this.bk_1;
      // Inline function 'kotlin.collections.map' call
      var this_1 = this.ek_1.kk_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(this_1.length);
      var inductionVariable = 0;
      var last = this_1.length;
      while (inductionVariable < last) {
        var item = this_1[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.AwaitAllNode.invoke.<anonymous>' call
        var tmp$ret$0 = item.mk();
        destination.s(tmp$ret$0);
      }
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(destination);
      this_0.v6(tmp$ret$3);
    }
  };
  protoOf(AwaitAllNode).invoke = function (cause) {
    return this.hk(cause);
  };
  function AwaitAll(deferreds) {
    this.kk_1 = deferreds;
    this.lk_1 = atomic$int$1(this.kk_1.length);
  }
  protoOf(AwaitAll).cl = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jl();
    // Inline function 'kotlinx.coroutines.AwaitAll.await.<anonymous>' call
    var tmp = 0;
    var tmp_0 = this.kk_1.length;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var deferred = this.kk_1[tmp_2];
      deferred.ki();
      // Inline function 'kotlin.apply' call
      var this_0 = new AwaitAllNode(this, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.AwaitAll.await.<anonymous>.<anonymous>' call
      var tmp_3 = this_0;
      // Inline function 'kotlinx.coroutines.asHandler' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3.ck_1 = deferred.pi(this_0);
      tmp_1[tmp_2] = this_0;
      tmp = tmp + 1 | 0;
    }
    var nodes = tmp_1;
    var disposer = new DisposeHandlersOnCancel(this, nodes);
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = nodes.length;
    while (inductionVariable < last) {
      var element = nodes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.coroutines.AwaitAll.await.<anonymous>.<anonymous>' call
      element.ik(disposer);
    }
    if (cancellable.ii()) {
      disposer.wj();
    } else {
      // Inline function 'kotlinx.coroutines.asHandler' call
      // Inline function 'kotlin.js.asDynamic' call
      cancellable.kl(disposer);
    }
    return cancellable.ll();
  };
  function $awaitAllCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sj_1 = _this__u8e3s4;
  }
  protoOf($awaitAllCOROUTINE$1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            if (this.sj_1.e1()) {
              this.tj_1 = emptyList();
              this.hb_1 = 2;
              continue $sm;
            } else {
              this.hb_1 = 1;
              var this_0 = this.sj_1;
              suspendResult = (new AwaitAll(copyToArray(this_0))).cl(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.tj_1 = suspendResult;
            this.hb_1 = 2;
            continue $sm;
          case 2:
            return this.tj_1;
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
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.ml() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.ai(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.u6();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.ob(Key_instance), oldContext.ob(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.lh_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.ll();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).hj = function (exception) {
    handleCoroutineException(this.lh_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.yl_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).li = function () {
    startCoroutineCancellable_0(this.yl_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.rl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.rl_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.rl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.rl_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.rl_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).xh = function (state) {
    this.wh(state);
  };
  protoOf(DispatchedCoroutine).wh = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.cm_1), recoverResult(state, this.cm_1));
  };
  protoOf(DispatchedCoroutine).ll = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.hi());
    if (state instanceof CompletedExceptionally)
      throw state.sh_1;
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.ml() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.ai(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).mk = function () {
    var tmp = this.jj();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.jm_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).li = function () {
    startCoroutineCancellable_0(this.jm_1, this);
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new DisposeOnCancel(handle);
    return _this__u8e3s4.kl(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.pm_1 = handle;
  }
  protoOf(DisposeOnCancel).hk = function (cause) {
    return this.pm_1.gk();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.hk(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + this.pm_1 + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.wm();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp0_safe_receiver.xm()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.il_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.hi();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.zm_1)) {
      var tmp_0 = $this.el_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).ym();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.el_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.an(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.gl_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(index === 536870911)) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callSegmentOnCancellation.<anonymous>' call
      segment.fn(index, cause, $this.u6());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.u6(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.gl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var index = cur & 536870911;
          var tmp$ret$2 = (1 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
          if ($this.gl_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.gl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) {
        case 0:
          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          // Inline function 'kotlinx.coroutines.index' call

          var index = cur & 536870911;
          var tmp$ret$2 = (2 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
          if ($this.gl_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.u6().ob(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.ri(true, VOID, tmp$ret$1);
    $this.il_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.hl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellationImpl.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.hl_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (state instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.on()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.sh_1;
              if (handler instanceof CancelHandler) {
                $this.ln(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.hn_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              if (state.mn()) {
                $this.ln(handler, state.kn_1);
                return Unit_instance;
              }
              var update = state.nn(VOID, handler);
              if ($this.hl_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!(handler instanceof CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.hl_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = state instanceof CancelHandler;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.hl_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.hl_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_instance;
        } else {
          if (state instanceof CancelledContinuation) {
            if (state.tn()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.pn(onCancellation, state.sh_1);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.hl_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(state == null) ? isInterface(state, NotCompleted) : false) {
          var update = resumedState($this, state, proposedUpdate, $this.zm_1, onCancellation, idempotent);
          if (!$this.hl_1.atomicfu$compareAndSet(state, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (state instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? state.jn_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.un();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.el_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.fl_1 = this.el_1.u6();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$0 = (0 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + 536870911 | 0;
    tmp.gl_1 = atomic$int$1(tmp$ret$0);
    this.hl_1 = atomic$ref$1(Active_instance);
    this.il_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).vn = function () {
    return this.el_1;
  };
  protoOf(CancellableContinuationImpl).u6 = function () {
    return this.fl_1;
  };
  protoOf(CancellableContinuationImpl).hi = function () {
    return this.hl_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).ii = function () {
    var tmp = this.hi();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).jl = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ii()) {
      handle.gk();
      this.il_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).xm = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.hl_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.jn_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.un();
      return false;
    }
    var tmp_0 = this.gl_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + 536870911 | 0;
    this.hl_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).wn = function () {
    return this.hi();
  };
  protoOf(CancellableContinuationImpl).xn = function (takenState, cause) {
    var this_0 = this.hl_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!state.mn()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.nn(VOID, VOID, VOID, VOID, cause);
            if (this.hl_1.atomicfu$compareAndSet(state, update)) {
              state.yn(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.hl_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).lm = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.hl_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var state = this_0.kotlinx$atomicfu$value;
        if (!(!(state == null) ? isInterface(state, NotCompleted) : false))
          return false;
        var tmp;
        if (state instanceof CancelHandler) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.hl_1.atomicfu$compareAndSet(state, update)) {
          break $l$block;
        }
        if (state instanceof CancelHandler) {
          this.ln(state, cause);
        } else {
          if (state instanceof Segment) {
            callSegmentOnCancellation(this, state, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.zm_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).zn = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.lm(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).ln = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.u6(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).pn = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.u6(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).ao = function (parent) {
    return parent.mi();
  };
  protoOf(CancellableContinuationImpl).ll = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.bo();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.bo();
    }
    var state = this.hi();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.sh_1, this);
    if (get_isCancellableMode(this.zm_1)) {
      var job = this.u6().ob(Key_instance_3);
      if (!(job == null) ? !job.nh() : false) {
        var cause = job.mi();
        this.xn(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.co(state);
  };
  protoOf(CancellableContinuationImpl).bo = function () {
    var tmp = this.el_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.do(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.un();
    this.lm(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).v6 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.zm_1);
  };
  protoOf(CancellableContinuationImpl).om = function (value, onCancellation) {
    return resumeImpl(this, value, this.zm_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).eo = function (segment, index) {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.gl_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.contracts.contract' call
        if (!((cur & 536870911) === 536870911)) {
          // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>.<anonymous>' call
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        // Inline function 'kotlinx.coroutines.decision' call
        var upd = (cur >> _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i() << _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i()) + index | 0;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).kl = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    invokeOnCancellationImpl(this, cancelHandler);
  };
  protoOf(CancellableContinuationImpl).un = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.gk();
    this.il_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).km = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).nk = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).ok = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.zm_1);
  };
  protoOf(CancellableContinuationImpl).nm = function (_this__u8e3s4, value) {
    var tmp = this.el_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.rm_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.zm_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).co = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.gn_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).fo = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).fo.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.el_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.zh() + '(' + toDebugString(this.el_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).zh = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.gn_1 = result;
    this.hn_1 = cancelHandler;
    this.in_1 = onCancellation;
    this.jn_1 = idempotentResume;
    this.kn_1 = cancelCause;
  }
  protoOf(CompletedContinuation).mn = function () {
    return !(this.kn_1 == null);
  };
  protoOf(CompletedContinuation).yn = function (cont, cause) {
    var tmp0_safe_receiver = this.hn_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.ln(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.in_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.pn(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).io = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).nn = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.gn_1 : result;
    cancelHandler = cancelHandler === VOID ? this.hn_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.in_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.jn_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.kn_1 : cancelCause;
    return $super === VOID ? this.io(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.io.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.gn_1) + ', cancelHandler=' + this.hn_1 + ', onCancellation=' + this.in_1 + ', idempotentResume=' + toString_0(this.jn_1) + ', cancelCause=' + this.kn_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.gn_1 == null ? 0 : hashCode(this.gn_1);
    result = imul(result, 31) + (this.hn_1 == null ? 0 : hashCode(this.hn_1)) | 0;
    result = imul(result, 31) + (this.in_1 == null ? 0 : hashCode(this.in_1)) | 0;
    result = imul(result, 31) + (this.jn_1 == null ? 0 : hashCode(this.jn_1)) | 0;
    result = imul(result, 31) + (this.kn_1 == null ? 0 : hashCode(this.kn_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.gn_1, tmp0_other_with_cast.gn_1))
      return false;
    if (!equals(this.hn_1, tmp0_other_with_cast.hn_1))
      return false;
    if (!equals(this.in_1, tmp0_other_with_cast.in_1))
      return false;
    if (!equals(this.jn_1, tmp0_other_with_cast.jn_1))
      return false;
    if (!equals(this.kn_1, tmp0_other_with_cast.kn_1))
      return false;
    return true;
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.jo_1 = handler;
  }
  protoOf(InvokeOnCancel).hk = function (cause) {
    this.jo_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.hk(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.jo_1) + '@' + get_hexAddress(this) + ']';
  };
  function _get_DECISION_SHIFT_$accessor$2jt7ek_1tkg2i() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return 29;
  }
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.so_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$3).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.so_1.to(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.ih(parent);
  }
  protoOf(CompletableDeferredImpl).ui = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).mk = function () {
    var tmp = this.jj();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).wo = function ($completion) {
    var tmp = new $awaitCOROUTINE$3(this, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(CompletableDeferredImpl).xo = function (value) {
    return this.yo(value);
  };
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.sh_1 = cause;
    this.th_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).uh = function () {
    return this.th_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).on = function () {
    return this.th_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.sh_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : cause, handled);
    this.sn_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).tn = function () {
    return this.sn_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(it, onCancellation) : it;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.zo_1 = result;
    this.ap_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString_0(this.zo_1) + ', onCancellation=' + this.ap_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.zo_1 == null ? 0 : hashCode(this.zo_1);
    result = imul(result, 31) + hashCode(this.ap_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.zo_1, tmp0_other_with_cast.zo_1))
      return false;
    if (!equals(this.ap_1, tmp0_other_with_cast.ap_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.sh_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).cp = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).ep = function (context, block) {
    return this.dp(context, block);
  };
  protoOf(CoroutineDispatcher).rb = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).pb = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.fp();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.ob(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.gp(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    return RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.ob(Key_instance_3) == null) ? context : context.ef(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.u6(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.mh().ob(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.vi(cause);
  }
  function MainScope() {
    return new ContextScope(SupervisorJob().ef(Dispatchers_getInstance().lp()));
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.mh().ob(Key_instance_3);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nh();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).di = function (block, receiver, completion) {
    var tmp;
    switch (this.j9_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).ml = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.ob(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.a7(new Long(0, 0)) <= 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jl();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance();
    if (timeMillis.a7(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.u6()).mp(timeMillis, cancellable);
    }
    return cancellable.ll();
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.qp_1 = new Long(0, 0);
    this.rp_1 = false;
    this.sp_1 = null;
  }
  protoOf(EventLoop).tp = function () {
    var tmp0_elvis_lhs = this.sp_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.ed();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.go();
    return true;
  };
  protoOf(EventLoop).up = function (task) {
    var tmp0_elvis_lhs = this.sp_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.sp_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.cd(task);
  };
  protoOf(EventLoop).vp = function () {
    return this.qp_1.a7(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).wp = function () {
    var tmp0_safe_receiver = this.sp_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).xp = function (unconfined) {
    this.qp_1 = this.qp_1.qa(delta(this, unconfined));
    if (!unconfined)
      this.rp_1 = true;
  };
  protoOf(EventLoop).yp = function (unconfined) {
    this.qp_1 = this.qp_1.ra(delta(this, unconfined));
    if (this.qp_1.a7(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.rp_1) {
      this.zp();
    }
  };
  protoOf(EventLoop).zp = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.aq_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).bq = function () {
    var tmp0_elvis_lhs = this.aq_1.dq();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().aq_1.eq(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).gi = function () {
    return null;
  };
  protoOf(NonDisposableHandle).gk = function () {
  };
  protoOf(NonDisposableHandle).zi = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.ob(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.nh())
      throw _this__u8e3s4.mi();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.ob(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.wi();
    return _this__u8e3s4.si($completion);
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.ob(Key_instance_3);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nh();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new DisposeOnCompletion(handle);
    return _this__u8e3s4.pi(tmp$ret$1);
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.vi(CancellationException_init_$Create$_0(message, cause));
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.gq_1 = isActive;
  }
  protoOf(Empty).nh = function () {
    return this.gq_1;
  };
  protoOf(Empty).uk = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.gq_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).nh = function () {
    return true;
  };
  protoOf(NodeList).uk = function () {
    return this;
  };
  protoOf(NodeList).kq = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    this_0.z5('List{');
    this_0.z5(state);
    this_0.z5('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.vk_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var node = cur;
        if (first)
          first = false;
        else {
          this_0.z5(', ');
        }
        this_0.y5(node);
      }
      cur = cur.vk_1;
    }
    this_0.z5(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.kq('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).tk = function () {
    var tmp = this.sk_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).nh = function () {
    return true;
  };
  protoOf(JobNode).uk = function () {
    return null;
  };
  protoOf(JobNode).gk = function () {
    return this.tk().ti(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.tk()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.rq_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.rq_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sh_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.sq();
    var exceptions = state.tq(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.hj(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).on();
      }
    }
    if (!wasCancelling) {
      $this.ej(finalException);
    }
    $this.rh(finalState);
    var casSuccess = $this.gh_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.e1()) {
      if (state.sq()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.qh() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.i1(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.v();
        while (tmp0_iterator_0.w()) {
          var element_0 = tmp0_iterator_0.y();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.n() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.n());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.v();
    while (tmp0_iterator.w()) {
      var exception = tmp0_iterator.y();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.s(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.gh_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.ej(null);
    $this.rh(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.fi();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.gk();
      $this.ei(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.sh_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.yh(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.uk();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.ej(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.vk_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.vk_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.yh(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.fj())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.fi();
    if (parent === null ? true : parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.zi(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.vk_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var node = cur;
        try {
          node.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.vk_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.yh(tmp0_safe_receiver_0);
    }
    return Unit_instance;
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.gq_1)
        return 0;
      if (!$this.gh_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.li();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.gh_1.atomicfu$compareAndSet(state, state.uq_1))
          return -1;
        $this.li();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.sk_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.hi() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.yk(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.gq_1 ? list : new InactiveNodeList(list);
    $this.gh_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.bl(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.vk_1;
    $this.gh_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var state = $this.hi();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jl();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ResumeOnCompletion(cancellable);
    disposeOnCancellation(cancellable, $this.pi(tmp$ret$1));
    return cancellable.ll();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var state = $this.hi();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.vq();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.qh() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).cj();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var state = $this.hi();
        if (state instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (state.wq())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = state.sq();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            state.xq(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = state.yq();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, state.oq_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (state.nh()) {
              if (tryMakeCancelling($this, state, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, state, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString_0(state);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.uk();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.gh_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.vq())
      return get_COMPLETING_ALREADY();
    finishing.zq(true);
    if (!(finishing === state)) {
      if (!$this.gh_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.sq();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.xq(tmp0_safe_receiver.sh_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.yq();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sh_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.uk();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.er_1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.ri(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_instance;
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.xh(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.xk_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.wk_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.vk_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.xk_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.sq() ? 'Cancelling' : state.vq() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.nh() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.oq_1 = list;
    this.pq_1 = atomic$boolean$1(isCompleting);
    this.qq_1 = atomic$ref$1(rootCause);
    this.rq_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).uk = function () {
    return this.oq_1;
  };
  protoOf(Finishing).zq = function (value) {
    this.pq_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).vq = function () {
    return this.pq_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).fr = function (value) {
    this.qq_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).yq = function () {
    return this.qq_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).wq = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).sq = function () {
    return !(this.yq() == null);
  };
  protoOf(Finishing).nh = function () {
    return this.yq() == null;
  };
  protoOf(Finishing).tq = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        this_0.s(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.yq();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.y1(0, rootCause);
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.s(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).xq = function (exception) {
    var rootCause = this.yq();
    if (rootCause == null) {
      this.fr(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        this_0.s(eh);
        this_0.s(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).s(exception);
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.sq() + ', completing=' + this.vq() + ', rootCause=' + this.yq() + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.oq_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.kr_1 = parent;
    this.lr_1 = state;
    this.mr_1 = child;
    this.nr_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).hk = function (cause) {
    continueCompleting(this.kr_1, this.lr_1, this.mr_1, this.nr_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.hk(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.ur_1 = job;
  }
  protoOf(AwaitContinuation).ao = function (parent) {
    var state = this.ur_1.hi();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.yq();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.sh_1;
    return parent.mi();
  };
  protoOf(AwaitContinuation).zh = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.jl();
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ResumeAwaitOnCompletion(cont);
    disposeOnCancellation(cont, $this.pi(tmp$ret$1));
    return cont.ll();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.ds_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).ns = function ($this$sequence, $completion) {
    var tmp = this.os($this$sequence, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).fc = function (p1, $completion) {
    return this.ns(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 8;
            this.fs_1 = this.ds_1.hi();
            var tmp_0 = this.fs_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.hb_1 = 6;
              suspendResult = this.es_1.fe(this.fs_1.er_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.fs_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.gs_1 = this.fs_1.uk();
                if (this.gs_1 == null) {
                  this.hs_1 = null;
                  this.hb_1 = 5;
                  continue $sm;
                } else {
                  var tmp_2 = this;
                  tmp_2.is_1 = this.gs_1;
                  var tmp_3 = this;
                  tmp_3.js_1 = this.is_1;
                  var tmp_4 = this;
                  tmp_4.ks_1 = this.js_1;
                  this.ls_1 = this.ks_1.vk_1;
                  this.hb_1 = 1;
                  continue $sm;
                }
              } else {
                this.hb_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.ls_1, this.ks_1)) {
              this.hb_1 = 4;
              continue $sm;
            }

            var tmp_5 = this.ls_1;
            if (tmp_5 instanceof ChildHandleNode) {
              var tmp_6 = this;
              tmp_6.ms_1 = this.ls_1;
              this.hb_1 = 2;
              suspendResult = this.es_1.fe(this.ms_1.er_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 3;
              continue $sm;
            }

          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.ls_1 = this.ls_1.vk_1;
            this.hb_1 = 1;
            continue $sm;
          case 4:
            this.hs_1 = Unit_instance;
            this.hb_1 = 5;
            continue $sm;
          case 5:
            this.hb_1 = 7;
            continue $sm;
          case 6:
            this.hb_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 8) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).os = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.ds_1, completion);
    i.es_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.ns($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.gh_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.hh_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).t2 = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).ei = function (value) {
    this.hh_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).fi = function () {
    return this.hh_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).gi = function () {
    var tmp0_safe_receiver = this.fi();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gi();
  };
  protoOf(JobSupport).ih = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.ei(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.ki();
    var handle = parent.dj(this);
    this.ei(handle);
    if (this.ii()) {
      handle.gk();
      this.ei(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).hi = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.gh_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state instanceof OpDescriptor))
        return state;
      state.ps(this);
    }
  };
  protoOf(JobSupport).nh = function () {
    var state = this.hi();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.nh();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).ii = function () {
    var tmp = this.hi();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).ji = function () {
    var state = this.hi();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.sq();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).ki = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var state = this.hi();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).li = function () {
  };
  protoOf(JobSupport).mi = function () {
    var state = this.hi();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.yq();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.ni(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.oi(state.sh_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).ni = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.qh() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).oi = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.ni(_this__u8e3s4, message) : $super.ni.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).pi = function (handler) {
    return this.qi(false, true, handler);
  };
  protoOf(JobSupport).qi = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var state = this.hi();
        if (state instanceof Empty) {
          if (state.gq_1) {
            if (this.gh_1.atomicfu$compareAndSet(state, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.uk();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_instance;
              var tmp;
              if (onCancelling) {
                tmp = state instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
                rootCause = state.yq();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !state.vq();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, state, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_instance;
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, state, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.sh_1);
            }
            return NonDisposableHandle_instance;
          }
        }
      }
    }
  };
  protoOf(JobSupport).si = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.u6();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).ti = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var state = this.hi();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.gh_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.uk() == null)) {
            node.zk();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).ui = function () {
    return false;
  };
  protoOf(JobSupport).vi = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.qh() : null, null, this);
    } else {
      tmp = cause;
    }
    this.xi(tmp);
  };
  protoOf(JobSupport).qh = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).xi = function (cause) {
    this.bj(cause);
  };
  protoOf(JobSupport).yi = function (parentJob) {
    this.bj(parentJob);
  };
  protoOf(JobSupport).zi = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.bj(cause) ? this.gj() : false;
  };
  protoOf(JobSupport).aj = function (cause) {
    return this.bj(cause);
  };
  protoOf(JobSupport).bj = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ui()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.xh(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).cj = function () {
    var state = this.hi();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.yq();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.sh_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).yo = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var state = this.hi();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.xh(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).vh = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var state = this.hi();
        var finalState = tryMakeCompleting(this, state, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).fq = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).dj = function (child) {
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.ri(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).yh = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).ej = function (cause) {
  };
  protoOf(JobSupport).fj = function () {
    return false;
  };
  protoOf(JobSupport).gj = function () {
    return true;
  };
  protoOf(JobSupport).hj = function (exception) {
    return false;
  };
  protoOf(JobSupport).rh = function (state) {
  };
  protoOf(JobSupport).xh = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.ij() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).ij = function () {
    return this.zh() + '{' + stateString(this, this.hi()) + '}';
  };
  protoOf(JobSupport).zh = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).jj = function () {
    var state = this.hi();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.sh_1;
    return unboxState(state);
  };
  protoOf(JobSupport).to = function ($completion) {
    $l$loop: while (true) {
      var state = this.hi();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.sh_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.uq_1 = list;
  }
  protoOf(InactiveNodeList).uk = function () {
    return this.uq_1;
  };
  protoOf(InactiveNodeList).nh = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.uq_1.kq('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.er_1 = childJob;
  }
  protoOf(ChildHandleNode).gi = function () {
    return this.tk();
  };
  protoOf(ChildHandleNode).hk = function (cause) {
    return this.er_1.yi(this.tk());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.hk(cause);
  };
  protoOf(ChildHandleNode).zi = function (cause) {
    return this.tk().zi(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.us_1 = handler;
    this.vs_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).hk = function (cause) {
    if (this.vs_1.atomicfu$compareAndSet(0, 1))
      this.us_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.hk(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.at_1 = handler;
  }
  protoOf(InvokeOnCompletion).hk = function (cause) {
    return this.at_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.hk(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.ft_1 = continuation;
  }
  protoOf(ResumeOnCompletion).hk = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.ft_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.v6(tmp$ret$0);
    return Unit_instance;
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.hk(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gt_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.lt_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).hk = function (cause) {
    var state = this.tk().hi();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = this.lt_1;
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.sh_1;
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      this_0.v6(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resume' call
      var this_1 = this.lt_1;
      var tmp = unboxState(state);
      // Inline function 'kotlin.Companion.success' call
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(value);
      this_1.v6(tmp$ret$2);
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.hk(cause);
  };
  function IncompleteStateBox(state) {
    this.gt_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.qt_1 = child;
  }
  protoOf(ChildContinuation).hk = function (cause) {
    this.qt_1.zn(this.qt_1.ao(this.tk()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.hk(cause);
  };
  function handlesException($this) {
    var tmp = $this.fi();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tk();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.gj())
        return true;
      var tmp_1 = parentJob.fi();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.tk();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.ih(parent);
    this.tt_1 = handlesException(this);
  }
  protoOf(JobImpl).ui = function () {
    return true;
  };
  protoOf(JobImpl).gj = function () {
    return this.tt_1;
  };
  protoOf(JobImpl).ut = function (exception) {
    return this.yo(new CompletedExceptionally(exception));
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.zt_1 = handle;
  }
  protoOf(DisposeOnCompletion).hk = function (cause) {
    return this.zt_1.gk();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.hk(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.cu();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).cu = function () {
    var main = Dispatchers_getInstance().lp();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.bu();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).zi = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.gu_1 = coroutine;
  }
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$4(timeMillis, block, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.u6(), uCont);
    this.wu_1 = time;
  }
  protoOf(TimeoutCoroutine).go = function () {
    this.aj(TimeoutCancellationException_0(this.wu_1, get_delay(this.lh_1), this));
  };
  protoOf(TimeoutCoroutine).zh = function () {
    return protoOf(ScopeCoroutine).zh.call(this) + '(timeMillis=' + this.wu_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.cm_1;
    var context = cont.u6();
    disposeOnCompletion(coroutine, get_delay(context).np(coroutine.wu_1, coroutine, coroutine.lh_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine) {
    var tmp0_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance_0();
      var tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp0_safe_receiver.op(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var message = tmp1_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp1_elvis_lhs;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$4(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pu_1 = timeMillis;
    this.qu_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$4).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            if (this.pu_1.a7(new Long(0, 0)) <= 0)
              return null;
            this.ru_1 = {_v: null};
            this.ib_1 = 2;
            this.hb_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.pu_1, this);
            this.ru_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.qu_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.ib_1 = 3;
            var tmp_0 = this.kb_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.kb_1;
              if (e.gu_1 === this.ru_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.kb_1;
            }

          case 3:
            throw this.kb_1;
          case 4:
            this.ib_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.ib_1 === 3) {
          throw e_0;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).cp = function (context) {
    return false;
  };
  protoOf(Unconfined).dp = function (context, block) {
    var yieldContext = context.ob(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.zu_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function YieldContext() {
    AbstractCoroutineContextElement.call(this, Key_instance_4);
    this.zu_1 = false;
  }
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var context = $completion.u6();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.rm_1.cp(context)) {
        cont.av(context, Unit_instance);
      } else {
        var yieldContext = new YieldContext();
        cont.av(context.ef(yieldContext), Unit_instance);
        if (yieldContext.zu_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.gv_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.fv_1 = channel;
    this.gv_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).hv = function () {
    return ensureNotNull(this.fv_1);
  };
  protoOf(ChannelSegment).iv = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).jv = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).kv = function (index) {
    var tmp = this.gv_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).lv = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.kv(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ChannelSegment.retrieveElement.<anonymous>' call
    this.mv(index);
    return this_0;
  };
  protoOf(ChannelSegment).mv = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).nv = function (index) {
    return this.gv_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).ov = function (index, value) {
    this.gv_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).pv = function (index, from, to) {
    return this.gv_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).qv = function (index, update) {
    return this.gv_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).fn = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.kv(index_0);
    $l$loop: while (true) {
      var cur = this.nv(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.pv(index_0, cur, update)) {
          this.mv(index_0);
          this.dw(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.hv().sv_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() ? true : cur === get_INTERRUPTED_RCV()) {
          this.mv(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.hv().sv_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() ? true : cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() ? true : cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).dw = function (index, receiver) {
    if (receiver) {
      var tmp = this.hv();
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = this.dn_1;
      var other = get_SEGMENT_SIZE();
      var tmp$ret$1 = this_0.m9(toLong(other)).qa(toLong(index));
      tmp.ew(tmp$ret$1);
    }
    this.fw();
  };
  function onClosedHasNext($this) {
    $this.rw_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.tw_1.uw();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>' call
      $this.sw_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.tw_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension($this, this_0, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.a7(this_0.vw()) < 0) {
          segment.pw();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.yv_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.ww()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.uv_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.l9(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.sa(toLong(other_0)).db();
            if (!segment_0.dn_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this_0, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              tmp_0 = Unit_instance;
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
              if (r_0.a7(this_0.vw()) < 0) {
                segment_0.pw();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.pw();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.rw_1 = element;
              $this.sw_1 = null;
              var tmp0_safe_receiver = $this.tw_1.sv_1;
              cancellable.om(true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.u6()));
              tmp_0 = Unit_instance;
            }
            break $l$block_0;
          }
        }
      } else {
        segment.pw();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.hasNextOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.rw_1 = element_0;
        $this.sw_1 = null;
        var tmp0_safe_receiver_0 = $this.tw_1.sv_1;
        cancellable.om(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.u6()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.bo();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.ll();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.sw_1);
    $this.sw_1 = null;
    $this.rw_1 = get_CHANNEL_CLOSED();
    var cause = $this.tw_1.uw();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.v6(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.v6(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$8(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fx_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$8).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 8;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.hx_1 = this.fx_1.tw_1;
            var tmp_1 = this;
            tmp_1.ix_1 = null;
            this.jx_1 = this.hx_1.yv_1.kotlinx$atomicfu$value;
            this.hb_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.hb_1 = 9;
              continue $sm;
            }

            if (this.hx_1.ww()) {
              var tmp_2 = this;
              tmp_2.gx_1 = onClosedHasNext(this.fx_1);
              this.hb_1 = 10;
              continue $sm;
            } else {
              this.hb_1 = 3;
              continue $sm;
            }

          case 3:
            this.kx_1 = this.hx_1.uv_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var this_0 = this.kx_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.lx_1 = this_0.l9(toLong(other));
            var tmp_4 = this;
            var this_1 = this.kx_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.mx_1 = this_1.sa(toLong(other_0)).db();
            if (!this.jx_1.dn_1.equals(this.lx_1)) {
              this.nx_1 = findSegmentReceive(this.hx_1, this.lx_1, this.jx_1);
              if (this.nx_1 == null) {
                this.hb_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.ox_1 = this.nx_1;
                this.hb_1 = 4;
                continue $sm;
              }
            } else {
              this.hb_1 = 5;
              continue $sm;
            }

          case 4:
            this.jx_1 = this.ox_1;
            this.hb_1 = 5;
            continue $sm;
          case 5:
            this.px_1 = updateCellReceive(this.hx_1, this.jx_1, this.mx_1, this.kx_1, this.ix_1);
            if (this.px_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_6 = this;
              var tmp_7 = this.ix_1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.hx_1, this.jx_1, this.mx_1);
              }
              this.jx_1;
              this.mx_1;
              this.kx_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.px_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.kx_1.a7(this.hx_1.vw()) < 0) {
                  this.jx_1.pw();
                }
                this.hb_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.px_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_9 = this;
                  tmp_9.rx_1 = this.jx_1;
                  var tmp_10 = this;
                  tmp_10.sx_1 = this.mx_1;
                  var tmp_11 = this;
                  tmp_11.tx_1 = this.kx_1;
                  this.hb_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.fx_1, this.rx_1, this.sx_1, this.tx_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.jx_1.pw();
                  var tmp_13 = this.px_1;
                  var element = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                  this.fx_1.rw_1 = element;
                  tmp_12.qx_1 = true;
                  this.hb_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_14 = this;
            return suspendResult;
          case 7:
            this.gx_1 = this.qx_1;
            this.hb_1 = 10;
            continue $sm;
          case 8:
            throw this.kb_1;
          case 9:
            if (false) {
              this.hb_1 = 1;
              continue $sm;
            }

            this.hb_1 = 10;
            continue $sm;
          case 10:
            return this.gx_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 8) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.vv_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<get-isRendezvousOrUnlimited>.<anonymous>' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it.equals(new Long(0, 0)) ? true : it.equals(new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jl();
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onClosedSend.<anonymous>' call
      var tmp0_safe_receiver = $this.sv_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp1_safe_receiver, $this.ux());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.v6(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.ux();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.v6(tmp$ret$3);
    }
    return cancellable.ll();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      var tmp0_subject = updateCellSend($this, segment, index, element, s, cancellable, false);
      if (tmp0_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
        segment.pw();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.v6(tmp$ret$0);
      } else if (tmp0_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.v6(tmp$ret$2);
      } else if (tmp0_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
        prepareSenderForSuspension(cancellable, $this, segment, index);
      } else if (tmp0_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
        if (s.a7($this.vx()) < 0) {
          segment.pw();
        }
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        onClosedSendOnNoWaiterSuspend($this, element, cancellable);
      } else if (tmp0_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
        segment.pw();
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
          var segment_0 = $this.xv_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            var sendersAndCloseStatusCur = $this.tv_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
            var s_0 = sendersAndCloseStatusCur.za(new Long(-1, 268435455));
            var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = s_0.l9(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = s_0.sa(toLong(other_0)).db();
            if (!segment_0.dn_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                var tmp_0;
                if (closed) {
                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                } else {
                  continue $l$loop_0;
                }
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var tmp1_subject = updateCellSend($this, segment_0, i, element, s_0, cancellable, closed);
            if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
              segment_0.pw();
              // Inline function 'kotlin.coroutines.resume' call
              // Inline function 'kotlin.Companion.success' call
              var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
              cancellable.v6(tmp$ret$8);
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
              // Inline function 'kotlin.coroutines.resume' call
              // Inline function 'kotlin.Companion.success' call
              var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
              cancellable.v6(tmp$ret$10);
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
              if (closed) {
                segment_0.fw();
                onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                break $l$block_5;
              }
              var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp2_safe_receiver == null)
                null;
              else {
                prepareSenderForSuspension(tmp2_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter.<anonymous>' call
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
              if (s_0.a7($this.vx()) < 0) {
                segment_0.pw();
              }
              onClosedSendOnNoWaiterSuspend($this, element, cancellable);
              break $l$block_5;
            } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
              segment_0.pw();
              continue $l$loop_0;
            } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      } else {
        // Inline function 'kotlin.error' call
        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.bo();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.ll();
  }
  function prepareSenderForSuspension(_this__u8e3s4, $this, segment, index) {
    _this__u8e3s4.eo(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.sv_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.u6());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.ux(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.v6(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.jv(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.nv(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.pv(index, null, get_BUFFERED())) {
          return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m();
        }
      } else {
        if (waiter == null) {
          return _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m();
        } else {
          if (segment.pv(index, null, waiter))
            return _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf();
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.mv(index);
        var tmp;
        if (tryResumeReceiver(state, $this, element)) {
          segment.ov(index, get_DONE_RCV());
          $this.wx();
          tmp = _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8();
        } else {
          if (!(segment.qv(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.dw(index, true);
          }
          tmp = _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.nv(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) ? !closed : false) {
          if (segment.pv(index, null, get_BUFFERED())) {
            return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m();
          }
        } else {
          if (closed) {
            if (segment.pv(index, null, get_INTERRUPTED_SEND())) {
              segment.dw(index, false);
              return _get_RESULT_CLOSED_$accessor$yt74tm_10v48j();
            }
          } else if (waiter == null)
            return _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m();
          else if (segment.pv(index, null, waiter))
            return _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf();
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.pv(index, state, get_BUFFERED())) {
          return _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m();
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.mv(index);
        return _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
      } else if (state === get_POISONED()) {
        segment.mv(index);
        return _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.mv(index);
        completeCloseOrCancel($this);
        return _get_RESULT_CLOSED_$accessor$yt74tm_10v48j();
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.mv(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.xx_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver(receiver, $this, element)) {
          segment.ov(index, get_DONE_RCV());
          $this.wx();
          tmp_0 = _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8();
        } else {
          if (!(segment.qv(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.dw(index, true);
          }
          tmp_0 = _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0();
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m(curSendersAndCloseStatus, $this))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = curSendersAndCloseStatus.za(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.a7(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = $this.vx();
      var other = $this.rv_1;
      var tmp$ret$0 = this_0.qa(toLong(other));
      tmp = curSenders.a7(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver(_this__u8e3s4, $this, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.cy($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_1().ay(element);
        var tmp1_safe_receiver = $this.sv_1;
        tmp = tryResume0(_this__u8e3s4.by_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFun(tmp1_safe_receiver, element, _this__u8e3s4.by_1.u6()));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.yx(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.sv_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun(tmp2_safe_receiver, element, _this__u8e3s4.u6()));
          } else {
            var message = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension(cancellable, $this, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.a7($this.vw()) < 0) {
          segment.pw();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.yv_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.ww()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.uv_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.l9(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.sa(toLong(other_0)).db();
            if (!segment_0.dn_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp1_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              tmp_0 = Unit_instance;
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
              if (r_0.a7($this.vw()) < 0) {
                segment_0.pw();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.pw();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              var tmp0_safe_receiver = $this.sv_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.u6());
              cancellable.om(element, onCancellation);
              tmp_0 = Unit_instance;
            }
            break $l$block_0;
          }
        }
      } else {
        segment.pw();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        var tmp0_safe_receiver_0 = $this.sv_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.u6());
        cancellable.om(element_0, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.bo();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.ll();
  }
  function prepareReceiverForSuspension(_this__u8e3s4, $this, segment, index) {
    $this.dy();
    _this__u8e3s4.eo(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.v6(tmp$ret$0);
  }
  function receiveCatchingOnNoWaiterSuspend($this, segment, index, r, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveCatchingOnNoWaiterSuspend.<anonymous>' call
      var waiter = new ReceiveCatching(cancellable instanceof CancellableContinuationImpl ? cancellable : THROW_CCE());
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, waiter);
      if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
        prepareReceiverForSuspension(waiter, $this, segment, index);
      } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.a7($this.vw()) < 0) {
          segment.pw();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.yv_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.ww()) {
              onClosedReceiveCatchingOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.uv_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.l9(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.sa(toLong(other_0)).db();
            if (!segment_0.dn_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, waiter);
            var tmp_0;
            if (updCellResult_0 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp1_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, $this, segment_0, i);
              }
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter.<anonymous>' call
              tmp_0 = Unit_instance;
            } else if (updCellResult_0 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
              if (r_0.a7($this.vw()) < 0) {
                segment_0.pw();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.pw();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              var tmp_1 = Companion_getInstance_1().ay(element);
              var tmp0_safe_receiver = $this.sv_1;
              cancellable.om(new ChannelResult(tmp_1), tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cancellable.u6()));
              tmp_0 = Unit_instance;
            }
            break $l$block_0;
          }
        }
      } else {
        segment.pw();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveCatchingOnNoWaiterSuspend.<anonymous>.<anonymous>' call
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        var tmp_2 = Companion_getInstance_1().ay(element_0);
        var tmp0_safe_receiver_0 = $this.sv_1;
        cancellable.om(new ChannelResult(tmp_2), tmp0_safe_receiver_0 == null ? null : bindCancellationFun(tmp0_safe_receiver_0, element_0, cancellable.u6()));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.bo();
        throw e;
      } else {
        throw $p;
      }
    }
    var tmp_3 = cancellable.ll();
    if (tmp_3 === get_COROUTINE_SUSPENDED())
      return tmp_3;
    return tmp_3;
  }
  function onClosedReceiveCatchingOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resume' call
    // Inline function 'kotlin.Companion.success' call
    var value = new ChannelResult(Companion_getInstance_1().fy($this.uw()));
    var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
    cont.v6(tmp$ret$0);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.nv(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.tv_1.kotlinx$atomicfu$value.za(new Long(-1, 268435455));
      if (r.a7(senders) >= 0) {
        if (waiter === null) {
          return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
        }
        if (segment.pv(index, state, waiter)) {
          expandBuffer($this);
          return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.pv(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.lv(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.nv(index);
      if (state === null ? true : state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.tv_1.kotlinx$atomicfu$value.za(new Long(-1, 268435455));
        if (r.a7(senders) < 0) {
          if (segment.pv(index, state, get_POISONED())) {
            expandBuffer($this);
            return _get_FAILED_$accessor$yt74tm_h47uk8();
          }
        } else {
          if (waiter === null) {
            return _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky();
          }
          if (segment.pv(index, state, waiter)) {
            expandBuffer($this);
            return _get_SUSPEND_$accessor$yt74tm_ccb8g1();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.pv(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.lv(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      else if (state === get_POISONED())
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return _get_FAILED_$accessor$yt74tm_h47uk8();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.pv(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.xx_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender(sender, $this, segment, index)) {
            segment.ov(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.lv(index);
          } else {
            segment.ov(index, get_INTERRUPTED_SEND());
            segment.dw(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = _get_FAILED_$accessor$yt74tm_h47uk8();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender(_this__u8e3s4, $this, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_instance);
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.ky($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.mv(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.gy_1, true);
        } else {
          var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.zv_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.vv_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = b.l9(toLong(other));
      var s = $this.vw();
      if (s.a7(b) <= 0) {
        if (segment.dn_1.a7(id) < 0 ? !(segment.lw() == null) : false) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!segment.dn_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = b.sa(toLong(other_0)).db();
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.nv(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.a7($this.uv_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.pv(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender(state, $this, segment, index)) {
            segment.ov(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.ov(index, get_INTERRUPTED_SEND());
            segment.dw(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.nv(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.a7($this.uv_1.kotlinx$atomicfu$value) < 0) {
          if (segment.pv(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.pv(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender(state, $this, segment, index)) {
              segment.ov(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.ov(index, get_INTERRUPTED_SEND());
              segment.dw(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.pv(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if ((state === get_POISONED() ? true : state === get_DONE_RCV()) ? true : state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.incCompletedExpandBufferAttempts.<anonymous>' call
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!$this.wv_1.atomicfu$addAndGet$long(nAttempts).za(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.wv_1.kotlinx$atomicfu$value.za(new Long(0, 1073741824)).equals(new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function BufferedChannelIterator($outer) {
    this.tw_1 = $outer;
    this.rw_1 = get_NO_RECEIVE_RESULT();
    this.sw_1 = null;
  }
  protoOf(BufferedChannelIterator).ly = function ($completion) {
    var tmp = new $hasNextCOROUTINE$8(this, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BufferedChannelIterator).eo = function (segment, index) {
    var tmp0_safe_receiver = this.sw_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.eo(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).y = function () {
    var result = this.rw_1;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannelIterator.next.<anonymous>' call
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.rw_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.tw_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).yx = function (element) {
    var cont = ensureNotNull(this.sw_1);
    this.sw_1 = null;
    this.rw_1 = element;
    var tmp0_safe_receiver = this.tw_1.sv_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, element, cont.u6()));
  };
  protoOf(BufferedChannelIterator).my = function () {
    var cont = ensureNotNull(this.sw_1);
    this.sw_1 = null;
    this.rw_1 = get_CHANNEL_CLOSED();
    var cause = this.tw_1.uw();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.v6(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.v6(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.uw();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      var this_0 = $this.cw_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.invokeCloseHandler.<anonymous>' call
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.uw());
  }
  function markClosed($this) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.tv_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markClosed.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.xa(60).db()) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = cur.za(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = cur.za(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.tv_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancelled.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = cur.za(new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = $this.tv_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.markCancellationStarted.<anonymous>' call
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.xa(60).db() === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = cur.za(new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_instance;
          break $l$block;
        }
      }
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.ny();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.py()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.oy(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.zv_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it = $this.xv_1.kotlinx$atomicfu$value;
    var tmp;
    if (it.dn_1.a7(lastSegment.dn_1) > 0) {
      lastSegment = it;
      tmp = Unit_instance;
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    var it_0 = $this.yv_1.kotlinx$atomicfu$value;
    var tmp_0;
    if (it_0.dn_1.a7(lastSegment.dn_1) > 0) {
      lastSegment = it_0;
      tmp_0 = Unit_instance;
    }
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.dn_1;
          var other = get_SEGMENT_SIZE();
          var globalIndex = this_0.m9(toLong(other)).qa(toLong(index));
          if (globalIndex.a7($this.vx()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.nv(index);
            if (state === null ? true : state === get_IN_BUFFER()) {
              if (segment.pv(index, state, get_CHANNEL_CLOSED())) {
                segment.fw();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.ow();
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.sv_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.dn_1;
          var other = get_SEGMENT_SIZE();
          var globalIndex = this_0.m9(toLong(other)).qa(toLong(index));
          update_cell: while (true) {
            var state = segment.nv(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.a7($this.vx()) < 0)
                  break process_segments;
                if (segment.pv(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.kv(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.mv(index);
                  segment.fw();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() ? true : state === null) {
                  if (segment.pv(index, state, get_CHANNEL_CLOSED())) {
                    segment.fw();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex.a7($this.vx()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.xx_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.pv(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.kv(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.mv(index);
                      segment.fw();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() ? true : state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp1_elvis_lhs = segment.ow();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      segment = tmp_1;
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var this_1 = suspendedSenders;
      var tmp0_subject = _get_holder__f6h5pd(this_1);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
          var tmp_2 = _get_holder__f6h5pd(this_1);
          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel(it, $this);
        } else {
          var tmp_3 = _get_holder__f6h5pd(this_1);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.n() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.removeUnprocessedElements.<anonymous>' call
              var it_0 = list.i1(i);
              resumeSenderOnCancelledChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp2_safe_receiver = undeliveredElementException;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp2_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.dn_1;
          var other = get_SEGMENT_SIZE();
          if (this_0.m9(toLong(other)).qa(toLong(index)).a7(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.nv(index);
            if (state === null ? true : state === get_IN_BUFFER()) {
              if (segment.pv(index, state, get_CHANNEL_CLOSED())) {
                segment.fw();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.pv(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.xx_1);
                  segment.dw(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.pv(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.dw(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.ow();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var this_1 = suspendedReceivers;
      var tmp0_subject = _get_holder__f6h5pd(this_1);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
          var tmp = _get_holder__f6h5pd(this_1);
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel(it, $this);
        } else {
          var tmp_0 = _get_holder__f6h5pd(this_1);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.n() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.cancelSuspendedReceiveRequests.<anonymous>' call
              var it_0 = list.i1(i);
              resumeReceiverOnClosedChannel(it_0, $this);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, true);
  }
  function resumeSenderOnCancelledChannel(_this__u8e3s4, $this) {
    return resumeWaiterOnClosedChannel(_this__u8e3s4, $this, false);
  }
  function resumeWaiterOnClosedChannel(_this__u8e3s4, $this, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = _this__u8e3s4.gy_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.v6(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.ux();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.v6(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = _this__u8e3s4.by_1;
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_1().fy($this.uw()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          this_1.v6(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.my();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance)) {
              _this__u8e3s4.cy($this, get_CHANNEL_CLOSED());
            } else {
              var message = 'Unexpected waiter: ' + _this__u8e3s4;
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl(_this__u8e3s4, $this) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (sendersAndCloseStatusCur.xa(60).db()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur.za(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.qy() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur.za(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + sendersAndCloseStatusCur.xa(60).db();
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.nv(index);
      if (state === null ? true : state === get_IN_BUFFER()) {
        if (segment.pv(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex.equals($this.vx());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.xv_1;
      var createNewSegment = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.dn_1.a7(to.dn_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.hw()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.iw()) {
                  cur.x();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.iw()) {
                to.x();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentSend.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      // Inline function 'kotlin.Long.times' call
      var this_1 = startFrom.dn_1;
      var other = get_SEGMENT_SIZE();
      if (this_1.m9(toLong(other)).a7($this.vx()) < 0) {
        startFrom.pw();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.dn_1.a7(id) > 0) {
        // Inline function 'kotlin.Long.times' call
        var this_2 = segment.dn_1;
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_2.m9(toLong(other_0));
        updateSendersCounterIfLower($this, tmp$ret$3);
        // Inline function 'kotlin.Long.times' call
        var this_3 = segment.dn_1;
        var other_1 = get_SEGMENT_SIZE();
        if (this_3.m9(toLong(other_1)).a7($this.vx()) < 0) {
          segment.pw();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.yv_1;
      var createNewSegment = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.dn_1.a7(to.dn_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.hw()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.iw()) {
                  cur.x();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.iw()) {
                to.x();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentReceive.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      // Inline function 'kotlin.Long.times' call
      var this_1 = startFrom.dn_1;
      var other = get_SEGMENT_SIZE();
      if (this_1.m9(toLong(other)).a7($this.vw()) < 0) {
        startFrom.pw();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        // Inline function 'kotlin.Long.div' call
        var this_2 = _get_bufferEndCounter__2d4hee($this);
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_2.l9(toLong(other_0));
        tmp_1 = id.a7(tmp$ret$3) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          var this_3 = $this.zv_1;
          while (true) {
            // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
            var cur_0 = this_3.kotlinx$atomicfu$value;
            if (cur_0.dn_1.a7(segment.dn_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.hw()) {
              break $l$block_5;
            }
            if (this_3.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.iw()) {
                cur_0.x();
              }
              break $l$block_5;
            }
            if (segment.iw()) {
              segment.x();
            }
          }
        }
      }
      var tmp_2;
      if (segment.dn_1.a7(id) > 0) {
        // Inline function 'kotlin.Long.times' call
        var this_4 = segment.dn_1;
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$5 = this_4.m9(toLong(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$5);
        // Inline function 'kotlin.Long.times' call
        var this_5 = segment.dn_1;
        var other_2 = get_SEGMENT_SIZE();
        if (this_5.m9(toLong(other_2)).a7($this.vw()) < 0) {
          segment.pw();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    // Inline function 'kotlin.let' call
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.zv_1;
      var createNewSegment = createSegmentFunction();
      while (true) {
        var s = findSegmentInternal(startFrom, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.dn_1.a7(to.dn_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!to.hw()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.iw()) {
                  cur.x();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (to.iw()) {
                to.x();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.findSegmentBufferEnd.<anonymous>' call
    var it = tmp$ret$1;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.dn_1.a7(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.qa(toLong(1));
        // Inline function 'kotlin.Long.times' call
        var this_1 = segment.dn_1;
        var other = get_SEGMENT_SIZE();
        var tmp$ret$3 = this_1.m9(toLong(other));
        if ($this.vv_1.atomicfu$compareAndSet(tmp_2, tmp$ret$3)) {
          // Inline function 'kotlin.Long.times' call
          var this_2 = segment.dn_1;
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$4 = this_2.m9(toLong(other_0));
          incCompletedExpandBufferAttempts($this, tmp$ret$4.ra(currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.dn_1.a7(id) < 0) {
      var tmp0_elvis_lhs = segment.lw();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.gw()) {
        var tmp1_elvis_lhs = segment.lw();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var this_0 = $this.zv_1;
        var to = segment;
        while (true) {
          // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
          var cur = this_0.kotlinx$atomicfu$value;
          if (cur.dn_1.a7(to.dn_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!to.hw()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (this_0.atomicfu$compareAndSet(cur, to)) {
            if (cur.iw()) {
              cur.x();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (to.iw()) {
            to.x();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.tv_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateSendersCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur.za(new Long(-1, 268435455));
      if (curCounter.a7(value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = cur.xa(60).db();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.tv_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.uv_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.updateReceiversCounterIfLower.<anonymous>' call
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur.a7(value) >= 0)
        return Unit_instance;
      if ($this.uv_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (it) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.sv_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.u6());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _anonymous_parameter_1__qggqgd, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function $sendCOROUTINE$5(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.az_1 = _this__u8e3s4;
    this.bz_1 = element;
  }
  protoOf($sendCOROUTINE$5).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 11;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.dz_1 = this.az_1;
            var tmp_1 = this;
            tmp_1.ez_1 = this.bz_1;
            var tmp_2 = this;
            tmp_2.fz_1 = null;
            this.gz_1 = this.dz_1.xv_1.kotlinx$atomicfu$value;
            this.hb_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.hb_1 = 12;
              continue $sm;
            }

            this.hz_1 = this.dz_1.tv_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.iz_1 = this.hz_1.za(new Long(-1, 268435455));
            this.jz_1 = _get_isClosedForSend0__kxgf9m(this.hz_1, this.dz_1);
            var tmp_4 = this;
            var this_0 = this.iz_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.kz_1 = this_0.l9(toLong(other));
            var tmp_5 = this;
            var this_1 = this.iz_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.lz_1 = this_1.sa(toLong(other_0)).db();
            if (!this.gz_1.dn_1.equals(this.kz_1)) {
              this.mz_1 = findSegmentSend(this.dz_1, this.kz_1, this.gz_1);
              if (this.mz_1 == null) {
                if (this.jz_1) {
                  this.hb_1 = 10;
                  suspendResult = onClosedSend(this.az_1, this.bz_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.hb_1 = 2;
                  continue $sm;
                }
              } else {
                this.nz_1 = this.mz_1;
                this.hb_1 = 3;
                continue $sm;
              }
            } else {
              this.hb_1 = 4;
              continue $sm;
            }

          case 3:
            this.gz_1 = this.nz_1;
            this.hb_1 = 4;
            continue $sm;
          case 4:
            this.oz_1 = updateCellSend(this.dz_1, this.gz_1, this.lz_1, this.ez_1, this.iz_1, this.fz_1, this.jz_1);
            if (this.oz_1 === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
              this.gz_1.pw();
              var tmp_6 = this;
              tmp_6.cz_1 = Unit_instance;
              this.hb_1 = 13;
              continue $sm;
            } else {
              if (this.oz_1 === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
                var tmp_7 = this;
                tmp_7.cz_1 = Unit_instance;
                this.hb_1 = 13;
                continue $sm;
              } else {
                if (this.oz_1 === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
                  if (this.jz_1) {
                    this.gz_1.fw();
                    this.hb_1 = 9;
                    suspendResult = onClosedSend(this.az_1, this.bz_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.hb_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (this.oz_1 === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
                    if (this.iz_1.a7(this.dz_1.vx()) < 0) {
                      this.gz_1.pw();
                    }
                    this.hb_1 = 7;
                    suspendResult = onClosedSend(this.az_1, this.bz_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.oz_1 === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
                      this.gz_1.pw();
                      this.hb_1 = 2;
                      continue $sm;
                    } else {
                      if (this.oz_1 === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
                        var tmp_8 = this;
                        tmp_8.pz_1 = this.gz_1;
                        var tmp_9 = this;
                        tmp_9.qz_1 = this.lz_1;
                        var tmp_10 = this;
                        tmp_10.rz_1 = this.ez_1;
                        var tmp_11 = this;
                        tmp_11.sz_1 = this.iz_1;
                        this.hb_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.az_1, this.pz_1, this.qz_1, this.rz_1, this.sz_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.hb_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.hb_1 = 2;
            continue $sm;
          case 6:
            this.cz_1 = suspendResult;
            this.hb_1 = 13;
            continue $sm;
          case 7:
            this.cz_1 = suspendResult;
            this.hb_1 = 13;
            continue $sm;
          case 8:
            var tmp_12 = this.fz_1;
            var tmp2_safe_receiver = (!(tmp_12 == null) ? isInterface(tmp_12, Waiter) : false) ? tmp_12 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(tmp2_safe_receiver, this.dz_1, this.gz_1, this.lz_1);
            }

            var tmp_13 = this;
            this.gz_1;
            this.lz_1;
            tmp_13.cz_1 = Unit_instance;
            this.hb_1 = 13;
            continue $sm;
          case 9:
            this.cz_1 = suspendResult;
            this.hb_1 = 13;
            continue $sm;
          case 10:
            this.cz_1 = suspendResult;
            this.hb_1 = 13;
            continue $sm;
          case 11:
            throw this.kb_1;
          case 12:
            if (false) {
              this.hb_1 = 1;
              continue $sm;
            }

            this.hb_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
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
  function $receiveCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b10_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$6).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 8;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.d10_1 = this.b10_1;
            var tmp_1 = this;
            tmp_1.e10_1 = null;
            this.f10_1 = this.d10_1.yv_1.kotlinx$atomicfu$value;
            this.hb_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.hb_1 = 9;
              continue $sm;
            }

            if (this.d10_1.ww()) {
              var tmp_2 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.b10_1));
            } else {
              this.hb_1 = 3;
              continue $sm;
            }

          case 3:
            this.g10_1 = this.d10_1.uv_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var this_0 = this.g10_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.h10_1 = this_0.l9(toLong(other));
            var tmp_4 = this;
            var this_1 = this.g10_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.i10_1 = this_1.sa(toLong(other_0)).db();
            if (!this.f10_1.dn_1.equals(this.h10_1)) {
              this.j10_1 = findSegmentReceive(this.d10_1, this.h10_1, this.f10_1);
              if (this.j10_1 == null) {
                this.hb_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.k10_1 = this.j10_1;
                this.hb_1 = 4;
                continue $sm;
              }
            } else {
              this.hb_1 = 5;
              continue $sm;
            }

          case 4:
            this.f10_1 = this.k10_1;
            this.hb_1 = 5;
            continue $sm;
          case 5:
            this.l10_1 = updateCellReceive(this.d10_1, this.f10_1, this.i10_1, this.g10_1, this.e10_1);
            if (this.l10_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_6 = this;
              var tmp_7 = this.e10_1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.d10_1, this.f10_1, this.i10_1);
              }
              this.f10_1;
              this.i10_1;
              this.g10_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.l10_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.g10_1.a7(this.d10_1.vw()) < 0) {
                  this.f10_1.pw();
                }
                this.hb_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.l10_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_9 = this;
                  tmp_9.n10_1 = this.f10_1;
                  var tmp_10 = this;
                  tmp_10.o10_1 = this.i10_1;
                  var tmp_11 = this;
                  tmp_11.p10_1 = this.g10_1;
                  this.hb_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.b10_1, this.n10_1, this.o10_1, this.p10_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.f10_1.pw();
                  var tmp_13 = this.l10_1;
                  return (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                }
              }
            }

          case 6:
            this.m10_1 = suspendResult;
            this.hb_1 = 7;
            continue $sm;
          case 7:
            this.c10_1 = this.m10_1;
            this.hb_1 = 10;
            continue $sm;
          case 8:
            throw this.kb_1;
          case 9:
            if (false) {
              this.hb_1 = 1;
              continue $sm;
            }

            this.hb_1 = 10;
            continue $sm;
          case 10:
            return this.c10_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 8) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function $receiveCatchingCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y10_1 = _this__u8e3s4;
  }
  protoOf($receiveCatchingCOROUTINE$7).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 9;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.a11_1 = this.y10_1;
            var tmp_1 = this;
            tmp_1.b11_1 = null;
            this.c11_1 = this.a11_1.yv_1.kotlinx$atomicfu$value;
            this.hb_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.hb_1 = 10;
              continue $sm;
            }

            if (this.a11_1.ww()) {
              var tmp_2 = this;
              tmp_2.z10_1 = Companion_getInstance_1().fy(this.y10_1.uw());
              this.hb_1 = 11;
              continue $sm;
            } else {
              this.hb_1 = 3;
              continue $sm;
            }

          case 3:
            this.d11_1 = this.a11_1.uv_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            var this_0 = this.d11_1;
            var other = get_SEGMENT_SIZE();
            tmp_3.e11_1 = this_0.l9(toLong(other));
            var tmp_4 = this;
            var this_1 = this.d11_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_4.f11_1 = this_1.sa(toLong(other_0)).db();
            if (!this.c11_1.dn_1.equals(this.e11_1)) {
              this.g11_1 = findSegmentReceive(this.a11_1, this.e11_1, this.c11_1);
              if (this.g11_1 == null) {
                this.hb_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                this.h11_1 = this.g11_1;
                this.hb_1 = 4;
                continue $sm;
              }
            } else {
              this.hb_1 = 5;
              continue $sm;
            }

          case 4:
            this.c11_1 = this.h11_1;
            this.hb_1 = 5;
            continue $sm;
          case 5:
            this.i11_1 = updateCellReceive(this.a11_1, this.c11_1, this.f11_1, this.d11_1, this.b11_1);
            if (this.i11_1 === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
              var tmp_6 = this;
              var tmp_7 = this.b11_1;
              var tmp1_safe_receiver = (!(tmp_7 == null) ? isInterface(tmp_7, Waiter) : false) ? tmp_7 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(tmp1_safe_receiver, this.a11_1, this.c11_1, this.f11_1);
              }
              this.c11_1;
              this.f11_1;
              this.d11_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.i11_1 === _get_FAILED_$accessor$yt74tm_h47uk8()) {
                if (this.d11_1.a7(this.a11_1.vw()) < 0) {
                  this.c11_1.pw();
                }
                this.hb_1 = 2;
                var tmp_8 = this;
                continue $sm;
              } else {
                if (this.i11_1 === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
                  var tmp_9 = this;
                  tmp_9.k11_1 = this.c11_1;
                  var tmp_10 = this;
                  tmp_10.l11_1 = this.f11_1;
                  var tmp_11 = this;
                  tmp_11.m11_1 = this.d11_1;
                  this.hb_1 = 6;
                  suspendResult = receiveCatchingOnNoWaiterSuspend(this.y10_1, this.k11_1, this.l11_1, this.m11_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  this.hb_1 = 7;
                  continue $sm;
                } else {
                  var tmp_12 = this;
                  this.c11_1.pw();
                  var tmp_13 = this.i11_1;
                  var element = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
                  tmp_12.j11_1 = Companion_getInstance_1().ay(element);
                  this.hb_1 = 8;
                  continue $sm;
                }
              }
            }

          case 6:
            var unboxed = suspendResult.ey_1;
            suspendResult = new ChannelResult(unboxed);
            this.hb_1 = 7;
            continue $sm;
          case 7:
            this.j11_1 = suspendResult.ey_1;
            this.hb_1 = 8;
            continue $sm;
          case 8:
            this.z10_1 = this.j11_1;
            this.hb_1 = 11;
            continue $sm;
          case 9:
            throw this.kb_1;
          case 10:
            if (false) {
              this.hb_1 = 1;
              continue $sm;
            }

            this.hb_1 = 11;
            continue $sm;
          case 11:
            return new ChannelResult(this.z10_1);
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 9) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.rv_1 = capacity;
    this.sv_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.rv_1 >= 0)) {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.<anonymous>' call
      var message = 'Invalid channel capacity: ' + this.rv_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.tv_1 = atomic$long$1(new Long(0, 0));
    this.uv_1 = atomic$long$1(new Long(0, 0));
    this.vv_1 = atomic$long$1(initialBufferEnd(this.rv_1));
    this.wv_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.xv_1 = atomic$ref$1(firstSegment);
    this.yv_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.zv_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.sv_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.onUndeliveredElementReceiveCancellationConstructor.<anonymous>' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.aw_1 = tmp_3;
    this.bw_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.cw_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).vw = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.tv_1.kotlinx$atomicfu$value.za(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).vx = function () {
    return this.uv_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).n11 = function (element, $completion) {
    var tmp = new $sendCOROUTINE$5(this, element, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BufferedChannel).o11 = function (element) {
    if (shouldSendSuspend(this, this.tv_1.kotlinx$atomicfu$value))
      return Companion_getInstance_1().p11();
    var tmp$ret$4;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var waiter = get_INTERRUPTED_SEND();
      var segment = this.xv_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.tv_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.za(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, this);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.l9(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.sa(toLong(other_0)).db();
        if (!segment.dn_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
              tmp$ret$4 = Companion_getInstance_1().fy(this.ux());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend(this, segment, i, element, s, waiter, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
          segment.pw();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_1().ay(Unit_instance);
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_1().ay(Unit_instance);
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
          if (closed) {
            segment.fw();
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
            tmp$ret$4 = Companion_getInstance_1().fy(this.ux());
            break $l$block_5;
          }
          var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, this, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          segment.fw();
          tmp$ret$4 = Companion_getInstance_1().p11();
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
          if (s.a7(this.vx()) < 0) {
            segment.pw();
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.trySend.<anonymous>' call
          tmp$ret$4 = Companion_getInstance_1().fy(this.ux());
          break $l$block_5;
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
          segment.pw();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).dy = function () {
  };
  protoOf(BufferedChannel).wx = function () {
  };
  protoOf(BufferedChannel).q11 = function ($completion) {
    var tmp = new $receiveCOROUTINE$6(this, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(BufferedChannel).r11 = function ($completion) {
    var tmp = new $receiveCatchingCOROUTINE$7(this, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    var tmp_0 = tmp.tb();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(BufferedChannel).s11 = function () {
    var r = this.uv_1.kotlinx$atomicfu$value;
    var sendersAndCloseStatusCur = this.tv_1.kotlinx$atomicfu$value;
    if (_get_isClosedForReceive0__f7qknl(sendersAndCloseStatusCur, this)) {
      return Companion_getInstance_1().fy(this.uw());
    }
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var s = sendersAndCloseStatusCur.za(new Long(-1, 268435455));
    if (r.a7(s) >= 0)
      return Companion_getInstance_1().p11();
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var waiter = get_INTERRUPTED_RCV();
      var segment = this.yv_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if (this.ww()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          tmp$ret$2 = Companion_getInstance_1().fy(this.uw());
          break $l$block_0;
        }
        var r_0 = this.uv_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = r_0.l9(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = r_0.sa(toLong(other_0)).db();
        if (!segment.dn_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive(this, segment, i, r_0, waiter);
        var tmp_0;
        if (updCellResult === _get_SUSPEND_$accessor$yt74tm_ccb8g1()) {
          var tmp1_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(tmp1_safe_receiver, this, segment, i);
          }
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var segm = segment;
          this.ew(r_0);
          segm.fw();
          tmp_0 = Companion_getInstance_1().p11();
        } else if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
          if (r_0.a7(this.vw()) < 0) {
            segment.pw();
          }
          continue $l$loop_0;
        } else if (updCellResult === _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.pw();
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.tryReceive.<anonymous>' call
          var element = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
          tmp_0 = Companion_getInstance_1().ay(element);
        }
        tmp$ret$2 = tmp_0;
        break $l$block_0;
      }
    }
    return tmp$ret$2;
  };
  protoOf(BufferedChannel).oy = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.yv_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.uv_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.math.max' call
      // Inline function 'kotlin.Long.plus' call
      var other = this.rv_1;
      var a = r.qa(toLong(other));
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$1 = a.a7(b) >= 0 ? a : b;
      if (globalCellIndex.a7(tmp$ret$1) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.qa(toLong(1));
      if (!this.uv_1.atomicfu$compareAndSet(r, tmp$ret$2))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = r.l9(toLong(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var i = r.sa(toLong(other_1)).db();
      if (!segment.dn_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === _get_FAILED_$accessor$yt74tm_h47uk8()) {
        if (r.a7(this.vw()) < 0) {
          segment.pw();
        }
      } else {
        segment.pw();
        var tmp1_safe_receiver = this.sv_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).ew = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (_get_bufferEndCounter__2d4hee(this).a7(globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var ebCompleted = this.wv_1.kotlinx$atomicfu$value.za(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) ? b.equals(_get_bufferEndCounter__2d4hee(this)) : false)
          return Unit_instance;
      }
       while (inductionVariable < times);
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var this_0 = this.wv_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$1 = cur.za(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$1, true);
        if (this_0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.wv_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.za(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.za(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) ? b_0.equals(_get_bufferEndCounter__2d4hee(this)) : false) {
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          var this_1 = this.wv_1;
          while (true) {
            var cur_0 = this_1.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.waitExpandBufferCompletion.<anonymous>' call
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$6 = cur_0.za(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$6, false);
            if (this_1.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.wv_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).v = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).uw = function () {
    var tmp = this.bw_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).ux = function () {
    var tmp0_elvis_lhs = this.uw();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).t11 = function () {
  };
  protoOf(BufferedChannel).u11 = function (cause) {
    return this.v11(cause, false);
  };
  protoOf(BufferedChannel).vi = function (cause) {
    this.x11(cause);
  };
  protoOf(BufferedChannel).x11 = function (cause) {
    return this.v11(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).v11 = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.bw_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.closeOrCancelImpl.<anonymous>' call
    this.t11();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).py = function () {
    return false;
  };
  protoOf(BufferedChannel).ny = function () {
    return _get_isClosedForSend0__kxgf9m(this.tv_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).ww = function () {
    return _get_isClosedForReceive0__f7qknl(this.tv_1.kotlinx$atomicfu$value, this);
  };
  protoOf(BufferedChannel).qy = function () {
    $l$loop: while (true) {
      var segment = this.yv_1.kotlinx$atomicfu$value;
      var r = this.vx();
      var s = this.vw();
      if (s.a7(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.l9(toLong(other));
      if (!segment.dn_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.yv_1.kotlinx$atomicfu$value.dn_1.a7(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.pw();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.sa(toLong(other_0)).db();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.qa(toLong(1));
      this.uv_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0_subject = this.tv_1.kotlinx$atomicfu$value.xa(60).db();
    if (tmp0_subject === 2) {
      sb.z5('closed,');
    } else if (tmp0_subject === 3) {
      sb.z5('cancelled,');
    }
    sb.z5('capacity=' + this.rv_1 + ',');
    sb.z5('data=[');
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = listOf([this.yv_1.kotlinx$atomicfu$value, this.xv_1.kotlinx$atomicfu$value, this.zv_1.kotlinx$atomicfu$value]);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        if (!(element === get_NULL_SEGMENT())) {
          destination.s(element);
        }
      }
      var iterator = destination.v();
      if (!iterator.w())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.y();
      if (!iterator.w()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
      var minValue = minElem.dn_1;
      do {
        var e = iterator.y();
        // Inline function 'kotlinx.coroutines.channels.BufferedChannel.toString.<anonymous>' call
        var v = e.dn_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.w());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.vx();
    var s = this.vw();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_1 = segment.dn_1;
          var other = get_SEGMENT_SIZE();
          var globalCellIndex = this_1.m9(toLong(other)).qa(toLong(i));
          if (globalCellIndex.a7(s) >= 0 ? globalCellIndex.a7(r) >= 0 : false)
            break append_elements;
          var cellState = segment.nv(i);
          var element_0 = segment.kv(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = (globalCellIndex.a7(r) < 0 ? globalCellIndex.a7(s) >= 0 : false) ? 'receive' : (globalCellIndex.a7(s) < 0 ? globalCellIndex.a7(r) >= 0 : false) ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = (globalCellIndex.a7(r) < 0 ? globalCellIndex.a7(s) >= 0 : false) ? 'onReceive' : (globalCellIndex.a7(s) < 0 ? globalCellIndex.a7(r) >= 0 : false) ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + toString_0(cellState) + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) ? true : equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if ((((((cellState == null ? true : equals(cellState, get_IN_BUFFER())) ? true : equals(cellState, get_DONE_RCV())) ? true : equals(cellState, get_POISONED())) ? true : equals(cellState, get_INTERRUPTED_RCV())) ? true : equals(cellState, get_INTERRUPTED_SEND())) ? true : equals(cellState, get_CHANNEL_CLOSED())) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.z5('(' + cellStateString + ',' + element_0 + '),');
          } else {
            sb.z5(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp3_elvis_lhs = segment.lw();
      var tmp_0;
      if (tmp3_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp3_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.l8(sb.a() - 1 | 0);
    }
    sb.z5(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.xx_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + this.xx_1 + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    var tmp;
    Factory_getInstance();
    if (capacity === 0) {
      tmp = new Long(0, 0);
    } else {
      Factory_getInstance();
      if (capacity === 2147483647) {
        tmp = new Long(-1, 2147483647);
      } else {
        tmp = toLong(capacity);
      }
    }
    return tmp;
  }
  function ReceiveCatching(cont) {
    this.by_1 = cont;
  }
  protoOf(ReceiveCatching).eo = function (segment, index) {
    this.by_1.eo(segment, index);
  };
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.tryResume0.<anonymous>' call
    var token = _this__u8e3s4.km(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.ok(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).qa(counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).wa(60).qa(counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function get_SENDERS_COUNTER_MASK() {
    return SENDERS_COUNTER_MASK;
  }
  var SENDERS_COUNTER_MASK;
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.hv(), 0);
  }
  function _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 3;
  }
  function _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 0;
  }
  function _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 1;
  }
  function _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 2;
  }
  function _get_RESULT_CLOSED_$accessor$yt74tm_10v48j() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 4;
  }
  function _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return 5;
  }
  function _get_SUSPEND_NO_WAITER_$accessor$yt74tm_n6n1ky() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND_NO_WAITER();
  }
  function _get_SUSPEND_$accessor$yt74tm_ccb8g1() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_SUSPEND();
  }
  function _get_FAILED_$accessor$yt74tm_h47uk8() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return get_FAILED();
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.y11_1 = 2147483647;
    this.z11_1 = 0;
    this.a12_1 = -1;
    this.b12_1 = -2;
    this.c12_1 = -3;
    this.d12_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.e12_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f12_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.f12_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.f12_1, other.f12_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.f12_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + this.f12_1 + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.zx_1 = new Failed();
  }
  protoOf(Companion).ay = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).p11 = function () {
    return _ChannelResult___init__impl__siwsuf(this.zx_1);
  };
  protoOf(Companion).fy = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.ey_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.ey_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.ey_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.ey_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.ey_1, other);
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        // Inline function 'kotlin.contracts.contract' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().e12_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.k12_1 = _channel;
  }
  protoOf(ChannelCoroutine).u11 = function (cause) {
    return this.k12_1.u11(cause);
  };
  protoOf(ChannelCoroutine).v = function () {
    return this.k12_1.v();
  };
  protoOf(ChannelCoroutine).q11 = function ($completion) {
    return this.k12_1.q11($completion);
  };
  protoOf(ChannelCoroutine).r11 = function ($completion) {
    var tmp = this.k12_1.r11($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(ChannelCoroutine).n11 = function (element, $completion) {
    return this.k12_1.n11(element, $completion);
  };
  protoOf(ChannelCoroutine).s11 = function () {
    return this.k12_1.s11();
  };
  protoOf(ChannelCoroutine).o11 = function (element) {
    return this.k12_1.o11(element);
  };
  protoOf(ChannelCoroutine).vi = function (cause) {
    if (this.ji())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.qh() : null, null, this);
    } else {
      tmp = cause;
    }
    this.xi(tmp);
  };
  protoOf(ChannelCoroutine).g12 = function (cause, $super) {
    return this.wi(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).xi = function (cause) {
    var exception = this.oi(cause);
    this.k12_1.vi(exception);
    this.aj(exception);
  };
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.vi(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.y12_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).o11.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) ? true : _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.sv_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_1().ay(Unit_instance);
  }
  function trySendDropOldest($this, element) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var waiter = get_BUFFERED();
      var segment = $this.xv_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = $this.tv_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.za(get_SENDERS_COUNTER_MASK());
        var closed = _get_isClosedForSend0__kxgf9m(sendersAndCloseStatusCur, $this);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.l9(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.sa(toLong(other_0)).db();
        if (!segment.dn_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_1().fy($this.ux());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var tmp1_subject = updateCellSend($this, segment, i, element, s, waiter, closed);
        if (tmp1_subject === _get_RESULT_RENDEZVOUS_$accessor$yt74tm_3irwt8()) {
          segment.pw();
          return Companion_getInstance_1().ay(Unit_instance);
        } else if (tmp1_subject === _get_RESULT_BUFFERED_$accessor$yt74tm_quor5m()) {
          return Companion_getInstance_1().ay(Unit_instance);
        } else if (tmp1_subject === _get_RESULT_SUSPEND_$accessor$yt74tm_cjypnf()) {
          if (closed) {
            segment.fw();
            return Companion_getInstance_1().fy($this.ux());
          }
          var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(tmp2_safe_receiver, $this, segment, i);
          }
          // Inline function 'kotlin.Long.plus' call
          // Inline function 'kotlin.Long.times' call
          var this_0 = segment.dn_1;
          var other_1 = get_SEGMENT_SIZE();
          var tmp$ret$5 = this_0.m9(toLong(other_1)).qa(toLong(i));
          $this.oy(tmp$ret$5);
          return Companion_getInstance_1().ay(Unit_instance);
        } else if (tmp1_subject === _get_RESULT_CLOSED_$accessor$yt74tm_10v48j()) {
          if (s.a7($this.vx()) < 0) {
            segment.pw();
          }
          return Companion_getInstance_1().fy($this.ux());
        } else if (tmp1_subject === _get_RESULT_FAILED_$accessor$yt74tm_vo1zj0()) {
          segment.pw();
          continue $l$loop_0;
        } else if (tmp1_subject === _get_RESULT_SUSPEND_NO_WAITER_$accessor$yt74tm_cvzv8m()) {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl.<anonymous>' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$3;
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.x12_1 = capacity;
    this.y12_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.y12_1 === BufferOverflow_SUSPEND_getInstance())) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).d7() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.x12_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.<anonymous>' call
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.x12_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).py = function () {
    return this.y12_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).n11 = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    // Inline function 'kotlin.contracts.contract' call
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      // Inline function 'kotlinx.coroutines.channels.ConflatedBufferedChannel.send.<anonymous>' call
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.sv_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        addSuppressed(tmp1_safe_receiver, this.ux());
        throw tmp1_safe_receiver;
      }
      throw this.ux();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).o11 = function (element) {
    return trySendImpl(this, element, false);
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.pi(onCompletion);
    }
    coroutine.ai(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).nh = function () {
    return protoOf(ChannelCoroutine).nh.call(this);
  };
  protoOf(ProducerCoroutine).d13 = function (value) {
    this.k12_1.w11();
  };
  protoOf(ProducerCoroutine).oh = function (value) {
    return this.d13(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).ph = function (cause, handled) {
    var processed = this.k12_1.u11(cause);
    if (!processed ? !handled : false) {
      handleCoroutineException(this.lh_1, cause);
    }
  };
  protoOf(ProducerCoroutine).g12 = function (cause, $super) {
    return this.wi(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function flowOf(value) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv(value);
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.e13_1 = block;
  }
  protoOf(SafeFlow).f13 = function (collector, $completion) {
    return this.e13_1(collector, $completion);
  };
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p13_1 = _this__u8e3s4;
    this.q13_1 = collector;
  }
  protoOf($collectCOROUTINE$14).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.r13_1 = this.q13_1;
            this.hb_1 = 1;
            suspendResult = this.r13_1.t13(this.p13_1.s13_1, this);
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
  function _no_name_provided__qut3iv($value) {
    this.s13_1 = $value;
  }
  protoOf(_no_name_provided__qut3iv).g13 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function receiveAsFlow(_this__u8e3s4) {
    return new ChannelAsFlow(_this__u8e3s4, false);
  }
  function markConsumed($this) {
    if ($this.y13_1) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!$this.z13_1.atomicfu$getAndSet(true)) {
        // Inline function 'kotlinx.coroutines.flow.ChannelAsFlow.markConsumed.<anonymous>' call
        var message = 'ReceiveChannel.consumeAsFlow can be collected just once';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function $collectCOROUTINE$15(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i14_1 = _this__u8e3s4;
    this.j14_1 = collector;
  }
  protoOf($collectCOROUTINE$15).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            Factory_getInstance();
            if (this.i14_1.l14_1 === -3) {
              markConsumed(this.i14_1);
              this.hb_1 = 2;
              suspendResult = emitAllImpl(this.j14_1, this.i14_1.x13_1, this.i14_1.y13_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 1;
              suspendResult = protoOf(ChannelFlow).g13.call(this.i14_1, this.j14_1, this);
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
  function ChannelAsFlow(channel, consume, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = -3;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.x13_1 = channel;
    this.y13_1 = consume;
    this.z13_1 = atomic$boolean$1(false);
  }
  protoOf(ChannelAsFlow).n14 = function (context, capacity, onBufferOverflow) {
    return new ChannelAsFlow(this.x13_1, this.y13_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelAsFlow).o14 = function () {
    return new ChannelAsFlow(this.x13_1, this.y13_1);
  };
  protoOf(ChannelAsFlow).p14 = function (scope, $completion) {
    return emitAllImpl(new SendingCollector(scope), this.x13_1, this.y13_1, $completion);
  };
  protoOf(ChannelAsFlow).q14 = function (scope) {
    markConsumed(this);
    var tmp;
    Factory_getInstance();
    if (this.l14_1 === -3) {
      tmp = this.x13_1;
    } else {
      tmp = protoOf(ChannelFlow).q14.call(this, scope);
    }
    return tmp;
  };
  protoOf(ChannelAsFlow).g13 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$15(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChannelAsFlow).r14 = function () {
    return 'channel=' + this.x13_1;
  };
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$16(_this__u8e3s4, channel, consume, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function $emitAllImplCOROUTINE$16(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e15_1 = _this__u8e3s4;
    this.f15_1 = channel;
    this.g15_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$16).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 9;
            ensureActive_1(this.e15_1);
            this.h15_1 = null;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.ib_1 = 7;
            this.ib_1 = 6;
            this.j15_1 = this.f15_1.v();
            this.hb_1 = 2;
            continue $sm;
          case 2:
            this.hb_1 = 3;
            suspendResult = this.j15_1.ly(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.hb_1 = 5;
              continue $sm;
            }

            this.k15_1 = this.j15_1.y();
            this.hb_1 = 4;
            suspendResult = this.e15_1.t13(this.k15_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.hb_1 = 2;
            continue $sm;
          case 5:
            this.i15_1 = Unit_instance;
            this.ib_1 = 9;
            this.hb_1 = 8;
            continue $sm;
          case 6:
            this.ib_1 = 7;
            var tmp_0 = this.kb_1;
            if (tmp_0 instanceof Error) {
              var e = this.kb_1;
              var tmp_1 = this;
              this.h15_1 = e;
              throw e;
            } else {
              throw this.kb_1;
            }

          case 7:
            this.ib_1 = 9;
            var t = this.kb_1;
            if (this.g15_1) {
              cancelConsumed(this.f15_1, this.h15_1);
            }

            throw t;
          case 8:
            this.ib_1 = 9;
            if (this.g15_1) {
              cancelConsumed(this.f15_1, this.h15_1);
            }

            return Unit_instance;
          case 9:
            throw this.kb_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.ib_1 === 9) {
          throw e_0;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e_0;
        }
      }
     while (true);
  };
  function $collectCOROUTINE$17(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t15_1 = _this__u8e3s4;
    this.u15_1 = collector;
  }
  protoOf($collectCOROUTINE$17).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 5;
            var tmp_0 = this;
            tmp_0.v15_1 = new SafeCollector(this.u15_1, this.u6());
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.ib_1 = 4;
            this.hb_1 = 2;
            suspendResult = this.t15_1.f13(this.v15_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w15_1 = suspendResult;
            this.ib_1 = 5;
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.ib_1 = 5;
            this.v15_1.b16();
            return Unit_instance;
          case 4:
            this.ib_1 = 5;
            var t = this.kb_1;
            this.v15_1.b16();
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).g13 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$17(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_SharedFlow_kt__umasnn();
    var tmp;
    var tmp_0;
    Factory_getInstance();
    if (capacity === 0) {
      tmp_0 = true;
    } else {
      Factory_getInstance();
      tmp_0 = capacity === -3;
    }
    if (tmp_0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
    } else {
      tmp = false;
    }
    if (tmp) {
      return _this__u8e3s4;
    }
    return new ChannelFlowOperatorImpl(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  function _get_head__d7jo8b($this) {
    // Inline function 'kotlin.comparisons.minOf' call
    var a = $this.l16_1;
    var b = $this.k16_1;
    return a.a7(b) <= 0 ? a : b;
  }
  function _get_replaySize__dxgnb1($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.m16_1;
    return this_0.qa(toLong(other)).ra($this.k16_1).db();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.m16_1 + $this.n16_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.m16_1;
    return this_0.qa(toLong(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.m16_1;
    var this_1 = this_0.qa(toLong(other));
    var other_0 = $this.n16_1;
    return this_1.qa(toLong(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.p16_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.m16_1 >= $this.h16_1 ? $this.l16_1.a7($this.k16_1) <= 0 : false) {
      switch ($this.i16_1.j9_1) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    $this.m16_1 = $this.m16_1 + 1 | 0;
    if ($this.m16_1 > $this.h16_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.g16_1) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = $this.k16_1.qa(toLong(1));
      updateBufferLocked($this, tmp$ret$0, $this.l16_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.g16_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.m16_1 = $this.m16_1 + 1 | 0;
    if ($this.m16_1 > $this.g16_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var other = $this.m16_1;
    tmp.l16_1 = this_0.qa(toLong(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.j16_1), _get_head__d7jo8b($this), null);
    $this.m16_1 = $this.m16_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b($this).qa(toLong(1));
    if ($this.k16_1.a7(newHead) < 0)
      $this.k16_1 = newHead;
    if ($this.l16_1.a7(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.p16_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.o16_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.s16_1.a7(new Long(0, 0)) >= 0 ? element.s16_1.a7(newHead) < 0 : false) {
              element.s16_1 = newHead;
            }
          }
        }
      }
    }
    $this.l16_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.j16_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = _get_head__d7jo8b($this).qa(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newSize > 0)) {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.arrayOfNulls' call
    var this_0 = fillArrayVal(Array(newSize), null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.j16_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = head.qa(toLong(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$4 = head.qa(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jl();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.v6(tmp$ret$0);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.Long.plus' call
      var this_0 = _get_head__d7jo8b($this);
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$3 = this_0.qa(toLong(other));
      var this_1 = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, this_1);
      $this.n16_1 = $this.n16_1 + 1 | 0;
      if ($this.h16_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$2 = this_1;
    }
    var emitter = tmp$ret$2;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
        r.v6(tmp$ret$8);
      }
    }
    return cancellable.ll();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (emitter.v16_1.a7(_get_head__d7jo8b($this)) < 0)
      return Unit_instance;
    var buffer = ensureNotNull($this.j16_1);
    if (!(getBufferAt(buffer, emitter.v16_1) === emitter))
      return Unit_instance;
    setBufferAt(buffer, emitter.v16_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_instance;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.a7(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (inductionVariable.a7(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.qa(new Long(1, 0));
        setBufferAt(ensureNotNull($this.j16_1), index, null);
      }
       while (inductionVariable.a7(newHead) < 0);
    $this.k16_1 = newReplayIndex;
    $this.l16_1 = newMinCollectorIndex;
    $this.m16_1 = newBufferEndIndex.ra(newHead).db();
    $this.n16_1 = newQueueEndIndex.ra(newBufferEndIndex).db();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.h16_1 === 0 ? $this.n16_1 <= 1 : false)
      return Unit_instance;
    var buffer = ensureNotNull($this.j16_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.n16_1 > 0) {
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        var this_0 = _get_head__d7jo8b($this);
        var other = _get_totalSize__xhdb3o($this);
        var tmp$ret$1 = this_0.qa(toLong(other)).ra(toLong(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.n16_1 = $this.n16_1 - 1 | 0;
      // Inline function 'kotlin.Long.plus' call
      var this_1 = _get_head__d7jo8b($this);
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = this_1.qa(toLong(other_0));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.a7(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.s16_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.s16_1 = index.qa(toLong(1));
      resumes = $this.y16(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        resume.v6(tmp$ret$4);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.s16_1;
    if (index.a7(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.h16_1 > 0)
      return new Long(-1, -1);
    if (index.a7(_get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.n16_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.j16_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.w16_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jl();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.a7(new Long(0, 0)) < 0) {
        slot.t16_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.v6(tmp$ret$0);
        break $l$block;
      }
      slot.t16_1 = cancellable;
    }
    return cancellable.ll();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.p16_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.o16_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.t16_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).a7(new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$2 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.t16_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.u16_1 = flow;
    this.v16_1 = index;
    this.w16_1 = value;
    this.x16_1 = cont;
  }
  protoOf(Emitter).gk = function () {
    return cancelEmitter(this.u16_1, this);
  };
  function $collectCOROUTINE$18(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h17_1 = _this__u8e3s4;
    this.i17_1 = collector;
  }
  protoOf($collectCOROUTINE$18).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 13;
            this.j17_1 = this.h17_1.n17();
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.ib_1 = 12;
            var tmp_0 = this.i17_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.hb_1 = 2;
              suspendResult = this.i17_1.q17(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 3;
              continue $sm;
            }

          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.l17_1 = this.u6().ob(Key_instance_3);
            this.hb_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.hb_1 = 10;
              continue $sm;
            }

            this.hb_1 = 5;
            continue $sm;
          case 5:
            if (!true) {
              this.hb_1 = 8;
              continue $sm;
            }

            this.m17_1 = tryTakeValue(this.h17_1, this.j17_1);
            if (!(this.m17_1 === get_NO_VALUE())) {
              this.hb_1 = 8;
              continue $sm;
            } else {
              this.hb_1 = 6;
              continue $sm;
            }

          case 6:
            this.hb_1 = 7;
            suspendResult = awaitValue(this.h17_1, this.j17_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.hb_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.l17_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.hb_1 = 9;
            var tmp_2 = this.m17_1;
            suspendResult = this.i17_1.t13((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.hb_1 = 4;
            continue $sm;
          case 10:
            this.k17_1 = Unit_instance;
            this.ib_1 = 13;
            this.hb_1 = 11;
            continue $sm;
          case 11:
            this.ib_1 = 13;
            this.h17_1.r17(this.j17_1);
            return Unit_instance;
          case 12:
            this.ib_1 = 13;
            var t = this.kb_1;
            this.h17_1.r17(this.j17_1);
            throw t;
          case 13:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 13) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.g16_1 = replay;
    this.h16_1 = bufferCapacity;
    this.i16_1 = onBufferOverflow;
    this.j16_1 = null;
    this.k16_1 = new Long(0, 0);
    this.l16_1 = new Long(0, 0);
    this.m16_1 = 0;
    this.n16_1 = 0;
  }
  protoOf(SharedFlowImpl).s17 = function () {
    var tmp = ensureNotNull(this.j16_1);
    // Inline function 'kotlin.Long.minus' call
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.k16_1;
    var other = _get_replaySize__dxgnb1(this);
    var tmp$ret$1 = this_0.qa(toLong(other)).ra(toLong(1));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).t17 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$18(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(SharedFlowImpl).g13 = function (collector, $completion) {
    return this.t17(collector, $completion);
  };
  protoOf(SharedFlowImpl).u17 = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryEmit.<anonymous>' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.v6(tmp$ret$3);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).t13 = function (value, $completion) {
    if (this.u17(value))
      return Unit_instance;
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).v17 = function () {
    var index = this.k16_1;
    if (index.a7(this.l16_1) < 0)
      this.l16_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).y16 = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.a7(this.l16_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.m16_1;
    var newMinCollectorIndex = head.qa(toLong(other));
    if (this.h16_1 === 0 ? this.n16_1 > 0 : false) {
      newMinCollectorIndex = newMinCollectorIndex.ta();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.p16_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = this.o16_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.s16_1.a7(new Long(0, 0)) >= 0 ? element.s16_1.a7(newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.s16_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.a7(this.l16_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.p16_1 > 0) {
      var newBufferSize0 = newBufferEndIndex.ra(newMinCollectorIndex).db();
      // Inline function 'kotlin.comparisons.minOf' call
      var a = this.n16_1;
      var b = this.h16_1 - newBufferSize0 | 0;
      tmp = Math.min(a, b);
    } else {
      tmp = this.n16_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlin.Long.plus' call
    var this_0 = newBufferEndIndex;
    var other_0 = this.n16_1;
    var newQueueEndIndex = this_0.qa(toLong(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = fillArrayVal(Array(maxResumeCount), null);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.j16_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (inductionVariable_0.a7(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0.qa(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.x16_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.w16_1);
            newBufferEndIndex = newBufferEndIndex.ta();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable_0.a7(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.ra(head).db();
    if (this.p16_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a_0 = this.k16_1;
    // Inline function 'kotlin.Long.minus' call
    var this_1 = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var a_1 = this.g16_1;
    var other_1 = Math.min(a_1, newBufferSize1);
    var b_0 = this_1.ra(toLong(other_1));
    var newReplayIndex = a_0.a7(b_0) >= 0 ? a_0 : b_0;
    if ((this.h16_1 === 0 ? newReplayIndex.a7(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.j16_1), newReplayIndex), get_NO_VALUE()) : false) {
      newBufferEndIndex = newBufferEndIndex.ta();
      newReplayIndex = newReplayIndex.ta();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).w17 = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).x17 = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  protoOf(SharedFlowImpl).y17 = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    updateBufferLocked(this, _get_bufferEndIndex__d2rk18(this), this.l16_1, _get_bufferEndIndex__d2rk18(this), _get_queueEndIndex__4m025l(this));
    return Unit_instance;
  };
  protoOf(SharedFlowImpl).u14 = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.s16_1 = new Long(-1, -1);
    this.t16_1 = null;
  }
  protoOf(SharedFlowSlot).a18 = function (flow) {
    if (this.s16_1.a7(new Long(0, 0)) >= 0)
      return false;
    this.s16_1 = flow.v17();
    return true;
  };
  protoOf(SharedFlowSlot).b18 = function (flow) {
    return this.a18(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).c18 = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.s16_1;
    this.s16_1 = new Long(-1, -1);
    this.t16_1 = null;
    return flow.y16(oldIndex);
  };
  protoOf(SharedFlowSlot).d18 = function (flow) {
    return this.c18(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.db() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.db() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(replay >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message = 'replay cannot be negative, but was ' + replay;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(extraBufferCapacity >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_0 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((replay > 0 ? true : extraBufferCapacity > 0) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_1 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? IntCompanionObject_instance.MAX_VALUE : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.e18_1 = new StartedEagerly();
    this.f18_1 = new StartedLazily();
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  var SharingCommand_START_instance;
  var SharingCommand_STOP_instance;
  var SharingCommand_STOP_AND_RESET_REPLAY_CACHE_instance;
  var SharingCommand_entriesInitialized;
  function SharingCommand_initEntries() {
    if (SharingCommand_entriesInitialized)
      return Unit_instance;
    SharingCommand_entriesInitialized = true;
    SharingCommand_START_instance = new SharingCommand('START', 0);
    SharingCommand_STOP_instance = new SharingCommand('STOP', 1);
    SharingCommand_STOP_AND_RESET_REPLAY_CACHE_instance = new SharingCommand('STOP_AND_RESET_REPLAY_CACHE', 2);
  }
  function SharingCommand(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function StartedEagerly() {
  }
  protoOf(StartedEagerly).g18 = function (subscriptionCount) {
    return flowOf(SharingCommand_START_getInstance());
  };
  protoOf(StartedEagerly).toString = function () {
    return 'SharingStarted.Eagerly';
  };
  function StartedLazily$command$slambda$slambda($started, $this_flow, resultContinuation) {
    this.p18_1 = $started;
    this.q18_1 = $this_flow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StartedLazily$command$slambda$slambda).s18 = function (count, $completion) {
    var tmp = this.t18(count, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(StartedLazily$command$slambda$slambda).fc = function (p1, $completion) {
    return this.s18((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StartedLazily$command$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            if (this.r18_1 > 0 ? !this.p18_1._v : false) {
              this.p18_1._v = true;
              this.hb_1 = 1;
              suspendResult = this.q18_1.t13(SharingCommand_START_getInstance(), this);
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
  protoOf(StartedLazily$command$slambda$slambda).t18 = function (count, completion) {
    var i = new StartedLazily$command$slambda$slambda(this.p18_1, this.q18_1, completion);
    i.r18_1 = count;
    return i;
  };
  function StartedLazily$command$slambda$slambda_0($started, $this_flow, resultContinuation) {
    var i = new StartedLazily$command$slambda$slambda($started, $this_flow, resultContinuation);
    var l = function (count, $completion) {
      return i.s18(count, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.u18_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).t13 = function (value, $completion) {
    return this.u18_1(value, $completion);
  };
  function StartedLazily$command$slambda($subscriptionCount, resultContinuation) {
    this.d19_1 = $subscriptionCount;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StartedLazily$command$slambda).g19 = function ($this$flow, $completion) {
    var tmp = this.h19($this$flow, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(StartedLazily$command$slambda).fc = function (p1, $completion) {
    return this.g19((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StartedLazily$command$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.f19_1 = {_v: false};
            this.hb_1 = 1;
            var tmp_0 = StartedLazily$command$slambda$slambda_0(this.f19_1, this.e19_1, null);
            suspendResult = this.d19_1.t17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  protoOf(StartedLazily$command$slambda).h19 = function ($this$flow, completion) {
    var i = new StartedLazily$command$slambda(this.d19_1, completion);
    i.e19_1 = $this$flow;
    return i;
  };
  function StartedLazily$command$slambda_0($subscriptionCount, resultContinuation) {
    var i = new StartedLazily$command$slambda($subscriptionCount, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.g19($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StartedLazily() {
  }
  protoOf(StartedLazily).g18 = function (subscriptionCount) {
    return flow(StartedLazily$command$slambda_0(subscriptionCount, null));
  };
  protoOf(StartedLazily).toString = function () {
    return 'SharingStarted.Lazily';
  };
  function SharingCommand_START_getInstance() {
    SharingCommand_initEntries();
    return SharingCommand_START_instance;
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function StateFlow() {
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.m19_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this.m19_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.n19_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.n19_1 = curSequence;
    } else {
      $this.n19_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.o16_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.p19();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.n19_1 === curSequence) {
        $this.n19_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.n19_1;
      curSlots = $this.o16_1;
    }
  }
  function $collectCOROUTINE$19(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y19_1 = _this__u8e3s4;
    this.z19_1 = collector;
  }
  protoOf($collectCOROUTINE$19).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 12;
            this.a1a_1 = this.y19_1.n17();
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.ib_1 = 11;
            var tmp_0 = this.z19_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.hb_1 = 2;
              suspendResult = this.z19_1.q17(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 3;
              continue $sm;
            }

          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.c1a_1 = this.u6().ob(Key_instance_3);
            this.d1a_1 = null;
            this.hb_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.hb_1 = 9;
              continue $sm;
            }

            this.e1a_1 = this.y19_1.m19_1.kotlinx$atomicfu$value;
            var tmp0_safe_receiver = this.c1a_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            if (this.d1a_1 == null ? true : !equals(this.d1a_1, this.e1a_1)) {
              this.hb_1 = 5;
              var this_0 = get_NULL();
              var value = this.e1a_1;
              var tmp_2;
              if (value === this_0) {
                tmp_2 = (null == null ? true : !(null == null)) ? null : THROW_CCE();
              } else {
                tmp_2 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
              }
              suspendResult = this.z19_1.t13(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 6;
              continue $sm;
            }

          case 5:
            this.d1a_1 = this.e1a_1;
            this.hb_1 = 6;
            continue $sm;
          case 6:
            if (!this.a1a_1.g1a()) {
              this.hb_1 = 7;
              suspendResult = this.a1a_1.f1a(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 8;
              continue $sm;
            }

          case 7:
            this.hb_1 = 8;
            continue $sm;
          case 8:
            this.hb_1 = 4;
            continue $sm;
          case 9:
            this.b1a_1 = Unit_instance;
            this.ib_1 = 12;
            this.hb_1 = 10;
            continue $sm;
          case 10:
            this.ib_1 = 12;
            this.y19_1.r17(this.a1a_1);
            return Unit_instance;
          case 11:
            this.ib_1 = 12;
            var t = this.kb_1;
            this.y19_1.r17(this.a1a_1);
            throw t;
          case 12:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 12) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.m19_1 = atomic$ref$1(initialState);
    this.n19_1 = 0;
  }
  protoOf(StateFlowImpl).h1a = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).u2 = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var this_0 = get_NULL();
    var value = this.m19_1.kotlinx$atomicfu$value;
    var tmp;
    if (value === this_0) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : !(value == null)) ? value : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).i1a = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).u17 = function (value) {
    this.h1a(value);
    return true;
  };
  protoOf(StateFlowImpl).t13 = function (value, $completion) {
    this.h1a(value);
    return Unit_instance;
  };
  protoOf(StateFlowImpl).y17 = function () {
    throw UnsupportedOperationException_init_$Create$('MutableStateFlow.resetReplayCache is not supported');
  };
  protoOf(StateFlowImpl).t17 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$19(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(StateFlowImpl).g13 = function (collector, $completion) {
    return this.t17(collector, $completion);
  };
  protoOf(StateFlowImpl).w17 = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).x17 = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  protoOf(StateFlowImpl).u14 = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.o19_1 = atomic$ref$1(null);
  }
  protoOf(StateFlowSlot).j1a = function (flow) {
    if (!(this.o19_1.kotlinx$atomicfu$value == null))
      return false;
    this.o19_1.kotlinx$atomicfu$value = get_NONE();
    return true;
  };
  protoOf(StateFlowSlot).b18 = function (flow) {
    return this.j1a(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).k1a = function (flow) {
    this.o19_1.kotlinx$atomicfu$value = null;
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).d18 = function (flow) {
    return this.k1a(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).p19 = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.o19_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state == null)
        return Unit_instance;
      else if (state === get_PENDING())
        return Unit_instance;
      else if (state === get_NONE()) {
        if (this.o19_1.atomicfu$compareAndSet(state, get_PENDING()))
          return Unit_instance;
      } else {
        if (this.o19_1.atomicfu$compareAndSet(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          this_1.v6(tmp$ret$0);
          return Unit_instance;
        }
      }
    }
  };
  protoOf(StateFlowSlot).g1a = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.o19_1.atomicfu$getAndSet(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).f1a = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jl();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.o19_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
      cancellable.v6(tmp$ret$1);
    }
    return cancellable.ll();
  };
  function fuseStateFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_StateFlow_kt__eu9yi5();
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    var tmp_0;
    if (0 <= capacity ? capacity <= 1 : false) {
      tmp_0 = true;
    } else {
      Factory_getInstance();
      tmp_0 = capacity === -2;
    }
    if (tmp_0) {
      tmp = onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance());
    } else {
      tmp = false;
    }
    if (tmp) {
      return _this__u8e3s4;
    }
    return fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    this.o16_1 = null;
    this.p16_1 = 0;
    this.q16_1 = 0;
    this.r16_1 = null;
  }
  protoOf(AbstractSharedFlow).z17 = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>' call
    var tmp0_elvis_lhs = this.r16_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new SubscriptionCountStateFlow(this.p16_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>.<anonymous>' call
      this.r16_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractSharedFlow).n17 = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.o16_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.x17(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.o16_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.p16_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.o16_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.q16_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.w17();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).b18(this))
        break $l$loop;
    }
    this.q16_1 = index;
    this.p16_1 = this.p16_1 + 1 | 0;
    subscriptionCount = this.r16_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.x1a(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).r17 = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    this.p16_1 = this.p16_1 - 1 | 0;
    subscriptionCount = this.r16_1;
    if (this.p16_1 === 0)
      this.q16_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).d18(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.v6(tmp$ret$3);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.x1a(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  function SubscriptionCountStateFlow(initialValue) {
    SharedFlowImpl.call(this, 1, IntCompanionObject_instance.MAX_VALUE, BufferOverflow_DROP_OLDEST_getInstance());
    this.u17(initialValue);
  }
  protoOf(SubscriptionCountStateFlow).u2 = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.<get-value>.<anonymous>' call
    return this.s17();
  };
  protoOf(SubscriptionCountStateFlow).x1a = function (delta) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.increment.<anonymous>' call
    return this.u17(this.s17() + delta | 0);
  };
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = fillArrayVal(Array(0), null);
    }
  }
  function FusibleFlow() {
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.g1b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).i1b = function (it, $completion) {
    var tmp = this.j1b(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).fc = function (p1, $completion) {
    return this.i1b((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.g1b_1.p14(this.h1b_1, this);
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).j1b = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.g1b_1, completion);
    i.h1b_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.i1b(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.s1b_1 = $collector;
    this.t1b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).v1b = function ($this$coroutineScope, $completion) {
    var tmp = this.w1b($this$coroutineScope, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChannelFlow$collect$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = emitAll(this.s1b_1, this.t1b_1.q14(this.u1b_1), this);
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
  protoOf(ChannelFlow$collect$slambda).w1b = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.s1b_1, this.t1b_1, completion);
    i.u1b_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.v1b($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.k14_1 = context;
    this.l14_1 = capacity;
    this.m14_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).s14 = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).t14 = function () {
    var tmp;
    Factory_getInstance();
    if (this.l14_1 === -3) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = this.l14_1;
    }
    return tmp;
  };
  protoOf(ChannelFlow).o14 = function () {
    return null;
  };
  protoOf(ChannelFlow).u14 = function (context, capacity, onBufferOverflow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var newContext = context.ef(this.k14_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      Factory_getInstance();
      if (this.l14_1 === -3) {
        tmp = capacity;
      } else {
        Factory_getInstance();
        if (capacity === -3) {
          tmp = this.l14_1;
        } else {
          Factory_getInstance();
          if (this.l14_1 === -2) {
            tmp = capacity;
          } else {
            Factory_getInstance();
            if (capacity === -2) {
              tmp = this.l14_1;
            } else {
              // Inline function 'kotlinx.coroutines.assert' call
              // Inline function 'kotlinx.coroutines.assert' call
              var sum = this.l14_1 + capacity | 0;
              var tmp_0;
              if (sum >= 0) {
                tmp_0 = sum;
              } else {
                Factory_getInstance();
                tmp_0 = 2147483647;
              }
              tmp = tmp_0;
            }
          }
        }
      }
      newCapacity = tmp;
      newOverflow = this.m14_1;
    }
    if ((equals(newContext, this.k14_1) ? newCapacity === this.l14_1 : false) ? newOverflow.equals(this.m14_1) : false)
      return this;
    return this.n14(newContext, newCapacity, newOverflow);
  };
  protoOf(ChannelFlow).q14 = function (scope) {
    return produce(scope, this.k14_1, this.t14(), this.m14_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.s14());
  };
  protoOf(ChannelFlow).g13 = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).r14 = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.r14();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      props.s(tmp0_safe_receiver);
    }
    if (!(this.k14_1 === EmptyCoroutineContext_getInstance())) {
      props.s('context=' + this.k14_1);
    }
    Factory_getInstance();
    if (!(this.l14_1 === -3)) {
      props.s('capacity=' + this.l14_1);
    }
    if (!this.m14_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.s('onBufferOverflow=' + this.m14_1);
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = -3;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  protoOf(ChannelFlowOperatorImpl).n14 = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowOperatorImpl(this.e1c_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowOperatorImpl).o14 = function () {
    return this.e1c_1;
  };
  protoOf(ChannelFlowOperatorImpl).f1c = function (collector, $completion) {
    return this.e1c_1.g13(collector, $completion);
  };
  function collectWithContextUndispatched($this, collector, newContext, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.u6();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched(newContext, originalContextCollector, VOID, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $completion);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.o1c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).q1c = function (it, $completion) {
    var tmp = this.r1c(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).fc = function (p1, $completion) {
    return this.q1c((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.o1c_1.f1c(this.p1c_1, this);
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
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).r1c = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.o1c_1, completion);
    i.p1c_1 = it;
    return i;
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.q1c(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$20(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1d_1 = _this__u8e3s4;
    this.b1d_1 = collector;
  }
  protoOf($collectCOROUTINE$20).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 7;
            Factory_getInstance();
            if (this.a1d_1.l14_1 === -3) {
              var tmp_0 = this;
              tmp_0.c1d_1 = this.u6();
              this.d1d_1 = newCoroutineContext_0(this.c1d_1, this.a1d_1.k14_1);
              if (equals(this.d1d_1, this.c1d_1)) {
                this.hb_1 = 6;
                suspendResult = this.a1d_1.f1c(this.b1d_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.hb_1 = 1;
                continue $sm;
              }
            } else {
              this.hb_1 = 3;
              continue $sm;
            }

          case 1:
            if (equals(this.d1d_1.ob(Key_instance), this.c1d_1.ob(Key_instance))) {
              this.hb_1 = 5;
              suspendResult = collectWithContextUndispatched(this.a1d_1, this.b1d_1, this.d1d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 2;
              continue $sm;
            }

          case 2:
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.hb_1 = 4;
            suspendResult = protoOf(ChannelFlow).g13.call(this.a1d_1, this.b1d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            return Unit_instance;
          case 6:
            return Unit_instance;
          case 7:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 7) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.e1c_1 = flow;
  }
  protoOf(ChannelFlowOperator).p14 = function (scope, $completion) {
    return this.f1c(new SendingCollector(scope), $completion);
  };
  protoOf(ChannelFlowOperator).g13 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$20(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChannelFlowOperator).toString = function () {
    return '' + this.e1c_1 + ' -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function withUndispatchedContextCollector(_this__u8e3s4, emitContext) {
    var tmp;
    var tmp_0;
    if (_this__u8e3s4 instanceof SendingCollector) {
      tmp_0 = true;
    } else {
      tmp_0 = _this__u8e3s4 instanceof NopCollector;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new UndispatchedContextCollector(_this__u8e3s4, emitContext);
    }
    return tmp;
  }
  function withContextUndispatched(newContext, value, countOrElement, block, $completion) {
    countOrElement = countOrElement === VOID ? threadContextElements(newContext) : countOrElement;
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>' call
    // Inline function 'kotlinx.coroutines.withCoroutineContext' call
    // Inline function 'kotlinx.coroutines.flow.internal.withContextUndispatched.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
    var completion = new StackFrameContinuation($completion, newContext);
    // Inline function 'kotlin.js.asDynamic' call
    var a = block;
    return typeof a === 'function' ? a(value, completion) : block.fc(value, completion);
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    this.m1d_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UndispatchedContextCollector$emitRef$slambda).o1d = function (it, $completion) {
    var tmp = this.p1d(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).fc = function (p1, $completion) {
    return this.o1d((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.m1d_1.t13(this.n1d_1, this);
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
  protoOf(UndispatchedContextCollector$emitRef$slambda).p1d = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.m1d_1, completion);
    i.n1d_1 = it;
    return i;
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $completion) {
      return i.o1d(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.q1d_1 = emitContext;
    this.r1d_1 = threadContextElements(this.q1d_1);
    var tmp = this;
    tmp.s1d_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  protoOf(UndispatchedContextCollector).t13 = function (value, $completion) {
    return withContextUndispatched(this.q1d_1, value, this.r1d_1, this.s1d_1, $completion);
  };
  function StackFrameContinuation(uCont, context) {
    this.t1d_1 = uCont;
    this.u1d_1 = context;
  }
  protoOf(StackFrameContinuation).u6 = function () {
    return this.u1d_1;
  };
  protoOf(StackFrameContinuation).v6 = function (result) {
    this.t1d_1.v6(result);
  };
  function combineInternal(_this__u8e3s4, flows, arrayFactory, transform, $completion) {
    return flowScope(combineInternal$slambda_0(flows, arrayFactory, transform, _this__u8e3s4, null), $completion);
  }
  function combineInternal$slambda$slambda$slambda($resultChannel, $i, resultContinuation) {
    this.d1e_1 = $resultChannel;
    this.e1e_1 = $i;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combineInternal$slambda$slambda$slambda).o1d = function (value, $completion) {
    var tmp = this.p1d(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(combineInternal$slambda$slambda$slambda).fc = function (p1, $completion) {
    return this.o1d((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combineInternal$slambda$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.hb_1 = 1;
            suspendResult = this.d1e_1.n11(new IndexedValue(this.e1e_1, this.f1e_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hb_1 = 2;
            suspendResult = yield_0(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(combineInternal$slambda$slambda$slambda).p1d = function (value, completion) {
    var i = new combineInternal$slambda$slambda$slambda(this.d1e_1, this.e1e_1, completion);
    i.f1e_1 = value;
    return i;
  };
  function combineInternal$slambda$slambda$slambda_0($resultChannel, $i, resultContinuation) {
    var i = new combineInternal$slambda$slambda$slambda($resultChannel, $i, resultContinuation);
    var l = function (value, $completion) {
      return i.o1d(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.g1e_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).t13 = function (value, $completion) {
    return this.g1e_1(value, $completion);
  };
  function combineInternal$slambda$slambda($flows, $i, $nonClosed, $resultChannel, resultContinuation) {
    this.p1e_1 = $flows;
    this.q1e_1 = $i;
    this.r1e_1 = $nonClosed;
    this.s1e_1 = $resultChannel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combineInternal$slambda$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(combineInternal$slambda$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combineInternal$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 5;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.ib_1 = 4;
            this.hb_1 = 2;
            var tmp_0 = this.p1e_1[this.q1e_1];
            var tmp_1 = combineInternal$slambda$slambda$slambda_0(this.s1e_1, this.q1e_1, null);
            suspendResult = tmp_0.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u1e_1 = suspendResult;
            this.ib_1 = 5;
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.ib_1 = 5;
            if (this.r1e_1.w1e() === 0) {
              this.s1e_1.w11();
            }

            return Unit_instance;
          case 4:
            this.ib_1 = 5;
            var t = this.kb_1;
            if (this.r1e_1.w1e() === 0) {
              this.s1e_1.w11();
            }

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
  protoOf(combineInternal$slambda$slambda).w1b = function ($this$launch, completion) {
    var i = new combineInternal$slambda$slambda(this.p1e_1, this.q1e_1, this.r1e_1, this.s1e_1, completion);
    i.t1e_1 = $this$launch;
    return i;
  };
  function combineInternal$slambda$slambda_0($flows, $i, $nonClosed, $resultChannel, resultContinuation) {
    var i = new combineInternal$slambda$slambda($flows, $i, $nonClosed, $resultChannel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combineInternal$slambda($flows, $arrayFactory, $transform, $this_combineInternal, resultContinuation) {
    this.f1f_1 = $flows;
    this.g1f_1 = $arrayFactory;
    this.h1f_1 = $transform;
    this.i1f_1 = $this_combineInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combineInternal$slambda).v1b = function ($this$flowScope, $completion) {
    var tmp = this.w1b($this$flowScope, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(combineInternal$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combineInternal$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 10;
            this.k1f_1 = this.f1f_1.length;
            if (this.k1f_1 === 0)
              return Unit_instance;
            var tmp_0 = this;
            var size = this.k1f_1;
            tmp_0.l1f_1 = fillArrayVal(Array(size), null);
            fill(this.l1f_1, get_UNINITIALIZED());
            this.m1f_1 = Channel(this.k1f_1);
            this.n1f_1 = new LocalAtomicInt(this.k1f_1);
            this.o1f_1 = this.k1f_1;
            var inductionVariable = 0;
            var last = this.k1f_1;
            if (inductionVariable < last)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                launch(this.j1f_1, VOID, VOID, combineInternal$slambda$slambda_0(this.f1f_1, i, this.n1f_1, this.m1f_1, null));
              }
               while (inductionVariable < last);
            this.p1f_1 = new Int8Array(this.k1f_1);
            this.q1f_1 = 0;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.hb_1 = 9;
              continue $sm;
            }

            this.q1f_1 = numberToByte(this.q1f_1 + 1);
            this.hb_1 = 2;
            suspendResult = this.m1f_1.r11(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.hb_1 = 3;
            continue $sm;
          case 2:
            this.r1f_1 = suspendResult.ey_1;
            suspendResult = new ChannelResult(this.r1f_1);
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.s1f_1 = suspendResult.ey_1;
            this.t1f_1 = ChannelResult__getOrNull_impl_f5e07h(this.s1f_1);
            if (this.t1f_1 == null) {
              this.hb_1 = 9;
              var tmp_1 = this;
              continue $sm;
            } else {
              this.u1f_1 = this.t1f_1;
              this.hb_1 = 4;
              continue $sm;
            }

          case 4:
            this.v1f_1 = this.u1f_1;
            $l$loop_0: while (true) {
              var index = this.v1f_1.pd_1;
              var previous = this.l1f_1[index];
              this.l1f_1[index] = this.v1f_1.qd_1;
              if (previous === get_UNINITIALIZED()) {
                this.o1f_1 = this.o1f_1 - 1 | 0;
              }
              if (this.p1f_1[index] === this.q1f_1)
                break $l$loop_0;
              this.p1f_1[index] = this.q1f_1;
              var tmp_2 = this;
              var tmp2_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.m1f_1.s11());
              var tmp_3;
              if (tmp2_elvis_lhs == null) {
                break $l$loop_0;
              } else {
                tmp_3 = tmp2_elvis_lhs;
              }
              tmp_2.v1f_1 = tmp_3;
            }

            if (this.o1f_1 === 0) {
              this.w1f_1 = this.g1f_1();
              if (this.w1f_1 == null) {
                this.hb_1 = 6;
                var tmp_4 = this.l1f_1;
                suspendResult = this.h1f_1(this.i1f_1, isArray(tmp_4) ? tmp_4 : THROW_CCE(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_5 = this.l1f_1;
                var this_0 = isArray(tmp_5) ? tmp_5 : THROW_CCE();
                var destination = this.w1f_1;
                var endIndex = this_0.length;
                arrayCopy(this_0, destination, 0, 0, endIndex);
                this.hb_1 = 5;
                var tmp_6 = this.w1f_1;
                suspendResult = this.h1f_1(this.i1f_1, (!(tmp_6 == null) ? isArray(tmp_6) : false) ? tmp_6 : THROW_CCE(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.hb_1 = 8;
              continue $sm;
            }

          case 5:
            this.hb_1 = 7;
            continue $sm;
          case 6:
            this.hb_1 = 7;
            continue $sm;
          case 7:
            this.hb_1 = 8;
            continue $sm;
          case 8:
            this.hb_1 = 1;
            continue $sm;
          case 9:
            return Unit_instance;
          case 10:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 10) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  protoOf(combineInternal$slambda).w1b = function ($this$flowScope, completion) {
    var i = new combineInternal$slambda(this.f1f_1, this.g1f_1, this.h1f_1, this.i1f_1, completion);
    i.j1f_1 = $this$flowScope;
    return i;
  };
  function combineInternal$slambda_0($flows, $arrayFactory, $transform, $this_combineInternal, resultContinuation) {
    var i = new combineInternal$slambda($flows, $arrayFactory, $transform, $this_combineInternal, resultContinuation);
    var l = function ($this$flowScope, $completion) {
      return i.v1b($this$flowScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function flowScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.flow.internal.flowScope.<anonymous>' call
    var coroutine = new FlowCoroutine($completion.u6(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function FlowCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(FlowCoroutine).zi = function (cause) {
    if (cause instanceof ChildCancelledException)
      return true;
    return this.bj(cause);
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.b1g_1 === owner))
      throw _this__u8e3s4;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation) {
    this.k1g_1 = this$0;
    this.l1g_1 = $collector;
    this.m1g_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.k1g_1.s1g_1(this.l1g_1, this.m1g_1, this);
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).w1b = function ($this$launch, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this.k1g_1, this.l1g_1, this.m1g_1, completion);
    i.n1g_1 = $this$launch;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this$0, $collector, $value, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    this.b1h_1 = $previousFlow;
    this.c1h_1 = $this_coroutineScope;
    this.d1h_1 = this$0;
    this.e1h_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).o1d = function (value, $completion) {
    var tmp = this.p1d(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).fc = function (p1, $completion) {
    return this.o1d((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.g1h_1 = this.b1h_1._v;
            if (this.g1h_1 == null) {
              this.h1h_1 = null;
              this.hb_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.i1h_1 = this.g1h_1;
              var tmp_1 = this;
              tmp_1.j1h_1 = this.i1h_1;
              this.j1h_1.vi(new ChildCancelledException());
              this.hb_1 = 1;
              suspendResult = this.j1h_1.si(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h1h_1 = this.i1h_1;
            this.hb_1 = 2;
            continue $sm;
          case 2:
            var tmp_2 = CoroutineStart_UNDISPATCHED_getInstance();
            this.b1h_1._v = launch(this.c1h_1, VOID, tmp_2, ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this.d1h_1, this.e1h_1, this.f1h_1, null));
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).p1d = function (value, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda(this.b1h_1, this.c1h_1, this.d1h_1, this.e1h_1, completion);
    i.f1h_1 = value;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda_0($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.o1d(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.k1h_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).t13 = function (value, $completion) {
    return this.k1h_1(value, $completion);
  };
  function ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation) {
    this.t1h_1 = this$0;
    this.u1h_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).v1b = function ($this$coroutineScope, $completion) {
    var tmp = this.w1b($this$coroutineScope, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.w1h_1 = {_v: null};
            this.hb_1 = 1;
            var tmp_0 = ChannelFlowTransformLatest$flowCollect$slambda$slambda_0(this.w1h_1, this.v1h_1, this.t1h_1, this.u1h_1, null);
            suspendResult = this.t1h_1.e1c_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_0), this);
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).w1b = function ($this$coroutineScope, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this.t1h_1, this.u1h_1, completion);
    i.v1h_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlowTransformLatest$flowCollect$slambda_0(this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.v1b($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest(transform, flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
    this.s1g_1 = transform;
  }
  protoOf(ChannelFlowTransformLatest).n14 = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowTransformLatest(this.s1g_1, this.e1c_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowTransformLatest).x1h = function (collector, $completion) {
    // Inline function 'kotlinx.coroutines.assert' call
    return coroutineScope(ChannelFlowTransformLatest$flowCollect$slambda_0(this, collector, null), $completion);
  };
  protoOf(ChannelFlowTransformLatest).f1c = function (collector, $completion) {
    return this.x1h(collector, $completion);
  };
  function NopCollector() {
  }
  protoOf(NopCollector).y1h = function (value, $completion) {
    return Unit_instance;
  };
  protoOf(NopCollector).t13 = function (value, $completion) {
    return this.y1h((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    return NopCollector_instance;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  function get_UNINITIALIZED() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return UNINITIALIZED;
  }
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.df(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.z15_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.y15_1 + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        $this = $this.gi();
        collectJob_0 = collectJob_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.t2();
      var collectElement = $this_checkContext.y15_1.ob(key);
      var tmp;
      if (!(key === Key_instance_3)) {
        return !(element === collectElement) ? IntCompanionObject_instance.MIN_VALUE : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.z1h_1 = channel;
  }
  protoOf(SendingCollector).t13 = function (value, $completion) {
    return this.z1h_1.n11(value, $completion);
  };
  function buffer(_this__u8e3s4, capacity, onBufferOverflow) {
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = -2;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp_0;
    var tmp_1;
    if (capacity >= 0) {
      tmp_1 = true;
    } else {
      Factory_getInstance();
      tmp_1 = capacity === -2;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      Factory_getInstance();
      tmp_0 = capacity === -1;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp_0) {
      // Inline function 'kotlinx.coroutines.flow.buffer.<anonymous>' call
      var message = 'Buffer size should be non-negative, BUFFERED, or CONFLATED, but was ' + capacity;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp_2;
    Factory_getInstance();
    if (!(capacity === -1)) {
      tmp_2 = true;
    } else {
      tmp_2 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp_2) {
      // Inline function 'kotlinx.coroutines.flow.buffer.<anonymous>' call
      var message_0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var capacity_0 = capacity;
    var onBufferOverflow_0 = onBufferOverflow;
    var tmp_3 = capacity_0;
    Factory_getInstance();
    if (tmp_3 === -1) {
      capacity_0 = 0;
      onBufferOverflow_0 = BufferOverflow_DROP_OLDEST_getInstance();
    }
    var tmp_4;
    if (isInterface(_this__u8e3s4, FusibleFlow)) {
      tmp_4 = _this__u8e3s4.v14(VOID, capacity_0, onBufferOverflow_0);
    } else {
      tmp_4 = new ChannelFlowOperatorImpl(_this__u8e3s4, VOID, capacity_0, onBufferOverflow_0);
    }
    return tmp_4;
  }
  function get_defaultKeySelector() {
    _init_properties_Distinct_kt__4eindw();
    return defaultKeySelector;
  }
  var defaultKeySelector;
  function get_defaultAreEquivalent() {
    _init_properties_Distinct_kt__4eindw();
    return defaultAreEquivalent;
  }
  var defaultAreEquivalent;
  function distinctUntilChanged(_this__u8e3s4) {
    _init_properties_Distinct_kt__4eindw();
    var tmp;
    if (isInterface(_this__u8e3s4, StateFlow)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = distinctUntilChangedBy(_this__u8e3s4, get_defaultKeySelector(), get_defaultAreEquivalent());
    }
    return tmp;
  }
  function distinctUntilChangedBy(_this__u8e3s4, keySelector, areEquivalent) {
    _init_properties_Distinct_kt__4eindw();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (_this__u8e3s4 instanceof DistinctFlowImpl) {
      tmp_1 = _this__u8e3s4.b1i_1 === keySelector;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = _this__u8e3s4.c1i_1 === areEquivalent;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new DistinctFlowImpl(_this__u8e3s4, keySelector, areEquivalent);
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.d1i_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).t13 = function (value, $completion) {
    return this.d1i_1(value, $completion);
  };
  function DistinctFlowImpl$collect$slambda(this$0, $previousKey, $collector, resultContinuation) {
    this.m1i_1 = this$0;
    this.n1i_1 = $previousKey;
    this.o1i_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DistinctFlowImpl$collect$slambda).o1d = function (value, $completion) {
    var tmp = this.p1d(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(DistinctFlowImpl$collect$slambda).fc = function (p1, $completion) {
    return this.o1d((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DistinctFlowImpl$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.q1i_1 = this.m1i_1.b1i_1(this.p1i_1);
            if (this.n1i_1._v === get_NULL() ? true : !this.m1i_1.c1i_1(this.n1i_1._v, this.q1i_1)) {
              this.n1i_1._v = this.q1i_1;
              this.hb_1 = 1;
              suspendResult = this.o1i_1.t13(this.p1i_1, this);
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
  protoOf(DistinctFlowImpl$collect$slambda).p1d = function (value, completion) {
    var i = new DistinctFlowImpl$collect$slambda(this.m1i_1, this.n1i_1, this.o1i_1, completion);
    i.p1i_1 = value;
    return i;
  };
  function DistinctFlowImpl$collect$slambda_0(this$0, $previousKey, $collector, resultContinuation) {
    var i = new DistinctFlowImpl$collect$slambda(this$0, $previousKey, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.o1d(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DistinctFlowImpl(upstream, keySelector, areEquivalent) {
    this.a1i_1 = upstream;
    this.b1i_1 = keySelector;
    this.c1i_1 = areEquivalent;
  }
  protoOf(DistinctFlowImpl).g13 = function (collector, $completion) {
    var previousKey = {_v: get_NULL()};
    var tmp = DistinctFlowImpl$collect$slambda_0(this, previousKey, collector, null);
    return this.a1i_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp), $completion);
  };
  function defaultKeySelector$lambda(it) {
    _init_properties_Distinct_kt__4eindw();
    return it;
  }
  function defaultAreEquivalent$lambda(old, new_0) {
    _init_properties_Distinct_kt__4eindw();
    return equals(old, new_0);
  }
  var properties_initialized_Distinct_kt_uy8c72;
  function _init_properties_Distinct_kt__4eindw() {
    if (!properties_initialized_Distinct_kt_uy8c72) {
      properties_initialized_Distinct_kt_uy8c72 = true;
      defaultKeySelector = defaultKeySelector$lambda;
      defaultAreEquivalent = defaultAreEquivalent$lambda;
    }
  }
  function onCompletion(_this__u8e3s4, action) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4, action);
  }
  function invokeSafely(_this__u8e3s4, action, cause, $completion) {
    var tmp = new $invokeSafelyCOROUTINE$21(_this__u8e3s4, action, cause, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function ThrowingCollector(e) {
    this.c1j_1 = e;
  }
  protoOf(ThrowingCollector).y1h = function (value, $completion) {
    throw this.c1j_1;
  };
  protoOf(ThrowingCollector).t13 = function (value, $completion) {
    return this.y1h((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.c1j_1;
  }
  function $collectCOROUTINE$22(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1j_1 = _this__u8e3s4;
    this.m1j_1 = collector;
  }
  protoOf($collectCOROUTINE$22).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 9;
            var tmp_0 = this;
            tmp_0.n1j_1 = this.m1j_1;
            this.ib_1 = 7;
            this.hb_1 = 1;
            suspendResult = this.l1j_1.s1j_1.g13(this.n1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ib_1 = 9;
            this.hb_1 = 2;
            continue $sm;
          case 2:
            this.ib_1 = 9;
            var tmp_1 = this;
            tmp_1.o1j_1 = new SafeCollector(this.n1j_1, this.u6());
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.ib_1 = 6;
            this.hb_1 = 4;
            suspendResult = this.l1j_1.t1j_1(this.o1j_1, null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.p1j_1 = suspendResult;
            this.ib_1 = 9;
            this.hb_1 = 5;
            continue $sm;
          case 5:
            this.ib_1 = 9;
            this.o1j_1.b16();
            return Unit_instance;
          case 6:
            this.ib_1 = 9;
            this.q1j_1 = this.kb_1;
            this.o1j_1.b16();
            throw this.q1j_1;
          case 7:
            this.ib_1 = 9;
            var tmp_2 = this.kb_1;
            if (tmp_2 instanceof Error) {
              this.r1j_1 = this.kb_1;
              this.hb_1 = 8;
              suspendResult = invokeSafely(new ThrowingCollector(this.r1j_1), this.l1j_1.t1j_1, this.r1j_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.kb_1;
            }

          case 8:
            throw this.r1j_1;
          case 9:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 9) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_0($this_onCompletion, $action) {
    this.s1j_1 = $this_onCompletion;
    this.t1j_1 = $action;
  }
  protoOf(_no_name_provided__qut3iv_0).g13 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$22(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function $invokeSafelyCOROUTINE$21(_this__u8e3s4, action, cause, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z1i_1 = _this__u8e3s4;
    this.a1j_1 = action;
    this.b1j_1 = cause;
  }
  protoOf($invokeSafelyCOROUTINE$21).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.a1j_1(this.z1i_1, this.b1j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ib_1 = 3;
            this.hb_1 = 4;
            continue $sm;
          case 2:
            this.ib_1 = 3;
            var tmp_0 = this.kb_1;
            if (tmp_0 instanceof Error) {
              var e = this.kb_1;
              if (!(this.b1j_1 === null) ? !(this.b1j_1 === e) : false) {
                this.b1j_1;
              }
              throw e;
            } else {
              throw this.kb_1;
            }

          case 3:
            throw this.kb_1;
          case 4:
            this.ib_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.ib_1 === 3) {
          throw e_0;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e_0;
        }
      }
     while (true);
  };
  var DEFAULT_CONCURRENCY;
  function transformLatest(_this__u8e3s4, transform) {
    _init_properties_Merge_kt__cbpr96();
    return new ChannelFlowTransformLatest(transform, _this__u8e3s4);
  }
  function mapLatest(_this__u8e3s4, transform) {
    _init_properties_Merge_kt__cbpr96();
    return transformLatest(_this__u8e3s4, mapLatest$slambda_0(transform, null));
  }
  function mapLatest$slambda($transform, resultContinuation) {
    this.c1k_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mapLatest$slambda).g1k = function ($this$transformLatest, it, $completion) {
    var tmp = this.h1k($this$transformLatest, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(mapLatest$slambda).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.g1k(tmp, (p2 == null ? true : !(p2 == null)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(mapLatest$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.hb_1 = 1;
            suspendResult = this.c1k_1(this.e1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f1k_1 = suspendResult;
            this.hb_1 = 2;
            suspendResult = this.d1k_1.t13(this.f1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(mapLatest$slambda).h1k = function ($this$transformLatest, it, completion) {
    var i = new mapLatest$slambda(this.c1k_1, completion);
    i.d1k_1 = $this$transformLatest;
    i.e1k_1 = it;
    return i;
  };
  function mapLatest$slambda_0($transform, resultContinuation) {
    var i = new mapLatest$slambda($transform, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.g1k($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_Merge_kt_dhn6vs;
  function _init_properties_Merge_kt__cbpr96() {
    if (!properties_initialized_Merge_kt_dhn6vs) {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_instance.MAX_VALUE);
    }
  }
  function stateIn(_this__u8e3s4, scope, started, initialValue) {
    var config = configureSharing(_this__u8e3s4, 1);
    var state = MutableStateFlow(initialValue);
    var job = launchSharing(scope, config.m1k_1, config.j1k_1, state, started, initialValue);
    return new ReadonlyStateFlow(state, job);
  }
  function asStateFlow(_this__u8e3s4) {
    return new ReadonlyStateFlow(_this__u8e3s4, null);
  }
  function $onSubscriptionCOROUTINE$29(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1k_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$29).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 7;
            var tmp_0 = this;
            tmp_0.w1k_1 = new SafeCollector(this.v1k_1.o17_1, this.u6());
            this.hb_1 = 1;
            continue $sm;
          case 1:
            this.ib_1 = 6;
            this.hb_1 = 2;
            suspendResult = this.v1k_1.p17_1(this.w1k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x1k_1 = suspendResult;
            this.ib_1 = 7;
            this.hb_1 = 3;
            continue $sm;
          case 3:
            this.ib_1 = 7;
            this.w1k_1.b16();
            var tmp_1 = this.v1k_1.o17_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.hb_1 = 4;
              suspendResult = this.v1k_1.o17_1.q17(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 5;
              continue $sm;
            }

          case 4:
            this.hb_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            this.ib_1 = 7;
            var t = this.kb_1;
            this.w1k_1.b16();
            throw t;
          case 7:
            throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.ib_1 === 7) {
          throw e;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).q17 = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$29(this, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function SharingConfig(upstream, extraBufferCapacity, onBufferOverflow, context) {
    this.j1k_1 = upstream;
    this.k1k_1 = extraBufferCapacity;
    this.l1k_1 = onBufferOverflow;
    this.m1k_1 = context;
  }
  function configureSharing(_this__u8e3s4, replay) {
    // Inline function 'kotlinx.coroutines.assert' call
    var defaultExtraCapacity = coerceAtLeast(replay, Factory_getInstance().e12_1) - replay | 0;
    if (_this__u8e3s4 instanceof ChannelFlow) {
      var upstream = _this__u8e3s4.o14();
      if (!(upstream == null)) {
        var tmp0_subject = _this__u8e3s4.l14_1;
        var tmp;
        var tmp_0;
        var tmp_1;
        Factory_getInstance();
        if (tmp0_subject === -3) {
          tmp_1 = true;
        } else {
          Factory_getInstance();
          tmp_1 = tmp0_subject === -2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = tmp0_subject === 0;
        }
        if (tmp_0) {
          tmp = _this__u8e3s4.m14_1.equals(BufferOverflow_SUSPEND_getInstance()) ? _this__u8e3s4.l14_1 === 0 ? 0 : defaultExtraCapacity : replay === 0 ? 1 : 0;
        } else {
          tmp = _this__u8e3s4.l14_1;
        }
        return new SharingConfig(upstream, tmp, _this__u8e3s4.m14_1, _this__u8e3s4.k14_1);
      }
    }
    return new SharingConfig(_this__u8e3s4, defaultExtraCapacity, BufferOverflow_SUSPEND_getInstance(), EmptyCoroutineContext_getInstance());
  }
  function launchSharing(_this__u8e3s4, context, upstream, shared, started, initialValue) {
    var start = equals(started, Companion_getInstance_2().e18_1) ? CoroutineStart_DEFAULT_getInstance() : CoroutineStart_UNDISPATCHED_getInstance();
    return launch(_this__u8e3s4, context, start, launchSharing$slambda_0(started, upstream, shared, initialValue, null));
  }
  function $collectCOROUTINE$30(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1l_1 = _this__u8e3s4;
    this.h1l_1 = collector;
  }
  protoOf($collectCOROUTINE$30).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.g1l_1.j1l_1.t17(this.h1l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlyStateFlow(flow, job) {
    this.i1l_1 = job;
    this.j1l_1 = flow;
  }
  protoOf(ReadonlyStateFlow).u2 = function () {
    return this.j1l_1.u2();
  };
  protoOf(ReadonlyStateFlow).t17 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$30(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(ReadonlyStateFlow).g13 = function (collector, $completion) {
    return this.t17(collector, $completion);
  };
  protoOf(ReadonlyStateFlow).u14 = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function launchSharing$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchSharing$slambda$slambda).t1l = function (it, $completion) {
    var tmp = this.t18(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(launchSharing$slambda$slambda).fc = function (p1, $completion) {
    return this.t1l((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchSharing$slambda$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        if (tmp === 0) {
          this.ib_1 = 1;
          return this.s1l_1 > 0;
        } else if (tmp === 1) {
          throw this.kb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(launchSharing$slambda$slambda).t18 = function (it, completion) {
    var i = new launchSharing$slambda$slambda(completion);
    i.s1l_1 = it;
    return i;
  };
  function launchSharing$slambda$slambda_0(resultContinuation) {
    var i = new launchSharing$slambda$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.t1l(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchSharing$slambda$slambda_1($upstream, $shared, $initialValue, resultContinuation) {
    this.c1m_1 = $upstream;
    this.d1m_1 = $shared;
    this.e1m_1 = $initialValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchSharing$slambda$slambda_1).i1m = function (it, $completion) {
    var tmp = this.j1m(it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(launchSharing$slambda$slambda_1).fc = function (p1, $completion) {
    return this.i1m(p1 instanceof SharingCommand ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchSharing$slambda$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.g1m_1 = this.f1m_1;
            this.h1m_1 = this.g1m_1.j9_1;
            if (this.h1m_1 === 0) {
              this.hb_1 = 1;
              suspendResult = this.c1m_1.g13(this.d1m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.h1m_1 === 1) {
                this.hb_1 = 2;
                continue $sm;
              } else {
                if (this.h1m_1 === 2) {
                  if (this.e1m_1 === get_NO_VALUE()) {
                    this.d1m_1.y17();
                  } else {
                    this.d1m_1.u17(this.e1m_1);
                  }
                  this.hb_1 = 2;
                  continue $sm;
                } else {
                  this.hb_1 = 2;
                  continue $sm;
                }
              }
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
  protoOf(launchSharing$slambda$slambda_1).j1m = function (it, completion) {
    var i = new launchSharing$slambda$slambda_1(this.c1m_1, this.d1m_1, this.e1m_1, completion);
    i.f1m_1 = it;
    return i;
  };
  function launchSharing$slambda$slambda_2($upstream, $shared, $initialValue, resultContinuation) {
    var i = new launchSharing$slambda$slambda_1($upstream, $shared, $initialValue, resultContinuation);
    var l = function (it, $completion) {
      return i.i1m(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchSharing$slambda($started, $upstream, $shared, $initialValue, resultContinuation) {
    this.s1m_1 = $started;
    this.t1m_1 = $upstream;
    this.u1m_1 = $shared;
    this.v1m_1 = $initialValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchSharing$slambda).v1b = function ($this$launch, $completion) {
    var tmp = this.w1b($this$launch, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(launchSharing$slambda).fc = function (p1, $completion) {
    return this.v1b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchSharing$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 6;
            if (this.s1m_1 === Companion_getInstance_2().e18_1) {
              this.hb_1 = 4;
              suspendResult = this.t1m_1.g13(this.u1m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.s1m_1 === Companion_getInstance_2().f18_1) {
                this.hb_1 = 2;
                var tmp_0 = this.u1m_1.z17();
                suspendResult = first(tmp_0, launchSharing$slambda$slambda_0(null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.hb_1 = 1;
                var tmp_1 = distinctUntilChanged(this.s1m_1.g18(this.u1m_1.z17()));
                suspendResult = collectLatest(tmp_1, launchSharing$slambda$slambda_2(this.t1m_1, this.u1m_1, this.v1m_1, null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 1:
            this.hb_1 = 5;
            continue $sm;
          case 2:
            this.hb_1 = 3;
            suspendResult = this.t1m_1.g13(this.u1m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.hb_1 = 5;
            continue $sm;
          case 4:
            this.hb_1 = 5;
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
  protoOf(launchSharing$slambda).w1b = function ($this$launch, completion) {
    var i = new launchSharing$slambda(this.s1m_1, this.t1m_1, this.u1m_1, this.v1m_1, completion);
    i.w1m_1 = $this$launch;
    return i;
  };
  function launchSharing$slambda_0($started, $upstream, $shared, $initialValue, resultContinuation) {
    var i = new launchSharing$slambda($started, $upstream, $shared, $initialValue, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1b($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function scan(_this__u8e3s4, initial, operation) {
    return runningFold(_this__u8e3s4, initial, operation);
  }
  function runningFold(_this__u8e3s4, initial, operation) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_1(initial, _this__u8e3s4, operation);
  }
  function filterNotNull(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_2(_this__u8e3s4);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.x1m_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).t13 = function (value, $completion) {
    return this.x1m_1(value, $completion);
  };
  function runningFold$o$collect$slambda($accumulator, $operation, $$this$unsafeFlow, resultContinuation) {
    this.g1n_1 = $accumulator;
    this.h1n_1 = $operation;
    this.i1n_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(runningFold$o$collect$slambda).o1d = function (value, $completion) {
    var tmp = this.p1d(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(runningFold$o$collect$slambda).fc = function (p1, $completion) {
    return this.o1d((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(runningFold$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.hb_1 = 1;
            suspendResult = this.h1n_1(this.g1n_1._v, this.j1n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k1n_1 = suspendResult;
            this.g1n_1._v = this.k1n_1;
            this.hb_1 = 2;
            suspendResult = this.i1n_1.t13(this.g1n_1._v, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(runningFold$o$collect$slambda).p1d = function (value, completion) {
    var i = new runningFold$o$collect$slambda(this.g1n_1, this.h1n_1, this.i1n_1, completion);
    i.j1n_1 = value;
    return i;
  };
  function runningFold$o$collect$slambda_0($accumulator, $operation, $$this$unsafeFlow, resultContinuation) {
    var i = new runningFold$o$collect$slambda($accumulator, $operation, $$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.o1d(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$33(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1n_1 = _this__u8e3s4;
    this.u1n_1 = collector;
  }
  protoOf($collectCOROUTINE$33).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            var tmp_0 = this;
            tmp_0.v1n_1 = this.u1n_1;
            this.w1n_1 = {_v: this.t1n_1.x1n_1};
            this.hb_1 = 1;
            suspendResult = this.v1n_1.t13(this.w1n_1._v, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.hb_1 = 2;
            var tmp_1 = runningFold$o$collect$slambda_0(this.w1n_1, this.t1n_1.z1n_1, this.v1n_1, null);
            suspendResult = this.t1n_1.y1n_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  function _no_name_provided__qut3iv_1($initial, $this_runningFold, $operation) {
    this.x1n_1 = $initial;
    this.y1n_1 = $this_runningFold;
    this.z1n_1 = $operation;
  }
  protoOf(_no_name_provided__qut3iv_1).a1o = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$33(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_1).g13 = function (collector, $completion) {
    return this.a1o(collector, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.b1o_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).t13 = function (value, $completion) {
    return this.b1o_1(value, $completion);
  };
  function filterNotNull$o$collect$slambda($$this$unsafeFlow, resultContinuation) {
    this.k1o_1 = $$this$unsafeFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(filterNotNull$o$collect$slambda).p1o = function (value, $completion) {
    var tmp = this.q1o(value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(filterNotNull$o$collect$slambda).fc = function (p1, $completion) {
    return this.p1o((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(filterNotNull$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 5;
            this.hb_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.n1o_1 = this.k1o_1;
            var tmp_1 = this;
            tmp_1.o1o_1 = this.l1o_1;
            if (!(this.o1o_1 == null)) {
              this.hb_1 = 3;
              suspendResult = this.n1o_1.t13(this.o1o_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hb_1 = 2;
              continue $sm;
            }

          case 2:
            if (false) {
              this.hb_1 = 1;
              continue $sm;
            }

            this.hb_1 = 4;
            continue $sm;
          case 3:
            this.m1o_1 = suspendResult;
            this.hb_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
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
  protoOf(filterNotNull$o$collect$slambda).q1o = function (value, completion) {
    var i = new filterNotNull$o$collect$slambda(this.k1o_1, completion);
    i.l1o_1 = value;
    return i;
  };
  function filterNotNull$o$collect$slambda_0($$this$unsafeFlow, resultContinuation) {
    var i = new filterNotNull$o$collect$slambda($$this$unsafeFlow, resultContinuation);
    var l = function (value, $completion) {
      return i.p1o(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$34(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z1o_1 = _this__u8e3s4;
    this.a1p_1 = collector;
  }
  protoOf($collectCOROUTINE$34).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.b1p_1 = this.a1p_1;
            this.hb_1 = 1;
            var tmp_1 = filterNotNull$o$collect$slambda_0(this.b1p_1, null);
            suspendResult = this.z1o_1.c1p_1.g13(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_1), this);
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
  function _no_name_provided__qut3iv_2($this) {
    this.c1p_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv_2).g13 = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$34(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function combine(_this__u8e3s4, flow, transform) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_3(_this__u8e3s4, flow, transform);
  }
  function combine_0(flow, flow2, flow3, transform) {
    // Inline function 'kotlinx.coroutines.flow.combineUnsafe' call
    var flows = [flow, flow2, flow3];
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_4(flows, transform);
  }
  function nullArrayFactory() {
    return nullArrayFactory$lambda;
  }
  function combine_1(flow, flow2, transform) {
    return combine(flow, flow2, transform);
  }
  function combine$o$collect$slambda($transform, resultContinuation) {
    this.l1p_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$collect$slambda).p1p = function ($this$combineInternal, it, $completion) {
    var tmp = this.q1p($this$combineInternal, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(combine$o$collect$slambda).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.p1p(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$collect$slambda).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.hb_1 = 1;
            var tmp_0 = this.n1p_1[0];
            var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var tmp_2 = this.n1p_1[1];
            suspendResult = this.l1p_1(tmp_1, (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o1p_1 = suspendResult;
            this.hb_1 = 2;
            suspendResult = this.m1p_1.t13(this.o1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(combine$o$collect$slambda).q1p = function ($this$combineInternal, it, completion) {
    var i = new combine$o$collect$slambda(this.l1p_1, completion);
    i.m1p_1 = $this$combineInternal;
    i.n1p_1 = it;
    return i;
  };
  function combine$o$collect$slambda_0($transform, resultContinuation) {
    var i = new combine$o$collect$slambda($transform, resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.p1p($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$35(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z1p_1 = _this__u8e3s4;
    this.a1q_1 = collector;
  }
  protoOf($collectCOROUTINE$35).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.b1q_1 = this.a1q_1;
            this.hb_1 = 1;
            var this_0 = [this.z1p_1.c1q_1, this.z1p_1.d1q_1];
            var tmp_1 = nullArrayFactory();
            suspendResult = combineInternal(this.b1q_1, this_0, tmp_1, combine$o$collect$slambda_0(this.z1p_1.e1q_1, null), this);
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
  function _no_name_provided__qut3iv_3($this_combine, $flow, $transform) {
    this.c1q_1 = $this_combine;
    this.d1q_1 = $flow;
    this.e1q_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_3).a1o = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$35(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_3).g13 = function (collector, $completion) {
    return this.a1o(collector, $completion);
  };
  function combine$o$collect$slambda_1($transform, resultContinuation) {
    this.n1q_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$collect$slambda_1).p1p = function ($this$combineInternal, it, $completion) {
    var tmp = this.q1p($this$combineInternal, it, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(combine$o$collect$slambda_1).i1k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.p1p(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$collect$slambda_1).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            var tmp_0 = this;
            tmp_0.q1q_1 = this.p1q_1;
            this.hb_1 = 1;
            var tmp_1 = this.q1q_1[0];
            var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
            var tmp_3 = this.q1q_1[1];
            var tmp_4 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
            var tmp_5 = this.q1q_1[2];
            suspendResult = this.n1q_1(tmp_2, tmp_4, (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r1q_1 = suspendResult;
            this.hb_1 = 2;
            suspendResult = this.o1q_1.t13(this.r1q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(combine$o$collect$slambda_1).q1p = function ($this$combineInternal, it, completion) {
    var i = new combine$o$collect$slambda_1(this.n1q_1, completion);
    i.o1q_1 = $this$combineInternal;
    i.p1q_1 = it;
    return i;
  };
  function combine$o$collect$slambda_2($transform, resultContinuation) {
    var i = new combine$o$collect$slambda_1($transform, resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.p1p($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$36(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1r_1 = _this__u8e3s4;
    this.b1r_1 = collector;
  }
  protoOf($collectCOROUTINE$36).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 2;
            var tmp_0 = this;
            tmp_0.c1r_1 = this.b1r_1;
            this.hb_1 = 1;
            var tmp_1 = nullArrayFactory();
            suspendResult = combineInternal(this.c1r_1, this.a1r_1.d1r_1, tmp_1, combine$o$collect$slambda_2(this.a1r_1.e1r_1, null), this);
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
  function _no_name_provided__qut3iv_4($flows, $transform) {
    this.d1r_1 = $flows;
    this.e1r_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_4).a1o = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$36(this, collector, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  protoOf(_no_name_provided__qut3iv_4).g13 = function (collector, $completion) {
    return this.a1o(collector, $completion);
  };
  function nullArrayFactory$lambda() {
    return null;
  }
  function collect(_this__u8e3s4, $completion) {
    return _this__u8e3s4.g13(NopCollector_instance, $completion);
  }
  function collectLatest(_this__u8e3s4, action, $completion) {
    return collect(buffer(mapLatest(_this__u8e3s4, action), 0), $completion);
  }
  function emitAll_0(_this__u8e3s4, flow, $completion) {
    ensureActive_1(_this__u8e3s4);
    return flow.g13(_this__u8e3s4, $completion);
  }
  function first(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstCOROUTINE$37(_this__u8e3s4, predicate, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  }
  function $emitCOROUTINE$38(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1s_1 = _this__u8e3s4;
    this.b1s_1 = value;
  }
  protoOf($emitCOROUTINE$38).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 4;
            var tmp_0 = this;
            tmp_0.c1s_1 = this.b1s_1;
            this.hb_1 = 1;
            suspendResult = this.a1s_1.e1s_1(this.c1s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_1 = this;
              this.a1s_1.f1s_1._v = this.c1s_1;
              tmp_1.d1s_1 = false;
              this.hb_1 = 2;
              continue $sm;
            } else {
              var tmp_2 = this;
              tmp_2.d1s_1 = true;
              this.hb_1 = 2;
              continue $sm;
            }

          case 2:
            var ARGUMENT = this.d1s_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.a1s_1);
            } else {
              this.hb_1 = 3;
              continue $sm;
            }

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
  function _no_name_provided__qut3iv_5($predicate, $result) {
    this.e1s_1 = $predicate;
    this.f1s_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_5).t13 = function (value, $completion) {
    var tmp = new $emitCOROUTINE$38(this, value, $completion);
    tmp.jb_1 = Unit_instance;
    tmp.kb_1 = null;
    return tmp.tb();
  };
  function $firstCOROUTINE$37(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1r_1 = _this__u8e3s4;
    this.o1r_1 = predicate;
  }
  protoOf($firstCOROUTINE$37).tb = function () {
    var suspendResult = this.jb_1;
    $sm: do
      try {
        var tmp = this.hb_1;
        switch (tmp) {
          case 0:
            this.ib_1 = 3;
            this.p1r_1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.q1r_1 = this.n1r_1;
            var tmp_1 = this;
            tmp_1.r1r_1 = new _no_name_provided__qut3iv_5(this.o1r_1, this.p1r_1);
            this.ib_1 = 2;
            this.hb_1 = 1;
            suspendResult = this.q1r_1.g13(this.r1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ib_1 = 3;
            this.hb_1 = 4;
            continue $sm;
          case 2:
            this.ib_1 = 3;
            var tmp_2 = this.kb_1;
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.kb_1;
              checkOwnership(e, this.r1r_1);
              this.hb_1 = 4;
              continue $sm;
            } else {
              throw this.kb_1;
            }

          case 3:
            throw this.kb_1;
          case 4:
            this.ib_1 = 3;
            if (this.p1r_1._v === get_NULL())
              throw NoSuchElementException_init_$Create$_0('Expected at least one element matching the predicate ' + this.o1r_1);
            var tmp_3 = this.p1r_1._v;
            return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.ib_1 === 3) {
          throw e_0;
        } else {
          this.hb_1 = this.ib_1;
          this.kb_1 = e_0;
        }
      }
     while (true);
  };
  function OpDescriptor() {
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.dn_1 = id;
    this.en_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).gw = function () {
    return this.en_1.kotlinx$atomicfu$value === this.iv() ? !this.nw() : false;
  };
  protoOf(Segment).hw = function () {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      var this_0 = this.en_1;
      while (true) {
        var cur = this_0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.internal.Segment.tryIncPointers.<anonymous>' call
        if (!(!(cur === this.iv()) ? true : this.nw())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (this_0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).iw = function () {
    return this.en_1.atomicfu$addAndGet(-65536) === this.iv() ? !this.nw() : false;
  };
  protoOf(Segment).fw = function () {
    if (this.en_1.atomicfu$incrementAndGet() === this.iv()) {
      this.x();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = _get_nextOrClosed__w0gmuv(this_0);
      var tmp;
      if (it === get_CLOSED()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.qw())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.ry_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.ry_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.ry_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.ry_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.ry_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.jw_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.ow();
    while (!(cur === null) ? cur.gw() : false)
      cur = cur.kw_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.lw());
    while (cur.gw()) {
      var tmp0_elvis_lhs = cur.lw();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function ConcurrentLinkedListNode(prev) {
    this.jw_1 = atomic$ref$1(null);
    this.kw_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).lw = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
    var it = _get_nextOrClosed__w0gmuv(this);
    var tmp;
    if (it === get_CLOSED()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).mw = function (value) {
    return this.jw_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).nw = function () {
    return this.lw() == null;
  };
  protoOf(ConcurrentLinkedListNode).ow = function () {
    return this.kw_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).pw = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.kw_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).qw = function () {
    return this.jw_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).x = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.nw())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        var this_0 = next.kw_1;
        while (true) {
          var cur = this_0.kotlinx$atomicfu$value;
          // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.remove.<anonymous>' call
          var upd = cur === null ? null : prev;
          if (this_0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.jw_1.kotlinx$atomicfu$value = next;
      if (next.gw() ? !next.nw() : false)
        continue $l$loop_0;
      if (!(prev === null) ? prev.gw() : false)
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.dn_1.a7(id) < 0 ? true : cur.gw()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed.<anonymous>' call
      var it = _get_nextOrClosed__w0gmuv(this_0);
      var tmp;
      if (it === get_CLOSED()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var newTail = createNewSegment(cur.dn_1.qa(toLong(1)), cur);
      if (cur.mw(newTail)) {
        if (cur.gw()) {
          cur.x();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var tmp0_iterator = get_platformExceptionHandlers().v();
    while (tmp0_iterator.w()) {
      var handler = tmp0_iterator.y();
      try {
        handler.gp(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _ = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.vm_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.rm_1 = dispatcher;
    this.sm_1 = continuation;
    this.tm_1 = get_UNDEFINED();
    this.um_1 = threadContextElements(this.u6());
    this.vm_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).u6 = function () {
    return this.sm_1.u6();
  };
  protoOf(DispatchedContinuation).ym = function () {
    return !(this.vm_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).g1s = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.vm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).fp = function () {
    this.g1s();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.un();
    }
  };
  protoOf(DispatchedContinuation).wm = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.vm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.vm_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.vm_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).do = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.vm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.vm_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.vm_1.atomicfu$compareAndSet(state, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).an = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.vm_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.vm_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.vm_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).wn = function () {
    var state = this.tm_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.tm_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).vn = function () {
    return this;
  };
  protoOf(DispatchedContinuation).v6 = function (result) {
    var context = this.sm_1.u6();
    var state = toState_0(result);
    if (this.rm_1.cp(context)) {
      this.tm_1 = state;
      this.zm_1 = get_MODE_ATOMIC();
      this.rm_1.dp(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var mode = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().bq();
        if (false ? eventLoop.wp() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.vp()) {
          this.tm_1 = state;
          this.zm_1 = mode;
          eventLoop.up(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.xp(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.u6();
            this.um_1;
            this.sm_1.v6(result);
            $l$loop: while (eventLoop.tp()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.ho(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.yp(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).xn = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.ap_1(cause);
    }
  };
  protoOf(DispatchedContinuation).av = function (context, value) {
    this.tm_1 = value;
    this.zm_1 = get_MODE_CANCELLABLE();
    this.rm_1.ep(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.rm_1 + ', ' + toDebugString(this.sm_1) + ']';
  };
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.rm_1.cp(_this__u8e3s4.u6())) {
        _this__u8e3s4.tm_1 = state;
        _this__u8e3s4.zm_1 = get_MODE_CANCELLABLE();
        _this__u8e3s4.rm_1.dp(_this__u8e3s4.u6(), _this__u8e3s4);
        tmp_0 = Unit_instance;
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var mode = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().bq();
          if (false ? eventLoop.wp() : false) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.vp()) {
            _this__u8e3s4.tm_1 = state;
            _this__u8e3s4.zm_1 = mode;
            eventLoop.up(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.xp(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.u6().ob(Key_instance_3);
                if (!(job == null) ? !job.nh() : false) {
                  var cause = job.mi();
                  _this__u8e3s4.xn(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.v6(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.sm_1;
                _this__u8e3s4.um_1;
                _this__u8e3s4.sm_1.v6(result);
              }
              $l$loop: while (eventLoop.tp()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.ho(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.yp(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.v6(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      var mode = get_MODE_CANCELLABLE();
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().bq();
      if (true ? eventLoop.wp() : false) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.vp()) {
        _this__u8e3s4.tm_1 = Unit_instance;
        _this__u8e3s4.zm_1 = mode;
        eventLoop.up(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.xp(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.go();
          $l$loop: while (eventLoop.tp()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.ho(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.yp(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.zm_1 = resumeMode;
  }
  protoOf(DispatchedTask).xn = function (takenState, cause) {
  };
  protoOf(DispatchedTask).co = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).fo = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sh_1;
  };
  protoOf(DispatchedTask).go = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_instance;
    var fatalException = null;
    try {
      var tmp = this.vn();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.sm_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.um_1;
      var context = continuation.u6();
      var state = this.wn();
      var exception = this.fo(state);
      var job = (exception == null ? get_isCancellableMode(this.zm_1) : false) ? context.ob(Key_instance_3) : null;
      var tmp_0;
      if (!(job == null) ? !job.nh() : false) {
        var cause = job.mi();
        this.xn(state, cause);
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.v6(tmp$ret$0);
        tmp_0 = Unit_instance;
      } else {
        var tmp_1;
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.v6(tmp$ret$1);
          tmp_1 = Unit_instance;
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.co(state);
          var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
          continuation.v6(tmp$ret$3);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'kotlinx.coroutines.DispatchedTask.run.<anonymous>' call
        // Inline function 'kotlinx.coroutines.afterTask' call
        tmp_2 = _Result___init__impl__xyqfz8(Unit_instance);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var result = tmp_2;
      this.ho(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).ho = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_instance;
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.vn().u6(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.vn();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.zm_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.rm_1;
      var context = delegate.u6();
      if (dispatcher.cp(context)) {
        dispatcher.dp(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().bq();
    if (eventLoop.vp()) {
      eventLoop.up(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.xp(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.vn(), true);
        $l$loop: while (eventLoop.tp()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.ho(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.yp(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.wn();
    var exception = _this__u8e3s4.fo(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.co(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.sm_1;
      this_0.um_1;
      this_0.sm_1.v6(result);
    } else {
      delegate.v6(result);
    }
  }
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).s(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.s((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.s(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === ex) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_instance;
    };
  }
  function ContextScope(context) {
    this.h1s_1 = context;
  }
  protoOf(ContextScope).mh = function () {
    return this.h1s_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.h1s_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.cm_1 = uCont;
  }
  protoOf(ScopeCoroutine).fj = function () {
    return true;
  };
  protoOf(ScopeCoroutine).xh = function (state) {
    resumeCancellableWith(intercepted(this.cm_1), recoverResult(state, this.cm_1));
  };
  protoOf(ScopeCoroutine).wh = function (state) {
    this.cm_1.v6(recoverResult(state, this.cm_1));
  };
  function Symbol(symbol) {
    this.i1s_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.i1s_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_instance.MAX_VALUE : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).db();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    var tmp;
    if (maxValue === VOID) {
      Companion_getInstance();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = maxValue;
    }
    maxValue = tmp;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var value = tmp_0;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var parsed = tmp_1;
    if (!(minValue.a7(parsed) <= 0 ? parsed.a7(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(completion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$glj1hg(fatalCompletion, e);
        tmp_1 = Unit_instance;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.v6(tmp$ret$0);
    throw e;
  }
  function dispatcherFailure$accessor$glj1hg(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.fc(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.vh(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.sh_1;
        if (true) {
          throw recoverStackTrace(state.sh_1, _this__u8e3s4.cm_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.sh_1, _this__u8e3s4.cm_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.fc(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.vh(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var e_0 = state.sh_1;
        var tmp_3;
        if (e_0 instanceof TimeoutCancellationException) {
          tmp_3 = e_0.gu_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.sh_1, _this__u8e3s4.cm_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.sh_1, _this__u8e3s4.cm_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.u6();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.fc(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.v6(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
        var tmp$ret$9 = _Result___init__impl__xyqfz8(value_0);
        actualCompletion.v6(tmp$ret$9);
      }
    }
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  var NO_RESULT;
  var PARAM_CLAUSE_0;
  function SelectInstance() {
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.hy_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.n1s($this, internalResult);
        if ($this.hy_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.jy_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.jy_1 = null;
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.hy_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, List)) {
                if ($this.hy_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.iy_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = clauses.v();
      while (tmp0_iterator.w()) {
        var element = tmp0_iterator.y();
        // Inline function 'kotlinx.coroutines.selects.SelectImplementation.findClause.<anonymous>' call
        if (element.k1s_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function ClauseData() {
  }
  protoOf(ClauseData).n1s = function (select, internalResult) {
    var tmp0_safe_receiver = this.m1s_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.l1s_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).ky = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.km(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.ok(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (it) {
      this$0.z1s_1.kotlinx$atomicfu$value = this$1.c1t_1;
      this$0.q1s(this$1.c1t_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.q1s(this$1.c1t_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.e1t())
        return 0;
      var curOwner = $this.z1s_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.bo();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.ll();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.m1t()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.z1s_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.d1t_1 = $outer;
    this.b1t_1 = cont;
    this.c1t_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).u6 = function () {
    return this.b1t_1.u6();
  };
  protoOf(CancellableContinuationWithOwner).ii = function () {
    return this.b1t_1.ii();
  };
  protoOf(CancellableContinuationWithOwner).lm = function (cause) {
    return this.b1t_1.lm(cause);
  };
  protoOf(CancellableContinuationWithOwner).ok = function (token) {
    this.b1t_1.ok(token);
  };
  protoOf(CancellableContinuationWithOwner).kl = function (handler) {
    this.b1t_1.kl(handler);
  };
  protoOf(CancellableContinuationWithOwner).ke = function (result) {
    this.b1t_1.v6(result);
  };
  protoOf(CancellableContinuationWithOwner).v6 = function (result) {
    return this.ke(result);
  };
  protoOf(CancellableContinuationWithOwner).nk = function (exception) {
    return this.b1t_1.nk(exception);
  };
  protoOf(CancellableContinuationWithOwner).n1t = function (_this__u8e3s4, value) {
    this.b1t_1.nm(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).nm = function (_this__u8e3s4, value) {
    return this.n1t(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).eo = function (segment, index) {
    this.b1t_1.eo(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).o1t = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.b1t_1.km(Unit_instance, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.d1t_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.d1t_1.z1s_1.kotlinx$atomicfu$value = this.c1t_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).km = function (value, idempotent, onCancellation) {
    return this.o1t(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).p1t = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.d1t_1.z1s_1.kotlinx$atomicfu$value = this.c1t_1;
    this.b1t_1.om(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.d1t_1, this));
  };
  protoOf(CancellableContinuationWithOwner).om = function (value, onCancellation) {
    return this.p1t(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (it) {
      this$0.q1s($owner);
      return Unit_instance;
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, owner, _anonymous_parameter_2__qggqfi) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreImpl.call(this, 1, locked ? 1 : 0);
    this.z1s_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.a1t_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).e1t = function () {
    return this.q1t() === 0;
  };
  protoOf(MutexImpl).o1s = function (owner, $completion) {
    if (this.r1t(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).r1t = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var message = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(message));
      default:
        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MutexImpl).q1s = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.e1t()) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.z1s_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(curOwner === owner ? true : owner == null)) {
        // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.z1s_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.fp();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.e1t() + ',owner=' + toString_0(this.z1s_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.k1t_1.atomicfu$getAndDecrement();
      if (p > $this.f1t_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.k1t_1.kotlinx$atomicfu$value;
      if (cur <= $this.f1t_1)
        break $l$loop_0;
      if ($this.k1t_1.atomicfu$compareAndSet(cur, $this.f1t_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.i1t_1.kotlinx$atomicfu$value;
    var enqIdx = $this.j1t_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.i1t_1;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE_0();
      var id = enqIdx.l9(toLong(other));
      while (true) {
        var s = findSegmentInternal(curTail, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.dn_1.a7(to.dn_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!to.hw()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.iw()) {
                  cur.x();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (to.iw()) {
                to.x();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = enqIdx.sa(toLong(other_0)).db();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.w1t_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.eo(segment, i);
      return true;
    }
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var expected = get_PERMIT();
    var value = get_TAKEN();
    if (segment.w1t_1.atomicfu$get(i).atomicfu$compareAndSet(expected, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.om(Unit_instance, $this.l1t_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.j1s(Unit_instance);
        } else {
          var message = 'unexpected: ' + waiter;
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.g1t_1.kotlinx$atomicfu$value;
    var deqIdx = $this.h1t_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = deqIdx.l9(toLong(other));
    var createNewSegment = createSegment$ref_1();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      var this_0 = $this.g1t_1;
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var to = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
            while (true) {
              // Inline function 'kotlinx.coroutines.internal.moveForward.<anonymous>' call
              var cur = this_0.kotlinx$atomicfu$value;
              if (cur.dn_1.a7(to.dn_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!to.hw()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (this_0.atomicfu$compareAndSet(cur, to)) {
                if (cur.iw()) {
                  cur.x();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (to.iw()) {
                to.x();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$2);
    segment.pw();
    if (segment.dn_1.a7(id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = deqIdx.sa(toLong(other_0)).db();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.w1t_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.tryResumeNextFromQueue.<anonymous>' call
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.w1t_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var expected = get_PERMIT();
      var value_0 = get_BROKEN();
      return !segment.w1t_1.atomicfu$get(i).atomicfu$compareAndSet(expected, value_0);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire(cellState, $this);
  }
  function tryResumeAcquire(_this__u8e3s4, $this) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      var token = _this__u8e3s4.km(Unit_instance, null, $this.l1t_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.ok(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        tmp = _this__u8e3s4.cy($this, Unit_instance);
      } else {
        var message = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreImpl$onCancellationRelease$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8) {
      this$0.fp();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function createSegment$ref_1() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function SemaphoreImpl(permits, acquiredPermits) {
    this.f1t_1 = permits;
    this.h1t_1 = atomic$long$1(new Long(0, 0));
    this.j1t_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.f1t_1 > 0)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      var message = 'Semaphore should have at least 1 permit, but had ' + this.f1t_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.f1t_1 : false)) {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.<anonymous>' call
      var message_0 = 'The number of acquired permits should be in 0..' + this.f1t_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.g1t_1 = atomic$ref$1(s);
    this.i1t_1 = atomic$ref$1(s);
    this.k1t_1 = atomic$int$1(this.f1t_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.l1t_1 = SemaphoreImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreImpl).q1t = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.k1t_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreImpl).m1t = function () {
    $l$loop: while (true) {
      var p = this.k1t_1.kotlinx$atomicfu$value;
      if (p > this.f1t_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.k1t_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreImpl).acquireCont = function (waiter) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
          waiter.om(Unit_instance, this.l1t_1);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        // Inline function 'kotlinx.coroutines.sync.SemaphoreImpl.acquire.<anonymous>' call
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreImpl).fp = function () {
    while (true) {
      var p = this.k1t_1.atomicfu$getAndIncrement();
      if (p >= this.f1t_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.f1t_1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (p >= 0)
        return Unit_instance;
      if (tryResumeNextFromQueue(this))
        return Unit_instance;
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.w1t_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).iv = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).fn = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.w1t_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.fw();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.dn_1.toString() + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    if (typeof _this__u8e3s4 === 'function')
      _this__u8e3s4(cause);
    else {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().hp_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.mh().ef(context);
    return (!(combined === Dispatchers_getInstance().hp_1) ? combined.ob(Key_instance) == null : false) ? combined.ef(Dispatchers_getInstance().hp_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.ef(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).wh = function (state) {
    return this.cm_1.v6(recoverResult(state, this.cm_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).d7();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.hp_1 = createDefaultDispatcher();
    this.ip_1 = Unconfined_getInstance();
    this.jp_1 = new JsMainDispatcher(this.hp_1, false);
    this.kp_1 = null;
  }
  protoOf(Dispatchers).lp = function () {
    var tmp0_elvis_lhs = this.kp_1;
    return tmp0_elvis_lhs == null ? this.jp_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.c1u_1 = delegate;
    this.d1u_1 = invokeImmediately;
    this.e1u_1 = this.d1u_1 ? this : new JsMainDispatcher(this.c1u_1, true);
  }
  protoOf(JsMainDispatcher).bu = function () {
    return this.e1u_1;
  };
  protoOf(JsMainDispatcher).cp = function (context) {
    return !this.d1u_1;
  };
  protoOf(JsMainDispatcher).dp = function (context, block) {
    return this.c1u_1.dp(context, block);
  };
  protoOf(JsMainDispatcher).ep = function (context, block) {
    return this.c1u_1.ep(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.cu();
    return tmp0_elvis_lhs == null ? this.c1u_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).dp = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.j1u_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.j1u_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.j1u_1, this.j1u_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.j1u_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).m1u = function () {
    process.nextTick(this.t1u_1.q1u_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).m1u = function () {
    setTimeout(this.t1u_1.q1u_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.z1u();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue($outer) {
    this.r1u_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.q1u_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).a1v = function () {
    this.r1u_1.m1u();
  };
  protoOf(ScheduledMessageQueue).b1v = function () {
    setTimeout(this.q1u_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.go();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.nm(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.t1u_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).dp = function (context, block) {
    this.t1u_1.n1v(block);
  };
  protoOf(SetTimeoutBasedDispatcher).np = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).mp = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new ClearTimeout(handle);
    continuation.kl(tmp$ret$1);
  };
  function MessageQueue() {
    this.w1u_1 = ArrayDeque_init_$Create$();
    this.x1u_1 = 16;
    this.y1u_1 = false;
  }
  protoOf(MessageQueue).n = function () {
    return this.w1u_1.wc_1;
  };
  protoOf(MessageQueue).c1v = function (index, element) {
    this.w1u_1.y1(index, element);
  };
  protoOf(MessageQueue).y1 = function (index, element) {
    return this.c1v(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).d1v = function (element) {
    return this.w1u_1.s(element);
  };
  protoOf(MessageQueue).s = function (element) {
    return this.d1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).e1v = function (index, elements) {
    return this.w1u_1.a2(index, elements);
  };
  protoOf(MessageQueue).a2 = function (index, elements) {
    return this.e1v(index, elements);
  };
  protoOf(MessageQueue).f1v = function (elements) {
    return this.w1u_1.z(elements);
  };
  protoOf(MessageQueue).z = function (elements) {
    return this.f1v(elements);
  };
  protoOf(MessageQueue).c1 = function () {
    this.w1u_1.c1();
  };
  protoOf(MessageQueue).g1v = function (element) {
    return this.w1u_1.r(element);
  };
  protoOf(MessageQueue).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.g1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).h1v = function (elements) {
    return this.w1u_1.d1(elements);
  };
  protoOf(MessageQueue).d1 = function (elements) {
    return this.h1v(elements);
  };
  protoOf(MessageQueue).i1 = function (index) {
    return this.w1u_1.i1(index);
  };
  protoOf(MessageQueue).i1v = function (element) {
    return this.w1u_1.b2(element);
  };
  protoOf(MessageQueue).b2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.i1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).e1 = function () {
    return this.w1u_1.e1();
  };
  protoOf(MessageQueue).v = function () {
    return this.w1u_1.v();
  };
  protoOf(MessageQueue).j1v = function (element) {
    return this.w1u_1.c2(element);
  };
  protoOf(MessageQueue).c2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.j1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).d2 = function (index) {
    return this.w1u_1.d2(index);
  };
  protoOf(MessageQueue).k1v = function (element) {
    return this.w1u_1.t(element);
  };
  protoOf(MessageQueue).t = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.k1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).k1 = function (index) {
    return this.w1u_1.k1(index);
  };
  protoOf(MessageQueue).l1v = function (elements) {
    return this.w1u_1.b1(elements);
  };
  protoOf(MessageQueue).b1 = function (elements) {
    return this.l1v(elements);
  };
  protoOf(MessageQueue).m1v = function (index, element) {
    return this.w1u_1.o(index, element);
  };
  protoOf(MessageQueue).o = function (index, element) {
    return this.m1v(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).e2 = function (fromIndex, toIndex) {
    return this.w1u_1.e2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).n1v = function (element) {
    this.d1v(element);
    if (!this.y1u_1) {
      this.y1u_1 = true;
      this.a1v();
    }
  };
  protoOf(MessageQueue).z1u = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.x1u_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.go();
        }
         while (inductionVariable < times);
    }finally {
      if (this.e1()) {
        this.y1u_1 = false;
      } else {
        this.b1v();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).db();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.o1v_1 = handle;
  }
  protoOf(ClearTimeout).gk = function () {
    clearTimeout(this.o1v_1);
  };
  protoOf(ClearTimeout).hk = function (cause) {
    this.gk();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.hk(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.o1v_1 + ']';
  };
  function WindowClearTimeout($outer, handle) {
    this.q1v_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).gk = function () {
    this.q1v_1.s1v_1.clearTimeout(this.o1v_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.nm(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.go();
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.s1v_1 = window_0;
    this.t1v_1 = new WindowMessageQueue(this.s1v_1);
  }
  protoOf(WindowDispatcher).dp = function (context, block) {
    return this.t1v_1.n1v(block);
  };
  protoOf(WindowDispatcher).mp = function (timeMillis, continuation) {
    var handle = this.s1v_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new WindowClearTimeout(this, handle);
    continuation.kl(tmp$ret$1);
  };
  protoOf(WindowDispatcher).np = function (timeMillis, block, context) {
    var handle = this.s1v_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.x1v_1 ? event.data == this$0.y1v_1 : false) {
        event.stopPropagation();
        this$0.z1u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.z1u();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.x1v_1 = window_0;
    this.y1v_1 = 'dispatchCoroutine';
    this.x1v_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).a1v = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).b1v = function () {
    this.x1v_1.postMessage(this.y1v_1, '*');
  };
  function await_0(_this__u8e3s4, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.jl();
    // Inline function 'kotlinx.coroutines.await.<anonymous>' call
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.ll();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.v6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.v6(tmp$ret$0);
      return Unit_instance;
    };
  }
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_instance;
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    captureStack(this, AbortFlowException);
    this.b1g_1 = owner;
  }
  function ChildCancelledException() {
    CancellationException_init_$Init$('Child of the scoped flow was cancelled', this);
    captureStack(this, ChildCancelledException);
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.x15_1 = collector;
    this.y15_1 = collectContext;
    var tmp = this;
    tmp.z15_1 = this.y15_1.df(0, SafeCollector$collectContextSize$lambda);
    this.a16_1 = null;
  }
  protoOf(SafeCollector).t13 = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.u6();
    ensureActive(currentContext);
    if (!(this.a16_1 === currentContext)) {
      checkContext(this, currentContext);
      this.a16_1 = currentContext;
    }
    return this.x15_1.t13(value, $completion);
  };
  protoOf(SafeCollector).b16 = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function propagateExceptionFinalResort(exception) {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    console.error(exception);
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).zk = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.vk_1 = this;
    this.wk_1 = this;
    this.xk_1 = false;
  }
  protoOf(LinkedListNode).yk = function (node) {
    var prev = this.wk_1;
    node.vk_1 = this;
    node.wk_1 = prev;
    prev.vk_1 = node;
    this.wk_1 = node;
  };
  protoOf(LinkedListNode).zk = function () {
    return this.al();
  };
  protoOf(LinkedListNode).gk = function () {
    this.zk();
  };
  protoOf(LinkedListNode).al = function () {
    if (this.xk_1)
      return false;
    var prev = this.wk_1;
    var next = this.vk_1;
    prev.vk_1 = next;
    next.wk_1 = prev;
    this.xk_1 = true;
    return true;
  };
  protoOf(LinkedListNode).bl = function (node) {
    if (!(this.vk_1 === this))
      return false;
    this.yk(node);
    return true;
  };
  function LocalAtomicInt(value) {
    this.v1e_1 = value;
  }
  protoOf(LocalAtomicInt).w1e = function () {
    this.v1e_1 = this.v1e_1 - 1 | 0;
    return this.v1e_1;
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.cq_1 = null;
  }
  protoOf(CommonThreadLocal).dq = function () {
    var tmp = this.cq_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).eq = function (value) {
    this.cq_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).ri = invokeOnCompletion$default;
  protoOf(JobSupport).wi = cancel$default;
  protoOf(JobSupport).ef = plus;
  protoOf(JobSupport).ob = get_0;
  protoOf(JobSupport).df = fold;
  protoOf(JobSupport).cf = minusKey_0;
  protoOf(CancellableContinuationImpl).mm = cancel$default_0;
  protoOf(CoroutineDispatcher).ob = get;
  protoOf(CoroutineDispatcher).cf = minusKey;
  protoOf(BufferedChannel).w11 = close$default;
  protoOf(ChannelCoroutine).w11 = close$default;
  protoOf(ChannelFlow).v14 = fuse$default;
  protoOf(SharedFlowImpl).v14 = fuse$default;
  protoOf(StateFlowImpl).v14 = fuse$default;
  protoOf(ReadonlyStateFlow).v14 = fuse$default;
  protoOf(CancellableContinuationWithOwner).mm = cancel$default_0;
  protoOf(MutexImpl).p1s = lock$default;
  protoOf(MutexImpl).r1s = unlock$default;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  SENDERS_COUNTER_MASK = new Long(-1, 268435455);
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  NopCollector_instance = new NopCollector();
  MODE_CANCELLABLE = 1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNINITIALIZED = -1;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.b = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.c = combineInternal;
  _.$_$.d = emitAll_0;
  _.$_$.e = awaitAll;
  _.$_$.f = await_0;
  _.$_$.g = cancelAndJoin;
  _.$_$.h = coroutineScope;
  _.$_$.i = delay;
  _.$_$.j = withContext;
  _.$_$.k = withTimeoutOrNull;
  _.$_$.l = yield_0;
  _.$_$.m = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.n = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.o = Factory_getInstance;
  _.$_$.p = Companion_getInstance_2;
  _.$_$.q = Key_instance_1;
  _.$_$.r = Key_instance_2;
  _.$_$.s = Dispatchers_getInstance;
  _.$_$.t = Key_instance_3;
  _.$_$.u = Channel;
  _.$_$.v = cancelConsumed;
  _.$_$.w = FlowCollector;
  _.$_$.x = MutableSharedFlow;
  _.$_$.y = MutableStateFlow;
  _.$_$.z = asStateFlow;
  _.$_$.a1 = combine_0;
  _.$_$.b1 = combine_1;
  _.$_$.c1 = combine;
  _.$_$.d1 = distinctUntilChanged;
  _.$_$.e1 = filterNotNull;
  _.$_$.f1 = flow;
  _.$_$.g1 = onCompletion;
  _.$_$.h1 = receiveAsFlow;
  _.$_$.i1 = scan;
  _.$_$.j1 = stateIn;
  _.$_$.k1 = transformLatest;
  _.$_$.l1 = Mutex_0;
  _.$_$.m1 = CancellableContinuationImpl;
  _.$_$.n1 = CompletableDeferred;
  _.$_$.o1 = CoroutineDispatcher;
  _.$_$.p1 = CoroutineScope_0;
  _.$_$.q1 = CoroutineScope;
  _.$_$.r1 = invokeOnTimeout;
  _.$_$.s1 = Delay;
  _.$_$.t1 = Job_0;
  _.$_$.u1 = get_MODE_CANCELLABLE;
  _.$_$.v1 = MainScope;
  _.$_$.w1 = Runnable;
  _.$_$.x1 = SupervisorJob;
  _.$_$.y1 = async;
  _.$_$.z1 = cancel;
  _.$_$.a2 = cancel_0;
  _.$_$.b2 = cancel_1;
  _.$_$.c2 = get_isActive_0;
  _.$_$.d2 = get_isActive;
  _.$_$.e2 = get_job;
  _.$_$.f2 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
